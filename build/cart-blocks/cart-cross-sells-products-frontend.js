(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[18],{19:function(e,t,c){"use strict";var n=c(0),a=c(4),r=c.n(a);t.a=({label:e,screenReaderLabel:t,wrapperElement:c,wrapperProps:a={}})=>{let o;const s=null!=e,l=null!=t;return!s&&l?(o=c||"span",a={...a,className:r()(a.className,"screen-reader-text")},Object(n.createElement)(o,{...a},t)):(o=c||n.Fragment,s&&l&&e!==t?Object(n.createElement)(o,{...a},Object(n.createElement)("span",{"aria-hidden":"true"},e),Object(n.createElement)("span",{className:"screen-reader-text"},t)):Object(n.createElement)(o,{...a},e))}},311:function(e,t,c){"use strict";var n=c(0),a=c(23),r=c(4),o=c.n(r);c(312),t.a=({className:e="",disabled:t=!1,name:c,permalink:r="",target:s,rel:l,style:i,onClick:u,...d})=>{const b=o()("wc-block-components-product-name",e);if(t){const e=d;return Object(n.createElement)("span",{className:b,...e,dangerouslySetInnerHTML:{__html:Object(a.decodeEntities)(c)}})}return Object(n.createElement)("a",{className:b,href:r,target:s,...d,dangerouslySetInnerHTML:{__html:Object(a.decodeEntities)(c)},style:i})}},312:function(e,t){},342:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return d}));var n=c(0),a=c(1),r=c(4),o=c.n(r),s=c(19),l=c(60),i=c(291),u=c(145);c(343);const d=e=>{const{className:t,align:c}=e,r=Object(i.a)(e),{parentClassName:u}=Object(l.useInnerBlockLayoutContext)(),{product:d}=Object(l.useProductDataContext)();if(!d.id||!d.on_sale)return null;const b="string"==typeof c?`wc-block-components-product-sale-badge--align-${c}`:"";return Object(n.createElement)("div",{className:o()("wc-block-components-product-sale-badge",t,b,{[`${u}__product-onsale`]:u},r.className),style:r.style},Object(n.createElement)(s.a,{label:Object(a.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(a.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(u.withProductDataContext)(d)},343:function(e,t){},344:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));let n=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({})},366:function(e,t,c){"use strict";c.d(t,"a",(function(){return O}));var n=c(0),a=c(1),r=c(4),o=c.n(r),s=c(2),l=c(60),i=c(291),u=c(145),d=c(73),b=c(342),m=(c(367),c(344));const p=e=>Object(n.createElement)("img",{...e,src:s.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),g=({image:e,loaded:t,showFullSize:c,fallbackAlt:a,width:r,scale:o,height:s})=>{const{thumbnail:l,src:i,srcset:u,sizes:d,alt:b}=e||{},m={alt:b||a,hidden:!t,src:l,...c&&{src:i,srcSet:u,sizes:d}},g={height:s,width:r,objectFit:o};return Object(n.createElement)(n.Fragment,null,m.src&&Object(n.createElement)("img",{style:g,"data-testid":"product-image",...m}),!e&&Object(n.createElement)(p,{style:g}))},O=e=>{const{className:t,imageSizing:c=m.a.SINGLE,showProductLink:r=!0,showSaleBadge:s,saleBadgeAlign:u="right",height:O,width:j,scale:w,..._}=e,k=Object(i.a)(e),{parentClassName:E}=Object(l.useInnerBlockLayoutContext)(),{product:f,isLoading:h}=Object(l.useProductDataContext)(),{dispatchStoreEvent:N}=Object(d.a)();if(!f.id)return Object(n.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[`${E}__product-image`]:E},k.className)},Object(n.createElement)(p,null));const v=!!f.images.length,y=v?f.images[0]:null,C=r?"a":n.Fragment,L=Object(a.sprintf)(/* translators: %s is referring to the product name */
Object(a.__)("Link to %s","woo-gutenberg-products-block"),f.name),x={href:f.permalink,...!v&&{"aria-label":L},onClick:()=>{N("product-view-link",{product:f})}};return Object(n.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[`${E}__product-image`]:E},k.className)},Object(n.createElement)(C,{...r&&x},!!s&&Object(n.createElement)(b.default,{align:u,..._}),Object(n.createElement)(g,{fallbackAlt:f.name,image:y,loaded:!h,showFullSize:c!==m.a.THUMBNAIL,width:j,height:O,scale:w})))};t.b=Object(u.withProductDataContext)(O)},367:function(e,t){},368:function(e,t,c){"use strict";c.d(t,"a",(function(){return m}));var n=c(0),a=c(4),r=c.n(a),o=c(60),s=c(426),l=c(145),i=c(311),u=c(73),d=c(291);c(369);const b=({children:e,headingLevel:t,elementType:c=`h${t}`,...a})=>Object(n.createElement)(c,{...a},e),m=e=>{const{className:t,headingLevel:c=2,showProductLink:a=!0,linkTarget:l,align:m}=e,p=Object(d.a)(e),{parentClassName:g}=Object(o.useInnerBlockLayoutContext)(),{product:O}=Object(o.useProductDataContext)(),{dispatchStoreEvent:j}=Object(u.a)();return O.id?Object(n.createElement)(b,{headingLevel:c,className:r()(t,p.className,"wc-block-components-product-title",{[`${g}__product-title`]:g,[`wc-block-components-product-title--align-${m}`]:m&&Object(s.a)()}),style:Object(s.a)()?p.style:{}},Object(n.createElement)(i.a,{disabled:!a,name:O.name,permalink:O.permalink,target:l,onClick:()=>{j("product-view-link",{product:O})}})):Object(n.createElement)(b,{headingLevel:c,className:r()(t,p.className,"wc-block-components-product-title",{[`${g}__product-title`]:g,[`wc-block-components-product-title--align-${m}`]:m&&Object(s.a)()}),style:Object(s.a)()?p.style:{}})};t.b=Object(l.withProductDataContext)(m)},369:function(e,t){},370:function(e,t){},371:function(e,t){},398:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return g}));var n=c(0),a=c(1),r=c(4),o=c.n(r),s=c(60),l=c(291),i=c(145),u=c(120);c(370);const d=e=>({width:e/5*100+"%"}),b=({parentClassName:e})=>{const t=d(0);return Object(n.createElement)("div",{className:o()("wc-block-components-product-rating__norating-container",`${e}-product-rating__norating-container`)},Object(n.createElement)("div",{className:"wc-block-components-product-rating__norating",role:"img"},Object(n.createElement)("span",{style:t})),Object(n.createElement)("span",null,Object(a.__)("No Reviews","woo-gutenberg-products-block")))},m=e=>{const{rating:t,reviews:c,parentClassName:r}=e,s=d(t),l=Object(a.sprintf)(/* translators: %f is referring to the average rating value */
Object(a.__)("Rated %f out of 5","woo-gutenberg-products-block"),t),i={__html:Object(a.sprintf)(/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(a._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",c,"woo-gutenberg-products-block"),Object(a.sprintf)('<strong class="rating">%f</strong>',t),Object(a.sprintf)('<span class="rating">%d</span>',c))};return Object(n.createElement)("div",{className:o()("wc-block-components-product-rating__stars",`${r}__product-rating__stars`),role:"img","aria-label":l},Object(n.createElement)("span",{style:s,dangerouslySetInnerHTML:i}))},p=e=>{const{reviews:t}=e,c=Object(a.sprintf)(/* translators: %s is referring to the total of reviews for a product */
Object(a._n)("(%s customer review)","(%s customer reviews)",t,"woo-gutenberg-products-block"),t);return Object(n.createElement)("span",{className:"wc-block-components-product-rating__reviews_count"},c)},g=e=>{const{textAlign:t,isDescendentOfSingleProductBlock:c,shouldDisplayMockedReviewsWhenProductHasNoReviews:a}=e,r=Object(l.a)(e),{parentClassName:i}=Object(s.useInnerBlockLayoutContext)(),{product:d}=Object(s.useProductDataContext)(),g=(e=>{const t=parseFloat(e.average_rating);return Number.isFinite(t)&&t>0?t:0})(d),O=(e=>{const t=Object(u.a)(e.review_count)?e.review_count:parseInt(e.review_count,10);return Number.isFinite(t)&&t>0?t:0})(d),j=o()(r.className,"wc-block-components-product-rating",{[`${i}__product-rating`]:i,[`has-text-align-${t}`]:t}),w=a?Object(n.createElement)(b,{parentClassName:i}):null,_=O?Object(n.createElement)(m,{rating:g,reviews:O,parentClassName:i}):w;if(O||a)return Object(n.createElement)("div",{className:j,style:r.style},Object(n.createElement)("div",{className:"wc-block-components-product-rating__container"},_,O&&c?Object(n.createElement)(p,{reviews:O}):null))};t.default=Object(i.withProductDataContext)(g)},399:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return j}));var n=c(0),a=c(4),r=c.n(a),o=c(1),s=c(73),l=c(400),i=c(291),u=c(23),d=c(30),b=c(2),m=c(60),p=c(145);c(371);const g=({product:e,className:t,style:c,textAlign:a})=>{const{id:i,permalink:m,add_to_cart:p,has_options:g,is_purchasable:O,is_in_stock:j}=e,{dispatchStoreEvent:w}=Object(s.a)(),{cartQuantity:_,addingToCart:k,addToCart:E}=Object(l.a)(i),f=Number.isFinite(_)&&_>0,h=!g&&O&&j,N=Object(u.decodeEntities)((null==p?void 0:p.description)||""),v=f?Object(o.sprintf)(/* translators: %s number of products in cart. */
Object(o._n)("%d in cart","%d in cart",_,"woo-gutenberg-products-block"),_):Object(u.decodeEntities)((null==p?void 0:p.text)||Object(o.__)("Add to cart","woo-gutenberg-products-block")),y=h?"button":"a",C={};return h?C.onClick=async()=>{await E(),w("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=Object(b.getSetting)("productsSettings");t&&(window.location.href=d.c)}:(C.href=m,C.rel="nofollow",C.onClick=()=>{w("product-view-link",{product:e})}),Object(n.createElement)(y,{...C,"aria-label":N,disabled:k,className:r()(t,"wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",{loading:k,added:f},{[`has-text-align-${a}`]:a}),style:c},v)},O=({className:e,style:t})=>Object(n.createElement)("button",{className:r()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e),style:t,disabled:!0}),j=e=>{const{className:t,textAlign:c}=e,a=Object(i.a)(e),{parentClassName:o}=Object(m.useInnerBlockLayoutContext)(),{product:s}=Object(m.useProductDataContext)();return Object(n.createElement)("div",{className:r()(t,"wp-block-button","wc-block-components-product-button",{[`${o}__product-add-to-cart`]:o},{[`has-text-align-${c}`]:c})},s.id?Object(n.createElement)(g,{product:s,style:a.style,className:a.className}):Object(n.createElement)(O,{style:a.style,className:a.className}))};t.default=Object(p.withProductDataContext)(j)},400:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(0),a=c(5),r=c(3),o=c(23),s=c(72);const l=(e,t)=>{const c=e.find((({id:e})=>e===t));return c?c.quantity:0},i=e=>{const{addItemToCart:t}=Object(a.useDispatch)(r.CART_STORE_KEY),{cartItems:c,cartIsLoading:i}=Object(s.a)(),{createErrorNotice:u,removeNotice:d}=Object(a.useDispatch)("core/notices"),[b,m]=Object(n.useState)(!1),p=Object(n.useRef)(l(c,e));return Object(n.useEffect)((()=>{const t=l(c,e);t!==p.current&&(p.current=t)}),[c,e]),{cartQuantity:Number.isFinite(p.current)?p.current:0,addingToCart:b,cartIsLoading:i,addToCart:(c=1)=>(m(!0),t(e,c).then((()=>{d("add-to-cart")})).catch((e=>{u(Object(o.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})})).finally((()=>{m(!1)})))}}},426:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c(236);var n=c(30);const a=()=>n.o>1},507:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(72),r=c(60),o=c(366),s=c(368),l=c(398),i=c(342),u=c(425),d=c(399),b=c(344),m=({product:e})=>Object(n.createElement)("div",{className:"cross-sells-product"},Object(n.createElement)(r.InnerBlockLayoutContextProvider,{parentName:"woocommerce/cart-cross-sells-block",parentClassName:"wp-block-cart-cross-sells-product"},Object(n.createElement)(r.ProductDataContextProvider,{isLoading:!1,product:e},Object(n.createElement)("div",null,Object(n.createElement)(o.a,{className:"",showSaleBadge:!1,productId:e.id,showProductLink:!1,saleBadgeAlign:"left",imageSizing:b.a.SINGLE,isDescendentOfQueryLoop:!1}),Object(n.createElement)(s.a,{align:"",headingLevel:3,showProductLink:!0}),Object(n.createElement)(l.Block,null),Object(n.createElement)(i.Block,{productId:e.id,align:"left"}),Object(n.createElement)(u.Block,null)),Object(n.createElement)(d.Block,null)))),p=({products:e,columns:t})=>{const c=e.map(((e,c)=>c>=t?null:Object(n.createElement)(m,{isLoading:!1,product:e,key:e.id})));return Object(n.createElement)("div",null,c)},g=c(165);t.default=({className:e,columns:t})=>{const{crossSellsProducts:c}=Object(a.a)();return void 0===t&&(t=g.attributes.columns.default),Object(n.createElement)(p,{className:e,columns:t,products:c})}}}]);