/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

const DisplayLayoutControl = ( props: {
	openPatternSelectionModal: () => void;
} ) => {
	return (
		<ToolbarGroup>
			<ToolbarButton onClick={ props.openPatternSelectionModal }>
				{ __( 'Choose collection', 'woo-gutenberg-products-block' ) }
			</ToolbarButton>
		</ToolbarGroup>
	);
};

export default DisplayLayoutControl;
