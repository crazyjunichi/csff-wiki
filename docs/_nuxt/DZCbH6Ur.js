import{f as l,g as L,c as t,a,t as f,k as n,F as u,r as m,h as e,o as r,b as A,i as R}from"./CxuzRj8Q.js";import{_ as P}from"./CnQ2W7qm.js";import{_ as j}from"./BheWnx7M.js";import{_ as I}from"./BD8QkKSM.js";const D={key:0},O={class:"grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6"},V={class:"text-center border border-current/10 rounded-lg p-2"},c={key:1},y={class:"flex flex-wrap gap-4"},x=l({__name:"CardList",props:{id:{}},async setup(p){let _,i;const E=p,{title:s,list:d,useImage:g}=([_,i]=L(()=>j(Object.assign({"../../generated/CardType0.json":()=>e(()=>import("./pnyqnR-u.js"),[],import.meta.url),"../../generated/CardType1.json":()=>e(()=>import("./BUOSlmx5.js"),[],import.meta.url),"../../generated/CardType10.json":()=>e(()=>import("./DnZZrQXT.js"),[],import.meta.url),"../../generated/CardType11.json":()=>e(()=>import("./Bi59Zq62.js"),[],import.meta.url),"../../generated/CardType12.json":()=>e(()=>import("./DerAXud5.js"),[],import.meta.url),"../../generated/CardType13.json":()=>e(()=>import("./BwT4SZvP.js"),[],import.meta.url),"../../generated/CardType2.json":()=>e(()=>import("./DDp-_I1j.js"),[],import.meta.url),"../../generated/CardType3.json":()=>e(()=>import("./B4yAarTZ.js"),[],import.meta.url),"../../generated/CardType4.json":()=>e(()=>import("./EJckvd-m.js"),[],import.meta.url),"../../generated/CardType5.json":()=>e(()=>import("./D8zr_CVe.js"),[],import.meta.url),"../../generated/CardType6.json":()=>e(()=>import("./pNXiHtQO.js"),[],import.meta.url),"../../generated/CardType7.json":()=>e(()=>import("./Dtg9WCRO.js"),[],import.meta.url),"../../generated/CardType8.json":()=>e(()=>import("./BauxkFKp.js"),[],import.meta.url),"../../generated/CardType9.json":()=>e(()=>import("./BHetlQY3.js"),[],import.meta.url),"../../generated/EncounterSystem.json":()=>e(()=>import("./aVJeTFDP.js"),[],import.meta.url),"../../generated/EnemyList.json":()=>e(()=>import("./BwslrEgl.js"),[],import.meta.url),"../../generated/EquipmentTag.json":()=>e(()=>import("./J65xIDXI.js"),[],import.meta.url),"../../generated/FlavourSystem.json":()=>e(()=>import("./_giVw5yq.js"),[],import.meta.url),"../../generated/FlavourTag.json":()=>e(()=>import("./DFoWh1ur.js"),[],import.meta.url),"../../generated/Map.json":()=>e(()=>import("./U4rv6Ycl.js"),[],import.meta.url),"../../generated/Objective.json":()=>e(()=>import("./uu-IQ9Tp.js"),[],import.meta.url),"../../generated/Perk.json":()=>e(()=>import("./D9m8FQwk.js"),[],import.meta.url),"../../generated/Quest.json":()=>e(()=>import("./enUlaDt5.js"),[],import.meta.url),"../../generated/SpiceTag.json":()=>e(()=>import("./2SvphSzK.js"),[],import.meta.url),"../../generated/Trigger.json":()=>e(()=>import("./Cq1c41MN.js"),[],import.meta.url),"../../generated/WeaponMove.json":()=>e(()=>import("./CAOEPTT1.js"),[],import.meta.url),"../../generated/_Ammo.json":()=>e(()=>import("./Cxv4_2X9.js"),[],import.meta.url),"../../generated/_Armor.json":()=>e(()=>import("./0-yJETb1.js"),[],import.meta.url),"../../generated/_BlueprintIndex.json":()=>e(()=>import("./DAvlfF1o.js"),[],import.meta.url),"../../generated/_Container.json":()=>e(()=>import("./BGo4Y338.js"),[],import.meta.url),"../../generated/_NPCIndex.json":()=>e(()=>import("./4zycL3_A.js"),[],import.meta.url),"../../generated/_Seasons.json":()=>e(()=>import("./B62rlRoe.js"),[],import.meta.url),"../../generated/_StatIndex.json":()=>e(()=>import("./DTWXFfAC.js"),[],import.meta.url),"../../generated/_TradingValue.json":()=>e(()=>import("./CE9kJrK4.js"),[],import.meta.url),"../../generated/_Weapon.json":()=>e(()=>import("./C2E_nu8j.js"),[],import.meta.url),"../../generated/eTag_Backpack.json":()=>e(()=>import("./DlscN1rk.js"),[],import.meta.url),"../../generated/eTag_Belt.json":()=>e(()=>import("./CIR-9ack.js"),[],import.meta.url),"../../generated/eTag_Bracers.json":()=>e(()=>import("./BZNdNNPE.js"),[],import.meta.url),"../../generated/eTag_Hands.json":()=>e(()=>import("./DCdGGGU2.js"),[],import.meta.url),"../../generated/eTag_Head.json":()=>e(()=>import("./Ol_EN8He.js"),[],import.meta.url),"../../generated/eTag_Mask.json":()=>e(()=>import("./r43uXfIu.js"),[],import.meta.url),"../../generated/eTag_Neck.json":()=>e(()=>import("./8f5qJuS7.js"),[],import.meta.url),"../../generated/eTag_OuterTorso.json":()=>e(()=>import("./BBdQzycf.js"),[],import.meta.url),"../../generated/eTag_Pants.json":()=>e(()=>import("./ZqZ4geuq.js"),[],import.meta.url),"../../generated/eTag_Pouch.json":()=>e(()=>import("./D1iHKKk2.js"),[],import.meta.url),"../../generated/eTag_Shield.json":()=>e(()=>import("./De8u0g5X.js"),[],import.meta.url),"../../generated/eTag_Shirt.json":()=>e(()=>import("./DSLRZq11.js"),[],import.meta.url),"../../generated/eTag_Shoes.json":()=>e(()=>import("./C8GEjYmP.js"),[],import.meta.url),"../../generated/eTag_Shoulder.json":()=>e(()=>import("./BLzinqEs.js"),[],import.meta.url),"../../generated/eTag_Spirit.json":()=>e(()=>import("./B3p5-Z0m.js"),[],import.meta.url),"../../generated/eTag_WAbrasion.json":()=>e(()=>import("./B7P7jDVj.js"),[],import.meta.url),"../../generated/eTag_WArmFractureL.json":()=>e(()=>import("./DUrrYEZc.js"),[],import.meta.url),"../../generated/eTag_WArmFractureR.json":()=>e(()=>import("./CzzF4vEl.js"),[],import.meta.url),"../../generated/eTag_WArmLacerationL.json":()=>e(()=>import("./DBml6fnZ.js"),[],import.meta.url),"../../generated/eTag_WArmLacerationR.json":()=>e(()=>import("./iqq2nVXc.js"),[],import.meta.url),"../../generated/eTag_WArmSprainedL.json":()=>e(()=>import("./Bh4ka58j.js"),[],import.meta.url),"../../generated/eTag_WArmSprainedR.json":()=>e(()=>import("./CP5YGLvI.js"),[],import.meta.url),"../../generated/eTag_WBite.json":()=>e(()=>import("./B_3K3tEw.js"),[],import.meta.url),"../../generated/eTag_WLegFractureL.json":()=>e(()=>import("./DnXdUOVx.js"),[],import.meta.url),"../../generated/eTag_WLegFractureR.json":()=>e(()=>import("./CTfAWdoy.js"),[],import.meta.url),"../../generated/eTag_WLegLacerationL.json":()=>e(()=>import("./CfCT9b_S.js"),[],import.meta.url),"../../generated/eTag_WLegLacerationR.json":()=>e(()=>import("./OHy2BgAO.js"),[],import.meta.url),"../../generated/eTag_WLegSprainedL.json":()=>e(()=>import("./DGkfUfW9.js"),[],import.meta.url),"../../generated/eTag_WLegSprainedR.json":()=>e(()=>import("./Cfy4euYH.js"),[],import.meta.url),"../../generated/eTag_WMinorWound.json":()=>e(()=>import("./B_vn-AY7.js"),[],import.meta.url),"../../generated/eTag_WRibFracture.json":()=>e(()=>import("./CWY8LmeV.js"),[],import.meta.url),"../../generated/eTag_WSpiritual.json":()=>e(()=>import("./DIQGNy6m.js"),[],import.meta.url),"../../generated/encounterPopup.json":()=>e(()=>import("./D30If6jV.js"),[],import.meta.url),"../../generated/searchData.json":()=>e(()=>import("./CKyzb8kU.js"),[],import.meta.url)}),`../../generated/${E.id}.json`,4)),_=await _,i(),_).default;return(W,C)=>{const T=P;return r(),t("div",null,[a("h1",null,f(n(s)),1),n(g)?(r(),t("div",c,[a("div",y,[(r(!0),t(u,null,m(n(d),o=>(r(),R(I,{card:o},null,8,["card"]))),256))])])):(r(),t("div",D,[a("div",O,[(r(!0),t(u,null,m(n(d),o=>(r(),t("div",V,[A(T,{obj:o},null,8,["obj"])]))),256))])]))])}}});export{x as default};
