(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[34],{113:function(e,t,c){"use strict";var n=c(10),o=c.n(n),a=c(0),r=c(96),s=c(6),u=c.n(s),i=c(87);c(190),t.a=e=>{let{className:t,showSpinner:c=!1,children:n,variant:s="contained",...l}=e;const b=u()("wc-block-components-button","wp-element-button",t,s,{"wc-block-components-button--loading":c});return Object(a.createElement)(r.a,o()({className:b},l),c&&Object(a.createElement)(i.a,null),Object(a.createElement)("span",{className:"wc-block-components-button__text"},n))}},190:function(e,t){},384:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(1);const o=Object(n.__)("Proceed to Checkout","woo-gutenberg-products-block")},420:function(e,t,c){"use strict";(function(e){var n=c(0),o=c(6),a=c.n(o),r=c(113),s=c(20),u=c(467),i=c(2),l=c(5),b=c(3),d=c(7),m=(c(422),c(384));t.a=t=>{let{checkoutPageId:c,className:o,buttonLabel:f}=t;const p=Object(i.getSetting)("page-"+c,!1),w=Object(l.useSelect)(e=>e(b.CHECKOUT_STORE_KEY).isCalculating()),[O,k]=Object(u.a)(),[j,v]=Object(n.useState)(!1);Object(n.useEffect)(()=>{if("function"!=typeof e.addEventListener||"function"!=typeof e.removeEventListener)return;const t=()=>{v(!1)};return e.addEventListener("pageshow",t),()=>{e.removeEventListener("pageshow",t)}},[]);const h=Object(l.useSelect)(e=>e(b.CART_STORE_KEY).getCartData()),g=Object(d.applyCheckoutFilter)({filterName:"proceedToCheckoutButtonLabel",defaultValue:f||m.a,arg:{cart:h}}),E=Object(d.applyCheckoutFilter)({filterName:"proceedToCheckoutButtonLink",defaultValue:p||s.d,arg:{cart:h}}),_=Object(n.createElement)(r.a,{className:"wc-block-cart__submit-button",href:E,disabled:w,onClick:()=>v(!0),showSpinner:j},g),y=Object(n.useMemo)(()=>getComputedStyle(document.body).backgroundColor,[]);return Object(n.createElement)("div",{className:a()("wc-block-cart__submit",o)},O,Object(n.createElement)("div",{className:"wc-block-cart__submit-container"},_),"below"===k&&Object(n.createElement)("div",{className:"wc-block-cart__submit-container wc-block-cart__submit-container--sticky",style:{backgroundColor:y}},_))}}).call(this,c(421))},421:function(e,t){var c;c=function(){return this}();try{c=c||new Function("return this")()}catch(e){"object"==typeof window&&(c=window)}e.exports=c},422:function(e,t){},467:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(0);const o={bottom:0,left:0,opacity:0,pointerEvents:"none",position:"absolute",right:0,top:0,zIndex:-1},a=()=>{const[e,t]=Object(n.useState)(""),c=Object(n.useRef)(null),a=Object(n.useRef)(new IntersectionObserver(e=>{e[0].isIntersecting?t("visible"):t(e[0].boundingClientRect.top>0?"below":"above")},{threshold:1}));return Object(n.useLayoutEffect)(()=>{const e=c.current,t=a.current;return e&&t.observe(e),()=>{t.unobserve(e)}},[]),[Object(n.createElement)("div",{"aria-hidden":!0,ref:c,style:o}),e]}},506:function(e,t,c){"use strict";c.r(t);var n=c(112),o=c(420),a={checkoutPageId:{type:"number",default:0},lock:{type:"object",default:{move:!0,remove:!0}},buttonLabel:{type:"string",default:c(384).a}};t.default=Object(n.withFilteredAttributes)(a)(o.a)}}]);