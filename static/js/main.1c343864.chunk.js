(this["webpackJsonpnd0191-myreads-starter"]=this["webpackJsonpnd0191-myreads-starter"]||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(25),r=n.n(a),o=(n(30),n(4)),i=n.n(o),l=n(7),h=n(5),j=(n(32),n(12)),d=n(2),b=n(3),u=function(e){var t=e.book,n=e.changeShelves;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"book",children:[Object(b.jsxs)("div",{className:"book-top",children:[Object(b.jsx)("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(t.imageLinks&&t.imageLinks.thumbnail,")")}}),Object(b.jsx)("div",{className:"book-shelf-changer",children:Object(b.jsxs)("select",{defaultValue:t.shelf?t.shelf:"none",onChange:function(e){return n(t,e.target.value)},children:[Object(b.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(b.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(b.jsx)("option",{value:"read",children:"Read"}),Object(b.jsx)("option",{value:"none",children:"None"})]})})]}),Object(b.jsx)("div",{className:"book-title",children:t.title}),Object(b.jsx)("div",{className:"book-authors",children:t.authors})]})})},O=function(e){var t=e.books,n=e.title,c=e.changeShelves;return Object(b.jsxs)("div",{className:"bookshelf",children:[Object(b.jsx)("h2",{className:"bookshelf-title",children:n}),Object(b.jsx)("div",{className:"bookshelf-books",children:Object(b.jsx)("ol",{className:"books-grid",children:t&&Array.isArray(t)&&t.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(u,{book:e,changeShelves:c})},e.id)}))})})]})},f=function(e){var t=e.books,n=e.changeShelves,c=t&&Array.isArray(t)&&t.filter((function(e){return"currentlyReading"===e.shelf})),s=t&&Array.isArray(t)&&t.filter((function(e){return"wantToRead"===e.shelf})),a=t&&Array.isArray(t)&&t.filter((function(e){return"read"===e.shelf}));return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{title:"Currently Reading",books:c,changeShelves:n}),Object(b.jsx)(O,{title:"Want to Read",books:s,changeShelves:n}),Object(b.jsx)(O,{title:"Read",books:a,changeShelves:n})]})},v=function(e){var t=e.books,n=e.changeShelves;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"list-books",children:[Object(b.jsx)("div",{className:"list-books-title",children:Object(b.jsx)("h1",{children:"MyReads"})}),Object(b.jsx)(f,{books:t,changeShelves:n}),Object(b.jsx)("div",{className:"open-search",children:Object(b.jsx)(j.b,{to:"/search",className:"open-search",children:" Add a Book "})})]})})},x=n(19),p="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var m={Accept:"application/json",Authorization:k},g=function(e){var t=e.handelDeleteSearch,n=e.changeShelves,c=(e.searchedbooks,e.search),s=e.handleSearch,a=e.mixedBooks;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"search-books",children:[Object(b.jsxs)("div",{className:"search-books-bar",children:[Object(b.jsx)(j.b,{to:"/",className:"close-search",onClick:t,children:"Close"}),Object(b.jsx)("div",{className:"search-books-input-wrapper",children:Object(b.jsx)("input",{type:"text",placeholder:"Search by title, author, or ISBN",value:c,onChange:function(e){return s(e)}})})]}),Object(b.jsx)("div",{className:"search-books-results",children:Object(b.jsx)("ol",{className:"books-grid",children:a&&Array.isArray(a)&&a.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(u,{book:e,changeShelves:n})},e.id)}))})})]})})};var y=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(h.a)(a,2),o=r[0],u=r[1],O=Object(c.useState)([]),f=Object(h.a)(O,2),k=f[0],y=f[1],S=Object(c.useState)([]),N=Object(h.a)(S,2),A=N[0],w=N[1],R=Object(c.useState)(new Map),C=Object(h.a)(R,2),T=C[0],B=C[1],M=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/books"),{headers:m}).then((function(e){return e.json()})).then((function(e){return e.books}));case 2:t=e.sent,s(t),B(E(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){M()}),[o]),Object(c.useEffect)((function(){var e=null===k||void 0===k?void 0:k.map((function(e){return T.has(e.id)?T.get(e.id):e}));w(e)}),[k]);var E=function(e){var t=new Map;return e.map((function(e){return t.set(e.id,e)})),t},J=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=o,c=void 0,fetch("".concat(p,"/search"),{method:"POST",headers:Object(x.a)(Object(x.a)({},m),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:n,maxResults:c})}).then((function(e){return e.json()})).then((function(e){return e.books}));case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}var n,c}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){J()}),[o]);var I=function(e,t){var c=n.map((function(n){return n.id===e.id?(e.shelf=t,e):n}));s(c),function(e,t){fetch("".concat(p,"/books/").concat(e.id),{method:"PUT",headers:Object(x.a)(Object(x.a)({},m),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))}(e,t)};return Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(j.a,{children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/",element:Object(b.jsx)(v,{books:n,changeShelves:I})}),Object(b.jsx)(d.a,{path:"search",element:Object(b.jsx)(g,{handelDeleteSearch:function(){u("")},changeShelves:I,searchedbooks:k,search:o,handleSearch:function(e){u(e.target.value)},mixedBooks:A})})]})})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1c343864.chunk.js.map