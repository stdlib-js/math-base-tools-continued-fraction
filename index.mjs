// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-generator-support@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.1.1-esm/index.mjs";function s(e,r,s){var o,i,l,a,d,m,u;if(a=(u=(o="function"==typeof e.next)?e.next().value:e())[1],l=u[0],0===a&&(a=n),d=a,m=0,!0===o)do{(u=e.next().value)&&(0===(m=u[1]+u[0]*m)&&(m=n),0===(d=u[1]+u[0]/d)&&(d=n),a*=i=d*(m=1/m))}while(t(i-1)>r&&--s);else do{(u=e())&&(0===(m=u[1]+u[0]*m)&&(m=n),0===(d=u[1]+u[0]/d)&&(d=n),a*=i=d*(m=1/m))}while(u&&t(i-1)>r&&--s);return l/a}function o(e,r,s){var o,i,l,a,d,m;if(0===(l=(m=(o="function"==typeof e.next)?e.next().value:e())[1])&&(l=n),a=l,d=0,!0===o)do{(m=e.next().value)&&(0===(d=m[1]+m[0]*d)&&(d=n),0===(a=m[1]+m[0]/a)&&(a=n),l*=i=a*(d=1/d))}while(m&&t(i-1)>r&&--s);else do{(m=e())&&(0===(d=m[1]+m[0]*d)&&(d=n),0===(a=m[1]+m[0]/a)&&(a=n),l*=i=a*(d=1/d))}while(m&&t(i-1)>r&&--s);return l}function i(e,r,s){var o,i,l,a,d,m;d=(m=e())[1],i=m[0],0===d&&(d=n),l=d,a=0;do{(m=e())&&(0===(a=m[1]+m[0]*a)&&(a=n),0===(l=m[1]+m[0]/l)&&(l=n),d*=o=l*(a=1/a))}while(m&&t(o-1)>r&&--s);return i/d}function l(e,r,s){var o,i,l,a,d;0===(a=(d=e())[1])&&(a=n),i=a,l=0;do{(d=e())&&(0===(l=d[1]+d[0]*l)&&(l=n),0===(i=d[1]+d[0]/i)&&(i=n),a*=o=i*(l=1/l))}while(d&&t(o-1)>r&&--s);return a}var a=e()?function(e,t){var n,i,l;return i={},arguments.length>1&&(i=t),n=i.maxIter||1e6,l=i.tolerance||r,i.keep?o(e,l,n):s(e,l,n)}:function(e,t){var n,s,o;return s={},arguments.length>1&&(s=t),o=s.tolerance||r,n=s.maxIter||1e6,s.keep?l(e,o,n):i(e,o,n)};export{a as default};
//# sourceMappingURL=index.mjs.map
