<?php

namespace Automattic\WooCommerce\Blocks\Patterns;

use Automattic\WooCommerce\Blocks\AI\Connection;
use WP_Error;
/**
 * Pattern Images class.
 */
class ProductUpdater {

	/**
	 * Generate AI content and assign AI-managed images to Products.
	 *
	 * @param Connection $ai_connection The AI connection.
	 * @param string     $token The JWT token.
	 * @param array      $images The array of images.
	 * @param string     $business_description The business description.
	 *
	 * @return array|WP_Error The generated content for the products. An error if the content could not be generated.
	 */
	public function generate_content( $ai_connection, $token, $images, $business_description ) {
		if ( empty( $business_description ) ) {
			return new \WP_Error( 'missing_business_description', __( 'No business description provided for generating AI content.', 'woo-gutenberg-products-block' ) );
		}

		$last_business_description = get_option( 'last_business_description_with_ai_content_generated' );

		if ( $last_business_description === $business_description ) {
			if ( is_string( $business_description ) && is_string( $last_business_description ) ) {
				return array(
					'product_content' => array(),
				);
			} else {
				return new \WP_Error( 'business_description_not_found', __( 'No business description provided for generating AI content.', 'woo-gutenberg-products-block' ) );
			}
		}

		$dummy_products_to_update = $this->fetch_dummy_products_to_update();

		if ( is_wp_error( $dummy_products_to_update ) ) {
			return $dummy_products_to_update;
		}

		$products_information_list = $this->assign_ai_selected_images_to_dummy_produts( $dummy_products_to_update, $images );

		return $this->assign_ai_generated_content_to_dummy_products( $ai_connection, $token, $products_information_list, $business_description );
	}

	/**
	 * Update the dummy products with the content from the information list.
	 *
	 * @param array $dummy_products_to_update The dummy products to update.
	 * @param array $products_information_list The products information list.
	 */
	public function update_dummy_products( $dummy_products_to_update, $products_information_list ) {
		$i = 0;
		foreach ( $dummy_products_to_update as $dummy_product ) {
			if ( ! isset( $products_information_list[ $i ] ) ) {
				continue;
			}

			$this->update_product_content( $dummy_product, $products_information_list[ $i ] );
			++$i;
		}
	}

	/**
	 * Return all dummy products that were not modified by the store owner.
	 *
	 * @return array|WP_Error An array with the dummy products that need to have their content updated by AI.
	 */
	public function fetch_dummy_products_to_update() {
		$real_products       = $this->fetch_product_ids();
		$real_products_count = count( $real_products );

		if ( is_array( $real_products ) && $real_products_count > 6 ) {
			return array(
				'product_content' => array(),
			);
		}

		$dummy_products       = $this->fetch_product_ids( 'dummy' );
		$dummy_products_count = count( $dummy_products );
		$products_to_create   = max( 6, 6 - $real_products_count - $dummy_products_count );

		while ( $products_to_create > 0 ) {
			$this->create_new_product();
			$products_to_create--;
		}

		// Identify dummy products that need to have their content updated.
		$dummy_products_ids = $this->fetch_product_ids( 'dummy' );
		if ( ! is_array( $dummy_products_ids ) ) {
			return new \WP_Error( 'failed_to_fetch_dummy_products', __( 'Failed to fetch dummy products.', 'woo-gutenberg-products-block' ) );
		}

		$dummy_products = array_map(
			function ( $product ) {
				return wc_get_product( $product->ID );
			},
			$dummy_products_ids
		);

		$dummy_products_to_update = [];
		foreach ( $dummy_products as $dummy_product ) {
			if ( ! $dummy_product instanceof \WC_Product ) {
				continue;
			}

			$should_update_dummy_product = $this->should_update_dummy_product( $dummy_product );

			if ( $should_update_dummy_product ) {
				$dummy_products_to_update[] = $dummy_product;
			}
		}

		return $dummy_products_to_update;
	}

