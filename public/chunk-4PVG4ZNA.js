import{Ba as m,Da as _,Q as y,T as A,V as S,W as D,_ as g,aa as a,ba as v,da as p,ja as l,ka as f,xb as I,ya as h,za as b}from"./chunk-OW2OVBTG.js";var P=null;function F(){return P}function xe(i){P??=i}var M=class{};var k=new p(""),N=(()=>{let n=class n{historyGo(e){throw new Error("")}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=a({token:n,factory:()=>f(U),providedIn:"platform"});let i=n;return i})();var U=(()=>{let n=class n extends N{constructor(){super(),this._doc=f(k),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return F().getBaseHref(this._doc)}onPopState(e){let t=F().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=F().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=a({token:n,factory:()=>new n,providedIn:"platform"});let i=n;return i})();function $(i,n){if(i.length==0)return n;if(n.length==0)return i;let s=0;return i.endsWith("/")&&s++,n.startsWith("/")&&s++,s==2?i+n.substring(1):s==1?i+n:i+"/"+n}function B(i){let n=i.match(/#|\?|$/),s=n&&n.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function c(i){return i&&i[0]!=="?"?"?"+i:i}var w=(()=>{let n=class n{historyGo(e){throw new Error("")}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=a({token:n,factory:()=>f(V),providedIn:"root"});let i=n;return i})(),z=new p(""),V=(()=>{let n=class n extends w{constructor(e,t){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??f(k).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return $(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+c(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let u=this.prepareExternalUrl(r+c(o));this._platformLocation.pushState(e,t,u)}replaceState(e,t,r,o){let u=this.prepareExternalUrl(r+c(o));this._platformLocation.replaceState(e,t,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};n.\u0275fac=function(t){return new(t||n)(l(N),l(z,8))},n.\u0275prov=a({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var j=(()=>{let n=class n{constructor(e){this._subject=new y,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Y(B(L(t))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+c(t))}normalize(e){return n.stripTrailingSlash(H(this._basePath,L(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t,complete:r})}};n.normalizeQueryParams=c,n.joinWithSlash=$,n.stripTrailingSlash=B,n.\u0275fac=function(t){return new(t||n)(l(w))},n.\u0275prov=a({token:n,factory:()=>G(),providedIn:"root"});let i=n;return i})();function G(){return new j(l(w))}function H(i,n){if(!i||!n.startsWith(i))return n;let s=n.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:n}function L(i){return i.replace(/\/index.html$/,"")}function Y(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function Ue(i,n){n=encodeURIComponent(n);for(let s of i.split(";")){let e=s.indexOf("="),[t,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(t.trim()===n)return decodeURIComponent(r)}return null}var C=/\s+/,R=[],ze=(()=>{let n=class n{constructor(e,t){this._ngEl=e,this._renderer=t,this.initialClasses=R,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(C):R}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(C):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==t&&(r.changed=!0,r.enabled=t),r.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],r=e[1];r.changed?(this._toggleClass(t,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),r.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(C).forEach(r=>{t?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};n.\u0275fac=function(t){return new(t||n)(h(g),h(m))},n.\u0275dir=D({type:n,selectors:[["","ngClass",""]],inputs:{klass:[A.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let i=n;return i})();var E=class{constructor(n,s,e,t){this.$implicit=n,this.ngForOf=s,this.index=e,this.count=t}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ve=(()=>{let n=class n{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,t,r){this._viewContainer=e,this._template=t,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(0)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((r,o,u)=>{if(r.previousIndex==null)t.createEmbeddedView(this._template,new E(r.item,this._ngForOf,-1,-1),u===null?void 0:u);else if(u==null)t.remove(o===null?void 0:o);else if(o!==null){let d=t.get(o);t.move(d,u),O(d,r)}});for(let r=0,o=t.length;r<o;r++){let d=t.get(r).context;d.index=r,d.count=o,d.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=t.get(r.currentIndex);O(o,r)})}static ngTemplateContextGuard(e,t){return!0}};n.\u0275fac=function(t){return new(t||n)(h(_),h(b),h(I))},n.\u0275dir=D({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let i=n;return i})();function O(i,n){i.context.$implicit=n.item}var je=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=S({type:n}),n.\u0275inj=v({});let i=n;return i})(),Ge="browser",W="server";function He(i){return i===W}var T=class{};export{F as a,xe as b,M as c,k as d,w as e,j as f,Ue as g,ze as h,Ve as i,je as j,Ge as k,He as l,T as m};
