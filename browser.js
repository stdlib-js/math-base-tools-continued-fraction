// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=eval;function n(e){return Math.abs(e)}var t=11754943508222875e-54,r=2220446049250313e-31,o=1e6;function i(e,r,o){var i,u,a,f,l,c,d;if(f=(d=(i="function"==typeof e.next)?e.next().value:e())[1],a=d[0],0===f&&(f=t),l=f,c=0,!0===i)do{(d=e.next().value)&&(0===(c=d[1]+d[0]*c)&&(c=t),0===(l=d[1]+d[0]/l)&&(l=t),f*=u=l*(c=1/c))}while(n(u-1)>r&&--o);else do{(d=e())&&(0===(c=d[1]+d[0]*c)&&(c=t),0===(l=d[1]+d[0]/l)&&(l=t),f*=u=l*(c=1/c))}while(d&&n(u-1)>r&&--o);return a/f}function u(e,r,o){var i,u,a,f,l,c;if(0===(a=(c=(i="function"==typeof e.next)?e.next().value:e())[1])&&(a=t),f=a,l=0,!0===i)do{(c=e.next().value)&&(0===(l=c[1]+c[0]*l)&&(l=t),0===(f=c[1]+c[0]/f)&&(f=t),a*=u=f*(l=1/l))}while(c&&n(u-1)>r&&--o);else do{(c=e())&&(0===(l=c[1]+c[0]*l)&&(l=t),0===(f=c[1]+c[0]/f)&&(f=t),a*=u=f*(l=1/l))}while(c&&n(u-1)>r&&--o);return a}var a,f=1e6;function l(e,r,o){var i,u,a,f,l,c;l=(c=e())[1],u=c[0],0===l&&(l=t),a=l,f=0;do{(c=e())&&(0===(f=c[1]+c[0]*f)&&(f=t),0===(a=c[1]+c[0]/a)&&(a=t),l*=i=a*(f=1/f))}while(c&&n(i-1)>r&&--o);return u/l}function c(e,r,o){var i,u,a,f,l;0===(f=(l=e())[1])&&(f=t),u=f,a=0;do{(l=e())&&(0===(a=l[1]+l[0]*a)&&(a=t),0===(u=l[1]+l[0]/u)&&(u=t),f*=i=u*(a=1/a))}while(l&&n(i-1)>r&&--o);return f}return a=function(){var n;try{e('"use strict"; (function* () {})'),n=!0}catch(e){n=!1}return n}()?function(e,n){var t,a,f;return a={},arguments.length>1&&(a=n),t=a.maxIter||o,f=a.tolerance||r,a.keep?u(e,f,t):i(e,f,t)}:function(e,n){var t,o,i;return o={},arguments.length>1&&(o=n),i=o.tolerance||r,t=o.maxIter||f,o.keep?c(e,i,t):l(e,i,t)},a},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).continuedFraction=n();
//# sourceMappingURL=browser.js.map
