const e="SaturationStew",t={m_FileID:1,m_PathID:756,FileName:"Tracks@756"},a="0_3951",i="SaturationStew@3951.json",o="18bc698f80862b54aa918775cd83ffc4",n={ParentObjectID:"18bc698f80862b54aa918775cd83ffc4",LocalizationKey:"SaturationStew_GameName",DefaultText:"Stew Saturation",Text:"炖菜厌倦度"},l={ParentObjectID:"18bc698f80862b54aa918775cd83ffc4",LocalizationKey:"SaturationStew_Description",DefaultText:"Shows how tired you are of eating stew. Lowers your wellbeing and gets you nauseous if it gets too high.",Text:"显示你对炖菜有多厌倦。如果过高，会降低你的幸福度，并让你感到恶心。"},c=0,s={x:0,y:288},r=-1,f={x:0,y:0},u=[],d=[],D=0,x=[],m=0,y=!1,S=!1,I=!1,b={x:0,y:0},T={x:0,y:0},_=!1,M={r:.29236382,g:.56694746,b:.8490566,a:1},g={r:0,g:.22990721,b:.4245283,a:1},N={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},P={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},L={m_FileID:0,m_PathID:637,FileName:"SaturationCauldron@637"},O=[{GameName:{ParentObjectID:"18bc698f80862b54aa918775cd83ffc4",LocalizationKey:"SaturationStew_Statuses[0].GameName",DefaultText:"I'm a bit tired of eating Stew...",Text:"我有点厌倦吃炖菜了……"},Description:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},StatusLog:{LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},Category:null,TicksToRegister:0},Icon:{m_FileID:0,m_PathID:637,FileName:"SaturationCauldron@637"},ValueRange:{m_X:97,m_Y:240},UsePercentageForRange:!1,EffectsOnStats:[{Stat:{key:"Wellbeing",text:"幸福度",icon:"Wellbeing@879",type:"stat"},ValueModifier:{x:0,y:0},RateModifier:{x:-.25,y:-.25},MinValueModifier:{x:0,y:0},MaxValueModifier:{x:0,y:0},CannotModifyBeyond:{Active:!1,FloatValue:0,MaxValue:0},ApplyEachTick:!1,InstantModifier:!1,IgnoreNovelty:!1,IsInverse:!1}],EffectsOnActions:[],NotifyPlayer:2,RepeatTextNotification:0,AlertLevel:0,AlertSounds:[],RepeatAlertSounds:0,GameOver:!1,ActionsMaxTicks:0,PreventingActionMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},CombatEffects:[],ConfidenceModifier:0},{GameName:{ParentObjectID:"18bc698f80862b54aa918775cd83ffc4",LocalizationKey:"SaturationStew_Statuses[1].GameName",DefaultText:"I'm so sick of eating Stew...",Text:"我讨厌吃炖菜……"},Description:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},StatusLog:{LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},Category:null,TicksToRegister:0},Icon:{m_FileID:0,m_PathID:637,FileName:"SaturationCauldron@637"},ValueRange:{m_X:241,m_Y:288},UsePercentageForRange:!1,EffectsOnStats:[{Stat:{key:"Wellbeing",text:"幸福度",icon:"Wellbeing@879",type:"stat"},ValueModifier:{x:0,y:0},RateModifier:{x:-.75,y:-.75},MinValueModifier:{x:0,y:0},MaxValueModifier:{x:0,y:0},CannotModifyBeyond:{Active:!1,FloatValue:0,MaxValue:0},ApplyEachTick:!1,InstantModifier:!1,IgnoreNovelty:!1,IsInverse:!1},{Stat:{key:"Nausea",text:"恶心",icon:"Nausea@351",type:"stat"},ValueModifier:{x:0,y:0},RateModifier:{x:.5,y:.5},MinValueModifier:{x:0,y:0},MaxValueModifier:{x:0,y:0},CannotModifyBeyond:{Active:!1,FloatValue:0,MaxValue:0},ApplyEachTick:!1,InstantModifier:!1,IgnoreNovelty:!1,IsInverse:!1}],EffectsOnActions:[],NotifyPlayer:2,RepeatTextNotification:0,AlertLevel:1,AlertSounds:[],RepeatAlertSounds:0,GameOver:!1,ActionsMaxTicks:0,PreventingActionMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},CombatEffects:[],ConfidenceModifier:0}],p=!1,C=0,V=0,F=0,v=[],h=!1,j={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},w={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},z=!1,K=[{link:{key:"LQ_StewWater",text:"水",icon:"",SpoilageTime:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"耐久"},OverrideIcon:{m_FileID:0,m_PathID:493,FileName:"Spoilage@493"},MaxValue:384},UsageDurability:{CardStatName:{ParentObjectID:"a0e1cf6d47685a741b5cd9889fb39227",LocalizationKey:"LQ_StewWater_UsageDurability.CardStatName",DefaultText:"Vitamins",Text:"维生素"},OverrideIcon:{m_FileID:0,m_PathID:801,FileName:"SaturationVegetables@801"},MaxValue:1e3},FuelCapacity:{CardStatName:{ParentObjectID:"a0e1cf6d47685a741b5cd9889fb39227",LocalizationKey:"LQ_StewWater_FuelCapacity.CardStatName",DefaultText:"Temperature",Text:"温度"},OverrideIcon:{m_FileID:0,m_PathID:595,FileName:"Hot@595"},MaxValue:200},Progress:{CardStatName:{ParentObjectID:"a0e1cf6d47685a741b5cd9889fb39227",LocalizationKey:"LQ_StewWater_Progress.CardStatName",DefaultText:"Thickness",Text:"浓稠度"},OverrideIcon:{m_FileID:0,m_PathID:637,FileName:"SaturationCauldron@637"},MaxValue:100},SpecialDurability1:{CardStatName:{ParentObjectID:"a0e1cf6d47685a741b5cd9889fb39227",LocalizationKey:"LQ_StewWater_SpecialDurability1.CardStatName",DefaultText:"Calories",Text:"卡路里"},OverrideIcon:{m_FileID:0,m_PathID:903,FileName:"Weight3@903"},MaxValue:1e3},SpecialDurability2:{CardStatName:{ParentObjectID:"a0e1cf6d47685a741b5cd9889fb39227",LocalizationKey:"LQ_StewWater_SpecialDurability2.CardStatName",DefaultText:"Quality",Text:"品质"},OverrideIcon:{m_FileID:0,m_PathID:737,FileName:"Quality@737"},MaxValue:100},SpecialDurability3:{CardStatName:{ParentObjectID:"a0e1cf6d47685a741b5cd9889fb39227",LocalizationKey:"LQ_StewWater_SpecialDurability3.CardStatName",DefaultText:"Proteins",Text:"蛋白质"},OverrideIcon:{m_FileID:0,m_PathID:688,FileName:"SaturationMeat@688"},MaxValue:1e3},SpecialDurability4:{CardStatName:{ParentObjectID:"a0e1cf6d47685a741b5cd9889fb39227",LocalizationKey:"LQ_StewWater_SpecialDurability4.CardStatName",DefaultText:"Waste",Text:"残渣"},OverrideIcon:{m_FileID:0,m_PathID:624,FileName:"Filth@624"},MaxValue:1e3}},name:"动作：饮用",value:{x:0,y:22}}],k=[],A=[],R=null,W=1,E={Icon:null,NegativeIcon:null,StepValue:1,Inverted:!1},Q=null,B=null,G={m_Name:e,m_Script:t,___key:a,___fn:i,UniqueID:o,GameName:n,Description:l,BaseValue:c,MinMaxValue:s,BaseRatePerTick:r,MinMaxRate:f,TimeOfDayMods:u,CompositeStats:d,StatPriority:D,RequiredPerks:x,Visibility:m,VisibleInDetailedList:y,CannotBeInspected:S,InvertedDirection:I,VisibleValueRange:b,TrendIndicatorRateRange:T,StatusesHaveNoBar:_,BarColor:M,BarHighlightColor:g,DefaultStatusName:N,DefaultStatusDescription:P,DefaultStatusIcon:L,Statuses:O,UsesNovelty:p,NoveltyCooldownDuration:C,StalenessMultiplier:V,MaxStalenessStack:F,StatActions:v,ShowActionEffects:h,NotEnoughText:j,TooMuchText:w,StatusDebugMode:z,_modifierValueList:K,_modifierRateList:k,_requireList:A,m_GameObject:R,m_Enabled:W,FeedbackInfo:E,OverrideFeedbackPrefab:Q,NotEnoughIcon:B};export{M as BarColor,g as BarHighlightColor,r as BaseRatePerTick,c as BaseValue,S as CannotBeInspected,d as CompositeStats,P as DefaultStatusDescription,L as DefaultStatusIcon,N as DefaultStatusName,l as Description,E as FeedbackInfo,n as GameName,I as InvertedDirection,F as MaxStalenessStack,f as MinMaxRate,s as MinMaxValue,B as NotEnoughIcon,j as NotEnoughText,C as NoveltyCooldownDuration,Q as OverrideFeedbackPrefab,x as RequiredPerks,h as ShowActionEffects,V as StalenessMultiplier,v as StatActions,D as StatPriority,z as StatusDebugMode,O as Statuses,_ as StatusesHaveNoBar,u as TimeOfDayMods,w as TooMuchText,T as TrendIndicatorRateRange,o as UniqueID,p as UsesNovelty,m as Visibility,y as VisibleInDetailedList,b as VisibleValueRange,i as ___fn,a as ___key,k as _modifierRateList,K as _modifierValueList,A as _requireList,G as default,W as m_Enabled,R as m_GameObject,e as m_Name,t as m_Script};
