(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[68],{287:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(){return o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},o.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError},288:function(t,e,n){"use strict";function o(t){return t.toLowerCase()}n.d(e,"a",(function(){return c}));var r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],l=/[^A-Z0-9]+/gi;function c(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,c=void 0===n?r:n,i=e.stripRegexp,s=void 0===i?l:i,u=e.transform,d=void 0===u?o:u,f=e.delimiter,v=void 0===f?" ":f,p=a(a(t,c,"$1\0$2"),s,"\0"),y=0,b=p.length;"\0"===p.charAt(y);)y++;for(;"\0"===p.charAt(b-1);)b--;return p.slice(y,b).split("\0").map(d).join(v)}function a(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(287),r=n(288);function l(t,e){return void 0===e&&(e={}),function(t,e){return void 0===e&&(e={}),Object(r.a)(t,Object(o.a)({delimiter:"."},e))}(t,Object(o.a)({delimiter:"-"},e))}},293:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(4),r=n.n(o),l=n(19),c=n(28),a=n(291),i=n(131);function s(t={}){const e={};return Object(i.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function u(t,e){return t&&e?`has-${Object(a.a)(e)}-${t}`:""}const d=t=>{const e=(t=>{const e=Object(l.a)(t)?t:{style:{}};let n=e.style;return Object(c.a)(n)&&(n=JSON.parse(n)||{}),Object(l.a)(n)||(n={}),{...e,style:n}})(t),n=function(t){var e,n,o,c,a,i,d;const{backgroundColor:f,textColor:v,gradient:p,style:y}=t,b=u("background-color",f),g=u("color",v),m=function(t){if(t)return`has-${t}-gradient-background`}(p),O=m||(null==y||null===(e=y.color)||void 0===e?void 0:e.gradient);return{className:r()(g,m,{[b]:!O&&!!b,"has-text-color":v||(null==y||null===(n=y.color)||void 0===n?void 0:n.text),"has-background":f||(null==y||null===(o=y.color)||void 0===o?void 0:o.background)||p||(null==y||null===(c=y.color)||void 0===c?void 0:c.gradient),"has-link-color":Object(l.a)(null==y||null===(a=y.elements)||void 0===a?void 0:a.link)?null==y||null===(i=y.elements)||void 0===i||null===(d=i.link)||void 0===d?void 0:d.color:void 0}),style:s({color:(null==y?void 0:y.color)||{}})}}(e),o=function(t){var e;const n=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:n,style:o}=t,l=n?u("border-color",n):"";return r()({"has-border-color":!!n||!(null==o||null===(e=o.border)||void 0===e||!e.color),[l]:!!l})}(t),style:s({border:n})}}(e),a=function(t){var e;return{className:void 0,style:s({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}(e),i=(t=>{const e=Object(l.a)(t.style.typography)?t.style.typography:{},n=Object(c.a)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:n,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}})(e);return{className:r()(i.className,n.className,o.className,a.className),style:{...i.style,...n.style,...o.style,...a.style}}}},419:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(72),l=n(4),c=n.n(l),a=n(1),i=n(293);e.default=t=>{const{cartItemsCount:e}=Object(r.a)(),n=Object(i.a)(t);return Object(o.createElement)("span",{className:c()(t.className,n.className),style:n.style},Object(a.sprintf)(/* translators: %d is the count of items in the cart. */
Object(a._n)("(%d item)","(%d items)",e,"woo-gutenberg-products-block"),e))}}}]);