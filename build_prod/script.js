(()=>{var t={336:(t,n,e)=>{"use strict";e.d(n,{c:()=>s});var r=e(500),o=e.n(r),a=e(312),i=e.n(a)()(o());i.push([t.id,"/* * =============== Полноэкранный режим просмотра =============== */\n\n#player-wrapper.fullscreen {\n\theight: auto;\n\twidth: 100%;\n\tbackground-color: rgb(0, 0, 0);\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#controls.fullscreen {\n\tposition: absolute;\n\tbottom: 0;\n\theight: 6rem;\n\tbackground-color: rgb(0, 0, 0, 0.7);\n\ttransition: all 0.35s;\n}\n\n#controls.fullscreen:hover {\n\tbottom: 0 !important;\n}\n\n#controls.fullscreen i {\n\tcolor: #fff;\n}\n\n#controls.fullscreen i:hover {\n\tcolor: grey;\n}\n\n#controls.fullscreen > #slider {\n\ttop: 50%;\n\twidth: 65%;\n\tleft: 17.5%;\n}\n\n#controls.fullscreen #slider-area {\n\ttop: 50%;\n\twidth: 65%;\n\tleft: 17.5%;\n\tbackground-color: lightslategray;\n}\n\n#controls.fullscreen #buffer {\n\ttop: 50%;\n\tleft: 17.5%;\n}\n\n#controls.fullscreen > #play-pause,\n#controls.fullscreen > #settings {\n\twidth: 17%;\n}\n\n#controls.fullscreen #volume-btn {\n\taccent-color: white;\n}\n\n#controls.fullscreen i.fa-volume-xmark {\n\tmargin-right: 37px;\n}\n",""]);const s=i},240:(t,n,e)=>{"use strict";e.d(n,{c:()=>p});var r=e(500),o=e.n(r),a=e(312),i=e.n(a),s=e(757),c=e(608),l=e(336),u=e(139),d=i()(o());d.i(s.c),d.i(c.c),d.i(l.c),d.i(u.c),d.push([t.id,"/* стили ползунка перемотки */ /* стили для полноэкранного режима просмотра */ /* стили для стандартного режима просмотра */ /* минимальный адаптив (по ширине экрана менее 1250) */\n\n/* * Переопределение базовых стилей и общие классы */\n.hide {\n\tdisplay: none !important;\n}\n\n.h-px-5 {\n\theight: 5px;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tbackground-color: #ff2400;\n\theight: 100dvh;\n\tdisplay: flex;\n\toverflow: hidden;\n}\n\n#buffer {\n\tposition: absolute;\n\ttop: 0;\n}\n\n/* * Анимирование лоадера */\n\n#loader {\n\twidth: 60%;\n\theight: 70%;\n\tbox-shadow: 0 25px 65px -12px rgb(0 0 0);\n}\n\n#video-loader {\n\tanimation: loader-animation 3s infinite linear;\n}\n\n@keyframes loader-animation {\n\t0% {\n\t\tbackground: #a9a9a9;\n\t}\n\t50% {\n\t\tbackground: #727272;\n\t}\n\t100% {\n\t\tbackground: #a9a9a9;\n\t}\n}\n\n/* * Корректировка отображения иконок */\ni {\n\tcursor: pointer;\n\tfont-size: 2rem;\n}\ni.fa-pause {\n\tfont-size: 2.4rem;\n}\ni.fa-volume-xmark {\n\tmargin-right: 50px;\n}\ni:hover {\n\tcolor: gray;\n}\ni:active {\n\ttransform: scale(0.8);\n}\n\n/* * Корректировка отображения ползунка в FireFox */\n@-moz-document url-prefix() {\n\t#slider {\n\t\theight: 5px;\n\t}\n}\n\n#player-wrapper {\n\ttransition: all 0.3s;\n}\n",""]);const p=d},139:(t,n,e)=>{"use strict";e.d(n,{c:()=>s});var r=e(500),o=e.n(r),a=e(312),i=e.n(a)()(o());i.push([t.id,"/* * =============== Минимальный адаптив (по заданию требований нет) =============== */\n\n@media screen and (width < 1250px) {\n\t#player-wrapper {\n\t\twidth: 100% !important;\n\t\theight: 100% !important;\n\t\tbackground-color: black !important;\n\t\tmargin: auto !important;\n\t\tpadding: 0 !important;\n\t}\n\n\t#video {\n\t\tmargin-top: 0 !important;\n\t}\n\n\ti {\n\t\tcolor: #fff;\n\t\tfont-size: 150% !important;\n\t}\n\n\t#volume-btn {\n\t\taccent-color: #fff !important;\n\t}\n\n\t#controls {\n\t\theight: 50% !important;\n\t}\n\n\t#controls > * {\n\t\tmargin-top: 0px !important;\n\t}\n\n\t#controls > #metrics {\n\t\tmargin: auto !important;\n\t\tcolor: white;\n\t}\n}\n",""]);const s=i},757:(t,n,e)=>{"use strict";e.d(n,{c:()=>s});var r=e(500),o=e.n(r),a=e(312),i=e.n(a)()(o());i.push([t.id,"/* * =============== Ползунок перемотки видео =============== */\n\n#slider {\n\t-webkit-appearance: none;\n\tappearance: none;\n\tbackground: transparent;\n\tcursor: pointer;\n\twidth: 100%;\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 10;\n}\n\n#slider::-webkit-slider-runnable-track {\n\theight: 5px;\n\tborder: none;\n}\n\n#slider::-moz-range-track {\n\theight: 5px;\n\tbackground: transparent;\n\tborder-radius: 0px;\n}\n\n#slider::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\tborder: none;\n\theight: 16px;\n\twidth: 16px;\n\tborder-radius: 50%;\n\tbackground: #b3b3b3;\n\tmargin-top: -5px;\n\ttransition: all 0.1s;\n}\n\n#slider::-moz-range-thumb {\n\t-moz-appearance: none;\n\tborder: none;\n\theight: 16px;\n\twidth: 16px;\n\tborder-radius: 50%;\n\tbackground: #b3b3b3;\n\ttransition: all 0.1s;\n}\n\n#slider::-moz-range-progress {\n\tbackground-color: #ff3232;\n\theight: 5px;\n}\n",""]);const s=i},608:(t,n,e)=>{"use strict";e.d(n,{c:()=>s});var r=e(500),o=e.n(r),a=e(312),i=e.n(a)()(o());i.push([t.id,"/* * =============== Стандартный режим просмотра =============== */\n\n#player-wrapper.smallscreen {\n\theight: fit-content;\n\tmargin: auto;\n\tpadding: 0.5rem;\n\twidth: 60%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: white;\n\tbox-shadow: 0 25px 65px -12px rgb(0 0 0);\n}\n\n#video.smallscreen {\n\tborder: 1px solid black;\n\tmargin-bottom: 0 !important;\n}\n\n#controls.smallscreen {\n\theight: 7rem;\n\tposition: relative;\n}\n\n#controls.smallscreen #slider-area {\n\ttop: 0%;\n\twidth: 100%;\n\tbackground-color: lightslategray;\n\tborder: 1px solid black;\n\tborder-top: 0;\n\tborder-bottom: 0;\n}\n\n#controls.smallscreen #volume-btn {\n\taccent-color: black;\n}\n",""]);const s=i},312:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},500:t=>{"use strict";t.exports=function(t){return t[1]}},444:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>b});var r=e(596),o=e.n(r),a=e(520),i=e.n(a),s=e(176),c=e.n(s),l=e(120),u=e.n(l),d=e(808),p=e.n(d),m=e(936),f=e.n(m),g=e(240),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(g.c,h);const b=g.c&&g.c.locals?g.c.locals:void 0},596:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=e(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var c=r(t,o),l=0;l<a.length;l++){var u=e(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},176:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},808:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},120:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},520:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},936:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},880:t=>{t.exports={changeInput:()=>{const t=($("#slider").val()-$("#slider").attr("min"))/($("#slider").attr("max")-$("#slider").attr("min"))*100;$("#slider").css("background-image","-webkit-gradient(linear, left top, right top, color-stop("+t+"%, #ff3232), color-stop("+t+"%, transparent))")}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.nc=void 0,(()=>{function t(t){const n=Math.floor(t/60),e=Math.floor(t%60);return{min:n>9?`${n}`:`0${n}`,sec:e>9?`${e}`:`0${e}`}}e(444);const{changeInput:n}=e(880),r=document.getElementById("video"),o=document.querySelector("#controls"),a=document.querySelector("#play-pause-btn"),i=document.querySelector("#mode-toggle-btn"),s=document.querySelector("#metrics"),c=document.querySelector("#slider"),l=document.querySelectorAll("#remote-btn-left, #remote-btn-right"),u=document.querySelector("#mute-btn"),d=document.querySelector("#volume-btn");var p=null;if(Hls.isSupported()){var m=new Hls;m.loadSource("https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"),m.attachMedia(r),m.on(Hls.Events.BUFFER_APPENDED,(function(){const t=r.buffered.end(0)/r.duration*100,n="true"==localStorage.isFullscreen?.65*t:t;document.querySelector("#buffer").style.width=`${n}%`})),m.subtitleDisplay=!1}function f(){o.style.bottom="0",setTimeout((()=>{"true"==localStorage.isFullscreen&&(o.style.bottom=`-${o.offsetHeight}px`)}),1500)}r.addEventListener("loadeddata",(()=>{p=`${t(r.duration).min}:${t(r.duration).sec}`,document.querySelector("#loader").classList.toggle("hide"),document.querySelector("#player-wrapper").classList.toggle("hide"),s.innerHTML=`00:00/${p}`})),$(document).ready((function(){n(),$(c).on("input",n),r.duration&&c.setAttribute("max",r.duration),$(c).val(0),localStorage.isFullscreen=!1})),d.addEventListener("input",(function(){r.volume=d.value,(0==d.value||u.classList.contains("fa-volume-xmark"))&&(u.classList.toggle("fa-volume-xmark"),u.classList.toggle("fa-volume-high"))})),u.addEventListener("click",(function(){r.muted=!r.muted,r.muted?(localStorage.setItem("volume",d.value),d.value=0):d.value=localStorage.volume,u.classList.toggle("fa-volume-xmark"),u.classList.toggle("fa-volume-high")})),$(document).keyup((function(t){switch(t.key){case"Escape":"true"==localStorage.isFullscreen&&$(i).trigger("click");break;case" ":$(a).trigger("click");break;case"ArrowLeft":$("#remote-btn-left").trigger("click");break;case"ArrowRight":$("#remote-btn-right").trigger("click")}})),i.addEventListener("click",(function(){"true"==localStorage.isFullscreen?(document.removeEventListener("mousemove",f),o.style.bottom="0",localStorage.setItem("isFullscreen",!1)):(o.style.bottom=`-${o.offsetHeight}px`,document.addEventListener("mousemove",f),localStorage.setItem("isFullscreen",!0)),document.querySelectorAll("#player-wrapper, #video, #controls").forEach((t=>{t.classList.toggle("fullscreen"),t.classList.toggle("smallscreen")})),i.classList.toggle("fa-compress"),i.classList.toggle("fa-expand")})),a.addEventListener("click",(function(){r.paused||r.ended?r.play():r.pause(),a.classList.toggle("fa-play"),a.classList.toggle("fa-pause")})),r.addEventListener("timeupdate",(function(){const n=t(r.currentTime).sec,e=t(r.currentTime).min;s.innerHTML=e+":"+n+"/"+p,$(c).val(r.currentTime.toFixed(0)),$(c).trigger("input")})),$(c).on("change",(function(){r.currentTime=$(this).val(),$(c).trigger("input")})),$(l).each((function(){$(this).on("click",(function(){let t=r.currentTime;"backward"==$(this).data("direction")?t-=10:t+=10,t<0&&(t=0),t=Number(t.toFixed(0)),r.currentTime=t}))}))})()})();