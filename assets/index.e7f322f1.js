(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))_(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&_(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var R,p,le,T,X,H={},se=[],ve=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function w(e,t){for(var n in t)e[n]=t[n];return e}function ie(e){var t=e.parentNode;t&&t.removeChild(e)}function me(e,t,n){var _,l,o,i={};for(o in t)o=="key"?_=t[o]:o=="ref"?l=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?R.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return U(e,i,_,l,null)}function U(e,t,n,_,l){var o={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++le:l};return l==null&&p.vnode!=null&&p.vnode(o),o}function z(e){return e.children}function W(e,t){this.props=e,this.context=t}function A(e,t){if(t==null)return e.__?A(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?A(e):null}function ce(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ce(e)}}function Y(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!$.__r++||X!==p.debounceRendering)&&((X=p.debounceRendering)||setTimeout)($)}function $(){for(var e;$.__r=T.length;)e=T.sort(function(t,n){return t.__v.__b-n.__v.__b}),T=[],e.some(function(t){var n,_,l,o,i,a;t.__d&&(i=(o=(n=t).__v).__e,(a=n.__P)&&(_=[],(l=w({},o)).__v=o.__v+1,q(a,o,l,n.__n,a.ownerSVGElement!==void 0,o.__h!=null?[i]:null,_,i==null?A(o):i,o.__h),de(_,o),o.__e!=i&&ce(o)))})}function fe(e,t,n,_,l,o,i,a,u,h){var r,y,c,s,f,C,v,g=_&&_.__k||se,x=g.length;for(n.__k=[],r=0;r<t.length;r++)if((s=n.__k[r]=(s=t[r])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?U(null,s,null,null,s):Array.isArray(s)?U(z,{children:s},null,null,null):s.__b>0?U(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(c=g[r])===null||c&&s.key==c.key&&s.type===c.type)g[r]=void 0;else for(y=0;y<x;y++){if((c=g[y])&&s.key==c.key&&s.type===c.type){g[y]=void 0;break}c=null}q(e,s,c=c||H,l,o,i,a,u,h),f=s.__e,(y=s.ref)&&c.ref!=y&&(v||(v=[]),c.ref&&v.push(c.ref,null,s),v.push(y,s.__c||f,s)),f!=null?(C==null&&(C=f),typeof s.type=="function"&&s.__k===c.__k?s.__d=u=ae(s,u,e):u=ue(e,s,c,g,f,u),typeof n.type=="function"&&(n.__d=u)):u&&c.__e==u&&u.parentNode!=e&&(u=A(c))}for(n.__e=C,r=x;r--;)g[r]!=null&&(typeof n.type=="function"&&g[r].__e!=null&&g[r].__e==n.__d&&(n.__d=A(_,r+1)),he(g[r],g[r]));if(v)for(r=0;r<v.length;r++)pe(v[r],v[++r],v[++r])}function ae(e,t,n){for(var _,l=e.__k,o=0;l&&o<l.length;o++)(_=l[o])&&(_.__=e,t=typeof _.type=="function"?ae(_,t,n):ue(n,_,_,l,_.__e,t));return t}function ue(e,t,n,_,l,o){var i,a,u;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(l),i=null;else{for(a=o,u=0;(a=a.nextSibling)&&u<_.length;u+=2)if(a==l)break e;e.insertBefore(l,o),i=o}return i!==void 0?i:l.nextSibling}function ge(e,t,n,_,l){var o;for(o in n)o==="children"||o==="key"||o in t||J(e,o,null,n[o],_);for(o in t)l&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||J(e,o,t[o],n[o],_)}function Z(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||ve.test(t)?n:n+"px"}function J(e,t,n,_,l){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||Z(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||Z(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_||e.addEventListener(t,o?te:ee,o):e.removeEventListener(t,o?te:ee,o);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function ee(e){this.l[e.type+!1](p.event?p.event(e):e)}function te(e){this.l[e.type+!0](p.event?p.event(e):e)}function q(e,t,n,_,l,o,i,a,u){var h,r,y,c,s,f,C,v,g,x,L,Q,I,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(u=n.__h,a=t.__e=n.__e,t.__h=null,o=[a]),(h=p.__b)&&h(t);try{e:if(typeof k=="function"){if(v=t.props,g=(h=k.contextType)&&_[h.__c],x=h?g?g.props.value:h.__:_,n.__c?C=(r=t.__c=n.__c).__=r.__E:("prototype"in k&&k.prototype.render?t.__c=r=new k(v,x):(t.__c=r=new W(v,x),r.constructor=k,r.render=ke),g&&g.sub(r),r.props=v,r.state||(r.state={}),r.context=x,r.__n=_,y=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),k.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=w({},r.__s)),w(r.__s,k.getDerivedStateFromProps(v,r.__s))),c=r.props,s=r.state,y)k.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==c&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(v,x),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(v,r.__s,x)===!1||t.__v===n.__v){r.props=v,r.state=r.__s,t.__v!==n.__v&&(r.__d=!1),r.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(O){O&&(O.__=t)}),r.__h.length&&i.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(v,r.__s,x),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(c,s,f)})}if(r.context=x,r.props=v,r.__v=t,r.__P=e,L=p.__r,Q=0,"prototype"in k&&k.prototype.render)r.state=r.__s,r.__d=!1,L&&L(t),h=r.render(r.props,r.state,r.context);else do r.__d=!1,L&&L(t),h=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++Q<25);r.state=r.__s,r.getChildContext!=null&&(_=w(w({},_),r.getChildContext())),y||r.getSnapshotBeforeUpdate==null||(f=r.getSnapshotBeforeUpdate(c,s)),I=h!=null&&h.type===z&&h.key==null?h.props.children:h,fe(e,Array.isArray(I)?I:[I],t,n,_,l,o,i,a,u),r.base=t.__e,t.__h=null,r.__h.length&&i.push(r),C&&(r.__E=r.__=null),r.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=be(n.__e,t,n,_,l,o,i,u);(h=p.diffed)&&h(t)}catch(O){t.__v=null,(u||o!=null)&&(t.__e=a,t.__h=!!u,o[o.indexOf(a)]=null),p.__e(O,t,n)}}function de(e,t){p.__c&&p.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(_){_.call(n)})}catch(_){p.__e(_,n.__v)}})}function be(e,t,n,_,l,o,i,a){var u,h,r,y=n.props,c=t.props,s=t.type,f=0;if(s==="svg"&&(l=!0),o!=null){for(;f<o.length;f++)if((u=o[f])&&"setAttribute"in u==!!s&&(s?u.localName===s:u.nodeType===3)){e=u,o[f]=null;break}}if(e==null){if(s===null)return document.createTextNode(c);e=l?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,c.is&&c),o=null,a=!1}if(s===null)y===c||a&&e.data===c||(e.data=c);else{if(o=o&&R.call(e.childNodes),h=(y=n.props||H).dangerouslySetInnerHTML,r=c.dangerouslySetInnerHTML,!a){if(o!=null)for(y={},f=0;f<e.attributes.length;f++)y[e.attributes[f].name]=e.attributes[f].value;(r||h)&&(r&&(h&&r.__html==h.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(ge(e,c,y,l,a),r)t.__k=[];else if(f=t.props.children,fe(e,Array.isArray(f)?f:[f],t,n,_,l&&s!=="foreignObject",o,i,o?o[0]:n.__k&&A(n,0),a),o!=null)for(f=o.length;f--;)o[f]!=null&&ie(o[f]);a||("value"in c&&(f=c.value)!==void 0&&(f!==e.value||s==="progress"&&!f||s==="option"&&f!==y.value)&&J(e,"value",f,y.value,!1),"checked"in c&&(f=c.checked)!==void 0&&f!==e.checked&&J(e,"checked",f,y.checked,!1))}return e}function pe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){p.__e(_,n)}}function he(e,t,n){var _,l;if(p.unmount&&p.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||pe(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){p.__e(o,t)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(l=0;l<_.length;l++)_[l]&&he(_[l],t,typeof e.type!="function");n||e.__e==null||ie(e.__e),e.__=e.__e=e.__d=void 0}function ke(e,t,n){return this.constructor(e,n)}function xe(e,t,n){var _,l,o;p.__&&p.__(e,t),l=(_=typeof n=="function")?null:n&&n.__k||t.__k,o=[],q(t,e=(!_&&n||t).__k=me(z,null,[e]),l||H,H,t.ownerSVGElement!==void 0,!_&&n?[n]:l?null:t.firstChild?R.call(t.childNodes):null,o,!_&&n?n:l?l.__e:t.firstChild,_),de(o,e)}R=se.slice,p={__e:function(e,t,n,_){for(var l,o,i;t=t.__;)if((l=t.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(e)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,_||{}),i=l.__d),i)return l.__E=l}catch(a){e=a}throw e}},le=0,W.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},n),this.props)),e&&w(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Y(this))},W.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Y(this))},W.prototype.render=z,T=[],$.__r=0;function ye(e){var t,n,_="";if(typeof e=="string"||typeof e=="number")_+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ye(e[t]))&&(_&&(_+=" "),_+=n);else for(t in e)e[t]&&(_&&(_+=" "),_+=t);return _}function d(){for(var e=0,t,n,_="";e<arguments.length;)(t=arguments[e++])&&(n=ye(t))&&(_&&(_+=" "),_+=n);return _}const V=d,ne=d,oe=d,G=d,re=d,j=d,we=d,Ne=d,Se=d,M=d,Ce=d,B=d,Ee=d,E=d,Pe=d,N=d,Ae=d,D=d,K=d,Le=d,F=d,Te=d,P=d,S=d,b=d;var Me=0;function m(e,t,n,_,l){var o,i,a={};for(i in t)i=="ref"?o=t[i]:a[i]=t[i];var u={type:e,props:a,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Me,__source:l,__self:_};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)a[i]===void 0&&(a[i]=o[i]);return p.vnode&&p.vnode(u),u}const De=b(S("text-white")),Ie=b(S("text-gray-300")),Oe=b(De,Te("text-3xl","md:text-6xl"),P("font-bold"),K("text-center"));function Fe({children:e}){return m("p",{className:Oe,children:e})}b(Ie,K("text-center"));const Ue=(e,t,n)=>b(V({"bg-blue-500":!t,"bg-red-500":t,"hover:bg-blue-700":!e&&!t,"hover:bg-red-700":!e&&t,"bg-gray-500":e}),S("text-white"),P("font-bold"),M("px-4","py-2"),G("rounded"),Ee({"cursor-not-allowed":e}),N({"w-full":n}));function _e({title:e,onClick:t,disabled:n,fullSize:_,colorRed:l}){return m("button",{className:Ue(n,l,_),onClick:()=>{n||t==null||t()},children:e})}const We=b(E("flex"),j("flex-col"),Se("justify-start"),Ne("items-center"),B("space-y-2"),D("h-fit"));function je(){return m("div",{className:We,children:[m(Fe,{children:"Dead Simple JSON formatter that works in your browser"}),m("div",{className:b(E("flex"),j("flex-col"),B("space-y-2"),D("h-fit"),N("w-full")),children:[m("div",{className:b(E("flex"),j("flex-col"),B("space-y-2"),N("w-fit")),children:[m("div",{className:b(E("flex"),j("flex-row"),N("w-fit"),B("space-x-2")),children:[m(_e,{title:"Format",onClick:()=>{try{const e=document.getElementById("1").value;if(console.log(e),e=="")return;const t=JSON.parse(e),n=document.getElementById("2").value,_=Number(n),l=JSON.stringify(t,null,_&&_<=20?_:2);document.getElementById("1").value=l}catch(e){console.log(e),window.alert(e)}}}),m(_e,{title:"UnFormat",onClick:()=>{try{const e=document.getElementById("1").value;if(e=="")return;const t=JSON.parse(e),n=JSON.stringify(t);document.getElementById("1").value=n}catch(e){console.log(e),window.alert(e)}}})]}),m("input",{id:"2",placeholder:"Nr. of spaces",className:b(S("text-white"),F("font-mono"),P("font-bold"),V("bg-gray-900"),M("p-2"),K("placeholder:text-center"),N("w-full"))})]}),m("div",{className:b(E("flex"),N("w-full"),D("h-fit"),ne("border-dashed"),oe("border-white"),re("border-2"),G("rounded"),M("p-2")),children:m("textarea",{id:"1",className:b(E("flex"),N("w-full"),D("h-screen"),Le("whitespace-pre-wrap"),we("flex-wrap"),V("bg-gray-900"),S("text-white"),F("font-mono"),P("font-bold"))})})]}),m("h4",{className:b(S("text-white"),F("font-mono"),P("font-bold")),children:"Made with \u2764\uFE0F from Moldova"}),m("a",{className:b(S("text-white"),ne("border-dashed"),oe("border-white"),re("border-2"),G("rounded"),M("p-2"),F("font-mono"),P("font-bold")),href:"https://github.com/Moldoteck/jjson",children:"Source"})]})}const Be=b(Pe("container"),Ce("mx-auto"),M("pb-10","py-4"),Ae("max-w-4xl"),D("h-fit"));function He({children:e}){return m("div",{className:Be,children:e})}function $e(){return m(He,{children:m(je,{})})}xe(m($e,{}),document.getElementById("root"));
