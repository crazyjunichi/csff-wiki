import{_ as p}from"./BM_b8qaU.js";import{_ as u}from"./C3A0YVv_.js";import{_ as b}from"./i0dS2Ux_.js";import{T as j}from"./Cj6PLyd1.js";import{i as f}from"./BlHljJyB.js";import{f as k,c as t,o,a as i,k as n,F as a,r as l,b as d,l as C,j as g}from"./B4l7yeGO.js";const v={class:"border-l border-current/10 p-2 rounded-lg"},A={class:"text-sm"},M={key:0},h={key:0,class:"mr-2"},y={key:0,class:"mr-2"},B={key:1,class:"mr-2"},T={key:2},x=k({__name:"ActionModifier",props:{obj:{},receivingCard:{},givenCard:{}},setup(G){return(e,s)=>{const _=p,m=u;return o(),t("div",v,[i("div",A,[(o(!0),t(a,null,l(e.obj.AppliesTo,(r,c)=>(o(),t(a,null,[c>0?(o(),t("span",M,"/")):n("",!0),d(_,{obj:r},null,8,["obj"])],64))),256)),e.obj.BlocksAction?(o(),t("span",h,"(中断!)")):n("",!0)]),C(f)(e.obj.Conditions)?(o(),t("div",y,[d(m,{obj:e.obj.Conditions,card:e.receivingCard},null,8,["obj","card"])])):n("",!0),e.obj.DurationModifier?(o(),t("div",B,[s[0]||(s[0]=i("span",{class:"text-title"},"耗时：",-1)),d(j,{tp:e.obj.DurationModifier,sign:!0},null,8,["tp"])])):n("",!0),e.obj.AddedStatModifiers.length>0?(o(),t("div",T,[s[1]||(s[1]=i("span",{class:"text-title"},"额外影响：",-1)),(o(!0),t(a,null,l(e.obj.AddedStatModifiers,r=>(o(),g(b,{obj:r,class:"mx-1"},null,8,["obj"]))),256))])):n("",!0)])}}}),S=Object.assign(x,{__name:"ActionModifier"});export{S as _};
