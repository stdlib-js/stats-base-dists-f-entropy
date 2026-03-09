"use strict";var q=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var o=q(function(p,m){
var n=require('@stdlib/math-base-special-digamma/dist'),v=require('@stdlib/math-base-special-gammaln/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-ln/dist');function f(a,r){var i,t,u,e;return s(a)||s(r)||a<=0||r<=0?NaN:(i=(a+r)/2,t=a/2,u=r/2,e=c(r/a)+v(t)+v(u)-v(i),e+=(1-t)*n(t),e+=(-1-u)*n(u),e+=i*n(i),e)}m.exports=f
});var h=o();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
