(function(e){function n(n){for(var r,c,a=n[0],i=n[1],f=n[2],d=0,l=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(l.length)l.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},o={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-11afbfad":"74d4314c","chunk-b81d225c":"6a7be92a","chunk-f6c4b8d8":"0d03cc76","chunk-2fcb5385":"657fdb6c","chunk-3fa86e5e":"73e0d3fd","chunk-42348599":"5ad62d49","chunk-429e4fe6":"840f5ab7","chunk-947f6458":"8f9118ef"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-f6c4b8d8":1,"chunk-2fcb5385":1,"chunk-3fa86e5e":1,"chunk-42348599":1,"chunk-429e4fe6":1,"chunk-947f6458":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-11afbfad":"31d6cfe0","chunk-b81d225c":"31d6cfe0","chunk-f6c4b8d8":"6d00b824","chunk-2fcb5385":"bdc57c4c","chunk-3fa86e5e":"328f3b9c","chunk-42348599":"ed375dd9","chunk-429e4fe6":"ffc4832b","chunk-947f6458":"54ca333d"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var f=u[a],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===o))return n()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){f=l[a],d=f.getAttribute("data-href");if(d===r||d===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],h.parentNode.removeChild(h),t(u)},h.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(h)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(e);var l=new Error;f=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,t[1](l)}o[e]=void 0}};var h=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/vue-week6/dist/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var h=d;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c={class:"container"};function o(e,n){var t=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["d"])("div",c,[Object(r["g"])(t)])}t("c9b3");const u={};u.render=o;var a=u,i=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),f=[{path:"/",name:"Home",component:function(){return t.e("chunk-429e4fe6").then(t.bind(null,"bb51"))},children:[{path:"index",component:function(){return t.e("chunk-3fa86e5e").then(t.bind(null,"d504"))}},{path:"products",component:function(){return Promise.all([t.e("chunk-11afbfad"),t.e("chunk-f6c4b8d8")]).then(t.bind(null,"e6dc"))}},{path:"cart",component:function(){return t.e("chunk-42348599").then(t.bind(null,"b789"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-2fcb5385").then(t.bind(null,"a55b"))}},{path:"/dashboard",name:"Dashboard",component:function(){return t.e("chunk-947f6458").then(t.bind(null,"7277"))},children:[{path:"products",component:function(){return Promise.all([t.e("chunk-11afbfad"),t.e("chunk-b81d225c")]).then(t.bind(null,"6d09"))}}]}],d=Object(i["a"])({history:Object(i["b"])(),routes:f,linkActiveClass:"active"}),l=d,h=t("bc3a"),s=t.n(h),b=t("2106"),p=t.n(b),m=t("7bb1"),k=t("3aa8"),v=t("cbdf"),g=t("9457");t("ce50");Object(m["e"])("email",k["a"]),Object(m["e"])("required",k["d"]),Object(m["e"])("min",k["b"]),Object(m["e"])("numeric",k["c"]),Object(m["d"])({generateMessage:Object(v["a"])({zh_TW:g}),validateOnInput:!0}),Object(v["b"])("zh_TW"),Object(r["c"])(a).use(l).use(p.a,s.a).component("Form",m["c"]).component("Field",m["b"]).component("ErrorMessage",m["a"]).mount("#app")},c249:function(e,n,t){},c9b3:function(e,n,t){"use strict";t("c249")},ce50:function(e,n,t){}});
//# sourceMappingURL=app.92607459.js.map