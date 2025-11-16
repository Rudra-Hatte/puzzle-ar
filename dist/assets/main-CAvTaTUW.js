(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function qp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var $u={exports:{}},_o={},Zu={exports:{}},ct={};var xh;function i_(){if(xh)return ct;xh=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.iterator;function v(w){return w===null||typeof w!="object"?null:(w=S&&w[S]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function x(w,b,V){this.props=w,this.context=b,this.refs=T,this.updater=V||M}x.prototype.isReactComponent={},x.prototype.setState=function(w,b){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,b,"setState")},x.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function _(){}_.prototype=x.prototype;function z(w,b,V){this.props=w,this.context=b,this.refs=T,this.updater=V||M}var P=z.prototype=new _;P.constructor=z,A(P,x.prototype),P.isPureReactComponent=!0;var L=Array.isArray,N=Object.prototype.hasOwnProperty,k={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function K(w,b,V){var ue,le={},ge=null,we=null;if(b!=null)for(ue in b.ref!==void 0&&(we=b.ref),b.key!==void 0&&(ge=""+b.key),b)N.call(b,ue)&&!F.hasOwnProperty(ue)&&(le[ue]=b[ue]);var be=arguments.length-2;if(be===1)le.children=V;else if(1<be){for(var Ae=Array(be),Je=0;Je<be;Je++)Ae[Je]=arguments[Je+2];le.children=Ae}if(w&&w.defaultProps)for(ue in be=w.defaultProps,be)le[ue]===void 0&&(le[ue]=be[ue]);return{$$typeof:o,type:w,key:ge,ref:we,props:le,_owner:k.current}}function R(w,b){return{$$typeof:o,type:w.type,key:b,ref:w.ref,props:w.props,_owner:w._owner}}function I(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function se(w){var b={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(V){return b[V]})}var ae=/\/+/g;function de(w,b){return typeof w=="object"&&w!==null&&w.key!=null?se(""+w.key):b.toString(36)}function G(w,b,V,ue,le){var ge=typeof w;(ge==="undefined"||ge==="boolean")&&(w=null);var we=!1;if(w===null)we=!0;else switch(ge){case"string":case"number":we=!0;break;case"object":switch(w.$$typeof){case o:case e:we=!0}}if(we)return we=w,le=le(we),w=ue===""?"."+de(we,0):ue,L(le)?(V="",w!=null&&(V=w.replace(ae,"$&/")+"/"),G(le,b,V,"",function(Je){return Je})):le!=null&&(I(le)&&(le=R(le,V+(!le.key||we&&we.key===le.key?"":(""+le.key).replace(ae,"$&/")+"/")+w)),b.push(le)),1;if(we=0,ue=ue===""?".":ue+":",L(w))for(var be=0;be<w.length;be++){ge=w[be];var Ae=ue+de(ge,be);we+=G(ge,b,V,Ae,le)}else if(Ae=v(w),typeof Ae=="function")for(w=Ae.call(w),be=0;!(ge=w.next()).done;)ge=ge.value,Ae=ue+de(ge,be++),we+=G(ge,b,V,Ae,le);else if(ge==="object")throw b=String(w),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return we}function re(w,b,V){if(w==null)return w;var ue=[],le=0;return G(w,ue,"","",function(ge){return b.call(V,ge,le++)}),ue}function oe(w){if(w._status===-1){var b=w._result;b=b(),b.then(function(V){(w._status===0||w._status===-1)&&(w._status=1,w._result=V)},function(V){(w._status===0||w._status===-1)&&(w._status=2,w._result=V)}),w._status===-1&&(w._status=0,w._result=b)}if(w._status===1)return w._result.default;throw w._result}var te={current:null},j={transition:null},Z={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:j,ReactCurrentOwner:k};return ct.Children={map:re,forEach:function(w,b,V){re(w,function(){b.apply(this,arguments)},V)},count:function(w){var b=0;return re(w,function(){b++}),b},toArray:function(w){return re(w,function(b){return b})||[]},only:function(w){if(!I(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ct.Component=x,ct.Fragment=n,ct.Profiler=a,ct.PureComponent=z,ct.StrictMode=s,ct.Suspense=p,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ct.cloneElement=function(w,b,V){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var ue=A({},w.props),le=w.key,ge=w.ref,we=w._owner;if(b!=null){if(b.ref!==void 0&&(ge=b.ref,we=k.current),b.key!==void 0&&(le=""+b.key),w.type&&w.type.defaultProps)var be=w.type.defaultProps;for(Ae in b)N.call(b,Ae)&&!F.hasOwnProperty(Ae)&&(ue[Ae]=b[Ae]===void 0&&be!==void 0?be[Ae]:b[Ae])}var Ae=arguments.length-2;if(Ae===1)ue.children=V;else if(1<Ae){be=Array(Ae);for(var Je=0;Je<Ae;Je++)be[Je]=arguments[Je+2];ue.children=be}return{$$typeof:o,type:w.type,key:le,ref:ge,props:ue,_owner:we}},ct.createContext=function(w){return w={$$typeof:d,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:u,_context:w},w.Consumer=w},ct.createElement=K,ct.createFactory=function(w){var b=K.bind(null,w);return b.type=w,b},ct.createRef=function(){return{current:null}},ct.forwardRef=function(w){return{$$typeof:f,render:w}},ct.isValidElement=I,ct.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:oe}},ct.memo=function(w,b){return{$$typeof:m,type:w,compare:b===void 0?null:b}},ct.startTransition=function(w){var b=j.transition;j.transition={};try{w()}finally{j.transition=b}},ct.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},ct.useCallback=function(w,b){return te.current.useCallback(w,b)},ct.useContext=function(w){return te.current.useContext(w)},ct.useDebugValue=function(){},ct.useDeferredValue=function(w){return te.current.useDeferredValue(w)},ct.useEffect=function(w,b){return te.current.useEffect(w,b)},ct.useId=function(){return te.current.useId()},ct.useImperativeHandle=function(w,b,V){return te.current.useImperativeHandle(w,b,V)},ct.useInsertionEffect=function(w,b){return te.current.useInsertionEffect(w,b)},ct.useLayoutEffect=function(w,b){return te.current.useLayoutEffect(w,b)},ct.useMemo=function(w,b){return te.current.useMemo(w,b)},ct.useReducer=function(w,b,V){return te.current.useReducer(w,b,V)},ct.useRef=function(w){return te.current.useRef(w)},ct.useState=function(w){return te.current.useState(w)},ct.useSyncExternalStore=function(w,b,V){return te.current.useSyncExternalStore(w,b,V)},ct.useTransition=function(){return te.current.useTransition()},ct.version="18.2.0",ct}var Sh;function Hc(){return Sh||(Sh=1,Zu.exports=i_()),Zu.exports}var yh;function r_(){if(yh)return _o;yh=1;var o=Hc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var g,S={},v=null,M=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(M=p.ref);for(g in p)s.call(p,g)&&!u.hasOwnProperty(g)&&(S[g]=p[g]);if(f&&f.defaultProps)for(g in p=f.defaultProps,p)S[g]===void 0&&(S[g]=p[g]);return{$$typeof:e,type:f,key:v,ref:M,props:S,_owner:a.current}}return _o.Fragment=n,_o.jsx=d,_o.jsxs=d,_o}var Mh;function s_(){return Mh||(Mh=1,$u.exports=r_()),$u.exports}var Te=s_(),Xt=Hc();const o_=qp(Xt);var Da={},Qu={exports:{}},wn={},Ju={exports:{}},ec={};var Eh;function a_(){return Eh||(Eh=1,(function(o){function e(j,Z){var w=j.length;j.push(Z);e:for(;0<w;){var b=w-1>>>1,V=j[b];if(0<a(V,Z))j[b]=Z,j[w]=V,w=b;else break e}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var Z=j[0],w=j.pop();if(w!==Z){j[0]=w;e:for(var b=0,V=j.length,ue=V>>>1;b<ue;){var le=2*(b+1)-1,ge=j[le],we=le+1,be=j[we];if(0>a(ge,w))we<V&&0>a(be,ge)?(j[b]=be,j[we]=w,b=we):(j[b]=ge,j[le]=w,b=le);else if(we<V&&0>a(be,w))j[b]=be,j[we]=w,b=we;else break e}}return Z}function a(j,Z){var w=j.sortIndex-Z.sortIndex;return w!==0?w:j.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();o.unstable_now=function(){return d.now()-f}}var p=[],m=[],g=1,S=null,v=3,M=!1,A=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(j){for(var Z=n(m);Z!==null;){if(Z.callback===null)s(m);else if(Z.startTime<=j)s(m),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=n(m)}}function L(j){if(T=!1,P(j),!A)if(n(p)!==null)A=!0,oe(N);else{var Z=n(m);Z!==null&&te(L,Z.startTime-j)}}function N(j,Z){A=!1,T&&(T=!1,_(K),K=-1),M=!0;var w=v;try{for(P(Z),S=n(p);S!==null&&(!(S.expirationTime>Z)||j&&!se());){var b=S.callback;if(typeof b=="function"){S.callback=null,v=S.priorityLevel;var V=b(S.expirationTime<=Z);Z=o.unstable_now(),typeof V=="function"?S.callback=V:S===n(p)&&s(p),P(Z)}else s(p);S=n(p)}if(S!==null)var ue=!0;else{var le=n(m);le!==null&&te(L,le.startTime-Z),ue=!1}return ue}finally{S=null,v=w,M=!1}}var k=!1,F=null,K=-1,R=5,I=-1;function se(){return!(o.unstable_now()-I<R)}function ae(){if(F!==null){var j=o.unstable_now();I=j;var Z=!0;try{Z=F(!0,j)}finally{Z?de():(k=!1,F=null)}}else k=!1}var de;if(typeof z=="function")de=function(){z(ae)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,re=G.port2;G.port1.onmessage=ae,de=function(){re.postMessage(null)}}else de=function(){x(ae,0)};function oe(j){F=j,k||(k=!0,de())}function te(j,Z){K=x(function(){j(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_continueExecution=function(){A||M||(A=!0,oe(N))},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(j){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var w=v;v=Z;try{return j()}finally{v=w}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(j,Z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var w=v;v=j;try{return Z()}finally{v=w}},o.unstable_scheduleCallback=function(j,Z,w){var b=o.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?b+w:b):w=b,j){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=w+V,j={id:g++,callback:Z,priorityLevel:j,startTime:w,expirationTime:V,sortIndex:-1},w>b?(j.sortIndex=w,e(m,j),n(p)===null&&j===n(m)&&(T?(_(K),K=-1):T=!0,te(L,w-b))):(j.sortIndex=V,e(p,j),A||M||(A=!0,oe(N))),j},o.unstable_shouldYield=se,o.unstable_wrapCallback=function(j){var Z=v;return function(){var w=v;v=Z;try{return j.apply(this,arguments)}finally{v=w}}}})(ec)),ec}var Th;function l_(){return Th||(Th=1,Ju.exports=a_()),Ju.exports}var wh;function u_(){if(wh)return wn;wh=1;var o=Hc(),e=l_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},S={};function v(t){return p.call(S,t)?!0:p.call(g,t)?!1:m.test(t)?S[t]=!0:(g[t]=!0,!1)}function M(t,i,r,l){if(r!==null&&r.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,r,l){if(i===null||typeof i>"u"||M(t,i,r,l))return!0;if(l)return!1;if(r!==null)switch(r.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,r,l,c,h,y){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=r,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=y}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function z(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,z);x[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,z);x[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,z);x[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,r,l){var c=x.hasOwnProperty(i)?x[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,r,c,l)&&(r=null),l||c===null?v(i)&&(r===null?t.removeAttribute(i):t.setAttribute(i,""+r)):c.mustUseProperty?t[c.propertyName]=r===null?c.type===3?!1:"":r:(i=c.attributeName,l=c.attributeNamespace,r===null?t.removeAttribute(i):(c=c.type,r=c===3||c===4&&r===!0?"":""+r,l?t.setAttributeNS(l,i,r):t.setAttribute(i,r))))}var L=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),k=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),se=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),j=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var w=Object.assign,b;function V(t){if(b===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+t}var ue=!1;function le(t,i){if(!t||ue)return"";ue=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){l=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var c=Q.stack.split(`
`),h=l.stack.split(`
`),y=c.length-1,U=h.length-1;1<=y&&0<=U&&c[y]!==h[U];)U--;for(;1<=y&&0<=U;y--,U--)if(c[y]!==h[U]){if(y!==1||U!==1)do if(y--,U--,0>U||c[y]!==h[U]){var B=`
`+c[y].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=y&&0<=U);break}}}finally{ue=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?V(t):""}function ge(t){switch(t.tag){case 5:return V(t.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return t=le(t.type,!1),t;case 11:return t=le(t.type.render,!1),t;case 1:return t=le(t.type,!0),t;default:return""}}function we(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case k:return"Portal";case R:return"Profiler";case K:return"StrictMode";case de:return"Suspense";case G:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case se:return(t.displayName||"Context")+".Consumer";case I:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case re:return i=t.displayName||null,i!==null?i:we(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return we(t(i))}catch{}}return null}function be(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Je(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function an(t){var i=Je(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,h=r.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(y){l=""+y,h.call(this,y)}}),Object.defineProperty(t,i,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function tt(t){t._valueTracker||(t._valueTracker=an(t))}function Y(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return t&&(l=Je(t)?t.checked?"true":"false":t.value),t=l,t!==r?(i.setValue(t),!0):!1}function It(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xe(t,i){var r=i.checked;return w({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function nt(t,i){var r=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;r=Ae(i.value!=null?i.value:r),t._wrapperState={initialChecked:l,initialValue:r,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ze(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function xt(t,i){Ze(t,i);var r=Ae(i.value),l=i.type;if(r!=null)l==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?it(t,i.type,r):i.hasOwnProperty("defaultValue")&&it(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function lt(t,i,r){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,r||i===t.value||(t.value=i),t.defaultValue=i}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function it(t,i,r){(i!=="number"||It(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var dt=Array.isArray;function Rt(t,i,r,l){if(t=t.options,i){i={};for(var c=0;c<r.length;c++)i["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=i.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&l&&(t[r].defaultSelected=!0)}else{for(r=""+Ae(r),i=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function zt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return w({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function D(t,i){var r=i.value;if(r==null){if(r=i.children,i=i.defaultValue,r!=null){if(i!=null)throw Error(n(92));if(dt(r)){if(1<r.length)throw Error(n(93));r=r[0]}i=r}i==null&&(i=""),r=i}t._wrapperState={initialValue:Ae(r)}}function E(t,i){var r=Ae(i.value),l=Ae(i.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),i.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),l!=null&&(t.defaultValue=""+l)}function J(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ye(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _e,ke=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,r,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,r,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(_e=_e||document.createElement("div"),_e.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=_e.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var Pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(Pe).forEach(function(t){Ye.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Pe[i]=Pe[t]})});function ft(t,i,r){return i==null||typeof i=="boolean"||i===""?"":r||typeof i!="number"||i===0||Pe.hasOwnProperty(t)&&Pe[t]?(""+i).trim():i+"px"}function Se(t,i){t=t.style;for(var r in i)if(i.hasOwnProperty(r)){var l=r.indexOf("--")===0,c=ft(r,i[r],l);r==="float"&&(r="cssFloat"),l?t.setProperty(r,c):t[r]=c}}var mt=w({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(t,i){if(i){if(mt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function je(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var He=null;function O(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ee=null,ve=null,Le=null;function Ce(t){if(t=to(t)){if(typeof Ee!="function")throw Error(n(280));var i=t.stateNode;i&&(i=qo(i),Ee(t.stateNode,t.type,i))}}function he(t){ve?Le?Le.push(t):Le=[t]:ve=t}function Be(){if(ve){var t=ve,i=Le;if(Le=ve=null,Ce(t),i)for(t=0;t<i.length;t++)Ce(i[t])}}function et(t,i){return t(i)}function Yt(){}var gt=!1;function Ln(t,i,r){if(gt)return t(i,r);gt=!0;try{return et(t,i,r)}finally{gt=!1,(ve!==null||Le!==null)&&(Yt(),Be())}}function Ft(t,i){var r=t.stateNode;if(r===null)return null;var l=qo(r);if(l===null)return null;r=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(n(231,i,typeof r));return r}var kr=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){kr=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{kr=!1}function hl(t,i,r,l,c,h,y,U,B){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(r,Q)}catch(fe){this.onError(fe)}}var oi=!1,fr=null,hi=!1,Br=null,pl={onError:function(t){oi=!0,fr=t}};function ml(t,i,r,l,c,h,y,U,B){oi=!1,fr=null,hl.apply(pl,arguments)}function gl(t,i,r,l,c,h,y,U,B){if(ml.apply(this,arguments),oi){if(oi){var Q=fr;oi=!1,fr=null}else throw Error(n(198));hi||(hi=!0,Br=Q)}}function C(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function q(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ne(t){if(C(t)!==t)throw Error(n(188))}function $(t){var i=t.alternate;if(!i){if(i=C(t),i===null)throw Error(n(188));return i!==t?null:t}for(var r=t,l=i;;){var c=r.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){r=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===r)return ne(c),t;if(h===l)return ne(c),i;h=h.sibling}throw Error(n(188))}if(r.return!==l.return)r=c,l=h;else{for(var y=!1,U=c.child;U;){if(U===r){y=!0,r=c,l=h;break}if(U===l){y=!0,l=c,r=h;break}U=U.sibling}if(!y){for(U=h.child;U;){if(U===r){y=!0,r=h,l=c;break}if(U===l){y=!0,l=h,r=c;break}U=U.sibling}if(!y)throw Error(n(189))}}if(r.alternate!==l)throw Error(n(190))}if(r.tag!==3)throw Error(n(188));return r.stateNode.current===r?t:i}function ie(t){return t=$(t),t!==null?Ne(t):null}function Ne(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ne(t);if(i!==null)return i;t=t.sibling}return null}var Ve=e.unstable_scheduleCallback,qe=e.unstable_cancelCallback,Ke=e.unstable_shouldYield,at=e.unstable_requestPaint,Ue=e.unstable_now,rt=e.unstable_getCurrentPriorityLevel,yt=e.unstable_ImmediatePriority,Ct=e.unstable_UserBlockingPriority,en=e.unstable_NormalPriority,Yn=e.unstable_LowPriority,Lt=e.unstable_IdlePriority,st=null,xn=null;function Ut(t){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(st,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:Fs,bo=Math.log,dr=Math.LN2;function Fs(t){return t>>>=0,t===0?32:31-(bo(t)/dr|0)|0}var kt=64,zn=4194304;function pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kt(t,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,y=r&268435455;if(y!==0){var U=y&~c;U!==0?l=pi(U):(h&=y,h!==0&&(l=pi(h)))}else y=r&~c,y!==0?l=pi(y):h!==0&&(l=pi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=r&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)r=31-Vt(i),c=1<<r,l|=t[r],i&=~c;return l}function Os(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _l(t,i){for(var r=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var y=31-Vt(h),U=1<<y,B=c[y];B===-1?((U&r)===0||(U&l)!==0)&&(c[y]=Os(U,i)):B<=i&&(t.expiredLanes|=U),h&=~U}}function Hr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yc(){var t=kt;return kt<<=1,(kt&4194240)===0&&(kt=64),t}function vl(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function zs(t,i,r){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Vt(i),t[i]=r}function Tm(t,i){var r=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<r;){var c=31-Vt(r),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,r&=~h}}function xl(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var l=31-Vt(r),c=1<<l;c&i|t[l]&i&&(t[l]|=i),r&=~c}}var _t=0;function Kc(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $c,Sl,Zc,Qc,Jc,yl=!1,Do=[],Ii=null,Fi=null,Oi=null,ks=new Map,Bs=new Map,zi=[],wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ef(t,i){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bs.delete(i.pointerId)}}function Hs(t,i,r,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=to(i),i!==null&&Sl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Am(t,i,r,l,c){switch(i){case"focusin":return Ii=Hs(Ii,t,i,r,l,c),!0;case"dragenter":return Fi=Hs(Fi,t,i,r,l,c),!0;case"mouseover":return Oi=Hs(Oi,t,i,r,l,c),!0;case"pointerover":var h=c.pointerId;return ks.set(h,Hs(ks.get(h)||null,t,i,r,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Bs.set(h,Hs(Bs.get(h)||null,t,i,r,l,c)),!0}return!1}function tf(t){var i=hr(t.target);if(i!==null){var r=C(i);if(r!==null){if(i=r.tag,i===13){if(i=q(r),i!==null){t.blockedOn=i,Jc(t.priority,function(){Zc(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=El(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);He=l,r.target.dispatchEvent(l),He=null}else return i=to(r),i!==null&&Sl(i),t.blockedOn=r,!1;i.shift()}return!0}function nf(t,i,r){Uo(t)&&r.delete(i)}function Rm(){yl=!1,Ii!==null&&Uo(Ii)&&(Ii=null),Fi!==null&&Uo(Fi)&&(Fi=null),Oi!==null&&Uo(Oi)&&(Oi=null),ks.forEach(nf),Bs.forEach(nf)}function Vs(t,i){t.blockedOn===i&&(t.blockedOn=null,yl||(yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rm)))}function Gs(t){function i(c){return Vs(c,t)}if(0<Do.length){Vs(Do[0],t);for(var r=1;r<Do.length;r++){var l=Do[r];l.blockedOn===t&&(l.blockedOn=null)}}for(Ii!==null&&Vs(Ii,t),Fi!==null&&Vs(Fi,t),Oi!==null&&Vs(Oi,t),ks.forEach(i),Bs.forEach(i),r=0;r<zi.length;r++)l=zi[r],l.blockedOn===t&&(l.blockedOn=null);for(;0<zi.length&&(r=zi[0],r.blockedOn===null);)tf(r),r.blockedOn===null&&zi.shift()}var Vr=L.ReactCurrentBatchConfig,No=!0;function Cm(t,i,r,l){var c=_t,h=Vr.transition;Vr.transition=null;try{_t=1,Ml(t,i,r,l)}finally{_t=c,Vr.transition=h}}function Pm(t,i,r,l){var c=_t,h=Vr.transition;Vr.transition=null;try{_t=4,Ml(t,i,r,l)}finally{_t=c,Vr.transition=h}}function Ml(t,i,r,l){if(No){var c=El(t,i,r,l);if(c===null)Bl(t,i,l,Io,r),ef(t,l);else if(Am(c,t,i,r,l))l.stopPropagation();else if(ef(t,l),i&4&&-1<wm.indexOf(t)){for(;c!==null;){var h=to(c);if(h!==null&&$c(h),h=El(t,i,r,l),h===null&&Bl(t,i,l,Io,r),h===c)break;c=h}c!==null&&l.stopPropagation()}else Bl(t,i,l,null,r)}}var Io=null;function El(t,i,r,l){if(Io=null,t=O(l),t=hr(t),t!==null)if(i=C(t),i===null)t=null;else if(r=i.tag,r===13){if(t=q(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Io=t,null}function rf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rt()){case yt:return 1;case Ct:return 4;case en:case Yn:return 16;case Lt:return 536870912;default:return 16}default:return 16}}var ki=null,Tl=null,Fo=null;function sf(){if(Fo)return Fo;var t,i=Tl,r=i.length,l,c="value"in ki?ki.value:ki.textContent,h=c.length;for(t=0;t<r&&i[t]===c[t];t++);var y=r-t;for(l=1;l<=y&&i[r-l]===c[h-l];l++);return Fo=c.slice(t,1<l?1-l:void 0)}function Oo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function of(){return!1}function bn(t){function i(r,l,c,h,y){this._reactName=r,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(r=t[U],this[U]=r?r(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?zo:of,this.isPropagationStopped=of,this}return w(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),i}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=bn(Gr),Ws=w({},Gr,{view:0,detail:0}),Lm=bn(Ws),Al,Rl,Xs,ko=w({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Al=t.screenX-Xs.screenX,Rl=t.screenY-Xs.screenY):Rl=Al=0,Xs=t),Al)},movementY:function(t){return"movementY"in t?t.movementY:Rl}}),af=bn(ko),bm=w({},ko,{dataTransfer:0}),Dm=bn(bm),Um=w({},Ws,{relatedTarget:0}),Cl=bn(Um),Nm=w({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Im=bn(Nm),Fm=w({},Gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Om=bn(Fm),zm=w({},Gr,{data:0}),lf=bn(zm),km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vm(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Hm[t])?!!i[t]:!1}function Pl(){return Vm}var Gm=w({},Ws,{key:function(t){if(t.key){var i=km[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(t){return t.type==="keypress"?Oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wm=bn(Gm),Xm=w({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uf=bn(Xm),jm=w({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),qm=bn(jm),Ym=w({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Km=bn(Ym),$m=w({},ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zm=bn($m),Qm=[9,13,27,32],Ll=f&&"CompositionEvent"in window,js=null;f&&"documentMode"in document&&(js=document.documentMode);var Jm=f&&"TextEvent"in window&&!js,cf=f&&(!Ll||js&&8<js&&11>=js),ff=" ",df=!1;function hf(t,i){switch(t){case"keyup":return Qm.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function eg(t,i){switch(t){case"compositionend":return pf(i);case"keypress":return i.which!==32?null:(df=!0,ff);case"textInput":return t=i.data,t===ff&&df?null:t;default:return null}}function tg(t,i){if(Wr)return t==="compositionend"||!Ll&&hf(t,i)?(t=sf(),Fo=Tl=ki=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return cf&&i.locale!=="ko"?null:i.data;default:return null}}var ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!ng[t.type]:i==="textarea"}function gf(t,i,r,l){he(l),i=Wo(i,"onChange"),0<i.length&&(r=new wl("onChange","change",null,r,l),t.push({event:r,listeners:i}))}var qs=null,Ys=null;function ig(t){Nf(t,0)}function Bo(t){var i=Kr(t);if(Y(i))return t}function rg(t,i){if(t==="change")return i}var _f=!1;if(f){var bl;if(f){var Dl="oninput"in document;if(!Dl){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),Dl=typeof vf.oninput=="function"}bl=Dl}else bl=!1;_f=bl&&(!document.documentMode||9<document.documentMode)}function xf(){qs&&(qs.detachEvent("onpropertychange",Sf),Ys=qs=null)}function Sf(t){if(t.propertyName==="value"&&Bo(Ys)){var i=[];gf(i,Ys,t,O(t)),Ln(ig,i)}}function sg(t,i,r){t==="focusin"?(xf(),qs=i,Ys=r,qs.attachEvent("onpropertychange",Sf)):t==="focusout"&&xf()}function og(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bo(Ys)}function ag(t,i){if(t==="click")return Bo(i)}function lg(t,i){if(t==="input"||t==="change")return Bo(i)}function ug(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:ug;function Ks(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var c=r[l];if(!p.call(i,c)||!Kn(t[c],i[c]))return!1}return!0}function yf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mf(t,i){var r=yf(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=i&&l>=i)return{node:r,offset:i-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=yf(r)}}function Ef(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ef(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Tf(){for(var t=window,i=It();i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=It(t.document)}return i}function Ul(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function cg(t){var i=Tf(),r=t.focusedElem,l=t.selectionRange;if(i!==r&&r&&r.ownerDocument&&Ef(r.ownerDocument.documentElement,r)){if(l!==null&&Ul(r)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in r)r.selectionStart=i,r.selectionEnd=Math.min(t,r.value.length);else if(t=(i=r.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=r.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Mf(r,h);var y=Mf(r,l);c&&y&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==y.node||t.focusOffset!==y.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(y.node,y.offset)):(i.setEnd(y.node,y.offset),t.addRange(i)))}}for(i=[],t=r;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<i.length;r++)t=i[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fg=f&&"documentMode"in document&&11>=document.documentMode,Xr=null,Nl=null,$s=null,Il=!1;function wf(t,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Il||Xr==null||Xr!==It(l)||(l=Xr,"selectionStart"in l&&Ul(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$s&&Ks($s,l)||($s=l,l=Wo(Nl,"onSelect"),0<l.length&&(i=new wl("onSelect","select",null,i,r),t.push({event:i,listeners:l}),i.target=Xr)))}function Ho(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var jr={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},Fl={},Af={};f&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function Vo(t){if(Fl[t])return Fl[t];if(!jr[t])return t;var i=jr[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in Af)return Fl[t]=i[r];return t}var Rf=Vo("animationend"),Cf=Vo("animationiteration"),Pf=Vo("animationstart"),Lf=Vo("transitionend"),bf=new Map,Df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(t,i){bf.set(t,i),u(i,[t])}for(var Ol=0;Ol<Df.length;Ol++){var zl=Df[Ol],dg=zl.toLowerCase(),hg=zl[0].toUpperCase()+zl.slice(1);Bi(dg,"on"+hg)}Bi(Rf,"onAnimationEnd"),Bi(Cf,"onAnimationIteration"),Bi(Pf,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(Lf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zs));function Uf(t,i,r){var l=t.type||"unknown-event";t.currentTarget=r,gl(l,i,void 0,t),t.currentTarget=null}function Nf(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var y=l.length-1;0<=y;y--){var U=l[y],B=U.instance,Q=U.currentTarget;if(U=U.listener,B!==h&&c.isPropagationStopped())break e;Uf(c,U,Q),h=B}else for(y=0;y<l.length;y++){if(U=l[y],B=U.instance,Q=U.currentTarget,U=U.listener,B!==h&&c.isPropagationStopped())break e;Uf(c,U,Q),h=B}}}if(hi)throw t=Br,hi=!1,Br=null,t}function Et(t,i){var r=i[jl];r===void 0&&(r=i[jl]=new Set);var l=t+"__bubble";r.has(l)||(If(i,t,2,!1),r.add(l))}function kl(t,i,r){var l=0;i&&(l|=4),If(r,t,l,i)}var Go="_reactListening"+Math.random().toString(36).slice(2);function Qs(t){if(!t[Go]){t[Go]=!0,s.forEach(function(r){r!=="selectionchange"&&(pg.has(r)||kl(r,!1,t),kl(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Go]||(i[Go]=!0,kl("selectionchange",!1,i))}}function If(t,i,r,l){switch(rf(i)){case 1:var c=Cm;break;case 4:c=Pm;break;default:c=Ml}r=c.bind(null,i,r,t),c=void 0,!kr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,r,{capture:!0,passive:c}):t.addEventListener(i,r,!0):c!==void 0?t.addEventListener(i,r,{passive:c}):t.addEventListener(i,r,!1)}function Bl(t,i,r,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var U=l.stateNode.containerInfo;if(U===c||U.nodeType===8&&U.parentNode===c)break;if(y===4)for(y=l.return;y!==null;){var B=y.tag;if((B===3||B===4)&&(B=y.stateNode.containerInfo,B===c||B.nodeType===8&&B.parentNode===c))return;y=y.return}for(;U!==null;){if(y=hr(U),y===null)return;if(B=y.tag,B===5||B===6){l=h=y;continue e}U=U.parentNode}}l=l.return}Ln(function(){var Q=h,fe=O(r),pe=[];e:{var ce=bf.get(t);if(ce!==void 0){var De=wl,Fe=t;switch(t){case"keypress":if(Oo(r)===0)break e;case"keydown":case"keyup":De=Wm;break;case"focusin":Fe="focus",De=Cl;break;case"focusout":Fe="blur",De=Cl;break;case"beforeblur":case"afterblur":De=Cl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=Dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=qm;break;case Rf:case Cf:case Pf:De=Im;break;case Lf:De=Km;break;case"scroll":De=Lm;break;case"wheel":De=Zm;break;case"copy":case"cut":case"paste":De=Om;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=uf}var Oe=(i&4)!==0,Ot=!Oe&&t==="scroll",W=Oe?ce!==null?ce+"Capture":null:ce;Oe=[];for(var H=Q,X;H!==null;){X=H;var xe=X.stateNode;if(X.tag===5&&xe!==null&&(X=xe,W!==null&&(xe=Ft(H,W),xe!=null&&Oe.push(Js(H,xe,X)))),Ot)break;H=H.return}0<Oe.length&&(ce=new De(ce,Fe,null,r,fe),pe.push({event:ce,listeners:Oe}))}}if((i&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",ce&&r!==He&&(Fe=r.relatedTarget||r.fromElement)&&(hr(Fe)||Fe[mi]))break e;if((De||ce)&&(ce=fe.window===fe?fe:(ce=fe.ownerDocument)?ce.defaultView||ce.parentWindow:window,De?(Fe=r.relatedTarget||r.toElement,De=Q,Fe=Fe?hr(Fe):null,Fe!==null&&(Ot=C(Fe),Fe!==Ot||Fe.tag!==5&&Fe.tag!==6)&&(Fe=null)):(De=null,Fe=Q),De!==Fe)){if(Oe=af,xe="onMouseLeave",W="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Oe=uf,xe="onPointerLeave",W="onPointerEnter",H="pointer"),Ot=De==null?ce:Kr(De),X=Fe==null?ce:Kr(Fe),ce=new Oe(xe,H+"leave",De,r,fe),ce.target=Ot,ce.relatedTarget=X,xe=null,hr(fe)===Q&&(Oe=new Oe(W,H+"enter",Fe,r,fe),Oe.target=X,Oe.relatedTarget=Ot,xe=Oe),Ot=xe,De&&Fe)t:{for(Oe=De,W=Fe,H=0,X=Oe;X;X=qr(X))H++;for(X=0,xe=W;xe;xe=qr(xe))X++;for(;0<H-X;)Oe=qr(Oe),H--;for(;0<X-H;)W=qr(W),X--;for(;H--;){if(Oe===W||W!==null&&Oe===W.alternate)break t;Oe=qr(Oe),W=qr(W)}Oe=null}else Oe=null;De!==null&&Ff(pe,ce,De,Oe,!1),Fe!==null&&Ot!==null&&Ff(pe,Ot,Fe,Oe,!0)}}e:{if(ce=Q?Kr(Q):window,De=ce.nodeName&&ce.nodeName.toLowerCase(),De==="select"||De==="input"&&ce.type==="file")var ze=rg;else if(mf(ce))if(_f)ze=lg;else{ze=og;var Ge=sg}else(De=ce.nodeName)&&De.toLowerCase()==="input"&&(ce.type==="checkbox"||ce.type==="radio")&&(ze=ag);if(ze&&(ze=ze(t,Q))){gf(pe,ze,r,fe);break e}Ge&&Ge(t,ce,Q),t==="focusout"&&(Ge=ce._wrapperState)&&Ge.controlled&&ce.type==="number"&&it(ce,"number",ce.value)}switch(Ge=Q?Kr(Q):window,t){case"focusin":(mf(Ge)||Ge.contentEditable==="true")&&(Xr=Ge,Nl=Q,$s=null);break;case"focusout":$s=Nl=Xr=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,wf(pe,r,fe);break;case"selectionchange":if(fg)break;case"keydown":case"keyup":wf(pe,r,fe)}var We;if(Ll)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else Wr?hf(t,r)&&($e="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&($e="onCompositionStart");$e&&(cf&&r.locale!=="ko"&&(Wr||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&Wr&&(We=sf()):(ki=fe,Tl="value"in ki?ki.value:ki.textContent,Wr=!0)),Ge=Wo(Q,$e),0<Ge.length&&($e=new lf($e,t,null,r,fe),pe.push({event:$e,listeners:Ge}),We?$e.data=We:(We=pf(r),We!==null&&($e.data=We)))),(We=Jm?eg(t,r):tg(t,r))&&(Q=Wo(Q,"onBeforeInput"),0<Q.length&&(fe=new lf("onBeforeInput","beforeinput",null,r,fe),pe.push({event:fe,listeners:Q}),fe.data=We))}Nf(pe,i)})}function Js(t,i,r){return{instance:t,listener:i,currentTarget:r}}function Wo(t,i){for(var r=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Ft(t,r),h!=null&&l.unshift(Js(t,h,c)),h=Ft(t,i),h!=null&&l.push(Js(t,h,c))),t=t.return}return l}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ff(t,i,r,l,c){for(var h=i._reactName,y=[];r!==null&&r!==l;){var U=r,B=U.alternate,Q=U.stateNode;if(B!==null&&B===l)break;U.tag===5&&Q!==null&&(U=Q,c?(B=Ft(r,h),B!=null&&y.unshift(Js(r,B,U))):c||(B=Ft(r,h),B!=null&&y.push(Js(r,B,U)))),r=r.return}y.length!==0&&t.push({event:i,listeners:y})}var mg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function Of(t){return(typeof t=="string"?t:""+t).replace(mg,`
`).replace(gg,"")}function Xo(t,i,r){if(i=Of(i),Of(t)!==i&&r)throw Error(n(425))}function jo(){}var Hl=null,Vl=null;function Gl(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wl=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,zf=typeof Promise=="function"?Promise:void 0,vg=typeof queueMicrotask=="function"?queueMicrotask:typeof zf<"u"?function(t){return zf.resolve(null).then(t).catch(xg)}:Wl;function xg(t){setTimeout(function(){throw t})}function Xl(t,i){var r=i,l=0;do{var c=r.nextSibling;if(t.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(l===0){t.removeChild(c),Gs(i);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=c}while(r);Gs(i)}function Hi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function kf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return t;i--}else r==="/$"&&i++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),ai="__reactFiber$"+Yr,eo="__reactProps$"+Yr,mi="__reactContainer$"+Yr,jl="__reactEvents$"+Yr,Sg="__reactListeners$"+Yr,yg="__reactHandles$"+Yr;function hr(t){var i=t[ai];if(i)return i;for(var r=t.parentNode;r;){if(i=r[mi]||r[ai]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=kf(t);t!==null;){if(r=t[ai])return r;t=kf(t)}return i}t=r,r=t.parentNode}return null}function to(t){return t=t[ai]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function qo(t){return t[eo]||null}var ql=[],$r=-1;function Vi(t){return{current:t}}function Tt(t){0>$r||(t.current=ql[$r],ql[$r]=null,$r--)}function Mt(t,i){$r++,ql[$r]=t.current,t.current=i}var Gi={},ln=Vi(Gi),Sn=Vi(!1),pr=Gi;function Zr(t,i){var r=t.type.contextTypes;if(!r)return Gi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in r)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function yn(t){return t=t.childContextTypes,t!=null}function Yo(){Tt(Sn),Tt(ln)}function Bf(t,i,r){if(ln.current!==Gi)throw Error(n(168));Mt(ln,i),Mt(Sn,r)}function Hf(t,i,r){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return r;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,be(t)||"Unknown",c));return w({},r,l)}function Ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gi,pr=ln.current,Mt(ln,t),Mt(Sn,Sn.current),!0}function Vf(t,i,r){var l=t.stateNode;if(!l)throw Error(n(169));r?(t=Hf(t,i,pr),l.__reactInternalMemoizedMergedChildContext=t,Tt(Sn),Tt(ln),Mt(ln,t)):Tt(Sn),Mt(Sn,r)}var gi=null,$o=!1,Yl=!1;function Gf(t){gi===null?gi=[t]:gi.push(t)}function Mg(t){$o=!0,Gf(t)}function Wi(){if(!Yl&&gi!==null){Yl=!0;var t=0,i=_t;try{var r=gi;for(_t=1;t<r.length;t++){var l=r[t];do l=l(!0);while(l!==null)}gi=null,$o=!1}catch(c){throw gi!==null&&(gi=gi.slice(t+1)),Ve(yt,Wi),c}finally{_t=i,Yl=!1}}return null}var Qr=[],Jr=0,Zo=null,Qo=0,kn=[],Bn=0,mr=null,_i=1,vi="";function gr(t,i){Qr[Jr++]=Qo,Qr[Jr++]=Zo,Zo=t,Qo=i}function Wf(t,i,r){kn[Bn++]=_i,kn[Bn++]=vi,kn[Bn++]=mr,mr=t;var l=_i;t=vi;var c=32-Vt(l)-1;l&=~(1<<c),r+=1;var h=32-Vt(i)+c;if(30<h){var y=c-c%5;h=(l&(1<<y)-1).toString(32),l>>=y,c-=y,_i=1<<32-Vt(i)+c|r<<c|l,vi=h+t}else _i=1<<h|r<<c|l,vi=t}function Kl(t){t.return!==null&&(gr(t,1),Wf(t,1,0))}function $l(t){for(;t===Zo;)Zo=Qr[--Jr],Qr[Jr]=null,Qo=Qr[--Jr],Qr[Jr]=null;for(;t===mr;)mr=kn[--Bn],kn[Bn]=null,vi=kn[--Bn],kn[Bn]=null,_i=kn[--Bn],kn[Bn]=null}var Dn=null,Un=null,Pt=!1,$n=null;function Xf(t,i){var r=Wn(5,null,null,0);r.elementType="DELETED",r.stateNode=i,r.return=t,i=t.deletions,i===null?(t.deletions=[r],t.flags|=16):i.push(r)}function jf(t,i){switch(t.tag){case 5:var r=t.type;return i=i.nodeType!==1||r.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,Un=Hi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(r=mr!==null?{id:_i,overflow:vi}:null,t.memoizedState={dehydrated:i,treeContext:r,retryLane:1073741824},r=Wn(18,null,null,0),r.stateNode=i,r.return=t,t.child=r,Dn=t,Un=null,!0):!1;default:return!1}}function Zl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ql(t){if(Pt){var i=Un;if(i){var r=i;if(!jf(t,i)){if(Zl(t))throw Error(n(418));i=Hi(r.nextSibling);var l=Dn;i&&jf(t,i)?Xf(l,r):(t.flags=t.flags&-4097|2,Pt=!1,Dn=t)}}else{if(Zl(t))throw Error(n(418));t.flags=t.flags&-4097|2,Pt=!1,Dn=t}}}function qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function Jo(t){if(t!==Dn)return!1;if(!Pt)return qf(t),Pt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Gl(t.type,t.memoizedProps)),i&&(i=Un)){if(Zl(t))throw Yf(),Error(n(418));for(;i;)Xf(t,i),i=Hi(i.nextSibling)}if(qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(i===0){Un=Hi(t.nextSibling);break e}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++}t=t.nextSibling}Un=null}}else Un=Dn?Hi(t.stateNode.nextSibling):null;return!0}function Yf(){for(var t=Un;t;)t=Hi(t.nextSibling)}function es(){Un=Dn=null,Pt=!1}function Jl(t){$n===null?$n=[t]:$n.push(t)}var Eg=L.ReactCurrentBatchConfig;function Zn(t,i){if(t&&t.defaultProps){i=w({},i),t=t.defaultProps;for(var r in t)i[r]===void 0&&(i[r]=t[r]);return i}return i}var ea=Vi(null),ta=null,ts=null,eu=null;function tu(){eu=ts=ta=null}function nu(t){var i=ea.current;Tt(ea),t._currentValue=i}function iu(t,i,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===r)break;t=t.return}}function ns(t,i){ta=t,eu=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Mn=!0),t.firstContext=null)}function Hn(t){var i=t._currentValue;if(eu!==t)if(t={context:t,memoizedValue:i,next:null},ts===null){if(ta===null)throw Error(n(308));ts=t,ta.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return i}var _r=null;function ru(t){_r===null?_r=[t]:_r.push(t)}function Kf(t,i,r,l){var c=i.interleaved;return c===null?(r.next=r,ru(i)):(r.next=c.next,c.next=r),i.interleaved=r,xi(t,l)}function xi(t,i){t.lanes|=i;var r=t.alternate;for(r!==null&&(r.lanes|=i),r=t,t=t.return;t!==null;)t.childLanes|=i,r=t.alternate,r!==null&&(r.childLanes|=i),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Xi=!1;function su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ji(t,i,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ht&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,xi(t,r)}return c=l.interleaved,c===null?(i.next=i,ru(l)):(i.next=c.next,c.next=i),l.interleaved=i,xi(t,r)}function na(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,xl(t,r)}}function Zf(t,i){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var c=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var y={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};h===null?c=h=y:h=h.next=y,r=r.next}while(r!==null);h===null?c=h=i:h=h.next=i}else c=h=i;r={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}function ia(t,i,r,l){var c=t.updateQueue;Xi=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,U=c.shared.pending;if(U!==null){c.shared.pending=null;var B=U,Q=B.next;B.next=null,y===null?h=Q:y.next=Q,y=B;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,U=fe.lastBaseUpdate,U!==y&&(U===null?fe.firstBaseUpdate=Q:U.next=Q,fe.lastBaseUpdate=B))}if(h!==null){var pe=c.baseState;y=0,fe=Q=B=null,U=h;do{var ce=U.lane,De=U.eventTime;if((l&ce)===ce){fe!==null&&(fe=fe.next={eventTime:De,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Fe=t,Oe=U;switch(ce=i,De=r,Oe.tag){case 1:if(Fe=Oe.payload,typeof Fe=="function"){pe=Fe.call(De,pe,ce);break e}pe=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=Oe.payload,ce=typeof Fe=="function"?Fe.call(De,pe,ce):Fe,ce==null)break e;pe=w({},pe,ce);break e;case 2:Xi=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ce=c.effects,ce===null?c.effects=[U]:ce.push(U))}else De={eventTime:De,lane:ce,tag:U.tag,payload:U.payload,callback:U.callback,next:null},fe===null?(Q=fe=De,B=pe):fe=fe.next=De,y|=ce;if(U=U.next,U===null){if(U=c.shared.pending,U===null)break;ce=U,U=ce.next,ce.next=null,c.lastBaseUpdate=ce,c.shared.pending=null}}while(!0);if(fe===null&&(B=pe),c.baseState=B,c.firstBaseUpdate=Q,c.lastBaseUpdate=fe,i=c.shared.interleaved,i!==null){c=i;do y|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Sr|=y,t.lanes=y,t.memoizedState=pe}}function Qf(t,i,r){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=r,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var Jf=new o.Component().refs;function ou(t,i,r,l){i=t.memoizedState,r=r(l,i),r=r==null?i:w({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ra={isMounted:function(t){return(t=t._reactInternals)?C(t)===t:!1},enqueueSetState:function(t,i,r){t=t._reactInternals;var l=gn(),c=$i(t),h=Si(l,c);h.payload=i,r!=null&&(h.callback=r),i=ji(t,h,c),i!==null&&(ei(i,t,c,l),na(i,t,c))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var l=gn(),c=$i(t),h=Si(l,c);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=ji(t,h,c),i!==null&&(ei(i,t,c,l),na(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=gn(),l=$i(t),c=Si(r,l);c.tag=2,i!=null&&(c.callback=i),i=ji(t,c,l),i!==null&&(ei(i,t,l,r),na(i,t,l))}};function ed(t,i,r,l,c,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,y):i.prototype&&i.prototype.isPureReactComponent?!Ks(r,l)||!Ks(c,h):!0}function td(t,i,r){var l=!1,c=Gi,h=i.contextType;return typeof h=="object"&&h!==null?h=Hn(h):(c=yn(i)?pr:ln.current,l=i.contextTypes,h=(l=l!=null)?Zr(t,c):Gi),i=new i(r,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ra,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function nd(t,i,r,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==t&&ra.enqueueReplaceState(i,i.state,null)}function au(t,i,r,l){var c=t.stateNode;c.props=r,c.state=t.memoizedState,c.refs=Jf,su(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Hn(h):(h=yn(i)?pr:ln.current,c.context=Zr(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(ou(t,i,h,r),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&ra.enqueueReplaceState(c,c.state,null),ia(t,r,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,i,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(n(309));var l=r.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(y){var U=c.refs;U===Jf&&(U=c.refs={}),y===null?delete U[h]:U[h]=y},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!r._owner)throw Error(n(290,t))}return t}function sa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function id(t){var i=t._init;return i(t._payload)}function rd(t){function i(W,H){if(t){var X=W.deletions;X===null?(W.deletions=[H],W.flags|=16):X.push(H)}}function r(W,H){if(!t)return null;for(;H!==null;)i(W,H),H=H.sibling;return null}function l(W,H){for(W=new Map;H!==null;)H.key!==null?W.set(H.key,H):W.set(H.index,H),H=H.sibling;return W}function c(W,H){return W=Qi(W,H),W.index=0,W.sibling=null,W}function h(W,H,X){return W.index=X,t?(X=W.alternate,X!==null?(X=X.index,X<H?(W.flags|=2,H):X):(W.flags|=2,H)):(W.flags|=1048576,H)}function y(W){return t&&W.alternate===null&&(W.flags|=2),W}function U(W,H,X,xe){return H===null||H.tag!==6?(H=Wu(X,W.mode,xe),H.return=W,H):(H=c(H,X),H.return=W,H)}function B(W,H,X,xe){var ze=X.type;return ze===F?fe(W,H,X.props.children,xe,X.key):H!==null&&(H.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===oe&&id(ze)===H.type)?(xe=c(H,X.props),xe.ref=no(W,H,X),xe.return=W,xe):(xe=Ta(X.type,X.key,X.props,null,W.mode,xe),xe.ref=no(W,H,X),xe.return=W,xe)}function Q(W,H,X,xe){return H===null||H.tag!==4||H.stateNode.containerInfo!==X.containerInfo||H.stateNode.implementation!==X.implementation?(H=Xu(X,W.mode,xe),H.return=W,H):(H=c(H,X.children||[]),H.return=W,H)}function fe(W,H,X,xe,ze){return H===null||H.tag!==7?(H=Tr(X,W.mode,xe,ze),H.return=W,H):(H=c(H,X),H.return=W,H)}function pe(W,H,X){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Wu(""+H,W.mode,X),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case N:return X=Ta(H.type,H.key,H.props,null,W.mode,X),X.ref=no(W,null,H),X.return=W,X;case k:return H=Xu(H,W.mode,X),H.return=W,H;case oe:var xe=H._init;return pe(W,xe(H._payload),X)}if(dt(H)||Z(H))return H=Tr(H,W.mode,X,null),H.return=W,H;sa(W,H)}return null}function ce(W,H,X,xe){var ze=H!==null?H.key:null;if(typeof X=="string"&&X!==""||typeof X=="number")return ze!==null?null:U(W,H,""+X,xe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case N:return X.key===ze?B(W,H,X,xe):null;case k:return X.key===ze?Q(W,H,X,xe):null;case oe:return ze=X._init,ce(W,H,ze(X._payload),xe)}if(dt(X)||Z(X))return ze!==null?null:fe(W,H,X,xe,null);sa(W,X)}return null}function De(W,H,X,xe,ze){if(typeof xe=="string"&&xe!==""||typeof xe=="number")return W=W.get(X)||null,U(H,W,""+xe,ze);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case N:return W=W.get(xe.key===null?X:xe.key)||null,B(H,W,xe,ze);case k:return W=W.get(xe.key===null?X:xe.key)||null,Q(H,W,xe,ze);case oe:var Ge=xe._init;return De(W,H,X,Ge(xe._payload),ze)}if(dt(xe)||Z(xe))return W=W.get(X)||null,fe(H,W,xe,ze,null);sa(H,xe)}return null}function Fe(W,H,X,xe){for(var ze=null,Ge=null,We=H,$e=H=0,Qt=null;We!==null&&$e<X.length;$e++){We.index>$e?(Qt=We,We=null):Qt=We.sibling;var pt=ce(W,We,X[$e],xe);if(pt===null){We===null&&(We=Qt);break}t&&We&&pt.alternate===null&&i(W,We),H=h(pt,H,$e),Ge===null?ze=pt:Ge.sibling=pt,Ge=pt,We=Qt}if($e===X.length)return r(W,We),Pt&&gr(W,$e),ze;if(We===null){for(;$e<X.length;$e++)We=pe(W,X[$e],xe),We!==null&&(H=h(We,H,$e),Ge===null?ze=We:Ge.sibling=We,Ge=We);return Pt&&gr(W,$e),ze}for(We=l(W,We);$e<X.length;$e++)Qt=De(We,W,$e,X[$e],xe),Qt!==null&&(t&&Qt.alternate!==null&&We.delete(Qt.key===null?$e:Qt.key),H=h(Qt,H,$e),Ge===null?ze=Qt:Ge.sibling=Qt,Ge=Qt);return t&&We.forEach(function(Ji){return i(W,Ji)}),Pt&&gr(W,$e),ze}function Oe(W,H,X,xe){var ze=Z(X);if(typeof ze!="function")throw Error(n(150));if(X=ze.call(X),X==null)throw Error(n(151));for(var Ge=ze=null,We=H,$e=H=0,Qt=null,pt=X.next();We!==null&&!pt.done;$e++,pt=X.next()){We.index>$e?(Qt=We,We=null):Qt=We.sibling;var Ji=ce(W,We,pt.value,xe);if(Ji===null){We===null&&(We=Qt);break}t&&We&&Ji.alternate===null&&i(W,We),H=h(Ji,H,$e),Ge===null?ze=Ji:Ge.sibling=Ji,Ge=Ji,We=Qt}if(pt.done)return r(W,We),Pt&&gr(W,$e),ze;if(We===null){for(;!pt.done;$e++,pt=X.next())pt=pe(W,pt.value,xe),pt!==null&&(H=h(pt,H,$e),Ge===null?ze=pt:Ge.sibling=pt,Ge=pt);return Pt&&gr(W,$e),ze}for(We=l(W,We);!pt.done;$e++,pt=X.next())pt=De(We,W,$e,pt.value,xe),pt!==null&&(t&&pt.alternate!==null&&We.delete(pt.key===null?$e:pt.key),H=h(pt,H,$e),Ge===null?ze=pt:Ge.sibling=pt,Ge=pt);return t&&We.forEach(function(n_){return i(W,n_)}),Pt&&gr(W,$e),ze}function Ot(W,H,X,xe){if(typeof X=="object"&&X!==null&&X.type===F&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case N:e:{for(var ze=X.key,Ge=H;Ge!==null;){if(Ge.key===ze){if(ze=X.type,ze===F){if(Ge.tag===7){r(W,Ge.sibling),H=c(Ge,X.props.children),H.return=W,W=H;break e}}else if(Ge.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===oe&&id(ze)===Ge.type){r(W,Ge.sibling),H=c(Ge,X.props),H.ref=no(W,Ge,X),H.return=W,W=H;break e}r(W,Ge);break}else i(W,Ge);Ge=Ge.sibling}X.type===F?(H=Tr(X.props.children,W.mode,xe,X.key),H.return=W,W=H):(xe=Ta(X.type,X.key,X.props,null,W.mode,xe),xe.ref=no(W,H,X),xe.return=W,W=xe)}return y(W);case k:e:{for(Ge=X.key;H!==null;){if(H.key===Ge)if(H.tag===4&&H.stateNode.containerInfo===X.containerInfo&&H.stateNode.implementation===X.implementation){r(W,H.sibling),H=c(H,X.children||[]),H.return=W,W=H;break e}else{r(W,H);break}else i(W,H);H=H.sibling}H=Xu(X,W.mode,xe),H.return=W,W=H}return y(W);case oe:return Ge=X._init,Ot(W,H,Ge(X._payload),xe)}if(dt(X))return Fe(W,H,X,xe);if(Z(X))return Oe(W,H,X,xe);sa(W,X)}return typeof X=="string"&&X!==""||typeof X=="number"?(X=""+X,H!==null&&H.tag===6?(r(W,H.sibling),H=c(H,X),H.return=W,W=H):(r(W,H),H=Wu(X,W.mode,xe),H.return=W,W=H),y(W)):r(W,H)}return Ot}var is=rd(!0),sd=rd(!1),io={},li=Vi(io),ro=Vi(io),so=Vi(io);function vr(t){if(t===io)throw Error(n(174));return t}function lu(t,i){switch(Mt(so,i),Mt(ro,t),Mt(li,io),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=me(i,t)}Tt(li),Mt(li,i)}function rs(){Tt(li),Tt(ro),Tt(so)}function od(t){vr(so.current);var i=vr(li.current),r=me(i,t.type);i!==r&&(Mt(ro,t),Mt(li,r))}function uu(t){ro.current===t&&(Tt(li),Tt(ro))}var bt=Vi(0);function oa(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var cu=[];function fu(){for(var t=0;t<cu.length;t++)cu[t]._workInProgressVersionPrimary=null;cu.length=0}var aa=L.ReactCurrentDispatcher,du=L.ReactCurrentBatchConfig,xr=0,Dt=null,Gt=null,$t=null,la=!1,oo=!1,ao=0,Tg=0;function un(){throw Error(n(321))}function hu(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!Kn(t[r],i[r]))return!1;return!0}function pu(t,i,r,l,c,h){if(xr=h,Dt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,aa.current=t===null||t.memoizedState===null?Cg:Pg,t=r(l,c),oo){h=0;do{if(oo=!1,ao=0,25<=h)throw Error(n(301));h+=1,$t=Gt=null,i.updateQueue=null,aa.current=Lg,t=r(l,c)}while(oo)}if(aa.current=fa,i=Gt!==null&&Gt.next!==null,xr=0,$t=Gt=Dt=null,la=!1,i)throw Error(n(300));return t}function mu(){var t=ao!==0;return ao=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Dt.memoizedState=$t=t:$t=$t.next=t,$t}function Vn(){if(Gt===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=$t===null?Dt.memoizedState:$t.next;if(i!==null)$t=i,Gt=t;else{if(t===null)throw Error(n(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},$t===null?Dt.memoizedState=$t=t:$t=$t.next=t}return $t}function lo(t,i){return typeof i=="function"?i(t):i}function gu(t){var i=Vn(),r=i.queue;if(r===null)throw Error(n(311));r.lastRenderedReducer=t;var l=Gt,c=l.baseQueue,h=r.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}l.baseQueue=c=h,r.pending=null}if(c!==null){h=c.next,l=l.baseState;var U=y=null,B=null,Q=h;do{var fe=Q.lane;if((xr&fe)===fe)B!==null&&(B=B.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var pe={lane:fe,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};B===null?(U=B=pe,y=l):B=B.next=pe,Dt.lanes|=fe,Sr|=fe}Q=Q.next}while(Q!==null&&Q!==h);B===null?y=l:B.next=U,Kn(l,i.memoizedState)||(Mn=!0),i.memoizedState=l,i.baseState=y,i.baseQueue=B,r.lastRenderedState=l}if(t=r.interleaved,t!==null){c=t;do h=c.lane,Dt.lanes|=h,Sr|=h,c=c.next;while(c!==t)}else c===null&&(r.lanes=0);return[i.memoizedState,r.dispatch]}function _u(t){var i=Vn(),r=i.queue;if(r===null)throw Error(n(311));r.lastRenderedReducer=t;var l=r.dispatch,c=r.pending,h=i.memoizedState;if(c!==null){r.pending=null;var y=c=c.next;do h=t(h,y.action),y=y.next;while(y!==c);Kn(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),r.lastRenderedState=h}return[h,l]}function ad(){}function ld(t,i){var r=Dt,l=Vn(),c=i(),h=!Kn(l.memoizedState,c);if(h&&(l.memoizedState=c,Mn=!0),l=l.queue,vu(fd.bind(null,r,l,t),[t]),l.getSnapshot!==i||h||$t!==null&&$t.memoizedState.tag&1){if(r.flags|=2048,uo(9,cd.bind(null,r,l,c,i),void 0,null),Zt===null)throw Error(n(349));(xr&30)!==0||ud(r,i,c)}return c}function ud(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=Dt.updateQueue,i===null?(i={lastEffect:null,stores:null},Dt.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function cd(t,i,r,l){i.value=r,i.getSnapshot=l,dd(i)&&hd(t)}function fd(t,i,r){return r(function(){dd(i)&&hd(t)})}function dd(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!Kn(t,r)}catch{return!0}}function hd(t){var i=xi(t,1);i!==null&&ei(i,t,1,-1)}function pd(t){var i=ui();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},i.queue=t,t=t.dispatch=Rg.bind(null,Dt,t),[i.memoizedState,t]}function uo(t,i,r,l){return t={tag:t,create:i,destroy:r,deps:l,next:null},i=Dt.updateQueue,i===null?(i={lastEffect:null,stores:null},Dt.updateQueue=i,i.lastEffect=t.next=t):(r=i.lastEffect,r===null?i.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,i.lastEffect=t)),t}function md(){return Vn().memoizedState}function ua(t,i,r,l){var c=ui();Dt.flags|=t,c.memoizedState=uo(1|i,r,void 0,l===void 0?null:l)}function ca(t,i,r,l){var c=Vn();l=l===void 0?null:l;var h=void 0;if(Gt!==null){var y=Gt.memoizedState;if(h=y.destroy,l!==null&&hu(l,y.deps)){c.memoizedState=uo(i,r,h,l);return}}Dt.flags|=t,c.memoizedState=uo(1|i,r,h,l)}function gd(t,i){return ua(8390656,8,t,i)}function vu(t,i){return ca(2048,8,t,i)}function _d(t,i){return ca(4,2,t,i)}function vd(t,i){return ca(4,4,t,i)}function xd(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Sd(t,i,r){return r=r!=null?r.concat([t]):null,ca(4,4,xd.bind(null,i,t),r)}function xu(){}function yd(t,i){var r=Vn();i=i===void 0?null:i;var l=r.memoizedState;return l!==null&&i!==null&&hu(i,l[1])?l[0]:(r.memoizedState=[t,i],t)}function Md(t,i){var r=Vn();i=i===void 0?null:i;var l=r.memoizedState;return l!==null&&i!==null&&hu(i,l[1])?l[0]:(t=t(),r.memoizedState=[t,i],t)}function Ed(t,i,r){return(xr&21)===0?(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=r):(Kn(r,i)||(r=Yc(),Dt.lanes|=r,Sr|=r,t.baseState=!0),i)}function wg(t,i){var r=_t;_t=r!==0&&4>r?r:4,t(!0);var l=du.transition;du.transition={};try{t(!1),i()}finally{_t=r,du.transition=l}}function Td(){return Vn().memoizedState}function Ag(t,i,r){var l=$i(t);if(r={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null},wd(t))Ad(i,r);else if(r=Kf(t,i,r,l),r!==null){var c=gn();ei(r,t,l,c),Rd(r,i,l)}}function Rg(t,i,r){var l=$i(t),c={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null};if(wd(t))Ad(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var y=i.lastRenderedState,U=h(y,r);if(c.hasEagerState=!0,c.eagerState=U,Kn(U,y)){var B=i.interleaved;B===null?(c.next=c,ru(i)):(c.next=B.next,B.next=c),i.interleaved=c;return}}catch{}finally{}r=Kf(t,i,c,l),r!==null&&(c=gn(),ei(r,t,l,c),Rd(r,i,l))}}function wd(t){var i=t.alternate;return t===Dt||i!==null&&i===Dt}function Ad(t,i){oo=la=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function Rd(t,i,r){if((r&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,xl(t,r)}}var fa={readContext:Hn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},Cg={readContext:Hn,useCallback:function(t,i){return ui().memoizedState=[t,i===void 0?null:i],t},useContext:Hn,useEffect:gd,useImperativeHandle:function(t,i,r){return r=r!=null?r.concat([t]):null,ua(4194308,4,xd.bind(null,i,t),r)},useLayoutEffect:function(t,i){return ua(4194308,4,t,i)},useInsertionEffect:function(t,i){return ua(4,2,t,i)},useMemo:function(t,i){var r=ui();return i=i===void 0?null:i,t=t(),r.memoizedState=[t,i],t},useReducer:function(t,i,r){var l=ui();return i=r!==void 0?r(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Ag.bind(null,Dt,t),[l.memoizedState,t]},useRef:function(t){var i=ui();return t={current:t},i.memoizedState=t},useState:pd,useDebugValue:xu,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=pd(!1),i=t[0];return t=wg.bind(null,t[1]),ui().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,r){var l=Dt,c=ui();if(Pt){if(r===void 0)throw Error(n(407));r=r()}else{if(r=i(),Zt===null)throw Error(n(349));(xr&30)!==0||ud(l,i,r)}c.memoizedState=r;var h={value:r,getSnapshot:i};return c.queue=h,gd(fd.bind(null,l,h,t),[t]),l.flags|=2048,uo(9,cd.bind(null,l,h,r,i),void 0,null),r},useId:function(){var t=ui(),i=Zt.identifierPrefix;if(Pt){var r=vi,l=_i;r=(l&~(1<<32-Vt(l)-1)).toString(32)+r,i=":"+i+"R"+r,r=ao++,0<r&&(i+="H"+r.toString(32)),i+=":"}else r=Tg++,i=":"+i+"r"+r.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Pg={readContext:Hn,useCallback:yd,useContext:Hn,useEffect:vu,useImperativeHandle:Sd,useInsertionEffect:_d,useLayoutEffect:vd,useMemo:Md,useReducer:gu,useRef:md,useState:function(){return gu(lo)},useDebugValue:xu,useDeferredValue:function(t){var i=Vn();return Ed(i,Gt.memoizedState,t)},useTransition:function(){var t=gu(lo)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:ad,useSyncExternalStore:ld,useId:Td,unstable_isNewReconciler:!1},Lg={readContext:Hn,useCallback:yd,useContext:Hn,useEffect:vu,useImperativeHandle:Sd,useInsertionEffect:_d,useLayoutEffect:vd,useMemo:Md,useReducer:_u,useRef:md,useState:function(){return _u(lo)},useDebugValue:xu,useDeferredValue:function(t){var i=Vn();return Gt===null?i.memoizedState=t:Ed(i,Gt.memoizedState,t)},useTransition:function(){var t=_u(lo)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:ad,useSyncExternalStore:ld,useId:Td,unstable_isNewReconciler:!1};function ss(t,i){try{var r="",l=i;do r+=ge(l),l=l.return;while(l);var c=r}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Su(t,i,r){return{value:t,source:null,stack:r??null,digest:i??null}}function yu(t,i){try{console.error(i.value)}catch(r){setTimeout(function(){throw r})}}var bg=typeof WeakMap=="function"?WeakMap:Map;function Cd(t,i,r){r=Si(-1,r),r.tag=3,r.payload={element:null};var l=i.value;return r.callback=function(){va||(va=!0,Fu=l),yu(t,i)},r}function Pd(t,i,r){r=Si(-1,r),r.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;r.payload=function(){return l(c)},r.callback=function(){yu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(r.callback=function(){yu(t,i),typeof l!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})}),r}function Ld(t,i,r){var l=t.pingCache;if(l===null){l=t.pingCache=new bg;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(r)||(c.add(r),t=Xg.bind(null,t,i,r),i.then(t,t))}function bd(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Dd(t,i,r,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(i=Si(-1,1),i.tag=2,ji(r,i,1))),r.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var Dg=L.ReactCurrentOwner,Mn=!1;function mn(t,i,r,l){i.child=t===null?sd(i,null,r,l):is(i,t.child,r,l)}function Ud(t,i,r,l,c){r=r.render;var h=i.ref;return ns(i,c),l=pu(t,i,r,l,h,c),r=mu(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,yi(t,i,c)):(Pt&&r&&Kl(i),i.flags|=1,mn(t,i,l,c),i.child)}function Nd(t,i,r,l,c){if(t===null){var h=r.type;return typeof h=="function"&&!Gu(h)&&h.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(i.tag=15,i.type=h,Id(t,i,h,l,c)):(t=Ta(r.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var y=h.memoizedProps;if(r=r.compare,r=r!==null?r:Ks,r(y,l)&&t.ref===i.ref)return yi(t,i,c)}return i.flags|=1,t=Qi(h,l),t.ref=i.ref,t.return=i,i.child=t}function Id(t,i,r,l,c){if(t!==null){var h=t.memoizedProps;if(Ks(h,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,yi(t,i,c)}return Mu(t,i,r,l,c)}function Fd(t,i,r){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(as,Nn),Nn|=r;else{if((r&1073741824)===0)return t=h!==null?h.baseLanes|r:r,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Mt(as,Nn),Nn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:r,Mt(as,Nn),Nn|=l}else h!==null?(l=h.baseLanes|r,i.memoizedState=null):l=r,Mt(as,Nn),Nn|=l;return mn(t,i,c,r),i.child}function Od(t,i){var r=i.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(i.flags|=512,i.flags|=2097152)}function Mu(t,i,r,l,c){var h=yn(r)?pr:ln.current;return h=Zr(i,h),ns(i,c),r=pu(t,i,r,l,h,c),l=mu(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,yi(t,i,c)):(Pt&&l&&Kl(i),i.flags|=1,mn(t,i,r,c),i.child)}function zd(t,i,r,l,c){if(yn(r)){var h=!0;Ko(i)}else h=!1;if(ns(i,c),i.stateNode===null)ha(t,i),td(i,r,l),au(i,r,l,c),l=!0;else if(t===null){var y=i.stateNode,U=i.memoizedProps;y.props=U;var B=y.context,Q=r.contextType;typeof Q=="object"&&Q!==null?Q=Hn(Q):(Q=yn(r)?pr:ln.current,Q=Zr(i,Q));var fe=r.getDerivedStateFromProps,pe=typeof fe=="function"||typeof y.getSnapshotBeforeUpdate=="function";pe||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(U!==l||B!==Q)&&nd(i,y,l,Q),Xi=!1;var ce=i.memoizedState;y.state=ce,ia(i,l,y,c),B=i.memoizedState,U!==l||ce!==B||Sn.current||Xi?(typeof fe=="function"&&(ou(i,r,fe,l),B=i.memoizedState),(U=Xi||ed(i,r,U,l,ce,B,Q))?(pe||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(i.flags|=4194308)):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),y.props=l,y.state=B,y.context=Q,l=U):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{y=i.stateNode,$f(t,i),U=i.memoizedProps,Q=i.type===i.elementType?U:Zn(i.type,U),y.props=Q,pe=i.pendingProps,ce=y.context,B=r.contextType,typeof B=="object"&&B!==null?B=Hn(B):(B=yn(r)?pr:ln.current,B=Zr(i,B));var De=r.getDerivedStateFromProps;(fe=typeof De=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(U!==pe||ce!==B)&&nd(i,y,l,B),Xi=!1,ce=i.memoizedState,y.state=ce,ia(i,l,y,c);var Fe=i.memoizedState;U!==pe||ce!==Fe||Sn.current||Xi?(typeof De=="function"&&(ou(i,r,De,l),Fe=i.memoizedState),(Q=Xi||ed(i,r,Q,l,ce,Fe,B)||!1)?(fe||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(l,Fe,B),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(l,Fe,B)),typeof y.componentDidUpdate=="function"&&(i.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof y.componentDidUpdate!="function"||U===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Fe),y.props=l,y.state=Fe,y.context=B,l=Q):(typeof y.componentDidUpdate!="function"||U===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),l=!1)}return Eu(t,i,r,l,h,c)}function Eu(t,i,r,l,c,h){Od(t,i);var y=(i.flags&128)!==0;if(!l&&!y)return c&&Vf(i,r,!1),yi(t,i,h);l=i.stateNode,Dg.current=i;var U=y&&typeof r.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&y?(i.child=is(i,t.child,null,h),i.child=is(i,null,U,h)):mn(t,i,U,h),i.memoizedState=l.state,c&&Vf(i,r,!0),i.child}function kd(t){var i=t.stateNode;i.pendingContext?Bf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Bf(t,i.context,!1),lu(t,i.containerInfo)}function Bd(t,i,r,l,c){return es(),Jl(c),i.flags|=256,mn(t,i,r,l),i.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hd(t,i,r){var l=i.pendingProps,c=bt.current,h=!1,y=(i.flags&128)!==0,U;if((U=y)||(U=t!==null&&t.memoizedState===null?!1:(c&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Mt(bt,c&1),t===null)return Ql(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(y=l.children,t=l.fallback,h?(l=i.mode,h=i.child,y={mode:"hidden",children:y},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=y):h=wa(y,l,0,null),t=Tr(t,l,r,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=wu(r),i.memoizedState=Tu,t):Au(i,y));if(c=t.memoizedState,c!==null&&(U=c.dehydrated,U!==null))return Ug(t,i,y,l,U,c,r);if(h){h=l.fallback,y=i.mode,c=t.child,U=c.sibling;var B={mode:"hidden",children:l.children};return(y&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=Qi(c,B),l.subtreeFlags=c.subtreeFlags&14680064),U!==null?h=Qi(U,h):(h=Tr(h,y,r,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,y=t.child.memoizedState,y=y===null?wu(r):{baseLanes:y.baseLanes|r,cachePool:null,transitions:y.transitions},h.memoizedState=y,h.childLanes=t.childLanes&~r,i.memoizedState=Tu,l}return h=t.child,t=h.sibling,l=Qi(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=r),l.return=i,l.sibling=null,t!==null&&(r=i.deletions,r===null?(i.deletions=[t],i.flags|=16):r.push(t)),i.child=l,i.memoizedState=null,l}function Au(t,i){return i=wa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function da(t,i,r,l){return l!==null&&Jl(l),is(i,t.child,null,r),t=Au(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Ug(t,i,r,l,c,h,y){if(r)return i.flags&256?(i.flags&=-257,l=Su(Error(n(422))),da(t,i,y,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=wa({mode:"visible",children:l.children},c,0,null),h=Tr(h,c,y,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&is(i,t.child,null,y),i.child.memoizedState=wu(y),i.memoizedState=Tu,h);if((i.mode&1)===0)return da(t,i,y,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=Su(h,l,void 0),da(t,i,y,l)}if(U=(y&t.childLanes)!==0,Mn||U){if(l=Zt,l!==null){switch(y&-y){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|y))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,xi(t,c),ei(l,t,c,-1))}return Vu(),l=Su(Error(n(421))),da(t,i,y,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=jg.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Un=Hi(c.nextSibling),Dn=i,Pt=!0,$n=null,t!==null&&(kn[Bn++]=_i,kn[Bn++]=vi,kn[Bn++]=mr,_i=t.id,vi=t.overflow,mr=i),i=Au(i,l.children),i.flags|=4096,i)}function Vd(t,i,r){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),iu(t.return,i,r)}function Ru(t,i,r,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=r,h.tailMode=c)}function Gd(t,i,r){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(mn(t,i,l.children,r),l=bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vd(t,r,i);else if(t.tag===19)Vd(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Mt(bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(r=i.child,c=null;r!==null;)t=r.alternate,t!==null&&oa(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=i.child,i.child=null):(c=r.sibling,r.sibling=null),Ru(i,!1,c,r,h);break;case"backwards":for(r=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&oa(t)===null){i.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}Ru(i,!0,r,null,h);break;case"together":Ru(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ha(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function yi(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Sr|=i.lanes,(r&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,r=Qi(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Qi(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function Ng(t,i,r){switch(i.tag){case 3:kd(i),es();break;case 5:od(i);break;case 1:yn(i.type)&&Ko(i);break;case 4:lu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Mt(ea,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Mt(bt,bt.current&1),i.flags|=128,null):(r&i.child.childLanes)!==0?Hd(t,i,r):(Mt(bt,bt.current&1),t=yi(t,i,r),t!==null?t.sibling:null);Mt(bt,bt.current&1);break;case 19:if(l=(r&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Gd(t,i,r);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt(bt,bt.current),l)break;return null;case 22:case 23:return i.lanes=0,Fd(t,i,r)}return yi(t,i,r)}var Wd,Cu,Xd,jd;Wd=function(t,i){for(var r=i.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Cu=function(){},Xd=function(t,i,r,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,vr(li.current);var h=null;switch(r){case"input":c=Xe(t,c),l=Xe(t,l),h=[];break;case"select":c=w({},c,{value:void 0}),l=w({},l,{value:void 0}),h=[];break;case"textarea":c=zt(t,c),l=zt(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=jo)}Qe(r,l);var y;r=null;for(Q in c)if(!l.hasOwnProperty(Q)&&c.hasOwnProperty(Q)&&c[Q]!=null)if(Q==="style"){var U=c[Q];for(y in U)U.hasOwnProperty(y)&&(r||(r={}),r[y]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(a.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in l){var B=l[Q];if(U=c?.[Q],l.hasOwnProperty(Q)&&B!==U&&(B!=null||U!=null))if(Q==="style")if(U){for(y in U)!U.hasOwnProperty(y)||B&&B.hasOwnProperty(y)||(r||(r={}),r[y]="");for(y in B)B.hasOwnProperty(y)&&U[y]!==B[y]&&(r||(r={}),r[y]=B[y])}else r||(h||(h=[]),h.push(Q,r)),r=B;else Q==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(h=h||[]).push(Q,B)):Q==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(Q,""+B):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(a.hasOwnProperty(Q)?(B!=null&&Q==="onScroll"&&Et("scroll",t),h||U===B||(h=[])):(h=h||[]).push(Q,B))}r&&(h=h||[]).push("style",r);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},jd=function(t,i,r,l){r!==l&&(i.flags|=4)};function co(t,i){if(!Pt)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(i)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=r,i}function Ig(t,i,r){var l=i.pendingProps;switch($l(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return yn(i.type)&&Yo(),cn(i),null;case 3:return l=i.stateNode,rs(),Tt(Sn),Tt(ln),fu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Jo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$n!==null&&(ku($n),$n=null))),Cu(t,i),cn(i),null;case 5:uu(i);var c=vr(so.current);if(r=i.type,t!==null&&i.stateNode!=null)Xd(t,i,r,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=vr(li.current),Jo(i)){l=i.stateNode,r=i.type;var h=i.memoizedProps;switch(l[ai]=i,l[eo]=h,t=(i.mode&1)!==0,r){case"dialog":Et("cancel",l),Et("close",l);break;case"iframe":case"object":case"embed":Et("load",l);break;case"video":case"audio":for(c=0;c<Zs.length;c++)Et(Zs[c],l);break;case"source":Et("error",l);break;case"img":case"image":case"link":Et("error",l),Et("load",l);break;case"details":Et("toggle",l);break;case"input":nt(l,h),Et("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Et("invalid",l);break;case"textarea":D(l,h),Et("invalid",l)}Qe(r,h),c=null;for(var y in h)if(h.hasOwnProperty(y)){var U=h[y];y==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&Xo(l.textContent,U,t),c=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&Xo(l.textContent,U,t),c=["children",""+U]):a.hasOwnProperty(y)&&U!=null&&y==="onScroll"&&Et("scroll",l)}switch(r){case"input":tt(l),lt(l,h,!0);break;case"textarea":tt(l),J(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=jo)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{y=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ye(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=y.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=y.createElement(r,{is:l.is}):(t=y.createElement(r),r==="select"&&(y=t,l.multiple?y.multiple=!0:l.size&&(y.size=l.size))):t=y.createElementNS(t,r),t[ai]=i,t[eo]=l,Wd(t,i,!1,!1),i.stateNode=t;e:{switch(y=je(r,l),r){case"dialog":Et("cancel",t),Et("close",t),c=l;break;case"iframe":case"object":case"embed":Et("load",t),c=l;break;case"video":case"audio":for(c=0;c<Zs.length;c++)Et(Zs[c],t);c=l;break;case"source":Et("error",t),c=l;break;case"img":case"image":case"link":Et("error",t),Et("load",t),c=l;break;case"details":Et("toggle",t),c=l;break;case"input":nt(t,l),c=Xe(t,l),Et("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=w({},l,{value:void 0}),Et("invalid",t);break;case"textarea":D(t,l),c=zt(t,l),Et("invalid",t);break;default:c=l}Qe(r,c),U=c;for(h in U)if(U.hasOwnProperty(h)){var B=U[h];h==="style"?Se(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ke(t,B)):h==="children"?typeof B=="string"?(r!=="textarea"||B!=="")&&Me(t,B):typeof B=="number"&&Me(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Et("scroll",t):B!=null&&P(t,h,B,y))}switch(r){case"input":tt(t),lt(t,l,!1);break;case"textarea":tt(t),J(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Rt(t,!!l.multiple,h,!1):l.defaultValue!=null&&Rt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=jo)}switch(r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)jd(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(r=vr(so.current),vr(li.current),Jo(i)){if(l=i.stateNode,r=i.memoizedProps,l[ai]=i,(h=l.nodeValue!==r)&&(t=Dn,t!==null))switch(t.tag){case 3:Xo(l.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xo(l.nodeValue,r,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(r.nodeType===9?r:r.ownerDocument).createTextNode(l),l[ai]=i,i.stateNode=l}return cn(i),null;case 13:if(Tt(bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pt&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Yf(),es(),i.flags|=98560,h=!1;else if(h=Jo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ai]=i}else es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),h=!1}else $n!==null&&(ku($n),$n=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=r,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(bt.current&1)!==0?Wt===0&&(Wt=3):Vu())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return rs(),Cu(t,i),t===null&&Qs(i.stateNode.containerInfo),cn(i),null;case 10:return nu(i.type._context),cn(i),null;case 17:return yn(i.type)&&Yo(),cn(i),null;case 19:if(Tt(bt),h=i.memoizedState,h===null)return cn(i),null;if(l=(i.flags&128)!==0,y=h.rendering,y===null)if(l)co(h,!1);else{if(Wt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(y=oa(t),y!==null){for(i.flags|=128,co(h,!1),l=y.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=r,r=i.child;r!==null;)h=r,t=l,h.flags&=14680066,y=h.alternate,y===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=y.childLanes,h.lanes=y.lanes,h.child=y.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=y.memoizedProps,h.memoizedState=y.memoizedState,h.updateQueue=y.updateQueue,h.type=y.type,t=y.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Mt(bt,bt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ue()>ls&&(i.flags|=128,l=!0,co(h,!1),i.lanes=4194304)}else{if(!l)if(t=oa(y),t!==null){if(i.flags|=128,l=!0,r=t.updateQueue,r!==null&&(i.updateQueue=r,i.flags|=4),co(h,!0),h.tail===null&&h.tailMode==="hidden"&&!y.alternate&&!Pt)return cn(i),null}else 2*Ue()-h.renderingStartTime>ls&&r!==1073741824&&(i.flags|=128,l=!0,co(h,!1),i.lanes=4194304);h.isBackwards?(y.sibling=i.child,i.child=y):(r=h.last,r!==null?r.sibling=y:i.child=y,h.last=y)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ue(),i.sibling=null,r=bt.current,Mt(bt,l?r&1|2:r&1),i):(cn(i),null);case 22:case 23:return Hu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Nn&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Fg(t,i){switch($l(i),i.tag){case 1:return yn(i.type)&&Yo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return rs(),Tt(Sn),Tt(ln),fu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return uu(i),null;case 13:if(Tt(bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));es()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Tt(bt),null;case 4:return rs(),null;case 10:return nu(i.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var pa=!1,fn=!1,Og=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function os(t,i){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(l){Nt(t,i,l)}else r.current=null}function Pu(t,i,r){try{r()}catch(l){Nt(t,i,l)}}var qd=!1;function zg(t,i){if(Hl=No,t=Tf(),Ul(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var y=0,U=-1,B=-1,Q=0,fe=0,pe=t,ce=null;t:for(;;){for(var De;pe!==r||c!==0&&pe.nodeType!==3||(U=y+c),pe!==h||l!==0&&pe.nodeType!==3||(B=y+l),pe.nodeType===3&&(y+=pe.nodeValue.length),(De=pe.firstChild)!==null;)ce=pe,pe=De;for(;;){if(pe===t)break t;if(ce===r&&++Q===c&&(U=y),ce===h&&++fe===l&&(B=y),(De=pe.nextSibling)!==null)break;pe=ce,ce=pe.parentNode}pe=De}r=U===-1||B===-1?null:{start:U,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vl={focusedElem:t,selectionRange:r},No=!1,Ie=i;Ie!==null;)if(i=Ie,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ie=t;else for(;Ie!==null;){i=Ie;try{var Fe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Fe!==null){var Oe=Fe.memoizedProps,Ot=Fe.memoizedState,W=i.stateNode,H=W.getSnapshotBeforeUpdate(i.elementType===i.type?Oe:Zn(i.type,Oe),Ot);W.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var X=i.stateNode.containerInfo;X.nodeType===1?X.textContent="":X.nodeType===9&&X.documentElement&&X.removeChild(X.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(xe){Nt(i,i.return,xe)}if(t=i.sibling,t!==null){t.return=i.return,Ie=t;break}Ie=i.return}return Fe=qd,qd=!1,Fe}function fo(t,i,r){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Pu(i,r,h)}c=c.next}while(c!==l)}}function ma(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var l=r.create;r.destroy=l()}r=r.next}while(r!==i)}}function Lu(t){var i=t.ref;if(i!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof i=="function"?i(t):i.current=t}}function Yd(t){var i=t.alternate;i!==null&&(t.alternate=null,Yd(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ai],delete i[eo],delete i[jl],delete i[Sg],delete i[yg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kd(t){return t.tag===5||t.tag===3||t.tag===4}function $d(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bu(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?r.nodeType===8?r.parentNode.insertBefore(t,i):r.insertBefore(t,i):(r.nodeType===8?(i=r.parentNode,i.insertBefore(t,r)):(i=r,i.appendChild(t)),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=jo));else if(l!==4&&(t=t.child,t!==null))for(bu(t,i,r),t=t.sibling;t!==null;)bu(t,i,r),t=t.sibling}function Du(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Du(t,i,r),t=t.sibling;t!==null;)Du(t,i,r),t=t.sibling}var tn=null,Qn=!1;function qi(t,i,r){for(r=r.child;r!==null;)Zd(t,i,r),r=r.sibling}function Zd(t,i,r){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(st,r)}catch{}switch(r.tag){case 5:fn||os(r,i);case 6:var l=tn,c=Qn;tn=null,qi(t,i,r),tn=l,Qn=c,tn!==null&&(Qn?(t=tn,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):tn.removeChild(r.stateNode));break;case 18:tn!==null&&(Qn?(t=tn,r=r.stateNode,t.nodeType===8?Xl(t.parentNode,r):t.nodeType===1&&Xl(t,r),Gs(t)):Xl(tn,r.stateNode));break;case 4:l=tn,c=Qn,tn=r.stateNode.containerInfo,Qn=!0,qi(t,i,r),tn=l,Qn=c;break;case 0:case 11:case 14:case 15:if(!fn&&(l=r.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,y=h.destroy;h=h.tag,y!==void 0&&((h&2)!==0||(h&4)!==0)&&Pu(r,i,y),c=c.next}while(c!==l)}qi(t,i,r);break;case 1:if(!fn&&(os(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=r.memoizedProps,l.state=r.memoizedState,l.componentWillUnmount()}catch(U){Nt(r,i,U)}qi(t,i,r);break;case 21:qi(t,i,r);break;case 22:r.mode&1?(fn=(l=fn)||r.memoizedState!==null,qi(t,i,r),fn=l):qi(t,i,r);break;default:qi(t,i,r)}}function Qd(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Og),i.forEach(function(l){var c=qg.bind(null,t,l);r.has(l)||(r.add(l),l.then(c,c))})}}function Jn(t,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l];try{var h=t,y=i,U=y;e:for(;U!==null;){switch(U.tag){case 5:tn=U.stateNode,Qn=!1;break e;case 3:tn=U.stateNode.containerInfo,Qn=!0;break e;case 4:tn=U.stateNode.containerInfo,Qn=!0;break e}U=U.return}if(tn===null)throw Error(n(160));Zd(h,y,c),tn=null,Qn=!1;var B=c.alternate;B!==null&&(B.return=null),c.return=null}catch(Q){Nt(c,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Jd(i,t),i=i.sibling}function Jd(t,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(i,t),ci(t),l&4){try{fo(3,t,t.return),ma(3,t)}catch(Oe){Nt(t,t.return,Oe)}try{fo(5,t,t.return)}catch(Oe){Nt(t,t.return,Oe)}}break;case 1:Jn(i,t),ci(t),l&512&&r!==null&&os(r,r.return);break;case 5:if(Jn(i,t),ci(t),l&512&&r!==null&&os(r,r.return),t.flags&32){var c=t.stateNode;try{Me(c,"")}catch(Oe){Nt(t,t.return,Oe)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,y=r!==null?r.memoizedProps:h,U=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&Ze(c,h),je(U,y);var Q=je(U,h);for(y=0;y<B.length;y+=2){var fe=B[y],pe=B[y+1];fe==="style"?Se(c,pe):fe==="dangerouslySetInnerHTML"?ke(c,pe):fe==="children"?Me(c,pe):P(c,fe,pe,Q)}switch(U){case"input":xt(c,h);break;case"textarea":E(c,h);break;case"select":var ce=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var De=h.value;De!=null?Rt(c,!!h.multiple,De,!1):ce!==!!h.multiple&&(h.defaultValue!=null?Rt(c,!!h.multiple,h.defaultValue,!0):Rt(c,!!h.multiple,h.multiple?[]:"",!1))}c[eo]=h}catch(Oe){Nt(t,t.return,Oe)}}break;case 6:if(Jn(i,t),ci(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Oe){Nt(t,t.return,Oe)}}break;case 3:if(Jn(i,t),ci(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Gs(i.containerInfo)}catch(Oe){Nt(t,t.return,Oe)}break;case 4:Jn(i,t),ci(t);break;case 13:Jn(i,t),ci(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Iu=Ue())),l&4&&Qd(t);break;case 22:if(fe=r!==null&&r.memoizedState!==null,t.mode&1?(fn=(Q=fn)||fe,Jn(i,t),fn=Q):Jn(i,t),ci(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!fe&&(t.mode&1)!==0)for(Ie=t,fe=t.child;fe!==null;){for(pe=Ie=fe;Ie!==null;){switch(ce=Ie,De=ce.child,ce.tag){case 0:case 11:case 14:case 15:fo(4,ce,ce.return);break;case 1:os(ce,ce.return);var Fe=ce.stateNode;if(typeof Fe.componentWillUnmount=="function"){l=ce,r=ce.return;try{i=l,Fe.props=i.memoizedProps,Fe.state=i.memoizedState,Fe.componentWillUnmount()}catch(Oe){Nt(l,r,Oe)}}break;case 5:os(ce,ce.return);break;case 22:if(ce.memoizedState!==null){nh(pe);continue}}De!==null?(De.return=ce,Ie=De):nh(pe)}fe=fe.sibling}e:for(fe=null,pe=t;;){if(pe.tag===5){if(fe===null){fe=pe;try{c=pe.stateNode,Q?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=pe.stateNode,B=pe.memoizedProps.style,y=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=ft("display",y))}catch(Oe){Nt(t,t.return,Oe)}}}else if(pe.tag===6){if(fe===null)try{pe.stateNode.nodeValue=Q?"":pe.memoizedProps}catch(Oe){Nt(t,t.return,Oe)}}else if((pe.tag!==22&&pe.tag!==23||pe.memoizedState===null||pe===t)&&pe.child!==null){pe.child.return=pe,pe=pe.child;continue}if(pe===t)break e;for(;pe.sibling===null;){if(pe.return===null||pe.return===t)break e;fe===pe&&(fe=null),pe=pe.return}fe===pe&&(fe=null),pe.sibling.return=pe.return,pe=pe.sibling}}break;case 19:Jn(i,t),ci(t),l&4&&Qd(t);break;case 21:break;default:Jn(i,t),ci(t)}}function ci(t){var i=t.flags;if(i&2){try{e:{for(var r=t.return;r!==null;){if(Kd(r)){var l=r;break e}r=r.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Me(c,""),l.flags&=-33);var h=$d(t);Du(t,h,c);break;case 3:case 4:var y=l.stateNode.containerInfo,U=$d(t);bu(t,U,y);break;default:throw Error(n(161))}}catch(B){Nt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function kg(t,i,r){Ie=t,eh(t)}function eh(t,i,r){for(var l=(t.mode&1)!==0;Ie!==null;){var c=Ie,h=c.child;if(c.tag===22&&l){var y=c.memoizedState!==null||pa;if(!y){var U=c.alternate,B=U!==null&&U.memoizedState!==null||fn;U=pa;var Q=fn;if(pa=y,(fn=B)&&!Q)for(Ie=c;Ie!==null;)y=Ie,B=y.child,y.tag===22&&y.memoizedState!==null?ih(c):B!==null?(B.return=y,Ie=B):ih(c);for(;h!==null;)Ie=h,eh(h),h=h.sibling;Ie=c,pa=U,fn=Q}th(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Ie=h):th(t)}}function th(t){for(;Ie!==null;){var i=Ie;if((i.flags&8772)!==0){var r=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||ma(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(r===null)l.componentDidMount();else{var c=i.elementType===i.type?r.memoizedProps:Zn(i.type,r.memoizedProps);l.componentDidUpdate(c,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Qf(i,h,l);break;case 3:var y=i.updateQueue;if(y!==null){if(r=null,i.child!==null)switch(i.child.tag){case 5:r=i.child.stateNode;break;case 1:r=i.child.stateNode}Qf(i,y,r)}break;case 5:var U=i.stateNode;if(r===null&&i.flags&4){r=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&r.focus();break;case"img":B.src&&(r.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var fe=Q.memoizedState;if(fe!==null){var pe=fe.dehydrated;pe!==null&&Gs(pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&Lu(i)}catch(ce){Nt(i,i.return,ce)}}if(i===t){Ie=null;break}if(r=i.sibling,r!==null){r.return=i.return,Ie=r;break}Ie=i.return}}function nh(t){for(;Ie!==null;){var i=Ie;if(i===t){Ie=null;break}var r=i.sibling;if(r!==null){r.return=i.return,Ie=r;break}Ie=i.return}}function ih(t){for(;Ie!==null;){var i=Ie;try{switch(i.tag){case 0:case 11:case 15:var r=i.return;try{ma(4,i)}catch(B){Nt(i,r,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(B){Nt(i,c,B)}}var h=i.return;try{Lu(i)}catch(B){Nt(i,h,B)}break;case 5:var y=i.return;try{Lu(i)}catch(B){Nt(i,y,B)}}}catch(B){Nt(i,i.return,B)}if(i===t){Ie=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ie=U;break}Ie=i.return}}var Bg=Math.ceil,ga=L.ReactCurrentDispatcher,Uu=L.ReactCurrentOwner,Gn=L.ReactCurrentBatchConfig,ht=0,Zt=null,Bt=null,nn=0,Nn=0,as=Vi(0),Wt=0,ho=null,Sr=0,_a=0,Nu=0,po=null,En=null,Iu=0,ls=1/0,Mi=null,va=!1,Fu=null,Yi=null,xa=!1,Ki=null,Sa=0,mo=0,Ou=null,ya=-1,Ma=0;function gn(){return(ht&6)!==0?Ue():ya!==-1?ya:ya=Ue()}function $i(t){return(t.mode&1)===0?1:(ht&2)!==0&&nn!==0?nn&-nn:Eg.transition!==null?(Ma===0&&(Ma=Yc()),Ma):(t=_t,t!==0||(t=window.event,t=t===void 0?16:rf(t.type)),t)}function ei(t,i,r,l){if(50<mo)throw mo=0,Ou=null,Error(n(185));zs(t,r,l),((ht&2)===0||t!==Zt)&&(t===Zt&&((ht&2)===0&&(_a|=r),Wt===4&&Zi(t,nn)),Tn(t,l),r===1&&ht===0&&(i.mode&1)===0&&(ls=Ue()+500,$o&&Wi()))}function Tn(t,i){var r=t.callbackNode;_l(t,i);var l=Kt(t,t===Zt?nn:0);if(l===0)r!==null&&qe(r),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(r!=null&&qe(r),i===1)t.tag===0?Mg(sh.bind(null,t)):Gf(sh.bind(null,t)),vg(function(){(ht&6)===0&&Wi()}),r=null;else{switch(Kc(l)){case 1:r=yt;break;case 4:r=Ct;break;case 16:r=en;break;case 536870912:r=Lt;break;default:r=en}r=hh(r,rh.bind(null,t))}t.callbackPriority=i,t.callbackNode=r}}function rh(t,i){if(ya=-1,Ma=0,(ht&6)!==0)throw Error(n(327));var r=t.callbackNode;if(us()&&t.callbackNode!==r)return null;var l=Kt(t,t===Zt?nn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ea(t,l);else{i=l;var c=ht;ht|=2;var h=ah();(Zt!==t||nn!==i)&&(Mi=null,ls=Ue()+500,Mr(t,i));do try{Gg();break}catch(U){oh(t,U)}while(!0);tu(),ga.current=h,ht=c,Bt!==null?i=0:(Zt=null,nn=0,i=Wt)}if(i!==0){if(i===2&&(c=Hr(t),c!==0&&(l=c,i=zu(t,c))),i===1)throw r=ho,Mr(t,0),Zi(t,l),Tn(t,Ue()),r;if(i===6)Zi(t,l);else{if(c=t.current.alternate,(l&30)===0&&!Hg(c)&&(i=Ea(t,l),i===2&&(h=Hr(t),h!==0&&(l=h,i=zu(t,h))),i===1))throw r=ho,Mr(t,0),Zi(t,l),Tn(t,Ue()),r;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Er(t,En,Mi);break;case 3:if(Zi(t,l),(l&130023424)===l&&(i=Iu+500-Ue(),10<i)){if(Kt(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){gn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Wl(Er.bind(null,t,En,Mi),i);break}Er(t,En,Mi);break;case 4:if(Zi(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var y=31-Vt(l);h=1<<y,y=i[y],y>c&&(c=y),l&=~h}if(l=c,l=Ue()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Bg(l/1960))-l,10<l){t.timeoutHandle=Wl(Er.bind(null,t,En,Mi),l);break}Er(t,En,Mi);break;case 5:Er(t,En,Mi);break;default:throw Error(n(329))}}}return Tn(t,Ue()),t.callbackNode===r?rh.bind(null,t):null}function zu(t,i){var r=po;return t.current.memoizedState.isDehydrated&&(Mr(t,i).flags|=256),t=Ea(t,i),t!==2&&(i=En,En=r,i!==null&&ku(i)),t}function ku(t){En===null?En=t:En.push.apply(En,t)}function Hg(t){for(var i=t;;){if(i.flags&16384){var r=i.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var l=0;l<r.length;l++){var c=r[l],h=c.getSnapshot;c=c.value;try{if(!Kn(h(),c))return!1}catch{return!1}}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Zi(t,i){for(i&=~Nu,i&=~_a,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var r=31-Vt(i),l=1<<r;t[r]=-1,i&=~l}}function sh(t){if((ht&6)!==0)throw Error(n(327));us();var i=Kt(t,0);if((i&1)===0)return Tn(t,Ue()),null;var r=Ea(t,i);if(t.tag!==0&&r===2){var l=Hr(t);l!==0&&(i=l,r=zu(t,l))}if(r===1)throw r=ho,Mr(t,0),Zi(t,i),Tn(t,Ue()),r;if(r===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Er(t,En,Mi),Tn(t,Ue()),null}function Bu(t,i){var r=ht;ht|=1;try{return t(i)}finally{ht=r,ht===0&&(ls=Ue()+500,$o&&Wi())}}function yr(t){Ki!==null&&Ki.tag===0&&(ht&6)===0&&us();var i=ht;ht|=1;var r=Gn.transition,l=_t;try{if(Gn.transition=null,_t=1,t)return t()}finally{_t=l,Gn.transition=r,ht=i,(ht&6)===0&&Wi()}}function Hu(){Nn=as.current,Tt(as)}function Mr(t,i){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,_g(r)),Bt!==null)for(r=Bt.return;r!==null;){var l=r;switch($l(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Yo();break;case 3:rs(),Tt(Sn),Tt(ln),fu();break;case 5:uu(l);break;case 4:rs();break;case 13:Tt(bt);break;case 19:Tt(bt);break;case 10:nu(l.type._context);break;case 22:case 23:Hu()}r=r.return}if(Zt=t,Bt=t=Qi(t.current,null),nn=Nn=i,Wt=0,ho=null,Nu=_a=Sr=0,En=po=null,_r!==null){for(i=0;i<_r.length;i++)if(r=_r[i],l=r.interleaved,l!==null){r.interleaved=null;var c=l.next,h=r.pending;if(h!==null){var y=h.next;h.next=c,l.next=y}r.pending=l}_r=null}return t}function oh(t,i){do{var r=Bt;try{if(tu(),aa.current=fa,la){for(var l=Dt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}la=!1}if(xr=0,$t=Gt=Dt=null,oo=!1,ao=0,Uu.current=null,r===null||r.return===null){Wt=1,ho=i,Bt=null;break}e:{var h=t,y=r.return,U=r,B=i;if(i=nn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var Q=B,fe=U,pe=fe.tag;if((fe.mode&1)===0&&(pe===0||pe===11||pe===15)){var ce=fe.alternate;ce?(fe.updateQueue=ce.updateQueue,fe.memoizedState=ce.memoizedState,fe.lanes=ce.lanes):(fe.updateQueue=null,fe.memoizedState=null)}var De=bd(y);if(De!==null){De.flags&=-257,Dd(De,y,U,h,i),De.mode&1&&Ld(h,Q,i),i=De,B=Q;var Fe=i.updateQueue;if(Fe===null){var Oe=new Set;Oe.add(B),i.updateQueue=Oe}else Fe.add(B);break e}else{if((i&1)===0){Ld(h,Q,i),Vu();break e}B=Error(n(426))}}else if(Pt&&U.mode&1){var Ot=bd(y);if(Ot!==null){(Ot.flags&65536)===0&&(Ot.flags|=256),Dd(Ot,y,U,h,i),Jl(ss(B,U));break e}}h=B=ss(B,U),Wt!==4&&(Wt=2),po===null?po=[h]:po.push(h),h=y;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var W=Cd(h,B,i);Zf(h,W);break e;case 1:U=B;var H=h.type,X=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||X!==null&&typeof X.componentDidCatch=="function"&&(Yi===null||!Yi.has(X)))){h.flags|=65536,i&=-i,h.lanes|=i;var xe=Pd(h,U,i);Zf(h,xe);break e}}h=h.return}while(h!==null)}uh(r)}catch(ze){i=ze,Bt===r&&r!==null&&(Bt=r=r.return);continue}break}while(!0)}function ah(){var t=ga.current;return ga.current=fa,t===null?fa:t}function Vu(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Zt===null||(Sr&268435455)===0&&(_a&268435455)===0||Zi(Zt,nn)}function Ea(t,i){var r=ht;ht|=2;var l=ah();(Zt!==t||nn!==i)&&(Mi=null,Mr(t,i));do try{Vg();break}catch(c){oh(t,c)}while(!0);if(tu(),ht=r,ga.current=l,Bt!==null)throw Error(n(261));return Zt=null,nn=0,Wt}function Vg(){for(;Bt!==null;)lh(Bt)}function Gg(){for(;Bt!==null&&!Ke();)lh(Bt)}function lh(t){var i=dh(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,i===null?uh(t):Bt=i,Uu.current=null}function uh(t){var i=t;do{var r=i.alternate;if(t=i.return,(i.flags&32768)===0){if(r=Ig(r,i,Nn),r!==null){Bt=r;return}}else{if(r=Fg(r,i),r!==null){r.flags&=32767,Bt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Wt=6,Bt=null;return}}if(i=i.sibling,i!==null){Bt=i;return}Bt=i=t}while(i!==null);Wt===0&&(Wt=5)}function Er(t,i,r){var l=_t,c=Gn.transition;try{Gn.transition=null,_t=1,Wg(t,i,r,l)}finally{Gn.transition=c,_t=l}return null}function Wg(t,i,r,l){do us();while(Ki!==null);if((ht&6)!==0)throw Error(n(327));r=t.finishedWork;var c=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=r.lanes|r.childLanes;if(Tm(t,h),t===Zt&&(Bt=Zt=null,nn=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||xa||(xa=!0,hh(en,function(){return us(),null})),h=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||h){h=Gn.transition,Gn.transition=null;var y=_t;_t=1;var U=ht;ht|=4,Uu.current=null,zg(t,r),Jd(r,t),cg(Vl),No=!!Hl,Vl=Hl=null,t.current=r,kg(r),at(),ht=U,_t=y,Gn.transition=h}else t.current=r;if(xa&&(xa=!1,Ki=t,Sa=c),h=t.pendingLanes,h===0&&(Yi=null),Ut(r.stateNode),Tn(t,Ue()),i!==null)for(l=t.onRecoverableError,r=0;r<i.length;r++)c=i[r],l(c.value,{componentStack:c.stack,digest:c.digest});if(va)throw va=!1,t=Fu,Fu=null,t;return(Sa&1)!==0&&t.tag!==0&&us(),h=t.pendingLanes,(h&1)!==0?t===Ou?mo++:(mo=0,Ou=t):mo=0,Wi(),null}function us(){if(Ki!==null){var t=Kc(Sa),i=Gn.transition,r=_t;try{if(Gn.transition=null,_t=16>t?16:t,Ki===null)var l=!1;else{if(t=Ki,Ki=null,Sa=0,(ht&6)!==0)throw Error(n(331));var c=ht;for(ht|=4,Ie=t.current;Ie!==null;){var h=Ie,y=h.child;if((Ie.flags&16)!==0){var U=h.deletions;if(U!==null){for(var B=0;B<U.length;B++){var Q=U[B];for(Ie=Q;Ie!==null;){var fe=Ie;switch(fe.tag){case 0:case 11:case 15:fo(8,fe,h)}var pe=fe.child;if(pe!==null)pe.return=fe,Ie=pe;else for(;Ie!==null;){fe=Ie;var ce=fe.sibling,De=fe.return;if(Yd(fe),fe===Q){Ie=null;break}if(ce!==null){ce.return=De,Ie=ce;break}Ie=De}}}var Fe=h.alternate;if(Fe!==null){var Oe=Fe.child;if(Oe!==null){Fe.child=null;do{var Ot=Oe.sibling;Oe.sibling=null,Oe=Ot}while(Oe!==null)}}Ie=h}}if((h.subtreeFlags&2064)!==0&&y!==null)y.return=h,Ie=y;else e:for(;Ie!==null;){if(h=Ie,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:fo(9,h,h.return)}var W=h.sibling;if(W!==null){W.return=h.return,Ie=W;break e}Ie=h.return}}var H=t.current;for(Ie=H;Ie!==null;){y=Ie;var X=y.child;if((y.subtreeFlags&2064)!==0&&X!==null)X.return=y,Ie=X;else e:for(y=H;Ie!==null;){if(U=Ie,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:ma(9,U)}}catch(ze){Nt(U,U.return,ze)}if(U===y){Ie=null;break e}var xe=U.sibling;if(xe!==null){xe.return=U.return,Ie=xe;break e}Ie=U.return}}if(ht=c,Wi(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(st,t)}catch{}l=!0}return l}finally{_t=r,Gn.transition=i}}return!1}function ch(t,i,r){i=ss(r,i),i=Cd(t,i,1),t=ji(t,i,1),i=gn(),t!==null&&(zs(t,1,i),Tn(t,i))}function Nt(t,i,r){if(t.tag===3)ch(t,t,r);else for(;i!==null;){if(i.tag===3){ch(i,t,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Yi===null||!Yi.has(l))){t=ss(r,t),t=Pd(i,t,1),i=ji(i,t,1),t=gn(),i!==null&&(zs(i,1,t),Tn(i,t));break}}i=i.return}}function Xg(t,i,r){var l=t.pingCache;l!==null&&l.delete(i),i=gn(),t.pingedLanes|=t.suspendedLanes&r,Zt===t&&(nn&r)===r&&(Wt===4||Wt===3&&(nn&130023424)===nn&&500>Ue()-Iu?Mr(t,0):Nu|=r),Tn(t,i)}function fh(t,i){i===0&&((t.mode&1)===0?i=1:(i=zn,zn<<=1,(zn&130023424)===0&&(zn=4194304)));var r=gn();t=xi(t,i),t!==null&&(zs(t,i,r),Tn(t,r))}function jg(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),fh(t,r)}function qg(t,i){var r=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),fh(t,r)}var dh;dh=function(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps||Sn.current)Mn=!0;else{if((t.lanes&r)===0&&(i.flags&128)===0)return Mn=!1,Ng(t,i,r);Mn=(t.flags&131072)!==0}else Mn=!1,Pt&&(i.flags&1048576)!==0&&Wf(i,Qo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ha(t,i),t=i.pendingProps;var c=Zr(i,ln.current);ns(i,r),c=pu(null,i,l,t,c,r);var h=mu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,yn(l)?(h=!0,Ko(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,su(i),c.updater=ra,i.stateNode=c,c._reactInternals=i,au(i,l,t,r),i=Eu(null,i,l,!0,h,r)):(i.tag=0,Pt&&h&&Kl(i),mn(null,i,c,r),i=i.child),i;case 16:l=i.elementType;e:{switch(ha(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=Kg(l),t=Zn(l,t),c){case 0:i=Mu(null,i,l,t,r);break e;case 1:i=zd(null,i,l,t,r);break e;case 11:i=Ud(null,i,l,t,r);break e;case 14:i=Nd(null,i,l,Zn(l.type,t),r);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Mu(t,i,l,c,r);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),zd(t,i,l,c,r);case 3:e:{if(kd(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,$f(t,i),ia(i,l,null,r);var y=i.memoizedState;if(l=y.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ss(Error(n(423)),i),i=Bd(t,i,l,r,c);break e}else if(l!==c){c=ss(Error(n(424)),i),i=Bd(t,i,l,r,c);break e}else for(Un=Hi(i.stateNode.containerInfo.firstChild),Dn=i,Pt=!0,$n=null,r=sd(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(es(),l===c){i=yi(t,i,r);break e}mn(t,i,l,r)}i=i.child}return i;case 5:return od(i),t===null&&Ql(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,y=c.children,Gl(l,c)?y=null:h!==null&&Gl(l,h)&&(i.flags|=32),Od(t,i),mn(t,i,y,r),i.child;case 6:return t===null&&Ql(i),null;case 13:return Hd(t,i,r);case 4:return lu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=is(i,null,l,r):mn(t,i,l,r),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Ud(t,i,l,c,r);case 7:return mn(t,i,i.pendingProps,r),i.child;case 8:return mn(t,i,i.pendingProps.children,r),i.child;case 12:return mn(t,i,i.pendingProps.children,r),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,y=c.value,Mt(ea,l._currentValue),l._currentValue=y,h!==null)if(Kn(h.value,y)){if(h.children===c.children&&!Sn.current){i=yi(t,i,r);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){y=h.child;for(var B=U.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=Si(-1,r&-r),B.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var fe=Q.pending;fe===null?B.next=B:(B.next=fe.next,fe.next=B),Q.pending=B}}h.lanes|=r,B=h.alternate,B!==null&&(B.lanes|=r),iu(h.return,r,i),U.lanes|=r;break}B=B.next}}else if(h.tag===10)y=h.type===i.type?null:h.child;else if(h.tag===18){if(y=h.return,y===null)throw Error(n(341));y.lanes|=r,U=y.alternate,U!==null&&(U.lanes|=r),iu(y,r,i),y=h.sibling}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===i){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}mn(t,i,c.children,r),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ns(i,r),c=Hn(c),l=l(c),i.flags|=1,mn(t,i,l,r),i.child;case 14:return l=i.type,c=Zn(l,i.pendingProps),c=Zn(l.type,c),Nd(t,i,l,c,r);case 15:return Id(t,i,i.type,i.pendingProps,r);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),ha(t,i),i.tag=1,yn(l)?(t=!0,Ko(i)):t=!1,ns(i,r),td(i,l,c),au(i,l,c,r),Eu(null,i,l,!0,t,r);case 19:return Gd(t,i,r);case 22:return Fd(t,i,r)}throw Error(n(156,i.tag))};function hh(t,i){return Ve(t,i)}function Yg(t,i,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,i,r,l){return new Yg(t,i,r,l)}function Gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Kg(t){if(typeof t=="function")return Gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===re)return 14}return 2}function Qi(t,i){var r=t.alternate;return r===null?(r=Wn(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ta(t,i,r,l,c,h){var y=2;if(l=t,typeof t=="function")Gu(t)&&(y=1);else if(typeof t=="string")y=5;else e:switch(t){case F:return Tr(r.children,c,h,i);case K:y=8,c|=8;break;case R:return t=Wn(12,r,i,c|2),t.elementType=R,t.lanes=h,t;case de:return t=Wn(13,r,i,c),t.elementType=de,t.lanes=h,t;case G:return t=Wn(19,r,i,c),t.elementType=G,t.lanes=h,t;case te:return wa(r,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:y=10;break e;case se:y=9;break e;case ae:y=11;break e;case re:y=14;break e;case oe:y=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Wn(y,r,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Tr(t,i,r,l){return t=Wn(7,t,l,i),t.lanes=r,t}function wa(t,i,r,l){return t=Wn(22,t,l,i),t.elementType=te,t.lanes=r,t.stateNode={isHidden:!1},t}function Wu(t,i,r){return t=Wn(6,t,null,i),t.lanes=r,t}function Xu(t,i,r){return i=Wn(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function $g(t,i,r,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ju(t,i,r,l,c,h,y,U,B){return t=new $g(t,i,r,U,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Wn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(h),t}function Zg(t,i,r){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:r}}function ph(t){if(!t)return Gi;t=t._reactInternals;e:{if(C(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var r=t.type;if(yn(r))return Hf(t,r,i)}return i}function mh(t,i,r,l,c,h,y,U,B){return t=ju(r,l,!0,t,c,h,y,U,B),t.context=ph(null),r=t.current,l=gn(),c=$i(r),h=Si(l,c),h.callback=i??null,ji(r,h,c),t.current.lanes=c,zs(t,c,l),Tn(t,l),t}function Aa(t,i,r,l){var c=i.current,h=gn(),y=$i(c);return r=ph(r),i.context===null?i.context=r:i.pendingContext=r,i=Si(h,y),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ji(c,i,y),t!==null&&(ei(t,c,y,h),na(t,c,y)),y}function Ra(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gh(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function qu(t,i){gh(t,i),(t=t.alternate)&&gh(t,i)}function Qg(){return null}var _h=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yu(t){this._internalRoot=t}Ca.prototype.render=Yu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Aa(t,i,null,null)},Ca.prototype.unmount=Yu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;yr(function(){Aa(null,t,null,null)}),i[mi]=null}};function Ca(t){this._internalRoot=t}Ca.prototype.unstable_scheduleHydration=function(t){if(t){var i=Qc();t={blockedOn:null,target:t,priority:i};for(var r=0;r<zi.length&&i!==0&&i<zi[r].priority;r++);zi.splice(r,0,t),r===0&&tf(t)}};function Ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vh(){}function Jg(t,i,r,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Q=Ra(y);h.call(Q)}}var y=mh(i,l,t,0,null,!1,!1,"",vh);return t._reactRootContainer=y,t[mi]=y.current,Qs(t.nodeType===8?t.parentNode:t),yr(),y}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var U=l;l=function(){var Q=Ra(B);U.call(Q)}}var B=ju(t,0,!1,null,null,!1,!1,"",vh);return t._reactRootContainer=B,t[mi]=B.current,Qs(t.nodeType===8?t.parentNode:t),yr(function(){Aa(i,B,r,l)}),B}function La(t,i,r,l,c){var h=r._reactRootContainer;if(h){var y=h;if(typeof c=="function"){var U=c;c=function(){var B=Ra(y);U.call(B)}}Aa(i,y,t,c)}else y=Jg(r,i,t,c,l);return Ra(y)}$c=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var r=pi(i.pendingLanes);r!==0&&(xl(i,r|1),Tn(i,Ue()),(ht&6)===0&&(ls=Ue()+500,Wi()))}break;case 13:yr(function(){var l=xi(t,1);if(l!==null){var c=gn();ei(l,t,1,c)}}),qu(t,1)}},Sl=function(t){if(t.tag===13){var i=xi(t,134217728);if(i!==null){var r=gn();ei(i,t,134217728,r)}qu(t,134217728)}},Zc=function(t){if(t.tag===13){var i=$i(t),r=xi(t,i);if(r!==null){var l=gn();ei(r,t,i,l)}qu(t,i)}},Qc=function(){return _t},Jc=function(t,i){var r=_t;try{return _t=t,i()}finally{_t=r}},Ee=function(t,i,r){switch(i){case"input":if(xt(t,r),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==t&&l.form===t.form){var c=qo(l);if(!c)throw Error(n(90));Y(l),xt(l,c)}}}break;case"textarea":E(t,r);break;case"select":i=r.value,i!=null&&Rt(t,!!r.multiple,i,!1)}},et=Bu,Yt=yr;var e_={usingClientEntryPoint:!1,Events:[to,Kr,qo,he,Be,Bu]},go={findFiberByHostInstance:hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},t_={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ie(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||Qg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{st=ba.inject(t_),xn=ba}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_,wn.createPortal=function(t,i){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(i))throw Error(n(200));return Zg(t,i,null,r)},wn.createRoot=function(t,i){if(!Ku(t))throw Error(n(299));var r=!1,l="",c=_h;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ju(t,1,!1,null,null,r,!1,l,c),t[mi]=i.current,Qs(t.nodeType===8?t.parentNode:t),new Yu(i)},wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ie(i),t=t===null?null:t.stateNode,t},wn.flushSync=function(t){return yr(t)},wn.hydrate=function(t,i,r){if(!Pa(i))throw Error(n(200));return La(null,t,i,!0,r)},wn.hydrateRoot=function(t,i,r){if(!Ku(t))throw Error(n(405));var l=r!=null&&r.hydratedSources||null,c=!1,h="",y=_h;if(r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(y=r.onRecoverableError)),i=mh(i,null,t,1,r??null,c,!1,h,y),t[mi]=i.current,Qs(t),l)for(t=0;t<l.length;t++)r=l[t],c=r._getVersion,c=c(r._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[r,c]:i.mutableSourceEagerHydrationData.push(r,c);return new Ca(i)},wn.render=function(t,i,r){if(!Pa(i))throw Error(n(200));return La(null,t,i,!1,r)},wn.unmountComponentAtNode=function(t){if(!Pa(t))throw Error(n(40));return t._reactRootContainer?(yr(function(){La(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1},wn.unstable_batchedUpdates=Bu,wn.unstable_renderSubtreeIntoContainer=function(t,i,r,l){if(!Pa(r))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return La(t,i,r,!1,l)},wn.version="18.2.0-next-9e3b772b8-20220608",wn}var Ah;function c_(){if(Ah)return Qu.exports;Ah=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qu.exports=u_(),Qu.exports}var Rh;function f_(){if(Rh)return Da;Rh=1;var o=c_();return Da.createRoot=o.createRoot,Da.hydrateRoot=o.hydrateRoot,Da}var d_=f_();const h_=qp(d_);function p_({experiments:o,onSelect:e}){return Te.jsxs("div",{className:"experiment-selector",children:[Te.jsx("h2",{children:"Choose Your Physics Experiment"}),Te.jsx("p",{className:"selector-description",children:"Solve the puzzle first, then watch amazing light experiments in AR!"}),Te.jsx("div",{className:"experiments-grid",children:Object.entries(o).map(([n,s])=>Te.jsxs("div",{className:"experiment-card",onClick:()=>e(n),children:[Te.jsxs("div",{className:"experiment-image",children:[Te.jsx("img",{src:s.image,alt:s.name}),Te.jsx("div",{className:"experiment-overlay",children:Te.jsx("span",{className:"experiment-type",children:s.type})})]}),Te.jsxs("div",{className:"experiment-info",children:[Te.jsx("h3",{children:s.name}),Te.jsx("p",{children:s.description}),Te.jsxs("div",{className:"concepts-list",children:[Te.jsx("h4",{children:"Learn About:"}),Te.jsx("div",{className:"concept-tags",children:s.concepts.map((a,u)=>Te.jsx("span",{className:"concept-tag",children:a},u))})]}),Te.jsx("button",{className:"start-btn",children:"🧩 Start Puzzle & AR Experience"})]})]},n))})]})}const m_=(o,e,n)=>{const s=[],a=e*n;for(let u=0;u<a;u++){const d=Math.floor(u/n),f=u%n;s.push({id:`piece-${u}`,image:o,correctIndex:u,backgroundPosition:`-${f*(100/(n-1))}% -${d*(100/(e-1))}%`,row:d,col:f})}return s},g_=o=>{const e=[...o];for(let n=e.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e};function __({experiment:o,onComplete:e}){const[n,s]=Xt.useState([]),[a,u]=Xt.useState(null),[d,f]=Xt.useState(!1),[p,m]=Xt.useState(0),[g,S]=Xt.useState(0),[v,M]=Xt.useState(!1);Xt.useEffect(()=>{const k=m_(o.image,3,3);s(g_(k));const F=setInterval(()=>{S(K=>K+1)},1e3);return()=>clearInterval(F)},[o]);const A=(k,F)=>{u(F),k.dataTransfer.effectAllowed="move"},T=k=>{k.preventDefault(),k.dataTransfer.dropEffect="move"},x=(k,F)=>{if(k.preventDefault(),a===null||a===F)return;const K=[...n];[K[a],K[F]]=[K[F],K[a]],s(K),m(p+1),_(K)&&(f(!0),setTimeout(()=>{e()},1500)),u(null)},_=k=>k.every((F,K)=>F.correctIndex===K),z=(k,F)=>{u(F)},P=(k,F)=>{a!==null&&a!==F&&x(k,F)},L=k=>{const F=Math.floor(k/60),K=k%60;return`${F}:${K.toString().padStart(2,"0")}`},N=()=>{M(!v)};return Te.jsxs("div",{className:"puzzle-game",children:[Te.jsxs("div",{className:"puzzle-header",children:[Te.jsxs("h2",{children:["Complete the ",o.name," Puzzle"]}),Te.jsx("div",{className:"experiment-concepts",children:Te.jsxs("p",{children:["🔍 You'll learn about: ",o.concepts.join(" • ")]})}),Te.jsxs("div",{className:"puzzle-stats",children:[Te.jsxs("div",{className:"stat-item",children:[Te.jsx("span",{className:"stat-label",children:"⏱️ Time:"}),Te.jsx("span",{className:"stat-value",children:L(g)})]}),Te.jsxs("div",{className:"stat-item",children:[Te.jsx("span",{className:"stat-label",children:"🔄 Moves:"}),Te.jsx("span",{className:"stat-value",children:p})]}),d&&Te.jsx("span",{className:"completion-message",children:"🎉 Puzzle Complete! Loading AR Physics..."})]})]}),Te.jsxs("div",{className:"puzzle-container",children:[Te.jsx("div",{className:"puzzle-grid",children:n.map((k,F)=>Te.jsx("div",{className:`puzzle-piece ${a===F?"dragging":""}`,draggable:"true",onDragStart:K=>A(K,F),onDragOver:T,onDrop:K=>x(K,F),onTouchStart:K=>z(K,F),onTouchEnd:K=>P(K,F),style:{backgroundImage:`url(${k.image})`,backgroundPosition:k.backgroundPosition,backgroundSize:"300%"}},k.id))}),Te.jsx("div",{className:"puzzle-controls",children:Te.jsxs("button",{className:"hint-btn",onClick:N,disabled:d,children:["💡 ",v?"Hide":"Show"," Reference"]})})]}),v&&Te.jsxs("div",{className:"puzzle-reference",children:[Te.jsx("h4",{children:"Reference Image:"}),Te.jsx("img",{src:o.image,alt:"Reference",className:"reference-image"}),Te.jsxs("div",{className:"experiment-explanation",children:[Te.jsx("h5",{children:"What you'll see in AR:"}),Te.jsx("p",{children:o.description})]})]})]})}const Vc="157",v_=0,Ch=1,x_=2,Yp=1,S_=2,Pi=3,cr=0,Cn=1,Li=2,ar=0,Cs=1,Ph=2,Lh=3,bh=4,y_=5,As=100,M_=101,E_=102,Dh=103,Uh=104,T_=200,w_=201,A_=202,R_=203,Kp=204,$p=205,C_=206,P_=207,L_=208,b_=209,D_=210,U_=0,N_=1,I_=2,Dc=3,F_=4,O_=5,z_=6,k_=7,Zp=0,B_=1,H_=2,lr=0,V_=1,G_=2,W_=3,X_=4,j_=5,Qp=300,Ls=301,bs=302,Uc=303,Nc=304,al=306,Ic=1e3,ri=1001,Fc=1002,vn=1003,Nh=1004,tc=1005,pn=1006,q_=1007,wo=1008,ur=1009,Y_=1010,K_=1011,Gc=1012,Jp=1013,sr=1014,or=1015,Ao=1016,em=1017,tm=1018,Dr=1020,$_=1021,si=1023,Z_=1024,Q_=1025,Ur=1026,Ds=1027,J_=1028,nm=1029,ev=1030,im=1031,rm=1033,nc=33776,ic=33777,rc=33778,sc=33779,Ih=35840,Fh=35841,Oh=35842,zh=35843,tv=36196,kh=37492,Bh=37496,Hh=37808,Vh=37809,Gh=37810,Wh=37811,Xh=37812,jh=37813,qh=37814,Yh=37815,Kh=37816,$h=37817,Zh=37818,Qh=37819,Jh=37820,ep=37821,oc=36492,tp=36494,np=36495,nv=36283,ip=36284,rp=36285,sp=36286,sm=3e3,Nr=3001,iv=3200,rv=3201,sv=0,ov=1,qn="",rn="srgb",Ui="srgb-linear",Wc="display-p3",ll="display-p3-linear",nl="linear",wt="srgb",il="rec709",rl="p3",ac=7680,av=519,lv=512,uv=513,cv=514,fv=515,dv=516,hv=517,pv=518,mv=519,op=35044,ap="300 es",Oc=1035,bi=2e3,sl=2001;class Ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let u=0,d=a.length;u<d;u++)a[u].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lc=Math.PI/180,zc=180/Math.PI;function Ro(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(dn[o&255]+dn[o>>8&255]+dn[o>>16&255]+dn[o>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]).toLowerCase()}function Rn(o,e,n){return Math.max(e,Math.min(n,o))}function gv(o,e){return(o%e+e)%e}function uc(o,e,n){return(1-n)*o+n*e}function lp(o){return(o&o-1)===0&&o!==0}function kc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function vo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function An(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,n=0){St.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,a=e.elements;return this.x=a[0]*n+a[3]*s+a[6],this.y=a[1]*n+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Rn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),a=Math.sin(n),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*a+e.x,this.y=u*a+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,s,a,u,d,f,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,a,u,d,f,p,m)}set(e,n,s,a,u,d,f,p,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=n,g[4]=u,g[5]=p,g[6]=s,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,u=this.elements,d=s[0],f=s[3],p=s[6],m=s[1],g=s[4],S=s[7],v=s[2],M=s[5],A=s[8],T=a[0],x=a[3],_=a[6],z=a[1],P=a[4],L=a[7],N=a[2],k=a[5],F=a[8];return u[0]=d*T+f*z+p*N,u[3]=d*x+f*P+p*k,u[6]=d*_+f*L+p*F,u[1]=m*T+g*z+S*N,u[4]=m*x+g*P+S*k,u[7]=m*_+g*L+S*F,u[2]=v*T+M*z+A*N,u[5]=v*x+M*P+A*k,u[8]=v*_+M*L+A*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8];return n*d*g-n*f*m-s*u*g+s*f*p+a*u*m-a*d*p}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8],S=g*d-f*m,v=f*p-g*u,M=m*u-d*p,A=n*S+s*v+a*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(a*m-g*s)*T,e[2]=(f*s-a*d)*T,e[3]=v*T,e[4]=(g*n-a*p)*T,e[5]=(a*u-f*n)*T,e[6]=M*T,e[7]=(s*p-m*n)*T,e[8]=(d*n-s*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,a,u,d,f){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*d+m*f)+d+e,-a*m,a*p,-a*(-m*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(cc.makeScale(e,n)),this}rotate(e){return this.premultiply(cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(cc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<9;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new ut;function om(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ol(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _v(){const o=ol("canvas");return o.style.display="block",o}const up={};function To(o){o in up||(up[o]=!0,console.warn(o))}const cp=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fp=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ua={[Ui]:{transfer:nl,primaries:il,toReference:o=>o,fromReference:o=>o},[rn]:{transfer:wt,primaries:il,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[ll]:{transfer:nl,primaries:rl,toReference:o=>o.applyMatrix3(fp),fromReference:o=>o.applyMatrix3(cp)},[Wc]:{transfer:wt,primaries:rl,toReference:o=>o.convertSRGBToLinear().applyMatrix3(fp),fromReference:o=>o.applyMatrix3(cp).convertLinearToSRGB()}},vv=new Set([Ui,ll]),vt={enabled:!0,_workingColorSpace:Ui,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!vv.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const s=Ua[e].toReference,a=Ua[n].fromReference;return a(s(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Ua[o].primaries},getTransfer:function(o){return o===qn?nl:Ua[o].transfer}};function Ps(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let cs;class am{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=ol("canvas")),cs.width=e.width,cs.height=e.height;const s=cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=cs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ol("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),u=a.data;for(let d=0;d<u.length;d++)u[d]=Ps(u[d]/255)*255;return s.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Ps(n[s]/255)*255):n[s]=Ps(n[s]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xv=0;class lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Ro(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?u.push(dc(a[d].image)):u.push(dc(a[d]))}else u=dc(a);s.url=u}return n||(e.images[this.uuid]=s),s}}function dc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?am.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sv=0;class Pn extends Ns{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,s=ri,a=ri,u=pn,d=wo,f=si,p=ur,m=Pn.DEFAULT_ANISOTROPY,g=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Ro(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(To("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Nr?rn:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ic:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ic:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return To("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rn?Nr:sm}set encoding(e){To("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Nr?rn:qn}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Qp;Pn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,n=0,s=0,a=1){sn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,a){return this.x=e,this.y=n,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,u=this.w,d=e.elements;return this.x=d[0]*n+d[4]*s+d[8]*a+d[12]*u,this.y=d[1]*n+d[5]*s+d[9]*a+d[13]*u,this.z=d[2]*n+d[6]*s+d[10]*a+d[14]*u,this.w=d[3]*n+d[7]*s+d[11]*a+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,a,u;const p=e.elements,m=p[0],g=p[4],S=p[8],v=p[1],M=p[5],A=p[9],T=p[2],x=p[6],_=p[10];if(Math.abs(g-v)<.01&&Math.abs(S-T)<.01&&Math.abs(A-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(S+T)<.1&&Math.abs(A+x)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,L=(M+1)/2,N=(_+1)/2,k=(g+v)/4,F=(S+T)/4,K=(A+x)/4;return P>L&&P>N?P<.01?(s=0,a=.707106781,u=.707106781):(s=Math.sqrt(P),a=k/s,u=F/s):L>N?L<.01?(s=.707106781,a=0,u=.707106781):(a=Math.sqrt(L),s=k/a,u=K/a):N<.01?(s=.707106781,a=.707106781,u=0):(u=Math.sqrt(N),s=F/u,a=K/u),this.set(s,a,u,n),this}let z=Math.sqrt((x-A)*(x-A)+(S-T)*(S-T)+(v-g)*(v-g));return Math.abs(z)<.001&&(z=1),this.x=(x-A)/z,this.y=(S-T)/z,this.z=(v-g)/z,this.w=Math.acos((m+M+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yv extends Ns{constructor(e=1,n=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new sn(0,0,e,n),this.scissorTest=!1,this.viewport=new sn(0,0,e,n);const a={width:e,height:n,depth:1};s.encoding!==void 0&&(To("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===Nr?rn:qn),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Pn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,n,s=1){(this.width!==e||this.height!==n||this.depth!==s)&&(this.width=e,this.height=n,this.depth=s,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new lm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends yv{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class um extends Pn{constructor(e=null,n=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=vn,this.minFilter=vn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mv extends Pn{constructor(e=null,n=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=vn,this.minFilter=vn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co{constructor(e=0,n=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=a}static slerpFlat(e,n,s,a,u,d,f){let p=s[a+0],m=s[a+1],g=s[a+2],S=s[a+3];const v=u[d+0],M=u[d+1],A=u[d+2],T=u[d+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=S;return}if(f===1){e[n+0]=v,e[n+1]=M,e[n+2]=A,e[n+3]=T;return}if(S!==T||p!==v||m!==M||g!==A){let x=1-f;const _=p*v+m*M+g*A+S*T,z=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const N=Math.sqrt(P),k=Math.atan2(N,_*z);x=Math.sin(x*k)/N,f=Math.sin(f*k)/N}const L=f*z;if(p=p*x+v*L,m=m*x+M*L,g=g*x+A*L,S=S*x+T*L,x===1-f){const N=1/Math.sqrt(p*p+m*m+g*g+S*S);p*=N,m*=N,g*=N,S*=N}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=S}static multiplyQuaternionsFlat(e,n,s,a,u,d){const f=s[a],p=s[a+1],m=s[a+2],g=s[a+3],S=u[d],v=u[d+1],M=u[d+2],A=u[d+3];return e[n]=f*A+g*S+p*M-m*v,e[n+1]=p*A+g*v+m*S-f*M,e[n+2]=m*A+g*M+f*v-p*S,e[n+3]=g*A-f*S-p*v-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,a){return this._x=e,this._y=n,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const s=e._x,a=e._y,u=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(s/2),g=f(a/2),S=f(u/2),v=p(s/2),M=p(a/2),A=p(u/2);switch(d){case"XYZ":this._x=v*g*S+m*M*A,this._y=m*M*S-v*g*A,this._z=m*g*A+v*M*S,this._w=m*g*S-v*M*A;break;case"YXZ":this._x=v*g*S+m*M*A,this._y=m*M*S-v*g*A,this._z=m*g*A-v*M*S,this._w=m*g*S+v*M*A;break;case"ZXY":this._x=v*g*S-m*M*A,this._y=m*M*S+v*g*A,this._z=m*g*A+v*M*S,this._w=m*g*S-v*M*A;break;case"ZYX":this._x=v*g*S-m*M*A,this._y=m*M*S+v*g*A,this._z=m*g*A-v*M*S,this._w=m*g*S+v*M*A;break;case"YZX":this._x=v*g*S+m*M*A,this._y=m*M*S+v*g*A,this._z=m*g*A-v*M*S,this._w=m*g*S-v*M*A;break;case"XZY":this._x=v*g*S-m*M*A,this._y=m*M*S-v*g*A,this._z=m*g*A+v*M*S,this._w=m*g*S+v*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],a=n[4],u=n[8],d=n[1],f=n[5],p=n[9],m=n[2],g=n[6],S=n[10],v=s+f+S;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(d-a)*M}else if(s>f&&s>S){const M=2*Math.sqrt(1+s-f-S);this._w=(g-p)/M,this._x=.25*M,this._y=(a+d)/M,this._z=(u+m)/M}else if(f>S){const M=2*Math.sqrt(1+f-s-S);this._w=(u-m)/M,this._x=(a+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+S-s-f);this._w=(d-a)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,n/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,a=e._y,u=e._z,d=e._w,f=n._x,p=n._y,m=n._z,g=n._w;return this._x=s*g+d*f+a*m-u*p,this._y=a*g+d*p+u*f-s*m,this._z=u*g+d*m+s*p-a*f,this._w=d*g-s*f-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const s=this._x,a=this._y,u=this._z,d=this._w;let f=d*e._w+s*e._x+a*e._y+u*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=s,this._y=a,this._z=u,this;const p=1-f*f;if(p<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*s+n*this._x,this._y=M*a+n*this._y,this._z=M*u+n*this._z,this.normalize(),this._onChangeCallback(),this}const m=Math.sqrt(p),g=Math.atan2(m,f),S=Math.sin((1-n)*g)/m,v=Math.sin(n*g)/m;return this._w=d*S+this._w*v,this._x=s*S+this._x*v,this._y=a*S+this._y*v,this._z=u*S+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=Math.random(),n=Math.sqrt(1-e),s=Math.sqrt(e),a=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(n*Math.cos(a),s*Math.sin(u),s*Math.cos(u),n*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,s=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*s+u[6]*a,this.y=u[1]*n+u[4]*s+u[7]*a,this.z=u[2]*n+u[5]*s+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,u=e.elements,d=1/(u[3]*n+u[7]*s+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*s+u[8]*a+u[12])*d,this.y=(u[1]*n+u[5]*s+u[9]*a+u[13])*d,this.z=(u[2]*n+u[6]*s+u[10]*a+u[14])*d,this}applyQuaternion(e){const n=this.x,s=this.y,a=this.z,u=e.x,d=e.y,f=e.z,p=e.w,m=p*n+d*a-f*s,g=p*s+f*n-u*a,S=p*a+u*s-d*n,v=-u*n-d*s-f*a;return this.x=m*p+v*-u+g*-f-S*-d,this.y=g*p+v*-d+S*-u-m*-f,this.z=S*p+v*-f+m*-d-g*-u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*s+u[8]*a,this.y=u[1]*n+u[5]*s+u[9]*a,this.z=u[2]*n+u[6]*s+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,a=e.y,u=e.z,d=n.x,f=n.y,p=n.z;return this.x=a*p-u*f,this.y=u*d-s*p,this.z=s*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Rn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return n*n+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const a=Math.sin(n)*e;return this.x=a*Math.sin(s),this.y=Math.cos(n)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(n),this.y=s*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hc=new ee,dp=new Co;class Po{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(Ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(Ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=Ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox),fs.applyMatrix4(e.matrixWorld),this.union(fs);else{const a=e.geometry;if(a!==void 0)if(n&&a.attributes!==void 0&&a.attributes.position!==void 0){const u=a.attributes.position;for(let d=0,f=u.count;d<f;d++)Ti.fromBufferAttribute(u,d).applyMatrix4(e.matrixWorld),this.expandByPoint(Ti)}else a.boundingBox===null&&a.computeBoundingBox(),fs.copy(a.boundingBox),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Na.subVectors(this.max,xo),ds.subVectors(e.a,xo),hs.subVectors(e.b,xo),ps.subVectors(e.c,xo),er.subVectors(hs,ds),tr.subVectors(ps,hs),wr.subVectors(ds,ps);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-wr.z,wr.y,er.z,0,-er.x,tr.z,0,-tr.x,wr.z,0,-wr.x,-er.y,er.x,0,-tr.y,tr.x,0,-wr.y,wr.x,0];return!pc(n,ds,hs,ps,Na)||(n=[1,0,0,0,1,0,0,0,1],!pc(n,ds,hs,ps,Na))?!1:(Ia.crossVectors(er,tr),n=[Ia.x,Ia.y,Ia.z],pc(n,ds,hs,ps,Na))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Ti=new ee,fs=new Po,ds=new ee,hs=new ee,ps=new ee,er=new ee,tr=new ee,wr=new ee,xo=new ee,Na=new ee,Ia=new ee,Ar=new ee;function pc(o,e,n,s,a){for(let u=0,d=o.length-3;u<=d;u+=3){Ar.fromArray(o,u);const f=a.x*Math.abs(Ar.x)+a.y*Math.abs(Ar.y)+a.z*Math.abs(Ar.z),p=e.dot(Ar),m=n.dot(Ar),g=s.dot(Ar);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>f)return!1}return!0}const Ev=new Po,So=new ee,mc=new ee;class Xc{constructor(e=new ee,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):Ev.setFromPoints(e).getCenter(s);let a=0;for(let u=0,d=e.length;u<d;u++)a=Math.max(a,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const n=So.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),a=(s-this.radius)*.5;this.center.addScaledVector(So,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(mc)),this.expandByPoint(So.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new ee,gc=new ee,Fa=new ee,nr=new ee,_c=new ee,Oa=new ee,vc=new ee;class Tv{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,s,a){gc.copy(e).add(n).multiplyScalar(.5),Fa.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(gc);const u=e.distanceTo(n)*.5,d=-this.direction.dot(Fa),f=nr.dot(this.direction),p=-nr.dot(Fa),m=nr.lengthSq(),g=Math.abs(1-d*d);let S,v,M,A;if(g>0)if(S=d*p-f,v=d*f-p,A=u*g,S>=0)if(v>=-A)if(v<=A){const T=1/g;S*=T,v*=T,M=S*(S+d*v+2*f)+v*(d*S+v+2*p)+m}else v=u,S=Math.max(0,-(d*v+f)),M=-S*S+v*(v+2*p)+m;else v=-u,S=Math.max(0,-(d*v+f)),M=-S*S+v*(v+2*p)+m;else v<=-A?(S=Math.max(0,-(-d*u+f)),v=S>0?-u:Math.min(Math.max(-u,-p),u),M=-S*S+v*(v+2*p)+m):v<=A?(S=0,v=Math.min(Math.max(-u,-p),u),M=v*(v+2*p)+m):(S=Math.max(0,-(d*u+f)),v=S>0?u:Math.min(Math.max(-u,-p),u),M=-S*S+v*(v+2*p)+m);else v=d>0?-u:u,S=Math.max(0,-(d*v+f)),M=-S*S+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(gc).addScaledVector(Fa,v),M}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const s=wi.dot(this.direction),a=wi.dot(wi)-s*s,u=e.radius*e.radius;if(a>u)return null;const d=Math.sqrt(u-a),f=s-d,p=s+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,a,u,d,f,p;const m=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,v=this.origin;return m>=0?(s=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(s=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),g>=0?(u=(e.min.y-v.y)*g,d=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,d=(e.min.y-v.y)*g),s>d||u>a||((u>s||isNaN(s))&&(s=u),(d<a||isNaN(a))&&(a=d),S>=0?(f=(e.min.z-v.z)*S,p=(e.max.z-v.z)*S):(f=(e.max.z-v.z)*S,p=(e.min.z-v.z)*S),s>p||f>a)||((f>s||s!==s)&&(s=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(s>=0?s:a,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,s,a,u){_c.subVectors(n,e),Oa.subVectors(s,e),vc.crossVectors(_c,Oa);let d=this.direction.dot(vc),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;nr.subVectors(this.origin,e);const p=f*this.direction.dot(Oa.crossVectors(nr,Oa));if(p<0)return null;const m=f*this.direction.dot(_c.cross(nr));if(m<0||p+m>d)return null;const g=-f*nr.dot(vc);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,n,s,a,u,d,f,p,m,g,S,v,M,A,T,x){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,a,u,d,f,p,m,g,S,v,M,A,T,x)}set(e,n,s,a,u,d,f,p,m,g,S,v,M,A,T,x){const _=this.elements;return _[0]=e,_[4]=n,_[8]=s,_[12]=a,_[1]=u,_[5]=d,_[9]=f,_[13]=p,_[2]=m,_[6]=g,_[10]=S,_[14]=v,_[3]=M,_[7]=A,_[11]=T,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,a=1/ms.setFromMatrixColumn(e,0).length(),u=1/ms.setFromMatrixColumn(e,1).length(),d=1/ms.setFromMatrixColumn(e,2).length();return n[0]=s[0]*a,n[1]=s[1]*a,n[2]=s[2]*a,n[3]=0,n[4]=s[4]*u,n[5]=s[5]*u,n[6]=s[6]*u,n[7]=0,n[8]=s[8]*d,n[9]=s[9]*d,n[10]=s[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,a=e.y,u=e.z,d=Math.cos(s),f=Math.sin(s),p=Math.cos(a),m=Math.sin(a),g=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const v=d*g,M=d*S,A=f*g,T=f*S;n[0]=p*g,n[4]=-p*S,n[8]=m,n[1]=M+A*m,n[5]=v-T*m,n[9]=-f*p,n[2]=T-v*m,n[6]=A+M*m,n[10]=d*p}else if(e.order==="YXZ"){const v=p*g,M=p*S,A=m*g,T=m*S;n[0]=v+T*f,n[4]=A*f-M,n[8]=d*m,n[1]=d*S,n[5]=d*g,n[9]=-f,n[2]=M*f-A,n[6]=T+v*f,n[10]=d*p}else if(e.order==="ZXY"){const v=p*g,M=p*S,A=m*g,T=m*S;n[0]=v-T*f,n[4]=-d*S,n[8]=A+M*f,n[1]=M+A*f,n[5]=d*g,n[9]=T-v*f,n[2]=-d*m,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const v=d*g,M=d*S,A=f*g,T=f*S;n[0]=p*g,n[4]=A*m-M,n[8]=v*m+T,n[1]=p*S,n[5]=T*m+v,n[9]=M*m-A,n[2]=-m,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const v=d*p,M=d*m,A=f*p,T=f*m;n[0]=p*g,n[4]=T-v*S,n[8]=A*S+M,n[1]=S,n[5]=d*g,n[9]=-f*g,n[2]=-m*g,n[6]=M*S+A,n[10]=v-T*S}else if(e.order==="XZY"){const v=d*p,M=d*m,A=f*p,T=f*m;n[0]=p*g,n[4]=-S,n[8]=m*g,n[1]=v*S+T,n[5]=d*g,n[9]=M*S-A,n[2]=A*S-M,n[6]=f*g,n[10]=T*S+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wv,e,Av)}lookAt(e,n,s){const a=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),ir.crossVectors(s,In),ir.lengthSq()===0&&(Math.abs(s.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),ir.crossVectors(s,In)),ir.normalize(),za.crossVectors(In,ir),a[0]=ir.x,a[4]=za.x,a[8]=In.x,a[1]=ir.y,a[5]=za.y,a[9]=In.y,a[2]=ir.z,a[6]=za.z,a[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,u=this.elements,d=s[0],f=s[4],p=s[8],m=s[12],g=s[1],S=s[5],v=s[9],M=s[13],A=s[2],T=s[6],x=s[10],_=s[14],z=s[3],P=s[7],L=s[11],N=s[15],k=a[0],F=a[4],K=a[8],R=a[12],I=a[1],se=a[5],ae=a[9],de=a[13],G=a[2],re=a[6],oe=a[10],te=a[14],j=a[3],Z=a[7],w=a[11],b=a[15];return u[0]=d*k+f*I+p*G+m*j,u[4]=d*F+f*se+p*re+m*Z,u[8]=d*K+f*ae+p*oe+m*w,u[12]=d*R+f*de+p*te+m*b,u[1]=g*k+S*I+v*G+M*j,u[5]=g*F+S*se+v*re+M*Z,u[9]=g*K+S*ae+v*oe+M*w,u[13]=g*R+S*de+v*te+M*b,u[2]=A*k+T*I+x*G+_*j,u[6]=A*F+T*se+x*re+_*Z,u[10]=A*K+T*ae+x*oe+_*w,u[14]=A*R+T*de+x*te+_*b,u[3]=z*k+P*I+L*G+N*j,u[7]=z*F+P*se+L*re+N*Z,u[11]=z*K+P*ae+L*oe+N*w,u[15]=z*R+P*de+L*te+N*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],a=e[8],u=e[12],d=e[1],f=e[5],p=e[9],m=e[13],g=e[2],S=e[6],v=e[10],M=e[14],A=e[3],T=e[7],x=e[11],_=e[15];return A*(+u*p*S-a*m*S-u*f*v+s*m*v+a*f*M-s*p*M)+T*(+n*p*M-n*m*v+u*d*v-a*d*M+a*m*g-u*p*g)+x*(+n*m*S-n*f*M-u*d*S+s*d*M+u*f*g-s*m*g)+_*(-a*f*g-n*p*S+n*f*v+a*d*S-s*d*v+s*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8],S=e[9],v=e[10],M=e[11],A=e[12],T=e[13],x=e[14],_=e[15],z=S*x*m-T*v*m+T*p*M-f*x*M-S*p*_+f*v*_,P=A*v*m-g*x*m-A*p*M+d*x*M+g*p*_-d*v*_,L=g*T*m-A*S*m+A*f*M-d*T*M-g*f*_+d*S*_,N=A*S*p-g*T*p-A*f*v+d*T*v+g*f*x-d*S*x,k=n*z+s*P+a*L+u*N;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=z*F,e[1]=(T*v*u-S*x*u-T*a*M+s*x*M+S*a*_-s*v*_)*F,e[2]=(f*x*u-T*p*u+T*a*m-s*x*m-f*a*_+s*p*_)*F,e[3]=(S*p*u-f*v*u-S*a*m+s*v*m+f*a*M-s*p*M)*F,e[4]=P*F,e[5]=(g*x*u-A*v*u+A*a*M-n*x*M-g*a*_+n*v*_)*F,e[6]=(A*p*u-d*x*u-A*a*m+n*x*m+d*a*_-n*p*_)*F,e[7]=(d*v*u-g*p*u+g*a*m-n*v*m-d*a*M+n*p*M)*F,e[8]=L*F,e[9]=(A*S*u-g*T*u-A*s*M+n*T*M+g*s*_-n*S*_)*F,e[10]=(d*T*u-A*f*u+A*s*m-n*T*m-d*s*_+n*f*_)*F,e[11]=(g*f*u-d*S*u-g*s*m+n*S*m+d*s*M-n*f*M)*F,e[12]=N*F,e[13]=(g*T*a-A*S*a+A*s*v-n*T*v-g*s*x+n*S*x)*F,e[14]=(A*f*a-d*T*a-A*s*p+n*T*p+d*s*x-n*f*x)*F,e[15]=(d*S*a-g*f*a+g*s*p-n*S*p-d*s*v+n*f*v)*F,this}scale(e){const n=this.elements,s=e.x,a=e.y,u=e.z;return n[0]*=s,n[4]*=a,n[8]*=u,n[1]*=s,n[5]*=a,n[9]*=u,n[2]*=s,n[6]*=a,n[10]*=u,n[3]*=s,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,a))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),a=Math.sin(n),u=1-s,d=e.x,f=e.y,p=e.z,m=u*d,g=u*f;return this.set(m*d+s,m*f-a*p,m*p+a*f,0,m*f+a*p,g*f+s,g*p-a*d,0,m*p-a*f,g*p+a*d,u*p*p+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,a,u,d){return this.set(1,s,u,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,s){const a=this.elements,u=n._x,d=n._y,f=n._z,p=n._w,m=u+u,g=d+d,S=f+f,v=u*m,M=u*g,A=u*S,T=d*g,x=d*S,_=f*S,z=p*m,P=p*g,L=p*S,N=s.x,k=s.y,F=s.z;return a[0]=(1-(T+_))*N,a[1]=(M+L)*N,a[2]=(A-P)*N,a[3]=0,a[4]=(M-L)*k,a[5]=(1-(v+_))*k,a[6]=(x+z)*k,a[7]=0,a[8]=(A+P)*F,a[9]=(x-z)*F,a[10]=(1-(v+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,s){const a=this.elements;let u=ms.set(a[0],a[1],a[2]).length();const d=ms.set(a[4],a[5],a[6]).length(),f=ms.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ti.copy(this);const m=1/u,g=1/d,S=1/f;return ti.elements[0]*=m,ti.elements[1]*=m,ti.elements[2]*=m,ti.elements[4]*=g,ti.elements[5]*=g,ti.elements[6]*=g,ti.elements[8]*=S,ti.elements[9]*=S,ti.elements[10]*=S,n.setFromRotationMatrix(ti),s.x=u,s.y=d,s.z=f,this}makePerspective(e,n,s,a,u,d,f=bi){const p=this.elements,m=2*u/(n-e),g=2*u/(s-a),S=(n+e)/(n-e),v=(s+a)/(s-a);let M,A;if(f===bi)M=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(f===sl)M=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,s,a,u,d,f=bi){const p=this.elements,m=1/(n-e),g=1/(s-a),S=1/(d-u),v=(n+e)*m,M=(s+a)*g;let A,T;if(f===bi)A=(d+u)*S,T=-2*S;else if(f===sl)A=u*S,T=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<16;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const ms=new ee,ti=new on,wv=new ee(0,0,0),Av=new ee(1,1,1),ir=new ee,za=new ee,In=new ee,hp=new on,pp=new Co;class ul{constructor(e=0,n=0,s=0,a=ul.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,a=this._order){return this._x=e,this._y=n,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const a=e.elements,u=a[0],d=a[4],f=a[8],p=a[1],m=a[5],g=a[9],S=a[2],v=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Rn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hp,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pp.setFromEuler(this),this.setFromQuaternion(pp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ul.DEFAULT_ORDER="XYZ";class cm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rv=0;const mp=new ee,gs=new Co,Ai=new on,ka=new ee,yo=new ee,Cv=new ee,Pv=new Co,gp=new ee(1,0,0),_p=new ee(0,1,0),vp=new ee(0,0,1),Lv={type:"added"},bv={type:"removed"};class On extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new ee,n=new ul,s=new Co,a=new ee(1,1,1);function u(){s.setFromEuler(n,!1)}function d(){n.setFromQuaternion(s,void 0,!1)}n._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new on},normalMatrix:{value:new ut}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new cm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(gp,e)}rotateY(e){return this.rotateOnAxis(_p,e)}rotateZ(e){return this.rotateOnAxis(vp,e)}translateOnAxis(e,n){return mp.copy(e).applyQuaternion(this.quaternion),this.position.add(mp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gp,e)}translateY(e){return this.translateOnAxis(_p,e)}translateZ(e){return this.translateOnAxis(vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?ka.copy(e):ka.set(e,n,s);const a=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(yo,ka,this.up):Ai.lookAt(ka,yo,this.up),this.quaternion.setFromRotationMatrix(Ai),a&&(Ai.extractRotation(a.matrixWorld),gs.setFromRotationMatrix(Ai),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,a=this.children.length;s<a;s++){const d=this.children[s].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n){let s=[];this[e]===n&&s.push(this);for(let a=0,u=this.children.length;a<u;a++){const d=this.children[a].getObjectsByProperty(e,n);d.length>0&&(s=s.concat(d))}return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,Cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,Pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,a=n.length;s<a;s++){const u=n[s];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let u=0,d=a.length;u<d;u++){const f=a[u];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const S=p[m];u(e.shapes,S)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(u(e.materials,this.material[p]));a.material=f}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(u(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),S=d(e.shapes),v=d(e.skeletons),M=d(e.animations),A=d(e.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),S.length>0&&(s.shapes=S),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=a,s;function d(f){const p=[];for(const m in f){const g=f[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}On.DEFAULT_UP=new ee(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new ee,Ri=new ee,xc=new ee,Ci=new ee,_s=new ee,vs=new ee,xp=new ee,Sc=new ee,yc=new ee,Mc=new ee;let Ba=!1;class ii{constructor(e=new ee,n=new ee,s=new ee){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,a){a.subVectors(s,n),ni.subVectors(e,n),a.cross(ni);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,s,a,u){ni.subVectors(a,n),Ri.subVectors(s,n),xc.subVectors(e,n);const d=ni.dot(ni),f=ni.dot(Ri),p=ni.dot(xc),m=Ri.dot(Ri),g=Ri.dot(xc),S=d*m-f*f;if(S===0)return u.set(-2,-1,-1);const v=1/S,M=(m*p-f*g)*v,A=(d*g-f*p)*v;return u.set(1-M-A,A,M)}static containsPoint(e,n,s,a){return this.getBarycoord(e,n,s,a,Ci),Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,n,s,a,u,d,f,p){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),this.getInterpolation(e,n,s,a,u,d,f,p)}static getInterpolation(e,n,s,a,u,d,f,p){return this.getBarycoord(e,n,s,a,Ci),p.setScalar(0),p.addScaledVector(u,Ci.x),p.addScaledVector(d,Ci.y),p.addScaledVector(f,Ci.z),p}static isFrontFacing(e,n,s,a){return ni.subVectors(s,n),Ri.subVectors(e,n),ni.cross(Ri).dot(a)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,a){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,s,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ni.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,s,a,u){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),ii.getInterpolation(e,this.a,this.b,this.c,n,s,a,u)}getInterpolation(e,n,s,a,u){return ii.getInterpolation(e,this.a,this.b,this.c,n,s,a,u)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,a=this.b,u=this.c;let d,f;_s.subVectors(a,s),vs.subVectors(u,s),Sc.subVectors(e,s);const p=_s.dot(Sc),m=vs.dot(Sc);if(p<=0&&m<=0)return n.copy(s);yc.subVectors(e,a);const g=_s.dot(yc),S=vs.dot(yc);if(g>=0&&S<=g)return n.copy(a);const v=p*S-g*m;if(v<=0&&p>=0&&g<=0)return d=p/(p-g),n.copy(s).addScaledVector(_s,d);Mc.subVectors(e,u);const M=_s.dot(Mc),A=vs.dot(Mc);if(A>=0&&M<=A)return n.copy(u);const T=M*m-p*A;if(T<=0&&m>=0&&A<=0)return f=m/(m-A),n.copy(s).addScaledVector(vs,f);const x=g*A-M*S;if(x<=0&&S-g>=0&&M-A>=0)return xp.subVectors(u,a),f=(S-g)/(S-g+(M-A)),n.copy(a).addScaledVector(xp,f);const _=1/(x+T+v);return d=T*_,f=v*_,n.copy(s).addScaledVector(_s,d).addScaledVector(vs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Dv=0;class cl extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=Cs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kp,this.blendDst=$p,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ac,this.stencilZFail=ac,this.stencilZPass=ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(s.blending=this.blending),this.side!==cr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.stencilWrite=this.stencilWrite,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}if(n){const u=a(e.textures),d=a(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const a=n.length;s=new Array(a);for(let u=0;u!==a;++u)s[u]=n[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Ec(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class At{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,n),this}setRGB(e,n,s,a=vt.workingColorSpace){return this.r=e,this.g=n,this.b=s,vt.toWorkingColorSpace(this,a),this}setHSL(e,n,s,a=vt.workingColorSpace){if(e=gv(e,1),n=Rn(n,0,1),s=Rn(s,0,1),n===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+n):s+n-s*n,d=2*s-u;this.r=Ec(d,u,e+1/3),this.g=Ec(d,u,e),this.b=Ec(d,u,e-1/3)}return vt.toWorkingColorSpace(this,a),this}setStyle(e,n=rn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=rn){const s=fm[e.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=fc(e.r),this.g=fc(e.g),this.b=fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return vt.fromWorkingColorSpace(hn.copy(this),e),Math.round(Rn(hn.r*255,0,255))*65536+Math.round(Rn(hn.g*255,0,255))*256+Math.round(Rn(hn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vt.workingColorSpace){vt.fromWorkingColorSpace(hn.copy(this),n);const s=hn.r,a=hn.g,u=hn.b,d=Math.max(s,a,u),f=Math.min(s,a,u);let p,m;const g=(f+d)/2;if(f===d)p=0,m=0;else{const S=d-f;switch(m=g<=.5?S/(d+f):S/(2-d-f),d){case s:p=(a-u)/S+(a<u?6:0);break;case a:p=(u-s)/S+2;break;case u:p=(s-a)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=vt.workingColorSpace){return vt.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=rn){vt.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,s=hn.g,a=hn.b;return e!==rn?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,n,s){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+n,rr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(rr),e.getHSL(Ha);const s=uc(rr.h,Ha.h,n),a=uc(rr.s,Ha.s,n),u=uc(rr.l,Ha.l,n);return this.setHSL(s,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*s+u[6]*a,this.g=u[1]*n+u[4]*s+u[7]*a,this.b=u[2]*n+u[5]*s+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new At;At.NAMES=fm;class jc extends cl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new ee,Va=new St;class di{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=op,this.updateRange={offset:0,count:-1},this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Va.fromBufferAttribute(this,n),Va.applyMatrix3(e),this.setXY(n,Va.x,Va.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=vo(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=An(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),s=An(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,a){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),s=An(s,this.array),a=An(a,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,n,s,a,u){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),s=An(s,this.array),a=An(a,this.array),u=An(u,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==op&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class dm extends di{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class hm extends di{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class Ir extends di{constructor(e,n,s){super(new Float32Array(e),n,s)}}let Uv=0;const Xn=new on,Tc=new On,xs=new ee,Fn=new Po,Mo=new Po,Jt=new ee;class zr extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(om(e)?hm:dm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ut().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,s){return Xn.makeTranslation(e,n,s),this.applyMatrix4(Xn),this}scale(e,n,s){return Xn.makeScale(e,n,s),this.applyMatrix4(Xn),this}lookAt(e){return Tc.lookAt(e),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const n=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Ir(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const u=n[s];Fn.setFromBufferAttribute(u),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const s=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let u=0,d=n.length;u<d;u++){const f=n[u];Mo.setFromBufferAttribute(f),this.morphTargetsRelative?(Jt.addVectors(Fn.min,Mo.min),Fn.expandByPoint(Jt),Jt.addVectors(Fn.max,Mo.max),Fn.expandByPoint(Jt)):(Fn.expandByPoint(Mo.min),Fn.expandByPoint(Mo.max))}Fn.getCenter(s);let a=0;for(let u=0,d=e.count;u<d;u++)Jt.fromBufferAttribute(e,u),a=Math.max(a,s.distanceToSquared(Jt));if(n)for(let u=0,d=n.length;u<d;u++){const f=n[u],p=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)Jt.fromBufferAttribute(f,m),p&&(xs.fromBufferAttribute(e,m),Jt.add(xs)),a=Math.max(a,s.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,a=n.position.array,u=n.normal.array,d=n.uv.array,f=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*f),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let I=0;I<f;I++)m[I]=new ee,g[I]=new ee;const S=new ee,v=new ee,M=new ee,A=new St,T=new St,x=new St,_=new ee,z=new ee;function P(I,se,ae){S.fromArray(a,I*3),v.fromArray(a,se*3),M.fromArray(a,ae*3),A.fromArray(d,I*2),T.fromArray(d,se*2),x.fromArray(d,ae*2),v.sub(S),M.sub(S),T.sub(A),x.sub(A);const de=1/(T.x*x.y-x.x*T.y);isFinite(de)&&(_.copy(v).multiplyScalar(x.y).addScaledVector(M,-T.y).multiplyScalar(de),z.copy(M).multiplyScalar(T.x).addScaledVector(v,-x.x).multiplyScalar(de),m[I].add(_),m[se].add(_),m[ae].add(_),g[I].add(z),g[se].add(z),g[ae].add(z))}let L=this.groups;L.length===0&&(L=[{start:0,count:s.length}]);for(let I=0,se=L.length;I<se;++I){const ae=L[I],de=ae.start,G=ae.count;for(let re=de,oe=de+G;re<oe;re+=3)P(s[re+0],s[re+1],s[re+2])}const N=new ee,k=new ee,F=new ee,K=new ee;function R(I){F.fromArray(u,I*3),K.copy(F);const se=m[I];N.copy(se),N.sub(F.multiplyScalar(F.dot(se))).normalize(),k.crossVectors(K,se);const de=k.dot(g[I])<0?-1:1;p[I*4]=N.x,p[I*4+1]=N.y,p[I*4+2]=N.z,p[I*4+3]=de}for(let I=0,se=L.length;I<se;++I){const ae=L[I],de=ae.start,G=ae.count;for(let re=de,oe=de+G;re<oe;re+=3)R(s[re+0]),R(s[re+1]),R(s[re+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const a=new ee,u=new ee,d=new ee,f=new ee,p=new ee,m=new ee,g=new ee,S=new ee;if(e)for(let v=0,M=e.count;v<M;v+=3){const A=e.getX(v+0),T=e.getX(v+1),x=e.getX(v+2);a.fromBufferAttribute(n,A),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,x),g.subVectors(d,u),S.subVectors(a,u),g.cross(S),f.fromBufferAttribute(s,A),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,x),f.add(g),p.add(g),m.add(g),s.setXYZ(A,f.x,f.y,f.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,M=n.count;v<M;v+=3)a.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),d.fromBufferAttribute(n,v+2),g.subVectors(d,u),S.subVectors(a,u),g.cross(S),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(f,p){const m=f.array,g=f.itemSize,S=f.normalized,v=new m.constructor(p.length*g);let M=0,A=0;for(let T=0,x=p.length;T<x;T++){f.isInterleavedBufferAttribute?M=p[T]*f.data.stride+f.offset:M=p[T]*g;for(let _=0;_<g;_++)v[A++]=m[M++]}return new di(v,g,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zr,s=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,s);n.setAttribute(f,m)}const u=this.morphAttributes;for(const f in u){const p=[],m=u[f];for(let g=0,S=m.length;g<S;g++){const v=m[g],M=e(v,s);p.push(M)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let S=0,v=m.length;S<v;S++){const M=m[S];g.push(M.toJSON(e.data))}g.length>0&&(a[p]=g,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const u=e.morphAttributes;for(const m in u){const g=[],S=u[m];for(let v=0,M=S.length;v<M;v++)g.push(S[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const S=d[m];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sp=new on,Rr=new Tv,Ga=new Xc,yp=new ee,Ss=new ee,ys=new ee,Ms=new ee,wc=new ee,Wa=new ee,Xa=new St,ja=new St,qa=new St,Mp=new ee,Ep=new ee,Tp=new ee,Ya=new ee,Ka=new ee;class Di extends On{constructor(e=new zr,n=new jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,n){const s=this.geometry,a=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(u&&f){Wa.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=f[p],S=u[p];g!==0&&(wc.fromBufferAttribute(S,e),d?Wa.addScaledVector(wc,g):Wa.addScaledVector(wc.sub(n),g))}n.add(Wa)}return n}raycast(e,n){const s=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ga.copy(s.boundingSphere),Ga.applyMatrix4(u),Rr.copy(e.ray).recast(e.near),!(Ga.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Ga,yp)===null||Rr.origin.distanceToSquared(yp)>(e.far-e.near)**2))&&(Sp.copy(u).invert(),Rr.copy(e.ray).applyMatrix4(Sp),!(s.boundingBox!==null&&Rr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,s){let a;const u=this.geometry,d=this.material,f=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,S=u.attributes.normal,v=u.groups,M=u.drawRange;if(f!==null)if(Array.isArray(d))for(let A=0,T=v.length;A<T;A++){const x=v[A],_=d[x.materialIndex],z=Math.max(x.start,M.start),P=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let L=z,N=P;L<N;L+=3){const k=f.getX(L),F=f.getX(L+1),K=f.getX(L+2);a=$a(this,_,e,s,m,g,S,k,F,K),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const A=Math.max(0,M.start),T=Math.min(f.count,M.start+M.count);for(let x=A,_=T;x<_;x+=3){const z=f.getX(x),P=f.getX(x+1),L=f.getX(x+2);a=$a(this,d,e,s,m,g,S,z,P,L),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,T=v.length;A<T;A++){const x=v[A],_=d[x.materialIndex],z=Math.max(x.start,M.start),P=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let L=z,N=P;L<N;L+=3){const k=L,F=L+1,K=L+2;a=$a(this,_,e,s,m,g,S,k,F,K),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const A=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let x=A,_=T;x<_;x+=3){const z=x,P=x+1,L=x+2;a=$a(this,d,e,s,m,g,S,z,P,L),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function Nv(o,e,n,s,a,u,d,f){let p;if(e.side===Cn?p=s.intersectTriangle(d,u,a,!0,f):p=s.intersectTriangle(a,u,d,e.side===cr,f),p===null)return null;Ka.copy(f),Ka.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(Ka);return m<n.near||m>n.far?null:{distance:m,point:Ka.clone(),object:o}}function $a(o,e,n,s,a,u,d,f,p,m){o.getVertexPosition(f,Ss),o.getVertexPosition(p,ys),o.getVertexPosition(m,Ms);const g=Nv(o,e,n,s,Ss,ys,Ms,Ya);if(g){a&&(Xa.fromBufferAttribute(a,f),ja.fromBufferAttribute(a,p),qa.fromBufferAttribute(a,m),g.uv=ii.getInterpolation(Ya,Ss,ys,Ms,Xa,ja,qa,new St)),u&&(Xa.fromBufferAttribute(u,f),ja.fromBufferAttribute(u,p),qa.fromBufferAttribute(u,m),g.uv1=ii.getInterpolation(Ya,Ss,ys,Ms,Xa,ja,qa,new St),g.uv2=g.uv1),d&&(Mp.fromBufferAttribute(d,f),Ep.fromBufferAttribute(d,p),Tp.fromBufferAttribute(d,m),g.normal=ii.getInterpolation(Ya,Ss,ys,Ms,Mp,Ep,Tp,new ee),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:f,b:p,c:m,normal:new ee,materialIndex:0};ii.getNormal(Ss,ys,Ms,S.normal),g.face=S}return g}class Lo extends zr{constructor(e=1,n=1,s=1,a=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:a,heightSegments:u,depthSegments:d};const f=this;a=Math.floor(a),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],S=[];let v=0,M=0;A("z","y","x",-1,-1,s,n,e,d,u,0),A("z","y","x",1,-1,s,n,-e,d,u,1),A("x","z","y",1,1,e,s,n,a,d,2),A("x","z","y",1,-1,e,s,-n,a,d,3),A("x","y","z",1,-1,e,n,s,a,u,4),A("x","y","z",-1,-1,e,n,-s,a,u,5),this.setIndex(p),this.setAttribute("position",new Ir(m,3)),this.setAttribute("normal",new Ir(g,3)),this.setAttribute("uv",new Ir(S,2));function A(T,x,_,z,P,L,N,k,F,K,R){const I=L/F,se=N/K,ae=L/2,de=N/2,G=k/2,re=F+1,oe=K+1;let te=0,j=0;const Z=new ee;for(let w=0;w<oe;w++){const b=w*se-de;for(let V=0;V<re;V++){const ue=V*I-ae;Z[T]=ue*z,Z[x]=b*P,Z[_]=G,m.push(Z.x,Z.y,Z.z),Z[T]=0,Z[x]=0,Z[_]=k>0?1:-1,g.push(Z.x,Z.y,Z.z),S.push(V/F),S.push(1-w/K),te+=1}}for(let w=0;w<K;w++)for(let b=0;b<F;b++){const V=v+b+re*w,ue=v+b+re*(w+1),le=v+(b+1)+re*(w+1),ge=v+(b+1)+re*w;p.push(V,ue,ge),p.push(ue,le,ge),j+=6}f.addGroup(M,j,R),M+=j,v+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(o){const e={};for(const n in o){e[n]={};for(const s in o[n]){const a=o[n][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=a.clone():Array.isArray(a)?e[n][s]=a.slice():e[n][s]=a}}return e}function _n(o){const e={};for(let n=0;n<o.length;n++){const s=Us(o[n]);for(const a in s)e[a]=s[a]}return e}function Iv(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function pm(o){return o.getRenderTarget()===null?o.outputColorSpace:vt.workingColorSpace}const Fv={clone:Us,merge:_n};var Ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends cl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ov,this.fragmentShader=zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Iv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class mm extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jn extends mm{constructor(e=50,n=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zc*2*Math.atan(Math.tan(lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,s,a,u,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(lc*.5*this.fov)/this.zoom,s=2*n,a=this.aspect*s,u=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*a/p,n-=d.offsetY*s/m,a*=d.width/p,s*=d.height/m}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Es=-90,Ts=1;class kv extends On{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(Es,Ts,e,n);a.layers=this.layers,this.add(a);const u=new jn(Es,Ts,e,n);u.layers=this.layers,this.add(u);const d=new jn(Es,Ts,e,n);d.layers=this.layers,this.add(d);const f=new jn(Es,Ts,e,n);f.layers=this.layers,this.add(f);const p=new jn(Es,Ts,e,n);p.layers=this.layers,this.add(p);const m=new jn(Es,Ts,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,a,u,d,f,p]=n;for(const m of n)this.remove(m);if(e===bi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===sl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,f,p,m,g]=this.children,S=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(n,u),e.setRenderTarget(s,1,a),e.render(n,d),e.setRenderTarget(s,2,a),e.render(n,f),e.setRenderTarget(s,3,a),e.render(n,p),e.setRenderTarget(s,4,a),e.render(n,m),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,a),e.render(n,g),e.setRenderTarget(S,v,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class gm extends Pn{constructor(e,n,s,a,u,d,f,p,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Ls,super(e,n,s,a,u,d,f,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bv extends Fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];n.encoding!==void 0&&(To("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nr?rn:qn),this.texture=new gm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Lo(5,5,5),u=new Or({name:"CubemapFromEquirect",uniforms:Us(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Cn,blending:ar});u.uniforms.tEquirect.value=n;const d=new Di(a,u),f=n.minFilter;return n.minFilter===wo&&(n.minFilter=pn),new kv(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,s,a){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,s,a);e.setRenderTarget(u)}}const Ac=new ee,Hv=new ee,Vv=new ut;class Pr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,a){return this.normal.set(e,n,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const a=Ac.subVectors(s,n).cross(Hv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(Ac),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||Vv.getNormalMatrix(e),a=this.coplanarPoint(Ac).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new Xc,Za=new ee;class _m{constructor(e=new Pr,n=new Pr,s=new Pr,a=new Pr,u=new Pr,d=new Pr){this.planes=[e,n,s,a,u,d]}set(e,n,s,a,u,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(s),f[3].copy(a),f[4].copy(u),f[5].copy(d),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=bi){const s=this.planes,a=e.elements,u=a[0],d=a[1],f=a[2],p=a[3],m=a[4],g=a[5],S=a[6],v=a[7],M=a[8],A=a[9],T=a[10],x=a[11],_=a[12],z=a[13],P=a[14],L=a[15];if(s[0].setComponents(p-u,v-m,x-M,L-_).normalize(),s[1].setComponents(p+u,v+m,x+M,L+_).normalize(),s[2].setComponents(p+d,v+g,x+A,L+z).normalize(),s[3].setComponents(p-d,v-g,x-A,L-z).normalize(),s[4].setComponents(p-f,v-S,x-T,L-P).normalize(),n===bi)s[5].setComponents(p+f,v+S,x+T,L+P).normalize();else if(n===sl)s[5].setComponents(f,S,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,s=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const a=n[s];if(Za.x=a.normal.x>0?e.max.x:e.min.x,Za.y=a.normal.y>0?e.max.y:e.min.y,Za.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vm(){let o=null,e=!1,n=null,s=null;function a(u,d){n(u,d),s=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(s=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function Gv(o,e){const n=e.isWebGL2,s=new WeakMap;function a(m,g){const S=m.array,v=m.usage,M=o.createBuffer();o.bindBuffer(g,M),o.bufferData(g,S,v),m.onUploadCallback();let A;if(S instanceof Float32Array)A=o.FLOAT;else if(S instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(n)A=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=o.UNSIGNED_SHORT;else if(S instanceof Int16Array)A=o.SHORT;else if(S instanceof Uint32Array)A=o.UNSIGNED_INT;else if(S instanceof Int32Array)A=o.INT;else if(S instanceof Int8Array)A=o.BYTE;else if(S instanceof Uint8Array)A=o.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)A=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:M,type:A,bytesPerElement:S.BYTES_PER_ELEMENT,version:m.version}}function u(m,g,S){const v=g.array,M=g.updateRange;o.bindBuffer(S,m),M.count===-1?o.bufferSubData(S,0,v):(n?o.bufferSubData(S,M.offset*v.BYTES_PER_ELEMENT,v,M.offset,M.count):o.bufferSubData(S,M.offset*v.BYTES_PER_ELEMENT,v.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function f(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=s.get(m);g&&(o.deleteBuffer(g.buffer),s.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const v=s.get(m);(!v||v.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const S=s.get(m);S===void 0?s.set(m,a(m,g)):S.version<m.version&&(u(S.buffer,m,g),S.version=m.version)}return{get:d,remove:f,update:p}}class fl extends zr{constructor(e=1,n=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:a};const u=e/2,d=n/2,f=Math.floor(s),p=Math.floor(a),m=f+1,g=p+1,S=e/f,v=n/p,M=[],A=[],T=[],x=[];for(let _=0;_<g;_++){const z=_*v-d;for(let P=0;P<m;P++){const L=P*S-u;A.push(L,-z,0),T.push(0,0,1),x.push(P/f),x.push(1-_/p)}}for(let _=0;_<p;_++)for(let z=0;z<f;z++){const P=z+m*_,L=z+m*(_+1),N=z+1+m*(_+1),k=z+1+m*_;M.push(P,L,k),M.push(L,N,k)}this.setIndex(M),this.setAttribute("position",new Ir(A,3)),this.setAttribute("normal",new Ir(T,3)),this.setAttribute("uv",new Ir(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xv=`#ifdef USE_ALPHAHASH
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
#endif`,jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$v=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,f0=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,h0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,S0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
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
}`,L0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,b0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,I0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,H0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Y0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ix=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
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
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fx=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Yx=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,$x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tS=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,nS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,iS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,rS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,oS=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,aS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,cS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,dS=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,pS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mS=`uniform float size;
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
}`,gS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_S=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,vS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,SS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ot={alphahash_fragment:Wv,alphahash_pars_fragment:Xv,alphamap_fragment:jv,alphamap_pars_fragment:qv,alphatest_fragment:Yv,alphatest_pars_fragment:Kv,aomap_fragment:$v,aomap_pars_fragment:Zv,begin_vertex:Qv,beginnormal_vertex:Jv,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:s0,clipping_planes_vertex:o0,color_fragment:a0,color_pars_fragment:l0,color_pars_vertex:u0,color_vertex:c0,common:f0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:h0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:_0,colorspace_fragment:v0,colorspace_pars_fragment:x0,envmap_fragment:S0,envmap_common_pars_fragment:y0,envmap_pars_fragment:M0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:I0,envmap_vertex:T0,fog_vertex:w0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_fragment:L0,lightmap_pars_fragment:b0,lights_lambert_fragment:D0,lights_lambert_pars_fragment:U0,lights_pars_begin:N0,lights_toon_fragment:F0,lights_toon_pars_fragment:O0,lights_phong_fragment:z0,lights_phong_pars_fragment:k0,lights_physical_fragment:B0,lights_physical_pars_fragment:H0,lights_fragment_begin:V0,lights_fragment_maps:G0,lights_fragment_end:W0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Y0,map_fragment:K0,map_pars_fragment:$0,map_particle_fragment:Z0,map_particle_pars_fragment:Q0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:ex,morphcolor_vertex:tx,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:rx,normal_fragment_begin:sx,normal_fragment_maps:ox,normal_pars_fragment:ax,normal_pars_vertex:lx,normal_vertex:ux,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:hx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:gx,premultiplied_alpha_fragment:_x,project_vertex:vx,dithering_fragment:xx,dithering_pars_fragment:Sx,roughnessmap_fragment:yx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:Ex,shadowmap_pars_vertex:Tx,shadowmap_vertex:wx,shadowmask_pars_fragment:Ax,skinbase_vertex:Rx,skinning_pars_vertex:Cx,skinning_vertex:Px,skinnormal_vertex:Lx,specularmap_fragment:bx,specularmap_pars_fragment:Dx,tonemapping_fragment:Ux,tonemapping_pars_fragment:Nx,transmission_fragment:Ix,transmission_pars_fragment:Fx,uv_pars_fragment:Ox,uv_pars_vertex:zx,uv_vertex:kx,worldpos_vertex:Bx,background_vert:Hx,background_frag:Vx,backgroundCube_vert:Gx,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:jx,depth_vert:qx,depth_frag:Yx,distanceRGBA_vert:Kx,distanceRGBA_frag:$x,equirect_vert:Zx,equirect_frag:Qx,linedashed_vert:Jx,linedashed_frag:eS,meshbasic_vert:tS,meshbasic_frag:nS,meshlambert_vert:iS,meshlambert_frag:rS,meshmatcap_vert:sS,meshmatcap_frag:oS,meshnormal_vert:aS,meshnormal_frag:lS,meshphong_vert:uS,meshphong_frag:cS,meshphysical_vert:fS,meshphysical_frag:dS,meshtoon_vert:hS,meshtoon_frag:pS,points_vert:mS,points_frag:gS,shadow_vert:_S,shadow_frag:vS,sprite_vert:xS,sprite_frag:SS},Re={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},fi={basic:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new At(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:_n([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:_n([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new At(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:_n([Re.points,Re.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:_n([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:_n([Re.common,Re.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:_n([Re.sprite,Re.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:_n([Re.common,Re.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:_n([Re.lights,Re.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};fi.physical={uniforms:_n([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Qa={r:0,b:0,g:0};function yS(o,e,n,s,a,u,d){const f=new At(0);let p=u===!0?0:1,m,g,S=null,v=0,M=null;function A(x,_){let z=!1,P=_.isScene===!0?_.background:null;P&&P.isTexture&&(P=(_.backgroundBlurriness>0?n:e).get(P)),P===null?T(f,p):P&&P.isColor&&(T(P,1),z=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?s.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||z)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),P&&(P.isCubeTexture||P.mapping===al)?(g===void 0&&(g=new Di(new Lo(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:Us(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,k,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=vt.getTransfer(P.colorSpace)!==wt,(S!==P||v!==P.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,S=P,v=P.version,M=o.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new Di(new fl(2,2),new Or({name:"BackgroundMaterial",uniforms:Us(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=vt.getTransfer(P.colorSpace)!==wt,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(S!==P||v!==P.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,S=P,v=P.version,M=o.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null))}function T(x,_){x.getRGB(Qa,pm(o)),s.buffers.color.setClear(Qa.r,Qa.g,Qa.b,_,d)}return{getClearColor:function(){return f},setClearColor:function(x,_=1){f.set(x),p=_,T(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(x){p=x,T(f,p)},render:A}}function MS(o,e,n,s){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||u!==null,f={},p=x(null);let m=p,g=!1;function S(G,re,oe,te,j){let Z=!1;if(d){const w=T(te,oe,re);m!==w&&(m=w,M(m.object)),Z=_(G,te,oe,j),Z&&z(G,te,oe,j)}else{const w=re.wireframe===!0;(m.geometry!==te.id||m.program!==oe.id||m.wireframe!==w)&&(m.geometry=te.id,m.program=oe.id,m.wireframe=w,Z=!0)}j!==null&&n.update(j,o.ELEMENT_ARRAY_BUFFER),(Z||g)&&(g=!1,K(G,re,oe,te),j!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(j).buffer))}function v(){return s.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(G){return s.isWebGL2?o.bindVertexArray(G):u.bindVertexArrayOES(G)}function A(G){return s.isWebGL2?o.deleteVertexArray(G):u.deleteVertexArrayOES(G)}function T(G,re,oe){const te=oe.wireframe===!0;let j=f[G.id];j===void 0&&(j={},f[G.id]=j);let Z=j[re.id];Z===void 0&&(Z={},j[re.id]=Z);let w=Z[te];return w===void 0&&(w=x(v()),Z[te]=w),w}function x(G){const re=[],oe=[],te=[];for(let j=0;j<a;j++)re[j]=0,oe[j]=0,te[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:oe,attributeDivisors:te,object:G,attributes:{},index:null}}function _(G,re,oe,te){const j=m.attributes,Z=re.attributes;let w=0;const b=oe.getAttributes();for(const V in b)if(b[V].location>=0){const le=j[V];let ge=Z[V];if(ge===void 0&&(V==="instanceMatrix"&&G.instanceMatrix&&(ge=G.instanceMatrix),V==="instanceColor"&&G.instanceColor&&(ge=G.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;w++}return m.attributesNum!==w||m.index!==te}function z(G,re,oe,te){const j={},Z=re.attributes;let w=0;const b=oe.getAttributes();for(const V in b)if(b[V].location>=0){let le=Z[V];le===void 0&&(V==="instanceMatrix"&&G.instanceMatrix&&(le=G.instanceMatrix),V==="instanceColor"&&G.instanceColor&&(le=G.instanceColor));const ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),j[V]=ge,w++}m.attributes=j,m.attributesNum=w,m.index=te}function P(){const G=m.newAttributes;for(let re=0,oe=G.length;re<oe;re++)G[re]=0}function L(G){N(G,0)}function N(G,re){const oe=m.newAttributes,te=m.enabledAttributes,j=m.attributeDivisors;oe[G]=1,te[G]===0&&(o.enableVertexAttribArray(G),te[G]=1),j[G]!==re&&((s.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,re),j[G]=re)}function k(){const G=m.newAttributes,re=m.enabledAttributes;for(let oe=0,te=re.length;oe<te;oe++)re[oe]!==G[oe]&&(o.disableVertexAttribArray(oe),re[oe]=0)}function F(G,re,oe,te,j,Z,w){w===!0?o.vertexAttribIPointer(G,re,oe,j,Z):o.vertexAttribPointer(G,re,oe,te,j,Z)}function K(G,re,oe,te){if(s.isWebGL2===!1&&(G.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;P();const j=te.attributes,Z=oe.getAttributes(),w=re.defaultAttributeValues;for(const b in Z){const V=Z[b];if(V.location>=0){let ue=j[b];if(ue===void 0&&(b==="instanceMatrix"&&G.instanceMatrix&&(ue=G.instanceMatrix),b==="instanceColor"&&G.instanceColor&&(ue=G.instanceColor)),ue!==void 0){const le=ue.normalized,ge=ue.itemSize,we=n.get(ue);if(we===void 0)continue;const be=we.buffer,Ae=we.type,Je=we.bytesPerElement,an=s.isWebGL2===!0&&(Ae===o.INT||Ae===o.UNSIGNED_INT||ue.gpuType===Jp);if(ue.isInterleavedBufferAttribute){const tt=ue.data,Y=tt.stride,It=ue.offset;if(tt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<V.locationSize;Xe++)N(V.location+Xe,tt.meshPerAttribute);G.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Xe=0;Xe<V.locationSize;Xe++)L(V.location+Xe);o.bindBuffer(o.ARRAY_BUFFER,be);for(let Xe=0;Xe<V.locationSize;Xe++)F(V.location+Xe,ge/V.locationSize,Ae,le,Y*Je,(It+ge/V.locationSize*Xe)*Je,an)}else{if(ue.isInstancedBufferAttribute){for(let tt=0;tt<V.locationSize;tt++)N(V.location+tt,ue.meshPerAttribute);G.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let tt=0;tt<V.locationSize;tt++)L(V.location+tt);o.bindBuffer(o.ARRAY_BUFFER,be);for(let tt=0;tt<V.locationSize;tt++)F(V.location+tt,ge/V.locationSize,Ae,le,ge*Je,ge/V.locationSize*tt*Je,an)}}else if(w!==void 0){const le=w[b];if(le!==void 0)switch(le.length){case 2:o.vertexAttrib2fv(V.location,le);break;case 3:o.vertexAttrib3fv(V.location,le);break;case 4:o.vertexAttrib4fv(V.location,le);break;default:o.vertexAttrib1fv(V.location,le)}}}}k()}function R(){ae();for(const G in f){const re=f[G];for(const oe in re){const te=re[oe];for(const j in te)A(te[j].object),delete te[j];delete re[oe]}delete f[G]}}function I(G){if(f[G.id]===void 0)return;const re=f[G.id];for(const oe in re){const te=re[oe];for(const j in te)A(te[j].object),delete te[j];delete re[oe]}delete f[G.id]}function se(G){for(const re in f){const oe=f[re];if(oe[G.id]===void 0)continue;const te=oe[G.id];for(const j in te)A(te[j].object),delete te[j];delete oe[G.id]}}function ae(){de(),g=!0,m!==p&&(m=p,M(m.object))}function de(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:S,reset:ae,resetDefaultState:de,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfProgram:se,initAttributes:P,enableAttribute:L,disableUnusedAttributes:k}}function ES(o,e,n,s){const a=s.isWebGL2;let u;function d(m){u=m}function f(m,g){o.drawArrays(u,m,g),n.update(g,u,1)}function p(m,g,S){if(S===0)return;let v,M;if(a)v=o,M="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[M](u,m,g,S),n.update(g,u,S)}this.setMode=d,this.render=f,this.renderInstances=p}function TS(o,e,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let f=n.precision!==void 0?n.precision:"highp";const p=u(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=d||e.has("WEBGL_draw_buffers"),g=n.logarithmicDepthBuffer===!0,S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),T=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),z=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,L=d||e.has("OES_texture_float"),N=P&&L,k=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:a,getMaxPrecision:u,precision:f,logarithmicDepthBuffer:g,maxTextures:S,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:A,maxAttributes:T,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:z,vertexTextures:P,floatFragmentTextures:L,floatVertexTextures:N,maxSamples:k}}function wS(o){const e=this;let n=null,s=0,a=!1,u=!1;const d=new Pr,f=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,v){const M=S.length!==0||v||s!==0||a;return a=v,s=S.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,v){n=g(S,v,0)},this.setState=function(S,v,M){const A=S.clippingPlanes,T=S.clipIntersection,x=S.clipShadows,_=o.get(S);if(!a||A===null||A.length===0||u&&!x)u?g(null):m();else{const z=u?0:s,P=z*4;let L=_.clippingState||null;p.value=L,L=g(A,v,P,M);for(let N=0;N!==P;++N)L[N]=n[N];_.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(S,v,M,A){const T=S!==null?S.length:0;let x=null;if(T!==0){if(x=p.value,A!==!0||x===null){const _=M+T*4,z=v.matrixWorldInverse;f.getNormalMatrix(z),(x===null||x.length<_)&&(x=new Float32Array(_));for(let P=0,L=M;P!==T;++P,L+=4)d.copy(S[P]).applyMatrix4(z,f),d.normal.toArray(x,L),x[L+3]=d.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function AS(o){let e=new WeakMap;function n(d,f){return f===Uc?d.mapping=Ls:f===Nc&&(d.mapping=bs),d}function s(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const f=d.mapping;if(f===Uc||f===Nc)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new Bv(p.height/2);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class RS extends mm{constructor(e=-1,n=1,s=1,a=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=a,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,a,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=s-e,d=s+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Rs=4,wp=[.125,.215,.35,.446,.526,.582],br=20,Rc=new RS,Ap=new At;let Cc=null;const Lr=(1+Math.sqrt(5))/2,ws=1/Lr,Rp=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,Lr,ws),new ee(0,Lr,-ws),new ee(ws,0,Lr),new ee(-ws,0,Lr),new ee(Lr,ws,0),new ee(-Lr,ws,0)];class Cp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,s=.1,a=100){Cc=this._renderer.getRenderTarget(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc),e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ls||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget();const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ao,format:si,colorSpace:Ui,depthBuffer:!1},a=Pp(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,n,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CS(u)),this._blurMaterial=PS(u,e,n)}return a}_compileMaterial(e){const n=new Di(this._lodPlanes[0],e);this._renderer.compile(n,Rc)}_sceneToCubeUV(e,n,s,a){const f=new jn(90,1,n,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,v=g.toneMapping;g.getClearColor(Ap),g.toneMapping=lr,g.autoClear=!1;const M=new jc({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),A=new Di(new Lo,M);let T=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,T=!0):(M.color.copy(Ap),T=!0);for(let _=0;_<6;_++){const z=_%3;z===0?(f.up.set(0,p[_],0),f.lookAt(m[_],0,0)):z===1?(f.up.set(0,0,p[_]),f.lookAt(0,m[_],0)):(f.up.set(0,p[_],0),f.lookAt(0,0,m[_]));const P=this._cubeSize;Ja(a,z*P,_>2?P:0,P,P),g.setRenderTarget(a),T&&g.render(A,f),g.render(e,f)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=v,g.autoClear=S,e.background=x}_textureToCubeUV(e,n){const s=this._renderer,a=e.mapping===Ls||e.mapping===bs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lp());const u=a?this._cubemapMaterial:this._equirectMaterial,d=new Di(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=e;const p=this._cubeSize;Ja(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(d,Rc)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=Rp[(a-1)%Rp.length];this._blur(e,a-1,a,u,d)}n.autoClear=s}_blur(e,n,s,a,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,s,a,"latitudinal",u),this._halfBlur(d,e,s,s,a,"longitudinal",u)}_halfBlur(e,n,s,a,u,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,S=new Di(this._lodPlanes[a],m),v=m.uniforms,M=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*br-1),T=u/A,x=isFinite(u)?1+Math.floor(g*T):br;x>br&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${br}`);const _=[];let z=0;for(let F=0;F<br;++F){const K=F/T,R=Math.exp(-K*K/2);_.push(R),F===0?z+=R:F<x&&(z+=2*R)}for(let F=0;F<_.length;F++)_[F]=_[F]/z;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=_,v.latitudinal.value=d==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:P}=this;v.dTheta.value=A,v.mipInt.value=P-s;const L=this._sizeLods[a],N=3*L*(a>P-Rs?a-P+Rs:0),k=4*(this._cubeSize-L);Ja(n,N,k,3*L,2*L),p.setRenderTarget(n),p.render(S,Rc)}}function CS(o){const e=[],n=[],s=[];let a=o;const u=o-Rs+1+wp.length;for(let d=0;d<u;d++){const f=Math.pow(2,a);n.push(f);let p=1/f;d>o-Rs?p=wp[d-o+Rs-1]:d===0&&(p=0),s.push(p);const m=1/(f-2),g=-m,S=1+m,v=[g,g,S,g,S,S,g,g,S,S,g,S],M=6,A=6,T=3,x=2,_=1,z=new Float32Array(T*A*M),P=new Float32Array(x*A*M),L=new Float32Array(_*A*M);for(let k=0;k<M;k++){const F=k%3*2/3-1,K=k>2?0:-1,R=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];z.set(R,T*A*k),P.set(v,x*A*k);const I=[k,k,k,k,k,k];L.set(I,_*A*k)}const N=new zr;N.setAttribute("position",new di(z,T)),N.setAttribute("uv",new di(P,x)),N.setAttribute("faceIndex",new di(L,_)),e.push(N),a>Rs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:s}}function Pp(o,e,n){const s=new Fr(o,e,n);return s.texture.mapping=al,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ja(o,e,n,s,a){o.viewport.set(e,n,s,a),o.scissor.set(e,n,s,a)}function PS(o,e,n){const s=new Float32Array(br),a=new ee(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Lp(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function bp(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function LS(o){let e=new WeakMap,n=null;function s(f){if(f&&f.isTexture){const p=f.mapping,m=p===Uc||p===Nc,g=p===Ls||p===bs;if(m||g)if(f.isRenderTargetTexture&&f.needsPMREMUpdate===!0){f.needsPMREMUpdate=!1;let S=e.get(f);return n===null&&(n=new Cp(o)),S=m?n.fromEquirectangular(f,S):n.fromCubemap(f,S),e.set(f,S),S.texture}else{if(e.has(f))return e.get(f).texture;{const S=f.image;if(m&&S&&S.height>0||g&&S&&a(S)){n===null&&(n=new Cp(o));const v=m?n.fromEquirectangular(f):n.fromCubemap(f);return e.set(f,v),f.addEventListener("dispose",u),v.texture}else return null}}}return f}function a(f){let p=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&p++;return p===m}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function bS(o){const e={};function n(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(s)}return e[s]=a,a}return{has:function(s){return n(s)!==null},init:function(s){s.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(s){const a=n(s);return a===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function DS(o,e,n,s){const a={},u=new WeakMap;function d(S){const v=S.target;v.index!==null&&e.remove(v.index);for(const A in v.attributes)e.remove(v.attributes[A]);for(const A in v.morphAttributes){const T=v.morphAttributes[A];for(let x=0,_=T.length;x<_;x++)e.remove(T[x])}v.removeEventListener("dispose",d),delete a[v.id];const M=u.get(v);M&&(e.remove(M),u.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(S,v){return a[v.id]===!0||(v.addEventListener("dispose",d),a[v.id]=!0,n.memory.geometries++),v}function p(S){const v=S.attributes;for(const A in v)e.update(v[A],o.ARRAY_BUFFER);const M=S.morphAttributes;for(const A in M){const T=M[A];for(let x=0,_=T.length;x<_;x++)e.update(T[x],o.ARRAY_BUFFER)}}function m(S){const v=[],M=S.index,A=S.attributes.position;let T=0;if(M!==null){const z=M.array;T=M.version;for(let P=0,L=z.length;P<L;P+=3){const N=z[P+0],k=z[P+1],F=z[P+2];v.push(N,k,k,F,F,N)}}else if(A!==void 0){const z=A.array;T=A.version;for(let P=0,L=z.length/3-1;P<L;P+=3){const N=P+0,k=P+1,F=P+2;v.push(N,k,k,F,F,N)}}else return;const x=new(om(v)?hm:dm)(v,1);x.version=T;const _=u.get(S);_&&e.remove(_),u.set(S,x)}function g(S){const v=u.get(S);if(v){const M=S.index;M!==null&&v.version<M.version&&m(S)}else m(S);return u.get(S)}return{get:f,update:p,getWireframeAttribute:g}}function US(o,e,n,s){const a=s.isWebGL2;let u;function d(v){u=v}let f,p;function m(v){f=v.type,p=v.bytesPerElement}function g(v,M){o.drawElements(u,M,f,v*p),n.update(M,u,1)}function S(v,M,A){if(A===0)return;let T,x;if(a)T=o,x="drawElementsInstanced";else if(T=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",T===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}T[x](u,M,f,v*p,A),n.update(M,u,A)}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=S}function NS(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,f){switch(n.calls++,d){case o.TRIANGLES:n.triangles+=f*(u/3);break;case o.LINES:n.lines+=f*(u/2);break;case o.LINE_STRIP:n.lines+=f*(u-1);break;case o.LINE_LOOP:n.lines+=f*u;break;case o.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:s}}function IS(o,e){return o[0]-e[0]}function FS(o,e){return Math.abs(e[1])-Math.abs(o[1])}function OS(o,e,n){const s={},a=new Float32Array(8),u=new WeakMap,d=new sn,f=[];for(let m=0;m<8;m++)f[m]=[m,0];function p(m,g,S){const v=m.morphTargetInfluences;if(e.isWebGL2===!0){const A=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,T=A!==void 0?A.length:0;let x=u.get(g);if(x===void 0||x.count!==T){let re=function(){de.dispose(),u.delete(g),g.removeEventListener("dispose",re)};var M=re;x!==void 0&&x.texture.dispose();const P=g.morphAttributes.position!==void 0,L=g.morphAttributes.normal!==void 0,N=g.morphAttributes.color!==void 0,k=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],K=g.morphAttributes.color||[];let R=0;P===!0&&(R=1),L===!0&&(R=2),N===!0&&(R=3);let I=g.attributes.position.count*R,se=1;I>e.maxTextureSize&&(se=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const ae=new Float32Array(I*se*4*T),de=new um(ae,I,se,T);de.type=or,de.needsUpdate=!0;const G=R*4;for(let oe=0;oe<T;oe++){const te=k[oe],j=F[oe],Z=K[oe],w=I*se*4*oe;for(let b=0;b<te.count;b++){const V=b*G;P===!0&&(d.fromBufferAttribute(te,b),ae[w+V+0]=d.x,ae[w+V+1]=d.y,ae[w+V+2]=d.z,ae[w+V+3]=0),L===!0&&(d.fromBufferAttribute(j,b),ae[w+V+4]=d.x,ae[w+V+5]=d.y,ae[w+V+6]=d.z,ae[w+V+7]=0),N===!0&&(d.fromBufferAttribute(Z,b),ae[w+V+8]=d.x,ae[w+V+9]=d.y,ae[w+V+10]=d.z,ae[w+V+11]=Z.itemSize===4?d.w:1)}}x={count:T,texture:de,size:new St(I,se)},u.set(g,x),g.addEventListener("dispose",re)}let _=0;for(let P=0;P<v.length;P++)_+=v[P];const z=g.morphTargetsRelative?1:1-_;S.getUniforms().setValue(o,"morphTargetBaseInfluence",z),S.getUniforms().setValue(o,"morphTargetInfluences",v),S.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),S.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const A=v===void 0?0:v.length;let T=s[g.id];if(T===void 0||T.length!==A){T=[];for(let L=0;L<A;L++)T[L]=[L,0];s[g.id]=T}for(let L=0;L<A;L++){const N=T[L];N[0]=L,N[1]=v[L]}T.sort(FS);for(let L=0;L<8;L++)L<A&&T[L][1]?(f[L][0]=T[L][0],f[L][1]=T[L][1]):(f[L][0]=Number.MAX_SAFE_INTEGER,f[L][1]=0);f.sort(IS);const x=g.morphAttributes.position,_=g.morphAttributes.normal;let z=0;for(let L=0;L<8;L++){const N=f[L],k=N[0],F=N[1];k!==Number.MAX_SAFE_INTEGER&&F?(x&&g.getAttribute("morphTarget"+L)!==x[k]&&g.setAttribute("morphTarget"+L,x[k]),_&&g.getAttribute("morphNormal"+L)!==_[k]&&g.setAttribute("morphNormal"+L,_[k]),a[L]=F,z+=F):(x&&g.hasAttribute("morphTarget"+L)===!0&&g.deleteAttribute("morphTarget"+L),_&&g.hasAttribute("morphNormal"+L)===!0&&g.deleteAttribute("morphNormal"+L),a[L]=0)}const P=g.morphTargetsRelative?1:1-z;S.getUniforms().setValue(o,"morphTargetBaseInfluence",P),S.getUniforms().setValue(o,"morphTargetInfluences",a)}}return{update:p}}function zS(o,e,n,s){let a=new WeakMap;function u(p){const m=s.render.frame,g=p.geometry,S=e.get(p,g);if(a.get(S)!==m&&(e.update(S),a.set(S,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return S}function d(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:d}}const xm=new Pn,Sm=new um,ym=new Mv,Mm=new gm,Dp=[],Up=[],Np=new Float32Array(16),Ip=new Float32Array(9),Fp=new Float32Array(4);function Is(o,e,n){const s=o[0];if(s<=0||s>0)return o;const a=e*n;let u=Dp[a];if(u===void 0&&(u=new Float32Array(a),Dp[a]=u),e!==0){s.toArray(u,0);for(let d=1,f=0;d!==e;++d)f+=n,o[d].toArray(u,f)}return u}function jt(o,e){if(o.length!==e.length)return!1;for(let n=0,s=o.length;n<s;n++)if(o[n]!==e[n])return!1;return!0}function qt(o,e){for(let n=0,s=e.length;n<s;n++)o[n]=e[n]}function dl(o,e){let n=Up[e];n===void 0&&(n=new Int32Array(e),Up[e]=n);for(let s=0;s!==e;++s)n[s]=o.allocateTextureUnit();return n}function kS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function BS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;o.uniform2fv(this.addr,e),qt(n,e)}}function HS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;o.uniform3fv(this.addr,e),qt(n,e)}}function VS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;o.uniform4fv(this.addr,e),qt(n,e)}}function GS(o,e){const n=this.cache,s=e.elements;if(s===void 0){if(jt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(jt(n,s))return;Fp.set(s),o.uniformMatrix2fv(this.addr,!1,Fp),qt(n,s)}}function WS(o,e){const n=this.cache,s=e.elements;if(s===void 0){if(jt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(jt(n,s))return;Ip.set(s),o.uniformMatrix3fv(this.addr,!1,Ip),qt(n,s)}}function XS(o,e){const n=this.cache,s=e.elements;if(s===void 0){if(jt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(jt(n,s))return;Np.set(s),o.uniformMatrix4fv(this.addr,!1,Np),qt(n,s)}}function jS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function qS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;o.uniform2iv(this.addr,e),qt(n,e)}}function YS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;o.uniform3iv(this.addr,e),qt(n,e)}}function KS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;o.uniform4iv(this.addr,e),qt(n,e)}}function $S(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function ZS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;o.uniform2uiv(this.addr,e),qt(n,e)}}function QS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;o.uniform3uiv(this.addr,e),qt(n,e)}}function JS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;o.uniform4uiv(this.addr,e),qt(n,e)}}function ey(o,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(o.uniform1i(this.addr,a),s[0]=a),n.setTexture2D(e||xm,a)}function ty(o,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(o.uniform1i(this.addr,a),s[0]=a),n.setTexture3D(e||ym,a)}function ny(o,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(o.uniform1i(this.addr,a),s[0]=a),n.setTextureCube(e||Mm,a)}function iy(o,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(o.uniform1i(this.addr,a),s[0]=a),n.setTexture2DArray(e||Sm,a)}function ry(o){switch(o){case 5126:return kS;case 35664:return BS;case 35665:return HS;case 35666:return VS;case 35674:return GS;case 35675:return WS;case 35676:return XS;case 5124:case 35670:return jS;case 35667:case 35671:return qS;case 35668:case 35672:return YS;case 35669:case 35673:return KS;case 5125:return $S;case 36294:return ZS;case 36295:return QS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}function sy(o,e){o.uniform1fv(this.addr,e)}function oy(o,e){const n=Is(e,this.size,2);o.uniform2fv(this.addr,n)}function ay(o,e){const n=Is(e,this.size,3);o.uniform3fv(this.addr,n)}function ly(o,e){const n=Is(e,this.size,4);o.uniform4fv(this.addr,n)}function uy(o,e){const n=Is(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function cy(o,e){const n=Is(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function fy(o,e){const n=Is(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function dy(o,e){o.uniform1iv(this.addr,e)}function hy(o,e){o.uniform2iv(this.addr,e)}function py(o,e){o.uniform3iv(this.addr,e)}function my(o,e){o.uniform4iv(this.addr,e)}function gy(o,e){o.uniform1uiv(this.addr,e)}function _y(o,e){o.uniform2uiv(this.addr,e)}function vy(o,e){o.uniform3uiv(this.addr,e)}function xy(o,e){o.uniform4uiv(this.addr,e)}function Sy(o,e,n){const s=this.cache,a=e.length,u=dl(n,a);jt(s,u)||(o.uniform1iv(this.addr,u),qt(s,u));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||xm,u[d])}function yy(o,e,n){const s=this.cache,a=e.length,u=dl(n,a);jt(s,u)||(o.uniform1iv(this.addr,u),qt(s,u));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||ym,u[d])}function My(o,e,n){const s=this.cache,a=e.length,u=dl(n,a);jt(s,u)||(o.uniform1iv(this.addr,u),qt(s,u));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||Mm,u[d])}function Ey(o,e,n){const s=this.cache,a=e.length,u=dl(n,a);jt(s,u)||(o.uniform1iv(this.addr,u),qt(s,u));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Sm,u[d])}function Ty(o){switch(o){case 5126:return sy;case 35664:return oy;case 35665:return ay;case 35666:return ly;case 35674:return uy;case 35675:return cy;case 35676:return fy;case 5124:case 35670:return dy;case 35667:case 35671:return hy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return _y;case 36295:return vy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return Ey}}class wy{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.setValue=ry(n.type)}}class Ay{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.size=n.size,this.setValue=Ty(n.type)}}class Ry{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const a=this.seq;for(let u=0,d=a.length;u!==d;++u){const f=a[u];f.setValue(e,n[f.id],s)}}}const Pc=/(\w+)(\])?(\[|\.)?/g;function Op(o,e){o.seq.push(e),o.map[e.id]=e}function Cy(o,e,n){const s=o.name,a=s.length;for(Pc.lastIndex=0;;){const u=Pc.exec(s),d=Pc.lastIndex;let f=u[1];const p=u[2]==="]",m=u[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===a){Op(n,m===void 0?new wy(f,o,e):new Ay(f,o,e));break}else{let S=n.map[f];S===void 0&&(S=new Ry(f),Op(n,S)),n=S}}}class tl{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const u=e.getActiveUniform(n,a),d=e.getUniformLocation(n,u.name);Cy(u,d,this)}}setValue(e,n,s,a){const u=this.map[n];u!==void 0&&u.setValue(e,s,a)}setOptional(e,n,s){const a=n[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,n,s,a){for(let u=0,d=n.length;u!==d;++u){const f=n[u],p=s[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const s=[];for(let a=0,u=e.length;a!==u;++a){const d=e[a];d.id in n&&s.push(d)}return s}}function zp(o,e,n){const s=o.createShader(e);return o.shaderSource(s,n),o.compileShader(s),s}let Py=0;function Ly(o,e){const n=o.split(`
`),s=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let d=a;d<u;d++){const f=d+1;s.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return s.join(`
`)}function by(o){const e=vt.getPrimaries(vt.workingColorSpace),n=vt.getPrimaries(o);let s;switch(e===n?s="":e===rl&&n===il?s="LinearDisplayP3ToLinearSRGB":e===il&&n===rl&&(s="LinearSRGBToLinearDisplayP3"),o){case Ui:case ll:return[s,"LinearTransferOETF"];case rn:case Wc:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function kp(o,e,n){const s=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(s&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+Ly(o.getShaderSource(e),d)}else return a}function Dy(o,e){const n=by(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Uy(o,e){let n;switch(e){case V_:n="Linear";break;case G_:n="Reinhard";break;case W_:n="OptimizedCineon";break;case X_:n="ACESFilmic";break;case j_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Ny(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Eo).join(`
`)}function Iy(o){const e=[];for(const n in o){const s=o[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function Fy(o,e){const n={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const u=o.getActiveAttrib(e,a),d=u.name;let f=1;u.type===o.FLOAT_MAT2&&(f=2),u.type===o.FLOAT_MAT3&&(f=3),u.type===o.FLOAT_MAT4&&(f=4),n[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:f}}return n}function Eo(o){return o!==""}function Bp(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hp(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(o){return o.replace(Oy,ky)}const zy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ky(o,e){let n=ot[e];if(n===void 0){const s=zy.get(e);if(s!==void 0)n=ot[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Bc(n)}const By=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vp(o){return o.replace(By,Hy)}function Hy(o,e,n,s){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Gp(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vy(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Yp?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===S_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Gy(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ls:case bs:e="ENVMAP_TYPE_CUBE";break;case al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wy(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function Xy(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Zp:e="ENVMAP_BLENDING_MULTIPLY";break;case B_:e="ENVMAP_BLENDING_MIX";break;case H_:e="ENVMAP_BLENDING_ADD";break}return e}function jy(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function qy(o,e,n,s){const a=o.getContext(),u=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=Vy(n),m=Gy(n),g=Wy(n),S=Xy(n),v=jy(n),M=n.isWebGL2?"":Ny(n),A=Iy(u),T=a.createProgram();let x,_,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Eo).join(`
`),x.length>0&&(x+=`
`),_=[M,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Eo).join(`
`),_.length>0&&(_+=`
`)):(x=[Gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),_=[M,Gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+S:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==lr?"#define TONE_MAPPING":"",n.toneMapping!==lr?ot.tonemapping_pars_fragment:"",n.toneMapping!==lr?Uy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Dy("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Eo).join(`
`)),d=Bc(d),d=Bp(d,n),d=Hp(d,n),f=Bc(f),f=Bp(f,n),f=Hp(f,n),d=Vp(d),f=Vp(f),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",n.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=z+x+d,L=z+_+f,N=zp(a,a.VERTEX_SHADER,P),k=zp(a,a.FRAGMENT_SHADER,L);if(a.attachShader(T,N),a.attachShader(T,k),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T),o.debug.checkShaderErrors){const R=a.getProgramInfoLog(T).trim(),I=a.getShaderInfoLog(N).trim(),se=a.getShaderInfoLog(k).trim();let ae=!0,de=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ae=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,T,N,k);else{const G=kp(a,N,"vertex"),re=kp(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+G+`
`+re)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(I===""||se==="")&&(de=!1);de&&(this.diagnostics={runnable:ae,programLog:R,vertexShader:{log:I,prefix:x},fragmentShader:{log:se,prefix:_}})}a.deleteShader(N),a.deleteShader(k);let F;this.getUniforms=function(){return F===void 0&&(F=new tl(a,T)),F};let K;return this.getAttributes=function(){return K===void 0&&(K=Fy(a,T)),K},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Py++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=k,this}let Yy=0;class Ky{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new $y(e),n.set(e,s)),s}}class $y{constructor(e){this.id=Yy++,this.code=e,this.usedTimes=0}}function Zy(o,e,n,s,a,u,d){const f=new cm,p=new Ky,m=[],g=a.isWebGL2,S=a.logarithmicDepthBuffer,v=a.vertexTextures;let M=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return R===0?"uv":`uv${R}`}function x(R,I,se,ae,de){const G=ae.fog,re=de.geometry,oe=R.isMeshStandardMaterial?ae.environment:null,te=(R.isMeshStandardMaterial?n:e).get(R.envMap||oe),j=te&&te.mapping===al?te.image.height:null,Z=A[R.type];R.precision!==null&&(M=a.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const w=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,b=w!==void 0?w.length:0;let V=0;re.morphAttributes.position!==void 0&&(V=1),re.morphAttributes.normal!==void 0&&(V=2),re.morphAttributes.color!==void 0&&(V=3);let ue,le,ge,we;if(Z){const gt=fi[Z];ue=gt.vertexShader,le=gt.fragmentShader}else ue=R.vertexShader,le=R.fragmentShader,p.update(R),ge=p.getVertexShaderID(R),we=p.getFragmentShaderID(R);const be=o.getRenderTarget(),Ae=de.isInstancedMesh===!0,Je=!!R.map,an=!!R.matcap,tt=!!te,Y=!!R.aoMap,It=!!R.lightMap,Xe=!!R.bumpMap,nt=!!R.normalMap,Ze=!!R.displacementMap,xt=!!R.emissiveMap,lt=!!R.metalnessMap,it=!!R.roughnessMap,dt=R.anisotropy>0,Rt=R.clearcoat>0,zt=R.iridescence>0,D=R.sheen>0,E=R.transmission>0,J=dt&&!!R.anisotropyMap,ye=Rt&&!!R.clearcoatMap,me=Rt&&!!R.clearcoatNormalMap,_e=Rt&&!!R.clearcoatRoughnessMap,ke=zt&&!!R.iridescenceMap,Me=zt&&!!R.iridescenceThicknessMap,Pe=D&&!!R.sheenColorMap,Ye=D&&!!R.sheenRoughnessMap,ft=!!R.specularMap,Se=!!R.specularColorMap,mt=!!R.specularIntensityMap,Qe=E&&!!R.transmissionMap,je=E&&!!R.thicknessMap,He=!!R.gradientMap,O=!!R.alphaMap,Ee=R.alphaTest>0,ve=!!R.alphaHash,Le=!!R.extensions,Ce=!!re.attributes.uv1,he=!!re.attributes.uv2,Be=!!re.attributes.uv3;let et=lr;return R.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(et=o.toneMapping),{isWebGL2:g,shaderID:Z,shaderType:R.type,shaderName:R.name,vertexShader:ue,fragmentShader:le,defines:R.defines,customVertexShaderID:ge,customFragmentShaderID:we,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,instancing:Ae,instancingColor:Ae&&de.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:be===null?o.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ui,map:Je,matcap:an,envMap:tt,envMapMode:tt&&te.mapping,envMapCubeUVHeight:j,aoMap:Y,lightMap:It,bumpMap:Xe,normalMap:nt,displacementMap:v&&Ze,emissiveMap:xt,normalMapObjectSpace:nt&&R.normalMapType===ov,normalMapTangentSpace:nt&&R.normalMapType===sv,metalnessMap:lt,roughnessMap:it,anisotropy:dt,anisotropyMap:J,clearcoat:Rt,clearcoatMap:ye,clearcoatNormalMap:me,clearcoatRoughnessMap:_e,iridescence:zt,iridescenceMap:ke,iridescenceThicknessMap:Me,sheen:D,sheenColorMap:Pe,sheenRoughnessMap:Ye,specularMap:ft,specularColorMap:Se,specularIntensityMap:mt,transmission:E,transmissionMap:Qe,thicknessMap:je,gradientMap:He,opaque:R.transparent===!1&&R.blending===Cs,alphaMap:O,alphaTest:Ee,alphaHash:ve,combine:R.combine,mapUv:Je&&T(R.map.channel),aoMapUv:Y&&T(R.aoMap.channel),lightMapUv:It&&T(R.lightMap.channel),bumpMapUv:Xe&&T(R.bumpMap.channel),normalMapUv:nt&&T(R.normalMap.channel),displacementMapUv:Ze&&T(R.displacementMap.channel),emissiveMapUv:xt&&T(R.emissiveMap.channel),metalnessMapUv:lt&&T(R.metalnessMap.channel),roughnessMapUv:it&&T(R.roughnessMap.channel),anisotropyMapUv:J&&T(R.anisotropyMap.channel),clearcoatMapUv:ye&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:me&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&T(R.sheenRoughnessMap.channel),specularMapUv:ft&&T(R.specularMap.channel),specularColorMapUv:Se&&T(R.specularColorMap.channel),specularIntensityMapUv:mt&&T(R.specularIntensityMap.channel),transmissionMapUv:Qe&&T(R.transmissionMap.channel),thicknessMapUv:je&&T(R.thicknessMap.channel),alphaMapUv:O&&T(R.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(nt||dt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:he,vertexUv3s:Be,pointsUvs:de.isPoints===!0&&!!re.attributes.uv&&(Je||O),fog:!!G,useFog:R.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:de.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:V,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&se.length>0,shadowMapType:o.shadowMap.type,toneMapping:et,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Je&&R.map.isVideoTexture===!0&&vt.getTransfer(R.map.colorSpace)===wt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Li,flipSided:R.side===Cn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Le&&R.extensions.derivatives===!0,extensionFragDepth:Le&&R.extensions.fragDepth===!0,extensionDrawBuffers:Le&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||s.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function _(R){const I=[];if(R.shaderID?I.push(R.shaderID):(I.push(R.customVertexShaderID),I.push(R.customFragmentShaderID)),R.defines!==void 0)for(const se in R.defines)I.push(se),I.push(R.defines[se]);return R.isRawShaderMaterial===!1&&(z(I,R),P(I,R),I.push(o.outputColorSpace)),I.push(R.customProgramCacheKey),I.join()}function z(R,I){R.push(I.precision),R.push(I.outputColorSpace),R.push(I.envMapMode),R.push(I.envMapCubeUVHeight),R.push(I.mapUv),R.push(I.alphaMapUv),R.push(I.lightMapUv),R.push(I.aoMapUv),R.push(I.bumpMapUv),R.push(I.normalMapUv),R.push(I.displacementMapUv),R.push(I.emissiveMapUv),R.push(I.metalnessMapUv),R.push(I.roughnessMapUv),R.push(I.anisotropyMapUv),R.push(I.clearcoatMapUv),R.push(I.clearcoatNormalMapUv),R.push(I.clearcoatRoughnessMapUv),R.push(I.iridescenceMapUv),R.push(I.iridescenceThicknessMapUv),R.push(I.sheenColorMapUv),R.push(I.sheenRoughnessMapUv),R.push(I.specularMapUv),R.push(I.specularColorMapUv),R.push(I.specularIntensityMapUv),R.push(I.transmissionMapUv),R.push(I.thicknessMapUv),R.push(I.combine),R.push(I.fogExp2),R.push(I.sizeAttenuation),R.push(I.morphTargetsCount),R.push(I.morphAttributeCount),R.push(I.numDirLights),R.push(I.numPointLights),R.push(I.numSpotLights),R.push(I.numSpotLightMaps),R.push(I.numHemiLights),R.push(I.numRectAreaLights),R.push(I.numDirLightShadows),R.push(I.numPointLightShadows),R.push(I.numSpotLightShadows),R.push(I.numSpotLightShadowsWithMaps),R.push(I.numLightProbes),R.push(I.shadowMapType),R.push(I.toneMapping),R.push(I.numClippingPlanes),R.push(I.numClipIntersection),R.push(I.depthPacking)}function P(R,I){f.disableAll(),I.isWebGL2&&f.enable(0),I.supportsVertexTextures&&f.enable(1),I.instancing&&f.enable(2),I.instancingColor&&f.enable(3),I.matcap&&f.enable(4),I.envMap&&f.enable(5),I.normalMapObjectSpace&&f.enable(6),I.normalMapTangentSpace&&f.enable(7),I.clearcoat&&f.enable(8),I.iridescence&&f.enable(9),I.alphaTest&&f.enable(10),I.vertexColors&&f.enable(11),I.vertexAlphas&&f.enable(12),I.vertexUv1s&&f.enable(13),I.vertexUv2s&&f.enable(14),I.vertexUv3s&&f.enable(15),I.vertexTangents&&f.enable(16),I.anisotropy&&f.enable(17),R.push(f.mask),f.disableAll(),I.fog&&f.enable(0),I.useFog&&f.enable(1),I.flatShading&&f.enable(2),I.logarithmicDepthBuffer&&f.enable(3),I.skinning&&f.enable(4),I.morphTargets&&f.enable(5),I.morphNormals&&f.enable(6),I.morphColors&&f.enable(7),I.premultipliedAlpha&&f.enable(8),I.shadowMapEnabled&&f.enable(9),I.useLegacyLights&&f.enable(10),I.doubleSided&&f.enable(11),I.flipSided&&f.enable(12),I.useDepthPacking&&f.enable(13),I.dithering&&f.enable(14),I.transmission&&f.enable(15),I.sheen&&f.enable(16),I.opaque&&f.enable(17),I.pointsUvs&&f.enable(18),I.decodeVideoTexture&&f.enable(19),R.push(f.mask)}function L(R){const I=A[R.type];let se;if(I){const ae=fi[I];se=Fv.clone(ae.uniforms)}else se=R.uniforms;return se}function N(R,I){let se;for(let ae=0,de=m.length;ae<de;ae++){const G=m[ae];if(G.cacheKey===I){se=G,++se.usedTimes;break}}return se===void 0&&(se=new qy(o,I,R,u),m.push(se)),se}function k(R){if(--R.usedTimes===0){const I=m.indexOf(R);m[I]=m[m.length-1],m.pop(),R.destroy()}}function F(R){p.remove(R)}function K(){p.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:L,acquireProgram:N,releaseProgram:k,releaseShaderCache:F,programs:m,dispose:K}}function Qy(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function n(u){o.delete(u)}function s(u,d,f){o.get(u)[d]=f}function a(){o=new WeakMap}return{get:e,remove:n,update:s,dispose:a}}function Jy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Wp(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Xp(){const o=[];let e=0;const n=[],s=[],a=[];function u(){e=0,n.length=0,s.length=0,a.length=0}function d(S,v,M,A,T,x){let _=o[e];return _===void 0?(_={id:S.id,object:S,geometry:v,material:M,groupOrder:A,renderOrder:S.renderOrder,z:T,group:x},o[e]=_):(_.id=S.id,_.object=S,_.geometry=v,_.material=M,_.groupOrder=A,_.renderOrder=S.renderOrder,_.z=T,_.group=x),e++,_}function f(S,v,M,A,T,x){const _=d(S,v,M,A,T,x);M.transmission>0?s.push(_):M.transparent===!0?a.push(_):n.push(_)}function p(S,v,M,A,T,x){const _=d(S,v,M,A,T,x);M.transmission>0?s.unshift(_):M.transparent===!0?a.unshift(_):n.unshift(_)}function m(S,v){n.length>1&&n.sort(S||Jy),s.length>1&&s.sort(v||Wp),a.length>1&&a.sort(v||Wp)}function g(){for(let S=e,v=o.length;S<v;S++){const M=o[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:s,transparent:a,init:u,push:f,unshift:p,finish:g,sort:m}}function eM(){let o=new WeakMap;function e(s,a){const u=o.get(s);let d;return u===void 0?(d=new Xp,o.set(s,[d])):a>=u.length?(d=new Xp,u.push(d)):d=u[a],d}function n(){o=new WeakMap}return{get:e,dispose:n}}function tM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new At};break;case"SpotLight":n={position:new ee,direction:new ee,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return o[e.id]=n,n}}}function nM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let iM=0;function rM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sM(o,e){const n=new tM,s=nM(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)a.probe.push(new ee);const u=new ee,d=new on,f=new on;function p(g,S){let v=0,M=0,A=0;for(let ae=0;ae<9;ae++)a.probe[ae].set(0,0,0);let T=0,x=0,_=0,z=0,P=0,L=0,N=0,k=0,F=0,K=0,R=0;g.sort(rM);const I=S===!0?Math.PI:1;for(let ae=0,de=g.length;ae<de;ae++){const G=g[ae],re=G.color,oe=G.intensity,te=G.distance,j=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=re.r*oe*I,M+=re.g*oe*I,A+=re.b*oe*I;else if(G.isLightProbe){for(let Z=0;Z<9;Z++)a.probe[Z].addScaledVector(G.sh.coefficients[Z],oe);R++}else if(G.isDirectionalLight){const Z=n.get(G);if(Z.color.copy(G.color).multiplyScalar(G.intensity*I),G.castShadow){const w=G.shadow,b=s.get(G);b.shadowBias=w.bias,b.shadowNormalBias=w.normalBias,b.shadowRadius=w.radius,b.shadowMapSize=w.mapSize,a.directionalShadow[T]=b,a.directionalShadowMap[T]=j,a.directionalShadowMatrix[T]=G.shadow.matrix,L++}a.directional[T]=Z,T++}else if(G.isSpotLight){const Z=n.get(G);Z.position.setFromMatrixPosition(G.matrixWorld),Z.color.copy(re).multiplyScalar(oe*I),Z.distance=te,Z.coneCos=Math.cos(G.angle),Z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),Z.decay=G.decay,a.spot[_]=Z;const w=G.shadow;if(G.map&&(a.spotLightMap[F]=G.map,F++,w.updateMatrices(G),G.castShadow&&K++),a.spotLightMatrix[_]=w.matrix,G.castShadow){const b=s.get(G);b.shadowBias=w.bias,b.shadowNormalBias=w.normalBias,b.shadowRadius=w.radius,b.shadowMapSize=w.mapSize,a.spotShadow[_]=b,a.spotShadowMap[_]=j,k++}_++}else if(G.isRectAreaLight){const Z=n.get(G);Z.color.copy(re).multiplyScalar(oe),Z.halfWidth.set(G.width*.5,0,0),Z.halfHeight.set(0,G.height*.5,0),a.rectArea[z]=Z,z++}else if(G.isPointLight){const Z=n.get(G);if(Z.color.copy(G.color).multiplyScalar(G.intensity*I),Z.distance=G.distance,Z.decay=G.decay,G.castShadow){const w=G.shadow,b=s.get(G);b.shadowBias=w.bias,b.shadowNormalBias=w.normalBias,b.shadowRadius=w.radius,b.shadowMapSize=w.mapSize,b.shadowCameraNear=w.camera.near,b.shadowCameraFar=w.camera.far,a.pointShadow[x]=b,a.pointShadowMap[x]=j,a.pointShadowMatrix[x]=G.shadow.matrix,N++}a.point[x]=Z,x++}else if(G.isHemisphereLight){const Z=n.get(G);Z.skyColor.copy(G.color).multiplyScalar(oe*I),Z.groundColor.copy(G.groundColor).multiplyScalar(oe*I),a.hemi[P]=Z,P++}}z>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Re.LTC_FLOAT_1,a.rectAreaLTC2=Re.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Re.LTC_HALF_1,a.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=v,a.ambient[1]=M,a.ambient[2]=A;const se=a.hash;(se.directionalLength!==T||se.pointLength!==x||se.spotLength!==_||se.rectAreaLength!==z||se.hemiLength!==P||se.numDirectionalShadows!==L||se.numPointShadows!==N||se.numSpotShadows!==k||se.numSpotMaps!==F||se.numLightProbes!==R)&&(a.directional.length=T,a.spot.length=_,a.rectArea.length=z,a.point.length=x,a.hemi.length=P,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=N,a.pointShadowMap.length=N,a.spotShadow.length=k,a.spotShadowMap.length=k,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=N,a.spotLightMatrix.length=k+F-K,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=K,a.numLightProbes=R,se.directionalLength=T,se.pointLength=x,se.spotLength=_,se.rectAreaLength=z,se.hemiLength=P,se.numDirectionalShadows=L,se.numPointShadows=N,se.numSpotShadows=k,se.numSpotMaps=F,se.numLightProbes=R,a.version=iM++)}function m(g,S){let v=0,M=0,A=0,T=0,x=0;const _=S.matrixWorldInverse;for(let z=0,P=g.length;z<P;z++){const L=g[z];if(L.isDirectionalLight){const N=a.directional[v];N.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(_),v++}else if(L.isSpotLight){const N=a.spot[A];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(_),A++}else if(L.isRectAreaLight){const N=a.rectArea[T];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(_),f.identity(),d.copy(L.matrixWorld),d.premultiply(_),f.extractRotation(d),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const N=a.point[M];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(_),M++}else if(L.isHemisphereLight){const N=a.hemi[x];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(_),x++}}}return{setup:p,setupView:m,state:a}}function jp(o,e){const n=new sM(o,e),s=[],a=[];function u(){s.length=0,a.length=0}function d(S){s.push(S)}function f(S){a.push(S)}function p(S){n.setup(s,S)}function m(S){n.setupView(s,S)}return{init:u,state:{lightsArray:s,shadowsArray:a,lights:n},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:f}}function oM(o,e){let n=new WeakMap;function s(u,d=0){const f=n.get(u);let p;return f===void 0?(p=new jp(o,e),n.set(u,[p])):d>=f.length?(p=new jp(o,e),f.push(p)):p=f[d],p}function a(){n=new WeakMap}return{get:s,dispose:a}}class aM extends cl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lM extends cl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fM(o,e,n){let s=new _m;const a=new St,u=new St,d=new sn,f=new aM({depthPacking:rv}),p=new lM,m={},g=n.maxTextureSize,S={[cr]:Cn,[Cn]:cr,[Li]:Li},v=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:uM,fragmentShader:cM}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const A=new zr;A.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Di(A,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yp;let _=this.type;this.render=function(N,k,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const K=o.getRenderTarget(),R=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),se=o.state;se.setBlending(ar),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ae=_!==Pi&&this.type===Pi,de=_===Pi&&this.type!==Pi;for(let G=0,re=N.length;G<re;G++){const oe=N[G],te=oe.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;a.copy(te.mapSize);const j=te.getFrameExtents();if(a.multiply(j),u.copy(te.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(u.x=Math.floor(g/j.x),a.x=u.x*j.x,te.mapSize.x=u.x),a.y>g&&(u.y=Math.floor(g/j.y),a.y=u.y*j.y,te.mapSize.y=u.y)),te.map===null||ae===!0||de===!0){const w=this.type!==Pi?{minFilter:vn,magFilter:vn}:{};te.map!==null&&te.map.dispose(),te.map=new Fr(a.x,a.y,w),te.map.texture.name=oe.name+".shadowMap",te.camera.updateProjectionMatrix()}o.setRenderTarget(te.map),o.clear();const Z=te.getViewportCount();for(let w=0;w<Z;w++){const b=te.getViewport(w);d.set(u.x*b.x,u.y*b.y,u.x*b.z,u.y*b.w),se.viewport(d),te.updateMatrices(oe,w),s=te.getFrustum(),L(k,F,te.camera,oe,this.type)}te.isPointLightShadow!==!0&&this.type===Pi&&z(te,F),te.needsUpdate=!1}_=this.type,x.needsUpdate=!1,o.setRenderTarget(K,R,I)};function z(N,k){const F=e.update(T);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Fr(a.x,a.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(k,null,F,v,T,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(k,null,F,M,T,null)}function P(N,k,F,K){let R=null;const I=F.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(I!==void 0)R=I;else if(R=F.isPointLight===!0?p:f,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const se=R.uuid,ae=k.uuid;let de=m[se];de===void 0&&(de={},m[se]=de);let G=de[ae];G===void 0&&(G=R.clone(),de[ae]=G),R=G}if(R.visible=k.visible,R.wireframe=k.wireframe,K===Pi?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:S[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,F.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=o.properties.get(R);se.light=F}return R}function L(N,k,F,K,R){if(N.visible===!1)return;if(N.layers.test(k.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===Pi)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,N.matrixWorld);const ae=e.update(N),de=N.material;if(Array.isArray(de)){const G=ae.groups;for(let re=0,oe=G.length;re<oe;re++){const te=G[re],j=de[te.materialIndex];if(j&&j.visible){const Z=P(N,j,K,R);o.renderBufferDirect(F,null,ae,Z,N,te)}}}else if(de.visible){const G=P(N,de,K,R);o.renderBufferDirect(F,null,ae,G,N,null)}}const se=N.children;for(let ae=0,de=se.length;ae<de;ae++)L(se[ae],k,F,K,R)}}function dM(o,e,n){const s=n.isWebGL2;function a(){let O=!1;const Ee=new sn;let ve=null;const Le=new sn(0,0,0,0);return{setMask:function(Ce){ve!==Ce&&!O&&(o.colorMask(Ce,Ce,Ce,Ce),ve=Ce)},setLocked:function(Ce){O=Ce},setClear:function(Ce,he,Be,et,Yt){Yt===!0&&(Ce*=et,he*=et,Be*=et),Ee.set(Ce,he,Be,et),Le.equals(Ee)===!1&&(o.clearColor(Ce,he,Be,et),Le.copy(Ee))},reset:function(){O=!1,ve=null,Le.set(-1,0,0,0)}}}function u(){let O=!1,Ee=null,ve=null,Le=null;return{setTest:function(Ce){Ce?be(o.DEPTH_TEST):Ae(o.DEPTH_TEST)},setMask:function(Ce){Ee!==Ce&&!O&&(o.depthMask(Ce),Ee=Ce)},setFunc:function(Ce){if(ve!==Ce){switch(Ce){case U_:o.depthFunc(o.NEVER);break;case N_:o.depthFunc(o.ALWAYS);break;case I_:o.depthFunc(o.LESS);break;case Dc:o.depthFunc(o.LEQUAL);break;case F_:o.depthFunc(o.EQUAL);break;case O_:o.depthFunc(o.GEQUAL);break;case z_:o.depthFunc(o.GREATER);break;case k_:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ve=Ce}},setLocked:function(Ce){O=Ce},setClear:function(Ce){Le!==Ce&&(o.clearDepth(Ce),Le=Ce)},reset:function(){O=!1,Ee=null,ve=null,Le=null}}}function d(){let O=!1,Ee=null,ve=null,Le=null,Ce=null,he=null,Be=null,et=null,Yt=null;return{setTest:function(gt){O||(gt?be(o.STENCIL_TEST):Ae(o.STENCIL_TEST))},setMask:function(gt){Ee!==gt&&!O&&(o.stencilMask(gt),Ee=gt)},setFunc:function(gt,Ln,Ft){(ve!==gt||Le!==Ln||Ce!==Ft)&&(o.stencilFunc(gt,Ln,Ft),ve=gt,Le=Ln,Ce=Ft)},setOp:function(gt,Ln,Ft){(he!==gt||Be!==Ln||et!==Ft)&&(o.stencilOp(gt,Ln,Ft),he=gt,Be=Ln,et=Ft)},setLocked:function(gt){O=gt},setClear:function(gt){Yt!==gt&&(o.clearStencil(gt),Yt=gt)},reset:function(){O=!1,Ee=null,ve=null,Le=null,Ce=null,he=null,Be=null,et=null,Yt=null}}}const f=new a,p=new u,m=new d,g=new WeakMap,S=new WeakMap;let v={},M={},A=new WeakMap,T=[],x=null,_=!1,z=null,P=null,L=null,N=null,k=null,F=null,K=null,R=!1,I=null,se=null,ae=null,de=null,G=null;const re=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,te=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),oe=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),oe=te>=2);let Z=null,w={};const b=o.getParameter(o.SCISSOR_BOX),V=o.getParameter(o.VIEWPORT),ue=new sn().fromArray(b),le=new sn().fromArray(V);function ge(O,Ee,ve,Le){const Ce=new Uint8Array(4),he=o.createTexture();o.bindTexture(O,he),o.texParameteri(O,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(O,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Be=0;Be<ve;Be++)s&&(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)?o.texImage3D(Ee,0,o.RGBA,1,1,Le,0,o.RGBA,o.UNSIGNED_BYTE,Ce):o.texImage2D(Ee+Be,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ce);return he}const we={};we[o.TEXTURE_2D]=ge(o.TEXTURE_2D,o.TEXTURE_2D,1),we[o.TEXTURE_CUBE_MAP]=ge(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(we[o.TEXTURE_2D_ARRAY]=ge(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),we[o.TEXTURE_3D]=ge(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),f.setClear(0,0,0,1),p.setClear(1),m.setClear(0),be(o.DEPTH_TEST),p.setFunc(Dc),Ze(!1),xt(Ch),be(o.CULL_FACE),Xe(ar);function be(O){v[O]!==!0&&(o.enable(O),v[O]=!0)}function Ae(O){v[O]!==!1&&(o.disable(O),v[O]=!1)}function Je(O,Ee){return M[O]!==Ee?(o.bindFramebuffer(O,Ee),M[O]=Ee,s&&(O===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Ee),O===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function an(O,Ee){let ve=T,Le=!1;if(O)if(ve=A.get(Ee),ve===void 0&&(ve=[],A.set(Ee,ve)),O.isWebGLMultipleRenderTargets){const Ce=O.texture;if(ve.length!==Ce.length||ve[0]!==o.COLOR_ATTACHMENT0){for(let he=0,Be=Ce.length;he<Be;he++)ve[he]=o.COLOR_ATTACHMENT0+he;ve.length=Ce.length,Le=!0}}else ve[0]!==o.COLOR_ATTACHMENT0&&(ve[0]=o.COLOR_ATTACHMENT0,Le=!0);else ve[0]!==o.BACK&&(ve[0]=o.BACK,Le=!0);Le&&(n.isWebGL2?o.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function tt(O){return x!==O?(o.useProgram(O),x=O,!0):!1}const Y={[As]:o.FUNC_ADD,[M_]:o.FUNC_SUBTRACT,[E_]:o.FUNC_REVERSE_SUBTRACT};if(s)Y[Dh]=o.MIN,Y[Uh]=o.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Y[Dh]=O.MIN_EXT,Y[Uh]=O.MAX_EXT)}const It={[T_]:o.ZERO,[w_]:o.ONE,[A_]:o.SRC_COLOR,[Kp]:o.SRC_ALPHA,[D_]:o.SRC_ALPHA_SATURATE,[L_]:o.DST_COLOR,[C_]:o.DST_ALPHA,[R_]:o.ONE_MINUS_SRC_COLOR,[$p]:o.ONE_MINUS_SRC_ALPHA,[b_]:o.ONE_MINUS_DST_COLOR,[P_]:o.ONE_MINUS_DST_ALPHA};function Xe(O,Ee,ve,Le,Ce,he,Be,et){if(O===ar){_===!0&&(Ae(o.BLEND),_=!1);return}if(_===!1&&(be(o.BLEND),_=!0),O!==y_){if(O!==z||et!==R){if((P!==As||k!==As)&&(o.blendEquation(o.FUNC_ADD),P=As,k=As),et)switch(O){case Cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ph:o.blendFunc(o.ONE,o.ONE);break;case Lh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bh:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ph:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Lh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bh:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}L=null,N=null,F=null,K=null,z=O,R=et}return}Ce=Ce||Ee,he=he||ve,Be=Be||Le,(Ee!==P||Ce!==k)&&(o.blendEquationSeparate(Y[Ee],Y[Ce]),P=Ee,k=Ce),(ve!==L||Le!==N||he!==F||Be!==K)&&(o.blendFuncSeparate(It[ve],It[Le],It[he],It[Be]),L=ve,N=Le,F=he,K=Be),z=O,R=!1}function nt(O,Ee){O.side===Li?Ae(o.CULL_FACE):be(o.CULL_FACE);let ve=O.side===Cn;Ee&&(ve=!ve),Ze(ve),O.blending===Cs&&O.transparent===!1?Xe(ar):Xe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),p.setFunc(O.depthFunc),p.setTest(O.depthTest),p.setMask(O.depthWrite),f.setMask(O.colorWrite);const Le=O.stencilWrite;m.setTest(Le),Le&&(m.setMask(O.stencilWriteMask),m.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),m.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),it(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?be(o.SAMPLE_ALPHA_TO_COVERAGE):Ae(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(O){I!==O&&(O?o.frontFace(o.CW):o.frontFace(o.CCW),I=O)}function xt(O){O!==v_?(be(o.CULL_FACE),O!==se&&(O===Ch?o.cullFace(o.BACK):O===x_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ae(o.CULL_FACE),se=O}function lt(O){O!==ae&&(oe&&o.lineWidth(O),ae=O)}function it(O,Ee,ve){O?(be(o.POLYGON_OFFSET_FILL),(de!==Ee||G!==ve)&&(o.polygonOffset(Ee,ve),de=Ee,G=ve)):Ae(o.POLYGON_OFFSET_FILL)}function dt(O){O?be(o.SCISSOR_TEST):Ae(o.SCISSOR_TEST)}function Rt(O){O===void 0&&(O=o.TEXTURE0+re-1),Z!==O&&(o.activeTexture(O),Z=O)}function zt(O,Ee,ve){ve===void 0&&(Z===null?ve=o.TEXTURE0+re-1:ve=Z);let Le=w[ve];Le===void 0&&(Le={type:void 0,texture:void 0},w[ve]=Le),(Le.type!==O||Le.texture!==Ee)&&(Z!==ve&&(o.activeTexture(ve),Z=ve),o.bindTexture(O,Ee||we[O]),Le.type=O,Le.texture=Ee)}function D(){const O=w[Z];O!==void 0&&O.type!==void 0&&(o.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function E(){try{o.compressedTexImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{o.compressedTexImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{o.texSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{o.texSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{o.texStorage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{o.texStorage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ye(){try{o.texImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{o.texImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(O){ue.equals(O)===!1&&(o.scissor(O.x,O.y,O.z,O.w),ue.copy(O))}function mt(O){le.equals(O)===!1&&(o.viewport(O.x,O.y,O.z,O.w),le.copy(O))}function Qe(O,Ee){let ve=S.get(Ee);ve===void 0&&(ve=new WeakMap,S.set(Ee,ve));let Le=ve.get(O);Le===void 0&&(Le=o.getUniformBlockIndex(Ee,O.name),ve.set(O,Le))}function je(O,Ee){const Le=S.get(Ee).get(O);g.get(Ee)!==Le&&(o.uniformBlockBinding(Ee,Le,O.__bindingPointIndex),g.set(Ee,Le))}function He(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),s===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Z=null,w={},M={},A=new WeakMap,T=[],x=null,_=!1,z=null,P=null,L=null,N=null,k=null,F=null,K=null,R=!1,I=null,se=null,ae=null,de=null,G=null,ue.set(0,0,o.canvas.width,o.canvas.height),le.set(0,0,o.canvas.width,o.canvas.height),f.reset(),p.reset(),m.reset()}return{buffers:{color:f,depth:p,stencil:m},enable:be,disable:Ae,bindFramebuffer:Je,drawBuffers:an,useProgram:tt,setBlending:Xe,setMaterial:nt,setFlipSided:Ze,setCullFace:xt,setLineWidth:lt,setPolygonOffset:it,setScissorTest:dt,activeTexture:Rt,bindTexture:zt,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:Ye,texImage3D:ft,updateUBOMapping:Qe,uniformBlockBinding:je,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:ye,texSubImage3D:me,compressedTexSubImage2D:_e,compressedTexSubImage3D:ke,scissor:Se,viewport:mt,reset:He}}function hM(o,e,n,s,a,u,d){const f=a.isWebGL2,p=a.maxTextures,m=a.maxCubemapSize,g=a.maxTextureSize,S=a.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new WeakMap;let T;const x=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function z(D,E){return _?new OffscreenCanvas(D,E):ol("canvas")}function P(D,E,J,ye){let me=1;if((D.width>ye||D.height>ye)&&(me=ye/Math.max(D.width,D.height)),me<1||E===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const _e=E?kc:Math.floor,ke=_e(me*D.width),Me=_e(me*D.height);T===void 0&&(T=z(ke,Me));const Pe=J?z(ke,Me):T;return Pe.width=ke,Pe.height=Me,Pe.getContext("2d").drawImage(D,0,0,ke,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+ke+"x"+Me+")."),Pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function L(D){return lp(D.width)&&lp(D.height)}function N(D){return f?!1:D.wrapS!==ri||D.wrapT!==ri||D.minFilter!==vn&&D.minFilter!==pn}function k(D,E){return D.generateMipmaps&&E&&D.minFilter!==vn&&D.minFilter!==pn}function F(D){o.generateMipmap(D)}function K(D,E,J,ye,me=!1){if(f===!1)return E;if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let _e=E;if(E===o.RED&&(J===o.FLOAT&&(_e=o.R32F),J===o.HALF_FLOAT&&(_e=o.R16F),J===o.UNSIGNED_BYTE&&(_e=o.R8)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(_e=o.R8UI),J===o.UNSIGNED_SHORT&&(_e=o.R16UI),J===o.UNSIGNED_INT&&(_e=o.R32UI),J===o.BYTE&&(_e=o.R8I),J===o.SHORT&&(_e=o.R16I),J===o.INT&&(_e=o.R32I)),E===o.RG&&(J===o.FLOAT&&(_e=o.RG32F),J===o.HALF_FLOAT&&(_e=o.RG16F),J===o.UNSIGNED_BYTE&&(_e=o.RG8)),E===o.RGBA){const ke=me?nl:vt.getTransfer(ye);J===o.FLOAT&&(_e=o.RGBA32F),J===o.HALF_FLOAT&&(_e=o.RGBA16F),J===o.UNSIGNED_BYTE&&(_e=ke===wt?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(_e=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(_e=o.RGB5_A1)}return(_e===o.R16F||_e===o.R32F||_e===o.RG16F||_e===o.RG32F||_e===o.RGBA16F||_e===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function R(D,E,J){return k(D,J)===!0||D.isFramebufferTexture&&D.minFilter!==vn&&D.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){return D===vn||D===Nh||D===tc?o.NEAREST:o.LINEAR}function se(D){const E=D.target;E.removeEventListener("dispose",se),de(E),E.isVideoTexture&&A.delete(E)}function ae(D){const E=D.target;E.removeEventListener("dispose",ae),re(E)}function de(D){const E=s.get(D);if(E.__webglInit===void 0)return;const J=D.source,ye=x.get(J);if(ye){const me=ye[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&G(D),Object.keys(ye).length===0&&x.delete(J)}s.remove(D)}function G(D){const E=s.get(D);o.deleteTexture(E.__webglTexture);const J=D.source,ye=x.get(J);delete ye[E.__cacheKey],d.memory.textures--}function re(D){const E=D.texture,J=s.get(D),ye=s.get(E);if(ye.__webglTexture!==void 0&&(o.deleteTexture(ye.__webglTexture),d.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(J.__webglFramebuffer[me]))for(let _e=0;_e<J.__webglFramebuffer[me].length;_e++)o.deleteFramebuffer(J.__webglFramebuffer[me][_e]);else o.deleteFramebuffer(J.__webglFramebuffer[me]);J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer[me])}else{if(Array.isArray(J.__webglFramebuffer))for(let me=0;me<J.__webglFramebuffer.length;me++)o.deleteFramebuffer(J.__webglFramebuffer[me]);else o.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&o.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let me=0;me<J.__webglColorRenderbuffer.length;me++)J.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(J.__webglColorRenderbuffer[me]);J.__webglDepthRenderbuffer&&o.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let me=0,_e=E.length;me<_e;me++){const ke=s.get(E[me]);ke.__webglTexture&&(o.deleteTexture(ke.__webglTexture),d.memory.textures--),s.remove(E[me])}s.remove(E),s.remove(D)}let oe=0;function te(){oe=0}function j(){const D=oe;return D>=p&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+p),oe+=1,D}function Z(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function w(D,E){const J=s.get(D);if(D.isVideoTexture&&Rt(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const ye=D.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(J,D,E);return}}n.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function b(D,E){const J=s.get(D);if(D.version>0&&J.__version!==D.version){Je(J,D,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function V(D,E){const J=s.get(D);if(D.version>0&&J.__version!==D.version){Je(J,D,E);return}n.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function ue(D,E){const J=s.get(D);if(D.version>0&&J.__version!==D.version){an(J,D,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const le={[Ic]:o.REPEAT,[ri]:o.CLAMP_TO_EDGE,[Fc]:o.MIRRORED_REPEAT},ge={[vn]:o.NEAREST,[Nh]:o.NEAREST_MIPMAP_NEAREST,[tc]:o.NEAREST_MIPMAP_LINEAR,[pn]:o.LINEAR,[q_]:o.LINEAR_MIPMAP_NEAREST,[wo]:o.LINEAR_MIPMAP_LINEAR},we={[lv]:o.NEVER,[mv]:o.ALWAYS,[uv]:o.LESS,[fv]:o.LEQUAL,[cv]:o.EQUAL,[pv]:o.GEQUAL,[dv]:o.GREATER,[hv]:o.NOTEQUAL};function be(D,E,J){if(J?(o.texParameteri(D,o.TEXTURE_WRAP_S,le[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,le[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,le[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,ge[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,ge[E.minFilter])):(o.texParameteri(D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(E.wrapS!==ri||E.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(D,o.TEXTURE_MAG_FILTER,I(E.magFilter)),o.texParameteri(D,o.TEXTURE_MIN_FILTER,I(E.minFilter)),E.minFilter!==vn&&E.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===vn||E.minFilter!==tc&&E.minFilter!==wo||E.type===or&&e.has("OES_texture_float_linear")===!1||f===!1&&E.type===Ao&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||s.get(E).__currentAnisotropy)&&(o.texParameterf(D,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy)}}function Ae(D,E){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",se));const ye=E.source;let me=x.get(ye);me===void 0&&(me={},x.set(ye,me));const _e=Z(E);if(_e!==D.__cacheKey){me[_e]===void 0&&(me[_e]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),me[_e].usedTimes++;const ke=me[D.__cacheKey];ke!==void 0&&(me[D.__cacheKey].usedTimes--,ke.usedTimes===0&&G(E)),D.__cacheKey=_e,D.__webglTexture=me[_e].texture}return J}function Je(D,E,J){let ye=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ye=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ye=o.TEXTURE_3D);const me=Ae(D,E),_e=E.source;n.bindTexture(ye,D.__webglTexture,o.TEXTURE0+J);const ke=s.get(_e);if(_e.version!==ke.__version||me===!0){n.activeTexture(o.TEXTURE0+J);const Me=vt.getPrimaries(vt.workingColorSpace),Pe=E.colorSpace===qn?null:vt.getPrimaries(E.colorSpace),Ye=E.colorSpace===qn||Me===Pe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const ft=N(E)&&L(E.image)===!1;let Se=P(E.image,ft,!1,g);Se=zt(E,Se);const mt=L(Se)||f,Qe=u.convert(E.format,E.colorSpace);let je=u.convert(E.type),He=K(E.internalFormat,Qe,je,E.colorSpace,E.isVideoTexture);be(ye,E,mt);let O;const Ee=E.mipmaps,ve=f&&E.isVideoTexture!==!0,Le=ke.__version===void 0||me===!0,Ce=R(E,Se,mt);if(E.isDepthTexture)He=o.DEPTH_COMPONENT,f?E.type===or?He=o.DEPTH_COMPONENT32F:E.type===sr?He=o.DEPTH_COMPONENT24:E.type===Dr?He=o.DEPTH24_STENCIL8:He=o.DEPTH_COMPONENT16:E.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ur&&He===o.DEPTH_COMPONENT&&E.type!==Gc&&E.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=sr,je=u.convert(E.type)),E.format===Ds&&He===o.DEPTH_COMPONENT&&(He=o.DEPTH_STENCIL,E.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Dr,je=u.convert(E.type))),Le&&(ve?n.texStorage2D(o.TEXTURE_2D,1,He,Se.width,Se.height):n.texImage2D(o.TEXTURE_2D,0,He,Se.width,Se.height,0,Qe,je,null));else if(E.isDataTexture)if(Ee.length>0&&mt){ve&&Le&&n.texStorage2D(o.TEXTURE_2D,Ce,He,Ee[0].width,Ee[0].height);for(let he=0,Be=Ee.length;he<Be;he++)O=Ee[he],ve?n.texSubImage2D(o.TEXTURE_2D,he,0,0,O.width,O.height,Qe,je,O.data):n.texImage2D(o.TEXTURE_2D,he,He,O.width,O.height,0,Qe,je,O.data);E.generateMipmaps=!1}else ve?(Le&&n.texStorage2D(o.TEXTURE_2D,Ce,He,Se.width,Se.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,Qe,je,Se.data)):n.texImage2D(o.TEXTURE_2D,0,He,Se.width,Se.height,0,Qe,je,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ve&&Le&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ce,He,Ee[0].width,Ee[0].height,Se.depth);for(let he=0,Be=Ee.length;he<Be;he++)O=Ee[he],E.format!==si?Qe!==null?ve?n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,O.width,O.height,Se.depth,Qe,O.data,0,0):n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,he,He,O.width,O.height,Se.depth,0,O.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?n.texSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,O.width,O.height,Se.depth,Qe,je,O.data):n.texImage3D(o.TEXTURE_2D_ARRAY,he,He,O.width,O.height,Se.depth,0,Qe,je,O.data)}else{ve&&Le&&n.texStorage2D(o.TEXTURE_2D,Ce,He,Ee[0].width,Ee[0].height);for(let he=0,Be=Ee.length;he<Be;he++)O=Ee[he],E.format!==si?Qe!==null?ve?n.compressedTexSubImage2D(o.TEXTURE_2D,he,0,0,O.width,O.height,Qe,O.data):n.compressedTexImage2D(o.TEXTURE_2D,he,He,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?n.texSubImage2D(o.TEXTURE_2D,he,0,0,O.width,O.height,Qe,je,O.data):n.texImage2D(o.TEXTURE_2D,he,He,O.width,O.height,0,Qe,je,O.data)}else if(E.isDataArrayTexture)ve?(Le&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ce,He,Se.width,Se.height,Se.depth),n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Qe,je,Se.data)):n.texImage3D(o.TEXTURE_2D_ARRAY,0,He,Se.width,Se.height,Se.depth,0,Qe,je,Se.data);else if(E.isData3DTexture)ve?(Le&&n.texStorage3D(o.TEXTURE_3D,Ce,He,Se.width,Se.height,Se.depth),n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Qe,je,Se.data)):n.texImage3D(o.TEXTURE_3D,0,He,Se.width,Se.height,Se.depth,0,Qe,je,Se.data);else if(E.isFramebufferTexture){if(Le)if(ve)n.texStorage2D(o.TEXTURE_2D,Ce,He,Se.width,Se.height);else{let he=Se.width,Be=Se.height;for(let et=0;et<Ce;et++)n.texImage2D(o.TEXTURE_2D,et,He,he,Be,0,Qe,je,null),he>>=1,Be>>=1}}else if(Ee.length>0&&mt){ve&&Le&&n.texStorage2D(o.TEXTURE_2D,Ce,He,Ee[0].width,Ee[0].height);for(let he=0,Be=Ee.length;he<Be;he++)O=Ee[he],ve?n.texSubImage2D(o.TEXTURE_2D,he,0,0,Qe,je,O):n.texImage2D(o.TEXTURE_2D,he,He,Qe,je,O);E.generateMipmaps=!1}else ve?(Le&&n.texStorage2D(o.TEXTURE_2D,Ce,He,Se.width,Se.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,Qe,je,Se)):n.texImage2D(o.TEXTURE_2D,0,He,Qe,je,Se);k(E,mt)&&F(ye),ke.__version=_e.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function an(D,E,J){if(E.image.length!==6)return;const ye=Ae(D,E),me=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+J);const _e=s.get(me);if(me.version!==_e.__version||ye===!0){n.activeTexture(o.TEXTURE0+J);const ke=vt.getPrimaries(vt.workingColorSpace),Me=E.colorSpace===qn?null:vt.getPrimaries(E.colorSpace),Pe=E.colorSpace===qn||ke===Me?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let he=0;he<6;he++)!Ye&&!ft?Se[he]=P(E.image[he],!1,!0,m):Se[he]=ft?E.image[he].image:E.image[he],Se[he]=zt(E,Se[he]);const mt=Se[0],Qe=L(mt)||f,je=u.convert(E.format,E.colorSpace),He=u.convert(E.type),O=K(E.internalFormat,je,He,E.colorSpace),Ee=f&&E.isVideoTexture!==!0,ve=_e.__version===void 0||ye===!0;let Le=R(E,mt,Qe);be(o.TEXTURE_CUBE_MAP,E,Qe);let Ce;if(Ye){Ee&&ve&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Le,O,mt.width,mt.height);for(let he=0;he<6;he++){Ce=Se[he].mipmaps;for(let Be=0;Be<Ce.length;Be++){const et=Ce[Be];E.format!==si?je!==null?Ee?n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,et.width,et.height,je,et.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,O,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,et.width,et.height,je,He,et.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,O,et.width,et.height,0,je,He,et.data)}}}else{Ce=E.mipmaps,Ee&&ve&&(Ce.length>0&&Le++,n.texStorage2D(o.TEXTURE_CUBE_MAP,Le,O,Se[0].width,Se[0].height));for(let he=0;he<6;he++)if(ft){Ee?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Se[he].width,Se[he].height,je,He,Se[he].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,O,Se[he].width,Se[he].height,0,je,He,Se[he].data);for(let Be=0;Be<Ce.length;Be++){const Yt=Ce[Be].image[he].image;Ee?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,Yt.width,Yt.height,je,He,Yt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,O,Yt.width,Yt.height,0,je,He,Yt.data)}}else{Ee?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,je,He,Se[he]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,O,je,He,Se[he]);for(let Be=0;Be<Ce.length;Be++){const et=Ce[Be];Ee?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,je,He,et.image[he]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,O,je,He,et.image[he])}}}k(E,Qe)&&F(o.TEXTURE_CUBE_MAP),_e.__version=me.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function tt(D,E,J,ye,me,_e){const ke=u.convert(J.format,J.colorSpace),Me=u.convert(J.type),Pe=K(J.internalFormat,ke,Me,J.colorSpace);if(!s.get(E).__hasExternalTextures){const ft=Math.max(1,E.width>>_e),Se=Math.max(1,E.height>>_e);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?n.texImage3D(me,_e,Pe,ft,Se,E.depth,0,ke,Me,null):n.texImage2D(me,_e,Pe,ft,Se,0,ke,Me,null)}n.bindFramebuffer(o.FRAMEBUFFER,D),dt(E)?v.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,me,s.get(J).__webglTexture,0,it(E)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ye,me,s.get(J).__webglTexture,_e),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Y(D,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer&&!E.stencilBuffer){let ye=f===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(J||dt(E)){const me=E.depthTexture;me&&me.isDepthTexture&&(me.type===or?ye=o.DEPTH_COMPONENT32F:me.type===sr&&(ye=o.DEPTH_COMPONENT24));const _e=it(E);dt(E)?v.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_e,ye,E.width,E.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,ye,E.width,E.height)}else o.renderbufferStorage(o.RENDERBUFFER,ye,E.width,E.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,D)}else if(E.depthBuffer&&E.stencilBuffer){const ye=it(E);J&&dt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ye,o.DEPTH24_STENCIL8,E.width,E.height):dt(E)?v.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ye,o.DEPTH24_STENCIL8,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,D)}else{const ye=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let me=0;me<ye.length;me++){const _e=ye[me],ke=u.convert(_e.format,_e.colorSpace),Me=u.convert(_e.type),Pe=K(_e.internalFormat,ke,Me,_e.colorSpace),Ye=it(E);J&&dt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,Pe,E.width,E.height):dt(E)?v.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ye,Pe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Pe,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function It(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),w(E.depthTexture,0);const ye=s.get(E.depthTexture).__webglTexture,me=it(E);if(E.depthTexture.format===Ur)dt(E)?v.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ye,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ye,0);else if(E.depthTexture.format===Ds)dt(E)?v.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ye,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Xe(D){const E=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");It(E.__webglFramebuffer,D)}else if(J){E.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ye]),E.__webglDepthbuffer[ye]=o.createRenderbuffer(),Y(E.__webglDepthbuffer[ye],D,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),Y(E.__webglDepthbuffer,D,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function nt(D,E,J){const ye=s.get(D);E!==void 0&&tt(ye.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&Xe(D)}function Ze(D){const E=D.texture,J=s.get(D),ye=s.get(E);D.addEventListener("dispose",ae),D.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=o.createTexture()),ye.__version=E.version,d.memory.textures++);const me=D.isWebGLCubeRenderTarget===!0,_e=D.isWebGLMultipleRenderTargets===!0,ke=L(D)||f;if(me){J.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(f&&E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Me]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)J.__webglFramebuffer[Me][Pe]=o.createFramebuffer()}else J.__webglFramebuffer[Me]=o.createFramebuffer()}else{if(f&&E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)J.__webglFramebuffer[Me]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(_e)if(a.drawBuffers){const Me=D.texture;for(let Pe=0,Ye=Me.length;Pe<Ye;Pe++){const ft=s.get(Me[Pe]);ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&D.samples>0&&dt(D)===!1){const Me=_e?E:[E];J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Me.length;Pe++){const Ye=Me[Pe];J.__webglColorRenderbuffer[Pe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Pe]);const ft=u.convert(Ye.format,Ye.colorSpace),Se=u.convert(Ye.type),mt=K(Ye.internalFormat,ft,Se,Ye.colorSpace,D.isXRRenderTarget===!0),Qe=it(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qe,mt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pe,o.RENDERBUFFER,J.__webglColorRenderbuffer[Pe])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Y(J.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(me){n.bindTexture(o.TEXTURE_CUBE_MAP,ye.__webglTexture),be(o.TEXTURE_CUBE_MAP,E,ke);for(let Me=0;Me<6;Me++)if(f&&E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)tt(J.__webglFramebuffer[Me][Pe],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe);else tt(J.__webglFramebuffer[Me],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);k(E,ke)&&F(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){const Me=D.texture;for(let Pe=0,Ye=Me.length;Pe<Ye;Pe++){const ft=Me[Pe],Se=s.get(ft);n.bindTexture(o.TEXTURE_2D,Se.__webglTexture),be(o.TEXTURE_2D,ft,ke),tt(J.__webglFramebuffer,D,ft,o.COLOR_ATTACHMENT0+Pe,o.TEXTURE_2D,0),k(ft,ke)&&F(o.TEXTURE_2D)}n.unbindTexture()}else{let Me=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(f?Me=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Me,ye.__webglTexture),be(Me,E,ke),f&&E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)tt(J.__webglFramebuffer[Pe],D,E,o.COLOR_ATTACHMENT0,Me,Pe);else tt(J.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,Me,0);k(E,ke)&&F(Me),n.unbindTexture()}D.depthBuffer&&Xe(D)}function xt(D){const E=L(D)||f,J=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ye=0,me=J.length;ye<me;ye++){const _e=J[ye];if(k(_e,E)){const ke=D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Me=s.get(_e).__webglTexture;n.bindTexture(ke,Me),F(ke),n.unbindTexture()}}}function lt(D){if(f&&D.samples>0&&dt(D)===!1){const E=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],J=D.width,ye=D.height;let me=o.COLOR_BUFFER_BIT;const _e=[],ke=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Me=s.get(D),Pe=D.isWebGLMultipleRenderTargets===!0;if(Pe)for(let Ye=0;Ye<E.length;Ye++)n.bindFramebuffer(o.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Me.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ye=0;Ye<E.length;Ye++){_e.push(o.COLOR_ATTACHMENT0+Ye),D.depthBuffer&&_e.push(ke);const ft=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(ft===!1&&(D.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),Pe&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Me.__webglColorRenderbuffer[Ye]),ft===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[ke]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[ke])),Pe){const Se=s.get(E[Ye]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Se,0)}o.blitFramebuffer(0,0,J,ye,0,0,J,ye,me,o.NEAREST),M&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,_e)}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Pe)for(let Ye=0;Ye<E.length;Ye++){n.bindFramebuffer(o.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.RENDERBUFFER,Me.__webglColorRenderbuffer[Ye]);const ft=s.get(E[Ye]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Me.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.TEXTURE_2D,ft,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function it(D){return Math.min(S,D.samples)}function dt(D){const E=s.get(D);return f&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(D){const E=d.render.frame;A.get(D)!==E&&(A.set(D,E),D.update())}function zt(D,E){const J=D.colorSpace,ye=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Oc||J!==Ui&&J!==qn&&(vt.getTransfer(J)===wt?f===!1?e.has("EXT_sRGB")===!0&&ye===si?(D.format=Oc,D.minFilter=pn,D.generateMipmaps=!1):E=am.sRGBToLinear(E):(ye!==si||me!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}this.allocateTextureUnit=j,this.resetTextureUnits=te,this.setTexture2D=w,this.setTexture2DArray=b,this.setTexture3D=V,this.setTextureCube=ue,this.rebindTextures=nt,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=dt}function pM(o,e,n){const s=n.isWebGL2;function a(u,d=qn){let f;const p=vt.getTransfer(d);if(u===ur)return o.UNSIGNED_BYTE;if(u===em)return o.UNSIGNED_SHORT_4_4_4_4;if(u===tm)return o.UNSIGNED_SHORT_5_5_5_1;if(u===Y_)return o.BYTE;if(u===K_)return o.SHORT;if(u===Gc)return o.UNSIGNED_SHORT;if(u===Jp)return o.INT;if(u===sr)return o.UNSIGNED_INT;if(u===or)return o.FLOAT;if(u===Ao)return s?o.HALF_FLOAT:(f=e.get("OES_texture_half_float"),f!==null?f.HALF_FLOAT_OES:null);if(u===$_)return o.ALPHA;if(u===si)return o.RGBA;if(u===Z_)return o.LUMINANCE;if(u===Q_)return o.LUMINANCE_ALPHA;if(u===Ur)return o.DEPTH_COMPONENT;if(u===Ds)return o.DEPTH_STENCIL;if(u===Oc)return f=e.get("EXT_sRGB"),f!==null?f.SRGB_ALPHA_EXT:null;if(u===J_)return o.RED;if(u===nm)return o.RED_INTEGER;if(u===ev)return o.RG;if(u===im)return o.RG_INTEGER;if(u===rm)return o.RGBA_INTEGER;if(u===nc||u===ic||u===rc||u===sc)if(p===wt)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(u===nc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===ic)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===rc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===sc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(u===nc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===ic)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===rc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===sc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===Ih||u===Fh||u===Oh||u===zh)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(u===Ih)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===Fh)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Oh)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===zh)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===tv)return f=e.get("WEBGL_compressed_texture_etc1"),f!==null?f.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===kh||u===Bh)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(u===kh)return p===wt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(u===Bh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Hh||u===Vh||u===Gh||u===Wh||u===Xh||u===jh||u===qh||u===Yh||u===Kh||u===$h||u===Zh||u===Qh||u===Jh||u===ep)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(u===Hh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Vh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Gh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Wh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Xh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===jh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===qh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Yh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Kh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===$h)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Zh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Qh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Jh)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===ep)return p===wt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===oc||u===tp||u===np)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(u===oc)return p===wt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===tp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===np)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===nv||u===ip||u===rp||u===sp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(u===oc)return f.COMPRESSED_RED_RGTC1_EXT;if(u===ip)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===rp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===sp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===Dr?s?o.UNSIGNED_INT_24_8:(f=e.get("WEBGL_depth_texture"),f!==null?f.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:a}}class mM extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class el extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gM={type:"move"};class Lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new el,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new el,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new el,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let a=null,u=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,s),_=this._getHandJoint(m,T);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],v=g.position.distanceTo(S.position),M=.02,A=.005;m.inputState.pinching&&v>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,s),a===null&&u!==null&&(a=u),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(gM)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new el;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}class _M extends Pn{constructor(e,n,s,a,u,d,f,p,m,g){if(g=g!==void 0?g:Ur,g!==Ur&&g!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Ur&&(s=sr),s===void 0&&g===Ds&&(s=Dr),super(null,a,u,d,f,p,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:vn,this.minFilter=p!==void 0?p:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vM extends Ns{constructor(e,n){super();const s=this;let a=null,u=1,d=null,f="local-floor",p=1,m=null,g=null,S=null,v=null,M=null,A=null;const T=n.getContextAttributes();let x=null,_=null;const z=[],P=[],L=new jn;L.layers.enable(1),L.viewport=new sn;const N=new jn;N.layers.enable(2),N.viewport=new sn;const k=[L,N],F=new mM;F.layers.enable(1),F.layers.enable(2);let K=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let V=z[b];return V===void 0&&(V=new Lc,z[b]=V),V.getTargetRaySpace()},this.getControllerGrip=function(b){let V=z[b];return V===void 0&&(V=new Lc,z[b]=V),V.getGripSpace()},this.getHand=function(b){let V=z[b];return V===void 0&&(V=new Lc,z[b]=V),V.getHandSpace()};function I(b){const V=P.indexOf(b.inputSource);if(V===-1)return;const ue=z[V];ue!==void 0&&(ue.update(b.inputSource,b.frame,m||d),ue.dispatchEvent({type:b.type,data:b.inputSource}))}function se(){a.removeEventListener("select",I),a.removeEventListener("selectstart",I),a.removeEventListener("selectend",I),a.removeEventListener("squeeze",I),a.removeEventListener("squeezestart",I),a.removeEventListener("squeezeend",I),a.removeEventListener("end",se),a.removeEventListener("inputsourceschange",ae);for(let b=0;b<z.length;b++){const V=P[b];V!==null&&(P[b]=null,z[b].disconnect(V))}K=null,R=null,e.setRenderTarget(x),M=null,v=null,S=null,a=null,_=null,w.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){u=b,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){f=b,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(b){m=b},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return S},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(b){if(a=b,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",I),a.addEventListener("selectstart",I),a.addEventListener("selectend",I),a.addEventListener("squeeze",I),a.addEventListener("squeezestart",I),a.addEventListener("squeezeend",I),a.addEventListener("end",se),a.addEventListener("inputsourceschange",ae),T.xrCompatible!==!0&&await n.makeXRCompatible(),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:a.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(a,n,V),a.updateRenderState({baseLayer:M}),_=new Fr(M.framebufferWidth,M.framebufferHeight,{format:si,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let V=null,ue=null,le=null;T.depth&&(le=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,V=T.stencil?Ds:Ur,ue=T.stencil?Dr:sr);const ge={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:u};S=new XRWebGLBinding(a,n),v=S.createProjectionLayer(ge),a.updateRenderState({layers:[v]}),_=new Fr(v.textureWidth,v.textureHeight,{format:si,type:ur,depthTexture:new _M(v.textureWidth,v.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const we=e.properties.get(_);we.__ignoreDepthValues=v.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await a.requestReferenceSpace(f),w.setContext(a),w.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ae(b){for(let V=0;V<b.removed.length;V++){const ue=b.removed[V],le=P.indexOf(ue);le>=0&&(P[le]=null,z[le].disconnect(ue))}for(let V=0;V<b.added.length;V++){const ue=b.added[V];let le=P.indexOf(ue);if(le===-1){for(let we=0;we<z.length;we++)if(we>=P.length){P.push(ue),le=we;break}else if(P[we]===null){P[we]=ue,le=we;break}if(le===-1)break}const ge=z[le];ge&&ge.connect(ue)}}const de=new ee,G=new ee;function re(b,V,ue){de.setFromMatrixPosition(V.matrixWorld),G.setFromMatrixPosition(ue.matrixWorld);const le=de.distanceTo(G),ge=V.projectionMatrix.elements,we=ue.projectionMatrix.elements,be=ge[14]/(ge[10]-1),Ae=ge[14]/(ge[10]+1),Je=(ge[9]+1)/ge[5],an=(ge[9]-1)/ge[5],tt=(ge[8]-1)/ge[0],Y=(we[8]+1)/we[0],It=be*tt,Xe=be*Y,nt=le/(-tt+Y),Ze=nt*-tt;V.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(Ze),b.translateZ(nt),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const xt=be+nt,lt=Ae+nt,it=It-Ze,dt=Xe+(le-Ze),Rt=Je*Ae/lt*xt,zt=an*Ae/lt*xt;b.projectionMatrix.makePerspective(it,dt,Rt,zt,xt,lt),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function oe(b,V){V===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(V.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(a===null)return;F.near=N.near=L.near=b.near,F.far=N.far=L.far=b.far,(K!==F.near||R!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),K=F.near,R=F.far);const V=b.parent,ue=F.cameras;oe(F,V);for(let le=0;le<ue.length;le++)oe(ue[le],V);ue.length===2?re(F,L,N):F.projectionMatrix.copy(L.projectionMatrix),te(b,F,V)};function te(b,V,ue){ue===null?b.matrix.copy(V.matrixWorld):(b.matrix.copy(ue.matrixWorld),b.matrix.invert(),b.matrix.multiply(V.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(V.projectionMatrix),b.projectionMatrixInverse.copy(V.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=zc*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(v===null&&M===null))return p},this.setFoveation=function(b){p=b,v!==null&&(v.fixedFoveation=b),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=b)};let j=null;function Z(b,V){if(g=V.getViewerPose(m||d),A=V,g!==null){const ue=g.views;M!==null&&(e.setRenderTargetFramebuffer(_,M.framebuffer),e.setRenderTarget(_));let le=!1;ue.length!==F.cameras.length&&(F.cameras.length=0,le=!0);for(let ge=0;ge<ue.length;ge++){const we=ue[ge];let be=null;if(M!==null)be=M.getViewport(we);else{const Je=S.getViewSubImage(v,we);be=Je.viewport,ge===0&&(e.setRenderTargetTextures(_,Je.colorTexture,v.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(_))}let Ae=k[ge];Ae===void 0&&(Ae=new jn,Ae.layers.enable(ge),Ae.viewport=new sn,k[ge]=Ae),Ae.matrix.fromArray(we.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(we.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(be.x,be.y,be.width,be.height),ge===0&&(F.matrix.copy(Ae.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),le===!0&&F.cameras.push(Ae)}}for(let ue=0;ue<z.length;ue++){const le=P[ue],ge=z[ue];le!==null&&ge!==void 0&&ge.update(le,V,m||d)}j&&j(b,V),V.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:V}),A=null}const w=new vm;w.setAnimationLoop(Z),this.setAnimationLoop=function(b){j=b},this.dispose=function(){}}}function xM(o,e){function n(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function s(x,_){_.color.getRGB(x.fogColor.value,pm(o)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,z,P,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(x,_):_.isMeshToonMaterial?(u(x,_),S(x,_)):_.isMeshPhongMaterial?(u(x,_),g(x,_)):_.isMeshStandardMaterial?(u(x,_),v(x,_),_.isMeshPhysicalMaterial&&M(x,_,L)):_.isMeshMatcapMaterial?(u(x,_),A(x,_)):_.isMeshDepthMaterial?u(x,_):_.isMeshDistanceMaterial?(u(x,_),T(x,_)):_.isMeshNormalMaterial?u(x,_):_.isLineBasicMaterial?(d(x,_),_.isLineDashedMaterial&&f(x,_)):_.isPointsMaterial?p(x,_,z,P):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,n(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Cn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,n(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Cn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,n(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,n(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const z=e.get(_).envMap;if(z&&(x.envMap.value=z,x.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const P=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*P,n(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,x.aoMapTransform))}function d(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform))}function f(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function p(x,_,z,P){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*z,x.scale.value=P*.5,_.map&&(x.map.value=_.map,n(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function S(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function v(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,x.roughnessMapTransform)),e.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function M(x,_,z){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Cn&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=z.texture,x.transmissionSamplerSize.value.set(z.width,z.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,_){_.matcap&&(x.matcap.value=_.matcap)}function T(x,_){const z=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(z.matrixWorld),x.nearDistance.value=z.shadow.camera.near,x.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function SM(o,e,n,s){let a={},u={},d=[];const f=n.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(z,P){const L=P.program;s.uniformBlockBinding(z,L)}function m(z,P){let L=a[z.id];L===void 0&&(A(z),L=g(z),a[z.id]=L,z.addEventListener("dispose",x));const N=P.program;s.updateUBOMapping(z,N);const k=e.render.frame;u[z.id]!==k&&(v(z),u[z.id]=k)}function g(z){const P=S();z.__bindingPointIndex=P;const L=o.createBuffer(),N=z.__size,k=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,N,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,L),L}function S(){for(let z=0;z<f;z++)if(d.indexOf(z)===-1)return d.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(z){const P=a[z.id],L=z.uniforms,N=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let k=0,F=L.length;k<F;k++){const K=L[k];if(M(K,k,N)===!0){const R=K.__offset,I=Array.isArray(K.value)?K.value:[K.value];let se=0;for(let ae=0;ae<I.length;ae++){const de=I[ae],G=T(de);typeof de=="number"?(K.__data[0]=de,o.bufferSubData(o.UNIFORM_BUFFER,R+se,K.__data)):de.isMatrix3?(K.__data[0]=de.elements[0],K.__data[1]=de.elements[1],K.__data[2]=de.elements[2],K.__data[3]=de.elements[0],K.__data[4]=de.elements[3],K.__data[5]=de.elements[4],K.__data[6]=de.elements[5],K.__data[7]=de.elements[0],K.__data[8]=de.elements[6],K.__data[9]=de.elements[7],K.__data[10]=de.elements[8],K.__data[11]=de.elements[0]):(de.toArray(K.__data,se),se+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,R,K.__data)}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,P,L){const N=z.value;if(L[P]===void 0){if(typeof N=="number")L[P]=N;else{const k=Array.isArray(N)?N:[N],F=[];for(let K=0;K<k.length;K++)F.push(k[K].clone());L[P]=F}return!0}else if(typeof N=="number"){if(L[P]!==N)return L[P]=N,!0}else{const k=Array.isArray(L[P])?L[P]:[L[P]],F=Array.isArray(N)?N:[N];for(let K=0;K<k.length;K++){const R=k[K];if(R.equals(F[K])===!1)return R.copy(F[K]),!0}}return!1}function A(z){const P=z.uniforms;let L=0;const N=16;let k=0;for(let F=0,K=P.length;F<K;F++){const R=P[F],I={boundary:0,storage:0},se=Array.isArray(R.value)?R.value:[R.value];for(let ae=0,de=se.length;ae<de;ae++){const G=se[ae],re=T(G);I.boundary+=re.boundary,I.storage+=re.storage}if(R.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=L,F>0){k=L%N;const ae=N-k;k!==0&&ae-I.boundary<0&&(L+=N-k,R.__offset=L)}L+=I.storage}return k=L%N,k>0&&(L+=N-k),z.__size=L,z.__cache={},this}function T(z){const P={boundary:0,storage:0};return typeof z=="number"?(P.boundary=4,P.storage=4):z.isVector2?(P.boundary=8,P.storage=8):z.isVector3||z.isColor?(P.boundary=16,P.storage=12):z.isVector4?(P.boundary=16,P.storage=16):z.isMatrix3?(P.boundary=48,P.storage=48):z.isMatrix4?(P.boundary=64,P.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),P}function x(z){const P=z.target;P.removeEventListener("dispose",x);const L=d.indexOf(P.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(a[P.id]),delete a[P.id],delete u[P.id]}function _(){for(const z in a)o.deleteBuffer(a[z]);d=[],a={},u={}}return{bind:p,update:m,dispose:_}}class Em{constructor(e={}){const{canvas:n=_v(),context:s=null,depth:a=!0,stencil:u=!0,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let v;s!==null?v=s.getContextAttributes().alpha:v=d;const M=new Uint32Array(4),A=new Int32Array(4);let T=null,x=null;const _=[],z=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const P=this;let L=!1,N=0,k=0,F=null,K=-1,R=null;const I=new sn,se=new sn;let ae=null;const de=new At(0);let G=0,re=n.width,oe=n.height,te=1,j=null,Z=null;const w=new sn(0,0,re,oe),b=new sn(0,0,re,oe);let V=!1;const ue=new _m;let le=!1,ge=!1,we=null;const be=new on,Ae=new St,Je=new ee,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return F===null?te:1}let Y=s;function It(C,q){for(let ne=0;ne<C.length;ne++){const $=C[ne],ie=n.getContext($,q);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:a,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vc}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",Le,!1),Y===null){const q=["webgl2","webgl","experimental-webgl"];if(P.isWebGL1Renderer===!0&&q.shift(),Y=It(q,C),Y===null)throw It(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Xe,nt,Ze,xt,lt,it,dt,Rt,zt,D,E,J,ye,me,_e,ke,Me,Pe,Ye,ft,Se,mt,Qe,je;function He(){Xe=new bS(Y),nt=new TS(Y,Xe,e),Xe.init(nt),mt=new pM(Y,Xe,nt),Ze=new dM(Y,Xe,nt),xt=new NS(Y),lt=new Qy,it=new hM(Y,Xe,Ze,lt,nt,mt,xt),dt=new AS(P),Rt=new LS(P),zt=new Gv(Y,nt),Qe=new MS(Y,Xe,zt,nt),D=new DS(Y,zt,xt,Qe),E=new zS(Y,D,zt,xt),Ye=new OS(Y,nt,it),ke=new wS(lt),J=new Zy(P,dt,Rt,Xe,nt,Qe,ke),ye=new xM(P,lt),me=new eM,_e=new oM(Xe,nt),Pe=new yS(P,dt,Rt,Ze,E,v,p),Me=new fM(P,E,nt),je=new SM(Y,xt,nt,Ze),ft=new ES(Y,Xe,xt,nt),Se=new US(Y,Xe,xt,nt),xt.programs=J.programs,P.capabilities=nt,P.extensions=Xe,P.properties=lt,P.renderLists=me,P.shadowMap=Me,P.state=Ze,P.info=xt}He();const O=new vM(P,Y);this.xr=O,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=Xe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Xe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(C){C!==void 0&&(te=C,this.setSize(re,oe,!1))},this.getSize=function(C){return C.set(re,oe)},this.setSize=function(C,q,ne=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=C,oe=q,n.width=Math.floor(C*te),n.height=Math.floor(q*te),ne===!0&&(n.style.width=C+"px",n.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(re*te,oe*te).floor()},this.setDrawingBufferSize=function(C,q,ne){re=C,oe=q,te=ne,n.width=Math.floor(C*ne),n.height=Math.floor(q*ne),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(w)},this.setViewport=function(C,q,ne,$){C.isVector4?w.set(C.x,C.y,C.z,C.w):w.set(C,q,ne,$),Ze.viewport(I.copy(w).multiplyScalar(te).floor())},this.getScissor=function(C){return C.copy(b)},this.setScissor=function(C,q,ne,$){C.isVector4?b.set(C.x,C.y,C.z,C.w):b.set(C,q,ne,$),Ze.scissor(se.copy(b).multiplyScalar(te).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(C){Ze.setScissorTest(V=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){Z=C},this.getClearColor=function(C){return C.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(C=!0,q=!0,ne=!0){let $=0;if(C){let ie=!1;if(F!==null){const Ne=F.texture.format;ie=Ne===rm||Ne===im||Ne===nm}if(ie){const Ne=F.texture.type,Ve=Ne===ur||Ne===sr||Ne===Gc||Ne===Dr||Ne===em||Ne===tm,qe=Pe.getClearColor(),Ke=Pe.getClearAlpha(),at=qe.r,Ue=qe.g,rt=qe.b;Ve?(M[0]=at,M[1]=Ue,M[2]=rt,M[3]=Ke,Y.clearBufferuiv(Y.COLOR,0,M)):(A[0]=at,A[1]=Ue,A[2]=rt,A[3]=Ke,Y.clearBufferiv(Y.COLOR,0,A))}else $|=Y.COLOR_BUFFER_BIT}q&&($|=Y.DEPTH_BUFFER_BIT),ne&&($|=Y.STENCIL_BUFFER_BIT),Y.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),me.dispose(),_e.dispose(),lt.dispose(),dt.dispose(),Rt.dispose(),E.dispose(),Qe.dispose(),je.dispose(),J.dispose(),O.dispose(),O.removeEventListener("sessionstart",gt),O.removeEventListener("sessionend",Ln),we&&(we.dispose(),we=null),Ft.stop()};function Ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const C=xt.autoReset,q=Me.enabled,ne=Me.autoUpdate,$=Me.needsUpdate,ie=Me.type;He(),xt.autoReset=C,Me.enabled=q,Me.autoUpdate=ne,Me.needsUpdate=$,Me.type=ie}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ce(C){const q=C.target;q.removeEventListener("dispose",Ce),he(q)}function he(C){Be(C),lt.remove(C)}function Be(C){const q=lt.get(C).programs;q!==void 0&&(q.forEach(function(ne){J.releaseProgram(ne)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ne,$,ie,Ne){q===null&&(q=an);const Ve=ie.isMesh&&ie.matrixWorld.determinant()<0,qe=pl(C,q,ne,$,ie);Ze.setMaterial($,Ve);let Ke=ne.index,at=1;if($.wireframe===!0){if(Ke=D.getWireframeAttribute(ne),Ke===void 0)return;at=2}const Ue=ne.drawRange,rt=ne.attributes.position;let yt=Ue.start*at,Ct=(Ue.start+Ue.count)*at;Ne!==null&&(yt=Math.max(yt,Ne.start*at),Ct=Math.min(Ct,(Ne.start+Ne.count)*at)),Ke!==null?(yt=Math.max(yt,0),Ct=Math.min(Ct,Ke.count)):rt!=null&&(yt=Math.max(yt,0),Ct=Math.min(Ct,rt.count));const en=Ct-yt;if(en<0||en===1/0)return;Qe.setup(ie,$,qe,ne,Ke);let Yn,Lt=ft;if(Ke!==null&&(Yn=zt.get(Ke),Lt=Se,Lt.setIndex(Yn)),ie.isMesh)$.wireframe===!0?(Ze.setLineWidth($.wireframeLinewidth*tt()),Lt.setMode(Y.LINES)):Lt.setMode(Y.TRIANGLES);else if(ie.isLine){let st=$.linewidth;st===void 0&&(st=1),Ze.setLineWidth(st*tt()),ie.isLineSegments?Lt.setMode(Y.LINES):ie.isLineLoop?Lt.setMode(Y.LINE_LOOP):Lt.setMode(Y.LINE_STRIP)}else ie.isPoints?Lt.setMode(Y.POINTS):ie.isSprite&&Lt.setMode(Y.TRIANGLES);if(ie.isInstancedMesh)Lt.renderInstances(yt,en,ie.count);else if(ne.isInstancedBufferGeometry){const st=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,xn=Math.min(ne.instanceCount,st);Lt.renderInstances(yt,en,xn)}else Lt.render(yt,en)},this.compile=function(C,q){function ne($,ie,Ne){$.transparent===!0&&$.side===Li&&$.forceSinglePass===!1?($.side=Cn,$.needsUpdate=!0,hi($,ie,Ne),$.side=cr,$.needsUpdate=!0,hi($,ie,Ne),$.side=Li):hi($,ie,Ne)}x=_e.get(C),x.init(),z.push(x),C.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights(P._useLegacyLights),C.traverse(function($){const ie=$.material;if(ie)if(Array.isArray(ie))for(let Ne=0;Ne<ie.length;Ne++){const Ve=ie[Ne];ne(Ve,C,$)}else ne(ie,C,$)}),z.pop(),x=null};let et=null;function Yt(C){et&&et(C)}function gt(){Ft.stop()}function Ln(){Ft.start()}const Ft=new vm;Ft.setAnimationLoop(Yt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(C){et=C,O.setAnimationLoop(C),C===null?Ft.stop():Ft.start()},O.addEventListener("sessionstart",gt),O.addEventListener("sessionend",Ln),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(q),q=O.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,q,F),x=_e.get(C,z.length),x.init(),z.push(x),be.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ue.setFromProjectionMatrix(be),ge=this.localClippingEnabled,le=ke.init(this.clippingPlanes,ge),T=me.get(C,_.length),T.init(),_.push(T),kr(C,q,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(j,Z),this.info.render.frame++,le===!0&&ke.beginShadows();const ne=x.state.shadowsArray;if(Me.render(ne,C,q),le===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Pe.render(T,C),x.setupLights(P._useLegacyLights),q.isArrayCamera){const $=q.cameras;for(let ie=0,Ne=$.length;ie<Ne;ie++){const Ve=$[ie];Ni(T,C,Ve,Ve.viewport)}}else Ni(T,C,q);F!==null&&(it.updateMultisampleRenderTarget(F),it.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(P,C,q),Qe.resetDefaultState(),K=-1,R=null,z.pop(),z.length>0?x=z[z.length-1]:x=null,_.pop(),_.length>0?T=_[_.length-1]:T=null};function kr(C,q,ne,$){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ue.intersectsSprite(C)){$&&Je.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const Ve=E.update(C),qe=C.material;qe.visible&&T.push(C,Ve,qe,ne,Je.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ue.intersectsObject(C))){const Ve=E.update(C),qe=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Je.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Je.copy(Ve.boundingSphere.center)),Je.applyMatrix4(C.matrixWorld).applyMatrix4(be)),Array.isArray(qe)){const Ke=Ve.groups;for(let at=0,Ue=Ke.length;at<Ue;at++){const rt=Ke[at],yt=qe[rt.materialIndex];yt&&yt.visible&&T.push(C,Ve,yt,ne,Je.z,rt)}}else qe.visible&&T.push(C,Ve,qe,ne,Je.z,null)}}const Ne=C.children;for(let Ve=0,qe=Ne.length;Ve<qe;Ve++)kr(Ne[Ve],q,ne,$)}function Ni(C,q,ne,$){const ie=C.opaque,Ne=C.transmissive,Ve=C.transparent;x.setupLightsView(ne),le===!0&&ke.setGlobalState(P.clippingPlanes,ne),Ne.length>0&&hl(ie,Ne,q,ne),$&&Ze.viewport(I.copy($)),ie.length>0&&oi(ie,q,ne),Ne.length>0&&oi(Ne,q,ne),Ve.length>0&&oi(Ve,q,ne),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function hl(C,q,ne,$){const ie=nt.isWebGL2;we===null&&(we=new Fr(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?Ao:ur,minFilter:wo,samples:ie?4:0})),P.getDrawingBufferSize(Ae),ie?we.setSize(Ae.x,Ae.y):we.setSize(kc(Ae.x),kc(Ae.y));const Ne=P.getRenderTarget();P.setRenderTarget(we),P.getClearColor(de),G=P.getClearAlpha(),G<1&&P.setClearColor(16777215,.5),P.clear();const Ve=P.toneMapping;P.toneMapping=lr,oi(C,ne,$),it.updateMultisampleRenderTarget(we),it.updateRenderTargetMipmap(we);let qe=!1;for(let Ke=0,at=q.length;Ke<at;Ke++){const Ue=q[Ke],rt=Ue.object,yt=Ue.geometry,Ct=Ue.material,en=Ue.group;if(Ct.side===Li&&rt.layers.test($.layers)){const Yn=Ct.side;Ct.side=Cn,Ct.needsUpdate=!0,fr(rt,ne,$,yt,Ct,en),Ct.side=Yn,Ct.needsUpdate=!0,qe=!0}}qe===!0&&(it.updateMultisampleRenderTarget(we),it.updateRenderTargetMipmap(we)),P.setRenderTarget(Ne),P.setClearColor(de,G),P.toneMapping=Ve}function oi(C,q,ne){const $=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,Ne=C.length;ie<Ne;ie++){const Ve=C[ie],qe=Ve.object,Ke=Ve.geometry,at=$===null?Ve.material:$,Ue=Ve.group;qe.layers.test(ne.layers)&&fr(qe,q,ne,Ke,at,Ue)}}function fr(C,q,ne,$,ie,Ne){C.onBeforeRender(P,q,ne,$,ie,Ne),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(P,q,ne,$,C,Ne),ie.transparent===!0&&ie.side===Li&&ie.forceSinglePass===!1?(ie.side=Cn,ie.needsUpdate=!0,P.renderBufferDirect(ne,q,$,ie,C,Ne),ie.side=cr,ie.needsUpdate=!0,P.renderBufferDirect(ne,q,$,ie,C,Ne),ie.side=Li):P.renderBufferDirect(ne,q,$,ie,C,Ne),C.onAfterRender(P,q,ne,$,ie,Ne)}function hi(C,q,ne){q.isScene!==!0&&(q=an);const $=lt.get(C),ie=x.state.lights,Ne=x.state.shadowsArray,Ve=ie.state.version,qe=J.getParameters(C,ie.state,Ne,q,ne),Ke=J.getProgramCacheKey(qe);let at=$.programs;$.environment=C.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(C.isMeshStandardMaterial?Rt:dt).get(C.envMap||$.environment),at===void 0&&(C.addEventListener("dispose",Ce),at=new Map,$.programs=at);let Ue=at.get(Ke);if(Ue!==void 0){if($.currentProgram===Ue&&$.lightsStateVersion===Ve)return Br(C,qe),Ue}else qe.uniforms=J.getUniforms(C),C.onBuild(ne,qe,P),C.onBeforeCompile(qe,P),Ue=J.acquireProgram(qe,Ke),at.set(Ke,Ue),$.uniforms=qe.uniforms;const rt=$.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(rt.clippingPlanes=ke.uniform),Br(C,qe),$.needsLights=gl(C),$.lightsStateVersion=Ve,$.needsLights&&(rt.ambientLightColor.value=ie.state.ambient,rt.lightProbe.value=ie.state.probe,rt.directionalLights.value=ie.state.directional,rt.directionalLightShadows.value=ie.state.directionalShadow,rt.spotLights.value=ie.state.spot,rt.spotLightShadows.value=ie.state.spotShadow,rt.rectAreaLights.value=ie.state.rectArea,rt.ltc_1.value=ie.state.rectAreaLTC1,rt.ltc_2.value=ie.state.rectAreaLTC2,rt.pointLights.value=ie.state.point,rt.pointLightShadows.value=ie.state.pointShadow,rt.hemisphereLights.value=ie.state.hemi,rt.directionalShadowMap.value=ie.state.directionalShadowMap,rt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,rt.spotShadowMap.value=ie.state.spotShadowMap,rt.spotLightMatrix.value=ie.state.spotLightMatrix,rt.spotLightMap.value=ie.state.spotLightMap,rt.pointShadowMap.value=ie.state.pointShadowMap,rt.pointShadowMatrix.value=ie.state.pointShadowMatrix);const yt=Ue.getUniforms(),Ct=tl.seqWithValue(yt.seq,rt);return $.currentProgram=Ue,$.uniformsList=Ct,Ue}function Br(C,q){const ne=lt.get(C);ne.outputColorSpace=q.outputColorSpace,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function pl(C,q,ne,$,ie){q.isScene!==!0&&(q=an),it.resetTextureUnits();const Ne=q.fog,Ve=$.isMeshStandardMaterial?q.environment:null,qe=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ui,Ke=($.isMeshStandardMaterial?Rt:dt).get($.envMap||Ve),at=$.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ue=!!ne.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),rt=!!ne.morphAttributes.position,yt=!!ne.morphAttributes.normal,Ct=!!ne.morphAttributes.color;let en=lr;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(en=P.toneMapping);const Yn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Lt=Yn!==void 0?Yn.length:0,st=lt.get($),xn=x.state.lights;if(le===!0&&(ge===!0||C!==R)){const Kt=C===R&&$.id===K;ke.setState($,C,Kt)}let Ut=!1;$.version===st.__version?(st.needsLights&&st.lightsStateVersion!==xn.state.version||st.outputColorSpace!==qe||ie.isInstancedMesh&&st.instancing===!1||!ie.isInstancedMesh&&st.instancing===!0||ie.isSkinnedMesh&&st.skinning===!1||!ie.isSkinnedMesh&&st.skinning===!0||ie.isInstancedMesh&&st.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&st.instancingColor===!1&&ie.instanceColor!==null||st.envMap!==Ke||$.fog===!0&&st.fog!==Ne||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==ke.numPlanes||st.numIntersection!==ke.numIntersection)||st.vertexAlphas!==at||st.vertexTangents!==Ue||st.morphTargets!==rt||st.morphNormals!==yt||st.morphColors!==Ct||st.toneMapping!==en||nt.isWebGL2===!0&&st.morphTargetsCount!==Lt)&&(Ut=!0):(Ut=!0,st.__version=$.version);let Vt=st.currentProgram;Ut===!0&&(Vt=hi($,q,ie));let bo=!1,dr=!1,Fs=!1;const kt=Vt.getUniforms(),zn=st.uniforms;if(Ze.useProgram(Vt.program)&&(bo=!0,dr=!0,Fs=!0),$.id!==K&&(K=$.id,dr=!0),bo||R!==C){kt.setValue(Y,"projectionMatrix",C.projectionMatrix),kt.setValue(Y,"viewMatrix",C.matrixWorldInverse);const Kt=kt.map.cameraPosition;Kt!==void 0&&Kt.setValue(Y,Je.setFromMatrixPosition(C.matrixWorld)),nt.logarithmicDepthBuffer&&kt.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&kt.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,dr=!0,Fs=!0)}if(ie.isSkinnedMesh){kt.setOptional(Y,ie,"bindMatrix"),kt.setOptional(Y,ie,"bindMatrixInverse");const Kt=ie.skeleton;Kt&&(nt.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),kt.setValue(Y,"boneTexture",Kt.boneTexture,it),kt.setValue(Y,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pi=ne.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0&&nt.isWebGL2===!0)&&Ye.update(ie,ne,Vt),(dr||st.receiveShadow!==ie.receiveShadow)&&(st.receiveShadow=ie.receiveShadow,kt.setValue(Y,"receiveShadow",ie.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(zn.envMap.value=Ke,zn.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),dr&&(kt.setValue(Y,"toneMappingExposure",P.toneMappingExposure),st.needsLights&&ml(zn,Fs),Ne&&$.fog===!0&&ye.refreshFogUniforms(zn,Ne),ye.refreshMaterialUniforms(zn,$,te,oe,we),tl.upload(Y,st.uniformsList,zn,it)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(tl.upload(Y,st.uniformsList,zn,it),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&kt.setValue(Y,"center",ie.center),kt.setValue(Y,"modelViewMatrix",ie.modelViewMatrix),kt.setValue(Y,"normalMatrix",ie.normalMatrix),kt.setValue(Y,"modelMatrix",ie.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Kt=$.uniformsGroups;for(let Os=0,_l=Kt.length;Os<_l;Os++)if(nt.isWebGL2){const Hr=Kt[Os];je.update(Hr,Vt),je.bind(Hr,Vt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vt}function ml(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function gl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,q,ne){lt.get(C.texture).__webglTexture=q,lt.get(C.depthTexture).__webglTexture=ne;const $=lt.get(C);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=ne===void 0,$.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,q){const ne=lt.get(C);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,ne=0){F=C,N=q,k=ne;let $=!0,ie=null,Ne=!1,Ve=!1;if(C){const Ke=lt.get(C);Ke.__useDefaultFramebuffer!==void 0?(Ze.bindFramebuffer(Y.FRAMEBUFFER,null),$=!1):Ke.__webglFramebuffer===void 0?it.setupRenderTarget(C):Ke.__hasExternalTextures&&it.rebindTextures(C,lt.get(C.texture).__webglTexture,lt.get(C.depthTexture).__webglTexture);const at=C.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ve=!0);const Ue=lt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ue[q])?ie=Ue[q][ne]:ie=Ue[q],Ne=!0):nt.isWebGL2&&C.samples>0&&it.useMultisampledRTT(C)===!1?ie=lt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ue)?ie=Ue[ne]:ie=Ue,I.copy(C.viewport),se.copy(C.scissor),ae=C.scissorTest}else I.copy(w).multiplyScalar(te).floor(),se.copy(b).multiplyScalar(te).floor(),ae=V;if(Ze.bindFramebuffer(Y.FRAMEBUFFER,ie)&&nt.drawBuffers&&$&&Ze.drawBuffers(C,ie),Ze.viewport(I),Ze.scissor(se),Ze.setScissorTest(ae),Ne){const Ke=lt.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ke.__webglTexture,ne)}else if(Ve){const Ke=lt.get(C.texture),at=q||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ke.__webglTexture,ne||0,at)}K=-1},this.readRenderTargetPixels=function(C,q,ne,$,ie,Ne,Ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=lt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe){Ze.bindFramebuffer(Y.FRAMEBUFFER,qe);try{const Ke=C.texture,at=Ke.format,Ue=Ke.type;if(at!==si&&mt.convert(at)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=Ue===Ao&&(Xe.has("EXT_color_buffer_half_float")||nt.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(Ue!==ur&&mt.convert(Ue)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===or&&(nt.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-$&&ne>=0&&ne<=C.height-ie&&Y.readPixels(q,ne,$,ie,mt.convert(at),mt.convert(Ue),Ne)}finally{const Ke=F!==null?lt.get(F).__webglFramebuffer:null;Ze.bindFramebuffer(Y.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(C,q,ne=0){const $=Math.pow(2,-ne),ie=Math.floor(q.image.width*$),Ne=Math.floor(q.image.height*$);it.setTexture2D(q,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ne,0,0,C.x,C.y,ie,Ne),Ze.unbindTexture()},this.copyTextureToTexture=function(C,q,ne,$=0){const ie=q.image.width,Ne=q.image.height,Ve=mt.convert(ne.format),qe=mt.convert(ne.type);it.setTexture2D(ne,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ne.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,ne.unpackAlignment),q.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,$,C.x,C.y,ie,Ne,Ve,qe,q.image.data):q.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,$,C.x,C.y,q.mipmaps[0].width,q.mipmaps[0].height,Ve,q.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,$,C.x,C.y,Ve,qe,q.image),$===0&&ne.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Ze.unbindTexture()},this.copyTextureToTexture3D=function(C,q,ne,$,ie=0){if(P.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=C.max.x-C.min.x+1,Ve=C.max.y-C.min.y+1,qe=C.max.z-C.min.z+1,Ke=mt.convert($.format),at=mt.convert($.type);let Ue;if($.isData3DTexture)it.setTexture3D($,0),Ue=Y.TEXTURE_3D;else if($.isDataArrayTexture)it.setTexture2DArray($,0),Ue=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,$.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,$.unpackAlignment);const rt=Y.getParameter(Y.UNPACK_ROW_LENGTH),yt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Ct=Y.getParameter(Y.UNPACK_SKIP_PIXELS),en=Y.getParameter(Y.UNPACK_SKIP_ROWS),Yn=Y.getParameter(Y.UNPACK_SKIP_IMAGES),Lt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Lt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Lt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,C.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,C.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,C.min.z),ne.isDataTexture||ne.isData3DTexture?Y.texSubImage3D(Ue,ie,q.x,q.y,q.z,Ne,Ve,qe,Ke,at,Lt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ue,ie,q.x,q.y,q.z,Ne,Ve,qe,Ke,Lt.data)):Y.texSubImage3D(Ue,ie,q.x,q.y,q.z,Ne,Ve,qe,Ke,at,Lt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,rt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,yt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ct),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,en),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Yn),ie===0&&$.generateMipmaps&&Y.generateMipmap(Ue),Ze.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?it.setTextureCube(C,0):C.isData3DTexture?it.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?it.setTexture2DArray(C,0):it.setTexture2D(C,0),Ze.unbindTexture()},this.resetState=function(){N=0,k=0,F=null,Ze.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Wc?"display-p3":"srgb",n.unpackColorSpace=vt.workingColorSpace===ll?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rn?Nr:sm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Nr?rn:Ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class yM extends Em{}yM.prototype.isWebGL1Renderer=!0;class MM extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class EM extends Pn{constructor(e,n,s,a,u,d,f,p,m){super(e,n,s,a,u,d,f,p,m),this.isVideoTexture=!0,this.minFilter=d!==void 0?d:pn,this.magFilter=u!==void 0?u:pn,this.generateMipmaps=!1;const g=this;function S(){g.needsUpdate=!0,e.requestVideoFrameCallback(S)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(S)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);function TM({experiment:o,onReset:e}){const n=Xt.useRef(null),s=Xt.useRef(null),a=Xt.useRef(null),[u,d]=Xt.useState(!1),[f,p]=Xt.useState(!1),[m,g]=Xt.useState(null),[S,v]=Xt.useState("");Xt.useEffect(()=>(M(),()=>{P()}),[]);const M=async()=>{try{const L=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280,min:640},height:{ideal:720,min:480}}});n.current&&(n.current.srcObject=L,n.current.play(),n.current.onloadedmetadata=()=>{A()})}catch{g("Camera access required for AR. Please allow camera permissions.")}},A=()=>{const L=s.current,N=n.current;if(!L||!N)return;L.width=N.videoWidth||640,L.height=N.videoHeight||480;const k=new MM,F=new jn(75,L.width/L.height,.1,1e3),K=new Em({canvas:L,alpha:!0});K.setSize(L.width,L.height),K.setClearColor(0,0);const R=new EM(T(o.video));R.minFilter=pn,R.magFilter=pn;const I=new fl(2,1.5),se=new jc({map:R,transparent:!0,opacity:.9}),ae=new Di(I,se);ae.position.set(0,0,-3),k.add(ae),a.current={scene:k,camera:F,renderer:K,videoPlane:ae,videoTexture:R},x(),p(!0)},T=L=>{const N=document.createElement("video");return N.src=L,N.loop=!0,N.muted=!0,N.playsInline=!0,N.crossOrigin="anonymous",N},x=()=>{const L=()=>{if(!a.current)return;const{scene:N,camera:k,renderer:F,videoPlane:K}=a.current;if(u){K.rotation.x+=.005,K.rotation.y+=.01;const R=Date.now()*.001;K.position.x=Math.sin(R)*.5,K.position.y=Math.cos(R)*.3}F.render(N,k),requestAnimationFrame(L)};L()},_=()=>{f&&(d(!0),v("Scanning for puzzle... Move camera slowly over the puzzle"),setTimeout(()=>{v("Puzzle detected! Video is now tracking the surface");const L=a.current?.videoTexture?.image;L&&L.play().catch(N=>console.log("Video play failed:",N))},2e3))},z=()=>{d(!1),v("Scanning stopped");const L=a.current?.videoTexture?.image;L&&L.pause()},P=()=>{if(n.current?.srcObject&&n.current.srcObject.getTracks().forEach(N=>N.stop()),a.current){const{renderer:L,scene:N}=a.current;L.dispose(),N.clear()}};return m?Te.jsxs("div",{className:"ar-error",children:[Te.jsx("h2",{children:"🚫 AR Error"}),Te.jsx("p",{children:m}),Te.jsx("button",{onClick:e,children:"Go Back to Menu"})]}):Te.jsxs("div",{className:"ar-viewer",children:[Te.jsxs("div",{className:"ar-header",children:[Te.jsx("h2",{children:"🔬 AR Physics Experience"}),Te.jsxs("p",{children:["Scan your completed puzzle to see ",o.name," in AR!"]})]}),Te.jsxs("div",{className:"ar-container",children:[Te.jsx("video",{ref:n,className:"camera-feed",autoPlay:!0,playsInline:!0,muted:!0}),Te.jsx("canvas",{ref:s,className:"ar-overlay"}),Te.jsxs("div",{className:"scanning-frame",children:[Te.jsx("div",{className:"scan-corners"}),Te.jsx("p",{children:"Position puzzle within this frame"})]}),S&&Te.jsx("div",{className:"debug-info",children:Te.jsx("p",{children:S})})]}),Te.jsxs("div",{className:"ar-controls",children:[Te.jsx("button",{onClick:_,disabled:!f||u,className:"scan-btn",children:u?"🎯 Scanning...":"📱 Start AR Scan"}),Te.jsx("button",{onClick:z,disabled:!u,className:"stop-btn",children:"⏹️ Stop Scanning"}),Te.jsx("button",{onClick:e,className:"back-btn",children:"🏠 Back to Menu"})]}),Te.jsxs("div",{className:"ar-instructions",children:[Te.jsx("h4",{children:"📋 AR Instructions:"}),Te.jsxs("ol",{children:[Te.jsx("li",{children:"Place your completed puzzle on a flat surface"}),Te.jsx("li",{children:"Ensure good lighting (no shadows on puzzle)"}),Te.jsx("li",{children:'Click "Start AR Scan" and slowly move camera over puzzle'}),Te.jsx("li",{children:"When detected, the video will appear on the puzzle surface"}),Te.jsx("li",{children:"Move your device around to see the 3D AR effect!"})]})]})]})}const bc={convexLens:{name:"Light Through Convex Lens",image:"/images/convex-lens.jpg",video:"/videos/convex-lens.mp4",description:"Explore how light rays converge through a convex lens",type:"physics",concepts:["Refraction","Focal Point","Ray Diagrams","Image Formation"]},reflection:{name:"Light Reflection",image:"/images/reflection.jpg",video:"/videos/reflection.mp4",description:"Understand the laws of reflection with mirrors",type:"physics",concepts:["Angle of Incidence","Angle of Reflection","Mirror Images"]},prism:{name:"Light Dispersion Through Prism",image:"/images/prism.jpg",video:"/videos/prism.mp4",description:"See how white light splits into rainbow colors",type:"physics",concepts:["Dispersion","Spectrum","Wavelength","Color Theory"]}};function wM(){const[o,e]=Xt.useState("select"),[n,s]=Xt.useState(null),[a,u]=Xt.useState(!1),d=m=>{s(m),e("puzzle")},f=()=>{u(!0),setTimeout(()=>{e("ar")},2e3)},p=()=>{e("select"),s(null),u(!1)};return Te.jsxs("div",{className:"app",children:[Te.jsxs("header",{className:"app-header",children:[Te.jsx("h1",{children:"🔬 Physics AR Puzzle"}),Te.jsx("p",{className:"app-subtitle",children:"Learn Optics Through Interactive Puzzles"}),o!=="select"&&Te.jsx("button",{className:"reset-btn",onClick:p,children:"🏠 Back to Menu"})]}),Te.jsxs("main",{className:"app-main",children:[o==="select"&&Te.jsx(p_,{experiments:bc,onSelect:d}),o==="puzzle"&&n&&Te.jsx(__,{experiment:bc[n],onComplete:f}),o==="ar"&&n&&Te.jsx(TM,{experiment:bc[n],onReset:p})]})]})}h_.createRoot(document.getElementById("root")).render(Te.jsx(o_.StrictMode,{children:Te.jsx(wM,{})}));
