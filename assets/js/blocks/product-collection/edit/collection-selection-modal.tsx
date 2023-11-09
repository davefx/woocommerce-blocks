/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { Modal, Button } from '@wordpress/components';
import { Icon, loop } from '@wordpress/icons';
import {
	// @ts-expect-error Type definitions for this function are missing in Guteberg
	store as blocksStore,
	createBlock,
	// @ts-expect-error Type definitions for this function are missing in Guteberg
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';
/**
 * External dependencies
 */
import {
	store as blockEditorStore,
	// @ts-expect-error Using experimental features
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalBlockPatternsList as BlockPatternsList,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import type { ProductCollectionAttributes } from '../types';
import {
	INNER_BLOCKS_PRODUCT_TEMPLATE,
	DEFAULT_ATTRIBUTES,
} from '../constants';
import { getDefaultValueOfInheritQueryFromTemplate } from '../utils';
import blockJson from '../block.json';

type CollectionButtonProps = {
	active: boolean;
	title: string;
	icon: string;
	description: string;
	onClick: () => void;
};

const CollectionButton = ( {
	active,
	title,
	icon,
	description,
	onClick,
}: CollectionButtonProps ) => {
	const variant = active ? 'primary' : 'secondary';

	return (
		<Button
			className="wc-blocks-product-collection__collection-button"
			variant={ variant }
			onClick={ onClick }
		>
			<div className="wc-blocks-product-collection__collection-button-icon">
				{ icon }
			</div>
			<div className="wc-blocks-product-collection__collection-button-text">
				<p className="wc-blocks-product-collection__collection-button-title">
					{ title }
				</p>
				<p className="wc-blocks-product-collection__collection-button-description">
					{ description }
				</p>
			</div>
		</Button>
	);
};

const defaultQuery = {
	name: 'woocommerce-blocks/product-collection/default-query',
	title: 'Default Query',
	icon: <Icon icon={ loop } />,
	description: 'Use the current query context set by template.',
	innerBlocks: [ INNER_BLOCKS_PRODUCT_TEMPLATE ],
	attributes: {
		...DEFAULT_ATTRIBUTES,
		query: {
			...DEFAULT_ATTRIBUTES.query,
		},
	},
};

const getDefaultChosenCollection = (
	attributes: ProductCollectionAttributes,
	// @ts-expect-error Type definitions are missing
	// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__blocks/store/selectors.d.ts
	blockCollections
) => {
	// If `attributes.query` is truthy, that means Product Collection was already
	// configured. So it's either a collection or we need to return defaultQuery
	// collection name;
	if ( attributes.query ) {
		return attributes.collection || defaultQuery.name;
	}

	// Otherwise it should be the first available choice. We control collections
	// so there always should be at least one available.
	return blockCollections.length ? blockCollections[ 0 ].name : '';
};

const findProductCollectionBlock = ( blocks ) => {
	return blocks.find( ( block ) => {
		const isProductCollection =
			block.name === 'woocommerce/product-collection';
		return isProductCollection
			? block
			: findProductCollectionBlock( block.innerBlocks );
	} );
};

const PatternSelectionModal = ( props: {
	clientId: string;
	attributes: ProductCollectionAttributes;
	closePatternSelectionModal: () => void;
} ) => {
	const { clientId, attributes } = props;
	// @ts-expect-error Type definitions for this function are missing
	// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__blocks/store/actions.d.ts
	const { replaceBlock } = useDispatch( blockEditorStore );

	// Get Patterns
	const blockPatterns = useSelect(
		( select ) => {
			// @ts-expect-error Type definitions are missing
			// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__blocks/store/selectors.d.ts
			const { getBlockRootClientId, getPatternsByBlockTypes } =
				select( blockEditorStore );
			const rootClientId = getBlockRootClientId( clientId );
			return getPatternsByBlockTypes( blockJson.name, rootClientId );
		},
		[ blockJson.name, clientId ]
	);

	// Prepare Patterns
	const [ chosenPatternName, selectPatternName ] = useState( '' );

	// Get Collections
	const blockCollections = [
		...useSelect( ( select ) => {
			// @ts-expect-error Type definitions are missing
			// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__blocks/store/selectors.d.ts
			const { getBlockVariations } = select( blocksStore );
			return getBlockVariations( blockJson.name );
		}, [] ),
		defaultQuery,
	];

	// Prepare Collections
	const defaultChosenCollection = getDefaultChosenCollection(
		attributes,
		blockCollections
	);

	const [ chosenCollectionName, selectCollectionName ] = useState(
		defaultChosenCollection
	);

	const applyCollection = () => {
		const chosenCollection = blockCollections.find(
			( { name }: { name: string } ) => name === chosenCollectionName
		);
		const chosenPattern = blockPatterns.find(
			( { name }: { name: string } ) => name === chosenPatternName
		);

		if (
			chosenCollection.name ===
			'woocommerce-blocks/product-collection/default-query'
		) {
			chosenCollection.attributes.query.inherit =
				getDefaultValueOfInheritQueryFromTemplate();
		}

		if ( ! chosenPattern ) {
			const newBlock = createBlock(
				blockJson.name,
				chosenCollection.attributes,
				createBlocksFromInnerBlocksTemplate(
					chosenCollection.innerBlocks
				)
			);

			replaceBlock( clientId, newBlock );
			return;
		}

		const { innerBlocks, attributes: patternAttributes } =
			findProductCollectionBlock( chosenPattern.blocks );
		const {
			displayLayout,
			query: { perPage, pages, offset },
		} = patternAttributes;

		const mergedAttributes = {
			...chosenCollection.attributes,
			displayLayout,
			query: {
				...chosenCollection.attributes.query,
				perPage,
				pages,
				offset,
			},
		};

		const newBlock = createBlock(
			blockJson.name,
			mergedAttributes,
			createBlocksFromInnerBlocksTemplate( innerBlocks )
		);

		replaceBlock( clientId, newBlock );
	};

	return (
		<Modal
			overlayClassName="wc-blocks-product-collection__modal"
			title={ __(
				'Choose a collection',
				'woo-gutenberg-products-block'
			) }
			onRequestClose={ props.closePatternSelectionModal }
			// @ts-expect-error Type definitions are missing in the version we are using i.e. 19.1.5,
			// Once we will update to the latest version, ts-expect-error should be removed
			isFullScreen
		>
			<div className="wc-blocks-product-collection__content">
				<p className="wc-blocks-product-collection__subtitle">
					{ __(
						"Pick what products are shown. Don't worry, you can switch and tweak this collection any time.",
						'woo-gutenberg-products-block'
					) }
				</p>
				<div className="wc-blocks-product-collection__collections-section">
					{ blockCollections.map(
						( { name, title, icon, description } ) => (
							<CollectionButton
								active={ chosenCollectionName === name }
								key={ name }
								title={ title }
								description={ description }
								icon={ icon }
								onClick={ () => selectCollectionName( name ) }
							/>
						)
					) }
				</div>
				<div className="wc-blocks-product-collection__patterns-section">
					<h3>
						{ __(
							'Choose a pattern',
							'woo-gutenberg-products-block'
						) }
					</h3>
					<p className="wc-blocks-product-collection__subtitle">
						{ __(
							'Patterns are a great starting point that you can customise later.',
							'woo-gutenberg-products-block'
						) }
					</p>
					<BlockPatternsList
						className="wc-blocks-product-collection__patterns-preview"
						blockPatterns={ blockPatterns }
						shownPatterns={ blockPatterns }
						onClickPattern={ ( { name } ) =>
							selectPatternName( name )
						}
					/>
				</div>
				<div className="wc-blocks-product-collection__footer">
					<Button
						variant="tertiary"
						onClick={ props.closePatternSelectionModal }
					>
						{ __( 'Cancel', 'woo-gutenberg-products-block' ) }
					</Button>
					<Button variant="primary" onClick={ applyCollection }>
						{ __( 'Continue', 'woo-gutenberg-products-block' ) }
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default PatternSelectionModal;
