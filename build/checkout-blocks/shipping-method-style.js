(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[59],{965:function(e,t,c){"use strict";c.r(t);var i=c(0),o=c(4),s=c.n(o),n=c(62),p=c(858),a=c(7),r=c(10),l=c(156),h=c(21),d=c(1),g=c(585),u=c(584),m=c(44),b=c(849),k=c(848),_=c(146),w=c(850),O=c(851),E=c(289);c(969);const j={hidden:!0,message:Object(d.__)("Shipping options are not available","woo-gutenberg-products-block")},C=({checked:e,rate:t,showPrice:c,showIcon:o,toggleText:n,multiple:p})=>Object(i.createElement)(g.a,{value:"pickup",className:s()("wc-block-checkout__shipping-method-option",{"wc-block-checkout__shipping-method-option--selected":"pickup"===e})},!0===o&&Object(i.createElement)(m.a,{icon:b.a,size:28,className:"wc-block-checkout__shipping-method-option-icon"}),Object(i.createElement)("span",{className:"wc-block-checkout__shipping-method-option-title"},n),!0===c&&Object(i.createElement)(w.a,{multiple:p,minRate:t.min,maxRate:t.max})),T=({checked:e,rate:t,showPrice:c,showIcon:o,toggleText:n,shippingCostRequiresAddress:p=!1})=>{const l=Object(a.useSelect)(e=>e(r.CART_STORE_KEY).getShippingRates().some(({shipping_rates:e})=>!e.every(_.d))),h=p&&(()=>{const e=Object(a.select)("wc/store/validation"),t=e.getValidationError("shipping_state"),c=e.getValidationError("shipping_address_1"),i=e.getValidationError("shipping_country"),o=e.getValidationError("shipping_postcode");return[e.getValidationError("shipping_city"),t,c,i,o].some(e=>void 0!==e)})()&&!l,u=void 0!==t.min&&void 0!==t.max,{setValidationErrors:b,clearValidationError:O}=Object(a.useDispatch)(r.VALIDATION_STORE_KEY);Object(i.useEffect)(()=>{"shipping"!==e||u?O("shipping-rates-error"):b({"shipping-rates-error":j})},[e,O,u,b]);const E=void 0===t.min||h?Object(i.createElement)("span",{className:"wc-block-checkout__shipping-method-option-price"},Object(d.__)("calculated with an address","woo-gutenberg-products-block")):Object(i.createElement)(w.a,{minRate:t.min,maxRate:t.max});return Object(i.createElement)(g.a,{value:"shipping",className:s()("wc-block-checkout__shipping-method-option",{"wc-block-checkout__shipping-method-option--selected":"shipping"===e})},!0===o&&Object(i.createElement)(m.a,{icon:k.a,size:28,className:"wc-block-checkout__shipping-method-option-icon"}),Object(i.createElement)("span",{className:"wc-block-checkout__shipping-method-option-title"},n),!0===c&&E)};var R=({checked:e,onChange:t,showPrice:c,showIcon:o,localPickupText:s,shippingText:n,shippingCostRequiresAddress:p=!1})=>{var a,r;const{shippingRates:h}=Object(l.a)();return Object(i.createElement)(u.a,{id:"shipping-method",className:"wc-block-checkout__shipping-method-container",label:"options",onChange:t,checked:e},Object(i.createElement)(T,{checked:e,rate:Object(O.b)(null===(a=h[0])||void 0===a?void 0:a.shipping_rates),showPrice:c,showIcon:o,shippingCostRequiresAddress:p,toggleText:n||E.b}),Object(i.createElement)(C,{checked:e,rate:Object(O.a)(null===(r=h[0])||void 0===r?void 0:r.shipping_rates),multiple:h.length>1,showPrice:c,showIcon:o,toggleText:s||E.a}))},v=c(500);t.default=Object(n.withFilteredAttributes)(v.a)(({title:e,description:t,showStepNumber:c,children:o,className:n,showPrice:d,showIcon:g,shippingText:u,localPickupText:m,shippingCostRequiresAddress:b})=>{const{checkoutIsProcessing:k,prefersCollection:_}=Object(a.useSelect)(e=>{const t=e(r.CHECKOUT_STORE_KEY);return{checkoutIsProcessing:t.isProcessing(),prefersCollection:t.prefersCollection()}}),{setPrefersCollection:w}=Object(a.useDispatch)(r.CHECKOUT_STORE_KEY),{shippingRates:O,needsShipping:E,hasCalculatedShipping:j,isCollectable:C}=Object(l.a)();if(!(E&&j&&O&&C&&h.h))return null;return Object(i.createElement)(p.a,{id:"shipping-method",disabled:k,className:s()("wc-block-checkout__shipping-method",n),title:e,description:t,showStepNumber:c},Object(i.createElement)(R,{checked:_?"pickup":"shipping",onChange:e=>{w("pickup"===e)},showPrice:d,showIcon:g,localPickupText:m,shippingText:u,shippingCostRequiresAddress:b}),o)})}}]);