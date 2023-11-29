/**
 * External dependencies
 */
import { getContext, store } from '@woocommerce/interactivity';

/**
 * Internal dependencies
 */
import { HTMLElementEvent } from '../../../assets/js/types';

/**
 * Internal dependencies
 */
import './style.scss';

export type CheckboxListContext = {
	items: {
		id: string;
		label: string;
		value: string;
		checked: boolean;
	}[];
	// currentItem: {
	// 	label: string;
	// 	value: string;
	// };
	// selectedItem: {
	// 	label: string | null;
	// 	value: string | null;
	// };
	// hoveredItem: {
	// 	label: string | null;
	// 	value: string | null;
	// };
	// isOpen: boolean;
};

store( 'woocommerce/interactivity-checkbox-list', {
	state: {},
	actions: {
		selectCheckboxItem: ( event: HTMLElementEvent< HTMLInputElement > ) => {
			const context = getContext< CheckboxListContext >();
			const value = event.target.value;

			context.items = context.items.map( ( item ) => {
				if ( item.value.toString() === value ) {
					return {
						...item,
						checked: ! item.checked,
					};
				}
				return item;
			} );
		},
	},
} );
