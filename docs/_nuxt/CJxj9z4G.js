import{f as I,c as t,o as e,z as J,a as o,t as p,l as R,m as d,b as l,F as g,r as b,w as M,d as f,g as a,b2 as T,i as oe,u as ue,j as ie,k as h}from"./BPNI_pLR.js";import{_ as se}from"./D1K-FsbX.js";import{_ as ee}from"./N61w77W8.js";import{_ as de}from"./D-1otYj8.js";import{_ as te}from"./DKGqIdMn.js";import{_ as z}from"./icrldYbl.js";import{_ as B}from"./CeM_SP6C.js";import{g as ae,_ as me,a as _e}from"./DQt8Vwl2.js";import{_ as pe}from"./BFIrHV2u.js";import{s as X}from"./GBJiKECt.js";import{_ as fe}from"./Bf1Dvcfx.js";import{s as ge}from"./Mfk5E0OP.js";import{_ as be}from"./BheWnx7M.js";import{i as c}from"./CCTKLA_0.js";import"./Ch1KY2pn.js";import"./BMERn43G.js";const ye={key:0},ve={key:1,class:"bg-current/20 border border-current/50 rounded px-1.5 py-0.5 mx-0.5 text-sm"},Me={key:2,class:"bg-current/20 border border-current/50 rounded px-1.5 py-0.5 mx-0.5 text-sm"},Ve=I({__name:"SmallChip",props:{text:{},withContent:{type:Boolean}},setup(i){return(m,_)=>!m.text&&!m.withContent?(e(),t("span",ye)):m.withContent?(e(),t("span",ve,[J(m.$slots,"default")])):(e(),t("span",Me,[o("span",null,p(m.text??""),1),J(m.$slots,"default")]))}}),ne=Object.assign(Ve,{__name:"SmallChip"}),je={class:"text-attribute"},he=I({__name:"NPCStatInstantModifier",props:{obj:{},npc:{}},setup(i){return(m,_)=>{var W;const v=B,u=pe;return e(),t("div",null,[m.obj.TargetAgent?(e(),R(v,{key:0,obj:m.obj.TargetAgent},null,8,["obj"])):d("",!0),o("span",je,p((W=m.obj.TargetStat)==null?void 0:W.name),1),l(u,{obj:m.obj.ValueChange,sign:!0},null,8,["obj"])])}}}),re=Object.assign(he,{__name:"NPCStatInstantModifier"});function le(i){switch(i){case 0:return"继续战斗";case 1:return"击败了对手";case 2:return"对手逃跑了";case 3:return"玩家逃跑了";case 4:return"Special1";case 5:return"Special2";case 6:return"Special3";case 7:return"Special4";case 8:return"玩家士气低落"}return""}function Ae(i,...m){return i?typeof m[0]=="object"?i.replace(/{(\w+)}/g,(_,v)=>m[0][v]!="undefined"?m[0][v]:_):i.replace(/{(\d+)}/g,(_,v)=>typeof m[v]<"u"?m[v]:_):""}const Ee={class:"bg-current/5 p-1 mb-1"},ce={class:"flex"},We={class:"grow"},Ce={class:"mr-1"},Te={key:0},Se={class:"text-sm text-current/50"},ke={class:"mr-1"},Re={class:"mr-1"},Pe={key:0},xe={key:1},Le={key:2},De={class:"mr-1"},$e={class:"text-right text-sm text-current/30"},we=I({__name:"EnemyWound",props:{wound:{},level:{},encounter:{}},setup(i){return(m,_)=>{const v=ne,u=z,W=B,S=me,O=ee,$=te,P=re,j=X;return e(),t("div",Ee,[o("div",ce,[o("div",We,[o("div",null,[(e(!0),t(g,null,b(m.wound.RequiredDamageTypes,(A,y)=>(e(),t("span",Ce,[y>0?(e(),t("span",Te," / ")):d("",!0),l(v,{withContent:""},{default:M(()=>{var n;return[f(p((n=A.Name)==null?void 0:n.Text),1)]}),_:2},1024)]))),256))]),o("div",Se,"> "+p(a(Ae)(m.wound.CombatLog.LogText.Text,m.encounter.EnemyName.Text)),1),o("div",null,[(e(!0),t(g,null,b(m.wound.StatChanges,A=>(e(),t("span",ke,[l(u,{obj:A},null,8,["obj"])]))),256)),(e(!0),t(g,null,b(m.wound.DroppedCards,A=>(e(),t("span",Re,[l(W,{obj:A},null,8,["obj"])]))),256))]),o("div",null,p(a(ae)(m.wound.BodyLocationModifiers)),1),o("div",null,[l(S,{obj:m.wound.EnemyValuesModifiers,encounter:m.encounter},null,8,["obj","encounter"])]),m.wound.AccumulatedWoundValue.Active?(e(),t("div",Pe,[_[0]||(_[0]=o("span",{class:"text-title"},"累计受伤值：",-1)),l(O,{obj:{x:m.wound.AccumulatedWoundValue.FloatValue,y:m.wound.AccumulatedWoundValue.MaxValue},sign:!0},null,8,["obj"])])):d("",!0),m.wound.WeaponDurabilityDamage.Active?(e(),t("div",xe,[_[1]||(_[1]=o("span",{class:"text-title"},"武器损耗：",-1)),l($,{number:m.wound.WeaponDurabilityDamage.FloatValue},null,8,["number"])])):d("",!0),m.wound.NPCStatChanges.filter(A=>!!A.TargetAgent).length>0?(e(),t("div",Le,[l(j,{legend:"NPC状态变化",class:"mt-1"},{default:M(()=>[(e(!0),t(g,null,b(m.wound.NPCStatChanges.filter(A=>!!A.TargetAgent),A=>(e(),t("div",De,[l(P,{obj:A},null,8,["obj"])]))),256))]),_:1})])):d("",!0),o("div",$e," -> "+p(a(le)(m.wound.EncounterResult)),1)])])])}}}),Ne=Object.assign(we,{__name:"EnemyWound"}),Ie={class:"bg-current/5 p-1"},Oe={class:"flex"},He={class:"text-center px-1 mr-2 bg-current/10 flex flex-col justify-center"},Be={class:"text-xl font-bold"},Ue={class:"grow"},Fe={class:"text-xs text-current/50"},qe={class:"mr-1"},Ge={class:"mr-1"},ze={class:"text-right text-sm text-current/30"},Xe=I({__name:"PlayerWound",props:{wound:{},level:{}},setup(i){return(m,_)=>{const v=z,u=B;return e(),t("div",Ie,[o("div",Oe,[o("div",He,[_[0]||(_[0]=o("div",{class:"text-tiny"},"几率",-1)),o("div",Be,p(m.wound.WoundSelectionWeight),1)]),o("div",Ue,[o("div",Fe,p(m.wound.WoundLog.LogText.Text),1),o("div",null,[(e(!0),t(g,null,b(m.wound.StatChanges,W=>(e(),t("span",qe,[l(v,{obj:W},null,8,["obj"])]))),256)),(e(!0),t(g,null,b(m.wound.DroppedCards,W=>(e(),t("span",Ge,[l(u,{obj:W},null,8,["obj"])]))),256))]),o("div",ze," -> "+p(a(le)(m.wound.EncounterResult)),1)])])])}}}),Ye=Object.assign(Xe,{__name:"PlayerWound"});function K(i){switch(i){case 0:return"留在原地";case 1:return"随机移动到相邻区域";case 2:return"移动到特定区域";case 3:return"移动到前一区域"}return""}const Je={key:0},Ke={class:"mr-1"},Qe={class:"mr-1"},Ze={key:1},et={key:0},tt={key:1},nt={class:"mr-1"},rt={key:0},lt={key:2},ot={key:0},ut={key:1},it={key:2},st={class:"mr-1"},dt={key:0},at={key:3},mt={class:"mr-1"},_t=I({__name:"EncounterResultEffect",props:{effect:{}},setup(i){const m=i;return(_,v)=>{var $,P;const u=z,W=B,S=re,O=X;return e(),t("div",null,[("effect"in _?_.effect:a(T)).AmmoRecovery!=3?(e(),t("div",Je,[v[0]||(v[0]=o("span",{class:"text-title"},"弹药：",-1)),o("span",null,p(["恢复全部","恢复失误的","恢复命中的",""][("effect"in _?_.effect:a(T)).AmmoRecovery]),1)])):d("",!0),o("div",null,[v[1]||(v[1]=o("span",{class:"text-title"},"状态：",-1)),(e(!0),t(g,null,b(m.effect.StatChanges,j=>(e(),t("span",Ke,[l(u,{obj:j},null,8,["obj"])]))),256))]),o("div",null,[v[2]||(v[2]=o("span",{class:"text-title"},"掉落：",-1)),(e(!0),t(g,null,b(m.effect.DroppedCards,j=>(e(),t("span",Qe,[l(W,{obj:j},null,8,["obj"])]))),256))]),("effect"in _?_.effect:a(T)).MovePlayer>0?(e(),t("div",Ze,[("effect"in _?_.effect:a(T)).MovePlayer!=2?(e(),t("span",et,[v[3]||(v[3]=o("span",{class:"text-title"},"玩家：",-1)),f(" "+p(a(K)(("effect"in _?_.effect:a(T)).MovePlayer)),1)])):(e(),t("span",tt,[v[4]||(v[4]=o("span",{class:"text-title"},"玩家：",-1)),v[5]||(v[5]=f(" 移动至 ")),(e(!0),t(g,null,b(("effect"in _?_.effect:a(T)).MovePlayerToSpecificEnvironment,(j,A)=>(e(),t("span",nt,[A>0?(e(),t("span",rt,"/")):d("",!0),l(W,{obj:j},null,8,["obj"])]))),256))]))])):d("",!0),("effect"in _?_.effect:a(T)).MoveNPC>0&&("effect"in _?_.effect:a(T)).NPCStatChanges.length>0?(e(),t("div",lt,[v[7]||(v[7]=o("span",{class:"text-title"},"NPC：",-1)),($=("effect"in _?_.effect:a(T)).NPCStatChanges.find(j=>j.TargetAgent))!=null&&$.TargetAgent?(e(),t("span",ot,[l(W,{obj:(P=("effect"in _?_.effect:a(T)).NPCStatChanges.find(j=>j.TargetAgent))==null?void 0:P.TargetAgent},null,8,["obj"])])):d("",!0),("effect"in _?_.effect:a(T)).MoveNPC!=2?(e(),t("span",ut,[o("span",null,p(a(K)(("effect"in _?_.effect:a(T)).MoveNPC)),1)])):(e(),t("span",it,[v[6]||(v[6]=f(" 移动至 ")),(e(!0),t(g,null,b(("effect"in _?_.effect:a(T)).MoveNPCToSpecificEnvironment,(j,A)=>(e(),t("span",st,[A>0?(e(),t("span",dt,"/")):d("",!0),l(W,{obj:j},null,8,["obj"])]))),256))]))])):d("",!0),m.effect.NPCStatChanges.filter(j=>!!j.TargetAgent).length>0?(e(),t("div",at,[l(O,{legend:"NPC状态变化",class:"mt-1"},{default:M(()=>[(e(!0),t(g,null,b(m.effect.NPCStatChanges.filter(j=>!!j.TargetAgent),j=>(e(),t("div",mt,[l(S,{obj:j},null,8,["obj"])]))),256))]),_:1})])):d("",!0)])}}}),pt=Object.assign(_t,{__name:"EncounterResultEffect"});var L=(i=>(i[i.Add0Weight=0]="Add0Weight",i[i.UseMinMaxWeight=1]="UseMinMaxWeight",i[i.CancelDrop=2]="CancelDrop",i))(L||{}),D=(i=>(i[i.Return0Value=0]="Return0Value",i[i.UseMinMaxOutputValue=1]="UseMinMaxOutputValue",i[i.ReturnCustomValue=2]="ReturnCustomValue",i[i.ReturnNegativeInfinity=3]="ReturnNegativeInfinity",i[i.ReturnPositiveInfinity=4]="ReturnPositiveInfinity",i))(D||{});function ft(i){let m={[L.Add0Weight]:D.ReturnCustomValue,[L.UseMinMaxWeight]:D.UseMinMaxOutputValue,[L.CancelDrop]:D.Return0Value};return{Active:i.Active,InputValueRange:i.DurabilityRange,OutputValueRange:{x:i.InterpWeightRange.m_X,y:i.InterpWeightRange.m_Y},WhenOutOfRange:m[i.WhenOutOfRange],OutOfRangeCustomValue:0}}function gt(i){switch(i){case 0:return"近身";case 1:return"远距离";case 2:return""}return""}function Q(i,m=""){switch(i){case 0:return"";case 1:return m+"脆弱中";case 2:return m+"非脆弱"}return""}function bt(i){switch(i){case 0:return"";case 1:return"缠斗中";case 2:return"非缠斗中"}return""}function Z(i){return[{name:"总",mod:i.AllWoundModifier},{name:"头部",mod:i.HeadWoundModifier},{name:"身体",mod:i.TorsoWoundModifier},{name:"左臂",mod:i.LArmWoundModifier},{name:"右臂",mod:i.RArmWoundModifier},{name:"左腿",mod:i.LLegWoundModifier},{name:"右腿",mod:i.RLegWoundModifier}].filter(_=>_.mod.InterpolatedAddedValue.Active)}function yt(i){return[{name:"身体",value:i.TorsoHitProbabilityModifier},{name:"头部",value:i.HeadHitProbabilityModifier},{name:"左臂",value:i.LArmHitProbabilityModifier},{name:"右臂",value:i.RArmHitProbabilityModifier},{name:"左腿",value:i.LLegHitProbabilityModifier},{name:"右腿",value:i.RLegHitProbabilityModifier}].filter(_=>_.value!=0)}function vt(i){let m={[L.Add0Weight]:D.ReturnCustomValue,[L.UseMinMaxWeight]:D.UseMinMaxOutputValue,[L.CancelDrop]:D.Return0Value};return{Active:!0,InputValueRange:i.StatRange,OutputValueRange:{x:i.InterpWeightRange.m_X,y:i.InterpWeightRange.m_Y},WhenOutOfRange:m[i.WhenOutOfRange],OutOfRangeCustomValue:0}}const Mt={class:"flex"},Vt={class:"ml-2"},jt={class:"flex justify-center"},ht={class:"flex justify-center mt-4"},At={class:"flex flex-wrap gap-2"},Et={key:0,class:"border border-current/50 rounded p-0 mb-2"},ct={key:1,class:"border border-red-400/50 rounded p-0 mb-2"},Wt={key:2,class:"border border-red-700/70 rounded p-0 mb-2"},Ct={key:3,class:"border-2 border-red-800/90 rounded p-0 mb-2"},Tt={class:"flex flex-wrap gap-2"},St={key:0},kt={key:1},Rt={key:2},Pt={class:"flex"},xt={key:0},Lt={key:1},Dt={key:2},$t={key:3},wt={key:4},Nt={key:5},It={key:6},Ot={key:7},Ht={key:8},Bt={key:9},Ut={class:"text-durability"},Ft={key:0},qt={key:1},Gt={key:2},zt={key:3},Xt={key:4},Yt={key:5},Jt={class:"text-durability"},Kt={key:0},Qt={class:"text-durability"},Zt={key:0},en={key:0},tn={key:0},nn={key:1},rn={key:2},ln={class:"text-durability"},on={key:0},un={class:"text-durability"},sn={key:0},dn={key:0},an={key:0},mn={class:"flex flex-wrap"},_n={class:"mr-2"},pn={key:0},fn={class:"text-durability"},gn={key:1},bn={key:2},yn={key:0},vn={key:3},Mn={key:0},Vn={key:0,class:"border border-current/50 rounded p-0 mb-2"},jn={key:1,class:"border border-red-400/50 rounded p-0 mb-2"},hn={key:2,class:"border border-red-700/70 rounded p-0 mb-2"},An={key:3,class:"border-2 border-red-800/90 rounded p-0 mb-2"},En={key:0},cn={key:1},Wn={class:"flex flex-wrap gap-2"},Fn=I({__name:"Encounter",props:{id:{}},async setup(i){let m,_;const v=i,u=([m,_]=oe(()=>be(Object.assign({"../../generated/encounter/0_1512.json":()=>h(()=>import("./CTEbdCKw.js"),[],import.meta.url),"../../generated/encounter/0_1513.json":()=>h(()=>import("./B_dRVgGP.js"),[],import.meta.url),"../../generated/encounter/0_1514.json":()=>h(()=>import("./BCuVpnhQ.js"),[],import.meta.url),"../../generated/encounter/0_1515.json":()=>h(()=>import("./Bi4nnuMb.js"),[],import.meta.url),"../../generated/encounter/0_1516.json":()=>h(()=>import("./BZ17CChl.js"),[],import.meta.url),"../../generated/encounter/0_1517.json":()=>h(()=>import("./DUXgdATx.js"),[],import.meta.url),"../../generated/encounter/0_1518.json":()=>h(()=>import("./_zrCiOD8.js"),[],import.meta.url),"../../generated/encounter/0_1519.json":()=>h(()=>import("./xxpqvK_j.js"),[],import.meta.url),"../../generated/encounter/0_1520.json":()=>h(()=>import("./CtpILRDK.js"),[],import.meta.url),"../../generated/encounter/0_1521.json":()=>h(()=>import("./DK1E61k2.js"),[],import.meta.url),"../../generated/encounter/0_1522.json":()=>h(()=>import("./B3BSnrFE.js"),[],import.meta.url),"../../generated/encounter/0_1523.json":()=>h(()=>import("./DPimrZ6-.js"),[],import.meta.url),"../../generated/encounter/0_1524.json":()=>h(()=>import("./DwQF--qO.js"),[],import.meta.url),"../../generated/encounter/0_1525.json":()=>h(()=>import("./BN00TqzT.js"),[],import.meta.url),"../../generated/encounter/0_1526.json":()=>h(()=>import("./D1PYHiKD.js"),[],import.meta.url),"../../generated/encounter/0_4728.json":()=>h(()=>import("./l9UPifGU.js"),[],import.meta.url),"../../generated/encounter/0_4757.json":()=>h(()=>import("./iCwcP_L_.js"),[],import.meta.url),"../../generated/encounter/0_4760.json":()=>h(()=>import("./vEOp8UtQ.js"),[],import.meta.url),"../../generated/encounter/0_4781.json":()=>h(()=>import("./BcDxriRN.js"),[],import.meta.url),"../../generated/encounter/0_4783.json":()=>h(()=>import("./BwsX84u-.js"),[],import.meta.url)}),`../../generated/encounter/${v.id}.json`,5)),m=await m,_(),m).default;let S=[u.MeleeSkill,u.RangedSkill,u.Blood,u.Stamina,u.Morale,u.Value1,u.Value2,u.Value3,u.Value4].filter(y=>!!y.Name||!!y.MaxValue||!!y.StartingValue.x||!!y.StartingValue.y);function O(){let y={"Melee Skill":"近战","Ranged Skill":"远程",Blood:"血量",Stamina:"精神",Morale:"斗志"};S.forEach(n=>{n.Name=y[n.Name]||n.Name})}O();function $(y){return[{value:u.MeleeSkill,mod:y.ValuesWeightModifiers.WeightPerMeleeSkill},{value:u.RangedSkill,mod:y.ValuesWeightModifiers.WeightPerRangedSkill},{value:u.Blood,mod:y.ValuesWeightModifiers.WeightPerBlood},{value:u.Stamina,mod:y.ValuesWeightModifiers.WeightPerStamina},{value:u.Morale,mod:y.ValuesWeightModifiers.WeightPerMorale},{value:u.Value1,mod:y.ValuesWeightModifiers.WeightPerValue1},{value:u.Value2,mod:y.ValuesWeightModifiers.WeightPerValue2},{value:u.Value3,mod:y.ValuesWeightModifiers.WeightPerValue3},{value:u.Value4,mod:y.ValuesWeightModifiers.WeightPerValue4}].filter(x=>S.includes(x.value)&&x.mod.Active)}function P(y){return[{value:u.MeleeSkill,mod:y.EnemyMeleeSkillMod},{value:u.RangedSkill,mod:y.EnemyRangedSkillMod},{value:u.Blood,mod:y.EnemyBloodMod},{value:u.Stamina,mod:y.EnemyStaminaMod},{value:u.Morale,mod:y.EnemyMoraleMod},{value:u.Value1,mod:y.EnemyValue1Mod},{value:u.Value2,mod:y.EnemyValue2Mod},{value:u.Value3,mod:y.EnemyValue3Mod},{value:u.Value4,mod:y.EnemyValue4Mod}].filter(x=>S.includes(x.value)&&x.mod.InterpolatedAddedValue.Active)}function j(){return[{name:"头部",bodyTemplate:u.EnemyBodyTemplate.Head,armor:u.EnemyArmor.HeadArmor,armorModifiers:u.EnemyArmor.HeadArmorModifiers,hitProbabilityModifier:u.EnemyArmor.HeadHitProbabilityModifier},{name:"躯干",bodyTemplate:u.EnemyBodyTemplate.Torso,armor:u.EnemyArmor.TorsoArmor,armorModifiers:u.EnemyArmor.TorsoArmorModifiers,hitProbabilityModifier:u.EnemyArmor.TorsoHitProbabilityModifier},{name:"左臂",bodyTemplate:u.EnemyBodyTemplate.LArm,armor:u.EnemyArmor.LArmArmor,armorModifiers:u.EnemyArmor.LArmArmorModifiers,hitProbabilityModifier:u.EnemyArmor.LArmHitProbabilityModifier},{name:"右臂",bodyTemplate:u.EnemyBodyTemplate.RArm,armor:u.EnemyArmor.RArmArmor,armorModifiers:u.EnemyArmor.RArmArmorModifiers,hitProbabilityModifier:u.EnemyArmor.RArmHitProbabilityModifier},{name:"左腿",bodyTemplate:u.EnemyBodyTemplate.LLeg,armor:u.EnemyArmor.LLegArmor,armorModifiers:u.EnemyArmor.LLegArmorModifiers,hitProbabilityModifier:u.EnemyArmor.LLegHitProbabilityModifier},{name:"右腿",bodyTemplate:u.EnemyBodyTemplate.RLeg,armor:u.EnemyArmor.RLegArmor,armorModifiers:u.EnemyArmor.RLegArmorModifiers,hitProbabilityModifier:u.EnemyArmor.RLegHitProbabilityModifier}]}function A(){var y;return{key:u.m_Name,text:u.EnemyName.Text,icon:(y=u.EncounterImage)==null?void 0:y.FileName,type:"encounter"}}return ue({title:`${u.EncounterTitle.Text} - 战斗 - ${ie().$gameName}`}),(y,n)=>{const x=se,V=ee,H=de,E=ne,C=te,U=Ne,w=X,N=ge,k=fe,G=B,F=Ye,q=pt;return e(),t("div",null,[o("h2",null,p(a(u).EncounterTitle.Text),1),o("div",null,[o("div",Mt,[o("div",null,[l(x,{card:A()},null,8,["card"])]),o("div",Vt,[o("div",jt,[(e(!0),t(g,null,b(a(S),r=>(e(),R(H,{title:r.Name,value:""},{default:M(()=>[l(V,{obj:r.StartingValue},null,8,["obj"])]),_:2},1032,["title"]))),256))]),o("div",ht,[l(H,{title:"体型",value:""},{default:M(()=>[l(V,{obj:a(u).EnemySize},null,8,["obj"])]),_:1}),l(H,{title:"掩护",value:""},{default:M(()=>[l(V,{obj:a(u).EnemyCover},null,8,["obj"])]),_:1}),l(H,{title:"潜行",value:""},{default:M(()=>[l(V,{obj:a(u).EnemyStealth},null,8,["obj"])]),_:1}),l(H,{title:"意识",value:""},{default:M(()=>[l(V,{obj:a(u).EnemyAwareness},null,8,["obj"])]),_:1})])])])]),o("div",null,[n[3]||(n[3]=o("h2",{class:"title"},"身体数据",-1)),o("div",At,[(e(!0),t(g,null,b(j(),r=>(e(),t("div",null,[l(N,null,{title:M(()=>[o("div",null,p(r.name),1)]),content:M(()=>[o("div",null,[n[0]||(n[0]=o("span",null,"护甲：",-1)),o("span",null,p(r.bodyTemplate.Armor+r.armor),1),o("span",null,"("+p(r.bodyTemplate.Armor)+" + "+p(r.armor)+")",1)]),o("div",null,[n[1]||(n[1]=o("span",null,"命中概率：",-1)),o("span",null,"近战:"+p(r.bodyTemplate.MeleeHitChanceWeight+r.hitProbabilityModifier),1),n[2]||(n[2]=f(" / ")),o("span",null,"远程:"+p(r.bodyTemplate.RangedHitChanceWeight+r.hitProbabilityModifier),1)]),o("div",null,[(e(!0),t(g,null,b(r.bodyTemplate.ArmorModifiers.concat(r.armorModifiers),s=>(e(),t("div",null,[o("div",null,[l(E,{text:s.DmgType.Name.Text},null,8,["text"]),l(C,{number:s.Modifier},null,8,["number"])])]))),256))]),l(w,{legend:"受伤",collapsed:"",toggleable:""},{default:M(()=>[o("div",null,[r.bodyTemplate.UnharmedResults.length>0?(e(),t("div",Et,[(e(!0),t(g,null,b(r.bodyTemplate.UnharmedResults,s=>(e(),t("div",null,[l(U,{wound:s,level:0,encounter:a(u)},null,8,["wound","encounter"])]))),256))])):d("",!0),r.bodyTemplate.MinorWounds.length>0?(e(),t("div",ct,[(e(!0),t(g,null,b(r.bodyTemplate.MinorWounds,s=>(e(),t("div",null,[l(U,{wound:s,level:1,encounter:a(u)},null,8,["wound","encounter"])]))),256))])):d("",!0),r.bodyTemplate.MediumWounds.length>0?(e(),t("div",Wt,[(e(!0),t(g,null,b(r.bodyTemplate.MediumWounds,s=>(e(),t("div",null,[l(U,{wound:s,level:2,encounter:a(u)},null,8,["wound","encounter"])]))),256))])):d("",!0),r.bodyTemplate.SeriousWounds.length>0?(e(),t("div",Ct,[(e(!0),t(g,null,b(r.bodyTemplate.SeriousWounds,s=>(e(),t("div",null,[l(U,{wound:s,level:3,encounter:a(u)},null,8,["wound","encounter"])]))),256))])):d("",!0)])]),_:2},1024)]),_:2},1024)]))),256))])]),o("div",null,[n[50]||(n[50]=o("h2",null,"动作",-1)),o("div",Tt,[(e(!0),t(g,null,b(a(u).EnemyActions,r=>(e(),R(N,null,{title:M(()=>[o("div",null,[f("⚠️"+p(r.ActionLog.LogText.Text)+" ",1),l(E,{text:["近身","远程"][r.ActionRange]},null,8,["text"]),r.DoesNotAttack?d("",!0):(e(),R(E,{key:0,text:"攻击"})),r.CannotBeDodged?(e(),R(E,{key:1,text:"无法闪避"})):d("",!0),r.IsEscapeAction?(e(),R(E,{key:2,text:"逃跑"})):d("",!0),r.IsChargingAction?(e(),R(E,{key:3,text:"蓄力"})):d("",!0),r.IgnoreEnemySkillForClash?(e(),R(E,{key:4,text:"无视技能"})):d("",!0)])]),content:M(()=>[r.Reach?(e(),t("div",St,"触发距离: "+p(r.Reach),1)):d("",!0),r.CustomClashAgainstValue?(e(),t("div",kt,[n[4]||(n[4]=f(" 失败权重: ")),l(V,{obj:r.CustomClashAgainstValue},null,8,["obj"])])):d("",!0),r.DamageTypes.length>0?(e(),t("div",Rt,[n[5]||(n[5]=o("span",null,"伤害类型：",-1)),(e(!0),t(g,null,b(r.DamageTypes,(s,Cn)=>(e(),t("span",null,[l(E,{withContent:""},{default:M(()=>{var Y;return[f(p((Y=s.Name)==null?void 0:Y.Text),1)]}),_:2},1024)]))),256))])):d("",!0),o("div",null,[(e(!0),t(g,null,b(a(yt)(r.AddedPlayerLocationHitProbabilities),s=>(e(),t("div",null,[o("div",null,[n[6]||(n[6]=f(" 命中玩家")),o("span",null,p(s.name),1),n[7]||(n[7]=f("几率 ")),l(C,{number:s.value},null,8,["number"])])]))),256))]),o("div",Pt,[n[8]||(n[8]=o("div",null,"条件：",-1)),o("div",null,[l(E,{text:a(gt)(r.RequiredDistance)},null,8,["text"]),l(E,{text:a(bt)(r.RequiredWrestlingState)},null,8,["text"]),l(E,{text:a(Q)(r.RequiredSelfVulnerableState,"玩家")},null,8,["text"]),l(E,{text:a(Q)(r.RequiredOpponentVulnerableState,"自身")},null,8,["text"])])]),l(w,{legend:"动作权重"},{default:M(()=>[o("div",null,[n[9]||(n[9]=o("span",null,"基础权重 = ",-1)),o("span",null,p(r.BaseWeight),1)]),r.DistanceWeightModifier!=0?(e(),t("div",xt,[n[10]||(n[10]=f("远距离时权重")),l(C,{number:r.DistanceWeightModifier},null,8,["number"])])):d("",!0),r.CloseRangeWeightModifier!=0?(e(),t("div",Lt,[n[11]||(n[11]=f("近身时权重")),l(C,{number:r.CloseRangeWeightModifier},null,8,["number"])])):d("",!0),r.WrestlingWeightModifier!=0?(e(),t("div",Dt,[n[12]||(n[12]=f("缠斗中权重")),l(C,{number:r.WrestlingWeightModifier},null,8,["number"])])):d("",!0),r.NOTWrestlingWeightModifier!=0?(e(),t("div",$t,[n[13]||(n[13]=f("未缠斗中权重")),l(C,{number:r.NOTWrestlingWeightModifier},null,8,["number"])])):d("",!0),r.EnemyHiddenWeightModifier!=0?(e(),t("div",wt,[n[14]||(n[14]=f("自身隐藏时中权重")),l(C,{number:r.EnemyHiddenWeightModifier},null,8,["number"])])):d("",!0),r.PlayerHiddenWeightModifier!=0?(e(),t("div",Nt,[n[15]||(n[15]=f("玩家隐藏时中权重")),l(C,{number:r.PlayerHiddenWeightModifier},null,8,["number"])])):d("",!0),r.SelfVulnerableWeightModifier!=0?(e(),t("div",It,[n[16]||(n[16]=f("自身脆弱时权重")),l(C,{number:r.SelfVulnerableWeightModifier},null,8,["number"])])):d("",!0),r.SelfNOTVulnerableWeightModifier!=0?(e(),t("div",Ot,[n[17]||(n[17]=f("自身未脆弱时权重")),l(C,{number:r.SelfNOTVulnerableWeightModifier},null,8,["number"])])):d("",!0),r.OpponentVulnerableWeightModifier!=0?(e(),t("div",Ht,[n[18]||(n[18]=f("对手脆弱时权重")),l(C,{number:r.OpponentVulnerableWeightModifier},null,8,["number"])])):d("",!0),r.OpponentNOTVulnerableWeightModifier!=0?(e(),t("div",Bt,[n[19]||(n[19]=f("对手脆弱时权重")),l(C,{number:r.OpponentNOTVulnerableWeightModifier},null,8,["number"])])):d("",!0),(e(!0),t(g,null,b($(r),s=>(e(),t("div",null,[o("span",Ut,p(s.value.Name),1),n[20]||(n[20]=f("为 ")),l(k,{obj:a(ft)(s.mod),joiner:"时权重",outputSign:!0},null,8,["obj"])]))),256)),(e(!0),t(g,null,b(r.StatsWeightModifiers,s=>(e(),t("div",null,[l(G,{obj:s.Stat},null,8,["obj"]),n[21]||(n[21]=f(" 为 ")),l(k,{obj:a(vt)(s),joiner:"时权重",outputSign:!0},null,8,["obj"])]))),256))]),_:2},1024),l(w,{legend:"攻击力"},{default:M(()=>[o("div",null,[n[22]||(n[22]=o("span",null,"基础攻击力 = ",-1)),o("span",null,p(r.BaseClashValue),1)]),a(c)(r.ClashRangedInaccuracy)?d("",!0):(e(),t("div",Ft,[n[23]||(n[23]=o("span",null,"远距离时",-1)),l(V,{obj:r.ClashRangedInaccuracy,sign:!0},null,8,["obj"])])),a(c)(r.ClashStealthBonus)?d("",!0):(e(),t("div",qt,[n[24]||(n[24]=o("span",null,"潜行时",-1)),l(V,{obj:r.ClashStealthBonus,sign:!0},null,8,["obj"])])),a(c)(r.IneffectiveRangeMalus)?d("",!0):(e(),t("div",Gt,[n[25]||(n[25]=o("span",null,"自身潜行时",-1)),l(V,{obj:r.IneffectiveRangeMalus,sign:!0},null,8,["obj"])])),a(c)(r.ClashVsEscapeModifier)?d("",!0):(e(),t("div",zt,[n[26]||(n[26]=o("span",null,"玩家逃跑时",-1)),l(V,{obj:r.ClashVsEscapeModifier,sign:!0},null,8,["obj"])])),a(c)(r.ClashVsVulnerableModifier)?d("",!0):(e(),t("div",Xt,[n[27]||(n[27]=o("span",null,"脆弱时",-1)),l(V,{obj:r.ClashVsVulnerableModifier,sign:!0},null,8,["obj"])])),a(c)(r.WrestlingClashModifier)?d("",!0):(e(),t("div",Yt,[n[28]||(n[28]=o("span",null,"缠斗时",-1)),l(V,{obj:r.WrestlingClashModifier,sign:!0},null,8,["obj"])])),(e(!0),t(g,null,b(P(r.EnemyValuesClashModifier),s=>(e(),t("div",null,[o("span",Jt,p(s.value.Name),1),n[30]||(n[30]=f("为 ")),l(k,{obj:s.mod.InterpolatedAddedValue,joiner:"时",outputSign:!0},null,8,["obj"]),a(c)(s.mod.RandomAddedValue)?d("",!0):(e(),t("span",Kt,[n[29]||(n[29]=f(" 随机增加 ")),l(V,{obj:s.mod.RandomAddedValue,sign:!0},null,8,["obj"])]))]))),256)),(e(!0),t(g,null,b(a(Z)(r.EnemyWoundClashModifier),s=>(e(),t("div",null,[o("span",Qt,p(s.name)+"受伤值",1),n[32]||(n[32]=f("为 ")),l(k,{obj:s.mod.InterpolatedAddedValue,joiner:"时",outputSign:!0},null,8,["obj"]),a(c)(s.mod.RandomAddedValue)?d("",!0):(e(),t("span",Zt,[n[31]||(n[31]=f(" 随机增加 ")),l(V,{obj:s.mod.RandomAddedValue,sign:!0},null,8,["obj"])]))]))),256)),(e(!0),t(g,null,b(r.EnemyStatsDamageModifier,s=>(e(),t("div",null,[l(G,{obj:s.Stat},null,8,["obj"]),n[34]||(n[34]=f(" 为 ")),l(k,{obj:s.AddedValue.InterpolatedAddedValue,joiner:"时",outputSign:!0},null,8,["obj"]),a(c)(s.AddedValue.RandomAddedValue)?d("",!0):(e(),t("span",en,[n[33]||(n[33]=f(" 随机增加 ")),l(V,{obj:s.AddedValue.RandomAddedValue,sign:!0},null,8,["obj"])]))]))),256))]),_:2},1024),l(w,{legend:"伤害"},{default:M(()=>[o("div",null,[n[35]||(n[35]=o("span",null,"基础伤害 = ",-1)),l(V,{obj:r.Damage},null,8,["obj"])]),a(c)(r.DmgVsEscapeModifier)?d("",!0):(e(),t("div",tn,[n[36]||(n[36]=o("span",null,"玩家逃跑时",-1)),l(V,{obj:r.DmgVsEscapeModifier,sign:!0},null,8,["obj"])])),a(c)(r.DmgVsVulnerableModifier)?d("",!0):(e(),t("div",nn,[n[37]||(n[37]=o("span",null,"脆弱时",-1)),l(V,{obj:r.DmgVsVulnerableModifier,sign:!0},null,8,["obj"])])),a(c)(r.WrestlingDamageModifier)?d("",!0):(e(),t("div",rn,[n[38]||(n[38]=o("span",null,"缠斗时",-1)),l(V,{obj:r.WrestlingDamageModifier,sign:!0},null,8,["obj"])])),(e(!0),t(g,null,b(P(r.EnemyValuesDamageModifier),s=>(e(),t("div",null,[o("span",ln,p(s.value.Name),1),n[40]||(n[40]=f("为 ")),l(k,{obj:s.mod.InterpolatedAddedValue,joiner:"时",outputSign:!0},null,8,["obj"]),a(c)(s.mod.RandomAddedValue)?d("",!0):(e(),t("span",on,[n[39]||(n[39]=o("span",null,"随机增加",-1)),l(V,{obj:s.mod.RandomAddedValue,sign:!0},null,8,["obj"])]))]))),256)),(e(!0),t(g,null,b(a(Z)(r.EnemyWoundDamageModifier),s=>(e(),t("div",null,[o("span",un,p(s.name)+"受伤",1),n[42]||(n[42]=f("为 ")),l(k,{obj:s.mod.InterpolatedAddedValue,joiner:"时",outputSign:!0},null,8,["obj"]),a(c)(s.mod.RandomAddedValue)?d("",!0):(e(),t("span",sn,[n[41]||(n[41]=o("span",null,"随机增加",-1)),l(V,{obj:s.mod.RandomAddedValue,sign:!0},null,8,["obj"])]))]))),256)),(e(!0),t(g,null,b(r.EnemyStatsDamageModifier,s=>(e(),t("div",null,[l(G,{obj:s.Stat},null,8,["obj"]),n[44]||(n[44]=f(" 为 ")),l(k,{obj:s.AddedValue.InterpolatedAddedValue,joiner:"时",outputSign:!0},null,8,["obj"]),a(c)(s.AddedValue.RandomAddedValue)?d("",!0):(e(),t("span",dn,[n[43]||(n[43]=o("span",null,"随机增加",-1)),l(V,{obj:s.AddedValue.RandomAddedValue,sign:!0},null,8,["obj"])]))]))),256))]),_:2},1024),l(w,{legend:"影响"},{default:M(()=>[r.ArmorDurabilityDamage.Active?(e(),t("div",an,[n[45]||(n[45]=o("span",null,"防具耐久",-1)),l(C,{number:r.ArmorDurabilityDamage.FloatValue},null,8,["number"])])):d("",!0),o("div",mn,[(e(!0),t(g,null,b(a(_e)(r.EnemyValueChanges),s=>(e(),t("div",_n,[s.appilies!=0?(e(),t("span",pn,p(["","(成功时)","(失败时)"][s.appilies]),1)):d("",!0),o("span",fn,p(a(u)[s.key].Name),1),l(V,{obj:s.modifier,sign:!0},null,8,["obj"])]))),256))]),r.WrestlingStateChange.WrestlingStateChange>0?(e(),t("div",gn,[o("span",null,p(["","[成功时] ","[失败时] ",""][r.WrestlingStateChange.ChangeApplies]),1),n[46]||(n[46]=f(" 变为")),l(E,{text:r.WrestlingStateChange.WrestlingStateChange==1?"缠斗中":"未缠斗"},null,8,["text"])])):d("",!0),r.SelfVulnerableStateChange.Change>0?(e(),t("div",bn,[o("span",null,p(["","[成功时] ","[失败时] ",""][r.SelfVulnerableStateChange.Change]),1),r.SelfVulnerableStateChange.PercentageChance.UseChance?(e(),t("span",yn,p(r.SelfVulnerableStateChange.PercentageChance.ChanceValue*100)+"%几率 ",1)):d("",!0),n[47]||(n[47]=f(" 变为")),l(E,{text:"脆弱"})])):d("",!0),r.OpponentVulnerableStateChange.Change>0?(e(),t("div",vn,[o("span",null,p(["","[成功时] ","[失败时] ",""][r.OpponentVulnerableStateChange.Change]),1),n[48]||(n[48]=f(" "+p("玩家")+" ")),r.OpponentVulnerableStateChange.PercentageChance.UseChance?(e(),t("span",Mn,p(r.OpponentVulnerableStateChange.PercentageChance.ChanceValue*100)+"%几率 ",1)):d("",!0),n[49]||(n[49]=f(" 变为")),l(E,{text:"脆弱"})])):d("",!0)]),_:2},1024),l(w,{legend:"玩家",collapsed:"",toggleable:""},{default:M(()=>[o("div",null,[r.PlayerWounds.UnharmedResults.length>0?(e(),t("div",Vn,[(e(!0),t(g,null,b(r.PlayerWounds.UnharmedResults,s=>(e(),t("div",null,[l(F,{wound:s,level:0},null,8,["wound"])]))),256))])):d("",!0),r.PlayerWounds.MinorWounds.length>0?(e(),t("div",jn,[(e(!0),t(g,null,b(r.PlayerWounds.MinorWounds,s=>(e(),t("div",null,[l(F,{wound:s,level:1},null,8,["wound"])]))),256))])):d("",!0),r.PlayerWounds.MediumWounds.length>0?(e(),t("div",hn,[(e(!0),t(g,null,b(r.PlayerWounds.MediumWounds,s=>(e(),t("div",null,[l(F,{wound:s,level:2},null,8,["wound"])]))),256))])):d("",!0),r.PlayerWounds.SeriousWounds.length>0?(e(),t("div",An,[(e(!0),t(g,null,b(r.PlayerWounds.SeriousWounds,s=>(e(),t("div",null,[l(F,{wound:s,level:3},null,8,["wound"])]))),256))])):d("",!0)])]),_:2},1024)]),footer:M(()=>[r.SuccessLog.LogText.Text?(e(),t("div",En," 成功："+p(r.SuccessLog.LogText.Text),1)):d("",!0),r.FailureLog.LogText.Text?(e(),t("div",cn," 失败："+p(r.FailureLog.LogText.Text),1)):d("",!0)]),_:2},1024))),256))])]),o("div",null,[n[55]||(n[55]=o("h2",null,"战斗结果",-1)),o("div",Wn,[l(N,null,{title:M(()=>n[51]||(n[51]=[o("div",null,"胜利",-1)])),subtitle:M(()=>[o("div",null,p(a(u).EnemyDefeatedEffects.ResultLog.LogText.Text),1)]),content:M(()=>[l(q,{effect:a(u).EnemyDefeatedEffects},null,8,["effect"])]),_:1}),l(N,null,{title:M(()=>n[52]||(n[52]=[o("div",null,"对手逃跑",-1)])),content:M(()=>[l(q,{effect:a(u).EnemyDefeatedEffects},null,8,["effect"])]),_:1}),l(N,null,{title:M(()=>n[53]||(n[53]=[o("div",null,"玩家逃跑",-1)])),content:M(()=>[l(q,{effect:a(u).EnemyDefeatedEffects},null,8,["effect"])]),_:1}),l(N,null,{title:M(()=>n[54]||(n[54]=[o("div",null,"玩家士气低落",-1)])),content:M(()=>[l(q,{effect:a(u).EnemyDefeatedEffects},null,8,["effect"])]),_:1})])])])}}});export{Fn as default};
