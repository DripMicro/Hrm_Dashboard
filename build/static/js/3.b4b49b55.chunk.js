(this["webpackJsonp@thimble/hrm-system-react"]=this["webpackJsonp@thimble/hrm-system-react"]||[]).push([[3],{556:function(e,t,n){"use strict";var r=n(2),o=n(4),i=n(0),a=(n(5),n(8)),s=n(401),c=n(7),f=n(10),u=n(433),p=n(366),l=n(402);function d(e){return Object(p.a)("MuiCard",e)}Object(l.a)("MuiCard",["root"]);var m=n(1);const h=Object(c.a)(u.a,{},{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root||{}})((()=>({overflow:"hidden"}))),v=i.forwardRef((function(e,t){const n=Object(f.a)({props:e,name:"MuiCard"}),{className:i,raised:c=!1}=n,u=Object(o.a)(n,["className","raised"]),p=Object(r.a)({},n,{raised:c}),l=(e=>{const{classes:t}=e;return Object(s.a)({root:["root"]},d,t)})(p);return Object(m.jsx)(h,Object(r.a)({className:Object(a.a)(l.root,i),elevation:c?8:void 0,ref:t,styleProps:p},u))}));t.a=v},868:function(e,t,n){"use strict";var r=n(2),o=n(4),i=n(0);n(5);function a(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function s(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function c(e){var t=s(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function f(e){return e instanceof s(e).Element||e instanceof Element}function u(e){return e instanceof s(e).HTMLElement||e instanceof HTMLElement}function p(e){return"undefined"!==typeof ShadowRoot&&(e instanceof s(e).ShadowRoot||e instanceof ShadowRoot)}function l(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return((f(e)?e.ownerDocument:e.document)||window.document).documentElement}function m(e){return a(d(e)).left+c(e).scrollLeft}function h(e){return s(e).getComputedStyle(e)}function v(e){var t=h(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function b(e,t,n){void 0===n&&(n=!1);var r=d(t),o=a(e),i=u(t),f={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==l(t)||v(r))&&(f=function(e){return e!==s(e)&&u(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:c(e);var t}(t)),u(t)?((p=a(t)).x+=t.clientLeft,p.y+=t.clientTop):r&&(p.x=m(r))),{x:o.left+f.scrollLeft-p.x,y:o.top+f.scrollTop-p.y,width:o.width,height:o.height}}function y(e){var t=a(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function g(e){return"html"===l(e)?e:e.assignedSlot||e.parentNode||(p(e)?e.host:null)||d(e)}function O(e){return["html","body","#document"].indexOf(l(e))>=0?e.ownerDocument.body:u(e)&&v(e)?e:O(g(e))}function w(e,t){var n;void 0===t&&(t=[]);var r=O(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=s(r),a=o?[i].concat(i.visualViewport||[],v(r)?r:[]):r,c=t.concat(a);return o?c:c.concat(w(g(a)))}function x(e){return["table","td","th"].indexOf(l(e))>=0}function j(e){return u(e)&&"fixed"!==h(e).position?e.offsetParent:null}function E(e){for(var t=s(e),n=j(e);n&&x(n)&&"static"===h(n).position;)n=j(n);return n&&("html"===l(n)||"body"===l(n)&&"static"===h(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&u(e)&&"fixed"===h(e).position)return null;for(var n=g(e);u(n)&&["html","body"].indexOf(l(n))<0;){var r=h(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var D="top",k="bottom",M="right",P="left",R="auto",L=[D,k,M,P],B="start",W="end",A="viewport",C="popper",H=L.reduce((function(e,t){return e.concat([t+"-"+B,t+"-"+W])}),[]),T=[].concat(L,[R]).reduce((function(e,t){return e.concat([t,t+"-"+B,t+"-"+W])}),[]),S=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function N(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var I={placement:"bottom",modifiers:[],strategy:"absolute"};function U(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function V(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?I:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},I,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){u(),o.options=Object.assign({},i,o.options,n),o.scrollParents={reference:f(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(t)};var s=function(e){var t=q(e);return S.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=s.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),f=function(){};a.push(s||f)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(U(t,n)){o.rects={reference:b(t,E(n),"fixed"===o.options.strategy),popper:y(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,f=i.options,u=void 0===f?{}:f,p=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:p,instance:c})||o)}else o.reset=!1,r=-1}}},update:N((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){u(),s=!0}};if(!U(e,t))return c;function u(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var z={passive:!0};var _={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,c=void 0===a||a,f=s(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,z)})),c&&f.addEventListener("resize",n.update,z),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,z)})),c&&f.removeEventListener("resize",n.update,z)}},data:{}};function F(e){return e.split("-")[0]}function J(e){return e.split("-")[1]}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?F(o):null,a=o?J(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case k:t={x:s,y:n.y+n.height};break;case M:t={x:n.x+n.width,y:c};break;case P:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var f=i?X(i):null;if(null!=f){var u="y"===f?"height":"width";switch(a){case B:t[f]=t[f]-(n[u]/2-r[u]/2);break;case W:t[f]=t[f]+(n[u]/2-r[u]/2)}}return t}var G={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Y({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},K=Math.max,Q=Math.min,Z=Math.round,$={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.offsets,a=e.position,c=e.gpuAcceleration,f=e.adaptive,u=e.roundOffsets,p=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Z(Z(t*r)/r)||0,y:Z(Z(n*r)/r)||0}}(i):"function"===typeof u?u(i):i,l=p.x,m=void 0===l?0:l,v=p.y,b=void 0===v?0:v,y=i.hasOwnProperty("x"),g=i.hasOwnProperty("y"),O=P,w=D,x=window;if(f){var j=E(n),R="clientHeight",L="clientWidth";j===s(n)&&"static"!==h(j=d(n)).position&&(R="scrollHeight",L="scrollWidth"),j=j,o===D&&(w=k,b-=j[R]-r.height,b*=c?1:-1),o===P&&(O=M,m-=j[L]-r.width,m*=c?1:-1)}var B,W=Object.assign({position:a},f&&$);return c?Object.assign({},W,((B={})[w]=g?"0":"",B[O]=y?"0":"",B.transform=(x.devicePixelRatio||1)<2?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",B)):Object.assign({},W,((t={})[w]=g?b+"px":"",t[O]=y?m+"px":"",t.transform="",t))}var te={left:"right",right:"left",bottom:"top",top:"bottom"};function ne(e){return e.replace(/left|right|bottom|top/g,(function(e){return te[e]}))}var re={start:"end",end:"start"};function oe(e){return e.replace(/start|end/g,(function(e){return re[e]}))}function ie(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&p(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ae(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function se(e,t){return t===A?ae(function(e){var t=s(e),n=d(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,c=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,c=r.offsetTop)),{width:o,height:i,x:a+m(e),y:c}}(e)):u(t)?function(e){var t=a(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ae(function(e){var t,n=d(e),r=c(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=K(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=K(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+m(e),f=-r.scrollTop;return"rtl"===h(o||n).direction&&(s+=K(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(d(e)))}function ce(e,t,n){var r="clippingParents"===t?function(e){var t=w(g(e)),n=["absolute","fixed"].indexOf(h(e).position)>=0&&u(e)?E(e):e;return f(n)?t.filter((function(e){return f(e)&&ie(e,n)&&"body"!==l(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=se(e,n);return t.top=K(r.top,t.top),t.right=Q(r.right,t.right),t.bottom=Q(r.bottom,t.bottom),t.left=K(r.left,t.left),t}),se(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function fe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ue(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,s=void 0===i?"clippingParents":i,c=n.rootBoundary,u=void 0===c?A:c,p=n.elementContext,l=void 0===p?C:p,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,b=void 0===v?0:v,y=fe("number"!==typeof b?b:ue(b,L)),g=l===C?"reference":C,O=e.elements.reference,w=e.rects.popper,x=e.elements[h?g:l],j=ce(f(x)?x:x.contextElement||d(e.elements.popper),s,u),E=a(O),P=Y({reference:E,element:w,strategy:"absolute",placement:o}),R=ae(Object.assign({},w,P)),B=l===C?R:E,W={top:j.top-B.top+y.top,bottom:B.bottom-j.bottom+y.bottom,left:j.left-B.left+y.left,right:B.right-j.right+y.right},H=e.modifiersData.offset;if(l===C&&H){var T=H[o];Object.keys(W).forEach((function(e){var t=[M,k].indexOf(e)>=0?1:-1,n=[D,k].indexOf(e)>=0?"y":"x";W[e]+=T[n]*t}))}return W}function le(e,t,n){return K(e,Q(t,n))}function de(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function me(e){return[D,M,k,P].some((function(t){return e[t]>=0}))}var he=V({defaultModifiers:[_,G,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,f={placement:F(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];u(o)&&l(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});u(r)&&l(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=T.reduce((function(e,n){return e[n]=function(e,t,n){var r=F(e),o=[P,D].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,M].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=f),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,f=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,b=F(v),y=c||(b===v||!m?[ne(v)]:function(e){if(F(e)===R)return[];var t=ne(e);return[oe(e),t,oe(t)]}(v)),g=[v].concat(y).reduce((function(e,n){return e.concat(F(n)===R?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?T:c,u=J(r),p=u?s?H:H.filter((function(e){return J(e)===u})):L,l=p.filter((function(e){return f.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=pe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[F(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:f,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),O=t.rects.reference,w=t.rects.popper,x=new Map,j=!0,E=g[0],W=0;W<g.length;W++){var A=g[W],C=F(A),S=J(A)===B,q=[D,k].indexOf(C)>=0,N=q?"width":"height",I=pe(t,{placement:A,boundary:u,rootBoundary:p,altBoundary:l,padding:f}),U=q?S?M:P:S?k:D;O[N]>w[N]&&(U=ne(U));var V=ne(U),z=[];if(i&&z.push(I[C]<=0),s&&z.push(I[U]<=0,I[V]<=0),z.every((function(e){return e}))){E=A,j=!1;break}x.set(A,z)}if(j)for(var _=function(e){var t=g.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},X=m?3:1;X>0;X--){if("break"===_(X))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,f=n.rootBoundary,u=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,v=pe(t,{boundary:c,rootBoundary:f,padding:p,altBoundary:u}),b=F(t.placement),g=J(t.placement),O=!g,w=X(b),x="x"===w?"y":"x",j=t.modifiersData.popperOffsets,R=t.rects.reference,L=t.rects.popper,W="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,A={x:0,y:0};if(j){if(i||s){var C="y"===w?D:P,H="y"===w?k:M,T="y"===w?"height":"width",S=j[w],q=j[w]+v[C],N=j[w]-v[H],I=d?-L[T]/2:0,U=g===B?R[T]:L[T],V=g===B?-L[T]:-R[T],z=t.elements.arrow,_=d&&z?y(z):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=Y[C],Z=Y[H],$=le(0,R[T],_[T]),ee=O?R[T]/2-I-$-G-W:U-$-G-W,te=O?-R[T]/2+I+$+Z+W:V+$+Z+W,ne=t.elements.arrow&&E(t.elements.arrow),re=ne?"y"===w?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,ie=j[w]+ee-oe-re,ae=j[w]+te-oe;if(i){var se=le(d?Q(q,ie):q,S,d?K(N,ae):N);j[w]=se,A[w]=se-S}if(s){var ce="x"===w?D:P,fe="x"===w?k:M,ue=j[x],de=ue+v[ce],me=ue-v[fe],he=le(d?Q(de,ie):de,ue,d?K(me,ae):me);j[x]=he,A[x]=he-ue}}t.modifiersData[r]=A}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=F(n.placement),c=X(s),f=[P,M].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return fe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ue(e,L))}(o.padding,n),p=y(i),l="y"===c?D:P,d="y"===c?k:M,m=n.rects.reference[f]+n.rects.reference[c]-a[c]-n.rects.popper[f],h=a[c]-n.rects.reference[c],v=E(i),b=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,O=u[l],w=b-p[f]-u[d],x=b/2-p[f]/2+g,j=le(O,x,w),R=c;n.modifiersData[r]=((t={})[R]=j,t.centerOffset=j-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ie(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=pe(t,{elementContext:"reference"}),s=pe(t,{altBoundary:!0}),c=de(a,r),f=de(s,o,i),u=me(c),p=me(f);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),ve=n(269),be=n(405),ye=n(66),ge=n(204),Oe=n(23),we=n(58),xe=n(1);function je(e){return"function"===typeof e?e():e}const Ee={},De=i.forwardRef((function(e,t){const{anchorEl:n,children:a,container:s,disablePortal:c=!1,keepMounted:f=!1,modifiers:u,open:p,placement:l="bottom",popperOptions:d=Ee,popperRef:m,style:h,transition:v=!1}=e,b=Object(o.a)(e,["anchorEl","children","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"]),y=i.useRef(null),g=Object(Oe.a)(y,t),O=i.useRef(null),w=Object(Oe.a)(O,m),x=i.useRef(w);Object(we.a)((()=>{x.current=w}),[w]),i.useImperativeHandle(m,(()=>O.current),[]);const[j,E]=i.useState(!0),D=function(e,t){if("ltr"===(t&&t.direction||"ltr"))return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(l,Object(ve.a)()),[k,M]=i.useState(D);i.useEffect((()=>{O.current&&O.current.forceUpdate()}));const P=i.useCallback((()=>{if(!y.current||!n||!p)return;O.current&&(O.current.destroy(),x.current(null));je(n);let e=[{name:"preventOverflow",options:{altBoundary:c}},{name:"flip",options:{altBoundary:c}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{M(e.placement)}}];null!=u&&(e=e.concat(u)),d&&null!=d.modifiers&&(e=e.concat(d.modifiers));const t=he(je(n),y.current,Object(r.a)({placement:D},d,{modifiers:e}));x.current(t)}),[n,c,u,p,D,d]),R=i.useCallback((e=>{Object(ge.a)(g,e),P()}),[g,P]),L=()=>{E(!1)},B=()=>{O.current&&(O.current.destroy(),x.current(null))},W=()=>{E(!0),B()};if(i.useEffect((()=>()=>{B()}),[]),i.useEffect((()=>{p||v||B()}),[p,v]),!f&&!p&&(!v||j))return null;const A={placement:k};v&&(A.TransitionProps={in:p,onEnter:L,onExited:W});const C=s||(n?Object(ye.a)(je(n)).body:void 0);return Object(xe.jsx)(be.a,{disablePortal:c,container:C,children:Object(xe.jsx)("div",Object(r.a)({ref:R,role:"tooltip"},b,{style:Object(r.a)({position:"fixed",top:0,left:0,display:p||!f||v?null:"none"},h),children:"function"===typeof a?a(A):a}))})}));t.a=De}}]);
//# sourceMappingURL=3.b4b49b55.chunk.js.map