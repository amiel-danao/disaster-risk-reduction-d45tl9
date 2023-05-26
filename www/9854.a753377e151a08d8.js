"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9854],{9854:(O,u,a)=>{a.r(u),a.d(u,{TicketsPageModule:()=>y});var l=a(6895),p=a(433),n=a(4556),d=a(131),m=a(655),s=a(7396),t=a(8256),g=a(3692),f=a(7556);let h=(()=>{class e{transform(i){return i.toDate().toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"})}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=t.Yjl({name:"timestampToDate",type:e,pure:!0}),e})();function T(e,o){if(1&e&&(t.TgZ(0,"p",6),t._uU(1),t.qZA()),2&e){const i=t.oxw().$implicit;t.xp6(1),t.Oqu(i.userName)}}function A(e,o){if(1&e&&(t.TgZ(0,"p",6),t._uU(1),t.qZA()),2&e){const i=t.oxw().$implicit;t.xp6(1),t.Oqu(i.rescuerName)}}function k(e,o){if(1&e&&(t.TgZ(0,"ion-item")(1,"ion-text"),t._uU(2),t.ALo(3,"timestampToDate"),t._UZ(4,"br"),t.TgZ(5,"ion-text"),t._uU(6),t.qZA(),t._UZ(7,"br"),t.YNc(8,T,2,1,"p",4),t.YNc(9,A,2,1,"ng-template",null,5,t.W1O),t.qZA()()),2&e){const i=o.$implicit,c=t.MAs(10),r=t.oxw();t.xp6(2),t.hij("",t.lcZ(3,4,i.dateSubmitted)," "),t.xp6(4),t.Oqu(i.emergencyType),t.xp6(2),t.Q6J("ngIf",r.isAdmin)("ngIfElse",c)}}const P=[{path:"",component:(()=>{class e{constructor(i,c,r){this.firebaseApp=i,this.auth=c,this.loadingController=r,this.isAdmin=!1}ngOnInit(){return(0,m.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({message:"Loading..."}),yield this.loading.present(),yield this.checkIfAdmin();const i=this.auth.getAuth.currentUser.uid;let c=(0,s.IO)((0,s.hJ)((0,s.ad)(this.firebaseApp),"Tickets"),(0,s.ar)("userId","==",i),(0,s.Xo)("dateSubmitted"));this.isAdmin&&(c=(0,s.IO)((0,s.hJ)((0,s.ad)(this.firebaseApp),"Tickets"),(0,s.ar)("rescuerId","==",i),(0,s.Xo)("dateSubmitted"))),(0,s.PL)(c).then(r=>{const v=r.docs.map(x=>x.data());this.tickets=v,this.loading.dismiss()}).catch(r=>{console.error("Error fetching tickets:",r)})})}checkIfAdmin(){return(0,m.mG)(this,void 0,void 0,function*(){const i=(0,s.JU)((0,s.ad)(this.firebaseApp),"admins",this.auth.getAuth.currentUser.uid),c=yield(0,s.QT)(i);this.isAdmin=c.exists(),console.log(`isAdmin: ${this.isAdmin}`)})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(g.Ot),t.Y36(f.e),t.Y36(n.HT))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tickets"]],decls:14,vars:1,consts:[["slot","start"],["defaultHref","/"],["lines","full"],[4,"ngFor","ngForOf"],["class","new-line",4,"ngIf","ngIfElse"],["notAvailableText",""],[1,"new-line"]],template:function(i,c){1&i&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Rescue Tickets"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-card")(8,"ion-card-header")(9,"ion-card-title"),t._uU(10,"Your Tickets"),t.qZA()(),t.TgZ(11,"ion-card-content")(12,"ion-list",2),t.YNc(13,k,11,6,"ion-item",3),t.qZA()()()()),2&i&&(t.xp6(13),t.Q6J("ngForOf",c.tickets))},dependencies:[l.sg,l.O5,n.oU,n.Sm,n.PM,n.FN,n.Zi,n.Dq,n.W2,n.Gu,n.Ie,n.q_,n.yW,n.wd,n.sr,n.cs,h],styles:["ion-title[_ngcontent-%COMP%], ion-card-title[_ngcontent-%COMP%]{color:#fff}.new-line[_ngcontent-%COMP%]{display:block;margin-top:1em}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(P),d.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,p.u5,n.Pc,Z]}),e})()}}]);