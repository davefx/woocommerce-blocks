this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-gallery"]=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=517)}({0:function(e,t){e.exports=window.wp.element},17:function(e,t,n){"use strict";n.d(t,"p",(function(){return c})),n.d(t,"n",(function(){return i})),n.d(t,"m",(function(){return l})),n.d(t,"o",(function(){return u})),n.d(t,"k",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"l",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return f})),n.d(t,"g",(function(){return m})),n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return j})),n.d(t,"i",(function(){return w})),n.d(t,"j",(function(){return h})),n.d(t,"f",(function(){return E}));var r,o=n(3);const c=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=c.pluginUrl+"images/",l=c.pluginUrl+"build/",u=c.buildPhase,a=null===(r=o.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,s=o.STORE_PAGES.checkout.id,d=(o.STORE_PAGES.checkout.permalink,o.STORE_PAGES.privacy.permalink),p=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),b=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id),f=o.STORE_PAGES.cart.permalink,m=(o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),Object(o.getSetting)("localPickupEnabled",!1)),g=Object(o.getSetting)("countries",{}),O=Object(o.getSetting)("countryData",{}),k=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,g[e]||""]))),j=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,O[e].states||[]]))),w=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,g[e]||""]))),h=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,O[e].states||[]]))),E=Object.fromEntries(Object.keys(O).map((e=>[e,O[e].locale||[]])))},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(7),o=n(6);const c=new Set,i=({blockName:e,blockMetadata:t,blockSettings:n,isVariationBlock:i=!1,variationName:l,isAvailableOnPostEditor:u})=>{let a="";Object(o.subscribe)((()=>{var c;const u=a,s=Object(o.select)("core/edit-site");var d;d=null==s?void 0:s.getEditedPostId(),a=null==d?void 0:d.split("//")[1];const p=u!==a,b=Boolean(a);if(!p||!b||!e)return;let f=Boolean(Object(r.getBlockType)(e));var m,g;f&&(null!==(c=a)&&void 0!==c&&c.includes("single-product")||null!=u&&u.includes("single-product"))&&(i&&l?Object(r.unregisterBlockVariation)(e,l):Object(r.unregisterBlockType)(e),f=!1),f||(i?Object(r.registerBlockVariation)(e,{...n,ancestor:null!==(m=a)&&void 0!==m&&m.includes("single-product")||null==n?void 0:n.ancestor}):Object(r.registerBlockType)(t,{...n,ancestor:null!==(g=a)&&void 0!==g&&g.includes("single-product")||null==n?void 0:n.ancestor}))}),"core/edit-site"),Object(o.subscribe)((()=>{!(Boolean(l)?c.has(l):c.has(e))&&u&&(i?(c.add(l),Object(r.registerBlockVariation)(e,n)):(c.add(e),Object(r.registerBlockType)(t,n)))}),"core/edit-post")}},3:function(e,t){e.exports=window.wc.wcSettings},330:function(e){e.exports=JSON.parse('{"name":"woocommerce/product-gallery","version":"1.0.0","title":"Product Gallery","description":"Showcase your products relevant images and media.","category":"woocommerce","supports":{"align":true,"multiple":false},"keywords":["WooCommerce"],"usesContext":["postId","postType","queryId"],"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},5:function(e,t){e.exports=window.wp.blockEditor},517:function(e,t,n){e.exports=n(579)},579:function(e,t,n){"use strict";n.r(t);var r=n(260),o=n(84),c=n(0),i=n(5);var l=n(330);Object(o.a)()&&Object(r.a)({blockName:l.name,blockMetadata:l,blockSettings:{icon:()=>Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},Object(c.createElement)("rect",{width:"24",height:"24",fill:"none",rx:"2"}),Object(c.createElement)("path",{fill:"#000",d:"M19 3H5c-.6 0-1 .4-1 1v7c0 .5.4 1 1 1h14c.5 0 1-.4 1-1V4c0-.6-.4-1-1-1ZM5.5 10.5v-.4l1.8-1.3 1.3.8c.3.2.7.2.9-.1L11 8.1l2.4 2.4H5.5Zm13 0h-2.9l-4-4c-.3-.3-.8-.3-1.1 0L8.9 8l-1.2-.8c-.3-.2-.6-.2-.9 0l-1.3 1V4.5h13v6Z"}),Object(c.createElement)("mask",{id:"a",fill:"#fff"},Object(c.createElement)("rect",{width:"6",height:"5.5",x:"4",y:"14.5",rx:"1"})),Object(c.createElement)("rect",{width:"6",height:"5.5",x:"4",y:"14.5",stroke:"#000",strokeWidth:"3",mask:"url(#a)",rx:"1"}),Object(c.createElement)("mask",{id:"b",fill:"#fff"},Object(c.createElement)("rect",{width:"6",height:"5.5",x:"11",y:"14.5",rx:"1"})),Object(c.createElement)("rect",{width:"6",height:"5.5",x:"11",y:"14.5",stroke:"#000",strokeWidth:"3",mask:"url(#b)",rx:"1"})),edit:()=>{const e=Object(i.useBlockProps)();return Object(c.createElement)("div",{...e},Object(c.createElement)(i.InnerBlocks,{allowedBlocks:["woocommerce/product-gallery-large-image"],templateLock:!1}))},save:()=>Object(c.createElement)("div",{...i.useBlockProps.save()},Object(c.createElement)(i.InnerBlocks.Content,null)),ancestor:["woocommerce/single-product"]},isAvailableOnPostEditor:!0})},6:function(e,t){e.exports=window.wp.data},7:function(e,t){e.exports=window.wp.blocks},84:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n(7),o=n(17);const c=(e,t)=>{if(o.o>2)return Object(r.registerBlockType)(e,t)},i=()=>o.o>2,l=()=>o.o>1}});