(()=>{"use strict";var e,o={2797:(e,o,t)=>{t.r(o);var r=t(9196);const l=window.wp.blocks;var n=t(1984),i=t(3378);const c=window.wc.wcSettings;var s,a,p,u,d,m,v,w,k,b;const f=(0,c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),S=(f.pluginUrl,f.pluginUrl,f.buildPhase),g=(null===(s=c.STORE_PAGES.shop)||void 0===s||s.permalink,null===(a=c.STORE_PAGES.checkout)||void 0===a||a.id,null===(p=c.STORE_PAGES.checkout)||void 0===p||p.permalink,null===(u=c.STORE_PAGES.privacy)||void 0===u||u.permalink,null===(d=c.STORE_PAGES.privacy)||void 0===d||d.title,null===(m=c.STORE_PAGES.terms)||void 0===m||m.permalink,null===(v=c.STORE_PAGES.terms)||void 0===v||v.title,null===(w=c.STORE_PAGES.cart)||void 0===w||w.id,null===(k=c.STORE_PAGES.cart)||void 0===k||k.permalink,null!==(b=c.STORE_PAGES.myaccount)&&void 0!==b&&b.permalink?c.STORE_PAGES.myaccount.permalink:(0,c.getSetting)("wpLoginUrl","/wp-login.php"),(0,c.getSetting)("localPickupEnabled",!1),(0,c.getSetting)("countries",{})),O=(0,c.getSetting)("countryData",{}),E=(Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,g[e]||""]))),Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,O[e].states||[]]))),Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,g[e]||""]))),Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,O[e].states||[]]))),Object.fromEntries(Object.keys(O).map((e=>[e,O[e].locale||[]]))),JSON.parse('{"name":"woocommerce/collection-filters","version":"1.0.0","title":"Collection Filters","description":"A block that adds product filters to the product collection.","category":"woocommerce","keywords":["WooCommerce","Filters"],"textdomain":"woo-gutenberg-products-block","supports":{"html":false,"reusable":false},"usesContext":["query"],"ancestor":["woocommerce/product-collection"],"apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')),h=window.wp.blockEditor;S>2&&(0,l.registerBlockType)(E,{icon:{src:(0,r.createElement)(n.Z,{icon:i.Z,className:"wc-block-editor-components-block-icon"})},edit:()=>{const e=(0,h.useBlockProps)(),o=(0,h.useInnerBlocksProps)(e);return(0,r.createElement)("nav",{...o})},save:function(){const e=h.useBlockProps.save(),o=h.useInnerBlocksProps.save(e);return(0,r.createElement)("nav",{...o})}})},9196:e=>{e.exports=window.React},9307:e=>{e.exports=window.wp.element},444:e=>{e.exports=window.wp.primitives}},t={};function r(e){var l=t[e];if(void 0!==l)return l.exports;var n=t[e]={exports:{}};return o[e].call(n.exports,n,n.exports,r),n.exports}r.m=o,e=[],r.O=(o,t,l,n)=>{if(!t){var i=1/0;for(p=0;p<e.length;p++){for(var[t,l,n]=e[p],c=!0,s=0;s<t.length;s++)(!1&n||i>=n)&&Object.keys(r.O).every((e=>r.O[e](t[s])))?t.splice(s--,1):(c=!1,n<i&&(i=n));if(c){e.splice(p--,1);var a=l();void 0!==a&&(o=a)}}return o}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[t,l,n]},r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=3418,(()=>{var e={3418:0};r.O.j=o=>0===e[o];var o=(o,t)=>{var l,n,[i,c,s]=t,a=0;if(i.some((o=>0!==e[o]))){for(l in c)r.o(c,l)&&(r.m[l]=c[l]);if(s)var p=s(r)}for(o&&o(t);a<i.length;a++)n=i[a],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(p)},t=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var l=r.O(void 0,[2869],(()=>r(2797)));l=r.O(l),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["collection-filters"]=l})();