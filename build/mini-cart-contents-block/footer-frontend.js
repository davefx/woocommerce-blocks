(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[63,59,60],{123:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return m}));var c=n(0),a=n(4),o=n(3),s=n(18),r=n.n(s),l=n(72),i=n(156);const u=Object(c.createContext)({onPaymentProcessing:()=>()=>()=>{},onPaymentSetup:()=>()=>()=>{}}),d=()=>Object(c.useContext)(u),m=e=>{let{children:t}=e;const{isProcessing:n,isIdle:s,isCalculating:d,hasError:m}=Object(a.useSelect)(e=>{const t=e(o.CHECKOUT_STORE_KEY);return{isProcessing:t.isProcessing(),isIdle:t.isIdle(),hasError:t.hasError(),isCalculating:t.isCalculating()}}),{isPaymentReady:b}=Object(a.useSelect)(e=>{const t=e(o.PAYMENT_STORE_KEY);return{isPaymentProcessing:t.isPaymentProcessing(),isPaymentReady:t.isPaymentReady()}}),{setValidationErrors:y}=Object(a.useDispatch)(o.VALIDATION_STORE_KEY),[p,f]=Object(c.useReducer)(l.b,{}),{onPaymentSetup:v}=(e=>Object(c.useMemo)(()=>({onPaymentSetup:Object(i.a)("payment_setup",e)}),[e]))(f),g=Object(c.useRef)(p);Object(c.useEffect)(()=>{g.current=p},[p]);const{__internalSetPaymentProcessing:h,__internalSetPaymentIdle:O,__internalEmitPaymentProcessingEvent:j}=Object(a.useDispatch)(o.PAYMENT_STORE_KEY);Object(c.useEffect)(()=>{!n||m||d||(h(),j(g.current,y))},[n,m,d,h,j,y]),Object(c.useEffect)(()=>{s&&!b&&O()},[s,b,O]),Object(c.useEffect)(()=>{m&&b&&O()},[m,b,O]);const E={onPaymentProcessing:Object(c.useMemo)(()=>function(){return r()("onPaymentProcessing",{alternative:"onPaymentSetup",plugin:"WooCommerce Blocks"}),v(...arguments)},[v]),onPaymentSetup:v};return Object(c.createElement)(u.Provider,{value:E},t)}},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(0),a=n(14),o=n.n(a);function s(e){const t=Object(c.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=function(){return(c=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.create,Object.create},284:function(e,t,n){"use strict";function c(e){return e.toLowerCase()}n.d(t,"a",(function(){return s}));var a=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function s(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,s=void 0===n?a:n,l=t.stripRegexp,i=void 0===l?o:l,u=t.transform,d=void 0===u?c:u,m=t.delimiter,b=void 0===m?" ":m,y=r(r(e,s,"$1\0$2"),i,"\0"),p=0,f=y.length;"\0"===y.charAt(p);)p++;for(;"\0"===y.charAt(f-1);)f--;return y.slice(p,f).split("\0").map(d).join(b)}function r(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(283),a=n(284);function o(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),Object(a.a)(e,Object(c.a)({delimiter:"."},t))}(e,Object(c.a)({delimiter:"-"},t))}},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(5),a=n.n(c),o=n(21),s=n(28),r=n(288),l=n(132);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={};return Object(l.getCSSRules)(e,{selector:""}).forEach(e=>{t[e.key]=e.value}),t}function u(e,t){return e&&t?`has-${Object(r.a)(t)}-${e}`:""}const d=e=>{const t=(e=>{const t=Object(o.a)(e)?e:{style:{}};let n=t.style;return Object(s.a)(n)&&(n=JSON.parse(n)||{}),Object(o.a)(n)||(n={}),{...t,style:n}})(e),n=function(e){var t,n,c,s,r,l,d;const{backgroundColor:m,textColor:b,gradient:y,style:p}=e,f=u("background-color",m),v=u("color",b),g=function(e){if(e)return`has-${e}-gradient-background`}(y),h=g||(null==p||null===(t=p.color)||void 0===t?void 0:t.gradient);return{className:a()(v,g,{[f]:!h&&!!f,"has-text-color":b||(null==p||null===(n=p.color)||void 0===n?void 0:n.text),"has-background":m||(null==p||null===(c=p.color)||void 0===c?void 0:c.background)||y||(null==p||null===(s=p.color)||void 0===s?void 0:s.gradient),"has-link-color":Object(o.a)(null==p||null===(r=p.elements)||void 0===r?void 0:r.link)?null==p||null===(l=p.elements)||void 0===l||null===(d=l.link)||void 0===d?void 0:d.color:void 0}),style:i({color:(null==p?void 0:p.color)||{}})}}(t),c=function(e){var t;const n=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:n,style:c}=e,o=n?u("border-color",n):"";return a()({"has-border-color":n||(null==c||null===(t=c.border)||void 0===t?void 0:t.color),borderColorClass:o})}(e),style:i({border:n})}}(t),r=function(e){var t;return{className:void 0,style:i({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}(t),l=(e=>{const t=Object(o.a)(e.style.typography)?e.style.typography:{},n=Object(s.a)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:n,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}})(t);return{className:a()(l.className,n.className,c.className,r.className),style:{...l.style,...n.style,...c.style,...r.style}}}},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var c=n(21);const a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return e.includes("is-style-outline")?"outlined":e.includes("is-style-fill")?"contained":t},o=e=>e.some(e=>Array.isArray(e)?o(e):Object(c.a)(e)&&null!==e.key)},311:function(e,t){},317:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i}));var c=n(27),a=n(23),o=n(4),s=n(3);const r=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethodsInitialized:t,expressPaymentMethodsInitialized:n,availablePaymentMethods:r,availableExpressPaymentMethods:l}=Object(o.useSelect)(e=>{const t=e(s.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}}),i=Object.values(r).map(e=>{let{name:t}=e;return t}),u=Object.values(l).map(e=>{let{name:t}=e;return t}),d=Object(a.getPaymentMethods)(),m=Object(a.getExpressPaymentMethods)(),b=Object.keys(d).reduce((e,t)=>(i.includes(t)&&(e[t]=d[t]),e),{}),y=Object.keys(m).reduce((e,t)=>(u.includes(t)&&(e[t]=m[t]),e),{}),p=Object(c.a)(b),f=Object(c.a)(y);return{paymentMethods:e?f:p,isInitialized:e?n:t}},l=()=>r(!1),i=()=>r(!0)},332:function(e,t,n){"use strict";var c=n(13),a=n.n(c),o=n(0),s=n(5),r=n.n(s);const l=e=>"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--"+e;var i=e=>{let{id:t,src:n=null,alt:c=""}=e;return n?Object(o.createElement)("img",{className:l(t),src:n,alt:c}):null},u=n(26);const d=[{id:"alipay",alt:"Alipay",src:u.n+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:u.n+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:u.n+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:u.n+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:u.n+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:u.n+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:u.n+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:u.n+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:u.n+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:u.n+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:u.n+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:u.n+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:u.n+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:u.n+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:u.n+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:u.n+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:u.n+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:u.n+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:u.n+"payment-methods/wechat.svg"}];var m=n(28);n(311),t.a=e=>{let{icons:t=[],align:n="center",className:c}=e;const s=(e=>{const t={};return e.forEach(e=>{let n={};"string"==typeof e&&(n={id:e,alt:e,src:null}),"object"==typeof e&&(n={id:e.id||"",alt:e.alt||"",src:e.src||null}),n.id&&Object(m.a)(n.id)&&!t[n.id]&&(t[n.id]=n)}),Object.values(t)})(t);if(0===s.length)return null;const l=r()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===n,"wc-block-components-payment-method-icons--align-right":"right"===n},c);return Object(o.createElement)("div",{className:l},s.map(e=>{const t={...e,...(n=e.id,d.find(e=>e.id===n)||{})};var n;return Object(o.createElement)(i,a()({key:"payment-method-icon-"+e.id},t))}))}},418:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(26),o=n(148),s=n(5),r=n.n(s),l=n(290),i=n(1);const u=Object(i.__)("View my cart","woo-gutenberg-products-block");var d=n(297);t.default=e=>{let{className:t,cartButtonLabel:n,style:s}=e;const i=Object(l.a)({style:s});return a.c?Object(c.createElement)(o.a,{className:r()(t,i.className,"wc-block-mini-cart__footer-cart"),style:i.style,href:a.c,variant:Object(d.a)(t,"outlined")},n||u):null}},419:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(26),o=n(148),s=n(5),r=n.n(s),l=n(290),i=n(275),u=n(37),d=n(1);const m=Object(d.__)("Go to checkout","woo-gutenberg-products-block");var b=n(297);t.default=e=>{let{className:t,checkoutButtonLabel:n,style:s}=e;const d=Object(l.a)({style:s}),{dispatchOnProceedToCheckout:y}=Object(i.b)();return a.d?Object(c.createElement)(o.a,{className:r()(t,d.className,"wc-block-mini-cart__footer-checkout"),variant:Object(b.a)(t,"contained"),style:d.style,href:a.d,onClick:e=>{y().then(t=>{t.some(u.b)&&e.preventDefault()})}},n||m):null}},445:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>Object.values(e).reduce((e,t)=>(null!==t.icons&&(e=e.concat(t.icons)),e),[])},491:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n(9),s=n(39),r=n(317),l=n(46),i=n(332),u=n(445),d=n(2),m=n(123),b=n(5),y=n.n(b),p=n(418),f=n(419),v=n(297);const g=()=>{const{paymentMethods:e}=Object(r.b)();return Object(c.createElement)(i.a,{icons:Object(u.a)(e)})};t.default=e=>{let{children:t,className:n,cartButtonLabel:r,checkoutButtonLabel:i}=e;const{cartTotals:u}=Object(l.a)(),b=Object(d.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(u.total_items,10)+parseInt(u.total_items_tax,10):parseInt(u.total_items,10),h=Object(v.b)(t);return Object(c.createElement)("div",{className:y()(n,"wc-block-mini-cart__footer")},Object(c.createElement)(o.TotalsItem,{className:"wc-block-mini-cart__footer-subtotal",currency:Object(s.getCurrencyFromPriceResponse)(u),label:Object(a.__)("Subtotal","woo-gutenberg-products-block"),value:b,description:Object(a.__)("Shipping, taxes, and discounts calculated at checkout.","woo-gutenberg-products-block")}),Object(c.createElement)("div",{className:"wc-block-mini-cart__footer-actions"},h?t:Object(c.createElement)(c.Fragment,null,Object(c.createElement)(p.default,{cartButtonLabel:r}),Object(c.createElement)(f.default,{checkoutButtonLabel:i}))),Object(c.createElement)(m.a,null,Object(c.createElement)(g,null)))}}}]);