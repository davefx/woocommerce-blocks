/**
 * External dependencies
 */
import { test as base, expect } from '@woocommerce/e2e-playwright-utils';

/**
 * Internal dependencies
 */
import ProductCollectionPage from './product-collection.page';
import {
	installPluginFromPHPFile,
	uninstallPluginFromPHPFile,
} from '../../mocks/custom-plugins';

type Scenario = {
	title: string;
	dataTestId: string;
	content: string;
	amount: number;
};
const scenarios: Scenario[] = [
	{
		title: 'Before Main Content',
		dataTestId: 'woocommerce_before_main_content',
		content: 'Hook: woocommerce_before_main_content',
		amount: 1,
	},
	{
		title: 'After Main Content',
		dataTestId: 'woocommerce_after_main_content',
		content: 'Hook: woocommerce_after_main_content',
		amount: 1,
	},
	{
		title: 'Before Shop Loop Item Title',
		dataTestId: 'woocommerce_before_shop_loop_item_title',
		content: 'Hook: woocommerce_before_shop_loop_item_title',
		amount: 16,
	},
	{
		title: 'Shop Loop Item Title',
		dataTestId: 'woocommerce_shop_loop_item_title',
		content: 'Hook: woocommerce_shop_loop_item_title',
		amount: 16,
	},
	{
		title: 'After Shop Loop Item Title',
		dataTestId: 'woocommerce_after_shop_loop_item_title',
		content: 'Hook: woocommerce_after_shop_loop_item_title',
		amount: 16,
	},
	{
		title: 'Before Shop Loop Item',
		dataTestId: 'woocommerce_before_shop_loop_item',
		content: 'Hook: woocommerce_before_shop_loop_item',
		amount: 16,
	},
	{
		title: 'After Shop Loop Item',
		dataTestId: 'woocommerce_after_shop_loop_item',
		content: 'Hook: woocommerce_after_shop_loop_item',
		amount: 16,
	},
	{
		title: 'Before Shop Loop',
		dataTestId: 'woocommerce_before_shop_loop',
		content: 'Hook: woocommerce_before_shop_loop',
		amount: 1,
	},
	{
		title: 'After Shop Loop',
		dataTestId: 'woocommerce_after_shop_loop',
		content: 'Hook: woocommerce_after_shop_loop',
		amount: 1,
	},
];

const compatiblityPluginFileName = 'compatibility-plugin.php';
const test = base.extend< { pageObject: ProductCollectionPage } >( {
	pageObject: async (
		{ page, admin, editor, templateApiUtils, editorUtils },
		use
	) => {
		const pageObject = new ProductCollectionPage( {
			page,
			admin,
			editor,
			templateApiUtils,
			editorUtils,
		} );
		await pageObject.createNewPostAndInsertBlock();
		await use( pageObject );
	},
} );

test.describe( 'Compatibility Layer with Product Collection block', () => {
	test.beforeAll( async () => {
		await installPluginFromPHPFile(
			`${ __dirname }/${ compatiblityPluginFileName }`
		);
	} );

	test.describe(
		'Product Archive with Product Collection block',
		async () => {
			test.beforeEach( async ( { pageObject } ) => {
				await pageObject.replaceProductsWithProductCollectionInTemplate(
					'woocommerce/woocommerce//archive-product'
				);
				await pageObject.goToProductCatalogFrontend();
			} );

			scenarios.forEach( ( { title, dataTestId, content, amount } ) => {
				test( title, async ( { pageObject } ) => {
					const hooks = pageObject.locateByTestId( dataTestId );
					await expect( hooks ).toHaveCount( amount );
					if ( amount > 1 ) {
						await expect( hooks.first() ).toHaveText( content );
					} else {
						await expect( hooks ).toHaveText( content );
					}
				} );
			} );
		}
	);

	test.afterAll( async () => {
		await uninstallPluginFromPHPFile(
			`${ __dirname }/${ compatiblityPluginFileName }`
		);
	} );
} );