	/**
	 * Verify if the dummy product should have its content generated and managed by AI.
	 *
	 * @param \WC_Product $dummy_product The dummy product.
	 *
	 * @return bool
	 */
	public function should_update_dummy_product( $dummy_product ): bool {
		$current_product_hash     = $this->get_hash_for_product( $dummy_product );
		$ai_modified_product_hash = $this->get_hash_for_ai_modified_product( $dummy_product );

		$date_created  = $dummy_product->get_date_created();
		$date_modified = $dummy_product->get_date_modified();

		if ( ! $date_created instanceof \WC_DateTime || ! $date_modified instanceof \WC_DateTime ) {
			return false;
		}

		$formatted_date_created  = $dummy_product->get_date_created()->date( 'Y-m-d H:i:s' );
		$formatted_date_modified = $dummy_product->get_date_modified()->date( 'Y-m-d H:i:s' );

		$timestamp_created  = strtotime( $formatted_date_created );
		$timestamp_modified = strtotime( $formatted_date_modified );

		$dummy_product_not_modified = abs( $timestamp_modified - $timestamp_created ) < 60;

		if ( $current_product_hash === $ai_modified_product_hash || $dummy_product_not_modified ) {
			return true;
		}

		return false;
	}

	/**
	 * Creates a new product and assigns the _headstart_post meta to it.
	 *
	 * @return bool|int
	 */
	public function create_new_product() {
		$product      = new \WC_Product();
		$random_price = wp_rand( 5, 50 );

		$product->set_name( 'My Awesome Product' );
		$product->set_status( 'publish' );
		$product->set_description( 'Product description' );
		$product->set_price( $random_price );
		$product->set_regular_price( $random_price );

		$saved_product = $product->save();

		return update_post_meta( $saved_product, '_headstart_post', true );
	}

	/**
	 * Return all existing products that have the _headstart_post meta assigned to them.
	 *
	 * @param string $type The type of products to fetch.
	 *
	 * @return array|null
	 */
	public function fetch_product_ids( $type = 'user_created' ) {
		global $wpdb;

		if ( 'user_created' === $type ) {
			return $wpdb->get_results( $wpdb->prepare( "SELECT ID FROM {$wpdb->posts} WHERE ID NOT IN ( SELECT p.ID FROM {$wpdb->posts} p JOIN {$wpdb->postmeta} pm ON p.ID = pm.post_id WHERE pm.meta_key = %s AND p.post_type = 'product' AND p.post_status = 'publish' ) AND post_type = 'product' AND post_status = 'publish' LIMIT 6", '_headstart_post' ) );
		}

		return $wpdb->get_results( $wpdb->prepare( "SELECT p.ID FROM {$wpdb->posts} p JOIN {$wpdb->postmeta} pm ON p.ID = pm.post_id WHERE pm.meta_key = %s AND p.post_type = 'product' AND p.post_status = 'publish'", '_headstart_post' ) );
	}

	/**
	 * Return the hash for a product based on its name, description and image_id.
	 *
	 * @param \WC_Product $product The product.
	 *
	 * @return false|string
	 */
	public function get_hash_for_product( $product ) {
		if ( ! $product instanceof \WC_Product ) {
			return false;
		}

		return md5( $product->get_name() . $product->get_description() . $product->get_image_id() );
	}

	/**
	 * Return the hash for a product that had its content AI-generated.
	 *
	 * @param \WC_Product $product The product.
	 *
	 * @return false|mixed
	 */
	public function get_hash_for_ai_modified_product( $product ) {
		if ( ! $product instanceof \WC_Product ) {
			return false;
		}

		return get_post_meta( $product->get_id(), '_ai_generated_content', true );
	}

	/**
	 * Create a hash with the AI-generated content and save it as a meta for the product.
	 *
	 * @param \WC_Product $product The product.
	 *
	 * @return bool|int
	 */
	public function create_hash_for_ai_modified_product( $product ) {
		if ( ! $product instanceof \WC_Product ) {
			return false;
		}

		$content = $this->get_hash_for_product( $product );

		return update_post_meta( $product->get_id(), '_ai_generated_content', $content );
	}

