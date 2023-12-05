/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import { Disabled } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { EditProps } from './types';
import { Inspector } from './components/inspector';
import { RemovableListItem } from './components/removable-list-item';

const Edit = ( props: EditProps ) => {
	const { displayStyle } = props.attributes;

	const blockProps = useBlockProps( {
		className: 'wc-block-active-filters',
	} );

	return (
		<div { ...blockProps }>
			<Inspector { ...props } />
			<Disabled>
				<ul
					className={ classNames( 'wc-block-active-filters__list', {
						'wc-block-active-filters__list--chips':
							displayStyle === 'chips',
					} ) }
				>
					<RemovableListItem
						type={ __( 'Size', 'woo-gutenberg-products-block' ) }
						name={ __( 'Small', 'woo-gutenberg-products-block' ) }
						displayStyle={ displayStyle }
					/>
					<RemovableListItem
						type={ __( 'Color', 'woo-gutenberg-products-block' ) }
						name={ __( 'Blue', 'woo-gutenberg-products-block' ) }
						displayStyle={ displayStyle }
					/>
				</ul>
			</Disabled>
		</div>
	);
};

export default Edit;
