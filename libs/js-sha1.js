/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/js-sha1@0.7.0/src/sha1.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.7.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
!function(){"use strict";var t="input is invalid type",r="object"==typeof window,e=r?window:{};e.JS_SHA1_NO_WINDOW&&(r=!1);var i=!r&&"object"==typeof self,h=!e.JS_SHA1_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?e=global:i&&(e=self);var s=!e.JS_SHA1_NO_COMMON_JS&&"object"==typeof module&&module.exports,n="function"==typeof define&&define.amd,o=!e.JS_SHA1_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,a="0123456789abcdef".split(""),f=[-2147483648,8388608,32768,128],u=[24,16,8,0],c=["hex","array","digest","arrayBuffer"],p=[],y=Array.isArray;!e.JS_SHA1_NO_NODE_JS&&y||(y=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var l=ArrayBuffer.isView;!o||!e.JS_SHA1_NO_ARRAY_BUFFER_IS_VIEW&&l||(l=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var d=function(r){var e=typeof r;if("string"===e)return[r,!0];if("object"!==e||null===r)throw new Error(t);if(o&&r.constructor===ArrayBuffer)return[new Uint8Array(r),!1];if(!y(r)&&!l(r))throw new Error(t);return[r,!1]},b=function(t){return function(r){return new A(!0).update(r)[t]()}},v=function(r){var i,h=require("crypto"),s=require("buffer").Buffer;i=s.from&&!e.JS_SHA1_NO_BUFFER_FROM?s.from:function(t){return new s(t)};return function(e){if("string"==typeof e)return h.createHash("sha1").update(e,"utf8").digest("hex");if(null==e)throw new Error(t);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),y(e)||l(e)||e.constructor===s?h.createHash("sha1").update(i(e)).digest("hex"):r(e)}},_=function(t){return function(r,e){return new w(r,!0).update(e)[t]()}};function A(t){t?(p[0]=p[16]=p[1]=p[2]=p[3]=p[4]=p[5]=p[6]=p[7]=p[8]=p[9]=p[10]=p[11]=p[12]=p[13]=p[14]=p[15]=0,this.blocks=p):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}function w(t,r){var e,i=d(t);if(t=i[0],i[1]){var h,s=[],n=t.length,o=0;for(e=0;e<n;++e)(h=t.charCodeAt(e))<128?s[o++]=h:h<2048?(s[o++]=192|h>>>6,s[o++]=128|63&h):h<55296||h>=57344?(s[o++]=224|h>>>12,s[o++]=128|h>>>6&63,s[o++]=128|63&h):(h=65536+((1023&h)<<10|1023&t.charCodeAt(++e)),s[o++]=240|h>>>18,s[o++]=128|h>>>12&63,s[o++]=128|h>>>6&63,s[o++]=128|63&h);t=s}t.length>64&&(t=new A(!0).update(t).array());var a=[],f=[];for(e=0;e<64;++e){var u=t[e]||0;a[e]=92^u,f[e]=54^u}A.call(this,r),this.update(f),this.oKeyPad=a,this.inner=!0,this.sharedMemory=r}A.prototype.update=function(t){if(this.finalized)throw new Error("finalize already called");var r=d(t);t=r[0];for(var e,i,h=r[1],s=0,n=t.length||0,o=this.blocks;s<n;){if(this.hashed&&(this.hashed=!1,o[0]=this.block,this.block=o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),h)for(i=this.start;s<n&&i<64;++s)(e=t.charCodeAt(s))<128?o[i>>>2]|=e<<u[3&i++]:e<2048?(o[i>>>2]|=(192|e>>>6)<<u[3&i++],o[i>>>2]|=(128|63&e)<<u[3&i++]):e<55296||e>=57344?(o[i>>>2]|=(224|e>>>12)<<u[3&i++],o[i>>>2]|=(128|e>>>6&63)<<u[3&i++],o[i>>>2]|=(128|63&e)<<u[3&i++]):(e=65536+((1023&e)<<10|1023&t.charCodeAt(++s)),o[i>>>2]|=(240|e>>>18)<<u[3&i++],o[i>>>2]|=(128|e>>>12&63)<<u[3&i++],o[i>>>2]|=(128|e>>>6&63)<<u[3&i++],o[i>>>2]|=(128|63&e)<<u[3&i++]);else for(i=this.start;s<n&&i<64;++s)o[i>>>2]|=t[s]<<u[3&i++];this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.block=o[16],this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this},A.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,r=this.lastByteIndex;t[16]=this.block,t[r>>>2]|=f[3&r],this.block=t[16],r>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},A.prototype.hash=function(){var t,r,e=this.h0,i=this.h1,h=this.h2,s=this.h3,n=this.h4,o=this.blocks;for(t=16;t<80;++t)r=o[t-3]^o[t-8]^o[t-14]^o[t-16],o[t]=r<<1|r>>>31;for(t=0;t<20;t+=5)e=(r=(i=(r=(h=(r=(s=(r=(n=(r=e<<5|e>>>27)+(i&h|~i&s)+n+1518500249+o[t]<<0)<<5|n>>>27)+(e&(i=i<<30|i>>>2)|~e&h)+s+1518500249+o[t+1]<<0)<<5|s>>>27)+(n&(e=e<<30|e>>>2)|~n&i)+h+1518500249+o[t+2]<<0)<<5|h>>>27)+(s&(n=n<<30|n>>>2)|~s&e)+i+1518500249+o[t+3]<<0)<<5|i>>>27)+(h&(s=s<<30|s>>>2)|~h&n)+e+1518500249+o[t+4]<<0,h=h<<30|h>>>2;for(;t<40;t+=5)e=(r=(i=(r=(h=(r=(s=(r=(n=(r=e<<5|e>>>27)+(i^h^s)+n+1859775393+o[t]<<0)<<5|n>>>27)+(e^(i=i<<30|i>>>2)^h)+s+1859775393+o[t+1]<<0)<<5|s>>>27)+(n^(e=e<<30|e>>>2)^i)+h+1859775393+o[t+2]<<0)<<5|h>>>27)+(s^(n=n<<30|n>>>2)^e)+i+1859775393+o[t+3]<<0)<<5|i>>>27)+(h^(s=s<<30|s>>>2)^n)+e+1859775393+o[t+4]<<0,h=h<<30|h>>>2;for(;t<60;t+=5)e=(r=(i=(r=(h=(r=(s=(r=(n=(r=e<<5|e>>>27)+(i&h|i&s|h&s)+n-1894007588+o[t]<<0)<<5|n>>>27)+(e&(i=i<<30|i>>>2)|e&h|i&h)+s-1894007588+o[t+1]<<0)<<5|s>>>27)+(n&(e=e<<30|e>>>2)|n&i|e&i)+h-1894007588+o[t+2]<<0)<<5|h>>>27)+(s&(n=n<<30|n>>>2)|s&e|n&e)+i-1894007588+o[t+3]<<0)<<5|i>>>27)+(h&(s=s<<30|s>>>2)|h&n|s&n)+e-1894007588+o[t+4]<<0,h=h<<30|h>>>2;for(;t<80;t+=5)e=(r=(i=(r=(h=(r=(s=(r=(n=(r=e<<5|e>>>27)+(i^h^s)+n-899497514+o[t]<<0)<<5|n>>>27)+(e^(i=i<<30|i>>>2)^h)+s-899497514+o[t+1]<<0)<<5|s>>>27)+(n^(e=e<<30|e>>>2)^i)+h-899497514+o[t+2]<<0)<<5|h>>>27)+(s^(n=n<<30|n>>>2)^e)+i-899497514+o[t+3]<<0)<<5|i>>>27)+(h^(s=s<<30|s>>>2)^n)+e-899497514+o[t+4]<<0,h=h<<30|h>>>2;this.h0=this.h0+e<<0,this.h1=this.h1+i<<0,this.h2=this.h2+h<<0,this.h3=this.h3+s<<0,this.h4=this.h4+n<<0},A.prototype.hex=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,i=this.h3,h=this.h4;return a[t>>>28&15]+a[t>>>24&15]+a[t>>>20&15]+a[t>>>16&15]+a[t>>>12&15]+a[t>>>8&15]+a[t>>>4&15]+a[15&t]+a[r>>>28&15]+a[r>>>24&15]+a[r>>>20&15]+a[r>>>16&15]+a[r>>>12&15]+a[r>>>8&15]+a[r>>>4&15]+a[15&r]+a[e>>>28&15]+a[e>>>24&15]+a[e>>>20&15]+a[e>>>16&15]+a[e>>>12&15]+a[e>>>8&15]+a[e>>>4&15]+a[15&e]+a[i>>>28&15]+a[i>>>24&15]+a[i>>>20&15]+a[i>>>16&15]+a[i>>>12&15]+a[i>>>8&15]+a[i>>>4&15]+a[15&i]+a[h>>>28&15]+a[h>>>24&15]+a[h>>>20&15]+a[h>>>16&15]+a[h>>>12&15]+a[h>>>8&15]+a[h>>>4&15]+a[15&h]},A.prototype.toString=A.prototype.hex,A.prototype.digest=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,i=this.h3,h=this.h4;return[t>>>24&255,t>>>16&255,t>>>8&255,255&t,r>>>24&255,r>>>16&255,r>>>8&255,255&r,e>>>24&255,e>>>16&255,e>>>8&255,255&e,i>>>24&255,i>>>16&255,i>>>8&255,255&i,h>>>24&255,h>>>16&255,h>>>8&255,255&h]},A.prototype.array=A.prototype.digest,A.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(20),r=new DataView(t);return r.setUint32(0,this.h0),r.setUint32(4,this.h1),r.setUint32(8,this.h2),r.setUint32(12,this.h3),r.setUint32(16,this.h4),t},w.prototype=new A,w.prototype.finalize=function(){if(A.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();A.call(this,this.sharedMemory),this.update(this.oKeyPad),this.update(t),A.prototype.finalize.call(this)}};var S=function(){var t=b("hex");h&&(t=v(t)),t.create=function(){return new A},t.update=function(r){return t.create().update(r)};for(var r=0;r<c.length;++r){var e=c[r];t[e]=b(e)}return t}();S.sha1=S,S.sha1.hmac=function(){var t=_("hex");t.create=function(t){return new w(t)},t.update=function(r,e){return t.create(r).update(e)};for(var r=0;r<c.length;++r){var e=c[r];t[e]=_(e)}return t}(),s?module.exports=S:(e.sha1=S,n&&define((function(){return S})))}();
//# sourceMappingURL=/sm/1a519da86ac56bc30e3d2a1631362d843076d4695090215e78b55283ec140d25.map