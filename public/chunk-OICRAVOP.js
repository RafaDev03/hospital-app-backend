import{c as S}from"./chunk-KWENZZAW.js";import{La as c,Qa as f,Ra as v,Sa as g,Ta as r,U as s,Ua as d,Va as l,aa as h,eb as y,fb as C,mb as p,xa as o,ya as m}from"./chunk-OW2OVBTG.js";import"./chunk-5FZOKLP6.js";var I=(()=>{let t=class t{constructor(){this.titulo="",this.data=[],this.doughnutChartLabels=["Download Sales","In-Store Sales","Mail-Order Sales"],this.doughnutChartData={labels:this.doughnutChartLabels,datasets:[]},this.doughnutChartType="doughnut"}ngOnInit(){this.doughnutChartData.datasets=[{data:this.data}]}chartClicked({event:i,active:e}){console.log(i,e)}chartHovered({event:i,active:e}){console.log(i,e)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["app-doughnut"]],inputs:{titulo:"titulo",data:"data"},standalone:!0,features:[p],decls:6,vars:3,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-center"],["chartType","doughnut"],["baseChart","",3,"data","type"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1)(2,"h5",2),y(3),d(),r(4,"div",3),l(5,"canvas",4),d()()()),e&2&&(o(3),C(n.titulo?n.titulo:"Sin Titulo"),o(2),c("data",n.doughnutChartData)("type",n.doughnutChartType))},dependencies:[S]});let a=t;return a})();var G=[{data:[350,450,100],title:""},{data:[300,300,300],title:"Ventas"},{data:[600,100,200],title:"Almac\xE9n"},{data:[350,450,100],title:"TI"},{data:[350,450,100],title:""}];var T=(()=>{let t=class t{constructor(){}getDataGraph(){return G}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();function F(a,t){if(a&1&&(r(0,"div",1),l(1,"app-doughnut",2),d()),a&2){let u=t.$implicit;o(),c("data",u.data)("titulo",u.title)}}var k=(()=>{let t=class t{constructor(i){this.dataGraphService=i}ngOnInit(){this.dataGraph=this.dataGraphService.getDataGraph()}};t.\u0275fac=function(e){return new(e||t)(m(T))},t.\u0275cmp=s({type:t,selectors:[["app-grafica1"]],standalone:!0,features:[p],decls:3,vars:0,consts:[[1,"row"],[1,"col-4"],[3,"data","titulo"],["class","col-4"]],template:function(e,n){e&1&&(r(0,"div",0),v(1,F,2,2,"div",3,f),d()),e&2&&(o(),g(n.dataGraph))},dependencies:[I]});let a=t;return a})();export{k as Grafica1Component};