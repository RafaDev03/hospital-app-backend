import{a as Y}from"./chunk-SY2QTNOQ.js";import{a as Z}from"./chunk-MNJCX6HE.js";import{a as X}from"./chunk-2T5LEQTV.js";import{c as U,e as R}from"./chunk-QHUTG37M.js";import{a as A}from"./chunk-UW666MUF.js";import{a as oe}from"./chunk-PDI3HUYS.js";import"./chunk-WGZ3CRYS.js";import{b as G,c as x,d as $,e as z,g as O,h as q,i as P,j as J,k as K,l as L,m as Q,o as W}from"./chunk-ASKZ6QKQ.js";import"./chunk-4PVG4ZNA.js";import{D as v,Ja as S,La as m,Pa as b,Qa as k,Ra as M,Sa as T,Ta as r,U as B,Ua as i,Va as g,Y as N,Ya as j,Z as V,Za as u,_a as h,eb as a,fb as _,l as F,mb as H,pb as C,qb as y,ua as f,xa as l,y as w,ya as d}from"./chunk-OW2OVBTG.js";import{a as I,b as E,d as ie}from"./chunk-5FZOKLP6.js";var D=ie(oe());function re(n,c){if(n&1){let s=j();r(0,"div",7)(1,"label",17),a(2,"Img"),i(),r(3,"img",18),u("click",function(){N(s);let e=h();return V(e.openModal(e.doctorSeleceted))}),C(4,"img"),i()()}if(n&2){let s=h();l(3),m("src",y(4,1,s.doctorSeleceted.img,"doctors"),f)}}function ne(n,c){if(n&1&&(r(0,"option",19),a(1),i()),n&2){let s=c.$implicit;m("value",s.id),l(),_(s.name)}}function ae(n,c){if(n&1&&(r(0,"div",20)(1,"div",2)(2,"div",3)(3,"h4",4),a(4,"Hospital"),i(),r(5,"h5",21),a(6),i(),g(7,"img",22),C(8,"img"),i()()()),n&2){let s=h();l(6),_(s.hospitalSelected.name),l(),m("src",y(8,2,s.hospitalSelected.img,"hospitals"),f)}}var fe=(()=>{let c=class c{constructor(t,e,o,p,ee,te){this.fb=t,this.hospitalService=e,this.modalService=o,this.doctorService=p,this.router=ee,this.activatedRoute=te,this.hospitals=[]}ngOnInit(){this.findHospitals(),this.fidDoctorById(),this.newImagen(),this.doctorForm=this.fb.group({name:["",x.required],hospital:["",x.required]}),this.doctorForm.get("hospital")?.valueChanges.pipe(v(100)).subscribe(t=>{this.hospitalSelected=this.hospitals.find(e=>e.id===t)})}saveDoctor(){let{name:t}=this.doctorForm.value;if(this.doctorSeleceted){let e=E(I({},this.doctorForm.value),{id:this.doctorSeleceted?.id});this.doctorService.updateDoctor(e).subscribe(o=>{console.log(o),D.default.fire("Update",`${t} actualizado correctamente`,"success")})}else this.doctorService.createDopctor(this.doctorForm.value).subscribe(e=>{e.ok&&(D.default.fire("Created",`${t} creado correctamente`,"success"),this.router.navigateByUrl(`dashboard/doctor/${e.doctor.id}`))})}findHospitals(){this.hospitalService.findHospitals().subscribe(t=>{this.hospitals=t})}fidDoctorById(){this.activatedRoute.params.subscribe(({id:t})=>{t!=="create"&&this.doctorService.findDoctorById(t).pipe(w(e=>(this.router.navigateByUrl("dashboard/doctors"),F(null)))).subscribe(e=>{if(!e)return;this.doctorSeleceted=e;let{name:o,hospital:{_id:p}}=e;this.doctorForm.setValue({name:o,hospital:p})})})}openModal(t){this.modalService.openModal("doctors",t)}cancel(){this.router.navigateByUrl("dashboard/doctors")}newImagen(){this.imgSub=this.modalService.newImg.pipe(v(100)).subscribe(t=>{this.fidDoctorById()})}};c.\u0275fac=function(e){return new(e||c)(d(Q),d(Z),d(A),d(Y),d(R),d(U))},c.\u0275cmp=B({type:c,selectors:[["app-doctor"]],standalone:!0,features:[H],decls:27,vars:4,consts:[[1,"row"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"row","g-3",3,"formGroup","ngSubmit"],["class","col-12"],[1,"col-12"],["for","inputEmail4",1,"form-label"],["type","email","id","inputEmail4","formControlName","name",1,"form-control"],["for","inputPassword4",1,"form-label"],["name","","id","","formControlName","hospital",1,"form-control"],["value",""],[1,"text-center"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","reset",1,"btn","btn-secondary",3,"click"],["class","col animated bounce"],["for","inputNanme4",1,"form-label"],["alt","",1,"w200","form-control","cursor",3,"src","click"],[3,"value"],[1,"col","animated","bounce"],[1,"card-subtible"],["alt","",1,"img-thumbnail",3,"src"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),a(5,"Vertical Form"),i(),r(6,"form",5),u("ngSubmit",function(){return o.saveDoctor()}),S(7,re,5,4,"div",6),r(8,"div",7)(9,"label",8),a(10,"Name"),i(),g(11,"input",9),i(),r(12,"div",7)(13,"label",10),a(14,"Hospital"),i(),r(15,"select",11)(16,"option",12),a(17,"Selecione un hospital"),i(),M(18,ne,2,2,"option",19,k),i()(),r(20,"div",13)(21,"button",14),a(22," Save "),i(),a(23," \xA0 "),r(24,"button",15),u("click",function(){return o.cancel()}),a(25," Cancel "),i()()()()()(),S(26,ae,9,5,"div",16),i()),e&2&&(l(6),m("formGroup",o.doctorForm),l(),b(7,o.doctorSeleceted?7:-1),l(11),T(o.hospitals),l(3),m("disabled",o.doctorForm.invalid),l(5),b(26,o.hospitalSelected?26:-1))},dependencies:[W,O,K,L,G,J,$,z,q,P,X]});let n=c;return n})();export{fe as DoctorComponent};
