(()=>{"use strict";var e,o={8363:(e,o,r)=>{r.r(o);var t=r(9307);const n=window.wp.blocks,i=window.wp.blockEditor;var s=r(1984),a=r(5427);const c=JSON.parse('{"name":"woocommerce/order-confirmation-shipping-wrapper","version":"1.0.0","title":"Shipping Address Section","description":"Display the order confirmation shipping section.","category":"woocommerce","keywords":["WooCommerce"],"attributes":{"heading":{"type":"string","default":"Shipping"}},"supports":{"multiple":false,"align":["wide","full"],"html":false,"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'),l={heading:{type:"string",default:(0,r(5736).__)("Shipping address","woo-gutenberg-products-block")}};(0,n.registerBlockType)(c,{icon:{src:(0,t.createElement)(s.Z,{icon:a.Z,className:"wc-block-editor-components-block-icon"})},edit:({attributes:e,setAttributes:o})=>{const r=(0,i.useBlockProps)();return(0,t.createElement)("div",{...r},(0,t.createElement)(i.InnerBlocks,{allowedBlocks:["core/heading"],template:[["core/heading",{level:3,style:{typography:{fontSize:"24px"}},content:e.heading||"",onChangeContent:e=>o({heading:e})}],["woocommerce/order-confirmation-shipping-address",{lock:{remove:!0}}]]}))},save:()=>(0,t.createElement)(i.InnerBlocks.Content,null),attributes:l})},9307:e=>{e.exports=window.wp.element},5736:e=>{e.exports=window.wp.i18n},444:e=>{e.exports=window.wp.primitives}},r={};function t(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return o[e].call(i.exports,i,i.exports,t),i.exports}t.m=o,e=[],t.O=(o,r,n,i)=>{if(!r){var s=1/0;for(p=0;p<e.length;p++){for(var[r,n,i]=e[p],a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(t.O).every((e=>t.O[e](r[c])))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(p--,1);var l=n();void 0!==l&&(o=l)}}return o}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,n,i]},t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.j=2951,(()=>{var e={2951:0};t.O.j=o=>0===e[o];var o=(o,r)=>{var n,i,[s,a,c]=r,l=0;if(s.some((o=>0!==e[o]))){for(n in a)t.o(a,n)&&(t.m[n]=a[n]);if(c)var p=c(t)}for(o&&o(r);l<s.length;l++)i=s[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(p)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var n=t.O(void 0,[2869],(()=>t(8363)));n=t.O(n),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["order-confirmation-shipping-wrapper"]=n})();