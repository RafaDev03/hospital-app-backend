import{a as u}from"./chunk-DKJA5FGH.js";import{a as d,c as f}from"./chunk-WGZ3CRYS.js";import{O as h,aa as p,ja as g,l as c,p as l,y as m}from"./chunk-OW2OVBTG.js";var s=f.base_url,L=(()=>{let o=class o{get token(){return localStorage.getItem("token")||""}get role(){return this.user?.role}get headers(){return{headers:{"x-token":this.token}}}constructor(t){this.http=t}createUser(t){return this.http.post(`${s}/users`,t).pipe(h(e=>{this.saveLocalStorage(e.token,e.menu)}))}loginUser(t){return this.http.post(`${s}/login`,t).pipe(h(e=>{this.saveLocalStorage(e.token,e.menu)}))}validToken(){let t=this.token;return this.http.get(`${s}/login/renew`,{headers:{"x-token":t}}).pipe(l(e=>{let{email:n,google:a,id:r,img:k,name:$,role:v}=e.user;return this.user=new u($,n,"",k,a,v,r),this.saveLocalStorage(e.token,e.menu),!0}),m(()=>c(!1)))}updateUser(t){return this.http.put(`${s}/users/${this.user?.id}`,t,this.headers)}logout(){localStorage.removeItem("token"),localStorage.removeItem("menu")}findUsers(t){let e=`${s}/users?desde=${t}`;return this.http.get(e,this.headers).pipe(l(n=>{let a=n.users.map(r=>new u(r.name,r.email,"",r.img,r.google,r.role,r.id));return{count:n.count,users:a}}))}deleteUsers(t){let e=`${s}/users/${t}`;return this.http.delete(e,this.headers)}saveUser(t){let e=`${s}/users/${t.id}`;return this.http.put(e,t,this.headers)}saveLocalStorage(t,e){localStorage.setItem("token",t),localStorage.setItem("menu",JSON.stringify(e))}};o.\u0275fac=function(e){return new(e||o)(g(d))},o.\u0275prov=p({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();export{L as a};