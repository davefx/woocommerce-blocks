(()=>{"use strict";const e={woocommerce:{styles:({context:e})=>{const{styles:o}=e.woocommerce;return Object.entries(o).reduce(((e,[o,t])=>{const c=`${o}:${t};`;return e.length>0?`${e} ${c}`:c}),"")}}};(0,window.wc.__experimentalInteractivity.store)({selectors:e,actions:{woocommerce:{handleMouseMove:({event:e,context:o})=>{if("IMG"===e.target.tagName){const t=e.target,c=e.offsetX/t.clientWidth*100,s=e.offsetY/t.clientHeight*100;o.woocommerce.styles.transform="scale(1.3)",o.woocommerce.styles["transform-origin"]=`${c}% ${s}%`}},handleMouseLeave:({context:e})=>{e.woocommerce.styles.transform="scale(1.0)",e.woocommerce.styles["transform-origin"]=""},handleClick:({context:e})=>{e.woocommerce.isDialogOpen=!0}}}})})();