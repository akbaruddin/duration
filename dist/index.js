"use strict";var o=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var b=Object.prototype.hasOwnProperty;var I=(n,r)=>{for(var e in r)o(n,e,{get:r[e],enumerable:!0})},S=(n,r,e,m)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of c(r))!b.call(n,t)&&t!==e&&o(n,t,{get:()=>r[t],enumerable:!(m=u(r,t))||m.enumerable});return n};var i=n=>S(o({},"__esModule",{value:!0}),n);var v={};I(v,{default:()=>h});module.exports=i(v);var N=(n,r)=>60*n+r,a=(n="00:00:10")=>n.split(":").map(s=>+s).reduce(N)*1e3,h=a;
//# sourceMappingURL=index.js.map