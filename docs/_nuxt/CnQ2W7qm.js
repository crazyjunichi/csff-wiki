import{f as b,c as j,i as p,j as l,w as u,z as y,q as k,e as d,o as r,d as f,t as g}from"./CxuzRj8Q.js";const x={class:"",style:{height:"1em"}},h=b({__name:"GameLink",props:{obj:{},text:{},href:{}},setup(m){const t=m;function _(){var e,c,a,s,o,n,i;return{textCard:((e=t.obj)==null?void 0:e.type)=="card"||!((c=t.obj)!=null&&c.type),textTag:((a=t.obj)==null?void 0:a.type)=="tag",textStat:((s=t.obj)==null?void 0:s.type)=="stat",textAction:((o=t.obj)==null?void 0:o.type)=="action",textSpice:((n=t.obj)==null?void 0:n.type)=="spice"||((i=t.obj)==null?void 0:i.type)=="flavour"}}return(e,c)=>{const a=k,s=d;return r(),j("span",x,[e.obj&&e.obj.icon?(r(),p(a,{key:0,class:"object-contain inline-block",height:"16px",src:`/Sprite/${e.obj.icon}.png`},null,8,["src"])):l("",!0),e.obj?(r(),p(s,{key:1,class:y([_(),"truncate underline decoration-sky-500/30 pageLink texta decoration-16 -underline-offset-16"]),to:e.href||`/${e.obj.key}`},{default:u(()=>{var o,n;return[f(g(e.text||((o=e.obj)==null?void 0:o.text)||((n=e.obj)==null?void 0:n.key)||"?????"),1)]}),_:1},8,["class","to"])):l("",!0)])}}}),L=Object.assign(h,{__name:"GameLink"});export{L as _};
