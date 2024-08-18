(function(t,o){typeof exports=="object"&&typeof module=="object"?module.exports=o():typeof define=="function"&&define.amd?define([],o):typeof exports=="object"?exports.ClipboardJS=o():t.ClipboardJS=o()})(this,function(){return o={686:function(i,n,r){"use strict";r.d(n,{default:function(){return j}});var n=r(279),f=r.n(n),n=r(370),a=r.n(n),n=r(817),m=r.n(n);function u(l){try{return document.execCommand(l)}catch(d){return}}var b=function(l){return l=m()(l),u("cut"),l};function s(S,d){var h,w,S=(h=S,w=document.documentElement.getAttribute("dir")==="rtl",(S=document.createElement("textarea")).style.fontSize="12pt",S.style.border="0",S.style.padding="0",S.style.margin="0",S.style.position="absolute",S.style[w?"right":"left"]="-9999px",w=window.pageYOffset||document.documentElement.scrollTop,S.style.top="".concat(w,"px"),S.setAttribute("readonly",""),S.value=h,S);return d.container.appendChild(S),d=m()(S),u("copy"),S.remove(),d}var p=function(l){var d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body},h="";return typeof l=="string"?h=s(l,d):l instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(l==null?void 0:l.type)?h=s(l.value,d):(h=m()(l),u("copy")),h};function y(l){return(y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(l)}var L=function(){var w=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},h=w.action,l=h===void 0?"copy":h,d=w.container,h=w.target,w=w.text;if(l!=="copy"&&l!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(h!==void 0){if(!h||y(h)!=="object"||h.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(l==="copy"&&h.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(l==="cut"&&(h.hasAttribute("readonly")||h.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return w?p(w,{container:d}):h?l==="cut"?b(h):p(h,{container:d}):void 0};function A(l){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(l)}function C(l,d){for(var h=0;h<d.length;h++){var w=d[h];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(l,w.key,w)}}function T(l,d){return(T=Object.setPrototypeOf||function(h,w){return h.__proto__=w,h})(l,d)}function x(l){var d=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(h){return!1}}();return function(){var h,w=_(l);return h=d?(h=_(this).constructor,Reflect.construct(w,arguments,h)):w.apply(this,arguments),w=this,!(h=h)||A(h)!=="object"&&typeof h!="function"?function(S){if(S!==void 0)return S;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(w):h}}function _(l){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(d){return d.__proto__||Object.getPrototypeOf(d)})(l)}function M(l,d){if(l="data-clipboard-".concat(l),d.hasAttribute(l))return d.getAttribute(l)}var j=function(){(function(g,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(E&&E.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),E&&T(g,E)})(S,f());var l,d,h,w=x(S);function S(g,E){var k;return function(B){if(!(B instanceof S))throw new TypeError("Cannot call a class as a function")}(this),(k=w.call(this)).resolveOptions(E),k.listenClick(g),k}return l=S,h=[{key:"copy",value:function(g){var E=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body};return p(g,E)}},{key:"cut",value:function(g){return b(g)}},{key:"isSupported",value:function(){var g=0<arguments.length&&arguments[0]!==void 0?arguments[0]:["copy","cut"],g=typeof g=="string"?[g]:g,E=!!document.queryCommandSupported;return g.forEach(function(k){E=E&&!!document.queryCommandSupported(k)}),E}}],(d=[{key:"resolveOptions",value:function(){var g=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof g.action=="function"?g.action:this.defaultAction,this.target=typeof g.target=="function"?g.target:this.defaultTarget,this.text=typeof g.text=="function"?g.text:this.defaultText,this.container=A(g.container)==="object"?g.container:document.body}},{key:"listenClick",value:function(g){var E=this;this.listener=a()(g,"click",function(k){return E.onClick(k)})}},{key:"onClick",value:function(B){var E=B.delegateTarget||B.currentTarget,k=this.action(E)||"copy",B=L({action:k,container:this.container,target:this.target(E),text:this.text(E)});this.emit(B?"success":"error",{action:k,text:B,trigger:E,clearSelection:function(){E&&E.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(g){return M("action",g)}},{key:"defaultTarget",value:function(g){if(g=M("target",g),g)return document.querySelector(g)}},{key:"defaultText",value:function(g){return M("text",g)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&C(l.prototype,d),h&&C(l,h),S}()},828:function(i){var e;typeof Element=="undefined"||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),i.exports=function(r,f){for(;r&&r.nodeType!==9;){if(typeof r.matches=="function"&&r.matches(f))return r;r=r.parentNode}}},438:function(i,e,r){var f=r(828);function a(n,m,u,b,s){var p=function(y,L,A,C){return function(T){T.delegateTarget=f(T.target,L),T.delegateTarget&&C.call(y,T)}}.apply(this,arguments);return n.addEventListener(u,p,s),{destroy:function(){n.removeEventListener(u,p,s)}}}i.exports=function(n,m,u,b,s){return typeof n.addEventListener=="function"?a.apply(null,arguments):typeof u=="function"?a.bind(null,document).apply(null,arguments):(typeof n=="string"&&(n=document.querySelectorAll(n)),Array.prototype.map.call(n,function(p){return a(p,m,u,b,s)}))}},879:function(i,e){e.node=function(r){return r!==void 0&&r instanceof HTMLElement&&r.nodeType===1},e.nodeList=function(r){var f=Object.prototype.toString.call(r);return r!==void 0&&(f==="[object NodeList]"||f==="[object HTMLCollection]")&&"length"in r&&(r.length===0||e.node(r[0]))},e.string=function(r){return typeof r=="string"||r instanceof String},e.fn=function(r){return Object.prototype.toString.call(r)==="[object Function]"}},370:function(i,e,r){var f=r(879),a=r(438);i.exports=function(n,m,u){if(!n&&!m&&!u)throw new Error("Missing required arguments");if(!f.string(m))throw new TypeError("Second argument must be a String");if(!f.fn(u))throw new TypeError("Third argument must be a Function");if(f.node(n))return L=m,A=u,(y=n).addEventListener(L,A),{destroy:function(){y.removeEventListener(L,A)}};if(f.nodeList(n))return b=n,s=m,p=u,Array.prototype.forEach.call(b,function(C){C.addEventListener(s,p)}),{destroy:function(){Array.prototype.forEach.call(b,function(C){C.removeEventListener(s,p)})}};if(f.string(n))return n=n,m=m,u=u,a(document.body,n,m,u);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var b,s,p,y,L,A}},817:function(i){i.exports=function(e){var r,f=e.nodeName==="SELECT"?(e.focus(),e.value):e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"?((r=e.hasAttribute("readonly"))||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),r||e.removeAttribute("readonly"),e.value):(e.hasAttribute("contenteditable")&&e.focus(),f=window.getSelection(),(r=document.createRange()).selectNodeContents(e),f.removeAllRanges(),f.addRange(r),f.toString());return f}},279:function(i){function e(){}e.prototype={on:function(r,f,a){var n=this.e||(this.e={});return(n[r]||(n[r]=[])).push({fn:f,ctx:a}),this},once:function(r,f,a){var n=this;function m(){n.off(r,m),f.apply(a,arguments)}return m._=f,this.on(r,m,a)},emit:function(r){for(var f=[].slice.call(arguments,1),a=((this.e||(this.e={}))[r]||[]).slice(),n=0,m=a.length;n<m;n++)a[n].fn.apply(a[n].ctx,f);return this},off:function(r,f){var a=this.e||(this.e={}),n=a[r],m=[];if(n&&f)for(var u=0,b=n.length;u<b;u++)n[u].fn!==f&&n[u].fn._!==f&&m.push(n[u]);return m.length?a[r]=m:delete a[r],this}},i.exports=e,i.exports.TinyEmitter=e}},v={},t.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(e,{a:e}),e},t.d=function(i,e){for(var r in e)t.o(e,r)&&!t.o(i,r)&&Object.defineProperty(i,r,{enumerable:!0,get:e[r]})},t.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},t(686).default;function t(i){if(v[i])return v[i].exports;var e=v[i]={exports:{}};return o[i](e,e.exports,t),e.exports}var o,v});(function(t,o){typeof define=="function"&&define.amd?define([],o):typeof exports!="undefined"?o():(o(),t.FileSaver={})})(this,function(){"use strict";function t(a,n){return typeof n=="undefined"?n={autoBom:!1}:typeof n!="object"&&(n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function o(a,n,m){var u=new XMLHttpRequest;u.open("GET",a),u.responseType="blob",u.onload=function(){f(u.response,n,m)},u.onerror=function(){},u.send()}function v(a){var n=new XMLHttpRequest;n.open("HEAD",a,!1);try{n.send()}catch(m){}return 200<=n.status&&299>=n.status}function i(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(m){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(n)}}var e=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,r=e.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),f=e.saveAs||(typeof window!="object"||window!==e?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(a,n,m){var u=e.URL||e.webkitURL,b=document.createElement("a");n=n||a.name||"download",b.download=n,b.rel="noopener",typeof a=="string"?(b.href=a,b.origin===location.origin?i(b):v(b.href)?o(a,n,m):i(b,b.target="_blank")):(b.href=u.createObjectURL(a),setTimeout(function(){u.revokeObjectURL(b.href)},4e4),setTimeout(function(){i(b)},0))}:"msSaveOrOpenBlob"in navigator?function(a,n,m){if(n=n||a.name||"download",typeof a!="string")navigator.msSaveOrOpenBlob(t(a,m),n);else if(v(a))o(a,n,m);else{var u=document.createElement("a");u.href=a,u.target="_blank",setTimeout(function(){i(u)})}}:function(a,n,m,u){if(u=u||open("","_blank"),u&&(u.document.title=u.document.body.innerText="downloading..."),typeof a=="string")return o(a,n,m);var b=a.type==="application/octet-stream",s=/constructor/i.test(e.HTMLElement)||e.safari,p=/CriOS\/[\d]+/.test(navigator.userAgent);if((p||b&&s||r)&&typeof FileReader!="undefined"){var y=new FileReader;y.onloadend=function(){var C=y.result;C=p?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),u?u.location.href=C:location=C,u=null},y.readAsDataURL(a)}else{var L=e.URL||e.webkitURL,A=L.createObjectURL(a);u?u.location=A:location.href=A,u=null,setTimeout(function(){L.revokeObjectURL(A)},4e4)}});e.saveAs=f.saveAs=f,typeof module!="undefined"&&(module.exports=f)});var allowed_refresh_slots=["/22181265/ConvertCase_728x90_ATF","/22181265/ConvertCase_300x250_Belowtxtbox_1","/22181265/ConvertCase_300x250_Belowtxtbox_2"];function windowPopup(t,o,v){var i=screen.width/2-o/2,e=screen.height/2-v/2;window.open(t,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width="+o+",height="+v+",top="+e+",left="+i)}function ga_event(t,o){if(typeof gtag!="undefined")if(o==="view_search_results")gtag("event",o,{search_term:t});else{value=0;var v=document.getElementById("word_count");v!=null&&(value=parseInt(v.innerHTML)),gtag("event",o,{event_category:t,value})}}function calc_counts(t){var o=t.value;t.value===void 0&&(o=t.innerText),document.getElementById("char_count").innerHTML=o.length;var v=0,i=o.trim().replace(/\s+/gi," ");i.length>0&&(v=i.split(" ").length),document.getElementById("word_count").innerHTML=v;var e=0;o.length>0&&(e=o.split(/\r*\n/).length),document.getElementById("line_count").innerHTML=e;var r=0;o.length>0&&(r=o.trim().split(/[.?!]\s/g).length),document.getElementById("sent_count").innerHTML=r}var timer;function display_message(t,o){clearTimeout(timer);var v=document.querySelector(".messages");v.innerHTML='<div class="message '+o+'">'+t+"</div>",timer=setTimeout(function(){v.innerHTML=""},3e3)}var last_refresh=Date.now(),viewed_slots=[];function refresh_dfp(){last_refresh+5e3<Date.now()&&((window.aaw=window.aaw||{cmd:[]}).cmd.push(function(){viewed_slots.length>0&&(window.aaw.refreshAdunits(viewed_slots),viewed_slots=[])}),last_refresh=Date.now())}function replace_chars(t,o,v,i="string"){for(var e=[],r=0;r<t.length;r++){var f=t.charAt(r),a=f;if(v)var a=f.toLowerCase();o[a]?e.push(o[a]):e.push(f)}return i=="string"&&(e=e.join(""),e=e.replace(/\n/g,"<br>")),e}(window.googletag=window.googletag||{cmd:[]}).cmd.push(function(){googletag.pubads().addEventListener("impressionViewable",function(t){var o=t.slot.getAdUnitPath();o=o.replace("22181265,153247860","22181265"),allowed_refresh_slots.includes(o)&&viewed_slots.push(o)})});function document_state(){var t;return typeof document.hidden!="undefined"?t="visibilityState":typeof document.mozHidden!="undefined"?t="mozVisibilityState":typeof document.msHidden!="undefined"?t="msVisibilityState":typeof document.webkitHidden!="undefined"&&(t="webkitVisibilityState"),document[t]}setInterval(function(){document_state()==="visible"&&last_refresh+3e4<Date.now()&&refresh_dfp()},1e3);var content,output;document.addEventListener("DOMContentLoaded",function(){if(content=document.getElementById("content"),output=document.getElementById("output"),document.getElementById("char_count")!=null){var t=output;content!=null&&(t=content,content.addEventListener("focus",function(){calc_counts(t)}),content.addEventListener("blur",function(){calc_counts(t)}),content.addEventListener("input",function(){calc_counts(t)}),content.addEventListener("propertychange",function(){calc_counts(t)}),calc_counts(t)),output!=null&&(output.addEventListener("focus",function(){calc_counts(t)}),output.addEventListener("blur",function(){calc_counts(t)}),output.addEventListener("input",function(){calc_counts(t)}),output.addEventListener("propertychange",function(){calc_counts(t)}),calc_counts(t))}if(document.getElementById("copy")){var o=new ClipboardJS("#copy",{text:function(s){return document.querySelectorAll(s.getAttribute("data-clipboard-target"))[0].innerText}});o.on("success",function(s){display_message(copied,"success"),ga_event("Copied","Copied"),refresh_dfp(),s.clearSelection()}),o.on("error",function(s){s.text.length===0?display_message(no_text,"error"):(display_message(manual_copy,"info"),ga_event("Copied","Manual"),refresh_dfp())});var v=new ClipboardJS(".copy",{text:function(s){return s.parentNode.innerText}});v.on("success",function(s){display_message(copied,"success"),ga_event("Copied","Copied"),refresh_dfp(),s.clearSelection()}),v.on("error",function(s){s.text.length===0?display_message(no_text,"error"):(display_message(manual_copy,"info"),ga_event("Copied","Manual"),refresh_dfp())})}if(document.getElementById("download"))try{var i=!!new Blob,e=document.getElementById("download");e&&(e.style.display="inline-block",e.addEventListener("click",function(s){if(e.getAttribute("data-download-type")==="image"){var p=document.getElementById(e.getAttribute("data-download-target").slice(1)),y=dataURItoBlob(p.src);saveAs(y,p.getAttribute("data-filename")),display_message(downloaded_image,"success"),ga_event("Download","Download"),refresh_dfp()}else if(e.getAttribute("data-download-type")==="application/json"){var L=document.getElementById(e.getAttribute("data-download-target").slice(1)).value.replace(/\n/g,`\r
`);if(L.length===0)display_message(no_text,"error");else{var y=new Blob([L],{type:"application/json;charset=utf-8"}),A=file_name.replace(".txt",".json");saveAs(y,A),display_message(downloaded_json,"success"),ga_event("Download","Download"),refresh_dfp()}}else{if(e.getAttribute("data-download-type")==="innerText")var L=document.getElementById(e.getAttribute("data-download-target").slice(1)).innerText.replace(/\n/g,`\r
`);else var L=document.getElementById(e.getAttribute("data-download-target").slice(1)).value.replace(/\n/g,`\r
`);if(L.length===0)display_message(no_text,"error");else{var y=new Blob([L],{type:"text/plain;charset=utf-8"});saveAs(y,file_name),display_message(downloaded,"success"),ga_event("Download","Download"),refresh_dfp()}}return!1}))}catch(s){}var r=document.querySelectorAll(".share");if(r!=null)for(var f=0;f<r.length;f++)r[f].addEventListener("click",function(s){return s.preventDefault(),windowPopup(this.href,520,320),!1});function a(){var s=document.querySelectorAll(".search input")[0],p=document.querySelectorAll(".tabs > li:not(.more) > ul > li > a"),y=document.querySelectorAll(".search .results")[0],L=null;function A(C){C.length>3&&ga_event(C,"view_search_results")}s.addEventListener("keyup",function(C){if(C.keyCode===13){var T=y.querySelectorAll("a")[0];T&&(window.location=T.getAttribute("href"))}var x=s.value.toLowerCase();clearTimeout(L),L=setTimeout(function(){A(x)},500);for(var _=y.querySelectorAll("li:not(.no-results)"),M=0;M<_.length;M++)_[M].parentNode.removeChild(_[M]);y.querySelectorAll(".no-results")[0].classList.remove("show"),x.length>0&&($i=0,p.forEach(function(j){if(!($i>10)){var l=j.innerHTML;l=l.replace("<br>"," "),l.toLowerCase().includes(x)&&(y.innerHTML+='<li><a href="'+j.getAttribute("href")+'">'+l.replace(new RegExp(x,"gi"),function(d){return"<strong>"+d+"</strong>"})+"</a></li>",$i++)}})),y.appendChild(y.querySelectorAll(".no-results")[0]),y.querySelectorAll("li:not(.no-results").length===0&&y.querySelectorAll(".no-results")[0].classList.add("show")}),s.addEventListener("blur",function(C){setTimeout(function(){s.value="";for(var T=y.querySelectorAll("li:not(.no-results)"),x=0;x<T.length;x++)T[x].parentNode.removeChild(T[x]);y.querySelectorAll(".no-results")[0].classList.remove("show")},500)})}a();var n=document.getElementById("menu");n.classList.add("js");function m(){n.classList.remove("has-overflow");for(var s=n.children,p=0;p<s.length;p++)s[p].classList.remove("overflowed"),s[p].classList.contains("more")&&s[p].parentNode.removeChild(s[p]);var y=document.querySelector(".container").clientWidth,L=n.scrollWidth,A=y-65-120,C=!1,T="";if(L>y){for(var s=n.children,p=0;p<s.length;p++)if(!s[p].classList.contains("search")){var x=s[p].clientWidth;!C&&A-x>=0?A-=x:(C=!0,s[p].classList.add("overflowed"),T+="<li>"+s[p].innerHTML.replace("<br>"," ").replace("&nbsp;"," ")+"</li>")}}if(C){n.innerHTML+='<li class="more"><span><em></em></span><ul>'+T+"</ul></li>",a();for(var _=document.querySelectorAll("#menu .more span, #menu .more a"),p=0;p<_.length;p++)_[p].parentNode.querySelector("ul")&&_[p].addEventListener("click",function(j){j.preventDefault(),this.parentNode.classList.toggle("open");for(var l=document.querySelectorAll("#menu .more .open"),d=0;d<l.length;d++)l[d]!=this.parentNode&&l[d].classList.remove("open");return!1});n.classList.add("has-overflow")}}m();var u=window.innerWidth;if(window.onresize=function(s){window.innerWidth!=u&&m()},localStorage.getItem("theme")==="dark"?document.body.classList.add("dark"):localStorage.getItem("theme")==="light"&&document.body.classList.add("light"),document.getElementById("toggle-theme").addEventListener("click",function(s){s.preventDefault();var p="auto";return document.body.classList.contains("dark")?(document.body.classList.remove("dark"),document.body.classList.add("light"),p="light"):document.body.classList.contains("light")?(document.body.classList.remove("light"),document.body.classList.remove("dark")):(document.body.classList.add("dark"),p="dark"),localStorage.setItem("theme",p),ga_event("Theme",p),!1}),window.screen.height>=900){var b=document.querySelector('[data-aa-adunit="/22181265/ConvertCase_Desktop_StickyFooter"]');b&&(b.dataset.aaad="true"),(window.aaw=window.aaw||{cmd:[]}).cmd.push(function(){window.aaw.processAdsOnPage(),allowed_refresh_slots.push("/22181265/ConvertCase_Desktop_StickyFooter")})}});"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");function sentencecase(t){t=t.toLowerCase();for(var o=!0,v="",i=0;i<t.length;i++){var e=t.charAt(i);/\.|\!|\?|\n|\r|\]/.test(e)?o=!0:e.trim()!=""&&o==!0&&(e=e.toUpperCase(),o=!1),v+=e}return window.location.pathname=="/"&&window.location.search.indexOf("skip=i")==-1&&(v=v.replace(/\bi\b/g,"I")),v=ucafterquote(v),v}function ucafterquote(t){return t=t.replace(/\"([A-Za-z])/g,function(o){return o.toUpperCase()}),t}function dataURItoBlob(t){for(var o=atob(t.split(",")[1]),v=t.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(o.length),e=new Uint8Array(i),r=0;r<o.length;r++)e[r]=o.charCodeAt(r);var f=new Blob([i],{type:v});return f}var nato_map={a:"Alpha",b:"Bravo",c:"Charlie",d:"Delta",e:"Echo",f:"Foxtrot",g:"Golf",h:"Hotel",i:"India",j:"Juliet",k:"Kilo",l:"Lima",m:"Mike",n:"November",o:"Oscar",p:"Papa",q:"Quebec",r:"Romeo",s:"Sierra",t:"Tango",u:"Uniform",v:"Victor",w:"Whiskey",x:"X-ray",y:"Yankee",z:"Zulu",0:"Zero",1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine",".":"Period",",":"Comma","!":"Exclamation Point","?":"Question Mark","-":"Dash","@":"At Sign","#":"Pound Sign",$:"Dollar Sign","%":"Percent Sign","^":"Caret","&":"Ampersand","*":"Asterisk","(":"Left Parenthesis",")":"Right Parenthesis",_:"Underscore","+":"Plus Sign","=":"Equals Sign","{":"Left Curly Bracket","}":"Right Curly Bracket","[":"Left Square Bracket","]":"Right Square Bracket","|":"Vertical Bar",":":"Colon",";":"Semicolon","'":"Single Quote",'"':"Double Quote","<":"Less Than",">":"Greater Than","/":"Forward Slash","\\":"Backslash","`":"Backtick","~":"Tilde"};function convert(t){return replace_chars(t,nato_map,!0,"array").join(" ")}function revert(t){for(var o in nato_map)t=t.replace(new RegExp(nato_map[o],"gi"),o);return t=t.replace(/\s+/g,function(v){return v.length===1?"":v}),t=t.replace(/\s+/g," "),t=sentencecase(t),t}var translated=document.getElementById("translated");function two_way(t){var o=content,v="translated";if(t)var o=translated,v="content";var i=o.value;if(i==""&&(i=o.placeholder),t)var e=revert(i);else var e=convert(i);document.getElementById(v).value=e,t&&calc_counts(content)}document.addEventListener("DOMContentLoaded",function(){two_way(!1),content.addEventListener("input",function(t){two_way(!1),refresh_dfp()}),content.addEventListener("propertychange",function(t){two_way(!1),refresh_dfp()}),translated.addEventListener("input",function(t){two_way(!0),refresh_dfp()}),translated.addEventListener("propertychange",function(t){two_way(!0),refresh_dfp()})});
