var BeaconLiveAdmin=(()=>{var Te=Object.create;var tt=Object.defineProperty;var Me=Object.getOwnPropertyDescriptor;var De=Object.getOwnPropertyNames;var Pe=Object.getPrototypeOf,Le=Object.prototype.hasOwnProperty;var Ie=(t,e,n)=>e in t?tt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ne=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),qt=(t,e)=>{for(var n in e)tt(t,n,{get:e[n],enumerable:!0})},Re=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of De(e))!Le.call(t,o)&&o!==n&&tt(t,o,{get:()=>e[o],enumerable:!(r=Me(e,o))||r.enumerable});return t};var qe=(t,e,n)=>(n=t!=null?Te(Pe(t)):{},Re(e||!t||!t.__esModule?tt(n,"default",{value:t,enumerable:!0}):n,t));var y=(t,e,n)=>(Ie(t,typeof e!="symbol"?e+"":e,n),n);var zt=Ne((Bt,et)=>{(function(t,e){"use strict";(function(){for(var u=0,f=["ms","moz","webkit","o"],_=0;_<f.length&&!t.requestAnimationFrame;++_)t.requestAnimationFrame=t[f[_]+"RequestAnimationFrame"],t.cancelAnimationFrame=t[f[_]+"CancelAnimationFrame"]||t[f[_]+"CancelRequestAnimationFrame"];t.requestAnimationFrame||(t.requestAnimationFrame=function(m,$){var w=new Date().getTime(),O=Math.max(0,16-(w-u)),S=t.setTimeout(function(){m(w+O)},O);return u=w+O,S}),t.cancelAnimationFrame||(t.cancelAnimationFrame=function(m){clearTimeout(m)})})();var n,r,o,i=null,a=null,l=null,c=function(u,f,_){u.addEventListener?u.addEventListener(f,_,!1):u.attachEvent?u.attachEvent("on"+f,_):u["on"+f]=_},s={autoRun:!0,barThickness:3,barColors:{0:"rgba(26,  188, 156, .9)",".25":"rgba(52,  152, 219, .9)",".50":"rgba(241, 196, 15,  .9)",".75":"rgba(230, 126, 34,  .9)","1.0":"rgba(211, 84,  0,   .9)"},shadowBlur:10,shadowColor:"rgba(0,   0,   0,   .6)",className:null},p=function(){n.width=t.innerWidth,n.height=s.barThickness*5;var u=n.getContext("2d");u.shadowBlur=s.shadowBlur,u.shadowColor=s.shadowColor;var f=u.createLinearGradient(0,0,n.width,0);for(var _ in s.barColors)f.addColorStop(_,s.barColors[_]);u.lineWidth=s.barThickness,u.beginPath(),u.moveTo(0,s.barThickness/2),u.lineTo(Math.ceil(r*n.width),s.barThickness/2),u.strokeStyle=f,u.stroke()},d=function(){n=e.createElement("canvas");var u=n.style;u.position="fixed",u.top=u.left=u.right=u.margin=u.padding=0,u.zIndex=100001,u.display="none",s.className&&n.classList.add(s.className),e.body.appendChild(n),c(t,"resize",p)},h={config:function(u){for(var f in u)s.hasOwnProperty(f)&&(s[f]=u[f])},show:function(u){if(!o)if(u){if(l)return;l=setTimeout(()=>h.show(),u)}else o=!0,a!==null&&t.cancelAnimationFrame(a),n||d(),n.style.opacity=1,n.style.display="block",h.progress(0),s.autoRun&&function f(){i=t.requestAnimationFrame(f),h.progress("+"+.05*Math.pow(1-Math.sqrt(r),2))}()},progress:function(u){return typeof u>"u"||(typeof u=="string"&&(u=(u.indexOf("+")>=0||u.indexOf("-")>=0?r:0)+parseFloat(u)),r=u>1?1:u,p()),r},hide:function(){clearTimeout(l),l=null,o&&(o=!1,i!=null&&(t.cancelAnimationFrame(i),i=null),function u(){if(h.progress("+.1")>=1&&(n.style.opacity-=.05,n.style.opacity<=.05)){n.style.display="none",a=null;return}a=t.requestAnimationFrame(u)}())}};typeof et=="object"&&typeof et.exports=="object"?et.exports=h:typeof define=="function"&&define.amd?define(function(){return h}):this.topbar=h}).call(Bt,window,document)});var bt=qe(zt());function Be(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ht(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Wt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ht(Object(n),!0).forEach(function(r){Be(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ht(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ze(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function He(t,e){if(t==null)return{};var n=ze(t,e),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function We(t,e){return Ve(t)||Ge(t,e)||Ue(t,e)||Je()}function Ve(t){if(Array.isArray(t))return t}function Ge(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var n=[],r=!0,o=!1,i=void 0;try{for(var a=t[Symbol.iterator](),l;!(r=(l=a.next()).done)&&(n.push(l.value),!(e&&n.length===e));r=!0);}catch(c){o=!0,i=c}finally{try{!r&&a.return!=null&&a.return()}finally{if(o)throw i}}return n}}function Ue(t,e){if(t){if(typeof t=="string")return Vt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vt(t,e)}}function Vt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ke(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Gt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Ut(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gt(Object(n),!0).forEach(function(r){Ke(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gt(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Xe(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduceRight(function(o,i){return i(o)},r)}}function V(t){return function e(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=t.length?t.apply(this,o):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return e.apply(n,[].concat(o,l))}}}function rt(t){return{}.toString.call(t).includes("Object")}function Ye(t){return!Object.keys(t).length}function G(t){return typeof t=="function"}function Qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ze(t,e){return rt(e)||T("changeType"),Object.keys(e).some(function(n){return!Qe(t,n)})&&T("changeField"),e}function tn(t){G(t)||T("selectorType")}function en(t){G(t)||rt(t)||T("handlerType"),rt(t)&&Object.values(t).some(function(e){return!G(e)})&&T("handlersType")}function nn(t){t||T("initialIsRequired"),rt(t)||T("initialType"),Ye(t)&&T("initialContent")}function rn(t,e){throw new Error(t[e]||t.default)}var on={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},T=V(rn)(on),nt={changes:Ze,selector:tn,handler:en,initial:nn};function sn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};nt.initial(t),nt.handler(e);var n={current:t},r=V(ln)(n,e),o=V(cn)(n),i=V(nt.changes)(t),a=V(an)(n);function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(p){return p};return nt.selector(s),s(n.current)}function c(s){Xe(r,o,i,a)(s)}return[l,c]}function an(t,e){return G(e)?e(t.current):e}function cn(t,e){return t.current=Ut(Ut({},t.current),e),e}function ln(t,e,n){return G(e)?e(t.current):Object.keys(n).forEach(function(r){var o;return(o=e[r])===null||o===void 0?void 0:o.call(e,t.current[r])}),n}var un={create:sn},fn=un,dn={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"}},pn=dn;function hn(t){return function e(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=t.length?t.apply(this,o):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return e.apply(n,[].concat(o,l))}}}var mn=hn;function _n(t){return{}.toString.call(t).includes("Object")}var gn=_n;function bn(t){return t||Jt("configIsRequired"),gn(t)||Jt("configType"),t.urls?(yn(),{paths:{vs:t.urls.monacoBase}}):t}function yn(){console.warn(Xt.deprecation)}function vn(t,e){throw new Error(t[e]||t.default)}var Xt={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Jt=mn(vn)(Xt),xn={config:bn},$n=xn,wn=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(i,a){return a(i)},o)}},kn=wn;function Yt(t,e){return Object.keys(e).forEach(function(n){e[n]instanceof Object&&t[n]&&Object.assign(e[n],Yt(t[n],e[n]))}),Wt(Wt({},t),e)}var En=Yt,Fn={type:"cancelation",msg:"operation is manually canceled"};function On(t){var e=!1,n=new Promise(function(r,o){t.then(function(i){return e?o(Fn):r(i)}),t.catch(o)});return n.cancel=function(){return e=!0},n}var yt=On,Sn=fn.create({config:pn,isInitialized:!1,resolve:null,reject:null,monaco:null}),Qt=We(Sn,2),U=Qt[0],ot=Qt[1];function jn(t){var e=$n.config(t),n=e.monaco,r=He(e,["monaco"]);ot(function(o){return{config:En(o.config,r),monaco:n}})}function Cn(){var t=U(function(e){var n=e.monaco,r=e.isInitialized,o=e.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!t.isInitialized){if(ot({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),yt(vt);if(window.monaco&&window.monaco.editor)return Zt(window.monaco),t.resolve(window.monaco),yt(vt);kn(An,Mn)(Dn)}return yt(vt)}function An(t){return document.body.appendChild(t)}function Tn(t){var e=document.createElement("script");return t&&(e.src=t),e}function Mn(t){var e=U(function(r){var o=r.config,i=r.reject;return{config:o,reject:i}}),n=Tn("".concat(e.config.paths.vs,"/loader.js"));return n.onload=function(){return t()},n.onerror=e.reject,n}function Dn(){var t=U(function(n){var r=n.config,o=n.resolve,i=n.reject;return{config:r,resolve:o,reject:i}}),e=window.require;e.config(t.config),e(["vs/editor/editor.main"],function(n){Zt(n),t.resolve(n)},function(n){t.reject(n)})}function Zt(t){U().monaco||ot({monaco:t})}function Pn(){return U(function(t){var e=t.monaco;return e})}var vt=new Promise(function(t,e){return ot({resolve:t,reject:e})}),Ln={config:jn,init:Cn,__getMonacoInstance:Pn},Kt=Ln,xt={background:"#282c34",default:"#c4cad6",lightRed:"#e06c75",blue:"#61afef",gray:"#8c92a3",green:"#98c379",purple:"#c678dd",red:"#be5046",teal:"#56b6c2",peach:"#d19a66"},In=t=>[{token:"",foreground:t.default},{token:"variable",foreground:t.lightRed},{token:"constant",foreground:t.blue},{token:"constant.character.escape",foreground:t.blue},{token:"comment",foreground:t.gray},{token:"number",foreground:t.blue},{token:"regexp",foreground:t.lightRed},{token:"type",foreground:t.lightRed},{token:"string",foreground:t.green},{token:"keyword",foreground:t.purple},{token:"operator",foreground:t.peach},{token:"delimiter.bracket.embed",foreground:t.red},{token:"sigil",foreground:t.teal},{token:"function",foreground:t.blue},{token:"function.call",foreground:t.default},{token:"emphasis",fontStyle:"italic"},{token:"strong",fontStyle:"bold"},{token:"keyword.md",foreground:t.lightRed},{token:"keyword.table",foreground:t.lightRed},{token:"string.link.md",foreground:t.blue},{token:"variable.md",foreground:t.teal},{token:"string.md",foreground:t.default},{token:"variable.source.md",foreground:t.default},{token:"tag",foreground:t.lightRed},{token:"metatag",foreground:t.lightRed},{token:"attribute.name",foreground:t.peach},{token:"attribute.value",foreground:t.green},{token:"string.key",foreground:t.lightRed},{token:"keyword.json",foreground:t.blue},{token:"operator.sql",foreground:t.purple}],Nn={base:"vs-dark",inherit:!1,rules:In(xt),colors:{"editor.background":xt.background,"editor.foreground":xt.default,"editorLineNumber.foreground":"#636d83","editorCursor.foreground":"#636d83","editor.selectionBackground":"#3e4451","editor.findMatchHighlightBackground":"#528bff3d","editorSuggestWidget.background":"#21252b","editorSuggestWidget.border":"#181a1f","editorSuggestWidget.selectedBackground":"#2c313a","input.background":"#1b1d23","input.border":"#181a1f","editorBracketMatch.border":"#282c34","editorBracketMatch.background":"#3e4451"}},Rn=class{constructor(t,e,n,r){this.el=t,this.path=e,this.value=n,this.opts=r,this.standalone_code_editor=null,this._onMount=[]}isMounted(){return!!this.standalone_code_editor}mount(){if(this.isMounted())throw new Error("The monaco editor is already mounted");this._mountEditor()}onMount(t){this._onMount.push(t)}dispose(){if(this.isMounted()){let t=this.standalone_code_editor.getModel();t&&t.dispose(),this.standalone_code_editor.dispose()}}_mountEditor(){this.opts.value=this.value,Kt.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs"}}),Kt.init().then(t=>{t.editor.defineTheme("default",Nn);let e=t.Uri.parse(this.path),n=this.opts.language,r=t.editor.createModel(this.value,n,e);this.opts.language=void 0,this.opts.model=r,this.standalone_code_editor=t.editor.create(this.el,this.opts),this._onMount.forEach(i=>i(t)),this._setScreenDependantEditorOptions(),new ResizeObserver(i=>{console.log("resizeObserver"),i.forEach(()=>{this.el.offsetHeight>0&&(this._setScreenDependantEditorOptions(),this.standalone_code_editor.layout())})}).observe(this.el),this.standalone_code_editor.onDidContentSizeChange(()=>{console.log("onDidContentSizeChanges");let i=this.standalone_code_editor.getContentHeight();this.el.style.height=`${i}px`})})}_setScreenDependantEditorOptions(){window.screen.width<768?this.standalone_code_editor.updateOptions({folding:!1,lineDecorationsWidth:16,lineNumbersMinChars:Math.floor(Math.log10(this.standalone_code_editor.getModel().getLineCount()))+3}):this.standalone_code_editor.updateOptions({folding:!0,lineDecorationsWidth:10,lineNumbersMinChars:5})}},qn=Rn,te={mounted(){let t=JSON.parse(this.el.dataset.opts);this.codeEditor=new qn(this.el,this.el.dataset.path,this.el.dataset.value,t),this.codeEditor.onMount(e=>{this.el.dispatchEvent(new CustomEvent("lme:editor_mounted",{detail:{hook:this,editor:this.codeEditor},bubbles:!0})),this.handleEvent("lme:change_language:"+this.el.dataset.path,n=>{let r=this.codeEditor.standalone_code_editor.getModel();r.getLanguageId()!==n.mimeTypeOrLanguageId&&e.editor.setModelLanguage(r,n.mimeTypeOrLanguageId)}),this.handleEvent("lme:set_value:"+this.el.dataset.path,n=>{this.codeEditor.standalone_code_editor.setValue(n.value)}),this.el.querySelectorAll("textarea").forEach(n=>{n.setAttribute("name","live_monaco_editor["+this.el.dataset.path+"]")}),this.el.removeAttribute("data-value"),this.el.removeAttribute("data-opts")}),this.codeEditor.isMounted()||this.codeEditor.mount()},destroyed(){this.codeEditor&&this.codeEditor.dispose()}};function Bn(t){if(!Array.isArray(t.default)||!Array.isArray(t.filenames))return t;let e={};for(let[n,r]of t.default.entries()){let o=r.default,i=t.filenames[n].replace("../svelte/","").replace(".svelte","");e[i]=o}return e}function J(t,e){let n=t.el.getAttribute(e);return n?JSON.parse(n):{}}function ee(t){t.parentNode?.removeChild(t)}function ne(t,e,n){t.insertBefore(e,n||null)}function re(){}function zn(t){let e={};for(let n in J(t,"data-slots")){let r=()=>({getElement(){let o=J(t,"data-slots")[n],i=document.createElement("div");return i.innerHTML=atob(o).trim(),i},update(){ee(this.savedElement),this.savedElement=this.getElement(),ne(this.savedTarget,this.savedElement,this.savedAnchor)},c:re,m(o,i){this.savedTarget=o,this.savedAnchor=i,this.savedElement=this.getElement(),ne(this.savedTarget,this.savedElement,this.savedAnchor)},d(o){o&&ee(this.savedElement)},l:re});e[n]=[r]}return e}function Hn(t){let e=J(t,"data-live-json");if(!Array.isArray(e))return e;let n={};for(let r of e){let o=window[r];o&&(n[r]=o)}return n}function it(t){return{...J(t,"data-props"),...Hn(t),live:t,$$slots:zn(t),$$scope:{}}}function Wn(t){return t.$$.ctx.find(e=>e?.default)}function oe(t){return t=Bn(t),{SvelteHook:{mounted(){let n=this.el.getAttribute("data-name");if(!n)throw new Error("Component name must be provided");let r=t[n];if(!r)throw new Error(`Unable to find ${n} component.`);for(let o of Object.keys(J(this,"data-live-json")))window.addEventListener(`${o}_initialized`,i=>this._instance.$set(it(this)),!1),window.addEventListener(`${o}_patched`,i=>this._instance.$set(it(this)),!1);this._instance=new r({target:this.el,props:it(this),hydrate:this.el.hasAttribute("data-ssr")})},updated(){this._instance.$set(it(this));let n=Wn(this._instance);for(let r in n)n[r][0]().update()},destroyed(){}}}}var Rt={};qt(Rt,{default:()=>_r,filenames:()=>gr});var Nt={};qt(Nt,{default:()=>hr});function j(){}var $t=t=>t;function wt(t){return t()}function st(){return Object.create(null)}function k(t){t.forEach(wt)}function K(t){return typeof t=="function"}function ie(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function se(t){return Object.keys(t).length===0}var ae=typeof window<"u",kt=ae?()=>window.performance.now():()=>Date.now(),X=ae?t=>requestAnimationFrame(t):j;var L=new Set;function ce(t){L.forEach(e=>{e.c(t)||(L.delete(e),e.f())}),L.size!==0&&X(ce)}function Et(t){let e;return L.size===0&&X(ce),{promise:new Promise(n=>{L.add(e={c:t,f:n})}),abort(){L.delete(e)}}}var Ft=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var I=class{constructor(e){y(this,"_listeners","WeakMap"in Ft?new WeakMap:void 0);y(this,"_observer");y(this,"options");this.options=e}observe(e,n){return this._listeners.set(e,n),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(e=>{for(let n of e)I.entries.set(n.target,n),this._listeners.get(n.target)?.(n)}))}};I.entries="WeakMap"in Ft?new WeakMap:void 0;var at=!1;function le(){at=!0}function ue(){at=!1}function Gn(t,e,n,r){for(;t<e;){let o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function Un(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){let c=[];for(let s=0;s<e.length;s++){let p=e[s];p.claim_order!==void 0&&c.push(p)}e=c}let n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let c=0;c<e.length;c++){let s=e[c].claim_order,p=(o>0&&e[n[o]].claim_order<=s?o+1:Gn(1,o,h=>e[n[h]].claim_order,s))-1;r[c]=n[p]+1;let d=p+1;n[d]=c,o=Math.max(d,o)}let i=[],a=[],l=e.length-1;for(let c=n[o]+1;c!=0;c=r[c-1]){for(i.push(e[c-1]);l>=c;l--)a.push(e[l]);l--}for(;l>=0;l--)a.push(e[l]);i.reverse(),a.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<a.length;c++){for(;s<i.length&&a[c].claim_order>=i[s].claim_order;)s++;let p=s<i.length?i[s]:null;t.insertBefore(a[c],p)}}function fe(t,e){t.appendChild(e)}function de(t,e,n){let r=ct(t);if(!r.getElementById(e)){let o=v("style");o.id=e,o.textContent=n,he(r,o)}}function ct(t){if(!t)return document;let e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pe(t){let e=v("style");return e.textContent="/* empty */",he(ct(t),e),e.sheet}function he(t,e){return fe(t.head||t,e),e.sheet}function x(t,e){if(at){for(Un(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ot(t,e,n){t.insertBefore(e,n||null)}function C(t,e,n){at&&!n?x(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function St(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function R(){return N(" ")}function jt(){return N("")}function lt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t){return t.dataset.svelteH}function E(t){return Array.from(t.childNodes)}function Jn(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function _e(t,e,n,r,o=!1){Jn(t);let i=(()=>{for(let a=t.claim_info.last_index;a<t.length;a++){let l=t[a];if(e(l)){let c=n(l);return c===void 0?t.splice(a,1):t[a]=c,o||(t.claim_info.last_index=a),l}}for(let a=t.claim_info.last_index-1;a>=0;a--){let l=t[a];if(e(l)){let c=n(l);return c===void 0?t.splice(a,1):t[a]=c,o?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=a,l}}return r()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function Kn(t,e,n,r){return _e(t,o=>o.nodeName===e,o=>{let i=[];for(let a=0;a<o.attributes.length;a++){let l=o.attributes[a];n[l.name]||i.push(l.name)}i.forEach(a=>o.removeAttribute(a))},()=>r(e))}function F(t,e,n){return Kn(t,e,n,v)}function ut(t,e){return _e(t,n=>n.nodeType===3,n=>{let r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>N(e),!0)}function q(t){return ut(t," ")}function ft(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function ge(t,e){let n=[],r=0;for(let o of e.childNodes)if(o.nodeType===8){let i=o.textContent.trim();i===`HEAD_${t}_END`?(r-=1,n.push(o)):i===`HEAD_${t}_START`&&(r+=1,n.push(o))}else r>0&&n.push(o);return n}function be(t){let e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}var dt=new Map,pt=0;function Xn(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Yn(t,e){let n={stylesheet:pe(e),rules:{}};return dt.set(t,n),n}function ht(t,e,n,r,o,i,a,l=0){let c=16.666/r,s=`{
`;for(let m=0;m<=1;m+=c){let $=e+(n-e)*i(m);s+=m*100+`%{${a($,1-$)}}
`}let p=s+`100% {${a(n,1-n)}}
}`,d=`__svelte_${Xn(p)}_${l}`,h=ct(t),{stylesheet:u,rules:f}=dt.get(h)||Yn(h,t);f[d]||(f[d]=!0,u.insertRule(`@keyframes ${d} ${p}`,u.cssRules.length));let _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${d} ${r}ms linear ${o}ms 1 both`,pt+=1,d}function Ct(t,e){let n=(t.style.animation||"").split(", "),r=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),o=n.length-r.length;o&&(t.style.animation=r.join(", "),pt-=o,pt||Qn())}function Qn(){X(()=>{pt||(dt.forEach(t=>{let{ownerNode:e}=t.stylesheet;e&&g(e)}),dt.clear())})}var B;function A(t){B=t}var D=[];var ye=[],H=[],ve=[],Zn=Promise.resolve(),Tt=!1;function xe(){Tt||(Tt=!0,Zn.then(mt))}function M(t){H.push(t)}var At=new Set,z=0;function mt(){if(z!==0)return;let t=B;do{try{for(;z<D.length;){let e=D[z];z++,A(e),tr(e.$$)}}catch(e){throw D.length=0,z=0,e}for(A(null),D.length=0,z=0;ye.length;)ye.pop()();for(let e=0;e<H.length;e+=1){let n=H[e];At.has(n)||(At.add(n),n())}H.length=0}while(D.length);for(;ve.length;)ve.pop()();Tt=!1,At.clear(),A(t)}function tr(t){if(t.fragment!==null){t.update(),k(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function $e(t){let e=[],n=[];H.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),H=e}var Y;function er(){return Y||(Y=Promise.resolve(),Y.then(()=>{Y=null})),Y}function Mt(t,e,n){t.dispatchEvent(ft(`${e?"intro":"outro"}${n}`))}var _t=new Set,Dt;function W(t,e){t&&t.i&&(_t.delete(t),t.i(e))}function gt(t,e,n,r){if(t&&t.o){if(_t.has(t))return;_t.add(t),Dt.c.push(()=>{_t.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}var nr={duration:0};function Pt(t,e,n,r){let i=e(t,n,{direction:"both"}),a=r?0:1,l=null,c=null,s=null,p;function d(){s&&Ct(t,s)}function h(f,_){let m=f.b-a;return _*=Math.abs(m),{a,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function u(f){let{delay:_=0,duration:m=300,easing:$=$t,tick:w=j,css:O}=i||nr,S={start:kt()+_,b:f};f||(S.group=Dt,Dt.r+=1),"inert"in t&&(f?p!==void 0&&(t.inert=p):(p=t.inert,t.inert=!0)),l||c?c=S:(O&&(d(),s=ht(t,a,f,m,_,$,O)),f&&w(0,1),l=h(S,m),M(()=>Mt(t,f,"start")),Et(Z=>{if(c&&Z>c.start&&(l=h(c,m),c=null,Mt(t,l.b,"start"),O&&(d(),s=ht(t,a,l.b,l.duration,0,$,i.css))),l){if(Z>=l.end)w(a=l.b,1-a),Mt(t,l.b,"end"),c||(l.b?d():--l.group.r||k(l.group.c)),l=null;else if(Z>=l.start){let Ae=Z-l.start;a=l.a+l.d*$(Ae/l.duration),w(a,1-a)}}return!!(l||c)}))}return{run(f){K(i)?er().then(()=>{i=i({direction:f?"in":"out"}),u(f)}):u(f)},end(){d(),l=c=null}}}function P(t){return t?.length!==void 0?t:Array.from(t)}var rr=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],or=new Set([...rr]);function sr(t,e,n){let{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),M(()=>{let i=t.$$.on_mount.map(wt).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...i):k(i),t.$$.on_mount=[]}),o.forEach(M)}function ar(t,e){let n=t.$$;n.fragment!==null&&($e(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function cr(t,e){t.$$.dirty[0]===-1&&(D.push(t),xe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function we(t,e,n,r,o,i,a=null,l=[-1]){let c=B;A(t);let s=t.$$={fragment:null,ctx:[],props:i,update:j,not_equal:o,bound:st(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:st(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};a&&a(s.root);let p=!1;if(s.ctx=n?n(t,e.props||{},(d,h,...u)=>{let f=u.length?u[0]:h;return s.ctx&&o(s.ctx[d],s.ctx[d]=f)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](f),p&&cr(t,d)),h}):[],s.update(),p=!0,k(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){le();let d=E(e.target);s.fragment&&s.fragment.l(d),d.forEach(g)}else s.fragment&&s.fragment.c();e.intro&&W(t.$$.fragment),sr(t,e.target,e.anchor),ue(),mt()}A(c)}var lr;typeof HTMLElement=="function"&&(lr=class extends HTMLElement{constructor(e,n,r){super();y(this,"$$ctor");y(this,"$$s");y(this,"$$c");y(this,"$$cn",!1);y(this,"$$d",{});y(this,"$$r",!1);y(this,"$$p_d",{});y(this,"$$l",{});y(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=n,r&&this.attachShadow({mode:"open"})}addEventListener(e,n,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){let o=this.$$c.$on(e,n);this.$$l_u.set(n,o)}super.addEventListener(e,n,r)}removeEventListener(e,n,r){if(super.removeEventListener(e,n,r),this.$$c){let o=this.$$l_u.get(n);o&&(o(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(i){return()=>{let a;return{c:function(){a=v("slot"),i!=="default"&&b(a,"name",i)},m:function(s,p){Ot(s,a,p)},d:function(s){s&&g(a)}}}};if(await Promise.resolve(),!this.$$cn)return;let n={},r=be(this);for(let i of this.$$s)i in r&&(n[i]=[e(i)]);for(let i of this.attributes){let a=this.$$g_p(i.name);a in this.$$d||(this.$$d[a]=Lt(a,i.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});let o=()=>{this.$$r=!0;for(let i in this.$$p_d)if(this.$$d[i]=this.$$c.$$.ctx[this.$$c.$$.props[i]],this.$$p_d[i].reflect){let a=Lt(i,this.$$d[i],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,a)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(let i in this.$$l)for(let a of this.$$l[i]){let l=this.$$c.$on(i,a);this.$$l_u.set(a,l)}this.$$l={}}}attributeChangedCallback(e,n,r){this.$$r||(e=this.$$g_p(e),this.$$d[e]=Lt(e,r,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function Lt(t,e,n,r){let o=n[t]?.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}var Q=class{constructor(){y(this,"$$");y(this,"$$set")}$destroy(){ar(this,1),this.$destroy=j}$on(e,n){if(!K(n))return j;let r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{let o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!se(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var ke="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ke);function ur(t){de(t,"svelte-1q6nykn","#left-sidebar.svelte-1q6nykn{z-index:1000}#backdrop.svelte-1q6nykn{z-index:999}")}function Ee(t,e,n){let r=t.slice();return r[2]=e[n],r}function Fe(t,e,n){let r=t.slice();return r[5]=e[n],r}function Oe(t){let e,n,r=sectionTitles[t[5].name]+"",o,i,a,l;function c(){return t[1](t[5])}return{c(){e=v("li"),n=v("div"),o=N(r),i=R(),this.h()},l(s){e=F(s,"LI",{class:!0,"data-test-id":!0});var p=E(e);n=F(p,"DIV",{class:!0});var d=E(n);o=ut(d,r),d.forEach(g),i=q(p),p.forEach(g),this.h()},h(){b(n,"class","pl-2"),b(e,"class","pb-1"),b(e,"data-test-id","nav-item")},m(s,p){C(s,e,p),x(e,n),x(n,o),x(e,i),a||(l=[lt(e,"mouseenter",c),lt(e,"mouseleave",collapseCategoryMenu)],a=!0)},p(s,p){t=s},d(s){s&&g(e),a=!1,k(l)}}}function Se(t){let e,n,r=t[2].name+"",o,i,a,l=P(t[2].items),c=[];for(let s=0;s<l.length;s+=1)c[s]=Oe(Fe(t,l,s));return{c(){e=v("li"),n=v("h5"),o=N(r),i=R();for(let s=0;s<c.length;s+=1)c[s].c();a=jt(),this.h()},l(s){e=F(s,"LI",{class:!0,"data-test-id":!0});var p=E(e);n=F(p,"H5",{class:!0});var d=E(n);o=ut(d,r),d.forEach(g),p.forEach(g),i=q(s);for(let h=0;h<c.length;h+=1)c[h].l(s);a=jt(),this.h()},h(){b(n,"class","uppercase"),b(e,"class","pb-1"),b(e,"data-test-id","nav-item")},m(s,p){C(s,e,p),x(e,n),x(n,o),C(s,i,p);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(s,p);C(s,a,p)},p(s,p){if(p&1){l=P(s[2].items);let d;for(d=0;d<l.length;d+=1){let h=Fe(s,l,d);c[d]?c[d].p(h,p):(c[d]=Oe(h),c[d].c(),c[d].m(a.parentNode,a))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},d(s){s&&(g(e),g(i),g(a)),St(c,s)}}}function fr(t){let e,n,r;return{c(){e=v("div"),this.h()},l(o){e=F(o,"DIV",{class:!0,id:!0,"data-test-id":!0}),E(e).forEach(g),this.h()},h(){b(e,"class","bg-black/50 absolute inset-0 z-50 svelte-1q6nykn"),b(e,"id","backdrop"),b(e,"data-test-id","backdrop")},m(o,i){C(o,e,i),r=!0},i(o){r||(o&&M(()=>{r&&(n||(n=Pt(e,fade,{duration:300},!0)),n.run(1))}),r=!0)},o(o){o&&(n||(n=Pt(e,fade,{duration:300},!1)),n.run(0)),r=!1},d(o){o&&g(e),o&&n&&n.end()}}}function dr(t){let e,n,r,o,i,a,l='<span class="text-lg">Beacon CMS</span>',c,s,p,d=P(t[0].menuCategories),h=[];for(let f=0;f<d.length;f+=1)h[f]=Se(Ee(t,d,f));let u=showExamples&&fr(t);return{c(){e=v("meta"),n=R(),r=v("div"),o=v("div"),i=v("div"),a=v("div"),a.innerHTML=l,c=R(),s=v("ul");for(let f=0;f<h.length;f+=1)h[f].c();p=R(),u&&u.c(),this.h()},l(f){let _=ge("svelte-brtbho",document.head);e=F(_,"META",{name:!0,content:!0}),_.forEach(g),n=q(f),r=F(f,"DIV",{class:!0,"data-test-id":!0});var m=E(r);o=F(m,"DIV",{class:!0,id:!0,"data-test-id":!0});var $=E(o);i=F($,"DIV",{class:!0});var w=E(i);a=F(w,"DIV",{class:!0,"data-test-id":!0,["data-svelte-h"]:!0}),me(a)!=="svelte-kosv7d"&&(a.innerHTML=l),c=q(w),s=F(w,"UL",{class:!0,"data-test-id":!0});var O=E(s);for(let S=0;S<h.length;S+=1)h[S].l(O);O.forEach(g),w.forEach(g),$.forEach(g),p=q(m),u&&u.l(m),m.forEach(g),this.h()},h(){document.title="Beacon UI Builder",b(e,"name","description"),b(e,"content","UI builder to compose beacon pages"),b(a,"class","border-b border-gray-100 border-solid py-4 px-4"),b(a,"data-test-id","logo"),b(s,"class","px-4"),b(s,"data-test-id","component-tree"),b(i,"class","sticky top-0"),b(o,"class","w-64 bg-white border-gray-100 border-solid border-r svelte-1q6nykn"),b(o,"id","left-sidebar"),b(o,"data-test-id","left-sidebar"),b(r,"class","flex min-h-screen bg-gray-100"),b(r,"data-test-id","app-container")},m(f,_){x(document.head,e),C(f,n,_),C(f,r,_),x(r,o),x(o,i),x(i,a),x(i,c),x(i,s);for(let m=0;m<h.length;m+=1)h[m]&&h[m].m(s,null);x(r,p),u&&u.m(r,null)},p(f,[_]){if(_&1){d=P(f[0].menuCategories);let m;for(m=0;m<d.length;m+=1){let $=Ee(f,d,m);h[m]?h[m].p($,_):(h[m]=Se($),h[m].c(),h[m].m(s,null))}for(;m<h.length;m+=1)h[m].d(1);h.length=d.length}},i(f){W(u)},o(f){gt(u)},d(f){f&&(g(n),g(r)),g(e),St(h,f),u&&u.d()}}}function pr(t){return[{menuCategories:[]},r=>void 0]}var It=class extends Q{constructor(e){super(),we(this,e,pr,dr,ie,{},ur)}},hr=It;var mr=[Nt],_r=mr,gr=["../svelte/components/UiBuilder.svelte"];var je={};je.CodeEditorHook=te;bt.default.config({barColors:{0:"#29d"},shadowColor:"rgba(0, 0, 0, .3)"});window.addEventListener("phx:page-loading-start",t=>bt.default.show(300));window.addEventListener("phx:page-loading-stop",t=>bt.default.hide());window.addEventListener("lme:editor_mounted",t=>{let e=t.detail.hook,n=t.detail.editor.standalone_code_editor,r=t.detail.editor.path+"_editor_lost_focus";n.onDidBlurEditorWidget(()=>{e.pushEvent(r,{value:n.getValue()})})});window.addEventListener("beacon_admin:clipcopy",t=>{let e=`${t.target.id}-copy-to-clipboard-result`,n=document.getElementById(e);"clipboard"in navigator?(t.target.tagName==="INPUT"?txt=t.target.value:txt=t.target.textContent,navigator.clipboard.writeText(txt).then(()=>{n.innerText="Copied to clipboard",n.classList.remove("invisible","text-red-500","opacity-0"),n.classList.add("text-green-500","opacity-100","-translate-y-2"),setTimeout(function(){n.classList.remove("text-green-500","opacity-100","-translate-y-2"),n.classList.add("invisible","text-red-500","opacity-0")},2e3)}).catch(()=>{n.innerText="Could not copy",n.classList.remove("invisible","text-green-500","opacity-0"),n.classList.add("text-red-500","opacity-100","-translate-y-2")})):alert("Sorry, your browser does not support clipboard copy.")});var br=document.querySelector("html").getAttribute("phx-socket")||"/live",yr=document.querySelector("meta[name='csrf-token']").getAttribute("content"),Ce=new LiveView.LiveSocket(br,Phoenix.Socket,{hooks:{...oe(Rt),...je},params:{_csrf_token:yr}});Ce.connect();window.liveSocket=Ce;})();
/**
 * @license MIT
 * topbar 2.0.0, 2023-02-04
 * https://buunguyen.github.io/topbar
 * Copyright (c) 2021 Buu Nguyen
 */