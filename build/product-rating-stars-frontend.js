(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[79,76],{118:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>"number"==typeof t},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(37);const o=t=>!Object(r.a)(t)&&t instanceof Object&&t.constructor===Object;function c(t,e){return o(t)&&e in t}},28:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>"string"==typeof t},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};Object.create,Object.create},282:function(t,e,n){"use strict";function r(t){return t.toLowerCase()}n.d(e,"a",(function(){return a}));var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function a(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,a=void 0===n?o:n,i=e.stripRegexp,l=void 0===i?c:i,u=e.transform,d=void 0===u?r:u,f=e.delimiter,b=void 0===f?" ":f,p=s(s(t,a,"$1\0$2"),l,"\0"),g=0,v=p.length;"\0"===p.charAt(g);)g++;for(;"\0"===p.charAt(v-1);)v--;return p.slice(g,v).split("\0").map(d).join(b)}function s(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}},285:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(281),o=n(282);function c(t,e){return void 0===e&&(e={}),function(t,e){return void 0===e&&(e={}),Object(o.a)(t,Object(r.a)({delimiter:"."},e))}(t,Object(r.a)({delimiter:"-"},e))}},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(5),o=n.n(r),c=n(20),a=n(28),s=n(285),i=n(129);function l(t={}){const e={};return Object(i.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function u(t,e){return t&&e?`has-${Object(s.a)(e)}-${t}`:""}const d=t=>{const e=(t=>{const e=Object(c.a)(t)?t:{style:{}};let n=e.style;return Object(a.a)(n)&&(n=JSON.parse(n)||{}),Object(c.a)(n)||(n={}),{...e,style:n}})(t),n=function(t){var e,n,r,a,s,i,d;const{backgroundColor:f,textColor:b,gradient:p,style:g}=t,v=u("background-color",f),m=u("color",b),y=function(t){if(t)return`has-${t}-gradient-background`}(p),O=y||(null==g||null===(e=g.color)||void 0===e?void 0:e.gradient);return{className:o()(m,y,{[v]:!O&&!!v,"has-text-color":b||(null==g||null===(n=g.color)||void 0===n?void 0:n.text),"has-background":f||(null==g||null===(r=g.color)||void 0===r?void 0:r.background)||p||(null==g||null===(a=g.color)||void 0===a?void 0:a.gradient),"has-link-color":Object(c.a)(null==g||null===(s=g.elements)||void 0===s?void 0:s.link)?null==g||null===(i=g.elements)||void 0===i||null===(d=i.link)||void 0===d?void 0:d.color:void 0}),style:l({color:(null==g?void 0:g.color)||{}})}}(e),r=function(t){var e;const n=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:n,style:r}=t,c=n?u("border-color",n):"";return o()({"has-border-color":n||(null==r||null===(e=r.border)||void 0===e?void 0:e.color),borderColorClass:c})}(t),style:l({border:n})}}(e),s=function(t){var e;return{className:void 0,style:l({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}(e),i=(t=>{const e=Object(c.a)(t.style.typography)?t.style.typography:{},n=Object(a.a)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:n,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}})(e);return{className:o()(i.className,n.className,r.className,s.className),style:{...i.style,...n.style,...r.style,...s.style}}}},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>null===t},425:function(t,e){},463:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return p}));var r=n(0),o=n(1),c=n(5),a=n.n(c),s=n(59),i=n(286),l=n(143),u=n(118);n(425);const d=t=>({width:t/5*100+"%"}),f=({parentClassName:t})=>{const e=d(0);return Object(r.createElement)("div",{className:a()("wc-block-components-product-rating-stars__norating-container",`${t}-product-rating-stars__norating-container`)},Object(r.createElement)("div",{className:"wc-block-components-product-rating-stars__norating",role:"img"},Object(r.createElement)("span",{style:e})),Object(r.createElement)("span",null,Object(o.__)("No Reviews","woo-gutenberg-products-block")))},b=t=>{const{rating:e,reviews:n,parentClassName:c}=t,s=d(e),i=Object(o.sprintf)(/* translators: %f is referring to the average rating value */
Object(o.__)("Rated %f out of 5","woo-gutenberg-products-block"),e),l={__html:Object(o.sprintf)(/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(o._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",n,"woo-gutenberg-products-block"),Object(o.sprintf)('<strong class="rating">%f</strong>',e),Object(o.sprintf)('<span class="rating">%d</span>',n))};return Object(r.createElement)("div",{className:a()("wc-block-components-product-rating-stars__stars",`${c}__product-rating-stars__stars`),role:"img","aria-label":i},Object(r.createElement)("span",{style:s,dangerouslySetInnerHTML:l}))},p=t=>{const{textAlign:e,shouldDisplayMockedReviewsWhenProductHasNoReviews:n}=t,o=Object(i.a)(t),{parentClassName:c}=Object(s.useInnerBlockLayoutContext)(),{product:l}=Object(s.useProductDataContext)(),d=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(l),p=(t=>{const e=Object(u.a)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(l),g=a()(o.className,"wc-block-components-product-rating-stars",{[`${c}__product-rating`]:c,[`has-text-align-${e}`]:e}),v=n?Object(r.createElement)(f,{parentClassName:c}):null,m=p?Object(r.createElement)(b,{rating:d,reviews:p,parentClassName:c}):v;return Object(r.createElement)("div",{className:g,style:o.style},Object(r.createElement)("div",{className:"wc-block-components-product-rating-stars__container"},m))};e.default=Object(l.withProductDataContext)(p)}}]);