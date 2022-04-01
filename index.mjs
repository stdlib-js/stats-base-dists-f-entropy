// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-digamma@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";var a=s,i=t,n=e,r=m;var d=function(s,t){var e,m,d,l;return n(s)||n(t)||s<=0||t<=0?NaN:(e=(s+t)/2,m=s/2,d=t/2,l=r(t/s)+i(m)+i(d)-i(e),l+=(1-m)*a(m),l+=(-1-d)*a(d),l+=e*a(e))};export{d as default};
//# sourceMappingURL=index.mjs.map
