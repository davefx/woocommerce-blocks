(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[81],{103:function(e,t){},104:function(e,t){},109:function(e,t,c){"use strict";c.d(t,"c",(function(){return a})),c.d(t,"b",(function(){return s})),c.d(t,"a",(function(){return l})),c.d(t,"d",(function(){return u}));var n=c(24),r=c(70),o=c(145);const a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"filter_rating";const t=Object(r.d)(e);if(!t)return[];const c=Object(n.a)(t)?t.split(","):t;return c};function s(){return Math.floor(Math.random()*Date.now())}const l=e=>e.trim().replace(/\s/g,"-").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,""),u=e=>({showFilterButton:"true"===(null==e?void 0:e.showFilterButton),showCounts:"false"!==(null==e?void 0:e.showCounts),isPreview:!1,displayStyle:Object(n.a)(null==e?void 0:e.displayStyle)&&e.displayStyle||o.attributes.displayStyle.default,selectType:Object(n.a)(null==e?void 0:e.selectType)&&e.selectType||o.attributes.selectType.default})},116:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c(51);var n=c(36);const r=()=>n.m>1},117:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(24),r=c(19);const o=e=>Object(n.a)(e)?JSON.parse(e)||{}:Object(r.a)(e)?e:{}},119:function(e,t){},120:function(e,t){},141:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var n=c(0),r=c(100),o=c(4),a=c(31),s=c(19),l=c(32),u=c(60),i=c(26);const b=e=>{let{queryAttribute:t,queryPrices:c,queryStock:b,queryRating:d,queryState:O,productIds:j}=e,f=Object(i.a)();f+="-collection-data";const[m]=Object(l.a)(f),[g,p]=Object(l.b)("calculate_attribute_counts",[],f),[_,y]=Object(l.b)("calculate_price_range",null,f),[w,v]=Object(l.b)("calculate_stock_status_counts",null,f),[h,k]=Object(l.b)("calculate_rating_counts",null,f),E=Object(a.a)(t||{}),S=Object(a.a)(c),C=Object(a.a)(b),N=Object(a.a)(d);Object(n.useEffect)(()=>{"object"==typeof E&&Object.keys(E).length&&(g.find(e=>Object(s.b)(E,"taxonomy")&&e.taxonomy===E.taxonomy)||p([...g,E]))},[E,g,p]),Object(n.useEffect)(()=>{_!==S&&void 0!==S&&y(S)},[S,y,_]),Object(n.useEffect)(()=>{w!==C&&void 0!==C&&v(C)},[C,v,w]),Object(n.useEffect)(()=>{h!==N&&void 0!==N&&k(N)},[N,k,h]);const[R,x]=Object(n.useState)(!1),[T]=Object(r.a)(R,200);R||x(!0);const P=Object(n.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:c}=e;return{taxonomy:t,query_type:c}}),["taxonomy","query_type"])),t})(m),[m]);return Object(u.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...O,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(o.isEmpty)(j)&&{include:j},...P},shouldSelect:T})}},145:function(e){e.exports=JSON.parse('{"name":"woocommerce/rating-filter","version":"1.0.0","title":"Filter by Rating Controls","description":"Enable customers to filter the product grid by rating.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"__experimentalDefaultControls":{"text":true}},"inserter":false,"lock":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"showCounts":{"type":"boolean","default":true},"displayStyle":{"type":"string","default":"list"},"showFilterButton":{"type":"boolean","default":false},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},155:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(63),r=c(116),o=c(19),a=c(117);const s=e=>{if(!Object(r.a)())return{className:"",style:{}};const t=Object(o.a)(e)?e:{},c=Object(a.a)(t.style);return Object(n.__experimentalUseBorderProps)({...t,style:c})}},166:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(25),a=c(94),s=c(161),l=c(5),u=c.n(l),i=e=>{let{className:t,rating:c,ratedProductsCount:o}=e;const a=u()("wc-block-components-product-rating",t),s={width:c/5*100+"%"},l=Object(r.sprintf)(
/* translators: %f is referring to the average rating value */
Object(r.__)("Rated %f out of 5","woo-gutenberg-products-block"),c),i={__html:Object(r.sprintf)(
/* translators: %s is the rating value wrapped in HTML strong tags. */
Object(r.__)("Rated %s out of 5","woo-gutenberg-products-block"),Object(r.sprintf)('<strong class="rating">%f</strong>',c))};return Object(n.createElement)("div",{className:a},Object(n.createElement)("div",{className:"wc-block-components-product-rating__stars",role:"img","aria-label":l},Object(n.createElement)("span",{style:s,dangerouslySetInnerHTML:i})),null!==o?Object(n.createElement)("span",{className:"wc-block-components-product-rating-count"},"(",o,")"):null)},b=c(155),d=c(31),O=c(61),j=c(32),f=c(141),m=c(2),g=c(73),p=c(19),_=c(13),y=c.n(_),w=c(96),v=c(68),h=c(67),k=c(95),E=c(14),S=c(70),C=c(4);const N=[{label:Object(n.createElement)(i,{className:"",key:5,rating:5,ratedProductsCount:5}),value:"5"},{label:Object(n.createElement)(i,{className:"",key:4,rating:4,ratedProductsCount:4}),value:"4"},{label:Object(n.createElement)(i,{className:"",key:3,rating:3,ratedProductsCount:3}),value:"3"},{label:Object(n.createElement)(i,{className:"",key:2,rating:2,ratedProductsCount:2}),value:"2"},{label:Object(n.createElement)(i,{className:"",key:1,rating:1,ratedProductsCount:1}),value:"1"}];c(230);var R=c(109),x=c(47);const T=e=>Object(r.sprintf)(
/* translators: %s is referring to the average rating value */
Object(r.__)("Rated %s out of 5 filter added.","woo-gutenberg-products-block"),e),P=e=>Object(r.sprintf)(
/* translators: %s is referring to the average rating value */
Object(r.__)("Rated %s out of 5 filter added.","woo-gutenberg-products-block"),e);t.a=e=>{let{attributes:t,isEditor:c=!1}=e;const l=Object(x.b)(),_=Object(m.getSettingWithCoercion)("is_rendering_php_template",!1,g.a),[L,F]=Object(n.useState)(!1),[A]=Object(j.a)(),{results:q,isLoading:M}=Object(f.a)({queryRating:!0,queryState:A}),[Q,B]=Object(n.useState)(t.isPreview?N:[]),Y=!t.isPreview&&M&&0===Q.length,I=!t.isPreview&&M,V=Object(n.useMemo)(()=>Object(R.c)("rating_filter"),[]),[D,K]=Object(n.useState)(V),[U,W]=Object(j.b)("rating",V),[J,z]=Object(n.useState)(Object(R.b)()),H=Object(b.a)(t),Z="single"!==t.selectType,$=Object(n.useCallback)(e=>{c||(e&&!_&&W(e),(e=>{if(!window)return;if(0===e.length){const e=Object(E.removeQueryArgs)(window.location.href,"rating_filter");return void(e!==window.location.href&&Object(S.c)(e))}const t=Object(E.addQueryArgs)(window.location.href,{rating_filter:e.join(",")});t!==window.location.href&&Object(S.c)(t)})(e))},[c,W,_]);Object(n.useEffect)(()=>{t.showFilterButton||$(D)},[t.showFilterButton,D,$]);const G=Object(n.useMemo)(()=>U,[U]),X=Object(d.a)(G),ee=Object(O.a)(X);Object(n.useEffect)(()=>{y()(ee,X)||y()(D,X)||K(X)},[D,X,ee]),Object(n.useEffect)(()=>{L||(W(V),F(!0))},[W,L,F,V]),Object(n.useEffect)(()=>{if(M||t.isPreview)return;const e=(!M&&Object(p.b)(q,"rating_counts")&&Array.isArray(q.rating_counts)?[...q.rating_counts].reverse():[]).filter(e=>Object(p.a)(e)&&Object.keys(e).length>0).map(e=>{var c;return{label:Object(n.createElement)(i,{key:null==e?void 0:e.rating,rating:null==e?void 0:e.rating,ratedProductsCount:t.showCounts?null==e?void 0:e.count:null}),value:null==e||null===(c=e.rating)||void 0===c?void 0:c.toString()}});B(e),z(Object(R.b)())},[t.showCounts,t.isPreview,q,M,U,c]);const te=Object(n.useCallback)(e=>{const t=D.includes(e);if(!Z){const c=t?[]:[e];return Object(o.speak)(t?P(e):T(e)),void K(c)}if(t){const t=D.filter(t=>t!==e);return Object(o.speak)(P(e)),void K(t)}const c=[...D,e].sort((e,t)=>Number(t)-Number(e));Object(o.speak)(T(e)),K(c)},[D,Z]);return(M||0!==Q.length)&&Object(m.getSettingWithCoercion)("has_filterable_products",!1,g.a)?(l(!0),Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:u()("wc-block-rating-filter","style-"+t.displayStyle,{"is-loading":Y})},"dropdown"===t.displayStyle?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(k.a,{key:J,className:u()(H.className,{"single-selection":!Z,"is-loading":Y}),style:{...H.style,borderStyle:"none"},suggestions:Q.filter(e=>!D.includes(e.value)).map(e=>e.value),disabled:Y,placeholder:Object(r.__)("Select Rating","woo-gutenberg-products-block"),onChange:e=>{!Z&&e.length>1&&(e=[e[e.length-1]]),e=e.map(e=>{const t=Q.find(t=>t.value===e);return t?t.value:e});const t=Object(C.difference)(e,D);if(1===t.length)return te(t[0]);const c=Object(C.difference)(D,e);1===c.length&&te(c[0])},value:D,displayTransform:e=>{const t={value:e,label:Object(n.createElement)(i,{key:Number(e),rating:Number(e),ratedProductsCount:0})},c=Q.find(t=>t.value===e)||t,{label:r,value:o}=c;return Object.assign({},r,{toLocaleLowerCase:()=>o,substring:(e,t)=>0===e&&1===t?r:""})},saveTransform:R.a,messages:{added:Object(r.__)("Rating filter added.","woo-gutenberg-products-block"),removed:Object(r.__)("Rating filter removed.","woo-gutenberg-products-block"),remove:Object(r.__)("Remove rating filter.","woo-gutenberg-products-block"),__experimentalInvalid:Object(r.__)("Invalid rating filter.","woo-gutenberg-products-block")}}),Z&&Object(n.createElement)(a.a,{icon:s.a,size:30})):Object(n.createElement)(w.a,{className:"wc-block-rating-filter-list",options:Q,checked:D,onChange:e=>{te(e.toString())},isLoading:Y,isDisabled:I})),Object(n.createElement)("div",{className:"wc-block-rating-filter__actions"},D.length>0&&!Y&&Object(n.createElement)(h.a,{onClick:()=>{K([]),setProductRatings([]),$([])},screenReaderLabel:Object(r.__)("Reset rating filter","woo-gutenberg-products-block")}),t.showFilterButton&&Object(n.createElement)(v.a,{className:"wc-block-rating-filter__button",isLoading:Y,disabled:Y||I,onClick:()=>$(D)})))):(l(!1),null)}},19:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return r}));const n=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return n(e)&&t in e}},21:function(e,t,c){"use strict";var n=c(0),r=c(5),o=c.n(r);t.a=e=>{let t,{label:c,screenReaderLabel:r,wrapperElement:a,wrapperProps:s={}}=e;const l=null!=c,u=null!=r;return!l&&u?(t=a||"span",s={...s,className:o()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,r)):(t=a||n.Fragment,l&&u&&c!==r?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},r)):Object(n.createElement)(t,s,c))}},230:function(e,t){},24:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"string"==typeof e},26:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0);const r=Object(n.createContext)("page"),o=()=>Object(n.useContext)(r);r.Provider},288:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(63),r=c(116),o=c(19),a=c(117);const s=e=>{if(!Object(r.a)())return{className:"",style:{}};const t=Object(o.a)(e)?e:{},c=Object(a.a)(t.style);return Object(n.__experimentalUseColorProps)({...t,style:c})}},31:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(0),r=c(13),o=c.n(r);function a(e){const t=Object(n.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},32:function(e,t,c){"use strict";c.d(t,"a",(function(){return b})),c.d(t,"b",(function(){return d})),c.d(t,"c",(function(){return O}));var n=c(3),r=c(7),o=c(0),a=c(13),s=c.n(a),l=c(31),u=c(61),i=c(26);const b=e=>{const t=Object(i.a)();e=e||t;const c=Object(r.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:a}=Object(r.useDispatch)(n.QUERY_STATE_STORE_KEY);return[c,Object(o.useCallback)(t=>{a(e,t)},[e,a])]},d=(e,t,c)=>{const a=Object(i.a)();c=c||a;const s=Object(r.useSelect)(r=>r(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(c,e,t),[c,e]),{setQueryValue:l}=Object(r.useDispatch)(n.QUERY_STATE_STORE_KEY);return[s,Object(o.useCallback)(t=>{l(c,e,t)},[c,e,l])]},O=(e,t)=>{const c=Object(i.a)();t=t||c;const[n,r]=b(t),a=Object(l.a)(n),d=Object(l.a)(e),O=Object(u.a)(d),j=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{s()(O,d)||(r(Object.assign({},a,d)),j.current=!0)},[a,d,O,r]),j.current?[n,r]:[e,r]}},454:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(288),o=c(24),a=c(166),s=c(109);t.default=e=>{const t=Object(r.a)(e);return Object(n.createElement)("div",{className:Object(o.a)(e.className)?e.className:"",style:{...t.style}},Object(n.createElement)(a.a,{isEditor:!1,attributes:Object(s.d)(e)}))}},60:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(3),r=c(7),o=c(0),a=c(31),s=c(74);const l=e=>{const{namespace:t,resourceName:c,resourceValues:l=[],query:u={},shouldSelect:i=!0}=e;if(!t||!c)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),d=Object(a.a)(u),O=Object(a.a)(l),j=Object(s.a)(),f=Object(r.useSelect)(e=>{if(!i)return null;const r=e(n.COLLECTIONS_STORE_KEY),o=[t,c,d,O],a=r.getCollectionError(...o);if(a){if(!(a instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");j(a)}return{results:r.getCollection(...o),isLoading:!r.hasFinishedResolution("getCollection",o)}},[t,c,O,d,i]);return null!==f&&(b.current=f),b.current}},61:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(8);function r(e,t){const c=Object(n.useRef)();return Object(n.useEffect)(()=>{c.current===e||t&&!t(e,c.current)||(c.current=e)},[e,t]),c.current}},67:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(5),a=c.n(o),s=c(21);c(103),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
c=Object(r.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:l=Object(r.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{className:a()("wc-block-components-filter-reset-button",t),onClick:o},Object(n.createElement)(s.a,{label:c,screenReaderLabel:l}))}},68:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(5),a=c.n(o),s=c(21);c(104),t.a=e=>{let{className:t,isLoading:c,disabled:o,label:
/* translators: Submit button text for filters. */
l=Object(r.__)("Apply","woo-gutenberg-products-block"),onClick:u,screenReaderLabel:i=Object(r.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{type:"submit",className:a()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":c},t),disabled:o,onClick:u},Object(n.createElement)(s.a,{label:l,screenReaderLabel:i}))}},70:function(e,t,c){"use strict";c.d(t,"b",(function(){return s})),c.d(t,"a",(function(){return l})),c.d(t,"d",(function(){return u})),c.d(t,"c",(function(){return i}));var n=c(14),r=c(2),o=c(73);const a=Object(r.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),s="query_type_",l="filter_";function u(e){return window?Object(n.getQueryArg)(window.location.href,e):null}function i(e){a?window.location.href=e:window.history.replaceState({},"",e)}},73:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"boolean"==typeof e},74:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(0);const r=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}},95:function(e,t,c){"use strict";var n=c(15),r=c.n(n),o=c(0),a=c(133),s=c(5),l=c.n(s);c(119),t.a=e=>{let{className:t,style:c,suggestions:n,multiple:s=!0,saveTransform:u=(e=>e.trim().replace(/\s/g,"-")),messages:i={},validateInput:b=(e=>n.includes(e)),label:d="",...O}=e;return Object(o.createElement)("div",{className:l()("wc-blocks-components-form-token-field-wrapper",t,{"single-selection":!s}),style:c},Object(o.createElement)(a.a,r()({label:d,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:b,saveTransform:u,maxLength:s?void 0:1,suggestions:n,messages:i},O)))}},96:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(5),a=c.n(o),s=c(11);c(120),t.a=e=>{let{className:t,onChange:c,options:o=[],checked:l=[],isLoading:u=!1,isDisabled:i=!1,limit:b=10}=e;const[d,O]=Object(n.useState)(!1),j=Object(n.useMemo)(()=>[...Array(5)].map((e,t)=>Object(n.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),f=Object(n.useMemo)(()=>{const e=o.length-b;return!d&&Object(n.createElement)("li",{key:"show-more",className:"show-more"},Object(n.createElement)("button",{onClick:()=>{O(!0)},"aria-expanded":!1,"aria-label":Object(r.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(r._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(r.sprintf)(
/* translators: %s number of options to reveal. */
Object(r._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[o,b,d]),m=Object(n.useMemo)(()=>d&&Object(n.createElement)("li",{key:"show-less",className:"show-less"},Object(n.createElement)("button",{onClick:()=>{O(!1)},"aria-expanded":!0,"aria-label":Object(r.__)("Show less options","woo-gutenberg-products-block")},Object(r.__)("Show less","woo-gutenberg-products-block"))),[d]),g=Object(n.useMemo)(()=>{const e=o.length>b+5;return Object(n.createElement)(n.Fragment,null,o.map((t,r)=>Object(n.createElement)(n.Fragment,{key:t.value},Object(n.createElement)("li",e&&!d&&r>=b&&{hidden:!0},Object(n.createElement)(s.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:l.includes(t.value),onChange:()=>{c(t.value)},disabled:i})),e&&r===b-1&&f)),e&&m)},[o,c,l,d,b,m,f,i]),p=a()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":u},t);return Object(n.createElement)("ul",{className:p},u?j:g)}}}]);