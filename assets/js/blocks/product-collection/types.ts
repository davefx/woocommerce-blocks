/**
 * External dependencies
 */
import type { BlockEditProps } from '@wordpress/blocks';
import { type AttributeMetadata } from '@woocommerce/types';

export interface ProductCollectionAttributes {
	query: ProductCollectionQuery;
	queryId: number;
	queryContext: [
		{
			page: number;
		}
	];
	templateSlug: string;
	displayLayout: ProductCollectionDisplayLayout;
	tagName: string;
	convertedFromProducts: boolean;
	collection?: string;
}

export enum LayoutOptions {
	GRID = 'flex',
	STACK = 'list',
}

export interface ProductCollectionDisplayLayout {
	type: LayoutOptions;
	columns: number;
	shrinkColumns: boolean;
}

export enum ETimeFrameOperator {
	IN = 'in',
	NOT_IN = 'not-in',
}

export interface TimeFrame {
	operator?: ETimeFrameOperator;
	value?: string;
}

export interface ProductCollectionQuery {
	exclude: string[];
	inherit: boolean | null;
	offset: number;
	order: TProductCollectionOrder;
	orderBy: TProductCollectionOrderBy;
	pages: number;
	perPage: number;
	postType: string;
	search: string;
	taxQuery: Record< string, number[] >;
	/**
	 * If true, show only featured products.
	 */
	featured: boolean;
	timeFrame: TimeFrame | undefined;
	woocommerceOnSale: boolean;
	/**
	 * Filter products by their stock status.
	 *
	 * Will generate the following `meta_query`:
	 *
	 * ```
	 * array(
	 *   'key'     => '_stock_status',
	 *   'value'   => (array) $stock_statuses,
	 *   'compare' => 'IN',
	 * ),
	 * ```
	 */
	woocommerceStockStatus?: string[];
	woocommerceAttributes?: AttributeMetadata[];
	isProductCollectionBlock?: boolean;
	woocommerceHandPickedProducts?: string[];
}

export type ProductCollectionEditComponentProps =
	BlockEditProps< ProductCollectionAttributes > & {
		openPatternSelectionModal: () => void;
	};

export type TProductCollectionOrder = 'asc' | 'desc';
export type TProductCollectionOrderBy =
	| 'date'
	| 'title'
	| 'popularity'
	| 'rating';

export type DisplayLayoutControlProps = {
	displayLayout: ProductCollectionDisplayLayout;
	setAttributes: ( attrs: Partial< ProductCollectionAttributes > ) => void;
};
export type QueryControlProps = {
	query: ProductCollectionQuery;
	setQueryAttribute: ( attrs: Partial< ProductCollectionQuery > ) => void;
};

export enum CoreCollectionNames {
	PRODUCT_CATALOG = 'woocommerce-blocks/product-collection/product-catalog',
	BEST_SELLERS = 'woocommerce-blocks/product-collection/best-sellers',
	FEATURED = 'woocommerce-blocks/product-collection/featured',
	NEW_ARRIVALS = 'woocommerce-blocks/product-collection/new-arrivals',
	ON_SALE = 'woocommerce-blocks/product-collection/on-sale',
	TOP_RATED = 'woocommerce-blocks/product-collection/top-rated',
}

export enum CoreFilterNames {
	ATTRIBUTES = 'attributes',
	CREATED = 'created',
	FEATURED = 'featured',
	HAND_PICKED = 'hand-picked',
	INHERIT = 'inherit',
	KEYWORD = 'keyword',
	ON_SALE = 'on-sale',
	ORDER = 'order',
	STOCK_STATUS = 'stock-status',
	TAXONOMY = 'taxonomy',
}

export type CollectionName = CoreCollectionNames | string;
export type FilterName = CoreFilterNames | string;
