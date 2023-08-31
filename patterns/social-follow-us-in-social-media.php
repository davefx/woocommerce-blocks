<?php
/**
 * Title: Social: Follow us in social media
 * Slug: woocommerce-blocks/social-follow-us-in-social-media
 * Categories: WooCommerce
 */

use Automattic\WooCommerce\Blocks\Patterns\PatternImages;
$images = PatternImages::get_pattern_images( 'woocommerce-blocks/product-collections-featured-collections' );

$image1 = get_image_url( $images, 0, 'images/pattern-placeholders/office.png' );
$image2 = get_image_url( $images, 1, 'images/pattern-placeholders/living-room.png' );
$image3 = get_image_url( $images, 2, 'images/pattern-placeholders/living-room-sofa.png' );
$image4 = get_image_url( $images, 3, 'images/pattern-placeholders/dining-room.png' );
?>

<!-- wp:columns {"verticalAlignment":null,"align":"wide"} -->
<div class="wp-block-columns alignwide">
	<!-- wp:column {"verticalAlignment":"bottom","width":"66.66%","layout":{"type":"constrained"}} -->
	<div class="wp-block-column is-vertically-aligned-bottom" style="flex-basis:66.66%">
		<!-- wp:heading {"level":3,"align":"wide"} -->
		<h3 class="wp-block-heading alignwide"><?php esc_html_e( 'Follow us in social media', 'woo-gutenberg-products-block' ); ?></h3>
		<!-- /wp:heading --></div>
	<!-- /wp:column -->

	<!-- wp:column {"verticalAlignment":"center","width":"33.33%"} -->
	<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:33.33%">
		<!-- wp:social-links {"iconColor":"contrast","openInNewTab":true,"style":{"spacing":{"blockGap":{"top":"0"}}},"className":"is-style-logos-only","layout":{"type":"flex","justifyContent":"right","orientation":"horizontal"}} -->
		<ul class="wp-block-social-links has-icon-color is-style-logos-only">
			<!-- wp:social-link {"url":"<?php echo esc_url( 'https://twitter.com/' ); ?>","service":"twitter"} /-->

			<!-- wp:social-link {"url":"<?php echo esc_url( 'https://www.instagram.com/' ); ?>","service":"instagram"} /-->

			<!-- wp:social-link {"url":"<?php echo esc_url( 'https://www.facebook.com/' ); ?>","service":"facebook"} /-->

			<!-- wp:social-link {"url":"<?php echo esc_url( 'https://www.twitch.tv/' ); ?>","service":"twitch"} /-->
		</ul>
		<!-- /wp:social-links -->
	</div>
	<!-- /wp:column -->
</div>
<!-- /wp:columns -->

<!-- wp:columns {"align":"wide","style":{"spacing":{"margin":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40"}}}} -->
<div class="wp-block-columns alignwide" style="margin-top:var(--wp--preset--spacing--40);margin-bottom:var(--wp--preset--spacing--40)">
	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
		<figure class="wp-block-image size-large">
			<img src="<?php echo esc_url( $image1 ); ?>" alt="<?php esc_attr_e( 'Placeholder image used to represent products being showcased as furniture in an office.', 'woo-gutenberg-products-block' ); ?>" />
		</figure>
		<!-- /wp:image -->
	</div>
	<!-- /wp:column -->

	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
		<figure class="wp-block-image size-large">
			<img src="<?php echo esc_url( $image2 ); ?>" alt="<?php esc_attr_e( 'Placeholder image used to represent products being showcased as furniture in a living room.', 'woo-gutenberg-products-block' ); ?>" />
		</figure>
		<!-- /wp:image -->
	</div>
	<!-- /wp:column -->

	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
		<figure class="wp-block-image size-large">
			<img src="<?php echo esc_url( $image3 ); ?>" alt="<?php esc_attr_e( 'Placeholder image used to represent products being showcased as furniture in a living room with gray sofa.', 'woo-gutenberg-products-block' ); ?>" />
		</figure>
		<!-- /wp:image -->
	</div>
	<!-- /wp:column -->

	<!-- wp:column -->
	<div class="wp-block-column">
		<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
		<figure class="wp-block-image size-large">
			<img src="<?php echo esc_url( $image4 ); ?>" alt="<?php esc_attr_e( 'Placeholder image used to represent products being showcased as furniture in a dining room.', 'woo-gutenberg-products-block' ); ?>" />
		</figure>
		<!-- /wp:image -->
	</div>
	<!-- /wp:column -->
</div>
<!-- /wp:columns -->
