(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[20],{512:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(72),r=s(4),o=s.n(r),a=s(1),i=s(323),l=s(36),m=s(11),p=s(145),b=s(5),u=s(3),E=s(414);s(413);var O=()=>{const{paymentMethods:e,isInitialized:t}=Object(i.a)(),{isCalculating:s,isProcessing:n,isAfterProcessing:r,isBeforeProcessing:o,isComplete:O,hasError:g}=Object(b.useSelect)((e=>{const t=e(u.CHECKOUT_STORE_KEY);return{isCalculating:t.isCalculating(),isProcessing:t.isProcessing(),isAfterProcessing:t.isAfterProcessing(),isBeforeProcessing:t.isBeforeProcessing(),isComplete:t.isComplete(),hasError:t.hasError()}})),j=Object(b.useSelect)((e=>e(u.PAYMENT_STORE_KEY).isExpressPaymentMethodActive()));if(!t||t&&0===Object.keys(e).length)return null;const d=n||r||o||O&&!g;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(p.a,{isLoading:s||d||j},Object(c.createElement)("div",{className:"wc-block-components-express-payment wc-block-components-express-payment--cart"},Object(c.createElement)("div",{className:"wc-block-components-express-payment__content"},Object(c.createElement)(m.StoreNoticesContainer,{context:l.d.EXPRESS_PAYMENTS}),Object(c.createElement)(E.a,null)))),Object(c.createElement)("div",{className:"wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--cart"},Object(a.__)("Or","woo-gutenberg-products-block")))};t.default=({className:e})=>{const{cartNeedsPayment:t}=Object(n.a)();return t?Object(c.createElement)("div",{className:o()("wc-block-cart__payment-options",e)},Object(c.createElement)(O,null)):null}}}]);