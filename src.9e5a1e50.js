parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"Ky5I":[function(require,module,exports) {
var t=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e={start:document.querySelector('button[data-action="start"]'),stop:document.querySelector('button[data-action="stop"]'),bodyColor:document.querySelector("body")},o=1e3,r=null;e.start.addEventListener("click",c),e.stop.addEventListener("click",l);var n=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)};function a(){var o=t[n(0,t.length-1)];console.log(o),e.bodyColor.style.backgroundColor=o}function c(t){r=setInterval(function(){a()},o),t.target.disabled="true",e.start.removeEventListener("click",c),e.stop.addEventListener("click",l)}function l(t){clearInterval(r),e.start.removeAttribute("disabled"),e.start.addEventListener("click",c),e.stop.removeEventListener("click",l)}
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./code.js/color-switch");
},{"./sass/main.scss":"clu1","./code.js/color-switch":"Ky5I"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.9e5a1e50.js.map