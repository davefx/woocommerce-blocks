(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[18],{20:function(e,t,c){"use strict";var n=c(0),a=c(5),r=c.n(a);t.a=e=>{let t,{label:c,screenReaderLabel:a,wrapperElement:o,wrapperProps:s={}}=e;const l=null!=c,i=null!=a;return!l&&i?(t=o||"span",s={...s,className:r()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,a)):(t=o||n.Fragment,l&&i&&c!==a?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},a)):Object(n.createElement)(t,s,c))}},309:function(e,t,c){"use strict";var n=c(13),a=c.n(n),r=c(0),o=c(22),s=c(5),l=c.n(s);c(310),t.a=e=>{let{className:t="",disabled:c=!1,name:n,permalink:s="",target:i,rel:u,style:d,onClick:b,...m}=e;const p=l()("wc-block-components-product-name",t);if(c){const e=m;return Object(r.createElement)("span",a()({className:p},e,{dangerouslySetInnerHTML:{__html:Object(o.decodeEntities)(n)}}))}return Object(r.createElement)("a",a()({className:p,href:s,target:i},m,{dangerouslySetInnerHTML:{__html:Object(o.decodeEntities)(n)},style:d}))}},310:function(e,t){},340:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return d}));var n=c(0),a=c(1),r=c(5),o=c.n(r),s=c(20),l=c(61),i=c(290),u=c(147);c(341);const d=e=>{const{className:t,align:c}=e,r=Object(i.a)(e),{parentClassName:u}=Object(l.useInnerBlockLayoutContext)(),{product:d}=Object(l.useProductDataContext)();if(!d.id||!d.on_sale)return null;const b="string"==typeof c?"wc-block-components-product-sale-badge--align-"+c:"";return Object(n.createElement)("div",{className:o()("wc-block-components-product-sale-badge",t,b,{[u+"__product-onsale"]:u},r.className),style:r.style},Object(n.createElement)(s.a,{label:Object(a.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(a.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(u.withProductDataContext)(d)},341:function(e,t){},342:function(e,t,c){"use strict";let n;c.d(t,"a",(function(){return n})),function(e){e.SINGLE="single",e.THUMBNAIL="thumbnail"}(n||(n={}))},365:function(e,t,c){"use strict";c.d(t,"a",(function(){return w}));var n=c(13),a=c.n(n),r=c(0),o=c(1),s=c(5),l=c.n(s),i=c(2),u=c(61),d=c(290),b=c(147),m=c(75),p=c(340),g=(c(366),c(342));const O=e=>Object(r.createElement)("img",a()({},e,{src:i.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0})),j=e=>{let{image:t,loaded:c,showFullSize:n,fallbackAlt:o,width:s,scale:l,height:i}=e;const{thumbnail:u,src:d,srcset:b,sizes:m,alt:p}=t||{},g={alt:p||o,hidden:!c,src:u,...n&&{src:d,srcSet:b,sizes:m}},j={height:i,width:s,objectFit:l};return Object(r.createElement)(r.Fragment,null,g.src&&Object(r.createElement)("img",a()({style:j,"data-testid":"product-image"},g)),!t&&Object(r.createElement)(O,{style:j}))},w=e=>{const{className:t,imageSizing:c=g.a.SINGLE,showProductLink:n=!0,showSaleBadge:s,saleBadgeAlign:i="right",height:b,width:w,scale:_,...k}=e,E=Object(d.a)(e),{parentClassName:f}=Object(u.useInnerBlockLayoutContext)(),{product:h,isLoading:N}=Object(u.useProductDataContext)(),{dispatchStoreEvent:v}=Object(m.a)();if(!h.id)return Object(r.createElement)("div",{className:l()(t,"wc-block-components-product-image",{[f+"__product-image"]:f},E.className)},Object(r.createElement)(O,null));const y=!!h.images.length,C=y?h.images[0]:null,L=n?"a":r.Fragment,x=Object(o.sprintf)(
/* translators: %s is referring to the product name */
Object(o.__)("Link to %s","woo-gutenberg-products-block"),h.name),S={href:h.permalink,...!y&&{"aria-label":x},onClick:()=>{v("product-view-link",{product:h})}};return Object(r.createElement)("div",{className:l()(t,"wc-block-components-product-image",{[f+"__product-image"]:f},E.className)},Object(r.createElement)(L,n&&S,!!s&&Object(r.createElement)(p.default,a()({align:i},k)),Object(r.createElement)(j,{fallbackAlt:h.name,image:C,loaded:!N,showFullSize:c!==g.a.THUMBNAIL,width:w,height:b,scale:_})))};t.b=Object(b.withProductDataContext)(w)},366:function(e,t){},367:function(e,t,c){"use strict";c.d(t,"a",(function(){return m}));var n=c(0),a=c(5),r=c.n(a),o=c(61),s=c(426),l=c(147),i=c(309),u=c(75),d=c(290);c(368);const b=e=>{let{children:t,headingLevel:c,elementType:a="h"+c,...r}=e;return Object(n.createElement)(a,r,t)},m=e=>{const{className:t,headingLevel:c=2,showProductLink:a=!0,linkTarget:l,align:m}=e,p=Object(d.a)(e),{parentClassName:g}=Object(o.useInnerBlockLayoutContext)(),{product:O}=Object(o.useProductDataContext)(),{dispatchStoreEvent:j}=Object(u.a)();return O.id?Object(n.createElement)(b,{headingLevel:c,className:r()(t,p.className,"wc-block-components-product-title",{[g+"__product-title"]:g,["wc-block-components-product-title--align-"+m]:m&&Object(s.a)()}),style:Object(s.a)()?p.style:{}},Object(n.createElement)(i.a,{disabled:!a,name:O.name,permalink:O.permalink,target:l,onClick:()=>{j("product-view-link",{product:O})}})):Object(n.createElement)(b,{headingLevel:c,className:r()(t,p.className,"wc-block-components-product-title",{[g+"__product-title"]:g,["wc-block-components-product-title--align-"+m]:m&&Object(s.a)()}),style:Object(s.a)()?p.style:{}})};t.b=Object(l.withProductDataContext)(m)},368:function(e,t){},369:function(e,t){},370:function(e,t){},395:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return g}));var n=c(0),a=c(1),r=c(5),o=c.n(r),s=c(61),l=c(290),i=c(147),u=c(109);c(369);const d=e=>({width:e/5*100+"%"}),b=e=>{let{parentClassName:t}=e;const c=d(0);return Object(n.createElement)("div",{className:o()("wc-block-components-product-rating__norating-container",t+"-product-rating__norating-container")},Object(n.createElement)("div",{className:"wc-block-components-product-rating__norating",role:"img"},Object(n.createElement)("span",{style:c})),Object(n.createElement)("span",null,Object(a.__)("No Reviews","woo-gutenberg-products-block")))},m=e=>{const{rating:t,reviews:c,parentClassName:r}=e,s=d(t),l=Object(a.sprintf)(
/* translators: %f is referring to the average rating value */
Object(a.__)("Rated %f out of 5","woo-gutenberg-products-block"),t),i={__html:Object(a.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(a._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",c,"woo-gutenberg-products-block"),Object(a.sprintf)('<strong class="rating">%f</strong>',t),Object(a.sprintf)('<span class="rating">%d</span>',c))};return Object(n.createElement)("div",{className:o()("wc-block-components-product-rating__stars",r+"__product-rating__stars"),role:"img","aria-label":l},Object(n.createElement)("span",{style:s,dangerouslySetInnerHTML:i}))},p=e=>{const{reviews:t}=e,c=Object(a.sprintf)(
/* translators: %s is referring to the total of reviews for a product */
Object(a._n)("(%s customer review)","(%s customer reviews)",t,"woo-gutenberg-products-block"),t);return Object(n.createElement)("span",{className:"wc-block-components-product-rating__reviews_count"},c)},g=e=>{const{textAlign:t,isDescendentOfSingleProductBlock:c,shouldDisplayMockedReviewsWhenProductHasNoReviews:a}=e,r=Object(l.a)(e),{parentClassName:i}=Object(s.useInnerBlockLayoutContext)(),{product:d}=Object(s.useProductDataContext)(),g=(e=>{const t=parseFloat(e.average_rating);return Number.isFinite(t)&&t>0?t:0})(d),O=(e=>{const t=Object(u.a)(e.review_count)?e.review_count:parseInt(e.review_count,10);return Number.isFinite(t)&&t>0?t:0})(d),j=o()(r.className,"wc-block-components-product-rating",{[i+"__product-rating"]:i,["has-text-align-"+t]:t}),w=a?Object(n.createElement)(b,{parentClassName:i}):null,_=O?Object(n.createElement)(m,{rating:g,reviews:O,parentClassName:i}):w;if(O||a)return Object(n.createElement)("div",{className:j,style:r.style},Object(n.createElement)("div",{className:"wc-block-components-product-rating__container"},_,O&&c?Object(n.createElement)(p,{reviews:O}):null))};t.default=Object(i.withProductDataContext)(g)},396:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return _}));var n=c(13),a=c.n(n),r=c(0),o=c(5),s=c.n(o),l=c(1),i=c(75),u=c(397),d=c(290),b=c(22),m=c(26),p=c(2),g=c(61),O=c(147);c(370);const j=e=>{let{product:t,className:c,style:n,textAlign:o}=e;const{id:d,permalink:g,add_to_cart:O,has_options:j,is_purchasable:w,is_in_stock:_}=t,{dispatchStoreEvent:k}=Object(i.a)(),{cartQuantity:E,addingToCart:f,addToCart:h}=Object(u.a)(d),N=Number.isFinite(E)&&E>0,v=!j&&w&&_,y=Object(b.decodeEntities)((null==O?void 0:O.description)||""),C=N?Object(l.sprintf)(
/* translators: %s number of products in cart. */
Object(l._n)("%d in cart","%d in cart",E,"woo-gutenberg-products-block"),E):Object(b.decodeEntities)((null==O?void 0:O.text)||Object(l.__)("Add to cart","woo-gutenberg-products-block")),L=v?"button":"a",x={};return v?x.onClick=async()=>{await h(),k("cart-add-item",{product:t});const{cartRedirectAfterAdd:e}=Object(p.getSetting)("productsSettings");e&&(window.location.href=m.c)}:(x.href=g,x.rel="nofollow",x.onClick=()=>{k("product-view-link",{product:t})}),Object(r.createElement)(L,a()({},x,{"aria-label":y,disabled:f,className:s()(c,"wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",{loading:f,added:N},{["has-text-align-"+o]:o}),style:n}),C)},w=e=>{let{className:t,style:c}=e;return Object(r.createElement)("button",{className:s()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",t),style:c,disabled:!0})},_=e=>{const{className:t,textAlign:c}=e,n=Object(d.a)(e),{parentClassName:a}=Object(g.useInnerBlockLayoutContext)(),{product:o}=Object(g.useProductDataContext)();return Object(r.createElement)("div",{className:s()(t,"wp-block-button","wc-block-components-product-button",{[a+"__product-add-to-cart"]:a},{["has-text-align-"+c]:c})},o.id?Object(r.createElement)(j,{product:o,style:n.style,className:n.className}):Object(r.createElement)(w,{style:n.style,className:n.className}))};t.default=Object(O.withProductDataContext)(_)},397:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(0),a=c(4),r=c(3),o=c(22),s=c(46);const l=(e,t)=>{const c=e.find(e=>{let{id:c}=e;return c===t});return c?c.quantity:0},i=e=>{const{addItemToCart:t}=Object(a.useDispatch)(r.CART_STORE_KEY),{cartItems:c,cartIsLoading:i}=Object(s.a)(),{createErrorNotice:u,removeNotice:d}=Object(a.useDispatch)("core/notices"),[b,m]=Object(n.useState)(!1),p=Object(n.useRef)(l(c,e));return Object(n.useEffect)(()=>{const t=l(c,e);t!==p.current&&(p.current=t)},[c,e]),{cartQuantity:Number.isFinite(p.current)?p.current:0,addingToCart:b,cartIsLoading:i,addToCart:function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return m(!0),t(e,c).then(()=>{d("add-to-cart")}).catch(e=>{u(Object(o.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{m(!1)})}}}},426:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c(235);var n=c(26);const a=()=>n.o>1},505:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(46),r=c(61),o=c(365),s=c(367),l=c(395),i=c(340),u=c(425),d=c(396),b=c(342),m=e=>{let{product:t}=e;return Object(n.createElement)("div",{className:"cross-sells-product"},Object(n.createElement)(r.InnerBlockLayoutContextProvider,{parentName:"woocommerce/cart-cross-sells-block",parentClassName:"wp-block-cart-cross-sells-product"},Object(n.createElement)(r.ProductDataContextProvider,{isLoading:!1,product:t},Object(n.createElement)("div",null,Object(n.createElement)(o.a,{className:"",showSaleBadge:!1,productId:t.id,showProductLink:!1,saleBadgeAlign:"left",imageSizing:b.a.SINGLE,isDescendentOfQueryLoop:!1}),Object(n.createElement)(s.a,{align:"",headingLevel:3,showProductLink:!0}),Object(n.createElement)(l.Block,null),Object(n.createElement)(i.Block,{productId:t.id,align:"left"}),Object(n.createElement)(u.Block,null)),Object(n.createElement)(d.Block,null))))},p=e=>{let{products:t,columns:c}=e;const a=t.map((e,t)=>t>=c?null:Object(n.createElement)(m,{isLoading:!1,product:e,key:e.id}));return Object(n.createElement)("div",null,a)},g=c(166);t.default=e=>{let{className:t,columns:c}=e;const{crossSellsProducts:r}=Object(a.a)();return void 0===c&&(c=g.attributes.columns.default),Object(n.createElement)(p,{className:t,columns:c,products:r})}}}]);