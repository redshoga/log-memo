!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,l,r,_,u,i,c={},s=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function a(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var o,l=arguments,r={};for(o in t)"key"!==o&&"ref"!==o&&(r[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(r.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===r[o]&&(r[o]=e.defaultProps[o]);return h(e,r,t&&t.key,t&&t.ref)}function h(e,t,n,l){var r={type:e,props:t,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return o.vnode&&o.vnode(r),r}function y(e){return e.children}function v(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function b(e){(!e.__d&&(e.__d=!0)&&l.push(e)&&!r++||u!==o.debounceRendering)&&((u=o.debounceRendering)||_)(k)}function k(){for(var e;r=l.length;)e=l.sort((function(e,t){return e.__v.__b-t.__v.__b})),l=[],e.some((function(e){var t,n,o,l,r,_;e.__d&&(r=(l=(t=e).__v).__e,(_=t.__P)&&(n=[],o=N(_,l,p({},l),t.__n,void 0!==_.ownerSVGElement,null,n,null==r?m(l):r),M(n,l),o!=r&&g(l)))}))}function S(e,t,n,o,l,r,_,u,i){var f,p,d,h,y,v,g,b=n&&n.__k||s,k=b.length;if(u==c&&(u=null!=r?r[0]:k?m(n,0):null),f=0,t.__k=w(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=b[f])||d&&n.key==d.key&&n.type===d.type)b[f]=void 0;else for(p=0;p<k;p++){if((d=b[p])&&n.key==d.key&&n.type===d.type){b[p]=void 0;break}d=null}if(h=N(e,n,d=d||c,o,l,r,_,u,i),(p=n.ref)&&d.ref!=p&&(g||(g=[]),d.ref&&g.push(d.ref,null,n),g.push(p,n.__c||h,n)),null!=h){var s;if(null==v&&(v=h),void 0!==n.__d)s=n.__d,n.__d=void 0;else if(r==d||h!=u||null==h.parentNode){e:if(null==u||u.parentNode!==e)e.appendChild(h),s=null;else{for(y=u,p=0;(y=y.nextSibling)&&p<k;p+=2)if(y==h)break e;e.insertBefore(h,u),s=u}"option"==t.type&&(e.value="")}u=void 0!==s?s:h.nextSibling,"function"==typeof t.type&&(t.__d=u)}else u&&d.__e==u&&u.parentNode!=e&&(u=m(d))}return f++,n})),t.__e=v,null!=r&&"function"!=typeof t.type)for(f=r.length;f--;)null!=r[f]&&a(r[f]);for(f=k;f--;)null!=b[f]&&E(b[f],b[f]);if(g)for(f=0;f<g.length;f++)T(g[f],g[++f],g[++f])}function w(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)w(e[o],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?h(null,e,null,null):null!=e.__e||null!=e.__c?h(e.type,e.props,e.key,null):e):e);return n}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===f.test(t)?n+"px":null==n?"":n}function P(e,t,n,o,l){var r,_,u,i,c;if(l?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(r=e.style,"string"==typeof n)r.cssText=n;else{if("string"==typeof o&&(r.cssText="",o=null),o)for(_ in o)n&&_ in n||x(r,_,"");if(n)for(u in n)o&&n[u]===o[u]||x(r,u,n[u])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(o||e.addEventListener(t,C,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,C,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!l&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function C(e){this.l[e.type](o.event?o.event(e):e)}function N(e,t,n,l,r,_,u,i,c){var s,f,a,d,h,m,g,b,k,w,x=t.type;if(void 0!==t.constructor)return null;(s=o.__b)&&s(t);try{e:if("function"==typeof x){if(b=t.props,k=(s=x.contextType)&&l[s.__c],w=s?k?k.props.value:s.__:l,n.__c?g=(f=t.__c=n.__c).__=f.__E:("prototype"in x&&x.prototype.render?t.__c=f=new x(b,w):(t.__c=f=new v(b,w),f.constructor=x,f.render=U),k&&k.sub(f),f.props=b,f.state||(f.state={}),f.context=w,f.__n=l,a=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=x.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=p({},f.__s)),p(f.__s,x.getDerivedStateFromProps(b,f.__s))),d=f.props,h=f.state,a)null==x.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==x.getDerivedStateFromProps&&b!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,w)){for(f.props=b,f.state=f.__s,f.__d=!1,f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&u.push(f),s=0;s<t.__k.length;s++)t.__k[s]&&(t.__k[s].__=t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,w),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(d,h,m)}))}f.context=w,f.props=b,f.state=f.__s,(s=o.__r)&&s(t),f.__d=!1,f.__v=t,f.__P=e,s=f.render(f.props,f.state,f.context),t.__k=null!=s&&s.type==y&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=f.getChildContext&&(l=p(p({},l),f.getChildContext())),a||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,h)),S(e,t,n,l,r,_,u,i,c),f.base=t.__e,f.__h.length&&u.push(f),g&&(f.__E=f.__=null),f.__e=!1}else t.__e=D(n.__e,t,n,l,r,_,u,c);(s=o.diffed)&&s(t)}catch(e){o.__e(e,t,n)}return t.__e}function M(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function D(e,t,n,o,l,r,_,u){var i,f,p,a,d,h=n.props,y=t.props;if(l="svg"===t.type||l,null!=r)for(i=0;i<r.length;i++)if(null!=(f=r[i])&&((null===t.type?3===f.nodeType:f.localName===t.type)||e==f)){e=f,r[i]=null;break}if(null==e){if(null===t.type)return document.createTextNode(y);e=l?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,y.is&&{is:y.is}),r=null}if(null===t.type)h!==y&&e.data!=y&&(e.data=y);else if(t!==n){if(null!=r&&(r=s.slice.call(e.childNodes)),p=(h=n.props||c).dangerouslySetInnerHTML,a=y.dangerouslySetInnerHTML,!u){if(h===c)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||p)&&(a&&p&&a.__html==p.__html||(e.innerHTML=a&&a.__html||""))}(function(e,t,n,o,l){var r;for(r in n)r in t||P(e,r,null,n[r],o);for(r in t)l&&"function"!=typeof t[r]||"value"===r||"checked"===r||n[r]===t[r]||P(e,r,t[r],n[r],o)})(e,y,h,l,u),t.__k=t.props.children,a||S(e,t,n,o,"foreignObject"!==t.type&&l,r,_,c,u),u||("value"in y&&void 0!==y.value&&y.value!==e.value&&(e.value=null==y.value?"":y.value),"checked"in y&&void 0!==y.checked&&y.checked!==e.checked&&(e.checked=y.checked))}return e}function T(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function E(e,t,n){var l,r,_;if(o.unmount&&o.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||T(l,null,t)),n||"function"==typeof e.type||(n=null!=(r=e.__e)),e.__e=e.__d=void 0,null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){o.__e(e,t)}l.base=l.__P=null}if(l=e.__k)for(_=0;_<l.length;_++)l[_]&&E(l[_],t,n);null!=r&&a(r)}function U(e,t,n){return this.constructor(e,n)}function L(e,t,n){var l,r,_;o.__&&o.__(e,t),r=(l=n===i)?null:n&&n.__k||t.__k,e=d(y,null,[e]),_=[],N(t,(l?t:n||t).__k=e,r||c,c,void 0!==t.ownerSVGElement,n&&!l?[n]:r?null:s.slice.call(t.childNodes),_,n||c,l),M(_,e)}o={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return b(n.__E=n)}catch(t){e=t}throw e}},v.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},v.prototype.render=y,l=[],r=0,_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=c,L(d("div",{id:"foo"},d("span",null,"Hello, world!!"),d("button",{onClick:function(e){return alert("hi!")}},"Click Me")),document.body)}]);