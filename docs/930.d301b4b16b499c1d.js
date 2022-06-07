"use strict";(self.webpackChunkabout_me=self.webpackChunkabout_me||[]).push([[930],{8348:(F,j,d)=>{d.r(j),d.d(j,{ProjectsModule:()=>Ce});var O=d(9808),f=d(2155),h=d(5620),w=(()=>((w||(w={})).SetProjects="[Projects] Set Projects",w))();const x=(0,h.PH)(w.SetProjects,(0,h.Ky)());var i=d(5e3),r=(()=>{return(e=r||(r={}))[e.EntitiesOnly=0]="EntitiesOnly",e[e.Both=1]="Both",e[e.None=2]="None",r;var e})();function g(e){return function(p,m){const M={ids:[...m.ids],entities:Object.assign({},m.entities)},P=e(p,M);return P===r.Both?Object.assign({},m,M):P===r.EntitiesOnly?Object.assign(Object.assign({},m),{entities:M.entities}):m}}function v(e,s){const p=s(e);return(0,i.X6Q)()&&void 0===p&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",e,"The `selectId` implementation:",s.toString()),p}function J(e){function s(l,o){const n=v(l,e);return n in o.entities?r.None:(o.ids.push(n),o.entities[n]=l,r.Both)}function p(l,o){let n=!1;for(const t of l)n=s(t,o)!==r.None||n;return n?r.Both:r.None}function M(l,o){const n=v(l,e);return n in o.entities?(o.entities[n]=l,r.EntitiesOnly):(o.ids.push(n),o.entities[n]=l,r.Both)}function A(l,o){const t=(l instanceof Array?l:o.ids.filter(a=>l(o.entities[a]))).filter(a=>a in o.entities).map(a=>delete o.entities[a]).length>0;return t&&(o.ids=o.ids.filter(a=>a in o.entities)),t?r.Both:r.None}function N(l,o){return I([l],o)}function I(l,o){const n={};return(l=l.filter(a=>a.id in o.entities)).length>0?l.filter(c=>function V(l,o,n){const a=Object.assign({},n.entities[o.id],o.changes),c=v(a,e),u=c!==o.id;return u&&(l[o.id]=c,delete n.entities[o.id]),n.entities[c]=a,u}(n,c,o)).length>0?(o.ids=o.ids.map(c=>n[c]||c),r.Both):r.EntitiesOnly:r.None}function k(l,o){const n=[],t=[];for(const u of l){const y=v(u,e);y in o.entities?t.push({id:y,changes:u}):n.push(u)}const a=I(t,o),c=p(n,o);switch(!0){case c===r.None&&a===r.None:return r.None;case c===r.Both||a===r.Both:return r.Both;default:return r.EntitiesOnly}}return{removeAll:function B(l){return Object.assign({},l,{ids:[],entities:{}})},addOne:g(s),addMany:g(p),setAll:g(function m(l,o){return o.ids=[],o.entities={},p(l,o),r.Both}),setOne:g(M),setMany:g(function P(l,o){const n=l.map(t=>M(t,o));switch(!0){case n.some(t=>t===r.Both):return r.Both;case n.some(t=>t===r.EntitiesOnly):return r.EntitiesOnly;default:return r.None}}),updateOne:g(N),updateMany:g(I),upsertOne:g(function H(l,o){return k([l],o)}),upsertMany:g(k),removeOne:g(function _(l,o){return A([l],o)}),removeMany:g(A),map:g(function S(l,o){return I(o.ids.reduce((a,c)=>{const u=l(o.entities[c]);return u!==o.entities[c]&&a.push({id:c,changes:u}),a},[]).filter(({id:a})=>a in o.entities),o)}),mapOne:g(function R({map:l,id:o},n){const t=n.entities[o];return t?N({id:o,changes:l(t)},n):r.None})}}const z=function Y(e={}){var s,p;const{selectId:m,sortComparer:M}={selectId:null!==(s=e.selectId)&&void 0!==s?s:B=>B.id,sortComparer:null!==(p=e.sortComparer)&&void 0!==p&&p},P=function E(){return{getInitialState:function e(s={}){return Object.assign({ids:[],entities:{}},s)}}}(),_=function Z(){return{getSelectors:function e(s){const p=_=>_.ids,m=_=>_.entities,M=(0,h.P1)(p,m,(_,A)=>_.map(B=>A[B])),P=(0,h.P1)(p,_=>_.length);return s?{selectIds:(0,h.P1)(s,p),selectEntities:(0,h.P1)(s,m),selectAll:(0,h.P1)(s,M),selectTotal:(0,h.P1)(s,P)}:{selectIds:p,selectEntities:m,selectAll:M,selectTotal:P}}}}(),A=M?function X(e,s){const{removeOne:p,removeMany:m,removeAll:M}=J(e);function P(n,t){return _([n],t)}function _(n,t){const a=n.filter(c=>!(v(c,e)in t.entities));return 0===a.length?r.None:(o(a,t),r.Both)}function B(n,t){const a=v(n,e);return a in t.entities?(t.ids=t.ids.filter(c=>c!==a),o([n],t),r.Both):P(n,t)}function N(n,t){return S([n],t)}function S(n,t){const a=[],c=n.filter(u=>function I(n,t,a){if(!(t.id in a.entities))return!1;const u=Object.assign({},a.entities[t.id],t.changes),y=v(u,e);return delete a.entities[t.id],n.push(u),y!==t.id}(a,u,t)).length>0;if(0===a.length)return r.None;{const u=t.ids,y=[];return t.ids=t.ids.filter((b,T)=>b in t.entities||(y.push(T),!1)),o(a,t),!c&&y.every(b=>t.ids[b]===u[b])?r.EntitiesOnly:r.Both}}function l(n,t){const a=[],c=[];for(const b of n){const T=v(b,e);T in t.entities?c.push({id:T,changes:b}):a.push(b)}const u=S(c,t),y=_(a,t);switch(!0){case y===r.None&&u===r.None:return r.None;case y===r.Both||u===r.Both:return r.Both;default:return r.EntitiesOnly}}function o(n,t){n.sort(s);const a=[];let c=0,u=0;for(;c<n.length&&u<t.ids.length;){const y=n[c],b=v(y,e),T=t.ids[u];s(y,t.entities[T])<=0?(a.push(b),c++):(a.push(T),u++)}t.ids=a.concat(c<n.length?n.slice(c).map(e):t.ids.slice(u)),n.forEach((y,b)=>{t.entities[e(y)]=y})}return{removeOne:p,removeMany:m,removeAll:M,addOne:g(P),updateOne:g(N),upsertOne:g(function k(n,t){return l([n],t)}),setAll:g(function A(n,t){return t.entities={},t.ids=[],_(n,t),r.Both}),setOne:g(B),setMany:g(function V(n,t){const a=n.map(c=>B(c,t));switch(!0){case a.some(c=>c===r.Both):return r.Both;case a.some(c=>c===r.EntitiesOnly):return r.EntitiesOnly;default:return r.None}}),addMany:g(_),updateMany:g(S),upsertMany:g(l),map:g(function R(n,t){return S(t.ids.reduce((c,u)=>{const y=n(t.entities[u]);return y!==t.entities[u]&&c.push({id:u,changes:y}),c},[]),t)}),mapOne:g(function H({map:n,id:t},a){const c=a.entities[t];return c?N({id:t,changes:n(c)},a):r.None})}}(m,M):J(m);return Object.assign(Object.assign(Object.assign({selectId:m,sortComparer:M},P),_),A)}({selectId:function G(e){return e.name}}),U=[{title:"Sample Demo App",name:"sample-demo-app",content:"\n      Sample application to demo different concepts and functionality for Angular and NgRx.\n      ",links:[{label:"design",value:"https://xd.adobe.com/view/13fab039-c1c2-4297-bd21-5488a9ebd219-46a9/grid/"},{label:"code",value:"https://github.com/ianacodev/sample-demo-app"},{label:"demo",value:"https://ianacodev.github.io/sample-demo-app"}]},{title:"About Me",name:"about-me",content:"My personal website I designed and built using angular/ngrx.",links:[{label:"code",value:"https://github.com/ianacodev/ianacodev.github.io"}]},{title:"Data Table Library",name:"ngx-data-table-lib",content:"Custom library for configurable table to display data.",links:[{label:"code",value:"https://github.com/ianacodev/ngx-data-table-lib"}]},{title:"Sample Redux Store",name:"sample-redux-store",content:"Sample redux store for understanding concepts.",links:[{label:"code",value:"https://github.com/ianacodev/sample-redux-store"}]},{title:"Typescript Basics",name:"typescript_basics",content:"Sample scripts based on concepts from an online tutorial.",links:[{label:"code",value:"https://github.com/ianacodev/typescript_basics"}]},{title:"Example Scripts",name:"example_scripts",content:"Example scripts for demoing es6+ basics.",links:[{label:"code",value:"https://github.com/ianacodev/example_scripts"}]},{title:"XHR Examples",name:"XHRExamples",content:"Some xhr examples for demoing.",links:[{label:"code",value:"https://github.com/ianacodev/XHRExamples"}]}].reduce((e,s)=>Object.assign(Object.assign({},e),{[s.name]:s}),{}),q=Object.keys(U),ee=z.getInitialState({ids:q,entities:U}),te=(0,h.Lq)(ee,(0,h.on)(x,(e,s)=>Object.assign({},z.setAll(s.projects,e)))),{selectEntities:ne,selectAll:oe}=z.getSelectors(),ie=ne,ae=oe,K="projects",re={projects:te},ce=(0,h.ZF)(K),Q=(0,h.P1)(ce,e=>e.projects),se=((0,h.P1)(Q,ie),(0,h.P1)(Q,ae));var L=d(7280),le=d(7934),pe=d(9281),ue=d(9048),de=d(2578),me=d(7093),ge=d(6366),fe=d(4948);function he(e,s){1&e&&i._UZ(0,"app-page-section-header-template",7),2&e&&i.Q6J("title","Coding Projects")("animate",!0)}function ye(e,s){1&e&&(i.TgZ(0,"app-animate-content",8)(1,"p",9),i._uU(2," Some of my personal projects developed for demoing and implementing different concepts and functionality. These are publicly available on GitHub. "),i.qZA()()),2&e&&i.Q6J("animation","slideInLeft")}function Me(e,s){if(1&e&&i._UZ(0,"app-detail-item",12),2&e){const p=s.$implicit;i.Q6J("index",s.index)("detail",p)}}function _e(e,s){if(1&e&&(i.ynx(0),i.YNc(1,Me,1,2,"app-detail-item",11),i.BQk()),2&e){const p=s.ngIf;i.xp6(1),i.Q6J("ngForOf",p)}}function Oe(e,s){if(1&e&&(i.TgZ(0,"app-animate-content",8),i.YNc(1,_e,2,1,"ng-container",10),i.ALo(2,"async"),i.qZA()),2&e){const p=i.oxw();i.Q6J("animation","slideInRight"),i.xp6(1),i.Q6J("ngIf",i.lcZ(2,2,p.projects$))}}const Pe=[{path:"",component:(()=>{class e{constructor(p){this.store=p,this.animationMap={},this.projects$=null}ngOnInit(){this.projects$=this.store.pipe((0,h.Ys)(se))}onInView(p){this.animationMap[p]=!0}}return e.\u0275fac=function(p){return new(p||e)(i.Y36(h.yh))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-projects"]],decls:9,vars:3,consts:[[1,"projects"],["appInView","",3,"inView"],[3,"title","animate",4,"ngIf"],[1,"layout-container"],["fxFlexAlign","start","appInView","",1,"layout-section--1x",3,"inView"],[3,"animation",4,"ngIf"],["fxFlexAlign","start","appInView","",1,"layout-section--2x",3,"inView"],[3,"title","animate"],[3,"animation"],[1,"app-paragraph--medium"],[4,"ngIf"],[3,"index","detail",4,"ngFor","ngForOf"],[3,"index","detail"]],template:function(p,m){1&p&&(i.TgZ(0,"app-page-template",0)(1,"app-page-section-template")(2,"div",1),i.NdJ("inView",function(){return m.onInView("t1")}),i.YNc(3,he,1,2,"app-page-section-header-template",2),i.qZA(),i.TgZ(4,"section",3)(5,"div",4),i.NdJ("inView",function(){return m.onInView("t2")}),i.YNc(6,ye,3,1,"app-animate-content",5),i.qZA(),i.TgZ(7,"div",6),i.NdJ("inView",function(){return m.onInView("t3")}),i.YNc(8,Oe,3,4,"app-animate-content",5),i.qZA()()()()),2&p&&(i.xp6(3),i.Q6J("ngIf",m.animationMap.t1),i.xp6(3),i.Q6J("ngIf",m.animationMap.t2),i.xp6(2),i.Q6J("ngIf",m.animationMap.t3))},directives:[le.A,pe.k,ue.z,O.O5,de.Q,me.XD,ge.F,O.sg,fe.W],pipes:[O.Ov],styles:[""]}),e})()}];let be=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[L.Bz.forChild(Pe)],L.Bz]}),e})();var xe=d(4466);let Ce=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[O.ez,h.Aw.forFeature(K,re),f.o9,be,xe.m]]}),e})()},9281:(F,j,d)=>{d.d(j,{k:()=>x});var O=d(7871),f=d(5e3),h=d(7093);const w=["*"];let x=(()=>{class i{constructor(){this.backgroundColorHex=O.u.Transparent}}return i.\u0275fac=function(E){return new(E||i)},i.\u0275cmp=f.Xpm({type:i,selectors:[["app-page-section-template"]],inputs:{backgroundColorHex:"backgroundColorHex"},ngContentSelectors:w,decls:4,vars:2,consts:[["fxLayout","column","fxLayoutAlign","start center","fxFlexFill","",1,"page-section-template"],[1,"page-section-template__content-container"],[1,"page-section-template__content"]],template:function(E,Z){1&E&&(f.F$t(),f.TgZ(0,"section",0)(1,"div",1)(2,"div",2),f.Hsn(3),f.qZA()()()),2&E&&f.Udp("background-color",Z.backgroundColorHex)},directives:[h.xw,h.Wh,h.s9],styles:[".text-align--left[_ngcontent-%COMP%]{text-align:left}.text-align--center[_ngcontent-%COMP%]{text-align:center}.text-align--right[_ngcontent-%COMP%]{text-align:right}.icon--x-small[_ngcontent-%COMP%]{width:1rem;display:inline-block}.icon--small[_ngcontent-%COMP%]{width:2.25rem;display:inline-block}.icon--medium[_ngcontent-%COMP%]{width:2.5rem;display:inline-block}.image--small[_ngcontent-%COMP%]{max-width:10rem}.app-link[_ngcontent-%COMP%]{text-decoration:underline;position:relative;color:#f2f2f2;margin:0 .25rem;font-weight:400;cursor:pointer;text-transform:capitalize;display:inline-block}.width-fill[_ngcontent-%COMP%]{width:100%}.app-margin--none[_ngcontent-%COMP%]{margin:0}.app-margin--small[_ngcontent-%COMP%]{margin-bottom:.25rem}.app-margin--medium[_ngcontent-%COMP%]{margin-bottom:.5rem}.app-margin--large[_ngcontent-%COMP%]{margin-bottom:1rem}.app-margin--x-large[_ngcontent-%COMP%]{margin-bottom:2rem}.app-margin--xx-large[_ngcontent-%COMP%]{margin-bottom:3rem}.text--fade[_ngcontent-%COMP%]{color:#5c5d5d}.text--standout[_ngcontent-%COMP%]{color:#f2f2f2}.text--uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.app-font--gray-light[_ngcontent-%COMP%]{color:#f9f9f9}.app-font--gray-med[_ngcontent-%COMP%]{color:#5c5d5d}.layout[_ngcontent-%COMP%], .layout-container-reverse[_ngcontent-%COMP%], .layout-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1.875rem}@media (max-width: 959.9px){.layout-container[_ngcontent-%COMP%]{flex-direction:column!important}}@media (max-width: 959.9px){.layout-container-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}}.layout-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.layout-section--1x[_ngcontent-%COMP%]{flex:1 0 0}.layout-section--2x[_ngcontent-%COMP%]{flex:2 0 0}.app-font--giant[_ngcontent-%COMP%]{font-size:6rem;line-height:6.75rem;font-weight:300}.app-font--xxx-large[_ngcontent-%COMP%]{font-size:3.75rem;line-height:4.25rem;font-weight:300}.app-font--xx-large[_ngcontent-%COMP%]{font-size:3rem;line-height:3.5rem;font-weight:300}.app-font--x-large[_ngcontent-%COMP%], .app-paragraph--x-large[_ngcontent-%COMP%]{font-size:2.125rem;line-height:2.25rem;font-weight:300}.app-font--large[_ngcontent-%COMP%], .app-paragraph--large[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem;font-weight:400}.app-font--medium[_ngcontent-%COMP%], .app-paragraph--medium[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem;font-weight:400}.app-font--base[_ngcontent-%COMP%], .app-paragraph--base[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem;font-weight:400}.app-font--small[_ngcontent-%COMP%], .app-paragraph--small[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.375rem;font-weight:400}.app-paragraph--x-large[_ngcontent-%COMP%], .app-paragraph--large[_ngcontent-%COMP%], .app-paragraph--medium[_ngcontent-%COMP%], .app-paragraph--base[_ngcontent-%COMP%], .app-paragraph--small[_ngcontent-%COMP%]{color:#f2f2f2;margin-bottom:.5rem}[_nghost-%COMP%]{display:block}.page-section-template[_ngcontent-%COMP%]{padding:2rem 2rem 3rem}.page-section-template__content-container[_ngcontent-%COMP%]{max-width:60rem;width:100%}.page-section-template__header[_ngcontent-%COMP%]{margin-bottom:3rem;max-width:31.25rem}.page-section-template__title[_ngcontent-%COMP%]{font-size:3.75rem;color:#f2f2f2}@media (max-width: 959.9px){.page-section-template__title[_ngcontent-%COMP%]{font-size:.875rem;line-height:2.25rem}}.page-section-template__content[_ngcontent-%COMP%]{width:100%}"]}),i})()},7934:(F,j,d)=>{d.d(j,{A:()=>w});var O=d(7871),f=d(5e3);const h=["*"];let w=(()=>{class x{constructor(){this.backgroundColorHex=O.u.Transparent}}return x.\u0275fac=function(C){return new(C||x)},x.\u0275cmp=f.Xpm({type:x,selectors:[["app-page-template"]],inputs:{backgroundColorHex:"backgroundColorHex"},ngContentSelectors:h,decls:2,vars:2,consts:[[1,"page-template"]],template:function(C,E){1&C&&(f.F$t(),f.TgZ(0,"div",0),f.Hsn(1),f.qZA()),2&C&&f.Udp("background-color",E.backgroundColorHex)},styles:[".page-template{height:100%;background-color:#e8e8e8}\n"],encapsulation:2}),x})()},7871:(F,j,d)=>{d.d(j,{u:()=>O});var O=(()=>{return(f=O||(O={})).Breeze500="#f2f2f2",f.Breeze900="#e8e8e8",f.Bark400="#5c5d5d",f.Bark500="#3f4040",f.Bark800="#292a2a",f.Cloud500="#ffffff",f.Transparent="transparent",O;var f})()}}]);