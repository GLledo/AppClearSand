(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},142:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),c=a.n(s),l=a(7),i=a(9),o=a(11),u=a(10),h=a(12),m=(a(100),a(101),a(37)),p=a(32),d=a(39),v=a(6),E=a(28),f=a(53),g=a(33),b=a.n(g),O=function e(){var t=this;Object(l.a)(this,e),this.signup=function(e){var a=e.username,n=e.password;return t.service.post("/signup",{username:a,password:n}).then((function(e){return e.data}))},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout").then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.service=b.a.create({baseURL:"".concat("\u200bhttps://app-clear-sand.herokuapp.com/api","/auth"),withCredentials:!0})},j=a(18),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logout=function(){a.services.logout().then((function(e){return a.props.setTheUser(!1)})).catch((function(e){return console.log(e)}))},a.state={},a.services=new O,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,"Hola, ",this.props.loggedInUser.username):r.a.createElement(r.a.Fragment,null);return this.props.loggedInUser?r.a.createElement(p.a,{bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(p.a.Brand,null,r.a.createElement(j.b,{to:"/"},"AppClearSand")),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(v.a,{inline:!0},r.a.createElement(f.a,{type:"text",placeholder:"Buscar",className:"mr-sm-2"}),r.a.createElement(E.a,{variant:"dark"},"Buscar")),r.a.createElement(d.a.Link,{as:"small"},r.a.createElement(j.b,{to:"/profile"},e)),r.a.createElement(d.a.Link,{onClick:this.logout},"Cerrar sesi\xf3n")))):r.a.createElement(p.a,{bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(p.a.Brand,null,r.a.createElement(j.b,{to:"/"},"AppClearSand")),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(d.a.Link,{as:"div"}," ",r.a.createElement(j.b,{to:"/signup"},"Registro")),r.a.createElement(d.a.Link,{as:"div"}," ",r.a.createElement(j.b,{to:"/login"},"Inicio sesi\xf3n")),r.a.createElement(d.a.Link,{as:"div"},e))))}}]),t}(n.Component),U=a(35),S=a(21),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(U.a)({},n,r))},a.postUser=function(){a.services.signup(a.state).then((function(e){a.setState({username:"",password:""}),a.props.setTheUser(e)})).catch((function(e){return console.log({err:e})}))},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.state={username:"",password:""},a.services=new O,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement("h1",null,"Registro de usuarios"),r.a.createElement(v.a,{onSubmit:this.handleSubmit},r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Usuario"),r.a.createElement(v.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Contrase\xf1a"),r.a.createElement(v.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(E.a,{variant:"dark",type:"submit"},"Registrarse")))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(U.a)({},n,r))},a.postUser=function(){a.services.login(a.state).then((function(e){a.setState({username:"",password:""}),a.props.setTheUser(e),a.props.history.push("/")})).catch((function(e){return console.log({err:e})}))},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.state={username:"",password:""},a.services=new O,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement("h1",null,"Inicio de sesi\xf3n"),r.a.createElement(v.a,{onSubmit:this.handleSubmit},r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Usuario"),r.a.createElement(v.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Contrase\xf1a"),r.a.createElement(v.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(E.a,{variant:"dark",type:"submit"},"Iniciar sesi\xf3n")))}}]),t}(n.Component),y=function e(){var t=this;Object(l.a)(this,e),this.getFiveBeaches=function(){return t.service.get("/getFiveBeaches").then((function(e){return e.data}))},this.getBeachDetails=function(e){return t.service.get("/getOneBeach/".concat(e)).then((function(e){return e.data}))},this.service=b.a.create({baseURL:"".concat("\u200bhttps://app-clear-sand.herokuapp.com/api","/beach"),withCredentials:!0})},D=a(22),T=a(25),L=(a(125),function(e){var t=e.Nombre,a=e.urlImagen,n=e._id,s=e.Provincia;return r.a.createElement(D.a,{md:4},r.a.createElement(T.a,{className:"card-beach"},r.a.createElement(j.b,{to:"/detalles/".concat(n)},r.a.createElement(T.a.Img,{variant:"top",src:a})),r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,null,t),r.a.createElement("hr",null),r.a.createElement("p",null,s))))}),I=a(36),B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.getFiveBeaches()},a.getFiveBeaches=function(){a.services.getFiveBeaches().then((function(e){a.setState({beaches:e})})).catch((function(e){return console.log(e)}))},a.state={beaches:[]},a.services=new y,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement("h1",null,"Playas Chulas"),this.state.beaches.length?r.a.createElement(I.a,null,this.state.beaches.map((function(e){return r.a.createElement(L,Object.assign({key:e._id},e))}))):r.a.createElement("p",null,"CARGANDO..."))}}]),t}(n.Component),_=(a(126),a(64)),N=a(56),R=function e(){var t=this;Object(l.a)(this,e),this.postEvent=function(e,a){return t.service.post("/new",{event:e,id:a}).then((function(e){return e.data}))},this.getEventDetails=function(e){return t.service.get("/getOneEvent/".concat(e)).then((function(e){return e.data}))},this.service=b.a.create({baseURL:"".concat("\u200bhttps://app-clear-sand.herokuapp.com/api","/event"),withCredentials:!0})},F=function e(){var t=this;Object(l.a)(this,e),this.handleUpload=function(e){return t.service.post("/upload",e).then((function(e){return e.data}))},this.service=b.a.create({baseURL:"".concat("\u200bhttps://app-clear-sand.herokuapp.com/api","/files"),withCredentials:!0})},M=a(93),x=a.n(M),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).finishAction=function(){a.props.closeModal(),a.props.refreshList()},a.postEvent=function(){a.eventsServices.postEvent(a.state.event,a.props.beachId).then((function(){return a.finishAction()})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState({event:Object(N.a)({},a.state.event,Object(U.a)({},n,r))})},a.handleSubmit=function(e){e.preventDefault(),a.postEvent()},a.onChange=function(e){console.log(e.toLocaleDateString("en-US")),a.setState({event:Object(N.a)({},a.state.event,{dateevent:e})})},a.handleFileUpload=function(e){var t=new FormData;t.append("imgurl",e.target.files[0]),a.filesServices.handleUpload(t).then((function(e){console.log("La URL de Cloudinray es: ",e.secure_url),a.setState({event:Object(N.a)({},a.state.event,{imgurl:e.secure_url})})})).catch((function(e){return console.log(e)}))},a.eventsServices=new R,a.filesServices=new F,a.state={event:{imgurl:"",description:"",title:"",dateevent:new Date}},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{onSubmit:this.handleSubmit},r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Titulo"),r.a.createElement(v.a.Control,{type:"text",name:"title",value:this.state.event.title,onChange:this.handleChange})),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Descripcion"),r.a.createElement(v.a.Control,{type:"text",name:"description",value:this.state.event.description,onChange:this.handleChange})),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Imagen"),r.a.createElement(v.a.Control,{type:"file",name:"imgurl",onChange:this.handleFileUpload})),r.a.createElement("div",null,r.a.createElement("h3",null,"Elige el dia de tu evento"),r.a.createElement(x.a,{onChange:this.onChange,value:this.state.event.dateevent})),r.a.createElement(E.a,{variant:"dark",type:"submit"},"Crear el evento"))}}]),t}(n.Component),G=(a(142),function(e){var t=e.title,a=e.imgurl,n=e._id,s=e.dateevent;return r.a.createElement(D.a,{md:12},r.a.createElement(T.a,{className:"card-beach"},r.a.createElement(j.b,{to:"/detalles-evento/".concat(n)},r.a.createElement(T.a.Img,{variant:"top",src:a})),r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,null,t),r.a.createElement(T.a.Title,null,s),r.a.createElement("hr",null))))}),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidUpdate=function(e){a.props!==e&&a.setState({events:a.props})},a.state={events:e},a.services=new R,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement("h1",null,"Eventos"),this.state.events.arr.length?r.a.createElement(I.a,null,this.state.events.arr.map((function(e){return r.a.createElement(G,Object.assign({key:e._id},e))}))):r.a.createElement(r.a.Fragment,null))}}]),t}(n.Component),H=a(94),K=a.n(H),W=function(e){var t=e.text;return r.a.createElement("div",null,t)},J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"40vh",width:"50%"}},this.props.latitud?r.a.createElement(K.a,{bootstrapURLKeys:{key:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_URL:"\u200bhttps://app-clear-sand.herokuapp.com/api"}).GMA)},defaultCenter:[this.props.latitud,this.props.longitud],defaultZoom:11},r.a.createElement(W,{lat:this.props.latitud,lng:this.props.longitud,text:this.props.name})):null)}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.getBeachDetails()},a.getBeachDetails=function(){a.services.getBeachDetails(a.props.match.params.id).then((function(e){return a.setState({beach:e})})).catch((function(e){return console.log(e)}))},a.closeModal=function(){return a.setState({showmodal:!1})},a.openModal=function(){return a.setState({showmodal:!0})},a.state={beach:{},showmodal:!1},a.services=new y,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{className:"beach-details"},r.a.createElement("h1",null,this.state.beach.Nombre),r.a.createElement(I.a,null,r.a.createElement(D.a,{md:{span:4,offset:1}},r.a.createElement("p",null,this.state.beach.Descripcion)),r.a.createElement(D.a,{md:{span:5,offset:1}},r.a.createElement("img",{src:this.state.beach.urlImagen,alt:this.state.beach.Name}))),r.a.createElement(E.a,{className:"mb-20",variant:"dark",onClick:this.openModal},"Crea un evento"),r.a.createElement(J,{latitud:this.state.beach.Coordenada_Y,longitud:this.state.beach.Coordenada_X,name:this.state.beach.Nombre}),r.a.createElement(_.a,{show:this.state.showmodal,onHide:this.closeModal},r.a.createElement(_.a.Body,null,r.a.createElement("h3",null,"Crea un evento nuevo"),r.a.createElement("hr",null),r.a.createElement(A,{beachId:this.state.beach._id,closeModal:this.closeModal,refreshList:this.getBeachDetails}))),this.state.beach.event&&r.a.createElement(P,{arr:this.state.beach.event}))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.getEventDetails()},a.getEventDetails=function(){a.services.getEventDetails(a.props.match.params.id).then((function(e){return a.setState({event:e})})).catch((function(e){return console.log(e)}))},a.state={event:{}},a.services=new R,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement("h1",null,this.state.event.title),r.a.createElement("p",null,this.state.event.dateevent),r.a.createElement(I.a,null,r.a.createElement(D.a,{md:{span:4,offset:1}},r.a.createElement("p",null,this.state.event.description)),r.a.createElement(D.a,{md:{span:5,offset:1}},r.a.createElement("img",{src:this.state.event.imgurl,alt:this.state.event.title}))))}}]),t}(n.Component),X=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).componentDidUpdate=function(t,a){return console.log("El estado de App se ha actualizado:",e.state)},e.componentDidMount=function(){return e.fetchUser()},e.setTheUser=function(t){return e.setState({loggedInUser:t})},e.fetchUser=function(){e.services.loggedin().then((function(t){return e.setState({loggedInUser:t})})).catch((function(){return e.setState({loggedInUser:!1})}))},e.state={loggedInUser:!1},e.services=new O,e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser}),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(m.a,{path:"/detalles/:id",render:function(t){return r.a.createElement(z,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(m.a,{path:"/detalles-evento/:id",render:function(t){return r.a.createElement(V,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(m.a,{path:"/signup",render:function(){return r.a.createElement(w,{setTheUser:e.setTheUser})}}),r.a.createElement(m.a,{path:"/login",render:function(t){return r.a.createElement(k,Object.assign({setTheUser:e.setTheUser},t))}})))}}]),t}(n.Component);c.a.render(r.a.createElement(j.a,null,r.a.createElement(X,null)),document.getElementById("root"))},95:function(e,t,a){e.exports=a(162)}},[[95,1,2]]]);
//# sourceMappingURL=main.b5f5f276.chunk.js.map