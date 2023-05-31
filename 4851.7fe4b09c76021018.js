"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(f,c,a)=>{a.r(c),a.d(c,{HomePageModule:()=>h});var g=a(4755),o=a(7002),i=a(5030),d=a(2852),e=a(3020),m=a(7557);const u=[{path:"",component:(()=>{class n{constructor(t,l){this.formBuilder=t,this.merakiService=l,this.clientIp="",this.clientMac="",this.clientBaseGrantUrl="",this.clientUserContinueUrl="",this.loginForm=this.formBuilder.group({email:["",[i.kI.required,i.kI.email]]})}ngOnInit(){this.merakiService.clientIp$.subscribe(t=>{this.clientIp=t}),this.merakiService.baseGrantUrl$.subscribe(t=>{this.clientBaseGrantUrl=t}),this.merakiService.userContinueUrl$.subscribe(t=>{this.clientUserContinueUrl=t}),this.merakiService.clientMac$.subscribe(t=>{this.clientMac=t})}onFormSubmit(){this.loginForm.valid&&this.merakiService.login(this.loginForm.value.name,this.loginForm.value.email,this.loginForm.value.company)}get email(){return this.loginForm.get("email")}onKeyPress(t){let s=t.key;/[a-zA-Z \xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda]/.test(s)||(console.log("Invalid character, prevent input: ",s),t.preventDefault())}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.qu),e.Y36(m.J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:18,vars:4,consts:[[1,"full-height"],[1,"container"],[1,"blue-col","size-full","size-md-half"],["justify-content-center","","align-items-center",""],["size","6","size-lg","8","offset-lg","2"],[1,"login-box"],["lines","none",3,"inset"],[3,"formGroup","ngSubmit"],["src","assets/img/logo.png","id","logo"],["name","mail-outline","slot","start","size","small","aria-hidden","true"],["formControlName","email","type","email","label","Email input","labelPlacement","floating","placeholder","email@domain.com","errorText","Invalid email","autocomplete","on","required","true",3,"clearInput"],["type","submit","shape","round","id","loginButton",1,"space-above",3,"disabled"],[1,"red-col","size-hidden","size-md-half"]],template:function(t,l){1&t&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"div",2)(3,"ion-grid")(4,"ion-row",3)(5,"ion-col",4)(6,"div",5)(7,"ion-list",6)(8,"form",7),e.NdJ("ngSubmit",function(){return l.onFormSubmit()}),e.TgZ(9,"ion-list-header")(10,"ion-label"),e._UZ(11,"ion-img",8),e.qZA()(),e.TgZ(12,"ion-item"),e._UZ(13,"ion-icon",9)(14,"ion-input",10),e.qZA(),e.TgZ(15,"ion-button",11),e._uU(16,"Log in to WiFi"),e.qZA()()()()()()()(),e._UZ(17,"div",12),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("inset",!0),e.xp6(1),e.Q6J("formGroup",l.loginForm),e.xp6(6),e.Q6J("clearInput",!0),e.xp6(1),e.Q6J("disabled",!l.loginForm.valid))},dependencies:[i._Y,i.JJ,i.JL,i.Q7,o.YG,o.wI,o.W2,o.jY,o.gu,o.Xz,o.pK,o.Ie,o.Q$,o.q_,o.yh,o.Nd,o.j9,i.sg,i.u],styles:['html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], ion-app[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{height:100%;width:100%;margin:0;padding:0}ion-content[_ngcontent-%COMP%]{--ion-safe-area-top: 0}.container[_ngcontent-%COMP%]{display:flex}.blue-col[_ngcontent-%COMP%], .red-col[_ngcontent-%COMP%]{height:100%}.blue-col[_ngcontent-%COMP%]{background-color:#23448a;position:fixed;box-shadow:0 5px 30px #000000b3}.login-box[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:80vw;max-width:400px;height:auto;max-height:750px;background-color:#fff;border-radius:20px;padding:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;box-shadow:0 5px 15px #00000080;z-index:1}.size-full[_ngcontent-%COMP%]{width:100%}.size-hidden[_ngcontent-%COMP%]{width:0}.red-col[_ngcontent-%COMP%]:before{content:"";position:fixed;top:0;right:0;bottom:0;left:0;z-index:-1}#logo[_ngcontent-%COMP%]{width:20vw;height:7vh;max-width:200px;display:block;margin:0 auto 20px}ion-list[_ngcontent-%COMP%]{width:100%}ion-input[_ngcontent-%COMP%]{--border-color: #23448a;--border-radius: 10px;--padding-start: 2vw;--padding-end: 2vw;--padding-top: 2vh;--padding-bottom: 2vh;--placeholder-color: #959595;--placeholder-opacity: .5;--placeholder-font-style: italic;--placeholder-font-size: 1.2em;--color: #102c69b5}#loginButton[_ngcontent-%COMP%]{--background: #23448a;--border-radius: 10px;--color: white;--padding-start: 2vw;--padding-end: 2vw;--padding-top: 2vh;--padding-bottom: 2vh;--margin-top: 5vh;--margin-bottom: 2vh}.space-above[_ngcontent-%COMP%]{margin-top:30px}']}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(u),d.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,i.u5,o.Pc,p,i.UX]}),n})()}}]);