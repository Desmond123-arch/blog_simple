import{u as g,r as l,a as p,b,j as e,L as N}from"./index-Dtk-m6K2.js";const j=()=>{const n=g(),[i,r]=l.useState(!1),c=p(),d=localStorage.getItem("author"),u=c.state,m=s=>u.filter(a=>a.id==s).pop(),{id:o}=b(),t=m(o);l.useEffect(()=>{d==t.author&&r(!0)},[]);const h=()=>{const s=JSON.parse(localStorage.getItem("newblogData")),a=s.findIndex(x=>x.id==o);confirm("Are you sure you want to delete this?")&&(s.splice(a,1),localStorage.setItem("newblogData",JSON.stringify(s)),n("/"))};return e.jsxs("div",{className:"mx-auto p-2 my-10 w-full md:w-10/12",children:[i&&e.jsxs("div",{className:"text-end",children:[e.jsx(N,{to:"/blog/update",state:t,className:"bg-blue-400 p-2 rounded-lg text-white m-2",children:"Edit"}),e.jsx("button",{className:"bg-red-400 p-2 rounded-lg text-white m-2",onClick:h,children:"Delete"})]}),e.jsx("div",{className:"hero min-h-[55vh] rounded-xl place-items-end",style:{backgroundImage:`url(${t.imageUrl})`}}),e.jsxs("div",{className:"border-b-2 my-4",children:[e.jsx("h3",{className:"text-3xl py-3",children:t.title}),e.jsx("h2",{className:"text-xl py-2",children:t.subheading}),e.jsxs("h2",{className:"text-end py-3",children:["By ",t.author," on ",t.publishedDate]})]}),e.jsx("article",{className:"leading-loose",children:t.content})]})};export{j as default};
