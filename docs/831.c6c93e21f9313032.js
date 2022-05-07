"use strict";(self.webpackChunkabout_me=self.webpackChunkabout_me||[]).push([[831],{5831:(Ot,N,h)=>{h.r(N),h.d(N,{PortfolioModule:()=>At});var T=h(9808),z=h(2155),u=h(5e3),H=h(508);let K=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[H.BQ],H.BQ]}),t})();var U=h(7423),J=h(4834),g=h(5620),j=(()=>((j||(j={})).SetPortfolioCards="[Portfolio] Set Portfolio Cards",j))();const Q=(0,g.PH)(j.SetPortfolioCards,(0,g.Ky)());var d=(()=>{return(t=d||(d={}))[t.EntitiesOnly=0]="EntitiesOnly",t[t.Both=1]="Both",t[t.None=2]="None",d;var t})();function f(t){return function(i,m){const M={ids:[...m.ids],entities:Object.assign({},m.entities)},y=t(i,M);return y===d.Both?Object.assign({},m,M):y===d.EntitiesOnly?Object.assign(Object.assign({},m),{entities:M.entities}):m}}function b(t,e){const i=e(t);return(0,u.X6Q)()&&void 0===i&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",t,"The `selectId` implementation:",e.toString()),i}function X(t){function e(s,r){const n=b(s,t);return n in r.entities?d.None:(r.ids.push(n),r.entities[n]=s,d.Both)}function i(s,r){let n=!1;for(const a of s)n=e(a,r)!==d.None||n;return n?d.Both:d.None}function M(s,r){const n=b(s,t);return n in r.entities?(r.entities[n]=s,d.EntitiesOnly):(r.ids.push(n),r.entities[n]=s,d.Both)}function x(s,r){const a=(s instanceof Array?s:r.ids.filter(o=>s(r.entities[o]))).filter(o=>o in r.entities).map(o=>delete r.entities[o]).length>0;return a&&(r.ids=r.ids.filter(o=>o in r.entities)),a?d.Both:d.None}function D(s,r){return O([s],r)}function O(s,r){const n={};return(s=s.filter(o=>o.id in r.entities)).length>0?s.filter(c=>function P(s,r,n){const o=Object.assign({},n.entities[r.id],r.changes),c=b(o,t),l=c!==r.id;return l&&(s[r.id]=c,delete n.entities[r.id]),n.entities[c]=o,l}(n,c,r)).length>0?(r.ids=r.ids.map(c=>n[c]||c),d.Both):d.EntitiesOnly:d.None}function B(s,r){const n=[],a=[];for(const l of s){const p=b(l,t);p in r.entities?a.push({id:p,changes:l}):n.push(l)}const o=O(a,r),c=i(n,r);switch(!0){case c===d.None&&o===d.None:return d.None;case c===d.Both||o===d.Both:return d.Both;default:return d.EntitiesOnly}}return{removeAll:function A(s){return Object.assign({},s,{ids:[],entities:{}})},addOne:f(e),addMany:f(i),setAll:f(function m(s,r){return r.ids=[],r.entities={},i(s,r),d.Both}),setOne:f(M),setMany:f(function y(s,r){const n=s.map(a=>M(a,r));switch(!0){case n.some(a=>a===d.Both):return d.Both;case n.some(a=>a===d.EntitiesOnly):return d.EntitiesOnly;default:return d.None}}),updateOne:f(D),updateMany:f(O),upsertOne:f(function E(s,r){return B([s],r)}),upsertMany:f(B),removeOne:f(function C(s,r){return x([s],r)}),removeMany:f(x),map:f(function S(s,r){return O(r.ids.reduce((o,c)=>{const l=s(r.entities[c]);return l!==r.entities[c]&&o.push({id:c,changes:l}),o},[]).filter(({id:o})=>o in r.entities),r)}),mapOne:f(function w({map:s,id:r},n){const a=n.entities[r];return a?D({id:r,changes:s(a)},n):d.None})}}const F=function q(t={}){var e,i;const{selectId:m,sortComparer:M}={selectId:null!==(e=t.selectId)&&void 0!==e?e:A=>A.id,sortComparer:null!==(i=t.sortComparer)&&void 0!==i&&i},y=function $(){return{getInitialState:function t(e={}){return Object.assign({ids:[],entities:{}},e)}}}(),C=function V(){return{getSelectors:function t(e){const i=C=>C.ids,m=C=>C.entities,M=(0,g.P1)(i,m,(C,x)=>C.map(A=>x[A])),y=(0,g.P1)(i,C=>C.length);return e?{selectIds:(0,g.P1)(e,i),selectEntities:(0,g.P1)(e,m),selectAll:(0,g.P1)(e,M),selectTotal:(0,g.P1)(e,y)}:{selectIds:i,selectEntities:m,selectAll:M,selectTotal:y}}}}(),x=M?function W(t,e){const{removeOne:i,removeMany:m,removeAll:M}=X(t);function y(n,a){return C([n],a)}function C(n,a){const o=n.filter(c=>!(b(c,t)in a.entities));return 0===o.length?d.None:(r(o,a),d.Both)}function A(n,a){const o=b(n,t);return o in a.entities?(a.ids=a.ids.filter(c=>c!==o),r([n],a),d.Both):y(n,a)}function D(n,a){return S([n],a)}function S(n,a){const o=[],c=n.filter(l=>function O(n,a,o){if(!(a.id in o.entities))return!1;const l=Object.assign({},o.entities[a.id],a.changes),p=b(l,t);return delete o.entities[a.id],n.push(l),p!==a.id}(o,l,a)).length>0;if(0===o.length)return d.None;{const l=a.ids,p=[];return a.ids=a.ids.filter((v,I)=>v in a.entities||(p.push(I),!1)),r(o,a),!c&&p.every(v=>a.ids[v]===l[v])?d.EntitiesOnly:d.Both}}function s(n,a){const o=[],c=[];for(const v of n){const I=b(v,t);I in a.entities?c.push({id:I,changes:v}):o.push(v)}const l=S(c,a),p=C(o,a);switch(!0){case p===d.None&&l===d.None:return d.None;case p===d.Both||l===d.Both:return d.Both;default:return d.EntitiesOnly}}function r(n,a){n.sort(e);const o=[];let c=0,l=0;for(;c<n.length&&l<a.ids.length;){const p=n[c],v=b(p,t),I=a.ids[l];e(p,a.entities[I])<=0?(o.push(v),c++):(o.push(I),l++)}a.ids=o.concat(c<n.length?n.slice(c).map(t):a.ids.slice(l)),n.forEach((p,v)=>{a.entities[t(p)]=p})}return{removeOne:i,removeMany:m,removeAll:M,addOne:f(y),updateOne:f(D),upsertOne:f(function B(n,a){return s([n],a)}),setAll:f(function x(n,a){return a.entities={},a.ids=[],C(n,a),d.Both}),setOne:f(A),setMany:f(function P(n,a){const o=n.map(c=>A(c,a));switch(!0){case o.some(c=>c===d.Both):return d.Both;case o.some(c=>c===d.EntitiesOnly):return d.EntitiesOnly;default:return d.None}}),addMany:f(C),updateMany:f(S),upsertMany:f(s),map:f(function w(n,a){return S(a.ids.reduce((c,l)=>{const p=n(a.entities[l]);return p!==a.entities[l]&&c.push({id:l,changes:p}),c},[]),a)}),mapOne:f(function E({map:n,id:a},o){const c=o.entities[a];return c?D({id:a,changes:n(c)},o):d.None})}}(m,M):X(m);return Object.assign(Object.assign(Object.assign({selectId:m,sortComparer:M},y),C),x)}({selectId:function at(t){return t.name}}),{cards:nt}={cards:[{title:"Sample Demo App",name:"sample-demo-app",content:"\n      Sample application to demo different concepts and functionality for Angular and NgRx.\n      ",links:[{label:"design",url:"https://xd.adobe.com/view/13fab039-c1c2-4297-bd21-5488a9ebd219-46a9/grid/"},{label:"code",url:"https://github.com/ianacodev/sample-demo-app"},{label:"demo",url:"https://ianacodev.github.io/sample-demo-app"}]},{title:"About Me",name:"about-me",content:"My personal website built using angular/ngrx.",links:[{label:"code",url:"https://github.com/ianacodev/ianacodev.github.io"}]},{title:"Data Table Library",name:"ngx-data-table-lib",content:"Custom library for configurable table to display data.",links:[{label:"code",url:"https://github.com/ianacodev/ngx-data-table-lib"}]},{title:"Sample Redux Store",name:"sample-redux-store",content:"Sample redux store for understanding concepts.",links:[{label:"code",url:"https://github.com/ianacodev/sample-redux-store"}]},{title:"Typescript Basics",name:"typescript_basics",content:"Sample scripts based on concepts from an online tutorial.",links:[{label:"code",url:"https://github.com/ianacodev/typescript_basics"}]},{title:"Example Scripts",name:"example_scripts",content:"Example scripts for demoing es6+ basics.",links:[{label:"code",url:"https://github.com/ianacodev/example_scripts"}]},{title:"XHR Examples",name:"XHRExamples",content:"Some xhr examples for demoing.",links:[{label:"code",url:"https://github.com/ianacodev/XHRExamples"}]}]},L=nt.reduce((t,e)=>Object.assign(Object.assign({},t),{[e.name]:e}),{}),it=Object.keys(L),rt=F.getInitialState({ids:it,entities:L}),ot=(0,g.Lq)(rt,(0,g.on)(Q,(t,e)=>Object.assign({},F.setAll(e.portfolioCards,t)))),{selectEntities:dt,selectAll:ct}=F.getSelectors(),st=dt,lt=ct,_="portfolio",ut={portfolioCards:ot},mt=(0,g.ZF)(_),k=(0,g.P1)(mt,t=>t.portfolioCards),Z=((0,g.P1)(k,st),(0,g.P1)(k,lt));(0,g.P1)(Z,t=>t.reduce((e,i)=>{if(i.featured){const M=[...e.featured,i];return Object.assign(Object.assign({},e),{featured:M})}const m=[...e.general,i];return Object.assign(Object.assign({},e),{general:m})},{featured:[],general:[]}));var G=h(7280),ft=h(7871),pt=h(7934),gt=h(9281),Mt=h(7093),ht=h(327);function Ct(t,e){if(1&t&&u._UZ(0,"app-callout-detail",8),2&t){const i=e.$implicit;u.Q6J("index",e.index)("detail",i)}}function yt(t,e){if(1&t&&(u.TgZ(0,"div"),u.YNc(1,Ct,1,2,"app-callout-detail",7),u.qZA()),2&t){const i=e.ngIf;u.xp6(1),u.Q6J("ngForOf",i)}}const vt=[{path:"",component:(()=>{class t{constructor(i){this.store=i,this.color=ft.u,this.portfolioCards$=null}ngOnInit(){this.portfolioCards$=this.store.pipe((0,g.Ys)(Z))}}return t.\u0275fac=function(i){return new(i||t)(u.Y36(g.yh))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-portfolio"]],decls:10,vars:3,consts:[[1,"portfolio"],[1,"spacer-bottom--x-large"],[1,"layout-container"],["fxFlexAlign","start",1,"layout-section--1x"],[1,"paragraph--medium"],["fxFlexAlign","start",1,"layout-section--2x"],[4,"ngIf"],[3,"index","detail",4,"ngFor","ngForOf"],[3,"index","detail"]],template:function(i,m){1&i&&(u.TgZ(0,"app-page-template",0),u._UZ(1,"div",1),u.TgZ(2,"app-page-section-template")(3,"section",2)(4,"div",3)(5,"p",4),u._uU(6," Some of my personal projects I developed for demoing and implementing different concepts and functionality. These are publicly available on GitHub. "),u.qZA()(),u.TgZ(7,"div",5),u.YNc(8,yt,2,1,"div",6),u.ALo(9,"async"),u.qZA()()()()),2&i&&(u.xp6(8),u.Q6J("ngIf",u.lcZ(9,1,m.portfolioCards$)))},directives:[pt.A,gt.k,Mt.XD,T.O5,T.sg,ht.O],pipes:[T.Ov],styles:[""]}),t})()}];let bt=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[G.Bz.forChild(vt)],G.Bz]}),t})();var xt=h(4466);let At=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[T.ez,bt,g.Aw.forFeature(_,ut),z.o9,K,U.ot,J.t,xt.m]]}),t})()}}]);