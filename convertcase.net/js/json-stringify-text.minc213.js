(function(r,i){typeof exports=="object"&&typeof module=="object"?module.exports=i():typeof define=="function"&&define.amd?define([],i):typeof exports=="object"?exports.ClipboardJS=i():r.ClipboardJS=i()})(this,function(){return i={686:function(d,e,n){"use strict";n.d(e,{default:function(){return B}});var e=n(279),p=n.n(e),e=n(370),o=n.n(e),e=n(817),m=n.n(e);function a(s){try{return document.execCommand(s)}catch(l){return}}var w=function(s){return s=m()(s),a("cut"),s};function u(S,l){var h,b,S=(h=S,b=document.documentElement.getAttribute("dir")==="rtl",(S=document.createElement("textarea")).style.fontSize="12pt",S.style.border="0",S.style.padding="0",S.style.margin="0",S.style.position="absolute",S.style[b?"right":"left"]="-9999px",b=window.pageYOffset||document.documentElement.scrollTop,S.style.top="".concat(b,"px"),S.setAttribute("readonly",""),S.value=h,S);return l.container.appendChild(S),l=m()(S),a("copy"),S.remove(),l}var f=function(s){var l=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body},h="";return typeof s=="string"?h=u(s,l):s instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(s==null?void 0:s.type)?h=u(s.value,l):(h=m()(s),a("copy")),h};function g(s){return(g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l})(s)}var E=function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},h=b.action,s=h===void 0?"copy":h,l=b.container,h=b.target,b=b.text;if(s!=="copy"&&s!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(h!==void 0){if(!h||g(h)!=="object"||h.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(s==="copy"&&h.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(s==="cut"&&(h.hasAttribute("readonly")||h.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return b?f(b,{container:l}):h?s==="cut"?w(h):f(h,{container:l}):void 0};function A(s){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l})(s)}function C(s,l){for(var h=0;h<l.length;h++){var b=l[h];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(s,b.key,b)}}function x(s,l){return(x=Object.setPrototypeOf||function(h,b){return h.__proto__=b,h})(s,l)}function _(s){var l=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(h){return!1}}();return function(){var h,b=T(s);return h=l?(h=T(this).constructor,Reflect.construct(b,arguments,h)):b.apply(this,arguments),b=this,!(h=h)||A(h)!=="object"&&typeof h!="function"?function(S){if(S!==void 0)return S;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(b):h}}function T(s){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)})(s)}function M(s,l){if(s="data-clipboard-".concat(s),l.hasAttribute(s))return l.getAttribute(s)}var B=function(){(function(v,L){if(typeof L!="function"&&L!==null)throw new TypeError("Super expression must either be null or a function");v.prototype=Object.create(L&&L.prototype,{constructor:{value:v,writable:!0,configurable:!0}}),L&&x(v,L)})(S,p());var s,l,h,b=_(S);function S(v,L){var k;return function(j){if(!(j instanceof S))throw new TypeError("Cannot call a class as a function")}(this),(k=b.call(this)).resolveOptions(L),k.listenClick(v),k}return s=S,h=[{key:"copy",value:function(v){var L=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body};return f(v,L)}},{key:"cut",value:function(v){return w(v)}},{key:"isSupported",value:function(){var v=0<arguments.length&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof v=="string"?[v]:v,L=!!document.queryCommandSupported;return v.forEach(function(k){L=L&&!!document.queryCommandSupported(k)}),L}}],(l=[{key:"resolveOptions",value:function(){var v=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof v.action=="function"?v.action:this.defaultAction,this.target=typeof v.target=="function"?v.target:this.defaultTarget,this.text=typeof v.text=="function"?v.text:this.defaultText,this.container=A(v.container)==="object"?v.container:document.body}},{key:"listenClick",value:function(v){var L=this;this.listener=o()(v,"click",function(k){return L.onClick(k)})}},{key:"onClick",value:function(j){var L=j.delegateTarget||j.currentTarget,k=this.action(L)||"copy",j=E({action:k,container:this.container,target:this.target(L),text:this.text(L)});this.emit(j?"success":"error",{action:k,text:j,trigger:L,clearSelection:function(){L&&L.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(v){return M("action",v)}},{key:"defaultTarget",value:function(v){if(v=M("target",v),v)return document.querySelector(v)}},{key:"defaultText",value:function(v){return M("text",v)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&C(s.prototype,l),h&&C(s,h),S}()},828:function(d){var t;typeof Element=="undefined"||Element.prototype.matches||((t=Element.prototype).matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector),d.exports=function(n,p){for(;n&&n.nodeType!==9;){if(typeof n.matches=="function"&&n.matches(p))return n;n=n.parentNode}}},438:function(d,t,n){var p=n(828);function o(e,m,a,w,u){var f=function(g,E,A,C){return function(x){x.delegateTarget=p(x.target,E),x.delegateTarget&&C.call(g,x)}}.apply(this,arguments);return e.addEventListener(a,f,u),{destroy:function(){e.removeEventListener(a,f,u)}}}d.exports=function(e,m,a,w,u){return typeof e.addEventListener=="function"?o.apply(null,arguments):typeof a=="function"?o.bind(null,document).apply(null,arguments):(typeof e=="string"&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(f){return o(f,m,a,w,u)}))}},879:function(d,t){t.node=function(n){return n!==void 0&&n instanceof HTMLElement&&n.nodeType===1},t.nodeList=function(n){var p=Object.prototype.toString.call(n);return n!==void 0&&(p==="[object NodeList]"||p==="[object HTMLCollection]")&&"length"in n&&(n.length===0||t.node(n[0]))},t.string=function(n){return typeof n=="string"||n instanceof String},t.fn=function(n){return Object.prototype.toString.call(n)==="[object Function]"}},370:function(d,t,n){var p=n(879),o=n(438);d.exports=function(e,m,a){if(!e&&!m&&!a)throw new Error("Missing required arguments");if(!p.string(m))throw new TypeError("Second argument must be a String");if(!p.fn(a))throw new TypeError("Third argument must be a Function");if(p.node(e))return E=m,A=a,(g=e).addEventListener(E,A),{destroy:function(){g.removeEventListener(E,A)}};if(p.nodeList(e))return w=e,u=m,f=a,Array.prototype.forEach.call(w,function(C){C.addEventListener(u,f)}),{destroy:function(){Array.prototype.forEach.call(w,function(C){C.removeEventListener(u,f)})}};if(p.string(e))return e=e,m=m,a=a,o(document.body,e,m,a);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var w,u,f,g,E,A}},817:function(d){d.exports=function(t){var n,p=t.nodeName==="SELECT"?(t.focus(),t.value):t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"?((n=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),p=window.getSelection(),(n=document.createRange()).selectNodeContents(t),p.removeAllRanges(),p.addRange(n),p.toString());return p}},279:function(d){function t(){}t.prototype={on:function(n,p,o){var e=this.e||(this.e={});return(e[n]||(e[n]=[])).push({fn:p,ctx:o}),this},once:function(n,p,o){var e=this;function m(){e.off(n,m),p.apply(o,arguments)}return m._=p,this.on(n,m,o)},emit:function(n){for(var p=[].slice.call(arguments,1),o=((this.e||(this.e={}))[n]||[]).slice(),e=0,m=o.length;e<m;e++)o[e].fn.apply(o[e].ctx,p);return this},off:function(n,p){var o=this.e||(this.e={}),e=o[n],m=[];if(e&&p)for(var a=0,w=e.length;a<w;a++)e[a].fn!==p&&e[a].fn._!==p&&m.push(e[a]);return m.length?o[n]=m:delete o[n],this}},d.exports=t,d.exports.TinyEmitter=t}},y={},r.n=function(d){var t=d&&d.__esModule?function(){return d.default}:function(){return d};return r.d(t,{a:t}),t},r.d=function(d,t){for(var n in t)r.o(t,n)&&!r.o(d,n)&&Object.defineProperty(d,n,{enumerable:!0,get:t[n]})},r.o=function(d,t){return Object.prototype.hasOwnProperty.call(d,t)},r(686).default;function r(d){if(y[d])return y[d].exports;var t=y[d]={exports:{}};return i[d](t,t.exports,r),t.exports}var i,y});(function(r,i){typeof define=="function"&&define.amd?define([],i):typeof exports!="undefined"?i():(i(),r.FileSaver={})})(this,function(){"use strict";function r(o,e){return typeof e=="undefined"?e={autoBom:!1}:typeof e!="object"&&(e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function i(o,e,m){var a=new XMLHttpRequest;a.open("GET",o),a.responseType="blob",a.onload=function(){p(a.response,e,m)},a.onerror=function(){},a.send()}function y(o){var e=new XMLHttpRequest;e.open("HEAD",o,!1);try{e.send()}catch(m){}return 200<=e.status&&299>=e.status}function d(o){try{o.dispatchEvent(new MouseEvent("click"))}catch(m){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(e)}}var t=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,n=t.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),p=t.saveAs||(typeof window!="object"||window!==t?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(o,e,m){var a=t.URL||t.webkitURL,w=document.createElement("a");e=e||o.name||"download",w.download=e,w.rel="noopener",typeof o=="string"?(w.href=o,w.origin===location.origin?d(w):y(w.href)?i(o,e,m):d(w,w.target="_blank")):(w.href=a.createObjectURL(o),setTimeout(function(){a.revokeObjectURL(w.href)},4e4),setTimeout(function(){d(w)},0))}:"msSaveOrOpenBlob"in navigator?function(o,e,m){if(e=e||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(r(o,m),e);else if(y(o))i(o,e,m);else{var a=document.createElement("a");a.href=o,a.target="_blank",setTimeout(function(){d(a)})}}:function(o,e,m,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),typeof o=="string")return i(o,e,m);var w=o.type==="application/octet-stream",u=/constructor/i.test(t.HTMLElement)||t.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent);if((f||w&&u||n)&&typeof FileReader!="undefined"){var g=new FileReader;g.onloadend=function(){var C=g.result;C=f?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=C:location=C,a=null},g.readAsDataURL(o)}else{var E=t.URL||t.webkitURL,A=E.createObjectURL(o);a?a.location=A:location.href=A,a=null,setTimeout(function(){E.revokeObjectURL(A)},4e4)}});t.saveAs=p.saveAs=p,typeof module!="undefined"&&(module.exports=p)});var allowed_refresh_slots=["/22181265/ConvertCase_728x90_ATF","/22181265/ConvertCase_300x250_Belowtxtbox_1","/22181265/ConvertCase_300x250_Belowtxtbox_2"],copy_symbol='<img src="/img/copy.svg" class="copy" alt="Copy to Clipboard">';function windowPopup(r,i,y){var d=screen.width/2-i/2,t=screen.height/2-y/2;window.open(r,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width="+i+",height="+y+",top="+t+",left="+d)}function ga_event(r,i){if(typeof gtag!="undefined")if(i==="view_search_results")gtag("event",i,{search_term:r});else{value=0;var y=document.getElementById("word_count");y!=null&&(value=parseInt(y.innerHTML)),gtag("event",i,{event_category:r,value})}}function calc_counts(r){var i=r.value;r.value===void 0&&(i=r.innerText),document.getElementById("char_count").innerHTML=i.length;var y=0,d=i.trim().replace(/\s+/gi," ");d.length>0&&(y=d.split(" ").length),document.getElementById("word_count").innerHTML=y;var t=0;i.length>0&&(t=i.split(/\r*\n/).length),document.getElementById("line_count").innerHTML=t;var n=0;i.length>0&&(n=i.trim().split(/[.?!]\s/g).length),document.getElementById("sent_count").innerHTML=n}var timer;function display_message(r,i){clearTimeout(timer);var y=document.querySelector(".messages");y.innerHTML='<div class="message '+i+'">'+r+"</div>",timer=setTimeout(function(){y.innerHTML=""},3e3)}var last_refresh=Date.now(),viewed_slots=[];function refresh_dfp(){last_refresh+5e3<Date.now()&&((window.aaw=window.aaw||{cmd:[]}).cmd.push(function(){viewed_slots.length>0&&(window.aaw.refreshAdunits(viewed_slots),viewed_slots=[])}),last_refresh=Date.now())}(window.googletag=window.googletag||{cmd:[]}).cmd.push(function(){googletag.pubads().addEventListener("impressionViewable",function(r){var i=r.slot.getAdUnitPath();i=i.replace("22181265,153247860","22181265"),allowed_refresh_slots.includes(i)&&viewed_slots.push(i)})});function document_state(){var r;return typeof document.hidden!="undefined"?r="visibilityState":typeof document.mozHidden!="undefined"?r="mozVisibilityState":typeof document.msHidden!="undefined"?r="msVisibilityState":typeof document.webkitHidden!="undefined"&&(r="webkitVisibilityState"),document[r]}setInterval(function(){document_state()==="visible"&&last_refresh+3e4<Date.now()&&refresh_dfp()},1e3);var content,output;document.addEventListener("DOMContentLoaded",function(){if(content=document.getElementById("content"),output=document.getElementById("output"),document.getElementById("char_count")!=null){var r=output;content!=null&&(r=content,content.addEventListener("focus",function(){calc_counts(r)}),content.addEventListener("blur",function(){calc_counts(r)}),content.addEventListener("input",function(){calc_counts(r)}),content.addEventListener("propertychange",function(){calc_counts(r)}),calc_counts(r)),output!=null&&(output.addEventListener("focus",function(){calc_counts(r)}),output.addEventListener("blur",function(){calc_counts(r)}),output.addEventListener("input",function(){calc_counts(r)}),output.addEventListener("propertychange",function(){calc_counts(r)}),calc_counts(r))}if(document.getElementById("copy")){var i=new ClipboardJS("#copy",{text:function(u){return document.querySelectorAll(u.getAttribute("data-clipboard-target"))[0].innerText}});i.on("success",function(u){display_message(copied,"success"),ga_event("Copied","Copied"),refresh_dfp(),u.clearSelection()}),i.on("error",function(u){u.text.length===0?display_message(no_text,"error"):(display_message(manual_copy,"info"),ga_event("Copied","Manual"),refresh_dfp())});var y=new ClipboardJS(".copy",{text:function(u){return u.parentNode.innerText}});y.on("success",function(u){display_message(copied,"success"),ga_event("Copied","Copied"),refresh_dfp(),u.clearSelection()}),y.on("error",function(u){u.text.length===0?display_message(no_text,"error"):(display_message(manual_copy,"info"),ga_event("Copied","Manual"),refresh_dfp())})}if(document.getElementById("download"))try{var d=!!new Blob,t=document.getElementById("download");t&&(t.style.display="inline-block",t.addEventListener("click",function(u){if(t.getAttribute("data-download-type")==="image"){var f=document.getElementById(t.getAttribute("data-download-target").slice(1)),g=dataURItoBlob(f.src);saveAs(g,f.getAttribute("data-filename")),display_message(downloaded_image,"success"),ga_event("Download","Download"),refresh_dfp()}else if(t.getAttribute("data-download-type")==="application/json"){var E=document.getElementById(t.getAttribute("data-download-target").slice(1)).value.replace(/\n/g,`\r
`);if(E.length===0)display_message(no_text,"error");else{var g=new Blob([E],{type:"application/json;charset=utf-8"}),A=file_name.replace(".txt",".json");saveAs(g,A),display_message(downloaded_json,"success"),ga_event("Download","Download"),refresh_dfp()}}else{if(t.getAttribute("data-download-type")==="innerText")var E=document.getElementById(t.getAttribute("data-download-target").slice(1)).innerText.replace(/\n/g,`\r
`);else var E=document.getElementById(t.getAttribute("data-download-target").slice(1)).value.replace(/\n/g,`\r
`);if(E.length===0)display_message(no_text,"error");else{var g=new Blob([E],{type:"text/plain;charset=utf-8"});saveAs(g,file_name),display_message(downloaded,"success"),ga_event("Download","Download"),refresh_dfp()}}return!1}))}catch(u){}var n=document.querySelectorAll(".share");if(n!=null)for(var p=0;p<n.length;p++)n[p].addEventListener("click",function(u){return u.preventDefault(),windowPopup(this.href,520,320),!1});function o(){var u=document.querySelectorAll(".search input")[0],f=document.querySelectorAll(".tabs > li:not(.more) > ul > li > a"),g=document.querySelectorAll(".search .results")[0],E=null;function A(C){C.length>3&&ga_event(C,"view_search_results")}u.addEventListener("keyup",function(C){if(C.keyCode===13){var x=g.querySelectorAll("a")[0];x&&(window.location=x.getAttribute("href"))}var _=u.value.toLowerCase();clearTimeout(E),E=setTimeout(function(){A(_)},500);for(var T=g.querySelectorAll("li:not(.no-results)"),M=0;M<T.length;M++)T[M].parentNode.removeChild(T[M]);g.querySelectorAll(".no-results")[0].classList.remove("show"),_.length>0&&($i=0,f.forEach(function(B){if(!($i>10)){var s=B.innerHTML;s=s.replace("<br>"," "),s.toLowerCase().includes(_)&&(g.innerHTML+='<li><a href="'+B.getAttribute("href")+'">'+s.replace(new RegExp(_,"gi"),function(l){return"<strong>"+l+"</strong>"})+"</a></li>",$i++)}})),g.appendChild(g.querySelectorAll(".no-results")[0]),g.querySelectorAll("li:not(.no-results").length===0&&g.querySelectorAll(".no-results")[0].classList.add("show")}),u.addEventListener("blur",function(C){setTimeout(function(){u.value="";for(var x=g.querySelectorAll("li:not(.no-results)"),_=0;_<x.length;_++)x[_].parentNode.removeChild(x[_]);g.querySelectorAll(".no-results")[0].classList.remove("show")},500)})}o();var e=document.getElementById("menu");e.classList.add("js");function m(){e.classList.remove("has-overflow");for(var u=e.children,f=0;f<u.length;f++)u[f].classList.remove("overflowed"),u[f].classList.contains("more")&&u[f].parentNode.removeChild(u[f]);var g=document.querySelector(".container").clientWidth,E=e.scrollWidth,A=g-65-120,C=!1,x="";if(E>g){for(var u=e.children,f=0;f<u.length;f++)if(!u[f].classList.contains("search")){var _=u[f].clientWidth;!C&&A-_>=0?A-=_:(C=!0,u[f].classList.add("overflowed"),x+="<li>"+u[f].innerHTML.replace("<br>"," ").replace("&nbsp;"," ")+"</li>")}}if(C){e.innerHTML+='<li class="more"><span><em></em></span><ul>'+x+"</ul></li>",o();for(var T=document.querySelectorAll("#menu .more span, #menu .more a"),f=0;f<T.length;f++)T[f].parentNode.querySelector("ul")&&T[f].addEventListener("click",function(B){B.preventDefault(),this.parentNode.classList.toggle("open");for(var s=document.querySelectorAll("#menu .more .open"),l=0;l<s.length;l++)s[l]!=this.parentNode&&s[l].classList.remove("open");return!1});e.classList.add("has-overflow")}}m();var a=window.innerWidth;if(window.onresize=function(u){window.innerWidth!=a&&m()},localStorage.getItem("theme")==="dark"?document.body.classList.add("dark"):localStorage.getItem("theme")==="light"&&document.body.classList.add("light"),document.getElementById("toggle-theme").addEventListener("click",function(u){u.preventDefault();var f="auto";return document.body.classList.contains("dark")?(document.body.classList.remove("dark"),document.body.classList.add("light"),f="light"):document.body.classList.contains("light")?(document.body.classList.remove("light"),document.body.classList.remove("dark")):(document.body.classList.add("dark"),f="dark"),localStorage.setItem("theme",f),ga_event("Theme",f),!1}),window.screen.height>=900){var w=document.querySelector('[data-aa-adunit="/22181265/ConvertCase_Desktop_StickyFooter"]');w&&(w.dataset.aaad="true"),(window.aaw=window.aaw||{cmd:[]}).cmd.push(function(){window.aaw.processAdsOnPage(),allowed_refresh_slots.push("/22181265/ConvertCase_Desktop_StickyFooter")})}});"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");function dataURItoBlob(r){for(var i=atob(r.split(",")[1]),y=r.split(",")[0].split(":")[1].split(";")[0],d=new ArrayBuffer(i.length),t=new Uint8Array(d),n=0;n<i.length;n++)t[n]=i.charCodeAt(n);var p=new Blob([d],{type:y});return p}function convert(r){return JSON.stringify(r).replace(/\\n/g,"\\n").replace(/\\'/g,"\\'").replace(/\\"/g,'\\"').replace(/\\&/g,"\\&").replace(/\\r/g,"\\r").replace(/\\t/g,"\\t").replace(/\\b/g,"\\b").replace(/\\f/g,"\\f")}function one_way(){var r=content.value;r==""&&(r=content.placeholder);var i="",y=convert(r);if(typeof y=="object")for(var d in y)isNaN(d)&&(i+="<h3>"+d+"</h3>"),i+="<p>"+y[d]+copy_symbol+"</p>";else i="<p>"+y+"</p>";document.getElementById("output").innerHTML=i}document.addEventListener("DOMContentLoaded",function(){one_way(),content.addEventListener("input",function(r){one_way(),refresh_dfp()}),content.addEventListener("propertychange",function(r){one_way(),refresh_dfp()})});
