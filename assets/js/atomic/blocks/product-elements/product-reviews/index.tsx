/**
 * Internal dependencies
 */
import { registerBlockSingleProductTemplate } from '~/atomic/utils';
import metadata from './block.json';
import edit from './edit';
import './style.scss';

registerBlockSingleProductTemplate( {
	blockName: metadata.name,
	// @ts-expect-error: `metadata` currently does not have a type definition in WordPress core
	blockMetadata: metadata,
	blockSettings: {
		edit,
	},
	isAvailableOnPostEditor: false,
} );
