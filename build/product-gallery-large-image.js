this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-gallery-large-image"]=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=518)}({0:function(e,t){e.exports=window.wp.element},17:function(e,t,n){"use strict";n.d(t,"p",(function(){return c})),n.d(t,"n",(function(){return i})),n.d(t,"m",(function(){return l})),n.d(t,"o",(function(){return u})),n.d(t,"k",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"h",(function(){return p})),n.d(t,"l",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return E})),n.d(t,"i",(function(){return j})),n.d(t,"j",(function(){return S})),n.d(t,"f",(function(){return y}));var r,o=n(3);const c=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=c.pluginUrl+"images/",l=c.pluginUrl+"build/",u=c.buildPhase,a=null===(r=o.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,s=o.STORE_PAGES.checkout.id,p=(o.STORE_PAGES.checkout.permalink,o.STORE_PAGES.privacy.permalink),d=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),f=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id),m=o.STORE_PAGES.cart.permalink,g=(o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),Object(o.getSetting)("localPickupEnabled",!1)),b=Object(o.getSetting)("countries",{}),O=Object(o.getSetting)("countryData",{}),w=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,b[e]||""]))),E=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,O[e].states||[]]))),j=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,b[e]||""]))),S=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,O[e].states||[]]))),y=Object.fromEntries(Object.keys(O).map((e=>[e,O[e].locale||[]])))},2:function(e,t){e.exports=window.wp.components},3:function(e,t){e.exports=window.wc.wcSettings},368:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n(85),c=n(0),i=n(17),l=n(5),u=n(2);var a=n(384);n(519),Object(o.a)()&&Object(r.registerBlockType)(a,{icon:()=>Object(c.createElement)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.22448 1.5L1.5 6.81504V11.7072L5.12953 9.06066C5.38061 8.87758 5.71858 8.86829 5.97934 9.0373L8.90601 10.9342L12.4772 7.46225C12.7683 7.17925 13.2317 7.17925 13.5228 7.46225L16.5 10.3568V2C16.5 1.72386 16.2761 1.5 16 1.5H6.22448ZM1.5 13.5636V16C1.5 16.2761 1.72386 16.5 2 16.5H16C16.2761 16.5 16.5 16.2761 16.5 16V12.4032L16.4772 12.4266L13 9.04603L9.52279 12.4266C9.27191 12.6706 8.88569 12.7086 8.59206 12.5183L5.59643 10.5766L1.5 13.5636ZM0 2C0 0.89543 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2Z",fill:"#1E1E1E"})),edit:()=>{const e=Object(l.useBlockProps)({className:"wc-block-editor-product-gallery_large-image"});return Object(c.createElement)("div",{...e},Object(c.createElement)(u.Disabled,null,Object(c.createElement)((()=>Object(c.createElement)("div",{className:"wc-block-editor-product-gallery-large-image"},Object(c.createElement)("img",{src:`${i.n}block-placeholders/product-image-gallery.svg`,alt:"Placeholder"}))),null)))},save:()=>Object(c.createElement)("div",{...l.useBlockProps.save()})})},384:function(e){e.exports=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery-large-image","version":"1.0.0","title":"Large Image","description":"Display the Large Image of a product.","category":"woocommerce","keywords":["WooCommerce"],"usesContext":["postId"],"textdomain":"woo-gutenberg-products-block","ancestor":["woocommerce/product-gallery"]}')},5:function(e,t){e.exports=window.wp.blockEditor},518:function(e,t,n){e.exports=n(368)},519:function(e,t){},7:function(e,t){e.exports=window.wp.blocks},85:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n(7),o=n(17);const c=(e,t)=>{if(o.o>2)return Object(r.registerBlockType)(e,t)},i=()=>o.o>2,l=()=>o.o>1}});