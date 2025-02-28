const e="BugPopulation",a={m_FileID:1,m_PathID:755,FileName:"GardenPlot@755"},t="0_3652",i="BugPopulation@3652.json",l="00c2afb9343f5c34988dcdb12a7792a8",o={ParentObjectID:"00c2afb9343f5c34988dcdb12a7792a8",LocalizationKey:"BugPopulation_GameName",DefaultText:"Bug Population",Text:"蚊虫数量"},r={ParentObjectID:"00c2afb9343f5c34988dcdb12a7792a8",LocalizationKey:"BugPopulation_Description",DefaultText:"The amount of bugs (including mosquitoes) that can be found in a given area.",Text:"在某一特定地区所能找到的虫子（包括蚊子）的数量。"},n=0,c={x:0,y:5},u=0,x={x:0,y:0},s=[],D=[],y=0,d=[],f=0,b=!1,T=!1,I=!1,S={x:0,y:0},m={x:0,y:0},O=!0,P={r:0,g:0,b:0,a:0},p={r:0,g:0,b:0,a:0},g={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},M={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},v={m_FileID:0,m_PathID:867,FileName:"Bugs_Old@867"},N=[{GameName:{ParentObjectID:"00c2afb9343f5c34988dcdb12a7792a8",LocalizationKey:"BugPopulation_Statuses[0].GameName",DefaultText:"Moderate Bug Population",Text:"中等蚊虫数量"},Description:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},StatusLog:{LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},Category:null,TicksToRegister:0},Icon:{m_FileID:0,m_PathID:867,FileName:"Bugs_Old@867"},ValueRange:{m_X:1,m_Y:1},UsePercentageForRange:!1,EffectsOnStats:[{Stat:{key:"BugDamage",text:"蚊虫叮咬",icon:"Bugs_Old@867",type:"stat"},ValueModifier:{x:1,y:1},RateModifier:{x:0,y:0},MinValueModifier:{x:0,y:0},MaxValueModifier:{x:0,y:0},CannotModifyBeyond:{Active:!1,FloatValue:0,MaxValue:0},ApplyEachTick:!1,InstantModifier:!1,IgnoreNovelty:!1,IsInverse:!1}],EffectsOnActions:[],NotifyPlayer:0,RepeatTextNotification:0,AlertLevel:0,AlertSounds:[],RepeatAlertSounds:0,GameOver:!1,ActionsMaxTicks:0,PreventingActionMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},CombatEffects:[],ConfidenceModifier:0},{GameName:{ParentObjectID:"00c2afb9343f5c34988dcdb12a7792a8",LocalizationKey:"BugPopulation_Statuses[1].GameName",DefaultText:"High Bug Population",Text:"高蚊虫数量"},Description:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},StatusLog:{LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},Category:null,TicksToRegister:0},Icon:{m_FileID:0,m_PathID:867,FileName:"Bugs_Old@867"},ValueRange:{m_X:2,m_Y:3},UsePercentageForRange:!1,EffectsOnStats:[{Stat:{key:"BugDamage",text:"蚊虫叮咬",icon:"Bugs_Old@867",type:"stat"},ValueModifier:{x:2,y:2},RateModifier:{x:0,y:0},MinValueModifier:{x:0,y:0},MaxValueModifier:{x:0,y:0},CannotModifyBeyond:{Active:!1,FloatValue:0,MaxValue:0},ApplyEachTick:!1,InstantModifier:!1,IgnoreNovelty:!1,IsInverse:!1}],EffectsOnActions:[],NotifyPlayer:0,RepeatTextNotification:0,AlertLevel:0,AlertSounds:[],RepeatAlertSounds:0,GameOver:!1,ActionsMaxTicks:0,PreventingActionMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},CombatEffects:[],ConfidenceModifier:0},{GameName:{ParentObjectID:"00c2afb9343f5c34988dcdb12a7792a8",LocalizationKey:"BugPopulation_Statuses[2].GameName",DefaultText:"Very High Bug Population",Text:"很高的蚊虫数量"},Description:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},StatusLog:{LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},Category:null,TicksToRegister:0},Icon:{m_FileID:0,m_PathID:867,FileName:"Bugs_Old@867"},ValueRange:{m_X:4,m_Y:4},UsePercentageForRange:!1,EffectsOnStats:[{Stat:{key:"BugDamage",text:"蚊虫叮咬",icon:"Bugs_Old@867",type:"stat"},ValueModifier:{x:4,y:4},RateModifier:{x:0,y:0},MinValueModifier:{x:0,y:0},MaxValueModifier:{x:0,y:0},CannotModifyBeyond:{Active:!1,FloatValue:0,MaxValue:0},ApplyEachTick:!1,InstantModifier:!1,IgnoreNovelty:!1,IsInverse:!1}],EffectsOnActions:[],NotifyPlayer:0,RepeatTextNotification:0,AlertLevel:0,AlertSounds:[],RepeatAlertSounds:0,GameOver:!1,ActionsMaxTicks:0,PreventingActionMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},CombatEffects:[],ConfidenceModifier:0},{GameName:{ParentObjectID:"00c2afb9343f5c34988dcdb12a7792a8",LocalizationKey:"BugPopulation_Statuses[3].GameName",DefaultText:"Extreme Bug Population",Text:"极高的蚊虫数量"},Description:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},StatusLog:{LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},Category:null,TicksToRegister:0},Icon:{m_FileID:0,m_PathID:867,FileName:"Bugs_Old@867"},ValueRange:{m_X:5,m_Y:5},UsePercentageForRange:!1,EffectsOnStats:[{Stat:{key:"BugDamage",text:"蚊虫叮咬",icon:"Bugs_Old@867",type:"stat"},ValueModifier:{x:5,y:5},RateModifier:{x:0,y:0},MinValueModifier:{x:0,y:0},MaxValueModifier:{x:0,y:0},CannotModifyBeyond:{Active:!1,FloatValue:0,MaxValue:0},ApplyEachTick:!1,InstantModifier:!1,IgnoreNovelty:!1,IsInverse:!1}],EffectsOnActions:[],NotifyPlayer:0,RepeatTextNotification:0,AlertLevel:0,AlertSounds:[],RepeatAlertSounds:0,GameOver:!1,ActionsMaxTicks:0,PreventingActionMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},CombatEffects:[],ConfidenceModifier:0}],C=!1,L=0,V=0,j=0,z=[],K=!1,_={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},F={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},R=!1,k=[{link:{key:"MudProtection",text:"泥巴防护",icon:"Filth@633",type:"stat"},name:"阶段效果",value:{x:-4,y:-4}},{link:{key:"RainValue",text:"降水值",icon:"Rain@701",type:"stat"},name:"阶段效果",value:{x:-2,y:-2}},{link:{key:"RainValue",text:"降水值",icon:"Rain@701",type:"stat"},name:"阶段效果",value:{x:-3,y:-3}},{link:{key:"RainValue",text:"降水值",icon:"Rain@701",type:"stat"},name:"阶段效果",value:{x:-4,y:-4}},{link:{key:"RainValue",text:"降水值",icon:"Rain@701",type:"stat"},name:"阶段效果",value:{x:-5,y:-5}},{link:{key:"RainValue",text:"降水值",icon:"Rain@701",type:"stat"},name:"阶段效果",value:{x:-6,y:-6}},{link:{key:"SunScreenApplied",text:"防晒霜",icon:"",type:"stat"},name:"阶段效果",value:{x:-1,y:-1}}],B=JSON.parse('[{"link":{"key":"Puddle","text":"干涸的小水塘","icon":"","SpoilageTime":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpoilageTime"},"OverrideIcon":null,"MaxValue":0},"UsageDurability":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"UsageDurability"},"OverrideIcon":null,"MaxValue":0},"FuelCapacity":{"CardStatName":{"ParentObjectID":"fd31819b0f27db44d840aa4c0bf6bb8e","LocalizationKey":"Puddle_FuelCapacity.CardStatName","DefaultText":"Mosquito Protection","Text":"防蚊"},"OverrideIcon":{"m_FileID":0,"m_PathID":481,"FileName":"BugsNot_Old@481"},"MaxValue":672},"Progress":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"Progress"},"OverrideIcon":null,"MaxValue":1},"SpecialDurability1":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability1"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability2":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability2"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability3":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability3"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability4":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability4"},"OverrideIcon":null,"MaxValue":0}},"name":"被动效果：Mosquitoes","value":{"x":1,"y":1}},{"link":{"key":"Puddle","text":"干涸的小水塘","icon":"","SpoilageTime":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpoilageTime"},"OverrideIcon":null,"MaxValue":0},"UsageDurability":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"UsageDurability"},"OverrideIcon":null,"MaxValue":0},"FuelCapacity":{"CardStatName":{"ParentObjectID":"fd31819b0f27db44d840aa4c0bf6bb8e","LocalizationKey":"Puddle_FuelCapacity.CardStatName","DefaultText":"Mosquito Protection","Text":"防蚊"},"OverrideIcon":{"m_FileID":0,"m_PathID":481,"FileName":"BugsNot_Old@481"},"MaxValue":672},"Progress":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"Progress"},"OverrideIcon":null,"MaxValue":1},"SpecialDurability1":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability1"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability2":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability2"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability3":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability3"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability4":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability4"},"OverrideIcon":null,"MaxValue":0}},"name":"被动效果：Mosquito Protection","value":{"x":-1,"y":-1}},{"link":{"key":"RainCatcher","text":"Rain Catcher","icon":"","SpoilageTime":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpoilageTime"},"OverrideIcon":null,"MaxValue":0},"UsageDurability":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"UsageDurability"},"OverrideIcon":null,"MaxValue":0},"FuelCapacity":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"FuelCapacity"},"OverrideIcon":null,"MaxValue":0},"Progress":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"Progress"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability1":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability1"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability2":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability2"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability3":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability3"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability4":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability4"},"OverrideIcon":null,"MaxValue":0}},"name":"被动效果：Mosquitoes","value":{"x":1,"y":1}},{"link":{"key":"WaterReservoir","text":"Reservoir","icon":"","SpoilageTime":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpoilageTime"},"OverrideIcon":null,"MaxValue":0},"UsageDurability":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"UsageDurability"},"OverrideIcon":null,"MaxValue":0},"FuelCapacity":{"CardStatName":{"ParentObjectID":"536f722edbb5e9e4b959b1f3ad25f648","LocalizationKey":"WaterReservoir_FuelCapacity.CardStatName","DefaultText":"Mosquito Protection","Text":"Mosquito Protection"},"OverrideIcon":{"m_FileID":0,"m_PathID":481,"FileName":"BugsNot_Old@481"},"MaxValue":672},"Progress":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"Progress"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability1":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability1"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability2":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability2"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability3":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability3"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability4":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability4"},"OverrideIcon":null,"MaxValue":0}},"name":"被动效果：Mosquitoes","value":{"x":1,"y":1}},{"link":{"key":"WaterReservoir","text":"Reservoir","icon":"","SpoilageTime":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpoilageTime"},"OverrideIcon":null,"MaxValue":0},"UsageDurability":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"UsageDurability"},"OverrideIcon":null,"MaxValue":0},"FuelCapacity":{"CardStatName":{"ParentObjectID":"536f722edbb5e9e4b959b1f3ad25f648","LocalizationKey":"WaterReservoir_FuelCapacity.CardStatName","DefaultText":"Mosquito Protection","Text":"Mosquito Protection"},"OverrideIcon":{"m_FileID":0,"m_PathID":481,"FileName":"BugsNot_Old@481"},"MaxValue":672},"Progress":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"Progress"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability1":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability1"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability2":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability2"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability3":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability3"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability4":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability4"},"OverrideIcon":null,"MaxValue":0}},"name":"被动效果：Mosquito Protection","value":{"x":-1,"y":-1}},{"link":{"key":"WaterReservoirFull","text":"Reservoir","icon":"","SpoilageTime":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpoilageTime"},"OverrideIcon":null,"MaxValue":0},"UsageDurability":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"UsageDurability"},"OverrideIcon":null,"MaxValue":0},"FuelCapacity":{"CardStatName":{"ParentObjectID":"77dec6b416715ba4f8df2d8a572c6194","LocalizationKey":"WaterReservoirFull_FuelCapacity.CardStatName","DefaultText":"Mosquito Protection","Text":"Mosquito Protection"},"OverrideIcon":{"m_FileID":0,"m_PathID":481,"FileName":"BugsNot_Old@481"},"MaxValue":672},"Progress":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"Progress"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability1":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability1"},"OverrideIcon":null,"MaxValue":2},"SpecialDurability2":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability2"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability3":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability3"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability4":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability4"},"OverrideIcon":null,"MaxValue":0}},"name":"被动效果：Mosquitoes","value":{"x":1,"y":1}},{"link":{"key":"WaterReservoirFull","text":"Reservoir","icon":"","SpoilageTime":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpoilageTime"},"OverrideIcon":null,"MaxValue":0},"UsageDurability":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"UsageDurability"},"OverrideIcon":null,"MaxValue":0},"FuelCapacity":{"CardStatName":{"ParentObjectID":"77dec6b416715ba4f8df2d8a572c6194","LocalizationKey":"WaterReservoirFull_FuelCapacity.CardStatName","DefaultText":"Mosquito Protection","Text":"Mosquito Protection"},"OverrideIcon":{"m_FileID":0,"m_PathID":481,"FileName":"BugsNot_Old@481"},"MaxValue":672},"Progress":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"Progress"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability1":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability1"},"OverrideIcon":null,"MaxValue":2},"SpecialDurability2":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability2"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability3":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability3"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability4":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability4"},"OverrideIcon":null,"MaxValue":0}},"name":"被动效果：Mosquito Protection","value":{"x":-1,"y":-1}},{"link":{"key":"WaterReservoirIrrigating","text":"Reservoir (irrigating)","icon":"","SpoilageTime":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpoilageTime"},"OverrideIcon":null,"MaxValue":0},"UsageDurability":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"UsageDurability"},"OverrideIcon":null,"MaxValue":0},"FuelCapacity":{"CardStatName":{"ParentObjectID":"2f192e17e83f35a45a55e7030efca7c5","LocalizationKey":"WaterReservoirIrrigating_FuelCapacity.CardStatName","DefaultText":"Mosquito Protection","Text":"Mosquito Protection"},"OverrideIcon":{"m_FileID":0,"m_PathID":481,"FileName":"BugsNot_Old@481"},"MaxValue":672},"Progress":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"Progress"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability1":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability1"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability2":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability2"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability3":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability3"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability4":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability4"},"OverrideIcon":null,"MaxValue":0}},"name":"被动效果：Mosquitoes","value":{"x":1,"y":1}},{"link":{"key":"WaterReservoirIrrigating","text":"Reservoir (irrigating)","icon":"","SpoilageTime":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpoilageTime"},"OverrideIcon":null,"MaxValue":0},"UsageDurability":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"UsageDurability"},"OverrideIcon":null,"MaxValue":0},"FuelCapacity":{"CardStatName":{"ParentObjectID":"2f192e17e83f35a45a55e7030efca7c5","LocalizationKey":"WaterReservoirIrrigating_FuelCapacity.CardStatName","DefaultText":"Mosquito Protection","Text":"Mosquito Protection"},"OverrideIcon":{"m_FileID":0,"m_PathID":481,"FileName":"BugsNot_Old@481"},"MaxValue":672},"Progress":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"Progress"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability1":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability1"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability2":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability2"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability3":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability3"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability4":{"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"SpecialDurability4"},"OverrideIcon":null,"MaxValue":0}},"name":"被动效果：Mosquito Protection","value":{"x":-1,"y":-1}}]'),A=[],h=null,q=1,U={Icon:null,NegativeIcon:null,StepValue:1,Inverted:!1},E=null,G=null,W={m_Name:e,m_Script:a,___key:t,___fn:i,UniqueID:l,GameName:o,Description:r,BaseValue:n,MinMaxValue:c,BaseRatePerTick:u,MinMaxRate:x,TimeOfDayMods:s,CompositeStats:D,StatPriority:y,RequiredPerks:d,Visibility:f,VisibleInDetailedList:b,CannotBeInspected:T,InvertedDirection:I,VisibleValueRange:S,TrendIndicatorRateRange:m,StatusesHaveNoBar:O,BarColor:P,BarHighlightColor:p,DefaultStatusName:g,DefaultStatusDescription:M,DefaultStatusIcon:v,Statuses:N,UsesNovelty:C,NoveltyCooldownDuration:L,StalenessMultiplier:V,MaxStalenessStack:j,StatActions:z,ShowActionEffects:K,NotEnoughText:_,TooMuchText:F,StatusDebugMode:R,_modifierValueList:k,_modifierRateList:B,_requireList:A,m_GameObject:h,m_Enabled:q,FeedbackInfo:U,OverrideFeedbackPrefab:E,NotEnoughIcon:G};export{P as BarColor,p as BarHighlightColor,u as BaseRatePerTick,n as BaseValue,T as CannotBeInspected,D as CompositeStats,M as DefaultStatusDescription,v as DefaultStatusIcon,g as DefaultStatusName,r as Description,U as FeedbackInfo,o as GameName,I as InvertedDirection,j as MaxStalenessStack,x as MinMaxRate,c as MinMaxValue,G as NotEnoughIcon,_ as NotEnoughText,L as NoveltyCooldownDuration,E as OverrideFeedbackPrefab,d as RequiredPerks,K as ShowActionEffects,V as StalenessMultiplier,z as StatActions,y as StatPriority,R as StatusDebugMode,N as Statuses,O as StatusesHaveNoBar,s as TimeOfDayMods,F as TooMuchText,m as TrendIndicatorRateRange,l as UniqueID,C as UsesNovelty,f as Visibility,b as VisibleInDetailedList,S as VisibleValueRange,i as ___fn,t as ___key,B as _modifierRateList,k as _modifierValueList,A as _requireList,W as default,q as m_Enabled,h as m_GameObject,e as m_Name,a as m_Script};
