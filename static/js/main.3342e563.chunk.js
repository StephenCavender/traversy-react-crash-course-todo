(this["webpackJsonptraversy-react-crash-course-todo"]=this["webpackJsonptraversy-react-crash-course-todo"]||[]).push([[0],{32:function(t,e,n){t.exports=n(60)},59:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(29),c=n.n(r),l=n(18),i=n(7),s=n(8),u=n(10),d=n(9),p=n(13),m=n(1);var h={background:"#444",color:"#fff",textAlign:"center",padding:"10px"},f={color:"#fff",textDecoration:"none"},b=function(){return a.a.createElement("header",{style:h},a.a.createElement("h1",null,"TodoList"),a.a.createElement(p.b,{to:"/",style:f},"Home")," | ",a.a.createElement(p.b,{to:"/about",style:f},"About"))},g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,e)})," "," ",n,a.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,e),style:y},"x")))}}]),n}(o.Component),y={color:"#ff0000",border:"none",cursor:"pointer",float:"right",fontSize:"20px",fontWeight:"bold"},v=g,E=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(v,{key:e.id,todo:e,toggleComplete:t.props.toggleComplete,deleteTodo:t.props.deleteTodo})}))}}]),n}(a.a.Component),j=n(31),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){return t.setState(Object(j.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add todo item...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),n}(o.Component);function x(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app v1.0.0. "))}var C=n(14),S=n.n(C),T=(n(59),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.toggleComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.deleteTodo=function(e){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(){return t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,complete:!1}).then((function(e){return t.setState({todos:[].concat(Object(l.a)(t.state.todos),[e.data])})}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(b,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{addTodo:t.addTodo}),a.a.createElement(E,{todos:t.state.todos,toggleComplete:t.toggleComplete,deleteTodo:t.deleteTodo}))}}),a.a.createElement(m.a,{path:"/about",component:x}))))}}]),n}(a.a.Component));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3342e563.chunk.js.map