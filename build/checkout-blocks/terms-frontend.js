(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[53],{27:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n(0),r=n(12),c=n.n(r);function a(e){const t=Object(s.useRef)(e);return c()(e,t.current)||(t.current=e),t.current}},313:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var s=n(27),r=n(17),c=n(4),a=n(3);const o=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethodsInitialized:t,expressPaymentMethodsInitialized:n,availablePaymentMethods:o,availableExpressPaymentMethods:i}=Object(c.useSelect)(e=>{const t=e(a.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}}),u=Object.values(o).map(e=>{let{name:t}=e;return t}),l=Object.values(i).map(e=>{let{name:t}=e;return t}),d=Object(r.getPaymentMethods)(),b=Object(r.getExpressPaymentMethods)(),m=Object.keys(d).reduce((e,t)=>(u.includes(t)&&(e[t]=d[t]),e),{}),g=Object.keys(b).reduce((e,t)=>(l.includes(t)&&(e[t]=b[t]),e),{}),O=Object(s.a)(m),p=Object(s.a)(g);return{paymentMethods:e?p:O,isInitialized:e?n:t}},i=()=>o(!1),u=()=>o(!0)},322:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var s=n(3),r=n(4),c=n(1),a=n(9),o=n(86),i=n(313);const u=()=>{const{isCalculating:e,isBeforeProcessing:t,isProcessing:n,isAfterProcessing:u,isComplete:l,hasError:d}=Object(r.useSelect)(e=>{const t=e(s.CHECKOUT_STORE_KEY);return{isCalculating:t.isCalculating(),isBeforeProcessing:t.isBeforeProcessing(),isProcessing:t.isProcessing(),isAfterProcessing:t.isAfterProcessing(),isComplete:t.isComplete(),hasError:t.hasError()}}),{currentStatus:b,activePaymentMethod:m}=Object(r.useSelect)(e=>{const t=e(s.PAYMENT_STORE_KEY);return{currentStatus:t.getCurrentStatus(),activePaymentMethod:t.getActivePaymentMethod()}}),{onSubmit:g}=Object(o.b)(),{paymentMethods:O={}}=Object(i.b)(),p=n||u||t,h=l&&!d,j=(O[m]||{}).placeOrderButtonLabel||Object(c.__)("Place Order","woo-gutenberg-products-block");return{submitButtonText:Object(a.__experimentalApplyCheckoutFilter)({filterName:"placeOrderButtonLabel",defaultValue:j}),onSubmit:g,isCalculating:e,isDisabled:n||b.isDoingExpressPayment,waitingForProcessing:p,waitingForRedirect:h}}},424:function(e,t){},492:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n(5),a=n.n(c),o=n(9),i=n(322),u=n(10),l=n(4),d=n(3),b=n(44);const m=b.j?`<a href="${b.j}" target="_blank">${Object(r.__)("Terms and Conditions","woo-gutenberg-products-block")}</a>`:Object(r.__)("Terms and Conditions","woo-gutenberg-products-block"),g=b.f?`<a href="${b.f}" target="_blank">${Object(r.__)("Privacy Policy","woo-gutenberg-products-block")}</a>`:Object(r.__)("Privacy Policy","woo-gutenberg-products-block"),O=Object(r.sprintf)(
/* translators: %1$s terms page link, %2$s privacy page link. */
Object(r.__)("By proceeding with your purchase you agree to our %1$s and %2$s","woo-gutenberg-products-block"),m,g),p=Object(r.sprintf)(
/* translators: %1$s terms page link, %2$s privacy page link. */
Object(r.__)("You must accept our %1$s and %2$s to continue with your purchase.","woo-gutenberg-products-block"),m,g);n(424),t.default=Object(u.withInstanceId)(e=>{let{text:t,checkbox:n,instanceId:c,className:u}=e;const[b,m]=Object(s.useState)(!1),{isDisabled:g}=Object(i.a)(),h="terms-and-conditions-"+c,{setValidationErrors:j,clearValidationError:_}=Object(l.useDispatch)(d.VALIDATION_STORE_KEY),y=Object(l.useSelect)(e=>e(d.VALIDATION_STORE_KEY).getValidationError(h)),P=!(null==y||!y.message||null!=y&&y.hidden);return Object(s.useEffect)(()=>{if(n)return b?_(h):j({[h]:{message:Object(r.__)("Please read and accept the terms and conditions.","woo-gutenberg-products-block"),hidden:!0}}),()=>{_(h)}},[n,b,h,_,j]),Object(s.createElement)("div",{className:a()("wc-block-checkout__terms",{"wc-block-checkout__terms--disabled":g},u)},n?Object(s.createElement)(s.Fragment,null,Object(s.createElement)(o.CheckboxControl,{id:"terms-and-conditions",checked:b,onChange:()=>m(e=>!e),hasError:P,disabled:g},Object(s.createElement)("span",{dangerouslySetInnerHTML:{__html:t||p}}))):Object(s.createElement)("span",{dangerouslySetInnerHTML:{__html:t||O}}))})}}]);