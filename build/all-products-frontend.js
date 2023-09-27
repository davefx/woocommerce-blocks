(()=>{var e,t,r={1984:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(9307);const n=function(e){let{icon:t,size:r=24,...n}=e;return(0,o.cloneElement)(t,{width:r,height:r,...n})}},6674:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(9307),n=r(4184),c=r.n(n);const a=({label:e,screenReaderLabel:t,wrapperElement:r,wrapperProps:n={}})=>{let a;const l=null!=e,s=null!=t;return!l&&s?(a=r||"span",n={...n,className:c()(n.className,"screen-reader-text")},(0,o.createElement)(a,{...n},t)):(a=r||o.Fragment,l&&s&&e!==t?(0,o.createElement)(a,{...n},(0,o.createElement)("span",{"aria-hidden":"true"},e),(0,o.createElement)("span",{className:"screen-reader-text"},t)):(0,o.createElement)(a,{...n},e))}},5918:(e,t,r)=>{"use strict";r.d(t,{n:()=>a});var o=r(2694),n=r(9818),c=r(9307);const a=()=>({dispatchStoreEvent:(0,c.useCallback)(((e,t={})=>{try{(0,o.doAction)(`experimental__woocommerce_blocks-${e}`,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:(0,c.useCallback)(((e,t={})=>{try{(0,o.doAction)(`experimental__woocommerce_blocks-checkout-${e}`,{...t,storeCart:(0,n.select)("wc/store/cart").getCartData()})}catch(e){console.error(e)}}),[])})},9075:(e,t,r)=>{"use strict";r.d(t,{s:()=>a});var o=r(9307),n=r(9127),c=r.n(n);function a(e){const t=(0,o.useRef)(e);return c()(e,t.current)||(t.current=e),t.current}},7530:(e,t,r)=>{"use strict";r.d(t,{Cm:()=>c,Lo:()=>s,VF:()=>l,fh:()=>i,td:()=>a,vr:()=>d});var o,n=r(4617);const c=(0,n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),a=c.pluginUrl+"images/",l=c.pluginUrl+"build/",s=c.buildPhase,i=(null===(o=n.STORE_PAGES.shop)||void 0===o||o.permalink,n.STORE_PAGES.checkout.id,n.STORE_PAGES.checkout.permalink,n.STORE_PAGES.privacy.permalink,n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink,n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id,n.STORE_PAGES.cart.permalink),u=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:(0,n.getSetting)("wpLoginUrl","/wp-login.php"),(0,n.getSetting)("localPickupEnabled",!1),(0,n.getSetting)("countries",{})),p=(0,n.getSetting)("countryData",{}),d=(Object.fromEntries(Object.keys(p).filter((e=>!0===p[e].allowBilling)).map((e=>[e,u[e]||""]))),Object.fromEntries(Object.keys(p).filter((e=>!0===p[e].allowBilling)).map((e=>[e,p[e].states||[]]))),Object.fromEntries(Object.keys(p).filter((e=>!0===p[e].allowShipping)).map((e=>[e,u[e]||""]))),Object.fromEntries(Object.keys(p).filter((e=>!0===p[e].allowShipping)).map((e=>[e,p[e].states||[]]))),Object.fromEntries(Object.keys(p).map((e=>[e,p[e].locale||[]]))))},9300:(e,t,r)=>{"use strict";r.d(t,{uq:()=>n}),window.wp.blocks;var o=r(7530);const n=()=>o.Lo>1},5271:(e,t,r)=>{"use strict";r.d(t,{Cm:()=>o.Cm,VF:()=>o.VF,fh:()=>o.fh,td:()=>o.td,uq:()=>n.uq,vr:()=>o.vr});var o=r(7530),n=r(9300)},4184:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var l in r)o.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},2991:e=>{"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var o,n,c;if(Array.isArray(t)){if((o=t.length)!=r.length)return!1;for(n=o;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(n of t.entries())if(!r.has(n[0]))return!1;for(n of t.entries())if(!e(n[1],r.get(n[0])))return!1;return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(n of t.entries())if(!r.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((o=t.length)!=r.length)return!1;for(n=o;0!=n--;)if(t[n]!==r[n])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((o=(c=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(n=o;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,c[n]))return!1;for(n=o;0!=n--;){var a=c[n];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}},4578:()=>{},7036:()=>{},9991:()=>{},5945:()=>{},9421:()=>{},1553:()=>{},9196:e=>{"use strict";e.exports=window.React},2819:e=>{"use strict";e.exports=window.lodash},3554:e=>{"use strict";e.exports=window.wc.blocksCheckout},4293:e=>{"use strict";e.exports=window.wc.priceFormat},4801:e=>{"use strict";e.exports=window.wc.wcBlocksData},2864:e=>{"use strict";e.exports=window.wc.wcBlocksSharedContext},721:e=>{"use strict";e.exports=window.wc.wcBlocksSharedHocs},4617:e=>{"use strict";e.exports=window.wc.wcSettings},6989:e=>{"use strict";e.exports=window.wp.apiFetch},987:e=>{"use strict";e.exports=window.wp.autop},5609:e=>{"use strict";e.exports=window.wp.components},4333:e=>{"use strict";e.exports=window.wp.compose},9818:e=>{"use strict";e.exports=window.wp.data},7180:e=>{"use strict";e.exports=window.wp.deprecated},5904:e=>{"use strict";e.exports=window.wp.dom},9307:e=>{"use strict";e.exports=window.wp.element},2694:e=>{"use strict";e.exports=window.wp.hooks},2629:e=>{"use strict";e.exports=window.wp.htmlEntities},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},444:e=>{"use strict";e.exports=window.wp.primitives},2289:e=>{"use strict";e.exports=window.wp.styleEngine},6483:e=>{"use strict";e.exports=window.wp.url},2560:e=>{"use strict";e.exports=window.wp.warning},5266:e=>{"use strict";e.exports=window.wp.wordcount}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={exports:{}};return r[e](c,c.exports,n),c.exports}n.m=r,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>(({118:"product-rating-stars",2918:"product-rating-counter",3037:"product-average-rating",3706:"product-image",5432:"product-sale-badge",5445:"product-stock-indicator",5579:"product-price",5800:"product-add-to-cart",6925:"product-title",7385:"product-rating",8185:"product-summary",8771:"product-button",9870:"product-sku"}[e]||e)+"-frontend.js?ver="+{118:"65937d6566d57b9c13aa",2918:"6ffe603a71073695bbe0",3037:"cd60def7935d960d49a0",3706:"d5cdae1730a6450a05e4",4124:"016e9c2c4f6d7a2d0cc8",5432:"1ade70954436151e72f4",5445:"1ee3be13b30a56adedd1",5579:"598c8cf7e8dc0a4703dd",5800:"6a17114272546c253f00",6925:"af967de431ce5bd40b0e",7385:"9ea986e21a8200801966",8185:"15c0c08fc975a6093123",8280:"c0e35d41f7e291997485",8771:"d4516051e1fb92703971",9870:"c9aa8caeb7efa6f9f6e3"}[e]),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="webpackWcBlocksJsonp:",n.l=(r,o,c,a)=>{if(e[r])e[r].push(o);else{var l,s;if(void 0!==c)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var p=i[u];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+c){l=p;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+c),l.src=r),e[r]=[o];var d=(t,o)=>{l.onerror=l.onload=null,clearTimeout(m);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={86:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var c=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=c);var a=n.p+n.u(t),l=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var c=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,o[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,c,[a,l,s]=r,i=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);s&&s(n)}for(t&&t(r);i<a.length;i++)c=a[i],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=n(9307);function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}var r=n(5736),o=n(5271);const c=({imageUrl:t=`${o.td}/block-error.svg`,header:n=(0,r.__)("Oops!","woo-gutenberg-products-block"),text:c=(0,r.__)("There was an error loading the content.","woo-gutenberg-products-block"),errorMessage:a,errorMessagePrefix:l=(0,r.__)("Error:","woo-gutenberg-products-block"),button:s,showErrorBlock:i=!0})=>i?(0,e.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&(0,e.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),(0,e.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},n&&(0,e.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},n),c&&(0,e.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},c),a&&(0,e.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},l?l+" ":"",a),s&&(0,e.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},s))):null;n(4578);class a extends e.Component{constructor(...e){var r,o,n;super(...e),r=this,n={errorMessage:"",hasError:!1},(o=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}(o="state"))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n}static getDerivedStateFromError(t){return void 0!==t.statusText&&void 0!==t.status?{errorMessage:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("strong",null,t.status),": ",t.statusText),hasError:!0}:{errorMessage:t.message,hasError:!0}}render(){const{header:t,imageUrl:r,showErrorMessage:o=!0,showErrorBlock:n=!0,text:a,errorMessagePrefix:l,renderError:s,button:i}=this.props,{errorMessage:u,hasError:p}=this.state;return p?"function"==typeof s?s({errorMessage:u}):(0,e.createElement)(c,{showErrorBlock:n,errorMessage:o?u:null,header:t,imageUrl:r,text:a,errorMessagePrefix:l,button:i}):this.props.children}}const l=a,s=[".wp-block-woocommerce-cart"],i=({Block:t,containers:r,getProps:o=(()=>({})),getErrorBoundaryProps:n=(()=>({}))})=>{0!==r.length&&Array.prototype.forEach.call(r,((r,c)=>{const a=o(r,c),s=n(r,c),i={...r.dataset,...a.attributes||{}};(({Block:t,container:r,attributes:o={},props:n={},errorBoundaryProps:c={}})=>{(0,e.render)((0,e.createElement)(l,{...c},(0,e.createElement)(e.Suspense,{fallback:(0,e.createElement)("div",{className:"wc-block-placeholder"})},t&&(0,e.createElement)(t,{...n,attributes:o}))),r,(()=>{r.classList&&r.classList.remove("is-loading")}))})({Block:t,container:r,props:a,attributes:i,errorBoundaryProps:s})}))};var u=n(2991),p=n.n(u),d=n(4184),m=n.n(d),g=n(6674);n(7036);const E=({currentPage:t,displayFirstAndLastPages:o=!0,displayNextAndPreviousArrows:n=!0,pagesToDisplay:c=3,onPageChange:a,totalPages:l})=>{let{minIndex:s,maxIndex:i}=((e,t,r)=>{if(r<=2)return{minIndex:null,maxIndex:null};const o=e-1,n=Math.max(Math.floor(t-o/2),2),c=Math.min(Math.ceil(t+(o-(t-n))),r-1);return{minIndex:Math.max(Math.floor(t-(o-(c-t))),2),maxIndex:c}})(c,t,l);const u=o&&Boolean(1!==s),p=o&&Boolean(i!==l),d=o&&Boolean(s&&s>3),E=o&&Boolean(i&&i<l-2);u&&3===s&&(s-=1),p&&i===l-2&&(i+=1);const h=[];if(s&&i)for(let e=s;e<=i;e++)h.push(e);return(0,e.createElement)("div",{className:"wc-block-pagination wc-block-components-pagination"},(0,e.createElement)(g.Z,{screenReaderLabel:(0,r.__)("Navigate to another page","woo-gutenberg-products-block")}),n&&(0,e.createElement)("button",{className:"wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow",onClick:()=>a(t-1),title:(0,r.__)("Previous page","woo-gutenberg-products-block"),disabled:t<=1},(0,e.createElement)(g.Z,{label:"←",screenReaderLabel:(0,r.__)("Previous page","woo-gutenberg-products-block")})),u&&(0,e.createElement)("button",{className:m()("wc-block-pagination-page","wc-block-components-pagination__page",{"wc-block-pagination-page--active":1===t,"wc-block-components-pagination__page--active":1===t}),onClick:()=>a(1),disabled:1===t},(0,e.createElement)(g.Z,{label:"1",screenReaderLabel:(0,r.sprintf)(/* translators: %d is the page number (1, 2, 3...). */
(0,r.__)("Page %d","woo-gutenberg-products-block"),1)})),d&&(0,e.createElement)("span",{className:"wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis","aria-hidden":"true"},(0,r.__)("…","woo-gutenberg-products-block")),h.map((o=>(0,e.createElement)("button",{key:o,className:m()("wc-block-pagination-page","wc-block-components-pagination__page",{"wc-block-pagination-page--active":t===o,"wc-block-components-pagination__page--active":t===o}),onClick:t===o?void 0:()=>a(o),disabled:t===o},(0,e.createElement)(g.Z,{label:o.toString(),screenReaderLabel:(0,r.sprintf)(/* translators: %d is the page number (1, 2, 3...). */
(0,r.__)("Page %d","woo-gutenberg-products-block"),o)})))),E&&(0,e.createElement)("span",{className:"wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis","aria-hidden":"true"},(0,r.__)("…","woo-gutenberg-products-block")),p&&(0,e.createElement)("button",{className:m()("wc-block-pagination-page","wc-block-components-pagination__page",{"wc-block-pagination-page--active":t===l,"wc-block-components-pagination__page--active":t===l}),onClick:()=>a(l),disabled:t===l},(0,e.createElement)(g.Z,{label:l.toString(),screenReaderLabel:(0,r.sprintf)(/* translators: %d is the page number (1, 2, 3...). */
(0,r.__)("Page %d","woo-gutenberg-products-block"),l)})),n&&(0,e.createElement)("button",{className:"wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow",onClick:()=>a(t+1),title:(0,r.__)("Next page","woo-gutenberg-products-block"),disabled:t>=l},(0,e.createElement)(g.Z,{label:"→",screenReaderLabel:(0,r.__)("Next page","woo-gutenberg-products-block")})))};function h(t,r){const o=(0,e.useRef)();return(0,e.useEffect)((()=>{o.current===t||r&&!r(t,o.current)||(o.current=t)}),[t,r]),o.current}var b=n(4801),w=n(9818),f=n(9127),y=n.n(f),k=n(9075);const x=(0,e.createContext)("page"),_=()=>(0,e.useContext)(x),v=(x.Provider,(t,r,o)=>{const n=_();o=o||n;const c=(0,w.useSelect)((e=>e(b.QUERY_STATE_STORE_KEY).getValueForQueryKey(o,t,r)),[o,t]),{setQueryValue:a}=(0,w.useDispatch)(b.QUERY_STATE_STORE_KEY);return[c,(0,e.useCallback)((e=>{a(o,t,e)}),[o,t,a])]}),S=t=>{const r={namespace:"/wc/store/v1",resourceName:"products"},{results:o,isLoading:n}=(t=>{const{namespace:r,resourceName:o,resourceValues:n=[],query:c={},shouldSelect:a=!0}=t;if(!r||!o)throw new Error("The options object must have valid values for the namespace and the resource properties.");const l=(0,e.useRef)({results:[],isLoading:!0}),s=(0,k.s)(c),i=(0,k.s)(n),u=(()=>{const[,t]=(0,e.useState)();return(0,e.useCallback)((e=>{t((()=>{throw e}))}),[])})(),p=(0,w.useSelect)((e=>{if(!a)return null;const t=e(b.COLLECTIONS_STORE_KEY),n=[r,o,s,i],c=t.getCollectionError(...n);if(c){if(!(c instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");u(c)}return{results:t.getCollection(...n),isLoading:!t.hasFinishedResolution("getCollection",n)}}),[r,o,i,s,a]);return null!==p&&(l.current=p),l.current})({...r,query:t}),{value:c}=((e,t)=>{const{namespace:r,resourceName:o,resourceValues:n=[],query:c={}}=t;if(!r||!o)throw new Error("The options object must have valid values for the namespace and the resource name properties.");const a=(0,k.s)(c),l=(0,k.s)(n),{value:s,isLoading:i=!0}=(0,w.useSelect)((t=>{const n=t(b.COLLECTIONS_STORE_KEY),c=[e,r,o,a,l];return{value:n.getCollectionHeader(...c),isLoading:n.hasFinishedResolution("getCollectionHeader",c)}}),[e,r,o,l,a]);return{value:s,isLoading:i}})("x-wp-total",{...r,query:t});return{products:o,totalProducts:parseInt(c,10),productsLoading:n}};var N=n(5918);n(1553);const P=e=>{if(!e)return;const t=e.getBoundingClientRect().bottom;t>=0&&t<=window.innerHeight||e.scrollIntoView()};var C=n(2864);const B=window.wp.a11y;var O=n(1984),T=n(444);const R=(0,e.createElement)(T.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,e.createElement)(T.Path,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"})),A=()=>{const{parentClassName:t}=(0,C.useInnerBlockLayoutContext)();return(0,e.createElement)("div",{className:`${t}__no-products`},(0,e.createElement)(O.Z,{className:`${t}__no-products-image`,icon:R,size:100}),(0,e.createElement)("strong",{className:`${t}__no-products-title`},(0,r.__)("No products","woo-gutenberg-products-block")),(0,e.createElement)("p",{className:`${t}__no-products-description`},(0,r.__)("There are currently no products available to display.","woo-gutenberg-products-block")))},j=(0,e.createElement)(T.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(T.Path,{d:"M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"})),L=({resetCallback:t=(()=>{})})=>{const{parentClassName:o}=(0,C.useInnerBlockLayoutContext)();return(0,e.createElement)("div",{className:`${o}__no-products`},(0,e.createElement)(O.Z,{className:`${o}__no-products-image`,icon:j,size:100}),(0,e.createElement)("strong",{className:`${o}__no-products-title`},(0,r.__)("No products found","woo-gutenberg-products-block")),(0,e.createElement)("p",{className:`${o}__no-products-description`},(0,r.__)("We were unable to find any results based on your search.","woo-gutenberg-products-block")),(0,e.createElement)("button",{onClick:t},(0,r.__)("Reset Search","woo-gutenberg-products-block")))};var M=n(4333);n(9421);const z=(0,M.withInstanceId)((({className:t,instanceId:r,label:o="",onChange:n,options:c,screenReaderLabel:a,value:l=""})=>{const s=`wc-block-components-sort-select__select-${r}`;return(0,e.createElement)("div",{className:m()("wc-block-sort-select","wc-block-components-sort-select",t)},(0,e.createElement)(g.Z,{label:o,screenReaderLabel:a,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:s}}),(0,e.createElement)("select",{id:s,className:"wc-block-sort-select__select wc-block-components-sort-select__select",onChange:n,value:l},c&&c.map((t=>(0,e.createElement)("option",{key:t.key,value:t.key},t.label)))))}));n(9991);const F=({onChange:t,value:o})=>(0,e.createElement)(z,{className:"wc-block-product-sort-select wc-block-components-product-sort-select",onChange:t,options:[{key:"menu_order",label:(0,r.__)("Default sorting","woo-gutenberg-products-block")},{key:"popularity",label:(0,r.__)("Popularity","woo-gutenberg-products-block")},{key:"rating",label:(0,r.__)("Average rating","woo-gutenberg-products-block")},{key:"date",label:(0,r.__)("Latest","woo-gutenberg-products-block")},{key:"price",label:(0,r.__)("Price: low to high","woo-gutenberg-products-block")},{key:"price-desc",label:(0,r.__)("Price: high to low","woo-gutenberg-products-block")}],screenReaderLabel:(0,r.__)("Order products by","woo-gutenberg-products-block"),value:o}),I=window.wc.wcBlocksRegistry;n.p=o.VF,(0,I.registerBlockComponent)({blockName:"woocommerce/product-price",component:(0,e.lazy)((()=>n.e(5579).then(n.bind(n,6669))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-image",component:(0,e.lazy)((()=>n.e(3706).then(n.bind(n,4304))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-title",component:(0,e.lazy)((()=>n.e(6925).then(n.bind(n,3719))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-rating",component:(0,e.lazy)((()=>n.e(7385).then(n.bind(n,1382))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-rating-stars",component:(0,e.lazy)((()=>n.e(118).then(n.bind(n,89))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-rating-counter",component:(0,e.lazy)((()=>n.e(2918).then(n.bind(n,5042))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-average-rating",component:(0,e.lazy)((()=>n.e(3037).then(n.bind(n,2043))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-button",component:(0,e.lazy)((()=>n.e(8771).then(n.bind(n,8462))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-summary",component:(0,e.lazy)((()=>n.e(8185).then(n.bind(n,8281))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:(0,e.lazy)((()=>n.e(5432).then(n.bind(n,4498))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-sku",component:(0,e.lazy)((()=>n.e(9870).then(n.bind(n,8130))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:(0,e.lazy)((()=>n.e(5445).then(n.bind(n,789))))}),(0,I.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:(0,e.lazy)((()=>Promise.all([n.e(4124),n.e(8280),n.e(5800)]).then(n.bind(n,9085))))});const V=(t,r,o,n)=>{if(!o)return;const c=(e=>(0,I.getRegisteredBlockComponents)(e))(t);return o.map((([o,a={}],l)=>{let s=[];a.children&&a.children.length>0&&(s=V(t,r,a.children,n));const i=c[o];if(!i)return null;const u=r.id||0,p=["layout",o,l,n,u];return(0,e.createElement)(e.Suspense,{key:p.join("_"),fallback:(0,e.createElement)("div",{className:"wc-block-placeholder"})},(0,e.createElement)(i,{...a,children:s,product:r}))}))},$=(0,M.withInstanceId)((({product:t={},attributes:r,instanceId:o})=>{const{layoutConfig:n}=r,{parentClassName:c,parentName:a}=(0,C.useInnerBlockLayoutContext)(),l=0===Object.keys(t).length,s=m()(`${c}__product`,"wc-block-layout",{"is-loading":l});return(0,e.createElement)("li",{className:s,"aria-hidden":l},V(a,t,n,o))}));n(5945);const Q=e=>{switch(e){case"menu_order":case"popularity":case"rating":case"price":return{orderby:e,order:"asc"};case"price-desc":return{orderby:"price",order:"desc"};case"date":return{orderby:"date",order:"desc"}}},G=({totalQuery:e,totalProducts:t},{totalQuery:r}={})=>!p()(e,r)&&Number.isFinite(t),q=(Y=({attributes:t,currentPage:o,onPageChange:n,onSortChange:c,sortValue:a,scrollToTop:l})=>{const[s,i]=v("attributes",[]),[u,d]=v("stock_status",[]),[g,f]=v("rating",[]),[x,P]=v("min_price"),[O,T]=v("max_price"),[R]=((t,r)=>{const o=_();r=r||o;const[n,c]=(t=>{const r=_();t=t||r;const o=(0,w.useSelect)((e=>e(b.QUERY_STATE_STORE_KEY).getValueForQueryContext(t,void 0)),[t]),{setValueForQueryContext:n}=(0,w.useDispatch)(b.QUERY_STATE_STORE_KEY);return[o,(0,e.useCallback)((e=>{n(t,e)}),[t,n])]})(r),a=(0,k.s)(n),l=(0,k.s)(t),s=h(l),i=(0,e.useRef)(!1);return(0,e.useEffect)((()=>{y()(s,l)||(c(Object.assign({},a,l)),i.current=!0)}),[a,l,s,c]),i.current?[n,c]:[t,c]})((({sortValue:e,currentPage:t,attributes:r})=>{const{columns:o,rows:n}=r;return{...Q(e),catalog_visibility:"catalog",per_page:o*n,page:t}})({attributes:t,sortValue:a,currentPage:o})),{products:j,totalProducts:M,productsLoading:z}=S(R),{parentClassName:I,parentName:V}=(0,C.useInnerBlockLayoutContext)(),q=(e=>{const{order:t,orderby:r,page:o,per_page:n,...c}=e;return c||{}})(R),{dispatchStoreEvent:U}=(0,N.n)(),Z=h({totalQuery:q,totalProducts:M},G);(0,e.useEffect)((()=>{U("product-list-render",{products:j,listName:V})}),[j,V,U]),(0,e.useEffect)((()=>{p()(q,null==Z?void 0:Z.totalQuery)||(n(1),null!=Z&&Z.totalQuery&&(e=>{Number.isFinite(e)&&(0===e?(0,B.speak)((0,r.__)("No products found","woo-gutenberg-products-block")):(0,B.speak)((0,r.sprintf)(/* translators: %s is an integer higher than 0 (1, 2, 3...) */
(0,r._n)("%d product found","%d products found",e,"woo-gutenberg-products-block"),e)))})(M))}),[null==Z?void 0:Z.totalQuery,M,n,q]);const{contentVisibility:Y}=t,D=t.columns*t.rows,K=!Number.isFinite(M)&&Number.isFinite(null==Z?void 0:Z.totalProducts)&&p()(q,null==Z?void 0:Z.totalQuery)?Math.ceil(((null==Z?void 0:Z.totalProducts)||0)/D):Math.ceil(M/D),H=j.length?j:Array.from({length:D}),J=0!==j.length||z,W=s.length>0||u.length>0||g.length>0||Number.isFinite(x)||Number.isFinite(O);return(0,e.createElement)("div",{className:(()=>{const{columns:e,rows:r,alignButtons:o,align:n}=t,c=void 0!==n?"align"+n:"";return m()(I,c,"has-"+e+"-columns",{"has-multiple-rows":r>1,"has-aligned-buttons":o})})()},(null==Y?void 0:Y.orderBy)&&J&&(0,e.createElement)(F,{onChange:c,value:a}),!J&&W&&(0,e.createElement)(L,{resetCallback:()=>{i([]),d([]),f([]),P(null),T(null)}}),!J&&!W&&(0,e.createElement)(A,null),J&&(0,e.createElement)("ul",{className:m()(`${I}__products`,{"is-loading-products":z})},H.map(((r={},o)=>(0,e.createElement)($,{key:r.id||o,attributes:t,product:r})))),K>1&&(0,e.createElement)(E,{currentPage:o,onPageChange:e=>{l({focusableSelector:"a, button"}),n(e)},totalPages:K}))},t=>{const r=(0,e.useRef)(null);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"with-scroll-to-top__scroll-point",ref:r,"aria-hidden":!0}),(0,e.createElement)(Y,{...t,scrollToTop:e=>{null!==r.current&&((e,t)=>{const{focusableSelector:r}=t||{};window&&Number.isFinite(window.innerHeight)&&(r?((e,t)=>{var r;const o=(null===(r=e.parentElement)||void 0===r?void 0:r.querySelectorAll(t))||[];if(o.length){const e=o[0];P(e),null==e||e.focus()}else P(e)})(e,r):P(e))})(r.current,e)}}))}),U=({attributes:t})=>{const[r,o]=(0,e.useState)(1),[n,c]=(0,e.useState)(t.orderby);return(0,e.useEffect)((()=>{c(t.orderby)}),[t.orderby]),(0,e.createElement)(q,{attributes:t,currentPage:r,onPageChange:e=>{o(e)},onSortChange:e=>{var t;const r=null==e||null===(t=e.target)||void 0===t?void 0:t.value;c(r),o(1)},sortValue:n})},Z=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},(0,e.createElement)("title",null,"Grid Block Preview"),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}));var Y,D=n(3554);class K extends e.Component{render(){const{attributes:t,urlParameterSuffix:r}=this.props;return t.isPreview?Z:(0,e.createElement)(C.InnerBlockLayoutContextProvider,{parentName:"woocommerce/all-products",parentClassName:"wc-block-grid"},(0,e.createElement)(D.StoreNoticesContainer,{context:"wc/all-products"}),(0,e.createElement)(U,{attributes:t,urlParameterSuffix:r}))}}const H=K;(e=>{const t=document.body.querySelectorAll(s.join(",")),{Block:r,getProps:o,getErrorBoundaryProps:n,selector:c}=e;(({Block:e,getProps:t,getErrorBoundaryProps:r,selector:o,wrappers:n})=>{const c=document.body.querySelectorAll(o);n&&n.length>0&&Array.prototype.filter.call(c,(e=>!((e,t)=>Array.prototype.some.call(t,(t=>t.contains(e)&&!t.isSameNode(e))))(e,n))),i({Block:e,containers:c,getProps:t,getErrorBoundaryProps:r})})({Block:r,getProps:o,getErrorBoundaryProps:n,selector:c,wrappers:t}),Array.prototype.forEach.call(t,(t=>{t.addEventListener("wc-blocks_render_blocks_frontend",(()=>{(({Block:e,getProps:t,getErrorBoundaryProps:r,selector:o,wrapper:n})=>{const c=n.querySelectorAll(o);i({Block:e,containers:c,getProps:t,getErrorBoundaryProps:r})})({...e,wrapper:t})}))}))})({selector:".wp-block-woocommerce-all-products",Block:t=>(0,e.createElement)(H,{...t}),getProps:e=>({attributes:JSON.parse(e.dataset.attributes)})})})()})();