	/**
	 * Update the product content with the AI-generated content.
	 *
	 * @param array $ai_generated_product_content The AI-generated product content.
	 *
	 * @return string|void
	 */
	public function update_product_content( $ai_generated_product_content ) {
		if ( ! isset( $ai_generated_product_content['product_id'] ) ) {
			return;
		}

		$product = wc_get_product( $ai_generated_product_content['product_id'] );

		if ( ! $product instanceof \WC_Product ) {
			return;
		}

		if ( ! isset( $ai_generated_product_content['image']['src'] ) || ! isset( $ai_generated_product_content['image']['alt'] ) || ! isset( $ai_generated_product_content['title'] ) || ! isset( $ai_generated_product_content['description'] ) ) {
			return;
		}

		$product->set_name( $ai_generated_product_content['title'] );
		$product->set_description( $ai_generated_product_content['description'] );

		require_once ABSPATH . 'wp-admin/includes/media.php';
		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/image.php';

		// Since the media_sideload_image function is expensive and can take longer to complete
		// the process of downloading the external image and uploading it to the media library,
		// here we are increasing the time limit to avoid any issues.
		set_time_limit( 150 );
		wp_raise_memory_limit( 'image' );

		$product_image_id = media_sideload_image( $ai_generated_product_content['image']['src'], $product->get_id(), $ai_generated_product_content['image']['alt'], 'id' );

		if ( is_wp_error( $product_image_id ) ) {
			return $product_image_id->get_error_message();
		}

		$product->set_image_id( $product_image_id );
		$product->save();

		$this->create_hash_for_ai_modified_product( $product );
	}

	/**
	 * Assigns the default content for the products.
	 *
	 * @param array $dummy_products_to_update The dummy products to update.
	 * @param array $ai_selected_images The images' information.
	 *
	 * @return array[]
	 */
	public function assign_ai_selected_images_to_dummy_produts( $dummy_products_to_update, $ai_selected_images ) {
		$products_information_list = [];
		$dummy_products_count      = count( $dummy_products_to_update );
		for ( $i = 0; $i < $dummy_products_count; $i ++ ) {
			$image_src = $ai_selected_images[ $i ]['thumbnails']['medium'] ?? plugins_url( 'woocommerce-blocks/images/block-placeholders/product-image-gallery.svg' );
			$image_alt = $ai_selected_images[ $i ]['title'] ?? '';

			$products_information_list[] = [
				'title'       => 'A product title',
				'description' => 'A product description',
				'image'       => [
					'src' => esc_url( $image_src ),
					'alt' => esc_attr( $image_alt ),
				],
				'product_id'  => $dummy_products_to_update[ $i ]->get_id(),
			];
		}

		return $products_information_list;
	}

	/**
	 * Generate the product content.
	 *
	 * @param Connection $ai_connection The AI connection.
	 * @param string     $token The JWT token.
	 * @param array      $products_information_list The products information list.
	 * @param string     $business_description The business description.
	 *
	 * @return array|int|string|\WP_Error
	 */
	public function assign_ai_generated_content_to_dummy_products( $ai_connection, $token, $products_information_list, $business_description ) {
		if ( empty( $business_description ) ) {
			return new \WP_Error( 'missing_store_description', __( 'The store description is required to generate content for your site.', 'woo-gutenberg-products-block' ) );
		}

		$prompts = [];
		foreach ( $products_information_list as $product_information ) {
			if ( ! empty( $product_information['image']['alt'] ) ) {
				$prompts[] = sprintf( 'Generate the name for a single product under 60 characters that match the following store description: "%1s" and the following image description: "%2s". Do not include any adjectives or descriptions of the qualities of the product.', $business_description, $product_information['image']['alt'] );
			} else {
				$prompts[] = sprintf( 'Generate the name for a single product under 60 characters that match the following store description: "%1s". Do not include any adjectives or descriptions of the qualities of the product.', $business_description );
			}
		}

		$responses  = $ai_connection->fetch_ai_responses( $token, $prompts );
		$error_msgs = [];
		foreach ( $responses as $index => $response ) {
			if ( is_wp_error( $response ) ) {
				$error_msgs[] = $response;
				continue;
			}

			if ( empty( $response ) || ! isset( $response['completion'] ) ) {
				$error_msgs[] = new \WP_Error( 'missing_completion_key', __( 'The response from the AI service is empty or missing the completion key.', 'woo-gutenberg-products-block' ) );
				continue;
			}

			$products_information_list[ $index ]['title'] = str_replace( '"', '', $response['completion'] );
		}

		if ( ! empty( $error_msgs ) ) {
			$error_data = new \WP_Error();
			foreach ( $error_msgs as $msg ) {
				$error_data->add( 'ai_content_generation_error', $msg );
			}

			return $error_data;
		}

		return array(
			'product_content' => $products_information_list,
		);
	}
}
