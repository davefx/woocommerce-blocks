(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[19],{18:function(e,t,c){"use strict";var n=c(0),a=c(4),r=c.n(a);t.a=({label:e,screenReaderLabel:t,wrapperElement:c,wrapperProps:a={}})=>{let o;const s=null!=e,l=null!=t;return!s&&l?(o=c||"span",a={...a,className:r()(a.className,"screen-reader-text")},Object(n.createElement)(o,{...a},t)):(o=c||n.Fragment,s&&l&&e!==t?Object(n.createElement)(o,{...a},Object(n.createElement)("span",{"aria-hidden":"true"},e),Object(n.createElement)("span",{className:"screen-reader-text"},t)):Object(n.createElement)(o,{...a},e))}},312:function(e,t,c){"use strict";var n=c(0),a=c(22),r=c(4),o=c.n(r);c(313),t.a=({className:e="",disabled:t=!1,name:c,permalink:r="",target:s,rel:l,style:i,onClick:u,...d})=>{const b=o()("wc-block-components-product-name",e);if(t){const e=d;return Object(n.createElement)("span",{className:b,...e,dangerouslySetInnerHTML:{__html:Object(a.decodeEntities)(c)}})}return Object(n.createElement)("a",{className:b,href:r,target:s,...d,dangerouslySetInnerHTML:{__html:Object(a.decodeEntities)(c)},style:i})}},313:function(e,t){},343:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return d}));var n=c(0),a=c(1),r=c(4),o=c.n(r),s=c(18),l=c(59),i=c(293),u=c(144);c(344);const d=e=>{const{className:t,align:c}=e,r=Object(i.a)(e),{parentClassName:u}=Object(l.useInnerBlockLayoutContext)(),{product:d}=Object(l.useProductDataContext)();if(!(d.id&&d.on_sale||e.isDescendentOfSingleProductTemplate))return null;const b="string"==typeof c?`wc-block-components-product-sale-badge--align-${c}`:"";return Object(n.createElement)("div",{className:o()("wc-block-components-product-sale-badge",t,b,{[`${u}__product-onsale`]:u},r.className),style:r.style},Object(n.createElement)(s.a,{label:Object(a.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(a.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(u.withProductDataContext)(d)},344:function(e,t){},345:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));let n=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({})},368:function(e,t,c){"use strict";c.d(t,"a",(function(){return g}));var n=c(0),a=c(1),r=c(4),o=c.n(r),s=c(2),l=c(59),i=c(293),u=c(144),d=c(73),b=c(343),m=(c(369),c(345));const p=e=>Object(n.createElement)("img",{...e,src:s.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),O=({image:e,loaded:t,showFullSize:c,fallbackAlt:a,width:r,scale:o,height:s})=>{const{thumbnail:l,src:i,srcset:u,sizes:d,alt:b}=e||{},m={alt:b||a,hidden:!t,src:l,...c&&{src:i,srcSet:u,sizes:d}},O={height:s,width:r,objectFit:o};return Object(n.createElement)(n.Fragment,null,m.src&&Object(n.createElement)("img",{style:O,"data-testid":"product-image",...m}),!e&&Object(n.createElement)(p,{style:O}))},g=e=>{const{className:t,imageSizing:c=m.a.SINGLE,showProductLink:r=!0,showSaleBadge:s,saleBadgeAlign:u="right",height:g,width:j,scale:w,..._}=e,k=Object(i.a)(e),{parentClassName:E}=Object(l.useInnerBlockLayoutContext)(),{product:f,isLoading:N}=Object(l.useProductDataContext)(),{dispatchStoreEvent:h}=Object(d.a)();if(!f.id)return Object(n.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[`${E}__product-image`]:E},k.className),style:k.style},Object(n.createElement)(p,null));const v=!!f.images.length,y=v?f.images[0]:null,C=r?"a":n.Fragment,L=Object(a.sprintf)(/* translators: %s is referring to the product name */
Object(a.__)("Link to %s","woo-gutenberg-products-block"),f.name),S={href:f.permalink,...!v&&{"aria-label":L},onClick:()=>{h("product-view-link",{product:f})}};return Object(n.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[`${E}__product-image`]:E},k.className),style:k.style},Object(n.createElement)(C,{...r&&S},!!s&&Object(n.createElement)(b.default,{align:u,..._}),Object(n.createElement)(O,{fallbackAlt:f.name,image:y,loaded:!N,showFullSize:c!==m.a.THUMBNAIL,width:j,height:g,scale:w})))};t.b=Object(u.withProductDataContext)(g)},369:function(e,t){},370:function(e,t,c){"use strict";c.d(t,"a",(function(){return m}));var n=c(0),a=c(4),r=c.n(a),o=c(59),s=c(427),l=c(144),i=c(312),u=c(73),d=c(293);c(371);const b=({children:e,headingLevel:t,elementType:c=`h${t}`,...a})=>Object(n.createElement)(c,{...a},e),m=e=>{const{className:t,headingLevel:c=2,showProductLink:a=!0,linkTarget:l,align:m}=e,p=Object(d.a)(e),{parentClassName:O}=Object(o.useInnerBlockLayoutContext)(),{product:g}=Object(o.useProductDataContext)(),{dispatchStoreEvent:j}=Object(u.a)();return g.id?Object(n.createElement)(b,{headingLevel:c,className:r()(t,p.className,"wc-block-components-product-title",{[`${O}__product-title`]:O,[`wc-block-components-product-title--align-${m}`]:m&&Object(s.a)()}),style:Object(s.a)()?p.style:{}},Object(n.createElement)(i.a,{disabled:!a,name:g.name,permalink:g.permalink,target:l,onClick:()=>{j("product-view-link",{product:g})}})):Object(n.createElement)(b,{headingLevel:c,className:r()(t,p.className,"wc-block-components-product-title",{[`${O}__product-title`]:O,[`wc-block-components-product-title--align-${m}`]:m&&Object(s.a)()}),style:Object(s.a)()?p.style:{}})};t.b=Object(l.withProductDataContext)(m)},371:function(e,t){},372:function(e,t){},373:function(e,t){},402:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return O}));var n=c(0),a=c(1),r=c(4),o=c.n(r),s=c(59),l=c(293),i=c(144),u=c(119);c(372);const d=e=>({width:e/5*100+"%"}),b=({parentClassName:e})=>{const t=d(0);return Object(n.createElement)("div",{className:o()("wc-block-components-product-rating__norating-container",`${e}-product-rating__norating-container`)},Object(n.createElement)("div",{className:"wc-block-components-product-rating__norating",role:"img"},Object(n.createElement)("span",{style:t})),Object(n.createElement)("span",null,Object(a.__)("No Reviews","woo-gutenberg-products-block")))},m=e=>{const{rating:t,reviews:c,parentClassName:r}=e,s=d(t),l=Object(a.sprintf)(/* translators: %f is referring to the average rating value */
Object(a.__)("Rated %f out of 5","woo-gutenberg-products-block"),t),i={__html:Object(a.sprintf)(/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(a._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",c,"woo-gutenberg-products-block"),Object(a.sprintf)('<strong class="rating">%f</strong>',t),Object(a.sprintf)('<span class="rating">%d</span>',c))};return Object(n.createElement)("div",{className:o()("wc-block-components-product-rating__stars",`${r}__product-rating__stars`),role:"img","aria-label":l},Object(n.createElement)("span",{style:s,dangerouslySetInnerHTML:i}))},p=e=>{const{reviews:t}=e,c=Object(a.sprintf)(/* translators: %s is referring to the total of reviews for a product */
Object(a._n)("(%s customer review)","(%s customer reviews)",t,"woo-gutenberg-products-block"),t);return Object(n.createElement)("span",{className:"wc-block-components-product-rating__reviews_count"},c)},O=e=>{const{textAlign:t,isDescendentOfSingleProductBlock:c,shouldDisplayMockedReviewsWhenProductHasNoReviews:a}=e,r=Object(l.a)(e),{parentClassName:i}=Object(s.useInnerBlockLayoutContext)(),{product:d}=Object(s.useProductDataContext)(),O=(e=>{const t=parseFloat(e.average_rating);return Number.isFinite(t)&&t>0?t:0})(d),g=(e=>{const t=Object(u.a)(e.review_count)?e.review_count:parseInt(e.review_count,10);return Number.isFinite(t)&&t>0?t:0})(d),j=o()(r.className,"wc-block-components-product-rating",{[`${i}__product-rating`]:i,[`has-text-align-${t}`]:t}),w=a?Object(n.createElement)(b,{parentClassName:i}):null,_=g?Object(n.createElement)(m,{rating:O,reviews:g,parentClassName:i}):w;if(g||a)return Object(n.createElement)("div",{className:j,style:r.style},Object(n.createElement)("div",{className:"wc-block-components-product-rating__container"},_,g&&c?Object(n.createElement)(p,{reviews:g}):null))};t.default=Object(i.withProductDataContext)(O)},403:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return j}));var n=c(0),a=c(4),r=c.n(a),o=c(1),s=c(73),l=c(404),i=c(293),u=c(22),d=c(29),b=c(2),m=c(59),p=c(144);c(373);const O=({product:e,className:t,style:c})=>{const{id:a,permalink:i,add_to_cart:m,has_options:p,is_purchasable:O,is_in_stock:g}=e,{dispatchStoreEvent:j}=Object(s.a)(),{cartQuantity:w,addingToCart:_,addToCart:k}=Object(l.a)(a),E=Number.isFinite(w)&&w>0,f=!p&&O&&g,N=Object(u.decodeEntities)((null==m?void 0:m.description)||""),h=E?Object(o.sprintf)(/* translators: %s number of products in cart. */
Object(o._n)("%d in cart","%d in cart",w,"woo-gutenberg-products-block"),w):Object(u.decodeEntities)((null==m?void 0:m.text)||Object(o.__)("Add to cart","woo-gutenberg-products-block")),v=f?"button":"a",y={};return f?y.onClick=async()=>{await k(),j("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=Object(b.getSetting)("productsSettings");t&&(window.location.href=d.c)}:(y.href=i,y.rel="nofollow",y.onClick=()=>{j("product-view-link",{product:e})}),Object(n.createElement)(v,{...y,"aria-label":N,disabled:_,className:r()(t,"wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",{loading:_,added:E}),style:c},h)},g=({className:e,style:t})=>Object(n.createElement)("button",{className:r()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e),style:t,disabled:!0}),j=e=>{const{className:t,textAlign:c}=e,a=Object(i.a)(e),{parentClassName:o}=Object(m.useInnerBlockLayoutContext)(),{product:s}=Object(m.useProductDataContext)();return Object(n.createElement)("div",{className:r()(t,"wp-block-button","wc-block-components-product-button",{[`${o}__product-add-to-cart`]:o,[`align-${c}`]:c})},s.id?Object(n.createElement)(O,{product:s,style:a.style,className:a.className}):Object(n.createElement)(g,{style:a.style,className:a.className}))};t.default=Object(p.withProductDataContext)(j)},404:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(0),a=c(5),r=c(3),o=c(22),s=c(72);const l=(e,t)=>{const c=e.find((({id:e})=>e===t));return c?c.quantity:0},i=e=>{const{addItemToCart:t}=Object(a.useDispatch)(r.CART_STORE_KEY),{cartItems:c,cartIsLoading:i}=Object(s.a)(),{createErrorNotice:u,removeNotice:d}=Object(a.useDispatch)("core/notices"),[b,m]=Object(n.useState)(!1),p=Object(n.useRef)(l(c,e));return Object(n.useEffect)((()=>{const t=l(c,e);t!==p.current&&(p.current=t)}),[c,e]),{cartQuantity:Number.isFinite(p.current)?p.current:0,addingToCart:b,cartIsLoading:i,addToCart:(c=1)=>(m(!0),t(e,c).then((()=>{d("add-to-cart")})).catch((e=>{u(Object(o.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})})).finally((()=>{m(!1)})))}}},427:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c(232);var n=c(29);const a=()=>n.o>1},509:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(72),r=c(59),o=c(368),s=c(370),l=c(402),i=c(343),u=c(426),d=c(403),b=c(345),m=({product:e})=>Object(n.createElement)("div",{className:"cross-sells-product"},Object(n.createElement)(r.InnerBlockLayoutContextProvider,{parentName:"woocommerce/cart-cross-sells-block",parentClassName:"wp-block-cart-cross-sells-product"},Object(n.createElement)(r.ProductDataContextProvider,{isLoading:!1,product:e},Object(n.createElement)("div",null,Object(n.createElement)(o.a,{className:"",showSaleBadge:!1,productId:e.id,showProductLink:!1,saleBadgeAlign:"left",imageSizing:b.a.SINGLE,isDescendentOfQueryLoop:!1}),Object(n.createElement)(s.a,{align:"",headingLevel:3,showProductLink:!0}),Object(n.createElement)(l.Block,null),Object(n.createElement)(i.Block,{productId:e.id,align:"left"}),Object(n.createElement)(u.Block,null)),Object(n.createElement)(d.Block,null)))),p=({products:e,columns:t})=>{const c=e.map(((e,c)=>c>=t?null:Object(n.createElement)(m,{isLoading:!1,product:e,key:e.id})));return Object(n.createElement)("div",null,c)},O=c(163);t.default=({className:e,columns:t})=>{const{crossSellsProducts:c}=Object(a.a)();return void 0===t&&(t=O.attributes.columns.default),Object(n.createElement)(p,{className:e,columns:t,products:c})}}}]);