/**
 * External dependencies
 */
import { Icon } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { totals } from '~/icons';
import { Edit, Save } from './edit';
import attributes from './attributes';

registerBlockType( 'woocommerce/checkout-order-summary-taxes-block', {
	icon: {
		src: (
			<Icon
				icon={ totals }
				className="wc-block-editor-components-block-icon"
			/>
		),
	},
	attributes,
	edit: Edit,
	save: Save,
} );
