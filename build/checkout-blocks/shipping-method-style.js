(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[58],{961:function(e,t,c){"use strict";c.r(t);var i=c(0),o=c(4),s=c.n(o),n=c(65),p=c(854),a=c(8),r=c(10),l=c(157),h=c(21),d=c(1),g=c(582),u=c(581),m=c(45),b=c(845),k=c(844),_=c(147),w=c(846),O=c(847),E=c(291);c(965);const j={hidden:!0,message:Object(d.__)("Shipping options are not available","woo-gutenberg-products-block")},C=e=>{let{checked:t,rate:c,showPrice:o,showIcon:n,toggleText:p,multiple:a}=e;return Object(i.createElement)(g.a,{value:"pickup",className:s()("wc-block-checkout__shipping-method-option",{"wc-block-checkout__shipping-method-option--selected":"pickup"===t})},!0===n&&Object(i.createElement)(m.a,{icon:b.a,size:28,className:"wc-block-checkout__shipping-method-option-icon"}),Object(i.createElement)("span",{className:"wc-block-checkout__shipping-method-option-title"},p),!0===o&&Object(i.createElement)(w.a,{multiple:a,minRate:c.min,maxRate:c.max}))},T=e=>{let{checked:t,rate:c,showPrice:o,showIcon:n,toggleText:p,shippingCostRequiresAddress:l=!1}=e;const h=Object(a.useSelect)(e=>e(r.CART_STORE_KEY).getShippingRates().some(e=>{let{shipping_rates:t}=e;return!t.every(_.d)})),u=l&&(()=>{const e=Object(a.select)("wc/store/validation"),t=e.getValidationError("shipping_state"),c=e.getValidationError("shipping_address_1"),i=e.getValidationError("shipping_country"),o=e.getValidationError("shipping_postcode");return[e.getValidationError("shipping_city"),t,c,i,o].some(e=>void 0!==e)})()&&!h,b=void 0!==c.min&&void 0!==c.max,{setValidationErrors:O,clearValidationError:E}=Object(a.useDispatch)(r.VALIDATION_STORE_KEY);Object(i.useEffect)(()=>{"shipping"!==t||b?E("shipping-rates-error"):O({"shipping-rates-error":j})},[t,E,b,O]);const C=void 0===c.min||u?Object(i.createElement)("span",{className:"wc-block-checkout__shipping-method-option-price"},Object(d.__)("calculated with an address","woo-gutenberg-products-block")):Object(i.createElement)(w.a,{minRate:c.min,maxRate:c.max});return Object(i.createElement)(g.a,{value:"shipping",className:s()("wc-block-checkout__shipping-method-option",{"wc-block-checkout__shipping-method-option--selected":"shipping"===t})},!0===n&&Object(i.createElement)(m.a,{icon:k.a,size:28,className:"wc-block-checkout__shipping-method-option-icon"}),Object(i.createElement)("span",{className:"wc-block-checkout__shipping-method-option-title"},p),!0===o&&C)};var R=e=>{var t,c;let{checked:o,onChange:s,showPrice:n,showIcon:p,localPickupText:a,shippingText:r,shippingCostRequiresAddress:h=!1}=e;const{shippingRates:d}=Object(l.a)();return Object(i.createElement)(u.a,{id:"shipping-method",className:"wc-block-checkout__shipping-method-container",label:"options",onChange:s,checked:o},Object(i.createElement)(T,{checked:o,rate:Object(O.b)(null===(t=d[0])||void 0===t?void 0:t.shipping_rates),showPrice:n,showIcon:p,shippingCostRequiresAddress:h,toggleText:r||E.b}),Object(i.createElement)(C,{checked:o,rate:Object(O.a)(null===(c=d[0])||void 0===c?void 0:c.shipping_rates),multiple:d.length>1,showPrice:n,showIcon:p,toggleText:a||E.a}))},v=c(498);t.default=Object(n.withFilteredAttributes)(v.a)(e=>{let{title:t,description:c,showStepNumber:o,children:n,className:d,showPrice:g,showIcon:u,shippingText:m,localPickupText:b,shippingCostRequiresAddress:k}=e;const{checkoutIsProcessing:_,prefersCollection:w}=Object(a.useSelect)(e=>{const t=e(r.CHECKOUT_STORE_KEY);return{checkoutIsProcessing:t.isProcessing(),prefersCollection:t.prefersCollection()}}),{setPrefersCollection:O}=Object(a.useDispatch)(r.CHECKOUT_STORE_KEY),{shippingRates:E,needsShipping:j,hasCalculatedShipping:C,isCollectable:T}=Object(l.a)();if(!(j&&C&&E&&T&&h.h))return null;return Object(i.createElement)(p.a,{id:"shipping-method",disabled:_,className:s()("wc-block-checkout__shipping-method",d),title:t,description:c,showStepNumber:o},Object(i.createElement)(R,{checked:w?"pickup":"shipping",onChange:e=>{O("pickup"===e)},showPrice:g,showIcon:u,localPickupText:b,shippingText:m,shippingCostRequiresAddress:k}),n)})}}]);