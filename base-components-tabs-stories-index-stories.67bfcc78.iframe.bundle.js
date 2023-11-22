/*! For license information please see base-components-tabs-stories-index-stories.67bfcc78.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_woocommerce_block_library=self.webpackChunk_woocommerce_block_library||[]).push([[8405],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./assets/js/base/components/tabs/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),with_instance_id=__webpack_require__("./node_modules/@wordpress/compose/build-module/higher-order/with-instance-id/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),build_module=__webpack_require__("./node_modules/@wordpress/i18n/build-module/index.js"),TabState=__webpack_require__("./node_modules/reakit/es/Tab/TabState.js"),TabList=__webpack_require__("./node_modules/reakit/es/Tab/TabList.js"),Tab=__webpack_require__("./node_modules/reakit/es/Tab/Tab.js"),TabPanel=__webpack_require__("./node_modules/reakit/es/Tab/TabPanel.js"),jsx_runtime=(__webpack_require__("./assets/js/base/components/tabs/style.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const __TabsWithoutInstanceId=({className,onSelect=()=>null,tabs,activeClass="is-active",initialTabName,ariaLabel=(0,build_module.__)("Tabbed Content","woo-gutenberg-products-block"),instanceId,id})=>{const initialTab=initialTabName?{selectedId:`${instanceId}-${initialTabName}`}:void 0,tabState=(0,TabState.x)(initialTab);return 0===tabs.length?null:(0,jsx_runtime.jsxs)("div",{className:classnames_default()("wc-block-components-tabs",className),children:[(0,jsx_runtime.jsx)(TabList.t,{...tabState,id,className:"wc-block-components-tabs__list","aria-label":ariaLabel,children:tabs.map((({name,title,ariaLabel:tabAriaLabel})=>(0,react.createElement)(Tab.O,{...tabState,id:`${instanceId}-${name}`,manual:!0,className:classnames_default()("wc-block-components-tabs__item",{[activeClass]:`${instanceId}-${name}`===tabState.selectedId}),onClick:()=>onSelect(name),type:"button",key:name,"aria-label":tabAriaLabel},(0,jsx_runtime.jsx)("span",{className:"wc-block-components-tabs__item-content",children:title}))))}),tabs.map((({name,content})=>(0,react.createElement)(TabPanel.x,{...tabState,key:name,id:`${instanceId}-${name}-view`,tabId:`${instanceId}-${name}`,className:"wc-block-components-tabs__content"},tabState.selectedId===`${instanceId}-${name}`&&content)))]})};__TabsWithoutInstanceId.displayName="__TabsWithoutInstanceId",__TabsWithoutInstanceId.__docgenInfo={description:"Exporting the component for Storybook. Use the default export instead.",methods:[],displayName:"__TabsWithoutInstanceId",props:{onSelect:{defaultValue:{value:"() => null",computed:!1},required:!1,tsType:{name:"signature",type:"function",raw:"( tabName: string ) => void",signature:{arguments:[{name:"tabName",type:{name:"string"}}],return:{name:"void"}}},description:"Event handler triggered when a tab is selected"},activeClass:{defaultValue:{value:"'is-active'",computed:!1},required:!1,tsType:{name:"string"},description:"Classname to be applied to the active tab"},ariaLabel:{defaultValue:{value:"__( 'Tabbed Content', 'woo-gutenberg-products-block' )",computed:!0},required:!1,tsType:{name:"string"},description:"Aria label for the tablist"},className:{required:!1,tsType:{name:"string"},description:"Component wrapper classname"},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n\tname: string;\n\ttitle: string;\n\tcontent: JSX.Element;\n\tariaLabel?: string;\n}",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"JSX.Element",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}}]}}],raw:"Array< {\n\tname: string;\n\ttitle: string;\n\tcontent: JSX.Element;\n\tariaLabel?: string;\n} >"},description:"Array of tab objects"},initialTabName:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:"Name of the tab to be selected by default"},instanceId:{required:!0,tsType:{name:"number"},description:"Instance ID for the component"},id:{required:!1,tsType:{name:"string"},description:"ID for the component"}}};(0,with_instance_id.Z)(__TabsWithoutInstanceId);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["assets/js/base/components/tabs/index.tsx"]={name:"__TabsWithoutInstanceId",docgenInfo:__TabsWithoutInstanceId.__docgenInfo,path:"assets/js/base/components/tabs/index.tsx"});const index_stories={title:"Base Components/Tabs",component:__TabsWithoutInstanceId,args:{tabs:[{name:"firstTab",title:"First Tab",content:(0,jsx_runtime.jsx)("div",{children:"Content of the first tab"})},{name:"secondTab",title:"Second Tab",content:(0,jsx_runtime.jsx)("div",{children:"Content of the second tab"})}],initialTabName:"firstTab"},argTypes:{initialTabName:{control:{type:"select",options:["firstTab","secondTab"]}}}},Template=args=>{const[initialTab,setInitialTab]=(0,react.useState)(args.initialTabName);return(0,jsx_runtime.jsx)(__TabsWithoutInstanceId,{initialTabName:initialTab,onSelect:newTabName=>{setInitialTab(newTabName)},...args})};Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [initialTab, setInitialTab] = useState(args.initialTabName);\n  return <Tabs initialTabName={initialTab} onSelect={newTabName => {\n    setInitialTab(newTabName);\n  }} {...args} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/@wordpress/compose/build-module/higher-order/with-instance-id/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>with_instance_id});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js");const create_higher_order_component=function createHigherOrderComponent(mapComponent,modifierName){return Inner=>{const Outer=mapComponent(Inner),displayName=Inner.displayName||Inner.name||"Component";return Outer.displayName=`${(0,lodash.upperFirst)((0,lodash.camelCase)(modifierName))}(${displayName})`,Outer}};var use_instance_id=__webpack_require__("./node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");const with_instance_id=create_higher_order_component((WrappedComponent=>props=>{const instanceId=(0,use_instance_id.Z)(WrappedComponent);return(0,react.createElement)(WrappedComponent,(0,esm_extends.Z)({},props,{instanceId}))}),"withInstanceId")},"./node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useInstanceId});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const instanceMap=new WeakMap;function useInstanceId(object,prefix){let preferredId=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(preferredId)return preferredId;const id=function createId(object){const instances=instanceMap.get(object)||0;return instanceMap.set(object,instances+1),instances}(object);return prefix?`${prefix}-${id}`:id}),[object])}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType)if(arg.toString===Object.prototype.toString)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key);else classes.push(arg.toString())}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./assets/js/base/components/tabs/style.scss":()=>{}}]);