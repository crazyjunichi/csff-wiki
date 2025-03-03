const e="AlcoholEffect",a={m_FileID:1,m_PathID:756,FileName:"Tracks@756"},t="0_3654",i="AlcoholEffect@3654.json",l="513ae4007a5e58c47857537a3ae653ad",o={ParentObjectID:"513ae4007a5e58c47857537a3ae653ad",LocalizationKey:"AlcoholEffect_GameName",DefaultText:"Alcohol",Text:"酒精"},n={ParentObjectID:"513ae4007a5e58c47857537a3ae653ad",LocalizationKey:"AlcoholEffect_Description",DefaultText:"Reduces pain, stress and mental structure while increasing courage and morale. Causes dehydration and nausea when high.",Text:"减轻你的疼痛、压力和世界观，同时提升勇气和情绪。过高会导致脱水和恶心。"},r=0,s={x:0,y:70},f=-1,c={x:0,y:0},y=[],u=[],x=0,d=[],M=0,I=!1,V=!1,T=!1,D={x:0,y:0},S={x:0,y:0},v=!1,p={r:.5019608,g:.17254902,b:.011764707,a:1},m={r:1,g:.72851,b:0,a:1},O={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},A={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},N={m_FileID:0,m_PathID:633,FileName:"Alcohol_Old@633"},g=JSON.parse(`[{"GameName":{"ParentObjectID":"513ae4007a5e58c47857537a3ae653ad","LocalizationKey":"AlcoholEffect_Statuses[0].GameName","DefaultText":"Tipsy","Text":"微醺"},"Description":{"ParentObjectID":"513ae4007a5e58c47857537a3ae653ad","LocalizationKey":"AlcoholEffect_Statuses[0].Description","DefaultText":"He he!","Text":"嘿嘿！"},"StatusLog":{"LogText":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"Category":null,"TicksToRegister":0},"Icon":{"m_FileID":0,"m_PathID":633,"FileName":"Alcohol_Old@633"},"ValueRange":{"m_X":13,"m_Y":24},"UsePercentageForRange":false,"EffectsOnStats":[{"Stat":{"key":"Thirst","text":"口渴度","icon":"Water@911","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-4,"y":-4},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Stress","text":"压力","icon":"Stress@705","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-2,"y":-2},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"MentalStructure","text":"世界观","icon":"Shield@406","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-0.5,"y":-0.5},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Morale","text":"情绪","icon":"Morale2@511","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":1,"y":1},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":null,"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":1,"y":1},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Pain","text":"疼痛","icon":"Pain@461","type":"stat"},"ValueModifier":{"x":-75,"y":-75},"RateModifier":{"x":0,"y":0},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Courage","text":"勇气","icon":"Shield@406","type":"stat"},"ValueModifier":{"x":200,"y":200},"RateModifier":{"x":0,"y":0},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false}],"EffectsOnActions":[],"NotifyPlayer":2,"RepeatTextNotification":0,"AlertLevel":1,"AlertSounds":[],"RepeatAlertSounds":0,"GameOver":false,"ActionsMaxTicks":0,"PreventingActionMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"CombatEffects":[],"ConfidenceModifier":0.2},{"GameName":{"ParentObjectID":"513ae4007a5e58c47857537a3ae653ad","LocalizationKey":"AlcoholEffect_Statuses[1].GameName","DefaultText":"Drunk","Text":"醉酒"},"Description":{"ParentObjectID":"513ae4007a5e58c47857537a3ae653ad","LocalizationKey":"AlcoholEffect_Statuses[1].Description","DefaultText":"I think I'm drunk.","Text":"我觉得我喝醉了。"},"StatusLog":{"LogText":{"ParentObjectID":"513ae4007a5e58c47857537a3ae653ad","LocalizationKey":"AlcoholEffect_Statuses[1].StatusLog.LogText","DefaultText":"I got drunk.","Text":"我喝醉了。"},"Category":null,"TicksToRegister":4},"Icon":{"m_FileID":0,"m_PathID":633,"FileName":"Alcohol_Old@633"},"ValueRange":{"m_X":25,"m_Y":48},"UsePercentageForRange":false,"EffectsOnStats":[{"Stat":{"key":"Thirst","text":"口渴度","icon":"Water@911","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-6,"y":-6},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Nausea","text":"恶心","icon":"Nausea@351","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":1.5,"y":1.5},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Stress","text":"压力","icon":"Stress@705","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-4,"y":-4},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"MentalStructure","text":"世界观","icon":"Shield@406","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-2,"y":-2},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Morale","text":"情绪","icon":"Morale2@511","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":2,"y":2},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":null,"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":2,"y":2},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Pain","text":"疼痛","icon":"Pain@461","type":"stat"},"ValueModifier":{"x":-150,"y":-150},"RateModifier":{"x":0,"y":0},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Courage","text":"勇气","icon":"Shield@406","type":"stat"},"ValueModifier":{"x":900,"y":900},"RateModifier":{"x":0,"y":0},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false}],"EffectsOnActions":[],"NotifyPlayer":2,"RepeatTextNotification":0,"AlertLevel":3,"AlertSounds":[],"RepeatAlertSounds":0,"GameOver":false,"ActionsMaxTicks":0,"PreventingActionMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"CombatEffects":[],"ConfidenceModifier":0.4},{"GameName":{"ParentObjectID":"513ae4007a5e58c47857537a3ae653ad","LocalizationKey":"AlcoholEffect_Statuses[2].GameName","DefaultText":"Horribly Drunk","Text":"大醉"},"Description":{"ParentObjectID":"513ae4007a5e58c47857537a3ae653ad","LocalizationKey":"AlcoholEffect_Statuses[2].Description","DefaultText":"I'm... hic*... really... hic*... druuunk...","Text":"我……打嗝*……真的……打嗝*……喝醉了……"},"StatusLog":{"LogText":{"ParentObjectID":"513ae4007a5e58c47857537a3ae653ad","LocalizationKey":"AlcoholEffect_Statuses[2].StatusLog.LogText","DefaultText":"I got very drunk.","Text":"我喝大了。"},"Category":null,"TicksToRegister":0},"Icon":{"m_FileID":0,"m_PathID":633,"FileName":"Alcohol_Old@633"},"ValueRange":{"m_X":49,"m_Y":70},"UsePercentageForRange":false,"EffectsOnStats":[{"Stat":{"key":"Thirst","text":"口渴度","icon":"Water@911","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-8,"y":-8},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Nausea","text":"恶心","icon":"Nausea@351","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":3,"y":3},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Stress","text":"压力","icon":"Stress@705","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-3,"y":-3},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"MentalStructure","text":"世界观","icon":"Shield@406","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-3,"y":-3},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Morale","text":"情绪","icon":"Morale2@511","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":4,"y":4},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":null,"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":4,"y":4},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Pain","text":"疼痛","icon":"Pain@461","type":"stat"},"ValueModifier":{"x":-300,"y":-300},"RateModifier":{"x":0,"y":0},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Courage","text":"勇气","icon":"Shield@406","type":"stat"},"ValueModifier":{"x":1600,"y":1800},"RateModifier":{"x":0,"y":0},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false}],"EffectsOnActions":[],"NotifyPlayer":2,"RepeatTextNotification":0,"AlertLevel":4,"AlertSounds":[],"RepeatAlertSounds":0,"GameOver":false,"ActionsMaxTicks":0,"PreventingActionMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"CombatEffects":[],"ConfidenceModifier":0.6}]`),b=!1,h=0,P=0,k=0,C=[],L=!0,_={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},E={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},F=!1,R=[{link:{key:"Event_Vomit",text:"呕吐！",icon:"AloeGel_Old@486",SpoilageTime:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"时间"},OverrideIcon:null,MaxValue:0},UsageDurability:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"耐久"},OverrideIcon:null,MaxValue:0},FuelCapacity:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"容量"},OverrideIcon:null,MaxValue:0},Progress:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"进度"},OverrideIcon:null,MaxValue:0},SpecialDurability1:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊1"},OverrideIcon:null,MaxValue:0},SpecialDurability2:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊2"},OverrideIcon:null,MaxValue:0},SpecialDurability3:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊3"},OverrideIcon:null,MaxValue:0},SpecialDurability4:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊4"},OverrideIcon:null,MaxValue:0}},name:"动作：呕呕呕……",value:{x:-32,y:-32}},{link:{key:"LQ_Beer",text:"啤酒",icon:"Thirst_Old@462",SpoilageTime:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"时间"},OverrideIcon:null,MaxValue:960},UsageDurability:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"耐久"},OverrideIcon:null,MaxValue:0},FuelCapacity:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"容量"},OverrideIcon:null,MaxValue:0},Progress:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"进度"},OverrideIcon:null,MaxValue:0},SpecialDurability1:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊1"},OverrideIcon:null,MaxValue:0},SpecialDurability2:{CardStatName:{ParentObjectID:"271485f454e84c84ebd66f2bd2e8e708",LocalizationKey:"LQ_Beer_SpecialDurability2.CardStatName",DefaultText:"Quality",Text:"品质"},OverrideIcon:{m_FileID:0,m_PathID:737,FileName:"Quality@737"},MaxValue:100},SpecialDurability3:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊3"},OverrideIcon:null,MaxValue:0},SpecialDurability4:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊4"},OverrideIcon:null,MaxValue:0}},name:"动作：饮用",value:{x:12,y:12}},{link:{key:"LQ_Mead",text:"Mead",icon:"Thirst_Old@462",SpoilageTime:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"时间"},OverrideIcon:null,MaxValue:960},UsageDurability:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"耐久"},OverrideIcon:null,MaxValue:0},FuelCapacity:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"容量"},OverrideIcon:null,MaxValue:0},Progress:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"进度"},OverrideIcon:null,MaxValue:0},SpecialDurability1:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊1"},OverrideIcon:null,MaxValue:0},SpecialDurability2:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊2"},OverrideIcon:null,MaxValue:0},SpecialDurability3:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊3"},OverrideIcon:null,MaxValue:0},SpecialDurability4:{CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊4"},OverrideIcon:null,MaxValue:0}},name:"动作：Drink",value:{x:12,y:12}}],j=[],z=[],K=null,B=1,G={Icon:{m_FileID:0,m_PathID:297,FileName:"Fever_Old@297"},NegativeIcon:null,StepValue:100,Inverted:!1},U=null,Q=null,w={m_Name:e,m_Script:a,___key:t,___fn:i,UniqueID:l,GameName:o,Description:n,BaseValue:r,MinMaxValue:s,BaseRatePerTick:f,MinMaxRate:c,TimeOfDayMods:y,CompositeStats:u,StatPriority:x,RequiredPerks:d,Visibility:M,VisibleInDetailedList:I,CannotBeInspected:V,InvertedDirection:T,VisibleValueRange:D,TrendIndicatorRateRange:S,StatusesHaveNoBar:v,BarColor:p,BarHighlightColor:m,DefaultStatusName:O,DefaultStatusDescription:A,DefaultStatusIcon:N,Statuses:g,UsesNovelty:b,NoveltyCooldownDuration:h,StalenessMultiplier:P,MaxStalenessStack:k,StatActions:C,ShowActionEffects:L,NotEnoughText:_,TooMuchText:E,StatusDebugMode:F,_modifierValueList:R,_modifierRateList:j,_requireList:z,m_GameObject:K,m_Enabled:B,FeedbackInfo:G,OverrideFeedbackPrefab:U,NotEnoughIcon:Q};export{p as BarColor,m as BarHighlightColor,f as BaseRatePerTick,r as BaseValue,V as CannotBeInspected,u as CompositeStats,A as DefaultStatusDescription,N as DefaultStatusIcon,O as DefaultStatusName,n as Description,G as FeedbackInfo,o as GameName,T as InvertedDirection,k as MaxStalenessStack,c as MinMaxRate,s as MinMaxValue,Q as NotEnoughIcon,_ as NotEnoughText,h as NoveltyCooldownDuration,U as OverrideFeedbackPrefab,d as RequiredPerks,L as ShowActionEffects,P as StalenessMultiplier,C as StatActions,x as StatPriority,F as StatusDebugMode,g as Statuses,v as StatusesHaveNoBar,y as TimeOfDayMods,E as TooMuchText,S as TrendIndicatorRateRange,l as UniqueID,b as UsesNovelty,M as Visibility,I as VisibleInDetailedList,D as VisibleValueRange,i as ___fn,t as ___key,j as _modifierRateList,R as _modifierValueList,z as _requireList,w as default,B as m_Enabled,K as m_GameObject,e as m_Name,a as m_Script};
