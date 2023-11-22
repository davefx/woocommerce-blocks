/*! For license information please see 2132.390dadfe.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_woocommerce_block_library=self.webpackChunk_woocommerce_block_library||[]).push([[2132],{"./node_modules/@wordpress/deprecated/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>deprecated,logged:()=>logged});var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@wordpress/hooks/build-module/index.js");const logged=Object.create(null);function deprecated(feature,options={}){const{since,version,alternative,plugin,link,hint}=options,message=`${feature} is deprecated${since?` since version ${since}`:""}${version?` and will be removed${plugin?` from ${plugin}`:""} in version ${version}`:""}.${alternative?` Please use ${alternative} instead.`:""}${link?` See: ${link}`:""}${hint?` Note: ${hint}`:""}`;message in logged||((0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.doAction)("deprecated",feature,options,message),console.warn(message),logged[message]=!0)}},"./node_modules/@wordpress/is-shallow-equal/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isShallowEqualObjects(a,b){if(a===b)return!0;const aKeys=Object.keys(a),bKeys=Object.keys(b);if(aKeys.length!==bKeys.length)return!1;let i=0;for(;i<aKeys.length;){const key=aKeys[i],aValue=a[key];if(void 0===aValue&&!b.hasOwnProperty(key)||aValue!==b[key])return!1;i++}return!0}function isShallowEqualArrays(a,b){if(a===b)return!0;if(a.length!==b.length)return!1;for(let i=0,len=a.length;i<len;i++)if(a[i]!==b[i])return!1;return!0}function isShallowEqual(a,b){if(a&&b){if(a.constructor===Object&&b.constructor===Object)return isShallowEqualObjects(a,b);if(Array.isArray(a)&&Array.isArray(b))return isShallowEqualArrays(a,b)}return a===b}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>isShallowEqual,isShallowEqualArrays:()=>isShallowEqualArrays,isShallowEqualObjects:()=>isShallowEqualObjects})},"./node_modules/@wordpress/priority-queue/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>createQueue});__webpack_require__("./node_modules/requestidlecallback/index.js");const request_idle_callback=function createRequestIdleCallback(){return"undefined"==typeof window?callback=>{setTimeout((()=>callback(Date.now())),0)}:window.requestIdleCallback}(),createQueue=()=>{const waitingList=new Map;let isRunning=!1;const runWaitingList=deadline=>{for(const[nextElement,callback]of waitingList)if(waitingList.delete(nextElement),callback(),"number"==typeof deadline||deadline.timeRemaining()<=0)break;0!==waitingList.size?request_idle_callback(runWaitingList):isRunning=!1};return{add:(element,item)=>{waitingList.set(element,item),isRunning||(isRunning=!0,request_idle_callback(runWaitingList))},flush:element=>{const callback=waitingList.get(element);return void 0!==callback&&(waitingList.delete(element),callback(),!0)},cancel:element=>waitingList.delete(element),reset:()=>{waitingList.clear(),isRunning=!1}}}},"./node_modules/@wordpress/redux-routine/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>createMiddleware});var dist=__webpack_require__("./node_modules/rungen/dist/index.js"),is_promise=__webpack_require__("./node_modules/is-promise/index.mjs"),is_plain_object=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs");function isAction(object){return(0,is_plain_object.P)(object)&&"string"==typeof object.type}function createRuntime(controls={},dispatch){const rungenControls=Object.entries(controls).map((([actionType,control])=>(value,next,iterate,yieldNext,yieldError)=>{if(!function isActionOfType(object,expectedType){return isAction(object)&&object.type===expectedType}(value,actionType))return!1;const routine=control(value);return(0,is_promise.Z)(routine)?routine.then(yieldNext,yieldError):yieldNext(routine),!0}));rungenControls.push(((value,next)=>!!isAction(value)&&(dispatch(value),next(),!0)));const rungenRuntime=(0,dist.create)(rungenControls);return action=>new Promise(((resolve,reject)=>rungenRuntime(action,(result=>{isAction(result)&&dispatch(result),resolve(result)}),reject)))}function createMiddleware(controls={}){return store=>{const runtime=createRuntime(controls,store.dispatch);return next=>action=>function isGenerator(object){return!!object&&"function"==typeof object[Symbol.iterator]&&"function"==typeof object.next}(action)?runtime(action):next(action)}}},"./node_modules/equivalent-key-map/equivalent-key-map.js":module=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function getValuePair(instance,key){var _map=instance._map,_arrayTreeMap=instance._arrayTreeMap,_objectTreeMap=instance._objectTreeMap;if(_map.has(key))return _map.get(key);for(var properties=Object.keys(key).sort(),map=Array.isArray(key)?_arrayTreeMap:_objectTreeMap,i=0;i<properties.length;i++){var property=properties[i];if(void 0===(map=map.get(property)))return;var propertyValue=key[property];if(void 0===(map=map.get(propertyValue)))return}var valuePair=map.get("_ekm_value");return valuePair?(_map.delete(valuePair[0]),valuePair[0]=key,map.set("_ekm_value",valuePair),_map.set(key,valuePair),valuePair):void 0}var EquivalentKeyMap=function(){function EquivalentKeyMap(iterable){if(function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,EquivalentKeyMap),this.clear(),iterable instanceof EquivalentKeyMap){var iterablePairs=[];iterable.forEach((function(value,key){iterablePairs.push([key,value])})),iterable=iterablePairs}if(null!=iterable)for(var i=0;i<iterable.length;i++)this.set(iterable[i][0],iterable[i][1])}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(EquivalentKeyMap,[{key:"set",value:function set(key,value){if(null===key||"object"!==_typeof(key))return this._map.set(key,value),this;for(var properties=Object.keys(key).sort(),valuePair=[key,value],map=Array.isArray(key)?this._arrayTreeMap:this._objectTreeMap,i=0;i<properties.length;i++){var property=properties[i];map.has(property)||map.set(property,new EquivalentKeyMap),map=map.get(property);var propertyValue=key[property];map.has(propertyValue)||map.set(propertyValue,new EquivalentKeyMap),map=map.get(propertyValue)}var previousValuePair=map.get("_ekm_value");return previousValuePair&&this._map.delete(previousValuePair[0]),map.set("_ekm_value",valuePair),this._map.set(key,valuePair),this}},{key:"get",value:function get(key){if(null===key||"object"!==_typeof(key))return this._map.get(key);var valuePair=getValuePair(this,key);return valuePair?valuePair[1]:void 0}},{key:"has",value:function has(key){return null===key||"object"!==_typeof(key)?this._map.has(key):void 0!==getValuePair(this,key)}},{key:"delete",value:function _delete(key){return!!this.has(key)&&(this.set(key,void 0),!0)}},{key:"forEach",value:function forEach(callback){var _this=this,thisArg=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;this._map.forEach((function(value,key){null!==key&&"object"===_typeof(key)&&(value=value[1]),callback.call(thisArg,value,key,_this)}))}},{key:"clear",value:function clear(){this._map=new Map,this._arrayTreeMap=new Map,this._objectTreeMap=new Map}},{key:"size",get:function get(){return this._map.size}}]),EquivalentKeyMap}();module.exports=EquivalentKeyMap},"./node_modules/is-plain-object/dist/is-plain-object.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isObject(o){return"[object Object]"===Object.prototype.toString.call(o)}function isPlainObject(o){var ctor,prot;return!1!==isObject(o)&&(void 0===(ctor=o.constructor)||!1!==isObject(prot=ctor.prototype)&&!1!==prot.hasOwnProperty("isPrototypeOf"))}__webpack_require__.d(__webpack_exports__,{P:()=>isPlainObject})},"./node_modules/is-promise/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isPromise(obj){return!!obj&&("object"==typeof obj||"function"==typeof obj)&&"function"==typeof obj.then}__webpack_require__.d(__webpack_exports__,{Z:()=>isPromise})},"./node_modules/redux/es/redux.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function formatProdErrorMessage(code){return"Minified Redux error #"+code+"; visit https://redux.js.org/Errors?code="+code+" for the full message or use the non-minified dev environment for full errors. "}__webpack_require__.d(__webpack_exports__,{md:()=>applyMiddleware,MT:()=>createStore});var $$observable="function"==typeof Symbol&&Symbol.observable||"@@observable",randomString=function randomString(){return Math.random().toString(36).substring(7).split("").join(".")},ActionTypes={INIT:"@@redux/INIT"+randomString(),REPLACE:"@@redux/REPLACE"+randomString(),PROBE_UNKNOWN_ACTION:function PROBE_UNKNOWN_ACTION(){return"@@redux/PROBE_UNKNOWN_ACTION"+randomString()}};function isPlainObject(obj){if("object"!=typeof obj||null===obj)return!1;for(var proto=obj;null!==Object.getPrototypeOf(proto);)proto=Object.getPrototypeOf(proto);return Object.getPrototypeOf(obj)===proto}function createStore(reducer,preloadedState,enhancer){var _ref2;if("function"==typeof preloadedState&&"function"==typeof enhancer||"function"==typeof enhancer&&"function"==typeof arguments[3])throw new Error(formatProdErrorMessage(0));if("function"==typeof preloadedState&&void 0===enhancer&&(enhancer=preloadedState,preloadedState=void 0),void 0!==enhancer){if("function"!=typeof enhancer)throw new Error(formatProdErrorMessage(1));return enhancer(createStore)(reducer,preloadedState)}if("function"!=typeof reducer)throw new Error(formatProdErrorMessage(2));var currentReducer=reducer,currentState=preloadedState,currentListeners=[],nextListeners=currentListeners,isDispatching=!1;function ensureCanMutateNextListeners(){nextListeners===currentListeners&&(nextListeners=currentListeners.slice())}function getState(){if(isDispatching)throw new Error(formatProdErrorMessage(3));return currentState}function subscribe(listener){if("function"!=typeof listener)throw new Error(formatProdErrorMessage(4));if(isDispatching)throw new Error(formatProdErrorMessage(5));var isSubscribed=!0;return ensureCanMutateNextListeners(),nextListeners.push(listener),function unsubscribe(){if(isSubscribed){if(isDispatching)throw new Error(formatProdErrorMessage(6));isSubscribed=!1,ensureCanMutateNextListeners();var index=nextListeners.indexOf(listener);nextListeners.splice(index,1),currentListeners=null}}}function dispatch(action){if(!isPlainObject(action))throw new Error(formatProdErrorMessage(7));if(void 0===action.type)throw new Error(formatProdErrorMessage(8));if(isDispatching)throw new Error(formatProdErrorMessage(9));try{isDispatching=!0,currentState=currentReducer(currentState,action)}finally{isDispatching=!1}for(var listeners=currentListeners=nextListeners,i=0;i<listeners.length;i++){(0,listeners[i])()}return action}return dispatch({type:ActionTypes.INIT}),(_ref2={dispatch,subscribe,getState,replaceReducer:function replaceReducer(nextReducer){if("function"!=typeof nextReducer)throw new Error(formatProdErrorMessage(10));currentReducer=nextReducer,dispatch({type:ActionTypes.REPLACE})}})[$$observable]=function observable(){var _ref,outerSubscribe=subscribe;return(_ref={subscribe:function subscribe(observer){if("object"!=typeof observer||null===observer)throw new Error(formatProdErrorMessage(11));function observeState(){observer.next&&observer.next(getState())}return observeState(),{unsubscribe:outerSubscribe(observeState)}}})[$$observable]=function(){return this},_ref},_ref2}function compose(){for(var _len=arguments.length,funcs=new Array(_len),_key=0;_key<_len;_key++)funcs[_key]=arguments[_key];return 0===funcs.length?function(arg){return arg}:1===funcs.length?funcs[0]:funcs.reduce((function(a,b){return function(){return a(b.apply(void 0,arguments))}}))}function applyMiddleware(){for(var _len=arguments.length,middlewares=new Array(_len),_key=0;_key<_len;_key++)middlewares[_key]=arguments[_key];return function(createStore){return function(){var store=createStore.apply(void 0,arguments),_dispatch=function dispatch(){throw new Error(formatProdErrorMessage(15))},middlewareAPI={getState:store.getState,dispatch:function dispatch(){return _dispatch.apply(void 0,arguments)}},chain=middlewares.map((function(middleware){return middleware(middlewareAPI)}));return _dispatch=compose.apply(void 0,chain)(store.dispatch),_objectSpread2(_objectSpread2({},store),{},{dispatch:_dispatch})}}}},"./node_modules/requestidlecallback/index.js":(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[],void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=function(){"use strict";var scheduleStart,throttleDelay,lazytimer,lazyraf,root="undefined"!=typeof window?window:null!=typeof __webpack_require__.g?__webpack_require__.g:this||{},requestAnimationFrame=root.cancelRequestAnimationFrame&&root.requestAnimationFrame||setTimeout,cancelRequestAnimationFrame=root.cancelRequestAnimationFrame||clearTimeout,tasks=[],runAttempts=0,isRunning=!1,remainingTime=7,minThrottle=35,throttle=125,index=0,taskStart=0,tasklength=0,IdleDeadline={get didTimeout(){return!1},timeRemaining:function(){var timeRemaining=remainingTime-(Date.now()-taskStart);return timeRemaining<0?0:timeRemaining}},setInactive=debounce((function(){remainingTime=22,throttle=66,minThrottle=0}));function debounce(fn){var id,timestamp,wait=99,check=function(){var last=Date.now()-timestamp;last<wait?id=setTimeout(check,wait-last):(id=null,fn())};return function(){timestamp=Date.now(),id||(id=setTimeout(check,wait))}}function abortRunning(){isRunning&&(lazyraf&&cancelRequestAnimationFrame(lazyraf),lazytimer&&clearTimeout(lazytimer),isRunning=!1)}function onInputorMutation(){125!=throttle&&(remainingTime=7,throttle=125,minThrottle=35,isRunning&&(abortRunning(),scheduleLazy())),setInactive()}function scheduleAfterRaf(){lazyraf=null,lazytimer=setTimeout(runTasks,0)}function scheduleRaf(){lazytimer=null,requestAnimationFrame(scheduleAfterRaf)}function scheduleLazy(){isRunning||(throttleDelay=throttle-(Date.now()-taskStart),scheduleStart=Date.now(),isRunning=!0,minThrottle&&throttleDelay<minThrottle&&(throttleDelay=minThrottle),throttleDelay>9?lazytimer=setTimeout(scheduleRaf,throttleDelay):(throttleDelay=0,scheduleRaf()))}function runTasks(){var task,i,len,timeThreshold=remainingTime>9?9:1;if(taskStart=Date.now(),isRunning=!1,lazytimer=null,runAttempts>2||taskStart-throttleDelay-50<scheduleStart)for(i=0,len=tasks.length;i<len&&IdleDeadline.timeRemaining()>timeThreshold;i++)task=tasks.shift(),tasklength++,task&&task(IdleDeadline);tasks.length?scheduleLazy():runAttempts=0}function requestIdleCallbackShim(task){return index++,tasks.push(task),scheduleLazy(),index}function cancelIdleCallbackShim(id){var index=id-1-tasklength;tasks[index]&&(tasks[index]=null)}if(root.requestIdleCallback&&root.cancelIdleCallback)try{root.requestIdleCallback((function(){}),{timeout:0})}catch(e){!function(rIC){var timeRemainingProto,timeRemaining;if(root.requestIdleCallback=function(fn,timeout){return timeout&&"number"==typeof timeout.timeout?rIC(fn,timeout.timeout):rIC(fn)},root.IdleCallbackDeadline&&(timeRemainingProto=IdleCallbackDeadline.prototype)){if(!(timeRemaining=Object.getOwnPropertyDescriptor(timeRemainingProto,"timeRemaining"))||!timeRemaining.configurable||!timeRemaining.get)return;Object.defineProperty(timeRemainingProto,"timeRemaining",{value:function(){return timeRemaining.get.call(this)},enumerable:!0,configurable:!0})}}(root.requestIdleCallback)}else root.requestIdleCallback=requestIdleCallbackShim,root.cancelIdleCallback=cancelIdleCallbackShim,root.document&&document.addEventListener&&(root.addEventListener("scroll",onInputorMutation,!0),root.addEventListener("resize",onInputorMutation),document.addEventListener("focus",onInputorMutation,!0),document.addEventListener("mouseover",onInputorMutation,!0),["click","keypress","touchstart","mousedown"].forEach((function(name){document.addEventListener(name,onInputorMutation,{capture:!0,passive:!0})})),root.MutationObserver&&new MutationObserver(onInputorMutation).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}));return{request:requestIdleCallbackShim,cancel:cancelIdleCallbackShim}})?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"./node_modules/rungen/dist/controls/async.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.race=exports.join=exports.fork=exports.promise=void 0;var _is2=_interopRequireDefault(__webpack_require__("./node_modules/rungen/dist/utils/is.js")),_helpers=__webpack_require__("./node_modules/rungen/dist/utils/helpers.js"),_dispatcher2=_interopRequireDefault(__webpack_require__("./node_modules/rungen/dist/utils/dispatcher.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var promise=exports.promise=function promise(value,next,rungen,yieldNext,raiseNext){return!!_is2.default.promise(value)&&(value.then(next,raiseNext),!0)},forkedTasks=new Map,fork=exports.fork=function fork(value,next,rungen){if(!_is2.default.fork(value))return!1;var task=Symbol("fork"),dispatcher=(0,_dispatcher2.default)();forkedTasks.set(task,dispatcher),rungen(value.iterator.apply(null,value.args),(function(result){return dispatcher.dispatch(result)}),(function(err){return dispatcher.dispatch((0,_helpers.error)(err))}));var unsubscribe=dispatcher.subscribe((function(){unsubscribe(),forkedTasks.delete(task)}));return next(task),!0},join=exports.join=function join(value,next,rungen,yieldNext,raiseNext){if(!_is2.default.join(value))return!1;var unsubscribe,dispatcher=forkedTasks.get(value.task);return dispatcher?unsubscribe=dispatcher.subscribe((function(result){unsubscribe(),next(result)})):raiseNext("join error : task not found"),!0},race=exports.race=function race(value,next,rungen,yieldNext,raiseNext){if(!_is2.default.race(value))return!1;var result,finished=!1,success=function success(result,k,v){finished||(finished=!0,result[k]=v,next(result))},fail=function fail(err){finished||raiseNext(err)};return _is2.default.array(value.competitors)?(result=value.competitors.map((function(){return!1})),value.competitors.forEach((function(competitor,index){rungen(competitor,(function(output){return success(result,index,output)}),fail)}))):function(){var result=Object.keys(value.competitors).reduce((function(p,c){return p[c]=!1,p}),{});Object.keys(value.competitors).forEach((function(index){rungen(value.competitors[index],(function(output){return success(result,index,output)}),fail)}))}(),!0};exports.default=[promise,fork,join,race,function subscribe(value,next){if(!_is2.default.subscribe(value))return!1;if(!_is2.default.channel(value.channel))throw new Error('the first argument of "subscribe" must be a valid channel');var unsubscribe=value.channel.subscribe((function(ret){unsubscribe&&unsubscribe(),next(ret)}));return!0}]},"./node_modules/rungen/dist/controls/builtin.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.iterator=exports.array=exports.object=exports.error=exports.any=void 0;var _is2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/rungen/dist/utils/is.js"));var any=exports.any=function any(value,next,rungen,yieldNext){return yieldNext(value),!0},error=exports.error=function error(value,next,rungen,yieldNext,raiseNext){return!!_is2.default.error(value)&&(raiseNext(value.error),!0)},object=exports.object=function object(value,next,rungen,yieldNext,raiseNext){if(!_is2.default.all(value)||!_is2.default.obj(value.value))return!1;var result={},keys=Object.keys(value.value),count=0,hasError=!1;return keys.map((function(key){rungen(value.value[key],(function(ret){return function gotResultSuccess(key,ret){hasError||(result[key]=ret,++count===keys.length&&yieldNext(result))}(key,ret)}),(function(err){return function gotResultError(key,error){hasError||(hasError=!0,raiseNext(error))}(0,err)}))})),!0},array=exports.array=function array(value,next,rungen,yieldNext,raiseNext){if(!_is2.default.all(value)||!_is2.default.array(value.value))return!1;var result=[],count=0,hasError=!1;return value.value.map((function(v,key){rungen(v,(function(ret){return function gotResultSuccess(key,ret){hasError||(result[key]=ret,++count===value.value.length&&yieldNext(result))}(key,ret)}),(function(err){return function gotResultError(key,error){hasError||(hasError=!0,raiseNext(error))}(0,err)}))})),!0},iterator=exports.iterator=function iterator(value,next,rungen,yieldNext,raiseNext){return!!_is2.default.iterator(value)&&(rungen(value,next,raiseNext),!0)};exports.default=[error,iterator,array,object,any]},"./node_modules/rungen/dist/controls/wrap.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cps=exports.call=void 0;var _is2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/rungen/dist/utils/is.js"));var call=exports.call=function call(value,next,rungen,yieldNext,raiseNext){if(!_is2.default.call(value))return!1;try{next(value.func.apply(value.context,value.args))}catch(err){raiseNext(err)}return!0},cps=exports.cps=function cps(value,next,rungen,yieldNext,raiseNext){var _value$func;return!!_is2.default.cps(value)&&((_value$func=value.func).call.apply(_value$func,[null].concat(function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}(value.args),[function(err,result){err?raiseNext(err):next(result)}])),!0)};exports.default=[call,cps]},"./node_modules/rungen/dist/create.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _builtin2=_interopRequireDefault(__webpack_require__("./node_modules/rungen/dist/controls/builtin.js")),_is2=_interopRequireDefault(__webpack_require__("./node_modules/rungen/dist/utils/is.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}exports.default=function create(){var controls=[].concat(_toConsumableArray(arguments.length<=0||void 0===arguments[0]?[]:arguments[0]),_toConsumableArray(_builtin2.default));return function runtime(input){var success=arguments.length<=1||void 0===arguments[1]?function(){}:arguments[1],error=arguments.length<=2||void 0===arguments[2]?function(){}:arguments[2];!function iterate(gen){var yieldValue=function yieldValue(isError){return function(ret){try{var _ref=isError?gen.throw(ret):gen.next(ret),value=_ref.value;if(_ref.done)return success(value);next(value)}catch(e){return error(e)}}},next=function next(ret){controls.some((function(control){return control(ret,next,runtime,yieldValue(!1),yieldValue(!0))}))};yieldValue(!1)()}(_is2.default.iterator(input)?input:regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,input;case 2:return _context.abrupt("return",_context.sent);case 3:case"end":return _context.stop()}}),_callee,this)}))())}}},"./node_modules/rungen/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.wrapControls=exports.asyncControls=exports.create=void 0;var _helpers=__webpack_require__("./node_modules/rungen/dist/utils/helpers.js");Object.keys(_helpers).forEach((function(key){"default"!==key&&Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _helpers[key]}})}));var _create2=_interopRequireDefault(__webpack_require__("./node_modules/rungen/dist/create.js")),_async2=_interopRequireDefault(__webpack_require__("./node_modules/rungen/dist/controls/async.js")),_wrap2=_interopRequireDefault(__webpack_require__("./node_modules/rungen/dist/controls/wrap.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.create=_create2.default,exports.asyncControls=_async2.default,exports.wrapControls=_wrap2.default},"./node_modules/rungen/dist/utils/dispatcher.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=function createDispatcher(){var listeners=[];return{subscribe:function subscribe(listener){return listeners.push(listener),function(){listeners=listeners.filter((function(l){return l!==listener}))}},dispatch:function dispatch(action){listeners.slice().forEach((function(listener){return listener(action)}))}}}},"./node_modules/rungen/dist/utils/helpers.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createChannel=exports.subscribe=exports.cps=exports.apply=exports.call=exports.invoke=exports.delay=exports.race=exports.join=exports.fork=exports.error=exports.all=void 0;var _keys2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/rungen/dist/utils/keys.js"));exports.all=function all(value){return{type:_keys2.default.all,value}},exports.error=function error(err){return{type:_keys2.default.error,error:err}},exports.fork=function fork(iterator){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return{type:_keys2.default.fork,iterator,args}},exports.join=function join(task){return{type:_keys2.default.join,task}},exports.race=function race(competitors){return{type:_keys2.default.race,competitors}},exports.delay=function delay(timeout){return new Promise((function(resolve){setTimeout((function(){return resolve(!0)}),timeout)}))},exports.invoke=function invoke(func){for(var _len2=arguments.length,args=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];return{type:_keys2.default.call,func,context:null,args}},exports.call=function call(func,context){for(var _len3=arguments.length,args=Array(_len3>2?_len3-2:0),_key3=2;_key3<_len3;_key3++)args[_key3-2]=arguments[_key3];return{type:_keys2.default.call,func,context,args}},exports.apply=function apply(func,context,args){return{type:_keys2.default.call,func,context,args}},exports.cps=function cps(func){for(var _len4=arguments.length,args=Array(_len4>1?_len4-1:0),_key4=1;_key4<_len4;_key4++)args[_key4-1]=arguments[_key4];return{type:_keys2.default.cps,func,args}},exports.subscribe=function subscribe(channel){return{type:_keys2.default.subscribe,channel}},exports.createChannel=function createChannel(callback){var listeners=[];return callback((function next(val){return listeners.forEach((function(l){return l(val)}))})),{subscribe:function subscribe(l){return listeners.push(l),function(){return listeners.splice(listeners.indexOf(l),1)}}}}},"./node_modules/rungen/dist/utils/is.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj},_keys2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/rungen/dist/utils/keys.js"));var is={obj:function obj(value){return"object"===(void 0===value?"undefined":_typeof(value))&&!!value},all:function all(value){return is.obj(value)&&value.type===_keys2.default.all},error:function error(value){return is.obj(value)&&value.type===_keys2.default.error},array:Array.isArray,func:function func(value){return"function"==typeof value},promise:function promise(value){return value&&is.func(value.then)},iterator:function iterator(value){return value&&is.func(value.next)&&is.func(value.throw)},fork:function fork(value){return is.obj(value)&&value.type===_keys2.default.fork},join:function join(value){return is.obj(value)&&value.type===_keys2.default.join},race:function race(value){return is.obj(value)&&value.type===_keys2.default.race},call:function call(value){return is.obj(value)&&value.type===_keys2.default.call},cps:function cps(value){return is.obj(value)&&value.type===_keys2.default.cps},subscribe:function subscribe(value){return is.obj(value)&&value.type===_keys2.default.subscribe},channel:function channel(value){return is.obj(value)&&is.func(value.subscribe)}};exports.default=is},"./node_modules/rungen/dist/utils/keys.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var keys={all:Symbol("all"),error:Symbol("error"),fork:Symbol("fork"),join:Symbol("join"),race:Symbol("race"),call:Symbol("call"),cps:Symbol("cps"),subscribe:Symbol("subscribe")};exports.default=keys},"./node_modules/turbo-combine-reducers/index.js":module=>{module.exports=function combineReducers(reducers){var getNextState,keys=Object.keys(reducers);return getNextState=function(){var fn,i,key;for(fn="return {",i=0;i<keys.length;i++)fn+=(key=JSON.stringify(keys[i]))+":r["+key+"](s["+key+"],a),";return fn+="}",new Function("r,s,a",fn)}(),function combinedReducer(state,action){var nextState,i,key;if(void 0===state)return getNextState(reducers,{},action);for(nextState=getNextState(reducers,state,action),i=keys.length;i--;)if(state[key=keys[i]]!==nextState[key])return nextState;return state}}},"./node_modules/use-memo-one/dist/use-memo-one.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Pr:()=>useMemoOne});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useMemoOne(getResult,inputs){var initial=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return{inputs,result:getResult()}}))[0],isFirstRun=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0),committed=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial),cache=isFirstRun.current||Boolean(inputs&&committed.current.inputs&&function areInputsEqual(newInputs,lastInputs){if(newInputs.length!==lastInputs.length)return!1;for(var i=0;i<newInputs.length;i++)if(newInputs[i]!==lastInputs[i])return!1;return!0}(inputs,committed.current.inputs))?committed.current:{inputs,result:getResult()};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){isFirstRun.current=!1,committed.current=cache}),[cache]),cache.result}}}]);