this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["filter-wrapper"]=function(e){function t(t){for(var o,n,l=t[0],s=t[1],a=t[2],b=0,p=[];b<l.length;b++)n=l[b],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&p.push(c[n][0]),c[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,a||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,l=1;l<r.length;l++){var s=r[l];0!==c[s]&&(o=!1)}o&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var o={},c={16:0},i=[];function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var u=s;return i.push([516,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},4:function(e,t){e.exports=window.wp.blockEditor},403:function(e){e.exports=JSON.parse('{"name":"woocommerce/filter-wrapper","version":"1.0.0","title":"Filter Block","category":"woocommerce","keywords":["WooCommerce"],"attributes":{"filterType":{"type":"string"},"heading":{"type":"string"}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},425:function(e,t,r){"use strict";var o=r(0),c=r(9);const i=Object(o.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(o.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(o.createElement)("path",{d:"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}));t.a=i},516:function(e,t,r){e.exports=r(613)},613:function(e,t,r){"use strict";r.r(t);var o=r(0),c=r(1),i=r(7),n=r(425),l=r(4),s=r(68),a=r(633),u=r(640),b=r(646),p=r(635),d=r(403);const f=[{widgetId:"woocommerce_layered_nav_filters",name:"active-filters",heading:Object(c.__)("Active filters","woo-gutenberg-products-block")},{widgetId:"woocommerce_price_filter",name:"price-filter",heading:Object(c.__)("Filter by price","woo-gutenberg-products-block")},{widgetId:"woocommerce_layered_nav",name:"attribute-filter",heading:Object(c.__)("Filter by attribute","woo-gutenberg-products-block")},{widgetId:"woocommerce_rating_filter",name:"rating-filter",heading:Object(c.__)("Filter by rating","woo-gutenberg-products-block")}];Object(i.registerBlockType)(d,{edit:({attributes:e})=>{const t=Object(l.useBlockProps)();return Object(o.createElement)("div",{...t},Object(o.createElement)(l.InnerBlocks,{allowedBlocks:["core/heading"],template:[["core/heading",{level:3,content:e.heading||""}],[`woocommerce/${e.filterType}`,{heading:"",lock:{remove:!0}}]]}))},save:()=>Object(o.createElement)("div",{...l.useBlockProps.save()},Object(o.createElement)(l.InnerBlocks.Content,null)),variations:[{name:"active-filters",title:Object(c.__)("Active Filters","woo-gutenberg-products-block"),description:Object(c.__)("Display the currently active filters.","woo-gutenberg-products-block"),isActive:e=>"active-filters"===e.filterType||!e.filterType,attributes:{heading:Object(c.__)("Active filters","woo-gutenberg-products-block"),filterType:"active-filters"},icon:{src:Object(o.createElement)(s.a,{icon:n.a,className:"wc-block-editor-components-block-icon"})},isDefault:!0},{name:"price-filter",title:Object(c.__)("Filter by Price","woo-gutenberg-products-block"),description:Object(c.__)("Enable customers to filter the product grid by choosing a price range.","woo-gutenberg-products-block"),isActive:e=>"price-filter"===e.filterType,attributes:{filterType:"price-filter",heading:Object(c.__)("Filter by price","woo-gutenberg-products-block")},icon:{src:Object(o.createElement)(s.a,{icon:a.a,className:"wc-block-editor-components-block-icon"})}},{name:"stock-filter",title:Object(c.__)("Filter by Stock","woo-gutenberg-products-block"),description:Object(c.__)("Enable customers to filter the product grid by stock status.","woo-gutenberg-products-block"),isActive:e=>"stock-filter"===e.filterType,attributes:{filterType:"stock-filter",heading:Object(c.__)("Filter by stock status","woo-gutenberg-products-block")},icon:{src:Object(o.createElement)(s.a,{icon:u.a,className:"wc-block-editor-components-block-icon"})}},{name:"attribute-filter",title:Object(c.__)("Filter by Attribute","woo-gutenberg-products-block"),description:Object(c.__)("Enable customers to filter the product grid by selecting one or more attributes, such as color.","woo-gutenberg-products-block"),isActive:e=>"attribute-filter"===e.filterType,attributes:{filterType:"attribute-filter",heading:Object(c.__)("Filter by attribute","woo-gutenberg-products-block")},icon:{src:Object(o.createElement)(s.a,{icon:b.a,className:"wc-block-editor-components-block-icon"})}},{name:"rating-filter",title:Object(c.__)("Filter by Rating","woo-gutenberg-products-block"),description:Object(c.__)("Enable customers to filter the product grid by rating.","woo-gutenberg-products-block"),isActive:e=>"rating-filter"===e.filterType,attributes:{filterType:"rating-filter",heading:Object(c.__)("Filter by rating","woo-gutenberg-products-block")},icon:{src:Object(o.createElement)(s.a,{icon:p.a,className:"wc-block-editor-components-block-icon"})}}],transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:({idBase:e,instance:t})=>{return r=e,f.some((e=>e.widgetId===r))&&!(null==t||!t.raw);var r},transform:({idBase:e,instance:t})=>{var r;const o=(c=e,f.find((e=>e.widgetId===c)));var c;return o?((e,t,r)=>{const o=[Object(i.createBlock)(`woocommerce/${e}`,t)];return o.unshift(Object(i.createBlock)("core/heading",{content:r,level:3})),Object(i.createBlock)("woocommerce/filter-wrapper",{filterType:e},o)})(o.name,((e,t)=>{var r,o,c;switch(t){case"attribute-filter":return{attributeId:0,showCounts:!0,queryType:(null==e||null===(r=e.raw)||void 0===r?void 0:r.query_type)||"or",heading:"",displayStyle:(null==e||null===(o=e.raw)||void 0===o?void 0:o.display_type)||"list",showFilterButton:!1,selectType:(null==e||null===(c=e.raw)||void 0===c?void 0:c.select_type)||"multiple",isPreview:!1};case"active-filters":return{displayStyle:"list",heading:""};case"price-filter":return{heading:"",showInputFields:!1,showFilterButton:!0,inlineInput:!1};default:return{}}})(t,o.name),(null==t||null===(r=t.raw)||void 0===r?void 0:r.title)||o.heading):null}}]}})},7:function(e,t){e.exports=window.wp.blocks},9:function(e,t){e.exports=window.wp.primitives}});