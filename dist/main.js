(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>i});var r=e(537),o=e.n(r),a=e(645),c=e.n(a)()(o());c.push([n.id,"html, body {\n\tmargin: 0px;\n\theight: 100%;\n\twidth: 100%;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #1B1B1B;\n}\n\n#tab-bar {\n\tflex: 0 1 auto;\n\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: flex-end;\n\tjustify-content: center;\n\tgap: 8px;\n\n\tbackground-color: grey;\n}\n\n.tab-btn {\n\tmargin-top: 16px;\n}\n\n#content {\n\tflex: 1 1 auto;\n\tbackground-color: white;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;CACC,WAAW;CACX,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,yBAAyB;AAC1B;;AAEA;CACC,cAAc;;CAEd,aAAa;CACb,mBAAmB;CACnB,qBAAqB;CACrB,uBAAuB;CACvB,QAAQ;;CAER,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,cAAc;CACd,uBAAuB;AACxB",sourcesContent:["html, body {\n\tmargin: 0px;\n\theight: 100%;\n\twidth: 100%;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #1B1B1B;\n}\n\n#tab-bar {\n\tflex: 0 1 auto;\n\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: flex-end;\n\tjustify-content: center;\n\tgap: 8px;\n\n\tbackground-color: grey;\n}\n\n.tab-btn {\n\tmargin-top: 16px;\n}\n\n#content {\n\tflex: 1 1 auto;\n\tbackground-color: white;\n}\n"],sourceRoot:""}]);const i=c},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},537:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=e(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var A=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:A,references:1})}c.push(l)}return c}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=e(a[c]);t[i].references--}for(var s=r(n,o),u=0;u<a.length;u++){var d=e(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),o=e.n(r),a=e(569),c=e.n(a),i=e(565),s=e.n(i),u=e(216),d=e.n(u),l=e(589),p=e.n(l),f=e(426),A={};A.styleTagTransform=p(),A.setAttributes=s(),A.insert=c().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=d(),t()(f.Z,A),f.Z&&f.Z.locals&&f.Z.locals;const m=document.createElement("div");m.id="tab-bar";const v=document.createElement("div");v.id="content";const b=document.createElement("button");b.innerText="Home",b.classList.add("tab-btn"),b.addEventListener("click",(()=>{h(function(){const n=document.createElement("p");return n.innerText="Hello from home!",n}())}));const C=document.createElement("button");C.innerText="Menu",C.classList.add("tab-btn"),C.addEventListener("click",(()=>{h(function(){const n=document.createElement("p");return n.innerText="Hello from menu!",n}())}));const y=document.createElement("button");function h(n){v.innerHTML="",v.appendChild(n)}y.innerText="Contact",y.classList.add("tab-btn"),y.addEventListener("click",(()=>{h(function(){const n=document.createElement("p");return n.innerText="Hello from contact!",n}())})),m.append(b,C,y),document.body.append(m,v)})()})();
//# sourceMappingURL=main.js.map