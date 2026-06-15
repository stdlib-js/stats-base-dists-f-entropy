"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var o=q(function(p,m){
var n=require('@stdlib/math-base-special-digamma/dist'),v=require('@stdlib/math-base-special-gammaln/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-ln/dist');function f(a,r){var e,t,u,i;return s(a)||s(r)||a<=0||r<=0?NaN:(e=(a+r)/2,t=a/2,u=r/2,i=c(r/a)+v(t)+v(u)-v(e),i+=(1-t)*n(t),i+=(-1-u)*n(u),i+=e*n(e),i)}m.exports=f
});var h=o();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
