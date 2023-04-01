// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).enum2str=e()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return n&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&i.call(t,e)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var c,l=r()?function(t){var e,n,r;if(null==t)return o.call(t);n=t[f],e=u(t,f);try{t[f]=void 0}catch(e){return o.call(t)}return r=o.call(t),e?t[f]=n:delete t[f],r}:function(t){return o.call(t)};function a(t){return"[object Arguments]"===l(t)}c=function(){return a(arguments)}();var p=c,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var g,y=Object.defineProperty,b=Object.prototype,v=b.toString,d=b.__defineGetter__,m=b.__defineSetter__,_=b.__lookupGetter__,h=b.__lookupSetter__;g=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?y:function(t,e,n){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===v.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===v.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(_.call(t,e)||h.call(t,e)?(r=t.__proto__,t.__proto__=b,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&d&&d.call(t,e,n.get),u&&m&&m.call(t,e,n.set),t};var j=g;function w(t,e,n){j(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function O(t){return"string"==typeof t}var S=String.prototype.valueOf;var E=r();function P(t){return"object"==typeof t&&(t instanceof String||(E?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function T(t){return O(t)||P(t)}function I(t){return"number"==typeof t}w(T,"isPrimitive",O),w(T,"isObject",P);var x=Number,A=x.prototype.toString;var V=r();function k(t){return"object"==typeof t&&(t instanceof x||(V?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function N(t){return I(t)||k(t)}function B(t){return t!=t}function F(t){return I(t)&&B(t)}function L(t){return k(t)&&B(t.valueOf())}function G(t){return F(t)||L(t)}w(N,"isPrimitive",I),w(N,"isObject",k),w(G,"isPrimitive",F),w(G,"isObject",L);var Y=Number.POSITIVE_INFINITY,C=x.NEGATIVE_INFINITY,M=Math.floor;function X(t){return M(t)===t}function H(t){return t<Y&&t>C&&X(t)}function W(t){return I(t)&&H(t)}function D(t){return k(t)&&H(t.valueOf())}function R(t){return W(t)||D(t)}w(R,"isPrimitive",W),w(R,"isObject",D);var U=Object.prototype.propertyIsEnumerable;var q=!U.call("beep","0");function z(t,e){var n;return null!=t&&(!(n=U.call(t,e))&&q&&T(t)?!F(e=+e)&&W(e)&&e>=0&&e<t.length:n)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var K=p?a:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!z(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}w(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var n,r;if(!J(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(Z));var $=z((function(){}),"prototype"),tt=!z({toString:null},"toString");function et(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=9007199254740991}function nt(t,e,n){var r,o;if(!et(t)&&!O(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!W(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=r)return-1;o=n}else(o=r+n)<0&&(o=0)}else o=0;if(G(e)){for(;o<r;o++)if(G(t[o]))return o}else for(;o<r;o++)if(t[o]===e)return o;return-1}var rt=/./;function ot(t){return"boolean"==typeof t}var it=Boolean.prototype.toString;var ut=r();function ft(t){return"object"==typeof t&&(t instanceof Boolean||(ut?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function ct(t){return ot(t)||ft(t)}function lt(){return new Function("return this;")()}w(ct,"isPrimitive",ot),w(ct,"isObject",ft);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,st="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},gt="object"==typeof st?st:null;var yt=function(t){if(arguments.length){if(!ot(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return lt()}if(at)return at;if(pt)return pt;if(gt)return gt;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=yt.document&&yt.document.childNodes,vt=Int8Array;function dt(){return/^\s*function\s*([^(]*)/i}var mt=/^\s*function\s*([^(]*)/i;function _t(t){var e,n,r,o;if(("Object"===(n=l(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=mt.exec(r.toString()))return e[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}w(dt,"REGEXP",mt);var ht="function"==typeof rt||"object"==typeof vt||"function"==typeof bt?function(t){return _t(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?_t(t).toLowerCase():e};function jt(t){return t.constructor&&t.constructor.prototype===t}var wt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ot="undefined"==typeof window?void 0:window;var St=function(){var t;if("undefined"===ht(Ot))return!1;for(t in Ot)try{-1===nt(wt,t)&&u(Ot,t)&&null!==Ot[t]&&"object"===ht(Ot[t])&&jt(Ot[t])}catch(t){return!0}return!1}(),Et="undefined"!=typeof window;var Pt,Tt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Pt=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return K(e)?t(Q.call(e)):t(e)}:t:function(t){var e,n,r,o,i,f,c;if(o=[],K(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Z(t))return o;n=$&&r}for(i in t)n&&"prototype"===i||!u(t,i)||o.push(String(i));if(tt)for(e=function(t){if(!1===Et&&!St)return jt(t);try{return jt(t)}catch(t){return!1}}(t),c=0;c<Tt.length;c++)f=Tt[c],e&&"constructor"===f||!u(t,f)||o.push(String(f));return o};var It=Pt;function xt(t){return"function"===ht(t)}var At,Vt=Object.getPrototypeOf;At=xt(Object.getPrototypeOf)?Vt:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var kt=At;var Nt=Object.prototype;function Bt(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!J(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),kt(t))}(t),!e||!u(t,"constructor")&&u(e,"constructor")&&xt(e.constructor)&&"[object Function]"===l(e.constructor)&&u(e,"isPrototypeOf")&&xt(e.isPrototypeOf)&&(e===Nt||function(t){var e;for(e in t)if(!u(t,e))return!1;return!0}(t)))}var Ft=["same","promoted","bool","signed_integer","unsigned_integer","integral","floating_point","real_floating_point","complex_floating_point","numeric"];function Lt(){return Ft.slice()}function Gt(){return{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integral:5,floating_point:6,real_floating_point:7,complex_floating_point:8,numeric:9}}function Yt(t,e,n){j(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}w(Lt,"enum",Gt),function(t,e){var n,r,o;for(n=It(e),o=0;o<n.length;o++)Yt(t,r=n[o],e[r])}(Lt,{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integral:5,floating_point:6,real_floating_point:7,complex_floating_point:8,numeric:9});var Ct=function(t,e){var n,r,o,i,f,c,l,a=!0;if(!Z(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Bt(e))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+e+"`.");if(u(e,"duplicates")&&!ot(a=e.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(r=(n=It(t)).length,f={},a)for(l=0;l<r;l++)u(f,i=t[o=n[l]])?(c=f[i],J(c)?f[i].push(o):f[i]=[c,o]):f[i]=o;else for(l=0;l<r;l++)f[t[o=n[l]]]=o;return f}({same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integral:5,floating_point:6,real_floating_point:7,complex_floating_point:8,numeric:9},{duplicates:!1});return function(t){var e=Ct[t];return"string"==typeof e?e:null}}));
//# sourceMappingURL=browser.js.map
