import{s as k,f as h,a as w,O as I,g as f,d as p,c as y,h as v,j as i,w as m,i as b,Z as C,E,R as x,F as S,T as W}from"../chunks/scheduler.343e2919.js";import{S as P,i as T}from"../chunks/index.b52a900c.js";function N(u){let t,s,a="Start chat",n;return{c(){t=h("a"),s=h("span"),s.textContent=a,this.h()},l(e){t=f(e,"A",{href:!0,class:!0});var o=v(t);s=f(o,"SPAN",{class:!0,"data-svelte-h":!0}),W(s)!=="svelte-1pax31i"&&(s.textContent=a),o.forEach(p),this.h()},h(){i(s,"class","flex-auto"),i(t,"href",n="https://wa.me/"+u[0]),i(t,"class","bg-primary-500 btn btn-lg")},m(e,o){b(e,t,o),m(t,s)},p(e,o){o&1&&n!==(n="https://wa.me/"+e[0])&&i(t,"href",n)},d(e){e&&p(t)}}}function j(u){let t,s,a,n,e,o,_,g,l=u[0].length>=10&&N(u);return{c(){t=h("meta"),s=w(),a=h("div"),n=h("div"),e=h("input"),o=w(),l&&l.c(),this.h()},l(r){const c=I("svelte-ms3u80",document.head);t=f(c,"META",{name:!0,content:!0}),c.forEach(p),s=y(r),a=f(r,"DIV",{class:!0});var A=v(a);n=f(A,"DIV",{class:!0});var d=v(n);e=f(d,"INPUT",{class:!0,title:!0,type:!0,placeholder:!0,name:!0}),o=y(d),l&&l.l(d),d.forEach(p),A.forEach(p),this.h()},h(){document.title="WhatsApp Click to Chat - Muhammad Zakir",i(t,"name","description"),i(t,"content","A free tool to initiate a WhatsApp chat to a certain number without having to add it to the contacts first"),i(e,"class","input"),i(e,"title","Input WhatsApp number"),i(e,"type","tel"),i(e,"placeholder","628123456789"),i(e,"name","whatsAppNumber"),i(n,"class","space-y-10 text-center flex flex-col items-center"),i(a,"class","container h-full mx-auto flex justify-center items-center")},m(r,c){m(document.head,t),b(r,s,c),b(r,a,c),m(a,n),m(n,e),C(e,u[0]),m(n,o),l&&l.m(n,null),_||(g=[E(e,"input",u[2]),E(e,"input",u[1])],_=!0)},p(r,[c]){c&1&&C(e,r[0]),r[0].length>=10?l?l.p(r,c):(l=N(r),l.c(),l.m(n,null)):l&&(l.d(1),l=null)},i:x,o:x,d(r){r&&(p(s),p(a)),p(t),l&&l.d(),_=!1,S(g)}}}function D(u,t,s){let a="";function n(){s(0,a=a.replaceAll(/[^0-9.]/g,"")),a.length>=15&&s(0,a=a.substring(0,15))}function e(){a=this.value,s(0,a)}return[a,n,e]}class Z extends P{constructor(t){super(),T(this,t,D,j,k,{})}}export{Z as component};
