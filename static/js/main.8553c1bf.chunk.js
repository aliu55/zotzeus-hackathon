(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{28:function(e,t,a){e.exports=a(66)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),u=(a(33),a(34),a(35),a(36),a(10)),o=a(1),i=a(5),s=a.n(i),m=a(7),b=a(2),p=(a(38),a(8)),f=a.n(p),E=(a(56),a(9));var d=function(e){var t=e.user,a=e.number;return r.a.createElement(u.b,{to:"/club/"+t.clubName},r.a.createElement(E.a.div,{initial:{opacity:0},animate:{opacity:[0,1]},transition:{duration:.2,delay:.1*a},className:"user-card"},r.a.createElement("div",{className:"tag"},r.a.createElement("h1",null,a)),r.a.createElement("h2",null,t.clubName),r.a.createElement("h3",null,t.email),r.a.createElement("h4",null,t.meetingTime)))};a(62);var v=function(e){var t=e.info,a=e.number;return r.a.createElement(E.a.div,{initial:{opacity:0},animate:{opacity:[0,1]},transition:{duration:.2,delay:.1*a},className:"info-card"},r.a.createElement("div",{className:"tag"}),r.a.createElement("h2",null,t.title),r.a.createElement("a",{href:t.link},t.link))};a(63);var h=function(e){var t=e.onCreate,a=e.onCancel,c=Object(n.useState)(""),l=Object(b.a)(c,2),u=l[0],o=l[1],i=Object(n.useState)(""),p=Object(b.a)(i,2),d=p[0],v=p[1],h=Object(n.useState)(""),N=Object(b.a)(h,2),y=N[0],g=N[1],C=Object(n.useState)(""),j=Object(b.a)(C,2),O=j[0],k=j[1];function w(){return(w=Object(m.a)(s.a.mark((function e(a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={clubName:u,email:y,meetingTime:d},e.next=4,f.a.post("https://zotclubs.herokuapp.com/club",n);case 4:200===(r=e.sent).status&&r.data?(k(""),t()):k("Failed to create user");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(E.a.div,{animate:{opacity:[0,1]},transition:{duration:.5},className:"selected-stock flex-center"},r.a.createElement("form",{className:"myForm",onSubmit:function(e){return w.apply(this,arguments)}},r.a.createElement("label",null,"Club Name"),r.a.createElement("input",{type:"text",onChange:function(e){return o(e.target.value)},required:!0}),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",onChange:function(e){return g(e.target.value)}}),r.a.createElement("label",null,"Meeting Time"),r.a.createElement("input",{type:"text",onChange:function(e){return v(e.target.value)},required:!0}),r.a.createElement("input",{className:"button",type:"submit",value:"Create Club"}),r.a.createElement("button",{className:"button",type:"button",onClick:a},"Cancel"),r.a.createElement("p",{id:"error-message"},O)))};a(64);var N=function(e){var t=e.clubName,a=e.onCreate,c=e.onCancel,l=Object(n.useState)(""),u=Object(b.a)(l,2),o=u[0],i=u[1],p=Object(n.useState)(""),d=Object(b.a)(p,2),v=d[0],h=d[1],N=Object(n.useState)(""),y=Object(b.a)(N,2),g=y[0],C=y[1];function j(){return(j=Object(m.a)(s.a.mark((function e(n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={clubName:t,title:o,link:v},e.next=4,f.a.post("https://zotclubs.herokuapp.com/club-info",r);case 4:200===(c=e.sent).status&&c.data?(C(""),a()):C("Failed to create club info");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(E.a.div,{animate:{opacity:[0,1]},transition:{duration:.5},className:"selected-stock flex-center"},r.a.createElement("form",{className:"myForm",onSubmit:function(e){return j.apply(this,arguments)}},r.a.createElement("label",null,"Socials"),r.a.createElement("input",{type:"text",onChange:function(e){return i(e.target.value)},required:!0}),r.a.createElement("label",null,"Social Link"),r.a.createElement("input",{type:"text",onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{className:"button",type:"submit",value:"Create Info"}),r.a.createElement("button",{className:"button",type:"button",onClick:c},"Cancel"),r.a.createElement("p",{id:"error-message"},g)))};var y=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),u=Object(b.a)(l,2),o=u[0],i=u[1];function p(){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://zotclubs.herokuapp.com/club");case 2:200===(t=e.sent).status?(console.log(t),c(t.data.data)):console.log("Error retrieving users");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){p()}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"user-list"},r.a.createElement("p",null,r.a.createElement("font",{size:"1100",color:"white"},"Zot Zeus"))),r.a.createElement("div",{className:o?"blur":""},r.a.createElement("div",{className:"user-list"},(a||[]).map((function(e,t){return r.a.createElement(d,{user:e,key:t,number:t+1})}))),r.a.createElement("button",{className:"button",onClick:function(){return i(!0)}},"Create New Club")),o?r.a.createElement(h,{onCancel:function(){return i(!1)},onCreate:function(){i(!1),p()}}):null)};a(65);var g=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),u=Object(b.a)(l,2),i=u[0],p=u[1],E=Object(o.f)().selectedClubName;function d(){return h.apply(this,arguments)}function h(){return(h=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://zotclubs.herokuapp.com/club-info");case 2:if(200===(t=e.sent).status){for(console.log(t),a=0;a<t.data.data.length;a++)t.data.data[a].clubName!=E&&delete t.data.data[a];c(t.data.data)}else console.log("Error retrieving info");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){d()}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"user-list"},r.a.createElement("p",null,r.a.createElement("font",{size:"1100",color:"white"},E))),r.a.createElement("div",{className:i?"blur":""},r.a.createElement("div",{className:"user-list"},(a||[]).map((function(e,t){return r.a.createElement(v,{info:e,key:t,number:t+1})}))),r.a.createElement("button",{className:"button",onClick:function(){return p(!0)}},"Create New Club Info"),r.a.createElement("button",{className:"button",onClick:function(){window.history.back()}},"Back")),i?r.a.createElement(N,{clubName:E,onCancel:function(){return p(!1)},onCreate:function(){p(!1),d()}}):null)};var C=function(){return r.a.createElement("div",{className:"app fill-view"},r.a.createElement(u.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:y}),r.a.createElement(o.a,{exact:!0,path:"/club/:selectedClubName",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.8553c1bf.chunk.js.map