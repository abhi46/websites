(self.AMP=self.AMP||[]).push({n:"amp-form",v:"1533168552513",f:(function(AMP,_){var l;function m(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};var aa=Object.prototype.toString;function ba(a){if(!a)return[];for(var b=Array(a.length),c=0;c<a.length;c++)b[c]=a[c];return b};self.log=self.log||{user:null,dev:null,userForEmbed:null};var n=self.log;function q(){if(!n.user)throw Error("failed to call initLogConstructor");return n.user};var ca=Object.prototype.hasOwnProperty;function r(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function t(a){return a||{}}
function da(a,b){var c;c=void 0===c?10:c;var d=[],e=[];e.push({t:a,s:b,d:0});for(a={};0<e.length;){b=e.shift();a.t=b.t;a.s=b.s;a.d=b.d;if(d.includes(a.s))throw Error("Source object has a circular reference.");d.push(a.s);a.t!==a.s&&(a.d>c?Object.assign(a.t,a.s):(Object.keys(a.s).forEach(function(a){return function(b){var c=a.s[b];if(ca.call(a.t,b)){var d=a.t[b];if("[object Object]"===aa.call(c)&&"[object Object]"===aa.call(d)){e.push({t:d,s:c,d:a.d+1});return}}a.t[b]=c}}(a)),a={s:a.s,t:a.t,d:a.d}))}}
;function u(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};t({c:!0,v:!0,a:!0,ad:!0});function ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b}function fa(a){return new Promise(function(b){b(a())})}function v(a){var b,c;this.W=new Promise(function(a,d){b=a;c=d});this.fa=b;this.da=c;this.O=0;if(a)for(var d=0;d<a.length;d++)this.add(a[d])}v.prototype.add=function(a){var b=this,c=++this.O;Promise.resolve(a).then(function(a){b.O===c&&b.fa(a)},function(a){b.O===c&&b.da(a)});return this.W};v.prototype.then=function(a,b){return this.W.then(a,b)};function w(a,b){if(a.nodeType){var c=(a.ownerDocument||a).defaultView;if(c=c!=(c.__AMP_TOP||c)&&ga(c,b)?x(c,b):null)return c}return y(a,b)}function A(a,b){a=a.__AMP_TOP||a;return x(a,b)}function y(a,b){a=B(a);a=C(a);return x(a,b)}function B(a){return a.nodeType?A((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function C(a){a=B(a);return a.isSingleDoc()?a.win:a}
function x(a,b){ga(a,b);var c=ha(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ia(a){var b=ha(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;x(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function ha(a){var b=a.services;b||(b=a.services={});return b}function ga(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var ja=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function ka(a,b,c,d,e){return e?e:b?"\ufffd":d?a.slice(0,-1)+"\\"+a.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+a};var D;function la(a,b){for(var c=[],d=a.parentElement;d;d=d.parentElement)b(d)&&c.push(d);return c}function ma(a){var b="fieldset",b=b.toUpperCase();return la(a,function(a){return a.tagName==b})}function E(a,b){for(var c=0,d;void 0!==(d=a[c]);c++)b(d,c)};function na(a){var b=B(a),c=ia(C(a));return c?c:b.whenBodyAvailable().then(function(){var a;a=b.win;var c=b.getHeadNode(),g;if(c){g=[];for(var c=c.querySelectorAll("script[custom-element]"),f=0;f<c.length;f++)g.push(c[f].getAttribute("custom-element"))}else g=[];a=g.includes("amp-analytics")?A(a,"extensions").waitForExtension(a,"amp-analytics"):Promise.resolve();return a}).then(function(){var c;c=b.win;if(c.ampExtendedElements&&c.ampExtendedElements["amp-analytics"]){c=C(a);var e=ia(c);if(!e){var g=
new ea,e=g.promise,g=g.resolve;ha(c)["amp-analytics-instrumentation"]={obj:null,promise:e,resolve:g,context:null,ctor:null}}c=e}else c=null;return c})};function oa(a,b,c,d){var e={detail:c};Object.assign(e,d);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,e);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!e.bubbles,!!e.cancelable,c);return a};var F,pa="Webkit webkit Moz moz ms O o".split(" ");function qa(a,b){for(var c in b){var d=a,e=b[c],g;g=d.style;var f=c;if(u(f,"--"))g=f;else{F||(F=r());var h=F[f];if(!h){h=f;if(void 0===g[f]){var k=f.charAt(0).toUpperCase()+f.slice(1);b:{for(var p=0;p<pa.length;p++){var z=pa[p]+k;if(void 0!==g[z]){k=z;break b}}k=""}void 0!==g[k]&&(h=k)}F[f]=h}g=h}g&&(d.style[g]=e)}};function ra(a,b){var c='form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}.i-amphtml-validation-bubble{-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,0.5);max-width:200px;position:absolute;display:none;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{display:none;color:red}[visible-when-invalid].visible{display:initial}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/',
d=!1,e="amp-form",g=a.getHeadNode(),f=sa(g,ta(g,c),d||!1,e||null);if(b){var h=a.getRootNode();if(ua(h,f))b(f);else var k=setInterval(function(){ua(h,f)&&(clearInterval(k),b(f))},4)}}
function sa(a,b,c,d){var e=a.__AMP_CSS_SM;e||(e=a.__AMP_CSS_SM=r());var g=!c&&d&&"amp-custom"!=d&&"amp-keyframes"!=d,f=c?"amp-runtime":g?"amp-extension="+d:null;if(f){var h=va(a,e,f);if(h)return h}var k=(a.ownerDocument||a).createElement("style");k.textContent=b;var p=null;c?k.setAttribute("amp-runtime",""):g?(k.setAttribute("amp-extension",d||""),p=va(a,e,"amp-runtime")):(d&&k.setAttribute(d,""),p=a.lastChild);b=p;a.insertBefore(k,b?b.nextSibling:a.firstChild);f&&(e[f]=k);return k}
function va(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}function ta(a,b){return(a=a.__AMP_CSS_TR)?a(b):b}function ua(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++){var d=c[a];if(d.ownerNode==b)return!0}return!1};function wa(a,b,c){na(a).then(function(d){d&&d.triggerEventForTarget(a,b,c)})};self.AMPErrors=self.AMPErrors||[];function G(a){var b={},c=a.elements,d=/^(?:input|select|textarea)$/i,e=/^(?:button|image|file|reset)$/i,g=/^(?:checkbox|radio)$/i;for(a=0;a<c.length;a++){var f=c[a],h;if(h=f.name){a:if(f.disabled)h=!0;else{h=ma(f);for(var k=0;k<h.length;k++)if(h[k].disabled){h=!0;break a}h=!1}h=!h}!h||!d.test(f.tagName)||e.test(f.type)||g.test(f.type)&&!f.checked||(void 0===b[f.name]&&(b[f.name]=[]),b[f.name].push(f.value))}return b};function H(a){this.m=new FormData(a);this.H=this.m.entries?null:a?G(a):r()}H.prototype.append=function(a,b){if(!this.m.entries){var c=String(a);this.H[c]=this.H[c]||[];this.H[a].push(String(b))}return this.m.append(a,b)};H.prototype.entries=function(){if(this.m.entries)return this.m.entries();var a=[],b=this.H;Object.keys(b).forEach(function(c){b[c].forEach(function(b){return a.push([c,b])})});var c=0;return{next:function(){return c<a.length?{value:a[c++],done:!1}:{value:void 0,done:!0}}}};
H.prototype.getFormData=function(){return this.m};var xa={"amp-list":["src","single-item","max-items"],"amp-form":["action-xhr"]};function ya(a,b,c){this.C=b;this.w=c;this.qa=new XMLSerializer;this.Y=a}ya.prototype.isSupported=function(){return this.C.canRenderTemplates()};
ya.prototype.fetchAndRenderTemplate=function(a){var b=za(a),c=Aa(this,a);c.inputData=b;var d;this.w.maybeFindTemplate(a)&&(d=this.qa.serializeToString(this.w.findTemplate(a)));a=t({data:c,mustacheTemplate:d,sourceAmpComponent:this.Y});return this.C.sendMessageAwaitResponse("viewerRenderTemplate",a)};function za(a){a=a.querySelectorAll("input");var b=r();E(a,function(a){b[a.name]=a.value});return b}
function Aa(a,b){var c=r();if(0<b.attributes.length){var d=xa[a.Y];E(b.attributes,function(a){-1!=d.indexOf(a.name)&&(c[a.name]=a.value)})}return c};function Ba(a){var b=a.ownerDocument.defaultView;b.FormProxy||(b.FormProxy=Ca(b));var c=b.FormProxy,b=new c(a);"action"in b||Da(a,b);a.$p=b}
function Ca(a){function b(a){this.h=a}var c=b.prototype,d=[a.HTMLFormElement,a.HTMLElement,a.Element,a.Node,a.EventTarget];d.forEach(function(b){var d=b&&b.prototype;b={};for(var e in d)if(b.property=a.Object.getOwnPropertyDescriptor(d,e),b.property&&e.toUpperCase()!=e&&!u(e,"on")&&!a.Object.prototype.hasOwnProperty.call(c,e)){if("function"==typeof b.property.value)b.method=b.property.value,c[e]=function(a){return function(){return a.method.apply(this.h,arguments)}}(b);else{var h={};b.property.get&&
(h.get=function(a){return function(){return a.property.get.call(this.h)}}(b));b.property.set&&(h.set=function(a){return function(b){return a.property.set.call(this.h,b)}}(b));a.Object.defineProperty(c,e,h)}b={method:b.method,property:b.property}}});return b}
function Da(a,b){var c=a.ownerDocument.defaultView.HTMLFormElement.prototype.cloneNode.call(a,!1),d={},e;for(e in c)if(d.name=e,!(d.name in b||d.name.toUpperCase()==d.name||u(d.name,"on"))){d.desc=Ea[d.name];c=a[d.name];if(d.desc)if(d.desc.access==I){d.actual=void 0;if(c&&c.nodeType){var g=c,f=g.nextSibling,g=g.parentNode;g.removeChild(c);try{d.actual=a[d.name]}finally{g.insertBefore(c,f)}}else d.actual=c;Object.defineProperty(b,d.name,{get:function(a){return function(){return a.actual}}(d)})}else d.desc.access==
J&&(d.attr=d.desc.attr||d.name,Object.defineProperty(b,d.name,{get:function(c){return function(){var d=b.getAttribute(c.attr);return null==d&&void 0!==c.desc.def?c.desc.def:c.desc.type==Fa?"true"===d:c.desc.type==K?null!=d:c.desc.type==Ga?(d=d||"",w(a,"url").parse(d).href):d}}(d),set:function(a){return function(c){a.desc.type==K&&(c=c?"":null);null!=c?b.setAttribute(a.attr,c):b.removeAttribute(a.attr)}}(d)}));else Object.defineProperty(b,d.name,{get:function(b){return function(){return a[b.name]}}(d),
set:function(b){return function(c){a[b.name]=c}}(d)});d={actual:d.actual,attr:d.attr,desc:d.desc,name:d.name}}}
var J=1,I=2,Ga=1,Fa=2,K=3,Ea={acceptCharset:{access:J,attr:"accept-charset"},accessKey:{access:J,attr:"accesskey"},action:{access:J,type:Ga},attributes:{access:I},autocomplete:{access:J,def:"on"},children:{access:I},dataset:{access:I},dir:{access:J},draggable:{access:J,type:Fa,def:!1},elements:{access:I},encoding:{access:I},enctype:{access:J},hidden:{access:J,type:K,def:!1},id:{access:J,def:""},lang:{access:J},localName:{access:I},method:{access:J,def:"get"},name:{access:J},noValidate:{access:J,attr:"novalidate",
type:K,def:!1},prefix:{access:I},spellcheck:{access:J},style:{access:I},target:{access:J,def:""},title:{access:J},translate:{access:J}};function Ha(a,b){return a.hasAttribute("verify-xhr")?new Ia(a,b):new Ja(a)}function L(a){this.h=a}L.prototype.onCommit=function(){Ka(this);return La(this)?this.$():Promise.resolve([])};L.prototype.$=function(){return Promise.resolve([])};
function La(a){a=a.h.elements;for(var b=0;b<a.length;b++){var c=a[b];if(!c.disabled)switch(c.type){case "select-multiple":case "select-one":for(var c=c.options,d=0;d<c.length;d++)if(c[d].selected!==c[d].defaultSelected)return!0;break;case "checkbox":case "radio":if(c.checked!==c.defaultChecked)return!0;break;default:if(c.value!==c.defaultValue)return!0}}return!1}function Ka(a){(a=a.h.elements)&&E(a,function(a){a.setCustomValidity("")})}function Ja(a){L.apply(this,arguments)}m(Ja,L);
function Ia(a,b){this.h=a;this.G=b;this.D=null;this.V=[]}m(Ia,L);Ia.prototype.$=function(){var a=this,b=this.G().then(function(){return[]},function(a){return Ma(a)});return Na(this,b).then(function(b){return Oa(a,b)})};function Na(a,b){if(!a.D){a.D=new v;var c=function(){return a.D=null};a.D.then(c,c)}return a.D.add(b)}
function Oa(a,b){function c(a){return b.every(function(b){return a.name!==b.name})}var d=[],e=a.V;a.V=b;for(var g=0;g<b.length;g++){var f=b[g],h=q().assertString(f.name,"Verification errors must have a name property"),f=q().assertString(f.message,"Verification errors must have a message property"),h=q().assertElement(a.h.querySelector('[name="'+h+'"]'),"Verification error name property must match a field name");h.checkValidity()&&(h.setCustomValidity(f),d.push(h))}var k=e.filter(c).map(function(b){return a.h.querySelector('[name="'+
b.name+'"]')});return d.concat(k)}function Ma(a){return(a=a.response)?a.json().then(function(a){return a.verifyErrors||[]},function(){return[]}):Promise.resolve([])};function M(a,b){this.T=b;this.la=y(a,"viewport");this.aa=A(a.win,"vsync");this.R=null;this.P="";this.K=!1;this.A=a.win.document.createElement("div");this.A.classList.add("i-amphtml-validation-bubble");this.A.__BUBBLE_OBJ=this;a.getBody().appendChild(this.A)}M.prototype.isActiveOn=function(a){return this.K&&a==this.R};M.prototype.hide=function(){this.K&&(this.K=!1,this.R=null,this.P="",this.aa.run({measure:void 0,mutate:Pa},{bubbleElement:this.A}))};
M.prototype.show=function(a,b){this.isActiveOn(a)&&b==this.P||(this.K=!0,this.R=a,this.P=b,this.aa.run({measure:Qa,mutate:Ra},{message:b,targetElement:a,bubbleElement:this.A,viewport:this.la,id:this.T}))};function Pa(a){a.bubbleElement.removeAttribute("aria-alert");a.bubbleElement.removeAttribute("role");for(var b=a.bubbleElement;b.firstChild;)b.removeChild(b.firstChild);qa(a.bubbleElement,{display:"none"})}function Qa(a){a.targetRect=a.viewport.getLayoutRect(a.targetElement)}
function Ra(a){for(var b=a.bubbleElement;b.firstChild;)b.removeChild(b.firstChild);var c=a.bubbleElement.ownerDocument.createElement("div");c.id="bubble-message-"+a.id;c.textContent=a.message;a.bubbleElement.setAttribute("aria-labeledby",c.id);a.bubbleElement.setAttribute("role","alert");a.bubbleElement.setAttribute("aria-live","assertive");a.bubbleElement.appendChild(c);qa(a.bubbleElement,{display:"block",top:a.targetRect.top-10+"px",left:a.targetRect.left+a.targetRect.width/2+"px"})};var Sa,Ta,Ua=0;function N(a){this.form=a;this.ampdoc=B(a);this.resources=y(a,"resources");this.root=this.ampdoc.getRootNode();this.I=null}N.prototype.report=function(){};N.prototype.onBlur=function(){};N.prototype.onInput=function(){};N.prototype.fireValidityEventIfNecessary=function(){var a=this.I;this.I=this.form.checkValidity();if(a!==this.I){var b=oa(this.form.ownerDocument.defaultView,this.I?"valid":"invalid",null,{bubbles:!0});this.form.dispatchEvent(b)}};
function Va(a){N.apply(this,arguments)}m(Va,N);Va.prototype.report=function(){this.form.reportValidity();this.fireValidityEventIfNecessary()};function O(a){N.call(this,a);var b="i-amphtml-validation-bubble-"+Ua++;this.B=new M(this.ampdoc,b)}m(O,N);O.prototype.report=function(){for(var a=this.form.querySelectorAll("input,select,textarea"),b=0;b<a.length;b++)if(!a[b].checkValidity()){a[b].focus();this.B.show(a[b],a[b].validationMessage);break}this.fireValidityEventIfNecessary()};
O.prototype.onBlur=function(){this.B.hide()};O.prototype.onInput=function(a){a=a.target;this.B.isActiveOn(a)&&(a.checkValidity()?(a.removeAttribute("aria-invalid"),this.B.hide()):(a.setAttribute("aria-invalid","true"),this.B.show(a,a.validationMessage)))};function P(a){N.call(this,a);this.U={};this.J={}}m(P,N);l=P.prototype;l.reportInput=function(a){var b;a:{for(b in a.validity)if(a.validity[b])break a;b=null}var c=b;c&&this.showValidationFor(a,c)};l.hideAllValidations=function(){for(var a in this.J)this.hideValidationFor(this.root.getElementById(a))};
l.getValidationFor=function(a,b){if(!a.id)return null;a="[visible-when-invalid="+b+"]"+("[validation-for="+a.id+"]");void 0===this.U[a]&&(this.U[a]=this.root.querySelector(a));return this.U[a]};l.showValidationFor=function(a,b){var c=this.getValidationFor(a,b);c&&(c.textContent.trim()||(c.textContent=a.validationMessage),this.J[a.id]=c,this.resources.mutateElement(a,function(){return a.setAttribute("aria-invalid","true")}),this.resources.mutateElement(c,function(){return c.classList.add("visible")}))};
l.hideValidationFor=function(a){var b=this.getVisibleValidationFor(a);b&&(delete this.J[a.id],this.resources.mutateElement(a,function(){return a.removeAttribute("aria-invalid")}),this.resources.mutateElement(b,function(){return b.classList.remove("visible")}))};l.getVisibleValidationFor=function(a){return a.id?this.J[a.id]:null};l.shouldValidateOnInteraction=function(){throw Error("Not Implemented");};
l.onInteraction=function(a){a=a.target;var b=!!a.checkValidity&&this.shouldValidateOnInteraction(a);this.hideValidationFor(a);b&&!a.checkValidity()&&this.reportInput(a)};l.onBlur=function(a){this.onInteraction(a)};l.onInput=function(a){this.onInteraction(a)};function Q(a){P.apply(this,arguments)}m(Q,P);
Q.prototype.report=function(){this.hideAllValidations();for(var a=this.form.querySelectorAll("input,select,textarea"),b=0;b<a.length;b++)if(!a[b].checkValidity()){this.reportInput(a[b]);a[b].focus();break}this.fireValidityEventIfNecessary()};Q.prototype.shouldValidateOnInteraction=function(a){return!!this.getVisibleValidationFor(a)};function R(a){P.apply(this,arguments)}m(R,P);
R.prototype.report=function(){this.hideAllValidations();for(var a=null,b=this.form.querySelectorAll("input,select,textarea"),c=0;c<b.length;c++)b[c].checkValidity()||(a=a||b[c],this.reportInput(b[c]));a&&a.focus();this.fireValidityEventIfNecessary()};R.prototype.shouldValidateOnInteraction=function(a){return!!this.getVisibleValidationFor(a)};function S(a){P.apply(this,arguments)}m(S,P);S.prototype.shouldValidateOnInteraction=function(){return!0};
S.prototype.onInteraction=function(a){P.prototype.onInteraction.call(this,a);this.fireValidityEventIfNecessary()};function T(a){R.apply(this,arguments)}m(T,R);T.prototype.shouldValidateOnInteraction=function(){return!0};T.prototype.onInteraction=function(a){R.prototype.onInteraction.call(this,a);this.fireValidityEventIfNecessary()};
function Wa(a){var b=a.getAttribute("custom-validation-reporting");switch(b){case "as-you-go":return new S(a);case "show-all-on-submit":return new R(a);case "interact-and-submit":return new T(a);case "show-first-on-submit":return new Q(a)}a.ownerDocument&&void 0===Sa&&(Sa=!!document.createElement("form").reportValidity);return Sa?new Va(a):new O(a)};var Xa=["amp-selector"];
function Ya(a,b){var c=this;try{Ba(a)}catch(g){var d;if(n.dev)d=n.dev;else throw Error("failed to call initLogConstructor");d.error("amp-form","form proxy failed to install",g)}a.__AMP_FORM=this;this.T=b;this.l=a.ownerDocument.defaultView;this.ja=A(this.l,"timer");this.Z=w(a,"url-replace");this.S=null;this.h=a;this.w=A(this.l,"templates");this.pa=A(this.l,"xhr");this.F=w(this.h,"action");this.ga=y(this.h,"resources");this.C=y(this.h,"viewer");this.L=new ya("amp-form",this.C,this.w);this.o=(this.h.getAttribute("method")||
"GET").toUpperCase();this.ia=this.h.getAttribute("target");this.N=Za(this,"action-xhr");this.oa=Za(this,"verify-xhr");this.X=!this.h.hasAttribute("novalidate");this.h.setAttribute("novalidate","");this.X||this.h.setAttribute("amp-novalidate","");this.h.classList.add("i-amphtml-form");var e=this.h.querySelectorAll('[type="submit"]');this.ha=ba(e);this.j="initial";a=this.h.elements;for(b=0;b<a.length;b++)d=a[b].name,q().assert("__amp_source_origin"!=d&&"__amp_form_verify"!=d,"Illegal input name, %s found: %s",
d,a[b]);this.M=Wa(this.h);this.ka=Ha(this.h,function(){return $a(c)});this.F.installActionHandler(this.h,this.ba.bind(this),100);ab(this);this.ea=this.na=null}function Za(a,b){var c=a.h.getAttribute(b);if(c){var d=w(a.h,"url");d.assertHttpsUrl(c,a.h,b);q().assert(!d.isProxyOrigin(c),"form "+b+" should not be on AMP CDN: %s",a.h)}return c}l=Ya.prototype;
l.ba=function(a){var b=this;"submit"==a.method?bb(this).then(function(){var c=a;"submitting"!=b.j&&cb(b)&&(db(b,c.trust),"GET"!=b.o||b.N||b.h.submit())}):"clear"===a.method&&eb(this);return null};function bb(a){if(a.S)return a.S;var b=a.h.querySelectorAll(Xa.join(",")),c=ba(b).map(function(a){return a.whenBuilt()});return a.S=fb(a,c,2E3)}
function ab(a){a.C.whenNextVisible().then(function(){var b=a.h.querySelector("[autofocus]");if(b)try{b.focus()}catch(d){}});a.h.addEventListener("submit",a.ca.bind(a),!0);a.h.addEventListener("blur",function(b){U(b.target);a.M.onBlur(b)},!0);if(!a.L.isSupported()){var b=function(){"verifying"===a.j&&V(a,"initial")};a.h.addEventListener("change",function(c){a.ka.onCommit().then(function(b){b.forEach(U);a.M.onBlur(c)},function(){U(c.target)}).then(b,b)})}a.h.addEventListener("input",function(b){U(b.target);
a.M.onInput(b)})}function W(a,b){X(a,"Form analytics not supported");var c={},d=G(a.h),e;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(c["formFields["+e+"]"]=d[e].join(","));c.formId=a.h.id;wa(a.h,b,c)}
function eb(a){a.h.reset();V(a,"initial");a.h.classList.remove("user-valid");a.h.classList.remove("user-invalid");var b=a.h.querySelectorAll(".user-valid, .user-invalid");E(b,function(a){a.classList.remove("user-valid");a.classList.remove("user-invalid")});var c=a.h.querySelectorAll(".visible[validation-for]");E(c,function(a){a.classList.remove("visible")});gb(a.h)}
l.ca=function(a){"submitting"!=this.j&&cb(this)?((this.N||"POST"==this.o)&&a.preventDefault(),db(this,100)):(a.stopImmediatePropagation(),a.preventDefault())};function db(a,b){var c=hb(a);if(a.N)ib(a,c,b);else if("POST"==a.o)q().assert(!1,"Only XHR based (via action-xhr attribute) submissions are supported for POST requests. %s",a.h);else if("GET"==a.o){var d=c;X(a,"Non-XHR GETs not supported.");jb(a);for(var e=0;e<d.length;e++)a.Z.expandInputValueSync(d[e]);W(a,"amp-form-submit")}}
function hb(a){return a.h.querySelectorAll('[type="hidden"][data-amp-replace]')}function $a(a){if("submitting"===a.j)return Promise.resolve();V(a,"verifying");return kb(a,hb(a)).then(function(){var b={};return a.G(a.oa,a.o,(b.__amp_form_verify=!0,b))})}
function ib(a,b,c){V(a,"submitting");var d=kb(a,b);a.L.isSupported()?d.then(function(){a.F.trigger(a.h,"submit",null,c);return a.L.fetchAndRenderTemplate(a.h)}).then(function(b){return lb(a,Promise.resolve(b.data))},function(b){return mb(a,b)}):d.then(function(){W(a,"amp-form-submit");a.F.trigger(a.h,"submit",null,c);var b=G(a.h);Y(a,b);return a.G(a.N,a.o)}).then(function(b){return nb(a,b)},function(b){return ob(a,b)})}
function mb(a,b){pb(a,!1,b);V(a,"submit-error");q().error("amp-form","Form submission failed: "+b);return fa(function(){Y(a,b||{})})}function kb(a,b){for(var c=[],d=0;d<b.length;d++)c.push(a.Z.expandInputValueAsync(b[d]));return fb(a,c,100)}
l.G=function(a,b,c){X(this,"XHRs should be proxied.");var d,e,g="GET"==b||"HEAD"==b;if(g){jb(this);var f=G(this.h);c&&da(f,c);var h,k=[];for(h in f){var p=f[h];if(null!=p)if(Array.isArray(p))for(var z=0;z<p.length;z++)k.push(encodeURIComponent(h)+"="+encodeURIComponent(p[z]));else k.push(encodeURIComponent(h)+"="+encodeURIComponent(p))}h=k.join("&");h?(a=a.split("#",2),f=a[0].split("?",2),h=f[0]+(f[1]?"?"+f[1]+"&"+h:"?"+h),d=h+=a[1]?"#"+a[1]:""):d=a}else for(f in d=a,e=new H(this.h),c)e.append(f,
c[f]);return this.pa.fetch(d,{body:e,method:b,credentials:"include",headers:t({Accept:"application/json"})})};function nb(a,b){return lb(a,b.json()).then(function(){W(a,"amp-form-submit-success");qb(a,b)})}function lb(a,b){return b.then(function(b){pb(a,!0,b);V(a,"submit-success");Y(a,b||{})},function(a){q().error("amp-form","Failed to parse response JSON: "+a)})}
function ob(a,b){return(b&&b.response?b.response.json().catch(function(){return null}):Promise.resolve(null)).then(function(c){pb(a,!1,c);W(a,"amp-form-submit-error");V(a,"submit-error");Y(a,c||{});qb(a,b.response);q().error("amp-form","Form submission failed: "+b)})}function X(a,b){var c=a.L.isSupported();q().assert(!1===c,"[amp-form]: viewerRenderTemplate | "+b)}
function jb(a){var b=a.h.querySelectorAll("input[type=password],input[type=file]");q().assert(0==b.length,"input[type=password] or input[type=file] may only appear in form[method=post]")}function cb(a){void 0===Ta&&(Ta=!!a.l.document.createElement("input").checkValidity);if(Ta){var b=rb(a.h);if(a.X)return a.M.report(),b}return!0}
function qb(a,b){X(a,"Redirects not supported.");if(b&&b.headers){var c=b.headers.get("AMP-Redirect-To");if(c){q().assert("_blank"!=a.ia,"Redirecting to target=_blank using AMP-Redirect-To is currently not supported, use target=_top instead. %s",a.h);try{var d=w(a.h,"url");d.assertAbsoluteHttpOrHttpsUrl(c);d.assertHttpsUrl(c,"AMP-Redirect-To","Url")}catch(e){q().assert(!1,"The `AMP-Redirect-To` header value must be an absolute URL starting with https://. Found %s",c)}b=B(a.h);b=C(b);x(b,"navigation").navigateTo(a.l,
c,"AMP-Redirect-To")}}}function pb(a,b,c){var d=b?"submit-success":"submit-error";c=oa(a.l,"amp-form."+d,t({response:c}));a.F.trigger(a.h,d,c,100)}function fb(a,b,c){return Promise.race([Promise.all(b),a.ja.promise(c)])}function V(a,b){var c=a.j;a.h.classList.remove("amp-form-"+c);a.h.classList.add("amp-form-"+b);sb(a,c);a.j=b;a.ha.forEach(function(a){"submitting"==b?a.setAttribute("disabled",""):a.removeAttribute("disabled")})}
function Y(a,b){var c=a.h.querySelector("["+a.j+"]");if(c){var d="rendered-message-"+a.T;c.setAttribute("role","alert");c.setAttribute("aria-labeledby",d);c.setAttribute("aria-live","assertive");a.w.hasTemplate(c)?a.w.findAndRenderTemplate(c,b).then(function(b){b.id=d;b.setAttribute("i-amphtml-rendered","");c.appendChild(b);var e=oa(a.l,"amp:dom-update",null,{bubbles:!0});c.dispatchEvent(e)}):(a.ga.mutateElement(c,function(){}),Promise.resolve())}}
function sb(a,b){if(a=a.h.querySelector("["+b+"]")){var c;if(null==D){b=a.ownerDocument;try{c=b.createElement("div");var d=b.createElement("div");c.appendChild(d);D=c.querySelector(":scope div")===d}catch(g){D=!1}}D?c=a.querySelector(":scope > [i-amphtml-rendered]"):(a.classList.add("i-amphtml-scoped"),c=a.querySelector(".i-amphtml-scoped > [i-amphtml-rendered]"),a.classList.remove("i-amphtml-scoped"));var e=c;e&&(c=e,c.parentElement&&c.parentElement.removeChild(c))}}l.ra=function(){return this.ea};
l.sa=function(){return this.na};function rb(a){E(a.querySelectorAll("input,select,textarea,fieldset"),function(a){return Z(a)});return Z(a)}function gb(a){var b=document.createElement("input"),c={},d;for(d in b.validity){c.validityState=d;var e=a.querySelectorAll("."+String(c.validityState).replace(ja,ka));E(e,function(a){return function(b){return b.classList.remove(a.validityState)}}(c));c={validityState:c.validityState}}}
function Z(a,b){b=void 0===b?!1:b;if(!a.checkValidity)return!0;var c=!1,d=a.classList.contains("user-valid")?"valid":a.classList.contains("user-invalid")?"invalid":"none",e=a.checkValidity();"valid"!=d&&e?(a.classList.add("user-valid"),a.classList.remove("user-invalid"),c="invalid"==d):"invalid"==d||e||(a.classList.add("user-invalid"),a.classList.remove("user-valid"),c=!0);if(a.validity)for(var g in a.validity)a.classList.toggle(g,a.validity[g]);if(b&&c){g=ma(a);for(var f=0;f<g.length;f++)Z(g[f]);
a.form&&Z(a.form)}return e}function U(a){Z(a,!0)}function tb(a){this.ma=ub(a).then(function(){return vb(a)})}tb.prototype.whenInitialized=function(){return this.ma};function ub(a){var b=new ea;ra(a,b.resolve);return b.promise}function vb(a){return a.whenReady().then(function(){wb(a.getRootNode().querySelectorAll("form"));xb(a.getRootNode())})}function wb(a){a&&E(a,function(a,c){var b=a.__AMP_FORM||null;b||new Ya(a,"amp-form-"+c)})}
function xb(a){a.addEventListener("amp:dom-update",function(){wb(a.querySelectorAll("form"))})}(function(a){a.registerServiceForDoc("amp-form",tb)})(self.AMP);
})});
//# sourceMappingURL=amp-form-0.1.js.map

