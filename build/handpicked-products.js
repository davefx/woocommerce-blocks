(()=>{var e,t={4272:(e,t,r)=>{"use strict";r.r(t);var l=r(9196);const n=window.wp.blocks,c=window.wc.wcSettings;var o=r(1984),a=r(7682);r(525);const i=JSON.parse('{"name":"woocommerce/handpicked-products","title":"Hand-picked Products","category":"woocommerce","keywords":["Handpicked Products","WooCommerce"],"description":"Display a selection of hand-picked products in a grid.","supports":{"align":["wide","full"],"html":false},"attributes":{"align":{"type":"string"},"columns":{"type":"number","default":3},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","image":true},"title":{"type":"boolean","title":true},"price":{"type":"boolean","price":true},"rating":{"type":"boolean","rating":true},"button":{"type":"boolean","button":true}}},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"date"},"products":{"type":"array","default":[]},"alignButtons":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'),s=window.wp.blockEditor,d=window.wp.components;var u=r(9307),m=r(5736);const E=({onChange:e,settings:t})=>{const{image:r,button:n,price:c,rating:o,title:a}=t,i=!1!==r;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(d.ToggleControl,{label:(0,m.__)("Product image","woo-gutenberg-products-block"),checked:i,onChange:()=>e({...t,image:!i})}),(0,l.createElement)(d.ToggleControl,{label:(0,m.__)("Product title","woo-gutenberg-products-block"),checked:a,onChange:()=>e({...t,title:!a})}),(0,l.createElement)(d.ToggleControl,{label:(0,m.__)("Product price","woo-gutenberg-products-block"),checked:c,onChange:()=>e({...t,price:!c})}),(0,l.createElement)(d.ToggleControl,{label:(0,m.__)("Product rating","woo-gutenberg-products-block"),checked:o,onChange:()=>e({...t,rating:!o})}),(0,l.createElement)(d.ToggleControl,{label:(0,m.__)("Add to Cart button","woo-gutenberg-products-block"),checked:n,onChange:()=>e({...t,button:!n})}))},g=({value:e,setAttributes:t})=>(0,l.createElement)(d.SelectControl,{label:(0,m.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:(0,m.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:(0,m.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:(0,m.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:(0,m.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:(0,m.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:(0,m.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:(0,m.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:e=>t({orderby:e})});var h=r(5430),p=r(4184),b=r.n(p),w=r(4333);const _={clear:(0,m.__)("Clear all selected items","woo-gutenberg-products-block"),noItems:(0,m.__)("No items found.","woo-gutenberg-products-block"),
/* Translators: %s search term */
noResults:(0,m.__)("No results for %s","woo-gutenberg-products-block"),search:(0,m.__)("Search for items","woo-gutenberg-products-block"),selected:e=>(0,m.sprintf)(/* translators: Number of items selected from list. */
(0,m._n)("%d item selected","%d items selected",e,"woo-gutenberg-products-block"),e),updated:(0,m.__)("Search results updated.","woo-gutenberg-products-block")},f=(e,t=e)=>{const r=e.reduce(((e,t)=>{const r=t.parent||0;return e[r]||(e[r]=[]),e[r].push(t),e}),{}),l=("id",t.reduce(((e,t)=>(e[String(t.id)]=t,e)),{}));const n=["0"],c=(e={})=>e.parent?[...c(l[e.parent]),e.name]:e.name?[e.name]:[],o=e=>e.map((e=>{const t=r[e.id];return n.push(""+e.id),{...e,breadcrumbs:c(l[e.parent]),children:t&&t.length?o(t):[]}})),a=o(r[0]||[]);return Object.entries(r).forEach((([e,t])=>{n.includes(e)||a.push(...o(t||[]))})),a},y=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map(((e,t)=>r.test(e)?(0,l.createElement)("strong",{key:t},e):(0,l.createElement)(u.Fragment,{key:t},e)))};function k(e,t,r){const l=new Set(t.map((e=>e[r])));return e.filter((e=>!l.has(e[r])))}const x=window.wp.htmlEntities,v=({label:e})=>(0,l.createElement)("span",{className:"woocommerce-search-list__item-count"},e),S=e=>{const{item:t,search:r}=e,n=t.breadcrumbs&&t.breadcrumbs.length;return(0,l.createElement)("span",{className:"woocommerce-search-list__item-label"},n?(0,l.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(c=t.breadcrumbs).length?c.slice(0,1).toString():2===c.length?c.slice(0,1).toString()+" › "+c.slice(-1).toString():c.slice(0,1).toString()+" … "+c.slice(-1).toString()):null,(0,l.createElement)("span",{className:"woocommerce-search-list__item-name"},y((0,x.decodeEntities)(t.name),r)));var c},C=({countLabel:e,className:t,depth:r=0,controlId:n="",item:c,isSelected:o,isSingle:a,onSelect:i,search:s="",selected:m,useExpandedPanelId:E,...g})=>{var h,p;const[w,_]=E,f=null!=e&&void 0!==c.count&&null!==c.count,C=!(null===(h=c.breadcrumbs)||void 0===h||!h.length),P=!(null===(p=c.children)||void 0===p||!p.length),O=w===c.id,N=b()(["woocommerce-search-list__item",`depth-${r}`,t],{"has-breadcrumbs":C,"has-children":P,"has-count":f,"is-expanded":O,"is-radio-button":a}),I=g.name||`search-list-item-${n}`,T=`${I}-${c.id}`,A=(0,u.useCallback)((()=>{_(O?-1:Number(c.id))}),[O,c.id,_]);return P?(0,l.createElement)("div",{className:N,onClick:A,onKeyDown:e=>"Enter"===e.key||" "===e.key?A():null,role:"treeitem",tabIndex:0},a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{type:"radio",id:T,name:I,value:c.value,onChange:i(c),onClick:e=>e.stopPropagation(),checked:o,className:"woocommerce-search-list__item-input",...g}),(0,l.createElement)(S,{item:c,search:s}),f?(0,l.createElement)(v,{label:e||c.count}):null):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(d.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:o,...!o&&c.children.some((e=>m.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:y((0,x.decodeEntities)(c.name),s),onChange:()=>{o?i(k(m,c.children,"id"))():i(function(e,t,r){const l=k(t,e,"id");return[...e,...l]}(m,c.children))()},onClick:e=>e.stopPropagation()}),f?(0,l.createElement)(v,{label:e||c.count}):null)):(0,l.createElement)("label",{htmlFor:T,className:N},a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{...g,type:"radio",id:T,name:I,value:c.value,onChange:i(c),checked:o,className:"woocommerce-search-list__item-input"}),(0,l.createElement)(S,{item:c,search:s})):(0,l.createElement)(d.CheckboxControl,{...g,id:T,name:I,className:"woocommerce-search-list__item-input",value:(0,x.decodeEntities)(c.value),label:y((0,x.decodeEntities)(c.name),s),onChange:i(c),checked:o}),f?(0,l.createElement)(v,{label:e||c.count}):null)};var P=r(906);r(5932);const O=({id:e,label:t,popoverContents:r,remove:n,screenReaderLabel:c,className:a=""})=>{const[i,s]=(0,u.useState)(!1),E=(0,w.useInstanceId)(O);if(c=c||t,!t)return null;t=(0,x.decodeEntities)(t);const g=b()("woocommerce-tag",a,{"has-remove":!!n}),h=`woocommerce-tag__label-${E}`,p=(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",{className:"screen-reader-text"},c),(0,l.createElement)("span",{"aria-hidden":"true"},t));return(0,l.createElement)("span",{className:g},r?(0,l.createElement)(d.Button,{className:"woocommerce-tag__text",id:h,onClick:()=>s(!0)},p):(0,l.createElement)("span",{className:"woocommerce-tag__text",id:h},p),r&&i&&(0,l.createElement)(d.Popover,{onClose:()=>s(!1)},r),n&&(0,l.createElement)(d.Button,{className:"woocommerce-tag__remove",onClick:n(e),label:(0,m.sprintf)(
// Translators: %s label.
(0,m.__)("Remove %s","woo-gutenberg-products-block"),t),"aria-describedby":h},(0,l.createElement)(o.Z,{icon:P.Z,size:20,className:"clear-icon"})))},N=O;r(8462);const I=e=>(0,l.createElement)(C,{...e}),T=e=>{const{list:t,selected:r,renderItem:n,depth:c=0,onSelect:o,instanceId:a,isSingle:i,search:s,useExpandedPanelId:d}=e,[m]=d;return t?(0,l.createElement)(u.Fragment,null,t.map((t=>{var E,g;const h=null!==(E=t.children)&&void 0!==E&&E.length&&!i?t.children.every((({id:e})=>r.find((t=>t.id===e)))):!!r.find((({id:e})=>e===t.id)),p=(null===(g=t.children)||void 0===g?void 0:g.length)&&m===t.id;return(0,l.createElement)(u.Fragment,{key:t.id},(0,l.createElement)("li",null,n({item:t,isSelected:h,onSelect:o,isSingle:i,selected:r,search:s,depth:c,useExpandedPanelId:d,controlId:a})),p?(0,l.createElement)(T,{...e,list:t.children,depth:c+1}):null)}))):null},A=({isLoading:e,isSingle:t,selected:r,messages:n,onChange:c,onRemove:o})=>{if(e||t||!r)return null;const a=r.length;return(0,l.createElement)("div",{className:"woocommerce-search-list__selected"},(0,l.createElement)("div",{className:"woocommerce-search-list__selected-header"},(0,l.createElement)("strong",null,n.selected(a)),a>0?(0,l.createElement)(d.Button,{isLink:!0,isDestructive:!0,onClick:()=>c([]),"aria-label":n.clear},(0,m.__)("Clear all","woo-gutenberg-products-block")):null),a>0?(0,l.createElement)("ul",null,r.map(((e,t)=>(0,l.createElement)("li",{key:t},(0,l.createElement)(N,{label:e.name,id:e.id,remove:o}))))):null)},B=({filteredList:e,search:t,onSelect:r,instanceId:n,useExpandedPanelId:c,...a})=>{const{messages:i,renderItem:s,selected:d,isSingle:u}=a,E=s||I;return 0===e.length?(0,l.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},(0,l.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},(0,l.createElement)(o.Z,{icon:h.Z})),(0,l.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?(0,m.sprintf)(i.noResults,t):i.noItems)):(0,l.createElement)("ul",{className:"woocommerce-search-list__list"},(0,l.createElement)(T,{useExpandedPanelId:c,list:e,selected:d,renderItem:E,onSelect:r,instanceId:n,isSingle:u,search:t}))},R=e=>{const{className:t="",isCompact:r,isHierarchical:n,isLoading:c,isSingle:o,list:a,messages:i=_,onChange:s,onSearch:E,selected:g,type:h="text",debouncedSpeak:p}=e,[y,k]=(0,u.useState)(""),x=(0,u.useState)(-1),v=(0,w.useInstanceId)(R),S=(0,u.useMemo)((()=>({..._,...i})),[i]),C=(0,u.useMemo)((()=>((e,t,r)=>{if(!t)return r?f(e):e;const l=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map((e=>!!l.test(e.name)&&e)).filter(Boolean);return r?f(n,e):n})(a,y,n)),[a,y,n]);(0,u.useEffect)((()=>{p&&p(S.updated)}),[p,S]),(0,u.useEffect)((()=>{"function"==typeof E&&E(y)}),[y,E]);const P=(0,u.useCallback)((e=>()=>{o&&s([]);const t=g.findIndex((({id:t})=>t===e));s([...g.slice(0,t),...g.slice(t+1)])}),[o,g,s]),O=(0,u.useCallback)((e=>()=>{Array.isArray(e)?s(e):-1===g.findIndex((({id:t})=>t===e.id))?s(o?[e]:[...g,e]):P(e.id)()}),[o,P,s,g]),N=(0,u.useCallback)((e=>{const[t]=g.filter((t=>!e.find((e=>t.id===e.id))));P(t.id)()}),[P,g]);return(0,l.createElement)("div",{className:b()("woocommerce-search-list",t,{"is-compact":r,"is-loading":c,"is-token":"token"===h})},"text"===h&&(0,l.createElement)(A,{...e,onRemove:P,messages:S}),(0,l.createElement)("div",{className:"woocommerce-search-list__search"},"text"===h?(0,l.createElement)(d.TextControl,{label:S.search,type:"search",value:y,onChange:e=>k(e)}):(0,l.createElement)(d.FormTokenField,{disabled:c,label:S.search,onChange:N,onInputChange:e=>k(e),suggestions:[],__experimentalValidateInput:()=>!1,value:c?[(0,m.__)("Loading…","woo-gutenberg-products-block")]:g.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),c?(0,l.createElement)("div",{className:"woocommerce-search-list__list"},(0,l.createElement)(d.Spinner,null)):(0,l.createElement)(B,{...e,search:y,filteredList:C,messages:S,onSelect:O,instanceId:v,useExpandedPanelId:x}))};var j,L,G,$,F,M,H,Z,D,V;(0,d.withSpokenMessages)(R);const U=(0,c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),q=(U.pluginUrl,U.pluginUrl,U.buildPhase,null===(j=c.STORE_PAGES.shop)||void 0===j||j.permalink,null===(L=c.STORE_PAGES.checkout)||void 0===L||L.id,null===(G=c.STORE_PAGES.checkout)||void 0===G||G.permalink,null===($=c.STORE_PAGES.privacy)||void 0===$||$.permalink,null===(F=c.STORE_PAGES.privacy)||void 0===F||F.title,null===(M=c.STORE_PAGES.terms)||void 0===M||M.permalink,null===(H=c.STORE_PAGES.terms)||void 0===H||H.title,null===(Z=c.STORE_PAGES.cart)||void 0===Z||Z.id,null===(D=c.STORE_PAGES.cart)||void 0===D||D.permalink,null!==(V=c.STORE_PAGES.myaccount)&&void 0!==V&&V.permalink?c.STORE_PAGES.myaccount.permalink:(0,c.getSetting)("wpLoginUrl","/wp-login.php"),(0,c.getSetting)("localPickupEnabled",!1),(0,c.getSetting)("countries",{})),J=(0,c.getSetting)("countryData",{}),W=(Object.fromEntries(Object.keys(J).filter((e=>!0===J[e].allowBilling)).map((e=>[e,q[e]||""]))),Object.fromEntries(Object.keys(J).filter((e=>!0===J[e].allowBilling)).map((e=>[e,J[e].states||[]]))),Object.fromEntries(Object.keys(J).filter((e=>!0===J[e].allowShipping)).map((e=>[e,q[e]||""]))),Object.fromEntries(Object.keys(J).filter((e=>!0===J[e].allowShipping)).map((e=>[e,J[e].states||[]]))),Object.fromEntries(Object.keys(J).map((e=>[e,J[e].locale||[]]))),window.wp.url),Q=window.wp.apiFetch;var z=r.n(Q);const K=({selected:e=[],search:t="",queryArgs:r={}})=>{const l=(({selected:e=[],search:t="",queryArgs:r={}})=>{const l=U.productCount>100,n={per_page:l?100:0,catalog_visibility:"any",search:t,orderby:"title",order:"asc"},c=[(0,W.addQueryArgs)("/wc/store/v1/products",{...n,...r})];return l&&e.length&&c.push((0,W.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:e,per_page:0})),c})({selected:e,search:t,queryArgs:r});return Promise.all(l.map((e=>z()({path:e})))).then((e=>{const t=((e,t)=>{const r=new Map;return e.filter((e=>{const l=t(e);return!r.has(l)&&(r.set(l,e),!0)}))})(e.flat(),(e=>e.id));return t.map((e=>({...e,parent:0})))})).catch((e=>{throw e}))};var Y=r(4697);const X=window.wp.escapeHtml,ee=({error:e})=>(0,l.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?(0,l.createElement)("span",null,(0,m.__)("The following error was returned","woo-gutenberg-products-block"),(0,l.createElement)("br",null),(0,l.createElement)("code",null,(0,X.escapeHTML)(e))):"api"===t?(0,l.createElement)("span",null,(0,m.__)("The following error was returned from the API","woo-gutenberg-products-block"),(0,l.createElement)("br",null),(0,l.createElement)("code",null,(0,X.escapeHTML)(e))):e:(0,m.__)("An error has prevented the block from being updated.","woo-gutenberg-products-block"))(e)),te=({error:e,onChange:t,onSearch:r,selected:n,products:c,isLoading:o,isCompact:a})=>{const i={clear:(0,m.__)("Clear all products","woo-gutenberg-products-block"),list:(0,m.__)("Products","woo-gutenberg-products-block"),noItems:(0,m.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:(0,m.__)("Search for products to display","woo-gutenberg-products-block"),selected:e=>(0,m.sprintf)(/* translators: %d is the number of selected products. */
(0,m._n)("%d product selected","%d products selected",e,"woo-gutenberg-products-block"),e),updated:(0,m.__)("Product search results updated.","woo-gutenberg-products-block")};return e?(0,l.createElement)(ee,{error:e}):(0,l.createElement)(R,{className:"woocommerce-products",list:c.map((e=>{const t=e.sku?" ("+e.sku+")":"";return{...e,name:`${(0,x.decodeEntities)(e.name)}${t}`}})),isCompact:a,isLoading:o,selected:c.filter((({id:e})=>n.includes(e))),onSearch:r,onChange:t,messages:i})};te.defaultProps={selected:[],products:[],isCompact:!1,isLoading:!0};const re=(oe=te,({selected:e,...t})=>{const[r,n]=(0,u.useState)(!0),[c,o]=(0,u.useState)(null),[a,i]=(0,u.useState)([]),s=U.productCount>100,d=async e=>{const t=await(async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}})(e);o(t),n(!1)},m=(0,u.useRef)(e);(0,u.useEffect)((()=>{K({selected:m.current}).then((e=>{i(e),n(!1)})).catch(d)}),[m]);const E=(0,Y.y1)((t=>{K({selected:e,search:t}).then((e=>{i(e),n(!1)})).catch(d)}),400),g=(0,u.useCallback)((e=>{n(!0),E(e)}),[n,E]);return(0,l.createElement)(oe,{...t,selected:e,error:c,products:a,isLoading:r,onSearch:s?g:null})}),le=e=>{const{attributes:t,setAttributes:r}=e,{columns:n,contentVisibility:o,orderby:a,alignButtons:i}=t;return(0,l.createElement)(s.InspectorControls,{key:"inspector"},(0,l.createElement)(d.PanelBody,{title:(0,m.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},(0,l.createElement)(d.RangeControl,{label:(0,m.__)("Columns","woo-gutenberg-products-block"),value:n,onChange:e=>r({columns:e}),min:(0,c.getSetting)("minColumns",1),max:(0,c.getSetting)("maxColumns",6)}),(0,l.createElement)(d.ToggleControl,{label:(0,m.__)("Align Buttons","woo-gutenberg-products-block"),help:i?(0,m.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):(0,m.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:i,onChange:()=>r({alignButtons:!i})})),(0,l.createElement)(d.PanelBody,{title:(0,m.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},(0,l.createElement)(E,{settings:o,onChange:e=>r({contentVisibility:e})})),(0,l.createElement)(d.PanelBody,{title:(0,m.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},(0,l.createElement)(g,{setAttributes:r,value:a})),(0,l.createElement)(d.PanelBody,{title:(0,m.__)("Products","woo-gutenberg-products-block"),initialOpen:!1},(0,l.createElement)(re,{selected:t.products,onChange:(e=[])=>{const t=e.map((({id:e})=>e));r({products:t})},isCompact:!0})))},ne=e=>{const{attributes:t,setAttributes:r,debouncedSpeak:n,isEditing:c,setIsEditing:i}=e;return(0,l.createElement)(d.Placeholder,{icon:(0,l.createElement)(o.Z,{icon:a.Z}),label:(0,m.__)("Hand-picked Products","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-handpicked-products"},(0,m.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),(0,l.createElement)("div",{className:"wc-block-handpicked-products__selection"},(0,l.createElement)(re,{selected:t.products,onChange:(e=[])=>{const t=e.map((({id:e})=>e));r({products:t})}}),(0,l.createElement)(d.Button,{isPrimary:!0,onClick:()=>{i(!c),n((0,m.__)("Now displaying a preview of the Hand-picked Products block.","woo-gutenberg-products-block"))}},(0,m.__)("Done","woo-gutenberg-products-block"))))},ce=window.wp.serverSideRender;var oe,ae=r.n(ce);const ie=(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},(0,l.createElement)("title",null,"Grid Block Preview"),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"})),se=e=>{const{attributes:t,name:r}=e;return t.isPreview?ie:(0,l.createElement)(ae(),{block:r,attributes:t})},de=(0,d.withSpokenMessages)((e=>{const t=(0,s.useBlockProps)(),{attributes:{products:r}}=e,[n,c]=(0,u.useState)(!r.length);return(0,l.createElement)("div",{...t},(0,l.createElement)(s.BlockControls,null,(0,l.createElement)(d.ToolbarGroup,{controls:[{icon:"edit",title:(0,m.__)("Edit selected products","woo-gutenberg-products-block"),onClick:()=>c(!n),isActive:n}]})),(0,l.createElement)(le,{...e}),n?(0,l.createElement)(ne,{isEditing:n,setIsEditing:c,...e}):(0,l.createElement)(d.Disabled,null,(0,l.createElement)(se,{...e})))}));(0,n.registerBlockType)(i,{icon:{src:(0,l.createElement)(o.Z,{icon:a.Z,className:"wc-block-editor-components-block-icon"})},attributes:{...i.attributes,columns:{type:"number",default:(0,c.getSetting)("defaultColumns",3)}},edit:de,save:()=>null})},525:()=>{},8462:()=>{},5932:()=>{},9196:e=>{"use strict";e.exports=window.React},4333:e=>{"use strict";e.exports=window.wp.compose},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},444:e=>{"use strict";e.exports=window.wp.primitives}},r={};function l(e){var n=r[e];if(void 0!==n)return n.exports;var c=r[e]={exports:{}};return t[e].call(c.exports,c,c.exports,l),c.exports}l.m=t,e=[],l.O=(t,r,n,c)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,n,c]=e[d],a=!0,i=0;i<r.length;i++)(!1&c||o>=c)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(a=!1,c<o&&(o=c));if(a){e.splice(d--,1);var s=n();void 0!==s&&(t=s)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[r,n,c]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.j=1008,(()=>{var e={1008:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var n,c,[o,a,i]=r,s=0;if(o.some((t=>0!==e[t]))){for(n in a)l.o(a,n)&&(l.m[n]=a[n]);if(i)var d=i(l)}for(t&&t(r);s<o.length;s++)c=o[s],l.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return l.O(d)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=l.O(void 0,[2869],(()=>l(4272)));n=l.O(n),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["handpicked-products"]=n})();