/**
 * External dependencies
 */
import { WC_BLOCKS_IMAGE_URL } from '@woocommerce/block-settings';
import { useBlockProps } from '@wordpress/block-editor';
import { Disabled } from '@wordpress/components';

export const Edit = (): JSX.Element => {
	const blockProps = useBlockProps( {
		className: 'wc-block-editor-product-gallery_thumbnails',
	} );
	const Placeholder = () => {
		return (
			<div className="wc-block-editor-product-gallery-thumbnails">
				<img
					src={ `${ WC_BLOCKS_IMAGE_URL }block-placeholders/product-image-gallery.svg` }
					alt="Placeholder"
				/>
			</div>
		);
	};

	return (
		<div { ...blockProps }>
			<Disabled>
				<Placeholder />
			</Disabled>
		</div>
	);
};
