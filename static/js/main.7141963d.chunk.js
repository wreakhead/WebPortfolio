(this["webpackJsonpportfolio-client"]=this["webpackJsonpportfolio-client"]||[]).push([[0],{61:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(18),i=a.n(c),r=(a(61),a(7)),o=a.p+"static/media/download.5816c188.jpg",s=a(107),l=a(1),d=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{id:"header",className:" d-flex align-items-center",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-10 mx-auto",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column",children:[Object(l.jsxs)("h2",{className:"my-3",children:[e.greet,Object(l.jsxs)("strong",{className:"brand-name",children:[" ",e.title]})]}),Object(l.jsx)("h3",{className:"my-3",children:e.description}),Object(l.jsx)("div",{className:"mt-3",children:e.button})]}),Object(l.jsx)("div",{className:e.animate,children:Object(l.jsx)(s.a,{item:!0,xs:12,sm:10,lg:10,children:Object(l.jsx)("img",{className:"img-fluid imgstyle",alt:"hello_image",src:e.image})})})]})})})})})})},j=a(15),b=a(109),m=Object(b.a)({btnStyle:{fontWeight:"500",fontSize:"16px",letterSpacing:"1px",display:"inline-block",padding:"10px 30px",borderRadius:"50px",transition:"0.5s",color:"darkslategray",border:"2px solid darkslategray",textDecoration:"none","&:hover":{background:"darkslategray",color:"#fff",textDecoration:"none"}}}),x=function(e){var t=m();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(j.b,{to:e.route,className:t.btnStyle,children:e.buttonName})})},h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(d,{header:"header1",greet:" Welcome to my ",title:"Portfolio.",description:"Hi, I'm Imran, get to know me.",button:Object(l.jsx)(x,{route:"/about",buttonName:"About"}),image:o,animate:"col-lg-6 order-1 order-lg-2 header-img"})})},u=a(117),v=a(110),p=a(111),O=Object(b.a)({btnStyle:{fontWeight:"500",fontSize:"12px",background:"#fff",display:"inline-block",padding:"5px 10px",borderRadius:"50px",transition:"0.5s",color:"darkslategray",border:"2px solid darkslategray",textDecoration:"none","&:hover":{background:"darkslategray",color:"#fff",textDecoration:"none"}}}),g=function(e){var t=O();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("a",{href:e.link,className:t.btnStyle,children:e.name})})},f=Object(b.a)({root:{minWidth:275,minHeight:200,justifyContent:"center",display:"flex",marginTop:"100px",marginRight:"50px",marginLeft:"50px",padding:"10px",background:"darkslategray",color:"#fff"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:14}}),k=function(){var e=f();return Object(l.jsx)(s.a,{container:!0,children:Object(l.jsx)(s.a,{item:!0,xs:12,md:12,lg:12,children:Object(l.jsx)(u.a,{className:e.root,children:Object(l.jsxs)(v.a,{style:{height:"300"},children:[Object(l.jsxs)(p.a,{variant:"h5",component:"h2",children:["LinkedIn"," ",Object(l.jsx)(g,{name:"visit",link:"https://www.linkedin.com/in/mohd-imran-khan-55045a153"})]}),Object(l.jsxs)(p.a,{variant:"body2",component:"p",className:e.pos,children:["Get my profile.",Object(l.jsx)("br",{})]}),Object(l.jsx)(p.a,{variant:"h5",component:"h2",children:"Gmail"}),Object(l.jsxs)(p.a,{variant:"body2",component:"p",className:e.pos,children:["mohdimran.khan751@gmail.com",Object(l.jsx)("br",{})]}),Object(l.jsxs)(p.a,{variant:"h5",component:"h2",children:["Github"," ",Object(l.jsx)(g,{name:"visit",link:"https://github.com/wreakhead/"})]}),Object(l.jsxs)(p.a,{variant:"body2",component:"p",children:["Git.",Object(l.jsx)("br",{})]})]})})})})},N=a(22),y=a.n(N),S=a(29),w=a(23),C="https://portfolio-server-imran.herokuapp.com/",A=a(30),F=a.n(A),W=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)("nodata"),r=Object(w.a)(i,2),o=r[0],s=r[1],j=function(){var e=Object(S.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("".concat(C,"about"));case 3:t=e.sent,c(t.data),s("data recived"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j()}),[o]),Object(l.jsx)(l.Fragment,{children:a.map((function(e,t){var n,c,i;return Object(l.jsx)(d,{greet:"",title:null===(n=a[t])||void 0===n?void 0:n.title,description:null===(c=a[t])||void 0===c?void 0:c.describe,image:null===(i=a[t])||void 0===i?void 0:i.image,button:"",animate:"col-lg-6 order-1 order-lg-2"},t)}))})},D=a(112),R=a(116),_=a(114),G=a(113),P=Object(b.a)({btnStyle:{fontWeight:"500",fontSize:"12px",background:"",display:"inline-block",padding:"5px 10px",borderRadius:"50px",transition:"0.5s",color:"darkslategray",border:"2px solid darkslategray",textDecoration:"none","&:hover":{background:"darkslategray",color:"#fff",textDecoration:"none"}}}),T=function(e){var t=P();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("a",{href:e.link,className:t.btnStyle,children:e.name})})},z=Object(b.a)({root:{marginTop:"30px",backgroundColor:"#fff"}}),B=function(e){var t=z();Object(D.a)();return Object(l.jsxs)(u.a,{className:t.root,elevation:3,children:[Object(l.jsxs)(R.a,{className:t.details,children:[Object(l.jsx)(G.a,{component:"img",alt:"tech img",height:"200",image:e.image,title:"Contemplative Reptile"}),Object(l.jsxs)(v.a,{children:[Object(l.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h5",children:e.title}),Object(l.jsxs)(p.a,{variant:"subtitle1",color:"textSecondary",children:["Tech: ",e.tech]}),Object(l.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:e.describe})]})]}),Object(l.jsxs)(_.a,{children:[Object(l.jsx)(T,{name:"Source",link:e.linkSource}),function(){if(e.linkAction)return Object(l.jsx)(T,{name:"Action",link:e.linkAction})}]})]})},I=a(115),E=Object(b.a)({root:{maxWidth:345,backgroundColor:"#fff"}}),H=function(e){var t=E();return Object(l.jsxs)(u.a,{className:t.root,elevation:3,children:[Object(l.jsxs)(R.a,{className:t.details,children:[Object(l.jsx)(G.a,{component:"img",alt:"tech img",height:"140",image:e.image,title:"Contemplative Reptile"}),Object(l.jsxs)(v.a,{children:[Object(l.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(l.jsxs)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:["Tech: ",e.tech]})]})]}),Object(l.jsxs)(_.a,{children:[Object(l.jsx)(T,{name:"Source",link:e.linkSource}),function(){if(e.linkAction)return Object(l.jsx)(T,{name:"Action",link:e.linkAction})}]})]})},J=Object(b.a)((function(e){return{root:{flexGrow:1}}})),L=function(){var e,t,a,c,i,r,o=Object(n.useState)([]),d=Object(w.a)(o,2),j=d[0],b=d[1],m=Object(n.useState)("nodata"),x=Object(w.a)(m,2),h=x[0],u=x[1],v=function(){var e=Object(S.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("".concat(C,"data"));case 3:t=e.sent,b(t.data),u("data recived"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){v()}),[h]);var p=J();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:Object(l.jsx)("strong",{className:"brand-name d-flex justify-content-center",children:"Projects"})}),Object(l.jsx)(I.a,{maxWidth:"md",children:Object(l.jsx)("div",{className:p.root,children:Object(l.jsxs)(s.a,{container:!0,spacing:3,children:[Object(l.jsx)(s.a,{item:!0,xs:12,className:"topProject",children:Object(l.jsx)(B,{title:null===(e=j[0])||void 0===e?void 0:e.title,tech:null===(t=j[0])||void 0===t?void 0:t.tech,describe:null===(a=j[0])||void 0===a?void 0:a.describe,linkSource:null===(c=j[0])||void 0===c?void 0:c.linkSource,linkAction:null===(i=j[0])||void 0===i?void 0:i.linkAction,image:null===(r=j[0])||void 0===r?void 0:r.image})}),j.map((function(e,t){var a,n,c,i,r,o;if(0!==t)return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(s.a,{item:!0,xs:6,sm:4,className:"otherProjects",children:Object(l.jsx)(H,{title:null===(a=j[t])||void 0===a?void 0:a.title,tech:null===(n=j[t])||void 0===n?void 0:n.tech,discribe:null===(c=j[t])||void 0===c?void 0:c.describe,linkSource:null===(i=j[t])||void 0===i?void 0:i.linkSource,linkAction:null===(r=j[t])||void 0===r?void 0:r.linkAction,image:null===(o=j[t])||void 0===o?void 0:o.image},t)})})}))]})})})]})},q=function(){return Object(l.jsx)("div",{className:"nav_bg",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-10 mx-auto",children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Navbar"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav ml-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{exact:!0,activeClassName:"menu_active",className:"nav-link active",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{exact:!0,activeClassName:"menu_active",className:"nav-link active",to:"/projects",children:"Projects"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{exact:!0,activeClassName:"menu_active",className:"nav-link active",to:"/about",children:"About"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{exact:!0,activeClassName:"menu_active",className:"nav-link active",to:"/contact",children:"Contact"})})]})})]})})})})})},K=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(q,{}),Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{exact:!0,path:"/",component:h}),Object(l.jsx)(r.b,{exact:!0,path:"/contact",component:k}),Object(l.jsx)(r.b,{exact:!0,path:"/about",component:W}),Object(l.jsx)(r.b,{exact:!0,path:"/projects",component:L}),Object(l.jsx)(r.a,{to:"/"})]})]})};a(86),a(87);i.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(K,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.7141963d.chunk.js.map