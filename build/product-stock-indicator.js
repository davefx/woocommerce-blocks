(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[37],{349:function(o,c,t){"use strict";t.r(c),t.d(c,"Block",(function(){return d}));var n=t(6),e=t.n(n),s=t(0),r=t(1),l=t(4),a=t.n(l),i=t(26),k=t(89),u=t(54);t(374);const d=o=>{const{className:c}=o,t=Object(k.a)(o),{parentClassName:n}=Object(i.useInnerBlockLayoutContext)(),{product:l}=Object(i.useProductDataContext)();if(!l.id)return null;const u=!!l.is_in_stock,d=l.low_stock_remaining,b=l.is_on_backorder;return Object(s.createElement)("div",e()({className:a()(c,{[n+"__stock-indicator"]:n,"wc-block-components-product-stock-indicator--in-stock":u,"wc-block-components-product-stock-indicator--out-of-stock":!u,"wc-block-components-product-stock-indicator--low-stock":!!d,"wc-block-components-product-stock-indicator--available-on-backorder":!!b,...o.isDescendantOfAllProducts&&{[t.className]:t.className,"wc-block-components-product-stock-indicator wp-block-woocommerce-product-stock-indicator":!0}})},o.isDescendantOfAllProducts&&{style:t.style}),(o=>{let{isInStock:c=!1,isLowStock:t=!1,lowStockAmount:n=null,isOnBackorder:e=!1}=o;return t&&null!==n?Object(r.sprintf)(
/* translators: %d stock amount (number of items in stock for product) */
Object(r.__)("%d left in stock","woo-gutenberg-products-block"),n):e?Object(r.__)("Available on backorder","woo-gutenberg-products-block"):c?Object(r.__)("In stock","woo-gutenberg-products-block"):Object(r.__)("Out of stock","woo-gutenberg-products-block")})({isInStock:u,isLowStock:!!d,lowStockAmount:d,isOnBackorder:b}))};c.default=Object(u.withProductDataContext)(d)},374:function(o,c){}}]);