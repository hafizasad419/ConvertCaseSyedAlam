(function(r,i){typeof exports=="object"&&typeof module=="object"?module.exports=i():typeof define=="function"&&define.amd?define([],i):typeof exports=="object"?exports.ClipboardJS=i():r.ClipboardJS=i()})(this,function(){return i={686:function(m,e,n){"use strict";n.d(e,{default:function(){return B}});var e=n(279),f=n.n(e),e=n(370),o=n.n(e),e=n(817),h=n.n(e);function a(s){try{return document.execCommand(s)}catch(l){return}}var b=function(s){return s=h()(s),a("cut"),s};function u(S,l){var p,y,S=(p=S,y=document.documentElement.getAttribute("dir")==="rtl",(S=document.createElement("textarea")).style.fontSize="12pt",S.style.border="0",S.style.padding="0",S.style.margin="0",S.style.position="absolute",S.style[y?"right":"left"]="-9999px",y=window.pageYOffset||document.documentElement.scrollTop,S.style.top="".concat(y,"px"),S.setAttribute("readonly",""),S.value=p,S);return l.container.appendChild(S),l=h()(S),a("copy"),S.remove(),l}var d=function(s){var l=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body},p="";return typeof s=="string"?p=u(s,l):s instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(s==null?void 0:s.type)?p=u(s.value,l):(p=h()(s),a("copy")),p};function g(s){return(g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l})(s)}var L=function(){var y=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},p=y.action,s=p===void 0?"copy":p,l=y.container,p=y.target,y=y.text;if(s!=="copy"&&s!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(p!==void 0){if(!p||g(p)!=="object"||p.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(s==="copy"&&p.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(s==="cut"&&(p.hasAttribute("readonly")||p.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return y?d(y,{container:l}):p?s==="cut"?b(p):d(p,{container:l}):void 0};function A(s){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l})(s)}function C(s,l){for(var p=0;p<l.length;p++){var y=l[p];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(s,y.key,y)}}function x(s,l){return(x=Object.setPrototypeOf||function(p,y){return p.__proto__=y,p})(s,l)}function T(s){var l=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(p){return!1}}();return function(){var p,y=_(s);return p=l?(p=_(this).constructor,Reflect.construct(y,arguments,p)):y.apply(this,arguments),y=this,!(p=p)||A(p)!=="object"&&typeof p!="function"?function(S){if(S!==void 0)return S;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(y):p}}function _(s){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)})(s)}function M(s,l){if(s="data-clipboard-".concat(s),l.hasAttribute(s))return l.getAttribute(s)}var B=function(){(function(v,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");v.prototype=Object.create(E&&E.prototype,{constructor:{value:v,writable:!0,configurable:!0}}),E&&x(v,E)})(S,f());var s,l,p,y=T(S);function S(v,E){var k;return function(j){if(!(j instanceof S))throw new TypeError("Cannot call a class as a function")}(this),(k=y.call(this)).resolveOptions(E),k.listenClick(v),k}return s=S,p=[{key:"copy",value:function(v){var E=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body};return d(v,E)}},{key:"cut",value:function(v){return b(v)}},{key:"isSupported",value:function(){var v=0<arguments.length&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof v=="string"?[v]:v,E=!!document.queryCommandSupported;return v.forEach(function(k){E=E&&!!document.queryCommandSupported(k)}),E}}],(l=[{key:"resolveOptions",value:function(){var v=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof v.action=="function"?v.action:this.defaultAction,this.target=typeof v.target=="function"?v.target:this.defaultTarget,this.text=typeof v.text=="function"?v.text:this.defaultText,this.container=A(v.container)==="object"?v.container:document.body}},{key:"listenClick",value:function(v){var E=this;this.listener=o()(v,"click",function(k){return E.onClick(k)})}},{key:"onClick",value:function(j){var E=j.delegateTarget||j.currentTarget,k=this.action(E)||"copy",j=L({action:k,container:this.container,target:this.target(E),text:this.text(E)});this.emit(j?"success":"error",{action:k,text:j,trigger:E,clearSelection:function(){E&&E.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(v){return M("action",v)}},{key:"defaultTarget",value:function(v){if(v=M("target",v),v)return document.querySelector(v)}},{key:"defaultText",value:function(v){return M("text",v)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&C(s.prototype,l),p&&C(s,p),S}()},828:function(m){var t;typeof Element=="undefined"||Element.prototype.matches||((t=Element.prototype).matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector),m.exports=function(n,f){for(;n&&n.nodeType!==9;){if(typeof n.matches=="function"&&n.matches(f))return n;n=n.parentNode}}},438:function(m,t,n){var f=n(828);function o(e,h,a,b,u){var d=function(g,L,A,C){return function(x){x.delegateTarget=f(x.target,L),x.delegateTarget&&C.call(g,x)}}.apply(this,arguments);return e.addEventListener(a,d,u),{destroy:function(){e.removeEventListener(a,d,u)}}}m.exports=function(e,h,a,b,u){return typeof e.addEventListener=="function"?o.apply(null,arguments):typeof a=="function"?o.bind(null,document).apply(null,arguments):(typeof e=="string"&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(d){return o(d,h,a,b,u)}))}},879:function(m,t){t.node=function(n){return n!==void 0&&n instanceof HTMLElement&&n.nodeType===1},t.nodeList=function(n){var f=Object.prototype.toString.call(n);return n!==void 0&&(f==="[object NodeList]"||f==="[object HTMLCollection]")&&"length"in n&&(n.length===0||t.node(n[0]))},t.string=function(n){return typeof n=="string"||n instanceof String},t.fn=function(n){return Object.prototype.toString.call(n)==="[object Function]"}},370:function(m,t,n){var f=n(879),o=n(438);m.exports=function(e,h,a){if(!e&&!h&&!a)throw new Error("Missing required arguments");if(!f.string(h))throw new TypeError("Second argument must be a String");if(!f.fn(a))throw new TypeError("Third argument must be a Function");if(f.node(e))return L=h,A=a,(g=e).addEventListener(L,A),{destroy:function(){g.removeEventListener(L,A)}};if(f.nodeList(e))return b=e,u=h,d=a,Array.prototype.forEach.call(b,function(C){C.addEventListener(u,d)}),{destroy:function(){Array.prototype.forEach.call(b,function(C){C.removeEventListener(u,d)})}};if(f.string(e))return e=e,h=h,a=a,o(document.body,e,h,a);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var b,u,d,g,L,A}},817:function(m){m.exports=function(t){var n,f=t.nodeName==="SELECT"?(t.focus(),t.value):t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"?((n=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),f=window.getSelection(),(n=document.createRange()).selectNodeContents(t),f.removeAllRanges(),f.addRange(n),f.toString());return f}},279:function(m){function t(){}t.prototype={on:function(n,f,o){var e=this.e||(this.e={});return(e[n]||(e[n]=[])).push({fn:f,ctx:o}),this},once:function(n,f,o){var e=this;function h(){e.off(n,h),f.apply(o,arguments)}return h._=f,this.on(n,h,o)},emit:function(n){for(var f=[].slice.call(arguments,1),o=((this.e||(this.e={}))[n]||[]).slice(),e=0,h=o.length;e<h;e++)o[e].fn.apply(o[e].ctx,f);return this},off:function(n,f){var o=this.e||(this.e={}),e=o[n],h=[];if(e&&f)for(var a=0,b=e.length;a<b;a++)e[a].fn!==f&&e[a].fn._!==f&&h.push(e[a]);return h.length?o[n]=h:delete o[n],this}},m.exports=t,m.exports.TinyEmitter=t}},w={},r.n=function(m){var t=m&&m.__esModule?function(){return m.default}:function(){return m};return r.d(t,{a:t}),t},r.d=function(m,t){for(var n in t)r.o(t,n)&&!r.o(m,n)&&Object.defineProperty(m,n,{enumerable:!0,get:t[n]})},r.o=function(m,t){return Object.prototype.hasOwnProperty.call(m,t)},r(686).default;function r(m){if(w[m])return w[m].exports;var t=w[m]={exports:{}};return i[m](t,t.exports,r),t.exports}var i,w});(function(r,i){typeof define=="function"&&define.amd?define([],i):typeof exports!="undefined"?i():(i(),r.FileSaver={})})(this,function(){"use strict";function r(o,e){return typeof e=="undefined"?e={autoBom:!1}:typeof e!="object"&&(e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function i(o,e,h){var a=new XMLHttpRequest;a.open("GET",o),a.responseType="blob",a.onload=function(){f(a.response,e,h)},a.onerror=function(){},a.send()}function w(o){var e=new XMLHttpRequest;e.open("HEAD",o,!1);try{e.send()}catch(h){}return 200<=e.status&&299>=e.status}function m(o){try{o.dispatchEvent(new MouseEvent("click"))}catch(h){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(e)}}var t=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,n=t.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),f=t.saveAs||(typeof window!="object"||window!==t?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(o,e,h){var a=t.URL||t.webkitURL,b=document.createElement("a");e=e||o.name||"download",b.download=e,b.rel="noopener",typeof o=="string"?(b.href=o,b.origin===location.origin?m(b):w(b.href)?i(o,e,h):m(b,b.target="_blank")):(b.href=a.createObjectURL(o),setTimeout(function(){a.revokeObjectURL(b.href)},4e4),setTimeout(function(){m(b)},0))}:"msSaveOrOpenBlob"in navigator?function(o,e,h){if(e=e||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(r(o,h),e);else if(w(o))i(o,e,h);else{var a=document.createElement("a");a.href=o,a.target="_blank",setTimeout(function(){m(a)})}}:function(o,e,h,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),typeof o=="string")return i(o,e,h);var b=o.type==="application/octet-stream",u=/constructor/i.test(t.HTMLElement)||t.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||b&&u||n)&&typeof FileReader!="undefined"){var g=new FileReader;g.onloadend=function(){var C=g.result;C=d?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=C:location=C,a=null},g.readAsDataURL(o)}else{var L=t.URL||t.webkitURL,A=L.createObjectURL(o);a?a.location=A:location.href=A,a=null,setTimeout(function(){L.revokeObjectURL(A)},4e4)}});t.saveAs=f.saveAs=f,typeof module!="undefined"&&(module.exports=f)});var allowed_refresh_slots=["/22181265/ConvertCase_728x90_ATF","/22181265/ConvertCase_300x250_Belowtxtbox_1","/22181265/ConvertCase_300x250_Belowtxtbox_2"];function windowPopup(r,i,w){var m=screen.width/2-i/2,t=screen.height/2-w/2;window.open(r,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width="+i+",height="+w+",top="+t+",left="+m)}function ga_event(r,i){if(typeof gtag!="undefined")if(i==="view_search_results")gtag("event",i,{search_term:r});else{value=0;var w=document.getElementById("word_count");w!=null&&(value=parseInt(w.innerHTML)),gtag("event",i,{event_category:r,value})}}function calc_counts(r){var i=r.value;r.value===void 0&&(i=r.innerText),document.getElementById("char_count").innerHTML=i.length;var w=0,m=i.trim().replace(/\s+/gi," ");m.length>0&&(w=m.split(" ").length),document.getElementById("word_count").innerHTML=w;var t=0;i.length>0&&(t=i.split(/\r*\n/).length),document.getElementById("line_count").innerHTML=t;var n=0;i.length>0&&(n=i.trim().split(/[.?!]\s/g).length),document.getElementById("sent_count").innerHTML=n}var timer;function display_message(r,i){clearTimeout(timer);var w=document.querySelector(".messages");w.innerHTML='<div class="message '+i+'">'+r+"</div>",timer=setTimeout(function(){w.innerHTML=""},3e3)}var last_refresh=Date.now(),viewed_slots=[];function refresh_dfp(){last_refresh+5e3<Date.now()&&((window.aaw=window.aaw||{cmd:[]}).cmd.push(function(){viewed_slots.length>0&&(window.aaw.refreshAdunits(viewed_slots),viewed_slots=[])}),last_refresh=Date.now())}(window.googletag=window.googletag||{cmd:[]}).cmd.push(function(){googletag.pubads().addEventListener("impressionViewable",function(r){var i=r.slot.getAdUnitPath();i=i.replace("22181265,153247860","22181265"),allowed_refresh_slots.includes(i)&&viewed_slots.push(i)})});function document_state(){var r;return typeof document.hidden!="undefined"?r="visibilityState":typeof document.mozHidden!="undefined"?r="mozVisibilityState":typeof document.msHidden!="undefined"?r="msVisibilityState":typeof document.webkitHidden!="undefined"&&(r="webkitVisibilityState"),document[r]}setInterval(function(){document_state()==="visible"&&last_refresh+3e4<Date.now()&&refresh_dfp()},1e3);var content,output;document.addEventListener("DOMContentLoaded",function(){if(content=document.getElementById("content"),output=document.getElementById("output"),document.getElementById("char_count")!=null){var r=output;content!=null&&(r=content,content.addEventListener("focus",function(){calc_counts(r)}),content.addEventListener("blur",function(){calc_counts(r)}),content.addEventListener("input",function(){calc_counts(r)}),content.addEventListener("propertychange",function(){calc_counts(r)}),calc_counts(r)),output!=null&&(output.addEventListener("focus",function(){calc_counts(r)}),output.addEventListener("blur",function(){calc_counts(r)}),output.addEventListener("input",function(){calc_counts(r)}),output.addEventListener("propertychange",function(){calc_counts(r)}),calc_counts(r))}if(document.getElementById("copy")){var i=new ClipboardJS("#copy",{text:function(u){return document.querySelectorAll(u.getAttribute("data-clipboard-target"))[0].innerText}});i.on("success",function(u){display_message(copied,"success"),ga_event("Copied","Copied"),refresh_dfp(),u.clearSelection()}),i.on("error",function(u){u.text.length===0?display_message(no_text,"error"):(display_message(manual_copy,"info"),ga_event("Copied","Manual"),refresh_dfp())});var w=new ClipboardJS(".copy",{text:function(u){return u.parentNode.innerText}});w.on("success",function(u){display_message(copied,"success"),ga_event("Copied","Copied"),refresh_dfp(),u.clearSelection()}),w.on("error",function(u){u.text.length===0?display_message(no_text,"error"):(display_message(manual_copy,"info"),ga_event("Copied","Manual"),refresh_dfp())})}if(document.getElementById("download"))try{var m=!!new Blob,t=document.getElementById("download");t&&(t.style.display="inline-block",t.addEventListener("click",function(u){if(t.getAttribute("data-download-type")==="image"){var d=document.getElementById(t.getAttribute("data-download-target").slice(1)),g=dataURItoBlob(d.src);saveAs(g,d.getAttribute("data-filename")),display_message(downloaded_image,"success"),ga_event("Download","Download"),refresh_dfp()}else if(t.getAttribute("data-download-type")==="application/json"){var L=document.getElementById(t.getAttribute("data-download-target").slice(1)).value.replace(/\n/g,`\r
`);if(L.length===0)display_message(no_text,"error");else{var g=new Blob([L],{type:"application/json;charset=utf-8"}),A=file_name.replace(".txt",".json");saveAs(g,A),display_message(downloaded_json,"success"),ga_event("Download","Download"),refresh_dfp()}}else{if(t.getAttribute("data-download-type")==="innerText")var L=document.getElementById(t.getAttribute("data-download-target").slice(1)).innerText.replace(/\n/g,`\r
`);else var L=document.getElementById(t.getAttribute("data-download-target").slice(1)).value.replace(/\n/g,`\r
`);if(L.length===0)display_message(no_text,"error");else{var g=new Blob([L],{type:"text/plain;charset=utf-8"});saveAs(g,file_name),display_message(downloaded,"success"),ga_event("Download","Download"),refresh_dfp()}}return!1}))}catch(u){}var n=document.querySelectorAll(".share");if(n!=null)for(var f=0;f<n.length;f++)n[f].addEventListener("click",function(u){return u.preventDefault(),windowPopup(this.href,520,320),!1});function o(){var u=document.querySelectorAll(".search input")[0],d=document.querySelectorAll(".tabs > li:not(.more) > ul > li > a"),g=document.querySelectorAll(".search .results")[0],L=null;function A(C){C.length>3&&ga_event(C,"view_search_results")}u.addEventListener("keyup",function(C){if(C.keyCode===13){var x=g.querySelectorAll("a")[0];x&&(window.location=x.getAttribute("href"))}var T=u.value.toLowerCase();clearTimeout(L),L=setTimeout(function(){A(T)},500);for(var _=g.querySelectorAll("li:not(.no-results)"),M=0;M<_.length;M++)_[M].parentNode.removeChild(_[M]);g.querySelectorAll(".no-results")[0].classList.remove("show"),T.length>0&&($i=0,d.forEach(function(B){if(!($i>10)){var s=B.innerHTML;s=s.replace("<br>"," "),s.toLowerCase().includes(T)&&(g.innerHTML+='<li><a href="'+B.getAttribute("href")+'">'+s.replace(new RegExp(T,"gi"),function(l){return"<strong>"+l+"</strong>"})+"</a></li>",$i++)}})),g.appendChild(g.querySelectorAll(".no-results")[0]),g.querySelectorAll("li:not(.no-results").length===0&&g.querySelectorAll(".no-results")[0].classList.add("show")}),u.addEventListener("blur",function(C){setTimeout(function(){u.value="";for(var x=g.querySelectorAll("li:not(.no-results)"),T=0;T<x.length;T++)x[T].parentNode.removeChild(x[T]);g.querySelectorAll(".no-results")[0].classList.remove("show")},500)})}o();var e=document.getElementById("menu");e.classList.add("js");function h(){e.classList.remove("has-overflow");for(var u=e.children,d=0;d<u.length;d++)u[d].classList.remove("overflowed"),u[d].classList.contains("more")&&u[d].parentNode.removeChild(u[d]);var g=document.querySelector(".container").clientWidth,L=e.scrollWidth,A=g-65-120,C=!1,x="";if(L>g){for(var u=e.children,d=0;d<u.length;d++)if(!u[d].classList.contains("search")){var T=u[d].clientWidth;!C&&A-T>=0?A-=T:(C=!0,u[d].classList.add("overflowed"),x+="<li>"+u[d].innerHTML.replace("<br>"," ").replace("&nbsp;"," ")+"</li>")}}if(C){e.innerHTML+='<li class="more"><span><em></em></span><ul>'+x+"</ul></li>",o();for(var _=document.querySelectorAll("#menu .more span, #menu .more a"),d=0;d<_.length;d++)_[d].parentNode.querySelector("ul")&&_[d].addEventListener("click",function(B){B.preventDefault(),this.parentNode.classList.toggle("open");for(var s=document.querySelectorAll("#menu .more .open"),l=0;l<s.length;l++)s[l]!=this.parentNode&&s[l].classList.remove("open");return!1});e.classList.add("has-overflow")}}h();var a=window.innerWidth;if(window.onresize=function(u){window.innerWidth!=a&&h()},localStorage.getItem("theme")==="dark"?document.body.classList.add("dark"):localStorage.getItem("theme")==="light"&&document.body.classList.add("light"),document.getElementById("toggle-theme").addEventListener("click",function(u){u.preventDefault();var d="auto";return document.body.classList.contains("dark")?(document.body.classList.remove("dark"),document.body.classList.add("light"),d="light"):document.body.classList.contains("light")?(document.body.classList.remove("light"),document.body.classList.remove("dark")):(document.body.classList.add("dark"),d="dark"),localStorage.setItem("theme",d),ga_event("Theme",d),!1}),window.screen.height>=900){var b=document.querySelector('[data-aa-adunit="/22181265/ConvertCase_Desktop_StickyFooter"]');b&&(b.dataset.aaad="true"),(window.aaw=window.aaw||{cmd:[]}).cmd.push(function(){window.aaw.processAdsOnPage(),allowed_refresh_slots.push("/22181265/ConvertCase_Desktop_StickyFooter")})}});"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");function dataURItoBlob(r){for(var i=atob(r.split(",")[1]),w=r.split(",")[0].split(":")[1].split(";")[0],m=new ArrayBuffer(i.length),t=new Uint8Array(m),n=0;n<i.length;n++)t[n]=i.charCodeAt(n);var f=new Blob([m],{type:w});return f}function random_pick(){var r=content.value;r==""&&(r=content.placeholder);var i=r.split(`
`);return i[Math.floor(Math.random()*i.length)]}function randomise(){var r=1,i=setInterval(function(){document.getElementById("output").innerHTML=random_pick(),r++,r>3&&clearTimeout(i)},100)}document.addEventListener("DOMContentLoaded",function(){randomise(),document.getElementById("randomise").addEventListener("click",function(){randomise(),refresh_dfp()}),content.addEventListener("blur",function(){randomise(),refresh_dfp()})});
