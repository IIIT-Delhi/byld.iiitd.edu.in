import{S as b,i as z,s as I,I as B,X as F,Q as C,e as g,w as E,k as N,c as p,a as v,x as D,d as _,m as L,b as c,g as w,G as k,y as j,R as q,T as S,U as V,q as m,o as d,B as $,n as G,p as H,t as Q,h as R,j as T}from"./vendor-3856deb2.js";const U=f=>f.replace(/[^\w]/g,"-").toLowerCase();function X(f){let e,n,t,i,a,r;t=new B({props:{src:F,size:f[1],class:"text-gray-300"}});const o=f[3].default,s=C(o,f,f[2],null);return{c(){e=g("div"),n=g("a"),E(t.$$.fragment),a=N(),s&&s.c(),this.h()},l(l){e=p(l,"DIV",{class:!0});var u=v(e);n=p(u,"A",{class:!0,href:!0});var h=v(n);D(t.$$.fragment,h),h.forEach(_),a=L(u),s&&s.l(u),u.forEach(_),this.h()},h(){c(n,"class","absolute pr-2 opacity-0 group-hover:opacity-100 right-full transition-opacity"),c(n,"href",i="#"+f[0]),c(e,"class","relative flex items-center mb-5 group")},m(l,u){w(l,e,u),k(e,n),j(t,n,null),k(e,a),s&&s.m(e,null),r=!0},p(l,[u]){const h={};u&2&&(h.size=l[1]),t.$set(h),(!r||u&1&&i!==(i="#"+l[0]))&&c(n,"href",i),s&&s.p&&(!r||u&4)&&q(s,o,l,l[2],r?V(o,l[2],u,null):S(l[2]),null)},i(l){r||(m(t.$$.fragment,l),m(s,l),r=!0)},o(l){d(t.$$.fragment,l),d(s,l),r=!1},d(l){l&&_(e),$(t),s&&s.d(l)}}}function y(f,e,n){let{$$slots:t={},$$scope:i}=e,{id:a}=e,{size:r="20"}=e;return f.$$set=o=>{"id"in o&&n(0,a=o.id),"size"in o&&n(1,r=o.size),"$$scope"in o&&n(2,i=o.$$scope)},[a,r,i,t]}class J extends b{constructor(e){super();z(this,e,y,X,I,{id:0,size:1})}}function A(f){let e,n;return e=new J({props:{id:f[2],$$slots:{default:[K]},$$scope:{ctx:f}}}),{c(){E(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,i){j(e,t,i),n=!0},p(t,i){const a={};i&4&&(a.id=t[2]),i&18&&(a.$$scope={dirty:i,ctx:t}),e.$set(a)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function K(f){let e,n;return{c(){e=g("h2"),n=Q(f[1]),this.h()},l(t){e=p(t,"H2",{class:!0});var i=v(e);n=R(i,f[1]),i.forEach(_),this.h()},h(){c(e,"class","text-3xl font-black text-gray-100")},m(t,i){w(t,e,i),k(e,n)},p(t,i){i&2&&T(n,t[1])},d(t){t&&_(e)}}}function M(f){let e,n,t,i,a=f[1]&&A(f);const r=f[3].default,o=C(r,f,f[4],null);return{c(){e=g("div"),a&&a.c(),n=N(),o&&o.c(),this.h()},l(s){e=p(s,"DIV",{id:!0,class:!0});var l=v(e);a&&a.l(l),n=L(l),o&&o.l(l),l.forEach(_),this.h()},h(){c(e,"id",f[2]),c(e,"class",t="max-w-4xl mx-auto w-11/12 "+f[0])},m(s,l){w(s,e,l),a&&a.m(e,null),k(e,n),o&&o.m(e,null),i=!0},p(s,[l]){s[1]?a?(a.p(s,l),l&2&&m(a,1)):(a=A(s),a.c(),m(a,1),a.m(e,n)):a&&(G(),d(a,1,1,()=>{a=null}),H()),o&&o.p&&(!i||l&16)&&q(o,r,s,s[4],i?V(r,s[4],l,null):S(s[4]),null),(!i||l&4)&&c(e,"id",s[2]),(!i||l&1&&t!==(t="max-w-4xl mx-auto w-11/12 "+s[0]))&&c(e,"class",t)},i(s){i||(m(a),m(o,s),i=!0)},o(s){d(a),d(o,s),i=!1},d(s){s&&_(e),a&&a.d(),o&&o.d(s)}}}function O(f,e,n){let{$$slots:t={},$$scope:i}=e,{className:a=""}=e,{heading:r=""}=e,{id:o=U(r)}=e;return f.$$set=s=>{"className"in s&&n(0,a=s.className),"heading"in s&&n(1,r=s.heading),"id"in s&&n(2,o=s.id),"$$scope"in s&&n(4,i=s.$$scope)},[a,r,o,t,i]}class W extends b{constructor(e){super();z(this,e,O,M,I,{className:0,heading:1,id:2})}}export{W as C};