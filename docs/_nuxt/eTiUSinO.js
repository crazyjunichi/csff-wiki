import{f as p,i as E,c as t,a as o,F as T,r as g,g as s,k as e,o as _,b as l}from"./DHhi54m_.js";import{_ as L}from"./BheWnx7M.js";import{_ as f}from"./C7qZ4wuB.js";const A={class:"flex flex-wrap gap-2"},j=p({__name:"NPCIndex",props:{id:{}},async setup(i){let r,n;const d=i,{list:u}=([r,n]=E(()=>L(Object.assign({"../../generated/CardType0.json":()=>e(()=>import("./BmE8eUIp.js"),[],import.meta.url),"../../generated/CardType1.json":()=>e(()=>import("./xYScU5az.js"),[],import.meta.url),"../../generated/CardType10.json":()=>e(()=>import("./Daf5kFUg.js"),[],import.meta.url),"../../generated/CardType11.json":()=>e(()=>import("./9xyIOZQg.js"),[],import.meta.url),"../../generated/CardType12.json":()=>e(()=>import("./BwDrqd8x.js"),[],import.meta.url),"../../generated/CardType13.json":()=>e(()=>import("./_okQPiap.js"),[],import.meta.url),"../../generated/CardType2.json":()=>e(()=>import("./DXjVboAD.js"),[],import.meta.url),"../../generated/CardType3.json":()=>e(()=>import("./hZOAtl0z.js"),[],import.meta.url),"../../generated/CardType4.json":()=>e(()=>import("./BhRroz-P.js"),[],import.meta.url),"../../generated/CardType5.json":()=>e(()=>import("./CNKpEcif.js"),[],import.meta.url),"../../generated/CardType6.json":()=>e(()=>import("./pNXiHtQO.js"),[],import.meta.url),"../../generated/CardType7.json":()=>e(()=>import("./-mWNecwe.js"),[],import.meta.url),"../../generated/CardType8.json":()=>e(()=>import("./ys4cDerr.js"),[],import.meta.url),"../../generated/CardType9.json":()=>e(()=>import("./C-HlGWfW.js"),[],import.meta.url),"../../generated/EncounterSystem.json":()=>e(()=>import("./DZLyjyFC.js"),[],import.meta.url),"../../generated/EnemyList.json":()=>e(()=>import("./Bmchp4Sa.js"),[],import.meta.url),"../../generated/EquipmentTag.json":()=>e(()=>import("./BsIhn1Yy.js"),[],import.meta.url),"../../generated/FlavourSystem.json":()=>e(()=>import("./CUQ7hxt0.js"),[],import.meta.url),"../../generated/FlavourTag.json":()=>e(()=>import("./DFoWh1ur.js"),[],import.meta.url),"../../generated/Map.json":()=>e(()=>import("./CwqqU-uc.js"),[],import.meta.url),"../../generated/Perk.json":()=>e(()=>import("./Dbd-vpqq.js"),[],import.meta.url),"../../generated/Quest.json":()=>e(()=>import("./YRUlMqQK.js"),[],import.meta.url),"../../generated/SpiceTag.json":()=>e(()=>import("./2SvphSzK.js"),[],import.meta.url),"../../generated/Trigger.json":()=>e(()=>import("./Cq1c41MN.js"),[],import.meta.url),"../../generated/WeaponMove.json":()=>e(()=>import("./CAOEPTT1.js"),[],import.meta.url),"../../generated/_Ammo.json":()=>e(()=>import("./BSLbgHu_.js"),[],import.meta.url),"../../generated/_Armor.json":()=>e(()=>import("./DQ7gkNUk.js"),[],import.meta.url),"../../generated/_BlueprintIndex.json":()=>e(()=>import("./Bl8bC-ud.js"),[],import.meta.url),"../../generated/_Container.json":()=>e(()=>import("./0GV2hiO3.js"),[],import.meta.url),"../../generated/_Food.json":()=>e(()=>import("./CPrg9DdQ.js"),[],import.meta.url),"../../generated/_NPCIndex.json":()=>e(()=>import("./Ci9sl2Pd.js"),[],import.meta.url),"../../generated/_Seasons.json":()=>e(()=>import("./CCLm2Eea.js"),[],import.meta.url),"../../generated/_StatIndex.json":()=>e(()=>import("./CA-wSdt6.js"),[],import.meta.url),"../../generated/_TradingValue.json":()=>e(()=>import("./qxpqQFhO.js"),[],import.meta.url),"../../generated/_Weapon.json":()=>e(()=>import("./CAPJYMfO.js"),[],import.meta.url),"../../generated/eTag_Backpack.json":()=>e(()=>import("./BFmarDy9.js"),[],import.meta.url),"../../generated/eTag_Belt.json":()=>e(()=>import("./B4en1g1l.js"),[],import.meta.url),"../../generated/eTag_Bracers.json":()=>e(()=>import("./GNDZyEGi.js"),[],import.meta.url),"../../generated/eTag_Hands.json":()=>e(()=>import("./2TeAQrE_.js"),[],import.meta.url),"../../generated/eTag_Head.json":()=>e(()=>import("./Dzz-07jS.js"),[],import.meta.url),"../../generated/eTag_Mask.json":()=>e(()=>import("./DpZlceM1.js"),[],import.meta.url),"../../generated/eTag_Neck.json":()=>e(()=>import("./C0hEShJQ.js"),[],import.meta.url),"../../generated/eTag_OuterTorso.json":()=>e(()=>import("./Bfgd98Qk.js"),[],import.meta.url),"../../generated/eTag_Pants.json":()=>e(()=>import("./B6cm_DCv.js"),[],import.meta.url),"../../generated/eTag_Pouch.json":()=>e(()=>import("./DjmmSD6-.js"),[],import.meta.url),"../../generated/eTag_Shield.json":()=>e(()=>import("./SAf0wSyi.js"),[],import.meta.url),"../../generated/eTag_Shirt.json":()=>e(()=>import("./3iCTRjA6.js"),[],import.meta.url),"../../generated/eTag_Shoes.json":()=>e(()=>import("./Bg-gGsoK.js"),[],import.meta.url),"../../generated/eTag_Shoulder.json":()=>e(()=>import("./BIg9VI2_.js"),[],import.meta.url),"../../generated/eTag_Spirit.json":()=>e(()=>import("./BfMz4ng9.js"),[],import.meta.url),"../../generated/eTag_WAbrasion.json":()=>e(()=>import("./CLjtXaVv.js"),[],import.meta.url),"../../generated/eTag_WArmFractureL.json":()=>e(()=>import("./DhVA3GZ2.js"),[],import.meta.url),"../../generated/eTag_WArmFractureR.json":()=>e(()=>import("./BUHSmSPI.js"),[],import.meta.url),"../../generated/eTag_WArmLacerationL.json":()=>e(()=>import("./D0R6Ts36.js"),[],import.meta.url),"../../generated/eTag_WArmLacerationR.json":()=>e(()=>import("./CGZ2DPsN.js"),[],import.meta.url),"../../generated/eTag_WArmSprainedL.json":()=>e(()=>import("./BaTbi19N.js"),[],import.meta.url),"../../generated/eTag_WArmSprainedR.json":()=>e(()=>import("./BBfmzCTc.js"),[],import.meta.url),"../../generated/eTag_WBite.json":()=>e(()=>import("./B_3K3tEw.js"),[],import.meta.url),"../../generated/eTag_WLegFractureL.json":()=>e(()=>import("./DU7sSxO9.js"),[],import.meta.url),"../../generated/eTag_WLegFractureR.json":()=>e(()=>import("./Tz-oTwb6.js"),[],import.meta.url),"../../generated/eTag_WLegLacerationL.json":()=>e(()=>import("./ZTMG81-9.js"),[],import.meta.url),"../../generated/eTag_WLegLacerationR.json":()=>e(()=>import("./Cf8rQj3A.js"),[],import.meta.url),"../../generated/eTag_WLegSprainedL.json":()=>e(()=>import("./DSA7JsNa.js"),[],import.meta.url),"../../generated/eTag_WLegSprainedR.json":()=>e(()=>import("./f2re6b2l.js"),[],import.meta.url),"../../generated/eTag_WMinorWound.json":()=>e(()=>import("./CHqkl3Ib.js"),[],import.meta.url),"../../generated/eTag_WRibFracture.json":()=>e(()=>import("./g7gpYexP.js"),[],import.meta.url),"../../generated/eTag_WSpiritual.json":()=>e(()=>import("./DIQGNy6m.js"),[],import.meta.url),"../../generated/encounterPopup.json":()=>e(()=>import("./CazpAx3n.js"),[],import.meta.url),"../../generated/searchData.json":()=>e(()=>import("./BOjftXkE.js"),[],import.meta.url)}),`../../generated/${d.id}.json`,4)),r=await r,n(),r).default;return(P,a)=>(_(),t("div",null,[a[0]||(a[0]=o("h1",null,"NPC",-1)),o("div",A,[(_(!0),t(T,null,g(s(u),m=>(_(),t("span",null,[l(f,{card:m},null,8,["card"])]))),256))])]))}});export{j as default};
