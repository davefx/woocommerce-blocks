/* tslint:disable */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { SlotFillProvider } from '@woocommerce/blocks-checkout';
import { useEffect, useRef } from '@wordpress/element';
import { getQueryArg } from '@wordpress/url';
import { dispatch, select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { previewCart } from '~/resource-previews';
import { EditorProvider, CartProvider } from '~/base/context';
import BlockErrorBoundary from '~/base/components/block-error-boundary';
import './inner-blocks';
import './editor.scss';
import {
	addClassToBody,
	useBlockPropsWithLocking,
	BlockSettings,
} from '../cart-checkout-shared';
import '../cart-checkout-shared/sidebar-notices';
import '../cart-checkout-shared/view-switcher';
import { CartBlockContext } from './context';

// This is adds a class to body to signal if the selected block is locked
addClassToBody();

// Array of allowed block names.
const ALLOWED_BLOCKS = [
	'woocommerce/filled-cart-block',
	'woocommerce/empty-cart-block',
];

export const Edit = ( { clientId, className, attributes, setAttributes } ) => {
	const { hasDarkControls, currentView, isPreview = false } = attributes;
	const defaultTemplate = [
		[ 'woocommerce/filled-cart-block', {}, [] ],
		[ 'woocommerce/empty-cart-block', {}, [] ],
	];
	const blockProps = useBlockPropsWithLocking( {
		className: classnames( className, 'wp-block-woocommerce-cart', {
			'is-editor-preview': isPreview,
		} ),
	} );

	// This focuses on the block when a certain query param is found. This is used on the link from the task list.
	const focus = useRef( getQueryArg( window.location.href, 'focus' ) );

	useEffect( () => {
		if (
			focus.current === 'cart' &&
			! select( 'core/block-editor' ).hasSelectedBlock()
		) {
			dispatch( 'core/block-editor' ).selectBlock( clientId );
			dispatch( 'core/interface' ).enableComplementaryArea(
				'core/edit-site',
				'edit-site/block-inspector'
			);
		}
	}, [ clientId ] );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<BlockSettings
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
			<BlockErrorBoundary
				header={ __(
					'Cart Block Error',
					'woo-gutenberg-products-block'
				) }
				text={ __(
					'There was an error whilst rendering the cart block. If this problem continues, try re-creating the block.',
					'woo-gutenberg-products-block'
				) }
				showErrorMessage={ true }
				errorMessagePrefix={ __(
					'Error message:',
					'woo-gutenberg-products-block'
				) }
			>
				<EditorProvider
					previewData={ { previewCart } }
					currentView={ currentView }
					isPreview={ isPreview }
				>
					<CartBlockContext.Provider
						value={ {
							hasDarkControls,
						} }
					>
						<SlotFillProvider>
							<CartProvider>
								<InnerBlocks
									allowedBlocks={ ALLOWED_BLOCKS }
									template={ defaultTemplate }
									templateLock="insert"
								/>
							</CartProvider>
						</SlotFillProvider>
					</CartBlockContext.Provider>
				</EditorProvider>
			</BlockErrorBoundary>
		</div>
	);
};

export const Save = () => {
	return (
		<div
			{ ...useBlockProps.save( {
				className: 'is-loading',
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
};
