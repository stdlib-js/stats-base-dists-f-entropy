// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-digamma@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";function i(i,a){var n,d,r,l;return e(i)||e(a)||i<=0||a<=0?NaN:(n=(i+a)/2,d=i/2,r=a/2,l=m(a/i)+t(d)+t(r)-t(n),l+=(1-d)*s(d),l+=(-1-r)*s(r),l+=n*s(n))}export{i as default};
//# sourceMappingURL=index.mjs.map
