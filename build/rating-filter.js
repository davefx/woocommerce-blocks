(()=>{var e,t={9284:(e,t,o)=>{"use strict";o.r(t);var r=o(9307);const n=window.wp.blocks;var l=o(1984),s=o(4734),a=o(4184),c=o.n(a);const i=window.wp.blockEditor;var u=o(5736);const d=window.wp.components;var p=o(5158),g=o(3904);o(8354);const b=({className:e,rating:t,ratedProductsCount:o})=>{const n=c()("wc-block-components-product-rating",e),l={width:t/5*100+"%"},s=(0,u.sprintf)(/* translators: %f is referring to the average rating value */
(0,u.__)("Rated %f out of 5","woo-gutenberg-products-block"),t),a={__html:(0,u.sprintf)(/* translators: %s is the rating value wrapped in HTML strong tags. */
(0,u.__)("Rated %s out of 5","woo-gutenberg-products-block"),(0,u.sprintf)('<strong class="rating">%f</strong>',t))};return(0,r.createElement)("div",{className:n},(0,r.createElement)("div",{className:"wc-block-components-product-rating__stars",role:"img","aria-label":s},(0,r.createElement)("span",{style:l,dangerouslySetInnerHTML:a})),null!==o?(0,r.createElement)("span",{className:"wc-block-components-product-rating-count"},"(",o,")"):null)};var w=o(9127),m=o.n(w);function f(e){const t=(0,r.useRef)(e);return m()(e,t.current)||(t.current=e),t.current}const _=window.wc.wcBlocksData,y=window.wp.data,v=(0,r.createContext)("page"),h=()=>(0,r.useContext)(v),k=(v.Provider,e=>{const t=h();e=e||t;const o=(0,y.useSelect)((t=>t(_.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:n}=(0,y.useDispatch)(_.QUERY_STATE_STORE_KEY);return[o,(0,r.useCallback)((t=>{n(e,t)}),[e,n])]}),E=(e,t,o)=>{const n=h();o=o||n;const l=(0,y.useSelect)((r=>r(_.QUERY_STATE_STORE_KEY).getValueForQueryKey(o,e,t)),[o,e]),{setQueryValue:s}=(0,y.useDispatch)(_.QUERY_STATE_STORE_KEY);return[l,(0,r.useCallback)((t=>{s(o,e,t)}),[o,e,s])]};var C=o(4697);const S=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function x(e,t){return S(e)&&t in e}var T=o(172);const N=({queryAttribute:e,queryPrices:t,queryStock:o,queryRating:n,queryState:l,isEditor:s=!1})=>{let a=h();a=`${a}-collection-data`;const[c]=k(a),[i,u]=E("calculate_attribute_counts",[],a),[d,p]=E("calculate_price_range",null,a),[g,b]=E("calculate_stock_status_counts",null,a),[w,m]=E("calculate_rating_counts",null,a),v=f(e||{}),S=f(t),N=f(o),R=f(n);(0,r.useEffect)((()=>{"object"==typeof v&&Object.keys(v).length&&(i.find((e=>x(v,"taxonomy")&&e.taxonomy===v.taxonomy))||u([...i,v]))}),[v,i,u]),(0,r.useEffect)((()=>{d!==S&&void 0!==S&&p(S)}),[S,p,d]),(0,r.useEffect)((()=>{g!==N&&void 0!==N&&b(N)}),[N,b,g]),(0,r.useEffect)((()=>{w!==R&&void 0!==R&&m(R)}),[R,m,w]);const[O,P]=(0,r.useState)(s),[L]=(0,C.Nr)(O,200);O||P(!0);const A=(0,r.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=(0,T.DY)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(c)),[c]);return(e=>{const{namespace:t,resourceName:o,resourceValues:n=[],query:l={},shouldSelect:s=!0}=e;if(!t||!o)throw new Error("The options object must have valid values for the namespace and the resource properties.");const a=(0,r.useRef)({results:[],isLoading:!0}),c=f(l),i=f(n),u=(()=>{const[,e]=(0,r.useState)();return(0,r.useCallback)((t=>{e((()=>{throw t}))}),[])})(),d=(0,y.useSelect)((e=>{if(!s)return null;const r=e(_.COLLECTIONS_STORE_KEY),n=[t,o,c,i],l=r.getCollectionError(...n);if(l){if(!(l instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");u(l)}return{results:r.getCollection(...n),isLoading:!r.hasFinishedResolution("getCollection",n)}}),[t,o,i,c,s]);return null!==d&&(a.current=d),a.current})({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...l,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...A},shouldSelect:L})},R=window.wc.wcSettings,O=e=>"boolean"==typeof e,P=window.wc.blocksComponents;o(994);const L=({className:e,isLoading:t,disabled:o,
/* translators: Submit button text for filters. */
label:n=(0,u.__)("Apply","woo-gutenberg-products-block"),onClick:l,screenReaderLabel:s=(0,u.__)("Apply filter","woo-gutenberg-products-block")})=>(0,r.createElement)("button",{type:"submit",className:c()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":t},e),disabled:o,onClick:l},(0,r.createElement)(P.Label,{label:n,screenReaderLabel:s}));o(770);const A=({className:e,
/* translators: Reset button text for filters. */
label:t=(0,u.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:n=(0,u.__)("Reset filter","woo-gutenberg-products-block")})=>(0,r.createElement)("button",{className:c()("wc-block-components-filter-reset-button",e),onClick:o},(0,r.createElement)(P.Label,{label:t,screenReaderLabel:n}));var j=o(2578);o(230);const F=({className:e,style:t,suggestions:o,multiple:n=!0,saveTransform:l=(e=>e.trim().replace(/\s/g,"-")),messages:s={},validateInput:a=(e=>o.includes(e)),label:i="",...u})=>(0,r.createElement)("div",{className:c()("wc-blocks-components-form-token-field-wrapper",e,{"single-selection":!n}),style:t},(0,r.createElement)(j.Z,{label:i,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:a,saveTransform:l,maxLength:n?void 0:1,suggestions:o,messages:s,...u})),q=window.wp.url,B=(0,R.getSettingWithCoercion)("isRenderingPhpTemplate",!1,O);function Q(e){B?((e=e.replace(/(?:query-(?:\d+-)?page=(\d+))|(?:page\/(\d+))/g,"")).endsWith("?")&&(e=e.slice(0,-1)),window.location.href=e):window.history.replaceState({},"",e)}const D=e=>{const t=(0,q.getQueryArgs)(e);return(0,q.addQueryArgs)(e,t)},M=[{label:(0,r.createElement)(b,{key:5,rating:5,ratedProductsCount:null}),value:"5"},{label:(0,r.createElement)(b,{key:4,rating:4,ratedProductsCount:null}),value:"4"},{label:(0,r.createElement)(b,{key:3,rating:3,ratedProductsCount:null}),value:"3"},{label:(0,r.createElement)(b,{key:2,rating:2,ratedProductsCount:null}),value:"2"},{label:(0,r.createElement)(b,{key:1,rating:1,ratedProductsCount:null}),value:"1"}];o(2712);function Y(){return Math.floor(Math.random()*Date.now())}const I=e=>e.trim().replace(/\s/g,"-").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,""),V=(0,r.createContext)({}),W="rating_filter",G=e=>(0,u.sprintf)(/* translators: %s is referring to the average rating value */
(0,u.__)("Rated %s out of 5 filter added.","woo-gutenberg-products-block"),e),K=e=>(0,u.sprintf)(/* translators: %s is referring to the average rating value */
(0,u.__)("Rated %s out of 5 filter added.","woo-gutenberg-products-block"),e),Z=({attributes:e,isEditor:t,noRatingsNotice:o=null})=>{const n=(()=>{const{wrapper:e}=(0,r.useContext)(V);return t=>{e&&e.current&&(e.current.hidden=!t)}})(),s=(0,R.getSettingWithCoercion)("isRenderingPhpTemplate",!1,O),[a,i]=(0,r.useState)(!1),[d]=k(),{results:w,isLoading:_}=N({queryRating:!0,queryState:d,isEditor:t}),[y,v]=(0,r.useState)(e.isPreview?M:[]),h=!e.isPreview&&_&&0===y.length,C=!e.isPreview&&_,T=(0,r.useMemo)((()=>((e="filter_rating")=>{const t=(o=e,window?(0,q.getQueryArg)(window.location.href,o):null);var o;return t?"string"==typeof t?t.split(","):t:[]})("rating_filter")),[]),[j,B]=(0,r.useState)(T),[Z,U]=E("rating",T),[J,$]=(0,r.useState)(Y()),[z,H]=(0,r.useState)(!1),X="single"!==e.selectType,ee=X?!h&&j.length<y.length:!h&&0===j.length,te=(0,r.useCallback)((e=>{t||(e&&!s&&U(e),(e=>{if(!window)return;if(0===e.length){const e=(0,q.removeQueryArgs)(window.location.href,W);return void(e!==D(window.location.href)&&Q(e))}const t=(0,q.addQueryArgs)(window.location.href,{[W]:e.join(",")});t!==D(window.location.href)&&Q(t)})(e))}),[t,U,s]);(0,r.useEffect)((()=>{e.showFilterButton||te(j)}),[e.showFilterButton,j,te]);const oe=f((0,r.useMemo)((()=>Z),[Z])),re=function(e,t){const o=(0,r.useRef)();return(0,r.useEffect)((()=>{o.current===e||(o.current=e)}),[e,t]),o.current}(oe);(0,r.useEffect)((()=>{m()(re,oe)||m()(j,oe)||B(oe)}),[j,oe,re]),(0,r.useEffect)((()=>{a||(U(T),i(!0))}),[U,a,i,T]),(0,r.useEffect)((()=>{if(_||e.isPreview)return;const o=!_&&x(w,"rating_counts")&&Array.isArray(w.rating_counts)?[...w.rating_counts].reverse():[];if(t&&0===o.length)return v(M),void H(!0);const n=o.filter((e=>S(e)&&Object.keys(e).length>0)).map((t=>{var o;return{label:(0,r.createElement)(b,{key:null==t?void 0:t.rating,rating:null==t?void 0:t.rating,ratedProductsCount:e.showCounts?null==t?void 0:t.count:null}),value:null==t||null===(o=t.rating)||void 0===o?void 0:o.toString()}}));v(n),$(Y())}),[e.showCounts,e.isPreview,w,_,Z,t]);const ne=(0,r.useCallback)((e=>{const t=j.includes(e);if(!X){const o=t?[]:[e];return(0,p.speak)(t?K(e):G(e)),void B(o)}if(t){const t=j.filter((t=>t!==e));return(0,p.speak)(K(e)),void B(t)}const o=[...j,e].sort(((e,t)=>Number(t)-Number(e)));(0,p.speak)(G(e)),B(o)}),[j,X]);return(_||0!==y.length)&&(0,R.getSettingWithCoercion)("hasFilterableProducts",!1,O)?(n(!0),(0,r.createElement)(r.Fragment,null,z&&o,(0,r.createElement)("div",{className:c()("wc-block-rating-filter",`style-${e.displayStyle}`,{"is-loading":h})},"dropdown"===e.displayStyle?(0,r.createElement)(r.Fragment,null,(0,r.createElement)(F,{key:J,className:c()({"single-selection":!X,"is-loading":h}),style:{borderStyle:"none"},suggestions:y.filter((e=>!j.includes(e.value))).map((e=>e.value)),disabled:h,placeholder:(0,u.__)("Select Rating","woo-gutenberg-products-block"),onChange:e=>{!X&&e.length>1&&(e=[e[e.length-1]]);const t=[e=e.map((e=>{const t=y.find((t=>t.value===e));return t?t.value:e})),j].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));if(1===t.length)return ne(t[0]);const o=[j,e].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));1===o.length&&ne(o[0])},value:j,displayTransform:e=>{const t={value:e,label:(0,r.createElement)(b,{key:Number(e),rating:Number(e),ratedProductsCount:0})},o=y.find((t=>t.value===e))||t,{label:n,value:l}=o;return Object.assign({},n,{toLocaleLowerCase:()=>l,substring:(e,t)=>0===e&&1===t?n:""})},saveTransform:I,messages:{added:(0,u.__)("Rating filter added.","woo-gutenberg-products-block"),removed:(0,u.__)("Rating filter removed.","woo-gutenberg-products-block"),remove:(0,u.__)("Remove rating filter.","woo-gutenberg-products-block"),__experimentalInvalid:(0,u.__)("Invalid rating filter.","woo-gutenberg-products-block")}}),ee&&(0,r.createElement)(l.Z,{icon:g.Z,size:30})):(0,r.createElement)(P.CheckboxList,{className:"wc-block-rating-filter-list",options:y,checked:j,onChange:e=>{ne(e.toString())},isLoading:h,isDisabled:C})),(0,r.createElement)("div",{className:"wc-block-rating-filter__actions"},(j.length>0||t)&&!h&&(0,r.createElement)(A,{onClick:()=>{B([]),U([]),te([])},screenReaderLabel:(0,u.__)("Reset rating filter","woo-gutenberg-products-block")}),e.showFilterButton&&(0,r.createElement)(L,{className:"wc-block-rating-filter__button",isLoading:h,disabled:h||C,onClick:()=>te(j)})))):(n(!1),null)};o(1481);const U=(0,r.createElement)(d.Notice,{status:"warning",isDismissible:!1},(0,r.createElement)("p",null,(0,u.__)("Your store doesn't have any products with ratings yet. This filter option will display when a product receives a review.","woo-gutenberg-products-block"))),J=(0,d.withSpokenMessages)((({attributes:e,setAttributes:t})=>{const{className:o,displayStyle:n,showCounts:l,showFilterButton:s,selectType:a}=e,p=(0,i.useBlockProps)({className:c()("wc-block-rating-filter",o)});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(i.InspectorControls,{key:"inspector"},(0,r.createElement)(d.PanelBody,{title:(0,u.__)("Display Settings","woo-gutenberg-products-block")},(0,r.createElement)(d.ToggleControl,{label:(0,u.__)("Display product count","woo-gutenberg-products-block"),checked:l,onChange:()=>t({showCounts:!l})}),(0,r.createElement)(d.__experimentalToggleGroupControl,{label:(0,u.__)("Allow selecting multiple options?","woo-gutenberg-products-block"),value:a||"multiple",onChange:e=>t({selectType:e}),className:"wc-block-attribute-filter__multiple-toggle"},(0,r.createElement)(d.__experimentalToggleGroupControlOption,{value:"multiple",label:(0,u.__)("Multiple","woo-gutenberg-products-block")}),(0,r.createElement)(d.__experimentalToggleGroupControlOption,{value:"single",label:(0,u.__)("Single","woo-gutenberg-products-block")})),(0,r.createElement)(d.__experimentalToggleGroupControl,{label:(0,u.__)("Display Style","woo-gutenberg-products-block"),value:n,onChange:e=>t({displayStyle:e}),className:"wc-block-attribute-filter__display-toggle"},(0,r.createElement)(d.__experimentalToggleGroupControlOption,{value:"list",label:(0,u.__)("List","woo-gutenberg-products-block")}),(0,r.createElement)(d.__experimentalToggleGroupControlOption,{value:"dropdown",label:(0,u.__)("Dropdown","woo-gutenberg-products-block")})),(0,r.createElement)(d.ToggleControl,{label:(0,u.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:(0,u.__)("Products will update when the button is clicked.","woo-gutenberg-products-block"),checked:s,onChange:e=>t({showFilterButton:e})}))),(0,r.createElement)("div",{...p},(0,r.createElement)(d.Disabled,null,(0,r.createElement)(Z,{attributes:e,isEditor:!0,noRatingsNotice:U}))))})),$=JSON.parse('{"name":"woocommerce/rating-filter","version":"1.0.0","title":"Filter by Rating Controls","description":"Enable customers to filter the product grid by rating.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":true,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showCounts":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"showFilterButton":{"type":"boolean","default":false},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'),z=[{attributes:{...$.attributes,showCounts:{type:"boolean",default:!0}},save:({attributes:e})=>{const{className:t,showCounts:o}=e,n={"data-show-counts":o};return(0,r.createElement)("div",{...i.useBlockProps.save({className:c()("is-loading",t)}),...n},(0,r.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-rating-filter__placeholder"}))}}];(0,n.registerBlockType)($,{icon:{src:(0,r.createElement)(l.Z,{icon:s.Z,className:"wc-block-editor-components-block-icon"})},attributes:{...$.attributes},edit:J,save({attributes:e}){const{className:t}=e;return(0,r.createElement)("div",{...i.useBlockProps.save({className:c()("is-loading",t)})})},deprecated:z})},770:()=>{},994:()=>{},230:()=>{},8354:()=>{},1481:()=>{},2712:()=>{},9196:e=>{"use strict";e.exports=window.React},2819:e=>{"use strict";e.exports=window.lodash},5158:e=>{"use strict";e.exports=window.wp.a11y},4333:e=>{"use strict";e.exports=window.wp.compose},7180:e=>{"use strict";e.exports=window.wp.deprecated},5904:e=>{"use strict";e.exports=window.wp.dom},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},9630:e=>{"use strict";e.exports=window.wp.keycodes},444:e=>{"use strict";e.exports=window.wp.primitives},2560:e=>{"use strict";e.exports=window.wp.warning}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var l=o[e]={exports:{}};return t[e].call(l.exports,l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,o,n,l)=>{if(!o){var s=1/0;for(u=0;u<e.length;u++){for(var[o,n,l]=e[u],a=!0,c=0;c<o.length;c++)(!1&l||s>=l)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(a=!1,l<s&&(s=l));if(a){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,n,l]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=9568,(()=>{var e={9568:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,l,[s,a,c]=o,i=0;if(s.some((t=>0!==e[t]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(c)var u=c(r)}for(t&&t(o);i<s.length;i++)l=s[i],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},o=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[2869],(()=>r(9284)));n=r.O(n),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["rating-filter"]=n})();