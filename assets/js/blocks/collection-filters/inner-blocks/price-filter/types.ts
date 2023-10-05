/**
 * External dependencies
 */
import { HTMLElementEvent } from '@woocommerce/types';
import { BlockEditProps } from '@wordpress/blocks';

export type PriceFilterState = {
	minPrice: number;
	maxPrice: number;
	minRange: number;
	maxRange: number;
	formattedMinPrice: string;
	formattedMaxPrice: string;
};

export type StateProps = {
	state: {
		filters: PriceFilterState;
	};
};

export type ActionProps = StateProps & {
	event: HTMLElementEvent< HTMLInputElement >;
};

export type BlockAttributes = {
	filterStyle: string;
	filterData: Partial< PriceFilterState >;
};

export type EditProps = BlockEditProps< BlockAttributes >;

export type SelectOption = {
	label: string;
	value: string;
};
