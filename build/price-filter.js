this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var c,i,a=t[0],l=t[1],s=t[2],b=0,p=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={20:0,1:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;return o.push([510,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(0);function r(e,t){const n=Object(c.useRef)();return Object(c.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"string"==typeof e},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0);const r=Object(c.createContext)({}),o=()=>{const{wrapper:e}=Object(c.useContext)(r);return t=>{e&&e.current&&(e.current.hidden=!t)}}},12:function(e,t){e.exports=window.wp.compose},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(9),r=n(6),o=n(0),i=n(47);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:l={},shouldSelect:s=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const u=Object(o.useRef)({results:[],isLoading:!0}),b=Object(i.a)(l),p=Object(i.a)(a),d=(()=>{const[,e]=Object(o.useState)();return Object(o.useCallback)(t=>{e(()=>{throw t})},[])})(),m=Object(r.useSelect)(e=>{if(!s)return null;const r=e(c.COLLECTIONS_STORE_KEY),o=[t,n,b,p],i=r.getCollectionError(...o);if(i){if(!(i instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");d(i)}return{results:r.getCollection(...o),isLoading:!r.hasFinishedResolution("getCollection",o)}},[t,n,p,b,s]);return null!==m&&(u.current=m),u.current}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(0),r=n(1),o=n(8),i=n(6),a=n(2),l=n(5);const s=e=>{let{clientId:t,setAttributes:n,filterType:s,attributes:u}=e;const{replaceBlock:b}=Object(i.useDispatch)("core/block-editor"),{heading:p,headingLevel:d}=u;if(Object(i.useSelect)(e=>{const{getBlockParentsByBlockName:n}=e("core/block-editor");return n(t,"woocommerce/filter-wrapper").length>0},[t])||!s)return null;const m=[Object(c.createElement)(a.Button,{key:"convert",onClick:()=>{const e=[Object(o.createBlock)("woocommerce/"+s,{...u,heading:""})];p&&""!==p&&e.unshift(Object(o.createBlock)("core/heading",{content:p,level:null!=d?d:2})),b(t,Object(o.createBlock)("woocommerce/filter-wrapper",{heading:p,filterType:s},[...e])),n({heading:"",lock:{remove:!0}})},variant:"primary"},Object(r.__)("Upgrade block","woo-gutenberg-products-block"))];return Object(c.createElement)(l.Warning,{actions:m},Object(r.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woo-gutenberg-products-block"))}},136:function(e,t,n){"use strict";var c=n(0),r=n(5),o=n(12),i=n(1);n(191),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:n,onChange:o,heading:a,instanceId:l}=e;const s="h"+n;return Object(c.createElement)(s,{className:t},Object(c.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+l},Object(i.__)("Block title","woo-gutenberg-products-block")),Object(c.createElement)(r.PlainText,{id:"block-title-"+l,className:"wc-block-editor-components-title",value:a,onChange:o,style:{backgroundColor:"transparent"}}))})},137:function(e,t,n){"use strict";var c=n(0);n(192),t.a=e=>{let{children:t}=e;return Object(c.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},139:function(e,t,n){"use strict";var c=n(0),r=n(1),o=n(4),i=n.n(o),a=n(30);n(195),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(r.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:l=Object(r.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(c.createElement)("button",{className:i()("wc-block-components-filter-reset-button",t),onClick:o},Object(c.createElement)(a.a,{label:n,screenReaderLabel:l}))}},140:function(e,t,n){"use strict";var c=n(0),r=n(1),o=n(4),i=n.n(o),a=n(30);n(196),t.a=e=>{let{className:t,isLoading:n,disabled:o,label:
/* translators: Submit button text for filters. */
l=Object(r.__)("Apply","woo-gutenberg-products-block"),onClick:s,screenReaderLabel:u=Object(r.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(c.createElement)("button",{type:"submit",className:i()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:o,onClick:s},Object(c.createElement)(a.a,{label:l,screenReaderLabel:u}))}},156:function(e,t){},16:function(e,t){e.exports=window.wp.url},18:function(e,t,n){"use strict";n.d(t,"p",(function(){return o})),n.d(t,"n",(function(){return i})),n.d(t,"m",(function(){return a})),n.d(t,"o",(function(){return l})),n.d(t,"k",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"h",(function(){return b})),n.d(t,"l",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return w})),n.d(t,"i",(function(){return _})),n.d(t,"j",(function(){return h})),n.d(t,"f",(function(){return k}));var c,r=n(3);const o=Object(r.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",a=o.pluginUrl+"build/",l=o.buildPhase,s=null===(c=r.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,u=r.STORE_PAGES.checkout.id,b=(r.STORE_PAGES.checkout.permalink,r.STORE_PAGES.privacy.permalink),p=(r.STORE_PAGES.privacy.title,r.STORE_PAGES.terms.permalink),d=(r.STORE_PAGES.terms.title,r.STORE_PAGES.cart.id),m=r.STORE_PAGES.cart.permalink,f=(r.STORE_PAGES.myaccount.permalink?r.STORE_PAGES.myaccount.permalink:Object(r.getSetting)("wpLoginUrl","/wp-login.php"),Object(r.getSetting)("localPickupEnabled",!1)),g=Object(r.getSetting)("countries",{}),O=Object(r.getSetting)("countryData",{}),j=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowBilling).map(e=>[e,g[e]||""])),w=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowBilling).map(e=>[e,O[e].states||[]])),_=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowShipping).map(e=>[e,g[e]||""])),h=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowShipping).map(e=>[e,O[e].states||[]])),k=Object.fromEntries(Object.keys(O).map(e=>[e,O[e].locale||[]]))},191:function(e,t){},192:function(e,t){},195:function(e,t){},196:function(e,t){},2:function(e,t){e.exports=window.wp.components},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var c=n(40);const r=e=>!Object(c.a)(e)&&e instanceof Object&&e.constructor===Object;function o(e,t){return r(e)&&t in e}const i=e=>0===Object.keys(e).length},23:function(e,t){e.exports=window.wc.priceFormat},258:function(e){e.exports=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price Controls","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},26:function(e,t){e.exports=window.wp.isShallowEqual},260:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return b}));var c=n(16),r=n(3),o=n(83);const i=Object(r.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),a="query_type_",l="filter_";function s(e){return window?Object(c.getQueryArg)(window.location.href,e):null}function u(e){i?((e=e.replace(/(?:query-(?:\d+-)?page=(\d+))|(?:page\/(\d+))/g,"")).endsWith("?")&&(e=e.slice(0,-1)),window.location.href=e):window.history.replaceState({},"",e)}const b=e=>{const t=Object(c.getQueryArgs)(e);return Object(c.addQueryArgs)(e,t)}},27:function(e,t){e.exports=window.React},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(0),r=n(276),o=n(21),i=n(104),a=n(47),l=n(62),s=n(121),u=n(51);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:p,queryState:d,isEditor:m=!1}=e,f=Object(u.a)();f+="-collection-data";const[g]=Object(l.a)(f),[O,j]=Object(l.b)("calculate_attribute_counts",[],f),[w,_]=Object(l.b)("calculate_price_range",null,f),[h,k]=Object(l.b)("calculate_stock_status_counts",null,f),[E,y]=Object(l.b)("calculate_rating_counts",null,f),v=Object(a.a)(t||{}),S=Object(a.a)(n),x=Object(a.a)(b),N=Object(a.a)(p);Object(c.useEffect)(()=>{"object"==typeof v&&Object.keys(v).length&&(O.find(e=>Object(o.c)(v,"taxonomy")&&e.taxonomy===v.taxonomy)||j([...O,v]))},[v,O,j]),Object(c.useEffect)(()=>{w!==S&&void 0!==S&&_(S)},[S,_,w]),Object(c.useEffect)(()=>{h!==x&&void 0!==x&&k(x)},[x,k,h]),Object(c.useEffect)(()=>{E!==N&&void 0!==N&&y(N)},[N,y,E]);const[C,F]=Object(c.useState)(m),[T]=Object(r.a)(C,200);C||F(!0);const R=Object(c.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(i.a)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}})).asc(["taxonomy","query_type"])),t})(g),[g]);return Object(s.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...R},shouldSelect:T})}},3:function(e,t){e.exports=window.wc.wcSettings},30:function(e,t,n){"use strict";var c=n(0),r=n(4),o=n.n(r);t.a=e=>{let t,{label:n,screenReaderLabel:r,wrapperElement:i,wrapperProps:a={}}=e;const l=null!=n,s=null!=r;return!l&&s?(t=i||"span",a={...a,className:o()(a.className,"screen-reader-text")},Object(c.createElement)(t,a,r)):(t=i||c.Fragment,l&&s&&n!==r?Object(c.createElement)(t,a,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},r)):Object(c.createElement)(t,a,n))}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>null===e},42:function(e,t,n){"use strict";var c=n(7),r=n.n(c),o=n(0),i=n(147),a=n(4),l=n.n(a);n(156);const s=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{var t;let{className:n,value:c,currency:a,onValueChange:u,displayType:b="text",...p}=e;const d="string"==typeof c?parseInt(c,10):c;if(!Number.isFinite(d))return null;const m=d/10**a.minorUnit;if(!Number.isFinite(m))return null;const f=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",n),g=null!==(t=p.decimalScale)&&void 0!==t?t:null==a?void 0:a.minorUnit,O={...p,...s(a),decimalScale:g,value:void 0,currency:void 0,onValueChange:void 0},j=u?e=>{const t=+e.value*10**a.minorUnit;u(t)}:()=>{};return Object(o.createElement)(i.a,r()({className:f,displayType:b},O,{value:m,onValueChange:j}))}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(0),r=n(26),o=n.n(r);function i(e){const t=Object(c.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},5:function(e,t){e.exports=window.wp.blockEditor},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0);const r=Object(c.createContext)("page"),o=()=>Object(c.useContext)(r);r.Provider},510:function(e,t,n){e.exports=n(557)},511:function(e,t){},512:function(e,t){},513:function(e,t){},557:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(8),o=n(4),i=n.n(o),a=n(70),l=n(609),s=n(5),u=n(1),b=n(3),p=n(18),d=n(136),m=n(216),f=n(2),g=n(102),O=n(62),j=n(292),w=n(7),_=n.n(w),h=n(42),k=n(21),E=n(118);n(513);const y=function(e,t,n){let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[o,i]=e;const a=e=>Number.isFinite(e);return a(o)||(o=t||0),a(i)||(i=n||c),a(t)&&t>o&&(o=t),a(n)&&n<=o&&(o=n-c),a(t)&&t>=i&&(i=t+c),a(n)&&n<i&&(i=n),!r&&o>=i&&(o=i-c),r&&i<=o&&(i=o+c),[o,i]};var v=n(140);const S=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c<=t/10**n&&c>0}},x=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:c}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r>=t/10**c&&r<n/10**c}};var N=n(139),C=e=>{let{minPrice:t,maxPrice:n,minConstraint:r,maxConstraint:o,onChange:a,step:l,currency:s,showInputFields:b=!0,showFilterButton:p=!1,inlineInput:d=!0,isLoading:m=!1,isUpdating:f=!1,isEditor:g=!1,onSubmit:O=(()=>{})}=e;const j=Object(c.useRef)(null),w=Object(c.useRef)(null),C=l||10**s.minorUnit,[F,T]=Object(c.useState)(t),[R,P]=Object(c.useState)(n),U=Object(c.useRef)(null),[A,B]=Object(c.useState)(0);Object(c.useEffect)(()=>{T(t)},[t]),Object(c.useEffect)(()=>{P(n)},[n]),Object(c.useLayoutEffect)(()=>{var e;d&&U.current&&B(null===(e=U.current)||void 0===e?void 0:e.offsetWidth)},[d,B]);const I=Object(c.useMemo)(()=>isFinite(r)&&isFinite(o),[r,o]),L=Object(c.useMemo)(()=>isFinite(t)&&isFinite(n)&&I?{"--low":(t-r)/(o-r)*100+"%","--high":(n-r)/(o-r)*100+"%"}:{"--low":"0%","--high":"100%"},[t,n,r,o,I]),M=Object(c.useCallback)(e=>{if(m||!I||!j.current||!w.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,c=j.current.offsetWidth,r=+j.current.value,i=w.current.offsetWidth,a=+w.current.value,l=c*(r/o),s=i*(a/o);Math.abs(n-l)>Math.abs(n-s)?(j.current.style.zIndex="20",w.current.style.zIndex="21"):(j.current.style.zIndex="21",w.current.style.zIndex="20")},[m,o,I]),q=Object(c.useCallback)(e=>{const c=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=+e.target.value,l=c?[Math.round(i/C)*C,n]:[t,Math.round(i/C)*C],s=y(l,r,o,C,c);a(s)},[a,t,n,r,o,C]),D=Object(c.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(F>=R){const e=y([0,R],null,null,C,t);return a([parseInt(e[0],10),parseInt(e[1],10)])}const n=y([F,R],null,null,C,t);a(n)},[a,C,F,R]),V=Object(E.a)(O,600),G=i()("wc-block-price-filter","wc-block-components-price-slider",b&&"wc-block-price-filter--has-input-fields",b&&"wc-block-components-price-slider--has-input-fields",p&&"wc-block-price-filter--has-filter-button",p&&"wc-block-components-price-slider--has-filter-button",!I&&"is-disabled",(d||A<=300)&&"wc-block-components-price-slider--is-input-inline"),W=Object(k.b)(j.current)?j.current.ownerDocument.activeElement:void 0,Q=W&&W===j.current?C:1,Y=W&&W===w.current?C:1,K=String(F/10**s.minorUnit),z=String(R/10**s.minorUnit),J=d&&A>300,$=Object(c.createElement)("div",{className:i()("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":m&&f}),onMouseMove:M,onFocus:M},I&&Object(c.createElement)("div",{"aria-hidden":b},Object(c.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:L}),Object(c.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(u.__)("Filter products by minimum price","woo-gutenberg-products-block"),"aria-valuetext":K,value:Number.isFinite(t)?t:r,onChange:q,step:Q,min:r,max:o,ref:j,disabled:m&&!I,tabIndex:b?-1:0}),Object(c.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(u.__)("Filter products by maximum price","woo-gutenberg-products-block"),"aria-valuetext":z,value:Number.isFinite(n)?n:o,onChange:q,step:Y,min:r,max:o,ref:w,disabled:m,tabIndex:b?-1:0}))),X=e=>`wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,H={currency:s,decimalScale:0},Z={...H,displayType:"input",allowNegative:!1,disabled:m||!I,onBlur:D};return Object(c.createElement)("div",{className:G,ref:U},(!J||!b)&&$,b&&Object(c.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},f?Object(c.createElement)("div",{className:"input-loading"}):Object(c.createElement)(h.a,_()({},Z,{className:X("min"),"aria-label":Object(u.__)("Filter products by minimum price","woo-gutenberg-products-block"),isAllowed:x({minConstraint:r,minorUnit:s.minorUnit,currentMaxValue:R}),onValueChange:e=>{e!==F&&T(e)},value:F})),J&&$,f?Object(c.createElement)("div",{className:"input-loading"}):Object(c.createElement)(h.a,_()({},Z,{className:X("max"),"aria-label":Object(u.__)("Filter products by maximum price","woo-gutenberg-products-block"),isAllowed:S({maxConstraint:o,minorUnit:s.minorUnit}),onValueChange:e=>{e!==R&&P(e)},value:R}))),!b&&!f&&Number.isFinite(t)&&Number.isFinite(n)&&Object(c.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(c.createElement)(h.a,_()({},H,{value:t})),Object(c.createElement)(h.a,_()({},H,{value:n}))),Object(c.createElement)("div",{className:"wc-block-components-price-slider__actions"},(g||!f&&(t!==r||n!==o))&&Object(c.createElement)(N.a,{onClick:()=>{a([r,o]),V()},screenReaderLabel:Object(u.__)("Reset price filter","woo-gutenberg-products-block")}),p&&Object(c.createElement)(v.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:f,disabled:m||!I,onClick:O,screenReaderLabel:Object(u.__)("Apply price filter","woo-gutenberg-products-block")})))},F=n(137),T=n(23),R=n(16),P=n(260),U=n(83),A=n(112);const B=(e,t,n)=>{const c=10*10**t;let r=null;const o=parseFloat(e);isNaN(o)||("ROUND_UP"===n?r=Math.ceil(o/c)*c:"ROUND_DOWN"===n&&(r=Math.floor(o/c)*c));const i=Object(g.a)(r,Number.isFinite);return Number.isFinite(r)?r:i};n(512);var I=n(114);function L(e,t){return Number(e)*10**t}var M=e=>{let{attributes:t,isEditor:n=!1}=e;const r=Object(I.a)(),o=Object(b.getSettingWithCoercion)("has_filterable_products",!1,U.a),i=Object(b.getSettingWithCoercion)("is_rendering_php_template",!1,U.a),[a,l]=Object(c.useState)(!1),s=Object(P.d)("min_price"),u=Object(P.d)("max_price"),[p]=Object(O.a)(),{results:d,isLoading:m}=Object(j.a)({queryPrices:!0,queryState:p,isEditor:n}),f=Object(T.getCurrencyFromPriceResponse)(Object(k.c)(d,"price_range")?d.price_range:void 0),[w,_]=Object(O.b)("min_price"),[h,y]=Object(O.b)("max_price"),[v,S]=Object(c.useState)(L(s,f.minorUnit)||null),[x,N]=Object(c.useState)(L(u,f.minorUnit)||null),{minConstraint:M,maxConstraint:q}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:c}=e;return{minConstraint:B(t||"",c,"ROUND_DOWN"),maxConstraint:B(n||"",c,"ROUND_UP")}})({minPrice:Object(k.c)(d,"price_range")&&Object(k.c)(d.price_range,"min_price")&&Object(A.a)(d.price_range.min_price)?d.price_range.min_price:void 0,maxPrice:Object(k.c)(d,"price_range")&&Object(k.c)(d.price_range,"max_price")&&Object(A.a)(d.price_range.max_price)?d.price_range.max_price:void 0,minorUnit:f.minorUnit});Object(c.useEffect)(()=>{a||(_(L(s,f.minorUnit)),y(L(u,f.minorUnit)),l(!0))},[f.minorUnit,a,u,s,y,_]);const[D,V]=Object(c.useState)(m),G=Object(c.useCallback)((e,t)=>{const n=t>=Number(q)?void 0:t,c=e<=Number(M)?void 0:e;if(window){const e=function(e,t){const n={};for(const[e,c]of Object.entries(t))c?n[e]=c.toString():delete n[e];const c=Object(R.removeQueryArgs)(e,...Object.keys(t));return Object(R.addQueryArgs)(c,n)}(window.location.href,{min_price:c/10**f.minorUnit,max_price:n/10**f.minorUnit});window.location.href!==e&&Object(P.c)(e)}_(c),y(n)},[M,q,_,y,f.minorUnit]),W=Object(E.a)(G,500),Q=Object(c.useCallback)(e=>{V(!0),e[0]!==v&&S(e[0]),e[1]!==x&&N(e[1]),i&&a&&!t.showFilterButton&&W(e[0],e[1])},[v,x,S,N,i,a,W,t.showFilterButton]);Object(c.useEffect)(()=>{t.showFilterButton||i||W(v,x)},[v,x,t.showFilterButton,W,i]);const Y=Object(g.a)(w),K=Object(g.a)(h),z=Object(g.a)(M),J=Object(g.a)(q);if(Object(c.useEffect)(()=>{(!Number.isFinite(v)||w!==Y&&w!==v||M!==z&&M!==v)&&S(Number.isFinite(w)?w:M),(!Number.isFinite(x)||h!==K&&h!==x||q!==J&&q!==x)&&N(Number.isFinite(h)?h:q)},[v,x,w,h,M,q,z,J,Y,K]),!o)return r(!1),null;if(!m&&(null===M||null===q||M===q))return r(!1),null;const $="h"+t.headingLevel;r(!0),!m&&D&&V(!1);const X=Object(c.createElement)($,{className:"wc-block-price-filter__title"},t.heading),H=m&&D?Object(c.createElement)(F.a,null,X):X;return Object(c.createElement)(c.Fragment,null,!n&&t.heading&&H,Object(c.createElement)("div",{className:"wc-block-price-slider"},Object(c.createElement)(C,{minConstraint:M,maxConstraint:q,minPrice:v,maxPrice:x,currency:f,showInputFields:t.showInputFields,inlineInput:t.inlineInput,showFilterButton:t.showFilterButton,onChange:Q,onSubmit:()=>G(v,x),isLoading:m,isUpdating:D,isEditor:n})))},q=(n(511),n(135)),D=n(258);const V={heading:{type:"string",default:Object(u.__)("Filter by price","woo-gutenberg-products-block")}};var G=[{attributes:{...D.attributes,...V},save:e=>{let{attributes:t}=e;const{className:n,showInputFields:r,showFilterButton:o,heading:a,headingLevel:l}=t,u={"data-showinputfields":r,"data-showfilterbutton":o,"data-heading":a,"data-heading-level":l};return Object(c.createElement)("div",_()({},s.useBlockProps.save({className:i()("is-loading",n)}),u),Object(c.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}}];Object(r.registerBlockType)(D,{icon:{src:Object(c.createElement)(a.a,{icon:l.a,className:"wc-block-editor-components-block-icon"})},attributes:{...D.attributes,...V},edit:function(e){let{attributes:t,setAttributes:n,clientId:r}=e;const{heading:o,headingLevel:i,showInputFields:g,inlineInput:O,showFilterButton:j}=t,w=Object(s.useBlockProps)();return Object(c.createElement)("div",w,0===p.p.productCount?Object(c.createElement)(f.Placeholder,{className:"wc-block-price-slider",icon:Object(c.createElement)(a.a,{icon:l.a}),label:Object(u.__)("Filter by Price","woo-gutenberg-products-block"),instructions:Object(u.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block")},Object(c.createElement)("p",null,Object(u.__)("To filter your products by price you first need to assign prices to your products.","woo-gutenberg-products-block")),Object(c.createElement)(f.Button,{className:"wc-block-price-slider__add-product-button",isSecondary:!0,href:Object(b.getAdminLink)("post-new.php?post_type=product")},Object(u.__)("Add new product","woo-gutenberg-products-block")+" ",Object(c.createElement)(a.a,{icon:m.a})),Object(c.createElement)(f.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(u.__)("Learn more","woo-gutenberg-products-block"))):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(s.InspectorControls,{key:"inspector"},Object(c.createElement)(f.PanelBody,{title:Object(u.__)("Settings","woo-gutenberg-products-block")},Object(c.createElement)(f.__experimentalToggleGroupControl,{label:Object(u.__)("Price Range Selector","woo-gutenberg-products-block"),value:g?"editable":"text",onChange:e=>n({showInputFields:"editable"===e}),className:"wc-block-price-filter__price-range-toggle"},Object(c.createElement)(f.__experimentalToggleGroupControlOption,{value:"editable",label:Object(u.__)("Editable","woo-gutenberg-products-block")}),Object(c.createElement)(f.__experimentalToggleGroupControlOption,{value:"text",label:Object(u.__)("Text","woo-gutenberg-products-block")})),g&&Object(c.createElement)(f.ToggleControl,{label:Object(u.__)("Inline input fields","woo-gutenberg-products-block"),checked:O,onChange:()=>n({inlineInput:!O}),help:Object(u.__)("Show input fields inline with the slider.","woo-gutenberg-products-block")}),Object(c.createElement)(f.ToggleControl,{label:Object(u.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:Object(u.__)("Products will update when the button is clicked.","woo-gutenberg-products-block"),checked:j,onChange:()=>n({showFilterButton:!j})}))),Object(c.createElement)(q.a,{attributes:t,clientId:r,setAttributes:n,filterType:"price-filter"}),o&&Object(c.createElement)(d.a,{className:"wc-block-price-filter__title",headingLevel:i,heading:o,onChange:e=>n({heading:e})}),Object(c.createElement)(f.Disabled,null,Object(c.createElement)(M,{attributes:t,isEditor:!0}))))},save(e){let{attributes:t}=e;const{className:n}=t;return Object(c.createElement)("div",s.useBlockProps.save({className:i()("is-loading",n)}),Object(c.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))},deprecated:G})},6:function(e,t){e.exports=window.wp.data},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}));var c=n(9),r=n(6),o=n(0),i=n(26),a=n.n(i),l=n(47),s=n(102),u=n(51);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(r.useSelect)(t=>t(c.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:i}=Object(r.useDispatch)(c.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{i(e,t)},[e,i])]},p=(e,t,n)=>{const i=Object(u.a)();n=n||i;const a=Object(r.useSelect)(r=>r(c.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:l}=Object(r.useDispatch)(c.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{l(n,e,t)},[n,e,l])]},d=(e,t)=>{const n=Object(u.a)();t=t||n;const[c,r]=b(t),i=Object(l.a)(c),p=Object(l.a)(e),d=Object(s.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(d,p)||(r(Object.assign({},i,p)),m.current=!0)},[i,p,d,r]),m.current?[c,r]:[e,r]}},8:function(e,t){e.exports=window.wp.blocks},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"boolean"==typeof e},9:function(e,t){e.exports=window.wc.wcBlocksData}});