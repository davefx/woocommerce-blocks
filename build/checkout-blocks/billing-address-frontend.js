(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[9662],{8082:(e,t,n)=>{"use strict";n.d(t,{k:()=>J});var o=n(9307),r=n(3554),s=n(5736),i=n(2629),l=n(4184),a=n.n(l),c=n(4333),d=n(2819),u=n(9630),p=n(5158),f=n(444);const h=(0,o.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(f.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));var m=n(7462);class g extends o.Component{constructor(){super(...arguments),this.onChange=this.onChange.bind(this),this.bindInput=this.bindInput.bind(this)}focus(){this.input.focus()}hasFocus(){return this.input===this.input.ownerDocument.activeElement}bindInput(e){this.input=e}onChange(e){this.props.onChange({value:e.target.value})}render(){const{value:e,isExpanded:t,instanceId:n,selectedSuggestionIndex:r,className:s,...i}=this.props,l=e?e.length+1:0;return(0,o.createElement)("input",(0,m.Z)({ref:this.bindInput,id:`components-form-token-input-${n}`,type:"text"},i,{value:e||"",onChange:this.onChange,size:l,className:a()(s,"components-form-token-field__input"),autoComplete:"off",role:"combobox","aria-expanded":t,"aria-autocomplete":"list","aria-owns":t?`components-form-token-suggestions-${n}`:void 0,"aria-activedescendant":-1!==r?`components-form-token-suggestions-${n}-${r}`:void 0,"aria-describedby":`components-form-token-suggestions-howto-${n}`}))}}const v=g;var b=n(4979),E=n.n(b);class w extends o.Component{constructor(){super(...arguments),this.handleMouseDown=this.handleMouseDown.bind(this),this.bindList=this.bindList.bind(this)}componentDidUpdate(){this.props.selectedIndex>-1&&this.props.scrollIntoView&&this.list.children[this.props.selectedIndex]&&(this.scrollingIntoView=!0,E()(this.list.children[this.props.selectedIndex],this.list,{onlyScrollIfNeeded:!0}),this.props.setTimeout((()=>{this.scrollingIntoView=!1}),100))}bindList(e){this.list=e}handleHover(e){return()=>{this.scrollingIntoView||this.props.onHover(e)}}handleClick(e){return()=>{this.props.onSelect(e)}}handleMouseDown(e){e.preventDefault()}computeSuggestionMatch(e){const t=this.props.displayTransform(this.props.match||"").toLocaleLowerCase();if(0===t.length)return null;const n=(e=this.props.displayTransform(e)).toLocaleLowerCase().indexOf(t);return{suggestionBeforeMatch:e.substring(0,n),suggestionMatch:e.substring(n,n+t.length),suggestionAfterMatch:e.substring(n+t.length)}}render(){return(0,o.createElement)("ul",{ref:this.bindList,className:"components-form-token-field__suggestions-list",id:`components-form-token-suggestions-${this.props.instanceId}`,role:"listbox"},(0,d.map)(this.props.suggestions,((e,t)=>{const n=this.computeSuggestionMatch(e),r=a()("components-form-token-field__suggestion",{"is-selected":t===this.props.selectedIndex});return(0,o.createElement)("li",{id:`components-form-token-suggestions-${this.props.instanceId}-${t}`,role:"option",className:r,key:null!=e&&e.value?e.value:this.props.displayTransform(e),onMouseDown:this.handleMouseDown,onClick:this.handleClick(e),onMouseEnter:this.handleHover(e),"aria-selected":t===this.props.selectedIndex},n?(0,o.createElement)("span",{"aria-label":this.props.displayTransform(e)},n.suggestionBeforeMatch,(0,o.createElement)("strong",{className:"components-form-token-field__suggestion-match"},n.suggestionMatch),n.suggestionAfterMatch):this.props.displayTransform(e))})))}}w.defaultProps={match:"",onHover:()=>{},onSelect:()=>{},suggestions:Object.freeze([])};const y=(0,c.withSafeTimeout)(w);var _=n(4662),C=n(9685),k=n(2875),S=n(1092),A=n(9179),T=n(2506);const I=(0,S.L)({as:"div",useHook:function(e){const t=(0,A.y)(e,"FlexBlock");return(0,T.i)({isBlock:!0,...t})},name:"FlexBlock"});var L=n(1685);const F=(0,c.createHigherOrderComponent)((e=>t=>{const[n,r]=(0,o.useState)(),s=(0,o.useCallback)((e=>r((()=>null!=e&&e.handleFocusOutside?e.handleFocusOutside.bind(e):void 0))),[]);return(0,o.createElement)("div",(0,c.__experimentalUseFocusOutside)(n),(0,o.createElement)(e,(0,m.Z)({ref:s},t)))}),"withFocusOutside")(class extends o.Component{handleFocusOutside(e){this.props.onFocusOutside(e)}render(){return this.props.children}}),O=function e({value:t,label:n,options:r,onChange:i,onFilterValueChange:l=d.noop,hideLabelFromVision:f,help:m,allowReset:g=!0,className:b,messages:E={selected:(0,s.__)("Item selected.")}}){var w;const S=(0,c.useInstanceId)(e),[A,T]=(0,o.useState)(null),[O,N]=(0,o.useState)(!1),[x,R]=(0,o.useState)(!1),[D,P]=(0,o.useState)(""),B=(0,o.useRef)(),V=r.find((e=>e.value===t)),M=null!==(w=null==V?void 0:V.label)&&void 0!==w?w:"",q=(0,o.useMemo)((()=>{const e=[],t=[],n=(0,d.deburr)(D.toLocaleLowerCase());return r.forEach((o=>{const r=(0,d.deburr)(o.label).toLocaleLowerCase().indexOf(n);0===r?e.push(o):r>0&&t.push(o)})),e.concat(t)}),[D,r,t]),W=e=>{i(e.value),(0,p.speak)(E.selected,"assertive"),T(e),P(""),N(!1)},K=(e=1)=>{let t=q.indexOf(A)+e;t<0?t=q.length-1:t>=q.length&&(t=0),T(q[t]),N(!0)};return(0,o.useEffect)((()=>{const e=q.length>0;if(O){const t=e?(0,s.sprintf)(
/* translators: %d: number of results. */
(0,s._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",q.length),q.length):(0,s.__)("No results.");(0,p.speak)(t,"polite")}}),[q,O]),(0,o.createElement)(F,{onFocusOutside:()=>{N(!1)}},(0,o.createElement)(_.Z,{className:a()(b,"components-combobox-control"),tabIndex:"-1",label:n,id:`components-form-token-input-${S}`,hideLabelFromVision:f,help:m},(0,o.createElement)("div",{className:"components-combobox-control__suggestions-container",tabIndex:"-1",onKeyDown:e=>{let t=!1;switch(e.keyCode){case u.ENTER:A&&(W(A),t=!0);break;case u.UP:K(-1),t=!0;break;case u.DOWN:K(1),t=!0;break;case u.ESCAPE:N(!1),T(null),t=!0,e.stopPropagation()}t&&e.preventDefault()}},(0,o.createElement)(k.Z,null,(0,o.createElement)(I,null,(0,o.createElement)(v,{className:"components-combobox-control__input",instanceId:S,ref:B,value:O?D:M,"aria-label":M?`${M}, ${n}`:null,onFocus:()=>{R(!0),N(!0),l(""),P("")},onBlur:()=>{R(!1)},isExpanded:O,selectedSuggestionIndex:q.indexOf(A),onChange:e=>{const t=e.value;P(t),l(t),x&&N(!0)}})),g&&(0,o.createElement)(L.Z,null,(0,o.createElement)(C.Z,{className:"components-combobox-control__reset",icon:h,disabled:!t,onClick:()=>{i(null),B.current.input.focus()},label:(0,s.__)("Reset")}))),O&&(0,o.createElement)(y,{instanceId:S,match:{label:D},displayTransform:e=>e.label,suggestions:q,selectedIndex:q.indexOf(A),onHover:T,onSelect:W,scrollIntoView:!0}))))};var N=n(7884),x=n(9818),R=n(4801);n(5821);const D=(0,c.withInstanceId)((({id:e,className:t,label:n,onChange:i,options:l,value:c,required:d=!1,errorMessage:u=(0,s.__)("Please select a value.","woo-gutenberg-products-block"),errorId:p,instanceId:f="0",autoComplete:h="off"})=>{const m=(0,o.useRef)(null),g=e||"control-"+f,v=p||g,{setValidationErrors:b,clearValidationError:E}=(0,x.useDispatch)(R.VALIDATION_STORE_KEY),w=(0,x.useSelect)((e=>e(R.VALIDATION_STORE_KEY).getValidationError(v)));return(0,o.useEffect)((()=>(!d||c?E(v):b({[v]:{message:u,hidden:!0}}),()=>{E(v)})),[E,c,v,u,d,b]),(0,o.createElement)("div",{id:g,className:a()("wc-block-components-combobox",t,{"is-active":c,"has-error":(null==w?void 0:w.message)&&!(null!=w&&w.hidden)}),ref:m},(0,o.createElement)(O,{className:"wc-block-components-combobox-control",label:n,onChange:i,onFilterValueChange:e=>{if(e.length){const t=(0,N.Kn)(m.current)?m.current.ownerDocument.activeElement:void 0;if(t&&(0,N.Kn)(m.current)&&m.current.contains(t))return;const n=e.toLocaleUpperCase(),o=l.find((e=>e.label.toLocaleUpperCase().startsWith(n)||e.value.toLocaleUpperCase()===n));o&&i(o.value)}},options:l,value:c||"",allowReset:!1,autoComplete:h,"aria-invalid":(null==w?void 0:w.message)&&!(null!=w&&w.hidden)}),(0,o.createElement)(r.ValidationInputError,{propertyName:v}))}));n(7775);const P=({className:e,countries:t,id:n,label:r,onChange:l,value:c="",autoComplete:d="off",required:u=!1,errorId:p,errorMessage:f=(0,s.__)("Please select a country","woo-gutenberg-products-block")})=>{const h=(0,o.useMemo)((()=>Object.entries(t).map((([e,t])=>({value:e,label:(0,i.decodeEntities)(t)})))),[t]);return(0,o.createElement)("div",{className:a()(e,"wc-block-components-country-input")},(0,o.createElement)(D,{id:n,label:r,onChange:l,options:h,value:c,errorId:p,errorMessage:f,required:u,autoComplete:d}))};var B=n(5271);const V=e=>(0,o.createElement)(P,{countries:B.DK,...e}),M=e=>(0,o.createElement)(P,{countries:B.mO,...e});n(8410);const q=(e,t)=>{const n=t.find((t=>t.label.toLocaleUpperCase()===e.toLocaleUpperCase()||t.value.toLocaleUpperCase()===e.toLocaleUpperCase()));return n?n.value:""},W=({className:e,id:t,states:n,country:l,label:c,onChange:d,autoComplete:u="off",value:p="",required:f=!1,errorId:h=""})=>{const m=n[l],g=(0,o.useMemo)((()=>m?Object.keys(m).map((e=>({value:e,label:(0,i.decodeEntities)(m[e])}))):[]),[m]),v=(0,o.useCallback)((e=>{const t=g.length>0?q(e,g):e;t!==p&&d(t)}),[d,g,p]),b=(0,o.useRef)(p);return(0,o.useEffect)((()=>{b.current!==p&&(b.current=p)}),[p]),(0,o.useEffect)((()=>{if(g.length>0&&b.current){const e=q(b.current,g);e!==b.current&&v(e)}}),[g,v]),g.length>0?(0,o.createElement)(D,{className:a()(e,"wc-block-components-state-input"),id:t,label:c,onChange:v,options:g,value:p,errorMessage:(0,s.__)("Please select a state.","woo-gutenberg-products-block"),errorId:h,required:f,autoComplete:u}):(0,o.createElement)(r.ValidatedTextInput,{className:e,id:t,label:c,onChange:v,autoComplete:u,value:p,required:f})},K=e=>(0,o.createElement)(W,{states:B.JJ,...e}),U=e=>(0,o.createElement)(W,{states:B.nm,...e});var H=n(9075),$=n(4617),Z=n(9127),Y=n.n(Z),z=n(3340);const j=Object.keys($.defaultAddressFields),G=({id:e="",fields:t=j,fieldConfig:n={},onChange:i,type:l="shipping",values:a})=>{const d=(0,c.useInstanceId)(G),u=(0,H.s)(t),p=(0,H.s)(n),f=(0,H.s)(a.country),h=(0,o.useMemo)((()=>{const e=(0,z.Z)(u,p,f);return{fields:e,type:l,required:e.filter((e=>e.required)),hidden:e.filter((e=>e.hidden))}}),[u,p,f,l]),m=(0,o.useRef)({});return(0,o.useEffect)((()=>{const e={...a,...Object.fromEntries(h.hidden.map((e=>[e.key,""])))};Y()(a,e)||i(e)}),[i,h,a]),(0,o.useEffect)((()=>{"shipping"===l&&(e=>{const t="shipping_country",n=(0,x.select)(R.VALIDATION_STORE_KEY).getValidationError(t);!e.country&&(e.city||e.state||e.postcode)&&(n?(0,x.dispatch)(R.VALIDATION_STORE_KEY).showValidationError(t):(0,x.dispatch)(R.VALIDATION_STORE_KEY).setValidationErrors({[t]:{message:(0,s.__)("Please select your country","woo-gutenberg-products-block"),hidden:!1}})),n&&e.country&&(0,x.dispatch)(R.VALIDATION_STORE_KEY).clearValidationError(t)})(a)}),[a,l]),(0,o.useEffect)((()=>{var e,t;null===(e=m.current)||void 0===e||null===(t=e.postcode)||void 0===t||t.revalidate()}),[f]),e=e||`${d}`,(0,o.createElement)("div",{id:e,className:"wc-block-components-address-form"},h.fields.map((t=>{if(t.hidden)return null;const n={id:`${e}-${t.key}`,errorId:`${l}_${t.key}`,label:t.required?t.label:t.optionalLabel,autoCapitalize:t.autocapitalize,autoComplete:t.autocomplete,errorMessage:t.errorMessage,required:t.required,className:`wc-block-components-address-form__${t.key}`};if("country"===t.key){const e="shipping"===l?M:V;return(0,o.createElement)(e,{key:t.key,...n,value:a.country,onChange:e=>{const t={...a,country:e,state:""};a.postcode&&!(0,r.isPostcode)({postcode:a.postcode,country:e})&&(t.postcode=""),i(t)}})}if("state"===t.key){const e="shipping"===l?U:K;return(0,o.createElement)(e,{key:t.key,...n,country:a.country,value:a.state,onChange:e=>i({...a,state:e})})}return(0,o.createElement)(r.ValidatedTextInput,{key:t.key,ref:e=>m.current[t.key]=e,...n,value:a[t.key],onChange:e=>i({...a,[t.key]:e}),customFormatter:e=>"postcode"===t.key?e.trimStart().toUpperCase():e,customValidation:e=>((e,t,n)=>!((e.required||e.value)&&"postcode"===t&&n.country&&!(0,r.isPostcode)({postcode:e.value,country:n.country})&&(e.setCustomValidity((0,s.__)("Please enter a valid postcode","woo-gutenberg-products-block")),1)))(e,t.key,a)})})))},J=G},6938:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(9307),r=n(5904),s=n(9196);const i=["BUTTON","FIELDSET","INPUT","OPTGROUP","OPTION","SELECT","TEXTAREA","A"],l=({children:e,style:t={},...n})=>{const l=(0,o.useRef)(null),a=()=>{l.current&&r.focus.focusable.find(l.current).forEach((e=>{i.includes(e.nodeName)&&e.setAttribute("tabindex","-1"),e.hasAttribute("contenteditable")&&e.setAttribute("contenteditable","false")}))},c=function(e,t,n){var o=this,r=(0,s.useRef)(null),i=(0,s.useRef)(0),l=(0,s.useRef)(null),a=(0,s.useRef)([]),c=(0,s.useRef)(),d=(0,s.useRef)(),u=(0,s.useRef)(e),p=(0,s.useRef)(!0);(0,s.useEffect)((function(){u.current=e}),[e]);var f=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var h=!!(n=n||{}).leading,m=!("trailing"in n)||!!n.trailing,g="maxWait"in n,v=g?Math.max(+n.maxWait||0,t):null;(0,s.useEffect)((function(){return p.current=!0,function(){p.current=!1}}),[]);var b=(0,s.useMemo)((function(){var e=function(e){var t=a.current,n=c.current;return a.current=c.current=null,i.current=e,d.current=u.current.apply(n,t)},n=function(e,t){f&&cancelAnimationFrame(l.current),l.current=f?requestAnimationFrame(e):setTimeout(e,t)},s=function(e){if(!p.current)return!1;var n=e-r.current;return!r.current||n>=t||n<0||g&&e-i.current>=v},b=function(t){return l.current=null,m&&a.current?e(t):(a.current=c.current=null,d.current)},E=function e(){var o=Date.now();if(s(o))return b(o);if(p.current){var l=t-(o-r.current),a=g?Math.min(l,v-(o-i.current)):l;n(e,a)}},w=function(){var u=Date.now(),f=s(u);if(a.current=[].slice.call(arguments),c.current=o,r.current=u,f){if(!l.current&&p.current)return i.current=r.current,n(E,t),h?e(r.current):d.current;if(g)return n(E,t),e(r.current)}return l.current||n(E,t),d.current};return w.cancel=function(){l.current&&(f?cancelAnimationFrame(l.current):clearTimeout(l.current)),i.current=0,a.current=r.current=c.current=l.current=null},w.isPending=function(){return!!l.current},w.flush=function(){return l.current?b(Date.now()):d.current},w}),[h,g,t,v,m,f]);return b}(a,0,{leading:!0});return(0,o.useLayoutEffect)((()=>{let e;return a(),l.current&&(e=new window.MutationObserver(c),e.observe(l.current,{childList:!0,attributes:!0,subtree:!0})),()=>{e&&e.disconnect(),c.cancel()}}),[c]),(0,o.createElement)("div",{ref:l,"aria-disabled":"true",style:{userSelect:"none",pointerEvents:"none",cursor:"normal",...t},...n},e)}},7277:(e,t,n)=>{"use strict";n.d(t,{B:()=>c});var o=n(4617),r=n(9307),s=n(9818),i=n(4801),l=n(7844),a=n(5027);const c=()=>{const{needsShipping:e}=(0,a.V)(),{useShippingAsBilling:t,prefersCollection:n}=(0,s.useSelect)((e=>({useShippingAsBilling:e(i.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),prefersCollection:e(i.CHECKOUT_STORE_KEY).prefersCollection()}))),{__internalSetUseShippingAsBilling:c}=(0,s.useDispatch)(i.CHECKOUT_STORE_KEY),{billingAddress:d,setBillingAddress:u,shippingAddress:p,setShippingAddress:f}=(0,l.L)(),h=(0,r.useCallback)((e=>{u({email:e})}),[u]),m=(0,r.useCallback)((e=>{u({phone:e})}),[u]),g=(0,r.useCallback)((e=>{f({phone:e})}),[f]),v=(0,o.getSetting)("forcedBillingAddress",!1);return{shippingAddress:p,billingAddress:d,setShippingAddress:f,setBillingAddress:u,setEmail:h,setBillingPhone:m,setShippingPhone:g,defaultAddressFields:o.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:c,needsShipping:e,showShippingFields:!v&&e&&!n,showShippingMethods:e&&!n,showBillingFields:!e||!t||n,forcedBillingAddress:v,useBillingAsShipping:v||n}}},7844:(e,t,n)=>{"use strict";n.d(t,{L:()=>s});var o=n(9818),r=n(4801);const s=()=>{const{customerData:e,isInitialized:t}=(0,o.useSelect)((e=>{const t=e(r.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}})),{setShippingAddress:n,setBillingAddress:s}=(0,o.useDispatch)(r.CART_STORE_KEY);return{isInitialized:t,billingAddress:e.billingAddress,shippingAddress:e.shippingAddress,setBillingAddress:s,setShippingAddress:n}}},9075:(e,t,n)=>{"use strict";n.d(t,{s:()=>i});var o=n(9307),r=n(9127),s=n.n(r);function i(e){const t=(0,o.useRef)(e);return s()(e,t.current)||(t.current=e),t.current}},1106:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(9307),r=n(5736),s=n(5271);n(5362);const i=({address:e,onEdit:t,target:n,showPhoneField:i})=>(0,o.createElement)("div",{className:"wc-block-components-address-card"},(0,o.createElement)("address",null,(0,o.createElement)("span",{className:"wc-block-components-address-card__address-section"},e.first_name+" "+e.last_name),(0,o.createElement)("div",{className:"wc-block-components-address-card__address-section"},[e.address_1,e.address_2,e.city,e.state,e.postcode,s.DK[e.country]?s.DK[e.country]:e.country].filter((e=>!!e)).map(((e,t)=>(0,o.createElement)("span",{key:"address-"+t},e)))),e.phone&&i?(0,o.createElement)("div",{key:"address-phone",className:"wc-block-components-address-card__address-section"},e.phone):""),t&&(0,o.createElement)("a",{role:"button",href:"#"+n,className:"wc-block-components-address-card__edit","aria-label":(0,r.__)("Edit address","woo-gutenberg-products-block"),onClick:e=>{t(),e.preventDefault()}},(0,r.__)("Edit","woo-gutenberg-products-block")))},4660:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(9307),r=n(4184),s=n.n(r);n(1741);const i=({isEditing:e=!1,addressCard:t,addressForm:n})=>{const r=s()("wc-block-components-address-address-wrapper",{"is-editing":e});return(0,o.createElement)("div",{className:r},(0,o.createElement)("div",{className:"wc-block-components-address-card-wrapper"},t()),(0,o.createElement)("div",{className:"wc-block-components-address-form-wrapper"},n()))}},9490:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(5736);const r=({defaultTitle:e=(0,o.__)("Step","woo-gutenberg-products-block"),defaultDescription:t=(0,o.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:n=!0})=>({title:{type:"string",default:e},description:{type:"string",default:t},showStepNumber:{type:"boolean",default:n}})},3014:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var o=n(9307),r=n(4184),s=n.n(r),i=n(721),l=n(711),a=n(7277),c=n(9818),d=n(4801),u=n(3298),p=n(8832),f=n(6423),h=n(6938),m=n(3554),g=n(8082),v=n(5918),b=n(4660),E=n(3112),w=n(1106);const y=({addressFieldsConfig:e,showPhoneField:t,requirePhoneField:n,forceEditing:r=!1})=>{const{defaultAddressFields:s,billingAddress:i,setShippingAddress:l,setBillingAddress:u,setBillingPhone:p,setShippingPhone:f,useBillingAsShipping:h}=(0,a.B)(),{dispatchCheckoutEvent:m}=(0,v.n)(),y=!(!i.address_1||!i.first_name&&!i.last_name),[_,C]=(0,o.useState)(!y||r),{hasValidationErrors:k,invalidProps:S}=(0,c.useSelect)((e=>{const t=e(d.VALIDATION_STORE_KEY);return{hasValidationErrors:t.hasValidationErrors(),invalidProps:Object.keys(i).filter((e=>void 0!==t.getValidationError("billing_"+e))).filter(Boolean)}}));(0,o.useEffect)((()=>{S.length>0&&!1===_&&C(!0)}),[_,k,S.length]);const A=Object.keys(s),T=(0,o.useCallback)((e=>{u(e),h&&(l(e),m("set-shipping-address")),m("set-billing-address")}),[m,u,l,h]),I=(0,o.useCallback)((()=>(0,o.createElement)(w.Z,{address:i,target:"billing",onEdit:()=>{C(!0)},showPhoneField:t})),[i,t]),L=(0,o.useCallback)((()=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)(g.k,{id:"billing",type:"billing",onChange:T,values:i,fields:A,fieldConfig:e}),t&&(0,o.createElement)(E.Z,{id:"billing-phone",errorId:"billing_phone",isRequired:n,value:i.phone,onChange:e=>{p(e),m("set-phone-number",{step:"billing"}),h&&(f(e),m("set-phone-number",{step:"billing"}))}}))),[A,e,i,m,T,n,p,f,t,h]);return(0,o.createElement)(b.Z,{isEditing:_,addressCard:I,addressForm:L})},_=({showCompanyField:e=!1,showApartmentField:t=!1,showPhoneField:n=!1,requireCompanyField:r=!1,requirePhoneField:s=!1,forceEditing:i=!1})=>{const{billingAddress:l,setShippingAddress:g,useBillingAsShipping:v}=(0,a.B)(),{isEditor:b}=(0,p._)();(0,u.qR)((()=>{if(v){const{email:t,...o}=l,r={...o};n||delete r.phone,e&&delete r.company,g(r)}}));const E=(0,o.useMemo)((()=>({company:{hidden:!e,required:r},address_2:{hidden:!t}})),[e,r,t]),w=b?h.Z:o.Fragment,_=v?[f.n7.BILLING_ADDRESS,f.n7.SHIPPING_ADDRESS]:[f.n7.BILLING_ADDRESS],{cartDataLoaded:C}=(0,c.useSelect)((e=>({cartDataLoaded:e(d.CART_STORE_KEY).hasFinishedResolution("getCartData")})));return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(m.StoreNoticesContainer,{context:_}),(0,o.createElement)(w,null,C?(0,o.createElement)(y,{addressFieldsConfig:E,showPhoneField:n,requirePhoneField:s,forceEditing:i}):null))};var C=n(9490),k=n(5736);const S=(0,k.__)("Billing address","woo-gutenberg-products-block"),A=(0,k.__)("Enter the billing address that matches your payment method.","woo-gutenberg-products-block"),T=(0,k.__)("Billing and shipping address","woo-gutenberg-products-block"),I=(0,k.__)("Enter the billing and shipping address that matches your payment method.","woo-gutenberg-products-block"),L={...(0,C.Z)({defaultTitle:S,defaultDescription:A}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}};var F=n(1141);const O=(0,i.withFilteredAttributes)(L)((({title:e,description:t,showStepNumber:n,children:r,className:i})=>{const u=(0,c.useSelect)((e=>e(d.CHECKOUT_STORE_KEY).isProcessing())),{requireCompanyField:p,requirePhoneField:f,showApartmentField:h,showCompanyField:m,showPhoneField:g}=(0,F.s4)(),{showBillingFields:v,forcedBillingAddress:b,useBillingAsShipping:E,useShippingAsBilling:w}=(0,a.B)(),y=(0,o.useRef)(w);return(0,o.useEffect)((()=>{w&&(y.current=!0)}),[w]),v||E?(e=((e,t)=>t?e===S?T:e:e===T?S:e)(e,b),t=((e,t)=>t?e===A?I:e:e===I?A:e)(t,b),(0,o.createElement)(l.FormStep,{id:"billing-fields",disabled:u,className:s()("wc-block-checkout__billing-fields",i),title:e,description:t,showStepNumber:n},(0,o.createElement)(_,{requireCompanyField:p,showApartmentField:h,showCompanyField:m,showPhoneField:g,requirePhoneField:f,forceEditing:y.current}),r)):null}))},3112:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(9307),r=n(5736),s=n(3554);const i=({id:e="phone",errorId:t="phone",isRequired:n=!1,value:i="",onChange:l})=>(0,o.createElement)(s.ValidatedTextInput,{id:e,errorId:t,type:"tel",autoComplete:"tel",required:n,label:n?(0,r.__)("Phone","woo-gutenberg-products-block"):(0,r.__)("Phone (optional)","woo-gutenberg-products-block"),value:i,onChange:l})},9010:(e,t,n)=>{"use strict";var o=n(4657);e.exports=function(e,t,n){n=n||{},9===t.nodeType&&(t=o.getWindow(t));var r=n.allowHorizontalScroll,s=n.onlyScrollIfNeeded,i=n.alignWithTop,l=n.alignWithLeft,a=n.offsetTop||0,c=n.offsetLeft||0,d=n.offsetBottom||0,u=n.offsetRight||0;r=void 0===r||r;var p=o.isWindow(t),f=o.offset(e),h=o.outerHeight(e),m=o.outerWidth(e),g=void 0,v=void 0,b=void 0,E=void 0,w=void 0,y=void 0,_=void 0,C=void 0,k=void 0,S=void 0;p?(_=t,S=o.height(_),k=o.width(_),C={left:o.scrollLeft(_),top:o.scrollTop(_)},w={left:f.left-C.left-c,top:f.top-C.top-a},y={left:f.left+m-(C.left+k)+u,top:f.top+h-(C.top+S)+d},E=C):(g=o.offset(t),v=t.clientHeight,b=t.clientWidth,E={left:t.scrollLeft,top:t.scrollTop},w={left:f.left-(g.left+(parseFloat(o.css(t,"borderLeftWidth"))||0))-c,top:f.top-(g.top+(parseFloat(o.css(t,"borderTopWidth"))||0))-a},y={left:f.left+m-(g.left+b+(parseFloat(o.css(t,"borderRightWidth"))||0))+u,top:f.top+h-(g.top+v+(parseFloat(o.css(t,"borderBottomWidth"))||0))+d}),w.top<0||y.top>0?!0===i?o.scrollTop(t,E.top+w.top):!1===i?o.scrollTop(t,E.top+y.top):w.top<0?o.scrollTop(t,E.top+w.top):o.scrollTop(t,E.top+y.top):s||((i=void 0===i||!!i)?o.scrollTop(t,E.top+w.top):o.scrollTop(t,E.top+y.top)),r&&(w.left<0||y.left>0?!0===l?o.scrollLeft(t,E.left+w.left):!1===l?o.scrollLeft(t,E.left+y.left):w.left<0?o.scrollLeft(t,E.left+w.left):o.scrollLeft(t,E.left+y.left):s||((l=void 0===l||!!l)?o.scrollLeft(t,E.left+w.left):o.scrollLeft(t,E.left+y.left)))}},4979:(e,t,n)=>{"use strict";e.exports=n(9010)},4657:e=>{"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function o(e,t){var n=e["page"+(t?"Y":"X")+"Offset"],o="scroll"+(t?"Top":"Left");if("number"!=typeof n){var r=e.document;"number"!=typeof(n=r.documentElement[o])&&(n=r.body[o])}return n}function r(e){return o(e)}function s(e){return o(e,!0)}function i(e){var t=function(e){var t,n=void 0,o=void 0,r=e.ownerDocument,s=r.body,i=r&&r.documentElement;return n=(t=e.getBoundingClientRect()).left,o=t.top,{left:n-=i.clientLeft||s.clientLeft||0,top:o-=i.clientTop||s.clientTop||0}}(e),n=e.ownerDocument,o=n.defaultView||n.parentWindow;return t.left+=r(o),t.top+=s(o),t}var l=new RegExp("^("+/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source+")(?!px)[a-z%]+$","i"),a=/^(top|right|bottom|left)$/,c="currentStyle",d="runtimeStyle",u="left",p=void 0;function f(e,t){for(var n=0;n<e.length;n++)t(e[n])}function h(e){return"border-box"===p(e,"boxSizing")}"undefined"!=typeof window&&(p=window.getComputedStyle?function(e,t,n){var o="",r=e.ownerDocument,s=n||r.defaultView.getComputedStyle(e,null);return s&&(o=s.getPropertyValue(t)||s[t]),o}:function(e,t){var n=e[c]&&e[c][t];if(l.test(n)&&!a.test(t)){var o=e.style,r=o[u],s=e[d][u];e[d][u]=e[c][u],o[u]="fontSize"===t?"1em":n||0,n=o.pixelLeft+"px",o[u]=r,e[d][u]=s}return""===n?"auto":n});var m=["margin","border","padding"],g=-1,v=2,b=1;function E(e,t,n){var o=0,r=void 0,s=void 0,i=void 0;for(s=0;s<t.length;s++)if(r=t[s])for(i=0;i<n.length;i++){var l;l="border"===r?r+n[i]+"Width":r+n[i],o+=parseFloat(p(e,l))||0}return o}function w(e){return null!=e&&e==e.window}var y={};function _(e,t,n){if(w(e))return"width"===t?y.viewportWidth(e):y.viewportHeight(e);if(9===e.nodeType)return"width"===t?y.docWidth(e):y.docHeight(e);var o="width"===t?["Left","Right"]:["Top","Bottom"],r="width"===t?e.offsetWidth:e.offsetHeight,s=(p(e),h(e)),i=0;(null==r||r<=0)&&(r=void 0,(null==(i=p(e,t))||Number(i)<0)&&(i=e.style[t]||0),i=parseFloat(i)||0),void 0===n&&(n=s?b:g);var l=void 0!==r||s,a=r||i;if(n===g)return l?a-E(e,["border","padding"],o):i;if(l){var c=n===v?-E(e,["border"],o):E(e,["margin"],o);return a+(n===b?0:c)}return i+E(e,m.slice(n),o)}f(["Width","Height"],(function(e){y["doc"+e]=function(t){var n=t.document;return Math.max(n.documentElement["scroll"+e],n.body["scroll"+e],y["viewport"+e](n))},y["viewport"+e]=function(t){var n="client"+e,o=t.document,r=o.body,s=o.documentElement[n];return"CSS1Compat"===o.compatMode&&s||r&&r[n]||s}}));var C={position:"absolute",visibility:"hidden",display:"block"};function k(e){var t=void 0,n=arguments;return 0!==e.offsetWidth?t=_.apply(void 0,n):function(e,o,r){var s={},i=e.style,l=void 0;for(l in o)o.hasOwnProperty(l)&&(s[l]=i[l],i[l]=o[l]);for(l in function(){t=_.apply(void 0,n)}.call(e),o)o.hasOwnProperty(l)&&(i[l]=s[l])}(e,C),t}function S(e,t,o){var r=o;if("object"!==(void 0===t?"undefined":n(t)))return void 0!==r?("number"==typeof r&&(r+="px"),void(e.style[t]=r)):p(e,t);for(var s in t)t.hasOwnProperty(s)&&S(e,s,t[s])}f(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);y["outer"+t]=function(t,n){return t&&k(t,e,n?0:b)};var n="width"===e?["Left","Right"]:["Top","Bottom"];y[e]=function(t,o){return void 0===o?t&&k(t,e,g):t?(p(t),h(t)&&(o+=E(t,["padding","border"],n)),S(t,e,o)):void 0}})),e.exports=t({getWindow:function(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},offset:function(e,t){if(void 0===t)return i(e);!function(e,t){"static"===S(e,"position")&&(e.style.position="relative");var n=i(e),o={},r=void 0,s=void 0;for(s in t)t.hasOwnProperty(s)&&(r=parseFloat(S(e,s))||0,o[s]=r+t[s]-n[s]);S(e,o)}(e,t)},isWindow:w,each:f,css:S,clone:function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);if(e.overflow)for(var n in e)e.hasOwnProperty(n)&&(t.overflow[n]=e.overflow[n]);return t},scrollLeft:function(e,t){if(w(e)){if(void 0===t)return r(e);window.scrollTo(t,s(e))}else{if(void 0===t)return e.scrollLeft;e.scrollLeft=t}},scrollTop:function(e,t){if(w(e)){if(void 0===t)return s(e);window.scrollTo(r(e),t)}else{if(void 0===t)return e.scrollTop;e.scrollTop=t}},viewportWidth:0,viewportHeight:0},y)},5821:()=>{},7775:()=>{},8410:()=>{},5362:()=>{},1741:()=>{},3298:(e,t,n)=>{"use strict";n.d(t,{qR:()=>r});var o=n(9196);const r=function(e){(0,o.useEffect)(e,[])};"undefined"!=typeof window?o.useLayoutEffect:o.useEffect},3620:(e,t,n)=>{"use strict";n.d(t,{Iq:()=>l});var o=n(2819),r=n(9307),s=(n(2560),n(1765)),i=n(1282);function l(e,t,n={}){const{memo:l=!1}=n;let a=(0,r.forwardRef)(e);l&&(a=(0,r.memo)(a)),void 0===t&&"undefined"!=typeof process&&process.env;let c=a[s.rE]||[t];return Array.isArray(t)&&(c=[...c,...t]),"string"==typeof t&&(c=[...c,t]),a.displayName=t,a[s.rE]=(0,o.uniq)(c),a.selector=`.${(0,i.l)(t)}`,a}}}]);