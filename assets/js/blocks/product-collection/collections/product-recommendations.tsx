/**
 * External dependencies
 */
import { InnerBlockTemplate } from '@wordpress/blocks';
import { Icon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import {
	DEFAULT_ATTRIBUTES,
	INNER_BLOCKS_PRODUCT_TEMPLATE,
} from '../constants';

const collection = {
	name: 'woocommerce-blocks/product-collection/product-recommendations',
	title: 'Product Recommendations',
	icon: <Icon icon={ 'star-filled' } />,
	description: 'Display a grid of recommended products.',
};

const attributes = {
	...DEFAULT_ATTRIBUTES,
	displayLayout: {
		type: 'flex',
		columns: 3,
	},
	query: {
		...DEFAULT_ATTRIBUTES.query,
		inherit: false,
		orderBy: 'date',
		order: 'desc',
		perPage: 9,
		pages: 1,
	},
	collection: collection.name,
};

const innerBlocks: InnerBlockTemplate[] = [
	[
		'core/heading',
		{ textAlign: 'center', content: 'Recommended products' },
	],
	[
		'core/paragraph',
		{
			align: 'center',
			content: 'Here are the recommended products in our store',
			style: { spacing: { margin: { bottom: 'var:preset|spacing|30' } } },
		},
	],
	INNER_BLOCKS_PRODUCT_TEMPLATE,
];

export default {
	...collection,
	attributes,
	innerBlocks,
};
