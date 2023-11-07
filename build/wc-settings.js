(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ADMIN_URL:()=>a,COUNTRIES:()=>i,CURRENCY:()=>s,CURRENT_USER_IS_ADMIN:()=>c,HOME_URL:()=>l,LOCALE:()=>d,ORDER_STATUSES:()=>u,PLACEHOLDER_IMG_SRC:()=>p,SITE_TITLE:()=>_,STORE_PAGES:()=>g,WC_ASSET_URL:()=>m,WC_VERSION:()=>b,WP_LOGIN_URL:()=>w,WP_VERSION:()=>y,allSettings:()=>n,defaultAddressFields:()=>h,getAdminLink:()=>N,getPaymentMethodData:()=>V,getSetting:()=>T,getSettingWithCoercion:()=>O,isWcVersion:()=>M,isWpVersion:()=>P}),(0,window.wp.hooks.addFilter)("woocommerce_admin_analytics_settings","woocommerce-blocks/exclude-draft-status-from-analytics",(e=>{const t=e=>"customStatuses"===e.key?{...e,options:e.options.filter((e=>"checkout-draft"!==e.value))}:e,o=e.woocommerce_actionable_order_statuses.options.map(t),r=e.woocommerce_excluded_report_order_statuses.options.map(t);return{...e,woocommerce_actionable_order_statuses:{...e.woocommerce_actionable_order_statuses,options:o},woocommerce_excluded_report_order_statuses:{...e.woocommerce_excluded_report_order_statuses,options:r}}}));const o={adminUrl:"",countries:[],currency:{code:"USD",precision:2,symbol:"$",symbolPosition:"left",decimalSeparator:".",priceFormat:"%1$s%2$s",thousandSeparator:","},currentUserId:0,currentUserIsAdmin:!1,homeUrl:"",locale:{siteLocale:"en_US",userLocale:"en_US",weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},orderStatuses:[],placeholderImgSrc:"",siteTitle:"",storePages:[],wcAssetUrl:"",wcVersion:"",wpLoginUrl:"",wpVersion:""},r="object"==typeof window.wcSettings?window.wcSettings:{},n={...o,...r};n.currency={...o.currency,...n.currency},n.locale={...o.locale,...n.locale};const a=n.adminUrl,i=n.countries,s=n.currency,c=n.currentUserIsAdmin,l=n.homeUrl,d=n.locale,u=n.orderStatuses,p=n.placeholderImgSrc,_=n.siteTitle,g=n.storePages,m=n.wcAssetUrl,b=n.wcVersion,w=n.wpLoginUrl,y=n.wpVersion,S=window.wp.i18n,h={first_name:{label:(0,S.__)("First name","woo-gutenberg-products-block"),optionalLabel:(0,S.__)("First name (optional)","woo-gutenberg-products-block"),autocomplete:"given-name",autocapitalize:"sentences",required:!0,hidden:!1,index:10},last_name:{label:(0,S.__)("Last name","woo-gutenberg-products-block"),optionalLabel:(0,S.__)("Last name (optional)","woo-gutenberg-products-block"),autocomplete:"family-name",autocapitalize:"sentences",required:!0,hidden:!1,index:20},company:{label:(0,S.__)("Company","woo-gutenberg-products-block"),optionalLabel:(0,S.__)("Company (optional)","woo-gutenberg-products-block"),autocomplete:"organization",autocapitalize:"sentences",required:!1,hidden:!1,index:30},address_1:{label:(0,S.__)("Address","woo-gutenberg-products-block"),optionalLabel:(0,S.__)("Address (optional)","woo-gutenberg-products-block"),autocomplete:"address-line1",autocapitalize:"sentences",required:!0,hidden:!1,index:40},address_2:{label:(0,S.__)("Apartment, suite, etc.","woo-gutenberg-products-block"),optionalLabel:(0,S.__)("Apartment, suite, etc. (optional)","woo-gutenberg-products-block"),autocomplete:"address-line2",autocapitalize:"sentences",required:!1,hidden:!1,index:50},country:{label:(0,S.__)("Country/Region","woo-gutenberg-products-block"),optionalLabel:(0,S.__)("Country/Region (optional)","woo-gutenberg-products-block"),autocomplete:"country",required:!0,hidden:!1,index:60},city:{label:(0,S.__)("City","woo-gutenberg-products-block"),optionalLabel:(0,S.__)("City (optional)","woo-gutenberg-products-block"),autocomplete:"address-level2",autocapitalize:"sentences",required:!0,hidden:!1,index:70},state:{label:(0,S.__)("State/County","woo-gutenberg-products-block"),optionalLabel:(0,S.__)("State/County (optional)","woo-gutenberg-products-block"),autocomplete:"address-level1",autocapitalize:"sentences",required:!0,hidden:!1,index:80},postcode:{label:(0,S.__)("Postal code","woo-gutenberg-products-block"),optionalLabel:(0,S.__)("Postal code (optional)","woo-gutenberg-products-block"),autocomplete:"postal-code",autocapitalize:"characters",required:!0,hidden:!1,index:90}};function f(e,t){const o=U(e),r=U(t),n=o.pop(),a=r.pop(),i=I(o,r);return 0!==i?i:n&&a?I(n.split("."),a.split(".")):n||a?n?-1:1:0}const L=(e,t,o)=>{C(o);const r=f(e,t);return R[o].includes(r)};f.validate=e=>"string"==typeof e&&/^[v\d]/.test(e)&&k.test(e),f.compare=L,f.sastisfies=(e,t)=>{const o=t.match(/^([<>=~^]+)/),r=o?o[1]:"=";if("^"!==r&&"~"!==r)return L(e,t,r);const[n,a,i]=U(e),[s,c,l]=U(t);return 0===E(n,s)&&("^"===r?I([a,i],[c,l])>=0:0===E(a,c)&&E(i,l)>=0)};const k=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,U=e=>{if("string"!=typeof e)throw new TypeError("Invalid argument expected string");const t=e.match(k);if(!t)throw new Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},x=e=>"*"===e||"x"===e||"X"===e,v=e=>{const t=parseInt(e,10);return isNaN(t)?e:t},E=(e,t)=>{if(x(e)||x(t))return 0;const[o,r]=((e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t])(v(e),v(t));return o>r?1:o<r?-1:0},I=(e,t)=>{for(let o=0;o<Math.max(e.length,t.length);o++){const r=E(e[o]||0,t[o]||0);if(0!==r)return r}return 0},R={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]},A=Object.keys(R),C=e=>{if("string"!=typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===A.indexOf(e))throw new Error(`Invalid operator, expected one of ${A.join("|")}`)},T=(e,t=!1,o=((e,t)=>void 0!==e?e:t))=>{let r=t;if(e in n)r=n[e];else if(e.includes("_data")){const o=e.replace("_data",""),n=T("paymentMethodData",{});r=o in n?n[o]:t}return o(r,t)},O=(e,t,o)=>{const r=e in n?n[e]:t;return o(r,t)?r:t},z=(e,t,o)=>{let r=T(e,"").replace(/-[a-zA-Z0-9]*[\-]*/,".0-rc.");return r=r.endsWith(".")?r.substring(0,r.length-1):r,f.compare(r,t,o)},P=(e,t="=")=>z("wpVersion",e,t),M=(e,t="=")=>z("wcVersion",e,t),N=e=>T("adminUrl")+e,V=(e,t=null)=>{var o;return null!==(o=T("paymentMethodData",{})[e])&&void 0!==o?o:t};(this.wc=this.wc||{}).wcSettings=t})();