/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var S;const R=window,y=R.trustedTypes,O=y?y.createPolicy("lit-html",{createHTML:o=>o}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,M="?"+A,Q=`<${M}>`,g=document,T=(o="")=>g.createComment(o),w=o=>o===null||typeof o!="object"&&typeof o!="function",V=Array.isArray,j=o=>V(o)||typeof o?.[Symbol.iterator]=="function",b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,B=/>/g,v=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),k=/'/g,L=/"/g,z=/^(?:script|style|textarea|title)$/i,m=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),W=new WeakMap,X=(o,t,e)=>{var i,n;const r=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let s=r._$litPart$;if(s===void 0){const a=(n=e?.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new x(t.insertBefore(T(),a),a,void 0,e??{})}return s._$AI(o),s},f=g.createTreeWalker(g,129,null,!1),G=(o,t)=>{const e=o.length-1,i=[];let n,r=t===2?"<svg>":"",s=b;for(let l=0;l<e;l++){const h=o[l];let p,d,c=-1,$=0;for(;$<h.length&&(s.lastIndex=$,d=s.exec(h),d!==null);)$=s.lastIndex,s===b?d[1]==="!--"?s=U:d[1]!==void 0?s=B:d[2]!==void 0?(z.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=v):d[3]!==void 0&&(s=v):s===v?d[0]===">"?(s=n??b,c=-1):d[1]===void 0?c=-2:(c=s.lastIndex-d[2].length,p=d[1],s=d[3]===void 0?v:d[3]==='"'?L:k):s===L||s===k?s=v:s===U||s===B?s=b:(s=v,n=void 0);const I=s===v&&o[l+1].startsWith("/>")?" ":"";r+=s===b?h+Q:c>=0?(i.push(p),h.slice(0,c)+"$lit$"+h.slice(c)+A+I):h+A+(c===-2?(i.push(void 0),l):I)}const a=r+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[O!==void 0?O.createHTML(a):a,i]};class N{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[h,p]=G(t,e);if(this.el=N.createElement(h,i),f.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(n=f.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(A)){const $=p[s++];if(d.push(c),$!==void 0){const I=n.getAttribute($.toLowerCase()+"$lit$").split(A),P=/([.?@])?(.*)/.exec($);l.push({type:1,index:r,name:P[2],strings:I,ctor:P[1]==="."?F:P[1]==="?"?Y:P[1]==="@"?q:C})}else l.push({type:6,index:r})}for(const c of d)n.removeAttribute(c)}if(z.test(n.tagName)){const d=n.textContent.split(A),c=d.length-1;if(c>0){n.textContent=y?y.emptyScript:"";for(let $=0;$<c;$++)n.append(d[$],T()),f.nextNode(),l.push({type:2,index:++r});n.append(d[c],T())}}}else if(n.nodeType===8)if(n.data===M)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(A,d+1))!==-1;)l.push({type:7,index:r}),d+=A.length-1}r++}}static createElement(t,e){const i=g.createElement("template");return i.innerHTML=t,i}}function _(o,t,e=o,i){var n,r,s,a;if(t===m)return t;let l=i!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[i]:e._$Cu;const h=w(t)?void 0:t._$litDirective$;return l?.constructor!==h&&((r=l?._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(o),l._$AT(o,e,i)),i!==void 0?((s=(a=e)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=_(o,l._$AS(o,t.values),l,i)),t}class Z{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,r=((e=t?.creationScope)!==null&&e!==void 0?e:g).importNode(i,!0);f.currentNode=r;let s=f.nextNode(),a=0,l=0,h=n[0];for(;h!==void 0;){if(a===h.index){let p;h.type===2?p=new x(s,s.nextSibling,this,t):h.type===1?p=new h.ctor(s,h.name,h.strings,this,t):h.type===6&&(p=new J(s,this,t)),this.v.push(p),h=n[++l]}a!==h?.index&&(s=f.nextNode(),a++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class x{constructor(t,e,i,n){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$C_=(r=n?.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_(this,t,e),w(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==m&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):j(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==u&&w(this._$AH)?this._$AA.nextSibling.data=t:this.k(g.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=N.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const s=new Z(r,this),a=s.p(this.options);s.m(i),this.k(a),this._$AH=s}}_$AC(t){let e=W.get(t.strings);return e===void 0&&W.set(t.strings,e=new N(t)),e}O(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new x(this.S(T()),this.S(T()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$C_=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class C{constructor(t,e,i,n,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let s=!1;if(r===void 0)t=_(this,t,e,0),s=!w(t)||t!==this._$AH&&t!==m,s&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=_(this,a[i+l],e,l),h===m&&(h=this._$AH[l]),s||(s=!w(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}s&&!n&&this.P(t)}P(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class F extends C{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===u?void 0:t}}const tt=y?y.emptyScript:"";class Y extends C{constructor(){super(...arguments),this.type=4}P(t){t&&t!==u?this.element.setAttribute(this.name,tt):this.element.removeAttribute(this.name)}}class q extends C{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=_(this,t,e,0))!==null&&i!==void 0?i:u)===m)return;const n=this._$AH,r=t===u&&n!==u||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==u&&(n===u||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){_(this,t)}}const et={A:"$lit$",M:A,C:M,L:1,R:G,D:Z,V:j,I:_,H:x,N:C,U:Y,B:q,F,W:J},D=R.litHtmlPolyfillSupport;D?.(N,x),((S=R.litHtmlVersions)!==null&&S!==void 0?S:R.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=o=>o===null||typeof o!="object"&&typeof o!="function",nt=(o,t)=>t===void 0?o?._$litType$!==void 0:o?._$litType$===t,st=o=>o.strings===void 0;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:rt,V:ot,I:K,H:E,W:lt}=et,at=(o,t,e={})=>{if(t._$litPart$!==void 0)throw Error("container already contains a live render");let i,n;const r=[],s=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT,null,!1);let a;for(;(a=s.nextNode())!==null;){const l=a.data;if(l.startsWith("lit-part")){if(r.length===0&&i!==void 0)throw Error("there must be only one root part per container");n=ht(o,a,r,e),i!=null||(i=n)}else if(l.startsWith("lit-node"))ct(a,r,e);else if(l.startsWith("/lit-part")){if(r.length===1&&n!==i)throw Error("internal error");n=dt(a,n,r)}}console.assert(i!==void 0,"there should be exactly one root part in a render container"),t._$litPart$=i},ht=(o,t,e,i)=>{let n,r;if(e.length===0)r=new E(t,null,void 0,i),n=o;else{const s=e[e.length-1];if(s.type==="template-instance")r=new E(t,null,s.instance,i),s.instance.v.push(r),n=s.result.values[s.instancePartIndex++],s.templatePartIndex++;else if(s.type==="iterable"){r=new E(t,null,s.part,i);const a=s.iterator.next();if(a.done)throw n=void 0,s.done=!0,Error("Unhandled shorter than expected iterable");n=a.value,s.part._$AH.push(r)}else r=new E(t,null,s.part,i)}if(n=K(r,n),n===m)e.push({part:r,type:"leaf"});else if(it(n))e.push({part:r,type:"leaf"}),r._$AH=n;else if(nt(n)){const s="lit-part "+pt(n);if(t.data!==s)throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");{const a=E.prototype._$AC(n),l=new rt(a,r);e.push({type:"template-instance",instance:l,part:r,templatePartIndex:0,instancePartIndex:0,result:n}),r._$AH=l}}else ot(n)?(e.push({part:r,type:"iterable",value:n,iterator:n[Symbol.iterator](),done:!1}),r._$AH=[]):(e.push({part:r,type:"leaf"}),r._$AH=n??"");return r},dt=(o,t,e)=>{if(t===void 0)throw Error("unbalanced part marker");t._$AB=o;const i=e.pop();if(i.type==="iterable"&&!i.iterator.next().done)throw Error("unexpected longer than expected iterable");if(e.length>0)return e[e.length-1].part},ct=(o,t,e)=>{var i;const n=/lit-node (\d+)/.exec(o.data),r=parseInt(n[1]),s=(i=o.previousElementSibling)!==null&&i!==void 0?i:o.parentElement;if(s===null)throw Error("could not find node for attribute parts");s.removeAttribute("defer-hydration");const a=t[t.length-1];if(a.type!=="template-instance")throw Error("internal error");{const l=a.instance;for(;;){const h=l._$AD.parts[a.templatePartIndex];if(h===void 0||h.type!==H.ATTRIBUTE&&h.type!==H.ELEMENT||h.index!==r)break;if(h.type===H.ATTRIBUTE){const p=new h.ctor(s,h.name,h.strings,a.instance,e),d=st(p)?a.result.values[a.instancePartIndex]:a.result.values,c=!(p.type===H.EVENT||p.type===H.PROPERTY);p._$AI(d,p,a.instancePartIndex,c),a.instancePartIndex+=h.strings.length-1,l.v.push(p)}else{const p=new lt(s,a.instance,e);K(p,a.result.values[a.instancePartIndex++]),l.v.push(p)}a.templatePartIndex++}}},pt=o=>{const t=new Uint32Array(2).fill(5381);for(const e of o.strings)for(let i=0;i<e.length;i++)t[i%2]=33*t[i%2]^e.charCodeAt(i);return btoa(String.fromCharCode(...new Uint8Array(t.buffer)))};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */globalThis.litElementHydrateSupport=({LitElement:o})=>{const t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o),"observedAttributes").get;Object.defineProperty(o,"observedAttributes",{get(){return[...t.call(this),"defer-hydration"]}});const e=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,a,l){s==="defer-hydration"&&l===null&&i.call(this),e.call(this,s,a,l)};const i=o.prototype.connectedCallback;o.prototype.connectedCallback=function(){this.hasAttribute("defer-hydration")||i.call(this)};const n=o.prototype.createRenderRoot;o.prototype.createRenderRoot=function(){return this.shadowRoot?(this._$AG=!0,this.shadowRoot):n.call(this)};const r=Object.getPrototypeOf(o.prototype).update;o.prototype.update=function(s){const a=this.render();r.call(this,s),this._$AG?(this._$AG=!1,at(a,this.renderRoot,this.renderOptions)):X(a,this.renderRoot,this.renderOptions)}};
