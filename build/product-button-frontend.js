(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[69],{115:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n(53);var c=n(37);const o=()=>c.n>1},116:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(23),o=n(20);const r=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(o.a)(t)?t:{}},151:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(66),o=n(115),r=n(20),a=n(116);const s=t=>{if(!Object(o.a)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},n=Object(a.a)(e.style);return Object(c.__experimentalUseBorderProps)({...e,style:n})}},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));const c=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function o(t,e){return c(t)&&e in t}},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(66),o=n(115),r=n(20),a=n(116);const s=t=>{if(!Object(o.a)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},n=Object(a.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(20),o=n(23),r=n(116);const a=t=>{const e=Object(c.a)(t)?t:{},n=Object(r.a)(e.style),a=Object(c.a)(n.typography)?n.typography:{},s=Object(o.a)(a.fontFamily)?a.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:s,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:a.fontSize,fontStyle:a.fontStyle,fontWeight:a.fontWeight,letterSpacing:a.letterSpacing,lineHeight:a.lineHeight,textDecoration:a.textDecoration,textTransform:a.textTransform}}}},308:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(66),o=n(115),r=n(20),a=n(116);const s=t=>{if(!Object(o.a)())return{style:{}};const e=Object(r.a)(t)?t:{},n=Object(a.a)(e.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},358:function(t,e){},383:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return h}));var c=n(15),o=n.n(c),r=n(0),a=n(6),s=n.n(a),i=n(1),l=n(73),u=n(384),d=n(287),b=n(151),p=n(291),y=n(308),f=n(31),O=n(37),j=n(2),m=n(52),g=n(137);n(358);const S=t=>{let{product:e,colorStyles:n,borderStyles:c,typographyStyles:a,spacingStyles:d,textAlign:b}=t;const{id:p,permalink:y,add_to_cart:m,has_options:g,is_purchasable:S,is_in_stock:_}=e,{dispatchStoreEvent:h}=Object(l.a)(),{cartQuantity:w,addingToCart:v,addToCart:k}=Object(u.a)(p),x=Number.isFinite(w)&&w>0,N=!g&&S&&_,C=Object(f.decodeEntities)((null==m?void 0:m.description)||""),E=x?Object(i.sprintf)(
/* translators: %s number of products in cart. */
Object(i._n)("%d in cart","%d in cart",w,"woo-gutenberg-products-block"),w):Object(f.decodeEntities)((null==m?void 0:m.text)||Object(i.__)("Add to cart","woo-gutenberg-products-block")),A=N?"button":"a",T={};return N?T.onClick=async()=>{await k(),h("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=Object(j.getSetting)("productsSettings");t&&(window.location.href=O.c)}:(T.href=y,T.rel="nofollow",T.onClick=()=>{h("product-view-link",{product:e})}),Object(r.createElement)(A,o()({"aria-label":C,className:s()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",n.className,c.className,{loading:v,added:x},{["has-text-align-"+b]:b}),style:{...n.style,...c.style,...a.style,...d.style},disabled:v},T),E)},_=t=>{let{colorStyles:e,borderStyles:n,typographyStyles:c,spacingStyles:o}=t;return Object(r.createElement)("button",{className:s()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e.className,n.className),style:{...e.style,...n.style,...c.style,...o.style},disabled:!0})},h=t=>{const{className:e,textAlign:n}=t,{parentClassName:c}=Object(m.useInnerBlockLayoutContext)(),{product:o}=Object(m.useProductDataContext)(),a=Object(d.a)(t),i=Object(b.a)(t),l=Object(p.a)(t),u=Object(y.a)(t);return Object(r.createElement)("div",{className:s()(e,"wp-block-button","wc-block-components-product-button",{[c+"__product-add-to-cart"]:c},{["has-text-align-"+n]:n})},o.id?Object(r.createElement)(S,{product:o,colorStyles:a,borderStyles:i,typographyStyles:l,spacingStyles:u}):Object(r.createElement)(_,{colorStyles:a,borderStyles:i,typographyStyles:l,spacingStyles:u}))};e.default=Object(g.withProductDataContext)(h)},384:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var c=n(0),o=n(7),r=n(3),a=n(31),s=n(42);const i=(t,e)=>{const n=t.find(t=>{let{id:n}=t;return n===e});return n?n.quantity:0},l=t=>{const{addItemToCart:e}=Object(o.useDispatch)(r.CART_STORE_KEY),{cartItems:n,cartIsLoading:l}=Object(s.a)(),{createErrorNotice:u,removeNotice:d}=Object(o.useDispatch)("core/notices"),[b,p]=Object(c.useState)(!1),y=Object(c.useRef)(i(n,t));return Object(c.useEffect)(()=>{const e=i(n,t);e!==y.current&&(y.current=e)},[n,t]),{cartQuantity:Number.isFinite(y.current)?y.current:0,addingToCart:b,cartIsLoading:l,addToCart:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return p(!0),e(t,n).then(()=>{d("add-to-cart")}).catch(t=>{u(Object(a.decodeEntities)(t.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{p(!1)})}}}},6:function(t,e,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var r=typeof c;if("string"===r||"number"===r)t.push(c);else if(Array.isArray(c)){if(c.length){var a=o.apply(null,c);a&&t.push(a)}}else if("object"===r)if(c.toString===Object.prototype.toString)for(var s in c)n.call(c,s)&&c[s]&&t.push(s);else t.push(c.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(c=function(){return o}.apply(e,[]))||(t.exports=c)}()}}]);