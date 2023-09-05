/**
 * External dependencies
 */
import { ProductCollectionQuery } from '@woocommerce/blocks/product-collection/types';
import { HTMLElementEvent } from '@woocommerce/types';

export interface PriceFilterState {
	filters: {
		minPrice: number;
		maxPrice: number;
		minRange: number;
		maxRange: number;
		rangeStyle: string;
		isMinActive: boolean;
		isMaxActive: boolean;
	};
}

export interface InputActionProps {
	state: PriceFilterState;
	event: HTMLElementEvent< HTMLInputElement >;
}

export interface MouseActionProps extends InputActionProps {
	event: InputActionProps[ 'event' ] & MouseEvent;
}

export interface EditProps {
	context: {
		query: Partial< ProductCollectionQuery >;
	};
}

export type BlockProps = Partial< PriceFilterState[ 'filters' ] > & {
	isEditor: boolean;
};
