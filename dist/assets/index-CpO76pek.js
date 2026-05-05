(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function pR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Aw={exports:{}},kc={},Rw={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),mR=Symbol.for("react.portal"),gR=Symbol.for("react.fragment"),yR=Symbol.for("react.strict_mode"),_R=Symbol.for("react.profiler"),vR=Symbol.for("react.provider"),wR=Symbol.for("react.context"),IR=Symbol.for("react.forward_ref"),ER=Symbol.for("react.suspense"),TR=Symbol.for("react.memo"),SR=Symbol.for("react.lazy"),gy=Symbol.iterator;function AR(t){return t===null||typeof t!="object"?null:(t=gy&&t[gy]||t["@@iterator"],typeof t=="function"?t:null)}var Pw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xw=Object.assign,kw={};function no(t,e,n){this.props=t,this.context=e,this.refs=kw,this.updater=n||Pw}no.prototype.isReactComponent={};no.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};no.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cw(){}Cw.prototype=no.prototype;function np(t,e,n){this.props=t,this.context=e,this.refs=kw,this.updater=n||Pw}var rp=np.prototype=new Cw;rp.constructor=np;xw(rp,no.prototype);rp.isPureReactComponent=!0;var yy=Array.isArray,bw=Object.prototype.hasOwnProperty,ip={current:null},Nw={key:!0,ref:!0,__self:!0,__source:!0};function Dw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bw.call(e,r)&&!Nw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qa,type:t,key:s,ref:o,props:i,_owner:ip.current}}function RR(t,e){return{$$typeof:Qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qa}function PR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _y=/\/+/g;function qh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PR(""+t.key):e.toString(36)}function uu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qa:case mR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qh(o,0):r,yy(i)?(n="",t!=null&&(n=t.replace(_y,"$&/")+"/"),uu(i,e,n,"",function(c){return c})):i!=null&&(sp(i)&&(i=RR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_y,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",yy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+qh(s,a);o+=uu(s,e,n,u,i)}else if(u=AR(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+qh(s,a++),o+=uu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ml(t,e,n){if(t==null)return t;var r=[],i=0;return uu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},cu={transition:null},kR={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:cu,ReactCurrentOwner:ip};function Vw(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ml,forEach:function(t,e,n){Ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ml(t,function(){e++}),e},toArray:function(t){return Ml(t,function(e){return e})||[]},only:function(t){if(!sp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=no;re.Fragment=gR;re.Profiler=_R;re.PureComponent=np;re.StrictMode=yR;re.Suspense=ER;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kR;re.act=Vw;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ip.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)bw.call(e,u)&&!Nw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Qa,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:wR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vR,_context:t},t.Consumer=t};re.createElement=Dw;re.createFactory=function(t){var e=Dw.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:IR,render:t}};re.isValidElement=sp;re.lazy=function(t){return{$$typeof:SR,_payload:{_status:-1,_result:t},_init:xR}};re.memo=function(t,e){return{$$typeof:TR,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=cu.transition;cu.transition={};try{t()}finally{cu.transition=e}};re.unstable_act=Vw;re.useCallback=function(t,e){return At.current.useCallback(t,e)};re.useContext=function(t){return At.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return At.current.useDeferredValue(t)};re.useEffect=function(t,e){return At.current.useEffect(t,e)};re.useId=function(){return At.current.useId()};re.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return At.current.useMemo(t,e)};re.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};re.useRef=function(t){return At.current.useRef(t)};re.useState=function(t){return At.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return At.current.useTransition()};re.version="18.3.1";Rw.exports=re;var G=Rw.exports;const CR=pR(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bR=G,NR=Symbol.for("react.element"),DR=Symbol.for("react.fragment"),VR=Object.prototype.hasOwnProperty,OR=bR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MR={key:!0,ref:!0,__self:!0,__source:!0};function Ow(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)VR.call(e,r)&&!MR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:NR,type:t,key:s,ref:o,props:i,_owner:OR.current}}kc.Fragment=DR;kc.jsx=Ow;kc.jsxs=Ow;Aw.exports=kc;var v=Aw.exports,Dd={},Mw={exports:{}},Gt={},Lw={exports:{}},Fw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,Z){var te=K.length;K.push(Z);e:for(;0<te;){var be=te-1>>>1,ge=K[be];if(0<i(ge,Z))K[be]=Z,K[te]=ge,te=be;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var Z=K[0],te=K.pop();if(te!==Z){K[0]=te;e:for(var be=0,ge=K.length,je=ge>>>1;be<je;){var Rn=2*(be+1)-1,Pn=K[Rn],xn=Rn+1,kn=K[xn];if(0>i(Pn,te))xn<ge&&0>i(kn,Pn)?(K[be]=kn,K[xn]=te,be=xn):(K[be]=Pn,K[Rn]=te,be=Rn);else if(xn<ge&&0>i(kn,te))K[be]=kn,K[xn]=te,be=xn;else break e}}return Z}function i(K,Z){var te=K.sortIndex-Z.sortIndex;return te!==0?te:K.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,p=3,_=!1,S=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(K){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=K)r(c),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(c)}}function V(K){if(k=!1,R(K),!S)if(n(u)!==null)S=!0,Je(F);else{var Z=n(c);Z!==null&&Pt(V,Z.startTime-K)}}function F(K,Z){S=!1,k&&(k=!1,E(g),g=-1),_=!0;var te=p;try{for(R(Z),f=n(u);f!==null&&(!(f.expirationTime>Z)||K&&!x());){var be=f.callback;if(typeof be=="function"){f.callback=null,p=f.priorityLevel;var ge=be(f.expirationTime<=Z);Z=t.unstable_now(),typeof ge=="function"?f.callback=ge:f===n(u)&&r(u),R(Z)}else r(u);f=n(u)}if(f!==null)var je=!0;else{var Rn=n(c);Rn!==null&&Pt(V,Rn.startTime-Z),je=!1}return je}finally{f=null,p=te,_=!1}}var L=!1,T=null,g=-1,A=5,I=-1;function x(){return!(t.unstable_now()-I<A)}function C(){if(T!==null){var K=t.unstable_now();I=K;var Z=!0;try{Z=T(!0,K)}finally{Z?P():(L=!1,T=null)}}else L=!1}var P;if(typeof w=="function")P=function(){w(C)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,we=de.port2;de.port1.onmessage=C,P=function(){we.postMessage(null)}}else P=function(){N(C,0)};function Je(K){T=K,L||(L=!0,P())}function Pt(K,Z){g=N(function(){K(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){S||_||(S=!0,Je(F))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(p){case 1:case 2:case 3:var Z=3;break;default:Z=p}var te=p;p=Z;try{return K()}finally{p=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,Z){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var te=p;p=K;try{return Z()}finally{p=te}},t.unstable_scheduleCallback=function(K,Z,te){var be=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?be+te:be):te=be,K){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=te+ge,K={id:d++,callback:Z,priorityLevel:K,startTime:te,expirationTime:ge,sortIndex:-1},te>be?(K.sortIndex=te,e(c,K),n(u)===null&&K===n(c)&&(k?(E(g),g=-1):k=!0,Pt(V,te-be))):(K.sortIndex=ge,e(u,K),S||_||(S=!0,Je(F))),K},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(K){var Z=p;return function(){var te=p;p=Z;try{return K.apply(this,arguments)}finally{p=te}}}})(Fw);Lw.exports=Fw;var LR=Lw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FR=G,zt=LR;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jw=new Set,va={};function zi(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(va[t]=e,t=0;t<e.length;t++)jw.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vd=Object.prototype.hasOwnProperty,jR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vy={},wy={};function UR(t){return Vd.call(wy,t)?!0:Vd.call(vy,t)?!1:jR.test(t)?wy[t]=!0:(vy[t]=!0,!1)}function BR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zR(t,e,n,r){if(e===null||typeof e>"u"||BR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var op=/[\-:]([a-z])/g;function ap(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(op,ap);lt[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(op,ap);lt[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(op,ap);lt[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lp(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zR(e,n,i,r)&&(n=null),r||i===null?UR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=FR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),cs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),up=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),Uw=Symbol.for("react.provider"),Bw=Symbol.for("react.context"),cp=Symbol.for("react.forward_ref"),Md=Symbol.for("react.suspense"),Ld=Symbol.for("react.suspense_list"),hp=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),zw=Symbol.for("react.offscreen"),Iy=Symbol.iterator;function Vo(t){return t===null||typeof t!="object"?null:(t=Iy&&t[Iy]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,Gh;function Wo(t){if(Gh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gh=e&&e[1]||""}return`
`+Gh+t}var Kh=!1;function Wh(t,e){if(!t||Kh)return"";Kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function $R(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=Wh(t.type,!1),t;case 11:return t=Wh(t.type.render,!1),t;case 1:return t=Wh(t.type,!0),t;default:return""}}function Fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case cs:return"Portal";case Od:return"Profiler";case up:return"StrictMode";case Md:return"Suspense";case Ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bw:return(t.displayName||"Context")+".Consumer";case Uw:return(t._context.displayName||"Context")+".Provider";case cp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hp:return e=t.displayName||null,e!==null?e:Fd(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return Fd(t(e))}catch{}}return null}function qR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fd(e);case 8:return e===up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $w(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function GR(t){var e=$w(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fl(t){t._valueTracker||(t._valueTracker=GR(t))}function qw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$w(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jd(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ey(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gw(t,e){e=e.checked,e!=null&&lp(t,"checked",e,!1)}function Ud(t,e){Gw(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bd(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ty(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bd(t,e,n){(e!=="number"||Vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qo=Array.isArray;function Es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Qo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function Kw(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ay(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ww(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ww(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jl,Qw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jl=jl||document.createElement("div"),jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KR=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(t){KR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),na[e]=na[t]})});function Hw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||na.hasOwnProperty(t)&&na[t]?(""+e).trim():e+"px"}function Jw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var WR=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qd(t,e){if(e){if(WR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kd=null;function dp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wd=null,Ts=null,Ss=null;function Ry(t){if(t=Ya(t)){if(typeof Wd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Vc(e),Wd(t.stateNode,t.type,e))}}function Yw(t){Ts?Ss?Ss.push(t):Ss=[t]:Ts=t}function Xw(){if(Ts){var t=Ts,e=Ss;if(Ss=Ts=null,Ry(t),e)for(t=0;t<e.length;t++)Ry(e[t])}}function Zw(t,e){return t(e)}function eI(){}var Qh=!1;function tI(t,e,n){if(Qh)return t(e,n);Qh=!0;try{return Zw(t,e,n)}finally{Qh=!1,(Ts!==null||Ss!==null)&&(eI(),Xw())}}function Ia(t,e){var n=t.stateNode;if(n===null)return null;var r=Vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Qd=!1;if($n)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Qd=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Qd=!1}function QR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ra=!1,Ou=null,Mu=!1,Hd=null,HR={onError:function(t){ra=!0,Ou=t}};function JR(t,e,n,r,i,s,o,a,u){ra=!1,Ou=null,QR.apply(HR,arguments)}function YR(t,e,n,r,i,s,o,a,u){if(JR.apply(this,arguments),ra){if(ra){var c=Ou;ra=!1,Ou=null}else throw Error(B(198));Mu||(Mu=!0,Hd=c)}}function $i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Py(t){if($i(t)!==t)throw Error(B(188))}function XR(t){var e=t.alternate;if(!e){if(e=$i(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Py(i),t;if(s===r)return Py(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function rI(t){return t=XR(t),t!==null?iI(t):null}function iI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iI(t);if(e!==null)return e;t=t.sibling}return null}var sI=zt.unstable_scheduleCallback,xy=zt.unstable_cancelCallback,ZR=zt.unstable_shouldYield,eP=zt.unstable_requestPaint,Ue=zt.unstable_now,tP=zt.unstable_getCurrentPriorityLevel,fp=zt.unstable_ImmediatePriority,oI=zt.unstable_UserBlockingPriority,Lu=zt.unstable_NormalPriority,nP=zt.unstable_LowPriority,aI=zt.unstable_IdlePriority,Cc=null,_n=null;function rP(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:oP,iP=Math.log,sP=Math.LN2;function oP(t){return t>>>=0,t===0?32:31-(iP(t)/sP|0)|0}var Ul=64,Bl=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ho(a):(s&=o,s!==0&&(r=Ho(s)))}else o=n&~i,o!==0?r=Ho(o):s!==0&&(r=Ho(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function aP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=aP(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Jd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lI(){var t=Ul;return Ul<<=1,!(Ul&4194240)&&(Ul=64),t}function Hh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function uP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function pp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function uI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cI,mp,hI,dI,fI,Yd=!1,zl=[],Ar=null,Rr=null,Pr=null,Ea=new Map,Ta=new Map,fr=[],cP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ky(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(e.pointerId)}}function Mo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ya(e),e!==null&&mp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hP(t,e,n,r,i){switch(e){case"focusin":return Ar=Mo(Ar,t,e,n,r,i),!0;case"dragenter":return Rr=Mo(Rr,t,e,n,r,i),!0;case"mouseover":return Pr=Mo(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ea.set(s,Mo(Ea.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ta.set(s,Mo(Ta.get(s)||null,t,e,n,r,i)),!0}return!1}function pI(t){var e=mi(t.target);if(e!==null){var n=$i(e);if(n!==null){if(e=n.tag,e===13){if(e=nI(n),e!==null){t.blockedOn=e,fI(t.priority,function(){hI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kd=r,n.target.dispatchEvent(r),Kd=null}else return e=Ya(n),e!==null&&mp(e),t.blockedOn=n,!1;e.shift()}return!0}function Cy(t,e,n){hu(t)&&n.delete(e)}function dP(){Yd=!1,Ar!==null&&hu(Ar)&&(Ar=null),Rr!==null&&hu(Rr)&&(Rr=null),Pr!==null&&hu(Pr)&&(Pr=null),Ea.forEach(Cy),Ta.forEach(Cy)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,Yd||(Yd=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,dP)))}function Sa(t){function e(i){return Lo(i,t)}if(0<zl.length){Lo(zl[0],t);for(var n=1;n<zl.length;n++){var r=zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&Lo(Ar,t),Rr!==null&&Lo(Rr,t),Pr!==null&&Lo(Pr,t),Ea.forEach(e),Ta.forEach(e),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)pI(n),n.blockedOn===null&&fr.shift()}var As=Xn.ReactCurrentBatchConfig,ju=!0;function fP(t,e,n,r){var i=he,s=As.transition;As.transition=null;try{he=1,gp(t,e,n,r)}finally{he=i,As.transition=s}}function pP(t,e,n,r){var i=he,s=As.transition;As.transition=null;try{he=4,gp(t,e,n,r)}finally{he=i,As.transition=s}}function gp(t,e,n,r){if(ju){var i=Xd(t,e,n,r);if(i===null)sd(t,e,r,Uu,n),ky(t,r);else if(hP(i,t,e,n,r))r.stopPropagation();else if(ky(t,r),e&4&&-1<cP.indexOf(t)){for(;i!==null;){var s=Ya(i);if(s!==null&&cI(s),s=Xd(t,e,n,r),s===null&&sd(t,e,r,Uu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sd(t,e,r,null,n)}}var Uu=null;function Xd(t,e,n,r){if(Uu=null,t=dp(r),t=mi(t),t!==null)if(e=$i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uu=t,null}function mI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tP()){case fp:return 1;case oI:return 4;case Lu:case nP:return 16;case aI:return 536870912;default:return 16}default:return 16}}var Ir=null,yp=null,du=null;function gI(){if(du)return du;var t,e=yp,n=e.length,r,i="value"in Ir?Ir.value:Ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return du=i.slice(t,1<r?1-r:void 0)}function fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function by(){return!1}function Kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$l:by,this.isPropagationStopped=by,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_p=Kt(ro),Ja=Ve({},ro,{view:0,detail:0}),mP=Kt(Ja),Jh,Yh,Fo,bc=Ve({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(Jh=t.screenX-Fo.screenX,Yh=t.screenY-Fo.screenY):Yh=Jh=0,Fo=t),Jh)},movementY:function(t){return"movementY"in t?t.movementY:Yh}}),Ny=Kt(bc),gP=Ve({},bc,{dataTransfer:0}),yP=Kt(gP),_P=Ve({},Ja,{relatedTarget:0}),Xh=Kt(_P),vP=Ve({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),wP=Kt(vP),IP=Ve({},ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EP=Kt(IP),TP=Ve({},ro,{data:0}),Dy=Kt(TP),SP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RP[t])?!!e[t]:!1}function vp(){return PP}var xP=Ve({},Ja,{key:function(t){if(t.key){var e=SP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vp,charCode:function(t){return t.type==="keypress"?fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kP=Kt(xP),CP=Ve({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vy=Kt(CP),bP=Ve({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vp}),NP=Kt(bP),DP=Ve({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),VP=Kt(DP),OP=Ve({},bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MP=Kt(OP),LP=[9,13,27,32],wp=$n&&"CompositionEvent"in window,ia=null;$n&&"documentMode"in document&&(ia=document.documentMode);var FP=$n&&"TextEvent"in window&&!ia,yI=$n&&(!wp||ia&&8<ia&&11>=ia),Oy=" ",My=!1;function _I(t,e){switch(t){case"keyup":return LP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function jP(t,e){switch(t){case"compositionend":return vI(e);case"keypress":return e.which!==32?null:(My=!0,Oy);case"textInput":return t=e.data,t===Oy&&My?null:t;default:return null}}function UP(t,e){if(ds)return t==="compositionend"||!wp&&_I(t,e)?(t=gI(),du=yp=Ir=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yI&&e.locale!=="ko"?null:e.data;default:return null}}var BP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ly(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BP[t.type]:e==="textarea"}function wI(t,e,n,r){Yw(r),e=Bu(e,"onChange"),0<e.length&&(n=new _p("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var sa=null,Aa=null;function zP(t){bI(t,0)}function Nc(t){var e=ms(t);if(qw(e))return t}function $P(t,e){if(t==="change")return e}var II=!1;if($n){var Zh;if($n){var ed="oninput"in document;if(!ed){var Fy=document.createElement("div");Fy.setAttribute("oninput","return;"),ed=typeof Fy.oninput=="function"}Zh=ed}else Zh=!1;II=Zh&&(!document.documentMode||9<document.documentMode)}function jy(){sa&&(sa.detachEvent("onpropertychange",EI),Aa=sa=null)}function EI(t){if(t.propertyName==="value"&&Nc(Aa)){var e=[];wI(e,Aa,t,dp(t)),tI(zP,e)}}function qP(t,e,n){t==="focusin"?(jy(),sa=e,Aa=n,sa.attachEvent("onpropertychange",EI)):t==="focusout"&&jy()}function GP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nc(Aa)}function KP(t,e){if(t==="click")return Nc(e)}function WP(t,e){if(t==="input"||t==="change")return Nc(e)}function QP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:QP;function Ra(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vd.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function Uy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function By(t,e){var n=Uy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uy(n)}}function TI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?TI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function SI(){for(var t=window,e=Vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vu(t.document)}return e}function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HP(t){var e=SI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&TI(n.ownerDocument.documentElement,n)){if(r!==null&&Ip(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=By(n,s);var o=By(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JP=$n&&"documentMode"in document&&11>=document.documentMode,fs=null,Zd=null,oa=null,ef=!1;function zy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ef||fs==null||fs!==Vu(r)||(r=fs,"selectionStart"in r&&Ip(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oa&&Ra(oa,r)||(oa=r,r=Bu(Zd,"onSelect"),0<r.length&&(e=new _p("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fs)))}function ql(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ps={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},td={},AI={};$n&&(AI=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Dc(t){if(td[t])return td[t];if(!ps[t])return t;var e=ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in AI)return td[t]=e[n];return t}var RI=Dc("animationend"),PI=Dc("animationiteration"),xI=Dc("animationstart"),kI=Dc("transitionend"),CI=new Map,$y="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(t,e){CI.set(t,e),zi(e,[t])}for(var nd=0;nd<$y.length;nd++){var rd=$y[nd],YP=rd.toLowerCase(),XP=rd[0].toUpperCase()+rd.slice(1);Kr(YP,"on"+XP)}Kr(RI,"onAnimationEnd");Kr(PI,"onAnimationIteration");Kr(xI,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(kI,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function qy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YR(r,e,void 0,t),t.currentTarget=null}function bI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;qy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;qy(i,a,c),s=u}}}if(Mu)throw t=Hd,Mu=!1,Hd=null,t}function Ee(t,e){var n=e[of];n===void 0&&(n=e[of]=new Set);var r=t+"__bubble";n.has(r)||(NI(e,t,2,!1),n.add(r))}function id(t,e,n){var r=0;e&&(r|=4),NI(n,t,r,e)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[Gl]){t[Gl]=!0,jw.forEach(function(n){n!=="selectionchange"&&(ZP.has(n)||id(n,!1,t),id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gl]||(e[Gl]=!0,id("selectionchange",!1,e))}}function NI(t,e,n,r){switch(mI(e)){case 1:var i=fP;break;case 4:i=pP;break;default:i=gp}n=i.bind(null,e,n,t),i=void 0,!Qd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}tI(function(){var c=s,d=dp(n),f=[];e:{var p=CI.get(t);if(p!==void 0){var _=_p,S=t;switch(t){case"keypress":if(fu(n)===0)break e;case"keydown":case"keyup":_=kP;break;case"focusin":S="focus",_=Xh;break;case"focusout":S="blur",_=Xh;break;case"beforeblur":case"afterblur":_=Xh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ny;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=yP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=NP;break;case RI:case PI:case xI:_=wP;break;case kI:_=VP;break;case"scroll":_=mP;break;case"wheel":_=MP;break;case"copy":case"cut":case"paste":_=EP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Vy}var k=(e&4)!==0,N=!k&&t==="scroll",E=k?p!==null?p+"Capture":null:p;k=[];for(var w=c,R;w!==null;){R=w;var V=R.stateNode;if(R.tag===5&&V!==null&&(R=V,E!==null&&(V=Ia(w,E),V!=null&&k.push(xa(w,V,R)))),N)break;w=w.return}0<k.length&&(p=new _(p,S,null,n,d),f.push({event:p,listeners:k}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==Kd&&(S=n.relatedTarget||n.fromElement)&&(mi(S)||S[qn]))break e;if((_||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,_?(S=n.relatedTarget||n.toElement,_=c,S=S?mi(S):null,S!==null&&(N=$i(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(_=null,S=c),_!==S)){if(k=Ny,V="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(k=Vy,V="onPointerLeave",E="onPointerEnter",w="pointer"),N=_==null?p:ms(_),R=S==null?p:ms(S),p=new k(V,w+"leave",_,n,d),p.target=N,p.relatedTarget=R,V=null,mi(d)===c&&(k=new k(E,w+"enter",S,n,d),k.target=R,k.relatedTarget=N,V=k),N=V,_&&S)t:{for(k=_,E=S,w=0,R=k;R;R=Zi(R))w++;for(R=0,V=E;V;V=Zi(V))R++;for(;0<w-R;)k=Zi(k),w--;for(;0<R-w;)E=Zi(E),R--;for(;w--;){if(k===E||E!==null&&k===E.alternate)break t;k=Zi(k),E=Zi(E)}k=null}else k=null;_!==null&&Gy(f,p,_,k,!1),S!==null&&N!==null&&Gy(f,N,S,k,!0)}}e:{if(p=c?ms(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var F=$P;else if(Ly(p))if(II)F=WP;else{F=GP;var L=qP}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(F=KP);if(F&&(F=F(t,c))){wI(f,F,n,d);break e}L&&L(t,p,c),t==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&Bd(p,"number",p.value)}switch(L=c?ms(c):window,t){case"focusin":(Ly(L)||L.contentEditable==="true")&&(fs=L,Zd=c,oa=null);break;case"focusout":oa=Zd=fs=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,zy(f,n,d);break;case"selectionchange":if(JP)break;case"keydown":case"keyup":zy(f,n,d)}var T;if(wp)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ds?_I(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(yI&&n.locale!=="ko"&&(ds||g!=="onCompositionStart"?g==="onCompositionEnd"&&ds&&(T=gI()):(Ir=d,yp="value"in Ir?Ir.value:Ir.textContent,ds=!0)),L=Bu(c,g),0<L.length&&(g=new Dy(g,t,null,n,d),f.push({event:g,listeners:L}),T?g.data=T:(T=vI(n),T!==null&&(g.data=T)))),(T=FP?jP(t,n):UP(t,n))&&(c=Bu(c,"onBeforeInput"),0<c.length&&(d=new Dy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}bI(f,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ia(t,n),s!=null&&r.unshift(xa(t,s,i)),s=Ia(t,e),s!=null&&r.push(xa(t,s,i))),t=t.return}return r}function Zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ia(n,s),u!=null&&o.unshift(xa(n,u,a))):i||(u=Ia(n,s),u!=null&&o.push(xa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var e1=/\r\n?/g,t1=/\u0000|\uFFFD/g;function Ky(t){return(typeof t=="string"?t:""+t).replace(e1,`
`).replace(t1,"")}function Kl(t,e,n){if(e=Ky(e),Ky(t)!==e&&n)throw Error(B(425))}function zu(){}var tf=null,nf=null;function rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sf=typeof setTimeout=="function"?setTimeout:void 0,n1=typeof clearTimeout=="function"?clearTimeout:void 0,Wy=typeof Promise=="function"?Promise:void 0,r1=typeof queueMicrotask=="function"?queueMicrotask:typeof Wy<"u"?function(t){return Wy.resolve(null).then(t).catch(i1)}:sf;function i1(t){setTimeout(function(){throw t})}function od(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Sa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Sa(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),mn="__reactFiber$"+io,ka="__reactProps$"+io,qn="__reactContainer$"+io,of="__reactEvents$"+io,s1="__reactListeners$"+io,o1="__reactHandles$"+io;function mi(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qy(t);t!==null;){if(n=t[mn])return n;t=Qy(t)}return e}t=n,n=t.parentNode}return null}function Ya(t){return t=t[mn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Vc(t){return t[ka]||null}var af=[],gs=-1;function Wr(t){return{current:t}}function Ae(t){0>gs||(t.current=af[gs],af[gs]=null,gs--)}function _e(t,e){gs++,af[gs]=t.current,t.current=e}var Mr={},vt=Wr(Mr),Dt=Wr(!1),Ai=Mr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function $u(){Ae(Dt),Ae(vt)}function Hy(t,e,n){if(vt.current!==Mr)throw Error(B(168));_e(vt,e),_e(Dt,n)}function DI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,qR(t)||"Unknown",i));return Ve({},n,r)}function qu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Ai=vt.current,_e(vt,t),_e(Dt,Dt.current),!0}function Jy(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=DI(t,e,Ai),r.__reactInternalMemoizedMergedChildContext=t,Ae(Dt),Ae(vt),_e(vt,t)):Ae(Dt),_e(Dt,n)}var Dn=null,Oc=!1,ad=!1;function VI(t){Dn===null?Dn=[t]:Dn.push(t)}function a1(t){Oc=!0,VI(t)}function Qr(){if(!ad&&Dn!==null){ad=!0;var t=0,e=he;try{var n=Dn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dn=null,Oc=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(t+1)),sI(fp,Qr),i}finally{he=e,ad=!1}}return null}var ys=[],_s=0,Gu=null,Ku=0,Wt=[],Qt=0,Ri=null,On=1,Mn="";function ai(t,e){ys[_s++]=Ku,ys[_s++]=Gu,Gu=t,Ku=e}function OI(t,e,n){Wt[Qt++]=On,Wt[Qt++]=Mn,Wt[Qt++]=Ri,Ri=t;var r=On;t=Mn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-on(e)+i|n<<i|r,Mn=s+t}else On=1<<s|n<<i|r,Mn=t}function Ep(t){t.return!==null&&(ai(t,1),OI(t,1,0))}function Tp(t){for(;t===Gu;)Gu=ys[--_s],ys[_s]=null,Ku=ys[--_s],ys[_s]=null;for(;t===Ri;)Ri=Wt[--Qt],Wt[Qt]=null,Mn=Wt[--Qt],Wt[Qt]=null,On=Wt[--Qt],Wt[Qt]=null}var Ut=null,jt=null,Pe=!1,sn=null;function MI(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,jt=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ri!==null?{id:On,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,jt=null,!0):!1;default:return!1}}function lf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uf(t){if(Pe){var e=jt;if(e){var n=e;if(!Yy(t,e)){if(lf(t))throw Error(B(418));e=xr(n.nextSibling);var r=Ut;e&&Yy(t,e)?MI(r,n):(t.flags=t.flags&-4097|2,Pe=!1,Ut=t)}}else{if(lf(t))throw Error(B(418));t.flags=t.flags&-4097|2,Pe=!1,Ut=t}}}function Xy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function Wl(t){if(t!==Ut)return!1;if(!Pe)return Xy(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rf(t.type,t.memoizedProps)),e&&(e=jt)){if(lf(t))throw LI(),Error(B(418));for(;e;)MI(t,e),e=xr(e.nextSibling)}if(Xy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=Ut?xr(t.stateNode.nextSibling):null;return!0}function LI(){for(var t=jt;t;)t=xr(t.nextSibling)}function Os(){jt=Ut=null,Pe=!1}function Sp(t){sn===null?sn=[t]:sn.push(t)}var l1=Xn.ReactCurrentBatchConfig;function jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Ql(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zy(t){var e=t._init;return e(t._payload)}function FI(t){function e(E,w){if(t){var R=E.deletions;R===null?(E.deletions=[w],E.flags|=16):R.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=Nr(E,w),E.index=0,E.sibling=null,E}function s(E,w,R){return E.index=R,t?(R=E.alternate,R!==null?(R=R.index,R<w?(E.flags|=2,w):R):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,w,R,V){return w===null||w.tag!==6?(w=pd(R,E.mode,V),w.return=E,w):(w=i(w,R),w.return=E,w)}function u(E,w,R,V){var F=R.type;return F===hs?d(E,w,R.props.children,V,R.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===hr&&Zy(F)===w.type)?(V=i(w,R.props),V.ref=jo(E,w,R),V.return=E,V):(V=wu(R.type,R.key,R.props,null,E.mode,V),V.ref=jo(E,w,R),V.return=E,V)}function c(E,w,R,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==R.containerInfo||w.stateNode.implementation!==R.implementation?(w=md(R,E.mode,V),w.return=E,w):(w=i(w,R.children||[]),w.return=E,w)}function d(E,w,R,V,F){return w===null||w.tag!==7?(w=Ii(R,E.mode,V,F),w.return=E,w):(w=i(w,R),w.return=E,w)}function f(E,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return w=pd(""+w,E.mode,R),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ll:return R=wu(w.type,w.key,w.props,null,E.mode,R),R.ref=jo(E,null,w),R.return=E,R;case cs:return w=md(w,E.mode,R),w.return=E,w;case hr:var V=w._init;return f(E,V(w._payload),R)}if(Qo(w)||Vo(w))return w=Ii(w,E.mode,R,null),w.return=E,w;Ql(E,w)}return null}function p(E,w,R,V){var F=w!==null?w.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return F!==null?null:a(E,w,""+R,V);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ll:return R.key===F?u(E,w,R,V):null;case cs:return R.key===F?c(E,w,R,V):null;case hr:return F=R._init,p(E,w,F(R._payload),V)}if(Qo(R)||Vo(R))return F!==null?null:d(E,w,R,V,null);Ql(E,R)}return null}function _(E,w,R,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return E=E.get(R)||null,a(w,E,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ll:return E=E.get(V.key===null?R:V.key)||null,u(w,E,V,F);case cs:return E=E.get(V.key===null?R:V.key)||null,c(w,E,V,F);case hr:var L=V._init;return _(E,w,R,L(V._payload),F)}if(Qo(V)||Vo(V))return E=E.get(R)||null,d(w,E,V,F,null);Ql(w,V)}return null}function S(E,w,R,V){for(var F=null,L=null,T=w,g=w=0,A=null;T!==null&&g<R.length;g++){T.index>g?(A=T,T=null):A=T.sibling;var I=p(E,T,R[g],V);if(I===null){T===null&&(T=A);break}t&&T&&I.alternate===null&&e(E,T),w=s(I,w,g),L===null?F=I:L.sibling=I,L=I,T=A}if(g===R.length)return n(E,T),Pe&&ai(E,g),F;if(T===null){for(;g<R.length;g++)T=f(E,R[g],V),T!==null&&(w=s(T,w,g),L===null?F=T:L.sibling=T,L=T);return Pe&&ai(E,g),F}for(T=r(E,T);g<R.length;g++)A=_(T,E,g,R[g],V),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?g:A.key),w=s(A,w,g),L===null?F=A:L.sibling=A,L=A);return t&&T.forEach(function(x){return e(E,x)}),Pe&&ai(E,g),F}function k(E,w,R,V){var F=Vo(R);if(typeof F!="function")throw Error(B(150));if(R=F.call(R),R==null)throw Error(B(151));for(var L=F=null,T=w,g=w=0,A=null,I=R.next();T!==null&&!I.done;g++,I=R.next()){T.index>g?(A=T,T=null):A=T.sibling;var x=p(E,T,I.value,V);if(x===null){T===null&&(T=A);break}t&&T&&x.alternate===null&&e(E,T),w=s(x,w,g),L===null?F=x:L.sibling=x,L=x,T=A}if(I.done)return n(E,T),Pe&&ai(E,g),F;if(T===null){for(;!I.done;g++,I=R.next())I=f(E,I.value,V),I!==null&&(w=s(I,w,g),L===null?F=I:L.sibling=I,L=I);return Pe&&ai(E,g),F}for(T=r(E,T);!I.done;g++,I=R.next())I=_(T,E,g,I.value,V),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?g:I.key),w=s(I,w,g),L===null?F=I:L.sibling=I,L=I);return t&&T.forEach(function(C){return e(E,C)}),Pe&&ai(E,g),F}function N(E,w,R,V){if(typeof R=="object"&&R!==null&&R.type===hs&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Ll:e:{for(var F=R.key,L=w;L!==null;){if(L.key===F){if(F=R.type,F===hs){if(L.tag===7){n(E,L.sibling),w=i(L,R.props.children),w.return=E,E=w;break e}}else if(L.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===hr&&Zy(F)===L.type){n(E,L.sibling),w=i(L,R.props),w.ref=jo(E,L,R),w.return=E,E=w;break e}n(E,L);break}else e(E,L);L=L.sibling}R.type===hs?(w=Ii(R.props.children,E.mode,V,R.key),w.return=E,E=w):(V=wu(R.type,R.key,R.props,null,E.mode,V),V.ref=jo(E,w,R),V.return=E,E=V)}return o(E);case cs:e:{for(L=R.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===R.containerInfo&&w.stateNode.implementation===R.implementation){n(E,w.sibling),w=i(w,R.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=md(R,E.mode,V),w.return=E,E=w}return o(E);case hr:return L=R._init,N(E,w,L(R._payload),V)}if(Qo(R))return S(E,w,R,V);if(Vo(R))return k(E,w,R,V);Ql(E,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,R),w.return=E,E=w):(n(E,w),w=pd(R,E.mode,V),w.return=E,E=w),o(E)):n(E,w)}return N}var Ms=FI(!0),jI=FI(!1),Wu=Wr(null),Qu=null,vs=null,Ap=null;function Rp(){Ap=vs=Qu=null}function Pp(t){var e=Wu.current;Ae(Wu),t._currentValue=e}function cf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){Qu=t,Ap=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Xt(t){var e=t._currentValue;if(Ap!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Qu===null)throw Error(B(308));vs=t,Qu.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var gi=null;function xp(t){gi===null?gi=[t]:gi.push(t)}function UI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function kp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function BI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,xp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function pu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pp(t,n)}}function e_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hu(t,e,n,r){var i=t.updateQueue;dr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,k=a;switch(p=e,_=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){f=S.call(_,f,p);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,p=typeof S=="function"?S.call(_,f,p):S,p==null)break e;f=Ve({},f,p);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,u=f):d=d.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);xi|=o,t.lanes=o,t.memoizedState=f}}function t_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Xa={},vn=Wr(Xa),Ca=Wr(Xa),ba=Wr(Xa);function yi(t){if(t===Xa)throw Error(B(174));return t}function Cp(t,e){switch(_e(ba,e),_e(Ca,t),_e(vn,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$d(e,t)}Ae(vn),_e(vn,e)}function Ls(){Ae(vn),Ae(Ca),Ae(ba)}function zI(t){yi(ba.current);var e=yi(vn.current),n=$d(e,t.type);e!==n&&(_e(Ca,t),_e(vn,n))}function bp(t){Ca.current===t&&(Ae(vn),Ae(Ca))}var Ne=Wr(0);function Ju(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ld=[];function Np(){for(var t=0;t<ld.length;t++)ld[t]._workInProgressVersionPrimary=null;ld.length=0}var mu=Xn.ReactCurrentDispatcher,ud=Xn.ReactCurrentBatchConfig,Pi=0,De=null,Ke=null,Xe=null,Yu=!1,aa=!1,Na=0,u1=0;function dt(){throw Error(B(321))}function Dp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function Vp(t,e,n,r,i,s){if(Pi=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mu.current=t===null||t.memoizedState===null?f1:p1,t=n(r,i),aa){s=0;do{if(aa=!1,Na=0,25<=s)throw Error(B(301));s+=1,Xe=Ke=null,e.updateQueue=null,mu.current=m1,t=n(r,i)}while(aa)}if(mu.current=Xu,e=Ke!==null&&Ke.next!==null,Pi=0,Xe=Ke=De=null,Yu=!1,e)throw Error(B(300));return t}function Op(){var t=Na!==0;return Na=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?De.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Zt(){if(Ke===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=Xe===null?De.memoizedState:Xe.next;if(e!==null)Xe=e,Ke=t;else{if(t===null)throw Error(B(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Xe===null?De.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Da(t,e){return typeof e=="function"?e(t):e}function cd(t){var e=Zt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Pi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,De.lanes|=d,xi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,cn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,xi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hd(t){var e=Zt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $I(){}function qI(t,e){var n=De,r=Zt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,Mp(WI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Va(9,KI.bind(null,n,r,i,e),void 0,null),et===null)throw Error(B(349));Pi&30||GI(n,e,i)}return i}function GI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function KI(t,e,n,r){e.value=n,e.getSnapshot=r,QI(e)&&HI(t)}function WI(t,e,n){return n(function(){QI(e)&&HI(t)})}function QI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function HI(t){var e=Gn(t,1);e!==null&&an(e,t,1,-1)}function n_(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=d1.bind(null,De,t),[e.memoizedState,t]}function Va(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function JI(){return Zt().memoizedState}function gu(t,e,n,r){var i=pn();De.flags|=t,i.memoizedState=Va(1|e,n,void 0,r===void 0?null:r)}function Mc(t,e,n,r){var i=Zt();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&Dp(r,o.deps)){i.memoizedState=Va(e,n,s,r);return}}De.flags|=t,i.memoizedState=Va(1|e,n,s,r)}function r_(t,e){return gu(8390656,8,t,e)}function Mp(t,e){return Mc(2048,8,t,e)}function YI(t,e){return Mc(4,2,t,e)}function XI(t,e){return Mc(4,4,t,e)}function ZI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function e0(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4,4,ZI.bind(null,e,t),n)}function Lp(){}function t0(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function n0(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function r0(t,e,n){return Pi&21?(cn(n,e)||(n=lI(),De.lanes|=n,xi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function c1(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=ud.transition;ud.transition={};try{t(!1),e()}finally{he=n,ud.transition=r}}function i0(){return Zt().memoizedState}function h1(t,e,n){var r=br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},s0(t))o0(e,n);else if(n=UI(t,e,n,r),n!==null){var i=St();an(n,t,r,i),a0(n,e,r)}}function d1(t,e,n){var r=br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(s0(t))o0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var u=e.interleaved;u===null?(i.next=i,xp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=UI(t,e,i,r),n!==null&&(i=St(),an(n,t,r,i),a0(n,e,r))}}function s0(t){var e=t.alternate;return t===De||e!==null&&e===De}function o0(t,e){aa=Yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function a0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pp(t,n)}}var Xu={readContext:Xt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},f1={readContext:Xt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:r_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gu(4194308,4,ZI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return gu(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=h1.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:n_,useDebugValue:Lp,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=n_(!1),e=t[0];return t=c1.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=pn();if(Pe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),et===null)throw Error(B(349));Pi&30||GI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,r_(WI.bind(null,r,s,t),[t]),r.flags|=2048,Va(9,KI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=et.identifierPrefix;if(Pe){var n=Mn,r=On;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=u1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},p1={readContext:Xt,useCallback:t0,useContext:Xt,useEffect:Mp,useImperativeHandle:e0,useInsertionEffect:YI,useLayoutEffect:XI,useMemo:n0,useReducer:cd,useRef:JI,useState:function(){return cd(Da)},useDebugValue:Lp,useDeferredValue:function(t){var e=Zt();return r0(e,Ke.memoizedState,t)},useTransition:function(){var t=cd(Da)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:$I,useSyncExternalStore:qI,useId:i0,unstable_isNewReconciler:!1},m1={readContext:Xt,useCallback:t0,useContext:Xt,useEffect:Mp,useImperativeHandle:e0,useInsertionEffect:YI,useLayoutEffect:XI,useMemo:n0,useReducer:hd,useRef:JI,useState:function(){return hd(Da)},useDebugValue:Lp,useDeferredValue:function(t){var e=Zt();return Ke===null?e.memoizedState=t:r0(e,Ke.memoizedState,t)},useTransition:function(){var t=hd(Da)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:$I,useSyncExternalStore:qI,useId:i0,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?$i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=br(t),s=zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(an(e,t,i,r),pu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=br(t),s=zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(an(e,t,i,r),pu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=br(t),i=zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=kr(t,i,r),e!==null&&(an(e,t,r,n),pu(e,t,r))}};function i_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,r)||!Ra(i,s):!0}function l0(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xt(s):(i=Vt(e)?Ai:vt.current,r=e.contextTypes,s=(r=r!=null)?Vs(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function s_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function df(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},kp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xt(s):(s=Vt(e)?Ai:vt.current,i.context=Vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lc.enqueueReplaceState(i,i.state,null),Hu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fs(t,e){try{var n="",r=e;do n+=$R(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var g1=typeof WeakMap=="function"?WeakMap:Map;function u0(t,e,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ec||(ec=!0,Tf=r),ff(t,e)},n}function c0(t,e,n){n=zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ff(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ff(t,e),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function o_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new g1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=C1.bind(null,t,e,n),e.then(t,t))}function a_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function l_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zn(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var y1=Xn.ReactCurrentOwner,kt=!1;function Et(t,e,n,r){e.child=t===null?jI(e,null,n,r):Ms(e,t.child,n,r)}function u_(t,e,n,r,i){n=n.render;var s=e.ref;return Rs(e,i),r=Vp(t,e,n,r,s,i),n=Op(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(Pe&&n&&Ep(e),e.flags|=1,Et(t,e,r,i),e.child)}function c_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,h0(t,e,s,r,i)):(t=wu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(o,r)&&t.ref===e.ref)return Kn(t,e,i)}return e.flags|=1,t=Nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function h0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ra(s,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Kn(t,e,i)}return pf(t,e,n,r,i)}function d0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Is,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Is,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Is,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Is,Ft),Ft|=r;return Et(t,e,i,n),e.child}function f0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pf(t,e,n,r,i){var s=Vt(n)?Ai:vt.current;return s=Vs(e,s),Rs(e,i),n=Vp(t,e,n,r,s,i),r=Op(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(Pe&&r&&Ep(e),e.flags|=1,Et(t,e,n,i),e.child)}function h_(t,e,n,r,i){if(Vt(n)){var s=!0;qu(e)}else s=!1;if(Rs(e,i),e.stateNode===null)yu(t,e),l0(e,n,r),df(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xt(c):(c=Vt(n)?Ai:vt.current,c=Vs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&s_(e,o,r,c),dr=!1;var p=e.memoizedState;o.state=p,Hu(e,r,o,i),u=e.memoizedState,a!==r||p!==u||Dt.current||dr?(typeof d=="function"&&(hf(e,n,d,r),u=e.memoizedState),(a=dr||i_(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,BI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:nn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xt(u):(u=Vt(n)?Ai:vt.current,u=Vs(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&s_(e,o,r,u),dr=!1,p=e.memoizedState,o.state=p,Hu(e,r,o,i);var S=e.memoizedState;a!==f||p!==S||Dt.current||dr?(typeof _=="function"&&(hf(e,n,_,r),S=e.memoizedState),(c=dr||i_(e,n,c,r,p,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return mf(t,e,n,r,s,i)}function mf(t,e,n,r,i,s){f0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jy(e,n,!1),Kn(t,e,s);r=e.stateNode,y1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,a,s)):Et(t,e,a,s),e.memoizedState=r.state,i&&Jy(e,n,!0),e.child}function p0(t){var e=t.stateNode;e.pendingContext?Hy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hy(t,e.context,!1),Cp(t,e.containerInfo)}function d_(t,e,n,r,i){return Os(),Sp(i),e.flags|=256,Et(t,e,n,r),e.child}var gf={dehydrated:null,treeContext:null,retryLane:0};function yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function m0(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ne,i&1),t===null)return uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,r,0,null),t=Ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yf(n),e.memoizedState=gf,t):Fp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Nr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=Ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gf,r}return s=t.child,t=s.sibling,r=Nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fp(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hl(t,e,n,r){return r!==null&&Sp(r),Ms(e,t.child,null,n),t=Fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dd(Error(B(422))),Hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Uc({mode:"visible",children:r.children},i,0,null),s=Ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ms(e,t.child,null,o),e.child.memoizedState=yf(o),e.memoizedState=gf,s);if(!(e.mode&1))return Hl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=dd(s,r,void 0),Hl(t,e,o,r)}if(a=(o&t.childLanes)!==0,kt||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),an(r,t,i,-1))}return qp(),r=dd(Error(B(421))),Hl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=b1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,jt=xr(i.nextSibling),Ut=e,Pe=!0,sn=null,t!==null&&(Wt[Qt++]=On,Wt[Qt++]=Mn,Wt[Qt++]=Ri,On=t.id,Mn=t.overflow,Ri=e),e=Fp(e,r.children),e.flags|=4096,e)}function f_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cf(t.return,e,n)}function fd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function g0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&f_(t,n,e);else if(t.tag===19)f_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ju(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ju(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fd(e,!0,n,null,s);break;case"together":fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function v1(t,e,n){switch(e.tag){case 3:p0(e),Os();break;case 5:zI(e);break;case 1:Vt(e.type)&&qu(e);break;case 4:Cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Wu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?m0(t,e,n):(_e(Ne,Ne.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);_e(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return g0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,d0(t,e,n)}return Kn(t,e,n)}var y0,_f,_0,v0;y0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_f=function(){};_0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yi(vn.current);var s=null;switch(n){case"input":i=jd(t,i),r=jd(t,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=zd(t,i),r=zd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=zu)}qd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(va.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(va.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ee("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};v0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Uo(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function w1(t,e,n){var r=e.pendingProps;switch(Tp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Vt(e.type)&&$u(),ft(e),null;case 3:return r=e.stateNode,Ls(),Ae(Dt),Ae(vt),Np(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(Rf(sn),sn=null))),_f(t,e),ft(e),null;case 5:bp(e);var i=yi(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)_0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return ft(e),null}if(t=yi(vn.current),Wl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mn]=e,r[ka]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Jo.length;i++)Ee(Jo[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Ey(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":Sy(r,s),Ee("invalid",r)}qd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Kl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Kl(r.textContent,a,t),i=["children",""+a]):va.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Fl(r),Ty(r,s,!0);break;case"textarea":Fl(r),Ay(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ww(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[ka]=r,y0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gd(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Jo.length;i++)Ee(Jo[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":Ey(t,r),i=jd(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":Sy(t,r),i=zd(t,r),Ee("invalid",t);break;default:i=r}qd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Jw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Qw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wa(t,u):typeof u=="number"&&wa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ee("scroll",t):u!=null&&lp(t,s,u,o))}switch(n){case"input":Fl(t),Ty(t,r,!1);break;case"textarea":Fl(t),Ay(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Es(t,!!r.multiple,s,!1):r.defaultValue!=null&&Es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=zu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)v0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=yi(ba.current),yi(vn.current),Wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Kl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return ft(e),null;case 13:if(Ae(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&jt!==null&&e.mode&1&&!(e.flags&128))LI(),Os(),e.flags|=98560,s=!1;else if(s=Wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[mn]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else sn!==null&&(Rf(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?We===0&&(We=3):qp())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Ls(),_f(t,e),t===null&&Pa(e.stateNode.containerInfo),ft(e),null;case 10:return Pp(e.type._context),ft(e),null;case 17:return Vt(e.type)&&$u(),ft(e),null;case 19:if(Ae(Ne),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Uo(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ju(t),o!==null){for(e.flags|=128,Uo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>js&&(e.flags|=128,r=!0,Uo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ju(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return ft(e),null}else 2*Ue()-s.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,r=!0,Uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Ne.current,_e(Ne,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return $p(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function I1(t,e){switch(Tp(e),e.tag){case 1:return Vt(e.type)&&$u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),Ae(Dt),Ae(vt),Np(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bp(e),null;case 13:if(Ae(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Ne),null;case 4:return Ls(),null;case 10:return Pp(e.type._context),null;case 22:case 23:return $p(),null;case 24:return null;default:return null}}var Jl=!1,gt=!1,E1=typeof WeakSet=="function"?WeakSet:Set,Q=null;function ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function vf(t,e,n){try{n()}catch(r){Le(t,e,r)}}var p_=!1;function T1(t,e){if(tf=ju,t=SI(),Ip(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)p=f,f=_;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(_=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(nf={focusedElem:t,selectionRange:n},ju=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,N=S.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?k:nn(e.type,k),N);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(V){Le(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return S=p_,p_=!1,S}function la(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vf(e,n,s)}i=i.next}while(i!==r)}}function Fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w0(t){var e=t.alternate;e!==null&&(t.alternate=null,w0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[ka],delete e[of],delete e[s1],delete e[o1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I0(t){return t.tag===5||t.tag===3||t.tag===4}function m_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zu));else if(r!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}function Ef(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ef(t,e,n),t=t.sibling;t!==null;)Ef(t,e,n),t=t.sibling}var it=null,rn=!1;function ar(t,e,n){for(n=n.child;n!==null;)E0(t,e,n),n=n.sibling}function E0(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:gt||ws(n,e);case 6:var r=it,i=rn;it=null,ar(t,e,n),it=r,rn=i,it!==null&&(rn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(rn?(t=it,n=n.stateNode,t.nodeType===8?od(t.parentNode,n):t.nodeType===1&&od(t,n),Sa(t)):od(it,n.stateNode));break;case 4:r=it,i=rn,it=n.stateNode.containerInfo,rn=!0,ar(t,e,n),it=r,rn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vf(n,e,o),i=i.next}while(i!==r)}ar(t,e,n);break;case 1:if(!gt&&(ws(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,ar(t,e,n),gt=r):ar(t,e,n);break;default:ar(t,e,n)}}function g_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new E1),e.forEach(function(r){var i=N1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,rn=!1;break e;case 3:it=a.stateNode.containerInfo,rn=!0;break e;case 4:it=a.stateNode.containerInfo,rn=!0;break e}a=a.return}if(it===null)throw Error(B(160));E0(s,o,i),it=null,rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T0(e,t),e=e.sibling}function T0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),fn(t),r&4){try{la(3,t,t.return),Fc(3,t)}catch(k){Le(t,t.return,k)}try{la(5,t,t.return)}catch(k){Le(t,t.return,k)}}break;case 1:tn(e,t),fn(t),r&512&&n!==null&&ws(n,n.return);break;case 5:if(tn(e,t),fn(t),r&512&&n!==null&&ws(n,n.return),t.flags&32){var i=t.stateNode;try{wa(i,"")}catch(k){Le(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gw(i,s),Gd(a,o);var c=Gd(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?Jw(i,f):d==="dangerouslySetInnerHTML"?Qw(i,f):d==="children"?wa(i,f):lp(i,d,f,c)}switch(a){case"input":Ud(i,s);break;case"textarea":Kw(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Es(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?Es(i,!!s.multiple,s.defaultValue,!0):Es(i,!!s.multiple,s.multiple?[]:"",!1))}i[ka]=s}catch(k){Le(t,t.return,k)}}break;case 6:if(tn(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Le(t,t.return,k)}}break;case 3:if(tn(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(k){Le(t,t.return,k)}break;case 4:tn(e,t),fn(t);break;case 13:tn(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bp=Ue())),r&4&&g_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(c=gt)||d,tn(e,t),gt=c):tn(e,t),fn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Q=t,d=t.child;d!==null;){for(f=Q=d;Q!==null;){switch(p=Q,_=p.child,p.tag){case 0:case 11:case 14:case 15:la(4,p,p.return);break;case 1:ws(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(k){Le(r,n,k)}}break;case 5:ws(p,p.return);break;case 22:if(p.memoizedState!==null){__(f);continue}}_!==null?(_.return=p,Q=_):__(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Hw("display",o))}catch(k){Le(t,t.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){Le(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tn(e,t),fn(t),r&4&&g_(t);break;case 21:break;default:tn(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I0(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wa(i,""),r.flags&=-33);var s=m_(t);Ef(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=m_(t);If(t,a,o);break;default:throw Error(B(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function S1(t,e,n){Q=t,S0(t)}function S0(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Jl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||gt;a=Jl;var c=gt;if(Jl=o,(gt=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?v_(i):u!==null?(u.return=o,Q=u):v_(i);for(;s!==null;)Q=s,S0(s),s=s.sibling;Q=i,Jl=a,gt=c}y_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):y_(t)}}function y_(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||Fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&t_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}t_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}gt||e.flags&512&&wf(e)}catch(p){Le(e,e.return,p)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function __(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function v_(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fc(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Le(e,i,u)}}var s=e.return;try{wf(e)}catch(u){Le(e,s,u)}break;case 5:var o=e.return;try{wf(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var A1=Math.ceil,Zu=Xn.ReactCurrentDispatcher,jp=Xn.ReactCurrentOwner,Jt=Xn.ReactCurrentBatchConfig,le=0,et=null,qe=null,at=0,Ft=0,Is=Wr(0),We=0,Oa=null,xi=0,jc=0,Up=0,ua=null,xt=null,Bp=0,js=1/0,Nn=null,ec=!1,Tf=null,Cr=null,Yl=!1,Er=null,tc=0,ca=0,Sf=null,_u=-1,vu=0;function St(){return le&6?Ue():_u!==-1?_u:_u=Ue()}function br(t){return t.mode&1?le&2&&at!==0?at&-at:l1.transition!==null?(vu===0&&(vu=lI()),vu):(t=he,t!==0||(t=window.event,t=t===void 0?16:mI(t.type)),t):1}function an(t,e,n,r){if(50<ca)throw ca=0,Sf=null,Error(B(185));Ha(t,n,r),(!(le&2)||t!==et)&&(t===et&&(!(le&2)&&(jc|=n),We===4&&pr(t,at)),Ot(t,r),n===1&&le===0&&!(e.mode&1)&&(js=Ue()+500,Oc&&Qr()))}function Ot(t,e){var n=t.callbackNode;lP(t,e);var r=Fu(t,t===et?at:0);if(r===0)n!==null&&xy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xy(n),e===1)t.tag===0?a1(w_.bind(null,t)):VI(w_.bind(null,t)),r1(function(){!(le&6)&&Qr()}),n=null;else{switch(uI(r)){case 1:n=fp;break;case 4:n=oI;break;case 16:n=Lu;break;case 536870912:n=aI;break;default:n=Lu}n=N0(n,A0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function A0(t,e){if(_u=-1,vu=0,le&6)throw Error(B(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var r=Fu(t,t===et?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nc(t,r);else{e=r;var i=le;le|=2;var s=P0();(et!==t||at!==e)&&(Nn=null,js=Ue()+500,wi(t,e));do try{x1();break}catch(a){R0(t,a)}while(!0);Rp(),Zu.current=s,le=i,qe!==null?e=0:(et=null,at=0,e=We)}if(e!==0){if(e===2&&(i=Jd(t),i!==0&&(r=i,e=Af(t,i))),e===1)throw n=Oa,wi(t,0),pr(t,r),Ot(t,Ue()),n;if(e===6)pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!R1(i)&&(e=nc(t,r),e===2&&(s=Jd(t),s!==0&&(r=s,e=Af(t,s))),e===1))throw n=Oa,wi(t,0),pr(t,r),Ot(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:li(t,xt,Nn);break;case 3:if(pr(t,r),(r&130023424)===r&&(e=Bp+500-Ue(),10<e)){if(Fu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sf(li.bind(null,t,xt,Nn),e);break}li(t,xt,Nn);break;case 4:if(pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*A1(r/1960))-r,10<r){t.timeoutHandle=sf(li.bind(null,t,xt,Nn),r);break}li(t,xt,Nn);break;case 5:li(t,xt,Nn);break;default:throw Error(B(329))}}}return Ot(t,Ue()),t.callbackNode===n?A0.bind(null,t):null}function Af(t,e){var n=ua;return t.current.memoizedState.isDehydrated&&(wi(t,e).flags|=256),t=nc(t,e),t!==2&&(e=xt,xt=n,e!==null&&Rf(e)),t}function Rf(t){xt===null?xt=t:xt.push.apply(xt,t)}function R1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Up,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function w_(t){if(le&6)throw Error(B(327));Ps();var e=Fu(t,0);if(!(e&1))return Ot(t,Ue()),null;var n=nc(t,e);if(t.tag!==0&&n===2){var r=Jd(t);r!==0&&(e=r,n=Af(t,r))}if(n===1)throw n=Oa,wi(t,0),pr(t,e),Ot(t,Ue()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,li(t,xt,Nn),Ot(t,Ue()),null}function zp(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(js=Ue()+500,Oc&&Qr())}}function ki(t){Er!==null&&Er.tag===0&&!(le&6)&&Ps();var e=le;le|=1;var n=Jt.transition,r=he;try{if(Jt.transition=null,he=1,t)return t()}finally{he=r,Jt.transition=n,le=e,!(le&6)&&Qr()}}function $p(){Ft=Is.current,Ae(Is)}function wi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,n1(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Tp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$u();break;case 3:Ls(),Ae(Dt),Ae(vt),Np();break;case 5:bp(r);break;case 4:Ls();break;case 13:Ae(Ne);break;case 19:Ae(Ne);break;case 10:Pp(r.type._context);break;case 22:case 23:$p()}n=n.return}if(et=t,qe=t=Nr(t.current,null),at=Ft=e,We=0,Oa=null,Up=jc=xi=0,xt=ua=null,gi!==null){for(e=0;e<gi.length;e++)if(n=gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gi=null}return t}function R0(t,e){do{var n=qe;try{if(Rp(),mu.current=Xu,Yu){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yu=!1}if(Pi=0,Xe=Ke=De=null,aa=!1,Na=0,jp.current=null,n===null||n.return===null){We=1,Oa=e,qe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=at,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=a_(o);if(_!==null){_.flags&=-257,l_(_,o,a,s,e),_.mode&1&&o_(s,c,e),e=_,u=c;var S=e.updateQueue;if(S===null){var k=new Set;k.add(u),e.updateQueue=k}else S.add(u);break e}else{if(!(e&1)){o_(s,c,e),qp();break e}u=Error(B(426))}}else if(Pe&&a.mode&1){var N=a_(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),l_(N,o,a,s,e),Sp(Fs(u,a));break e}}s=u=Fs(u,a),We!==4&&(We=2),ua===null?ua=[s]:ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=u0(s,u,e);e_(s,E);break e;case 1:a=u;var w=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Cr===null||!Cr.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=c0(s,a,e);e_(s,V);break e}}s=s.return}while(s!==null)}k0(n)}catch(F){e=F,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function P0(){var t=Zu.current;return Zu.current=Xu,t===null?Xu:t}function qp(){(We===0||We===3||We===2)&&(We=4),et===null||!(xi&268435455)&&!(jc&268435455)||pr(et,at)}function nc(t,e){var n=le;le|=2;var r=P0();(et!==t||at!==e)&&(Nn=null,wi(t,e));do try{P1();break}catch(i){R0(t,i)}while(!0);if(Rp(),le=n,Zu.current=r,qe!==null)throw Error(B(261));return et=null,at=0,We}function P1(){for(;qe!==null;)x0(qe)}function x1(){for(;qe!==null&&!ZR();)x0(qe)}function x0(t){var e=b0(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?k0(t):qe=e,jp.current=null}function k0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=I1(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,qe=null;return}}else if(n=w1(n,e,Ft),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);We===0&&(We=5)}function li(t,e,n){var r=he,i=Jt.transition;try{Jt.transition=null,he=1,k1(t,e,n,r)}finally{Jt.transition=i,he=r}return null}function k1(t,e,n,r){do Ps();while(Er!==null);if(le&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uP(t,s),t===et&&(qe=et=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yl||(Yl=!0,N0(Lu,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jt.transition,Jt.transition=null;var o=he;he=1;var a=le;le|=4,jp.current=null,T1(t,n),T0(n,t),HP(nf),ju=!!tf,nf=tf=null,t.current=n,S1(n),eP(),le=a,he=o,Jt.transition=s}else t.current=n;if(Yl&&(Yl=!1,Er=t,tc=i),s=t.pendingLanes,s===0&&(Cr=null),rP(n.stateNode),Ot(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ec)throw ec=!1,t=Tf,Tf=null,t;return tc&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===Sf?ca++:(ca=0,Sf=t):ca=0,Qr(),null}function Ps(){if(Er!==null){var t=uI(tc),e=Jt.transition,n=he;try{if(Jt.transition=null,he=16>t?16:t,Er===null)var r=!1;else{if(t=Er,Er=null,tc=0,le&6)throw Error(B(331));var i=le;for(le|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Q=c;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:la(8,d,s)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var p=d.sibling,_=d.return;if(w0(d),d===c){Q=null;break}if(p!==null){p.return=_,Q=p;break}Q=_}}}var S=s.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Q=E;break e}Q=s.return}}var w=t.current;for(Q=w;Q!==null;){o=Q;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,Q=R;else e:for(o=w;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fc(9,a)}}catch(F){Le(a,a.return,F)}if(a===o){Q=null;break e}var V=a.sibling;if(V!==null){V.return=a.return,Q=V;break e}Q=a.return}}if(le=i,Qr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Cc,t)}catch{}r=!0}return r}finally{he=n,Jt.transition=e}}return!1}function I_(t,e,n){e=Fs(n,e),e=u0(t,e,1),t=kr(t,e,1),e=St(),t!==null&&(Ha(t,1,e),Ot(t,e))}function Le(t,e,n){if(t.tag===3)I_(t,t,n);else for(;e!==null;){if(e.tag===3){I_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){t=Fs(n,t),t=c0(e,t,1),e=kr(e,t,1),t=St(),e!==null&&(Ha(e,1,t),Ot(e,t));break}}e=e.return}}function C1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(at&n)===n&&(We===4||We===3&&(at&130023424)===at&&500>Ue()-Bp?wi(t,0):Up|=n),Ot(t,e)}function C0(t,e){e===0&&(t.mode&1?(e=Bl,Bl<<=1,!(Bl&130023424)&&(Bl=4194304)):e=1);var n=St();t=Gn(t,e),t!==null&&(Ha(t,e,n),Ot(t,n))}function b1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C0(t,n)}function N1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),C0(t,n)}var b0;b0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,v1(t,e,n);kt=!!(t.flags&131072)}else kt=!1,Pe&&e.flags&1048576&&OI(e,Ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yu(t,e),t=e.pendingProps;var i=Vs(e,vt.current);Rs(e,n),i=Vp(null,e,r,t,i,n);var s=Op();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(s=!0,qu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kp(e),i.updater=Lc,e.stateNode=i,i._reactInternals=e,df(e,r,t,n),e=mf(null,e,r,!0,s,n)):(e.tag=0,Pe&&s&&Ep(e),Et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=V1(r),t=nn(r,t),i){case 0:e=pf(null,e,r,t,n);break e;case 1:e=h_(null,e,r,t,n);break e;case 11:e=u_(null,e,r,t,n);break e;case 14:e=c_(null,e,r,nn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),pf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),h_(t,e,r,i,n);case 3:e:{if(p0(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,BI(t,e),Hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fs(Error(B(423)),e),e=d_(t,e,r,n,i);break e}else if(r!==i){i=Fs(Error(B(424)),e),e=d_(t,e,r,n,i);break e}else for(jt=xr(e.stateNode.containerInfo.firstChild),Ut=e,Pe=!0,sn=null,n=jI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),r===i){e=Kn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return zI(e),t===null&&uf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,rf(r,i)?o=null:s!==null&&rf(r,s)&&(e.flags|=32),f0(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&uf(e),null;case 13:return m0(t,e,n);case 4:return Cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ms(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),u_(t,e,r,i,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Wu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!Dt.current){e=Kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=zn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),cf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Rs(e,n),i=Xt(i),r=r(i),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),c_(t,e,r,i,n);case 15:return h0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),yu(t,e),e.tag=1,Vt(r)?(t=!0,qu(e)):t=!1,Rs(e,n),l0(e,r,i),df(e,r,i,n),mf(null,e,r,!0,t,n);case 19:return g0(t,e,n);case 22:return d0(t,e,n)}throw Error(B(156,e.tag))};function N0(t,e){return sI(t,e)}function D1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new D1(t,e,n,r)}function Gp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function V1(t){if(typeof t=="function")return Gp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cp)return 11;if(t===hp)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Ii(n.children,i,s,e);case up:o=8,i|=8;break;case Od:return t=Ht(12,n,e,i|2),t.elementType=Od,t.lanes=s,t;case Md:return t=Ht(13,n,e,i),t.elementType=Md,t.lanes=s,t;case Ld:return t=Ht(19,n,e,i),t.elementType=Ld,t.lanes=s,t;case zw:return Uc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Uw:o=10;break e;case Bw:o=9;break e;case cp:o=11;break e;case hp:o=14;break e;case hr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ii(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function Uc(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=zw,t.lanes=n,t.stateNode={isHidden:!1},t}function pd(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function md(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function O1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hh(0),this.expirationTimes=Hh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kp(t,e,n,r,i,s,o,a,u){return t=new O1(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kp(s),t}function M1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function D0(t){if(!t)return Mr;t=t._reactInternals;e:{if($i(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Vt(n))return DI(t,n,e)}return e}function V0(t,e,n,r,i,s,o,a,u){return t=Kp(n,r,!0,t,i,s,o,a,u),t.context=D0(null),n=t.current,r=St(),i=br(n),s=zn(r,i),s.callback=e??null,kr(n,s,i),t.current.lanes=i,Ha(t,i,r),Ot(t,r),t}function Bc(t,e,n,r){var i=e.current,s=St(),o=br(i);return n=D0(n),e.context===null?e.context=n:e.pendingContext=n,e=zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(i,e,o),t!==null&&(an(t,i,o,s),pu(t,i,o)),o}function rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function E_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wp(t,e){E_(t,e),(t=t.alternate)&&E_(t,e)}function L1(){return null}var O0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qp(t){this._internalRoot=t}zc.prototype.render=Qp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Bc(t,e,null,null)};zc.prototype.unmount=Qp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ki(function(){Bc(null,t,null,null)}),e[qn]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=dI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&pI(t)}};function Hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function T_(){}function F1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=rc(o);s.call(c)}}var o=V0(e,r,t,0,null,!1,!1,"",T_);return t._reactRootContainer=o,t[qn]=o.current,Pa(t.nodeType===8?t.parentNode:t),ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=rc(u);a.call(c)}}var u=Kp(t,0,!1,null,null,!1,!1,"",T_);return t._reactRootContainer=u,t[qn]=u.current,Pa(t.nodeType===8?t.parentNode:t),ki(function(){Bc(e,u,n,r)}),u}function qc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=rc(o);a.call(u)}}Bc(e,o,t,i)}else o=F1(n,e,t,i,r);return rc(o)}cI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(pp(e,n|1),Ot(e,Ue()),!(le&6)&&(js=Ue()+500,Qr()))}break;case 13:ki(function(){var r=Gn(t,1);if(r!==null){var i=St();an(r,t,1,i)}}),Wp(t,1)}};mp=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=St();an(e,t,134217728,n)}Wp(t,134217728)}};hI=function(t){if(t.tag===13){var e=br(t),n=Gn(t,e);if(n!==null){var r=St();an(n,t,e,r)}Wp(t,e)}};dI=function(){return he};fI=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Wd=function(t,e,n){switch(e){case"input":if(Ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vc(r);if(!i)throw Error(B(90));qw(r),Ud(r,i)}}}break;case"textarea":Kw(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};Zw=zp;eI=ki;var j1={usingClientEntryPoint:!1,Events:[Ya,ms,Vc,Yw,Xw,zp]},Bo={findFiberByHostInstance:mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U1={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rI(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||L1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Cc=Xl.inject(U1),_n=Xl}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hp(e))throw Error(B(200));return M1(t,e,null,n)};Gt.createRoot=function(t,e){if(!Hp(t))throw Error(B(299));var n=!1,r="",i=O0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kp(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,Pa(t.nodeType===8?t.parentNode:t),new Qp(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=rI(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return ki(t)};Gt.hydrate=function(t,e,n){if(!$c(e))throw Error(B(200));return qc(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!Hp(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=O0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=V0(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,Pa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zc(e)};Gt.render=function(t,e,n){if(!$c(e))throw Error(B(200));return qc(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!$c(t))throw Error(B(40));return t._reactRootContainer?(ki(function(){qc(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Gt.unstable_batchedUpdates=zp;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$c(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return qc(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function M0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M0)}catch(t){console.error(t)}}M0(),Mw.exports=Gt;var B1=Mw.exports,S_=B1;Dd.createRoot=S_.createRoot,Dd.hydrateRoot=S_.hydrateRoot;const L0=G.createContext(),z1=({children:t})=>{const[e,n]=G.useState(()=>localStorage.getItem("theme")||"dark");G.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const r=()=>{n(i=>i==="dark"?"light":"dark")};return v.jsx(L0.Provider,{value:{theme:e,toggleTheme:r},children:t})},$1="modulepreload",q1=function(t){return"/"+t},A_={},R_=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=q1(u),u in A_)return;A_[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":$1,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((p,_)=>{f.addEventListener("load",p),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var P_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},G1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},j0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(p=64)),r.push(n[d],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(F0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):G1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new K1;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class K1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W1=function(t){const e=F0(t);return j0.encodeByteArray(e,!0)},ic=function(t){return W1(t).replace(/\./g,"")},U0=function(t){try{return j0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=()=>Q1().__FIREBASE_DEFAULTS__,J1=()=>{if(typeof process>"u"||typeof P_>"u")return;const t=P_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Y1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&U0(t[1]);return e&&JSON.parse(e)},Gc=()=>{try{return H1()||J1()||Y1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B0=t=>{var e,n;return(n=(e=Gc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},X1=t=>{const e=B0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},z0=()=>{var t;return(t=Gc())===null||t===void 0?void 0:t.config},$0=t=>{var e;return(e=Gc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ic(JSON.stringify(n)),ic(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function nx(){var t;const e=(t=Gc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function q0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ix(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sx(){const t=Qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function G0(){return!nx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jp(){try{return typeof indexedDB=="object"}catch{return!1}}function K0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ox(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ax,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dn(i,a,r)}}function lx(t,e){return t.replace(ux,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ux=/\{\$([^}]+)}/g;function cx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(x_(s)&&x_(o)){if(!Wn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function x_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hx(t,e){const n=new dx(t,e);return n.subscribe.bind(n)}class dx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gd),i.error===void 0&&(i.error=gd),i.complete===void 0&&(i.complete=gd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=1e3,mx=2,gx=4*60*60*1e3,yx=.5;function k_(t,e=px,n=mx){const r=e*Math.pow(n,t),i=Math.round(yx*r*(Math.random()-.5)*2);return Math.min(gx,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Z1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wx(e))try{this.getOrInitializeService({instanceIdentifier:ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ui){return this.instances.has(e)}getOptions(e=ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ui){return this.component?this.component.multipleInstances?e:ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vx(t){return t===ui?void 0:t}function wx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _x(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Ex={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Tx=ie.INFO,Sx={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Ax=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Sx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kc{constructor(e){this.name=e,this._logLevel=Tx,this._logHandler=Ax,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ex[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Rx=(t,e)=>e.some(n=>t instanceof n);let C_,b_;function Px(){return C_||(C_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xx(){return b_||(b_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const W0=new WeakMap,Pf=new WeakMap,Q0=new WeakMap,yd=new WeakMap,Yp=new WeakMap;function kx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&W0.set(n,t)}).catch(()=>{}),Yp.set(e,t),e}function Cx(t){if(Pf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pf.set(t,e)}let xf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Q0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bx(t){xf=t(xf)}function Nx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_d(this),e,...n);return Q0.set(r,e.sort?e.sort():[e]),Dr(r)}:xx().includes(t)?function(...e){return t.apply(_d(this),e),Dr(W0.get(this))}:function(...e){return Dr(t.apply(_d(this),e))}}function Dx(t){return typeof t=="function"?Nx(t):(t instanceof IDBTransaction&&Cx(t),Rx(t,Px())?new Proxy(t,xf):t)}function Dr(t){if(t instanceof IDBRequest)return kx(t);if(yd.has(t))return yd.get(t);const e=Dx(t);return e!==t&&(yd.set(t,e),Yp.set(e,t)),e}const _d=t=>Yp.get(t);function H0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Dr(o.result),u.oldVersion,u.newVersion,Dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Vx=["get","getKey","getAll","getAllKeys","count"],Ox=["put","add","delete","clear"],vd=new Map;function N_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vd.get(e))return vd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ox.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Vx.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return vd.set(e,s),s}bx(t=>({...t,get:(e,n,r)=>N_(e,n)||t.get(e,n,r),has:(e,n)=>!!N_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kf="@firebase/app",D_="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Kc("@firebase/app"),Fx="@firebase/app-compat",jx="@firebase/analytics-compat",Ux="@firebase/analytics",Bx="@firebase/app-check-compat",zx="@firebase/app-check",$x="@firebase/auth",qx="@firebase/auth-compat",Gx="@firebase/database",Kx="@firebase/data-connect",Wx="@firebase/database-compat",Qx="@firebase/functions",Hx="@firebase/functions-compat",Jx="@firebase/installations",Yx="@firebase/installations-compat",Xx="@firebase/messaging",Zx="@firebase/messaging-compat",ek="@firebase/performance",tk="@firebase/performance-compat",nk="@firebase/remote-config",rk="@firebase/remote-config-compat",ik="@firebase/storage",sk="@firebase/storage-compat",ok="@firebase/firestore",ak="@firebase/vertexai-preview",lk="@firebase/firestore-compat",uk="firebase",ck="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="[DEFAULT]",hk={[kf]:"fire-core",[Fx]:"fire-core-compat",[Ux]:"fire-analytics",[jx]:"fire-analytics-compat",[zx]:"fire-app-check",[Bx]:"fire-app-check-compat",[$x]:"fire-auth",[qx]:"fire-auth-compat",[Gx]:"fire-rtdb",[Kx]:"fire-data-connect",[Wx]:"fire-rtdb-compat",[Qx]:"fire-fn",[Hx]:"fire-fn-compat",[Jx]:"fire-iid",[Yx]:"fire-iid-compat",[Xx]:"fire-fcm",[Zx]:"fire-fcm-compat",[ek]:"fire-perf",[tk]:"fire-perf-compat",[nk]:"fire-rc",[rk]:"fire-rc-compat",[ik]:"fire-gcs",[sk]:"fire-gcs-compat",[ok]:"fire-fst",[lk]:"fire-fst-compat",[ak]:"fire-vertex","fire-js":"fire-js",[uk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Map,dk=new Map,Cf=new Map;function V_(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(Cf.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,t);for(const n of oc.values())V_(n,t);for(const n of dk.values())V_(n,t);return!0}function Zn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fk(t,e,n=sc){Zn(t,e).clearInstance(n)}function Ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new qi("app","Firebase",pk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=ck;function J0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vr.create("bad-app-name",{appName:String(i)});if(n||(n=z0()),!n)throw Vr.create("no-options");const s=oc.get(i);if(s){if(Wn(n,s.options)&&Wn(r,s.config))return s;throw Vr.create("duplicate-app",{appName:i})}const o=new Ix(i);for(const u of Cf.values())o.addComponent(u);const a=new mk(n,r,o);return oc.set(i,a),a}function Xp(t=sc){const e=oc.get(t);if(!e&&t===sc&&z0())return J0();if(!e)throw Vr.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let i=(r=hk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(a.join(" "));return}Tn(new hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk="firebase-heartbeat-database",yk=1,Ma="firebase-heartbeat-store";let wd=null;function Y0(){return wd||(wd=H0(gk,yk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ma)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),wd}async function _k(t){try{const n=(await Y0()).transaction(Ma),r=await n.objectStore(Ma).get(X0(t));return await n.done,r}catch(e){if(e instanceof dn)Qn.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function O_(t,e){try{const r=(await Y0()).transaction(Ma,"readwrite");await r.objectStore(Ma).put(e,X0(t)),await r.done}catch(n){if(n instanceof dn)Qn.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function X0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=1024,wk=30*24*60*60*1e3;class Ik{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=M_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=M_(),{heartbeatsToSend:r,unsentEntries:i}=Ek(this._heartbeatsCache.heartbeats),s=ic(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qn.warn(n),""}}}function M_(){return new Date().toISOString().substring(0,10)}function Ek(t,e=vk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),L_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jp()?K0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _k(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function L_(t){return ic(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){Tn(new hn("platform-logger",e=>new Mx(e),"PRIVATE")),Tn(new hn("heartbeat",e=>new Ik(e),"PRIVATE")),Yt(kf,D_,t),Yt(kf,D_,"esm2017"),Yt("fire-js","")}Sk("");function Zp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Z0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ak=Z0,eE=new qi("auth","Firebase",Z0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Kc("@firebase/auth");function Rk(t,...e){ac.logLevel<=ie.WARN&&ac.warn(`Auth (${so}): ${t}`,...e)}function Iu(t,...e){ac.logLevel<=ie.ERROR&&ac.error(`Auth (${so}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,...e){throw tm(t,...e)}function ln(t,...e){return tm(t,...e)}function em(t,e,n){const r=Object.assign(Object.assign({},Ak()),{[e]:n});return new qi("auth","Firebase",r).create(e,{appName:t.name})}function Ei(t){return em(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Sn(t,"argument-error"),em(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return eE.create(t,...e)}function X(t,e,...n){if(!t)throw tm(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Iu(e),new Error(e)}function Hn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xk(){return F_()==="http:"||F_()==="https:"}function F_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xk()||q0()||"connection"in navigator)?navigator.onLine:!0}function Ck(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=tx()||ix()}get(){return kk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new el(3e4,6e4);function rm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oo(t,e,n,r,i={}){return nE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Za(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return rx()||(c.referrerPolicy="no-referrer"),tE.fetch()(rE(t,t.config.apiHost,n,a),c)})}async function nE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bk),e);try{const i=new Vk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Zl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Zl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw em(t,d,c);Sn(t,d)}}catch(i){if(i instanceof dn)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function Dk(t,e,n,r,i={}){const s=await oo(t,e,n,r,i);return"mfaPendingCredential"in s&&Sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function rE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?nm(t.config,i):`${t.config.apiScheme}://${i}`}class Vk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),Nk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ln(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(t,e){return oo(t,"POST","/v1/accounts:delete",e)}async function iE(t,e){return oo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mk(t,e=!1){const n=pe(t),r=await n.getIdToken(e),i=im(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ha(Id(i.auth_time)),issuedAtTime:ha(Id(i.iat)),expirationTime:ha(Id(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Id(t){return Number(t)*1e3}function im(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const i=U0(n);return i?JSON.parse(i):(Iu("Failed to decode base64 JWT payload"),null)}catch(i){return Iu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function j_(t){const e=im(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&Lk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Lk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ha(this.lastLoginAt),this.creationTime=ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await La(t,iE(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sE(s.providerUserInfo):[],a=Uk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function jk(t){const e=pe(t);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Uk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sE(t){return t.map(e=>{var{providerId:n}=e,r=Zp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e){const n=await nE(t,{},async()=>{const r=Za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=rE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zk(t,e){return oo(t,"POST","/v2/accounts:revokeToken",rm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):j_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=j_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Bk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xs,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await La(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mk(this,e)}reload(){return jk(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(Ei(this.auth));const e=await this.getIdToken();return await La(this,Ok(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:R,emailVerified:V,isAnonymous:F,providerData:L,stsTokenManager:T}=n;X(R&&T,e,"internal-error");const g=xs.fromJSON(this.name,T);X(typeof R=="string",e,"internal-error"),lr(f,e.name),lr(p,e.name),X(typeof V=="boolean",e,"internal-error"),X(typeof F=="boolean",e,"internal-error"),lr(_,e.name),lr(S,e.name),lr(k,e.name),lr(N,e.name),lr(E,e.name),lr(w,e.name);const A=new jn({uid:R,auth:e,email:p,emailVerified:V,displayName:f,isAnonymous:F,photoURL:S,phoneNumber:_,tenantId:k,stsTokenManager:g,createdAt:E,lastLoginAt:w});return L&&Array.isArray(L)&&(A.providerData=L.map(I=>Object.assign({},I))),N&&(A._redirectEventId=N),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new xs;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?sE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new xs;a.updateFromIdToken(r);const u=new jn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Nf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Map;function Un(t){Hn(t instanceof Function,"Expected a class definition");let e=U_.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,U_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oE.type="NONE";const B_=oE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Eu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Eu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ks(Un(B_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Un(B_);const o=Eu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=jn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ks(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ks(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dE(e))return"Blackberry";if(fE(e))return"Webos";if(lE(e))return"Safari";if((e.includes("chrome/")||uE(e))&&!e.includes("edge/"))return"Chrome";if(hE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aE(t=Qe()){return/firefox\//i.test(t)}function lE(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uE(t=Qe()){return/crios\//i.test(t)}function cE(t=Qe()){return/iemobile/i.test(t)}function hE(t=Qe()){return/android/i.test(t)}function dE(t=Qe()){return/blackberry/i.test(t)}function fE(t=Qe()){return/webos/i.test(t)}function sm(t=Qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $k(t=Qe()){var e;return sm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qk(){return sx()&&document.documentMode===10}function pE(t=Qe()){return sm(t)||hE(t)||fE(t)||dE(t)||/windows phone/i.test(t)||cE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e=[]){let n;switch(t){case"Browser":n=z_(Qe());break;case"Worker":n=`${z_(Qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${so}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e={}){return oo(t,"GET","/v2/passwordPolicy",rm(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=6;class Qk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Wk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $_(this),this.idTokenSubscription=new $_(this),this.beforeStateQueue=new Gk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await iE(this,{idToken:e}),r=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ck()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(Ei(this));const n=e?pe(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(Ei(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(Ei(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kk(this),n=new Qk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Rk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wc(t){return pe(t)}class $_{constructor(e){this.auth=e,this.observer=null,this.addObserver=hx(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let om={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jk(t){om=t}function Yk(t){return om.loadJS(t)}function Xk(){return om.gapiScript}function Zk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t,e){const n=Zn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wn(s,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function tC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nC(t,e,n){const r=Wc(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=gE(e),{host:o,port:a}=rC(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),iC()}function gE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rC(t){const e=gE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:q_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:q_(o)}}}function q_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return Dk(t,"POST","/v1/accounts:signInWithIdp",rm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="http://localhost";class Ci extends yE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:sC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Za(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends am{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends tl{constructor(){super("facebook.com")}static credential(e){return Ci._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ci._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends tl{constructor(){super("github.com")}static credential(e){return Ci._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends tl{constructor(){super("twitter.com")}static credential(e,n){return Ci._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=G_(r);return new Us({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=G_(r);return new Us({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function G_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uc(e,n,r,i)}}function _E(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(t,s,e,r):s})}async function oC(t,e,n=!1){const r=await La(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Us._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e,n=!1){const{auth:r}=t;if(Ln(r.app))return Promise.reject(Ei(r));const i="reauthenticate";try{const s=await La(t,_E(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=im(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Us._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(t,e,n=!1){if(Ln(t.app))return Promise.reject(Ei(t));const r="signIn",i=await _E(t,r,e),s=await Us._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function uC(t,e,n,r){return pe(t).onIdTokenChanged(e,n,r)}function cC(t,e,n){return pe(t).beforeAuthStateChanged(e,n)}function hC(t,e,n,r){return pe(t).onAuthStateChanged(e,n,r)}function dC(t){return pe(t).signOut()}const cc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=1e3,pC=10;class wE extends vE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wE.type="LOCAL";const mC=wE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends vE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}IE.type="SESSION";const EE=IE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await gC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=lm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function _C(t){wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function vC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IC(){return TE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="firebaseLocalStorageDb",EC=1,hc="firebaseLocalStorage",AE="fbase_key";class nl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hc(t,e){return t.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function TC(){const t=indexedDB.deleteDatabase(SE);return new nl(t).toPromise()}function Df(){const t=indexedDB.open(SE,EC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hc,{keyPath:AE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hc)?e(r):(r.close(),await TC(),e(await Df()))})})}async function K_(t,e,n){const r=Hc(t,!0).put({[AE]:e,value:n});return new nl(r).toPromise()}async function SC(t,e){const n=Hc(t,!1).get(e),r=await new nl(n).toPromise();return r===void 0?null:r.value}function W_(t,e){const n=Hc(t,!0).delete(e);return new nl(n).toPromise()}const AC=800,RC=3;class RE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Df(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qc._getInstance(IC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vC(),!this.activeServiceWorker)return;this.sender=new yC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Df();return await K_(e,cc,"1"),await W_(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>K_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>W_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hc(i,!1).getAll();return new nl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RE.type="LOCAL";const PC=RE;new el(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t,e){return e?Un(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um extends yE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xC(t){return lC(t.auth,new um(t),t.bypassAuthState)}function kC(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),aC(n,new um(t),t.bypassAuthState)}async function CC(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),oC(n,new um(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xC;case"linkViaPopup":case"linkViaRedirect":return CC;case"reauthViaPopup":case"reauthViaRedirect":return kC;default:Sn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=new el(2e3,1e4);async function NC(t,e,n){if(Ln(t.app))return Promise.reject(ln(t,"operation-not-supported-in-this-environment"));const r=Wc(t);Pk(t,e,am);const i=PE(r,n);return new _i(r,"signInViaPopup",e,i).executeNotNull()}class _i extends xE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bC.get())};e()}}_i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="pendingRedirect",Tu=new Map;class VC extends xE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tu.get(this.auth._key());if(!e){try{const r=await OC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tu.set(this.auth._key(),e)}return this.bypassAuthState||Tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OC(t,e){const n=FC(e),r=LC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function MC(t,e){Tu.set(t._key(),e)}function LC(t){return Un(t._redirectPersistence)}function FC(t){return Eu(DC,t.config.apiKey,t.name)}async function jC(t,e,n=!1){if(Ln(t.app))return Promise.reject(Ei(t));const r=Wc(t),i=PE(r,e),o=await new VC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=10*60*1e3;class BC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Q_(e))}saveEventToCache(e){this.cachedEventUids.add(Q_(e)),this.lastProcessedEventTime=Date.now()}}function Q_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(t,e={}){return oo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GC=/^https?/;async function KC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $C(t);for(const n of e)try{if(WC(n))return}catch{}Sn(t,"unauthorized-domain")}function WC(t){const e=bf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GC.test(n))return!1;if(qC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=new el(3e4,6e4);function H_(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HC(t){return new Promise((e,n)=>{var r,i,s;function o(){H_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{H_(),n(ln(t,"network-request-failed"))},timeout:QC.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const a=Zk("iframefcb");return wn()[a]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},Yk(`${Xk()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Su=null,e})}let Su=null;function JC(t){return Su=Su||HC(t),Su}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new el(5e3,15e3),XC="__/auth/iframe",ZC="emulator/auth/iframe",eb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nb(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nm(e,ZC):`https://${t.config.authDomain}/${XC}`,r={apiKey:e.apiKey,appName:t.name,v:so},i=tb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Za(r).slice(1)}`}async function rb(t){const e=await JC(t),n=wn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:nb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),a=wn().setTimeout(()=>{s(o)},YC.get());function u(){wn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sb=500,ob=600,ab="_blank",lb="http://localhost";class J_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ub(t,e,n,r=sb,i=ob){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},ib),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Qe().toLowerCase();n&&(a=uE(c)?ab:n),aE(c)&&(e=e||lb,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[_,S])=>`${p}${_}=${S},`,"");if($k(c)&&a!=="_self")return cb(e||"",a),new J_(null);const f=window.open(e||"",a,d);X(f,t,"popup-blocked");try{f.focus()}catch{}return new J_(f)}function cb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="__/auth/handler",db="emulator/auth/handler",fb=encodeURIComponent("fac");async function Y_(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:so,eventId:i};if(e instanceof am){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof tl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${fb}=${encodeURIComponent(u)}`:"";return`${pb(t)}?${Za(a).slice(1)}${c}`}function pb({config:t}){return t.emulator?nm(t,db):`https://${t.authDomain}/${hb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="webStorageSupport";class mb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=EE,this._completeRedirectFn=jC,this._overrideRedirectResult=MC}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Y_(e,n,r,bf(),i);return ub(e,o,lm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Y_(e,n,r,bf(),i);return _C(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rb(e),r=new BC(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ed,{type:Ed},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ed];o!==void 0&&n(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pE()||lE()||sm()}}const gb=mb;var X_="@firebase/auth",Z_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vb(t){Tn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mE(t)},c=new Hk(r,i,s,u);return tC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new hn("auth-internal",e=>{const n=Wc(e.getProvider("auth").getImmediate());return(r=>new yb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(X_,Z_,_b(t)),Yt(X_,Z_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=5*60,Ib=$0("authIdTokenMaxAge")||wb;let ev=null;const Eb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ib)return;const i=n==null?void 0:n.token;ev!==i&&(ev=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tb(t=Xp()){const e=Zn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eC(t,{popupRedirectResolver:gb,persistence:[PC,mC,EE]}),r=$0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Eb(s.toString());cC(n,o,()=>o(n.currentUser)),uC(n,a=>o(a))}}const i=B0("auth");return i&&nC(n,`http://${i}`),n}function Sb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Jk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Sb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vb("Browser");var Ab="firebase",Rb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(Ab,Rb,"app");var tv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ti,CE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function A(){}A.prototype=g.prototype,T.D=g.prototype,T.prototype=new A,T.prototype.constructor=T,T.C=function(I,x,C){for(var P=Array(arguments.length-2),de=2;de<arguments.length;de++)P[de-2]=arguments[de];return g.prototype[x].apply(I,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,g,A){A||(A=0);var I=Array(16);if(typeof g=="string")for(var x=0;16>x;++x)I[x]=g.charCodeAt(A++)|g.charCodeAt(A++)<<8|g.charCodeAt(A++)<<16|g.charCodeAt(A++)<<24;else for(x=0;16>x;++x)I[x]=g[A++]|g[A++]<<8|g[A++]<<16|g[A++]<<24;g=T.g[0],A=T.g[1],x=T.g[2];var C=T.g[3],P=g+(C^A&(x^C))+I[0]+3614090360&4294967295;g=A+(P<<7&4294967295|P>>>25),P=C+(x^g&(A^x))+I[1]+3905402710&4294967295,C=g+(P<<12&4294967295|P>>>20),P=x+(A^C&(g^A))+I[2]+606105819&4294967295,x=C+(P<<17&4294967295|P>>>15),P=A+(g^x&(C^g))+I[3]+3250441966&4294967295,A=x+(P<<22&4294967295|P>>>10),P=g+(C^A&(x^C))+I[4]+4118548399&4294967295,g=A+(P<<7&4294967295|P>>>25),P=C+(x^g&(A^x))+I[5]+1200080426&4294967295,C=g+(P<<12&4294967295|P>>>20),P=x+(A^C&(g^A))+I[6]+2821735955&4294967295,x=C+(P<<17&4294967295|P>>>15),P=A+(g^x&(C^g))+I[7]+4249261313&4294967295,A=x+(P<<22&4294967295|P>>>10),P=g+(C^A&(x^C))+I[8]+1770035416&4294967295,g=A+(P<<7&4294967295|P>>>25),P=C+(x^g&(A^x))+I[9]+2336552879&4294967295,C=g+(P<<12&4294967295|P>>>20),P=x+(A^C&(g^A))+I[10]+4294925233&4294967295,x=C+(P<<17&4294967295|P>>>15),P=A+(g^x&(C^g))+I[11]+2304563134&4294967295,A=x+(P<<22&4294967295|P>>>10),P=g+(C^A&(x^C))+I[12]+1804603682&4294967295,g=A+(P<<7&4294967295|P>>>25),P=C+(x^g&(A^x))+I[13]+4254626195&4294967295,C=g+(P<<12&4294967295|P>>>20),P=x+(A^C&(g^A))+I[14]+2792965006&4294967295,x=C+(P<<17&4294967295|P>>>15),P=A+(g^x&(C^g))+I[15]+1236535329&4294967295,A=x+(P<<22&4294967295|P>>>10),P=g+(x^C&(A^x))+I[1]+4129170786&4294967295,g=A+(P<<5&4294967295|P>>>27),P=C+(A^x&(g^A))+I[6]+3225465664&4294967295,C=g+(P<<9&4294967295|P>>>23),P=x+(g^A&(C^g))+I[11]+643717713&4294967295,x=C+(P<<14&4294967295|P>>>18),P=A+(C^g&(x^C))+I[0]+3921069994&4294967295,A=x+(P<<20&4294967295|P>>>12),P=g+(x^C&(A^x))+I[5]+3593408605&4294967295,g=A+(P<<5&4294967295|P>>>27),P=C+(A^x&(g^A))+I[10]+38016083&4294967295,C=g+(P<<9&4294967295|P>>>23),P=x+(g^A&(C^g))+I[15]+3634488961&4294967295,x=C+(P<<14&4294967295|P>>>18),P=A+(C^g&(x^C))+I[4]+3889429448&4294967295,A=x+(P<<20&4294967295|P>>>12),P=g+(x^C&(A^x))+I[9]+568446438&4294967295,g=A+(P<<5&4294967295|P>>>27),P=C+(A^x&(g^A))+I[14]+3275163606&4294967295,C=g+(P<<9&4294967295|P>>>23),P=x+(g^A&(C^g))+I[3]+4107603335&4294967295,x=C+(P<<14&4294967295|P>>>18),P=A+(C^g&(x^C))+I[8]+1163531501&4294967295,A=x+(P<<20&4294967295|P>>>12),P=g+(x^C&(A^x))+I[13]+2850285829&4294967295,g=A+(P<<5&4294967295|P>>>27),P=C+(A^x&(g^A))+I[2]+4243563512&4294967295,C=g+(P<<9&4294967295|P>>>23),P=x+(g^A&(C^g))+I[7]+1735328473&4294967295,x=C+(P<<14&4294967295|P>>>18),P=A+(C^g&(x^C))+I[12]+2368359562&4294967295,A=x+(P<<20&4294967295|P>>>12),P=g+(A^x^C)+I[5]+4294588738&4294967295,g=A+(P<<4&4294967295|P>>>28),P=C+(g^A^x)+I[8]+2272392833&4294967295,C=g+(P<<11&4294967295|P>>>21),P=x+(C^g^A)+I[11]+1839030562&4294967295,x=C+(P<<16&4294967295|P>>>16),P=A+(x^C^g)+I[14]+4259657740&4294967295,A=x+(P<<23&4294967295|P>>>9),P=g+(A^x^C)+I[1]+2763975236&4294967295,g=A+(P<<4&4294967295|P>>>28),P=C+(g^A^x)+I[4]+1272893353&4294967295,C=g+(P<<11&4294967295|P>>>21),P=x+(C^g^A)+I[7]+4139469664&4294967295,x=C+(P<<16&4294967295|P>>>16),P=A+(x^C^g)+I[10]+3200236656&4294967295,A=x+(P<<23&4294967295|P>>>9),P=g+(A^x^C)+I[13]+681279174&4294967295,g=A+(P<<4&4294967295|P>>>28),P=C+(g^A^x)+I[0]+3936430074&4294967295,C=g+(P<<11&4294967295|P>>>21),P=x+(C^g^A)+I[3]+3572445317&4294967295,x=C+(P<<16&4294967295|P>>>16),P=A+(x^C^g)+I[6]+76029189&4294967295,A=x+(P<<23&4294967295|P>>>9),P=g+(A^x^C)+I[9]+3654602809&4294967295,g=A+(P<<4&4294967295|P>>>28),P=C+(g^A^x)+I[12]+3873151461&4294967295,C=g+(P<<11&4294967295|P>>>21),P=x+(C^g^A)+I[15]+530742520&4294967295,x=C+(P<<16&4294967295|P>>>16),P=A+(x^C^g)+I[2]+3299628645&4294967295,A=x+(P<<23&4294967295|P>>>9),P=g+(x^(A|~C))+I[0]+4096336452&4294967295,g=A+(P<<6&4294967295|P>>>26),P=C+(A^(g|~x))+I[7]+1126891415&4294967295,C=g+(P<<10&4294967295|P>>>22),P=x+(g^(C|~A))+I[14]+2878612391&4294967295,x=C+(P<<15&4294967295|P>>>17),P=A+(C^(x|~g))+I[5]+4237533241&4294967295,A=x+(P<<21&4294967295|P>>>11),P=g+(x^(A|~C))+I[12]+1700485571&4294967295,g=A+(P<<6&4294967295|P>>>26),P=C+(A^(g|~x))+I[3]+2399980690&4294967295,C=g+(P<<10&4294967295|P>>>22),P=x+(g^(C|~A))+I[10]+4293915773&4294967295,x=C+(P<<15&4294967295|P>>>17),P=A+(C^(x|~g))+I[1]+2240044497&4294967295,A=x+(P<<21&4294967295|P>>>11),P=g+(x^(A|~C))+I[8]+1873313359&4294967295,g=A+(P<<6&4294967295|P>>>26),P=C+(A^(g|~x))+I[15]+4264355552&4294967295,C=g+(P<<10&4294967295|P>>>22),P=x+(g^(C|~A))+I[6]+2734768916&4294967295,x=C+(P<<15&4294967295|P>>>17),P=A+(C^(x|~g))+I[13]+1309151649&4294967295,A=x+(P<<21&4294967295|P>>>11),P=g+(x^(A|~C))+I[4]+4149444226&4294967295,g=A+(P<<6&4294967295|P>>>26),P=C+(A^(g|~x))+I[11]+3174756917&4294967295,C=g+(P<<10&4294967295|P>>>22),P=x+(g^(C|~A))+I[2]+718787259&4294967295,x=C+(P<<15&4294967295|P>>>17),P=A+(C^(x|~g))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(x+(P<<21&4294967295|P>>>11))&4294967295,T.g[2]=T.g[2]+x&4294967295,T.g[3]=T.g[3]+C&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var A=g-this.blockSize,I=this.B,x=this.h,C=0;C<g;){if(x==0)for(;C<=A;)i(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<g;)if(I[x++]=T.charCodeAt(C++),x==this.blockSize){i(this,I),x=0;break}}else for(;C<g;)if(I[x++]=T[C++],x==this.blockSize){i(this,I),x=0;break}}this.h=x,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var A=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=A&255,A/=256;for(this.u(T),T=Array(16),g=A=0;4>g;++g)for(var I=0;32>I;I+=8)T[A++]=this.g[g]>>>I&255;return T};function s(T,g){var A=a;return Object.prototype.hasOwnProperty.call(A,T)?A[T]:A[T]=g(T)}function o(T,g){this.h=g;for(var A=[],I=!0,x=T.length-1;0<=x;x--){var C=T[x]|0;I&&C==g||(A[x]=C,I=!1)}this.g=A}var a={};function u(T){return-128<=T&&128>T?s(T,function(g){return new o([g|0],0>g?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return N(c(-T));for(var g=[],A=1,I=0;T>=A;I++)g[I]=T/A|0,A*=4294967296;return new o(g,0)}function d(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return N(d(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(g,8)),I=f,x=0;x<T.length;x+=8){var C=Math.min(8,T.length-x),P=parseInt(T.substring(x,x+C),g);8>C?(C=c(Math.pow(g,C)),I=I.j(C).add(c(P))):(I=I.j(A),I=I.add(c(P)))}return I}var f=u(0),p=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var T=0,g=1,A=0;A<this.g.length;A++){var I=this.i(A);T+=(0<=I?I:4294967296+I)*g,g*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(k(this))return"-"+N(this).toString(T);for(var g=c(Math.pow(T,6)),A=this,I="";;){var x=V(A,g).g;A=E(A,x.j(g));var C=((0<A.g.length?A.g[0]:A.h)>>>0).toString(T);if(A=x,S(A))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=E(this,T),k(T)?-1:S(T)?0:1};function N(T){for(var g=T.g.length,A=[],I=0;I<g;I++)A[I]=~T.g[I];return new o(A,~T.h).add(p)}t.abs=function(){return k(this)?N(this):this},t.add=function(T){for(var g=Math.max(this.g.length,T.g.length),A=[],I=0,x=0;x<=g;x++){var C=I+(this.i(x)&65535)+(T.i(x)&65535),P=(C>>>16)+(this.i(x)>>>16)+(T.i(x)>>>16);I=P>>>16,C&=65535,P&=65535,A[x]=P<<16|C}return new o(A,A[A.length-1]&-2147483648?-1:0)};function E(T,g){return T.add(N(g))}t.j=function(T){if(S(this)||S(T))return f;if(k(this))return k(T)?N(this).j(N(T)):N(N(this).j(T));if(k(T))return N(this.j(N(T)));if(0>this.l(_)&&0>T.l(_))return c(this.m()*T.m());for(var g=this.g.length+T.g.length,A=[],I=0;I<2*g;I++)A[I]=0;for(I=0;I<this.g.length;I++)for(var x=0;x<T.g.length;x++){var C=this.i(I)>>>16,P=this.i(I)&65535,de=T.i(x)>>>16,we=T.i(x)&65535;A[2*I+2*x]+=P*we,w(A,2*I+2*x),A[2*I+2*x+1]+=C*we,w(A,2*I+2*x+1),A[2*I+2*x+1]+=P*de,w(A,2*I+2*x+1),A[2*I+2*x+2]+=C*de,w(A,2*I+2*x+2)}for(I=0;I<g;I++)A[I]=A[2*I+1]<<16|A[2*I];for(I=g;I<2*g;I++)A[I]=0;return new o(A,0)};function w(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function R(T,g){this.g=T,this.h=g}function V(T,g){if(S(g))throw Error("division by zero");if(S(T))return new R(f,f);if(k(T))return g=V(N(T),g),new R(N(g.g),N(g.h));if(k(g))return g=V(T,N(g)),new R(N(g.g),g.h);if(30<T.g.length){if(k(T)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var A=p,I=g;0>=I.l(T);)A=F(A),I=F(I);var x=L(A,1),C=L(I,1);for(I=L(I,2),A=L(A,2);!S(I);){var P=C.add(I);0>=P.l(T)&&(x=x.add(A),C=P),I=L(I,1),A=L(A,1)}return g=E(T,x.j(g)),new R(x,g)}for(x=f;0<=T.l(g);){for(A=Math.max(1,Math.floor(T.m()/g.m())),I=Math.ceil(Math.log(A)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=c(A),P=C.j(g);k(P)||0<P.l(T);)A-=I,C=c(A),P=C.j(g);S(C)&&(C=p),x=x.add(C),T=E(T,P)}return new R(x,T)}t.A=function(T){return V(this,T).h},t.and=function(T){for(var g=Math.max(this.g.length,T.g.length),A=[],I=0;I<g;I++)A[I]=this.i(I)&T.i(I);return new o(A,this.h&T.h)},t.or=function(T){for(var g=Math.max(this.g.length,T.g.length),A=[],I=0;I<g;I++)A[I]=this.i(I)|T.i(I);return new o(A,this.h|T.h)},t.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),A=[],I=0;I<g;I++)A[I]=this.i(I)^T.i(I);return new o(A,this.h^T.h)};function F(T){for(var g=T.g.length+1,A=[],I=0;I<g;I++)A[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(A,T.h)}function L(T,g){var A=g>>5;g%=32;for(var I=T.g.length-A,x=[],C=0;C<I;C++)x[C]=0<g?T.i(C+A)>>>g|T.i(C+A+1)<<32-g:T.i(C+A);return new o(x,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,CE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ti=o}).apply(typeof tv<"u"?tv:typeof self<"u"?self:typeof window<"u"?window:{});var eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bE,Yo,NE,Au,Vf,DE,VE,OE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof eu=="object"&&eu];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var D=l[y];if(!(D in m))break e;m=m[D]}l=l[l.length-1],y=m[l],h=h(y),h!=y&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var m=0,y=!1,D={next:function(){if(!y&&m<l.length){var M=m++;return{value:h(M,l[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function f(l,h,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),l.apply(h,D)}}return function(){return l.apply(h,arguments)}}function p(l,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function _(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function S(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,D,M){for(var $=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)$[ye-2]=arguments[ye];return h.prototype[D].apply(y,$)}}function k(l){const h=l.length;if(0<h){const m=Array(h);for(let y=0;y<h;y++)m[y]=l[y];return m}return[]}function N(l,h){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const D=l.length||0,M=y.length||0;l.length=D+M;for(let $=0;$<M;$++)l[D+$]=y[$]}else l.push(y)}}class E{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(l){return/^[\s\xa0]*$/.test(l)}function R(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function V(l){return V[" "](l),l}V[" "]=function(){};var F=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function L(l,h,m){for(const y in l)h.call(m,l[y],y,l)}function T(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function g(l){const h={};for(const m in l)h[m]=l[m];return h}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(l,h){let m,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(m in y)l[m]=y[m];for(let M=0;M<A.length;M++)m=A[M],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function x(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function C(l){a.setTimeout(()=>{throw l},0)}function P(){var l=Z;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class de{constructor(){this.h=this.g=null}add(h,m){const y=we.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var we=new E(()=>new Je,l=>l.reset());class Je{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Pt,K=!1,Z=new de,te=()=>{const l=a.Promise.resolve(void 0);Pt=()=>{l.then(be)}};var be=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(m){C(m)}var h=we;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}K=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Rn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function Pn(l,h){if(je.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(F){e:{try{V(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:xn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Pn.aa.h.call(this)}}S(Pn,je);var xn={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),LA=0;function FA(l,h,m,y,D){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=D,this.key=++LA,this.da=this.fa=!1}function _l(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function vl(l){this.src=l,this.g={},this.h=0}vl.prototype.add=function(l,h,m,y,D){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var $=Eh(l,h,y,D);return-1<$?(h=l[$],m||(h.fa=!1)):(h=new FA(h,this.src,M,!!y,D),h.fa=m,l.push(h)),h};function Ih(l,h){var m=h.type;if(m in l.g){var y=l.g[m],D=Array.prototype.indexOf.call(y,h,void 0),M;(M=0<=D)&&Array.prototype.splice.call(y,D,1),M&&(_l(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Eh(l,h,m,y){for(var D=0;D<l.length;++D){var M=l[D];if(!M.da&&M.listener==h&&M.capture==!!m&&M.ha==y)return D}return-1}var Th="closure_lm_"+(1e6*Math.random()|0),Sh={};function yg(l,h,m,y,D){if(Array.isArray(h)){for(var M=0;M<h.length;M++)yg(l,h[M],m,y,D);return null}return m=wg(m),l&&l[kn]?l.K(h,m,c(y)?!!y.capture:!1,D):jA(l,h,m,!1,y,D)}function jA(l,h,m,y,D,M){if(!h)throw Error("Invalid event type");var $=c(D)?!!D.capture:!!D,ye=Rh(l);if(ye||(l[Th]=ye=new vl(l)),m=ye.add(h,m,y,$,M),m.proxy)return m;if(y=UA(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)Rn||(D=$),D===void 0&&(D=!1),l.addEventListener(h.toString(),y,D);else if(l.attachEvent)l.attachEvent(vg(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function UA(){function l(m){return h.call(l.src,l.listener,m)}const h=BA;return l}function _g(l,h,m,y,D){if(Array.isArray(h))for(var M=0;M<h.length;M++)_g(l,h[M],m,y,D);else y=c(y)?!!y.capture:!!y,m=wg(m),l&&l[kn]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],m=Eh(M,m,y,D),-1<m&&(_l(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=Rh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Eh(h,m,y,D)),(m=-1<l?h[l]:null)&&Ah(m))}function Ah(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[kn])Ih(h.i,l);else{var m=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(m,y,l.capture):h.detachEvent?h.detachEvent(vg(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=Rh(h))?(Ih(m,l),m.h==0&&(m.src=null,h[Th]=null)):_l(l)}}}function vg(l){return l in Sh?Sh[l]:Sh[l]="on"+l}function BA(l,h){if(l.da)l=!0;else{h=new Pn(h,this);var m=l.listener,y=l.ha||l.src;l.fa&&Ah(l),l=m.call(y,h)}return l}function Rh(l){return l=l[Th],l instanceof vl?l:null}var Ph="__closure_events_fn_"+(1e9*Math.random()>>>0);function wg(l){return typeof l=="function"?l:(l[Ph]||(l[Ph]=function(h){return l.handleEvent(h)}),l[Ph])}function ut(){ge.call(this),this.i=new vl(this),this.M=this,this.F=null}S(ut,ge),ut.prototype[kn]=!0,ut.prototype.removeEventListener=function(l,h,m,y){_g(this,l,h,m,y)};function wt(l,h){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new je(h,l);else if(h instanceof je)h.target=h.target||l;else{var D=h;h=new je(y,l),I(h,D)}if(D=!0,m)for(var M=m.length-1;0<=M;M--){var $=h.g=m[M];D=wl($,y,!0,h)&&D}if($=h.g=l,D=wl($,y,!0,h)&&D,D=wl($,y,!1,h)&&D,m)for(M=0;M<m.length;M++)$=h.g=m[M],D=wl($,y,!1,h)&&D}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],y=0;y<m.length;y++)_l(m[y]);delete l.g[h],l.h--}}this.F=null},ut.prototype.K=function(l,h,m,y){return this.i.add(String(l),h,!1,m,y)},ut.prototype.L=function(l,h,m,y){return this.i.add(String(l),h,!0,m,y)};function wl(l,h,m,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,M=0;M<h.length;++M){var $=h[M];if($&&!$.da&&$.capture==m){var ye=$.listener,rt=$.ha||$.src;$.fa&&Ih(l.i,$),D=ye.call(rt,y)!==!1&&D}}return D&&!y.defaultPrevented}function Ig(l,h,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Eg(l){l.g=Ig(()=>{l.g=null,l.i&&(l.i=!1,Eg(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class zA extends ge{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Eg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Io(l){ge.call(this),this.h=l,this.g={}}S(Io,ge);var Tg=[];function Sg(l){L(l.g,function(h,m){this.g.hasOwnProperty(m)&&Ah(h)},l),l.g={}}Io.prototype.N=function(){Io.aa.N.call(this),Sg(this)},Io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xh=a.JSON.stringify,$A=a.JSON.parse,qA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function kh(){}kh.prototype.h=null;function Ag(l){return l.h||(l.h=l.i())}function Rg(){}var Eo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ch(){je.call(this,"d")}S(Ch,je);function bh(){je.call(this,"c")}S(bh,je);var ni={},Pg=null;function Il(){return Pg=Pg||new ut}ni.La="serverreachability";function xg(l){je.call(this,ni.La,l)}S(xg,je);function To(l){const h=Il();wt(h,new xg(h))}ni.STAT_EVENT="statevent";function kg(l,h){je.call(this,ni.STAT_EVENT,l),this.stat=h}S(kg,je);function It(l){const h=Il();wt(h,new kg(h,l))}ni.Ma="timingevent";function Cg(l,h){je.call(this,ni.Ma,l),this.size=h}S(Cg,je);function So(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Ao(){this.g=!0}Ao.prototype.xa=function(){this.g=!1};function GA(l,h,m,y,D,M){l.info(function(){if(l.g)if(M)for(var $="",ye=M.split("&"),rt=0;rt<ye.length;rt++){var ue=ye[rt].split("=");if(1<ue.length){var ct=ue[0];ue=ue[1];var ht=ct.split("_");$=2<=ht.length&&ht[1]=="type"?$+(ct+"="+ue+"&"):$+(ct+"=redacted&")}}else $=null;else $=M;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+h+`
`+m+`
`+$})}function KA(l,h,m,y,D,M,$){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+h+`
`+m+`
`+M+" "+$})}function Hi(l,h,m,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+QA(l,m)+(y?" "+y:"")})}function WA(l,h){l.info(function(){return"TIMEOUT: "+h})}Ao.prototype.info=function(){};function QA(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var M=D[0];if(M!="noop"&&M!="stop"&&M!="close")for(var $=1;$<D.length;$++)D[$]=""}}}}return xh(m)}catch{return h}}var El={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nh;function Tl(){}S(Tl,kh),Tl.prototype.g=function(){return new XMLHttpRequest},Tl.prototype.i=function(){return{}},Nh=new Tl;function ir(l,h,m,y){this.j=l,this.i=h,this.l=m,this.R=y||1,this.U=new Io(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ng}function Ng(){this.i=null,this.g="",this.h=!1}var Dg={},Dh={};function Vh(l,h,m){l.L=1,l.v=Pl(Cn(h)),l.m=m,l.P=!0,Vg(l,null)}function Vg(l,h){l.F=Date.now(),Sl(l),l.A=Cn(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Qg(m.i,"t",y),l.C=0,m=l.j.J,l.h=new Ng,l.g=dy(l.j,m?h:null,!l.m),0<l.O&&(l.M=new zA(p(l.Y,l,l.g),l.O)),h=l.U,m=l.g,y=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(Tg[0]=D.toString()),D=Tg);for(var M=0;M<D.length;M++){var $=yg(m,D[M],y||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),To(),GA(l.i,l.u,l.A,l.l,l.R,l.m)}ir.prototype.ca=function(l){l=l.target;const h=this.M;h&&bn(l)==3?h.j():this.Y(l)},ir.prototype.Y=function(l){try{if(l==this.g)e:{const ht=bn(this.g);var h=this.g.Ba();const Xi=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||ty(this.g)))){this.J||ht!=4||h==7||(h==8||0>=Xi?To(3):To(2)),Oh(this);var m=this.g.Z();this.X=m;t:if(Og(this)){var y=ty(this.g);l="";var D=y.length,M=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ri(this),Ro(this);var $="";break t}this.h.i=new a.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,l+=this.h.i.decode(y[h],{stream:!(M&&h==D-1)});y.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=m==200,KA(this.i,this.u,this.A,this.l,this.R,ht,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,rt=this.g;if((ye=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ye)){var ue=ye;break t}}ue=null}if(m=ue)Hi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mh(this,m);else{this.o=!1,this.s=3,It(12),ri(this),Ro(this);break e}}if(this.P){m=!0;let en;for(;!this.J&&this.C<$.length;)if(en=HA(this,$),en==Dh){ht==4&&(this.s=4,It(14),m=!1),Hi(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Dg){this.s=4,It(15),Hi(this.i,this.l,$,"[Invalid Chunk]"),m=!1;break}else Hi(this.i,this.l,en,null),Mh(this,en);if(Og(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||$.length!=0||this.h.h||(this.s=1,It(16),m=!1),this.o=this.o&&m,!m)Hi(this.i,this.l,$,"[Invalid Chunked Response]"),ri(this),Ro(this);else if(0<$.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),zh(ct),ct.M=!0,It(11))}}else Hi(this.i,this.l,$,null),Mh(this,$);ht==4&&ri(this),this.o&&!this.J&&(ht==4?ly(this.j,this):(this.o=!1,Sl(this)))}else dR(this.g),m==400&&0<$.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),ri(this),Ro(this)}}}catch{}finally{}};function Og(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function HA(l,h){var m=l.C,y=h.indexOf(`
`,m);return y==-1?Dh:(m=Number(h.substring(m,y)),isNaN(m)?Dg:(y+=1,y+m>h.length?Dh:(h=h.slice(y,y+m),l.C=y+m,h)))}ir.prototype.cancel=function(){this.J=!0,ri(this)};function Sl(l){l.S=Date.now()+l.I,Mg(l,l.I)}function Mg(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=So(p(l.ba,l),h)}function Oh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}ir.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(WA(this.i,this.A),this.L!=2&&(To(),It(17)),ri(this),this.s=2,Ro(this)):Mg(this,this.S-l)};function Ro(l){l.j.G==0||l.J||ly(l.j,l)}function ri(l){Oh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Sg(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Mh(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||Lh(m.h,l))){if(!l.K&&Lh(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Dl(m),bl(m);else break e;Bh(m),It(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=So(p(m.Za,m),6e3));if(1>=jg(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else si(m,11)}else if((l.K||m.g==l)&&Dl(m),!w(h))for(D=m.Da.g.parse(h),h=0;h<D.length;h++){let ue=D[h];if(m.T=ue[0],ue=ue[1],m.G==2)if(ue[0]=="c"){m.K=ue[1],m.ia=ue[2];const ct=ue[3];ct!=null&&(m.la=ct,m.j.info("VER="+m.la));const ht=ue[4];ht!=null&&(m.Aa=ht,m.j.info("SVER="+m.Aa));const Xi=ue[5];Xi!=null&&typeof Xi=="number"&&0<Xi&&(y=1.5*Xi,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const en=l.g;if(en){const Ol=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ol){var M=y.h;M.g||Ol.indexOf("spdy")==-1&&Ol.indexOf("quic")==-1&&Ol.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Fh(M,M.h),M.h=null))}if(y.D){const $h=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;$h&&(y.ya=$h,Ie(y.I,y.D,$h))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var $=l;if(y.qa=hy(y,y.J?y.ia:null,y.W),$.K){Ug(y.h,$);var ye=$,rt=y.L;rt&&(ye.I=rt),ye.B&&(Oh(ye),Sl(ye)),y.g=$}else oy(y);0<m.i.length&&Nl(m)}else ue[0]!="stop"&&ue[0]!="close"||si(m,7);else m.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?si(m,7):Uh(m):ue[0]!="noop"&&m.l&&m.l.ta(ue),m.v=0)}}To(4)}catch{}}var JA=class{constructor(l,h){this.g=l,this.map=h}};function Lg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function jg(l){return l.h?1:l.g?l.g.size:0}function Lh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Fh(l,h){l.g?l.g.add(h):l.h=h}function Ug(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Lg.prototype.cancel=function(){if(this.i=Bg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Bg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return k(l.i)}function YA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,y=0;y<m;y++)h.push(l[y]);return h}h=[],m=0;for(y in l)h[m++]=l[y];return h}function XA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const y in l)h[m++]=y;return h}}}function zg(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=XA(l),y=YA(l),D=y.length,M=0;M<D;M++)h.call(void 0,y[M],m&&m[M],l)}var $g=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZA(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),D=null;if(0<=y){var M=l[m].substring(0,y);D=l[m].substring(y+1)}else M=l[m];h(M,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ii(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ii){this.h=l.h,Al(this,l.j),this.o=l.o,this.g=l.g,Rl(this,l.s),this.l=l.l;var h=l.i,m=new ko;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),qg(this,m),this.m=l.m}else l&&(h=String(l).match($g))?(this.h=!1,Al(this,h[1]||"",!0),this.o=Po(h[2]||""),this.g=Po(h[3]||"",!0),Rl(this,h[4]),this.l=Po(h[5]||"",!0),qg(this,h[6]||"",!0),this.m=Po(h[7]||"")):(this.h=!1,this.i=new ko(null,this.h))}ii.prototype.toString=function(){var l=[],h=this.j;h&&l.push(xo(h,Gg,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(xo(h,Gg,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(xo(m,m.charAt(0)=="/"?nR:tR,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",xo(m,iR)),l.join("")};function Cn(l){return new ii(l)}function Al(l,h,m){l.j=m?Po(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Rl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function qg(l,h,m){h instanceof ko?(l.i=h,sR(l.i,l.h)):(m||(h=xo(h,rR)),l.i=new ko(h,l.h))}function Ie(l,h,m){l.i.set(h,m)}function Pl(l){return Ie(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Po(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xo(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,eR),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function eR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Gg=/[#\/\?@]/g,tR=/[#\?:]/g,nR=/[#\?]/g,rR=/[#\?@]/g,iR=/#/g;function ko(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function sr(l){l.g||(l.g=new Map,l.h=0,l.i&&ZA(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=ko.prototype,t.add=function(l,h){sr(this),this.i=null,l=Ji(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function Kg(l,h){sr(l),h=Ji(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Wg(l,h){return sr(l),h=Ji(l,h),l.g.has(h)}t.forEach=function(l,h){sr(this),this.g.forEach(function(m,y){m.forEach(function(D){l.call(h,D,y,this)},this)},this)},t.na=function(){sr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let y=0;y<h.length;y++){const D=l[y];for(let M=0;M<D.length;M++)m.push(h[y])}return m},t.V=function(l){sr(this);let h=[];if(typeof l=="string")Wg(this,l)&&(h=h.concat(this.g.get(Ji(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return sr(this),this.i=null,l=Ji(this,l),Wg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Qg(l,h,m){Kg(l,h),0<m.length&&(l.i=null,l.g.set(Ji(l,h),k(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var y=h[m];const M=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var D=M;$[y]!==""&&(D+="="+encodeURIComponent(String($[y]))),l.push(D)}}return this.i=l.join("&")};function Ji(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function sR(l,h){h&&!l.j&&(sr(l),l.i=null,l.g.forEach(function(m,y){var D=y.toLowerCase();y!=D&&(Kg(this,y),Qg(this,D,m))},l)),l.j=h}function oR(l,h){const m=new Ao;if(a.Image){const y=new Image;y.onload=_(or,m,"TestLoadImage: loaded",!0,h,y),y.onerror=_(or,m,"TestLoadImage: error",!1,h,y),y.onabort=_(or,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=_(or,m,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function aR(l,h){const m=new Ao,y=new AbortController,D=setTimeout(()=>{y.abort(),or(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(M=>{clearTimeout(D),M.ok?or(m,"TestPingServer: ok",!0,h):or(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),or(m,"TestPingServer: error",!1,h)})}function or(l,h,m,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(m)}catch{}}function lR(){this.g=new qA}function uR(l,h,m){const y=m||"";try{zg(l,function(D,M){let $=D;c(D)&&($=xh(D)),h.push(y+M+"="+encodeURIComponent($))})}catch(D){throw h.push(y+"type="+encodeURIComponent("_badmap")),D}}function xl(l){this.l=l.Ub||null,this.j=l.eb||!1}S(xl,kh),xl.prototype.g=function(){return new kl(this.l,this.j)},xl.prototype.i=function(l){return function(){return l}}({});function kl(l,h){ut.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(kl,ut),t=kl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,bo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Co(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,bo(this)),this.g&&(this.readyState=3,bo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Co(this):bo(this),this.readyState==3&&Hg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Co(this))},t.Qa=function(l){this.g&&(this.response=l,Co(this))},t.ga=function(){this.g&&Co(this)};function Co(l){l.readyState=4,l.l=null,l.j=null,l.v=null,bo(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function bo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(kl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Jg(l){let h="";return L(l,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function jh(l,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Jg(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Ie(l,h,m))}function Me(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Me,ut);var cR=/^https?$/i,hR=["POST","PUT"];t=Me.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nh.g(),this.v=this.o?Ag(this.o):Ag(Nh),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){Yg(this,M);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)m.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())m.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(hR,h,void 0))||y||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,$]of m)this.g.setRequestHeader(M,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ey(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){Yg(this,M)}};function Yg(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Xg(l),Cl(l)}function Xg(l){l.A||(l.A=!0,wt(l,"complete"),wt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,wt(this,"complete"),wt(this,"abort"),Cl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cl(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zg(this):this.bb())},t.bb=function(){Zg(this)};function Zg(l){if(l.h&&typeof o<"u"&&(!l.v[1]||bn(l)!=4||l.Z()!=2)){if(l.u&&bn(l)==4)Ig(l.Ea,0,l);else if(wt(l,"readystatechange"),bn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=$===0){var D=String(l.D).match($g)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!cR.test(D?D.toLowerCase():"")}m=y}if(m)wt(l,"complete"),wt(l,"success");else{l.m=6;try{var M=2<bn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",Xg(l)}}finally{Cl(l)}}}}function Cl(l,h){if(l.g){ey(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||wt(l,"ready");try{m.onreadystatechange=y}catch{}}}function ey(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function bn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),$A(h)}};function ty(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function dR(l){const h={};l=(l.g&&2<=bn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(w(l[y]))continue;var m=x(l[y]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=h[D]||[];h[D]=M,M.push(m)}T(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function No(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function ny(l){this.Aa=0,this.i=[],this.j=new Ao,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=No("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=No("baseRetryDelayMs",5e3,l),this.cb=No("retryDelaySeedMs",1e4,l),this.Wa=No("forwardChannelMaxRetries",2,l),this.wa=No("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Lg(l&&l.concurrentRequestLimit),this.Da=new lR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ny.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,y){It(0),this.W=l,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=hy(this,null,this.W),Nl(this)};function Uh(l){if(ry(l),l.G==3){var h=l.U++,m=Cn(l.I);if(Ie(m,"SID",l.K),Ie(m,"RID",h),Ie(m,"TYPE","terminate"),Do(l,m),h=new ir(l,l.j,h),h.L=2,h.v=Pl(Cn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=dy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Sl(h)}cy(l)}function bl(l){l.g&&(zh(l),l.g.cancel(),l.g=null)}function ry(l){bl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Dl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Nl(l){if(!Fg(l.h)&&!l.s){l.s=!0;var h=l.Ga;Pt||te(),K||(Pt(),K=!0),Z.add(h,l),l.B=0}}function fR(l,h){return jg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=So(p(l.Ga,l,h),uy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new ir(this,this.j,l);let M=this.o;if(this.S&&(M?(M=g(M),I(M,this.S)):M=this.S),this.m!==null||this.O||(D.H=M,M=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=sy(this,D,h),m=Cn(this.I),Ie(m,"RID",l),Ie(m,"CVER",22),this.D&&Ie(m,"X-HTTP-Session-Id",this.D),Do(this,m),M&&(this.O?h="headers="+encodeURIComponent(String(Jg(M)))+"&"+h:this.m&&jh(m,this.m,M)),Fh(this.h,D),this.Ua&&Ie(m,"TYPE","init"),this.P?(Ie(m,"$req",h),Ie(m,"SID","null"),D.T=!0,Vh(D,m,null)):Vh(D,m,h),this.G=2}}else this.G==3&&(l?iy(this,l):this.i.length==0||Fg(this.h)||iy(this))};function iy(l,h){var m;h?m=h.l:m=l.U++;const y=Cn(l.I);Ie(y,"SID",l.K),Ie(y,"RID",m),Ie(y,"AID",l.T),Do(l,y),l.m&&l.o&&jh(y,l.m,l.o),m=new ir(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=sy(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Fh(l.h,m),Vh(m,y,h)}function Do(l,h){l.H&&L(l.H,function(m,y){Ie(h,y,m)}),l.l&&zg({},function(m,y){Ie(h,y,m)})}function sy(l,h,m){m=Math.min(l.i.length,m);var y=l.l?p(l.l.Na,l.l,l):null;e:{var D=l.i;let M=-1;for(;;){const $=["count="+m];M==-1?0<m?(M=D[0].g,$.push("ofs="+M)):M=0:$.push("ofs="+M);let ye=!0;for(let rt=0;rt<m;rt++){let ue=D[rt].g;const ct=D[rt].map;if(ue-=M,0>ue)M=Math.max(0,D[rt].g-100),ye=!1;else try{uR(ct,$,"req"+ue+"_")}catch{y&&y(ct)}}if(ye){y=$.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,y}function oy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Pt||te(),K||(Pt(),K=!0),Z.add(h,l),l.v=0}}function Bh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=So(p(l.Fa,l),uy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,ay(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=So(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),bl(this),ay(this))};function zh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function ay(l){l.g=new ir(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Cn(l.qa);Ie(h,"RID","rpc"),Ie(h,"SID",l.K),Ie(h,"AID",l.T),Ie(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ie(h,"TO",l.ja),Ie(h,"TYPE","xmlhttp"),Do(l,h),l.m&&l.o&&jh(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Pl(Cn(h)),m.m=null,m.P=!0,Vg(m,l)}t.Za=function(){this.C!=null&&(this.C=null,bl(this),Bh(this),It(19))};function Dl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ly(l,h){var m=null;if(l.g==h){Dl(l),zh(l),l.g=null;var y=2}else if(Lh(l.h,h))m=h.D,Ug(l.h,h),y=1;else return;if(l.G!=0){if(h.o)if(y==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var D=l.B;y=Il(),wt(y,new Cg(y,m)),Nl(l)}else oy(l);else if(D=h.s,D==3||D==0&&0<h.X||!(y==1&&fR(l,h)||y==2&&Bh(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),D){case 1:si(l,5);break;case 4:si(l,10);break;case 3:si(l,6);break;default:si(l,2)}}}function uy(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function si(l,h){if(l.j.info("Error code "+h),h==2){var m=p(l.fb,l),y=l.Xa;const D=!y;y=new ii(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Al(y,"https"),Pl(y),D?oR(y.toString(),m):aR(y.toString(),m)}else It(2);l.G=0,l.l&&l.l.sa(h),cy(l),ry(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function cy(l){if(l.G=0,l.ka=[],l.l){const h=Bg(l.h);(h.length!=0||l.i.length!=0)&&(N(l.ka,h),N(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function hy(l,h,m){var y=m instanceof ii?Cn(m):new ii(m);if(y.g!="")h&&(y.g=h+"."+y.g),Rl(y,y.s);else{var D=a.location;y=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var M=new ii(null);y&&Al(M,y),h&&(M.g=h),D&&Rl(M,D),m&&(M.l=m),y=M}return m=l.D,h=l.ya,m&&h&&Ie(y,m,h),Ie(y,"VER",l.la),Do(l,y),y}function dy(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Me(new xl({eb:m})):new Me(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fy(){}t=fy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Vl(){}Vl.prototype.g=function(l,h){return new Lt(l,h)};function Lt(l,h){ut.call(this),this.g=new ny(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!w(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Yi(this)}S(Lt,ut),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Uh(this.g)},Lt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=xh(l),l=m);h.i.push(new JA(h.Ya++,l)),h.G==3&&Nl(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Uh(this.g),delete this.g,Lt.aa.N.call(this)};function py(l){Ch.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}S(py,Ch);function my(){bh.call(this),this.status=1}S(my,bh);function Yi(l){this.g=l}S(Yi,fy),Yi.prototype.ua=function(){wt(this.g,"a")},Yi.prototype.ta=function(l){wt(this.g,new py(l))},Yi.prototype.sa=function(l){wt(this.g,new my)},Yi.prototype.ra=function(){wt(this.g,"b")},Vl.prototype.createWebChannel=Vl.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,OE=function(){return new Vl},VE=function(){return Il()},DE=ni,Vf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},El.NO_ERROR=0,El.TIMEOUT=8,El.HTTP_ERROR=6,Au=El,bg.COMPLETE="complete",NE=bg,Rg.EventType=Eo,Eo.OPEN="a",Eo.CLOSE="b",Eo.ERROR="c",Eo.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Yo=Rg,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,bE=Me}).apply(typeof eu<"u"?eu:typeof self<"u"?self:typeof window<"u"?window:{});const nv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Kc("@firebase/firestore");function ss(){return Lr.logLevel}function Pb(t){Lr.setLogLevel(t)}function U(t,...e){if(Lr.logLevel<=ie.DEBUG){const n=e.map(cm);Lr.debug(`Firestore (${ao}): ${t}`,...n)}}function Be(t,...e){if(Lr.logLevel<=ie.ERROR){const n=e.map(cm);Lr.error(`Firestore (${ao}): ${t}`,...n)}}function $t(t,...e){if(Lr.logLevel<=ie.WARN){const n=e.map(cm);Lr.warn(`Firestore (${ao}): ${t}`,...n)}}function cm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+t;throw Be(e),new Error(e)}function H(t,e){t||W()}function xb(t,e){t||W()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class kb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Cb{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){H(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new ME(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new Ze(e)}}class bb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new bb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Db{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){H(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(H(typeof n.token=="string"),this.R=n.token,new FE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class Vb{getToken(){return Promise.resolve(new FE(""))}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ob(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function Bs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function jE(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new ke(0,0))}static max(){return new J(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Fa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends Fa{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const Mb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends Fa{construct(e,n,r){return new Se(e,n,r)}static isValidIdentifier(e){return Mb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(n)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(se.fromString(e))}static fromName(e){return new q(se.fromString(e).popFirst(5))}static empty(){return new q(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new se(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Of(t){return t.fields.find(e=>e.kind===2)}function ci(t){return t.fields.filter(e=>e.kind!==2)}function Lb(t,e){let n=Y(t.collectionGroup,e.collectionGroup);if(n!==0)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=Fb(t.fields[r],e.fields[r]),n!==0)return n;return Y(t.fields.length,e.fields.length)}zs.UNKNOWN_ID=-1;class Si{constructor(e,n){this.fieldPath=e,this.kind=n}}function Fb(t,e){const n=Se.comparator(t.fieldPath,e.fieldPath);return n!==0?n:Y(t.kind,e.kind)}class $s{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new $s(0,qt.min())}}function UE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new qt(i,q.empty(),e)}function BE(t){return new qt(t.readTime,t.key,-1)}class qt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qt(J.min(),q.empty(),-1)}static max(){return new qt(J.max(),q.empty(),-1)}}function dm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $E{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==zE)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new da(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=fm(r.target.error);this.V.reject(new da(e,i))}}static open(e,n,r,i){try{return new Jc(n,e.transaction(i,r))}catch(s){throw new da(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new Ub(n)}}class In{constructor(e,n,r){this.name=e,this.version=n,this.p=r,In.S(Qe())===12.2&&Be("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),hi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Jp())return!1;if(In.v())return!0;const e=Qe(),n=In.S(e),r=0<n&&n<10,i=qE(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new da(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new j(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new da(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Jc.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),b.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function qE(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class jb{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return hi(this.B.delete())}}class da extends j{constructor(e,n){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Jr(t){return t.name==="IndexedDbTransactionError"}class Ub{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),hi(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),hi(this.store.add(e))}get(e){return hi(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),hi(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),hi(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new b((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new b((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new b((r,i)=>{n.onerror=s=>{const o=fm(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new jb(a),c=n(a.primaryKey,a.value,u);if(c instanceof b){const d=c.catch(f=>(u.done(),b.reject(f)));r.push(d)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>b.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function hi(t){return new b((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=fm(r.target.error);n(i)}})}let rv=!1;function fm(t){const e=In.S(Qe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rv||(rv=!0,setTimeout(()=>{throw r},0)),r}}return t}class Bb{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Jr(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Hr(n)}await this.X(6e4)})}}class zb{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return b.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=BE(s);dm(o,r)>0&&(r=o)}),new qt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ct.oe=-1;function rl(t){return t==null}function ja(t){return t===0&&1/t==-1/0}function GE(t){return typeof t=="number"&&Number.isInteger(t)&&!ja(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=iv(e)),e=$b(t.get(n),e);return iv(e)}function $b(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function iv(t){return t+""}function gn(t){const e=t.length;if(H(e>=2),e===2)return H(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&W(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:W()}s=o+2}return new se(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t,e){return[t,yt(e)]}function KE(t,e,n){return[t,yt(e),n]}const qb={},Gb=["prefixPath","collectionGroup","readTime","documentId"],Kb=["prefixPath","collectionGroup","documentId"],Wb=["collectionGroup","readTime","prefixPath","documentId"],Qb=["canonicalId","targetId"],Hb=["targetId","path"],Jb=["path","targetId"],Yb=["collectionId","parent"],Xb=["indexId","uid"],Zb=["uid","sequenceNumber"],eN=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],tN=["indexId","uid","orderedDocumentKey"],nN=["userId","collectionPath","documentId"],rN=["userId","collectionPath","largestBatchId"],iN=["userId","collectionGroup","largestBatchId"],WE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],sN=[...WE,"documentOverlays"],QE=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],HE=QE,pm=[...HE,"indexConfiguration","indexState","indexEntries"],oN=pm,aN=[...pm,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends $E{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function He(t,e){const n=z(t);return In.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JE(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function YE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tu(this.root,e,this.comparator,!0)}}class tu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=s??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new st(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,r,i,s){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new av(this.data.getIterator())}getIteratorFrom(e){return new av(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new fe(this.comparator);return n.data=e,n}}class av{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function es(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new bt([])}unionWith(e){let n=new fe(Se.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new XE("Invalid base64 string: "+s):s}}(e);return new Oe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Oe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const uN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(H(!!t),typeof t=="string"){let e=0;const n=uN.exec(t);if(H(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yn(t){return typeof t=="string"?Oe.fromBase64String(t):Oe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xc(t){const e=t.mapValue.fields.__previous_value__;return Yc(e)?Xc(e):e}function Ua(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Fr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Pu={nullValue:"NULL_VALUE"};function jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yc(t)?4:ZE(t)?9007199254740991:Zc(t)?10:11:W()}function An(t,e){if(t===e)return!0;const n=jr(t);if(n!==jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ua(t).isEqual(Ua(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Jn(i.timestampValue),a=Jn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Yn(i.bytesValue).isEqual(Yn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),a=Re(s.doubleValue);return o===a?ja(o)===ja(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ov(o)!==ov(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!An(o[u],a[u])))return!1;return!0}(t,e);default:return W()}}function Ba(t,e){return(t.values||[]).find(n=>An(n,e))!==void 0}function Ur(t,e){if(t===e)return 0;const n=jr(t),r=jr(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Re(s.integerValue||s.doubleValue),u=Re(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return lv(t.timestampValue,e.timestampValue);case 4:return lv(Ua(t),Ua(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Yn(s),u=Yn(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=Y(a[c],u[c]);if(d!==0)return d}return Y(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Y(Re(s.latitude),Re(o.latitude));return a!==0?a:Y(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return uv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},p=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,S=(u=p.value)===null||u===void 0?void 0:u.arrayValue,k=Y(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:uv(_,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Tr.mapValue&&o===Tr.mapValue)return 0;if(s===Tr.mapValue)return 1;if(o===Tr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const p=Y(u[f],d[f]);if(p!==0)return p;const _=Ur(a[u[f]],c[d[f]]);if(_!==0)return _}return Y(u.length,d.length)}(t.mapValue,e.mapValue);default:throw W()}}function lv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Jn(t),r=Jn(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function uv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ur(n[i],r[i]);if(s)return s}return Y(n.length,r.length)}function qs(t){return Lf(t)}function Lf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Lf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Lf(n.fields[o])}`;return i+"}"}(t.mapValue):W()}function xu(t){switch(jr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xc(t);return e?16+xu(e):16;case 5:return 2*t.stringValue.length;case 6:return Yn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+xu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Yr(r.fields,(s,o)=>{i+=s.length+xu(o)}),i}(t.mapValue);default:throw W()}}function bi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ff(t){return!!t&&"integerValue"in t}function za(t){return!!t&&"arrayValue"in t}function cv(t){return!!t&&"nullValue"in t}function hv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ku(t){return!!t&&"mapValue"in t}function Zc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function fa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ZE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const eT={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function hN(t){return"nullValue"in t?Pu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?bi(Fr.empty(),q.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Zc(t)?eT:{mapValue:{}}:W()}function dN(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?bi(Fr.empty(),q.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?eT:"mapValue"in t?Zc(t)?{mapValue:{}}:Tr:W()}function dv(t,e){const n=Ur(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function fv(t,e){const n=Ur(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ku(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fa(n)}setAll(e){let n=Se.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=fa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ku(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ku(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(fa(this.value))}}function tT(t){const e=[];return Yr(t.fields,(n,r)=>{const i=new Se([n]);if(ku(r)){const s=tT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Te(e,0,J.min(),J.min(),J.min(),ot.empty(),0)}static newFoundDocument(e,n,r,i){return new Te(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Te(e,2,n,J.min(),J.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new Te(e,3,n,J.min(),J.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this.position=e,this.inclusive=n}}function pv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Ur(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n="asc"){this.field=e,this.dir=n}}function fN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{}class oe extends nT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pN(e,n,r):n==="array-contains"?new yN(e,r):n==="in"?new lT(e,r):n==="not-in"?new _N(e,r):n==="array-contains-any"?new vN(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mN(e,r):new gN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ur(n,this.value)):n!==null&&jr(this.value)===jr(n)&&this.matchesComparison(Ur(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ce extends nT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ce(e,n)}matches(e){return Gs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gs(t){return t.op==="and"}function jf(t){return t.op==="or"}function mm(t){return rT(t)&&Gs(t)}function rT(t){for(const e of t.filters)if(e instanceof ce)return!1;return!0}function Uf(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+qs(t.value);if(mm(t))return t.filters.map(e=>Uf(e)).join(",");{const e=t.filters.map(n=>Uf(n)).join(",");return`${t.op}(${e})`}}function iT(t,e){return t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&An(r.value,i.value)}(t,e):t instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&iT(o,i.filters[a]),!0):!1}(t,e):void W()}function sT(t,e){const n=t.filters.concat(e);return ce.create(n,t.op)}function oT(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${qs(n.value)}`}(t):t instanceof ce?function(n){return n.op.toString()+" {"+n.getFilters().map(oT).join(" ,")+"}"}(t):"Filter"}class pN extends oe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class mN extends oe{constructor(e,n){super(e,"in",n),this.keys=aT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gN extends oe{constructor(e,n){super(e,"not-in",n),this.keys=aT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function aT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class yN extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return za(n)&&Ba(n.arrayValue,this.value)}}class lT extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ba(this.value.arrayValue,n)}}class _N extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ba(this.value.arrayValue,n)}}class vN extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!za(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ba(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Bf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wN(t,e,n,r,i,s,o)}function Ni(t){const e=z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qs(r)).join(",")),e.ue=n}return e.ue}function il(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mv(t.startAt,e.startAt)&&mv(t.endAt,e.endAt)}function dc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function fc(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function gv(t,e,n){let r=Pu,i=!0;for(const s of fc(t,e)){let o=Pu,a=!0;switch(s.op){case"<":case"<=":o=hN(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Pu}dv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];dv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function yv(t,e,n){let r=Tr,i=!0;for(const s of fc(t,e)){let o=Tr,a=!0;switch(s.op){case">=":case">":o=dN(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Tr}fv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];fv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uT(t,e,n,r,i,s,o,a){return new er(t,e,n,r,i,s,o,a)}function lo(t){return new er(t)}function _v(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gm(t){return t.collectionGroup!==null}function bs(t){const e=z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new fe(Se.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new $a(s,r))}),n.has(Se.keyField().canonicalString())||e.ce.push(new $a(Se.keyField(),r))}return e.ce}function _t(t){const e=z(t);return e.le||(e.le=hT(e,bs(t))),e.le}function cT(t){const e=z(t);return e.he||(e.he=hT(e,t.explicitOrderBy)),e.he}function hT(t,e){if(t.limitType==="F")return Bf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new $a(i.field,s)});const n=t.endAt?new Br(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Br(t.startAt.position,t.startAt.inclusive):null;return Bf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zf(t,e){const n=t.filters.concat([e]);return new er(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pc(t,e,n){return new er(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sl(t,e){return il(_t(t),_t(e))&&t.limitType===e.limitType}function dT(t){return`${Ni(_t(t))}|lt:${t.limitType}`}function os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>oT(i)).join(", ")}]`),rl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qs(i)).join(",")),`Target(${r})`}(_t(t))}; limitType=${t.limitType})`}function ol(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of bs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=pv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,bs(r),i)||r.endAt&&!function(o,a,u){const c=pv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,bs(r),i))}(t,e)}function fT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pT(t){return(e,n)=>{let r=!1;for(const i of bs(t)){const s=IN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function IN(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Ur(u,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return YE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=new ve(q.comparator);function Nt(){return EN}const mT=new ve(q.comparator);function Xo(...t){let e=mT;for(const n of t)e=e.insert(n.key,n);return e}function gT(t){let e=mT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yn(){return pa()}function yT(){return pa()}function pa(){return new tr(t=>t.toString(),(t,e)=>t.isEqual(e))}const TN=new ve(q.comparator),SN=new fe(q.comparator);function ee(...t){let e=SN;for(const n of t)e=e.add(n);return e}const AN=new fe(Y);function ym(){return AN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ja(e)?"-0":e}}function _T(t){return{integerValue:""+t}}function vT(t,e){return GE(e)?_T(e):_m(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this._=void 0}}function RN(t,e,n){return t instanceof Ks?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Yc(s)&&(s=Xc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Di?IT(t,e):t instanceof Vi?ET(t,e):function(i,s){const o=wT(i,s),a=vv(o)+vv(i.Pe);return Ff(o)&&Ff(i.Pe)?_T(a):_m(i.serializer,a)}(t,e)}function PN(t,e,n){return t instanceof Di?IT(t,e):t instanceof Vi?ET(t,e):n}function wT(t,e){return t instanceof Ws?function(r){return Ff(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ks extends eh{}class Di extends eh{constructor(e){super(),this.elements=e}}function IT(t,e){const n=TT(e);for(const r of t.elements)n.some(i=>An(i,r))||n.push(r);return{arrayValue:{values:n}}}class Vi extends eh{constructor(e){super(),this.elements=e}}function ET(t,e){let n=TT(e);for(const r of t.elements)n=n.filter(i=>!An(i,r));return{arrayValue:{values:n}}}class Ws extends eh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function vv(t){return Re(t.integerValue||t.doubleValue)}function TT(t){return za(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.field=e,this.transform=n}}function xN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Di&&i instanceof Di||r instanceof Vi&&i instanceof Vi?Bs(r.elements,i.elements,An):r instanceof Ws&&i instanceof Ws?An(r.Pe,i.Pe):r instanceof Ks&&i instanceof Ks}(t.transform,e.transform)}class kN{constructor(e,n){this.version=e,this.transformResults=n}}class xe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class th{}function ST(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new co(t.key,xe.none()):new uo(t.key,t.data,xe.none());{const n=t.data,r=ot.empty();let i=new fe(Se.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new nr(t.key,r,new bt(i.toArray()),xe.none())}}function CN(t,e,n){t instanceof uo?function(i,s,o){const a=i.value.clone(),u=Iv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof nr?function(i,s,o){if(!Cu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Iv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(AT(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ma(t,e,n,r){return t instanceof uo?function(s,o,a,u){if(!Cu(s.precondition,o))return a;const c=s.value.clone(),d=Ev(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof nr?function(s,o,a,u){if(!Cu(s.precondition,o))return a;const c=Ev(s.fieldTransforms,u,o),d=o.data;return d.setAll(AT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Cu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function bN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wT(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function wv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bs(r,i,(s,o)=>xN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uo extends th{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class nr extends th{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function AT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Iv(t,e,n){const r=new Map;H(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,PN(o,a,n[i]))}return r}function Ev(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,RN(s,o,e))}return r}class co extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vm extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&CN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ma(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ma(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=ST(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,r)=>wv(n,r))&&Bs(this.baseMutations,e.baseMutations,(n,r)=>wv(n,r))}}class Im{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){H(e.mutations.length===r.length);let i=function(){return TN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Im(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,ae;function PT(t){switch(t){default:return W();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function xT(t){if(t===void 0)return Be("GRPC error has no .code"),O.UNKNOWN;switch(t){case $e.OK:return O.OK;case $e.CANCELLED:return O.CANCELLED;case $e.UNKNOWN:return O.UNKNOWN;case $e.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case $e.INTERNAL:return O.INTERNAL;case $e.UNAVAILABLE:return O.UNAVAILABLE;case $e.UNAUTHENTICATED:return O.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case $e.NOT_FOUND:return O.NOT_FOUND;case $e.ALREADY_EXISTS:return O.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return O.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case $e.ABORTED:return O.ABORTED;case $e.OUT_OF_RANGE:return O.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return O.UNIMPLEMENTED;case $e.DATA_LOSS:return O.DATA_LOSS;default:return W()}}(ae=$e||($e={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=new Ti([4294967295,4294967295],0);function Tv(t){const e=kT().encode(t),n=new CE;return n.update(e),new Uint8Array(n.digest())}function Sv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ti([n,r],0),new Ti([i,s],0)]}class Tm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zo(`Invalid padding: ${n}`);if(r<0)throw new Zo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ti.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ti.fromNumber(r)));return i.compare(DN)===1&&(i=new Ti([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Tv(e),[r,i]=Sv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Tm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Tv(e),[r,i]=Sv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ul.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ll(J.min(),i,new ve(Y),Nt(),ee())}}class ul{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ul(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class CT{constructor(e,n){this.targetId=e,this.me=n}}class bT{constructor(e,n,r=Oe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Av{constructor(){this.fe=0,this.ge=Pv(),this.pe=Oe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W()}}),new ul(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Pv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,H(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class VN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nt(),this.qe=Rv(),this.Qe=new ve(Y)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(dc(s))if(r===0){const o=new q(s.path);this.Ue(n,o,Te.newNoDocument(o,J.min()))}else H(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}mc==null||mc.et(function(d,f,p,_,S){var k,N,E,w,R,V;const F={localCacheCount:d,existenceFilterCount:f.count,databaseId:p.database,projectId:p.projectId},L=f.unchangedNames;return L&&(F.bloomFilter={applied:S===0,hashCount:(k=L==null?void 0:L.hashCount)!==null&&k!==void 0?k:0,bitmapLength:(w=(E=(N=L==null?void 0:L.bits)===null||N===void 0?void 0:N.bitmap)===null||E===void 0?void 0:E.length)!==null&&w!==void 0?w:0,padding:(V=(R=L==null?void 0:L.bits)===null||R===void 0?void 0:R.padding)!==null&&V!==void 0?V:0,mightContain:T=>{var g;return(g=_==null?void 0:_.mightContain(T))!==null&&g!==void 0&&g}}),F}(o,e.me,this.Le.tt(),a,u))}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Yn(r).toUint8Array()}catch(u){if(u instanceof XE)return $t("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Tm(o,i,s)}catch(u){return $t(u instanceof Zo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&dc(a.target)){const u=new q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Te.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ll(e,n,this.Qe,this.ke,r);return this.ke=Nt(),this.qe=Rv(),this.Qe=new ve(Y),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Av,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new fe(Y),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Av),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Rv(){return new ve(q.comparator)}function Pv(){return new ve(q.comparator)}const ON={asc:"ASCENDING",desc:"DESCENDING"},MN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LN={and:"AND",or:"OR"};class FN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $f(t,e){return t.useProto3Json||rl(e)?e:{value:e}}function Qs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jN(t,e){return Qs(t,e.toTimestamp())}function ze(t){return H(!!t),J.fromTimestamp(function(n){const r=Jn(n);return new ke(r.seconds,r.nanos)}(t))}function Sm(t,e){return qf(t,e).canonicalString()}function qf(t,e){const n=function(i){return new se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function DT(t){const e=se.fromString(t);return H($T(e)),e}function qa(t,e){return Sm(t.databaseId,e.path)}function En(t,e){const n=DT(e);if(n.get(1)!==t.databaseId.projectId)throw new j(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(MT(n))}function VT(t,e){return Sm(t.databaseId,e)}function OT(t){const e=DT(t);return e.length===4?se.emptyPath():MT(e)}function Gf(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function MT(t){return H(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xv(t,e,n){return{name:qa(t,e),fields:n.value.mapValue.fields}}function LT(t,e,n){const r=En(t,e.name),i=ze(e.updateTime),s=e.createTime?ze(e.createTime):J.min(),o=new ot({mapValue:{fields:e.fields}}),a=Te.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function UN(t,e){return"found"in e?function(r,i){H(!!i.found),i.found.name,i.found.updateTime;const s=En(r,i.found.name),o=ze(i.found.updateTime),a=i.found.createTime?ze(i.found.createTime):J.min(),u=new ot({mapValue:{fields:i.found.fields}});return Te.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){H(!!i.missing),H(!!i.readTime);const s=En(r,i.missing),o=ze(i.readTime);return Te.newNoDocument(s,o)}(t,e):W()}function BN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(H(d===void 0||typeof d=="string"),Oe.fromBase64String(d||"")):(H(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Oe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?O.UNKNOWN:xT(c.code);return new j(d,c.message||"")}(o);n=new bT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=En(t,r.document.name),s=ze(r.document.updateTime),o=r.document.createTime?ze(r.document.createTime):J.min(),a=new ot({mapValue:{fields:r.document.fields}}),u=Te.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new bu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=En(t,r.document),s=r.readTime?ze(r.readTime):J.min(),o=Te.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=En(t,r.document),s=r.removedTargetIds||[];n=new bu([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new NN(i,s),a=r.targetId;n=new CT(a,o)}}return n}function Ga(t,e){let n;if(e instanceof uo)n={update:xv(t,e.key,e.value)};else if(e instanceof co)n={delete:qa(t,e.key)};else if(e instanceof nr)n={update:xv(t,e.key,e.data),updateMask:WN(e.fieldMask)};else{if(!(e instanceof vm))return W();n={verify:qa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ks)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Di)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ws)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:jN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function Kf(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?xe.updateTime(ze(s.updateTime)):s.exists!==void 0?xe.exists(s.exists):xe.none()}(e.currentDocument):xe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)H(a.setToServerValue==="REQUEST_TIME"),u=new Ks;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];u=new Di(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];u=new Vi(d)}else"increment"in a?u=new Ws(o,a.increment):W();const c=Se.fromServerFormat(a.fieldPath);return new al(c,u)}(t,i)):[];if(e.update){e.update.name;const i=En(t,e.update.name),s=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new bt(c.map(d=>Se.fromServerFormat(d)))}(e.updateMask);return new nr(i,s,o,n,r)}return new uo(i,s,n,r)}if(e.delete){const i=En(t,e.delete);return new co(i,n)}if(e.verify){const i=En(t,e.verify);return new vm(i,n)}return W()}function zN(t,e){return t&&t.length>0?(H(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ze(i.updateTime):ze(s);return o.isEqual(J.min())&&(o=ze(s)),new kN(o,i.transformResults||[])}(n,e))):[]}function FT(t,e){return{documents:[VT(t,e.path)]}}function nh(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=VT(t,i);const s=function(c){if(c.length!==0)return zT(ce.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:_r(p.field),direction:qN(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=$f(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function jT(t,e,n,r){const{_t:i,parent:s}=nh(t,e),o={},a=[];let u=0;return n.forEach(c=>{const d=r?c.alias:"aggregate_"+u++;o[d]=c.alias,c.aggregateType==="count"?a.push({alias:d,count:{}}):c.aggregateType==="avg"?a.push({alias:d,avg:{field:_r(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:d,sum:{field:_r(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function UT(t){let e=OT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){H(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const p=BT(f);return p instanceof ce&&mm(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(S){return new $a(as(S.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,rl(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,_=f.values||[];return new Br(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,_=f.values||[];return new Br(_,p)}(n.endAt)),uT(e,i,o,s,a,"F",u,c)}function $N(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=as(n.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=as(n.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(n){return oe.create(as(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ce.create(n.compositeFilter.filters.map(r=>BT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(t):W()}function qN(t){return ON[t]}function GN(t){return MN[t]}function KN(t){return LN[t]}function _r(t){return{fieldPath:t.canonicalString()}}function as(t){return Se.fromServerFormat(t.fieldPath)}function zT(t){return t instanceof oe?function(n){if(n.op==="=="){if(hv(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NAN"}};if(cv(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hv(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NAN"}};if(cv(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(n.field),op:GN(n.op),value:n.value}}}(t):t instanceof ce?function(n){const r=n.getFilters().map(i=>zT(i));return r.length===1?r[0]:{compositeFilter:{op:KN(n.op),filters:r}}}(t):W()}function WN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $T(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r,i,s=J.min(),o=J.min(),a=Oe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.ct=e}}function QN(t,e){let n;if(e.document)n=LT(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),i=Mi(e.noDocument.readTime);n=Te.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return W();{const r=q.fromSegments(e.unknownDocument.path),i=Mi(e.unknownDocument.version);n=Te.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ke(i[0],i[1]);return J.fromTimestamp(s)}(e.readTime)),n}function kv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:gc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:qa(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Qs(s,o.version.toTimestamp()),createTime:Qs(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Oi(e.version)};else{if(!e.isUnknownDocument())return W();r.unknownDocument={path:n.path.toArray(),version:Oi(e.version)}}return r}function gc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Oi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Mi(t){const e=new ke(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function di(t,e){const n=(e.baseMutations||[]).map(s=>Kf(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Kf(t.ct,s)),i=ke.fromMillis(e.localWriteTimeMs);return new wm(e.batchId,i,n,r)}function ea(t){const e=Mi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Mi(t.lastLimboFreeSnapshotVersion):J.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return H(s.documents.length===1),_t(lo(OT(s.documents[0])))}(t.query):function(s){return _t(UT(s))}(t.query),new Bn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Oe.fromBase64String(t.resumeToken))}function GT(t,e){const n=Oi(e.snapshotVersion),r=Oi(e.lastLimboFreeSnapshotVersion);let i;i=dc(e.target)?FT(t.ct,e.target):nh(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ni(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Am(t){const e=UT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pc(e,e.limit,"L"):e}function Td(t,e){return new Em(e.largestBatchId,Kf(t.ct,e.overlayMutation))}function Cv(t,e){const n=e.path.lastSegment();return[t,yt(e.path.popLast()),n]}function bv(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Oi(r.readTime),documentKey:yt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{getBundleMetadata(e,n){return Nv(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Mi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Nv(e).put(function(i){return{bundleId:i.id,createTime:Oi(ze(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Dv(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Am(s.bundledQuery),readTime:Mi(s.readTime)}}(r)})}saveNamedQuery(e,n){return Dv(e).put(function(i){return{name:i.name,readTime:Oi(ze(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Nv(t){return He(t,"bundles")}function Dv(t){return He(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new rh(e,r)}getOverlay(e,n){return zo(e).get(Cv(this.userId,n)).next(r=>r?Td(this.serializer,r):null)}getOverlays(e,n){const r=yn();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Em(n,o);i.push(this.ht(e,a))}),b.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(yt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(zo(e).j("collectionPathOverlayIndex",a))}),b.waitFor(s)}getOverlaysForCollection(e,n,r){const i=yn(),s=yt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return zo(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Td(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=yn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return zo(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,d)=>{const f=Td(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return zo(e).put(function(i,s,o){const[a,u,c]=Cv(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ga(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function zo(t){return He(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{Pt(e){return He(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Oe.fromUint8Array(r):Oe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Re(e.integerValue));else if("doubleValue"in e){const r=Re(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),ja(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=Jn(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(Yn(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?ZE(e)?this.dt(n,Number.MAX_SAFE_INTEGER):Zc(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):W()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(Re(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),q.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}fi.vt=new fi;function YN(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Vv(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=YN(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class XN{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=Vv(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=Vv(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class ZN{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class eD{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class $o{constructor(){this.jt=new XN,this.Ht=new ZN(this.jt),this.Jt=new eD(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new pi(this.indexId,this.documentKey,this.arrayValue,r)}}function ur(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Ov(t.arrayValue,e.arrayValue),n!==0?n:(n=Ov(t.directionalValue,e.directionalValue),n!==0?n:q.comparator(t.documentKey,e.documentKey)))}function Ov(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.Xt=new fe((n,r)=>Se.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(H(e.collectionGroup===this.collectionId),this.nn)return!1;const n=Of(e);if(n!==void 0&&!this.sn(n))return!1;const r=ci(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new fe(Se.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Si(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Si(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Si(r.field,r.dir==="asc"?0:1)));return new zs(zs.UNKNOWN_ID,this.collectionId,n,$s.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t){var e,n;if(H(t instanceof oe||t instanceof ce),t instanceof oe){if(t instanceof lT){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>oe.create(t.field,"==",s)))||[];return ce.create(i,"or")}return t}const r=t.filters.map(i=>KT(i));return ce.create(r,t.op)}function tD(t){if(t.getFilters().length===0)return[];const e=Hf(KT(t));return H(WT(e)),Wf(e)||Qf(e)?[e]:e.getFilters()}function Wf(t){return t instanceof oe}function Qf(t){return t instanceof ce&&mm(t)}function WT(t){return Wf(t)||Qf(t)||function(n){if(n instanceof ce&&jf(n)){for(const r of n.getFilters())if(!Wf(r)&&!Qf(r))return!1;return!0}return!1}(t)}function Hf(t){if(H(t instanceof oe||t instanceof ce),t instanceof oe)return t;if(t.filters.length===1)return Hf(t.filters[0]);const e=t.filters.map(r=>Hf(r));let n=ce.create(e,t.op);return n=yc(n),WT(n)?n:(H(n instanceof ce),H(Gs(n)),H(n.filters.length>1),n.filters.reduce((r,i)=>Rm(r,i)))}function Rm(t,e){let n;return H(t instanceof oe||t instanceof ce),H(e instanceof oe||e instanceof ce),n=t instanceof oe?e instanceof oe?function(i,s){return ce.create([i,s],"and")}(t,e):Lv(t,e):e instanceof oe?Lv(e,t):function(i,s){if(H(i.filters.length>0&&s.filters.length>0),Gs(i)&&Gs(s))return sT(i,s.getFilters());const o=jf(i)?i:s,a=jf(i)?s:i,u=o.filters.map(c=>Rm(c,a));return ce.create(u,"or")}(t,e),yc(n)}function Lv(t,e){if(Gs(e))return sT(e,t.getFilters());{const n=e.filters.map(r=>Rm(t,r));return ce.create(n,"or")}}function yc(t){if(H(t instanceof oe||t instanceof ce),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return yc(e[0]);if(rT(t))return t;const n=e.map(i=>yc(i)),r=[];return n.forEach(i=>{i instanceof oe?r.push(i):i instanceof ce&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ce.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(){this.un=new Pm}addToCollectionParentIndex(e,n){return this.un.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(qt.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Pm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new fe(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fe(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=new Uint8Array(0);class rD{constructor(e,n){this.databaseId=n,this.cn=new Pm,this.ln=new tr(r=>Ni(r),(r,i)=>il(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:yt(i)};return Fv(e).put(s)}return b.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[jE(n),""],!1,!0);return Fv(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(gn(o.parent))}return r})}addFieldIndex(e,n){const r=qo(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ns(e);return s.next(a=>{o.put(bv(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=qo(e),i=ns(e),s=ts(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=qo(e),r=ts(e),i=ns(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return b.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Mv(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=ts(e);let i=!0;const s=new Map;return b.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ee();const a=[];return b.forEach(s,(u,c)=>{U("IndexedDbIndexManager",`Using index ${function(R){return`id=${R.indexId}|cg=${R.collectionGroup}|f=${R.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(u)} to execute ${Ni(n)}`);const d=function(R,V){const F=Of(V);if(F===void 0)return null;for(const L of fc(R,F.fieldPath))switch(L.op){case"array-contains-any":return L.value.arrayValue.values||[];case"array-contains":return[L.value]}return null}(c,u),f=function(R,V){const F=new Map;for(const L of ci(V))for(const T of fc(R,L.fieldPath))switch(T.op){case"==":case"in":F.set(L.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return F.set(L.fieldPath.canonicalString(),T.value),Array.from(F.values())}return null}(c,u),p=function(R,V){const F=[];let L=!0;for(const T of ci(V)){const g=T.kind===0?gv(R,T.fieldPath,R.startAt):yv(R,T.fieldPath,R.startAt);F.push(g.value),L&&(L=g.inclusive)}return new Br(F,L)}(c,u),_=function(R,V){const F=[];let L=!0;for(const T of ci(V)){const g=T.kind===0?yv(R,T.fieldPath,R.endAt):gv(R,T.fieldPath,R.endAt);F.push(g.value),L&&(L=g.inclusive)}return new Br(F,L)}(c,u),S=this.In(u,c,p),k=this.In(u,c,_),N=this.Tn(u,c,f),E=this.En(u.indexId,d,S,p.inclusive,k,_.inclusive,N);return b.forEach(E,w=>r.G(w,n.limit).next(R=>{R.forEach(V=>{const F=q.fromSegments(V.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return b.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=tD(ce.create(e.filters,"and")).map(r=>Bf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),d=[];for(let f=0;f<u;++f){const p=n?this.dn(n[f/c]):nu,_=this.An(e,p,r[f%c],i),S=this.Rn(e,p,s[f%c],o),k=a.map(N=>this.An(e,p,N,!0));d.push(...this.createRange(_,S,k))}return d}An(e,n,r,i){const s=new pi(e,q.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new pi(e,q.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new Mv(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return b.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new fe(Se.comparator),d=!1;for(const f of u.filters)for(const p of f.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?d=!0:c=c.add(p.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new $o;for(const i of ci(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);fi.vt.It(s,o)}return r.zt()}dn(e){const n=new $o;return fi.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new $o;return fi.vt.It(bi(this.databaseId,n),r.Yt(function(s){const o=ci(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new $o);let s=0;for(const o of ci(e)){const a=r[s++];for(const u of i)if(this.fn(n,o.fieldPath)&&za(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);fi.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new $o;u.seed(a.zt()),fi.vt.It(o,u.Yt(n.kind)),s.push(u)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=qo(e),i=ns(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return b.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(d,f){const p=f?new $s(f.sequenceNumber,new qt(Mi(f.readTime),new q(gn(f.documentKey)),f.largestBatchId)):$s.empty(),_=d.fields.map(([S,k])=>new Si(Se.fromServerFormat(S),k));return new zs(d.indexId,d.collectionGroup,_,p)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Y(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=qo(e),s=ns(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>b.forEach(a,u=>s.put(bv(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return b.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),b.forEach(a,u=>this.wn(e,i,u).next(c=>{const d=this.Sn(s,u);return c.isEqual(d)?b.resolve():this.bn(e,s,u,c,d)}))))})}Dn(e,n,r,i){return ts(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return ts(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=ts(e);let s=new fe(ur);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new pi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new fe(ur);const i=this.Vn(n,e);if(i==null)return r;const s=Of(n);if(s!=null){const o=e.data.field(s.fieldPath);if(za(o))for(const a of o.arrayValue.values||[])r=r.add(new pi(n.indexId,e.key,this.dn(a),i))}else r=r.add(new pi(n.indexId,e.key,nu,i));return r}bn(e,n,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,d,f,p){const _=u.getIterator(),S=c.getIterator();let k=es(_),N=es(S);for(;k||N;){let E=!1,w=!1;if(k&&N){const R=d(k,N);R<0?w=!0:R>0&&(E=!0)}else k!=null?w=!0:E=!0;E?(f(N),N=es(S)):w?(p(k),k=es(_)):(k=es(_),N=es(S))}}(i,s,ur,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),b.waitFor(o)}yn(e){let n=1;return ns(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ur(o,a)).filter((o,a,u)=>!a||ur(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ur(o,e),u=ur(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,nu,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,nu,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,n){return ur(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(jv)}getMinOffset(e,n){return b.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||W())).next(jv)}}function Fv(t){return He(t,"collectionParents")}function ts(t){return He(t,"indexEntries")}function qo(t){return He(t,"indexConfiguration")}function ns(t){return He(t,"indexState")}function jv(t){H(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;dm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new qt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class mt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.J({range:o},(d,f,p)=>(a++,p.delete()));s.push(u.next(()=>{H(a===1)}));const c=[];for(const d of n.mutations){const f=KE(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return b.waitFor(s).next(()=>c)}function _c(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw W();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(41943040,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);class ih{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){H(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ih(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ls(e),o=cr(e);return o.add({}).next(a=>{H(typeof a=="number");const u=new wm(a,n,r,i),c=function(_,S,k){const N=k.baseMutations.map(w=>Ga(_.ct,w)),E=k.mutations.map(w=>Ga(_.ct,w));return{userId:S,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:N,mutations:E}}(this.serializer,this.userId,u),d=[];let f=new fe((p,_)=>Y(p.canonicalString(),_.canonicalString()));for(const p of i){const _=KE(this.userId,p.key.path,a);f=f.add(p.key.path.popLast()),d.push(o.put(c)),d.push(s.put(_,qb))}return f.forEach(p=>{d.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),b.waitFor(d).next(()=>u)})}lookupMutationBatch(e,n){return cr(e).get(n).next(r=>r?(H(r.userId===this.userId),di(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?b.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return cr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(H(a.batchId>=r),s=di(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return cr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).U("userMutationsIndex",n).next(r=>r.map(i=>di(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Ru(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ls(e).J({range:i},(o,a,u)=>{const[c,d,f]=o,p=gn(d);if(c===this.userId&&n.path.isEqual(p))return cr(e).get(f).next(_=>{if(!_)throw W();H(_.userId===this.userId),s.push(di(this.serializer,_))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fe(Y);const i=[];return n.forEach(s=>{const o=Ru(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=ls(e).J({range:a},(c,d,f)=>{const[p,_,S]=c,k=gn(_);p===this.userId&&s.path.isEqual(k)?r=r.add(S):f.done()});i.push(u)}),b.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Ru(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new fe(Y);return ls(e).J({range:o},(u,c,d)=>{const[f,p,_]=u,S=gn(p);f===this.userId&&r.isPrefixOf(S)?S.length===i&&(a=a.add(_)):d.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(cr(e).get(s).next(o=>{if(o===null)throw W();H(o.userId===this.userId),r.push(di(this.serializer,o))}))}),b.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return QT(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),b.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return b.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ls(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=gn(s[1]);i.push(u)}else a.done()}).next(()=>{H(i.length===0)})})}containsKey(e,n){return HT(e,this.userId,n)}Nn(e){return JT(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function HT(t,e,n){const r=Ru(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ls(t).J({range:s,H:!0},(a,u,c)=>{const[d,f,p]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function cr(t){return He(t,"mutations")}function ls(t){return He(t,"documentMutations")}function JT(t){return He(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Li(0)}static kn(){return new Li(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Li(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>J.fromTimestamp(new ke(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>rs(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(H(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return rs(e).J((o,a)=>{const u=ea(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,n){return rs(e).J((r,i)=>{const s=ea(i);n(s)})}qn(e){return Bv(e).get("targetGlobalKey").next(n=>(H(n!==null),n))}Qn(e,n){return Bv(e).put("targetGlobalKey",n)}Kn(e,n){return rs(e).put(GT(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ni(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return rs(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=ea(a);il(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=vr(e);return n.forEach(o=>{const a=yt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(i)}removeMatchingKeys(e,n,r){const i=vr(e);return b.forEach(n,s=>{const o=yt(s.path);return b.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=vr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=vr(e);let s=ee();return i.J({range:r,H:!0},(o,a,u)=>{const c=gn(o[1]),d=new q(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=yt(n.path),i=IDBKeyRange.bound([r],[jE(r)],!1,!0);let s=0;return vr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return rs(e).get(n).next(r=>r?ea(r):null)}}function rs(t){return He(t,"targets")}function Bv(t){return He(t,"targetGlobal")}function vr(t){return He(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv([t,e],[n,r]){const i=Y(t,n);return i===0?Y(e,r):i}class sD{constructor(e){this.Un=e,this.buffer=new fe(zv),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();zv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class YT{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Jr(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Hr(n)}await this.Hn(3e5)})}}class oD{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Ct.oe);const r=new sD(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Uv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Uv):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),ss()<=ie.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function XT(t,e){return new oD(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n){this.db=e,this.garbageCollector=XT(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return ru(e,r)}removeReference(e,n,r){return ru(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return ru(e,n)}nr(e,n){return function(i,s){let o=!1;return JT(i).Y(a=>HT(i,a,s).next(u=>(u&&(o=!0),b.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,J.min()),vr(e).delete(function(f){return[0,yt(f.path)]}(o))))});i.push(u)}}).next(()=>b.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return ru(e,n)}tr(e,n){const r=vr(e);let i,s=Ct.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==Ct.oe&&n(new q(gn(i)),s),s=c,i=u):s=Ct.oe}).next(()=>{s!==Ct.oe&&n(new q(gn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ru(t,e){return vr(t).put(function(r,i){return{targetId:0,path:yt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.changes=new tr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return oi(e).put(r)}removeEntry(e,n,r){return oi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],gc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Te.newInvalidDocument(n);return oi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Go(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Te.newInvalidDocument(n)};return oi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Go(n))},(i,s)=>{r={document:this.ir(n,s),size:_c(s)}}).next(()=>r)}getEntries(e,n){let r=Nt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Nt(),i=new ve(q.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,_c(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return b.resolve();let i=new fe(Gv);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Go(i.first()),Go(i.last())),o=i.getIterator();let a=o.getNext();return oi(e).J({index:"documentKeyIndex",range:s},(u,c,d)=>{const f=q.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Gv(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(Go(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),gc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return oi(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Nt();for(const f of c){const p=this.ir(q.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);p.isFoundDocument()&&(ol(n,p)||i.has(p.key))&&(d=d.insert(p.key,p))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=Nt();const o=qv(n,r),a=qv(n,qt.max());return oi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,d)=>{const f=this.ir(q.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new uD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return $v(e).get("remoteDocumentGlobalKey").next(n=>(H(!!n),n))}rr(e,n){return $v(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=QN(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(J.min())))return r}return Te.newInvalidDocument(e)}}function eS(t){return new lD(t)}class uD extends ZT{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new tr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new fe((s,o)=>Y(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=kv(this.cr.serializer,o);i=i.add(s.path.popLast());const c=_c(u);r+=c-a.size,n.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=kv(this.cr.serializer,o.convertToNoDocument(J.min()));n.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),b.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function $v(t){return He(t,"remoteDocumentGlobal")}function oi(t){return He(t,"remoteDocumentsV14")}function Go(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function qv(t,e){const n=e.documentKey.path.toArray();return[t,gc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Gv(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Y(n[s],r[s]),i)return i;return i=Y(n.length,r.length),i||(i=Y(n[n.length-2],r[r.length-2]),i||Y(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ma(r.mutation,i,bt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=yn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=yn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Nt();const o=pa(),a=function(){return pa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof nr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ma(d.mutation,c,d.mutation.getFieldMask(),ke.now())):o.set(c.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new cD(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=pa();let i=new ve((o,a)=>o-a),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||bt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||ee()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=yT();d.forEach(p=>{if(!s.has(p)){const _=ST(n.get(p),r.get(p));_!==null&&f.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(yn());let a=-1,u=s;return o.next(c=>b.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(d=>({batchId:a,changes:gT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Xo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xo();return this.indexManager.getCollectionParents(e,s).next(a=>b.forEach(a,u=>{const c=function(f,p){return new er(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Te.newInvalidDocument(d)))});let a=Xo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ma(d.mutation,c,bt.empty(),ke.now()),ol(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return b.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Am(i.bundledQuery),readTime:ze(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(){this.overlays=new ve(q.comparator),this.Ir=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yn();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=yn(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=yn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=yn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return b.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Em(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.Tr=new fe(Ye.Er),this.dr=new fe(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new se([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new se([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||Y(e.wr,n.wr)}static Ar(e,n){return Y(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new fe(Ye.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fe(Y);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new q(s),0);let a=new fe(Y);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),b.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){H(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),i=this.br.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.Mr=e,this.docs=function(){return new ve(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(n))}getEntries(e,n){let r=Nt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Te.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nt();const o=n.path,a=new q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||dm(BE(d),r)<=0||(i.has(d.key)||ol(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){W()}Or(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gD(this)}getSize(e){return b.resolve(this.size)}}class gD extends ZT{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.persistence=e,this.Nr=new tr(n=>Ni(n),il),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new xm,this.targetCount=0,this.kr=Li.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),b.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Li(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Kn(n),b.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ct(0),this.Kr=!1,this.Kr=!0,this.$r=new fD,this.referenceDelegate=e(this),this.Ur=new yD(this),this.indexManager=new nD,this.remoteDocumentCache=function(i){return new mD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qT(n),this.Gr=new hD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new pD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new _D(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class _D extends $E{constructor(e){super(),this.currentSequenceNumber=e}}class sh{constructor(e){this.persistence=e,this.Jr=new xm,this.Yr=null}static Zr(e){return new sh(e)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return b.or([()=>b.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class vc{constructor(e,n){this.persistence=e,this.ti=new tr(r=>yt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=XT(this,n)}static Zr(e,n){return new vc(e,n)}zr(){}jr(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return b.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?b.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),b.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=xu(e.data.value)),n}nr(e,n,r){return b.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Jc("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",sv,{unique:!0}),u.createObjectStore("documentMutations")}(e),Kv(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Kv(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",sv,{unique:!0});const f=c.store("mutations"),p=d.map(_=>f.put(_));return b.waitFor(p)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:nN});c.createIndex("collectionPathOverlayIndex",rN,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",iN,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:Gb});c.createIndex("documentKeyIndex",Kb),c.createIndex("collectionGroupIndex",Wb)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:Xb}).createIndex("sequenceNumberIndex",Zb,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:eN}).createIndex("documentKeyIndex",tN,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=_c(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>b.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>b.forEach(a,u=>{H(u.userId===s.userId);const c=di(this.serializer,u);return QT(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new se(o),c=function(f){return[0,yt(f)]}(u);s.push(n.get(c).next(d=>d?b.resolve():(f=>n.put({targetId:0,path:yt(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>b.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:Yb});const r=n.store("collectionParents"),i=new Pm,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:yt(u)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new se(o);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,u],c)=>{const d=gn(a);return s(d.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=ea(i),o=GT(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),u=function(f){return f.document?new q(se.fromString(f.document.name).popFirst(5)):f.noDocument?q.fromSegments(f.noDocument.path):f.unknownDocument?q.fromSegments(f.unknownDocument.path):W()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>b.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=eS(this.serializer),s=new km(sh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let d=(c=a.get(u.userId))!==null&&c!==void 0?c:ee();di(this.serializer,u).keys().forEach(f=>d=d.add(f)),a.set(u.userId,d)}),b.forEach(a,(u,c)=>{const d=new Ze(c),f=rh.lt(this.serializer,d),p=s.getIndexManager(d),_=ih.lt(d,this.serializer,p,s.referenceDelegate);return new tS(i,_,f,p).recalculateAndSaveOverlaysForDocumentKeys(new Mf(n,Ct.oe),u).next()})})}}function Kv(t){t.createObjectStore("targetDocuments",{keyPath:Hb}).createIndex("documentTargetsIndex",Jb,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Qb,{unique:!0}),t.createObjectStore("targetGlobal")}const Sd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Cm{constructor(e,n,r,i,s,o,a,u,c,d,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=d,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=p=>Promise.resolve(),!Cm.D())throw new j(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new aD(this,i),this.Ai=n+"main",this.serializer=new qT(u),this.Ri=new In(this.Ai,this.hi,new vD(this.serializer)),this.$r=new JN,this.Ur=new iD(this.referenceDelegate,this.serializer),this.remoteDocumentCache=eS(this.serializer),this.Gr=new HN,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&Be("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(O.FAILED_PRECONDITION,Sd);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Ct(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>iu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(Jr(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Ko(e).get("owner").next(n=>b.resolve(this.vi(n)))}Ci(e){return iu(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=He(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?b.resolve(!0):Ko(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new j(O.FAILED_PRECONDITION,Sd);return!1}}return!(!this.networkEnabled||!this.inForeground)||iu(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Mf(e,Ct.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>iu(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return ih.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new rD(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return rh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===17?aN:u===16?oN:u===15?pm:u===14?HE:u===13?QE:u===12?sN:u===11?WE:void W()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Mf(a,this.Qr?this.Qr.next():Ct.oe),n==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw Be(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new j(O.FAILED_PRECONDITION,zE);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Ko(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new j(O.FAILED_PRECONDITION,Sd)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ko(e).put("owner",n)}static D(){return In.D()}bi(e){const n=Ko(e);return n.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):b.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Be(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;G0()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Be("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Be("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ko(t){return He(t,"owner")}function iu(t){return He(t,"clientMetadata")}function bm(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Nm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return G0()?8:qE(Qe())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new wD;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ss()<=ie.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(ss()<=ie.DEBUG&&U("QueryEngine","Query:",os(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ss()<=ie.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(n))):b.resolve())}Yi(e,n){if(_v(n))return b.resolve(null);let r=_t(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=pc(n,null,"F"),r=_t(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,pc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return _v(n)||i.isEqual(J.min())?b.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?b.resolve(null):(ss()<=ie.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),os(n)),this.rs(e,o,n,UE(i,-1)).next(a=>a))})}ts(e,n){let r=new fe(pT(e));return n.forEach((i,s)=>{ol(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ss()<=ie.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",os(n)),this.Ji.getDocumentsMatchingQuery(e,n,qt.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ve(Y),this._s=new tr(s=>Ni(s),il),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function rS(t,e,n,r){return new ID(t,e,n,r)}async function iS(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ee();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function ED(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,p=f.keys();let _=b.resolve();return p.forEach(S=>{_=_.next(()=>d.getEntry(u,S)).next(k=>{const N=c.docVersions.get(S);H(N!==null),k.version.compareTo(N)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ee();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sS(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function TD(t,e){const n=z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Oe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(f,_),function(k,N,E){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,_,d)&&a.push(n.Ur.updateTargetData(s,_))});let u=Nt(),c=ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(oS(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(J.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function oS(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function SD(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Hs(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Js(t,e,n){const r=z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Jr(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function wc(t,e,n){const r=z(t);let i=J.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=z(u),p=f._s.get(d);return p!==void 0?b.resolve(f.os.get(p)):f.Ur.getTargetData(c,d)}(r,o,_t(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ee())).next(a=>(uS(r,fT(e),a),{documents:a,Ts:s})))}function aS(t,e){const n=z(t),r=z(n.Ur),i=n.os.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function lS(t,e){const n=z(t),r=n.us.get(e)||J.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.cs.getAllFromCollectionGroup(i,e,UE(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(uS(n,e,i),i))}function uS(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}async function AD(t,e,n,r){const i=z(t);let s=ee(),o=Nt();for(const c of n){const d=e.Es(c.metadata.name);c.document&&(s=s.add(d));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(d,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await Hs(i,function(d){return _t(lo(se.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>oS(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.Ps,d.Is)).next(()=>d.Ps)))}async function RD(t,e,n=ee()){const r=await Hs(t,_t(Am(e.bundledQuery))),i=z(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ze(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Oe.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,n,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function Wv(t,e){return`firestore_clients_${t}_${e}`}function Qv(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ad(t,e){return`firestore_targets_${t}_${e}`}class Ic{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Rs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new j(i.error.code,i.error.message))),o?new Ic(e,n,i.state,s):(Be("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ga{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Rs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new j(r.error.code,r.error.message))),s?new ga(e,r.state,i):(Be("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ec{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Rs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=ym();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=GE(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Ec(e,s):(Be("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Dm{constructor(e,n){this.clientId=e,this.onlineState=n}static Rs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Dm(n.clientId,n.onlineState):(Be("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Jf{constructor(){this.activeTargetIds=ym()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rd{constructor(e,n,r,i,s){this.window=e,this.ui=n,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new ve(Y),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=Wv(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Jf),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(Wv(this.persistenceKey,r));if(i){const s=Ec.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const n=this.storage.getItem(this.xs);if(n){const r=this.Ls(n);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let n=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,n,r){this.qs(e,n,r),this.Qs(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Ad(this.persistenceKey,e));if(i){const s=ga.Rs(e,i);s&&(r=s.state)}}return n&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ad(this.persistenceKey,e))}updateQueryState(e,n,r){this.$s(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return U("SharedClientState","READ",e,n),n}setItem(e,n){U("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){U("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const n=e;if(n.storageArea===this.storage){if(U("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ds)return void Be("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Cs.test(n.key)){if(n.newValue==null){const r=this.Gs(n.key);return this.zs(r,null)}{const r=this.js(n.key,n.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(n.key)){if(n.newValue!==null){const r=this.Ys(n.key,n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.xs){if(n.newValue!==null){const r=this.Ls(n.newValue);if(r)return this.Bs(r)}}else if(n.key===this.vs){const r=function(s){let o=Ct.oe;if(s!=null)try{const a=JSON.parse(s);H(typeof a=="number"),o=a}catch(a){Be("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Ct.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Os){const r=this.Xs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(n)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,n,r){const i=new Ic(this.currentUser,e,n,r),s=Qv(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const n=Qv(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Us(e){const n={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(n))}$s(e,n,r){const i=Ad(this.persistenceKey,e),s=new ga(e,n,r);this.setItem(i,s.Vs())}Ws(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Os,n)}Gs(e){const n=this.Cs.exec(e);return n?n[1]:null}js(e,n){const r=this.Gs(e);return Ec.Rs(r,n)}Hs(e,n){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Ic.Rs(new Ze(s),i,n)}Ys(e,n){const r=this.Ms.exec(e),i=Number(r[1]);return ga.Rs(i,n)}Ls(e){return Dm.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);U("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,n){const r=n?this.Ss.insert(e,n):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let n=ym();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class cS{constructor(){this.so=new Jf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Jf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su=null;function Pd(){return su===null?su=function(){return 268435456+Math.round(2147483648*Math.random())}():su++,"0x"+su.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class CD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Pd(),u=this.xo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(U("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw $t("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=xD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Pd();return new Promise((o,a)=>{const u=new bE;u.setWithCredentials(!0),u.listenOnce(NE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Au.NO_ERROR:const d=u.getResponseJson();U(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Au.TIMEOUT:U(pt,`RPC '${e}' ${s} timed out`),a(new j(O.DEADLINE_EXCEEDED,"Request time out"));break;case Au.HTTP_ERROR:const f=u.getStatus();if(U(pt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const S=function(N){const E=N.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(E)>=0?E:O.UNKNOWN}(_.status);a(new j(S,_.message))}else a(new j(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new j(O.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{U(pt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(pt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Pd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=OE(),a=VE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");U(pt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let p=!1,_=!1;const S=new kD({Io:N=>{_?U(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(p||(U(pt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),U(pt,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},To:()=>f.close()}),k=(N,E,w)=>{N.listen(E,R=>{try{w(R)}catch(V){setTimeout(()=>{throw V},0)}})};return k(f,Yo.EventType.OPEN,()=>{_||(U(pt,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),k(f,Yo.EventType.CLOSE,()=>{_||(_=!0,U(pt,`RPC '${e}' stream ${i} transport closed`),S.So())}),k(f,Yo.EventType.ERROR,N=>{_||(_=!0,$t(pt,`RPC '${e}' stream ${i} transport errored:`,N),S.So(new j(O.UNAVAILABLE,"The operation could not be completed")))}),k(f,Yo.EventType.MESSAGE,N=>{var E;if(!_){const w=N.data[0];H(!!w);const R=w,V=R.error||((E=R[0])===null||E===void 0?void 0:E.error);if(V){U(pt,`RPC '${e}' stream ${i} received error:`,V);const F=V.status;let L=function(A){const I=$e[A];if(I!==void 0)return xT(I)}(F),T=V.message;L===void 0&&(L=O.INTERNAL,T="Unknown error status: "+F+" with message "+V.message),_=!0,S.So(new j(L,T)),f.close()}else U(pt,`RPC '${e}' stream ${i} received:`,w),S.bo(w)}}),k(a,DE.STAT_EVENT,N=>{N.stat===Vf.PROXY?U(pt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Vf.NOPROXY&&U(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(){return typeof window<"u"?window:null}function Nu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){return new FN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Vm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Be(n.toString()),Be("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new j(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bD extends dS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=BN(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?ze(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Gf(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=dc(u)?{documents:FT(s,u)}:{query:nh(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=NT(s,o.resumeToken);const c=$f(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Qs(s,o.snapshotVersion.toTimestamp());const c=$f(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=$N(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Gf(this.serializer),n.removeTarget=e,this.a_(n)}}class ND extends dS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return H(!!e.streamToken),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=zN(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Gf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ga(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new j(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,qf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(O.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,qf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class VD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Be(n),this.D_=!1):U("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Xr(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=z(u);c.L_.add(4),await ho(c),c.q_.set("Unknown"),c.L_.delete(4),await hl(c)}(this))})}),this.q_=new VD(r,i)}}async function hl(t){if(Xr(t))for(const e of t.B_)await e(!0)}async function ho(t){for(const e of t.B_)await e(!1)}function oh(t,e){const n=z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Lm(n)?Mm(n):po(n).r_()&&Om(n,e))}function Ys(t,e){const n=z(t),r=po(n);n.N_.delete(e),r.r_()&&fS(n,e),n.N_.size===0&&(r.r_()?r.o_():Xr(n)&&n.q_.set("Unknown"))}function Om(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}po(t).A_(e)}function fS(t,e){t.Q_.xe(e),po(t).R_(e)}function Mm(t){t.Q_=new VN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),po(t).start(),t.q_.v_()}function Lm(t){return Xr(t)&&!po(t).n_()&&t.N_.size>0}function Xr(t){return z(t).L_.size===0}function pS(t){t.Q_=void 0}async function MD(t){t.q_.set("Online")}async function LD(t){t.N_.forEach((e,n)=>{Om(t,e)})}async function FD(t,e){pS(t),Lm(t)?(t.q_.M_(e),Mm(t)):t.q_.set("Unknown")}async function jD(t,e,n){if(t.q_.set("Online"),e instanceof bT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tc(t,r)}else if(e instanceof bu?t.Q_.Ke(e):e instanceof CT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await sS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Oe.EMPTY_BYTE_STRING,d.snapshotVersion)),fS(s,u);const f=new Bn(d.target,u,c,d.sequenceNumber);Om(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Tc(t,r)}}async function Tc(t,e,n){if(!Jr(e))throw e;t.L_.add(1),await ho(t),t.q_.set("Offline"),n||(n=()=>sS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await hl(t)})}function mS(t,e){return e().catch(n=>Tc(t,n,e))}async function fo(t){const e=z(t),n=zr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;UD(e);)try{const i=await SD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,BD(e,i)}catch(i){await Tc(e,i)}gS(e)&&yS(e)}function UD(t){return Xr(t)&&t.O_.length<10}function BD(t,e){t.O_.push(e);const n=zr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function gS(t){return Xr(t)&&!zr(t).n_()&&t.O_.length>0}function yS(t){zr(t).start()}async function zD(t){zr(t).p_()}async function $D(t){const e=zr(t);for(const n of t.O_)e.m_(n.mutations)}async function qD(t,e,n){const r=t.O_.shift(),i=Im.from(r,e,n);await mS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await fo(t)}async function GD(t,e){e&&zr(t).V_&&await async function(r,i){if(function(o){return PT(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();zr(r).s_(),await mS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await fo(r)}}(t,e),gS(t)&&yS(t)}async function Jv(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Xr(n);n.L_.add(3),await ho(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await hl(n)}async function Yf(t,e){const n=z(t);e?(n.L_.delete(2),await hl(n)):e||(n.L_.add(2),await ho(n),n.q_.set("Unknown"))}function po(t){return t.K_||(t.K_=function(n,r,i){const s=z(n);return s.w_(),new bD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:MD.bind(null,t),Ro:LD.bind(null,t),mo:FD.bind(null,t),d_:jD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Lm(t)?Mm(t):t.q_.set("Unknown")):(await t.K_.stop(),pS(t))})),t.K_}function zr(t){return t.U_||(t.U_=function(n,r,i){const s=z(n);return s.w_(),new ND(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:zD.bind(null,t),mo:GD.bind(null,t),f_:$D.bind(null,t),g_:qD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await fo(t)):(await t.U_.stop(),t.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Fm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mo(t,e){if(Be("AsyncQueue",`${e}: ${t}`),Jr(t))return new j(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Xo(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new Ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.W_=new ve(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):W():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xs{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xs(e,n,Ns.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class WD{constructor(){this.queries=Xv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=z(n),s=i.queries;i.queries=Xv(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new j(O.ABORTED,"Firestore shutting down"))}}function Xv(){return new tr(t=>dT(t),sl)}async function jm(t,e){const n=z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new KD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=mo(o,`Initialization of query '${os(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Bm(n)}async function Um(t,e){const n=z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function QD(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Bm(n)}function HD(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Bm(t){t.Y_.forEach(e=>{e.next()})}var Xf,Zv;(Zv=Xf||(Xf={})).ea="default",Zv.Cache="cache";class zm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xf.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n){this.aa=e,this.byteLength=n}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.serializer=e}Es(e){return En(this.serializer,e)}ds(e){return e.metadata.exists?LT(this.serializer,e.document,!1):Te.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return ze(e)}}class YD{constructor(e,n,r){this.ca=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=_S(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++n;const r=se.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ha(e){const n=new Map,r=new ew(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ee()).add(s);n.set(o,a)}}return n}async complete(){const e=await AD(this.localStore,new ew(this.serializer),this.documents,this.ca.id),n=this.ha(this.documents);for(const r of this.queries)await RD(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function _S(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.key=e}}class wS{constructor(e){this.key=e}}class IS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=pT(e),this.Ra=new Ns(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Yv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const p=i.get(d),_=ol(this.query,f)?f:null,S=!!p&&this.mutatedKeys.has(p.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;p&&_?p.data.isEqual(_.data)?S!==k&&(r.track({type:3,doc:_}),N=!0):this.ga(p,_)||(r.track({type:2,doc:_}),N=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),N=!0):p&&!_&&(r.track({type:1,doc:p}),N=!0,(u||c)&&(a=!0)),N&&(_?(o=o.add(_),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(_,S){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return k(_)-k(S)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Xs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Yv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new wS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new vS(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Xs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class XD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ZD{constructor(e){this.key=e,this.va=!1}}class eV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new tr(a=>dT(a),sl),this.Ma=new Map,this.xa=new Set,this.Oa=new ve(q.comparator),this.Na=new Map,this.La=new xm,this.Ba={},this.ka=new Map,this.qa=Li.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function tV(t,e,n=!0){const r=ah(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await ES(r,e,n,!0),i}async function nV(t,e){const n=ah(t);await ES(n,e,!0,!1)}async function ES(t,e,n,r){const i=await Hs(t.localStore,_t(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await $m(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&oh(t.remoteStore,i),a}async function $m(t,e,n,r,i){t.Ka=(f,p,_)=>async function(k,N,E,w){let R=N.view.ma(E);R.ns&&(R=await wc(k.localStore,N.query,!1).then(({documents:T})=>N.view.ma(T,R)));const V=w&&w.targetChanges.get(N.targetId),F=w&&w.targetMismatches.get(N.targetId)!=null,L=N.view.applyChanges(R,k.isPrimaryClient,V,F);return Zf(k,N.targetId,L.wa),L.snapshot}(t,f,p,_);const s=await wc(t.localStore,e,!0),o=new IS(e,s.Ts),a=o.ma(s.documents),u=ul.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Zf(t,n,c.wa);const d=new XD(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function rV(t,e,n){const r=z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!sl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Js(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ys(r.remoteStore,i.targetId),Zs(r,i.targetId)}).catch(Hr)):(Zs(r,i.targetId),await Js(r.localStore,i.targetId,!0))}async function iV(t,e){const n=z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ys(n.remoteStore,r.targetId))}async function sV(t,e,n){const r=Wm(t);try{const i=await function(o,a){const u=z(o),c=ke.now(),d=a.reduce((_,S)=>_.add(S.key),ee());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=Nt(),k=ee();return u.cs.getEntries(_,d).next(N=>{S=N,S.forEach((E,w)=>{w.isValidDocument()||(k=k.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,S)).next(N=>{f=N;const E=[];for(const w of a){const R=bN(w,f.get(w.key).overlayedDocument);R!=null&&E.push(new nr(w.key,R,tT(R.value.mapValue),xe.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,E,a)}).next(N=>{p=N;const E=N.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(_,N.batchId,E)})}).then(()=>({batchId:p.batchId,changes:gT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new ve(Y)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await rr(r,i.changes),await fo(r.remoteStore)}catch(i){const s=mo(i,"Failed to persist write");n.reject(s)}}async function TS(t,e){const n=z(t);try{const r=await TD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?H(o.va):i.removedDocuments.size>0&&(H(o.va),o.va=!1))}),await rr(n,r,e)}catch(r){await Hr(r)}}function tw(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=z(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&Bm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oV(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ve(q.comparator);o=o.insert(s,Te.newNoDocument(s,J.min()));const a=ee().add(s),u=new ll(J.min(),new Map,new ve(Y),o,a);await TS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Km(r)}else await Js(r.localStore,e,!1).then(()=>Zs(r,e,n)).catch(Hr)}async function aV(t,e){const n=z(t),r=e.batch.batchId;try{const i=await ED(n.localStore,e);Gm(n,r,null),qm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await rr(n,i)}catch(i){await Hr(i)}}async function lV(t,e,n){const r=z(t);try{const i=await function(o,a){const u=z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(H(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);Gm(r,e,n),qm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await rr(r,i)}catch(i){await Hr(i)}}async function uV(t,e){const n=z(t);Xr(n.remoteStore)||U("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=z(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ka.get(r)||[];i.push(e),n.ka.set(r,i)}catch(r){const i=mo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function qm(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Gm(t,e,n){const r=z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Zs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||SS(t,r)})}function SS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ys(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Km(t))}function Zf(t,e,n){for(const r of n)r instanceof vS?(t.La.addReference(r.key,e),cV(t,r)):r instanceof wS?(U("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||SS(t,r.key)):W()}function cV(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.xa.add(r),Km(t))}function Km(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(se.fromString(e)),r=t.qa.next();t.Na.set(r,new ZD(n)),t.Oa=t.Oa.insert(n,r),oh(t.remoteStore,new Bn(_t(lo(n.path)),r,"TargetPurposeLimboResolution",Ct.oe))}}async function rr(t,e,n){const r=z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Nm.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>b.forEach(c,p=>b.forEach(p.$i,_=>d.persistence.referenceDelegate.addReference(f,p.targetId,_)).next(()=>b.forEach(p.Ui,_=>d.persistence.referenceDelegate.removeReference(f,p.targetId,_)))))}catch(f){if(!Jr(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const _=d.os.get(p),S=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(p,k)}}}(r.localStore,s))}async function hV(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await iS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new j(O.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rr(n,r.hs)}}function dV(t,e){const n=z(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function fV(t,e){const n=z(t),r=await wc(n.localStore,e.query,!0),i=e.view.ba(r);return n.isPrimaryClient&&Zf(n,e.targetId,i.wa),i}async function pV(t,e){const n=z(t);return lS(n.localStore,e).then(r=>rr(n,r))}async function mV(t,e,n,r){const i=z(t),s=await function(a,u){const c=z(a),d=z(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.Mn(f,u).next(p=>p?c.localDocuments.getDocuments(f,p):b.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await fo(i.remoteStore):n==="acknowledged"||n==="rejected"?(Gm(i,e,r||null),qm(i,e),function(a,u){z(z(a).mutationQueue).On(u)}(i.localStore,e)):W(),await rr(i,s)):U("SyncEngine","Cannot apply mutation batch with id: "+e)}async function gV(t,e){const n=z(t);if(ah(n),Wm(n),e===!0&&n.Qa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await nw(n,r.toArray());n.Qa=!0,await Yf(n.remoteStore,!0);for(const s of i)oh(n.remoteStore,s)}else if(e===!1&&n.Qa!==!1){const r=[];let i=Promise.resolve();n.Ma.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Zs(n,o),Js(n.localStore,o,!0))),Ys(n.remoteStore,o)}),await i,await nw(n,r),function(o){const a=z(o);a.Na.forEach((u,c)=>{Ys(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new ve(q.comparator)}(n),n.Qa=!1,await Yf(n.remoteStore,!1)}}async function nw(t,e,n){const r=z(t),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await Hs(r.localStore,_t(u[0]));for(const c of u){const d=r.Fa.get(c),f=await fV(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await aS(r.localStore,o);a=await Hs(r.localStore,c),await $m(r,AS(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function AS(t){return uT(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function yV(t){return function(n){return z(z(n).persistence).Qi()}(z(t).localStore)}async function _V(t,e,n,r){const i=z(t);if(i.Qa)return void U("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await lS(i.localStore,fT(s[0])),a=ll.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Oe.EMPTY_BYTE_STRING);await rr(i,o,a);break}case"rejected":await Js(i.localStore,e,!0),Zs(i,e,r);break;default:W()}}async function vV(t,e,n){const r=ah(t);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){U("SyncEngine","Adding an already active target "+i);continue}const s=await aS(r.localStore,i),o=await Hs(r.localStore,s);await $m(r,AS(s),o.targetId,!1,o.resumeToken),oh(r.remoteStore,o)}for(const i of n)r.Ma.has(i)&&await Js(r.localStore,i,!1).then(()=>{Ys(r.remoteStore,i),Zs(r,i)}).catch(Hr)}}function ah(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=TS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oV.bind(null,e),e.Ca.d_=QD.bind(null,e.eventManager),e.Ca.$a=HD.bind(null,e.eventManager),e}function Wm(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lV.bind(null,e),e}function wV(t,e,n){const r=z(t);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(_,S){const k=z(_),N=ze(S.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",E=>k.Gr.getBundleMetadata(E,S.id)).then(E=>!!E&&E.createTime.compareTo(N)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(_){return{taskState:"Success",documentsLoaded:_.totalDocuments,bytesLoaded:_.totalBytes,totalDocuments:_.totalDocuments,totalBytes:_.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(_S(u));const c=new YD(u,s.localStore,o.serializer);let d=await o.Ua();for(;d;){const p=await c.la(d);p&&a._updateProgress(p),d=await o.Ua()}const f=await c.complete();return await rr(s,f.Ia,void 0),await function(_,S){const k=z(_);return k.persistence.runTransaction("Save bundle","readwrite",N=>k.Gr.saveBundleMetadata(N,S))}(s.localStore,u),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(u){return $t("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class $r{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return rS(this.persistence,new nS,e.initialUser,this.serializer)}Ga(e){return new km(sh.Zr,this.serializer)}Wa(e){return new cS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$r.provider={build:()=>new $r};class IV extends $r{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){H(this.persistence.referenceDelegate instanceof vc);const r=this.persistence.referenceDelegate.garbageCollector;return new YT(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new km(r=>vc.Zr(r,n),this.serializer)}}class Qm extends $r{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Wm(this.Ja.syncEngine),await fo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return rS(this.persistence,new nS,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new YT(r,e.asyncQueue,n)}Ha(e,n){const r=new zb(n,this.persistence);return new Bb(e.asyncQueue,r)}Ga(e){const n=bm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new Cm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,hS(),Nu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new cS}}class RS extends Qm{constructor(e,n){super(e,n,!1),this.Ja=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ja.syncEngine;this.sharedClientState instanceof Rd&&(this.sharedClientState.syncEngine={no:mV.bind(null,n),ro:_V.bind(null,n),io:vV.bind(null,n),Qi:yV.bind(null,n),eo:pV.bind(null,n)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await gV(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const n=hS();if(!Rd.D(n))throw new j(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=bm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Rd(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class qr{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hV.bind(null,this.syncEngine),await Yf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WD}()}createDatastore(e){const n=cl(e.databaseInfo.databaseId),r=function(s){return new CD(s)}(e.databaseInfo);return function(s,o,a,u){return new DD(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new OD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>tw(this.syncEngine,n,0),function(){return Hv.D()?new Hv:new PD}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new eV(i,s,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=z(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ho(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}qr.provider={build:()=>new qr};function rw(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Be("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e,n){this.Xa=e,this.serializer=n,this.metadata=new tt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const n=this.eu.decode(e),r=Number(n);isNaN(r)&&this.ru(`length string (${n}) is not valid number`);const i=await this.iu(r);return new JD(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const n=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new j(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=z(i),a={documents:s.map(f=>qa(o.serializer,f))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,se.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const p=UN(o.serializer,f);c.set(p.key.toString(),p)});const d=[];return s.forEach(f=>{const p=c.get(f.toString());H(!!p),d.push(p)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new co(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=q.fromPath(r);this.mutations.push(new vm(i,this.precondition(i)))}),await async function(r,i){const s=z(r),o={writes:i.map(a=>Ga(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,se.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw W();n=J.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new j(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?xe.exists(!1):xe.updateTime(n):xe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new j(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xe.updateTime(n)}return xe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Vm(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new TV(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!rl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!PT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=hm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xd(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hm(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jv(e.remoteStore,i)),t._onlineComponents=e}async function Hm(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await xd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;$t("Error using user provided cache. Falling back to memory cache: "+n),await xd(t,new $r)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await xd(t,new $r);return t._offlineComponents}async function uh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await iw(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await iw(t,new qr))),t._onlineComponents}function PS(t){return Hm(t).then(e=>e.persistence)}function go(t){return Hm(t).then(e=>e.localStore)}function xS(t){return uh(t).then(e=>e.remoteStore)}function Jm(t){return uh(t).then(e=>e.syncEngine)}function kS(t){return uh(t).then(e=>e.datastore)}async function eo(t){const e=await uh(t),n=e.eventManager;return n.onListen=tV.bind(null,e.syncEngine),n.onUnlisten=rV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=nV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=iV.bind(null,e.syncEngine),n}function RV(t){return t.asyncQueue.enqueue(async()=>{const e=await PS(t),n=await xS(t);return e.setNetworkEnabled(!0),function(i){const s=z(i);return s.L_.delete(0),hl(s)}(n)})}function PV(t){return t.asyncQueue.enqueue(async()=>{const e=await PS(t),n=await xS(t);return e.setNetworkEnabled(!1),async function(i){const s=z(i);s.L_.add(0),await ho(s),s.q_.set("Offline")}(n)})}function xV(t,e){const n=new tt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=z(c);return f.persistence.runTransaction("read document","readonly",p=>f.localDocuments.getDocument(p,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new j(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=mo(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await go(t),e,n)),n.promise}function CS(t,e,n={}){const r=new tt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new lh({next:p=>{d.Za(),o.enqueueAndForget(()=>Um(s,f));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new j(O.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&u&&u.source==="server"?c.reject(new j(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new zm(lo(a.path),d,{includeMetadataChanges:!0,_a:!0});return jm(s,f)}(await eo(t),t.asyncQueue,e,n,r)),r.promise}function kV(t,e){const n=new tt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await wc(i,s,!0),u=new IS(s,a.Ts),c=u.ma(a.documents),d=u.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const u=mo(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await go(t),e,n)),n.promise}function bS(t,e,n={}){const r=new tt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new lh({next:p=>{d.Za(),o.enqueueAndForget(()=>Um(s,f)),p.fromCache&&u.source==="server"?c.reject(new j(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new zm(a,d,{includeMetadataChanges:!0,_a:!0});return jm(s,f)}(await eo(t),t.asyncQueue,e,n,r)),r.promise}function CV(t,e,n){const r=new tt;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await kS(t);r.resolve(async function(o,a,u){var c;const d=z(o),{request:f,ut:p,parent:_}=jT(d.serializer,cT(a),u);d.connection.Fo||delete f.parent;const S=(await d.Lo("RunAggregationQuery",d.serializer.databaseId,_,f,1)).filter(N=>!!N.result);H(S.length===1);const k=(c=S[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(k).reduce((N,E)=>(N[p[E]]=k[E],N),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}function bV(t,e){const n=new lh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){z(i).Y_.add(s),s.next()}(await eo(t),n)),()=>{n.Za(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){z(i).Y_.delete(s)}(await eo(t),n))}}function NV(t,e,n,r){const i=function(o,a){let u;return u=typeof o=="string"?kT().encode(o):o,function(d,f){return new EV(d,f)}(function(d,f){if(d instanceof Uint8Array)return rw(d,f);if(d instanceof ArrayBuffer)return rw(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(n,cl(e));t.asyncQueue.enqueueAndForget(async()=>{wV(await Jm(t),i,r)})}function DV(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=z(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await go(t),e))}function VV(t,e){return t.asyncQueue.enqueue(async()=>async function(r,i){const s=z(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",u=>o.getFieldIndexes(u).next(c=>function(f,p,_,S,k){f=[...f],p=[...p],f.sort(_),p.sort(_);const N=f.length,E=p.length;let w=0,R=0;for(;w<E&&R<N;){const V=_(f[R],p[w]);V<0?k(f[R++]):V>0?S(p[w++]):(w++,R++)}for(;w<E;)S(p[w++]);for(;R<N;)k(f[R++])}(c,i,Lb,d=>{a.push(o.addFieldIndex(u,d))},d=>{a.push(o.deleteFieldIndex(u,d))})).next(()=>b.waitFor(a)))}(await go(t),e))}function OV(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){z(r).ss.zi=i}(await go(t),e))}function MV(t){return t.asyncQueue.enqueue(async()=>function(n){const r=z(n),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",s=>i.deleteAllFieldIndexes(s))}(await go(t)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e,n){if(!n)throw new j(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DS(t,e,n,r){if(e===!0&&r===!0)throw new j(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ow(t){if(!q.isDocumentKey(t))throw new j(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function aw(t){if(q.isDocumentKey(t))throw new j(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ch(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function ne(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ch(t);throw new j(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function VS(t,e){if(e<=0)throw new j(O.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=NS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LE;switch(r.type){case"firstParty":return new Nb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sw.get(n);r&&(U("ComponentProvider","Removing Datastore"),sw.delete(n),r.terminate())}(this),Promise.resolve()}}function OS(t,e,n,r={}){var i;const s=(t=ne(t,dl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$t("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Ze.MOCK_USER;else{a=ex(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ze(c)}t._authCredentials=new kb(new ME(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nt(this.firestore,e,this._query)}}class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class un extends nt{constructor(e,n,r){super(e,n,lo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new q(e))}withConverter(e){return new un(this.firestore,e,this._path)}}function MS(t,e,...n){if(t=pe(t),Ym("collection","path",e),t instanceof dl){const r=se.fromString(e,...n);return aw(r),new un(t,null,r)}{if(!(t instanceof Fe||t instanceof un))throw new j(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return aw(r),new un(t.firestore,null,r)}}function LV(t,e){if(t=ne(t,dl),Ym("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new j(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nt(t,null,function(r){return new er(se.emptyPath(),r)}(e))}function Sc(t,e,...n){if(t=pe(t),arguments.length===1&&(e=hm.newId()),Ym("doc","path",e),t instanceof dl){const r=se.fromString(e,...n);return ow(r),new Fe(t,null,new q(r))}{if(!(t instanceof Fe||t instanceof un))throw new j(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return ow(r),new Fe(t.firestore,t instanceof un?t.converter:null,new q(r))}}function FV(t,e){return t=pe(t),e=pe(e),(t instanceof Fe||t instanceof un)&&(e instanceof Fe||e instanceof un)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Xm(t,e){return t=pe(t),e=pe(e),t instanceof nt&&e instanceof nt&&t.firestore===e.firestore&&sl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Vm(this,"async_queue_retry"),this.Vu=()=>{const r=Nu();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Nu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Nu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new tt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Jr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Fm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function ep(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class LS{constructor(){this._progressObserver={},this._taskCompletionResolver=new tt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV=-1;class me extends dl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new uw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uw(e),this._firestoreClient=void 0,await e}}}function UV(t,e,n){n||(n="(default)");const r=Zn(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(Wn(s,e))return i;throw new j(O.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new j(O.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function FS(t,e){const n=typeof t=="object"?t:Xp(),r=typeof t=="string"?t:e||"(default)",i=Zn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=X1("firestore");s&&OS(i,...s)}return i}function Ce(t){if(t._terminated)throw new j(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jS(t),t._firestoreClient}function jS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new cN(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,NS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new AV(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}function BV(t,e){$t("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return US(t,qr.provider,{build:r=>new Qm(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function zV(t){$t("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();US(t,qr.provider,{build:n=>new RS(n,e.cacheSizeBytes)})}function US(t,e,n){if((t=ne(t,me))._firestoreClient||t._terminated)throw new j(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new j(O.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},jS(t)}function $V(t){if(t._initialized&&!t._terminated)throw new j(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new tt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!In.D())return Promise.resolve();const i=r+"main";await In.delete(i)}(bm(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function qV(t){return function(n){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>uV(await Jm(n),r)),r.promise}(Ce(t=ne(t,me)))}function GV(t){return RV(Ce(t=ne(t,me)))}function KV(t){return PV(Ce(t=ne(t,me)))}function WV(t){return fk(t.app,"firestore",t._databaseId.database),t._delete()}function QV(t,e){const n=Ce(t=ne(t,me)),r=new LS;return NV(n,t._databaseId,e,r),r}function HV(t,e){return DV(Ce(t=ne(t,me)),e).then(n=>n?new nt(t,null,n.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class BS{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gr(Oe.fromBase64String(e))}catch(n){throw new j(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gr(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function JV(){return new Zr("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YV=/^__.*__$/;class XV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new uo(e,this.data,n,this.fieldTransforms)}}class zS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $S(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class dh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new dh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ac(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if($S(this.Cu)&&YV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ZV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||cl(e)}Qu(e,n,r,i=!1){return new dh({Cu:e,methodName:n,qu:r,path:Se.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gi(t){const e=t._freezeSettings(),n=cl(t._databaseId);return new ZV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fh(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);sg("Data must be an object, but it was:",o,r);const a=KS(r,o);let u,c;if(s.merge)u=new bt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const p=Ka(e,f,n);if(!o.contains(p))throw new j(O.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);QS(d,p)||d.push(p)}u=new bt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new XV(new ot(a),u,c)}class pl extends ei{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pl}}function qS(t,e,n){return new dh({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Zm extends ei{_toFieldTransform(e){return new al(e.path,new Ks)}isEqual(e){return e instanceof Zm}}class eg extends ei{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=qS(this,e,!0),r=this.Ku.map(s=>Ki(s,n)),i=new Di(r);return new al(e.path,i)}isEqual(e){return e instanceof eg&&Wn(this.Ku,e.Ku)}}class tg extends ei{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=qS(this,e,!0),r=this.Ku.map(s=>Ki(s,n)),i=new Vi(r);return new al(e.path,i)}isEqual(e){return e instanceof tg&&Wn(this.Ku,e.Ku)}}class ng extends ei{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Ws(e.serializer,vT(e.serializer,this.$u));return new al(e.path,n)}isEqual(e){return e instanceof ng&&this.$u===e.$u}}function rg(t,e,n,r){const i=t.Qu(1,e,n);sg("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();Yr(r,(u,c)=>{const d=ph(e,u,n);c=pe(c);const f=i.Nu(d);if(c instanceof pl)s.push(d);else{const p=Ki(c,f);p!=null&&(s.push(d),o.set(d,p))}});const a=new bt(s);return new zS(o,a,i.fieldTransforms)}function ig(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Ka(e,r,n)],u=[i];if(s.length%2!=0)throw new j(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Ka(e,s[p])),u.push(s[p+1]);const c=[],d=ot.empty();for(let p=a.length-1;p>=0;--p)if(!QS(c,a[p])){const _=a[p];let S=u[p];S=pe(S);const k=o.Nu(_);if(S instanceof pl)c.push(_);else{const N=Ki(S,k);N!=null&&(c.push(_),d.set(_,N))}}const f=new bt(c);return new zS(d,f,o.fieldTransforms)}function GS(t,e,n,r=!1){return Ki(n,t.Qu(r?4:3,e))}function Ki(t,e){if(WS(t=pe(t)))return sg("Unsupported field value:",e,t),KS(t,e);if(t instanceof ei)return function(r,i){if(!$S(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ki(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:Qs(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qs(i.serializer,s)}}if(r instanceof hh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gr)return{bytesValue:NT(i.serializer,r._byteString)};if(r instanceof Fe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof fl)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return _m(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ch(r)}`)}(t,e)}function KS(t,e){const n={};return YE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(t,(r,i)=>{const s=Ki(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function WS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof hh||t instanceof Gr||t instanceof Fe||t instanceof ei||t instanceof fl)}function sg(t,e,n){if(!WS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ch(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ka(t,e,n){if((e=pe(e))instanceof Zr)return e._internalPath;if(typeof e=="string")return ph(t,e);throw Ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const e2=new RegExp("[~\\*/\\[\\]]");function ph(t,e,n){if(e.search(e2)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zr(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ac(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new j(O.INVALID_ARGUMENT,a+t+u)}function QS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new t2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class t2 extends Wa{data(){return super.data()}}function mh(t,e){return typeof e=="string"?ph(t,e):e instanceof Zr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class og{}class yo extends og{}function n2(t,e,...n){let r=[];e instanceof og&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Wi).length,a=s.filter(u=>u instanceof _o).length;if(o>1||o>0&&a>0)throw new j(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class _o extends yo{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _o(e,n,r)}_apply(e){const n=this._parse(e);return YS(e._query,n),new nt(e.firestore,e.converter,zf(e._query,n))}_parse(e){const n=Gi(e.firestore);return function(s,o,a,u,c,d,f){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){hw(f,d);const _=[];for(const S of f)_.push(cw(u,s,S));p={arrayValue:{values:_}}}else p=cw(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||hw(f,d),p=GS(a,o,f,d==="in"||d==="not-in");return oe.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function r2(t,e,n){const r=e,i=mh("where",t);return _o._create(i,r,n)}class Wi extends og{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wi(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ce.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)YS(o,u),o=zf(o,u)}(e._query,n),new nt(e.firestore,e.converter,zf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function i2(...t){return t.forEach(e=>XS("or",e)),Wi._create("or",t)}function s2(...t){return t.forEach(e=>XS("and",e)),Wi._create("and",t)}class gh extends yo{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gh(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new j(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $a(s,o)}(e._query,this._field,this._direction);return new nt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new er(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function o2(t,e="asc"){const n=e,r=mh("orderBy",t);return gh._create(r,n)}class ml extends yo{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ml(e,n,r)}_apply(e){return new nt(e.firestore,e.converter,pc(e._query,this._limit,this._limitType))}}function a2(t){return VS("limit",t),ml._create("limit",t,"F")}function l2(t){return VS("limitToLast",t),ml._create("limitToLast",t,"L")}class gl extends yo{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new gl(e,n,r)}_apply(e){const n=JS(e,this.type,this._docOrFields,this._inclusive);return new nt(e.firestore,e.converter,function(i,s){return new er(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function u2(...t){return gl._create("startAt",t,!0)}function c2(...t){return gl._create("startAfter",t,!1)}class yl extends yo{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new yl(e,n,r)}_apply(e){const n=JS(e,this.type,this._docOrFields,this._inclusive);return new nt(e.firestore,e.converter,function(i,s){return new er(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function h2(...t){return yl._create("endBefore",t,!1)}function d2(...t){return yl._create("endAt",t,!0)}function JS(t,e,n,r){if(n[0]=pe(n[0]),n[0]instanceof Wa)return function(s,o,a,u,c){if(!u)throw new j(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of bs(s))if(f.field.isKeyField())d.push(bi(o,u.key));else{const p=u.data.field(f.field);if(Yc(p))throw new j(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const _=f.field.canonicalString();throw new j(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}d.push(p)}return new Br(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Gi(t.firestore);return function(o,a,u,c,d,f){const p=o.explicitOrderBy;if(d.length>p.length)throw new j(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let S=0;S<d.length;S++){const k=d[S];if(p[S].field.isKeyField()){if(typeof k!="string")throw new j(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!gm(o)&&k.indexOf("/")!==-1)throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const N=o.path.child(se.fromString(k));if(!q.isDocumentKey(N))throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const E=new q(N);_.push(bi(a,E))}else{const N=GS(u,c,k);_.push(N)}}return new Br(_,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function cw(t,e,n){if(typeof(n=pe(n))=="string"){if(n==="")throw new j(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gm(e)&&n.indexOf("/")!==-1)throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!q.isDocumentKey(r))throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bi(t,new q(r))}if(n instanceof Fe)return bi(t,n._key);throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ch(n)}.`)}function hw(t,e){if(!Array.isArray(t)||t.length===0)throw new j(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function YS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function XS(t,e){if(!(e instanceof _o||e instanceof Wi))throw new j(O.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class ag{convertValue(e,n="none"){switch(jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Re(o.doubleValue));return new fl(s)}convertGeoPoint(e){return new hh(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ua(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);H($T(r));const i=new Fr(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class f2 extends ag{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){return new to("sum",Ka("sum",t))}function m2(t){return new to("avg",Ka("average",t))}function ZS(){return new to("count")}function g2(t,e){var n,r;return t instanceof to&&e instanceof to&&t.aggregateType===e.aggregateType&&((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function y2(t,e){return Xm(t.query,e.query)&&Wn(t.data(),e.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fi extends Wa{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ya extends Fi{data(e={}){return super.data(e)}}class ji{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Sr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ya(this._firestore,this._userDataWriter,r.key,r,new Sr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new ya(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Sr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new ya(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Sr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:_2(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}function v2(t,e){return t instanceof Fi&&e instanceof Fi?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ji&&e instanceof ji&&t._firestore===e._firestore&&Xm(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(t){t=ne(t,Fe);const e=ne(t.firestore,me);return CS(Ce(e),t._key).then(n=>lg(e,t,n))}class ti extends ag{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function w2(t){t=ne(t,Fe);const e=ne(t.firestore,me),n=Ce(e),r=new ti(e);return xV(n,t._key).then(i=>new Fi(e,r,t._key,i,new Sr(i!==null&&i.hasLocalMutations,!0),t.converter))}function I2(t){t=ne(t,Fe);const e=ne(t.firestore,me);return CS(Ce(e),t._key,{source:"server"}).then(n=>lg(e,t,n))}function tA(t){t=ne(t,nt);const e=ne(t.firestore,me),n=Ce(e),r=new ti(e);return HS(t._query),bS(n,t._query).then(i=>new ji(e,r,t,i))}function E2(t){t=ne(t,nt);const e=ne(t.firestore,me),n=Ce(e),r=new ti(e);return kV(n,t._query).then(i=>new ji(e,r,t,i))}function T2(t){t=ne(t,nt);const e=ne(t.firestore,me),n=Ce(e),r=new ti(e);return bS(n,t._query,{source:"server"}).then(i=>new ji(e,r,t,i))}function ta(t,e,n){t=ne(t,Fe);const r=ne(t.firestore,me),i=yh(t.converter,e,n);return vo(r,[fh(Gi(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xe.none())])}function S2(t,e,n,...r){t=ne(t,Fe);const i=ne(t.firestore,me),s=Gi(i);let o;return o=typeof(e=pe(e))=="string"||e instanceof Zr?ig(s,"updateDoc",t._key,e,n,r):rg(s,"updateDoc",t._key,e),vo(i,[o.toMutation(t._key,xe.exists(!0))])}function A2(t){return vo(ne(t.firestore,me),[new co(t._key,xe.none())])}function R2(t,e){const n=ne(t.firestore,me),r=Sc(t),i=yh(t.converter,e);return vo(n,[fh(Gi(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xe.exists(!1))]).then(()=>r)}function P2(t,...e){var n,r,i;t=pe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ep(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ep(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Fe)c=ne(t.firestore,me),d=lo(t._key.path),u={next:f=>{e[o]&&e[o](lg(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ne(t,nt);c=ne(f.firestore,me),d=f._query;const p=new ti(c);u={next:_=>{e[o]&&e[o](new ji(c,p,f,_))},error:e[o+1],complete:e[o+2]},HS(t._query)}return function(p,_,S,k){const N=new lh(k),E=new zm(_,N,S);return p.asyncQueue.enqueueAndForget(async()=>jm(await eo(p),E)),()=>{N.Za(),p.asyncQueue.enqueueAndForget(async()=>Um(await eo(p),E))}}(Ce(c),d,a,u)}function x2(t,e){return bV(Ce(t=ne(t,me)),ep(e)?e:{next:e})}function vo(t,e){return function(r,i){const s=new tt;return r.asyncQueue.enqueueAndForget(async()=>sV(await Jm(r),i,s)),s.promise}(Ce(t),e)}function lg(t,e,n){const r=n.docs.get(e._key),i=new ti(t);return new Fi(t,i,e._key,r,new Sr(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t){return nA(t,{count:ZS()})}function nA(t,e){const n=ne(t.firestore,me),r=Ce(n),i=JE(e,(s,o)=>new RT(o,s.aggregateType,s._internalFieldPath));return CV(r,t._query,i).then(s=>function(a,u,c){const d=new ti(a);return new BS(u,d,c)}(n,t,s))}class C2{constructor(e){this.kind="memory",this._onlineComponentProvider=qr.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=$r.provider}toJSON(){return{kind:this.kind}}}class b2{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=rA(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class N2{constructor(){this.kind="memoryEager",this._offlineComponentProvider=$r.provider}toJSON(){return{kind:this.kind}}}class D2{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new IV(e)}}toJSON(){return{kind:this.kind}}}function V2(){return new N2}function O2(t){return new D2(t==null?void 0:t.cacheSizeBytes)}function M2(t){return new C2(t)}function L2(t){return new b2(t)}class F2{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=qr.provider,this._offlineComponentProvider={build:n=>new Qm(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class j2{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=qr.provider,this._offlineComponentProvider={build:n=>new RS(n,e==null?void 0:e.cacheSizeBytes)}}}function rA(t){return new F2(t==null?void 0:t.forceOwnership)}function U2(){return new j2}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Gi(e)}set(e,n,r){this._verifyNotCommitted();const i=wr(e,this._firestore),s=yh(i.converter,n,r),o=fh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,xe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=wr(e,this._firestore);let o;return o=typeof(n=pe(n))=="string"||n instanceof Zr?ig(this._dataReader,"WriteBatch.update",s._key,n,r,i):rg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,xe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=wr(e,this._firestore);return this._mutations=this._mutations.concat(new co(n._key,xe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function wr(t,e){if((t=pe(t)).firestore!==e)throw new j(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Gi(n)}get(n){const r=wr(n,this._firestore),i=new f2(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return W();const o=s[0];if(o.isFoundDocument())return new Wa(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Wa(this._firestore,i,r._key,null,r.converter);throw W()})}set(n,r,i){const s=wr(n,this._firestore),o=yh(s.converter,r,i),a=fh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=wr(n,this._firestore);let a;return a=typeof(r=pe(r))=="string"||r instanceof Zr?ig(this._dataReader,"Transaction.update",o._key,r,i,s):rg(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=wr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=wr(e,this._firestore),r=new ti(this._firestore);return super.get(e).then(i=>new Fi(this._firestore,r,n._key,i._document,new Sr(!1,!1),n.converter))}}function z2(t,e,n){t=ne(t,me);const r=Object.assign(Object.assign({},B2),n);return function(s){if(s.maxAttempts<1)throw new j(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new tt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await kS(s);new SV(s.asyncQueue,c,a,o,u).au()}),u.promise}(Ce(t),i=>e(new sA(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(){return new pl("deleteField")}function us(){return new Zm("serverTimestamp")}function q2(...t){return new eg("arrayUnion",t)}function G2(...t){return new tg("arrayRemove",t)}function K2(t){return new ng("increment",t)}function W2(t){return new fl(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t){return Ce(t=ne(t,me)),new iA(t,e=>vo(t,e))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t,e){const n=Ce(t=ne(t,me));if(!n._uninitializedComponentsProvider||n._uninitializedComponentsProvider._offline.kind==="memory")return $t("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(s){const o=typeof s=="string"?function(c){try{return JSON.parse(c)}catch(d){throw new j(O.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}}(s):s,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const c=dw(u,"collectionGroup"),d=[];if(Array.isArray(u.fields))for(const f of u.fields){const p=ph("setIndexConfiguration",dw(f,"fieldPath"));f.arrayConfig==="CONTAINS"?d.push(new Si(p,2)):f.order==="ASCENDING"?d.push(new Si(p,0)):f.order==="DESCENDING"&&d.push(new Si(p,1))}a.push(new zs(zs.UNKNOWN_ID,c,d,$s.empty()))}return a}(e);return VV(n,r)}function dw(t,e){if(typeof t[e]!="string")throw new j(O.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function J2(t){var e;t=ne(t,me);const n=fw.get(t);if(n)return n;if(((e=Ce(t)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const r=new oA(t);return fw.set(t,r),r}function Y2(t){aA(t,!0)}function X2(t){aA(t,!1)}function Z2(t){MV(Ce(t._firestore)).then(e=>U("deleting all persistent cache indexes succeeded")).catch(e=>$t("deleting all persistent cache indexes failed",e))}function aA(t,e){OV(Ce(t._firestore),e).then(n=>U(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(n=>$t(`setting persistent cache index auto creation isEnabled=${e} failed`,n))}const fw=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(t){var e;const n=(e=Ce(ne(t.firestore,me))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return n===void 0?null:nh(n,_t(t._query))._t}function tO(t,e){var n;const r=JE(e,(s,o)=>new RT(o,s.aggregateType,s._internalFieldPath)),i=(n=Ce(ne(t.firestore,me))._onlineComponents)===null||n===void 0?void 0:n.datastore.serializer;return i===void 0?null:jT(i,cT(t._query),r,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return ug.instance.onExistenceFilterMismatch(e)}}class ug{constructor(){this.Uu=new Map}static get instance(){return ou||(ou=new ug,function(n){if(mc)throw new Error("a TestingHooksSpi instance is already set");mc=n}(ou)),ou}et(e){this.Uu.forEach(n=>n(e))}onExistenceFilterMismatch(e){const n=Symbol(),r=this.Uu;return r.set(n,e),()=>r.delete(n)}}let ou=null;(function(e,n=!0){(function(i){ao=i})(so),Tn(new hn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new me(new Cb(r.getProvider("auth-internal")),new Db(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Yt(nv,"4.7.3",e),Yt(nv,"4.7.3","esm2017")})();const rO=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:ag,AggregateField:to,AggregateQuerySnapshot:BS,Bytes:Gr,CACHE_SIZE_UNLIMITED:jV,CollectionReference:un,DocumentReference:Fe,DocumentSnapshot:Fi,FieldPath:Zr,FieldValue:ei,Firestore:me,FirestoreError:j,GeoPoint:hh,LoadBundleTask:LS,PersistentCacheIndexManager:oA,Query:nt,QueryCompositeFilterConstraint:Wi,QueryConstraint:yo,QueryDocumentSnapshot:ya,QueryEndAtConstraint:yl,QueryFieldFilterConstraint:_o,QueryLimitConstraint:ml,QueryOrderByConstraint:gh,QuerySnapshot:ji,QueryStartAtConstraint:gl,SnapshotMetadata:Sr,Timestamp:ke,Transaction:sA,VectorValue:fl,WriteBatch:iA,_AutoId:hm,_ByteString:Oe,_DatabaseId:Fr,_DocumentKey:q,_EmptyAppCheckTokenProvider:Vb,_EmptyAuthCredentialsProvider:LE,_FieldPath:Se,_TestingHooks:nO,_cast:ne,_debugAssert:xb,_internalAggregationQueryToProtoRunAggregationQueryRequest:tO,_internalQueryToProtoQueryTarget:eO,_isBase64Available:lN,_logWarn:$t,_validateIsNotUsedTogether:DS,addDoc:R2,aggregateFieldEqual:g2,aggregateQuerySnapshotEqual:y2,and:s2,arrayRemove:G2,arrayUnion:q2,average:m2,clearIndexedDbPersistence:$V,collection:MS,collectionGroup:LV,connectFirestoreEmulator:OS,count:ZS,deleteAllPersistentCacheIndexes:Z2,deleteDoc:A2,deleteField:$2,disableNetwork:KV,disablePersistentCacheIndexAutoCreation:X2,doc:Sc,documentId:JV,enableIndexedDbPersistence:BV,enableMultiTabIndexedDbPersistence:zV,enableNetwork:GV,enablePersistentCacheIndexAutoCreation:Y2,endAt:d2,endBefore:h2,ensureFirestoreConfigured:Ce,executeWrite:vo,getAggregateFromServer:nA,getCountFromServer:k2,getDoc:eA,getDocFromCache:w2,getDocFromServer:I2,getDocs:tA,getDocsFromCache:E2,getDocsFromServer:T2,getFirestore:FS,getPersistentCacheIndexManager:J2,increment:K2,initializeFirestore:UV,limit:a2,limitToLast:l2,loadBundle:QV,memoryEagerGarbageCollector:V2,memoryLocalCache:M2,memoryLruGarbageCollector:O2,namedQuery:HV,onSnapshot:P2,onSnapshotsInSync:x2,or:i2,orderBy:o2,persistentLocalCache:L2,persistentMultipleTabManager:U2,persistentSingleTabManager:rA,query:n2,queryEqual:Xm,refEqual:FV,runTransaction:z2,serverTimestamp:us,setDoc:ta,setIndexConfiguration:H2,setLogLevel:Pb,snapshotEqual:v2,startAfter:c2,startAt:u2,sum:p2,terminate:WV,updateDoc:S2,vector:W2,waitForPendingWrites:qV,where:r2,writeBatch:Q2},Symbol.toStringTag,{value:"Module"})),lA="@firebase/installations",cg="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=1e4,cA=`w:${cg}`,hA="FIS_v2",iO="https://firebaseinstallations.googleapis.com/v1",sO=60*60*1e3,oO="installations",aO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ui=new qi(oO,aO,lO);function dA(t){return t instanceof dn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA({projectId:t}){return`${iO}/projects/${t}/installations`}function pA(t){return{token:t.token,requestStatus:2,expiresIn:cO(t.expiresIn),creationTime:Date.now()}}async function mA(t,e){const r=(await e.json()).error;return Ui.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function gA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function uO(t,{refreshToken:e}){const n=gA(t);return n.append("Authorization",hO(e)),n}async function yA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function cO(t){return Number(t.replace("s","000"))}function hO(t){return`${hA} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=fA(t),i=gA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:hA,appId:t.appId,sdkVersion:cA},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await yA(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:pA(c.authToken)}}else throw await mA("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=/^[cdef][\w-]{21}$/,tp="";function mO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=gO(t);return pO.test(n)?n:tp}catch{return tp}}function gO(t){return fO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=new Map;function wA(t,e){const n=_h(t);IA(n,e),yO(n,e)}function IA(t,e){const n=vA.get(t);if(n)for(const r of n)r(e)}function yO(t,e){const n=_O();n&&n.postMessage({key:t,fid:e}),vO()}let vi=null;function _O(){return!vi&&"BroadcastChannel"in self&&(vi=new BroadcastChannel("[Firebase] FID Change"),vi.onmessage=t=>{IA(t.data.key,t.data.fid)}),vi}function vO(){vA.size===0&&vi&&(vi.close(),vi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO="firebase-installations-database",IO=1,Bi="firebase-installations-store";let kd=null;function hg(){return kd||(kd=H0(wO,IO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bi)}}})),kd}async function Rc(t,e){const n=_h(t),i=(await hg()).transaction(Bi,"readwrite"),s=i.objectStore(Bi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&wA(t,e.fid),e}async function EA(t){const e=_h(t),r=(await hg()).transaction(Bi,"readwrite");await r.objectStore(Bi).delete(e),await r.done}async function vh(t,e){const n=_h(t),i=(await hg()).transaction(Bi,"readwrite"),s=i.objectStore(Bi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&wA(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dg(t){let e;const n=await vh(t.appConfig,r=>{const i=EO(r),s=TO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===tp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function EO(t){const e=t||{fid:mO(),registrationStatus:0};return TA(e)}function TO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ui.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=SO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:AO(t)}:{installationEntry:e}}async function SO(t,e){try{const n=await dO(t,e);return Rc(t.appConfig,n)}catch(n){throw dA(n)&&n.customData.serverCode===409?await EA(t.appConfig):await Rc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function AO(t){let e=await pw(t.appConfig);for(;e.registrationStatus===1;)await _A(100),e=await pw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await dg(t);return r||n}return e}function pw(t){return vh(t,e=>{if(!e)throw Ui.create("installation-not-found");return TA(e)})}function TA(t){return RO(t)?{fid:t.fid,registrationStatus:0}:t}function RO(t){return t.registrationStatus===1&&t.registrationTime+uA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO({appConfig:t,heartbeatServiceProvider:e},n){const r=xO(t,n),i=uO(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:cA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await yA(()=>fetch(r,a));if(u.ok){const c=await u.json();return pA(c)}else throw await mA("Generate Auth Token",u)}function xO(t,{fid:e}){return`${fA(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(t,e=!1){let n;const r=await vh(t.appConfig,s=>{if(!SA(s))throw Ui.create("not-registered");const o=s.authToken;if(!e&&bO(o))return s;if(o.requestStatus===1)return n=kO(t,e),s;{if(!navigator.onLine)throw Ui.create("app-offline");const a=DO(s);return n=CO(t,a),a}});return n?await n:r.authToken}async function kO(t,e){let n=await mw(t.appConfig);for(;n.authToken.requestStatus===1;)await _A(100),n=await mw(t.appConfig);const r=n.authToken;return r.requestStatus===0?fg(t,e):r}function mw(t){return vh(t,e=>{if(!SA(e))throw Ui.create("not-registered");const n=e.authToken;return VO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function CO(t,e){try{const n=await PO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Rc(t.appConfig,r),n}catch(n){if(dA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await EA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rc(t.appConfig,r)}throw n}}function SA(t){return t!==void 0&&t.registrationStatus===2}function bO(t){return t.requestStatus===2&&!NO(t)}function NO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+sO}function DO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function VO(t){return t.requestStatus===1&&t.requestTime+uA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t){const e=t,{installationEntry:n,registrationPromise:r}=await dg(e);return r?r.catch(console.error):fg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(t,e=!1){const n=t;return await LO(n),(await fg(n,e)).token}async function LO(t){const{registrationPromise:e}=await dg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){if(!t||!t.options)throw Cd("App Configuration");if(!t.name)throw Cd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Cd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Cd(t){return Ui.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="installations",jO="installations-internal",UO=t=>{const e=t.getProvider("app").getImmediate(),n=FO(e),r=Zn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},BO=t=>{const e=t.getProvider("app").getImmediate(),n=Zn(e,AA).getImmediate();return{getId:()=>OO(n),getToken:i=>MO(n,i)}};function zO(){Tn(new hn(AA,UO,"PUBLIC")),Tn(new hn(jO,BO,"PRIVATE"))}zO();Yt(lA,cg);Yt(lA,cg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="analytics",$O="firebase_id",qO="origin",GO=60*1e3,KO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Kc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Bt=new qi("analytics","Analytics",WO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){if(!t.startsWith(pg)){const e=Bt.create("invalid-gtag-resource",{gtagURL:t});return Mt.warn(e.message),""}return t}function RA(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function HO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function JO(t,e){const n=HO("firebase-js-sdk-policy",{createScriptURL:QO}),r=document.createElement("script"),i=`${pg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function YO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function XO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await RA(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){Mt.error(a)}t("config",i,s)}async function ZO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await RA(n);for(const u of o){const c=a.find(f=>f.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Mt.error(s)}}function eM(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await ZO(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await XO(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Mt.error(a)}}return i}function tM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=eM(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function nM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(pg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM=30,iM=1e3;class sM{constructor(e={},n=iM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const PA=new sM;function oM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function aM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:oM(r)},s=KO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Bt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function lM(t,e=PA,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Bt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Bt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new hM;return setTimeout(async()=>{a.abort()},GO),xA({appId:r,apiKey:i,measurementId:s},o,a,e)}async function xA(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=PA){var s;const{appId:o,measurementId:a}=t;try{await uM(r,e)}catch(u){if(a)return Mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await aM(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!cM(c)){if(i.deleteThrottleMetadata(o),a)return Mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?k_(n,i.intervalMillis,rM):k_(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),Mt.debug(`Calling attemptFetch again in ${d} millis`),xA(t,f,r,i)}}function uM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cM(t){if(!(t instanceof dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class hM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function dM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fM(){if(Jp())try{await K0()}catch(t){return Mt.warn(Bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Mt.warn(Bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pM(t,e,n,r,i,s,o){var a;const u=lM(t);u.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Mt.error(_)),e.push(u);const c=fM().then(_=>{if(_)return r.getId()}),[d,f]=await Promise.all([u,c]);nM(s)||JO(s,d.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[qO]="firebase",p.update=!0,f!=null&&(p[$O]=f),i("config",d.measurementId,p),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e){this.app=e}_delete(){return delete _a[this.app.options.appId],Promise.resolve()}}let _a={},gw=[];const yw={};let bd="dataLayer",gM="gtag",_w,kA,vw=!1;function yM(){const t=[];if(q0()&&t.push("This is a browser extension environment."),ox()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Bt.create("invalid-analytics-context",{errorInfo:e});Mt.warn(n.message)}}function _M(t,e,n){yM();const r=t.options.appId;if(!r)throw Bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Bt.create("no-api-key");if(_a[r]!=null)throw Bt.create("already-exists",{id:r});if(!vw){YO(bd);const{wrappedGtag:s,gtagCore:o}=tM(_a,gw,yw,bd,gM);kA=s,_w=o,vw=!0}return _a[r]=pM(t,gw,yw,e,_w,bd,n),new mM(t)}function vM(t=Xp()){t=pe(t);const e=Zn(t,Pc);return e.isInitialized()?e.getImmediate():wM(t)}function wM(t,e={}){const n=Zn(t,Pc);if(n.isInitialized()){const i=n.getImmediate();if(Wn(e,n.getOptions()))return i;throw Bt.create("already-initialized")}return n.initialize({options:e})}function CA(t,e,n,r){t=pe(t),dM(kA,_a[t.app.options.appId],e,n,r).catch(i=>Mt.error(i))}const ww="@firebase/analytics",Iw="0.10.8";function IM(){Tn(new hn(Pc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return _M(r,i,n)},"PUBLIC")),Tn(new hn("analytics-internal",t,"PRIVATE")),Yt(ww,Iw),Yt(ww,Iw,"esm2017");function t(e){try{const n=e.getProvider(Pc).getImmediate();return{logEvent:(r,i,s)=>CA(n,r,i,s)}}catch(n){throw Bt.create("interop-component-reg-failed",{reason:n})}}}IM();const EM={apiKey:"AIzaSyCmS7gEVkUI8QxMKjphppuxSlWGB-1wv98",authDomain:"dsa-tracker-be594.firebaseapp.com",projectId:"dsa-tracker-be594",storageBucket:"dsa-tracker-be594.firebasestorage.app",messagingSenderId:"1002103577156",appId:"1:1002103577156:web:a3ea3dfb1b112311f57a11",measurementId:"G-QVF05E2M1E"},mg=J0(EM),Du=Tb(mg),xc=FS(mg),bA=vM(mg),NA=new Vn,TM=Object.freeze(Object.defineProperty({__proto__:null,analytics:bA,auth:Du,db:xc,googleProvider:NA},Symbol.toStringTag,{value:"Module"})),Qi=G.createContext(),SM=({children:t})=>{const[e,n]=G.useState(null),[r,i]=G.useState(!0);G.useEffect(()=>{const a=hC(Du,u=>{n(u),i(!1)});return()=>a()},[]);const s=async()=>{try{const a=await NC(Du,NA);if(CA(bA,"sign_up",{method:"google"}),a.user){const{doc:u,getDoc:c,setDoc:d,serverTimestamp:f}=await R_(async()=>{const{doc:k,getDoc:N,setDoc:E,serverTimestamp:w}=await Promise.resolve().then(()=>rO);return{doc:k,getDoc:N,setDoc:E,serverTimestamp:w}},void 0),{db:p}=await R_(async()=>{const{db:k}=await Promise.resolve().then(()=>TM);return{db:k}},void 0),_=u(p,"users",a.user.uid);(await c(_)).exists()||await d(_,{displayName:a.user.displayName||"",email:a.user.email||"",photoURL:a.user.photoURL||"",createdAt:f(),updatedAt:f(),progress:{},totalSolved:0})}}catch(a){console.error("Error signing in with Google",a)}},o=async()=>{try{await dC(Du)}catch(a){console.error("Error signing out",a)}};return v.jsx(Qi.Provider,{value:{user:e,login:s,logout:o,loading:r},children:!r&&t})},Tt=[{id:"a2z_flawless",name:"Striver A2Z",file:"/data/a2z_flawless.json",description:'<a href="https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" target="_blank" rel="noopener noreferrer">A-Z sheet</a> by Striver.'},{id:"SDE",name:"SDE Sheet",file:"/data/SDE.json",description:'<a href="https://takeuforward.org/dsa/strivers-sde-sheet-top-coding-interview-problems" target="_blank" rel="noopener noreferrer">SDE sheet</a> by Striver.'},{id:"blind75",name:"Blind 75",file:"/data/blind75.json",description:'Leetcode - <a href="https://neetcode.io/practice/practice/neetcode150" target="_blank" rel="noopener noreferrer">Blind 75</a>.'},{id:"neetcode150",name:"NeetCode 150",file:"/data/neetcode150.json",description:'<a href="https://neetcode.io/practice/practice/neetcode150" target="_blank" rel="noopener noreferrer">150 hand-picked questions</a> by NeetCode.'},{id:"neetcode250",name:"NeetCode 250",file:"/data/neetcode250.json",description:'<a href="https://neetcode.io/practice/practice/neetcode250" target="_blank" rel="noopener noreferrer">250 hand-picked questions</a> by NeetCode.'}],wh=async t=>{const e=Tt.find(n=>n.id===t);if(!e)return null;try{const r=await(await fetch(e.file)).json();let i=[],s=0;return Array.isArray(r)&&r.length>0&&r[0].step_no?i=r.map(o=>{var u;const a=((u=o.sub_steps)==null?void 0:u.map(c=>{var f;const d=((f=c.topics)==null?void 0:f.map(p=>(s++,{id:p.id,title:p.question_title,url:p.lc_link||p.gfg_link||p.cs_link||p.post_link,links:{blog:p.post_link,yt:p.yt_link,lc:p.lc_link,gfg:p.gfg_link,cn:p.cs_link,tuf:p.plus_link},difficulty:p.difficulty||0})))||[];return{title:`${c.sub_step_no}. ${c.sub_step_title}`,questions:d}}))||[];return{title:`Step ${o.step_no}: ${o.step_title}`,isHeading:!0,subcategories:a,questions:[]}}):Array.isArray(r)&&r.length>0&&(r[0].category||r[0].heading)?i=r.map(o=>{const a=o.category||o.heading,u=o.problems.map(c=>{var f,p;s++;let d=1;return((f=c.difficulty)==null?void 0:f.toLowerCase())==="easy"?d=0:((p=c.difficulty)==null?void 0:p.toLowerCase())==="hard"&&(d=2),{id:c.id,title:c.title,url:c.link||c.leetcode_link,links:{lc:c.link||c.leetcode_link},difficulty:d}});return{title:a,isHeading:!0,questions:u,subcategories:[]}}):!Array.isArray(r)&&typeof r=="object"?i=Object.keys(r).map(o=>{const a=r[o].map(d=>{var f;return s++,{id:d.id,title:d.Question,url:d.Question_link,links:{blog:d.Blog_link||null,yt:d.Solution_link||null,lc:(f=d.Question_link)!=null&&f.includes("leetcode")?d.Question_link:null},difficulty:1}});return{title:o.replace(/\d+\/\d+$/,"").trim().replace(/([a-z])([A-Z])/g,"$1 $2").replace(/-/g," - ").replace(/\b\w/g,d=>d.toUpperCase()).trim(),isHeading:!0,questions:a,subcategories:[]}}):Array.isArray(r)&&(i=[{title:"All Problems",isHeading:!1,questions:r.map(a=>{var c,d,f,p;s++;let u=1;return(c=a.title)!=null&&c.toLowerCase().includes("easy")?u=0:(d=a.title)!=null&&d.toLowerCase().includes("hard")&&(u=2),{id:a.id||((f=a.title)==null?void 0:f.substring(0,20)),title:((p=a.title)==null?void 0:p.split(`
`)[0])||"Unknown Problem",url:a.url||a.link,links:{lc:a.url||a.link},difficulty:u}}),subcategories:[]}]),{info:e,data:i,totalQuestions:s}}catch(n){return console.error("Failed to load sheet data",n),null}},wo=G.createContext(),au=t=>{const e=Object.values(t||{});return e.length===0?!1:typeof e[0]=="boolean"},Ew=async()=>{const t=new Set,e=await wh("a2z_flawless");if(!e)return t;const n=r=>{r.forEach(i=>{(i.questions||[]).forEach(s=>{s.id&&t.add(s.id)}),(i.subcategories||[]).forEach(s=>n([s]))})};return n(e.data),t},AM=(t,e,n)=>{const r={a2z_flawless:{}};return new Set([...Object.keys(t||{}),...Object.keys(e||{})]).forEach(s=>{n.has(s)&&(r.a2z_flawless[s]={status:(t==null?void 0:t[s])===!0,revision:(e==null?void 0:e[s])===!0})}),r},RM=(t,e)=>{for(const[n,r]of Object.entries(t))if(n!=="a2z_flawless"&&!(!r||typeof r!="object")){for(const i of Object.keys(r))if(e.has(i))return!0}return!1},PM=(t,e)=>{const n={};for(const[r,i]of Object.entries(t))if(!(!i||typeof i!="object"))for(const[s,o]of Object.entries(i)){const a=e.has(s)?"a2z_flawless":r;n[a]||(n[a]={});const u=n[a][s];u?n[a][s]={status:u.status||o.status,revision:u.revision||o.revision}:n[a][s]=o}return n},xM=({children:t})=>{const{user:e}=G.useContext(Qi),[n,r]=G.useState({}),[i,s]=G.useState(!1);G.useEffect(()=>{const u=localStorage.getItem("dsaTrackerProgress");if(u)try{const c=JSON.parse(u);if(au(c))return;const d=new Set(Tt.map(_=>_.id));if(Object.keys(c).some(_=>!d.has(_))){console.log("🧹 Clearing corrupted localStorage progress (invalid sheet keys)."),localStorage.removeItem("dsaTrackerProgress");return}r(c)}catch{}},[]),G.useEffect(()=>{(async()=>{if(e){s(!0);try{const c=Sc(xc,"users",e.uid),d=await eA(c);if(d.exists()){const f=d.data(),p=f.progress||{},_=f.revision||{};let S=p,k=!1;if(au(p)||Object.keys(p).length===0&&Object.keys(_).length>0){console.log("⚙️ Old flat format detected, migrating to nested…");const E=await Ew();console.log("📋 A2Z IDs loaded:",E.size),console.log("🔑 Firestore keys (sample):",Object.keys(p).slice(0,5)),S=AM(p,_,E),console.log("📦 Migration result:",Object.entries(S).map(([w,R])=>`${w}: ${Object.keys(R).length}`)),k=!0}else if(Object.keys(p).length>0){const E=await Ew();RM(p,E)&&(console.log("🔧 A2Z questions found in wrong sheet buckets — consolidating…"),S=PM(p,E),console.log("📦 Consolidation result:",Object.entries(S).map(([w,R])=>`${w}: ${Object.keys(R).length}`)),k=!0)}if(Object.values(S).reduce((E,w)=>E+Object.keys(w||{}).length,0)>0){if(r(S),localStorage.setItem("dsaTrackerProgress",JSON.stringify(S)),k){let E=0;Object.values(S).forEach(w=>{Object.values(w).forEach(R=>{R.status&&E++})}),await ta(c,{progress:S,totalSolved:E,displayName:e.displayName||"",email:e.email||"",photoURL:e.photoURL||"",updatedAt:us()},{merge:!0}),console.log("✅ Fixed progress saved to Firestore.")}}else{console.log("Cloud empty, syncing local progress to cloud.");const E=localStorage.getItem("dsaTrackerProgress");if(E){const w=JSON.parse(E);au(w)||await ta(c,{progress:w},{merge:!0})}}}else{console.log("No cloud doc. Creating one and syncing local data...");const f=localStorage.getItem("dsaTrackerProgress");let p={};if(f){const S=JSON.parse(f);au(S)||(p=S)}let _=0;Object.values(p).forEach(S=>{Object.values(S).forEach(k=>{k.status&&_++})}),await ta(c,{progress:p,totalSolved:_,displayName:e.displayName||"",email:e.email||"",photoURL:e.photoURL||"",createdAt:us(),updatedAt:us()},{merge:!0})}}catch(c){console.error("Error fetching cloud progress:",c)}finally{s(!1)}}})()},[e]);const o=async(u,c,d,f=!1)=>{const p={...n};if(p[u]||(p[u]={}),p[u][c]||(p[u][c]={status:!1,revision:!1}),f?p[u][c].revision=d:p[u][c].status=d,r(p),localStorage.setItem("dsaTrackerProgress",JSON.stringify(p)),e)try{const _=Sc(xc,"users",e.uid);let S=0;Object.values(p).forEach(k=>{Object.values(k).forEach(N=>{N.status&&S++})}),await ta(_,{progress:p,totalSolved:S,displayName:e.displayName||"",email:e.email||"",photoURL:e.photoURL||"",...!f&&d?{lastSolvedAt:us()}:{},updatedAt:us()},{merge:!0})}catch(_){console.error("Error syncing to Firestore:",_)}},a=(u,c)=>{const d=n[u]||{};let f=0,p=0;return Object.values(d).forEach(_=>{_.status&&f++,_.revision&&p++}),{completed:f,revision:p,total:c,percentage:c===0?0:Math.round(f/c*100)}};return v.jsx(wo.Provider,{value:{progress:n,updateQuestionStatus:o,getSheetStats:a,loadingCloud:i},children:t})};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),DA=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=G.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},u)=>G.createElement("svg",{ref:u,...CM,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:DA("lucide",i),...a},[...o.map(([c,d])=>G.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(t,e)=>{const n=G.forwardRef(({className:r,...i},s)=>G.createElement(bM,{ref:s,iconNode:e,className:DA(`lucide-${kM(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=Ge("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=Ge("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=Ge("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=Ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=Ge("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=Ge("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=Ge("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=Ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=Ge("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=Ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=Ge("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=Ge("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=Ge("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=Ge("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=Ge("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=Ge("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=Ge("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=Ge("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=Ge("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=Ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),YM="JROhXIAevXfsMos9qTTXcpf92vD2",XM=({onClose:t})=>{const e=n=>{window.open(n,"_blank","noreferrer"),t()};return v.jsxs("div",{onClick:t,style:{position:"fixed",inset:0,zIndex:3e3,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.6)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",animation:"modal-fade-in 0.2s ease"},children:[v.jsxs("div",{onClick:n=>n.stopPropagation(),style:{background:"var(--surface-color)",border:"1px solid var(--border-color)",borderRadius:"1.25rem",padding:"2rem 2.25rem",maxWidth:"380px",width:"90%",boxShadow:"0 24px 60px rgba(0,0,0,0.5)",animation:"modal-pop 0.3s cubic-bezier(0.34,1.56,0.64,1)",position:"relative",textAlign:"center"},children:[v.jsx("button",{onClick:t,style:{position:"absolute",top:"1rem",right:"1rem",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",display:"flex",padding:"0.25rem",borderRadius:"50%"},children:v.jsx(JM,{size:18})}),v.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"0.75rem"},children:"❤️"}),v.jsx("h2",{style:{fontSize:"1.2rem",fontWeight:800,marginBottom:"0.4rem",color:"var(--text-primary)"},children:"Support the Developer"}),v.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.875rem",lineHeight:1.6,marginBottom:"1.5rem"},children:"This tracker is free forever. If it helped you prep, consider supporting! First — where are you from?"}),v.jsxs("div",{style:{display:"flex",gap:"0.75rem",marginBottom:"0.75rem"},children:[v.jsxs("button",{onClick:()=>e("https://www.chai4.me/kamalsharma"),style:{flex:1,padding:"0.85rem 0.5rem",borderRadius:"0.75rem",border:"2px solid var(--border-color)",background:"var(--surface-hover)",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.35rem",transition:"all 0.2s",color:"var(--text-primary)",fontWeight:700,fontSize:"0.9rem"},onMouseEnter:n=>{n.currentTarget.style.borderColor="#f97316",n.currentTarget.style.background="rgba(249,115,22,0.08)"},onMouseLeave:n=>{n.currentTarget.style.borderColor="var(--border-color)",n.currentTarget.style.background="var(--surface-hover)"},children:[v.jsx("span",{style:{fontSize:"1.75rem"},children:"🇮🇳"}),v.jsx("span",{children:"India"}),v.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-secondary)",fontWeight:500},children:"via chai4.me"})]}),v.jsxs("button",{onClick:()=>e("https://www.paypal.me/kamalsharma05"),style:{flex:1,padding:"0.85rem 0.5rem",borderRadius:"0.75rem",border:"2px solid var(--border-color)",background:"var(--surface-hover)",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.35rem",transition:"all 0.2s",color:"var(--text-primary)",fontWeight:700,fontSize:"0.9rem"},onMouseEnter:n=>{n.currentTarget.style.borderColor="#0070ba",n.currentTarget.style.background="rgba(0,112,186,0.08)"},onMouseLeave:n=>{n.currentTarget.style.borderColor="var(--border-color)",n.currentTarget.style.background="var(--surface-hover)"},children:[v.jsx("span",{style:{fontSize:"1.75rem"},children:"🌍"}),v.jsx("span",{children:"Other Countries"}),v.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-secondary)",fontWeight:500},children:"via PayPal"})]})]}),v.jsx("button",{onClick:t,style:{width:"100%",padding:"0.6rem",background:"transparent",border:"1px solid var(--border-color)",borderRadius:"0.6rem",color:"var(--text-secondary)",cursor:"pointer",fontSize:"0.85rem",transition:"all 0.2s"},children:"Maybe later"})]}),v.jsx("style",{children:`
        @keyframes modal-fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modal-pop {
          from { transform: scale(0.88); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
      `})]})},ZM=({setShowDashboard:t,setShowAdmin:e})=>{const{theme:n,toggleTheme:r}=G.useContext(L0),{user:i,login:s,logout:o}=G.useContext(Qi),a=i&&i.uid===YM,[u,c]=G.useState(!1);return v.jsxs(v.Fragment,{children:[v.jsxs("header",{className:"header",children:[v.jsx("div",{className:"header-left",children:v.jsx("div",{className:"logo",onClick:()=>t(!1),children:"Master DSA"})}),v.jsxs("div",{className:"header-right",children:[v.jsx("button",{className:"btn-secondary",onClick:()=>c(!0),children:"Support Developer"}),v.jsx("button",{className:"icon-btn",onClick:r,children:n==="dark"?v.jsx(QM,{size:20}):v.jsx(BM,{size:20})}),i?v.jsxs(v.Fragment,{children:[v.jsxs("button",{className:"btn-secondary",onClick:()=>t(!0),children:[v.jsx(LM,{size:18,style:{marginRight:"8px",verticalAlign:"middle"}}),"Dashboard"]}),a&&v.jsx("button",{className:"icon-btn",onClick:()=>e(!0),title:"Admin Dashboard",id:"header-admin-btn",children:v.jsx(KM,{size:20})}),v.jsxs("button",{className:"btn-primary",onClick:o,style:{display:"flex",alignItems:"center",gap:"8px"},children:[v.jsx(UM,{size:16})," Logout"]})]}):v.jsxs("button",{className:"btn-primary",onClick:s,style:{display:"flex",alignItems:"center",gap:"8px"},children:[v.jsx(jM,{size:16})," Sign In"]})]})]}),u&&v.jsx(XM,{onClose:()=>c(!1)})]})},OA="dsa_sheet_order",eL=()=>{try{const t=localStorage.getItem(OA);if(t){const e=JSON.parse(t),n=e.map(i=>Tt.find(s=>s.id===i)).filter(Boolean),r=Tt.filter(i=>!e.includes(i.id));return[...n,...r]}}catch{}return Tt},tL=({activeSheet:t,setActiveSheet:e,showDashboard:n,setShowDashboard:r,sidebarOpen:i,setSidebarOpen:s})=>{const[o,a]=G.useState(eL),[u,c]=G.useState(!0),d=G.useRef(null),[f,p]=G.useState(null),_=E=>{d.current=E},S=(E,w)=>{E.preventDefault(),p(w)},k=()=>{d.current=null,p(null)},N=(E,w)=>{E.preventDefault();const R=d.current;if(R===null||R===w){p(null);return}const V=[...o],[F]=V.splice(R,1);V.splice(w,0,F),a(V),localStorage.setItem(OA,JSON.stringify(V.map(L=>L.id))),d.current=null,p(null)};return v.jsxs("aside",{className:`sidebar ${i?"":"collapsed"}`,children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:i?"space-between":"center",padding:"0 1rem 1rem",borderBottom:i?"1px solid var(--border-color)":"none",marginBottom:"1rem"},children:[i&&v.jsx("div",{className:"sidebar-title",style:{padding:0,margin:0},children:"Menu"}),v.jsx("button",{className:"sidebar-toggle-btn",onClick:()=>s(!i),style:{position:"static",transform:"none"},title:i?"Collapse Sidebar":"Expand Sidebar",children:i?v.jsx(zM,{size:20}):v.jsx($M,{size:20})})]}),v.jsx("div",{className:"sidebar-title",children:"Progress Overview"}),v.jsx("ul",{className:"sheet-list",style:{marginBottom:"2rem"},children:v.jsxs("li",{className:`sheet-item ${n?"active":""}`,onClick:()=>r(!0),children:[v.jsx(qM,{size:18})," Combined"]})}),v.jsxs("div",{className:"sidebar-title",onClick:()=>c(E=>!E),style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",userSelect:"none",paddingRight:"1.5rem"},children:[v.jsx("span",{children:"DSA Sheets"}),v.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"20px",height:"20px",borderRadius:"4px",background:"var(--surface-hover)",transition:"transform 0.25s ease",transform:u?"rotate(0deg)":"rotate(-90deg)"},children:v.jsx(VA,{size:14})})]}),v.jsx("ul",{className:"sheet-list",style:{maxHeight:u?`${o.length*60}px`:"0px",overflow:"hidden",transition:"max-height 0.3s ease"},children:o.map((E,w)=>v.jsxs("li",{draggable:!0,onDragStart:()=>_(w),onDragOver:R=>S(R,w),onDrop:R=>N(R,w),onDragEnd:k,className:`sheet-item ${!n&&t===E.id?"active":""}`,onClick:()=>{e(E.id),r(!1)},style:{opacity:d.current===w?.4:1,borderTop:f===w&&d.current!==w?"2px solid var(--primary-color)":"2px solid transparent",transition:"border-color 0.15s, opacity 0.15s",cursor:"grab"},children:[v.jsx(MM,{size:16,style:{opacity:.35,flexShrink:0,cursor:"grab"}}),v.jsx(DM,{size:18,style:{flexShrink:0}}),v.jsx("span",{children:E.name})]},E.id))})]})},nL=({stats:t})=>v.jsxs("div",{className:"stats-grid",children:[v.jsxs("div",{className:"stat-card",children:[v.jsx(NM,{className:"stat-icon",style:{color:"#3b82f6"}}),v.jsx("div",{className:"stat-value",children:t.total}),v.jsx("div",{className:"stat-label",children:"Total Problems"})]}),v.jsxs("div",{className:"stat-card",children:[v.jsx(OM,{className:"stat-icon",style:{color:"var(--primary-color)"}}),v.jsx("div",{className:"stat-value",children:t.completed}),v.jsx("div",{className:"stat-label",children:"Completed"})]}),v.jsxs("div",{className:"stat-card",children:[v.jsx(HM,{className:"stat-icon",style:{color:"#a855f7"}}),v.jsxs("div",{className:"stat-value",children:[t.percentage,"%"]}),v.jsx("div",{className:"stat-label",children:"Progress"})]})]}),rL=({filter:t,setFilter:e,searchQuery:n,setSearchQuery:r})=>v.jsxs("div",{className:"filter-search-container",children:[v.jsxs("div",{className:"search-bar",children:[v.jsx(GM,{size:20,color:"var(--text-secondary)"}),v.jsx("input",{type:"text",placeholder:"Search topics or problems...",value:n,onChange:i=>r(i.target.value)})]}),v.jsxs("div",{className:"filter-tabs",children:[v.jsx("button",{className:`filter-tab ${t==="all"?"active":""}`,onClick:()=>e("all"),children:"All"}),v.jsx("button",{className:`filter-tab ${t==="done"?"active":""}`,onClick:()=>e("done"),children:"✅ Done"}),v.jsx("button",{className:`filter-tab ${t==="revision"?"active":""}`,onClick:()=>e("revision"),children:"⭐ Revision"}),v.jsx("button",{className:`filter-tab ${t==="not_done"?"active":""}`,onClick:()=>e("not_done"),children:"⬜ Not Done"})]})]}),iL=["🔥 Keep going!","💪 Crushed it!","⚡ One more down!","🎯 Nailed it!","🚀 On fire!","✨ Nice work!","🧠 Big brain move!"],sL=["🎉 Sub-topic cleared!","🏅 Section smashed!","💥 You're on a roll!","⚡ Lightning fast!","🦾 Unstoppable!","🌊 Riding the wave!","🎖️ Badge earned!"],oL=["🏆 LEGENDARY!","👑 Absolute king!","🔱 Master of this topic!","🌟 Hall of fame!","🎊 GOAT behaviour!","💎 Diamond grind!","🚀 To the moon!"];function aL(t,e=60,n="normal"){const r=t.getContext("2d"),i=t.width=t.offsetWidth,s=t.height=t.offsetHeight,o=["#8ab4f8","#3ddc84","#fdd663","#f28b82","#c58af9","#ff9800"],a=Array.from({length:e},()=>({x:n==="center"?i/2:Math.random()*i,y:n==="center"?s*.35:-10,r:Math.random()*8+4,d:Math.random()*e,color:o[Math.floor(Math.random()*o.length)],tilt:Math.random()*10-10,tiltAngle:0,tiltAngleInc:Math.random()*.07+.05,speedY:Math.random()*4+2,speedX:(Math.random()-.5)*(n==="center"?8:3),opacity:1,shape:Math.random()>.5?"rect":"circle"}));let u,c=0;const d=n==="center"?150:90,f=()=>{r.clearRect(0,0,i,s),a.forEach(p=>{p.tiltAngle+=p.tiltAngleInc,p.y+=p.speedY,p.x+=p.speedX,p.tilt=Math.sin(p.tiltAngle)*15,c>d*.55&&(p.opacity=Math.max(0,p.opacity-.03)),r.globalAlpha=p.opacity,r.fillStyle=p.color,p.shape==="circle"?(r.beginPath(),r.arc(p.x,p.y,p.r/2,0,Math.PI*2),r.fill()):r.fillRect(p.x+p.tilt,p.y,p.r,p.r/2)}),r.globalAlpha=1,c++,c<d?u=requestAnimationFrame(f):r.clearRect(0,0,i,s)};cancelAnimationFrame(u),f()}function lL(t,e){const n=document.createElement("canvas");n.style.cssText="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999",document.body.appendChild(n);const r=n.getContext("2d");n.width=window.innerWidth,n.height=window.innerHeight;const i=["#3ddc84","#8ab4f8","#fdd663","#f28b82","#c58af9"],s=Array.from({length:14},(u,c)=>{const d=c/14*Math.PI*2,f=Math.random()*3+2;return{x:t,y:e,vx:Math.cos(d)*f,vy:Math.sin(d)*f,r:Math.random()*4+2,color:i[c%i.length],life:1}});let o;const a=()=>{r.clearRect(0,0,n.width,n.height);let u=!1;s.forEach(c=>{c.x+=c.vx,c.y+=c.vy,c.vy+=.15,c.life-=.035,!(c.life<=0)&&(u=!0,r.globalAlpha=c.life,r.fillStyle=c.color,r.beginPath(),r.arc(c.x,c.y,c.r,0,Math.PI*2),r.fill())}),r.globalAlpha=1,u?o=requestAnimationFrame(a):(cancelAnimationFrame(o),n.remove())};a()}const Nd=t=>t[Math.floor(Math.random()*t.length)],uL=({type:t,title:e,tagline:n,onClose:r})=>{const i=G.useRef(null),s=t==="heading";return G.useEffect(()=>{i.current&&aL(i.current,s?200:100,"center");const o=setTimeout(r,s?4e3:3e3);return()=>clearTimeout(o)},[]),v.jsxs("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:2e3,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.72)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",cursor:"pointer"},children:[v.jsx("canvas",{ref:i,style:{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:2001}}),v.jsxs("div",{style:{position:"relative",zIndex:2002,textAlign:"center",padding:"0 2rem"},children:[v.jsx("div",{style:{fontSize:s?"clamp(2rem, 6vw, 3.5rem)":"clamp(1.6rem, 5vw, 2.6rem)",fontWeight:900,letterSpacing:"-0.02em",lineHeight:1.1,background:s?"linear-gradient(90deg, #3ddc84 0%, #8ab4f8 50%, #c58af9 100%)":"linear-gradient(90deg, #3ddc84 0%, #8ab4f8 100%)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent",animation:"cin-slide-up 0.5s cubic-bezier(0.22,1,0.36,1) both",marginBottom:"0.75rem",textShadow:"none",filter:"drop-shadow(0 0 32px rgba(61,220,132,0.35))"},children:s?"🏆 STEP CONQUERED! 🏆":"🎉 SUBTOPIC CLEARED! 🎉"}),v.jsxs("div",{style:{color:"rgba(255,255,255,0.85)",fontSize:s?"1.1rem":"0.95rem",fontWeight:600,animation:"cin-slide-up 0.5s 0.1s cubic-bezier(0.22,1,0.36,1) both",marginBottom:"0.5rem"},children:['"',e,'"']}),v.jsx("div",{style:{color:s?"#3ddc84":"#8ab4f8",fontSize:s?"1rem":"0.9rem",fontWeight:700,animation:"cin-slide-up 0.5s 0.2s cubic-bezier(0.22,1,0.36,1) both",marginBottom:"2rem"},children:n})]}),v.jsx("style",{children:`
        @keyframes cin-slide-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})},cL=({message:t,visible:e})=>v.jsxs("div",{style:{position:"fixed",bottom:"2rem",right:"2rem",transform:`translateY(${e?"0":"20px"}) scale(${e?1:.92})`,opacity:e?1:0,transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",background:"rgba(32,33,36,0.88)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(61,220,132,0.45)",color:"#3ddc84",borderRadius:"0.9rem",padding:"0.75rem 1.25rem",fontWeight:800,fontSize:"0.95rem",boxShadow:"0 0 20px rgba(61,220,132,0.2), 0 8px 32px rgba(0,0,0,0.4)",zIndex:1500,pointerEvents:"none",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"0.5rem"},children:[v.jsx("span",{style:{fontSize:"1.1rem"},children:"✅"}),t]}),hL=({message:t,onLogin:e,visible:n})=>v.jsxs("div",{style:{position:"fixed",bottom:"2rem",left:"50%",transform:`translateX(-50%) translateY(${n?"0":"80px"})`,opacity:n?1:0,transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",background:"var(--surface-color)",border:"1px solid var(--border-color)",borderRadius:"0.75rem",padding:"0.9rem 1.5rem",display:"flex",alignItems:"center",gap:"1rem",boxShadow:"0 10px 30px rgba(0,0,0,0.4)",zIndex:1e3,pointerEvents:n?"all":"none",minWidth:"300px"},children:[v.jsx(FM,{size:18,color:"var(--revision-color)"}),v.jsx("span",{style:{flex:1,color:"var(--text-primary)",fontSize:"0.9rem"},children:t}),v.jsx("button",{onClick:e,style:{background:"var(--primary-color)",color:"#fff",border:"none",borderRadius:"0.5rem",padding:"0.4rem 0.9rem",fontWeight:700,cursor:"pointer",fontSize:"0.85rem",whiteSpace:"nowrap"},children:"Sign In"})]}),is=({url:t,type:e})=>{if(!t)return v.jsx("span",{style:{opacity:.2},children:"-"});const r={blog:"/logo/post.svg",yt:"/logo/yt.svg",lc:"/logo/lc.svg",gfg:"/logo/gfg.svg",cn:"/logo/cn.svg",tuf:"/logo/tuf.svg"}[e]||"";return v.jsx("a",{href:t,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"transform 0.2s"},className:"hover-scale",children:r?v.jsx("img",{src:r,alt:e,style:{width:"20px",height:"20px",objectFit:"contain"}}):v.jsx("span",{children:"🔗"})})},gg=(t,e)=>{var i,s,o;let n=((i=t.questions)==null?void 0:i.length)||0,r=((s=t.questions)==null?void 0:s.filter(a=>{var u;return(u=e[a.id])==null?void 0:u.status}).length)||0;return(o=t.subcategories)==null||o.forEach(a=>{const u=gg(a,e);n+=u.total,r+=u.completed}),{total:n,completed:r}},Tw=({questions:t,sheetId:e,onAuthRequired:n,onQuestionToggle:r})=>{const{progress:i,updateQuestionStatus:s}=G.useContext(wo),{user:o}=G.useContext(Qi),a=e==="a2z_flawless"||e==="SDE",u=e==="a2z_flawless"||e==="SDE",c=e==="a2z_flawless",d=e==="a2z_flawless",f=e==="a2z_flawless";return v.jsx("div",{style:{overflowX:"auto"},children:v.jsxs("table",{className:"questions-table",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{style:{width:"40%"},children:"Topic"}),a&&v.jsx("th",{style:{textAlign:"center"},children:"Blog"}),u&&v.jsx("th",{style:{textAlign:"center"},children:"YT"}),v.jsx("th",{style:{textAlign:"center"},children:"LC"}),c&&v.jsx("th",{style:{textAlign:"center"},children:"GFG"}),d&&v.jsx("th",{style:{textAlign:"center"},children:"CN"}),f&&v.jsx("th",{style:{textAlign:"center"},children:"TUF"}),v.jsx("th",{style:{textAlign:"center"},children:"Done"}),v.jsx("th",{style:{textAlign:"center"},children:"Rev"})]})}),v.jsx("tbody",{children:t.map(p=>{var k,N,E,w,R,V,F;const _=((k=i[e])==null?void 0:k[p.id])||{status:!1,revision:!1},S=_.status;return v.jsxs("tr",{className:S?"q-row-done":"",children:[v.jsx("td",{style:{position:"relative"},children:v.jsxs("div",{className:"question-title-cell",children:[v.jsx("span",{style:{width:"3px",height:"100%",position:"absolute",left:0,top:0,borderRadius:"0 2px 2px 0",backgroundColor:S?"#3ddc84":"transparent",boxShadow:S?"0 0 8px rgba(61,220,132,0.6)":"none",transition:"all 0.4s ease"}}),v.jsx("a",{href:p.url,target:"_blank",rel:"noreferrer",className:"question-link",style:{textDecoration:S?"line-through":"none",opacity:S?.55:1,transition:"all 0.3s ease"},children:p.title})]})}),a&&v.jsx("td",{style:{textAlign:"center"},children:v.jsx(is,{url:(N=p.links)==null?void 0:N.blog,type:"blog"})}),u&&v.jsx("td",{style:{textAlign:"center"},children:v.jsx(is,{url:(E=p.links)==null?void 0:E.yt,type:"yt"})}),v.jsx("td",{style:{textAlign:"center"},children:v.jsx(is,{url:(w=p.links)==null?void 0:w.lc,type:"lc"})}),c&&v.jsx("td",{style:{textAlign:"center"},children:v.jsx(is,{url:(R=p.links)==null?void 0:R.gfg,type:"gfg"})}),d&&v.jsx("td",{style:{textAlign:"center"},children:v.jsx(is,{url:(V=p.links)==null?void 0:V.cn,type:"cn"})}),f&&v.jsx("td",{style:{textAlign:"center"},children:v.jsx(is,{url:(F=p.links)==null?void 0:F.tuf,type:"tuf"})}),v.jsx("td",{style:{textAlign:"center"},children:v.jsx("button",{className:`custom-checkbox ${S?"checked":""} ${o?"":"disabled"}`,onClick:L=>{if(!o){n();return}const T=!S;if(s(e,p.id,T,!1),T){const g=L.currentTarget.getBoundingClientRect();lL(g.left+g.width/2,g.top+g.height/2),r(e,p.id)}},title:S?"Mark as undone":"Mark as done",children:v.jsx("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:S&&v.jsx("polyline",{points:"2,8 6,12 14,4"})})})}),v.jsx("td",{style:{textAlign:"center"},children:v.jsx(WM,{size:20,fill:_.revision?"currentColor":"none",className:`action-icon ${_.revision?"active":""}`,style:{cursor:o?"pointer":"not-allowed",opacity:o?1:.5},onClick:()=>{if(!o){n();return}s(e,p.id,!_.revision,!0)}})})]},p.id)})})]})})},MA=({group:t,sheetId:e,defaultOpen:n=!1,isSub:r=!1,onAuthRequired:i,onQuestionToggle:s,onCelebrate:o})=>{var L,T;const{progress:a}=G.useContext(wo),[u,c]=G.useState(n),d=G.useRef(null);if(G.useEffect(()=>{n&&c(!0)},[n]),!t)return null;if(t.isHeading===!1)return v.jsx(Tw,{questions:t.questions,sheetId:e,onAuthRequired:i,onQuestionToggle:s});const f=((L=t.questions)==null?void 0:L.length)>0,p=((T=t.subcategories)==null?void 0:T.length)>0;if(!f&&!p)return null;const _=a[e]||{},S=t.originalProg||gg(t,_),k=S.total>0&&S.completed===S.total;G.useEffect(()=>{if(S.total!==0){if(d.current===null){d.current=S.completed;return}d.current<S.total&&S.completed===S.total&&o(r?"sub":"heading",t.title),d.current=S.completed}},[S.completed,S.total]);const N=S.total===0?0:Math.round(S.completed/S.total*100),E=r?"linear-gradient(90deg, rgba(61,220,132,0.22) 0%, rgba(61,220,132,0.08) 100%)":"linear-gradient(90deg, rgba(61,220,132,0.18) 0%, rgba(61,220,132,0.05) 100%)",w=r?"rgba(16,185,129,0.15)":"rgba(59,130,246,0.12)",R=r?"var(--bg-color)":"var(--surface-color)",V=k?E:N>0?`linear-gradient(to right, ${w} ${N}%, ${R} ${N}%)`:R,F=k?r?"1px solid rgba(61,220,132,0.3)":"1px solid rgba(61,220,132,0.45)":void 0;return v.jsxs("div",{className:`accordion-group ${r?"sub-group":"main-group"} ${k?"group-complete":""}`,style:{border:r?"none":F,borderRadius:r?"0":void 0,boxShadow:k&&!r?"0 0 0 1px rgba(61,220,132,0.15)":void 0,transition:"box-shadow 0.4s ease, border-color 0.4s ease"},children:[v.jsxs("div",{className:`accordion-header ${r?"sub-header":"main-header"}`,onClick:()=>c(!u),style:{background:V,transition:"background 0.5s ease",borderBottom:u&&f?"1px solid var(--border-color)":"none",color:k?"#3ddc84":r?"var(--text-secondary)":"var(--primary-color)",fontSize:r?"1rem":"1.15rem"},children:[v.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[k&&v.jsx("span",{style:{fontSize:"0.9em",filter:"drop-shadow(0 0 4px #3ddc84)"},children:"✅"}),t.title]}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[v.jsxs("span",{style:{fontSize:"0.85rem",fontWeight:700,opacity:.9,color:k?"#3ddc84":"inherit"},children:[S.completed,"/",S.total]}),u?v.jsx(VA,{size:20}):v.jsx(VM,{size:20})]})]}),u&&v.jsxs("div",{className:"accordion-body",children:[p&&v.jsx("div",{className:"subcategories-container",children:t.subcategories.map((g,A)=>v.jsx(MA,{group:g,sheetId:e,defaultOpen:n,isSub:!0,onAuthRequired:i,onQuestionToggle:s,onCelebrate:o},A))}),f&&v.jsx(Tw,{questions:t.questions,sheetId:e,onAuthRequired:i,onQuestionToggle:s})]})]})},dL=({data:t,sheetId:e,filter:n,searchQuery:r})=>{const{progress:i}=G.useContext(wo),{login:s}=G.useContext(Qi),o=i[e]||{},[a,u]=G.useState(!1),c=G.useRef(null),[d,f]=G.useState(""),[p,_]=G.useState(!1),S=G.useRef(null),[k,N]=G.useState(null),E=G.useCallback(()=>{u(!0),clearTimeout(c.current),c.current=setTimeout(()=>u(!1),3500)},[]),w=G.useCallback(()=>{f(Nd(iL)),_(!0),clearTimeout(S.current),S.current=setTimeout(()=>_(!1),2e3)},[]),R=G.useCallback((g,A)=>{const I=Nd(g==="heading"?oL:sL);setTimeout(()=>N({type:g,title:A,tagline:I}),300)},[]),V=g=>{if(r&&!g.title.toLowerCase().includes(r.toLowerCase()))return!1;const A=o[g.id]||{status:!1,revision:!1};return!(n==="done"&&!A.status||n==="not_done"&&A.status||n==="revision"&&!A.revision)},F=g=>{const A=gg(g,o),I=g.questions?g.questions.filter(V):[],x=g.subcategories?g.subcategories.map(F).filter(C=>C.questions.length>0||C.subcategories.length>0):[];return{...g,originalProg:A,questions:I,subcategories:x}},L=r.length>0||n!=="all",T=t.map(F).filter(g=>g.questions.length>0||g.subcategories.length>0);return T.length===0?v.jsx("div",{style:{padding:"2rem",textAlign:"center",color:"var(--text-secondary)"},children:"No problems match your filters."}):v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"question-list-container",children:T.map((g,A)=>v.jsx(MA,{group:g,sheetId:e,defaultOpen:L,onAuthRequired:E,onQuestionToggle:w,onCelebrate:R},A))}),v.jsx(cL,{message:d,visible:p}),v.jsx(hL,{visible:a,message:"Sign in to track your progress!",onLogin:()=>{u(!1),s()}}),k&&v.jsx(uL,{type:k.type,title:k.title,tagline:k.tagline,onClose:()=>N(null)})]})},fL=({activeSheet:t})=>{const[e,n]=G.useState(null),[r,i]=G.useState(!0),[s,o]=G.useState("all"),[a,u]=G.useState(""),{getSheetStats:c}=G.useContext(wo);if(G.useEffect(()=>{(async()=>{i(!0);const p=await wh(t);n(p),o("all"),u(""),i(!1)})()},[t]),r||!e)return v.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:"Loading sheet data..."});const d=c(t,e.totalQuestions);return v.jsxs("div",{className:"sheet-view",children:[v.jsxs("div",{className:"sheet-header",children:[v.jsx("h1",{children:e.info.name}),v.jsx("p",{dangerouslySetInnerHTML:{__html:e.info.description}})]}),v.jsx(nL,{stats:d}),v.jsx(rL,{filter:s,setFilter:o,searchQuery:a,setSearchQuery:u}),v.jsx(dL,{data:e.data,sheetId:t,filter:s,searchQuery:a})]})},pL=({setActiveSheet:t,setShowDashboard:e})=>{const{user:n}=G.useContext(Qi),{progress:r}=G.useContext(wo),[i,s]=G.useState(()=>Tt.map(_=>_.id)),[o,a]=G.useState({});G.useEffect(()=>{(async()=>{const S={};for(const k of Tt){const N=await wh(k.id);S[k.id]=N?N.totalQuestions:0}a(S)})()},[]);const u=_=>{s(S=>S.includes(_)?S.filter(k=>k!==_):[...S,_])};if(!n)return v.jsxs("div",{className:"dashboard-empty",children:[v.jsx("h1",{style:{fontSize:"2rem",marginBottom:"1rem"},children:"Combined Progress"}),v.jsx("p",{children:"Please sign in to view your combined progress and dashboard."})]});let c=0,d=0,f=0;i.forEach(_=>{const S=r[_]||{};Object.values(S).forEach(k=>{k.status&&c++,k.revision&&d++}),f+=o[_]||0});const p=f===0?0:Math.round(c/f*100);return v.jsxs("div",{children:[v.jsx("h1",{style:{fontSize:"2rem",fontWeight:800,marginBottom:"2rem"},children:"Combined Progress"}),v.jsxs("div",{className:"dashboard-profile",style:{flexWrap:"wrap",alignItems:"center"},children:[v.jsx("img",{src:n.photoURL,alt:"Profile",className:"profile-img"}),v.jsxs("div",{className:"profile-info",children:[v.jsx("h2",{children:n.displayName}),v.jsx("p",{children:n.email})]}),v.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:"3rem",flexWrap:"wrap"},children:[v.jsxs("div",{style:{textAlign:"center"},children:[v.jsxs("div",{style:{fontSize:"2.5rem",fontWeight:800,color:"var(--primary-color)"},children:[c," ",v.jsxs("span",{style:{fontSize:"1rem",color:"var(--text-secondary)"},children:["/ ",f]})]}),v.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Total Solved"})]}),v.jsxs("div",{style:{textAlign:"center"},children:[v.jsx("div",{style:{fontSize:"2.5rem",fontWeight:800,color:"var(--revision-color)"},children:d}),v.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"To Revise"})]}),v.jsxs("div",{style:{textAlign:"center"},children:[v.jsxs("div",{style:{fontSize:"2.5rem",fontWeight:800,color:"#3b82f6"},children:[p,"%"]}),v.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Progress"})]})]})]}),v.jsxs("div",{style:{marginBottom:"2rem"},children:[v.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,marginBottom:"1rem"},children:"Select Sheets to Combine Progress"}),v.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem"},children:Tt.map(_=>v.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1rem",background:"var(--surface-color)",borderRadius:"0.5rem",border:"1px solid var(--border-color)",cursor:"pointer",transition:"background-color 0.2s"},className:"filter-tab",children:[v.jsx("input",{type:"checkbox",checked:i.includes(_.id),onChange:()=>u(_.id),style:{accentColor:"var(--primary-color)",width:"1.2rem",height:"1.2rem"}}),v.jsx("span",{style:{fontWeight:600},children:_.name})]},_.id))})]}),v.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1.5rem"},children:"Individual Sheet Reports"}),v.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.5rem"},children:Tt.map(_=>{const S=r[_.id]||{};let k=0,N=0;Object.values(S).forEach(w=>{w.status&&k++,w.revision&&N++});const E=o[_.id]||0;return v.jsxs("div",{className:"sheet-report-card",style:{cursor:"pointer",opacity:i.includes(_.id)?1:.5},onClick:()=>{t(_.id),e(!1)},children:[v.jsxs("div",{className:"sheet-report-header",children:[v.jsx("h3",{children:_.name}),v.jsxs("span",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:[k," / ",E," Solved"]})]}),v.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1rem"},children:[v.jsxs("div",{style:{flex:1},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"0.25rem"},children:[v.jsx("span",{children:"Done"}),v.jsx("span",{style:{color:"var(--primary-color)"},children:k})]}),v.jsx("div",{className:"progress-bar-container",children:v.jsx("div",{className:"progress-bar-fill",style:{width:E?`${Math.min(100,k/E*100)}%`:"0%",backgroundColor:"var(--primary-color)"}})})]}),v.jsxs("div",{style:{flex:1},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"0.25rem"},children:[v.jsx("span",{children:"Revise"}),v.jsx("span",{style:{color:"var(--revision-color)"},children:N})]}),v.jsx("div",{className:"progress-bar-container",children:v.jsx("div",{className:"progress-bar-fill",style:{width:E?`${Math.min(100,N/E*100)}%`:"0%",backgroundColor:"var(--revision-color)"}})})]})]})]},_.id)})})]})},mL="JROhXIAevXfsMos9qTTXcpf92vD2";Object.fromEntries(Tt.map(t=>[t.id,t.name]));function gL(t){if(!t)return"Never";const e=t.toDate?t.toDate():new Date(t),n=Math.floor((Date.now()-e.getTime())/1e3);return n<60?`${n}s ago`:n<3600?`${Math.floor(n/60)}m ago`:n<86400?`${Math.floor(n/3600)}h ago`:`${Math.floor(n/86400)}d ago`}function Sw(t){if(!t)return!1;const e=t.toDate?t.toDate():new Date(t),n=new Date;return e.getDate()===n.getDate()&&e.getMonth()===n.getMonth()&&e.getFullYear()===n.getFullYear()}const lu=({icon:t,value:e,label:n,color:r})=>v.jsxs("div",{className:"admin-stat-card",children:[v.jsx("div",{className:"admin-stat-icon",style:{background:r+"22",color:r},children:t}),v.jsx("div",{className:"admin-stat-value",style:{color:r},children:e}),v.jsx("div",{className:"admin-stat-label",children:n})]}),yL=()=>{var A;const{user:t}=G.useContext(Qi),[e,n]=G.useState([]),[r,i]=G.useState(!0),[s,o]=G.useState(""),[a,u]=G.useState("totalSolved"),[c,d]=G.useState(""),[f,p]=G.useState(new Set),_=t&&t.uid===mL;if(G.useEffect(()=>{(async()=>{const x=await wh("a2z_flawless");if(!x)return;const C=new Set,P=de=>{de.forEach(we=>{(we.questions||[]).forEach(Je=>{Je.id&&C.add(Je.id)}),(we.subcategories||[]).forEach(Je=>P([Je]))})};P(x.data),p(C)})()},[]),G.useEffect(()=>{if(!_)return;(async()=>{try{const C=(await tA(MS(xc,"users"))).docs.map(P=>({uid:P.id,...P.data()}));n(C)}catch{o("Failed to load user data. Check Firestore rules.")}finally{i(!1)}})()},[_]),!t)return v.jsxs("div",{className:"admin-access-denied",children:[v.jsx("div",{className:"admin-lock",children:"🔒"}),v.jsx("h2",{children:"Sign in required"}),v.jsx("p",{children:"Please sign in with your admin account to access this page."})]});if(!_)return v.jsxs("div",{className:"admin-access-denied",children:[v.jsx("div",{className:"admin-lock",children:"⛔"}),v.jsx("h2",{children:"Access Denied"}),v.jsx("p",{children:"You don't have permission to view this page."}),v.jsxs("p",{className:"admin-uid-hint",children:["Your UID: ",v.jsx("code",{children:t.uid})]})]});if(r)return v.jsxs("div",{className:"admin-loading",children:[v.jsx("div",{className:"admin-spinner"}),v.jsx("p",{children:"Loading admin data…"})]});if(s)return v.jsxs("div",{className:"admin-access-denied",children:[v.jsx("div",{className:"admin-lock",children:"⚠️"}),v.jsx("h2",{children:s})]});const S=I=>typeof Object.values(I||{})[0]=="boolean",k=I=>{if(!I||S(I)||f.size===0)return I;const x={};for(const[C,P]of Object.entries(I))if(!(!P||typeof P!="object"))for(const[de,we]of Object.entries(P)){const Je=f.has(de)?"a2z_flawless":C;x[Je]||(x[Je]={});const Pt=x[Je][de];Pt?x[Je][de]={status:Pt.status||we.status,revision:Pt.revision||we.revision}:x[Je][de]=we}return x},N=I=>{const x=I.progress||{};if(Object.keys(x).length===0)return 0;if(S(x))return Object.values(x).filter(P=>P===!0).length;const C=k(x);return Object.values(C).reduce((P,de)=>P+Object.values(de||{}).filter(we=>we&&we.status).length,0)},E=(I,x)=>{const C=I.progress||{};if(S(C))return x!=="a2z_flawless"?0:Object.values(C).filter(we=>we===!0).length;const de=k(C)[x]||{};return Object.values(de).filter(we=>we&&we.status).length},w=e.length,R=e.filter(I=>Sw(I.lastSolvedAt)).length,V=e.reduce((I,x)=>I+N(x),0),F=e.reduce((I,x)=>!I||N(x)>N(I)?x:I,null),L={};e.forEach(I=>{Tt.forEach(x=>{const C=E(I,x.id)??0;L[x.id]=(L[x.id]||0)+C})});const T=Math.max(1,...Object.values(L)),g=e.filter(I=>{const x=c.toLowerCase();return(I.displayName||"").toLowerCase().includes(x)||(I.email||"").toLowerCase().includes(x)}).sort((I,x)=>{var C,P,de,we;if(a==="totalSolved")return N(x)-N(I);if(a==="lastSolvedAt"){const Je=((P=(C=I.lastSolvedAt)==null?void 0:C.toDate)==null?void 0:P.call(C))||new Date(0);return(((we=(de=x.lastSolvedAt)==null?void 0:de.toDate)==null?void 0:we.call(de))||new Date(0))-Je}return(I.displayName||"").localeCompare(x.displayName||"")});return v.jsxs("div",{className:"admin-dashboard",children:[v.jsxs("div",{className:"admin-header",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"admin-title",children:"Admin Dashboard"}),v.jsxs("p",{className:"admin-subtitle",children:["Live data from Firestore · ",w," registered users"]})]}),v.jsx("span",{className:"admin-badge",children:"🛡️ Admin"})]}),v.jsxs("div",{className:"admin-stats-grid",children:[v.jsx(lu,{icon:"👥",value:w,label:"Total Users",color:"#8ab4f8"}),v.jsx(lu,{icon:"✅",value:R,label:"Active Today",color:"#3ddc84"}),v.jsx(lu,{icon:"🧩",value:V,label:"Total Solves (all users)",color:"#fdd663"}),v.jsx(lu,{icon:"🔥",value:F&&F.totalSolved||0,label:`Top Solver: ${((A=F==null?void 0:F.displayName)==null?void 0:A.split(" ")[0])||"—"}`,color:"#f28b82"})]}),v.jsxs("div",{className:"admin-section",children:[v.jsx("h2",{className:"admin-section-title",children:"📊 Solves by Sheet"}),v.jsx("div",{className:"admin-topic-chart",children:Tt.map(I=>{const x=L[I.id]||0,C=Math.round(x/T*100);return v.jsxs("div",{className:"admin-topic-row",children:[v.jsx("span",{className:"admin-topic-name",children:I.name}),v.jsx("div",{className:"admin-topic-bar-track",children:v.jsx("div",{className:"admin-topic-bar-fill",style:{width:`${C}%`}})}),v.jsx("span",{className:"admin-topic-count",children:x})]},I.id)})})]}),v.jsxs("div",{className:"admin-section",children:[v.jsxs("div",{className:"admin-section-header",children:[v.jsx("h2",{className:"admin-section-title",children:"👤 All Users"}),v.jsxs("div",{className:"admin-controls",children:[v.jsx("input",{type:"text",placeholder:"Search by name or email…",value:c,onChange:I=>d(I.target.value),className:"admin-search",id:"admin-user-search"}),v.jsxs("select",{value:a,onChange:I=>u(I.target.value),className:"admin-select",id:"admin-sort-select",children:[v.jsx("option",{value:"totalSolved",children:"Sort: Most Solved"}),v.jsx("option",{value:"lastSolvedAt",children:"Sort: Recent Activity"}),v.jsx("option",{value:"name",children:"Sort: Name A–Z"})]})]})]}),v.jsx("div",{className:"admin-table-wrapper",children:v.jsxs("table",{className:"admin-table",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{children:"User"}),Tt.map(I=>v.jsx("th",{children:I.name},I.id)),v.jsx("th",{children:"Total Solved"}),v.jsx("th",{children:"Last Active"}),v.jsx("th",{children:"Today"})]})}),v.jsxs("tbody",{children:[g.map(I=>{I.progress;const x=Sw(I.lastSolvedAt);return v.jsxs("tr",{className:x?"admin-row-active":"",children:[v.jsx("td",{children:v.jsxs("div",{className:"admin-user-cell",children:[I.photoURL?v.jsx("img",{src:I.photoURL,alt:"",className:"admin-avatar"}):v.jsx("div",{className:"admin-avatar-placeholder",children:(I.displayName||I.email||"?")[0].toUpperCase()}),v.jsxs("div",{children:[v.jsx("div",{className:"admin-user-name",children:I.displayName||"Anonymous"}),v.jsx("div",{className:"admin-user-email",children:I.email})]})]})}),Tt.map(C=>{const P=E(I,C.id);return v.jsx("td",{className:"admin-sheet-cell",children:P>0?v.jsx("span",{className:"admin-solved-badge",children:P}):v.jsx("span",{className:"admin-zero",children:"—"})},C.id)}),v.jsx("td",{className:"admin-total-cell",children:N(I)}),v.jsx("td",{className:"admin-time-cell",children:gL(I.lastSolvedAt)}),v.jsx("td",{children:x?v.jsx("span",{className:"admin-dot-green",title:"Active today"}):v.jsx("span",{className:"admin-dot-gray"})})]},I.uid)}),g.length===0&&v.jsx("tr",{children:v.jsx("td",{colSpan:Tt.length+4,style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"No users found"})})]})]})})]})]})};function _L(){const[t,e]=G.useState("a2z_flawless"),[n,r]=G.useState(!1),[i,s]=G.useState(!1),[o,a]=G.useState(!0);return v.jsx(z1,{children:v.jsx(SM,{children:v.jsx(xM,{children:v.jsxs("div",{className:"app-container",children:[v.jsx(ZM,{setShowDashboard:u=>{r(u),s(!1)},setShowAdmin:u=>{s(u),r(!1)}}),v.jsxs("div",{className:"main-layout",children:[v.jsx(tL,{activeSheet:t,setActiveSheet:e,showDashboard:n,setShowDashboard:r,sidebarOpen:o,setSidebarOpen:a}),v.jsxs("main",{className:"main-content",style:{display:"flex",flexDirection:"column"},children:[v.jsx("div",{style:{flex:1},children:i?v.jsx(yL,{}):n?v.jsx(pL,{setActiveSheet:e,setShowDashboard:r}):v.jsx(fL,{activeSheet:t})}),v.jsx("footer",{style:{textAlign:"center",paddingTop:"1.5rem",marginTop:"4rem",color:"var(--text-secondary)",fontSize:"0.85rem",borderTop:"1px solid var(--border-color)",opacity:.8},children:"Created for educational purposes only - we respect creators and do not support piracy or unauthorized use of copyrighted content."})]})]})]})})})})}Dd.createRoot(document.getElementById("root")).render(v.jsx(CR.StrictMode,{children:v.jsx(_L,{})}));
