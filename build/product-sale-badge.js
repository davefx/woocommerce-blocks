(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[5432],{4498:(t,e,o)=>{"use strict";o.r(e),o.d(e,{Block:()=>d,default:()=>f});var n=o(9307),l=o(5736),s=o(4184),r=o.n(s),c=o(711),a=o(2864),i=o(3611),u=o(721);o(1314);const d=t=>{const{className:e,align:o}=t,s=(0,i.F)(t),{parentClassName:u}=(0,a.useInnerBlockLayoutContext)(),{product:d}=(0,a.useProductDataContext)();if(!(d.id&&d.on_sale||t.isDescendentOfSingleProductTemplate))return null;const f="string"==typeof o?`wc-block-components-product-sale-badge--align-${o}`:"";return(0,n.createElement)("div",{className:r()("wc-block-components-product-sale-badge",e,f,{[`${u}__product-onsale`]:u},s.className),style:s.style},(0,n.createElement)(c.Label,{label:(0,l.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:(0,l.__)("Product on sale","woo-gutenberg-products-block")}))},f=(0,u.withProductDataContext)(d)},3611:(t,e,o)=>{"use strict";o.d(e,{F:()=>i});var n=o(4184),l=o.n(n),s=o(7884),r=o(2646),c=o(1473),a=o(2661);const i=t=>{const e=(t=>{const e=(0,s.Kn)(t)?t:{style:{}};let o=e.style;return(0,r.H)(o)&&(o=JSON.parse(o)||{}),(0,s.Kn)(o)||(o={}),{...e,style:o}})(t),o=(0,a.vc)(e),n=(0,a.l8)(e),i=(0,a.su)(e),u=(0,c.f)(e);return{className:l()(u.className,o.className,n.className,i.className),style:{...u.style,...o.style,...n.style,...i.style}}}},1473:(t,e,o)=>{"use strict";o.d(e,{f:()=>s});var n=o(7884),l=o(2646);const s=t=>{const e=(0,n.Kn)(t.style.typography)?t.style.typography:{},o=(0,l.H)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:o,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}}},2661:(t,e,o)=>{"use strict";o.d(e,{l8:()=>d,su:()=>f,vc:()=>u});var n=o(4184),l=o.n(n),s=o(9784),r=o(2289),c=o(7884);function a(t={}){const e={};return(0,r.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function i(t,e){return t&&e?`has-${(0,s.o)(e)}-${t}`:""}function u(t){var e,o,n,s,r,u,d;const{backgroundColor:f,textColor:y,gradient:v,style:g}=t,p=i("background-color",f),b=i("color",y),m=function(t){if(t)return`has-${t}-gradient-background`}(v),k=m||(null==g||null===(e=g.color)||void 0===e?void 0:e.gradient);return{className:l()(b,m,{[p]:!k&&!!p,"has-text-color":y||(null==g||null===(o=g.color)||void 0===o?void 0:o.text),"has-background":f||(null==g||null===(n=g.color)||void 0===n?void 0:n.background)||v||(null==g||null===(s=g.color)||void 0===s?void 0:s.gradient),"has-link-color":(0,c.Kn)(null==g||null===(r=g.elements)||void 0===r?void 0:r.link)?null==g||null===(u=g.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:a({color:(null==g?void 0:g.color)||{}})}}function d(t){var e;const o=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:o,style:n}=t,s=o?i("border-color",o):"";return l()({"has-border-color":!!o||!(null==n||null===(e=n.border)||void 0===e||!e.color),[s]:!!s})}(t),style:a({border:o})}}function f(t){var e;return{className:void 0,style:a({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}},8519:(t,e,o)=>{"use strict";o.d(e,{F:()=>n});const n=t=>null===t},7884:(t,e,o)=>{"use strict";o.d(e,{$n:()=>s,Kn:()=>l,Qr:()=>r});var n=o(8519);const l=t=>!(0,n.F)(t)&&t instanceof Object&&t.constructor===Object;function s(t,e){return l(t)&&e in t}const r=t=>0===Object.keys(t).length},2646:(t,e,o)=>{"use strict";o.d(e,{H:()=>n});const n=t=>"string"==typeof t},1314:()=>{}}]);