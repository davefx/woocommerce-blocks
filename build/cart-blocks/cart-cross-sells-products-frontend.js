(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[6737],{5135:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var c=r(9307),n=r(2629),a=r(4184),o=r.n(a);r(5641);const l=({className:e="",disabled:t=!1,name:r,permalink:a="",target:l,rel:s,style:i,onClick:u,...d})=>{const m=o()("wc-block-components-product-name",e);if(t){const e=d;return(0,c.createElement)("span",{className:m,...e,dangerouslySetInnerHTML:{__html:(0,n.decodeEntities)(r)}})}return(0,c.createElement)("a",{className:m,href:a,target:l,...d,dangerouslySetInnerHTML:{__html:(0,n.decodeEntities)(r)},style:i})}},6805:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var c=r(9307),n=r(5736),a=r(711),o=r(4184),l=r.n(o),s=r(4293);r(5138);const i=({currency:e,maxPrice:t,minPrice:r,priceClassName:o,priceStyle:i={}})=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("span",{className:"screen-reader-text"},(0,n.sprintf)(/* translators: %1$s min price, %2$s max price */
(0,n.__)("Price between %1$s and %2$s","woo-gutenberg-products-block"),(0,s.formatPrice)(r),(0,s.formatPrice)(t))),(0,c.createElement)("span",{"aria-hidden":!0},(0,c.createElement)(a.FormattedMonetaryAmount,{className:l()("wc-block-components-product-price__value",o),currency:e,value:r,style:i})," — ",(0,c.createElement)(a.FormattedMonetaryAmount,{className:l()("wc-block-components-product-price__value",o),currency:e,value:t,style:i}))),u=({currency:e,regularPriceClassName:t,regularPriceStyle:r,regularPrice:o,priceClassName:s,priceStyle:i,price:u})=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("span",{className:"screen-reader-text"},(0,n.__)("Previous price:","woo-gutenberg-products-block")),(0,c.createElement)(a.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,c.createElement)("del",{className:l()("wc-block-components-product-price__regular",t),style:r},e),value:o}),(0,c.createElement)("span",{className:"screen-reader-text"},(0,n.__)("Discounted price:","woo-gutenberg-products-block")),(0,c.createElement)(a.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,c.createElement)("ins",{className:l()("wc-block-components-product-price__value","is-discounted",s),style:i},e),value:u})),d=({align:e,className:t,currency:r,format:n="<price/>",maxPrice:o,minPrice:s,price:d,priceClassName:m,priceStyle:p,regularPrice:g,regularPriceClassName:b,regularPriceStyle:_,style:y})=>{const v=l()(t,"price","wc-block-components-product-price",{[`wc-block-components-product-price--align-${e}`]:e});n.includes("<price/>")||(n="<price/>",console.error("Price formats need to include the `<price/>` tag."));const w=g&&d!==g;let N=(0,c.createElement)("span",{className:l()("wc-block-components-product-price__value",m)});return w?N=(0,c.createElement)(u,{currency:r,price:d,priceClassName:m,priceStyle:p,regularPrice:g,regularPriceClassName:b,regularPriceStyle:_}):void 0!==s&&void 0!==o?N=(0,c.createElement)(i,{currency:r,maxPrice:o,minPrice:s,priceClassName:m,priceStyle:p}):d&&(N=(0,c.createElement)(a.FormattedMonetaryAmount,{className:l()("wc-block-components-product-price__value",m),currency:r,value:d,style:p})),(0,c.createElement)("span",{className:v,style:y},(0,c.createInterpolateElement)(n,{price:N}))}},2147:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>J});var c=r(9307),n=r(4055),a=r(2864),o=r(5736),l=r(4184),s=r.n(l),i=r(4617),u=r(7884),d=r(2646),m=r(9784),p=r(2289);function g(e={}){const t={};return(0,p.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function b(e,t){return e&&t?`has-${(0,m.o)(t)}-${e}`:""}const _=e=>{const t=(e=>{const t=(0,u.Kn)(e)?e:{style:{}};let r=t.style;return(0,d.H)(r)&&(r=JSON.parse(r)||{}),(0,u.Kn)(r)||(r={}),{...t,style:r}})(e),r=function(e){var t,r,c,n,a,o,l;const{backgroundColor:i,textColor:d,gradient:m,style:p}=e,_=b("background-color",i),y=b("color",d),v=function(e){if(e)return`has-${e}-gradient-background`}(m),w=v||(null==p||null===(t=p.color)||void 0===t?void 0:t.gradient);return{className:s()(y,v,{[_]:!w&&!!_,"has-text-color":d||(null==p||null===(r=p.color)||void 0===r?void 0:r.text),"has-background":i||(null==p||null===(c=p.color)||void 0===c?void 0:c.background)||m||(null==p||null===(n=p.color)||void 0===n?void 0:n.gradient),"has-link-color":(0,u.Kn)(null==p||null===(a=p.elements)||void 0===a?void 0:a.link)?null==p||null===(o=p.elements)||void 0===o||null===(l=o.link)||void 0===l?void 0:l.color:void 0}),style:g({color:(null==p?void 0:p.color)||{}})}}(t),c=function(e){var t;const r=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:r,style:c}=e,n=r?b("border-color",r):"";return s()({"has-border-color":!!r||!(null==c||null===(t=c.border)||void 0===t||!t.color),[n]:!!n})}(e),style:g({border:r})}}(t),n=function(e){var t;return{className:void 0,style:g({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}(t),a=(e=>{const t=(0,u.Kn)(e.style.typography)?e.style.typography:{},r=(0,d.H)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:r,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}})(t);return{className:s()(a.className,r.className,c.className,n.className),style:{...a.style,...r.style,...c.style,...n.style}}};var y=r(721),v=r(5918),w=r(711);r(1314);const N=e=>{const{className:t,align:r}=e,n=_(e),{parentClassName:l}=(0,a.useInnerBlockLayoutContext)(),{product:i}=(0,a.useProductDataContext)();if(!(i.id&&i.on_sale||e.isDescendentOfSingleProductTemplate))return null;const u="string"==typeof r?`wc-block-components-product-sale-badge--align-${r}`:"";return(0,c.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,u,{[`${l}__product-onsale`]:l},n.className),style:n.style},(0,c.createElement)(w.Label,{label:(0,o.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:(0,o.__)("Product on sale","woo-gutenberg-products-block")}))},k=(0,y.withProductDataContext)(N);r(8854);let E=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({});const f=e=>(0,c.createElement)("img",{...e,src:i.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),h=({image:e,loaded:t,showFullSize:r,fallbackAlt:n,width:a,scale:o,height:l,aspectRatio:s})=>{const{thumbnail:i,src:u,srcset:d,sizes:m,alt:p}=e||{},g={alt:p||n,hidden:!t,src:i,...r&&{src:u,srcSet:d,sizes:m}},b={height:l,width:a,objectFit:o,aspectRatio:s};return(0,c.createElement)(c.Fragment,null,g.src&&(0,c.createElement)("img",{style:b,"data-testid":"product-image",...g}),!e&&(0,c.createElement)(f,{style:b}))},C=e=>{const{className:t,imageSizing:r=E.SINGLE,showProductLink:n=!0,showSaleBadge:l,saleBadgeAlign:i="right",height:u,width:d,scale:m,aspectRatio:p,...g}=e,b=_(e),{parentClassName:y}=(0,a.useInnerBlockLayoutContext)(),{product:w,isLoading:N}=(0,a.useProductDataContext)(),{dispatchStoreEvent:C}=(0,v.n)();if(!w.id)return(0,c.createElement)("div",{className:s()(t,"wc-block-components-product-image",{[`${y}__product-image`]:y},b.className),style:b.style},(0,c.createElement)(f,null));const P=!!w.images.length,S=P?w.images[0]:null,x=n?"a":c.Fragment,L=(0,o.sprintf)(/* translators: %s is referring to the product name */
(0,o.__)("Link to %s","woo-gutenberg-products-block"),w.name),$={href:w.permalink,...!P&&{"aria-label":L},onClick:()=>{C("product-view-link",{product:w})}};return(0,c.createElement)("div",{className:s()(t,"wc-block-components-product-image",{[`${y}__product-image`]:y},b.className),style:b.style},(0,c.createElement)(x,{...n&&$},!!l&&(0,c.createElement)(k,{align:i,...g}),(0,c.createElement)(h,{fallbackAlt:w.name,image:S,loaded:!N,showFullSize:r!==E.THUMBNAIL,width:d,height:u,scale:m,aspectRatio:p})))};(0,y.withProductDataContext)(C);var P=r(5271),S=r(5135);r(5160);const x=({children:e,headingLevel:t,elementType:r=`h${t}`,...n})=>(0,c.createElement)(r,{...n},e),L=e=>{const{className:t,headingLevel:r=2,showProductLink:n=!0,linkTarget:o,align:l}=e,i=_(e),{parentClassName:u}=(0,a.useInnerBlockLayoutContext)(),{product:d}=(0,a.useProductDataContext)(),{dispatchStoreEvent:m}=(0,v.n)();return d.id?(0,c.createElement)(x,{headingLevel:r,className:s()(t,i.className,"wc-block-components-product-title",{[`${u}__product-title`]:u,[`wc-block-components-product-title--align-${l}`]:l&&(0,P.uq)()}),style:(0,P.uq)()?i.style:{}},(0,c.createElement)(S.Z,{disabled:!n,name:d.name,permalink:d.permalink,target:o,onClick:()=>{m("product-view-link",{product:d})}})):(0,c.createElement)(x,{headingLevel:r,className:s()(t,i.className,"wc-block-components-product-title",{[`${u}__product-title`]:u,[`wc-block-components-product-title--align-${l}`]:l&&(0,P.uq)()}),style:(0,P.uq)()?i.style:{}})};(0,y.withProductDataContext)(L);var $=r(1478);r(402);const A=e=>({width:e/5*100+"%"}),D=({parentClassName:e})=>{const t=A(0);return(0,c.createElement)("div",{className:s()("wc-block-components-product-rating__norating-container",`${e}-product-rating__norating-container`)},(0,c.createElement)("div",{className:"wc-block-components-product-rating__norating",role:"img"},(0,c.createElement)("span",{style:t})),(0,c.createElement)("span",null,(0,o.__)("No Reviews","woo-gutenberg-products-block")))},I=e=>{const{rating:t,reviews:r,parentClassName:n}=e,a=A(t),l=(0,o.sprintf)(/* translators: %f is referring to the average rating value */
(0,o.__)("Rated %f out of 5","woo-gutenberg-products-block"),t),i={__html:(0,o.sprintf)(/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
(0,o._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",r,"woo-gutenberg-products-block"),(0,o.sprintf)('<strong class="rating">%f</strong>',t),(0,o.sprintf)('<span class="rating">%d</span>',r))};return(0,c.createElement)("div",{className:s()("wc-block-components-product-rating__stars",`${n}__product-rating__stars`),role:"img","aria-label":l},(0,c.createElement)("span",{style:a,dangerouslySetInnerHTML:i}))},F=e=>{const{reviews:t}=e,r=(0,o.sprintf)(/* translators: %s is referring to the total of reviews for a product */
(0,o._n)("(%s customer review)","(%s customer reviews)",t,"woo-gutenberg-products-block"),t);return(0,c.createElement)("span",{className:"wc-block-components-product-rating__reviews_count"},r)},R=e=>{const{textAlign:t,isDescendentOfSingleProductBlock:r,shouldDisplayMockedReviewsWhenProductHasNoReviews:n}=e,o=_(e),{parentClassName:l}=(0,a.useInnerBlockLayoutContext)(),{product:i}=(0,a.useProductDataContext)(),u=(e=>{const t=parseFloat(e.average_rating);return Number.isFinite(t)&&t>0?t:0})(i),d=(e=>{const t=(0,$.h)(e.review_count)?e.review_count:parseInt(e.review_count,10);return Number.isFinite(t)&&t>0?t:0})(i),m=s()(o.className,"wc-block-components-product-rating",{[`${l}__product-rating`]:l,[`has-text-align-${t}`]:t}),p=n?(0,c.createElement)(D,{parentClassName:l}):null,g=d?(0,c.createElement)(I,{rating:u,reviews:d,parentClassName:l}):p;if(d||n)return(0,c.createElement)("div",{className:m,style:o.style},(0,c.createElement)("div",{className:"wc-block-components-product-rating__container"},g,d&&r?(0,c.createElement)(F,{reviews:d}):null))};(0,y.withProductDataContext)(R);var T=r(6805),B=r(4293);const z=e=>{var t,r;const{className:n,textAlign:o,isDescendentOfSingleProductTemplate:l}=e,i=_(e),{parentName:u,parentClassName:d}=(0,a.useInnerBlockLayoutContext)(),{product:m}=(0,a.useProductDataContext)(),p="woocommerce/all-products"===u,g=s()("wc-block-components-product-price",n,i.className,{[`${d}__product-price`]:d});if(!m.id&&!l){const e=(0,c.createElement)(T.Z,{align:o,className:g});return p?(0,c.createElement)("div",{className:"wp-block-woocommerce-product-price"},e):e}const b=m.prices,y=l?(0,B.getCurrencyFromPriceResponse)():(0,B.getCurrencyFromPriceResponse)(b),v="5000",w=b.price!==b.regular_price,N=s()({[`${d}__product-price__value`]:d,[`${d}__product-price__value--on-sale`]:w}),k=(0,c.createElement)(T.Z,{align:o,className:g,style:i.style,regularPriceStyle:i.style,priceStyle:i.style,priceClassName:N,currency:y,price:l?v:b.price,minPrice:null==b||null===(t=b.price_range)||void 0===t?void 0:t.min_amount,maxPrice:null==b||null===(r=b.price_range)||void 0===r?void 0:r.max_amount,regularPrice:l?v:b.regular_price,regularPriceClassName:s()({[`${d}__product-price__regular`]:d})});return p?(0,c.createElement)("div",{className:"wp-block-woocommerce-product-price"},k):k};var M=r(9818),O=r(4801),H=r(2629);const Z=(e,t)=>{const r=e.find((({id:e})=>e===t));return r?r.quantity:0};r(1464);const j=({product:e,className:t,style:r})=>{const{id:a,permalink:l,add_to_cart:u,has_options:d,is_purchasable:m,is_in_stock:p}=e,{dispatchStoreEvent:g}=(0,v.n)(),{cartQuantity:b,addingToCart:_,addToCart:y}=(e=>{const{addItemToCart:t}=(0,M.useDispatch)(O.CART_STORE_KEY),{cartItems:r,cartIsLoading:a}=(0,n.b)(),{createErrorNotice:o,removeNotice:l}=(0,M.useDispatch)("core/notices"),[s,i]=(0,c.useState)(!1),u=(0,c.useRef)(Z(r,e));return(0,c.useEffect)((()=>{const t=Z(r,e);t!==u.current&&(u.current=t)}),[r,e]),{cartQuantity:Number.isFinite(u.current)?u.current:0,addingToCart:s,cartIsLoading:a,addToCart:(r=1)=>(i(!0),t(e,r).then((()=>{l("add-to-cart")})).catch((e=>{o((0,H.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})})).finally((()=>{i(!1)})))}})(a),w=Number.isFinite(b)&&b>0,N=!d&&m&&p,k=(0,H.decodeEntities)((null==u?void 0:u.description)||""),E=w?(0,o.sprintf)(/* translators: %s number of products in cart. */
(0,o._n)("%d in cart","%d in cart",b,"woo-gutenberg-products-block"),b):(0,H.decodeEntities)((null==u?void 0:u.text)||(0,o.__)("Add to cart","woo-gutenberg-products-block")),f=N?"button":"a",h={};return N?h.onClick=async()=>{await y(),g("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=(0,i.getSetting)("productsSettings");t&&(window.location.href=P.fh)}:(h.href=l,h.rel="nofollow",h.onClick=()=>{g("product-view-link",{product:e})}),(0,c.createElement)(f,{...h,"aria-label":k,disabled:_,className:s()(t,"wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",{loading:_,added:w}),style:r},E)},q=({className:e,style:t})=>(0,c.createElement)("button",{className:s()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e),style:t,disabled:!0}),K=e=>{const{className:t,textAlign:r}=e,n=_(e),{parentClassName:o}=(0,a.useInnerBlockLayoutContext)(),{product:l}=(0,a.useProductDataContext)();return(0,c.createElement)("div",{className:s()(t,"wp-block-button","wc-block-components-product-button",{[`${o}__product-add-to-cart`]:o,[`align-${r}`]:r})},l.id?(0,c.createElement)(j,{product:l,style:n.style,className:n.className}):(0,c.createElement)(q,{style:n.style,className:n.className}))},W=((0,y.withProductDataContext)(K),({product:e})=>(0,c.createElement)("div",{className:"cross-sells-product"},(0,c.createElement)(a.InnerBlockLayoutContextProvider,{parentName:"woocommerce/cart-cross-sells-block",parentClassName:"wp-block-cart-cross-sells-product"},(0,c.createElement)(a.ProductDataContextProvider,{isLoading:!1,product:e},(0,c.createElement)("div",null,(0,c.createElement)(C,{className:"",showSaleBadge:!1,productId:e.id,showProductLink:!1,saleBadgeAlign:"left",imageSizing:E.SINGLE,isDescendentOfQueryLoop:!1}),(0,c.createElement)(L,{align:"",headingLevel:3,showProductLink:!0}),(0,c.createElement)(R,null),(0,c.createElement)(N,{productId:e.id,align:"left"}),(0,c.createElement)(z,null)),(0,c.createElement)(K,null))))),G=({products:e,columns:t})=>{const r=e.map(((e,r)=>r>=t?null:(0,c.createElement)(W,{isLoading:!1,product:e,key:e.id})));return(0,c.createElement)("div",null,r)};var U=r(4398);const J=({className:e,columns:t})=>{const{crossSellsProducts:r}=(0,n.b)();return void 0===t&&(t=U.attributes.columns.default),(0,c.createElement)(G,{className:e,columns:t,products:r})}},1290:(e,t,r)=>{"use strict";r.d(t,{$:()=>a});var c=r(7582),n=r(307);function a(e,t){return void 0===t&&(t={}),(0,n.B)(e,(0,c.pi)({delimiter:"."},t))}},1464:()=>{},8854:()=>{},402:()=>{},1314:()=>{},5160:()=>{},5641:()=>{},5138:()=>{},9562:(e,t,r)=>{"use strict";function c(e){return e.toLowerCase()}r.d(t,{U:()=>c})},307:(e,t,r)=>{"use strict";r.d(t,{B:()=>o});var c=r(9562),n=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],a=/[^A-Z0-9]+/gi;function o(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,o=void 0===r?n:r,s=t.stripRegexp,i=void 0===s?a:s,u=t.transform,d=void 0===u?c.U:u,m=t.delimiter,p=void 0===m?" ":m,g=l(l(e,o,"$1\0$2"),i,"\0"),b=0,_=g.length;"\0"===g.charAt(b);)b++;for(;"\0"===g.charAt(_-1);)_--;return g.slice(b,_).split("\0").map(d).join(p)}function l(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}},9784:(e,t,r)=>{"use strict";r.d(t,{o:()=>a});var c=r(7582),n=r(1290);function a(e,t){return void 0===t&&(t={}),(0,n.$)(e,(0,c.pi)({delimiter:"-"},t))}},7582:(e,t,r)=>{"use strict";r.d(t,{pi:()=>c});var c=function(){return c=Object.assign||function(e){for(var t,r=1,c=arguments.length;r<c;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);