(this["webpackJsonp@thimble/hrm-system-react"]=this["webpackJsonp@thimble/hrm-system-react"]||[]).push([[0],{519:function(e,t,n){"use strict";function o({props:e,states:t,muiFormControl:n}){return t.reduce(((t,o)=>(t[o]=e[o],n&&"undefined"===typeof e[o]&&(t[o]=n[o]),t)),{})}n.d(t,"a",(function(){return o}))},572:function(e,t,n){"use strict";function o(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function a(e,t=!1){return e&&(o(e.value)&&""!==e.value||t&&o(e.defaultValue)&&""!==e.defaultValue)}function r(e){return e.startAdornment}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},605:function(e,t,n){"use strict";n.d(t,"d",(function(){return k})),n.d(t,"b",(function(){return M})),n.d(t,"a",(function(){return P}));var o=n(4),a=n(2),r=n(149),i=n(0),l=(n(5),n(8)),d=n(267),s=n(399),c=n(81),u=n(519),p=n(196),b=n(7),m=n(10),h=n(6),f=n(23),O=n(58),j=n(87),g=n(76),y=n(1);function x(e,t){return parseInt(e[t],10)||0}const v={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};var w=i.forwardRef((function(e,t){const{onChange:n,maxRows:r,minRows:l=1,style:d,value:s}=e,c=Object(o.a)(e,["onChange","maxRows","minRows","style","value"]),{current:u}=i.useRef(null!=s),p=i.useRef(null),b=Object(f.a)(t,p),m=i.useRef(null),h=i.useRef(0),[w,C]=i.useState({}),S=i.useCallback((()=>{const t=p.current,n=Object(g.a)(t).getComputedStyle(t);if("0px"===n.width)return;const o=m.current;o.style.width=n.width,o.value=t.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");const a=n["box-sizing"],i=x(n,"padding-bottom")+x(n,"padding-top"),d=x(n,"border-bottom-width")+x(n,"border-top-width"),s=o.scrollHeight;o.value="x";const c=o.scrollHeight;let u=s;l&&(u=Math.max(Number(l)*c,u)),r&&(u=Math.min(Number(r)*c,u)),u=Math.max(u,c);const b=u+("border-box"===a?i+d:0),f=Math.abs(u-s)<=1;C((e=>h.current<20&&(b>0&&Math.abs((e.outerHeightStyle||0)-b)>1||e.overflow!==f)?(h.current+=1,{overflow:f,outerHeightStyle:b}):e))}),[r,l,e.placeholder]);i.useEffect((()=>{const e=Object(j.a)((()=>{h.current=0,S()})),t=Object(g.a)(p.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[S]),Object(O.a)((()=>{S()})),i.useEffect((()=>{h.current=0}),[s]);return Object(y.jsxs)(i.Fragment,{children:[Object(y.jsx)("textarea",Object(a.a)({value:s,onChange:e=>{h.current=0,u||S(),n&&n(e)},ref:b,rows:l,style:Object(a.a)({height:w.outerHeightStyle,overflow:w.overflow?"hidden":null},d)},c)),Object(y.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:m,tabIndex:-1,style:Object(a.a)({},v,d,{padding:0})})]})})),C=n(374),S=n(572),R=n(364),A=n(400);function W(e){return Object(R.a)("MuiInputBase",e)}var z=Object(A.a)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);const k=(e,t)=>{const{styleProps:n}=e;return Object(d.a)(Object(a.a)({},n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t["color".concat(Object(h.a)(n.color))],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel,{["& .".concat(z.input)]:Object(a.a)({},t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel)}),t.root||{})},M=Object(b.a)("div",{},{name:"MuiInputBase",slot:"Root",overridesResolver:k})((({theme:e,styleProps:t})=>Object(a.a)({},e.typography.body1,{color:e.palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&.Mui-disabled":{color:e.palette.text.disabled,cursor:"default"}},t.multiline&&Object(a.a)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"}))),P=Object(b.a)("input",{shouldForwardProp:e=>Object(b.b)(e)||"classes"===e},{name:"MuiInputBase",slot:"Input"})((({theme:e,styleProps:t})=>{const n="light"===e.palette.mode,o={color:"currentColor",opacity:n?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},r={opacity:"0 !important"},i={opacity:n?.42:.5};return Object(a.a)({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},["label[data-shrink=false] + .".concat(z.formControl," &")]:{"&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},"&.Mui-disabled":{opacity:1,WebkitTextFillColor:e.palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},"small"===t.size&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===t.type&&{MozAppearance:"textfield",WebkitAppearance:"textfield"})})),N=i.forwardRef((function(e,t){const n=Object(m.a)({props:e,name:"MuiInputBase"}),{"aria-describedby":d,autoComplete:b,autoFocus:j,className:g,components:x={},componentsProps:v={},defaultValue:R,disabled:A,endAdornment:z,fullWidth:k=!1,id:N,inputComponent:I="input",inputProps:F={},inputRef:L,maxRows:E,minRows:B,multiline:H=!1,name:T,onBlur:K,onChange:D,onClick:V,onFocus:_,onKeyDown:q,onKeyUp:U,placeholder:J,readOnly:Z,renderSuffix:G,rows:Q,startAdornment:X,type:Y="text",value:$,theme:ee}=n,te=Object(o.a)(n,["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value","isRtl","theme"]),ne=null!=F.value?F.value:$,{current:oe}=i.useRef(null!=ne),ae=i.useRef(),re=i.useCallback((e=>{0}),[]),ie=Object(f.a)(F.ref,re),le=Object(f.a)(L,ie),de=Object(f.a)(ae,le),[se,ce]=i.useState(!1),ue=Object(p.b)();const pe=Object(u.a)({props:n,muiFormControl:ue,states:["color","disabled","error","hiddenLabel","size","required","filled"]});pe.focused=ue?ue.focused:se,i.useEffect((()=>{!ue&&A&&se&&(ce(!1),K&&K())}),[ue,A,se,K]);const be=ue&&ue.onFilled,me=ue&&ue.onEmpty,he=i.useCallback((e=>{Object(S.b)(e)?be&&be():me&&me()}),[be,me]);Object(O.a)((()=>{oe&&he({value:ne})}),[ne,he,oe]);i.useEffect((()=>{he(ae.current)}),[]);let fe=I,Oe=F;H&&"input"===fe&&(Q?(Oe=Object(a.a)({type:void 0},Oe),fe="textarea"):(Oe=Object(a.a)({type:void 0,maxRows:E,minRows:B},Oe),fe=w));i.useEffect((()=>{ue&&ue.setAdornedStart(Boolean(X))}),[ue,X]);const je=Object(a.a)({},n,{color:pe.color||"primary",disabled:pe.disabled,endAdornment:z,error:pe.error,focused:pe.focused,formControl:ue,fullWidth:k,hiddenLabel:pe.hiddenLabel,multiline:H,size:pe.size,startAdornment:X,type:Y}),ge=(e=>{const{classes:t,color:n,disabled:o,error:a,endAdornment:r,focused:i,formControl:l,fullWidth:d,hiddenLabel:c,multiline:u,size:p,startAdornment:b,type:m}=e,f={root:["root","color".concat(Object(h.a)(n)),o&&"disabled",a&&"error",d&&"fullWidth",i&&"focused",l&&"formControl","small"===p&&"sizeSmall",u&&"multiline",b&&"adornedStart",r&&"adornedEnd",c&&"hiddenLabel"],input:["input",o&&"disabled","search"===m&&"inputTypeSearch",u&&"inputMultiline","small"===p&&"inputSizeSmall",c&&"inputHiddenLabel",b&&"inputAdornedStart",r&&"inputAdornedEnd"]};return Object(s.a)(f,W,t)})(je),ye=x.Root||M,xe=v.root||{},ve=x.Input||P;return Oe=Object(a.a)({},Oe,v.input),Object(y.jsxs)(i.Fragment,{children:[Object(y.jsx)(C.a,{styles:{"@keyframes mui-auto-fill":{},"@keyframes mui-auto-fill-cancel":{}}}),Object(y.jsxs)(ye,Object(a.a)({},xe,!Object(c.a)(ye)&&{styleProps:Object(a.a)({},je,xe.styleProps),theme:ee},{ref:t,onClick:e=>{ae.current&&e.currentTarget===e.target&&ae.current.focus(),V&&V(e)}},te,{className:Object(l.a)(ge.root,xe.className,g),children:[X,Object(y.jsx)(p.a.Provider,{value:null,children:Object(y.jsx)(ve,Object(a.a)({styleProps:je,"aria-invalid":pe.error,"aria-describedby":d,autoComplete:b,autoFocus:j,defaultValue:R,disabled:pe.disabled,id:N,onAnimationStart:e=>{he("mui-auto-fill-cancel"===e.animationName?ae.current:{value:"x"})},name:T,placeholder:J,readOnly:Z,required:pe.required,rows:Q,value:ne,onKeyDown:q,onKeyUp:U,type:Y},Oe,!Object(c.a)(ve)&&{as:fe,styleProps:Object(a.a)({},je,Oe.styleProps),theme:ee},{ref:de,className:Object(l.a)(ge.input,Oe.className,F.className),onBlur:e=>{K&&K(e),F.onBlur&&F.onBlur(e),ue&&ue.onBlur?ue.onBlur(e):ce(!1)},onChange:(e,...t)=>{if(!oe){const t=e.target||ae.current;if(null==t)throw new Error(Object(r.a)(1));he({value:t.value})}F.onChange&&F.onChange(e,...t),D&&D(e,...t)},onFocus:e=>{pe.disabled?e.stopPropagation():(_&&_(e),F.onFocus&&F.onFocus(e),ue&&ue.onFocus?ue.onFocus(e):ce(!0))}}))}),z,G?G(Object(a.a)({},pe,{startAdornment:X})):null]}))]})}));t.c=N},877:function(e,t,n){"use strict";var o=n(4),a=n(2),r=n(0),i=(n(5),n(267)),l=n(399),d=n(24),s=n(6),c=n(7),u=n(1);const p=Object(c.a)("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),b=Object(c.a)("legend")((({styleProps:e,theme:t})=>Object(a.a)({},void 0===e.label&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},void 0!==e.label&&Object(a.a)({display:"block",width:"auto",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),"& > span":{paddingLeft:5,paddingRight:5,display:"inline-block"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}))));var m=n(364),h=n(400);function f(e){return Object(m.a)("MuiOutlinedInput",e)}var O=Object(h.a)("MuiOutlinedInput",["root","notchedOutline","input"]),j=n(605),g=n(10);const y=Object(c.a)(j.b,{shouldForwardProp:e=>Object(c.b)(e)||"classes"===e},{name:"MuiOutlinedInput",slot:"Root",overridesResolver:(e,t)=>Object(i.a)(Object(j.d)(e,t),Object(a.a)({},t.notchedOutline))})((({theme:e,styleProps:t})=>{const n="light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return Object(a.a)({position:"relative",borderRadius:e.shape.borderRadius,["&:hover .".concat(O.notchedOutline)]:{borderColor:e.palette.text.primary},"@media (hover: none)":{["&:hover .".concat(O.notchedOutline)]:{borderColor:n}},["&.Mui-focused .".concat(O.notchedOutline)]:{borderColor:e.palette[t.color].main,borderWidth:2},["&.Mui-error .".concat(O.notchedOutline)]:{borderColor:e.palette.error.main},["&.Mui-disabled .".concat(O.notchedOutline)]:{borderColor:e.palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&Object(a.a)({padding:"16.5px 14px"},"small"===t.size&&{padding:"8.5px 14px"}))})),x=Object(c.a)((function(e){const{className:t,label:n,labelWidth:r,notched:i,style:l}=e,c=Object(o.a)(e,["children","classes","className","label","labelWidth","notched","style"]),m="rtl"===Object(d.a)().direction?"right":"left",h=Object(a.a)({},e,{notched:i,label:n});if(void 0!==n)return Object(u.jsx)(p,Object(a.a)({"aria-hidden":!0,className:t,style:l,styleProps:h},c,{children:Object(u.jsx)(b,{styleProps:h,children:n?Object(u.jsx)("span",{children:n}):Object(u.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}})})}));const f=r>0?.75*r+8:.01;return Object(u.jsx)(p,Object(a.a)({"aria-hidden":!0,style:Object(a.a)({["padding".concat(Object(s.a)(m))]:8},l),className:t,styleProps:h},c,{children:Object(u.jsx)(b,{styleProps:h,style:{width:i?f:.01},children:Object(u.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}})})}))}),{},{name:"MuiOutlinedInput",slot:"NotchedOutline"})((({theme:e})=>({borderColor:"light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}))),v=Object(c.a)(j.a,{shouldForwardProp:e=>Object(c.b)(e)||"classes"===e},{name:"MuiOutlinedInput",slot:"Input"})((({theme:e,styleProps:t})=>Object(a.a)({padding:"16.5px 14px","&:-webkit-autofill":{WebkitBoxShadow:"light"===e.palette.mode?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:"light"===e.palette.mode?null:"#fff",caretColor:"light"===e.palette.mode?null:"#fff",borderRadius:"inherit"}},"small"===t.size&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0}))),w=r.forwardRef((function(e,t){const n=Object(g.a)({props:e,name:"MuiOutlinedInput"}),{fullWidth:r=!1,inputComponent:i="input",label:d,labelWidth:s=0,multiline:c=!1,notched:p,type:b="text"}=n,m=Object(o.a)(n,["fullWidth","inputComponent","label","labelWidth","multiline","notched","type"]),h=(e=>{const{classes:t}=e,n=Object(l.a)({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},f,t);return Object(a.a)({},t,n)})(n);return Object(u.jsx)(j.c,Object(a.a)({components:{Root:y,Input:v},renderSuffix:e=>Object(u.jsx)(x,{className:h.notchedOutline,label:d,labelWidth:s,notched:"undefined"!==typeof p?p:Boolean(e.startAdornment||e.filled||e.focused)}),fullWidth:r,inputComponent:i,multiline:c,ref:t,type:b},m,{classes:Object(a.a)({},h,{notchedOutline:null})}))}));w.muiName="Input";t.a=w}}]);
//# sourceMappingURL=0.a22e1dbc.chunk.js.map