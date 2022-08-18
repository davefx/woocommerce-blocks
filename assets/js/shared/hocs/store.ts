/**
 * External dependencies
 */
import { controls } from '@wordpress/data-controls';
import { registerStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
import * as resolvers from './resolvers';
import * as actions from './actions';
import * as selectors from './selectors';
import reducer from './reducer';

// @todo Refactor: This is just a provisory store. We should use @woocommerce/data instead, but we found a bug. See https://github.com/woocommerce/woocommerce/issues/34342 for more details.

const STORE_NAME = 'woocommerce/products';

registerStore( STORE_NAME, {
	selectors,
	reducer,
	controls,
	resolvers,
	actions,
} );

export { STORE_NAME };
