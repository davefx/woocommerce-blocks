(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[33],{144:function(e,t,c){"use strict";var n=c(0),o=c(72),a=c(5),r=c.n(a),s=c(111);c(220),t.a=({className:e,showSpinner:t=!1,children:c,variant:a="contained",...u})=>{const i=r()("wc-block-components-button","wp-element-button",e,a,{"wc-block-components-button--loading":t});return Object(n.createElement)(o.a,{className:i,...u},t&&Object(n.createElement)(s.a,null),Object(n.createElement)("span",{className:"wc-block-components-button__text"},c))}},220:function(e,t){},411:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(1);const o=Object(n.__)("Proceed to Checkout","woo-gutenberg-products-block")},444:function(e,t,c){"use strict";(function(e){var n=c(0),o=c(5),a=c.n(o),r=c(144),s=c(29),u=c(479),i=c(2),l=c(4),b=c(3),d=c(9),m=c(36),p=c(272),f=c(411);t.a=({checkoutPageId:t,className:c,buttonLabel:o})=>{const w=Object(i.getSetting)("page-"+t,!1),O=Object(l.useSelect)((e=>e(b.CHECKOUT_STORE_KEY).isCalculating())),[k,h]=Object(u.a)(),[j,v]=Object(n.useState)(!1);Object(n.useEffect)((()=>{if("function"!=typeof e.addEventListener||"function"!=typeof e.removeEventListener)return;const t=()=>{v(!1)};return e.addEventListener("pageshow",t),()=>{e.removeEventListener("pageshow",t)}}),[]);const g=Object(l.useSelect)((e=>e(b.CART_STORE_KEY).getCartData())),E=Object(d.applyCheckoutFilter)({filterName:"proceedToCheckoutButtonLabel",defaultValue:o||f.a,arg:{cart:g}}),_=Object(d.applyCheckoutFilter)({filterName:"proceedToCheckoutButtonLink",defaultValue:w||s.d,arg:{cart:g}}),{dispatchOnProceedToCheckout:y}=Object(p.b)(),C=Object(n.createElement)(r.a,{className:"wc-block-cart__submit-button",href:_,disabled:O,onClick:e=>{y().then((t=>{t.some(m.b)?e.preventDefault():v(!0)}))},showSpinner:j},E),N=Object(n.useMemo)((()=>getComputedStyle(document.body).backgroundColor),[]);return Object(n.createElement)("div",{className:a()("wc-block-cart__submit",c)},k,Object(n.createElement)("div",{className:"wc-block-cart__submit-container"},C),"below"===h&&Object(n.createElement)("div",{className:"wc-block-cart__submit-container wc-block-cart__submit-container--sticky",style:{backgroundColor:N}},C))}}).call(this,c(445))},445:function(e,t){var c;c=function(){return this}();try{c=c||new Function("return this")()}catch(e){"object"==typeof window&&(c=window)}e.exports=c},479:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(0);const o={bottom:0,left:0,opacity:0,pointerEvents:"none",position:"absolute",right:0,top:0,zIndex:-1},a=()=>{const[e,t]=Object(n.useState)(""),c=Object(n.useRef)(null),a=Object(n.useRef)(new IntersectionObserver((e=>{e[0].isIntersecting?t("visible"):t(e[0].boundingClientRect.top>0?"below":"above")}),{threshold:1}));return Object(n.useLayoutEffect)((()=>{const e=c.current,t=a.current;return e&&t.observe(e),()=>{t.unobserve(e)}}),[]),[Object(n.createElement)("div",{"aria-hidden":!0,ref:c,style:o}),e]}},518:function(e,t,c){"use strict";c.r(t);var n=c(143),o=c(444),a={checkoutPageId:{type:"number",default:0},lock:{type:"object",default:{move:!0,remove:!0}},buttonLabel:{type:"string",default:c(411).a}};t.default=Object(n.withFilteredAttributes)(a)(o.a)}}]);