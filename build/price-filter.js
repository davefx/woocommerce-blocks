(()=>{var e,t={4470:(e,t,r)=>{"use strict";r.r(t);var n=r(9307);const o=window.wp.blocks;var i=r(4184),c=r.n(i),l=r(1984),a=r(5032);const s=window.wp.blockEditor;var u=r(5736);const p=window.wc.wcSettings;var d;const m=(0,p.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),b=(m.pluginUrl,m.pluginUrl,m.buildPhase,null===(d=p.STORE_PAGES.shop)||void 0===d||d.permalink,p.STORE_PAGES.checkout.id,p.STORE_PAGES.checkout.permalink,p.STORE_PAGES.privacy.permalink,p.STORE_PAGES.privacy.title,p.STORE_PAGES.terms.permalink,p.STORE_PAGES.terms.title,p.STORE_PAGES.cart.id,p.STORE_PAGES.cart.permalink,p.STORE_PAGES.myaccount.permalink?p.STORE_PAGES.myaccount.permalink:(0,p.getSetting)("wpLoginUrl","/wp-login.php"),(0,p.getSetting)("localPickupEnabled",!1),(0,p.getSetting)("countries",{})),g=(0,p.getSetting)("countryData",{});Object.fromEntries(Object.keys(g).filter((e=>!0===g[e].allowBilling)).map((e=>[e,b[e]||""]))),Object.fromEntries(Object.keys(g).filter((e=>!0===g[e].allowBilling)).map((e=>[e,g[e].states||[]]))),Object.fromEntries(Object.keys(g).filter((e=>!0===g[e].allowShipping)).map((e=>[e,b[e]||""]))),Object.fromEntries(Object.keys(g).filter((e=>!0===g[e].allowShipping)).map((e=>[e,g[e].states||[]]))),Object.fromEntries(Object.keys(g).map((e=>[e,g[e].locale||[]])));var w=r(4333);r(7118);const _=(0,w.withInstanceId)((({className:e,headingLevel:t,onChange:r,heading:o,instanceId:i})=>{const c=`h${t}`;return(0,n.createElement)(c,{className:e},(0,n.createElement)("label",{className:"screen-reader-text",htmlFor:`block-title-${i}`},(0,u.__)("Block title","woo-gutenberg-products-block")),(0,n.createElement)(s.PlainText,{id:`block-title-${i}`,className:"wc-block-editor-components-title",value:o,onChange:r,style:{backgroundColor:"transparent"}}))}));var f=r(6755);const k=window.wp.components;function h(e,t){const r=(0,n.useRef)();return(0,n.useEffect)((()=>{r.current===e||t&&!t(e,r.current)||(r.current=e)}),[e,t]),r.current}const E=window.wc.wcBlocksData,y=window.wp.data;var v=r(9127),S=r.n(v);const C=(0,n.createContext)("page"),x=()=>(0,n.useContext)(C),N=(C.Provider,e=>{const t=x();e=e||t;const r=(0,y.useSelect)((t=>t(E.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:o}=(0,y.useDispatch)(E.QUERY_STATE_STORE_KEY);return[r,(0,n.useCallback)((t=>{o(e,t)}),[e,o])]}),F=(e,t,r)=>{const o=x();r=r||o;const i=(0,y.useSelect)((n=>n(E.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)),[r,e]),{setQueryValue:c}=(0,y.useDispatch)(E.QUERY_STATE_STORE_KEY);return[i,(0,n.useCallback)((t=>{c(r,e,t)}),[r,e,c])]};var O=r(4697);const T=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function R(e,t){return T(e)&&t in e}var P=r(172);function A(e){const t=(0,n.useRef)(e);return S()(e,t.current)||(t.current=e),t.current}const B=({queryAttribute:e,queryPrices:t,queryStock:r,queryRating:o,queryState:i,isEditor:c=!1})=>{let l=x();l=`${l}-collection-data`;const[a]=N(l),[s,u]=F("calculate_attribute_counts",[],l),[p,d]=F("calculate_price_range",null,l),[m,b]=F("calculate_stock_status_counts",null,l),[g,w]=F("calculate_rating_counts",null,l),_=A(e||{}),f=A(t),k=A(r),h=A(o);(0,n.useEffect)((()=>{"object"==typeof _&&Object.keys(_).length&&(s.find((e=>R(_,"taxonomy")&&e.taxonomy===_.taxonomy))||u([...s,_]))}),[_,s,u]),(0,n.useEffect)((()=>{p!==f&&void 0!==f&&d(f)}),[f,d,p]),(0,n.useEffect)((()=>{m!==k&&void 0!==k&&b(k)}),[k,b,m]),(0,n.useEffect)((()=>{g!==h&&void 0!==h&&w(h)}),[h,w,g]);const[v,S]=(0,n.useState)(c),[C]=(0,O.Nr)(v,200);v||S(!0);const T=(0,n.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=(0,P.DY)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(a)),[a]);return(e=>{const{namespace:t,resourceName:r,resourceValues:o=[],query:i={},shouldSelect:c=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const l=(0,n.useRef)({results:[],isLoading:!0}),a=A(i),s=A(o),u=(()=>{const[,e]=(0,n.useState)();return(0,n.useCallback)((t=>{e((()=>{throw t}))}),[])})(),p=(0,y.useSelect)((e=>{if(!c)return null;const n=e(E.COLLECTIONS_STORE_KEY),o=[t,r,a,s],i=n.getCollectionError(...o);if(i){if(!(i instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");u(i)}return{results:n.getCollection(...o),isLoading:!n.hasFinishedResolution("getCollection",o)}}),[t,r,s,a,c]);return null!==p&&(l.current=p),l.current})({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...i,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...T},shouldSelect:C})},U=window.wc.blocksComponents;r(2145);const L=(e,t,r,n=1,o=!1)=>{let[i,c]=e;const l=e=>Number.isFinite(e);return l(i)||(i=t||0),l(c)||(c=r||n),l(t)&&t>i&&(i=t),l(r)&&r<=i&&(i=r-n),l(t)&&t>=c&&(c=t+n),l(r)&&r<c&&(c=r),!o&&i>=c&&(i=c-n),o&&c<=i&&(c=i+n),[i,c]};r(994);const I=({className:e,isLoading:t,disabled:r,
/* translators: Submit button text for filters. */
label:o=(0,u.__)("Apply","woo-gutenberg-products-block"),onClick:i,screenReaderLabel:l=(0,u.__)("Apply filter","woo-gutenberg-products-block")})=>(0,n.createElement)("button",{type:"submit",className:c()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":t},e),disabled:r,onClick:i},(0,n.createElement)(U.Label,{label:o,screenReaderLabel:l})),j=({maxConstraint:e,minorUnit:t})=>({floatValue:r})=>void 0!==r&&r<=e/10**t&&r>0,M=({minConstraint:e,currentMaxValue:t,minorUnit:r})=>({floatValue:n})=>void 0!==n&&n>=e/10**r&&n<t/10**r;r(770);const q=({className:e,
/* translators: Reset button text for filters. */
label:t=(0,u.__)("Reset","woo-gutenberg-products-block"),onClick:r,screenReaderLabel:o=(0,u.__)("Reset filter","woo-gutenberg-products-block")})=>(0,n.createElement)("button",{className:c()("wc-block-components-filter-reset-button",e),onClick:r},(0,n.createElement)(U.Label,{label:t,screenReaderLabel:o})),G=({minPrice:e,maxPrice:t,minConstraint:r,maxConstraint:o,onChange:i,step:l,currency:a,showInputFields:s=!0,showFilterButton:p=!1,inlineInput:d=!0,isLoading:m=!1,isUpdating:b=!1,isEditor:g=!1,onSubmit:w=(()=>{})})=>{const _=(0,n.useRef)(null),f=(0,n.useRef)(null),k=l||10**a.minorUnit,[h,E]=(0,n.useState)(e),[y,v]=(0,n.useState)(t),S=(0,n.useRef)(null),[C,x]=(0,n.useState)(0);(0,n.useEffect)((()=>{E(e)}),[e]),(0,n.useEffect)((()=>{v(t)}),[t]),(0,n.useLayoutEffect)((()=>{var e;d&&S.current&&x(null===(e=S.current)||void 0===e?void 0:e.offsetWidth)}),[d,x]);const N=(0,n.useMemo)((()=>isFinite(r)&&isFinite(o)),[r,o]),F=(0,n.useMemo)((()=>isFinite(e)&&isFinite(t)&&N?{"--low":(e-r)/(o-r)*100+"%","--high":(t-r)/(o-r)*100+"%"}:{"--low":"0%","--high":"100%"}),[e,t,r,o,N]),R=(0,n.useCallback)((e=>{if(m||!N||!_.current||!f.current)return;const t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=_.current.offsetWidth,i=+_.current.value,c=f.current.offsetWidth,l=+f.current.value,a=n*(i/o),s=c*(l/o);Math.abs(r-a)>Math.abs(r-s)?(_.current.style.zIndex="20",f.current.style.zIndex="21"):(_.current.style.zIndex="21",f.current.style.zIndex="20")}),[m,o,N]),P=(0,n.useCallback)((n=>{const c=n.target.classList.contains("wc-block-price-filter__range-input--min"),l=+n.target.value,a=c?[Math.round(l/k)*k,t]:[e,Math.round(l/k)*k],s=L(a,r,o,k,c);i(s)}),[i,e,t,r,o,k]),A=(0,n.useCallback)((e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(h>=y){const e=L([0,y],null,null,k,t);return i([parseInt(e[0],10),parseInt(e[1],10)])}const r=L([h,y],null,null,k,t);i(r)}),[i,k,h,y]),B=(0,O.y1)(w,600),G=c()("wc-block-price-filter","wc-block-components-price-slider",s&&"wc-block-price-filter--has-input-fields",s&&"wc-block-components-price-slider--has-input-fields",p&&"wc-block-price-filter--has-filter-button",p&&"wc-block-components-price-slider--has-filter-button",!N&&"is-disabled",(d||C<=300)&&"wc-block-components-price-slider--is-input-inline"),W=T(_.current)?_.current.ownerDocument.activeElement:void 0,D=W&&W===_.current?k:1,V=W&&W===f.current?k:1,Q=String(h/10**a.minorUnit),Y=String(y/10**a.minorUnit),$=d&&C>300,K=(0,n.createElement)("div",{className:c()("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":m&&b}),onMouseMove:R,onFocus:R},N&&(0,n.createElement)("div",{"aria-hidden":s},(0,n.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:F}),(0,n.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":(0,u.__)("Filter products by minimum price","woo-gutenberg-products-block"),"aria-valuetext":Q,value:Number.isFinite(e)?e:r,onChange:P,step:D,min:r,max:o,ref:_,disabled:m&&!N,tabIndex:s?-1:0}),(0,n.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":(0,u.__)("Filter products by maximum price","woo-gutenberg-products-block"),"aria-valuetext":Y,value:Number.isFinite(t)?t:o,onChange:P,step:V,min:r,max:o,ref:f,disabled:m,tabIndex:s?-1:0}))),Z=e=>`wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,z={currency:a,decimalScale:0},J={...z,displayType:"input",allowNegative:!1,disabled:m||!N,onBlur:A};return(0,n.createElement)("div",{className:G,ref:S},(!$||!s)&&K,s&&(0,n.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},b?(0,n.createElement)("div",{className:"input-loading"}):(0,n.createElement)(U.FormattedMonetaryAmount,{...J,className:Z("min"),"aria-label":(0,u.__)("Filter products by minimum price","woo-gutenberg-products-block"),isAllowed:M({minConstraint:r,minorUnit:a.minorUnit,currentMaxValue:y}),onValueChange:e=>{e!==h&&E(e)},value:h}),$&&K,b?(0,n.createElement)("div",{className:"input-loading"}):(0,n.createElement)(U.FormattedMonetaryAmount,{...J,className:Z("max"),"aria-label":(0,u.__)("Filter products by maximum price","woo-gutenberg-products-block"),isAllowed:j({maxConstraint:o,minorUnit:a.minorUnit}),onValueChange:e=>{e!==y&&v(e)},value:y})),!s&&!b&&Number.isFinite(e)&&Number.isFinite(t)&&(0,n.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},(0,n.createElement)(U.FormattedMonetaryAmount,{...z,value:e}),(0,n.createElement)(U.FormattedMonetaryAmount,{...z,value:t})),(0,n.createElement)("div",{className:"wc-block-components-price-slider__actions"},(g||!b&&(e!==r||t!==o))&&(0,n.createElement)(q,{onClick:()=>{i([r,o]),B()},screenReaderLabel:(0,u.__)("Reset price filter","woo-gutenberg-products-block")}),p&&(0,n.createElement)(I,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:b,disabled:m||!N,onClick:w,screenReaderLabel:(0,u.__)("Apply price filter","woo-gutenberg-products-block")})))};r(7732);const W=({children:e})=>(0,n.createElement)("div",{className:"wc-block-filter-title-placeholder"},e),D=window.wc.priceFormat,V=window.wp.url,Q=e=>"boolean"==typeof e,Y=(0,p.getSettingWithCoercion)("isRenderingPhpTemplate",!1,Q);function $(e){return window?(0,V.getQueryArg)(window.location.href,e):null}function K(e){Y?((e=e.replace(/(?:query-(?:\d+-)?page=(\d+))|(?:page\/(\d+))/g,"")).endsWith("?")&&(e=e.slice(0,-1)),window.location.href=e):window.history.replaceState({},"",e)}const Z=e=>"string"==typeof e,z="ROUND_UP",J="ROUND_DOWN",X=(e,t,r)=>{const n=10*10**t;let o=null;const i=parseFloat(e);isNaN(i)||(r===z?o=Math.ceil(i/n)*n:r===J&&(o=Math.floor(i/n)*n));const c=h(o,Number.isFinite);return Number.isFinite(o)?o:c};r(7476);const H=(0,n.createContext)({});function ee(e,t){return Number(e)*10**t}const te=({attributes:e,isEditor:t=!1})=>{const r=(()=>{const{wrapper:e}=(0,n.useContext)(H);return t=>{e&&e.current&&(e.current.hidden=!t)}})(),o=(0,p.getSettingWithCoercion)("hasFilterableProducts",!1,Q),i=(0,p.getSettingWithCoercion)("isRenderingPhpTemplate",!1,Q),[c,l]=(0,n.useState)(!1),a=$("min_price"),s=$("max_price"),[u]=N(),{results:d,isLoading:m}=B({queryPrices:!0,queryState:u,isEditor:t}),b=(0,D.getCurrencyFromPriceResponse)(R(d,"price_range")?d.price_range:void 0),[g,w]=F("min_price"),[_,f]=F("max_price"),[k,E]=(0,n.useState)(ee(a,b.minorUnit)||null),[y,v]=(0,n.useState)(ee(s,b.minorUnit)||null),{minConstraint:S,maxConstraint:C}=(({minPrice:e,maxPrice:t,minorUnit:r})=>({minConstraint:X(e||"",r,J),maxConstraint:X(t||"",r,z)}))({minPrice:R(d,"price_range")&&R(d.price_range,"min_price")&&Z(d.price_range.min_price)?d.price_range.min_price:void 0,maxPrice:R(d,"price_range")&&R(d.price_range,"max_price")&&Z(d.price_range.max_price)?d.price_range.max_price:void 0,minorUnit:b.minorUnit});(0,n.useEffect)((()=>{c||(w(ee(a,b.minorUnit)),f(ee(s,b.minorUnit)),l(!0))}),[b.minorUnit,c,s,a,f,w]);const[x,T]=(0,n.useState)(m),P=(0,n.useCallback)(((e,t)=>{const r=t>=Number(C)?void 0:t,n=e<=Number(S)?void 0:e;if(window){const e=function(e,t){const r={};for(const[e,n]of Object.entries(t))n?r[e]=n.toString():delete r[e];const n=(0,V.removeQueryArgs)(e,...Object.keys(t));return(0,V.addQueryArgs)(n,r)}(window.location.href,{min_price:n/10**b.minorUnit,max_price:r/10**b.minorUnit});window.location.href!==e&&K(e)}w(n),f(r)}),[S,C,w,f,b.minorUnit]),A=(0,O.y1)(P,500),U=(0,n.useCallback)((t=>{T(!0),t[0]!==k&&E(t[0]),t[1]!==y&&v(t[1]),i&&c&&!e.showFilterButton&&A(t[0],t[1])}),[k,y,E,v,i,c,A,e.showFilterButton]);(0,n.useEffect)((()=>{e.showFilterButton||i||A(k,y)}),[k,y,e.showFilterButton,A,i]);const L=h(g),I=h(_),j=h(S),M=h(C);if((0,n.useEffect)((()=>{(!Number.isFinite(k)||g!==L&&g!==k||S!==j&&S!==k)&&E(Number.isFinite(g)?g:S),(!Number.isFinite(y)||_!==I&&_!==y||C!==M&&C!==y)&&v(Number.isFinite(_)?_:C)}),[k,y,g,_,S,C,j,M,L,I]),!o)return r(!1),null;if(!m&&(null===S||null===C||S===C))return r(!1),null;const q=`h${e.headingLevel}`;r(!0),!m&&x&&T(!1);const Y=(0,n.createElement)(q,{className:"wc-block-price-filter__title"},e.heading),te=m&&x?(0,n.createElement)(W,null,Y):Y;return(0,n.createElement)(n.Fragment,null,!t&&e.heading&&te,(0,n.createElement)("div",{className:"wc-block-price-slider"},(0,n.createElement)(G,{minConstraint:S,maxConstraint:C,minPrice:k,maxPrice:y,currency:b,showInputFields:e.showInputFields,inlineInput:e.inlineInput,showFilterButton:e.showFilterButton,onChange:U,onSubmit:()=>P(k,y),isLoading:m,isUpdating:x,isEditor:t})))};r(9262);const re=({clientId:e,setAttributes:t,filterType:r,attributes:i})=>{const{replaceBlock:c}=(0,y.useDispatch)("core/block-editor"),{heading:l,headingLevel:a}=i;if((0,y.useSelect)((t=>{const{getBlockParentsByBlockName:r}=t("core/block-editor");return r(e,"woocommerce/filter-wrapper").length>0}),[e])||!r)return null;const p=[(0,n.createElement)(k.Button,{key:"convert",onClick:()=>{const n=[(0,o.createBlock)(`woocommerce/${r}`,{...i,heading:""})];l&&""!==l&&n.unshift((0,o.createBlock)("core/heading",{content:l,level:null!=a?a:2})),c(e,(0,o.createBlock)("woocommerce/filter-wrapper",{heading:l,filterType:r},[...n])),t({heading:"",lock:{remove:!0}})},variant:"primary"},(0,u.__)("Upgrade block","woo-gutenberg-products-block"))];return(0,n.createElement)(s.Warning,{actions:p},(0,u.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woo-gutenberg-products-block"))},ne=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price Controls","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'),oe={heading:{type:"string",default:(0,u.__)("Filter by price","woo-gutenberg-products-block")}},ie=[{attributes:{...ne.attributes,...oe},save:({attributes:e})=>{const{className:t,showInputFields:r,showFilterButton:o,heading:i,headingLevel:l}=e,a={"data-showinputfields":r,"data-showfilterbutton":o,"data-heading":i,"data-heading-level":l};return(0,n.createElement)("div",{...s.useBlockProps.save({className:c()("is-loading",t)}),...a},(0,n.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}}];(0,o.registerBlockType)(ne,{icon:{src:(0,n.createElement)(l.Z,{icon:a.Z,className:"wc-block-editor-components-block-icon"})},attributes:{...ne.attributes,...oe},edit:function({attributes:e,setAttributes:t,clientId:r}){const{heading:o,headingLevel:i,showInputFields:c,inlineInput:d,showFilterButton:b}=e,g=(0,s.useBlockProps)();return(0,n.createElement)("div",{...g},0===m.productCount?(0,n.createElement)(k.Placeholder,{className:"wc-block-price-slider",icon:(0,n.createElement)(l.Z,{icon:a.Z}),label:(0,u.__)("Filter by Price","woo-gutenberg-products-block"),instructions:(0,u.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block")},(0,n.createElement)("p",null,(0,u.__)("To filter your products by price you first need to assign prices to your products.","woo-gutenberg-products-block")),(0,n.createElement)(k.Button,{className:"wc-block-price-slider__add-product-button",isSecondary:!0,href:(0,p.getAdminLink)("post-new.php?post_type=product"),target:"_top"},(0,u.__)("Add new product","woo-gutenberg-products-block")+" ",(0,n.createElement)(l.Z,{icon:f.Z})),(0,n.createElement)(k.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/",target:"_blank"},(0,u.__)("Learn more","woo-gutenberg-products-block"))):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(s.InspectorControls,{key:"inspector"},(0,n.createElement)(k.PanelBody,{title:(0,u.__)("Settings","woo-gutenberg-products-block")},(0,n.createElement)(k.__experimentalToggleGroupControl,{label:(0,u.__)("Price Range Selector","woo-gutenberg-products-block"),value:c?"editable":"text",onChange:e=>t({showInputFields:"editable"===e}),className:"wc-block-price-filter__price-range-toggle"},(0,n.createElement)(k.__experimentalToggleGroupControlOption,{value:"editable",label:(0,u.__)("Editable","woo-gutenberg-products-block")}),(0,n.createElement)(k.__experimentalToggleGroupControlOption,{value:"text",label:(0,u.__)("Text","woo-gutenberg-products-block")})),c&&(0,n.createElement)(k.ToggleControl,{label:(0,u.__)("Inline input fields","woo-gutenberg-products-block"),checked:d,onChange:()=>t({inlineInput:!d}),help:(0,u.__)("Show input fields inline with the slider.","woo-gutenberg-products-block")}),(0,n.createElement)(k.ToggleControl,{label:(0,u.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:(0,u.__)("Products will update when the button is clicked.","woo-gutenberg-products-block"),checked:b,onChange:()=>t({showFilterButton:!b})}))),(0,n.createElement)(re,{attributes:e,clientId:r,setAttributes:t,filterType:"price-filter"}),o&&(0,n.createElement)(_,{className:"wc-block-price-filter__title",headingLevel:i,heading:o,onChange:e=>t({heading:e})}),(0,n.createElement)(k.Disabled,null,(0,n.createElement)(te,{attributes:e,isEditor:!0}))))},save({attributes:e}){const{className:t}=e;return(0,n.createElement)("div",{...s.useBlockProps.save({className:c()("is-loading",t)})},(0,n.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))},deprecated:ie})},7732:()=>{},770:()=>{},994:()=>{},2145:()=>{},9262:()=>{},7476:()=>{},7118:()=>{},9196:e=>{"use strict";e.exports=window.React},4333:e=>{"use strict";e.exports=window.wp.compose},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},444:e=>{"use strict";e.exports=window.wp.primitives}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){for(var[r,o,i]=e[u],l=!0,a=0;a<r.length;a++)(!1&i||c>=i)&&Object.keys(n.O).every((e=>n.O[e](r[a])))?r.splice(a--,1):(l=!1,i<c&&(c=i));if(l){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=9750,(()=>{var e={9750:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[c,l,a]=r,s=0;if(c.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(a)var u=a(n)}for(t&&t(r);s<c.length;s++)i=c[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[2869],(()=>n(4470)));o=n.O(o),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["price-filter"]=o})();