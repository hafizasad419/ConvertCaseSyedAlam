(function(r,o){typeof exports=="object"&&typeof module=="object"?module.exports=o():typeof define=="function"&&define.amd?define([],o):typeof exports=="object"?exports.ClipboardJS=o():r.ClipboardJS=o()})(this,function(){return o={686:function(l,t,n){"use strict";n.d(t,{default:function(){return B}});var t=n(279),f=n.n(t),t=n(370),a=n.n(t),t=n(817),m=n.n(t);function i(s){try{return document.execCommand(s)}catch(d){return}}var w=function(s){return s=m()(s),i("cut"),s};function u(S,d){var v,b,S=(v=S,b=document.documentElement.getAttribute("dir")==="rtl",(S=document.createElement("textarea")).style.fontSize="12pt",S.style.border="0",S.style.padding="0",S.style.margin="0",S.style.position="absolute",S.style[b?"right":"left"]="-9999px",b=window.pageYOffset||document.documentElement.scrollTop,S.style.top="".concat(b,"px"),S.setAttribute("readonly",""),S.value=v,S);return d.container.appendChild(S),d=m()(S),i("copy"),S.remove(),d}var p=function(s){var d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body},v="";return typeof s=="string"?v=u(s,d):s instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(s==null?void 0:s.type)?v=u(s.value,d):(v=m()(s),i("copy")),v};function y(s){return(y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(s)}var E=function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},v=b.action,s=v===void 0?"copy":v,d=b.container,v=b.target,b=b.text;if(s!=="copy"&&s!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(v!==void 0){if(!v||y(v)!=="object"||v.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(s==="copy"&&v.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(s==="cut"&&(v.hasAttribute("readonly")||v.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return b?p(b,{container:d}):v?s==="cut"?w(v):p(v,{container:d}):void 0};function A(s){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(s)}function C(s,d){for(var v=0;v<d.length;v++){var b=d[v];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(s,b.key,b)}}function _(s,d){return(_=Object.setPrototypeOf||function(v,b){return v.__proto__=b,v})(s,d)}function T(s){var d=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(v){return!1}}();return function(){var v,b=x(s);return v=d?(v=x(this).constructor,Reflect.construct(b,arguments,v)):b.apply(this,arguments),b=this,!(v=v)||A(v)!=="object"&&typeof v!="function"?function(S){if(S!==void 0)return S;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(b):v}}function x(s){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(d){return d.__proto__||Object.getPrototypeOf(d)})(s)}function M(s,d){if(s="data-clipboard-".concat(s),d.hasAttribute(s))return d.getAttribute(s)}var B=function(){(function(h,L){if(typeof L!="function"&&L!==null)throw new TypeError("Super expression must either be null or a function");h.prototype=Object.create(L&&L.prototype,{constructor:{value:h,writable:!0,configurable:!0}}),L&&_(h,L)})(S,f());var s,d,v,b=T(S);function S(h,L){var k;return function(j){if(!(j instanceof S))throw new TypeError("Cannot call a class as a function")}(this),(k=b.call(this)).resolveOptions(L),k.listenClick(h),k}return s=S,v=[{key:"copy",value:function(h){var L=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body};return p(h,L)}},{key:"cut",value:function(h){return w(h)}},{key:"isSupported",value:function(){var h=0<arguments.length&&arguments[0]!==void 0?arguments[0]:["copy","cut"],h=typeof h=="string"?[h]:h,L=!!document.queryCommandSupported;return h.forEach(function(k){L=L&&!!document.queryCommandSupported(k)}),L}}],(d=[{key:"resolveOptions",value:function(){var h=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof h.action=="function"?h.action:this.defaultAction,this.target=typeof h.target=="function"?h.target:this.defaultTarget,this.text=typeof h.text=="function"?h.text:this.defaultText,this.container=A(h.container)==="object"?h.container:document.body}},{key:"listenClick",value:function(h){var L=this;this.listener=a()(h,"click",function(k){return L.onClick(k)})}},{key:"onClick",value:function(j){var L=j.delegateTarget||j.currentTarget,k=this.action(L)||"copy",j=E({action:k,container:this.container,target:this.target(L),text:this.text(L)});this.emit(j?"success":"error",{action:k,text:j,trigger:L,clearSelection:function(){L&&L.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(h){return M("action",h)}},{key:"defaultTarget",value:function(h){if(h=M("target",h),h)return document.querySelector(h)}},{key:"defaultText",value:function(h){return M("text",h)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&C(s.prototype,d),v&&C(s,v),S}()},828:function(l){var e;typeof Element=="undefined"||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),l.exports=function(n,f){for(;n&&n.nodeType!==9;){if(typeof n.matches=="function"&&n.matches(f))return n;n=n.parentNode}}},438:function(l,e,n){var f=n(828);function a(t,m,i,w,u){var p=function(y,E,A,C){return function(_){_.delegateTarget=f(_.target,E),_.delegateTarget&&C.call(y,_)}}.apply(this,arguments);return t.addEventListener(i,p,u),{destroy:function(){t.removeEventListener(i,p,u)}}}l.exports=function(t,m,i,w,u){return typeof t.addEventListener=="function"?a.apply(null,arguments):typeof i=="function"?a.bind(null,document).apply(null,arguments):(typeof t=="string"&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(p){return a(p,m,i,w,u)}))}},879:function(l,e){e.node=function(n){return n!==void 0&&n instanceof HTMLElement&&n.nodeType===1},e.nodeList=function(n){var f=Object.prototype.toString.call(n);return n!==void 0&&(f==="[object NodeList]"||f==="[object HTMLCollection]")&&"length"in n&&(n.length===0||e.node(n[0]))},e.string=function(n){return typeof n=="string"||n instanceof String},e.fn=function(n){return Object.prototype.toString.call(n)==="[object Function]"}},370:function(l,e,n){var f=n(879),a=n(438);l.exports=function(t,m,i){if(!t&&!m&&!i)throw new Error("Missing required arguments");if(!f.string(m))throw new TypeError("Second argument must be a String");if(!f.fn(i))throw new TypeError("Third argument must be a Function");if(f.node(t))return E=m,A=i,(y=t).addEventListener(E,A),{destroy:function(){y.removeEventListener(E,A)}};if(f.nodeList(t))return w=t,u=m,p=i,Array.prototype.forEach.call(w,function(C){C.addEventListener(u,p)}),{destroy:function(){Array.prototype.forEach.call(w,function(C){C.removeEventListener(u,p)})}};if(f.string(t))return t=t,m=m,i=i,a(document.body,t,m,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var w,u,p,y,E,A}},817:function(l){l.exports=function(e){var n,f=e.nodeName==="SELECT"?(e.focus(),e.value):e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"?((n=e.hasAttribute("readonly"))||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),e.value):(e.hasAttribute("contenteditable")&&e.focus(),f=window.getSelection(),(n=document.createRange()).selectNodeContents(e),f.removeAllRanges(),f.addRange(n),f.toString());return f}},279:function(l){function e(){}e.prototype={on:function(n,f,a){var t=this.e||(this.e={});return(t[n]||(t[n]=[])).push({fn:f,ctx:a}),this},once:function(n,f,a){var t=this;function m(){t.off(n,m),f.apply(a,arguments)}return m._=f,this.on(n,m,a)},emit:function(n){for(var f=[].slice.call(arguments,1),a=((this.e||(this.e={}))[n]||[]).slice(),t=0,m=a.length;t<m;t++)a[t].fn.apply(a[t].ctx,f);return this},off:function(n,f){var a=this.e||(this.e={}),t=a[n],m=[];if(t&&f)for(var i=0,w=t.length;i<w;i++)t[i].fn!==f&&t[i].fn._!==f&&m.push(t[i]);return m.length?a[n]=m:delete a[n],this}},l.exports=e,l.exports.TinyEmitter=e}},g={},r.n=function(l){var e=l&&l.__esModule?function(){return l.default}:function(){return l};return r.d(e,{a:e}),e},r.d=function(l,e){for(var n in e)r.o(e,n)&&!r.o(l,n)&&Object.defineProperty(l,n,{enumerable:!0,get:e[n]})},r.o=function(l,e){return Object.prototype.hasOwnProperty.call(l,e)},r(686).default;function r(l){if(g[l])return g[l].exports;var e=g[l]={exports:{}};return o[l](e,e.exports,r),e.exports}var o,g});(function(r,o){typeof define=="function"&&define.amd?define([],o):typeof exports!="undefined"?o():(o(),r.FileSaver={})})(this,function(){"use strict";function r(a,t){return typeof t=="undefined"?t={autoBom:!1}:typeof t!="object"&&(t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function o(a,t,m){var i=new XMLHttpRequest;i.open("GET",a),i.responseType="blob",i.onload=function(){f(i.response,t,m)},i.onerror=function(){},i.send()}function g(a){var t=new XMLHttpRequest;t.open("HEAD",a,!1);try{t.send()}catch(m){}return 200<=t.status&&299>=t.status}function l(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(m){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(t)}}var e=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,n=e.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),f=e.saveAs||(typeof window!="object"||window!==e?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(a,t,m){var i=e.URL||e.webkitURL,w=document.createElement("a");t=t||a.name||"download",w.download=t,w.rel="noopener",typeof a=="string"?(w.href=a,w.origin===location.origin?l(w):g(w.href)?o(a,t,m):l(w,w.target="_blank")):(w.href=i.createObjectURL(a),setTimeout(function(){i.revokeObjectURL(w.href)},4e4),setTimeout(function(){l(w)},0))}:"msSaveOrOpenBlob"in navigator?function(a,t,m){if(t=t||a.name||"download",typeof a!="string")navigator.msSaveOrOpenBlob(r(a,m),t);else if(g(a))o(a,t,m);else{var i=document.createElement("a");i.href=a,i.target="_blank",setTimeout(function(){l(i)})}}:function(a,t,m,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),typeof a=="string")return o(a,t,m);var w=a.type==="application/octet-stream",u=/constructor/i.test(e.HTMLElement)||e.safari,p=/CriOS\/[\d]+/.test(navigator.userAgent);if((p||w&&u||n)&&typeof FileReader!="undefined"){var y=new FileReader;y.onloadend=function(){var C=y.result;C=p?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=C:location=C,i=null},y.readAsDataURL(a)}else{var E=e.URL||e.webkitURL,A=E.createObjectURL(a);i?i.location=A:location.href=A,i=null,setTimeout(function(){E.revokeObjectURL(A)},4e4)}});e.saveAs=f.saveAs=f,typeof module!="undefined"&&(module.exports=f)});var allowed_refresh_slots=["/22181265/ConvertCase_728x90_ATF","/22181265/ConvertCase_300x250_Belowtxtbox_1","/22181265/ConvertCase_300x250_Belowtxtbox_2"],copy_symbol='<img src="/img/copy.svg" class="copy" alt="Copy to Clipboard">';function windowPopup(r,o,g){var l=screen.width/2-o/2,e=screen.height/2-g/2;window.open(r,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width="+o+",height="+g+",top="+e+",left="+l)}function ga_event(r,o){if(typeof gtag!="undefined")if(o==="view_search_results")gtag("event",o,{search_term:r});else{value=0;var g=document.getElementById("word_count");g!=null&&(value=parseInt(g.innerHTML)),gtag("event",o,{event_category:r,value})}}function calc_counts(r){var o=r.value;r.value===void 0&&(o=r.innerText),document.getElementById("char_count").innerHTML=o.length;var g=0,l=o.trim().replace(/\s+/gi," ");l.length>0&&(g=l.split(" ").length),document.getElementById("word_count").innerHTML=g;var e=0;o.length>0&&(e=o.split(/\r*\n/).length),document.getElementById("line_count").innerHTML=e;var n=0;o.length>0&&(n=o.trim().split(/[.?!]\s/g).length),document.getElementById("sent_count").innerHTML=n}var timer;function display_message(r,o){clearTimeout(timer);var g=document.querySelector(".messages");g.innerHTML='<div class="message '+o+'">'+r+"</div>",timer=setTimeout(function(){g.innerHTML=""},3e3)}var last_refresh=Date.now(),viewed_slots=[];function refresh_dfp(){last_refresh+5e3<Date.now()&&((window.aaw=window.aaw||{cmd:[]}).cmd.push(function(){viewed_slots.length>0&&(window.aaw.refreshAdunits(viewed_slots),viewed_slots=[])}),last_refresh=Date.now())}function replace_chars(r,o,g,l="string"){for(var e=[],n=0;n<r.length;n++){var f=r.charAt(n),a=f;if(g)var a=f.toLowerCase();o[a]?e.push(o[a]):e.push(f)}return l=="string"&&(e=e.join(""),e=e.replace(/\n/g,"<br>")),e}(window.googletag=window.googletag||{cmd:[]}).cmd.push(function(){googletag.pubads().addEventListener("impressionViewable",function(r){var o=r.slot.getAdUnitPath();o=o.replace("22181265,153247860","22181265"),allowed_refresh_slots.includes(o)&&viewed_slots.push(o)})});function document_state(){var r;return typeof document.hidden!="undefined"?r="visibilityState":typeof document.mozHidden!="undefined"?r="mozVisibilityState":typeof document.msHidden!="undefined"?r="msVisibilityState":typeof document.webkitHidden!="undefined"&&(r="webkitVisibilityState"),document[r]}setInterval(function(){document_state()==="visible"&&last_refresh+3e4<Date.now()&&refresh_dfp()},1e3);var content,output;document.addEventListener("DOMContentLoaded",function(){if(content=document.getElementById("content"),output=document.getElementById("output"),document.getElementById("char_count")!=null){var r=output;content!=null&&(r=content,content.addEventListener("focus",function(){calc_counts(r)}),content.addEventListener("blur",function(){calc_counts(r)}),content.addEventListener("input",function(){calc_counts(r)}),content.addEventListener("propertychange",function(){calc_counts(r)}),calc_counts(r)),output!=null&&(output.addEventListener("focus",function(){calc_counts(r)}),output.addEventListener("blur",function(){calc_counts(r)}),output.addEventListener("input",function(){calc_counts(r)}),output.addEventListener("propertychange",function(){calc_counts(r)}),calc_counts(r))}if(document.getElementById("copy")){var o=new ClipboardJS("#copy",{text:function(u){return document.querySelectorAll(u.getAttribute("data-clipboard-target"))[0].innerText}});o.on("success",function(u){display_message(copied,"success"),ga_event("Copied","Copied"),refresh_dfp(),u.clearSelection()}),o.on("error",function(u){u.text.length===0?display_message(no_text,"error"):(display_message(manual_copy,"info"),ga_event("Copied","Manual"),refresh_dfp())});var g=new ClipboardJS(".copy",{text:function(u){return u.parentNode.innerText}});g.on("success",function(u){display_message(copied,"success"),ga_event("Copied","Copied"),refresh_dfp(),u.clearSelection()}),g.on("error",function(u){u.text.length===0?display_message(no_text,"error"):(display_message(manual_copy,"info"),ga_event("Copied","Manual"),refresh_dfp())})}if(document.getElementById("download"))try{var l=!!new Blob,e=document.getElementById("download");e&&(e.style.display="inline-block",e.addEventListener("click",function(u){if(e.getAttribute("data-download-type")==="image"){var p=document.getElementById(e.getAttribute("data-download-target").slice(1)),y=dataURItoBlob(p.src);saveAs(y,p.getAttribute("data-filename")),display_message(downloaded_image,"success"),ga_event("Download","Download"),refresh_dfp()}else if(e.getAttribute("data-download-type")==="application/json"){var E=document.getElementById(e.getAttribute("data-download-target").slice(1)).value.replace(/\n/g,`\r
`);if(E.length===0)display_message(no_text,"error");else{var y=new Blob([E],{type:"application/json;charset=utf-8"}),A=file_name.replace(".txt",".json");saveAs(y,A),display_message(downloaded_json,"success"),ga_event("Download","Download"),refresh_dfp()}}else{if(e.getAttribute("data-download-type")==="innerText")var E=document.getElementById(e.getAttribute("data-download-target").slice(1)).innerText.replace(/\n/g,`\r
`);else var E=document.getElementById(e.getAttribute("data-download-target").slice(1)).value.replace(/\n/g,`\r
`);if(E.length===0)display_message(no_text,"error");else{var y=new Blob([E],{type:"text/plain;charset=utf-8"});saveAs(y,file_name),display_message(downloaded,"success"),ga_event("Download","Download"),refresh_dfp()}}return!1}))}catch(u){}var n=document.querySelectorAll(".share");if(n!=null)for(var f=0;f<n.length;f++)n[f].addEventListener("click",function(u){return u.preventDefault(),windowPopup(this.href,520,320),!1});function a(){var u=document.querySelectorAll(".search input")[0],p=document.querySelectorAll(".tabs > li:not(.more) > ul > li > a"),y=document.querySelectorAll(".search .results")[0],E=null;function A(C){C.length>3&&ga_event(C,"view_search_results")}u.addEventListener("keyup",function(C){if(C.keyCode===13){var _=y.querySelectorAll("a")[0];_&&(window.location=_.getAttribute("href"))}var T=u.value.toLowerCase();clearTimeout(E),E=setTimeout(function(){A(T)},500);for(var x=y.querySelectorAll("li:not(.no-results)"),M=0;M<x.length;M++)x[M].parentNode.removeChild(x[M]);y.querySelectorAll(".no-results")[0].classList.remove("show"),T.length>0&&($i=0,p.forEach(function(B){if(!($i>10)){var s=B.innerHTML;s=s.replace("<br>"," "),s.toLowerCase().includes(T)&&(y.innerHTML+='<li><a href="'+B.getAttribute("href")+'">'+s.replace(new RegExp(T,"gi"),function(d){return"<strong>"+d+"</strong>"})+"</a></li>",$i++)}})),y.appendChild(y.querySelectorAll(".no-results")[0]),y.querySelectorAll("li:not(.no-results").length===0&&y.querySelectorAll(".no-results")[0].classList.add("show")}),u.addEventListener("blur",function(C){setTimeout(function(){u.value="";for(var _=y.querySelectorAll("li:not(.no-results)"),T=0;T<_.length;T++)_[T].parentNode.removeChild(_[T]);y.querySelectorAll(".no-results")[0].classList.remove("show")},500)})}a();var t=document.getElementById("menu");t.classList.add("js");function m(){t.classList.remove("has-overflow");for(var u=t.children,p=0;p<u.length;p++)u[p].classList.remove("overflowed"),u[p].classList.contains("more")&&u[p].parentNode.removeChild(u[p]);var y=document.querySelector(".container").clientWidth,E=t.scrollWidth,A=y-65-120,C=!1,_="";if(E>y){for(var u=t.children,p=0;p<u.length;p++)if(!u[p].classList.contains("search")){var T=u[p].clientWidth;!C&&A-T>=0?A-=T:(C=!0,u[p].classList.add("overflowed"),_+="<li>"+u[p].innerHTML.replace("<br>"," ").replace("&nbsp;"," ")+"</li>")}}if(C){t.innerHTML+='<li class="more"><span><em></em></span><ul>'+_+"</ul></li>",a();for(var x=document.querySelectorAll("#menu .more span, #menu .more a"),p=0;p<x.length;p++)x[p].parentNode.querySelector("ul")&&x[p].addEventListener("click",function(B){B.preventDefault(),this.parentNode.classList.toggle("open");for(var s=document.querySelectorAll("#menu .more .open"),d=0;d<s.length;d++)s[d]!=this.parentNode&&s[d].classList.remove("open");return!1});t.classList.add("has-overflow")}}m();var i=window.innerWidth;if(window.onresize=function(u){window.innerWidth!=i&&m()},localStorage.getItem("theme")==="dark"?document.body.classList.add("dark"):localStorage.getItem("theme")==="light"&&document.body.classList.add("light"),document.getElementById("toggle-theme").addEventListener("click",function(u){u.preventDefault();var p="auto";return document.body.classList.contains("dark")?(document.body.classList.remove("dark"),document.body.classList.add("light"),p="light"):document.body.classList.contains("light")?(document.body.classList.remove("light"),document.body.classList.remove("dark")):(document.body.classList.add("dark"),p="dark"),localStorage.setItem("theme",p),ga_event("Theme",p),!1}),window.screen.height>=900){var w=document.querySelector('[data-aa-adunit="/22181265/ConvertCase_Desktop_StickyFooter"]');w&&(w.dataset.aaad="true"),(window.aaw=window.aaw||{cmd:[]}).cmd.push(function(){window.aaw.processAdsOnPage(),allowed_refresh_slots.push("/22181265/ConvertCase_Desktop_StickyFooter")})}});"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");function dataURItoBlob(r){for(var o=atob(r.split(",")[1]),g=r.split(",")[0].split(":")[1].split(";")[0],l=new ArrayBuffer(o.length),e=new Uint8Array(l),n=0;n<o.length;n++)e[n]=o.charCodeAt(n);var f=new Blob([l],{type:g});return f}var script_map={a:"\u{1D4B6}",b:"\u{1D4B7}",c:"\u{1D4B8}",d:"\u{1D4B9}",e:"\u212F",f:"\u{1D4BB}",g:"\u210A",h:"\u{1D4BD}",i:"\u{1D4BE}",j:"\u{1D4BF}",k:"\u{1D4C0}",l:"\u{1D4C1}",m:"\u{1D4C2}",n:"\u{1D4C3}",o:"\u2134",p:"\u{1D4C5}",q:"\u{1D4C6}",r:"\u{1D4C7}",s:"\u{1D4C8}",t:"\u{1D4C9}",u:"\u{1D4CA}",v:"\u{1D4CB}",w:"\u{1D4CC}",x:"\u{1D4CD}",y:"\u{1D4CE}",z:"\u{1D4CF}",A:"\u{1D49C}",B:"\u212C",C:"\u{1D49E}",D:"\u{1D49F}",E:"\u2130",F:"\u2131",G:"\u{1D4A2}",H:"\u210B",I:"\u2110",J:"\u{1D4A5}",K:"\u{1D4A6}",L:"\u2112",M:"\u2133",N:"\u{1D4A9}",O:"\u{1D4AA}",P:"\u{1D4AB}",Q:"\u{1D4AC}",R:"\u211B",S:"\u{1D4AE}",T:"\u{1D4AF}",U:"\u{1D4B0}",V:"\u{1D4B1}",W:"\u{1D4B2}",X:"\u{1D4B3}",Y:"\u{1D4B4}",Z:"\u{1D4B5}"},script_bold_map={a:"\u{1D4EA}",b:"\u{1D4EB}",c:"\u{1D4EC}",d:"\u{1D4ED}",e:"\u{1D4EE}",f:"\u{1D4EF}",g:"\u{1D4F0}",h:"\u{1D4F1}",i:"\u{1D4F2}",j:"\u{1D4F3}",k:"\u{1D4F4}",l:"\u{1D4F5}",m:"\u{1D4F6}",n:"\u{1D4F7}",o:"\u{1D4F8}",p:"\u{1D4F9}",q:"\u{1D4FA}",r:"\u{1D4FB}",s:"\u{1D4FC}",t:"\u{1D4FD}",u:"\u{1D4FE}",v:"\u{1D4FF}",w:"\u{1D500}",x:"\u{1D501}",y:"\u{1D502}",z:"\u{1D503}",A:"\u{1D4D0}",B:"\u{1D4D1}",C:"\u{1D4D2}",D:"\u{1D4D3}",E:"\u{1D4D4}",F:"\u{1D4D5}",G:"\u{1D4D6}",H:"\u{1D4D7}",I:"\u{1D4D8}",J:"\u{1D4D9}",K:"\u{1D4DA}",L:"\u{1D4DB}",M:"\u{1D4DC}",N:"\u{1D4DD}",O:"\u{1D4DE}",P:"\u{1D4DF}",Q:"\u{1D4E0}",R:"\u{1D4E1}",S:"\u{1D4E2}",T:"\u{1D4E3}",U:"\u{1D4E4}",V:"\u{1D4E5}",W:"\u{1D4E6}",X:"\u{1D4E7}",Y:"\u{1D4E8}",Z:"\u{1D4E9}",1:"\u{1D7CF}",2:"\u{1D7D0}",3:"\u{1D7D1}",4:"\u{1D7D2}",5:"\u{1D7D3}",6:"\u{1D7D4}",7:"\u{1D7D5}",8:"\u{1D7D6}",9:"\u{1D7D7}",0:"\u{1D7CE}","!":"\u2757","?":"\u2753"},fraktur_map={a:"\u{1D51E}",b:"\u{1D51F}",c:"\u{1D520}",d:"\u{1D521}",e:"\u{1D522}",f:"\u{1D523}",g:"\u{1D524}",h:"\u{1D525}",i:"\u{1D526}",j:"\u{1D527}",k:"\u{1D528}",l:"\u{1D529}",m:"\u{1D52A}",n:"\u{1D52B}",o:"\u{1D52C}",p:"\u{1D52D}",q:"\u{1D52E}",r:"\u{1D52F}",s:"\u{1D530}",t:"\u{1D531}",u:"\u{1D532}",v:"\u{1D533}",w:"\u{1D534}",x:"\u{1D535}",y:"\u{1D536}",z:"\u{1D537}",A:"\u{1D504}",B:"\u{1D505}",C:"\u212D",D:"\u{1D507}",E:"\u{1D508}",F:"\u{1D509}",G:"\u{1D50A}",H:"\u210C",I:"\u2111",J:"\u{1D50D}",K:"\u{1D50E}",L:"\u{1D50F}",M:"\u{1D510}",N:"\u{1D511}",O:"\u{1D512}",P:"\u{1D513}",Q:"\u{1D514}",R:"\u211C",S:"\u{1D516}",T:"\u{1D517}",U:"\u{1D518}",V:"\u{1D519}",W:"\u{1D51A}",X:"\u{1D51B}",Y:"\u{1D51C}",Z:"\u2128"},fraktur_bold_map={a:"\u{1D586}",b:"\u{1D587}",c:"\u{1D588}",d:"\u{1D589}",e:"\u{1D58A}",f:"\u{1D58B}",g:"\u{1D58C}",h:"\u{1D58D}",i:"\u{1D58E}",j:"\u{1D58F}",k:"\u{1D590}",l:"\u{1D591}",m:"\u{1D592}",n:"\u{1D593}",o:"\u{1D594}",p:"\u{1D595}",q:"\u{1D596}",r:"\u{1D597}",s:"\u{1D598}",t:"\u{1D599}",u:"\u{1D59A}",v:"\u{1D59B}",w:"\u{1D59C}",x:"\u{1D59D}",y:"\u{1D59E}",z:"\u{1D59F}",A:"\u{1D56C}",B:"\u{1D56D}",C:"\u{1D56E}",D:"\u{1D56F}",E:"\u{1D570}",F:"\u{1D571}",G:"\u{1D572}",H:"\u{1D573}",I:"\u{1D574}",J:"\u{1D575}",K:"\u{1D576}",L:"\u{1D577}",M:"\u{1D578}",N:"\u{1D579}",O:"\u{1D57A}",P:"\u{1D57B}",Q:"\u{1D57C}",R:"\u{1D57D}",S:"\u{1D57E}",T:"\u{1D57F}",U:"\u{1D580}",V:"\u{1D581}",W:"\u{1D582}",X:"\u{1D583}",Y:"\u{1D584}",Z:"\u{1D585}",1:"\u{1D7CF}",2:"\u{1D7D0}",3:"\u{1D7D1}",4:"\u{1D7D2}",5:"\u{1D7D3}",6:"\u{1D7D4}",7:"\u{1D7D5}",8:"\u{1D7D6}",9:"\u{1D7D7}",0:"\u{1D7CE}",1:"\u2757","?":"\u2753"},bubble_map={a:"\u24D0",b:"\u24D1",c:"\u24D2",d:"\u24D3",e:"\u24D4",f:"\u24D5",g:"\u24D6",h:"\u24D7",i:"\u24D8",j:"\u24D9",k:"\u24DA",l:"\u24DB",m:"\u24DC",n:"\u24DD",o:"\u24DE",p:"\u24DF",q:"\u24E0",r:"\u24E1",s:"\u24E2",t:"\u24E3",u:"\u24E4",v:"\u24E5",w:"\u24E6",x:"\u24E7",y:"\u24E8",z:"\u24E9",A:"\u24B6",B:"\u24B7",C:"\u24B8",D:"\u24B9",E:"\u24BA",F:"\u24BB",G:"\u24BC",H:"\u24BD",I:"\u24BE",J:"\u24BF",K:"\u24C0",L:"\u24C1",M:"\u24C2",N:"\u24C3",O:"\u24C4",P:"\u24C5",Q:"\u24C6",R:"\u24C7",S:"\u24C8",T:"\u24C9",U:"\u24CA",V:"\u24CB",W:"\u24CC",X:"\u24CD",Y:"\u24CE",Z:"\u24CF",1:"\u2460",2:"\u2461",3:"\u2462",4:"\u2463",5:"\u2464",6:"\u2465",7:"\u2466",8:"\u2467",9:"\u2468",0:"\u24EA"},bubble_filled_map={a:"\u{1F150}",b:"\u{1F151}",c:"\u{1F152}",d:"\u{1F153}",e:"\u{1F154}",f:"\u{1F155}",g:"\u{1F156}",h:"\u{1F157}",i:"\u{1F158}",j:"\u{1F159}",k:"\u{1F15A}",l:"\u{1F15B}",m:"\u{1F15C}",n:"\u{1F15D}",o:"\u{1F15E}",p:"\u{1F15F}",q:"\u{1F160}",r:"\u{1F161}",s:"\u{1F162}",t:"\u{1F163}",u:"\u{1F164}",v:"\u{1F165}",w:"\u{1F166}",x:"\u{1F167}",y:"\u{1F168}",z:"\u{1F169}",1:"\u278A",2:"\u278B",3:"\u278C",4:"\u278D",5:"\u278E",6:"\u278F",7:"\u2790",8:"\u2791",9:"\u2792",0:"\u24FF"},squared_map={a:"\u{1F130}",b:"\u{1F131}",c:"\u{1F132}",d:"\u{1F133}",e:"\u{1F134}",f:"\u{1F135}",g:"\u{1F136}",h:"\u{1F137}",i:"\u{1F138}",j:"\u{1F139}",k:"\u{1F13A}",l:"\u{1F13B}",m:"\u{1F13C}",n:"\u{1F13D}",o:"\u{1F13E}",p:"\u{1F13F}",q:"\u{1F140}",r:"\u{1F141}",s:"\u{1F142}",t:"\u{1F143}",u:"\u{1F144}",v:"\u{1F145}",w:"\u{1F146}",x:"\u{1F147}",y:"\u{1F148}",z:"\u{1F149}",A:"\u{1F130}",B:"\u{1F131}",C:"\u{1F132}",D:"\u{1F133}",E:"\u{1F134}",F:"\u{1F135}",G:"\u{1F136}",H:"\u{1F137}",I:"\u{1F138}",J:"\u{1F139}",K:"\u{1F13A}",L:"\u{1F13B}",M:"\u{1F13C}",N:"\u{1F13D}",O:"\u{1F13E}",P:"\u{1F13F}",Q:"\u{1F140}",R:"\u{1F141}",S:"\u{1F142}",T:"\u{1F143}",U:"\u{1F144}",V:"\u{1F145}",W:"\u{1F146}",X:"\u{1F147}",Y:"\u{1F148}",Z:"\u{1F149}",".":"\u22A1"},squared_inverted_map={a:"\u{1F170}",b:"\u{1F171}",c:"\u{1F172}",d:"\u{1F173}",e:"\u{1F174}",f:"\u{1F175}",g:"\u{1F176}",h:"\u{1F177}",i:"\u{1F178}",j:"\u{1F179}",k:"\u{1F17A}",l:"\u{1F17B}",m:"\u{1F17C}",n:"\u{1F17D}",o:"\u{1F17E}",p:"\u{1F17F}",q:"\u{1F180}",r:"\u{1F181}",s:"\u{1F182}",t:"\u{1F183}",u:"\u{1F184}",v:"\u{1F185}",w:"\u{1F186}",x:"\u{1F187}",y:"\u{1F188}",z:"\u{1F189}",A:"\u{1F170}",B:"\u{1F171}",C:"\u{1F172}",D:"\u{1F173}",E:"\u{1F174}",F:"\u{1F175}",G:"\u{1F176}",H:"\u{1F177}",I:"\u{1F178}",J:"\u{1F179}",K:"\u{1F17A}",L:"\u{1F17B}",M:"\u{1F17C}",N:"\u{1F17D}",O:"\u{1F17E}",P:"\u{1F17F}",Q:"\u{1F180}",R:"\u{1F181}",S:"\u{1F182}",T:"\u{1F183}",U:"\u{1F184}",V:"\u{1F185}",W:"\u{1F186}",X:"\u{1F187}",Y:"\u{1F188}",Z:"\u{1F189}"},smallcaps_map={a:"\u1D00",b:"\u0299",c:"\u1D04",d:"\u1D05",e:"\u1D07",f:"\uA730",g:"\u0262",h:"\u029C",i:"\u026A",j:"\u1D0A",k:"\u1D0B",l:"\u029F",m:"\u1D0D",n:"\u0274",o:"\u1D0F",p:"\u1D18",r:"\u0280",s:"\uA731",t:"\u1D1B",u:"\u1D1C",v:"\u1D20",w:"\u1D21",y:"\u028F",z:"\u1D22"},widetext_map={" ":"\u2003",0:"\uFF10",1:"\uFF11",2:"\uFF12",3:"\uFF13",4:"\uFF14",5:"\uFF15",6:"\uFF16",7:"\uFF17",8:"\uFF18",9:"\uFF19",a:"\uFF41",b:"\uFF42",c:"\uFF43",d:"\uFF44",e:"\uFF45",f:"\uFF46",g:"\uFF47",h:"\uFF48",i:"\uFF49",j:"\uFF4A",k:"\uFF4B",l:"\uFF4C",m:"\uFF4D",n:"\uFF4E",o:"\uFF4F",p:"\uFF50",q:"\uFF51",r:"\uFF52",s:"\uFF53",t:"\uFF54",u:"\uFF55",v:"\uFF56",w:"\uFF57",x:"\uFF58",y:"\uFF59",z:"\uFF5A",A:"\uFF21",B:"\uFF22",C:"\uFF23",D:"\uFF24",E:"\uFF25",F:"\uFF26",G:"\uFF27",H:"\uFF28",I:"\uFF29",J:"\uFF2A",K:"\uFF2B",L:"\uFF2C",M:"\uFF2D",N:"\uFF2E",O:"\uFF2F",P:"\uFF30",Q:"\uFF31",R:"\uFF32",S:"\uFF33",T:"\uFF34",U:"\uFF35",V:"\uFF36",W:"\uFF37",X:"\uFF38",Y:"\uFF39",Z:"\uFF3A","!":"\uFF01",'"':"\u309B","#":"\uFF03",$:"\uFF04","%":"\uFF05","&":"\uFF06","(":"\uFF08",")":"\uFF09","*":"\uFF0A","+":"\uFF0B",",":"\u3001","-":"\u30FC",".":"\u3002","/":"\uFF0F",":":"\uFF1A",";":"\uFF1B","<":"\u3008","=":"\uFF1D",">":"\u3009","?":"\uFF1F","@":"\uFF20","[":"\uFF3B","'":"'","]":"\uFF3D","^":"\uFF3E",_:"\uFF3F","`":"\u2018","{":"\uFF5B","|":"\uFF5C","}":"\uFF5D","~":"\uFF5E"},mono_map={a:"\u{1D68A}",b:"\u{1D68B}",c:"\u{1D68C}",d:"\u{1D68D}",e:"\u{1D68E}",f:"\u{1D68F}",g:"\u{1D690}",h:"\u{1D691}",i:"\u{1D692}",j:"\u{1D693}",k:"\u{1D694}",l:"\u{1D695}",m:"\u{1D696}",n:"\u{1D697}",o:"\u{1D698}",p:"\u{1D699}",q:"\u{1D69A}",r:"\u{1D69B}",s:"\u{1D69C}",t:"\u{1D69D}",u:"\u{1D69E}",v:"\u{1D69F}",w:"\u{1D6A0}",x:"\u{1D6A1}",y:"\u{1D6A2}",z:"\u{1D6A3}",A:"\u{1D670}",B:"\u{1D671}",C:"\u{1D672}",D:"\u{1D673}",E:"\u{1D674}",F:"\u{1D675}",G:"\u{1D676}",H:"\u{1D677}",I:"\u{1D678}",J:"\u{1D679}",K:"\u{1D67A}",L:"\u{1D67B}",M:"\u{1D67C}",N:"\u{1D67D}",O:"\u{1D67E}",P:"\u{1D67F}",Q:"\u{1D680}",R:"\u{1D681}",S:"\u{1D682}",T:"\u{1D683}",U:"\u{1D684}",V:"\u{1D685}",W:"\u{1D686}",X:"\u{1D687}",Y:"\u{1D688}",Z:"\u{1D689}",1:"\u{1D7F7}",2:"\u{1D7F8}",3:"\u{1D7F9}",4:"\u{1D7FA}",5:"\u{1D7FB}",6:"\u{1D7FC}",7:"\u{1D7FD}",8:"\u{1D7FE}",9:"\u{1D7FF}",0:"\u{1D7F6}","!":"\uFF01","?":"\uFF1F",".":"\uFF0E"},sans_map={a:"\u{1D5BA}",b:"\u{1D5BB}",c:"\u{1D5BC}",d:"\u{1D5BD}",e:"\u{1D5BE}",f:"\u{1D5BF}",g:"\u{1D5C0}",h:"\u{1D5C1}",i:"\u{1D5C2}",j:"\u{1D5C3}",k:"\u{1D5C4}",l:"\u{1D5C5}",m:"\u{1D5C6}",n:"\u{1D5C7}",o:"\u{1D5C8}",p:"\u{1D5C9}",q:"\u{1D5CA}",r:"\u{1D5CB}",s:"\u{1D5CC}",t:"\u{1D5CD}",u:"\u{1D5CE}",v:"\u{1D5CF}",w:"\u{1D5D0}",x:"\u{1D5D1}",y:"\u{1D5D2}",z:"\u{1D5D3}",A:"\u{1D5A0}",B:"\u{1D5A1}",C:"\u{1D5A2}",D:"\u{1D5A3}",E:"\u{1D5A4}",F:"\u{1D5A5}",G:"\u{1D5A6}",H:"\u{1D5A7}",I:"\u{1D5A8}",J:"\u{1D5A9}",K:"\u{1D5AA}",L:"\u{1D5AB}",M:"\u{1D5AC}",N:"\u{1D5AD}",O:"\u{1D5AE}",P:"\u{1D5AF}",Q:"\u{1D5B0}",R:"\u{1D5B1}",S:"\u{1D5B2}",T:"\u{1D5B3}",U:"\u{1D5B4}",V:"\u{1D5B5}",W:"\u{1D5B6}",X:"\u{1D5B7}",Y:"\u{1D5B8}",Z:"\u{1D5B9}",0:"\u{1D7E2}",1:"\u{1D7E3}",2:"\u{1D7E4}",3:"\u{1D7E5}",4:"\u{1D7E6}",5:"\u{1D7E7}",6:"\u{1D7E8}",7:"\u{1D7E9}",8:"\u{1D7EA}",9:"\u{1D7EB}",0:"\u{1D7E2}"},sans_italic_map={a:"\u{1D622}",b:"\u{1D623}",c:"\u{1D624}",d:"\u{1D625}",e:"\u{1D626}",f:"\u{1D627}",g:"\u{1D628}",h:"\u{1D629}",i:"\u{1D62A}",j:"\u{1D62B}",k:"\u{1D62C}",l:"\u{1D62D}",m:"\u{1D62E}",n:"\u{1D62F}",o:"\u{1D630}",p:"\u{1D631}",q:"\u{1D632}",r:"\u{1D633}",s:"\u{1D634}",t:"\u{1D635}",u:"\u{1D636}",v:"\u{1D637}",w:"\u{1D638}",x:"\u{1D639}",y:"\u{1D63A}",z:"\u{1D63B}",A:"\u{1D608}",B:"\u{1D609}",C:"\u{1D60A}",D:"\u{1D60B}",E:"\u{1D60C}",F:"\u{1D60D}",G:"\u{1D60E}",H:"\u{1D60F}",I:"\u{1D610}",J:"\u{1D611}",K:"\u{1D612}",L:"\u{1D613}",M:"\u{1D614}",N:"\u{1D615}",O:"\u{1D616}",P:"\u{1D617}",Q:"\u{1D618}",R:"\u{1D619}",S:"\u{1D61A}",T:"\u{1D61B}",U:"\u{1D61C}",V:"\u{1D61D}",W:"\u{1D61E}",X:"\u{1D61F}",Y:"\u{1D620}",Z:"\u{1D621}"},sans_bold_map={a:"\u{1D5EE}",b:"\u{1D5EF}",c:"\u{1D5F0}",d:"\u{1D5F1}",e:"\u{1D5F2}",f:"\u{1D5F3}",g:"\u{1D5F4}",h:"\u{1D5F5}",i:"\u{1D5F6}",j:"\u{1D5F7}",k:"\u{1D5F8}",l:"\u{1D5F9}",m:"\u{1D5FA}",n:"\u{1D5FB}",o:"\u{1D5FC}",p:"\u{1D5FD}",q:"\u{1D5FE}",r:"\u{1D5FF}",s:"\u{1D600}",t:"\u{1D601}",u:"\u{1D602}",v:"\u{1D603}",w:"\u{1D604}",x:"\u{1D605}",y:"\u{1D606}",z:"\u{1D607}",A:"\u{1D5D4}",B:"\u{1D5D5}",C:"\u{1D5D6}",D:"\u{1D5D7}",E:"\u{1D5D8}",F:"\u{1D5D9}",G:"\u{1D5DA}",H:"\u{1D5DB}",I:"\u{1D5DC}",J:"\u{1D5DD}",K:"\u{1D5DE}",L:"\u{1D5DF}",M:"\u{1D5E0}",N:"\u{1D5E1}",O:"\u{1D5E2}",P:"\u{1D5E3}",Q:"\u{1D5E4}",R:"\u{1D5E5}",S:"\u{1D5E6}",T:"\u{1D5E7}",U:"\u{1D5E8}",V:"\u{1D5E9}",W:"\u{1D5EA}",X:"\u{1D5EB}",Y:"\u{1D5EC}",Z:"\u{1D5ED}",0:"\u{1D7EC}",1:"\u{1D7ED}",2:"\u{1D7EE}",3:"\u{1D7EF}",4:"\u{1D7F0}",5:"\u{1D7F1}",6:"\u{1D7F2}",7:"\u{1D7F3}",8:"\u{1D7F4}",9:"\u{1D7F5}",0:"\u{1D7EC}"},sans_bold_italic_map={a:"\u{1D656}",b:"\u{1D657}",c:"\u{1D658}",d:"\u{1D659}",e:"\u{1D65A}",f:"\u{1D65B}",g:"\u{1D65C}",h:"\u{1D65D}",i:"\u{1D65E}",j:"\u{1D65F}",k:"\u{1D660}",l:"\u{1D661}",m:"\u{1D662}",n:"\u{1D663}",o:"\u{1D664}",p:"\u{1D665}",q:"\u{1D666}",r:"\u{1D667}",s:"\u{1D668}",t:"\u{1D669}",u:"\u{1D66A}",v:"\u{1D66B}",w:"\u{1D66C}",x:"\u{1D66D}",y:"\u{1D66E}",z:"\u{1D66F}",A:"\u{1D63C}",B:"\u{1D63D}",C:"\u{1D63E}",D:"\u{1D63F}",E:"\u{1D640}",F:"\u{1D641}",G:"\u{1D642}",H:"\u{1D643}",I:"\u{1D644}",J:"\u{1D645}",K:"\u{1D646}",L:"\u{1D647}",M:"\u{1D648}",N:"\u{1D649}",O:"\u{1D64A}",P:"\u{1D64B}",Q:"\u{1D64C}",R:"\u{1D64D}",S:"\u{1D64E}",T:"\u{1D64F}",U:"\u{1D650}",V:"\u{1D651}",W:"\u{1D652}",X:"\u{1D653}",Y:"\u{1D654}",Z:"\u{1D655}"};function convert(r){var o=[];return o.Script=replace_chars(r,script_map,!1),o["Script (Bold)"]=replace_chars(r,script_bold_map,!1),o.Fraktur=replace_chars(r,fraktur_map,!1),o["Fraktur (Bold)"]=replace_chars(r,fraktur_bold_map,!1),o.Circled=replace_chars(r,bubble_map,!1),o["Circled (Inverted)"]=replace_chars(r,bubble_filled_map,!0),o.Squared=replace_chars(r,squared_map,!1),o["Squared (Inverted)"]=replace_chars(r,squared_inverted_map,!1),o.Capitalized=replace_chars(r,smallcaps_map,!1),o["Full Width"]=replace_chars(r,widetext_map,!1),o.Monospace=replace_chars(r,mono_map,!1),o["Sans-Serif"]=replace_chars(r,sans_map,!1),o["Sans-Serif (Italic)"]=replace_chars(r,sans_italic_map,!1),o["Sans-Serif (Bold)"]=replace_chars(r,sans_bold_map,!1),o["Sans-Serif (Bold Italic)"]=replace_chars(r,sans_bold_italic_map,!1),o}function one_way(){var r=content.value;r==""&&(r=content.placeholder);var o="",g=convert(r);if(typeof g=="object")for(var l in g)isNaN(l)&&(o+="<h3>"+l+"</h3>"),o+="<p>"+g[l]+copy_symbol+"</p>";else o="<p>"+g+"</p>";document.getElementById("output").innerHTML=o}document.addEventListener("DOMContentLoaded",function(){one_way(),content.addEventListener("input",function(r){one_way(),refresh_dfp()}),content.addEventListener("propertychange",function(r){one_way(),refresh_dfp()})});
