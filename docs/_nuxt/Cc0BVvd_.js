import{_ as P,c as T,o as g,q as R,f as V,i as j,bb as I,a as o,m as O,b as n,w as _,F as D,k as t,d as r,g as b}from"./DHhi54m_.js";import{_ as E}from"./Bmdd6oeT.js";import{_ as y}from"./UaivB8QI.js";import{_ as W}from"./BheWnx7M.js";const C={},S={class:"border-l-5 border-current/20 bg-current/2 my-2 p-4"};function v(m,d){return g(),T("div",S,[R(m.$slots,"default")])}const s=Object.assign(P(C,[["render",v]]),{__name:"Quote"}),M=V({__name:"EncounterSystem",props:{id:{}},async setup(m){let d,a;const f=m,{encounterPopup:L}=([d,a]=j(()=>W(Object.assign({"../../generated/CardType0.json":()=>t(()=>import("./BmE8eUIp.js"),[],import.meta.url),"../../generated/CardType1.json":()=>t(()=>import("./xYScU5az.js"),[],import.meta.url),"../../generated/CardType10.json":()=>t(()=>import("./Daf5kFUg.js"),[],import.meta.url),"../../generated/CardType11.json":()=>t(()=>import("./9xyIOZQg.js"),[],import.meta.url),"../../generated/CardType12.json":()=>t(()=>import("./BwDrqd8x.js"),[],import.meta.url),"../../generated/CardType13.json":()=>t(()=>import("./_okQPiap.js"),[],import.meta.url),"../../generated/CardType2.json":()=>t(()=>import("./DXjVboAD.js"),[],import.meta.url),"../../generated/CardType3.json":()=>t(()=>import("./hZOAtl0z.js"),[],import.meta.url),"../../generated/CardType4.json":()=>t(()=>import("./BhRroz-P.js"),[],import.meta.url),"../../generated/CardType5.json":()=>t(()=>import("./CNKpEcif.js"),[],import.meta.url),"../../generated/CardType6.json":()=>t(()=>import("./pNXiHtQO.js"),[],import.meta.url),"../../generated/CardType7.json":()=>t(()=>import("./-mWNecwe.js"),[],import.meta.url),"../../generated/CardType8.json":()=>t(()=>import("./ys4cDerr.js"),[],import.meta.url),"../../generated/CardType9.json":()=>t(()=>import("./C-HlGWfW.js"),[],import.meta.url),"../../generated/EncounterSystem.json":()=>t(()=>import("./DZLyjyFC.js"),[],import.meta.url),"../../generated/EnemyList.json":()=>t(()=>import("./Bmchp4Sa.js"),[],import.meta.url),"../../generated/EquipmentTag.json":()=>t(()=>import("./BsIhn1Yy.js"),[],import.meta.url),"../../generated/FlavourSystem.json":()=>t(()=>import("./CUQ7hxt0.js"),[],import.meta.url),"../../generated/FlavourTag.json":()=>t(()=>import("./DFoWh1ur.js"),[],import.meta.url),"../../generated/Map.json":()=>t(()=>import("./CwqqU-uc.js"),[],import.meta.url),"../../generated/Perk.json":()=>t(()=>import("./Dbd-vpqq.js"),[],import.meta.url),"../../generated/Quest.json":()=>t(()=>import("./YRUlMqQK.js"),[],import.meta.url),"../../generated/SpiceTag.json":()=>t(()=>import("./2SvphSzK.js"),[],import.meta.url),"../../generated/Trigger.json":()=>t(()=>import("./Cq1c41MN.js"),[],import.meta.url),"../../generated/WeaponMove.json":()=>t(()=>import("./CAOEPTT1.js"),[],import.meta.url),"../../generated/_Ammo.json":()=>t(()=>import("./BSLbgHu_.js"),[],import.meta.url),"../../generated/_Armor.json":()=>t(()=>import("./DQ7gkNUk.js"),[],import.meta.url),"../../generated/_BlueprintIndex.json":()=>t(()=>import("./Bl8bC-ud.js"),[],import.meta.url),"../../generated/_Container.json":()=>t(()=>import("./0GV2hiO3.js"),[],import.meta.url),"../../generated/_Food.json":()=>t(()=>import("./CPrg9DdQ.js"),[],import.meta.url),"../../generated/_NPCIndex.json":()=>t(()=>import("./Ci9sl2Pd.js"),[],import.meta.url),"../../generated/_Seasons.json":()=>t(()=>import("./CCLm2Eea.js"),[],import.meta.url),"../../generated/_StatIndex.json":()=>t(()=>import("./CA-wSdt6.js"),[],import.meta.url),"../../generated/_TradingValue.json":()=>t(()=>import("./qxpqQFhO.js"),[],import.meta.url),"../../generated/_Weapon.json":()=>t(()=>import("./CAPJYMfO.js"),[],import.meta.url),"../../generated/eTag_Backpack.json":()=>t(()=>import("./BFmarDy9.js"),[],import.meta.url),"../../generated/eTag_Belt.json":()=>t(()=>import("./B4en1g1l.js"),[],import.meta.url),"../../generated/eTag_Bracers.json":()=>t(()=>import("./GNDZyEGi.js"),[],import.meta.url),"../../generated/eTag_Hands.json":()=>t(()=>import("./2TeAQrE_.js"),[],import.meta.url),"../../generated/eTag_Head.json":()=>t(()=>import("./Dzz-07jS.js"),[],import.meta.url),"../../generated/eTag_Mask.json":()=>t(()=>import("./DpZlceM1.js"),[],import.meta.url),"../../generated/eTag_Neck.json":()=>t(()=>import("./C0hEShJQ.js"),[],import.meta.url),"../../generated/eTag_OuterTorso.json":()=>t(()=>import("./Bfgd98Qk.js"),[],import.meta.url),"../../generated/eTag_Pants.json":()=>t(()=>import("./B6cm_DCv.js"),[],import.meta.url),"../../generated/eTag_Pouch.json":()=>t(()=>import("./DjmmSD6-.js"),[],import.meta.url),"../../generated/eTag_Shield.json":()=>t(()=>import("./SAf0wSyi.js"),[],import.meta.url),"../../generated/eTag_Shirt.json":()=>t(()=>import("./3iCTRjA6.js"),[],import.meta.url),"../../generated/eTag_Shoes.json":()=>t(()=>import("./Bg-gGsoK.js"),[],import.meta.url),"../../generated/eTag_Shoulder.json":()=>t(()=>import("./BIg9VI2_.js"),[],import.meta.url),"../../generated/eTag_Spirit.json":()=>t(()=>import("./BfMz4ng9.js"),[],import.meta.url),"../../generated/eTag_WAbrasion.json":()=>t(()=>import("./CLjtXaVv.js"),[],import.meta.url),"../../generated/eTag_WArmFractureL.json":()=>t(()=>import("./DhVA3GZ2.js"),[],import.meta.url),"../../generated/eTag_WArmFractureR.json":()=>t(()=>import("./BUHSmSPI.js"),[],import.meta.url),"../../generated/eTag_WArmLacerationL.json":()=>t(()=>import("./D0R6Ts36.js"),[],import.meta.url),"../../generated/eTag_WArmLacerationR.json":()=>t(()=>import("./CGZ2DPsN.js"),[],import.meta.url),"../../generated/eTag_WArmSprainedL.json":()=>t(()=>import("./BaTbi19N.js"),[],import.meta.url),"../../generated/eTag_WArmSprainedR.json":()=>t(()=>import("./BBfmzCTc.js"),[],import.meta.url),"../../generated/eTag_WBite.json":()=>t(()=>import("./B_3K3tEw.js"),[],import.meta.url),"../../generated/eTag_WLegFractureL.json":()=>t(()=>import("./DU7sSxO9.js"),[],import.meta.url),"../../generated/eTag_WLegFractureR.json":()=>t(()=>import("./Tz-oTwb6.js"),[],import.meta.url),"../../generated/eTag_WLegLacerationL.json":()=>t(()=>import("./ZTMG81-9.js"),[],import.meta.url),"../../generated/eTag_WLegLacerationR.json":()=>t(()=>import("./Cf8rQj3A.js"),[],import.meta.url),"../../generated/eTag_WLegSprainedL.json":()=>t(()=>import("./DSA7JsNa.js"),[],import.meta.url),"../../generated/eTag_WLegSprainedR.json":()=>t(()=>import("./f2re6b2l.js"),[],import.meta.url),"../../generated/eTag_WMinorWound.json":()=>t(()=>import("./CHqkl3Ib.js"),[],import.meta.url),"../../generated/eTag_WRibFracture.json":()=>t(()=>import("./g7gpYexP.js"),[],import.meta.url),"../../generated/eTag_WSpiritual.json":()=>t(()=>import("./DIQGNy6m.js"),[],import.meta.url),"../../generated/encounterPopup.json":()=>t(()=>import("./CazpAx3n.js"),[],import.meta.url),"../../generated/searchData.json":()=>t(()=>import("./BOjftXkE.js"),[],import.meta.url)}),`../../generated/${f.id}.json`,4)),d=await d,a(),d).default;return(x,e)=>{const u=E,p=s,A=y,i=E,l=s;return g(),T(D,null,[e[44]||(e[44]=I('<h1>战斗系统</h1><p> 游戏中玩家会遭遇各种猛兽、敌人、陷阱等，这些都会触发战斗系统。<br> 如果能击败敌人，玩家将获得丰厚的奖励，否则可能会受到伤害。<br></p><h2>战斗基本流程</h2><div><ul><li>玩家遭遇敌人</li><li>玩家选择行动，对手根据情况随机行动</li><li>结算双方行动结果</li><li>重复直到一方逃跑，或对方血量降为0</li></ul></div><div><h3>1. 进入战斗</h3><h4> 敌人属性 </h4> 敌人的属性由两部分组成：体型属性和特有属性。<br></div><div><h3>2. 玩家选择行动</h3><p> 玩家可以选择的行动由武器决定，每种武器有不同的攻击方式和伤害类型。<br> 每种武器的招式又受持握类型影响，比如某些招式只能在双手持握时使用。 <br> 逃跑是默认拥有的行动，但逃跑成功率取决于敌人的属性。<br></p><a href="_WeaponMove">点击查看行动列表</a></div><div><h3>3. 对手选择行动</h3> 对手的行动从一系列行动中按照权重随机，查看每个对手了解行动权重。<br></div>',7)),o("div",null,[e[43]||(e[43]=o("h3",null,"4. 结算玩家行动",-1)),O("",!0),n(p,null,{default:_(()=>[e[6]||(e[6]=r(" 近战：")),e[7]||(e[7]=o("br",null,null,-1)),e[8]||(e[8]=r(" 玩家行动的成功率 = ")),n(u,null,{default:_(()=>e[0]||(e[0]=[r("玩家攻击力")])),_:1}),e[9]||(e[9]=r(" / ( ")),n(u,null,{default:_(()=>e[1]||(e[1]=[r("玩家攻击力")])),_:1}),e[10]||(e[10]=r("+")),n(u,null,{default:_(()=>e[2]||(e[2]=[r("敌人攻击力")])),_:1}),e[11]||(e[11]=r(" )")),e[12]||(e[12]=o("br",null,null,-1)),e[13]||(e[13]=r(" 远程：")),e[14]||(e[14]=o("br",null,null,-1)),e[15]||(e[15]=r(" 玩家行动的成功率 = ")),n(u,null,{default:_(()=>e[3]||(e[3]=[r("玩家攻击力")])),_:1}),e[16]||(e[16]=r(" / ( ")),n(u,null,{default:_(()=>e[4]||(e[4]=[r("玩家攻击力")])),_:1}),e[17]||(e[17]=r("+")),n(u,null,{default:_(()=>e[5]||(e[5]=[r("敌人防御力")])),_:1}),e[18]||(e[18]=r(" )")),e[19]||(e[19]=o("br",null,null,-1))]),_:1}),n(p,null,{default:_(()=>[e[24]||(e[24]=r(" 玩家攻击力 = ")),n(u,null,{default:_(()=>e[20]||(e[20]=[r("玩家武器攻击力")])),_:1}),e[25]||(e[25]=r(" + ")),n(u,null,{default:_(()=>e[21]||(e[21]=[r("玩家行动攻击力")])),_:1}),e[26]||(e[26]=r(" + ")),n(u,null,{default:_(()=>[n(A,{obj:b(L).PlayerSizeStat},null,8,["obj"])]),_:1}),e[27]||(e[27]=r(" + ")),n(i,null,{default:_(()=>e[22]||(e[22]=[r("玩家攻击范围")])),_:1}),e[28]||(e[28]=r(" + ")),n(i,null,{default:_(()=>e[23]||(e[23]=[r("临时效果影响")])),_:1})]),_:1}),n(l,null,{default:_(()=>[e[32]||(e[32]=r(" 敌人攻击力 = ")),n(i,null,{default:_(()=>e[29]||(e[29]=[r("敌人行动攻击力")])),_:1}),e[33]||(e[33]=r(" + ")),n(i,null,{default:_(()=>e[30]||(e[30]=[r("敌人体型攻击力")])),_:1}),e[34]||(e[34]=r(" + ")),n(i,null,{default:_(()=>e[31]||(e[31]=[r("敌人攻击范围")])),_:1})]),_:1}),n(l,null,{default:_(()=>[e[39]||(e[39]=r(" 敌人防御力 = ")),n(u,null,{default:_(()=>e[35]||(e[35]=[r("敌人基础攻击力")])),_:1}),e[40]||(e[40]=r(" + ")),n(u,null,{default:_(()=>e[36]||(e[36]=[r("敌人动作攻击力")])),_:1}),e[41]||(e[41]=r(" +")),n(u,null,{default:_(()=>e[37]||(e[37]=[r("掩护值")])),_:1}),e[42]||(e[42]=r(" + ")),n(u,null,{default:_(()=>e[38]||(e[38]=[r("体型防御")])),_:1})]),_:1})])],64)}}});export{M as default};
