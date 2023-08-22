this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-search"]=function(e){function t(t){for(var o,a,n=t[0],s=t[1],i=t[2],b=0,d=[];b<n.length;b++)a=n[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);d.length;)d.shift()();return l.push.apply(l,i||[]),c()}function c(){for(var e,t=0;t<l.length;t++){for(var c=l[t],o=!0,n=1;n<c.length;n++){var s=c[n];0!==r[s]&&(o=!1)}o&&(l.splice(t--,1),e=a(a.s=c[0]))}return e}var o={},r={37:0},l=[];function a(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=o,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(c,o,function(t){return e[t]}.bind(null,o));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var n=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=n.push.bind(n);n.push=t,n=n.slice();for(var i=0;i<n.length;i++)t(n[i]);var u=s;return l.push([517,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},11:function(e,t){e.exports=window.wp.compose},2:function(e,t){e.exports=window.wp.components},3:function(e,t){e.exports=window.wc.wcSettings},308:function(e,t){},309:function(e,t){},5:function(e,t){e.exports=window.wp.blockEditor},517:function(e,t,c){e.exports=c(571)},571:function(e,t,c){"use strict";c.r(t);var o=c(0),r=c(5),l=c(7),a=c(1),n=c(76),s=c(606),i=c(3),u=c(92),b=c(2),d=c(8),p=(c(308),c(309),c(4)),w=c.n(p),h=e=>{let{attributes:{label:t,placeholder:c,formId:r,className:l,hasLabel:n,align:s}}=e;const u=w()("wc-block-product-search",s?"align"+s:"",l);return Object(o.createElement)("div",{className:u},Object(o.createElement)("form",{role:"search",method:"get",action:i.HOME_URL},Object(o.createElement)("label",{htmlFor:r,className:n?"wc-block-product-search__label":"wc-block-product-search__label screen-reader-text"},t),Object(o.createElement)("div",{className:"wc-block-product-search__fields"},Object(o.createElement)("input",{type:"search",id:r,className:"wc-block-product-search__field",placeholder:c,name:"s"}),Object(o.createElement)("input",{type:"hidden",name:"post_type",value:"product"}),Object(o.createElement)("button",{type:"submit",className:"wc-block-product-search__button","aria-label":Object(a.__)("Search","woo-gutenberg-products-block")},Object(o.createElement)("svg",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicon dashicons-arrow-right-alt2",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},Object(o.createElement)("path",{d:"M6 15l5-5-5-5 1-2 7 7-7 7z"}))))))},m=c(11),g=Object(m.withInstanceId)(e=>{let{attributes:{label:t,placeholder:c,formId:l,className:n,hasLabel:s,align:i},instanceId:u,setAttributes:d}=e;const p=w()("wc-block-product-search",i?"align"+i:"",n);return Object(o.useEffect)(()=>{l||d({formId:"wc-block-product-search-"+u})},[l,d,u]),Object(o.createElement)(o.Fragment,null,Object(o.createElement)(r.InspectorControls,{key:"inspector"},Object(o.createElement)(b.PanelBody,{title:Object(a.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(o.createElement)(b.ToggleControl,{label:Object(a.__)("Show search field label","woo-gutenberg-products-block"),checked:s,onChange:()=>d({hasLabel:!s})}))),Object(o.createElement)("div",{className:p},!!s&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)("label",{className:"screen-reader-text",htmlFor:"wc-block-product-search__label"},Object(a.__)("Search Label","woo-gutenberg-products-block")),Object(o.createElement)(r.PlainText,{className:"wc-block-product-search__label",id:"wc-block-product-search__label",value:t,onChange:e=>d({label:e}),style:{backgroundColor:"transparent"}})),Object(o.createElement)("div",{className:"wc-block-product-search__fields"},Object(o.createElement)(b.TextControl,{className:"wc-block-product-search__field input-control",value:c,placeholder:Object(a.__)("Enter search placeholder text","woo-gutenberg-products-block"),onChange:e=>d({placeholder:e})}),Object(o.createElement)("button",{type:"submit",className:"wc-block-product-search__button","aria-label":Object(a.__)("Search","woo-gutenberg-products-block"),onClick:e=>e.preventDefault(),tabIndex:-1},Object(o.createElement)("svg",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicon dashicons-arrow-right-alt2",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},Object(o.createElement)("path",{d:"M6 15l5-5-5-5 1-2 7 7-7 7z"}))))))});const f=Object(i.getSettingWithCoercion)("isBlockVariationAvailable",!1,u.a),_={hasLabel:{type:"boolean",default:!0},label:{type:"string",default:Object(a.__)("Search","woo-gutenberg-products-block")},placeholder:{type:"string",default:Object(a.__)("Search products…","woo-gutenberg-products-block")},formId:{type:"string",default:""}},k={label:_.label.default,buttonText:_.label.default,placeholder:_.placeholder.default,query:{post_type:"product"}};Object(d.registerBlockType)("woocommerce/product-search",{title:Object(a.__)("Product Search","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(n.a,{icon:s.a,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[Object(a.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(a.__)("A search box to allow customers to search for products by keyword.","woo-gutenberg-products-block"),supports:{align:["wide","full"],inserter:!f},attributes:_,transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:c}=e;return"woocommerce_product_search"===t&&!(null==c||!c.raw)},transform:e=>{let{instance:t}=e;return Object(d.createBlock)("woocommerce/product-search",{label:t.raw.title||k.label})}}]},deprecated:[{attributes:_,save:e=>Object(o.createElement)("div",null,Object(o.createElement)(h,e))}],edit:f?e=>{let{clientId:t}=e;const{replaceBlocks:c}=Object(l.useDispatch)(r.store),n=Object(l.useSelect)(e=>e("core/block-editor").getBlockAttributes(t),[t]),s=[Object(o.createElement)(b.Button,{key:"update",onClick:()=>{c(t,Object(d.createBlock)("core/search",{label:(null==n?void 0:n.label)||k.label,buttonText:k.buttonText,placeholder:(null==n?void 0:n.placeholder)||k.placeholder,query:k.query}))},variant:"primary"},Object(a.__)("Upgrade Block","woo-gutenberg-products-block"))];return Object(o.createElement)(r.Warning,{actions:s,className:"wc-block-components-actions"},Object(a.__)("This version of the Product Search block is outdated. Upgrade to continue using.","woo-gutenberg-products-block"))}:g,save:()=>null}),f&&Object(d.registerBlockVariation)("core/search",{name:"woocommerce/product-search",title:Object(a.__)("Product Search","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(n.a,{icon:s.a,className:"wc-block-editor-components-block-icon"})},isActive:(e,t)=>{var c;return(null===(c=e.query)||void 0===c?void 0:c.post_type)===t.query.post_type},category:"woocommerce",keywords:[Object(a.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(a.__)("A search box to allow customers to search for products by keyword.","woo-gutenberg-products-block"),attributes:k})},7:function(e,t){e.exports=window.wp.data},8:function(e,t){e.exports=window.wp.blocks},92:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));const o=e=>"boolean"==typeof e}});