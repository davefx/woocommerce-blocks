(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[22],{107:function(e,t,r){"use strict";var s=r(3),c=r(1),n=r(84),o=r(113),a=r(17);const i=e=>{const t={};return void 0!==e.label&&(t.label=e.label),void 0!==e.required&&(t.required=e.required),void 0!==e.hidden&&(t.hidden=e.hidden),void 0===e.label||e.optionalLabel||(t.optionalLabel=Object(c.sprintf)(/* translators: %s Field label. */
Object(c.__)("%s (optional)","woo-gutenberg-products-block"),e.label)),e.priority&&(Object(n.a)(e.priority)&&(t.index=e.priority),Object(o.a)(e.priority)&&(t.index=parseInt(e.priority,10))),e.hidden&&(t.required=!1),t},u=Object.entries(a.f).map((([e,t])=>[e,Object.entries(t).map((([e,t])=>[e,i(t)])).reduce(((e,[t,r])=>(e[t]=r,e)),{})])).reduce(((e,[t,r])=>(e[t]=r,e)),{});t.a=(e,t,r="")=>{const c=r&&void 0!==u[r]?u[r]:{};return e.map((e=>({key:e,...s.defaultAddressFields[e]||{},...c[e]||{},...t[e]||{}}))).sort(((e,t)=>e.index-t.index))}},109:function(e,t,r){"use strict";var s=r(0);r(185),t.a=()=>Object(s.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},111:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return o}));let s=function(e){return e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback",e}({});const c={addEventCallback:(e,t,r=10)=>({id:Math.floor(Math.random()*Date.now()).toString(),type:s.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:r}),removeEventCallback:(e,t)=>({id:t,type:s.REMOVE_EVENT_CALLBACK,eventType:e})},n={},o=(e=n,{type:t,eventType:r,id:c,callback:o,priority:a})=>{const i=e.hasOwnProperty(r)?new Map(e[r]):new Map;switch(t){case s.ADD_EVENT_CALLBACK:return i.set(c,{priority:a,callback:o}),{...e,[r]:i};case s.REMOVE_EVENT_CALLBACK:return i.delete(c),{...e,[r]:i}}}},184:function(e,t){},185:function(e,t){},282:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));const s=window.CustomEvent||null,c=(e,{bubbles:t=!1,cancelable:r=!1,element:c,detail:n={}})=>{if(!s)return;c||(c=document.body);const o=new s(e,{bubbles:t,cancelable:r,detail:n});c.dispatchEvent(o)},n=({preserveCartData:e=!1})=>{c("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:e}})},o=(e,t,r=!1,s=!1)=>{if("function"!=typeof jQuery)return()=>{};const n=()=>{c(t,{bubbles:r,cancelable:s})};return jQuery(document).on(e,n),()=>jQuery(document).off(e,n)}},283:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return u}));var s=r(107),c=(r(15),r(3)),n=r(10),o=r(17);const a=e=>{const t=Object.keys(c.defaultAddressFields),r=Object(s.a)(t,{},e.country),n=Object.assign({},e);return r.forEach((({key:t="",hidden:r=!1})=>{r&&((e,t)=>e in t)(t,e)&&(n[t]="")})),n},i=e=>{if(0===Object.values(e).length)return null;const t="string"==typeof o.i[e.country]?Object(n.decodeEntities)(o.i[e.country]):"",r="object"==typeof o.j[e.country]&&"string"==typeof o.j[e.country][e.state]?Object(n.decodeEntities)(o.j[e.country][e.state]):e.state,s=[];s.push(e.postcode.toUpperCase()),s.push(e.city),s.push(r),s.push(t);return s.filter(Boolean).join(", ")||null},u=e=>!!e.city&&!!e.country},285:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var s=r(111);const c=(e,t)=>(r,c=10)=>{const n=s.a.addEventCallback(e,r,c);return t(n),()=>{t(s.a.removeEventCallback(e,n.id))}}},288:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(0),c=r(6),n=r(8),o=r(10),a=r(59);const i=(e,t)=>{const r=e.find((({id:e})=>e===t));return r?r.quantity:0},u=e=>{const{addItemToCart:t}=Object(c.useDispatch)(n.CART_STORE_KEY),{cartItems:r,cartIsLoading:u}=Object(a.a)(),{createErrorNotice:l,removeNotice:d}=Object(c.useDispatch)("core/notices"),[b,p]=Object(s.useState)(!1),E=Object(s.useRef)(i(r,e));return Object(s.useEffect)((()=>{const t=i(r,e);t!==E.current&&(E.current=t)}),[r,e]),{cartQuantity:Number.isFinite(E.current)?E.current:0,addingToCart:b,cartIsLoading:u,addToCart:(r=1)=>(p(!0),t(e,r).then((()=>{d("add-to-cart")})).catch((e=>{l(Object(o.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})})).finally((()=>{p(!1)})))}}},351:function(e,t){},354:function(e,t,r){"use strict";t.a={showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}}},355:function(e,t,r){"use strict";var s=r(0),c=r(4),n=r.n(c),o=r(1),a=r(47),i=r(602),u=r(6),l=r(8);const d={PRISTINE:"pristine",IDLE:"idle",DISABLED:"disabled",PROCESSING:"processing",BEFORE_PROCESSING:"before_processing",AFTER_PROCESSING:"after_processing"},b={status:d.PRISTINE,hasError:!1,quantity:0,processingResponse:null,requestParams:{}},p={SET_PRISTINE:"set_pristine",SET_IDLE:"set_idle",SET_DISABLED:"set_disabled",SET_PROCESSING:"set_processing",SET_BEFORE_PROCESSING:"set_before_processing",SET_AFTER_PROCESSING:"set_after_processing",SET_PROCESSING_RESPONSE:"set_processing_response",SET_HAS_ERROR:"set_has_error",SET_NO_ERROR:"set_no_error",SET_QUANTITY:"set_quantity",SET_REQUEST_PARAMS:"set_request_params"},{SET_PRISTINE:E,SET_IDLE:m,SET_DISABLED:_,SET_PROCESSING:O,SET_BEFORE_PROCESSING:h,SET_AFTER_PROCESSING:S,SET_PROCESSING_RESPONSE:f,SET_HAS_ERROR:j,SET_NO_ERROR:g,SET_QUANTITY:v,SET_REQUEST_PARAMS:R}=p,C=()=>({type:m}),T=(e=!0)=>({type:e?j:g}),{SET_PRISTINE:y,SET_IDLE:w,SET_DISABLED:P,SET_PROCESSING:A,SET_BEFORE_PROCESSING:I,SET_AFTER_PROCESSING:N,SET_PROCESSING_RESPONSE:k,SET_HAS_ERROR:D,SET_NO_ERROR:L,SET_QUANTITY:F,SET_REQUEST_PARAMS:M}=p,{PRISTINE:x,IDLE:B,DISABLED:q,PROCESSING:Y,BEFORE_PROCESSING:G,AFTER_PROCESSING:V}=d,Q=(e=b,{quantity:t,type:r,data:s})=>{let c;switch(r){case y:c=b;break;case w:c=e.status!==B?{...e,status:B}:e;break;case P:c=e.status!==q?{...e,status:q}:e;break;case F:c=t!==e.quantity?{...e,quantity:t}:e;break;case M:c={...e,requestParams:{...e.requestParams,...s}};break;case k:c={...e,processingResponse:s};break;case A:c=e.status!==Y?{...e,status:Y,hasError:!1}:e,c=!1===c.hasError?c:{...c,hasError:!1};break;case I:c=e.status!==G?{...e,status:G,hasError:!1}:e;break;case N:c=e.status!==V?{...e,status:V}:e;break;case D:c=e.hasError?e:{...e,hasError:!0},c=e.status===Y||e.status===G?{...c,status:B}:c;break;case L:c=e.hasError?{...e,hasError:!1}:e}return c!==e&&r!==y&&c.status===x&&(c.status=B),c};var H=r(111),K=r(285);const W="add_to_cart_before_processing",U="add_to_cart_after_processing_with_success",$="add_to_cart_after_processing_with_error",X=e=>({onAddToCartAfterProcessingWithSuccess:Object(K.a)(U,e),onAddToCartProcessingWithError:Object(K.a)($,e),onAddToCartBeforeProcessing:Object(K.a)(W,e)});var J=r(356),z=r(68);const Z=Object(s.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:e=>{},onAddToCartAfterProcessingWithError:e=>{},onAddToCartBeforeProcessing:e=>{}},dispatchActions:{resetForm:()=>{},submitForm:()=>{},setQuantity:e=>{},setHasError:e=>{},setAfterProcessing:e=>{},setRequestParams:e=>{}}}),ee=()=>Object(s.useContext)(Z),te=({children:e,product:t,showFormElements:r})=>{var c,n,p,m;const[j,g]=Object(s.useReducer)(Q,b),[y,w]=Object(s.useReducer)(H.b,{}),P=Object(a.a)(y),{createErrorNotice:A}=Object(u.useDispatch)("core/notices"),{setValidationErrors:I}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),N=Object(s.useMemo)((()=>({onAddToCartAfterProcessingWithSuccess:X(w).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:X(w).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:X(w).onAddToCartBeforeProcessing})),[w]),k=Object(s.useMemo)((()=>({resetForm:()=>{g({type:E})},submitForm:()=>{g({type:h})},setQuantity:e=>{g((e=>({type:v,quantity:e}))(e))},setHasError:e=>{g(T(e))},setRequestParams:e=>{g((e=>({type:R,data:e}))(e))},setAfterProcessing:e=>{g({type:f,data:e}),g({type:S})}})),[]);Object(s.useEffect)((()=>{const e=j.status,r=!t.id||!Object(i.a)(t);e!==d.DISABLED||r?e!==d.DISABLED&&r&&g({type:_}):g(C())}),[j.status,t,g]),Object(s.useEffect)((()=>{j.status===d.BEFORE_PROCESSING&&(((e,t)=>{const r=Object(u.select)("core/notices").getNotices(t),{removeNotice:s}=Object(u.dispatch)("core/notices");r.filter((e=>"error"===e.status)).forEach((e=>s(e.id,t)))})(0,"wc/add-to-cart"),Object(J.a)(P,W,{}).then((e=>{!0!==e?(Array.isArray(e)&&e.forEach((({errorMessage:e,validationErrors:t})=>{e&&A(e,{context:"wc/add-to-cart"}),t&&I(t)})),g(C())):g({type:O})})))}),[j.status,I,A,g,P,null==t?void 0:t.id]),Object(s.useEffect)((()=>{if(j.status===d.AFTER_PROCESSING){const e={processingResponse:j.processingResponse},r=e=>{let t=!1;return e.forEach((e=>{const{message:r,messageContext:s}=e;(Object(z.b)(e)||Object(z.c)(e))&&r&&(t=!0,A(r,s?{context:s}:void 0))})),t};if(j.hasError)return void Object(J.b)(P,$,e).then((s=>{if(!r(s)){var c;const r=(null===(c=e.processingResponse)||void 0===c?void 0:c.message)||Object(o.__)("Something went wrong. Please contact us for assistance.","woo-gutenberg-products-block");A(r,{id:"add-to-cart",context:`woocommerce/single-product/${(null==t?void 0:t.id)||0}`})}g(C())}));Object(J.b)(P,U,e).then((e=>{r(e)?g(T(!0)):g(C())}))}}),[j.status,j.hasError,j.processingResponse,k,A,P,null==t?void 0:t.id]);const D=Object(i.b)(t),L={product:t,productType:t.type||"simple",productIsPurchasable:Object(i.a)(t),productHasOptions:t.has_options||!1,supportsFormElements:D,showFormElements:r&&D,quantity:j.quantity||(null==t||null===(c=t.add_to_cart)||void 0===c?void 0:c.minimum)||1,minQuantity:(null==t||null===(n=t.add_to_cart)||void 0===n?void 0:n.minimum)||1,maxQuantity:(null==t||null===(p=t.add_to_cart)||void 0===p?void 0:p.maximum)||99,multipleOf:(null==t||null===(m=t.add_to_cart)||void 0===m?void 0:m.multiple_of)||1,requestParams:j.requestParams,isIdle:j.status===d.IDLE,isDisabled:j.status===d.DISABLED,isProcessing:j.status===d.PROCESSING,isBeforeProcessing:j.status===d.BEFORE_PROCESSING,isAfterProcessing:j.status===d.AFTER_PROCESSING,hasError:j.hasError,eventRegistration:N,dispatchActions:k};return Object(s.createElement)(Z.Provider,{value:L},e)};var re=r(14),se=r.n(re),ce=r(10),ne=r(282),oe=r(59),ae=()=>{const{dispatchActions:e,product:t,quantity:r,eventRegistration:c,hasError:n,isProcessing:a,requestParams:i}=ee(),{showAllValidationErrors:d}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),b=Object(u.useSelect)((e=>e(l.VALIDATION_STORE_KEY).hasValidationErrors)),{createErrorNotice:p,removeNotice:E}=Object(u.useDispatch)("core/notices"),{receiveCart:m}=Object(oe.a)(),[_,O]=Object(s.useState)(!1),h=!n&&a,S=Object(s.useCallback)((()=>!b()||(d(),{type:"error"})),[b,d]);Object(s.useEffect)((()=>{const e=c.onAddToCartBeforeProcessing(S,0);return()=>{e()}}),[c,S]);const f=Object(s.useCallback)((()=>{O(!0),E("add-to-cart",`woocommerce/single-product/${(null==t?void 0:t.id)||0}`);const s={id:t.id||0,quantity:r,...i};se()({path:"/wc/store/v1/cart/add-item",method:"POST",data:s,cache:"no-store",parse:!1}).then((r=>{se.a.setNonce(r.headers),r.json().then((function(s){r.ok?m(s):(s.body&&s.body.message?p(Object(ce.decodeEntities)(s.body.message),{id:"add-to-cart",context:`woocommerce/single-product/${(null==t?void 0:t.id)||0}`}):p(Object(o.__)("Something went wrong. Please contact us for assistance.","woo-gutenberg-products-block"),{id:"add-to-cart",context:`woocommerce/single-product/${(null==t?void 0:t.id)||0}`}),e.setHasError()),Object(ne.b)({preserveCartData:!0}),e.setAfterProcessing(s),O(!1)}))})).catch((t=>{t.json().then((function(t){var r;null!==(r=t.data)&&void 0!==r&&r.cart&&m(t.data.cart),e.setHasError(),e.setAfterProcessing(t),O(!1)}))}))}),[t,p,E,m,e,r,i]);return Object(s.useEffect)((()=>{h&&!_&&f()}),[h,f,_]),null};const ie=({children:e,product:t,showFormElements:r})=>Object(s.createElement)(te,{product:t,showFormElements:r},e,Object(s.createElement)(ae,null));var ue=r(24),le=r(260),de=r(48),be=(r(351),r(71)),pe=r(70),Ee=r(623),me=r(97),_e=r(288);const Oe=({className:e,href:t,text:r,onClick:c})=>Object(s.createElement)(be.a,{className:e,href:t,onClick:c,rel:"nofollow"},r),he=({className:e,quantityInCart:t,isProcessing:r,isDisabled:c,isDone:n,onClick:a})=>Object(s.createElement)(be.a,{className:e,disabled:c,showSpinner:r,onClick:a},n&&t>0?Object(o.sprintf)(/* translators: %s number of products in cart. */
Object(o._n)("%d in cart","%d in cart",t,"woo-gutenberg-products-block"),t):Object(o.__)("Add to cart","woo-gutenberg-products-block"),!!n&&Object(s.createElement)(pe.a,{icon:Ee.a}));var Se=()=>{const{showFormElements:e,productIsPurchasable:t,productHasOptions:r,product:c,productType:n,isDisabled:a,isProcessing:i,eventRegistration:u,hasError:l,dispatchActions:d}=ee(),{parentName:b}=Object(ue.useInnerBlockLayoutContext)(),{dispatchStoreEvent:p}=Object(me.a)(),{cartQuantity:E}=Object(_e.a)(c.id||0),[m,_]=Object(s.useState)(!1),O=c.add_to_cart||{url:"",text:""};return Object(s.useEffect)((()=>{const e=u.onAddToCartAfterProcessingWithSuccess((()=>(l||_(!0),!0)),0);return()=>{e()}}),[u,l]),(e||!r&&"simple"===n)&&t?Object(s.createElement)(he,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:E,isDisabled:a,isProcessing:i,isDone:m,onClick:()=>{d.submitForm(`woocommerce/single-product/${(null==c?void 0:c.id)||0}`),p("cart-add-item",{product:c,listName:b})}}):Object(s.createElement)(Oe,{className:"wc-block-components-product-add-to-cart-button",href:O.url,text:O.text||Object(o.__)("View Product","woo-gutenberg-products-block"),onClick:()=>{p("product-view-link",{product:c,listName:b})}})},fe=r(43),je=({disabled:e,min:t,max:r,step:c=1,value:n,onChange:o})=>{const a=void 0!==r,i=Object(fe.b)((e=>{let s=e;a&&(s=Math.min(s,Math.floor(r/c)*c)),s=Math.max(s,Math.ceil(t/c)*c),s=Math.floor(s/c)*c,s!==e&&(null==o||o(s))}),300);return Object(s.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:n,min:t,max:r,step:c,hidden:1===r,disabled:e,onChange:e=>{null==o||o(e.target.value),i(Number(e.target.value))}})},ge=({reason:e=Object(o.__)("Sorry, this product cannot be purchased.","woo-gutenberg-products-block")})=>Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},e),ve=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:c,multipleOf:n,dispatchActions:a,isDisabled:i}=ee();return e.id&&!e.is_purchasable?Object(s.createElement)(ge,null):e.id&&!e.is_in_stock?Object(s.createElement)(ge,{reason:Object(o.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(s.createElement)(s.Fragment,null,Object(s.createElement)(je,{value:t,min:r,max:c,step:n,disabled:i,onChange:a.setQuantity}),Object(s.createElement)(Se,null))},Re=(r(398),r(653)),Ce=r(13);const Te={value:"",label:Object(o.__)("Select an option","woo-gutenberg-products-block")};var ye=({attributeName:e,options:t=[],value:r="",onChange:c=(()=>{}),errorMessage:a=Object(o.__)("Please select a value.","woo-gutenberg-products-block")})=>{const i=e,{setValidationErrors:d,clearValidationError:b}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),{error:p}=Object(u.useSelect)((e=>({error:e(l.VALIDATION_STORE_KEY).getValidationError(i)||{}})));return Object(s.useEffect)((()=>{r?b(i):d({[i]:{message:a,hidden:!0}})}),[r,i,a,b,d]),Object(s.useEffect)((()=>()=>{b(i)}),[i,b]),Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},Object(s.createElement)(Re.a,{label:Object(ce.decodeEntities)(e),value:r||"",options:[Te,...t],onChange:c,required:!0,className:n()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":(null==p?void 0:p.message)&&!(null!=p&&p.hidden)})}),Object(s.createElement)(Ce.ValidationInputError,{propertyName:i,elementId:i}))},we=r(21),Pe=r(57);const Ae=(e,t,r)=>{const s=Object.values(t).map((({id:e})=>e));if(Object.values(r).every((e=>""===e)))return s;const c=Object.keys(e);return s.filter((e=>c.every((s=>{const c=r[s]||"",n=t["id:"+e].attributes[s];return""===c||null===n||n===c}))))};var Ie=({attributes:e,variationAttributes:t,setRequestParams:r})=>{const c=Object(a.a)(e),n=Object(a.a)(t),[o,i]=Object(s.useState)(0),[u,l]=Object(s.useState)({}),[d,b]=Object(s.useState)(!1),p=Object(s.useMemo)((()=>((e,t,r)=>{const s={},c=Object.keys(e),n=Object.values(r).filter(Boolean).length>0;return c.forEach((c=>{const o=e[c],a={...r,[c]:null},i=n?Ae(e,t,a):null,u=null!==i?i.map((e=>t["id:"+e].attributes[c])):null;s[c]=((e,t=null)=>Object.values(e).map((({name:e,slug:r})=>null===t||t.includes(null)||t.includes(r)?{value:r,label:Object(ce.decodeEntities)(e)}:null)).filter(Boolean))(o.terms,u)})),s})(c,n,u)),[u,c,n]);return Object(s.useEffect)((()=>{if(!d){const t=(e=>Object(we.b)(e)?0===Object.keys(e).length?{}:Object.values(e).reduce(((e,t)=>{const r=t.terms.filter((e=>e.default));var s;return r.length>0&&(e[t.name]=null===(s=r[0])||void 0===s?void 0:s.slug),e}),{}):{})(e);t&&l({...t}),b(!0)}}),[u,e,d]),Object(s.useEffect)((()=>{Object.values(u).filter((e=>""!==e)).length===Object.keys(c).length?i(((e,t,r)=>Ae(e,t,r)[0]||0)(c,n,u)):o>0&&i(0)}),[u,o,c,n]),Object(s.useEffect)((()=>{r({id:o,variation:Object.keys(u).map((e=>({attribute:e,value:u[e]})))})}),[r,o,u]),Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(c).map((e=>Object(s.createElement)(ye,{key:e,attributeName:e,options:p[e].filter(Boolean),value:u[e],onChange:t=>{l({...u,[e]:t})}}))))},Ne=({dispatchers:e,product:t})=>{const r=(e=>e?Object(Pe.a)(Object.values(e).filter((({has_variations:e})=>e)),"name"):{})(t.attributes),c=(e=>{if(!e)return{};const t={};return e.forEach((({id:e,attributes:r})=>{t[`id:${e}`]={id:e,attributes:r.reduce(((e,{name:t,value:r})=>(e[t]=r,e)),{})}})),t})(t.variations);return 0===Object.keys(r).length||0===Object.keys(c).length?null:Object(s.createElement)(Ie,{attributes:r,variationAttributes:c,setRequestParams:e.setRequestParams})},ke=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:c,multipleOf:n,dispatchActions:a,isDisabled:i}=ee();return e.id&&!e.is_purchasable?Object(s.createElement)(ge,null):e.id&&!e.is_in_stock?Object(s.createElement)(ge,{reason:Object(o.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(s.createElement)(s.Fragment,null,Object(s.createElement)(Ne,{product:e,dispatchers:a}),Object(s.createElement)(je,{value:t,min:r,max:c,step:n,disabled:i,onChange:a.setQuantity}),Object(s.createElement)(Se,null))},De=()=>Object(s.createElement)(Se,null),Le=()=>Object(s.createElement)("p",null,"This is a placeholder for the grouped products form element.");const Fe=()=>{const{showFormElements:e,productType:t}=ee();return e?"variable"===t?Object(s.createElement)(ke,null):"grouped"===t?Object(s.createElement)(Le,null):"external"===t?Object(s.createElement)(De,null):"simple"===t||"variation"===t?Object(s.createElement)(ve,null):null:Object(s.createElement)(Se,null)};t.a=Object(de.withProductDataContext)((({className:e,showFormElements:t})=>{const{product:r}=Object(ue.useProductDataContext)(),c=n()(e,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(le.a)(r)});return Object(s.createElement)(ie,{product:r,showFormElements:t},Object(s.createElement)("div",{className:c},Object(s.createElement)(Fe,null)))}))},356:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var s=r(68),c=r(21);const n=e=>Object(c.b)(e)&&Object(c.c)(e,"type"),o=async(e,t,r)=>{const c=Object(s.a)(e,t),n=[];for(const e of c)try{const t=await Promise.resolve(e.callback(r));"object"==typeof t&&n.push(t)}catch(e){console.error(e)}return!n.length||n},a=async(e,t,r)=>{const c=[],o=Object(s.a)(e,t);for(const e of o)try{const t=await Promise.resolve(e.callback(r));if(!n(t))continue;if(!t.hasOwnProperty("type"))throw new Error("Returned objects from event emitter observers must return an object with a type property");if(Object(s.b)(t)||Object(s.c)(t))return c.push(t),c;c.push(t)}catch(e){return console.error(e),c.push({type:s.e.ERROR}),c}return c}},398:function(e,t){},47:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var s=r(0),c=r(25),n=r.n(c);function o(e){const t=Object(s.useRef)(e);return n()(e,t.current)||(t.current=e),t.current}},59:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var s=r(116),c=r.n(s),n=r(0),o=r(8),a=r(6),i=r(10),u=r(283),l=r(95);var d=r(282);const b=e=>{const t=null==e?void 0:e.detail;t&&t.preserveCartData||Object(a.dispatch)(o.CART_STORE_KEY).invalidateResolutionForStore()},p=e=>{(null!=e&&e.persisted||"back_forward"===(window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:""))&&Object(a.dispatch)(o.CART_STORE_KEY).invalidateResolutionForStore()},E=()=>{1===window.wcBlocksStoreCartListeners.count&&window.wcBlocksStoreCartListeners.remove(),window.wcBlocksStoreCartListeners.count--},m={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},_={...m,email:""},O={total_items:"",total_items_tax:"",total_fees:"",total_fees_tax:"",total_discount:"",total_discount_tax:"",total_shipping:"",total_shipping_tax:"",total_price:"",total_tax:"",tax_lines:o.EMPTY_TAX_LINES,currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:"",currency_thousand_separator:"",currency_prefix:"",currency_suffix:""},h=e=>Object.fromEntries(Object.entries(e).map((([e,t])=>[e,Object(i.decodeEntities)(t)]))),S={cartCoupons:o.EMPTY_CART_COUPONS,cartItems:o.EMPTY_CART_ITEMS,cartFees:o.EMPTY_CART_FEES,cartItemsCount:0,cartItemsWeight:0,crossSellsProducts:o.EMPTY_CART_CROSS_SELLS,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:o.EMPTY_CART_ITEM_ERRORS,cartTotals:O,cartIsLoading:!0,cartErrors:o.EMPTY_CART_ERRORS,billingAddress:_,shippingAddress:m,shippingRates:o.EMPTY_SHIPPING_RATES,isLoadingRates:!1,cartHasCalculatedShipping:!1,paymentMethods:o.EMPTY_PAYMENT_METHODS,paymentRequirements:o.EMPTY_PAYMENT_REQUIREMENTS,receiveCart:()=>{},receiveCartContents:()=>{},extensions:o.EMPTY_EXTENSIONS},f=(e={shouldSelect:!0})=>{const{isEditor:t,previewData:r}=Object(l.b)(),s=null==r?void 0:r.previewCart,{shouldSelect:i}=e,O=Object(n.useRef)();Object(n.useEffect)((()=>((()=>{if(window.wcBlocksStoreCartListeners||(window.wcBlocksStoreCartListeners={count:0,remove:()=>{}}),(null===(e=window.wcBlocksStoreCartListeners)||void 0===e?void 0:e.count)>0)return void window.wcBlocksStoreCartListeners.count++;var e;document.body.addEventListener("wc-blocks_added_to_cart",b),document.body.addEventListener("wc-blocks_removed_from_cart",b),window.addEventListener("pageshow",p);const t=Object(d.a)("added_to_cart","wc-blocks_added_to_cart"),r=Object(d.a)("removed_from_cart","wc-blocks_removed_from_cart");window.wcBlocksStoreCartListeners.count=1,window.wcBlocksStoreCartListeners.remove=()=>{document.body.removeEventListener("wc-blocks_added_to_cart",b),document.body.removeEventListener("wc-blocks_removed_from_cart",b),window.removeEventListener("pageshow",p),t(),r()}})(),E)),[]);const f=Object(a.useSelect)(((e,{dispatch:r})=>{if(!i)return S;if(t)return{cartCoupons:s.coupons,cartItems:s.items,crossSellsProducts:s.cross_sells,cartFees:s.fees,cartItemsCount:s.items_count,cartItemsWeight:s.items_weight,cartNeedsPayment:s.needs_payment,cartNeedsShipping:s.needs_shipping,cartItemErrors:o.EMPTY_CART_ITEM_ERRORS,cartTotals:s.totals,cartIsLoading:!1,cartErrors:o.EMPTY_CART_ERRORS,billingData:_,billingAddress:_,shippingAddress:m,extensions:o.EMPTY_EXTENSIONS,shippingRates:s.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:s.has_calculated_shipping,paymentRequirements:s.paymentRequirements,receiveCart:"function"==typeof(null==s?void 0:s.receiveCart)?s.receiveCart:()=>{},receiveCartContents:"function"==typeof(null==s?void 0:s.receiveCartContents)?s.receiveCartContents:()=>{}};const c=e(o.CART_STORE_KEY),n=c.getCartData(),a=c.getCartErrors(),l=c.getCartTotals(),d=!c.hasFinishedResolution("getCartData"),b=c.isCustomerDataUpdating(),{receiveCart:p,receiveCartContents:E}=r(o.CART_STORE_KEY),O=h(n.billingAddress),f=n.needsShipping?h(n.shippingAddress):O,j=n.fees.length>0?n.fees.map((e=>h(e))):o.EMPTY_CART_FEES;return{cartCoupons:n.coupons.length>0?n.coupons.map((e=>({...e,label:e.code}))):o.EMPTY_CART_COUPONS,cartItems:n.items,crossSellsProducts:n.crossSells,cartFees:j,cartItemsCount:n.itemsCount,cartItemsWeight:n.itemsWeight,cartNeedsPayment:n.needsPayment,cartNeedsShipping:n.needsShipping,cartItemErrors:n.errors,cartTotals:l,cartIsLoading:d,cartErrors:a,billingData:Object(u.a)(O),billingAddress:Object(u.a)(O),shippingAddress:Object(u.a)(f),extensions:n.extensions,shippingRates:n.shippingRates,isLoadingRates:b,cartHasCalculatedShipping:n.hasCalculatedShipping,paymentRequirements:n.paymentRequirements,receiveCart:p,receiveCartContents:E}}),[i]);return O.current&&c()(O.current,f)||(O.current=f),O.current}},602:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));const s=e=>e.is_purchasable||!1,c=e=>["simple","variable"].includes(e.type||"simple")},659:function(e,t,r){"use strict";r.r(t);var s=r(48),c=r(355),n=r(354);t.default=Object(s.withFilteredAttributes)(n.a)(c.a)},68:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return u}));var s=r(21);const c=(e,t)=>e[t]?Array.from(e[t].values()).sort(((e,t)=>e.priority-t.priority)):[];let n=function(e){return e.SUCCESS="success",e.FAIL="failure",e.ERROR="error",e}({}),o=function(e){return e.CART="wc/cart",e.CHECKOUT="wc/checkout",e.PAYMENTS="wc/checkout/payments",e.EXPRESS_PAYMENTS="wc/checkout/express-payments",e.CONTACT_INFORMATION="wc/checkout/contact-information",e.SHIPPING_ADDRESS="wc/checkout/shipping-address",e.BILLING_ADDRESS="wc/checkout/billing-address",e.SHIPPING_METHODS="wc/checkout/shipping-methods",e.CHECKOUT_ACTIONS="wc/checkout/checkout-actions",e}({});const a=(e,t)=>Object(s.b)(e)&&"type"in e&&e.type===t,i=e=>a(e,n.ERROR),u=e=>a(e,n.FAIL)},71:function(e,t,r){"use strict";var s=r(0),c=r(180),n=r(4),o=r.n(n),a=r(109);r(184),t.a=({className:e,showSpinner:t=!1,children:r,variant:n="contained",...i})=>{const u=o()("wc-block-components-button","wp-element-button",e,n,{"wc-block-components-button--loading":t});return Object(s.createElement)(c.a,{className:u,...i},t&&Object(s.createElement)(a.a,null),Object(s.createElement)("span",{className:"wc-block-components-button__text"},r))}},95:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var s=r(0),c=r(6);const n=Object(s.createContext)({isEditor:!1,currentPostId:0,currentView:"",previewData:{},getPreviewData:()=>({})}),o=()=>Object(s.useContext)(n),a=({children:e,currentPostId:t=0,previewData:r={},currentView:o="",isPreview:a=!1})=>{const i=Object(c.useSelect)((e=>t||e("core/editor").getCurrentPostId()),[t]),u=Object(s.useCallback)((e=>r&&e in r?r[e]:{}),[r]),l={isEditor:!0,currentPostId:i,currentView:o,previewData:r,getPreviewData:u,isPreview:a};return Object(s.createElement)(n.Provider,{value:l},e)}}}]);