"use strict";(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[1114],{3611:(e,t,o)=>{o.d(t,{F:()=>c});var n=o(4184),r=o.n(n),l=o(7884),s=o(2646),a=o(1473),i=o(2661);const c=e=>{const t=(e=>{const t=(0,l.Kn)(e)?e:{style:{}};let o=t.style;return(0,s.H)(o)&&(o=JSON.parse(o)||{}),(0,l.Kn)(o)||(o={}),{...t,style:o}})(e),o=(0,i.vc)(t),n=(0,i.l8)(t),c=(0,i.su)(t),u=(0,a.f)(t);return{className:r()(u.className,o.className,n.className,c.className),style:{...u.style,...o.style,...n.style,...c.style}}}},1473:(e,t,o)=>{o.d(t,{f:()=>l});var n=o(7884),r=o(2646);const l=e=>{const t=(0,n.Kn)(e.style.typography)?e.style.typography:{},o=(0,r.H)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:o,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}}},2661:(e,t,o)=>{o.d(t,{l8:()=>d,su:()=>f,vc:()=>u});var n=o(4184),r=o.n(n),l=o(9784),s=o(2289),a=o(7884);function i(e={}){const t={};return(0,s.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function c(e,t){return e&&t?`has-${(0,l.o)(t)}-${e}`:""}function u(e){var t,o,n,l,s,u,d;const{backgroundColor:f,textColor:v,gradient:p,style:y}=e,g=c("background-color",f),m=c("color",v),h=function(e){if(e)return`has-${e}-gradient-background`}(p),b=h||(null==y||null===(t=y.color)||void 0===t?void 0:t.gradient);return{className:r()(m,h,{[g]:!b&&!!g,"has-text-color":v||(null==y||null===(o=y.color)||void 0===o?void 0:o.text),"has-background":f||(null==y||null===(n=y.color)||void 0===n?void 0:n.background)||p||(null==y||null===(l=y.color)||void 0===l?void 0:l.gradient),"has-link-color":(0,a.Kn)(null==y||null===(s=y.elements)||void 0===s?void 0:s.link)?null==y||null===(u=y.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:i({color:(null==y?void 0:y.color)||{}})}}function d(e){var t;const o=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:o,style:n}=e,l=o?c("border-color",o):"";return r()({"has-border-color":!!o||!(null==n||null===(t=n.border)||void 0===t||!t.color),[l]:!!l})}(e),style:i({border:o})}}function f(e){var t;return{className:void 0,style:i({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}},2368:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var n=o(9196),r=o(4055),l=o(4184),s=o.n(l),a=o(5736),i=o(3611);const c=e=>{const{cartItemsCount:t}=(0,r.b)(),o=(0,i.F)(e);return(0,n.createElement)("span",{className:s()(e.className,o.className),style:o.style},(0,a.sprintf)(/* translators: %d is the count of items in the cart. */
(0,a._n)("(%d item)","(%d items)",t,"woo-gutenberg-products-block"),t))}},1290:(e,t,o)=>{o.d(t,{$:()=>l});var n=o(7582),r=o(307);function l(e,t){return void 0===t&&(t={}),(0,r.B)(e,(0,n.pi)({delimiter:"."},t))}},9562:(e,t,o)=>{function n(e){return e.toLowerCase()}o.d(t,{U:()=>n})},307:(e,t,o)=>{o.d(t,{B:()=>s});var n=o(9562),r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],l=/[^A-Z0-9]+/gi;function s(e,t){void 0===t&&(t={});for(var o=t.splitRegexp,s=void 0===o?r:o,i=t.stripRegexp,c=void 0===i?l:i,u=t.transform,d=void 0===u?n.U:u,f=t.delimiter,v=void 0===f?" ":f,p=a(a(e,s,"$1\0$2"),c,"\0"),y=0,g=p.length;"\0"===p.charAt(y);)y++;for(;"\0"===p.charAt(g-1);)g--;return p.slice(y,g).split("\0").map(d).join(v)}function a(e,t,o){return t instanceof RegExp?e.replace(t,o):t.reduce((function(e,t){return e.replace(t,o)}),e)}},9784:(e,t,o)=>{o.d(t,{o:()=>l});var n=o(7582),r=o(1290);function l(e,t){return void 0===t&&(t={}),(0,r.$)(e,(0,n.pi)({delimiter:"-"},t))}},7582:(e,t,o)=>{o.d(t,{pi:()=>n});var n=function(){return n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);