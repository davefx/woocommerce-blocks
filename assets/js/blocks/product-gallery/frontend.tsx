/**
 * External dependencies
 */
import { store as interactivityApiStore } from '@woocommerce/interactivity';

interface State {
	[ key: string ]: unknown;
}

export interface ProductGalleryInteractivityApiContext {
	woocommerce: {
		selectedImage: string;
		imageId: string;
		visibleImagesIds: string[];
		dialogVisibleImagesIds: string[];
		isDialogOpen: boolean;
		productId: string;
	};
}

export interface ProductGallerySelectors {
	woocommerce: {
		isSelected: ( store: unknown ) => boolean;
		pagerDotFillOpacity: ( store: SelectorsStore ) => number;
		selectedImageIndex: ( store: SelectorsStore ) => number;
		isDialogOpen: ( store: unknown ) => boolean;
	};
}

interface Actions {
	woocommerce: {
		setImageAsSelected: {
			( context: ProductGalleryInteractivityApiContext ): void;
		};
		selectPreviousImage: {
			( store: Store ): void;
		};
		selectNextImage: {
			( store: Store ): void;
		};
	};
}

interface Store {
	state: State;
	context: ProductGalleryInteractivityApiContext;
	selectors: ProductGallerySelectors;
	actions: Actions;
	ref?: HTMLElement;
}

interface Event {
	target: HTMLElement;
	keyCode: number;
}

type SelectorsStore = Pick< Store, 'context' | 'selectors' | 'ref' >;

enum Keys {
	ESC = 27,
	LEFT_ARROW = 37,
	RIGHT_ARROW = 39,
}

interactivityApiStore( {
	state: {},
	effects: {
		woocommerce: {
			watchForChangesOnAddToCartForm: ( store: Store ) => {
				const variableProductCartForm = document.querySelector(
					`form[data-product_id="${ store.context.woocommerce.productId }"]`
				);

				if ( ! variableProductCartForm ) {
					return;
				}

				const observer = new MutationObserver( function ( mutations ) {
					for ( const mutation of mutations ) {
						const mutationTarget = mutation.target as HTMLElement;
						const currentImageAttribute =
							mutationTarget.getAttribute( 'current-image' );
						if (
							mutation.type === 'attributes' &&
							currentImageAttribute &&
							store.context.woocommerce.visibleImagesIds.includes(
								currentImageAttribute
							)
						) {
							store.context.woocommerce.selectedImage =
								currentImageAttribute;
						}
					}
				} );

				observer.observe( variableProductCartForm, {
					attributes: true,
				} );

				return () => {
					observer.disconnect();
				};
			},
			keyboardAccess: ( store: Store ) => {
				const { context, actions } = store;
				let allowNavigation = true;

				const handleKeyEvents = ( event: Event ) => {
					if (
						! allowNavigation ||
						! context.woocommerce?.isDialogOpen
					) {
						return;
					}

					// Disable navigation for a brief period to prevent spamming.
					allowNavigation = false;

					requestAnimationFrame( () => {
						allowNavigation = true;
					} );

					// Check if the esc key is pressed.
					if ( event.keyCode === Keys.ESC ) {
						context.woocommerce.isDialogOpen = false;
					}

					// Check if left arrow key is pressed.
					if ( event.keyCode === Keys.LEFT_ARROW ) {
						actions.woocommerce.selectPreviousImage( store );
					}

					// Check if right arrow key is pressed.
					if ( event.keyCode === Keys.RIGHT_ARROW ) {
						actions.woocommerce.selectNextImage( store );
					}
				};

				document.addEventListener( 'keydown', handleKeyEvents );
			},
		},
	},
	selectors: {
		woocommerce: {
			isSelected: ( { context }: Store ) => {
				return (
					context?.woocommerce.selectedImage ===
					context?.woocommerce.imageId
				);
			},
			pagerDotFillOpacity( store: SelectorsStore ) {
				const { context } = store;

				return context?.woocommerce.selectedImage ===
					context?.woocommerce.imageId
					? 1
					: 0.2;
			},
			isDialogOpen: ( { context }: Store ) => {
				return context.woocommerce.isDialogOpen;
			},
		},
	},
	actions: {
		woocommerce: {
			dialog: {
				closeDialog: ( { context }: Store ) => {
					context.woocommerce.isDialogOpen = false;
				},
				openDialog: ( {
					context,
					event,
				}: {
					context: Context;
					event: Event;
				} ) => {
					if (
						( event.target as HTMLElement ).classList.contains(
							'wc-block-product-gallery-dialog-on-click'
						)
					) {
						context.woocommerce.isDialogOpen = true;
					}
				},
			},
			setImageAsSelected: ( { context }: Store ) => {
				context.woocommerce.selectedImage = context.woocommerce.imageId;
			},
			selectNextImage: ( store: Store ) => {
				const { context } = store;
				const imagesIds =
					context.woocommerce[
						context.woocommerce.isDialogOpen
							? 'dialogVisibleImagesIds'
							: 'visibleImagesIds'
					];
				const selectedImageIdIndex = imagesIds.indexOf(
					context.woocommerce.selectedImage
				);
				const nextImageIndex = Math.min(
					selectedImageIdIndex + 1,
					imagesIds.length - 1
				);

				context.woocommerce.selectedImage = imagesIds[ nextImageIndex ];
			},
			selectPreviousImage: ( store: Store ) => {
				const { context } = store;
				const imagesIds =
					context.woocommerce[
						context.woocommerce.isDialogOpen
							? 'dialogVisibleImagesIds'
							: 'visibleImagesIds'
					];
				const selectedImageIdIndex = imagesIds.indexOf(
					context.woocommerce.selectedImage
				);
				const previousImageIndex = Math.max(
					selectedImageIdIndex - 1,
					0
				);
				context.woocommerce.selectedImage =
					imagesIds[ previousImageIndex ];
			},
		},
	},
} );
