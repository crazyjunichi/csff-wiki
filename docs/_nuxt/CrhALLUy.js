const e="StoneBurnt",a={m_FileID:1,m_PathID:663,FileName:"God@663"},t="0_2168",i="StoneBurnt@2168.json",l="StoneBurnt",n="煅烧后的石头",o="card",r=0,s=[{key:"tag_Cookable",text:"“可烹饪的”",icon:"",type:"tag",SpoilageTime:{Active:!0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"时间"},OverrideIcon:null,MaxValue:48},UsageDurability:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"耐久"},OverrideIcon:null,MaxValue:0},FuelCapacity:{Active:!0,CardStatName:{ParentObjectID:"06dae378d93d21746b583c6db0ec3917",LocalizationKey:"AcornDoughRaw_FuelCapacity.CardStatName",DefaultText:"Temperature",Text:"温度"},OverrideIcon:{m_FileID:0,m_PathID:595,FileName:"Hot@595"},MaxValue:200},Progress:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"进度"},OverrideIcon:null,MaxValue:0},SpecialDurability1:{Active:!0,CardStatName:{ParentObjectID:"06dae378d93d21746b583c6db0ec3917",LocalizationKey:"AcornDoughRaw_SpecialDurability1.CardStatName",DefaultText:"Cook",Text:"烹饪度"},OverrideIcon:{m_FileID:0,m_PathID:245,FileName:"Cooking@245"},MaxValue:1},SpecialDurability2:{Active:!0,CardStatName:{ParentObjectID:"06dae378d93d21746b583c6db0ec3917",LocalizationKey:"AcornDoughRaw_SpecialDurability2.CardStatName",DefaultText:"Quality",Text:"品质"},OverrideIcon:{m_FileID:0,m_PathID:737,FileName:"Quality@737"},MaxValue:96},SpecialDurability3:{Active:!1,CardStatName:{ParentObjectID:"06dae378d93d21746b583c6db0ec3917",LocalizationKey:"",DefaultText:"Timing",Text:"Timing"},OverrideIcon:null,MaxValue:1},SpecialDurability4:{Active:!1,CardStatName:{ParentObjectID:"06dae378d93d21746b583c6db0ec3917",LocalizationKey:"",DefaultText:"Timing",Text:"Timing"},OverrideIcon:null,MaxValue:1}},{key:"tag_Heavy",text:"“沉重的”",icon:"",type:"tag",SpoilageTime:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"时间"},OverrideIcon:null,MaxValue:0},UsageDurability:{Active:!0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"耐久"},OverrideIcon:{m_FileID:0,m_PathID:406,FileName:"Shield@406"},MaxValue:30},FuelCapacity:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"容量"},OverrideIcon:null,MaxValue:0},Progress:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"进度"},OverrideIcon:null,MaxValue:0},SpecialDurability1:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊1"},OverrideIcon:null,MaxValue:0},SpecialDurability2:{Active:!0,CardStatName:{ParentObjectID:"8cae876b49f3aef45afc1ad96b1a4628",LocalizationKey:"AntlerPick_SpecialDurability2.CardStatName",DefaultText:"Quality",Text:"品质"},OverrideIcon:{m_FileID:0,m_PathID:737,FileName:"Quality@737"},MaxValue:100},SpecialDurability3:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊3"},OverrideIcon:null,MaxValue:0},SpecialDurability4:{Active:!1,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊4"},OverrideIcon:null,MaxValue:0}}],c={ParentObjectID:"d0ef9db9c381e39459ca4e46c5bad95b",LocalizationKey:"StoneBurnt_CardName",DefaultText:"Burnt Stone",Text:"煅烧后的石头"},u={m_FileID:0,m_PathID:581,FileName:"BurntStone@581"},d=null,f=!1,g=[],y=!1,x={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"时间"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},p={Active:!1,FloatValue:20,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"耐久"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!0,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},S={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"容量"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},C={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"进度"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},D=0,T={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊1"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},v={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊2"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},A={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊3"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},m={Active:!1,FloatValue:0,CardStatName:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:"特殊4"},RandomStartingOffset:0,MaxValue:0,RatePerDaytimePoint:0,ExtraRateWhenEquipped:0,HidingOptions:0,TextDisplay:0,OverrideIcon:null,HasActionOnZero:!1,ShowPopupOnZero:!1,OnZeroNotification:0,HasActionOnFull:!1,ShowPopupOnFull:!1,OnFullNotification:0,CountsForTradingValue:!1},I={SortingList:[]},M=!1,P={MaskValue:0},O=JSON.parse('[{"ActionName":{"ParentObjectID":"d0ef9db9c381e39459ca4e46c5bad95b","LocalizationKey":"StoneBurnt_CardInteractions[0].ActionName","DefaultText":"Ground","Text":"研磨"},"ActionDescription":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"NoveltyShared":false,"VictorySettings":{"Victory":false,"SpecialEnding":false,"VictoryMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""}},"UnavailableInDemo":false,"SaveGame":false,"ConfirmPopup":false,"StackCompatible":false,"DaytimeCost":2,"UseMiniTicks":0,"ActionSounds":[],"DisablePitchVariation":false,"ActionTags":[{"key":"HandAction","text":"HandAction","type":"tag"},{"key":"CraftAction","text":"CraftAction","type":"tag"}],"RequiredStatValues":[],"RequiredCardsOnBoard":[],"RequiredTagsOnBoard":[],"RequiredReceivingContainer":[],"RequiredReceivingContainerTag":[],"RequiredReceivingContainerDurabilities":{"RequiredSpoilagePercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredUsagePercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredFuelPercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredProgressPercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredLiquidQuantity":0,"RequiredSpecial1Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial2Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial3Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial4Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"HideActionIfNotMet":false,"FailMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"SpecificFailMessages":[]},"RequiredReceivingDurabilities":{"RequiredSpoilagePercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredUsagePercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredFuelPercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredProgressPercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredLiquidQuantity":0,"RequiredSpecial1Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial2Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial3Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial4Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"HideActionIfNotMet":false,"FailMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"SpecificFailMessages":[]},"RequiredReceivingLiquidContent":{"IsActive":false,"RequiredLiquid":null,"RequiredGroup":null,"RequiredQuantity":{"x":0,"y":0}},"HideIfConditionsNotMet":false,"NotBaseAction":false,"Cancellable":false,"InstantStatModifications":false,"ReceivingCardFlavourBonus":false,"GivenCardFlavourBonus":false,"ResetWhenDone":null,"StatInterruptions":[],"StartDialog":null,"ProducedCards":[{"CollectionName":"","CollectionMessages":[],"CountsAsSuccess":false,"RevealInventory":false,"CollectionUses":{"m_X":0,"m_Y":0},"CollectionWeight":0,"StatsDropChanceModifiers":[],"CardDropChanceModifiers":[],"DurabilitiesDropChanceModifier":{"Spoilage":{"Active":false,"DurabilityRange":{"x":0,"y":0},"InterpWeightRange":{"m_X":0,"m_Y":0},"WhenOutOfRange":0},"Usage":{"Active":false,"DurabilityRange":{"x":0,"y":0},"InterpWeightRange":{"m_X":0,"m_Y":0},"WhenOutOfRange":0},"Fuel":{"Active":false,"DurabilityRange":{"x":0,"y":0},"InterpWeightRange":{"m_X":0,"m_Y":0},"WhenOutOfRange":0},"Progress":{"Active":false,"DurabilityRange":{"x":0,"y":0},"InterpWeightRange":{"m_X":0,"m_Y":0},"WhenOutOfRange":0},"Special1":{"Active":false,"DurabilityRange":{"x":0,"y":0},"InterpWeightRange":{"m_X":0,"m_Y":0},"WhenOutOfRange":0},"Special2":{"Active":false,"DurabilityRange":{"x":0,"y":0},"InterpWeightRange":{"m_X":0,"m_Y":0},"WhenOutOfRange":0},"Special3":{"Active":false,"DurabilityRange":{"x":0,"y":0},"InterpWeightRange":{"m_X":0,"m_Y":0},"WhenOutOfRange":0},"Special4":{"Active":false,"DurabilityRange":{"x":0,"y":0},"InterpWeightRange":{"m_X":0,"m_Y":0},"WhenOutOfRange":0}},"CreatedLiquid":{"LiquidCard":null,"Quantity":{"x":0,"y":0}},"DroppedCards":[{"DroppedCard":{"key":"Quicklime","text":"生石灰","icon":"","SpoilageTime":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"时间"},"OverrideIcon":null,"MaxValue":0},"UsageDurability":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"耐久"},"OverrideIcon":null,"MaxValue":0},"FuelCapacity":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"容量"},"OverrideIcon":null,"MaxValue":0},"Progress":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"进度"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability1":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"特殊1"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability2":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"特殊2"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability3":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"特殊3"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability4":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"特殊4"},"OverrideIcon":null,"MaxValue":0}},"Quantity":{"m_X":3,"m_Y":3},"FinishUnlocking":false,"TransferRules":{"Spoilage":0,"Usage":0,"Fuel":0,"Progress":0,"Special1":0,"Special2":0,"Special3":0,"Special4":0},"DropChance":{"Active":false,"BaseDropChance":0,"DurabilitiesModifiers":[],"StatsModifiers":[],"CardsModifiers":[]}}],"DropSavedBpIngredients":false,"DropCardsInsideInventory":false,"DropCardsInPlayerHand":false,"DroppedEncounter":null,"EncounterNPC":null,"StatModifications":[],"ReceivingCardDurabilityModifications":{"SpoilageChange":{"x":0,"y":0},"UsageChange":{"x":0,"y":0},"FuelChange":{"x":0,"y":0},"ChargesChange":{"x":0,"y":0},"Special1Change":{"x":0,"y":0},"Special2Change":{"x":0,"y":0},"Special3Change":{"x":0,"y":0},"Special4Change":{"x":0,"y":0}},"DropsStatInterpolatedDurabilityChanges":[]}],"StatModifications":[{"Stat":{"key":"HandDamage","text":"手掌损伤","icon":"","type":"stat"},"ValueModifier":{"x":20,"y":20},"RateModifier":{"x":0,"y":0},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":false,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Filth","text":"污垢","icon":"Filth@624","type":"stat"},"ValueModifier":{"x":4,"y":4},"RateModifier":{"x":0,"y":0},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":true,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Focus","text":"专注度","icon":"Focus@300","type":"stat"},"ValueModifier":{"x":2,"y":2},"RateModifier":{"x":0,"y":0},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":true,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Stamina","text":"耐力","icon":"Stamina@336","type":"stat"},"ValueModifier":{"x":-10,"y":-10},"RateModifier":{"x":0,"y":0},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":true,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false},{"Stat":{"key":"Weight","text":"体重","icon":"Weight2@592","type":"stat"},"ValueModifier":{"x":-43,"y":-43},"RateModifier":{"x":0,"y":0},"MinValueModifier":{"x":0,"y":0},"MaxValueModifier":{"x":0,"y":0},"CannotModifyBeyond":{"Active":false,"FloatValue":0,"MaxValue":0},"ApplyEachTick":true,"InstantModifier":false,"IgnoreNovelty":false,"IsInverse":false}],"InterpolatedStatModifications":[],"NPCStatModifications":[],"MoveNPC":[],"ExtraDurabilityModifications":[],"BlueprintsFullUnlock":[],"DontShowDestroyMessage":false,"CustomDestroyMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"NoCardsAffectedMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"ReceivingCardChanges":{"ModType":3,"TransformInto":null,"TransferSpoilage":false,"TransferUsage":false,"TransferFuel":false,"TransferCharges":false,"TransferSpecial1":false,"TransferSpecial2":false,"TransferSpecial3":false,"TransferSpecial4":false,"TransferInventory":false,"TransferSavedIngredients":false,"AverageGivenAndReceivingCards":false,"TransferLiquid":false,"ModifyDurability":false,"ModifyLiquid":false,"DropOnDestroyList":false,"LiquidEffectScaling":0,"AddFlavoursFromTargetCard":false,"AddFlavoursFromOtherCard":false,"AddSpicesFromTargetCard":false,"AddSpicesFromOtherCard":false,"AddedFlavours":[],"AddedSpiceTags":[],"SpoilageChange":{"x":0,"y":0},"UsageChange":{"x":0,"y":0},"FuelChange":{"x":0,"y":0},"ChargesChange":{"x":0,"y":0},"LiquidQuantityChange":{"x":0,"y":0},"Special1Change":{"x":0,"y":0},"Special2Change":{"x":0,"y":0},"Special3Change":{"x":0,"y":0},"Special4Change":{"x":0,"y":0},"StatInterpolatedDurabilityChanges":[],"ScaleChangesPerPortionOfLiquid":{"Active":false,"FloatValue":0},"UseOtherCardForLiquidQuantity":false},"CustomWindowPrefab":null,"OpenQuestLog":false,"FadeToBlack":0,"FadeMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"FadeTips":false,"TravelToPreviousEnv":false,"TravelToOtherRoom":false,"RoomDirection":0,"ExitDirection":0,"RequiredGivenContainer":[],"RequiredGivenContainerTag":[],"RequiredGivenContainerDurabilities":{"RequiredSpoilagePercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredUsagePercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredFuelPercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredProgressPercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredLiquidQuantity":0,"RequiredSpecial1Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial2Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial3Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial4Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"HideActionIfNotMet":false,"FailMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"SpecificFailMessages":[]},"RequiredGivenDurabilities":{"RequiredSpoilagePercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredUsagePercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredFuelPercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredProgressPercent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredLiquidQuantity":0,"RequiredSpecial1Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial2Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial3Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"RequiredSpecial4Percent":{"Active":false,"FloatValue":0,"MaxValue":0},"HideActionIfNotMet":false,"FailMessage":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":""},"SpecificFailMessages":[]},"RequiredGivenLiquidContent":{"IsActive":false,"RequiredLiquid":null,"RequiredGroup":null,"RequiredQuantity":{"x":0,"y":0}},"GivenCardChanges":{"ModType":1,"TransformInto":null,"TransferSpoilage":false,"TransferUsage":false,"TransferFuel":false,"TransferCharges":false,"TransferSpecial1":false,"TransferSpecial2":false,"TransferSpecial3":false,"TransferSpecial4":false,"TransferInventory":false,"TransferSavedIngredients":false,"AverageGivenAndReceivingCards":false,"TransferLiquid":false,"ModifyDurability":false,"ModifyLiquid":false,"DropOnDestroyList":false,"LiquidEffectScaling":0,"AddFlavoursFromTargetCard":false,"AddFlavoursFromOtherCard":false,"AddSpicesFromTargetCard":false,"AddSpicesFromOtherCard":false,"AddedFlavours":[],"AddedSpiceTags":[],"SpoilageChange":{"x":0,"y":0},"UsageChange":{"x":-1,"y":-1},"FuelChange":{"x":0,"y":0},"ChargesChange":{"x":0,"y":0},"LiquidQuantityChange":{"x":0,"y":0},"Special1Change":{"x":0,"y":0},"Special2Change":{"x":0,"y":0},"Special3Change":{"x":0,"y":0},"Special4Change":{"x":0,"y":0},"StatInterpolatedDurabilityChanges":[],"ScaleChangesPerPortionOfLiquid":{"Active":false,"FloatValue":0},"UseOtherCardForLiquidQuantity":false},"CreatedLiquidInGivenCard":{"LiquidCard":null,"Quantity":{"x":0,"y":0}},"CarryOverGivenCard":false,"CompatibleCards":{"TriggerCards":[],"TriggerTags":[{"key":"tag_Hammer","text":"“锤”","icon":"","type":"tag","SpoilageTime":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"时间"},"OverrideIcon":null,"MaxValue":0},"UsageDurability":{"Active":true,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"耐久"},"OverrideIcon":{"m_FileID":0,"m_PathID":406,"FileName":"Shield@406"},"MaxValue":30},"FuelCapacity":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"容量"},"OverrideIcon":null,"MaxValue":0},"Progress":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"进度"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability1":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"特殊1"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability2":{"Active":true,"CardStatName":{"ParentObjectID":"8cae876b49f3aef45afc1ad96b1a4628","LocalizationKey":"AntlerPick_SpecialDurability2.CardStatName","DefaultText":"Quality","Text":"品质"},"OverrideIcon":{"m_FileID":0,"m_PathID":737,"FileName":"Quality@737"},"MaxValue":100},"SpecialDurability3":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"特殊3"},"OverrideIcon":null,"MaxValue":0},"SpecialDurability4":{"Active":false,"CardStatName":{"ParentObjectID":"","LocalizationKey":"","DefaultText":"","Text":"特殊4"},"OverrideIcon":null,"MaxValue":0}}]},"NOTCompatibleCards":{"TriggerCards":[],"TriggerTags":[]},"WorksInverted":false,"WorksBothWays":false}]'),b=[],V=0,F=!1,R=!1,h={LiquidCard:null,Quantity:{x:0,y:0}},q=null,L=[],N=[],B=[],H=!1,E=!1,j={RequiredSpoilagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredUsagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredFuelPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredProgressPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredLiquidQuantity:0,RequiredSpecial1Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial2Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial3Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial4Percent:{Active:!1,FloatValue:0,MaxValue:0},HideActionIfNotMet:!1,FailMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},SpecificFailMessages:[]},_={RequiredSpoilagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredUsagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredFuelPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredProgressPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredLiquidQuantity:0,RequiredSpecial1Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial2Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial3Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial4Percent:{Active:!1,FloatValue:0,MaxValue:0},HideActionIfNotMet:!1,FailMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},SpecificFailMessages:[]},z=[],K=[],W=null,k=!1,U=!1,w=!1,Q=!1,Z=0,G=0,X=0,Y=[],J={AcceptedCards:[],AcceptedTypes:[],AcceptedTags:[],NOTAcceptedCards:[],NOTAcceptedTypes:[],NOTAcceptedTags:[],CardFilters:[],TagFilters:[]},$=!1,ee={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},ae=[],te={NeedsSpoilage:!1,NeedsUsage:!1,NeedsFuel:!1,NeedsProgress:!1,NeedsSpecial1:!1,NeedsSpecial2:!1,NeedsSpecial3:!1,NeedsSpecial4:!1,ExtraSpoilageRate:0,ExtraUsageRate:0,ExtraFuelRate:0,ExtraProgressRate:0,ExtraSpecial1Rate:0,ExtraSpecial2Rate:0,ExtraSpecial3Rate:0,ExtraSpecial4Rate:0,CookingPausedSound:null,CookingPausedNotification:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""}},ie=!1,le=[],ne=!1,oe=0,re=0,se=0,ce=[],ue=[],de=[],fe=[],ge=[],ye={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},xe=null,pe=0,Se=[],Ce=[],De=[],Te=0,ve=0,Ae=0,me=0,Ie=0,Me=0,Pe=[],Oe=0,be=0,Ve={x:0,y:0},Fe={x:0,y:0},Re={x:0,y:0},he={x:0,y:0},qe={x:0,y:0},Le={x:0,y:0},Ne={x:0,y:0},Be={x:0,y:0},He=[],Ee={x:0,y:0},je=[],_e={x:0,y:0},ze={x:0,y:0},Ke={x:0,y:0},We={x:0,y:0},ke={x:0,y:0},Ue=[],we=[],Qe=[],Ze=[],Ge={LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},AlternateLogTexts:[],TextSettings:{Active:!1,Bold:!1,Italics:!1,Underlined:!1},TextColor:{Active:!1,ColorValue:{r:0,g:0,b:0,a:0}},ScreenShake:!1,SoundEffects:[]},Xe={LogText:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},AlternateLogTexts:[],TextSettings:{Active:!1,Bold:!1,Italics:!1,Underlined:!1},TextColor:{Active:!1,ColorValue:{r:0,g:0,b:0,a:0}},ScreenShake:!1,SoundEffects:[]},Ye=!1,Je={HeadArmor:0,HeadArmorModifiers:[],HeadHitProbabilityModifier:0,TorsoArmor:0,TorsoArmorModifiers:[],TorsoHitProbabilityModifier:0,LArmArmor:0,LArmArmorModifiers:[],LArmHitProbabilityModifier:0,RArmArmor:0,RArmArmorModifiers:[],RArmHitProbabilityModifier:0,LLegArmor:0,LLegArmorModifiers:[],LLegHitProbabilityModifier:0,RLegArmor:0,RLegArmorModifiers:[],RLegHitProbabilityModifier:0},$e=!1,ea=!1,aa=0,ta=0,ia=0,la=0,na={TorsoHitProbabilityModifier:0,HeadHitProbabilityModifier:0,LArmHitProbabilityModifier:0,RArmHitProbabilityModifier:0,LLegHitProbabilityModifier:0,RLegHitProbabilityModifier:0},oa={TorsoHitProbabilityModifier:0,HeadHitProbabilityModifier:0,LArmHitProbabilityModifier:0,RArmHitProbabilityModifier:0,LLegHitProbabilityModifier:0,RLegHitProbabilityModifier:0},ra={ParentObjectID:"d0ef9db9c381e39459ca4e46c5bad95b",LocalizationKey:"StoneBurnt_CardDescription",DefaultText:"Ready to be ground into quicklime.",Text:"可以研磨以获取生石灰。"},sa=!1,ca=[],ua={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},da={ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},fa=!1,ga=100,ya=[],xa=0,pa=!1,Sa=0,Ca=[],Da=[],Ta=[],va=0,Aa=[],ma=!1,Ia=!1,Ma=!1,Pa=[],Oa=!1,ba=!1,Va=!1,Fa=!1,Ra=[],ha=!1,qa=!1,La=!1,Na=!1,Ba={InternalName:"",BackgroundSound:null,RandomNoises:[],DurabilityConditions:{SpoilageRange:{x:0,y:0},UsageRange:{x:0,y:0},FuelRange:{x:0,y:0},ProgressRange:{x:0,y:0},Special1Range:{x:0,y:0},Special2Range:{x:0,y:0},Special3Range:{x:0,y:0},Special4Range:{x:0,y:0},LiquidQuantityRange:{x:0,y:0}},StatConditions:[],TimeOfDayConditions:[]},Ha=[],Ea=[],ja=null,_a={IsSourceOfLight:!1,Priority:0,LightPos:{x:0,y:0},LightSize:{x:0,y:0},LightColor:{r:0,g:0,b:0,a:0},LightFlickerFreq:0,LightFlickerStrength:0},za=!1,Ka=!1,Wa=!1,ka=[],Ua=[],wa=[],Qa=[],Za=[],Ga=[],Xa=[],Ya=[],Ja=!1,$a=[],et=!1,at=[],tt=[],it=[],lt={RequiredSpoilagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredUsagePercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredFuelPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredProgressPercent:{Active:!1,FloatValue:0,MaxValue:0},RequiredLiquidQuantity:0,RequiredSpecial1Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial2Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial3Percent:{Active:!1,FloatValue:0,MaxValue:0},RequiredSpecial4Percent:{Active:!1,FloatValue:0,MaxValue:0},HideActionIfNotMet:!1,FailMessage:{ParentObjectID:"",LocalizationKey:"",DefaultText:"",Text:""},SpecificFailMessages:[]},nt=[],ot=0,rt=0,st=0,ct=0,ut=[],dt=!1,ft=!1,gt=[],yt=[],xt=[],pt=[],St={ModType:0,TransformInto:null,TransferSpoilage:!1,TransferUsage:!1,TransferFuel:!1,TransferCharges:!1,TransferSpecial1:!1,TransferSpecial2:!1,TransferSpecial3:!1,TransferSpecial4:!1,TransferInventory:!1,TransferSavedIngredients:!1,AverageGivenAndReceivingCards:!1,TransferLiquid:!1,ModifyDurability:!1,ModifyLiquid:!1,DropOnDestroyList:!1,LiquidEffectScaling:0,AddFlavoursFromTargetCard:!1,AddFlavoursFromOtherCard:!1,AddSpicesFromTargetCard:!1,AddSpicesFromOtherCard:!1,AddedFlavours:[],AddedSpiceTags:[],SpoilageChange:{x:0,y:0},UsageChange:{x:0,y:0},FuelChange:{x:0,y:0},ChargesChange:{x:0,y:0},LiquidQuantityChange:{x:0,y:0},Special1Change:{x:0,y:0},Special2Change:{x:0,y:0},Special3Change:{x:0,y:0},Special4Change:{x:0,y:0},StatInterpolatedDurabilityChanges:[],ScaleChangesPerPortionOfLiquid:{Active:!1,FloatValue:0},UseOtherCardForLiquidQuantity:!1},Ct=0,Dt=0,Tt=[],vt=[],At=[],mt=[],It=[],Mt=!1,Pt=!1,Ot=[],bt=[],Vt=0,Ft=!1,Rt=null,ht=null,qt=!1,Lt={SpringArt:{SeasonID:"",CardImage:null,CardBackground:null,ShowImageAboveTitle:!1},SummerArt:{SeasonID:"",CardImage:null,CardBackground:null,ShowImageAboveTitle:!1},AutumnArt:{SeasonID:"",CardImage:null,CardBackground:null,ShowImageAboveTitle:!1},WinterArt:{SeasonID:"",CardImage:null,CardBackground:null,ShowImageAboveTitle:!1},CustomSeasonsArt:[]},Nt=!1,Bt=!1,Ht=!1,Et=[],jt=[],_t=null,zt=1,Kt="d0ef9db9c381e39459ca4e46c5bad95b",Wt=[{m_FileID:0,m_PathID:168,FileName:"StoneAppear@168"}],kt=!1,Ut=null,wt=[],Qt=[],Zt={m_Name:e,m_Script:a,___key:t,___fn:i,key:l,text:n,type:o,CardType:r,CardTags:s,CardName:c,CardImage:u,CardBackground:d,ShowImageAboveTitle:f,DroppedOnDestroy:g,DropFromTrashButton:y,SpoilageTime:x,UsageDurability:p,FuelCapacity:S,Progress:C,LiquidEvaporationRate:D,SpecialDurability1:T,SpecialDurability2:v,SpecialDurability3:A,SpecialDurability4:m,DurabilitySorting:I,OnlyShowPopupsWhenEquipped:M,MiniInventoryHideDurabilities:P,CardInteractions:O,OnStatsChangeActions:b,MinQuantityLeftAfterATransfer:V,KeepName:F,ShowLiquidAsSuffix:R,DefaultLiquidContained:h,DefaultLiquidImage:q,LiquidImages:L,ExclusivelyAcceptedLiquids:N,NOTAcceptedLiquids:B,CannotGiveLiquidWithDragNDrop:H,CannotReceiveLiquidWithDragNDrop:E,DurabilityConditionsForGivingLiquid:j,DurabilityConditionsForReceivingLiquid:_,StatConditionsForGivingLiquid:z,StatConditionsForReceivingLiquid:K,ContainedLiquidTransform:W,InventoryIsHidden:k,IsMiniInventory:U,IsLockedInventory:w,IsWeaponSheath:Q,OpenOnTab:Z,MaxWeightCapacity:G,ContentWeightReduction:X,InventorySlots:Y,InventoryFilter:J,SpillsInventoryOnDestroy:$,InventorySlotsText:ee,GroupInventoryActions:ae,CookingConditions:te,TransferCookingResultsOnTransform:ie,CookingRecipes:le,DoesNotNeedToBeHeldInHand:ne,MainHandUse:oe,OffHandUse:re,BothHandsUse:se,CardsOnBoard:ce,TagsOnBoard:ue,StatValues:de,TimeValues:fe,CompletedObjectives:ge,UnlockConditionsDesc:ye,ExplicitBlueprintNeeded:xe,UnlockNotifications:pe,BlueprintCardConditions:Se,BlueprintTagConditions:Ce,BlueprintStatConditions:De,RequiredDistance:Te,RequiredWrestlingState:ve,RequiredAmbush:Ae,RequiredSelfVulnerableState:me,RequiredOpponentVulnerableState:Ie,ActionRange:Me,AmmoNeeded:Pe,AmmoUsageCost:Oe,WeaponReach:be,BaseClashValue:Ve,ClashRangedInaccuracy:Fe,ClashStealthBonus:Re,ClashIneffectiveRangeMalus:he,WrestlingClashBonus:qe,ClashVsEscapeBonus:Le,ClashVsVulnerableBonus:Ne,ClashVsChargeBonus:Be,WeaponClashStatInfluences:He,PickupFromGroundClashValue:Ee,DamageTypes:je,WeaponDamage:_e,WrestlingDamageBonus:ze,DmgVsEscapeBonus:Ke,DmgVsVulnerableBonus:We,DmgVsChargeBonus:ke,WeaponDamageStatInfluences:Ue,DurabilityCombatModifiers:we,InHandModifiers:Qe,WeaponActionStatChanges:Ze,BrokenDuringCombatLog:Ge,WeaponIneffectiveCombatLog:Xe,IsArmor:Ye,ArmorValues:Je,IsCover:$e,AppliesCoverWhenEquipped:ea,PlayerAddedCover:aa,EnemyAddedCover:ta,PlayerAddedStealth:ia,EnemyAddedStealth:la,PlayerCoverHitProbabilityModifiers:na,EnemyCoverHitProbabilityModifiers:oa,CardDescription:ra,CanBeRenamed:sa,AlternateNames:ca,LiquidSuffixName:ua,CardHelpSection:da,NotAutoSolvableEvent:fa,ObjectWeight:ga,AddedWeightFromDurabilities:ya,WeightReductionWhenEquipped:xa,NeedsRoomInLocationToSpawn:pa,TradingValue:Sa,EquipmentTags:Ca,FlavourTags:Da,SpiceTags:Ta,FlavourFadeRate:va,LiquidValidContainers:Aa,InHandWhenEquipped:ma,InstancedEnvironment:Ia,UniqueOnBoard:Ma,SpawningBlockedBy:Pa,CannotSpawnWithoutPlayerPresent:Oa,CannotSpawnDuringTickCatchup:ba,AlwaysUpdate:Va,CannotBeTrashed:Fa,CarriesOverTo:Ra,CanDragItemsToTravel:ha,DoesNotPile:qa,ToggleablePiling:La,DoesNotPinAutomatically:Na,Ambience:Ba,AlternateAmbiences:Ha,VisualEffects:Ea,WeatherEffects:ja,LightSource:_a,IsDarkPlace:za,IsHotPlace:Ka,IsTravelCard:Wa,PassiveStatEffects:ka,PassiveEffects:Ua,RemotePassiveEffects:wa,EffectsToContainer:Qa,EffectsToInventoryContent:Za,DurabilityTransferEffects:Ga,ActiveCounters:Xa,LocalCounterEffects:Ya,CannotEmptyWithAnAction:Ja,ContainedBlueprintCards:$a,ContainedBlueprintsDontStartUnlocked:et,BuildingCardConditions:at,BuildingTagConditions:tt,BuildingStatConditions:it,BuildingContainerDurabilitiesConditions:lt,BlueprintStages:nt,BuildingDaytimeCost:ot,BuildingMiniTicks:rt,DeconstructDaytimeCost:st,DeconstructMiniTicks:ct,BlueprintActionTags:ut,BPRandomSingleDrop:dt,BlueprintDoesntCountForEnvWeight:ft,BlueprintResult:gt,ResultInterpolatedDurabilityModifiers:yt,BlueprintStatModifications:xt,BlueprintCardModifications:pt,BlueprintContainerCardChanges:St,BlueprintUnlockSunsCost:Ct,ResearchedNotification:Dt,ExplorationResults:Tt,EnvironmentImprovements:vt,EnvironmentDamages:At,DefaultEnvCardDrops:mt,OldDefaultEnvCards:It,IsWeapon:Mt,IsAmmo:Pt,WeaponMoves:Ot,DismantleActions:bt,MaxLiquidCapacity:Vt,UseCoordinates:Ft,CreatedPath:Rt,OppositePath:ht,CreateInstancedMap:qt,SeasonsArt:Lt,AffectStatsOnlyWhenEquipped:Nt,AffectStatsOnlyWhenNotInBackground:Bt,AffectStatsOnlyOnBase:Ht,_gotFrom:Et,_useFor:jt,m_GameObject:_t,m_Enabled:zt,UniqueID:Kt,WhenCreatedSounds:Wt,DebugCardSorting:kt,CookingSprite:Ut,BuildSounds:wt,DeconstructSounds:Qt};export{Me as ActionRange,Xa as ActiveCounters,ya as AddedWeightFromDurabilities,Ht as AffectStatsOnlyOnBase,Nt as AffectStatsOnlyWhenEquipped,Bt as AffectStatsOnlyWhenNotInBackground,Ha as AlternateAmbiences,ca as AlternateNames,Va as AlwaysUpdate,Ba as Ambience,Pe as AmmoNeeded,Oe as AmmoUsageCost,ea as AppliesCoverWhenEquipped,Je as ArmorValues,dt as BPRandomSingleDrop,Ve as BaseClashValue,ut as BlueprintActionTags,Se as BlueprintCardConditions,pt as BlueprintCardModifications,St as BlueprintContainerCardChanges,ft as BlueprintDoesntCountForEnvWeight,gt as BlueprintResult,nt as BlueprintStages,De as BlueprintStatConditions,xt as BlueprintStatModifications,Ce as BlueprintTagConditions,Ct as BlueprintUnlockSunsCost,se as BothHandsUse,Ge as BrokenDuringCombatLog,wt as BuildSounds,at as BuildingCardConditions,lt as BuildingContainerDurabilitiesConditions,ot as BuildingDaytimeCost,rt as BuildingMiniTicks,it as BuildingStatConditions,tt as BuildingTagConditions,sa as CanBeRenamed,ha as CanDragItemsToTravel,Fa as CannotBeTrashed,Ja as CannotEmptyWithAnAction,H as CannotGiveLiquidWithDragNDrop,E as CannotReceiveLiquidWithDragNDrop,ba as CannotSpawnDuringTickCatchup,Oa as CannotSpawnWithoutPlayerPresent,d as CardBackground,ra as CardDescription,da as CardHelpSection,u as CardImage,O as CardInteractions,c as CardName,s as CardTags,r as CardType,ce as CardsOnBoard,Ra as CarriesOverTo,he as ClashIneffectiveRangeMalus,Fe as ClashRangedInaccuracy,Re as ClashStealthBonus,Be as ClashVsChargeBonus,Le as ClashVsEscapeBonus,Ne as ClashVsVulnerableBonus,ge as CompletedObjectives,$a as ContainedBlueprintCards,et as ContainedBlueprintsDontStartUnlocked,W as ContainedLiquidTransform,X as ContentWeightReduction,te as CookingConditions,le as CookingRecipes,Ut as CookingSprite,qt as CreateInstancedMap,Rt as CreatedPath,je as DamageTypes,kt as DebugCardSorting,st as DeconstructDaytimeCost,ct as DeconstructMiniTicks,Qt as DeconstructSounds,mt as DefaultEnvCardDrops,h as DefaultLiquidContained,q as DefaultLiquidImage,bt as DismantleActions,ke as DmgVsChargeBonus,Ke as DmgVsEscapeBonus,We as DmgVsVulnerableBonus,ne as DoesNotNeedToBeHeldInHand,qa as DoesNotPile,Na as DoesNotPinAutomatically,y as DropFromTrashButton,g as DroppedOnDestroy,we as DurabilityCombatModifiers,j as DurabilityConditionsForGivingLiquid,_ as DurabilityConditionsForReceivingLiquid,I as DurabilitySorting,Ga as DurabilityTransferEffects,Qa as EffectsToContainer,Za as EffectsToInventoryContent,ta as EnemyAddedCover,la as EnemyAddedStealth,oa as EnemyCoverHitProbabilityModifiers,At as EnvironmentDamages,vt as EnvironmentImprovements,Ca as EquipmentTags,N as ExclusivelyAcceptedLiquids,xe as ExplicitBlueprintNeeded,Tt as ExplorationResults,va as FlavourFadeRate,Da as FlavourTags,S as FuelCapacity,ae as GroupInventoryActions,Qe as InHandModifiers,ma as InHandWhenEquipped,Ia as InstancedEnvironment,J as InventoryFilter,k as InventoryIsHidden,Y as InventorySlots,ee as InventorySlotsText,Pt as IsAmmo,Ye as IsArmor,$e as IsCover,za as IsDarkPlace,Ka as IsHotPlace,w as IsLockedInventory,U as IsMiniInventory,Wa as IsTravelCard,Mt as IsWeapon,Q as IsWeaponSheath,F as KeepName,_a as LightSource,D as LiquidEvaporationRate,L as LiquidImages,ua as LiquidSuffixName,Aa as LiquidValidContainers,Ya as LocalCounterEffects,oe as MainHandUse,Vt as MaxLiquidCapacity,G as MaxWeightCapacity,V as MinQuantityLeftAfterATransfer,P as MiniInventoryHideDurabilities,B as NOTAcceptedLiquids,pa as NeedsRoomInLocationToSpawn,fa as NotAutoSolvableEvent,ga as ObjectWeight,re as OffHandUse,It as OldDefaultEnvCards,b as OnStatsChangeActions,M as OnlyShowPopupsWhenEquipped,Z as OpenOnTab,ht as OppositePath,Ua as PassiveEffects,ka as PassiveStatEffects,Ee as PickupFromGroundClashValue,aa as PlayerAddedCover,ia as PlayerAddedStealth,na as PlayerCoverHitProbabilityModifiers,C as Progress,wa as RemotePassiveEffects,Ae as RequiredAmbush,Te as RequiredDistance,Ie as RequiredOpponentVulnerableState,me as RequiredSelfVulnerableState,ve as RequiredWrestlingState,Dt as ResearchedNotification,yt as ResultInterpolatedDurabilityModifiers,Lt as SeasonsArt,f as ShowImageAboveTitle,R as ShowLiquidAsSuffix,Pa as SpawningBlockedBy,T as SpecialDurability1,v as SpecialDurability2,A as SpecialDurability3,m as SpecialDurability4,Ta as SpiceTags,$ as SpillsInventoryOnDestroy,x as SpoilageTime,z as StatConditionsForGivingLiquid,K as StatConditionsForReceivingLiquid,de as StatValues,ue as TagsOnBoard,fe as TimeValues,La as ToggleablePiling,Sa as TradingValue,ie as TransferCookingResultsOnTransform,Kt as UniqueID,Ma as UniqueOnBoard,ye as UnlockConditionsDesc,pe as UnlockNotifications,p as UsageDurability,Ft as UseCoordinates,Ea as VisualEffects,Ze as WeaponActionStatChanges,He as WeaponClashStatInfluences,_e as WeaponDamage,Ue as WeaponDamageStatInfluences,Xe as WeaponIneffectiveCombatLog,Ot as WeaponMoves,be as WeaponReach,ja as WeatherEffects,xa as WeightReductionWhenEquipped,Wt as WhenCreatedSounds,qe as WrestlingClashBonus,ze as WrestlingDamageBonus,i as ___fn,t as ___key,Et as _gotFrom,jt as _useFor,Zt as default,l as key,zt as m_Enabled,_t as m_GameObject,e as m_Name,a as m_Script,n as text,o as type};
