(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var wd={exports:{}},Ma={},Ad={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function Sx(){if(lg)return St;lg=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function m(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(U,ee,Fe){this.props=U,this.context=ee,this.refs=T,this.updater=Fe||x}y.prototype.isReactComponent={},y.prototype.setState=function(U,ee){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ee,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(U,ee,Fe){this.props=U,this.context=ee,this.refs=T,this.updater=Fe||x}var L=R.prototype=new S;L.constructor=R,M(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,k=Object.prototype.hasOwnProperty,N={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(U,ee,Fe){var He,Ie={},oe=null,ye=null;if(ee!=null)for(He in ee.ref!==void 0&&(ye=ee.ref),ee.key!==void 0&&(oe=""+ee.key),ee)k.call(ee,He)&&!O.hasOwnProperty(He)&&(Ie[He]=ee[He]);var me=arguments.length-2;if(me===1)Ie.children=Fe;else if(1<me){for(var De=Array(me),Je=0;Je<me;Je++)De[Je]=arguments[Je+2];Ie.children=De}if(U&&U.defaultProps)for(He in me=U.defaultProps,me)Ie[He]===void 0&&(Ie[He]=me[He]);return{$$typeof:s,type:U,key:oe,ref:ye,props:Ie,_owner:N.current}}function D(U,ee){return{$$typeof:s,type:U.type,key:ee,ref:U.ref,props:U.props,_owner:U._owner}}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function F(U){var ee={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Fe){return ee[Fe]})}var $=/\/+/g;function ce(U,ee){return typeof U=="object"&&U!==null&&U.key!=null?F(""+U.key):ee.toString(36)}function de(U,ee,Fe,He,Ie){var oe=typeof U;(oe==="undefined"||oe==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(oe){case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case s:case e:ye=!0}}if(ye)return ye=U,Ie=Ie(ye),U=He===""?"."+ce(ye,0):He,P(Ie)?(Fe="",U!=null&&(Fe=U.replace($,"$&/")+"/"),de(Ie,ee,Fe,"",function(Je){return Je})):Ie!=null&&(X(Ie)&&(Ie=D(Ie,Fe+(!Ie.key||ye&&ye.key===Ie.key?"":(""+Ie.key).replace($,"$&/")+"/")+U)),ee.push(Ie)),1;if(ye=0,He=He===""?".":He+":",P(U))for(var me=0;me<U.length;me++){oe=U[me];var De=He+ce(oe,me);ye+=de(oe,ee,Fe,De,Ie)}else if(De=m(U),typeof De=="function")for(U=De.call(U),me=0;!(oe=U.next()).done;)oe=oe.value,De=He+ce(oe,me++),ye+=de(oe,ee,Fe,De,Ie);else if(oe==="object")throw ee=String(U),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return ye}function G(U,ee,Fe){if(U==null)return U;var He=[],Ie=0;return de(U,He,"","",function(oe){return ee.call(Fe,oe,Ie++)}),He}function ie(U){if(U._status===-1){var ee=U._result;ee=ee(),ee.then(function(Fe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Fe)},function(Fe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Fe)}),U._status===-1&&(U._status=0,U._result=ee)}if(U._status===1)return U._result.default;throw U._result}var Y={current:null},K={transition:null},le={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:K,ReactCurrentOwner:N};function ae(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:G,forEach:function(U,ee,Fe){G(U,function(){ee.apply(this,arguments)},Fe)},count:function(U){var ee=0;return G(U,function(){ee++}),ee},toArray:function(U){return G(U,function(ee){return ee})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},St.Component=y,St.Fragment=t,St.Profiler=o,St.PureComponent=R,St.StrictMode=i,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,St.act=ae,St.cloneElement=function(U,ee,Fe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var He=M({},U.props),Ie=U.key,oe=U.ref,ye=U._owner;if(ee!=null){if(ee.ref!==void 0&&(oe=ee.ref,ye=N.current),ee.key!==void 0&&(Ie=""+ee.key),U.type&&U.type.defaultProps)var me=U.type.defaultProps;for(De in ee)k.call(ee,De)&&!O.hasOwnProperty(De)&&(He[De]=ee[De]===void 0&&me!==void 0?me[De]:ee[De])}var De=arguments.length-2;if(De===1)He.children=Fe;else if(1<De){me=Array(De);for(var Je=0;Je<De;Je++)me[Je]=arguments[Je+2];He.children=me}return{$$typeof:s,type:U.type,key:Ie,ref:oe,props:He,_owner:ye}},St.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},St.createElement=w,St.createFactory=function(U){var ee=w.bind(null,U);return ee.type=U,ee},St.createRef=function(){return{current:null}},St.forwardRef=function(U){return{$$typeof:d,render:U}},St.isValidElement=X,St.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ie}},St.memo=function(U,ee){return{$$typeof:h,type:U,compare:ee===void 0?null:ee}},St.startTransition=function(U){var ee=K.transition;K.transition={};try{U()}finally{K.transition=ee}},St.unstable_act=ae,St.useCallback=function(U,ee){return Y.current.useCallback(U,ee)},St.useContext=function(U){return Y.current.useContext(U)},St.useDebugValue=function(){},St.useDeferredValue=function(U){return Y.current.useDeferredValue(U)},St.useEffect=function(U,ee){return Y.current.useEffect(U,ee)},St.useId=function(){return Y.current.useId()},St.useImperativeHandle=function(U,ee,Fe){return Y.current.useImperativeHandle(U,ee,Fe)},St.useInsertionEffect=function(U,ee){return Y.current.useInsertionEffect(U,ee)},St.useLayoutEffect=function(U,ee){return Y.current.useLayoutEffect(U,ee)},St.useMemo=function(U,ee){return Y.current.useMemo(U,ee)},St.useReducer=function(U,ee,Fe){return Y.current.useReducer(U,ee,Fe)},St.useRef=function(U){return Y.current.useRef(U)},St.useState=function(U){return Y.current.useState(U)},St.useSyncExternalStore=function(U,ee,Fe){return Y.current.useSyncExternalStore(U,ee,Fe)},St.useTransition=function(){return Y.current.useTransition()},St.version="18.3.1",St}var cg;function gh(){return cg||(cg=1,Ad.exports=Sx()),Ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function Mx(){if(ug)return Ma;ug=1;var s=gh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,h){var g,_={},m=null,x=null;h!==void 0&&(m=""+h),f.key!==void 0&&(m=""+f.key),f.ref!==void 0&&(x=f.ref);for(g in f)i.call(f,g)&&!a.hasOwnProperty(g)&&(_[g]=f[g]);if(d&&d.defaultProps)for(g in f=d.defaultProps,f)_[g]===void 0&&(_[g]=f[g]);return{$$typeof:e,type:d,key:m,ref:x,props:_,_owner:o.current}}return Ma.Fragment=t,Ma.jsx=c,Ma.jsxs=c,Ma}var dg;function Ex(){return dg||(dg=1,wd.exports=Mx()),wd.exports}var J=Ex(),$l={},Rd={exports:{}},Yn={},Cd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function Tx(){return fg||(fg=1,(function(s){function e(K,le){var ae=K.length;K.push(le);e:for(;0<ae;){var U=ae-1>>>1,ee=K[U];if(0<o(ee,le))K[U]=le,K[ae]=ee,ae=U;else break e}}function t(K){return K.length===0?null:K[0]}function i(K){if(K.length===0)return null;var le=K[0],ae=K.pop();if(ae!==le){K[0]=ae;e:for(var U=0,ee=K.length,Fe=ee>>>1;U<Fe;){var He=2*(U+1)-1,Ie=K[He],oe=He+1,ye=K[oe];if(0>o(Ie,ae))oe<ee&&0>o(ye,Ie)?(K[U]=ye,K[oe]=ae,U=oe):(K[U]=Ie,K[He]=ae,U=He);else if(oe<ee&&0>o(ye,ae))K[U]=ye,K[oe]=ae,U=oe;else break e}}return le}function o(K,le){var ae=K.sortIndex-le.sortIndex;return ae!==0?ae:K.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var f=[],h=[],g=1,_=null,m=3,x=!1,M=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(K){for(var le=t(h);le!==null;){if(le.callback===null)i(h);else if(le.startTime<=K)i(h),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(h)}}function P(K){if(T=!1,L(K),!M)if(t(f)!==null)M=!0,ie(k);else{var le=t(h);le!==null&&Y(P,le.startTime-K)}}function k(K,le){M=!1,T&&(T=!1,S(w),w=-1),x=!0;var ae=m;try{for(L(le),_=t(f);_!==null&&(!(_.expirationTime>le)||K&&!F());){var U=_.callback;if(typeof U=="function"){_.callback=null,m=_.priorityLevel;var ee=U(_.expirationTime<=le);le=s.unstable_now(),typeof ee=="function"?_.callback=ee:_===t(f)&&i(f),L(le)}else i(f);_=t(f)}if(_!==null)var Fe=!0;else{var He=t(h);He!==null&&Y(P,He.startTime-le),Fe=!1}return Fe}finally{_=null,m=ae,x=!1}}var N=!1,O=null,w=-1,D=5,X=-1;function F(){return!(s.unstable_now()-X<D)}function $(){if(O!==null){var K=s.unstable_now();X=K;var le=!0;try{le=O(!0,K)}finally{le?ce():(N=!1,O=null)}}else N=!1}var ce;if(typeof R=="function")ce=function(){R($)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,G=de.port2;de.port1.onmessage=$,ce=function(){G.postMessage(null)}}else ce=function(){y($,0)};function ie(K){O=K,N||(N=!0,ce())}function Y(K,le){w=y(function(){K(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(K){K.callback=null},s.unstable_continueExecution=function(){M||x||(M=!0,ie(k))},s.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<K?Math.floor(1e3/K):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(K){switch(m){case 1:case 2:case 3:var le=3;break;default:le=m}var ae=m;m=le;try{return K()}finally{m=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(K,le){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ae=m;m=K;try{return le()}finally{m=ae}},s.unstable_scheduleCallback=function(K,le,ae){var U=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?U+ae:U):ae=U,K){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ae+ee,K={id:g++,callback:le,priorityLevel:K,startTime:ae,expirationTime:ee,sortIndex:-1},ae>U?(K.sortIndex=ae,e(h,K),t(f)===null&&K===t(h)&&(T?(S(w),w=-1):T=!0,Y(P,ae-U))):(K.sortIndex=ee,e(f,K),M||x||(M=!0,ie(k))),K},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(K){var le=m;return function(){var ae=m;m=le;try{return K.apply(this,arguments)}finally{m=ae}}}})(Pd)),Pd}var hg;function bx(){return hg||(hg=1,Cd.exports=Tx()),Cd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function wx(){if(pg)return Yn;pg=1;var s=gh(),e=bx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function m(n){return f.call(_,n)?!0:f.call(g,n)?!1:h.test(n)?_[n]=!0:(g[n]=!0,!1)}function x(n,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,u){if(r===null||typeof r>"u"||x(n,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,l,u,p,v,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,R);y[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,R);y[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,R);y[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,u)&&(l=null),u||p===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,r,l):n.setAttribute(r,l))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),N=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),F=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),K=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,U;function ee(n){if(U===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var Fe=!1;function He(n,r){if(!n||Fe)return"";Fe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(se){var u=se}Reflect.construct(n,[],r)}else{try{r.call()}catch(se){u=se}n.call(r.prototype)}else{try{throw Error()}catch(se){u=se}n()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var p=se.stack.split(`
`),v=u.stack.split(`
`),b=p.length-1,I=v.length-1;1<=b&&0<=I&&p[b]!==v[I];)I--;for(;1<=b&&0<=I;b--,I--)if(p[b]!==v[I]){if(b!==1||I!==1)do if(b--,I--,0>I||p[b]!==v[I]){var B=`
`+p[b].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=b&&0<=I);break}}}finally{Fe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ee(n):""}function Ie(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=He(n.type,!1),n;case 11:return n=He(n.type.render,!1),n;case 1:return n=He(n.type,!0),n;default:return""}}function oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case N:return"Portal";case D:return"Profiler";case w:return"StrictMode";case ce:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case X:return(n._context.displayName||"Context")+".Provider";case $:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return r=n.displayName||null,r!==null?r:oe(n.type)||"Memo";case ie:r=n._payload,n=n._init;try{return oe(n(r))}catch{}}return null}function ye(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Je(n){var r=De(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(b){u=""+b,v.call(this,b)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Qe(n){n._valueTracker||(n._valueTracker=Je(n))}function Vt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return n&&(u=De(n)?n.checked?"true":"false":n.value),n=u,n!==l?(r.setValue(n),!0):!1}function ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wt(n,r){var l=r.checked;return ae({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Ot(n,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=me(r.value!=null?r.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ht(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function Jt(n,r){ht(n,r);var l=me(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Mn(n,r.type,l):r.hasOwnProperty("defaultValue")&&Mn(n,r.type,me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ht(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Mn(n,r,l){(r!=="number"||ft(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var V=Array.isArray;function Gt(n,r,l,u){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+me(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function pt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Lt(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(V(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:me(l)}}function Le(n,r){var l=me(r.value),u=me(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function Xt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function C(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?C(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var q,he=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(q=q||document.createElement("div"),q.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ge(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Pe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function ue(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function pe(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=ue(l,r[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var Ue=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(n,r){if(r){if(Ue[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function we(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function it(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,gt=null,z=null;function be(n){if(n=aa(n)){if(typeof st!="function")throw Error(t(280));var r=n.stateNode;r&&(r=dl(r),st(n.stateNode,n.type,r))}}function fe(n){gt?z?z.push(n):z=[n]:gt=n}function Oe(){if(gt){var n=gt,r=z;if(z=gt=null,be(n),r)for(n=0;n<r.length;n++)be(r[n])}}function Re(n,r){return n(r)}function _e(){}var We=!1;function ot(n,r,l){if(We)return n(r,l);We=!0;try{return Re(n,r,l)}finally{We=!1,(gt!==null||z!==null)&&(_e(),Oe())}}function Bt(n,r){var l=n.stateNode;if(l===null)return null;var u=dl(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var At=!1;if(d)try{var In={};Object.defineProperty(In,"passive",{get:function(){At=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{At=!1}function si(n,r,l,u,p,v,b,I,B){var se=Array.prototype.slice.call(arguments,3);try{r.apply(l,se)}catch(xe){this.onError(xe)}}var tr=!1,Ls=null,is=!1,Ns=null,nr={onError:function(n){tr=!0,Ls=n}};function zo(n,r,l,u,p,v,b,I,B){tr=!1,Ls=null,si.apply(nr,arguments)}function Ka(n,r,l,u,p,v,b,I,B){if(zo.apply(this,arguments),tr){if(tr){var se=Ls;tr=!1,Ls=null}else throw Error(t(198));is||(is=!0,Ns=se)}}function Di(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function rs(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Vo(n){if(Di(n)!==n)throw Error(t(188))}function Is(n){var r=n.alternate;if(!r){if(r=Di(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,u=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return Vo(p),n;if(v===u)return Vo(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=v;else{for(var b=!1,I=p.child;I;){if(I===l){b=!0,l=p,u=v;break}if(I===u){b=!0,u=p,l=v;break}I=I.sibling}if(!b){for(I=v.child;I;){if(I===l){b=!0,l=v,u=p;break}if(I===u){b=!0,u=v,l=p;break}I=I.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Ho(n){return n=Is(n),n!==null?Go(n):null}function Go(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Go(n);if(r!==null)return r;n=n.sibling}return null}var qa=e.unstable_scheduleCallback,$a=e.unstable_cancelCallback,qc=e.unstable_shouldYield,$c=e.unstable_requestPaint,Qt=e.unstable_now,Zc=e.unstable_getCurrentPriorityLevel,jo=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,j=e.unstable_NormalPriority,re=e.unstable_LowPriority,te=e.unstable_IdlePriority,Q=null,Ce=null;function Ve(n){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Q,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:lt,Xe=Math.log,Ze=Math.LN2;function lt(n){return n>>>=0,n===0?32:31-(Xe(n)/Ze|0)|0}var ct=64,Ke=4194304;function Tt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jt(n,r){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,b=l&268435455;if(b!==0){var I=b&~p;I!==0?u=Tt(I):(v&=b,v!==0&&(u=Tt(v)))}else b=l&~p,b!==0?u=Tt(b):v!==0&&(u=Tt(v));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)l=31-Ae(r),p=1<<l,u|=n[l],r&=~p;return u}function $t(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nt(n,r){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var b=31-Ae(v),I=1<<b,B=p[b];B===-1?((I&l)===0||(I&u)!==0)&&(p[b]=$t(I,r)):B<=r&&(n.expiredLanes|=I),v&=~I}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Be(){var n=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),n}function En(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function _t(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ae(r),n[r]=l}function zn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Ae(l),v=1<<p;r[p]=0,u[p]=-1,n[p]=-1,l&=~v}}function Vn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var u=31-Ae(l),p=1<<u;p&r|n[u]&r&&(n[u]|=r),l&=~p}}var yt=0;function ir(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Pt,Yt,_i,It,vi,Ui=!1,ss=[],wr=null,Ar=null,Rr=null,Wo=new Map,Xo=new Map,Cr=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(n,r){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Wo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(r.pointerId)}}function Yo(n,r,l,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},r!==null&&(r=aa(r),r!==null&&Yt(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function j0(n,r,l,u,p){switch(r){case"focusin":return wr=Yo(wr,n,r,l,u,p),!0;case"dragenter":return Ar=Yo(Ar,n,r,l,u,p),!0;case"mouseover":return Rr=Yo(Rr,n,r,l,u,p),!0;case"pointerover":var v=p.pointerId;return Wo.set(v,Yo(Wo.get(v)||null,n,r,l,u,p)),!0;case"gotpointercapture":return v=p.pointerId,Xo.set(v,Yo(Xo.get(v)||null,n,r,l,u,p)),!0}return!1}function Xh(n){var r=os(n.target);if(r!==null){var l=Di(r);if(l!==null){if(r=l.tag,r===13){if(r=rs(l),r!==null){n.blockedOn=r,vi(n.priority,function(){_i(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Za(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Qc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);Ee=u,l.target.dispatchEvent(u),Ee=null}else return r=aa(l),r!==null&&Yt(r),n.blockedOn=l,!1;r.shift()}return!0}function Yh(n,r,l){Za(n)&&l.delete(r)}function W0(){Ui=!1,wr!==null&&Za(wr)&&(wr=null),Ar!==null&&Za(Ar)&&(Ar=null),Rr!==null&&Za(Rr)&&(Rr=null),Wo.forEach(Yh),Xo.forEach(Yh)}function Ko(n,r){n.blockedOn===r&&(n.blockedOn=null,Ui||(Ui=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,W0)))}function qo(n){function r(p){return Ko(p,n)}if(0<ss.length){Ko(ss[0],n);for(var l=1;l<ss.length;l++){var u=ss[l];u.blockedOn===n&&(u.blockedOn=null)}}for(wr!==null&&Ko(wr,n),Ar!==null&&Ko(Ar,n),Rr!==null&&Ko(Rr,n),Wo.forEach(r),Xo.forEach(r),l=0;l<Cr.length;l++)u=Cr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<Cr.length&&(l=Cr[0],l.blockedOn===null);)Xh(l),l.blockedOn===null&&Cr.shift()}var Ds=P.ReactCurrentBatchConfig,Ja=!0;function X0(n,r,l,u){var p=yt,v=Ds.transition;Ds.transition=null;try{yt=1,Jc(n,r,l,u)}finally{yt=p,Ds.transition=v}}function Y0(n,r,l,u){var p=yt,v=Ds.transition;Ds.transition=null;try{yt=4,Jc(n,r,l,u)}finally{yt=p,Ds.transition=v}}function Jc(n,r,l,u){if(Ja){var p=Qc(n,r,l,u);if(p===null)gu(n,r,u,Qa,l),Wh(n,u);else if(j0(p,n,r,l,u))u.stopPropagation();else if(Wh(n,u),r&4&&-1<G0.indexOf(n)){for(;p!==null;){var v=aa(p);if(v!==null&&Pt(v),v=Qc(n,r,l,u),v===null&&gu(n,r,u,Qa,l),v===p)break;p=v}p!==null&&u.stopPropagation()}else gu(n,r,u,null,l)}}var Qa=null;function Qc(n,r,l,u){if(Qa=null,n=it(u),n=os(n),n!==null)if(r=Di(n),r===null)n=null;else if(l=r.tag,l===13){if(n=rs(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Qa=n,null}function Kh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case jo:return 1;case A:return 4;case j:case re:return 16;case te:return 536870912;default:return 16}default:return 16}}var Pr=null,eu=null,el=null;function qh(){if(el)return el;var n,r=eu,l=r.length,u,p="value"in Pr?Pr.value:Pr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var b=l-n;for(u=1;u<=b&&r[l-u]===p[v-u];u++);return el=p.slice(n,1<u?1-u:void 0)}function tl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function nl(){return!0}function $h(){return!1}function $n(n){function r(l,u,p,v,b){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=b,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?nl:$h,this.isPropagationStopped=$h,this}return ae(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),r}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=$n(Us),$o=ae({},Us,{view:0,detail:0}),K0=$n($o),nu,iu,Zo,il=ae({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zo&&(Zo&&n.type==="mousemove"?(nu=n.screenX-Zo.screenX,iu=n.screenY-Zo.screenY):iu=nu=0,Zo=n),nu)},movementY:function(n){return"movementY"in n?n.movementY:iu}}),Zh=$n(il),q0=ae({},il,{dataTransfer:0}),$0=$n(q0),Z0=ae({},$o,{relatedTarget:0}),ru=$n(Z0),J0=ae({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=$n(J0),ev=ae({},Us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tv=$n(ev),nv=ae({},Us,{data:0}),Jh=$n(nv),iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ov(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=sv[n])?!!r[n]:!1}function su(){return ov}var av=ae({},$o,{key:function(n){if(n.key){var r=iv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=tl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?rv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(n){return n.type==="keypress"?tl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lv=$n(av),cv=ae({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=$n(cv),uv=ae({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),dv=$n(uv),fv=ae({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=$n(fv),pv=ae({},il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=$n(pv),gv=[9,13,27,32],ou=d&&"CompositionEvent"in window,Jo=null;d&&"documentMode"in document&&(Jo=document.documentMode);var _v=d&&"TextEvent"in window&&!Jo,ep=d&&(!ou||Jo&&8<Jo&&11>=Jo),tp=" ",np=!1;function ip(n,r){switch(n){case"keyup":return gv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function vv(n,r){switch(n){case"compositionend":return rp(r);case"keypress":return r.which!==32?null:(np=!0,tp);case"textInput":return n=r.data,n===tp&&np?null:n;default:return null}}function xv(n,r){if(Fs)return n==="compositionend"||!ou&&ip(n,r)?(n=qh(),el=eu=Pr=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ep&&r.locale!=="ko"?null:r.data;default:return null}}var yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!yv[n.type]:r==="textarea"}function op(n,r,l,u){fe(u),r=ll(r,"onChange"),0<r.length&&(l=new tu("onChange","change",null,l,u),n.push({event:l,listeners:r}))}var Qo=null,ea=null;function Sv(n){Tp(n,0)}function rl(n){var r=Vs(n);if(Vt(r))return n}function Mv(n,r){if(n==="change")return r}var ap=!1;if(d){var au;if(d){var lu="oninput"in document;if(!lu){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),lu=typeof lp.oninput=="function"}au=lu}else au=!1;ap=au&&(!document.documentMode||9<document.documentMode)}function cp(){Qo&&(Qo.detachEvent("onpropertychange",up),ea=Qo=null)}function up(n){if(n.propertyName==="value"&&rl(ea)){var r=[];op(r,ea,n,it(n)),ot(Sv,r)}}function Ev(n,r,l){n==="focusin"?(cp(),Qo=r,ea=l,Qo.attachEvent("onpropertychange",up)):n==="focusout"&&cp()}function Tv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rl(ea)}function bv(n,r){if(n==="click")return rl(r)}function wv(n,r){if(n==="input"||n==="change")return rl(r)}function Av(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var xi=typeof Object.is=="function"?Object.is:Av;function ta(n,r){if(xi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!f.call(r,p)||!xi(n[p],r[p]))return!1}return!0}function dp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fp(n,r){var l=dp(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=r&&u>=r)return{node:l,offset:r-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=dp(l)}}function hp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?hp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function pp(){for(var n=window,r=ft();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=ft(n.document)}return r}function cu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Rv(n){var r=pp(),l=n.focusedElem,u=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&hp(l.ownerDocument.documentElement,l)){if(u!==null&&cu(l)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=fp(l,v);var b=fp(l,u);p&&b&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(r),n.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Cv=d&&"documentMode"in document&&11>=document.documentMode,Os=null,uu=null,na=null,du=!1;function mp(n,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;du||Os==null||Os!==ft(u)||(u=Os,"selectionStart"in u&&cu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),na&&ta(na,u)||(na=u,u=ll(uu,"onSelect"),0<u.length&&(r=new tu("onSelect","select",null,r,l),n.push({event:r,listeners:u}),r.target=Os)))}function sl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var ks={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},fu={},gp={};d&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function ol(n){if(fu[n])return fu[n];if(!ks[n])return n;var r=ks[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in gp)return fu[n]=r[l];return n}var _p=ol("animationend"),vp=ol("animationiteration"),xp=ol("animationstart"),yp=ol("transitionend"),Sp=new Map,Mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,r){Sp.set(n,r),a(r,[n])}for(var hu=0;hu<Mp.length;hu++){var pu=Mp[hu],Pv=pu.toLowerCase(),Lv=pu[0].toUpperCase()+pu.slice(1);Lr(Pv,"on"+Lv)}Lr(_p,"onAnimationEnd"),Lr(vp,"onAnimationIteration"),Lr(xp,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(yp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Ep(n,r,l){var u=n.type||"unknown-event";n.currentTarget=l,Ka(u,r,void 0,n),n.currentTarget=null}function Tp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var v=void 0;if(r)for(var b=u.length-1;0<=b;b--){var I=u[b],B=I.instance,se=I.currentTarget;if(I=I.listener,B!==v&&p.isPropagationStopped())break e;Ep(p,I,se),v=B}else for(b=0;b<u.length;b++){if(I=u[b],B=I.instance,se=I.currentTarget,I=I.listener,B!==v&&p.isPropagationStopped())break e;Ep(p,I,se),v=B}}}if(is)throw n=Ns,is=!1,Ns=null,n}function Kt(n,r){var l=r[Mu];l===void 0&&(l=r[Mu]=new Set);var u=n+"__bubble";l.has(u)||(bp(r,n,2,!1),l.add(u))}function mu(n,r,l){var u=0;r&&(u|=4),bp(l,n,u,r)}var al="_reactListening"+Math.random().toString(36).slice(2);function ra(n){if(!n[al]){n[al]=!0,i.forEach(function(l){l!=="selectionchange"&&(Nv.has(l)||mu(l,!1,n),mu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[al]||(r[al]=!0,mu("selectionchange",!1,r))}}function bp(n,r,l,u){switch(Kh(r)){case 1:var p=X0;break;case 4:p=Y0;break;default:p=Jc}l=p.bind(null,r,l,n),p=void 0,!At||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function gu(n,r,l,u,p){var v=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var I=u.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(b===4)for(b=u.return;b!==null;){var B=b.tag;if((B===3||B===4)&&(B=b.stateNode.containerInfo,B===p||B.nodeType===8&&B.parentNode===p))return;b=b.return}for(;I!==null;){if(b=os(I),b===null)return;if(B=b.tag,B===5||B===6){u=v=b;continue e}I=I.parentNode}}u=u.return}ot(function(){var se=v,xe=it(l),Se=[];e:{var ve=Sp.get(n);if(ve!==void 0){var ze=tu,je=n;switch(n){case"keypress":if(tl(l)===0)break e;case"keydown":case"keyup":ze=lv;break;case"focusin":je="focus",ze=ru;break;case"focusout":je="blur",ze=ru;break;case"beforeblur":case"afterblur":ze=ru;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=dv;break;case _p:case vp:case xp:ze=Q0;break;case yp:ze=hv;break;case"scroll":ze=K0;break;case"wheel":ze=mv;break;case"copy":case"cut":case"paste":ze=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Qh}var Ye=(r&4)!==0,sn=!Ye&&n==="scroll",Z=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var H=se,ne;H!==null;){ne=H;var Te=ne.stateNode;if(ne.tag===5&&Te!==null&&(ne=Te,Z!==null&&(Te=Bt(H,Z),Te!=null&&Ye.push(sa(H,Te,ne)))),sn)break;H=H.return}0<Ye.length&&(ve=new ze(ve,je,null,l,xe),Se.push({event:ve,listeners:Ye}))}}if((r&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",ve&&l!==Ee&&(je=l.relatedTarget||l.fromElement)&&(os(je)||je[rr]))break e;if((ze||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,ze?(je=l.relatedTarget||l.toElement,ze=se,je=je?os(je):null,je!==null&&(sn=Di(je),je!==sn||je.tag!==5&&je.tag!==6)&&(je=null)):(ze=null,je=se),ze!==je)){if(Ye=Zh,Te="onMouseLeave",Z="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Qh,Te="onPointerLeave",Z="onPointerEnter",H="pointer"),sn=ze==null?ve:Vs(ze),ne=je==null?ve:Vs(je),ve=new Ye(Te,H+"leave",ze,l,xe),ve.target=sn,ve.relatedTarget=ne,Te=null,os(xe)===se&&(Ye=new Ye(Z,H+"enter",je,l,xe),Ye.target=ne,Ye.relatedTarget=sn,Te=Ye),sn=Te,ze&&je)t:{for(Ye=ze,Z=je,H=0,ne=Ye;ne;ne=Bs(ne))H++;for(ne=0,Te=Z;Te;Te=Bs(Te))ne++;for(;0<H-ne;)Ye=Bs(Ye),H--;for(;0<ne-H;)Z=Bs(Z),ne--;for(;H--;){if(Ye===Z||Z!==null&&Ye===Z.alternate)break t;Ye=Bs(Ye),Z=Bs(Z)}Ye=null}else Ye=null;ze!==null&&wp(Se,ve,ze,Ye,!1),je!==null&&sn!==null&&wp(Se,sn,je,Ye,!0)}}e:{if(ve=se?Vs(se):window,ze=ve.nodeName&&ve.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ve.type==="file")var qe=Mv;else if(sp(ve))if(ap)qe=wv;else{qe=Tv;var et=Ev}else(ze=ve.nodeName)&&ze.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(qe=bv);if(qe&&(qe=qe(n,se))){op(Se,qe,l,xe);break e}et&&et(n,ve,se),n==="focusout"&&(et=ve._wrapperState)&&et.controlled&&ve.type==="number"&&Mn(ve,"number",ve.value)}switch(et=se?Vs(se):window,n){case"focusin":(sp(et)||et.contentEditable==="true")&&(Os=et,uu=se,na=null);break;case"focusout":na=uu=Os=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,mp(Se,l,xe);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":mp(Se,l,xe)}var tt;if(ou)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Fs?ip(n,l)&&(rt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(rt="onCompositionStart");rt&&(ep&&l.locale!=="ko"&&(Fs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Fs&&(tt=qh()):(Pr=xe,eu="value"in Pr?Pr.value:Pr.textContent,Fs=!0)),et=ll(se,rt),0<et.length&&(rt=new Jh(rt,n,null,l,xe),Se.push({event:rt,listeners:et}),tt?rt.data=tt:(tt=rp(l),tt!==null&&(rt.data=tt)))),(tt=_v?vv(n,l):xv(n,l))&&(se=ll(se,"onBeforeInput"),0<se.length&&(xe=new Jh("onBeforeInput","beforeinput",null,l,xe),Se.push({event:xe,listeners:se}),xe.data=tt))}Tp(Se,r)})}function sa(n,r,l){return{instance:n,listener:r,currentTarget:l}}function ll(n,r){for(var l=r+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Bt(n,l),v!=null&&u.unshift(sa(n,v,p)),v=Bt(n,r),v!=null&&u.push(sa(n,v,p))),n=n.return}return u}function Bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wp(n,r,l,u,p){for(var v=r._reactName,b=[];l!==null&&l!==u;){var I=l,B=I.alternate,se=I.stateNode;if(B!==null&&B===u)break;I.tag===5&&se!==null&&(I=se,p?(B=Bt(l,v),B!=null&&b.unshift(sa(l,B,I))):p||(B=Bt(l,v),B!=null&&b.push(sa(l,B,I)))),l=l.return}b.length!==0&&n.push({event:r,listeners:b})}var Iv=/\r\n?/g,Dv=/\u0000|\uFFFD/g;function Ap(n){return(typeof n=="string"?n:""+n).replace(Iv,`
`).replace(Dv,"")}function cl(n,r,l){if(r=Ap(r),Ap(n)!==r&&l)throw Error(t(425))}function ul(){}var _u=null,vu=null;function xu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,Uv=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(n){return Rp.resolve(null).then(n).catch(Ov)}:yu;function Ov(n){setTimeout(function(){throw n})}function Su(n,r){var l=r,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),qo(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);qo(r)}function Nr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Cp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var zs=Math.random().toString(36).slice(2),Fi="__reactFiber$"+zs,oa="__reactProps$"+zs,rr="__reactContainer$"+zs,Mu="__reactEvents$"+zs,kv="__reactListeners$"+zs,Bv="__reactHandles$"+zs;function os(n){var r=n[Fi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[rr]||l[Fi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Cp(n);n!==null;){if(l=n[Fi])return l;n=Cp(n)}return r}n=l,l=n.parentNode}return null}function aa(n){return n=n[Fi]||n[rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function dl(n){return n[oa]||null}var Eu=[],Hs=-1;function Ir(n){return{current:n}}function qt(n){0>Hs||(n.current=Eu[Hs],Eu[Hs]=null,Hs--)}function Wt(n,r){Hs++,Eu[Hs]=n.current,n.current=r}var Dr={},An=Ir(Dr),Hn=Ir(!1),as=Dr;function Gs(n,r){var l=n.type.contextTypes;if(!l)return Dr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Gn(n){return n=n.childContextTypes,n!=null}function fl(){qt(Hn),qt(An)}function Pp(n,r,l){if(An.current!==Dr)throw Error(t(168));Wt(An,r),Wt(Hn,l)}function Lp(n,r,l){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,ye(n)||"Unknown",p));return ae({},l,u)}function hl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,as=An.current,Wt(An,n),Wt(Hn,Hn.current),!0}function Np(n,r,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=Lp(n,r,as),u.__reactInternalMemoizedMergedChildContext=n,qt(Hn),qt(An),Wt(An,n)):qt(Hn),Wt(Hn,l)}var sr=null,pl=!1,Tu=!1;function Ip(n){sr===null?sr=[n]:sr.push(n)}function zv(n){pl=!0,Ip(n)}function Ur(){if(!Tu&&sr!==null){Tu=!0;var n=0,r=yt;try{var l=sr;for(yt=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}sr=null,pl=!1}catch(p){throw sr!==null&&(sr=sr.slice(n+1)),qa(jo,Ur),p}finally{yt=r,Tu=!1}}return null}var js=[],Ws=0,ml=null,gl=0,oi=[],ai=0,ls=null,or=1,ar="";function cs(n,r){js[Ws++]=gl,js[Ws++]=ml,ml=n,gl=r}function Dp(n,r,l){oi[ai++]=or,oi[ai++]=ar,oi[ai++]=ls,ls=n;var u=or;n=ar;var p=32-Ae(u)-1;u&=~(1<<p),l+=1;var v=32-Ae(r)+p;if(30<v){var b=p-p%5;v=(u&(1<<b)-1).toString(32),u>>=b,p-=b,or=1<<32-Ae(r)+p|l<<p|u,ar=v+n}else or=1<<v|l<<p|u,ar=n}function bu(n){n.return!==null&&(cs(n,1),Dp(n,1,0))}function wu(n){for(;n===ml;)ml=js[--Ws],js[Ws]=null,gl=js[--Ws],js[Ws]=null;for(;n===ls;)ls=oi[--ai],oi[ai]=null,ar=oi[--ai],oi[ai]=null,or=oi[--ai],oi[ai]=null}var Zn=null,Jn=null,Zt=!1,yi=null;function Up(n,r){var l=di(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Fp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Zn=n,Jn=Nr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Zn=n,Jn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ls!==null?{id:or,overflow:ar}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=di(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Zn=n,Jn=null,!0):!1;default:return!1}}function Au(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ru(n){if(Zt){var r=Jn;if(r){var l=r;if(!Fp(n,r)){if(Au(n))throw Error(t(418));r=Nr(l.nextSibling);var u=Zn;r&&Fp(n,r)?Up(u,l):(n.flags=n.flags&-4097|2,Zt=!1,Zn=n)}}else{if(Au(n))throw Error(t(418));n.flags=n.flags&-4097|2,Zt=!1,Zn=n}}}function Op(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function _l(n){if(n!==Zn)return!1;if(!Zt)return Op(n),Zt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!xu(n.type,n.memoizedProps)),r&&(r=Jn)){if(Au(n))throw kp(),Error(t(418));for(;r;)Up(n,r),r=Nr(r.nextSibling)}if(Op(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Jn=Nr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Jn=null}}else Jn=Zn?Nr(n.stateNode.nextSibling):null;return!0}function kp(){for(var n=Jn;n;)n=Nr(n.nextSibling)}function Xs(){Jn=Zn=null,Zt=!1}function Cu(n){yi===null?yi=[n]:yi.push(n)}var Vv=P.ReactCurrentBatchConfig;function la(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(b){var I=p.refs;b===null?delete I[v]:I[v]=b},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function vl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Bp(n){var r=n._init;return r(n._payload)}function zp(n){function r(Z,H){if(n){var ne=Z.deletions;ne===null?(Z.deletions=[H],Z.flags|=16):ne.push(H)}}function l(Z,H){if(!n)return null;for(;H!==null;)r(Z,H),H=H.sibling;return null}function u(Z,H){for(Z=new Map;H!==null;)H.key!==null?Z.set(H.key,H):Z.set(H.index,H),H=H.sibling;return Z}function p(Z,H){return Z=Gr(Z,H),Z.index=0,Z.sibling=null,Z}function v(Z,H,ne){return Z.index=ne,n?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<H?(Z.flags|=2,H):ne):(Z.flags|=2,H)):(Z.flags|=1048576,H)}function b(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,H,ne,Te){return H===null||H.tag!==6?(H=yd(ne,Z.mode,Te),H.return=Z,H):(H=p(H,ne),H.return=Z,H)}function B(Z,H,ne,Te){var qe=ne.type;return qe===O?xe(Z,H,ne.props.children,Te,ne.key):H!==null&&(H.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ie&&Bp(qe)===H.type)?(Te=p(H,ne.props),Te.ref=la(Z,H,ne),Te.return=Z,Te):(Te=Hl(ne.type,ne.key,ne.props,null,Z.mode,Te),Te.ref=la(Z,H,ne),Te.return=Z,Te)}function se(Z,H,ne,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==ne.containerInfo||H.stateNode.implementation!==ne.implementation?(H=Sd(ne,Z.mode,Te),H.return=Z,H):(H=p(H,ne.children||[]),H.return=Z,H)}function xe(Z,H,ne,Te,qe){return H===null||H.tag!==7?(H=_s(ne,Z.mode,Te,qe),H.return=Z,H):(H=p(H,ne),H.return=Z,H)}function Se(Z,H,ne){if(typeof H=="string"&&H!==""||typeof H=="number")return H=yd(""+H,Z.mode,ne),H.return=Z,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case k:return ne=Hl(H.type,H.key,H.props,null,Z.mode,ne),ne.ref=la(Z,null,H),ne.return=Z,ne;case N:return H=Sd(H,Z.mode,ne),H.return=Z,H;case ie:var Te=H._init;return Se(Z,Te(H._payload),ne)}if(V(H)||le(H))return H=_s(H,Z.mode,ne,null),H.return=Z,H;vl(Z,H)}return null}function ve(Z,H,ne,Te){var qe=H!==null?H.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return qe!==null?null:I(Z,H,""+ne,Te);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case k:return ne.key===qe?B(Z,H,ne,Te):null;case N:return ne.key===qe?se(Z,H,ne,Te):null;case ie:return qe=ne._init,ve(Z,H,qe(ne._payload),Te)}if(V(ne)||le(ne))return qe!==null?null:xe(Z,H,ne,Te,null);vl(Z,ne)}return null}function ze(Z,H,ne,Te,qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(ne)||null,I(H,Z,""+Te,qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case k:return Z=Z.get(Te.key===null?ne:Te.key)||null,B(H,Z,Te,qe);case N:return Z=Z.get(Te.key===null?ne:Te.key)||null,se(H,Z,Te,qe);case ie:var et=Te._init;return ze(Z,H,ne,et(Te._payload),qe)}if(V(Te)||le(Te))return Z=Z.get(ne)||null,xe(H,Z,Te,qe,null);vl(H,Te)}return null}function je(Z,H,ne,Te){for(var qe=null,et=null,tt=H,rt=H=0,xn=null;tt!==null&&rt<ne.length;rt++){tt.index>rt?(xn=tt,tt=null):xn=tt.sibling;var Rt=ve(Z,tt,ne[rt],Te);if(Rt===null){tt===null&&(tt=xn);break}n&&tt&&Rt.alternate===null&&r(Z,tt),H=v(Rt,H,rt),et===null?qe=Rt:et.sibling=Rt,et=Rt,tt=xn}if(rt===ne.length)return l(Z,tt),Zt&&cs(Z,rt),qe;if(tt===null){for(;rt<ne.length;rt++)tt=Se(Z,ne[rt],Te),tt!==null&&(H=v(tt,H,rt),et===null?qe=tt:et.sibling=tt,et=tt);return Zt&&cs(Z,rt),qe}for(tt=u(Z,tt);rt<ne.length;rt++)xn=ze(tt,Z,rt,ne[rt],Te),xn!==null&&(n&&xn.alternate!==null&&tt.delete(xn.key===null?rt:xn.key),H=v(xn,H,rt),et===null?qe=xn:et.sibling=xn,et=xn);return n&&tt.forEach(function(jr){return r(Z,jr)}),Zt&&cs(Z,rt),qe}function Ye(Z,H,ne,Te){var qe=le(ne);if(typeof qe!="function")throw Error(t(150));if(ne=qe.call(ne),ne==null)throw Error(t(151));for(var et=qe=null,tt=H,rt=H=0,xn=null,Rt=ne.next();tt!==null&&!Rt.done;rt++,Rt=ne.next()){tt.index>rt?(xn=tt,tt=null):xn=tt.sibling;var jr=ve(Z,tt,Rt.value,Te);if(jr===null){tt===null&&(tt=xn);break}n&&tt&&jr.alternate===null&&r(Z,tt),H=v(jr,H,rt),et===null?qe=jr:et.sibling=jr,et=jr,tt=xn}if(Rt.done)return l(Z,tt),Zt&&cs(Z,rt),qe;if(tt===null){for(;!Rt.done;rt++,Rt=ne.next())Rt=Se(Z,Rt.value,Te),Rt!==null&&(H=v(Rt,H,rt),et===null?qe=Rt:et.sibling=Rt,et=Rt);return Zt&&cs(Z,rt),qe}for(tt=u(Z,tt);!Rt.done;rt++,Rt=ne.next())Rt=ze(tt,Z,rt,Rt.value,Te),Rt!==null&&(n&&Rt.alternate!==null&&tt.delete(Rt.key===null?rt:Rt.key),H=v(Rt,H,rt),et===null?qe=Rt:et.sibling=Rt,et=Rt);return n&&tt.forEach(function(yx){return r(Z,yx)}),Zt&&cs(Z,rt),qe}function sn(Z,H,ne,Te){if(typeof ne=="object"&&ne!==null&&ne.type===O&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case k:e:{for(var qe=ne.key,et=H;et!==null;){if(et.key===qe){if(qe=ne.type,qe===O){if(et.tag===7){l(Z,et.sibling),H=p(et,ne.props.children),H.return=Z,Z=H;break e}}else if(et.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ie&&Bp(qe)===et.type){l(Z,et.sibling),H=p(et,ne.props),H.ref=la(Z,et,ne),H.return=Z,Z=H;break e}l(Z,et);break}else r(Z,et);et=et.sibling}ne.type===O?(H=_s(ne.props.children,Z.mode,Te,ne.key),H.return=Z,Z=H):(Te=Hl(ne.type,ne.key,ne.props,null,Z.mode,Te),Te.ref=la(Z,H,ne),Te.return=Z,Z=Te)}return b(Z);case N:e:{for(et=ne.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===ne.containerInfo&&H.stateNode.implementation===ne.implementation){l(Z,H.sibling),H=p(H,ne.children||[]),H.return=Z,Z=H;break e}else{l(Z,H);break}else r(Z,H);H=H.sibling}H=Sd(ne,Z.mode,Te),H.return=Z,Z=H}return b(Z);case ie:return et=ne._init,sn(Z,H,et(ne._payload),Te)}if(V(ne))return je(Z,H,ne,Te);if(le(ne))return Ye(Z,H,ne,Te);vl(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,H!==null&&H.tag===6?(l(Z,H.sibling),H=p(H,ne),H.return=Z,Z=H):(l(Z,H),H=yd(ne,Z.mode,Te),H.return=Z,Z=H),b(Z)):l(Z,H)}return sn}var Ys=zp(!0),Vp=zp(!1),xl=Ir(null),yl=null,Ks=null,Pu=null;function Lu(){Pu=Ks=yl=null}function Nu(n){var r=xl.current;qt(xl),n._currentValue=r}function Iu(n,r,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===l)break;n=n.return}}function qs(n,r){yl=n,Pu=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(jn=!0),n.firstContext=null)}function li(n){var r=n._currentValue;if(Pu!==n)if(n={context:n,memoizedValue:r,next:null},Ks===null){if(yl===null)throw Error(t(308));Ks=n,yl.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return r}var us=null;function Du(n){us===null?us=[n]:us.push(n)}function Hp(n,r,l,u){var p=r.interleaved;return p===null?(l.next=l,Du(r)):(l.next=p.next,p.next=l),r.interleaved=l,lr(n,u)}function lr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Fr=!1;function Uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function cr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Or(n,r,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,lr(n,l)}return p=u.interleaved,p===null?(r.next=r,Du(u)):(r.next=p.next,p.next=r),u.interleaved=r,lr(n,l)}function Sl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Vn(n,l)}}function jp(n,r){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=b:v=v.next=b,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Ml(n,r,l,u){var p=n.updateQueue;Fr=!1;var v=p.firstBaseUpdate,b=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var B=I,se=B.next;B.next=null,b===null?v=se:b.next=se,b=B;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==b&&(I===null?xe.firstBaseUpdate=se:I.next=se,xe.lastBaseUpdate=B))}if(v!==null){var Se=p.baseState;b=0,xe=se=B=null,I=v;do{var ve=I.lane,ze=I.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:ze,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=n,Ye=I;switch(ve=r,ze=l,Ye.tag){case 1:if(je=Ye.payload,typeof je=="function"){Se=je.call(ze,Se,ve);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ye.payload,ve=typeof je=="function"?je.call(ze,Se,ve):je,ve==null)break e;Se=ae({},Se,ve);break e;case 2:Fr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ve=p.effects,ve===null?p.effects=[I]:ve.push(I))}else ze={eventTime:ze,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(se=xe=ze,B=Se):xe=xe.next=ze,b|=ve;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,p.lastBaseUpdate=ve,p.shared.pending=null}}while(!0);if(xe===null&&(B=Se),p.baseState=B,p.firstBaseUpdate=se,p.lastBaseUpdate=xe,r=p.shared.interleaved,r!==null){p=r;do b|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);hs|=b,n.lanes=b,n.memoizedState=Se}}function Wp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ca={},Oi=Ir(ca),ua=Ir(ca),da=Ir(ca);function ds(n){if(n===ca)throw Error(t(174));return n}function Fu(n,r){switch(Wt(da,r),Wt(ua,n),Wt(Oi,ca),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:E(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=E(r,n)}qt(Oi),Wt(Oi,r)}function $s(){qt(Oi),qt(ua),qt(da)}function Xp(n){ds(da.current);var r=ds(Oi.current),l=E(r,n.type);r!==l&&(Wt(ua,n),Wt(Oi,l))}function Ou(n){ua.current===n&&(qt(Oi),qt(ua))}var en=Ir(0);function El(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ku=[];function Bu(){for(var n=0;n<ku.length;n++)ku[n]._workInProgressVersionPrimary=null;ku.length=0}var Tl=P.ReactCurrentDispatcher,zu=P.ReactCurrentBatchConfig,fs=0,tn=null,un=null,_n=null,bl=!1,fa=!1,ha=0,Hv=0;function Rn(){throw Error(t(321))}function Vu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!xi(n[l],r[l]))return!1;return!0}function Hu(n,r,l,u,p,v){if(fs=v,tn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Tl.current=n===null||n.memoizedState===null?Xv:Yv,n=l(u,p),fa){v=0;do{if(fa=!1,ha=0,25<=v)throw Error(t(301));v+=1,_n=un=null,r.updateQueue=null,Tl.current=Kv,n=l(u,p)}while(fa)}if(Tl.current=Rl,r=un!==null&&un.next!==null,fs=0,_n=un=tn=null,bl=!1,r)throw Error(t(300));return n}function Gu(){var n=ha!==0;return ha=0,n}function ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?tn.memoizedState=_n=n:_n=_n.next=n,_n}function ci(){if(un===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var r=_n===null?tn.memoizedState:_n.next;if(r!==null)_n=r,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},_n===null?tn.memoizedState=_n=n:_n=_n.next=n}return _n}function pa(n,r){return typeof r=="function"?r(n):r}function ju(n){var r=ci(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=un,p=u.baseQueue,v=l.pending;if(v!==null){if(p!==null){var b=p.next;p.next=v.next,v.next=b}u.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,u=u.baseState;var I=b=null,B=null,se=v;do{var xe=se.lane;if((fs&xe)===xe)B!==null&&(B=B.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:n(u,se.action);else{var Se={lane:xe,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};B===null?(I=B=Se,b=u):B=B.next=Se,tn.lanes|=xe,hs|=xe}se=se.next}while(se!==null&&se!==v);B===null?b=u:B.next=I,xi(u,r.memoizedState)||(jn=!0),r.memoizedState=u,r.baseState=b,r.baseQueue=B,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do v=p.lane,tn.lanes|=v,hs|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Wu(n){var r=ci(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var b=p=p.next;do v=n(v,b.action),b=b.next;while(b!==p);xi(v,r.memoizedState)||(jn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,u]}function Yp(){}function Kp(n,r){var l=tn,u=ci(),p=r(),v=!xi(u.memoizedState,p);if(v&&(u.memoizedState=p,jn=!0),u=u.queue,Xu(Zp.bind(null,l,u,n),[n]),u.getSnapshot!==r||v||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,ma(9,$p.bind(null,l,u,p,r),void 0,null),vn===null)throw Error(t(349));(fs&30)!==0||qp(l,r,p)}return p}function qp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function $p(n,r,l,u){r.value=l,r.getSnapshot=u,Jp(r)&&Qp(n)}function Zp(n,r,l){return l(function(){Jp(r)&&Qp(n)})}function Jp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!xi(n,l)}catch{return!0}}function Qp(n){var r=lr(n,1);r!==null&&Ti(r,n,1,-1)}function em(n){var r=ki();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},r.queue=n,n=n.dispatch=Wv.bind(null,tn,n),[r.memoizedState,n]}function ma(n,r,l,u){return n={tag:n,create:r,destroy:l,deps:u,next:null},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,r.lastEffect=n)),n}function tm(){return ci().memoizedState}function wl(n,r,l,u){var p=ki();tn.flags|=n,p.memoizedState=ma(1|r,l,void 0,u===void 0?null:u)}function Al(n,r,l,u){var p=ci();u=u===void 0?null:u;var v=void 0;if(un!==null){var b=un.memoizedState;if(v=b.destroy,u!==null&&Vu(u,b.deps)){p.memoizedState=ma(r,l,v,u);return}}tn.flags|=n,p.memoizedState=ma(1|r,l,v,u)}function nm(n,r){return wl(8390656,8,n,r)}function Xu(n,r){return Al(2048,8,n,r)}function im(n,r){return Al(4,2,n,r)}function rm(n,r){return Al(4,4,n,r)}function sm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function om(n,r,l){return l=l!=null?l.concat([n]):null,Al(4,4,sm.bind(null,r,n),l)}function Yu(){}function am(n,r){var l=ci();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Vu(r,u[1])?u[0]:(l.memoizedState=[n,r],n)}function lm(n,r){var l=ci();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Vu(r,u[1])?u[0]:(n=n(),l.memoizedState=[n,r],n)}function cm(n,r,l){return(fs&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=l):(xi(l,r)||(l=Be(),tn.lanes|=l,hs|=l,n.baseState=!0),r)}function Gv(n,r){var l=yt;yt=l!==0&&4>l?l:4,n(!0);var u=zu.transition;zu.transition={};try{n(!1),r()}finally{yt=l,zu.transition=u}}function um(){return ci().memoizedState}function jv(n,r,l){var u=Vr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},dm(n))fm(r,l);else if(l=Hp(n,r,l,u),l!==null){var p=Un();Ti(l,n,u,p),hm(l,r,u)}}function Wv(n,r,l){var u=Vr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(dm(n))fm(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var b=r.lastRenderedState,I=v(b,l);if(p.hasEagerState=!0,p.eagerState=I,xi(I,b)){var B=r.interleaved;B===null?(p.next=p,Du(r)):(p.next=B.next,B.next=p),r.interleaved=p;return}}catch{}finally{}l=Hp(n,r,p,u),l!==null&&(p=Un(),Ti(l,n,u,p),hm(l,r,u))}}function dm(n){var r=n.alternate;return n===tn||r!==null&&r===tn}function fm(n,r){fa=bl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function hm(n,r,l){if((l&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Vn(n,l)}}var Rl={readContext:li,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Xv={readContext:li,useCallback:function(n,r){return ki().memoizedState=[n,r===void 0?null:r],n},useContext:li,useEffect:nm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,wl(4194308,4,sm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return wl(4194308,4,n,r)},useInsertionEffect:function(n,r){return wl(4,2,n,r)},useMemo:function(n,r){var l=ki();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var u=ki();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=jv.bind(null,tn,n),[u.memoizedState,n]},useRef:function(n){var r=ki();return n={current:n},r.memoizedState=n},useState:em,useDebugValue:Yu,useDeferredValue:function(n){return ki().memoizedState=n},useTransition:function(){var n=em(!1),r=n[0];return n=Gv.bind(null,n[1]),ki().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var u=tn,p=ki();if(Zt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),vn===null)throw Error(t(349));(fs&30)!==0||qp(u,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,nm(Zp.bind(null,u,v,n),[n]),u.flags|=2048,ma(9,$p.bind(null,u,v,l,r),void 0,null),l},useId:function(){var n=ki(),r=vn.identifierPrefix;if(Zt){var l=ar,u=or;l=(u&~(1<<32-Ae(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=ha++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Hv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Yv={readContext:li,useCallback:am,useContext:li,useEffect:Xu,useImperativeHandle:om,useInsertionEffect:im,useLayoutEffect:rm,useMemo:lm,useReducer:ju,useRef:tm,useState:function(){return ju(pa)},useDebugValue:Yu,useDeferredValue:function(n){var r=ci();return cm(r,un.memoizedState,n)},useTransition:function(){var n=ju(pa)[0],r=ci().memoizedState;return[n,r]},useMutableSource:Yp,useSyncExternalStore:Kp,useId:um,unstable_isNewReconciler:!1},Kv={readContext:li,useCallback:am,useContext:li,useEffect:Xu,useImperativeHandle:om,useInsertionEffect:im,useLayoutEffect:rm,useMemo:lm,useReducer:Wu,useRef:tm,useState:function(){return Wu(pa)},useDebugValue:Yu,useDeferredValue:function(n){var r=ci();return un===null?r.memoizedState=n:cm(r,un.memoizedState,n)},useTransition:function(){var n=Wu(pa)[0],r=ci().memoizedState;return[n,r]},useMutableSource:Yp,useSyncExternalStore:Kp,useId:um,unstable_isNewReconciler:!1};function Si(n,r){if(n&&n.defaultProps){r=ae({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Ku(n,r,l,u){r=n.memoizedState,l=l(u,r),l=l==null?r:ae({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Cl={isMounted:function(n){return(n=n._reactInternals)?Di(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var u=Un(),p=Vr(n),v=cr(u,p);v.payload=r,l!=null&&(v.callback=l),r=Or(n,v,p),r!==null&&(Ti(r,n,p,u),Sl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var u=Un(),p=Vr(n),v=cr(u,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Or(n,v,p),r!==null&&(Ti(r,n,p,u),Sl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Un(),u=Vr(n),p=cr(l,u);p.tag=2,r!=null&&(p.callback=r),r=Or(n,p,u),r!==null&&(Ti(r,n,u,l),Sl(r,n,u))}};function pm(n,r,l,u,p,v,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,b):r.prototype&&r.prototype.isPureReactComponent?!ta(l,u)||!ta(p,v):!0}function mm(n,r,l){var u=!1,p=Dr,v=r.contextType;return typeof v=="object"&&v!==null?v=li(v):(p=Gn(r)?as:An.current,u=r.contextTypes,v=(u=u!=null)?Gs(n,p):Dr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Cl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function gm(n,r,l,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==n&&Cl.enqueueReplaceState(r,r.state,null)}function qu(n,r,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Uu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=li(v):(v=Gn(r)?as:An.current,p.context=Gs(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Ku(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Cl.enqueueReplaceState(p,p.state,null),Ml(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Zs(n,r){try{var l="",u=r;do l+=Ie(u),u=u.return;while(u);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function $u(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var qv=typeof WeakMap=="function"?WeakMap:Map;function _m(n,r,l){l=cr(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){Fl||(Fl=!0,fd=u),Zu(n,r)},l}function vm(n,r,l){l=cr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;l.payload=function(){return u(p)},l.callback=function(){Zu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Zu(n,r),typeof u!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),l}function xm(n,r,l){var u=n.pingCache;if(u===null){u=n.pingCache=new qv;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(l)||(p.add(l),n=cx.bind(null,n,r,l),r.then(n,n))}function ym(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Sm(n,r,l,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=cr(-1,1),r.tag=2,Or(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var $v=P.ReactCurrentOwner,jn=!1;function Dn(n,r,l,u){r.child=n===null?Vp(r,null,l,u):Ys(r,n.child,l,u)}function Mm(n,r,l,u,p){l=l.render;var v=r.ref;return qs(r,p),u=Hu(n,r,l,u,v,p),l=Gu(),n!==null&&!jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ur(n,r,p)):(Zt&&l&&bu(r),r.flags|=1,Dn(n,r,u,p),r.child)}function Em(n,r,l,u,p){if(n===null){var v=l.type;return typeof v=="function"&&!xd(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Tm(n,r,v,u,p)):(n=Hl(l.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var b=v.memoizedProps;if(l=l.compare,l=l!==null?l:ta,l(b,u)&&n.ref===r.ref)return ur(n,r,p)}return r.flags|=1,n=Gr(v,u),n.ref=r.ref,n.return=r,r.child=n}function Tm(n,r,l,u,p){if(n!==null){var v=n.memoizedProps;if(ta(v,u)&&n.ref===r.ref)if(jn=!1,r.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(jn=!0);else return r.lanes=n.lanes,ur(n,r,p)}return Ju(n,r,l,u,p)}function bm(n,r,l){var u=r.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(Qs,Qn),Qn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Wt(Qs,Qn),Qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:l,Wt(Qs,Qn),Qn|=u}else v!==null?(u=v.baseLanes|l,r.memoizedState=null):u=l,Wt(Qs,Qn),Qn|=u;return Dn(n,r,p,l),r.child}function wm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Ju(n,r,l,u,p){var v=Gn(l)?as:An.current;return v=Gs(r,v),qs(r,p),l=Hu(n,r,l,u,v,p),u=Gu(),n!==null&&!jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ur(n,r,p)):(Zt&&u&&bu(r),r.flags|=1,Dn(n,r,l,p),r.child)}function Am(n,r,l,u,p){if(Gn(l)){var v=!0;hl(r)}else v=!1;if(qs(r,p),r.stateNode===null)Ll(n,r),mm(r,l,u),qu(r,l,u,p),u=!0;else if(n===null){var b=r.stateNode,I=r.memoizedProps;b.props=I;var B=b.context,se=l.contextType;typeof se=="object"&&se!==null?se=li(se):(se=Gn(l)?as:An.current,se=Gs(r,se));var xe=l.getDerivedStateFromProps,Se=typeof xe=="function"||typeof b.getSnapshotBeforeUpdate=="function";Se||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==u||B!==se)&&gm(r,b,u,se),Fr=!1;var ve=r.memoizedState;b.state=ve,Ml(r,u,b,p),B=r.memoizedState,I!==u||ve!==B||Hn.current||Fr?(typeof xe=="function"&&(Ku(r,l,xe,u),B=r.memoizedState),(I=Fr||pm(r,l,I,u,ve,B,se))?(Se||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=B),b.props=u,b.state=B,b.context=se,u=I):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{b=r.stateNode,Gp(n,r),I=r.memoizedProps,se=r.type===r.elementType?I:Si(r.type,I),b.props=se,Se=r.pendingProps,ve=b.context,B=l.contextType,typeof B=="object"&&B!==null?B=li(B):(B=Gn(l)?as:An.current,B=Gs(r,B));var ze=l.getDerivedStateFromProps;(xe=typeof ze=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==Se||ve!==B)&&gm(r,b,u,B),Fr=!1,ve=r.memoizedState,b.state=ve,Ml(r,u,b,p);var je=r.memoizedState;I!==Se||ve!==je||Hn.current||Fr?(typeof ze=="function"&&(Ku(r,l,ze,u),je=r.memoizedState),(se=Fr||pm(r,l,se,u,ve,je,B)||!1)?(xe||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,je,B),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,je,B)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=je),b.props=u,b.state=je,b.context=B,u=se):(typeof b.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),u=!1)}return Qu(n,r,l,u,v,p)}function Qu(n,r,l,u,p,v){wm(n,r);var b=(r.flags&128)!==0;if(!u&&!b)return p&&Np(r,l,!1),ur(n,r,v);u=r.stateNode,$v.current=r;var I=b&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&b?(r.child=Ys(r,n.child,null,v),r.child=Ys(r,null,I,v)):Dn(n,r,I,v),r.memoizedState=u.state,p&&Np(r,l,!0),r.child}function Rm(n){var r=n.stateNode;r.pendingContext?Pp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Pp(n,r.context,!1),Fu(n,r.containerInfo)}function Cm(n,r,l,u,p){return Xs(),Cu(p),r.flags|=256,Dn(n,r,l,u),r.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pm(n,r,l){var u=r.pendingProps,p=en.current,v=!1,b=(r.flags&128)!==0,I;if((I=b)||(I=n!==null&&n.memoizedState===null?!1:(p&2)!==0),I?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Wt(en,p&1),n===null)return Ru(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=u.children,n=u.fallback,v?(u=r.mode,v=r.child,b={mode:"hidden",children:b},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=b):v=Gl(b,u,0,null),n=_s(n,u,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=td(l),r.memoizedState=ed,n):nd(r,b));if(p=n.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return Zv(n,r,b,u,I,p,l);if(v){v=u.fallback,b=r.mode,p=n.child,I=p.sibling;var B={mode:"hidden",children:u.children};return(b&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=B,r.deletions=null):(u=Gr(p,B),u.subtreeFlags=p.subtreeFlags&14680064),I!==null?v=Gr(I,v):(v=_s(v,b,l,null),v.flags|=2),v.return=r,u.return=r,u.sibling=v,r.child=u,u=v,v=r.child,b=n.child.memoizedState,b=b===null?td(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},v.memoizedState=b,v.childLanes=n.childLanes&~l,r.memoizedState=ed,u}return v=n.child,n=v.sibling,u=Gr(v,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=u,r.memoizedState=null,u}function nd(n,r){return r=Gl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Pl(n,r,l,u){return u!==null&&Cu(u),Ys(r,n.child,null,l),n=nd(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Zv(n,r,l,u,p,v,b){if(l)return r.flags&256?(r.flags&=-257,u=$u(Error(t(422))),Pl(n,r,b,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=u.fallback,p=r.mode,u=Gl({mode:"visible",children:u.children},p,0,null),v=_s(v,p,b,null),v.flags|=2,u.return=r,v.return=r,u.sibling=v,r.child=u,(r.mode&1)!==0&&Ys(r,n.child,null,b),r.child.memoizedState=td(b),r.memoizedState=ed,v);if((r.mode&1)===0)return Pl(n,r,b,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var I=u.dgst;return u=I,v=Error(t(419)),u=$u(v,u,void 0),Pl(n,r,b,u)}if(I=(b&n.childLanes)!==0,jn||I){if(u=vn,u!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|b))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,lr(n,p),Ti(u,n,p,-1))}return vd(),u=$u(Error(t(421))),Pl(n,r,b,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=ux.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Jn=Nr(p.nextSibling),Zn=r,Zt=!0,yi=null,n!==null&&(oi[ai++]=or,oi[ai++]=ar,oi[ai++]=ls,or=n.id,ar=n.overflow,ls=r),r=nd(r,u.children),r.flags|=4096,r)}function Lm(n,r,l){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Iu(n.return,r,l)}function id(n,r,l,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=l,v.tailMode=p)}function Nm(n,r,l){var u=r.pendingProps,p=u.revealOrder,v=u.tail;if(Dn(n,r,u.children,l),u=en.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lm(n,l,r);else if(n.tag===19)Lm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Wt(en,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&El(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),id(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&El(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}id(r,!0,l,null,v);break;case"together":id(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ll(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ur(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),hs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Gr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Gr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Jv(n,r,l){switch(r.tag){case 3:Rm(r),Xs();break;case 5:Xp(r);break;case 1:Gn(r.type)&&hl(r);break;case 4:Fu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Wt(xl,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Wt(en,en.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Pm(n,r,l):(Wt(en,en.current&1),n=ur(n,r,l),n!==null?n.sibling:null);Wt(en,en.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Nm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Wt(en,en.current),u)break;return null;case 22:case 23:return r.lanes=0,bm(n,r,l)}return ur(n,r,l)}var Im,rd,Dm,Um;Im=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},rd=function(){},Dm=function(n,r,l,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,ds(Oi.current);var v=null;switch(l){case"input":p=wt(n,p),u=wt(n,u),v=[];break;case"select":p=ae({},p,{value:void 0}),u=ae({},u,{value:void 0}),v=[];break;case"textarea":p=pt(n,p),u=pt(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ul)}ke(l,u);var b;l=null;for(se in p)if(!u.hasOwnProperty(se)&&p.hasOwnProperty(se)&&p[se]!=null)if(se==="style"){var I=p[se];for(b in I)I.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?v||(v=[]):(v=v||[]).push(se,null));for(se in u){var B=u[se];if(I=p!=null?p[se]:void 0,u.hasOwnProperty(se)&&B!==I&&(B!=null||I!=null))if(se==="style")if(I){for(b in I)!I.hasOwnProperty(b)||B&&B.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in B)B.hasOwnProperty(b)&&I[b]!==B[b]&&(l||(l={}),l[b]=B[b])}else l||(v||(v=[]),v.push(se,l)),l=B;else se==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(v=v||[]).push(se,B)):se==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(se,""+B):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(B!=null&&se==="onScroll"&&Kt("scroll",n),v||I===B||(v=[])):(v=v||[]).push(se,B))}l&&(v=v||[]).push("style",l);var se=v;(r.updateQueue=se)&&(r.flags|=4)}},Um=function(n,r,l,u){l!==u&&(r.flags|=4)};function ga(n,r){if(!Zt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Cn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,r}function Qv(n,r,l){var u=r.pendingProps;switch(wu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(r),null;case 1:return Gn(r.type)&&fl(),Cn(r),null;case 3:return u=r.stateNode,$s(),qt(Hn),qt(An),Bu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(_l(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,yi!==null&&(md(yi),yi=null))),rd(n,r),Cn(r),null;case 5:Ou(r);var p=ds(da.current);if(l=r.type,n!==null&&r.stateNode!=null)Dm(n,r,l,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Cn(r),null}if(n=ds(Oi.current),_l(r)){u=r.stateNode,l=r.type;var v=r.memoizedProps;switch(u[Fi]=r,u[oa]=v,n=(r.mode&1)!==0,l){case"dialog":Kt("cancel",u),Kt("close",u);break;case"iframe":case"object":case"embed":Kt("load",u);break;case"video":case"audio":for(p=0;p<ia.length;p++)Kt(ia[p],u);break;case"source":Kt("error",u);break;case"img":case"image":case"link":Kt("error",u),Kt("load",u);break;case"details":Kt("toggle",u);break;case"input":Ot(u,v),Kt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Kt("invalid",u);break;case"textarea":Lt(u,v),Kt("invalid",u)}ke(l,v),p=null;for(var b in v)if(v.hasOwnProperty(b)){var I=v[b];b==="children"?typeof I=="string"?u.textContent!==I&&(v.suppressHydrationWarning!==!0&&cl(u.textContent,I,n),p=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&cl(u.textContent,I,n),p=["children",""+I]):o.hasOwnProperty(b)&&I!=null&&b==="onScroll"&&Kt("scroll",u)}switch(l){case"input":Qe(u),Ht(u,v,!0);break;case"textarea":Qe(u),Xt(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=ul)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=C(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=b.createElement(l,{is:u.is}):(n=b.createElement(l),l==="select"&&(b=n,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):n=b.createElementNS(n,l),n[Fi]=r,n[oa]=u,Im(n,r,!1,!1),r.stateNode=n;e:{switch(b=we(l,u),l){case"dialog":Kt("cancel",n),Kt("close",n),p=u;break;case"iframe":case"object":case"embed":Kt("load",n),p=u;break;case"video":case"audio":for(p=0;p<ia.length;p++)Kt(ia[p],n);p=u;break;case"source":Kt("error",n),p=u;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),p=u;break;case"details":Kt("toggle",n),p=u;break;case"input":Ot(n,u),p=wt(n,u),Kt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ae({},u,{value:void 0}),Kt("invalid",n);break;case"textarea":Lt(n,u),p=pt(n,u),Kt("invalid",n);break;default:p=u}ke(l,p),I=p;for(v in I)if(I.hasOwnProperty(v)){var B=I[v];v==="style"?pe(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&he(n,B)):v==="children"?typeof B=="string"?(l!=="textarea"||B!=="")&&ge(n,B):typeof B=="number"&&ge(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?B!=null&&v==="onScroll"&&Kt("scroll",n):B!=null&&L(n,v,B,b))}switch(l){case"input":Qe(n),Ht(n,u,!1);break;case"textarea":Qe(n),Xt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+me(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Gt(n,!!u.multiple,v,!1):u.defaultValue!=null&&Gt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ul)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Cn(r),null;case 6:if(n&&r.stateNode!=null)Um(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(l=ds(da.current),ds(Oi.current),_l(r)){if(u=r.stateNode,l=r.memoizedProps,u[Fi]=r,(v=u.nodeValue!==l)&&(n=Zn,n!==null))switch(n.tag){case 3:cl(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cl(u.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Fi]=r,r.stateNode=u}return Cn(r),null;case 13:if(qt(en),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Zt&&Jn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)kp(),Xs(),r.flags|=98560,v=!1;else if(v=_l(r),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Fi]=r}else Xs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Cn(r),v=!1}else yi!==null&&(md(yi),yi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(en.current&1)!==0?dn===0&&(dn=3):vd())),r.updateQueue!==null&&(r.flags|=4),Cn(r),null);case 4:return $s(),rd(n,r),n===null&&ra(r.stateNode.containerInfo),Cn(r),null;case 10:return Nu(r.type._context),Cn(r),null;case 17:return Gn(r.type)&&fl(),Cn(r),null;case 19:if(qt(en),v=r.memoizedState,v===null)return Cn(r),null;if(u=(r.flags&128)!==0,b=v.rendering,b===null)if(u)ga(v,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(b=El(n),b!==null){for(r.flags|=128,ga(v,!1),u=b.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)v=l,n=u,v.flags&=14680066,b=v.alternate,b===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=b.childLanes,v.lanes=b.lanes,v.child=b.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=b.memoizedProps,v.memoizedState=b.memoizedState,v.updateQueue=b.updateQueue,v.type=b.type,n=b.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Wt(en,en.current&1|2),r.child}n=n.sibling}v.tail!==null&&Qt()>eo&&(r.flags|=128,u=!0,ga(v,!1),r.lanes=4194304)}else{if(!u)if(n=El(b),n!==null){if(r.flags|=128,u=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ga(v,!0),v.tail===null&&v.tailMode==="hidden"&&!b.alternate&&!Zt)return Cn(r),null}else 2*Qt()-v.renderingStartTime>eo&&l!==1073741824&&(r.flags|=128,u=!0,ga(v,!1),r.lanes=4194304);v.isBackwards?(b.sibling=r.child,r.child=b):(l=v.last,l!==null?l.sibling=b:r.child=b,v.last=b)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Qt(),r.sibling=null,l=en.current,Wt(en,u?l&1|2:l&1),r):(Cn(r),null);case 22:case 23:return _d(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Qn&1073741824)!==0&&(Cn(r),r.subtreeFlags&6&&(r.flags|=8192)):Cn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function ex(n,r){switch(wu(r),r.tag){case 1:return Gn(r.type)&&fl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return $s(),qt(Hn),qt(An),Bu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Ou(r),null;case 13:if(qt(en),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Xs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qt(en),null;case 4:return $s(),null;case 10:return Nu(r.type._context),null;case 22:case 23:return _d(),null;case 24:return null;default:return null}}var Nl=!1,Pn=!1,tx=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Js(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){rn(n,r,u)}else l.current=null}function sd(n,r,l){try{l()}catch(u){rn(n,r,u)}}var Fm=!1;function nx(n,r){if(_u=Ja,n=pp(),cu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var b=0,I=-1,B=-1,se=0,xe=0,Se=n,ve=null;t:for(;;){for(var ze;Se!==l||p!==0&&Se.nodeType!==3||(I=b+p),Se!==v||u!==0&&Se.nodeType!==3||(B=b+u),Se.nodeType===3&&(b+=Se.nodeValue.length),(ze=Se.firstChild)!==null;)ve=Se,Se=ze;for(;;){if(Se===n)break t;if(ve===l&&++se===p&&(I=b),ve===v&&++xe===u&&(B=b),(ze=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=ze}l=I===-1||B===-1?null:{start:I,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(vu={focusedElem:n,selectionRange:l},Ja=!1,Ge=r;Ge!==null;)if(r=Ge,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ge=n;else for(;Ge!==null;){r=Ge;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ye=je.memoizedProps,sn=je.memoizedState,Z=r.stateNode,H=Z.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:Si(r.type,Ye),sn);Z.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ne=r.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){rn(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,Ge=n;break}Ge=r.return}return je=Fm,Fm=!1,je}function _a(n,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&sd(r,l,v)}p=p.next}while(p!==u)}}function Il(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function od(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Om(n){var r=n.alternate;r!==null&&(n.alternate=null,Om(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Fi],delete r[oa],delete r[Mu],delete r[kv],delete r[Bv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function km(n){return n.tag===5||n.tag===3||n.tag===4}function Bm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||km(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ad(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ul));else if(u!==4&&(n=n.child,n!==null))for(ad(n,r,l),n=n.sibling;n!==null;)ad(n,r,l),n=n.sibling}function ld(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(ld(n,r,l),n=n.sibling;n!==null;)ld(n,r,l),n=n.sibling}var Tn=null,Mi=!1;function kr(n,r,l){for(l=l.child;l!==null;)zm(n,r,l),l=l.sibling}function zm(n,r,l){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Q,l)}catch{}switch(l.tag){case 5:Pn||Js(l,r);case 6:var u=Tn,p=Mi;Tn=null,kr(n,r,l),Tn=u,Mi=p,Tn!==null&&(Mi?(n=Tn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Tn.removeChild(l.stateNode));break;case 18:Tn!==null&&(Mi?(n=Tn,l=l.stateNode,n.nodeType===8?Su(n.parentNode,l):n.nodeType===1&&Su(n,l),qo(n)):Su(Tn,l.stateNode));break;case 4:u=Tn,p=Mi,Tn=l.stateNode.containerInfo,Mi=!0,kr(n,r,l),Tn=u,Mi=p;break;case 0:case 11:case 14:case 15:if(!Pn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,b=v.destroy;v=v.tag,b!==void 0&&((v&2)!==0||(v&4)!==0)&&sd(l,r,b),p=p.next}while(p!==u)}kr(n,r,l);break;case 1:if(!Pn&&(Js(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(I){rn(l,r,I)}kr(n,r,l);break;case 21:kr(n,r,l);break;case 22:l.mode&1?(Pn=(u=Pn)||l.memoizedState!==null,kr(n,r,l),Pn=u):kr(n,r,l);break;default:kr(n,r,l)}}function Vm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new tx),r.forEach(function(u){var p=dx.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function Ei(n,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var v=n,b=r,I=b;e:for(;I!==null;){switch(I.tag){case 5:Tn=I.stateNode,Mi=!1;break e;case 3:Tn=I.stateNode.containerInfo,Mi=!0;break e;case 4:Tn=I.stateNode.containerInfo,Mi=!0;break e}I=I.return}if(Tn===null)throw Error(t(160));zm(v,b,p),Tn=null,Mi=!1;var B=p.alternate;B!==null&&(B.return=null),p.return=null}catch(se){rn(p,r,se)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Hm(r,n),r=r.sibling}function Hm(n,r){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ei(r,n),Bi(n),u&4){try{_a(3,n,n.return),Il(3,n)}catch(Ye){rn(n,n.return,Ye)}try{_a(5,n,n.return)}catch(Ye){rn(n,n.return,Ye)}}break;case 1:Ei(r,n),Bi(n),u&512&&l!==null&&Js(l,l.return);break;case 5:if(Ei(r,n),Bi(n),u&512&&l!==null&&Js(l,l.return),n.flags&32){var p=n.stateNode;try{ge(p,"")}catch(Ye){rn(n,n.return,Ye)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,b=l!==null?l.memoizedProps:v,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&ht(p,v),we(I,b);var se=we(I,v);for(b=0;b<B.length;b+=2){var xe=B[b],Se=B[b+1];xe==="style"?pe(p,Se):xe==="dangerouslySetInnerHTML"?he(p,Se):xe==="children"?ge(p,Se):L(p,xe,Se,se)}switch(I){case"input":Jt(p,v);break;case"textarea":Le(p,v);break;case"select":var ve=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var ze=v.value;ze!=null?Gt(p,!!v.multiple,ze,!1):ve!==!!v.multiple&&(v.defaultValue!=null?Gt(p,!!v.multiple,v.defaultValue,!0):Gt(p,!!v.multiple,v.multiple?[]:"",!1))}p[oa]=v}catch(Ye){rn(n,n.return,Ye)}}break;case 6:if(Ei(r,n),Bi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ye){rn(n,n.return,Ye)}}break;case 3:if(Ei(r,n),Bi(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{qo(r.containerInfo)}catch(Ye){rn(n,n.return,Ye)}break;case 4:Ei(r,n),Bi(n);break;case 13:Ei(r,n),Bi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(dd=Qt())),u&4&&Vm(n);break;case 22:if(xe=l!==null&&l.memoizedState!==null,n.mode&1?(Pn=(se=Pn)||xe,Ei(r,n),Pn=se):Ei(r,n),Bi(n),u&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!xe&&(n.mode&1)!==0)for(Ge=n,xe=n.child;xe!==null;){for(Se=Ge=xe;Ge!==null;){switch(ve=Ge,ze=ve.child,ve.tag){case 0:case 11:case 14:case 15:_a(4,ve,ve.return);break;case 1:Js(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){u=ve,l=ve.return;try{r=u,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Ye){rn(u,l,Ye)}}break;case 5:Js(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Wm(Se);continue}}ze!==null?(ze.return=ve,Ge=ze):Wm(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{p=Se.stateNode,se?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=Se.stateNode,B=Se.memoizedProps.style,b=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=ue("display",b))}catch(Ye){rn(n,n.return,Ye)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=se?"":Se.memoizedProps}catch(Ye){rn(n,n.return,Ye)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ei(r,n),Bi(n),u&4&&Vm(n);break;case 21:break;default:Ei(r,n),Bi(n)}}function Bi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(km(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(ge(p,""),u.flags&=-33);var v=Bm(n);ld(n,v,p);break;case 3:case 4:var b=u.stateNode.containerInfo,I=Bm(n);ad(n,I,b);break;default:throw Error(t(161))}}catch(B){rn(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function ix(n,r,l){Ge=n,Gm(n)}function Gm(n,r,l){for(var u=(n.mode&1)!==0;Ge!==null;){var p=Ge,v=p.child;if(p.tag===22&&u){var b=p.memoizedState!==null||Nl;if(!b){var I=p.alternate,B=I!==null&&I.memoizedState!==null||Pn;I=Nl;var se=Pn;if(Nl=b,(Pn=B)&&!se)for(Ge=p;Ge!==null;)b=Ge,B=b.child,b.tag===22&&b.memoizedState!==null?Xm(p):B!==null?(B.return=b,Ge=B):Xm(p);for(;v!==null;)Ge=v,Gm(v),v=v.sibling;Ge=p,Nl=I,Pn=se}jm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Ge=v):jm(n)}}function jm(n){for(;Ge!==null;){var r=Ge;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Pn||Il(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Pn)if(l===null)u.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:Si(r.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Wp(r,v,u);break;case 3:var b=r.updateQueue;if(b!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Wp(r,b,l)}break;case 5:var I=r.stateNode;if(l===null&&r.flags&4){l=I;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&l.focus();break;case"img":B.src&&(l.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var se=r.alternate;if(se!==null){var xe=se.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&qo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||r.flags&512&&od(r)}catch(ve){rn(r,r.return,ve)}}if(r===n){Ge=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ge=l;break}Ge=r.return}}function Wm(n){for(;Ge!==null;){var r=Ge;if(r===n){Ge=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ge=l;break}Ge=r.return}}function Xm(n){for(;Ge!==null;){var r=Ge;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Il(4,r)}catch(B){rn(r,l,B)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(B){rn(r,p,B)}}var v=r.return;try{od(r)}catch(B){rn(r,v,B)}break;case 5:var b=r.return;try{od(r)}catch(B){rn(r,b,B)}}}catch(B){rn(r,r.return,B)}if(r===n){Ge=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Ge=I;break}Ge=r.return}}var rx=Math.ceil,Dl=P.ReactCurrentDispatcher,cd=P.ReactCurrentOwner,ui=P.ReactCurrentBatchConfig,bt=0,vn=null,ln=null,bn=0,Qn=0,Qs=Ir(0),dn=0,va=null,hs=0,Ul=0,ud=0,xa=null,Wn=null,dd=0,eo=1/0,dr=null,Fl=!1,fd=null,Br=null,Ol=!1,zr=null,kl=0,ya=0,hd=null,Bl=-1,zl=0;function Un(){return(bt&6)!==0?Qt():Bl!==-1?Bl:Bl=Qt()}function Vr(n){return(n.mode&1)===0?1:(bt&2)!==0&&bn!==0?bn&-bn:Vv.transition!==null?(zl===0&&(zl=Be()),zl):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Kh(n.type)),n)}function Ti(n,r,l,u){if(50<ya)throw ya=0,hd=null,Error(t(185));_t(n,l,u),((bt&2)===0||n!==vn)&&(n===vn&&((bt&2)===0&&(Ul|=l),dn===4&&Hr(n,bn)),Xn(n,u),l===1&&bt===0&&(r.mode&1)===0&&(eo=Qt()+500,pl&&Ur()))}function Xn(n,r){var l=n.callbackNode;Nt(n,r);var u=jt(n,n===vn?bn:0);if(u===0)l!==null&&$a(l),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(l!=null&&$a(l),r===1)n.tag===0?zv(Km.bind(null,n)):Ip(Km.bind(null,n)),Fv(function(){(bt&6)===0&&Ur()}),l=null;else{switch(ir(u)){case 1:l=jo;break;case 4:l=A;break;case 16:l=j;break;case 536870912:l=te;break;default:l=j}l=ng(l,Ym.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Ym(n,r){if(Bl=-1,zl=0,(bt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(to()&&n.callbackNode!==l)return null;var u=jt(n,n===vn?bn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Vl(n,u);else{r=u;var p=bt;bt|=2;var v=$m();(vn!==n||bn!==r)&&(dr=null,eo=Qt()+500,ms(n,r));do try{ax();break}catch(I){qm(n,I)}while(!0);Lu(),Dl.current=v,bt=p,ln!==null?r=0:(vn=null,bn=0,r=dn)}if(r!==0){if(r===2&&(p=an(n),p!==0&&(u=p,r=pd(n,p))),r===1)throw l=va,ms(n,0),Hr(n,u),Xn(n,Qt()),l;if(r===6)Hr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!sx(p)&&(r=Vl(n,u),r===2&&(v=an(n),v!==0&&(u=v,r=pd(n,v))),r===1))throw l=va,ms(n,0),Hr(n,u),Xn(n,Qt()),l;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:gs(n,Wn,dr);break;case 3:if(Hr(n,u),(u&130023424)===u&&(r=dd+500-Qt(),10<r)){if(jt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Un(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=yu(gs.bind(null,n,Wn,dr),r);break}gs(n,Wn,dr);break;case 4:if(Hr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var b=31-Ae(u);v=1<<b,b=r[b],b>p&&(p=b),u&=~v}if(u=p,u=Qt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*rx(u/1960))-u,10<u){n.timeoutHandle=yu(gs.bind(null,n,Wn,dr),u);break}gs(n,Wn,dr);break;case 5:gs(n,Wn,dr);break;default:throw Error(t(329))}}}return Xn(n,Qt()),n.callbackNode===l?Ym.bind(null,n):null}function pd(n,r){var l=xa;return n.current.memoizedState.isDehydrated&&(ms(n,r).flags|=256),n=Vl(n,r),n!==2&&(r=Wn,Wn=l,r!==null&&md(r)),n}function md(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function sx(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],v=p.getSnapshot;p=p.value;try{if(!xi(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Hr(n,r){for(r&=~ud,r&=~Ul,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Ae(r),u=1<<l;n[l]=-1,r&=~u}}function Km(n){if((bt&6)!==0)throw Error(t(327));to();var r=jt(n,0);if((r&1)===0)return Xn(n,Qt()),null;var l=Vl(n,r);if(n.tag!==0&&l===2){var u=an(n);u!==0&&(r=u,l=pd(n,u))}if(l===1)throw l=va,ms(n,0),Hr(n,r),Xn(n,Qt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,gs(n,Wn,dr),Xn(n,Qt()),null}function gd(n,r){var l=bt;bt|=1;try{return n(r)}finally{bt=l,bt===0&&(eo=Qt()+500,pl&&Ur())}}function ps(n){zr!==null&&zr.tag===0&&(bt&6)===0&&to();var r=bt;bt|=1;var l=ui.transition,u=yt;try{if(ui.transition=null,yt=1,n)return n()}finally{yt=u,ui.transition=l,bt=r,(bt&6)===0&&Ur()}}function _d(){Qn=Qs.current,qt(Qs)}function ms(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Uv(l)),ln!==null)for(l=ln.return;l!==null;){var u=l;switch(wu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&fl();break;case 3:$s(),qt(Hn),qt(An),Bu();break;case 5:Ou(u);break;case 4:$s();break;case 13:qt(en);break;case 19:qt(en);break;case 10:Nu(u.type._context);break;case 22:case 23:_d()}l=l.return}if(vn=n,ln=n=Gr(n.current,null),bn=Qn=r,dn=0,va=null,ud=Ul=hs=0,Wn=xa=null,us!==null){for(r=0;r<us.length;r++)if(l=us[r],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,v=l.pending;if(v!==null){var b=v.next;v.next=p,u.next=b}l.pending=u}us=null}return n}function qm(n,r){do{var l=ln;try{if(Lu(),Tl.current=Rl,bl){for(var u=tn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}bl=!1}if(fs=0,_n=un=tn=null,fa=!1,ha=0,cd.current=null,l===null||l.return===null){dn=1,va=r,ln=null;break}e:{var v=n,b=l.return,I=l,B=r;if(r=bn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var se=B,xe=I,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ze=ym(b);if(ze!==null){ze.flags&=-257,Sm(ze,b,I,v,r),ze.mode&1&&xm(v,se,r),r=ze,B=se;var je=r.updateQueue;if(je===null){var Ye=new Set;Ye.add(B),r.updateQueue=Ye}else je.add(B);break e}else{if((r&1)===0){xm(v,se,r),vd();break e}B=Error(t(426))}}else if(Zt&&I.mode&1){var sn=ym(b);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Sm(sn,b,I,v,r),Cu(Zs(B,I));break e}}v=B=Zs(B,I),dn!==4&&(dn=2),xa===null?xa=[v]:xa.push(v),v=b;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var Z=_m(v,B,r);jp(v,Z);break e;case 1:I=B;var H=v.type,ne=v.stateNode;if((v.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Br===null||!Br.has(ne)))){v.flags|=65536,r&=-r,v.lanes|=r;var Te=vm(v,I,r);jp(v,Te);break e}}v=v.return}while(v!==null)}Jm(l)}catch(qe){r=qe,ln===l&&l!==null&&(ln=l=l.return);continue}break}while(!0)}function $m(){var n=Dl.current;return Dl.current=Rl,n===null?Rl:n}function vd(){(dn===0||dn===3||dn===2)&&(dn=4),vn===null||(hs&268435455)===0&&(Ul&268435455)===0||Hr(vn,bn)}function Vl(n,r){var l=bt;bt|=2;var u=$m();(vn!==n||bn!==r)&&(dr=null,ms(n,r));do try{ox();break}catch(p){qm(n,p)}while(!0);if(Lu(),bt=l,Dl.current=u,ln!==null)throw Error(t(261));return vn=null,bn=0,dn}function ox(){for(;ln!==null;)Zm(ln)}function ax(){for(;ln!==null&&!qc();)Zm(ln)}function Zm(n){var r=tg(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,r===null?Jm(n):ln=r,cd.current=null}function Jm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Qv(l,r,Qn),l!==null){ln=l;return}}else{if(l=ex(l,r),l!==null){l.flags&=32767,ln=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,ln=null;return}}if(r=r.sibling,r!==null){ln=r;return}ln=r=n}while(r!==null);dn===0&&(dn=5)}function gs(n,r,l){var u=yt,p=ui.transition;try{ui.transition=null,yt=1,lx(n,r,l,u)}finally{ui.transition=p,yt=u}return null}function lx(n,r,l,u){do to();while(zr!==null);if((bt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(zn(n,v),n===vn&&(ln=vn=null,bn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ol||(Ol=!0,ng(j,function(){return to(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=ui.transition,ui.transition=null;var b=yt;yt=1;var I=bt;bt|=4,cd.current=null,nx(n,l),Hm(l,n),Rv(vu),Ja=!!_u,vu=_u=null,n.current=l,ix(l),$c(),bt=I,yt=b,ui.transition=v}else n.current=l;if(Ol&&(Ol=!1,zr=n,kl=p),v=n.pendingLanes,v===0&&(Br=null),Ve(l.stateNode),Xn(n,Qt()),r!==null)for(u=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(Fl)throw Fl=!1,n=fd,fd=null,n;return(kl&1)!==0&&n.tag!==0&&to(),v=n.pendingLanes,(v&1)!==0?n===hd?ya++:(ya=0,hd=n):ya=0,Ur(),null}function to(){if(zr!==null){var n=ir(kl),r=ui.transition,l=yt;try{if(ui.transition=null,yt=16>n?16:n,zr===null)var u=!1;else{if(n=zr,zr=null,kl=0,(bt&6)!==0)throw Error(t(331));var p=bt;for(bt|=4,Ge=n.current;Ge!==null;){var v=Ge,b=v.child;if((Ge.flags&16)!==0){var I=v.deletions;if(I!==null){for(var B=0;B<I.length;B++){var se=I[B];for(Ge=se;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:_a(8,xe,v)}var Se=xe.child;if(Se!==null)Se.return=xe,Ge=Se;else for(;Ge!==null;){xe=Ge;var ve=xe.sibling,ze=xe.return;if(Om(xe),xe===se){Ge=null;break}if(ve!==null){ve.return=ze,Ge=ve;break}Ge=ze}}}var je=v.alternate;if(je!==null){var Ye=je.child;if(Ye!==null){je.child=null;do{var sn=Ye.sibling;Ye.sibling=null,Ye=sn}while(Ye!==null)}}Ge=v}}if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,Ge=b;else e:for(;Ge!==null;){if(v=Ge,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:_a(9,v,v.return)}var Z=v.sibling;if(Z!==null){Z.return=v.return,Ge=Z;break e}Ge=v.return}}var H=n.current;for(Ge=H;Ge!==null;){b=Ge;var ne=b.child;if((b.subtreeFlags&2064)!==0&&ne!==null)ne.return=b,Ge=ne;else e:for(b=H;Ge!==null;){if(I=Ge,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Il(9,I)}}catch(qe){rn(I,I.return,qe)}if(I===b){Ge=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Ge=Te;break e}Ge=I.return}}if(bt=p,Ur(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Q,n)}catch{}u=!0}return u}finally{yt=l,ui.transition=r}}return!1}function Qm(n,r,l){r=Zs(l,r),r=_m(n,r,1),n=Or(n,r,1),r=Un(),n!==null&&(_t(n,1,r),Xn(n,r))}function rn(n,r,l){if(n.tag===3)Qm(n,n,l);else for(;r!==null;){if(r.tag===3){Qm(r,n,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Br===null||!Br.has(u))){n=Zs(l,n),n=vm(r,n,1),r=Or(r,n,1),n=Un(),r!==null&&(_t(r,1,n),Xn(r,n));break}}r=r.return}}function cx(n,r,l){var u=n.pingCache;u!==null&&u.delete(r),r=Un(),n.pingedLanes|=n.suspendedLanes&l,vn===n&&(bn&l)===l&&(dn===4||dn===3&&(bn&130023424)===bn&&500>Qt()-dd?ms(n,0):ud|=l),Xn(n,r)}function eg(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var l=Un();n=lr(n,r),n!==null&&(_t(n,r,l),Xn(n,l))}function ux(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),eg(n,l)}function dx(n,r){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),eg(n,l)}var tg;tg=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Hn.current)jn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return jn=!1,Jv(n,r,l);jn=(n.flags&131072)!==0}else jn=!1,Zt&&(r.flags&1048576)!==0&&Dp(r,gl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Ll(n,r),n=r.pendingProps;var p=Gs(r,An.current);qs(r,l),p=Hu(null,r,u,n,p,l);var v=Gu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gn(u)?(v=!0,hl(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Uu(r),p.updater=Cl,r.stateNode=p,p._reactInternals=r,qu(r,u,n,l),r=Qu(null,r,u,!0,v,l)):(r.tag=0,Zt&&v&&bu(r),Dn(null,r,p,l),r=r.child),r;case 16:u=r.elementType;e:{switch(Ll(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=hx(u),n=Si(u,n),p){case 0:r=Ju(null,r,u,n,l);break e;case 1:r=Am(null,r,u,n,l);break e;case 11:r=Mm(null,r,u,n,l);break e;case 14:r=Em(null,r,u,Si(u.type,n),l);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Si(u,p),Ju(n,r,u,p,l);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Si(u,p),Am(n,r,u,p,l);case 3:e:{if(Rm(r),n===null)throw Error(t(387));u=r.pendingProps,v=r.memoizedState,p=v.element,Gp(n,r),Ml(r,u,null,l);var b=r.memoizedState;if(u=b.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Zs(Error(t(423)),r),r=Cm(n,r,u,l,p);break e}else if(u!==p){p=Zs(Error(t(424)),r),r=Cm(n,r,u,l,p);break e}else for(Jn=Nr(r.stateNode.containerInfo.firstChild),Zn=r,Zt=!0,yi=null,l=Vp(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Xs(),u===p){r=ur(n,r,l);break e}Dn(n,r,u,l)}r=r.child}return r;case 5:return Xp(r),n===null&&Ru(r),u=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,b=p.children,xu(u,p)?b=null:v!==null&&xu(u,v)&&(r.flags|=32),wm(n,r),Dn(n,r,b,l),r.child;case 6:return n===null&&Ru(r),null;case 13:return Pm(n,r,l);case 4:return Fu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Ys(r,null,u,l):Dn(n,r,u,l),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Si(u,p),Mm(n,r,u,p,l);case 7:return Dn(n,r,r.pendingProps,l),r.child;case 8:return Dn(n,r,r.pendingProps.children,l),r.child;case 12:return Dn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,v=r.memoizedProps,b=p.value,Wt(xl,u._currentValue),u._currentValue=b,v!==null)if(xi(v.value,b)){if(v.children===p.children&&!Hn.current){r=ur(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var I=v.dependencies;if(I!==null){b=v.child;for(var B=I.firstContext;B!==null;){if(B.context===u){if(v.tag===1){B=cr(-1,l&-l),B.tag=2;var se=v.updateQueue;if(se!==null){se=se.shared;var xe=se.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),se.pending=B}}v.lanes|=l,B=v.alternate,B!==null&&(B.lanes|=l),Iu(v.return,l,r),I.lanes|=l;break}B=B.next}}else if(v.tag===10)b=v.type===r.type?null:v.child;else if(v.tag===18){if(b=v.return,b===null)throw Error(t(341));b.lanes|=l,I=b.alternate,I!==null&&(I.lanes|=l),Iu(b,l,r),b=v.sibling}else b=v.child;if(b!==null)b.return=v;else for(b=v;b!==null;){if(b===r){b=null;break}if(v=b.sibling,v!==null){v.return=b.return,b=v;break}b=b.return}v=b}Dn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,qs(r,l),p=li(p),u=u(p),r.flags|=1,Dn(n,r,u,l),r.child;case 14:return u=r.type,p=Si(u,r.pendingProps),p=Si(u.type,p),Em(n,r,u,p,l);case 15:return Tm(n,r,r.type,r.pendingProps,l);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Si(u,p),Ll(n,r),r.tag=1,Gn(u)?(n=!0,hl(r)):n=!1,qs(r,l),mm(r,u,p),qu(r,u,p,l),Qu(null,r,u,!0,n,l);case 19:return Nm(n,r,l);case 22:return bm(n,r,l)}throw Error(t(156,r.tag))};function ng(n,r){return qa(n,r)}function fx(n,r,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,r,l,u){return new fx(n,r,l,u)}function xd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hx(n){if(typeof n=="function")return xd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===G)return 14}return 2}function Gr(n,r){var l=n.alternate;return l===null?(l=di(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Hl(n,r,l,u,p,v){var b=2;if(u=n,typeof n=="function")xd(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case O:return _s(l.children,p,v,r);case w:b=8,p|=8;break;case D:return n=di(12,l,r,p|2),n.elementType=D,n.lanes=v,n;case ce:return n=di(13,l,r,p),n.elementType=ce,n.lanes=v,n;case de:return n=di(19,l,r,p),n.elementType=de,n.lanes=v,n;case Y:return Gl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case X:b=10;break e;case F:b=9;break e;case $:b=11;break e;case G:b=14;break e;case ie:b=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=di(b,l,r,p),r.elementType=n,r.type=u,r.lanes=v,r}function _s(n,r,l,u){return n=di(7,n,u,r),n.lanes=l,n}function Gl(n,r,l,u){return n=di(22,n,u,r),n.elementType=Y,n.lanes=l,n.stateNode={isHidden:!1},n}function yd(n,r,l){return n=di(6,n,null,r),n.lanes=l,n}function Sd(n,r,l){return r=di(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function px(n,r,l,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Md(n,r,l,u,p,v,b,I,B){return n=new px(n,r,l,I,B),r===1?(r=1,v===!0&&(r|=8)):r=0,v=di(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(v),n}function mx(n,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:r,implementation:l}}function ig(n){if(!n)return Dr;n=n._reactInternals;e:{if(Di(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Gn(l))return Lp(n,l,r)}return r}function rg(n,r,l,u,p,v,b,I,B){return n=Md(l,u,!0,n,p,v,b,I,B),n.context=ig(null),l=n.current,u=Un(),p=Vr(l),v=cr(u,p),v.callback=r??null,Or(l,v,p),n.current.lanes=p,_t(n,p,u),Xn(n,u),n}function jl(n,r,l,u){var p=r.current,v=Un(),b=Vr(p);return l=ig(l),r.context===null?r.context=l:r.pendingContext=l,r=cr(v,b),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Or(p,r,b),n!==null&&(Ti(n,p,b,v),Sl(n,p,b)),b}function Wl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function sg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Ed(n,r){sg(n,r),(n=n.alternate)&&sg(n,r)}function gx(){return null}var og=typeof reportError=="function"?reportError:function(n){console.error(n)};function Td(n){this._internalRoot=n}Xl.prototype.render=Td.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));jl(n,r,null,null)},Xl.prototype.unmount=Td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ps(function(){jl(null,n,null,null)}),r[rr]=null}};function Xl(n){this._internalRoot=n}Xl.prototype.unstable_scheduleHydration=function(n){if(n){var r=It();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Cr.length&&r!==0&&r<Cr[l].priority;l++);Cr.splice(l,0,n),l===0&&Xh(n)}};function bd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ag(){}function _x(n,r,l,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var se=Wl(b);v.call(se)}}var b=rg(r,u,n,0,null,!1,!1,"",ag);return n._reactRootContainer=b,n[rr]=b.current,ra(n.nodeType===8?n.parentNode:n),ps(),b}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var I=u;u=function(){var se=Wl(B);I.call(se)}}var B=Md(n,0,!1,null,null,!1,!1,"",ag);return n._reactRootContainer=B,n[rr]=B.current,ra(n.nodeType===8?n.parentNode:n),ps(function(){jl(r,B,l,u)}),B}function Kl(n,r,l,u,p){var v=l._reactRootContainer;if(v){var b=v;if(typeof p=="function"){var I=p;p=function(){var B=Wl(b);I.call(B)}}jl(r,b,n,p)}else b=_x(l,r,n,p,u);return Wl(b)}Pt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Tt(r.pendingLanes);l!==0&&(Vn(r,l|1),Xn(r,Qt()),(bt&6)===0&&(eo=Qt()+500,Ur()))}break;case 13:ps(function(){var u=lr(n,1);if(u!==null){var p=Un();Ti(u,n,1,p)}}),Ed(n,1)}},Yt=function(n){if(n.tag===13){var r=lr(n,134217728);if(r!==null){var l=Un();Ti(r,n,134217728,l)}Ed(n,134217728)}},_i=function(n){if(n.tag===13){var r=Vr(n),l=lr(n,r);if(l!==null){var u=Un();Ti(l,n,r,u)}Ed(n,r)}},It=function(){return yt},vi=function(n,r){var l=yt;try{return yt=n,r()}finally{yt=l}},st=function(n,r,l){switch(r){case"input":if(Jt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==n&&u.form===n.form){var p=dl(u);if(!p)throw Error(t(90));Vt(u),Jt(u,p)}}}break;case"textarea":Le(n,l);break;case"select":r=l.value,r!=null&&Gt(n,!!l.multiple,r,!1)}},Re=gd,_e=ps;var vx={usingClientEntryPoint:!1,Events:[aa,Vs,dl,fe,Oe,gd]},Sa={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xx={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ho(n),n===null?null:n.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||gx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Q=ql.inject(xx),Ce=ql}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vx,Yn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bd(r))throw Error(t(200));return mx(n,r,null,l)},Yn.createRoot=function(n,r){if(!bd(n))throw Error(t(299));var l=!1,u="",p=og;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Md(n,1,!1,null,null,l,!1,u,p),n[rr]=r.current,ra(n.nodeType===8?n.parentNode:n),new Td(r)},Yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ho(r),n=n===null?null:n.stateNode,n},Yn.flushSync=function(n){return ps(n)},Yn.hydrate=function(n,r,l){if(!Yl(r))throw Error(t(200));return Kl(null,n,r,!0,l)},Yn.hydrateRoot=function(n,r,l){if(!bd(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,v="",b=og;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),r=rg(r,null,n,1,l??null,p,!1,v,b),n[rr]=r.current,ra(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Xl(r)},Yn.render=function(n,r,l){if(!Yl(r))throw Error(t(200));return Kl(null,n,r,!1,l)},Yn.unmountComponentAtNode=function(n){if(!Yl(n))throw Error(t(40));return n._reactRootContainer?(ps(function(){Kl(null,null,n,!1,function(){n._reactRootContainer=null,n[rr]=null})}),!0):!1},Yn.unstable_batchedUpdates=gd,Yn.unstable_renderSubtreeIntoContainer=function(n,r,l,u){if(!Yl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Kl(n,r,l,!1,u)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var mg;function Ax(){if(mg)return Rd.exports;mg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Rd.exports=wx(),Rd.exports}var gg;function Rx(){if(gg)return $l;gg=1;var s=Ax();return $l.createRoot=s.createRoot,$l.hydrateRoot=s.hydrateRoot,$l}var Cx=Rx();const Px="/3d_object_portfolio/assets/0-CbPwqGm-.jpeg",Lx="/3d_object_portfolio/assets/1-DQe05RN3.jpeg",Nx="/3d_object_portfolio/assets/2-Cy3_IAx3.jpeg",Ix="/3d_object_portfolio/assets/3-BZjnsJxj.jpeg",Dx="/3d_object_portfolio/assets/4-XO2kqqSS.jpeg",Ux="/3d_object_portfolio/assets/5-CBhXUS3I.jpeg",Fx="/3d_object_portfolio/assets/6-DObVdgpB.jpeg",Ox="/3d_object_portfolio/assets/1-DBaDak2f.jpeg",kx="/3d_object_portfolio/assets/10-CLrws8Nu.jpeg",Bx="/3d_object_portfolio/assets/11-WlOYnl51.jpeg",zx="/3d_object_portfolio/assets/12-CCbe2zYJ.jpeg",Vx="/3d_object_portfolio/assets/2-1yclsVX2.jpeg",Hx="/3d_object_portfolio/assets/3-DnMy3qRZ.jpeg",Gx="/3d_object_portfolio/assets/4-BqDMHGSf.jpeg",jx="/3d_object_portfolio/assets/5-BcptQM-J.jpeg",Wx="/3d_object_portfolio/assets/6-MwOnajuA.jpeg",Xx="/3d_object_portfolio/assets/7-CrFkaiAx.jpeg",Yx="/3d_object_portfolio/assets/8-BqB0eomt.jpeg",Kx="/3d_object_portfolio/assets/9-B5-ybuZf.jpeg",qx="/3d_object_portfolio/assets/1-CquR4fhL.png",$x="/3d_object_portfolio/assets/10-dbiKH-Eg.png",Zx="/3d_object_portfolio/assets/11-BJ8PWPYt.png",Jx="/3d_object_portfolio/assets/12-yvqujOrg.png",Qx="/3d_object_portfolio/assets/13-CHDOGUWQ.png",ey="/3d_object_portfolio/assets/14-CdJ74DdD.png",ty="/3d_object_portfolio/assets/15-owv9-hFG.png",ny="/3d_object_portfolio/assets/16-vMDl7zih.png",iy="/3d_object_portfolio/assets/17-Bvxr610T.png",ry="/3d_object_portfolio/assets/18-BEY7y5Ft.png",sy="/3d_object_portfolio/assets/19-BPbdgqHH.png",oy="/3d_object_portfolio/assets/2-CY5X4u6N.png",ay="/3d_object_portfolio/assets/20-DyTNmCRG.png",ly="/3d_object_portfolio/assets/21-BHbhSkyF.png",cy="/3d_object_portfolio/assets/22-N2jlcB22.png",uy="/3d_object_portfolio/assets/23-Bifn3wpW.png",dy="/3d_object_portfolio/assets/24-DEu3n8Gw.png",fy="/3d_object_portfolio/assets/25-r7-DVSSH.png",hy="/3d_object_portfolio/assets/26-BnaJxBvY.png",py="/3d_object_portfolio/assets/27-BmFYQJ-o.png",my="/3d_object_portfolio/assets/28-HrCIQx2U.png",gy="/3d_object_portfolio/assets/29-CsgwLE5i.png",_y="/3d_object_portfolio/assets/3-zI8Fbyn6.png",vy="/3d_object_portfolio/assets/4-Dl359sJ2.png",xy="/3d_object_portfolio/assets/5-owWo4FwQ.png",yy="/3d_object_portfolio/assets/6-2NSi5HSR.png",Sy="/3d_object_portfolio/assets/7-DpW14j05.png",My="/3d_object_portfolio/assets/8-D_2XOpJZ.png",Ey="/3d_object_portfolio/assets/9-DBZcPZ6k.png",Ty="/3d_object_portfolio/assets/1-n1_Hj8Ls.jpeg",by="/3d_object_portfolio/assets/2-D2kIlOjc.jpeg",wy="/3d_object_portfolio/assets/B-B6GWqj-T.jpeg",Ay="/3d_object_portfolio/assets/H-BqKrrXL1.jpeg",Ry="/3d_object_portfolio/assets/J-Dcb3O7Ia.jpeg";var Ct=gh();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Py=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),_g=s=>{const e=Py(s);return e.charAt(0).toUpperCase()+e.slice(1)},X_=(...s)=>s.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ly={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=Ct.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:c,...d},f)=>Ct.createElement("svg",{ref:f,...Ly,width:e,height:e,stroke:s,strokeWidth:i?Number(t)*24/Number(e):t,className:X_("lucide",o),...d},[...c.map(([h,g])=>Ct.createElement(h,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=(s,e)=>{const t=Ct.forwardRef(({className:i,...o},a)=>Ct.createElement(Ny,{ref:a,iconNode:e,className:X_(`lucide-${Cy(_g(s))}`,`lucide-${s}`,i),...o}));return t.displayName=_g(s),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Dy=br("arrow-up-right",Iy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Y_=br("box",Uy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Oy=br("chevron-left",Fy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],K_=br("chevron-right",ky);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],vf=br("external-link",By);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Vy=br("instagram",zy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Gy=br("linkedin",Hy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Wy=br("menu",jy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xf=br("x",Xy);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="184",yo={ROTATE:0,DOLLY:1,PAN:2},xo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yy=0,vg=1,Ky=2,wc=1,qy=2,Da=3,Mr=0,qn=1,ji=2,yr=0,So=1,xg=2,yg=3,Sg=4,$y=5,Ts=100,Zy=101,Jy=102,Qy=103,eS=104,tS=200,nS=201,iS=202,rS=203,yf=204,Sf=205,sS=206,oS=207,aS=208,lS=209,cS=210,uS=211,dS=212,fS=213,hS=214,Mf=0,Ef=1,Tf=2,To=3,bf=4,wf=5,Af=6,Rf=7,q_=0,pS=1,mS=2,Yi=0,$_=1,Z_=2,J_=3,vh=4,Q_=5,e0=6,t0=7,Mg="attached",gS="detached",n0=300,Cs=301,bo=302,Ld=303,Nd=304,Hc=306,wo=1e3,Wi=1001,Dc=1002,hn=1003,i0=1004,Ua=1005,pn=1006,Ac=1007,vr=1008,ni=1009,r0=1010,s0=1011,za=1012,xh=1013,$i=1014,pi=1015,Er=1016,yh=1017,Sh=1018,Va=1020,o0=35902,a0=35899,l0=1021,c0=1022,mi=1023,Tr=1026,ws=1027,Mh=1028,Eh=1029,Ps=1030,Th=1031,bh=1033,Rc=33776,Cc=33777,Pc=33778,Lc=33779,Cf=35840,Pf=35841,Lf=35842,Nf=35843,If=36196,Df=37492,Uf=37496,Ff=37488,Of=37489,Uc=37490,kf=37491,Bf=37808,zf=37809,Vf=37810,Hf=37811,Gf=37812,jf=37813,Wf=37814,Xf=37815,Yf=37816,Kf=37817,qf=37818,$f=37819,Zf=37820,Jf=37821,Qf=36492,eh=36494,th=36495,nh=36283,ih=36284,Fc=36285,rh=36286,Ha=2300,Ga=2301,Id=2302,Eg=2303,Tg=2400,bg=2401,wg=2402,_S=2500,vS=0,u0=1,sh=2,xS=3200,oh=0,yS=1,Qr="",wn="srgb",ii="srgb-linear",Oc="linear",Dt="srgb",no=7680,Ag=519,SS=512,MS=513,ES=514,wh=515,TS=516,bS=517,Ah=518,wS=519,ah=35044,Rg="300 es",Xi=2e3,ja=2001;function AS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function RS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Wa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function CS(){const s=Wa("canvas");return s.style.display="block",s}const Cg={};function kc(...s){const e="THREE."+s.shift();console.log(e,...s)}function d0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function $e(...s){s=d0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function nt(...s){s=d0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function lh(...s){const e=s.join(" ");e in Cg||(Cg[e]=!0,$e(...s))}function PS(s,e,t){return new Promise(function(i,o){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const LS={[Mf]:Ef,[Tf]:Af,[bf]:Rf,[To]:wf,[Ef]:Mf,[Af]:Tf,[Rf]:bf,[wf]:To};class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pg=1234567;const Oa=Math.PI/180,Ao=180/Math.PI;function Pi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function Rh(s,e){return(s%e+e)%e}function NS(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function IS(s,e,t){return s!==e?(t-s)/(e-s):0}function ka(s,e,t){return(1-t)*s+t*e}function DS(s,e,t,i){return ka(s,e,1-Math.exp(-t*i))}function US(s,e=1){return e-Math.abs(Rh(s,e*2)-e)}function FS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function OS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function kS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function BS(s,e){return s+Math.random()*(e-s)}function zS(s){return s*(.5-Math.random())}function VS(s){s!==void 0&&(Pg=s);let e=Pg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HS(s){return s*Oa}function GS(s){return s*Ao}function jS(s){return(s&s-1)===0&&s!==0}function WS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function XS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function YS(s,e,t,i,o){const a=Math.cos,c=Math.sin,d=a(t/2),f=c(t/2),h=a((e+i)/2),g=c((e+i)/2),_=a((e-i)/2),m=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(o){case"XYX":s.set(d*g,f*_,f*m,d*h);break;case"YZY":s.set(f*m,d*g,f*_,d*h);break;case"ZXZ":s.set(f*_,f*m,d*g,d*h);break;case"XZX":s.set(d*g,f*M,f*x,d*h);break;case"YXY":s.set(f*x,d*g,f*M,d*h);break;case"ZYZ":s.set(f*M,f*x,d*g,d*h);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const f0={DEG2RAD:Oa,RAD2DEG:Ao,generateUUID:Pi,clamp:vt,euclideanModulo:Rh,mapLinear:NS,inverseLerp:IS,lerp:ka,damp:DS,pingpong:US,smoothstep:FS,smootherstep:OS,randInt:kS,randFloat:BS,randFloatSpread:zS,seededRandom:VS,degToRad:HS,radToDeg:GS,isPowerOfTwo:jS,ceilPowerOfTwo:WS,floorPowerOfTwo:XS,setQuaternionFromProperEuler:YS,normalize:Ut,denormalize:Ri},zh=class zh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zh.prototype.isVector2=!0;let at=zh;class Ni{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,d){let f=i[o+0],h=i[o+1],g=i[o+2],_=i[o+3],m=a[c+0],x=a[c+1],M=a[c+2],T=a[c+3];if(_!==T||f!==m||h!==x||g!==M){let y=f*m+h*x+g*M+_*T;y<0&&(m=-m,x=-x,M=-M,T=-T,y=-y);let S=1-d;if(y<.9995){const R=Math.acos(y),L=Math.sin(R);S=Math.sin(S*R)/L,d=Math.sin(d*R)/L,f=f*S+m*d,h=h*S+x*d,g=g*S+M*d,_=_*S+T*d}else{f=f*S+m*d,h=h*S+x*d,g=g*S+M*d,_=_*S+T*d;const R=1/Math.sqrt(f*f+h*h+g*g+_*_);f*=R,h*=R,g*=R,_*=R}}e[t]=f,e[t+1]=h,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,c){const d=i[o],f=i[o+1],h=i[o+2],g=i[o+3],_=a[c],m=a[c+1],x=a[c+2],M=a[c+3];return e[t]=d*M+g*_+f*x-h*m,e[t+1]=f*M+g*m+h*_-d*x,e[t+2]=h*M+g*x+d*m-f*_,e[t+3]=g*M-d*_-f*m-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,d=Math.cos,f=Math.sin,h=d(i/2),g=d(o/2),_=d(a/2),m=f(i/2),x=f(o/2),M=f(a/2);switch(c){case"XYZ":this._x=m*g*_+h*x*M,this._y=h*x*_-m*g*M,this._z=h*g*M+m*x*_,this._w=h*g*_-m*x*M;break;case"YXZ":this._x=m*g*_+h*x*M,this._y=h*x*_-m*g*M,this._z=h*g*M-m*x*_,this._w=h*g*_+m*x*M;break;case"ZXY":this._x=m*g*_-h*x*M,this._y=h*x*_+m*g*M,this._z=h*g*M+m*x*_,this._w=h*g*_-m*x*M;break;case"ZYX":this._x=m*g*_-h*x*M,this._y=h*x*_+m*g*M,this._z=h*g*M-m*x*_,this._w=h*g*_+m*x*M;break;case"YZX":this._x=m*g*_+h*x*M,this._y=h*x*_+m*g*M,this._z=h*g*M-m*x*_,this._w=h*g*_-m*x*M;break;case"XZY":this._x=m*g*_-h*x*M,this._y=h*x*_-m*g*M,this._z=h*g*M+m*x*_,this._w=h*g*_+m*x*M;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],d=t[5],f=t[9],h=t[2],g=t[6],_=t[10],m=i+d+_;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(g-f)*x,this._y=(a-h)*x,this._z=(c-o)*x}else if(i>d&&i>_){const x=2*Math.sqrt(1+i-d-_);this._w=(g-f)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(a+h)/x}else if(d>_){const x=2*Math.sqrt(1+d-i-_);this._w=(a-h)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(f+g)/x}else{const x=2*Math.sqrt(1+_-i-d);this._w=(c-o)/x,this._x=(a+h)/x,this._y=(f+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,d=t._x,f=t._y,h=t._z,g=t._w;return this._x=i*g+c*d+o*h-a*f,this._y=o*g+c*f+a*d-i*h,this._z=a*g+c*h+i*f-o*d,this._w=c*g-i*d-o*f-a*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,a=e._z,c=e._w,d=this.dot(e);d<0&&(i=-i,o=-o,a=-a,c=-c,d=-d);let f=1-t;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);f=Math.sin(f*h)/g,t=Math.sin(t*h)/g,this._x=this._x*f+i*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vh=class Vh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,d=e.z,f=e.w,h=2*(c*o-d*i),g=2*(d*t-a*o),_=2*(a*i-c*t);return this.x=t+f*h+c*_-d*g,this.y=i+f*g+d*h-a*_,this.z=o+f*_+a*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,d=t.y,f=t.z;return this.x=o*f-a*d,this.y=a*c-i*f,this.z=i*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dd.copy(this).projectOnVector(e),this.sub(Dd)}reflect(e){return this.sub(Dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vh.prototype.isVector3=!0;let W=Vh;const Dd=new W,Lg=new Ni,Hh=class Hh{constructor(e,t,i,o,a,c,d,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,d,f,h)}set(e,t,i,o,a,c,d,f,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=a,g[5]=f,g[6]=i,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],d=i[3],f=i[6],h=i[1],g=i[4],_=i[7],m=i[2],x=i[5],M=i[8],T=o[0],y=o[3],S=o[6],R=o[1],L=o[4],P=o[7],k=o[2],N=o[5],O=o[8];return a[0]=c*T+d*R+f*k,a[3]=c*y+d*L+f*N,a[6]=c*S+d*P+f*O,a[1]=h*T+g*R+_*k,a[4]=h*y+g*L+_*N,a[7]=h*S+g*P+_*O,a[2]=m*T+x*R+M*k,a[5]=m*y+x*L+M*N,a[8]=m*S+x*P+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],d=e[5],f=e[6],h=e[7],g=e[8];return t*c*g-t*d*h-i*a*g+i*d*f+o*a*h-o*c*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],d=e[5],f=e[6],h=e[7],g=e[8],_=g*c-d*h,m=d*f-g*a,x=h*a-c*f,M=t*_+i*m+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(o*h-g*i)*T,e[2]=(d*i-o*c)*T,e[3]=m*T,e[4]=(g*t-o*f)*T,e[5]=(o*a-d*t)*T,e[6]=x*T,e[7]=(i*f-h*t)*T,e[8]=(c*t-i*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,d){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*c+h*d)+c+e,-o*h,o*f,-o*(-h*c+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Ud.makeScale(e,t)),this}rotate(e){return this.premultiply(Ud.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ud.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hh.prototype.isMatrix3=!0;let ut=Hh;const Ud=new ut,Ng=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ig=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KS(){const s={enabled:!0,workingColorSpace:ii,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Dt&&(o.r=Sr(o.r),o.g=Sr(o.g),o.b=Sr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(o.r=Mo(o.r),o.g=Mo(o.g),o.b=Mo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?Oc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return lh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return lh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ii]:{primaries:e,whitePoint:i,transfer:Oc,toXYZ:Ng,fromXYZ:Ig,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:Ng,fromXYZ:Ig,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),s}const Et=KS();function Sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let io;class qS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{io===void 0&&(io=Wa("canvas")),io.width=e.width,io.height=e.height;const o=io.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=io}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Sr(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sr(t[i]/255)*255):t[i]=Sr(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $S=0;class Ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?a.push(Fd(o[c].image)):a.push(Fd(o[c]))}else a=Fd(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Fd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let ZS=0;const Od=new W;class Sn extends ns{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,i=Wi,o=Wi,a=pn,c=vr,d=mi,f=ni,h=Sn.DEFAULT_ANISOTROPY,g=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Pi(),this.name="",this.source=new Ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Od).x}get height(){return this.source.getSize(Od).y}get depth(){return this.source.getSize(Od).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==n0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wo:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wo:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=n0;Sn.DEFAULT_ANISOTROPY=1;const Gh=class Gh{constructor(e=0,t=0,i=0,o=1){this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,h=f[0],g=f[4],_=f[8],m=f[1],x=f[5],M=f[9],T=f[2],y=f[6],S=f[10];if(Math.abs(g-m)<.01&&Math.abs(_-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(_+T)<.1&&Math.abs(M+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,P=(x+1)/2,k=(S+1)/2,N=(g+m)/4,O=(_+T)/4,w=(M+y)/4;return L>P&&L>k?L<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(L),o=N/i,a=O/i):P>k?P<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(P),i=N/o,a=w/o):k<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(k),i=O/a,o=w/a),this.set(i,o,a,t),this}let R=Math.sqrt((y-M)*(y-M)+(_-T)*(_-T)+(m-g)*(m-g));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(_-T)/R,this.z=(m-g)/R,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gh.prototype.isVector4=!0;let zt=Gh;class JS extends ns{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},a=new Sn(o),c=i.count;for(let d=0;d<c;d++)this.textures[d]=a.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Ch(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends JS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class h0 extends Sn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends Sn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vc=class Vc{constructor(e,t,i,o,a,c,d,f,h,g,_,m,x,M,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,d,f,h,g,_,m,x,M,T,y)}set(e,t,i,o,a,c,d,f,h,g,_,m,x,M,T,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=o,S[1]=a,S[5]=c,S[9]=d,S[13]=f,S[2]=h,S[6]=g,S[10]=_,S[14]=m,S[3]=x,S[7]=M,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,o=1/ro.setFromMatrixColumn(e,0).length(),a=1/ro.setFromMatrixColumn(e,1).length(),c=1/ro.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),d=Math.sin(i),f=Math.cos(o),h=Math.sin(o),g=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const m=c*g,x=c*_,M=d*g,T=d*_;t[0]=f*g,t[4]=-f*_,t[8]=h,t[1]=x+M*h,t[5]=m-T*h,t[9]=-d*f,t[2]=T-m*h,t[6]=M+x*h,t[10]=c*f}else if(e.order==="YXZ"){const m=f*g,x=f*_,M=h*g,T=h*_;t[0]=m+T*d,t[4]=M*d-x,t[8]=c*h,t[1]=c*_,t[5]=c*g,t[9]=-d,t[2]=x*d-M,t[6]=T+m*d,t[10]=c*f}else if(e.order==="ZXY"){const m=f*g,x=f*_,M=h*g,T=h*_;t[0]=m-T*d,t[4]=-c*_,t[8]=M+x*d,t[1]=x+M*d,t[5]=c*g,t[9]=T-m*d,t[2]=-c*h,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const m=c*g,x=c*_,M=d*g,T=d*_;t[0]=f*g,t[4]=M*h-x,t[8]=m*h+T,t[1]=f*_,t[5]=T*h+m,t[9]=x*h-M,t[2]=-h,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const m=c*f,x=c*h,M=d*f,T=d*h;t[0]=f*g,t[4]=T-m*_,t[8]=M*_+x,t[1]=_,t[5]=c*g,t[9]=-d*g,t[2]=-h*g,t[6]=x*_+M,t[10]=m-T*_}else if(e.order==="XZY"){const m=c*f,x=c*h,M=d*f,T=d*h;t[0]=f*g,t[4]=-_,t[8]=h*g,t[1]=m*_+T,t[5]=c*g,t[9]=x*_-M,t[2]=M*_-x,t[6]=d*g,t[10]=T*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eM,e,tM)}lookAt(e,t,i){const o=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Wr.crossVectors(i,ei),Wr.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Wr.crossVectors(i,ei)),Wr.normalize(),Zl.crossVectors(ei,Wr),o[0]=Wr.x,o[4]=Zl.x,o[8]=ei.x,o[1]=Wr.y,o[5]=Zl.y,o[9]=ei.y,o[2]=Wr.z,o[6]=Zl.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],d=i[4],f=i[8],h=i[12],g=i[1],_=i[5],m=i[9],x=i[13],M=i[2],T=i[6],y=i[10],S=i[14],R=i[3],L=i[7],P=i[11],k=i[15],N=o[0],O=o[4],w=o[8],D=o[12],X=o[1],F=o[5],$=o[9],ce=o[13],de=o[2],G=o[6],ie=o[10],Y=o[14],K=o[3],le=o[7],ae=o[11],U=o[15];return a[0]=c*N+d*X+f*de+h*K,a[4]=c*O+d*F+f*G+h*le,a[8]=c*w+d*$+f*ie+h*ae,a[12]=c*D+d*ce+f*Y+h*U,a[1]=g*N+_*X+m*de+x*K,a[5]=g*O+_*F+m*G+x*le,a[9]=g*w+_*$+m*ie+x*ae,a[13]=g*D+_*ce+m*Y+x*U,a[2]=M*N+T*X+y*de+S*K,a[6]=M*O+T*F+y*G+S*le,a[10]=M*w+T*$+y*ie+S*ae,a[14]=M*D+T*ce+y*Y+S*U,a[3]=R*N+L*X+P*de+k*K,a[7]=R*O+L*F+P*G+k*le,a[11]=R*w+L*$+P*ie+k*ae,a[15]=R*D+L*ce+P*Y+k*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],d=e[5],f=e[9],h=e[13],g=e[2],_=e[6],m=e[10],x=e[14],M=e[3],T=e[7],y=e[11],S=e[15],R=f*x-h*m,L=d*x-h*_,P=d*m-f*_,k=c*x-h*g,N=c*m-f*g,O=c*_-d*g;return t*(T*R-y*L+S*P)-i*(M*R-y*k+S*N)+o*(M*L-T*k+S*O)-a*(M*P-T*N+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],d=e[5],f=e[6],h=e[7],g=e[8],_=e[9],m=e[10],x=e[11],M=e[12],T=e[13],y=e[14],S=e[15],R=t*d-i*c,L=t*f-o*c,P=t*h-a*c,k=i*f-o*d,N=i*h-a*d,O=o*h-a*f,w=g*T-_*M,D=g*y-m*M,X=g*S-x*M,F=_*y-m*T,$=_*S-x*T,ce=m*S-x*y,de=R*ce-L*$+P*F+k*X-N*D+O*w;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/de;return e[0]=(d*ce-f*$+h*F)*G,e[1]=(o*$-i*ce-a*F)*G,e[2]=(T*O-y*N+S*k)*G,e[3]=(m*N-_*O-x*k)*G,e[4]=(f*X-c*ce-h*D)*G,e[5]=(t*ce-o*X+a*D)*G,e[6]=(y*P-M*O-S*L)*G,e[7]=(g*O-m*P+x*L)*G,e[8]=(c*$-d*X+h*w)*G,e[9]=(i*X-t*$-a*w)*G,e[10]=(M*N-T*P+S*R)*G,e[11]=(_*P-g*N-x*R)*G,e[12]=(d*D-c*F-f*w)*G,e[13]=(t*F-i*D+o*w)*G,e[14]=(T*L-M*k-y*R)*G,e[15]=(g*k-_*L+m*R)*G,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,d=e.y,f=e.z,h=a*c,g=a*d;return this.set(h*c+i,h*d-o*f,h*f+o*d,0,h*d+o*f,g*d+i,g*f-o*c,0,h*f-o*d,g*f+o*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,d=t._z,f=t._w,h=a+a,g=c+c,_=d+d,m=a*h,x=a*g,M=a*_,T=c*g,y=c*_,S=d*_,R=f*h,L=f*g,P=f*_,k=i.x,N=i.y,O=i.z;return o[0]=(1-(T+S))*k,o[1]=(x+P)*k,o[2]=(M-L)*k,o[3]=0,o[4]=(x-P)*N,o[5]=(1-(m+S))*N,o[6]=(y+R)*N,o[7]=0,o[8]=(M+L)*O,o[9]=(y-R)*O,o[10]=(1-(m+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let c=ro.set(o[0],o[1],o[2]).length();const d=ro.set(o[4],o[5],o[6]).length(),f=ro.set(o[8],o[9],o[10]).length();a<0&&(c=-c),bi.copy(this);const h=1/c,g=1/d,_=1/f;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=_,bi.elements[9]*=_,bi.elements[10]*=_,t.setFromRotationMatrix(bi),i.x=c,i.y=d,i.z=f,this}makePerspective(e,t,i,o,a,c,d=Xi,f=!1){const h=this.elements,g=2*a/(t-e),_=2*a/(i-o),m=(t+e)/(t-e),x=(i+o)/(i-o);let M,T;if(f)M=a/(c-a),T=c*a/(c-a);else if(d===Xi)M=-(c+a)/(c-a),T=-2*c*a/(c-a);else if(d===ja)M=-c/(c-a),T=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,o,a,c,d=Xi,f=!1){const h=this.elements,g=2/(t-e),_=2/(i-o),m=-(t+e)/(t-e),x=-(i+o)/(i-o);let M,T;if(f)M=1/(c-a),T=c/(c-a);else if(d===Xi)M=-2/(c-a),T=-(c+a)/(c-a);else if(d===ja)M=-1/(c-a),T=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=_,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Vc.prototype.isMatrix4=!0;let xt=Vc;const ro=new W,bi=new xt,eM=new W(0,0,0),tM=new W(1,1,1),Wr=new W,Zl=new W,ei=new W,Dg=new xt,Ug=new Ni;class ts{constructor(e=0,t=0,i=0,o=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],d=o[8],f=o[1],h=o[5],g=o[9],_=o[2],m=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(d,a)):(this._x=Math.atan2(-g,x),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ug.setFromEuler(this),this.setFromQuaternion(Ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class p0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nM=0;const Fg=new W,so=new Ni,fr=new xt,Jl=new W,Ea=new W,iM=new W,rM=new Ni,Og=new W(1,0,0),kg=new W(0,1,0),Bg=new W(0,0,1),zg={type:"added"},sM={type:"removed"},oo={type:"childadded",child:null},kd={type:"childremoved",child:null};class nn extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new W,t=new ts,i=new Ni,o=new W(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xt},normalMatrix:{value:new ut}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(Og,e)}rotateY(e){return this.rotateOnAxis(kg,e)}rotateZ(e){return this.rotateOnAxis(Bg,e)}translateOnAxis(e,t){return Fg.copy(e).applyQuaternion(this.quaternion),this.position.add(Fg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Og,e)}translateY(e){return this.translateOnAxis(kg,e)}translateZ(e){return this.translateOnAxis(Bg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jl.copy(e):Jl.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(Ea,Jl,this.up):fr.lookAt(Jl,Ea,this.up),this.quaternion.setFromRotationMatrix(fr),o&&(fr.extractRotation(o.matrixWorld),so.setFromRotationMatrix(fr),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zg),oo.child=e,this.dispatchEvent(oo),oo.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sM),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zg),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,iM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,rM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*o,a[13]+=i-a[1]*t-a[5]*i-a[9]*o,a[14]+=o-a[2]*t-a[6]*i-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,g=f.length;h<g;h++){const _=f[h];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(a(e.materials,this.material[f]));o.material=d}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(a(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),h=c(e.textures),g=c(e.images),_=c(e.shapes),m=c(e.skeletons),x=c(e.animations),M=c(e.nodes);d.length>0&&(i.geometries=d),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),g.length>0&&(i.images=g),_.length>0&&(i.shapes=_),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=o,i;function c(d){const f=[];for(const h in d){const g=d[h];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}nn.DEFAULT_UP=new W(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class As extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oM={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,i),S=this._getHandJoint(h,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],m=g.position.distanceTo(_.position),x=.02,M=.005;h.inputState.pinching&&m>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(oM)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new As;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function zd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=Et.workingColorSpace){if(e=Rh(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=zd(c,a,e+1/3),this.g=zd(c,a,e),this.b=zd(c,a,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,t=wn){function i(a){a!==void 0&&parseFloat(a)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const i=m0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Et.workingToColorSpace(Nn.copy(this),e),Math.round(vt(Nn.r*255,0,255))*65536+Math.round(vt(Nn.g*255,0,255))*256+Math.round(vt(Nn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,o=Nn.g,a=Nn.b,c=Math.max(i,o,a),d=Math.min(i,o,a);let f,h;const g=(d+c)/2;if(d===c)f=0,h=0;else{const _=c-d;switch(h=g<=.5?_/(c+d):_/(2-c-d),c){case i:f=(o-a)/_+(o<a?6:0);break;case o:f=(a-i)/_+2;break;case a:f=(i-o)/_+4;break}f/=6}return e.h=f,e.s=h,e.l=g,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=wn){Et.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,i=Nn.g,o=Nn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(Ql);const i=ka(Xr.h,Ql.h,t),o=ka(Xr.s,Ql.s,t),a=ka(Xr.l,Ql.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new dt;dt.NAMES=m0;class aM extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wi=new W,hr=new W,Vd=new W,pr=new W,ao=new W,lo=new W,Vg=new W,Hd=new W,Gd=new W,jd=new W,Wd=new zt,Xd=new zt,Yd=new zt;class Ci{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),wi.subVectors(e,t),o.cross(wi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){wi.subVectors(o,t),hr.subVectors(i,t),Vd.subVectors(e,t);const c=wi.dot(wi),d=wi.dot(hr),f=wi.dot(Vd),h=hr.dot(hr),g=hr.dot(Vd),_=c*h-d*d;if(_===0)return a.set(0,0,0),null;const m=1/_,x=(h*f-d*g)*m,M=(c*g-d*f)*m;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,i,o,a,c,d,f){return this.getBarycoord(e,t,i,o,pr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,pr.x),f.addScaledVector(c,pr.y),f.addScaledVector(d,pr.z),f)}static getInterpolatedAttribute(e,t,i,o,a,c){return Wd.setScalar(0),Xd.setScalar(0),Yd.setScalar(0),Wd.fromBufferAttribute(e,t),Xd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Wd,a.x),c.addScaledVector(Xd,a.y),c.addScaledVector(Yd,a.z),c}static isFrontFacing(e,t,i,o){return wi.subVectors(i,t),hr.subVectors(e,t),wi.cross(hr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),wi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return Ci.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,d;ao.subVectors(o,i),lo.subVectors(a,i),Hd.subVectors(e,i);const f=ao.dot(Hd),h=lo.dot(Hd);if(f<=0&&h<=0)return t.copy(i);Gd.subVectors(e,o);const g=ao.dot(Gd),_=lo.dot(Gd);if(g>=0&&_<=g)return t.copy(o);const m=f*_-g*h;if(m<=0&&f>=0&&g<=0)return c=f/(f-g),t.copy(i).addScaledVector(ao,c);jd.subVectors(e,a);const x=ao.dot(jd),M=lo.dot(jd);if(M>=0&&x<=M)return t.copy(a);const T=x*h-f*M;if(T<=0&&h>=0&&M<=0)return d=h/(h-M),t.copy(i).addScaledVector(lo,d);const y=g*M-x*_;if(y<=0&&_-g>=0&&x-M>=0)return Vg.subVectors(a,o),d=(_-g)/(_-g+(x-M)),t.copy(o).addScaledVector(Vg,d);const S=1/(y+T+m);return c=T*S,d=m*S,t.copy(i).addScaledVector(ao,c).addScaledVector(lo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ji{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=a.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ai):Ai.fromBufferAttribute(a,c),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ec.copy(i.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),tc.subVectors(this.max,Ta),co.subVectors(e.a,Ta),uo.subVectors(e.b,Ta),fo.subVectors(e.c,Ta),Yr.subVectors(uo,co),Kr.subVectors(fo,uo),vs.subVectors(co,fo);let t=[0,-Yr.z,Yr.y,0,-Kr.z,Kr.y,0,-vs.z,vs.y,Yr.z,0,-Yr.x,Kr.z,0,-Kr.x,vs.z,0,-vs.x,-Yr.y,Yr.x,0,-Kr.y,Kr.x,0,-vs.y,vs.x,0];return!Kd(t,co,uo,fo,tc)||(t=[1,0,0,0,1,0,0,0,1],!Kd(t,co,uo,fo,tc))?!1:(nc.crossVectors(Yr,Kr),t=[nc.x,nc.y,nc.z],Kd(t,co,uo,fo,tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new W,new W,new W,new W,new W,new W,new W,new W],Ai=new W,ec=new Ji,co=new W,uo=new W,fo=new W,Yr=new W,Kr=new W,vs=new W,Ta=new W,tc=new W,nc=new W,xs=new W;function Kd(s,e,t,i,o){for(let a=0,c=s.length-3;a<=c;a+=3){xs.fromArray(s,a);const d=o.x*Math.abs(xs.x)+o.y*Math.abs(xs.y)+o.z*Math.abs(xs.z),f=e.dot(xs),h=t.dot(xs),g=i.dot(xs);if(Math.max(-Math.max(f,h,g),Math.min(f,h,g))>d)return!1}return!0}const cn=new W,ic=new at;let lM=0;class Bn extends ns{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ah,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),o=Ut(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),o=Ut(o,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class g0 extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _0 extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Li extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const cM=new Ji,ba=new W,qd=new W;class Qi{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cM.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);const t=ba.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(ba,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(qd)),this.expandByPoint(ba.copy(e.center).sub(qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let uM=0;const fi=new xt,$d=new nn,ho=new W,ti=new Ji,wa=new Ji,yn=new W;class gi extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AS(e)?_0:g0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ut().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,i){return fi.makeTranslation(e,t,i),this.applyMatrix4(fi),this}scale(e,t,i){return fi.makeScale(e,t,i),this.applyMatrix4(fi),this}lookAt(e){return $d.lookAt(e),$d.updateMatrix(),this.applyMatrix4($d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Li(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const d=t[a];wa.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ti.min,wa.min),ti.expandByPoint(yn),yn.addVectors(ti.max,wa.max),ti.expandByPoint(yn)):(ti.expandByPoint(wa.min),ti.expandByPoint(wa.max))}ti.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)yn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(yn));if(t)for(let a=0,c=t.length;a<c;a++){const d=t[a],f=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)yn.fromBufferAttribute(d,h),f&&(ho.fromBufferAttribute(e,h),yn.add(ho)),o=Math.max(o,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),d=[],f=[];for(let w=0;w<i.count;w++)d[w]=new W,f[w]=new W;const h=new W,g=new W,_=new W,m=new at,x=new at,M=new at,T=new W,y=new W;function S(w,D,X){h.fromBufferAttribute(i,w),g.fromBufferAttribute(i,D),_.fromBufferAttribute(i,X),m.fromBufferAttribute(a,w),x.fromBufferAttribute(a,D),M.fromBufferAttribute(a,X),g.sub(h),_.sub(h),x.sub(m),M.sub(m);const F=1/(x.x*M.y-M.x*x.y);isFinite(F)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(F),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(F),d[w].add(T),d[D].add(T),d[X].add(T),f[w].add(y),f[D].add(y),f[X].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,D=R.length;w<D;++w){const X=R[w],F=X.start,$=X.count;for(let ce=F,de=F+$;ce<de;ce+=3)S(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const L=new W,P=new W,k=new W,N=new W;function O(w){k.fromBufferAttribute(o,w),N.copy(k);const D=d[w];L.copy(D),L.sub(k.multiplyScalar(k.dot(D))).normalize(),P.crossVectors(N,D);const F=P.dot(f[w])<0?-1:1;c.setXYZW(w,L.x,L.y,L.z,F)}for(let w=0,D=R.length;w<D;++w){const X=R[w],F=X.start,$=X.count;for(let ce=F,de=F+$;ce<de;ce+=3)O(e.getX(ce+0)),O(e.getX(ce+1)),O(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);const o=new W,a=new W,c=new W,d=new W,f=new W,h=new W,g=new W,_=new W;if(e)for(let m=0,x=e.count;m<x;m+=3){const M=e.getX(m+0),T=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),g.subVectors(c,a),_.subVectors(o,a),g.cross(_),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),d.add(g),f.add(g),h.add(g),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,x=t.count;m<x;m+=3)o.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,a),_.subVectors(o,a),g.cross(_),i.setXYZ(m+0,g.x,g.y,g.z),i.setXYZ(m+1,g.x,g.y,g.z),i.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,f){const h=d.array,g=d.itemSize,_=d.normalized,m=new h.constructor(f.length*g);let x=0,M=0;for(let T=0,y=f.length;T<y;T++){d.isInterleavedBufferAttribute?x=f[T]*d.data.stride+d.offset:x=f[T]*g;for(let S=0;S<g;S++)m[M++]=h[x++]}return new Bn(m,g,_)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,i=this.index.array,o=this.attributes;for(const d in o){const f=o[d],h=e(f,i);t.setAttribute(d,h)}const a=this.morphAttributes;for(const d in a){const f=[],h=a[d];for(let g=0,_=h.length;g<_;g++){const m=h[g],x=e(m,i);f.push(x)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const h=c[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],g=[];for(let _=0,m=h.length;_<m;_++){const x=h[_];g.push(x.toJSON(e.data))}g.length>0&&(o[f]=g,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const a=e.morphAttributes;for(const h in a){const g=[],_=a[h];for(let m=0,x=_.length;m<x;m++)g.push(_[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new W;class Ph{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),o=Ut(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),o=Ut(o,this.array),a=Ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){kc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new Bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ph(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){kc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let fM=0;class qi extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=So,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==Sf&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ag&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(i.stencilFail=this.stencilFail),this.stencilZFail!==no&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const d in a){const f=a[d];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gr=new W,Zd=new W,rc=new W,qr=new W,Jd=new W,sc=new W,Qd=new W;class Xa{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Zd.copy(e).add(t).multiplyScalar(.5),rc.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(Zd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(rc),d=qr.dot(this.direction),f=-qr.dot(rc),h=qr.lengthSq(),g=Math.abs(1-c*c);let _,m,x,M;if(g>0)if(_=c*f-d,m=c*d-f,M=a*g,_>=0)if(m>=-M)if(m<=M){const T=1/g;_*=T,m*=T,x=_*(_+c*m+2*d)+m*(c*_+m+2*f)+h}else m=a,_=Math.max(0,-(c*m+d)),x=-_*_+m*(m+2*f)+h;else m=-a,_=Math.max(0,-(c*m+d)),x=-_*_+m*(m+2*f)+h;else m<=-M?(_=Math.max(0,-(-c*a+d)),m=_>0?-a:Math.min(Math.max(-a,-f),a),x=-_*_+m*(m+2*f)+h):m<=M?(_=0,m=Math.min(Math.max(-a,-f),a),x=m*(m+2*f)+h):(_=Math.max(0,-(c*a+d)),m=_>0?a:Math.min(Math.max(-a,-f),a),x=-_*_+m*(m+2*f)+h);else m=c>0?-a:a,_=Math.max(0,-(c*m+d)),x=-_*_+m*(m+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Zd).addScaledVector(rc,m),x}intersectSphere(e,t){gr.subVectors(e.center,this.origin);const i=gr.dot(this.direction),o=gr.dot(gr)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),d=i-c,f=i+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,d,f;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(a=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(a=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),_>=0?(d=(e.min.z-m.z)*_,f=(e.max.z-m.z)*_):(d=(e.max.z-m.z)*_,f=(e.min.z-m.z)*_),i>f||d>o)||((d>i||i!==i)&&(i=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,i,o,a){Jd.subVectors(t,e),sc.subVectors(i,e),Qd.crossVectors(Jd,sc);let c=this.direction.dot(Qd),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;qr.subVectors(this.origin,e);const f=d*this.direction.dot(sc.crossVectors(qr,sc));if(f<0)return null;const h=d*this.direction.dot(Jd.cross(qr));if(h<0||f+h>c)return null;const g=-d*qr.dot(Qd);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rs extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hg=new xt,ys=new Xa,oc=new Qi,Gg=new W,ac=new W,lc=new W,cc=new W,ef=new W,uc=new W,jg=new W,dc=new W;class ri extends nn{constructor(e=new gi,t=new Rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const d=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(a&&d){uc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const g=d[f],_=a[f];g!==0&&(ef.fromBufferAttribute(_,e),c?uc.addScaledVector(ef,g):uc.addScaledVector(ef.sub(t),g))}t.add(uc)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(a),ys.copy(e.ray).recast(e.near),!(oc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(oc,Gg)===null||ys.origin.distanceToSquared(Gg)>(e.far-e.near)**2))&&(Hg.copy(a).invert(),ys.copy(e.ray).applyMatrix4(Hg),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,d=a.index,f=a.attributes.position,h=a.attributes.uv,g=a.attributes.uv1,_=a.attributes.normal,m=a.groups,x=a.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,T=m.length;M<T;M++){const y=m[M],S=c[y.materialIndex],R=Math.max(y.start,x.start),L=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let P=R,k=L;P<k;P+=3){const N=d.getX(P),O=d.getX(P+1),w=d.getX(P+2);o=fc(this,S,e,i,h,g,_,N,O,w),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let y=M,S=T;y<S;y+=3){const R=d.getX(y),L=d.getX(y+1),P=d.getX(y+2);o=fc(this,c,e,i,h,g,_,R,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,T=m.length;M<T;M++){const y=m[M],S=c[y.materialIndex],R=Math.max(y.start,x.start),L=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let P=R,k=L;P<k;P+=3){const N=P,O=P+1,w=P+2;o=fc(this,S,e,i,h,g,_,N,O,w),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let y=M,S=T;y<S;y+=3){const R=y,L=y+1,P=y+2;o=fc(this,c,e,i,h,g,_,R,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function hM(s,e,t,i,o,a,c,d){let f;if(e.side===qn?f=i.intersectTriangle(c,a,o,!0,d):f=i.intersectTriangle(o,a,c,e.side===Mr,d),f===null)return null;dc.copy(d),dc.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(dc);return h<t.near||h>t.far?null:{distance:h,point:dc.clone(),object:s}}function fc(s,e,t,i,o,a,c,d,f,h){s.getVertexPosition(d,ac),s.getVertexPosition(f,lc),s.getVertexPosition(h,cc);const g=hM(s,e,t,i,ac,lc,cc,jg);if(g){const _=new W;Ci.getBarycoord(jg,ac,lc,cc,_),o&&(g.uv=Ci.getInterpolatedAttribute(o,d,f,h,_,new at)),a&&(g.uv1=Ci.getInterpolatedAttribute(a,d,f,h,_,new at)),c&&(g.normal=Ci.getInterpolatedAttribute(c,d,f,h,_,new W),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const m={a:d,b:f,c:h,normal:new W,materialIndex:0};Ci.getNormal(ac,lc,cc,m.normal),g.face=m,g.barycoord=_}return g}const Aa=new zt,Wg=new zt,Xg=new zt,pM=new zt,Yg=new xt,hc=new W,tf=new Qi,Kg=new xt,nf=new Xa;class mM extends ri{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mg,this.bindMatrix=new xt,this.bindMatrixInverse=new xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ji),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hc),this.boundingBox.expandByPoint(hc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hc),this.boundingSphere.expandByPoint(hc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,o=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tf.copy(this.boundingSphere),tf.applyMatrix4(o),e.ray.intersectsSphere(tf)!==!1&&(Kg.copy(o).invert(),nf.copy(e.ray).applyMatrix4(Kg),!(this.boundingBox!==null&&nf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new zt,t=this.geometry.attributes.skinWeight;for(let i=0,o=t.count;i<o;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gS?this.bindMatrixInverse.copy(this.bindMatrix).invert():$e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,o=this.geometry;Wg.fromBufferAttribute(o.attributes.skinIndex,e),Xg.fromBufferAttribute(o.attributes.skinWeight,e),t.isVector4?(Aa.copy(t),t.set(0,0,0,0)):(Aa.set(...t,1),t.set(0,0,0)),Aa.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){const c=Xg.getComponent(a);if(c!==0){const d=Wg.getComponent(a);Yg.multiplyMatrices(i.bones[d].matrixWorld,i.boneInverses[d]),t.addScaledVector(pM.copy(Aa).applyMatrix4(Yg),c)}}return t.isVector4&&(t.w=Aa.w),t.applyMatrix4(this.bindMatrixInverse)}}class v0 extends nn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Lh extends Sn{constructor(e=null,t=1,i=1,o,a,c,d,f,h=hn,g=hn,_,m){super(null,c,d,f,h,g,o,a,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qg=new xt,gM=new xt;class Nh{constructor(e=[],t=[]){this.uuid=Pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){$e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,o=this.bones.length;i<o;i++)this.boneInverses.push(new xt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new xt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,o=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const d=e[a]?e[a].matrixWorld:gM;qg.multiplyMatrices(d,t[a]),qg.toArray(i,a*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Nh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Lh(t,e,e,mi,pi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const o=this.bones[t];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,o=e.bones.length;i<o;i++){const a=e.bones[i];let c=t[a];c===void 0&&($e("Skeleton: No bone found with UUID:",a),c=new v0),this.bones.push(c),this.boneInverses.push(new xt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let o=0,a=t.length;o<a;o++){const c=t[o];e.bones.push(c.uuid);const d=i[o];e.boneInverses.push(d.toArray())}return e}}class ch extends Bn{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const po=new xt,$g=new xt,pc=[],Zg=new Ji,_M=new xt,Ra=new ri,Ca=new Qi;class vM extends ri{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ch(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,_M)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,po),Zg.copy(e.boundingBox).applyMatrix4(po),this.boundingBox.union(Zg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,po),Ca.copy(e.boundingSphere).applyMatrix4(po),this.boundingSphere.union(Ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let d=0;d<i.length;d++)i[d]=o[c+d]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(Ra.geometry=this.geometry,Ra.material=this.material,Ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(i),e.ray.intersectsSphere(Ca)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,po),$g.multiplyMatrices(i,po),Ra.matrixWorld=$g,Ra.raycast(e,pc);for(let c=0,d=pc.length;c<d;c++){const f=pc[c];f.instanceId=a,f.object=this,t.push(f)}pc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ch(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new Lh(new Float32Array(o*this.count),o,this.count,Mh,pi));const a=this.morphTexture.source.data.data;let c=0;for(let h=0;h<i.length;h++)c+=i[h];const d=this.geometry.morphTargetsRelative?1:1-c,f=o*e;return a[f]=d,a.set(i,f+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rf=new W,xM=new W,yM=new ut;class Jr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=rf.subVectors(i,t).cross(xM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const o=e.delta(rf),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yM.getNormalMatrix(e),o=this.coplanarPoint(rf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Qi,SM=new at(.5,.5),mc=new W;class Ih{constructor(e=new Jr,t=new Jr,i=new Jr,o=new Jr,a=new Jr,c=new Jr){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(o),d[4].copy(a),d[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi,i=!1){const o=this.planes,a=e.elements,c=a[0],d=a[1],f=a[2],h=a[3],g=a[4],_=a[5],m=a[6],x=a[7],M=a[8],T=a[9],y=a[10],S=a[11],R=a[12],L=a[13],P=a[14],k=a[15];if(o[0].setComponents(h-c,x-g,S-M,k-R).normalize(),o[1].setComponents(h+c,x+g,S+M,k+R).normalize(),o[2].setComponents(h+d,x+_,S+T,k+L).normalize(),o[3].setComponents(h-d,x-_,S-T,k-L).normalize(),i)o[4].setComponents(f,m,y,P).normalize(),o[5].setComponents(h-f,x-m,S-y,k-P).normalize();else if(o[4].setComponents(h-f,x-m,S-y,k-P).normalize(),t===Xi)o[5].setComponents(h+f,x+m,S+y,k+P).normalize();else if(t===ja)o[5].setComponents(f,m,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const t=SM.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(mc.x=o.normal.x>0?e.max.x:e.min.x,mc.y=o.normal.y>0?e.max.y:e.min.y,mc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class x0 extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bc=new W,zc=new W,Jg=new xt,Pa=new Xa,gc=new Qi,sf=new W,Qg=new W;class Dh extends nn{constructor(e=new gi,t=new x0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)Bc.fromBufferAttribute(t,o-1),zc.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=Bc.distanceTo(zc);e.setAttribute("lineDistance",new Li(i,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(o),gc.radius+=a,e.ray.intersectsSphere(gc)===!1)return;Jg.copy(o).invert(),Pa.copy(e.ray).applyMatrix4(Jg);const d=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,h=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const x=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let T=x,y=M-1;T<y;T+=h){const S=g.getX(T),R=g.getX(T+1),L=_c(this,e,Pa,f,S,R,T);L&&t.push(L)}if(this.isLineLoop){const T=g.getX(M-1),y=g.getX(x),S=_c(this,e,Pa,f,T,y,M-1);S&&t.push(S)}}else{const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let T=x,y=M-1;T<y;T+=h){const S=_c(this,e,Pa,f,T,T+1,T);S&&t.push(S)}if(this.isLineLoop){const T=_c(this,e,Pa,f,M-1,x,M-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const d=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}}function _c(s,e,t,i,o,a,c){const d=s.geometry.attributes.position;if(Bc.fromBufferAttribute(d,o),zc.fromBufferAttribute(d,a),t.distanceSqToSegment(Bc,zc,sf,Qg)>i)return;sf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(sf);if(!(h<e.near||h>e.far))return{distance:h,point:Qg.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const e_=new W,t_=new W;class MM extends Dh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)e_.fromBufferAttribute(t,o),t_.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+e_.distanceTo(t_);e.setAttribute("lineDistance",new Li(i,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class EM extends Dh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class y0 extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const n_=new xt,uh=new Xa,vc=new Qi,xc=new W;class TM extends nn{constructor(e=new gi,t=new y0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(o),vc.radius+=a,e.ray.intersectsSphere(vc)===!1)return;n_.copy(o).invert(),uh.copy(e.ray).applyMatrix4(n_);const d=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,h=i.index,_=i.attributes.position;if(h!==null){const m=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let M=m,T=x;M<T;M++){const y=h.getX(M);xc.fromBufferAttribute(_,y),i_(xc,y,f,o,e,t,this)}}else{const m=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let M=m,T=x;M<T;M++)xc.fromBufferAttribute(_,M),i_(xc,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const d=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}}function i_(s,e,t,i,o,a,c){const d=uh.distanceSqToPoint(s);if(d<t){const f=new W;uh.closestPointToPoint(s,f),f.applyMatrix4(i);const h=o.ray.origin.distanceTo(f);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(d),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class S0 extends Sn{constructor(e=[],t=Cs,i,o,a,c,d,f,h,g){super(e,t,i,o,a,c,d,f,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ro extends Sn{constructor(e,t,i=$i,o,a,c,d=hn,f=hn,h,g=Tr,_=1){if(g!==Tr&&g!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:_};super(m,o,a,c,d,f,g,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bM extends Ro{constructor(e,t=$i,i=Cs,o,a,c=hn,d=hn,f,h=Tr){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,i,o,a,c,d,f,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class M0 extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ya extends gi{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const d=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],g=[],_=[];let m=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,o,c,2),M("x","z","y",1,-1,e,i,-t,o,c,3),M("x","y","z",1,-1,e,t,i,o,a,4),M("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new Li(h,3)),this.setAttribute("normal",new Li(g,3)),this.setAttribute("uv",new Li(_,2));function M(T,y,S,R,L,P,k,N,O,w,D){const X=P/O,F=k/w,$=P/2,ce=k/2,de=N/2,G=O+1,ie=w+1;let Y=0,K=0;const le=new W;for(let ae=0;ae<ie;ae++){const U=ae*F-ce;for(let ee=0;ee<G;ee++){const Fe=ee*X-$;le[T]=Fe*R,le[y]=U*L,le[S]=de,h.push(le.x,le.y,le.z),le[T]=0,le[y]=0,le[S]=N>0?1:-1,g.push(le.x,le.y,le.z),_.push(ee/O),_.push(1-ae/w),Y+=1}}for(let ae=0;ae<w;ae++)for(let U=0;U<O;U++){const ee=m+U+G*ae,Fe=m+U+G*(ae+1),He=m+(U+1)+G*(ae+1),Ie=m+(U+1)+G*ae;f.push(ee,Fe,Ie),f.push(Fe,He,Ie),K+=6}d.addGroup(x,K,D),x+=K,m+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Gc extends gi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,d=Math.floor(i),f=Math.floor(o),h=d+1,g=f+1,_=e/d,m=t/f,x=[],M=[],T=[],y=[];for(let S=0;S<g;S++){const R=S*m-c;for(let L=0;L<h;L++){const P=L*_-a;M.push(P,-R,0),T.push(0,0,1),y.push(L/d),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let R=0;R<d;R++){const L=R+h*S,P=R+h*(S+1),k=R+1+h*(S+1),N=R+1+h*S;x.push(L,P,N),x.push(P,k,N)}this.setIndex(x),this.setAttribute("position",new Li(M,3)),this.setAttribute("normal",new Li(T,3)),this.setAttribute("uv",new Li(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Co(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];if(r_(o))o.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone();else if(Array.isArray(o))if(r_(o[0])){const a=[];for(let c=0,d=o.length;c<d;c++)a[c]=o[c].clone();e[t][i]=a}else e[t][i]=o.slice();else e[t][i]=o}}return e}function On(s){const e={};for(let t=0;t<s.length;t++){const i=Co(s[t]);for(const o in i)e[o]=i[o]}return e}function r_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function wM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function E0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const AM={clone:Co,merge:On};var RM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RM,this.fragmentShader=CM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=wM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class PM extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Uh extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class er extends Uh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class LM extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NM extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function yc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function IM(s){function e(o,a){return s[o]-s[a]}const t=s.length,i=new Array(t);for(let o=0;o!==t;++o)i[o]=o;return i.sort(e),i}function s_(s,e,t){const i=s.length,o=new s.constructor(i);for(let a=0,c=0;c!==i;++a){const d=t[a]*e;for(let f=0;f!==e;++f)o[c++]=s[d+f]}return o}function T0(s,e,t,i){let o=1,a=s[0];for(;a!==void 0&&a[i]===void 0;)a=s[o++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push(...c)),a=s[o++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=s[o++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=s[o++];while(a!==void 0)}class Uo{constructor(e,t,i,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,o=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<o)){for(let d=i+2;;){if(o===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===d)break;if(a=o,o=t[++i],e<o)break t}c=t.length;break n}if(!(e>=a)){const d=t[1];e<d&&(i=2,a=d);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(o=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const d=i+c>>>1;e<t[d]?c=d:i=d+1}if(o=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,o)}return this.interpolate_(i,a,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o;for(let c=0;c!==o;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class DM extends Uo{constructor(e,t,i,o){super(e,t,i,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tg,endingEnd:Tg}}intervalChanged_(e,t,i){const o=this.parameterPositions;let a=e-2,c=e+1,d=o[a],f=o[c];if(d===void 0)switch(this.getSettings_().endingStart){case bg:a=e,d=2*t-i;break;case wg:a=o.length-2,d=t+o[a]-o[a+1];break;default:a=e,d=i}if(f===void 0)switch(this.getSettings_().endingEnd){case bg:c=e,f=2*i-t;break;case wg:c=1,f=i+o[1]-o[0];break;default:c=e-1,f=t}const h=(i-t)*.5,g=this.valueSize;this._weightPrev=h/(t-d),this._weightNext=h/(f-i),this._offsetPrev=a*g,this._offsetNext=c*g}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,f=e*d,h=f-d,g=this._offsetPrev,_=this._offsetNext,m=this._weightPrev,x=this._weightNext,M=(i-t)/(o-t),T=M*M,y=T*M,S=-m*y+2*m*T-m*M,R=(1+m)*y+(-1.5-2*m)*T+(-.5+m)*M+1,L=(-1-x)*y+(1.5+x)*T+.5*M,P=x*y-x*T;for(let k=0;k!==d;++k)a[k]=S*c[g+k]+R*c[h+k]+L*c[f+k]+P*c[_+k];return a}}class UM extends Uo{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,f=e*d,h=f-d,g=(i-t)/(o-t),_=1-g;for(let m=0;m!==d;++m)a[m]=c[h+m]*_+c[f+m]*g;return a}}class FM extends Uo{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class OM extends Uo{interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,f=e*d,h=f-d,g=this.settings||this.DefaultSettings_,_=g.inTangents,m=g.outTangents;if(!_||!m){const T=(i-t)/(o-t),y=1-T;for(let S=0;S!==d;++S)a[S]=c[h+S]*y+c[f+S]*T;return a}const x=d*2,M=e-1;for(let T=0;T!==d;++T){const y=c[h+T],S=c[f+T],R=M*x+T*2,L=m[R],P=m[R+1],k=e*x+T*2,N=_[k],O=_[k+1];let w=(i-t)/(o-t),D,X,F,$,ce;for(let de=0;de<8;de++){D=w*w,X=D*w,F=1-w,$=F*F,ce=$*F;const ie=ce*t+3*$*w*L+3*F*D*N+X*o-i;if(Math.abs(ie)<1e-10)break;const Y=3*$*(L-t)+6*F*w*(N-L)+3*D*(o-N);if(Math.abs(Y)<1e-10)break;w=w-ie/Y,w=Math.max(0,Math.min(1,w))}a[T]=ce*y+3*$*w*P+3*F*D*O+X*S}return a}}class Ii{constructor(e,t,i,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yc(t,this.TimeBufferType),this.values=yc(i,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:yc(e.times,Array),values:yc(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(i.interpolation=o)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new FM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new UM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new DM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new OM(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ha:t=this.InterpolantFactoryMethodDiscrete;break;case Ga:t=this.InterpolantFactoryMethodLinear;break;case Id:t=this.InterpolantFactoryMethodSmooth;break;case Eg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $e("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return Id;case this.InterpolantFactoryMethodBezier:return Eg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]*=e}return this}trim(e,t){const i=this.times,o=i.length;let a=0,c=o-1;for(;a!==o&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==o){a>=c&&(c=Math.max(c,1),a=c-1);const d=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*d,c*d)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,o=this.values,a=i.length;a===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let d=0;d!==a;d++){const f=i[d];if(typeof f=="number"&&isNaN(f)){nt("KeyframeTrack: Time is not a valid number.",this,d,f),e=!1;break}if(c!==null&&c>f){nt("KeyframeTrack: Out of order keys.",this,d,f,c),e=!1;break}c=f}if(o!==void 0&&RS(o))for(let d=0,f=o.length;d!==f;++d){const h=o[d];if(isNaN(h)){nt("KeyframeTrack: Value is not a valid number.",this,d,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),o=this.getInterpolation()===Id,a=e.length-1;let c=1;for(let d=1;d<a;++d){let f=!1;const h=e[d],g=e[d+1];if(h!==g&&(d!==1||h!==e[0]))if(o)f=!0;else{const _=d*i,m=_-i,x=_+i;for(let M=0;M!==i;++M){const T=t[_+M];if(T!==t[m+M]||T!==t[x+M]){f=!0;break}}}if(f){if(d!==c){e[c]=e[d];const _=d*i,m=c*i;for(let x=0;x!==i;++x)t[m+x]=t[_+x]}++c}}if(a>0){e[c]=e[a];for(let d=a*i,f=c*i,h=0;h!==i;++h)t[f+h]=t[d+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,o=new i(this.name,e,t);return o.createInterpolant=this.createInterpolant,o}}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Ga;class Fo extends Ii{constructor(e,t,i){super(e,t,i)}}Fo.prototype.ValueTypeName="bool";Fo.prototype.ValueBufferType=Array;Fo.prototype.DefaultInterpolation=Ha;Fo.prototype.InterpolantFactoryMethodLinear=void 0;Fo.prototype.InterpolantFactoryMethodSmooth=void 0;class b0 extends Ii{constructor(e,t,i,o){super(e,t,i,o)}}b0.prototype.ValueTypeName="color";class Po extends Ii{constructor(e,t,i,o){super(e,t,i,o)}}Po.prototype.ValueTypeName="number";class kM extends Uo{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,f=(i-t)/(o-t);let h=e*d;for(let g=h+d;h!==g;h+=4)Ni.slerpFlat(a,0,c,h-d,c,h,f);return a}}class Lo extends Ii{constructor(e,t,i,o){super(e,t,i,o)}InterpolantFactoryMethodLinear(e){return new kM(this.times,this.values,this.getValueSize(),e)}}Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;class Oo extends Ii{constructor(e,t,i){super(e,t,i)}}Oo.prototype.ValueTypeName="string";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=Ha;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class No extends Ii{constructor(e,t,i,o){super(e,t,i,o)}}No.prototype.ValueTypeName="vector";class BM{constructor(e="",t=-1,i=[],o=_S){this.name=e,this.tracks=i,this.duration=t,this.blendMode=o,this.uuid=Pi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,o=1/(e.fps||1);for(let c=0,d=i.length;c!==d;++c)t.push(VM(i[c]).scale(o));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],i=e.tracks,o={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,c=i.length;a!==c;++a)t.push(Ii.toJSON(i[a]));return o}static CreateFromMorphTargetSequence(e,t,i,o){const a=t.length,c=[];for(let d=0;d<a;d++){let f=[],h=[];f.push((d+a-1)%a,d,(d+1)%a),h.push(0,1,0);const g=IM(f);f=s_(f,1,g),h=s_(h,1,g),!o&&f[0]===0&&(f.push(a),h.push(h[0])),c.push(new Po(".morphTargetInfluences["+t[d].name+"]",f,h).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const o=e;i=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<i.length;o++)if(i[o].name===t)return i[o];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const o={},a=/^([\w-]*?)([\d]+)$/;for(let d=0,f=e.length;d<f;d++){const h=e[d],g=h.name.match(a);if(g&&g.length>1){const _=g[1];let m=o[_];m||(o[_]=m=[]),m.push(h)}}const c=[];for(const d in o)c.push(this.CreateFromMorphTargetSequence(d,o[d],t,i));return c}static parseAnimation(e,t){if($e("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return nt("AnimationClip: No animation in JSONLoader data."),null;const i=function(_,m,x,M,T){if(x.length!==0){const y=[],S=[];T0(x,y,S,M),y.length!==0&&T.push(new _(m,y,S))}},o=[],a=e.name||"default",c=e.fps||30,d=e.blendMode;let f=e.length||-1;const h=e.hierarchy||[];for(let _=0;_<h.length;_++){const m=h[_].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const x={};let M;for(M=0;M<m.length;M++)if(m[M].morphTargets)for(let T=0;T<m[M].morphTargets.length;T++)x[m[M].morphTargets[T]]=-1;for(const T in x){const y=[],S=[];for(let R=0;R!==m[M].morphTargets.length;++R){const L=m[M];y.push(L.time),S.push(L.morphTarget===T?1:0)}o.push(new Po(".morphTargetInfluence["+T+"]",y,S))}f=x.length*c}else{const x=".bones["+t[_].name+"]";i(No,x+".position",m,"pos",o),i(Lo,x+".quaternion",m,"rot",o),i(No,x+".scale",m,"scl",o)}}return o.length===0?null:new this(a,f,o,d)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,o=e.length;i!==o;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function zM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Po;case"vector":case"vector2":case"vector3":case"vector4":return No;case"color":return b0;case"quaternion":return Lo;case"bool":case"boolean":return Fo;case"string":return Oo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function VM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zM(s.type);if(s.times===void 0){const t=[],i=[];T0(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const xr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(o_(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!o_(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function o_(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class HM{constructor(e,t,i){const o=this;let a=!1,c=0,d=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(g){d++,a===!1&&o.onStart!==void 0&&o.onStart(g,c,d),a=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,d),c===d&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return f?f(g):g},this.setURLModifier=function(g){return f=g,this},this.addHandler=function(g,_){return h.push(g,_),this},this.removeHandler=function(g){const _=h.indexOf(g);return _!==-1&&h.splice(_,2),this},this.getHandler=function(g){for(let _=0,m=h.length;_<m;_+=2){const x=h[_],M=h[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const GM=new HM;class ko{constructor(e){this.manager=e!==void 0?e:GM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,a){i.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ko.DEFAULT_MATERIAL_NAME="__DEFAULT";const _r={};class jM extends Error{constructor(e,t){super(e),this.response=t}}class w0 extends ko{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=xr.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(_r[e]!==void 0){_r[e].push({onLoad:t,onProgress:i,onError:o});return}_r[e]=[],_r[e].push({onLoad:t,onProgress:i,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,f=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&$e("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const g=_r[e],_=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=m?parseInt(m):0,M=x!==0;let T=0;const y=new ReadableStream({start(S){R();function R(){_.read().then(({done:L,value:P})=>{if(L)S.close();else{T+=P.byteLength;const k=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:x});for(let N=0,O=g.length;N<O;N++){const w=g[N];w.onProgress&&w.onProgress(k)}S.enqueue(P),R()}},L=>{S.error(L)})}}});return new Response(y)}else throw new jM(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return h.json();default:if(d==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(d),m=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(m);return h.arrayBuffer().then(M=>x.decode(M))}}}).then(h=>{xr.add(`file:${e}`,h);const g=_r[e];delete _r[e];for(let _=0,m=g.length;_<m;_++){const x=g[_];x.onLoad&&x.onLoad(h)}}).catch(h=>{const g=_r[e];if(g===void 0)throw this.manager.itemError(e),h;delete _r[e];for(let _=0,m=g.length;_<m;_++){const x=g[_];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const mo=new WeakMap;class WM extends ko{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=xr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let _=mo.get(c);_===void 0&&(_=[],mo.set(c,_)),_.push({onLoad:t,onError:o})}return c}const d=Wa("img");function f(){g(),t&&t(this);const _=mo.get(this)||[];for(let m=0;m<_.length;m++){const x=_[m];x.onLoad&&x.onLoad(this)}mo.delete(this),a.manager.itemEnd(e)}function h(_){g(),o&&o(_),xr.remove(`image:${e}`);const m=mo.get(this)||[];for(let x=0;x<m.length;x++){const M=m[x];M.onError&&M.onError(_)}mo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){d.removeEventListener("load",f,!1),d.removeEventListener("error",h,!1)}return d.addEventListener("load",f,!1),d.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),xr.add(`image:${e}`,d),a.manager.itemStart(e),d.src=e,d}}class XM extends ko{constructor(e){super(e)}load(e,t,i,o){const a=new Sn,c=new WM(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){a.image=d,a.needsUpdate=!0,t!==void 0&&t(a)},i,o),a}}class jc extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const of=new xt,a_=new W,l_=new W;class Fh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ih,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;a_.setFromMatrixPosition(e.matrixWorld),t.position.copy(a_),l_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(l_),t.updateMatrixWorld(),of.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ja||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sc=new W,Mc=new Ni,zi=new W;class A0 extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sc,Mc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Sc,Mc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $r=new W,c_=new at,u_=new at;class kn extends A0{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,c_,u_),t.subVectors(u_,c_)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*i/h,o*=c.width/f,i*=c.height/h}const d=this.filmOffset;d!==0&&(a+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class YM extends Fh{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Ao*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||o!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=o,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class KM extends jc{constructor(e,t,i=0,o=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=i,this.angle=o,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new YM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class qM extends Fh{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}}class dh extends jc{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new qM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wc extends A0{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,d-=g*this.view.offsetY,f=d-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $M extends Fh{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class R0 extends jc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new $M}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ZM extends jc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ba{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const af=new WeakMap;class JM extends ko{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&$e("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&$e("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=xr.get(`image-bitmap:${e}`);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{af.has(c)===!0?(o&&o(af.get(c)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(h),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);return}const d={};d.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",d.headers=this.requestHeader,d.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const f=fetch(e,d).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){xr.add(`image-bitmap:${e}`,h),t&&t(h),a.manager.itemEnd(e)}).catch(function(h){o&&o(h),af.set(f,h),xr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});xr.add(`image-bitmap:${e}`,f),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const go=-90,_o=1;class QM extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new kn(go,_o,e,t);o.layers=this.layers,this.add(o);const a=new kn(go,_o,e,t);a.layers=this.layers,this.add(a);const c=new kn(go,_o,e,t);c.layers=this.layers,this.add(c);const d=new kn(go,_o,e,t);d.layers=this.layers,this.add(d);const f=new kn(go,_o,e,t);f.layers=this.layers,this.add(f);const h=new kn(go,_o,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,d,f]=t;for(const h of t)this.remove(h);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,d,f,h,g]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,m,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class eE extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Oh="\\[\\]\\.:\\/",tE=new RegExp("["+Oh+"]","g"),kh="[^"+Oh+"]",nE="[^"+Oh.replace("\\.","")+"]",iE=/((?:WC+[\/:])*)/.source.replace("WC",kh),rE=/(WCOD+)?/.source.replace("WCOD",nE),sE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),oE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),aE=new RegExp("^"+iE+rE+sE+oE+"$"),lE=["material","materials","bones","map"];class cE{constructor(e,t,i){const o=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ft{constructor(e,t,i){this.path=t,this.parsedPath=i||Ft.parseTrackName(t),this.node=Ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ft.Composite(e,t,i):new Ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tE,"")}static parseTrackName(e){const t=aE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=i.nodeName&&i.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const a=i.nodeName.substring(o+1);lE.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,o),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const d=a[c];if(d.name===t||d.uuid===t)return d;const f=i(d.children);if(f)return f}return null},o=i(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)e[t++]=i[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,o=t.propertyName;let a=t.propertyIndex;if(e||(e=Ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===h){h=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[o];if(c===void 0){const h=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+h+"."+o+" but it wasn't found.",e);return}let d=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?d=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(d=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][d]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ft.Composite=cE;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class d_{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jh=class jh{constructor(e,t,i,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=o,this}};jh.prototype.isMatrix2=!0;let f_=jh;class uE extends ns{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){$e("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function h_(s,e,t,i){const o=dE(i);switch(t){case l0:return s*e;case Mh:return s*e/o.components*o.byteLength;case Eh:return s*e/o.components*o.byteLength;case Ps:return s*e*2/o.components*o.byteLength;case Th:return s*e*2/o.components*o.byteLength;case c0:return s*e*3/o.components*o.byteLength;case mi:return s*e*4/o.components*o.byteLength;case bh:return s*e*4/o.components*o.byteLength;case Rc:case Cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:case Nf:return Math.max(s,16)*Math.max(e,8)/4;case Cf:case Lf:return Math.max(s,8)*Math.max(e,8)/2;case If:case Df:case Ff:case Of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uf:case Uc:case kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qf:case eh:case th:return Math.ceil(s/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fc:case rh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dE(s){switch(s){case ni:case r0:return{byteLength:1,components:1};case za:case s0:case Er:return{byteLength:2,components:1};case yh:case Sh:return{byteLength:2,components:4};case $i:case xh:case pi:return{byteLength:4,components:1};case o0:case a0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C0(){let s=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function fE(s){const e=new WeakMap;function t(d,f){const h=d.array,g=d.usage,_=h.byteLength,m=s.createBuffer();s.bindBuffer(f,m),s.bufferData(f,h,g),d.onUploadCallback();let x;if(h instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=s.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=s.SHORT;else if(h instanceof Uint32Array)x=s.UNSIGNED_INT;else if(h instanceof Int32Array)x=s.INT;else if(h instanceof Int8Array)x=s.BYTE;else if(h instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function i(d,f,h){const g=f.array,_=f.updateRanges;if(s.bindBuffer(h,d),_.length===0)s.bufferSubData(h,0,g);else{_.sort((x,M)=>x.start-M.start);let m=0;for(let x=1;x<_.length;x++){const M=_[m],T=_[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++m,_[m]=T)}_.length=m+1;for(let x=0,M=_.length;x<M;x++){const T=_[x];s.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function a(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,d,f),h.version=d.version}}return{get:o,remove:a,update:c}}var hE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ME=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,UE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,FE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GE="gl_FragColor = linearToOutputTexel( gl_FragColor );",jE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$E=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ST=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ET=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,GT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ob=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ab=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Db=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ub=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:hE,alphahash_pars_fragment:pE,alphamap_fragment:mE,alphamap_pars_fragment:gE,alphatest_fragment:_E,alphatest_pars_fragment:vE,aomap_fragment:xE,aomap_pars_fragment:yE,batching_pars_vertex:SE,batching_vertex:ME,begin_vertex:EE,beginnormal_vertex:TE,bsdfs:bE,iridescence_fragment:wE,bumpmap_pars_fragment:AE,clipping_planes_fragment:RE,clipping_planes_pars_fragment:CE,clipping_planes_pars_vertex:PE,clipping_planes_vertex:LE,color_fragment:NE,color_pars_fragment:IE,color_pars_vertex:DE,color_vertex:UE,common:FE,cube_uv_reflection_fragment:OE,defaultnormal_vertex:kE,displacementmap_pars_vertex:BE,displacementmap_vertex:zE,emissivemap_fragment:VE,emissivemap_pars_fragment:HE,colorspace_fragment:GE,colorspace_pars_fragment:jE,envmap_fragment:WE,envmap_common_pars_fragment:XE,envmap_pars_fragment:YE,envmap_pars_vertex:KE,envmap_physical_pars_fragment:sT,envmap_vertex:qE,fog_vertex:$E,fog_pars_vertex:ZE,fog_fragment:JE,fog_pars_fragment:QE,gradientmap_pars_fragment:eT,lightmap_pars_fragment:tT,lights_lambert_fragment:nT,lights_lambert_pars_fragment:iT,lights_pars_begin:rT,lights_toon_fragment:oT,lights_toon_pars_fragment:aT,lights_phong_fragment:lT,lights_phong_pars_fragment:cT,lights_physical_fragment:uT,lights_physical_pars_fragment:dT,lights_fragment_begin:fT,lights_fragment_maps:hT,lights_fragment_end:pT,lightprobes_pars_fragment:mT,logdepthbuf_fragment:gT,logdepthbuf_pars_fragment:_T,logdepthbuf_pars_vertex:vT,logdepthbuf_vertex:xT,map_fragment:yT,map_pars_fragment:ST,map_particle_fragment:MT,map_particle_pars_fragment:ET,metalnessmap_fragment:TT,metalnessmap_pars_fragment:bT,morphinstance_vertex:wT,morphcolor_vertex:AT,morphnormal_vertex:RT,morphtarget_pars_vertex:CT,morphtarget_vertex:PT,normal_fragment_begin:LT,normal_fragment_maps:NT,normal_pars_fragment:IT,normal_pars_vertex:DT,normal_vertex:UT,normalmap_pars_fragment:FT,clearcoat_normal_fragment_begin:OT,clearcoat_normal_fragment_maps:kT,clearcoat_pars_fragment:BT,iridescence_pars_fragment:zT,opaque_fragment:VT,packing:HT,premultiplied_alpha_fragment:GT,project_vertex:jT,dithering_fragment:WT,dithering_pars_fragment:XT,roughnessmap_fragment:YT,roughnessmap_pars_fragment:KT,shadowmap_pars_fragment:qT,shadowmap_pars_vertex:$T,shadowmap_vertex:ZT,shadowmask_pars_fragment:JT,skinbase_vertex:QT,skinning_pars_vertex:eb,skinning_vertex:tb,skinnormal_vertex:nb,specularmap_fragment:ib,specularmap_pars_fragment:rb,tonemapping_fragment:sb,tonemapping_pars_fragment:ob,transmission_fragment:ab,transmission_pars_fragment:lb,uv_pars_fragment:cb,uv_pars_vertex:ub,uv_vertex:db,worldpos_vertex:fb,background_vert:hb,background_frag:pb,backgroundCube_vert:mb,backgroundCube_frag:gb,cube_vert:_b,cube_frag:vb,depth_vert:xb,depth_frag:yb,distance_vert:Sb,distance_frag:Mb,equirect_vert:Eb,equirect_frag:Tb,linedashed_vert:bb,linedashed_frag:wb,meshbasic_vert:Ab,meshbasic_frag:Rb,meshlambert_vert:Cb,meshlambert_frag:Pb,meshmatcap_vert:Lb,meshmatcap_frag:Nb,meshnormal_vert:Ib,meshnormal_frag:Db,meshphong_vert:Ub,meshphong_frag:Fb,meshphysical_vert:Ob,meshphysical_frag:kb,meshtoon_vert:Bb,meshtoon_frag:zb,points_vert:Vb,points_frag:Hb,shadow_vert:Gb,shadow_frag:jb,sprite_vert:Wb,sprite_frag:Xb},Ne={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Gi={basic:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:On([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:On([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:On([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:On([Ne.points,Ne.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:On([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:On([Ne.common,Ne.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:On([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:On([Ne.sprite,Ne.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:On([Ne.common,Ne.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:On([Ne.lights,Ne.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Gi.physical={uniforms:On([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ec={r:0,b:0,g:0},Yb=new xt,P0=new ut;P0.set(-1,0,0,0,1,0,0,0,1);function Kb(s,e,t,i,o,a){const c=new dt(0);let d=o===!0?0:1,f,h,g=null,_=0,m=null;function x(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const P=R.backgroundBlurriness>0;L=e.get(L,P)}return L}function M(R){let L=!1;const P=x(R);P===null?y(c,d):P&&P.isColor&&(y(P,1),L=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?t.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(R,L){const P=x(L);P&&(P.isCubeTexture||P.mapping===Hc)?(h===void 0&&(h=new ri(new Ya(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Co(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(L.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(P0),h.material.toneMapped=Et.getTransfer(P.colorSpace)!==Dt,(g!==P||_!==P.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,g=P,_=P.version,m=s.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(f===void 0&&(f=new ri(new Gc(2,2),new Zi({name:"BackgroundMaterial",uniforms:Co(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=P,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=Et.getTransfer(P.colorSpace)!==Dt,P.matrixAutoUpdate===!0&&P.updateMatrix(),f.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||_!==P.version||m!==s.toneMapping)&&(f.material.needsUpdate=!0,g=P,_=P.version,m=s.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function y(R,L){R.getRGB(Ec,E0(s)),t.buffers.color.setClear(Ec.r,Ec.g,Ec.b,L,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,L=1){c.set(R),d=L,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,y(c,d)},render:M,addToRenderList:T,dispose:S}}function qb(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=m(null);let a=o,c=!1;function d(F,$,ce,de,G){let ie=!1;const Y=_(F,de,ce,$);a!==Y&&(a=Y,h(a.object)),ie=x(F,de,ce,G),ie&&M(F,de,ce,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(ie||c)&&(c=!1,P(F,$,ce,de),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function f(){return s.createVertexArray()}function h(F){return s.bindVertexArray(F)}function g(F){return s.deleteVertexArray(F)}function _(F,$,ce,de){const G=de.wireframe===!0;let ie=i[$.id];ie===void 0&&(ie={},i[$.id]=ie);const Y=F.isInstancedMesh===!0?F.id:0;let K=ie[Y];K===void 0&&(K={},ie[Y]=K);let le=K[ce.id];le===void 0&&(le={},K[ce.id]=le);let ae=le[G];return ae===void 0&&(ae=m(f()),le[G]=ae),ae}function m(F){const $=[],ce=[],de=[];for(let G=0;G<t;G++)$[G]=0,ce[G]=0,de[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ce,attributeDivisors:de,object:F,attributes:{},index:null}}function x(F,$,ce,de){const G=a.attributes,ie=$.attributes;let Y=0;const K=ce.getAttributes();for(const le in K)if(K[le].location>=0){const U=G[le];let ee=ie[le];if(ee===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),U===void 0||U.attribute!==ee||ee&&U.data!==ee.data)return!0;Y++}return a.attributesNum!==Y||a.index!==de}function M(F,$,ce,de){const G={},ie=$.attributes;let Y=0;const K=ce.getAttributes();for(const le in K)if(K[le].location>=0){let U=ie[le];U===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(U=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(U=F.instanceColor));const ee={};ee.attribute=U,U&&U.data&&(ee.data=U.data),G[le]=ee,Y++}a.attributes=G,a.attributesNum=Y,a.index=de}function T(){const F=a.newAttributes;for(let $=0,ce=F.length;$<ce;$++)F[$]=0}function y(F){S(F,0)}function S(F,$){const ce=a.newAttributes,de=a.enabledAttributes,G=a.attributeDivisors;ce[F]=1,de[F]===0&&(s.enableVertexAttribArray(F),de[F]=1),G[F]!==$&&(s.vertexAttribDivisor(F,$),G[F]=$)}function R(){const F=a.newAttributes,$=a.enabledAttributes;for(let ce=0,de=$.length;ce<de;ce++)$[ce]!==F[ce]&&(s.disableVertexAttribArray(ce),$[ce]=0)}function L(F,$,ce,de,G,ie,Y){Y===!0?s.vertexAttribIPointer(F,$,ce,G,ie):s.vertexAttribPointer(F,$,ce,de,G,ie)}function P(F,$,ce,de){T();const G=de.attributes,ie=ce.getAttributes(),Y=$.defaultAttributeValues;for(const K in ie){const le=ie[K];if(le.location>=0){let ae=G[K];if(ae===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),ae!==void 0){const U=ae.normalized,ee=ae.itemSize,Fe=e.get(ae);if(Fe===void 0)continue;const He=Fe.buffer,Ie=Fe.type,oe=Fe.bytesPerElement,ye=Ie===s.INT||Ie===s.UNSIGNED_INT||ae.gpuType===xh;if(ae.isInterleavedBufferAttribute){const me=ae.data,De=me.stride,Je=ae.offset;if(me.isInstancedInterleavedBuffer){for(let Qe=0;Qe<le.locationSize;Qe++)S(le.location+Qe,me.meshPerAttribute);F.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Qe=0;Qe<le.locationSize;Qe++)y(le.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,He);for(let Qe=0;Qe<le.locationSize;Qe++)L(le.location+Qe,ee/le.locationSize,Ie,U,De*oe,(Je+ee/le.locationSize*Qe)*oe,ye)}else{if(ae.isInstancedBufferAttribute){for(let me=0;me<le.locationSize;me++)S(le.location+me,ae.meshPerAttribute);F.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<le.locationSize;me++)y(le.location+me);s.bindBuffer(s.ARRAY_BUFFER,He);for(let me=0;me<le.locationSize;me++)L(le.location+me,ee/le.locationSize,Ie,U,ee*oe,ee/le.locationSize*me*oe,ye)}}else if(Y!==void 0){const U=Y[K];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(le.location,U);break;case 3:s.vertexAttrib3fv(le.location,U);break;case 4:s.vertexAttrib4fv(le.location,U);break;default:s.vertexAttrib1fv(le.location,U)}}}}R()}function k(){D();for(const F in i){const $=i[F];for(const ce in $){const de=$[ce];for(const G in de){const ie=de[G];for(const Y in ie)g(ie[Y].object),delete ie[Y];delete de[G]}}delete i[F]}}function N(F){if(i[F.id]===void 0)return;const $=i[F.id];for(const ce in $){const de=$[ce];for(const G in de){const ie=de[G];for(const Y in ie)g(ie[Y].object),delete ie[Y];delete de[G]}}delete i[F.id]}function O(F){for(const $ in i){const ce=i[$];for(const de in ce){const G=ce[de];if(G[F.id]===void 0)continue;const ie=G[F.id];for(const Y in ie)g(ie[Y].object),delete ie[Y];delete G[F.id]}}}function w(F){for(const $ in i){const ce=i[$],de=F.isInstancedMesh===!0?F.id:0,G=ce[de];if(G!==void 0){for(const ie in G){const Y=G[ie];for(const K in Y)g(Y[K].object),delete Y[K];delete G[ie]}delete ce[de],Object.keys(ce).length===0&&delete i[$]}}}function D(){X(),c=!0,a!==o&&(a=o,h(a.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:D,resetDefaultState:X,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:R}}function $b(s,e,t){let i;function o(f){i=f}function a(f,h){s.drawArrays(i,f,h),t.update(h,i,1)}function c(f,h,g){g!==0&&(s.drawArraysInstanced(i,f,h,g),t.update(h,i,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,h,0,g);let m=0;for(let x=0;x<g;x++)m+=h[x];t.update(m,i,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=d}function Zb(s,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==mi&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const w=O===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ni&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==pi&&!w)}function f(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=f(h);g!==h&&($e("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:P,maxSamples:k,samples:N}}function Jb(s){const e=this;let t=null,i=0,o=!1,a=!1;const c=new Jr,d=new ut,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const x=_.length!==0||m||i!==0||o;return o=m,i=_.length,x},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,m){t=g(_,m,0)},this.setState=function(_,m,x){const M=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,S=s.get(_);if(!o||M===null||M.length===0||a&&!y)a?g(null):h();else{const R=a?0:i,L=R*4;let P=S.clippingState||null;f.value=P,P=g(M,m,L,x);for(let k=0;k!==L;++k)P[k]=t[k];S.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=R}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(_,m,x,M){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=f.value,M!==!0||y===null){const S=x+T*4,R=m.matrixWorldInverse;d.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,P=x;L!==T;++L,P+=4)c.copy(_[L]).applyMatrix4(R,d),c.normal.toArray(y,P),y[P+3]=c.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const es=4,p_=[.125,.215,.35,.446,.526,.582],bs=20,Qb=256,La=new Wc,m_=new dt;let lf=null,cf=0,uf=0,df=!1;const ew=new W;class g_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:d=ew}=a;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,o,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,uf),this._renderer.xr.enabled=df,e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Er,format:mi,colorSpace:ii,depthBuffer:!1},o=__(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=__(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tw(a)),this._blurMaterial=iw(a,e,t),this._ggxMaterial=nw(a,e,t)}return o}_compileMaterial(e){const t=new ri(new gi,e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,i,o,a){const f=new kn(90,1,t,i),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,x=_.toneMapping;_.getClearColor(m_),_.toneMapping=Yi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new Ya,new Rs({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(m_),S=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(f.up.set(0,h[L],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+g[L],a.y,a.z)):P===1?(f.up.set(0,0,h[L]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+g[L],a.z)):(f.up.set(0,h[L],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+g[L]));const k=this._cubeSize;vo(o,P*k,L>2?k:0,k,k),_.setRenderTarget(o),S&&_.render(T,f),_.render(e,f)}_.toneMapping=x,_.autoClear=m,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Cs||e.mapping===bo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=x_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v_());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const d=a.uniforms;d.envMap.value=e;const f=this._cubeSize;vo(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,La)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[i];d.material=c;const f=c.uniforms,h=i/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),m=0+h*1.25,x=_*m,{_lodMax:M}=this,T=this._sizeLods[i],y=3*T*(i>M-es?i-M+es:0),S=4*(this._cubeSize-T);f.envMap.value=e.texture,f.roughness.value=x,f.mipInt.value=M-t,vo(a,y,S,3*T,2*T),o.setRenderTarget(a),o.render(d,La),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=M-i,vo(e,y,S,3*T,2*T),o.setRenderTarget(e),o.render(d,La)}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,d){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=h;const m=h.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*bs-1),T=a/M,y=isFinite(a)?1+Math.floor(g*T):bs;y>bs&&$e(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${bs}`);const S=[];let R=0;for(let O=0;O<bs;++O){const w=O/T,D=Math.exp(-w*w/2);S.push(D),O===0?R+=D:O<y&&(R+=2*D)}for(let O=0;O<S.length;O++)S[O]=S[O]/R;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=c==="latitudinal",d&&(m.poleAxis.value=d);const{_lodMax:L}=this;m.dTheta.value=M,m.mipInt.value=L-i;const P=this._sizeLods[o],k=3*P*(o>L-es?o-L+es:0),N=4*(this._cubeSize-P);vo(t,k,N,3*P,2*P),f.setRenderTarget(t),f.render(_,La)}}function tw(s){const e=[],t=[],i=[];let o=s;const a=s-es+1+p_.length;for(let c=0;c<a;c++){const d=Math.pow(2,o);e.push(d);let f=1/d;c>s-es?f=p_[c-s+es-1]:c===0&&(f=0),t.push(f);const h=1/(d-2),g=-h,_=1+h,m=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,M=6,T=3,y=2,S=1,R=new Float32Array(T*M*x),L=new Float32Array(y*M*x),P=new Float32Array(S*M*x);for(let N=0;N<x;N++){const O=N%3*2/3-1,w=N>2?0:-1,D=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];R.set(D,T*M*N),L.set(m,y*M*N);const X=[N,N,N,N,N,N];P.set(X,S*M*N)}const k=new gi;k.setAttribute("position",new Bn(R,T)),k.setAttribute("uv",new Bn(L,y)),k.setAttribute("faceIndex",new Bn(P,S)),i.push(new ri(k,null)),o>es&&o--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function __(s,e,t){const i=new Ki(s,e,t);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vo(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function nw(s,e,t){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function iw(s,e,t){const i=new Float32Array(bs),o=new W(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function v_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function x_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class L0 extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new S0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ya(5,5,5),a=new Zi({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qn,blending:yr});a.uniforms.tEquirect.value=t;const c=new ri(o,a),d=t.minFilter;return t.minFilter===vr&&(t.minFilter=pn),new QM(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}function rw(s){let e=new WeakMap,t=new WeakMap,i=null;function o(m,x=!1){return m==null?null:x?c(m):a(m)}function a(m){if(m&&m.isTexture){const x=m.mapping;if(x===Ld||x===Nd)if(e.has(m)){const M=e.get(m).texture;return d(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const T=new L0(M.height);return T.fromEquirectangularTexture(s,m),e.set(m,T),m.addEventListener("dispose",h),d(T.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const x=m.mapping,M=x===Ld||x===Nd,T=x===Cs||x===bo;if(M||T){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new g_(s)),y=M?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const R=m.image;return M&&R&&R.height>0||T&&R&&f(R)?(i===null&&(i=new g_(s)),y=M?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function d(m,x){return x===Ld?m.mapping=Cs:x===Nd&&(m.mapping=bo),m}function f(m){let x=0;const M=6;for(let T=0;T<M;T++)m[T]!==void 0&&x++;return x===M}function h(m){const x=m.target;x.removeEventListener("dispose",h);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function g(m){const x=m.target;x.removeEventListener("dispose",g);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:_}}function sw(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=s.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&lh("WebGLRenderer: "+i+" extension not supported."),o}}}function ow(s,e,t,i){const o={},a=new WeakMap;function c(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete o[m.id];const x=a.get(m);x&&(e.remove(x),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function d(_,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function f(_){const m=_.attributes;for(const x in m)e.update(m[x],s.ARRAY_BUFFER)}function h(_){const m=[],x=_.index,M=_.attributes.position;let T=0;if(M===void 0)return;if(x!==null){const R=x.array;T=x.version;for(let L=0,P=R.length;L<P;L+=3){const k=R[L+0],N=R[L+1],O=R[L+2];m.push(k,N,N,O,O,k)}}else{const R=M.array;T=M.version;for(let L=0,P=R.length/3-1;L<P;L+=3){const k=L+0,N=L+1,O=L+2;m.push(k,N,N,O,O,k)}}const y=new(M.count>=65535?_0:g0)(m,1);y.version=T;const S=a.get(_);S&&e.remove(S),a.set(_,y)}function g(_){const m=a.get(_);if(m){const x=_.index;x!==null&&m.version<x.version&&h(_)}else h(_);return a.get(_)}return{get:d,update:f,getWireframeAttribute:g}}function aw(s,e,t){let i;function o(_){i=_}let a,c;function d(_){a=_.type,c=_.bytesPerElement}function f(_,m){s.drawElements(i,m,a,_*c),t.update(m,i,1)}function h(_,m,x){x!==0&&(s.drawElementsInstanced(i,m,a,_*c,x),t.update(m,i,x))}function g(_,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,_,0,x);let T=0;for(let y=0;y<x;y++)T+=m[y];t.update(T,i,1)}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=g}function lw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(a/3);break;case s.LINES:t.lines+=d*(a/2);break;case s.LINE_STRIP:t.lines+=d*(a-1);break;case s.LINE_LOOP:t.lines+=d*a;break;case s.POINTS:t.points+=d*a;break;default:nt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function cw(s,e,t){const i=new WeakMap,o=new zt;function a(c,d,f){const h=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let m=i.get(d);if(m===void 0||m.count!==_){let X=function(){w.dispose(),i.delete(d),d.removeEventListener("dispose",X)};var x=X;m!==void 0&&m.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let P=0;M===!0&&(P=1),T===!0&&(P=2),y===!0&&(P=3);let k=d.attributes.position.count*P,N=1;k>e.maxTextureSize&&(N=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const O=new Float32Array(k*N*4*_),w=new h0(O,k,N,_);w.type=pi,w.needsUpdate=!0;const D=P*4;for(let F=0;F<_;F++){const $=S[F],ce=R[F],de=L[F],G=k*N*4*F;for(let ie=0;ie<$.count;ie++){const Y=ie*D;M===!0&&(o.fromBufferAttribute($,ie),O[G+Y+0]=o.x,O[G+Y+1]=o.y,O[G+Y+2]=o.z,O[G+Y+3]=0),T===!0&&(o.fromBufferAttribute(ce,ie),O[G+Y+4]=o.x,O[G+Y+5]=o.y,O[G+Y+6]=o.z,O[G+Y+7]=0),y===!0&&(o.fromBufferAttribute(de,ie),O[G+Y+8]=o.x,O[G+Y+9]=o.y,O[G+Y+10]=o.z,O[G+Y+11]=de.itemSize===4?o.w:1)}}m={count:_,texture:w,size:new at(k,N)},i.set(d,m),d.addEventListener("dispose",X)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const T=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",T),f.getUniforms().setValue(s,"morphTargetInfluences",h)}f.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:a}}function uw(s,e,t,i,o){let a=new WeakMap;function c(h){const g=o.render.frame,_=h.geometry,m=e.get(h,_);if(a.get(m)!==g&&(e.update(m),a.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==g&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==g&&(x.update(),a.set(x,g))}return m}function d(){a=new WeakMap}function f(h){const g=h.target;g.removeEventListener("dispose",f),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:d}}const dw={[$_]:"LINEAR_TONE_MAPPING",[Z_]:"REINHARD_TONE_MAPPING",[J_]:"CINEON_TONE_MAPPING",[vh]:"ACES_FILMIC_TONE_MAPPING",[e0]:"AGX_TONE_MAPPING",[t0]:"NEUTRAL_TONE_MAPPING",[Q_]:"CUSTOM_TONE_MAPPING"};function fw(s,e,t,i,o){const a=new Ki(e,t,{type:s,depthBuffer:i,stencilBuffer:o,depthTexture:i?new Ro(e,t):void 0}),c=new Ki(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),d=new gi;d.setAttribute("position",new Li([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Li([0,2,0,0,2,0],2));const f=new PM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ri(d,f),g=new Wc(-1,1,1,-1,0,1);let _=null,m=null,x=!1,M,T=null,y=[],S=!1;this.setSize=function(R,L){a.setSize(R,L),c.setSize(R,L);for(let P=0;P<y.length;P++){const k=y[P];k.setSize&&k.setSize(R,L)}},this.setEffects=function(R){y=R,S=y.length>0&&y[0].isRenderPass===!0;const L=a.width,P=a.height;for(let k=0;k<y.length;k++){const N=y[k];N.setSize&&N.setSize(L,P)}},this.begin=function(R,L){if(x||R.toneMapping===Yi&&y.length===0)return!1;if(T=L,L!==null){const P=L.width,k=L.height;(a.width!==P||a.height!==k)&&this.setSize(P,k)}return S===!1&&R.setRenderTarget(a),M=R.toneMapping,R.toneMapping=Yi,!0},this.hasRenderPass=function(){return S},this.end=function(R,L){R.toneMapping=M,x=!0;let P=a,k=c;for(let N=0;N<y.length;N++){const O=y[N];if(O.enabled!==!1&&(O.render(R,k,P,L),O.needsSwap!==!1)){const w=P;P=k,k=w}}if(_!==R.outputColorSpace||m!==R.toneMapping){_=R.outputColorSpace,m=R.toneMapping,f.defines={},Et.getTransfer(_)===Dt&&(f.defines.SRGB_TRANSFER="");const N=dw[m];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(T),R.render(h,g),T=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),c.dispose(),d.dispose(),f.dispose()}}const N0=new Sn,fh=new Ro(1,1),I0=new h0,D0=new QS,U0=new S0,y_=[],S_=[],M_=new Float32Array(16),E_=new Float32Array(9),T_=new Float32Array(4);function Bo(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=y_[o];if(a===void 0&&(a=new Float32Array(o),y_[o]=a),e!==0){i.toArray(a,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(a,d)}return a}function mn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function gn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Yc(s,e){let t=S_[e];t===void 0&&(t=new Int32Array(e),S_[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function hw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2fv(this.addr,e),gn(t,e)}}function mw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;s.uniform3fv(this.addr,e),gn(t,e)}}function gw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4fv(this.addr,e),gn(t,e)}}function _w(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;T_.set(i),s.uniformMatrix2fv(this.addr,!1,T_),gn(t,i)}}function vw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;E_.set(i),s.uniformMatrix3fv(this.addr,!1,E_),gn(t,i)}}function xw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;M_.set(i),s.uniformMatrix4fv(this.addr,!1,M_),gn(t,i)}}function yw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2iv(this.addr,e),gn(t,e)}}function Mw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3iv(this.addr,e),gn(t,e)}}function Ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4iv(this.addr,e),gn(t,e)}}function Tw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2uiv(this.addr,e),gn(t,e)}}function ww(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3uiv(this.addr,e),gn(t,e)}}function Aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4uiv(this.addr,e),gn(t,e)}}function Rw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a;this.type===s.SAMPLER_2D_SHADOW?(fh.compareFunction=t.isReversedDepthBuffer()?Ah:wh,a=fh):a=N0,t.setTexture2D(e||a,o)}function Cw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||D0,o)}function Pw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||U0,o)}function Lw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||I0,o)}function Nw(s){switch(s){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return _w;case 35675:return vw;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return Ew;case 5125:return Tw;case 36294:return bw;case 36295:return ww;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Lw}}function Iw(s,e){s.uniform1fv(this.addr,e)}function Dw(s,e){const t=Bo(e,this.size,2);s.uniform2fv(this.addr,t)}function Uw(s,e){const t=Bo(e,this.size,3);s.uniform3fv(this.addr,t)}function Fw(s,e){const t=Bo(e,this.size,4);s.uniform4fv(this.addr,t)}function Ow(s,e){const t=Bo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kw(s,e){const t=Bo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Bw(s,e){const t=Bo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zw(s,e){s.uniform1iv(this.addr,e)}function Vw(s,e){s.uniform2iv(this.addr,e)}function Hw(s,e){s.uniform3iv(this.addr,e)}function Gw(s,e){s.uniform4iv(this.addr,e)}function jw(s,e){s.uniform1uiv(this.addr,e)}function Ww(s,e){s.uniform2uiv(this.addr,e)}function Xw(s,e){s.uniform3uiv(this.addr,e)}function Yw(s,e){s.uniform4uiv(this.addr,e)}function Kw(s,e,t){const i=this.cache,o=e.length,a=Yc(t,o);mn(i,a)||(s.uniform1iv(this.addr,a),gn(i,a));let c;this.type===s.SAMPLER_2D_SHADOW?c=fh:c=N0;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,a[d])}function qw(s,e,t){const i=this.cache,o=e.length,a=Yc(t,o);mn(i,a)||(s.uniform1iv(this.addr,a),gn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||D0,a[c])}function $w(s,e,t){const i=this.cache,o=e.length,a=Yc(t,o);mn(i,a)||(s.uniform1iv(this.addr,a),gn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||U0,a[c])}function Zw(s,e,t){const i=this.cache,o=e.length,a=Yc(t,o);mn(i,a)||(s.uniform1iv(this.addr,a),gn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||I0,a[c])}function Jw(s){switch(s){case 5126:return Iw;case 35664:return Dw;case 35665:return Uw;case 35666:return Fw;case 35674:return Ow;case 35675:return kw;case 35676:return Bw;case 5124:case 35670:return zw;case 35667:case 35671:return Vw;case 35668:case 35672:return Hw;case 35669:case 35673:return Gw;case 5125:return jw;case 36294:return Ww;case 36295:return Xw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return qw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return Zw}}class Qw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nw(t.type)}}class e1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jw(t.type)}}class t1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const d=o[a];d.setValue(e,t[d.id],i)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function b_(s,e){s.seq.push(e),s.map[e.id]=e}function n1(s,e,t){const i=s.name,o=i.length;for(ff.lastIndex=0;;){const a=ff.exec(i),c=ff.lastIndex;let d=a[1];const f=a[2]==="]",h=a[3];if(f&&(d=d|0),h===void 0||h==="["&&c+2===o){b_(t,h===void 0?new Qw(d,s,e):new e1(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new t1(d),b_(t,_)),t=_}}}class Nc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const d=e.getActiveUniform(t,c),f=e.getUniformLocation(t,d.name);n1(d,f,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const d=t[a],f=i[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function w_(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const i1=37297;let r1=0;function s1(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const d=c+1;i.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return i.join(`
`)}const A_=new ut;function o1(s){Et._getMatrix(A_,Et.workingColorSpace,s);const e=`mat3( ${A_.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case Oc:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function R_(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+s1(s.getShaderSource(e),d)}else return a}function a1(s,e){const t=o1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const l1={[$_]:"Linear",[Z_]:"Reinhard",[J_]:"Cineon",[vh]:"ACESFilmic",[e0]:"AgX",[t0]:"Neutral",[Q_]:"Custom"};function c1(s,e){const t=l1[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tc=new W;function u1(){Et.getLuminanceCoefficients(Tc);const s=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function f1(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function h1(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),c=a.name;let d=1;a.type===s.FLOAT_MAT2&&(d=2),a.type===s.FLOAT_MAT3&&(d=3),a.type===s.FLOAT_MAT4&&(d=4),t[c]={type:a.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function Fa(s){return s!==""}function C_(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function P_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(s){return s.replace(p1,g1)}const m1=new Map;function g1(s,e){let t=mt[e];if(t===void 0){const i=m1.get(e);if(i!==void 0)t=mt[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hh(t)}const _1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(s){return s.replace(_1,v1)}function v1(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function N_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const x1={[wc]:"SHADOWMAP_TYPE_PCF",[Da]:"SHADOWMAP_TYPE_VSM"};function y1(s){return x1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const S1={[Cs]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function M1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":S1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const E1={[bo]:"ENVMAP_MODE_REFRACTION"};function T1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":E1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const b1={[q_]:"ENVMAP_BLENDING_MULTIPLY",[pS]:"ENVMAP_BLENDING_MIX",[mS]:"ENVMAP_BLENDING_ADD"};function w1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":b1[s.combine]||"ENVMAP_BLENDING_NONE"}function A1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function R1(s,e,t,i){const o=s.getContext(),a=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=y1(t),h=M1(t),g=T1(t),_=w1(t),m=A1(t),x=d1(t),M=f1(a),T=o.createProgram();let y,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Fa).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Fa).join(`
`),S.length>0&&(S+=`
`)):(y=[N_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),S=[N_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?c1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,a1("linearToOutputTexel",t.outputColorSpace),u1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),c=hh(c),c=C_(c,t),c=P_(c,t),d=hh(d),d=C_(d,t),d=P_(d,t),c=L_(c),d=L_(d),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=R+y+c,P=R+S+d,k=w_(o,o.VERTEX_SHADER,L),N=w_(o,o.FRAGMENT_SHADER,P);o.attachShader(T,k),o.attachShader(T,N),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(F){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(T)||"",ce=o.getShaderInfoLog(k)||"",de=o.getShaderInfoLog(N)||"",G=$.trim(),ie=ce.trim(),Y=de.trim();let K=!0,le=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,k,N);else{const ae=R_(o,k,"vertex"),U=R_(o,N,"fragment");nt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+G+`
`+ae+`
`+U)}else G!==""?$e("WebGLProgram: Program Info Log:",G):(ie===""||Y==="")&&(le=!1);le&&(F.diagnostics={runnable:K,programLog:G,vertexShader:{log:ie,prefix:y},fragmentShader:{log:Y,prefix:S}})}o.deleteShader(k),o.deleteShader(N),w=new Nc(o,T),D=h1(o,T)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(T,i1)),X},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=N,this}let C1=0;class P1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L1(e),t.set(e,i)),i}}class L1{constructor(e){this.id=C1++,this.code=e,this.usedTimes=0}}function N1(s){return s===Ps||s===Uc||s===Fc}function I1(s,e,t,i,o,a){const c=new p0,d=new P1,f=new Set,h=[],g=new Map,_=i.logarithmicDepthBuffer;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return f.add(w),w===0?"uv":`uv${w}`}function T(w,D,X,F,$,ce){const de=F.fog,G=$.geometry,ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,Y=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,K=e.get(w.envMap||ie,Y),le=K&&K.mapping===Hc?K.image.height:null,ae=x[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&$e("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const U=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=U!==void 0?U.length:0;let Fe=0;G.morphAttributes.position!==void 0&&(Fe=1),G.morphAttributes.normal!==void 0&&(Fe=2),G.morphAttributes.color!==void 0&&(Fe=3);let He,Ie,oe,ye;if(ae){const ot=Gi[ae];He=ot.vertexShader,Ie=ot.fragmentShader}else He=w.vertexShader,Ie=w.fragmentShader,d.update(w),oe=d.getVertexShaderID(w),ye=d.getFragmentShaderID(w);const me=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Je=$.isInstancedMesh===!0,Qe=$.isBatchedMesh===!0,Vt=!!w.map,ft=!!w.matcap,wt=!!K,Ot=!!w.aoMap,ht=!!w.lightMap,Jt=!!w.bumpMap,Ht=!!w.normalMap,Mn=!!w.displacementMap,V=!!w.emissiveMap,Gt=!!w.metalnessMap,pt=!!w.roughnessMap,Lt=w.anisotropy>0,Le=w.clearcoat>0,Xt=w.dispersion>0,C=w.iridescence>0,E=w.sheen>0,q=w.transmission>0,he=Lt&&!!w.anisotropyMap,ge=Le&&!!w.clearcoatMap,Me=Le&&!!w.clearcoatNormalMap,Pe=Le&&!!w.clearcoatRoughnessMap,ue=C&&!!w.iridescenceMap,pe=C&&!!w.iridescenceThicknessMap,Ue=E&&!!w.sheenColorMap,ke=E&&!!w.sheenRoughnessMap,we=!!w.specularMap,Ee=!!w.specularColorMap,it=!!w.specularIntensityMap,st=q&&!!w.transmissionMap,gt=q&&!!w.thicknessMap,z=!!w.gradientMap,be=!!w.alphaMap,fe=w.alphaTest>0,Oe=!!w.alphaHash,Re=!!w.extensions;let _e=Yi;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=s.toneMapping);const We={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:Ie,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Qe,batchingColor:Qe&&$._colorsTexture!==null,instancing:Je,instancingColor:Je&&$.instanceColor!==null,instancingMorph:Je&&$.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Vt,matcap:ft,envMap:wt,envMapMode:wt&&K.mapping,envMapCubeUVHeight:le,aoMap:Ot,lightMap:ht,bumpMap:Jt,normalMap:Ht,displacementMap:Mn,emissiveMap:V,normalMapObjectSpace:Ht&&w.normalMapType===yS,normalMapTangentSpace:Ht&&w.normalMapType===oh,packedNormalMap:Ht&&w.normalMapType===oh&&N1(w.normalMap.format),metalnessMap:Gt,roughnessMap:pt,anisotropy:Lt,anisotropyMap:he,clearcoat:Le,clearcoatMap:ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:Xt,iridescence:C,iridescenceMap:ue,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:Ue,sheenRoughnessMap:ke,specularMap:we,specularColorMap:Ee,specularIntensityMap:it,transmission:q,transmissionMap:st,thicknessMap:gt,gradientMap:z,opaque:w.transparent===!1&&w.blending===So&&w.alphaToCoverage===!1,alphaMap:be,alphaTest:fe,alphaHash:Oe,combine:w.combine,mapUv:Vt&&M(w.map.channel),aoMapUv:Ot&&M(w.aoMap.channel),lightMapUv:ht&&M(w.lightMap.channel),bumpMapUv:Jt&&M(w.bumpMap.channel),normalMapUv:Ht&&M(w.normalMap.channel),displacementMapUv:Mn&&M(w.displacementMap.channel),emissiveMapUv:V&&M(w.emissiveMap.channel),metalnessMapUv:Gt&&M(w.metalnessMap.channel),roughnessMapUv:pt&&M(w.roughnessMap.channel),anisotropyMapUv:he&&M(w.anisotropyMap.channel),clearcoatMapUv:ge&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Me&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:ke&&M(w.sheenRoughnessMap.channel),specularMapUv:we&&M(w.specularMap.channel),specularColorMapUv:Ee&&M(w.specularColorMap.channel),specularIntensityMapUv:it&&M(w.specularIntensityMap.channel),transmissionMapUv:st&&M(w.transmissionMap.channel),thicknessMapUv:gt&&M(w.thicknessMap.channel),alphaMapUv:be&&M(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ht||Lt),vertexNormals:!!G.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!G.attributes.uv&&(Vt||be),fog:!!de,useFog:w.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||G.attributes.normal===void 0&&Ht===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:De,skinning:$.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Fe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Vt&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===Dt,decodeVideoTextureEmissive:V&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===Dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ji,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=f.has(1),We.vertexUv2s=f.has(2),We.vertexUv3s=f.has(3),f.clear(),We}function y(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const X in w.defines)D.push(X),D.push(w.defines[X]);return w.isRawShaderMaterial===!1&&(S(D,w),R(D,w),D.push(s.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function S(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function R(w,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),D.packedNormalMap&&c.enable(22),D.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),D.numLightProbeGrids>0&&c.enable(22),w.push(c.mask)}function L(w){const D=x[w.type];let X;if(D){const F=Gi[D];X=AM.clone(F.uniforms)}else X=w.uniforms;return X}function P(w,D){let X=g.get(D);return X!==void 0?++X.usedTimes:(X=new R1(s,D,w,o),h.push(X),g.set(D,X)),X}function k(w){if(--w.usedTimes===0){const D=h.indexOf(w);h[D]=h[h.length-1],h.pop(),g.delete(w.cacheKey),w.destroy()}}function N(w){d.remove(w)}function O(){d.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:L,acquireProgram:P,releaseProgram:k,releaseShaderCache:N,programs:h,dispose:O}}function D1(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function i(c){s.delete(c)}function o(c,d,f){s.get(c)[d]=f}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function U1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function I_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function D_(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function d(m,x,M,T,y,S){let R=s[e];return R===void 0?(R={id:m.id,object:m,geometry:x,material:M,materialVariant:c(m),groupOrder:T,renderOrder:m.renderOrder,z:y,group:S},s[e]=R):(R.id=m.id,R.object=m,R.geometry=x,R.material=M,R.materialVariant=c(m),R.groupOrder=T,R.renderOrder=m.renderOrder,R.z=y,R.group=S),e++,R}function f(m,x,M,T,y,S){const R=d(m,x,M,T,y,S);M.transmission>0?i.push(R):M.transparent===!0?o.push(R):t.push(R)}function h(m,x,M,T,y,S){const R=d(m,x,M,T,y,S);M.transmission>0?i.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function g(m,x){t.length>1&&t.sort(m||U1),i.length>1&&i.sort(x||I_),o.length>1&&o.sort(x||I_)}function _(){for(let m=e,x=s.length;m<x;m++){const M=s[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:f,unshift:h,finish:_,sort:g}}function F1(){let s=new WeakMap;function e(i,o){const a=s.get(i);let c;return a===void 0?(c=new D_,s.set(i,[c])):o>=a.length?(c=new D_,a.push(c)):c=a[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function O1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new dt};break;case"SpotLight":t={position:new W,direction:new W,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function k1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let B1=0;function z1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function V1(s){const e=new O1,t=k1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new W);const o=new W,a=new xt,c=new xt;function d(h){let g=0,_=0,m=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let x=0,M=0,T=0,y=0,S=0,R=0,L=0,P=0,k=0,N=0,O=0;h.sort(z1);for(let D=0,X=h.length;D<X;D++){const F=h[D],$=F.color,ce=F.intensity,de=F.distance;let G=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ps?G=F.shadow.map.texture:G=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)g+=$.r*ce,_+=$.g*ce,m+=$.b*ce;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(F.sh.coefficients[ie],ce);O++}else if(F.isDirectionalLight){const ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Y=F.shadow,K=t.get(F);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.directionalShadow[x]=K,i.directionalShadowMap[x]=G,i.directionalShadowMatrix[x]=F.shadow.matrix,R++}i.directional[x]=ie,x++}else if(F.isSpotLight){const ie=e.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy($).multiplyScalar(ce),ie.distance=de,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,i.spot[T]=ie;const Y=F.shadow;if(F.map&&(i.spotLightMap[k]=F.map,k++,Y.updateMatrices(F),F.castShadow&&N++),i.spotLightMatrix[T]=Y.matrix,F.castShadow){const K=t.get(F);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.spotShadow[T]=K,i.spotShadowMap[T]=G,P++}T++}else if(F.isRectAreaLight){const ie=e.get(F);ie.color.copy($).multiplyScalar(ce),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=ie,y++}else if(F.isPointLight){const ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const Y=F.shadow,K=t.get(F);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,i.pointShadow[M]=K,i.pointShadowMap[M]=G,i.pointShadowMatrix[M]=F.shadow.matrix,L++}i.point[M]=ie,M++}else if(F.isHemisphereLight){const ie=e.get(F);ie.skyColor.copy(F.color).multiplyScalar(ce),ie.groundColor.copy(F.groundColor).multiplyScalar(ce),i.hemi[S]=ie,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=_,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==x||w.pointLength!==M||w.spotLength!==T||w.rectAreaLength!==y||w.hemiLength!==S||w.numDirectionalShadows!==R||w.numPointShadows!==L||w.numSpotShadows!==P||w.numSpotMaps!==k||w.numLightProbes!==O)&&(i.directional.length=x,i.spot.length=T,i.rectArea.length=y,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=P+k-N,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=O,w.directionalLength=x,w.pointLength=M,w.spotLength=T,w.rectAreaLength=y,w.hemiLength=S,w.numDirectionalShadows=R,w.numPointShadows=L,w.numSpotShadows=P,w.numSpotMaps=k,w.numLightProbes=O,i.version=B1++)}function f(h,g){let _=0,m=0,x=0,M=0,T=0;const y=g.matrixWorldInverse;for(let S=0,R=h.length;S<R;S++){const L=h[S];if(L.isDirectionalLight){const P=i.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),_++}else if(L.isSpotLight){const P=i.spot[x];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),x++}else if(L.isRectAreaLight){const P=i.rectArea[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),c.identity(),a.copy(L.matrixWorld),a.premultiply(y),c.extractRotation(a),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),m++}else if(L.isHemisphereLight){const P=i.hemi[T];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),T++}}}return{setup:d,setupView:f,state:i}}function U_(s){const e=new V1(s),t=[],i=[],o=[];function a(m){_.camera=m,t.length=0,i.length=0,o.length=0}function c(m){t.push(m)}function d(m){i.push(m)}function f(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const _={lightsArray:t,shadowsArray:i,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:_,setupLights:h,setupLightsView:g,pushLight:c,pushShadow:d,pushLightProbeGrid:f}}function H1(s){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let d;return c===void 0?(d=new U_(s),e.set(o,[d])):a>=c.length?(d=new U_(s),c.push(d)):d=c[a],d}function i(){e=new WeakMap}return{get:t,dispose:i}}const G1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,W1=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],X1=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],F_=new xt,Na=new W,hf=new W;function Y1(s,e,t){let i=new Ih;const o=new at,a=new at,c=new zt,d=new LM,f=new NM,h={},g=t.maxTextureSize,_={[Mr]:qn,[qn]:Mr,[ji]:ji},m=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:G1,fragmentShader:j1}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const M=new gi;M.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ri(M,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let S=this.type;this.render=function(N,O,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===qy&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wc);const D=s.getRenderTarget(),X=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),$=s.state;$.setBlending(yr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ce=S!==this.type;ce&&O.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(G=>G.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,G=N.length;de<G;de++){const ie=N[de],Y=ie.shadow;if(Y===void 0){$e("WebGLShadowMap:",ie,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const K=Y.getFrameExtents();o.multiply(K),a.copy(Y.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(a.x=Math.floor(g/K.x),o.x=a.x*K.x,Y.mapSize.x=a.x),o.y>g&&(a.y=Math.floor(g/K.y),o.y=a.y*K.y,Y.mapSize.y=a.y));const le=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=le,Y.map===null||ce===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Da){if(ie.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ki(o.x,o.y,{format:Ps,type:Er,minFilter:pn,magFilter:pn,generateMipmaps:!1}),Y.map.texture.name=ie.name+".shadowMap",Y.map.depthTexture=new Ro(o.x,o.y,pi),Y.map.depthTexture.name=ie.name+".shadowMapDepth",Y.map.depthTexture.format=Tr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=hn,Y.map.depthTexture.magFilter=hn}else ie.isPointLight?(Y.map=new L0(o.x),Y.map.depthTexture=new bM(o.x,$i)):(Y.map=new Ki(o.x,o.y),Y.map.depthTexture=new Ro(o.x,o.y,$i)),Y.map.depthTexture.name=ie.name+".shadowMap",Y.map.depthTexture.format=Tr,this.type===wc?(Y.map.depthTexture.compareFunction=le?Ah:wh,Y.map.depthTexture.minFilter=pn,Y.map.depthTexture.magFilter=pn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=hn,Y.map.depthTexture.magFilter=hn);Y.camera.updateProjectionMatrix()}const ae=Y.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ae;U++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,U),s.clear();else{U===0&&(s.setRenderTarget(Y.map),s.clear());const ee=Y.getViewport(U);c.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),$.viewport(c)}if(ie.isPointLight){const ee=Y.camera,Fe=Y.matrix,He=ie.distance||ee.far;He!==ee.far&&(ee.far=He,ee.updateProjectionMatrix()),Na.setFromMatrixPosition(ie.matrixWorld),ee.position.copy(Na),hf.copy(ee.position),hf.add(W1[U]),ee.up.copy(X1[U]),ee.lookAt(hf),ee.updateMatrixWorld(),Fe.makeTranslation(-Na.x,-Na.y,-Na.z),F_.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(F_,ee.coordinateSystem,ee.reversedDepth)}else Y.updateMatrices(ie);i=Y.getFrustum(),P(O,w,Y.camera,ie,this.type)}Y.isPointLightShadow!==!0&&this.type===Da&&R(Y,w),Y.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(D,X,F)};function R(N,O){const w=e.update(T);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ki(o.x,o.y,{format:Ps,type:Er})),m.uniforms.shadow_pass.value=N.map.depthTexture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(O,null,w,m,T,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(O,null,w,x,T,null)}function L(N,O,w,D){let X=null;const F=w.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)X=F;else if(X=w.isPointLight===!0?f:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=X.uuid,ce=O.uuid;let de=h[$];de===void 0&&(de={},h[$]=de);let G=de[ce];G===void 0&&(G=X.clone(),de[ce]=G,O.addEventListener("dispose",k)),X=G}if(X.visible=O.visible,X.wireframe=O.wireframe,D===Da?X.side=O.shadowSide!==null?O.shadowSide:O.side:X.side=O.shadowSide!==null?O.shadowSide:_[O.side],X.alphaMap=O.alphaMap,X.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,X.map=O.map,X.clipShadows=O.clipShadows,X.clippingPlanes=O.clippingPlanes,X.clipIntersection=O.clipIntersection,X.displacementMap=O.displacementMap,X.displacementScale=O.displacementScale,X.displacementBias=O.displacementBias,X.wireframeLinewidth=O.wireframeLinewidth,X.linewidth=O.linewidth,w.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const $=s.properties.get(X);$.light=w}return X}function P(N,O,w,D,X){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&X===Da)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,N.matrixWorld);const ce=e.update(N),de=N.material;if(Array.isArray(de)){const G=ce.groups;for(let ie=0,Y=G.length;ie<Y;ie++){const K=G[ie],le=de[K.materialIndex];if(le&&le.visible){const ae=L(N,le,D,X);N.onBeforeShadow(s,N,O,w,ce,ae,K),s.renderBufferDirect(w,null,ce,ae,N,K),N.onAfterShadow(s,N,O,w,ce,ae,K)}}}else if(de.visible){const G=L(N,de,D,X);N.onBeforeShadow(s,N,O,w,ce,G,null),s.renderBufferDirect(w,null,ce,G,N,null),N.onAfterShadow(s,N,O,w,ce,G,null)}}const $=N.children;for(let ce=0,de=$.length;ce<de;ce++)P($[ce],O,w,D,X)}function k(N){N.target.removeEventListener("dispose",k);for(const w in h){const D=h[w],X=N.target.uuid;X in D&&(D[X].dispose(),delete D[X])}}}function K1(s,e){function t(){let z=!1;const be=new zt;let fe=null;const Oe=new zt(0,0,0,0);return{setMask:function(Re){fe!==Re&&!z&&(s.colorMask(Re,Re,Re,Re),fe=Re)},setLocked:function(Re){z=Re},setClear:function(Re,_e,We,ot,Bt){Bt===!0&&(Re*=ot,_e*=ot,We*=ot),be.set(Re,_e,We,ot),Oe.equals(be)===!1&&(s.clearColor(Re,_e,We,ot),Oe.copy(be))},reset:function(){z=!1,fe=null,Oe.set(-1,0,0,0)}}}function i(){let z=!1,be=!1,fe=null,Oe=null,Re=null;return{setReversed:function(_e){if(be!==_e){const We=e.get("EXT_clip_control");_e?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),be=_e;const ot=Re;Re=null,this.setClear(ot)}},getReversed:function(){return be},setTest:function(_e){_e?me(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(_e){fe!==_e&&!z&&(s.depthMask(_e),fe=_e)},setFunc:function(_e){if(be&&(_e=LS[_e]),Oe!==_e){switch(_e){case Mf:s.depthFunc(s.NEVER);break;case Ef:s.depthFunc(s.ALWAYS);break;case Tf:s.depthFunc(s.LESS);break;case To:s.depthFunc(s.LEQUAL);break;case bf:s.depthFunc(s.EQUAL);break;case wf:s.depthFunc(s.GEQUAL);break;case Af:s.depthFunc(s.GREATER);break;case Rf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=_e}},setLocked:function(_e){z=_e},setClear:function(_e){Re!==_e&&(Re=_e,be&&(_e=1-_e),s.clearDepth(_e))},reset:function(){z=!1,fe=null,Oe=null,Re=null,be=!1}}}function o(){let z=!1,be=null,fe=null,Oe=null,Re=null,_e=null,We=null,ot=null,Bt=null;return{setTest:function(At){z||(At?me(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(At){be!==At&&!z&&(s.stencilMask(At),be=At)},setFunc:function(At,In,si){(fe!==At||Oe!==In||Re!==si)&&(s.stencilFunc(At,In,si),fe=At,Oe=In,Re=si)},setOp:function(At,In,si){(_e!==At||We!==In||ot!==si)&&(s.stencilOp(At,In,si),_e=At,We=In,ot=si)},setLocked:function(At){z=At},setClear:function(At){Bt!==At&&(s.clearStencil(At),Bt=At)},reset:function(){z=!1,be=null,fe=null,Oe=null,Re=null,_e=null,We=null,ot=null,Bt=null}}}const a=new t,c=new i,d=new o,f=new WeakMap,h=new WeakMap;let g={},_={},m={},x=new WeakMap,M=[],T=null,y=!1,S=null,R=null,L=null,P=null,k=null,N=null,O=null,w=new dt(0,0,0),D=0,X=!1,F=null,$=null,ce=null,de=null,G=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,K=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(le)[1]),Y=K>=1):le.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),Y=K>=2);let ae=null,U={};const ee=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),He=new zt().fromArray(ee),Ie=new zt().fromArray(Fe);function oe(z,be,fe,Oe){const Re=new Uint8Array(4),_e=s.createTexture();s.bindTexture(z,_e),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<fe;We++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(be+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return _e}const ye={};ye[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),d.setClear(0),me(s.DEPTH_TEST),c.setFunc(To),Jt(!1),Ht(vg),me(s.CULL_FACE),Ot(yr);function me(z){g[z]!==!0&&(s.enable(z),g[z]=!0)}function De(z){g[z]!==!1&&(s.disable(z),g[z]=!1)}function Je(z,be){return m[z]!==be?(s.bindFramebuffer(z,be),m[z]=be,z===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=be),z===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Qe(z,be){let fe=M,Oe=!1;if(z){fe=x.get(be),fe===void 0&&(fe=[],x.set(be,fe));const Re=z.textures;if(fe.length!==Re.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,We=Re.length;_e<We;_e++)fe[_e]=s.COLOR_ATTACHMENT0+_e;fe.length=Re.length,Oe=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(fe)}function Vt(z){return T!==z?(s.useProgram(z),T=z,!0):!1}const ft={[Ts]:s.FUNC_ADD,[Zy]:s.FUNC_SUBTRACT,[Jy]:s.FUNC_REVERSE_SUBTRACT};ft[Qy]=s.MIN,ft[eS]=s.MAX;const wt={[tS]:s.ZERO,[nS]:s.ONE,[iS]:s.SRC_COLOR,[yf]:s.SRC_ALPHA,[cS]:s.SRC_ALPHA_SATURATE,[aS]:s.DST_COLOR,[sS]:s.DST_ALPHA,[rS]:s.ONE_MINUS_SRC_COLOR,[Sf]:s.ONE_MINUS_SRC_ALPHA,[lS]:s.ONE_MINUS_DST_COLOR,[oS]:s.ONE_MINUS_DST_ALPHA,[uS]:s.CONSTANT_COLOR,[dS]:s.ONE_MINUS_CONSTANT_COLOR,[fS]:s.CONSTANT_ALPHA,[hS]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(z,be,fe,Oe,Re,_e,We,ot,Bt,At){if(z===yr){y===!0&&(De(s.BLEND),y=!1);return}if(y===!1&&(me(s.BLEND),y=!0),z!==$y){if(z!==S||At!==X){if((R!==Ts||k!==Ts)&&(s.blendEquation(s.FUNC_ADD),R=Ts,k=Ts),At)switch(z){case So:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xg:s.blendFunc(s.ONE,s.ONE);break;case yg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:nt("WebGLState: Invalid blending: ",z);break}else switch(z){case So:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yg:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sg:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",z);break}L=null,P=null,N=null,O=null,w.set(0,0,0),D=0,S=z,X=At}return}Re=Re||be,_e=_e||fe,We=We||Oe,(be!==R||Re!==k)&&(s.blendEquationSeparate(ft[be],ft[Re]),R=be,k=Re),(fe!==L||Oe!==P||_e!==N||We!==O)&&(s.blendFuncSeparate(wt[fe],wt[Oe],wt[_e],wt[We]),L=fe,P=Oe,N=_e,O=We),(ot.equals(w)===!1||Bt!==D)&&(s.blendColor(ot.r,ot.g,ot.b,Bt),w.copy(ot),D=Bt),S=z,X=!1}function ht(z,be){z.side===ji?De(s.CULL_FACE):me(s.CULL_FACE);let fe=z.side===qn;be&&(fe=!fe),Jt(fe),z.blending===So&&z.transparent===!1?Ot(yr):Ot(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),a.setMask(z.colorWrite);const Oe=z.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),V(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(z){F!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),F=z)}function Ht(z){z!==Yy?(me(s.CULL_FACE),z!==$&&(z===vg?s.cullFace(s.BACK):z===Ky?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),$=z}function Mn(z){z!==ce&&(Y&&s.lineWidth(z),ce=z)}function V(z,be,fe){z?(me(s.POLYGON_OFFSET_FILL),(de!==be||G!==fe)&&(de=be,G=fe,c.getReversed()&&(be=-be),s.polygonOffset(be,fe))):De(s.POLYGON_OFFSET_FILL)}function Gt(z){z?me(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function pt(z){z===void 0&&(z=s.TEXTURE0+ie-1),ae!==z&&(s.activeTexture(z),ae=z)}function Lt(z,be,fe){fe===void 0&&(ae===null?fe=s.TEXTURE0+ie-1:fe=ae);let Oe=U[fe];Oe===void 0&&(Oe={type:void 0,texture:void 0},U[fe]=Oe),(Oe.type!==z||Oe.texture!==be)&&(ae!==fe&&(s.activeTexture(fe),ae=fe),s.bindTexture(z,be||ye[z]),Oe.type=z,Oe.texture=be)}function Le(){const z=U[ae];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Xt(){try{s.compressedTexImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function E(){try{s.texSubImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function q(){try{s.texSubImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function Me(){try{s.texStorage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function Pe(){try{s.texStorage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function ue(){try{s.texImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function pe(){try{s.texImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function Ue(z){return _[z]!==void 0?_[z]:s.getParameter(z)}function ke(z,be){_[z]!==be&&(s.pixelStorei(z,be),_[z]=be)}function we(z){He.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),He.copy(z))}function Ee(z){Ie.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Ie.copy(z))}function it(z,be){let fe=h.get(be);fe===void 0&&(fe=new WeakMap,h.set(be,fe));let Oe=fe.get(z);Oe===void 0&&(Oe=s.getUniformBlockIndex(be,z.name),fe.set(z,Oe))}function st(z,be){const Oe=h.get(be).get(z);f.get(be)!==Oe&&(s.uniformBlockBinding(be,Oe,z.__bindingPointIndex),f.set(be,Oe))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},ae=null,U={},m={},x=new WeakMap,M=[],T=null,y=!1,S=null,R=null,L=null,P=null,k=null,N=null,O=null,w=new dt(0,0,0),D=0,X=!1,F=null,$=null,ce=null,de=null,G=null,He.set(0,0,s.canvas.width,s.canvas.height),Ie.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),d.reset()}return{buffers:{color:a,depth:c,stencil:d},enable:me,disable:De,bindFramebuffer:Je,drawBuffers:Qe,useProgram:Vt,setBlending:Ot,setMaterial:ht,setFlipSided:Jt,setCullFace:Ht,setLineWidth:Mn,setPolygonOffset:V,setScissorTest:Gt,activeTexture:pt,bindTexture:Lt,unbindTexture:Le,compressedTexImage2D:Xt,compressedTexImage3D:C,texImage2D:ue,texImage3D:pe,pixelStorei:ke,getParameter:Ue,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:q,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:we,viewport:Ee,reset:gt}}function q1(s,e,t,i,o,a,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new at,g=new WeakMap,_=new Set;let m;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(C,E){return M?new OffscreenCanvas(C,E):Wa("canvas")}function y(C,E,q){let he=1;const ge=Xt(C);if((ge.width>q||ge.height>q)&&(he=q/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Me=Math.floor(he*ge.width),Pe=Math.floor(he*ge.height);m===void 0&&(m=T(Me,Pe));const ue=E?T(Me,Pe):m;return ue.width=Me,ue.height=Pe,ue.getContext("2d").drawImage(C,0,0,Me,Pe),$e("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Me+"x"+Pe+")."),ue}else return"data"in C&&$e("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),C;return C}function S(C){return C.generateMipmaps}function R(C){s.generateMipmap(C)}function L(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(C,E,q,he,ge,Me=!1){if(C!==null){if(s[C]!==void 0)return s[C];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Pe;he&&(Pe=e.get("EXT_texture_norm16"),Pe||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=E;if(E===s.RED&&(q===s.FLOAT&&(ue=s.R32F),q===s.HALF_FLOAT&&(ue=s.R16F),q===s.UNSIGNED_BYTE&&(ue=s.R8),q===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.R16_EXT),q===s.SHORT&&Pe&&(ue=Pe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.R8UI),q===s.UNSIGNED_SHORT&&(ue=s.R16UI),q===s.UNSIGNED_INT&&(ue=s.R32UI),q===s.BYTE&&(ue=s.R8I),q===s.SHORT&&(ue=s.R16I),q===s.INT&&(ue=s.R32I)),E===s.RG&&(q===s.FLOAT&&(ue=s.RG32F),q===s.HALF_FLOAT&&(ue=s.RG16F),q===s.UNSIGNED_BYTE&&(ue=s.RG8),q===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RG16_EXT),q===s.SHORT&&Pe&&(ue=Pe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RG8UI),q===s.UNSIGNED_SHORT&&(ue=s.RG16UI),q===s.UNSIGNED_INT&&(ue=s.RG32UI),q===s.BYTE&&(ue=s.RG8I),q===s.SHORT&&(ue=s.RG16I),q===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),q===s.UNSIGNED_INT&&(ue=s.RGB32UI),q===s.BYTE&&(ue=s.RGB8I),q===s.SHORT&&(ue=s.RGB16I),q===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),q===s.UNSIGNED_INT&&(ue=s.RGBA32UI),q===s.BYTE&&(ue=s.RGBA8I),q===s.SHORT&&(ue=s.RGBA16I),q===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGB16_EXT),q===s.SHORT&&Pe&&(ue=Pe.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),E===s.RGBA){const pe=Me?Oc:Et.getTransfer(ge);q===s.FLOAT&&(ue=s.RGBA32F),q===s.HALF_FLOAT&&(ue=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ue=pe===Dt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGBA16_EXT),q===s.SHORT&&Pe&&(ue=Pe.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function k(C,E){let q;return C?E===null||E===$i||E===Va?q=s.DEPTH24_STENCIL8:E===pi?q=s.DEPTH32F_STENCIL8:E===za&&(q=s.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$i||E===Va?q=s.DEPTH_COMPONENT24:E===pi?q=s.DEPTH_COMPONENT32F:E===za&&(q=s.DEPTH_COMPONENT16),q}function N(C,E){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function O(C){const E=C.target;E.removeEventListener("dispose",O),D(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function w(C){const E=C.target;E.removeEventListener("dispose",w),F(E)}function D(C){const E=i.get(C);if(E.__webglInit===void 0)return;const q=C.source,he=x.get(q);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&X(C),Object.keys(he).length===0&&x.delete(q)}i.remove(C)}function X(C){const E=i.get(C);s.deleteTexture(E.__webglTexture);const q=C.source,he=x.get(q);delete he[E.__cacheKey],c.memory.textures--}function F(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)s.deleteFramebuffer(E.__webglFramebuffer[he]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=C.textures;for(let he=0,ge=q.length;he<ge;he++){const Me=i.get(q[he]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),c.memory.textures--),i.remove(q[he])}i.remove(C)}let $=0;function ce(){$=0}function de(){return $}function G(C){$=C}function ie(){const C=$;return C>=o.maxTextures&&$e("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),$+=1,C}function Y(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function K(C,E){const q=i.get(C);if(C.isVideoTexture&&Lt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){const he=C.image;if(he===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{De(q,C,E);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function le(C,E){const q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){De(q,C,E);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function ae(C,E){const q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){De(q,C,E);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function U(C,E){const q=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&q.__version!==C.version){Je(q,C,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const ee={[wo]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[Dc]:s.MIRRORED_REPEAT},Fe={[hn]:s.NEAREST,[i0]:s.NEAREST_MIPMAP_NEAREST,[Ua]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[Ac]:s.LINEAR_MIPMAP_NEAREST,[vr]:s.LINEAR_MIPMAP_LINEAR},He={[SS]:s.NEVER,[wS]:s.ALWAYS,[MS]:s.LESS,[wh]:s.LEQUAL,[ES]:s.EQUAL,[Ah]:s.GEQUAL,[TS]:s.GREATER,[bS]:s.NOTEQUAL};function Ie(C,E){if(E.type===pi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pn||E.magFilter===Ac||E.magFilter===Ua||E.magFilter===vr||E.minFilter===pn||E.minFilter===Ac||E.minFilter===Ua||E.minFilter===vr)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ee[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ee[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ee[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Fe[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Fe[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hn||E.minFilter!==Ua&&E.minFilter!==vr||E.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function oe(C,E){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",O));const he=E.source;let ge=x.get(he);ge===void 0&&(ge={},x.set(he,ge));const Me=Y(E);if(Me!==C.__cacheKey){ge[Me]===void 0&&(ge[Me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,q=!0),ge[Me].usedTimes++;const Pe=ge[C.__cacheKey];Pe!==void 0&&(ge[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&X(E)),C.__cacheKey=Me,C.__webglTexture=ge[Me].texture}return q}function ye(C,E,q){return Math.floor(Math.floor(C/q)/E)}function me(C,E,q,he){const Me=C.updateRanges;if(Me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,he,E.data);else{Me.sort((ke,we)=>ke.start-we.start);let Pe=0;for(let ke=1;ke<Me.length;ke++){const we=Me[Pe],Ee=Me[ke],it=we.start+we.count,st=ye(Ee.start,E.width,4),gt=ye(we.start,E.width,4);Ee.start<=it+1&&st===gt&&ye(Ee.start+Ee.count-1,E.width,4)===st?we.count=Math.max(we.count,Ee.start+Ee.count-we.start):(++Pe,Me[Pe]=Ee)}Me.length=Pe+1;const ue=t.getParameter(s.UNPACK_ROW_LENGTH),pe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ue=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ke=0,we=Me.length;ke<we;ke++){const Ee=Me[ke],it=Math.floor(Ee.start/4),st=Math.ceil(Ee.count/4),gt=it%E.width,z=Math.floor(it/E.width),be=st,fe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),t.pixelStorei(s.UNPACK_SKIP_ROWS,z),t.texSubImage2D(s.TEXTURE_2D,0,gt,z,be,fe,q,he,E.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ue),t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function De(C,E,q){let he=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=s.TEXTURE_3D);const ge=oe(C,E),Me=E.source;t.bindTexture(he,C.__webglTexture,s.TEXTURE0+q);const Pe=i.get(Me);if(Me.version!==Pe.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const fe=Et.getPrimaries(Et.workingColorSpace),Oe=E.colorSpace===Qr?null:Et.getPrimaries(E.colorSpace),Re=E.colorSpace===Qr||fe===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=y(E.image,!1,o.maxTextureSize);pe=Le(E,pe);const Ue=a.convert(E.format,E.colorSpace),ke=a.convert(E.type);let we=P(E.internalFormat,Ue,ke,E.normalized,E.colorSpace,E.isVideoTexture);Ie(he,E);let Ee;const it=E.mipmaps,st=E.isVideoTexture!==!0,gt=Pe.__version===void 0||ge===!0,z=Me.dataReady,be=N(E,pe);if(E.isDepthTexture)we=k(E.format===ws,E.type),gt&&(st?t.texStorage2D(s.TEXTURE_2D,1,we,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,we,pe.width,pe.height,0,Ue,ke,null));else if(E.isDataTexture)if(it.length>0){st&&gt&&t.texStorage2D(s.TEXTURE_2D,be,we,it[0].width,it[0].height);for(let fe=0,Oe=it.length;fe<Oe;fe++)Ee=it[fe],st?z&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Ue,ke,Ee.data):t.texImage2D(s.TEXTURE_2D,fe,we,Ee.width,Ee.height,0,Ue,ke,Ee.data);E.generateMipmaps=!1}else st?(gt&&t.texStorage2D(s.TEXTURE_2D,be,we,pe.width,pe.height),z&&me(E,pe,Ue,ke)):t.texImage2D(s.TEXTURE_2D,0,we,pe.width,pe.height,0,Ue,ke,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,we,it[0].width,it[0].height,pe.depth);for(let fe=0,Oe=it.length;fe<Oe;fe++)if(Ee=it[fe],E.format!==mi)if(Ue!==null)if(st){if(z)if(E.layerUpdates.size>0){const Re=h_(Ee.width,Ee.height,E.format,E.type);for(const _e of E.layerUpdates){const We=Ee.data.subarray(_e*Re/Ee.data.BYTES_PER_ELEMENT,(_e+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,_e,Ee.width,Ee.height,1,Ue,We)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,pe.depth,Ue,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,we,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,pe.depth,Ue,ke,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,we,Ee.width,Ee.height,pe.depth,0,Ue,ke,Ee.data)}else{st&&gt&&t.texStorage2D(s.TEXTURE_2D,be,we,it[0].width,it[0].height);for(let fe=0,Oe=it.length;fe<Oe;fe++)Ee=it[fe],E.format!==mi?Ue!==null?st?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Ue,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,we,Ee.width,Ee.height,0,Ee.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?z&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Ue,ke,Ee.data):t.texImage2D(s.TEXTURE_2D,fe,we,Ee.width,Ee.height,0,Ue,ke,Ee.data)}else if(E.isDataArrayTexture)if(st){if(gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,we,pe.width,pe.height,pe.depth),z)if(E.layerUpdates.size>0){const fe=h_(pe.width,pe.height,E.format,E.type);for(const Oe of E.layerUpdates){const Re=pe.data.subarray(Oe*fe/pe.data.BYTES_PER_ELEMENT,(Oe+1)*fe/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,pe.width,pe.height,1,Ue,ke,Re)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,ke,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,pe.width,pe.height,pe.depth,0,Ue,ke,pe.data);else if(E.isData3DTexture)st?(gt&&t.texStorage3D(s.TEXTURE_3D,be,we,pe.width,pe.height,pe.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,ke,pe.data)):t.texImage3D(s.TEXTURE_3D,0,we,pe.width,pe.height,pe.depth,0,Ue,ke,pe.data);else if(E.isFramebufferTexture){if(gt)if(st)t.texStorage2D(s.TEXTURE_2D,be,we,pe.width,pe.height);else{let fe=pe.width,Oe=pe.height;for(let Re=0;Re<be;Re++)t.texImage2D(s.TEXTURE_2D,Re,we,fe,Oe,0,Ue,ke,null),fe>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const fe=s.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),pe.parentNode!==fe){fe.appendChild(pe),_.add(E),fe.onpaint=ot=>{const Bt=ot.changedElements;for(const At of _)Bt.includes(At.image)&&(At.needsUpdate=!0)},fe.requestPaint();return}const Oe=0,Re=s.RGBA,_e=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Oe,Re,_e,We,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(st&&gt){const fe=Xt(it[0]);t.texStorage2D(s.TEXTURE_2D,be,we,fe.width,fe.height)}for(let fe=0,Oe=it.length;fe<Oe;fe++)Ee=it[fe],st?z&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ue,ke,Ee):t.texImage2D(s.TEXTURE_2D,fe,we,Ue,ke,Ee);E.generateMipmaps=!1}else if(st){if(gt){const fe=Xt(pe);t.texStorage2D(s.TEXTURE_2D,be,we,fe.width,fe.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,ke,pe)}else t.texImage2D(s.TEXTURE_2D,0,we,Ue,ke,pe);S(E)&&R(he),Pe.__version=Me.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Je(C,E,q){if(E.image.length!==6)return;const he=oe(C,E),ge=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+q);const Me=i.get(ge);if(ge.version!==Me.__version||he===!0){t.activeTexture(s.TEXTURE0+q);const Pe=Et.getPrimaries(Et.workingColorSpace),ue=E.colorSpace===Qr?null:Et.getPrimaries(E.colorSpace),pe=E.colorSpace===Qr||Pe===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,we=[];for(let _e=0;_e<6;_e++)!Ue&&!ke?we[_e]=y(E.image[_e],!0,o.maxCubemapSize):we[_e]=ke?E.image[_e].image:E.image[_e],we[_e]=Le(E,we[_e]);const Ee=we[0],it=a.convert(E.format,E.colorSpace),st=a.convert(E.type),gt=P(E.internalFormat,it,st,E.normalized,E.colorSpace),z=E.isVideoTexture!==!0,be=Me.__version===void 0||he===!0,fe=ge.dataReady;let Oe=N(E,Ee);Ie(s.TEXTURE_CUBE_MAP,E);let Re;if(Ue){z&&be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,gt,Ee.width,Ee.height);for(let _e=0;_e<6;_e++){Re=we[_e].mipmaps;for(let We=0;We<Re.length;We++){const ot=Re[We];E.format!==mi?it!==null?z?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,ot.width,ot.height,it,ot.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,gt,ot.width,ot.height,0,ot.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,ot.width,ot.height,it,st,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,gt,ot.width,ot.height,0,it,st,ot.data)}}}else{if(Re=E.mipmaps,z&&be){Re.length>0&&Oe++;const _e=Xt(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,gt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ke){z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,we[_e].width,we[_e].height,it,st,we[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,we[_e].width,we[_e].height,0,it,st,we[_e].data);for(let We=0;We<Re.length;We++){const Bt=Re[We].image[_e].image;z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,Bt.width,Bt.height,it,st,Bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,gt,Bt.width,Bt.height,0,it,st,Bt.data)}}else{z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,it,st,we[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,it,st,we[_e]);for(let We=0;We<Re.length;We++){const ot=Re[We];z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,it,st,ot.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,gt,it,st,ot.image[_e])}}}S(E)&&R(s.TEXTURE_CUBE_MAP),Me.__version=ge.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Qe(C,E,q,he,ge,Me){const Pe=a.convert(q.format,q.colorSpace),ue=a.convert(q.type),pe=P(q.internalFormat,Pe,ue,q.normalized,q.colorSpace),Ue=i.get(E),ke=i.get(q);if(ke.__renderTarget=E,!Ue.__hasExternalTextures){const we=Math.max(1,E.width>>Me),Ee=Math.max(1,E.height>>Me);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Me,pe,we,Ee,E.depth,0,Pe,ue,null):t.texImage2D(ge,Me,pe,we,Ee,0,Pe,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),pt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,ke.__webglTexture,0,Gt(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,ke.__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(C,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer){const he=E.depthTexture,ge=he&&he.isDepthTexture?he.type:null,Me=k(E.stencilBuffer,ge),Pe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(E),Me,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(E),Me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Me,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,C)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const Me=he[ge],Pe=a.convert(Me.format,Me.colorSpace),ue=a.convert(Me.type),pe=P(Me.internalFormat,Pe,ue,Me.normalized,Me.colorSpace);pt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(E),pe,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(E),pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(C,E,q){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=i.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ue=a.convert(E.depthTexture.format),ke=a.convert(E.depthTexture.type);let we;E.depthTexture.format===Tr?we=s.DEPTH_COMPONENT24:E.depthTexture.format===ws&&(we=s.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,we,E.width,E.height,0,Ue,ke,null)}}else K(E.depthTexture,0);const Me=ge.__webglTexture,Pe=Gt(E),ue=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,pe=E.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Tr)pt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ue,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ue,Me,0);else if(E.depthTexture.format===ws)pt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ue,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ue,Me,0);else throw new Error("Unknown depthTexture format")}function wt(C){const E=i.get(C),q=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const he=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=he}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let he=0;he<6;he++)ft(E.__webglFramebuffer[he],C,he);else{const he=C.texture.mipmaps;he&&he.length>0?ft(E.__webglFramebuffer[0],C,0):ft(E.__webglFramebuffer,C,0)}else if(q){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=s.createRenderbuffer(),Vt(E.__webglDepthbuffer[he],C,!1);else{const ge=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}else{const he=C.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Vt(E.__webglDepthbuffer,C,!1);else{const ge=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(C,E,q){const he=i.get(C);E!==void 0&&Qe(he.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&wt(C)}function ht(C){const E=C.texture,q=i.get(C),he=i.get(E);C.addEventListener("dispose",w);const ge=C.textures,Me=C.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=E.version,c.memory.textures++),Me){q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ue]=[];for(let pe=0;pe<E.mipmaps.length;pe++)q.__webglFramebuffer[ue][pe]=s.createFramebuffer()}else q.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)q.__webglFramebuffer[ue]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let ue=0,pe=ge.length;ue<pe;ue++){const Ue=i.get(ge[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),c.memory.textures++)}if(C.samples>0&&pt(C)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ue=0;ue<ge.length;ue++){const pe=ge[ue];q.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[ue]);const Ue=a.convert(pe.format,pe.colorSpace),ke=a.convert(pe.type),we=P(pe.internalFormat,Ue,ke,pe.normalized,pe.colorSpace,C.isXRRenderTarget===!0),Ee=Gt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,we,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,q.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Qe(q.__webglFramebuffer[ue][pe],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else Qe(q.__webglFramebuffer[ue],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(E)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ue=0,pe=ge.length;ue<pe;ue++){const Ue=ge[ue],ke=i.get(Ue);let we=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(we=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,ke.__webglTexture),Ie(we,Ue),Qe(q.__webglFramebuffer,C,Ue,s.COLOR_ATTACHMENT0+ue,we,0),S(Ue)&&R(we)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,he.__webglTexture),Ie(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Qe(q.__webglFramebuffer[pe],C,E,s.COLOR_ATTACHMENT0,ue,pe);else Qe(q.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,ue,0);S(E)&&R(ue),t.unbindTexture()}C.depthBuffer&&wt(C)}function Jt(C){const E=C.textures;for(let q=0,he=E.length;q<he;q++){const ge=E[q];if(S(ge)){const Me=L(C),Pe=i.get(ge).__webglTexture;t.bindTexture(Me,Pe),R(Me),t.unbindTexture()}}}const Ht=[],Mn=[];function V(C){if(C.samples>0){if(pt(C)===!1){const E=C.textures,q=C.width,he=C.height;let ge=s.COLOR_BUFFER_BIT;const Me=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=i.get(C),ue=E.length>1;if(ue)for(let Ue=0;Ue<E.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const pe=C.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const ke=i.get(E[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ke,0)}s.blitFramebuffer(0,0,q,he,0,0,q,he,ge,s.NEAREST),f===!0&&(Ht.length=0,Mn.length=0,Ht.push(s.COLOR_ATTACHMENT0+Ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ht.push(Me),Mn.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ue=0;Ue<E.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const ke=i.get(E[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&f){const E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Gt(C){return Math.min(o.maxSamples,C.samples)}function pt(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(C){const E=c.render.frame;g.get(C)!==E&&(g.set(C,E),C.update())}function Le(C,E){const q=C.colorSpace,he=C.format,ge=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==ii&&q!==Qr&&(Et.getTransfer(q)===Dt?(he!==mi||ge!==ni)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",q)),E}function Xt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=ie,this.resetTextureUnits=ce,this.getTextureUnits=de,this.setTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=le,this.setTexture3D=ae,this.setTextureCube=U,this.rebindTextures=Ot,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $1(s,e){function t(i,o=Qr){let a;const c=Et.getTransfer(o);if(i===ni)return s.UNSIGNED_BYTE;if(i===yh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Sh)return s.UNSIGNED_SHORT_5_5_5_1;if(i===o0)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===a0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===r0)return s.BYTE;if(i===s0)return s.SHORT;if(i===za)return s.UNSIGNED_SHORT;if(i===xh)return s.INT;if(i===$i)return s.UNSIGNED_INT;if(i===pi)return s.FLOAT;if(i===Er)return s.HALF_FLOAT;if(i===l0)return s.ALPHA;if(i===c0)return s.RGB;if(i===mi)return s.RGBA;if(i===Tr)return s.DEPTH_COMPONENT;if(i===ws)return s.DEPTH_STENCIL;if(i===Mh)return s.RED;if(i===Eh)return s.RED_INTEGER;if(i===Ps)return s.RG;if(i===Th)return s.RG_INTEGER;if(i===bh)return s.RGBA_INTEGER;if(i===Rc||i===Cc||i===Pc||i===Lc)if(c===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Rc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Rc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cf||i===Pf||i===Lf||i===Nf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Cf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===If||i===Df||i===Uf||i===Ff||i===Of||i===Uc||i===kf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===If||i===Df)return c===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Uf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ff)return a.COMPRESSED_R11_EAC;if(i===Of)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Uc)return a.COMPRESSED_RG11_EAC;if(i===kf)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bf||i===zf||i===Vf||i===Hf||i===Gf||i===jf||i===Wf||i===Xf||i===Yf||i===Kf||i===qf||i===$f||i===Zf||i===Jf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Bf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$f)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qf||i===eh||i===th)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Qf)return c===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===th)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nh||i===ih||i===Fc||i===rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===nh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Va?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const Z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new M0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Zi({vertexShader:Z1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new Gc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends ns{constructor(e,t){super();const i=this;let o=null,a=1,c=null,d="local-floor",f=1,h=null,g=null,_=null,m=null,x=null,M=null;const T=typeof XRWebGLBinding<"u",y=new Q1,S={},R=t.getContextAttributes();let L=null,P=null;const k=[],N=[],O=new at;let w=null;const D=new kn;D.viewport=new zt;const X=new kn;X.viewport=new zt;const F=[D,X],$=new eE;let ce=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ye=k[oe];return ye===void 0&&(ye=new Bd,k[oe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(oe){let ye=k[oe];return ye===void 0&&(ye=new Bd,k[oe]=ye),ye.getGripSpace()},this.getHand=function(oe){let ye=k[oe];return ye===void 0&&(ye=new Bd,k[oe]=ye),ye.getHandSpace()};function G(oe){const ye=N.indexOf(oe.inputSource);if(ye===-1)return;const me=k[ye];me!==void 0&&(me.update(oe.inputSource,oe.frame,h||c),me.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ie(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",Y);for(let oe=0;oe<k.length;oe++){const ye=N[oe];ye!==null&&(N[oe]=null,k[oe].disconnect(ye))}ce=null,de=null,y.reset();for(const oe in S)delete S[oe];e.setRenderTarget(L),x=null,m=null,_=null,o=null,P=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){d=oe,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",Y),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,De=null,Je=null;R.depth&&(Je=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=R.stencil?ws:Tr,De=R.stencil?Va:$i);const Qe={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:a};_=this.getBinding(),m=_.createProjectionLayer(Qe),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new Ki(m.textureWidth,m.textureHeight,{format:mi,type:ni,depthTexture:new Ro(m.textureWidth,m.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new Ki(x.framebufferWidth,x.framebufferHeight,{format:mi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(d),Ie.setContext(o),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(oe){for(let ye=0;ye<oe.removed.length;ye++){const me=oe.removed[ye],De=N.indexOf(me);De>=0&&(N[De]=null,k[De].disconnect(me))}for(let ye=0;ye<oe.added.length;ye++){const me=oe.added[ye];let De=N.indexOf(me);if(De===-1){for(let Qe=0;Qe<k.length;Qe++)if(Qe>=N.length){N.push(me),De=Qe;break}else if(N[Qe]===null){N[Qe]=me,De=Qe;break}if(De===-1)break}const Je=k[De];Je&&Je.connect(me)}}const K=new W,le=new W;function ae(oe,ye,me){K.setFromMatrixPosition(ye.matrixWorld),le.setFromMatrixPosition(me.matrixWorld);const De=K.distanceTo(le),Je=ye.projectionMatrix.elements,Qe=me.projectionMatrix.elements,Vt=Je[14]/(Je[10]-1),ft=Je[14]/(Je[10]+1),wt=(Je[9]+1)/Je[5],Ot=(Je[9]-1)/Je[5],ht=(Je[8]-1)/Je[0],Jt=(Qe[8]+1)/Qe[0],Ht=Vt*ht,Mn=Vt*Jt,V=De/(-ht+Jt),Gt=V*-ht;if(ye.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Gt),oe.translateZ(V),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Je[10]===-1)oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const pt=Vt+V,Lt=ft+V,Le=Ht-Gt,Xt=Mn+(De-Gt),C=wt*ft/Lt*pt,E=Ot*ft/Lt*pt;oe.projectionMatrix.makePerspective(Le,Xt,C,E,pt,Lt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function U(oe,ye){ye===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ye.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let ye=oe.near,me=oe.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(me=y.depthFar)),$.near=X.near=D.near=ye,$.far=X.far=D.far=me,(ce!==$.near||de!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),ce=$.near,de=$.far),$.layers.mask=oe.layers.mask|6,D.layers.mask=$.layers.mask&-5,X.layers.mask=$.layers.mask&-3;const De=oe.parent,Je=$.cameras;U($,De);for(let Qe=0;Qe<Je.length;Qe++)U(Je[Qe],De);Je.length===2?ae($,D,X):$.projectionMatrix.copy(D.projectionMatrix),ee(oe,$,De)};function ee(oe,ye,me){me===null?oe.matrix.copy(ye.matrixWorld):(oe.matrix.copy(me.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ye.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Ao*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(m===null&&x===null))return f},this.setFoveation=function(oe){f=oe,m!==null&&(m.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(oe){return S[oe]};let Fe=null;function He(oe,ye){if(g=ye.getViewerPose(h||c),M=ye,g!==null){const me=g.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let De=!1;me.length!==$.cameras.length&&($.cameras.length=0,De=!0);for(let ft=0;ft<me.length;ft++){const wt=me[ft];let Ot=null;if(x!==null)Ot=x.getViewport(wt);else{const Jt=_.getViewSubImage(m,wt);Ot=Jt.viewport,ft===0&&(e.setRenderTargetTextures(P,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(P))}let ht=F[ft];ht===void 0&&(ht=new kn,ht.layers.enable(ft),ht.viewport=new zt,F[ft]=ht),ht.matrix.fromArray(wt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(wt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),ft===0&&($.matrix.copy(ht.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),De===!0&&$.cameras.push(ht)}const Je=o.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){_=i.getBinding();const ft=_.getDepthInformation(me[0]);ft&&ft.isValid&&ft.texture&&y.init(ft,o.renderState)}if(Je&&Je.includes("camera-access")&&T){e.state.unbindTexture(),_=i.getBinding();for(let ft=0;ft<me.length;ft++){const wt=me[ft].camera;if(wt){let Ot=S[wt];Ot||(Ot=new M0,S[wt]=Ot);const ht=_.getCameraImage(wt);Ot.sourceTexture=ht}}}}for(let me=0;me<k.length;me++){const De=N[me],Je=k[me];De!==null&&Je!==void 0&&Je.update(De,ye,h||c)}Fe&&Fe(oe,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),M=null}const Ie=new C0;Ie.setAnimationLoop(He),this.setAnimationLoop=function(oe){Fe=oe},this.dispose=function(){}}}const tA=new xt,F0=new ut;F0.set(-1,0,0,0,1,0,0,0,1);function nA(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,E0(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,R,L,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),_(y,S)):S.isMeshPhongMaterial?(a(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),m(y,S),S.isMeshPhysicalMaterial&&x(y,S,P)):S.isMeshMatcapMaterial?(a(y,S),M(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),T(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?f(y,S,R,L):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===qn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===qn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),L=R.envMap,P=R.envMapRotation;L&&(y.envMap.value=L,y.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(P)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(F0),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,R,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=L*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function iA(s,e,t,i){let o={},a={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,L){const P=L.program;i.uniformBlockBinding(R,P)}function h(R,L){let P=o[R.id];P===void 0&&(M(R),P=g(R),o[R.id]=P,R.addEventListener("dispose",y));const k=L.program;i.updateUBOMapping(R,k);const N=e.render.frame;a[R.id]!==N&&(m(R),a[R.id]=N)}function g(R){const L=_();R.__bindingPointIndex=L;const P=s.createBuffer(),k=R.__size,N=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,k,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function _(){for(let R=0;R<d;R++)if(c.indexOf(R)===-1)return c.push(R),R;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const L=o[R.id],P=R.uniforms,k=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let N=0,O=P.length;N<O;N++){const w=Array.isArray(P[N])?P[N]:[P[N]];for(let D=0,X=w.length;D<X;D++){const F=w[D];if(x(F,N,D,k)===!0){const $=F.__offset,ce=Array.isArray(F.value)?F.value:[F.value];let de=0;for(let G=0;G<ce.length;G++){const ie=ce[G],Y=T(ie);typeof ie=="number"||typeof ie=="boolean"?(F.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,$+de,F.__data)):ie.isMatrix3?(F.__data[0]=ie.elements[0],F.__data[1]=ie.elements[1],F.__data[2]=ie.elements[2],F.__data[3]=0,F.__data[4]=ie.elements[3],F.__data[5]=ie.elements[4],F.__data[6]=ie.elements[5],F.__data[7]=0,F.__data[8]=ie.elements[6],F.__data[9]=ie.elements[7],F.__data[10]=ie.elements[8],F.__data[11]=0):ArrayBuffer.isView(ie)?F.__data.set(new ie.constructor(ie.buffer,ie.byteOffset,F.__data.length)):(ie.toArray(F.__data,de),de+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(R,L,P,k){const N=R.value,O=L+"_"+P;if(k[O]===void 0)return typeof N=="number"||typeof N=="boolean"?k[O]=N:ArrayBuffer.isView(N)?k[O]=N.slice():k[O]=N.clone(),!0;{const w=k[O];if(typeof N=="number"||typeof N=="boolean"){if(w!==N)return k[O]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(w.equals(N)===!1)return w.copy(N),!0}}return!1}function M(R){const L=R.uniforms;let P=0;const k=16;for(let O=0,w=L.length;O<w;O++){const D=Array.isArray(L[O])?L[O]:[L[O]];for(let X=0,F=D.length;X<F;X++){const $=D[X],ce=Array.isArray($.value)?$.value:[$.value];for(let de=0,G=ce.length;de<G;de++){const ie=ce[de],Y=T(ie),K=P%k,le=K%Y.boundary,ae=K+le;P+=le,ae!==0&&k-ae<Y.storage&&(P+=k-ae),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=P,P+=Y.storage}}}const N=P%k;return N>0&&(P+=k-N),R.__size=P,R.__cache={},this}function T(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(L.boundary=16,L.storage=R.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",R),L}function y(R){const L=R.target;L.removeEventListener("dispose",y);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function S(){for(const R in o)s.deleteBuffer(o[R]);c=[],o={},a={}}return{bind:f,update:h,dispose:S}}const rA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function sA(){return Vi===null&&(Vi=new Lh(rA,16,16,Ps,Er),Vi.name="DFG_LUT",Vi.minFilter=pn,Vi.magFilter=pn,Vi.wrapS=Wi,Vi.wrapT=Wi,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class oA{constructor(e={}){const{canvas:t=CS(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:x=ni}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const T=x,y=new Set([bh,Th,Eh]),S=new Set([ni,$i,za,Va,yh,Sh]),R=new Uint32Array(4),L=new Int32Array(4),P=new W;let k=null,N=null;const O=[],w=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let F=!1,$=null;this._outputColorSpace=wn;let ce=0,de=0,G=null,ie=-1,Y=null;const K=new zt,le=new zt;let ae=null;const U=new dt(0);let ee=0,Fe=t.width,He=t.height,Ie=1,oe=null,ye=null;const me=new zt(0,0,Fe,He),De=new zt(0,0,Fe,He);let Je=!1;const Qe=new Ih;let Vt=!1,ft=!1;const wt=new xt,Ot=new W,ht=new zt,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function Mn(){return G===null?Ie:1}let V=i;function Gt(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:a,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_h}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ot,!1),V===null){const j="webgl2";if(V=Gt(j,A),V===null)throw Gt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw nt("WebGLRenderer: "+A.message),A}let pt,Lt,Le,Xt,C,E,q,he,ge,Me,Pe,ue,pe,Ue,ke,we,Ee,it,st,gt,z,be,fe;function Oe(){pt=new sw(V),pt.init(),z=new $1(V,pt),Lt=new Zb(V,pt,e,z),Le=new K1(V,pt),Lt.reversedDepthBuffer&&m&&Le.buffers.depth.setReversed(!0),Xt=new lw(V),C=new D1,E=new q1(V,pt,Le,C,Lt,z,Xt),q=new rw(X),he=new fE(V),be=new qb(V,he),ge=new ow(V,he,Xt,be),Me=new uw(V,ge,he,be,Xt),it=new cw(V,Lt,E),ke=new Jb(C),Pe=new I1(X,q,pt,Lt,be,ke),ue=new nA(X,C),pe=new F1,Ue=new H1(pt),Ee=new Kb(X,q,Le,Me,M,f),we=new Y1(X,Me,Lt),fe=new iA(V,Xt,Lt,Le),st=new $b(V,pt,Xt),gt=new aw(V,pt,Xt),Xt.programs=Pe.programs,X.capabilities=Lt,X.extensions=pt,X.properties=C,X.renderLists=pe,X.shadowMap=we,X.state=Le,X.info=Xt}Oe(),T!==ni&&(D=new fw(T,t.width,t.height,o,a));const Re=new eA(X,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(A){A!==void 0&&(Ie=A,this.setSize(Fe,He,!1))},this.getSize=function(A){return A.set(Fe,He)},this.setSize=function(A,j,re=!0){if(Re.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=A,He=j,t.width=Math.floor(A*Ie),t.height=Math.floor(j*Ie),re===!0&&(t.style.width=A+"px",t.style.height=j+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(Fe*Ie,He*Ie).floor()},this.setDrawingBufferSize=function(A,j,re){Fe=A,He=j,Ie=re,t.width=Math.floor(A*re),t.height=Math.floor(j*re),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(T===ni){nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){$e("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,j,re,te){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,j,re,te),Le.viewport(K.copy(me).multiplyScalar(Ie).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,j,re,te){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,j,re,te),Le.scissor(le.copy(De).multiplyScalar(Ie).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(A){Le.setScissorTest(Je=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,re=!0){let te=0;if(A){let Q=!1;if(G!==null){const Ce=G.texture.format;Q=y.has(Ce)}if(Q){const Ce=G.texture.type,Ve=S.has(Ce),Ae=Ee.getClearColor(),Xe=Ee.getClearAlpha(),Ze=Ae.r,lt=Ae.g,ct=Ae.b;Ve?(R[0]=Ze,R[1]=lt,R[2]=ct,R[3]=Xe,V.clearBufferuiv(V.COLOR,0,R)):(L[0]=Ze,L[1]=lt,L[2]=ct,L[3]=Xe,V.clearBufferiv(V.COLOR,0,L))}else te|=V.COLOR_BUFFER_BIT}j&&(te|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),Ee.dispose(),pe.dispose(),Ue.dispose(),C.dispose(),q.dispose(),Me.dispose(),be.dispose(),fe.dispose(),Pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",is),Re.removeEventListener("sessionend",Ns),nr.stop()};function _e(A){A.preventDefault(),kc("WebGLRenderer: Context Lost."),F=!0}function We(){kc("WebGLRenderer: Context Restored."),F=!1;const A=Xt.autoReset,j=we.enabled,re=we.autoUpdate,te=we.needsUpdate,Q=we.type;Oe(),Xt.autoReset=A,we.enabled=j,we.autoUpdate=re,we.needsUpdate=te,we.type=Q}function ot(A){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bt(A){const j=A.target;j.removeEventListener("dispose",Bt),At(j)}function At(A){In(A),C.remove(A)}function In(A){const j=C.get(A).programs;j!==void 0&&(j.forEach(function(re){Pe.releaseProgram(re)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,re,te,Q,Ce){j===null&&(j=Jt);const Ve=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=$a(A,j,re,te,Q);Le.setMaterial(te,Ve);let Xe=re.index,Ze=1;if(te.wireframe===!0){if(Xe=ge.getWireframeAttribute(re),Xe===void 0)return;Ze=2}const lt=re.drawRange,ct=re.attributes.position;let Ke=lt.start*Ze,Tt=(lt.start+lt.count)*Ze;Ce!==null&&(Ke=Math.max(Ke,Ce.start*Ze),Tt=Math.min(Tt,(Ce.start+Ce.count)*Ze)),Xe!==null?(Ke=Math.max(Ke,0),Tt=Math.min(Tt,Xe.count)):ct!=null&&(Ke=Math.max(Ke,0),Tt=Math.min(Tt,ct.count));const jt=Tt-Ke;if(jt<0||jt===1/0)return;be.setup(Q,te,Ae,re,Xe);let $t,Nt=st;if(Xe!==null&&($t=he.get(Xe),Nt=gt,Nt.setIndex($t)),Q.isMesh)te.wireframe===!0?(Le.setLineWidth(te.wireframeLinewidth*Mn()),Nt.setMode(V.LINES)):Nt.setMode(V.TRIANGLES);else if(Q.isLine){let an=te.linewidth;an===void 0&&(an=1),Le.setLineWidth(an*Mn()),Q.isLineSegments?Nt.setMode(V.LINES):Q.isLineLoop?Nt.setMode(V.LINE_LOOP):Nt.setMode(V.LINE_STRIP)}else Q.isPoints?Nt.setMode(V.POINTS):Q.isSprite&&Nt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const an=Q._multiDrawStarts,Be=Q._multiDrawCounts,En=Q._multiDrawCount,_t=Xe?he.get(Xe).bytesPerElement:1,zn=C.get(te).currentProgram.getUniforms();for(let Vn=0;Vn<En;Vn++)zn.setValue(V,"_gl_DrawID",Vn),Nt.render(an[Vn]/_t,Be[Vn])}else if(Q.isInstancedMesh)Nt.renderInstances(Ke,jt,Q.count);else if(re.isInstancedBufferGeometry){const an=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Be=Math.min(re.instanceCount,an);Nt.renderInstances(Ke,jt,Be)}else Nt.render(Ke,jt)};function si(A,j,re){A.transparent===!0&&A.side===ji&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Is(A,j,re),A.side=Mr,A.needsUpdate=!0,Is(A,j,re),A.side=ji):Is(A,j,re)}this.compile=function(A,j,re=null){re===null&&(re=A),N=Ue.get(re),N.init(j),w.push(N),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(N.pushLight(Q),Q.castShadow&&N.pushShadow(Q))}),A!==re&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(N.pushLight(Q),Q.castShadow&&N.pushShadow(Q))}),N.setupLights();const te=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Ve=0;Ve<Ce.length;Ve++){const Ae=Ce[Ve];si(Ae,re,Q),te.add(Ae)}else si(Ce,re,Q),te.add(Ce)}),N=w.pop(),te},this.compileAsync=function(A,j,re=null){const te=this.compile(A,j,re);return new Promise(Q=>{function Ce(){if(te.forEach(function(Ve){C.get(Ve).currentProgram.isReady()&&te.delete(Ve)}),te.size===0){Q(A);return}setTimeout(Ce,10)}pt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let tr=null;function Ls(A){tr&&tr(A)}function is(){nr.stop()}function Ns(){nr.start()}const nr=new C0;nr.setAnimationLoop(Ls),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(A){tr=A,Re.setAnimationLoop(A),A===null?nr.stop():nr.start()},Re.addEventListener("sessionstart",is),Re.addEventListener("sessionend",Ns),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;$!==null&&$.renderStart(A,j);const re=Re.enabled===!0&&Re.isPresenting===!0,te=D!==null&&(G===null||re)&&D.begin(X,G);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(j),j=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,j,G),N=Ue.get(A,w.length),N.init(j),N.state.textureUnits=E.getTextureUnits(),w.push(N),wt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Qe.setFromProjectionMatrix(wt,Xi,j.reversedDepth),ft=this.localClippingEnabled,Vt=ke.init(this.clippingPlanes,ft),k=pe.get(A,O.length),k.init(),O.push(k),Re.enabled===!0&&Re.isPresenting===!0){const Ve=X.xr.getDepthSensingMesh();Ve!==null&&zo(Ve,j,-1/0,X.sortObjects)}zo(A,j,0,X.sortObjects),k.finish(),X.sortObjects===!0&&k.sort(oe,ye),Ht=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Ht&&Ee.addToRenderList(k,A),this.info.render.frame++,Vt===!0&&ke.beginShadows();const Q=N.state.shadowsArray;if(we.render(Q,A,j),Vt===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&D.hasRenderPass())===!1){const Ve=k.opaque,Ae=k.transmissive;if(N.setupLights(),j.isArrayCamera){const Xe=j.cameras;if(Ae.length>0)for(let Ze=0,lt=Xe.length;Ze<lt;Ze++){const ct=Xe[Ze];Di(Ve,Ae,A,ct)}Ht&&Ee.render(A);for(let Ze=0,lt=Xe.length;Ze<lt;Ze++){const ct=Xe[Ze];Ka(k,A,ct,ct.viewport)}}else Ae.length>0&&Di(Ve,Ae,A,j),Ht&&Ee.render(A),Ka(k,A,j)}G!==null&&de===0&&(E.updateMultisampleRenderTarget(G),E.updateRenderTargetMipmap(G)),te&&D.end(X),A.isScene===!0&&A.onAfterRender(X,A,j),be.resetDefaultState(),ie=-1,Y=null,w.pop(),w.length>0?(N=w[w.length-1],E.setTextureUnits(N.state.textureUnits),Vt===!0&&ke.setGlobalState(X.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?k=O[O.length-1]:k=null,$!==null&&$.renderEnd()};function zo(A,j,re,te){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qe.intersectsSprite(A)){te&&ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(wt);const Ve=Me.update(A),Ae=A.material;Ae.visible&&k.push(A,Ve,Ae,re,ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qe.intersectsObject(A))){const Ve=Me.update(A),Ae=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ht.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ht.copy(Ve.boundingSphere.center)),ht.applyMatrix4(A.matrixWorld).applyMatrix4(wt)),Array.isArray(Ae)){const Xe=Ve.groups;for(let Ze=0,lt=Xe.length;Ze<lt;Ze++){const ct=Xe[Ze],Ke=Ae[ct.materialIndex];Ke&&Ke.visible&&k.push(A,Ve,Ke,re,ht.z,ct)}}else Ae.visible&&k.push(A,Ve,Ae,re,ht.z,null)}}const Ce=A.children;for(let Ve=0,Ae=Ce.length;Ve<Ae;Ve++)zo(Ce[Ve],j,re,te)}function Ka(A,j,re,te){const{opaque:Q,transmissive:Ce,transparent:Ve}=A;N.setupLightsView(re),Vt===!0&&ke.setGlobalState(X.clippingPlanes,re),te&&Le.viewport(K.copy(te)),Q.length>0&&rs(Q,j,re),Ce.length>0&&rs(Ce,j,re),Ve.length>0&&rs(Ve,j,re),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Di(A,j,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[te.id]===void 0){const Ke=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[te.id]=new Ki(1,1,{generateMipmaps:!0,type:Ke?Er:ni,minFilter:vr,samples:Math.max(4,Lt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ce=N.state.transmissionRenderTarget[te.id],Ve=te.viewport||K;Ce.setSize(Ve.z*X.transmissionResolutionScale,Ve.w*X.transmissionResolutionScale);const Ae=X.getRenderTarget(),Xe=X.getActiveCubeFace(),Ze=X.getActiveMipmapLevel();X.setRenderTarget(Ce),X.getClearColor(U),ee=X.getClearAlpha(),ee<1&&X.setClearColor(16777215,.5),X.clear(),Ht&&Ee.render(re);const lt=X.toneMapping;X.toneMapping=Yi;const ct=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),N.setupLightsView(te),Vt===!0&&ke.setGlobalState(X.clippingPlanes,te),rs(A,re,te),E.updateMultisampleRenderTarget(Ce),E.updateRenderTargetMipmap(Ce),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Tt=0,jt=j.length;Tt<jt;Tt++){const $t=j[Tt],{object:Nt,geometry:an,material:Be,group:En}=$t;if(Be.side===ji&&Nt.layers.test(te.layers)){const _t=Be.side;Be.side=qn,Be.needsUpdate=!0,Vo(Nt,re,te,an,Be,En),Be.side=_t,Be.needsUpdate=!0,Ke=!0}}Ke===!0&&(E.updateMultisampleRenderTarget(Ce),E.updateRenderTargetMipmap(Ce))}X.setRenderTarget(Ae,Xe,Ze),X.setClearColor(U,ee),ct!==void 0&&(te.viewport=ct),X.toneMapping=lt}function rs(A,j,re){const te=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Ce=A.length;Q<Ce;Q++){const Ve=A[Q],{object:Ae,geometry:Xe,group:Ze}=Ve;let lt=Ve.material;lt.allowOverride===!0&&te!==null&&(lt=te),Ae.layers.test(re.layers)&&Vo(Ae,j,re,Xe,lt,Ze)}}function Vo(A,j,re,te,Q,Ce){A.onBeforeRender(X,j,re,te,Q,Ce),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(X,j,re,te,A,Ce),Q.transparent===!0&&Q.side===ji&&Q.forceSinglePass===!1?(Q.side=qn,Q.needsUpdate=!0,X.renderBufferDirect(re,j,te,Q,A,Ce),Q.side=Mr,Q.needsUpdate=!0,X.renderBufferDirect(re,j,te,Q,A,Ce),Q.side=ji):X.renderBufferDirect(re,j,te,Q,A,Ce),A.onAfterRender(X,j,re,te,Q,Ce)}function Is(A,j,re){j.isScene!==!0&&(j=Jt);const te=C.get(A),Q=N.state.lights,Ce=N.state.shadowsArray,Ve=Q.state.version,Ae=Pe.getParameters(A,Q.state,Ce,j,re,N.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(Ae);let Ze=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,te.fog=j.fog;const lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=q.get(A.envMap||te.environment,lt),te.envMapRotation=te.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",Bt),Ze=new Map,te.programs=Ze);let ct=Ze.get(Xe);if(ct!==void 0){if(te.currentProgram===ct&&te.lightsStateVersion===Ve)return Go(A,Ae),ct}else Ae.uniforms=Pe.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,re,Ae),A.onBeforeCompile(Ae,X),ct=Pe.acquireProgram(Ae,Xe),Ze.set(Xe,ct),te.uniforms=Ae.uniforms;const Ke=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=ke.uniform),Go(A,Ae),te.needsLights=$c(A),te.lightsStateVersion=Ve,te.needsLights&&(Ke.ambientLightColor.value=Q.state.ambient,Ke.lightProbe.value=Q.state.probe,Ke.directionalLights.value=Q.state.directional,Ke.directionalLightShadows.value=Q.state.directionalShadow,Ke.spotLights.value=Q.state.spot,Ke.spotLightShadows.value=Q.state.spotShadow,Ke.rectAreaLights.value=Q.state.rectArea,Ke.ltc_1.value=Q.state.rectAreaLTC1,Ke.ltc_2.value=Q.state.rectAreaLTC2,Ke.pointLights.value=Q.state.point,Ke.pointLightShadows.value=Q.state.pointShadow,Ke.hemisphereLights.value=Q.state.hemi,Ke.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ke.spotLightMatrix.value=Q.state.spotLightMatrix,Ke.spotLightMap.value=Q.state.spotLightMap,Ke.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.lightProbeGrid=N.state.lightProbeGridArray.length>0,te.currentProgram=ct,te.uniformsList=null,ct}function Ho(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Nc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Go(A,j){const re=C.get(A);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.batchingColor=j.batchingColor,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function qa(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(j.matrixWorld);for(let re=0,te=A.length;re<te;re++){const Q=A[re];if(Q.texture!==null&&Q.boundingBox.containsPoint(P))return Q}return null}function $a(A,j,re,te,Q){j.isScene!==!0&&(j=Jt),E.resetTextureUnits();const Ce=j.fog,Ve=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?j.environment:null,Ae=G===null?X.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Et.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ze=q.get(te.envMap||Ve,Xe),lt=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ct=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!re.morphAttributes.position,Tt=!!re.morphAttributes.normal,jt=!!re.morphAttributes.color;let $t=Yi;te.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($t=X.toneMapping);const Nt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,an=Nt!==void 0?Nt.length:0,Be=C.get(te),En=N.state.lights;if(Vt===!0&&(ft===!0||A!==Y)){const It=A===Y&&te.id===ie;ke.setState(te,A,It)}let _t=!1;te.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==En.state.version||Be.outputColorSpace!==Ae||Q.isBatchedMesh&&Be.batching===!1||!Q.isBatchedMesh&&Be.batching===!0||Q.isBatchedMesh&&Be.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Be.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Be.instancing===!1||!Q.isInstancedMesh&&Be.instancing===!0||Q.isSkinnedMesh&&Be.skinning===!1||!Q.isSkinnedMesh&&Be.skinning===!0||Q.isInstancedMesh&&Be.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Be.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Be.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Be.instancingMorph===!1&&Q.morphTexture!==null||Be.envMap!==Ze||te.fog===!0&&Be.fog!==Ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ke.numPlanes||Be.numIntersection!==ke.numIntersection)||Be.vertexAlphas!==lt||Be.vertexTangents!==ct||Be.morphTargets!==Ke||Be.morphNormals!==Tt||Be.morphColors!==jt||Be.toneMapping!==$t||Be.morphTargetsCount!==an||!!Be.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Be.__version=te.version);let zn=Be.currentProgram;_t===!0&&(zn=Is(te,j,Q),$&&te.isNodeMaterial&&$.onUpdateProgram(te,zn,Be));let Vn=!1,yt=!1,ir=!1;const Pt=zn.getUniforms(),Yt=Be.uniforms;if(Le.useProgram(zn.program)&&(Vn=!0,yt=!0,ir=!0),te.id!==ie&&(ie=te.id,yt=!0),Be.needsLights){const It=qa(N.state.lightProbeGridArray,Q);Be.lightProbeGrid!==It&&(Be.lightProbeGrid=It,yt=!0)}if(Vn||Y!==A){Le.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(V,"projectionMatrix",A.projectionMatrix),Pt.setValue(V,"viewMatrix",A.matrixWorldInverse);const vi=Pt.map.cameraPosition;vi!==void 0&&vi.setValue(V,Ot.setFromMatrixPosition(A.matrixWorld)),Lt.logarithmicDepthBuffer&&Pt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Pt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,yt=!0,ir=!0)}if(Be.needsLights&&(En.state.directionalShadowMap.length>0&&Pt.setValue(V,"directionalShadowMap",En.state.directionalShadowMap,E),En.state.spotShadowMap.length>0&&Pt.setValue(V,"spotShadowMap",En.state.spotShadowMap,E),En.state.pointShadowMap.length>0&&Pt.setValue(V,"pointShadowMap",En.state.pointShadowMap,E)),Q.isSkinnedMesh){Pt.setOptional(V,Q,"bindMatrix"),Pt.setOptional(V,Q,"bindMatrixInverse");const It=Q.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Pt.setValue(V,"boneTexture",It.boneTexture,E))}Q.isBatchedMesh&&(Pt.setOptional(V,Q,"batchingTexture"),Pt.setValue(V,"batchingTexture",Q._matricesTexture,E),Pt.setOptional(V,Q,"batchingIdTexture"),Pt.setValue(V,"batchingIdTexture",Q._indirectTexture,E),Pt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Pt.setValue(V,"batchingColorTexture",Q._colorsTexture,E));const _i=re.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&it.update(Q,re,zn),(yt||Be.receiveShadow!==Q.receiveShadow)&&(Be.receiveShadow=Q.receiveShadow,Pt.setValue(V,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&j.environment!==null&&(Yt.envMapIntensity.value=j.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=sA()),yt){if(Pt.setValue(V,"toneMappingExposure",X.toneMappingExposure),Be.needsLights&&qc(Yt,ir),Ce&&te.fog===!0&&ue.refreshFogUniforms(Yt,Ce),ue.refreshMaterialUniforms(Yt,te,Ie,He,N.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.lightProbeGrid){const It=Be.lightProbeGrid;Yt.probesSH.value=It.texture,Yt.probesMin.value.copy(It.boundingBox.min),Yt.probesMax.value.copy(It.boundingBox.max),Yt.probesResolution.value.copy(It.resolution)}Nc.upload(V,Ho(Be),Yt,E)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Nc.upload(V,Ho(Be),Yt,E),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Pt.setValue(V,"center",Q.center),Pt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Pt.setValue(V,"normalMatrix",Q.normalMatrix),Pt.setValue(V,"modelMatrix",Q.matrixWorld),te.uniformsGroups!==void 0){const It=te.uniformsGroups;for(let vi=0,Ui=It.length;vi<Ui;vi++){const ss=It[vi];fe.update(ss,zn),fe.bind(ss,zn)}}return zn}function qc(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function $c(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,j,re){const te=C.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),C.get(A.texture).__webglTexture=j,C.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const re=C.get(A);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0};const Qt=V.createFramebuffer();this.setRenderTarget=function(A,j=0,re=0){G=A,ce=j,de=re;let te=null,Q=!1,Ce=!1;if(A){const Ae=C.get(A);if(Ae.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(V.FRAMEBUFFER,Ae.__webglFramebuffer),K.copy(A.viewport),le.copy(A.scissor),ae=A.scissorTest,Le.viewport(K),Le.scissor(le),Le.setScissorTest(ae),ie=-1;return}else if(Ae.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ae.__hasExternalTextures)E.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const lt=A.depthTexture;if(Ae.__boundDepthTexture!==lt){if(lt!==null&&C.has(lt)&&(A.width!==lt.image.width||A.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Ze=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[j])?te=Ze[j][re]:te=Ze[j],Q=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?te=C.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?te=Ze[re]:te=Ze,K.copy(A.viewport),le.copy(A.scissor),ae=A.scissorTest}else K.copy(me).multiplyScalar(Ie).floor(),le.copy(De).multiplyScalar(Ie).floor(),ae=Je;if(re!==0&&(te=Qt),Le.bindFramebuffer(V.FRAMEBUFFER,te)&&Le.drawBuffers(A,te),Le.viewport(K),Le.scissor(le),Le.setScissorTest(ae),Q){const Ae=C.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae.__webglTexture,re)}else if(Ce){const Ae=j;for(let Xe=0;Xe<A.textures.length;Xe++){const Ze=C.get(A.textures[Xe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,re,Ae)}}else if(A!==null&&re!==0){const Ae=C.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,re)}ie=-1},this.readRenderTargetPixels=function(A,j,re,te,Q,Ce,Ve,Ae=0){if(!(A&&A.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){Le.bindFramebuffer(V.FRAMEBUFFER,Xe);try{const Ze=A.textures[Ae],lt=Ze.format,ct=Ze.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),!Lt.textureFormatReadable(lt)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(ct)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-te&&re>=0&&re<=A.height-Q&&V.readPixels(j,re,te,Q,z.convert(lt),z.convert(ct),Ce)}finally{const Ze=G!==null?C.get(G).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,j,re,te,Q,Ce,Ve,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(j>=0&&j<=A.width-te&&re>=0&&re<=A.height-Q){Le.bindFramebuffer(V.FRAMEBUFFER,Xe);const Ze=A.textures[Ae],lt=Ze.format,ct=Ze.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),!Lt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),V.readPixels(j,re,te,Q,z.convert(lt),z.convert(ct),0);const Tt=G!==null?C.get(G).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,Tt);const jt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await PS(V,jt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.deleteBuffer(Ke),V.deleteSync(jt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,re=0){const te=Math.pow(2,-re),Q=Math.floor(A.image.width*te),Ce=Math.floor(A.image.height*te),Ve=j!==null?j.x:0,Ae=j!==null?j.y:0;E.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Ve,Ae,Q,Ce),Le.unbindTexture()};const Zc=V.createFramebuffer(),jo=V.createFramebuffer();this.copyTextureToTexture=function(A,j,re=null,te=null,Q=0,Ce=0){let Ve,Ae,Xe,Ze,lt,ct,Ke,Tt,jt;const $t=A.isCompressedTexture?A.mipmaps[Ce]:A.image;if(re!==null)Ve=re.max.x-re.min.x,Ae=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,Ze=re.min.x,lt=re.min.y,ct=re.isBox3?re.min.z:0;else{const Yt=Math.pow(2,-Q);Ve=Math.floor($t.width*Yt),Ae=Math.floor($t.height*Yt),A.isDataArrayTexture?Xe=$t.depth:A.isData3DTexture?Xe=Math.floor($t.depth*Yt):Xe=1,Ze=0,lt=0,ct=0}te!==null?(Ke=te.x,Tt=te.y,jt=te.z):(Ke=0,Tt=0,jt=0);const Nt=z.convert(j.format),an=z.convert(j.type);let Be;j.isData3DTexture?(E.setTexture3D(j,0),Be=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(E.setTexture2DArray(j,0),Be=V.TEXTURE_2D_ARRAY):(E.setTexture2D(j,0),Be=V.TEXTURE_2D),Le.activeTexture(V.TEXTURE0),Le.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),Le.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Le.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const En=Le.getParameter(V.UNPACK_ROW_LENGTH),_t=Le.getParameter(V.UNPACK_IMAGE_HEIGHT),zn=Le.getParameter(V.UNPACK_SKIP_PIXELS),Vn=Le.getParameter(V.UNPACK_SKIP_ROWS),yt=Le.getParameter(V.UNPACK_SKIP_IMAGES);Le.pixelStorei(V.UNPACK_ROW_LENGTH,$t.width),Le.pixelStorei(V.UNPACK_IMAGE_HEIGHT,$t.height),Le.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),Le.pixelStorei(V.UNPACK_SKIP_ROWS,lt),Le.pixelStorei(V.UNPACK_SKIP_IMAGES,ct);const ir=A.isDataArrayTexture||A.isData3DTexture,Pt=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const Yt=C.get(A),_i=C.get(j),It=C.get(Yt.__renderTarget),vi=C.get(_i.__renderTarget);Le.bindFramebuffer(V.READ_FRAMEBUFFER,It.__webglFramebuffer),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Ui=0;Ui<Xe;Ui++)ir&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,C.get(A).__webglTexture,Q,ct+Ui),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,C.get(j).__webglTexture,Ce,jt+Ui)),V.blitFramebuffer(Ze,lt,Ve,Ae,Ke,Tt,Ve,Ae,V.DEPTH_BUFFER_BIT,V.NEAREST);Le.bindFramebuffer(V.READ_FRAMEBUFFER,null),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||C.has(A)){const Yt=C.get(A),_i=C.get(j);Le.bindFramebuffer(V.READ_FRAMEBUFFER,Zc),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,jo);for(let It=0;It<Xe;It++)ir?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.__webglTexture,Q,ct+It):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Yt.__webglTexture,Q),Pt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,_i.__webglTexture,Ce,jt+It):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,_i.__webglTexture,Ce),Q!==0?V.blitFramebuffer(Ze,lt,Ve,Ae,Ke,Tt,Ve,Ae,V.COLOR_BUFFER_BIT,V.NEAREST):Pt?V.copyTexSubImage3D(Be,Ce,Ke,Tt,jt+It,Ze,lt,Ve,Ae):V.copyTexSubImage2D(Be,Ce,Ke,Tt,Ze,lt,Ve,Ae);Le.bindFramebuffer(V.READ_FRAMEBUFFER,null),Le.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Be,Ce,Ke,Tt,jt,Ve,Ae,Xe,Nt,an,$t.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Be,Ce,Ke,Tt,jt,Ve,Ae,Xe,Nt,$t.data):V.texSubImage3D(Be,Ce,Ke,Tt,jt,Ve,Ae,Xe,Nt,an,$t):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ce,Ke,Tt,Ve,Ae,Nt,an,$t.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ce,Ke,Tt,$t.width,$t.height,Nt,$t.data):V.texSubImage2D(V.TEXTURE_2D,Ce,Ke,Tt,Ve,Ae,Nt,an,$t);Le.pixelStorei(V.UNPACK_ROW_LENGTH,En),Le.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t),Le.pixelStorei(V.UNPACK_SKIP_PIXELS,zn),Le.pixelStorei(V.UNPACK_SKIP_ROWS,Vn),Le.pixelStorei(V.UNPACK_SKIP_IMAGES,yt),Ce===0&&j.generateMipmaps&&V.generateMipmap(Be),Le.unbindTexture()},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){ce=0,de=0,G=null,Le.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}function O_(s,e){if(e===vS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===sh||e===u0){let t=s.getIndex();if(t===null){const c=[],d=s.getAttribute("position");if(d!==void 0){for(let f=0;f<d.count;f++)c.push(f);s.setIndex(c),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,o=[];if(e===sh)for(let c=1;c<=i;c++)o.push(t.getX(0)),o.push(t.getX(c)),o.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(o.push(t.getX(c)),o.push(t.getX(c+1)),o.push(t.getX(c+2))):(o.push(t.getX(c+2)),o.push(t.getX(c+1)),o.push(t.getX(c)));o.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(o),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function aA(s){const e=new Map,t=new Map,i=s.clone();return O0(s,i,function(o,a){e.set(a,o),t.set(o,a)}),i.traverse(function(o){if(!o.isSkinnedMesh)return;const a=o,c=e.get(o),d=c.skeleton.bones;a.skeleton=c.skeleton.clone(),a.bindMatrix.copy(c.bindMatrix),a.skeleton.bones=d.map(function(f){return t.get(f)}),a.bind(a.skeleton,a.bindMatrix)}),i}function O0(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)O0(s.children[i],e.children[i],t)}class lA extends ko{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hA(t)}),this.register(function(t){return new pA(t)}),this.register(function(t){return new EA(t)}),this.register(function(t){return new TA(t)}),this.register(function(t){return new bA(t)}),this.register(function(t){return new gA(t)}),this.register(function(t){return new _A(t)}),this.register(function(t){return new vA(t)}),this.register(function(t){return new xA(t)}),this.register(function(t){return new fA(t)}),this.register(function(t){return new yA(t)}),this.register(function(t){return new mA(t)}),this.register(function(t){return new MA(t)}),this.register(function(t){return new SA(t)}),this.register(function(t){return new uA(t)}),this.register(function(t){return new k_(t,Mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new k_(t,Mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new wA(t)})}load(e,t,i,o){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=Ba.extractUrlBase(e);c=Ba.resolveURL(h,this.path)}else c=Ba.extractUrlBase(e);this.manager.itemStart(e);const d=function(h){o?o(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},f=new w0(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{a.parse(h,c,function(g){t(g),a.manager.itemEnd(e)},d)}catch(g){d(g)}},i,d)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,o){let a;const c={},d={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===k0){try{c[Mt.KHR_BINARY_GLTF]=new AA(e)}catch(_){o&&o(_);return}a=JSON.parse(c[Mt.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new zA(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](h);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),d[_.name]=_,c[_.name]=!0}if(a.extensionsUsed)for(let g=0;g<a.extensionsUsed.length;++g){const _=a.extensionsUsed[g],m=a.extensionsRequired||[];switch(_){case Mt.KHR_MATERIALS_UNLIT:c[_]=new dA;break;case Mt.KHR_DRACO_MESH_COMPRESSION:c[_]=new RA(a,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:c[_]=new CA;break;case Mt.KHR_MESH_QUANTIZATION:c[_]=new PA;break;default:m.indexOf(_)>=0&&d[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}h.setExtensions(c),h.setPlugins(d),h.parse(i,o)}parseAsync(e,t){const i=this;return new Promise(function(o,a){i.parse(e,t,o,a)})}}function cA(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function on(s,e,t){const i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class uA{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,o=t.length;i<o;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let o=t.cache.get(i);if(o)return o;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const g=new dt(16777215);f.color!==void 0&&g.setRGB(f.color[0],f.color[1],f.color[2],ii);const _=f.range!==void 0?f.range:0;switch(f.type){case"directional":h=new R0(g),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new dh(g),h.distance=_;break;case"spot":h=new KM(g),h.distance=_,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,h.angle=f.spot.outerConeAngle,h.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return h.position.set(0,0,0),Hi(h,f),f.intensity!==void 0&&(h.intensity=f.intensity),h.name=t.createUniqueName(f.name||"light_"+e),o=Promise.resolve(h),t.cache.add(i,o),o}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],d=(a.extensions&&a.extensions[this.name]||{}).light;return d===void 0?null:this._loadLight(d).then(function(f){return i._getNodeRef(t.cache,d,f)})}}class dA{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rs}extendParams(e,t,i){const o=[];e.color=new dt(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],ii),e.opacity=c[3]}a.baseColorTexture!==void 0&&o.push(i.assignTexture(e,"map",a.baseColorTexture,wn))}return Promise.all(o)}}class fA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class hA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return on(this.parser,e,this.name)!==null?er:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&o.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(o.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new at(a,a)}return Promise.all(o)}}class pA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?er:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class mA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return on(this.parser,e,this.name)!==null?er:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&o.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&o.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(o)}}class gA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return on(this.parser,e,this.name)!==null?er:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];if(t.sheenColor=new dt(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ii)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&o.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,wn)),i.sheenRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(o)}}class _A{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?er:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&o.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(o)}}class vA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return on(this.parser,e,this.name)!==null?er:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&o.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const a=i.attenuationColor||[1,1,1];return t.attenuationColor=new dt().setRGB(a[0],a[1],a[2],ii),Promise.all(o)}}class xA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){return on(this.parser,e,this.name)!==null?er:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class yA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return on(this.parser,e,this.name)!==null?er:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&o.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const a=i.specularColorFactor||[1,1,1];return t.specularColor=new dt().setRGB(a[0],a[1],a[2],ii),i.specularColorTexture!==void 0&&o.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,wn)),Promise.all(o)}}class SA{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){return on(this.parser,e,this.name)!==null?er:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&o.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(o)}}class MA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return on(this.parser,e,this.name)!==null?er:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&o.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(o)}}class EA{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,o=i.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const a=o.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class TA{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],d=o.images[c.source];let f=i.textureLoader;if(d.uri){const h=i.options.manager.getHandler(d.uri);h!==null&&(f=h)}return i.loadTextureImage(e,c.source,f)}}class bA{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],d=o.images[c.source];let f=i.textureLoader;if(d.uri){const h=i.options.manager.getHandler(d.uri);h!==null&&(f=h)}return i.loadTextureImage(e,c.source,f)}}class k_{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const o=i.extensions[this.name],a=this.parser.getDependency("buffer",o.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(d){const f=o.byteOffset||0,h=o.byteLength||0,g=o.count,_=o.byteStride,m=new Uint8Array(d,f,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(g,_,m,o.mode,o.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(g*_);return c.decodeGltfBuffer(new Uint8Array(x),g,_,m,o.mode,o.filter),x})})}else return null}}class wA{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const o=t.meshes[i.mesh];for(const h of o.primitives)if(h.mode!==hi.TRIANGLES&&h.mode!==hi.TRIANGLE_STRIP&&h.mode!==hi.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=i.extensions[this.name].attributes,d=[],f={};for(const h in c)d.push(this.parser.getDependency("accessor",c[h]).then(g=>(f[h]=g,f[h])));return d.length<1?null:(d.push(this.parser.createNodeMesh(e)),Promise.all(d).then(h=>{const g=h.pop(),_=g.isGroup?g.children:[g],m=h[0].count,x=[];for(const M of _){const T=new xt,y=new W,S=new Ni,R=new W(1,1,1),L=new vM(M.geometry,M.material,m);for(let P=0;P<m;P++)f.TRANSLATION&&y.fromBufferAttribute(f.TRANSLATION,P),f.ROTATION&&S.fromBufferAttribute(f.ROTATION,P),f.SCALE&&R.fromBufferAttribute(f.SCALE,P),L.setMatrixAt(P,T.compose(y,S,R));for(const P in f)if(P==="_COLOR_0"){const k=f[P];L.instanceColor=new ch(k.array,k.itemSize,k.normalized)}else P!=="TRANSLATION"&&P!=="ROTATION"&&P!=="SCALE"&&M.geometry.setAttribute(P,f[P]);nn.prototype.copy.call(L,M),this.parser.assignFinalMaterial(L),x.push(L)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const k0="glTF",Ia=12,B_={JSON:1313821514,BIN:5130562};class AA{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ia),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==k0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-Ia,a=new DataView(e,Ia);let c=0;for(;c<o;){const d=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===B_.JSON){const h=new Uint8Array(e,Ia+c,d);this.content=i.decode(h)}else if(f===B_.BIN){const h=Ia+c;this.body=e.slice(h,h+d)}c+=d}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class RA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,o=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,d={},f={},h={};for(const g in c){const _=ph[g]||g.toLowerCase();d[_]=c[g]}for(const g in e.attributes){const _=ph[g]||g.toLowerCase();if(c[g]!==void 0){const m=i.accessors[e.attributes[g]],x=Eo[m.componentType];h[_]=x.name,f[_]=m.normalized===!0}}return t.getDependency("bufferView",a).then(function(g){return new Promise(function(_,m){o.decodeDracoFile(g,function(x){for(const M in x.attributes){const T=x.attributes[M],y=f[M];y!==void 0&&(T.normalized=y)}_(x)},d,h,ii,m)})})}}class CA{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class PA{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}}class B0 extends Uo{constructor(e,t,i,o){super(e,t,i,o)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o*3+o;for(let c=0;c!==o;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,f=d*2,h=d*3,g=o-t,_=(i-t)/g,m=_*_,x=m*_,M=e*h,T=M-h,y=-2*x+3*m,S=x-m,R=1-y,L=S-m+_;for(let P=0;P!==d;P++){const k=c[T+P+d],N=c[T+P+f]*g,O=c[M+P+d],w=c[M+P]*g;a[P]=R*k+L*N+y*O+S*w}return a}}const LA=new Ni;class NA extends B0{interpolate_(e,t,i,o){const a=super.interpolate_(e,t,i,o);return LA.fromArray(a).normalize().toArray(a),a}}const hi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},z_={9728:hn,9729:pn,9984:i0,9985:Ac,9986:Ua,9987:vr},V_={33071:Wi,33648:Dc,10497:wo},pf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},IA={CUBICSPLINE:void 0,LINEAR:Ga,STEP:Ha},mf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DA(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Uh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mr})),s.DefaultMaterial}function Ms(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function UA(s,e,t){let i=!1,o=!1,a=!1;for(let h=0,g=e.length;h<g;h++){const _=e[h];if(_.POSITION!==void 0&&(i=!0),_.NORMAL!==void 0&&(o=!0),_.COLOR_0!==void 0&&(a=!0),i&&o&&a)break}if(!i&&!o&&!a)return Promise.resolve(s);const c=[],d=[],f=[];for(let h=0,g=e.length;h<g;h++){const _=e[h];if(i){const m=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):s.attributes.position;c.push(m)}if(o){const m=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):s.attributes.normal;d.push(m)}if(a){const m=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):s.attributes.color;f.push(m)}}return Promise.all([Promise.all(c),Promise.all(d),Promise.all(f)]).then(function(h){const g=h[0],_=h[1],m=h[2];return i&&(s.morphAttributes.position=g),o&&(s.morphAttributes.normal=_),a&&(s.morphAttributes.color=m),s.morphTargetsRelative=!0,s})}function FA(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,o=t.length;i<o;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function OA(s){let e;const t=s.extensions&&s.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gf(t.attributes):e=s.indices+":"+gf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,o=s.targets.length;i<o;i++)e+=":"+gf(s.targets[i]);return e}function gf(s){let e="";const t=Object.keys(s).sort();for(let i=0,o=t.length;i<o;i++)e+=t[i]+":"+s[t[i]]+";";return e}function mh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kA(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const BA=new xt;class zA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,o=-1,a=!1,c=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const d=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(d)===!0;const f=d.match(/Version\/(\d+)/);o=i&&f?parseInt(f[1],10):-1,a=d.indexOf("Firefox")>-1,c=a?d.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&o<17||a&&c<98?this.textureLoader=new XM(this.options.manager):this.textureLoader=new JM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new w0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,o=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const d={scene:c[0][o.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:o.asset,parser:i,userData:{}};return Ms(a,d,o),Hi(d,o),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(d)})).then(function(){for(const f of d.scenes)f.updateMatrixWorld();e(d)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let o=0,a=t.length;o<a;o++){const c=t[o].joints;for(let d=0,f=c.length;d<f;d++)e[c[d]].isBone=!0}for(let o=0,a=e.length;o<a;o++){const c=e[o];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const o=i.clone(),a=(c,d)=>{const f=this.associations.get(c);f!=null&&this.associations.set(d,f);for(const[h,g]of c.children.entries())a(g,d.children[h])};return a(i,o),o.name+="_instance_"+e.uses[t]++,o}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const o=e(t[i]);if(o)return o}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let o=0;o<t.length;o++){const a=e(t[o]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let o=this.cache.get(i);if(!o){switch(e){case"scene":o=this.loadScene(t);break;case"node":o=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":o=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":o=this.loadAccessor(t);break;case"bufferView":o=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":o=this.loadBuffer(t);break;case"material":o=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":o=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":o=this.loadSkin(t);break;case"animation":o=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":o=this.loadCamera(t);break;default:if(o=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(i,o)}return o}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(o.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(a,c){i.load(Ba.resolveURL(t.uri,o.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const o=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+o)})}loadAccessor(e){const t=this,i=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const c=pf[o.type],d=Eo[o.componentType],f=o.normalized===!0,h=new d(o.count*c);return Promise.resolve(new Bn(h,c,f))}const a=[];return o.bufferView!==void 0?a.push(this.getDependency("bufferView",o.bufferView)):a.push(null),o.sparse!==void 0&&(a.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(a).then(function(c){const d=c[0],f=pf[o.type],h=Eo[o.componentType],g=h.BYTES_PER_ELEMENT,_=g*f,m=o.byteOffset||0,x=o.bufferView!==void 0?i.bufferViews[o.bufferView].byteStride:void 0,M=o.normalized===!0;let T,y;if(x&&x!==_){const S=Math.floor(m/x),R="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+S+":"+o.count;let L=t.cache.get(R);L||(T=new h(d,S*x,o.count*x/g),L=new dM(T,x/g),t.cache.add(R,L)),y=new Ph(L,f,m%x/g,M)}else d===null?T=new h(o.count*f):T=new h(d,m,o.count*f),y=new Bn(T,f,M);if(o.sparse!==void 0){const S=pf.SCALAR,R=Eo[o.sparse.indices.componentType],L=o.sparse.indices.byteOffset||0,P=o.sparse.values.byteOffset||0,k=new R(c[1],L,o.sparse.count*S),N=new h(c[2],P,o.sparse.count*f);d!==null&&(y=new Bn(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let O=0,w=k.length;O<w;O++){const D=k[O];if(y.setX(D,N[O*f]),f>=2&&y.setY(D,N[O*f+1]),f>=3&&y.setZ(D,N[O*f+2]),f>=4&&y.setW(D,N[O*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=M}return y})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let d=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(d=f)}return this.loadTextureImage(e,a,d)}loadTextureImage(e,t,i){const o=this,a=this.json,c=a.textures[e],d=a.images[t],f=(d.uri||d.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const h=this.loadImageSource(t,i).then(function(g){g.flipY=!1,g.name=c.name||d.name||"",g.name===""&&typeof d.uri=="string"&&d.uri.startsWith("data:image/")===!1&&(g.name=d.uri);const m=(a.samplers||{})[c.sampler]||{};return g.magFilter=z_[m.magFilter]||pn,g.minFilter=z_[m.minFilter]||vr,g.wrapS=V_[m.wrapS]||wo,g.wrapT=V_[m.wrapT]||wo,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==hn&&g.minFilter!==pn,o.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[f]=h,h}loadImageSource(e,t){const i=this,o=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const c=o.images[e],d=self.URL||self.webkitURL;let f=c.uri||"",h=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(_){h=!0;const m=new Blob([_],{type:c.mimeType});return f=d.createObjectURL(m),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(f).then(function(_){return new Promise(function(m,x){let M=m;t.isImageBitmapLoader===!0&&(M=function(T){const y=new Sn(T);y.needsUpdate=!0,m(y)}),t.load(Ba.resolveURL(_,a.path),M,void 0,x)})}).then(function(_){return h===!0&&d.revokeObjectURL(f),Hi(_,c),_.userData.mimeType=c.mimeType||kA(c.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),_});return this.sourceCache[e]=g,g}assignTexture(e,t,i,o){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[Mt.KHR_TEXTURE_TRANSFORM]){const d=i.extensions!==void 0?i.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(d){const f=a.associations.get(c);c=a.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(c,d),a.associations.set(c,f)}}return o!==void 0&&(c.colorSpace=o),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const o=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const d="PointsMaterial:"+i.uuid;let f=this.cache.get(d);f||(f=new y0,qi.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(d,f)),i=f}else if(e.isLine){const d="LineBasicMaterial:"+i.uuid;let f=this.cache.get(d);f||(f=new x0,qi.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(d,f)),i=f}if(o||a||c){let d="ClonedMaterial:"+i.uuid+":";o&&(d+="derivative-tangents:"),a&&(d+="vertex-colors:"),c&&(d+="flat-shading:");let f=this.cache.get(d);f||(f=i.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),o&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(d,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return Uh}loadMaterial(e){const t=this,i=this.json,o=this.extensions,a=i.materials[e];let c;const d={},f=a.extensions||{},h=[];if(f[Mt.KHR_MATERIALS_UNLIT]){const _=o[Mt.KHR_MATERIALS_UNLIT];c=_.getMaterialType(),h.push(_.extendParams(d,a,t))}else{const _=a.pbrMetallicRoughness||{};if(d.color=new dt(1,1,1),d.opacity=1,Array.isArray(_.baseColorFactor)){const m=_.baseColorFactor;d.color.setRGB(m[0],m[1],m[2],ii),d.opacity=m[3]}_.baseColorTexture!==void 0&&h.push(t.assignTexture(d,"map",_.baseColorTexture,wn)),d.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,d.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(d,"metalnessMap",_.metallicRoughnessTexture)),h.push(t.assignTexture(d,"roughnessMap",_.metallicRoughnessTexture))),c=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,d)})))}a.doubleSided===!0&&(d.side=ji);const g=a.alphaMode||mf.OPAQUE;if(g===mf.BLEND?(d.transparent=!0,d.depthWrite=!1):(d.transparent=!1,g===mf.MASK&&(d.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Rs&&(h.push(t.assignTexture(d,"normalMap",a.normalTexture)),d.normalScale=new at(1,1),a.normalTexture.scale!==void 0)){const _=a.normalTexture.scale;d.normalScale.set(_,_)}if(a.occlusionTexture!==void 0&&c!==Rs&&(h.push(t.assignTexture(d,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(d.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Rs){const _=a.emissiveFactor;d.emissive=new dt().setRGB(_[0],_[1],_[2],ii)}return a.emissiveTexture!==void 0&&c!==Rs&&h.push(t.assignTexture(d,"emissiveMap",a.emissiveTexture,wn)),Promise.all(h).then(function(){const _=new c(d);return a.name&&(_.name=a.name),Hi(_,a),t.associations.set(_,{materials:e}),a.extensions&&Ms(o,_,a),_})}createUniqueName(e){const t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,o=this.primitiveCache;function a(d){return i[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(d,t).then(function(f){return H_(f,d,t)})}const c=[];for(let d=0,f=e.length;d<f;d++){const h=e[d],g=OA(h),_=o[g];if(_)c.push(_.promise);else{let m;h.extensions&&h.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?m=a(h):m=H_(new gi,h,t),o[g]={primitive:h,promise:m},c.push(m)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,o=this.extensions,a=i.meshes[e],c=a.primitives,d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f].material===void 0?DA(this.cache):this.getDependency("material",c[f].material);d.push(g)}return d.push(t.loadGeometries(c)),Promise.all(d).then(function(f){const h=f.slice(0,f.length-1),g=f[f.length-1],_=[];for(let x=0,M=g.length;x<M;x++){const T=g[x],y=c[x];let S;const R=h[x];if(y.mode===hi.TRIANGLES||y.mode===hi.TRIANGLE_STRIP||y.mode===hi.TRIANGLE_FAN||y.mode===void 0)S=a.isSkinnedMesh===!0?new mM(T,R):new ri(T,R),S.isSkinnedMesh===!0&&S.normalizeSkinWeights(),y.mode===hi.TRIANGLE_STRIP?S.geometry=O_(S.geometry,u0):y.mode===hi.TRIANGLE_FAN&&(S.geometry=O_(S.geometry,sh));else if(y.mode===hi.LINES)S=new MM(T,R);else if(y.mode===hi.LINE_STRIP)S=new Dh(T,R);else if(y.mode===hi.LINE_LOOP)S=new EM(T,R);else if(y.mode===hi.POINTS)S=new TM(T,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(S.geometry.morphAttributes).length>0&&FA(S,a),S.name=t.createUniqueName(a.name||"mesh_"+e),Hi(S,a),y.extensions&&Ms(o,S,y),t.assignFinalMaterial(S),_.push(S)}for(let x=0,M=_.length;x<M;x++)t.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return a.extensions&&Ms(o,_[0],a),_[0];const m=new As;a.extensions&&Ms(o,m,a),t.associations.set(m,{meshes:e});for(let x=0,M=_.length;x<M;x++)m.add(_[x]);return m})}loadCamera(e){let t;const i=this.json.cameras[e],o=i[i.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new kn(f0.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):i.type==="orthographic"&&(t=new Wc(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Hi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let o=0,a=t.joints.length;o<a;o++)i.push(this._loadNodeShallow(t.joints[o]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(o){const a=o.pop(),c=o,d=[],f=[];for(let h=0,g=c.length;h<g;h++){const _=c[h];if(_){d.push(_);const m=new xt;a!==null&&m.fromArray(a.array,h*16),f.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Nh(d,f)})}loadAnimation(e){const t=this.json,i=this,o=t.animations[e],a=o.name?o.name:"animation_"+e,c=[],d=[],f=[],h=[],g=[];for(let _=0,m=o.channels.length;_<m;_++){const x=o.channels[_],M=o.samplers[x.sampler],T=x.target,y=T.node,S=o.parameters!==void 0?o.parameters[M.input]:M.input,R=o.parameters!==void 0?o.parameters[M.output]:M.output;T.node!==void 0&&(c.push(this.getDependency("node",y)),d.push(this.getDependency("accessor",S)),f.push(this.getDependency("accessor",R)),h.push(M),g.push(T))}return Promise.all([Promise.all(c),Promise.all(d),Promise.all(f),Promise.all(h),Promise.all(g)]).then(function(_){const m=_[0],x=_[1],M=_[2],T=_[3],y=_[4],S=[];for(let L=0,P=m.length;L<P;L++){const k=m[L],N=x[L],O=M[L],w=T[L],D=y[L];if(k===void 0)continue;k.updateMatrix&&k.updateMatrix();const X=i._createAnimationTracks(k,N,O,w,D);if(X)for(let F=0;F<X.length;F++)S.push(X[F])}const R=new BM(a,void 0,S);return Hi(R,o),R})}createNodeMesh(e){const t=this.json,i=this,o=t.nodes[e];return o.mesh===void 0?null:i.getDependency("mesh",o.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,o.mesh,a);return o.weights!==void 0&&c.traverse(function(d){if(d.isMesh)for(let f=0,h=o.weights.length;f<h;f++)d.morphTargetInfluences[f]=o.weights[f]}),c})}loadNode(e){const t=this.json,i=this,o=t.nodes[e],a=i._loadNodeShallow(e),c=[],d=o.children||[];for(let h=0,g=d.length;h<g;h++)c.push(i.getDependency("node",d[h]));const f=o.skin===void 0?Promise.resolve(null):i.getDependency("skin",o.skin);return Promise.all([a,Promise.all(c),f]).then(function(h){const g=h[0],_=h[1],m=h[2];m!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(m,BA)});for(let x=0,M=_.length;x<M;x++)g.add(_[x]);if(g.userData.pivot!==void 0&&_.length>0){const x=g.userData.pivot,M=_[0];g.pivot=new W().fromArray(x),g.position.x-=x[0],g.position.y-=x[1],g.position.z-=x[2],M.position.set(0,0,0),delete g.userData.pivot}return g})}_loadNodeShallow(e){const t=this.json,i=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?o.createUniqueName(a.name):"",d=[],f=o._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return f&&d.push(f),a.camera!==void 0&&d.push(o.getDependency("camera",a.camera).then(function(h){return o._getNodeRef(o.cameraCache,a.camera,h)})),o._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){d.push(h)}),this.nodeCache[e]=Promise.all(d).then(function(h){let g;if(a.isBone===!0?g=new v0:h.length>1?g=new As:h.length===1?g=h[0]:g=new nn,g!==h[0])for(let _=0,m=h.length;_<m;_++)g.add(h[_]);if(a.name&&(g.userData.name=a.name,g.name=c),Hi(g,a),a.extensions&&Ms(i,g,a),a.matrix!==void 0){const _=new xt;_.fromArray(a.matrix),g.applyMatrix4(_)}else a.translation!==void 0&&g.position.fromArray(a.translation),a.rotation!==void 0&&g.quaternion.fromArray(a.rotation),a.scale!==void 0&&g.scale.fromArray(a.scale);if(!o.associations.has(g))o.associations.set(g,{});else if(a.mesh!==void 0&&o.meshCache.refs[a.mesh]>1){const _=o.associations.get(g);o.associations.set(g,{..._})}return o.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],o=this,a=new As;i.name&&(a.name=o.createUniqueName(i.name)),Hi(a,i),i.extensions&&Ms(t,a,i);const c=i.nodes||[],d=[];for(let f=0,h=c.length;f<h;f++)d.push(o.getDependency("node",c[f]));return Promise.all(d).then(function(f){for(let g=0,_=f.length;g<_;g++){const m=f[g];m.parent!==null?a.add(aA(m)):a.add(m)}const h=g=>{const _=new Map;for(const[m,x]of o.associations)(m instanceof qi||m instanceof Sn)&&_.set(m,x);return g.traverse(m=>{const x=o.associations.get(m);x!=null&&_.set(m,x)}),_};return o.associations=h(a),a})}_createAnimationTracks(e,t,i,o,a){const c=[],d=e.name?e.name:e.uuid,f=[];function h(x){x.morphTargetInfluences&&f.push(x.name?x.name:x.uuid)}Zr[a.path]===Zr.weights?(h(e),e.isGroup&&e.children.forEach(h)):f.push(d);let g;switch(Zr[a.path]){case Zr.weights:g=Po;break;case Zr.rotation:g=Lo;break;case Zr.translation:case Zr.scale:g=No;break;default:switch(i.itemSize){case 1:g=Po;break;case 2:case 3:default:g=No;break}break}const _=o.interpolation!==void 0?IA[o.interpolation]:Ga,m=this._getArrayFromAccessor(i);for(let x=0,M=f.length;x<M;x++){const T=new g(f[x]+"."+Zr[a.path],t.array,m,_);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(T),c.push(T)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=mh(t.constructor),o=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)o[a]=t[a]*i;t=o}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const o=this instanceof Lo?NA:B0;return new o(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function VA(s,e,t){const i=e.attributes,o=new Ji;if(i.POSITION!==void 0){const d=t.json.accessors[i.POSITION],f=d.min,h=d.max;if(f!==void 0&&h!==void 0){if(o.set(new W(f[0],f[1],f[2]),new W(h[0],h[1],h[2])),d.normalized){const g=mh(Eo[d.componentType]);o.min.multiplyScalar(g),o.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const d=new W,f=new W;for(let h=0,g=a.length;h<g;h++){const _=a[h];if(_.POSITION!==void 0){const m=t.json.accessors[_.POSITION],x=m.min,M=m.max;if(x!==void 0&&M!==void 0){if(f.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),f.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),f.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),m.normalized){const T=mh(Eo[m.componentType]);f.multiplyScalar(T)}d.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(d)}s.boundingBox=o;const c=new Qi;o.getCenter(c.center),c.radius=o.min.distanceTo(o.max)/2,s.boundingSphere=c}function H_(s,e,t){const i=e.attributes,o=[];function a(c,d){return t.getDependency("accessor",c).then(function(f){s.setAttribute(d,f)})}for(const c in i){const d=ph[c]||c.toLowerCase();d in s.attributes||o.push(a(i[c],d))}if(e.indices!==void 0&&!s.index){const c=t.getDependency("accessor",e.indices).then(function(d){s.setIndex(d)});o.push(c)}return Et.workingColorSpace!==ii&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),Hi(s,e),VA(s,e,t),Promise.all(o).then(function(){return e.targets!==void 0?UA(s,e.targets,t):s})}const G_={type:"change"},Bh={type:"start"},z0={type:"end"},bc=new Xa,j_=new Jr,HA=Math.cos(70*f0.DEG2RAD),fn=new W,Kn=2*Math.PI,kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_f=1e-6;class GA extends uE{constructor(e,t=null){super(e,t),this.state=kt.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yo.ROTATE,MIDDLE:yo.DOLLY,RIGHT:yo.PAN},this.touches={ONE:xo.ROTATE,TWO:xo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Ni,this._lastTargetPosition=new W,this._quat=new Ni().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new d_,this._sphericalDelta=new d_,this._scale=1,this._panOffset=new W,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new W,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WA.bind(this),this._onPointerDown=jA.bind(this),this._onPointerUp=XA.bind(this),this._onContextMenu=QA.bind(this),this._onMouseWheel=qA.bind(this),this._onKeyDown=$A.bind(this),this._onTouchStart=ZA.bind(this),this._onTouchMove=JA.bind(this),this._onMouseDown=YA.bind(this),this._onMouseMove=KA.bind(this),this._interceptControlDown=eR.bind(this),this._interceptControlUp=tR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(G_),this.update(),this.state=kt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;fn.copy(t).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=Kn:i>Math.PI&&(i-=Kn),o<-Math.PI?o+=Kn:o>Math.PI&&(o-=Kn),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),t.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const d=fn.length();c=this._clampDistance(d*this._scale);const f=d-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const d=new W(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const h=new W(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(d),this.object.updateMatrixWorld(),c=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(bc.origin.copy(this.object.position),bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bc.direction))<HA?this.object.lookAt(this.target):(j_.setFromNormalAndCoplanarPoint(this.object.up,this.target),bc.intersectPlane(j_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>_f||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_f||this._lastTargetPosition.distanceToSquared(this.target)>_f?(this.dispatchEvent(G_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){fn.setFromMatrixColumn(t,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,t){this.screenSpacePanning===!0?fn.setFromMatrixColumn(t,1):(fn.setFromMatrixColumn(t,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;fn.copy(o).sub(this.target);let a=fn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,c=i.width,d=i.height;this._mouse.x=o/c*2-1,this._mouse.y=-(a/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(c,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function jA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function WA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function XA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(z0),this.state=kt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function YA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=kt.DOLLY;break;case yo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=kt.ROTATE}break;case yo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=kt.PAN}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(Bh)}function KA(s){switch(this.state){case kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function qA(s){this.enabled===!1||this.enableZoom===!1||this.state!==kt.NONE||(s.preventDefault(),this.dispatchEvent(Bh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(z0))}function $A(s){this.enabled!==!1&&this._handleKeyDown(s)}function ZA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case xo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=kt.TOUCH_ROTATE;break;case xo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=kt.TOUCH_PAN;break;default:this.state=kt.NONE}break;case 2:switch(this.touches.TWO){case xo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=kt.TOUCH_DOLLY_PAN;break;case xo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=kt.TOUCH_DOLLY_ROTATE;break;default:this.state=kt.NONE}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(Bh)}function JA(s){switch(this._trackPointer(s),this.state){case kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=kt.NONE}}function QA(s){this.enabled!==!1&&s.preventDefault()}function eR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tR(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const nR={glasses_1:"glasses_1.glb",glasses_2:"glasses_2.glb",glasses_3:"glasses_3.glb",coffeemachine:"coffeemachine.glb",coffeegrinder:"coffeegrinder.glb",coffeepot:"coffeepot.glb",bag:"bag.glb",kettle:"kettle.glb",handdrip:"handdrip.glb",disposablecup:"disposablecup.glb",chair_table:"chair_table.glb"},V0=Object.fromEntries(Object.entries(nR).map(([s,e])=>[s,`/3d_object_portfolio/glb_files/${e}`])),H0=new Set(Object.keys(V0)),iR="portfolio_glb",Io="models",Do="videos";function Kc(){return new Promise((s,e)=>{const t=indexedDB.open(iR,1);t.onupgradeneeded=()=>{const i=t.result;i.objectStoreNames.contains(Io)||i.createObjectStore(Io),i.objectStoreNames.contains(Do)||i.createObjectStore(Do)},t.onsuccess=()=>s(t.result),t.onerror=()=>e(t.error)})}async function rR(s){const e=await Kc();return new Promise(t=>{const i=e.transaction(Io,"readonly").objectStore(Io).get(s);i.onsuccess=()=>{const o=i.result;if(!o)return t(null);t({url:URL.createObjectURL(new Blob([o.buf],{type:"model/gltf-binary"})),name:o.name})},i.onerror=()=>t(null)})}function W_(s){return H0.has(s)?{url:V0[s],name:`${s}.glb`}:null}async function sR(s){const e=await Kc();return new Promise(t=>{const i=e.transaction(Do,"readonly").objectStore(Do).get(s);i.onsuccess=()=>{const o=i.result;if(!o)return t(null);t({url:URL.createObjectURL(new Blob([o.buf],{type:"video/mp4"})),name:o.name})},i.onerror=()=>t(null)})}function oR(s){try{const e=localStorage.getItem(`meta_${s}`);return e?JSON.parse(e):{}}catch{return{}}}async function aR(){const s=await Kc();return new Promise(e=>{const t=s.transaction(Io,"readonly").objectStore(Io).getAllKeys();t.onsuccess=()=>e(t.result),t.onerror=()=>e([])})}async function lR(){const s=await Kc();return new Promise(e=>{const t=s.transaction(Do,"readonly").objectStore(Do).getAllKeys();t.onsuccess=()=>e(t.result),t.onerror=()=>e([])})}const Ic=[{groupName:"안경 프로젝트",emoji:"👓",items:[{id:"glasses_result_gallery",title:"안경 결과 렌더링",desc:"안경 프로젝트 결과 이미지와 영상",thumb:"/3d_object_portfolio/images/glasses/1.png",mediaType:"gallery",galleryImages:["/3d_object_portfolio/images/glasses/1.png","/3d_object_portfolio/images/glasses/2.png","/3d_object_portfolio/images/glasses/4.png","/3d_object_portfolio/images/glasses/5.png","/3d_object_portfolio/images/glasses/6.png","/3d_object_portfolio/images/glasses/3.png","/3d_object_portfolio/images/glasses/7.png","/3d_object_portfolio/images/glasses/8.png","/3d_object_portfolio/images/glasses/9.png","/3d_object_portfolio/images/glasses/10.png","/3d_object_portfolio/images/glasses/11.png","/3d_object_portfolio/images/glasses/12.png","/3d_object_portfolio/images/glasses/13.png","/3d_object_portfolio/images/glasses/14.png","/3d_object_portfolio/images/glasses/15.png","/3d_object_portfolio/images/glasses/16.png","/3d_object_portfolio/images/glasses/17.png","/3d_object_portfolio/images/glasses/18.png","/3d_object_portfolio/images/glasses/19.png","/3d_object_portfolio/images/glasses/20.png","/3d_object_portfolio/images/glasses/21.png","/3d_object_portfolio/images/glasses/22.png","/3d_object_portfolio/images/glasses/23.png","/3d_object_portfolio/images/glasses/24.png","/3d_object_portfolio/images/glasses/25.png","/3d_object_portfolio/images/glasses/26.png","/3d_object_portfolio/images/glasses/27.png","/3d_object_portfolio/images/glasses/28.png","/3d_object_portfolio/images/glasses/29.png"],videoLinks:["https://drive.google.com/file/d/1dTS_g03Vwdw9BfpnFqk0ZQC4ey5lu9zM/view?usp=drive_link","https://drive.google.com/file/d/1XkE5SO1fS3AC-Kcrp3KGZinesodA1TJI/view?usp=drive_link"]},{id:"glasses_1",title:"안경",desc:"기본 안경 모델링",thumb:"/3d_object_portfolio/images/glasses_1.png"},{id:"glasses_2",title:"K-style 안경",desc:"K-style 안경 모델",thumb:"/3d_object_portfolio/images/glasses_2.png"},{id:"glasses_3",title:"VR 안경",desc:"VR Glasses 모델링",thumb:"/3d_object_portfolio/images/glasses_3.png"},{id:"glass_project_process",title:"안경 제작 과정",desc:"제작 과정 설명 페이지",thumb:"/3d_object_portfolio/images/glass_project_process.png",isProcess:!0,link:"/3d_object_portfolio/glasses_project/index.html"}]},{groupName:"카페 프로젝트",emoji:"☕",items:[{id:"cafe_result_gallery",title:"카페 결과 렌더링",desc:"카페 프로젝트 결과 이미지와 영상",thumb:"/3d_object_portfolio/images/cafe/0.jpeg",mediaType:"gallery",galleryImages:["/3d_object_portfolio/images/cafe/0.jpeg","/3d_object_portfolio/images/cafe/1.jpeg","/3d_object_portfolio/images/cafe/2.jpeg","/3d_object_portfolio/images/cafe/3.jpeg","/3d_object_portfolio/images/cafe/4.jpeg","/3d_object_portfolio/images/cafe/5.jpeg","/3d_object_portfolio/images/cafe/6.jpeg"],videoLinks:["https://drive.google.com/file/d/1Gcl7gPJSkSSYWH6YBFoNTYB_78xN2WFp/view?usp=drive_link","https://drive.google.com/file/d/1buT0a9OPEFYPeK3YSYEcteHSf8nRteZb/view?usp=sharing"]},{id:"coffeemachine",title:"Coffee Machine",desc:"커피머신 모델링",thumb:"/3d_object_portfolio/images/coffeemachine.png"},{id:"coffeegrinder",title:"Coffee Grinder",desc:"스타일라이즈드 컨셉 커피 그라인더 모델링",thumb:"/3d_object_portfolio/images/coffeegrinder.png"},{id:"coffeepot",title:"Coffee Pot",desc:"스타일라이즈드 컨셉 커피 포트 모델링",thumb:"/3d_object_portfolio/images/coffeepot.png"},{id:"bag",title:"Coffee Bag",desc:"스타일라이즈드 컨셉 커피 백 모델링",thumb:"/3d_object_portfolio/images/bag.png"},{id:"kettle",title:"Kettle",desc:"스타일라이즈드 컨셉 주전자 모델링",thumb:"/3d_object_portfolio/images/kettle.png"},{id:"handdrip",title:"Handdrip Coffee",desc:"스타일라이즈드 컨셉 핸드드립 커피 모델링",thumb:"/3d_object_portfolio/images/handdrip.png"},{id:"disposablecup",title:"일회용 컵",desc:"스타일라이즈드 컨셉 일회용 컵 모델링",thumb:"/3d_object_portfolio/images/disposablecup.png"},{id:"chair_table",title:"의자 · 테이블",desc:"스타일라이즈드 컨셉 의자, 테이블 모델링",thumb:"/3d_object_portfolio/images/chair_table.png"},{id:"cafe_project_process",title:"카페 공간 제작 과정",desc:"스타일라이즈드 컨셉 공간 제작 설명 페이지",thumb:"/3d_object_portfolio/images/cafe_project_process.png",isProcess:!0,link:"/3d_object_portfolio/cafe_project/index.html"}]},{groupName:"게이밍룸 프로젝트",emoji:"🎮",items:[{id:"gamingroom_result_gallery",title:"게이밍룸 결과 렌더링",desc:"게이밍룸 프로젝트 이미지 갤러리",thumb:"/3d_object_portfolio/images/gamingroom/1.jpeg",mediaType:"gallery",galleryImages:["/3d_object_portfolio/images/gamingroom/1.jpeg","/3d_object_portfolio/images/gamingroom/2.jpeg","/3d_object_portfolio/images/gamingroom/3.jpeg","/3d_object_portfolio/images/gamingroom/4.jpeg","/3d_object_portfolio/images/gamingroom/5.jpeg","/3d_object_portfolio/images/gamingroom/6.jpeg","/3d_object_portfolio/images/gamingroom/7.jpeg","/3d_object_portfolio/images/gamingroom/8.jpeg","/3d_object_portfolio/images/gamingroom/9.jpeg","/3d_object_portfolio/images/gamingroom/10.jpeg","/3d_object_portfolio/images/gamingroom/11.jpeg","/3d_object_portfolio/images/gamingroom/12.jpeg"]}]},{groupName:"무대 디자인 프로젝트",emoji:"🎭",items:[{id:"stage_result_gallery",title:"무대 결과 렌더링",desc:"무대 디자인 프로젝트 이미지 갤러리",thumb:"/3d_object_portfolio/images/stage/1.jpeg",mediaType:"gallery",galleryImages:["/3d_object_portfolio/images/stage/1.jpeg","/3d_object_portfolio/images/stage/2.jpeg","/3d_object_portfolio/images/stage/B.jpeg","/3d_object_portfolio/images/stage/H.jpeg","/3d_object_portfolio/images/stage/J.jpeg"]}]},{groupName:"개발 프로젝트 아카이브",emoji:"🗃️",items:[{id:"dev_archive",title:"개발 프로젝트 아카이브",desc:"진행 해왔던 유니티 개발 프로젝트들을 볼 수 있습니다. (외부 링크)",thumb:"/3d_object_portfolio/images/dev.jpg",link:"https://kaput-muskox-1f4.notion.site/2a3a13adf6c48050b9b5cfe097165b8c"}]}],cR=[{name:"Unity"},{name:"Unreal"},{name:"Blender"},{name:"Substance Painter"},{name:"Three.js"}];function uR({glbUrl:s,autoRotate:e}){const t=Ct.useRef(null),i=Ct.useRef(null),o=Ct.useRef(!1),[a,c]=Ct.useState(null);return Ct.useEffect(()=>{o.current=e},[e]),Ct.useEffect(()=>{const d=t.current;if(!d)return;const f=new oA({canvas:d,antialias:!0,alpha:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.toneMapping=vh,f.toneMappingExposure=1.2;const h=new aM,g=new kn(45,1,.01,1e3);g.position.set(0,1,5);const _=new GA(g,d);_.enablePan=!1,_.enableDamping=!0,_.dampingFactor=.06,_.minDistance=.5,_.maxDistance=20,h.add(new ZM(16777215,.5));const m=new R0(16774624,2.5);m.position.set(5,8,5),h.add(m);const x=new dh(13936723,1.5,30);x.position.set(-5,3,-5),h.add(x);const M=new dh(7255497,.8,20);M.position.set(5,-3,5),h.add(M);const T=new ResizeObserver(()=>{const R=d.clientWidth,L=d.clientHeight;f.setSize(R,L,!1),g.aspect=R/L,g.updateProjectionMatrix()});T.observe(d),f.setSize(d.clientWidth,d.clientHeight,!1),g.aspect=d.clientWidth/d.clientHeight,g.updateProjectionMatrix();let y=0;const S=()=>{var R;y=requestAnimationFrame(S),_.update(),o.current&&((R=i.current)!=null&&R.model)&&(i.current.model.rotation.y+=.005),f.render(h,g)};return S(),i.current={renderer:f,scene:h,camera:g,controls:_,model:null,animId:y},()=>{cancelAnimationFrame(y),T.disconnect(),f.dispose(),i.current=null}},[]),Ct.useEffect(()=>{const d=i.current;if(!d)return;c(null);const f=typeof s=="string"?s.trim():s!=null?String(s).trim():"";if(!f){c(`3D 모델 로드 URL이 유효하지 않습니다: ${String(s)}`);return}d.model&&(d.scene.remove(d.model),d.model=null),new lA().load(f,h=>{const g=h.scene,_=new Ji().setFromObject(g),m=_.getCenter(new W),x=_.getSize(new W),M=2.5/Math.max(x.x,x.y,x.z);g.scale.setScalar(M),g.position.sub(m.multiplyScalar(M)),d.scene.add(g),d.model=g},void 0,h=>{console.error("GLTFLoader 상세 에러:",h);const g=h instanceof Error?h.message:String(h);c(`3D 모델 로드 실패: ${g}`)})},[s]),J.jsxs("div",{className:"w-full h-full min-h-[320px] relative",children:[J.jsx("canvas",{ref:t,className:"w-full h-full block",style:{touchAction:"none",display:"block"}}),a&&J.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-background/90 text-sm text-foreground p-4 text-center",children:a})]})}function dR({item:s,glbData:e,videoData:t,meta:i,onClose:o}){var _;const[a,c]=Ct.useState(!1),[d,f]=Ct.useState(0),[h,g]=Ct.useState(null);return Ct.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),Ct.useEffect(()=>{const m=x=>{x.key==="Escape"&&(h?g(null):o())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[o,h]),Ct.useEffect(()=>{f(0),g(null)},[s.id]),J.jsxs("div",{className:"fixed inset-0 z-[100] bg-background/80 backdrop-blur-lg flex items-center justify-center p-4 md:p-8 transition-opacity",onClick:m=>{m.target===m.currentTarget&&o()},children:[J.jsxs("div",{className:"relative w-full max-w-5xl bg-[#0a0a10]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden",children:[J.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-white/5 shrink-0 bg-white/[0.02]",children:[J.jsxs("div",{className:"flex items-center gap-4",children:[J.jsx("h3",{className:"font-['Fraunces'] font-medium text-foreground text-2xl tracking-wide",children:s.title}),e&&J.jsxs("span",{className:"flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-white/80 tracking-widest uppercase bg-white/5 border border-white/10 rounded-full px-3 py-1",children:[J.jsx(Y_,{size:12})," 3D"]}),!e&&t&&J.jsxs("span",{className:"flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-white/80 tracking-widest uppercase bg-white/5 border border-white/10 rounded-full px-3 py-1",children:[J.jsx(vf,{size:12})," VIDEO"]})]}),J.jsx("div",{className:"flex items-center gap-3",children:J.jsx("button",{onClick:o,className:"p-2 text-muted-foreground hover:text-white hover:bg-white/10 rounded-full transition-all",children:J.jsx(xf,{size:20})})})]}),J.jsx("div",{className:"flex-1 overflow-auto p-6 scrollbar-hide",children:J.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[J.jsxs("div",{className:"col-span-1 lg:col-span-2 flex flex-col gap-4",children:[J.jsx("div",{className:"relative h-[320px] md:h-[450px] lg:h-[500px] bg-[#050508] border border-white/5 rounded-xl flex items-center justify-center overflow-hidden shadow-inner",children:s.mediaType==="gallery"?s.galleryImages&&s.galleryImages.length>0?J.jsx("button",{type:"button",onClick:()=>{var x;const m=(x=s.galleryImages)==null?void 0:x[d];m&&g({type:"image",src:m,index:d})},className:"w-full h-full group",children:J.jsx("img",{src:((_=s.galleryImages)==null?void 0:_[d])??"",alt:`${s.title} ${d+1}`,className:"w-full h-full object-contain cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.02]"})}):J.jsx("div",{className:"flex items-center justify-center text-muted-foreground/50 h-full font-light",children:"이미지 갤러리가 없습니다"}):e?J.jsx(uR,{glbUrl:e.url,autoRotate:a}):t?J.jsx("video",{src:t.url,controls:!0,className:"w-full h-full object-contain rounded-lg"}):J.jsx("div",{className:"flex items-center justify-center text-muted-foreground/50 h-full font-light",children:"미디어가 없습니다"})}),s.mediaType==="gallery"&&s.galleryImages&&s.galleryImages.length>1&&J.jsx("div",{className:"grid grid-cols-5 md:grid-cols-8 gap-3 mt-2",children:s.galleryImages.map((m,x)=>J.jsx("button",{type:"button",onClick:()=>f(x),className:`relative overflow-hidden rounded-lg aspect-square border-2 transition-all duration-200 ${x===d?"border-primary opacity-100 scale-105 shadow-lg":"border-transparent opacity-40 hover:opacity-100 hover:scale-105 bg-black"}`,children:J.jsx("img",{src:m,alt:`${s.title} thumb ${x+1}`,className:"w-full h-full object-cover"})},m))})]}),J.jsxs("div",{className:"col-span-1 bg-[#0f0f14] border border-white/5 rounded-xl p-6 flex flex-col h-fit",children:[J.jsx("h3",{className:"font-['Fraunces'] text-2xl font-semibold mb-3",children:s.title}),J.jsx("p",{className:"font-['Figtree'] text-sm text-muted-foreground leading-relaxed mb-6",children:s.desc}),J.jsxs("div",{className:"flex flex-col gap-6",children:[(i==null?void 0:i.tools)&&i.tools.length>0&&J.jsxs("div",{children:[J.jsx("div",{className:"text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2",children:"Tools"}),J.jsx("div",{className:"flex flex-wrap gap-2",children:i.tools.map(m=>J.jsx("span",{className:"bg-white/5 border border-white/10 rounded-md px-2.5 py-1 font-['JetBrains_Mono'] text-xs text-white/90",children:m},m))})]}),(i==null?void 0:i.productionTime)&&J.jsxs("div",{children:[J.jsx("div",{className:"text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-1.5",children:"Production Time"}),J.jsx("div",{className:"font-['JetBrains_Mono'] text-sm text-white/90",children:i.productionTime})]}),(i==null?void 0:i.longDesc)&&J.jsxs("div",{children:[J.jsx("div",{className:"text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2",children:"Description"}),J.jsx("div",{className:"font-['Figtree'] text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap",children:i.longDesc})]}),s.mediaType==="gallery"&&s.videoLinks&&s.videoLinks.length>0&&J.jsx("div",{className:"flex flex-col gap-3 mt-4 pt-4 border-t border-white/5",children:s.videoLinks.map((m,x)=>J.jsxs("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-5 py-4 hover:bg-white/15 transition-all",children:[J.jsxs("span",{className:"text-sm font-medium text-white/90 group-hover:text-white",children:["프로젝트 영상 ",x+1," 보기"]}),J.jsx(vf,{size:16,className:"text-muted-foreground group-hover:text-white transition-colors"})]},m))})]})]})]})})]}),h&&J.jsx("div",{className:"fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 transition-opacity",onClick:()=>g(null),children:J.jsxs("div",{className:"relative w-full max-w-[95vw] h-full flex items-center justify-center",onClick:m=>m.stopPropagation(),children:[J.jsx("button",{type:"button",onClick:()=>g(null),className:"absolute top-4 right-4 z-20 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-white/20 backdrop-blur-md transition-all",children:J.jsx(xf,{size:24})}),h.type==="image"?J.jsxs(J.Fragment,{children:[J.jsx("button",{type:"button",disabled:h.index===0,onClick:()=>{if(h.index!=null&&s.galleryImages){const m=Math.max(0,h.index-1);g({type:"image",src:s.galleryImages[m],index:m}),f(m)}},className:"absolute left-4 md:left-8 z-20 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed",children:J.jsx(Oy,{size:32})}),J.jsx("img",{src:h.src,alt:"Large view",className:"max-w-full max-h-[90vh] object-contain drop-shadow-2xl"}),J.jsx("button",{type:"button",disabled:h.index==null||(s.galleryImages?h.index>=s.galleryImages.length-1:!0),onClick:()=>{if(h.index!=null&&s.galleryImages){const m=Math.min(s.galleryImages.length-1,h.index+1);g({type:"image",src:s.galleryImages[m],index:m}),f(m)}},className:"absolute right-4 md:right-8 z-20 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed",children:J.jsx(K_,{size:32})})]}):null]})})]})}function fR(){const[s,e]=Ct.useState(!1),[t,i]=Ct.useState(!1);return Ct.useEffect(()=>{const o=()=>i(window.scrollY>40);return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),J.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${t?"bg-background/90 backdrop-blur-md border-b border-border":""}`,children:[J.jsxs("nav",{className:"max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between",children:[J.jsxs("button",{className:"font-['Fraunces'] text-xl font-light tracking-tight text-foreground select-none",style:{background:"none",border:"none",cursor:"default"},children:["JEONG YEON SU",J.jsx("span",{className:"text-primary",children:"."})]}),J.jsx("ul",{className:"hidden md:flex items-center gap-10",children:["Works","About"].map(o=>J.jsx("li",{children:J.jsx("a",{href:`#${o.toLowerCase()}`,className:"font-['Figtree'] text-sm text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase",children:o})},o))}),J.jsx("button",{onClick:()=>e(!s),className:"md:hidden text-foreground",children:s?J.jsx(xf,{size:22}):J.jsx(Wy,{size:22})})]}),s&&J.jsx("div",{className:"md:hidden bg-card border-b border-border px-8 py-6",children:J.jsx("ul",{className:"flex flex-col gap-5",children:["Works","About"].map(o=>J.jsx("li",{children:J.jsx("a",{href:`#${o.toLowerCase()}`,onClick:()=>e(!1),className:"font-['Figtree'] text-base text-foreground tracking-widest uppercase",children:o})},o))})})]})}const hR=Object.assign({"/public/images/cafe/0.jpeg":Px,"/public/images/cafe/1.jpeg":Lx,"/public/images/cafe/2.jpeg":Nx,"/public/images/cafe/3.jpeg":Ix,"/public/images/cafe/4.jpeg":Dx,"/public/images/cafe/5.jpeg":Ux,"/public/images/cafe/6.jpeg":Fx,"/public/images/gamingroom/1.jpeg":Ox,"/public/images/gamingroom/10.jpeg":kx,"/public/images/gamingroom/11.jpeg":Bx,"/public/images/gamingroom/12.jpeg":zx,"/public/images/gamingroom/2.jpeg":Vx,"/public/images/gamingroom/3.jpeg":Hx,"/public/images/gamingroom/4.jpeg":Gx,"/public/images/gamingroom/5.jpeg":jx,"/public/images/gamingroom/6.jpeg":Wx,"/public/images/gamingroom/7.jpeg":Xx,"/public/images/gamingroom/8.jpeg":Yx,"/public/images/gamingroom/9.jpeg":Kx,"/public/images/glasses/1.png":qx,"/public/images/glasses/10.png":$x,"/public/images/glasses/11.png":Zx,"/public/images/glasses/12.png":Jx,"/public/images/glasses/13.png":Qx,"/public/images/glasses/14.png":ey,"/public/images/glasses/15.png":ty,"/public/images/glasses/16.png":ny,"/public/images/glasses/17.png":iy,"/public/images/glasses/18.png":ry,"/public/images/glasses/19.png":sy,"/public/images/glasses/2.png":oy,"/public/images/glasses/20.png":ay,"/public/images/glasses/21.png":ly,"/public/images/glasses/22.png":cy,"/public/images/glasses/23.png":uy,"/public/images/glasses/24.png":dy,"/public/images/glasses/25.png":fy,"/public/images/glasses/26.png":hy,"/public/images/glasses/27.png":py,"/public/images/glasses/28.png":my,"/public/images/glasses/29.png":gy,"/public/images/glasses/3.png":_y,"/public/images/glasses/4.png":vy,"/public/images/glasses/5.png":xy,"/public/images/glasses/6.png":yy,"/public/images/glasses/7.png":Sy,"/public/images/glasses/8.png":My,"/public/images/glasses/9.png":Ey,"/public/images/stage/1.jpeg":Ty,"/public/images/stage/2.jpeg":by,"/public/images/stage/B.jpeg":wy,"/public/images/stage/H.jpeg":Ay,"/public/images/stage/J.jpeg":Ry}),Es=Object.values(hR),pR=Object.keys({"/public/glb_files/bag.glb":0,"/public/glb_files/cafe.glb":0,"/public/glb_files/chair_table.glb":0,"/public/glb_files/coffeegrinder.glb":0,"/public/glb_files/coffeemachine.glb":0,"/public/glb_files/coffeepot.glb":0,"/public/glb_files/disposablecup.glb":0,"/public/glb_files/glasses_1.glb":0,"/public/glb_files/glasses_2.glb":0,"/public/glb_files/glasses_3.glb":0,"/public/glb_files/handdrip.glb":0,"/public/glb_files/kettle.glb":0,"/public/glb_files/test.glb":0}).length,mR=Object.keys({"/public/images/cafe/0.jpeg":0,"/public/images/cafe/1.jpeg":0,"/public/images/cafe/2.jpeg":0,"/public/images/cafe/3.jpeg":0,"/public/images/cafe/4.jpeg":0,"/public/images/cafe/5.jpeg":0,"/public/images/cafe/6.jpeg":0,"/public/images/gamingroom/1.jpeg":0,"/public/images/gamingroom/10.jpeg":0,"/public/images/gamingroom/11.jpeg":0,"/public/images/gamingroom/12.jpeg":0,"/public/images/gamingroom/2.jpeg":0,"/public/images/gamingroom/3.jpeg":0,"/public/images/gamingroom/4.jpeg":0,"/public/images/gamingroom/5.jpeg":0,"/public/images/gamingroom/6.jpeg":0,"/public/images/gamingroom/7.jpeg":0,"/public/images/gamingroom/8.jpeg":0,"/public/images/gamingroom/9.jpeg":0,"/public/images/glasses/1.png":0,"/public/images/glasses/10.png":0,"/public/images/glasses/11.png":0,"/public/images/glasses/12.png":0,"/public/images/glasses/13.png":0,"/public/images/glasses/14.png":0,"/public/images/glasses/15.png":0,"/public/images/glasses/16.png":0,"/public/images/glasses/17.png":0,"/public/images/glasses/18.png":0,"/public/images/glasses/19.png":0,"/public/images/glasses/2.png":0,"/public/images/glasses/20.png":0,"/public/images/glasses/21.png":0,"/public/images/glasses/22.png":0,"/public/images/glasses/23.png":0,"/public/images/glasses/24.png":0,"/public/images/glasses/25.png":0,"/public/images/glasses/26.png":0,"/public/images/glasses/27.png":0,"/public/images/glasses/28.png":0,"/public/images/glasses/29.png":0,"/public/images/glasses/3.png":0,"/public/images/glasses/4.png":0,"/public/images/glasses/5.png":0,"/public/images/glasses/6.png":0,"/public/images/glasses/7.png":0,"/public/images/glasses/8.png":0,"/public/images/glasses/9.png":0,"/public/images/stage/1.jpeg":0,"/public/images/stage/2.jpeg":0,"/public/images/stage/B.jpeg":0,"/public/images/stage/H.jpeg":0,"/public/images/stage/J.jpeg":0}).length,gR=4;function _R(){const[s,e]=Ct.useState(0);return Ct.useEffect(()=>{for(let t=Es.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[Es[t],Es[i]]=[Es[i],Es[t]]}},[]),Ct.useEffect(()=>{const t=setInterval(()=>{e(i=>(i+1)%Es.length)},5e3);return()=>clearInterval(t)},[]),J.jsxs("section",{id:"hero",className:"relative min-h-screen overflow-hidden bg-[#050508] flex flex-col justify-center items-center text-center",children:[J.jsxs("div",{className:"absolute inset-0 bg-[#050508]",children:[Es.map((t,i)=>J.jsx("img",{src:t,alt:`Background ${i}`,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${i===s?"opacity-50":"opacity-0"}`},t)),J.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"})]}),J.jsxs("div",{className:"relative z-10 max-w-[1400px] mx-auto px-8 mt-20 flex flex-col items-center w-full",children:[J.jsx("span",{className:"font-['JetBrains_Mono'] text-[10px] text-white/70 tracking-[0.3em] uppercase mb-5 border border-white/10 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md shadow-lg",children:"3D Modeler, Developer, Artest"}),J.jsxs("h1",{className:"font-['Fraunces'] text-white tracking-wide mb-8 md:mb-16",style:{fontSize:"clamp(2rem, 6vw, 5rem)"},children:["Feel Spaces,",J.jsx("span",{className:"font-['Fraunces'] text-white/70 text-xl md:text-2xl",children:"   Through Technology."})]}),J.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4",children:[J.jsxs("a",{href:"#works",className:"group flex items-center gap-3 font-['Figtree'] text-sm font-medium bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]",children:["작업물 보기 ",J.jsx(Dy,{size:16,className:"group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"})]}),J.jsx("a",{href:"#about",className:"flex items-center gap-2 font-['Figtree'] text-sm font-medium bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full hover:bg-white/15 backdrop-blur-md transition-all duration-300",children:"About Me"})]}),J.jsx("div",{className:"flex flex-wrap justify-center gap-10 md:gap-20 mt-24 pt-10 border-t border-white/10 w-full max-w-4xl",children:[{value:String(Ic.length),label:"Projects"},{value:String(pR),label:"3D Models"},{value:String(mR),label:"Renders"},{value:String(gR),label:"Videos"}].map(t=>J.jsxs("div",{className:"flex flex-col gap-2",children:[J.jsx("span",{className:"font-['Fraunces'] font-semibold text-3xl text-white/90 drop-shadow-lg",children:t.value}),J.jsx("span",{className:"font-['JetBrains_Mono'] text-[10px] text-white/40 tracking-widest uppercase",children:t.label})]},t.label))})]})]})}function vR({item:s,has3d:e,hasVideo:t,onClick:i}){return J.jsxs("div",{className:"group relative flex flex-col gap-3 cursor-pointer",onClick:i,children:[J.jsxs("div",{className:"relative aspect-square overflow-hidden rounded-xl bg-[#0a0a10] border border-white/5 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",children:[J.jsx("img",{src:s.thumb,alt:s.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"}),J.jsxs("div",{className:"absolute top-3 left-3 flex gap-2",children:[e&&J.jsxs("span",{className:"flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] text-white tracking-widest uppercase",children:[J.jsx(Y_,{size:10})," 3D"]}),t&&J.jsxs("span",{className:"flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] text-white tracking-widest uppercase",children:[J.jsx(vf,{size:10})," VIDEO"]}),s.mediaType==="gallery"&&J.jsx("span",{className:"flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] text-white tracking-widest uppercase",children:"GALLERY"})]}),J.jsx("div",{className:"absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100",children:J.jsx("span",{className:"bg-white/90 text-black font-medium text-sm px-5 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg",children:s.link?"외부 링크로 이동":s.isProcess?"보러가기":"자세히 보기"})})]}),J.jsxs("div",{children:[J.jsx("h4",{className:"font-['Fraunces'] font-medium text-lg text-foreground group-hover:text-primary transition-colors",children:s.title}),J.jsx("p",{className:"font-['Figtree'] text-sm text-muted-foreground mt-1 line-clamp-2",children:s.desc})]})]})}function xR(){const[s,e]=Ct.useState(new Set),[t,i]=Ct.useState(new Set),[o,a]=Ct.useState(null),[c,d]=Ct.useState(null),[f,h]=Ct.useState(null),[g,_]=Ct.useState("all"),m=Ct.useCallback(async()=>{const[T,y]=await Promise.all([aR(),lR()]);e(new Set(T)),i(new Set(y))},[]);Ct.useEffect(()=>{m()},[m]);const x=async T=>{const y=oR(T.id);a(T),d(null),h({videoData:null,meta:y});try{const S=await sR(T.id);let R=null;T.mediaType!=="gallery"&&(R=await rR(T.id)??W_(T.id)),d(R),h({videoData:S,meta:y})}catch(S){console.error("포트폴리오 미디어 로드 실패",S),d(T.mediaType!=="gallery"?W_(T.id):null),h({videoData:null,meta:y})}},M=g==="all"?Ic:Ic.filter(T=>T.groupName===g);return J.jsxs("section",{id:"works",className:"bg-background py-32",children:[J.jsxs("div",{className:"max-w-[1400px] mx-auto px-8",children:[J.jsxs("div",{className:"mb-12",children:[J.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-4",children:"02 — Works"}),J.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-8",children:[J.jsx("div",{className:"flex flex-col gap-4",children:J.jsx("h2",{className:"font-['Fraunces'] font-light text-foreground leading-tight",style:{fontSize:"clamp(2.5rem, 5vw, 4.5rem)"},children:"Projects"})}),J.jsxs("div",{className:"flex flex-wrap gap-2 md:gap-3",children:[J.jsx("button",{onClick:()=>_("all"),className:`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${g==="all"?"bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold":"bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"}`,children:"All"}),Ic.map(T=>J.jsxs("button",{onClick:()=>_(T.groupName),className:`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${g===T.groupName?"bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold":"bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"}`,children:[T.emoji," ",T.groupName]},T.groupName))]})]})]}),J.jsx("div",{className:"flex flex-col gap-20",children:M.map(T=>J.jsxs("div",{children:[J.jsxs("div",{className:"flex items-center gap-4 mb-8 pb-4 border-b border-white/10",children:[J.jsx("span",{className:"text-2xl",children:T.emoji}),J.jsx("h3",{className:"font-['Fraunces'] font-medium text-foreground text-2xl",children:T.groupName}),J.jsx(K_,{size:18,className:"text-muted-foreground"}),J.jsxs("span",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest",children:[T.items.filter(y=>!y.isProcess).length," PROJECTS"]})]}),J.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:T.items.map(y=>J.jsx(vR,{item:y,has3d:H0.has(y.id)||s.has(y.id),hasVideo:t.has(y.id),onClick:()=>{y.link?window.open(y.link,"_blank","noopener,noreferrer"):y.isProcess||x(y)}},y.id))})]},T.groupName))})]}),o&&J.jsx(dR,{item:o,glbData:c,videoData:(f==null?void 0:f.videoData)||null,meta:f==null?void 0:f.meta,onClose:()=>{a(null),d(null),h(null)}})]})}function yR(){return J.jsx("section",{id:"about",className:"bg-card py-32 border-t border-border",children:J.jsx("div",{className:"max-w-[1400px] mx-auto px-8",children:J.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start",children:[J.jsx("div",{className:"relative max-w-[420px] mx-auto lg:mx-0",children:J.jsx("div",{className:"relative aspect-[3/4] overflow-hidden bg-secondary rounded-3xl shadow-xl",children:J.jsx("img",{src:"./images/3212_4282.jpg",alt:"Portrait",className:"w-full h-full object-cover"})})}),J.jsxs("div",{className:"flex flex-col gap-10 lg:pt-8",children:[J.jsxs("div",{children:[J.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase mb-6",children:"03 — About Me"}),J.jsxs("h2",{className:"font-['Fraunces'] font-light text-foreground leading-tight mb-8",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:["I build spaces that ",J.jsx("em",{className:"italic text-primary",children:"exist nowhere"})," but feel real."]}),J.jsxs("div",{className:"flex flex-col gap-4 font-['Figtree'] text-base text-muted-foreground leading-relaxed",children:[J.jsx("p",{children:"서울을 기반으로 활동하는 3D 디자이너입니다. 건축 시각화, 제품 렌더링, 스타일라이즈드 오브젝트 모델링을 주로 작업합니다."}),J.jsx("p",{children:"기술적 정밀함과 예술적 직관의 교차점에서 작업하며, 아무 곳에도 존재하지 않지만 현실처럼 느껴지는 공간과 오브젝트를 만들어냅니다."})]})]}),J.jsxs("div",{className:"border-t border-border pt-8",children:[J.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-6",children:"Software & Tools"}),J.jsx("div",{className:"flex flex-wrap gap-3",children:cR.map(s=>J.jsx("span",{className:"rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground",children:s.name},s.name))})]}),J.jsxs("div",{className:"border-t border-border pt-8",children:[J.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-6",children:"Contact"}),J.jsxs("div",{className:"flex flex-wrap gap-3",children:[J.jsxs("a",{href:"https://www.instagram.com/yeon_ddooo/",target:"_blank",rel:"noopener noreferrer",className:"group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:[J.jsx(Vy,{size:18}),J.jsx("span",{className:"sr-only",children:"Instagram"})]}),J.jsxs("a",{href:"https://www.linkedin.com/in/yeonsu0826/",target:"_blank",rel:"noopener noreferrer",className:"group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:[J.jsx(Gy,{size:18}),J.jsx("span",{className:"sr-only",children:"LinkedIn"})]})]})]})]})]})})})}function SR(){return J.jsx("footer",{className:"bg-card border-t border-border px-8 py-8",children:J.jsxs("div",{className:"max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",children:[J.jsxs("span",{className:"font-['Fraunces'] text-lg font-light text-foreground",children:["JEONG YEON SU",J.jsx("span",{className:"text-primary",children:"."})]}),J.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest",children:"© 2025 — All rights reserved"}),J.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase",children:"Seoul, KR"})]})})}function MR(){return J.jsxs("div",{className:"bg-background min-h-screen overflow-x-hidden",style:{fontFamily:"'Figtree', sans-serif"},children:[J.jsx(fR,{}),J.jsx(_R,{}),J.jsx(xR,{}),J.jsx(yR,{}),J.jsx(SR,{})]})}Cx.createRoot(document.getElementById("root")).render(J.jsx(MR,{}));
