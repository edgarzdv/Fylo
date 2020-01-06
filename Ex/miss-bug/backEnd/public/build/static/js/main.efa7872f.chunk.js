(this["webpackJsonpmiss-bug"]=this["webpackJsonpmiss-bug"]||[]).push([[0],{34:function(e,t,n){e.exports=n(64)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),o=n.n(c),i=(n(39),n(40),n(7)),u=n(13),s=(n(41),n(1)),l=n(2),h=n(4),p=n(3),m=n(5),g=n(16),d=n.n(g),f="http://localhost:3002/api/bug",b=d.a.create({withCredentials:!0}),v={query:function(e,t){return b.get("".concat(f,"/?q=").concat(e.title,"&page=").concat(t)).then((function(e){return e.data}))},deleteBug:function(e){return b.delete(y(e)).then((function(e){return e.data}))},addBug:function(e,t,n){return b.post(f,{title:e,description:t,severity:n}).then((function(e){return e.data}))},getBugById:function(e){return b.get(y(e)).then((function(e){return e.data}))},editBug:function(e,t,n,a){var r={title:t,description:n,severity:a};return b.put(y(e),r).then((function(e){return e.data}))}};function y(e){return"".concat(f,"/").concat(e)}var E="http://localhost:3002/api/user/",j="loggedinUser",O=d.a.create({withCredentials:!0}),C={checkCredentials:function(e,t){var n={userName:e,password:t};return O.post(E,n).then((function(e){return e.data})).then((function(e){return localStorage.setItem(j,JSON.stringify(e)),e}))},getLoggedinUser:function(){return JSON.parse(localStorage.getItem(j))},logout:function(){return O.post("".concat(E,"/logout")).then((function(){localStorage.clear()}))},signUp:function(e,t){return O.post("".concat(E,"signup"),{userName:e,password:t}).then((function(e){return e.data})).then((function(e){return localStorage.setItem(j,JSON.stringify(e)),e}))},query:function(){return O.get(E).then((function(e){return e.data}))},getUserById:function(e){return O.get(k(e)).then((function(e){return e.data}))},deleteUser:function(e){return O.delete(k(e)).then((function(e){return e.data}))}};function k(e){return"".concat(E).concat(e)}var B=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=new Date(e.bug.createdAt).toLocaleTimeString();return r.a.createElement("li",{className:"list-item flex ".concat(e.index%2===0?"line-color":""," ")},r.a.createElement("h2",null,e.index,"."),r.a.createElement(i.b,{to:"/bug/".concat(e.bug._id)}," ",r.a.createElement("h2",{className:"bug-title"},e.bug.title)),r.a.createElement(i.b,{to:"/user/".concat(e.user._id)}," ",r.a.createElement("h2",{className:"bug-user"}," ",e.user.userName)),r.a.createElement("h2",{className:"bug-date"},t))}}]),t}(a.Component),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onChangePage=function(e){n.props.onChangePage(e.target.dataset.value)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"bug-list"},r.a.createElement("ul",null,this.props.bugs.map((function(t,n){return r.a.createElement(B,{key:n,index:n,user:e.props.user,bug:t})}))),r.a.createElement("button",{"data-value":-1,onClick:this.onChangePage},"Previous"),r.a.createElement("button",{"data-value":1,onClick:this.onChangePage},"Next"))}}]),t}(a.Component),w=n(11),x=n(33),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={filterBy:{title:""}},n.changeInput=function(e){var t=e.target.name,a=e.target.value;n.setState((function(e){return{filterBy:Object(x.a)({},e.filterBy,Object(w.a)({},t,a))}}))},n.onFilterClick=function(){n.props.onFilter(n.state.filterBy)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.filterBy.title;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"title",value:e,onChange:this.changeInput,name:"title"}),r.a.createElement("button",{onClick:this.onFilterClick},"Filter"))}}]),t}(a.Component),U=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:null,bugs:[],filterBy:{title:""},page:1},n.loadBugs=function(){v.query(n.state.filterBy,n.state.page).then((function(e){n.setState({bugs:e})})).catch((function(e){n.props.history.push("/")}))},n.onFilter=function(e){n.setState({filterBy:e},n.loadBugs)},n.onLogout=function(){C.logout().then((function(e){n.props.history.push("/")}))},n.onChangePage=function(e){var t=n.state,a=t.page,r=t.bugs;-1==e&&1===a||1==e&&a>1&&!r.length||n.setState((function(t){return{page:t.page+=parseInt(e)}}),n.loadBugs)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadBugs();var e=C.getLoggedinUser();this.setState({user:e})}},{key:"render",value:function(){var e=this.state.user?this.state.user:"",t=e.userName,n=e._id,a=e.isAdmin;return r.a.createElement("section",{className:"bug-app container"},r.a.createElement("h2",null,"Hello ",t),r.a.createElement("div",{className:"control-container flex space-between"},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onLogout},"Logout"),r.a.createElement(i.b,{to:"/user/".concat(n)},r.a.createElement("button",null,"Profile")),this.state.user&&a?r.a.createElement(i.b,{to:"/user/"},r.a.createElement("button",null,"Users List")):""),r.a.createElement(S,{onFilter:this.onFilter})),r.a.createElement("h2",null,"Bugs"),r.a.createElement(N,{onChangePage:this.onChangePage,user:this.state.user,bugs:this.state.bugs}))}}]),t}(a.Component),D=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onDelete=function(){n.props.onDelete(n.props.user._id)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.index;return r.a.createElement("li",{className:"list-item flex ".concat(n%2===0?"line-color":""," ")},r.a.createElement(i.b,{to:"/user/".concat(t._id)}," ",r.a.createElement("h2",{className:"user-name"},t.userName),"  "),r.a.createElement("button",{onClick:this.onDelete},"Delete"))}}]),t}(a.Component);function A(e){return e.users?r.a.createElement("ul",{className:"user-list container"},e.users.map((function(t,n){return r.a.createElement(D,{onDelete:e.onDelete,key:n,index:n,user:t})}))):""}var I=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={users:null},n.loadUsers=function(){C.query().then((function(e){n.setState({users:e})})).catch((function(e){n.props.history.push("/")}))},n.onDelete=function(e){C.deleteUser(e).then((function(){n.loadUsers()}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadUsers()}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h2",null,"Users"),r.a.createElement(A,{onDelete:this.onDelete,users:this.state.users}))}}]),t}(a.Component),L=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={bug:null},n.goBack=function(){n.props.history.push("/bug")},n.onDelete=function(){v.deleteBug(n.state.bug._id).then((function(){n.props.history.push("/bug")}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadBug()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.loadBug()}},{key:"loadBug",value:function(){var e=this,t=this.props.match.params.id;v.getBugById(t).then((function(t){e.setState({bug:t})}))}},{key:"render",value:function(){if(!this.state.bug)return r.a.createElement("div",{className:"loading"},"Loading...");var e=this.state.bug;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,new Date(e.createdAt).toLocaleString()),r.a.createElement("h2",null,e.description),r.a.createElement("h2",null," Creator: ",e.creator.userName),r.a.createElement("button",{onClick:this.goBack},"BACK"),r.a.createElement("button",{onClick:this.onDelete},"Delete"),r.a.createElement(i.b,{to:"/bug/".concat(e._id,"/edit")},r.a.createElement("button",null,"Edit")))}}]),t}(a.Component),F=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:null},n.goBack=function(){n.props.history.push("/user")},n.onDelete=function(){C.deleteuser(n.state.user._id).then((function(){n.props.history.push("/user")}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.loadUser()}},{key:"loadUser",value:function(){var e=this,t=this.props.match.params.id;C.getUserById(t).then((function(t){e.setState({user:t})}))}},{key:"render",value:function(){if(!this.state.user)return r.a.createElement("div",{className:"loading"},"Loading...");var e=this.state.user;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,e.userName),r.a.createElement("h2",null," ",e.isAdmin?"User is admin":"User is not admin"))}}]),t}(a.Component),_=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={userName:"",password:""},n.inputChange=function(e){var t=e.target.name;n.setState(Object(w.a)({},t,e.target.value))},n.onLogin=function(e){e.preventDefault(),C.checkCredentials(n.state.userName,n.state.password).then((function(e){console.log("User:",e),n.props.history.push("/bug")})).catch((function(e){console.log("Had Issues:",e)}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userName,n=e.password;return r.a.createElement("section",{className:"login-container container flex justify-center"},r.a.createElement("form",{className:"flex column align-center"},r.a.createElement("input",{type:"text",placeholder:"name",name:"userName",onChange:this.inputChange,value:t}),r.a.createElement("input",{type:"text",placeholder:"password",name:"password",onChange:this.inputChange,value:n}),r.a.createElement("button",{onClick:this.onLogin},"Login")))}}]),t}(a.Component),P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={userName:"",password:""},n.inputChange=function(e){var t=e.target.name;n.setState(Object(w.a)({},t,e.target.value))},n.onSignUp=function(e){e.preventDefault(),C.signUp(n.state.userName,n.state.password).then((function(e){console.log("User:",e),n.props.history.push("/bug")})).catch((function(e){console.log("Had Issues:",e)}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userName,n=e.password;return r.a.createElement("section",{className:"sign-up container flex justify-center"},r.a.createElement("form",{className:"flex column align-center"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("input",{type:"text",placeholder:"name",name:"userName",onChange:this.inputChange,value:t}),r.a.createElement("input",{type:"text",placeholder:"password",name:"password",onChange:this.inputChange,value:n}),r.a.createElement("button",{onClick:this.onSignUp},"Sign Up")))}}]),t}(a.Component);function M(e){return r.a.createElement("nav",{className:"main-header"},r.a.createElement("ul",{className:"container flex align-center"},r.a.createElement("h2",null,r.a.createElement(i.c,{activeClassName:"active",to:"/",exact:!0},"Login")),r.a.createElement("h2",null,r.a.createElement(i.c,{activeClassName:"active",to:"/user/signup",exact:!0},"Sign Up")),r.a.createElement("h2",null,r.a.createElement(i.c,{activeClassName:"active",to:"/bug"},"Bugs")),r.a.createElement("h2",null,r.a.createElement(i.c,{activeClassName:"active",to:"/BugAdd"},"New Bug"))))}var q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",severity:""},n.onSave=function(){n.props.onSave(n.state.title,n.state.description,n.state.severity).catch(),n.setState({title:"",description:"",severity:""})},n.inputChange=function(e){var t=e.target.name;n.setState(Object(w.a)({},t,e.target.value))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setFormDataForEdit()}},{key:"componentDidUpdate",value:function(e){e.bug!==this.props.bug&&this.setFormDataForEdit()}},{key:"setFormDataForEdit",value:function(){var e=this.props.bug;e&&this.setState({name:e.name,imgUrl:e.imgUrl})}},{key:"render",value:function(){return r.a.createElement("div",{className:"flex justify-center column"},r.a.createElement("input",{type:"text",placeholder:"title",name:"title",onChange:this.inputChange,value:this.state.title}),r.a.createElement("input",{type:"text",placeholder:"description",name:"description",onChange:this.inputChange,value:this.state.description}),r.a.createElement("input",{type:"text",placeholder:"severity",name:"severity",onChange:this.inputChange,value:this.state.severity}),r.a.createElement("button",{onClick:this.onSave},"Save"))}}]),t}(a.Component),J=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={bug:null},n.onEditBug=function(e,t,a){return v.editBug(n.state.bug._id,e,t,a).then((function(e){n.props.history.push("/bug/"+e._id)}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadBug()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.loadBug()}},{key:"loadBug",value:function(){var e=this;v.getBugById(this.props.match.params.id).then((function(t){e.setState({bug:t})}))}},{key:"render",value:function(){return r.a.createElement(q,{bug:this.state.bug,onSave:this.onEditBug})}}]),t}(a.Component),H=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onAddBug=function(e,t,a){return v.addBug(e,t,a).then((function(e){n.props.history.push("/bug/"+e._id)}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bug-add flex justify-center"},r.a.createElement(q,{onSave:this.onAddBug}))}}]),t}(a.Component);var W=function(){return r.a.createElement("main",null,r.a.createElement(i.a,null,r.a.createElement(M,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{component:_,path:"/",exact:!0}),r.a.createElement(u.a,{component:P,path:"/user/signup",exact:!0}),r.a.createElement(u.a,{component:F,path:"/user/:id",exact:!0}),r.a.createElement(u.a,{component:I,path:"/user/",exact:!0}),r.a.createElement(u.a,{component:U,path:"/bug",exact:!0}),r.a.createElement(u.a,{component:H,path:"/BugAdd",exact:!0}),r.a.createElement(u.a,{component:J,path:"/bug/:id/edit",exact:!0}),r.a.createElement(u.a,{component:L,path:"/bug/:id",exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.efa7872f.chunk.js.map