import{_ as m}from"./N61w77W8.js";import{i as u,g as f}from"./CCTKLA_0.js";import{f as _,c as r,o,F as d,r as c,m as V,a as M,b as y,t as p,g as k}from"./BPNI_pLR.js";function g(e){return[{appilies:e.MeleeApplies,modifier:e.MeleeSkillModifier,name:"近战",key:"MeleeSkill"},{appilies:e.RangedApplies,modifier:e.RangedSkillModifier,name:"远程",key:"RangedSkill"},{appilies:e.BloodApplies,modifier:e.BloodModifier,name:"血量",key:"Blood"},{appilies:e.StaminaApplies,modifier:e.StaminaModifier,name:"体力",key:"Stamina"},{appilies:e.MoraleApplies,modifier:e.MoraleModifier,name:"士气",key:"Morale"},{appilies:e.Value1Applies,modifier:e.Value1Modifier,name:"数值1",key:"Value1"},{appilies:e.Value2Applies,modifier:e.Value2Modifier,name:"数值2",key:"Value2"},{appilies:e.Value3Applies,modifier:e.Value3Modifier,name:"数值3",key:"Value3"},{appilies:e.Value4Applies,modifier:e.Value4Modifier,name:"数值4",key:"Value4"}].filter(n=>!u(n.modifier))}const A={class:"mr-2"},$={key:0},b={class:"text-durability"},S=_({__name:"EnemyValuesModifiers",props:{obj:{},encounter:{}},setup(e){return(a,s)=>{const n=m;return o(),r("div",null,[(o(!0),r(d,null,c(k(g)(a.obj),i=>{var l,t;return o(),r("span",A,[i.appilies!=0?(o(),r("span",$,p(["","(成功时)","(失败时)"][i.appilies]),1)):V("",!0),M("span",b,p(((t=(l=a.encounter)==null?void 0:l[i.key])==null?void 0:t.Name)||i.name),1),y(n,{obj:i.modifier,sign:!0},null,8,["obj"])])}),256))])}}}),L=Object.assign(S,{__name:"EnemyValuesModifiers"});function x(e){return e===null||e.m_X===0&&e.m_Y===0}function B(e){return e===null?"":e.m_X==e.m_Y?`${e.m_X}`:`(${e.m_X}~${e.m_Y})`}function R(e){let a=["Head","Torso","LArm","RArm","LLeg","RLeg"],s=["头部","身体","左臂","右臂","左腿","右腿"],n=[];for(let i of a){let l=e[`${i}ProbModifier`],t=e[`${i}DefenseModifier`];x(l)||n.push(`${s[a.indexOf(i)]}概率${B(l)}`),u(t)||n.push(`${s[a.indexOf(i)]}防御${f(t)}`)}return n.join(", ")}export{L as _,g as a,R as g,x as i};
