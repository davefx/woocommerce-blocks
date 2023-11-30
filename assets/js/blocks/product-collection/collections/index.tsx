/**
 * External dependencies
 */
import {
	type BlockVariation,
	registerBlockVariation,
	BlockAttributes,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import blockJson from '../block.json';
import productCatalog from './product-catalog';
import newArrivals from './new-arrivals';
import topRated from './top-rated';
import bestSellers from './best-sellers';
import onSale from './on-sale';
import featured from './featured';

export const collections = {
	productCatalog,
	newArrivals,
	topRated,
	bestSellers,
	onSale,
	featured,
};

const collectionsArray: BlockVariation[] = [
	featured,
	topRated,
	onSale,
	bestSellers,
	newArrivals,
];

export const registerCollections = () => {
	collectionsArray.forEach( ( collection ) => {
		const isActive = (
			blockAttrs: BlockAttributes,
			variationAttributes: BlockAttributes
		) => {
			return blockAttrs.collection === variationAttributes.collection;
		};

		registerBlockVariation( blockJson.name, {
			isActive,
			...collection,
		} );
	} );
};

export const getCollectionByName = ( collectionName ) => {
	return collectionsArray.find( ( { name } ) => name === collectionName );
};

export const getUnchangeableFilters = ( collectionName ) => {
	const collection = getCollectionByName( collectionName );

	if ( ! collection ) {
		return [];
	}

	return collection.unchangeableFilters;
};

export default registerCollections;
