const e="Headache",t={m_FileID:1,m_PathID:756,FileName:"Tracks@756"},a="0_3965",n="Headache@3965.json",i="1c5804d14cc0b224da5ac7229ca90a00",o={ParentObjectID:"1c5804d14cc0b224da5ac7229ca90a00",LocalizationKey:"Headache_GameName",DefaultText:"Headache",Text:"头疼"},c={ParentObjectID:"1c5804d14cc0b224da5ac7229ca90a00",LocalizationKey:"Headache_Description",DefaultText:"Can be caused by dehydration or poisoning. Produces pain.",Text:"脱水或中毒导致。产生疼痛。"},s=0,l={x:0,y:48},r=-1,f={x:0,y:0},y=[],d=[],u=0,x=[],m=0,D=!1,T=!1,I=!1,M={x:0,y:0},g={x:0,y:0},b=!1,P={r:.7411765,g:.10196079,b:.039215688,a:1},_={r:1,g:.72851,b:0,a:1},p={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},h={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},S={m_FileID:0,m_PathID:330,FileName:"Headache@330"},k=[{GameName:{ParentObjectID:"1c5804d14cc0b224da5ac7229ca90a00",LocalizationKey:"Headache_Statuses[0].GameName",DefaultText:"Mild Headache",Text:"轻微头疼"},Description:{ParentObjectID:"1c5804d14cc0b224da5ac7229ca90a00",LocalizationKey:"Headache_Statuses[0].Description",DefaultText:"I have a bit of a headache",Text:"我有点头疼"},StatusLog:{LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},Category:null,TicksToRegister:0},Icon:{m_FileID:0,m_PathID:330,FileName:"Headache@330"},ValueRange:{m_X:12,m_Y:24},UsePercentageForRange:!1,EffectsOnStats:[{Stat:{key:"Pain",text:"疼痛",icon:"Pain@461",type:"stat"},ValueModifier:{x:100,y:100},RateModifier:{x:0,y:0},MinValueModifier:{x:0,y:0},MaxValueModifier:{x:0,y:0},CannotModifyBeyond:{Active:!1,FloatValue:0,MaxValue:0},ApplyEachTick:!1,InstantModifier:!1,IgnoreNovelty:!1,IsInverse:!1}],EffectsOnActions:[],NotifyPlayer:0,RepeatTextNotification:0,AlertLevel:1,AlertSounds:[],RepeatAlertSounds:0,GameOver:!1,ActionsMaxTicks:0,PreventingActionMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},CombatEffects:[],ConfidenceModifier:0},{GameName:{ParentObjectID:"1c5804d14cc0b224da5ac7229ca90a00",LocalizationKey:"Headache_Statuses[1].GameName",DefaultText:"Headache",Text:"头疼"},Description:{ParentObjectID:"1c5804d14cc0b224da5ac7229ca90a00",LocalizationKey:"Headache_Statuses[1].Description",DefaultText:"My head hurts.",Text:"我头疼。"},StatusLog:{LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},Category:null,TicksToRegister:0},Icon:{m_FileID:0,m_PathID:330,FileName:"Headache@330"},ValueRange:{m_X:25,m_Y:37},UsePercentageForRange:!1,EffectsOnStats:[{Stat:{key:"Pain",text:"疼痛",icon:"Pain@461",type:"stat"},ValueModifier:{x:200,y:200},RateModifier:{x:0,y:0},MinValueModifier:{x:0,y:0},MaxValueModifier:{x:0,y:0},CannotModifyBeyond:{Active:!1,FloatValue:0,MaxValue:0},ApplyEachTick:!1,InstantModifier:!1,IgnoreNovelty:!1,IsInverse:!1}],EffectsOnActions:[],NotifyPlayer:2,RepeatTextNotification:0,AlertLevel:2,AlertSounds:[],RepeatAlertSounds:0,GameOver:!1,ActionsMaxTicks:0,PreventingActionMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},CombatEffects:[],ConfidenceModifier:0},{GameName:{ParentObjectID:"1c5804d14cc0b224da5ac7229ca90a00",LocalizationKey:"Headache_Statuses[2].GameName",DefaultText:"Severe Headache",Text:"重度头疼"},Description:{ParentObjectID:"1c5804d14cc0b224da5ac7229ca90a00",LocalizationKey:"Headache_Statuses[2].Description",DefaultText:"My head is killing me!",Text:"我的头要疼死了！"},StatusLog:{LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},Category:null,TicksToRegister:0},Icon:{m_FileID:0,m_PathID:330,FileName:"Headache@330"},ValueRange:{m_X:38,m_Y:48},UsePercentageForRange:!1,EffectsOnStats:[{Stat:{key:"Pain",text:"疼痛",icon:"Pain@461",type:"stat"},ValueModifier:{x:500,y:500},RateModifier:{x:0,y:0},MinValueModifier:{x:0,y:0},MaxValueModifier:{x:0,y:0},CannotModifyBeyond:{Active:!1,FloatValue:0,MaxValue:0},ApplyEachTick:!1,InstantModifier:!1,IgnoreNovelty:!1,IsInverse:!1}],EffectsOnActions:[],NotifyPlayer:2,RepeatTextNotification:0,AlertLevel:4,AlertSounds:[],RepeatAlertSounds:1,GameOver:!1,ActionsMaxTicks:0,PreventingActionMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},CombatEffects:[],ConfidenceModifier:0}],v=!1,L=0,N=0,O=0,A=[],V=!0,H={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},R={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},F=!1,j=[{link:{key:"Quinine",text:"奎宁",type:"stat"},name:"阶段效果",value:{x:75,y:300}},{link:{key:"Quinine",text:"奎宁",type:"stat"},name:"阶段效果",value:{x:600,y:600}}],z=[{link:{key:"BeeStings",text:"Bee Stings",type:"stat"},name:"阶段效果",value:{x:1.5,y:1.5}},{link:{key:"BeeStings",text:"Bee Stings",type:"stat"},name:"阶段效果",value:{x:2,y:2}},{link:{key:"FrostleafEffect",text:"霜叶效果",type:"stat"},name:"阶段效果",value:{x:-.25,y:-.25}},{link:{key:"FrostleafEffect",text:"霜叶效果",type:"stat"},name:"阶段效果",value:{x:-.5,y:-.5}},{link:{key:"Hydration",text:"水分",type:"stat"},name:"阶段效果",value:{x:.75,y:.75}},{link:{key:"Hydration",text:"水分",type:"stat"},name:"阶段效果",value:{x:1.5,y:1.5}},{link:{key:"Hydration",text:"水分",type:"stat"},name:"阶段效果",value:{x:3,y:3}},{link:{key:"Hydration",text:"水分",type:"stat"},name:"阶段效果",value:{x:6,y:6}}],C=[],E=null,K=1,B={Icon:{m_FileID:0,m_PathID:882,FileName:"Headache_Old@882"},NegativeIcon:null,StepValue:10,Inverted:!1},G=null,U=null,q={m_Name:e,m_Script:t,___key:a,___fn:n,UniqueID:i,GameName:o,Description:c,BaseValue:s,MinMaxValue:l,BaseRatePerTick:r,MinMaxRate:f,TimeOfDayMods:y,CompositeStats:d,StatPriority:u,RequiredPerks:x,Visibility:m,VisibleInDetailedList:D,CannotBeInspected:T,InvertedDirection:I,VisibleValueRange:M,TrendIndicatorRateRange:g,StatusesHaveNoBar:b,BarColor:P,BarHighlightColor:_,DefaultStatusName:p,DefaultStatusDescription:h,DefaultStatusIcon:S,Statuses:k,UsesNovelty:v,NoveltyCooldownDuration:L,StalenessMultiplier:N,MaxStalenessStack:O,StatActions:A,ShowActionEffects:V,NotEnoughText:H,TooMuchText:R,StatusDebugMode:F,_modifierValueList:j,_modifierRateList:z,_requireList:C,m_GameObject:E,m_Enabled:K,FeedbackInfo:B,OverrideFeedbackPrefab:G,NotEnoughIcon:U};export{P as BarColor,_ as BarHighlightColor,r as BaseRatePerTick,s as BaseValue,T as CannotBeInspected,d as CompositeStats,h as DefaultStatusDescription,S as DefaultStatusIcon,p as DefaultStatusName,c as Description,B as FeedbackInfo,o as GameName,I as InvertedDirection,O as MaxStalenessStack,f as MinMaxRate,l as MinMaxValue,U as NotEnoughIcon,H as NotEnoughText,L as NoveltyCooldownDuration,G as OverrideFeedbackPrefab,x as RequiredPerks,V as ShowActionEffects,N as StalenessMultiplier,A as StatActions,u as StatPriority,F as StatusDebugMode,k as Statuses,b as StatusesHaveNoBar,y as TimeOfDayMods,R as TooMuchText,g as TrendIndicatorRateRange,i as UniqueID,v as UsesNovelty,m as Visibility,D as VisibleInDetailedList,M as VisibleValueRange,n as ___fn,a as ___key,z as _modifierRateList,j as _modifierValueList,C as _requireList,q as default,K as m_Enabled,E as m_GameObject,e as m_Name,t as m_Script};
