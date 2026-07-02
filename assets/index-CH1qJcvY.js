(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var wd={exports:{}},Ea={},Ad={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function Ex(){if(lg)return St;lg=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function x(U,ee,Fe){this.props=U,this.context=ee,this.refs=w,this.updater=Fe||y}x.prototype.isReactComponent={},x.prototype.setState=function(U,ee){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ee,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function S(){}S.prototype=x.prototype;function R(U,ee,Fe){this.props=U,this.context=ee,this.refs=w,this.updater=Fe||y}var N=R.prototype=new S;N.constructor=R,M(N,x.prototype),N.isPureReactComponent=!0;var P=Array.isArray,k=Object.prototype.hasOwnProperty,L={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function b(U,ee,Fe){var He,Ie={},oe=null,ye=null;if(ee!=null)for(He in ee.ref!==void 0&&(ye=ee.ref),ee.key!==void 0&&(oe=""+ee.key),ee)k.call(ee,He)&&!O.hasOwnProperty(He)&&(Ie[He]=ee[He]);var me=arguments.length-2;if(me===1)Ie.children=Fe;else if(1<me){for(var De=Array(me),Je=0;Je<me;Je++)De[Je]=arguments[Je+2];Ie.children=De}if(U&&U.defaultProps)for(He in me=U.defaultProps,me)Ie[He]===void 0&&(Ie[He]=me[He]);return{$$typeof:s,type:U,key:oe,ref:ye,props:Ie,_owner:L.current}}function D(U,ee){return{$$typeof:s,type:U.type,key:ee,ref:U.ref,props:U.props,_owner:U._owner}}function Y(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function F(U){var ee={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Fe){return ee[Fe]})}var Z=/\/+/g;function ce(U,ee){return typeof U=="object"&&U!==null&&U.key!=null?F(""+U.key):ee.toString(36)}function de(U,ee,Fe,He,Ie){var oe=typeof U;(oe==="undefined"||oe==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(oe){case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case s:case e:ye=!0}}if(ye)return ye=U,Ie=Ie(ye),U=He===""?"."+ce(ye,0):He,P(Ie)?(Fe="",U!=null&&(Fe=U.replace(Z,"$&/")+"/"),de(Ie,ee,Fe,"",function(Je){return Je})):Ie!=null&&(Y(Ie)&&(Ie=D(Ie,Fe+(!Ie.key||ye&&ye.key===Ie.key?"":(""+Ie.key).replace(Z,"$&/")+"/")+U)),ee.push(Ie)),1;if(ye=0,He=He===""?".":He+":",P(U))for(var me=0;me<U.length;me++){oe=U[me];var De=He+ce(oe,me);ye+=de(oe,ee,Fe,De,Ie)}else if(De=_(U),typeof De=="function")for(U=De.call(U),me=0;!(oe=U.next()).done;)oe=oe.value,De=He+ce(oe,me++),ye+=de(oe,ee,Fe,De,Ie);else if(oe==="object")throw ee=String(U),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return ye}function j(U,ee,Fe){if(U==null)return U;var He=[],Ie=0;return de(U,He,"","",function(oe){return ee.call(Fe,oe,Ie++)}),He}function ie(U){if(U._status===-1){var ee=U._result;ee=ee(),ee.then(function(Fe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Fe)},function(Fe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Fe)}),U._status===-1&&(U._status=0,U._result=ee)}if(U._status===1)return U._result.default;throw U._result}var K={current:null},q={transition:null},le={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:q,ReactCurrentOwner:L};function ae(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:j,forEach:function(U,ee,Fe){j(U,function(){ee.apply(this,arguments)},Fe)},count:function(U){var ee=0;return j(U,function(){ee++}),ee},toArray:function(U){return j(U,function(ee){return ee})||[]},only:function(U){if(!Y(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},St.Component=x,St.Fragment=t,St.Profiler=o,St.PureComponent=R,St.StrictMode=i,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,St.act=ae,St.cloneElement=function(U,ee,Fe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var He=M({},U.props),Ie=U.key,oe=U.ref,ye=U._owner;if(ee!=null){if(ee.ref!==void 0&&(oe=ee.ref,ye=L.current),ee.key!==void 0&&(Ie=""+ee.key),U.type&&U.type.defaultProps)var me=U.type.defaultProps;for(De in ee)k.call(ee,De)&&!O.hasOwnProperty(De)&&(He[De]=ee[De]===void 0&&me!==void 0?me[De]:ee[De])}var De=arguments.length-2;if(De===1)He.children=Fe;else if(1<De){me=Array(De);for(var Je=0;Je<De;Je++)me[Je]=arguments[Je+2];He.children=me}return{$$typeof:s,type:U.type,key:Ie,ref:oe,props:He,_owner:ye}},St.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},St.createElement=b,St.createFactory=function(U){var ee=b.bind(null,U);return ee.type=U,ee},St.createRef=function(){return{current:null}},St.forwardRef=function(U){return{$$typeof:d,render:U}},St.isValidElement=Y,St.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:ie}},St.memo=function(U,ee){return{$$typeof:h,type:U,compare:ee===void 0?null:ee}},St.startTransition=function(U){var ee=q.transition;q.transition={};try{U()}finally{q.transition=ee}},St.unstable_act=ae,St.useCallback=function(U,ee){return K.current.useCallback(U,ee)},St.useContext=function(U){return K.current.useContext(U)},St.useDebugValue=function(){},St.useDeferredValue=function(U){return K.current.useDeferredValue(U)},St.useEffect=function(U,ee){return K.current.useEffect(U,ee)},St.useId=function(){return K.current.useId()},St.useImperativeHandle=function(U,ee,Fe){return K.current.useImperativeHandle(U,ee,Fe)},St.useInsertionEffect=function(U,ee){return K.current.useInsertionEffect(U,ee)},St.useLayoutEffect=function(U,ee){return K.current.useLayoutEffect(U,ee)},St.useMemo=function(U,ee){return K.current.useMemo(U,ee)},St.useReducer=function(U,ee,Fe){return K.current.useReducer(U,ee,Fe)},St.useRef=function(U){return K.current.useRef(U)},St.useState=function(U){return K.current.useState(U)},St.useSyncExternalStore=function(U,ee,Fe){return K.current.useSyncExternalStore(U,ee,Fe)},St.useTransition=function(){return K.current.useTransition()},St.version="18.3.1",St}var cg;function gh(){return cg||(cg=1,Ad.exports=Ex()),Ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function Tx(){if(ug)return Ea;ug=1;var s=gh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,h){var m,g={},_=null,y=null;h!==void 0&&(_=""+h),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(m in f)i.call(f,m)&&!a.hasOwnProperty(m)&&(g[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:d,key:_,ref:y,props:g,_owner:o.current}}return Ea.Fragment=t,Ea.jsx=c,Ea.jsxs=c,Ea}var dg;function bx(){return dg||(dg=1,wd.exports=Tx()),wd.exports}var G=bx(),Zl={},Rd={exports:{}},Yn={},Cd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function wx(){return fg||(fg=1,(function(s){function e(q,le){var ae=q.length;q.push(le);e:for(;0<ae;){var U=ae-1>>>1,ee=q[U];if(0<o(ee,le))q[U]=le,q[ae]=ee,ae=U;else break e}}function t(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var le=q[0],ae=q.pop();if(ae!==le){q[0]=ae;e:for(var U=0,ee=q.length,Fe=ee>>>1;U<Fe;){var He=2*(U+1)-1,Ie=q[He],oe=He+1,ye=q[oe];if(0>o(Ie,ae))oe<ee&&0>o(ye,Ie)?(q[U]=ye,q[oe]=ae,U=oe):(q[U]=Ie,q[He]=ae,U=He);else if(oe<ee&&0>o(ye,ae))q[U]=ye,q[oe]=ae,U=oe;else break e}}return le}function o(q,le){var ae=q.sortIndex-le.sortIndex;return ae!==0?ae:q.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var f=[],h=[],m=1,g=null,_=3,y=!1,M=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(q){for(var le=t(h);le!==null;){if(le.callback===null)i(h);else if(le.startTime<=q)i(h),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(h)}}function P(q){if(w=!1,N(q),!M)if(t(f)!==null)M=!0,ie(k);else{var le=t(h);le!==null&&K(P,le.startTime-q)}}function k(q,le){M=!1,w&&(w=!1,S(b),b=-1),y=!0;var ae=_;try{for(N(le),g=t(f);g!==null&&(!(g.expirationTime>le)||q&&!F());){var U=g.callback;if(typeof U=="function"){g.callback=null,_=g.priorityLevel;var ee=U(g.expirationTime<=le);le=s.unstable_now(),typeof ee=="function"?g.callback=ee:g===t(f)&&i(f),N(le)}else i(f);g=t(f)}if(g!==null)var Fe=!0;else{var He=t(h);He!==null&&K(P,He.startTime-le),Fe=!1}return Fe}finally{g=null,_=ae,y=!1}}var L=!1,O=null,b=-1,D=5,Y=-1;function F(){return!(s.unstable_now()-Y<D)}function Z(){if(O!==null){var q=s.unstable_now();Y=q;var le=!0;try{le=O(!0,q)}finally{le?ce():(L=!1,O=null)}}else L=!1}var ce;if(typeof R=="function")ce=function(){R(Z)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,j=de.port2;de.port1.onmessage=Z,ce=function(){j.postMessage(null)}}else ce=function(){x(Z,0)};function ie(q){O=q,L||(L=!0,ce())}function K(q,le){b=x(function(){q(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,ie(k))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(q){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var ae=_;_=le;try{return q()}finally{_=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,le){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ae=_;_=q;try{return le()}finally{_=ae}},s.unstable_scheduleCallback=function(q,le,ae){var U=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?U+ae:U):ae=U,q){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ae+ee,q={id:m++,callback:le,priorityLevel:q,startTime:ae,expirationTime:ee,sortIndex:-1},ae>U?(q.sortIndex=ae,e(h,q),t(f)===null&&q===t(h)&&(w?(S(b),b=-1):w=!0,K(P,ae-U))):(q.sortIndex=ee,e(f,q),M||y||(M=!0,ie(k))),q},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(q){var le=_;return function(){var ae=_;_=le;try{return q.apply(this,arguments)}finally{_=ae}}}})(Pd)),Pd}var hg;function Ax(){return hg||(hg=1,Cd.exports=wx()),Cd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function Rx(){if(pg)return Yn;pg=1;var s=gh(),e=Ax();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return f.call(g,n)?!0:f.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function y(n,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,u){if(r===null||typeof r>"u"||y(n,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,l,u,p,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];x[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,R);x[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,R);x[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,R);x[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,r,l,u){var p=x.hasOwnProperty(r)?x[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,u)&&(l=null),u||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,r,l):n.setAttribute(r,l))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),L=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),F=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),q=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,U;function ee(n){if(U===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var Fe=!1;function He(n,r){if(!n||Fe)return"";Fe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(se){var u=se}Reflect.construct(n,[],r)}else{try{r.call()}catch(se){u=se}n.call(r.prototype)}else{try{throw Error()}catch(se){u=se}n()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var p=se.stack.split(`
`),v=u.stack.split(`
`),T=p.length-1,I=v.length-1;1<=T&&0<=I&&p[T]!==v[I];)I--;for(;1<=T&&0<=I;T--,I--)if(p[T]!==v[I]){if(T!==1||I!==1)do if(T--,I--,0>I||p[T]!==v[I]){var B=`
`+p[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=I);break}}}finally{Fe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ee(n):""}function Ie(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=He(n.type,!1),n;case 11:return n=He(n.type.render,!1),n;case 1:return n=He(n.type,!0),n;default:return""}}function oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case L:return"Portal";case D:return"Profiler";case b:return"StrictMode";case ce:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case Z:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j:return r=n.displayName||null,r!==null?r:oe(n.type)||"Memo";case ie:r=n._payload,n=n._init;try{return oe(n(r))}catch{}}return null}function ye(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(r);case 8:return r===b?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Je(n){var r=De(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Qe(n){n._valueTracker||(n._valueTracker=Je(n))}function Vt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return n&&(u=De(n)?n.checked?"true":"false":n.value),n=u,n!==l?(r.setValue(n),!0):!1}function ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function At(n,r){var l=r.checked;return ae({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Ot(n,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=me(r.value!=null?r.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ht(n,r){r=r.checked,r!=null&&N(n,"checked",r,!1)}function Jt(n,r){ht(n,r);var l=me(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Mn(n,r.type,l):r.hasOwnProperty("defaultValue")&&Mn(n,r.type,me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ht(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Mn(n,r,l){(r!=="number"||ft(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var V=Array.isArray;function Gt(n,r,l,u){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+me(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function pt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Nt(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(V(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:me(l)}}function Ne(n,r){var l=me(r.value),u=me(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function Xt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function C(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?C(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $,he=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=$.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ge(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Pe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function ue(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function pe(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=ue(l,r[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var Ue=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(n,r){if(r){if(Ue[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function we(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function it(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,gt=null,z=null;function be(n){if(n=la(n)){if(typeof st!="function")throw Error(t(280));var r=n.stateNode;r&&(r=fl(r),st(n.stateNode,n.type,r))}}function fe(n){gt?z?z.push(n):z=[n]:gt=n}function Oe(){if(gt){var n=gt,r=z;if(z=gt=null,be(n),r)for(n=0;n<r.length;n++)be(r[n])}}function Re(n,r){return n(r)}function _e(){}var We=!1;function ot(n,r,l){if(We)return n(r,l);We=!0;try{return Re(n,r,l)}finally{We=!1,(gt!==null||z!==null)&&(_e(),Oe())}}function Bt(n,r){var l=n.stateNode;if(l===null)return null;var u=fl(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Rt=!1;if(d)try{var In={};Object.defineProperty(In,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Rt=!1}function si(n,r,l,u,p,v,T,I,B){var se=Array.prototype.slice.call(arguments,3);try{r.apply(l,se)}catch(xe){this.onError(xe)}}var ir=!1,Ds=null,ss=!1,Us=null,rr={onError:function(n){ir=!0,Ds=n}};function Vo(n,r,l,u,p,v,T,I,B){ir=!1,Ds=null,si.apply(rr,arguments)}function qa(n,r,l,u,p,v,T,I,B){if(Vo.apply(this,arguments),ir){if(ir){var se=Ds;ir=!1,Ds=null}else throw Error(t(198));ss||(ss=!0,Us=se)}}function Ui(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function os(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ho(n){if(Ui(n)!==n)throw Error(t(188))}function Fs(n){var r=n.alternate;if(!r){if(r=Ui(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,u=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return Ho(p),n;if(v===u)return Ho(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=v;else{for(var T=!1,I=p.child;I;){if(I===l){T=!0,l=p,u=v;break}if(I===u){T=!0,u=p,l=v;break}I=I.sibling}if(!T){for(I=v.child;I;){if(I===l){T=!0,l=v,u=p;break}if(I===u){T=!0,u=v,l=p;break}I=I.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Go(n){return n=Fs(n),n!==null?jo(n):null}function jo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=jo(n);if(r!==null)return r;n=n.sibling}return null}var $a=e.unstable_scheduleCallback,Za=e.unstable_cancelCallback,qc=e.unstable_shouldYield,$c=e.unstable_requestPaint,Qt=e.unstable_now,Zc=e.unstable_getCurrentPriorityLevel,Wo=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,W=e.unstable_NormalPriority,re=e.unstable_LowPriority,te=e.unstable_IdlePriority,Q=null,Ce=null;function Ve(n){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Q,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:lt,Xe=Math.log,Ze=Math.LN2;function lt(n){return n>>>=0,n===0?32:31-(Xe(n)/Ze|0)|0}var ct=64,Ke=4194304;function bt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jt(n,r){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var I=T&~p;I!==0?u=bt(I):(v&=T,v!==0&&(u=bt(v)))}else T=l&~p,T!==0?u=bt(T):v!==0&&(u=bt(v));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)l=31-Ae(r),p=1<<l,u|=n[l],r&=~p;return u}function $t(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(n,r){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Ae(v),I=1<<T,B=p[T];B===-1?((I&l)===0||(I&u)!==0)&&(p[T]=$t(I,r)):B<=r&&(n.expiredLanes|=I),v&=~I}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Be(){var n=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),n}function En(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function _t(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ae(r),n[r]=l}function zn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Ae(l),v=1<<p;r[p]=0,u[p]=-1,n[p]=-1,l&=~v}}function Vn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var u=31-Ae(l),p=1<<u;p&r|n[u]&r&&(n[u]|=r),l&=~p}}var yt=0;function sr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Pt,Yt,vi,It,xi,Fi=!1,as=[],Ar=null,Rr=null,Cr=null,Xo=new Map,Yo=new Map,Pr=[],W0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(n,r){switch(n){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Xo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(r.pointerId)}}function Ko(n,r,l,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},r!==null&&(r=la(r),r!==null&&Yt(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function X0(n,r,l,u,p){switch(r){case"focusin":return Ar=Ko(Ar,n,r,l,u,p),!0;case"dragenter":return Rr=Ko(Rr,n,r,l,u,p),!0;case"mouseover":return Cr=Ko(Cr,n,r,l,u,p),!0;case"pointerover":var v=p.pointerId;return Xo.set(v,Ko(Xo.get(v)||null,n,r,l,u,p)),!0;case"gotpointercapture":return v=p.pointerId,Yo.set(v,Ko(Yo.get(v)||null,n,r,l,u,p)),!0}return!1}function Xh(n){var r=ls(n.target);if(r!==null){var l=Ui(r);if(l!==null){if(r=l.tag,r===13){if(r=os(l),r!==null){n.blockedOn=r,xi(n.priority,function(){vi(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ja(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Qc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);Ee=u,l.target.dispatchEvent(u),Ee=null}else return r=la(l),r!==null&&Yt(r),n.blockedOn=l,!1;r.shift()}return!0}function Yh(n,r,l){Ja(n)&&l.delete(r)}function Y0(){Fi=!1,Ar!==null&&Ja(Ar)&&(Ar=null),Rr!==null&&Ja(Rr)&&(Rr=null),Cr!==null&&Ja(Cr)&&(Cr=null),Xo.forEach(Yh),Yo.forEach(Yh)}function qo(n,r){n.blockedOn===r&&(n.blockedOn=null,Fi||(Fi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Y0)))}function $o(n){function r(p){return qo(p,n)}if(0<as.length){qo(as[0],n);for(var l=1;l<as.length;l++){var u=as[l];u.blockedOn===n&&(u.blockedOn=null)}}for(Ar!==null&&qo(Ar,n),Rr!==null&&qo(Rr,n),Cr!==null&&qo(Cr,n),Xo.forEach(r),Yo.forEach(r),l=0;l<Pr.length;l++)u=Pr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<Pr.length&&(l=Pr[0],l.blockedOn===null);)Xh(l),l.blockedOn===null&&Pr.shift()}var Os=P.ReactCurrentBatchConfig,Qa=!0;function K0(n,r,l,u){var p=yt,v=Os.transition;Os.transition=null;try{yt=1,Jc(n,r,l,u)}finally{yt=p,Os.transition=v}}function q0(n,r,l,u){var p=yt,v=Os.transition;Os.transition=null;try{yt=4,Jc(n,r,l,u)}finally{yt=p,Os.transition=v}}function Jc(n,r,l,u){if(Qa){var p=Qc(n,r,l,u);if(p===null)gu(n,r,u,el,l),Wh(n,u);else if(X0(p,n,r,l,u))u.stopPropagation();else if(Wh(n,u),r&4&&-1<W0.indexOf(n)){for(;p!==null;){var v=la(p);if(v!==null&&Pt(v),v=Qc(n,r,l,u),v===null&&gu(n,r,u,el,l),v===p)break;p=v}p!==null&&u.stopPropagation()}else gu(n,r,u,null,l)}}var el=null;function Qc(n,r,l,u){if(el=null,n=it(u),n=ls(n),n!==null)if(r=Ui(n),r===null)n=null;else if(l=r.tag,l===13){if(n=os(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return el=n,null}function Kh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case Wo:return 1;case A:return 4;case W:case re:return 16;case te:return 536870912;default:return 16}default:return 16}}var Nr=null,eu=null,tl=null;function qh(){if(tl)return tl;var n,r=eu,l=r.length,u,p="value"in Nr?Nr.value:Nr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(u=1;u<=T&&r[l-u]===p[v-u];u++);return tl=p.slice(n,1<u?1-u:void 0)}function nl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function il(){return!0}function $h(){return!1}function $n(n){function r(l,u,p,v,T){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?il:$h,this.isPropagationStopped=$h,this}return ae(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),r}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=$n(ks),Zo=ae({},ks,{view:0,detail:0}),$0=$n(Zo),nu,iu,Jo,rl=ae({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Jo&&(Jo&&n.type==="mousemove"?(nu=n.screenX-Jo.screenX,iu=n.screenY-Jo.screenY):iu=nu=0,Jo=n),nu)},movementY:function(n){return"movementY"in n?n.movementY:iu}}),Zh=$n(rl),Z0=ae({},rl,{dataTransfer:0}),J0=$n(Z0),Q0=ae({},Zo,{relatedTarget:0}),ru=$n(Q0),ev=ae({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),tv=$n(ev),nv=ae({},ks,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),iv=$n(nv),rv=ae({},ks,{data:0}),Jh=$n(rv),sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=av[n])?!!r[n]:!1}function su(){return lv}var cv=ae({},Zo,{key:function(n){if(n.key){var r=sv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=nl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ov[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(n){return n.type==="keypress"?nl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?nl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),uv=$n(cv),dv=ae({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=$n(dv),fv=ae({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),hv=$n(fv),pv=ae({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=$n(pv),gv=ae({},rl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_v=$n(gv),vv=[9,13,27,32],ou=d&&"CompositionEvent"in window,Qo=null;d&&"documentMode"in document&&(Qo=document.documentMode);var xv=d&&"TextEvent"in window&&!Qo,ep=d&&(!ou||Qo&&8<Qo&&11>=Qo),tp=" ",np=!1;function ip(n,r){switch(n){case"keyup":return vv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function yv(n,r){switch(n){case"compositionend":return rp(r);case"keypress":return r.which!==32?null:(np=!0,tp);case"textInput":return n=r.data,n===tp&&np?null:n;default:return null}}function Sv(n,r){if(Bs)return n==="compositionend"||!ou&&ip(n,r)?(n=qh(),tl=eu=Nr=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ep&&r.locale!=="ko"?null:r.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Mv[n.type]:r==="textarea"}function op(n,r,l,u){fe(u),r=cl(r,"onChange"),0<r.length&&(l=new tu("onChange","change",null,l,u),n.push({event:l,listeners:r}))}var ea=null,ta=null;function Ev(n){Tp(n,0)}function sl(n){var r=js(n);if(Vt(r))return n}function Tv(n,r){if(n==="change")return r}var ap=!1;if(d){var au;if(d){var lu="oninput"in document;if(!lu){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),lu=typeof lp.oninput=="function"}au=lu}else au=!1;ap=au&&(!document.documentMode||9<document.documentMode)}function cp(){ea&&(ea.detachEvent("onpropertychange",up),ta=ea=null)}function up(n){if(n.propertyName==="value"&&sl(ta)){var r=[];op(r,ta,n,it(n)),ot(Ev,r)}}function bv(n,r,l){n==="focusin"?(cp(),ea=r,ta=l,ea.attachEvent("onpropertychange",up)):n==="focusout"&&cp()}function wv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sl(ta)}function Av(n,r){if(n==="click")return sl(r)}function Rv(n,r){if(n==="input"||n==="change")return sl(r)}function Cv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var yi=typeof Object.is=="function"?Object.is:Cv;function na(n,r){if(yi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!f.call(r,p)||!yi(n[p],r[p]))return!1}return!0}function dp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fp(n,r){var l=dp(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=r&&u>=r)return{node:l,offset:r-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=dp(l)}}function hp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?hp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function pp(){for(var n=window,r=ft();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=ft(n.document)}return r}function cu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Pv(n){var r=pp(),l=n.focusedElem,u=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&hp(l.ownerDocument.documentElement,l)){if(u!==null&&cu(l)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=fp(l,v);var T=fp(l,u);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Nv=d&&"documentMode"in document&&11>=document.documentMode,zs=null,uu=null,ia=null,du=!1;function mp(n,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;du||zs==null||zs!==ft(u)||(u=zs,"selectionStart"in u&&cu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ia&&na(ia,u)||(ia=u,u=cl(uu,"onSelect"),0<u.length&&(r=new tu("onSelect","select",null,r,l),n.push({event:r,listeners:u}),r.target=zs)))}function ol(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Vs={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},fu={},gp={};d&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function al(n){if(fu[n])return fu[n];if(!Vs[n])return n;var r=Vs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in gp)return fu[n]=r[l];return n}var _p=al("animationend"),vp=al("animationiteration"),xp=al("animationstart"),yp=al("transitionend"),Sp=new Map,Mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,r){Sp.set(n,r),a(r,[n])}for(var hu=0;hu<Mp.length;hu++){var pu=Mp[hu],Lv=pu.toLowerCase(),Iv=pu[0].toUpperCase()+pu.slice(1);Lr(Lv,"on"+Iv)}Lr(_p,"onAnimationEnd"),Lr(vp,"onAnimationIteration"),Lr(xp,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(yp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Ep(n,r,l){var u=n.type||"unknown-event";n.currentTarget=l,qa(u,r,void 0,n),n.currentTarget=null}function Tp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var v=void 0;if(r)for(var T=u.length-1;0<=T;T--){var I=u[T],B=I.instance,se=I.currentTarget;if(I=I.listener,B!==v&&p.isPropagationStopped())break e;Ep(p,I,se),v=B}else for(T=0;T<u.length;T++){if(I=u[T],B=I.instance,se=I.currentTarget,I=I.listener,B!==v&&p.isPropagationStopped())break e;Ep(p,I,se),v=B}}}if(ss)throw n=Us,ss=!1,Us=null,n}function Kt(n,r){var l=r[Mu];l===void 0&&(l=r[Mu]=new Set);var u=n+"__bubble";l.has(u)||(bp(r,n,2,!1),l.add(u))}function mu(n,r,l){var u=0;r&&(u|=4),bp(l,n,u,r)}var ll="_reactListening"+Math.random().toString(36).slice(2);function sa(n){if(!n[ll]){n[ll]=!0,i.forEach(function(l){l!=="selectionchange"&&(Dv.has(l)||mu(l,!1,n),mu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ll]||(r[ll]=!0,mu("selectionchange",!1,r))}}function bp(n,r,l,u){switch(Kh(r)){case 1:var p=K0;break;case 4:p=q0;break;default:p=Jc}l=p.bind(null,r,l,n),p=void 0,!Rt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function gu(n,r,l,u,p){var v=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var I=u.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(T===4)for(T=u.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===p||B.nodeType===8&&B.parentNode===p))return;T=T.return}for(;I!==null;){if(T=ls(I),T===null)return;if(B=T.tag,B===5||B===6){u=v=T;continue e}I=I.parentNode}}u=u.return}ot(function(){var se=v,xe=it(l),Se=[];e:{var ve=Sp.get(n);if(ve!==void 0){var ze=tu,je=n;switch(n){case"keypress":if(nl(l)===0)break e;case"keydown":case"keyup":ze=uv;break;case"focusin":je="focus",ze=ru;break;case"focusout":je="blur",ze=ru;break;case"beforeblur":case"afterblur":ze=ru;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=hv;break;case _p:case vp:case xp:ze=tv;break;case yp:ze=mv;break;case"scroll":ze=$0;break;case"wheel":ze=_v;break;case"copy":case"cut":case"paste":ze=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Qh}var Ye=(r&4)!==0,sn=!Ye&&n==="scroll",J=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var H=se,ne;H!==null;){ne=H;var Te=ne.stateNode;if(ne.tag===5&&Te!==null&&(ne=Te,J!==null&&(Te=Bt(H,J),Te!=null&&Ye.push(oa(H,Te,ne)))),sn)break;H=H.return}0<Ye.length&&(ve=new ze(ve,je,null,l,xe),Se.push({event:ve,listeners:Ye}))}}if((r&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",ve&&l!==Ee&&(je=l.relatedTarget||l.fromElement)&&(ls(je)||je[or]))break e;if((ze||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,ze?(je=l.relatedTarget||l.toElement,ze=se,je=je?ls(je):null,je!==null&&(sn=Ui(je),je!==sn||je.tag!==5&&je.tag!==6)&&(je=null)):(ze=null,je=se),ze!==je)){if(Ye=Zh,Te="onMouseLeave",J="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Qh,Te="onPointerLeave",J="onPointerEnter",H="pointer"),sn=ze==null?ve:js(ze),ne=je==null?ve:js(je),ve=new Ye(Te,H+"leave",ze,l,xe),ve.target=sn,ve.relatedTarget=ne,Te=null,ls(xe)===se&&(Ye=new Ye(J,H+"enter",je,l,xe),Ye.target=ne,Ye.relatedTarget=sn,Te=Ye),sn=Te,ze&&je)t:{for(Ye=ze,J=je,H=0,ne=Ye;ne;ne=Hs(ne))H++;for(ne=0,Te=J;Te;Te=Hs(Te))ne++;for(;0<H-ne;)Ye=Hs(Ye),H--;for(;0<ne-H;)J=Hs(J),ne--;for(;H--;){if(Ye===J||J!==null&&Ye===J.alternate)break t;Ye=Hs(Ye),J=Hs(J)}Ye=null}else Ye=null;ze!==null&&wp(Se,ve,ze,Ye,!1),je!==null&&sn!==null&&wp(Se,sn,je,Ye,!0)}}e:{if(ve=se?js(se):window,ze=ve.nodeName&&ve.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ve.type==="file")var qe=Tv;else if(sp(ve))if(ap)qe=Rv;else{qe=wv;var et=bv}else(ze=ve.nodeName)&&ze.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(qe=Av);if(qe&&(qe=qe(n,se))){op(Se,qe,l,xe);break e}et&&et(n,ve,se),n==="focusout"&&(et=ve._wrapperState)&&et.controlled&&ve.type==="number"&&Mn(ve,"number",ve.value)}switch(et=se?js(se):window,n){case"focusin":(sp(et)||et.contentEditable==="true")&&(zs=et,uu=se,ia=null);break;case"focusout":ia=uu=zs=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,mp(Se,l,xe);break;case"selectionchange":if(Nv)break;case"keydown":case"keyup":mp(Se,l,xe)}var tt;if(ou)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Bs?ip(n,l)&&(rt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(rt="onCompositionStart");rt&&(ep&&l.locale!=="ko"&&(Bs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Bs&&(tt=qh()):(Nr=xe,eu="value"in Nr?Nr.value:Nr.textContent,Bs=!0)),et=cl(se,rt),0<et.length&&(rt=new Jh(rt,n,null,l,xe),Se.push({event:rt,listeners:et}),tt?rt.data=tt:(tt=rp(l),tt!==null&&(rt.data=tt)))),(tt=xv?yv(n,l):Sv(n,l))&&(se=cl(se,"onBeforeInput"),0<se.length&&(xe=new Jh("onBeforeInput","beforeinput",null,l,xe),Se.push({event:xe,listeners:se}),xe.data=tt))}Tp(Se,r)})}function oa(n,r,l){return{instance:n,listener:r,currentTarget:l}}function cl(n,r){for(var l=r+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Bt(n,l),v!=null&&u.unshift(oa(n,v,p)),v=Bt(n,r),v!=null&&u.push(oa(n,v,p))),n=n.return}return u}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wp(n,r,l,u,p){for(var v=r._reactName,T=[];l!==null&&l!==u;){var I=l,B=I.alternate,se=I.stateNode;if(B!==null&&B===u)break;I.tag===5&&se!==null&&(I=se,p?(B=Bt(l,v),B!=null&&T.unshift(oa(l,B,I))):p||(B=Bt(l,v),B!=null&&T.push(oa(l,B,I)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var Uv=/\r\n?/g,Fv=/\u0000|\uFFFD/g;function Ap(n){return(typeof n=="string"?n:""+n).replace(Uv,`
`).replace(Fv,"")}function ul(n,r,l){if(r=Ap(r),Ap(n)!==r&&l)throw Error(t(425))}function dl(){}var _u=null,vu=null;function xu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,Ov=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,kv=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(n){return Rp.resolve(null).then(n).catch(Bv)}:yu;function Bv(n){setTimeout(function(){throw n})}function Su(n,r){var l=r,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),$o(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);$o(r)}function Ir(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Cp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Oi="__reactFiber$"+Gs,aa="__reactProps$"+Gs,or="__reactContainer$"+Gs,Mu="__reactEvents$"+Gs,zv="__reactListeners$"+Gs,Vv="__reactHandles$"+Gs;function ls(n){var r=n[Oi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[or]||l[Oi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Cp(n);n!==null;){if(l=n[Oi])return l;n=Cp(n)}return r}n=l,l=n.parentNode}return null}function la(n){return n=n[Oi]||n[or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function fl(n){return n[aa]||null}var Eu=[],Ws=-1;function Dr(n){return{current:n}}function qt(n){0>Ws||(n.current=Eu[Ws],Eu[Ws]=null,Ws--)}function Wt(n,r){Ws++,Eu[Ws]=n.current,n.current=r}var Ur={},An=Dr(Ur),Hn=Dr(!1),cs=Ur;function Xs(n,r){var l=n.type.contextTypes;if(!l)return Ur;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Gn(n){return n=n.childContextTypes,n!=null}function hl(){qt(Hn),qt(An)}function Pp(n,r,l){if(An.current!==Ur)throw Error(t(168));Wt(An,r),Wt(Hn,l)}function Np(n,r,l){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,ye(n)||"Unknown",p));return ae({},l,u)}function pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,cs=An.current,Wt(An,n),Wt(Hn,Hn.current),!0}function Lp(n,r,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=Np(n,r,cs),u.__reactInternalMemoizedMergedChildContext=n,qt(Hn),qt(An),Wt(An,n)):qt(Hn),Wt(Hn,l)}var ar=null,ml=!1,Tu=!1;function Ip(n){ar===null?ar=[n]:ar.push(n)}function Hv(n){ml=!0,Ip(n)}function Fr(){if(!Tu&&ar!==null){Tu=!0;var n=0,r=yt;try{var l=ar;for(yt=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}ar=null,ml=!1}catch(p){throw ar!==null&&(ar=ar.slice(n+1)),$a(Wo,Fr),p}finally{yt=r,Tu=!1}}return null}var Ys=[],Ks=0,gl=null,_l=0,oi=[],ai=0,us=null,lr=1,cr="";function ds(n,r){Ys[Ks++]=_l,Ys[Ks++]=gl,gl=n,_l=r}function Dp(n,r,l){oi[ai++]=lr,oi[ai++]=cr,oi[ai++]=us,us=n;var u=lr;n=cr;var p=32-Ae(u)-1;u&=~(1<<p),l+=1;var v=32-Ae(r)+p;if(30<v){var T=p-p%5;v=(u&(1<<T)-1).toString(32),u>>=T,p-=T,lr=1<<32-Ae(r)+p|l<<p|u,cr=v+n}else lr=1<<v|l<<p|u,cr=n}function bu(n){n.return!==null&&(ds(n,1),Dp(n,1,0))}function wu(n){for(;n===gl;)gl=Ys[--Ks],Ys[Ks]=null,_l=Ys[--Ks],Ys[Ks]=null;for(;n===us;)us=oi[--ai],oi[ai]=null,cr=oi[--ai],oi[ai]=null,lr=oi[--ai],oi[ai]=null}var Zn=null,Jn=null,Zt=!1,Si=null;function Up(n,r){var l=di(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Fp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Zn=n,Jn=Ir(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Zn=n,Jn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=us!==null?{id:lr,overflow:cr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=di(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Zn=n,Jn=null,!0):!1;default:return!1}}function Au(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ru(n){if(Zt){var r=Jn;if(r){var l=r;if(!Fp(n,r)){if(Au(n))throw Error(t(418));r=Ir(l.nextSibling);var u=Zn;r&&Fp(n,r)?Up(u,l):(n.flags=n.flags&-4097|2,Zt=!1,Zn=n)}}else{if(Au(n))throw Error(t(418));n.flags=n.flags&-4097|2,Zt=!1,Zn=n}}}function Op(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function vl(n){if(n!==Zn)return!1;if(!Zt)return Op(n),Zt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!xu(n.type,n.memoizedProps)),r&&(r=Jn)){if(Au(n))throw kp(),Error(t(418));for(;r;)Up(n,r),r=Ir(r.nextSibling)}if(Op(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Jn=Ir(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Jn=null}}else Jn=Zn?Ir(n.stateNode.nextSibling):null;return!0}function kp(){for(var n=Jn;n;)n=Ir(n.nextSibling)}function qs(){Jn=Zn=null,Zt=!1}function Cu(n){Si===null?Si=[n]:Si.push(n)}var Gv=P.ReactCurrentBatchConfig;function ca(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var I=p.refs;T===null?delete I[v]:I[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function xl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Bp(n){var r=n._init;return r(n._payload)}function zp(n){function r(J,H){if(n){var ne=J.deletions;ne===null?(J.deletions=[H],J.flags|=16):ne.push(H)}}function l(J,H){if(!n)return null;for(;H!==null;)r(J,H),H=H.sibling;return null}function u(J,H){for(J=new Map;H!==null;)H.key!==null?J.set(H.key,H):J.set(H.index,H),H=H.sibling;return J}function p(J,H){return J=jr(J,H),J.index=0,J.sibling=null,J}function v(J,H,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<H?(J.flags|=2,H):ne):(J.flags|=2,H)):(J.flags|=1048576,H)}function T(J){return n&&J.alternate===null&&(J.flags|=2),J}function I(J,H,ne,Te){return H===null||H.tag!==6?(H=yd(ne,J.mode,Te),H.return=J,H):(H=p(H,ne),H.return=J,H)}function B(J,H,ne,Te){var qe=ne.type;return qe===O?xe(J,H,ne.props.children,Te,ne.key):H!==null&&(H.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ie&&Bp(qe)===H.type)?(Te=p(H,ne.props),Te.ref=ca(J,H,ne),Te.return=J,Te):(Te=Gl(ne.type,ne.key,ne.props,null,J.mode,Te),Te.ref=ca(J,H,ne),Te.return=J,Te)}function se(J,H,ne,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==ne.containerInfo||H.stateNode.implementation!==ne.implementation?(H=Sd(ne,J.mode,Te),H.return=J,H):(H=p(H,ne.children||[]),H.return=J,H)}function xe(J,H,ne,Te,qe){return H===null||H.tag!==7?(H=xs(ne,J.mode,Te,qe),H.return=J,H):(H=p(H,ne),H.return=J,H)}function Se(J,H,ne){if(typeof H=="string"&&H!==""||typeof H=="number")return H=yd(""+H,J.mode,ne),H.return=J,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case k:return ne=Gl(H.type,H.key,H.props,null,J.mode,ne),ne.ref=ca(J,null,H),ne.return=J,ne;case L:return H=Sd(H,J.mode,ne),H.return=J,H;case ie:var Te=H._init;return Se(J,Te(H._payload),ne)}if(V(H)||le(H))return H=xs(H,J.mode,ne,null),H.return=J,H;xl(J,H)}return null}function ve(J,H,ne,Te){var qe=H!==null?H.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return qe!==null?null:I(J,H,""+ne,Te);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case k:return ne.key===qe?B(J,H,ne,Te):null;case L:return ne.key===qe?se(J,H,ne,Te):null;case ie:return qe=ne._init,ve(J,H,qe(ne._payload),Te)}if(V(ne)||le(ne))return qe!==null?null:xe(J,H,ne,Te,null);xl(J,ne)}return null}function ze(J,H,ne,Te,qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return J=J.get(ne)||null,I(H,J,""+Te,qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case k:return J=J.get(Te.key===null?ne:Te.key)||null,B(H,J,Te,qe);case L:return J=J.get(Te.key===null?ne:Te.key)||null,se(H,J,Te,qe);case ie:var et=Te._init;return ze(J,H,ne,et(Te._payload),qe)}if(V(Te)||le(Te))return J=J.get(ne)||null,xe(H,J,Te,qe,null);xl(H,Te)}return null}function je(J,H,ne,Te){for(var qe=null,et=null,tt=H,rt=H=0,xn=null;tt!==null&&rt<ne.length;rt++){tt.index>rt?(xn=tt,tt=null):xn=tt.sibling;var Ct=ve(J,tt,ne[rt],Te);if(Ct===null){tt===null&&(tt=xn);break}n&&tt&&Ct.alternate===null&&r(J,tt),H=v(Ct,H,rt),et===null?qe=Ct:et.sibling=Ct,et=Ct,tt=xn}if(rt===ne.length)return l(J,tt),Zt&&ds(J,rt),qe;if(tt===null){for(;rt<ne.length;rt++)tt=Se(J,ne[rt],Te),tt!==null&&(H=v(tt,H,rt),et===null?qe=tt:et.sibling=tt,et=tt);return Zt&&ds(J,rt),qe}for(tt=u(J,tt);rt<ne.length;rt++)xn=ze(tt,J,rt,ne[rt],Te),xn!==null&&(n&&xn.alternate!==null&&tt.delete(xn.key===null?rt:xn.key),H=v(xn,H,rt),et===null?qe=xn:et.sibling=xn,et=xn);return n&&tt.forEach(function(Wr){return r(J,Wr)}),Zt&&ds(J,rt),qe}function Ye(J,H,ne,Te){var qe=le(ne);if(typeof qe!="function")throw Error(t(150));if(ne=qe.call(ne),ne==null)throw Error(t(151));for(var et=qe=null,tt=H,rt=H=0,xn=null,Ct=ne.next();tt!==null&&!Ct.done;rt++,Ct=ne.next()){tt.index>rt?(xn=tt,tt=null):xn=tt.sibling;var Wr=ve(J,tt,Ct.value,Te);if(Wr===null){tt===null&&(tt=xn);break}n&&tt&&Wr.alternate===null&&r(J,tt),H=v(Wr,H,rt),et===null?qe=Wr:et.sibling=Wr,et=Wr,tt=xn}if(Ct.done)return l(J,tt),Zt&&ds(J,rt),qe;if(tt===null){for(;!Ct.done;rt++,Ct=ne.next())Ct=Se(J,Ct.value,Te),Ct!==null&&(H=v(Ct,H,rt),et===null?qe=Ct:et.sibling=Ct,et=Ct);return Zt&&ds(J,rt),qe}for(tt=u(J,tt);!Ct.done;rt++,Ct=ne.next())Ct=ze(tt,J,rt,Ct.value,Te),Ct!==null&&(n&&Ct.alternate!==null&&tt.delete(Ct.key===null?rt:Ct.key),H=v(Ct,H,rt),et===null?qe=Ct:et.sibling=Ct,et=Ct);return n&&tt.forEach(function(Mx){return r(J,Mx)}),Zt&&ds(J,rt),qe}function sn(J,H,ne,Te){if(typeof ne=="object"&&ne!==null&&ne.type===O&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case k:e:{for(var qe=ne.key,et=H;et!==null;){if(et.key===qe){if(qe=ne.type,qe===O){if(et.tag===7){l(J,et.sibling),H=p(et,ne.props.children),H.return=J,J=H;break e}}else if(et.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ie&&Bp(qe)===et.type){l(J,et.sibling),H=p(et,ne.props),H.ref=ca(J,et,ne),H.return=J,J=H;break e}l(J,et);break}else r(J,et);et=et.sibling}ne.type===O?(H=xs(ne.props.children,J.mode,Te,ne.key),H.return=J,J=H):(Te=Gl(ne.type,ne.key,ne.props,null,J.mode,Te),Te.ref=ca(J,H,ne),Te.return=J,J=Te)}return T(J);case L:e:{for(et=ne.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===ne.containerInfo&&H.stateNode.implementation===ne.implementation){l(J,H.sibling),H=p(H,ne.children||[]),H.return=J,J=H;break e}else{l(J,H);break}else r(J,H);H=H.sibling}H=Sd(ne,J.mode,Te),H.return=J,J=H}return T(J);case ie:return et=ne._init,sn(J,H,et(ne._payload),Te)}if(V(ne))return je(J,H,ne,Te);if(le(ne))return Ye(J,H,ne,Te);xl(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,H!==null&&H.tag===6?(l(J,H.sibling),H=p(H,ne),H.return=J,J=H):(l(J,H),H=yd(ne,J.mode,Te),H.return=J,J=H),T(J)):l(J,H)}return sn}var $s=zp(!0),Vp=zp(!1),yl=Dr(null),Sl=null,Zs=null,Pu=null;function Nu(){Pu=Zs=Sl=null}function Lu(n){var r=yl.current;qt(yl),n._currentValue=r}function Iu(n,r,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===l)break;n=n.return}}function Js(n,r){Sl=n,Pu=Zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(jn=!0),n.firstContext=null)}function li(n){var r=n._currentValue;if(Pu!==n)if(n={context:n,memoizedValue:r,next:null},Zs===null){if(Sl===null)throw Error(t(308));Zs=n,Sl.dependencies={lanes:0,firstContext:n}}else Zs=Zs.next=n;return r}var fs=null;function Du(n){fs===null?fs=[n]:fs.push(n)}function Hp(n,r,l,u){var p=r.interleaved;return p===null?(l.next=l,Du(r)):(l.next=p.next,p.next=l),r.interleaved=l,ur(n,u)}function ur(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Or=!1;function Uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function kr(n,r,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(wt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,ur(n,l)}return p=u.interleaved,p===null?(r.next=r,Du(u)):(r.next=p.next,p.next=r),u.interleaved=r,ur(n,l)}function Ml(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Vn(n,l)}}function jp(n,r){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function El(n,r,l,u){var p=n.updateQueue;Or=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var B=I,se=B.next;B.next=null,T===null?v=se:T.next=se,T=B;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==T&&(I===null?xe.firstBaseUpdate=se:I.next=se,xe.lastBaseUpdate=B))}if(v!==null){var Se=p.baseState;T=0,xe=se=B=null,I=v;do{var ve=I.lane,ze=I.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:ze,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=n,Ye=I;switch(ve=r,ze=l,Ye.tag){case 1:if(je=Ye.payload,typeof je=="function"){Se=je.call(ze,Se,ve);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ye.payload,ve=typeof je=="function"?je.call(ze,Se,ve):je,ve==null)break e;Se=ae({},Se,ve);break e;case 2:Or=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ve=p.effects,ve===null?p.effects=[I]:ve.push(I))}else ze={eventTime:ze,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(se=xe=ze,B=Se):xe=xe.next=ze,T|=ve;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,p.lastBaseUpdate=ve,p.shared.pending=null}}while(!0);if(xe===null&&(B=Se),p.baseState=B,p.firstBaseUpdate=se,p.lastBaseUpdate=xe,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);ms|=T,n.lanes=T,n.memoizedState=Se}}function Wp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ua={},ki=Dr(ua),da=Dr(ua),fa=Dr(ua);function hs(n){if(n===ua)throw Error(t(174));return n}function Fu(n,r){switch(Wt(fa,r),Wt(da,n),Wt(ki,ua),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:E(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=E(r,n)}qt(ki),Wt(ki,r)}function Qs(){qt(ki),qt(da),qt(fa)}function Xp(n){hs(fa.current);var r=hs(ki.current),l=E(r,n.type);r!==l&&(Wt(da,n),Wt(ki,l))}function Ou(n){da.current===n&&(qt(ki),qt(da))}var en=Dr(0);function Tl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ku=[];function Bu(){for(var n=0;n<ku.length;n++)ku[n]._workInProgressVersionPrimary=null;ku.length=0}var bl=P.ReactCurrentDispatcher,zu=P.ReactCurrentBatchConfig,ps=0,tn=null,un=null,_n=null,wl=!1,ha=!1,pa=0,jv=0;function Rn(){throw Error(t(321))}function Vu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!yi(n[l],r[l]))return!1;return!0}function Hu(n,r,l,u,p,v){if(ps=v,tn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,bl.current=n===null||n.memoizedState===null?Kv:qv,n=l(u,p),ha){v=0;do{if(ha=!1,pa=0,25<=v)throw Error(t(301));v+=1,_n=un=null,r.updateQueue=null,bl.current=$v,n=l(u,p)}while(ha)}if(bl.current=Cl,r=un!==null&&un.next!==null,ps=0,_n=un=tn=null,wl=!1,r)throw Error(t(300));return n}function Gu(){var n=pa!==0;return pa=0,n}function Bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?tn.memoizedState=_n=n:_n=_n.next=n,_n}function ci(){if(un===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var r=_n===null?tn.memoizedState:_n.next;if(r!==null)_n=r,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},_n===null?tn.memoizedState=_n=n:_n=_n.next=n}return _n}function ma(n,r){return typeof r=="function"?r(n):r}function ju(n){var r=ci(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=un,p=u.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}u.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,u=u.baseState;var I=T=null,B=null,se=v;do{var xe=se.lane;if((ps&xe)===xe)B!==null&&(B=B.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:n(u,se.action);else{var Se={lane:xe,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};B===null?(I=B=Se,T=u):B=B.next=Se,tn.lanes|=xe,ms|=xe}se=se.next}while(se!==null&&se!==v);B===null?T=u:B.next=I,yi(u,r.memoizedState)||(jn=!0),r.memoizedState=u,r.baseState=T,r.baseQueue=B,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do v=p.lane,tn.lanes|=v,ms|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Wu(n){var r=ci(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);yi(v,r.memoizedState)||(jn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,u]}function Yp(){}function Kp(n,r){var l=tn,u=ci(),p=r(),v=!yi(u.memoizedState,p);if(v&&(u.memoizedState=p,jn=!0),u=u.queue,Xu(Zp.bind(null,l,u,n),[n]),u.getSnapshot!==r||v||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,ga(9,$p.bind(null,l,u,p,r),void 0,null),vn===null)throw Error(t(349));(ps&30)!==0||qp(l,r,p)}return p}function qp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function $p(n,r,l,u){r.value=l,r.getSnapshot=u,Jp(r)&&Qp(n)}function Zp(n,r,l){return l(function(){Jp(r)&&Qp(n)})}function Jp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!yi(n,l)}catch{return!0}}function Qp(n){var r=ur(n,1);r!==null&&bi(r,n,1,-1)}function em(n){var r=Bi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:n},r.queue=n,n=n.dispatch=Yv.bind(null,tn,n),[r.memoizedState,n]}function ga(n,r,l,u){return n={tag:n,create:r,destroy:l,deps:u,next:null},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,r.lastEffect=n)),n}function tm(){return ci().memoizedState}function Al(n,r,l,u){var p=Bi();tn.flags|=n,p.memoizedState=ga(1|r,l,void 0,u===void 0?null:u)}function Rl(n,r,l,u){var p=ci();u=u===void 0?null:u;var v=void 0;if(un!==null){var T=un.memoizedState;if(v=T.destroy,u!==null&&Vu(u,T.deps)){p.memoizedState=ga(r,l,v,u);return}}tn.flags|=n,p.memoizedState=ga(1|r,l,v,u)}function nm(n,r){return Al(8390656,8,n,r)}function Xu(n,r){return Rl(2048,8,n,r)}function im(n,r){return Rl(4,2,n,r)}function rm(n,r){return Rl(4,4,n,r)}function sm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function om(n,r,l){return l=l!=null?l.concat([n]):null,Rl(4,4,sm.bind(null,r,n),l)}function Yu(){}function am(n,r){var l=ci();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Vu(r,u[1])?u[0]:(l.memoizedState=[n,r],n)}function lm(n,r){var l=ci();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Vu(r,u[1])?u[0]:(n=n(),l.memoizedState=[n,r],n)}function cm(n,r,l){return(ps&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=l):(yi(l,r)||(l=Be(),tn.lanes|=l,ms|=l,n.baseState=!0),r)}function Wv(n,r){var l=yt;yt=l!==0&&4>l?l:4,n(!0);var u=zu.transition;zu.transition={};try{n(!1),r()}finally{yt=l,zu.transition=u}}function um(){return ci().memoizedState}function Xv(n,r,l){var u=Hr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},dm(n))fm(r,l);else if(l=Hp(n,r,l,u),l!==null){var p=Un();bi(l,n,u,p),hm(l,r,u)}}function Yv(n,r,l){var u=Hr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(dm(n))fm(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,I=v(T,l);if(p.hasEagerState=!0,p.eagerState=I,yi(I,T)){var B=r.interleaved;B===null?(p.next=p,Du(r)):(p.next=B.next,B.next=p),r.interleaved=p;return}}catch{}finally{}l=Hp(n,r,p,u),l!==null&&(p=Un(),bi(l,n,u,p),hm(l,r,u))}}function dm(n){var r=n.alternate;return n===tn||r!==null&&r===tn}function fm(n,r){ha=wl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function hm(n,r,l){if((l&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Vn(n,l)}}var Cl={readContext:li,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Kv={readContext:li,useCallback:function(n,r){return Bi().memoizedState=[n,r===void 0?null:r],n},useContext:li,useEffect:nm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Al(4194308,4,sm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Al(4194308,4,n,r)},useInsertionEffect:function(n,r){return Al(4,2,n,r)},useMemo:function(n,r){var l=Bi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var u=Bi();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Xv.bind(null,tn,n),[u.memoizedState,n]},useRef:function(n){var r=Bi();return n={current:n},r.memoizedState=n},useState:em,useDebugValue:Yu,useDeferredValue:function(n){return Bi().memoizedState=n},useTransition:function(){var n=em(!1),r=n[0];return n=Wv.bind(null,n[1]),Bi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var u=tn,p=Bi();if(Zt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),vn===null)throw Error(t(349));(ps&30)!==0||qp(u,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,nm(Zp.bind(null,u,v,n),[n]),u.flags|=2048,ga(9,$p.bind(null,u,v,l,r),void 0,null),l},useId:function(){var n=Bi(),r=vn.identifierPrefix;if(Zt){var l=cr,u=lr;l=(u&~(1<<32-Ae(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=pa++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=jv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},qv={readContext:li,useCallback:am,useContext:li,useEffect:Xu,useImperativeHandle:om,useInsertionEffect:im,useLayoutEffect:rm,useMemo:lm,useReducer:ju,useRef:tm,useState:function(){return ju(ma)},useDebugValue:Yu,useDeferredValue:function(n){var r=ci();return cm(r,un.memoizedState,n)},useTransition:function(){var n=ju(ma)[0],r=ci().memoizedState;return[n,r]},useMutableSource:Yp,useSyncExternalStore:Kp,useId:um,unstable_isNewReconciler:!1},$v={readContext:li,useCallback:am,useContext:li,useEffect:Xu,useImperativeHandle:om,useInsertionEffect:im,useLayoutEffect:rm,useMemo:lm,useReducer:Wu,useRef:tm,useState:function(){return Wu(ma)},useDebugValue:Yu,useDeferredValue:function(n){var r=ci();return un===null?r.memoizedState=n:cm(r,un.memoizedState,n)},useTransition:function(){var n=Wu(ma)[0],r=ci().memoizedState;return[n,r]},useMutableSource:Yp,useSyncExternalStore:Kp,useId:um,unstable_isNewReconciler:!1};function Mi(n,r){if(n&&n.defaultProps){r=ae({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Ku(n,r,l,u){r=n.memoizedState,l=l(u,r),l=l==null?r:ae({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Pl={isMounted:function(n){return(n=n._reactInternals)?Ui(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var u=Un(),p=Hr(n),v=dr(u,p);v.payload=r,l!=null&&(v.callback=l),r=kr(n,v,p),r!==null&&(bi(r,n,p,u),Ml(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var u=Un(),p=Hr(n),v=dr(u,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=kr(n,v,p),r!==null&&(bi(r,n,p,u),Ml(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Un(),u=Hr(n),p=dr(l,u);p.tag=2,r!=null&&(p.callback=r),r=kr(n,p,u),r!==null&&(bi(r,n,u,l),Ml(r,n,u))}};function pm(n,r,l,u,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,T):r.prototype&&r.prototype.isPureReactComponent?!na(l,u)||!na(p,v):!0}function mm(n,r,l){var u=!1,p=Ur,v=r.contextType;return typeof v=="object"&&v!==null?v=li(v):(p=Gn(r)?cs:An.current,u=r.contextTypes,v=(u=u!=null)?Xs(n,p):Ur),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Pl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function gm(n,r,l,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==n&&Pl.enqueueReplaceState(r,r.state,null)}function qu(n,r,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Uu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=li(v):(v=Gn(r)?cs:An.current,p.context=Xs(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Ku(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Pl.enqueueReplaceState(p,p.state,null),El(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,r){try{var l="",u=r;do l+=Ie(u),u=u.return;while(u);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function $u(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Zv=typeof WeakMap=="function"?WeakMap:Map;function _m(n,r,l){l=dr(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){Ol||(Ol=!0,fd=u),Zu(n,r)},l}function vm(n,r,l){l=dr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;l.payload=function(){return u(p)},l.callback=function(){Zu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Zu(n,r),typeof u!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function xm(n,r,l){var u=n.pingCache;if(u===null){u=n.pingCache=new Zv;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(l)||(p.add(l),n=dx.bind(null,n,r,l),r.then(n,n))}function ym(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Sm(n,r,l,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=dr(-1,1),r.tag=2,kr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Jv=P.ReactCurrentOwner,jn=!1;function Dn(n,r,l,u){r.child=n===null?Vp(r,null,l,u):$s(r,n.child,l,u)}function Mm(n,r,l,u,p){l=l.render;var v=r.ref;return Js(r,p),u=Hu(n,r,l,u,v,p),l=Gu(),n!==null&&!jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,fr(n,r,p)):(Zt&&l&&bu(r),r.flags|=1,Dn(n,r,u,p),r.child)}function Em(n,r,l,u,p){if(n===null){var v=l.type;return typeof v=="function"&&!xd(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Tm(n,r,v,u,p)):(n=Gl(l.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:na,l(T,u)&&n.ref===r.ref)return fr(n,r,p)}return r.flags|=1,n=jr(v,u),n.ref=r.ref,n.return=r,r.child=n}function Tm(n,r,l,u,p){if(n!==null){var v=n.memoizedProps;if(na(v,u)&&n.ref===r.ref)if(jn=!1,r.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(jn=!0);else return r.lanes=n.lanes,fr(n,r,p)}return Ju(n,r,l,u,p)}function bm(n,r,l){var u=r.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(no,Qn),Qn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Wt(no,Qn),Qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:l,Wt(no,Qn),Qn|=u}else v!==null?(u=v.baseLanes|l,r.memoizedState=null):u=l,Wt(no,Qn),Qn|=u;return Dn(n,r,p,l),r.child}function wm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Ju(n,r,l,u,p){var v=Gn(l)?cs:An.current;return v=Xs(r,v),Js(r,p),l=Hu(n,r,l,u,v,p),u=Gu(),n!==null&&!jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,fr(n,r,p)):(Zt&&u&&bu(r),r.flags|=1,Dn(n,r,l,p),r.child)}function Am(n,r,l,u,p){if(Gn(l)){var v=!0;pl(r)}else v=!1;if(Js(r,p),r.stateNode===null)Ll(n,r),mm(r,l,u),qu(r,l,u,p),u=!0;else if(n===null){var T=r.stateNode,I=r.memoizedProps;T.props=I;var B=T.context,se=l.contextType;typeof se=="object"&&se!==null?se=li(se):(se=Gn(l)?cs:An.current,se=Xs(r,se));var xe=l.getDerivedStateFromProps,Se=typeof xe=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==u||B!==se)&&gm(r,T,u,se),Or=!1;var ve=r.memoizedState;T.state=ve,El(r,u,T,p),B=r.memoizedState,I!==u||ve!==B||Hn.current||Or?(typeof xe=="function"&&(Ku(r,l,xe,u),B=r.memoizedState),(I=Or||pm(r,l,I,u,ve,B,se))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=B),T.props=u,T.state=B,T.context=se,u=I):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{T=r.stateNode,Gp(n,r),I=r.memoizedProps,se=r.type===r.elementType?I:Mi(r.type,I),T.props=se,Se=r.pendingProps,ve=T.context,B=l.contextType,typeof B=="object"&&B!==null?B=li(B):(B=Gn(l)?cs:An.current,B=Xs(r,B));var ze=l.getDerivedStateFromProps;(xe=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==Se||ve!==B)&&gm(r,T,u,B),Or=!1,ve=r.memoizedState,T.state=ve,El(r,u,T,p);var je=r.memoizedState;I!==Se||ve!==je||Hn.current||Or?(typeof ze=="function"&&(Ku(r,l,ze,u),je=r.memoizedState),(se=Or||pm(r,l,se,u,ve,je,B)||!1)?(xe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,je,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,je,B)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=je),T.props=u,T.state=je,T.context=B,u=se):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),u=!1)}return Qu(n,r,l,u,v,p)}function Qu(n,r,l,u,p,v){wm(n,r);var T=(r.flags&128)!==0;if(!u&&!T)return p&&Lp(r,l,!1),fr(n,r,v);u=r.stateNode,Jv.current=r;var I=T&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&T?(r.child=$s(r,n.child,null,v),r.child=$s(r,null,I,v)):Dn(n,r,I,v),r.memoizedState=u.state,p&&Lp(r,l,!0),r.child}function Rm(n){var r=n.stateNode;r.pendingContext?Pp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Pp(n,r.context,!1),Fu(n,r.containerInfo)}function Cm(n,r,l,u,p){return qs(),Cu(p),r.flags|=256,Dn(n,r,l,u),r.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pm(n,r,l){var u=r.pendingProps,p=en.current,v=!1,T=(r.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(p&2)!==0),I?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Wt(en,p&1),n===null)return Ru(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=u.children,n=u.fallback,v?(u=r.mode,v=r.child,T={mode:"hidden",children:T},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=jl(T,u,0,null),n=xs(n,u,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=td(l),r.memoizedState=ed,n):nd(r,T));if(p=n.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return Qv(n,r,T,u,I,p,l);if(v){v=u.fallback,T=r.mode,p=n.child,I=p.sibling;var B={mode:"hidden",children:u.children};return(T&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=B,r.deletions=null):(u=jr(p,B),u.subtreeFlags=p.subtreeFlags&14680064),I!==null?v=jr(I,v):(v=xs(v,T,l,null),v.flags|=2),v.return=r,u.return=r,u.sibling=v,r.child=u,u=v,v=r.child,T=n.child.memoizedState,T=T===null?td(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=ed,u}return v=n.child,n=v.sibling,u=jr(v,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=u,r.memoizedState=null,u}function nd(n,r){return r=jl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Nl(n,r,l,u){return u!==null&&Cu(u),$s(r,n.child,null,l),n=nd(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Qv(n,r,l,u,p,v,T){if(l)return r.flags&256?(r.flags&=-257,u=$u(Error(t(422))),Nl(n,r,T,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=u.fallback,p=r.mode,u=jl({mode:"visible",children:u.children},p,0,null),v=xs(v,p,T,null),v.flags|=2,u.return=r,v.return=r,u.sibling=v,r.child=u,(r.mode&1)!==0&&$s(r,n.child,null,T),r.child.memoizedState=td(T),r.memoizedState=ed,v);if((r.mode&1)===0)return Nl(n,r,T,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var I=u.dgst;return u=I,v=Error(t(419)),u=$u(v,u,void 0),Nl(n,r,T,u)}if(I=(T&n.childLanes)!==0,jn||I){if(u=vn,u!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,ur(n,p),bi(u,n,p,-1))}return vd(),u=$u(Error(t(421))),Nl(n,r,T,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=fx.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Jn=Ir(p.nextSibling),Zn=r,Zt=!0,Si=null,n!==null&&(oi[ai++]=lr,oi[ai++]=cr,oi[ai++]=us,lr=n.id,cr=n.overflow,us=r),r=nd(r,u.children),r.flags|=4096,r)}function Nm(n,r,l){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Iu(n.return,r,l)}function id(n,r,l,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=l,v.tailMode=p)}function Lm(n,r,l){var u=r.pendingProps,p=u.revealOrder,v=u.tail;if(Dn(n,r,u.children,l),u=en.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Nm(n,l,r);else if(n.tag===19)Nm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Wt(en,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&Tl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),id(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Tl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}id(r,!0,l,null,v);break;case"together":id(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ll(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function fr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),ms|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=jr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=jr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function ex(n,r,l){switch(r.tag){case 3:Rm(r),qs();break;case 5:Xp(r);break;case 1:Gn(r.type)&&pl(r);break;case 4:Fu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Wt(yl,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Wt(en,en.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Pm(n,r,l):(Wt(en,en.current&1),n=fr(n,r,l),n!==null?n.sibling:null);Wt(en,en.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Lm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Wt(en,en.current),u)break;return null;case 22:case 23:return r.lanes=0,bm(n,r,l)}return fr(n,r,l)}var Im,rd,Dm,Um;Im=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},rd=function(){},Dm=function(n,r,l,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,hs(ki.current);var v=null;switch(l){case"input":p=At(n,p),u=At(n,u),v=[];break;case"select":p=ae({},p,{value:void 0}),u=ae({},u,{value:void 0}),v=[];break;case"textarea":p=pt(n,p),u=pt(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=dl)}ke(l,u);var T;l=null;for(se in p)if(!u.hasOwnProperty(se)&&p.hasOwnProperty(se)&&p[se]!=null)if(se==="style"){var I=p[se];for(T in I)I.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?v||(v=[]):(v=v||[]).push(se,null));for(se in u){var B=u[se];if(I=p!=null?p[se]:void 0,u.hasOwnProperty(se)&&B!==I&&(B!=null||I!=null))if(se==="style")if(I){for(T in I)!I.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in B)B.hasOwnProperty(T)&&I[T]!==B[T]&&(l||(l={}),l[T]=B[T])}else l||(v||(v=[]),v.push(se,l)),l=B;else se==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(v=v||[]).push(se,B)):se==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(se,""+B):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(B!=null&&se==="onScroll"&&Kt("scroll",n),v||I===B||(v=[])):(v=v||[]).push(se,B))}l&&(v=v||[]).push("style",l);var se=v;(r.updateQueue=se)&&(r.flags|=4)}},Um=function(n,r,l,u){l!==u&&(r.flags|=4)};function _a(n,r){if(!Zt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Cn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,r}function tx(n,r,l){var u=r.pendingProps;switch(wu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(r),null;case 1:return Gn(r.type)&&hl(),Cn(r),null;case 3:return u=r.stateNode,Qs(),qt(Hn),qt(An),Bu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Si!==null&&(md(Si),Si=null))),rd(n,r),Cn(r),null;case 5:Ou(r);var p=hs(fa.current);if(l=r.type,n!==null&&r.stateNode!=null)Dm(n,r,l,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Cn(r),null}if(n=hs(ki.current),vl(r)){u=r.stateNode,l=r.type;var v=r.memoizedProps;switch(u[Oi]=r,u[aa]=v,n=(r.mode&1)!==0,l){case"dialog":Kt("cancel",u),Kt("close",u);break;case"iframe":case"object":case"embed":Kt("load",u);break;case"video":case"audio":for(p=0;p<ra.length;p++)Kt(ra[p],u);break;case"source":Kt("error",u);break;case"img":case"image":case"link":Kt("error",u),Kt("load",u);break;case"details":Kt("toggle",u);break;case"input":Ot(u,v),Kt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Kt("invalid",u);break;case"textarea":Nt(u,v),Kt("invalid",u)}ke(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var I=v[T];T==="children"?typeof I=="string"?u.textContent!==I&&(v.suppressHydrationWarning!==!0&&ul(u.textContent,I,n),p=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&ul(u.textContent,I,n),p=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Kt("scroll",u)}switch(l){case"input":Qe(u),Ht(u,v,!0);break;case"textarea":Qe(u),Xt(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=dl)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=C(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(l,{is:u.is}):(n=T.createElement(l),l==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,l),n[Oi]=r,n[aa]=u,Im(n,r,!1,!1),r.stateNode=n;e:{switch(T=we(l,u),l){case"dialog":Kt("cancel",n),Kt("close",n),p=u;break;case"iframe":case"object":case"embed":Kt("load",n),p=u;break;case"video":case"audio":for(p=0;p<ra.length;p++)Kt(ra[p],n);p=u;break;case"source":Kt("error",n),p=u;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),p=u;break;case"details":Kt("toggle",n),p=u;break;case"input":Ot(n,u),p=At(n,u),Kt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ae({},u,{value:void 0}),Kt("invalid",n);break;case"textarea":Nt(n,u),p=pt(n,u),Kt("invalid",n);break;default:p=u}ke(l,p),I=p;for(v in I)if(I.hasOwnProperty(v)){var B=I[v];v==="style"?pe(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&he(n,B)):v==="children"?typeof B=="string"?(l!=="textarea"||B!=="")&&ge(n,B):typeof B=="number"&&ge(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?B!=null&&v==="onScroll"&&Kt("scroll",n):B!=null&&N(n,v,B,T))}switch(l){case"input":Qe(n),Ht(n,u,!1);break;case"textarea":Qe(n),Xt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+me(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Gt(n,!!u.multiple,v,!1):u.defaultValue!=null&&Gt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=dl)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Cn(r),null;case 6:if(n&&r.stateNode!=null)Um(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(l=hs(fa.current),hs(ki.current),vl(r)){if(u=r.stateNode,l=r.memoizedProps,u[Oi]=r,(v=u.nodeValue!==l)&&(n=Zn,n!==null))switch(n.tag){case 3:ul(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ul(u.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Oi]=r,r.stateNode=u}return Cn(r),null;case 13:if(qt(en),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Zt&&Jn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)kp(),qs(),r.flags|=98560,v=!1;else if(v=vl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Oi]=r}else qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Cn(r),v=!1}else Si!==null&&(md(Si),Si=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(en.current&1)!==0?dn===0&&(dn=3):vd())),r.updateQueue!==null&&(r.flags|=4),Cn(r),null);case 4:return Qs(),rd(n,r),n===null&&sa(r.stateNode.containerInfo),Cn(r),null;case 10:return Lu(r.type._context),Cn(r),null;case 17:return Gn(r.type)&&hl(),Cn(r),null;case 19:if(qt(en),v=r.memoizedState,v===null)return Cn(r),null;if(u=(r.flags&128)!==0,T=v.rendering,T===null)if(u)_a(v,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=Tl(n),T!==null){for(r.flags|=128,_a(v,!1),u=T.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)v=l,n=u,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Wt(en,en.current&1|2),r.child}n=n.sibling}v.tail!==null&&Qt()>io&&(r.flags|=128,u=!0,_a(v,!1),r.lanes=4194304)}else{if(!u)if(n=Tl(T),n!==null){if(r.flags|=128,u=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),_a(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Zt)return Cn(r),null}else 2*Qt()-v.renderingStartTime>io&&l!==1073741824&&(r.flags|=128,u=!0,_a(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Qt(),r.sibling=null,l=en.current,Wt(en,u?l&1|2:l&1),r):(Cn(r),null);case 22:case 23:return _d(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Qn&1073741824)!==0&&(Cn(r),r.subtreeFlags&6&&(r.flags|=8192)):Cn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function nx(n,r){switch(wu(r),r.tag){case 1:return Gn(r.type)&&hl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Qs(),qt(Hn),qt(An),Bu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Ou(r),null;case 13:if(qt(en),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qt(en),null;case 4:return Qs(),null;case 10:return Lu(r.type._context),null;case 22:case 23:return _d(),null;case 24:return null;default:return null}}var Il=!1,Pn=!1,ix=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function to(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){rn(n,r,u)}else l.current=null}function sd(n,r,l){try{l()}catch(u){rn(n,r,u)}}var Fm=!1;function rx(n,r){if(_u=Qa,n=pp(),cu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,I=-1,B=-1,se=0,xe=0,Se=n,ve=null;t:for(;;){for(var ze;Se!==l||p!==0&&Se.nodeType!==3||(I=T+p),Se!==v||u!==0&&Se.nodeType!==3||(B=T+u),Se.nodeType===3&&(T+=Se.nodeValue.length),(ze=Se.firstChild)!==null;)ve=Se,Se=ze;for(;;){if(Se===n)break t;if(ve===l&&++se===p&&(I=T),ve===v&&++xe===u&&(B=T),(ze=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=ze}l=I===-1||B===-1?null:{start:I,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(vu={focusedElem:n,selectionRange:l},Qa=!1,Ge=r;Ge!==null;)if(r=Ge,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ge=n;else for(;Ge!==null;){r=Ge;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ye=je.memoizedProps,sn=je.memoizedState,J=r.stateNode,H=J.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:Mi(r.type,Ye),sn);J.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ne=r.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){rn(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,Ge=n;break}Ge=r.return}return je=Fm,Fm=!1,je}function va(n,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&sd(r,l,v)}p=p.next}while(p!==u)}}function Dl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function od(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Om(n){var r=n.alternate;r!==null&&(n.alternate=null,Om(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Oi],delete r[aa],delete r[Mu],delete r[zv],delete r[Vv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function km(n){return n.tag===5||n.tag===3||n.tag===4}function Bm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||km(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ad(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=dl));else if(u!==4&&(n=n.child,n!==null))for(ad(n,r,l),n=n.sibling;n!==null;)ad(n,r,l),n=n.sibling}function ld(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(ld(n,r,l),n=n.sibling;n!==null;)ld(n,r,l),n=n.sibling}var Tn=null,Ei=!1;function Br(n,r,l){for(l=l.child;l!==null;)zm(n,r,l),l=l.sibling}function zm(n,r,l){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Q,l)}catch{}switch(l.tag){case 5:Pn||to(l,r);case 6:var u=Tn,p=Ei;Tn=null,Br(n,r,l),Tn=u,Ei=p,Tn!==null&&(Ei?(n=Tn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Tn.removeChild(l.stateNode));break;case 18:Tn!==null&&(Ei?(n=Tn,l=l.stateNode,n.nodeType===8?Su(n.parentNode,l):n.nodeType===1&&Su(n,l),$o(n)):Su(Tn,l.stateNode));break;case 4:u=Tn,p=Ei,Tn=l.stateNode.containerInfo,Ei=!0,Br(n,r,l),Tn=u,Ei=p;break;case 0:case 11:case 14:case 15:if(!Pn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&sd(l,r,T),p=p.next}while(p!==u)}Br(n,r,l);break;case 1:if(!Pn&&(to(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(I){rn(l,r,I)}Br(n,r,l);break;case 21:Br(n,r,l);break;case 22:l.mode&1?(Pn=(u=Pn)||l.memoizedState!==null,Br(n,r,l),Pn=u):Br(n,r,l);break;default:Br(n,r,l)}}function Vm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new ix),r.forEach(function(u){var p=hx.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function Ti(n,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var v=n,T=r,I=T;e:for(;I!==null;){switch(I.tag){case 5:Tn=I.stateNode,Ei=!1;break e;case 3:Tn=I.stateNode.containerInfo,Ei=!0;break e;case 4:Tn=I.stateNode.containerInfo,Ei=!0;break e}I=I.return}if(Tn===null)throw Error(t(160));zm(v,T,p),Tn=null,Ei=!1;var B=p.alternate;B!==null&&(B.return=null),p.return=null}catch(se){rn(p,r,se)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Hm(r,n),r=r.sibling}function Hm(n,r){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ti(r,n),zi(n),u&4){try{va(3,n,n.return),Dl(3,n)}catch(Ye){rn(n,n.return,Ye)}try{va(5,n,n.return)}catch(Ye){rn(n,n.return,Ye)}}break;case 1:Ti(r,n),zi(n),u&512&&l!==null&&to(l,l.return);break;case 5:if(Ti(r,n),zi(n),u&512&&l!==null&&to(l,l.return),n.flags&32){var p=n.stateNode;try{ge(p,"")}catch(Ye){rn(n,n.return,Ye)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&ht(p,v),we(I,T);var se=we(I,v);for(T=0;T<B.length;T+=2){var xe=B[T],Se=B[T+1];xe==="style"?pe(p,Se):xe==="dangerouslySetInnerHTML"?he(p,Se):xe==="children"?ge(p,Se):N(p,xe,Se,se)}switch(I){case"input":Jt(p,v);break;case"textarea":Ne(p,v);break;case"select":var ve=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var ze=v.value;ze!=null?Gt(p,!!v.multiple,ze,!1):ve!==!!v.multiple&&(v.defaultValue!=null?Gt(p,!!v.multiple,v.defaultValue,!0):Gt(p,!!v.multiple,v.multiple?[]:"",!1))}p[aa]=v}catch(Ye){rn(n,n.return,Ye)}}break;case 6:if(Ti(r,n),zi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ye){rn(n,n.return,Ye)}}break;case 3:if(Ti(r,n),zi(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{$o(r.containerInfo)}catch(Ye){rn(n,n.return,Ye)}break;case 4:Ti(r,n),zi(n);break;case 13:Ti(r,n),zi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(dd=Qt())),u&4&&Vm(n);break;case 22:if(xe=l!==null&&l.memoizedState!==null,n.mode&1?(Pn=(se=Pn)||xe,Ti(r,n),Pn=se):Ti(r,n),zi(n),u&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!xe&&(n.mode&1)!==0)for(Ge=n,xe=n.child;xe!==null;){for(Se=Ge=xe;Ge!==null;){switch(ve=Ge,ze=ve.child,ve.tag){case 0:case 11:case 14:case 15:va(4,ve,ve.return);break;case 1:to(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){u=ve,l=ve.return;try{r=u,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Ye){rn(u,l,Ye)}}break;case 5:to(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Wm(Se);continue}}ze!==null?(ze.return=ve,Ge=ze):Wm(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{p=Se.stateNode,se?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=Se.stateNode,B=Se.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=ue("display",T))}catch(Ye){rn(n,n.return,Ye)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=se?"":Se.memoizedProps}catch(Ye){rn(n,n.return,Ye)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ti(r,n),zi(n),u&4&&Vm(n);break;case 21:break;default:Ti(r,n),zi(n)}}function zi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(km(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(ge(p,""),u.flags&=-33);var v=Bm(n);ld(n,v,p);break;case 3:case 4:var T=u.stateNode.containerInfo,I=Bm(n);ad(n,I,T);break;default:throw Error(t(161))}}catch(B){rn(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function sx(n,r,l){Ge=n,Gm(n)}function Gm(n,r,l){for(var u=(n.mode&1)!==0;Ge!==null;){var p=Ge,v=p.child;if(p.tag===22&&u){var T=p.memoizedState!==null||Il;if(!T){var I=p.alternate,B=I!==null&&I.memoizedState!==null||Pn;I=Il;var se=Pn;if(Il=T,(Pn=B)&&!se)for(Ge=p;Ge!==null;)T=Ge,B=T.child,T.tag===22&&T.memoizedState!==null?Xm(p):B!==null?(B.return=T,Ge=B):Xm(p);for(;v!==null;)Ge=v,Gm(v),v=v.sibling;Ge=p,Il=I,Pn=se}jm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Ge=v):jm(n)}}function jm(n){for(;Ge!==null;){var r=Ge;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Pn||Dl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Pn)if(l===null)u.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:Mi(r.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Wp(r,v,u);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Wp(r,T,l)}break;case 5:var I=r.stateNode;if(l===null&&r.flags&4){l=I;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&l.focus();break;case"img":B.src&&(l.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var se=r.alternate;if(se!==null){var xe=se.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&$o(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||r.flags&512&&od(r)}catch(ve){rn(r,r.return,ve)}}if(r===n){Ge=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ge=l;break}Ge=r.return}}function Wm(n){for(;Ge!==null;){var r=Ge;if(r===n){Ge=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ge=l;break}Ge=r.return}}function Xm(n){for(;Ge!==null;){var r=Ge;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Dl(4,r)}catch(B){rn(r,l,B)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(B){rn(r,p,B)}}var v=r.return;try{od(r)}catch(B){rn(r,v,B)}break;case 5:var T=r.return;try{od(r)}catch(B){rn(r,T,B)}}}catch(B){rn(r,r.return,B)}if(r===n){Ge=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Ge=I;break}Ge=r.return}}var ox=Math.ceil,Ul=P.ReactCurrentDispatcher,cd=P.ReactCurrentOwner,ui=P.ReactCurrentBatchConfig,wt=0,vn=null,ln=null,bn=0,Qn=0,no=Dr(0),dn=0,xa=null,ms=0,Fl=0,ud=0,ya=null,Wn=null,dd=0,io=1/0,hr=null,Ol=!1,fd=null,zr=null,kl=!1,Vr=null,Bl=0,Sa=0,hd=null,zl=-1,Vl=0;function Un(){return(wt&6)!==0?Qt():zl!==-1?zl:zl=Qt()}function Hr(n){return(n.mode&1)===0?1:(wt&2)!==0&&bn!==0?bn&-bn:Gv.transition!==null?(Vl===0&&(Vl=Be()),Vl):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Kh(n.type)),n)}function bi(n,r,l,u){if(50<Sa)throw Sa=0,hd=null,Error(t(185));_t(n,l,u),((wt&2)===0||n!==vn)&&(n===vn&&((wt&2)===0&&(Fl|=l),dn===4&&Gr(n,bn)),Xn(n,u),l===1&&wt===0&&(r.mode&1)===0&&(io=Qt()+500,ml&&Fr()))}function Xn(n,r){var l=n.callbackNode;Lt(n,r);var u=jt(n,n===vn?bn:0);if(u===0)l!==null&&Za(l),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(l!=null&&Za(l),r===1)n.tag===0?Hv(Km.bind(null,n)):Ip(Km.bind(null,n)),kv(function(){(wt&6)===0&&Fr()}),l=null;else{switch(sr(u)){case 1:l=Wo;break;case 4:l=A;break;case 16:l=W;break;case 536870912:l=te;break;default:l=W}l=ng(l,Ym.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Ym(n,r){if(zl=-1,Vl=0,(wt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ro()&&n.callbackNode!==l)return null;var u=jt(n,n===vn?bn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Hl(n,u);else{r=u;var p=wt;wt|=2;var v=$m();(vn!==n||bn!==r)&&(hr=null,io=Qt()+500,_s(n,r));do try{cx();break}catch(I){qm(n,I)}while(!0);Nu(),Ul.current=v,wt=p,ln!==null?r=0:(vn=null,bn=0,r=dn)}if(r!==0){if(r===2&&(p=an(n),p!==0&&(u=p,r=pd(n,p))),r===1)throw l=xa,_s(n,0),Gr(n,u),Xn(n,Qt()),l;if(r===6)Gr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!ax(p)&&(r=Hl(n,u),r===2&&(v=an(n),v!==0&&(u=v,r=pd(n,v))),r===1))throw l=xa,_s(n,0),Gr(n,u),Xn(n,Qt()),l;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:vs(n,Wn,hr);break;case 3:if(Gr(n,u),(u&130023424)===u&&(r=dd+500-Qt(),10<r)){if(jt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Un(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=yu(vs.bind(null,n,Wn,hr),r);break}vs(n,Wn,hr);break;case 4:if(Gr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var T=31-Ae(u);v=1<<T,T=r[T],T>p&&(p=T),u&=~v}if(u=p,u=Qt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*ox(u/1960))-u,10<u){n.timeoutHandle=yu(vs.bind(null,n,Wn,hr),u);break}vs(n,Wn,hr);break;case 5:vs(n,Wn,hr);break;default:throw Error(t(329))}}}return Xn(n,Qt()),n.callbackNode===l?Ym.bind(null,n):null}function pd(n,r){var l=ya;return n.current.memoizedState.isDehydrated&&(_s(n,r).flags|=256),n=Hl(n,r),n!==2&&(r=Wn,Wn=l,r!==null&&md(r)),n}function md(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function ax(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],v=p.getSnapshot;p=p.value;try{if(!yi(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Gr(n,r){for(r&=~ud,r&=~Fl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Ae(r),u=1<<l;n[l]=-1,r&=~u}}function Km(n){if((wt&6)!==0)throw Error(t(327));ro();var r=jt(n,0);if((r&1)===0)return Xn(n,Qt()),null;var l=Hl(n,r);if(n.tag!==0&&l===2){var u=an(n);u!==0&&(r=u,l=pd(n,u))}if(l===1)throw l=xa,_s(n,0),Gr(n,r),Xn(n,Qt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,vs(n,Wn,hr),Xn(n,Qt()),null}function gd(n,r){var l=wt;wt|=1;try{return n(r)}finally{wt=l,wt===0&&(io=Qt()+500,ml&&Fr())}}function gs(n){Vr!==null&&Vr.tag===0&&(wt&6)===0&&ro();var r=wt;wt|=1;var l=ui.transition,u=yt;try{if(ui.transition=null,yt=1,n)return n()}finally{yt=u,ui.transition=l,wt=r,(wt&6)===0&&Fr()}}function _d(){Qn=no.current,qt(no)}function _s(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Ov(l)),ln!==null)for(l=ln.return;l!==null;){var u=l;switch(wu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&hl();break;case 3:Qs(),qt(Hn),qt(An),Bu();break;case 5:Ou(u);break;case 4:Qs();break;case 13:qt(en);break;case 19:qt(en);break;case 10:Lu(u.type._context);break;case 22:case 23:_d()}l=l.return}if(vn=n,ln=n=jr(n.current,null),bn=Qn=r,dn=0,xa=null,ud=Fl=ms=0,Wn=ya=null,fs!==null){for(r=0;r<fs.length;r++)if(l=fs[r],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,u.next=T}l.pending=u}fs=null}return n}function qm(n,r){do{var l=ln;try{if(Nu(),bl.current=Cl,wl){for(var u=tn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}wl=!1}if(ps=0,_n=un=tn=null,ha=!1,pa=0,cd.current=null,l===null||l.return===null){dn=1,xa=r,ln=null;break}e:{var v=n,T=l.return,I=l,B=r;if(r=bn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var se=B,xe=I,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ze=ym(T);if(ze!==null){ze.flags&=-257,Sm(ze,T,I,v,r),ze.mode&1&&xm(v,se,r),r=ze,B=se;var je=r.updateQueue;if(je===null){var Ye=new Set;Ye.add(B),r.updateQueue=Ye}else je.add(B);break e}else{if((r&1)===0){xm(v,se,r),vd();break e}B=Error(t(426))}}else if(Zt&&I.mode&1){var sn=ym(T);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Sm(sn,T,I,v,r),Cu(eo(B,I));break e}}v=B=eo(B,I),dn!==4&&(dn=2),ya===null?ya=[v]:ya.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var J=_m(v,B,r);jp(v,J);break e;case 1:I=B;var H=v.type,ne=v.stateNode;if((v.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(zr===null||!zr.has(ne)))){v.flags|=65536,r&=-r,v.lanes|=r;var Te=vm(v,I,r);jp(v,Te);break e}}v=v.return}while(v!==null)}Jm(l)}catch(qe){r=qe,ln===l&&l!==null&&(ln=l=l.return);continue}break}while(!0)}function $m(){var n=Ul.current;return Ul.current=Cl,n===null?Cl:n}function vd(){(dn===0||dn===3||dn===2)&&(dn=4),vn===null||(ms&268435455)===0&&(Fl&268435455)===0||Gr(vn,bn)}function Hl(n,r){var l=wt;wt|=2;var u=$m();(vn!==n||bn!==r)&&(hr=null,_s(n,r));do try{lx();break}catch(p){qm(n,p)}while(!0);if(Nu(),wt=l,Ul.current=u,ln!==null)throw Error(t(261));return vn=null,bn=0,dn}function lx(){for(;ln!==null;)Zm(ln)}function cx(){for(;ln!==null&&!qc();)Zm(ln)}function Zm(n){var r=tg(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,r===null?Jm(n):ln=r,cd.current=null}function Jm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=tx(l,r,Qn),l!==null){ln=l;return}}else{if(l=nx(l,r),l!==null){l.flags&=32767,ln=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,ln=null;return}}if(r=r.sibling,r!==null){ln=r;return}ln=r=n}while(r!==null);dn===0&&(dn=5)}function vs(n,r,l){var u=yt,p=ui.transition;try{ui.transition=null,yt=1,ux(n,r,l,u)}finally{ui.transition=p,yt=u}return null}function ux(n,r,l,u){do ro();while(Vr!==null);if((wt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(zn(n,v),n===vn&&(ln=vn=null,bn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||kl||(kl=!0,ng(W,function(){return ro(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=ui.transition,ui.transition=null;var T=yt;yt=1;var I=wt;wt|=4,cd.current=null,rx(n,l),Hm(l,n),Pv(vu),Qa=!!_u,vu=_u=null,n.current=l,sx(l),$c(),wt=I,yt=T,ui.transition=v}else n.current=l;if(kl&&(kl=!1,Vr=n,Bl=p),v=n.pendingLanes,v===0&&(zr=null),Ve(l.stateNode),Xn(n,Qt()),r!==null)for(u=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(Ol)throw Ol=!1,n=fd,fd=null,n;return(Bl&1)!==0&&n.tag!==0&&ro(),v=n.pendingLanes,(v&1)!==0?n===hd?Sa++:(Sa=0,hd=n):Sa=0,Fr(),null}function ro(){if(Vr!==null){var n=sr(Bl),r=ui.transition,l=yt;try{if(ui.transition=null,yt=16>n?16:n,Vr===null)var u=!1;else{if(n=Vr,Vr=null,Bl=0,(wt&6)!==0)throw Error(t(331));var p=wt;for(wt|=4,Ge=n.current;Ge!==null;){var v=Ge,T=v.child;if((Ge.flags&16)!==0){var I=v.deletions;if(I!==null){for(var B=0;B<I.length;B++){var se=I[B];for(Ge=se;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:va(8,xe,v)}var Se=xe.child;if(Se!==null)Se.return=xe,Ge=Se;else for(;Ge!==null;){xe=Ge;var ve=xe.sibling,ze=xe.return;if(Om(xe),xe===se){Ge=null;break}if(ve!==null){ve.return=ze,Ge=ve;break}Ge=ze}}}var je=v.alternate;if(je!==null){var Ye=je.child;if(Ye!==null){je.child=null;do{var sn=Ye.sibling;Ye.sibling=null,Ye=sn}while(Ye!==null)}}Ge=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,Ge=T;else e:for(;Ge!==null;){if(v=Ge,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:va(9,v,v.return)}var J=v.sibling;if(J!==null){J.return=v.return,Ge=J;break e}Ge=v.return}}var H=n.current;for(Ge=H;Ge!==null;){T=Ge;var ne=T.child;if((T.subtreeFlags&2064)!==0&&ne!==null)ne.return=T,Ge=ne;else e:for(T=H;Ge!==null;){if(I=Ge,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Dl(9,I)}}catch(qe){rn(I,I.return,qe)}if(I===T){Ge=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Ge=Te;break e}Ge=I.return}}if(wt=p,Fr(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Q,n)}catch{}u=!0}return u}finally{yt=l,ui.transition=r}}return!1}function Qm(n,r,l){r=eo(l,r),r=_m(n,r,1),n=kr(n,r,1),r=Un(),n!==null&&(_t(n,1,r),Xn(n,r))}function rn(n,r,l){if(n.tag===3)Qm(n,n,l);else for(;r!==null;){if(r.tag===3){Qm(r,n,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(zr===null||!zr.has(u))){n=eo(l,n),n=vm(r,n,1),r=kr(r,n,1),n=Un(),r!==null&&(_t(r,1,n),Xn(r,n));break}}r=r.return}}function dx(n,r,l){var u=n.pingCache;u!==null&&u.delete(r),r=Un(),n.pingedLanes|=n.suspendedLanes&l,vn===n&&(bn&l)===l&&(dn===4||dn===3&&(bn&130023424)===bn&&500>Qt()-dd?_s(n,0):ud|=l),Xn(n,r)}function eg(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var l=Un();n=ur(n,r),n!==null&&(_t(n,r,l),Xn(n,l))}function fx(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),eg(n,l)}function hx(n,r){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),eg(n,l)}var tg;tg=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Hn.current)jn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return jn=!1,ex(n,r,l);jn=(n.flags&131072)!==0}else jn=!1,Zt&&(r.flags&1048576)!==0&&Dp(r,_l,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Ll(n,r),n=r.pendingProps;var p=Xs(r,An.current);Js(r,l),p=Hu(null,r,u,n,p,l);var v=Gu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gn(u)?(v=!0,pl(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Uu(r),p.updater=Pl,r.stateNode=p,p._reactInternals=r,qu(r,u,n,l),r=Qu(null,r,u,!0,v,l)):(r.tag=0,Zt&&v&&bu(r),Dn(null,r,p,l),r=r.child),r;case 16:u=r.elementType;e:{switch(Ll(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=mx(u),n=Mi(u,n),p){case 0:r=Ju(null,r,u,n,l);break e;case 1:r=Am(null,r,u,n,l);break e;case 11:r=Mm(null,r,u,n,l);break e;case 14:r=Em(null,r,u,Mi(u.type,n),l);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Mi(u,p),Ju(n,r,u,p,l);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Mi(u,p),Am(n,r,u,p,l);case 3:e:{if(Rm(r),n===null)throw Error(t(387));u=r.pendingProps,v=r.memoizedState,p=v.element,Gp(n,r),El(r,u,null,l);var T=r.memoizedState;if(u=T.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=eo(Error(t(423)),r),r=Cm(n,r,u,l,p);break e}else if(u!==p){p=eo(Error(t(424)),r),r=Cm(n,r,u,l,p);break e}else for(Jn=Ir(r.stateNode.containerInfo.firstChild),Zn=r,Zt=!0,Si=null,l=Vp(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(qs(),u===p){r=fr(n,r,l);break e}Dn(n,r,u,l)}r=r.child}return r;case 5:return Xp(r),n===null&&Ru(r),u=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,xu(u,p)?T=null:v!==null&&xu(u,v)&&(r.flags|=32),wm(n,r),Dn(n,r,T,l),r.child;case 6:return n===null&&Ru(r),null;case 13:return Pm(n,r,l);case 4:return Fu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=$s(r,null,u,l):Dn(n,r,u,l),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Mi(u,p),Mm(n,r,u,p,l);case 7:return Dn(n,r,r.pendingProps,l),r.child;case 8:return Dn(n,r,r.pendingProps.children,l),r.child;case 12:return Dn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,v=r.memoizedProps,T=p.value,Wt(yl,u._currentValue),u._currentValue=T,v!==null)if(yi(v.value,T)){if(v.children===p.children&&!Hn.current){r=fr(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var I=v.dependencies;if(I!==null){T=v.child;for(var B=I.firstContext;B!==null;){if(B.context===u){if(v.tag===1){B=dr(-1,l&-l),B.tag=2;var se=v.updateQueue;if(se!==null){se=se.shared;var xe=se.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),se.pending=B}}v.lanes|=l,B=v.alternate,B!==null&&(B.lanes|=l),Iu(v.return,l,r),I.lanes|=l;break}B=B.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,I=T.alternate,I!==null&&(I.lanes|=l),Iu(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Dn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Js(r,l),p=li(p),u=u(p),r.flags|=1,Dn(n,r,u,l),r.child;case 14:return u=r.type,p=Mi(u,r.pendingProps),p=Mi(u.type,p),Em(n,r,u,p,l);case 15:return Tm(n,r,r.type,r.pendingProps,l);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Mi(u,p),Ll(n,r),r.tag=1,Gn(u)?(n=!0,pl(r)):n=!1,Js(r,l),mm(r,u,p),qu(r,u,p,l),Qu(null,r,u,!0,n,l);case 19:return Lm(n,r,l);case 22:return bm(n,r,l)}throw Error(t(156,r.tag))};function ng(n,r){return $a(n,r)}function px(n,r,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,r,l,u){return new px(n,r,l,u)}function xd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mx(n){if(typeof n=="function")return xd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===j)return 14}return 2}function jr(n,r){var l=n.alternate;return l===null?(l=di(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Gl(n,r,l,u,p,v){var T=2;if(u=n,typeof n=="function")xd(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return xs(l.children,p,v,r);case b:T=8,p|=8;break;case D:return n=di(12,l,r,p|2),n.elementType=D,n.lanes=v,n;case ce:return n=di(13,l,r,p),n.elementType=ce,n.lanes=v,n;case de:return n=di(19,l,r,p),n.elementType=de,n.lanes=v,n;case K:return jl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:T=10;break e;case F:T=9;break e;case Z:T=11;break e;case j:T=14;break e;case ie:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=di(T,l,r,p),r.elementType=n,r.type=u,r.lanes=v,r}function xs(n,r,l,u){return n=di(7,n,u,r),n.lanes=l,n}function jl(n,r,l,u){return n=di(22,n,u,r),n.elementType=K,n.lanes=l,n.stateNode={isHidden:!1},n}function yd(n,r,l){return n=di(6,n,null,r),n.lanes=l,n}function Sd(n,r,l){return r=di(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function gx(n,r,l,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Md(n,r,l,u,p,v,T,I,B){return n=new gx(n,r,l,I,B),r===1?(r=1,v===!0&&(r|=8)):r=0,v=di(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(v),n}function _x(n,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:u==null?null:""+u,children:n,containerInfo:r,implementation:l}}function ig(n){if(!n)return Ur;n=n._reactInternals;e:{if(Ui(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Gn(l))return Np(n,l,r)}return r}function rg(n,r,l,u,p,v,T,I,B){return n=Md(l,u,!0,n,p,v,T,I,B),n.context=ig(null),l=n.current,u=Un(),p=Hr(l),v=dr(u,p),v.callback=r??null,kr(l,v,p),n.current.lanes=p,_t(n,p,u),Xn(n,u),n}function Wl(n,r,l,u){var p=r.current,v=Un(),T=Hr(p);return l=ig(l),r.context===null?r.context=l:r.pendingContext=l,r=dr(v,T),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=kr(p,r,T),n!==null&&(bi(n,p,T,v),Ml(n,p,T)),T}function Xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function sg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Ed(n,r){sg(n,r),(n=n.alternate)&&sg(n,r)}function vx(){return null}var og=typeof reportError=="function"?reportError:function(n){console.error(n)};function Td(n){this._internalRoot=n}Yl.prototype.render=Td.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Wl(n,r,null,null)},Yl.prototype.unmount=Td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;gs(function(){Wl(null,n,null,null)}),r[or]=null}};function Yl(n){this._internalRoot=n}Yl.prototype.unstable_scheduleHydration=function(n){if(n){var r=It();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Pr.length&&r!==0&&r<Pr[l].priority;l++);Pr.splice(l,0,n),l===0&&Xh(n)}};function bd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ag(){}function xx(n,r,l,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var se=Xl(T);v.call(se)}}var T=rg(r,u,n,0,null,!1,!1,"",ag);return n._reactRootContainer=T,n[or]=T.current,sa(n.nodeType===8?n.parentNode:n),gs(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var I=u;u=function(){var se=Xl(B);I.call(se)}}var B=Md(n,0,!1,null,null,!1,!1,"",ag);return n._reactRootContainer=B,n[or]=B.current,sa(n.nodeType===8?n.parentNode:n),gs(function(){Wl(r,B,l,u)}),B}function ql(n,r,l,u,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var I=p;p=function(){var B=Xl(T);I.call(B)}}Wl(r,T,n,p)}else T=xx(l,r,n,p,u);return Xl(T)}Pt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=bt(r.pendingLanes);l!==0&&(Vn(r,l|1),Xn(r,Qt()),(wt&6)===0&&(io=Qt()+500,Fr()))}break;case 13:gs(function(){var u=ur(n,1);if(u!==null){var p=Un();bi(u,n,1,p)}}),Ed(n,1)}},Yt=function(n){if(n.tag===13){var r=ur(n,134217728);if(r!==null){var l=Un();bi(r,n,134217728,l)}Ed(n,134217728)}},vi=function(n){if(n.tag===13){var r=Hr(n),l=ur(n,r);if(l!==null){var u=Un();bi(l,n,r,u)}Ed(n,r)}},It=function(){return yt},xi=function(n,r){var l=yt;try{return yt=n,r()}finally{yt=l}},st=function(n,r,l){switch(r){case"input":if(Jt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==n&&u.form===n.form){var p=fl(u);if(!p)throw Error(t(90));Vt(u),Jt(u,p)}}}break;case"textarea":Ne(n,l);break;case"select":r=l.value,r!=null&&Gt(n,!!l.multiple,r,!1)}},Re=gd,_e=gs;var yx={usingClientEntryPoint:!1,Events:[la,js,fl,fe,Oe,gd]},Ma={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sx={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Go(n),n===null?null:n.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||vx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Q=$l.inject(Sx),Ce=$l}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx,Yn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bd(r))throw Error(t(200));return _x(n,r,null,l)},Yn.createRoot=function(n,r){if(!bd(n))throw Error(t(299));var l=!1,u="",p=og;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Md(n,1,!1,null,null,l,!1,u,p),n[or]=r.current,sa(n.nodeType===8?n.parentNode:n),new Td(r)},Yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Go(r),n=n===null?null:n.stateNode,n},Yn.flushSync=function(n){return gs(n)},Yn.hydrate=function(n,r,l){if(!Kl(r))throw Error(t(200));return ql(null,n,r,!0,l)},Yn.hydrateRoot=function(n,r,l){if(!bd(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,v="",T=og;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=rg(r,null,n,1,l??null,p,!1,v,T),n[or]=r.current,sa(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Yl(r)},Yn.render=function(n,r,l){if(!Kl(r))throw Error(t(200));return ql(null,n,r,!1,l)},Yn.unmountComponentAtNode=function(n){if(!Kl(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){ql(null,null,n,!1,function(){n._reactRootContainer=null,n[or]=null})}),!0):!1},Yn.unstable_batchedUpdates=gd,Yn.unstable_renderSubtreeIntoContainer=function(n,r,l,u){if(!Kl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ql(n,r,l,!1,u)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var mg;function Cx(){if(mg)return Rd.exports;mg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Rd.exports=Rx(),Rd.exports}var gg;function Px(){if(gg)return Zl;gg=1;var s=Cx();return Zl.createRoot=s.createRoot,Zl.hydrateRoot=s.hydrateRoot,Zl}var Nx=Px();const Lx="/3d_object_portfolio/assets/0-CbPwqGm-.jpeg",Ix="/3d_object_portfolio/assets/1-B1ofo0bw.jpeg",Dx="/3d_object_portfolio/assets/2-CIqC_qOs.jpeg",Ux="/3d_object_portfolio/assets/3-PV6Gh9k_.jpeg",Fx="/3d_object_portfolio/assets/4-TFOK4XRF.jpeg",Ox="/3d_object_portfolio/assets/5-Cm4dr0Cv.jpeg",kx="/3d_object_portfolio/assets/6-D9McTcUZ.jpeg",Bx="/3d_object_portfolio/assets/1-DBaDak2f.jpeg",zx="/3d_object_portfolio/assets/10-CLrws8Nu.jpeg",Vx="/3d_object_portfolio/assets/11-WlOYnl51.jpeg",Hx="/3d_object_portfolio/assets/12-CCbe2zYJ.jpeg",Gx="/3d_object_portfolio/assets/2-1yclsVX2.jpeg",jx="/3d_object_portfolio/assets/3-DnMy3qRZ.jpeg",Wx="/3d_object_portfolio/assets/4-BqDMHGSf.jpeg",Xx="/3d_object_portfolio/assets/5-BcptQM-J.jpeg",Yx="/3d_object_portfolio/assets/6-MwOnajuA.jpeg",Kx="/3d_object_portfolio/assets/7-CrFkaiAx.jpeg",qx="/3d_object_portfolio/assets/8-BqB0eomt.jpeg",$x="/3d_object_portfolio/assets/9-B5-ybuZf.jpeg",Zx="/3d_object_portfolio/assets/1-CquR4fhL.png",Jx="/3d_object_portfolio/assets/10-dbiKH-Eg.png",Qx="/3d_object_portfolio/assets/11-BJ8PWPYt.png",ey="/3d_object_portfolio/assets/12-yvqujOrg.png",ty="/3d_object_portfolio/assets/13-CHDOGUWQ.png",ny="/3d_object_portfolio/assets/14-CdJ74DdD.png",iy="/3d_object_portfolio/assets/15-owv9-hFG.png",ry="/3d_object_portfolio/assets/16-vMDl7zih.png",sy="/3d_object_portfolio/assets/17-Bvxr610T.png",oy="/3d_object_portfolio/assets/18-BEY7y5Ft.png",ay="/3d_object_portfolio/assets/19-BPbdgqHH.png",ly="/3d_object_portfolio/assets/2-CY5X4u6N.png",cy="/3d_object_portfolio/assets/20-DyTNmCRG.png",uy="/3d_object_portfolio/assets/21-BHbhSkyF.png",dy="/3d_object_portfolio/assets/22-N2jlcB22.png",fy="/3d_object_portfolio/assets/23-Bifn3wpW.png",hy="/3d_object_portfolio/assets/24-DEu3n8Gw.png",py="/3d_object_portfolio/assets/25-r7-DVSSH.png",my="/3d_object_portfolio/assets/26-BnaJxBvY.png",gy="/3d_object_portfolio/assets/27-BmFYQJ-o.png",_y="/3d_object_portfolio/assets/28-HrCIQx2U.png",vy="/3d_object_portfolio/assets/29-CsgwLE5i.png",xy="/3d_object_portfolio/assets/3-zI8Fbyn6.png",yy="/3d_object_portfolio/assets/4-Dl359sJ2.png",Sy="/3d_object_portfolio/assets/5-owWo4FwQ.png",My="/3d_object_portfolio/assets/6-2NSi5HSR.png",Ey="/3d_object_portfolio/assets/7-DpW14j05.png",Ty="/3d_object_portfolio/assets/8-D_2XOpJZ.png",by="/3d_object_portfolio/assets/9-DBZcPZ6k.png",wy="/3d_object_portfolio/assets/1-n1_Hj8Ls.jpeg",Ay="/3d_object_portfolio/assets/2-D2kIlOjc.jpeg",Ry="/3d_object_portfolio/assets/B-B6GWqj-T.jpeg",Cy="/3d_object_portfolio/assets/H-BqKrrXL1.jpeg",Py="/3d_object_portfolio/assets/J-Dcb3O7Ia.jpeg";var Mt=gh();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ly=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),_g=s=>{const e=Ly(s);return e.charAt(0).toUpperCase()+e.slice(1)},Y_=(...s)=>s.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Iy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=Mt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:c,...d},f)=>Mt.createElement("svg",{ref:f,...Iy,width:e,height:e,stroke:s,strokeWidth:i?Number(t)*24/Number(e):t,className:Y_("lucide",o),...d},[...c.map(([h,m])=>Mt.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=(s,e)=>{const t=Mt.forwardRef(({className:i,...o},a)=>Mt.createElement(Dy,{ref:a,iconNode:e,className:Y_(`lucide-${Ny(_g(s))}`,`lucide-${s}`,i),...o}));return t.displayName=_g(s),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Fy=gi("arrow-up-right",Uy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],K_=gi("box",Oy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],By=gi("chevron-left",ky);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],q_=gi("chevron-right",zy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],vf=gi("external-link",Vy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Gy=gi("instagram",Hy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Wy=gi("linkedin",jy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Yy=gi("menu",Xy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],$_=gi("pencil",Ky);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],$y=gi("trash-2",qy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],vg=gi("upload",Zy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xf=gi("x",Jy);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="184",Eo={ROTATE:0,DOLLY:1,PAN:2},Mo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qy=0,xg=1,eS=2,Ac=1,tS=2,Ua=3,Tr=0,qn=1,Wi=2,Mr=0,To=1,yg=2,Sg=3,Mg=4,nS=5,ws=100,iS=101,rS=102,sS=103,oS=104,aS=200,lS=201,cS=202,uS=203,yf=204,Sf=205,dS=206,fS=207,hS=208,pS=209,mS=210,gS=211,_S=212,vS=213,xS=214,Mf=0,Ef=1,Tf=2,Ao=3,bf=4,wf=5,Af=6,Rf=7,Z_=0,yS=1,SS=2,Ki=0,J_=1,Q_=2,e0=3,vh=4,t0=5,n0=6,i0=7,Eg="attached",MS="detached",r0=300,Ns=301,Ro=302,Nd=303,Ld=304,Gc=306,Co=1e3,Xi=1001,Uc=1002,hn=1003,s0=1004,Fa=1005,pn=1006,Rc=1007,yr=1008,ni=1009,o0=1010,a0=1011,Va=1012,xh=1013,Zi=1014,pi=1015,br=1016,yh=1017,Sh=1018,Ha=1020,l0=35902,c0=35899,u0=1021,d0=1022,mi=1023,wr=1026,Rs=1027,Mh=1028,Eh=1029,Ls=1030,Th=1031,bh=1033,Cc=33776,Pc=33777,Nc=33778,Lc=33779,Cf=35840,Pf=35841,Nf=35842,Lf=35843,If=36196,Df=37492,Uf=37496,Ff=37488,Of=37489,Fc=37490,kf=37491,Bf=37808,zf=37809,Vf=37810,Hf=37811,Gf=37812,jf=37813,Wf=37814,Xf=37815,Yf=37816,Kf=37817,qf=37818,$f=37819,Zf=37820,Jf=37821,Qf=36492,eh=36494,th=36495,nh=36283,ih=36284,Oc=36285,rh=36286,Ga=2300,ja=2301,Id=2302,Tg=2303,bg=2400,wg=2401,Ag=2402,ES=2500,TS=0,f0=1,sh=2,bS=3200,oh=0,wS=1,es="",wn="srgb",ii="srgb-linear",kc="linear",Dt="srgb",so=7680,Rg=519,AS=512,RS=513,CS=514,wh=515,PS=516,NS=517,Ah=518,LS=519,ah=35044,Cg="300 es",Yi=2e3,Wa=2001;function IS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function DS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Xa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function US(){const s=Xa("canvas");return s.style.display="block",s}const Pg={};function Bc(...s){const e="THREE."+s.shift();console.log(e,...s)}function h0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function $e(...s){s=h0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function nt(...s){s=h0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function lh(...s){const e=s.join(" ");e in Pg||(Pg[e]=!0,$e(...s))}function FS(s,e,t){return new Promise(function(i,o){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const OS={[Mf]:Ef,[Tf]:Af,[bf]:Rf,[Ao]:wf,[Ef]:Mf,[Af]:Tf,[Rf]:bf,[wf]:Ao};class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ng=1234567;const ka=Math.PI/180,Po=180/Math.PI;function Ni(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function Rh(s,e){return(s%e+e)%e}function kS(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function BS(s,e,t){return s!==e?(t-s)/(e-s):0}function Ba(s,e,t){return(1-t)*s+t*e}function zS(s,e,t,i){return Ba(s,e,1-Math.exp(-t*i))}function VS(s,e=1){return e-Math.abs(Rh(s,e*2)-e)}function HS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function GS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function jS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function WS(s,e){return s+Math.random()*(e-s)}function XS(s){return s*(.5-Math.random())}function YS(s){s!==void 0&&(Ng=s);let e=Ng+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KS(s){return s*ka}function qS(s){return s*Po}function $S(s){return(s&s-1)===0&&s!==0}function ZS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function JS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function QS(s,e,t,i,o){const a=Math.cos,c=Math.sin,d=a(t/2),f=c(t/2),h=a((e+i)/2),m=c((e+i)/2),g=a((e-i)/2),_=c((e-i)/2),y=a((i-e)/2),M=c((i-e)/2);switch(o){case"XYX":s.set(d*m,f*g,f*_,d*h);break;case"YZY":s.set(f*_,d*m,f*g,d*h);break;case"ZXZ":s.set(f*g,f*_,d*m,d*h);break;case"XZX":s.set(d*m,f*M,f*y,d*h);break;case"YXY":s.set(f*y,d*m,f*M,d*h);break;case"ZYZ":s.set(f*M,f*y,d*m,d*h);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const p0={DEG2RAD:ka,RAD2DEG:Po,generateUUID:Ni,clamp:vt,euclideanModulo:Rh,mapLinear:kS,inverseLerp:BS,lerp:Ba,damp:zS,pingpong:VS,smoothstep:HS,smootherstep:GS,randInt:jS,randFloat:WS,randFloatSpread:XS,seededRandom:YS,degToRad:KS,radToDeg:qS,isPowerOfTwo:$S,ceilPowerOfTwo:ZS,floorPowerOfTwo:JS,setQuaternionFromProperEuler:QS,normalize:Ut,denormalize:Ci},zh=class zh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zh.prototype.isVector2=!0;let at=zh;class Ii{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,d){let f=i[o+0],h=i[o+1],m=i[o+2],g=i[o+3],_=a[c+0],y=a[c+1],M=a[c+2],w=a[c+3];if(g!==w||f!==_||h!==y||m!==M){let x=f*_+h*y+m*M+g*w;x<0&&(_=-_,y=-y,M=-M,w=-w,x=-x);let S=1-d;if(x<.9995){const R=Math.acos(x),N=Math.sin(R);S=Math.sin(S*R)/N,d=Math.sin(d*R)/N,f=f*S+_*d,h=h*S+y*d,m=m*S+M*d,g=g*S+w*d}else{f=f*S+_*d,h=h*S+y*d,m=m*S+M*d,g=g*S+w*d;const R=1/Math.sqrt(f*f+h*h+m*m+g*g);f*=R,h*=R,m*=R,g*=R}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,o,a,c){const d=i[o],f=i[o+1],h=i[o+2],m=i[o+3],g=a[c],_=a[c+1],y=a[c+2],M=a[c+3];return e[t]=d*M+m*g+f*y-h*_,e[t+1]=f*M+m*_+h*g-d*y,e[t+2]=h*M+m*y+d*_-f*g,e[t+3]=m*M-d*g-f*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,d=Math.cos,f=Math.sin,h=d(i/2),m=d(o/2),g=d(a/2),_=f(i/2),y=f(o/2),M=f(a/2);switch(c){case"XYZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"YXZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"ZXY":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"ZYX":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"YZX":this._x=_*m*g+h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g-_*y*M;break;case"XZY":this._x=_*m*g-h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g+_*y*M;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],d=t[5],f=t[9],h=t[2],m=t[6],g=t[10],_=i+d+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-f)*y,this._y=(a-h)*y,this._z=(c-o)*y}else if(i>d&&i>g){const y=2*Math.sqrt(1+i-d-g);this._w=(m-f)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+h)/y}else if(d>g){const y=2*Math.sqrt(1+d-i-g);this._w=(a-h)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(f+m)/y}else{const y=2*Math.sqrt(1+g-i-d);this._w=(c-o)/y,this._x=(a+h)/y,this._y=(f+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,d=t._x,f=t._y,h=t._z,m=t._w;return this._x=i*m+c*d+o*h-a*f,this._y=o*m+c*f+a*d-i*h,this._z=a*m+c*h+i*f-o*d,this._w=c*m-i*d-o*f-a*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,a=e._z,c=e._w,d=this.dot(e);d<0&&(i=-i,o=-o,a=-a,c=-c,d=-d);let f=1-t;if(d<.9995){const h=Math.acos(d),m=Math.sin(h);f=Math.sin(f*h)/m,t=Math.sin(t*h)/m,this._x=this._x*f+i*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+o*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vh=class Vh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,d=e.z,f=e.w,h=2*(c*o-d*i),m=2*(d*t-a*o),g=2*(a*i-c*t);return this.x=t+f*h+c*g-d*m,this.y=i+f*m+d*h-a*g,this.z=o+f*g+a*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,d=t.y,f=t.z;return this.x=o*f-a*d,this.y=a*c-i*f,this.z=i*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dd.copy(this).projectOnVector(e),this.sub(Dd)}reflect(e){return this.sub(Dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vh.prototype.isVector3=!0;let X=Vh;const Dd=new X,Lg=new Ii,Hh=class Hh{constructor(e,t,i,o,a,c,d,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,d,f,h)}set(e,t,i,o,a,c,d,f,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=d,m[3]=t,m[4]=a,m[5]=f,m[6]=i,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],d=i[3],f=i[6],h=i[1],m=i[4],g=i[7],_=i[2],y=i[5],M=i[8],w=o[0],x=o[3],S=o[6],R=o[1],N=o[4],P=o[7],k=o[2],L=o[5],O=o[8];return a[0]=c*w+d*R+f*k,a[3]=c*x+d*N+f*L,a[6]=c*S+d*P+f*O,a[1]=h*w+m*R+g*k,a[4]=h*x+m*N+g*L,a[7]=h*S+m*P+g*O,a[2]=_*w+y*R+M*k,a[5]=_*x+y*N+M*L,a[8]=_*S+y*P+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8];return t*c*m-t*d*h-i*a*m+i*d*f+o*a*h-o*c*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8],g=m*c-d*h,_=d*f-m*a,y=h*a-c*f,M=t*g+i*_+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=g*w,e[1]=(o*h-m*i)*w,e[2]=(d*i-o*c)*w,e[3]=_*w,e[4]=(m*t-o*f)*w,e[5]=(o*a-d*t)*w,e[6]=y*w,e[7]=(i*f-h*t)*w,e[8]=(c*t-i*a)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,d){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*c+h*d)+c+e,-o*h,o*f,-o*(-h*c+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Ud.makeScale(e,t)),this}rotate(e){return this.premultiply(Ud.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ud.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hh.prototype.isMatrix3=!0;let ut=Hh;const Ud=new ut,Ig=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dg=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eM(){const s={enabled:!0,workingColorSpace:ii,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Dt&&(o.r=Er(o.r),o.g=Er(o.g),o.b=Er(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(o.r=bo(o.r),o.g=bo(o.g),o.b=bo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===es?kc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return lh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return lh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ii]:{primaries:e,whitePoint:i,transfer:kc,toXYZ:Ig,fromXYZ:Dg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:Ig,fromXYZ:Dg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),s}const Tt=eM();function Er(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let oo;class tM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{oo===void 0&&(oo=Xa("canvas")),oo.width=e.width,oo.height=e.height;const o=oo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=oo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Er(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nM=0;class Ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?a.push(Fd(o[c].image)):a.push(Fd(o[c]))}else a=Fd(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Fd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let iM=0;const Od=new X;class Sn extends rs{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,i=Xi,o=Xi,a=pn,c=yr,d=mi,f=ni,h=Sn.DEFAULT_ANISOTROPY,m=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Ni(),this.name="",this.source=new Ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Od).x}get height(){return this.source.getSize(Od).y}get depth(){return this.source.getSize(Od).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=r0;Sn.DEFAULT_ANISOTROPY=1;const Gh=class Gh{constructor(e=0,t=0,i=0,o=1){this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,h=f[0],m=f[4],g=f[8],_=f[1],y=f[5],M=f[9],w=f[2],x=f[6],S=f[10];if(Math.abs(m-_)<.01&&Math.abs(g-w)<.01&&Math.abs(M-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+w)<.1&&Math.abs(M+x)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(h+1)/2,P=(y+1)/2,k=(S+1)/2,L=(m+_)/4,O=(g+w)/4,b=(M+x)/4;return N>P&&N>k?N<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(N),o=L/i,a=O/i):P>k?P<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(P),i=L/o,a=b/o):k<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(k),i=O/a,o=b/a),this.set(i,o,a,t),this}let R=Math.sqrt((x-M)*(x-M)+(g-w)*(g-w)+(_-m)*(_-m));return Math.abs(R)<.001&&(R=1),this.x=(x-M)/R,this.y=(g-w)/R,this.z=(_-m)/R,this.w=Math.acos((h+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gh.prototype.isVector4=!0;let zt=Gh;class rM extends rs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},a=new Sn(o),c=i.count;for(let d=0;d<c;d++)this.textures[d]=a.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Ch(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends rM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class m0 extends Sn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends Sn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hc=class Hc{constructor(e,t,i,o,a,c,d,f,h,m,g,_,y,M,w,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,d,f,h,m,g,_,y,M,w,x)}set(e,t,i,o,a,c,d,f,h,m,g,_,y,M,w,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=o,S[1]=a,S[5]=c,S[9]=d,S[13]=f,S[2]=h,S[6]=m,S[10]=g,S[14]=_,S[3]=y,S[7]=M,S[11]=w,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,o=1/ao.setFromMatrixColumn(e,0).length(),a=1/ao.setFromMatrixColumn(e,1).length(),c=1/ao.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),d=Math.sin(i),f=Math.cos(o),h=Math.sin(o),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*m,y=c*g,M=d*m,w=d*g;t[0]=f*m,t[4]=-f*g,t[8]=h,t[1]=y+M*h,t[5]=_-w*h,t[9]=-d*f,t[2]=w-_*h,t[6]=M+y*h,t[10]=c*f}else if(e.order==="YXZ"){const _=f*m,y=f*g,M=h*m,w=h*g;t[0]=_+w*d,t[4]=M*d-y,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-d,t[2]=y*d-M,t[6]=w+_*d,t[10]=c*f}else if(e.order==="ZXY"){const _=f*m,y=f*g,M=h*m,w=h*g;t[0]=_-w*d,t[4]=-c*g,t[8]=M+y*d,t[1]=y+M*d,t[5]=c*m,t[9]=w-_*d,t[2]=-c*h,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const _=c*m,y=c*g,M=d*m,w=d*g;t[0]=f*m,t[4]=M*h-y,t[8]=_*h+w,t[1]=f*g,t[5]=w*h+_,t[9]=y*h-M,t[2]=-h,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,y=c*h,M=d*f,w=d*h;t[0]=f*m,t[4]=w-_*g,t[8]=M*g+y,t[1]=g,t[5]=c*m,t[9]=-d*m,t[2]=-h*m,t[6]=y*g+M,t[10]=_-w*g}else if(e.order==="XZY"){const _=c*f,y=c*h,M=d*f,w=d*h;t[0]=f*m,t[4]=-g,t[8]=h*m,t[1]=_*g+w,t[5]=c*m,t[9]=y*g-M,t[2]=M*g-y,t[6]=d*m,t[10]=w*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oM,e,aM)}lookAt(e,t,i){const o=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Xr.crossVectors(i,ei),Xr.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Xr.crossVectors(i,ei)),Xr.normalize(),Jl.crossVectors(ei,Xr),o[0]=Xr.x,o[4]=Jl.x,o[8]=ei.x,o[1]=Xr.y,o[5]=Jl.y,o[9]=ei.y,o[2]=Xr.z,o[6]=Jl.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],d=i[4],f=i[8],h=i[12],m=i[1],g=i[5],_=i[9],y=i[13],M=i[2],w=i[6],x=i[10],S=i[14],R=i[3],N=i[7],P=i[11],k=i[15],L=o[0],O=o[4],b=o[8],D=o[12],Y=o[1],F=o[5],Z=o[9],ce=o[13],de=o[2],j=o[6],ie=o[10],K=o[14],q=o[3],le=o[7],ae=o[11],U=o[15];return a[0]=c*L+d*Y+f*de+h*q,a[4]=c*O+d*F+f*j+h*le,a[8]=c*b+d*Z+f*ie+h*ae,a[12]=c*D+d*ce+f*K+h*U,a[1]=m*L+g*Y+_*de+y*q,a[5]=m*O+g*F+_*j+y*le,a[9]=m*b+g*Z+_*ie+y*ae,a[13]=m*D+g*ce+_*K+y*U,a[2]=M*L+w*Y+x*de+S*q,a[6]=M*O+w*F+x*j+S*le,a[10]=M*b+w*Z+x*ie+S*ae,a[14]=M*D+w*ce+x*K+S*U,a[3]=R*L+N*Y+P*de+k*q,a[7]=R*O+N*F+P*j+k*le,a[11]=R*b+N*Z+P*ie+k*ae,a[15]=R*D+N*ce+P*K+k*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],d=e[5],f=e[9],h=e[13],m=e[2],g=e[6],_=e[10],y=e[14],M=e[3],w=e[7],x=e[11],S=e[15],R=f*y-h*_,N=d*y-h*g,P=d*_-f*g,k=c*y-h*m,L=c*_-f*m,O=c*g-d*m;return t*(w*R-x*N+S*P)-i*(M*R-x*k+S*L)+o*(M*N-w*k+S*O)-a*(M*P-w*L+x*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8],g=e[9],_=e[10],y=e[11],M=e[12],w=e[13],x=e[14],S=e[15],R=t*d-i*c,N=t*f-o*c,P=t*h-a*c,k=i*f-o*d,L=i*h-a*d,O=o*h-a*f,b=m*w-g*M,D=m*x-_*M,Y=m*S-y*M,F=g*x-_*w,Z=g*S-y*w,ce=_*S-y*x,de=R*ce-N*Z+P*F+k*Y-L*D+O*b;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/de;return e[0]=(d*ce-f*Z+h*F)*j,e[1]=(o*Z-i*ce-a*F)*j,e[2]=(w*O-x*L+S*k)*j,e[3]=(_*L-g*O-y*k)*j,e[4]=(f*Y-c*ce-h*D)*j,e[5]=(t*ce-o*Y+a*D)*j,e[6]=(x*P-M*O-S*N)*j,e[7]=(m*O-_*P+y*N)*j,e[8]=(c*Z-d*Y+h*b)*j,e[9]=(i*Y-t*Z-a*b)*j,e[10]=(M*L-w*P+S*R)*j,e[11]=(g*P-m*L-y*R)*j,e[12]=(d*D-c*F-f*b)*j,e[13]=(t*F-i*D+o*b)*j,e[14]=(w*N-M*k-x*R)*j,e[15]=(m*k-g*N+_*R)*j,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,d=e.y,f=e.z,h=a*c,m=a*d;return this.set(h*c+i,h*d-o*f,h*f+o*d,0,h*d+o*f,m*d+i,m*f-o*c,0,h*f-o*d,m*f+o*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,d=t._z,f=t._w,h=a+a,m=c+c,g=d+d,_=a*h,y=a*m,M=a*g,w=c*m,x=c*g,S=d*g,R=f*h,N=f*m,P=f*g,k=i.x,L=i.y,O=i.z;return o[0]=(1-(w+S))*k,o[1]=(y+P)*k,o[2]=(M-N)*k,o[3]=0,o[4]=(y-P)*L,o[5]=(1-(_+S))*L,o[6]=(x+R)*L,o[7]=0,o[8]=(M+N)*O,o[9]=(x-R)*O,o[10]=(1-(_+w))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let c=ao.set(o[0],o[1],o[2]).length();const d=ao.set(o[4],o[5],o[6]).length(),f=ao.set(o[8],o[9],o[10]).length();a<0&&(c=-c),wi.copy(this);const h=1/c,m=1/d,g=1/f;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=m,wi.elements[5]*=m,wi.elements[6]*=m,wi.elements[8]*=g,wi.elements[9]*=g,wi.elements[10]*=g,t.setFromRotationMatrix(wi),i.x=c,i.y=d,i.z=f,this}makePerspective(e,t,i,o,a,c,d=Yi,f=!1){const h=this.elements,m=2*a/(t-e),g=2*a/(i-o),_=(t+e)/(t-e),y=(i+o)/(i-o);let M,w;if(f)M=a/(c-a),w=c*a/(c-a);else if(d===Yi)M=-(c+a)/(c-a),w=-2*c*a/(c-a);else if(d===Wa)M=-c/(c-a),w=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,o,a,c,d=Yi,f=!1){const h=this.elements,m=2/(t-e),g=2/(i-o),_=-(t+e)/(t-e),y=-(i+o)/(i-o);let M,w;if(f)M=1/(c-a),w=c/(c-a);else if(d===Yi)M=-2/(c-a),w=-(c+a)/(c-a);else if(d===Wa)M=-1/(c-a),w=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=g,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Hc.prototype.isMatrix4=!0;let xt=Hc;const ao=new X,wi=new xt,oM=new X(0,0,0),aM=new X(1,1,1),Xr=new X,Jl=new X,ei=new X,Ug=new xt,Fg=new Ii;class ns{constructor(e=0,t=0,i=0,o=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],d=o[8],f=o[1],h=o[5],m=o[9],g=o[2],_=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(d,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ug,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fg.setFromEuler(this),this.setFromQuaternion(Fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class g0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lM=0;const Og=new X,lo=new Ii,pr=new xt,Ql=new X,Ta=new X,cM=new X,uM=new Ii,kg=new X(1,0,0),Bg=new X(0,1,0),zg=new X(0,0,1),Vg={type:"added"},dM={type:"removed"},co={type:"childadded",child:null},kd={type:"childremoved",child:null};class nn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new X,t=new ns,i=new Ii,o=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xt},normalMatrix:{value:new ut}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(kg,e)}rotateY(e){return this.rotateOnAxis(Bg,e)}rotateZ(e){return this.rotateOnAxis(zg,e)}translateOnAxis(e,t){return Og.copy(e).applyQuaternion(this.quaternion),this.position.add(Og.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kg,e)}translateY(e){return this.translateOnAxis(Bg,e)}translateZ(e){return this.translateOnAxis(zg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ql.copy(e):Ql.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Ta,Ql,this.up):pr.lookAt(Ql,Ta,this.up),this.quaternion.setFromRotationMatrix(pr),o&&(pr.extractRotation(o.matrixWorld),lo.setFromRotationMatrix(pr),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vg),co.child=e,this.dispatchEvent(co),co.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dM),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vg),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,cM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,uM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*o,a[13]+=i-a[1]*t-a[5]*i-a[9]*o,a[14]+=o-a[2]*t-a[6]*i-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const g=f[h];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(a(e.materials,this.material[f]));o.material=d}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(a(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),y=c(e.animations),M=c(e.nodes);d.length>0&&(i.geometries=d),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=o,i;function c(d){const f=[];for(const h in d){const m=d[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}nn.DEFAULT_UP=new X(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Cs extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,i),S=this._getHandJoint(h,w);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},ec={h:0,s:0,l:0};function zd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=Tt.workingColorSpace){if(e=Rh(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=zd(c,a,e+1/3),this.g=zd(c,a,e),this.b=zd(c,a,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=wn){function i(a){a!==void 0&&parseFloat(a)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const i=_0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Tt.workingToColorSpace(Ln.copy(this),e),Math.round(vt(Ln.r*255,0,255))*65536+Math.round(vt(Ln.g*255,0,255))*256+Math.round(vt(Ln.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,o=Ln.g,a=Ln.b,c=Math.max(i,o,a),d=Math.min(i,o,a);let f,h;const m=(d+c)/2;if(d===c)f=0,h=0;else{const g=c-d;switch(h=m<=.5?g/(c+d):g/(2-c-d),c){case i:f=(o-a)/g+(o<a?6:0);break;case o:f=(a-i)/g+2;break;case a:f=(i-o)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=wn){Tt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,i=Ln.g,o=Ln.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(ec);const i=Ba(Yr.h,ec.h,t),o=Ba(Yr.s,ec.s,t),a=Ba(Yr.l,ec.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new dt;dt.NAMES=_0;class hM extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ai=new X,mr=new X,Vd=new X,gr=new X,uo=new X,fo=new X,Hg=new X,Hd=new X,Gd=new X,jd=new X,Wd=new zt,Xd=new zt,Yd=new zt;class Pi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Ai.subVectors(e,t),o.cross(Ai);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Ai.subVectors(o,t),mr.subVectors(i,t),Vd.subVectors(e,t);const c=Ai.dot(Ai),d=Ai.dot(mr),f=Ai.dot(Vd),h=mr.dot(mr),m=mr.dot(Vd),g=c*h-d*d;if(g===0)return a.set(0,0,0),null;const _=1/g,y=(h*f-d*m)*_,M=(c*m-d*f)*_;return a.set(1-y-M,M,y)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,i,o,a,c,d,f){return this.getBarycoord(e,t,i,o,gr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,gr.x),f.addScaledVector(c,gr.y),f.addScaledVector(d,gr.z),f)}static getInterpolatedAttribute(e,t,i,o,a,c){return Wd.setScalar(0),Xd.setScalar(0),Yd.setScalar(0),Wd.fromBufferAttribute(e,t),Xd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Wd,a.x),c.addScaledVector(Xd,a.y),c.addScaledVector(Yd,a.z),c}static isFrontFacing(e,t,i,o){return Ai.subVectors(i,t),mr.subVectors(e,t),Ai.cross(mr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Ai.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return Pi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,d;uo.subVectors(o,i),fo.subVectors(a,i),Hd.subVectors(e,i);const f=uo.dot(Hd),h=fo.dot(Hd);if(f<=0&&h<=0)return t.copy(i);Gd.subVectors(e,o);const m=uo.dot(Gd),g=fo.dot(Gd);if(m>=0&&g<=m)return t.copy(o);const _=f*g-m*h;if(_<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(i).addScaledVector(uo,c);jd.subVectors(e,a);const y=uo.dot(jd),M=fo.dot(jd);if(M>=0&&y<=M)return t.copy(a);const w=y*h-f*M;if(w<=0&&h>=0&&M<=0)return d=h/(h-M),t.copy(i).addScaledVector(fo,d);const x=m*M-y*g;if(x<=0&&g-m>=0&&y-M>=0)return Hg.subVectors(a,o),d=(g-m)/(g-m+(y-M)),t.copy(o).addScaledVector(Hg,d);const S=1/(x+w+_);return c=w*S,d=_*S,t.copy(i).addScaledVector(uo,c).addScaledVector(fo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class er{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=a.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ri):Ri.fromBufferAttribute(a,c),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tc.copy(i.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),nc.subVectors(this.max,ba),ho.subVectors(e.a,ba),po.subVectors(e.b,ba),mo.subVectors(e.c,ba),Kr.subVectors(po,ho),qr.subVectors(mo,po),ys.subVectors(ho,mo);let t=[0,-Kr.z,Kr.y,0,-qr.z,qr.y,0,-ys.z,ys.y,Kr.z,0,-Kr.x,qr.z,0,-qr.x,ys.z,0,-ys.x,-Kr.y,Kr.x,0,-qr.y,qr.x,0,-ys.y,ys.x,0];return!Kd(t,ho,po,mo,nc)||(t=[1,0,0,0,1,0,0,0,1],!Kd(t,ho,po,mo,nc))?!1:(ic.crossVectors(Kr,qr),t=[ic.x,ic.y,ic.z],Kd(t,ho,po,mo,nc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new X,new X,new X,new X,new X,new X,new X,new X],Ri=new X,tc=new er,ho=new X,po=new X,mo=new X,Kr=new X,qr=new X,ys=new X,ba=new X,nc=new X,ic=new X,Ss=new X;function Kd(s,e,t,i,o){for(let a=0,c=s.length-3;a<=c;a+=3){Ss.fromArray(s,a);const d=o.x*Math.abs(Ss.x)+o.y*Math.abs(Ss.y)+o.z*Math.abs(Ss.z),f=e.dot(Ss),h=t.dot(Ss),m=i.dot(Ss);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>d)return!1}return!0}const cn=new X,rc=new at;let pM=0;class Bn extends rs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ah,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rc.fromBufferAttribute(this,t),rc.applyMatrix3(e),this.setXY(t,rc.x,rc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),o=Ut(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),o=Ut(o,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class v0 extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class x0 extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Li extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const mM=new er,wa=new X,qd=new X;class tr{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mM.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const t=wa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(wa,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(qd)),this.expandByPoint(wa.copy(e.center).sub(qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gM=0;const fi=new xt,$d=new nn,go=new X,ti=new er,Aa=new er,yn=new X;class _i extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IS(e)?x0:v0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ut().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,i){return fi.makeTranslation(e,t,i),this.applyMatrix4(fi),this}scale(e,t,i){return fi.makeScale(e,t,i),this.applyMatrix4(fi),this}lookAt(e){return $d.lookAt(e),$d.updateMatrix(),this.applyMatrix4($d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Li(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const d=t[a];Aa.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ti.min,Aa.min),ti.expandByPoint(yn),yn.addVectors(ti.max,Aa.max),ti.expandByPoint(yn)):(ti.expandByPoint(Aa.min),ti.expandByPoint(Aa.max))}ti.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)yn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(yn));if(t)for(let a=0,c=t.length;a<c;a++){const d=t[a],f=this.morphTargetsRelative;for(let h=0,m=d.count;h<m;h++)yn.fromBufferAttribute(d,h),f&&(go.fromBufferAttribute(e,h),yn.add(go)),o=Math.max(o,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),d=[],f=[];for(let b=0;b<i.count;b++)d[b]=new X,f[b]=new X;const h=new X,m=new X,g=new X,_=new at,y=new at,M=new at,w=new X,x=new X;function S(b,D,Y){h.fromBufferAttribute(i,b),m.fromBufferAttribute(i,D),g.fromBufferAttribute(i,Y),_.fromBufferAttribute(a,b),y.fromBufferAttribute(a,D),M.fromBufferAttribute(a,Y),m.sub(h),g.sub(h),y.sub(_),M.sub(_);const F=1/(y.x*M.y-M.x*y.y);isFinite(F)&&(w.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(F),x.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(F),d[b].add(w),d[D].add(w),d[Y].add(w),f[b].add(x),f[D].add(x),f[Y].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let b=0,D=R.length;b<D;++b){const Y=R[b],F=Y.start,Z=Y.count;for(let ce=F,de=F+Z;ce<de;ce+=3)S(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const N=new X,P=new X,k=new X,L=new X;function O(b){k.fromBufferAttribute(o,b),L.copy(k);const D=d[b];N.copy(D),N.sub(k.multiplyScalar(k.dot(D))).normalize(),P.crossVectors(L,D);const F=P.dot(f[b])<0?-1:1;c.setXYZW(b,N.x,N.y,N.z,F)}for(let b=0,D=R.length;b<D;++b){const Y=R[b],F=Y.start,Z=Y.count;for(let ce=F,de=F+Z;ce<de;ce+=3)O(e.getX(ce+0)),O(e.getX(ce+1)),O(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const o=new X,a=new X,c=new X,d=new X,f=new X,h=new X,m=new X,g=new X;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),w=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,w),c.fromBufferAttribute(t,x),m.subVectors(c,a),g.subVectors(o,a),m.cross(g),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,x),d.add(m),f.add(m),h.add(m),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(w,f.x,f.y,f.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)o.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,a),g.subVectors(o,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,f){const h=d.array,m=d.itemSize,g=d.normalized,_=new h.constructor(f.length*m);let y=0,M=0;for(let w=0,x=f.length;w<x;w++){d.isInterleavedBufferAttribute?y=f[w]*d.data.stride+d.offset:y=f[w]*m;for(let S=0;S<m;S++)_[M++]=h[y++]}return new Bn(_,m,g)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,i=this.index.array,o=this.attributes;for(const d in o){const f=o[d],h=e(f,i);t.setAttribute(d,h)}const a=this.morphAttributes;for(const d in a){const f=[],h=a[d];for(let m=0,g=h.length;m<g;m++){const _=h[m],y=e(_,i);f.push(y)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const h=c[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let g=0,_=h.length;g<_;g++){const y=h[g];m.push(y.toJSON(e.data))}m.length>0&&(o[f]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],g=a[h];for(let _=0,y=g.length;_<y;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _M{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new X;class Ph{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),o=Ut(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),o=Ut(o,this.array),a=Ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Bc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new Bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ph(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let vM=0;class $i extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=To,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==Sf&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==so&&(i.stencilFail=this.stencilFail),this.stencilZFail!==so&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==so&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const d in a){const f=a[d];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vr=new X,Zd=new X,sc=new X,$r=new X,Jd=new X,oc=new X,Qd=new X;class Ya{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Zd.copy(e).add(t).multiplyScalar(.5),sc.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(Zd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(sc),d=$r.dot(this.direction),f=-$r.dot(sc),h=$r.lengthSq(),m=Math.abs(1-c*c);let g,_,y,M;if(m>0)if(g=c*f-d,_=c*d-f,M=a*m,g>=0)if(_>=-M)if(_<=M){const w=1/m;g*=w,_*=w,y=g*(g+c*_+2*d)+_*(c*g+_+2*f)+h}else _=a,g=Math.max(0,-(c*_+d)),y=-g*g+_*(_+2*f)+h;else _=-a,g=Math.max(0,-(c*_+d)),y=-g*g+_*(_+2*f)+h;else _<=-M?(g=Math.max(0,-(-c*a+d)),_=g>0?-a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+h):_<=M?(g=0,_=Math.min(Math.max(-a,-f),a),y=_*(_+2*f)+h):(g=Math.max(0,-(c*a+d)),_=g>0?a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+h);else _=c>0?-a:a,g=Math.max(0,-(c*_+d)),y=-g*g+_*(_+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Zd).addScaledVector(sc,_),y}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const i=vr.dot(this.direction),o=vr.dot(vr)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),d=i-c,f=i+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,d,f;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),m>=0?(a=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),g>=0?(d=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(d=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),i>f||d>o)||((d>i||i!==i)&&(i=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,o,a){Jd.subVectors(t,e),oc.subVectors(i,e),Qd.crossVectors(Jd,oc);let c=this.direction.dot(Qd),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;$r.subVectors(this.origin,e);const f=d*this.direction.dot(oc.crossVectors($r,oc));if(f<0)return null;const h=d*this.direction.dot(Jd.cross($r));if(h<0||f+h>c)return null;const m=-d*$r.dot(Qd);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ps extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gg=new xt,Ms=new Ya,ac=new tr,jg=new X,lc=new X,cc=new X,uc=new X,ef=new X,dc=new X,Wg=new X,fc=new X;class ri extends nn{constructor(e=new _i,t=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const d=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(a&&d){dc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const m=d[f],g=a[f];m!==0&&(ef.fromBufferAttribute(g,e),c?dc.addScaledVector(ef,m):dc.addScaledVector(ef.sub(t),m))}t.add(dc)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(a),Ms.copy(e.ray).recast(e.near),!(ac.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(ac,jg)===null||Ms.origin.distanceToSquared(jg)>(e.far-e.near)**2))&&(Gg.copy(a).invert(),Ms.copy(e.ray).applyMatrix4(Gg),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,d=a.index,f=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,y=a.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,w=_.length;M<w;M++){const x=_[M],S=c[x.materialIndex],R=Math.max(x.start,y.start),N=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let P=R,k=N;P<k;P+=3){const L=d.getX(P),O=d.getX(P+1),b=d.getX(P+2);o=hc(this,S,e,i,h,m,g,L,O,b),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let x=M,S=w;x<S;x+=3){const R=d.getX(x),N=d.getX(x+1),P=d.getX(x+2);o=hc(this,c,e,i,h,m,g,R,N,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,w=_.length;M<w;M++){const x=_[M],S=c[x.materialIndex],R=Math.max(x.start,y.start),N=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let P=R,k=N;P<k;P+=3){const L=P,O=P+1,b=P+2;o=hc(this,S,e,i,h,m,g,L,O,b),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),w=Math.min(f.count,y.start+y.count);for(let x=M,S=w;x<S;x+=3){const R=x,N=x+1,P=x+2;o=hc(this,c,e,i,h,m,g,R,N,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function xM(s,e,t,i,o,a,c,d){let f;if(e.side===qn?f=i.intersectTriangle(c,a,o,!0,d):f=i.intersectTriangle(o,a,c,e.side===Tr,d),f===null)return null;fc.copy(d),fc.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(fc);return h<t.near||h>t.far?null:{distance:h,point:fc.clone(),object:s}}function hc(s,e,t,i,o,a,c,d,f,h){s.getVertexPosition(d,lc),s.getVertexPosition(f,cc),s.getVertexPosition(h,uc);const m=xM(s,e,t,i,lc,cc,uc,Wg);if(m){const g=new X;Pi.getBarycoord(Wg,lc,cc,uc,g),o&&(m.uv=Pi.getInterpolatedAttribute(o,d,f,h,g,new at)),a&&(m.uv1=Pi.getInterpolatedAttribute(a,d,f,h,g,new at)),c&&(m.normal=Pi.getInterpolatedAttribute(c,d,f,h,g,new X),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:d,b:f,c:h,normal:new X,materialIndex:0};Pi.getNormal(lc,cc,uc,_.normal),m.face=_,m.barycoord=g}return m}const Ra=new zt,Xg=new zt,Yg=new zt,yM=new zt,Kg=new xt,pc=new X,tf=new tr,qg=new xt,nf=new Ya;class SM extends ri{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eg,this.bindMatrix=new xt,this.bindMatrixInverse=new xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new er),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pc),this.boundingBox.expandByPoint(pc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pc),this.boundingSphere.expandByPoint(pc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,o=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tf.copy(this.boundingSphere),tf.applyMatrix4(o),e.ray.intersectsSphere(tf)!==!1&&(qg.copy(o).invert(),nf.copy(e.ray).applyMatrix4(qg),!(this.boundingBox!==null&&nf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new zt,t=this.geometry.attributes.skinWeight;for(let i=0,o=t.count;i<o;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===MS?this.bindMatrixInverse.copy(this.bindMatrix).invert():$e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,o=this.geometry;Xg.fromBufferAttribute(o.attributes.skinIndex,e),Yg.fromBufferAttribute(o.attributes.skinWeight,e),t.isVector4?(Ra.copy(t),t.set(0,0,0,0)):(Ra.set(...t,1),t.set(0,0,0)),Ra.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){const c=Yg.getComponent(a);if(c!==0){const d=Xg.getComponent(a);Kg.multiplyMatrices(i.bones[d].matrixWorld,i.boneInverses[d]),t.addScaledVector(yM.copy(Ra).applyMatrix4(Kg),c)}}return t.isVector4&&(t.w=Ra.w),t.applyMatrix4(this.bindMatrixInverse)}}class y0 extends nn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nh extends Sn{constructor(e=null,t=1,i=1,o,a,c,d,f,h=hn,m=hn,g,_){super(null,c,d,f,h,m,o,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $g=new xt,MM=new xt;class Lh{constructor(e=[],t=[]){this.uuid=Ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){$e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,o=this.bones.length;i<o;i++)this.boneInverses.push(new xt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new xt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,o=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const d=e[a]?e[a].matrixWorld:MM;$g.multiplyMatrices(d,t[a]),$g.toArray(i,a*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Lh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Nh(t,e,e,mi,pi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const o=this.bones[t];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,o=e.bones.length;i<o;i++){const a=e.bones[i];let c=t[a];c===void 0&&($e("Skeleton: No bone found with UUID:",a),c=new y0),this.bones.push(c),this.boneInverses.push(new xt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let o=0,a=t.length;o<a;o++){const c=t[o];e.bones.push(c.uuid);const d=i[o];e.boneInverses.push(d.toArray())}return e}}class ch extends Bn{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _o=new xt,Zg=new xt,mc=[],Jg=new er,EM=new xt,Ca=new ri,Pa=new tr;class TM extends ri{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ch(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,EM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_o),Jg.copy(e.boundingBox).applyMatrix4(_o),this.boundingBox.union(Jg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_o),Pa.copy(e.boundingSphere).applyMatrix4(_o),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let d=0;d<i.length;d++)i[d]=o[c+d]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(i),e.ray.intersectsSphere(Pa)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,_o),Zg.multiplyMatrices(i,_o),Ca.matrixWorld=Zg,Ca.raycast(e,mc);for(let c=0,d=mc.length;c<d;c++){const f=mc[c];f.instanceId=a,f.object=this,t.push(f)}mc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ch(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new Nh(new Float32Array(o*this.count),o,this.count,Mh,pi));const a=this.morphTexture.source.data.data;let c=0;for(let h=0;h<i.length;h++)c+=i[h];const d=this.geometry.morphTargetsRelative?1:1-c,f=o*e;return a[f]=d,a.set(i,f+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rf=new X,bM=new X,wM=new ut;class Qr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=rf.subVectors(i,t).cross(bM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const o=e.delta(rf),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wM.getNormalMatrix(e),o=this.coplanarPoint(rf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new tr,AM=new at(.5,.5),gc=new X;class Ih{constructor(e=new Qr,t=new Qr,i=new Qr,o=new Qr,a=new Qr,c=new Qr){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(o),d[4].copy(a),d[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yi,i=!1){const o=this.planes,a=e.elements,c=a[0],d=a[1],f=a[2],h=a[3],m=a[4],g=a[5],_=a[6],y=a[7],M=a[8],w=a[9],x=a[10],S=a[11],R=a[12],N=a[13],P=a[14],k=a[15];if(o[0].setComponents(h-c,y-m,S-M,k-R).normalize(),o[1].setComponents(h+c,y+m,S+M,k+R).normalize(),o[2].setComponents(h+d,y+g,S+w,k+N).normalize(),o[3].setComponents(h-d,y-g,S-w,k-N).normalize(),i)o[4].setComponents(f,_,x,P).normalize(),o[5].setComponents(h-f,y-_,S-x,k-P).normalize();else if(o[4].setComponents(h-f,y-_,S-x,k-P).normalize(),t===Yi)o[5].setComponents(h+f,y+_,S+x,k+P).normalize();else if(t===Wa)o[5].setComponents(f,_,x,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const t=AM.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(gc.x=o.normal.x>0?e.max.x:e.min.x,gc.y=o.normal.y>0?e.max.y:e.min.y,gc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class S0 extends $i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new X,Vc=new X,Qg=new xt,Na=new Ya,_c=new tr,sf=new X,e_=new X;class Dh extends nn{constructor(e=new _i,t=new S0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)zc.fromBufferAttribute(t,o-1),Vc.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=zc.distanceTo(Vc);e.setAttribute("lineDistance",new Li(i,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(o),_c.radius+=a,e.ray.intersectsSphere(_c)===!1)return;Qg.copy(o).invert(),Na.copy(e.ray).applyMatrix4(Qg);const d=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,h=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const y=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let w=y,x=M-1;w<x;w+=h){const S=m.getX(w),R=m.getX(w+1),N=vc(this,e,Na,f,S,R,w);N&&t.push(N)}if(this.isLineLoop){const w=m.getX(M-1),x=m.getX(y),S=vc(this,e,Na,f,w,x,M-1);S&&t.push(S)}}else{const y=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let w=y,x=M-1;w<x;w+=h){const S=vc(this,e,Na,f,w,w+1,w);S&&t.push(S)}if(this.isLineLoop){const w=vc(this,e,Na,f,M-1,y,M-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const d=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}}function vc(s,e,t,i,o,a,c){const d=s.geometry.attributes.position;if(zc.fromBufferAttribute(d,o),Vc.fromBufferAttribute(d,a),t.distanceSqToSegment(zc,Vc,sf,e_)>i)return;sf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(sf);if(!(h<e.near||h>e.far))return{distance:h,point:e_.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const t_=new X,n_=new X;class RM extends Dh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)t_.fromBufferAttribute(t,o),n_.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+t_.distanceTo(n_);e.setAttribute("lineDistance",new Li(i,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class CM extends Dh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class M0 extends $i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const i_=new xt,uh=new Ya,xc=new tr,yc=new X;class PM extends nn{constructor(e=new _i,t=new M0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(o),xc.radius+=a,e.ray.intersectsSphere(xc)===!1)return;i_.copy(o).invert(),uh.copy(e.ray).applyMatrix4(i_);const d=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,h=i.index,g=i.attributes.position;if(h!==null){const _=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let M=_,w=y;M<w;M++){const x=h.getX(M);yc.fromBufferAttribute(g,x),r_(yc,x,f,o,e,t,this)}}else{const _=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let M=_,w=y;M<w;M++)yc.fromBufferAttribute(g,M),r_(yc,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const d=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}}function r_(s,e,t,i,o,a,c){const d=uh.distanceSqToPoint(s);if(d<t){const f=new X;uh.closestPointToPoint(s,f),f.applyMatrix4(i);const h=o.ray.origin.distanceTo(f);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(d),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class E0 extends Sn{constructor(e=[],t=Ns,i,o,a,c,d,f,h,m){super(e,t,i,o,a,c,d,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class No extends Sn{constructor(e,t,i=Zi,o,a,c,d=hn,f=hn,h,m=wr,g=1){if(m!==wr&&m!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:g};super(_,o,a,c,d,f,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class NM extends No{constructor(e,t=Zi,i=Ns,o,a,c=hn,d=hn,f,h=wr){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,t,i,o,a,c,d,f,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class T0 extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends _i{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const d=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],m=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,o,c,2),M("x","z","y",1,-1,e,i,-t,o,c,3),M("x","y","z",1,-1,e,t,i,o,a,4),M("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new Li(h,3)),this.setAttribute("normal",new Li(m,3)),this.setAttribute("uv",new Li(g,2));function M(w,x,S,R,N,P,k,L,O,b,D){const Y=P/O,F=k/b,Z=P/2,ce=k/2,de=L/2,j=O+1,ie=b+1;let K=0,q=0;const le=new X;for(let ae=0;ae<ie;ae++){const U=ae*F-ce;for(let ee=0;ee<j;ee++){const Fe=ee*Y-Z;le[w]=Fe*R,le[x]=U*N,le[S]=de,h.push(le.x,le.y,le.z),le[w]=0,le[x]=0,le[S]=L>0?1:-1,m.push(le.x,le.y,le.z),g.push(ee/O),g.push(1-ae/b),K+=1}}for(let ae=0;ae<b;ae++)for(let U=0;U<O;U++){const ee=_+U+j*ae,Fe=_+U+j*(ae+1),He=_+(U+1)+j*(ae+1),Ie=_+(U+1)+j*ae;f.push(ee,Fe,Ie),f.push(Fe,He,Ie),q+=6}d.addGroup(y,q,D),y+=q,_+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jc extends _i{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,d=Math.floor(i),f=Math.floor(o),h=d+1,m=f+1,g=e/d,_=t/f,y=[],M=[],w=[],x=[];for(let S=0;S<m;S++){const R=S*_-c;for(let N=0;N<h;N++){const P=N*g-a;M.push(P,-R,0),w.push(0,0,1),x.push(N/d),x.push(1-S/f)}}for(let S=0;S<f;S++)for(let R=0;R<d;R++){const N=R+h*S,P=R+h*(S+1),k=R+1+h*(S+1),L=R+1+h*S;y.push(N,P,L),y.push(P,k,L)}this.setIndex(y),this.setAttribute("position",new Li(M,3)),this.setAttribute("normal",new Li(w,3)),this.setAttribute("uv",new Li(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Lo(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];if(s_(o))o.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone();else if(Array.isArray(o))if(s_(o[0])){const a=[];for(let c=0,d=o.length;c<d;c++)a[c]=o[c].clone();e[t][i]=a}else e[t][i]=o.slice();else e[t][i]=o}}return e}function On(s){const e={};for(let t=0;t<s.length;t++){const i=Lo(s[t]);for(const o in i)e[o]=i[o]}return e}function s_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function LM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function b0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const IM={clone:Lo,merge:On};var DM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DM,this.fragmentShader=UM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=LM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class FM extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Uh extends $i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nr extends Uh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class OM extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kM extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Sc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function BM(s){function e(o,a){return s[o]-s[a]}const t=s.length,i=new Array(t);for(let o=0;o!==t;++o)i[o]=o;return i.sort(e),i}function o_(s,e,t){const i=s.length,o=new s.constructor(i);for(let a=0,c=0;c!==i;++a){const d=t[a]*e;for(let f=0;f!==e;++f)o[c++]=s[d+f]}return o}function w0(s,e,t,i){let o=1,a=s[0];for(;a!==void 0&&a[i]===void 0;)a=s[o++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push(...c)),a=s[o++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=s[o++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=s[o++];while(a!==void 0)}class Fo{constructor(e,t,i,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,o=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<o)){for(let d=i+2;;){if(o===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===d)break;if(a=o,o=t[++i],e<o)break t}c=t.length;break n}if(!(e>=a)){const d=t[1];e<d&&(i=2,a=d);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(o=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const d=i+c>>>1;e<t[d]?c=d:i=d+1}if(o=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,o)}return this.interpolate_(i,a,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o;for(let c=0;c!==o;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zM extends Fo{constructor(e,t,i,o){super(e,t,i,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bg,endingEnd:bg}}intervalChanged_(e,t,i){const o=this.parameterPositions;let a=e-2,c=e+1,d=o[a],f=o[c];if(d===void 0)switch(this.getSettings_().endingStart){case wg:a=e,d=2*t-i;break;case Ag:a=o.length-2,d=t+o[a]-o[a+1];break;default:a=e,d=i}if(f===void 0)switch(this.getSettings_().endingEnd){case wg:c=e,f=2*i-t;break;case Ag:c=1,f=i+o[1]-o[0];break;default:c=e-1,f=t}const h=(i-t)*.5,m=this.valueSize;this._weightPrev=h/(t-d),this._weightNext=h/(f-i),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,f=e*d,h=f-d,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(i-t)/(o-t),w=M*M,x=w*M,S=-_*x+2*_*w-_*M,R=(1+_)*x+(-1.5-2*_)*w+(-.5+_)*M+1,N=(-1-y)*x+(1.5+y)*w+.5*M,P=y*x-y*w;for(let k=0;k!==d;++k)a[k]=S*c[m+k]+R*c[h+k]+N*c[f+k]+P*c[g+k];return a}}class VM extends Fo{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,f=e*d,h=f-d,m=(i-t)/(o-t),g=1-m;for(let _=0;_!==d;++_)a[_]=c[h+_]*g+c[f+_]*m;return a}}class HM extends Fo{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class GM extends Fo{interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,f=e*d,h=f-d,m=this.settings||this.DefaultSettings_,g=m.inTangents,_=m.outTangents;if(!g||!_){const w=(i-t)/(o-t),x=1-w;for(let S=0;S!==d;++S)a[S]=c[h+S]*x+c[f+S]*w;return a}const y=d*2,M=e-1;for(let w=0;w!==d;++w){const x=c[h+w],S=c[f+w],R=M*y+w*2,N=_[R],P=_[R+1],k=e*y+w*2,L=g[k],O=g[k+1];let b=(i-t)/(o-t),D,Y,F,Z,ce;for(let de=0;de<8;de++){D=b*b,Y=D*b,F=1-b,Z=F*F,ce=Z*F;const ie=ce*t+3*Z*b*N+3*F*D*L+Y*o-i;if(Math.abs(ie)<1e-10)break;const K=3*Z*(N-t)+6*F*b*(L-N)+3*D*(o-L);if(Math.abs(K)<1e-10)break;b=b-ie/K,b=Math.max(0,Math.min(1,b))}a[w]=ce*x+3*Z*b*P+3*F*D*O+Y*S}return a}}class Di{constructor(e,t,i,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sc(t,this.TimeBufferType),this.values=Sc(i,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sc(e.times,Array),values:Sc(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(i.interpolation=o)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new HM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new VM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new GM(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ga:t=this.InterpolantFactoryMethodDiscrete;break;case ja:t=this.InterpolantFactoryMethodLinear;break;case Id:t=this.InterpolantFactoryMethodSmooth;break;case Tg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $e("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ga;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Id;case this.InterpolantFactoryMethodBezier:return Tg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]*=e}return this}trim(e,t){const i=this.times,o=i.length;let a=0,c=o-1;for(;a!==o&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==o){a>=c&&(c=Math.max(c,1),a=c-1);const d=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*d,c*d)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,o=this.values,a=i.length;a===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let d=0;d!==a;d++){const f=i[d];if(typeof f=="number"&&isNaN(f)){nt("KeyframeTrack: Time is not a valid number.",this,d,f),e=!1;break}if(c!==null&&c>f){nt("KeyframeTrack: Out of order keys.",this,d,f,c),e=!1;break}c=f}if(o!==void 0&&DS(o))for(let d=0,f=o.length;d!==f;++d){const h=o[d];if(isNaN(h)){nt("KeyframeTrack: Value is not a valid number.",this,d,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),o=this.getInterpolation()===Id,a=e.length-1;let c=1;for(let d=1;d<a;++d){let f=!1;const h=e[d],m=e[d+1];if(h!==m&&(d!==1||h!==e[0]))if(o)f=!0;else{const g=d*i,_=g-i,y=g+i;for(let M=0;M!==i;++M){const w=t[g+M];if(w!==t[_+M]||w!==t[y+M]){f=!0;break}}}if(f){if(d!==c){e[c]=e[d];const g=d*i,_=c*i;for(let y=0;y!==i;++y)t[_+y]=t[g+y]}++c}}if(a>0){e[c]=e[a];for(let d=a*i,f=c*i,h=0;h!==i;++h)t[f+h]=t[d+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,o=new i(this.name,e,t);return o.createInterpolant=this.createInterpolant,o}}Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=ja;class Oo extends Di{constructor(e,t,i){super(e,t,i)}}Oo.prototype.ValueTypeName="bool";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=Ga;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class A0 extends Di{constructor(e,t,i,o){super(e,t,i,o)}}A0.prototype.ValueTypeName="color";class Io extends Di{constructor(e,t,i,o){super(e,t,i,o)}}Io.prototype.ValueTypeName="number";class jM extends Fo{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,f=(i-t)/(o-t);let h=e*d;for(let m=h+d;h!==m;h+=4)Ii.slerpFlat(a,0,c,h-d,c,h,f);return a}}class Do extends Di{constructor(e,t,i,o){super(e,t,i,o)}InterpolantFactoryMethodLinear(e){return new jM(this.times,this.values,this.getValueSize(),e)}}Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;class ko extends Di{constructor(e,t,i){super(e,t,i)}}ko.prototype.ValueTypeName="string";ko.prototype.ValueBufferType=Array;ko.prototype.DefaultInterpolation=Ga;ko.prototype.InterpolantFactoryMethodLinear=void 0;ko.prototype.InterpolantFactoryMethodSmooth=void 0;class Uo extends Di{constructor(e,t,i,o){super(e,t,i,o)}}Uo.prototype.ValueTypeName="vector";class WM{constructor(e="",t=-1,i=[],o=ES){this.name=e,this.tracks=i,this.duration=t,this.blendMode=o,this.uuid=Ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,o=1/(e.fps||1);for(let c=0,d=i.length;c!==d;++c)t.push(YM(i[c]).scale(o));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],i=e.tracks,o={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,c=i.length;a!==c;++a)t.push(Di.toJSON(i[a]));return o}static CreateFromMorphTargetSequence(e,t,i,o){const a=t.length,c=[];for(let d=0;d<a;d++){let f=[],h=[];f.push((d+a-1)%a,d,(d+1)%a),h.push(0,1,0);const m=BM(f);f=o_(f,1,m),h=o_(h,1,m),!o&&f[0]===0&&(f.push(a),h.push(h[0])),c.push(new Io(".morphTargetInfluences["+t[d].name+"]",f,h).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const o=e;i=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<i.length;o++)if(i[o].name===t)return i[o];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const o={},a=/^([\w-]*?)([\d]+)$/;for(let d=0,f=e.length;d<f;d++){const h=e[d],m=h.name.match(a);if(m&&m.length>1){const g=m[1];let _=o[g];_||(o[g]=_=[]),_.push(h)}}const c=[];for(const d in o)c.push(this.CreateFromMorphTargetSequence(d,o[d],t,i));return c}static parseAnimation(e,t){if($e("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return nt("AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,y,M,w){if(y.length!==0){const x=[],S=[];w0(y,x,S,M),x.length!==0&&w.push(new g(_,x,S))}},o=[],a=e.name||"default",c=e.fps||30,d=e.blendMode;let f=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const _=h[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let w=0;w<_[M].morphTargets.length;w++)y[_[M].morphTargets[w]]=-1;for(const w in y){const x=[],S=[];for(let R=0;R!==_[M].morphTargets.length;++R){const N=_[M];x.push(N.time),S.push(N.morphTarget===w?1:0)}o.push(new Io(".morphTargetInfluence["+w+"]",x,S))}f=y.length*c}else{const y=".bones["+t[g].name+"]";i(Uo,y+".position",_,"pos",o),i(Do,y+".quaternion",_,"rot",o),i(Uo,y+".scale",_,"scl",o)}}return o.length===0?null:new this(a,f,o,d)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,o=e.length;i!==o;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function XM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Io;case"vector":case"vector2":case"vector3":case"vector4":return Uo;case"color":return A0;case"quaternion":return Do;case"bool":case"boolean":return Oo;case"string":return ko}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function YM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=XM(s.type);if(s.times===void 0){const t=[],i=[];w0(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Sr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(a_(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!a_(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function a_(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class KM{constructor(e,t,i){const o=this;let a=!1,c=0,d=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(m){d++,a===!1&&o.onStart!==void 0&&o.onStart(m,c,d),a=!0},this.itemEnd=function(m){c++,o.onProgress!==void 0&&o.onProgress(m,c,d),c===d&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=h.length;g<_;g+=2){const y=h[g],M=h[g+1];if(y.global&&(y.lastIndex=0),y.test(m))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qM=new KM;class Bo{constructor(e){this.manager=e!==void 0?e:qM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,a){i.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Bo.DEFAULT_MATERIAL_NAME="__DEFAULT";const xr={};class $M extends Error{constructor(e,t){super(e),this.response=t}}class R0 extends Bo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Sr.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(xr[e]!==void 0){xr[e].push({onLoad:t,onProgress:i,onError:o});return}xr[e]=[],xr[e].push({onLoad:t,onProgress:i,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,f=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&$e("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=xr[e],g=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let w=0;const x=new ReadableStream({start(S){R();function R(){g.read().then(({done:N,value:P})=>{if(N)S.close();else{w+=P.byteLength;const k=new ProgressEvent("progress",{lengthComputable:M,loaded:w,total:y});for(let L=0,O=m.length;L<O;L++){const b=m[L];b.onProgress&&b.onProgress(k)}S.enqueue(P),R()}},N=>{S.error(N)})}}});return new Response(x)}else throw new $M(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,d));case"json":return h.json();default:if(d==="")return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(d),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{Sr.add(`file:${e}`,h);const m=xr[e];delete xr[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onLoad&&y.onLoad(h)}}).catch(h=>{const m=xr[e];if(m===void 0)throw this.manager.itemError(e),h;delete xr[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const vo=new WeakMap;class ZM extends Bo{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Sr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let g=vo.get(c);g===void 0&&(g=[],vo.set(c,g)),g.push({onLoad:t,onError:o})}return c}const d=Xa("img");function f(){m(),t&&t(this);const g=vo.get(this)||[];for(let _=0;_<g.length;_++){const y=g[_];y.onLoad&&y.onLoad(this)}vo.delete(this),a.manager.itemEnd(e)}function h(g){m(),o&&o(g),Sr.remove(`image:${e}`);const _=vo.get(this)||[];for(let y=0;y<_.length;y++){const M=_[y];M.onError&&M.onError(g)}vo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){d.removeEventListener("load",f,!1),d.removeEventListener("error",h,!1)}return d.addEventListener("load",f,!1),d.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Sr.add(`image:${e}`,d),a.manager.itemStart(e),d.src=e,d}}class JM extends Bo{constructor(e){super(e)}load(e,t,i,o){const a=new Sn,c=new ZM(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){a.image=d,a.needsUpdate=!0,t!==void 0&&t(a)},i,o),a}}class Wc extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const of=new xt,l_=new X,c_=new X;class Fh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ih,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;l_.setFromMatrixPosition(e.matrixWorld),t.position.copy(l_),c_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(c_),t.updateMatrixWorld(),of.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Wa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mc=new X,Ec=new Ii,Vi=new X;class C0 extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mc,Ec,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,Ec,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Mc,Ec,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,Ec,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new X,u_=new at,d_=new at;class kn extends C0{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,u_,d_),t.subVectors(d_,u_)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ka*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*i/h,o*=c.width/f,i*=c.height/h}const d=this.filmOffset;d!==0&&(a+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class QM extends Fh{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Po*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||o!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=o,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class eE extends Wc{constructor(e,t,i=0,o=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=i,this.angle=o,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new QM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class tE extends Fh{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}}class dh extends Wc{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new tE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Xc extends C0{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nE extends Fh{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P0 extends Wc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new nE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class iE extends Wc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class za{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const af=new WeakMap;class rE extends Bo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&$e("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&$e("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Sr.get(`image-bitmap:${e}`);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{af.has(c)===!0?(o&&o(af.get(c)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(h),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);return}const d={};d.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",d.headers=this.requestHeader,d.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const f=fetch(e,d).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){Sr.add(`image-bitmap:${e}`,h),t&&t(h),a.manager.itemEnd(e)}).catch(function(h){o&&o(h),af.set(f,h),Sr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Sr.add(`image-bitmap:${e}`,f),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const xo=-90,yo=1;class sE extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new kn(xo,yo,e,t);o.layers=this.layers,this.add(o);const a=new kn(xo,yo,e,t);a.layers=this.layers,this.add(a);const c=new kn(xo,yo,e,t);c.layers=this.layers,this.add(c);const d=new kn(xo,yo,e,t);d.layers=this.layers,this.add(d);const f=new kn(xo,yo,e,t);f.layers=this.layers,this.add(f);const h=new kn(xo,yo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,d,f]=t;for(const h of t)this.remove(h);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,d,f,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(g,_,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class oE extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Oh="\\[\\]\\.:\\/",aE=new RegExp("["+Oh+"]","g"),kh="[^"+Oh+"]",lE="[^"+Oh.replace("\\.","")+"]",cE=/((?:WC+[\/:])*)/.source.replace("WC",kh),uE=/(WCOD+)?/.source.replace("WCOD",lE),dE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),fE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),hE=new RegExp("^"+cE+uE+dE+fE+"$"),pE=["material","materials","bones","map"];class mE{constructor(e,t,i){const o=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ft{constructor(e,t,i){this.path=t,this.parsedPath=i||Ft.parseTrackName(t),this.node=Ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ft.Composite(e,t,i):new Ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(aE,"")}static parseTrackName(e){const t=hE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=i.nodeName&&i.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const a=i.nodeName.substring(o+1);pE.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,o),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const d=a[c];if(d.name===t||d.uuid===t)return d;const f=i(d.children);if(f)return f}return null},o=i(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)e[t++]=i[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,o=t.propertyName;let a=t.propertyIndex;if(e||(e=Ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[o];if(c===void 0){const h=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+h+"."+o+" but it wasn't found.",e);return}let d=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?d=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(d=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][d]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ft.Composite=mE;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class f_{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jh=class jh{constructor(e,t,i,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=o,this}};jh.prototype.isMatrix2=!0;let h_=jh;class gE extends rs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){$e("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function p_(s,e,t,i){const o=_E(i);switch(t){case u0:return s*e;case Mh:return s*e/o.components*o.byteLength;case Eh:return s*e/o.components*o.byteLength;case Ls:return s*e*2/o.components*o.byteLength;case Th:return s*e*2/o.components*o.byteLength;case d0:return s*e*3/o.components*o.byteLength;case mi:return s*e*4/o.components*o.byteLength;case bh:return s*e*4/o.components*o.byteLength;case Cc:case Pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:case Lf:return Math.max(s,16)*Math.max(e,8)/4;case Cf:case Nf:return Math.max(s,8)*Math.max(e,8)/2;case If:case Df:case Ff:case Of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uf:case Fc:case kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qf:case eh:case th:return Math.ceil(s/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Oc:case rh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _E(s){switch(s){case ni:case o0:return{byteLength:1,components:1};case Va:case a0:case br:return{byteLength:2,components:1};case yh:case Sh:return{byteLength:2,components:4};case Zi:case xh:case pi:return{byteLength:4,components:1};case l0:case c0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N0(){let s=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function vE(s){const e=new WeakMap;function t(d,f){const h=d.array,m=d.usage,g=h.byteLength,_=s.createBuffer();s.bindBuffer(f,_),s.bufferData(f,h,m),d.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=s.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:g}}function i(d,f,h){const m=f.array,g=f.updateRanges;if(s.bindBuffer(h,d),g.length===0)s.bufferSubData(h,0,m);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],w=g[y];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++_,g[_]=w)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const w=g[y];s.bufferSubData(h,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function a(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,d,f),h.version=d.version}}return{get:o,remove:a,update:c}}var xE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yE=`#ifdef USE_ALPHAHASH
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
#endif`,SE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ME=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bE=`#ifdef USE_AOMAP
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
#endif`,wE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AE=`#ifdef USE_BATCHING
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
#endif`,RE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LE=`#ifdef USE_IRIDESCENCE
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
#endif`,IE=`#ifdef USE_BUMPMAP
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
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,HE=`#define PI 3.141592653589793
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
} // validated`,GE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jE=`vec3 transformedNormal = objectNormal;
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
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qE="gl_FragColor = linearToOutputTexel( gl_FragColor );",$E=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,eT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tT=`#ifdef USE_ENVMAP
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
#endif`,nT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oT=`#ifdef USE_GRADIENTMAP
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
}`,aT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dT=`#ifdef USE_ENVMAP
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
#endif`,fT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gT=`PhysicalMaterial material;
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
#endif`,_T=`uniform sampler2D dfgLUT;
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
}`,vT=`
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
#endif`,xT=`#if defined( RE_IndirectDiffuse )
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
#endif`,yT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ST=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,MT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ET=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CT=`#if defined( USE_POINTS_UV )
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
#endif`,PT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UT=`#ifdef USE_MORPHTARGETS
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
#endif`,FT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HT=`#ifdef USE_NORMALMAP
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
#endif`,GT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$T=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rb=`float getShadowMask() {
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
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
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
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
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
#endif`,cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hb=`#ifdef USE_TRANSMISSION
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
#endif`,pb=`#ifdef USE_TRANSMISSION
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yb=`uniform sampler2D t2D;
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`#include <common>
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
}`,wb=`#if DEPTH_PACKING == 3200
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
}`,Ab=`#define DISTANCE
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
}`,Rb=`#define DISTANCE
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`uniform float scale;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Db=`uniform vec3 diffuse;
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
}`,Ub=`#define LAMBERT
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
}`,Fb=`#define LAMBERT
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
}`,Ob=`#define MATCAP
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
}`,kb=`#define MATCAP
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
}`,Bb=`#define NORMAL
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
}`,zb=`#define NORMAL
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
}`,Vb=`#define PHONG
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
}`,Hb=`#define PHONG
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
}`,Gb=`#define STANDARD
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
}`,jb=`#define STANDARD
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
}`,Wb=`#define TOON
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
}`,Xb=`#define TOON
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
}`,Yb=`uniform float size;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,qb=`#include <common>
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
}`,$b=`uniform vec3 color;
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
}`,Zb=`uniform float rotation;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:xE,alphahash_pars_fragment:yE,alphamap_fragment:SE,alphamap_pars_fragment:ME,alphatest_fragment:EE,alphatest_pars_fragment:TE,aomap_fragment:bE,aomap_pars_fragment:wE,batching_pars_vertex:AE,batching_vertex:RE,begin_vertex:CE,beginnormal_vertex:PE,bsdfs:NE,iridescence_fragment:LE,bumpmap_pars_fragment:IE,clipping_planes_fragment:DE,clipping_planes_pars_fragment:UE,clipping_planes_pars_vertex:FE,clipping_planes_vertex:OE,color_fragment:kE,color_pars_fragment:BE,color_pars_vertex:zE,color_vertex:VE,common:HE,cube_uv_reflection_fragment:GE,defaultnormal_vertex:jE,displacementmap_pars_vertex:WE,displacementmap_vertex:XE,emissivemap_fragment:YE,emissivemap_pars_fragment:KE,colorspace_fragment:qE,colorspace_pars_fragment:$E,envmap_fragment:ZE,envmap_common_pars_fragment:JE,envmap_pars_fragment:QE,envmap_pars_vertex:eT,envmap_physical_pars_fragment:dT,envmap_vertex:tT,fog_vertex:nT,fog_pars_vertex:iT,fog_fragment:rT,fog_pars_fragment:sT,gradientmap_pars_fragment:oT,lightmap_pars_fragment:aT,lights_lambert_fragment:lT,lights_lambert_pars_fragment:cT,lights_pars_begin:uT,lights_toon_fragment:fT,lights_toon_pars_fragment:hT,lights_phong_fragment:pT,lights_phong_pars_fragment:mT,lights_physical_fragment:gT,lights_physical_pars_fragment:_T,lights_fragment_begin:vT,lights_fragment_maps:xT,lights_fragment_end:yT,lightprobes_pars_fragment:ST,logdepthbuf_fragment:MT,logdepthbuf_pars_fragment:ET,logdepthbuf_pars_vertex:TT,logdepthbuf_vertex:bT,map_fragment:wT,map_pars_fragment:AT,map_particle_fragment:RT,map_particle_pars_fragment:CT,metalnessmap_fragment:PT,metalnessmap_pars_fragment:NT,morphinstance_vertex:LT,morphcolor_vertex:IT,morphnormal_vertex:DT,morphtarget_pars_vertex:UT,morphtarget_vertex:FT,normal_fragment_begin:OT,normal_fragment_maps:kT,normal_pars_fragment:BT,normal_pars_vertex:zT,normal_vertex:VT,normalmap_pars_fragment:HT,clearcoat_normal_fragment_begin:GT,clearcoat_normal_fragment_maps:jT,clearcoat_pars_fragment:WT,iridescence_pars_fragment:XT,opaque_fragment:YT,packing:KT,premultiplied_alpha_fragment:qT,project_vertex:$T,dithering_fragment:ZT,dithering_pars_fragment:JT,roughnessmap_fragment:QT,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:rb,skinbase_vertex:sb,skinning_pars_vertex:ob,skinning_vertex:ab,skinnormal_vertex:lb,specularmap_fragment:cb,specularmap_pars_fragment:ub,tonemapping_fragment:db,tonemapping_pars_fragment:fb,transmission_fragment:hb,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:gb,uv_vertex:_b,worldpos_vertex:vb,background_vert:xb,background_frag:yb,backgroundCube_vert:Sb,backgroundCube_frag:Mb,cube_vert:Eb,cube_frag:Tb,depth_vert:bb,depth_frag:wb,distance_vert:Ab,distance_frag:Rb,equirect_vert:Cb,equirect_frag:Pb,linedashed_vert:Nb,linedashed_frag:Lb,meshbasic_vert:Ib,meshbasic_frag:Db,meshlambert_vert:Ub,meshlambert_frag:Fb,meshmatcap_vert:Ob,meshmatcap_frag:kb,meshnormal_vert:Bb,meshnormal_frag:zb,meshphong_vert:Vb,meshphong_frag:Hb,meshphysical_vert:Gb,meshphysical_frag:jb,meshtoon_vert:Wb,meshtoon_frag:Xb,points_vert:Yb,points_frag:Kb,shadow_vert:qb,shadow_frag:$b,sprite_vert:Zb,sprite_frag:Jb},Le={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ji={basic:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:On([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:On([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new dt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:On([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:On([Le.points,Le.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:On([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:On([Le.common,Le.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:On([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:On([Le.sprite,Le.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:On([Le.common,Le.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:On([Le.lights,Le.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ji.physical={uniforms:On([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Tc={r:0,b:0,g:0},Qb=new xt,L0=new ut;L0.set(-1,0,0,0,1,0,0,0,1);function ew(s,e,t,i,o,a){const c=new dt(0);let d=o===!0?0:1,f,h,m=null,g=0,_=null;function y(R){let N=R.isScene===!0?R.background:null;if(N&&N.isTexture){const P=R.backgroundBlurriness>0;N=e.get(N,P)}return N}function M(R){let N=!1;const P=y(R);P===null?x(c,d):P&&P.isColor&&(x(P,1),N=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?t.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(R,N){const P=y(N);P&&(P.isCubeTexture||P.mapping===Gc)?(h===void 0&&(h=new ri(new Ka(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Lo(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(N.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(L0),h.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Dt,(m!==P||g!==P.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,m=P,g=P.version,_=s.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(f===void 0&&(f=new ri(new jc(2,2),new Ji({name:"BackgroundMaterial",uniforms:Lo(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=P,f.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,f.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Dt,P.matrixAutoUpdate===!0&&P.updateMatrix(),f.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||g!==P.version||_!==s.toneMapping)&&(f.material.needsUpdate=!0,m=P,g=P.version,_=s.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function x(R,N){R.getRGB(Tc,b0(s)),t.buffers.color.setClear(Tc.r,Tc.g,Tc.b,N,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,N=1){c.set(R),d=N,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,x(c,d)},render:M,addToRenderList:w,dispose:S}}function tw(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=_(null);let a=o,c=!1;function d(F,Z,ce,de,j){let ie=!1;const K=g(F,de,ce,Z);a!==K&&(a=K,h(a.object)),ie=y(F,de,ce,j),ie&&M(F,de,ce,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(ie||c)&&(c=!1,P(F,Z,ce,de),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return s.createVertexArray()}function h(F){return s.bindVertexArray(F)}function m(F){return s.deleteVertexArray(F)}function g(F,Z,ce,de){const j=de.wireframe===!0;let ie=i[Z.id];ie===void 0&&(ie={},i[Z.id]=ie);const K=F.isInstancedMesh===!0?F.id:0;let q=ie[K];q===void 0&&(q={},ie[K]=q);let le=q[ce.id];le===void 0&&(le={},q[ce.id]=le);let ae=le[j];return ae===void 0&&(ae=_(f()),le[j]=ae),ae}function _(F){const Z=[],ce=[],de=[];for(let j=0;j<t;j++)Z[j]=0,ce[j]=0,de[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ce,attributeDivisors:de,object:F,attributes:{},index:null}}function y(F,Z,ce,de){const j=a.attributes,ie=Z.attributes;let K=0;const q=ce.getAttributes();for(const le in q)if(q[le].location>=0){const U=j[le];let ee=ie[le];if(ee===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),U===void 0||U.attribute!==ee||ee&&U.data!==ee.data)return!0;K++}return a.attributesNum!==K||a.index!==de}function M(F,Z,ce,de){const j={},ie=Z.attributes;let K=0;const q=ce.getAttributes();for(const le in q)if(q[le].location>=0){let U=ie[le];U===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(U=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(U=F.instanceColor));const ee={};ee.attribute=U,U&&U.data&&(ee.data=U.data),j[le]=ee,K++}a.attributes=j,a.attributesNum=K,a.index=de}function w(){const F=a.newAttributes;for(let Z=0,ce=F.length;Z<ce;Z++)F[Z]=0}function x(F){S(F,0)}function S(F,Z){const ce=a.newAttributes,de=a.enabledAttributes,j=a.attributeDivisors;ce[F]=1,de[F]===0&&(s.enableVertexAttribArray(F),de[F]=1),j[F]!==Z&&(s.vertexAttribDivisor(F,Z),j[F]=Z)}function R(){const F=a.newAttributes,Z=a.enabledAttributes;for(let ce=0,de=Z.length;ce<de;ce++)Z[ce]!==F[ce]&&(s.disableVertexAttribArray(ce),Z[ce]=0)}function N(F,Z,ce,de,j,ie,K){K===!0?s.vertexAttribIPointer(F,Z,ce,j,ie):s.vertexAttribPointer(F,Z,ce,de,j,ie)}function P(F,Z,ce,de){w();const j=de.attributes,ie=ce.getAttributes(),K=Z.defaultAttributeValues;for(const q in ie){const le=ie[q];if(le.location>=0){let ae=j[q];if(ae===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),ae!==void 0){const U=ae.normalized,ee=ae.itemSize,Fe=e.get(ae);if(Fe===void 0)continue;const He=Fe.buffer,Ie=Fe.type,oe=Fe.bytesPerElement,ye=Ie===s.INT||Ie===s.UNSIGNED_INT||ae.gpuType===xh;if(ae.isInterleavedBufferAttribute){const me=ae.data,De=me.stride,Je=ae.offset;if(me.isInstancedInterleavedBuffer){for(let Qe=0;Qe<le.locationSize;Qe++)S(le.location+Qe,me.meshPerAttribute);F.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Qe=0;Qe<le.locationSize;Qe++)x(le.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,He);for(let Qe=0;Qe<le.locationSize;Qe++)N(le.location+Qe,ee/le.locationSize,Ie,U,De*oe,(Je+ee/le.locationSize*Qe)*oe,ye)}else{if(ae.isInstancedBufferAttribute){for(let me=0;me<le.locationSize;me++)S(le.location+me,ae.meshPerAttribute);F.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<le.locationSize;me++)x(le.location+me);s.bindBuffer(s.ARRAY_BUFFER,He);for(let me=0;me<le.locationSize;me++)N(le.location+me,ee/le.locationSize,Ie,U,ee*oe,ee/le.locationSize*me*oe,ye)}}else if(K!==void 0){const U=K[q];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(le.location,U);break;case 3:s.vertexAttrib3fv(le.location,U);break;case 4:s.vertexAttrib4fv(le.location,U);break;default:s.vertexAttrib1fv(le.location,U)}}}}R()}function k(){D();for(const F in i){const Z=i[F];for(const ce in Z){const de=Z[ce];for(const j in de){const ie=de[j];for(const K in ie)m(ie[K].object),delete ie[K];delete de[j]}}delete i[F]}}function L(F){if(i[F.id]===void 0)return;const Z=i[F.id];for(const ce in Z){const de=Z[ce];for(const j in de){const ie=de[j];for(const K in ie)m(ie[K].object),delete ie[K];delete de[j]}}delete i[F.id]}function O(F){for(const Z in i){const ce=i[Z];for(const de in ce){const j=ce[de];if(j[F.id]===void 0)continue;const ie=j[F.id];for(const K in ie)m(ie[K].object),delete ie[K];delete j[F.id]}}}function b(F){for(const Z in i){const ce=i[Z],de=F.isInstancedMesh===!0?F.id:0,j=ce[de];if(j!==void 0){for(const ie in j){const K=j[ie];for(const q in K)m(K[q].object),delete K[q];delete j[ie]}delete ce[de],Object.keys(ce).length===0&&delete i[Z]}}}function D(){Y(),c=!0,a!==o&&(a=o,h(a.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:D,resetDefaultState:Y,dispose:k,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:x,disableUnusedAttributes:R}}function nw(s,e,t){let i;function o(f){i=f}function a(f,h){s.drawArrays(i,f,h),t.update(h,i,1)}function c(f,h,m){m!==0&&(s.drawArraysInstanced(i,f,h,m),t.update(h,i,m))}function d(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,h,0,m);let _=0;for(let y=0;y<m;y++)_+=h[y];t.update(_,i,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=d}function iw(s,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==mi&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const b=O===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ni&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==pi&&!b)}function f(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=f(h);m!==h&&($e("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:R,maxVaryings:N,maxFragmentUniforms:P,maxSamples:k,samples:L}}function rw(s){const e=this;let t=null,i=0,o=!1,a=!1;const c=new Qr,d=new ut,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||i!==0||o;return o=_,i=g.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,w=g.clipIntersection,x=g.clipShadows,S=s.get(g);if(!o||M===null||M.length===0||a&&!x)a?m(null):h();else{const R=a?0:i,N=R*4;let P=S.clippingState||null;f.value=P,P=m(M,_,N,y);for(let k=0;k!==N;++k)P[k]=t[k];S.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,y,M){const w=g!==null?g.length:0;let x=null;if(w!==0){if(x=f.value,M!==!0||x===null){const S=y+w*4,R=_.matrixWorldInverse;d.getNormalMatrix(R),(x===null||x.length<S)&&(x=new Float32Array(S));for(let N=0,P=y;N!==w;++N,P+=4)c.copy(g[N]).applyMatrix4(R,d),c.normal.toArray(x,P),x[P+3]=c.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}const ts=4,m_=[.125,.215,.35,.446,.526,.582],As=20,sw=256,La=new Xc,g_=new dt;let lf=null,cf=0,uf=0,df=!1;const ow=new X;class __{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:d=ow}=a;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,o,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,uf),this._renderer.xr.enabled=df,e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:br,format:mi,colorSpace:ii,depthBuffer:!1},o=v_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v_(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=aw(a)),this._blurMaterial=cw(a,e,t),this._ggxMaterial=lw(a,e,t)}return o}_compileMaterial(e){const t=new ri(new _i,e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,i,o,a){const f=new kn(90,1,t,i),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(g_),g.toneMapping=Ki,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new Ka,new Ps({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let S=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,S=!0):(x.color.copy(g_),S=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(f.up.set(0,h[N],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+m[N],a.y,a.z)):P===1?(f.up.set(0,0,h[N]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+m[N],a.z)):(f.up.set(0,h[N],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+m[N]));const k=this._cubeSize;So(o,P*k,N>2?k:0,k,k),g.setRenderTarget(o),S&&g.render(w,f),g.render(e,f)}g.toneMapping=y,g.autoClear=_,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Ns||e.mapping===Ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x_());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const d=a.uniforms;d.envMap.value=e;const f=this._cubeSize;So(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,La)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[i];d.material=c;const f=c.uniforms,h=i/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-m*m),_=0+h*1.25,y=g*_,{_lodMax:M}=this,w=this._sizeLods[i],x=3*w*(i>M-ts?i-M+ts:0),S=4*(this._cubeSize-w);f.envMap.value=e.texture,f.roughness.value=y,f.mipInt.value=M-t,So(a,x,S,3*w,2*w),o.setRenderTarget(a),o.render(d,La),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=M-i,So(e,x,S,3*w,2*w),o.setRenderTarget(e),o.render(d,La)}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,d){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const m=3,g=this._lodMeshes[o];g.material=h;const _=h.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*As-1),w=a/M,x=isFinite(a)?1+Math.floor(m*w):As;x>As&&$e(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${As}`);const S=[];let R=0;for(let O=0;O<As;++O){const b=O/w,D=Math.exp(-b*b/2);S.push(D),O===0?R+=D:O<x&&(R+=2*D)}for(let O=0;O<S.length;O++)S[O]=S[O]/R;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=S,_.latitudinal.value=c==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:N}=this;_.dTheta.value=M,_.mipInt.value=N-i;const P=this._sizeLods[o],k=3*P*(o>N-ts?o-N+ts:0),L=4*(this._cubeSize-P);So(t,k,L,3*P,2*P),f.setRenderTarget(t),f.render(g,La)}}function aw(s){const e=[],t=[],i=[];let o=s;const a=s-ts+1+m_.length;for(let c=0;c<a;c++){const d=Math.pow(2,o);e.push(d);let f=1/d;c>s-ts?f=m_[c-s+ts-1]:c===0&&(f=0),t.push(f);const h=1/(d-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,w=3,x=2,S=1,R=new Float32Array(w*M*y),N=new Float32Array(x*M*y),P=new Float32Array(S*M*y);for(let L=0;L<y;L++){const O=L%3*2/3-1,b=L>2?0:-1,D=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];R.set(D,w*M*L),N.set(_,x*M*L);const Y=[L,L,L,L,L,L];P.set(Y,S*M*L)}const k=new _i;k.setAttribute("position",new Bn(R,w)),k.setAttribute("uv",new Bn(N,x)),k.setAttribute("faceIndex",new Bn(P,S)),i.push(new ri(k,null)),o>ts&&o--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function v_(s,e,t){const i=new qi(s,e,t);return i.texture.mapping=Gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function So(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function lw(s,e,t){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function cw(s,e,t){const i=new Float32Array(As),o=new X(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function x_(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function y_(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}class I0 extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new E0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ka(5,5,5),a=new Ji({name:"CubemapFromEquirect",uniforms:Lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qn,blending:Mr});a.uniforms.tEquirect.value=t;const c=new ri(o,a),d=t.minFilter;return t.minFilter===yr&&(t.minFilter=pn),new sE(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}function uw(s){let e=new WeakMap,t=new WeakMap,i=null;function o(_,y=!1){return _==null?null:y?c(_):a(_)}function a(_){if(_&&_.isTexture){const y=_.mapping;if(y===Nd||y===Ld)if(e.has(_)){const M=e.get(_).texture;return d(M,_.mapping)}else{const M=_.image;if(M&&M.height>0){const w=new I0(M.height);return w.fromEquirectangularTexture(s,_),e.set(_,w),_.addEventListener("dispose",h),d(w.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture){const y=_.mapping,M=y===Nd||y===Ld,w=y===Ns||y===Ro;if(M||w){let x=t.get(_);const S=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return i===null&&(i=new __(s)),x=M?i.fromEquirectangular(_,x):i.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),x.texture;if(x!==void 0)return x.texture;{const R=_.image;return M&&R&&R.height>0||w&&R&&f(R)?(i===null&&(i=new __(s)),x=M?i.fromEquirectangular(_):i.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),_.addEventListener("dispose",m),x.texture):null}}}return _}function d(_,y){return y===Nd?_.mapping=Ns:y===Ld&&(_.mapping=Ro),_}function f(_){let y=0;const M=6;for(let w=0;w<M;w++)_[w]!==void 0&&y++;return y===M}function h(_){const y=_.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function m(_){const y=_.target;y.removeEventListener("dispose",m);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:g}}function dw(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=s.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&lh("WebGLRenderer: "+i+" extension not supported."),o}}}function fw(s,e,t,i){const o={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete o[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(g,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,t.memory.geometries++),_}function f(g){const _=g.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function h(g){const _=[],y=g.index,M=g.attributes.position;let w=0;if(M===void 0)return;if(y!==null){const R=y.array;w=y.version;for(let N=0,P=R.length;N<P;N+=3){const k=R[N+0],L=R[N+1],O=R[N+2];_.push(k,L,L,O,O,k)}}else{const R=M.array;w=M.version;for(let N=0,P=R.length/3-1;N<P;N+=3){const k=N+0,L=N+1,O=N+2;_.push(k,L,L,O,O,k)}}const x=new(M.count>=65535?x0:v0)(_,1);x.version=w;const S=a.get(g);S&&e.remove(S),a.set(g,x)}function m(g){const _=a.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&h(g)}else h(g);return a.get(g)}return{get:d,update:f,getWireframeAttribute:m}}function hw(s,e,t){let i;function o(g){i=g}let a,c;function d(g){a=g.type,c=g.bytesPerElement}function f(g,_){s.drawElements(i,_,a,g*c),t.update(_,i,1)}function h(g,_,y){y!==0&&(s.drawElementsInstanced(i,_,a,g*c,y),t.update(_,i,y))}function m(g,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,a,g,0,y);let w=0;for(let x=0;x<y;x++)w+=_[x];t.update(w,i,1)}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=m}function pw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(a/3);break;case s.LINES:t.lines+=d*(a/2);break;case s.LINE_STRIP:t.lines+=d*(a-1);break;case s.LINE_LOOP:t.lines+=d*a;break;case s.POINTS:t.points+=d*a;break;default:nt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function mw(s,e,t){const i=new WeakMap,o=new zt;function a(c,d,f){const h=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(d);if(_===void 0||_.count!==g){let Y=function(){b.dispose(),i.delete(d),d.removeEventListener("dispose",Y)};var y=Y;_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let P=0;M===!0&&(P=1),w===!0&&(P=2),x===!0&&(P=3);let k=d.attributes.position.count*P,L=1;k>e.maxTextureSize&&(L=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const O=new Float32Array(k*L*4*g),b=new m0(O,k,L,g);b.type=pi,b.needsUpdate=!0;const D=P*4;for(let F=0;F<g;F++){const Z=S[F],ce=R[F],de=N[F],j=k*L*4*F;for(let ie=0;ie<Z.count;ie++){const K=ie*D;M===!0&&(o.fromBufferAttribute(Z,ie),O[j+K+0]=o.x,O[j+K+1]=o.y,O[j+K+2]=o.z,O[j+K+3]=0),w===!0&&(o.fromBufferAttribute(ce,ie),O[j+K+4]=o.x,O[j+K+5]=o.y,O[j+K+6]=o.z,O[j+K+7]=0),x===!0&&(o.fromBufferAttribute(de,ie),O[j+K+8]=o.x,O[j+K+9]=o.y,O[j+K+10]=o.z,O[j+K+11]=de.itemSize===4?o.w:1)}}_={count:g,texture:b,size:new at(k,L)},i.set(d,_),d.addEventListener("dispose",Y)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const w=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",h)}f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:a}}function gw(s,e,t,i,o){let a=new WeakMap;function c(h){const m=o.render.frame,g=h.geometry,_=e.get(h,g);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return _}function d(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:d}}const _w={[J_]:"LINEAR_TONE_MAPPING",[Q_]:"REINHARD_TONE_MAPPING",[e0]:"CINEON_TONE_MAPPING",[vh]:"ACES_FILMIC_TONE_MAPPING",[n0]:"AGX_TONE_MAPPING",[i0]:"NEUTRAL_TONE_MAPPING",[t0]:"CUSTOM_TONE_MAPPING"};function vw(s,e,t,i,o){const a=new qi(e,t,{type:s,depthBuffer:i,stencilBuffer:o,depthTexture:i?new No(e,t):void 0}),c=new qi(e,t,{type:br,depthBuffer:!1,stencilBuffer:!1}),d=new _i;d.setAttribute("position",new Li([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Li([0,2,0,0,2,0],2));const f=new FM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ri(d,f),m=new Xc(-1,1,1,-1,0,1);let g=null,_=null,y=!1,M,w=null,x=[],S=!1;this.setSize=function(R,N){a.setSize(R,N),c.setSize(R,N);for(let P=0;P<x.length;P++){const k=x[P];k.setSize&&k.setSize(R,N)}},this.setEffects=function(R){x=R,S=x.length>0&&x[0].isRenderPass===!0;const N=a.width,P=a.height;for(let k=0;k<x.length;k++){const L=x[k];L.setSize&&L.setSize(N,P)}},this.begin=function(R,N){if(y||R.toneMapping===Ki&&x.length===0)return!1;if(w=N,N!==null){const P=N.width,k=N.height;(a.width!==P||a.height!==k)&&this.setSize(P,k)}return S===!1&&R.setRenderTarget(a),M=R.toneMapping,R.toneMapping=Ki,!0},this.hasRenderPass=function(){return S},this.end=function(R,N){R.toneMapping=M,y=!0;let P=a,k=c;for(let L=0;L<x.length;L++){const O=x[L];if(O.enabled!==!1&&(O.render(R,k,P,N),O.needsSwap!==!1)){const b=P;P=k,k=b}}if(g!==R.outputColorSpace||_!==R.toneMapping){g=R.outputColorSpace,_=R.toneMapping,f.defines={},Tt.getTransfer(g)===Dt&&(f.defines.SRGB_TRANSFER="");const L=_w[_];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(w),R.render(h,m),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),c.dispose(),d.dispose(),f.dispose()}}const D0=new Sn,fh=new No(1,1),U0=new m0,F0=new sM,O0=new E0,S_=[],M_=[],E_=new Float32Array(16),T_=new Float32Array(9),b_=new Float32Array(4);function zo(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=S_[o];if(a===void 0&&(a=new Float32Array(o),S_[o]=a),e!==0){i.toArray(a,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(a,d)}return a}function mn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function gn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Kc(s,e){let t=M_[e];t===void 0&&(t=new Int32Array(e),M_[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function xw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2fv(this.addr,e),gn(t,e)}}function Sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;s.uniform3fv(this.addr,e),gn(t,e)}}function Mw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4fv(this.addr,e),gn(t,e)}}function Ew(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;b_.set(i),s.uniformMatrix2fv(this.addr,!1,b_),gn(t,i)}}function Tw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;T_.set(i),s.uniformMatrix3fv(this.addr,!1,T_),gn(t,i)}}function bw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;E_.set(i),s.uniformMatrix4fv(this.addr,!1,E_),gn(t,i)}}function ww(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2iv(this.addr,e),gn(t,e)}}function Rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3iv(this.addr,e),gn(t,e)}}function Cw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4iv(this.addr,e),gn(t,e)}}function Pw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2uiv(this.addr,e),gn(t,e)}}function Lw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3uiv(this.addr,e),gn(t,e)}}function Iw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4uiv(this.addr,e),gn(t,e)}}function Dw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a;this.type===s.SAMPLER_2D_SHADOW?(fh.compareFunction=t.isReversedDepthBuffer()?Ah:wh,a=fh):a=D0,t.setTexture2D(e||a,o)}function Uw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||F0,o)}function Fw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||O0,o)}function Ow(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||U0,o)}function kw(s){switch(s){case 5126:return xw;case 35664:return yw;case 35665:return Sw;case 35666:return Mw;case 35674:return Ew;case 35675:return Tw;case 35676:return bw;case 5124:case 35670:return ww;case 35667:case 35671:return Aw;case 35668:case 35672:return Rw;case 35669:case 35673:return Cw;case 5125:return Pw;case 36294:return Nw;case 36295:return Lw;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Ow}}function Bw(s,e){s.uniform1fv(this.addr,e)}function zw(s,e){const t=zo(e,this.size,2);s.uniform2fv(this.addr,t)}function Vw(s,e){const t=zo(e,this.size,3);s.uniform3fv(this.addr,t)}function Hw(s,e){const t=zo(e,this.size,4);s.uniform4fv(this.addr,t)}function Gw(s,e){const t=zo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jw(s,e){const t=zo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ww(s,e){const t=zo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Xw(s,e){s.uniform1iv(this.addr,e)}function Yw(s,e){s.uniform2iv(this.addr,e)}function Kw(s,e){s.uniform3iv(this.addr,e)}function qw(s,e){s.uniform4iv(this.addr,e)}function $w(s,e){s.uniform1uiv(this.addr,e)}function Zw(s,e){s.uniform2uiv(this.addr,e)}function Jw(s,e){s.uniform3uiv(this.addr,e)}function Qw(s,e){s.uniform4uiv(this.addr,e)}function e1(s,e,t){const i=this.cache,o=e.length,a=Kc(t,o);mn(i,a)||(s.uniform1iv(this.addr,a),gn(i,a));let c;this.type===s.SAMPLER_2D_SHADOW?c=fh:c=D0;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,a[d])}function t1(s,e,t){const i=this.cache,o=e.length,a=Kc(t,o);mn(i,a)||(s.uniform1iv(this.addr,a),gn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||F0,a[c])}function n1(s,e,t){const i=this.cache,o=e.length,a=Kc(t,o);mn(i,a)||(s.uniform1iv(this.addr,a),gn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||O0,a[c])}function i1(s,e,t){const i=this.cache,o=e.length,a=Kc(t,o);mn(i,a)||(s.uniform1iv(this.addr,a),gn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||U0,a[c])}function r1(s){switch(s){case 5126:return Bw;case 35664:return zw;case 35665:return Vw;case 35666:return Hw;case 35674:return Gw;case 35675:return jw;case 35676:return Ww;case 5124:case 35670:return Xw;case 35667:case 35671:return Yw;case 35668:case 35672:return Kw;case 35669:case 35673:return qw;case 5125:return $w;case 36294:return Zw;case 36295:return Jw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}class s1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kw(t.type)}}class o1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r1(t.type)}}class a1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const d=o[a];d.setValue(e,t[d.id],i)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function w_(s,e){s.seq.push(e),s.map[e.id]=e}function l1(s,e,t){const i=s.name,o=i.length;for(ff.lastIndex=0;;){const a=ff.exec(i),c=ff.lastIndex;let d=a[1];const f=a[2]==="]",h=a[3];if(f&&(d=d|0),h===void 0||h==="["&&c+2===o){w_(t,h===void 0?new s1(d,s,e):new o1(d,s,e));break}else{let g=t.map[d];g===void 0&&(g=new a1(d),w_(t,g)),t=g}}}class Ic{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const d=e.getActiveUniform(t,c),f=e.getUniformLocation(t,d.name);l1(d,f,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const d=t[a],f=i[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function A_(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const c1=37297;let u1=0;function d1(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const d=c+1;i.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return i.join(`
`)}const R_=new ut;function f1(s){Tt._getMatrix(R_,Tt.workingColorSpace,s);const e=`mat3( ${R_.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(s)){case kc:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function C_(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+d1(s.getShaderSource(e),d)}else return a}function h1(s,e){const t=f1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const p1={[J_]:"Linear",[Q_]:"Reinhard",[e0]:"Cineon",[vh]:"ACESFilmic",[n0]:"AgX",[i0]:"Neutral",[t0]:"Custom"};function m1(s,e){const t=p1[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bc=new X;function g1(){Tt.getLuminanceCoefficients(bc);const s=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function v1(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function x1(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),c=a.name;let d=1;a.type===s.FLOAT_MAT2&&(d=2),a.type===s.FLOAT_MAT3&&(d=3),a.type===s.FLOAT_MAT4&&(d=4),t[c]={type:a.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function Oa(s){return s!==""}function P_(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(s){return s.replace(y1,M1)}const S1=new Map;function M1(s,e){let t=mt[e];if(t===void 0){const i=S1.get(e);if(i!==void 0)t=mt[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hh(t)}const E1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(s){return s.replace(E1,T1)}function T1(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function I_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const b1={[Ac]:"SHADOWMAP_TYPE_PCF",[Ua]:"SHADOWMAP_TYPE_VSM"};function w1(s){return b1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const A1={[Ns]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[Gc]:"ENVMAP_TYPE_CUBE_UV"};function R1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":A1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const C1={[Ro]:"ENVMAP_MODE_REFRACTION"};function P1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":C1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const N1={[Z_]:"ENVMAP_BLENDING_MULTIPLY",[yS]:"ENVMAP_BLENDING_MIX",[SS]:"ENVMAP_BLENDING_ADD"};function L1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":N1[s.combine]||"ENVMAP_BLENDING_NONE"}function I1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function D1(s,e,t,i){const o=s.getContext(),a=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=w1(t),h=R1(t),m=P1(t),g=L1(t),_=I1(t),y=_1(t),M=v1(a),w=o.createProgram();let x,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Oa).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Oa).join(`
`),S.length>0&&(S+=`
`)):(x=[I_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),S=[I_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?m1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,h1("linearToOutputTexel",t.outputColorSpace),g1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),c=hh(c),c=P_(c,t),c=N_(c,t),d=hh(d),d=P_(d,t),d=N_(d,t),c=L_(c),d=L_(d),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=R+x+c,P=R+S+d,k=A_(o,o.VERTEX_SHADER,N),L=A_(o,o.FRAGMENT_SHADER,P);o.attachShader(w,k),o.attachShader(w,L),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(F){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(w)||"",ce=o.getShaderInfoLog(k)||"",de=o.getShaderInfoLog(L)||"",j=Z.trim(),ie=ce.trim(),K=de.trim();let q=!0,le=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,k,L);else{const ae=C_(o,k,"vertex"),U=C_(o,L,"fragment");nt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+j+`
`+ae+`
`+U)}else j!==""?$e("WebGLProgram: Program Info Log:",j):(ie===""||K==="")&&(le=!1);le&&(F.diagnostics={runnable:q,programLog:j,vertexShader:{log:ie,prefix:x},fragmentShader:{log:K,prefix:S}})}o.deleteShader(k),o.deleteShader(L),b=new Ic(o,w),D=x1(o,w)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(w,c1)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=L,this}let U1=0;class F1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new O1(e),t.set(e,i)),i}}class O1{constructor(e){this.id=U1++,this.code=e,this.usedTimes=0}}function k1(s){return s===Ls||s===Fc||s===Oc}function B1(s,e,t,i,o,a){const c=new g0,d=new F1,f=new Set,h=[],m=new Map,g=i.logarithmicDepthBuffer;let _=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return f.add(b),b===0?"uv":`uv${b}`}function w(b,D,Y,F,Z,ce){const de=F.fog,j=Z.geometry,ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,K=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,q=e.get(b.envMap||ie,K),le=q&&q.mapping===Gc?q.image.height:null,ae=y[b.type];b.precision!==null&&(_=i.getMaxPrecision(b.precision),_!==b.precision&&$e("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const U=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ee=U!==void 0?U.length:0;let Fe=0;j.morphAttributes.position!==void 0&&(Fe=1),j.morphAttributes.normal!==void 0&&(Fe=2),j.morphAttributes.color!==void 0&&(Fe=3);let He,Ie,oe,ye;if(ae){const ot=ji[ae];He=ot.vertexShader,Ie=ot.fragmentShader}else He=b.vertexShader,Ie=b.fragmentShader,d.update(b),oe=d.getVertexShaderID(b),ye=d.getFragmentShaderID(b);const me=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Je=Z.isInstancedMesh===!0,Qe=Z.isBatchedMesh===!0,Vt=!!b.map,ft=!!b.matcap,At=!!q,Ot=!!b.aoMap,ht=!!b.lightMap,Jt=!!b.bumpMap,Ht=!!b.normalMap,Mn=!!b.displacementMap,V=!!b.emissiveMap,Gt=!!b.metalnessMap,pt=!!b.roughnessMap,Nt=b.anisotropy>0,Ne=b.clearcoat>0,Xt=b.dispersion>0,C=b.iridescence>0,E=b.sheen>0,$=b.transmission>0,he=Nt&&!!b.anisotropyMap,ge=Ne&&!!b.clearcoatMap,Me=Ne&&!!b.clearcoatNormalMap,Pe=Ne&&!!b.clearcoatRoughnessMap,ue=C&&!!b.iridescenceMap,pe=C&&!!b.iridescenceThicknessMap,Ue=E&&!!b.sheenColorMap,ke=E&&!!b.sheenRoughnessMap,we=!!b.specularMap,Ee=!!b.specularColorMap,it=!!b.specularIntensityMap,st=$&&!!b.transmissionMap,gt=$&&!!b.thicknessMap,z=!!b.gradientMap,be=!!b.alphaMap,fe=b.alphaTest>0,Oe=!!b.alphaHash,Re=!!b.extensions;let _e=Ki;b.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=s.toneMapping);const We={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:Ie,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Qe,batchingColor:Qe&&Z._colorsTexture!==null,instancing:Je,instancingColor:Je&&Z.instanceColor!==null,instancingMorph:Je&&Z.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Vt,matcap:ft,envMap:At,envMapMode:At&&q.mapping,envMapCubeUVHeight:le,aoMap:Ot,lightMap:ht,bumpMap:Jt,normalMap:Ht,displacementMap:Mn,emissiveMap:V,normalMapObjectSpace:Ht&&b.normalMapType===wS,normalMapTangentSpace:Ht&&b.normalMapType===oh,packedNormalMap:Ht&&b.normalMapType===oh&&k1(b.normalMap.format),metalnessMap:Gt,roughnessMap:pt,anisotropy:Nt,anisotropyMap:he,clearcoat:Ne,clearcoatMap:ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:Xt,iridescence:C,iridescenceMap:ue,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:Ue,sheenRoughnessMap:ke,specularMap:we,specularColorMap:Ee,specularIntensityMap:it,transmission:$,transmissionMap:st,thicknessMap:gt,gradientMap:z,opaque:b.transparent===!1&&b.blending===To&&b.alphaToCoverage===!1,alphaMap:be,alphaTest:fe,alphaHash:Oe,combine:b.combine,mapUv:Vt&&M(b.map.channel),aoMapUv:Ot&&M(b.aoMap.channel),lightMapUv:ht&&M(b.lightMap.channel),bumpMapUv:Jt&&M(b.bumpMap.channel),normalMapUv:Ht&&M(b.normalMap.channel),displacementMapUv:Mn&&M(b.displacementMap.channel),emissiveMapUv:V&&M(b.emissiveMap.channel),metalnessMapUv:Gt&&M(b.metalnessMap.channel),roughnessMapUv:pt&&M(b.roughnessMap.channel),anisotropyMapUv:he&&M(b.anisotropyMap.channel),clearcoatMapUv:ge&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Me&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&M(b.sheenRoughnessMap.channel),specularMapUv:we&&M(b.specularMap.channel),specularColorMapUv:Ee&&M(b.specularColorMap.channel),specularIntensityMapUv:it&&M(b.specularIntensityMap.channel),transmissionMapUv:st&&M(b.transmissionMap.channel),thicknessMapUv:gt&&M(b.thicknessMap.channel),alphaMapUv:be&&M(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ht||Nt),vertexNormals:!!j.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!j.attributes.uv&&(Vt||be),fog:!!de,useFog:b.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||j.attributes.normal===void 0&&Ht===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:De,skinning:Z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Fe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Vt&&b.map.isVideoTexture===!0&&Tt.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:V&&b.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wi,flipSided:b.side===qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Re&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&b.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=f.has(1),We.vertexUv2s=f.has(2),We.vertexUv3s=f.has(3),f.clear(),We}function x(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Y in b.defines)D.push(Y),D.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(S(D,b),R(D,b),D.push(s.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function S(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function R(b,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),D.packedNormalMap&&c.enable(22),D.vertexNormals&&c.enable(23),b.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),D.numLightProbeGrids>0&&c.enable(22),b.push(c.mask)}function N(b){const D=y[b.type];let Y;if(D){const F=ji[D];Y=IM.clone(F.uniforms)}else Y=b.uniforms;return Y}function P(b,D){let Y=m.get(D);return Y!==void 0?++Y.usedTimes:(Y=new D1(s,D,b,o),h.push(Y),m.set(D,Y)),Y}function k(b){if(--b.usedTimes===0){const D=h.indexOf(b);h[D]=h[h.length-1],h.pop(),m.delete(b.cacheKey),b.destroy()}}function L(b){d.remove(b)}function O(){d.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:N,acquireProgram:P,releaseProgram:k,releaseShaderCache:L,programs:h,dispose:O}}function z1(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function i(c){s.delete(c)}function o(c,d,f){s.get(c)[d]=f}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function V1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function D_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function U_(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(_){let y=0;return _.isInstancedMesh&&(y+=2),_.isSkinnedMesh&&(y+=1),y}function d(_,y,M,w,x,S){let R=s[e];return R===void 0?(R={id:_.id,object:_,geometry:y,material:M,materialVariant:c(_),groupOrder:w,renderOrder:_.renderOrder,z:x,group:S},s[e]=R):(R.id=_.id,R.object=_,R.geometry=y,R.material=M,R.materialVariant=c(_),R.groupOrder=w,R.renderOrder=_.renderOrder,R.z=x,R.group=S),e++,R}function f(_,y,M,w,x,S){const R=d(_,y,M,w,x,S);M.transmission>0?i.push(R):M.transparent===!0?o.push(R):t.push(R)}function h(_,y,M,w,x,S){const R=d(_,y,M,w,x,S);M.transmission>0?i.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function m(_,y){t.length>1&&t.sort(_||V1),i.length>1&&i.sort(y||D_),o.length>1&&o.sort(y||D_)}function g(){for(let _=e,y=s.length;_<y;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:f,unshift:h,finish:g,sort:m}}function H1(){let s=new WeakMap;function e(i,o){const a=s.get(i);let c;return a===void 0?(c=new U_,s.set(i,[c])):o>=a.length?(c=new U_,a.push(c)):c=a[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function G1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new dt};break;case"SpotLight":t={position:new X,direction:new X,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function j1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let W1=0;function X1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Y1(s){const e=new G1,t=j1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new X);const o=new X,a=new xt,c=new xt;function d(h){let m=0,g=0,_=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let y=0,M=0,w=0,x=0,S=0,R=0,N=0,P=0,k=0,L=0,O=0;h.sort(X1);for(let D=0,Y=h.length;D<Y;D++){const F=h[D],Z=F.color,ce=F.intensity,de=F.distance;let j=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ls?j=F.shadow.map.texture:j=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)m+=Z.r*ce,g+=Z.g*ce,_+=Z.b*ce;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(F.sh.coefficients[ie],ce);O++}else if(F.isDirectionalLight){const ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,q=t.get(F);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,i.directionalShadow[y]=q,i.directionalShadowMap[y]=j,i.directionalShadowMatrix[y]=F.shadow.matrix,R++}i.directional[y]=ie,y++}else if(F.isSpotLight){const ie=e.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy(Z).multiplyScalar(ce),ie.distance=de,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,i.spot[w]=ie;const K=F.shadow;if(F.map&&(i.spotLightMap[k]=F.map,k++,K.updateMatrices(F),F.castShadow&&L++),i.spotLightMatrix[w]=K.matrix,F.castShadow){const q=t.get(F);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,i.spotShadow[w]=q,i.spotShadowMap[w]=j,P++}w++}else if(F.isRectAreaLight){const ie=e.get(F);ie.color.copy(Z).multiplyScalar(ce),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),i.rectArea[x]=ie,x++}else if(F.isPointLight){const ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const K=F.shadow,q=t.get(F);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,i.pointShadow[M]=q,i.pointShadowMap[M]=j,i.pointShadowMatrix[M]=F.shadow.matrix,N++}i.point[M]=ie,M++}else if(F.isHemisphereLight){const ie=e.get(F);ie.skyColor.copy(F.color).multiplyScalar(ce),ie.groundColor.copy(F.groundColor).multiplyScalar(ce),i.hemi[S]=ie,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const b=i.hash;(b.directionalLength!==y||b.pointLength!==M||b.spotLength!==w||b.rectAreaLength!==x||b.hemiLength!==S||b.numDirectionalShadows!==R||b.numPointShadows!==N||b.numSpotShadows!==P||b.numSpotMaps!==k||b.numLightProbes!==O)&&(i.directional.length=y,i.spot.length=w,i.rectArea.length=x,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=P+k-L,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=O,b.directionalLength=y,b.pointLength=M,b.spotLength=w,b.rectAreaLength=x,b.hemiLength=S,b.numDirectionalShadows=R,b.numPointShadows=N,b.numSpotShadows=P,b.numSpotMaps=k,b.numLightProbes=O,i.version=W1++)}function f(h,m){let g=0,_=0,y=0,M=0,w=0;const x=m.matrixWorldInverse;for(let S=0,R=h.length;S<R;S++){const N=h[S];if(N.isDirectionalLight){const P=i.directional[g];P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),g++}else if(N.isSpotLight){const P=i.spot[y];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),y++}else if(N.isRectAreaLight){const P=i.rectArea[M];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(x),c.identity(),a.copy(N.matrixWorld),a.premultiply(x),c.extractRotation(a),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(N.isPointLight){const P=i.point[_];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(x),_++}else if(N.isHemisphereLight){const P=i.hemi[w];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(x),w++}}}return{setup:d,setupView:f,state:i}}function F_(s){const e=new Y1(s),t=[],i=[],o=[];function a(_){g.camera=_,t.length=0,i.length=0,o.length=0}function c(_){t.push(_)}function d(_){i.push(_)}function f(_){o.push(_)}function h(){e.setup(t)}function m(_){e.setupView(t,_)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d,pushLightProbeGrid:f}}function K1(s){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let d;return c===void 0?(d=new F_(s),e.set(o,[d])):a>=c.length?(d=new F_(s),c.push(d)):d=c[a],d}function i(){e=new WeakMap}return{get:t,dispose:i}}const q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`,Z1=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],J1=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],O_=new xt,Ia=new X,hf=new X;function Q1(s,e,t){let i=new Ih;const o=new at,a=new at,c=new zt,d=new OM,f=new kM,h={},m=t.maxTextureSize,g={[Tr]:qn,[qn]:Tr,[Wi]:Wi},_=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:q1,fragmentShader:$1}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new _i;M.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ri(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let S=this.type;this.render=function(L,O,b){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===tS&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ac);const D=s.getRenderTarget(),Y=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Mr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ce=S!==this.type;ce&&O.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(j=>j.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,j=L.length;de<j;de++){const ie=L[de],K=ie.shadow;if(K===void 0){$e("WebGLShadowMap:",ie,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const q=K.getFrameExtents();o.multiply(q),a.copy(K.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/q.x),o.x=a.x*q.x,K.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/q.y),o.y=a.y*q.y,K.mapSize.y=a.y));const le=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=le,K.map===null||ce===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ua){if(ie.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new qi(o.x,o.y,{format:Ls,type:br,minFilter:pn,magFilter:pn,generateMipmaps:!1}),K.map.texture.name=ie.name+".shadowMap",K.map.depthTexture=new No(o.x,o.y,pi),K.map.depthTexture.name=ie.name+".shadowMapDepth",K.map.depthTexture.format=wr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=hn,K.map.depthTexture.magFilter=hn}else ie.isPointLight?(K.map=new I0(o.x),K.map.depthTexture=new NM(o.x,Zi)):(K.map=new qi(o.x,o.y),K.map.depthTexture=new No(o.x,o.y,Zi)),K.map.depthTexture.name=ie.name+".shadowMap",K.map.depthTexture.format=wr,this.type===Ac?(K.map.depthTexture.compareFunction=le?Ah:wh,K.map.depthTexture.minFilter=pn,K.map.depthTexture.magFilter=pn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=hn,K.map.depthTexture.magFilter=hn);K.camera.updateProjectionMatrix()}const ae=K.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ae;U++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,U),s.clear();else{U===0&&(s.setRenderTarget(K.map),s.clear());const ee=K.getViewport(U);c.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),Z.viewport(c)}if(ie.isPointLight){const ee=K.camera,Fe=K.matrix,He=ie.distance||ee.far;He!==ee.far&&(ee.far=He,ee.updateProjectionMatrix()),Ia.setFromMatrixPosition(ie.matrixWorld),ee.position.copy(Ia),hf.copy(ee.position),hf.add(Z1[U]),ee.up.copy(J1[U]),ee.lookAt(hf),ee.updateMatrixWorld(),Fe.makeTranslation(-Ia.x,-Ia.y,-Ia.z),O_.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),K._frustum.setFromProjectionMatrix(O_,ee.coordinateSystem,ee.reversedDepth)}else K.updateMatrices(ie);i=K.getFrustum(),P(O,b,K.camera,ie,this.type)}K.isPointLightShadow!==!0&&this.type===Ua&&R(K,b),K.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(D,Y,F)};function R(L,O){const b=e.update(w);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new qi(o.x,o.y,{format:Ls,type:br})),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(O,null,b,_,w,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(O,null,b,y,w,null)}function N(L,O,b,D){let Y=null;const F=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)Y=F;else if(Y=b.isPointLight===!0?f:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=Y.uuid,ce=O.uuid;let de=h[Z];de===void 0&&(de={},h[Z]=de);let j=de[ce];j===void 0&&(j=Y.clone(),de[ce]=j,O.addEventListener("dispose",k)),Y=j}if(Y.visible=O.visible,Y.wireframe=O.wireframe,D===Ua?Y.side=O.shadowSide!==null?O.shadowSide:O.side:Y.side=O.shadowSide!==null?O.shadowSide:g[O.side],Y.alphaMap=O.alphaMap,Y.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,Y.map=O.map,Y.clipShadows=O.clipShadows,Y.clippingPlanes=O.clippingPlanes,Y.clipIntersection=O.clipIntersection,Y.displacementMap=O.displacementMap,Y.displacementScale=O.displacementScale,Y.displacementBias=O.displacementBias,Y.wireframeLinewidth=O.wireframeLinewidth,Y.linewidth=O.linewidth,b.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Z=s.properties.get(Y);Z.light=b}return Y}function P(L,O,b,D,Y){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===Ua)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const ce=e.update(L),de=L.material;if(Array.isArray(de)){const j=ce.groups;for(let ie=0,K=j.length;ie<K;ie++){const q=j[ie],le=de[q.materialIndex];if(le&&le.visible){const ae=N(L,le,D,Y);L.onBeforeShadow(s,L,O,b,ce,ae,q),s.renderBufferDirect(b,null,ce,ae,L,q),L.onAfterShadow(s,L,O,b,ce,ae,q)}}}else if(de.visible){const j=N(L,de,D,Y);L.onBeforeShadow(s,L,O,b,ce,j,null),s.renderBufferDirect(b,null,ce,j,L,null),L.onAfterShadow(s,L,O,b,ce,j,null)}}const Z=L.children;for(let ce=0,de=Z.length;ce<de;ce++)P(Z[ce],O,b,D,Y)}function k(L){L.target.removeEventListener("dispose",k);for(const b in h){const D=h[b],Y=L.target.uuid;Y in D&&(D[Y].dispose(),delete D[Y])}}}function eA(s,e){function t(){let z=!1;const be=new zt;let fe=null;const Oe=new zt(0,0,0,0);return{setMask:function(Re){fe!==Re&&!z&&(s.colorMask(Re,Re,Re,Re),fe=Re)},setLocked:function(Re){z=Re},setClear:function(Re,_e,We,ot,Bt){Bt===!0&&(Re*=ot,_e*=ot,We*=ot),be.set(Re,_e,We,ot),Oe.equals(be)===!1&&(s.clearColor(Re,_e,We,ot),Oe.copy(be))},reset:function(){z=!1,fe=null,Oe.set(-1,0,0,0)}}}function i(){let z=!1,be=!1,fe=null,Oe=null,Re=null;return{setReversed:function(_e){if(be!==_e){const We=e.get("EXT_clip_control");_e?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),be=_e;const ot=Re;Re=null,this.setClear(ot)}},getReversed:function(){return be},setTest:function(_e){_e?me(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(_e){fe!==_e&&!z&&(s.depthMask(_e),fe=_e)},setFunc:function(_e){if(be&&(_e=OS[_e]),Oe!==_e){switch(_e){case Mf:s.depthFunc(s.NEVER);break;case Ef:s.depthFunc(s.ALWAYS);break;case Tf:s.depthFunc(s.LESS);break;case Ao:s.depthFunc(s.LEQUAL);break;case bf:s.depthFunc(s.EQUAL);break;case wf:s.depthFunc(s.GEQUAL);break;case Af:s.depthFunc(s.GREATER);break;case Rf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=_e}},setLocked:function(_e){z=_e},setClear:function(_e){Re!==_e&&(Re=_e,be&&(_e=1-_e),s.clearDepth(_e))},reset:function(){z=!1,fe=null,Oe=null,Re=null,be=!1}}}function o(){let z=!1,be=null,fe=null,Oe=null,Re=null,_e=null,We=null,ot=null,Bt=null;return{setTest:function(Rt){z||(Rt?me(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(Rt){be!==Rt&&!z&&(s.stencilMask(Rt),be=Rt)},setFunc:function(Rt,In,si){(fe!==Rt||Oe!==In||Re!==si)&&(s.stencilFunc(Rt,In,si),fe=Rt,Oe=In,Re=si)},setOp:function(Rt,In,si){(_e!==Rt||We!==In||ot!==si)&&(s.stencilOp(Rt,In,si),_e=Rt,We=In,ot=si)},setLocked:function(Rt){z=Rt},setClear:function(Rt){Bt!==Rt&&(s.clearStencil(Rt),Bt=Rt)},reset:function(){z=!1,be=null,fe=null,Oe=null,Re=null,_e=null,We=null,ot=null,Bt=null}}}const a=new t,c=new i,d=new o,f=new WeakMap,h=new WeakMap;let m={},g={},_={},y=new WeakMap,M=[],w=null,x=!1,S=null,R=null,N=null,P=null,k=null,L=null,O=null,b=new dt(0,0,0),D=0,Y=!1,F=null,Z=null,ce=null,de=null,j=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,q=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(le)[1]),K=q>=1):le.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),K=q>=2);let ae=null,U={};const ee=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),He=new zt().fromArray(ee),Ie=new zt().fromArray(Fe);function oe(z,be,fe,Oe){const Re=new Uint8Array(4),_e=s.createTexture();s.bindTexture(z,_e),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<fe;We++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(be+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return _e}const ye={};ye[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),d.setClear(0),me(s.DEPTH_TEST),c.setFunc(Ao),Jt(!1),Ht(xg),me(s.CULL_FACE),Ot(Mr);function me(z){m[z]!==!0&&(s.enable(z),m[z]=!0)}function De(z){m[z]!==!1&&(s.disable(z),m[z]=!1)}function Je(z,be){return _[z]!==be?(s.bindFramebuffer(z,be),_[z]=be,z===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=be),z===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Qe(z,be){let fe=M,Oe=!1;if(z){fe=y.get(be),fe===void 0&&(fe=[],y.set(be,fe));const Re=z.textures;if(fe.length!==Re.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,We=Re.length;_e<We;_e++)fe[_e]=s.COLOR_ATTACHMENT0+_e;fe.length=Re.length,Oe=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(fe)}function Vt(z){return w!==z?(s.useProgram(z),w=z,!0):!1}const ft={[ws]:s.FUNC_ADD,[iS]:s.FUNC_SUBTRACT,[rS]:s.FUNC_REVERSE_SUBTRACT};ft[sS]=s.MIN,ft[oS]=s.MAX;const At={[aS]:s.ZERO,[lS]:s.ONE,[cS]:s.SRC_COLOR,[yf]:s.SRC_ALPHA,[mS]:s.SRC_ALPHA_SATURATE,[hS]:s.DST_COLOR,[dS]:s.DST_ALPHA,[uS]:s.ONE_MINUS_SRC_COLOR,[Sf]:s.ONE_MINUS_SRC_ALPHA,[pS]:s.ONE_MINUS_DST_COLOR,[fS]:s.ONE_MINUS_DST_ALPHA,[gS]:s.CONSTANT_COLOR,[_S]:s.ONE_MINUS_CONSTANT_COLOR,[vS]:s.CONSTANT_ALPHA,[xS]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(z,be,fe,Oe,Re,_e,We,ot,Bt,Rt){if(z===Mr){x===!0&&(De(s.BLEND),x=!1);return}if(x===!1&&(me(s.BLEND),x=!0),z!==nS){if(z!==S||Rt!==Y){if((R!==ws||k!==ws)&&(s.blendEquation(s.FUNC_ADD),R=ws,k=ws),Rt)switch(z){case To:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yg:s.blendFunc(s.ONE,s.ONE);break;case Sg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:nt("WebGLState: Invalid blending: ",z);break}else switch(z){case To:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sg:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mg:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",z);break}N=null,P=null,L=null,O=null,b.set(0,0,0),D=0,S=z,Y=Rt}return}Re=Re||be,_e=_e||fe,We=We||Oe,(be!==R||Re!==k)&&(s.blendEquationSeparate(ft[be],ft[Re]),R=be,k=Re),(fe!==N||Oe!==P||_e!==L||We!==O)&&(s.blendFuncSeparate(At[fe],At[Oe],At[_e],At[We]),N=fe,P=Oe,L=_e,O=We),(ot.equals(b)===!1||Bt!==D)&&(s.blendColor(ot.r,ot.g,ot.b,Bt),b.copy(ot),D=Bt),S=z,Y=!1}function ht(z,be){z.side===Wi?De(s.CULL_FACE):me(s.CULL_FACE);let fe=z.side===qn;be&&(fe=!fe),Jt(fe),z.blending===To&&z.transparent===!1?Ot(Mr):Ot(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),a.setMask(z.colorWrite);const Oe=z.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),V(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(z){F!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),F=z)}function Ht(z){z!==Qy?(me(s.CULL_FACE),z!==Z&&(z===xg?s.cullFace(s.BACK):z===eS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),Z=z}function Mn(z){z!==ce&&(K&&s.lineWidth(z),ce=z)}function V(z,be,fe){z?(me(s.POLYGON_OFFSET_FILL),(de!==be||j!==fe)&&(de=be,j=fe,c.getReversed()&&(be=-be),s.polygonOffset(be,fe))):De(s.POLYGON_OFFSET_FILL)}function Gt(z){z?me(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function pt(z){z===void 0&&(z=s.TEXTURE0+ie-1),ae!==z&&(s.activeTexture(z),ae=z)}function Nt(z,be,fe){fe===void 0&&(ae===null?fe=s.TEXTURE0+ie-1:fe=ae);let Oe=U[fe];Oe===void 0&&(Oe={type:void 0,texture:void 0},U[fe]=Oe),(Oe.type!==z||Oe.texture!==be)&&(ae!==fe&&(s.activeTexture(fe),ae=fe),s.bindTexture(z,be||ye[z]),Oe.type=z,Oe.texture=be)}function Ne(){const z=U[ae];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Xt(){try{s.compressedTexImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function E(){try{s.texSubImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function $(){try{s.texSubImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function Me(){try{s.texStorage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function Pe(){try{s.texStorage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function ue(){try{s.texImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function pe(){try{s.texImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function Ue(z){return g[z]!==void 0?g[z]:s.getParameter(z)}function ke(z,be){g[z]!==be&&(s.pixelStorei(z,be),g[z]=be)}function we(z){He.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),He.copy(z))}function Ee(z){Ie.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Ie.copy(z))}function it(z,be){let fe=h.get(be);fe===void 0&&(fe=new WeakMap,h.set(be,fe));let Oe=fe.get(z);Oe===void 0&&(Oe=s.getUniformBlockIndex(be,z.name),fe.set(z,Oe))}function st(z,be){const Oe=h.get(be).get(z);f.get(be)!==Oe&&(s.uniformBlockBinding(be,Oe,z.__bindingPointIndex),f.set(be,Oe))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),m={},g={},ae=null,U={},_={},y=new WeakMap,M=[],w=null,x=!1,S=null,R=null,N=null,P=null,k=null,L=null,O=null,b=new dt(0,0,0),D=0,Y=!1,F=null,Z=null,ce=null,de=null,j=null,He.set(0,0,s.canvas.width,s.canvas.height),Ie.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),d.reset()}return{buffers:{color:a,depth:c,stencil:d},enable:me,disable:De,bindFramebuffer:Je,drawBuffers:Qe,useProgram:Vt,setBlending:Ot,setMaterial:ht,setFlipSided:Jt,setCullFace:Ht,setLineWidth:Mn,setPolygonOffset:V,setScissorTest:Gt,activeTexture:pt,bindTexture:Nt,unbindTexture:Ne,compressedTexImage2D:Xt,compressedTexImage3D:C,texImage2D:ue,texImage3D:pe,pixelStorei:ke,getParameter:Ue,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:we,viewport:Ee,reset:gt}}function tA(s,e,t,i,o,a,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new at,m=new WeakMap,g=new Set;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(C,E){return M?new OffscreenCanvas(C,E):Xa("canvas")}function x(C,E,$){let he=1;const ge=Xt(C);if((ge.width>$||ge.height>$)&&(he=$/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Me=Math.floor(he*ge.width),Pe=Math.floor(he*ge.height);_===void 0&&(_=w(Me,Pe));const ue=E?w(Me,Pe):_;return ue.width=Me,ue.height=Pe,ue.getContext("2d").drawImage(C,0,0,Me,Pe),$e("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Me+"x"+Pe+")."),ue}else return"data"in C&&$e("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),C;return C}function S(C){return C.generateMipmaps}function R(C){s.generateMipmap(C)}function N(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(C,E,$,he,ge,Me=!1){if(C!==null){if(s[C]!==void 0)return s[C];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Pe;he&&(Pe=e.get("EXT_texture_norm16"),Pe||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=E;if(E===s.RED&&($===s.FLOAT&&(ue=s.R32F),$===s.HALF_FLOAT&&(ue=s.R16F),$===s.UNSIGNED_BYTE&&(ue=s.R8),$===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.R16_EXT),$===s.SHORT&&Pe&&(ue=Pe.R16_SNORM_EXT)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.R8UI),$===s.UNSIGNED_SHORT&&(ue=s.R16UI),$===s.UNSIGNED_INT&&(ue=s.R32UI),$===s.BYTE&&(ue=s.R8I),$===s.SHORT&&(ue=s.R16I),$===s.INT&&(ue=s.R32I)),E===s.RG&&($===s.FLOAT&&(ue=s.RG32F),$===s.HALF_FLOAT&&(ue=s.RG16F),$===s.UNSIGNED_BYTE&&(ue=s.RG8),$===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RG16_EXT),$===s.SHORT&&Pe&&(ue=Pe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RG8UI),$===s.UNSIGNED_SHORT&&(ue=s.RG16UI),$===s.UNSIGNED_INT&&(ue=s.RG32UI),$===s.BYTE&&(ue=s.RG8I),$===s.SHORT&&(ue=s.RG16I),$===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),$===s.UNSIGNED_INT&&(ue=s.RGB32UI),$===s.BYTE&&(ue=s.RGB8I),$===s.SHORT&&(ue=s.RGB16I),$===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),$===s.UNSIGNED_INT&&(ue=s.RGBA32UI),$===s.BYTE&&(ue=s.RGBA8I),$===s.SHORT&&(ue=s.RGBA16I),$===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&($===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGB16_EXT),$===s.SHORT&&Pe&&(ue=Pe.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),E===s.RGBA){const pe=Me?kc:Tt.getTransfer(ge);$===s.FLOAT&&(ue=s.RGBA32F),$===s.HALF_FLOAT&&(ue=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ue=pe===Dt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGBA16_EXT),$===s.SHORT&&Pe&&(ue=Pe.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function k(C,E){let $;return C?E===null||E===Zi||E===Ha?$=s.DEPTH24_STENCIL8:E===pi?$=s.DEPTH32F_STENCIL8:E===Va&&($=s.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===Ha?$=s.DEPTH_COMPONENT24:E===pi?$=s.DEPTH_COMPONENT32F:E===Va&&($=s.DEPTH_COMPONENT16),$}function L(C,E){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function O(C){const E=C.target;E.removeEventListener("dispose",O),D(E),E.isVideoTexture&&m.delete(E),E.isHTMLTexture&&g.delete(E)}function b(C){const E=C.target;E.removeEventListener("dispose",b),F(E)}function D(C){const E=i.get(C);if(E.__webglInit===void 0)return;const $=C.source,he=y.get($);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&Y(C),Object.keys(he).length===0&&y.delete($)}i.remove(C)}function Y(C){const E=i.get(C);s.deleteTexture(E.__webglTexture);const $=C.source,he=y.get($);delete he[E.__cacheKey],c.memory.textures--}function F(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)s.deleteFramebuffer(E.__webglFramebuffer[he]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=C.textures;for(let he=0,ge=$.length;he<ge;he++){const Me=i.get($[he]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),c.memory.textures--),i.remove($[he])}i.remove(C)}let Z=0;function ce(){Z=0}function de(){return Z}function j(C){Z=C}function ie(){const C=Z;return C>=o.maxTextures&&$e("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),Z+=1,C}function K(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function q(C,E){const $=i.get(C);if(C.isVideoTexture&&Nt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&$.__version!==C.version){const he=C.image;if(he===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{De($,C,E);return}}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function le(C,E){const $=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){De($,C,E);return}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function ae(C,E){const $=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){De($,C,E);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function U(C,E){const $=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&$.__version!==C.version){Je($,C,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}const ee={[Co]:s.REPEAT,[Xi]:s.CLAMP_TO_EDGE,[Uc]:s.MIRRORED_REPEAT},Fe={[hn]:s.NEAREST,[s0]:s.NEAREST_MIPMAP_NEAREST,[Fa]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[Rc]:s.LINEAR_MIPMAP_NEAREST,[yr]:s.LINEAR_MIPMAP_LINEAR},He={[AS]:s.NEVER,[LS]:s.ALWAYS,[RS]:s.LESS,[wh]:s.LEQUAL,[CS]:s.EQUAL,[Ah]:s.GEQUAL,[PS]:s.GREATER,[NS]:s.NOTEQUAL};function Ie(C,E){if(E.type===pi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pn||E.magFilter===Rc||E.magFilter===Fa||E.magFilter===yr||E.minFilter===pn||E.minFilter===Rc||E.minFilter===Fa||E.minFilter===yr)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ee[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ee[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ee[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Fe[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Fe[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hn||E.minFilter!==Fa&&E.minFilter!==yr||E.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function oe(C,E){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",O));const he=E.source;let ge=y.get(he);ge===void 0&&(ge={},y.set(he,ge));const Me=K(E);if(Me!==C.__cacheKey){ge[Me]===void 0&&(ge[Me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ge[Me].usedTimes++;const Pe=ge[C.__cacheKey];Pe!==void 0&&(ge[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&Y(E)),C.__cacheKey=Me,C.__webglTexture=ge[Me].texture}return $}function ye(C,E,$){return Math.floor(Math.floor(C/$)/E)}function me(C,E,$,he){const Me=C.updateRanges;if(Me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,$,he,E.data);else{Me.sort((ke,we)=>ke.start-we.start);let Pe=0;for(let ke=1;ke<Me.length;ke++){const we=Me[Pe],Ee=Me[ke],it=we.start+we.count,st=ye(Ee.start,E.width,4),gt=ye(we.start,E.width,4);Ee.start<=it+1&&st===gt&&ye(Ee.start+Ee.count-1,E.width,4)===st?we.count=Math.max(we.count,Ee.start+Ee.count-we.start):(++Pe,Me[Pe]=Ee)}Me.length=Pe+1;const ue=t.getParameter(s.UNPACK_ROW_LENGTH),pe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ue=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ke=0,we=Me.length;ke<we;ke++){const Ee=Me[ke],it=Math.floor(Ee.start/4),st=Math.ceil(Ee.count/4),gt=it%E.width,z=Math.floor(it/E.width),be=st,fe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),t.pixelStorei(s.UNPACK_SKIP_ROWS,z),t.texSubImage2D(s.TEXTURE_2D,0,gt,z,be,fe,$,he,E.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ue),t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function De(C,E,$){let he=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=s.TEXTURE_3D);const ge=oe(C,E),Me=E.source;t.bindTexture(he,C.__webglTexture,s.TEXTURE0+$);const Pe=i.get(Me);if(Me.version!==Pe.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const fe=Tt.getPrimaries(Tt.workingColorSpace),Oe=E.colorSpace===es?null:Tt.getPrimaries(E.colorSpace),Re=E.colorSpace===es||fe===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=x(E.image,!1,o.maxTextureSize);pe=Ne(E,pe);const Ue=a.convert(E.format,E.colorSpace),ke=a.convert(E.type);let we=P(E.internalFormat,Ue,ke,E.normalized,E.colorSpace,E.isVideoTexture);Ie(he,E);let Ee;const it=E.mipmaps,st=E.isVideoTexture!==!0,gt=Pe.__version===void 0||ge===!0,z=Me.dataReady,be=L(E,pe);if(E.isDepthTexture)we=k(E.format===Rs,E.type),gt&&(st?t.texStorage2D(s.TEXTURE_2D,1,we,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,we,pe.width,pe.height,0,Ue,ke,null));else if(E.isDataTexture)if(it.length>0){st&&gt&&t.texStorage2D(s.TEXTURE_2D,be,we,it[0].width,it[0].height);for(let fe=0,Oe=it.length;fe<Oe;fe++)Ee=it[fe],st?z&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Ue,ke,Ee.data):t.texImage2D(s.TEXTURE_2D,fe,we,Ee.width,Ee.height,0,Ue,ke,Ee.data);E.generateMipmaps=!1}else st?(gt&&t.texStorage2D(s.TEXTURE_2D,be,we,pe.width,pe.height),z&&me(E,pe,Ue,ke)):t.texImage2D(s.TEXTURE_2D,0,we,pe.width,pe.height,0,Ue,ke,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,we,it[0].width,it[0].height,pe.depth);for(let fe=0,Oe=it.length;fe<Oe;fe++)if(Ee=it[fe],E.format!==mi)if(Ue!==null)if(st){if(z)if(E.layerUpdates.size>0){const Re=p_(Ee.width,Ee.height,E.format,E.type);for(const _e of E.layerUpdates){const We=Ee.data.subarray(_e*Re/Ee.data.BYTES_PER_ELEMENT,(_e+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,_e,Ee.width,Ee.height,1,Ue,We)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,pe.depth,Ue,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,we,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,pe.depth,Ue,ke,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,we,Ee.width,Ee.height,pe.depth,0,Ue,ke,Ee.data)}else{st&&gt&&t.texStorage2D(s.TEXTURE_2D,be,we,it[0].width,it[0].height);for(let fe=0,Oe=it.length;fe<Oe;fe++)Ee=it[fe],E.format!==mi?Ue!==null?st?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Ue,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,we,Ee.width,Ee.height,0,Ee.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?z&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Ue,ke,Ee.data):t.texImage2D(s.TEXTURE_2D,fe,we,Ee.width,Ee.height,0,Ue,ke,Ee.data)}else if(E.isDataArrayTexture)if(st){if(gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,we,pe.width,pe.height,pe.depth),z)if(E.layerUpdates.size>0){const fe=p_(pe.width,pe.height,E.format,E.type);for(const Oe of E.layerUpdates){const Re=pe.data.subarray(Oe*fe/pe.data.BYTES_PER_ELEMENT,(Oe+1)*fe/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,pe.width,pe.height,1,Ue,ke,Re)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,ke,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,pe.width,pe.height,pe.depth,0,Ue,ke,pe.data);else if(E.isData3DTexture)st?(gt&&t.texStorage3D(s.TEXTURE_3D,be,we,pe.width,pe.height,pe.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,ke,pe.data)):t.texImage3D(s.TEXTURE_3D,0,we,pe.width,pe.height,pe.depth,0,Ue,ke,pe.data);else if(E.isFramebufferTexture){if(gt)if(st)t.texStorage2D(s.TEXTURE_2D,be,we,pe.width,pe.height);else{let fe=pe.width,Oe=pe.height;for(let Re=0;Re<be;Re++)t.texImage2D(s.TEXTURE_2D,Re,we,fe,Oe,0,Ue,ke,null),fe>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const fe=s.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),pe.parentNode!==fe){fe.appendChild(pe),g.add(E),fe.onpaint=ot=>{const Bt=ot.changedElements;for(const Rt of g)Bt.includes(Rt.image)&&(Rt.needsUpdate=!0)},fe.requestPaint();return}const Oe=0,Re=s.RGBA,_e=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Oe,Re,_e,We,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(st&&gt){const fe=Xt(it[0]);t.texStorage2D(s.TEXTURE_2D,be,we,fe.width,fe.height)}for(let fe=0,Oe=it.length;fe<Oe;fe++)Ee=it[fe],st?z&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ue,ke,Ee):t.texImage2D(s.TEXTURE_2D,fe,we,Ue,ke,Ee);E.generateMipmaps=!1}else if(st){if(gt){const fe=Xt(pe);t.texStorage2D(s.TEXTURE_2D,be,we,fe.width,fe.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,ke,pe)}else t.texImage2D(s.TEXTURE_2D,0,we,Ue,ke,pe);S(E)&&R(he),Pe.__version=Me.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Je(C,E,$){if(E.image.length!==6)return;const he=oe(C,E),ge=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+$);const Me=i.get(ge);if(ge.version!==Me.__version||he===!0){t.activeTexture(s.TEXTURE0+$);const Pe=Tt.getPrimaries(Tt.workingColorSpace),ue=E.colorSpace===es?null:Tt.getPrimaries(E.colorSpace),pe=E.colorSpace===es||Pe===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,we=[];for(let _e=0;_e<6;_e++)!Ue&&!ke?we[_e]=x(E.image[_e],!0,o.maxCubemapSize):we[_e]=ke?E.image[_e].image:E.image[_e],we[_e]=Ne(E,we[_e]);const Ee=we[0],it=a.convert(E.format,E.colorSpace),st=a.convert(E.type),gt=P(E.internalFormat,it,st,E.normalized,E.colorSpace),z=E.isVideoTexture!==!0,be=Me.__version===void 0||he===!0,fe=ge.dataReady;let Oe=L(E,Ee);Ie(s.TEXTURE_CUBE_MAP,E);let Re;if(Ue){z&&be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,gt,Ee.width,Ee.height);for(let _e=0;_e<6;_e++){Re=we[_e].mipmaps;for(let We=0;We<Re.length;We++){const ot=Re[We];E.format!==mi?it!==null?z?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,ot.width,ot.height,it,ot.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,gt,ot.width,ot.height,0,ot.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,ot.width,ot.height,it,st,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,gt,ot.width,ot.height,0,it,st,ot.data)}}}else{if(Re=E.mipmaps,z&&be){Re.length>0&&Oe++;const _e=Xt(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,gt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ke){z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,we[_e].width,we[_e].height,it,st,we[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,we[_e].width,we[_e].height,0,it,st,we[_e].data);for(let We=0;We<Re.length;We++){const Bt=Re[We].image[_e].image;z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,Bt.width,Bt.height,it,st,Bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,gt,Bt.width,Bt.height,0,it,st,Bt.data)}}else{z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,it,st,we[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,it,st,we[_e]);for(let We=0;We<Re.length;We++){const ot=Re[We];z?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,it,st,ot.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,gt,it,st,ot.image[_e])}}}S(E)&&R(s.TEXTURE_CUBE_MAP),Me.__version=ge.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Qe(C,E,$,he,ge,Me){const Pe=a.convert($.format,$.colorSpace),ue=a.convert($.type),pe=P($.internalFormat,Pe,ue,$.normalized,$.colorSpace),Ue=i.get(E),ke=i.get($);if(ke.__renderTarget=E,!Ue.__hasExternalTextures){const we=Math.max(1,E.width>>Me),Ee=Math.max(1,E.height>>Me);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Me,pe,we,Ee,E.depth,0,Pe,ue,null):t.texImage2D(ge,Me,pe,we,Ee,0,Pe,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),pt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,ke.__webglTexture,0,Gt(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,ke.__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(C,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer){const he=E.depthTexture,ge=he&&he.isDepthTexture?he.type:null,Me=k(E.stencilBuffer,ge),Pe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(E),Me,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(E),Me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Me,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,C)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const Me=he[ge],Pe=a.convert(Me.format,Me.colorSpace),ue=a.convert(Me.type),pe=P(Me.internalFormat,Pe,ue,Me.normalized,Me.colorSpace);pt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(E),pe,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(E),pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(C,E,$){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=i.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ue=a.convert(E.depthTexture.format),ke=a.convert(E.depthTexture.type);let we;E.depthTexture.format===wr?we=s.DEPTH_COMPONENT24:E.depthTexture.format===Rs&&(we=s.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,we,E.width,E.height,0,Ue,ke,null)}}else q(E.depthTexture,0);const Me=ge.__webglTexture,Pe=Gt(E),ue=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,pe=E.depthTexture.format===Rs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===wr)pt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ue,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ue,Me,0);else if(E.depthTexture.format===Rs)pt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ue,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ue,Me,0);else throw new Error("Unknown depthTexture format")}function At(C){const E=i.get(C),$=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const he=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=he}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let he=0;he<6;he++)ft(E.__webglFramebuffer[he],C,he);else{const he=C.texture.mipmaps;he&&he.length>0?ft(E.__webglFramebuffer[0],C,0):ft(E.__webglFramebuffer,C,0)}else if($){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=s.createRenderbuffer(),Vt(E.__webglDepthbuffer[he],C,!1);else{const ge=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}else{const he=C.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Vt(E.__webglDepthbuffer,C,!1);else{const ge=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(C,E,$){const he=i.get(C);E!==void 0&&Qe(he.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&At(C)}function ht(C){const E=C.texture,$=i.get(C),he=i.get(E);C.addEventListener("dispose",b);const ge=C.textures,Me=C.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=E.version,c.memory.textures++),Me){$.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[ue]=[];for(let pe=0;pe<E.mipmaps.length;pe++)$.__webglFramebuffer[ue][pe]=s.createFramebuffer()}else $.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)$.__webglFramebuffer[ue]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let ue=0,pe=ge.length;ue<pe;ue++){const Ue=i.get(ge[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),c.memory.textures++)}if(C.samples>0&&pt(C)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ue=0;ue<ge.length;ue++){const pe=ge[ue];$.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[ue]);const Ue=a.convert(pe.format,pe.colorSpace),ke=a.convert(pe.type),we=P(pe.internalFormat,Ue,ke,pe.normalized,pe.colorSpace,C.isXRRenderTarget===!0),Ee=Gt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,we,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,$.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt($.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Qe($.__webglFramebuffer[ue][pe],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else Qe($.__webglFramebuffer[ue],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(E)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ue=0,pe=ge.length;ue<pe;ue++){const Ue=ge[ue],ke=i.get(Ue);let we=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(we=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,ke.__webglTexture),Ie(we,Ue),Qe($.__webglFramebuffer,C,Ue,s.COLOR_ATTACHMENT0+ue,we,0),S(Ue)&&R(we)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,he.__webglTexture),Ie(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Qe($.__webglFramebuffer[pe],C,E,s.COLOR_ATTACHMENT0,ue,pe);else Qe($.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,ue,0);S(E)&&R(ue),t.unbindTexture()}C.depthBuffer&&At(C)}function Jt(C){const E=C.textures;for(let $=0,he=E.length;$<he;$++){const ge=E[$];if(S(ge)){const Me=N(C),Pe=i.get(ge).__webglTexture;t.bindTexture(Me,Pe),R(Me),t.unbindTexture()}}}const Ht=[],Mn=[];function V(C){if(C.samples>0){if(pt(C)===!1){const E=C.textures,$=C.width,he=C.height;let ge=s.COLOR_BUFFER_BIT;const Me=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=i.get(C),ue=E.length>1;if(ue)for(let Ue=0;Ue<E.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const pe=C.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const ke=i.get(E[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ke,0)}s.blitFramebuffer(0,0,$,he,0,0,$,he,ge,s.NEAREST),f===!0&&(Ht.length=0,Mn.length=0,Ht.push(s.COLOR_ATTACHMENT0+Ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ht.push(Me),Mn.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ue=0;Ue<E.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const ke=i.get(E[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&f){const E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Gt(C){return Math.min(o.maxSamples,C.samples)}function pt(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Nt(C){const E=c.render.frame;m.get(C)!==E&&(m.set(C,E),C.update())}function Ne(C,E){const $=C.colorSpace,he=C.format,ge=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==ii&&$!==es&&(Tt.getTransfer($)===Dt?(he!==mi||ge!==ni)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",$)),E}function Xt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=ie,this.resetTextureUnits=ce,this.getTextureUnits=de,this.setTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=le,this.setTexture3D=ae,this.setTextureCube=U,this.rebindTextures=Ot,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nA(s,e){function t(i,o=es){let a;const c=Tt.getTransfer(o);if(i===ni)return s.UNSIGNED_BYTE;if(i===yh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Sh)return s.UNSIGNED_SHORT_5_5_5_1;if(i===l0)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===c0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===o0)return s.BYTE;if(i===a0)return s.SHORT;if(i===Va)return s.UNSIGNED_SHORT;if(i===xh)return s.INT;if(i===Zi)return s.UNSIGNED_INT;if(i===pi)return s.FLOAT;if(i===br)return s.HALF_FLOAT;if(i===u0)return s.ALPHA;if(i===d0)return s.RGB;if(i===mi)return s.RGBA;if(i===wr)return s.DEPTH_COMPONENT;if(i===Rs)return s.DEPTH_STENCIL;if(i===Mh)return s.RED;if(i===Eh)return s.RED_INTEGER;if(i===Ls)return s.RG;if(i===Th)return s.RG_INTEGER;if(i===bh)return s.RGBA_INTEGER;if(i===Cc||i===Pc||i===Nc||i===Lc)if(c===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Cc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Cc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cf||i===Pf||i===Nf||i===Lf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Cf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===If||i===Df||i===Uf||i===Ff||i===Of||i===Fc||i===kf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===If||i===Df)return c===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Uf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ff)return a.COMPRESSED_R11_EAC;if(i===Of)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Fc)return a.COMPRESSED_RG11_EAC;if(i===kf)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bf||i===zf||i===Vf||i===Hf||i===Gf||i===jf||i===Wf||i===Xf||i===Yf||i===Kf||i===qf||i===$f||i===Zf||i===Jf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Bf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$f)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jf)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qf||i===eh||i===th)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Qf)return c===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===th)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nh||i===ih||i===Oc||i===rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===nh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ha?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const iA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rA=`
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

}`;class sA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new T0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ji({vertexShader:iA,fragmentShader:rA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new jc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oA extends rs{constructor(e,t){super();const i=this;let o=null,a=1,c=null,d="local-floor",f=1,h=null,m=null,g=null,_=null,y=null,M=null;const w=typeof XRWebGLBinding<"u",x=new sA,S={},R=t.getContextAttributes();let N=null,P=null;const k=[],L=[],O=new at;let b=null;const D=new kn;D.viewport=new zt;const Y=new kn;Y.viewport=new zt;const F=[D,Y],Z=new oE;let ce=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ye=k[oe];return ye===void 0&&(ye=new Bd,k[oe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(oe){let ye=k[oe];return ye===void 0&&(ye=new Bd,k[oe]=ye),ye.getGripSpace()},this.getHand=function(oe){let ye=k[oe];return ye===void 0&&(ye=new Bd,k[oe]=ye),ye.getHandSpace()};function j(oe){const ye=L.indexOf(oe.inputSource);if(ye===-1)return;const me=k[ye];me!==void 0&&(me.update(oe.inputSource,oe.frame,h||c),me.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ie(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",K);for(let oe=0;oe<k.length;oe++){const ye=L[oe];ye!==null&&(L[oe]=null,k[oe].disconnect(ye))}ce=null,de=null,x.reset();for(const oe in S)delete S[oe];e.setRenderTarget(N),y=null,_=null,g=null,o=null,P=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){d=oe,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",K),R.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,De=null,Je=null;R.depth&&(Je=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=R.stencil?Rs:wr,De=R.stencil?Ha:Zi);const Qe={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:a};g=this.getBinding(),_=g.createProjectionLayer(Qe),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new qi(_.textureWidth,_.textureHeight,{format:mi,type:ni,depthTexture:new No(_.textureWidth,_.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new qi(y.framebufferWidth,y.framebufferHeight,{format:mi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(d),Ie.setContext(o),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(oe){for(let ye=0;ye<oe.removed.length;ye++){const me=oe.removed[ye],De=L.indexOf(me);De>=0&&(L[De]=null,k[De].disconnect(me))}for(let ye=0;ye<oe.added.length;ye++){const me=oe.added[ye];let De=L.indexOf(me);if(De===-1){for(let Qe=0;Qe<k.length;Qe++)if(Qe>=L.length){L.push(me),De=Qe;break}else if(L[Qe]===null){L[Qe]=me,De=Qe;break}if(De===-1)break}const Je=k[De];Je&&Je.connect(me)}}const q=new X,le=new X;function ae(oe,ye,me){q.setFromMatrixPosition(ye.matrixWorld),le.setFromMatrixPosition(me.matrixWorld);const De=q.distanceTo(le),Je=ye.projectionMatrix.elements,Qe=me.projectionMatrix.elements,Vt=Je[14]/(Je[10]-1),ft=Je[14]/(Je[10]+1),At=(Je[9]+1)/Je[5],Ot=(Je[9]-1)/Je[5],ht=(Je[8]-1)/Je[0],Jt=(Qe[8]+1)/Qe[0],Ht=Vt*ht,Mn=Vt*Jt,V=De/(-ht+Jt),Gt=V*-ht;if(ye.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Gt),oe.translateZ(V),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Je[10]===-1)oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const pt=Vt+V,Nt=ft+V,Ne=Ht-Gt,Xt=Mn+(De-Gt),C=At*ft/Nt*pt,E=Ot*ft/Nt*pt;oe.projectionMatrix.makePerspective(Ne,Xt,C,E,pt,Nt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function U(oe,ye){ye===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ye.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let ye=oe.near,me=oe.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(me=x.depthFar)),Z.near=Y.near=D.near=ye,Z.far=Y.far=D.far=me,(ce!==Z.near||de!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ce=Z.near,de=Z.far),Z.layers.mask=oe.layers.mask|6,D.layers.mask=Z.layers.mask&-5,Y.layers.mask=Z.layers.mask&-3;const De=oe.parent,Je=Z.cameras;U(Z,De);for(let Qe=0;Qe<Je.length;Qe++)U(Je[Qe],De);Je.length===2?ae(Z,D,Y):Z.projectionMatrix.copy(D.projectionMatrix),ee(oe,Z,De)};function ee(oe,ye,me){me===null?oe.matrix.copy(ye.matrixWorld):(oe.matrix.copy(me.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ye.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Po*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function(oe){f=oe,_!==null&&(_.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(oe){return S[oe]};let Fe=null;function He(oe,ye){if(m=ye.getViewerPose(h||c),M=ye,m!==null){const me=m.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let De=!1;me.length!==Z.cameras.length&&(Z.cameras.length=0,De=!0);for(let ft=0;ft<me.length;ft++){const At=me[ft];let Ot=null;if(y!==null)Ot=y.getViewport(At);else{const Jt=g.getViewSubImage(_,At);Ot=Jt.viewport,ft===0&&(e.setRenderTargetTextures(P,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(P))}let ht=F[ft];ht===void 0&&(ht=new kn,ht.layers.enable(ft),ht.viewport=new zt,F[ft]=ht),ht.matrix.fromArray(At.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(At.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),ft===0&&(Z.matrix.copy(ht.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),De===!0&&Z.cameras.push(ht)}const Je=o.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){g=i.getBinding();const ft=g.getDepthInformation(me[0]);ft&&ft.isValid&&ft.texture&&x.init(ft,o.renderState)}if(Je&&Je.includes("camera-access")&&w){e.state.unbindTexture(),g=i.getBinding();for(let ft=0;ft<me.length;ft++){const At=me[ft].camera;if(At){let Ot=S[At];Ot||(Ot=new T0,S[At]=Ot);const ht=g.getCameraImage(At);Ot.sourceTexture=ht}}}}for(let me=0;me<k.length;me++){const De=L[me],Je=k[me];De!==null&&Je!==void 0&&Je.update(De,ye,h||c)}Fe&&Fe(oe,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),M=null}const Ie=new N0;Ie.setAnimationLoop(He),this.setAnimationLoop=function(oe){Fe=oe},this.dispose=function(){}}}const aA=new xt,k0=new ut;k0.set(-1,0,0,0,1,0,0,0,1);function lA(s,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function i(x,S){S.color.getRGB(x.fogColor.value,b0(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,R,N,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(x,S):S.isMeshLambertMaterial?(a(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(x,S),g(x,S)):S.isMeshPhongMaterial?(a(x,S),m(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(x,S),_(x,S),S.isMeshPhysicalMaterial&&y(x,S,P)):S.isMeshMatcapMaterial?(a(x,S),M(x,S)):S.isMeshDepthMaterial?a(x,S):S.isMeshDistanceMaterial?(a(x,S),w(x,S)):S.isMeshNormalMaterial?a(x,S):S.isLineBasicMaterial?(c(x,S),S.isLineDashedMaterial&&d(x,S)):S.isPointsMaterial?f(x,S,R,N):S.isSpriteMaterial?h(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===qn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===qn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const R=e.get(S),N=R.envMap,P=R.envMapRotation;N&&(x.envMap.value=N,x.envMapRotation.value.setFromMatrix4(aA.makeRotationFromEuler(P)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(k0),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function c(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function d(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function f(x,S,R,N){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*R,x.scale.value=N*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function m(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function g(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function _(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,R){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,S){S.matcap&&(x.matcap.value=S.matcap)}function w(x,S){const R=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function cA(s,e,t,i){let o={},a={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,N){const P=N.program;i.uniformBlockBinding(R,P)}function h(R,N){let P=o[R.id];P===void 0&&(M(R),P=m(R),o[R.id]=P,R.addEventListener("dispose",x));const k=N.program;i.updateUBOMapping(R,k);const L=e.render.frame;a[R.id]!==L&&(_(R),a[R.id]=L)}function m(R){const N=g();R.__bindingPointIndex=N;const P=s.createBuffer(),k=R.__size,L=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,k,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function g(){for(let R=0;R<d;R++)if(c.indexOf(R)===-1)return c.push(R),R;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const N=o[R.id],P=R.uniforms,k=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let L=0,O=P.length;L<O;L++){const b=Array.isArray(P[L])?P[L]:[P[L]];for(let D=0,Y=b.length;D<Y;D++){const F=b[D];if(y(F,L,D,k)===!0){const Z=F.__offset,ce=Array.isArray(F.value)?F.value:[F.value];let de=0;for(let j=0;j<ce.length;j++){const ie=ce[j],K=w(ie);typeof ie=="number"||typeof ie=="boolean"?(F.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,Z+de,F.__data)):ie.isMatrix3?(F.__data[0]=ie.elements[0],F.__data[1]=ie.elements[1],F.__data[2]=ie.elements[2],F.__data[3]=0,F.__data[4]=ie.elements[3],F.__data[5]=ie.elements[4],F.__data[6]=ie.elements[5],F.__data[7]=0,F.__data[8]=ie.elements[6],F.__data[9]=ie.elements[7],F.__data[10]=ie.elements[8],F.__data[11]=0):ArrayBuffer.isView(ie)?F.__data.set(new ie.constructor(ie.buffer,ie.byteOffset,F.__data.length)):(ie.toArray(F.__data,de),de+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(R,N,P,k){const L=R.value,O=N+"_"+P;if(k[O]===void 0)return typeof L=="number"||typeof L=="boolean"?k[O]=L:ArrayBuffer.isView(L)?k[O]=L.slice():k[O]=L.clone(),!0;{const b=k[O];if(typeof L=="number"||typeof L=="boolean"){if(b!==L)return k[O]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(b.equals(L)===!1)return b.copy(L),!0}}return!1}function M(R){const N=R.uniforms;let P=0;const k=16;for(let O=0,b=N.length;O<b;O++){const D=Array.isArray(N[O])?N[O]:[N[O]];for(let Y=0,F=D.length;Y<F;Y++){const Z=D[Y],ce=Array.isArray(Z.value)?Z.value:[Z.value];for(let de=0,j=ce.length;de<j;de++){const ie=ce[de],K=w(ie),q=P%k,le=q%K.boundary,ae=q+le;P+=le,ae!==0&&k-ae<K.storage&&(P+=k-ae),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=K.storage}}}const L=P%k;return L>0&&(P+=k-L),R.__size=P,R.__cache={},this}function w(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(N.boundary=16,N.storage=R.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",R),N}function x(R){const N=R.target;N.removeEventListener("dispose",x);const P=c.indexOf(N.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete a[N.id]}function S(){for(const R in o)s.deleteBuffer(o[R]);c=[],o={},a={}}return{bind:f,update:h,dispose:S}}const uA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function dA(){return Hi===null&&(Hi=new Nh(uA,16,16,Ls,br),Hi.name="DFG_LUT",Hi.minFilter=pn,Hi.magFilter=pn,Hi.wrapS=Xi,Hi.wrapT=Xi,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class fA{constructor(e={}){const{canvas:t=US(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:y=ni}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const w=y,x=new Set([bh,Th,Eh]),S=new Set([ni,Zi,Va,Ha,yh,Sh]),R=new Uint32Array(4),N=new Int32Array(4),P=new X;let k=null,L=null;const O=[],b=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let F=!1,Z=null;this._outputColorSpace=wn;let ce=0,de=0,j=null,ie=-1,K=null;const q=new zt,le=new zt;let ae=null;const U=new dt(0);let ee=0,Fe=t.width,He=t.height,Ie=1,oe=null,ye=null;const me=new zt(0,0,Fe,He),De=new zt(0,0,Fe,He);let Je=!1;const Qe=new Ih;let Vt=!1,ft=!1;const At=new xt,Ot=new X,ht=new zt,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function Mn(){return j===null?Ie:1}let V=i;function Gt(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:o,stencil:a,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_h}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ot,!1),V===null){const W="webgl2";if(V=Gt(W,A),V===null)throw Gt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw nt("WebGLRenderer: "+A.message),A}let pt,Nt,Ne,Xt,C,E,$,he,ge,Me,Pe,ue,pe,Ue,ke,we,Ee,it,st,gt,z,be,fe;function Oe(){pt=new dw(V),pt.init(),z=new nA(V,pt),Nt=new iw(V,pt,e,z),Ne=new eA(V,pt),Nt.reversedDepthBuffer&&_&&Ne.buffers.depth.setReversed(!0),Xt=new pw(V),C=new z1,E=new tA(V,pt,Ne,C,Nt,z,Xt),$=new uw(Y),he=new vE(V),be=new tw(V,he),ge=new fw(V,he,Xt,be),Me=new gw(V,ge,he,be,Xt),it=new mw(V,Nt,E),ke=new rw(C),Pe=new B1(Y,$,pt,Nt,be,ke),ue=new lA(Y,C),pe=new H1,Ue=new K1(pt),Ee=new ew(Y,$,Ne,Me,M,f),we=new Q1(Y,Me,Nt),fe=new cA(V,Xt,Nt,Ne),st=new nw(V,pt,Xt),gt=new hw(V,pt,Xt),Xt.programs=Pe.programs,Y.capabilities=Nt,Y.extensions=pt,Y.properties=C,Y.renderLists=pe,Y.shadowMap=we,Y.state=Ne,Y.info=Xt}Oe(),w!==ni&&(D=new vw(w,t.width,t.height,o,a));const Re=new oA(Y,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(A){A!==void 0&&(Ie=A,this.setSize(Fe,He,!1))},this.getSize=function(A){return A.set(Fe,He)},this.setSize=function(A,W,re=!0){if(Re.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=A,He=W,t.width=Math.floor(A*Ie),t.height=Math.floor(W*Ie),re===!0&&(t.style.width=A+"px",t.style.height=W+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(Fe*Ie,He*Ie).floor()},this.setDrawingBufferSize=function(A,W,re){Fe=A,He=W,Ie=re,t.width=Math.floor(A*re),t.height=Math.floor(W*re),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(w===ni){nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){$e("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(q)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,W,re,te){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,W,re,te),Ne.viewport(q.copy(me).multiplyScalar(Ie).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,W,re,te){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,W,re,te),Ne.scissor(le.copy(De).multiplyScalar(Ie).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(A){Ne.setScissorTest(Je=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,re=!0){let te=0;if(A){let Q=!1;if(j!==null){const Ce=j.texture.format;Q=x.has(Ce)}if(Q){const Ce=j.texture.type,Ve=S.has(Ce),Ae=Ee.getClearColor(),Xe=Ee.getClearAlpha(),Ze=Ae.r,lt=Ae.g,ct=Ae.b;Ve?(R[0]=Ze,R[1]=lt,R[2]=ct,R[3]=Xe,V.clearBufferuiv(V.COLOR,0,R)):(N[0]=Ze,N[1]=lt,N[2]=ct,N[3]=Xe,V.clearBufferiv(V.COLOR,0,N))}else te|=V.COLOR_BUFFER_BIT}W&&(te|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),Ee.dispose(),pe.dispose(),Ue.dispose(),C.dispose(),$.dispose(),Me.dispose(),be.dispose(),fe.dispose(),Pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ss),Re.removeEventListener("sessionend",Us),rr.stop()};function _e(A){A.preventDefault(),Bc("WebGLRenderer: Context Lost."),F=!0}function We(){Bc("WebGLRenderer: Context Restored."),F=!1;const A=Xt.autoReset,W=we.enabled,re=we.autoUpdate,te=we.needsUpdate,Q=we.type;Oe(),Xt.autoReset=A,we.enabled=W,we.autoUpdate=re,we.needsUpdate=te,we.type=Q}function ot(A){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bt(A){const W=A.target;W.removeEventListener("dispose",Bt),Rt(W)}function Rt(A){In(A),C.remove(A)}function In(A){const W=C.get(A).programs;W!==void 0&&(W.forEach(function(re){Pe.releaseProgram(re)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,re,te,Q,Ce){W===null&&(W=Jt);const Ve=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=Za(A,W,re,te,Q);Ne.setMaterial(te,Ve);let Xe=re.index,Ze=1;if(te.wireframe===!0){if(Xe=ge.getWireframeAttribute(re),Xe===void 0)return;Ze=2}const lt=re.drawRange,ct=re.attributes.position;let Ke=lt.start*Ze,bt=(lt.start+lt.count)*Ze;Ce!==null&&(Ke=Math.max(Ke,Ce.start*Ze),bt=Math.min(bt,(Ce.start+Ce.count)*Ze)),Xe!==null?(Ke=Math.max(Ke,0),bt=Math.min(bt,Xe.count)):ct!=null&&(Ke=Math.max(Ke,0),bt=Math.min(bt,ct.count));const jt=bt-Ke;if(jt<0||jt===1/0)return;be.setup(Q,te,Ae,re,Xe);let $t,Lt=st;if(Xe!==null&&($t=he.get(Xe),Lt=gt,Lt.setIndex($t)),Q.isMesh)te.wireframe===!0?(Ne.setLineWidth(te.wireframeLinewidth*Mn()),Lt.setMode(V.LINES)):Lt.setMode(V.TRIANGLES);else if(Q.isLine){let an=te.linewidth;an===void 0&&(an=1),Ne.setLineWidth(an*Mn()),Q.isLineSegments?Lt.setMode(V.LINES):Q.isLineLoop?Lt.setMode(V.LINE_LOOP):Lt.setMode(V.LINE_STRIP)}else Q.isPoints?Lt.setMode(V.POINTS):Q.isSprite&&Lt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const an=Q._multiDrawStarts,Be=Q._multiDrawCounts,En=Q._multiDrawCount,_t=Xe?he.get(Xe).bytesPerElement:1,zn=C.get(te).currentProgram.getUniforms();for(let Vn=0;Vn<En;Vn++)zn.setValue(V,"_gl_DrawID",Vn),Lt.render(an[Vn]/_t,Be[Vn])}else if(Q.isInstancedMesh)Lt.renderInstances(Ke,jt,Q.count);else if(re.isInstancedBufferGeometry){const an=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Be=Math.min(re.instanceCount,an);Lt.renderInstances(Ke,jt,Be)}else Lt.render(Ke,jt)};function si(A,W,re){A.transparent===!0&&A.side===Wi&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Fs(A,W,re),A.side=Tr,A.needsUpdate=!0,Fs(A,W,re),A.side=Wi):Fs(A,W,re)}this.compile=function(A,W,re=null){re===null&&(re=A),L=Ue.get(re),L.init(W),b.push(L),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),A!==re&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),L.setupLights();const te=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Ve=0;Ve<Ce.length;Ve++){const Ae=Ce[Ve];si(Ae,re,Q),te.add(Ae)}else si(Ce,re,Q),te.add(Ce)}),L=b.pop(),te},this.compileAsync=function(A,W,re=null){const te=this.compile(A,W,re);return new Promise(Q=>{function Ce(){if(te.forEach(function(Ve){C.get(Ve).currentProgram.isReady()&&te.delete(Ve)}),te.size===0){Q(A);return}setTimeout(Ce,10)}pt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ir=null;function Ds(A){ir&&ir(A)}function ss(){rr.stop()}function Us(){rr.start()}const rr=new N0;rr.setAnimationLoop(Ds),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(A){ir=A,Re.setAnimationLoop(A),A===null?rr.stop():rr.start()},Re.addEventListener("sessionstart",ss),Re.addEventListener("sessionend",Us),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;Z!==null&&Z.renderStart(A,W);const re=Re.enabled===!0&&Re.isPresenting===!0,te=D!==null&&(j===null||re)&&D.begin(Y,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,W,j),L=Ue.get(A,b.length),L.init(W),L.state.textureUnits=E.getTextureUnits(),b.push(L),At.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Qe.setFromProjectionMatrix(At,Yi,W.reversedDepth),ft=this.localClippingEnabled,Vt=ke.init(this.clippingPlanes,ft),k=pe.get(A,O.length),k.init(),O.push(k),Re.enabled===!0&&Re.isPresenting===!0){const Ve=Y.xr.getDepthSensingMesh();Ve!==null&&Vo(Ve,W,-1/0,Y.sortObjects)}Vo(A,W,0,Y.sortObjects),k.finish(),Y.sortObjects===!0&&k.sort(oe,ye),Ht=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Ht&&Ee.addToRenderList(k,A),this.info.render.frame++,Vt===!0&&ke.beginShadows();const Q=L.state.shadowsArray;if(we.render(Q,A,W),Vt===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&D.hasRenderPass())===!1){const Ve=k.opaque,Ae=k.transmissive;if(L.setupLights(),W.isArrayCamera){const Xe=W.cameras;if(Ae.length>0)for(let Ze=0,lt=Xe.length;Ze<lt;Ze++){const ct=Xe[Ze];Ui(Ve,Ae,A,ct)}Ht&&Ee.render(A);for(let Ze=0,lt=Xe.length;Ze<lt;Ze++){const ct=Xe[Ze];qa(k,A,ct,ct.viewport)}}else Ae.length>0&&Ui(Ve,Ae,A,W),Ht&&Ee.render(A),qa(k,A,W)}j!==null&&de===0&&(E.updateMultisampleRenderTarget(j),E.updateRenderTargetMipmap(j)),te&&D.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,W),be.resetDefaultState(),ie=-1,K=null,b.pop(),b.length>0?(L=b[b.length-1],E.setTextureUnits(L.state.textureUnits),Vt===!0&&ke.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?k=O[O.length-1]:k=null,Z!==null&&Z.renderEnd()};function Vo(A,W,re,te){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qe.intersectsSprite(A)){te&&ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(At);const Ve=Me.update(A),Ae=A.material;Ae.visible&&k.push(A,Ve,Ae,re,ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qe.intersectsObject(A))){const Ve=Me.update(A),Ae=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ht.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ht.copy(Ve.boundingSphere.center)),ht.applyMatrix4(A.matrixWorld).applyMatrix4(At)),Array.isArray(Ae)){const Xe=Ve.groups;for(let Ze=0,lt=Xe.length;Ze<lt;Ze++){const ct=Xe[Ze],Ke=Ae[ct.materialIndex];Ke&&Ke.visible&&k.push(A,Ve,Ke,re,ht.z,ct)}}else Ae.visible&&k.push(A,Ve,Ae,re,ht.z,null)}}const Ce=A.children;for(let Ve=0,Ae=Ce.length;Ve<Ae;Ve++)Vo(Ce[Ve],W,re,te)}function qa(A,W,re,te){const{opaque:Q,transmissive:Ce,transparent:Ve}=A;L.setupLightsView(re),Vt===!0&&ke.setGlobalState(Y.clippingPlanes,re),te&&Ne.viewport(q.copy(te)),Q.length>0&&os(Q,W,re),Ce.length>0&&os(Ce,W,re),Ve.length>0&&os(Ve,W,re),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Ui(A,W,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[te.id]===void 0){const Ke=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[te.id]=new qi(1,1,{generateMipmaps:!0,type:Ke?br:ni,minFilter:yr,samples:Math.max(4,Nt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ce=L.state.transmissionRenderTarget[te.id],Ve=te.viewport||q;Ce.setSize(Ve.z*Y.transmissionResolutionScale,Ve.w*Y.transmissionResolutionScale);const Ae=Y.getRenderTarget(),Xe=Y.getActiveCubeFace(),Ze=Y.getActiveMipmapLevel();Y.setRenderTarget(Ce),Y.getClearColor(U),ee=Y.getClearAlpha(),ee<1&&Y.setClearColor(16777215,.5),Y.clear(),Ht&&Ee.render(re);const lt=Y.toneMapping;Y.toneMapping=Ki;const ct=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),Vt===!0&&ke.setGlobalState(Y.clippingPlanes,te),os(A,re,te),E.updateMultisampleRenderTarget(Ce),E.updateRenderTargetMipmap(Ce),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let bt=0,jt=W.length;bt<jt;bt++){const $t=W[bt],{object:Lt,geometry:an,material:Be,group:En}=$t;if(Be.side===Wi&&Lt.layers.test(te.layers)){const _t=Be.side;Be.side=qn,Be.needsUpdate=!0,Ho(Lt,re,te,an,Be,En),Be.side=_t,Be.needsUpdate=!0,Ke=!0}}Ke===!0&&(E.updateMultisampleRenderTarget(Ce),E.updateRenderTargetMipmap(Ce))}Y.setRenderTarget(Ae,Xe,Ze),Y.setClearColor(U,ee),ct!==void 0&&(te.viewport=ct),Y.toneMapping=lt}function os(A,W,re){const te=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Ce=A.length;Q<Ce;Q++){const Ve=A[Q],{object:Ae,geometry:Xe,group:Ze}=Ve;let lt=Ve.material;lt.allowOverride===!0&&te!==null&&(lt=te),Ae.layers.test(re.layers)&&Ho(Ae,W,re,Xe,lt,Ze)}}function Ho(A,W,re,te,Q,Ce){A.onBeforeRender(Y,W,re,te,Q,Ce),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(Y,W,re,te,A,Ce),Q.transparent===!0&&Q.side===Wi&&Q.forceSinglePass===!1?(Q.side=qn,Q.needsUpdate=!0,Y.renderBufferDirect(re,W,te,Q,A,Ce),Q.side=Tr,Q.needsUpdate=!0,Y.renderBufferDirect(re,W,te,Q,A,Ce),Q.side=Wi):Y.renderBufferDirect(re,W,te,Q,A,Ce),A.onAfterRender(Y,W,re,te,Q,Ce)}function Fs(A,W,re){W.isScene!==!0&&(W=Jt);const te=C.get(A),Q=L.state.lights,Ce=L.state.shadowsArray,Ve=Q.state.version,Ae=Pe.getParameters(A,Q.state,Ce,W,re,L.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(Ae);let Ze=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,te.fog=W.fog;const lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=$.get(A.envMap||te.environment,lt),te.envMapRotation=te.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",Bt),Ze=new Map,te.programs=Ze);let ct=Ze.get(Xe);if(ct!==void 0){if(te.currentProgram===ct&&te.lightsStateVersion===Ve)return jo(A,Ae),ct}else Ae.uniforms=Pe.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,re,Ae),A.onBeforeCompile(Ae,Y),ct=Pe.acquireProgram(Ae,Xe),Ze.set(Xe,ct),te.uniforms=Ae.uniforms;const Ke=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=ke.uniform),jo(A,Ae),te.needsLights=$c(A),te.lightsStateVersion=Ve,te.needsLights&&(Ke.ambientLightColor.value=Q.state.ambient,Ke.lightProbe.value=Q.state.probe,Ke.directionalLights.value=Q.state.directional,Ke.directionalLightShadows.value=Q.state.directionalShadow,Ke.spotLights.value=Q.state.spot,Ke.spotLightShadows.value=Q.state.spotShadow,Ke.rectAreaLights.value=Q.state.rectArea,Ke.ltc_1.value=Q.state.rectAreaLTC1,Ke.ltc_2.value=Q.state.rectAreaLTC2,Ke.pointLights.value=Q.state.point,Ke.pointLightShadows.value=Q.state.pointShadow,Ke.hemisphereLights.value=Q.state.hemi,Ke.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ke.spotLightMatrix.value=Q.state.spotLightMatrix,Ke.spotLightMap.value=Q.state.spotLightMap,Ke.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.lightProbeGrid=L.state.lightProbeGridArray.length>0,te.currentProgram=ct,te.uniformsList=null,ct}function Go(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Ic.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function jo(A,W){const re=C.get(A);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function $a(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(W.matrixWorld);for(let re=0,te=A.length;re<te;re++){const Q=A[re];if(Q.texture!==null&&Q.boundingBox.containsPoint(P))return Q}return null}function Za(A,W,re,te,Q){W.isScene!==!0&&(W=Jt),E.resetTextureUnits();const Ce=W.fog,Ve=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?W.environment:null,Ae=j===null?Y.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Tt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ze=$.get(te.envMap||Ve,Xe),lt=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ct=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!re.morphAttributes.position,bt=!!re.morphAttributes.normal,jt=!!re.morphAttributes.color;let $t=Ki;te.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&($t=Y.toneMapping);const Lt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,an=Lt!==void 0?Lt.length:0,Be=C.get(te),En=L.state.lights;if(Vt===!0&&(ft===!0||A!==K)){const It=A===K&&te.id===ie;ke.setState(te,A,It)}let _t=!1;te.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==En.state.version||Be.outputColorSpace!==Ae||Q.isBatchedMesh&&Be.batching===!1||!Q.isBatchedMesh&&Be.batching===!0||Q.isBatchedMesh&&Be.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Be.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Be.instancing===!1||!Q.isInstancedMesh&&Be.instancing===!0||Q.isSkinnedMesh&&Be.skinning===!1||!Q.isSkinnedMesh&&Be.skinning===!0||Q.isInstancedMesh&&Be.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Be.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Be.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Be.instancingMorph===!1&&Q.morphTexture!==null||Be.envMap!==Ze||te.fog===!0&&Be.fog!==Ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ke.numPlanes||Be.numIntersection!==ke.numIntersection)||Be.vertexAlphas!==lt||Be.vertexTangents!==ct||Be.morphTargets!==Ke||Be.morphNormals!==bt||Be.morphColors!==jt||Be.toneMapping!==$t||Be.morphTargetsCount!==an||!!Be.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Be.__version=te.version);let zn=Be.currentProgram;_t===!0&&(zn=Fs(te,W,Q),Z&&te.isNodeMaterial&&Z.onUpdateProgram(te,zn,Be));let Vn=!1,yt=!1,sr=!1;const Pt=zn.getUniforms(),Yt=Be.uniforms;if(Ne.useProgram(zn.program)&&(Vn=!0,yt=!0,sr=!0),te.id!==ie&&(ie=te.id,yt=!0),Be.needsLights){const It=$a(L.state.lightProbeGridArray,Q);Be.lightProbeGrid!==It&&(Be.lightProbeGrid=It,yt=!0)}if(Vn||K!==A){Ne.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(V,"projectionMatrix",A.projectionMatrix),Pt.setValue(V,"viewMatrix",A.matrixWorldInverse);const xi=Pt.map.cameraPosition;xi!==void 0&&xi.setValue(V,Ot.setFromMatrixPosition(A.matrixWorld)),Nt.logarithmicDepthBuffer&&Pt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Pt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,yt=!0,sr=!0)}if(Be.needsLights&&(En.state.directionalShadowMap.length>0&&Pt.setValue(V,"directionalShadowMap",En.state.directionalShadowMap,E),En.state.spotShadowMap.length>0&&Pt.setValue(V,"spotShadowMap",En.state.spotShadowMap,E),En.state.pointShadowMap.length>0&&Pt.setValue(V,"pointShadowMap",En.state.pointShadowMap,E)),Q.isSkinnedMesh){Pt.setOptional(V,Q,"bindMatrix"),Pt.setOptional(V,Q,"bindMatrixInverse");const It=Q.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Pt.setValue(V,"boneTexture",It.boneTexture,E))}Q.isBatchedMesh&&(Pt.setOptional(V,Q,"batchingTexture"),Pt.setValue(V,"batchingTexture",Q._matricesTexture,E),Pt.setOptional(V,Q,"batchingIdTexture"),Pt.setValue(V,"batchingIdTexture",Q._indirectTexture,E),Pt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Pt.setValue(V,"batchingColorTexture",Q._colorsTexture,E));const vi=re.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&it.update(Q,re,zn),(yt||Be.receiveShadow!==Q.receiveShadow)&&(Be.receiveShadow=Q.receiveShadow,Pt.setValue(V,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&W.environment!==null&&(Yt.envMapIntensity.value=W.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=dA()),yt){if(Pt.setValue(V,"toneMappingExposure",Y.toneMappingExposure),Be.needsLights&&qc(Yt,sr),Ce&&te.fog===!0&&ue.refreshFogUniforms(Yt,Ce),ue.refreshMaterialUniforms(Yt,te,Ie,He,L.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.lightProbeGrid){const It=Be.lightProbeGrid;Yt.probesSH.value=It.texture,Yt.probesMin.value.copy(It.boundingBox.min),Yt.probesMax.value.copy(It.boundingBox.max),Yt.probesResolution.value.copy(It.resolution)}Ic.upload(V,Go(Be),Yt,E)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ic.upload(V,Go(Be),Yt,E),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Pt.setValue(V,"center",Q.center),Pt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Pt.setValue(V,"normalMatrix",Q.normalMatrix),Pt.setValue(V,"modelMatrix",Q.matrixWorld),te.uniformsGroups!==void 0){const It=te.uniformsGroups;for(let xi=0,Fi=It.length;xi<Fi;xi++){const as=It[xi];fe.update(as,zn),fe.bind(as,zn)}}return zn}function qc(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function $c(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,W,re){const te=C.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),C.get(A.texture).__webglTexture=W,C.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const re=C.get(A);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0};const Qt=V.createFramebuffer();this.setRenderTarget=function(A,W=0,re=0){j=A,ce=W,de=re;let te=null,Q=!1,Ce=!1;if(A){const Ae=C.get(A);if(Ae.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(V.FRAMEBUFFER,Ae.__webglFramebuffer),q.copy(A.viewport),le.copy(A.scissor),ae=A.scissorTest,Ne.viewport(q),Ne.scissor(le),Ne.setScissorTest(ae),ie=-1;return}else if(Ae.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ae.__hasExternalTextures)E.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const lt=A.depthTexture;if(Ae.__boundDepthTexture!==lt){if(lt!==null&&C.has(lt)&&(A.width!==lt.image.width||A.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Ze=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?te=Ze[W][re]:te=Ze[W],Q=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?te=C.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?te=Ze[re]:te=Ze,q.copy(A.viewport),le.copy(A.scissor),ae=A.scissorTest}else q.copy(me).multiplyScalar(Ie).floor(),le.copy(De).multiplyScalar(Ie).floor(),ae=Je;if(re!==0&&(te=Qt),Ne.bindFramebuffer(V.FRAMEBUFFER,te)&&Ne.drawBuffers(A,te),Ne.viewport(q),Ne.scissor(le),Ne.setScissorTest(ae),Q){const Ae=C.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ae.__webglTexture,re)}else if(Ce){const Ae=W;for(let Xe=0;Xe<A.textures.length;Xe++){const Ze=C.get(A.textures[Xe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,re,Ae)}}else if(A!==null&&re!==0){const Ae=C.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,re)}ie=-1},this.readRenderTargetPixels=function(A,W,re,te,Q,Ce,Ve,Ae=0){if(!(A&&A.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){Ne.bindFramebuffer(V.FRAMEBUFFER,Xe);try{const Ze=A.textures[Ae],lt=Ze.format,ct=Ze.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),!Nt.textureFormatReadable(lt)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(ct)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-te&&re>=0&&re<=A.height-Q&&V.readPixels(W,re,te,Q,z.convert(lt),z.convert(ct),Ce)}finally{const Ze=j!==null?C.get(j).__webglFramebuffer:null;Ne.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,re,te,Q,Ce,Ve,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(W>=0&&W<=A.width-te&&re>=0&&re<=A.height-Q){Ne.bindFramebuffer(V.FRAMEBUFFER,Xe);const Ze=A.textures[Ae],lt=Ze.format,ct=Ze.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),!Nt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),V.readPixels(W,re,te,Q,z.convert(lt),z.convert(ct),0);const bt=j!==null?C.get(j).__webglFramebuffer:null;Ne.bindFramebuffer(V.FRAMEBUFFER,bt);const jt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await FS(V,jt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.deleteBuffer(Ke),V.deleteSync(jt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,re=0){const te=Math.pow(2,-re),Q=Math.floor(A.image.width*te),Ce=Math.floor(A.image.height*te),Ve=W!==null?W.x:0,Ae=W!==null?W.y:0;E.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Ve,Ae,Q,Ce),Ne.unbindTexture()};const Zc=V.createFramebuffer(),Wo=V.createFramebuffer();this.copyTextureToTexture=function(A,W,re=null,te=null,Q=0,Ce=0){let Ve,Ae,Xe,Ze,lt,ct,Ke,bt,jt;const $t=A.isCompressedTexture?A.mipmaps[Ce]:A.image;if(re!==null)Ve=re.max.x-re.min.x,Ae=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,Ze=re.min.x,lt=re.min.y,ct=re.isBox3?re.min.z:0;else{const Yt=Math.pow(2,-Q);Ve=Math.floor($t.width*Yt),Ae=Math.floor($t.height*Yt),A.isDataArrayTexture?Xe=$t.depth:A.isData3DTexture?Xe=Math.floor($t.depth*Yt):Xe=1,Ze=0,lt=0,ct=0}te!==null?(Ke=te.x,bt=te.y,jt=te.z):(Ke=0,bt=0,jt=0);const Lt=z.convert(W.format),an=z.convert(W.type);let Be;W.isData3DTexture?(E.setTexture3D(W,0),Be=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(E.setTexture2DArray(W,0),Be=V.TEXTURE_2D_ARRAY):(E.setTexture2D(W,0),Be=V.TEXTURE_2D),Ne.activeTexture(V.TEXTURE0),Ne.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),Ne.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Ne.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const En=Ne.getParameter(V.UNPACK_ROW_LENGTH),_t=Ne.getParameter(V.UNPACK_IMAGE_HEIGHT),zn=Ne.getParameter(V.UNPACK_SKIP_PIXELS),Vn=Ne.getParameter(V.UNPACK_SKIP_ROWS),yt=Ne.getParameter(V.UNPACK_SKIP_IMAGES);Ne.pixelStorei(V.UNPACK_ROW_LENGTH,$t.width),Ne.pixelStorei(V.UNPACK_IMAGE_HEIGHT,$t.height),Ne.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),Ne.pixelStorei(V.UNPACK_SKIP_ROWS,lt),Ne.pixelStorei(V.UNPACK_SKIP_IMAGES,ct);const sr=A.isDataArrayTexture||A.isData3DTexture,Pt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Yt=C.get(A),vi=C.get(W),It=C.get(Yt.__renderTarget),xi=C.get(vi.__renderTarget);Ne.bindFramebuffer(V.READ_FRAMEBUFFER,It.__webglFramebuffer),Ne.bindFramebuffer(V.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Fi=0;Fi<Xe;Fi++)sr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,C.get(A).__webglTexture,Q,ct+Fi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,C.get(W).__webglTexture,Ce,jt+Fi)),V.blitFramebuffer(Ze,lt,Ve,Ae,Ke,bt,Ve,Ae,V.DEPTH_BUFFER_BIT,V.NEAREST);Ne.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||C.has(A)){const Yt=C.get(A),vi=C.get(W);Ne.bindFramebuffer(V.READ_FRAMEBUFFER,Zc),Ne.bindFramebuffer(V.DRAW_FRAMEBUFFER,Wo);for(let It=0;It<Xe;It++)sr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.__webglTexture,Q,ct+It):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Yt.__webglTexture,Q),Pt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vi.__webglTexture,Ce,jt+It):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vi.__webglTexture,Ce),Q!==0?V.blitFramebuffer(Ze,lt,Ve,Ae,Ke,bt,Ve,Ae,V.COLOR_BUFFER_BIT,V.NEAREST):Pt?V.copyTexSubImage3D(Be,Ce,Ke,bt,jt+It,Ze,lt,Ve,Ae):V.copyTexSubImage2D(Be,Ce,Ke,bt,Ze,lt,Ve,Ae);Ne.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Be,Ce,Ke,bt,jt,Ve,Ae,Xe,Lt,an,$t.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Be,Ce,Ke,bt,jt,Ve,Ae,Xe,Lt,$t.data):V.texSubImage3D(Be,Ce,Ke,bt,jt,Ve,Ae,Xe,Lt,an,$t):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ce,Ke,bt,Ve,Ae,Lt,an,$t.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ce,Ke,bt,$t.width,$t.height,Lt,$t.data):V.texSubImage2D(V.TEXTURE_2D,Ce,Ke,bt,Ve,Ae,Lt,an,$t);Ne.pixelStorei(V.UNPACK_ROW_LENGTH,En),Ne.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t),Ne.pixelStorei(V.UNPACK_SKIP_PIXELS,zn),Ne.pixelStorei(V.UNPACK_SKIP_ROWS,Vn),Ne.pixelStorei(V.UNPACK_SKIP_IMAGES,yt),Ce===0&&W.generateMipmaps&&V.generateMipmap(Be),Ne.unbindTexture()},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Ne.unbindTexture()},this.resetState=function(){ce=0,de=0,j=null,Ne.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function k_(s,e){if(e===TS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===sh||e===f0){let t=s.getIndex();if(t===null){const c=[],d=s.getAttribute("position");if(d!==void 0){for(let f=0;f<d.count;f++)c.push(f);s.setIndex(c),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,o=[];if(e===sh)for(let c=1;c<=i;c++)o.push(t.getX(0)),o.push(t.getX(c)),o.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(o.push(t.getX(c)),o.push(t.getX(c+1)),o.push(t.getX(c+2))):(o.push(t.getX(c+2)),o.push(t.getX(c+1)),o.push(t.getX(c)));o.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(o),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function hA(s){const e=new Map,t=new Map,i=s.clone();return B0(s,i,function(o,a){e.set(a,o),t.set(o,a)}),i.traverse(function(o){if(!o.isSkinnedMesh)return;const a=o,c=e.get(o),d=c.skeleton.bones;a.skeleton=c.skeleton.clone(),a.bindMatrix.copy(c.bindMatrix),a.skeleton.bones=d.map(function(f){return t.get(f)}),a.bind(a.skeleton,a.bindMatrix)}),i}function B0(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)B0(s.children[i],e.children[i],t)}class pA extends Bo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xA(t)}),this.register(function(t){return new yA(t)}),this.register(function(t){return new CA(t)}),this.register(function(t){return new PA(t)}),this.register(function(t){return new NA(t)}),this.register(function(t){return new MA(t)}),this.register(function(t){return new EA(t)}),this.register(function(t){return new TA(t)}),this.register(function(t){return new bA(t)}),this.register(function(t){return new vA(t)}),this.register(function(t){return new wA(t)}),this.register(function(t){return new SA(t)}),this.register(function(t){return new RA(t)}),this.register(function(t){return new AA(t)}),this.register(function(t){return new gA(t)}),this.register(function(t){return new B_(t,Et.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new B_(t,Et.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new LA(t)})}load(e,t,i,o){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=za.extractUrlBase(e);c=za.resolveURL(h,this.path)}else c=za.extractUrlBase(e);this.manager.itemStart(e);const d=function(h){o?o(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},f=new R0(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{a.parse(h,c,function(m){t(m),a.manager.itemEnd(e)},d)}catch(m){d(m)}},i,d)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,o){let a;const c={},d={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===z0){try{c[Et.KHR_BINARY_GLTF]=new IA(e)}catch(g){o&&o(g);return}a=JSON.parse(c[Et.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new XA(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),d[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case Et.KHR_MATERIALS_UNLIT:c[g]=new _A;break;case Et.KHR_DRACO_MESH_COMPRESSION:c[g]=new DA(a,this.dracoLoader);break;case Et.KHR_TEXTURE_TRANSFORM:c[g]=new UA;break;case Et.KHR_MESH_QUANTIZATION:c[g]=new FA;break;default:_.indexOf(g)>=0&&d[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(c),h.setPlugins(d),h.parse(i,o)}parseAsync(e,t){const i=this;return new Promise(function(o,a){i.parse(e,t,o,a)})}}function mA(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function on(s,e,t){const i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gA{constructor(e){this.parser=e,this.name=Et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,o=t.length;i<o;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let o=t.cache.get(i);if(o)return o;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const m=new dt(16777215);f.color!==void 0&&m.setRGB(f.color[0],f.color[1],f.color[2],ii);const g=f.range!==void 0?f.range:0;switch(f.type){case"directional":h=new P0(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new dh(m),h.distance=g;break;case"spot":h=new eE(m),h.distance=g,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,h.angle=f.spot.outerConeAngle,h.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return h.position.set(0,0,0),Gi(h,f),f.intensity!==void 0&&(h.intensity=f.intensity),h.name=t.createUniqueName(f.name||"light_"+e),o=Promise.resolve(h),t.cache.add(i,o),o}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],d=(a.extensions&&a.extensions[this.name]||{}).light;return d===void 0?null:this._loadLight(d).then(function(f){return i._getNodeRef(t.cache,d,f)})}}class _A{constructor(){this.name=Et.KHR_MATERIALS_UNLIT}getMaterialType(){return Ps}extendParams(e,t,i){const o=[];e.color=new dt(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],ii),e.opacity=c[3]}a.baseColorTexture!==void 0&&o.push(i.assignTexture(e,"map",a.baseColorTexture,wn))}return Promise.all(o)}}class vA{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class xA{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return on(this.parser,e,this.name)!==null?nr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&o.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(o.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new at(a,a)}return Promise.all(o)}}class yA{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_DISPERSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?nr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class SA{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return on(this.parser,e,this.name)!==null?nr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&o.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&o.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(o)}}class MA{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SHEEN}getMaterialType(e){return on(this.parser,e,this.name)!==null?nr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];if(t.sheenColor=new dt(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ii)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&o.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,wn)),i.sheenRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(o)}}class EA{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?nr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&o.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(o)}}class TA{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_VOLUME}getMaterialType(e){return on(this.parser,e,this.name)!==null?nr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&o.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const a=i.attenuationColor||[1,1,1];return t.attenuationColor=new dt().setRGB(a[0],a[1],a[2],ii),Promise.all(o)}}class bA{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IOR}getMaterialType(e){return on(this.parser,e,this.name)!==null?nr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class wA{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SPECULAR}getMaterialType(e){return on(this.parser,e,this.name)!==null?nr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&o.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const a=i.specularColorFactor||[1,1,1];return t.specularColor=new dt().setRGB(a[0],a[1],a[2],ii),i.specularColorTexture!==void 0&&o.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,wn)),Promise.all(o)}}class AA{constructor(e){this.parser=e,this.name=Et.EXT_MATERIALS_BUMP}getMaterialType(e){return on(this.parser,e,this.name)!==null?nr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&o.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(o)}}class RA{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return on(this.parser,e,this.name)!==null?nr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const o=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&o.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(o)}}class CA{constructor(e){this.parser=e,this.name=Et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,o=i.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const a=o.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class PA{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],d=o.images[c.source];let f=i.textureLoader;if(d.uri){const h=i.options.manager.getHandler(d.uri);h!==null&&(f=h)}return i.loadTextureImage(e,c.source,f)}}class NA{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],d=o.images[c.source];let f=i.textureLoader;if(d.uri){const h=i.options.manager.getHandler(d.uri);h!==null&&(f=h)}return i.loadTextureImage(e,c.source,f)}}class B_{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const o=i.extensions[this.name],a=this.parser.getDependency("buffer",o.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(d){const f=o.byteOffset||0,h=o.byteLength||0,m=o.count,g=o.byteStride,_=new Uint8Array(d,f,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,g,_,o.mode,o.filter).then(function(y){return y.buffer}):c.ready.then(function(){const y=new ArrayBuffer(m*g);return c.decodeGltfBuffer(new Uint8Array(y),m,g,_,o.mode,o.filter),y})})}else return null}}class LA{constructor(e){this.name=Et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const o=t.meshes[i.mesh];for(const h of o.primitives)if(h.mode!==hi.TRIANGLES&&h.mode!==hi.TRIANGLE_STRIP&&h.mode!==hi.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=i.extensions[this.name].attributes,d=[],f={};for(const h in c)d.push(this.parser.getDependency("accessor",c[h]).then(m=>(f[h]=m,f[h])));return d.length<1?null:(d.push(this.parser.createNodeMesh(e)),Promise.all(d).then(h=>{const m=h.pop(),g=m.isGroup?m.children:[m],_=h[0].count,y=[];for(const M of g){const w=new xt,x=new X,S=new Ii,R=new X(1,1,1),N=new TM(M.geometry,M.material,_);for(let P=0;P<_;P++)f.TRANSLATION&&x.fromBufferAttribute(f.TRANSLATION,P),f.ROTATION&&S.fromBufferAttribute(f.ROTATION,P),f.SCALE&&R.fromBufferAttribute(f.SCALE,P),N.setMatrixAt(P,w.compose(x,S,R));for(const P in f)if(P==="_COLOR_0"){const k=f[P];N.instanceColor=new ch(k.array,k.itemSize,k.normalized)}else P!=="TRANSLATION"&&P!=="ROTATION"&&P!=="SCALE"&&M.geometry.setAttribute(P,f[P]);nn.prototype.copy.call(N,M),this.parser.assignFinalMaterial(N),y.push(N)}return m.isGroup?(m.clear(),m.add(...y),m):y[0]}))}}const z0="glTF",Da=12,z_={JSON:1313821514,BIN:5130562};class IA{constructor(e){this.name=Et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Da),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==z0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-Da,a=new DataView(e,Da);let c=0;for(;c<o;){const d=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===z_.JSON){const h=new Uint8Array(e,Da+c,d);this.content=i.decode(h)}else if(f===z_.BIN){const h=Da+c;this.body=e.slice(h,h+d)}c+=d}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class DA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,o=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,d={},f={},h={};for(const m in c){const g=ph[m]||m.toLowerCase();d[g]=c[m]}for(const m in e.attributes){const g=ph[m]||m.toLowerCase();if(c[m]!==void 0){const _=i.accessors[e.attributes[m]],y=wo[_.componentType];h[g]=y.name,f[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){o.decodeDracoFile(m,function(y){for(const M in y.attributes){const w=y.attributes[M],x=f[M];x!==void 0&&(w.normalized=x)}g(y)},d,h,ii,_)})})}}class UA{constructor(){this.name=Et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class FA{constructor(){this.name=Et.KHR_MESH_QUANTIZATION}}class V0 extends Fo{constructor(e,t,i,o){super(e,t,i,o)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o*3+o;for(let c=0;c!==o;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,f=d*2,h=d*3,m=o-t,g=(i-t)/m,_=g*g,y=_*g,M=e*h,w=M-h,x=-2*y+3*_,S=y-_,R=1-x,N=S-_+g;for(let P=0;P!==d;P++){const k=c[w+P+d],L=c[w+P+f]*m,O=c[M+P+d],b=c[M+P]*m;a[P]=R*k+N*L+x*O+S*b}return a}}const OA=new Ii;class kA extends V0{interpolate_(e,t,i,o){const a=super.interpolate_(e,t,i,o);return OA.fromArray(a).normalize().toArray(a),a}}const hi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},wo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},V_={9728:hn,9729:pn,9984:s0,9985:Rc,9986:Fa,9987:yr},H_={33071:Xi,33648:Uc,10497:Co},pf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BA={CUBICSPLINE:void 0,LINEAR:ja,STEP:Ga},mf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zA(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Uh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tr})),s.DefaultMaterial}function Ts(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Gi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VA(s,e,t){let i=!1,o=!1,a=!1;for(let h=0,m=e.length;h<m;h++){const g=e[h];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(o=!0),g.COLOR_0!==void 0&&(a=!0),i&&o&&a)break}if(!i&&!o&&!a)return Promise.resolve(s);const c=[],d=[],f=[];for(let h=0,m=e.length;h<m;h++){const g=e[h];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):s.attributes.position;c.push(_)}if(o){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):s.attributes.normal;d.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):s.attributes.color;f.push(_)}}return Promise.all([Promise.all(c),Promise.all(d),Promise.all(f)]).then(function(h){const m=h[0],g=h[1],_=h[2];return i&&(s.morphAttributes.position=m),o&&(s.morphAttributes.normal=g),a&&(s.morphAttributes.color=_),s.morphTargetsRelative=!0,s})}function HA(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,o=t.length;i<o;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GA(s){let e;const t=s.extensions&&s.extensions[Et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gf(t.attributes):e=s.indices+":"+gf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,o=s.targets.length;i<o;i++)e+=":"+gf(s.targets[i]);return e}function gf(s){let e="";const t=Object.keys(s).sort();for(let i=0,o=t.length;i<o;i++)e+=t[i]+":"+s[t[i]]+";";return e}function mh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jA(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const WA=new xt;class XA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,o=-1,a=!1,c=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const d=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(d)===!0;const f=d.match(/Version\/(\d+)/);o=i&&f?parseInt(f[1],10):-1,a=d.indexOf("Firefox")>-1,c=a?d.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&o<17||a&&c<98?this.textureLoader=new JM(this.options.manager):this.textureLoader=new rE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new R0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,o=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const d={scene:c[0][o.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:o.asset,parser:i,userData:{}};return Ts(a,d,o),Gi(d,o),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(d)})).then(function(){for(const f of d.scenes)f.updateMatrixWorld();e(d)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let o=0,a=t.length;o<a;o++){const c=t[o].joints;for(let d=0,f=c.length;d<f;d++)e[c[d]].isBone=!0}for(let o=0,a=e.length;o<a;o++){const c=e[o];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const o=i.clone(),a=(c,d)=>{const f=this.associations.get(c);f!=null&&this.associations.set(d,f);for(const[h,m]of c.children.entries())a(m,d.children[h])};return a(i,o),o.name+="_instance_"+e.uses[t]++,o}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const o=e(t[i]);if(o)return o}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let o=0;o<t.length;o++){const a=e(t[o]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let o=this.cache.get(i);if(!o){switch(e){case"scene":o=this.loadScene(t);break;case"node":o=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":o=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":o=this.loadAccessor(t);break;case"bufferView":o=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":o=this.loadBuffer(t);break;case"material":o=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":o=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":o=this.loadSkin(t);break;case"animation":o=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":o=this.loadCamera(t);break;default:if(o=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(i,o)}return o}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(o.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Et.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(a,c){i.load(za.resolveURL(t.uri,o.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const o=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+o)})}loadAccessor(e){const t=this,i=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const c=pf[o.type],d=wo[o.componentType],f=o.normalized===!0,h=new d(o.count*c);return Promise.resolve(new Bn(h,c,f))}const a=[];return o.bufferView!==void 0?a.push(this.getDependency("bufferView",o.bufferView)):a.push(null),o.sparse!==void 0&&(a.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(a).then(function(c){const d=c[0],f=pf[o.type],h=wo[o.componentType],m=h.BYTES_PER_ELEMENT,g=m*f,_=o.byteOffset||0,y=o.bufferView!==void 0?i.bufferViews[o.bufferView].byteStride:void 0,M=o.normalized===!0;let w,x;if(y&&y!==g){const S=Math.floor(_/y),R="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+S+":"+o.count;let N=t.cache.get(R);N||(w=new h(d,S*y,o.count*y/m),N=new _M(w,y/m),t.cache.add(R,N)),x=new Ph(N,f,_%y/m,M)}else d===null?w=new h(o.count*f):w=new h(d,_,o.count*f),x=new Bn(w,f,M);if(o.sparse!==void 0){const S=pf.SCALAR,R=wo[o.sparse.indices.componentType],N=o.sparse.indices.byteOffset||0,P=o.sparse.values.byteOffset||0,k=new R(c[1],N,o.sparse.count*S),L=new h(c[2],P,o.sparse.count*f);d!==null&&(x=new Bn(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let O=0,b=k.length;O<b;O++){const D=k[O];if(x.setX(D,L[O*f]),f>=2&&x.setY(D,L[O*f+1]),f>=3&&x.setZ(D,L[O*f+2]),f>=4&&x.setW(D,L[O*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=M}return x})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let d=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(d=f)}return this.loadTextureImage(e,a,d)}loadTextureImage(e,t,i){const o=this,a=this.json,c=a.textures[e],d=a.images[t],f=(d.uri||d.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const h=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||d.name||"",m.name===""&&typeof d.uri=="string"&&d.uri.startsWith("data:image/")===!1&&(m.name=d.uri);const _=(a.samplers||{})[c.sampler]||{};return m.magFilter=V_[_.magFilter]||pn,m.minFilter=V_[_.minFilter]||yr,m.wrapS=H_[_.wrapS]||Co,m.wrapT=H_[_.wrapT]||Co,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==hn&&m.minFilter!==pn,o.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[f]=h,h}loadImageSource(e,t){const i=this,o=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=o.images[e],d=self.URL||self.webkitURL;let f=c.uri||"",h=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(g){h=!0;const _=new Blob([g],{type:c.mimeType});return f=d.createObjectURL(_),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(f).then(function(g){return new Promise(function(_,y){let M=_;t.isImageBitmapLoader===!0&&(M=function(w){const x=new Sn(w);x.needsUpdate=!0,_(x)}),t.load(za.resolveURL(g,a.path),M,void 0,y)})}).then(function(g){return h===!0&&d.revokeObjectURL(f),Gi(g,c),g.userData.mimeType=c.mimeType||jA(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,o){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[Et.KHR_TEXTURE_TRANSFORM]){const d=i.extensions!==void 0?i.extensions[Et.KHR_TEXTURE_TRANSFORM]:void 0;if(d){const f=a.associations.get(c);c=a.extensions[Et.KHR_TEXTURE_TRANSFORM].extendTexture(c,d),a.associations.set(c,f)}}return o!==void 0&&(c.colorSpace=o),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const o=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const d="PointsMaterial:"+i.uuid;let f=this.cache.get(d);f||(f=new M0,$i.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(d,f)),i=f}else if(e.isLine){const d="LineBasicMaterial:"+i.uuid;let f=this.cache.get(d);f||(f=new S0,$i.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(d,f)),i=f}if(o||a||c){let d="ClonedMaterial:"+i.uuid+":";o&&(d+="derivative-tangents:"),a&&(d+="vertex-colors:"),c&&(d+="flat-shading:");let f=this.cache.get(d);f||(f=i.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),o&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(d,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return Uh}loadMaterial(e){const t=this,i=this.json,o=this.extensions,a=i.materials[e];let c;const d={},f=a.extensions||{},h=[];if(f[Et.KHR_MATERIALS_UNLIT]){const g=o[Et.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),h.push(g.extendParams(d,a,t))}else{const g=a.pbrMetallicRoughness||{};if(d.color=new dt(1,1,1),d.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;d.color.setRGB(_[0],_[1],_[2],ii),d.opacity=_[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(d,"map",g.baseColorTexture,wn)),d.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,d.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(d,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(d,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,d)})))}a.doubleSided===!0&&(d.side=Wi);const m=a.alphaMode||mf.OPAQUE;if(m===mf.BLEND?(d.transparent=!0,d.depthWrite=!1):(d.transparent=!1,m===mf.MASK&&(d.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Ps&&(h.push(t.assignTexture(d,"normalMap",a.normalTexture)),d.normalScale=new at(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;d.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==Ps&&(h.push(t.assignTexture(d,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(d.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Ps){const g=a.emissiveFactor;d.emissive=new dt().setRGB(g[0],g[1],g[2],ii)}return a.emissiveTexture!==void 0&&c!==Ps&&h.push(t.assignTexture(d,"emissiveMap",a.emissiveTexture,wn)),Promise.all(h).then(function(){const g=new c(d);return a.name&&(g.name=a.name),Gi(g,a),t.associations.set(g,{materials:e}),a.extensions&&Ts(o,g,a),g})}createUniqueName(e){const t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,o=this.primitiveCache;function a(d){return i[Et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(d,t).then(function(f){return G_(f,d,t)})}const c=[];for(let d=0,f=e.length;d<f;d++){const h=e[d],m=GA(h),g=o[m];if(g)c.push(g.promise);else{let _;h.extensions&&h.extensions[Et.KHR_DRACO_MESH_COMPRESSION]?_=a(h):_=G_(new _i,h,t),o[m]={primitive:h,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,o=this.extensions,a=i.meshes[e],c=a.primitives,d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f].material===void 0?zA(this.cache):this.getDependency("material",c[f].material);d.push(m)}return d.push(t.loadGeometries(c)),Promise.all(d).then(function(f){const h=f.slice(0,f.length-1),m=f[f.length-1],g=[];for(let y=0,M=m.length;y<M;y++){const w=m[y],x=c[y];let S;const R=h[y];if(x.mode===hi.TRIANGLES||x.mode===hi.TRIANGLE_STRIP||x.mode===hi.TRIANGLE_FAN||x.mode===void 0)S=a.isSkinnedMesh===!0?new SM(w,R):new ri(w,R),S.isSkinnedMesh===!0&&S.normalizeSkinWeights(),x.mode===hi.TRIANGLE_STRIP?S.geometry=k_(S.geometry,f0):x.mode===hi.TRIANGLE_FAN&&(S.geometry=k_(S.geometry,sh));else if(x.mode===hi.LINES)S=new RM(w,R);else if(x.mode===hi.LINE_STRIP)S=new Dh(w,R);else if(x.mode===hi.LINE_LOOP)S=new CM(w,R);else if(x.mode===hi.POINTS)S=new PM(w,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(S.geometry.morphAttributes).length>0&&HA(S,a),S.name=t.createUniqueName(a.name||"mesh_"+e),Gi(S,a),x.extensions&&Ts(o,S,x),t.assignFinalMaterial(S),g.push(S)}for(let y=0,M=g.length;y<M;y++)t.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return a.extensions&&Ts(o,g[0],a),g[0];const _=new Cs;a.extensions&&Ts(o,_,a),t.associations.set(_,{meshes:e});for(let y=0,M=g.length;y<M;y++)_.add(g[y]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],o=i[i.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new kn(p0.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):i.type==="orthographic"&&(t=new Xc(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Gi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let o=0,a=t.joints.length;o<a;o++)i.push(this._loadNodeShallow(t.joints[o]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(o){const a=o.pop(),c=o,d=[],f=[];for(let h=0,m=c.length;h<m;h++){const g=c[h];if(g){d.push(g);const _=new xt;a!==null&&_.fromArray(a.array,h*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Lh(d,f)})}loadAnimation(e){const t=this.json,i=this,o=t.animations[e],a=o.name?o.name:"animation_"+e,c=[],d=[],f=[],h=[],m=[];for(let g=0,_=o.channels.length;g<_;g++){const y=o.channels[g],M=o.samplers[y.sampler],w=y.target,x=w.node,S=o.parameters!==void 0?o.parameters[M.input]:M.input,R=o.parameters!==void 0?o.parameters[M.output]:M.output;w.node!==void 0&&(c.push(this.getDependency("node",x)),d.push(this.getDependency("accessor",S)),f.push(this.getDependency("accessor",R)),h.push(M),m.push(w))}return Promise.all([Promise.all(c),Promise.all(d),Promise.all(f),Promise.all(h),Promise.all(m)]).then(function(g){const _=g[0],y=g[1],M=g[2],w=g[3],x=g[4],S=[];for(let N=0,P=_.length;N<P;N++){const k=_[N],L=y[N],O=M[N],b=w[N],D=x[N];if(k===void 0)continue;k.updateMatrix&&k.updateMatrix();const Y=i._createAnimationTracks(k,L,O,b,D);if(Y)for(let F=0;F<Y.length;F++)S.push(Y[F])}const R=new WM(a,void 0,S);return Gi(R,o),R})}createNodeMesh(e){const t=this.json,i=this,o=t.nodes[e];return o.mesh===void 0?null:i.getDependency("mesh",o.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,o.mesh,a);return o.weights!==void 0&&c.traverse(function(d){if(d.isMesh)for(let f=0,h=o.weights.length;f<h;f++)d.morphTargetInfluences[f]=o.weights[f]}),c})}loadNode(e){const t=this.json,i=this,o=t.nodes[e],a=i._loadNodeShallow(e),c=[],d=o.children||[];for(let h=0,m=d.length;h<m;h++)c.push(i.getDependency("node",d[h]));const f=o.skin===void 0?Promise.resolve(null):i.getDependency("skin",o.skin);return Promise.all([a,Promise.all(c),f]).then(function(h){const m=h[0],g=h[1],_=h[2];_!==null&&m.traverse(function(y){y.isSkinnedMesh&&y.bind(_,WA)});for(let y=0,M=g.length;y<M;y++)m.add(g[y]);if(m.userData.pivot!==void 0&&g.length>0){const y=m.userData.pivot,M=g[0];m.pivot=new X().fromArray(y),m.position.x-=y[0],m.position.y-=y[1],m.position.z-=y[2],M.position.set(0,0,0),delete m.userData.pivot}return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?o.createUniqueName(a.name):"",d=[],f=o._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return f&&d.push(f),a.camera!==void 0&&d.push(o.getDependency("camera",a.camera).then(function(h){return o._getNodeRef(o.cameraCache,a.camera,h)})),o._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){d.push(h)}),this.nodeCache[e]=Promise.all(d).then(function(h){let m;if(a.isBone===!0?m=new y0:h.length>1?m=new Cs:h.length===1?m=h[0]:m=new nn,m!==h[0])for(let g=0,_=h.length;g<_;g++)m.add(h[g]);if(a.name&&(m.userData.name=a.name,m.name=c),Gi(m,a),a.extensions&&Ts(i,m,a),a.matrix!==void 0){const g=new xt;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);if(!o.associations.has(m))o.associations.set(m,{});else if(a.mesh!==void 0&&o.meshCache.refs[a.mesh]>1){const g=o.associations.get(m);o.associations.set(m,{...g})}return o.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],o=this,a=new Cs;i.name&&(a.name=o.createUniqueName(i.name)),Gi(a,i),i.extensions&&Ts(t,a,i);const c=i.nodes||[],d=[];for(let f=0,h=c.length;f<h;f++)d.push(o.getDependency("node",c[f]));return Promise.all(d).then(function(f){for(let m=0,g=f.length;m<g;m++){const _=f[m];_.parent!==null?a.add(hA(_)):a.add(_)}const h=m=>{const g=new Map;for(const[_,y]of o.associations)(_ instanceof $i||_ instanceof Sn)&&g.set(_,y);return m.traverse(_=>{const y=o.associations.get(_);y!=null&&g.set(_,y)}),g};return o.associations=h(a),a})}_createAnimationTracks(e,t,i,o,a){const c=[],d=e.name?e.name:e.uuid,f=[];function h(y){y.morphTargetInfluences&&f.push(y.name?y.name:y.uuid)}Jr[a.path]===Jr.weights?(h(e),e.isGroup&&e.children.forEach(h)):f.push(d);let m;switch(Jr[a.path]){case Jr.weights:m=Io;break;case Jr.rotation:m=Do;break;case Jr.translation:case Jr.scale:m=Uo;break;default:switch(i.itemSize){case 1:m=Io;break;case 2:case 3:default:m=Uo;break}break}const g=o.interpolation!==void 0?BA[o.interpolation]:ja,_=this._getArrayFromAccessor(i);for(let y=0,M=f.length;y<M;y++){const w=new m(f[y]+"."+Jr[a.path],t.array,_,g);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(w),c.push(w)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=mh(t.constructor),o=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)o[a]=t[a]*i;t=o}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const o=this instanceof Do?kA:V0;return new o(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YA(s,e,t){const i=e.attributes,o=new er;if(i.POSITION!==void 0){const d=t.json.accessors[i.POSITION],f=d.min,h=d.max;if(f!==void 0&&h!==void 0){if(o.set(new X(f[0],f[1],f[2]),new X(h[0],h[1],h[2])),d.normalized){const m=mh(wo[d.componentType]);o.min.multiplyScalar(m),o.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const d=new X,f=new X;for(let h=0,m=a.length;h<m;h++){const g=a[h];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],y=_.min,M=_.max;if(y!==void 0&&M!==void 0){if(f.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),f.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),f.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),_.normalized){const w=mh(wo[_.componentType]);f.multiplyScalar(w)}d.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(d)}s.boundingBox=o;const c=new tr;o.getCenter(c.center),c.radius=o.min.distanceTo(o.max)/2,s.boundingSphere=c}function G_(s,e,t){const i=e.attributes,o=[];function a(c,d){return t.getDependency("accessor",c).then(function(f){s.setAttribute(d,f)})}for(const c in i){const d=ph[c]||c.toLowerCase();d in s.attributes||o.push(a(i[c],d))}if(e.indices!==void 0&&!s.index){const c=t.getDependency("accessor",e.indices).then(function(d){s.setIndex(d)});o.push(c)}return Tt.workingColorSpace!==ii&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`),Gi(s,e),YA(s,e,t),Promise.all(o).then(function(){return e.targets!==void 0?VA(s,e.targets,t):s})}const j_={type:"change"},Bh={type:"start"},H0={type:"end"},wc=new Ya,W_=new Qr,KA=Math.cos(70*p0.DEG2RAD),fn=new X,Kn=2*Math.PI,kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_f=1e-6;class qA extends gE{constructor(e,t=null){super(e,t),this.state=kt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Eo.ROTATE,MIDDLE:Eo.DOLLY,RIGHT:Eo.PAN},this.touches={ONE:Mo.ROTATE,TWO:Mo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Ii,this._lastTargetPosition=new X,this._quat=new Ii().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new f_,this._sphericalDelta=new f_,this._scale=1,this._panOffset=new X,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new X,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ZA.bind(this),this._onPointerDown=$A.bind(this),this._onPointerUp=JA.bind(this),this._onContextMenu=sR.bind(this),this._onMouseWheel=tR.bind(this),this._onKeyDown=nR.bind(this),this._onTouchStart=iR.bind(this),this._onTouchMove=rR.bind(this),this._onMouseDown=QA.bind(this),this._onMouseMove=eR.bind(this),this._interceptControlDown=oR.bind(this),this._interceptControlUp=aR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(j_),this.update(),this.state=kt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;fn.copy(t).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=Kn:i>Math.PI&&(i-=Kn),o<-Math.PI?o+=Kn:o>Math.PI&&(o-=Kn),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),t.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const d=fn.length();c=this._clampDistance(d*this._scale);const f=d-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(d),this.object.updateMatrixWorld(),c=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(wc.origin.copy(this.object.position),wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wc.direction))<KA?this.object.lookAt(this.target):(W_.setFromNormalAndCoplanarPoint(this.object.up,this.target),wc.intersectPlane(W_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>_f||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_f||this._lastTargetPosition.distanceToSquared(this.target)>_f?(this.dispatchEvent(j_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){fn.setFromMatrixColumn(t,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,t){this.screenSpacePanning===!0?fn.setFromMatrixColumn(t,1):(fn.setFromMatrixColumn(t,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;fn.copy(o).sub(this.target);let a=fn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,c=i.width,d=i.height;this._mouse.x=o/c*2-1,this._mouse.y=-(a/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(c,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $A(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ZA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function JA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(H0),this.state=kt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function QA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Eo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=kt.DOLLY;break;case Eo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=kt.ROTATE}break;case Eo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=kt.PAN}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(Bh)}function eR(s){switch(this.state){case kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function tR(s){this.enabled===!1||this.enableZoom===!1||this.state!==kt.NONE||(s.preventDefault(),this.dispatchEvent(Bh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(H0))}function nR(s){this.enabled!==!1&&this._handleKeyDown(s)}function iR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Mo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=kt.TOUCH_ROTATE;break;case Mo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=kt.TOUCH_PAN;break;default:this.state=kt.NONE}break;case 2:switch(this.touches.TWO){case Mo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=kt.TOUCH_DOLLY_PAN;break;case Mo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=kt.TOUCH_DOLLY_ROTATE;break;default:this.state=kt.NONE}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(Bh)}function rR(s){switch(this._trackPointer(s),this.state){case kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=kt.NONE}}function sR(s){this.enabled!==!1&&s.preventDefault()}function oR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aR(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const lR={glasses_1:"glasses_1.glb",glasses_2:"glasses_2.glb",glasses_3:"glasses_3.glb",cafe:"cafe.glb",coffeemachine:"coffeemachine.glb",coffeegrinder:"coffeegrinder.glb",coffeepot:"coffeepot.glb",bag:"bag.glb",kettle:"kettle.glb",handdrip:"handdrip.glb",disposablecup:"disposablecup.glb",chair_table:"chair_table.glb"},G0=Object.fromEntries(Object.entries(lR).map(([s,e])=>[s,`/3d_object_portfolio/glb_files/${e}`])),j0=new Set(Object.keys(G0)),cR="portfolio_glb",Qi="models",is="videos";function Is(){return new Promise((s,e)=>{const t=indexedDB.open(cR,1);t.onupgradeneeded=()=>{const i=t.result;i.objectStoreNames.contains(Qi)||i.createObjectStore(Qi),i.objectStoreNames.contains(is)||i.createObjectStore(is)},t.onsuccess=()=>s(t.result),t.onerror=()=>e(t.error)})}async function uR(s,e){const t=await Is(),i=await e.arrayBuffer();return new Promise((o,a)=>{const c=t.transaction(Qi,"readwrite");c.objectStore(Qi).put({buf:i,name:e.name},s),c.oncomplete=()=>o(),c.onerror=()=>a(c.error)})}async function dR(s){const e=await Is();return new Promise(t=>{const i=e.transaction(Qi,"readonly").objectStore(Qi).get(s);i.onsuccess=()=>{const o=i.result;if(!o)return t(null);t({url:URL.createObjectURL(new Blob([o.buf],{type:"model/gltf-binary"})),name:o.name})},i.onerror=()=>t(null)})}function X_(s){return j0.has(s)?{url:G0[s],name:`${s}.glb`}:null}async function fR(s){const e=await Is();return new Promise(t=>{const i=e.transaction(is,"readonly").objectStore(is).get(s);i.onsuccess=()=>{const o=i.result;if(!o)return t(null);t({url:URL.createObjectURL(new Blob([o.buf],{type:"video/mp4"})),name:o.name})},i.onerror=()=>t(null)})}function hR(s){try{const e=localStorage.getItem(`meta_${s}`);return e?JSON.parse(e):{}}catch{return{}}}async function pR(s){const e=await Is();return new Promise(t=>{const i=e.transaction(Qi,"readwrite");i.objectStore(Qi).delete(s),i.oncomplete=()=>t()})}async function mR(){const s=await Is();return new Promise(e=>{const t=s.transaction(Qi,"readonly").objectStore(Qi).getAllKeys();t.onsuccess=()=>e(t.result),t.onerror=()=>e([])})}async function gR(s,e){const t=await Is(),i=await e.arrayBuffer();return new Promise((o,a)=>{const c=t.transaction(is,"readwrite");c.objectStore(is).put({buf:i,name:e.name},s),c.oncomplete=()=>o(),c.onerror=()=>a(c.error)})}async function _R(){const s=await Is();return new Promise(e=>{const t=s.transaction(is,"readonly").objectStore(is).getAllKeys();t.onsuccess=()=>e(t.result),t.onerror=()=>e([])})}const Dc=[{groupName:"안경 프로젝트",emoji:"👓",items:[{id:"glasses_result_gallery",title:"안경 결과 렌더링",desc:"안경 프로젝트 결과 이미지와 영상",thumb:"/3d_object_portfolio/images/glasses/1.png",mediaType:"gallery",galleryImages:["/3d_object_portfolio/images/glasses/1.png","/3d_object_portfolio/images/glasses/2.png","/3d_object_portfolio/images/glasses/4.png","/3d_object_portfolio/images/glasses/5.png","/3d_object_portfolio/images/glasses/6.png","/3d_object_portfolio/images/glasses/3.png","/3d_object_portfolio/images/glasses/7.png","/3d_object_portfolio/images/glasses/8.png","/3d_object_portfolio/images/glasses/9.png","/3d_object_portfolio/images/glasses/10.png","/3d_object_portfolio/images/glasses/11.png","/3d_object_portfolio/images/glasses/12.png","/3d_object_portfolio/images/glasses/13.png","/3d_object_portfolio/images/glasses/14.png","/3d_object_portfolio/images/glasses/15.png","/3d_object_portfolio/images/glasses/16.png","/3d_object_portfolio/images/glasses/17.png","/3d_object_portfolio/images/glasses/18.png","/3d_object_portfolio/images/glasses/19.png","/3d_object_portfolio/images/glasses/20.png","/3d_object_portfolio/images/glasses/21.png","/3d_object_portfolio/images/glasses/22.png","/3d_object_portfolio/images/glasses/23.png","/3d_object_portfolio/images/glasses/24.png","/3d_object_portfolio/images/glasses/25.png","/3d_object_portfolio/images/glasses/26.png","/3d_object_portfolio/images/glasses/27.png","/3d_object_portfolio/images/glasses/28.png","/3d_object_portfolio/images/glasses/29.png"],videoLinks:["https://drive.google.com/file/d/1dTS_g03Vwdw9BfpnFqk0ZQC4ey5lu9zM/view?usp=drive_link","https://drive.google.com/file/d/1XkE5SO1fS3AC-Kcrp3KGZinesodA1TJI/view?usp=drive_link"]},{id:"glasses_1",title:"안경",desc:"기본 안경 모델링",thumb:"/3d_object_portfolio/images/glasses_1.png"},{id:"glasses_2",title:"K-style 안경",desc:"K-style 안경 모델",thumb:"/3d_object_portfolio/images/glasses_2.png"},{id:"glasses_3",title:"VR 안경",desc:"VR Glasses 모델링",thumb:"/3d_object_portfolio/images/glasses_3.png"},{id:"glass_project_process",title:"안경 제작 과정",desc:"제작 과정 설명 페이지",thumb:"/3d_object_portfolio/images/glass_project_process.png",isProcess:!0,link:"/3d_object_portfolio/glasses_project/index.html"}]},{groupName:"카페 프로젝트",emoji:"☕",items:[{id:"cafe_result_gallery",title:"카페 결과 렌더링",desc:"카페 프로젝트 결과 이미지와 영상",thumb:"/3d_object_portfolio/images/cafe/0.jpeg",mediaType:"gallery",galleryImages:["/3d_object_portfolio/images/cafe/0.jpeg","/3d_object_portfolio/images/cafe/1.jpeg","/3d_object_portfolio/images/cafe/2.jpeg","/3d_object_portfolio/images/cafe/3.jpeg","/3d_object_portfolio/images/cafe/4.jpeg","/3d_object_portfolio/images/cafe/5.jpeg","/3d_object_portfolio/images/cafe/6.jpeg"],videoLinks:["https://drive.google.com/file/d/1Gcl7gPJSkSSYWH6YBFoNTYB_78xN2WFp/view?usp=drive_link","https://drive.google.com/file/d/1buT0a9OPEFYPeK3YSYEcteHSf8nRteZb/view?usp=sharing"]},{id:"cafe",title:"카페 공간",desc:"카페 전체 공간 모델링",thumb:"/3d_object_portfolio/images/cafe.jpeg"},{id:"coffeemachine",title:"Coffee Machine",desc:"커피머신 모델링",thumb:"/3d_object_portfolio/images/coffeemachine.png"},{id:"coffeegrinder",title:"Coffee Grinder",desc:"스타일라이즈드 컨셉 커피 그라인더 모델링",thumb:"/3d_object_portfolio/images/coffeegrinder.png"},{id:"coffeepot",title:"Coffee Pot",desc:"스타일라이즈드 컨셉 커피 포트 모델링",thumb:"/3d_object_portfolio/images/coffeepot.png"},{id:"bag",title:"Coffee Bag",desc:"스타일라이즈드 컨셉 커피 백 모델링",thumb:"/3d_object_portfolio/images/bag.png"},{id:"kettle",title:"Kettle",desc:"스타일라이즈드 컨셉 주전자 모델링",thumb:"/3d_object_portfolio/images/kettle.png"},{id:"handdrip",title:"Handdrip Coffee",desc:"스타일라이즈드 컨셉 핸드드립 커피 모델링",thumb:"/3d_object_portfolio/images/handdrip.png"},{id:"disposablecup",title:"일회용 컵",desc:"스타일라이즈드 컨셉 일회용 컵 모델링",thumb:"/3d_object_portfolio/images/disposablecup.png"},{id:"chair_table",title:"의자 · 테이블",desc:"스타일라이즈드 컨셉 의자, 테이블 모델링",thumb:"/3d_object_portfolio/images/chair_table.png"},{id:"cafe_project_process",title:"카페 공간 제작 과정",desc:"스타일라이즈드 컨셉 공간 제작 설명 페이지",thumb:"/3d_object_portfolio/images/cafe_project_process.png",isProcess:!0,link:"/3d_object_portfolio/cafe_project/index.html"}]},{groupName:"게이밍룸 프로젝트",emoji:"🎮",items:[{id:"gamingroom_result_gallery",title:"게이밍룸 결과 렌더링",desc:"게이밍룸 프로젝트 이미지 갤러리",thumb:"/3d_object_portfolio/images/gamingroom/1.jpeg",mediaType:"gallery",galleryImages:["/3d_object_portfolio/images/gamingroom/1.jpeg","/3d_object_portfolio/images/gamingroom/2.jpeg","/3d_object_portfolio/images/gamingroom/3.jpeg","/3d_object_portfolio/images/gamingroom/4.jpeg","/3d_object_portfolio/images/gamingroom/5.jpeg","/3d_object_portfolio/images/gamingroom/6.jpeg","/3d_object_portfolio/images/gamingroom/7.jpeg","/3d_object_portfolio/images/gamingroom/8.jpeg","/3d_object_portfolio/images/gamingroom/9.jpeg","/3d_object_portfolio/images/gamingroom/10.jpeg","/3d_object_portfolio/images/gamingroom/11.jpeg","/3d_object_portfolio/images/gamingroom/12.jpeg"]}]},{groupName:"무대 디자인 프로젝트",emoji:"🎭",items:[{id:"stage_result_gallery",title:"무대 결과 렌더링",desc:"무대 디자인 프로젝트 이미지 갤러리",thumb:"/3d_object_portfolio/images/stage/1.jpeg",mediaType:"gallery",galleryImages:["/3d_object_portfolio/images/stage/1.jpeg","/3d_object_portfolio/images/stage/2.jpeg","/3d_object_portfolio/images/stage/B.jpeg","/3d_object_portfolio/images/stage/H.jpeg","/3d_object_portfolio/images/stage/J.jpeg"]}]},{groupName:"개발 프로젝트 아카이브",emoji:"🗃️",items:[{id:"dev_archive",title:"개발 프로젝트 아카이브",desc:"진행 해왔던 유니티 개발 프로젝트들을 볼 수 있습니다. (외부 링크)",thumb:"/3d_object_portfolio/images/dev.jpg",link:"https://kaput-muskox-1f4.notion.site/2a3a13adf6c48050b9b5cfe097165b8c"}]}],vR=[{name:"Blender"},{name:"Three.js"},{name:"Figma"},{name:"Photoshop"},{name:"After Effects"},{name:"Premiere Pro"}];function xR({glbUrl:s,autoRotate:e}){const t=Mt.useRef(null),i=Mt.useRef(null),o=Mt.useRef(!1),[a,c]=Mt.useState(null);return Mt.useEffect(()=>{o.current=e},[e]),Mt.useEffect(()=>{const d=t.current;if(!d)return;const f=new fA({canvas:d,antialias:!0,alpha:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.toneMapping=vh,f.toneMappingExposure=1.2;const h=new hM,m=new kn(45,1,.01,1e3);m.position.set(0,1,5);const g=new qA(m,d);g.enablePan=!1,g.enableDamping=!0,g.dampingFactor=.06,g.minDistance=.5,g.maxDistance=20,h.add(new iE(16777215,.5));const _=new P0(16774624,2.5);_.position.set(5,8,5),h.add(_);const y=new dh(13936723,1.5,30);y.position.set(-5,3,-5),h.add(y);const M=new dh(7255497,.8,20);M.position.set(5,-3,5),h.add(M);const w=new ResizeObserver(()=>{const R=d.clientWidth,N=d.clientHeight;f.setSize(R,N,!1),m.aspect=R/N,m.updateProjectionMatrix()});w.observe(d),f.setSize(d.clientWidth,d.clientHeight,!1),m.aspect=d.clientWidth/d.clientHeight,m.updateProjectionMatrix();let x=0;const S=()=>{var R;x=requestAnimationFrame(S),g.update(),o.current&&((R=i.current)!=null&&R.model)&&(i.current.model.rotation.y+=.005),f.render(h,m)};return S(),i.current={renderer:f,scene:h,camera:m,controls:g,model:null,animId:x},()=>{cancelAnimationFrame(x),w.disconnect(),f.dispose(),i.current=null}},[]),Mt.useEffect(()=>{const d=i.current;if(!d)return;c(null);const f=typeof s=="string"?s.trim():s!=null?String(s).trim():"";if(!f){c(`3D 모델 로드 URL이 유효하지 않습니다: ${String(s)}`);return}d.model&&(d.scene.remove(d.model),d.model=null),new pA().load(f,h=>{const m=h.scene,g=new er().setFromObject(m),_=g.getCenter(new X),y=g.getSize(new X),M=2.5/Math.max(y.x,y.y,y.z);m.scale.setScalar(M),m.position.sub(_.multiplyScalar(M)),d.scene.add(m),d.model=m},void 0,h=>{console.error("GLTFLoader 상세 에러:",h);const m=h instanceof Error?h.message:String(h);c(`3D 모델 로드 실패: ${m}`)})},[s]),G.jsxs("div",{className:"w-full h-full min-h-[320px] relative",children:[G.jsx("canvas",{ref:t,className:"w-full h-full block",style:{touchAction:"none",display:"block"}}),a&&G.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-background/90 text-sm text-foreground p-4 text-center",children:a})]})}function yR({item:s,glbData:e,videoData:t,meta:i,editMode:o,onClose:a,onSaveMeta:c}){var w;const[d,f]=Mt.useState(!1),[h,m]=Mt.useState(i||{}),[g,_]=Mt.useState(0),[y,M]=Mt.useState(null);return Mt.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),Mt.useEffect(()=>{const x=S=>{S.key==="Escape"&&(y?M(null):a())};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[a,y]),Mt.useEffect(()=>{m(i||{}),_(0),M(null)},[i,s.id]),G.jsxs("div",{className:"fixed inset-0 z-[100] bg-background/80 backdrop-blur-lg flex items-center justify-center p-4 md:p-8 transition-opacity",onClick:x=>{x.target===x.currentTarget&&a()},children:[G.jsxs("div",{className:"relative w-full max-w-5xl bg-[#0a0a10]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden",children:[G.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-white/5 shrink-0 bg-white/[0.02]",children:[G.jsxs("div",{className:"flex items-center gap-4",children:[G.jsx("h3",{className:"font-['Fraunces'] font-medium text-foreground text-2xl tracking-wide",children:s.title}),e&&G.jsxs("span",{className:"flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-white/80 tracking-widest uppercase bg-white/5 border border-white/10 rounded-full px-3 py-1",children:[G.jsx(K_,{size:12})," 3D"]}),!e&&t&&G.jsxs("span",{className:"flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-white/80 tracking-widest uppercase bg-white/5 border border-white/10 rounded-full px-3 py-1",children:[G.jsx(vf,{size:12})," VIDEO"]})]}),G.jsx("div",{className:"flex items-center gap-3",children:G.jsx("button",{onClick:a,className:"p-2 text-muted-foreground hover:text-white hover:bg-white/10 rounded-full transition-all",children:G.jsx(xf,{size:20})})})]}),G.jsx("div",{className:"flex-1 overflow-auto p-6 scrollbar-hide",children:G.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[G.jsxs("div",{className:"col-span-1 lg:col-span-2 flex flex-col gap-4",children:[G.jsx("div",{className:"relative h-[320px] md:h-[450px] lg:h-[500px] bg-[#050508] border border-white/5 rounded-xl flex items-center justify-center overflow-hidden shadow-inner",children:s.mediaType==="gallery"?s.galleryImages&&s.galleryImages.length>0?G.jsx("button",{type:"button",onClick:()=>{var S;const x=(S=s.galleryImages)==null?void 0:S[g];x&&M({type:"image",src:x,index:g})},className:"w-full h-full group",children:G.jsx("img",{src:((w=s.galleryImages)==null?void 0:w[g])??"",alt:`${s.title} ${g+1}`,className:"w-full h-full object-contain cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.02]"})}):G.jsx("div",{className:"flex items-center justify-center text-muted-foreground/50 h-full font-light",children:"이미지 갤러리가 없습니다"}):e?G.jsx(xR,{glbUrl:e.url,autoRotate:d}):t?G.jsx("video",{src:t.url,controls:!0,className:"w-full h-full object-contain rounded-lg"}):G.jsx("div",{className:"flex items-center justify-center text-muted-foreground/50 h-full font-light",children:"미디어가 없습니다"})}),s.mediaType==="gallery"&&s.galleryImages&&s.galleryImages.length>1&&G.jsx("div",{className:"grid grid-cols-5 md:grid-cols-8 gap-3 mt-2",children:s.galleryImages.map((x,S)=>G.jsx("button",{type:"button",onClick:()=>_(S),className:`relative overflow-hidden rounded-lg aspect-square border-2 transition-all duration-200 ${S===g?"border-primary opacity-100 scale-105 shadow-lg":"border-transparent opacity-40 hover:opacity-100 hover:scale-105 bg-black"}`,children:G.jsx("img",{src:x,alt:`${s.title} thumb ${S+1}`,className:"w-full h-full object-cover"})},x))})]}),G.jsxs("div",{className:"col-span-1 bg-[#0f0f14] border border-white/5 rounded-xl p-6 flex flex-col h-fit",children:[G.jsx("h3",{className:"font-['Fraunces'] text-2xl font-semibold mb-3",children:s.title}),G.jsx("p",{className:"font-['Figtree'] text-sm text-muted-foreground leading-relaxed mb-6",children:s.desc}),o?G.jsxs("div",{className:"flex flex-col gap-4",children:[G.jsxs("div",{className:"flex flex-col gap-1.5",children:[G.jsx("label",{className:"text-xs font-medium text-muted-foreground/70 uppercase tracking-wider",children:"Tools (쉼표 구분)"}),G.jsx("input",{value:(h.tools||[]).join(", "),onChange:x=>m({...h,tools:x.target.value.split(",").map(S=>S.trim()).filter(Boolean)}),className:"bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"})]}),G.jsxs("div",{className:"flex flex-col gap-1.5",children:[G.jsx("label",{className:"text-xs font-medium text-muted-foreground/70 uppercase tracking-wider",children:"제작 기간"}),G.jsx("input",{value:h.productionTime||"",onChange:x=>m({...h,productionTime:x.target.value}),className:"bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"})]}),G.jsxs("div",{className:"flex flex-col gap-1.5",children:[G.jsx("label",{className:"text-xs font-medium text-muted-foreground/70 uppercase tracking-wider",children:"상세 설명"}),G.jsx("textarea",{rows:6,value:h.longDesc||"",onChange:x=>m({...h,longDesc:x.target.value}),className:"bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"})]}),G.jsxs("div",{className:"flex gap-3 mt-2",children:[G.jsx("button",{onClick:()=>{c(h)},className:"flex-1 bg-white text-black font-semibold rounded-lg px-4 py-3 hover:bg-gray-200 transition-colors shadow-md",children:"저장하기"}),G.jsx("button",{onClick:()=>m(i||{}),className:"flex-1 bg-transparent border border-white/20 text-white font-medium rounded-lg px-4 py-3 hover:bg-white/5 transition-colors",children:"취소"})]})]}):G.jsxs("div",{className:"flex flex-col gap-6",children:[h.tools&&h.tools.length>0&&G.jsxs("div",{children:[G.jsx("div",{className:"text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2",children:"Tools"}),G.jsx("div",{className:"flex flex-wrap gap-2",children:h.tools.map(x=>G.jsx("span",{className:"bg-white/5 border border-white/10 rounded-md px-2.5 py-1 font-['JetBrains_Mono'] text-xs text-white/90",children:x},x))})]}),h.productionTime&&G.jsxs("div",{children:[G.jsx("div",{className:"text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-1.5",children:"Production Time"}),G.jsx("div",{className:"font-['JetBrains_Mono'] text-sm text-white/90",children:h.productionTime})]}),h.longDesc&&G.jsxs("div",{children:[G.jsx("div",{className:"text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2",children:"Description"}),G.jsx("div",{className:"font-['Figtree'] text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap",children:h.longDesc})]}),s.mediaType==="gallery"&&s.videoLinks&&s.videoLinks.length>0&&G.jsx("div",{className:"flex flex-col gap-3 mt-4 pt-4 border-t border-white/5",children:s.videoLinks.map((x,S)=>G.jsxs("a",{href:x,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-5 py-4 hover:bg-white/15 transition-all",children:[G.jsxs("span",{className:"text-sm font-medium text-white/90 group-hover:text-white",children:["프로젝트 영상 ",S+1," 보기"]}),G.jsx(vf,{size:16,className:"text-muted-foreground group-hover:text-white transition-colors"})]},x))})]})]})]})})]}),y&&G.jsx("div",{className:"fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 transition-opacity",onClick:()=>M(null),children:G.jsxs("div",{className:"relative w-full max-w-[95vw] h-full flex items-center justify-center",onClick:x=>x.stopPropagation(),children:[G.jsx("button",{type:"button",onClick:()=>M(null),className:"absolute top-4 right-4 z-20 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-white/20 backdrop-blur-md transition-all",children:G.jsx(xf,{size:24})}),y.type==="image"?G.jsxs(G.Fragment,{children:[G.jsx("button",{type:"button",disabled:y.index===0,onClick:()=>{if(y.index!=null&&s.galleryImages){const x=Math.max(0,y.index-1);M({type:"image",src:s.galleryImages[x],index:x}),_(x)}},className:"absolute left-4 md:left-8 z-20 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed",children:G.jsx(By,{size:32})}),G.jsx("img",{src:y.src,alt:"Large view",className:"max-w-full max-h-[90vh] object-contain drop-shadow-2xl"}),G.jsx("button",{type:"button",disabled:y.index==null||(s.galleryImages?y.index>=s.galleryImages.length-1:!0),onClick:()=>{if(y.index!=null&&s.galleryImages){const x=Math.min(s.galleryImages.length-1,y.index+1);M({type:"image",src:s.galleryImages[x],index:x}),_(x)}},className:"absolute right-4 md:right-8 z-20 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed",children:G.jsx(q_,{size:32})})]}):null]})})]})}function SR({editMode:s,onLogoClick:e}){const[t,i]=Mt.useState(!1),[o,a]=Mt.useState(!1);return Mt.useEffect(()=>{const c=()=>a(window.scrollY>40);return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),G.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${o?"bg-background/90 backdrop-blur-md border-b border-border":""}`,children:[G.jsxs("nav",{className:"max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between",children:[G.jsxs("button",{onClick:e,className:"font-['Fraunces'] text-xl font-light tracking-tight text-foreground select-none",style:{background:"none",border:"none",cursor:"default"},children:["JEONG YEON SU",G.jsx("span",{className:"text-primary",children:"."})]}),s&&G.jsxs("span",{className:"flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase border border-primary/50 px-3 py-1 animate-pulse",children:[G.jsx($_,{size:10})," Edit Mode"]}),G.jsx("ul",{className:"hidden md:flex items-center gap-10",children:["Works","About"].map(c=>G.jsx("li",{children:G.jsx("a",{href:`#${c.toLowerCase()}`,className:"font-['Figtree'] text-sm text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase",children:c})},c))}),G.jsx("button",{onClick:()=>i(!t),className:"md:hidden text-foreground",children:t?G.jsx(xf,{size:22}):G.jsx(Yy,{size:22})})]}),t&&G.jsx("div",{className:"md:hidden bg-card border-b border-border px-8 py-6",children:G.jsx("ul",{className:"flex flex-col gap-5",children:["Works","About"].map(c=>G.jsx("li",{children:G.jsx("a",{href:`#${c.toLowerCase()}`,onClick:()=>i(!1),className:"font-['Figtree'] text-base text-foreground tracking-widest uppercase",children:c})},c))})})]})}const MR=Object.assign({"../../images/cafe/0.jpeg":Lx,"../../images/cafe/1.jpeg":Ix,"../../images/cafe/2.jpeg":Dx,"../../images/cafe/3.jpeg":Ux,"../../images/cafe/4.jpeg":Fx,"../../images/cafe/5.jpeg":Ox,"../../images/cafe/6.jpeg":kx,"../../images/gamingroom/1.jpeg":Bx,"../../images/gamingroom/10.jpeg":zx,"../../images/gamingroom/11.jpeg":Vx,"../../images/gamingroom/12.jpeg":Hx,"../../images/gamingroom/2.jpeg":Gx,"../../images/gamingroom/3.jpeg":jx,"../../images/gamingroom/4.jpeg":Wx,"../../images/gamingroom/5.jpeg":Xx,"../../images/gamingroom/6.jpeg":Yx,"../../images/gamingroom/7.jpeg":Kx,"../../images/gamingroom/8.jpeg":qx,"../../images/gamingroom/9.jpeg":$x,"../../images/glasses/1.png":Zx,"../../images/glasses/10.png":Jx,"../../images/glasses/11.png":Qx,"../../images/glasses/12.png":ey,"../../images/glasses/13.png":ty,"../../images/glasses/14.png":ny,"../../images/glasses/15.png":iy,"../../images/glasses/16.png":ry,"../../images/glasses/17.png":sy,"../../images/glasses/18.png":oy,"../../images/glasses/19.png":ay,"../../images/glasses/2.png":ly,"../../images/glasses/20.png":cy,"../../images/glasses/21.png":uy,"../../images/glasses/22.png":dy,"../../images/glasses/23.png":fy,"../../images/glasses/24.png":hy,"../../images/glasses/25.png":py,"../../images/glasses/26.png":my,"../../images/glasses/27.png":gy,"../../images/glasses/28.png":_y,"../../images/glasses/29.png":vy,"../../images/glasses/3.png":xy,"../../images/glasses/4.png":yy,"../../images/glasses/5.png":Sy,"../../images/glasses/6.png":My,"../../images/glasses/7.png":Ey,"../../images/glasses/8.png":Ty,"../../images/glasses/9.png":by,"../../images/stage/1.jpeg":wy,"../../images/stage/2.jpeg":Ay,"../../images/stage/B.jpeg":Ry,"../../images/stage/H.jpeg":Cy,"../../images/stage/J.jpeg":Py}),bs=Object.values(MR),ER=Object.keys({"../../glb_files/bag.glb":0,"../../glb_files/cafe.glb":0,"../../glb_files/chair_table.glb":0,"../../glb_files/coffeegrinder.glb":0,"../../glb_files/coffeemachine.glb":0,"../../glb_files/coffeepot.glb":0,"../../glb_files/disposablecup.glb":0,"../../glb_files/glasses_1.glb":0,"../../glb_files/glasses_2.glb":0,"../../glb_files/glasses_3.glb":0,"../../glb_files/handdrip.glb":0,"../../glb_files/kettle.glb":0,"../../glb_files/test.glb":0}).length,TR=Object.keys({"../../images/cafe/0.jpeg":0,"../../images/cafe/1.jpeg":0,"../../images/cafe/2.jpeg":0,"../../images/cafe/3.jpeg":0,"../../images/cafe/4.jpeg":0,"../../images/cafe/5.jpeg":0,"../../images/cafe/6.jpeg":0,"../../images/gamingroom/1.jpeg":0,"../../images/gamingroom/10.jpeg":0,"../../images/gamingroom/11.jpeg":0,"../../images/gamingroom/12.jpeg":0,"../../images/gamingroom/2.jpeg":0,"../../images/gamingroom/3.jpeg":0,"../../images/gamingroom/4.jpeg":0,"../../images/gamingroom/5.jpeg":0,"../../images/gamingroom/6.jpeg":0,"../../images/gamingroom/7.jpeg":0,"../../images/gamingroom/8.jpeg":0,"../../images/gamingroom/9.jpeg":0,"../../images/glasses/1.png":0,"../../images/glasses/10.png":0,"../../images/glasses/11.png":0,"../../images/glasses/12.png":0,"../../images/glasses/13.png":0,"../../images/glasses/14.png":0,"../../images/glasses/15.png":0,"../../images/glasses/16.png":0,"../../images/glasses/17.png":0,"../../images/glasses/18.png":0,"../../images/glasses/19.png":0,"../../images/glasses/2.png":0,"../../images/glasses/20.png":0,"../../images/glasses/21.png":0,"../../images/glasses/22.png":0,"../../images/glasses/23.png":0,"../../images/glasses/24.png":0,"../../images/glasses/25.png":0,"../../images/glasses/26.png":0,"../../images/glasses/27.png":0,"../../images/glasses/28.png":0,"../../images/glasses/29.png":0,"../../images/glasses/3.png":0,"../../images/glasses/4.png":0,"../../images/glasses/5.png":0,"../../images/glasses/6.png":0,"../../images/glasses/7.png":0,"../../images/glasses/8.png":0,"../../images/glasses/9.png":0,"../../images/stage/1.jpeg":0,"../../images/stage/2.jpeg":0,"../../images/stage/B.jpeg":0,"../../images/stage/H.jpeg":0,"../../images/stage/J.jpeg":0}).length,bR=4;function wR(){const[s,e]=Mt.useState(0);return Mt.useEffect(()=>{for(let t=bs.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[bs[t],bs[i]]=[bs[i],bs[t]]}},[]),Mt.useEffect(()=>{const t=setInterval(()=>{e(i=>(i+1)%bs.length)},5e3);return()=>clearInterval(t)},[]),G.jsxs("section",{id:"hero",className:"relative min-h-screen overflow-hidden bg-[#050508] flex flex-col justify-center items-center text-center",children:[G.jsxs("div",{className:"absolute inset-0 bg-[#050508]",children:[bs.map((t,i)=>G.jsx("img",{src:t,alt:`Background ${i}`,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${i===s?"opacity-50":"opacity-0"}`},t)),G.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"})]}),G.jsxs("div",{className:"relative z-10 max-w-[1400px] mx-auto px-8 mt-20 flex flex-col items-center w-full",children:[G.jsx("span",{className:"font-['JetBrains_Mono'] text-[10px] text-white/70 tracking-[0.3em] uppercase mb-5 border border-white/10 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md shadow-lg",children:"3D Modeler, Developer, Artest"}),G.jsxs("h1",{className:"font-['Fraunces'] text-white tracking-wide mb-8 md:mb-16",style:{fontSize:"clamp(2rem, 6vw, 5rem)"},children:["Feel Spaces,",G.jsx("span",{className:"font-['Fraunces'] text-white/70 text-xl md:text-2xl",children:"   Through Technology."})]}),G.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4",children:[G.jsxs("a",{href:"#works",className:"group flex items-center gap-3 font-['Figtree'] text-sm font-medium bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]",children:["작업물 보기 ",G.jsx(Fy,{size:16,className:"group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"})]}),G.jsx("a",{href:"#about",className:"flex items-center gap-2 font-['Figtree'] text-sm font-medium bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full hover:bg-white/15 backdrop-blur-md transition-all duration-300",children:"About Me"})]}),G.jsx("div",{className:"flex flex-wrap justify-center gap-10 md:gap-20 mt-24 pt-10 border-t border-white/10 w-full max-w-4xl",children:[{value:String(Dc.length),label:"Projects"},{value:String(ER),label:"3D Models"},{value:String(TR),label:"Renders"},{value:String(bR),label:"Videos"}].map(t=>G.jsxs("div",{className:"flex flex-col gap-2",children:[G.jsx("span",{className:"font-['Fraunces'] font-semibold text-3xl text-white/90 drop-shadow-lg",children:t.value}),G.jsx("span",{className:"font-['JetBrains_Mono'] text-[10px] text-white/40 tracking-widest uppercase",children:t.label})]},t.label))})]})]})}function AR({item:s,has3d:e,hasDbGlb:t,hasVideo:i,editMode:o,onRefresh:a,onClick:c}){const d=Mt.useRef(null),f=Mt.useRef(null),h=async(g,_)=>{var M;const y=(M=g.target.files)==null?void 0:M[0];y&&(_==="glb"?await uR(s.id,y):await gR(s.id,y),a())},m=async g=>{g.stopPropagation(),await pR(s.id),a()};return G.jsxs("div",{className:"group relative flex flex-col gap-3 cursor-pointer",onClick:c,children:[G.jsxs("div",{className:"relative aspect-square overflow-hidden rounded-xl bg-[#0a0a10] border border-white/5 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",children:[G.jsx("img",{src:s.thumb,alt:s.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"}),G.jsxs("div",{className:"absolute top-3 left-3 flex gap-2",children:[e&&G.jsxs("span",{className:"flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] text-white tracking-widest uppercase",children:[G.jsx(K_,{size:10})," 3D"]}),i&&G.jsxs("span",{className:"flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] text-white tracking-widest uppercase",children:[G.jsx(vf,{size:10})," VIDEO"]}),s.mediaType==="gallery"&&G.jsx("span",{className:"flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] text-white tracking-widest uppercase",children:"GALLERY"})]}),!o&&G.jsx("div",{className:"absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100",children:G.jsx("span",{className:"bg-white/90 text-black font-medium text-sm px-5 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg",children:s.link||s.isProcess?"보러가기":"자세히 보기"})})]}),G.jsxs("div",{children:[G.jsx("h4",{className:"font-['Fraunces'] font-medium text-lg text-foreground group-hover:text-primary transition-colors",children:s.title}),G.jsx("p",{className:"font-['Figtree'] text-sm text-muted-foreground mt-1 line-clamp-2",children:s.desc})]}),o&&G.jsxs("div",{className:"mt-2 flex flex-col gap-2 p-3 bg-white/5 border border-white/10 rounded-lg",onClick:g=>g.stopPropagation(),children:[G.jsxs("div",{className:"flex items-center justify-between",children:[G.jsx("span",{className:"text-[10px] text-white/60 uppercase tracking-widest",children:"3D (.glb)"}),t?G.jsx("button",{onClick:m,className:"text-red-400 hover:text-red-300 p-1",children:G.jsx($y,{size:14})}):G.jsx("button",{onClick:()=>{var g;return(g=d.current)==null?void 0:g.click()},className:"text-white hover:text-gray-300 p-1",children:G.jsx(vg,{size:14})})]}),G.jsxs("div",{className:"flex items-center justify-between",children:[G.jsx("span",{className:"text-[10px] text-white/60 uppercase tracking-widest",children:"Video (.mp4)"}),G.jsx("button",{onClick:()=>{var g;return(g=f.current)==null?void 0:g.click()},className:"text-white hover:text-gray-300 p-1",children:G.jsx(vg,{size:14})})]}),G.jsx("input",{type:"file",accept:".glb",className:"hidden",ref:d,onChange:g=>h(g,"glb")}),G.jsx("input",{type:"file",accept:"video/mp4",className:"hidden",ref:f,onChange:g=>h(g,"video")})]})]})}function RR({editMode:s}){const[e,t]=Mt.useState(new Set),[i,o]=Mt.useState(new Set),[a,c]=Mt.useState(null),[d,f]=Mt.useState(null),[h,m]=Mt.useState(null),[g,_]=Mt.useState("all"),y=Mt.useCallback(async()=>{const[x,S]=await Promise.all([mR(),_R()]);t(new Set(x)),o(new Set(S))},[]);Mt.useEffect(()=>{y()},[y]);const M=async x=>{const S=hR(x.id);c(x),f(null),m({videoData:null,meta:S});try{const R=await fR(x.id);let N=null;x.mediaType!=="gallery"&&(N=await dR(x.id)??X_(x.id)),f(N),m({videoData:R,meta:S})}catch(R){console.error("포트폴리오 미디어 로드 실패",R),f(x.mediaType!=="gallery"?X_(x.id):null),m({videoData:null,meta:S})}},w=g==="all"?Dc:Dc.filter(x=>x.groupName===g);return G.jsxs("section",{id:"works",className:"bg-background py-32",children:[G.jsxs("div",{className:"max-w-[1400px] mx-auto px-8",children:[G.jsxs("div",{className:"mb-12",children:[G.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-4",children:"02 — Works"}),G.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-8",children:[G.jsx("div",{className:"flex flex-col gap-4",children:G.jsx("h2",{className:"font-['Fraunces'] font-light text-foreground leading-tight",style:{fontSize:"clamp(2.5rem, 5vw, 4.5rem)"},children:"Projects"})}),G.jsxs("div",{className:"flex flex-wrap gap-2 md:gap-3",children:[G.jsx("button",{onClick:()=>_("all"),className:`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${g==="all"?"bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold":"bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"}`,children:"All"}),Dc.map(x=>G.jsxs("button",{onClick:()=>_(x.groupName),className:`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${g===x.groupName?"bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold":"bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"}`,children:[x.emoji," ",x.groupName]},x.groupName))]})]})]}),s&&G.jsxs("div",{className:"mb-8 px-4 py-3 border border-primary/30 bg-primary/5 rounded-lg flex items-center gap-3",children:[G.jsx($_,{size:13,className:"text-primary shrink-0"}),G.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-primary tracking-wide",children:'편집 모드 활성화 — 각 카드 하단의 "업로드" 버튼으로 미디어를 등록하세요.'})]}),G.jsx("div",{className:"flex flex-col gap-20",children:w.map(x=>G.jsxs("div",{children:[G.jsxs("div",{className:"flex items-center gap-4 mb-8 pb-4 border-b border-white/10",children:[G.jsx("span",{className:"text-2xl",children:x.emoji}),G.jsx("h3",{className:"font-['Fraunces'] font-medium text-foreground text-2xl",children:x.groupName}),G.jsx(q_,{size:18,className:"text-muted-foreground"}),G.jsxs("span",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest",children:[x.items.filter(S=>!S.isProcess).length," PROJECTS"]})]}),G.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:x.items.map(S=>G.jsx(AR,{item:S,has3d:j0.has(S.id)||e.has(S.id),hasDbGlb:e.has(S.id),hasVideo:i.has(S.id),editMode:s&&!S.isProcess,onRefresh:y,onClick:()=>!S.isProcess&&M(S)},S.id))})]},x.groupName))})]}),a&&G.jsx(yR,{item:a,glbData:d,videoData:(h==null?void 0:h.videoData)||null,meta:h==null?void 0:h.meta,editMode:s,onSaveMeta:x=>{h&&m({...h,meta:x})},onClose:()=>{c(null),f(null),m(null)}})]})}function CR(){return G.jsx("section",{id:"about",className:"bg-card py-32 border-t border-border",children:G.jsx("div",{className:"max-w-[1400px] mx-auto px-8",children:G.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start",children:[G.jsx("div",{className:"relative max-w-[420px] mx-auto lg:mx-0",children:G.jsx("div",{className:"relative aspect-[3/4] overflow-hidden bg-secondary rounded-3xl shadow-xl",children:G.jsx("img",{src:"./images/3212_4282.jpg",alt:"Portrait",className:"w-full h-full object-cover"})})}),G.jsxs("div",{className:"flex flex-col gap-10 lg:pt-8",children:[G.jsxs("div",{children:[G.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase mb-6",children:"03 — About Me"}),G.jsxs("h2",{className:"font-['Fraunces'] font-light text-foreground leading-tight mb-8",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:["I build spaces that ",G.jsx("em",{className:"italic text-primary",children:"exist nowhere"})," but feel real."]}),G.jsxs("div",{className:"flex flex-col gap-4 font-['Figtree'] text-base text-muted-foreground leading-relaxed",children:[G.jsx("p",{children:"서울을 기반으로 활동하는 3D 디자이너입니다. 건축 시각화, 제품 렌더링, 스타일라이즈드 오브젝트 모델링을 주로 작업합니다."}),G.jsx("p",{children:"기술적 정밀함과 예술적 직관의 교차점에서 작업하며, 아무 곳에도 존재하지 않지만 현실처럼 느껴지는 공간과 오브젝트를 만들어냅니다."})]})]}),G.jsxs("div",{className:"border-t border-border pt-8",children:[G.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-6",children:"Software & Tools"}),G.jsx("div",{className:"flex flex-wrap gap-3",children:vR.map(s=>G.jsx("span",{className:"rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground",children:s.name},s.name))})]}),G.jsxs("div",{className:"border-t border-border pt-8",children:[G.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-6",children:"Contact"}),G.jsxs("div",{className:"flex flex-wrap gap-3",children:[G.jsxs("a",{href:"https://www.instagram.com/yeon_ddooo/",target:"_blank",rel:"noopener noreferrer",className:"group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:[G.jsx(Gy,{size:18}),G.jsx("span",{className:"sr-only",children:"Instagram"})]}),G.jsxs("a",{href:"https://www.linkedin.com/in/yeonsu0826/",target:"_blank",rel:"noopener noreferrer",className:"group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:[G.jsx(Wy,{size:18}),G.jsx("span",{className:"sr-only",children:"LinkedIn"})]})]})]})]})]})})})}function PR(){return G.jsx("footer",{className:"bg-card border-t border-border px-8 py-8",children:G.jsxs("div",{className:"max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",children:[G.jsxs("span",{className:"font-['Fraunces'] text-lg font-light text-foreground",children:["JEONG YEON SU",G.jsx("span",{className:"text-primary",children:"."})]}),G.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest",children:"© 2025 — All rights reserved"}),G.jsx("p",{className:"font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase",children:"Seoul, KR"})]})})}function NR(){const[s,e]=Mt.useState(!1),[t,i]=Mt.useState(0),o=Mt.useRef(null),a=()=>{const c=t+1;i(c),o.current&&clearTimeout(o.current),c>=5?(e(d=>!d),i(0)):o.current=setTimeout(()=>i(0),1500)};return G.jsxs("div",{className:"bg-background min-h-screen overflow-x-hidden",style:{fontFamily:"'Figtree', sans-serif"},children:[G.jsx(SR,{editMode:s,onLogoClick:a}),G.jsx(wR,{}),G.jsx(RR,{editMode:s}),G.jsx(CR,{}),G.jsx(PR,{})]})}Nx.createRoot(document.getElementById("root")).render(G.jsx(NR,{}));
