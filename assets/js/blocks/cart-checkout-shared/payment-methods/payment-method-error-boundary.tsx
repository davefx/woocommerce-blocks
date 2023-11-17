/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { CURRENT_USER_IS_ADMIN } from '@woocommerce/settings';
import { StoreNoticesContainer } from '@woocommerce/blocks-checkout';
import { noticeContexts } from '@woocommerce/base-context';
import { NoticeType } from '@woocommerce/types';
import {
	DerivedStateReturn,
	ReactError,
} from '@woocommerce/base-components/block-error-boundary/types';
import { __experimentalDeRegisterExpressPaymentMethod } from '@woocommerce/blocks-registry';

interface PaymentMethodErrorBoundaryProps {
	isEditor: boolean;
	children: React.ReactNode;
	expressPaymentMethodId: string | undefined;
}

class PaymentMethodErrorBoundary extends Component< PaymentMethodErrorBoundaryProps > {
	state = { errorMessage: '', hasError: false };
	expressPaymentMethodId = this.props.expressPaymentMethodId;
	static getDerivedStateFromError( error: ReactError ): DerivedStateReturn {
		return {
			errorMessage: error.message,
			hasError: true,
		};
	}

	render() {
		const { hasError, errorMessage } = this.state;
		const { isEditor } = this.props;

		if ( hasError ) {
			let errorText = __(
				'We are experiencing difficulties with this payment method. Please contact us for assistance.',
				'woo-gutenberg-products-block'
			);
			if ( isEditor || CURRENT_USER_IS_ADMIN ) {
				if ( errorMessage ) {
					errorText = errorMessage;
				} else {
					errorText = __(
						"There was an error with this payment method. Please verify it's configured correctly.",
						'woo-gutenberg-products-block'
					);
				}
			}
			const notices: NoticeType[] = [
				{
					id: '0',
					content: errorText,
					isDismissible: false,
					status: 'error',
				},
			];

			// De-register the express payment method if has an error.
			if ( this.expressPaymentMethodId !== undefined ) {
				__experimentalDeRegisterExpressPaymentMethod(
					this.expressPaymentMethodId
				);
			}

			return (
				<StoreNoticesContainer
					additionalNotices={ notices }
					context={ noticeContexts.PAYMENTS }
				/>
			);
		}

		return this.props.children;
	}
}
export default PaymentMethodErrorBoundary;
