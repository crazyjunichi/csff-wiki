const e="ClayJarUnfired",a={m_FileID:1,m_PathID:663,FileName:"God@663"},t="0_1978",i="ClayJarUnfired@1978.json",n="ClayJarUnfired",l="未烧制的小陶罐",o="card",s=0,r=[{key:"tag_FiresMedium",text:"“Transforms under Heat”",icon:"",type:"tag",SpoilageTime:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"时间"},OverrideIcon:null,MaxValue:0},UsageDurability:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"耐久"},OverrideIcon:null,MaxValue:0},FuelCapacity:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"容量"},OverrideIcon:null,MaxValue:0},Progress:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"进度"},OverrideIcon:null,MaxValue:0},SpecialDurability1:{Active:!0,CardStatName:{ParentObjectID:"aeb2da6ac8e8450468579149e17c86bc",LocalizationKey:"ClayJarUnfired_SpecialDurability1.CardStatName",DefaultText:"Fired",Text:"烹饪度"},OverrideIcon:{m_FileID:0,m_PathID:245,FileName:"Cooking@245"},MaxValue:12},SpecialDurability2:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊2"},OverrideIcon:null,MaxValue:0},SpecialDurability3:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊3"},OverrideIcon:null,MaxValue:0},SpecialDurability4:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊4"},OverrideIcon:null,MaxValue:0}},{key:"tag_Clay",text:"“粘土”",icon:"",type:"tag",SpoilageTime:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"时间"},OverrideIcon:null,MaxValue:0},UsageDurability:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"耐久"},OverrideIcon:null,MaxValue:0},FuelCapacity:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"容量"},OverrideIcon:null,MaxValue:0},Progress:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"进度"},OverrideIcon:null,MaxValue:0},SpecialDurability1:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊1"},OverrideIcon:null,MaxValue:0},SpecialDurability2:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊2"},OverrideIcon:null,MaxValue:0},SpecialDurability3:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊3"},OverrideIcon:null,MaxValue:0},SpecialDurability4:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊4"},OverrideIcon:null,MaxValue:0}}],c={ParentObjectID:"aeb2da6ac8e8450468579149e17c86bc",LocalizationKey:"ClayJarUnfired_CardName",DefaultText:"Unfired Clay Jar",Text:"未烧制的小陶罐"},u={m_FileID:0,m_PathID:668,FileName:"Jar_Clay@668"},d=null,f=!1,x=[],y=!1,p={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"时间"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},g={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"耐久"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},S={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"容量"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1,_rateModifications:[{link:{key:"Kiln",text:"窑炉",icon:"Oven_On@446"},name:"转化：Fires Medium",value:{x:200,y:200}},{link:{key:"KilnExtinguished",text:"窑炉",icon:"Oven_Off@556"},name:"转化：Fires Medium",value:{x:200,y:200}},{link:{key:"Oven",text:"烤箱",icon:"Oven_On@446"},name:"转化：Fires Medium",value:{x:200,y:200}},{link:{key:"OvenExtinguished",text:"烤箱",icon:"Oven_Off@556"},name:"转化：食欲尚可",value:{x:200,y:200}}]},C={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"进度"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},D=0,T={Active:!0,FloatValue:0,CardStatName:{ParentObjectID:"aeb2da6ac8e8450468579149e17c86bc",LocalizationKey:"ClayJarUnfired_SpecialDurability1.CardStatName",DefaultText:"Fired",Text:"烹饪度"},RandomStartingOffset:0,MaxValue:12,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:3,TextDisplay:0,OverrideIcon:{m_FileID:0,m_PathID:245,FileName:"Cooking@245"},HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!0,ShowPopupOnFull:!1,OnFullNotification:1,OnFull:{ActionName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},ActionDescription:{ParentObjectID:"aeb2da6ac8e8450468579149e17c86bc",LocalizationKey:"ClayJarUnfired_SpecialDurability1.OnFull.ActionDescription",DefaultText:"Clay Jar fired.",Text:"小陶罐烧好了。"},NoveltyShared:!1,VictorySettings:{Victory:!1,SpecialEnding:!1,VictoryMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""}},UnavailableInDemo:!1,SaveGame:!1,ConfirmPopup:!1,StackCompatible:!1,DaytimeCost:0,UseMiniTicks:0,ActionSounds:[],DisablePitchVariation:!1,ActionTags:[],RequiredStatValues:[],RequiredCardsOnBoard:[],RequiredTagsOnBoard:[],RequiredReceivingContainer:[],RequiredReceivingContainerTag:[],RequiredReceivingContainerDurabilities:{RequiredSpoilagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredUsagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredFuelPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredProgressPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredLiquidQuantity:0,RequiredSpecial1Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial2Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial3Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial4Percent:{Active:!1,FloatValue:0,MaxValue:0},HideActionIfNotMet:!1,FailMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},SpecificFailMessages:[]},RequiredReceivingDurabilities:{RequiredSpoilagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredUsagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredFuelPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredProgressPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredLiquidQuantity:0,RequiredSpecial1Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial2Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial3Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial4Percent:{Active:!1,FloatValue:0,MaxValue:0},HideActionIfNotMet:!1,FailMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},SpecificFailMessages:[]},RequiredReceivingLiquidContent:{IsActive:!1,RequiredLiquid:null,RequiredGroup:null,RequiredQuantity:{x:0,y:0}},HideIfConditionsNotMet:!1,NotBaseAction:!1,Cancellable:!1,InstantStatModifications:!1,ReceivingCardFlavourBonus:!1,GivenCardFlavourBonus:!1,ResetWhenDone:null,StatInterruptions:[],StartDialog:null,ProducedCards:[],StatModifications:[],InterpolatedStatModifications:[],NPCStatModifications:[],MoveNPC:[],ExtraDurabilityModifications:[],BlueprintsFullUnlock:[],DontShowDestroyMessage:!1,CustomDestroyMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},NoCardsAffectedMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},ReceivingCardChanges:{ModType:2,TransformInto:{key:"ClayJar",text:"小陶罐",icon:"Jar_Clay@668",SpoilageTime:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"时间"},OverrideIcon:null,MaxValue:0},UsageDurability:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"耐久"},OverrideIcon:null,MaxValue:0},FuelCapacity:{Active:!0,CardStatName:{ParentObjectID:"db78f1724c2fffe4d9302c72457ca8bf",LocalizationKey:"ClayJar_FuelCapacity.CardStatName",DefaultText:"Temperature",Text:"温度"},OverrideIcon:{m_FileID:0,m_PathID:595,FileName:"Hot@595"},MaxValue:200},Progress:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"进度"},OverrideIcon:null,MaxValue:0},SpecialDurability1:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊1"},OverrideIcon:null,MaxValue:0},SpecialDurability2:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊2"},OverrideIcon:null,MaxValue:0},SpecialDurability3:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊3"},OverrideIcon:null,MaxValue:0},SpecialDurability4:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊4"},OverrideIcon:null,MaxValue:0}},TransferSpoilage:!1,TransferUsage:!1,TransferFuel:!1,TransferCharges:!1,TransferSpecial1:!1,TransferSpecial2:!1,TransferSpecial3:!1,TransferSpecial4:!1,TransferInventory:!1,TransferSavedIngredients:!1,AverageGivenAndReceivingCards:!1,TransferLiquid:!1,ModifyDurability:!1,ModifyLiquid:!1,DropOnDestroyList:!1,LiquidEffectScaling:0,AddFlavoursFromTargetCard:!1,AddFlavoursFromOtherCard:!1,AddSpicesFromTargetCard:!1,AddSpicesFromOtherCard:!1,AddedFlavours:[],AddedSpiceTags:[],SpoilageChange:{x:0,y:0},UsageChange:{x:0,y:0},FuelChange:{x:0,y:0},ChargesChange:{x:0,y:0},LiquidQuantityChange:{x:0,y:0},Special1Change:{x:0,y:0},Special2Change:{x:0,y:0},Special3Change:{x:0,y:0},Special4Change:{x:0,y:0},StatInterpolatedDurabilityChanges:[],ScaleChangesPerPortionOfLiquid:{Active:!1,FloatValue:0},UseOtherCardForLiquidQuantity:!1},CustomWindowPrefab:null,OpenQuestLog:!1,FadeToBlack:0,FadeMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},FadeTips:!1,TravelToPreviousEnv:!1,TravelToOtherRoom:!1,RoomDirection:0,ExitDirection:0},CountsForTradingValue:!1,_rateModifications:[{link:{key:"Kiln",text:"窑炉",icon:"Oven_On@446"},name:"转化：Fires Medium",value:{x:1,y:1}},{link:{key:"KilnExtinguished",text:"窑炉",icon:"Oven_Off@556"},name:"转化：Fires Medium",value:{x:1,y:1}},{link:{key:"Oven",text:"烤箱",icon:"Oven_On@446"},name:"转化：Fires Medium",value:{x:1,y:1}},{link:{key:"OvenExtinguished",text:"烤箱",icon:"Oven_Off@556"},name:"转化：食欲尚可",value:{x:1,y:1}}]},v={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊2"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},m={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊3"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},O={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊4"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},A={SortingList:[]},P=!1,b={MaskValue:0},F=[],I=[],M=0,V=!1,R=!1,h={LiquidCard:null,Quantity:{x:0,y:0}},L=null,q=[],N=[],E=[],H=!1,B=!1,k={RequiredSpoilagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredUsagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredFuelPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredProgressPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredLiquidQuantity:0,RequiredSpecial1Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial2Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial3Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial4Percent:{Active:!1,FloatValue:0,MaxValue:0},HideActionIfNotMet:!1,FailMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},SpecificFailMessages:[]},K={RequiredSpoilagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredUsagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredFuelPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredProgressPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredLiquidQuantity:0,RequiredSpecial1Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial2Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial3Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial4Percent:{Active:!1,FloatValue:0,MaxValue:0},HideActionIfNotMet:!1,FailMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},SpecificFailMessages:[]},j=[],z=[],_=null,U=!1,W=!1,w=!1,Z=!1,J=0,Q=0,G=0,X=[],Y={AcceptedCards:[],AcceptedTypes:[],AcceptedTags:[],NOTAcceptedCards:[],NOTAcceptedTypes:[],NOTAcceptedTags:[],CardFilters:[],TagFilters:[]},$=!1,ee={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},ae=[],te={NeedsSpoilage:!1,NeedsUsage:!1,NeedsFuel:!1,NeedsProgress:!1,NeedsSpecial1:!1,NeedsSpecial2:!1,NeedsSpecial3:!1,NeedsSpecial4:!1,ExtraSpoilageRate:0,ExtraUsageRate:0,ExtraFuelRate:0,ExtraProgressRate:0,ExtraSpecial1Rate:0,ExtraSpecial2Rate:0,ExtraSpecial3Rate:0,ExtraSpecial4Rate:0,CookingPausedSound:null,CookingPausedNotification:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""}},ie=!1,ne=[],le=!1,oe=0,se=0,re=0,ce=[],ue=[],de=[],fe=[],xe=[],ye={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},pe=null,ge=0,Se=[],Ce=[],De=[],Te=0,ve=0,me=0,Oe=0,Ae=0,Pe=0,be=[],Fe=0,Ie=0,Me={x:0,y:0},Ve={x:0,y:0},Re={x:0,y:0},he={x:0,y:0},Le={x:0,y:0},qe={x:0,y:0},Ne={x:0,y:0},Ee={x:0,y:0},He=[],Be={x:0,y:0},ke=[],Ke={x:0,y:0},je={x:0,y:0},ze={x:0,y:0},_e={x:0,y:0},Ue={x:0,y:0},We=[],we=[],Ze=[],Je=[],Qe={LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},AlternateLogTexts:[],TextSettings:{Active:!1,Bold:!1,Italics:!1,Underlined:!1},TextColor:{Active:!1,ColorValue:{r:0,g:0,b:0,a:0}},ScreenShake:!1,SoundEffects:[]},Ge={LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},AlternateLogTexts:[],TextSettings:{Active:!1,Bold:!1,Italics:!1,Underlined:!1},TextColor:{Active:!1,ColorValue:{r:0,g:0,b:0,a:0}},ScreenShake:!1,SoundEffects:[]},Xe=!1,Ye={HeadArmor:0,HeadArmorModifiers:[],HeadHitProbabilityModifier:0,TorsoArmor:0,TorsoArmorModifiers:[],TorsoHitProbabilityModifier:0,LArmArmor:0,LArmArmorModifiers:[],LArmHitProbabilityModifier:0,RArmArmor:0,RArmArmorModifiers:[],RArmHitProbabilityModifier:0,LLegArmor:0,LLegArmorModifiers:[],LLegHitProbabilityModifier:0,RLegArmor:0,RLegArmorModifiers:[],RLegHitProbabilityModifier:0},$e=!1,ea=!1,aa=0,ta=0,ia=0,na=0,la={TorsoHitProbabilityModifier:0,HeadHitProbabilityModifier:0,LArmHitProbabilityModifier:0,RArmHitProbabilityModifier:0,LLegHitProbabilityModifier:0,RLegHitProbabilityModifier:0},oa={TorsoHitProbabilityModifier:0,HeadHitProbabilityModifier:0,LArmHitProbabilityModifier:0,RArmHitProbabilityModifier:0,LLegHitProbabilityModifier:0,RLegHitProbabilityModifier:0},sa={ParentObjectID:"aeb2da6ac8e8450468579149e17c86bc",LocalizationKey:"ClayJarUnfired_CardDescription",DefaultText:"Needs to be fired in an oven or kiln to become usable.",Text:"使用前需要在烤箱或者窑炉中烧制。"},ra=!1,ca=[],ua={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},da={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},fa=!1,xa=100,ya=[],pa=0,ga=!1,Sa=0,Ca=[],Da=[],Ta=[],va=0,ma=[],Oa=!1,Aa=!1,Pa=!1,ba=[],Fa=!1,Ia=!1,Ma=!1,Va=!1,Ra=[],ha=!1,La=!1,qa=!1,Na=!1,Ea={InternalName:"",BackgroundSound:null,RandomNoises:[],DurabilityConditions:{SpoilageRange:{x:0,y:0},UsageRange:{x:0,y:0},FuelRange:{x:0,y:0},ProgressRange:{x:0,y:0},Special1Range:{x:0,y:0},Special2Range:{x:0,y:0},Special3Range:{x:0,y:0},Special4Range:{x:0,y:0},LiquidQuantityRange:{x:0,y:0}},StatConditions:[],TimeOfDayConditions:[]},Ha=[],Ba=[],ka=null,Ka={IsSourceOfLight:!1,Priority:0,LightPos:{x:0,y:0},LightSize:{x:0,y:0},LightColor:{r:0,g:0,b:0,a:0},LightFlickerFreq:0,LightFlickerStrength:0},ja=!1,za=!1,_a=!1,Ua=[],Wa=[],wa=[],Za=[],Ja=[],Qa=[],Ga=[],Xa=[],Ya=!1,$a=[],et=!1,at=[],tt=[],it=[],nt={RequiredSpoilagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredUsagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredFuelPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredProgressPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredLiquidQuantity:0,RequiredSpecial1Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial2Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial3Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial4Percent:{Active:!1,FloatValue:0,MaxValue:0},HideActionIfNotMet:!1,FailMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},SpecificFailMessages:[]},lt=[],ot=0,st=0,rt=0,ct=0,ut=[],dt=!1,ft=!1,xt=[],yt=[],pt=[],gt=[],St={ModType:0,TransformInto:null,TransferSpoilage:!1,TransferUsage:!1,TransferFuel:!1,TransferCharges:!1,TransferSpecial1:!1,TransferSpecial2:!1,TransferSpecial3:!1,TransferSpecial4:!1,TransferInventory:!1,TransferSavedIngredients:!1,AverageGivenAndReceivingCards:!1,TransferLiquid:!1,ModifyDurability:!1,ModifyLiquid:!1,DropOnDestroyList:!1,LiquidEffectScaling:0,AddFlavoursFromTargetCard:!1,AddFlavoursFromOtherCard:!1,AddSpicesFromTargetCard:!1,AddSpicesFromOtherCard:!1,AddedFlavours:[],AddedSpiceTags:[],SpoilageChange:{x:0,y:0},UsageChange:{x:0,y:0},FuelChange:{x:0,y:0},ChargesChange:{x:0,y:0},LiquidQuantityChange:{x:0,y:0},Special1Change:{x:0,y:0},Special2Change:{x:0,y:0},Special3Change:{x:0,y:0},Special4Change:{x:0,y:0},StatInterpolatedDurabilityChanges:[],ScaleChangesPerPortionOfLiquid:{Active:!1,FloatValue:0},UseOtherCardForLiquidQuantity:!1},Ct=0,Dt=0,Tt=[],vt=[],mt=[],Ot=[],At=[],Pt=!1,bt=!1,Ft=[],It=[],Mt=0,Vt=!1,Rt=null,ht=null,Lt=!1,qt={SpringArt:{SeasonID:"",CardImage:null,CardBackground:null,ShowImageAboveTitle:!1},SummerArt:{SeasonID:"",CardImage:null,CardBackground:null,ShowImageAboveTitle:!1},AutumnArt:{SeasonID:"",CardImage:null,CardBackground:null,ShowImageAboveTitle:!1},WinterArt:{SeasonID:"",CardImage:null,CardBackground:null,ShowImageAboveTitle:!1},CustomSeasonsArt:[]},Nt=!1,Et=!1,Ht=!1,Bt=[{link:{key:"Bp_ClayJar",text:"小陶罐",icon:"Jar_Clay@668"},name:"蓝图制作"}],kt=[],Kt=null,jt=1,zt="aeb2da6ac8e8450468579149e17c86bc",_t=[{m_FileID:0,m_PathID:100,FileName:"SmallContainer@100"}],Ut=!1,Wt=null,wt=[],Zt=[],Jt={m_Name:e,m_Script:a,___key:t,___fn:i,key:n,text:l,type:o,CardType:s,CardTags:r,CardName:c,CardImage:u,CardBackground:d,ShowImageAboveTitle:f,DroppedOnDestroy:x,DropFromTrashButton:y,SpoilageTime:p,UsageDurability:g,FuelCapacity:S,Progress:C,LiquidEvaporationRate:D,SpecialDurability1:T,SpecialDurability2:v,SpecialDurability3:m,SpecialDurability4:O,DurabilitySorting:A,OnlyShowPopupsWhenEquipped:P,MiniInventoryHideDurabilities:b,CardInteractions:F,OnStatsChangeActions:I,MinQuantityLeftAfterATransfer:M,KeepName:V,ShowLiquidAsSuffix:R,DefaultLiquidContained:h,DefaultLiquidImage:L,LiquidImages:q,ExclusivelyAcceptedLiquids:N,NOTAcceptedLiquids:E,CannotGiveLiquidWithDragNDrop:H,CannotReceiveLiquidWithDragNDrop:B,DurabilityConditionsForGivingLiquid:k,DurabilityConditionsForReceivingLiquid:K,StatConditionsForGivingLiquid:j,StatConditionsForReceivingLiquid:z,ContainedLiquidTransform:_,InventoryIsHidden:U,IsMiniInventory:W,IsLockedInventory:w,IsWeaponSheath:Z,OpenOnTab:J,MaxWeightCapacity:Q,ContentWeightReduction:G,InventorySlots:X,InventoryFilter:Y,SpillsInventoryOnDestroy:$,InventorySlotsText:ee,GroupInventoryActions:ae,CookingConditions:te,TransferCookingResultsOnTransform:ie,CookingRecipes:ne,DoesNotNeedToBeHeldInHand:le,MainHandUse:oe,OffHandUse:se,BothHandsUse:re,CardsOnBoard:ce,TagsOnBoard:ue,StatValues:de,TimeValues:fe,CompletedObjectives:xe,UnlockConditionsDesc:ye,ExplicitBlueprintNeeded:pe,UnlockNotifications:ge,BlueprintCardConditions:Se,BlueprintTagConditions:Ce,BlueprintStatConditions:De,RequiredDistance:Te,RequiredWrestlingState:ve,RequiredAmbush:me,RequiredSelfVulnerableState:Oe,RequiredOpponentVulnerableState:Ae,ActionRange:Pe,AmmoNeeded:be,AmmoUsageCost:Fe,WeaponReach:Ie,BaseClashValue:Me,ClashRangedInaccuracy:Ve,ClashStealthBonus:Re,ClashIneffectiveRangeMalus:he,WrestlingClashBonus:Le,ClashVsEscapeBonus:qe,ClashVsVulnerableBonus:Ne,ClashVsChargeBonus:Ee,WeaponClashStatInfluences:He,PickupFromGroundClashValue:Be,DamageTypes:ke,WeaponDamage:Ke,WrestlingDamageBonus:je,DmgVsEscapeBonus:ze,DmgVsVulnerableBonus:_e,DmgVsChargeBonus:Ue,WeaponDamageStatInfluences:We,DurabilityCombatModifiers:we,InHandModifiers:Ze,WeaponActionStatChanges:Je,BrokenDuringCombatLog:Qe,WeaponIneffectiveCombatLog:Ge,IsArmor:Xe,ArmorValues:Ye,IsCover:$e,AppliesCoverWhenEquipped:ea,PlayerAddedCover:aa,EnemyAddedCover:ta,PlayerAddedStealth:ia,EnemyAddedStealth:na,PlayerCoverHitProbabilityModifiers:la,EnemyCoverHitProbabilityModifiers:oa,CardDescription:sa,CanBeRenamed:ra,AlternateNames:ca,LiquidSuffixName:ua,CardHelpSection:da,NotAutoSolvableEvent:fa,ObjectWeight:xa,AddedWeightFromDurabilities:ya,WeightReductionWhenEquipped:pa,NeedsRoomInLocationToSpawn:ga,TradingValue:Sa,EquipmentTags:Ca,FlavourTags:Da,SpiceTags:Ta,FlavourFadeRate:va,LiquidValidContainers:ma,InHandWhenEquipped:Oa,InstancedEnvironment:Aa,UniqueOnBoard:Pa,SpawningBlockedBy:ba,CannotSpawnWithoutPlayerPresent:Fa,CannotSpawnDuringTickCatchup:Ia,AlwaysUpdate:Ma,CannotBeTrashed:Va,CarriesOverTo:Ra,CanDragItemsToTravel:ha,DoesNotPile:La,ToggleablePiling:qa,DoesNotPinAutomatically:Na,Ambience:Ea,AlternateAmbiences:Ha,VisualEffects:Ba,WeatherEffects:ka,LightSource:Ka,IsDarkPlace:ja,IsHotPlace:za,IsTravelCard:_a,PassiveStatEffects:Ua,PassiveEffects:Wa,RemotePassiveEffects:wa,EffectsToContainer:Za,EffectsToInventoryContent:Ja,DurabilityTransferEffects:Qa,ActiveCounters:Ga,LocalCounterEffects:Xa,CannotEmptyWithAnAction:Ya,ContainedBlueprintCards:$a,ContainedBlueprintsDontStartUnlocked:et,BuildingCardConditions:at,BuildingTagConditions:tt,BuildingStatConditions:it,BuildingContainerDurabilitiesConditions:nt,BlueprintStages:lt,BuildingDaytimeCost:ot,BuildingMiniTicks:st,DeconstructDaytimeCost:rt,DeconstructMiniTicks:ct,BlueprintActionTags:ut,BPRandomSingleDrop:dt,BlueprintDoesntCountForEnvWeight:ft,BlueprintResult:xt,ResultInterpolatedDurabilityModifiers:yt,BlueprintStatModifications:pt,BlueprintCardModifications:gt,BlueprintContainerCardChanges:St,BlueprintUnlockSunsCost:Ct,ResearchedNotification:Dt,ExplorationResults:Tt,EnvironmentImprovements:vt,EnvironmentDamages:mt,DefaultEnvCardDrops:Ot,OldDefaultEnvCards:At,IsWeapon:Pt,IsAmmo:bt,WeaponMoves:Ft,DismantleActions:It,MaxLiquidCapacity:Mt,UseCoordinates:Vt,CreatedPath:Rt,OppositePath:ht,CreateInstancedMap:Lt,SeasonsArt:qt,AffectStatsOnlyWhenEquipped:Nt,AffectStatsOnlyWhenNotInBackground:Et,AffectStatsOnlyOnBase:Ht,_gotFrom:Bt,_useFor:kt,m_GameObject:Kt,m_Enabled:jt,UniqueID:zt,WhenCreatedSounds:_t,DebugCardSorting:Ut,CookingSprite:Wt,BuildSounds:wt,DeconstructSounds:Zt};export{Pe as ActionRange,Ga as ActiveCounters,ya as AddedWeightFromDurabilities,Ht as AffectStatsOnlyOnBase,Nt as AffectStatsOnlyWhenEquipped,Et as AffectStatsOnlyWhenNotInBackground,Ha as AlternateAmbiences,ca as AlternateNames,Ma as AlwaysUpdate,Ea as Ambience,be as AmmoNeeded,Fe as AmmoUsageCost,ea as AppliesCoverWhenEquipped,Ye as ArmorValues,dt as BPRandomSingleDrop,Me as BaseClashValue,ut as BlueprintActionTags,Se as BlueprintCardConditions,gt as BlueprintCardModifications,St as BlueprintContainerCardChanges,ft as BlueprintDoesntCountForEnvWeight,xt as BlueprintResult,lt as BlueprintStages,De as BlueprintStatConditions,pt as BlueprintStatModifications,Ce as BlueprintTagConditions,Ct as BlueprintUnlockSunsCost,re as BothHandsUse,Qe as BrokenDuringCombatLog,wt as BuildSounds,at as BuildingCardConditions,nt as BuildingContainerDurabilitiesConditions,ot as BuildingDaytimeCost,st as BuildingMiniTicks,it as BuildingStatConditions,tt as BuildingTagConditions,ra as CanBeRenamed,ha as CanDragItemsToTravel,Va as CannotBeTrashed,Ya as CannotEmptyWithAnAction,H as CannotGiveLiquidWithDragNDrop,B as CannotReceiveLiquidWithDragNDrop,Ia as CannotSpawnDuringTickCatchup,Fa as CannotSpawnWithoutPlayerPresent,d as CardBackground,sa as CardDescription,da as CardHelpSection,u as CardImage,F as CardInteractions,c as CardName,r as CardTags,s as CardType,ce as CardsOnBoard,Ra as CarriesOverTo,he as ClashIneffectiveRangeMalus,Ve as ClashRangedInaccuracy,Re as ClashStealthBonus,Ee as ClashVsChargeBonus,qe as ClashVsEscapeBonus,Ne as ClashVsVulnerableBonus,xe as CompletedObjectives,$a as ContainedBlueprintCards,et as ContainedBlueprintsDontStartUnlocked,_ as ContainedLiquidTransform,G as ContentWeightReduction,te as CookingConditions,ne as CookingRecipes,Wt as CookingSprite,Lt as CreateInstancedMap,Rt as CreatedPath,ke as DamageTypes,Ut as DebugCardSorting,rt as DeconstructDaytimeCost,ct as DeconstructMiniTicks,Zt as DeconstructSounds,Ot as DefaultEnvCardDrops,h as DefaultLiquidContained,L as DefaultLiquidImage,It as DismantleActions,Ue as DmgVsChargeBonus,ze as DmgVsEscapeBonus,_e as DmgVsVulnerableBonus,le as DoesNotNeedToBeHeldInHand,La as DoesNotPile,Na as DoesNotPinAutomatically,y as DropFromTrashButton,x as DroppedOnDestroy,we as DurabilityCombatModifiers,k as DurabilityConditionsForGivingLiquid,K as DurabilityConditionsForReceivingLiquid,A as DurabilitySorting,Qa as DurabilityTransferEffects,Za as EffectsToContainer,Ja as EffectsToInventoryContent,ta as EnemyAddedCover,na as EnemyAddedStealth,oa as EnemyCoverHitProbabilityModifiers,mt as EnvironmentDamages,vt as EnvironmentImprovements,Ca as EquipmentTags,N as ExclusivelyAcceptedLiquids,pe as ExplicitBlueprintNeeded,Tt as ExplorationResults,va as FlavourFadeRate,Da as FlavourTags,S as FuelCapacity,ae as GroupInventoryActions,Ze as InHandModifiers,Oa as InHandWhenEquipped,Aa as InstancedEnvironment,Y as InventoryFilter,U as InventoryIsHidden,X as InventorySlots,ee as InventorySlotsText,bt as IsAmmo,Xe as IsArmor,$e as IsCover,ja as IsDarkPlace,za as IsHotPlace,w as IsLockedInventory,W as IsMiniInventory,_a as IsTravelCard,Pt as IsWeapon,Z as IsWeaponSheath,V as KeepName,Ka as LightSource,D as LiquidEvaporationRate,q as LiquidImages,ua as LiquidSuffixName,ma as LiquidValidContainers,Xa as LocalCounterEffects,oe as MainHandUse,Mt as MaxLiquidCapacity,Q as MaxWeightCapacity,M as MinQuantityLeftAfterATransfer,b as MiniInventoryHideDurabilities,E as NOTAcceptedLiquids,ga as NeedsRoomInLocationToSpawn,fa as NotAutoSolvableEvent,xa as ObjectWeight,se as OffHandUse,At as OldDefaultEnvCards,I as OnStatsChangeActions,P as OnlyShowPopupsWhenEquipped,J as OpenOnTab,ht as OppositePath,Wa as PassiveEffects,Ua as PassiveStatEffects,Be as PickupFromGroundClashValue,aa as PlayerAddedCover,ia as PlayerAddedStealth,la as PlayerCoverHitProbabilityModifiers,C as Progress,wa as RemotePassiveEffects,me as RequiredAmbush,Te as RequiredDistance,Ae as RequiredOpponentVulnerableState,Oe as RequiredSelfVulnerableState,ve as RequiredWrestlingState,Dt as ResearchedNotification,yt as ResultInterpolatedDurabilityModifiers,qt as SeasonsArt,f as ShowImageAboveTitle,R as ShowLiquidAsSuffix,ba as SpawningBlockedBy,T as SpecialDurability1,v as SpecialDurability2,m as SpecialDurability3,O as SpecialDurability4,Ta as SpiceTags,$ as SpillsInventoryOnDestroy,p as SpoilageTime,j as StatConditionsForGivingLiquid,z as StatConditionsForReceivingLiquid,de as StatValues,ue as TagsOnBoard,fe as TimeValues,qa as ToggleablePiling,Sa as TradingValue,ie as TransferCookingResultsOnTransform,zt as UniqueID,Pa as UniqueOnBoard,ye as UnlockConditionsDesc,ge as UnlockNotifications,g as UsageDurability,Vt as UseCoordinates,Ba as VisualEffects,Je as WeaponActionStatChanges,He as WeaponClashStatInfluences,Ke as WeaponDamage,We as WeaponDamageStatInfluences,Ge as WeaponIneffectiveCombatLog,Ft as WeaponMoves,Ie as WeaponReach,ka as WeatherEffects,pa as WeightReductionWhenEquipped,_t as WhenCreatedSounds,Le as WrestlingClashBonus,je as WrestlingDamageBonus,i as ___fn,t as ___key,Bt as _gotFrom,kt as _useFor,Jt as default,n as key,jt as m_Enabled,Kt as m_GameObject,e as m_Name,a as m_Script,l as text,o as type};
