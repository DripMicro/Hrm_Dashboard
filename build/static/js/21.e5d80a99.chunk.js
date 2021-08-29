(this["webpackJsonp@thimble/hrm-system-react"]=this["webpackJsonp@thimble/hrm-system-react"]||[]).push([[21],{451:function(e,t,a){"use strict";var r=a(5),n=a.n(r),i=a(192),s=a(0),o=a(267),c=a(1);const l=Object(s.forwardRef)((({children:e,title:t="",...a},r)=>Object(c.jsxs)(o.a,{ref:r,...a,children:[Object(c.jsx)(i.a,{children:Object(c.jsx)("title",{children:t})}),e]})));l.propTypes={children:n.a.node.isRequired,title:n.a.string},t.a=l},504:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(){const e=Object(r.useRef)(!0);return Object(r.useEffect)((()=>()=>{e.current=!1}),[]),e}},551:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));const{emailAlreadyinUse:r,invalidEmail:n,businessEmail:i,userDisabled:s,userNotFound:o,wrongPassword:c,weakPassword:l}={emailAlreadyinUse:{code:"auth/email-already-in-use",text:"There already exists an account with the given email address."},invalidEmail:{code:"auth/invalid-email",text:"The email address is not valid."},businessEmail:{code:"auth/business-email",text:"Please enter a business email address, your email is not valid."},userDisabled:{code:"auth/user-disabled",text:"The user corresponding to the given credential has been disabled."},userNotFound:{code:"auth/user-not-found",text:"There is no user corresponding to the email address."},wrongPassword:{code:"auth/wrong-password",text:"Wrong password"},weakPassword:{code:"auth/weak-password",text:"Password should be at least 6 characters"}};function d(e){return{error:e===r.code||e===i.code||e===n.code||e===s.code||e===o.code,helperText:e===r.code&&r.text||e===i.code&&i.text||e===n.code&&n.text||e===s.code&&s.text||e===o.code&&o.text}}function m(e){return{error:e===c.code||e===l.code,helperText:e===c.code&&c.text||e===l.code&&l.text}}},555:function(e,t,a){"use strict";var r=a(4),n=a(2),i=a(0),s=(a(5),a(8)),o=a(268),c=a(365),l=a(401),d=a(7),m=a(10);var u=i.createContext(),b=a(366),p=a(402);function x(e){return Object(b.a)("MuiGrid",e)}const j=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var h=Object(p.a)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>"spacing-xs-".concat(e))),...["column-reverse","column","row-reverse","row"].map((e=>"direction-xs-".concat(e))),...["nowrap","wrap-reverse","wrap"].map((e=>"wrap-xs-".concat(e))),...j.map((e=>"grid-xs-".concat(String(e)))),...j.map((e=>"grid-sm-".concat(String(e)))),...j.map((e=>"grid-md-".concat(String(e)))),...j.map((e=>"grid-lg-".concat(String(e)))),...j.map((e=>"grid-xl-".concat(String(e))))]),g=a(1);function f(e){const t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}const O=Object(d.a)("div",{},{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:a,direction:r,item:i,lg:s,md:c,sm:l,spacing:d,wrap:m,xl:u,xs:b,zeroMinWidth:p}=e.styleProps;return Object(o.a)(Object(n.a)({},a&&t.container,i&&t.item,p&&t.zeroMinWidth,a&&0!==d&&t["spacing-xs-".concat(String(d))],"row"!==r&&t["direction-xs-".concat(String(r))],"wrap"!==m&&t["wrap-xs-".concat(String(m))],!1!==b&&t["grid-xs-".concat(String(b))],!1!==l&&t["grid-sm-".concat(String(l))],!1!==c&&t["grid-md-".concat(String(c))],!1!==s&&t["grid-lg-".concat(String(s))],!1!==u&&t["grid-xl-".concat(String(u))]),t.root||{})}})((({styleProps:e})=>Object(n.a)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"column"===e.direction&&{flexDirection:"column",["& > .".concat(h.item)]:{maxWidth:"none"}},"column-reverse"===e.direction&&{flexDirection:"column-reverse",["& > .".concat(h.item)]:{maxWidth:"none"}},"row-reverse"===e.direction&&{flexDirection:"row-reverse"},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:e,styleProps:t}){const{container:a,spacing:r}=t;let n={};if(a&&0!==r){const t=e.spacing(r);"0px"!==t&&(n={width:"calc(100% + ".concat(f(t),")"),marginTop:"-".concat(f(t)),marginLeft:"-".concat(f(t)),["& > .".concat(h.item)]:{paddingTop:f(t),paddingLeft:f(t)}})}return n}),(({theme:e,styleProps:t})=>e.breakpoints.keys.reduce(((a,r)=>(function(e,t,a,r){const i=r[a];if(!i)return;let s={};if(!0===i)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===i)s={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else{const e="".concat(Math.round(i/r.columns*1e8)/1e6,"%");let a={};if(r.container&&r.item&&0!==r.spacing){const n=t.spacing(r.spacing);if("0px"!==n){const t="calc(".concat(e," + ").concat(f(n),")");a={flexBasis:t,maxWidth:t}}}s=Object(n.a)({flexBasis:e,flexGrow:0,maxWidth:e},a)}0===t.breakpoints.values[a]?Object.assign(e,s):e[t.breakpoints.up(a)]=s}(a,e,r,t),a)),{}))),v=i.forwardRef((function(e,t){const a=Object(m.a)({props:e,name:"MuiGrid"}),o=Object(c.a)(a),{className:d,columns:b=12,component:p="div",container:j=!1,direction:h="row",item:f=!1,lg:v=!1,md:w=!1,sm:y=!1,spacing:S=0,wrap:M="wrap",xl:P=!1,xs:N=!1,zeroMinWidth:T=!1}=o,W=Object(r.a)(o,["className","columns","component","container","direction","item","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=i.useContext(u)||b,L=Object(n.a)({},o,{columns:z,container:j,direction:h,item:f,lg:v,md:w,sm:y,spacing:S,wrap:M,xl:P,xs:N,zeroMinWidth:T}),E=(e=>{const{classes:t,container:a,direction:r,item:n,lg:i,md:s,sm:o,spacing:c,wrap:d,xl:m,xs:u,zeroMinWidth:b}=e,p={root:["root",a&&"container",n&&"item",b&&"zeroMinWidth",a&&0!==c&&"spacing-xs-".concat(String(c)),"row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==d&&"wrap-xs-".concat(String(d)),!1!==u&&"grid-xs-".concat(String(u)),!1!==o&&"grid-sm-".concat(String(o)),!1!==s&&"grid-md-".concat(String(s)),!1!==i&&"grid-lg-".concat(String(i)),!1!==m&&"grid-xl-".concat(String(m))]};return Object(l.a)(p,x,t)})(L);return C=Object(g.jsx)(O,Object(n.a)({styleProps:L,className:Object(s.a)(E.root,d),as:p,ref:t},W)),12!==z?Object(g.jsx)(u.Provider,{value:z,children:C}):C;var C}));t.a=v},556:function(e,t,a){"use strict";var r=a(2),n=a(4),i=a(0),s=(a(5),a(8)),o=a(401),c=a(7),l=a(10),d=a(433),m=a(366),u=a(402);function b(e){return Object(m.a)("MuiCard",e)}Object(u.a)("MuiCard",["root"]);var p=a(1);const x=Object(c.a)(d.a,{},{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root||{}})((()=>({overflow:"hidden"}))),j=i.forwardRef((function(e,t){const a=Object(l.a)({props:e,name:"MuiCard"}),{className:i,raised:c=!1}=a,d=Object(n.a)(a,["className","raised"]),m=Object(r.a)({},a,{raised:c}),u=(e=>{const{classes:t}=e;return Object(o.a)({root:["root"]},b,t)})(m);return Object(p.jsx)(x,Object(r.a)({className:Object(s.a)(u.root,i),elevation:c?8:void 0,ref:t,styleProps:m},d))}));t.a=j},571:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"/>',width:24,height:24}},658:function(e,t){t.__esModule=!0,t.default={body:'<g fill="currentColor"><circle cx="12" cy="12" r="1.5"/><path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5c-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zm-9.87 4a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5z"/></g>',width:24,height:24}},659:function(e,t){t.__esModule=!0,t.default={body:'<g fill="currentColor"><circle cx="12" cy="12" r="1.5"/><path d="M15.29 18.12L14 16.78l-.07-.07l-1.27-1.27a4.07 4.07 0 0 1-.61.06A3.5 3.5 0 0 1 8.5 12a4.07 4.07 0 0 1 .06-.61l-2-2L5 7.87a15.89 15.89 0 0 0-2.87 3.63a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67zM8.59 5.76l2.8 2.8A4.07 4.07 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a4.07 4.07 0 0 1-.06.61l2.68 2.68l.84.84a15.89 15.89 0 0 0 2.91-3.63a1 1 0 0 0 0-1c-.64-1.11-4.16-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67zm12.12 13.53L19.41 18l-2-2l-9.52-9.53L6.42 5L4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7l7.31 7.3l.07.07L16 17.41l.59.59l2.7 2.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"/></g>',width:24,height:24}},676:function(e,t,a){"use strict";var r=a(4),n=a(2),i=a(0),s=(a(5),a(8)),o=a(268),c=a(401),l=a(6),d=a(429),m=a(197),u=a(7),b=a(366),p=a(402);function x(e){return Object(b.a)("MuiInputAdornment",e)}var j=Object(p.a)("MuiInputAdornment",["root","filled","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),h=a(10),g=a(1);const f=Object(u.a)("div",{},{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:a}=e;return Object(o.a)(Object(n.a)({},t["position".concat(Object(l.a)(a.position))],!0===a.disablePointerEvents&&t.disablePointerEvents,"filled"===a.variant&&t.filled),t.root||{})}})((({theme:e,styleProps:t})=>Object(n.a)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:e.palette.action.active},"filled"===t.variant&&{["&.".concat(j.positionStart,"&:not(.Mui-hiddenLabel)")]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"}))),O=i.forwardRef((function(e,t){const a=Object(h.a)({props:e,name:"MuiInputAdornment"}),{children:o,className:u,component:b="div",disablePointerEvents:p=!1,disableTypography:j=!1,position:O,variant:v}=a,w=Object(r.a)(a,["children","className","component","disablePointerEvents","disableTypography","position","variant"]),y=Object(n.a)({},a,{disablePointerEvents:p,position:O,variant:v}),S=Object(m.b)()||{};let M=v;v&&S.variant,S&&!M&&(M=S.variant,y.variant=M);const P=(e=>{const{classes:t,disablePointerEvents:a,position:r,variant:n}=e,i={root:["root",a&&"disablePointerEvents",r&&"position".concat(Object(l.a)(r)),n,"hiddenLabel","sizeSmall"]};return Object(c.a)(i,x,t)})(y);return Object(g.jsx)(m.a.Provider,{value:null,children:Object(g.jsx)(f,Object(n.a)({as:b,styleProps:y,className:Object(s.a)(P.root,u),ref:t},w,{children:"string"!==typeof o||j?Object(g.jsxs)(i.Fragment,{children:["start"===O?Object(g.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,o]}):Object(g.jsx)(d.a,{color:"textSecondary",children:o})}))})}));t.a=O},886:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var r=a(22),n=a(7),i=a(556),s=a(416),o=a(429),c=a(428),l=a(446),d=a(267),m=a(13),u=a(451),b=a(86),p=a(552),x=a(0),j=a(19),h=a(196),g=a(553),f=a(658),O=a.n(f),v=a(571),w=a.n(v),y=a(659),S=a.n(y),M=a(555),P=a(894),N=a(676),T=a(426),W=a(683),z=a(121),L=a(37),E=a(504),C=a(551),R=a(1);function k(){const{register:e}=Object(L.a)(),t=Object(E.a)(),[a,r]=Object(x.useState)(!1),{enqueueSnackbar:n,closeSnackbar:i}=Object(h.b)(),s=p.b().shape({firstName:p.d().min(2,"Too Short!").max(50,"Too Long!").required("First name required"),lastName:p.d().min(2,"Too Short!").max(50,"Too Long!").required("Last name required"),email:p.d().email("Email must be a valid email address").required("Email is required"),password:p.d().required("Password is required")}),o=Object(g.c)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:s,onSubmit:async(a,{setErrors:r,setSubmitting:s})=>{try{await e({email:a.email,password:a.password,firstname:a.firstName,lastname:a.lastName}),n("Register success",{variant:"success",action:e=>Object(R.jsx)(z.b,{size:"small",onClick:()=>i(e),children:Object(R.jsx)(j.Icon,{icon:w.a})})}),t.current&&s(!1)}catch(o){console.error(o),t.current&&(r({afterSubmit:o.code||o.message}),s(!1))}}}),{errors:c,touched:l,handleSubmit:m,isSubmitting:u,getFieldProps:b}=o;return Object(R.jsx)(g.b,{value:o,children:Object(R.jsxs)(g.a,{autoComplete:"off",noValidate:!0,onSubmit:m,children:[Object(R.jsxs)(M.a,{container:!0,spacing:2,children:[Object(R.jsx)(M.a,{item:!0,xs:6,children:Object(R.jsx)(P.a,{fullWidth:!0,label:"First name",...b("firstName"),error:Boolean(l.firstName&&c.firstName),helperText:l.firstName&&c.firstName})}),Object(R.jsx)(M.a,{item:!0,xs:6,children:Object(R.jsx)(P.a,{fullWidth:!0,label:"Last name",...b("lastName"),error:Boolean(l.lastName&&c.lastName),helperText:l.lastName&&c.lastName})})]}),Object(R.jsx)(P.a,{fullWidth:!0,autoComplete:"username",name:"email",type:"email",label:"Email address",...b("email"),error:Boolean(l.email&&c.email)||Object(C.a)(c.afterSubmit).error,helperText:l.email&&c.email||Object(C.a)(c.afterSubmit).helperText,sx:{my:3}}),Object(R.jsx)(P.a,{fullWidth:!0,autoComplete:"current-password",type:a?"text":"password",label:"Password",...b("password"),InputProps:{endAdornment:Object(R.jsx)(N.a,{children:Object(R.jsx)(T.a,{edge:"end",onClick:()=>r((e=>!e)),children:Object(R.jsx)(j.Icon,{icon:a?O.a:S.a})})})},error:Boolean(l.password&&c.password)||Object(C.b)(c.afterSubmit).error,helperText:l.password&&c.password||Object(C.b)(c.afterSubmit).helperText}),Object(R.jsx)(d.a,{sx:{mt:3},children:Object(R.jsx)(W.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",pending:u,children:"Register"})})]})})}const I=Object(n.a)(u.a)((({theme:e})=>({[e.breakpoints.up("md")]:{display:"flex"}}))),A=Object(n.a)("header")((({theme:e})=>({top:0,zIndex:9,lineHeight:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",padding:e.spacing(3),justifyContent:"space-between",[e.breakpoints.up("md")]:{alignItems:"flex-start",padding:e.spacing(7,5,0,7)}}))),q=Object(n.a)(i.a)((({theme:e})=>({width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.spacing(2,0,2,2)}))),B=Object(n.a)("div")((({theme:e})=>({maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.spacing(12,0)})));function D(){return Object(R.jsxs)(I,{title:"Thimble | Register",children:[Object(R.jsxs)(A,{children:[Object(R.jsx)(r.a,{to:"/",children:Object(R.jsx)(b.a,{})}),Object(R.jsx)(s.a,{smDown:!0,children:Object(R.jsxs)(o.a,{variant:"body2",sx:{mt:{md:-2}},children:["Already have an account? \xa0",Object(R.jsx)(c.a,{underline:"none",variant:"subtitle2",component:r.a,to:m.a.login,children:"Login"})]})})]}),Object(R.jsx)(s.a,{mdDown:!0,children:Object(R.jsxs)(q,{children:[Object(R.jsx)(o.a,{variant:"h3",sx:{px:5,mt:5,mb:15},children:"Manage the job more effectively with Thimble"}),Object(R.jsx)("img",{alt:"register",src:"/static/illustrations/illustration_register.svg"})]})}),Object(R.jsx)(l.a,{children:Object(R.jsxs)(B,{children:[Object(R.jsx)(d.a,{sx:{mb:5,display:"flex",alignItems:"center"},children:Object(R.jsxs)(d.a,{sx:{flexGrow:1},children:[Object(R.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:"Get started absolutely free."}),Object(R.jsx)(o.a,{sx:{color:"text.secondary"},children:"Free forever. No credit card needed."})]})}),Object(R.jsx)(k,{}),Object(R.jsxs)(o.a,{variant:"body2",align:"center",sx:{color:"text.secondary",mt:3},children:["By registering, I agree to Thimble\xa0",Object(R.jsx)(c.a,{underline:"always",sx:{color:"text.primary"},children:"Terms of Service"}),"\xa0and\xa0",Object(R.jsx)(c.a,{underline:"always",sx:{color:"text.primary"},children:"Privacy Policy"}),"."]}),Object(R.jsx)(s.a,{smUp:!0,children:Object(R.jsxs)(o.a,{variant:"subtitle2",sx:{mt:3,textAlign:"center"},children:["Already have an account?\xa0",Object(R.jsx)(c.a,{to:m.a.login,component:r.a,children:"Login"})]})})]})})]})}}}]);
//# sourceMappingURL=21.e5d80a99.chunk.js.map