"use strict";(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[9357],{7277:(e,t,s)=>{s.d(t,{B:()=>c});var i=s(4617),l=s(9307),n=s(9818),o=s(4801),r=s(7844),d=s(5027);const c=()=>{const{needsShipping:e}=(0,d.V)(),{useShippingAsBilling:t,prefersCollection:s}=(0,n.useSelect)((e=>({useShippingAsBilling:e(o.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),prefersCollection:e(o.CHECKOUT_STORE_KEY).prefersCollection()}))),{__internalSetUseShippingAsBilling:c}=(0,n.useDispatch)(o.CHECKOUT_STORE_KEY),{billingAddress:a,setBillingAddress:u,shippingAddress:p,setShippingAddress:g}=(0,r.L)(),h=(0,l.useCallback)((e=>{u({email:e})}),[u]),m=(0,i.getSetting)("forcedBillingAddress",!1);return{shippingAddress:p,billingAddress:a,setShippingAddress:g,setBillingAddress:u,setEmail:h,defaultAddressFields:i.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:c,needsShipping:e,showShippingFields:!m&&e&&!s,showShippingMethods:e&&!s,showBillingFields:!e||!t||!!s,forcedBillingAddress:m,useBillingAsShipping:m||!!s}}},7844:(e,t,s)=>{s.d(t,{L:()=>n});var i=s(9818),l=s(4801);const n=()=>{const{customerData:e,isInitialized:t}=(0,i.useSelect)((e=>{const t=e(l.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}})),{setShippingAddress:s,setBillingAddress:n}=(0,i.useDispatch)(l.CART_STORE_KEY);return{isInitialized:t,billingAddress:e.billingAddress,shippingAddress:e.shippingAddress,setBillingAddress:n,setShippingAddress:s}}},9490:(e,t,s)=>{s.d(t,{Z:()=>l});var i=s(5736);const l=({defaultTitle:e=(0,i.__)("Step","woo-gutenberg-products-block"),defaultDescription:t=(0,i.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:s=!0})=>({title:{type:"string",default:e},description:{type:"string",default:t},showStepNumber:{type:"boolean",default:s}})},8302:(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var i=s(9196),l=s(4184),n=s.n(l),o=s(721),r=s(711),d=s(9818),c=s(4801),a=s(5736),u=s(7277),p=s(5918),g=s(6423),h=s(4617),m=s(3554),S=s(6483);const _=()=>{const{customerId:e,shouldCreateAccount:t}=(0,d.useSelect)((e=>{const t=e(c.CHECKOUT_STORE_KEY);return{customerId:t.getCustomerId(),shouldCreateAccount:t.getShouldCreateAccount()}})),{__internalSetShouldCreateAccount:s}=(0,d.useDispatch)(c.CHECKOUT_STORE_KEY),{billingAddress:l,setEmail:n}=(0,u.B)(),{dispatchCheckoutEvent:o}=(0,p.n)(),_=!e&&(0,h.getSetting)("checkoutAllowsGuest",!1)&&(0,h.getSetting)("checkoutAllowsSignup",!1)&&(0,i.createElement)(m.CheckboxControl,{className:"wc-block-checkout__create-account",label:(0,a.__)("Create an account?","woo-gutenberg-products-block"),checked:t,onChange:e=>s(e)});return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(r.StoreNoticesContainer,{context:g.n7.CONTACT_INFORMATION}),(0,i.createElement)(r.ValidatedTextInput,{id:"email",type:"email",autoComplete:"email",errorId:"billing_email",label:(0,a.__)("Email address","woo-gutenberg-products-block"),value:l.email,required:!0,onChange:e=>{n(e),o("set-email-address")},customValidation:e=>!!(0,S.isEmail)(e.value)||(e.setCustomValidity((0,a.__)("Please enter a valid email address","woo-gutenberg-products-block")),!1)}),_)},C={...(0,s(9490).Z)({defaultTitle:(0,a.__)("Contact information","woo-gutenberg-products-block"),defaultDescription:(0,a.__)("We'll use this email to send you details and updates about your order.","woo-gutenberg-products-block")}),className:{type:"string",default:""},lock:{type:"object",default:{remove:!0,move:!0}}},b=`${s(5271).ZE}?redirect_to=${encodeURIComponent(window.location.href)}`,A=()=>{const e=(0,d.useSelect)((e=>e(c.CHECKOUT_STORE_KEY).getCustomerId()));return!(0,h.getSetting)("checkoutShowLoginReminder",!0)||e?null:(0,i.createElement)(i.Fragment,null,(0,a.__)("Already have an account? ","woo-gutenberg-products-block"),(0,i.createElement)("a",{href:b},(0,a.__)("Log in.","woo-gutenberg-products-block")))},E=(0,o.withFilteredAttributes)(C)((({title:e,description:t,showStepNumber:s,children:l,className:o})=>{const a=(0,d.useSelect)((e=>e(c.CHECKOUT_STORE_KEY).isProcessing()));return(0,i.createElement)(r.FormStep,{id:"contact-fields",disabled:a,className:n()("wc-block-checkout__contact-fields",o),title:e,description:t,showStepNumber:s,stepHeadingContent:()=>(0,i.createElement)(A,null)},(0,i.createElement)(_,null),l)}))}}]);