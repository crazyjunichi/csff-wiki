const e="BloodLoss",t={m_FileID:1,m_PathID:756,FileName:"Tracks@756"},a="0_3913",o="BloodLoss@3913.json",i="7f4598bd0e82e7b499da3848e452c39f",n={ParentObjectID:"7f4598bd0e82e7b499da3848e452c39f",LocalizationKey:"BloodLoss_GameName",DefaultText:"Blood Loss",Text:"失血"},l={ParentObjectID:"7f4598bd0e82e7b499da3848e452c39f",LocalizationKey:"BloodLoss_Description",DefaultText:"Caused by bleeding wounds, use Tourniquets and Dressings to lower it.",Text:"由流血的伤口导致，使用止血带和敷料来减少出血。"},s=0,r={x:0,y:20},c=0,f={x:0,y:0},y=[],d=[],u=0,x=[],M=0,I=!1,L=!1,T=!1,m={x:0,y:5},D={x:0,y:0},k=!1,p={r:1,g:.02591994,b:0,a:1},V={r:.5254902,g:0,b:0,a:1},g={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},v={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},S={m_FileID:0,m_PathID:293,FileName:"Blood@293"},_=JSON.parse('[{"GameName":{"ParentObjectID":"7f4598bd0e82e7b499da3848e452c39f","LocalizationKey":"BloodLoss_Statuses[0].GameName","DefaultText":"Not Bleeding","Text":"没有流血"},"Description":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"StatusLog":{"LogText":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"Category":null,"TicksToRegister":0},"Icon":null,"ValueRange":{"m_X":0,"m_Y":0},"UsePercentageForRange":false,"EffectsOnStats":[],"EffectsOnActions":[],"NotifyPlayer":2,"RepeatTextNotification":0,"AlertLevel":3,"AlertSounds":[],"RepeatAlertSounds":0,"GameOver":false,"ActionsMaxTicks":0,"PreventingActionMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"CombatEffects":[],"ConfidenceModifier":0},{"GameName":{"ParentObjectID":"7f4598bd0e82e7b499da3848e452c39f","LocalizationKey":"BloodLoss_Statuses[1].GameName","DefaultText":"Bleeding","Text":"正在流血"},"Description":{"ParentObjectID":"7f4598bd0e82e7b499da3848e452c39f","LocalizationKey":"BloodLoss_Statuses[1].Description","DefaultText":"You are losing blood. ","Text":"你正在失血。"},"StatusLog":{"LogText":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"Category":null,"TicksToRegister":0},"Icon":{"m_FileID":0,"m_PathID":293,"FileName":"Blood@293"},"ValueRange":{"m_X":1,"m_Y":2},"UsePercentageForRange":false,"EffectsOnStats":[{"Stat":{"key":"Morale","text":"情绪","icon":"Morale2@511","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-1,"y":-1},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Stress","text":"压力","icon":"Stress@705","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":2,"y":2},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Filth","text":"污垢","icon":"Filth@624","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":1,"y":1},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"BloodPressure","text":"血压","icon":"Blood@293","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-4,"y":-4},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false}],"EffectsOnActions":[],"NotifyPlayer":2,"RepeatTextNotification":0,"AlertLevel":3,"AlertSounds":[],"RepeatAlertSounds":0,"GameOver":false,"ActionsMaxTicks":0,"PreventingActionMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"CombatEffects":[],"ConfidenceModifier":0},{"GameName":{"ParentObjectID":"7f4598bd0e82e7b499da3848e452c39f","LocalizationKey":"BloodLoss_Statuses[2].GameName","DefaultText":"Bleeding","Text":"正在流血"},"Description":{"ParentObjectID":"7f4598bd0e82e7b499da3848e452c39f","LocalizationKey":"BloodLoss_Statuses[2].Description","DefaultText":"You are losing blood. ","Text":"你正在失血。"},"StatusLog":{"LogText":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"Category":null,"TicksToRegister":0},"Icon":{"m_FileID":0,"m_PathID":293,"FileName":"Blood@293"},"ValueRange":{"m_X":3,"m_Y":4},"UsePercentageForRange":false,"EffectsOnStats":[{"Stat":{"key":"Morale","text":"情绪","icon":"Morale2@511","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-1.5,"y":-1.5},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Stress","text":"压力","icon":"Stress@705","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":3,"y":3},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Filth","text":"污垢","icon":"Filth@624","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":2,"y":2},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"BloodPressure","text":"血压","icon":"Blood@293","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-6,"y":-6},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false}],"EffectsOnActions":[],"NotifyPlayer":2,"RepeatTextNotification":0,"AlertLevel":4,"AlertSounds":[],"RepeatAlertSounds":0,"GameOver":false,"ActionsMaxTicks":0,"PreventingActionMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"CombatEffects":[],"ConfidenceModifier":0},{"GameName":{"ParentObjectID":"7f4598bd0e82e7b499da3848e452c39f","LocalizationKey":"BloodLoss_Statuses[3].GameName","DefaultText":"Bleeding Profusely","Text":"大量出血"},"Description":{"ParentObjectID":"7f4598bd0e82e7b499da3848e452c39f","LocalizationKey":"BloodLoss_Statuses[3].Description","DefaultText":"You are losing lots of blood. ","Text":"你正在大量失血。"},"StatusLog":{"LogText":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"Category":null,"TicksToRegister":0},"Icon":{"m_FileID":0,"m_PathID":293,"FileName":"Blood@293"},"ValueRange":{"m_X":5,"m_Y":6},"UsePercentageForRange":false,"EffectsOnStats":[{"Stat":{"key":"Morale","text":"情绪","icon":"Morale2@511","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-2,"y":-2},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Stress","text":"压力","icon":"Stress@705","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":4,"y":4},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Filth","text":"污垢","icon":"Filth@624","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":2,"y":2},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"BloodPressure","text":"血压","icon":"Blood@293","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-8,"y":-8},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false}],"EffectsOnActions":[],"NotifyPlayer":2,"RepeatTextNotification":0,"AlertLevel":4,"AlertSounds":[],"RepeatAlertSounds":0,"GameOver":false,"ActionsMaxTicks":0,"PreventingActionMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"CombatEffects":[],"ConfidenceModifier":0},{"GameName":{"ParentObjectID":"7f4598bd0e82e7b499da3848e452c39f","LocalizationKey":"BloodLoss_Statuses[4].GameName","DefaultText":"Bleeding Profusely","Text":"大量出血"},"Description":{"ParentObjectID":"7f4598bd0e82e7b499da3848e452c39f","LocalizationKey":"BloodLoss_Statuses[4].Description","DefaultText":"You are losing lots of blood. ","Text":"你正在大量失血。"},"StatusLog":{"LogText":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"Category":null,"TicksToRegister":0},"Icon":{"m_FileID":0,"m_PathID":293,"FileName":"Blood@293"},"ValueRange":{"m_X":7,"m_Y":20},"UsePercentageForRange":false,"EffectsOnStats":[{"Stat":{"key":"Morale","text":"情绪","icon":"Morale2@511","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-2,"y":-2},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Stress","text":"压力","icon":"Stress@705","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":4,"y":4},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Filth","text":"污垢","icon":"Filth@624","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":2,"y":2},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"BloodPressure","text":"血压","icon":"Blood@293","type":"stat"},"ValueModifier":{"x":0,"y":0},"RateModifier":{"x":-12,"y":-12},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false}],"EffectsOnActions":[],"NotifyPlayer":2,"RepeatTextNotification":0,"AlertLevel":4,"AlertSounds":[],"RepeatAlertSounds":0,"GameOver":false,"ActionsMaxTicks":0,"PreventingActionMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"CombatEffects":[],"ConfidenceModifier":0}]'),b=!1,B=0,A=0,P=0,R=[],N=!1,h={ParentObjectID:"7f4598bd0e82e7b499da3848e452c39f",LocalizationKey:"BloodLoss_NotEnoughText",DefaultText:"It's to dark for this action...",Text:"太黑了我做不到……"},O={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},F=!1,C=[],E=[{link:{key:"W_ArmLacerationL",text:"左臂撕裂伤",icon:"LacerationDeep@848"},name:"被动效果：Tourniquet",value:{x:-3,y:-3}},{link:{key:"W_ArmLacerationL",text:"左臂撕裂伤",icon:"LacerationDeep@848"},name:"被动效果：Bloodloss",value:{x:3,y:3}},{link:{key:"W_ArmLacerationLStitched",text:"已缝合的左臂撕裂伤",icon:"LacerationDeep_Sutured@601"},name:"被动效果：Tourniquet",value:{x:-3,y:-3}},{link:{key:"W_ArmLacerationLStitched",text:"已缝合的左臂撕裂伤",icon:"LacerationDeep_Sutured@601"},name:"被动效果：Bloodloss",value:{x:3,y:3}},{link:{key:"W_ArmLacerationR",text:"右臂撕裂伤",icon:"LacerationDeep@848"},name:"被动效果：Tourniquet",value:{x:-3,y:-3}},{link:{key:"W_ArmLacerationR",text:"右臂撕裂伤",icon:"LacerationDeep@848"},name:"被动效果：Bloodloss",value:{x:3,y:3}},{link:{key:"W_ArmLacerationRStitched",text:"已缝合的右臂撕裂伤",icon:"LacerationDeep_Sutured@601"},name:"被动效果：Tourniquet",value:{x:-3,y:-3}},{link:{key:"W_ArmLacerationRStitched",text:"已缝合的右臂撕裂伤",icon:"LacerationDeep_Sutured@601"},name:"被动效果：Bloodloss",value:{x:3,y:3}},{link:{key:"W_BiteWound",text:"咬伤",icon:"Bite_Small@691"},name:"被动效果：Bloodloss",value:{x:.5,y:.5}},{link:{key:"W_ClawMarks",text:"抓伤",icon:"Scratches@680"},name:"被动效果：Bloodloss",value:{x:.5,y:.5}},{link:{key:"W_LegLacerationL",text:"左腿撕裂伤",icon:"LacerationDeep@848"},name:"被动效果：Tourniquet",value:{x:-3,y:-3}},{link:{key:"W_LegLacerationL",text:"左腿撕裂伤",icon:"LacerationDeep@848"},name:"被动效果：Bloodloss",value:{x:3,y:3}},{link:{key:"W_LegLacerationLStitched",text:"已缝合的左腿撕裂伤",icon:"LacerationDeep_Sutured@601"},name:"被动效果：Tourniquet",value:{x:-3,y:-3}},{link:{key:"W_LegLacerationLStitched",text:"已缝合的左腿撕裂伤",icon:"LacerationDeep_Sutured@601"},name:"被动效果：Bloodloss",value:{x:3,y:3}},{link:{key:"W_LegLacerationR",text:"右腿撕裂伤",icon:"LacerationDeep@848"},name:"被动效果：Tourniquet",value:{x:-3,y:-3}},{link:{key:"W_LegLacerationR",text:"右腿撕裂伤",icon:"LacerationDeep@848"},name:"被动效果：Bloodloss",value:{x:3,y:3}},{link:{key:"W_LegLacerationRStitched",text:"已缝合的右腿撕裂伤",icon:"LacerationDeep_Sutured@601"},name:"被动效果：Tourniquet",value:{x:-3,y:-3}},{link:{key:"W_LegLacerationRStitched",text:"已缝合的右腿撕裂伤",icon:"LacerationDeep_Sutured@601"},name:"被动效果：Bloodloss",value:{x:3,y:3}},{link:{key:"W_MinorLaceration",text:"轻微撕裂伤",icon:"LacerationMinor@700"},name:"被动效果：Bloodloss",value:{x:.5,y:.5}},{link:{key:"W_MinorLacerationStitched",text:"已缝合的轻微撕裂伤",icon:"LacerationMinor_Sutured@409"},name:"被动效果：Bloodloss",value:{x:.5,y:.5}},{link:{key:"W_Puncture",text:"穿刺伤",icon:"Puncture@267"},name:"被动效果：Bloodloss",value:{x:.5,y:.5}},{link:{key:"W_WolfBite",text:"狼咬伤",icon:"Bite_Large@345"},name:"被动效果：Bloodloss",value:{x:.5,y:.5}}],j=[],z=null,K=1,W={Icon:null,NegativeIcon:null,StepValue:1,Inverted:!1},G=null,q=null,Y={m_Name:e,m_Script:t,___key:a,___fn:o,UniqueID:i,GameName:n,Description:l,BaseValue:s,MinMaxValue:r,BaseRatePerTick:c,MinMaxRate:f,TimeOfDayMods:y,CompositeStats:d,StatPriority:u,RequiredPerks:x,Visibility:M,VisibleInDetailedList:I,CannotBeInspected:L,InvertedDirection:T,VisibleValueRange:m,TrendIndicatorRateRange:D,StatusesHaveNoBar:k,BarColor:p,BarHighlightColor:V,DefaultStatusName:g,DefaultStatusDescription:v,DefaultStatusIcon:S,Statuses:_,UsesNovelty:b,NoveltyCooldownDuration:B,StalenessMultiplier:A,MaxStalenessStack:P,StatActions:R,ShowActionEffects:N,NotEnoughText:h,TooMuchText:O,StatusDebugMode:F,_modifierValueList:C,_modifierRateList:E,_requireList:j,m_GameObject:z,m_Enabled:K,FeedbackInfo:W,OverrideFeedbackPrefab:G,NotEnoughIcon:q};export{p as BarColor,V as BarHighlightColor,c as BaseRatePerTick,s as BaseValue,L as CannotBeInspected,d as CompositeStats,v as DefaultStatusDescription,S as DefaultStatusIcon,g as DefaultStatusName,l as Description,W as FeedbackInfo,n as GameName,T as InvertedDirection,P as MaxStalenessStack,f as MinMaxRate,r as MinMaxValue,q as NotEnoughIcon,h as NotEnoughText,B as NoveltyCooldownDuration,G as OverrideFeedbackPrefab,x as RequiredPerks,N as ShowActionEffects,A as StalenessMultiplier,R as StatActions,u as StatPriority,F as StatusDebugMode,_ as Statuses,k as StatusesHaveNoBar,y as TimeOfDayMods,O as TooMuchText,D as TrendIndicatorRateRange,i as UniqueID,b as UsesNovelty,M as Visibility,I as VisibleInDetailedList,m as VisibleValueRange,o as ___fn,a as ___key,E as _modifierRateList,C as _modifierValueList,j as _requireList,Y as default,K as m_Enabled,z as m_GameObject,e as m_Name,t as m_Script};
