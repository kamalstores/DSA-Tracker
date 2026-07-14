(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function vT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vy={exports:{}},Kl={},Ly={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),_T=Symbol.for("react.portal"),wT=Symbol.for("react.fragment"),ET=Symbol.for("react.strict_mode"),TT=Symbol.for("react.profiler"),IT=Symbol.for("react.provider"),ST=Symbol.for("react.context"),AT=Symbol.for("react.forward_ref"),kT=Symbol.for("react.suspense"),CT=Symbol.for("react.memo"),RT=Symbol.for("react.lazy"),em=Symbol.iterator;function PT(t){return t===null||typeof t!="object"?null:(t=em&&t[em]||t["@@iterator"],typeof t=="function"?t:null)}var My={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jy=Object.assign,Fy={};function Ji(t,e,n){this.props=t,this.context=e,this.refs=Fy,this.updater=n||My}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ji.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uy(){}Uy.prototype=Ji.prototype;function ad(t,e,n){this.props=t,this.context=e,this.refs=Fy,this.updater=n||My}var ld=ad.prototype=new Uy;ld.constructor=ad;jy(ld,Ji.prototype);ld.isPureReactComponent=!0;var tm=Array.isArray,zy=Object.prototype.hasOwnProperty,ud={current:null},By={key:!0,ref:!0,__self:!0,__source:!0};function $y(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zy.call(e,r)&&!By.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Po,type:t,key:s,ref:o,props:i,_owner:ud.current}}function xT(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function NT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nm=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NT(""+t.key):e.toString(36)}function Oa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Po:case _T:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ec(o,0):r,tm(i)?(n="",t!=null&&(n=t.replace(nm,"$&/")+"/"),Oa(i,e,n,"",function(h){return h})):i!=null&&(cd(i)&&(i=xT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ec(s,l);o+=Oa(s,e,n,u,i)}else if(u=PT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ec(s,l++),o+=Oa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function la(t,e,n){if(t==null)return t;var r=[],i=0;return Oa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function DT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},Va={transition:null},bT={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Va,ReactCurrentOwner:ud};function Wy(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:la,forEach:function(t,e,n){la(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return la(t,function(){e++}),e},toArray:function(t){return la(t,function(e){return e})||[]},only:function(t){if(!cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Ji;te.Fragment=wT;te.Profiler=TT;te.PureComponent=ad;te.StrictMode=ET;te.Suspense=kT;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bT;te.act=Wy;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ud.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)zy.call(e,u)&&!By.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Po,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:ST,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IT,_context:t},t.Consumer=t};te.createElement=$y;te.createFactory=function(t){var e=$y.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:AT,render:t}};te.isValidElement=cd;te.lazy=function(t){return{$$typeof:RT,_payload:{_status:-1,_result:t},_init:DT}};te.memo=function(t,e){return{$$typeof:CT,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Va.transition;Va.transition={};try{t()}finally{Va.transition=e}};te.unstable_act=Wy;te.useCallback=function(t,e){return ft.current.useCallback(t,e)};te.useContext=function(t){return ft.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};te.useEffect=function(t,e){return ft.current.useEffect(t,e)};te.useId=function(){return ft.current.useId()};te.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return ft.current.useMemo(t,e)};te.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};te.useRef=function(t){return ft.current.useRef(t)};te.useState=function(t){return ft.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return ft.current.useTransition()};te.version="18.3.1";Ly.exports=te;var U=Ly.exports;const OT=vT(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT=U,LT=Symbol.for("react.element"),MT=Symbol.for("react.fragment"),jT=Object.prototype.hasOwnProperty,FT=VT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UT={key:!0,ref:!0,__self:!0,__source:!0};function Hy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jT.call(e,r)&&!UT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:LT,type:t,key:s,ref:o,props:i,_owner:FT.current}}Kl.Fragment=MT;Kl.jsx=Hy;Kl.jsxs=Hy;Vy.exports=Kl;var p=Vy.exports,zc={},qy={exports:{}},xt={},Ky={exports:{}},Gy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,$){var H=L.length;L.push($);e:for(;0<H;){var Y=H-1>>>1,G=L[Y];if(0<i(G,$))L[Y]=$,L[H]=G,H=Y;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var $=L[0],H=L.pop();if(H!==$){L[0]=H;e:for(var Y=0,G=L.length,se=G>>>1;Y<se;){var ye=2*(Y+1)-1,Qe=L[ye],dn=ye+1,fn=L[dn];if(0>i(Qe,H))dn<G&&0>i(fn,Qe)?(L[Y]=fn,L[dn]=H,Y=dn):(L[Y]=Qe,L[ye]=H,Y=ye);else if(dn<G&&0>i(fn,H))L[Y]=fn,L[dn]=H,Y=dn;else break e}}return $}function i(L,$){var H=L.sortIndex-$.sortIndex;return H!==0?H:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,m=3,A=!1,P=!1,R=!1,b=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(L){for(var $=n(h);$!==null;){if($.callback===null)r(h);else if($.startTime<=L)r(h),$.sortIndex=$.expirationTime,e(u,$);else break;$=n(h)}}function N(L){if(R=!1,I(L),!P)if(n(u)!==null)P=!0,Ae(M);else{var $=n(h);$!==null&&mt(N,$.startTime-L)}}function M(L,$){P=!1,R&&(R=!1,T(y),y=-1),A=!0;var H=m;try{for(I($),g=n(u);g!==null&&(!(g.expirationTime>$)||L&&!C());){var Y=g.callback;if(typeof Y=="function"){g.callback=null,m=g.priorityLevel;var G=Y(g.expirationTime<=$);$=t.unstable_now(),typeof G=="function"?g.callback=G:g===n(u)&&r(u),I($)}else r(u);g=n(u)}if(g!==null)var se=!0;else{var ye=n(h);ye!==null&&mt(N,ye.startTime-$),se=!1}return se}finally{g=null,m=H,A=!1}}var V=!1,w=null,y=-1,E=5,S=-1;function C(){return!(t.unstable_now()-S<E)}function x(){if(w!==null){var L=t.unstable_now();S=L;var $=!0;try{$=w(!0,L)}finally{$?k():(V=!1,w=null)}}else V=!1}var k;if(typeof _=="function")k=function(){_(x)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,fe=De.port2;De.port1.onmessage=x,k=function(){fe.postMessage(null)}}else k=function(){b(x,0)};function Ae(L){w=L,V||(V=!0,k())}function mt(L,$){y=b(function(){L(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,Ae(M))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(L){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var H=m;m=$;try{return L()}finally{m=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var H=m;m=L;try{return $()}finally{m=H}},t.unstable_scheduleCallback=function(L,$,H){var Y=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?Y+H:Y):H=Y,L){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=H+G,L={id:f++,callback:$,priorityLevel:L,startTime:H,expirationTime:G,sortIndex:-1},H>Y?(L.sortIndex=H,e(h,L),n(u)===null&&L===n(h)&&(R?(T(y),y=-1):R=!0,mt(N,H-Y))):(L.sortIndex=G,e(u,L),P||A||(P=!0,Ae(M))),L},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(L){var $=m;return function(){var H=m;m=$;try{return L.apply(this,arguments)}finally{m=H}}}})(Gy);Ky.exports=Gy;var zT=Ky.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BT=U,Pt=zT;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qy=new Set,eo={};function Yr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(eo[t]=e,t=0;t<e.length;t++)Qy.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,$T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rm={},im={};function WT(t){return Bc.call(im,t)?!0:Bc.call(rm,t)?!1:$T.test(t)?im[t]=!0:(rm[t]=!0,!1)}function HT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qT(t,e,n,r){if(e===null||typeof e>"u"||HT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var hd=/[\-:]([a-z])/g;function dd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hd,dd);Ke[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hd,dd);Ke[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hd,dd);Ke[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function fd(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qT(e,n,i,r)&&(n=null),r||i===null?WT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=BT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),pi=Symbol.for("react.portal"),mi=Symbol.for("react.fragment"),pd=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),gd=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Jy=Symbol.for("react.offscreen"),sm=Symbol.iterator;function ws(t){return t===null||typeof t!="object"?null:(t=sm&&t[sm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,tc;function xs(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function rc(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xs(t):""}function KT(t){switch(t.tag){case 5:return xs(t.type);case 16:return xs("Lazy");case 13:return xs("Suspense");case 19:return xs("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mi:return"Fragment";case pi:return"Portal";case $c:return"Profiler";case pd:return"StrictMode";case Wc:return"Suspense";case Hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xy:return(t.displayName||"Context")+".Consumer";case Yy:return(t._context.displayName||"Context")+".Provider";case md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gd:return e=t.displayName||null,e!==null?e:qc(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return qc(t(e))}catch{}}return null}function GT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(e);case 8:return e===pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QT(t){var e=Zy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ca(t){t._valueTracker||(t._valueTracker=QT(t))}function ev(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Zy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kc(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tv(t,e){e=e.checked,e!=null&&fd(t,"checked",e,!1)}function Gc(t,e){tv(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qc(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function am(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qc(t,e,n){(e!=="number"||rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ns=Array.isArray;function ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Ns(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function nv(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ha,iv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YT=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(t){YT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fs[e]=Fs[t]})});function sv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fs.hasOwnProperty(t)&&Fs[t]?(""+e).trim():e+"px"}function ov(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var XT=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(t,e){if(e){if(XT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=null;function yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var th=null,Ci=null,Ri=null;function cm(t){if(t=Do(t)){if(typeof th!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Jl(e),th(t.stateNode,t.type,e))}}function av(t){Ci?Ri?Ri.push(t):Ri=[t]:Ci=t}function lv(){if(Ci){var t=Ci,e=Ri;if(Ri=Ci=null,cm(t),e)for(t=0;t<e.length;t++)cm(e[t])}}function uv(t,e){return t(e)}function cv(){}var ic=!1;function hv(t,e,n){if(ic)return t(e,n);ic=!0;try{return uv(t,e,n)}finally{ic=!1,(Ci!==null||Ri!==null)&&(cv(),lv())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var r=Jl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var nh=!1;if(Pn)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){nh=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{nh=!1}function JT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Us=!1,il=null,sl=!1,rh=null,ZT={onError:function(t){Us=!0,il=t}};function eI(t,e,n,r,i,s,o,l,u){Us=!1,il=null,JT.apply(ZT,arguments)}function tI(t,e,n,r,i,s,o,l,u){if(eI.apply(this,arguments),Us){if(Us){var h=il;Us=!1,il=null}else throw Error(z(198));sl||(sl=!0,rh=h)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hm(t){if(Xr(t)!==t)throw Error(z(188))}function nI(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hm(i),t;if(s===r)return hm(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function fv(t){return t=nI(t),t!==null?pv(t):null}function pv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pv(t);if(e!==null)return e;t=t.sibling}return null}var mv=Pt.unstable_scheduleCallback,dm=Pt.unstable_cancelCallback,rI=Pt.unstable_shouldYield,iI=Pt.unstable_requestPaint,Pe=Pt.unstable_now,sI=Pt.unstable_getCurrentPriorityLevel,vd=Pt.unstable_ImmediatePriority,gv=Pt.unstable_UserBlockingPriority,ol=Pt.unstable_NormalPriority,oI=Pt.unstable_LowPriority,yv=Pt.unstable_IdlePriority,Gl=null,tn=null;function aI(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:cI,lI=Math.log,uI=Math.LN2;function cI(t){return t>>>=0,t===0?32:31-(lI(t)/uI|0)|0}var da=64,fa=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ds(l):(s&=o,s!==0&&(r=Ds(s)))}else o=n&~i,o!==0?r=Ds(o):s!==0&&(r=Ds(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),i=1<<n,r|=t[n],e&=~i;return r}function hI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=hI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vv(){var t=da;return da<<=1,!(da&4194240)&&(da=64),t}function sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function fI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function _d(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function _v(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wv,wd,Ev,Tv,Iv,sh=!1,pa=[],er=null,tr=null,nr=null,ro=new Map,io=new Map,Hn=[],pI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fm(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(e.pointerId)}}function Ts(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Do(e),e!==null&&wd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mI(t,e,n,r,i){switch(e){case"focusin":return er=Ts(er,t,e,n,r,i),!0;case"dragenter":return tr=Ts(tr,t,e,n,r,i),!0;case"mouseover":return nr=Ts(nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ro.set(s,Ts(ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,io.set(s,Ts(io.get(s)||null,t,e,n,r,i)),!0}return!1}function Sv(t){var e=Cr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=dv(n),e!==null){t.blockedOn=e,Iv(t.priority,function(){Ev(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function La(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);eh=r,n.target.dispatchEvent(r),eh=null}else return e=Do(n),e!==null&&wd(e),t.blockedOn=n,!1;e.shift()}return!0}function pm(t,e,n){La(t)&&n.delete(e)}function gI(){sh=!1,er!==null&&La(er)&&(er=null),tr!==null&&La(tr)&&(tr=null),nr!==null&&La(nr)&&(nr=null),ro.forEach(pm),io.forEach(pm)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,sh||(sh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,gI)))}function so(t){function e(i){return Is(i,t)}if(0<pa.length){Is(pa[0],t);for(var n=1;n<pa.length;n++){var r=pa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(er!==null&&Is(er,t),tr!==null&&Is(tr,t),nr!==null&&Is(nr,t),ro.forEach(e),io.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Sv(n),n.blockedOn===null&&Hn.shift()}var Pi=Mn.ReactCurrentBatchConfig,ll=!0;function yI(t,e,n,r){var i=ue,s=Pi.transition;Pi.transition=null;try{ue=1,Ed(t,e,n,r)}finally{ue=i,Pi.transition=s}}function vI(t,e,n,r){var i=ue,s=Pi.transition;Pi.transition=null;try{ue=4,Ed(t,e,n,r)}finally{ue=i,Pi.transition=s}}function Ed(t,e,n,r){if(ll){var i=oh(t,e,n,r);if(i===null)mc(t,e,r,ul,n),fm(t,r);else if(mI(i,t,e,n,r))r.stopPropagation();else if(fm(t,r),e&4&&-1<pI.indexOf(t)){for(;i!==null;){var s=Do(i);if(s!==null&&wv(s),s=oh(t,e,n,r),s===null&&mc(t,e,r,ul,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mc(t,e,r,null,n)}}var ul=null;function oh(t,e,n,r){if(ul=null,t=yd(r),t=Cr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ul=t,null}function Av(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sI()){case vd:return 1;case gv:return 4;case ol:case oI:return 16;case yv:return 536870912;default:return 16}default:return 16}}var Yn=null,Td=null,Ma=null;function kv(){if(Ma)return Ma;var t,e=Td,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ma=i.slice(t,1<r?1-r:void 0)}function ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ma(){return!0}function mm(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ma:mm,this.isPropagationStopped=mm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),e}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=Nt(Zi),No=Ie({},Zi,{view:0,detail:0}),_I=Nt(No),oc,ac,Ss,Ql=Ie({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?(oc=t.screenX-Ss.screenX,ac=t.screenY-Ss.screenY):ac=oc=0,Ss=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),gm=Nt(Ql),wI=Ie({},Ql,{dataTransfer:0}),EI=Nt(wI),TI=Ie({},No,{relatedTarget:0}),lc=Nt(TI),II=Ie({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),SI=Nt(II),AI=Ie({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kI=Nt(AI),CI=Ie({},Zi,{data:0}),ym=Nt(CI),RI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xI[t])?!!e[t]:!1}function Sd(){return NI}var DI=Ie({},No,{key:function(t){if(t.key){var e=RI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(t){return t.type==="keypress"?ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bI=Nt(DI),OI=Ie({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vm=Nt(OI),VI=Ie({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),LI=Nt(VI),MI=Ie({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),jI=Nt(MI),FI=Ie({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UI=Nt(FI),zI=[9,13,27,32],Ad=Pn&&"CompositionEvent"in window,zs=null;Pn&&"documentMode"in document&&(zs=document.documentMode);var BI=Pn&&"TextEvent"in window&&!zs,Cv=Pn&&(!Ad||zs&&8<zs&&11>=zs),_m=" ",wm=!1;function Rv(t,e){switch(t){case"keyup":return zI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gi=!1;function $I(t,e){switch(t){case"compositionend":return Pv(e);case"keypress":return e.which!==32?null:(wm=!0,_m);case"textInput":return t=e.data,t===_m&&wm?null:t;default:return null}}function WI(t,e){if(gi)return t==="compositionend"||!Ad&&Rv(t,e)?(t=kv(),Ma=Td=Yn=null,gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cv&&e.locale!=="ko"?null:e.data;default:return null}}var HI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HI[t.type]:e==="textarea"}function xv(t,e,n,r){av(r),e=cl(e,"onChange"),0<e.length&&(n=new Id("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Bs=null,oo=null;function qI(t){zv(t,0)}function Yl(t){var e=_i(t);if(ev(e))return t}function KI(t,e){if(t==="change")return e}var Nv=!1;if(Pn){var uc;if(Pn){var cc="oninput"in document;if(!cc){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),cc=typeof Tm.oninput=="function"}uc=cc}else uc=!1;Nv=uc&&(!document.documentMode||9<document.documentMode)}function Im(){Bs&&(Bs.detachEvent("onpropertychange",Dv),oo=Bs=null)}function Dv(t){if(t.propertyName==="value"&&Yl(oo)){var e=[];xv(e,oo,t,yd(t)),hv(qI,e)}}function GI(t,e,n){t==="focusin"?(Im(),Bs=e,oo=n,Bs.attachEvent("onpropertychange",Dv)):t==="focusout"&&Im()}function QI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(oo)}function YI(t,e){if(t==="click")return Yl(e)}function XI(t,e){if(t==="input"||t==="change")return Yl(e)}function JI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:JI;function ao(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bc.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function Sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Am(t,e){var n=Sm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ov(){for(var t=window,e=rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rl(t.document)}return e}function kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZI(t){var e=Ov(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bv(n.ownerDocument.documentElement,n)){if(r!==null&&kd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Am(n,s);var o=Am(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eS=Pn&&"documentMode"in document&&11>=document.documentMode,yi=null,ah=null,$s=null,lh=!1;function km(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lh||yi==null||yi!==rl(r)||(r=yi,"selectionStart"in r&&kd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$s&&ao($s,r)||($s=r,r=cl(ah,"onSelect"),0<r.length&&(e=new Id("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=yi)))}function ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vi={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},hc={},Vv={};Pn&&(Vv=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Xl(t){if(hc[t])return hc[t];if(!vi[t])return t;var e=vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vv)return hc[t]=e[n];return t}var Lv=Xl("animationend"),Mv=Xl("animationiteration"),jv=Xl("animationstart"),Fv=Xl("transitionend"),Uv=new Map,Cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){Uv.set(t,e),Yr(e,[t])}for(var dc=0;dc<Cm.length;dc++){var fc=Cm[dc],tS=fc.toLowerCase(),nS=fc[0].toUpperCase()+fc.slice(1);gr(tS,"on"+nS)}gr(Lv,"onAnimationEnd");gr(Mv,"onAnimationIteration");gr(jv,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(Fv,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rS=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function Rm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tI(r,e,void 0,t),t.currentTarget=null}function zv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Rm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Rm(i,l,h),s=u}}}if(sl)throw t=rh,sl=!1,rh=null,t}function me(t,e){var n=e[fh];n===void 0&&(n=e[fh]=new Set);var r=t+"__bubble";n.has(r)||(Bv(e,t,2,!1),n.add(r))}function pc(t,e,n){var r=0;e&&(r|=4),Bv(n,t,r,e)}var ya="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[ya]){t[ya]=!0,Qy.forEach(function(n){n!=="selectionchange"&&(rS.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ya]||(e[ya]=!0,pc("selectionchange",!1,e))}}function Bv(t,e,n,r){switch(Av(e)){case 1:var i=yI;break;case 4:i=vI;break;default:i=Ed}n=i.bind(null,e,n,t),i=void 0,!nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Cr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}hv(function(){var h=s,f=yd(n),g=[];e:{var m=Uv.get(t);if(m!==void 0){var A=Id,P=t;switch(t){case"keypress":if(ja(n)===0)break e;case"keydown":case"keyup":A=bI;break;case"focusin":P="focus",A=lc;break;case"focusout":P="blur",A=lc;break;case"beforeblur":case"afterblur":A=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=EI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=LI;break;case Lv:case Mv:case jv:A=SI;break;case Fv:A=jI;break;case"scroll":A=_I;break;case"wheel":A=UI;break;case"copy":case"cut":case"paste":A=kI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=vm}var R=(e&4)!==0,b=!R&&t==="scroll",T=R?m!==null?m+"Capture":null:m;R=[];for(var _=h,I;_!==null;){I=_;var N=I.stateNode;if(I.tag===5&&N!==null&&(I=N,T!==null&&(N=no(_,T),N!=null&&R.push(uo(_,N,I)))),b)break;_=_.return}0<R.length&&(m=new A(m,P,null,n,f),g.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",m&&n!==eh&&(P=n.relatedTarget||n.fromElement)&&(Cr(P)||P[xn]))break e;if((A||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=h,P=P?Cr(P):null,P!==null&&(b=Xr(P),P!==b||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=h),A!==P)){if(R=gm,N="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(R=vm,N="onPointerLeave",T="onPointerEnter",_="pointer"),b=A==null?m:_i(A),I=P==null?m:_i(P),m=new R(N,_+"leave",A,n,f),m.target=b,m.relatedTarget=I,N=null,Cr(f)===h&&(R=new R(T,_+"enter",P,n,f),R.target=I,R.relatedTarget=b,N=R),b=N,A&&P)t:{for(R=A,T=P,_=0,I=R;I;I=li(I))_++;for(I=0,N=T;N;N=li(N))I++;for(;0<_-I;)R=li(R),_--;for(;0<I-_;)T=li(T),I--;for(;_--;){if(R===T||T!==null&&R===T.alternate)break t;R=li(R),T=li(T)}R=null}else R=null;A!==null&&Pm(g,m,A,R,!1),P!==null&&b!==null&&Pm(g,b,P,R,!0)}}e:{if(m=h?_i(h):window,A=m.nodeName&&m.nodeName.toLowerCase(),A==="select"||A==="input"&&m.type==="file")var M=KI;else if(Em(m))if(Nv)M=XI;else{M=QI;var V=GI}else(A=m.nodeName)&&A.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=YI);if(M&&(M=M(t,h))){xv(g,M,n,f);break e}V&&V(t,m,h),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&Qc(m,"number",m.value)}switch(V=h?_i(h):window,t){case"focusin":(Em(V)||V.contentEditable==="true")&&(yi=V,ah=h,$s=null);break;case"focusout":$s=ah=yi=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,km(g,n,f);break;case"selectionchange":if(eS)break;case"keydown":case"keyup":km(g,n,f)}var w;if(Ad)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else gi?Rv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Cv&&n.locale!=="ko"&&(gi||y!=="onCompositionStart"?y==="onCompositionEnd"&&gi&&(w=kv()):(Yn=f,Td="value"in Yn?Yn.value:Yn.textContent,gi=!0)),V=cl(h,y),0<V.length&&(y=new ym(y,t,null,n,f),g.push({event:y,listeners:V}),w?y.data=w:(w=Pv(n),w!==null&&(y.data=w)))),(w=BI?$I(t,n):WI(t,n))&&(h=cl(h,"onBeforeInput"),0<h.length&&(f=new ym("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=w))}zv(g,e)})}function uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=no(t,n),s!=null&&r.unshift(uo(t,s,i)),s=no(t,e),s!=null&&r.push(uo(t,s,i))),t=t.return}return r}function li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=no(n,s),u!=null&&o.unshift(uo(n,u,l))):i||(u=no(n,s),u!=null&&o.push(uo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function xm(t){return(typeof t=="string"?t:""+t).replace(iS,`
`).replace(sS,"")}function va(t,e,n){if(e=xm(e),xm(t)!==e&&n)throw Error(z(425))}function hl(){}var uh=null,ch=null;function hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dh=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(lS)}:dh;function lS(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),so(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);so(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var es=Math.random().toString(36).slice(2),en="__reactFiber$"+es,co="__reactProps$"+es,xn="__reactContainer$"+es,fh="__reactEvents$"+es,uS="__reactListeners$"+es,cS="__reactHandles$"+es;function Cr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dm(t);t!==null;){if(n=t[en])return n;t=Dm(t)}return e}t=n,n=t.parentNode}return null}function Do(t){return t=t[en]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Jl(t){return t[co]||null}var ph=[],wi=-1;function yr(t){return{current:t}}function ge(t){0>wi||(t.current=ph[wi],ph[wi]=null,wi--)}function de(t,e){wi++,ph[wi]=t.current,t.current=e}var dr={},st=yr(dr),vt=yr(!1),Mr=dr;function Mi(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function dl(){ge(vt),ge(st)}function bm(t,e,n){if(st.current!==dr)throw Error(z(168));de(st,e),de(vt,n)}function $v(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,GT(t)||"Unknown",i));return Ie({},n,r)}function fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Mr=st.current,de(st,t),de(vt,vt.current),!0}function Om(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=$v(t,e,Mr),r.__reactInternalMemoizedMergedChildContext=t,ge(vt),ge(st),de(st,t)):ge(vt),de(vt,n)}var vn=null,Zl=!1,yc=!1;function Wv(t){vn===null?vn=[t]:vn.push(t)}function hS(t){Zl=!0,Wv(t)}function vr(){if(!yc&&vn!==null){yc=!0;var t=0,e=ue;try{var n=vn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,Zl=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),mv(vd,vr),i}finally{ue=e,yc=!1}}return null}var Ei=[],Ti=0,pl=null,ml=0,Dt=[],bt=0,jr=null,wn=1,En="";function Sr(t,e){Ei[Ti++]=ml,Ei[Ti++]=pl,pl=t,ml=e}function Hv(t,e,n){Dt[bt++]=wn,Dt[bt++]=En,Dt[bt++]=jr,jr=t;var r=wn;t=En;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var s=32-qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wn=1<<32-qt(e)+i|n<<i|r,En=s+t}else wn=1<<s|n<<i|r,En=t}function Cd(t){t.return!==null&&(Sr(t,1),Hv(t,1,0))}function Rd(t){for(;t===pl;)pl=Ei[--Ti],Ei[Ti]=null,ml=Ei[--Ti],Ei[Ti]=null;for(;t===jr;)jr=Dt[--bt],Dt[bt]=null,En=Dt[--bt],Dt[bt]=null,wn=Dt[--bt],Dt[bt]=null}var kt=null,At=null,ve=!1,Wt=null;function qv(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,At=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:wn,overflow:En}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,At=null,!0):!1;default:return!1}}function mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gh(t){if(ve){var e=At;if(e){var n=e;if(!Vm(t,e)){if(mh(t))throw Error(z(418));e=rr(n.nextSibling);var r=kt;e&&Vm(t,e)?qv(r,n):(t.flags=t.flags&-4097|2,ve=!1,kt=t)}}else{if(mh(t))throw Error(z(418));t.flags=t.flags&-4097|2,ve=!1,kt=t}}}function Lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function _a(t){if(t!==kt)return!1;if(!ve)return Lm(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hh(t.type,t.memoizedProps)),e&&(e=At)){if(mh(t))throw Kv(),Error(z(418));for(;e;)qv(t,e),e=rr(e.nextSibling)}if(Lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=kt?rr(t.stateNode.nextSibling):null;return!0}function Kv(){for(var t=At;t;)t=rr(t.nextSibling)}function ji(){At=kt=null,ve=!1}function Pd(t){Wt===null?Wt=[t]:Wt.push(t)}var dS=Mn.ReactCurrentBatchConfig;function As(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function wa(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mm(t){var e=t._init;return e(t._payload)}function Gv(t){function e(T,_){if(t){var I=T.deletions;I===null?(T.deletions=[_],T.flags|=16):I.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=ar(T,_),T.index=0,T.sibling=null,T}function s(T,_,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<_?(T.flags|=2,_):I):(T.flags|=2,_)):(T.flags|=1048576,_)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,I,N){return _===null||_.tag!==6?(_=Sc(I,T.mode,N),_.return=T,_):(_=i(_,I),_.return=T,_)}function u(T,_,I,N){var M=I.type;return M===mi?f(T,_,I.props.children,N,I.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$n&&Mm(M)===_.type)?(N=i(_,I.props),N.ref=As(T,_,I),N.return=T,N):(N=Ha(I.type,I.key,I.props,null,T.mode,N),N.ref=As(T,_,I),N.return=T,N)}function h(T,_,I,N){return _===null||_.tag!==4||_.stateNode.containerInfo!==I.containerInfo||_.stateNode.implementation!==I.implementation?(_=Ac(I,T.mode,N),_.return=T,_):(_=i(_,I.children||[]),_.return=T,_)}function f(T,_,I,N,M){return _===null||_.tag!==7?(_=Or(I,T.mode,N,M),_.return=T,_):(_=i(_,I),_.return=T,_)}function g(T,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Sc(""+_,T.mode,I),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ua:return I=Ha(_.type,_.key,_.props,null,T.mode,I),I.ref=As(T,null,_),I.return=T,I;case pi:return _=Ac(_,T.mode,I),_.return=T,_;case $n:var N=_._init;return g(T,N(_._payload),I)}if(Ns(_)||ws(_))return _=Or(_,T.mode,I,null),_.return=T,_;wa(T,_)}return null}function m(T,_,I,N){var M=_!==null?_.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return M!==null?null:l(T,_,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ua:return I.key===M?u(T,_,I,N):null;case pi:return I.key===M?h(T,_,I,N):null;case $n:return M=I._init,m(T,_,M(I._payload),N)}if(Ns(I)||ws(I))return M!==null?null:f(T,_,I,N,null);wa(T,I)}return null}function A(T,_,I,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return T=T.get(I)||null,l(_,T,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ua:return T=T.get(N.key===null?I:N.key)||null,u(_,T,N,M);case pi:return T=T.get(N.key===null?I:N.key)||null,h(_,T,N,M);case $n:var V=N._init;return A(T,_,I,V(N._payload),M)}if(Ns(N)||ws(N))return T=T.get(I)||null,f(_,T,N,M,null);wa(_,N)}return null}function P(T,_,I,N){for(var M=null,V=null,w=_,y=_=0,E=null;w!==null&&y<I.length;y++){w.index>y?(E=w,w=null):E=w.sibling;var S=m(T,w,I[y],N);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(T,w),_=s(S,_,y),V===null?M=S:V.sibling=S,V=S,w=E}if(y===I.length)return n(T,w),ve&&Sr(T,y),M;if(w===null){for(;y<I.length;y++)w=g(T,I[y],N),w!==null&&(_=s(w,_,y),V===null?M=w:V.sibling=w,V=w);return ve&&Sr(T,y),M}for(w=r(T,w);y<I.length;y++)E=A(w,T,y,I[y],N),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?y:E.key),_=s(E,_,y),V===null?M=E:V.sibling=E,V=E);return t&&w.forEach(function(C){return e(T,C)}),ve&&Sr(T,y),M}function R(T,_,I,N){var M=ws(I);if(typeof M!="function")throw Error(z(150));if(I=M.call(I),I==null)throw Error(z(151));for(var V=M=null,w=_,y=_=0,E=null,S=I.next();w!==null&&!S.done;y++,S=I.next()){w.index>y?(E=w,w=null):E=w.sibling;var C=m(T,w,S.value,N);if(C===null){w===null&&(w=E);break}t&&w&&C.alternate===null&&e(T,w),_=s(C,_,y),V===null?M=C:V.sibling=C,V=C,w=E}if(S.done)return n(T,w),ve&&Sr(T,y),M;if(w===null){for(;!S.done;y++,S=I.next())S=g(T,S.value,N),S!==null&&(_=s(S,_,y),V===null?M=S:V.sibling=S,V=S);return ve&&Sr(T,y),M}for(w=r(T,w);!S.done;y++,S=I.next())S=A(w,T,y,S.value,N),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?y:S.key),_=s(S,_,y),V===null?M=S:V.sibling=S,V=S);return t&&w.forEach(function(x){return e(T,x)}),ve&&Sr(T,y),M}function b(T,_,I,N){if(typeof I=="object"&&I!==null&&I.type===mi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ua:e:{for(var M=I.key,V=_;V!==null;){if(V.key===M){if(M=I.type,M===mi){if(V.tag===7){n(T,V.sibling),_=i(V,I.props.children),_.return=T,T=_;break e}}else if(V.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$n&&Mm(M)===V.type){n(T,V.sibling),_=i(V,I.props),_.ref=As(T,V,I),_.return=T,T=_;break e}n(T,V);break}else e(T,V);V=V.sibling}I.type===mi?(_=Or(I.props.children,T.mode,N,I.key),_.return=T,T=_):(N=Ha(I.type,I.key,I.props,null,T.mode,N),N.ref=As(T,_,I),N.return=T,T=N)}return o(T);case pi:e:{for(V=I.key;_!==null;){if(_.key===V)if(_.tag===4&&_.stateNode.containerInfo===I.containerInfo&&_.stateNode.implementation===I.implementation){n(T,_.sibling),_=i(_,I.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=Ac(I,T.mode,N),_.return=T,T=_}return o(T);case $n:return V=I._init,b(T,_,V(I._payload),N)}if(Ns(I))return P(T,_,I,N);if(ws(I))return R(T,_,I,N);wa(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,I),_.return=T,T=_):(n(T,_),_=Sc(I,T.mode,N),_.return=T,T=_),o(T)):n(T,_)}return b}var Fi=Gv(!0),Qv=Gv(!1),gl=yr(null),yl=null,Ii=null,xd=null;function Nd(){xd=Ii=yl=null}function Dd(t){var e=gl.current;ge(gl),t._currentValue=e}function yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xi(t,e){yl=t,xd=Ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(xd!==t)if(t={context:t,memoizedValue:e,next:null},Ii===null){if(yl===null)throw Error(z(308));Ii=t,yl.dependencies={lanes:0,firstContext:t}}else Ii=Ii.next=t;return e}var Rr=null;function bd(t){Rr===null?Rr=[t]:Rr.push(t)}function Yv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function Od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,bd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function Fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_d(t,n)}}function jm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vl(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=h=u=null,l=s;do{var m=l.lane,A=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,R=l;switch(m=e,A=n,R.tag){case 1:if(P=R.payload,typeof P=="function"){g=P.call(A,g,m);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=R.payload,m=typeof P=="function"?P.call(A,g,m):P,m==null)break e;g=Ie({},g,m);break e;case 2:Wn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else A={eventTime:A,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=g):f=f.next=A,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=g}}function Fm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var bo={},nn=yr(bo),ho=yr(bo),fo=yr(bo);function Pr(t){if(t===bo)throw Error(z(174));return t}function Vd(t,e){switch(de(fo,e),de(ho,t),de(nn,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xc(e,t)}ge(nn),de(nn,e)}function Ui(){ge(nn),ge(ho),ge(fo)}function Jv(t){Pr(fo.current);var e=Pr(nn.current),n=Xc(e,t.type);e!==n&&(de(ho,t),de(nn,n))}function Ld(t){ho.current===t&&(ge(nn),ge(ho))}var Ee=yr(0);function _l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function Md(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var Ua=Mn.ReactCurrentDispatcher,_c=Mn.ReactCurrentBatchConfig,Fr=0,Te=null,be=null,je=null,wl=!1,Ws=!1,po=0,fS=0;function Ze(){throw Error(z(321))}function jd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function Fd(t,e,n,r,i,s){if(Fr=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ua.current=t===null||t.memoizedState===null?yS:vS,t=n(r,i),Ws){s=0;do{if(Ws=!1,po=0,25<=s)throw Error(z(301));s+=1,je=be=null,e.updateQueue=null,Ua.current=_S,t=n(r,i)}while(Ws)}if(Ua.current=El,e=be!==null&&be.next!==null,Fr=0,je=be=Te=null,wl=!1,e)throw Error(z(300));return t}function Ud(){var t=po!==0;return po=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Te.memoizedState=je=t:je=je.next=t,je}function Ft(){if(be===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=je===null?Te.memoizedState:je.next;if(e!==null)je=e,be=t;else{if(t===null)throw Error(z(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},je===null?Te.memoizedState=je=t:je=je.next=t}return je}function mo(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Fr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Te.lanes|=f,Ur|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Qt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,Ur|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=Ft(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qt(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Zv(){}function e_(t,e){var n=Te,r=Ft(),i=e(),s=!Qt(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,zd(r_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,go(9,n_.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(z(349));Fr&30||t_(n,e,i)}return i}function t_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n_(t,e,n,r){e.value=n,e.getSnapshot=r,i_(e)&&s_(t)}function r_(t,e,n){return n(function(){i_(e)&&s_(t)})}function i_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function s_(t){var e=Nn(t,1);e!==null&&Kt(e,t,1,-1)}function Um(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=gS.bind(null,Te,t),[e.memoizedState,t]}function go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function o_(){return Ft().memoizedState}function za(t,e,n,r){var i=Zt();Te.flags|=t,i.memoizedState=go(1|e,n,void 0,r===void 0?null:r)}function eu(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&jd(r,o.deps)){i.memoizedState=go(e,n,s,r);return}}Te.flags|=t,i.memoizedState=go(1|e,n,s,r)}function zm(t,e){return za(8390656,8,t,e)}function zd(t,e){return eu(2048,8,t,e)}function a_(t,e){return eu(4,2,t,e)}function l_(t,e){return eu(4,4,t,e)}function u_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c_(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,u_.bind(null,e,t),n)}function Bd(){}function h_(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function d_(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function f_(t,e,n){return Fr&21?(Qt(n,e)||(n=vv(),Te.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function pS(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=_c.transition;_c.transition={};try{t(!1),e()}finally{ue=n,_c.transition=r}}function p_(){return Ft().memoizedState}function mS(t,e,n){var r=or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m_(t))g_(e,n);else if(n=Yv(t,e,n,r),n!==null){var i=dt();Kt(n,t,r,i),y_(n,e,r)}}function gS(t,e,n){var r=or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m_(t))g_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Qt(l,o)){var u=e.interleaved;u===null?(i.next=i,bd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Yv(t,e,i,r),n!==null&&(i=dt(),Kt(n,t,r,i),y_(n,e,r))}}function m_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function g_(t,e){Ws=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_d(t,n)}}var El={readContext:jt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},yS={readContext:jt,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:zm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,za(4194308,4,u_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return za(4194308,4,t,e)},useInsertionEffect:function(t,e){return za(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mS.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:Um,useDebugValue:Bd,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Um(!1),e=t[0];return t=pS.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=Zt();if(ve){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Fe===null)throw Error(z(349));Fr&30||t_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zm(r_.bind(null,r,s,t),[t]),r.flags|=2048,go(9,n_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=Fe.identifierPrefix;if(ve){var n=En,r=wn;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vS={readContext:jt,useCallback:h_,useContext:jt,useEffect:zd,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:d_,useReducer:wc,useRef:o_,useState:function(){return wc(mo)},useDebugValue:Bd,useDeferredValue:function(t){var e=Ft();return f_(e,be.memoizedState,t)},useTransition:function(){var t=wc(mo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1},_S={readContext:jt,useCallback:h_,useContext:jt,useEffect:zd,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:d_,useReducer:Ec,useRef:o_,useState:function(){return Ec(mo)},useDebugValue:Bd,useDeferredValue:function(t){var e=Ft();return be===null?e.memoizedState=t:f_(e,be.memoizedState,t)},useTransition:function(){var t=Ec(mo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1};function Bt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=or(t),s=kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Kt(e,t,i,r),Fa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=or(t),s=kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Kt(e,t,i,r),Fa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=or(t),i=kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ir(t,i,r),e!==null&&(Kt(e,t,r,n),Fa(e,t,r))}};function Bm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(n,r)||!ao(i,s):!0}function v_(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=_t(e)?Mr:st.current,r=e.contextTypes,s=(r=r!=null)?Mi(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $m(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function _h(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Od(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=_t(e)?Mr:st.current,i.context=Mi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tu.enqueueReplaceState(i,i.state,null),vl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e){try{var n="",r=e;do n+=KT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wS=typeof WeakMap=="function"?WeakMap:Map;function __(t,e,n){n=kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Il||(Il=!0,xh=r),wh(t,e)},n}function w_(t,e,n){n=kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wh(t,e),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=OS.bind(null,t,e,n),e.then(t,t))}function Hm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kn(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var ES=Mn.ReactCurrentOwner,yt=!1;function ht(t,e,n,r){e.child=t===null?Qv(e,null,n,r):Fi(e,t.child,n,r)}function Km(t,e,n,r,i){n=n.render;var s=e.ref;return xi(e,i),r=Fd(t,e,n,r,s,i),n=Ud(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ve&&n&&Cd(e),e.flags|=1,ht(t,e,r,i),e.child)}function Gm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Yd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E_(t,e,s,r,i)):(t=Ha(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function E_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ao(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return Eh(t,e,n,r,i)}function T_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Ai,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Ai,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Ai,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Ai,It),It|=r;return ht(t,e,i,n),e.child}function I_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eh(t,e,n,r,i){var s=_t(n)?Mr:st.current;return s=Mi(e,s),xi(e,i),n=Fd(t,e,n,r,s,i),r=Ud(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ve&&r&&Cd(e),e.flags|=1,ht(t,e,n,i),e.child)}function Qm(t,e,n,r,i){if(_t(n)){var s=!0;fl(e)}else s=!1;if(xi(e,i),e.stateNode===null)Ba(t,e),v_(e,n,r),_h(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=jt(h):(h=_t(n)?Mr:st.current,h=Mi(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&$m(e,o,r,h),Wn=!1;var m=e.memoizedState;o.state=m,vl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||vt.current||Wn?(typeof f=="function"&&(vh(e,n,f,r),u=e.memoizedState),(l=Wn||Bm(e,n,l,r,m,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Bt(e.type,l),o.props=h,g=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=_t(n)?Mr:st.current,u=Mi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||m!==u)&&$m(e,o,r,u),Wn=!1,m=e.memoizedState,o.state=m,vl(e,r,o,i);var P=e.memoizedState;l!==g||m!==P||vt.current||Wn?(typeof A=="function"&&(vh(e,n,A,r),P=e.memoizedState),(h=Wn||Bm(e,n,h,r,m,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Th(t,e,n,r,s,i)}function Th(t,e,n,r,i,s){I_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Om(e,n,!1),Dn(t,e,s);r=e.stateNode,ES.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fi(e,t.child,null,s),e.child=Fi(e,null,l,s)):ht(t,e,l,s),e.memoizedState=r.state,i&&Om(e,n,!0),e.child}function S_(t){var e=t.stateNode;e.pendingContext?bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bm(t,e.context,!1),Vd(t,e.containerInfo)}function Ym(t,e,n,r,i){return ji(),Pd(i),e.flags|=256,ht(t,e,n,r),e.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function A_(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Ee,i&1),t===null)return gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=iu(o,r,0,null),t=Or(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sh(n),e.memoizedState=Ih,t):$d(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return TS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ar(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ar(l,s):(s=Or(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ih,r}return s=t.child,t=s.sibling,r=ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $d(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ea(t,e,n,r){return r!==null&&Pd(r),Fi(e,t.child,null,n),t=$d(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Tc(Error(z(422))),Ea(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=iu({mode:"visible",children:r.children},i,0,null),s=Or(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fi(e,t.child,null,o),e.child.memoizedState=Sh(o),e.memoizedState=Ih,s);if(!(e.mode&1))return Ea(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(z(419)),r=Tc(s,r,void 0),Ea(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),Kt(r,t,i,-1))}return Qd(),r=Tc(Error(z(421))),Ea(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=VS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=rr(i.nextSibling),kt=e,ve=!0,Wt=null,t!==null&&(Dt[bt++]=wn,Dt[bt++]=En,Dt[bt++]=jr,wn=t.id,En=t.overflow,jr=e),e=$d(e,r.children),e.flags|=4096,e)}function Xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yh(t.return,e,n)}function Ic(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function k_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xm(t,n,e);else if(t.tag===19)Xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_l(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ic(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_l(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IS(t,e,n){switch(e.tag){case 3:S_(e),ji();break;case 5:Jv(e);break;case 1:_t(e.type)&&fl(e);break;case 4:Vd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(gl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?A_(t,e,n):(de(Ee,Ee.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);de(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return k_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,T_(t,e,n)}return Dn(t,e,n)}var C_,Ah,R_,P_;C_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ah=function(){};R_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pr(nn.current);var s=null;switch(n){case"input":i=Kc(t,i),r=Kc(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=Yc(t,i),r=Yc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hl)}Jc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(eo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(eo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};P_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ks(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function SS(t,e,n){var r=e.pendingProps;switch(Rd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return _t(e.type)&&dl(),et(e),null;case 3:return r=e.stateNode,Ui(),ge(vt),ge(st),Md(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(bh(Wt),Wt=null))),Ah(t,e),et(e),null;case 5:Ld(e);var i=Pr(fo.current);if(n=e.type,t!==null&&e.stateNode!=null)R_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return et(e),null}if(t=Pr(nn.current),_a(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[co]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<bs.length;i++)me(bs[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":om(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":lm(r,s),me("invalid",r)}Jc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&va(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&va(r.textContent,l,t),i=["children",""+l]):eo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":ca(r),am(r,s,!0);break;case"textarea":ca(r),um(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[co]=r,C_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zc(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<bs.length;i++)me(bs[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":om(t,r),i=Kc(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),me("invalid",t);break;case"textarea":lm(t,r),i=Yc(t,r),me("invalid",t);break;default:i=r}Jc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?ov(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&iv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&to(t,u):typeof u=="number"&&to(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&fd(t,s,u,o))}switch(n){case"input":ca(t),am(t,r,!1);break;case"textarea":ca(t),um(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)P_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Pr(fo.current),Pr(nn.current),_a(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:va(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return et(e),null;case 13:if(ge(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&At!==null&&e.mode&1&&!(e.flags&128))Kv(),ji(),e.flags|=98560,s=!1;else if(s=_a(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[en]=e}else ji(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else Wt!==null&&(bh(Wt),Wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Ve===0&&(Ve=3):Qd())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return Ui(),Ah(t,e),t===null&&lo(e.stateNode.containerInfo),et(e),null;case 10:return Dd(e.type._context),et(e),null;case 17:return _t(e.type)&&dl(),et(e),null;case 19:if(ge(Ee),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ks(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_l(t),o!==null){for(e.flags|=128,ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Bi&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=_l(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return et(e),null}else 2*Pe()-s.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=Ee.current,de(Ee,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Gd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function AS(t,e){switch(Rd(e),e.tag){case 1:return _t(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),ge(vt),ge(st),Md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ld(e),null;case 13:if(ge(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));ji()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(Ee),null;case 4:return Ui(),null;case 10:return Dd(e.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var Ta=!1,rt=!1,kS=typeof WeakSet=="function"?WeakSet:Set,W=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function kh(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Jm=!1;function CS(t,e){if(uh=ll,t=Ov(),kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,m=null;t:for(;;){for(var A;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(A=g.firstChild)!==null;)m=g,g=A;for(;;){if(g===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++f===r&&(u=o),(A=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ch={focusedElem:t,selectionRange:n},ll=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var R=P.memoizedProps,b=P.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?R:Bt(e.type,R),b);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(N){Ce(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return P=Jm,Jm=!1,P}function Hs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kh(e,n,s)}i=i.next}while(i!==r)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x_(t){var e=t.alternate;e!==null&&(t.alternate=null,x_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[co],delete e[fh],delete e[uS],delete e[cS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N_(t){return t.tag===5||t.tag===3||t.tag===4}function Zm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}function Ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}var ze=null,$t=!1;function zn(t,e,n){for(n=n.child;n!==null;)D_(t,e,n),n=n.sibling}function D_(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:rt||Si(n,e);case 6:var r=ze,i=$t;ze=null,zn(t,e,n),ze=r,$t=i,ze!==null&&($t?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&($t?(t=ze,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),so(t)):gc(ze,n.stateNode));break;case 4:r=ze,i=$t,ze=n.stateNode.containerInfo,$t=!0,zn(t,e,n),ze=r,$t=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kh(n,e,o),i=i.next}while(i!==r)}zn(t,e,n);break;case 1:if(!rt&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,zn(t,e,n),rt=r):zn(t,e,n);break;default:zn(t,e,n)}}function eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kS),e.forEach(function(r){var i=LS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,$t=!1;break e;case 3:ze=l.stateNode.containerInfo,$t=!0;break e;case 4:ze=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(ze===null)throw Error(z(160));D_(s,o,i),ze=null,$t=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ce(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b_(e,t),e=e.sibling}function b_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),Jt(t),r&4){try{Hs(3,t,t.return),nu(3,t)}catch(R){Ce(t,t.return,R)}try{Hs(5,t,t.return)}catch(R){Ce(t,t.return,R)}}break;case 1:zt(e,t),Jt(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(zt(e,t),Jt(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var i=t.stateNode;try{to(i,"")}catch(R){Ce(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&tv(i,s),Zc(l,o);var h=Zc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?ov(i,g):f==="dangerouslySetInnerHTML"?iv(i,g):f==="children"?to(i,g):fd(i,f,g,h)}switch(l){case"input":Gc(i,s);break;case"textarea":nv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?ki(i,!!s.multiple,A,!1):m!==!!s.multiple&&(s.defaultValue!=null?ki(i,!!s.multiple,s.defaultValue,!0):ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[co]=s}catch(R){Ce(t,t.return,R)}}break;case 6:if(zt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ce(t,t.return,R)}}break;case 3:if(zt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(R){Ce(t,t.return,R)}break;case 4:zt(e,t),Jt(t);break;case 13:zt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qd=Pe())),r&4&&eg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(h=rt)||f,zt(e,t),rt=h):zt(e,t),Jt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(g=W=f;W!==null;){switch(m=W,A=m.child,m.tag){case 0:case 11:case 14:case 15:Hs(4,m,m.return);break;case 1:Si(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(R){Ce(r,n,R)}}break;case 5:Si(m,m.return);break;case 22:if(m.memoizedState!==null){ng(g);continue}}A!==null?(A.return=m,W=A):ng(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=sv("display",o))}catch(R){Ce(t,t.return,R)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(R){Ce(t,t.return,R)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:zt(e,t),Jt(t),r&4&&eg(t);break;case 21:break;default:zt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N_(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(to(i,""),r.flags&=-33);var s=Zm(t);Ph(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Zm(t);Rh(t,l,o);break;default:throw Error(z(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RS(t,e,n){W=t,O_(t)}function O_(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ta;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rt;l=Ta;var h=rt;if(Ta=o,(rt=u)&&!h)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?rg(i):u!==null?(u.return=o,W=u):rg(i);for(;s!==null;)W=s,O_(s),s=s.sibling;W=i,Ta=l,rt=h}tg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):tg(t)}}function tg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||nu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&so(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}rt||e.flags&512&&Ch(e)}catch(m){Ce(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function ng(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function rg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{Ch(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{Ch(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var PS=Math.ceil,Tl=Mn.ReactCurrentDispatcher,Wd=Mn.ReactCurrentOwner,Lt=Mn.ReactCurrentBatchConfig,oe=0,Fe=null,Ne=null,He=0,It=0,Ai=yr(0),Ve=0,yo=null,Ur=0,ru=0,Hd=0,qs=null,gt=null,qd=0,Bi=1/0,yn=null,Il=!1,xh=null,sr=null,Ia=!1,Xn=null,Sl=0,Ks=0,Nh=null,$a=-1,Wa=0;function dt(){return oe&6?Pe():$a!==-1?$a:$a=Pe()}function or(t){return t.mode&1?oe&2&&He!==0?He&-He:dS.transition!==null?(Wa===0&&(Wa=vv()),Wa):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Av(t.type)),t):1}function Kt(t,e,n,r){if(50<Ks)throw Ks=0,Nh=null,Error(z(185));xo(t,n,r),(!(oe&2)||t!==Fe)&&(t===Fe&&(!(oe&2)&&(ru|=n),Ve===4&&qn(t,He)),wt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Bi=Pe()+500,Zl&&vr()))}function wt(t,e){var n=t.callbackNode;dI(t,e);var r=al(t,t===Fe?He:0);if(r===0)n!==null&&dm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dm(n),e===1)t.tag===0?hS(ig.bind(null,t)):Wv(ig.bind(null,t)),aS(function(){!(oe&6)&&vr()}),n=null;else{switch(_v(r)){case 1:n=vd;break;case 4:n=gv;break;case 16:n=ol;break;case 536870912:n=yv;break;default:n=ol}n=B_(n,V_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V_(t,e){if($a=-1,Wa=0,oe&6)throw Error(z(327));var n=t.callbackNode;if(Ni()&&t.callbackNode!==n)return null;var r=al(t,t===Fe?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Al(t,r);else{e=r;var i=oe;oe|=2;var s=M_();(Fe!==t||He!==e)&&(yn=null,Bi=Pe()+500,br(t,e));do try{DS();break}catch(l){L_(t,l)}while(!0);Nd(),Tl.current=s,oe=i,Ne!==null?e=0:(Fe=null,He=0,e=Ve)}if(e!==0){if(e===2&&(i=ih(t),i!==0&&(r=i,e=Dh(t,i))),e===1)throw n=yo,br(t,0),qn(t,r),wt(t,Pe()),n;if(e===6)qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!xS(i)&&(e=Al(t,r),e===2&&(s=ih(t),s!==0&&(r=s,e=Dh(t,s))),e===1))throw n=yo,br(t,0),qn(t,r),wt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Ar(t,gt,yn);break;case 3:if(qn(t,r),(r&130023424)===r&&(e=qd+500-Pe(),10<e)){if(al(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dh(Ar.bind(null,t,gt,yn),e);break}Ar(t,gt,yn);break;case 4:if(qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*PS(r/1960))-r,10<r){t.timeoutHandle=dh(Ar.bind(null,t,gt,yn),r);break}Ar(t,gt,yn);break;case 5:Ar(t,gt,yn);break;default:throw Error(z(329))}}}return wt(t,Pe()),t.callbackNode===n?V_.bind(null,t):null}function Dh(t,e){var n=qs;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=Al(t,e),t!==2&&(e=gt,gt=n,e!==null&&bh(e)),t}function bh(t){gt===null?gt=t:gt.push.apply(gt,t)}function xS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qn(t,e){for(e&=~Hd,e&=~ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function ig(t){if(oe&6)throw Error(z(327));Ni();var e=al(t,0);if(!(e&1))return wt(t,Pe()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var r=ih(t);r!==0&&(e=r,n=Dh(t,r))}if(n===1)throw n=yo,br(t,0),qn(t,e),wt(t,Pe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,gt,yn),wt(t,Pe()),null}function Kd(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Bi=Pe()+500,Zl&&vr())}}function zr(t){Xn!==null&&Xn.tag===0&&!(oe&6)&&Ni();var e=oe;oe|=1;var n=Lt.transition,r=ue;try{if(Lt.transition=null,ue=1,t)return t()}finally{ue=r,Lt.transition=n,oe=e,!(oe&6)&&vr()}}function Gd(){It=Ai.current,ge(Ai)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oS(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Rd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Ui(),ge(vt),ge(st),Md();break;case 5:Ld(r);break;case 4:Ui();break;case 13:ge(Ee);break;case 19:ge(Ee);break;case 10:Dd(r.type._context);break;case 22:case 23:Gd()}n=n.return}if(Fe=t,Ne=t=ar(t.current,null),He=It=e,Ve=0,yo=null,Hd=ru=Ur=0,gt=qs=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rr=null}return t}function L_(t,e){do{var n=Ne;try{if(Nd(),Ua.current=El,wl){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wl=!1}if(Fr=0,je=be=Te=null,Ws=!1,po=0,Wd.current=null,n===null||n.return===null){Ve=1,yo=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Hm(o);if(A!==null){A.flags&=-257,qm(A,o,l,s,e),A.mode&1&&Wm(s,h,e),e=A,u=h;var P=e.updateQueue;if(P===null){var R=new Set;R.add(u),e.updateQueue=R}else P.add(u);break e}else{if(!(e&1)){Wm(s,h,e),Qd();break e}u=Error(z(426))}}else if(ve&&l.mode&1){var b=Hm(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),qm(b,o,l,s,e),Pd(zi(u,l));break e}}s=u=zi(u,l),Ve!==4&&(Ve=2),qs===null?qs=[s]:qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=__(s,u,e);jm(s,T);break e;case 1:l=u;var _=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(sr===null||!sr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=w_(s,l,e);jm(s,N);break e}}s=s.return}while(s!==null)}F_(n)}catch(M){e=M,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function M_(){var t=Tl.current;return Tl.current=El,t===null?El:t}function Qd(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Fe===null||!(Ur&268435455)&&!(ru&268435455)||qn(Fe,He)}function Al(t,e){var n=oe;oe|=2;var r=M_();(Fe!==t||He!==e)&&(yn=null,br(t,e));do try{NS();break}catch(i){L_(t,i)}while(!0);if(Nd(),oe=n,Tl.current=r,Ne!==null)throw Error(z(261));return Fe=null,He=0,Ve}function NS(){for(;Ne!==null;)j_(Ne)}function DS(){for(;Ne!==null&&!rI();)j_(Ne)}function j_(t){var e=z_(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?F_(t):Ne=e,Wd.current=null}function F_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AS(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Ne=null;return}}else if(n=SS(n,e,It),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Ve===0&&(Ve=5)}function Ar(t,e,n){var r=ue,i=Lt.transition;try{Lt.transition=null,ue=1,bS(t,e,n,r)}finally{Lt.transition=i,ue=r}return null}function bS(t,e,n,r){do Ni();while(Xn!==null);if(oe&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fI(t,s),t===Fe&&(Ne=Fe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ia||(Ia=!0,B_(ol,function(){return Ni(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=ue;ue=1;var l=oe;oe|=4,Wd.current=null,CS(t,n),b_(n,t),ZI(ch),ll=!!uh,ch=uh=null,t.current=n,RS(n),iI(),oe=l,ue=o,Lt.transition=s}else t.current=n;if(Ia&&(Ia=!1,Xn=t,Sl=i),s=t.pendingLanes,s===0&&(sr=null),aI(n.stateNode),wt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Il)throw Il=!1,t=xh,xh=null,t;return Sl&1&&t.tag!==0&&Ni(),s=t.pendingLanes,s&1?t===Nh?Ks++:(Ks=0,Nh=t):Ks=0,vr(),null}function Ni(){if(Xn!==null){var t=_v(Sl),e=Lt.transition,n=ue;try{if(Lt.transition=null,ue=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,Sl=0,oe&6)throw Error(z(331));var i=oe;for(oe|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Hs(8,f,s)}var g=f.child;if(g!==null)g.return=f,W=g;else for(;W!==null;){f=W;var m=f.sibling,A=f.return;if(x_(f),f===h){W=null;break}if(m!==null){m.return=A,W=m;break}W=A}}}var P=s.alternate;if(P!==null){var R=P.child;if(R!==null){P.child=null;do{var b=R.sibling;R.sibling=null,R=b}while(R!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hs(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,W=T;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=_;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nu(9,l)}}catch(M){Ce(l,l.return,M)}if(l===o){W=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,W=N;break e}W=l.return}}if(oe=i,vr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Gl,t)}catch{}r=!0}return r}finally{ue=n,Lt.transition=e}}return!1}function sg(t,e,n){e=zi(n,e),e=__(t,e,1),t=ir(t,e,1),e=dt(),t!==null&&(xo(t,1,e),wt(t,e))}function Ce(t,e,n){if(t.tag===3)sg(t,t,n);else for(;e!==null;){if(e.tag===3){sg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=zi(n,t),t=w_(e,t,1),e=ir(e,t,1),t=dt(),e!==null&&(xo(e,1,t),wt(e,t));break}}e=e.return}}function OS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(He&n)===n&&(Ve===4||Ve===3&&(He&130023424)===He&&500>Pe()-qd?br(t,0):Hd|=n),wt(t,e)}function U_(t,e){e===0&&(t.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var n=dt();t=Nn(t,e),t!==null&&(xo(t,e,n),wt(t,n))}function VS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),U_(t,n)}function LS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),U_(t,n)}var z_;z_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,IS(t,e,n);yt=!!(t.flags&131072)}else yt=!1,ve&&e.flags&1048576&&Hv(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ba(t,e),t=e.pendingProps;var i=Mi(e,st.current);xi(e,n),i=Fd(null,e,r,t,i,n);var s=Ud();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,fl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Od(e),i.updater=tu,e.stateNode=i,i._reactInternals=e,_h(e,r,t,n),e=Th(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Cd(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jS(r),t=Bt(r,t),i){case 0:e=Eh(null,e,r,t,n);break e;case 1:e=Qm(null,e,r,t,n);break e;case 11:e=Km(null,e,r,t,n);break e;case 14:e=Gm(null,e,r,Bt(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Eh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Qm(t,e,r,i,n);case 3:e:{if(S_(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Xv(t,e),vl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zi(Error(z(423)),e),e=Ym(t,e,r,n,i);break e}else if(r!==i){i=zi(Error(z(424)),e),e=Ym(t,e,r,n,i);break e}else for(At=rr(e.stateNode.containerInfo.firstChild),kt=e,ve=!0,Wt=null,n=Qv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ji(),r===i){e=Dn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return Jv(e),t===null&&gh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hh(r,i)?o=null:s!==null&&hh(r,s)&&(e.flags|=32),I_(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&gh(e),null;case 13:return A_(t,e,n);case 4:return Vd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fi(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Km(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(gl,r._currentValue),r._currentValue=o,s!==null)if(Qt(s.value,o)){if(s.children===i.children&&!vt.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=kn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),yh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xi(e,n),i=jt(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),Gm(t,e,r,i,n);case 15:return E_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Ba(t,e),e.tag=1,_t(r)?(t=!0,fl(e)):t=!1,xi(e,n),v_(e,r,i),_h(e,r,i,n),Th(null,e,r,!0,t,n);case 19:return k_(t,e,n);case 22:return T_(t,e,n)}throw Error(z(156,e.tag))};function B_(t,e){return mv(t,e)}function MS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new MS(t,e,n,r)}function Yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jS(t){if(typeof t=="function")return Yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===md)return 11;if(t===gd)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Yd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case mi:return Or(n.children,i,s,e);case pd:o=8,i|=8;break;case $c:return t=Vt(12,n,e,i|2),t.elementType=$c,t.lanes=s,t;case Wc:return t=Vt(13,n,e,i),t.elementType=Wc,t.lanes=s,t;case Hc:return t=Vt(19,n,e,i),t.elementType=Hc,t.lanes=s,t;case Jy:return iu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yy:o=10;break e;case Xy:o=9;break e;case md:o=11;break e;case gd:o=14;break e;case $n:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Or(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function iu(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=Jy,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xd(t,e,n,r,i,s,o,l,u){return t=new FS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Od(s),t}function US(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $_(t){if(!t)return dr;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(_t(n))return $v(t,n,e)}return e}function W_(t,e,n,r,i,s,o,l,u){return t=Xd(n,r,!0,t,i,s,o,l,u),t.context=$_(null),n=t.current,r=dt(),i=or(n),s=kn(r,i),s.callback=e??null,ir(n,s,i),t.current.lanes=i,xo(t,i,r),wt(t,r),t}function su(t,e,n,r){var i=e.current,s=dt(),o=or(i);return n=$_(n),e.context===null?e.context=n:e.pendingContext=n,e=kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(i,e,o),t!==null&&(Kt(t,i,o,s),Fa(t,i,o)),o}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jd(t,e){og(t,e),(t=t.alternate)&&og(t,e)}function zS(){return null}var H_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zd(t){this._internalRoot=t}ou.prototype.render=Zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));su(t,e,null,null)};ou.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){su(null,t,null,null)}),e[xn]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&Sv(t)}};function ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ag(){}function BS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=kl(o);s.call(h)}}var o=W_(e,r,t,0,null,!1,!1,"",ag);return t._reactRootContainer=o,t[xn]=o.current,lo(t.nodeType===8?t.parentNode:t),zr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=kl(u);l.call(h)}}var u=Xd(t,0,!1,null,null,!1,!1,"",ag);return t._reactRootContainer=u,t[xn]=u.current,lo(t.nodeType===8?t.parentNode:t),zr(function(){su(e,u,n,r)}),u}function lu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=kl(o);l.call(u)}}su(e,o,t,i)}else o=BS(n,e,t,i,r);return kl(o)}wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(_d(e,n|1),wt(e,Pe()),!(oe&6)&&(Bi=Pe()+500,vr()))}break;case 13:zr(function(){var r=Nn(t,1);if(r!==null){var i=dt();Kt(r,t,1,i)}}),Jd(t,1)}};wd=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=dt();Kt(e,t,134217728,n)}Jd(t,134217728)}};Ev=function(t){if(t.tag===13){var e=or(t),n=Nn(t,e);if(n!==null){var r=dt();Kt(n,t,e,r)}Jd(t,e)}};Tv=function(){return ue};Iv=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};th=function(t,e,n){switch(e){case"input":if(Gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jl(r);if(!i)throw Error(z(90));ev(r),Gc(r,i)}}}break;case"textarea":nv(t,n);break;case"select":e=n.value,e!=null&&ki(t,!!n.multiple,e,!1)}};uv=Kd;cv=zr;var $S={usingClientEntryPoint:!1,Events:[Do,_i,Jl,av,lv,Kd]},Cs={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WS={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fv(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||zS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{Gl=Sa.inject(WS),tn=Sa}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$S;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(e))throw Error(z(200));return US(t,e,null,n)};xt.createRoot=function(t,e){if(!ef(t))throw Error(z(299));var n=!1,r="",i=H_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xd(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,lo(t.nodeType===8?t.parentNode:t),new Zd(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=fv(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return zr(t)};xt.hydrate=function(t,e,n){if(!au(e))throw Error(z(200));return lu(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!ef(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=H_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=W_(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,lo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ou(e)};xt.render=function(t,e,n){if(!au(e))throw Error(z(200));return lu(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!au(t))throw Error(z(40));return t._reactRootContainer?(zr(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};xt.unstable_batchedUpdates=Kd;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!au(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return lu(t,e,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function q_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q_)}catch(t){console.error(t)}}q_(),qy.exports=xt;var HS=qy.exports,lg=HS;zc.createRoot=lg.createRoot,zc.hydrateRoot=lg.hydrateRoot;const K_=U.createContext(),qS=({children:t})=>{const[e,n]=U.useState(()=>localStorage.getItem("theme")||"dark");U.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const r=()=>{n(i=>i==="dark"?"light":"dark")};return p.jsx(K_.Provider,{value:{theme:e,toggleTheme:r},children:t})};var ug={};/**
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
 */const G_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},KS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(m=64)),r.push(n[f],n[g],n[m],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new GS;const m=s<<2|l>>4;if(r.push(m),h!==64){const A=l<<4&240|h>>2;if(r.push(A),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QS=function(t){const e=G_(t);return Q_.encodeByteArray(e,!0)},Cl=function(t){return QS(t).replace(/\./g,"")},Y_=function(t){try{return Q_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function YS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XS=()=>YS().__FIREBASE_DEFAULTS__,JS=()=>{if(typeof process>"u"||typeof ug>"u")return;const t=ug.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Y_(t[1]);return e&&JSON.parse(e)},uu=()=>{try{return XS()||JS()||ZS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},X_=t=>{var e,n;return(n=(e=uu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},e1=t=>{const e=X_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},J_=()=>{var t;return(t=uu())===null||t===void 0?void 0:t.config},Z_=t=>{var e;return(e=uu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class t1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function n1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cl(JSON.stringify(n)),Cl(JSON.stringify(o)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function r1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function i1(){var t;const e=(t=uu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function s1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function o1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a1(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function l1(){return!i1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function t0(){try{return typeof indexedDB=="object"}catch{return!1}}function n0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function u1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const c1="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=c1,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jr.prototype.create)}}class Jr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?h1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,l,r)}}function h1(t,e){return t.replace(d1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const d1=/\{\$([^}]+)}/g;function f1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cg(s)&&cg(o)){if(!vo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cg(t){return t!==null&&typeof t=="object"}/**
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
 */function Oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function p1(t,e){const n=new m1(t,e);return n.subscribe.bind(n)}class m1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");g1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kc),i.error===void 0&&(i.error=kc),i.complete===void 0&&(i.complete=kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function g1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kc(){}/**
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
 */const y1=1e3,v1=2,_1=4*60*60*1e3,w1=.5;function hg(t,e=y1,n=v1){const r=e*Math.pow(n,t),i=Math.round(w1*r*(Math.random()-.5)*2);return Math.min(_1,r+i)}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kr="[DEFAULT]";/**
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
 */class E1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new t1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(I1(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:T1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T1(t){return t===kr?void 0:t}function I1(t){return t.instantiationMode==="EAGER"}/**
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
 */class S1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new E1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const A1={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},k1=re.INFO,C1={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},R1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=C1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cu{constructor(e){this.name=e,this._logLevel=k1,this._logHandler=R1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const P1=(t,e)=>e.some(n=>t instanceof n);let dg,fg;function x1(){return dg||(dg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function N1(){return fg||(fg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const r0=new WeakMap,Oh=new WeakMap,i0=new WeakMap,Cc=new WeakMap,tf=new WeakMap;function D1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&r0.set(n,t)}).catch(()=>{}),tf.set(e,t),e}function b1(t){if(Oh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Oh.set(t,e)}let Vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||i0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O1(t){Vh=t(Vh)}function V1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rc(this),e,...n);return i0.set(r,e.sort?e.sort():[e]),lr(r)}:N1().includes(t)?function(...e){return t.apply(Rc(this),e),lr(r0.get(this))}:function(...e){return lr(t.apply(Rc(this),e))}}function L1(t){return typeof t=="function"?V1(t):(t instanceof IDBTransaction&&b1(t),P1(t,x1())?new Proxy(t,Vh):t)}function lr(t){if(t instanceof IDBRequest)return D1(t);if(Cc.has(t))return Cc.get(t);const e=L1(t);return e!==t&&(Cc.set(t,e),tf.set(e,t)),e}const Rc=t=>tf.get(t);function s0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(lr(o.result),u.oldVersion,u.newVersion,lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const M1=["get","getKey","getAll","getAllKeys","count"],j1=["put","add","delete","clear"],Pc=new Map;function pg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=j1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||M1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Pc.set(e,s),s}O1(t=>({...t,get:(e,n,r)=>pg(e,n)||t.get(e,n,r),has:(e,n)=>!!pg(e,n)||t.has(e,n)}));/**
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
 */class F1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(U1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function U1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lh="@firebase/app",mg="0.10.13";/**
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
 */const bn=new cu("@firebase/app"),z1="@firebase/app-compat",B1="@firebase/analytics-compat",$1="@firebase/analytics",W1="@firebase/app-check-compat",H1="@firebase/app-check",q1="@firebase/auth",K1="@firebase/auth-compat",G1="@firebase/database",Q1="@firebase/data-connect",Y1="@firebase/database-compat",X1="@firebase/functions",J1="@firebase/functions-compat",Z1="@firebase/installations",eA="@firebase/installations-compat",tA="@firebase/messaging",nA="@firebase/messaging-compat",rA="@firebase/performance",iA="@firebase/performance-compat",sA="@firebase/remote-config",oA="@firebase/remote-config-compat",aA="@firebase/storage",lA="@firebase/storage-compat",uA="@firebase/firestore",cA="@firebase/vertexai-preview",hA="@firebase/firestore-compat",dA="firebase",fA="10.14.1";/**
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
 */const Mh="[DEFAULT]",pA={[Lh]:"fire-core",[z1]:"fire-core-compat",[$1]:"fire-analytics",[B1]:"fire-analytics-compat",[H1]:"fire-app-check",[W1]:"fire-app-check-compat",[q1]:"fire-auth",[K1]:"fire-auth-compat",[G1]:"fire-rtdb",[Q1]:"fire-data-connect",[Y1]:"fire-rtdb-compat",[X1]:"fire-fn",[J1]:"fire-fn-compat",[Z1]:"fire-iid",[eA]:"fire-iid-compat",[tA]:"fire-fcm",[nA]:"fire-fcm-compat",[rA]:"fire-perf",[iA]:"fire-perf-compat",[sA]:"fire-rc",[oA]:"fire-rc-compat",[aA]:"fire-gcs",[lA]:"fire-gcs-compat",[uA]:"fire-fst",[hA]:"fire-fst-compat",[cA]:"fire-vertex","fire-js":"fire-js",[dA]:"fire-js-all"};/**
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
 */const Rl=new Map,mA=new Map,jh=new Map;function gg(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if(jh.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,t);for(const n of Rl.values())gg(n,t);for(const n of mA.values())gg(n,t);return!0}function Zr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t.settings!==void 0}/**
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
 */const gA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new Jr("app","Firebase",gA);/**
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
 */class yA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const ts=fA;function o0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(n||(n=J_()),!n)throw ur.create("no-options");const s=Rl.get(i);if(s){if(vo(n,s.options)&&vo(r,s.config))return s;throw ur.create("duplicate-app",{appName:i})}const o=new S1(i);for(const u of jh.values())o.addComponent(u);const l=new yA(n,r,o);return Rl.set(i,l),l}function nf(t=Mh){const e=Rl.get(t);if(!e&&t===Mh&&J_())return o0();if(!e)throw ur.create("no-app",{appName:t});return e}function Mt(t,e,n){var r;let i=(r=pA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(l.join(" "));return}an(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vA="firebase-heartbeat-database",_A=1,_o="firebase-heartbeat-store";let xc=null;function a0(){return xc||(xc=s0(vA,_A,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_o)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),xc}async function wA(t){try{const n=(await a0()).transaction(_o),r=await n.objectStore(_o).get(l0(t));return await n.done,r}catch(e){if(e instanceof Xt)bn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function yg(t,e){try{const r=(await a0()).transaction(_o,"readwrite");await r.objectStore(_o).put(e,l0(t)),await r.done}catch(n){if(n instanceof Xt)bn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function l0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const EA=1024,TA=30*24*60*60*1e3;class IA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=TA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vg(),{heartbeatsToSend:r,unsentEntries:i}=SA(this._heartbeatsCache.heartbeats),s=Cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return bn.warn(n),""}}}function vg(){return new Date().toISOString().substring(0,10)}function SA(t,e=EA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_g(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_g(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t0()?n0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _g(t){return Cl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function kA(t){an(new Yt("platform-logger",e=>new F1(e),"PRIVATE")),an(new Yt("heartbeat",e=>new IA(e),"PRIVATE")),Mt(Lh,mg,t),Mt(Lh,mg,"esm2017"),Mt("fire-js","")}kA("");function rf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function u0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CA=u0,c0=new Jr("auth","Firebase",u0());/**
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
 */const Pl=new cu("@firebase/auth");function RA(t,...e){Pl.logLevel<=re.WARN&&Pl.warn(`Auth (${ts}): ${t}`,...e)}function qa(t,...e){Pl.logLevel<=re.ERROR&&Pl.error(`Auth (${ts}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw of(t,...e)}function Gt(t,...e){return of(t,...e)}function sf(t,e,n){const r=Object.assign(Object.assign({},CA()),{[e]:n});return new Jr("auth","Firebase",r).create(e,{appName:t.name})}function Vr(t){return sf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function PA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ln(t,"argument-error"),sf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function of(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return c0.create(t,...e)}function X(t,e,...n){if(!t)throw of(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function On(t,e){t||In(e)}/**
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
 */function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xA(){return wg()==="http:"||wg()==="https:"}function wg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function NA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xA()||e0()||"connection"in navigator)?navigator.onLine:!0}function DA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=r1()||o1()}get(){return NA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function af(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class h0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OA=new Vo(3e4,6e4);function lf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ns(t,e,n,r,i={}){return d0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Oo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return s1()||(h.referrerPolicy="no-referrer"),h0.fetch()(f0(t,t.config.apiHost,n,l),h)})}async function d0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bA),e);try{const i=new LA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Aa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw sf(t,f,h);ln(t,f)}}catch(i){if(i instanceof Xt)throw i;ln(t,"network-request-failed",{message:String(i)})}}async function VA(t,e,n,r,i={}){const s=await ns(t,e,n,r,i);return"mfaPendingCredential"in s&&ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function f0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?af(t.config,i):`${t.config.apiScheme}://${i}`}class LA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),OA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function MA(t,e){return ns(t,"POST","/v1/accounts:delete",e)}async function p0(t,e){return ns(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jA(t,e=!1){const n=at(t),r=await n.getIdToken(e),i=uf(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gs(Nc(i.auth_time)),issuedAtTime:Gs(Nc(i.iat)),expirationTime:Gs(Nc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nc(t){return Number(t)*1e3}function uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Y_(n);return i?JSON.parse(i):(qa("Failed to decode base64 JWT payload"),null)}catch(i){return qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Eg(t){const e=uf(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&FA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class UA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Uh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await wo(t,p0(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?m0(s.providerUserInfo):[],l=BA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Uh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function zA(t){const e=at(t);await xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function m0(t){return t.map(e=>{var{providerId:n}=e,r=rf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $A(t,e){const n=await d0(t,{},async()=>{const r=Oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=f0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",h0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WA(t,e){return ns(t,"POST","/v2/accounts:revokeToken",lf(t,e))}/**
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
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Eg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $A(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Di;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
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
 */function Bn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jA(this,e)}reload(){return zA(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Vr(this.auth));const e=await this.getIdToken();return await wo(this,MA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:N,isAnonymous:M,providerData:V,stsTokenManager:w}=n;X(I&&w,e,"internal-error");const y=Di.fromJSON(this.name,w);X(typeof I=="string",e,"internal-error"),Bn(g,e.name),Bn(m,e.name),X(typeof N=="boolean",e,"internal-error"),X(typeof M=="boolean",e,"internal-error"),Bn(A,e.name),Bn(P,e.name),Bn(R,e.name),Bn(b,e.name),Bn(T,e.name),Bn(_,e.name);const E=new Sn({uid:I,auth:e,email:m,emailVerified:N,displayName:g,isAnonymous:M,photoURL:P,phoneNumber:A,tenantId:R,stsTokenManager:y,createdAt:T,lastLoginAt:_});return V&&Array.isArray(V)&&(E.providerData=V.map(S=>Object.assign({},S))),b&&(E._redirectEventId=b),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Di;i.updateFromServerResponse(n);const s=new Sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?m0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Di;l.updateFromIdToken(r);const u=new Sn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Tg=new Map;function An(t){On(t instanceof Function,"Expected a class definition");let e=Tg.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tg.set(t,e),e)}/**
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
 */class g0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}g0.type="NONE";const Ig=g0;/**
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
 */function Ka(t,e,n){return`firebase:${t}:${e}:${n}`}class bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bi(An(Ig),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||An(Ig);const o=Ka(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const g=Sn._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new bi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new bi(s,e,r))}}/**
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
 */function Sg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(w0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T0(e))return"Blackberry";if(I0(e))return"Webos";if(v0(e))return"Safari";if((e.includes("chrome/")||_0(e))&&!e.includes("edge/"))return"Chrome";if(E0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function y0(t=ot()){return/firefox\//i.test(t)}function v0(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _0(t=ot()){return/crios\//i.test(t)}function w0(t=ot()){return/iemobile/i.test(t)}function E0(t=ot()){return/android/i.test(t)}function T0(t=ot()){return/blackberry/i.test(t)}function I0(t=ot()){return/webos/i.test(t)}function cf(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HA(t=ot()){var e;return cf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qA(){return a1()&&document.documentMode===10}function S0(t=ot()){return cf(t)||E0(t)||I0(t)||T0(t)||/windows phone/i.test(t)||w0(t)}/**
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
 */function A0(t,e=[]){let n;switch(t){case"Browser":n=Sg(ot());break;case"Worker":n=`${Sg(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${r}`}/**
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
 */class KA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function GA(t,e={}){return ns(t,"GET","/v2/passwordPolicy",lf(t,e))}/**
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
 */const QA=6;class YA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class XA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ag(this),this.idTokenSubscription=new Ag(this),this.beforeStateQueue=new KA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await p0(this,{idToken:e}),r=await Sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Vr(this));const n=e?at(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GA(this),n=new YA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await WA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await bi.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hu(t){return at(t)}class Ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=p1(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JA(t){hf=t}function ZA(t){return hf.loadJS(t)}function ek(){return hf.gapiScript}function tk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function nk(t,e){const n=Zr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vo(s,e??{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function rk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ik(t,e,n){const r=hu(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=k0(e),{host:o,port:l}=sk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ok()}function k0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sk(t){const e=k0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kg(o)}}}function kg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ok(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class C0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}/**
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
 */async function Oi(t,e){return VA(t,"POST","/v1/accounts:signInWithIdp",lf(t,e))}/**
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
 */const ak="http://localhost";class Br extends C0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Oi(e,n)}buildRequest(){const e={requestUri:ak,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oo(n)}return e}}/**
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
 */class df{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lo extends df{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends Lo{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class _n extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
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
 */class Gn extends Lo{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Qn extends Lo{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */class $i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sn._fromIdTokenResponse(e,r,i),o=Cg(r);return new $i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Cg(r);return new $i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Cg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Nl extends Xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nl(e,n,r,i)}}function R0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nl._fromErrorAndOperation(t,s,e,r):s})}async function lk(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $i._forOperation(t,"link",r)}/**
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
 */async function uk(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(Vr(r));const i="reauthenticate";try{const s=await wo(t,R0(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=uf(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),$i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),s}}/**
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
 */async function ck(t,e,n=!1){if(Tn(t.app))return Promise.reject(Vr(t));const r="signIn",i=await R0(t,r,e),s=await $i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
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
 */function hk(t,e){return at(t).setPersistence(e)}function dk(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function fk(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function pk(t,e,n,r){return at(t).onAuthStateChanged(e,n,r)}function mk(t){return at(t).signOut()}const Dl="__sak";/**
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
 */class P0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dl,"1"),this.storage.removeItem(Dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const gk=1e3,yk=10;class x0 extends P0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x0.type="LOCAL";const N0=x0;/**
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
 */class D0 extends P0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}D0.type="SESSION";const b0=D0;/**
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
 */function vk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class du{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new du(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await vk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}du.receivers=[];/**
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
 */function ff(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _k{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=ff("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function wk(t){rn().location.href=t}/**
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
 */function O0(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function Ek(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ik(){return O0()?self:null}/**
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
 */const V0="firebaseLocalStorageDb",Sk=1,bl="firebaseLocalStorage",L0="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fu(t,e){return t.transaction([bl],e?"readwrite":"readonly").objectStore(bl)}function Ak(){const t=indexedDB.deleteDatabase(V0);return new Mo(t).toPromise()}function zh(){const t=indexedDB.open(V0,Sk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bl,{keyPath:L0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bl)?e(r):(r.close(),await Ak(),e(await zh()))})})}async function Rg(t,e,n){const r=fu(t,!0).put({[L0]:e,value:n});return new Mo(r).toPromise()}async function kk(t,e){const n=fu(t,!1).get(e),r=await new Mo(n).toPromise();return r===void 0?null:r.value}function Pg(t,e){const n=fu(t,!0).delete(e);return new Mo(n).toPromise()}const Ck=800,Rk=3;class M0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return O0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=du._getInstance(Ik()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ek(),!this.activeServiceWorker)return;this.sender=new _k(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zh();return await Rg(e,Dl,"1"),await Pg(e,Dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fu(i,!1).getAll();return new Mo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M0.type="LOCAL";const Pk=M0;new Vo(3e4,6e4);/**
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
 */function j0(t,e){return e?An(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pf extends C0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xk(t){return ck(t.auth,new pf(t),t.bypassAuthState)}function Nk(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),uk(n,new pf(t),t.bypassAuthState)}async function Dk(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),lk(n,new pf(t),t.bypassAuthState)}/**
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
 */class F0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xk;case"linkViaPopup":case"linkViaRedirect":return Dk;case"reauthViaPopup":case"reauthViaRedirect":return Nk;default:ln(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bk=new Vo(2e3,1e4);async function Ok(t,e,n){if(Tn(t.app))return Promise.reject(Gt(t,"operation-not-supported-in-this-environment"));const r=hu(t);PA(t,e,df);const i=j0(r,n);return new xr(r,"signInViaPopup",e,i).executeNotNull()}class xr extends F0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bk.get())};e()}}xr.currentPopupAction=null;/**
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
 */const Vk="pendingRedirect",Ga=new Map;class Lk extends F0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ga.get(this.auth._key());if(!e){try{const r=await Mk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ga.set(this.auth._key(),e)}return this.bypassAuthState||Ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mk(t,e){const n=Uk(e),r=Fk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jk(t,e){Ga.set(t._key(),e)}function Fk(t){return An(t._redirectPersistence)}function Uk(t){return Ka(Vk,t.config.apiKey,t.name)}async function zk(t,e,n=!1){if(Tn(t.app))return Promise.reject(Vr(t));const r=hu(t),i=j0(r,e),o=await new Lk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Bk=10*60*1e3;class $k{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!U0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bk&&this.cachedEventUids.clear(),this.cachedEventUids.has(xg(e))}saveEventToCache(e){this.cachedEventUids.add(xg(e)),this.lastProcessedEventTime=Date.now()}}function xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U0(t);default:return!1}}/**
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
 */async function Hk(t,e={}){return ns(t,"GET","/v1/projects",e)}/**
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
 */const qk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kk=/^https?/;async function Gk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hk(t);for(const n of e)try{if(Qk(n))return}catch{}ln(t,"unauthorized-domain")}function Qk(t){const e=Fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kk.test(n))return!1;if(qk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Yk=new Vo(3e4,6e4);function Ng(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xk(t){return new Promise((e,n)=>{var r,i,s;function o(){Ng(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ng(),n(Gt(t,"network-request-failed"))},timeout:Yk.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const l=tk("iframefcb");return rn()[l]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},ZA(`${ek()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Qa=null,e})}let Qa=null;function Jk(t){return Qa=Qa||Xk(t),Qa}/**
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
 */const Zk=new Vo(5e3,15e3),eC="__/auth/iframe",tC="emulator/auth/iframe",nC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iC(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?af(e,tC):`https://${t.config.authDomain}/${eC}`,r={apiKey:e.apiKey,appName:t.name,v:ts},i=rC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Oo(r).slice(1)}`}async function sC(t){const e=await Jk(t),n=rn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:iC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),l=rn().setTimeout(()=>{s(o)},Zk.get());function u(){rn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const oC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aC=500,lC=600,uC="_blank",cC="http://localhost";class Dg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hC(t,e,n,r=aC,i=lC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},oC),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ot().toLowerCase();n&&(l=_0(h)?uC:n),y0(h)&&(e=e||cC,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[A,P])=>`${m}${A}=${P},`,"");if(HA(h)&&l!=="_self")return dC(e||"",l),new Dg(null);const g=window.open(e||"",l,f);X(g,t,"popup-blocked");try{g.focus()}catch{}return new Dg(g)}function dC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const fC="__/auth/handler",pC="emulator/auth/handler",mC=encodeURIComponent("fac");async function bg(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ts,eventId:i};if(e instanceof df){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",f1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Lo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${mC}=${encodeURIComponent(u)}`:"";return`${gC(t)}?${Oo(l).slice(1)}${h}`}function gC({config:t}){return t.emulator?af(t,pC):`https://${t.authDomain}/${fC}`}/**
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
 */const Dc="webStorageSupport";class yC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b0,this._completeRedirectFn=zk,this._overrideRedirectResult=jk}async _openPopup(e,n,r,i){var s;On((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bg(e,n,r,Fh(),i);return hC(e,o,ff())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bg(e,n,r,Fh(),i);return wk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sC(e),r=new $k(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dc];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return S0()||v0()||cf()}}const vC=yC;var Og="@firebase/auth",Vg="1.7.9";/**
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
 */class _C{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EC(t){an(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A0(t)},h=new XA(r,i,s,u);return rk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),an(new Yt("auth-internal",e=>{const n=hu(e.getProvider("auth").getImmediate());return(r=>new _C(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Og,Vg,wC(t)),Mt(Og,Vg,"esm2017")}/**
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
 */const TC=5*60,IC=Z_("authIdTokenMaxAge")||TC;let Lg=null;const SC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IC)return;const i=n==null?void 0:n.token;Lg!==i&&(Lg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function AC(t=nf()){const e=Zr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nk(t,{popupRedirectResolver:vC,persistence:[Pk,N0,b0]}),r=Z_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=SC(s.toString());fk(n,o,()=>o(n.currentUser)),dk(n,l=>o(l))}}const i=X_("auth");return i&&ik(n,`http://${i}`),n}function kC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EC("Browser");var CC="firebase",RC="10.14.1";/**
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
 */Mt(CC,RC,"app");var Mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,z0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function E(){}E.prototype=y.prototype,w.D=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(S,C,x){for(var k=Array(arguments.length-2),De=2;De<arguments.length;De++)k[De-2]=arguments[De];return y.prototype[C].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,E){E||(E=0);var S=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)S[C]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(C=0;16>C;++C)S[C]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],C=w.g[2];var x=w.g[3],k=y+(x^E&(C^x))+S[0]+3614090360&4294967295;y=E+(k<<7&4294967295|k>>>25),k=x+(C^y&(E^C))+S[1]+3905402710&4294967295,x=y+(k<<12&4294967295|k>>>20),k=C+(E^x&(y^E))+S[2]+606105819&4294967295,C=x+(k<<17&4294967295|k>>>15),k=E+(y^C&(x^y))+S[3]+3250441966&4294967295,E=C+(k<<22&4294967295|k>>>10),k=y+(x^E&(C^x))+S[4]+4118548399&4294967295,y=E+(k<<7&4294967295|k>>>25),k=x+(C^y&(E^C))+S[5]+1200080426&4294967295,x=y+(k<<12&4294967295|k>>>20),k=C+(E^x&(y^E))+S[6]+2821735955&4294967295,C=x+(k<<17&4294967295|k>>>15),k=E+(y^C&(x^y))+S[7]+4249261313&4294967295,E=C+(k<<22&4294967295|k>>>10),k=y+(x^E&(C^x))+S[8]+1770035416&4294967295,y=E+(k<<7&4294967295|k>>>25),k=x+(C^y&(E^C))+S[9]+2336552879&4294967295,x=y+(k<<12&4294967295|k>>>20),k=C+(E^x&(y^E))+S[10]+4294925233&4294967295,C=x+(k<<17&4294967295|k>>>15),k=E+(y^C&(x^y))+S[11]+2304563134&4294967295,E=C+(k<<22&4294967295|k>>>10),k=y+(x^E&(C^x))+S[12]+1804603682&4294967295,y=E+(k<<7&4294967295|k>>>25),k=x+(C^y&(E^C))+S[13]+4254626195&4294967295,x=y+(k<<12&4294967295|k>>>20),k=C+(E^x&(y^E))+S[14]+2792965006&4294967295,C=x+(k<<17&4294967295|k>>>15),k=E+(y^C&(x^y))+S[15]+1236535329&4294967295,E=C+(k<<22&4294967295|k>>>10),k=y+(C^x&(E^C))+S[1]+4129170786&4294967295,y=E+(k<<5&4294967295|k>>>27),k=x+(E^C&(y^E))+S[6]+3225465664&4294967295,x=y+(k<<9&4294967295|k>>>23),k=C+(y^E&(x^y))+S[11]+643717713&4294967295,C=x+(k<<14&4294967295|k>>>18),k=E+(x^y&(C^x))+S[0]+3921069994&4294967295,E=C+(k<<20&4294967295|k>>>12),k=y+(C^x&(E^C))+S[5]+3593408605&4294967295,y=E+(k<<5&4294967295|k>>>27),k=x+(E^C&(y^E))+S[10]+38016083&4294967295,x=y+(k<<9&4294967295|k>>>23),k=C+(y^E&(x^y))+S[15]+3634488961&4294967295,C=x+(k<<14&4294967295|k>>>18),k=E+(x^y&(C^x))+S[4]+3889429448&4294967295,E=C+(k<<20&4294967295|k>>>12),k=y+(C^x&(E^C))+S[9]+568446438&4294967295,y=E+(k<<5&4294967295|k>>>27),k=x+(E^C&(y^E))+S[14]+3275163606&4294967295,x=y+(k<<9&4294967295|k>>>23),k=C+(y^E&(x^y))+S[3]+4107603335&4294967295,C=x+(k<<14&4294967295|k>>>18),k=E+(x^y&(C^x))+S[8]+1163531501&4294967295,E=C+(k<<20&4294967295|k>>>12),k=y+(C^x&(E^C))+S[13]+2850285829&4294967295,y=E+(k<<5&4294967295|k>>>27),k=x+(E^C&(y^E))+S[2]+4243563512&4294967295,x=y+(k<<9&4294967295|k>>>23),k=C+(y^E&(x^y))+S[7]+1735328473&4294967295,C=x+(k<<14&4294967295|k>>>18),k=E+(x^y&(C^x))+S[12]+2368359562&4294967295,E=C+(k<<20&4294967295|k>>>12),k=y+(E^C^x)+S[5]+4294588738&4294967295,y=E+(k<<4&4294967295|k>>>28),k=x+(y^E^C)+S[8]+2272392833&4294967295,x=y+(k<<11&4294967295|k>>>21),k=C+(x^y^E)+S[11]+1839030562&4294967295,C=x+(k<<16&4294967295|k>>>16),k=E+(C^x^y)+S[14]+4259657740&4294967295,E=C+(k<<23&4294967295|k>>>9),k=y+(E^C^x)+S[1]+2763975236&4294967295,y=E+(k<<4&4294967295|k>>>28),k=x+(y^E^C)+S[4]+1272893353&4294967295,x=y+(k<<11&4294967295|k>>>21),k=C+(x^y^E)+S[7]+4139469664&4294967295,C=x+(k<<16&4294967295|k>>>16),k=E+(C^x^y)+S[10]+3200236656&4294967295,E=C+(k<<23&4294967295|k>>>9),k=y+(E^C^x)+S[13]+681279174&4294967295,y=E+(k<<4&4294967295|k>>>28),k=x+(y^E^C)+S[0]+3936430074&4294967295,x=y+(k<<11&4294967295|k>>>21),k=C+(x^y^E)+S[3]+3572445317&4294967295,C=x+(k<<16&4294967295|k>>>16),k=E+(C^x^y)+S[6]+76029189&4294967295,E=C+(k<<23&4294967295|k>>>9),k=y+(E^C^x)+S[9]+3654602809&4294967295,y=E+(k<<4&4294967295|k>>>28),k=x+(y^E^C)+S[12]+3873151461&4294967295,x=y+(k<<11&4294967295|k>>>21),k=C+(x^y^E)+S[15]+530742520&4294967295,C=x+(k<<16&4294967295|k>>>16),k=E+(C^x^y)+S[2]+3299628645&4294967295,E=C+(k<<23&4294967295|k>>>9),k=y+(C^(E|~x))+S[0]+4096336452&4294967295,y=E+(k<<6&4294967295|k>>>26),k=x+(E^(y|~C))+S[7]+1126891415&4294967295,x=y+(k<<10&4294967295|k>>>22),k=C+(y^(x|~E))+S[14]+2878612391&4294967295,C=x+(k<<15&4294967295|k>>>17),k=E+(x^(C|~y))+S[5]+4237533241&4294967295,E=C+(k<<21&4294967295|k>>>11),k=y+(C^(E|~x))+S[12]+1700485571&4294967295,y=E+(k<<6&4294967295|k>>>26),k=x+(E^(y|~C))+S[3]+2399980690&4294967295,x=y+(k<<10&4294967295|k>>>22),k=C+(y^(x|~E))+S[10]+4293915773&4294967295,C=x+(k<<15&4294967295|k>>>17),k=E+(x^(C|~y))+S[1]+2240044497&4294967295,E=C+(k<<21&4294967295|k>>>11),k=y+(C^(E|~x))+S[8]+1873313359&4294967295,y=E+(k<<6&4294967295|k>>>26),k=x+(E^(y|~C))+S[15]+4264355552&4294967295,x=y+(k<<10&4294967295|k>>>22),k=C+(y^(x|~E))+S[6]+2734768916&4294967295,C=x+(k<<15&4294967295|k>>>17),k=E+(x^(C|~y))+S[13]+1309151649&4294967295,E=C+(k<<21&4294967295|k>>>11),k=y+(C^(E|~x))+S[4]+4149444226&4294967295,y=E+(k<<6&4294967295|k>>>26),k=x+(E^(y|~C))+S[11]+3174756917&4294967295,x=y+(k<<10&4294967295|k>>>22),k=C+(y^(x|~E))+S[2]+718787259&4294967295,C=x+(k<<15&4294967295|k>>>17),k=E+(x^(C|~y))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+x&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var E=y-this.blockSize,S=this.B,C=this.h,x=0;x<y;){if(C==0)for(;x<=E;)i(this,w,x),x+=this.blockSize;if(typeof w=="string"){for(;x<y;)if(S[C++]=w.charCodeAt(x++),C==this.blockSize){i(this,S),C=0;break}}else for(;x<y;)if(S[C++]=w[x++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var E=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=E&255,E/=256;for(this.u(w),w=Array(16),y=E=0;4>y;++y)for(var S=0;32>S;S+=8)w[E++]=this.g[y]>>>S&255;return w};function s(w,y){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function o(w,y){this.h=y;for(var E=[],S=!0,C=w.length-1;0<=C;C--){var x=w[C]|0;S&&x==y||(E[C]=x,S=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return b(h(-w));for(var y=[],E=1,S=0;w>=E;S++)y[S]=w/E|0,E*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return b(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),S=g,C=0;C<w.length;C+=8){var x=Math.min(8,w.length-C),k=parseInt(w.substring(C,C+x),y);8>x?(x=h(Math.pow(y,x)),S=S.j(x).add(h(k))):(S=S.j(E),S=S.add(h(k)))}return S}var g=u(0),m=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-b(this).m();for(var w=0,y=1,E=0;E<this.g.length;E++){var S=this.i(E);w+=(0<=S?S:4294967296+S)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(R(this))return"-"+b(this).toString(w);for(var y=h(Math.pow(w,6)),E=this,S="";;){var C=N(E,y).g;E=T(E,C.j(y));var x=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=C,P(E))return x+S;for(;6>x.length;)x="0"+x;S=x+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function R(w){return w.h==-1}t.l=function(w){return w=T(this,w),R(w)?-1:P(w)?0:1};function b(w){for(var y=w.g.length,E=[],S=0;S<y;S++)E[S]=~w.g[S];return new o(E,~w.h).add(m)}t.abs=function(){return R(this)?b(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0,C=0;C<=y;C++){var x=S+(this.i(C)&65535)+(w.i(C)&65535),k=(x>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);S=k>>>16,x&=65535,k&=65535,E[C]=k<<16|x}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(w,y){return w.add(b(y))}t.j=function(w){if(P(this)||P(w))return g;if(R(this))return R(w)?b(this).j(b(w)):b(b(this).j(w));if(R(w))return b(this.j(b(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,E=[],S=0;S<2*y;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<w.g.length;C++){var x=this.i(S)>>>16,k=this.i(S)&65535,De=w.i(C)>>>16,fe=w.i(C)&65535;E[2*S+2*C]+=k*fe,_(E,2*S+2*C),E[2*S+2*C+1]+=x*fe,_(E,2*S+2*C+1),E[2*S+2*C+1]+=k*De,_(E,2*S+2*C+1),E[2*S+2*C+2]+=x*De,_(E,2*S+2*C+2)}for(S=0;S<y;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=y;S<2*y;S++)E[S]=0;return new o(E,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function I(w,y){this.g=w,this.h=y}function N(w,y){if(P(y))throw Error("division by zero");if(P(w))return new I(g,g);if(R(w))return y=N(b(w),y),new I(b(y.g),b(y.h));if(R(y))return y=N(w,b(y)),new I(b(y.g),y.h);if(30<w.g.length){if(R(w)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,S=y;0>=S.l(w);)E=M(E),S=M(S);var C=V(E,1),x=V(S,1);for(S=V(S,2),E=V(E,2);!P(S);){var k=x.add(S);0>=k.l(w)&&(C=C.add(E),x=k),S=V(S,1),E=V(E,1)}return y=T(w,C.j(y)),new I(C,y)}for(C=g;0<=w.l(y);){for(E=Math.max(1,Math.floor(w.m()/y.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),x=h(E),k=x.j(y);R(k)||0<k.l(w);)E-=S,x=h(E),k=x.j(y);P(x)&&(x=m),C=C.add(x),w=T(w,k)}return new I(C,w)}t.A=function(w){return N(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)&w.i(S);return new o(E,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)|w.i(S);return new o(E,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)^w.i(S);return new o(E,this.h^w.h)};function M(w){for(var y=w.g.length+1,E=[],S=0;S<y;S++)E[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(E,w.h)}function V(w,y){var E=y>>5;y%=32;for(var S=w.g.length-E,C=[],x=0;x<S;x++)C[x]=0<y?w.i(x+E)>>>y|w.i(x+E+1)<<32-y:w.i(x+E);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,z0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Lr=o}).apply(typeof Mg<"u"?Mg:typeof self<"u"?self:typeof window<"u"?window:{});var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B0,Os,$0,Ya,Bh,W0,H0,q0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ka=="object"&&ka];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var D=a[v];if(!(D in d))break e;d=d[D]}a=a[a.length-1],v=d[a],c=c(v),c!=v&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,v=!1,D={next:function(){if(!v&&d<a.length){var O=d++;return{value:c(O,a[O]),done:!1}}return v=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,v),a.apply(c,D)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,m.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var v=d.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(v,D,O){for(var B=Array(arguments.length-2),he=2;he<arguments.length;he++)B[he-2]=arguments[he];return c.prototype[D].apply(v,B)}}function R(a){const c=a.length;if(0<c){const d=Array(c);for(let v=0;v<c;v++)d[v]=a[v];return d}return[]}function b(a,c){for(let d=1;d<arguments.length;d++){const v=arguments[d];if(u(v)){const D=a.length||0,O=v.length||0;a.length=D+O;for(let B=0;B<O;B++)a[D+B]=v[B]}else a.push(v)}}class T{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var M=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function V(a,c,d){for(const v in a)c.call(d,a[v],v,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let d,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(d in v)a[d]=v[d];for(let O=0;O<E.length;O++)d=E[O],Object.prototype.hasOwnProperty.call(v,d)&&(a[d]=v[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function k(){var a=$;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class De{constructor(){this.h=this.g=null}add(c,d){const v=fe.get();v.set(c,d),this.h?this.h.next=v:this.g=v,this.h=v}}var fe=new T(()=>new Ae,a=>a.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,L=!1,$=new De,H=()=>{const a=l.Promise.resolve(void 0);mt=()=>{a.then(Y)}};var Y=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(d){x(d)}var c=fe;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}L=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Qe(a,c){if(se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(M){e:{try{N(c.nodeName);var D=!0;break e}catch{}D=!1}D||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:dn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Qe.aa.h.call(this)}}P(Qe,se);var dn={2:"touch",3:"pen",4:"mouse"};Qe.prototype.h=function(){Qe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fn="closure_listenable_"+(1e6*Math.random()|0),zE=0;function BE(a,c,d,v,D){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!v,this.ha=D,this.key=++zE,this.da=this.fa=!1}function Wo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ho(a){this.src=a,this.g={},this.h=0}Ho.prototype.add=function(a,c,d,v,D){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=Du(a,c,v,D);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new BE(c,this.src,O,!!v,D),c.fa=d,a.push(c)),c};function Nu(a,c){var d=c.type;if(d in a.g){var v=a.g[d],D=Array.prototype.indexOf.call(v,c,void 0),O;(O=0<=D)&&Array.prototype.splice.call(v,D,1),O&&(Wo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Du(a,c,d,v){for(var D=0;D<a.length;++D){var O=a[D];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==v)return D}return-1}var bu="closure_lm_"+(1e6*Math.random()|0),Ou={};function tp(a,c,d,v,D){if(Array.isArray(c)){for(var O=0;O<c.length;O++)tp(a,c[O],d,v,D);return null}return d=ip(d),a&&a[fn]?a.K(c,d,h(v)?!!v.capture:!1,D):$E(a,c,d,!1,v,D)}function $E(a,c,d,v,D,O){if(!c)throw Error("Invalid event type");var B=h(D)?!!D.capture:!!D,he=Lu(a);if(he||(a[bu]=he=new Ho(a)),d=he.add(c,d,v,B,O),d.proxy)return d;if(v=WE(),d.proxy=v,v.src=a,v.listener=d,a.addEventListener)ye||(D=B),D===void 0&&(D=!1),a.addEventListener(c.toString(),v,D);else if(a.attachEvent)a.attachEvent(rp(c.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return d}function WE(){function a(d){return c.call(a.src,a.listener,d)}const c=HE;return a}function np(a,c,d,v,D){if(Array.isArray(c))for(var O=0;O<c.length;O++)np(a,c[O],d,v,D);else v=h(v)?!!v.capture:!!v,d=ip(d),a&&a[fn]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],d=Du(O,d,v,D),-1<d&&(Wo(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Lu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Du(c,d,v,D)),(d=-1<a?c[a]:null)&&Vu(d))}function Vu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[fn])Nu(c.i,a);else{var d=a.type,v=a.proxy;c.removeEventListener?c.removeEventListener(d,v,a.capture):c.detachEvent?c.detachEvent(rp(d),v):c.addListener&&c.removeListener&&c.removeListener(v),(d=Lu(c))?(Nu(d,a),d.h==0&&(d.src=null,c[bu]=null)):Wo(a)}}}function rp(a){return a in Ou?Ou[a]:Ou[a]="on"+a}function HE(a,c){if(a.da)a=!0;else{c=new Qe(c,this);var d=a.listener,v=a.ha||a.src;a.fa&&Vu(a),a=d.call(v,c)}return a}function Lu(a){return a=a[bu],a instanceof Ho?a:null}var Mu="__closure_events_fn_"+(1e9*Math.random()>>>0);function ip(a){return typeof a=="function"?a:(a[Mu]||(a[Mu]=function(c){return a.handleEvent(c)}),a[Mu])}function Ye(){G.call(this),this.i=new Ho(this),this.M=this,this.F=null}P(Ye,G),Ye.prototype[fn]=!0,Ye.prototype.removeEventListener=function(a,c,d,v){np(this,a,c,d,v)};function lt(a,c){var d,v=a.F;if(v)for(d=[];v;v=v.F)d.push(v);if(a=a.M,v=c.type||c,typeof c=="string")c=new se(c,a);else if(c instanceof se)c.target=c.target||a;else{var D=c;c=new se(v,a),S(c,D)}if(D=!0,d)for(var O=d.length-1;0<=O;O--){var B=c.g=d[O];D=qo(B,v,!0,c)&&D}if(B=c.g=a,D=qo(B,v,!0,c)&&D,D=qo(B,v,!1,c)&&D,d)for(O=0;O<d.length;O++)B=c.g=d[O],D=qo(B,v,!1,c)&&D}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],v=0;v<d.length;v++)Wo(d[v]);delete a.g[c],a.h--}}this.F=null},Ye.prototype.K=function(a,c,d,v){return this.i.add(String(a),c,!1,d,v)},Ye.prototype.L=function(a,c,d,v){return this.i.add(String(a),c,!0,d,v)};function qo(a,c,d,v){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var D=!0,O=0;O<c.length;++O){var B=c[O];if(B&&!B.da&&B.capture==d){var he=B.listener,Ue=B.ha||B.src;B.fa&&Nu(a.i,B),D=he.call(Ue,v)!==!1&&D}}return D&&!v.defaultPrevented}function sp(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function op(a){a.g=sp(()=>{a.g=null,a.i&&(a.i=!1,op(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class qE extends G{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:op(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function as(a){G.call(this),this.h=a,this.g={}}P(as,G);var ap=[];function lp(a){V(a.g,function(c,d){this.g.hasOwnProperty(d)&&Vu(c)},a),a.g={}}as.prototype.N=function(){as.aa.N.call(this),lp(this)},as.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ju=l.JSON.stringify,KE=l.JSON.parse,GE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Fu(){}Fu.prototype.h=null;function up(a){return a.h||(a.h=a.i())}function cp(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Uu(){se.call(this,"d")}P(Uu,se);function zu(){se.call(this,"c")}P(zu,se);var _r={},hp=null;function Ko(){return hp=hp||new Ye}_r.La="serverreachability";function dp(a){se.call(this,_r.La,a)}P(dp,se);function us(a){const c=Ko();lt(c,new dp(c))}_r.STAT_EVENT="statevent";function fp(a,c){se.call(this,_r.STAT_EVENT,a),this.stat=c}P(fp,se);function ut(a){const c=Ko();lt(c,new fp(c,a))}_r.Ma="timingevent";function pp(a,c){se.call(this,_r.Ma,a),this.size=c}P(pp,se);function cs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function hs(){this.g=!0}hs.prototype.xa=function(){this.g=!1};function QE(a,c,d,v,D,O){a.info(function(){if(a.g)if(O)for(var B="",he=O.split("&"),Ue=0;Ue<he.length;Ue++){var ae=he[Ue].split("=");if(1<ae.length){var Xe=ae[0];ae=ae[1];var Je=Xe.split("_");B=2<=Je.length&&Je[1]=="type"?B+(Xe+"="+ae+"&"):B+(Xe+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+c+`
`+d+`
`+B})}function YE(a,c,d,v,D,O,B){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+c+`
`+d+`
`+O+" "+B})}function ii(a,c,d,v){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+JE(a,d)+(v?" "+v:"")})}function XE(a,c){a.info(function(){return"TIMEOUT: "+c})}hs.prototype.info=function(){};function JE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var v=d[a];if(!(2>v.length)){var D=v[1];if(Array.isArray(D)&&!(1>D.length)){var O=D[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<D.length;B++)D[B]=""}}}}return ju(d)}catch{return c}}var Go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bu;function Qo(){}P(Qo,Fu),Qo.prototype.g=function(){return new XMLHttpRequest},Qo.prototype.i=function(){return{}},Bu=new Qo;function jn(a,c,d,v){this.j=a,this.i=c,this.l=d,this.R=v||1,this.U=new as(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gp}function gp(){this.i=null,this.g="",this.h=!1}var yp={},$u={};function Wu(a,c,d){a.L=1,a.v=Zo(pn(c)),a.m=d,a.P=!0,vp(a,null)}function vp(a,c){a.F=Date.now(),Yo(a),a.A=pn(a.v);var d=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Dp(d.i,"t",v),a.C=0,d=a.j.J,a.h=new gp,a.g=Yp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new qE(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,v=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(ap[0]=D.toString()),D=ap);for(var O=0;O<D.length;O++){var B=tp(d,D[O],v||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),us(),QE(a.i,a.u,a.A,a.l,a.R,a.m)}jn.prototype.ca=function(a){a=a.target;const c=this.M;c&&mn(a)==3?c.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const Je=mn(this.g);var c=this.g.Ba();const ai=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||Fp(this.g)))){this.J||Je!=4||c==7||(c==8||0>=ai?us(3):us(2)),Hu(this);var d=this.g.Z();this.X=d;t:if(_p(this)){var v=Fp(this.g);a="";var D=v.length,O=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),ds(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<D;c++)this.h.h=!0,a+=this.h.i.decode(v[c],{stream:!(O&&c==D-1)});v.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,YE(this.i,this.u,this.A,this.l,this.R,Je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Ue=this.g;if((he=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(he)){var ae=he;break t}}ae=null}if(d=ae)ii(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qu(this,d);else{this.o=!1,this.s=3,ut(12),wr(this),ds(this);break e}}if(this.P){d=!0;let Ut;for(;!this.J&&this.C<B.length;)if(Ut=ZE(this,B),Ut==$u){Je==4&&(this.s=4,ut(14),d=!1),ii(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==yp){this.s=4,ut(15),ii(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else ii(this.i,this.l,Ut,null),qu(this,Ut);if(_p(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||B.length!=0||this.h.h||(this.s=1,ut(16),d=!1),this.o=this.o&&d,!d)ii(this.i,this.l,B,"[Invalid Chunked Response]"),wr(this),ds(this);else if(0<B.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ju(Xe),Xe.M=!0,ut(11))}}else ii(this.i,this.l,B,null),qu(this,B);Je==4&&wr(this),this.o&&!this.J&&(Je==4?qp(this.j,this):(this.o=!1,Yo(this)))}else gT(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),wr(this),ds(this)}}}catch{}finally{}};function _p(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ZE(a,c){var d=a.C,v=c.indexOf(`
`,d);return v==-1?$u:(d=Number(c.substring(d,v)),isNaN(d)?yp:(v+=1,v+d>c.length?$u:(c=c.slice(v,v+d),a.C=v+d,c)))}jn.prototype.cancel=function(){this.J=!0,wr(this)};function Yo(a){a.S=Date.now()+a.I,wp(a,a.I)}function wp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=cs(m(a.ba,a),c)}function Hu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(XE(this.i,this.A),this.L!=2&&(us(),ut(17)),wr(this),this.s=2,ds(this)):wp(this,this.S-a)};function ds(a){a.j.G==0||a.J||qp(a.j,a)}function wr(a){Hu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,lp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function qu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ku(d.h,a))){if(!a.K&&Ku(d.h,a)&&d.G==3){try{var v=d.Da.g.parse(c)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)sa(d),ra(d);else break e;Xu(d),ut(18)}}else d.za=D[1],0<d.za-d.T&&37500>D[2]&&d.F&&d.v==0&&!d.C&&(d.C=cs(m(d.Za,d),6e3));if(1>=Ip(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Tr(d,11)}else if((a.K||d.g==a)&&sa(d),!_(c))for(D=d.Da.g.parse(c),c=0;c<D.length;c++){let ae=D[c];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const Xe=ae[3];Xe!=null&&(d.la=Xe,d.j.info("VER="+d.la));const Je=ae[4];Je!=null&&(d.Aa=Je,d.j.info("SVER="+d.Aa));const ai=ae[5];ai!=null&&typeof ai=="number"&&0<ai&&(v=1.5*ai,d.L=v,d.j.info("backChannelRequestTimeoutMs_="+v)),v=d;const Ut=a.g;if(Ut){const aa=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(aa){var O=v.h;O.g||aa.indexOf("spdy")==-1&&aa.indexOf("quic")==-1&&aa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Gu(O,O.h),O.h=null))}if(v.D){const Zu=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Zu&&(v.ya=Zu,pe(v.I,v.D,Zu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),v=d;var B=a;if(v.qa=Qp(v,v.J?v.ia:null,v.W),B.K){Sp(v.h,B);var he=B,Ue=v.L;Ue&&(he.I=Ue),he.B&&(Hu(he),Yo(he)),v.g=B}else Wp(v);0<d.i.length&&ia(d)}else ae[0]!="stop"&&ae[0]!="close"||Tr(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Tr(d,7):Yu(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}us(4)}catch{}}var eT=class{constructor(a,c){this.g=a,this.map=c}};function Ep(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ip(a){return a.h?1:a.g?a.g.size:0}function Ku(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Gu(a,c){a.g?a.g.add(c):a.h=c}function Sp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Ep.prototype.cancel=function(){if(this.i=Ap(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ap(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return R(a.i)}function tT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,v=0;v<d;v++)c.push(a[v]);return c}c=[],d=0;for(v in a)c[d++]=a[v];return c}function nT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const v in a)c[d++]=v;return c}}}function kp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=nT(a),v=tT(a),D=v.length,O=0;O<D;O++)c.call(void 0,v[O],d&&d[O],a)}var Cp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rT(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var v=a[d].indexOf("="),D=null;if(0<=v){var O=a[d].substring(0,v);D=a[d].substring(v+1)}else O=a[d];c(O,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Er){this.h=a.h,Xo(this,a.j),this.o=a.o,this.g=a.g,Jo(this,a.s),this.l=a.l;var c=a.i,d=new ms;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Rp(this,d),this.m=a.m}else a&&(c=String(a).match(Cp))?(this.h=!1,Xo(this,c[1]||"",!0),this.o=fs(c[2]||""),this.g=fs(c[3]||"",!0),Jo(this,c[4]),this.l=fs(c[5]||"",!0),Rp(this,c[6]||"",!0),this.m=fs(c[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}Er.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ps(c,Pp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ps(c,Pp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ps(d,d.charAt(0)=="/"?oT:sT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ps(d,lT)),a.join("")};function pn(a){return new Er(a)}function Xo(a,c,d){a.j=d?fs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Jo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Rp(a,c,d){c instanceof ms?(a.i=c,uT(a.i,a.h)):(d||(c=ps(c,aT)),a.i=new ms(c,a.h))}function pe(a,c,d){a.i.set(c,d)}function Zo(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function fs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ps(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,iT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Pp=/[#\/\?@]/g,sT=/[#\?:]/g,oT=/[#\?]/g,aT=/[#\?@]/g,lT=/#/g;function ms(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&rT(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ms.prototype,t.add=function(a,c){Fn(this),this.i=null,a=si(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function xp(a,c){Fn(a),c=si(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Np(a,c){return Fn(a),c=si(a,c),a.g.has(c)}t.forEach=function(a,c){Fn(this),this.g.forEach(function(d,v){d.forEach(function(D){a.call(c,D,v,this)},this)},this)},t.na=function(){Fn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let v=0;v<c.length;v++){const D=a[v];for(let O=0;O<D.length;O++)d.push(c[v])}return d},t.V=function(a){Fn(this);let c=[];if(typeof a=="string")Np(this,a)&&(c=c.concat(this.g.get(si(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Fn(this),this.i=null,a=si(this,a),Np(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Dp(a,c,d){xp(a,c),0<d.length&&(a.i=null,a.g.set(si(a,c),R(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var v=c[d];const O=encodeURIComponent(String(v)),B=this.V(v);for(v=0;v<B.length;v++){var D=O;B[v]!==""&&(D+="="+encodeURIComponent(String(B[v]))),a.push(D)}}return this.i=a.join("&")};function si(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function uT(a,c){c&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(d,v){var D=v.toLowerCase();v!=D&&(xp(this,v),Dp(this,D,d))},a)),a.j=c}function cT(a,c){const d=new hs;if(l.Image){const v=new Image;v.onload=A(Un,d,"TestLoadImage: loaded",!0,c,v),v.onerror=A(Un,d,"TestLoadImage: error",!1,c,v),v.onabort=A(Un,d,"TestLoadImage: abort",!1,c,v),v.ontimeout=A(Un,d,"TestLoadImage: timeout",!1,c,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else c(!1)}function hT(a,c){const d=new hs,v=new AbortController,D=setTimeout(()=>{v.abort(),Un(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:v.signal}).then(O=>{clearTimeout(D),O.ok?Un(d,"TestPingServer: ok",!0,c):Un(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(D),Un(d,"TestPingServer: error",!1,c)})}function Un(a,c,d,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(d)}catch{}}function dT(){this.g=new GE}function fT(a,c,d){const v=d||"";try{kp(a,function(D,O){let B=D;h(D)&&(B=ju(D)),c.push(v+O+"="+encodeURIComponent(B))})}catch(D){throw c.push(v+"type="+encodeURIComponent("_badmap")),D}}function ea(a){this.l=a.Ub||null,this.j=a.eb||!1}P(ea,Fu),ea.prototype.g=function(){return new ta(this.l,this.j)},ea.prototype.i=function(a){return function(){return a}}({});function ta(a,c){Ye.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ta,Ye),t=ta.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function bp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?gs(this):ys(this),this.readyState==3&&bp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,gs(this))},t.Qa=function(a){this.g&&(this.response=a,gs(this))},t.ga=function(){this.g&&gs(this)};function gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ys(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Op(a){let c="";return V(a,function(d,v){c+=v,c+=":",c+=d,c+=`\r
`}),c}function Qu(a,c,d){e:{for(v in d){var v=!1;break e}v=!0}v||(d=Op(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):pe(a,c,d))}function ke(a){Ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ke,Ye);var pT=/^https?$/i,mT=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bu.g(),this.v=this.o?up(this.o):up(Bu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){Vp(this,O);return}if(a=d||"",d=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)d.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const O of v.keys())d.set(O,v.get(O));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(mT,c,void 0))||v||D||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of d)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Vp(this,O)}};function Vp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Lp(a),na(a)}function Lp(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),na(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),na(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Mp(this):this.bb())},t.bb=function(){Mp(this)};function Mp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mn(a)!=4||a.Z()!=2)){if(a.u&&mn(a)==4)sp(a.Ea,0,a);else if(lt(a,"readystatechange"),mn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var v;if(v=B===0){var D=String(a.D).match(Cp)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),v=!pT.test(D?D.toLowerCase():"")}d=v}if(d)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var O=2<mn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Lp(a)}}finally{na(a)}}}}function na(a,c){if(a.g){jp(a);const d=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||lt(a,"ready");try{d.onreadystatechange=v}catch{}}}function jp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),KE(c)}};function Fp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gT(a){const c={};a=(a.g&&2<=mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(_(a[v]))continue;var d=C(a[v]);const D=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[D]||[];c[D]=O,O.push(d)}w(c,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Up(a){this.Aa=0,this.i=[],this.j=new hs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vs("baseRetryDelayMs",5e3,a),this.cb=vs("retryDelaySeedMs",1e4,a),this.Wa=vs("forwardChannelMaxRetries",2,a),this.wa=vs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ep(a&&a.concurrentRequestLimit),this.Da=new dT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Up.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,v){ut(0),this.W=a,this.H=c||{},d&&v!==void 0&&(this.H.OSID=d,this.H.OAID=v),this.F=this.X,this.I=Qp(this,null,this.W),ia(this)};function Yu(a){if(zp(a),a.G==3){var c=a.U++,d=pn(a.I);if(pe(d,"SID",a.K),pe(d,"RID",c),pe(d,"TYPE","terminate"),_s(a,d),c=new jn(a,a.j,c),c.L=2,c.v=Zo(pn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Yp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Yo(c)}Gp(a)}function ra(a){a.g&&(Ju(a),a.g.cancel(),a.g=null)}function zp(a){ra(a),a.u&&(l.clearTimeout(a.u),a.u=null),sa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ia(a){if(!Tp(a.h)&&!a.s){a.s=!0;var c=a.Ga;mt||H(),L||(mt(),L=!0),$.add(c,a),a.B=0}}function yT(a,c){return Ip(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=cs(m(a.Ga,a,c),Kp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new jn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(D.H=O,O=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var v=this.i[d];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(c+=v,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=$p(this,D,c),d=pn(this.I),pe(d,"RID",a),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),_s(this,d),O&&(this.O?c="headers="+encodeURIComponent(String(Op(O)))+"&"+c:this.m&&Qu(d,this.m,O)),Gu(this.h,D),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",c),pe(d,"SID","null"),D.T=!0,Wu(D,d,null)):Wu(D,d,c),this.G=2}}else this.G==3&&(a?Bp(this,a):this.i.length==0||Tp(this.h)||Bp(this))};function Bp(a,c){var d;c?d=c.l:d=a.U++;const v=pn(a.I);pe(v,"SID",a.K),pe(v,"RID",d),pe(v,"AID",a.T),_s(a,v),a.m&&a.o&&Qu(v,a.m,a.o),d=new jn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=$p(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Gu(a.h,d),Wu(d,v,c)}function _s(a,c){a.H&&V(a.H,function(d,v){pe(c,v,d)}),a.l&&kp({},function(d,v){pe(c,v,d)})}function $p(a,c,d){d=Math.min(a.i.length,d);var v=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let O=-1;for(;;){const B=["count="+d];O==-1?0<d?(O=D[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let he=!0;for(let Ue=0;Ue<d;Ue++){let ae=D[Ue].g;const Xe=D[Ue].map;if(ae-=O,0>ae)O=Math.max(0,D[Ue].g-100),he=!1;else try{fT(Xe,B,"req"+ae+"_")}catch{v&&v(Xe)}}if(he){v=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,v}function Wp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;mt||H(),L||(mt(),L=!0),$.add(c,a),a.v=0}}function Xu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=cs(m(a.Fa,a),Kp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Hp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=cs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),ra(this),Hp(this))};function Ju(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Hp(a){a.g=new jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=pn(a.qa);pe(c,"RID","rpc"),pe(c,"SID",a.K),pe(c,"AID",a.T),pe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(c,"TO",a.ja),pe(c,"TYPE","xmlhttp"),_s(a,c),a.m&&a.o&&Qu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Zo(pn(c)),d.m=null,d.P=!0,vp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ra(this),Xu(this),ut(19))};function sa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function qp(a,c){var d=null;if(a.g==c){sa(a),Ju(a),a.g=null;var v=2}else if(Ku(a.h,c))d=c.D,Sp(a.h,c),v=1;else return;if(a.G!=0){if(c.o)if(v==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var D=a.B;v=Ko(),lt(v,new pp(v,d)),ia(a)}else Wp(a);else if(D=c.s,D==3||D==0&&0<c.X||!(v==1&&yT(a,c)||v==2&&Xu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),D){case 1:Tr(a,5);break;case 4:Tr(a,10);break;case 3:Tr(a,6);break;default:Tr(a,2)}}}function Kp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Tr(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),v=a.Xa;const D=!v;v=new Er(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Xo(v,"https"),Zo(v),D?cT(v.toString(),d):hT(v.toString(),d)}else ut(2);a.G=0,a.l&&a.l.sa(c),Gp(a),zp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Gp(a){if(a.G=0,a.ka=[],a.l){const c=Ap(a.h);(c.length!=0||a.i.length!=0)&&(b(a.ka,c),b(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Qp(a,c,d){var v=d instanceof Er?pn(d):new Er(d);if(v.g!="")c&&(v.g=c+"."+v.g),Jo(v,v.s);else{var D=l.location;v=D.protocol,c=c?c+"."+D.hostname:D.hostname,D=+D.port;var O=new Er(null);v&&Xo(O,v),c&&(O.g=c),D&&Jo(O,D),d&&(O.l=d),v=O}return d=a.D,c=a.ya,d&&c&&pe(v,d,c),pe(v,"VER",a.la),_s(a,v),v}function Yp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ke(new ea({eb:d})):new ke(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xp(){}t=Xp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function oa(){}oa.prototype.g=function(a,c){return new Tt(a,c)};function Tt(a,c){Ye.call(this),this.g=new Up(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new oi(this)}P(Tt,Ye),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Yu(this.g)},Tt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ju(a),a=d);c.i.push(new eT(c.Ya++,a)),c.G==3&&ia(c)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Yu(this.g),delete this.g,Tt.aa.N.call(this)};function Jp(a){Uu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(Jp,Uu);function Zp(){zu.call(this),this.status=1}P(Zp,zu);function oi(a){this.g=a}P(oi,Xp),oi.prototype.ua=function(){lt(this.g,"a")},oi.prototype.ta=function(a){lt(this.g,new Jp(a))},oi.prototype.sa=function(a){lt(this.g,new Zp)},oi.prototype.ra=function(){lt(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,q0=function(){return new oa},H0=function(){return Ko()},W0=_r,Bh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Go.NO_ERROR=0,Go.TIMEOUT=8,Go.HTTP_ERROR=6,Ya=Go,mp.COMPLETE="complete",$0=mp,cp.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,Os=cp,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,B0=ke}).apply(typeof ka<"u"?ka:typeof self<"u"?self:typeof window<"u"?window:{});const jg="@firebase/firestore";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let rs="10.14.0";/**
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
 */const $r=new cu("@firebase/firestore");function Rs(){return $r.logLevel}function q(t,...e){if($r.logLevel<=re.DEBUG){const n=e.map(mf);$r.debug(`Firestore (${rs}): ${t}`,...n)}}function Vn(t,...e){if($r.logLevel<=re.ERROR){const n=e.map(mf);$r.error(`Firestore (${rs}): ${t}`,...n)}}function Wi(t,...e){if($r.logLevel<=re.WARN){const n=e.map(mf);$r.warn(`Firestore (${rs}): ${t}`,...n)}}function mf(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function ce(t,e){t||J()}function ee(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class K0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class xC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NC{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new K0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new nt(e)}}class DC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new DC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new OC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function LC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class G0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=LC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Hi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Le(0,0))}static max(){return new Z(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Eo{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Eo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Eo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends Eo{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const MC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Eo{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return MC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(_e.fromString(e))}static fromName(e){return new Q(_e.fromString(e).popFirst(5))}static empty(){return new Q(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new _e(e.slice()))}}function jC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new fr(i,Q.empty(),e)}function FC(t){return new fr(t.readTime,t.key,-1)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(Z.min(),Q.empty(),-1)}static max(){return new fr(Z.max(),Q.empty(),-1)}}function UC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const zC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function jo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==zC)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $C(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class gf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gf.oe=-1;function pu(t){return t==null}function Ol(t){return t===0&&1/t==-1/0}function WC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Fg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Q0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ug(this.data.getIterator())}getIteratorFrom(e){return new Ug(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Ug{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new qe($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Y0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Y0("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const HC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(ce(!!t),typeof t=="string"){let e=0;const n=HC.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */function yf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vf(t){const e=t.mapValue.fields.__previous_value__;return yf(e)?vf(e):e}function To(t){const e=pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class qC{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ra={mapValue:{}};function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yf(t)?4:GC(t)?9007199254740991:KC(t)?10:11:J()}function un(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pr(i.timestampValue),l=pr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Wr(i.bytesValue).isEqual(Wr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),l=Re(s.doubleValue);return o===l?Ol(o)===Ol(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Fg(o)!==Fg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!un(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function So(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Re(s.integerValue||s.doubleValue),u=Re(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return zg(t.timestampValue,e.timestampValue);case 4:return zg(To(t),To(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Wr(s),u=Wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=le(l[h],u[h]);if(f!==0)return f}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(Re(s.latitude),Re(o.latitude));return l!==0?l:le(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Bg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const g=s.fields||{},m=o.fields||{},A=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=(u=m.value)===null||u===void 0?void 0:u.arrayValue,R=le(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:Bg(A,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ra.mapValue&&o===Ra.mapValue)return 0;if(s===Ra.mapValue)return 1;if(o===Ra.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const m=le(u[g],f[g]);if(m!==0)return m;const A=qi(l[u[g]],h[f[g]]);if(A!==0)return A}return le(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function zg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=pr(t),r=pr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Bg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=qi(n[i],r[i]);if(s)return s}return le(n.length,r.length)}function Ki(t){return $h(t)}function $h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$h(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$h(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function Wh(t){return!!t&&"integerValue"in t}function _f(t){return!!t&&"arrayValue"in t}function $g(t){return!!t&&"nullValue"in t}function Wg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xa(t){return!!t&&"mapValue"in t}function KC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Qs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Xa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){is(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ot(Qs(this.value))}}function X0(t){const e=[];return is(t.fields,(n,r)=>{const i=new $e([n]);if(Xa(r)){const s=X0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
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
 */class it{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,Z.min(),Z.min(),Z.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,Z.min(),Z.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,Z.min(),Z.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vl{constructor(e,n){this.position=e,this.inclusive=n}}function Hg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ll{constructor(e,n="asc"){this.field=e,this.dir=n}}function QC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class J0{}class Oe extends J0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new XC(e,n,r):n==="array-contains"?new eR(e,r):n==="in"?new tR(e,r):n==="not-in"?new nR(e,r):n==="array-contains-any"?new rR(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new JC(e,r):new ZC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qi(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends J0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cn(e,n)}matches(e){return Z0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Z0(t){return t.op==="and"}function ew(t){return YC(t)&&Z0(t)}function YC(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function Hh(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Ki(t.value);if(ew(t))return t.filters.map(e=>Hh(e)).join(",");{const e=t.filters.map(n=>Hh(n)).join(",");return`${t.op}(${e})`}}function tw(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&un(r.value,i.value)}(t,e):t instanceof cn?function(r,i){return i instanceof cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&tw(o,i.filters[l]),!0):!1}(t,e):void J()}function nw(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ki(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(nw).join(" ,")+"}"}(t):"Filter"}class XC extends Oe{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class JC extends Oe{constructor(e,n){super(e,"in",n),this.keys=rw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZC extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=rw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class eR extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _f(n)&&So(n.arrayValue,this.value)}}class tR extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class nR extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!So(this.value.arrayValue,n)}}class rR extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_f(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}/**
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
 */class iR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Kg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new iR(t,e,n,r,i,s,o)}function wf(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),pu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),e.ue=n}return e.ue}function Ef(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qg(t.startAt,e.startAt)&&qg(t.endAt,e.endAt)}function qh(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class mu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sR(t,e,n,r,i,s,o,l){return new mu(t,e,n,r,i,s,o,l)}function Tf(t){return new mu(t)}function Gg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oR(t){return t.collectionGroup!==null}function Ys(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ll(s,r))}),n.has($e.keyField().canonicalString())||e.ce.push(new Ll($e.keyField(),r))}return e.ce}function sn(t){const e=ee(t);return e.le||(e.le=aR(e,Ys(t))),e.le}function aR(t,e){if(t.limitType==="F")return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ll(i.field,s)});const n=t.endAt?new Vl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vl(t.startAt.position,t.startAt.inclusive):null;return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kh(t,e,n){return new mu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gu(t,e){return Ef(sn(t),sn(e))&&t.limitType===e.limitType}function iw(t){return`${wf(sn(t))}|lt:${t.limitType}`}function hi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>nw(i)).join(", ")}]`),pu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ki(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ki(i)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function yu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ys(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Hg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ys(r),i)||r.endAt&&!function(o,l,u){const h=Hg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ys(r),i))}(t,e)}function lR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sw(t){return(e,n)=>{let r=!1;for(const i of Ys(t)){const s=uR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uR(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?qi(u,h):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Q0(this.inner)}size(){return this.innerSize}}/**
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
 */const cR=new Se(Q.comparator);function Ln(){return cR}const ow=new Se(Q.comparator);function Vs(...t){let e=ow;for(const n of t)e=e.insert(n.key,n);return e}function aw(t){let e=ow;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return Xs()}function lw(){return Xs()}function Xs(){return new ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const hR=new Se(Q.comparator),dR=new qe(Q.comparator);function ne(...t){let e=dR;for(const n of t)e=e.add(n);return e}const fR=new qe(le);function pR(){return fR}/**
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
 */function If(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function uw(t){return{integerValue:""+t}}function mR(t,e){return WC(e)?uw(e):If(t,e)}/**
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
 */class vu{constructor(){this._=void 0}}function gR(t,e,n){return t instanceof Ao?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&yf(s)&&(s=vf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ko?hw(t,e):t instanceof Co?dw(t,e):function(i,s){const o=cw(i,s),l=Qg(o)+Qg(i.Pe);return Wh(o)&&Wh(i.Pe)?uw(l):If(i.serializer,l)}(t,e)}function yR(t,e,n){return t instanceof ko?hw(t,e):t instanceof Co?dw(t,e):n}function cw(t,e){return t instanceof Ml?function(r){return Wh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ao extends vu{}class ko extends vu{constructor(e){super(),this.elements=e}}function hw(t,e){const n=fw(e);for(const r of t.elements)n.some(i=>un(i,r))||n.push(r);return{arrayValue:{values:n}}}class Co extends vu{constructor(e){super(),this.elements=e}}function dw(t,e){let n=fw(e);for(const r of t.elements)n=n.filter(i=>!un(i,r));return{arrayValue:{values:n}}}class Ml extends vu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Qg(t){return Re(t.integerValue||t.doubleValue)}function fw(t){return _f(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class vR{constructor(e,n){this.field=e,this.transform=n}}function _R(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ko&&i instanceof ko||r instanceof Co&&i instanceof Co?Hi(r.elements,i.elements,un):r instanceof Ml&&i instanceof Ml?un(r.Pe,i.Pe):r instanceof Ao&&i instanceof Ao}(t.transform,e.transform)}class wR{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _u{}function pw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gw(t.key,Rn.none()):new Uo(t.key,t.data,Rn.none());{const n=t.data,r=Ot.empty();let i=new qe($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ei(t.key,r,new Ht(i.toArray()),Rn.none())}}function ER(t,e,n){t instanceof Uo?function(i,s,o){const l=i.value.clone(),u=Xg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ei?function(i,s,o){if(!Ja(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Xg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(mw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n,r){return t instanceof Uo?function(s,o,l,u){if(!Ja(s.precondition,o))return l;const h=s.value.clone(),f=Jg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ei?function(s,o,l,u){if(!Ja(s.precondition,o))return l;const h=Jg(s.fieldTransforms,u,o),f=o.data;return f.setAll(mw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return Ja(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function TR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cw(r.transform,i||null);s!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,s))}return n||null}function Yg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hi(r,i,(s,o)=>_R(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uo extends _u{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ei extends _u{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xg(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,yR(o,l,n[i]))}return r}function Jg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gR(s,o,e))}return r}class gw extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IR extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class SR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ER(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=pw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>Yg(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>Yg(n,r))}}class Sf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return hR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Sf(e,n,r,i)}}/**
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
 */class AR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class kR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var xe,ie;function CR(t){switch(t){default:return J();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function yw(t){if(t===void 0)return Vn("GRPC error has no .code"),j.UNKNOWN;switch(t){case xe.OK:return j.OK;case xe.CANCELLED:return j.CANCELLED;case xe.UNKNOWN:return j.UNKNOWN;case xe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case xe.INTERNAL:return j.INTERNAL;case xe.UNAVAILABLE:return j.UNAVAILABLE;case xe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case xe.NOT_FOUND:return j.NOT_FOUND;case xe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case xe.ABORTED:return j.ABORTED;case xe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case xe.DATA_LOSS:return j.DATA_LOSS;default:return J()}}(ie=xe||(xe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function RR(){return new TextEncoder}/**
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
 */const PR=new Lr([4294967295,4294967295],0);function Zg(t){const e=RR().encode(t),n=new z0;return n.update(e),new Uint8Array(n.digest())}function ey(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Lr([n,r],0),new Lr([i,s],0)]}class Af{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ls(`Invalid padding: ${n}`);if(r<0)throw new Ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ls(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ls(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Lr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Lr.fromNumber(r)));return i.compare(PR)===1&&(i=new Lr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Zg(e),[r,i]=ey(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Af(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Zg(e),[r,i]=ey(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,zo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wu(Z.min(),i,new Se(le),Ln(),ne())}}class zo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new zo(r,n,ne(),ne(),ne())}}/**
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
 */class Za{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class vw{constructor(e,n){this.targetId=e,this.me=n}}class _w{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ty{constructor(){this.fe=0,this.ge=ry(),this.pe=Ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new zo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ry()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ln(),this.qe=ny(),this.Qe=new Se(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(qh(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,it.newNoDocument(o,Z.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Wr(r).toUint8Array()}catch(u){if(u instanceof Y0)return Wi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Af(o,i,s)}catch(u){return Wi(u instanceof Ls?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&qh(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,it.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new wu(e,n,this.Qe,this.ke,r);return this.ke=Ln(),this.qe=ny(),this.Qe=new Se(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ty,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new qe(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ty),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ny(){return new Se(Q.comparator)}function ry(){return new Se(Q.comparator)}const NR={asc:"ASCENDING",desc:"DESCENDING"},DR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bR={and:"AND",or:"OR"};class OR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gh(t,e){return t.useProto3Json||pu(e)?e:{value:e}}function jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ww(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VR(t,e){return jl(t,e.toTimestamp())}function on(t){return ce(!!t),Z.fromTimestamp(function(n){const r=pr(n);return new Le(r.seconds,r.nanos)}(t))}function kf(t,e){return Qh(t,e).canonicalString()}function Qh(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ew(t){const e=_e.fromString(t);return ce(kw(e)),e}function Yh(t,e){return kf(t.databaseId,e.path)}function bc(t,e){const n=Ew(e);if(n.get(1)!==t.databaseId.projectId)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(Iw(n))}function Tw(t,e){return kf(t.databaseId,e)}function LR(t){const e=Ew(t);return e.length===4?_e.emptyPath():Iw(e)}function Xh(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Iw(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function iy(t,e,n){return{name:Yh(t,e),fields:n.value.mapValue.fields}}function MR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ce(f===void 0||typeof f=="string"),Ge.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ge.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?j.UNKNOWN:yw(h.code);return new K(f,h.message||"")}(o);n=new _w(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=bc(t,r.document.name),s=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):Z.min(),l=new Ot({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Za(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=bc(t,r.document),s=r.readTime?on(r.readTime):Z.min(),o=it.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Za([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=bc(t,r.document),s=r.removedTargetIds||[];n=new Za([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new kR(i,s),l=r.targetId;n=new vw(l,o)}}return n}function jR(t,e){let n;if(e instanceof Uo)n={update:iy(t,e.key,e.value)};else if(e instanceof gw)n={delete:Yh(t,e.key)};else if(e instanceof ei)n={update:iy(t,e.key,e.data),updateMask:KR(e.fieldMask)};else{if(!(e instanceof IR))return J();n={verify:Yh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ao)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Co)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ml)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:VR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function FR(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?on(i.updateTime):on(s);return o.isEqual(Z.min())&&(o=on(s)),new wR(o,i.transformResults||[])}(n,e))):[]}function UR(t,e){return{documents:[Tw(t,e.path)]}}function zR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tw(t,i);const s=function(h){if(h.length!==0)return Aw(cn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:di(m.field),direction:WR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Gh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function BR(t){let e=LR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const m=Sw(g);return m instanceof cn&&ew(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(m=>function(P){return new Ll(fi(P.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,pu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(g){const m=!!g.before,A=g.values||[];return new Vl(A,m)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const m=!g.before,A=g.values||[];return new Vl(A,m)}(n.endAt)),sR(e,i,o,s,l,"F",u,h)}function $R(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fi(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fi(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fi(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fi(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(fi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>Sw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function WR(t){return NR[t]}function HR(t){return DR[t]}function qR(t){return bR[t]}function di(t){return{fieldPath:t.canonicalString()}}function fi(t){return $e.fromServerFormat(t.fieldPath)}function Aw(t){return t instanceof Oe?function(n){if(n.op==="=="){if(Wg(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NAN"}};if($g(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wg(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NAN"}};if($g(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(n.field),op:HR(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(i=>Aw(i));return r.length===1?r[0]:{compositeFilter:{op:qR(n.op),filters:r}}}(t):J()}function KR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Jn{constructor(e,n,r,i,s=Z.min(),o=Z.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GR{constructor(e){this.ct=e}}function QR(t){const e=BR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kh(e,e.limit,"L"):e}/**
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
 */class YR{constructor(){this.un=new XR}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(fr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class XR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(_e.comparator)).toArray()}}/**
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
 */class Gi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Gi(0)}static kn(){return new Gi(-1)}}/**
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
 */class JR{constructor(){this.changes=new ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class eP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Js(r.mutation,i,Ht.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Nr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Vs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ln();const o=Xs(),l=function(){return Xs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ei)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Js(f.mutation,h,f.mutation.getFieldMask(),Le.now())):o.set(h.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new ZR(f,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Xs();let i=new Se((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ht.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=lw();f.forEach(m=>{if(!s.has(m)){const A=pw(n.get(m),r.get(m));A!==null&&g.set(m,A),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Nr());let l=-1,u=s;return o.next(h=>F.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:l,changes:aw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Vs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Vs();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const h=function(g,m){return new mu(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,it.newInvalidDocument(f)))});let l=Vs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Js(f.mutation,h,Ht.empty(),Le.now()),yu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class tP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:QR(i.bundledQuery),readTime:on(i.readTime)}}(n)),F.resolve()}}/**
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
 */class nP{constructor(){this.overlays=new Se(Q.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Nr(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Nr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Nr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AR(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class rP{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Cf{constructor(){this.Tr=new qe(Me.Er),this.dr=new qe(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new _e([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new _e([])),r=new Me(n,e),i=new Me(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||le(e.wr,n.wr)}static Ar(e,n){return le(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
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
 */class iP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new qe(Me.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(le);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Me(new Q(s),0);let l=new qe(le);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sP{constructor(e){this.Mr=e,this.docs=function(){return new Se(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ln();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||UC(FC(f),r)<=0||(i.has(f.key)||yu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oP(this)}getSize(e){return F.resolve(this.size)}}class oP extends JR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class aP{constructor(e){this.persistence=e,this.Nr=new ss(n=>wf(n),Ef),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Cf,this.targetCount=0,this.kr=Gi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class lP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new gf(0),this.Kr=!1,this.Kr=!0,this.$r=new rP,this.referenceDelegate=e(this),this.Ur=new aP(this),this.indexManager=new YR,this.remoteDocumentCache=function(i){return new sP(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new GR(n),this.Gr=new tP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new iP(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new uP(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class uP extends BC{constructor(e){super(),this.currentSequenceNumber=e}}class Rf{constructor(e){this.persistence=e,this.Jr=new Cf,this.Yr=null}static Zr(e){return new Rf(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Pf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Pf(e,n.fromCache,r,i)}}/**
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
 */class cP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return l1()?8:$C(ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new cP;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Rs()<=re.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",hi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Rs()<=re.DEBUG&&q("QueryEngine","Query:",hi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Rs()<=re.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",hi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):F.resolve())}Yi(e,n){if(Gg(n))return F.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Kh(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Kh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Gg(n)||i.isEqual(Z.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Rs()<=re.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hi(n)),this.rs(e,o,n,jC(i,-1)).next(l=>l))})}ts(e,n){let r=new qe(sw(e));return n.forEach((i,s)=>{yu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Rs()<=re.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",hi(n)),this.Ji.getDocumentsMatchingQuery(e,n,fr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class dP{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Se(le),this._s=new ss(s=>wf(s),Ef),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function fP(t,e,n,r){return new dP(t,e,n,r)}async function Cw(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function pP(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,m=g.keys();let A=F.resolve();return m.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(R=>{const b=h.docVersions.get(P);ce(b!==null),R.version.compareTo(b)<0&&(g.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Rw(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function mP(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const m=i.get(g);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let A=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(Ge.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(g,A),function(R,b,T){return R.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=Ln(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(gP(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Z.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function gP(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ln();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function yP(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vP(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Jh(t,e,n){const r=ee(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function sy(t,e,n){const r=ee(t);let i=Z.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=ee(u),m=g._s.get(f);return m!==void 0?F.resolve(g.os.get(m)):g.Ur.getTargetData(h,f)}(r,o,sn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ne())).next(l=>(_P(r,lR(e),l),{documents:l,Ts:s})))}function _P(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class oy{constructor(){this.activeTargetIds=pR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wP{constructor(){this.so=new oy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new oy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EP{_o(e){}shutdown(){}}/**
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
 */class ay{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pa=null;function Oc(){return Pa===null?Pa=function(){return 268435456+Math.round(2147483648*Math.random())}():Pa++,"0x"+Pa.toString(16)}/**
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
 */const TP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class IP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const tt="WebChannelConnection";class SP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Oc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Wi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=TP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Oc();return new Promise((o,l)=>{const u=new B0;u.setWithCredentials(!0),u.listenOnce($0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ya.NO_ERROR:const f=u.getResponseJson();q(tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ya.TIMEOUT:q(tt,`RPC '${e}' ${s} timed out`),l(new K(j.DEADLINE_EXCEEDED,"Request time out"));break;case Ya.HTTP_ERROR:const g=u.getStatus();if(q(tt,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const A=m==null?void 0:m.error;if(A&&A.status&&A.message){const P=function(b){const T=b.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(T)>=0?T:j.UNKNOWN}(A.status);l(new K(P,A.message))}else l(new K(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(j.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{q(tt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);q(tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Oc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=q0(),l=H0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(tt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let m=!1,A=!1;const P=new IP({Io:b=>{A?q(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(q(tt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),m=!0),q(tt,`RPC '${e}' stream ${i} sending:`,b),g.send(b))},To:()=>g.close()}),R=(b,T,_)=>{b.listen(T,I=>{try{_(I)}catch(N){setTimeout(()=>{throw N},0)}})};return R(g,Os.EventType.OPEN,()=>{A||(q(tt,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),R(g,Os.EventType.CLOSE,()=>{A||(A=!0,q(tt,`RPC '${e}' stream ${i} transport closed`),P.So())}),R(g,Os.EventType.ERROR,b=>{A||(A=!0,Wi(tt,`RPC '${e}' stream ${i} transport errored:`,b),P.So(new K(j.UNAVAILABLE,"The operation could not be completed")))}),R(g,Os.EventType.MESSAGE,b=>{var T;if(!A){const _=b.data[0];ce(!!_);const I=_,N=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(N){q(tt,`RPC '${e}' stream ${i} received error:`,N);const M=N.status;let V=function(E){const S=xe[E];if(S!==void 0)return yw(S)}(M),w=N.message;V===void 0&&(V=j.INTERNAL,w="Unknown error status: "+M+" with message "+N.message),A=!0,P.So(new K(V,w)),g.close()}else q(tt,`RPC '${e}' stream ${i} received:`,_),P.bo(_)}}),R(l,W0.STAT_EVENT,b=>{b.stat===Bh.PROXY?q(tt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Bh.NOPROXY&&q(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Vc(){return typeof document<"u"?document:null}/**
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
 */function Eu(t){return new OR(t,!0)}/**
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
 */class Pw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class xw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Pw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AP extends xw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=MR(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?on(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Xh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=qh(u)?{documents:UR(s,u)}:{query:zR(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ww(s,o.resumeToken);const h=Gh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=jl(s,o.snapshotVersion.toTimestamp());const h=Gh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=$R(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Xh(this.serializer),n.removeTarget=e,this.a_(n)}}class kP extends xw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=FR(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Xh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jR(this.serializer,r))};this.a_(n)}}/**
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
 */class CP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Qh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class RP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class PP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ti(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ee(u);h.L_.add(4),await Bo(h),h.q_.set("Unknown"),h.L_.delete(4),await Tu(h)}(this))})}),this.q_=new RP(r,i)}}async function Tu(t){if(ti(t))for(const e of t.B_)await e(!0)}async function Bo(t){for(const e of t.B_)await e(!1)}function Nw(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),bf(n)?Df(n):os(n).r_()&&Nf(n,e))}function xf(t,e){const n=ee(t),r=os(n);n.N_.delete(e),r.r_()&&Dw(n,e),n.N_.size===0&&(r.r_()?r.o_():ti(n)&&n.q_.set("Unknown"))}function Nf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}os(t).A_(e)}function Dw(t,e){t.Q_.xe(e),os(t).R_(e)}function Df(t){t.Q_=new xR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),os(t).start(),t.q_.v_()}function bf(t){return ti(t)&&!os(t).n_()&&t.N_.size>0}function ti(t){return ee(t).L_.size===0}function bw(t){t.Q_=void 0}async function xP(t){t.q_.set("Online")}async function NP(t){t.N_.forEach((e,n)=>{Nf(t,e)})}async function DP(t,e){bw(t),bf(t)?(t.q_.M_(e),Df(t)):t.q_.set("Unknown")}async function bP(t,e,n){if(t.q_.set("Online"),e instanceof _w&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fl(t,r)}else if(e instanceof Za?t.Q_.Ke(e):e instanceof vw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await Rw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ge.EMPTY_BYTE_STRING,f.snapshotVersion)),Dw(s,u);const g=new Jn(f.target,u,h,f.sequenceNumber);Nf(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Fl(t,r)}}async function Fl(t,e,n){if(!Fo(e))throw e;t.L_.add(1),await Bo(t),t.q_.set("Offline"),n||(n=()=>Rw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Tu(t)})}function Ow(t,e){return e().catch(n=>Fl(t,n,e))}async function Iu(t){const e=ee(t),n=mr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;OP(e);)try{const i=await yP(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,VP(e,i)}catch(i){await Fl(e,i)}Vw(e)&&Lw(e)}function OP(t){return ti(t)&&t.O_.length<10}function VP(t,e){t.O_.push(e);const n=mr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Vw(t){return ti(t)&&!mr(t).n_()&&t.O_.length>0}function Lw(t){mr(t).start()}async function LP(t){mr(t).p_()}async function MP(t){const e=mr(t);for(const n of t.O_)e.m_(n.mutations)}async function jP(t,e,n){const r=t.O_.shift(),i=Sf.from(r,e,n);await Ow(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Iu(t)}async function FP(t,e){e&&mr(t).V_&&await async function(r,i){if(function(o){return CR(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();mr(r).s_(),await Ow(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Iu(r)}}(t,e),Vw(t)&&Lw(t)}async function ly(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ti(n);n.L_.add(3),await Bo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Tu(n)}async function UP(t,e){const n=ee(t);e?(n.L_.delete(2),await Tu(n)):e||(n.L_.add(2),await Bo(n),n.q_.set("Unknown"))}function os(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.w_(),new AP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:xP.bind(null,t),Ro:NP.bind(null,t),mo:DP.bind(null,t),d_:bP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),bf(t)?Df(t):t.q_.set("Unknown")):(await t.K_.stop(),bw(t))})),t.K_}function mr(t){return t.U_||(t.U_=function(n,r,i){const s=ee(n);return s.w_(),new kP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:LP.bind(null,t),mo:FP.bind(null,t),f_:MP.bind(null,t),g_:jP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Iu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Of{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Of(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vf(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Fo(t))return new K(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Vs(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class uy{constructor(){this.W_=new Se(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Qi(e,n,Vi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class zP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class BP{constructor(){this.queries=cy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=cy(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(j.ABORTED,"Firestore shutting down"))}}function cy(){return new ss(t=>iw(t),gu)}async function Mw(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new zP,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Vf(o,`Initialization of query '${hi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Lf(n)}async function jw(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $P(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Lf(n)}function WP(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Lf(t){t.Y_.forEach(e=>{e.next()})}var Zh,hy;(hy=Zh||(Zh={})).ea="default",hy.Cache="cache";class Fw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Zh.Cache}}/**
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
 */class Uw{constructor(e){this.key=e}}class zw{constructor(e){this.key=e}}class HP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=sw(e),this.Ra=new Vi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new uy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const m=i.get(f),A=yu(this.query,g)?g:null,P=!!m&&this.mutatedKeys.has(m.key),R=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let b=!1;m&&A?m.data.isEqual(A.data)?P!==R&&(r.track({type:3,doc:A}),b=!0):this.ga(m,A)||(r.track({type:2,doc:A}),b=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!m&&A?(r.track({type:0,doc:A}),b=!0):m&&!A&&(r.track({type:1,doc:m}),b=!0,(u||h)&&(l=!0)),b&&(A?(o=o.add(A),s=R?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(A,P){const R=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return R(A)-R(P)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Qi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new uy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new zw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Uw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Qi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class qP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KP{constructor(e){this.key=e,this.va=!1}}class GP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ss(l=>iw(l),gu),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(Q.comparator),this.Na=new Map,this.La=new Cf,this.Ba={},this.ka=new Map,this.qa=Gi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function QP(t,e,n=!0){const r=Kw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Bw(r,e,n,!0),i}async function YP(t,e){const n=Kw(t);await Bw(n,e,!0,!1)}async function Bw(t,e,n,r){const i=await vP(t.localStore,sn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await XP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Nw(t.remoteStore,i),l}async function XP(t,e,n,r,i){t.Ka=(g,m,A)=>async function(R,b,T,_){let I=b.view.ma(T);I.ns&&(I=await sy(R.localStore,b.query,!1).then(({documents:w})=>b.view.ma(w,I)));const N=_&&_.targetChanges.get(b.targetId),M=_&&_.targetMismatches.get(b.targetId)!=null,V=b.view.applyChanges(I,R.isPrimaryClient,N,M);return fy(R,b.targetId,V.wa),V.snapshot}(t,g,m,A);const s=await sy(t.localStore,e,!0),o=new HP(e,s.Ts),l=o.ma(s.documents),u=zo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);fy(t,n,h.wa);const f=new qP(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function JP(t,e,n){const r=ee(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!gu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&xf(r.remoteStore,i.targetId),ed(r,i.targetId)}).catch(jo)):(ed(r,i.targetId),await Jh(r.localStore,i.targetId,!0))}async function ZP(t,e){const n=ee(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xf(n.remoteStore,r.targetId))}async function ex(t,e,n){const r=ax(t);try{const i=await function(o,l){const u=ee(o),h=Le.now(),f=l.reduce((A,P)=>A.add(P.key),ne());let g,m;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Ln(),R=ne();return u.cs.getEntries(A,f).next(b=>{P=b,P.forEach((T,_)=>{_.isValidDocument()||(R=R.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(b=>{g=b;const T=[];for(const _ of l){const I=TR(_,g.get(_.key).overlayedDocument);I!=null&&T.push(new ei(_.key,I,X0(I.value.mapValue),Rn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,T,l)}).next(b=>{m=b;const T=b.applyToLocalDocumentSet(g,R);return u.documentOverlayCache.saveOverlays(A,b.batchId,T)})}).then(()=>({batchId:m.batchId,changes:aw(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Se(le)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await $o(r,i.changes),await Iu(r.remoteStore)}catch(i){const s=Vf(i,"Failed to persist write");n.reject(s)}}async function $w(t,e){const n=ee(t);try{const r=await mP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ce(o.va):i.removedDocuments.size>0&&(ce(o.va),o.va=!1))}),await $o(n,r,e)}catch(r){await jo(r)}}function dy(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const m of g.j_)m.Z_(l)&&(h=!0)}),h&&Lf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tx(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Se(Q.comparator);o=o.insert(s,it.newNoDocument(s,Z.min()));const l=ne().add(s),u=new wu(Z.min(),new Map,new Se(le),o,l);await $w(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Mf(r)}else await Jh(r.localStore,e,!1).then(()=>ed(r,e,n)).catch(jo)}async function nx(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await pP(n.localStore,e);Hw(n,r,null),Ww(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $o(n,i)}catch(i){await jo(i)}}async function rx(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(ce(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Hw(r,e,n),Ww(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $o(r,i)}catch(i){await jo(i)}}function Ww(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Hw(t,e,n){const r=ee(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ed(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||qw(t,r)})}function qw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(xf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Mf(t))}function fy(t,e,n){for(const r of n)r instanceof Uw?(t.La.addReference(r.key,e),ix(t,r)):r instanceof zw?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||qw(t,r.key)):J()}function ix(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Mf(t))}function Mf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(_e.fromString(e)),r=t.qa.next();t.Na.set(r,new KP(n)),t.Oa=t.Oa.insert(n,r),Nw(t.remoteStore,new Jn(sn(Tf(n.path)),r,"TargetPurposeLimboResolution",gf.oe))}}async function $o(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=Pf.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>F.forEach(h,m=>F.forEach(m.$i,A=>f.persistence.referenceDelegate.addReference(g,m.targetId,A)).next(()=>F.forEach(m.Ui,A=>f.persistence.referenceDelegate.removeReference(g,m.targetId,A)))))}catch(g){if(!Fo(g))throw g;q("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const A=f.os.get(m),P=A.snapshotVersion,R=A.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(m,R)}}}(r.localStore,s))}async function sx(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await Cw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $o(n,r.hs)}}function ox(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function Kw(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$w.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ox.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tx.bind(null,e),e.Ca.d_=$P.bind(null,e.eventManager),e.Ca.$a=WP.bind(null,e.eventManager),e}function ax(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rx.bind(null,e),e}class Ul{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Eu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return fP(this.persistence,new hP,e.initialUser,this.serializer)}Ga(e){return new lP(Rf.Zr,this.serializer)}Wa(e){return new wP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ul.provider={build:()=>new Ul};class td{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sx.bind(null,this.syncEngine),await UP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BP}()}createDatastore(e){const n=Eu(e.databaseInfo.databaseId),r=function(s){return new SP(s)}(e.databaseInfo);return function(s,o,l,u){return new CP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new PP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>dy(this.syncEngine,n,0),function(){return ay.D()?new ay:new EP}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const g=new GP(i,s,o,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Bo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}td.provider={build:()=>new td};/**
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
 */class Gw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class lx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=G0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Cw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ux(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ly(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ly(e.remoteStore,i)),t._onlineComponents=e}async function ux(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Wi("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new Ul)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Lc(t,new Ul);return t._offlineComponents}async function Qw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await py(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await py(t,new td))),t._onlineComponents}function cx(t){return Qw(t).then(e=>e.syncEngine)}async function Yw(t){const e=await Qw(t),n=e.eventManager;return n.onListen=QP.bind(null,e.syncEngine),n.onUnlisten=JP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=YP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZP.bind(null,e.syncEngine),n}function hx(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Gw({next:m=>{f.Za(),o.enqueueAndForget(()=>jw(s,g));const A=m.docs.has(l);!A&&m.fromCache?h.reject(new K(j.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&u&&u.source==="server"?h.reject(new K(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new Fw(Tf(l.path),f,{includeMetadataChanges:!0,_a:!0});return Mw(s,g)}(await Yw(t),t.asyncQueue,e,n,r)),r.promise}function dx(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Gw({next:m=>{f.Za(),o.enqueueAndForget(()=>jw(s,g)),m.fromCache&&u.source==="server"?h.reject(new K(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new Fw(l,f,{includeMetadataChanges:!0,_a:!0});return Mw(s,g)}(await Yw(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Xw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const my=new Map;/**
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
 */function Jw(t,e,n){if(!n)throw new K(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fx(t,e,n,r){if(e===!0&&r===!0)throw new K(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gy(t){if(!Q.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yy(t){if(Q.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function qr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jf(t);throw new K(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class vy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Su{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PC;switch(r.type){case"firstParty":return new bC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=my.get(n);r&&(q("ComponentProvider","Removing Datastore"),my.delete(n),r.terminate())}(this),Promise.resolve()}}function px(t,e,n,r={}){var i;const s=(t=qr(t,Su))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=nt.MOCK_USER;else{l=n1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new K(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nt(h)}t._authCredentials=new xC(new K0(l,u))}}/**
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
 */class Au{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Au(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class cr extends Au{constructor(e,n,r){super(e,n,Tf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new Q(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function mx(t,e,...n){if(t=at(t),Jw("collection","path",e),t instanceof Su){const r=_e.fromString(e,...n);return yy(r),new cr(t,null,r)}{if(!(t instanceof Ct||t instanceof cr))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return yy(r),new cr(t.firestore,null,r)}}function Yi(t,e,...n){if(t=at(t),arguments.length===1&&(e=G0.newId()),Jw("doc","path",e),t instanceof Su){const r=_e.fromString(e,...n);return gy(r),new Ct(t,null,new Q(r))}{if(!(t instanceof Ct||t instanceof cr))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return gy(r),new Ct(t.firestore,t instanceof cr?t.converter:null,new Q(r))}}/**
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
 */class _y{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Pw(this,"async_queue_retry"),this.Vu=()=>{const r=Vc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Vc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Cn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Fo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Of.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ku extends Su{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new _y,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _y(e),this._firestoreClient=void 0,await e}}}function gx(t,e){const n=typeof t=="object"?t:nf(),r=typeof t=="string"?t:"(default)",i=Zr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=e1("firestore");s&&px(i,...s)}return i}function Ff(t){if(t._terminated)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yx(t),t._firestoreClient}function yx(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new qC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Xw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new lx(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Xi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xi(Ge.fromBase64String(e))}catch(n){throw new K(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xi(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Uf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cu{constructor(e){this._methodName=e}}/**
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
 */class zf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */class Bf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const vx=/^__.*__$/;class _x{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new Uo(e,this.data,n,this.fieldTransforms)}}function Zw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class $f{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new $f(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return zl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Zw(this.Cu)&&vx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class wx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Eu(e)}Qu(e,n,r,i=!1){return new $f({Cu:e,methodName:n,qu:r,path:$e.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ex(t){const e=t._freezeSettings(),n=Eu(t._databaseId);return new wx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tx(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);rE("Data must be an object, but it was:",o,r);const l=tE(r,o);let u,h;if(s.merge)u=new Ht(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const m=Ix(e,g,n);if(!o.contains(m))throw new K(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ax(f,m)||f.push(m)}u=new Ht(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new _x(new Ot(l),u,h)}class Wf extends Cu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wf}}class Hf extends Cu{_toFieldTransform(e){return new vR(e.path,new Ao)}isEqual(e){return e instanceof Hf}}function eE(t,e){if(nE(t=at(t)))return rE("Unsupported field value:",e,t),tE(t,e);if(t instanceof Cu)return function(r,i){if(!Zw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=eE(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:jl(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jl(i.serializer,s)}}if(r instanceof zf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xi)return{bytesValue:ww(i.serializer,r._byteString)};if(r instanceof Ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:kf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Bf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return If(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${jf(r)}`)}(t,e)}function tE(t,e){const n={};return Q0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(t,(r,i)=>{const s=eE(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function nE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof zf||t instanceof Xi||t instanceof Ct||t instanceof Cu||t instanceof Bf)}function rE(t,e,n){if(!nE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=jf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ix(t,e,n){if((e=at(e))instanceof Uf)return e._internalPath;if(typeof e=="string")return iE(t,e);throw zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sx=new RegExp("[~\\*/\\[\\]]");function iE(t,e,n){if(e.search(Sx)>=0)throw zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uf(...e.split("."))._internalPath}catch{throw zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(j.INVALID_ARGUMENT,l+t+u)}function Ax(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class sE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kx extends sE{data(){return super.data()}}function oE(t,e){return typeof e=="string"?iE(t,e):e instanceof Uf?e._internalPath:e._delegate._internalPath}/**
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
 */function Cx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rx{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return is(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Re(o.doubleValue));return new Bf(s)}convertGeoPoint(e){return new zf(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);ce(kw(r));const i=new Io(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||Vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Px(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ms{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aE extends sE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new el(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class el extends aE{data(e={}){return super.data(e)}}class xx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ms(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new el(this._firestore,this._userDataWriter,r.key,r,new Ms(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new el(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ms(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new el(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ms(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Nx(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Nx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
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
 */function nd(t){t=qr(t,Ct);const e=qr(t.firestore,ku);return hx(Ff(e),t._key).then(n=>Ox(e,t,n))}class lE extends Rx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function Dx(t){t=qr(t,Au);const e=qr(t.firestore,ku),n=Ff(e),r=new lE(e);return Cx(t._query),dx(n,t._query).then(i=>new xx(e,r,t,i))}function Ro(t,e,n){t=qr(t,Ct);const r=qr(t.firestore,ku),i=Px(t.converter,e,n);return bx(r,[Tx(Ex(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Rn.none())])}function bx(t,e){return function(r,i){const s=new Cn;return r.asyncQueue.enqueueAndForget(async()=>ex(await cx(r),i,s)),s.promise}(Ff(t),e)}function Ox(t,e,n){const r=n.docs.get(e._key),i=new lE(t);return new aE(t,i,e._key,r,new Ms(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function Vx(){return new Wf("deleteField")}function Zn(){return new Hf("serverTimestamp")}(function(e,n=!0){(function(i){rs=i})(ts),an(new Yt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ku(new NC(r.getProvider("auth-internal")),new VC(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Mt(jg,"4.7.3",e),Mt(jg,"4.7.3","esm2017")})();const uE="@firebase/installations",qf="0.6.9";/**
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
 */const cE=1e4,hE=`w:${qf}`,dE="FIS_v2",Lx="https://firebaseinstallations.googleapis.com/v1",Mx=60*60*1e3,jx="installations",Fx="Installations";/**
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
 */const Ux={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Kr=new Jr(jx,Fx,Ux);function fE(t){return t instanceof Xt&&t.code.includes("request-failed")}/**
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
 */function pE({projectId:t}){return`${Lx}/projects/${t}/installations`}function mE(t){return{token:t.token,requestStatus:2,expiresIn:Bx(t.expiresIn),creationTime:Date.now()}}async function gE(t,e){const r=(await e.json()).error;return Kr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zx(t,{refreshToken:e}){const n=yE(t);return n.append("Authorization",$x(e)),n}async function vE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Bx(t){return Number(t.replace("s","000"))}function $x(t){return`${dE} ${t}`}/**
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
 */async function Wx({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=pE(t),i=yE(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:dE,appId:t.appId,sdkVersion:hE},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await vE(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:mE(h.authToken)}}else throw await gE("Create Installation",u)}/**
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
 */function _E(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Hx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qx=/^[cdef][\w-]{21}$/,rd="";function Kx(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Gx(t);return qx.test(n)?n:rd}catch{return rd}}function Gx(t){return Hx(t).substr(0,22)}/**
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
 */function Ru(t){return`${t.appName}!${t.appId}`}/**
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
 */const wE=new Map;function EE(t,e){const n=Ru(t);TE(n,e),Qx(n,e)}function TE(t,e){const n=wE.get(t);if(n)for(const r of n)r(e)}function Qx(t,e){const n=Yx();n&&n.postMessage({key:t,fid:e}),Xx()}let Dr=null;function Yx(){return!Dr&&"BroadcastChannel"in self&&(Dr=new BroadcastChannel("[Firebase] FID Change"),Dr.onmessage=t=>{TE(t.data.key,t.data.fid)}),Dr}function Xx(){wE.size===0&&Dr&&(Dr.close(),Dr=null)}/**
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
 */const Jx="firebase-installations-database",Zx=1,Gr="firebase-installations-store";let Mc=null;function Kf(){return Mc||(Mc=s0(Jx,Zx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gr)}}})),Mc}async function Bl(t,e){const n=Ru(t),i=(await Kf()).transaction(Gr,"readwrite"),s=i.objectStore(Gr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&EE(t,e.fid),e}async function IE(t){const e=Ru(t),r=(await Kf()).transaction(Gr,"readwrite");await r.objectStore(Gr).delete(e),await r.done}async function Pu(t,e){const n=Ru(t),i=(await Kf()).transaction(Gr,"readwrite"),s=i.objectStore(Gr),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&EE(t,l.fid),l}/**
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
 */async function Gf(t){let e;const n=await Pu(t.appConfig,r=>{const i=e2(r),s=t2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===rd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function e2(t){const e=t||{fid:Kx(),registrationStatus:0};return SE(e)}function t2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Kr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=n2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:r2(t)}:{installationEntry:e}}async function n2(t,e){try{const n=await Wx(t,e);return Bl(t.appConfig,n)}catch(n){throw fE(n)&&n.customData.serverCode===409?await IE(t.appConfig):await Bl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function r2(t){let e=await wy(t.appConfig);for(;e.registrationStatus===1;)await _E(100),e=await wy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Gf(t);return r||n}return e}function wy(t){return Pu(t,e=>{if(!e)throw Kr.create("installation-not-found");return SE(e)})}function SE(t){return i2(t)?{fid:t.fid,registrationStatus:0}:t}function i2(t){return t.registrationStatus===1&&t.registrationTime+cE<Date.now()}/**
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
 */async function s2({appConfig:t,heartbeatServiceProvider:e},n){const r=o2(t,n),i=zx(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:hE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await vE(()=>fetch(r,l));if(u.ok){const h=await u.json();return mE(h)}else throw await gE("Generate Auth Token",u)}function o2(t,{fid:e}){return`${pE(t)}/${e}/authTokens:generate`}/**
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
 */async function Qf(t,e=!1){let n;const r=await Pu(t.appConfig,s=>{if(!AE(s))throw Kr.create("not-registered");const o=s.authToken;if(!e&&u2(o))return s;if(o.requestStatus===1)return n=a2(t,e),s;{if(!navigator.onLine)throw Kr.create("app-offline");const l=h2(s);return n=l2(t,l),l}});return n?await n:r.authToken}async function a2(t,e){let n=await Ey(t.appConfig);for(;n.authToken.requestStatus===1;)await _E(100),n=await Ey(t.appConfig);const r=n.authToken;return r.requestStatus===0?Qf(t,e):r}function Ey(t){return Pu(t,e=>{if(!AE(e))throw Kr.create("not-registered");const n=e.authToken;return d2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function l2(t,e){try{const n=await s2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Bl(t.appConfig,r),n}catch(n){if(fE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await IE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bl(t.appConfig,r)}throw n}}function AE(t){return t!==void 0&&t.registrationStatus===2}function u2(t){return t.requestStatus===2&&!c2(t)}function c2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Mx}function h2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function d2(t){return t.requestStatus===1&&t.requestTime+cE<Date.now()}/**
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
 */async function f2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Gf(e);return r?r.catch(console.error):Qf(e).catch(console.error),n.fid}/**
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
 */async function p2(t,e=!1){const n=t;return await m2(n),(await Qf(n,e)).token}async function m2(t){const{registrationPromise:e}=await Gf(t);e&&await e}/**
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
 */function g2(t){if(!t||!t.options)throw jc("App Configuration");if(!t.name)throw jc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw jc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function jc(t){return Kr.create("missing-app-config-values",{valueName:t})}/**
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
 */const kE="installations",y2="installations-internal",v2=t=>{const e=t.getProvider("app").getImmediate(),n=g2(e),r=Zr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_2=t=>{const e=t.getProvider("app").getImmediate(),n=Zr(e,kE).getImmediate();return{getId:()=>f2(n),getToken:i=>p2(n,i)}};function w2(){an(new Yt(kE,v2,"PUBLIC")),an(new Yt(y2,_2,"PRIVATE"))}w2();Mt(uE,qf);Mt(uE,qf,"esm2017");/**
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
 */const $l="analytics",E2="firebase_id",T2="origin",I2=60*1e3,S2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Yf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Et=new cu("@firebase/analytics");/**
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
 */const A2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Jr("analytics","Analytics",A2);/**
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
 */function k2(t){if(!t.startsWith(Yf)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return Et.warn(e.message),""}return t}function CE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function C2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function R2(t,e){const n=C2("firebase-js-sdk-policy",{createScriptURL:k2}),r=document.createElement("script"),i=`${Yf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function P2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function x2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await CE(n)).find(h=>h.measurementId===i);u&&await e[u.appId]}}catch(l){Et.error(l)}t("config",i,s)}async function N2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await CE(n);for(const u of o){const h=l.find(g=>g.measurementId===u),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Et.error(s)}}function D2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await N2(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await x2(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Et.error(l)}}return i}function b2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=D2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function O2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Yf)&&n.src.includes(t))return n;return null}/**
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
 */const V2=30,L2=1e3;class M2{constructor(e={},n=L2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const RE=new M2;function j2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function F2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:j2(r)},s=S2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function U2(t,e=RE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Rt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new $2;return setTimeout(async()=>{l.abort()},I2),PE({appId:r,apiKey:i,measurementId:s},o,l,e)}async function PE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=RE){var s;const{appId:o,measurementId:l}=t;try{await z2(r,e)}catch(u){if(l)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await F2(t);return i.deleteThrottleMetadata(o),u}catch(u){const h=u;if(!B2(h)){if(i.deleteThrottleMetadata(o),l)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?hg(n,i.intervalMillis,V2):hg(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,g),Et.debug(`Calling attemptFetch again in ${f} millis`),PE(t,g,r,i)}}function z2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function B2(t){if(!(t instanceof Xt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class $2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function W2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function H2(){if(t0())try{await n0()}catch(t){return Et.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Et.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function q2(t,e,n,r,i,s,o){var l;const u=U2(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>Et.error(A)),e.push(u);const h=H2().then(A=>{if(A)return r.getId()}),[f,g]=await Promise.all([u,h]);O2(s)||R2(s,f.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[T2]="firebase",m.update=!0,g!=null&&(m[E2]=g),i("config",f.measurementId,m),f.measurementId}/**
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
 */class K2{constructor(e){this.app=e}_delete(){return delete Zs[this.app.options.appId],Promise.resolve()}}let Zs={},Ty=[];const Iy={};let Fc="dataLayer",G2="gtag",Sy,xE,Ay=!1;function Q2(){const t=[];if(e0()&&t.push("This is a browser extension environment."),u1()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});Et.warn(n.message)}}function Y2(t,e,n){Q2();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(Zs[r]!=null)throw Rt.create("already-exists",{id:r});if(!Ay){P2(Fc);const{wrappedGtag:s,gtagCore:o}=b2(Zs,Ty,Iy,Fc,G2);xE=s,Sy=o,Ay=!0}return Zs[r]=q2(t,Ty,Iy,e,Sy,Fc,n),new K2(t)}function X2(t=nf()){t=at(t);const e=Zr(t,$l);return e.isInitialized()?e.getImmediate():J2(t)}function J2(t,e={}){const n=Zr(t,$l);if(n.isInitialized()){const i=n.getImmediate();if(vo(e,n.getOptions()))return i;throw Rt.create("already-initialized")}return n.initialize({options:e})}function NE(t,e,n,r){t=at(t),W2(xE,Zs[t.app.options.appId],e,n,r).catch(i=>Et.error(i))}const ky="@firebase/analytics",Cy="0.10.8";function Z2(){an(new Yt($l,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Y2(r,i,n)},"PUBLIC")),an(new Yt("analytics-internal",t,"PRIVATE")),Mt(ky,Cy),Mt(ky,Cy,"esm2017");function t(e){try{const n=e.getProvider($l).getImmediate();return{logEvent:(r,i,s)=>NE(n,r,i,s)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}Z2();const eN={apiKey:"AIzaSyCmS7gEVkUI8QxMKjphppuxSlWGB-1wv98",authDomain:"dsa-tracker-be594.firebaseapp.com",projectId:"dsa-tracker-be594",storageBucket:"dsa-tracker-be594.firebasestorage.app",messagingSenderId:"1002103577156",appId:"1:1002103577156:web:a3ea3dfb1b112311f57a11",measurementId:"G-QVF05E2M1E"},Xf=o0(eN),tl=AC(Xf),Qr=gx(Xf),tN=X2(Xf),nN=new _n,ni=U.createContext(),rN=5*60*1e3,Ry=async()=>{try{await hk(tl,N0)}catch(t){console.error("Failed to enable persistent Firebase auth",t)}},DE=async t=>{if(t)try{await Ro(Yi(Qr,"users",t),{lastSeenAt:Zn()},{merge:!0})}catch(e){console.error("Failed to update user activity heartbeat:",e)}},iN=async t=>{if(t)try{const e=Yi(Qr,"users",t.uid),n=await nd(e);let r=!1,i=!1;if(!n.exists())r=!0,i=!0;else{const o=n.data();(!o.location||o.location==="Unknown")&&(i=!0)}let s="Unknown";if(i)try{const l=await(await fetch("https://ipapi.co/json/")).json();l.city&&l.region&&l.country_name?s=`${l.city}, ${l.region}, ${l.country_name}`:l.city&&l.country_name?s=`${l.city}, ${l.country_name}`:l.country_name&&(s=l.country_name)}catch(o){console.error("Failed to fetch location:",o)}if(r){await Ro(e,{displayName:t.displayName||"",email:t.email||"",photoURL:t.photoURL||"",location:s,createdAt:Zn(),lastSeenAt:Zn(),updatedAt:Zn(),progress:{},totalSolved:0}),console.log("✅ New user document created in Firestore:",t.uid);try{await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"YOUR_WEB3FORMS_ACCESS_KEY",subject:"New User Signup - DSA Tracker",from_name:"DSA Tracker System",message:`A new user has just signed up!

Name: ${t.displayName||"N/A"}
Email: ${t.email||"N/A"}
Location: ${s}
UID: ${t.uid}`})}),console.log("📧 Signup notification sent to admin.")}catch(o){console.error("Failed to send admin notification email:",o)}}else i&&s!=="Unknown"?(await Ro(e,{location:s,lastSeenAt:Zn()},{merge:!0}),console.log(`✅ Silently saved location for existing user ${t.uid}: ${s}`)):await DE(t.uid)}catch(e){console.error("Error ensuring user document:",e)}},sN=({children:t})=>{const[e,n]=U.useState(null),[r,i]=U.useState(!0),s=e==null?void 0:e.uid;U.useEffect(()=>{let u=()=>{},h=!1;return(async()=>{await Ry(),!h&&(u=pk(tl,async g=>{await iN(g),n(g),i(!1)}))})(),()=>{h=!0,u()}},[]),U.useEffect(()=>{if(!s)return;const u=()=>{document.visibilityState==="hidden"||navigator.onLine===!1||DE(s)};u();const h=window.setInterval(u,rN);return window.addEventListener("focus",u),document.addEventListener("visibilitychange",u),()=>{window.clearInterval(h),window.removeEventListener("focus",u),document.removeEventListener("visibilitychange",u)}},[s]);const o=async()=>{try{await Ry(),await Ok(tl,nN),NE(tN,"sign_up",{method:"google"})}catch(u){console.error("Error signing in with Google",u)}},l=async()=>{try{await mk(tl)}catch(u){console.error("Error signing out",u)}};return p.jsx(ni.Provider,{value:{user:e,login:o,logout:l,loading:r},children:!r&&t})},We=[{id:"a2z_flawless",name:"Striver A2Z",file:"/data/a2z_flawless.json",description:'<a href="https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" target="_blank" rel="noopener noreferrer">A-Z sheet</a> by Striver.'},{id:"SDE",name:"SDE Sheet",file:"/data/SDE.json",description:'<a href="https://takeuforward.org/dsa/strivers-sde-sheet-top-coding-interview-problems" target="_blank" rel="noopener noreferrer">SDE sheet</a> by Striver.'},{id:"blind75",name:"Blind 75",file:"/data/blind75.json",description:'Leetcode - <a href="https://neetcode.io/practice/practice/neetcode150" target="_blank" rel="noopener noreferrer">Blind 75</a>.'},{id:"neetcode150",name:"NeetCode 150",file:"/data/neetcode150.json",description:'<a href="https://neetcode.io/practice/practice/neetcode150" target="_blank" rel="noopener noreferrer">150 hand-picked questions</a> by NeetCode.'},{id:"neetcode250",name:"NeetCode 250",file:"/data/neetcode250.json",description:'<a href="https://neetcode.io/practice/practice/neetcode250" target="_blank" rel="noopener noreferrer">250 hand-picked questions</a> by NeetCode.'},{id:"striver_cp",name:"Striver CP Sheet",file:"/data/striver_cp.json",description:'<a href="https://takeuforward.org/interview-experience/strivers-cp-sheet" target="_blank" rel="noopener noreferrer">CP sheet</a> by Striver.'}],xu=async t=>{const e=We.find(n=>n.id===t);if(!e)return null;try{const r=await(await fetch(e.file)).json();let i=[],s=0;return Array.isArray(r)&&r.length>0&&r[0].step_no?i=r.map(o=>{var u;const l=((u=o.sub_steps)==null?void 0:u.map(h=>{var g;const f=((g=h.topics)==null?void 0:g.map(m=>(s++,{id:m.id,title:m.question_title,url:m.lc_link||m.gfg_link||m.cs_link||m.post_link,links:{blog:m.post_link,yt:m.yt_link,lc:m.lc_link,gfg:m.gfg_link,cn:m.cs_link,tuf:m.plus_link},difficulty:m.difficulty||0})))||[];return{title:`${h.sub_step_no}. ${h.sub_step_title}`,questions:f}}))||[];return{title:`Step ${o.step_no}: ${o.step_title}`,isHeading:!0,subcategories:l,questions:[]}}):Array.isArray(r)&&r.length>0&&(r[0].category||r[0].heading)?i=r.map(o=>{const l=o.category||o.heading,u=o.problems.map(h=>{var m,A;s++;let f=1;((m=h.difficulty)==null?void 0:m.toLowerCase())==="easy"?f=0:((A=h.difficulty)==null?void 0:A.toLowerCase())==="hard"&&(f=2);const g=h.platform?"cf":"lc";return{id:h.id,title:h.title,url:h.link||h.leetcode_link,links:{[g]:h.link||h.leetcode_link},difficulty:f}});return{title:l,isHeading:!0,questions:u,subcategories:[]}}):!Array.isArray(r)&&typeof r=="object"?i=Object.keys(r).map(o=>{const l=r[o].map(f=>{var g;return s++,{id:f.id,title:f.Question,url:f.Question_link,links:{blog:f.Blog_link||null,yt:f.Solution_link||null,lc:(g=f.Question_link)!=null&&g.includes("leetcode")?f.Question_link:null},difficulty:1}});return{title:o.replace(/\d+\/\d+$/,"").trim().replace(/([a-z])([A-Z])/g,"$1 $2").replace(/-/g," - ").replace(/\b\w/g,f=>f.toUpperCase()).trim(),isHeading:!0,questions:l,subcategories:[]}}):Array.isArray(r)&&(i=[{title:"All Problems",isHeading:!1,questions:r.map(l=>{var h,f,g,m;s++;let u=1;return(h=l.title)!=null&&h.toLowerCase().includes("easy")?u=0:(f=l.title)!=null&&f.toLowerCase().includes("hard")&&(u=2),{id:l.id||((g=l.title)==null?void 0:g.substring(0,20)),title:((m=l.title)==null?void 0:m.split(`
`)[0])||"Unknown Problem",url:l.url||l.link,links:{lc:l.url||l.link},difficulty:u}}),subcategories:[]}]),{info:e,data:i,totalQuestions:s}}catch(n){return console.error("Failed to load sheet data",n),null}},ri=U.createContext(),hn={status:!1,revision:!1,note:"",updatedAt:0},id="dsaTrackerProgress",oN="dsaTrackerProgress",aN="dsaTrackerPendingProgress",bE="userProgress",OE=t=>t?`${oN}:${t}`:id,Jf=t=>`${aN}:${t}`,lN=()=>new Set(We.map(t=>t.id)),Wl=t=>typeof t=="boolean"?{...hn,status:t,updatedAt:0}:!t||typeof t!="object"?hn:{status:!!t.status,revision:!!t.revision,note:t.note||"",updatedAt:Number(t.updatedAt)||0},Hl=(t=hn,e=hn)=>{const n=Wl(t),r=Wl(e);return r.updatedAt>n.updatedAt?r:n.updatedAt>r.updatedAt?n:{status:n.status||r.status,revision:n.revision||r.revision,note:r.note||n.note||"",updatedAt:r.updatedAt||n.updatedAt||0}},St=(...t)=>{const e=lN(),n={};return t.forEach(r=>{Object.entries(r||{}).forEach(([i,s])=>{!e.has(i)||!s||typeof s!="object"||Object.entries(s).forEach(([o,l])=>{var g;const u=Wl(l),h=((g=n[i])==null?void 0:g[o])||hn,f=Hl(h,u);n[i]||(n[i]={}),n[i][o]=f})})}),n},sd=t=>!t||typeof t!="object"?{}:VE(t)?LE(t,{}):St(t),Py=t=>{const e=St(t);return Object.keys(e).sort().reduce((n,r)=>(n[r]=Object.keys(e[r]).sort().reduce((i,s)=>(i[s]=Wl(e[r][s]),i),{}),n),{})},uN=(t,e)=>JSON.stringify(Py(t))===JSON.stringify(Py(e)),js=t=>Object.values(t||{}).some(e=>Object.keys(e||{}).length>0),nl=t=>{try{const e=localStorage.getItem(t);return e?sd(JSON.parse(e)):{}}catch{return{}}},xa=t=>{if(!t)return nl(id);const e=nl(OE(t));return js(e)?e:nl(id)},ui=(t,e)=>{try{localStorage.setItem(OE(t),JSON.stringify(St(e)))}catch(n){console.error("Failed to save progress locally:",n)}},Na=t=>t?nl(Jf(t)):{},gn=(t,e)=>{if(t)try{localStorage.setItem(Jf(t),JSON.stringify(St(e)))}catch(n){console.error("Failed to queue pending progress sync:",n)}},ci=t=>{if(t)try{localStorage.removeItem(Jf(t))}catch{}},od=t=>{var e;return t.status==="rejected"?((e=t.reason)==null?void 0:e.message)||String(t.reason):""},cN=t=>{let e=0;return Object.values(t||{}).forEach(n=>{Object.values(n||{}).forEach(r=>{r!=null&&r.status&&e++})}),e},VE=t=>{const e=Object.values(t||{});return e.length===0?!1:e.some(n=>typeof n=="boolean")},hN=async()=>{const t=new Set,e=await xu("a2z_flawless");if(!e)return t;const n=r=>{r.forEach(i=>{(i.questions||[]).forEach(s=>{s.id&&t.add(s.id)}),(i.subcategories||[]).forEach(s=>n([s]))})};return n(e.data),t},LE=(t,e)=>{const n={a2z_flawless:{}},r=t==null?void 0:t.a2z_flawless;return r&&typeof r=="object"&&Object.assign(n.a2z_flawless,r),Object.entries(t||{}).forEach(([i,s])=>{if(typeof s!="boolean")return;const o=n.a2z_flawless[i]||hn;n.a2z_flawless[i]=Hl(o,{status:s===!0})}),Object.entries(e||{}).forEach(([i,s])=>{const o=n.a2z_flawless[i]||hn;n.a2z_flawless[i]=Hl(o,{revision:s===!0})}),n},dN=(t,e)=>{for(const[n,r]of Object.entries(t))if(n!=="a2z_flawless"&&!(!r||typeof r!="object")){for(const i of Object.keys(r))if(e.has(i))return!0}return!1},fN=(t,e)=>{const n={};for(const[r,i]of Object.entries(t))if(!(!i||typeof i!="object"))for(const[s,o]of Object.entries(i)){const l=e.has(s)?"a2z_flawless":r;n[l]||(n[l]={});const u=n[l][s];u?n[l][s]=Hl(u,o):n[l][s]={...hn,...o}}return n},Ps=async(t,e,n={})=>{const r=Yi(Qr,"users",t.uid),i=Yi(Qr,bE,t.uid),s=St(e),o=cN(s),l={uid:t.uid,progress:s,totalSolved:o,displayName:t.displayName||"",email:t.email||"",photoURL:t.photoURL||"",updatedAt:Zn(),...n},u=await Promise.allSettled([Ro(r,l,{merge:!0}),Ro(i,l,{merge:!0})]);if(!u.some(h=>h.status==="fulfilled"))throw new Error(u.map(od).filter(Boolean).join(" | ")||"Failed to save progress to Firestore.")},pN=({children:t})=>{const{user:e}=U.useContext(ni),n=e==null?void 0:e.uid,[r,i]=U.useState({}),[s,o]=U.useState(!1),[l,u]=U.useState("idle"),[h,f]=U.useState(""),g=U.useRef(r);U.useEffect(()=>{g.current=r},[r]);const m=U.useRef(null);U.useEffect(()=>{const T=xa(n);g.current=T,i(T)},[n]),U.useEffect(()=>{if(!e){m.current=null;return}if(m.current===e.uid)return;m.current=e.uid;let T=!1;return(async()=>{o(!0);try{const I=Yi(Qr,"users",e.uid),N=Yi(Qr,bE,e.uid),[M,V]=await Promise.allSettled([nd(I),nd(N)]);if(M.status==="rejected"&&V.status==="rejected")throw new Error([od(M),od(V)].filter(Boolean).join(" | ")||"Failed to read saved progress from Firestore.");const w=M.status==="fulfilled"?M.value:null,y=V.status==="fulfilled"?V.value:null,E=xa(e.uid),S=Na(e.uid);let C={},x=!1,k=!1,De={},fe={};if(y!=null&&y.exists()){const L=y.data();C=St(C,sd(L.progress||{}))}if(w!=null&&w.exists()){const L=w.data(),$=L.progress||{},H=L.revision||{};if(fe=sd($),C=St(C,fe),VE($)||Object.keys($).length===0&&Object.keys(H).length>0)console.log("⚙️ Old flat format detected, migrating to nested…"),fe=LE($,H),C=St(C,fe),console.log("📦 Migration result:",Object.entries(fe).map(([Y,G])=>`${Y}: ${Object.keys(G).length}`)),x=!0,k=Object.keys(H).length>0;else if(Object.keys(fe).length>0){const Y=await hN();dN(fe,Y)&&(console.log("🔧 A2Z questions found in wrong sheet buckets — consolidating…"),fe=fN(fe,Y),C=St(C,fe),console.log("📦 Consolidation result:",Object.entries(fe).map(([G,se])=>`${G}: ${Object.keys(se).length}`)),x=!0)}}else console.log("No users cloud doc found. Creating one while syncing progress..."),x=!0,De={createdAt:Zn()};!js(C)&&!(y!=null&&y.exists())&&(console.log("No cloud progress doc found. Creating one while syncing progress..."),x=!0);const Ae=St(C,E,S),mt=x||!uN(Ae,C)||js(S);T||(g.current=Ae,i(Ae),ui(e.uid,Ae)),mt&&(gn(e.uid,Ae),u("syncing"),await Ps(e,Ae,{...De,...k?{revision:Vx()}:{}}),ci(e.uid),u("synced"),f(""),console.log("✅ Progress merged and saved to Firestore."))}catch(I){console.error("Error fetching cloud progress:",I),u("error"),f((I==null?void 0:I.message)||"Failed to sync progress.");const N=St(g.current,xa(e.uid),Na(e.uid));g.current=N,i(N),ui(e.uid,N),gn(e.uid,N)}finally{T||o(!1)}})(),()=>{T=!0}},[e]);const A=U.useCallback(async()=>{if(!e)return!0;const T=St(g.current,xa(e.uid),Na(e.uid));if(g.current=T,i(T),ui(e.uid,T),!js(T))return ci(e.uid),u("synced"),f(""),!0;gn(e.uid,T),u("syncing"),f("");try{return await Ps(e,T),ci(e.uid),u("synced"),!0}catch(_){return console.error("Error syncing progress to Firestore:",_),gn(e.uid,T),u("error"),f((_==null?void 0:_.message)||"Failed to sync progress."),!1}},[e]);U.useEffect(()=>{if(!e)return;let T=!1;const _=async()=>{if(T||navigator.onLine===!1)return;const N=Na(e.uid);if(!js(N))return;T=!0;const M=St(g.current,N);u("syncing"),f("");try{await Ps(e,M),ci(e.uid),g.current=M,i(M),ui(e.uid,M),u("synced")}catch(V){console.error("Error retrying pending progress sync:",V),gn(e.uid,M),u("error"),f((V==null?void 0:V.message)||"Failed to sync progress.")}finally{T=!1}};_();const I=window.setInterval(_,60*1e3);return window.addEventListener("focus",_),window.addEventListener("online",_),()=>{window.clearInterval(I),window.removeEventListener("focus",_),window.removeEventListener("online",_)}},[e]);const P=async(T,_,I,N=!1)=>{var w;const M=g.current,V={...M,[T]:{...M[T]||{},[_]:{...((w=M[T])==null?void 0:w[_])||hn,[N?"revision":"status"]:I,updatedAt:Date.now()}}};if(g.current=V,i(V),ui(n,V),e){gn(e.uid,V),u("syncing"),f("");try{await Ps(e,V,{...!N&&I?{lastSolvedAt:Zn()}:{}}),ci(e.uid),u("synced")}catch(y){console.error("Error syncing to Firestore:",y),gn(e.uid,V),u("error"),f((y==null?void 0:y.message)||"Failed to sync progress.")}}},R=async(T,_,I)=>{var w,y,E;const N=g.current;if((((y=(w=N[T])==null?void 0:w[_])==null?void 0:y.note)||"")===I)return;const V={...N,[T]:{...N[T]||{},[_]:{...((E=N[T])==null?void 0:E[_])||hn,note:I,updatedAt:Date.now()}}};if(g.current=V,i(V),ui(n,V),e){gn(e.uid,V),u("syncing"),f("");try{await Ps(e,V),ci(e.uid),u("synced")}catch(S){console.error("Error syncing note to Firestore:",S),gn(e.uid,V),u("error"),f((S==null?void 0:S.message)||"Failed to sync progress.")}}},b=(T,_)=>{const I=r[T]||{};let N=0,M=0;return Object.values(I).forEach(V=>{V.status&&N++,V.revision&&M++}),{completed:N,revision:M,total:_,percentage:_===0?0:Math.round(N/_*100)}};return p.jsx(ri.Provider,{value:{progress:r,updateQuestionStatus:P,updateQuestionNote:R,getSheetStats:b,loadingCloud:s,syncStatus:l,syncError:h,syncProgressNow:A},children:t})};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ME=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=U.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>U.createElement("svg",{ref:u,...gN,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:ME("lucide",i),...l},[...o.map(([h,f])=>U.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(t,e)=>{const n=U.forwardRef(({className:r,...i},s)=>U.createElement(yN,{ref:s,iconNode:e,className:ME(`lucide-${mN(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=we("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=we("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=we("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=we("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=we("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=we("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=we("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=we("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=we("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=we("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=we("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=we("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=we("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=we("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=we("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=we("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=we("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=we("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=we("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=we("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=we("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=we("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=we("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=we("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),UN=(t=768)=>{const[e,n]=U.useState(()=>window.innerWidth<t);return U.useEffect(()=>{const r=()=>n(window.innerWidth<t);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[t]),e},zN=["JROhXIAevXfsMos9qTTXcpf92vD2","kcFyQ6WdW9VBxUnCMt1NIBzJRyL2"],BN=({onClose:t})=>{const e=n=>{window.open(n,"_blank","noreferrer"),t()};return p.jsxs("div",{onClick:t,style:{position:"fixed",inset:0,zIndex:3e3,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.6)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",animation:"modal-fade-in 0.2s ease"},children:[p.jsxs("div",{onClick:n=>n.stopPropagation(),style:{background:"var(--surface-color)",border:"1px solid var(--border-color)",borderRadius:"1.25rem",padding:"2rem 2.25rem",maxWidth:"380px",width:"90%",boxShadow:"0 24px 60px rgba(0,0,0,0.5)",animation:"modal-pop 0.3s cubic-bezier(0.34,1.56,0.64,1)",position:"relative",textAlign:"center"},children:[p.jsx("button",{onClick:t,style:{position:"absolute",top:"1rem",right:"1rem",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",display:"flex",padding:"0.25rem",borderRadius:"50%"},children:p.jsx(Zf,{size:18})}),p.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"0.75rem"},children:"❤️"}),p.jsx("h2",{style:{fontSize:"1.2rem",fontWeight:800,marginBottom:"0.4rem",color:"var(--text-primary)"},children:"Support the Developer"}),p.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.875rem",lineHeight:1.6,marginBottom:"1.5rem"},children:"This tracker is free forever. If it helped you prep, consider supporting!"}),p.jsxs("div",{style:{display:"flex",gap:"0.75rem",marginBottom:"0.75rem"},children:[p.jsxs("button",{onClick:()=>e("https://www.chai4.me/kamalsharma"),style:{flex:1,padding:"0.85rem 0.5rem",borderRadius:"0.75rem",border:"2px solid var(--border-color)",background:"var(--surface-hover)",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.35rem",transition:"all 0.2s",color:"var(--text-primary)",fontWeight:700,fontSize:"0.9rem"},onMouseEnter:n=>{n.currentTarget.style.borderColor="#f97316",n.currentTarget.style.background="rgba(249,115,22,0.08)"},onMouseLeave:n=>{n.currentTarget.style.borderColor="var(--border-color)",n.currentTarget.style.background="var(--surface-hover)"},children:[p.jsx("span",{style:{fontSize:"1.75rem"},children:"🇮🇳"}),p.jsx("span",{children:"India"}),p.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-secondary)",fontWeight:500},children:"via chai4.me"})]}),p.jsxs("button",{onClick:()=>e("https://www.paypal.me/kamalsharma05"),style:{flex:1,padding:"0.85rem 0.5rem",borderRadius:"0.75rem",border:"2px solid var(--border-color)",background:"var(--surface-hover)",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.35rem",transition:"all 0.2s",color:"var(--text-primary)",fontWeight:700,fontSize:"0.9rem"},onMouseEnter:n=>{n.currentTarget.style.borderColor="#0070ba",n.currentTarget.style.background="rgba(0,112,186,0.08)"},onMouseLeave:n=>{n.currentTarget.style.borderColor="var(--border-color)",n.currentTarget.style.background="var(--surface-hover)"},children:[p.jsx("span",{style:{fontSize:"1.75rem"},children:"🌍"}),p.jsx("span",{children:"Other Countries"}),p.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-secondary)",fontWeight:500},children:"via PayPal"})]})]}),p.jsx("button",{onClick:t,style:{width:"100%",padding:"0.6rem",background:"transparent",border:"1px solid var(--border-color)",borderRadius:"0.6rem",color:"var(--text-secondary)",cursor:"pointer",fontSize:"0.85rem",transition:"all 0.2s"},children:"Maybe later"})]}),p.jsx("style",{children:`
        @keyframes modal-fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modal-pop {
          from { transform: scale(0.88); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
      `})]})},$N=({setShowDashboard:t,setShowAdmin:e,mobileSidebarOpen:n,setMobileSidebarOpen:r})=>{const{theme:i,toggleTheme:s}=U.useContext(K_),{user:o,login:l,logout:u}=U.useContext(ni),{syncProgressNow:h,syncStatus:f}=U.useContext(ri),g=o&&zN.includes(o.uid),[m,A]=U.useState(!1),[P,R]=U.useState(!1),b=UN(),T=async()=>{if(!P){R(!0);try{if(!await h()){window.alert("Your progress could not be saved to the cloud. Please check your internet connection and try again before logging out.");return}await u()}finally{R(!1)}}};return p.jsxs(p.Fragment,{children:[p.jsxs("header",{className:"header",children:[p.jsxs("div",{className:"header-left",children:[b&&p.jsx("button",{className:"icon-btn",onClick:()=>r(!n),"aria-label":"Toggle menu",style:{marginRight:"0.25rem"},children:p.jsx(xN,{size:22})}),p.jsx("div",{className:"logo",onClick:()=>t(!1),children:"Master DSA"})]}),p.jsxs("div",{className:"header-right",children:[!b&&p.jsx("button",{className:"btn-secondary",onClick:()=>A(!0),children:"Support Developer"}),p.jsx("button",{className:"icon-btn",onClick:s,children:i==="dark"?p.jsx(jN,{size:20}):p.jsx(NN,{size:20})}),o&&!b&&f==="syncing"&&p.jsx("span",{style:{color:"var(--text-secondary)",fontSize:"0.8rem",fontWeight:600},children:"Syncing..."}),o&&!b&&f==="error"&&p.jsx("span",{style:{color:"var(--danger-color)",fontSize:"0.8rem",fontWeight:700},children:"Sync failed"}),o?p.jsxs(p.Fragment,{children:[p.jsxs("button",{className:b?"icon-btn":"btn-secondary",onClick:()=>t(!0),style:{display:"flex",alignItems:"center",gap:"6px"},title:"Dashboard",children:[p.jsx(kN,{size:18}),!b&&p.jsx("span",{children:"Dashboard"})]}),g&&p.jsx("button",{className:"icon-btn",onClick:()=>e(!0),title:"Admin Dashboard",id:"header-admin-btn",children:p.jsx(LN,{size:20})}),p.jsxs("button",{className:"btn-primary",onClick:T,disabled:P||f==="syncing",style:{display:"flex",alignItems:"center",gap:"6px",padding:b?"0.5rem":void 0},title:f==="error"?"Progress sync failed":"Logout",children:[p.jsx(PN,{size:16}),!b&&p.jsx("span",{children:P?"Saving...":"Logout"})]})]}):p.jsxs("button",{className:"btn-primary",onClick:l,style:{display:"flex",alignItems:"center",gap:"6px",padding:b?"0.5rem":void 0},children:[p.jsx(RN,{size:16}),!b&&p.jsx("span",{children:"Sign In"})]})]})]}),m&&p.jsx(BN,{onClose:()=>A(!1)})]})},WN=(t=768)=>{const[e,n]=U.useState(()=>window.innerWidth<t);return U.useEffect(()=>{const r=()=>n(window.innerWidth<t);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[t]),e},FE="dsa_sheet_order",HN=()=>{try{const t=localStorage.getItem(FE);if(t){const e=JSON.parse(t),n=e.map(i=>We.find(s=>s.id===i)).filter(Boolean),r=We.filter(i=>!e.includes(i.id));return[...n,...r]}}catch{}return We},qN=({activeSheet:t,setActiveSheet:e,showDashboard:n,setShowDashboard:r,sidebarOpen:i,setSidebarOpen:s,mobileSidebarOpen:o,setMobileSidebarOpen:l})=>{const[u,h]=U.useState(HN),[f,g]=U.useState(!0),m=U.useRef(null),[A,P]=U.useState(null),R=V=>{m.current=V},b=(V,w)=>{V.preventDefault(),P(w)},T=()=>{m.current=null,P(null)},_=(V,w)=>{V.preventDefault();const y=m.current;if(y===null||y===w){P(null);return}const E=[...u],[S]=E.splice(y,1);E.splice(w,0,S),h(E),localStorage.setItem(FE,JSON.stringify(E.map(C=>C.id))),m.current=null,P(null)},I=WN(),N=i||I,M=p.jsxs(p.Fragment,{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:i?"space-between":"center",padding:"0 1rem 1rem",borderBottom:"1px solid var(--border-color)",marginBottom:"1rem"},children:[i&&p.jsx("div",{className:"sidebar-title",style:{padding:0,margin:0},children:"Menu"}),p.jsx("button",{className:"sidebar-toggle-btn desktop-only",onClick:()=>s(!i),style:{position:"static",transform:"none"},title:i?"Collapse Sidebar":"Expand Sidebar",children:i?p.jsx(DN,{size:20}):p.jsx(bN,{size:20})}),p.jsx("button",{className:"sidebar-toggle-btn mobile-only",onClick:()=>l(!1),title:"Close",children:p.jsx(Zf,{size:20})})]}),p.jsx("div",{className:"sidebar-title",children:"Progress Overview"}),p.jsx("ul",{className:"sheet-list",style:{marginBottom:"2rem"},children:p.jsxs("li",{className:`sheet-item ${n?"active":""}`,onClick:()=>r(!0),children:[p.jsx(ON,{size:18})," Combined"]})}),p.jsxs("div",{className:"sidebar-title",onClick:()=>g(V=>!V),style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",userSelect:"none",paddingRight:"1.5rem"},children:[p.jsx("span",{children:"DSA Sheets"}),p.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"20px",height:"20px",borderRadius:"4px",background:"var(--surface-hover)",transition:"transform 0.25s ease",transform:f?"rotate(0deg)":"rotate(-90deg)"},children:p.jsx(jE,{size:14})})]}),p.jsx("ul",{className:"sheet-list",style:{maxHeight:f?`${u.length*60}px`:"0px",overflow:"hidden",transition:"max-height 0.3s ease"},children:u.map((V,w)=>p.jsxs("li",{draggable:!0,onDragStart:()=>R(w),onDragOver:y=>b(y,w),onDrop:y=>_(y,w),onDragEnd:T,className:`sheet-item ${!n&&t===V.id?"active":""}`,onClick:()=>{e(V.id),r(!1)},style:{opacity:m.current===w?.4:1,borderTop:A===w&&m.current!==w?"2px solid var(--primary-color)":"2px solid transparent",transition:"border-color 0.15s, opacity 0.15s",cursor:"grab"},children:[p.jsx(AN,{size:16,style:{opacity:.35,flexShrink:0,cursor:"grab"}}),p.jsx(_N,{size:18,style:{flexShrink:0}}),p.jsx("span",{children:V.name})]},V.id))}),p.jsx("div",{className:"sidebar-spacer"}),p.jsxs("a",{className:"sheet-item sidebar-help-link",href:"https://www.reddit.com/user/a_shutterbug/",target:"_blank",rel:"noreferrer",title:"Contact Developer",children:[p.jsx(IN,{size:18,style:{flexShrink:0}}),N&&p.jsx("span",{children:"Help / Contact"})]})]});return I?p.jsx(p.Fragment,{children:p.jsx("aside",{style:{position:"fixed",top:"60px",left:0,bottom:0,width:"280px",zIndex:200,background:"var(--surface-color)",borderRight:"1px solid var(--border-color)",overflowY:"auto",padding:"1.5rem 0",boxShadow:"4px 0 24px rgba(0,0,0,0.3)",transform:o?"translateX(0)":"translateX(-100%)",transition:"transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)",display:"flex",flexDirection:"column"},children:M})}):p.jsx("aside",{className:`sidebar ${i?"":"collapsed"}`,children:M})},KN=({stats:t})=>p.jsxs("div",{className:"stats-grid",children:[p.jsxs("div",{className:"stat-card",children:[p.jsx(vN,{className:"stat-icon",style:{color:"#3b82f6"}}),p.jsx("div",{className:"stat-value",children:t.total}),p.jsx("div",{className:"stat-label",children:"Total Problems"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx(TN,{className:"stat-icon",style:{color:"var(--primary-color)"}}),p.jsx("div",{className:"stat-value",children:t.completed}),p.jsx("div",{className:"stat-label",children:"Completed"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx(FN,{className:"stat-icon",style:{color:"#a855f7"}}),p.jsxs("div",{className:"stat-value",children:[t.percentage,"%"]}),p.jsx("div",{className:"stat-label",children:"Progress"})]})]}),GN=({filter:t,setFilter:e,searchQuery:n,setSearchQuery:r})=>p.jsxs("div",{className:"filter-search-container",children:[p.jsxs("div",{className:"search-bar",children:[p.jsx(VN,{size:20,color:"var(--text-secondary)"}),p.jsx("input",{type:"text",placeholder:"Search topics or problems...",value:n,onChange:i=>r(i.target.value)})]}),p.jsxs("div",{className:"filter-tabs",children:[p.jsx("button",{className:`filter-tab ${t==="all"?"active":""}`,onClick:()=>e("all"),children:"All"}),p.jsx("button",{className:`filter-tab ${t==="done"?"active":""}`,onClick:()=>e("done"),children:"✅ Done"}),p.jsx("button",{className:`filter-tab ${t==="revision"?"active":""}`,onClick:()=>e("revision"),children:"⭐ Revision"}),p.jsx("button",{className:`filter-tab ${t==="not_done"?"active":""}`,onClick:()=>e("not_done"),children:"⬜ Not Done"})]})]}),QN=["🔥 Keep going!","💪 Crushed it!","⚡ One more down!","🎯 Nailed it!","🚀 On fire!","✨ Nice work!","🧠 Big brain move!"],YN=["🎉 Sub-topic cleared!","🏅 Section smashed!","💥 You're on a roll!","⚡ Lightning fast!","🦾 Unstoppable!","🌊 Riding the wave!","🎖️ Badge earned!"],XN=["🏆 LEGENDARY!","👑 Absolute king!","🔱 Master of this topic!","🌟 Hall of fame!","🎊 GOAT behaviour!","💎 Diamond grind!","🚀 To the moon!"];function JN(t,e=60,n="normal"){const r=t.getContext("2d"),i=t.width=t.offsetWidth,s=t.height=t.offsetHeight,o=["#8ab4f8","#3ddc84","#fdd663","#f28b82","#c58af9","#ff9800"],l=Array.from({length:e},()=>({x:n==="center"?i/2:Math.random()*i,y:n==="center"?s*.35:-10,r:Math.random()*8+4,d:Math.random()*e,color:o[Math.floor(Math.random()*o.length)],tilt:Math.random()*10-10,tiltAngle:0,tiltAngleInc:Math.random()*.07+.05,speedY:Math.random()*4+2,speedX:(Math.random()-.5)*(n==="center"?8:3),opacity:1,shape:Math.random()>.5?"rect":"circle"}));let u,h=0;const f=n==="center"?150:90,g=()=>{r.clearRect(0,0,i,s),l.forEach(m=>{m.tiltAngle+=m.tiltAngleInc,m.y+=m.speedY,m.x+=m.speedX,m.tilt=Math.sin(m.tiltAngle)*15,h>f*.55&&(m.opacity=Math.max(0,m.opacity-.03)),r.globalAlpha=m.opacity,r.fillStyle=m.color,m.shape==="circle"?(r.beginPath(),r.arc(m.x,m.y,m.r/2,0,Math.PI*2),r.fill()):r.fillRect(m.x+m.tilt,m.y,m.r,m.r/2)}),r.globalAlpha=1,h++,h<f?u=requestAnimationFrame(g):r.clearRect(0,0,i,s)};cancelAnimationFrame(u),g()}function ZN(t,e){const n=document.createElement("canvas");n.style.cssText="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999",document.body.appendChild(n);const r=n.getContext("2d");n.width=window.innerWidth,n.height=window.innerHeight;const i=["#3ddc84","#8ab4f8","#fdd663","#f28b82","#c58af9"],s=Array.from({length:14},(u,h)=>{const f=h/14*Math.PI*2,g=Math.random()*3+2;return{x:t,y:e,vx:Math.cos(f)*g,vy:Math.sin(f)*g,r:Math.random()*4+2,color:i[h%i.length],life:1}});let o;const l=()=>{r.clearRect(0,0,n.width,n.height);let u=!1;s.forEach(h=>{h.x+=h.vx,h.y+=h.vy,h.vy+=.15,h.life-=.035,!(h.life<=0)&&(u=!0,r.globalAlpha=h.life,r.fillStyle=h.color,r.beginPath(),r.arc(h.x,h.y,h.r,0,Math.PI*2),r.fill())}),r.globalAlpha=1,u?o=requestAnimationFrame(l):(cancelAnimationFrame(o),n.remove())};l()}const Uc=t=>t[Math.floor(Math.random()*t.length)],eD=({type:t,title:e,tagline:n,onClose:r})=>{const i=U.useRef(null),s=t==="heading";return U.useEffect(()=>{i.current&&JN(i.current,s?200:100,"center");const o=setTimeout(r,s?4e3:3e3);return()=>clearTimeout(o)},[]),p.jsxs("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:2e3,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.72)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",cursor:"pointer"},children:[p.jsx("canvas",{ref:i,style:{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:2001}}),p.jsxs("div",{style:{position:"relative",zIndex:2002,textAlign:"center",padding:"0 2rem"},children:[p.jsx("div",{style:{fontSize:s?"clamp(2rem, 6vw, 3.5rem)":"clamp(1.6rem, 5vw, 2.6rem)",fontWeight:900,letterSpacing:"-0.02em",lineHeight:1.1,background:s?"linear-gradient(90deg, #3ddc84 0%, #8ab4f8 50%, #c58af9 100%)":"linear-gradient(90deg, #3ddc84 0%, #8ab4f8 100%)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent",animation:"cin-slide-up 0.5s cubic-bezier(0.22,1,0.36,1) both",marginBottom:"0.75rem",textShadow:"none",filter:"drop-shadow(0 0 32px rgba(61,220,132,0.35))"},children:s?"🏆 STEP CONQUERED! 🏆":"🎉 SUBTOPIC CLEARED! 🎉"}),p.jsxs("div",{style:{color:"rgba(255,255,255,0.85)",fontSize:s?"1.1rem":"0.95rem",fontWeight:600,animation:"cin-slide-up 0.5s 0.1s cubic-bezier(0.22,1,0.36,1) both",marginBottom:"0.5rem"},children:['"',e,'"']}),p.jsx("div",{style:{color:s?"#3ddc84":"#8ab4f8",fontSize:s?"1rem":"0.9rem",fontWeight:700,animation:"cin-slide-up 0.5s 0.2s cubic-bezier(0.22,1,0.36,1) both",marginBottom:"2rem"},children:n})]}),p.jsx("style",{children:`
        @keyframes cin-slide-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})},tD=({message:t,visible:e})=>p.jsxs("div",{style:{position:"fixed",bottom:"2rem",right:"2rem",transform:`translateY(${e?"0":"20px"}) scale(${e?1:.92})`,opacity:e?1:0,transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",background:"rgba(32,33,36,0.88)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(61,220,132,0.45)",color:"#3ddc84",borderRadius:"0.9rem",padding:"0.75rem 1.25rem",fontWeight:800,fontSize:"0.95rem",boxShadow:"0 0 20px rgba(61,220,132,0.2), 0 8px 32px rgba(0,0,0,0.4)",zIndex:1500,pointerEvents:"none",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx("span",{style:{fontSize:"1.1rem"},children:"✅"}),t]}),nD=({message:t,onLogin:e,visible:n})=>p.jsxs("div",{style:{position:"fixed",bottom:"2rem",left:"50%",transform:`translateX(-50%) translateY(${n?"0":"80px"})`,opacity:n?1:0,transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",background:"var(--surface-color)",border:"1px solid var(--border-color)",borderRadius:"0.75rem",padding:"0.9rem 1.5rem",display:"flex",alignItems:"center",gap:"1rem",boxShadow:"0 10px 30px rgba(0,0,0,0.4)",zIndex:1e3,pointerEvents:n?"all":"none",minWidth:"300px"},children:[p.jsx(CN,{size:18,color:"var(--revision-color)"}),p.jsx("span",{style:{flex:1,color:"var(--text-primary)",fontSize:"0.9rem"},children:t}),p.jsx("button",{onClick:e,style:{background:"var(--primary-color)",color:"#fff",border:"none",borderRadius:"0.5rem",padding:"0.4rem 0.9rem",fontWeight:700,cursor:"pointer",fontSize:"0.85rem",whiteSpace:"nowrap"},children:"Sign In"})]}),Ir=({url:t,type:e})=>{if(!t)return p.jsx("span",{style:{opacity:.2},children:"-"});const r={blog:"/logo/post.svg",yt:"/logo/yt.svg",lc:"/logo/lc.svg",cf:"/logo/cf.svg",gfg:"/logo/gfg.svg",cn:"/logo/cn.svg",tuf:"/logo/tuf.svg"}[e]||"";return p.jsx("a",{href:t,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"transform 0.2s"},className:"hover-scale",children:r?p.jsx("img",{src:r,alt:e,style:{width:"20px",height:"20px",objectFit:"contain"}}):p.jsx("span",{children:"🔗"})})},rD=({questionTitle:t,initialValue:e,onClose:n,onSave:r})=>{const[i,s]=U.useState(e||""),[o,l]=U.useState(!1);U.useEffect(()=>{s(e||"")},[e]);const u=()=>{const g=i.trim();r(g)},h=()=>{l(!0),setTimeout(n,220)},f=g=>{(g.metaKey||g.ctrlKey)&&g.key==="Enter"&&(g.preventDefault(),u()),g.key==="Escape"&&(g.preventDefault(),h())};return p.jsx("div",{className:`notes-modal-backdrop ${o?"closing":""}`,role:"presentation",onMouseDown:h,children:p.jsxs("div",{className:`notes-modal ${o?"closing":""}`,role:"dialog","aria-modal":"true","aria-labelledby":"notes-modal-title",onMouseDown:g=>g.stopPropagation(),children:[p.jsx("div",{className:"notes-modal-icon",children:"📝"}),p.jsx("button",{className:"notes-modal-close",onClick:h,"aria-label":"Close notes",children:p.jsx(Zf,{size:20})}),p.jsx("h2",{id:"notes-modal-title",children:"Save Notes"}),p.jsxs("p",{className:"notes-modal-subtitle",children:[p.jsx("span",{className:"notes-modal-dot"}),t]}),p.jsxs("div",{className:"notes-modal-textarea-wrap",children:[p.jsx("textarea",{className:"notes-modal-textarea",value:i,autoFocus:!0,placeholder:"Write your thoughts, patterns, or reminders...",onChange:g=>s(g.target.value),onKeyDown:f}),p.jsxs("span",{className:"notes-modal-charcount",children:[i.length," chars"]})]}),p.jsxs("div",{className:"notes-modal-actions",children:[p.jsx("button",{className:"notes-cancel-btn",onClick:h,children:"Cancel"}),p.jsxs("button",{className:"notes-save-btn",onClick:u,children:[p.jsx("span",{className:"notes-save-icon",children:"✓"}),"Save Note",p.jsx("span",{className:"notes-shortcut-hint",children:"⌘↵"})]})]})]})})},ep=(t,e)=>{var i,s,o;let n=((i=t.questions)==null?void 0:i.length)||0,r=((s=t.questions)==null?void 0:s.filter(l=>{var u;return(u=e[l.id])==null?void 0:u.status}).length)||0;return(o=t.subcategories)==null||o.forEach(l=>{const u=ep(l,e);n+=u.total,r+=u.completed}),{total:n,completed:r}},xy=({questions:t,sheetId:e,onAuthRequired:n,onQuestionToggle:r})=>{const{progress:i,updateQuestionStatus:s,updateQuestionNote:o}=U.useContext(ri),{user:l}=U.useContext(ni),[u,h]=U.useState(null),f=e==="a2z_flawless"||e==="SDE",g=e==="a2z_flawless"||e==="SDE",m=e==="a2z_flawless",A=e==="a2z_flawless",P=e==="a2z_flawless",R=e==="striver_cp",b=(_,I)=>{if(!l){n();return}h({id:_.id,title:_.title,note:I||""})},T=_=>{u&&(o(e,u.id,_),h(null))};return p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{overflowX:"auto"},children:p.jsxs("table",{className:"questions-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{style:{width:"40%"},children:"Topic"}),f&&p.jsx("th",{style:{textAlign:"center"},children:"Blog"}),g&&p.jsx("th",{style:{textAlign:"center"},children:"YT"}),p.jsx("th",{style:{textAlign:"center"},children:R?"CF":"LC"}),m&&p.jsx("th",{style:{textAlign:"center"},children:"GFG"}),A&&p.jsx("th",{style:{textAlign:"center"},children:"CN"}),P&&p.jsx("th",{style:{textAlign:"center"},children:"TUF"}),p.jsx("th",{style:{textAlign:"center"},children:"Done"}),p.jsx("th",{style:{textAlign:"center"},children:"Note"}),p.jsx("th",{style:{textAlign:"center"},children:"Rev"})]})}),p.jsx("tbody",{children:t.map(_=>{var V,w,y,E,S,C,x,k;const I=((V=i[e])==null?void 0:V[_.id])||{status:!1,revision:!1,note:""},N=I.status,M=!!I.note;return p.jsxs("tr",{className:N?"q-row-done":"",children:[p.jsx("td",{style:{position:"relative"},children:p.jsxs("div",{className:"question-title-cell",children:[p.jsx("span",{style:{width:"3px",height:"100%",position:"absolute",left:0,top:0,borderRadius:"0 2px 2px 0",backgroundColor:N?"#3ddc84":"transparent",boxShadow:N?"0 0 8px rgba(61,220,132,0.6)":"none",transition:"all 0.4s ease"}}),p.jsx("a",{href:_.url,target:"_blank",rel:"noreferrer",className:"question-link",style:{textDecoration:N?"line-through":"none",opacity:N?.55:1,transition:"all 0.3s ease"},children:_.title})]})}),f&&p.jsx("td",{style:{textAlign:"center"},children:p.jsx(Ir,{url:(w=_.links)==null?void 0:w.blog,type:"blog"})}),g&&p.jsx("td",{style:{textAlign:"center"},children:p.jsx(Ir,{url:(y=_.links)==null?void 0:y.yt,type:"yt"})}),p.jsx("td",{style:{textAlign:"center"},children:R?p.jsx(Ir,{url:(E=_.links)==null?void 0:E.cf,type:"cf"}):p.jsx(Ir,{url:(S=_.links)==null?void 0:S.lc,type:"lc"})}),m&&p.jsx("td",{style:{textAlign:"center"},children:p.jsx(Ir,{url:(C=_.links)==null?void 0:C.gfg,type:"gfg"})}),A&&p.jsx("td",{style:{textAlign:"center"},children:p.jsx(Ir,{url:(x=_.links)==null?void 0:x.cn,type:"cn"})}),P&&p.jsx("td",{style:{textAlign:"center"},children:p.jsx(Ir,{url:(k=_.links)==null?void 0:k.tuf,type:"tuf"})}),p.jsx("td",{style:{textAlign:"center"},children:p.jsx("button",{className:`custom-checkbox ${N?"checked":""} ${l?"":"disabled"}`,onClick:De=>{if(!l){n();return}const fe=!N;if(s(e,_.id,fe,!1),fe){const Ae=De.currentTarget.getBoundingClientRect();ZN(Ae.left+Ae.width/2,Ae.top+Ae.height/2),r(e,_.id)}},title:N?"Mark as undone":"Mark as done",children:p.jsx("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:N&&p.jsx("polyline",{points:"2,8 6,12 14,4"})})})}),p.jsx("td",{className:"question-note-cell",children:p.jsx("button",{className:`note-open-btn ${M?"has-note":""}`,onClick:()=>b(_,I.note),title:M?"Edit note":"Add note","aria-label":M?`Edit note for ${_.title}`:`Add note for ${_.title}`,children:M?p.jsx(EN,{size:22,strokeWidth:2.4}):p.jsx(SN,{size:22,strokeWidth:2.4})})}),p.jsx("td",{style:{textAlign:"center"},children:p.jsx(MN,{size:20,fill:I.revision?"currentColor":"none",className:`action-icon ${I.revision?"active":""}`,style:{cursor:l?"pointer":"not-allowed",opacity:l?1:.5},onClick:()=>{if(!l){n();return}s(e,_.id,!I.revision,!0)}})})]},_.id)})})]})}),u&&p.jsx(rD,{questionTitle:u.title,initialValue:u.note,onClose:()=>h(null),onSave:T})]})},UE=({group:t,sheetId:e,defaultOpen:n=!1,isSub:r=!1,onAuthRequired:i,onQuestionToggle:s,onCelebrate:o})=>{var V,w;const{progress:l}=U.useContext(ri),[u,h]=U.useState(n),f=U.useRef(null);if(U.useEffect(()=>{n&&h(!0)},[n]),!t)return null;if(t.isHeading===!1)return p.jsx(xy,{questions:t.questions,sheetId:e,onAuthRequired:i,onQuestionToggle:s});const g=((V=t.questions)==null?void 0:V.length)>0,m=((w=t.subcategories)==null?void 0:w.length)>0;if(!g&&!m)return null;const A=l[e]||{},P=t.originalProg||ep(t,A),R=P.total>0&&P.completed===P.total;U.useEffect(()=>{if(P.total!==0){if(f.current===null){f.current=P.completed;return}f.current<P.total&&P.completed===P.total&&o(r?"sub":"heading",t.title),f.current=P.completed}},[P.completed,P.total]);const b=P.total===0?0:Math.round(P.completed/P.total*100),T=r?"linear-gradient(90deg, rgba(61,220,132,0.22) 0%, rgba(61,220,132,0.08) 100%)":"linear-gradient(90deg, rgba(61,220,132,0.18) 0%, rgba(61,220,132,0.05) 100%)",_=r?"rgba(16,185,129,0.15)":"rgba(59,130,246,0.12)",I=r?"var(--bg-color)":"var(--surface-color)",N=R?T:b>0?`linear-gradient(to right, ${_} ${b}%, ${I} ${b}%)`:I,M=R?r?"1px solid rgba(61,220,132,0.3)":"1px solid rgba(61,220,132,0.45)":void 0;return p.jsxs("div",{className:`accordion-group ${r?"sub-group":"main-group"} ${R?"group-complete":""}`,style:{border:r?"none":M,borderRadius:r?"0":void 0,boxShadow:R&&!r?"0 0 0 1px rgba(61,220,132,0.15)":void 0,transition:"box-shadow 0.4s ease, border-color 0.4s ease"},children:[p.jsxs("div",{className:`accordion-header ${r?"sub-header":"main-header"}`,onClick:()=>h(!u),style:{background:N,transition:"background 0.5s ease",borderBottom:u&&g?"1px solid var(--border-color)":"none",color:R?"#3ddc84":r?"var(--text-secondary)":"var(--primary-color)",fontSize:r?"1rem":"1.15rem"},children:[p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[R&&p.jsx("span",{style:{fontSize:"0.9em",filter:"drop-shadow(0 0 4px #3ddc84)"},children:"✅"}),t.title]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[p.jsxs("span",{style:{fontSize:"0.85rem",fontWeight:700,opacity:.9,color:R?"#3ddc84":"inherit"},children:[P.completed,"/",P.total]}),u?p.jsx(jE,{size:20}):p.jsx(wN,{size:20})]})]}),u&&p.jsxs("div",{className:"accordion-body",children:[m&&p.jsx("div",{className:"subcategories-container",children:t.subcategories.map((y,E)=>p.jsx(UE,{group:y,sheetId:e,defaultOpen:n,isSub:!0,onAuthRequired:i,onQuestionToggle:s,onCelebrate:o},E))}),g&&p.jsx(xy,{questions:t.questions,sheetId:e,onAuthRequired:i,onQuestionToggle:s})]})]})},iD=({data:t,sheetId:e,filter:n,searchQuery:r})=>{const{progress:i}=U.useContext(ri),{login:s}=U.useContext(ni),o=i[e]||{},[l,u]=U.useState(!1),h=U.useRef(null),[f,g]=U.useState(""),[m,A]=U.useState(!1),P=U.useRef(null),[R,b]=U.useState(null),T=U.useCallback(()=>{u(!0),clearTimeout(h.current),h.current=setTimeout(()=>u(!1),3500)},[]),_=U.useCallback(()=>{g(Uc(QN)),A(!0),clearTimeout(P.current),P.current=setTimeout(()=>A(!1),2e3)},[]),I=U.useCallback((y,E)=>{const S=Uc(y==="heading"?XN:YN);setTimeout(()=>b({type:y,title:E,tagline:S}),300)},[]),N=y=>{if(r&&!y.title.toLowerCase().includes(r.toLowerCase()))return!1;const E=o[y.id]||{status:!1,revision:!1};return!(n==="done"&&!E.status||n==="not_done"&&E.status||n==="revision"&&!E.revision)},M=y=>{const E=ep(y,o),S=y.questions?y.questions.filter(N):[],C=y.subcategories?y.subcategories.map(M).filter(x=>x.questions.length>0||x.subcategories.length>0):[];return{...y,originalProg:E,questions:S,subcategories:C}},V=r.length>0||n!=="all",w=t.map(M).filter(y=>y.questions.length>0||y.subcategories.length>0);return w.length===0?p.jsx("div",{style:{padding:"2rem",textAlign:"center",color:"var(--text-secondary)"},children:"No problems match your filters."}):p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"question-list-container",children:w.map((y,E)=>p.jsx(UE,{group:y,sheetId:e,defaultOpen:V,onAuthRequired:T,onQuestionToggle:_,onCelebrate:I},E))}),p.jsx(tD,{message:f,visible:m}),p.jsx(nD,{visible:l,message:"Sign in to track your progress!",onLogin:()=>{u(!1),s()}}),R&&p.jsx(eD,{type:R.type,title:R.title,tagline:R.tagline,onClose:()=>b(null)})]})},sD=({activeSheet:t})=>{const[e,n]=U.useState(null),[r,i]=U.useState(!0),[s,o]=U.useState("all"),[l,u]=U.useState(""),{progress:h,getSheetStats:f,loadingCloud:g}=U.useContext(ri),m=Object.values(h||{}).some(P=>Object.keys(P||{}).length>0);if(U.useEffect(()=>{(async()=>{i(!0);const R=await xu(t);n(R),o("all"),u(""),i(!1)})()},[t]),r||!e)return p.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:"Loading sheet data..."});if(g&&!m)return p.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:"Loading your saved progress..."});const A=f(t,e.totalQuestions);return p.jsxs("div",{className:"sheet-view",children:[p.jsxs("div",{className:"sheet-header",children:[p.jsx("h1",{children:e.info.name}),p.jsx("p",{dangerouslySetInnerHTML:{__html:e.info.description}})]}),p.jsx(KN,{stats:A}),p.jsx(GN,{filter:s,setFilter:o,searchQuery:l,setSearchQuery:u}),p.jsx(iD,{data:e.data,sheetId:t,filter:s,searchQuery:l})]})},oD=({setActiveSheet:t,setShowDashboard:e})=>{const{user:n}=U.useContext(ni),{progress:r,loadingCloud:i}=U.useContext(ri),[s,o]=U.useState(()=>We.map(R=>R.id)),[l,u]=U.useState({}),h=Object.values(r||{}).some(R=>Object.keys(R||{}).length>0);U.useEffect(()=>{(async()=>{const b={};for(const T of We){const _=await xu(T.id);b[T.id]=_?_.totalQuestions:0}u(b)})()},[]);const f=R=>{o(b=>b.includes(R)?b.filter(T=>T!==R):[...b,R])};if(!n)return p.jsxs("div",{className:"dashboard-empty",children:[p.jsx("h1",{style:{fontSize:"2rem",marginBottom:"1rem"},children:"Combined Progress"}),p.jsx("p",{children:"Please sign in to view your combined progress and dashboard."})]});if(i&&!h)return p.jsxs("div",{className:"dashboard-empty",children:[p.jsx("h1",{style:{fontSize:"2rem",marginBottom:"1rem"},children:"Combined Progress"}),p.jsx("p",{children:"Loading your saved progress..."})]});let g=0,m=0,A=0;s.forEach(R=>{const b=r[R]||{};Object.values(b).forEach(T=>{T.status&&g++,T.revision&&m++}),A+=l[R]||0});const P=A===0?0:Math.round(g/A*100);return p.jsxs("div",{children:[p.jsx("h1",{style:{fontSize:"2rem",fontWeight:800,marginBottom:"2rem"},children:"Combined Progress"}),p.jsxs("div",{className:"dashboard-profile",style:{flexWrap:"wrap",alignItems:"center"},children:[p.jsx("img",{src:n.photoURL,alt:"Profile",className:"profile-img"}),p.jsxs("div",{className:"profile-info",children:[p.jsx("h2",{children:n.displayName}),p.jsx("p",{children:n.email})]}),p.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:"3rem",flexWrap:"wrap"},children:[p.jsxs("div",{style:{textAlign:"center"},children:[p.jsxs("div",{style:{fontSize:"2.5rem",fontWeight:800,color:"var(--primary-color)"},children:[g," ",p.jsxs("span",{style:{fontSize:"1rem",color:"var(--text-secondary)"},children:["/ ",A]})]}),p.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Total Solved"})]}),p.jsxs("div",{style:{textAlign:"center"},children:[p.jsx("div",{style:{fontSize:"2.5rem",fontWeight:800,color:"var(--revision-color)"},children:m}),p.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"To Revise"})]}),p.jsxs("div",{style:{textAlign:"center"},children:[p.jsxs("div",{style:{fontSize:"2.5rem",fontWeight:800,color:"#3b82f6"},children:[P,"%"]}),p.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Progress"})]}),p.jsxs("div",{style:{textAlign:"center"},children:[p.jsx("div",{style:{fontSize:"2.5rem",fontWeight:800,color:"#10b981"},children:We.filter(R=>Object.values(r[R.id]||{}).some(b=>b.status)).length}),p.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Sheets Started"})]})]})]}),p.jsxs("div",{style:{marginBottom:"2rem"},children:[p.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,marginBottom:"1rem"},children:"Select Sheets to Combine Progress"}),p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem"},children:We.map(R=>p.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1rem",background:"var(--surface-color)",borderRadius:"0.5rem",border:"1px solid var(--border-color)",cursor:"pointer",transition:"background-color 0.2s"},className:"filter-tab",children:[p.jsx("input",{type:"checkbox",checked:s.includes(R.id),onChange:()=>f(R.id),style:{accentColor:"var(--primary-color)",width:"1.2rem",height:"1.2rem"}}),p.jsx("span",{style:{fontWeight:600},children:R.name})]},R.id))})]}),p.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1.5rem"},children:"Individual Sheet Reports"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.5rem"},children:We.map(R=>{const b=r[R.id]||{};let T=0,_=0;Object.values(b).forEach(N=>{N.status&&T++,N.revision&&_++});const I=l[R.id]||0;return p.jsxs("div",{className:"sheet-report-card",style:{cursor:"pointer",opacity:s.includes(R.id)?1:.5},onClick:()=>{t(R.id),e(!1)},children:[p.jsxs("div",{className:"sheet-report-header",children:[p.jsx("h3",{children:R.name}),p.jsxs("span",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:[T," / ",I," Solved"]})]}),p.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1rem"},children:[p.jsxs("div",{style:{flex:1},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"0.25rem"},children:[p.jsx("span",{children:"Done"}),p.jsx("span",{style:{color:"var(--primary-color)"},children:T})]}),p.jsx("div",{className:"progress-bar-container",children:p.jsx("div",{className:"progress-bar-fill",style:{width:I?`${Math.min(100,T/I*100)}%`:"0%",backgroundColor:"var(--primary-color)"}})})]}),p.jsxs("div",{style:{flex:1},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",marginBottom:"0.25rem"},children:[p.jsx("span",{children:"Revise"}),p.jsx("span",{style:{color:"var(--revision-color)"},children:_})]}),p.jsx("div",{className:"progress-bar-container",children:p.jsx("div",{className:"progress-bar-fill",style:{width:I?`${Math.min(100,_/I*100)}%`:"0%",backgroundColor:"var(--revision-color)"}})})]})]})]},R.id)})})]})};function Da(t){if(!t)return"Never";const e=t.toDate?t.toDate():new Date(t),n=Math.floor((Date.now()-e.getTime())/1e3);return n<60?`${n}s ago`:n<3600?`${Math.floor(n/60)}m ago`:n<86400?`${Math.floor(n/3600)}h ago`:`${Math.floor(n/86400)}d ago`}function aD(t){if(!t)return{className:"activity-never",text:"Never"};const e=t.toDate?t.toDate():new Date(t),n=(Date.now()-e.getTime())/36e5;return n<1?{className:"activity-high",text:Da(t)}:n<24?{className:"activity-medium",text:Da(t)}:n>72?{className:"activity-low",text:Da(t)}:{className:"activity-normal",text:Da(t)}}const lD={a2z_flawless:455,SDE:191,blind75:75,neetcode150:150,neetcode250:250,striver_cp:297};function Ny(t){if(!t)return!1;const e=t.toDate?t.toDate():new Date(t),n=new Date;return e.getDate()===n.getDate()&&e.getMonth()===n.getMonth()&&e.getFullYear()===n.getFullYear()}function Dy(t){if(!t)return!1;const e=t.toDate?t.toDate():new Date(t);return(Date.now()-e.getTime())/6e4<=15}function ql(t){if(!t)return 0;const n=(t.toDate?t.toDate():new Date(t)).getTime();return Number.isNaN(n)?0:n}function ba(t){return[t.lastSeenAt,t.updatedAt,t.lastSolvedAt].filter(Boolean).reduce((e,n)=>ql(n)>ql(e)?n:e,null)}function uD(t,e){if(t&&t.trim().length>0){const n=t.trim().split(" ");return n.length>1?(n[0][0]+n[n.length-1][0]).toUpperCase():t.substring(0,2).toUpperCase()}return e&&e.trim().length>0?e.substring(0,2).toUpperCase():"?"}const cD=({users:t,getSolved:e,getSheetSolved:n})=>{const[r,i]=U.useState(""),[s,o]=U.useState("totalSolved"),[l,u]=U.useState(!1),[h,f]=U.useState(!1),g=t.filter(m=>{const A=r.toLowerCase(),P=(m.displayName||"").toLowerCase().includes(A)||(m.email||"").toLowerCase().includes(A),R=Dy(ba(m)),b=Ny(m.lastSolvedAt);return l&&!R||h&&!b?!1:P}).sort((m,A)=>s==="totalSolved"?e(A)-e(m):s==="lastActiveAt"?ql(ba(A))-ql(ba(m)):(m.displayName||"").localeCompare(A.displayName||""));return p.jsxs("div",{className:"admin-section",children:[p.jsxs("div",{className:"admin-section-header",children:[p.jsx("h2",{className:"admin-section-title",children:"👤 All Users"}),p.jsxs("div",{className:"admin-controls",style:{flexWrap:"wrap"},children:[p.jsxs("div",{className:"admin-filter-toggles",children:[p.jsx("button",{className:`filter-toggle-btn ${l?"active":""}`,onClick:()=>u(!l),children:"🟢 Online Now"}),p.jsx("button",{className:`filter-toggle-btn ${h?"active":""}`,onClick:()=>f(!h),children:"✅ Active Today"})]}),p.jsx("input",{type:"text",placeholder:"Search by name or email…",value:r,onChange:m=>i(m.target.value),className:"admin-search",id:"admin-user-search"}),p.jsxs("select",{value:s,onChange:m=>o(m.target.value),className:"admin-select",id:"admin-sort-select",children:[p.jsx("option",{value:"totalSolved",children:"Sort: Most Solved"}),p.jsx("option",{value:"lastActiveAt",children:"Sort: Recent Activity"}),p.jsx("option",{value:"name",children:"Sort: Name A–Z"})]})]})]}),p.jsx("div",{className:"admin-table-wrapper",children:p.jsxs("table",{className:"admin-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Rank"}),p.jsx("th",{children:"User"}),p.jsx("th",{children:"Status"}),We.map(m=>p.jsx("th",{children:m.name},m.id)),p.jsx("th",{children:"Total"}),p.jsx("th",{children:"Last Active"})]})}),p.jsxs("tbody",{children:[g.map((m,A)=>{const P=ba(m),R=Dy(P),b=Ny(m.lastSolvedAt),T=e(m),_=aD(P);let I=`#${A+1}`;return s==="totalSolved"&&T>0&&(A===0?I="🥇":A===1?I="🥈":A===2&&(I="🥉")),p.jsxs("tr",{className:R?"admin-row-online":b?"admin-row-active":"",children:[p.jsx("td",{className:"admin-rank-cell",children:T>0||s!=="totalSolved"?I:"-"}),p.jsx("td",{children:p.jsxs("div",{className:"admin-user-cell",children:[p.jsxs("div",{style:{position:"relative"},children:[p.jsx("img",{src:m.photoURL||"invalid",alt:"",className:"admin-avatar",style:{display:m.photoURL?"block":"none"},onError:N=>{N.target.style.display="none",N.target.nextElementSibling&&(N.target.nextElementSibling.style.display="flex")}}),p.jsx("div",{className:"admin-avatar-placeholder",style:{display:m.photoURL?"none":"flex"},children:uD(m.displayName,m.email)}),R&&p.jsx("div",{className:"admin-online-indicator",title:"Online now"})]}),p.jsxs("div",{children:[p.jsx("div",{className:"admin-user-name",children:m.displayName||"Anonymous"}),p.jsx("div",{className:"admin-user-email",children:m.email}),m.location&&m.location!=="Unknown"&&p.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--text-secondary)",marginTop:"2px",display:"flex",alignItems:"center",gap:"3px"},children:[p.jsx("span",{style:{fontSize:"0.8rem"},children:"🌍"})," ",m.location]})]})]})}),p.jsx("td",{children:R?p.jsx("span",{className:"admin-status-badge online",children:"Online"}):b?p.jsx("span",{className:"admin-status-badge active-today",children:"Active Today"}):p.jsx("span",{className:"admin-status-badge offline",children:"Offline"})}),We.map(N=>{const M=n(m,N.id),V=lD[N.id]||1,w=Math.round(M/V*100);return p.jsx("td",{className:"admin-sheet-cell",children:M>0?p.jsxs("div",{className:"admin-table-progress",children:[p.jsxs("div",{className:"admin-table-progress-text",children:[p.jsx("span",{className:"admin-solved-badge",children:M}),p.jsxs("span",{className:"admin-table-progress-pct",children:[w,"%"]})]}),p.jsx("div",{className:"admin-table-progress-bar",children:p.jsx("div",{className:"admin-table-progress-fill",style:{width:`${w}%`}})})]}):p.jsx("span",{className:"admin-zero",children:"—"})},N.id)}),p.jsx("td",{className:"admin-total-cell",children:T}),p.jsx("td",{className:"admin-time-cell",children:p.jsx("span",{className:_.className,children:_.text})})]},m.uid)}),g.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:We.length+5,style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"No users found"})})]})]})})]})},hD=["JROhXIAevXfsMos9qTTXcpf92vD2","kcFyQ6WdW9VBxUnCMt1NIBzJRyL2"];Object.fromEntries(We.map(t=>[t.id,t.name]));const dD={a2z_flawless:455,SDE:191,blind75:75,neetcode150:150,neetcode250:250,striver_cp:297},fD=new Set(We.map(t=>t.id)),pD=t=>typeof t=="boolean"?{status:t,revision:!1,note:""}:!t||typeof t!="object"?{status:!1,revision:!1,note:""}:{status:!!t.status,revision:!!t.revision,note:t.note||""},by=t=>Object.values(t).reduce((e,n)=>e+Object.values(n||{}).filter(r=>r==null?void 0:r.status).length,0);function mD(t){if(!t)return!1;const e=t.toDate?t.toDate():new Date(t),n=new Date;return e.getDate()===n.getDate()&&e.getMonth()===n.getMonth()&&e.getFullYear()===n.getFullYear()}function gD(t){if(!t)return!1;const e=t.toDate?t.toDate():new Date(t);return(Date.now()-e.getTime())/6e4<=15}function Oy(t){if(!t)return 0;const n=(t.toDate?t.toDate():new Date(t)).getTime();return Number.isNaN(n)?0:n}function yD(t){return[t.lastSeenAt,t.updatedAt,t.lastSolvedAt].filter(Boolean).reduce((e,n)=>Oy(n)>Oy(e)?n:e,null)}const ct=({value:t,label:e,color:n})=>p.jsxs("div",{className:"admin-stat-card",style:{borderTopColor:n},children:[p.jsx("div",{className:"admin-stat-value",style:{color:n},children:t}),p.jsx("div",{className:"admin-stat-label",children:e})]}),vD=()=>{var mt;const{user:t}=U.useContext(ni),[e,n]=U.useState([]),[r,i]=U.useState(!0),[s,o]=U.useState(""),[l,u]=U.useState("overview"),[h,f]=U.useState(new Set),g=t&&hD.includes(t.uid);if(U.useEffect(()=>{(async()=>{const $=await xu("a2z_flawless");if(!$)return;const H=new Set,Y=G=>{G.forEach(se=>{(se.questions||[]).forEach(ye=>{ye.id&&H.add(ye.id)}),(se.subcategories||[]).forEach(ye=>Y([ye]))})};Y($.data),f(H)})()},[]),U.useEffect(()=>{if(!g)return;(async()=>{try{const H=(await Dx(mx(Qr,"users"))).docs.map(Y=>({uid:Y.id,...Y.data()}));n(H)}catch{o("Failed to load user data. Check Firestore rules.")}finally{i(!1)}})()},[g]),!t)return p.jsxs("div",{className:"admin-access-denied",children:[p.jsx("div",{className:"admin-lock",children:"🔒"}),p.jsx("h2",{children:"Sign in required"}),p.jsx("p",{children:"Please sign in with your admin account to access this page."})]});if(!g)return p.jsxs("div",{className:"admin-access-denied",children:[p.jsx("div",{className:"admin-lock",children:"⛔"}),p.jsx("h2",{children:"Access Denied"}),p.jsx("p",{children:"You don't have permission to view this page."}),p.jsxs("p",{className:"admin-uid-hint",children:["Your UID: ",p.jsx("code",{children:t.uid})]})]});if(r)return p.jsxs("div",{className:"admin-loading",children:[p.jsx("div",{className:"admin-spinner"}),p.jsx("p",{children:"Loading admin data…"})]});if(s)return p.jsxs("div",{className:"admin-access-denied",children:[p.jsx("div",{className:"admin-lock",children:"⚠️"}),p.jsx("h2",{children:s})]});const m=L=>{if(!L)return{};const $={},H=(Y,G,se)=>{const ye=pD(se);$[Y]||($[Y]={});const Qe=$[Y][G];$[Y][G]=Qe?{status:Qe.status||ye.status,revision:Qe.revision||ye.revision,note:Qe.note||ye.note}:ye};for(const[Y,G]of Object.entries(L))if(typeof G=="boolean")H("a2z_flawless",Y,G);else if(G&&typeof G=="object")if(fD.has(Y))for(const[se,ye]of Object.entries(G)){const Qe=h.has(se)?"a2z_flawless":Y;H(Qe,se,ye)}else("status"in G||"revision"in G||"note"in G)&&H("a2z_flawless",Y,G);return $},A=L=>{const $=L.progress||{},H=m($),Y=by(H);return Object.keys($).length>0?Y:Number(L.totalSolved)||0},P=(L,$)=>{const H=L.progress||{},G=m(H)[$]||{};return by({[$]:G})},R=e.length,b=e.filter(L=>mD(L.lastSolvedAt)).length,T=e.filter(L=>gD(yD(L))).length,_=e.reduce((L,$)=>L+A($),0),I=e.reduce((L,$)=>!L||A($)>A(L)?$:L,null),N=e.filter(L=>A(L)>0).length,M=R-N,V=R>0?Math.round(N/R*100):0,w=R>0?Math.round(M/R*100):0,y=N>0?Math.round(_/N):0,E=e.filter(L=>A(L)>=100).length,S=e.filter(L=>A(L)>=10&&A(L)<100).length,C=e.filter(L=>A(L)>=1&&A(L)<10).length,x=e.filter(L=>L.location&&L.location!=="Unknown"),k=x.filter(L=>L.location.toLowerCase().includes("india")).length,De=x.length-k,fe={};let Ae=1;return We.forEach(L=>{let $=0,H=0;e.forEach(se=>{const ye=P(se,L.id);ye>0&&(H++,$+=ye)});const Y=N*(dD[L.id]||1),G=N>0?$/Y*100:0;G>Ae&&(Ae=G),fe[L.id]={completionPct:G,uniqueUsersInSheet:H}}),p.jsxs("div",{className:"admin-dashboard",children:[p.jsxs("div",{className:"admin-header",children:[p.jsxs("div",{children:[p.jsx("h1",{className:"admin-title",children:"Admin Dashboard"}),p.jsxs("p",{className:"admin-subtitle",children:["Live data from Firestore · ",R," registered users"]})]}),p.jsx("span",{className:"admin-badge",children:"🛡️ Admin"})]}),p.jsxs("div",{className:"admin-tabs",children:[p.jsx("button",{className:`admin-tab ${l==="overview"?"active":""}`,onClick:()=>u("overview"),children:"📊 Overview"}),p.jsx("button",{className:`admin-tab ${l==="users"?"active":""}`,onClick:()=>u("users"),children:"👥 Users"})]}),l==="overview"?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"admin-section",children:[p.jsx("h2",{className:"admin-section-title",children:"Platform Stats"}),p.jsxs("div",{className:"admin-stats-grid",children:[p.jsx(ct,{value:R,label:"Total Users",color:"#8ab4f8"}),p.jsx(ct,{value:_,label:"Total Solves",color:"#fdd663"}),p.jsx(ct,{value:b,label:"Active Today",color:"#3ddc84"}),p.jsx(ct,{value:T,label:"Online Now",color:"#34d399"})]})]}),p.jsxs("div",{className:"admin-section",children:[p.jsx("h2",{className:"admin-section-title",children:"Engagement Health"}),p.jsxs("div",{className:"admin-stats-grid",children:[p.jsx(ct,{value:`${V}%`,label:`Active Users (${N})`,color:"#8ab4f8"}),p.jsx(ct,{value:y,label:"Avg Solves / Active User",color:"#3ddc84"}),p.jsx(ct,{value:`${w}%`,label:`Drop-off Rate (${M} users)`,color:"#f28b82"}),p.jsx(ct,{value:I?A(I):0,label:`Top Solver: ${((mt=I==null?void 0:I.displayName)==null?void 0:mt.split(" ")[0])||"—"}`,color:"#fdd663"})]})]}),p.jsxs("div",{className:"admin-section",children:[p.jsx("h2",{className:"admin-section-title",children:"User Segmentation"}),p.jsxs("div",{className:"admin-stats-grid",children:[p.jsx(ct,{value:E,label:"Power (100+)",color:"#a855f7"}),p.jsx(ct,{value:S,label:"Active (10-99)",color:"#3b82f6"}),p.jsx(ct,{value:C,label:"Starters (1-9)",color:"#10b981"}),p.jsx(ct,{value:M,label:"Ghosts (0)",color:"#64748b"})]})]}),p.jsxs("div",{className:"admin-section",children:[p.jsx("h2",{className:"admin-section-title",children:"Demographics"}),p.jsxs("div",{className:"admin-stats-grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))"},children:[p.jsx(ct,{value:k,label:"Indian Users",color:"#ff9933"}),p.jsx(ct,{value:De,label:"Overseas Users",color:"#3b82f6"}),p.jsx(ct,{value:R-x.length,label:"Unknown Location",color:"#64748b"})]})]}),p.jsxs("div",{className:"admin-section",children:[p.jsx("h2",{className:"admin-section-title",children:"Solves by Sheet"}),p.jsx("div",{className:"admin-topic-chart",children:We.map(L=>{const $=fe[L.id]||{completionPct:0,uniqueUsersInSheet:0},H=Ae>0?$.completionPct/Ae*100:0;return p.jsxs("div",{className:"admin-topic-row",children:[p.jsxs("div",{className:"admin-topic-name-wrap",children:[p.jsx("span",{className:"admin-topic-name",children:L.name}),p.jsxs("span",{className:"admin-topic-subtext",children:[$.uniqueUsersInSheet," users"]})]}),p.jsx("div",{className:"admin-topic-bar-track",children:p.jsx("div",{className:"admin-topic-bar-fill",style:{width:`${H}%`}})}),p.jsxs("span",{className:"admin-topic-count",children:[$.completionPct.toFixed(1),"%"]})]},L.id)})})]})]}):p.jsx(cD,{users:e,getSolved:A,getSheetSolved:P})]})},_D=(t=768)=>{const[e,n]=U.useState(()=>window.innerWidth<t);return U.useEffect(()=>{const r=()=>n(window.innerWidth<t);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[t]),e};function wD(){_D();const[t,e]=U.useState("a2z_flawless"),[n,r]=U.useState(!1),[i,s]=U.useState(!1),[o,l]=U.useState(()=>window.innerWidth>=768),[u,h]=U.useState(!1),f=m=>{e(m),h(!1)},g=m=>{r(m),s(!1),h(!1)};return p.jsx(qS,{children:p.jsx(sN,{children:p.jsx(pN,{children:p.jsxs("div",{className:"app-container",children:[p.jsx($N,{setShowDashboard:g,setShowAdmin:m=>{s(m),r(!1)},mobileSidebarOpen:u,setMobileSidebarOpen:h}),p.jsxs("div",{className:"main-layout",children:[u&&p.jsx("div",{onClick:()=>h(!1),style:{position:"fixed",inset:0,zIndex:199,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(2px)",WebkitBackdropFilter:"blur(2px)"}}),p.jsx(qN,{activeSheet:t,setActiveSheet:f,showDashboard:n,setShowDashboard:g,sidebarOpen:o,setSidebarOpen:l,mobileSidebarOpen:u,setMobileSidebarOpen:h}),p.jsxs("main",{className:"main-content",style:{display:"flex",flexDirection:"column"},children:[p.jsx("div",{style:{flex:1},children:i?p.jsx(vD,{}):n?p.jsx(oD,{setActiveSheet:f,setShowDashboard:g}):p.jsx(sD,{activeSheet:t})}),p.jsx("footer",{style:{textAlign:"center",paddingTop:"1.5rem",marginTop:"4rem",color:"var(--text-secondary)",fontSize:"0.85rem",borderTop:"1px solid var(--border-color)",opacity:.8},children:"Created for educational purposes only - we respect creators and do not support piracy or unauthorized use of copyrighted content."})]})]})]})})})})}zc.createRoot(document.getElementById("root")).render(p.jsx(OT.StrictMode,{children:p.jsx(wD,{})}));
