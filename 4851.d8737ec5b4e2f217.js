"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(b,s,a)=>{a.r(s),a.d(s,{HomePageModule:()=>h});var d=a(4755),o=a(7002),i=a(5030),c=a(2852),e=a(3020),g=a(7557);const p=[{path:"",component:(()=>{class n{constructor(t,r){this.formBuilder=t,this.merakiService=r,this.clientIp="",this.loginForm=this.formBuilder.group({name:["",[i.kI.required,i.kI.pattern("^[a-zA-Z ]*$"),i.kI.minLength(3)]],email:["",[i.kI.required,i.kI.email]],company:[""]})}ngOnInit(){this.merakiService.clientIp$.subscribe(t=>{this.clientIp=t,console.log("clientIp: ",this.clientIp)}),this.merakiService.baseGrantUrl$.subscribe(t=>{console.log("baseGrantUrl: ",t)})}onFormSubmit(){this.loginForm.valid&&this.merakiService.login(this.loginForm.value.name,this.loginForm.value.email,this.loginForm.value.company)}get name(){return this.loginForm.get("name")}get email(){return this.loginForm.get("email")}get company(){return this.loginForm.get("company")}onKeyPress(t){let m=String.fromCharCode(t.charCode);/[a-zA-Z ]/.test(m)||t.preventDefault()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.qu),e.Y36(g.J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:24,vars:6,consts:[[1,"full-height"],[1,"container"],[1,"blue-col","size-full","size-md-half"],["justify-content-center","","align-items-center",""],["size","6","size-lg","8","offset-lg","2"],[1,"login-box"],["lines","none",3,"inset"],[3,"formGroup","ngSubmit"],["src","../../assets/img/logo.png","alt","Logo","id","logo"],["name","person-outline","slot","start","size","small","aria-hidden","true"],["formControlName","name","type","text","label","Name","labelPlacement","floating","placeholder","Enter Name","errorText","Invalid name","required","true",3,"clearInput","keypress"],["name","mail-outline","slot","start","size","small","aria-hidden","true"],["formControlName","email","type","email","label","Email input","labelPlacement","floating","placeholder","email@domain.com","errorText","Invalid email","autocomplete","on","required","true",3,"clearInput"],["name","business-outline","slot","start","size","small","aria-hidden","true"],["formControlName","company","label","Company name (optional)","labelPlacement","floating","placeholder","Enter text","errorText"," ",3,"clearInput"],["type","submit","shape","round","id","loginButton",3,"disabled"],[1,"red-col","size-hidden","size-md-half"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"div",2)(3,"ion-grid")(4,"ion-row",3)(5,"ion-col",4)(6,"div",5)(7,"ion-list",6)(8,"form",7),e.NdJ("ngSubmit",function(){return r.onFormSubmit()}),e.TgZ(9,"ion-list-header")(10,"ion-label"),e._UZ(11,"ion-img",8),e.qZA()(),e.TgZ(12,"ion-item"),e._UZ(13,"ion-icon",9),e.TgZ(14,"ion-input",10),e.NdJ("keypress",function(f){return r.onKeyPress(f)}),e.qZA()(),e.TgZ(15,"ion-item"),e._UZ(16,"ion-icon",11)(17,"ion-input",12),e.qZA(),e.TgZ(18,"ion-item"),e._UZ(19,"ion-icon",13)(20,"ion-input",14),e.qZA(),e.TgZ(21,"ion-button",15),e._uU(22,"Log in to WiFi"),e.qZA()()()()()()()(),e._UZ(23,"div",16),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("inset",!0),e.xp6(1),e.Q6J("formGroup",r.loginForm),e.xp6(6),e.Q6J("clearInput",!0),e.xp6(3),e.Q6J("clearInput",!0),e.xp6(3),e.Q6J("clearInput",!0),e.xp6(1),e.Q6J("disabled",!r.loginForm.valid))},dependencies:[i._Y,i.JJ,i.JL,i.Q7,o.YG,o.wI,o.W2,o.jY,o.gu,o.Xz,o.pK,o.Ie,o.Q$,o.q_,o.yh,o.Nd,o.j9,i.sg,i.u],styles:['html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], ion-app[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{height:100%;width:100%;margin:0;padding:0}ion-content[_ngcontent-%COMP%]{--ion-safe-area-top: 0}.container[_ngcontent-%COMP%]{display:flex}.blue-col[_ngcontent-%COMP%], .red-col[_ngcontent-%COMP%]{height:100%}.blue-col[_ngcontent-%COMP%]{background-color:#23448a;position:fixed;box-shadow:0 5px 30px #000000b3}.login-box[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:80vw;max-width:400px;height:auto;max-height:750px;background-color:#fff;border-radius:20px;padding:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;box-shadow:0 5px 15px #00000080;z-index:1}.size-full[_ngcontent-%COMP%]{width:100%}.size-hidden[_ngcontent-%COMP%]{width:0}.red-col[_ngcontent-%COMP%]:before{content:"";position:fixed;top:0;right:0;bottom:0;left:0;z-index:-1}#logo[_ngcontent-%COMP%]{width:20vw;height:7vh;max-width:200px;display:block;margin:0 auto}ion-list[_ngcontent-%COMP%]{width:100%}ion-input[_ngcontent-%COMP%]{--border-color: #23448a;--border-radius: 10px;--padding-start: 2vw;--padding-end: 2vw;--padding-top: 2vh;--padding-bottom: 2vh;--placeholder-color: #959595;--placeholder-opacity: .5;--placeholder-font-style: italic;--placeholder-font-size: 1.2em;--color: #102c69b5}#loginButton[_ngcontent-%COMP%]{--background: #23448a;--border-radius: 10px;--color: white;--padding-start: 2vw;--padding-end: 2vw;--padding-top: 2vh;--padding-bottom: 2vh;--margin-top: 5vh;--margin-bottom: 2vh}']}),n})()}];let u=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(p),c.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,i.u5,o.Pc,u,i.UX]}),n})()}}]);