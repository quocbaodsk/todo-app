(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),o=n(18),a=n.n(o),i=(n(24),n(25),n(0)),u=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"TODO LIST"})})},s=n(19),l=n(6),d=n(3),p=n.n(d),f=n(7),j=function(e){var t=e.item,n=e.markCompleted,c=e.deleteItem,r={borderBottom:"1px solid #ff8ff8",backgroundColor:t.completed?"#f3f3":"#ffe4ee",textDecoration:t.completed?"line-through":"none"};return Object(i.jsx)("div",{children:Object(i.jsxs)("p",{style:r,children:[t.title,Object(i.jsx)("input",{type:"checkbox",checked:t.completed,onChange:function(){return n(t.id)}}),Object(i.jsx)("button",{style:{backgroundColor:"#fff3",border:"1px solid #fff dotted",float:"right"},onClick:function(){return c(t.id)},children:"Delete"})]})})},b=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0],o=n[1],a=e.addTodo;return Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{type:"text",name:"title",value:r,placeholder:"Add job",onChange:function(e){o(e.target.value)}}),Object(i.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),""!==r&&(a(r),o(""))},children:"Add"})]})},h=n(48),x=n(8),O=n.n(x),m=function(){Object(c.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://jsonplaceholder.typicode.com/todos?_limit=20");case 3:t=e.sent,o(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var e=[],t=Object(c.useState)(e),n=Object(l.a)(t,2),r=n[0],o=n[1],a=e,u=function(e){var t=r.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));o(t)},d=function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/todos/"+t);case 3:n=r.filter((function(e){return e.id!==t})),o(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("https://jsonplaceholder.typicode.com/todos",{id:Object(h.a)(),title:t,isCompleted:!1});case 3:n=e.sent,o([n.data].concat(Object(s.a)(r))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{addTodo:x}),Object(i.jsx)("button",{onClick:function(){return o([])},children:"Delete all"}),Object(i.jsx)("button",{onClick:function(){return o(a)},children:"Restore"}),r.map((function(e){return Object(i.jsx)(j,{item:e,markCompleted:u,deleteItem:d},e.id)}))]})},v=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{}),Object(i.jsx)(m,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),k()}},[[46,1,2]]]);
//# sourceMappingURL=main.4aba9288.chunk.js.map