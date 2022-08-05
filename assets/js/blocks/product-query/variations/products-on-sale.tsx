/**
 * External dependencies
 */
import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { Icon, percent } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { QUERY_DEFAULT_ATTRIBUTES } from '../constants';

registerBlockVariation( 'core/query', {
	name: 'woocommerce/query-on-sale',
	title: __( 'Products on Sale', 'woo-gutenberg-products-block' ),
	isActive: ( blockAttributes ) =>
		blockAttributes.__woocommerceVariationProps.name === 'query-on-sale' ||
		blockAttributes.__woocommerceVariationProps.query.onSale === true,
	icon: {
		src: (
			<Icon
				icon={ percent }
				className="wc-block-editor-components-block-icon wc-block-editor-components-block-icon--percent"
			/>
		),
	},
	attributes: {
		...QUERY_DEFAULT_ATTRIBUTES,
		__woocommerceVariationProps: {
			name: 'query-on-sale',
			query: {
				onSale: true,
			},
		},
	},
	innerBlocks: [
		[
			'core/post-template',
			{},
			[ [ 'core/post-title' ], [ 'woocommerce/product-image' ] ],
		],
		[ 'core/query-pagination' ],
		[ 'core/query-no-results' ],
	],
	scope: [ 'block', 'inserter' ],
} );
