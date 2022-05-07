"use strict";(self.webpackChunkabout_me=self.webpackChunkabout_me||[]).push([[147],{8147:(T,c,o)=>{o.r(c),o.d(c,{HomeModule:()=>A});var r=o(9808),u=o(2155),h=o(4834),f=o(7423),m=o(7280),g=o(5620),x=o(8790),p=o(7871),t=o(5e3),C=o(7934),v=o(9281),s=o(7093),l=(()=>{return(e=l||(l={})).down="0",e.up="90",e.right="45",e.left="-45",l;var e})();let y=(()=>{class e{constructor(){this.arrowType="down",this.colorHex=p.u.Bark400}get arrow(){return l[this.arrowType]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-arrow-icon"]],inputs:{arrowType:"arrowType",colorHex:"colorHex"},decls:2,vars:1,consts:[["xmlns","http://www.w3.org/2000/svg","width","55","height","55","viewBox","0 0 350 350"],["id","arrow-icon","d","M295.7,163.7a13.067,13.067,0,0,0-.1,18.4L356.3,243H125a13,13,0,0,0,0,26H356.3l-60.8,60.9a13.161,13.161,0,0,0,.1,18.4,12.947,12.947,0,0,0,18.3-.1l82.4-83a14.6,14.6,0,0,0,2.7-4.1,12.407,12.407,0,0,0,1-5,13.034,13.034,0,0,0-3.7-9.1l-82.4-83a12.739,12.739,0,0,0-18.2-.3Z","transform","translate(352.038 -112.1) rotate(90)"]],template:function(n,a){1&n&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"path",1),t.qZA()),2&n&&(t.xp6(1),t.uIk("fill",a.colorHex))},styles:[""]}),e})();var M=o(7354),O=o(327);function w(e,i){if(1&e&&(t.TgZ(0,"div",12)(1,"div",13),t._uU(2),t.qZA(),t.TgZ(3,"p",14),t._uU(4),t.qZA(),t.TgZ(5,"p",15),t._uU(6),t.qZA(),t.TgZ(7,"p",16),t._uU(8),t.qZA()()),2&e){const n=i.ngIf;t.xp6(2),t.hij(" ",n.occupationType," "),t.xp6(2),t.hij(" ",n.occupation," "),t.xp6(2),t.hij(" ",n.description," "),t.xp6(2),t.Oqu(n.fullName)}}function P(e,i){if(1&e&&t._UZ(0,"app-callout-detail",17),2&e){const n=i.$implicit;t.Q6J("index",i.index)("detail",n)}}const Z=[{path:"",component:(()=>{class e{constructor(n){this.store=n,this.color=p.u,this.personal$=null,this.aboutContentCard={title:"Providing valuable and impactful contributions.",linkLabel:"More About Me",link:"about",image:"assets/images/content/brainstorm-image.jpg"},this.resumeContentCard={title:"Extensive collaboration with teams to deliver business results.",linkLabel:"Resume",link:"resume",image:"assets/images/content/teamwork-image.jpg"},this.calloutDetails=[{title:"Creative",subtitle:"ideas",content:"\n      Looking at things in a different way to offer new and original ideas.\n      "},{title:"Detailed",subtitle:"analysis",content:"\n      Evaluating concepts and ideas thoroughly before implementation.\n      "},{title:"Effective",subtitle:"solutions",content:"\n      Building solutions that meet requirements and deliver results.\n      "}]}ngOnInit(){this.personal$=this.store.pipe((0,g.Ys)(x.Oj))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:27,vars:6,consts:[[1,"home"],[1,"spacer-bottom--x-large"],[1,"layout-container"],["fxFlexAlign","start",1,"layout-section--1x"],["class","home__heading","fxLayout","column","fxLayoutAlign","start end",4,"ngIf"],[1,"layout-section--1x","width-fill"],[1,"home__image-container"],["src","assets/images/profile/profile-1-image.png","alt","idea",1,"home__image"],[3,"content"],[3,"index","detail",4,"ngFor","ngForOf"],["fxFlexAlign","start center",1,"layout-section--1x"],[1,"paragraph--medium"],["fxLayout","column","fxLayoutAlign","start end",1,"home__heading"],[1,"home__subtitle","font-size--large"],[1,"home__title","font-size--xx-large"],[1,"home__description"],[1,"home__name"],[3,"index","detail"]],template:function(n,a){1&n&&(t.TgZ(0,"app-page-template",0),t._UZ(1,"div",1),t.TgZ(2,"app-page-section-template")(3,"section",2)(4,"div",3),t.YNc(5,w,9,4,"div",4),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"div",5)(8,"div",6),t._UZ(9,"img",7),t.qZA()()()(),t.TgZ(10,"app-page-section-template"),t._UZ(11,"app-arrow-icon"),t.qZA(),t.TgZ(12,"app-page-section-template")(13,"section",2)(14,"div",3),t._UZ(15,"app-content-card",8),t.qZA(),t.TgZ(16,"div",3),t.YNc(17,P,1,2,"app-callout-detail",9),t.qZA()()(),t.TgZ(18,"app-page-section-template")(19,"section",2)(20,"div",3),t._UZ(21,"app-content-card",8),t.qZA(),t.TgZ(22,"div",10)(23,"p",11),t._uU(24," Background of working and collaborating across departments and teams to achieve goals. "),t.qZA(),t.TgZ(25,"p",11),t._uU(26," I have worked closely with design and branding teams for assessing UI/UX for improvements and technical feasibility. Collaborated with product team members to gather and determine project requirements. Additionally worked with back end engineers for establishing API contracts and integrations. "),t.qZA()()()()()),2&n&&(t.xp6(5),t.Q6J("ngIf",t.lcZ(6,4,a.personal$)),t.xp6(10),t.Q6J("content",a.aboutContentCard),t.xp6(2),t.Q6J("ngForOf",a.calloutDetails),t.xp6(4),t.Q6J("content",a.resumeContentCard))},directives:[C.A,v.k,s.XD,r.O5,s.xw,s.Wh,y,M.$,r.sg,O.O],pipes:[r.Ov],styles:[".text-align--left[_ngcontent-%COMP%]{text-align:left}.text-align--center[_ngcontent-%COMP%]{text-align:center}.text-align--right[_ngcontent-%COMP%]{text-align:right}.font-size--xx-large[_ngcontent-%COMP%]{font-size:3.25rem;line-height:3.5rem;font-weight:300}.font-size--x-large[_ngcontent-%COMP%]{font-size:2.813rem;line-height:3.063rem;font-weight:300}.font-size--large[_ngcontent-%COMP%]{font-size:2rem;line-height:2.75rem;font-weight:400}.font-size--medium[_ngcontent-%COMP%], .home__description[_ngcontent-%COMP%], .home__name[_ngcontent-%COMP%], .paragraph--medium[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.5rem;font-weight:400}.font-size--regular[_ngcontent-%COMP%], .paragraph--regular[_ngcontent-%COMP%]{font-size:1rem;line-height:1.25rem}.font-size--small[_ngcontent-%COMP%]{font-size:.875rem;line-height:.875rem}.spacer-bottom--x-large[_ngcontent-%COMP%]{margin-bottom:3.5rem}.spacer-bottom--large[_ngcontent-%COMP%]{margin-bottom:2rem}.spacer-bottom--medium[_ngcontent-%COMP%]{margin-bottom:1rem}.paragraph--medium[_ngcontent-%COMP%]{margin:1.5rem 0;color:#f2f2f2;font-weight:300;line-height:1.5}.paragraph--regular[_ngcontent-%COMP%]{margin:.5rem 0;color:#f2f2f2;font-weight:400;line-height:1.5}.icon--small[_ngcontent-%COMP%]{width:2rem;display:inline-block}.icon--medium[_ngcontent-%COMP%]{width:3.5rem;display:inline-block}.image--small[_ngcontent-%COMP%]{max-width:10rem}.app-link[_ngcontent-%COMP%]{text-decoration:underline;position:relative;bottom:.5rem;color:#f2f2f2;margin:0 .25rem;font-weight:400;cursor:pointer;text-transform:capitalize;display:inline-block}.width-fill[_ngcontent-%COMP%]{width:100%}.layout[_ngcontent-%COMP%], .layout-container-reverse[_ngcontent-%COMP%], .layout-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1.875rem}@media (max-width: 959.9px){.layout-container[_ngcontent-%COMP%]{flex-direction:column!important}}@media (max-width: 959.9px){.layout-container-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}}.layout-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.layout-section--1x[_ngcontent-%COMP%]{flex:1 0 0}.layout-section--2x[_ngcontent-%COMP%]{flex:2 0 0}.home__heading[_ngcontent-%COMP%]{text-align:right;color:#f2f2f2}.home__image-container[_ngcontent-%COMP%]{background:url(gray-texture-image.bd264376f62c9ba3.jpg) no-repeat center center;background-size:cover;max-width:30.875rem}.home__image[_ngcontent-%COMP%]{max-width:11rem;position:relative;left:8%;top:.5rem}.home__description[_ngcontent-%COMP%]{color:#5c5d5d;max-width:20.375rem}.home__name[_ngcontent-%COMP%]{font-weight:300}"]}),e})()}];let _=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.Bz.forChild(Z)],m.Bz]}),e})();var b=o(4466);let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.ez,u.o9,h.t,f.ot,_,b.m]]}),e})()}}]);