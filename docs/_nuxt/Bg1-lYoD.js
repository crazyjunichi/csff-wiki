const e="Skill_Trapping",a={m_FileID:1,m_PathID:756,FileName:"Tracks@756"},n="0_3778",t="Skill_Trapping@3778.json",i="e096b2d9e7b707a4dab55dbe4e2216ba",r={ParentObjectID:"e096b2d9e7b707a4dab55dbe4e2216ba",LocalizationKey:"Skill_Trapping_GameName",DefaultText:"Trapping",Text:"陷阱"},o={ParentObjectID:"e096b2d9e7b707a4dab55dbe4e2216ba",LocalizationKey:"Skill_Trapping_Description",DefaultText:"Shows how good you are at trapping. Increases your success chances with traps and unlocks new blueprints as it gets higher.",Text:"显示你使用陷阱的熟练度。熟练度增加时提高捕获成功率，并且解锁新的蓝图。"},l=0,p={x:0,y:150},c=0,T={x:0,y:0},x=[],y=[],s=0,k=[],u=0,g=!1,m=!1,v=!1,d={x:0,y:0},S={x:0,y:0},P=!1,L={r:.31132078,g:.1042631,b:.10786408,a:0},D={r:0,g:0,b:0,a:0},b={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},_={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},f={m_FileID:0,m_PathID:713,FileName:"DeadfallTrap@713"},I=[],h=!0,N=12,B=.8,F=2,M=[],O=!1,j={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},V={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},R=!1,w=[{link:{key:"Bp_DeadfallTrap",text:"落石陷阱",icon:"DeadfallTrap@713"},name:"蓝图制作",value:{x:.5,y:.5}},{link:{key:"Bp_FishTrap",text:"Fish Trap",icon:""},name:"蓝图制作",value:{x:.5,y:.5}},{link:{key:"Bp_PitTrap",text:"陷坑",icon:"TrappingPitDisarmed@573"},name:"蓝图制作",value:{x:1,y:1}},{link:{key:"Bp_SnareTrap",text:"套索陷阱",icon:"SnareTrap@707"},name:"蓝图制作",value:{x:.5,y:.5}},{link:{key:"DeadfallTrapTriggered",text:"落石陷阱",icon:"DeadfallTrap_Triggered@472"},name:"动作：重置陷阱",value:{x:.5,y:.5}},{link:{key:"LogTrapTriggered",text:"原木陷阱",icon:"LogTrap_Triggered@872"},name:"动作：重置陷阱",value:{x:.5,y:.5}},{link:{key:"PitTrapTriggered",text:"陷坑",icon:"TrappingPitDisarmed@573"},name:"动作：重置陷阱",value:{x:.5,y:.5}},{link:{key:"SnareTrapTriggered",text:"套索陷阱",icon:"SnareTrap_Triggered@809"},name:"动作：重置陷阱",value:{x:.5,y:.5}}],z=[],C=[{link:{key:"DeadfallTrap",text:"落石陷阱",icon:"DeadfallTrap@713"},name:"转化：捕捉猎物",value:{x:0,y:150}},{link:{key:"FishTrapDeployed",text:"Fish Trap",icon:""},name:"转化：Catch Prey",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"LogTrap",text:"原木陷阱",icon:"LogTrap@843"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"PitTrap",text:"陷坑",icon:"TrappingPit@450"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"SnareTrap",text:"套索陷阱",icon:"SnareTrap@707"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"SnareTrap",text:"套索陷阱",icon:"SnareTrap@707"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"SnareTrap",text:"套索陷阱",icon:"SnareTrap@707"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"SnareTrap",text:"套索陷阱",icon:"SnareTrap@707"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"SnareTrap",text:"套索陷阱",icon:"SnareTrap@707"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"SnareTrap",text:"套索陷阱",icon:"SnareTrap@707"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"SnareTrap",text:"套索陷阱",icon:"SnareTrap@707"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"SnareTrap",text:"套索陷阱",icon:"SnareTrap@707"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"SnareTrap",text:"套索陷阱",icon:"SnareTrap@707"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}},{link:{key:"SnareTrap",text:"套索陷阱",icon:"SnareTrap@707"},name:"转化：捕捉草食或杂食动物",value:{x:0,y:150}}],K=null,E=1,q={Icon:null,NegativeIcon:null,StepValue:1,Inverted:!1},G=null,A=null,H={m_Name:e,m_Script:a,___key:n,___fn:t,UniqueID:i,GameName:r,Description:o,BaseValue:l,MinMaxValue:p,BaseRatePerTick:c,MinMaxRate:T,TimeOfDayMods:x,CompositeStats:y,StatPriority:s,RequiredPerks:k,Visibility:u,VisibleInDetailedList:g,CannotBeInspected:m,InvertedDirection:v,VisibleValueRange:d,TrendIndicatorRateRange:S,StatusesHaveNoBar:P,BarColor:L,BarHighlightColor:D,DefaultStatusName:b,DefaultStatusDescription:_,DefaultStatusIcon:f,Statuses:I,UsesNovelty:h,NoveltyCooldownDuration:N,StalenessMultiplier:B,MaxStalenessStack:F,StatActions:M,ShowActionEffects:O,NotEnoughText:j,TooMuchText:V,StatusDebugMode:R,_modifierValueList:w,_modifierRateList:z,_requireList:C,m_GameObject:K,m_Enabled:E,FeedbackInfo:q,OverrideFeedbackPrefab:G,NotEnoughIcon:A};export{L as BarColor,D as BarHighlightColor,c as BaseRatePerTick,l as BaseValue,m as CannotBeInspected,y as CompositeStats,_ as DefaultStatusDescription,f as DefaultStatusIcon,b as DefaultStatusName,o as Description,q as FeedbackInfo,r as GameName,v as InvertedDirection,F as MaxStalenessStack,T as MinMaxRate,p as MinMaxValue,A as NotEnoughIcon,j as NotEnoughText,N as NoveltyCooldownDuration,G as OverrideFeedbackPrefab,k as RequiredPerks,O as ShowActionEffects,B as StalenessMultiplier,M as StatActions,s as StatPriority,R as StatusDebugMode,I as Statuses,P as StatusesHaveNoBar,x as TimeOfDayMods,V as TooMuchText,S as TrendIndicatorRateRange,i as UniqueID,h as UsesNovelty,u as Visibility,g as VisibleInDetailedList,d as VisibleValueRange,t as ___fn,n as ___key,z as _modifierRateList,w as _modifierValueList,C as _requireList,H as default,E as m_Enabled,K as m_GameObject,e as m_Name,a as m_Script};
