import{f as c,c as o,o as a,d as R,a as s,q as V,m as g,t as n,g as r}from"./DHhi54m_.js";const _={class:"font-mono font-bold"},x={class:"font-mono font-bold"},d={key:0,class:"text-xs"},m={key:1},$=c({__name:"InterpolatedValue",props:{obj:{},joiner:{},outputSign:{type:Boolean}},setup(f){const e=f;let t=(e.obj.WhenOutOfRange==0||e.obj.WhenOutOfRange>2)&&e.obj.OutputValueRange.x==0&&e.obj.OutputValueRange.y==0,l=e.joiner??"";t&&(l="时");function i(){return t?"非":""}function O(){return e.obj.InputValueRange.x==e.obj.InputValueRange.y?`${e.obj.InputValueRange.x}`:`(${e.obj.InputValueRange.x}~${e.obj.InputValueRange.y})`}function j(){if(t)return"";let u=e.outputSign?e.obj.OutputValueRange.x>=0?`+${e.obj.OutputValueRange.x}`:`${e.obj.OutputValueRange.x}`:`${e.obj.OutputValueRange.x}`,p=e.outputSign?e.obj.OutputValueRange.y>=0?`+${e.obj.OutputValueRange.y}`:`${e.obj.OutputValueRange.y}`:`${e.obj.OutputValueRange.y}`;return e.obj.OutputValueRange.x==e.obj.OutputValueRange.y?`${u}`:`(${u}~${p})`}function b(){if(t)return"";if(e.obj.WhenOutOfRange==1)return"(限定区间)";if(e.obj.WhenOutOfRange==0)return"";if(e.obj.WhenOutOfRange==2)return`超出范围取值${e.obj.OutOfRangeCustomValue}`;if(e.obj.WhenOutOfRange==3)return"(超出范围取消)";if(e.obj.WhenOutOfRange==4)return"(超出范围必出)"}return(u,p)=>(a(),o("span",null,[R(n(i())+" ",1),s("span",_,n(O()),1),s("span",null,n(r(l)),1),V(u.$slots,"default"),s("span",x,n(j()),1),r(t)?g("",!0):(a(),o("span",d,n(b()),1)),r(t)?(a(),o("span",m,"取消")):g("",!0)]))}}),y=Object.assign($,{__name:"InterpolatedValue"});export{y as _};
