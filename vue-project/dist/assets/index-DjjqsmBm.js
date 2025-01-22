(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Me={},Hr=[],Mn=()=>{},Iw=()=>!1,Gl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Hh=n=>n.startsWith("onUpdate:"),ot=Object.assign,Kh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ww=Object.prototype.hasOwnProperty,Pe=(n,e)=>ww.call(n,e),le=Array.isArray,Kr=n=>zl(n)==="[object Map]",L_=n=>zl(n)==="[object Set]",fe=n=>typeof n=="function",Je=n=>typeof n=="string",$s=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",V_=n=>(je(n)||fe(n))&&fe(n.then)&&fe(n.catch),F_=Object.prototype.toString,zl=n=>F_.call(n),Rw=n=>zl(n).slice(8,-1),U_=n=>zl(n)==="[object Object]",Gh=n=>Je(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,io=Wh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ql=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Aw=/-(\w)/g,an=Ql(n=>n.replace(Aw,(e,t)=>t?t.toUpperCase():"")),Cw=/\B([A-Z])/g,js=Ql(n=>n.replace(Cw,"-$1").toLowerCase()),Yl=Ql(n=>n.charAt(0).toUpperCase()+n.slice(1)),Zc=Ql(n=>n?`on${Yl(n)}`:""),Ss=(n,e)=>!Object.is(n,e),ja=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},B_=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},Vu=n=>{const e=parseFloat(n);return isNaN(e)?n:e},bw=n=>{const e=Je(n)?Number(n):NaN;return isNaN(e)?n:e};let Rp;const Xl=()=>Rp||(Rp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zh(n){if(le(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=Je(s)?Nw(s):zh(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Je(n)||je(n))return n}const Sw=/;(?![^(]*\))/g,Pw=/:([^]+)/,kw=/\/\*[^]*?\*\//g;function Nw(n){const e={};return n.replace(kw,"").split(Sw).forEach(t=>{if(t){const s=t.split(Pw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Gr(n){let e="";if(Je(n))e=n;else if(le(n))for(let t=0;t<n.length;t++){const s=Gr(n[t]);s&&(e+=s+" ")}else if(je(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ow="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dw=Wh(Ow);function $_(n){return!!n||n===""}const j_=n=>!!(n&&n.__v_isRef===!0),Ln=n=>Je(n)?n:n==null?"":le(n)||je(n)&&(n.toString===F_||!fe(n.toString))?j_(n)?Ln(n.value):JSON.stringify(n,q_,2):String(n),q_=(n,e)=>j_(e)?q_(n,e.value):Kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],i)=>(t[eu(s,i)+" =>"]=r,t),{})}:L_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>eu(t))}:$s(e)?eu(e):je(e)&&!le(e)&&!U_(e)?String(e):e,eu=(n,e="")=>{var t;return $s(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class W_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Lt;try{return Lt=this,e()}finally{Lt=t}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function xw(n){return new W_(n)}function H_(){return Lt}function Mw(n,e=!1){Lt&&Lt.cleanups.push(n)}let Le;const tu=new WeakSet;class K_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&Lt.active&&Lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tu.has(this)&&(tu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||z_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ap(this),Q_(this);const e=Le,t=gn;Le=this,gn=!0;try{return this.fn()}finally{Y_(this),Le=e,gn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xh(e);this.deps=this.depsTail=void 0,Ap(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fu(this)&&this.run()}get dirty(){return Fu(this)}}let G_=0,oo,ao;function z_(n,e=!1){if(n.flags|=8,e){n.next=ao,ao=n;return}n.next=oo,oo=n}function Qh(){G_++}function Yh(){if(--G_>0)return;if(ao){let e=ao;for(ao=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;oo;){let e=oo;for(oo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function Q_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Y_(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),Xh(s),Lw(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function Fu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(X_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function X_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===wo))return;n.globalVersion=wo;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Fu(n)){n.flags&=-3;return}const t=Le,s=gn;Le=n,gn=!0;try{Q_(n);const r=n.fn(n._value);(e.version===0||Ss(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Le=t,gn=s,Y_(n),n.flags&=-3}}function Xh(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Xh(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Lw(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let gn=!0;const J_=[];function qs(){J_.push(gn),gn=!1}function Ws(){const n=J_.pop();gn=n===void 0?!0:n}function Ap(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Le;Le=void 0;try{e()}finally{Le=t}}}let wo=0;class Vw{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Le||!gn||Le===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Le)t=this.activeLink=new Vw(Le,this),Le.deps?(t.prevDep=Le.depsTail,Le.depsTail.nextDep=t,Le.depsTail=t):Le.deps=Le.depsTail=t,Z_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=Le.depsTail,t.nextDep=void 0,Le.depsTail.nextDep=t,Le.depsTail=t,Le.deps===t&&(Le.deps=s)}return t}trigger(e){this.version++,wo++,this.notify(e)}notify(e){Qh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Yh()}}}function Z_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Z_(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Uu=new WeakMap,ur=Symbol(""),Bu=Symbol(""),Ro=Symbol("");function Ct(n,e,t){if(gn&&Le){let s=Uu.get(n);s||Uu.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new Jh),r.map=s,r.key=t),r.track()}}function Xn(n,e,t,s,r,i){const o=Uu.get(n);if(!o){wo++;return}const a=c=>{c&&c.trigger()};if(Qh(),e==="clear")o.forEach(a);else{const c=le(n),u=c&&Gh(t);if(c&&t==="length"){const h=Number(s);o.forEach((f,m)=>{(m==="length"||m===Ro||!$s(m)&&m>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Ro)),e){case"add":c?u&&a(o.get("length")):(a(o.get(ur)),Kr(n)&&a(o.get(Bu)));break;case"delete":c||(a(o.get(ur)),Kr(n)&&a(o.get(Bu)));break;case"set":Kr(n)&&a(o.get(ur));break}}Yh()}function Or(n){const e=Se(n);return e===n?e:(Ct(e,"iterate",Ro),rn(n)?e:e.map(bt))}function Jl(n){return Ct(n=Se(n),"iterate",Ro),n}const Fw={__proto__:null,[Symbol.iterator](){return nu(this,Symbol.iterator,bt)},concat(...n){return Or(this).concat(...n.map(e=>le(e)?Or(e):e))},entries(){return nu(this,"entries",n=>(n[1]=bt(n[1]),n))},every(n,e){return Gn(this,"every",n,e,void 0,arguments)},filter(n,e){return Gn(this,"filter",n,e,t=>t.map(bt),arguments)},find(n,e){return Gn(this,"find",n,e,bt,arguments)},findIndex(n,e){return Gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Gn(this,"findLast",n,e,bt,arguments)},findLastIndex(n,e){return Gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return su(this,"includes",n)},indexOf(...n){return su(this,"indexOf",n)},join(n){return Or(this).join(n)},lastIndexOf(...n){return su(this,"lastIndexOf",n)},map(n,e){return Gn(this,"map",n,e,void 0,arguments)},pop(){return $i(this,"pop")},push(...n){return $i(this,"push",n)},reduce(n,...e){return Cp(this,"reduce",n,e)},reduceRight(n,...e){return Cp(this,"reduceRight",n,e)},shift(){return $i(this,"shift")},some(n,e){return Gn(this,"some",n,e,void 0,arguments)},splice(...n){return $i(this,"splice",n)},toReversed(){return Or(this).toReversed()},toSorted(n){return Or(this).toSorted(n)},toSpliced(...n){return Or(this).toSpliced(...n)},unshift(...n){return $i(this,"unshift",n)},values(){return nu(this,"values",bt)}};function nu(n,e,t){const s=Jl(n),r=s[e]();return s!==n&&!rn(n)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=t(i.value)),i}),r}const Uw=Array.prototype;function Gn(n,e,t,s,r,i){const o=Jl(n),a=o!==n&&!rn(n),c=o[e];if(c!==Uw[e]){const f=c.apply(n,i);return a?bt(f):f}let u=t;o!==n&&(a?u=function(f,m){return t.call(this,bt(f),m,n)}:t.length>2&&(u=function(f,m){return t.call(this,f,m,n)}));const h=c.call(o,u,s);return a&&r?r(h):h}function Cp(n,e,t,s){const r=Jl(n);let i=t;return r!==n&&(rn(n)?t.length>3&&(i=function(o,a,c){return t.call(this,o,a,c,n)}):i=function(o,a,c){return t.call(this,o,bt(a),c,n)}),r[e](i,...s)}function su(n,e,t){const s=Se(n);Ct(s,"iterate",Ro);const r=s[e](...t);return(r===-1||r===!1)&&td(t[0])?(t[0]=Se(t[0]),s[e](...t)):r}function $i(n,e,t=[]){qs(),Qh();const s=Se(n)[e].apply(n,t);return Yh(),Ws(),s}const Bw=Wh("__proto__,__v_isRef,__isVue"),ey=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter($s));function $w(n){$s(n)||(n=String(n));const e=Se(this);return Ct(e,"has",n),e.hasOwnProperty(n)}class ty{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return s===(r?i?Xw:iy:i?ry:sy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=le(e);if(!r){let c;if(o&&(c=Fw[t]))return c;if(t==="hasOwnProperty")return $w}const a=Reflect.get(e,t,yt(e)?e:s);return($s(t)?ey.has(t):Bw(t))||(r||Ct(e,"get",t),i)?a:yt(a)?o&&Gh(t)?a:a.value:je(a)?r?ay(a):Zl(a):a}}class ny extends ty{constructor(e=!1){super(!1,e)}set(e,t,s,r){let i=e[t];if(!this._isShallow){const c=dr(i);if(!rn(s)&&!dr(s)&&(i=Se(i),s=Se(s)),!le(e)&&yt(i)&&!yt(s))return c?!1:(i.value=s,!0)}const o=le(e)&&Gh(t)?Number(t)<e.length:Pe(e,t),a=Reflect.set(e,t,s,yt(e)?e:r);return e===Se(r)&&(o?Ss(s,i)&&Xn(e,"set",t,s):Xn(e,"add",t,s)),a}deleteProperty(e,t){const s=Pe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&Xn(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!$s(t)||!ey.has(t))&&Ct(e,"has",t),s}ownKeys(e){return Ct(e,"iterate",le(e)?"length":ur),Reflect.ownKeys(e)}}class jw extends ty{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const qw=new ny,Ww=new jw,Hw=new ny(!0);const $u=n=>n,Ca=n=>Reflect.getPrototypeOf(n);function Kw(n,e,t){return function(...s){const r=this.__v_raw,i=Se(r),o=Kr(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=r[n](...s),h=t?$u:e?ju:bt;return!e&&Ct(i,"iterate",c?Bu:ur),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:a?[h(f[0]),h(f[1])]:h(f),done:m}},[Symbol.iterator](){return this}}}}function ba(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Gw(n,e){const t={get(r){const i=this.__v_raw,o=Se(i),a=Se(r);n||(Ss(r,a)&&Ct(o,"get",r),Ct(o,"get",a));const{has:c}=Ca(o),u=e?$u:n?ju:bt;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!n&&Ct(Se(r),"iterate",ur),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Se(i),a=Se(r);return n||(Ss(r,a)&&Ct(o,"has",r),Ct(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Se(a),u=e?$u:n?ju:bt;return!n&&Ct(c,"iterate",ur),a.forEach((h,f)=>r.call(i,u(h),u(f),o))}};return ot(t,n?{add:ba("add"),set:ba("set"),delete:ba("delete"),clear:ba("clear")}:{add(r){!e&&!rn(r)&&!dr(r)&&(r=Se(r));const i=Se(this);return Ca(i).has.call(i,r)||(i.add(r),Xn(i,"add",r,r)),this},set(r,i){!e&&!rn(i)&&!dr(i)&&(i=Se(i));const o=Se(this),{has:a,get:c}=Ca(o);let u=a.call(o,r);u||(r=Se(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Ss(i,h)&&Xn(o,"set",r,i):Xn(o,"add",r,i),this},delete(r){const i=Se(this),{has:o,get:a}=Ca(i);let c=o.call(i,r);c||(r=Se(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&Xn(i,"delete",r,void 0),u},clear(){const r=Se(this),i=r.size!==0,o=r.clear();return i&&Xn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Kw(r,n,e)}),t}function Zh(n,e){const t=Gw(n,e);return(s,r,i)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(Pe(t,r)&&r in s?t:s,r,i)}const zw={get:Zh(!1,!1)},Qw={get:Zh(!1,!0)},Yw={get:Zh(!0,!1)};const sy=new WeakMap,ry=new WeakMap,iy=new WeakMap,Xw=new WeakMap;function Jw(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zw(n){return n.__v_skip||!Object.isExtensible(n)?0:Jw(Rw(n))}function Zl(n){return dr(n)?n:ed(n,!1,qw,zw,sy)}function oy(n){return ed(n,!1,Hw,Qw,ry)}function ay(n){return ed(n,!0,Ww,Yw,iy)}function ed(n,e,t,s,r){if(!je(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=r.get(n);if(i)return i;const o=Zw(n);if(o===0)return n;const a=new Proxy(n,o===2?s:t);return r.set(n,a),a}function zr(n){return dr(n)?zr(n.__v_raw):!!(n&&n.__v_isReactive)}function dr(n){return!!(n&&n.__v_isReadonly)}function rn(n){return!!(n&&n.__v_isShallow)}function td(n){return n?!!n.__v_raw:!1}function Se(n){const e=n&&n.__v_raw;return e?Se(e):n}function eR(n){return!Pe(n,"__v_skip")&&Object.isExtensible(n)&&B_(n,"__v_skip",!0),n}const bt=n=>je(n)?Zl(n):n,ju=n=>je(n)?ay(n):n;function yt(n){return n?n.__v_isRef===!0:!1}function Nt(n){return cy(n,!1)}function ly(n){return cy(n,!0)}function cy(n,e){return yt(n)?n:new tR(n,e)}class tR{constructor(e,t){this.dep=new Jh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Se(e),this._value=t?e:bt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||rn(e)||dr(e);e=s?e:Se(e),Ss(e,t)&&(this._rawValue=e,this._value=s?e:bt(e),this.dep.trigger())}}function jt(n){return yt(n)?n.value:n}function Qn(n){return fe(n)?n():jt(n)}const nR={get:(n,e,t)=>e==="__v_raw"?n:jt(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return yt(r)&&!yt(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function uy(n){return zr(n)?n:new Proxy(n,nR)}class sR{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Jh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return z_(this,!0),!0}get value(){const e=this.dep.track();return X_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rR(n,e,t=!1){let s,r;return fe(n)?s=n:(s=n.get,r=n.set),new sR(s,r,t)}const Sa={},il=new WeakMap;let rr;function iR(n,e=!1,t=rr){if(t){let s=il.get(t);s||il.set(t,s=[]),s.push(n)}}function oR(n,e,t=Me){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=t,u=x=>r?x:rn(x)||r===!1||r===0?Jn(x,1):Jn(x);let h,f,m,g,I=!1,S=!1;if(yt(n)?(f=()=>n.value,I=rn(n)):zr(n)?(f=()=>u(n),I=!0):le(n)?(S=!0,I=n.some(x=>zr(x)||rn(x)),f=()=>n.map(x=>{if(yt(x))return x.value;if(zr(x))return u(x);if(fe(x))return c?c(x,2):x()})):fe(n)?e?f=c?()=>c(n,2):n:f=()=>{if(m){qs();try{m()}finally{Ws()}}const x=rr;rr=h;try{return c?c(n,3,[g]):n(g)}finally{rr=x}}:f=Mn,e&&r){const x=f,ee=r===!0?1/0:r;f=()=>Jn(x(),ee)}const P=H_(),V=()=>{h.stop(),P&&P.active&&Kh(P.effects,h)};if(i&&e){const x=e;e=(...ee)=>{x(...ee),V()}}let F=S?new Array(n.length).fill(Sa):Sa;const D=x=>{if(!(!(h.flags&1)||!h.dirty&&!x))if(e){const ee=h.run();if(r||I||(S?ee.some((te,C)=>Ss(te,F[C])):Ss(ee,F))){m&&m();const te=rr;rr=h;try{const C=[ee,F===Sa?void 0:S&&F[0]===Sa?[]:F,g];c?c(e,3,C):e(...C),F=ee}finally{rr=te}}}else h.run()};return a&&a(D),h=new K_(f),h.scheduler=o?()=>o(D,!1):D,g=x=>iR(x,!1,h),m=h.onStop=()=>{const x=il.get(h);if(x){if(c)c(x,4);else for(const ee of x)ee();il.delete(h)}},e?s?D(!0):F=h.run():o?o(D.bind(null,!0),!0):h.run(),V.pause=h.pause.bind(h),V.resume=h.resume.bind(h),V.stop=V,V}function Jn(n,e=1/0,t){if(e<=0||!je(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,yt(n))Jn(n.value,e,t);else if(le(n))for(let s=0;s<n.length;s++)Jn(n[s],e,t);else if(L_(n)||Kr(n))n.forEach(s=>{Jn(s,e,t)});else if(U_(n)){for(const s in n)Jn(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Jn(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ko(n,e,t,s){try{return s?n(...s):n()}catch(r){ec(r,e,t)}}function vn(n,e,t,s){if(fe(n)){const r=Ko(n,e,t,s);return r&&V_(r)&&r.catch(i=>{ec(i,e,t)}),r}if(le(n)){const r=[];for(let i=0;i<n.length;i++)r.push(vn(n[i],e,t,s));return r}}function ec(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](n,c,u)===!1)return}a=a.parent}if(i){qs(),Ko(i,null,10,[n,c,u]),Ws();return}}aR(n,t,r,s,o)}function aR(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const Vt=[];let Sn=-1;const Qr=[];let Is=null,xr=0;const hy=Promise.resolve();let ol=null;function dy(n){const e=ol||hy;return n?e.then(this?n.bind(this):n):e}function lR(n){let e=Sn+1,t=Vt.length;for(;e<t;){const s=e+t>>>1,r=Vt[s],i=Ao(r);i<n||i===n&&r.flags&2?e=s+1:t=s}return e}function nd(n){if(!(n.flags&1)){const e=Ao(n),t=Vt[Vt.length-1];!t||!(n.flags&2)&&e>=Ao(t)?Vt.push(n):Vt.splice(lR(e),0,n),n.flags|=1,fy()}}function fy(){ol||(ol=hy.then(my))}function cR(n){le(n)?Qr.push(...n):Is&&n.id===-1?Is.splice(xr+1,0,n):n.flags&1||(Qr.push(n),n.flags|=1),fy()}function bp(n,e,t=Sn+1){for(;t<Vt.length;t++){const s=Vt[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;Vt.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function py(n){if(Qr.length){const e=[...new Set(Qr)].sort((t,s)=>Ao(t)-Ao(s));if(Qr.length=0,Is){Is.push(...e);return}for(Is=e,xr=0;xr<Is.length;xr++){const t=Is[xr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Is=null,xr=0}}const Ao=n=>n.id==null?n.flags&2?-1:1/0:n.id;function my(n){try{for(Sn=0;Sn<Vt.length;Sn++){const e=Vt[Sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ko(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Sn<Vt.length;Sn++){const e=Vt[Sn];e&&(e.flags&=-2)}Sn=-1,Vt.length=0,py(),ol=null,(Vt.length||Qr.length)&&my()}}let qt=null,gy=null;function al(n){const e=qt;return qt=n,gy=n&&n.type.__scopeId||null,e}function ll(n,e=qt,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&Fp(-1);const i=al(e);let o;try{o=n(...r)}finally{al(i),s._d&&Fp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function qa(n,e){if(qt===null)return n;const t=rc(qt),s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Me]=e[r];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Jn(o),s.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function tr(n,e,t,s){const r=n.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(qs(),vn(c,t,8,[n.el,a,n,e]),Ws())}}const uR=Symbol("_vte"),hR=n=>n.__isTeleport,Dr=Symbol("_leaveCb"),Pa=Symbol("_enterCb");function dR(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sd(()=>{n.isMounted=!0}),wy(()=>{n.isUnmounting=!0}),n}const nn=[Function,Array],fR={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn};function pR(n,e){const{leavingVNodes:t}=n;let s=t.get(e.type);return s||(s=Object.create(null),t.set(e.type,s)),s}function qu(n,e,t,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:m,onLeave:g,onAfterLeave:I,onLeaveCancelled:S,onBeforeAppear:P,onAppear:V,onAfterAppear:F,onAppearCancelled:D}=e,x=String(n.key),ee=pR(t,n),te=(E,A)=>{E&&vn(E,s,9,A)},C=(E,A)=>{const b=A[1];te(E,A),le(E)?E.every(R=>R.length<=1)&&b():E.length<=1&&b()},y={mode:o,persisted:a,beforeEnter(E){let A=c;if(!t.isMounted)if(i)A=P||c;else return;E[Dr]&&E[Dr](!0);const b=ee[x];b&&Mr(n,b)&&b.el[Dr]&&b.el[Dr](),te(A,[E])},enter(E){let A=u,b=h,R=f;if(!t.isMounted)if(i)A=V||u,b=F||h,R=D||f;else return;let v=!1;const Oe=E[Pa]=st=>{v||(v=!0,st?te(R,[E]):te(b,[E]),y.delayedLeave&&y.delayedLeave(),E[Pa]=void 0)};A?C(A,[E,Oe]):Oe()},leave(E,A){const b=String(n.key);if(E[Pa]&&E[Pa](!0),t.isUnmounting)return A();te(m,[E]);let R=!1;const v=E[Dr]=Oe=>{R||(R=!0,A(),Oe?te(S,[E]):te(I,[E]),E[Dr]=void 0,ee[b]===n&&delete ee[b])};ee[b]=n,g?C(g,[E,v]):v()},clone(E){return qu(E,e,t,s)}};return y}function Co(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Co(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function _y(n,e=!1,t){let s=[],r=0;for(let i=0;i<n.length;i++){let o=n[i];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:i);o.type===rt?(o.patchFlag&128&&r++,s=s.concat(_y(o.children,e,a))):(e||o.type!==Ds)&&s.push(a!=null?fr(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function yy(n,e){return fe(n)?ot({name:n.name},e,{setup:n}):n}function Ey(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function cl(n,e,t,s,r=!1){if(le(n)){n.forEach((I,S)=>cl(I,e&&(le(e)?e[S]:e),t,s,r));return}if(lo(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&cl(n,e,t,s.component.subTree);return}const i=s.shapeFlag&4?rc(s.component):s.el,o=r?null:i,{i:a,r:c}=n,u=e&&e.r,h=a.refs===Me?a.refs={}:a.refs,f=a.setupState,m=Se(f),g=f===Me?()=>!1:I=>Pe(m,I);if(u!=null&&u!==c&&(Je(u)?(h[u]=null,g(u)&&(f[u]=null)):yt(u)&&(u.value=null)),fe(c))Ko(c,a,12,[o,h]);else{const I=Je(c),S=yt(c);if(I||S){const P=()=>{if(n.f){const V=I?g(c)?f[c]:h[c]:c.value;r?le(V)&&Kh(V,i):le(V)?V.includes(i)||V.push(i):I?(h[c]=[i],g(c)&&(f[c]=h[c])):(c.value=[i],n.k&&(h[n.k]=c.value))}else I?(h[c]=o,g(c)&&(f[c]=o)):S&&(c.value=o,n.k&&(h[n.k]=o))};o?(P.id=-1,Kt(P,t)):P()}}}Xl().requestIdleCallback;Xl().cancelIdleCallback;const lo=n=>!!n.type.__asyncLoader,vy=n=>n.type.__isKeepAlive;function mR(n,e){Ty(n,"a",e)}function gR(n,e){Ty(n,"da",e)}function Ty(n,e,t=mt){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(tc(e,s,t),t){let r=t.parent;for(;r&&r.parent;)vy(r.parent.vnode)&&_R(s,e,t,r),r=r.parent}}function _R(n,e,t,s){const r=tc(e,n,s,!0);rd(()=>{Kh(s[e],r)},t)}function tc(n,e,t=mt,s=!1){if(t){const r=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{qs();const a=Go(t),c=vn(e,t,n,o);return a(),Ws(),c});return s?r.unshift(i):r.push(i),i}}const hs=n=>(e,t=mt)=>{(!Po||n==="sp")&&tc(n,(...s)=>e(...s),t)},yR=hs("bm"),sd=hs("m"),ER=hs("bu"),Iy=hs("u"),wy=hs("bum"),rd=hs("um"),Ry=hs("sp"),vR=hs("rtg"),TR=hs("rtc");function IR(n,e=mt){tc("ec",n,e)}const wR="components";function Sp(n,e){return AR(wR,n,!0,e)||n}const RR=Symbol.for("v-ndc");function AR(n,e,t=!0,s=!1){const r=qt||mt;if(r){const i=r.type;{const a=hA(i,!1);if(a&&(a===e||a===an(e)||a===Yl(an(e))))return i}const o=Pp(r[n]||i[n],e)||Pp(r.appContext[n],e);return!o&&s?i:o}}function Pp(n,e){return n&&(n[e]||n[an(e)]||n[Yl(an(e))])}function Ay(n,e,t,s){let r;const i=t,o=le(n);if(o||Je(n)){const a=o&&zr(n);let c=!1;a&&(c=!rn(n),n=Jl(n)),r=new Array(n.length);for(let u=0,h=n.length;u<h;u++)r[u]=e(c?bt(n[u]):n[u],u,void 0,i)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,i)}else if(je(n))if(n[Symbol.iterator])r=Array.from(n,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(n);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(n[h],h,c,i)}}else r=[];return r}const Wu=n=>n?zy(n)?rc(n):Wu(n.parent):null,co=ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Wu(n.parent),$root:n=>Wu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>by(n),$forceUpdate:n=>n.f||(n.f=()=>{nd(n.update)}),$nextTick:n=>n.n||(n.n=dy.bind(n.proxy)),$watch:n=>KR.bind(n)}),ru=(n,e)=>n!==Me&&!n.__isScriptSetup&&Pe(n,e),CR={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return i[e]}else{if(ru(s,e))return o[e]=1,s[e];if(r!==Me&&Pe(r,e))return o[e]=2,r[e];if((u=n.propsOptions[0])&&Pe(u,e))return o[e]=3,i[e];if(t!==Me&&Pe(t,e))return o[e]=4,t[e];Hu&&(o[e]=0)}}const h=co[e];let f,m;if(h)return e==="$attrs"&&Ct(n.attrs,"get",""),h(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Me&&Pe(t,e))return o[e]=4,t[e];if(m=c.config.globalProperties,Pe(m,e))return m[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:i}=n;return ru(r,e)?(r[e]=t,!0):s!==Me&&Pe(s,e)?(s[e]=t,!0):Pe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!t[o]||n!==Me&&Pe(n,o)||ru(e,o)||(a=i[0])&&Pe(a,o)||Pe(s,o)||Pe(co,o)||Pe(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Pe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function kp(n){return le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Hu=!0;function bR(n){const e=by(n),t=n.proxy,s=n.ctx;Hu=!1,e.beforeCreate&&Np(e.beforeCreate,n,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:m,beforeUpdate:g,updated:I,activated:S,deactivated:P,beforeDestroy:V,beforeUnmount:F,destroyed:D,unmounted:x,render:ee,renderTracked:te,renderTriggered:C,errorCaptured:y,serverPrefetch:E,expose:A,inheritAttrs:b,components:R,directives:v,filters:Oe}=e;if(u&&SR(u,s,null),o)for(const Te in o){const _e=o[Te];fe(_e)&&(s[Te]=_e.bind(t))}if(r){const Te=r.call(t,t);je(Te)&&(n.data=Zl(Te))}if(Hu=!0,i)for(const Te in i){const _e=i[Te],Wt=fe(_e)?_e.bind(t,t):fe(_e.get)?_e.get.bind(t,t):Mn,un=!fe(_e)&&fe(_e.set)?_e.set.bind(t):Mn,Zt=dn({get:Wt,set:un});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:He=>Zt.value=He})}if(a)for(const Te in a)Cy(a[Te],s,t,Te);if(c){const Te=fe(c)?c.call(t):c;Reflect.ownKeys(Te).forEach(_e=>{Wa(_e,Te[_e])})}h&&Np(h,n,"c");function We(Te,_e){le(_e)?_e.forEach(Wt=>Te(Wt.bind(t))):_e&&Te(_e.bind(t))}if(We(yR,f),We(sd,m),We(ER,g),We(Iy,I),We(mR,S),We(gR,P),We(IR,y),We(TR,te),We(vR,C),We(wy,F),We(rd,x),We(Ry,E),le(A))if(A.length){const Te=n.exposed||(n.exposed={});A.forEach(_e=>{Object.defineProperty(Te,_e,{get:()=>t[_e],set:Wt=>t[_e]=Wt})})}else n.exposed||(n.exposed={});ee&&n.render===Mn&&(n.render=ee),b!=null&&(n.inheritAttrs=b),R&&(n.components=R),v&&(n.directives=v),E&&Ey(n)}function SR(n,e,t=Mn){le(n)&&(n=Ku(n));for(const s in n){const r=n[s];let i;je(r)?"default"in r?i=Yt(r.from||s,r.default,!0):i=Yt(r.from||s):i=Yt(r),yt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Np(n,e,t){vn(le(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function Cy(n,e,t,s){let r=s.includes(".")?$y(t,s):()=>t[s];if(Je(n)){const i=e[n];fe(i)&&uo(r,i)}else if(fe(n))uo(r,n.bind(t));else if(je(n))if(le(n))n.forEach(i=>Cy(i,e,t,s));else{const i=fe(n.handler)?n.handler.bind(t):e[n.handler];fe(i)&&uo(r,i,n)}}function by(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!t&&!s?c=e:(c={},r.length&&r.forEach(u=>ul(c,u,o,!0)),ul(c,e,o)),je(e)&&i.set(e,c),c}function ul(n,e,t,s=!1){const{mixins:r,extends:i}=e;i&&ul(n,i,t,!0),r&&r.forEach(o=>ul(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const a=PR[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const PR={data:Op,props:Dp,emits:Dp,methods:Qi,computed:Qi,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Qi,directives:Qi,watch:NR,provide:Op,inject:kR};function Op(n,e){return e?n?function(){return ot(fe(n)?n.call(this,this):n,fe(e)?e.call(this,this):e)}:e:n}function kR(n,e){return Qi(Ku(n),Ku(e))}function Ku(n){if(le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Mt(n,e){return n?[...new Set([].concat(n,e))]:e}function Qi(n,e){return n?ot(Object.create(null),n,e):e}function Dp(n,e){return n?le(n)&&le(e)?[...new Set([...n,...e])]:ot(Object.create(null),kp(n),kp(e??{})):e}function NR(n,e){if(!n)return e;if(!e)return n;const t=ot(Object.create(null),n);for(const s in e)t[s]=Mt(n[s],e[s]);return t}function Sy(){return{app:null,config:{isNativeTag:Iw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let OR=0;function DR(n,e){return function(s,r=null){fe(s)||(s=ot({},s)),r!=null&&!je(r)&&(r=null);const i=Sy(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:OR++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:fA,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(u,...f)):fe(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,m){if(!c){const g=u._ceVNode||Ye(s,r);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(g,h,m),c=!0,u._container=h,h.__vue_app__=u,rc(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(vn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=Yr;Yr=u;try{return h()}finally{Yr=f}}};return u}}let Yr=null;function Wa(n,e){if(mt){let t=mt.provides;const s=mt.parent&&mt.parent.provides;s===t&&(t=mt.provides=Object.create(s)),t[n]=e}}function Yt(n,e,t=!1){const s=mt||qt;if(s||Yr){const r=Yr?Yr._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&fe(e)?e.call(s&&s.proxy):e}}const Py={},ky=()=>Object.create(Py),Ny=n=>Object.getPrototypeOf(n)===Py;function xR(n,e,t,s=!1){const r={},i=ky();n.propsDefaults=Object.create(null),Oy(n,e,r,i);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=s?r:oy(r):n.type.props?n.props=r:n.props=i,n.attrs=i}function MR(n,e,t,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=n,a=Se(r),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let m=h[f];if(nc(n.emitsOptions,m))continue;const g=e[m];if(c)if(Pe(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const I=an(m);r[I]=Gu(c,a,I,g,n,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{Oy(n,e,r,i)&&(u=!0);let h;for(const f in a)(!e||!Pe(e,f)&&((h=js(f))===f||!Pe(e,h)))&&(c?t&&(t[f]!==void 0||t[h]!==void 0)&&(r[f]=Gu(c,a,f,void 0,n,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Pe(e,f))&&(delete i[f],u=!0)}u&&Xn(n.attrs,"set","")}function Oy(n,e,t,s){const[r,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(io(c))continue;const u=e[c];let h;r&&Pe(r,h=an(c))?!i||!i.includes(h)?t[h]=u:(a||(a={}))[h]=u:nc(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Se(t),u=a||Me;for(let h=0;h<i.length;h++){const f=i[h];t[f]=Gu(r,c,f,u[f],n,!Pe(u,f))}}return o}function Gu(n,e,t,s,r,i){const o=n[t];if(o!=null){const a=Pe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=r;if(t in u)s=u[t];else{const h=Go(r);s=u[t]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(t,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===js(t))&&(s=!0))}return s}const LR=new WeakMap;function Dy(n,e,t=!1){const s=t?LR:e.propsCache,r=s.get(n);if(r)return r;const i=n.props,o={},a=[];let c=!1;if(!fe(n)){const h=f=>{c=!0;const[m,g]=Dy(f,e,!0);ot(o,m),g&&a.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!i&&!c)return je(n)&&s.set(n,Hr),Hr;if(le(i))for(let h=0;h<i.length;h++){const f=an(i[h]);xp(f)&&(o[f]=Me)}else if(i)for(const h in i){const f=an(h);if(xp(f)){const m=i[h],g=o[f]=le(m)||fe(m)?{type:m}:ot({},m),I=g.type;let S=!1,P=!0;if(le(I))for(let V=0;V<I.length;++V){const F=I[V],D=fe(F)&&F.name;if(D==="Boolean"){S=!0;break}else D==="String"&&(P=!1)}else S=fe(I)&&I.name==="Boolean";g[0]=S,g[1]=P,(S||Pe(g,"default"))&&a.push(f)}}const u=[o,a];return je(n)&&s.set(n,u),u}function xp(n){return n[0]!=="$"&&!io(n)}const xy=n=>n[0]==="_"||n==="$stable",id=n=>le(n)?n.map(Pn):[Pn(n)],VR=(n,e,t)=>{if(e._n)return e;const s=ll((...r)=>id(e(...r)),t);return s._c=!1,s},My=(n,e,t)=>{const s=n._ctx;for(const r in n){if(xy(r))continue;const i=n[r];if(fe(i))e[r]=VR(r,i,s);else if(i!=null){const o=id(i);e[r]=()=>o}}},Ly=(n,e)=>{const t=id(e);n.slots.default=()=>t},Vy=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},FR=(n,e,t)=>{const s=n.slots=ky();if(n.vnode.shapeFlag&32){const r=e._;r?(Vy(s,e,t),t&&B_(s,"_",r,!0)):My(e,s)}else e&&Ly(n,e)},UR=(n,e,t)=>{const{vnode:s,slots:r}=n;let i=!0,o=Me;if(s.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:Vy(r,e,t):(i=!e.$stable,My(e,r)),o=e}else e&&(Ly(n,e),o={default:1});if(i)for(const a in r)!xy(a)&&o[a]==null&&delete r[a]},Kt=ZR;function BR(n){return $R(n)}function $R(n,e){const t=Xl();t.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:m,setScopeId:g=Mn,insertStaticContent:I}=n,S=(T,w,k,L=null,j=null,U=null,G=void 0,H=null,W=!!w.dynamicChildren)=>{if(T===w)return;T&&!Mr(T,w)&&(L=M(T),He(T,j,U,!0),T=null),w.patchFlag===-2&&(W=!1,w.dynamicChildren=null);const{type:q,ref:ie,shapeFlag:Y}=w;switch(q){case sc:P(T,w,k,L);break;case Ds:V(T,w,k,L);break;case ou:T==null&&F(w,k,L,G);break;case rt:R(T,w,k,L,j,U,G,H,W);break;default:Y&1?ee(T,w,k,L,j,U,G,H,W):Y&6?v(T,w,k,L,j,U,G,H,W):(Y&64||Y&128)&&q.process(T,w,k,L,j,U,G,H,W,ne)}ie!=null&&j&&cl(ie,T&&T.ref,U,w||T,!w)},P=(T,w,k,L)=>{if(T==null)s(w.el=a(w.children),k,L);else{const j=w.el=T.el;w.children!==T.children&&u(j,w.children)}},V=(T,w,k,L)=>{T==null?s(w.el=c(w.children||""),k,L):w.el=T.el},F=(T,w,k,L)=>{[T.el,T.anchor]=I(T.children,w,k,L,T.el,T.anchor)},D=({el:T,anchor:w},k,L)=>{let j;for(;T&&T!==w;)j=m(T),s(T,k,L),T=j;s(w,k,L)},x=({el:T,anchor:w})=>{let k;for(;T&&T!==w;)k=m(T),r(T),T=k;r(w)},ee=(T,w,k,L,j,U,G,H,W)=>{w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),T==null?te(w,k,L,j,U,G,H,W):E(T,w,j,U,G,H,W)},te=(T,w,k,L,j,U,G,H)=>{let W,q;const{props:ie,shapeFlag:Y,transition:se,dirs:ae}=T;if(W=T.el=o(T.type,U,ie&&ie.is,ie),Y&8?h(W,T.children):Y&16&&y(T.children,W,null,L,j,iu(T,U),G,H),ae&&tr(T,null,L,"created"),C(W,T,T.scopeId,G,L),ie){for(const me in ie)me!=="value"&&!io(me)&&i(W,me,null,ie[me],U,L);"value"in ie&&i(W,"value",null,ie.value,U),(q=ie.onVnodeBeforeMount)&&Cn(q,L,T)}ae&&tr(T,null,L,"beforeMount");const oe=jR(j,se);oe&&se.beforeEnter(W),s(W,w,k),((q=ie&&ie.onVnodeMounted)||oe||ae)&&Kt(()=>{q&&Cn(q,L,T),oe&&se.enter(W),ae&&tr(T,null,L,"mounted")},j)},C=(T,w,k,L,j)=>{if(k&&g(T,k),L)for(let U=0;U<L.length;U++)g(T,L[U]);if(j){let U=j.subTree;if(w===U||qy(U.type)&&(U.ssContent===w||U.ssFallback===w)){const G=j.vnode;C(T,G,G.scopeId,G.slotScopeIds,j.parent)}}},y=(T,w,k,L,j,U,G,H,W=0)=>{for(let q=W;q<T.length;q++){const ie=T[q]=H?ws(T[q]):Pn(T[q]);S(null,ie,w,k,L,j,U,G,H)}},E=(T,w,k,L,j,U,G)=>{const H=w.el=T.el;let{patchFlag:W,dynamicChildren:q,dirs:ie}=w;W|=T.patchFlag&16;const Y=T.props||Me,se=w.props||Me;let ae;if(k&&nr(k,!1),(ae=se.onVnodeBeforeUpdate)&&Cn(ae,k,w,T),ie&&tr(w,T,k,"beforeUpdate"),k&&nr(k,!0),(Y.innerHTML&&se.innerHTML==null||Y.textContent&&se.textContent==null)&&h(H,""),q?A(T.dynamicChildren,q,H,k,L,iu(w,j),U):G||_e(T,w,H,null,k,L,iu(w,j),U,!1),W>0){if(W&16)b(H,Y,se,k,j);else if(W&2&&Y.class!==se.class&&i(H,"class",null,se.class,j),W&4&&i(H,"style",Y.style,se.style,j),W&8){const oe=w.dynamicProps;for(let me=0;me<oe.length;me++){const Ie=oe[me],vt=Y[Ie],ht=se[Ie];(ht!==vt||Ie==="value")&&i(H,Ie,vt,ht,j,k)}}W&1&&T.children!==w.children&&h(H,w.children)}else!G&&q==null&&b(H,Y,se,k,j);((ae=se.onVnodeUpdated)||ie)&&Kt(()=>{ae&&Cn(ae,k,w,T),ie&&tr(w,T,k,"updated")},L)},A=(T,w,k,L,j,U,G)=>{for(let H=0;H<w.length;H++){const W=T[H],q=w[H],ie=W.el&&(W.type===rt||!Mr(W,q)||W.shapeFlag&70)?f(W.el):k;S(W,q,ie,null,L,j,U,G,!0)}},b=(T,w,k,L,j)=>{if(w!==k){if(w!==Me)for(const U in w)!io(U)&&!(U in k)&&i(T,U,w[U],null,j,L);for(const U in k){if(io(U))continue;const G=k[U],H=w[U];G!==H&&U!=="value"&&i(T,U,H,G,j,L)}"value"in k&&i(T,"value",w.value,k.value,j)}},R=(T,w,k,L,j,U,G,H,W)=>{const q=w.el=T?T.el:a(""),ie=w.anchor=T?T.anchor:a("");let{patchFlag:Y,dynamicChildren:se,slotScopeIds:ae}=w;ae&&(H=H?H.concat(ae):ae),T==null?(s(q,k,L),s(ie,k,L),y(w.children||[],k,ie,j,U,G,H,W)):Y>0&&Y&64&&se&&T.dynamicChildren?(A(T.dynamicChildren,se,k,j,U,G,H),(w.key!=null||j&&w===j.subTree)&&Fy(T,w,!0)):_e(T,w,k,ie,j,U,G,H,W)},v=(T,w,k,L,j,U,G,H,W)=>{w.slotScopeIds=H,T==null?w.shapeFlag&512?j.ctx.activate(w,k,L,G,W):Oe(w,k,L,j,U,G,W):st(T,w,W)},Oe=(T,w,k,L,j,U,G)=>{const H=T.component=oA(T,L,j);if(vy(T)&&(H.ctx.renderer=ne),aA(H,!1,G),H.asyncDep){if(j&&j.registerDep(H,We,G),!T.el){const W=H.subTree=Ye(Ds);V(null,W,w,k)}}else We(H,T,w,k,j,U,G)},st=(T,w,k)=>{const L=w.component=T.component;if(XR(T,w,k))if(L.asyncDep&&!L.asyncResolved){Te(L,w,k);return}else L.next=w,L.update();else w.el=T.el,L.vnode=w},We=(T,w,k,L,j,U,G)=>{const H=()=>{if(T.isMounted){let{next:Y,bu:se,u:ae,parent:oe,vnode:me}=T;{const Tt=Uy(T);if(Tt){Y&&(Y.el=me.el,Te(T,Y,G)),Tt.asyncDep.then(()=>{T.isUnmounted||H()});return}}let Ie=Y,vt;nr(T,!1),Y?(Y.el=me.el,Te(T,Y,G)):Y=me,se&&ja(se),(vt=Y.props&&Y.props.onVnodeBeforeUpdate)&&Cn(vt,oe,Y,me),nr(T,!0);const ht=Lp(T),en=T.subTree;T.subTree=ht,S(en,ht,f(en.el),M(en),T,j,U),Y.el=ht.el,Ie===null&&JR(T,ht.el),ae&&Kt(ae,j),(vt=Y.props&&Y.props.onVnodeUpdated)&&Kt(()=>Cn(vt,oe,Y,me),j)}else{let Y;const{el:se,props:ae}=w,{bm:oe,m:me,parent:Ie,root:vt,type:ht}=T,en=lo(w);nr(T,!1),oe&&ja(oe),!en&&(Y=ae&&ae.onVnodeBeforeMount)&&Cn(Y,Ie,w),nr(T,!0);{vt.ce&&vt.ce._injectChildStyle(ht);const Tt=T.subTree=Lp(T);S(null,Tt,k,L,T,j,U),w.el=Tt.el}if(me&&Kt(me,j),!en&&(Y=ae&&ae.onVnodeMounted)){const Tt=w;Kt(()=>Cn(Y,Ie,Tt),j)}(w.shapeFlag&256||Ie&&lo(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&T.a&&Kt(T.a,j),T.isMounted=!0,w=k=L=null}};T.scope.on();const W=T.effect=new K_(H);T.scope.off();const q=T.update=W.run.bind(W),ie=T.job=W.runIfDirty.bind(W);ie.i=T,ie.id=T.uid,W.scheduler=()=>nd(ie),nr(T,!0),q()},Te=(T,w,k)=>{w.component=T;const L=T.vnode.props;T.vnode=w,T.next=null,MR(T,w.props,L,k),UR(T,w.children,k),qs(),bp(T),Ws()},_e=(T,w,k,L,j,U,G,H,W=!1)=>{const q=T&&T.children,ie=T?T.shapeFlag:0,Y=w.children,{patchFlag:se,shapeFlag:ae}=w;if(se>0){if(se&128){un(q,Y,k,L,j,U,G,H,W);return}else if(se&256){Wt(q,Y,k,L,j,U,G,H,W);return}}ae&8?(ie&16&&Ut(q,j,U),Y!==q&&h(k,Y)):ie&16?ae&16?un(q,Y,k,L,j,U,G,H,W):Ut(q,j,U,!0):(ie&8&&h(k,""),ae&16&&y(Y,k,L,j,U,G,H,W))},Wt=(T,w,k,L,j,U,G,H,W)=>{T=T||Hr,w=w||Hr;const q=T.length,ie=w.length,Y=Math.min(q,ie);let se;for(se=0;se<Y;se++){const ae=w[se]=W?ws(w[se]):Pn(w[se]);S(T[se],ae,k,null,j,U,G,H,W)}q>ie?Ut(T,j,U,!0,!1,Y):y(w,k,L,j,U,G,H,W,Y)},un=(T,w,k,L,j,U,G,H,W)=>{let q=0;const ie=w.length;let Y=T.length-1,se=ie-1;for(;q<=Y&&q<=se;){const ae=T[q],oe=w[q]=W?ws(w[q]):Pn(w[q]);if(Mr(ae,oe))S(ae,oe,k,null,j,U,G,H,W);else break;q++}for(;q<=Y&&q<=se;){const ae=T[Y],oe=w[se]=W?ws(w[se]):Pn(w[se]);if(Mr(ae,oe))S(ae,oe,k,null,j,U,G,H,W);else break;Y--,se--}if(q>Y){if(q<=se){const ae=se+1,oe=ae<ie?w[ae].el:L;for(;q<=se;)S(null,w[q]=W?ws(w[q]):Pn(w[q]),k,oe,j,U,G,H,W),q++}}else if(q>se)for(;q<=Y;)He(T[q],j,U,!0),q++;else{const ae=q,oe=q,me=new Map;for(q=oe;q<=se;q++){const dt=w[q]=W?ws(w[q]):Pn(w[q]);dt.key!=null&&me.set(dt.key,q)}let Ie,vt=0;const ht=se-oe+1;let en=!1,Tt=0;const ps=new Array(ht);for(q=0;q<ht;q++)ps[q]=0;for(q=ae;q<=Y;q++){const dt=T[q];if(vt>=ht){He(dt,j,U,!0);continue}let tn;if(dt.key!=null)tn=me.get(dt.key);else for(Ie=oe;Ie<=se;Ie++)if(ps[Ie-oe]===0&&Mr(dt,w[Ie])){tn=Ie;break}tn===void 0?He(dt,j,U,!0):(ps[tn-oe]=q+1,tn>=Tt?Tt=tn:en=!0,S(dt,w[tn],k,null,j,U,G,H,W),vt++)}const Si=en?qR(ps):Hr;for(Ie=Si.length-1,q=ht-1;q>=0;q--){const dt=oe+q,tn=w[dt],ua=dt+1<ie?w[dt+1].el:L;ps[q]===0?S(null,tn,k,ua,j,U,G,H,W):en&&(Ie<0||q!==Si[Ie]?Zt(tn,k,ua,2):Ie--)}}},Zt=(T,w,k,L,j=null)=>{const{el:U,type:G,transition:H,children:W,shapeFlag:q}=T;if(q&6){Zt(T.component.subTree,w,k,L);return}if(q&128){T.suspense.move(w,k,L);return}if(q&64){G.move(T,w,k,ne);return}if(G===rt){s(U,w,k);for(let Y=0;Y<W.length;Y++)Zt(W[Y],w,k,L);s(T.anchor,w,k);return}if(G===ou){D(T,w,k);return}if(L!==2&&q&1&&H)if(L===0)H.beforeEnter(U),s(U,w,k),Kt(()=>H.enter(U),j);else{const{leave:Y,delayLeave:se,afterLeave:ae}=H,oe=()=>s(U,w,k),me=()=>{Y(U,()=>{oe(),ae&&ae()})};se?se(U,oe,me):me()}else s(U,w,k)},He=(T,w,k,L=!1,j=!1)=>{const{type:U,props:G,ref:H,children:W,dynamicChildren:q,shapeFlag:ie,patchFlag:Y,dirs:se,cacheIndex:ae}=T;if(Y===-2&&(j=!1),H!=null&&cl(H,null,k,T,!0),ae!=null&&(w.renderCache[ae]=void 0),ie&256){w.ctx.deactivate(T);return}const oe=ie&1&&se,me=!lo(T);let Ie;if(me&&(Ie=G&&G.onVnodeBeforeUnmount)&&Cn(Ie,w,T),ie&6)An(T.component,k,L);else{if(ie&128){T.suspense.unmount(k,L);return}oe&&tr(T,null,w,"beforeUnmount"),ie&64?T.type.remove(T,w,k,ne,L):q&&!q.hasOnce&&(U!==rt||Y>0&&Y&64)?Ut(q,w,k,!1,!0):(U===rt&&Y&384||!j&&ie&16)&&Ut(W,w,k),L&&Ke(T)}(me&&(Ie=G&&G.onVnodeUnmounted)||oe)&&Kt(()=>{Ie&&Cn(Ie,w,T),oe&&tr(T,null,w,"unmounted")},k)},Ke=T=>{const{type:w,el:k,anchor:L,transition:j}=T;if(w===rt){fs(k,L);return}if(w===ou){x(T);return}const U=()=>{r(k),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(T.shapeFlag&1&&j&&!j.persisted){const{leave:G,delayLeave:H}=j,W=()=>G(k,U);H?H(T.el,U,W):W()}else U()},fs=(T,w)=>{let k;for(;T!==w;)k=m(T),r(T),T=k;r(w)},An=(T,w,k)=>{const{bum:L,scope:j,job:U,subTree:G,um:H,m:W,a:q}=T;Mp(W),Mp(q),L&&ja(L),j.stop(),U&&(U.flags|=8,He(G,T,w,k)),H&&Kt(H,w),Kt(()=>{T.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ut=(T,w,k,L=!1,j=!1,U=0)=>{for(let G=U;G<T.length;G++)He(T[G],w,k,L,j)},M=T=>{if(T.shapeFlag&6)return M(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const w=m(T.anchor||T.el),k=w&&w[uR];return k?m(k):w};let X=!1;const Q=(T,w,k)=>{T==null?w._vnode&&He(w._vnode,null,null,!0):S(w._vnode||null,T,w,null,null,null,k),w._vnode=T,X||(X=!0,bp(),py(),X=!1)},ne={p:S,um:He,m:Zt,r:Ke,mt:Oe,mc:y,pc:_e,pbc:A,n:M,o:n};return{render:Q,hydrate:void 0,createApp:DR(Q)}}function iu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function nr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function jR(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Fy(n,e,t=!1){const s=n.children,r=e.children;if(le(s)&&le(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ws(r[i]),a.el=o.el),!t&&a.patchFlag!==-2&&Fy(o,a)),a.type===sc&&(a.el=o.el)}}function qR(n){const e=n.slice(),t=[0];let s,r,i,o,a;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(r=t[t.length-1],n[r]<u){e[s]=r,t.push(s);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[s]=t[i-1]),t[i]=s)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function Uy(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Uy(e)}function Mp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const WR=Symbol.for("v-scx"),HR=()=>Yt(WR);function uo(n,e,t){return By(n,e,t)}function By(n,e,t=Me){const{immediate:s,deep:r,flush:i,once:o}=t,a=ot({},t),c=e&&s||!e&&i!=="post";let u;if(Po){if(i==="sync"){const g=HR();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Mn,g.resume=Mn,g.pause=Mn,g}}const h=mt;a.call=(g,I,S)=>vn(g,h,I,S);let f=!1;i==="post"?a.scheduler=g=>{Kt(g,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,I)=>{I?g():nd(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=oR(n,e,a);return Po&&(u?u.push(m):c&&m()),m}function KR(n,e,t){const s=this.proxy,r=Je(n)?n.includes(".")?$y(s,n):()=>s[n]:n.bind(s,s);let i;fe(e)?i=e:(i=e.handler,t=e);const o=Go(this),a=By(r,i.bind(s),t);return o(),a}function $y(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const GR=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${an(e)}Modifiers`]||n[`${js(e)}Modifiers`];function zR(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||Me;let r=t;const i=e.startsWith("update:"),o=i&&GR(s,e.slice(7));o&&(o.trim&&(r=t.map(h=>Je(h)?h.trim():h)),o.number&&(r=t.map(Vu)));let a,c=s[a=Zc(e)]||s[a=Zc(an(e))];!c&&i&&(c=s[a=Zc(js(e))]),c&&vn(c,n,6,r);const u=s[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,vn(u,n,6,r)}}function jy(n,e,t=!1){const s=e.emitsCache,r=s.get(n);if(r!==void 0)return r;const i=n.emits;let o={},a=!1;if(!fe(n)){const c=u=>{const h=jy(u,e,!0);h&&(a=!0,ot(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(je(n)&&s.set(n,null),null):(le(i)?i.forEach(c=>o[c]=null):ot(o,i),je(n)&&s.set(n,o),o)}function nc(n,e){return!n||!Gl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(n,e[0].toLowerCase()+e.slice(1))||Pe(n,js(e))||Pe(n,e))}function Lp(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:m,setupState:g,ctx:I,inheritAttrs:S}=n,P=al(n);let V,F;try{if(t.shapeFlag&4){const x=r||s,ee=x;V=Pn(u.call(ee,x,h,f,g,m,I)),F=a}else{const x=e;V=Pn(x.length>1?x(f,{attrs:a,slots:o,emit:c}):x(f,null)),F=e.props?a:QR(a)}}catch(x){ho.length=0,ec(x,n,1),V=Ye(Ds)}let D=V;if(F&&S!==!1){const x=Object.keys(F),{shapeFlag:ee}=D;x.length&&ee&7&&(i&&x.some(Hh)&&(F=YR(F,i)),D=fr(D,F,!1,!0))}return t.dirs&&(D=fr(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&Co(D,t.transition),V=D,al(P),V}const QR=n=>{let e;for(const t in n)(t==="class"||t==="style"||Gl(t))&&((e||(e={}))[t]=n[t]);return e},YR=(n,e)=>{const t={};for(const s in n)(!Hh(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function XR(n,e,t){const{props:s,children:r,component:i}=n,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?Vp(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const m=h[f];if(o[m]!==s[m]&&!nc(u,m))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Vp(s,o,u):!0:!!o;return!1}function Vp(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==n[i]&&!nc(t,i))return!0}return!1}function JR({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const qy=n=>n.__isSuspense;function ZR(n,e){e&&e.pendingBranch?le(n)?e.effects.push(...n):e.effects.push(n):cR(n)}const rt=Symbol.for("v-fgt"),sc=Symbol.for("v-txt"),Ds=Symbol.for("v-cmt"),ou=Symbol.for("v-stc"),ho=[];let zt=null;function Qe(n=!1){ho.push(zt=n?null:[])}function eA(){ho.pop(),zt=ho[ho.length-1]||null}let bo=1;function Fp(n,e=!1){bo+=n,n<0&&zt&&e&&(zt.hasOnce=!0)}function Wy(n){return n.dynamicChildren=bo>0?zt||Hr:null,eA(),bo>0&&zt&&zt.push(n),n}function et(n,e,t,s,r,i){return Wy(he(n,e,t,s,r,i,!0))}function Hy(n,e,t,s,r){return Wy(Ye(n,e,t,s,r,!0))}function hl(n){return n?n.__v_isVNode===!0:!1}function Mr(n,e){return n.type===e.type&&n.key===e.key}const Ky=({key:n})=>n??null,Ha=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Je(n)||yt(n)||fe(n)?{i:qt,r:n,k:e,f:!!t}:n:null);function he(n,e=null,t=null,s=0,r=null,i=n===rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ky(e),ref:e&&Ha(e),scopeId:gy,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:qt};return a?(od(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Je(t)?8:16),bo>0&&!o&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const Ye=tA;function tA(n,e=null,t=null,s=0,r=null,i=!1){if((!n||n===RR)&&(n=Ds),hl(n)){const a=fr(n,e,!0);return t&&od(a,t),bo>0&&!i&&zt&&(a.shapeFlag&6?zt[zt.indexOf(n)]=a:zt.push(a)),a.patchFlag=-2,a}if(dA(n)&&(n=n.__vccOpts),e){e=nA(e);let{class:a,style:c}=e;a&&!Je(a)&&(e.class=Gr(a)),je(c)&&(td(c)&&!le(c)&&(c=ot({},c)),e.style=zh(c))}const o=Je(n)?1:qy(n)?128:hR(n)?64:je(n)?4:fe(n)?2:0;return he(n,e,t,s,r,o,i,!0)}function nA(n){return n?td(n)||Ny(n)?ot({},n):n:null}function fr(n,e,t=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=n,u=e?sA(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Ky(u),ref:e&&e.ref?t&&i?le(i)?i.concat(Ha(e)):[i,Ha(e)]:Ha(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fr(n.ssContent),ssFallback:n.ssFallback&&fr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&Co(h,c.clone(h)),h}function So(n=" ",e=0){return Ye(sc,null,n,e)}function Gy(n="",e=!1){return e?(Qe(),Hy(Ds,null,n)):Ye(Ds,null,n)}function Pn(n){return n==null||typeof n=="boolean"?Ye(Ds):le(n)?Ye(rt,null,n.slice()):hl(n)?ws(n):Ye(sc,null,String(n))}function ws(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fr(n)}function od(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(le(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),od(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ny(e)?e._ctx=qt:r===3&&qt&&(qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:qt},t=32):(e=String(e),s&64?(t=16,e=[So(e)]):t=8);n.children=e,n.shapeFlag|=t}function sA(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Gr([e.class,s.class]));else if(r==="style")e.style=zh([e.style,s.style]);else if(Gl(r)){const i=e[r],o=s[r];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Cn(n,e,t,s=null){vn(n,e,7,[t,s])}const rA=Sy();let iA=0;function oA(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||rA,i={uid:iA++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new W_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dy(s,r),emitsOptions:jy(s,r),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:s.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=zR.bind(null,i),n.ce&&n.ce(i),i}let mt=null;const ad=()=>mt||qt;let dl,zu;{const n=Xl(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};dl=e("__VUE_INSTANCE_SETTERS__",t=>mt=t),zu=e("__VUE_SSR_SETTERS__",t=>Po=t)}const Go=n=>{const e=mt;return dl(n),n.scope.on(),()=>{n.scope.off(),dl(e)}},Up=()=>{mt&&mt.scope.off(),dl(null)};function zy(n){return n.vnode.shapeFlag&4}let Po=!1;function aA(n,e=!1,t=!1){e&&zu(e);const{props:s,children:r}=n.vnode,i=zy(n);xR(n,s,i,e),FR(n,r,t);const o=i?lA(n,e):void 0;return e&&zu(!1),o}function lA(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,CR);const{setup:s}=t;if(s){qs();const r=n.setupContext=s.length>1?uA(n):null,i=Go(n),o=Ko(s,n,0,[n.props,r]),a=V_(o);if(Ws(),i(),(a||n.sp)&&!lo(n)&&Ey(n),a){if(o.then(Up,Up),e)return o.then(c=>{Bp(n,c)}).catch(c=>{ec(c,n,0)});n.asyncDep=o}else Bp(n,o)}else Qy(n)}function Bp(n,e,t){fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:je(e)&&(n.setupState=uy(e)),Qy(n)}function Qy(n,e,t){const s=n.type;n.render||(n.render=s.render||Mn);{const r=Go(n);qs();try{bR(n)}finally{Ws(),r()}}}const cA={get(n,e){return Ct(n,"get",""),n[e]}};function uA(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,cA),slots:n.slots,emit:n.emit,expose:e}}function rc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(uy(eR(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in co)return co[t](n)},has(e,t){return t in e||t in co}})):n.proxy}function hA(n,e=!0){return fe(n)?n.displayName||n.name:n.name||e&&n.__name}function dA(n){return fe(n)&&"__vccOpts"in n}const dn=(n,e)=>rR(n,e,Po);function Yy(n,e,t){const s=arguments.length;return s===2?je(e)&&!le(e)?hl(e)?Ye(n,null,[e]):Ye(n,e):Ye(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&hl(t)&&(t=[t]),Ye(n,e,t))}const fA="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qu;const $p=typeof window<"u"&&window.trustedTypes;if($p)try{Qu=$p.createPolicy("vue",{createHTML:n=>n})}catch{}const Xy=Qu?n=>Qu.createHTML(n):n=>n,pA="http://www.w3.org/2000/svg",mA="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,jp=Yn&&Yn.createElement("template"),gA={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?Yn.createElementNS(pA,n):e==="mathml"?Yn.createElementNS(mA,n):t?Yn.createElement(n,{is:t}):Yn.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,i){const o=t?t.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{jp.innerHTML=Xy(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const a=jp.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ys="transition",ji="animation",si=Symbol("_vtc"),Jy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_A=ot({},fR,Jy),sr=(n,e=[])=>{le(n)?n.forEach(t=>t(...e)):n&&n(...e)},qp=n=>n?le(n)?n.some(e=>e.length>1):n.length>1:!1;function yA(n){const e={};for(const R in n)R in Jy||(e[R]=n[R]);if(n.css===!1)return e;const{name:t="v",type:s,duration:r,enterFromClass:i=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:g=`${t}-leave-to`}=n,I=EA(r),S=I&&I[0],P=I&&I[1],{onBeforeEnter:V,onEnter:F,onEnterCancelled:D,onLeave:x,onLeaveCancelled:ee,onBeforeAppear:te=V,onAppear:C=F,onAppearCancelled:y=D}=e,E=(R,v,Oe,st)=>{R._enterCancelled=st,Ts(R,v?h:a),Ts(R,v?u:o),Oe&&Oe()},A=(R,v)=>{R._isLeaving=!1,Ts(R,f),Ts(R,g),Ts(R,m),v&&v()},b=R=>(v,Oe)=>{const st=R?C:F,We=()=>E(v,R,Oe);sr(st,[v,We]),Wp(()=>{Ts(v,R?c:i),bn(v,R?h:a),qp(st)||Hp(v,s,S,We)})};return ot(e,{onBeforeEnter(R){sr(V,[R]),bn(R,i),bn(R,o)},onBeforeAppear(R){sr(te,[R]),bn(R,c),bn(R,u)},onEnter:b(!1),onAppear:b(!0),onLeave(R,v){R._isLeaving=!0;const Oe=()=>A(R,v);bn(R,f),R._enterCancelled?(bn(R,m),Yu()):(Yu(),bn(R,m)),Wp(()=>{R._isLeaving&&(Ts(R,f),bn(R,g),qp(x)||Hp(R,s,P,Oe))}),sr(x,[R,Oe])},onEnterCancelled(R){E(R,!1,void 0,!0),sr(D,[R])},onAppearCancelled(R){E(R,!0,void 0,!0),sr(y,[R])},onLeaveCancelled(R){A(R),sr(ee,[R])}})}function EA(n){if(n==null)return null;if(je(n))return[au(n.enter),au(n.leave)];{const e=au(n);return[e,e]}}function au(n){return bw(n)}function bn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[si]||(n[si]=new Set)).add(e)}function Ts(n,e){e.split(/\s+/).forEach(s=>s&&n.classList.remove(s));const t=n[si];t&&(t.delete(e),t.size||(n[si]=void 0))}function Wp(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let vA=0;function Hp(n,e,t,s){const r=n._endId=++vA,i=()=>{r===n._endId&&s()};if(t!=null)return setTimeout(i,t);const{type:o,timeout:a,propCount:c}=Zy(n,e);if(!o)return s();const u=o+"end";let h=0;const f=()=>{n.removeEventListener(u,m),i()},m=g=>{g.target===n&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),n.addEventListener(u,m)}function Zy(n,e){const t=window.getComputedStyle(n),s=I=>(t[I]||"").split(", "),r=s(`${ys}Delay`),i=s(`${ys}Duration`),o=Kp(r,i),a=s(`${ji}Delay`),c=s(`${ji}Duration`),u=Kp(a,c);let h=null,f=0,m=0;e===ys?o>0&&(h=ys,f=o,m=i.length):e===ji?u>0&&(h=ji,f=u,m=c.length):(f=Math.max(o,u),h=f>0?o>u?ys:ji:null,m=h?h===ys?i.length:c.length:0);const g=h===ys&&/\b(transform|all)(,|$)/.test(s(`${ys}Property`).toString());return{type:h,timeout:f,propCount:m,hasTransform:g}}function Kp(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,s)=>Gp(t)+Gp(n[s])))}function Gp(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Yu(){return document.body.offsetHeight}function TA(n,e,t){const s=n[si];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const zp=Symbol("_vod"),IA=Symbol("_vsh"),wA=Symbol(""),RA=/(^|;)\s*display\s*:/;function AA(n,e,t){const s=n.style,r=Je(t);let i=!1;if(t&&!r){if(e)if(Je(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ka(s,a,"")}else for(const o in e)t[o]==null&&Ka(s,o,"");for(const o in t)o==="display"&&(i=!0),Ka(s,o,t[o])}else if(r){if(e!==t){const o=s[wA];o&&(t+=";"+o),s.cssText=t,i=RA.test(t)}}else e&&n.removeAttribute("style");zp in n&&(n[zp]=i?s.display:"",n[IA]&&(s.display="none"))}const Qp=/\s*!important$/;function Ka(n,e,t){if(le(t))t.forEach(s=>Ka(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=CA(n,e);Qp.test(t)?n.setProperty(js(s),t.replace(Qp,""),"important"):n[s]=t}}const Yp=["Webkit","Moz","ms"],lu={};function CA(n,e){const t=lu[e];if(t)return t;let s=an(e);if(s!=="filter"&&s in n)return lu[e]=s;s=Yl(s);for(let r=0;r<Yp.length;r++){const i=Yp[r]+s;if(i in n)return lu[e]=i}return e}const Xp="http://www.w3.org/1999/xlink";function Jp(n,e,t,s,r,i=Dw(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Xp,e.slice(6,e.length)):n.setAttributeNS(Xp,e,t):t==null||i&&!$_(t)?n.removeAttribute(e):n.setAttribute(e,i?"":$s(t)?String(t):t)}function Zp(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Xy(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=$_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Lr(n,e,t,s){n.addEventListener(e,t,s)}function bA(n,e,t,s){n.removeEventListener(e,t,s)}const em=Symbol("_vei");function SA(n,e,t,s,r=null){const i=n[em]||(n[em]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=PA(e);if(s){const u=i[e]=OA(s,r);Lr(n,a,u,c)}else o&&(bA(n,a,o,c),i[e]=void 0)}}const tm=/(?:Once|Passive|Capture)$/;function PA(n){let e;if(tm.test(n)){e={};let s;for(;s=n.match(tm);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):js(n.slice(2)),e]}let cu=0;const kA=Promise.resolve(),NA=()=>cu||(kA.then(()=>cu=0),cu=Date.now());function OA(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;vn(DA(s,t.value),e,5,[s])};return t.value=n,t.attached=NA(),t}function DA(n,e){if(le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const nm=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,xA=(n,e,t,s,r,i)=>{const o=r==="svg";e==="class"?TA(n,s,o):e==="style"?AA(n,t,s):Gl(e)?Hh(e)||SA(n,e,t,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):MA(n,e,s,o))?(Zp(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jp(n,e,s,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Je(s))?Zp(n,an(e),s,i,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),Jp(n,e,s,o))};function MA(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&nm(e)&&fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return nm(e)&&Je(t)?!1:e in n}const eE=new WeakMap,tE=new WeakMap,fl=Symbol("_moveCb"),sm=Symbol("_enterCb"),LA=n=>(delete n.props.mode,n),VA=LA({name:"TransitionGroup",props:ot({},_A,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=ad(),s=dR();let r,i;return Iy(()=>{if(!r.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!jA(r[0].el,t.vnode.el,o))return;r.forEach(UA),r.forEach(BA);const a=r.filter($A);Yu(),a.forEach(c=>{const u=c.el,h=u.style;bn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const f=u[fl]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",f),u[fl]=null,Ts(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=Se(n),a=yA(o);let c=o.tag||rt;if(r=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(r.push(h),Co(h,qu(h,a,s,t)),eE.set(h,h.el.getBoundingClientRect()))}i=e.default?_y(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&Co(h,qu(h,a,s,t))}return Ye(c,null,i)}}}),FA=VA;function UA(n){const e=n.el;e[fl]&&e[fl](),e[sm]&&e[sm]()}function BA(n){tE.set(n,n.el.getBoundingClientRect())}function $A(n){const e=eE.get(n),t=tE.get(n),s=e.left-t.left,r=e.top-t.top;if(s||r){const i=n.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",n}}function jA(n,e,t){const s=n.cloneNode(),r=n[si];r&&r.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),t.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:o}=Zy(s);return i.removeChild(s),o}const rm=n=>{const e=n.props["onUpdate:modelValue"]||!1;return le(e)?t=>ja(e,t):e};function qA(n){n.target.composing=!0}function im(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const uu=Symbol("_assign"),Ga={created(n,{modifiers:{lazy:e,trim:t,number:s}},r){n[uu]=rm(r);const i=s||r.props&&r.props.type==="number";Lr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=Vu(a)),n[uu](a)}),t&&Lr(n,"change",()=>{n.value=n.value.trim()}),e||(Lr(n,"compositionstart",qA),Lr(n,"compositionend",im),Lr(n,"change",im))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:r,number:i}},o){if(n[uu]=rm(o),n.composing)return;const a=(i||n.type==="number")&&!/^0\d/.test(n.value)?Vu(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(s&&e===t||r&&n.value.trim()===c)||(n.value=c))}},WA=["ctrl","shift","alt","meta"],HA={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>WA.some(t=>n[`${t}Key`]&&!e.includes(t))},KA=(n,e)=>{const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=HA[e[o]];if(a&&a(r,e))return}return n(r,...i)})},GA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zA=(n,e)=>{const t=n._withKeys||(n._withKeys={}),s=e.join(".");return t[s]||(t[s]=r=>{if(!("key"in r))return;const i=js(r.key);if(e.some(o=>o===i||GA[o]===i))return n(r)})},QA=ot({patchProp:xA},gA);let om;function YA(){return om||(om=BR(QA))}const XA=(...n)=>{const e=YA().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=ZA(s);if(!r)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,JA(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function JA(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ZA(n){return Je(n)?document.querySelector(n):n}var am={};/**
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
 */const nE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const z=function(n,e){if(!n)throw gi(e)},gi=function(n){return new Error("Firebase Database ("+nE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const sE=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},eC=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),s.push(t[h],t[f],t[m],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sE(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):eC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw new tC;const m=i<<2|a>>4;if(s.push(m),u!==64){const g=a<<4&240|u>>2;if(s.push(g),f!==64){const I=u<<6&192|f;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rE=function(n){const e=sE(n);return ic.encodeByteArray(e,!0)},pl=function(n){return rE(n).replace(/\./g,"")},ml=function(n){try{return ic.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nC(n){return iE(void 0,n)}function iE(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!sC(t)||(n[t]=iE(n[t],e[t]));return n}function sC(n){return n!=="__proto__"}/**
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
 */function rC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iC=()=>rC().__FIREBASE_DEFAULTS__,oC=()=>{if(typeof process>"u"||typeof am>"u")return;const n=am.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},aC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ml(n[1]);return e&&JSON.parse(e)},oc=()=>{try{return iC()||oC()||aC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lC=n=>{var e,t;return(t=(e=oc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cC=n=>{const e=lC(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},oE=()=>{var n;return(n=oc())===null||n===void 0?void 0:n.config},uC=n=>{var e;return(e=oc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ko{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function hC(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pl(JSON.stringify(t)),pl(JSON.stringify(o)),""].join(".")}/**
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
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function dC(){var n;const e=(n=oc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pC(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function aE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mC(){const n=Dt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gC(){return nE.NODE_ADMIN===!0}function _C(){return!dC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lE(){try{return typeof indexedDB=="object"}catch{return!1}}function yC(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const EC="FirebaseError";class qn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=EC,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?vC(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new qn(r,a,s)}}function vC(n,e){return n.replace(TC,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const TC=/\{\$([^}]+)}/g;/**
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
 */function No(n){return JSON.parse(n)}function gt(n){return JSON.stringify(n)}/**
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
 */const cE=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=No(ml(i[0])||""),t=No(ml(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:r}},IC=function(n){const e=cE(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},wC=function(n){const e=cE(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ds(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ri(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Xu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gl(n,e,t){const s={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=e.call(t,n[r],r,n));return s}function _l(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(lm(i)&&lm(o)){if(!_l(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function lm(n){return n!==null&&typeof n=="object"}/**
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
 */function yi(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Yi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Xi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class RC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const m=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(m<<1|m>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const m=(r<<5|r>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=m}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function AC(n,e){const t=new CC(n,e);return t.subscribe.bind(t)}class CC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");bC(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=hu),r.error===void 0&&(r.error=hu),r.complete===void 0&&(r.complete=hu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bC(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function hu(){}function SC(n,e){return`${n} failed: ${e} argument `}/**
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
 */const PC=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,z(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},ac=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ut(n){return n&&n._delegate?n._delegate:n}class Tn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class kC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ko;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OC(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:NC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NC(n){return n===ir?void 0:n}function OC(n){return n.instantiationMode==="EAGER"}/**
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
 */class DC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const xC={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},MC=ge.INFO,LC={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},VC=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=LC[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zo{constructor(e){this.name=e,this._logLevel=MC,this._logHandler=VC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const FC=(n,e)=>e.some(t=>n instanceof t);let cm,um;function UC(){return cm||(cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BC(){return um||(um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uE=new WeakMap,Ju=new WeakMap,hE=new WeakMap,du=new WeakMap,cd=new WeakMap;function $C(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Ps(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&uE.set(t,n)}).catch(()=>{}),cd.set(e,n),e}function jC(n){if(Ju.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ju.set(n,e)}let Zu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ju.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hE.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ps(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qC(n){Zu=n(Zu)}function WC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(fu(this),e,...t);return hE.set(s,e.sort?e.sort():[e]),Ps(s)}:BC().includes(n)?function(...e){return n.apply(fu(this),e),Ps(uE.get(this))}:function(...e){return Ps(n.apply(fu(this),e))}}function HC(n){return typeof n=="function"?WC(n):(n instanceof IDBTransaction&&jC(n),FC(n,UC())?new Proxy(n,Zu):n)}function Ps(n){if(n instanceof IDBRequest)return $C(n);if(du.has(n))return du.get(n);const e=HC(n);return e!==n&&(du.set(n,e),cd.set(e,n)),e}const fu=n=>cd.get(n);function KC(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=Ps(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ps(o.result),c.oldVersion,c.newVersion,Ps(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const GC=["get","getKey","getAll","getAllKeys","count"],zC=["put","add","delete","clear"],pu=new Map;function hm(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(pu.get(e))return pu.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=zC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||GC.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return pu.set(e,i),i}qC(n=>({...n,get:(e,t,s)=>hm(e,t)||n.get(e,t,s),has:(e,t)=>!!hm(e,t)||n.has(e,t)}));/**
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
 */class QC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(YC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function YC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eh="@firebase/app",dm="0.10.17";/**
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
 */const as=new zo("@firebase/app"),XC="@firebase/app-compat",JC="@firebase/analytics-compat",ZC="@firebase/analytics",eb="@firebase/app-check-compat",tb="@firebase/app-check",nb="@firebase/auth",sb="@firebase/auth-compat",rb="@firebase/database",ib="@firebase/data-connect",ob="@firebase/database-compat",ab="@firebase/functions",lb="@firebase/functions-compat",cb="@firebase/installations",ub="@firebase/installations-compat",hb="@firebase/messaging",db="@firebase/messaging-compat",fb="@firebase/performance",pb="@firebase/performance-compat",mb="@firebase/remote-config",gb="@firebase/remote-config-compat",_b="@firebase/storage",yb="@firebase/storage-compat",Eb="@firebase/firestore",vb="@firebase/vertexai",Tb="@firebase/firestore-compat",Ib="firebase",wb="11.1.0";/**
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
 */const th="[DEFAULT]",Rb={[eh]:"fire-core",[XC]:"fire-core-compat",[ZC]:"fire-analytics",[JC]:"fire-analytics-compat",[tb]:"fire-app-check",[eb]:"fire-app-check-compat",[nb]:"fire-auth",[sb]:"fire-auth-compat",[rb]:"fire-rtdb",[ib]:"fire-data-connect",[ob]:"fire-rtdb-compat",[ab]:"fire-fn",[lb]:"fire-fn-compat",[cb]:"fire-iid",[ub]:"fire-iid-compat",[hb]:"fire-fcm",[db]:"fire-fcm-compat",[fb]:"fire-perf",[pb]:"fire-perf-compat",[mb]:"fire-rc",[gb]:"fire-rc-compat",[_b]:"fire-gcs",[yb]:"fire-gcs-compat",[Eb]:"fire-fst",[Tb]:"fire-fst-compat",[vb]:"fire-vertex","fire-js":"fire-js",[Ib]:"fire-js-all"};/**
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
 */const yl=new Map,Ab=new Map,nh=new Map;function fm(n,e){try{n.container.addComponent(e)}catch(t){as.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bn(n){const e=n.name;if(nh.has(e))return as.debug(`There were multiple attempts to register component ${e}.`),!1;nh.set(e,n);for(const t of yl.values())fm(t,n);for(const t of Ab.values())fm(t,n);return!0}function dE(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fn(n){return n.settings!==void 0}/**
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
 */const Cb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ks=new _i("app","Firebase",Cb);/**
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
 */class bb{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ks.create("app-deleted",{appName:this._name})}}/**
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
 */const Hs=wb;function fE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:th,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw ks.create("bad-app-name",{appName:String(r)});if(t||(t=oE()),!t)throw ks.create("no-options");const i=yl.get(r);if(i){if(_l(t,i.options)&&_l(s,i.config))return i;throw ks.create("duplicate-app",{appName:r})}const o=new DC(r);for(const c of nh.values())o.addComponent(c);const a=new bb(t,s,o);return yl.set(r,a),a}function pE(n=th){const e=yl.get(n);if(!e&&n===th&&oE())return fE();if(!e)throw ks.create("no-app",{appName:n});return e}function Xt(n,e,t){var s;let r=(s=Rb[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),as.warn(a.join(" "));return}Bn(new Tn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Sb="firebase-heartbeat-database",Pb=1,Oo="firebase-heartbeat-store";let mu=null;function mE(){return mu||(mu=KC(Sb,Pb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Oo)}catch(t){console.warn(t)}}}}).catch(n=>{throw ks.create("idb-open",{originalErrorMessage:n.message})})),mu}async function kb(n){try{const t=(await mE()).transaction(Oo),s=await t.objectStore(Oo).get(gE(n));return await t.done,s}catch(e){if(e instanceof qn)as.warn(e.message);else{const t=ks.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});as.warn(t.message)}}}async function pm(n,e){try{const s=(await mE()).transaction(Oo,"readwrite");await s.objectStore(Oo).put(e,gE(n)),await s.done}catch(t){if(t instanceof qn)as.warn(t.message);else{const s=ks.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});as.warn(s.message)}}}function gE(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Nb=1024,Ob=30*24*60*60*1e3;class Db{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Mb(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ob}),this._storage.overwrite(this._heartbeatsCache))}catch(s){as.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mm(),{heartbeatsToSend:s,unsentEntries:r}=xb(this._heartbeatsCache.heartbeats),i=pl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return as.warn(t),""}}}function mm(){return new Date().toISOString().substring(0,10)}function xb(n,e=Nb){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),gm(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),gm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Mb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lE()?yC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return pm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return pm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gm(n){return pl(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Lb(n){Bn(new Tn("platform-logger",e=>new QC(e),"PRIVATE")),Bn(new Tn("heartbeat",e=>new Db(e),"PRIVATE")),Xt(eh,dm,n),Xt(eh,dm,"esm2017"),Xt("fire-js","")}Lb("");function ud(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function _E(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vb=_E,yE=new _i("auth","Firebase",_E());/**
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
 */const El=new zo("@firebase/auth");function Fb(n,...e){El.logLevel<=ge.WARN&&El.warn(`Auth (${Hs}): ${n}`,...e)}function za(n,...e){El.logLevel<=ge.ERROR&&El.error(`Auth (${Hs}): ${n}`,...e)}/**
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
 */function ln(n,...e){throw dd(n,...e)}function _n(n,...e){return dd(n,...e)}function hd(n,e,t){const s=Object.assign(Object.assign({},Vb()),{[e]:t});return new _i("auth","Firebase",s).create(e,{appName:n.name})}function rs(n){return hd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ub(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ln(n,"argument-error"),hd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dd(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return yE.create(n,...e)}function ue(n,e,...t){if(!n)throw dd(e,...t)}function es(n){const e="INTERNAL ASSERTION FAILED: "+n;throw za(e),new Error(e)}function ls(n,e){n||es(e)}/**
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
 */function sh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Bb(){return _m()==="http:"||_m()==="https:"}function _m(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function $b(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bb()||pC()||"connection"in navigator)?navigator.onLine:!0}function jb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Qo{constructor(e,t){this.shortDelay=e,this.longDelay=t,ls(t>e,"Short delay should be less than long delay!"),this.isMobile=ld()||aE()}get(){return $b()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fd(n,e){ls(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class EE{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;es("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;es("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;es("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Wb=new Qo(3e4,6e4);function Ks(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Gs(n,e,t,s,r={}){return vE(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=yi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return fC()||(u.referrerPolicy="no-referrer"),EE.fetch()(TE(n,n.config.apiHost,t,a),u)})}async function vE(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},qb),e);try{const r=new Kb(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ka(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ka(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ka(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ka(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hd(n,h,u);ln(n,h)}}catch(r){if(r instanceof qn)throw r;ln(n,"network-request-failed",{message:String(r)})}}async function Yo(n,e,t,s,r={}){const i=await Gs(n,e,t,s,r);return"mfaPendingCredential"in i&&ln(n,"multi-factor-auth-required",{_serverResponse:i}),i}function TE(n,e,t,s){const r=`${e}${t}?${s}`;return n.config.emulator?fd(n.config,r):`${n.config.apiScheme}://${r}`}function Hb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Kb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(_n(this.auth,"network-request-failed")),Wb.get())})}}function ka(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=_n(n,e,s);return r.customData._tokenResponse=t,r}function ym(n){return n!==void 0&&n.enterprise!==void 0}class Gb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Hb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zb(n,e){return Gs(n,"GET","/v2/recaptchaConfig",Ks(n,e))}/**
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
 */async function Qb(n,e){return Gs(n,"POST","/v1/accounts:delete",e)}async function IE(n,e){return Gs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yb(n,e=!1){const t=ut(n),s=await t.getIdToken(e),r=pd(s);ue(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:fo(gu(r.auth_time)),issuedAtTime:fo(gu(r.iat)),expirationTime:fo(gu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gu(n){return Number(n)*1e3}function pd(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return za("JWT malformed, contained fewer than 3 sections"),null;try{const r=ml(t);return r?JSON.parse(r):(za("Failed to decode base64 JWT payload"),null)}catch(r){return za("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Em(n){const e=pd(n);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Do(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof qn&&Xb(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Xb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Jb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vl(n){var e;const t=n.auth,s=await n.getIdToken(),r=await Do(n,IE(t,{idToken:s}));ue(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wE(i.providerUserInfo):[],a=eS(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new rh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Zb(n){const e=ut(n);await vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eS(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function wE(n){return n.map(e=>{var{providerId:t}=e,s=ud(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function tS(n,e){const t=await vE(n,{},async()=>{const s=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=TE(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",EE.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function nS(n,e){return Gs(n,"POST","/v2/accounts:revokeToken",Ks(n,e))}/**
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
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Em(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const t=Em(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await tS(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new Xr;return s&&(ue(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ue(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return es("not implemented")}}/**
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
 */function Es(n,e){ue(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ts{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=ud(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Do(this,this.stsTokenManager.getToken(this.auth,e));return ue(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Yb(this,e)}reload(){return Zb(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ts(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await vl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(rs(this.auth));const e=await this.getIdToken();return await Do(this,Qb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,a,c,u,h;const f=(s=t.displayName)!==null&&s!==void 0?s:void 0,m=(r=t.email)!==null&&r!==void 0?r:void 0,g=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=t.photoURL)!==null&&o!==void 0?o:void 0,S=(a=t.tenantId)!==null&&a!==void 0?a:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,V=(u=t.createdAt)!==null&&u!==void 0?u:void 0,F=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:x,isAnonymous:ee,providerData:te,stsTokenManager:C}=t;ue(D&&C,e,"internal-error");const y=Xr.fromJSON(this.name,C);ue(typeof D=="string",e,"internal-error"),Es(f,e.name),Es(m,e.name),ue(typeof x=="boolean",e,"internal-error"),ue(typeof ee=="boolean",e,"internal-error"),Es(g,e.name),Es(I,e.name),Es(S,e.name),Es(P,e.name),Es(V,e.name),Es(F,e.name);const E=new ts({uid:D,auth:e,email:m,emailVerified:x,displayName:f,isAnonymous:ee,photoURL:I,phoneNumber:g,tenantId:S,stsTokenManager:y,createdAt:V,lastLoginAt:F});return te&&Array.isArray(te)&&(E.providerData=te.map(A=>Object.assign({},A))),P&&(E._redirectEventId=P),E}static async _fromIdTokenResponse(e,t,s=!1){const r=new Xr;r.updateFromServerResponse(t);const i=new ts({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await vl(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];ue(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?wE(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Xr;a.updateFromIdToken(s);const c=new ts({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new rh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const vm=new Map;function ns(n){ls(n instanceof Function,"Expected a class definition");let e=vm.get(n);return e?(ls(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vm.set(n,e),e)}/**
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
 */class RE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}RE.type="NONE";const Tm=RE;/**
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
 */function Qa(n,e,t){return`firebase:${n}:${e}:${t}`}class Jr{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Qa(this.userKey,r.apiKey,i),this.fullPersistenceKey=Qa("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ts._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Jr(ns(Tm),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||ns(Tm);const o=Qa(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){const f=ts._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Jr(i,e,s))}}/**
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
 */function Im(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kE(e))return"Blackberry";if(NE(e))return"Webos";if(CE(e))return"Safari";if((e.includes("chrome/")||bE(e))&&!e.includes("edge/"))return"Chrome";if(PE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function AE(n=Dt()){return/firefox\//i.test(n)}function CE(n=Dt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bE(n=Dt()){return/crios\//i.test(n)}function SE(n=Dt()){return/iemobile/i.test(n)}function PE(n=Dt()){return/android/i.test(n)}function kE(n=Dt()){return/blackberry/i.test(n)}function NE(n=Dt()){return/webos/i.test(n)}function md(n=Dt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sS(n=Dt()){var e;return md(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rS(){return mC()&&document.documentMode===10}function OE(n=Dt()){return md(n)||PE(n)||NE(n)||kE(n)||/windows phone/i.test(n)||SE(n)}/**
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
 */function DE(n,e=[]){let t;switch(n){case"Browser":t=Im(Dt());break;case"Worker":t=`${Im(Dt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hs}/${s}`}/**
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
 */class iS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function oS(n,e={}){return Gs(n,"GET","/v2/passwordPolicy",Ks(n,e))}/**
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
 */const aS=6;class lS{constructor(e){var t,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:aS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class cS{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wm(this),this.idTokenSubscription=new wm(this),this.beforeStateQueue=new iS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ns(t)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await IE(this,{idToken:e}),s=await ts._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(rs(this));const t=e?ut(e):null;return t&&ue(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(rs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(rs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ns(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oS(this),t=new lS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await nS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ns(e)||this._popupRedirectResolver;ue(t,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[ns(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Fb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Tr(n){return ut(n)}class wm{constructor(e){this.auth=e,this.observer=null,this.addObserver=AC(t=>this.observer=t)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uS(n){lc=n}function xE(n){return lc.loadJS(n)}function hS(){return lc.recaptchaEnterpriseScript}function dS(){return lc.gapiScript}function fS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class pS{constructor(){this.enterprise=new mS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class mS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const gS="recaptcha-enterprise",ME="NO_RECAPTCHA";class _S{constructor(e){this.type=gS,this.auth=Tr(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{zb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Gb(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;ym(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ME)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!t&&ym(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=hS();c.length!==0&&(c+=a),xE(c).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Rm(n,e,t,s=!1,r=!1){const i=new _S(n);let o;if(r)o=ME;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ih(n,e,t,s,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Rm(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Rm(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
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
 */function yS(n,e){const t=dE(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(_l(i,e??{}))return r;ln(r,"already-initialized")}return t.initialize({options:e})}function ES(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ns);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class gd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return es("not implemented")}_getIdTokenResponse(e){return es("not implemented")}_linkToIdToken(e,t){return es("not implemented")}_getReauthenticationResolver(e){return es("not implemented")}}async function vS(n,e){return Gs(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function TS(n,e){return Yo(n,"POST","/v1/accounts:signInWithPassword",Ks(n,e))}/**
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
 */async function IS(n,e){return Yo(n,"POST","/v1/accounts:signInWithEmailLink",Ks(n,e))}async function wS(n,e){return Yo(n,"POST","/v1/accounts:signInWithEmailLink",Ks(n,e))}/**
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
 */class xo extends gd{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new xo(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new xo(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ih(e,t,"signInWithPassword",TS);case"emailLink":return IS(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ih(e,s,"signUpPassword",vS);case"emailLink":return wS(e,{idToken:t,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zr(n,e){return Yo(n,"POST","/v1/accounts:signInWithIdp",Ks(n,e))}/**
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
 */const RS="http://localhost";class pr extends gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ln("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=ud(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new pr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Zr(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Zr(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zr(e,t)}buildRequest(){const e={requestUri:RS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yi(t)}return e}}/**
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
 */function AS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CS(n){const e=Yi(Xi(n)).link,t=e?Yi(Xi(e)).deep_link_id:null,s=Yi(Xi(n)).deep_link_id;return(s?Yi(Xi(s)).link:null)||s||t||e||n}class _d{constructor(e){var t,s,r,i,o,a;const c=Yi(Xi(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,f=AS((r=c.mode)!==null&&r!==void 0?r:null);ue(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=CS(e);try{return new _d(t)}catch{return null}}}/**
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
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,t){return xo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=_d.parseLink(t);return ue(s,"argument-error"),xo._fromEmailAndCode(e,s.code,s.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xo extends yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class As extends Xo{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return As.credential(e.oauthAccessToken)}catch{return null}}}As.FACEBOOK_SIGN_IN_METHOD="facebook.com";As.PROVIDER_ID="facebook.com";/**
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
 */class kn extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return kn.credential(t,s)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
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
 */class Zn extends Xo{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class Cs extends Xo{constructor(){super("twitter.com")}static credential(e,t){return pr._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Cs.credential(t,s)}catch{return null}}}Cs.TWITTER_SIGN_IN_METHOD="twitter.com";Cs.PROVIDER_ID="twitter.com";/**
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
 */async function bS(n,e){return Yo(n,"POST","/v1/accounts:signUp",Ks(n,e))}/**
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
 */class mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await ts._fromIdTokenResponse(e,s,r),o=Am(s);return new mr({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Am(s);return new mr({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Am(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Tl extends qn{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Tl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Tl(e,t,s,r)}}function LE(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Tl._fromErrorAndOperation(n,i,e,s):i})}async function SS(n,e,t=!1){const s=await Do(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mr._forOperation(n,"link",s)}/**
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
 */async function PS(n,e,t=!1){const{auth:s}=n;if(fn(s.app))return Promise.reject(rs(s));const r="reauthenticate";try{const i=await Do(n,LE(s,r,e,n),t);ue(i.idToken,s,"internal-error");const o=pd(i.idToken);ue(o,s,"internal-error");const{sub:a}=o;return ue(n.uid===a,s,"user-mismatch"),mr._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ln(s,"user-mismatch"),i}}/**
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
 */async function VE(n,e,t=!1){if(fn(n.app))return Promise.reject(rs(n));const s="signIn",r=await LE(n,s,e),i=await mr._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function kS(n,e){return VE(Tr(n),e)}/**
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
 */async function FE(n){const e=Tr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NS(n,e,t){if(fn(n.app))return Promise.reject(rs(n));const s=Tr(n),o=await ih(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&FE(n),c}),a=await mr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function OS(n,e,t){return fn(n.app)?Promise.reject(rs(n)):kS(ut(n),Ei.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&FE(n),s})}function DS(n,e,t,s){return ut(n).onIdTokenChanged(e,t,s)}function xS(n){return ut(n).signOut()}const Il="__sak";/**
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
 */class UE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const MS=1e3,LS=10;class BE extends UE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=OE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);rS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,LS):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}BE.type="LOCAL";const VS=BE;/**
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
 */class $E extends UE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$E.type="SESSION";const jE=$E;/**
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
 */function FS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new cc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await FS(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
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
 */function Ed(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class US{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ed("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Vn(){return window}function BS(n){Vn().location.href=n}/**
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
 */function qE(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function $S(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qS(){return qE()?self:null}/**
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
 */const WE="firebaseLocalStorageDb",WS=1,wl="firebaseLocalStorage",HE="fbase_key";class Jo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uc(n,e){return n.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function HS(){const n=indexedDB.deleteDatabase(WE);return new Jo(n).toPromise()}function oh(){const n=indexedDB.open(WE,WS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(wl,{keyPath:HE})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(wl)?e(s):(s.close(),await HS(),e(await oh()))})})}async function Cm(n,e,t){const s=uc(n,!0).put({[HE]:e,value:t});return new Jo(s).toPromise()}async function KS(n,e){const t=uc(n,!1).get(e),s=await new Jo(t).toPromise();return s===void 0?null:s.value}function bm(n,e){const t=uc(n,!0).delete(e);return new Jo(t).toPromise()}const GS=800,zS=3;class KE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>zS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(qS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $S(),!this.activeServiceWorker)return;this.sender=new US(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oh();return await Cm(e,Il,"1"),await bm(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cm(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>KS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=uc(r,!1).getAll();return new Jo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KE.type="LOCAL";const QS=KE;new Qo(3e4,6e4);/**
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
 */function GE(n,e){return e?ns(e):(ue(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class vd extends gd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function YS(n){return VE(n.auth,new vd(n),n.bypassAuthState)}function XS(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),PS(t,new vd(n),n.bypassAuthState)}async function JS(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),SS(t,new vd(n),n.bypassAuthState)}/**
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
 */class zE{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YS;case"linkViaPopup":case"linkViaRedirect":return JS;case"reauthViaPopup":case"reauthViaRedirect":return XS;default:ln(this.auth,"internal-error")}}resolve(e){ls(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ls(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ZS=new Qo(2e3,1e4);async function Sm(n,e,t){if(fn(n.app))return Promise.reject(_n(n,"operation-not-supported-in-this-environment"));const s=Tr(n);Ub(n,e,yd);const r=GE(s,t);return new ar(s,"signInViaPopup",e,r).executeNotNull()}class ar extends zE{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){ls(this.filter.length===1,"Popup operations only handle one event");const e=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZS.get())};e()}}ar.currentPopupAction=null;/**
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
 */const eP="pendingRedirect",Ya=new Map;class tP extends zE{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ya.get(this.auth._key());if(!e){try{const s=await nP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ya.set(this.auth._key(),e)}return this.bypassAuthState||Ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nP(n,e){const t=iP(e),s=rP(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function sP(n,e){Ya.set(n._key(),e)}function rP(n){return ns(n._redirectPersistence)}function iP(n){return Qa(eP,n.config.apiKey,n.name)}async function oP(n,e,t=!1){if(fn(n.app))return Promise.reject(rs(n));const s=Tr(n),r=GE(s,e),o=await new tP(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const aP=10*60*1e3;class lP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!QE(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(_n(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pm(e))}saveEventToCache(e){this.cachedEventUids.add(Pm(e)),this.lastProcessedEventTime=Date.now()}}function Pm(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function QE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return QE(n);default:return!1}}/**
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
 */async function uP(n,e={}){return Gs(n,"GET","/v1/projects",e)}/**
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
 */const hP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dP=/^https?/;async function fP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await uP(n);for(const t of e)try{if(pP(t))return}catch{}ln(n,"unauthorized-domain")}function pP(n){const e=sh(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!dP.test(t))return!1;if(hP.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const mP=new Qo(3e4,6e4);function km(){const n=Vn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function gP(n){return new Promise((e,t)=>{var s,r,i;function o(){km(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{km(),t(_n(n,"network-request-failed"))},timeout:mP.get()})}if(!((r=(s=Vn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Vn().gapi)===null||i===void 0)&&i.load)o();else{const a=fS("iframefcb");return Vn()[a]=()=>{gapi.load?o():t(_n(n,"network-request-failed"))},xE(`${dS()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Xa=null,e})}let Xa=null;function _P(n){return Xa=Xa||gP(n),Xa}/**
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
 */const yP=new Qo(5e3,15e3),EP="__/auth/iframe",vP="emulator/auth/iframe",TP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wP(n){const e=n.config;ue(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?fd(e,vP):`https://${n.config.authDomain}/${EP}`,s={apiKey:e.apiKey,appName:n.name,v:Hs},r=IP.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${yi(s).slice(1)}`}async function RP(n){const e=await _P(n),t=Vn().gapi;return ue(t,n,"internal-error"),e.open({where:document.body,url:wP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TP,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=_n(n,"network-request-failed"),a=Vn().setTimeout(()=>{i(o)},yP.get());function c(){Vn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const AP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CP=500,bP=600,SP="_blank",PP="http://localhost";class Nm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kP(n,e,t,s=CP,r=bP){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},AP),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Dt().toLowerCase();t&&(a=bE(u)?SP:t),AE(u)&&(e=e||PP,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[g,I])=>`${m}${g}=${I},`,"");if(sS(u)&&a!=="_self")return NP(e||"",a),new Nm(null);const f=window.open(e||"",a,h);ue(f,n,"popup-blocked");try{f.focus()}catch{}return new Nm(f)}function NP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const OP="__/auth/handler",DP="emulator/auth/handler",xP=encodeURIComponent("fac");async function Om(n,e,t,s,r,i){ue(n.config.authDomain,n,"auth-domain-config-required"),ue(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Hs,eventId:r};if(e instanceof yd){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Xu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Xo){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${xP}=${encodeURIComponent(c)}`:"";return`${MP(n)}?${yi(a).slice(1)}${u}`}function MP({config:n}){return n.emulator?fd(n,DP):`https://${n.authDomain}/${OP}`}/**
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
 */const _u="webStorageSupport";class LP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jE,this._completeRedirectFn=oP,this._overrideRedirectResult=sP}async _openPopup(e,t,s,r){var i;ls((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Om(e,t,s,sh(),r);return kP(e,o,Ed())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Om(e,t,s,sh(),r);return BS(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(ls(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await RP(e),s=new lP(e);return t.register("authEvent",r=>(ue(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_u,{type:_u},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[_u];o!==void 0&&t(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return OE()||CE()||md()}}const VP=LP;var Dm="@firebase/auth",xm="1.8.1";/**
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
 */class FP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BP(n){Bn(new Tn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DE(n)},u=new cS(s,r,i,c);return ES(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Bn(new Tn("auth-internal",e=>{const t=Tr(e.getProvider("auth").getImmediate());return(s=>new FP(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Dm,xm,UP(n)),Xt(Dm,xm,"esm2017")}/**
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
 */const $P=5*60;uC("authIdTokenMaxAge");function jP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}uS({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=_n("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",jP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BP("Browser");/**
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
 */const qP=new Map,WP={activated:!1,tokenObservers:[]};function In(n){return qP.get(n)||Object.assign({},WP)}const Mm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class HP{constructor(e,t,s,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ko,this.pending.promise.catch(t=>{}),await KP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ko,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function KP(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const GP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Rl=new _i("appCheck","AppCheck",GP);function YE(n){if(!In(n).activated)throw Rl.create("use-before-activation",{appName:n.name})}/**
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
 */const zP="firebase-app-check-database",QP=1,ah="firebase-app-check-store";let Na=null;function YP(){return Na||(Na=new Promise((n,e)=>{try{const t=indexedDB.open(zP,QP);t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var r;e(Rl.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},t.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(ah,{keyPath:"compositeKey"})}}}catch(t){e(Rl.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Na)}function XP(n,e){return JP(ZP(n),e)}async function JP(n,e){const s=(await YP()).transaction(ah,"readwrite"),i=s.objectStore(ah).put({compositeKey:n,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var u;a(Rl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function ZP(n){return`${n.options.appId}-${n.name}`}/**
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
 */const lh=new zo("@firebase/app-check");function Lm(n,e){return lE()?XP(n,e).catch(t=>{lh.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
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
 */const ek={error:"UNKNOWN_ERROR"};function tk(n){return ic.encodeString(JSON.stringify(n),!1)}async function ch(n,e=!1){const t=n.app;YE(t);const s=In(t);let r=s.token,i;if(r&&!Ji(r)&&(s.token=void 0,r=void 0),!r){const c=await s.cachedTokenPromise;c&&(Ji(c)?r=c:await Lm(t,void 0))}if(!e&&r&&Ji(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await In(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?lh.warn(c.message):lh.error(c),i=c}let a;return r?i?Ji(r)?a={token:r.token,internalError:i}:a=Fm(i):(a={token:r.token},s.token=r,await Lm(t,r)):a=Fm(i),o&&ik(t,a),a}async function nk(n){const e=n.app;YE(e);const{provider:t}=In(e);{const{token:s}=await t.getToken();return{token:s}}}function sk(n,e,t,s){const{app:r}=n,i=In(r),o={next:t,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ji(i.token)){const a=i.token;Promise.resolve().then(()=>{t({token:a.token}),Vm(n)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Vm(n))}function XE(n,e){const t=In(n),s=t.tokenObservers.filter(r=>r.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function Vm(n){const{app:e}=n,t=In(e);let s=t.tokenRefresher;s||(s=rk(n),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function rk(n){const{app:e}=n;return new HP(async()=>{const t=In(e);let s;if(t.token?s=await ch(n,!0):s=await ch(n),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=In(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const r=t.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},Mm.RETRIAL_MIN_WAIT,Mm.RETRIAL_MAX_WAIT)}function ik(n,e){const t=In(n).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Ji(n){return n.expireTimeMillis-Date.now()>0}function Fm(n){return{token:tk(ek),error:n}}/**
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
 */class ok{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=In(this.app);for(const t of e)XE(this.app,t.next);return Promise.resolve()}}function ak(n,e){return new ok(n,e)}function lk(n){return{getToken:e=>ch(n,e),getLimitedUseToken:()=>nk(n),addTokenListener:e=>sk(n,"INTERNAL",e),removeTokenListener:e=>XE(n.app,e)}}const ck="@firebase/app-check",uk="0.8.10",hk="app-check",Um="app-check-internal";function dk(){Bn(new Tn(hk,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return ak(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Um).initialize()})),Bn(new Tn(Um,n=>{const e=n.getProvider("app-check").getImmediate();return lk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Xt(ck,uk)}dk();var fk="firebase",pk="11.1.0";/**
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
 */Xt(fk,pk,"app");const JE=Symbol("firebaseApp");function Zo(n){return ad()&&Yt(JE,null)||pE(n)}const Nn=()=>{},mk=typeof window<"u";function Td(n,e){return e.split(".").reduce((t,s)=>t&&t[s],n)}function gk(n,e,t){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],n);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,t):i[r]=t}function Ir(n){return!!n&&typeof n=="object"}const _k=Object.prototype;function yk(n){return Ir(n)&&Object.getPrototypeOf(n)===_k}function Id(n){return Ir(n)&&n.type==="document"}function Ek(n){return Ir(n)&&n.type==="collection"}function vk(n){return Id(n)||Ek(n)}function Tk(n){return Ir(n)&&n.type==="query"}function Ik(n){return Ir(n)&&"ref"in n}function wk(n){return Ir(n)&&typeof n.bucket=="string"}function Rk(n,e){let t;return()=>{if(!t)return t=!0,n(e())}}const Ak=Symbol.for("v-scx");function Ck(){return!!Yt(Ak,0)}const Oa=new WeakMap;function bk(n,e){if(!Oa.has(n)){const t=xw(!0);Oa.set(n,t);const{unmount:s}=e;e.unmount=()=>{s.call(e),t.stop(),Oa.delete(n)}}return Oa.get(n)}const ZE=new WeakMap;function hc(n){return ZE.get(Zo(n))}const Da=new WeakMap;function ev(n){const e=Zo(n);if(!Da.has(e)){let t;const r=[new Promise(i=>{t=i}),i=>{Da.set(e,i),t(i.value)}];Da.set(e,r)}return Da.get(e)}function Sk(n){const e=ev(n);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function Pk(n,e){DS(e,t=>{const s=ev();n.value=t,Array.isArray(s)&&s[1](n)})}var Bm={};const $m="@firebase/database",jm="1.0.10";/**
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
 */let tv="";function kk(n){tv=n}/**
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
 */class Nk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),gt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:No(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Ok{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ds(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const nv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Nk(e)}}catch{}return new Ok},lr=nv("localStorage"),Dk=nv("sessionStorage");/**
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
 */const ei=new zo("@firebase/database"),xk=function(){let n=1;return function(){return n++}}(),sv=function(n){const e=PC(n),t=new RC;t.update(e);const s=t.digest();return ic.encodeByteArray(s)},ea=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ea.apply(null,s):typeof s=="object"?e+=gt(s):e+=s,e+=" "}return e};let po=null,qm=!0;const Mk=function(n,e){z(!0,"Can't turn on custom loggers persistently."),ei.logLevel=ge.VERBOSE,po=ei.log.bind(ei)},St=function(...n){if(qm===!0&&(qm=!1,po===null&&Dk.get("logging_enabled")===!0&&Mk()),po){const e=ea.apply(null,n);po(e)}},ta=function(n){return function(...e){St(n,...e)}},uh=function(...n){const e="FIREBASE INTERNAL ERROR: "+ea(...n);ei.error(e)},gr=function(...n){const e=`FIREBASE FATAL ERROR: ${ea(...n)}`;throw ei.error(e),new Error(e)},Jt=function(...n){const e="FIREBASE WARNING: "+ea(...n);ei.warn(e)},Lk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rv=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Vk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ii="[MIN_NAME]",_r="[MAX_NAME]",vi=function(n,e){if(n===e)return 0;if(n===ii||e===_r)return-1;if(e===ii||n===_r)return 1;{const t=Wm(n),s=Wm(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Fk=function(n,e){return n===e?0:n<e?-1:1},qi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+gt(e))},wd=function(n){if(typeof n!="object"||n===null)return gt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=gt(e[s]),t+=":",t+=wd(n[e[s]]);return t+="}",t},iv=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let r=0;r<t;r+=e)r+e>t?s.push(n.substring(r,t)):s.push(n.substring(r,r+e));return s};function cn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ov=function(n){z(!rv(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let r,i,o,a,c;n===0?(i=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),i=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},Uk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},$k=new RegExp("^-?(0*)\\d{1,10}$"),jk=-2147483648,qk=2147483647,Wm=function(n){if($k.test(n)){const e=Number(n);if(e>=jk&&e<=qk)return e}return null},na=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Jt("Exception was thrown by user callback.",t),e},Math.floor(0))}},Wk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Hk{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Kk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(St("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jt(e)}}/**
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
 */const Rd="5",av="v",lv="s",cv="r",uv="f",hv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dv="ls",fv="p",hh="ac",pv="websocket",mv="long_polling";/**
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
 */class Gk{constructor(e,t,s,r,i=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=lr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&lr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function zk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function gv(n,e,t){z(typeof e=="string","typeof type must == string"),z(typeof t=="object","typeof params must == object");let s;if(e===pv)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===mv)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zk(n)&&(t.ns=n.namespace);const r=[];return cn(t,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class Qk{constructor(){this.counters_={}}incrementCounter(e,t=1){ds(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return nC(this.counters_)}}/**
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
 */const yu={},Eu={};function Ad(n){const e=n.toString();return yu[e]||(yu[e]=new Qk),yu[e]}function Yk(n,e){const t=n.toString();return Eu[t]||(Eu[t]=e()),Eu[t]}/**
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
 */class Xk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&na(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Hm="start",Jk="close",Zk="pLPCommand",eN="pRTLPCB",_v="id",yv="pw",Ev="ser",tN="cb",nN="seg",sN="ts",rN="d",iN="dframe",vv=1870,Tv=30,oN=vv-Tv,aN=25e3,lN=3e4;class qr{constructor(e,t,s,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ta(e),this.stats_=Ad(t),this.urlFn=c=>(this.appCheckToken&&(c[hh]=this.appCheckToken),gv(t,mv,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Xk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lN)),Vk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cd((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hm)this.id=a,this.password=c;else if(o===Jk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hm]="t",s[Ev]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[tN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[av]=Rd,this.transportSessionId&&(s[lv]=this.transportSessionId),this.lastSessionId&&(s[dv]=this.lastSessionId),this.applicationId&&(s[fv]=this.applicationId),this.appCheckToken&&(s[hh]=this.appCheckToken),typeof location<"u"&&location.hostname&&hv.test(location.hostname)&&(s[cv]=uv);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qr.forceAllow_=!0}static forceDisallow(){qr.forceDisallow_=!0}static isAvailable(){return qr.forceAllow_?!0:!qr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Uk()&&!Bk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=gt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=rE(t),r=iv(s,oN);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[iN]="t",s[_v]=e,s[yv]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=gt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Cd{constructor(e,t,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xk(),window[Zk+this.uniqueCallbackIdentifier]=e,window[eN+this.uniqueCallbackIdentifier]=t,this.myIFrame=Cd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){St("frame writing exception"),a.stack&&St(a.stack),St(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||St("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_v]=this.myID,e[yv]=this.myPW,e[Ev]=this.currentSerial;let t=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tv+s.length<=vv;){const o=this.pendingSegs.shift();s=s+"&"+nN+r+"="+o.seg+"&"+sN+r+"="+o.ts+"&"+rN+r+"="+o.d,r++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(s,Math.floor(aN)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{St("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const cN=16384,uN=45e3;let Al=null;typeof MozWebSocket<"u"?Al=MozWebSocket:typeof WebSocket<"u"&&(Al=WebSocket);class On{constructor(e,t,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ta(this.connId),this.stats_=Ad(t),this.connURL=On.connectionURL_(t,o,a,r,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,r,i){const o={};return o[av]=Rd,typeof location<"u"&&location.hostname&&hv.test(location.hostname)&&(o[cv]=uv),t&&(o[lv]=t),s&&(o[dv]=s),r&&(o[hh]=r),i&&(o[fv]=i),gv(e,pv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,lr.set("previous_websocket_failure",!0);try{let s;gC(),this.mySock=new Al(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Al!==null&&!On.forceDisallow_}static previouslyFailed(){return lr.isInMemoryStorage||lr.get("previous_websocket_failure")===!0}markConnectionHealthy(){lr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=No(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=gt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=iv(t,cN);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(uN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}On.responsesRequiredToBeHealthy=2;On.healthyTimeout=3e4;/**
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
 */class Mo{static get ALL_TRANSPORTS(){return[qr,On]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=On.isAvailable();let s=t&&!On.previouslyFailed();if(e.webSocketOnly&&(t||Jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[On];else{const r=this.transports_=[];for(const i of Mo.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Mo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mo.globalTransportInitialized_=!1;/**
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
 */const hN=6e4,dN=5e3,fN=10*1024,pN=100*1024,vu="t",Km="d",mN="s",Gm="r",gN="e",zm="o",Qm="a",Ym="n",Xm="p",_N="h";class yN{constructor(e,t,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ta("c:"+this.id+":"),this.transportManager_=new Mo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vu in e){const t=e[vu];t===Qm?this.upgradeIfSecondaryHealthy_():t===Gm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=qi("t",e),s=qi("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=qi("t",e),s=qi("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=qi(vu,e);if(Km in e){const s=e[Km];if(t===_N){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===mN?this.onConnectionShutdown_(s):t===Gm?this.onReset_(s):t===gN?uh("Server Error: "+s):t===zm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uh("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Rd!==s&&Jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(lr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Iv{put(e,t,s,r){}merge(e,t,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class wv{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Cl extends wv{static getInstance(){return new Cl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ld()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Jm=32,Zm=768;class qe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function De(){return new qe("")}function Re(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function xs(n){return n.pieces_.length-n.pieceNum_}function Be(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new qe(n.pieces_,e)}function Rv(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function EN(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Av(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Cv(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new qe(e,0)}function ct(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof qe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&t.push(s[r])}return new qe(t,0)}function ve(n){return n.pieceNum_>=n.pieces_.length}function sn(n,e){const t=Re(n),s=Re(e);if(t===null)return e;if(t===s)return sn(Be(n),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function bv(n,e){if(xs(n)!==xs(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function pn(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(xs(n)>xs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class vN{constructor(e,t){this.errorPrefix_=t,this.parts_=Av(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ac(this.parts_[s]);Sv(this)}}function TN(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ac(e),Sv(n)}function IN(n){const e=n.parts_.pop();n.byteLength_-=ac(e),n.parts_.length>0&&(n.byteLength_-=1)}function Sv(n){if(n.byteLength_>Zm)throw new Error(n.errorPrefix_+"has a key path longer than "+Zm+" bytes ("+n.byteLength_+").");if(n.parts_.length>Jm)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jm+") or object contains a cycle "+or(n))}function or(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class bd extends wv{static getInstance(){return new bd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Wi=1e3,wN=60*5*1e3,eg=30*1e3,RN=1.3,AN=3e4,CN="server_kill",tg=3;class is extends Iv{constructor(e,t,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=is.nextPersistentConnectionId_++,this.log_=ta("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wi,this.maxReconnectDelay_=wN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(gt(i)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const t=new ko,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;is.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ds(e,"w")){const s=ri(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||wC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=eg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=IC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,t)}sendUnlisten_(e,t,s,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,r){const i={p:t,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,s,r){this.putInternal("p",e,t,s,r)}merge(e,t,s,r){this.putInternal("m",e,t,s,r)}putInternal(e,t,s,r,i){this.initConnection_();const o={p:t,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+gt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):uh("Unrecognized action received from server: "+gt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>AN&&(this.reconnectDelay_=Wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+is.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?St("getToken() completed but was canceled"):(St("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new yN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,g=>{Jt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(CN)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Jt(f),c())}}}interrupt(e){St("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){St("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xu(this.interruptReasons_)&&(this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(i=>wd(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const s=new qe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,t){St("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=tg&&(this.reconnectDelay_=eg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){St("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=tg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+tv.replace(/\./g,"-")]=1,ld()?e["framework.cordova"]=1:aE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cl.getInstance().currentlyOnline();return Xu(this.interruptReasons_)&&e}}is.nextPersistentConnectionId_=0;is.nextConnectionId_=0;/**
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
 */class Ae{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ae(e,t)}}/**
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
 */class dc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ae(ii,e),r=new Ae(ii,t);return this.compare(s,r)!==0}minPost(){return Ae.MIN}}/**
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
 */let xa;class Pv extends dc{static get __EMPTY_NODE(){return xa}static set __EMPTY_NODE(e){xa=e}compare(e,t){return vi(e.name,t.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(_r,xa)}makePost(e,t){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,xa)}toString(){return".key"}}const ti=new Pv;/**
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
 */let Ma=class{constructor(e,t,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Gt=class Zi{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Zi.RED,this.left=r??Dn.EMPTY_NODE,this.right=i??Dn.EMPTY_NODE}copy(e,t,s,r,i){return new Zi(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,r;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Dn.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Zi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Zi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Gt.RED=!0;Gt.BLACK=!1;class bN{copy(e,t,s,r,i){return this}insert(e,t,s){return new Gt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Dn=class Ja{constructor(e,t=Ja.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ja(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Gt.BLACK,null,null))}remove(e){return new Ja(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Gt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,r=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ma(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ma(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ma(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ma(this.root_,null,this.comparator_,!0,e)}};Dn.EMPTY_NODE=new bN;/**
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
 */function SN(n,e){return vi(n.name,e.name)}function Sd(n,e){return vi(n,e)}/**
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
 */let dh;function PN(n){dh=n}const kv=function(n){return typeof n=="number"?"number:"+ov(n):"string:"+n},Nv=function(n){if(n.isLeafNode()){const e=n.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ds(e,".sv"),"Priority must be a string or number.")}else z(n===dh||n.isEmpty(),"priority of unexpected type.");z(n===dh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ng;class at{static set __childrenNodeConstructor(e){ng=e}static get __childrenNodeConstructor(){return ng}constructor(e,t=at.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new at(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ve(e)?this:Re(e)===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:at.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Re(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(z(s!==".priority"||xs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,at.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ov(this.value_):e+=this.value_,this.lazyHash_=sv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===at.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof at.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,r=at.VALUE_TYPE_ORDER.indexOf(t),i=at.VALUE_TYPE_ORDER.indexOf(s);return z(r>=0,"Unknown leaf type: "+t),z(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}at.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ov,Dv;function kN(n){Ov=n}function NN(n){Dv=n}class ON extends dc{compare(e,t){const s=e.node.getPriority(),r=t.node.getPriority(),i=s.compareTo(r);return i===0?vi(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(_r,new at("[PRIORITY-POST]",Dv))}makePost(e,t){const s=Ov(e);return new Ae(t,new at("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ot=new ON;/**
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
 */const DN=Math.log(2);class xN{constructor(e){const t=i=>parseInt(Math.log(i)/DN,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bl=function(n,e,t,s){n.sort(e);const r=function(c,u){const h=u-c;let f,m;if(h===0)return null;if(h===1)return f=n[c],m=t?t(f):f,new Gt(m,f.node,Gt.BLACK,null,null);{const g=parseInt(h/2,10)+c,I=r(c,g),S=r(g+1,u);return f=n[g],m=t?t(f):f,new Gt(m,f.node,Gt.BLACK,I,S)}},i=function(c){let u=null,h=null,f=n.length;const m=function(I,S){const P=f-I,V=f;f-=I;const F=r(P+1,V),D=n[P],x=t?t(D):D;g(new Gt(x,D.node,S,null,F))},g=function(I){u?(u.left=I,u=I):(h=I,u=I)};for(let I=0;I<c.count;++I){const S=c.nextBitIsOne(),P=Math.pow(2,c.count-(I+1));S?m(P,Gt.BLACK):(m(P,Gt.BLACK),m(P,Gt.RED))}return h},o=new xN(n.length),a=i(o);return new Dn(s||e,a)};/**
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
 */let Tu;const Hi={};class ss{static get Default(){return z(Ot,"ChildrenNode.ts has not been loaded"),Tu=Tu||new ss({".priority":Hi},{".priority":Ot}),Tu}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ri(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Dn?t:null}hasIndex(e){return ds(this.indexSet_,e.toString())}addIndex(e,t){z(e!==ti,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=t.getIterator(Ae.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=bl(s,e.getCompare()):a=Hi;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new ss(h,u)}addToIndexes(e,t){const s=gl(this.indexes_,(r,i)=>{const o=ri(this.indexSet_,i);if(z(o,"Missing index implementation for "+i),r===Hi)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Ae.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),bl(a,o.getCompare())}else return Hi;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new Ae(e.name,a))),c.insert(e,e.node)}});return new ss(s,this.indexSet_)}removeFromIndexes(e,t){const s=gl(this.indexes_,r=>{if(r===Hi)return r;{const i=t.get(e.name);return i?r.remove(new Ae(e.name,i)):r}});return new ss(s,this.indexSet_)}}/**
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
 */let Ki;class ke{static get EMPTY_NODE(){return Ki||(Ki=new ke(new Dn(Sd),null,ss.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Nv(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ki}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ki:t}}getChild(e){const t=Re(e);return t===null?this:this.getImmediateChild(t).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ae(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Ki:this.priorityNode_;return new ke(r,o,i)}}updateChild(e,t){const s=Re(e);if(s===null)return t;{z(Re(e)!==".priority"||xs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Be(e),t);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,r=0,i=!0;if(this.forEachChild(Ot,(o,a)=>{t[o]=a.val(e),s++,i&&ke.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kv(this.getPriority().val())+":"),this.forEachChild(Ot,(t,s)=>{const r=s.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":sv(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Ae(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ae(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ae(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===sa?-1:0}withIndex(e){if(e===ti||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ti||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Ot),r=t.getIterator(Ot);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ti?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class MN extends ke{constructor(){super(new Dn(Sd),ke.EMPTY_NODE,ss.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const sa=new MN;Object.defineProperties(Ae,{MIN:{value:new Ae(ii,ke.EMPTY_NODE)},MAX:{value:new Ae(_r,sa)}});Pv.__EMPTY_NODE=ke.EMPTY_NODE;at.__childrenNodeConstructor=ke;PN(sa);NN(sa);/**
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
 */const LN=!0;function Pt(n,e=null){if(n===null)return ke.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new at(t,Pt(e))}if(!(n instanceof Array)&&LN){const t=[];let s=!1;if(cn(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=Pt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new Ae(o,c)))}}),t.length===0)return ke.EMPTY_NODE;const i=bl(t,SN,o=>o.name,Sd);if(s){const o=bl(t,Ot.getCompare());return new ke(i,Pt(e),new ss({".priority":o},{".priority":Ot}))}else return new ke(i,Pt(e),ss.Default)}else{let t=ke.EMPTY_NODE;return cn(n,(s,r)=>{if(ds(n,s)&&s.substring(0,1)!=="."){const i=Pt(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(s,i))}}),t.updatePriority(Pt(e))}}kN(Pt);/**
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
 */class VN extends dc{constructor(e){super(),this.indexPath_=e,z(!ve(e)&&Re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),r=this.extractChild(t.node),i=s.compareTo(r);return i===0?vi(e.name,t.name):i}makePost(e,t){const s=Pt(e),r=ke.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ae(t,r)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,sa);return new Ae(_r,e)}toString(){return Av(this.indexPath_,0).join("/")}}/**
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
 */class FN extends dc{compare(e,t){const s=e.node.compareTo(t.node);return s===0?vi(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,t){const s=Pt(e);return new Ae(t,s)}toString(){return".value"}}const UN=new FN;/**
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
 */function BN(n){return{type:"value",snapshotNode:n}}function $N(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function jN(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function sg(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function qN(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Pd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ot}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ii}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_r}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ot}copy(){const e=new Pd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rg(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ot?t="$priority":n.index_===UN?t="$value":n.index_===ti?t="$key":(z(n.index_ instanceof VN,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=gt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=gt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+gt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=gt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+gt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ig(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ot&&(e.i=n.index_.toString()),e}/**
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
 */class Sl extends Iv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ta("p:rest:"),this.listens_={}}listen(e,t,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Sl.getListenId_(e,s),a={};this.listens_[o]=a;const c=rg(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,s),ri(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",r(m,null)}})}unlisten(e,t){const s=Sl.getListenId_(e,t);delete this.listens_[s]}get(e){const t=rg(e._queryParams),s=e._path.toString(),r=new ko;return this.restRequest_(s+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=No(a.responseText)}catch{Jt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Jt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class WN{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Pl(){return{value:null,children:new Map}}function xv(n,e,t){if(ve(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Re(e);n.children.has(s)||n.children.set(s,Pl());const r=n.children.get(s);e=Be(e),xv(r,e,t)}}function fh(n,e,t){n.value!==null?t(e,n.value):HN(n,(s,r)=>{const i=new qe(e.toString()+"/"+s);fh(r,i,t)})}function HN(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class KN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&cn(this.last_,(s,r)=>{t[s]=t[s]-r}),this.last_=e,t}}/**
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
 */const og=10*1e3,GN=30*1e3,zN=5*60*1e3;class QN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new KN(e);const s=og+(GN-og)*Math.random();mo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;cn(e,(r,i)=>{i>0&&ds(this.statsToReport_,r)&&(t[r]=i,s=!0)}),s&&this.server_.reportStats(t),mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*zN))}}/**
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
 */var xn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xn||(xn={}));function Mv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Lv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class kl{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=xn.ACK_USER_WRITE,this.source=Mv()}operationForChild(e){if(ve(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new qe(e));return new kl(De(),t,this.revert)}}else return z(Re(this.path)===e,"operationForChild called for unrelated child."),new kl(Be(this.path),this.affectedTree,this.revert)}}/**
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
 */class yr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=xn.OVERWRITE}operationForChild(e){return ve(this.path)?new yr(this.source,De(),this.snap.getImmediateChild(e)):new yr(this.source,Be(this.path),this.snap)}}/**
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
 */class Lo{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=xn.MERGE}operationForChild(e){if(ve(this.path)){const t=this.children.subtree(new qe(e));return t.isEmpty()?null:t.value?new yr(this.source,De(),t.value):new Lo(this.source,De(),t)}else return z(Re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Lo(this.source,Be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class kd{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ve(e))return this.isFullyInitialized()&&!this.filtered_;const t=Re(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function YN(n,e,t,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(qN(o.childName,o.snapshotNode))}),Gi(n,r,"child_removed",e,s,t),Gi(n,r,"child_added",e,s,t),Gi(n,r,"child_moved",i,s,t),Gi(n,r,"child_changed",e,s,t),Gi(n,r,"value",e,s,t),r}function Gi(n,e,t,s,r,i){const o=s.filter(a=>a.type===t);o.sort((a,c)=>JN(n,a,c)),o.forEach(a=>{const c=XN(n,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function XN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function JN(n,e,t){if(e.childName==null||t.childName==null)throw gi("Should only compare child_ events.");const s=new Ae(e.childName,e.snapshotNode),r=new Ae(t.childName,t.snapshotNode);return n.index_.compare(s,r)}/**
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
 */function Fv(n,e){return{eventCache:n,serverCache:e}}function go(n,e,t,s){return Fv(new kd(e,t,s),n.serverCache)}function Uv(n,e,t,s){return Fv(n.eventCache,new kd(e,t,s))}function ph(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Er(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Iu;const ZN=()=>(Iu||(Iu=new Dn(Fk)),Iu);class Ue{static fromObject(e){let t=new Ue(null);return cn(e,(s,r)=>{t=t.set(new qe(s),r)}),t}constructor(e,t=ZN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:De(),value:this.value};if(ve(e))return null;{const s=Re(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Be(e),t);return i!=null?{path:ct(new qe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ve(e))return this;{const t=Re(e),s=this.children.get(t);return s!==null?s.subtree(Be(e)):new Ue(null)}}set(e,t){if(ve(e))return new Ue(t,this.children);{const s=Re(e),i=(this.children.get(s)||new Ue(null)).set(Be(e),t),o=this.children.insert(s,i);return new Ue(this.value,o)}}remove(e){if(ve(e))return this.children.isEmpty()?new Ue(null):new Ue(null,this.children);{const t=Re(e),s=this.children.get(t);if(s){const r=s.remove(Be(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new Ue(null):new Ue(this.value,i)}else return this}}get(e){if(ve(e))return this.value;{const t=Re(e),s=this.children.get(t);return s?s.get(Be(e)):null}}setTree(e,t){if(ve(e))return t;{const s=Re(e),i=(this.children.get(s)||new Ue(null)).setTree(Be(e),t);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Ue(this.value,o)}}fold(e){return this.fold_(De(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(ct(e,r),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,De(),t)}findOnPath_(e,t,s){const r=this.value?s(t,this.value):!1;if(r)return r;if(ve(e))return null;{const i=Re(e),o=this.children.get(i);return o?o.findOnPath_(Be(e),ct(t,i),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,De(),t)}foreachOnPath_(e,t,s){if(ve(e))return this;{this.value&&s(t,this.value);const r=Re(e),i=this.children.get(r);return i?i.foreachOnPath_(Be(e),ct(t,r),s):new Ue(null)}}foreach(e){this.foreach_(De(),e)}foreach_(e,t){this.children.inorderTraversal((s,r)=>{r.foreach_(ct(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new Ue(null))}}function _o(n,e,t){if(ve(e))return new yn(new Ue(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=sn(r,e);return i=i.updateChild(o,t),new yn(n.writeTree_.set(r,i))}else{const r=new Ue(t),i=n.writeTree_.setTree(e,r);return new yn(i)}}}function ag(n,e,t){let s=n;return cn(t,(r,i)=>{s=_o(s,ct(e,r),i)}),s}function lg(n,e){if(ve(e))return yn.empty();{const t=n.writeTree_.setTree(e,new Ue(null));return new yn(t)}}function mh(n,e){return wr(n,e)!=null}function wr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(sn(t.path,e)):null}function cg(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ot,(s,r)=>{e.push(new Ae(s,r))}):n.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Ae(s,r.value))}),e}function Ns(n,e){if(ve(e))return n;{const t=wr(n,e);return t!=null?new yn(new Ue(t)):new yn(n.writeTree_.subtree(e))}}function gh(n){return n.writeTree_.isEmpty()}function oi(n,e){return Bv(De(),n.writeTree_,e)}function Bv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(z(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):t=Bv(ct(n,r),i,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ct(n,".priority"),s)),t}}/**
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
 */function $v(n,e){return Kv(e,n)}function e0(n,e,t,s,r){z(s>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:r}),r&&(n.visibleWrites=_o(n.visibleWrites,e,t)),n.lastWriteId=s}function t0(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function n0(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);z(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let r=s.visible,i=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&s0(a,s.path)?r=!1:pn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return r0(n),!0;if(s.snap)n.visibleWrites=lg(n.visibleWrites,s.path);else{const a=s.children;cn(a,c=>{n.visibleWrites=lg(n.visibleWrites,ct(s.path,c))})}return!0}else return!1}function s0(n,e){if(n.snap)return pn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&pn(ct(n.path,t),e))return!0;return!1}function r0(n){n.visibleWrites=jv(n.allWrites,i0,De()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function i0(n){return n.visible}function jv(n,e,t){let s=yn.empty();for(let r=0;r<n.length;++r){const i=n[r];if(e(i)){const o=i.path;let a;if(i.snap)pn(t,o)?(a=sn(t,o),s=_o(s,a,i.snap)):pn(o,t)&&(a=sn(o,t),s=_o(s,De(),i.snap.getChild(a)));else if(i.children){if(pn(t,o))a=sn(t,o),s=ag(s,a,i.children);else if(pn(o,t))if(a=sn(o,t),ve(a))s=ag(s,De(),i.children);else{const c=ri(i.children,Re(a));if(c){const u=c.getChild(Be(a));s=_o(s,De(),u)}}}else throw gi("WriteRecord should have .snap or .children")}}return s}function qv(n,e,t,s,r){if(!s&&!r){const i=wr(n.visibleWrites,e);if(i!=null)return i;{const o=Ns(n.visibleWrites,e);if(gh(o))return t;if(t==null&&!mh(o,De()))return null;{const a=t||ke.EMPTY_NODE;return oi(o,a)}}}else{const i=Ns(n.visibleWrites,e);if(!r&&gh(i))return t;if(!r&&t==null&&!mh(i,De()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(pn(u.path,e)||pn(e,u.path))},a=jv(n.allWrites,o,e),c=t||ke.EMPTY_NODE;return oi(a,c)}}}function o0(n,e,t){let s=ke.EMPTY_NODE;const r=wr(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ot,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(t){const i=Ns(n.visibleWrites,e);return t.forEachChild(Ot,(o,a)=>{const c=oi(Ns(i,new qe(o)),a);s=s.updateImmediateChild(o,c)}),cg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Ns(n.visibleWrites,e);return cg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function a0(n,e,t,s,r){z(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=ct(e,t);if(mh(n.visibleWrites,i))return null;{const o=Ns(n.visibleWrites,i);return gh(o)?r.getChild(t):oi(o,r.getChild(t))}}function l0(n,e,t,s){const r=ct(e,t),i=wr(n.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(t)){const o=Ns(n.visibleWrites,r);return oi(o,s.getNode().getImmediateChild(t))}else return null}function c0(n,e){return wr(n.visibleWrites,e)}function u0(n,e,t,s,r,i,o){let a;const c=Ns(n.visibleWrites,e),u=wr(c,De());if(u!=null)a=u;else if(t!=null)a=oi(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=m.getNext();for(;g&&h.length<r;)f(g,s)!==0&&h.push(g),g=m.getNext();return h}else return[]}function h0(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function _h(n,e,t,s){return qv(n.writeTree,n.treePath,e,t,s)}function Wv(n,e){return o0(n.writeTree,n.treePath,e)}function ug(n,e,t,s){return a0(n.writeTree,n.treePath,e,t,s)}function Nl(n,e){return c0(n.writeTree,ct(n.treePath,e))}function d0(n,e,t,s,r,i){return u0(n.writeTree,n.treePath,e,t,s,r,i)}function Nd(n,e,t){return l0(n.writeTree,n.treePath,e,t)}function Hv(n,e){return Kv(ct(n.treePath,e),n.writeTree)}function Kv(n,e){return{treePath:n,writeTree:e}}/**
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
 */class f0{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),z(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(s,sg(s,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(s,jN(s,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(s,$N(s,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(s,sg(s,e.snapshotNode,r.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class p0{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Gv=new p0;class Od{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new kd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nd(this.writes_,e,s)}}getChildAfterChild(e,t,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Er(this.viewCache_),i=d0(this.writes_,r,t,1,s,e);return i.length===0?null:i[0]}}function m0(n,e){z(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function g0(n,e,t,s,r){const i=new f0;let o,a;if(t.type===xn.OVERWRITE){const u=t;u.source.fromUser?o=yh(n,e,u.path,u.snap,s,r,i):(z(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ve(u.path),o=Ol(n,e,u.path,u.snap,s,r,a,i))}else if(t.type===xn.MERGE){const u=t;u.source.fromUser?o=y0(n,e,u.path,u.children,s,r,i):(z(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Eh(n,e,u.path,u.children,s,r,a,i))}else if(t.type===xn.ACK_USER_WRITE){const u=t;u.revert?o=T0(n,e,u.path,s,r,i):o=E0(n,e,u.path,u.affectedTree,s,r,i)}else if(t.type===xn.LISTEN_COMPLETE)o=v0(n,e,t.path,s,i);else throw gi("Unknown operation type: "+t.type);const c=i.getChanges();return _0(e,o,c),{viewCache:o,changes:c}}function _0(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=ph(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&t.push(BN(ph(e)))}}function zv(n,e,t,s,r,i){const o=e.eventCache;if(Nl(s,t)!=null)return e;{let a,c;if(ve(t))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Er(e),h=u instanceof ke?u:ke.EMPTY_NODE,f=Wv(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=_h(s,Er(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Re(t);if(u===".priority"){z(xs(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=ug(s,t,h,c);f!=null?a=n.filter.updatePriority(h,f):a=o.getNode()}else{const h=Be(t);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=ug(s,t,o.getNode(),c);m!=null?f=o.getNode().getImmediateChild(u).updateChild(h,m):f=o.getNode().getImmediateChild(u)}else f=Nd(s,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,h,r,i):a=o.getNode()}}return go(e,a,o.isFullyInitialized()||ve(t),n.filter.filtersNodes())}}function Ol(n,e,t,s,r,i,o,a){const c=e.serverCache;let u;const h=o?n.filter:n.filter.getIndexedFilter();if(ve(t))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(t,s);u=h.updateFullNode(c.getNode(),g,null)}else{const g=Re(t);if(!c.isCompleteForPath(t)&&xs(t)>1)return e;const I=Be(t),P=c.getNode().getImmediateChild(g).updateChild(I,s);g===".priority"?u=h.updatePriority(c.getNode(),P):u=h.updateChild(c.getNode(),g,P,I,Gv,null)}const f=Uv(e,u,c.isFullyInitialized()||ve(t),h.filtersNodes()),m=new Od(r,f,i);return zv(n,f,t,r,m,a)}function yh(n,e,t,s,r,i,o){const a=e.eventCache;let c,u;const h=new Od(r,e,i);if(ve(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=go(e,u,!0,n.filter.filtersNodes());else{const f=Re(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=go(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=Be(t),g=a.getNode().getImmediateChild(f);let I;if(ve(m))I=s;else{const S=h.getCompleteChild(f);S!=null?Rv(m)===".priority"&&S.getChild(Cv(m)).isEmpty()?I=S:I=S.updateChild(m,s):I=ke.EMPTY_NODE}if(g.equals(I))c=e;else{const S=n.filter.updateChild(a.getNode(),f,I,m,h,o);c=go(e,S,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function hg(n,e){return n.eventCache.isCompleteForChild(e)}function y0(n,e,t,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=ct(t,c);hg(e,Re(h))&&(a=yh(n,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=ct(t,c);hg(e,Re(h))||(a=yh(n,a,h,u,r,i,o))}),a}function dg(n,e,t){return t.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Eh(n,e,t,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;ve(t)?u=s:u=new Ue(null).setTree(t,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),I=dg(n,g,m);c=Ol(n,c,new qe(f),I,r,i,o,a)}}),u.children.inorderTraversal((f,m)=>{const g=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!g){const I=e.serverCache.getNode().getImmediateChild(f),S=dg(n,I,m);c=Ol(n,c,new qe(f),S,r,i,o,a)}}),c}function E0(n,e,t,s,r,i,o){if(Nl(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ve(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ol(n,e,t,c.getNode().getChild(t),r,i,a,o);if(ve(t)){let u=new Ue(null);return c.getNode().forEachChild(ti,(h,f)=>{u=u.set(new qe(h),f)}),Eh(n,e,t,u,r,i,a,o)}else return e}else{let u=new Ue(null);return s.foreach((h,f)=>{const m=ct(t,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),Eh(n,e,t,u,r,i,a,o)}}function v0(n,e,t,s,r){const i=e.serverCache,o=Uv(e,i.getNode(),i.isFullyInitialized()||ve(t),i.isFiltered());return zv(n,o,t,s,Gv,r)}function T0(n,e,t,s,r,i){let o;if(Nl(s,t)!=null)return e;{const a=new Od(s,e,r),c=e.eventCache.getNode();let u;if(ve(t)||Re(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=_h(s,Er(e));else{const f=e.serverCache.getNode();z(f instanceof ke,"serverChildren would be complete if leaf node"),h=Wv(s,f)}h=h,u=n.filter.updateFullNode(c,h,i)}else{const h=Re(t);let f=Nd(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=n.filter.updateChild(c,h,f,Be(t),a,i):e.eventCache.getNode().hasChild(h)?u=n.filter.updateChild(c,h,ke.EMPTY_NODE,Be(t),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_h(s,Er(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Nl(s,De())!=null,go(e,u,o,n.filter.filtersNodes())}}function I0(n,e){const t=Er(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ve(e)&&!t.getImmediateChild(Re(e)).isEmpty())?t.getChild(e):null}function fg(n,e,t,s){e.type===xn.MERGE&&e.source.queryId!==null&&(z(Er(n.viewCache_),"We should always have a full cache before handling merges"),z(ph(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,i=g0(n.processor_,r,e,t,s);return m0(n.processor_,i.viewCache),z(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,w0(n,i.changes,i.viewCache.eventCache.getNode())}function w0(n,e,t,s){const r=n.eventRegistrations_;return YN(n.eventGenerator_,e,t,r)}/**
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
 */let pg;function R0(n){z(!pg,"__referenceConstructor has already been defined"),pg=n}function Dd(n,e,t,s){const r=e.source.queryId;if(r!==null){const i=n.views.get(r);return z(i!=null,"SyncTree gave us an op for an invalid query."),fg(i,e,t,s)}else{let i=[];for(const o of n.views.values())i=i.concat(fg(o,e,t,s));return i}}function xd(n,e){let t=null;for(const s of n.views.values())t=t||I0(s,e);return t}/**
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
 */let mg;function A0(n){z(!mg,"__referenceConstructor has already been defined"),mg=n}class gg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ue(null),this.pendingWriteTree_=h0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function C0(n,e,t,s,r){return e0(n.pendingWriteTree_,e,t,s,r),r?pc(n,new yr(Mv(),e,t)):[]}function Wr(n,e,t=!1){const s=t0(n.pendingWriteTree_,e);if(n0(n.pendingWriteTree_,e)){let i=new Ue(null);return s.snap!=null?i=i.set(De(),!0):cn(s.children,o=>{i=i.set(new qe(o),!0)}),pc(n,new kl(s.path,i,t))}else return[]}function fc(n,e,t){return pc(n,new yr(Lv(),e,t))}function b0(n,e,t){const s=Ue.fromObject(t);return pc(n,new Lo(Lv(),e,s))}function S0(n,e,t,s){const r=Jv(n,s);if(r!=null){const i=Zv(r),o=i.path,a=i.queryId,c=sn(o,e),u=new yr(Vv(a),c,t);return eT(n,o,u)}else return[]}function P0(n,e,t,s){const r=Jv(n,s);if(r){const i=Zv(r),o=i.path,a=i.queryId,c=sn(o,e),u=Ue.fromObject(t),h=new Lo(Vv(a),c,u);return eT(n,o,h)}else return[]}function Qv(n,e,t){const r=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=sn(o,e),u=xd(a,c);if(u)return u});return qv(r,e,i,t,!0)}function pc(n,e){return Yv(e,n.syncPointTree_,null,$v(n.pendingWriteTree_,De()))}function Yv(n,e,t,s){if(ve(n.path))return Xv(n,e,t,s);{const r=e.get(De());t==null&&r!=null&&(t=xd(r,De()));let i=[];const o=Re(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,h=Hv(s,o);i=i.concat(Yv(a,c,u,h))}return r&&(i=i.concat(Dd(r,n,s,t))),i}}function Xv(n,e,t,s){const r=e.get(De());t==null&&r!=null&&(t=xd(r,De()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=Hv(s,o),h=n.operationForChild(o);h&&(i=i.concat(Xv(h,a,c,u)))}),r&&(i=i.concat(Dd(r,n,s,t))),i}function Jv(n,e){return n.tagToQueryMap.get(e)}function Zv(n){const e=n.indexOf("$");return z(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new qe(n.substr(0,e))}}function eT(n,e,t){const s=n.syncPointTree_.get(e);z(s,"Missing sync point for query tag that we're tracking");const r=$v(n.pendingWriteTree_,e);return Dd(s,t,r,null)}/**
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
 */class Md{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Md(t)}node(){return this.node_}}class Ld{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ct(this.path_,e);return new Ld(this.syncTree_,t)}node(){return Qv(this.syncTree_,this.path_)}}const k0=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},_g=function(n,e,t){if(!n||typeof n!="object")return n;if(z(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return N0(n[".sv"],e,t);if(typeof n[".sv"]=="object")return O0(n[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},N0=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:z(!1,"Unexpected server value: "+n)}},O0=function(n,e,t){n.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&z(!1,"Unexpected increment value: "+s);const r=e.node();if(z(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},D0=function(n,e,t,s){return Vd(e,new Ld(t,n),s)},x0=function(n,e,t){return Vd(n,new Md(e),t)};function Vd(n,e,t){const s=n.getPriority().val(),r=_g(s,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=_g(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new at(a,Pt(r)):n}else{const o=n;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new at(r))),o.forEachChild(Ot,(a,c)=>{const u=Vd(c,e.getImmediateChild(a),t);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class Fd{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ud(n,e){let t=e instanceof qe?e:new qe(e),s=n,r=Re(t);for(;r!==null;){const i=ri(s.node.children,r)||{children:{},childCount:0};s=new Fd(r,s,i),t=Be(t),r=Re(t)}return s}function Ti(n){return n.node.value}function tT(n,e){n.node.value=e,vh(n)}function nT(n){return n.node.childCount>0}function M0(n){return Ti(n)===void 0&&!nT(n)}function mc(n,e){cn(n.node.children,(t,s)=>{e(new Fd(t,n,s))})}function sT(n,e,t,s){t&&e(n),mc(n,r=>{sT(r,e,!0)})}function L0(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ra(n){return new qe(n.parent===null?n.name:ra(n.parent)+"/"+n.name)}function vh(n){n.parent!==null&&V0(n.parent,n.name,n)}function V0(n,e,t){const s=M0(t),r=ds(n.node.children,e);s&&r?(delete n.node.children[e],n.node.childCount--,vh(n)):!s&&!r&&(n.node.children[e]=t.node,n.node.childCount++,vh(n))}/**
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
 */const F0=/[\[\].#$\/\u0000-\u001F\u007F]/,U0=/[\[\].#$\u0000-\u001F\u007F]/,wu=10*1024*1024,rT=function(n){return typeof n=="string"&&n.length!==0&&!F0.test(n)},B0=function(n){return typeof n=="string"&&n.length!==0&&!U0.test(n)},$0=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),B0(n)},iT=function(n,e,t){const s=t instanceof qe?new vN(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+or(s));if(typeof e=="function")throw new Error(n+"contains a function "+or(s)+" with contents = "+e.toString());if(rv(e))throw new Error(n+"contains "+e.toString()+" "+or(s));if(typeof e=="string"&&e.length>wu/3&&ac(e)>wu)throw new Error(n+"contains a string greater than "+wu+" utf8 bytes "+or(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(cn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!rT(o)))throw new Error(n+" contains an invalid key ("+o+") "+or(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TN(s,o),iT(n,a,s),IN(s)}),r&&i)throw new Error(n+' contains ".value" child '+or(s)+" in addition to actual children.")}},j0=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!$0(t))throw new Error(SC(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class q0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function W0(n,e){let t=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();t!==null&&!bv(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&n.eventLists_.push(t)}function Rr(n,e,t){W0(n,t),H0(n,s=>pn(s,e)||pn(e,s))}function H0(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const r=n.eventLists_[s];if(r){const i=r.path;e(i)?(K0(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function K0(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();po&&St("event: "+t.toString()),na(s)}}}/**
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
 */const G0="repo_interrupt",z0=25;class Q0{constructor(e,t,s,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new q0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pl(),this.transactionQueueTree_=new Fd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Y0(n,e,t){if(n.stats_=Ad(n.repoInfo_),n.forceRestClient_||Wk())n.server_=new Sl(n.repoInfo_,(s,r,i,o)=>{yg(n,s,r,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Eg(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{gt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new is(n.repoInfo_,e,(s,r,i,o)=>{yg(n,s,r,i,o)},s=>{Eg(n,s)},s=>{J0(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Yk(n.repoInfo_,()=>new QN(n.stats_,n.server_)),n.infoData_=new WN,n.infoSyncTree_=new gg({startListening:(s,r,i,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=fc(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Bd(n,"connected",!1),n.serverSyncTree_=new gg({startListening:(s,r,i,o)=>(n.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);Rr(n.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{n.server_.unlisten(s,r)}})}function X0(n){const t=n.infoData_.getNode(new qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function oT(n){return k0({timestamp:X0(n)})}function yg(n,e,t,s,r){n.dataUpdateCount++;const i=new qe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(s){const c=gl(t,u=>Pt(u));o=P0(n.serverSyncTree_,i,c,r)}else{const c=Pt(t);o=S0(n.serverSyncTree_,i,c,r)}else if(s){const c=gl(t,u=>Pt(u));o=b0(n.serverSyncTree_,i,c)}else{const c=Pt(t);o=fc(n.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=jd(n,i)),Rr(n.eventQueue_,a,o)}function Eg(n,e){Bd(n,"connected",e),e===!1&&eO(n)}function J0(n,e){cn(e,(t,s)=>{Bd(n,t,s)})}function Bd(n,e,t){const s=new qe("/.info/"+e),r=Pt(t);n.infoData_.updateSnapshot(s,r);const i=fc(n.infoSyncTree_,s,r);Rr(n.eventQueue_,s,i)}function Z0(n){return n.nextWriteId_++}function eO(n){aT(n,"onDisconnectEvents");const e=oT(n),t=Pl();fh(n.onDisconnect_,De(),(r,i)=>{const o=D0(r,i,n.serverSyncTree_,e);xv(t,r,o)});let s=[];fh(t,De(),(r,i)=>{s=s.concat(fc(n.serverSyncTree_,r,i));const o=rO(n,r);jd(n,o)}),n.onDisconnect_=Pl(),Rr(n.eventQueue_,De(),s)}function tO(n){n.persistentConnection_&&n.persistentConnection_.interrupt(G0)}function aT(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),St(t,...e)}function lT(n,e,t){return Qv(n.serverSyncTree_,e,t)||ke.EMPTY_NODE}function $d(n,e=n.transactionQueueTree_){if(e||gc(n,e),Ti(e)){const t=uT(n,e);z(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&nO(n,ra(e),t)}else nT(e)&&mc(e,t=>{$d(n,t)})}function nO(n,e,t){const s=t.map(u=>u.currentWriteId),r=lT(n,e,s);let i=r;const o=r.hash();for(let u=0;u<t.length;u++){const h=t[u];z(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=sn(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;n.server_.put(c.toString(),a,u=>{aT(n,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let m=0;m<t.length;m++)t[m].status=2,h=h.concat(Wr(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&f.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();gc(n,Ud(n.transactionQueueTree_,e)),$d(n,n.transactionQueueTree_),Rr(n.eventQueue_,e,h);for(let m=0;m<f.length;m++)na(f[m])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Jt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}jd(n,e)}},o)}function jd(n,e){const t=cT(n,e),s=ra(t),r=uT(n,t);return sO(n,r,s),s}function sO(n,e,t){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=sn(t,c.path);let h=!1,f;if(z(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,r=r.concat(Wr(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=z0)h=!0,f="maxretry",r=r.concat(Wr(n.serverSyncTree_,c.currentWriteId,!0));else{const m=lT(n,c.path,o);c.currentInputSnapshot=m;const g=e[a].update(m.val());if(g!==void 0){iT("transaction failed: Data returned ",g,c.path);let I=Pt(g);typeof g=="object"&&g!=null&&ds(g,".priority")||(I=I.updatePriority(m.getPriority()));const P=c.currentWriteId,V=oT(n),F=x0(I,m,V);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=F,c.currentWriteId=Z0(n),o.splice(o.indexOf(P),1),r=r.concat(C0(n.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),r=r.concat(Wr(n.serverSyncTree_,P,!0))}else h=!0,f="nodata",r=r.concat(Wr(n.serverSyncTree_,c.currentWriteId,!0))}Rr(n.eventQueue_,t,r),r=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}gc(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)na(s[a]);$d(n,n.transactionQueueTree_)}function cT(n,e){let t,s=n.transactionQueueTree_;for(t=Re(e);t!==null&&Ti(s)===void 0;)s=Ud(s,t),e=Be(e),t=Re(e);return s}function uT(n,e){const t=[];return hT(n,e,t),t.sort((s,r)=>s.order-r.order),t}function hT(n,e,t){const s=Ti(e);if(s)for(let r=0;r<s.length;r++)t.push(s[r]);mc(e,r=>{hT(n,r,t)})}function gc(n,e){const t=Ti(e);if(t){let s=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[s]=t[r],s++);t.length=s,tT(e,t.length>0?t:void 0)}mc(e,s=>{gc(n,s)})}function rO(n,e){const t=ra(cT(n,e)),s=Ud(n.transactionQueueTree_,e);return L0(s,r=>{Ru(n,r)}),Ru(n,s),sT(s,r=>{Ru(n,r)}),t}function Ru(n,e){const t=Ti(e);if(t){const s=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(z(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(z(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Wr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?tT(e,void 0):t.length=i+1,Rr(n.eventQueue_,ra(e),r);for(let o=0;o<s.length;o++)na(s[o])}}/**
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
 */function iO(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let r=t[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function oO(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Jt(`Invalid query segment '${t}' in query '${n}'`)}return e}const vg=function(n,e){const t=aO(n),s=t.namespace;t.domain==="firebase.com"&&gr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&gr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Lk();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Gk(t.host,t.secure,s,r,e,"",s!==t.subdomain),path:new qe(t.pathString)}},aO=function(n){let e="",t="",s="",r="",i="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let h=n.indexOf("/");h===-1&&(h=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(h,f)),h<f&&(r=iO(n.substring(h,f)));const m=oO(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),t=e.substring(I+1),i=s}"ns"in m&&(i=m.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class qd{constructor(e,t,s,r){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=r}get key(){return ve(this._path)?null:Rv(this._path)}get ref(){return new Ii(this._repo,this._path)}get _queryIdentifier(){const e=ig(this._queryParams),t=wd(e);return t==="{}"?"default":t}get _queryObject(){return ig(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof qd))return!1;const t=this._repo===e._repo,s=bv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+EN(this._path)}}class Ii extends qd{constructor(e,t){super(e,t,new Pd,!1)}get parent(){const e=Cv(this._path);return e===null?null:new Ii(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}R0(Ii);A0(Ii);/**
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
 */const lO="FIREBASE_DATABASE_EMULATOR_HOST",Th={};let cO=!1;function uO(n,e,t,s,r){let i=s||n.options.databaseURL;i===void 0&&(n.options.projectId||gr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),St("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=vg(i,r),a=o.repoInfo,c;typeof process<"u"&&Bm&&(c=Bm[lO]),c?(i=`http://${c}?ns=${a.namespace}`,o=vg(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new Kk(n.name,n.options,e);j0("Invalid Firebase Database URL",o),ve(o.path)||gr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=dO(a,n,u,new Hk(n.name,t));return new fO(h,n)}function hO(n,e){const t=Th[e];(!t||t[n.key]!==n)&&gr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),tO(n),delete t[n.key]}function dO(n,e,t,s){let r=Th[e.name];r||(r={},Th[e.name]=r);let i=r[n.toURLString()];return i&&gr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Q0(n,cO,t,s),r[n.toURLString()]=i,i}class fO{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Y0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ii(this._repo,De())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function pO(n){kk(Hs),Bn(new Tn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return uO(s,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Xt($m,jm,n),Xt($m,jm,"esm2017")}is.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};is.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};pO();var Tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,dT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,y){function E(){}E.prototype=y.prototype,C.D=y.prototype,C.prototype=new E,C.prototype.constructor=C,C.C=function(A,b,R){for(var v=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)v[Oe-2]=arguments[Oe];return y.prototype[b].apply(A,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(C,y,E){E||(E=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;16>b;++b)A[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=C.g[0],E=C.g[1],b=C.g[2];var R=C.g[3],v=y+(R^E&(b^R))+A[0]+3614090360&4294967295;y=E+(v<<7&4294967295|v>>>25),v=R+(b^y&(E^b))+A[1]+3905402710&4294967295,R=y+(v<<12&4294967295|v>>>20),v=b+(E^R&(y^E))+A[2]+606105819&4294967295,b=R+(v<<17&4294967295|v>>>15),v=E+(y^b&(R^y))+A[3]+3250441966&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(R^E&(b^R))+A[4]+4118548399&4294967295,y=E+(v<<7&4294967295|v>>>25),v=R+(b^y&(E^b))+A[5]+1200080426&4294967295,R=y+(v<<12&4294967295|v>>>20),v=b+(E^R&(y^E))+A[6]+2821735955&4294967295,b=R+(v<<17&4294967295|v>>>15),v=E+(y^b&(R^y))+A[7]+4249261313&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(R^E&(b^R))+A[8]+1770035416&4294967295,y=E+(v<<7&4294967295|v>>>25),v=R+(b^y&(E^b))+A[9]+2336552879&4294967295,R=y+(v<<12&4294967295|v>>>20),v=b+(E^R&(y^E))+A[10]+4294925233&4294967295,b=R+(v<<17&4294967295|v>>>15),v=E+(y^b&(R^y))+A[11]+2304563134&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(R^E&(b^R))+A[12]+1804603682&4294967295,y=E+(v<<7&4294967295|v>>>25),v=R+(b^y&(E^b))+A[13]+4254626195&4294967295,R=y+(v<<12&4294967295|v>>>20),v=b+(E^R&(y^E))+A[14]+2792965006&4294967295,b=R+(v<<17&4294967295|v>>>15),v=E+(y^b&(R^y))+A[15]+1236535329&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(b^R&(E^b))+A[1]+4129170786&4294967295,y=E+(v<<5&4294967295|v>>>27),v=R+(E^b&(y^E))+A[6]+3225465664&4294967295,R=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(R^y))+A[11]+643717713&4294967295,b=R+(v<<14&4294967295|v>>>18),v=E+(R^y&(b^R))+A[0]+3921069994&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(b^R&(E^b))+A[5]+3593408605&4294967295,y=E+(v<<5&4294967295|v>>>27),v=R+(E^b&(y^E))+A[10]+38016083&4294967295,R=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(R^y))+A[15]+3634488961&4294967295,b=R+(v<<14&4294967295|v>>>18),v=E+(R^y&(b^R))+A[4]+3889429448&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(b^R&(E^b))+A[9]+568446438&4294967295,y=E+(v<<5&4294967295|v>>>27),v=R+(E^b&(y^E))+A[14]+3275163606&4294967295,R=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(R^y))+A[3]+4107603335&4294967295,b=R+(v<<14&4294967295|v>>>18),v=E+(R^y&(b^R))+A[8]+1163531501&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(b^R&(E^b))+A[13]+2850285829&4294967295,y=E+(v<<5&4294967295|v>>>27),v=R+(E^b&(y^E))+A[2]+4243563512&4294967295,R=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(R^y))+A[7]+1735328473&4294967295,b=R+(v<<14&4294967295|v>>>18),v=E+(R^y&(b^R))+A[12]+2368359562&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(E^b^R)+A[5]+4294588738&4294967295,y=E+(v<<4&4294967295|v>>>28),v=R+(y^E^b)+A[8]+2272392833&4294967295,R=y+(v<<11&4294967295|v>>>21),v=b+(R^y^E)+A[11]+1839030562&4294967295,b=R+(v<<16&4294967295|v>>>16),v=E+(b^R^y)+A[14]+4259657740&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(E^b^R)+A[1]+2763975236&4294967295,y=E+(v<<4&4294967295|v>>>28),v=R+(y^E^b)+A[4]+1272893353&4294967295,R=y+(v<<11&4294967295|v>>>21),v=b+(R^y^E)+A[7]+4139469664&4294967295,b=R+(v<<16&4294967295|v>>>16),v=E+(b^R^y)+A[10]+3200236656&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(E^b^R)+A[13]+681279174&4294967295,y=E+(v<<4&4294967295|v>>>28),v=R+(y^E^b)+A[0]+3936430074&4294967295,R=y+(v<<11&4294967295|v>>>21),v=b+(R^y^E)+A[3]+3572445317&4294967295,b=R+(v<<16&4294967295|v>>>16),v=E+(b^R^y)+A[6]+76029189&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(E^b^R)+A[9]+3654602809&4294967295,y=E+(v<<4&4294967295|v>>>28),v=R+(y^E^b)+A[12]+3873151461&4294967295,R=y+(v<<11&4294967295|v>>>21),v=b+(R^y^E)+A[15]+530742520&4294967295,b=R+(v<<16&4294967295|v>>>16),v=E+(b^R^y)+A[2]+3299628645&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(b^(E|~R))+A[0]+4096336452&4294967295,y=E+(v<<6&4294967295|v>>>26),v=R+(E^(y|~b))+A[7]+1126891415&4294967295,R=y+(v<<10&4294967295|v>>>22),v=b+(y^(R|~E))+A[14]+2878612391&4294967295,b=R+(v<<15&4294967295|v>>>17),v=E+(R^(b|~y))+A[5]+4237533241&4294967295,E=b+(v<<21&4294967295|v>>>11),v=y+(b^(E|~R))+A[12]+1700485571&4294967295,y=E+(v<<6&4294967295|v>>>26),v=R+(E^(y|~b))+A[3]+2399980690&4294967295,R=y+(v<<10&4294967295|v>>>22),v=b+(y^(R|~E))+A[10]+4293915773&4294967295,b=R+(v<<15&4294967295|v>>>17),v=E+(R^(b|~y))+A[1]+2240044497&4294967295,E=b+(v<<21&4294967295|v>>>11),v=y+(b^(E|~R))+A[8]+1873313359&4294967295,y=E+(v<<6&4294967295|v>>>26),v=R+(E^(y|~b))+A[15]+4264355552&4294967295,R=y+(v<<10&4294967295|v>>>22),v=b+(y^(R|~E))+A[6]+2734768916&4294967295,b=R+(v<<15&4294967295|v>>>17),v=E+(R^(b|~y))+A[13]+1309151649&4294967295,E=b+(v<<21&4294967295|v>>>11),v=y+(b^(E|~R))+A[4]+4149444226&4294967295,y=E+(v<<6&4294967295|v>>>26),v=R+(E^(y|~b))+A[11]+3174756917&4294967295,R=y+(v<<10&4294967295|v>>>22),v=b+(y^(R|~E))+A[2]+718787259&4294967295,b=R+(v<<15&4294967295|v>>>17),v=E+(R^(b|~y))+A[9]+3951481745&4294967295,C.g[0]=C.g[0]+y&4294967295,C.g[1]=C.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,C.g[2]=C.g[2]+b&4294967295,C.g[3]=C.g[3]+R&4294967295}s.prototype.u=function(C,y){y===void 0&&(y=C.length);for(var E=y-this.blockSize,A=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=E;)r(this,C,R),R+=this.blockSize;if(typeof C=="string"){for(;R<y;)if(A[b++]=C.charCodeAt(R++),b==this.blockSize){r(this,A),b=0;break}}else for(;R<y;)if(A[b++]=C[R++],b==this.blockSize){r(this,A),b=0;break}}this.h=b,this.o+=y},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var y=1;y<C.length-8;++y)C[y]=0;var E=8*this.o;for(y=C.length-8;y<C.length;++y)C[y]=E&255,E/=256;for(this.u(C),C=Array(16),y=E=0;4>y;++y)for(var A=0;32>A;A+=8)C[E++]=this.g[y]>>>A&255;return C};function i(C,y){var E=a;return Object.prototype.hasOwnProperty.call(E,C)?E[C]:E[C]=y(C)}function o(C,y){this.h=y;for(var E=[],A=!0,b=C.length-1;0<=b;b--){var R=C[b]|0;A&&R==y||(E[b]=R,A=!1)}this.g=E}var a={};function c(C){return-128<=C&&128>C?i(C,function(y){return new o([y|0],0>y?-1:0)}):new o([C|0],0>C?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return f;if(0>C)return P(u(-C));for(var y=[],E=1,A=0;C>=E;A++)y[A]=C/E|0,E*=4294967296;return new o(y,0)}function h(C,y){if(C.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C.charAt(0)=="-")return P(h(C.substring(1),y));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(y,8)),A=f,b=0;b<C.length;b+=8){var R=Math.min(8,C.length-b),v=parseInt(C.substring(b,b+R),y);8>R?(R=u(Math.pow(y,R)),A=A.j(R).add(u(v))):(A=A.j(E),A=A.add(u(v)))}return A}var f=c(0),m=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(S(this))return-P(this).m();for(var C=0,y=1,E=0;E<this.g.length;E++){var A=this.i(E);C+=(0<=A?A:4294967296+A)*y,y*=4294967296}return C},n.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(I(this))return"0";if(S(this))return"-"+P(this).toString(C);for(var y=u(Math.pow(C,6)),E=this,A="";;){var b=x(E,y).g;E=V(E,b.j(y));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(C);if(E=b,I(E))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},n.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function I(C){if(C.h!=0)return!1;for(var y=0;y<C.g.length;y++)if(C.g[y]!=0)return!1;return!0}function S(C){return C.h==-1}n.l=function(C){return C=V(this,C),S(C)?-1:I(C)?0:1};function P(C){for(var y=C.g.length,E=[],A=0;A<y;A++)E[A]=~C.g[A];return new o(E,~C.h).add(m)}n.abs=function(){return S(this)?P(this):this},n.add=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],A=0,b=0;b<=y;b++){var R=A+(this.i(b)&65535)+(C.i(b)&65535),v=(R>>>16)+(this.i(b)>>>16)+(C.i(b)>>>16);A=v>>>16,R&=65535,v&=65535,E[b]=v<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function V(C,y){return C.add(P(y))}n.j=function(C){if(I(this)||I(C))return f;if(S(this))return S(C)?P(this).j(P(C)):P(P(this).j(C));if(S(C))return P(this.j(P(C)));if(0>this.l(g)&&0>C.l(g))return u(this.m()*C.m());for(var y=this.g.length+C.g.length,E=[],A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<C.g.length;b++){var R=this.i(A)>>>16,v=this.i(A)&65535,Oe=C.i(b)>>>16,st=C.i(b)&65535;E[2*A+2*b]+=v*st,F(E,2*A+2*b),E[2*A+2*b+1]+=R*st,F(E,2*A+2*b+1),E[2*A+2*b+1]+=v*Oe,F(E,2*A+2*b+1),E[2*A+2*b+2]+=R*Oe,F(E,2*A+2*b+2)}for(A=0;A<y;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=y;A<2*y;A++)E[A]=0;return new o(E,0)};function F(C,y){for(;(C[y]&65535)!=C[y];)C[y+1]+=C[y]>>>16,C[y]&=65535,y++}function D(C,y){this.g=C,this.h=y}function x(C,y){if(I(y))throw Error("division by zero");if(I(C))return new D(f,f);if(S(C))return y=x(P(C),y),new D(P(y.g),P(y.h));if(S(y))return y=x(C,P(y)),new D(P(y.g),y.h);if(30<C.g.length){if(S(C)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=y;0>=A.l(C);)E=ee(E),A=ee(A);var b=te(E,1),R=te(A,1);for(A=te(A,2),E=te(E,2);!I(A);){var v=R.add(A);0>=v.l(C)&&(b=b.add(E),R=v),A=te(A,1),E=te(E,1)}return y=V(C,b.j(y)),new D(b,y)}for(b=f;0<=C.l(y);){for(E=Math.max(1,Math.floor(C.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=u(E),v=R.j(y);S(v)||0<v.l(C);)E-=A,R=u(E),v=R.j(y);I(R)&&(R=m),b=b.add(R),C=V(C,v)}return new D(b,C)}n.A=function(C){return x(this,C).h},n.and=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)&C.i(A);return new o(E,this.h&C.h)},n.or=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)|C.i(A);return new o(E,this.h|C.h)},n.xor=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)^C.i(A);return new o(E,this.h^C.h)};function ee(C){for(var y=C.g.length+1,E=[],A=0;A<y;A++)E[A]=C.i(A)<<1|C.i(A-1)>>>31;return new o(E,C.h)}function te(C,y){var E=y>>5;y%=32;for(var A=C.g.length-E,b=[],R=0;R<A;R++)b[R]=0<y?C.i(R+E)>>>y|C.i(R+E+1)<<32-y:C.i(R+E);return new o(b,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,dT=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,hr=o}).apply(typeof Tg<"u"?Tg:typeof self<"u"?self:typeof window<"u"?window:{});var La=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fT,eo,pT,Za,Ih,mT,gT,_T;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof La=="object"&&La];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function r(l,d){if(d)e:{var p=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var N=l[_];if(!(N in p))break e;p=p[N]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var p=0,_=!1,N={next:function(){if(!_&&p<l.length){var O=p++;return{value:d(O,l[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}r("Array.prototype.values",function(l){return l||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function g(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function I(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,N,O){for(var K=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)K[xe-2]=arguments[xe];return d.prototype[N].apply(_,K)}}function S(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function P(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const N=l.length||0,O=_.length||0;l.length=N+O;for(let K=0;K<O;K++)l[N+K]=_[K]}else l.push(_)}}class V{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function F(l){return/^[\s\xa0]*$/.test(l)}function D(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var ee=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function te(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function C(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let p,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(p in _)l[p]=_[p];for(let O=0;O<E.length;O++)p=E[O],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function b(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function R(l){a.setTimeout(()=>{throw l},0)}function v(){var l=Wt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Oe{constructor(){this.h=this.g=null}add(d,p){const _=st.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var st=new V(()=>new We,l=>l.reset());class We{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,_e=!1,Wt=new Oe,un=()=>{const l=a.Promise.resolve(void 0);Te=()=>{l.then(Zt)}};var Zt=()=>{for(var l;l=v();){try{l.h.call(l.g)}catch(p){R(p)}var d=st;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}_e=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var fs=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function An(l,d){if(Ke.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(ee){e:{try{x(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ut[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&An.aa.h.call(this)}}I(An,Ke);var Ut={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(l,d,p,_,N){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=N,this.key=++X,this.da=this.fa=!1}function ne(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ce(l){this.src=l,this.g={},this.h=0}Ce.prototype.add=function(l,d,p,_,N){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var K=w(l,d,_,N);return-1<K?(d=l[K],p||(d.fa=!1)):(d=new Q(d,this.src,O,!!_,N),d.fa=p,l.push(d)),d};function T(l,d){var p=d.type;if(p in l.g){var _=l.g[p],N=Array.prototype.indexOf.call(_,d,void 0),O;(O=0<=N)&&Array.prototype.splice.call(_,N,1),O&&(ne(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function w(l,d,p,_){for(var N=0;N<l.length;++N){var O=l[N];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==_)return N}return-1}var k="closure_lm_"+(1e6*Math.random()|0),L={};function j(l,d,p,_,N){if(Array.isArray(d)){for(var O=0;O<d.length;O++)j(l,d[O],p,_,N);return null}return p=ae(p),l&&l[M]?l.K(d,p,u(_)?!!_.capture:!1,N):U(l,d,p,!1,_,N)}function U(l,d,p,_,N,O){if(!d)throw Error("Invalid event type");var K=u(N)?!!N.capture:!!N,xe=Y(l);if(xe||(l[k]=xe=new Ce(l)),p=xe.add(d,p,_,K,O),p.proxy)return p;if(_=G(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)fs||(N=K),N===void 0&&(N=!1),l.addEventListener(d.toString(),_,N);else if(l.attachEvent)l.attachEvent(q(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function G(){function l(p){return d.call(l.src,l.listener,p)}const d=ie;return l}function H(l,d,p,_,N){if(Array.isArray(d))for(var O=0;O<d.length;O++)H(l,d[O],p,_,N);else _=u(_)?!!_.capture:!!_,p=ae(p),l&&l[M]?(l=l.i,d=String(d).toString(),d in l.g&&(O=l.g[d],p=w(O,p,_,N),-1<p&&(ne(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[d],l.h--)))):l&&(l=Y(l))&&(d=l.g[d.toString()],l=-1,d&&(l=w(d,p,_,N)),(p=-1<l?d[l]:null)&&W(p))}function W(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[M])T(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(q(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=Y(d))?(T(p,l),p.h==0&&(p.src=null,d[k]=null)):ne(l)}}}function q(l){return l in L?L[l]:L[l]="on"+l}function ie(l,d){if(l.da)l=!0;else{d=new An(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&W(l),l=p.call(_,d)}return l}function Y(l){return l=l[k],l instanceof Ce?l:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(l){return typeof l=="function"?l:(l[se]||(l[se]=function(d){return l.handleEvent(d)}),l[se])}function oe(){He.call(this),this.i=new Ce(this),this.M=this,this.F=null}I(oe,He),oe.prototype[M]=!0,oe.prototype.removeEventListener=function(l,d,p,_){H(this,l,d,p,_)};function me(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new Ke(d,l);else if(d instanceof Ke)d.target=d.target||l;else{var N=d;d=new Ke(_,l),A(d,N)}if(N=!0,p)for(var O=p.length-1;0<=O;O--){var K=d.g=p[O];N=Ie(K,_,!0,d)&&N}if(K=d.g=l,N=Ie(K,_,!0,d)&&N,N=Ie(K,_,!1,d)&&N,p)for(O=0;O<p.length;O++)K=d.g=p[O],N=Ie(K,_,!1,d)&&N}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)ne(p[_]);delete l.g[d],l.h--}}this.F=null},oe.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},oe.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function Ie(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,O=0;O<d.length;++O){var K=d[O];if(K&&!K.da&&K.capture==p){var xe=K.listener,ft=K.ha||K.src;K.fa&&T(l.i,K),N=xe.call(ft,_)!==!1&&N}}return N&&!_.defaultPrevented}function vt(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function ht(l){l.g=vt(()=>{l.g=null,l.i&&(l.i=!1,ht(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class en extends He{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ht(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tt(l){He.call(this),this.h=l,this.g={}}I(Tt,He);var ps=[];function Si(l){te(l.g,function(d,p){this.g.hasOwnProperty(p)&&W(d)},l),l.g={}}Tt.prototype.N=function(){Tt.aa.N.call(this),Si(this)},Tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dt=a.JSON.stringify,tn=a.JSON.parse,ua=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Fc(){}Fc.prototype.h=null;function Df(l){return l.h||(l.h=l.i())}function xf(){}var Pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Uc(){Ke.call(this,"d")}I(Uc,Ke);function Bc(){Ke.call(this,"c")}I(Bc,Ke);var Xs={},Mf=null;function ha(){return Mf=Mf||new oe}Xs.La="serverreachability";function Lf(l){Ke.call(this,Xs.La,l)}I(Lf,Ke);function ki(l){const d=ha();me(d,new Lf(d))}Xs.STAT_EVENT="statevent";function Vf(l,d){Ke.call(this,Xs.STAT_EVENT,l),this.stat=d}I(Vf,Ke);function xt(l){const d=ha();me(d,new Vf(d,l))}Xs.Ma="timingevent";function Ff(l,d){Ke.call(this,Xs.Ma,l),this.size=d}I(Ff,Ke);function Ni(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Oi(){this.g=!0}Oi.prototype.xa=function(){this.g=!1};function ZI(l,d,p,_,N,O){l.info(function(){if(l.g)if(O)for(var K="",xe=O.split("&"),ft=0;ft<xe.length;ft++){var be=xe[ft].split("=");if(1<be.length){var It=be[0];be=be[1];var wt=It.split("_");K=2<=wt.length&&wt[1]=="type"?K+(It+"="+be+"&"):K+(It+"=redacted&")}}else K=null;else K=O;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+d+`
`+p+`
`+K})}function ew(l,d,p,_,N,O,K){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+d+`
`+p+`
`+O+" "+K})}function Sr(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+nw(l,p)+(_?" "+_:"")})}function tw(l,d){l.info(function(){return"TIMEOUT: "+d})}Oi.prototype.info=function(){};function nw(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var K=1;K<N.length;K++)N[K]=""}}}}return dt(p)}catch{return d}}var da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$c;function fa(){}I(fa,Fc),fa.prototype.g=function(){return new XMLHttpRequest},fa.prototype.i=function(){return{}},$c=new fa;function ms(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new Tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bf}function Bf(){this.i=null,this.g="",this.h=!1}var $f={},jc={};function qc(l,d,p){l.L=1,l.v=_a(Hn(d)),l.m=p,l.P=!0,jf(l,null)}function jf(l,d){l.F=Date.now(),pa(l),l.A=Hn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),np(p.i,"t",_),l.C=0,p=l.j.J,l.h=new Bf,l.g=vp(l.j,p?d:null,!l.m),0<l.O&&(l.M=new en(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(ps[0]=N.toString()),N=ps);for(var O=0;O<N.length;O++){var K=j(p,N[O],_||d.handleEvent,!1,d.h||d);if(!K)break;d.g[K.key]=K}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),ki(),ZI(l.i,l.u,l.A,l.l,l.R,l.m)}ms.prototype.ca=function(l){l=l.target;const d=this.M;d&&Kn(l)==3?d.j():this.Y(l)},ms.prototype.Y=function(l){try{if(l==this.g)e:{const wt=Kn(this.g);var d=this.g.Ba();const Nr=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||cp(this.g)))){this.J||wt!=4||d==7||(d==8||0>=Nr?ki(3):ki(2)),Wc(this);var p=this.g.Z();this.X=p;t:if(qf(this)){var _=cp(this.g);l="";var N=_.length,O=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Js(this),Di(this);var K="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(O&&d==N-1)});_.length=0,this.h.g+=l,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,ew(this.i,this.u,this.A,this.l,this.R,wt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,ft=this.g;if((xe=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(xe)){var be=xe;break t}}be=null}if(p=be)Sr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hc(this,p);else{this.o=!1,this.s=3,xt(12),Js(this),Di(this);break e}}if(this.P){p=!0;let hn;for(;!this.J&&this.C<K.length;)if(hn=sw(this,K),hn==jc){wt==4&&(this.s=4,xt(14),p=!1),Sr(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==$f){this.s=4,xt(15),Sr(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else Sr(this.i,this.l,hn,null),Hc(this,hn);if(qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||K.length!=0||this.h.h||(this.s=1,xt(16),p=!1),this.o=this.o&&p,!p)Sr(this.i,this.l,K,"[Invalid Chunked Response]"),Js(this),Di(this);else if(0<K.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Xc(It),It.M=!0,xt(11))}}else Sr(this.i,this.l,K,null),Hc(this,K);wt==4&&Js(this),this.o&&!this.J&&(wt==4?gp(this.j,this):(this.o=!1,pa(this)))}else vw(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),Js(this),Di(this)}}}catch{}finally{}};function qf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function sw(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?jc:(p=Number(d.substring(p,_)),isNaN(p)?$f:(_+=1,_+p>d.length?jc:(d=d.slice(_,_+p),l.C=_+p,d)))}ms.prototype.cancel=function(){this.J=!0,Js(this)};function pa(l){l.S=Date.now()+l.I,Wf(l,l.I)}function Wf(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ni(m(l.ba,l),d)}function Wc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}ms.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(tw(this.i,this.A),this.L!=2&&(ki(),xt(17)),Js(this),this.s=2,Di(this)):Wf(this,this.S-l)};function Di(l){l.j.G==0||l.J||gp(l.j,l)}function Js(l){Wc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Si(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Hc(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Kc(p.h,l))){if(!l.K&&Kc(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)wa(p),Ta(p);else break e;Yc(p),xt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ni(m(p.Za,p),6e3));if(1>=Gf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else er(p,11)}else if((l.K||p.g==l)&&wa(p),!F(d))for(N=p.Da.g.parse(d),d=0;d<N.length;d++){let be=N[d];if(p.T=be[0],be=be[1],p.G==2)if(be[0]=="c"){p.K=be[1],p.ia=be[2];const It=be[3];It!=null&&(p.la=It,p.j.info("VER="+p.la));const wt=be[4];wt!=null&&(p.Aa=wt,p.j.info("SVER="+p.Aa));const Nr=be[5];Nr!=null&&typeof Nr=="number"&&0<Nr&&(_=1.5*Nr,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const hn=l.g;if(hn){const Aa=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Aa){var O=_.h;O.g||Aa.indexOf("spdy")==-1&&Aa.indexOf("quic")==-1&&Aa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Gc(O,O.h),O.h=null))}if(_.D){const Jc=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jc&&(_.ya=Jc,Ve(_.I,_.D,Jc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var K=l;if(_.qa=Ep(_,_.J?_.ia:null,_.W),K.K){zf(_.h,K);var xe=K,ft=_.L;ft&&(xe.I=ft),xe.B&&(Wc(xe),pa(xe)),_.g=K}else pp(_);0<p.i.length&&Ia(p)}else be[0]!="stop"&&be[0]!="close"||er(p,7);else p.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?er(p,7):Qc(p):be[0]!="noop"&&p.l&&p.l.ta(be),p.v=0)}}ki(4)}catch{}}var rw=class{constructor(l,d){this.g=l,this.map=d}};function Hf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Gf(l){return l.h?1:l.g?l.g.size:0}function Kc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Gc(l,d){l.g?l.g.add(d):l.h=d}function zf(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Hf.prototype.cancel=function(){if(this.i=Qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Qf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return S(l.i)}function iw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function ow(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function Yf(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=ow(l),_=iw(l),N=_.length,O=0;O<N;O++)d.call(void 0,_[O],p&&p[O],l)}var Xf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aw(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),N=null;if(0<=_){var O=l[p].substring(0,_);N=l[p].substring(_+1)}else O=l[p];d(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Zs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Zs){this.h=l.h,ma(this,l.j),this.o=l.o,this.g=l.g,ga(this,l.s),this.l=l.l;var d=l.i,p=new Li;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Jf(this,p),this.m=l.m}else l&&(d=String(l).match(Xf))?(this.h=!1,ma(this,d[1]||"",!0),this.o=xi(d[2]||""),this.g=xi(d[3]||"",!0),ga(this,d[4]),this.l=xi(d[5]||"",!0),Jf(this,d[6]||"",!0),this.m=xi(d[7]||"")):(this.h=!1,this.i=new Li(null,this.h))}Zs.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Mi(d,Zf,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Mi(d,Zf,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Mi(p,p.charAt(0)=="/"?uw:cw,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Mi(p,dw)),l.join("")};function Hn(l){return new Zs(l)}function ma(l,d,p){l.j=p?xi(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function ga(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Jf(l,d,p){d instanceof Li?(l.i=d,fw(l.i,l.h)):(p||(d=Mi(d,hw)),l.i=new Li(d,l.h))}function Ve(l,d,p){l.i.set(d,p)}function _a(l){return Ve(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function xi(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mi(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,lw),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function lw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Zf=/[#\/\?@]/g,cw=/[#\?:]/g,uw=/[#\?]/g,hw=/[#\?@]/g,dw=/#/g;function Li(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function gs(l){l.g||(l.g=new Map,l.h=0,l.i&&aw(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Li.prototype,n.add=function(l,d){gs(this),this.i=null,l=Pr(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function ep(l,d){gs(l),d=Pr(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function tp(l,d){return gs(l),d=Pr(l,d),l.g.has(d)}n.forEach=function(l,d){gs(this),this.g.forEach(function(p,_){p.forEach(function(N){l.call(d,N,_,this)},this)},this)},n.na=function(){gs(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const N=l[_];for(let O=0;O<N.length;O++)p.push(d[_])}return p},n.V=function(l){gs(this);let d=[];if(typeof l=="string")tp(this,l)&&(d=d.concat(this.g.get(Pr(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},n.set=function(l,d){return gs(this),this.i=null,l=Pr(this,l),tp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function np(l,d,p){ep(l,d),0<p.length&&(l.i=null,l.g.set(Pr(l,d),S(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const O=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var N=O;K[_]!==""&&(N+="="+encodeURIComponent(String(K[_]))),l.push(N)}}return this.i=l.join("&")};function Pr(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function fw(l,d){d&&!l.j&&(gs(l),l.i=null,l.g.forEach(function(p,_){var N=_.toLowerCase();_!=N&&(ep(this,_),np(this,N,p))},l)),l.j=d}function pw(l,d){const p=new Oi;if(a.Image){const _=new Image;_.onload=g(_s,p,"TestLoadImage: loaded",!0,d,_),_.onerror=g(_s,p,"TestLoadImage: error",!1,d,_),_.onabort=g(_s,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=g(_s,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function mw(l,d){const p=new Oi,_=new AbortController,N=setTimeout(()=>{_.abort(),_s(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(O=>{clearTimeout(N),O.ok?_s(p,"TestPingServer: ok",!0,d):_s(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),_s(p,"TestPingServer: error",!1,d)})}function _s(l,d,p,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(p)}catch{}}function gw(){this.g=new ua}function _w(l,d,p){const _=p||"";try{Yf(l,function(N,O){let K=N;u(N)&&(K=dt(N)),d.push(_+O+"="+encodeURIComponent(K))})}catch(N){throw d.push(_+"type="+encodeURIComponent("_badmap")),N}}function ya(l){this.l=l.Ub||null,this.j=l.eb||!1}I(ya,Fc),ya.prototype.g=function(){return new Ea(this.l,this.j)},ya.prototype.i=function(l){return function(){return l}}({});function Ea(l,d){oe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Ea,oe),n=Ea.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Fi(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function sp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Vi(this):Fi(this),this.readyState==3&&sp(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Vi(this))},n.Qa=function(l){this.g&&(this.response=l,Vi(this))},n.ga=function(){this.g&&Vi(this)};function Vi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Fi(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Fi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function rp(l){let d="";return te(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function zc(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=rp(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ve(l,d,p))}function ze(l){oe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(ze,oe);var yw=/^https?$/i,Ew=["POST","PUT"];n=ze.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$c.g(),this.v=this.o?Df(this.o):Df($c),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(O){ip(this,O);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)p.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Ew,d,void 0))||_||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,K]of p)this.g.setRequestHeader(O,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lp(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){ip(this,O)}};function ip(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,op(l),va(l)}function op(l){l.A||(l.A=!0,me(l,"complete"),me(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,me(this,"complete"),me(this,"abort"),va(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),va(this,!0)),ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ap(this):this.bb())},n.bb=function(){ap(this)};function ap(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Kn(l)!=4||l.Z()!=2)){if(l.u&&Kn(l)==4)vt(l.Ea,0,l);else if(me(l,"readystatechange"),Kn(l)==4){l.h=!1;try{const K=l.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=K===0){var N=String(l.D).match(Xf)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),_=!yw.test(N?N.toLowerCase():"")}p=_}if(p)me(l,"complete"),me(l,"success");else{l.m=6;try{var O=2<Kn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",op(l)}}finally{va(l)}}}}function va(l,d){if(l.g){lp(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||me(l,"ready");try{p.onreadystatechange=_}catch{}}}function lp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Kn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),tn(d)}};function cp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function vw(l){const d={};l=(l.g&&2<=Kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(F(l[_]))continue;var p=b(l[_]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[N]||[];d[N]=O,O.push(p)}C(d,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function up(l){this.Aa=0,this.i=[],this.j=new Oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ui("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ui("baseRetryDelayMs",5e3,l),this.cb=Ui("retryDelaySeedMs",1e4,l),this.Wa=Ui("forwardChannelMaxRetries",2,l),this.wa=Ui("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Hf(l&&l.concurrentRequestLimit),this.Da=new gw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=up.prototype,n.la=8,n.G=1,n.connect=function(l,d,p,_){xt(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Ep(this,null,this.W),Ia(this)};function Qc(l){if(hp(l),l.G==3){var d=l.U++,p=Hn(l.I);if(Ve(p,"SID",l.K),Ve(p,"RID",d),Ve(p,"TYPE","terminate"),Bi(l,p),d=new ms(l,l.j,d),d.L=2,d.v=_a(Hn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=vp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),pa(d)}yp(l)}function Ta(l){l.g&&(Xc(l),l.g.cancel(),l.g=null)}function hp(l){Ta(l),l.u&&(a.clearTimeout(l.u),l.u=null),wa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ia(l){if(!Kf(l.h)&&!l.s){l.s=!0;var d=l.Ga;Te||un(),_e||(Te(),_e=!0),Wt.add(d,l),l.B=0}}function Tw(l,d){return Gf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ni(m(l.Ga,l,d),_p(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new ms(this,this.j,l);let O=this.o;if(this.S&&(O?(O=y(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=fp(this,N,d),p=Hn(this.I),Ve(p,"RID",l),Ve(p,"CVER",22),this.D&&Ve(p,"X-HTTP-Session-Id",this.D),Bi(this,p),O&&(this.O?d="headers="+encodeURIComponent(String(rp(O)))+"&"+d:this.m&&zc(p,this.m,O)),Gc(this.h,N),this.Ua&&Ve(p,"TYPE","init"),this.P?(Ve(p,"$req",d),Ve(p,"SID","null"),N.T=!0,qc(N,p,null)):qc(N,p,d),this.G=2}}else this.G==3&&(l?dp(this,l):this.i.length==0||Kf(this.h)||dp(this))};function dp(l,d){var p;d?p=d.l:p=l.U++;const _=Hn(l.I);Ve(_,"SID",l.K),Ve(_,"RID",p),Ve(_,"AID",l.T),Bi(l,_),l.m&&l.o&&zc(_,l.m,l.o),p=new ms(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=fp(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Gc(l.h,p),qc(p,_,d)}function Bi(l,d){l.H&&te(l.H,function(p,_){Ve(d,_,p)}),l.l&&Yf({},function(p,_){Ve(d,_,p)})}function fp(l,d,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let O=-1;for(;;){const K=["count="+p];O==-1?0<p?(O=N[0].g,K.push("ofs="+O)):O=0:K.push("ofs="+O);let xe=!0;for(let ft=0;ft<p;ft++){let be=N[ft].g;const It=N[ft].map;if(be-=O,0>be)O=Math.max(0,N[ft].g-100),xe=!1;else try{_w(It,K,"req"+be+"_")}catch{_&&_(It)}}if(xe){_=K.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function pp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Te||un(),_e||(Te(),_e=!0),Wt.add(d,l),l.v=0}}function Yc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ni(m(l.Fa,l),_p(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,mp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ni(m(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),Ta(this),mp(this))};function Xc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function mp(l){l.g=new ms(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Hn(l.qa);Ve(d,"RID","rpc"),Ve(d,"SID",l.K),Ve(d,"AID",l.T),Ve(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ve(d,"TO",l.ja),Ve(d,"TYPE","xmlhttp"),Bi(l,d),l.m&&l.o&&zc(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=_a(Hn(d)),p.m=null,p.P=!0,jf(p,l)}n.Za=function(){this.C!=null&&(this.C=null,Ta(this),Yc(this),xt(19))};function wa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function gp(l,d){var p=null;if(l.g==d){wa(l),Xc(l),l.g=null;var _=2}else if(Kc(l.h,d))p=d.D,zf(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;_=ha(),me(_,new Ff(_,p)),Ia(l)}else pp(l);else if(N=d.s,N==3||N==0&&0<d.X||!(_==1&&Tw(l,d)||_==2&&Yc(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),N){case 1:er(l,5);break;case 4:er(l,10);break;case 3:er(l,6);break;default:er(l,2)}}}function _p(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function er(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),_=l.Xa;const N=!_;_=new Zs(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ma(_,"https"),_a(_),N?pw(_.toString(),p):mw(_.toString(),p)}else xt(2);l.G=0,l.l&&l.l.sa(d),yp(l),hp(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function yp(l){if(l.G=0,l.ka=[],l.l){const d=Qf(l.h);(d.length!=0||l.i.length!=0)&&(P(l.ka,d),P(l.ka,l.i),l.h.i.length=0,S(l.i),l.i.length=0),l.l.ra()}}function Ep(l,d,p){var _=p instanceof Zs?Hn(p):new Zs(p);if(_.g!="")d&&(_.g=d+"."+_.g),ga(_,_.s);else{var N=a.location;_=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var O=new Zs(null);_&&ma(O,_),d&&(O.g=d),N&&ga(O,N),p&&(O.l=p),_=O}return p=l.D,d=l.ya,p&&d&&Ve(_,p,d),Ve(_,"VER",l.la),Bi(l,_),_}function vp(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new ze(new ya({eb:p})):new ze(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tp(){}n=Tp.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ra(){}Ra.prototype.g=function(l,d){return new Ht(l,d)};function Ht(l,d){oe.call(this),this.g=new up(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!F(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!F(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new kr(this)}I(Ht,oe),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Qc(this.g)},Ht.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=dt(l),l=p);d.i.push(new rw(d.Ya++,l)),d.G==3&&Ia(d)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Qc(this.g),delete this.g,Ht.aa.N.call(this)};function Ip(l){Uc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}I(Ip,Uc);function wp(){Bc.call(this),this.status=1}I(wp,Bc);function kr(l){this.g=l}I(kr,Tp),kr.prototype.ua=function(){me(this.g,"a")},kr.prototype.ta=function(l){me(this.g,new Ip(l))},kr.prototype.sa=function(l){me(this.g,new wp)},kr.prototype.ra=function(){me(this.g,"b")},Ra.prototype.createWebChannel=Ra.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,_T=function(){return new Ra},gT=function(){return ha()},mT=Xs,Ih={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},da.NO_ERROR=0,da.TIMEOUT=8,da.HTTP_ERROR=6,Za=da,Uf.COMPLETE="complete",pT=Uf,xf.EventType=Pi,Pi.OPEN="a",Pi.CLOSE="b",Pi.ERROR="c",Pi.MESSAGE="d",oe.prototype.listen=oe.prototype.K,eo=xf,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,fT=ze}).apply(typeof La<"u"?La:typeof self<"u"?self:typeof window<"u"?window:{});const Ig="@firebase/firestore";/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let wi="11.0.2";/**
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
 */const vr=new zo("@firebase/firestore");function Vr(){return vr.logLevel}function J(n,...e){if(vr.logLevel<=ge.DEBUG){const t=e.map(Wd);vr.debug(`Firestore (${wi}): ${n}`,...t)}}function cs(n,...e){if(vr.logLevel<=ge.ERROR){const t=e.map(Wd);vr.error(`Firestore (${wi}): ${n}`,...t)}}function ai(n,...e){if(vr.logLevel<=ge.WARN){const t=e.map(Wd);vr.warn(`Firestore (${wi}): ${n}`,...t)}}function Wd(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ce(n="Unexpected state"){const e=`FIRESTORE (${wi}) INTERNAL ASSERTION FAILED: `+n;throw cs(e),new Error(e)}function Ne(n,e){n||ce()}function pe(n,e){return n}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends qn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class os{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class yT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(At.UNAUTHENTICATED))}shutdown(){}}class gO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class _O{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ne(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new os;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new os,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new os)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ne(typeof s.accessToken=="string"),new yT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new At(e)}}class yO{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=At.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class EO{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new yO(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ne(this.o===void 0);const s=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ne(typeof t.token=="string"),this.R=t.token,new vO(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function IO(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class ET{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=IO(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function Ee(n,e){return n<e?-1:n>e?1:0}function li(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
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
 */class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new nt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new nt(0,0))}static max(){return new de(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vo{constructor(e,t,s){t===void 0?t=0:t>e.length&&ce(),s===void 0?s=e.length-t:s>e.length-t&&ce(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Vo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vo?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class $e extends Vo{construct(e,t,s){return new $e(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Z(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new $e(t)}static emptyPath(){return new $e([])}}const wO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Vo{construct(e,t,s){return new _t(e,t,s)}static isValidIdentifier(e){return wO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new Z(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new Z(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(t)}static emptyPath(){return new _t([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re($e.fromString(e))}static fromName(e){return new re($e.fromString(e).popFirst(5))}static empty(){return new re($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return $e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new $e(e.slice()))}}function RO(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=de.fromTimestamp(s===1e9?new nt(t+1,0):new nt(t,s));return new Ms(r,re.empty(),e)}function AO(n){return new Ms(n.readTime,n.key,-1)}class Ms{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ms(de.min(),re.empty(),-1)}static max(){return new Ms(de.max(),re.empty(),-1)}}function CO(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=re.comparator(n.documentKey,e.documentKey),t!==0?t:Ee(n.largestBatchId,e.largestBatchId))}/**
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
 */const bO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ri(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==bO)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,s)=>{t(e)})}static reject(e){return new $((t,s)=>{s(e)})}static waitFor(e){return new $((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next(r=>r?$.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new $((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,t){return new $((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function PO(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ai(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class _c{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_c.oe=-1;function yc(n){return n==null}function Dl(n){return n===0&&1/n==-1/0}function kO(n){return typeof n=="number"&&Number.isInteger(n)&&!Dl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function NO(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=wg(e)),e=OO(n.get(t),e);return wg(e)}function OO(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function wg(n){return n+""}/**
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
 */function Rg(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function vT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ge{constructor(e,t){this.comparator=e,this.root=t||pt.EMPTY}insert(e,t){return new Ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Va(this.root,e,this.comparator,!1)}getReverseIterator(){return new Va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Va(this.root,e,this.comparator,!0)}}class Va{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??pt.RED,this.left=r??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new pt(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return pt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,t,s,r,i){return this}insert(e,t,s){return new pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ag(this.data.getIterator())}getIteratorFrom(e){return new Ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new it(this.comparator);return t.data=e,t}}class Ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Qt([])}unionWith(e){let t=new it(_t.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Qt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class TT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new TT("Invalid base64 string: "+i):i}}(e);return new Et(t)}static fromUint8Array(e){const t=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Et(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const DO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ls(n){if(Ne(!!n),typeof n=="string"){let e=0;const t=DO.exec(n);if(Ne(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Xe(n.seconds),nanos:Xe(n.nanos)}}function Xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vs(n){return typeof n=="string"?Et.fromBase64String(n):Et.fromUint8Array(n)}/**
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
 */function Hd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ec(n){const e=n.mapValue.fields.__previous_value__;return Hd(e)?Ec(e):e}function Fo(n){const e=Ls(n.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class xO{constructor(e,t,s,r,i,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Uo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Uo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Fa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hd(n)?4:LO(n)?9007199254740991:MO(n)?10:11:ce()}function $n(n,e){if(n===e)return!0;const t=Fs(n);if(t!==Fs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fo(n).isEqual(Fo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Ls(r.timestampValue),a=Ls(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Vs(r.bytesValue).isEqual(Vs(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Xe(r.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(r.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Xe(r.integerValue)===Xe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Xe(r.doubleValue),a=Xe(i.doubleValue);return o===a?Dl(o)===Dl(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return li(n.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Rg(o)!==Rg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!$n(o[c],a[c])))return!1;return!0}(n,e);default:return ce()}}function Bo(n,e){return(n.values||[]).find(t=>$n(t,e))!==void 0}function ci(n,e){if(n===e)return 0;const t=Fs(n),s=Fs(e);if(t!==s)return Ee(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ee(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Xe(i.integerValue||i.doubleValue),c=Xe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Cg(n.timestampValue,e.timestampValue);case 4:return Cg(Fo(n),Fo(e));case 5:return Ee(n.stringValue,e.stringValue);case 6:return function(i,o){const a=Vs(i),c=Vs(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Ee(a[u],c[u]);if(h!==0)return h}return Ee(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ee(Xe(i.latitude),Xe(o.latitude));return a!==0?a:Ee(Xe(i.longitude),Xe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return bg(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const f=i.fields||{},m=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,I=(c=m.value)===null||c===void 0?void 0:c.arrayValue,S=Ee(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:bg(g,I)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Fa.mapValue&&o===Fa.mapValue)return 0;if(i===Fa.mapValue)return 1;if(o===Fa.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=Ee(c[f],h[f]);if(m!==0)return m;const g=ci(a[c[f]],u[h[f]]);if(g!==0)return g}return Ee(c.length,h.length)}(n.mapValue,e.mapValue);default:throw ce()}}function Cg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ee(n,e);const t=Ls(n),s=Ls(e),r=Ee(t.seconds,s.seconds);return r!==0?r:Ee(t.nanos,s.nanos)}function bg(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=ci(t[r],s[r]);if(i)return i}return Ee(t.length,s.length)}function ui(n){return wh(n)}function wh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Ls(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return re.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=wh(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${wh(t.fields[o])}`;return r+"}"}(n.mapValue):ce()}function el(n){switch(Fs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ec(n);return e?16+el(e):16;case 5:return 2*n.stringValue.length;case 6:return Vs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+el(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return zs(s.fields,(i,o)=>{r+=i.length+el(o)}),r}(n.mapValue);default:throw ce()}}function Sg(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Rh(n){return!!n&&"integerValue"in n}function Kd(n){return!!n&&"arrayValue"in n}function Pg(n){return!!n&&"nullValue"in n}function kg(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tl(n){return!!n&&"mapValue"in n}function MO(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function yo(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zs(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=yo(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yo(n.arrayValue.values[t]);return e}return Object.assign({},n)}function LO(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!tl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(t)}setAll(e){let t=_t.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=yo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());tl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];tl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){zs(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new $t(yo(this.value))}}function IT(n){const e=[];return zs(n.fields,(t,s)=>{const r=new _t([t]);if(tl(s)){const i=IT(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Qt(e)}/**
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
 */class kt{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,de.min(),de.min(),de.min(),$t.empty(),0)}static newFoundDocument(e,t,s,r){return new kt(e,1,t,de.min(),s,r,0)}static newNoDocument(e,t){return new kt(e,2,t,de.min(),de.min(),$t.empty(),0)}static newUnknownDocument(e,t){return new kt(e,3,t,de.min(),de.min(),$t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xl{constructor(e,t){this.position=e,this.inclusive=t}}function Ng(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=re.comparator(re.fromName(o.referenceValue),t.key):s=ci(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Og(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$n(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class $o{constructor(e,t="asc"){this.field=e,this.dir=t}}function VO(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class wT{}class tt extends wT{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new UO(e,t,s):t==="array-contains"?new jO(e,s):t==="in"?new qO(e,s):t==="not-in"?new WO(e,s):t==="array-contains-any"?new HO(e,s):new tt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new BO(e,s):new $O(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ci(t,this.value)):t!==null&&Fs(this.value)===Fs(t)&&this.matchesComparison(ci(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends wT{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new wn(e,t)}matches(e){return RT(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function RT(n){return n.op==="and"}function AT(n){return FO(n)&&RT(n)}function FO(n){for(const e of n.filters)if(e instanceof wn)return!1;return!0}function Ah(n){if(n instanceof tt)return n.field.canonicalString()+n.op.toString()+ui(n.value);if(AT(n))return n.filters.map(e=>Ah(e)).join(",");{const e=n.filters.map(t=>Ah(t)).join(",");return`${n.op}(${e})`}}function CT(n,e){return n instanceof tt?function(s,r){return r instanceof tt&&s.op===r.op&&s.field.isEqual(r.field)&&$n(s.value,r.value)}(n,e):n instanceof wn?function(s,r){return r instanceof wn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&CT(o,r.filters[a]),!0):!1}(n,e):void ce()}function bT(n){return n instanceof tt?function(t){return`${t.field.canonicalString()} ${t.op} ${ui(t.value)}`}(n):n instanceof wn?function(t){return t.op.toString()+" {"+t.getFilters().map(bT).join(" ,")+"}"}(n):"Filter"}class UO extends tt{constructor(e,t,s){super(e,t,s),this.key=re.fromName(s.referenceValue)}matches(e){const t=re.comparator(e.key,this.key);return this.matchesComparison(t)}}class BO extends tt{constructor(e,t){super(e,"in",t),this.keys=ST("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $O extends tt{constructor(e,t){super(e,"not-in",t),this.keys=ST("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ST(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>re.fromName(s.referenceValue))}class jO extends tt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Kd(t)&&Bo(t.arrayValue,this.value)}}class qO extends tt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bo(this.value.arrayValue,t)}}class WO extends tt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Bo(this.value.arrayValue,t)}}class HO extends tt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Kd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Bo(this.value.arrayValue,s))}}/**
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
 */class KO{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Dg(n,e=null,t=[],s=[],r=null,i=null,o=null){return new KO(n,e,t,s,r,i,o)}function Gd(n){const e=pe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ah(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),yc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ui(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ui(s)).join(",")),e.ue=t}return e.ue}function zd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!VO(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!CT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Og(n.startAt,e.startAt)&&Og(n.endAt,e.endAt)}function Ch(n){return re.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ci{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function GO(n,e,t,s,r,i,o,a){return new Ci(n,e,t,s,r,i,o,a)}function vc(n){return new Ci(n)}function xg(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function PT(n){return n.collectionGroup!==null}function Eo(n){const e=pe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new it(_t.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $o(i,s))}),t.has(_t.keyField().canonicalString())||e.ce.push(new $o(_t.keyField(),s))}return e.ce}function Fn(n){const e=pe(n);return e.le||(e.le=zO(e,Eo(n))),e.le}function zO(n,e){if(n.limitType==="F")return Dg(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new $o(r.field,i)});const t=n.endAt?new xl(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new xl(n.startAt.position,n.startAt.inclusive):null;return Dg(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function bh(n,e){const t=n.filters.concat([e]);return new Ci(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Sh(n,e,t){return new Ci(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Tc(n,e){return zd(Fn(n),Fn(e))&&n.limitType===e.limitType}function kT(n){return`${Gd(Fn(n))}|lt:${n.limitType}`}function Fr(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>bT(r)).join(", ")}]`),yc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>ui(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>ui(r)).join(",")),`Target(${s})`}(Fn(n))}; limitType=${n.limitType})`}function Ic(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):re.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of Eo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const u=Ng(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,Eo(s),r)||s.endAt&&!function(o,a,c){const u=Ng(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,Eo(s),r))}(n,e)}function QO(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function NT(n){return(e,t)=>{let s=!1;for(const r of Eo(n)){const i=YO(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function YO(n,e,t){const s=n.field.isKeyField()?re.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?ci(c,u):ce()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ce()}}/**
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
 */class Ar{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){zs(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return vT(this.inner)}size(){return this.innerSize}}/**
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
 */const XO=new Ge(re.comparator);function us(){return XO}const OT=new Ge(re.comparator);function to(...n){let e=OT;for(const t of n)e=e.insert(t.key,t);return e}function DT(n){let e=OT;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function cr(){return vo()}function xT(){return vo()}function vo(){return new Ar(n=>n.toString(),(n,e)=>n.isEqual(e))}const JO=new Ge(re.comparator),ZO=new it(re.comparator);function ye(...n){let e=ZO;for(const t of n)e=e.add(t);return e}const eD=new it(Ee);function tD(){return eD}/**
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
 */function Qd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dl(e)?"-0":e}}function MT(n){return{integerValue:""+n}}function nD(n,e){return kO(e)?MT(e):Qd(n,e)}/**
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
 */class wc{constructor(){this._=void 0}}function sD(n,e,t){return n instanceof Ml?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Hd(i)&&(i=Ec(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof jo?VT(n,e):n instanceof qo?FT(n,e):function(r,i){const o=LT(r,i),a=Mg(o)+Mg(r.Pe);return Rh(o)&&Rh(r.Pe)?MT(a):Qd(r.serializer,a)}(n,e)}function rD(n,e,t){return n instanceof jo?VT(n,e):n instanceof qo?FT(n,e):t}function LT(n,e){return n instanceof Ll?function(s){return Rh(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Ml extends wc{}class jo extends wc{constructor(e){super(),this.elements=e}}function VT(n,e){const t=UT(e);for(const s of n.elements)t.some(r=>$n(r,s))||t.push(s);return{arrayValue:{values:t}}}class qo extends wc{constructor(e){super(),this.elements=e}}function FT(n,e){let t=UT(e);for(const s of n.elements)t=t.filter(r=>!$n(r,s));return{arrayValue:{values:t}}}class Ll extends wc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Mg(n){return Xe(n.integerValue||n.doubleValue)}function UT(n){return Kd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function iD(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof jo&&r instanceof jo||s instanceof qo&&r instanceof qo?li(s.elements,r.elements,$n):s instanceof Ll&&r instanceof Ll?$n(s.Pe,r.Pe):s instanceof Ml&&r instanceof Ml}(n.transform,e.transform)}class oD{constructor(e,t){this.version=e,this.transformResults=t}}class En{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Rc{}function BT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Yd(n.key,En.none()):new ia(n.key,n.data,En.none());{const t=n.data,s=$t.empty();let r=new it(_t.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Qs(n.key,s,new Qt(r.toArray()),En.none())}}function aD(n,e,t){n instanceof ia?function(r,i,o){const a=r.value.clone(),c=Vg(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Qs?function(r,i,o){if(!nl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Vg(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll($T(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function To(n,e,t,s){return n instanceof ia?function(i,o,a,c){if(!nl(i.precondition,o))return a;const u=i.value.clone(),h=Fg(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Qs?function(i,o,a,c){if(!nl(i.precondition,o))return a;const u=Fg(i.fieldTransforms,c,o),h=o.data;return h.setAll($T(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,s):function(i,o,a){return nl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function lD(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=LT(s.transform,r||null);i!=null&&(t===null&&(t=$t.empty()),t.set(s.field,i))}return t||null}function Lg(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&li(s,r,(i,o)=>iD(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ia extends Rc{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Qs extends Rc{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $T(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Vg(n,e,t){const s=new Map;Ne(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,rD(o,a,t[r]))}return s}function Fg(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,sD(i,o,e))}return s}class Yd extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cD extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uD{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&aD(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=To(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=To(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=xT();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=BT(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ye())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,(t,s)=>Lg(t,s))&&li(this.baseMutations,e.baseMutations,(t,s)=>Lg(t,s))}}class Xd{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){Ne(e.mutations.length===s.length);let r=function(){return JO}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Xd(e,t,s,r)}}/**
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
 */class hD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ze,we;function fD(n){switch(n){default:return ce();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function jT(n){if(n===void 0)return cs("GRPC error has no .code"),B.UNKNOWN;switch(n){case Ze.OK:return B.OK;case Ze.CANCELLED:return B.CANCELLED;case Ze.UNKNOWN:return B.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return B.INTERNAL;case Ze.UNAVAILABLE:return B.UNAVAILABLE;case Ze.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ze.NOT_FOUND:return B.NOT_FOUND;case Ze.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ze.ABORTED:return B.ABORTED;case Ze.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ze.DATA_LOSS:return B.DATA_LOSS;default:return ce()}}(we=Ze||(Ze={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pD(){return new TextEncoder}/**
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
 */const mD=new hr([4294967295,4294967295],0);function Ug(n){const e=pD().encode(n),t=new dT;return t.update(e),new Uint8Array(t.digest())}function Bg(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([t,s],0),new hr([r,i],0)]}class Jd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new no(`Invalid padding: ${t}`);if(s<0)throw new no(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new no(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new no(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=hr.fromNumber(this.Te)}Ee(e,t,s){let r=e.add(t.multiply(hr.fromNumber(s)));return r.compare(mD)===1&&(r=new hr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Ug(e),[s,r]=Bg(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Jd(i,r,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=Ug(e),[s,r]=Bg(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class no extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ac{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,oa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ac(de.min(),r,new Ge(Ee),us(),ye())}}class oa{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new oa(s,t,ye(),ye(),ye())}}/**
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
 */class sl{constructor(e,t,s,r){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=r}}class qT{constructor(e,t){this.targetId=e,this.me=t}}class WT{constructor(e,t,s=Et.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class $g{constructor(){this.fe=0,this.ge=jg(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),t=ye(),s=ye();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:ce()}}),new oa(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=jg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gD{constructor(e){this.Le=e,this.Be=new Map,this.ke=us(),this.qe=Ua(),this.Qe=Ua(),this.Ke=new Ge(Ee)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,r)=>{this.je(r)&&t(r)})}Je(e){const t=e.targetId,s=e.me.count,r=this.Ye(t);if(r){const i=r.target;if(Ch(i))if(s===0){const o=new re(i.path);this.We(t,o,kt.newNoDocument(o,de.min()))}else Ne(s===1);else{const o=this.Ze(t);if(o!==s){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=Vs(s).toUint8Array()}catch(c){if(c instanceof TT)return ai("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Jd(o,r,i)}catch(c){return ai(c instanceof no?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(t,i,null),r++)}),r}it(e){const t=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ch(a.target)){const c=new re(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,kt.newNoDocument(c,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let s=ye();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new Ac(e,t,this.Ke,this.ke,s);return this.ke=us(),this.qe=Ua(),this.Qe=Ua(),this.Ke=new Ge(Ee),r}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const r=this.ze(e);this.ot(e,t)?r.Fe(t,1):r.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new $g,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new it(Ee),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new it(Ee),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new $g),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ua(){return new Ge(re.comparator)}function jg(){return new Ge(re.comparator)}const _D={asc:"ASCENDING",desc:"DESCENDING"},yD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ED={and:"AND",or:"OR"};class vD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ph(n,e){return n.useProto3Json||yc(e)?e:{value:e}}function Vl(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function TD(n,e){return Vl(n,e.toTimestamp())}function Un(n){return Ne(!!n),de.fromTimestamp(function(t){const s=Ls(t);return new nt(s.seconds,s.nanos)}(n))}function Zd(n,e){return kh(n,e).canonicalString()}function kh(n,e){const t=function(r){return new $e(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function KT(n){const e=$e.fromString(n);return Ne(XT(e)),e}function Nh(n,e){return Zd(n.databaseId,e.path)}function Au(n,e){const t=KT(e);if(t.get(1)!==n.databaseId.projectId)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new re(zT(t))}function GT(n,e){return Zd(n.databaseId,e)}function ID(n){const e=KT(n);return e.length===4?$e.emptyPath():zT(e)}function Oh(n){return new $e(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zT(n){return Ne(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qg(n,e,t){return{name:Nh(n,e),fields:t.value.mapValue.fields}}function wD(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ne(h===void 0||typeof h=="string"),Et.fromBase64String(h||"")):(Ne(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Et.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?B.UNKNOWN:jT(u.code);return new Z(h,u.message||"")}(o);t=new WT(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Au(n,s.document.name),i=Un(s.document.updateTime),o=s.document.createTime?Un(s.document.createTime):de.min(),a=new $t({mapValue:{fields:s.document.fields}}),c=kt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];t=new sl(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Au(n,s.document),i=s.readTime?Un(s.readTime):de.min(),o=kt.newNoDocument(r,i),a=s.removedTargetIds||[];t=new sl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Au(n,s.document),i=s.removedTargetIds||[];t=new sl([],i,r,null)}else{if(!("filter"in e))return ce();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new dD(r,i),a=s.targetId;t=new qT(a,o)}}return t}function RD(n,e){let t;if(e instanceof ia)t={update:qg(n,e.key,e.value)};else if(e instanceof Yd)t={delete:Nh(n,e.key)};else if(e instanceof Qs)t={update:qg(n,e.key,e.data),updateMask:DD(e.fieldMask)};else{if(!(e instanceof cD))return ce();t={verify:Nh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Ml)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ll)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ce()}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:TD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(n,e.precondition)),t}function AD(n,e){return n&&n.length>0?(Ne(e!==void 0),n.map(t=>function(r,i){let o=r.updateTime?Un(r.updateTime):Un(i);return o.isEqual(de.min())&&(o=Un(i)),new oD(o,r.transformResults||[])}(t,e))):[]}function CD(n,e){return{documents:[GT(n,e.path)]}}function bD(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=GT(n,r);const i=function(u){if(u.length!==0)return YT(wn.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Ur(m.field),direction:kD(m.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Ph(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:t,parent:r}}function SD(n){let e=ID(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){Ne(s===1);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(f){const m=QT(f);return m instanceof wn&&AT(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(m=>function(I){return new $o(Br(I.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,yc(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(f){const m=!!f.before,g=f.values||[];return new xl(g,m)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const m=!f.before,g=f.values||[];return new xl(g,m)}(t.endAt)),GO(e,r,o,i,a,"F",c,u)}function PD(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function QT(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Br(t.unaryFilter.field);return tt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Br(t.unaryFilter.field);return tt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(t.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Br(t.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(n):n.fieldFilter!==void 0?function(t){return tt.create(Br(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return wn.create(t.compositeFilter.filters.map(s=>QT(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ce()}}(t.compositeFilter.op))}(n):ce()}function kD(n){return _D[n]}function ND(n){return yD[n]}function OD(n){return ED[n]}function Ur(n){return{fieldPath:n.canonicalString()}}function Br(n){return _t.fromServerFormat(n.fieldPath)}function YT(n){return n instanceof tt?function(t){if(t.op==="=="){if(kg(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NAN"}};if(Pg(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(kg(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NOT_NAN"}};if(Pg(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(t.field),op:ND(t.op),value:t.value}}}(n):n instanceof wn?function(t){const s=t.getFilters().map(r=>YT(r));return s.length===1?s[0]:{compositeFilter:{op:OD(t.op),filters:s}}}(n):ce()}function DD(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function XT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class bs{constructor(e,t,s,r,i=de.min(),o=de.min(),a=Et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new bs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class xD{constructor(e){this.ht=e}}function MD(n){const e=SD({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sh(e,e.limit,"L"):e}/**
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
 */class LD{constructor(){this.ln=new VD}addToCollectionParentIndex(e,t){return this.ln.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Ms.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Ms.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class VD{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new it($e.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new it($e.comparator)).toArray()}}/**
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
 */const Wg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Bt{static withCacheSize(e){return new Bt(e,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Bt.DEFAULT_COLLECTION_PERCENTILE=10,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bt.DEFAULT=new Bt(41943040,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bt.DISABLED=new Bt(-1,0,0);/**
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
 */class hi{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new hi(0)}static Qn(){return new hi(-1)}}/**
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
 */function Hg([n,e],[t,s]){const r=Ee(n,t);return r===0?Ee(e,s):r}class FD{constructor(e){this.Gn=e,this.buffer=new it(Hg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Hg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class UD{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){J("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ai(t)?J("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ri(t)}await this.Yn(3e5)})}}class BD{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return $.resolve(_c.oe);const s=new FD(t);return this.Zn.forEachTarget(e,r=>s.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>s.Hn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Wg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wg):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,t))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),Vr()<=ge.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f})))}}function $D(n,e){return new BD(n,e)}/**
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
 */class jD{constructor(){this.changes=new Ar(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class WD{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&To(s.mutation,r,Qt.empty(),nt.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ye()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ye()){const r=cr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=to();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=cr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ye()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=us();const o=vo(),a=function(){return vo()}();return t.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Qs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),To(h.mutation,u,h.mutation.getFieldMask(),nt.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var f;return a.set(u,new qD(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const s=vo();let r=new Ge((o,a)=>o-a),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=s.get(c)||Qt.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(r.get(a.batchId)||ye()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=xT();h.forEach(m=>{if(!i.has(m)){const g=BT(t.get(m),s.get(m));g!==null&&f.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return $.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):PT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):$.resolve(cr());let a=-1,c=i;return o.next(u=>$.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ye())).next(h=>({batchId:a,changes:DT(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new re(t)).next(s=>{let r=to();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=to();return this.indexManager.getCollectionParents(e,i).next(a=>$.forEach(a,c=>{const u=function(f,m){return new Ci(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,kt.newInvalidDocument(h)))});let a=to();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&To(h.mutation,u,Qt.empty(),nt.now()),Ic(t,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class HD{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return $.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Un(r.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(r){return{name:r.name,query:MD(r.bundledQuery),readTime:Un(r.readTime)}}(t)),$.resolve()}}/**
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
 */class KD{constructor(){this.overlays=new Ge(re.comparator),this.Er=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=cr();return $.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.Tt(e,t,i)}),$.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Er.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const r=cr(),i=t.length+1,o=new re(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return $.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Ge((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=cr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=cr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return $.resolve(a)}Tt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Er.get(r.largestBatchId).delete(s.key);this.Er.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new hD(t,s));let i=this.Er.get(t);i===void 0&&(i=ye(),this.Er.set(t,i)),this.Er.set(t,i.add(s.key))}}/**
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
 */class GD{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class ef{constructor(){this.dr=new it(lt.Ar),this.Rr=new it(lt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new lt(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new lt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new re(new $e([])),s=new lt(t,e),r=new lt(t,e+1),i=[];return this.Rr.forEachInRange([s,r],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new re(new $e([])),s=new lt(t,e),r=new lt(t,e+1);let i=ye();return this.Rr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new lt(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class lt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return re.comparator(e.key,t.key)||Ee(e.br,t.br)}static Vr(e,t){return Ee(e.br,t.br)||re.comparator(e.key,t.key)}}/**
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
 */class zD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new it(lt.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uD(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.vr=this.vr.add(new lt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,t){return $.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Fr(s),i=r<0?0:r;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new lt(t,0),r=new lt(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([s,r],o=>{const a=this.Cr(o.br);i.push(a)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new it(Ee);return t.forEach(r=>{const i=new lt(r,0),o=new lt(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{s=s.add(a.br)})}),$.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;re.isDocumentKey(i)||(i=i.child(""));const o=new lt(new re(i),0);let a=new it(Ee);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.br)),!0)},o),$.resolve(this.Mr(a))}Mr(e){const t=[];return e.forEach(s=>{const r=this.Cr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){Ne(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return $.forEach(t.mutations,r=>{const i=new lt(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new lt(t,0),r=this.vr.firstAfterOrEqual(s);return $.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class QD{constructor(e){this.Nr=e,this.docs=function(){return new Ge(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():kt.newInvalidDocument(t))}getEntries(e,t){let s=us();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():kt.newInvalidDocument(r))}),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=us();const o=t.path,a=new re(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||CO(AO(h),s)<=0||(r.has(h.key)||Ic(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,t,s,r){ce()}Lr(e,t){return $.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new YD(this)}getSize(e){return $.resolve(this.size)}}class YD extends jD{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.hr.addEntry(e,r)):this.hr.removeEntry(s)}),$.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class XD{constructor(e){this.persistence=e,this.Br=new Ar(t=>Gd(t),zd),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.kr=0,this.qr=new ef,this.targetCount=0,this.Qr=hi.qn()}forEachTarget(e,t){return this.Br.forEach((s,r)=>t(r)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),$.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new hi(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Un(t),$.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),$.waitFor(i).next(()=>r)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.qr.containsKey(t))}}/**
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
 */class JT{constructor(e,t){this.Kr={},this.overlays={},this.$r=new _c(0),this.Ur=!1,this.Ur=!0,this.Wr=new GD,this.referenceDelegate=e(this),this.Gr=new XD(this),this.indexManager=new LD,this.remoteDocumentCache=function(r){return new QD(r)}(s=>this.referenceDelegate.zr(s)),this.serializer=new xD(t),this.jr=new HD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new KD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new zD(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){J("MemoryPersistence","Starting transaction:",e);const r=new JD(this.$r.next());return this.referenceDelegate.Hr(),s(r).next(i=>this.referenceDelegate.Jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Yr(e,t){return $.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class JD extends SO{constructor(e){super(),this.currentSequenceNumber=e}}class tf{constructor(e){this.persistence=e,this.Zr=new ef,this.Xr=null}static ei(e){return new tf(e)}get ti(){if(this.Xr)return this.Xr;throw ce()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),$.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(r=>this.ti.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.ti.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,s=>{const r=re.fromPath(s);return this.ni(e,r).next(i=>{i||t.removeEntry(r,de.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return $.or([()=>$.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Fl{constructor(e,t){this.persistence=e,this.ri=new Ar(s=>NO(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=$D(this,t)}static ei(e,t){return new Fl(e,t)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return $.forEach(this.ri,(s,r)=>this.ir(e,s,r).next(i=>i?$.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Lr(e,o=>this.ir(e,o,t).next(a=>{a||(s++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=el(e.data.value)),t}ir(e,t,s){return $.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.ri.get(t);return $.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class nf{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=r}static zi(e,t){let s=ye(),r=ye();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new nf(e,t.fromCache,s,r)}}/**
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
 */class ZD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ex{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return _C()?8:PO(Dt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.Xi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,t,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ZD;return this.ts(e,t,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,t,o,a.size)})}).next(()=>i.result)}ns(e,t,s,r){return s.documentReadCount<this.Ji?(Vr()<=ge.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Fr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(Vr()<=ge.DEBUG&&J("QueryEngine","Query:",Fr(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Yi*r?(Vr()<=ge.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Fr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fn(t))):$.resolve())}Xi(e,t){if(xg(t))return $.resolve(null);let s=Fn(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Sh(t,null,"F"),s=Fn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ye(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.rs(t,a);return this.ss(t,u,o,c.readTime)?this.Xi(e,Sh(t,null,"F")):this.os(e,u,t,c)}))})))}es(e,t,s,r){return xg(t)||r.isEqual(de.min())?$.resolve(null):this.Zi.getDocuments(e,s).next(i=>{const o=this.rs(t,i);return this.ss(t,o,s,r)?$.resolve(null):(Vr()<=ge.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Fr(t)),this.os(e,o,t,RO(r,-1)).next(a=>a))})}rs(e,t){let s=new it(NT(e));return t.forEach((r,i)=>{Ic(e,i)&&(s=s.add(i))}),s}ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(e,t,s){return Vr()<=ge.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Fr(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ms.min(),s)}os(e,t,s,r){return this.Zi.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class tx{constructor(e,t,s,r){this.persistence=e,this._s=t,this.serializer=r,this.us=new Ge(Ee),this.cs=new Ar(i=>Gd(i),zd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WD(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function nx(n,e,t,s){return new tx(n,e,t,s)}async function ZT(n,e){const t=pe(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ye();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function sx(n,e){const t=pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,m=f.keys();let g=$.resolve();return m.forEach(I=>{g=g.next(()=>h.getEntry(c,I)).next(S=>{const P=u.docVersions.get(I);Ne(P!==null),S.version.compareTo(P)<0&&(f.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),h.addEntry(S)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=ye();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function eI(n){const e=pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function rx(n,e){const t=pe(n),s=e.snapshotVersion;let r=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.hs.newChangeBuffer({trackRemovals:!0});r=t.us;const a=[];e.targetChanges.forEach((h,f)=>{const m=r.get(f);if(!m)return;a.push(t.Gr.removeMatchingKeys(i,h.removedDocuments,f).next(()=>t.Gr.addMatchingKeys(i,h.addedDocuments,f)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Et.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(f,g),function(S,P,V){return S.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(m,g,h)&&a.push(t.Gr.updateTargetData(i,g))});let c=us(),u=ye();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(ix(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!s.isEqual(de.min())){const h=t.Gr.getLastRemoteSnapshotVersion(i).next(f=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return $.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.us=r,i))}function ix(n,e,t){let s=ye(),r=ye();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=us();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:r}})}function ox(n,e){const t=pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ax(n,e){const t=pe(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Gr.getTargetData(s,e).next(i=>i?(r=i,$.resolve(r)):t.Gr.allocateTargetId(s).next(o=>(r=new bs(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.us.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function Dh(n,e,t){const s=pe(n),r=s.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ai(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.us=s.us.remove(e),s.cs.delete(r.target)}function Kg(n,e,t){const s=pe(n);let r=de.min(),i=ye();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=pe(c),m=f.cs.get(h);return m!==void 0?$.resolve(f.us.get(m)):f.Gr.getTargetData(u,h)}(s,o,Fn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s._s.getDocumentsMatchingQuery(o,e,t?r:de.min(),t?i:ye())).next(a=>(lx(s,QO(e),a),{documents:a,ds:i})))}function lx(n,e,t){let s=n.ls.get(e)||de.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.ls.set(e,s)}class Gg{constructor(){this.activeTargetIds=tD()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cx{constructor(){this._o=new Gg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Gg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ux{uo(e){}shutdown(){}}/**
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
 */class zg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ba=null;function Cu(){return Ba===null?Ba=function(){return 268435456+Math.round(2147483648*Math.random())}():Ba++,"0x"+Ba.toString(16)}/**
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
 */const hx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dx{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Rt="WebChannelConnection";class fx extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${r}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Oo(t,s,r,i,o){const a=Cu(),c=this.No(t,s.toUriEncodedString());J("RestConnection",`Sending RPC '${t}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(t,c,u,r).then(h=>(J("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw ai("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}ko(t,s,r,i,o,a){return this.Oo(t,s,r,i,o)}Lo(t,s,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}No(t,s){const r=hx[t];return`${this.Fo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,r){const i=Cu();return new Promise((o,a)=>{const c=new fT;c.setWithCredentials(!0),c.listenOnce(pT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Za.NO_ERROR:const h=c.getResponseJson();J(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Za.TIMEOUT:J(Rt,`RPC '${e}' ${i} timed out`),a(new Z(B.DEADLINE_EXCEEDED,"Request time out"));break;case Za.HTTP_ERROR:const f=c.getStatus();if(J(Rt,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const I=function(P){const V=P.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(V)>=0?V:B.UNKNOWN}(g.status);a(new Z(I,g.message))}else a(new Z(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new Z(B.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{J(Rt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);J(Rt,`RPC '${e}' ${i} sending request:`,r),c.send(t,"POST",u,s,15)})}qo(e,t,s){const r=Cu(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_T(),a=gT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=i.join("");J(Rt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let m=!1,g=!1;const I=new dx({Eo:P=>{g?J(Rt,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(m||(J(Rt,`Opening RPC '${e}' stream ${r} transport.`),f.open(),m=!0),J(Rt,`RPC '${e}' stream ${r} sending:`,P),f.send(P))},Ao:()=>f.close()}),S=(P,V,F)=>{P.listen(V,D=>{try{F(D)}catch(x){setTimeout(()=>{throw x},0)}})};return S(f,eo.EventType.OPEN,()=>{g||(J(Rt,`RPC '${e}' stream ${r} transport opened.`),I.So())}),S(f,eo.EventType.CLOSE,()=>{g||(g=!0,J(Rt,`RPC '${e}' stream ${r} transport closed`),I.Do())}),S(f,eo.EventType.ERROR,P=>{g||(g=!0,ai(Rt,`RPC '${e}' stream ${r} transport errored:`,P),I.Do(new Z(B.UNAVAILABLE,"The operation could not be completed")))}),S(f,eo.EventType.MESSAGE,P=>{var V;if(!g){const F=P.data[0];Ne(!!F);const D=F,x=(D==null?void 0:D.error)||((V=D[0])===null||V===void 0?void 0:V.error);if(x){J(Rt,`RPC '${e}' stream ${r} received error:`,x);const ee=x.status;let te=function(E){const A=Ze[E];if(A!==void 0)return jT(A)}(ee),C=x.message;te===void 0&&(te=B.INTERNAL,C="Unknown error status: "+ee+" with message "+x.message),g=!0,I.Do(new Z(te,C)),f.close()}else J(Rt,`RPC '${e}' stream ${r} received:`,F),I.vo(F)}}),S(a,mT.STAT_EVENT,P=>{P.stat===Ih.PROXY?J(Rt,`RPC '${e}' stream ${r} detected buffering proxy`):P.stat===Ih.NOPROXY&&J(Rt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{I.bo()},0),I}}function bu(){return typeof document<"u"?document:null}/**
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
 */function Cc(n){return new vD(n,!0)}/**
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
 */class tI{constructor(e,t,s=1e3,r=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),r=Math.max(0,t-s);r>0&&J("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class nI{constructor(e,t,s,r,i,o,a,c){this.li=e,this.Yo=s,this.Zo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new tI(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(cs(t.toString()),cs("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Xo===t&&this.I_(s,r)},s=>{e(()=>{const r=new Z(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(r)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{s(()=>this.E_(r))}),this.stream.onMessage(r=>{s(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class px extends nI{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=wD(this.serializer,e),s=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Un(o.readTime):de.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=Oh(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=Ch(c)?{documents:CD(i,c)}:{query:bD(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=HT(i,o.resumeToken);const u=Ph(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){a.readTime=Vl(i,o.snapshotVersion.toTimestamp());const u=Ph(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=PD(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=Oh(this.serializer),t.removeTarget=e,this.c_(t)}}class mx extends nI{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=AD(e.writeResults,e.commitTime),s=Un(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=Oh(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>RD(this.serializer,s))};this.c_(t)}}/**
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
 */class gx extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,kh(t,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(B.UNKNOWN,i.toString())})}ko(e,t,s,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,kh(t,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(B.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class _x{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(cs(t),this.C_=!1):J("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class yx{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{s.enqueueAndForget(async()=>{Cr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=pe(c);u.k_.add(4),await aa(u),u.K_.set("Unknown"),u.k_.delete(4),await bc(u)}(this))})}),this.K_=new _x(s,r)}}async function bc(n){if(Cr(n))for(const e of n.q_)await e(!0)}async function aa(n){for(const e of n.q_)await e(!1)}function sI(n,e){const t=pe(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),af(t)?of(t):bi(t).s_()&&rf(t,e))}function sf(n,e){const t=pe(n),s=bi(t);t.B_.delete(e),s.s_()&&rI(t,e),t.B_.size===0&&(s.s_()?s.a_():Cr(t)&&t.K_.set("Unknown"))}function rf(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bi(n).V_(e)}function rI(n,e){n.U_.xe(e),bi(n).m_(e)}function of(n){n.U_=new gD({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),bi(n).start(),n.K_.F_()}function af(n){return Cr(n)&&!bi(n).i_()&&n.B_.size>0}function Cr(n){return pe(n).k_.size===0}function iI(n){n.U_=void 0}async function Ex(n){n.K_.set("Online")}async function vx(n){n.B_.forEach((e,t)=>{rf(n,e)})}async function Tx(n,e){iI(n),af(n)?(n.K_.O_(e),of(n)):n.K_.set("Unknown")}async function Ix(n,e,t){if(n.K_.set("Online"),e instanceof WT&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.B_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.B_.delete(a),r.U_.removeTarget(a))}(n,e)}catch(s){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ul(n,s)}else if(e instanceof sl?n.U_.$e(e):e instanceof qT?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(de.min()))try{const s=await eI(n.localStore);t.compareTo(s)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.B_.get(c);if(!h)return;i.B_.set(c,h.withResumeToken(Et.EMPTY_BYTE_STRING,h.snapshotVersion)),rI(i,c);const f=new bs(h.target,c,u,h.sequenceNumber);rf(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(s){J("RemoteStore","Failed to raise snapshot:",s),await Ul(n,s)}}async function Ul(n,e,t){if(!Ai(e))throw e;n.k_.add(1),await aa(n),n.K_.set("Offline"),t||(t=()=>eI(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await bc(n)})}function oI(n,e){return e().catch(t=>Ul(n,t,e))}async function Sc(n){const e=pe(n),t=Us(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;wx(e);)try{const r=await ox(e.localStore,s);if(r===null){e.L_.length===0&&t.a_();break}s=r.batchId,Rx(e,r)}catch(r){await Ul(e,r)}aI(e)&&lI(e)}function wx(n){return Cr(n)&&n.L_.length<10}function Rx(n,e){n.L_.push(e);const t=Us(n);t.s_()&&t.f_&&t.g_(e.mutations)}function aI(n){return Cr(n)&&!Us(n).i_()&&n.L_.length>0}function lI(n){Us(n).start()}async function Ax(n){Us(n).w_()}async function Cx(n){const e=Us(n);for(const t of n.L_)e.g_(t.mutations)}async function bx(n,e,t){const s=n.L_.shift(),r=Xd.from(s,e,t);await oI(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Sc(n)}async function Sx(n,e){e&&Us(n).f_&&await async function(s,r){if(function(o){return fD(o)&&o!==B.ABORTED}(r.code)){const i=s.L_.shift();Us(s).__(),await oI(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Sc(s)}}(n,e),aI(n)&&lI(n)}async function Qg(n,e){const t=pe(n);t.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const s=Cr(t);t.k_.add(3),await aa(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await bc(t)}async function Px(n,e){const t=pe(n);e?(t.k_.delete(2),await bc(t)):e||(t.k_.add(2),await aa(t),t.K_.set("Unknown"))}function bi(n){return n.W_||(n.W_=function(t,s,r){const i=pe(t);return i.b_(),new px(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Ro:Ex.bind(null,n),mo:vx.bind(null,n),po:Tx.bind(null,n),R_:Ix.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),af(n)?of(n):n.K_.set("Unknown")):(await n.W_.stop(),iI(n))})),n.W_}function Us(n){return n.G_||(n.G_=function(t,s,r){const i=pe(t);return i.b_(),new mx(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Ax.bind(null,n),po:Sx.bind(null,n),p_:Cx.bind(null,n),y_:bx.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Sc(n)):(await n.G_.stop(),n.L_.length>0&&(J("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class lf{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new os,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new lf(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cf(n,e){if(cs("AsyncQueue",`${e}: ${n}`),Ai(n))return new Z(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ni{static emptySet(e){return new ni(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||re.comparator(t.key,s.key):(t,s)=>re.comparator(t.key,s.key),this.keyedMap=to(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ni)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ni;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Yg{constructor(){this.z_=new Ge(re.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ce():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class di{constructor(e,t,s,r,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new di(e,t,ni.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class kx{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Nx{constructor(){this.queries=Xg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const r=pe(t),i=r.queries;r.queries=Xg(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(s)})})(this,new Z(B.ABORTED,"Firestore shutting down"))}}function Xg(){return new Ar(n=>kT(n),Tc)}async function uf(n,e){const t=pe(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Y_()&&e.Z_()&&(s=2):(i=new kx,s=e.Z_()?0:1);try{switch(s){case 0:i.H_=await t.onListen(r,!0);break;case 1:i.H_=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=cf(o,`Initialization of query '${Fr(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&df(t)}async function hf(n,e){const t=pe(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?r=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Ox(n,e){const t=pe(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.J_)a.ta(r)&&(s=!0);o.H_=r}}s&&df(t)}function Dx(n,e,t){const s=pe(n),r=s.queries.get(e);if(r)for(const i of r.J_)i.onError(t);s.queries.delete(e)}function df(n){n.X_.forEach(e=>{e.next()})}var xh,Jg;(Jg=xh||(xh={})).na="default",Jg.Cache="cache";class ff{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new di(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==xh.Cache}}/**
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
 */class cI{constructor(e){this.key=e}}class uI{constructor(e){this.key=e}}class xx{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ye(),this.mutatedKeys=ye(),this.Va=NT(e),this.ma=new ni(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new Yg,r=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,f)=>{const m=r.get(h),g=Ic(this.query,f)?f:null,I=!!m&&this.mutatedKeys.has(m.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;m&&g?m.data.isEqual(g.data)?I!==S&&(s.track({type:3,doc:g}),P=!0):this.ya(m,g)||(s.track({type:2,doc:g}),P=!0,(c&&this.Va(g,c)>0||u&&this.Va(g,u)<0)&&(a=!0)):!m&&g?(s.track({type:0,doc:g}),P=!0):m&&!g&&(s.track({type:1,doc:m}),P=!0,(c||u)&&(a=!0)),P&&(g?(o=o.add(g),i=S?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ma:o,pa:s,ss:a,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(g,I){const S=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return S(g)-S(I)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(s),r=r!=null&&r;const a=t&&!r?this.Sa():[],c=this.Ra.size===0&&this.current&&!r?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new di(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Yg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ye(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new uI(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new cI(s))}),t}va(e){this.da=e.ds,this.Ra=ye();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return di.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Mx{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Lx{constructor(e){this.key=e,this.Fa=!1}}class Vx{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ar(a=>kT(a),Tc),this.Oa=new Map,this.Na=new Set,this.La=new Ge(re.comparator),this.Ba=new Map,this.ka=new ef,this.qa={},this.Qa=new Map,this.Ka=hi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Fx(n,e,t=!0){const s=gI(n);let r;const i=s.xa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Ca()):r=await hI(s,e,t,!0),r}async function Ux(n,e){const t=gI(n);await hI(t,e,!0,!1)}async function hI(n,e,t,s){const r=await ax(n.localStore,Fn(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return s&&(a=await Bx(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&sI(n.remoteStore,r),a}async function Bx(n,e,t,s,r){n.Ua=(f,m,g)=>async function(S,P,V,F){let D=P.view.ga(V);D.ss&&(D=await Kg(S.localStore,P.query,!1).then(({documents:C})=>P.view.ga(C,D)));const x=F&&F.targetChanges.get(P.targetId),ee=F&&F.targetMismatches.get(P.targetId)!=null,te=P.view.applyChanges(D,S.isPrimaryClient,x,ee);return e_(S,P.targetId,te.ba),te.snapshot}(n,f,m,g);const i=await Kg(n.localStore,e,!0),o=new xx(e,i.ds),a=o.ga(i.documents),c=oa.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);e_(n,t,u.ba);const h=new Mx(e,t,o);return n.xa.set(e,h),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),u.snapshot}async function $x(n,e,t){const s=pe(n),r=s.xa.get(e),i=s.Oa.get(r.targetId);if(i.length>1)return s.Oa.set(r.targetId,i.filter(o=>!Tc(o,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Dh(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&sf(s.remoteStore,r.targetId),Mh(s,r.targetId)}).catch(Ri)):(Mh(s,r.targetId),await Dh(s.localStore,r.targetId,!0))}async function jx(n,e){const t=pe(n),s=t.xa.get(e),r=t.Oa.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),sf(t.remoteStore,s.targetId))}async function qx(n,e,t){const s=Yx(n);try{const r=await function(o,a){const c=pe(o),u=nt.now(),h=a.reduce((g,I)=>g.add(I.key),ye());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let I=us(),S=ye();return c.hs.getEntries(g,h).next(P=>{I=P,I.forEach((V,F)=>{F.isValidDocument()||(S=S.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,I)).next(P=>{f=P;const V=[];for(const F of a){const D=lD(F,f.get(F.key).overlayedDocument);D!=null&&V.push(new Qs(F.key,D,IT(D.value.mapValue),En.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,V,a)}).next(P=>{m=P;const V=P.applyToLocalDocumentSet(f,S);return c.documentOverlayCache.saveOverlays(g,P.batchId,V)})}).then(()=>({batchId:m.batchId,changes:DT(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ge(Ee)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(s,r.batchId,t),await la(s,r.changes),await Sc(s.remoteStore)}catch(r){const i=cf(r,"Failed to persist write");t.reject(i)}}async function dI(n,e){const t=pe(n);try{const s=await rx(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Ba.get(i);o&&(Ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?Ne(o.Fa):r.removedDocuments.size>0&&(Ne(o.Fa),o.Fa=!1))}),await la(t,s,e)}catch(s){await Ri(s)}}function Zg(n,e,t){const s=pe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=pe(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const m of f.J_)m.ea(a)&&(u=!0)}),u&&df(c)}(s.eventManager,e),r.length&&s.Ma.R_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Wx(n,e,t){const s=pe(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Ba.get(e),i=r&&r.key;if(i){let o=new Ge(re.comparator);o=o.insert(i,kt.newNoDocument(i,de.min()));const a=ye().add(i),c=new Ac(de.min(),new Map,new Ge(Ee),o,a);await dI(s,c),s.La=s.La.remove(i),s.Ba.delete(e),pf(s)}else await Dh(s.localStore,e,!1).then(()=>Mh(s,e,t)).catch(Ri)}async function Hx(n,e){const t=pe(n),s=e.batch.batchId;try{const r=await sx(t.localStore,e);pI(t,s,null),fI(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await la(t,r)}catch(r){await Ri(r)}}async function Kx(n,e,t){const s=pe(n);try{const r=await function(o,a){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Ne(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);pI(s,e,t),fI(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await la(s,r)}catch(r){await Ri(r)}}function fI(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function pI(n,e,t){const s=pe(n);let r=s.qa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.qa[s.currentUser.toKey()]=r}}function Mh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Oa.get(e))n.xa.delete(s),t&&n.Ma.Wa(s,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(s=>{n.ka.containsKey(s)||mI(n,s)})}function mI(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(sf(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),pf(n))}function e_(n,e,t){for(const s of t)s instanceof cI?(n.ka.addReference(s.key,e),Gx(n,s)):s instanceof uI?(J("SyncEngine","Document no longer in limbo: "+s.key),n.ka.removeReference(s.key,e),n.ka.containsKey(s.key)||mI(n,s.key)):ce()}function Gx(n,e){const t=e.key,s=t.path.canonicalString();n.La.get(t)||n.Na.has(s)||(J("SyncEngine","New document in limbo: "+t),n.Na.add(s),pf(n))}function pf(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new re($e.fromString(e)),s=n.Ka.next();n.Ba.set(s,new Lx(t)),n.La=n.La.insert(t,s),sI(n.remoteStore,new bs(Fn(vc(t.path)),s,"TargetPurposeLimboResolution",_c.oe))}}async function la(n,e,t){const s=pe(n),r=[],i=[],o=[];s.xa.isEmpty()||(s.xa.forEach((a,c)=>{o.push(s.Ua(c,e,t).then(u=>{var h;if((u||t)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=nf.zi(c.targetId,u);i.push(f)}}))}),await Promise.all(o),s.Ma.R_(r),await async function(c,u){const h=pe(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(u,m=>$.forEach(m.Wi,g=>h.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>$.forEach(m.Gi,g=>h.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!Ai(f))throw f;J("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const g=h.us.get(m),I=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(I);h.us=h.us.insert(m,S)}}}(s.localStore,i))}async function zx(n,e){const t=pe(n);if(!t.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const s=await ZT(t.localStore,e);t.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new Z(B.CANCELLED,o))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await la(t,s.Ts)}}function Qx(n,e){const t=pe(n),s=t.Ba.get(e);if(s&&s.Fa)return ye().add(s.key);{let r=ye();const i=t.Oa.get(e);if(!i)return r;for(const o of i){const a=t.xa.get(o);r=r.unionWith(a.view.fa)}return r}}function gI(n){const e=pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wx.bind(null,e),e.Ma.R_=Ox.bind(null,e.eventManager),e.Ma.Wa=Dx.bind(null,e.eventManager),e}function Yx(n){const e=pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kx.bind(null,e),e}class Bl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return nx(this.persistence,new ex,e.initialUser,this.serializer)}ja(e){return new JT(tf.ei,this.serializer)}za(e){return new cx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bl.provider={build:()=>new Bl};class Xx extends Bl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ne(this.persistence.referenceDelegate instanceof Fl);const s=this.persistence.referenceDelegate.garbageCollector;return new UD(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Bt.withCacheSize(this.cacheSizeBytes):Bt.DEFAULT;return new JT(s=>Fl.ei(s,t),this.serializer)}}class Lh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zx.bind(null,this.syncEngine),await Px(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Nx}()}createDatastore(e){const t=Cc(e.databaseInfo.databaseId),s=function(i){return new fx(i)}(e.databaseInfo);return function(i,o,a,c){return new gx(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,o,a){return new yx(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Zg(this.syncEngine,t,0),function(){return zg.p()?new zg:new ux}())}createSyncEngine(e,t){return function(r,i,o,a,c,u,h){const f=new Vx(r,i,o,a,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=pe(r);J("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await aa(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Lh.provider={build:()=>new Lh};/**
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
 */class mf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):cs("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Jx{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=At.UNAUTHENTICATED,this.clientId=ET.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new os;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=cf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Su(n,e){n.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ZT(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function t_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Zx(n);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Qg(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Qg(e.remoteStore,r)),n._onlineComponents=e}async function Zx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Su(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;ai("Error using user provided cache. Falling back to memory cache: "+t),await Su(n,new Bl)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Su(n,new Xx(void 0));return n._offlineComponents}async function _I(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await t_(n,n._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await t_(n,new Lh))),n._onlineComponents}function eM(n){return _I(n).then(e=>e.syncEngine)}async function $l(n){const e=await _I(n),t=e.eventManager;return t.onListen=Fx.bind(null,e.syncEngine),t.onUnlisten=$x.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ux.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jx.bind(null,e.syncEngine),t}function tM(n,e,t={}){const s=new os;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new mf({next:m=>{h.eu(),o.enqueueAndForget(()=>hf(i,f));const g=m.docs.has(a);!g&&m.fromCache?u.reject(new Z(B.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new Z(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new ff(vc(a.path),h,{includeMetadataChanges:!0,ua:!0});return uf(i,f)}(await $l(n),n.asyncQueue,e,t,s)),s.promise}function nM(n,e,t={}){const s=new os;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new mf({next:m=>{h.eu(),o.enqueueAndForget(()=>hf(i,f)),m.fromCache&&c.source==="server"?u.reject(new Z(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new ff(a,h,{includeMetadataChanges:!0,ua:!0});return uf(i,f)}(await $l(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function yI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const n_=new Map;/**
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
 */function EI(n,e,t){if(!t)throw new Z(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function sM(n,e,t,s){if(e===!0&&s===!0)throw new Z(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function s_(n){if(!re.isDocumentKey(n))throw new Z(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function r_(n){if(re.isDocumentKey(n))throw new Z(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce()}function on(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Z(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Pc(n);throw new Z(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class i_{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kc{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new mO;switch(s.type){case"firstParty":return new EO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Z(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=n_.get(t);s&&(J("ComponentProvider","Removing Datastore"),n_.delete(t),s.terminate())}(this),Promise.resolve()}}function rM(n,e,t,s={}){var r;const i=(n=on(n,kc))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=At.MOCK_USER;else{a=hC(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new Z(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new At(u)}n._authCredentials=new gO(new yT(a,c))}}/**
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
 */class Ys{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ys(this.firestore,e,this._query)}}class Ft{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class Os extends Ys{constructor(e,t,s){super(e,t,vc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new re(e))}withConverter(e){return new Os(this.firestore,e,this._path)}}function so(n,e,...t){if(n=ut(n),EI("collection","path",e),n instanceof kc){const s=$e.fromString(e,...t);return r_(s),new Os(n,null,s)}{if(!(n instanceof Ft||n instanceof Os))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child($e.fromString(e,...t));return r_(s),new Os(n.firestore,null,s)}}function $r(n,e,...t){if(n=ut(n),arguments.length===1&&(e=ET.newId()),EI("doc","path",e),n instanceof kc){const s=$e.fromString(e,...t);return s_(s),new Ft(n,null,new re(s))}{if(!(n instanceof Ft||n instanceof Os))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child($e.fromString(e,...t));return s_(s),new Ft(n.firestore,n instanceof Os?n.converter:null,new re(s))}}/**
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
 */class o_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new tI(this,"async_queue_retry"),this.fu=()=>{const s=bu();s&&J("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=bu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=bu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new os;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ai(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw cs("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const r=lf.createAndSchedule(this,e,t,s,i=>this.Su(i));return this.du.push(r),r}pu(){this.Au&&ce()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function a_(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Bs extends kc{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new o_,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new o_(e),this._firestoreClient=void 0,await e}}}function vI(n,e){const t=typeof n=="object"?n:pE(),s=typeof n=="string"?n:"(default)",r=dE(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=cC("firestore");i&&rM(r,...i)}return r}function Nc(n){if(n._terminated)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||iM(n),n._firestoreClient}function iM(n){var e,t,s;const r=n._freezeSettings(),i=function(a,c,u,h){return new xO(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,yI(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new Jx(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(Et.fromBase64String(e))}catch(t){throw new Z(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fi(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Oc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gf{constructor(e){this._methodName=e}}/**
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
 */class Dc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
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
 */class _f{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const oM=/^__.*__$/;class aM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Qs(e,this.data,this.fieldMask,t,this.fieldTransforms):new ia(e,this.data,t,this.fieldTransforms)}}class TI{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Qs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function II(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class yf{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:s,Nu:!1});return r.Lu(e),r}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:s,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return jl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(II(this.Mu)&&oM.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class lM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Cc(e)}$u(e,t,s,r=!1){return new yf({Mu:e,methodName:t,Ku:s,path:_t.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ef(n){const e=n._freezeSettings(),t=Cc(n._databaseId);return new lM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function cM(n,e,t,s,r,i={}){const o=n.$u(i.merge||i.mergeFields?2:0,e,t,r);vf("Data must be an object, but it was:",o,s);const a=wI(s,o);let c,u;if(i.merge)c=new Qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=Vh(e,f,t);if(!o.contains(m))throw new Z(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);AI(h,m)||h.push(m)}c=new Qt(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new aM(new $t(a),c,u)}class xc extends gf{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xc}}function uM(n,e,t,s){const r=n.$u(1,e,t);vf("Data must be an object, but it was:",r,s);const i=[],o=$t.empty();zs(s,(c,u)=>{const h=Tf(e,c,t);u=ut(u);const f=r.Bu(h);if(u instanceof xc)i.push(h);else{const m=ca(u,f);m!=null&&(i.push(h),o.set(h,m))}});const a=new Qt(i);return new TI(o,a,r.fieldTransforms)}function hM(n,e,t,s,r,i){const o=n.$u(1,e,t),a=[Vh(e,s,t)],c=[r];if(i.length%2!=0)throw new Z(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(Vh(e,i[m])),c.push(i[m+1]);const u=[],h=$t.empty();for(let m=a.length-1;m>=0;--m)if(!AI(u,a[m])){const g=a[m];let I=c[m];I=ut(I);const S=o.Bu(g);if(I instanceof xc)u.push(g);else{const P=ca(I,S);P!=null&&(u.push(g),h.set(g,P))}}const f=new Qt(u);return new TI(h,f,o.fieldTransforms)}function dM(n,e,t,s=!1){return ca(t,n.$u(s?4:3,e))}function ca(n,e){if(RI(n=ut(n)))return vf("Unsupported field value:",e,n),wI(n,e);if(n instanceof gf)return function(s,r){if(!II(r.Mu))throw r.qu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=ca(a,r.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=ut(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return nD(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=nt.fromDate(s);return{timestampValue:Vl(r.serializer,i)}}if(s instanceof nt){const i=new nt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Vl(r.serializer,i)}}if(s instanceof Dc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof fi)return{bytesValue:HT(r.serializer,s._byteString)};if(s instanceof Ft){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zd(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof _f)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Qd(a.serializer,c)})}}}}}}(s,r);throw r.qu(`Unsupported field value: ${Pc(s)}`)}(n,e)}function wI(n,e){const t={};return vT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zs(n,(s,r)=>{const i=ca(r,e.Ou(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function RI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof Dc||n instanceof fi||n instanceof Ft||n instanceof gf||n instanceof _f)}function vf(n,e,t){if(!RI(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const s=Pc(t);throw s==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+s)}}function Vh(n,e,t){if((e=ut(e))instanceof Oc)return e._internalPath;if(typeof e=="string")return Tf(n,e);throw jl("Field path arguments must be of type string or ",n,!1,void 0,t)}const fM=new RegExp("[~\\*/\\[\\]]");function Tf(n,e,t){if(e.search(fM)>=0)throw jl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Oc(...e.split("."))._internalPath}catch{throw jl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function jl(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new Z(B.INVALID_ARGUMENT,a+n+c)}function AI(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class CI{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class pM extends CI{data(){return super.data()}}function Mc(n,e){return typeof e=="string"?Tf(n,e):e instanceof Oc?e._internalPath:e._delegate._internalPath}/**
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
 */function bI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Z(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class If{}class SI extends If{}function Pu(n,e,...t){let s=[];e instanceof If&&s.push(e),s=s.concat(t),function(i){const o=i.filter(c=>c instanceof wf).length,a=i.filter(c=>c instanceof Lc).length;if(o>1||o>0&&a>0)throw new Z(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Lc extends SI{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Lc(e,t,s)}_apply(e){const t=this._parse(e);return PI(e._query,t),new Ys(e.firestore,e.converter,bh(e._query,t))}_parse(e){const t=Ef(e.firestore);return function(i,o,a,c,u,h,f){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Z(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){h_(f,h);const g=[];for(const I of f)g.push(u_(c,i,I));m={arrayValue:{values:g}}}else m=u_(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||h_(f,h),m=dM(a,o,f,h==="in"||h==="not-in");return tt.create(u,h,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function l_(n,e,t){const s=e,r=Mc("where",n);return Lc._create(r,s,t)}class wf extends If{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new wf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:wn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)PI(o,c),o=bh(o,c)}(e._query,t),new Ys(e.firestore,e.converter,bh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rf extends SI{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Rf(e,t)}_apply(e){const t=function(r,i,o){if(r.startAt!==null)throw new Z(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Z(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $o(i,o)}(e._query,this._field,this._direction);return new Ys(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Ci(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function c_(n,e="asc"){const t=e,s=Mc("orderBy",n);return Rf._create(s,t)}function u_(n,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new Z(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PT(e)&&t.indexOf("/")!==-1)throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child($e.fromString(t));if(!re.isDocumentKey(s))throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Sg(n,new re(s))}if(t instanceof Ft)return Sg(n,t._key);throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pc(t)}.`)}function h_(n,e){if(!Array.isArray(n)||n.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function PI(n,e){const t=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class mM{convertValue(e,t="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return zs(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Xe(o.doubleValue));return new _f(i)}convertGeoPoint(e){return new Dc(Xe(e.latitude),Xe(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ec(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const t=Ls(e);return new nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=$e.fromString(e);Ne(XT(s));const r=new Uo(s.get(1),s.get(3)),i=new re(s.popFirst(5));return r.isEqual(t)||cs(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function gM(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
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
 */class ro{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kI extends CI{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Mc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class rl extends kI{data(e={}){return super.data(e)}}class NI{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ro(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new rl(this._firestore,this._userDataWriter,s.key,s,new ro(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new rl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ro(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new rl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ro(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:_M(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function _M(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
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
 */function Af(n){n=on(n,Ft);const e=on(n.firestore,Bs);return tM(Nc(e),n._key).then(t=>DI(e,n,t))}class Cf extends mM{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,t)}}function OI(n){n=on(n,Ys);const e=on(n.firestore,Bs),t=Nc(e),s=new Cf(e);return bI(n._query),nM(t,n._query).then(r=>new NI(e,s,n,r))}function d_(n,e,t,...s){n=on(n,Ft);const r=on(n.firestore,Bs),i=Ef(r);let o;return o=typeof(e=ut(e))=="string"||e instanceof Oc?hM(i,"updateDoc",n._key,e,t,s):uM(i,"updateDoc",n._key,e),Sf(r,[o.toMutation(n._key,En.exists(!0))])}function f_(n){return Sf(on(n.firestore,Bs),[new Yd(n._key,En.none())])}function yM(n,e){const t=on(n.firestore,Bs),s=$r(n),r=gM(n.converter,e);return Sf(t,[cM(Ef(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,En.exists(!1))]).then(()=>s)}function bf(n,...e){var t,s,r;n=ut(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||a_(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(a_(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,u,h;if(n instanceof Ft)u=on(n.firestore,Bs),h=vc(n._key.path),c={next:f=>{e[o]&&e[o](DI(u,n,f))},error:e[o+1],complete:e[o+2]};else{const f=on(n,Ys);u=on(f.firestore,Bs),h=f._query;const m=new Cf(u);c={next:g=>{e[o]&&e[o](new NI(u,m,f,g))},error:e[o+1],complete:e[o+2]},bI(n._query)}return function(m,g,I,S){const P=new mf(S),V=new ff(g,P,I);return m.asyncQueue.enqueueAndForget(async()=>uf(await $l(m),V)),()=>{P.eu(),m.asyncQueue.enqueueAndForget(async()=>hf(await $l(m),V))}}(Nc(u),h,a,c)}function Sf(n,e){return function(s,r){const i=new os;return s.asyncQueue.enqueueAndForget(async()=>qx(await eM(s),r,i)),i.promise}(Nc(n),e)}function DI(n,e,t){const s=t.docs.get(e._key),r=new Cf(n);return new kI(n,r,e._key,s,new ro(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){wi=r})(Hs),Bn(new Tn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new Bs(new _O(s.getProvider("auth-internal")),new TO(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uo(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Xt(Ig,"4.7.5",e),Xt(Ig,"4.7.5","esm2017")})();/**
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
 */const xI="firebasestorage.googleapis.com",EM="storageBucket",vM=2*60*1e3,TM=10*60*1e3;/**
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
 */class Wn extends qn{constructor(e,t,s=0){super(ku(e),`Firebase Storage: ${t} (${ku(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ku(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var jn;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(jn||(jn={}));function ku(n){return"storage/"+n}function IM(){const n="An unknown error occurred, please check the error payload for server response.";return new Wn(jn.UNKNOWN,n)}function wM(){return new Wn(jn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function RM(){return new Wn(jn.CANCELED,"User canceled the upload/download.")}function AM(n){return new Wn(jn.INVALID_URL,"Invalid URL '"+n+"'.")}function CM(n){return new Wn(jn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function p_(n){return new Wn(jn.INVALID_ARGUMENT,n)}function MI(){return new Wn(jn.APP_DELETED,"The Firebase app was deleted.")}function bM(n){return new Wn(jn.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class mn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=mn.makeFromUrl(e,t)}catch{return new mn(e,"")}if(s.path==="")return s;throw CM(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${r}/o${m}`,"i"),I={bucket:1,path:3},S=t===xI?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",V=new RegExp(`^https?://${S}/${r}/${P}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:g,indices:I,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<D.length;x++){const ee=D[x],te=ee.regex.exec(e);if(te){const C=te[ee.indices.bucket];let y=te[ee.indices.path];y||(y=""),s=new mn(C,y),ee.postModify(s);break}}if(s==null)throw AM(e);return s}}class SM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function PM(n,e,t){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function f(P){r=setTimeout(()=>{r=null,n(g,c())},P)}function m(){i&&clearTimeout(i)}function g(P,...V){if(u){m();return}if(P){m(),h.call(null,P,...V);return}if(c()||o){m(),h.call(null,P,...V);return}s<64&&(s*=2);let D;a===1?(a=2,D=0):D=(s+Math.random())*1e3,f(D)}let I=!1;function S(P){I||(I=!0,m(),!u&&(r!==null?(P||(a=2),clearTimeout(r),f(0)):P||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,S(!0)},t),S}function kM(n){n(!1)}/**
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
 */function NM(n){return n!==void 0}function m_(n,e,t,s){if(s<e)throw p_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw p_(`Invalid value for '${n}'. Expected ${t} or less.`)}function OM(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var ql;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ql||(ql={}));/**
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
 */function DM(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
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
 */class xM{constructor(e,t,s,r,i,o,a,c,u,h,f,m=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,I)=>{this.resolve_=g,this.reject_=I,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new $a(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ql.NO_ERROR,c=i.getStatus();if(!a||DM(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ql.ABORT;s(!1,new $a(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new $a(u,i))})},t=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());NM(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=IM();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?MI():RM();o(c)}else{const c=wM();o(c)}};this.canceled_?t(!1,new $a(!1,null,!0)):this.backoffId_=PM(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $a{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function MM(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function LM(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VM(n,e){e&&(n["X-Firebase-GMPID"]=e)}function FM(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function UM(n,e,t,s,r,i,o=!0){const a=OM(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return VM(u,e),MM(u,t),LM(u,i),FM(u,s),new xM(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
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
 */function BM(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function $M(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Wl{constructor(e,t){this._service=e,t instanceof mn?this._location=t:this._location=mn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Wl(e,t)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $M(this._location.path)}get storage(){return this._service}get parent(){const e=BM(this._location.path);if(e===null)return null;const t=new mn(this._location.bucket,e);return new Wl(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw bM(e)}}function g_(n,e){const t=e==null?void 0:e[EM];return t==null?null:mn.makeFromBucketSpec(t,n)}class jM{constructor(e,t,s,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=xI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vM,this._maxUploadRetryTime=TM,this._requests=new Set,r!=null?this._bucket=mn.makeFromBucketSpec(r,this._host):this._bucket=g_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=g_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){m_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){m_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wl(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new SM(MI());{const o=UM(e,this._appId,s,r,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const __="@firebase/storage",y_="0.13.4";/**
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
 */const qM="storage";function WM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new jM(t,s,r,e,Hs)}function HM(){Bn(new Tn(qM,WM,"PUBLIC").setMultipleInstances(!0)),Xt(__,y_,""),Xt(__,y_,"esm2017")}HM();const Nu=new WeakMap;function LI(n,e){return Nu.has(e)||Nu.set(e,{f:{},r:{},s:{},u:{}}),Nu.get(e)}function KM(n,e,t,s){if(!n)return t;const[r,i]=VI(n);if(!r)return t;const o=LI(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:t}function GM(n,e,t,s){if(!n)return;const[r,i]=VI(n);if(!r)return;const o=LI(void 0,s)[r],a=e||i;if(a)return t.then(c=>{o[a]=c}).catch(Nn),a}function VI(n){return vk(n)||Tk(n)?["f",n.path]:Ik(n)?["r",n.toString()]:wk(n)?["s",n.toString()]:[]}const Ou=new WeakMap;function zM(n,e,t){const s=Zo();Ou.has(s)||Ou.set(s,new Map);const r=Ou.get(s),i=GM(e,t,n,s);return i&&r.set(i,n),i?()=>r.delete(i):Nn}const QM={toFirestore(n){return n},fromFirestore(n,e){return n.exists()?Object.defineProperties(n.data(e),{id:{value:n.id}}):null}};function Fh(n,e,t,s){if(!yk(n))return[n,{}];const r=[{},{}],i=Object.keys(t).reduce((a,c)=>{const u=t[c];return a[u.path]=u.data(),a},{});function o(a,c,u,h){c=c||{};const[f,m]=h;Object.getOwnPropertyNames(a).forEach(g=>{const I=Object.getOwnPropertyDescriptor(a,g);I&&!I.enumerable&&Object.defineProperty(f,g,I)});for(const g in a){const I=a[g];if(I==null||I instanceof Date||I instanceof nt||I instanceof Dc)f[g]=I;else if(Id(I)){const S=u+g;f[g]=S in t?c[g]:I.path,m[S]=I.converter?I:I.withConverter(s.converter)}else if(Array.isArray(I)){f[g]=Array(I.length);for(let S=0;S<I.length;S++){const P=I[S];P&&P.path in i&&(f[g][S]=i[P.path])}o(I,c[g]||f[g],u+g+".",[f[g],m])}else Ir(I)?(f[g]={},o(I,c[g],u+g+".",[f[g],m])):f[g]=I}}return o(n,e,"",r),r}const Pf={reset:!1,wait:!0,maxRefDepth:2,converter:QM,snapshotOptions:{serverTimestamps:"estimate"}};function Hl(n){for(const e in n)n[e].unsub()}function Uh(n,e,t,s,r,i,o,a,c){const[u,h]=Fh(s.data(n.snapshotOptions),Td(e,t),r,n);i.set(e,t,u),Bh(n,e,t,r,h,i,o,a,c)}function YM({ref:n,target:e,path:t,depth:s,resolve:r,reject:i,ops:o},a){const c=Object.create(null);let u=Nn;return a.once?Af(n).then(h=>{h.exists()?Uh(a,e,t,h,c,o,s,r,i):(o.set(e,t,null),r())}).catch(i):u=bf(n,h=>{h.exists()?Uh(a,e,t,h,c,o,s,r,i):(o.set(e,t,null),r())},i),()=>{u(),Hl(c)}}function Bh(n,e,t,s,r,i,o,a,c){const u=Object.keys(r);if(Object.keys(s).filter(S=>u.indexOf(S)<0).forEach(S=>{s[S].unsub(),delete s[S]}),!u.length||++o>n.maxRefDepth)return a(t);let f=0;const m=u.length,g=Object.create(null);function I(S){S in g&&++f>=m&&a(t)}u.forEach(S=>{const P=s[S],V=r[S],F=`${t}.${S}`;if(g[F]=!0,P)if(P.path!==V.path)P.unsub();else return;s[S]={data:()=>Td(e,F),unsub:YM({ref:V,target:e,path:F,depth:o,ops:i,resolve:I.bind(null,F),reject:c},n),path:V.path}})}function XM(n,e,t,s,r,i){const o=Object.assign({},Pf,i),{snapshotListenOptions:a,snapshotOptions:c,wait:u,once:h}=o,f="value";let m=Nt(u?[]:n.value);u||t.set(n,f,[]);const g=s;let I,S=Nn;const P=[],V={added:({newIndex:D,doc:x})=>{P.splice(D,0,Object.create(null));const ee=P[D],[te,C]=Fh(x.data(c),void 0,ee,o);t.add(Qn(m),D,te),Bh(o,m,`${f}.${D}`,ee,C,t,0,s.bind(null,x),r)},modified:({oldIndex:D,newIndex:x,doc:ee})=>{const te=Qn(m),C=P[D],y=te[D],[E,A]=Fh(ee.data(c),y,C,o);P.splice(x,0,C),t.remove(te,D),t.add(te,x,E),Bh(o,m,`${f}.${x}`,C,A,t,0,s,r)},removed:({oldIndex:D})=>{const x=Qn(m);t.remove(x,D),Hl(P.splice(D,1)[0])}};function F(D){const x=D.docChanges(a);if(!I&&x.length){I=!0;let ee=0;const te=x.length,C=Object.create(null);for(let y=0;y<te;y++)C[x[y].doc.id]=!0;s=y=>{y&&y.id in C&&++ee>=te&&(u&&(t.set(n,f,Qn(m)),m=n),g(Qn(m)),s=Nn)}}x.forEach(ee=>{V[ee.type](ee)}),x.length||(u&&(t.set(n,f,Qn(m)),m=n),s(Qn(m)))}return h?OI(e).then(F).catch(r):S=bf(e,F,r),D=>{if(S(),D){const x=typeof D=="function"?D():[];t.set(n,f,x)}P.forEach(Hl)}}function JM(n,e,t,s,r,i){const o=Object.assign({},Pf,i),a="value",c=Object.create(null);s=Rk(s,()=>Td(n,a));let u=Nn;function h(f){f.exists()?Uh(o,n,a,f,c,t,0,s,r):(t.set(n,a,null),s(null))}return o.once?Af(e).then(h).catch(r):u=bf(e,h,r),f=>{if(u(),f){const m=typeof f=="function"?f():null;t.set(n,a,m)}Hl(c)}}const E_=Symbol();function ZM(n,e){let t=Nn;const s=Object.assign({},Pf,e),r=Qn(n),i=s.target||Nt();Ck()&&(s.once=!0);const o=KM(r,s.ssrKey,E_,Zo()),a=o!==E_;a&&(i.value=o);let c=!a;const u=Nt(!1),h=Nt(),f=ly(),m=H_();let g=Nn;function I(){let V=Qn(n);const F=new Promise((D,x)=>{if(t(s.reset),!V)return t=Nn,D(null);u.value=c,c=!0,V.converter||(V=V.withConverter(s.converter)),t=(Id(V)?JM:XM)(i,V,eL,D,x,s)}).catch(D=>(f.value===F&&(h.value=D),Promise.reject(D))).finally(()=>{f.value===F&&(u.value=!1)});f.value=F}let S=Nn;(yt(n)||typeof n=="function")&&(S=uo(n,I)),I(),r&&(g=zM(f.value,r,s.ssrKey)),ad()&&Ry(()=>f.value),m&&Mw(P);function P(V=s.reset){S(),g(),t(V)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>P}})}const eL={set:(n,e,t)=>gk(n,e,t),add:(n,e,t)=>n.splice(e,0,t),remove:(n,e)=>n.splice(e,1)};function v_(n,e){return ZM(n,{target:Nt([]),...e})}function tL(n){return vI(Zo(n))}function nL(n){return sL({initialUser:n,dependencies:{popupRedirectResolver:VP,persistence:[QS,VS,jE]}})}const FI=Symbol("VueFireAuth");function sL({dependencies:n,initialUser:e}){return(t,s)=>{const[r,i]=rL(t,s,e,n);Pk(r,i)}}function rL(n,e,t,s,r=yS(n,s)){const i=bk(n,e).run(()=>Nt(t));return ZE.set(n,i),e.provide(FI,r),[i,r]}function UI(n){return mk?Yt(FI):null}function iL(n,{firebaseApp:e,modules:t=[]}){n.provide(JE,e);for(const s of t)s(e,n)}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jr=typeof document<"u";function BI(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function oL(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&BI(n.default)}const Fe=Object.assign;function Du(n,e){const t={};for(const s in e){const r=e[s];t[s]=Rn(r)?r.map(n):n(r)}return t}const Io=()=>{},Rn=Array.isArray,$I=/#/g,aL=/&/g,lL=/\//g,cL=/=/g,uL=/\?/g,jI=/\+/g,hL=/%5B/g,dL=/%5D/g,qI=/%5E/g,fL=/%60/g,WI=/%7B/g,pL=/%7C/g,HI=/%7D/g,mL=/%20/g;function kf(n){return encodeURI(""+n).replace(pL,"|").replace(hL,"[").replace(dL,"]")}function gL(n){return kf(n).replace(WI,"{").replace(HI,"}").replace(qI,"^")}function $h(n){return kf(n).replace(jI,"%2B").replace(mL,"+").replace($I,"%23").replace(aL,"%26").replace(fL,"`").replace(WI,"{").replace(HI,"}").replace(qI,"^")}function _L(n){return $h(n).replace(cL,"%3D")}function yL(n){return kf(n).replace($I,"%23").replace(uL,"%3F")}function EL(n){return n==null?"":yL(n).replace(lL,"%2F")}function Wo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const vL=/\/$/,TL=n=>n.replace(vL,"");function xu(n,e,t="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=n(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=AL(s??e,t),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Wo(o)}}function IL(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function wL(n,e,t){const s=e.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&pi(e.matched[s],t.matched[r])&&KI(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function pi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function KI(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!RL(n[t],e[t]))return!1;return!0}function RL(n,e){return Rn(n)?T_(n,e):Rn(e)?T_(e,n):n===e}function T_(n,e){return Rn(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function AL(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=t.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const vs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ho;(function(n){n.pop="pop",n.push="push"})(Ho||(Ho={}));var Kl;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Kl||(Kl={}));const Mu="";function CL(n){if(!n)if(jr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),TL(n)}const bL=/^[^#]+#/;function SL(n,e){return n.replace(bL,"#")+e}function PL(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const kL=()=>({left:window.scrollX,top:window.scrollY});function NL(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=PL(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function I_(n,e){return(history.state?history.state.position-e:-1)+n}const jh=new Map;function OL(n,e){jh.set(n,e)}function DL(n){const e=jh.get(n);return jh.delete(n),e}function xL(n=""){let e=[],t=[Mu],s=0;n=CL(n);function r(a){s++,s!==t.length&&t.splice(s),t.push(a)}function i(a,c,{direction:u,delta:h}){const f={direction:u,delta:h,type:Ho.pop};for(const m of e)m(a,c,f)}const o={location:Mu,state:{},base:n,createHref:SL.bind(null,n),replace(a){t.splice(s--,1),r(a)},push(a,c){r(a)},listen(a){return e.push(a),()=>{const c=e.indexOf(a);c>-1&&e.splice(c,1)}},destroy(){e=[],t=[Mu],s=0},go(a,c=!0){const u=this.location,h=a<0?Kl.back:Kl.forward;s=Math.max(0,Math.min(s+a,t.length-1)),c&&i(this.location,u,{direction:h,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t[s]}),o}function ML(n){return typeof n=="string"||n&&typeof n=="object"}function GI(n){return typeof n=="string"||typeof n=="symbol"}const zI=Symbol("");var w_;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(w_||(w_={}));function mi(n,e){return Fe(new Error,{type:n,[zI]:!0},e)}function zn(n,e){return n instanceof Error&&zI in n&&(e==null||!!(n.type&e))}const R_="[^/]+?",LL={sensitive:!1,strict:!1,start:!0,end:!0},VL=/[.+*?^${}()[\]/\\]/g;function FL(n,e){const t=Fe({},LL,e),s=[];let r=t.start?"^":"";const i=[];for(const u of n){const h=u.length?[]:[90];t.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const m=u[f];let g=40+(t.sensitive?.25:0);if(m.type===0)f||(r+="/"),r+=m.value.replace(VL,"\\$&"),g+=40;else if(m.type===1){const{value:I,repeatable:S,optional:P,regexp:V}=m;i.push({name:I,repeatable:S,optional:P});const F=V||R_;if(F!==R_){g+=10;try{new RegExp(`(${F})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${I}" (${F}): `+x.message)}}let D=S?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;f||(D=P&&u.length<2?`(?:/${D})`:"/"+D),P&&(D+="?"),r+=D,g+=20,P&&(g+=-8),S&&(g+=-20),F===".*"&&(g+=-50)}h.push(g)}s.push(h)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",I=i[m-1];f[I.name]=g&&I.repeatable?g.split("/"):g}return f}function c(u){let h="",f=!1;for(const m of n){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:I,repeatable:S,optional:P}=g,V=I in u?u[I]:"";if(Rn(V)&&!S)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const F=Rn(V)?V.join("/"):V;if(!F)if(P)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);h+=F}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function UL(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function QI(n,e){let t=0;const s=n.score,r=e.score;for(;t<s.length&&t<r.length;){const i=UL(s[t],r[t]);if(i)return i;t++}if(Math.abs(r.length-s.length)===1){if(A_(s))return 1;if(A_(r))return-1}return r.length-s.length}function A_(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const BL={type:0,value:""},$L=/[a-zA-Z0-9_]/;function jL(n){if(!n)return[[]];if(n==="/")return[[BL]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(g){throw new Error(`ERR (${t})/"${u}": ${g}`)}let t=0,s=t;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),t=1):m();break;case 4:m(),t=s;break;case 1:c==="("?t=2:$L.test(c)?m():(f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=3:h+=c;break;case 3:f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function qL(n,e,t){const s=FL(jL(n.path),t),r=Fe(s,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function WL(n,e){const t=[],s=new Map;e=P_({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,m,g){const I=!g,S=b_(f);S.aliasOf=g&&g.record;const P=P_(e,f),V=[S];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const ee of x)V.push(b_(Fe({},S,{components:g?g.record.components:S.components,path:ee,aliasOf:g?g.record:S})))}let F,D;for(const x of V){const{path:ee}=x;if(m&&ee[0]!=="/"){const te=m.record.path,C=te[te.length-1]==="/"?"":"/";x.path=m.record.path+(ee&&C+ee)}if(F=qL(x,m,P),g?g.alias.push(F):(D=D||F,D!==F&&D.alias.push(F),I&&f.name&&!S_(F)&&o(f.name)),YI(F)&&c(F),S.children){const te=S.children;for(let C=0;C<te.length;C++)i(te[C],F,g&&g.children[C])}g=g||F}return D?()=>{o(D)}:Io}function o(f){if(GI(f)){const m=s.get(f);m&&(s.delete(f),t.splice(t.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=t.indexOf(f);m>-1&&(t.splice(m,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function c(f){const m=GL(f,t);t.splice(m,0,f),f.record.name&&!S_(f)&&s.set(f.record.name,f)}function u(f,m){let g,I={},S,P;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw mi(1,{location:f});P=g.record.name,I=Fe(C_(m.params,g.keys.filter(D=>!D.optional).concat(g.parent?g.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),f.params&&C_(f.params,g.keys.map(D=>D.name))),S=g.stringify(I)}else if(f.path!=null)S=f.path,g=t.find(D=>D.re.test(S)),g&&(I=g.parse(S),P=g.record.name);else{if(g=m.name?s.get(m.name):t.find(D=>D.re.test(m.path)),!g)throw mi(1,{location:f,currentLocation:m});P=g.record.name,I=Fe({},m.params,f.params),S=g.stringify(I)}const V=[];let F=g;for(;F;)V.unshift(F.record),F=F.parent;return{name:P,path:S,params:I,matched:V,meta:KL(V)}}n.forEach(f=>i(f));function h(){t.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function C_(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function b_(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:HL(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function HL(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function S_(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function KL(n){return n.reduce((e,t)=>Fe(e,t.meta),{})}function P_(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function GL(n,e){let t=0,s=e.length;for(;t!==s;){const i=t+s>>1;QI(n,e[i])<0?s=i:t=i+1}const r=zL(n);return r&&(s=e.lastIndexOf(r,s-1)),s}function zL(n){let e=n;for(;e=e.parent;)if(YI(e)&&QI(n,e)===0)return e}function YI({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function QL(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(jI," "),o=i.indexOf("="),a=Wo(o<0?i:i.slice(0,o)),c=o<0?null:Wo(i.slice(o+1));if(a in e){let u=e[a];Rn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function k_(n){let e="";for(let t in n){const s=n[t];if(t=_L(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(Rn(s)?s.map(i=>i&&$h(i)):[s&&$h(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function YL(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=Rn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const XL=Symbol(""),N_=Symbol(""),Vc=Symbol(""),XI=Symbol(""),qh=Symbol("");function zi(){let n=[];function e(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Rs(n,e,t,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=m=>{m===!1?c(mi(4,{from:t,to:e})):m instanceof Error?c(m):ML(m)?c(mi(2,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),a())},h=i(()=>n.call(s&&s.instances[r],e,t,u));let f=Promise.resolve(h);n.length<3&&(f=f.then(u)),f.catch(m=>c(m))})}function Lu(n,e,t,s,r=i=>i()){const i=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(BI(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Rs(h,t,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=oL(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Rs(g,t,s,o,a,r)()}))}}return i}function O_(n){const e=Yt(Vc),t=Yt(XI),s=dn(()=>{const c=jt(n.to);return e.resolve(c)}),r=dn(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=t.matched;if(!h||!f.length)return-1;const m=f.findIndex(pi.bind(null,h));if(m>-1)return m;const g=D_(c[u-2]);return u>1&&D_(h)===g&&f[f.length-1].path!==g?f.findIndex(pi.bind(null,c[u-2])):m}),i=dn(()=>r.value>-1&&nV(t.params,s.value.params)),o=dn(()=>r.value>-1&&r.value===t.matched.length-1&&KI(t.params,s.value.params));function a(c={}){if(tV(c)){const u=e[jt(n.replace)?"replace":"push"](jt(n.to)).catch(Io);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:dn(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function JL(n){return n.length===1?n[0]:n}const ZL=yy({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:O_,setup(n,{slots:e}){const t=Zl(O_(n)),{options:s}=Yt(Vc),r=dn(()=>({[x_(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[x_(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&JL(e.default(t));return n.custom?i:Yy("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},i)}}}),eV=ZL;function tV(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function nV(n,e){for(const t in e){const s=e[t],r=n[t];if(typeof s=="string"){if(s!==r)return!1}else if(!Rn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function D_(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const x_=(n,e,t)=>n??e??t,sV=yy({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=Yt(qh),r=dn(()=>n.route||s.value),i=Yt(N_,0),o=dn(()=>{let u=jt(i);const{matched:h}=r.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=dn(()=>r.value.matched[o.value]);Wa(N_,dn(()=>o.value+1)),Wa(XL,a),Wa(qh,r);const c=Nt();return uo(()=>[c.value,a.value,n.name],([u,h,f],[m,g,I])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!pi(h,g)||!m)&&(h.enterCallbacks[f]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=r.value,h=n.name,f=a.value,m=f&&f.components[h];if(!m)return M_(t.default,{Component:m,route:u});const g=f.props[h],I=g?g===!0?u.params:typeof g=="function"?g(u):g:null,P=Yy(m,Fe({},I,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return M_(t.default,{Component:P,route:u})||P}}});function M_(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const rV=sV;function iV(n){const e=WL(n.routes,n),t=n.parseQuery||QL,s=n.stringifyQuery||k_,r=n.history,i=zi(),o=zi(),a=zi(),c=ly(vs);let u=vs;jr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Du.bind(null,M=>""+M),f=Du.bind(null,EL),m=Du.bind(null,Wo);function g(M,X){let Q,ne;return GI(M)?(Q=e.getRecordMatcher(M),ne=X):ne=M,e.addRoute(ne,Q)}function I(M){const X=e.getRecordMatcher(M);X&&e.removeRoute(X)}function S(){return e.getRoutes().map(M=>M.record)}function P(M){return!!e.getRecordMatcher(M)}function V(M,X){if(X=Fe({},X||c.value),typeof M=="string"){const k=xu(t,M,X.path),L=e.resolve({path:k.path},X),j=r.createHref(k.fullPath);return Fe(k,L,{params:m(L.params),hash:Wo(k.hash),redirectedFrom:void 0,href:j})}let Q;if(M.path!=null)Q=Fe({},M,{path:xu(t,M.path,X.path).path});else{const k=Fe({},M.params);for(const L in k)k[L]==null&&delete k[L];Q=Fe({},M,{params:f(k)}),X.params=f(X.params)}const ne=e.resolve(Q,X),Ce=M.hash||"";ne.params=h(m(ne.params));const T=IL(s,Fe({},M,{hash:gL(Ce),path:ne.path})),w=r.createHref(T);return Fe({fullPath:T,hash:Ce,query:s===k_?YL(M.query):M.query||{}},ne,{redirectedFrom:void 0,href:w})}function F(M){return typeof M=="string"?xu(t,M,c.value.path):Fe({},M)}function D(M,X){if(u!==M)return mi(8,{from:X,to:M})}function x(M){return C(M)}function ee(M){return x(Fe(F(M),{replace:!0}))}function te(M){const X=M.matched[M.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let ne=typeof Q=="function"?Q(M):Q;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=F(ne):{path:ne},ne.params={}),Fe({query:M.query,hash:M.hash,params:ne.path!=null?{}:M.params},ne)}}function C(M,X){const Q=u=V(M),ne=c.value,Ce=M.state,T=M.force,w=M.replace===!0,k=te(Q);if(k)return C(Fe(F(k),{state:typeof k=="object"?Fe({},Ce,k.state):Ce,force:T,replace:w}),X||Q);const L=Q;L.redirectedFrom=X;let j;return!T&&wL(s,ne,Q)&&(j=mi(16,{to:L,from:ne}),Zt(ne,ne,!0,!1)),(j?Promise.resolve(j):A(L,ne)).catch(U=>zn(U)?zn(U,2)?U:un(U):_e(U,L,ne)).then(U=>{if(U){if(zn(U,2))return C(Fe({replace:w},F(U.to),{state:typeof U.to=="object"?Fe({},Ce,U.to.state):Ce,force:T}),X||L)}else U=R(L,ne,!0,w,Ce);return b(L,ne,U),U})}function y(M,X){const Q=D(M,X);return Q?Promise.reject(Q):Promise.resolve()}function E(M){const X=fs.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(M):M()}function A(M,X){let Q;const[ne,Ce,T]=oV(M,X);Q=Lu(ne.reverse(),"beforeRouteLeave",M,X);for(const k of ne)k.leaveGuards.forEach(L=>{Q.push(Rs(L,M,X))});const w=y.bind(null,M,X);return Q.push(w),Ut(Q).then(()=>{Q=[];for(const k of i.list())Q.push(Rs(k,M,X));return Q.push(w),Ut(Q)}).then(()=>{Q=Lu(Ce,"beforeRouteUpdate",M,X);for(const k of Ce)k.updateGuards.forEach(L=>{Q.push(Rs(L,M,X))});return Q.push(w),Ut(Q)}).then(()=>{Q=[];for(const k of T)if(k.beforeEnter)if(Rn(k.beforeEnter))for(const L of k.beforeEnter)Q.push(Rs(L,M,X));else Q.push(Rs(k.beforeEnter,M,X));return Q.push(w),Ut(Q)}).then(()=>(M.matched.forEach(k=>k.enterCallbacks={}),Q=Lu(T,"beforeRouteEnter",M,X,E),Q.push(w),Ut(Q))).then(()=>{Q=[];for(const k of o.list())Q.push(Rs(k,M,X));return Q.push(w),Ut(Q)}).catch(k=>zn(k,8)?k:Promise.reject(k))}function b(M,X,Q){a.list().forEach(ne=>E(()=>ne(M,X,Q)))}function R(M,X,Q,ne,Ce){const T=D(M,X);if(T)return T;const w=X===vs,k=jr?history.state:{};Q&&(ne||w?r.replace(M.fullPath,Fe({scroll:w&&k&&k.scroll},Ce)):r.push(M.fullPath,Ce)),c.value=M,Zt(M,X,Q,w),un()}let v;function Oe(){v||(v=r.listen((M,X,Q)=>{if(!An.listening)return;const ne=V(M),Ce=te(ne);if(Ce){C(Fe(Ce,{replace:!0,force:!0}),ne).catch(Io);return}u=ne;const T=c.value;jr&&OL(I_(T.fullPath,Q.delta),kL()),A(ne,T).catch(w=>zn(w,12)?w:zn(w,2)?(C(Fe(F(w.to),{force:!0}),ne).then(k=>{zn(k,20)&&!Q.delta&&Q.type===Ho.pop&&r.go(-1,!1)}).catch(Io),Promise.reject()):(Q.delta&&r.go(-Q.delta,!1),_e(w,ne,T))).then(w=>{w=w||R(ne,T,!1),w&&(Q.delta&&!zn(w,8)?r.go(-Q.delta,!1):Q.type===Ho.pop&&zn(w,20)&&r.go(-1,!1)),b(ne,T,w)}).catch(Io)}))}let st=zi(),We=zi(),Te;function _e(M,X,Q){un(M);const ne=We.list();return ne.length?ne.forEach(Ce=>Ce(M,X,Q)):console.error(M),Promise.reject(M)}function Wt(){return Te&&c.value!==vs?Promise.resolve():new Promise((M,X)=>{st.add([M,X])})}function un(M){return Te||(Te=!M,Oe(),st.list().forEach(([X,Q])=>M?Q(M):X()),st.reset()),M}function Zt(M,X,Q,ne){const{scrollBehavior:Ce}=n;if(!jr||!Ce)return Promise.resolve();const T=!Q&&DL(I_(M.fullPath,0))||(ne||!Q)&&history.state&&history.state.scroll||null;return dy().then(()=>Ce(M,X,T)).then(w=>w&&NL(w)).catch(w=>_e(w,M,X))}const He=M=>r.go(M);let Ke;const fs=new Set,An={currentRoute:c,listening:!0,addRoute:g,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:S,resolve:V,options:n,push:x,replace:ee,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:We.add,isReady:Wt,install(M){const X=this;M.component("RouterLink",eV),M.component("RouterView",rV),M.config.globalProperties.$router=X,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>jt(c)}),jr&&!Ke&&c.value===vs&&(Ke=!0,x(r.location).catch(Ce=>{}));const Q={};for(const Ce in vs)Object.defineProperty(Q,Ce,{get:()=>c.value[Ce],enumerable:!0});M.provide(Vc,X),M.provide(XI,oy(Q)),M.provide(qh,c);const ne=M.unmount;fs.add(M),M.unmount=function(){fs.delete(M),fs.size<1&&(u=vs,v&&v(),v=null,c.value=vs,Ke=!1,Te=!1),ne()}}};function Ut(M){return M.reduce((X,Q)=>X.then(()=>E(Q)),Promise.resolve())}return An}function oV(n,e){const t=[],s=[],r=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>pi(u,a))?s.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>pi(u,c))||r.push(c))}return[t,s,r]}function Nf(){return Yt(Vc)}const aV={key:0},lV={__name:"Auth",setup(n){const e=Nf(),t=UI();new kn;const s=hc();function r(){e.push("/login")}function i(){xS(t).then(()=>{console.log("cierra sesion"),e.push("/")}).catch(a=>console.log("Error: "+a))}function o(a){return a.split("@")[0]}return(a,c)=>{var u,h;return Qe(),et(rt,null,[jt(s)?(Qe(),et("p",aV,"Hola "+Ln(((h=(u=jt(s))==null?void 0:u.providerData[0])==null?void 0:h.displayName)||o(jt(s).email)),1)):Gy("",!0),jt(s)?(Qe(),et("button",{key:1,onClick:i},"Cerrar sesion")):(Qe(),et("button",{key:2,onClick:r},"Iniciar Sesion"))],64)}}},br=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},cV={__name:"App",setup(n){return Nf().beforeEach(async(t,s)=>{if(t.meta.requireAuth){var r=await Sk();return!!r}else return!0}),(t,s)=>{const r=Sp("RouterLink"),i=Sp("RouterView");return Qe(),et(rt,null,[he("nav",null,[Ye(r,{to:"/"},{default:ll(()=>s[0]||(s[0]=[So("Inicio")])),_:1}),Ye(r,{to:"/Recordatorios"},{default:ll(()=>s[1]||(s[1]=[So("Recordatorios")])),_:1}),Ye(lV)]),Ye(i)],64)}}},uV=br(cV,[["__scopeId","data-v-256b52bc"]]),JI=fE({apiKey:"AIzaSyDzIFM46vZyg9XIc4bykMsxxORHqCACG9g",authDomain:"testfirestore-41bd2.firebaseapp.com",projectId:"testfirestore-41bd2",storageBucket:"testfirestore-41bd2.firebasestorage.app",messagingSenderId:"138568806063",appId:"1:138568806063:web:4b383dd54caad3a9486e5a",measurementId:"G-86LE7SW414"}),hV=vI(JI);so(hV,"Recordatorios");const dV={};function fV(n,e){return Qe(),et(rt,null,[e[0]||(e[0]=he("header",null,[he("h2",null,"Recordatorios Inteligentes")],-1)),e[1]||(e[1]=he("main",null,[he("h1",null,"Organiza tu vida con facilidad"),he("p",null,"Guarda tus recordatorios importantes en un solo lugar y nunca olvides una fecha clave."),he("button",{class:"btn"},"Comienza Ahora")],-1))],64)}const pV=br(dV,[["render",fV],["__scopeId","data-v-f23ffee4"]]),mV={id:"contenedor"},gV={id:"introduccion"},_V={__name:"header",emits:["newContent"],setup(n,{emit:e}){const t=e,s=Nt(""),r=hc();function i(){const o={name:s.value,priority:1,time:Date.now(),done:!1,user:r.value.uid};t("newContent",o),s.value=""}return(o,a)=>(Qe(),et(rt,null,[a[1]||(a[1]=he("h1",null,"Proyecto Vue.js - Daniel Amin Mouimi Romero",-1)),he("div",mV,[he("div",gV,[qa(he("input",{id:"intro",placeholder:"¿Qué quieres recordar?","onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c),onKeyup:zA(i,["enter"])},null,544),[[Ga,s.value]]),he("button",{onClick:i,id:"introbtn"},"Add")])])],64))}},yV=br(_V,[["__scopeId","data-v-84478c46"]]),EV={key:0,class:"checkbox-container"},vV={key:1,class:"checkbox-container checkbox.checked"},TV={key:2},IV={class:"task-name"},wV={key:3},RV={class:"task-name"},AV={class:"priority-buttons"},CV={class:"elapsed-time"},bV={__name:"list",props:["task"],emits:["remove","check","priority"],setup(n,{emit:e}){const t=n,s=e,r=Nt(""),i=Nt(null),o=Nt(null);function a(){return Math.floor((Date.now()-t.task.time)/6e4)}function c(){const m=a();r.value=m>=1440?`${Math.floor(m/1440)} días`:m>=60?`${Math.floor(m/60)} horas`:`${m} minutos`}sd(()=>{c(),i.value=setInterval(c,600)}),rd(()=>{clearInterval(i.value)});function u(){s("remove",t.task.id)}function h(){s("check",t.task.id)}function f(m){c(),s("priority",t.task.id,m)}return(m,g)=>(Qe(),et("div",{class:"content",ref_key:"componentRef",ref:o},[t.task.done?(Qe(),et("div",EV,[he("input",{type:"checkbox",class:"checkbox checked",onClick:h,checked:""})])):(Qe(),et("div",vV,[he("input",{type:"checkbox",class:"checkbox",onClick:h})])),t.task.done?(Qe(),et("div",TV,[he("h2",IV,[he("del",null,Ln(t.task.name),1)])])):(Qe(),et("div",wV,[he("h2",RV,Ln(t.task.name),1)])),g[3]||(g[3]=he("p",{class:"priority-label"},"Prioridad:",-1)),he("div",AV,[he("button",{class:Gr(["button low",{active:t.task.priority===0}]),onClick:g[0]||(g[0]=I=>f(0))},"Low",2),he("button",{class:Gr(["button normal",{active:t.task.priority===1}]),onClick:g[1]||(g[1]=I=>f(1))},"Normal",2),he("button",{class:Gr(["button high",{active:t.task.priority===2}]),onClick:g[2]||(g[2]=I=>f(2))},"High",2)]),he("p",CV,"Realizado hace "+Ln(r.value),1),he("button",{class:"delete-button",onClick:u},"Eliminar")],512))}},SV=br(bV,[["__scopeId","data-v-7f8125a4"]]),PV={};function kV(n,e){return Qe(),et(rt,null,[e[0]||(e[0]=he("p",null,"Desarrollado por Daniel Amin Mouimi Romero",-1)),e[1]||(e[1]=he("p",null,[So("Codigo disponible en "),he("a",{href:"www.github.com"},[he("i",{class:"fa-brands fa-github"}),So("Github")])],-1))],64)}const NV=br(PV,[["render",kV]]),OV={class:"content"},DV={__name:"count",props:["list"],emits:["clearCompleted"],setup(n,{emit:e}){const t=n,s=e,r=()=>{s("clearCompleted")};return(i,o)=>(Qe(),et("div",OV,[he("p",null,"You have "+Ln(t.list.filter(a=>a.done).length)+" tasks done of "+Ln(t.list.length)+" to do. ",1),he("button",{class:"clear-completed-btn",onClick:r}," Eliminar todas las tareas completadas ")]))}},xV=br(DV,[["__scopeId","data-v-9282f96b"]]),MV={__name:"Recordatorios",setup(n){const e=tL(),t=hc();var s=[];console.log(t),t.value.uid=="gXn8HOEU7RcBmSd3Ah6FJKc41Ty1"?s=v_(Pu(so(e,"Recordatorios"),c_("priority","desc"))):s=v_(Pu(so(e,"Recordatorios"),l_("user","==",t.value.uid),c_("priority","desc")));function r(u){yM(so(e,"Recordatorios"),u).then(h=>{console.log("new note added")}).catch(h=>{console.log("ERROR: "+h)})}function i(u){f_($r(e,"Recordatorios",u)).then(h=>{console.log("note deleted")}).catch(h=>{console.log("ERROR: "+h)})}function o(){const u=Pu(so(e,"Recordatorios"),l_("done","==",!0));OI(u).then(h=>{const f=h.docs.map(m=>f_($r(e,"Recordatorios",m.id)));return Promise.all(f)}).then(()=>{console.log("Todas las tareas completadas han sido eliminadas.")}).catch(h=>{console.log("ERROR al eliminar tareas completadas: "+h)})}function a(u){Af($r(e,"Recordatorios",u)).then(h=>{d_($r(e,"Recordatorios",u),{done:!h.data().done}).then(f=>{console.log("done changed")}).catch(f=>{console.log("ERROR: "+f)})}).catch(h=>{console.log("ERROR: "+h)})}function c(u,h){d_($r(e,"Recordatorios",u),{priority:h}).then(f=>{console.log("done changed")}).catch(f=>{console.log("ERROR: "+f)})}return(u,h)=>(Qe(),et(rt,null,[Ye(yV,{onNewContent:r}),Ye(xV,{list:jt(s),onClearCompleted:o},null,8,["list"]),Ye(FA,{name:"fade",tag:"div",class:"note-list"},{default:ll(()=>[(Qe(!0),et(rt,null,Ay(jt(s),(f,m)=>(Qe(),Hy(SV,{key:f.id,task:f,ID:m,onRemove:i,onCheck:a,onPriority:c},null,8,["task","ID"]))),128))]),_:1}),Ye(NV)],64))}},LV={class:"form-container"},VV={key:0},FV={class:"error-message"},UV={type:"submit",class:"primary-button"},BV={__name:"login",setup(n){const e=Nf(),t=UI(),s=new kn;hc();const r=Nt(!1),i=Nt(""),o=Nt(""),a=Nt("");var c=Nt([]);function u(){r.value=!r.value}function h(){Sm(t,s).then(()=>{console.log("Autenticación correcta"),e.push("/Recordatorios")}).catch(I=>{console.error("Error:",I)})}function f(){r.value?o.value===a.value?NS(t,i.value,o.value).then(()=>{console.log("Usuario registrado correctamente"),e.push("/Recordatorios")}).catch(I=>{console.error("Error al registrar:",I.message),c.value.push(I.message)}):(console.error("Las contraseñas no coinciden"),c.value.push("Las contraseñas no coinciden")):OS(t,i.value,o.value).then(()=>{console.log("Inicio de sesión exitoso"),e.push("/Recordatorios")}).catch(I=>{console.error("Error al iniciar sesión:",I.message),c.value.push(I.message)})}const m=new Zn;function g(){Sm(t,m).then(()=>e.push("/Recordatorios")).catch(I=>{console.error("Error en el inicio de sesión con GitHub:",I),errorMessage.value="No se pudo iniciar sesión con GitHub."})}return(I,S)=>(Qe(),et("div",LV,[he("div",null,[he("form",{onSubmit:KA(f,["prevent"]),class:"auth-form"},[S[4]||(S[4]=he("label",{for:"email"},"Email:",-1)),qa(he("input",{"onUpdate:modelValue":S[0]||(S[0]=P=>i.value=P),name:"email",type:"email",placeholder:"ejemplo@algoMas.algo",required:""},null,512),[[Ga,i.value]]),S[5]||(S[5]=he("label",{for:"password"},"Contraseña:",-1)),qa(he("input",{"onUpdate:modelValue":S[1]||(S[1]=P=>o.value=P),name:"password",type:"password",placeholder:"Contraseña",required:""},null,512),[[Ga,o.value]]),r.value?(Qe(),et("div",VV,[S[3]||(S[3]=he("label",{for:"password2"},"Repite la contraseña:",-1)),qa(he("input",{"onUpdate:modelValue":S[2]||(S[2]=P=>a.value=P),name:"password2",type:"password",placeholder:"Repite la contraseña",required:""},null,512),[[Ga,a.value]])])):Gy("",!0),(Qe(!0),et(rt,null,Ay(jt(c),P=>(Qe(),et("p",FV,Ln(P),1))),256)),he("button",UV,Ln(r.value?"Registrarme":"Iniciar sesión"),1),he("button",{onClick:u,class:"primary-button"},Ln(r.value?"Ya tengo cuenta":"Registrarme"),1)],32),he("div",{class:"actions"},[he("button",{onClick:h,class:"secondary-button"}," Iniciar sesión con Google "),he("button",{onClick:g,class:"secondary-button"}," Iniciar sesión con Github ")])])]))}},$V=br(BV,[["__scopeId","data-v-dcf9b734"]]),jV=[{path:"/",component:pV,meta:{requireAuth:!1}},{path:"/Recordatorios",component:MV,meta:{requireAuth:!0}},{path:"/login",component:$V,meta:{requireAuth:!1}}],qV=iV({history:xL(),routes:jV}),Of=XA(uV);Of.use(iL,{firebaseApp:JI,modules:[nL()]});Of.use(qV);Of.mount("#app");
