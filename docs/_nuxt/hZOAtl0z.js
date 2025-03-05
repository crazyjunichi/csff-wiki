const e="Event",t=JSON.parse('[{"key":"AdvancedMagic_Completed_Event","text":"高级魔法 - 完成","icon":"Spirit_Fire@401"},{"key":"AdvancedPottery_Completed_Event","text":"高级陶艺 - 完成","icon":"StoragePot_Clay@503"},{"key":"AnimalHusbandry_Completed_Event","text":"动物养殖 - 完成","icon":"Boar_Wild@791"},{"key":"BasicBrewing_Completed_Event","text":"基础酿造 - 完成","icon":"Bowl_Clay_Water@888"},{"key":"BasicCarpentry_Completed_Event","text":"基础木工 - 完成","icon":"LogBed@840"},{"key":"BasicCooking_Completed_Event","text":"基础烹饪 - 完成","icon":"Meat_Cooked@251"},{"key":"BasicFarming_Completed_Event","text":"基础农耕 - 完成","icon":"Hoe_Flint@932"},{"key":"BasicFishing_Completed_Event","text":"基础钓鱼 - 完成","icon":"Perch@800"},{"key":"BasicGardening_Completed_Event","text":"基础园艺 - 完成","icon":"Turnroot_Plant@321"},{"key":"BasicHerbalism_Completed_Event","text":"基础草药 - 完成","icon":"Fairyweed_Plant@589"},{"key":"BasicHunting_Completed_Event","text":"基础狩猎 - 完成","icon":"Badger@391"},{"key":"BasicLeatherClothing_Completed_Event","text":"基础皮革缝纫 - 完成","icon":"Vest_Leather@494"},{"key":"BasicLeatherCrafts_Completed_Event","text":"基础皮革制造 - 完成","icon":"Waterskin@910"},{"key":"BasicLeatherworking_Completed_Event","text":"基础制革 - 完成","icon":"Shoes_Leather@711"},{"key":"BasicMagic_Completed_Event","text":"基础魔法完成","icon":"SacredOak@445"},{"key":"BasicNeeds_Completed_Event","text":"基础需求 - 完成","icon":"ForestCaps_Item@315"},{"key":"BasicPlantwear_Completed_Event","text":"基础植物穿着 - 完成","icon":"Skirt_Reeds@587"},{"key":"BasicPottery_Completed_Event","text":"基础陶艺 - 完成","icon":"Bowl_Clay@881"},{"key":"BasicSurvival_Completed_Event","text":"基础生存-完成","icon":"Axe_Flint@252"},{"key":"BasicTanning_Completed_Event","text":"基础鞣制 - 完成","icon":"Skin_Leather@404"},{"key":"BasicTrapping_Completed_Event","text":"基础陷阱 - 完成","icon":"Partridge@490"},{"key":"BasicWeaving_Completed_Event","text":"基础编织 - 完成","icon":"Basket_Hand@913"},{"key":"BasicWoodworking_Completed_Event","text":"基础木工 - 完成","icon":"Tree1@410"},{"key":"BasicWoundTreatment_Completed_Event","text":"基础伤口治疗 - 完成","icon":"HealersMoss@846"},{"key":"Combat_EncounterTest1Event","text":"你看到了一只母鹿！","icon":"Doe_Wild@276"},{"key":"Combat_EncounterTest2Event","text":"你看到了一只母鹿！","icon":"Doe_Wild@276"},{"key":"Combat_EventBadger_1_Explore_F","text":"你看到了一只獾！","icon":"Badger_Wild@602"},{"key":"Combat_EventBear_1_Explore_F","text":"你看到了一头熊！","icon":""},{"key":"Combat_EventBoar_1_Explore_F","text":"你看到了一头野猪！","icon":"Boar_Wild@791"},{"key":"Combat_EventDoe_1_Explore_F","text":"你看到了一只母鹿！","icon":"Doe_Wild@276"},{"key":"Combat_EventFlintclaw_1_Explore","text":"你看到一只燧爪！","icon":"Spirit_Flintclaw@239"},{"key":"Combat_EventFox_1_Explore","text":"你看到了一只狐狸！","icon":"Fox_Wild@352"},{"key":"Combat_EventGreaterMudling_1_Explore_F","text":"你看到一头大泥浆怪！","icon":""},{"key":"Combat_EventMudling_1_Explore_F","text":"你看到一只泥浆怪！","icon":""},{"key":"Combat_EventPartridge_1","text":"你看到一只灰山鹑！","icon":"Partridge_Wild@860"},{"key":"Combat_EventPixie_1_Explore_F","text":"你看到了一群小妖精！","icon":""},{"key":"Combat_EventSquirrel_1","text":"你看到了一只松鼠","icon":"Squirrel_Wild@360"},{"key":"Combat_EventStag_1_Explore","text":"你看到了一头公鹿！","icon":"Stag_Wild@551"},{"key":"Combat_EventWolfPack_1_Explore_F","text":"你看到了狼群！","icon":"Wolf_Pack@598"},{"key":"Combat_EventWolf_1_Explore_F","text":"你看到了一只狼！","icon":"Wolf_Wild@264"},{"key":"Event_AnxietyAttack","text":"无法控制焦虑！","icon":"Void@795"},{"key":"Event_BadgerSpiritAngry","text":"獾精魄","icon":"Badger_Wild@602"},{"key":"Event_BadgerSpiritBlessingGranted","text":"赐福","icon":"Badger_Wild@602"},{"key":"Event_BadgerSpiritLeft","text":"獾精魄","icon":"Badger_Wild@602"},{"key":"Event_BadgerSpiritSummoning","text":"召唤仪式","icon":"Badger_Wild@602"},{"key":"Event_BadgerSpiritSummoningGranted","text":"召唤仪式","icon":"Badger_Wild@602"},{"key":"Event_BadgerSpiritUsedAllPower","text":"獾精魄","icon":"Badger_Wild@602"},{"key":"Event_BeesSwarming","text":"A Bee Swarm!","icon":"BeeSwarm@428"},{"key":"Event_BoarSpiritAngry","text":"野猪精魄","icon":"Boar_Wild@791"},{"key":"Event_BoarSpiritBlessingGranted","text":"赐福","icon":"Boar_Wild@791"},{"key":"Event_BoarSpiritLeft","text":"野猪精魄","icon":"Boar_Wild@791"},{"key":"Event_BoarSpiritSummoning","text":"召唤仪式","icon":"Boar_Wild@791"},{"key":"Event_BoarSpiritSummoningGranted","text":"召唤仪式","icon":"Boar_Wild@791"},{"key":"Event_BoarSpiritUsedAllPower","text":"野猪精魄","icon":"Boar_Wild@791"},{"key":"Event_DarknessSpiritAngry","text":"黑暗精魄","icon":"Darkness_Old@764"},{"key":"Event_DarknessSpiritAppeared","text":"黑暗精魄","icon":"Darkness_Old@764"},{"key":"Event_DarknessSpiritBound","text":"黑暗精魄","icon":"Darkness_Old@764"},{"key":"Event_DarknessSpiritLeft","text":"黑暗精魄","icon":"Darkness_Old@764"},{"key":"Event_DarknessSpiritUsedAllPower","text":"黑暗精魄","icon":"Darkness_Old@764"},{"key":"Event_DeathContentment","text":"Death","icon":"Brushwood@842"},{"key":"Event_DeathGeneral","text":"Death","icon":"Brushwood@842"},{"key":"Event_DeathHypothermia","text":"Death","icon":"Woods5_Winter@670"},{"key":"Event_DeathNutrition","text":"Death","icon":"WeightUnderweight_Old@679"},{"key":"Event_DeerSpiritAngry","text":"鹿精魄","icon":"Stag_Wild@551"},{"key":"Event_DeerSpiritBlessingGranted","text":"赐福","icon":"Stag_Wild@551"},{"key":"Event_DeerSpiritLeft","text":"鹿精魄","icon":"Stag_Wild@551"},{"key":"Event_DeerSpiritSummoning","text":"召唤仪式","icon":"Stag_Wild@551"},{"key":"Event_DeerSpiritSummoningGranted","text":"召唤仪式","icon":"Stag_Wild@551"},{"key":"Event_DeerSpiritUsedAllPower","text":"鹿精魄","icon":"Stag_Wild@551"},{"key":"Event_DogFriendAnger","text":"Ouch!!!!","icon":""},{"key":"Event_DogFriendGift","text":"A gift!","icon":""},{"key":"Event_DrumMenu","text":"鼓","icon":""},{"key":"Event_EarthSpiritAngry","text":"大地精魄","icon":"Spirit_Earth@308"},{"key":"Event_EarthSpiritBlessingGranted","text":"赐福","icon":"Spirit_Earth@308"},{"key":"Event_EarthSpiritLeft","text":"大地精魄","icon":""},{"key":"Event_EarthSpiritSummoning","text":"召唤仪式","icon":"Spirit_Earth@308"},{"key":"Event_EarthSpiritSummoningGranted","text":"召唤仪式","icon":"Spirit_Earth@308"},{"key":"Event_EarthSpiritUsedAllPower","text":"大地精魄","icon":"Spirit_Earth@308"},{"key":"Event_FallAbrasion","text":"坠落！","icon":"WeatherPartiallyCloudy_Full@221"},{"key":"Event_FallBruise","text":"坠落！","icon":"WeatherPartiallyCloudy_Full@221"},{"key":"Event_FallFracture","text":"坠落！","icon":"WeatherPartiallyCloudy_Full@221"},{"key":"Event_FallLaceration","text":"坠落！","icon":"WeatherPartiallyCloudy_Full@221"},{"key":"Event_FallSprains","text":"坠落！","icon":"WeatherPartiallyCloudy_Full@221"},{"key":"Event_FearSpiritAngry","text":"恐惧精魄","icon":"Spirit_Fear@725"},{"key":"Event_FearSpiritSummoningGranted","text":"召唤仪式","icon":"Spirit_Fear@725"},{"key":"Event_FearSpiritUsedAllPower","text":"恐惧","icon":"Spirit_Fear@725"},{"key":"Event_FireSpiritAngry","text":"火精魄","icon":"Spirit_Fire@401"},{"key":"Event_FireSpiritBlessingGranted","text":"赐福","icon":"Spirit_Fire@401"},{"key":"Event_FireSpiritHearth","text":"火精魄","icon":"Spirit_Fire@401"},{"key":"Event_FireSpiritLeft","text":"火精魄","icon":"Spirit_Fire@401"},{"key":"Event_FireSpiritSummoning","text":"召唤仪式","icon":"Spirit_Fire@401"},{"key":"Event_FireSpiritSummoningGranted","text":"召唤仪式","icon":"Spirit_Fire@401"},{"key":"Event_FireSpiritUsedAllPower","text":"火精魄","icon":"Spirit_Fire@401"},{"key":"Event_FlintclawDefeated","text":"燧爪被击败了！","icon":"Spirit_Flintclaw@239"},{"key":"Event_FlintclawSpiritAngry","text":"燧爪精魄","icon":"Spirit_Flintclaw@239"},{"key":"Event_FlintclawSpiritAppeared","text":"燧爪精魄","icon":"Spirit_Flintclaw@239"},{"key":"Event_FlintclawSpiritLeft","text":"燧爪精魄","icon":"Spirit_Flintclaw@239"},{"key":"Event_FlintclawSpiritSoulBound","text":"燧爪精魄","icon":"Spirit_Flintclaw@239"},{"key":"Event_FlintclawSpiritUsedAllPower","text":"燧爪精魄","icon":"Spirit_Flintclaw@239"},{"key":"Event_FlintSpiritBlessingGranted","text":"赐福","icon":"Spirit_Fire@401"},{"key":"Event_FloodDamageAreWasFlooded","text":"淹没地区","icon":"River2@237"},{"key":"Event_FloodDamageFloodWaters","text":"洪水","icon":"RiverShore@847"},{"key":"Event_FluteTunes1","text":"第1页","icon":"Flute@647"},{"key":"Event_FluteTunes2","text":"第2页","icon":"Flute@647"},{"key":"Event_FluteTunes3","text":"第3页","icon":"Flute@647"},{"key":"Event_FoxSpiritAngry","text":"狐精魄","icon":"Fox_Wild@352"},{"key":"Event_FoxSpiritBlessingGranted","text":"赐福","icon":"Fox_Wild@352"},{"key":"Event_FoxSpiritLeft","text":"狐精魄","icon":"Fox_Wild@352"},{"key":"Event_FoxSpiritSummoning","text":"召唤仪式","icon":"Fox_Wild@352"},{"key":"Event_FoxSpiritSummoningGranted","text":"召唤仪式","icon":"Fox_Wild@352"},{"key":"Event_FoxSpiritUsedAllPower","text":"狐精魄","icon":"Fox_Wild@352"},{"key":"Event_FrostbiteAppeared","text":"冻伤","icon":"Cold@266"},{"key":"Event_FrostNipAppeared","text":"冻疮","icon":"Cold@266"},{"key":"Event_GodExperience1a","text":"Divine Insight","icon":"God@663"},{"key":"Event_GodExperience1b","text":"Divine Insight","icon":"God@663"},{"key":"Event_GodExperience1c","text":"Divine Insight","icon":"God@663"},{"key":"Event_GodExperience1d","text":"Divine Insight","icon":"God@663"},{"key":"Event_GodExperience1e","text":"Divine Insight","icon":"God@663"},{"key":"Event_GodExperience1f","text":"Divine Insight","icon":"God@663"},{"key":"Event_GodExperience1g","text":"Divine Insight","icon":"God@663"},{"key":"Event_GodExperience1z","text":"Divine Insight","icon":"God@663"},{"key":"Event_GodExperience1zz","text":"Divine Insight","icon":"God@663"},{"key":"Event_HuntedExperience1a","text":"Divine Insight","icon":"WeatherClear_Full@948"},{"key":"Event_HuntedExperience1b","text":"Divine Insight","icon":"WeatherClear_Full@948"},{"key":"Event_HuntedExperience1c","text":"Divine Insight","icon":"WeatherClear_Full@948"},{"key":"Event_HuntedExperience1d","text":"Divine Insight","icon":"WeatherClear_Full@948"},{"key":"Event_HuntedExperience1e","text":"Divine Insight","icon":"WeatherClear_Full@948"},{"key":"Event_HuntedExperience1f","text":"Divine Insight","icon":"WeatherClear_Full@948"},{"key":"Event_HuntedExperience1g","text":"Divine Insight","icon":"WeatherClear_Full@948"},{"key":"Event_MistGateGone","text":"迷雾","icon":"River1@654"},{"key":"Event_MouseDamage","text":"Mouse Damage","icon":"Mouse@376"},{"key":"Event_NewTuneAdvanced","text":"进阶之调","icon":"Flute@647"},{"key":"Event_NewTuneCave","text":"洞穴之调","icon":"Flute@647"},{"key":"Event_NewTuneHappy","text":"欢快之调","icon":"Flute@647"},{"key":"Event_NewTuneLonely","text":"孤独之调","icon":"Flute@647"},{"key":"Event_NewTuneLostWoods","text":"迷林幽径之调","icon":"Flute@647"},{"key":"Event_NewTuneNothing","text":"作曲失败","icon":"Flute@647"},{"key":"Event_NewTuneRiver","text":"溪流之调","icon":"Flute@647"},{"key":"Event_NewTuneSad","text":"忧伤之调","icon":"Flute@647"},{"key":"Event_NewTuneSimple","text":"简易之调","icon":"Flute@647"},{"key":"Event_Nightmare","text":"梦魇！","icon":"Watcher1a@342"},{"key":"Event_NightTerror","text":"夜惧！","icon":"Spirit_Fear@725"},{"key":"Event_SpiderNight","text":"A Spider bit me!","icon":""},{"key":"Event_SpiritsEverywhere1a","text":"Perspective Insight","icon":"Darkness@522"},{"key":"Event_SpiritsEverywhere1b","text":"Void Insight","icon":"Darkness@522"},{"key":"Event_SpiritsEverywhere1c","text":"Void Insight","icon":"Darkness@522"},{"key":"Event_SpiritsEverywhere1d","text":"Void Insight","icon":"Darkness@522"},{"key":"Event_SpiritsEverywhere1e","text":"Void Insight","icon":"Darkness@522"},{"key":"Event_SpiritsEverywhere1f","text":"Void Insight","icon":"Darkness@522"},{"key":"Event_SpiritsEverywhere1g","text":"Void Insight","icon":"Darkness@522"},{"key":"Event_Storm","text":"The wind is too strong!","icon":"WeatherStorm_Full@219"},{"key":"Event_StormDamage","text":"Storm Damage","icon":"Sea@734"},{"key":"Event_VoidExperience1a","text":"Void Insight","icon":"Void@795"},{"key":"Event_VoidExperience1b","text":"Void Insight","icon":"Void@795"},{"key":"Event_VoidExperience1c","text":"Void Insight","icon":"Void@795"},{"key":"Event_VoidExperience1d","text":"Void Insight","icon":"Void@795"},{"key":"Event_VoidExperience1e","text":"Void Insight","icon":"Void@795"},{"key":"Event_VoidExperience1f","text":"Void Insight","icon":"Void@795"},{"key":"Event_VoidExperience1g","text":"Void Insight","icon":"Void@795"},{"key":"Event_Vomit","text":"呕吐！","icon":"AloeGel_Old@486"},{"key":"Event_WatchedExperience1a","text":"Watcher","icon":"Watcher1@898"},{"key":"Event_WatchedExperience1b","text":"Watcher","icon":"Watcher2@538"},{"key":"Event_WatchedExperience1c","text":"Watcher","icon":"Watcher2@538"},{"key":"Event_WatchedExperience1d","text":"Watcher","icon":"Watcher3@521"},{"key":"Event_WatchedExperience1e","text":"Watcher","icon":"Watcher3@521"},{"key":"Event_WatchedExperience1f","text":"Watcher","icon":"Watcher4@937"},{"key":"Event_WatchedExperience1gGod","text":"Watcher","icon":"Watcher4@937"},{"key":"Event_WatchedExperience1gVoid","text":"Watcher","icon":"Watcher4@937"},{"key":"Event_WaterSpiritAngry","text":"水精魄","icon":"Spirit_Water@814"},{"key":"Event_WaterSpiritBlessingGranted","text":"赐福","icon":"Spirit_Water@814"},{"key":"Event_WaterSpiritLeft","text":"水精魄","icon":"Spirit_Water@814"},{"key":"Event_WaterSpiritSummoning","text":"召唤仪式","icon":"Spirit_Water@814"},{"key":"Event_WaterSpiritSummoningGranted","text":"召唤仪式","icon":"Spirit_Water@814"},{"key":"Event_WaterSpiritUsedAllPower","text":"次级水精魄","icon":"Spirit_Water@814"},{"key":"Event_WestonTalk1a","text":"Weston","icon":"Weston@517"},{"key":"Event_WillOWisp_Grove1","text":"你醒了！","icon":"WillOWisp@718"},{"key":"Event_WillOWisp_Grove2","text":"追逐鬼火","icon":"WillOWisp@718"},{"key":"Event_WillOWisp_RiverClearing","text":"河畔的空地","icon":"WillOWisp@718"},{"key":"Event_WinterStormWind","text":"风太大了！","icon":"WeatherStorm_Full@219"},{"key":"Event_WolfSpiritAngry","text":"狼精魄","icon":"Wolf_Wild@264"},{"key":"Event_WolfSpiritBlessingGranted","text":"赐福","icon":"Wolf_Wild@264"},{"key":"Event_WolfSpiritLeft","text":"狼精魄","icon":"Wolf_Wild@264"},{"key":"Event_WolfSpiritSummoning","text":"召唤仪式","icon":"Wolf_Wild@264"},{"key":"Event_WolfSpiritSummoningGranted","text":"召唤仪式","icon":"Wolf_Wild@264"},{"key":"Event_WolfSpiritUsedAllPower","text":"狼精魄","icon":"Wolf_Wild@264"},{"key":"ExploreTheFairyHole_Completed_Event","text":"探索仙灵洞 - 完成","icon":"FeyHole@365"},{"key":"FireBasics_Completed_Event","text":"生火 - 完成","icon":"Campfire_On@354"},{"key":"FoodPreservation_Completed_Event","text":"食物保存 - 完成","icon":"Jar_Clay@668"},{"key":"FractureAndSprainTreatment_Completed_Event","text":"扭伤与骨折治疗 - 完成","icon":"Fairyweed_Item@539"},{"key":"FurClothing_Completed_Event","text":"毛皮缝纫 - 完成","icon":"Mittens@678"},{"key":"ImprovisedShelter_Completed_Event","text":"临时庇护所 - 完成","icon":"ImprovisedShelter@606"},{"key":"IntermediateCooking_Completed_Event","text":"中级烹饪 - 完成","icon":"SaturationCauldron@637"},{"key":"IntermediateGardening_Completed_Event","text":"中级园艺 - 完成","icon":"CompostBin@925"},{"key":"IntermediateHunting_Completed_Event","text":"中级狩猎 - 完成","icon":"Doe@543"},{"key":"IntermediateMagic_Completed_Event","text":"中级魔法 - 完成","icon":"Amulet@419"},{"key":"IntermediatePlantwear_Completed_Event","text":"中级植物穿着 - 完成","icon":"Shoes_Bark@877"},{"key":"IntermediatePottery_Completed_Event","text":"中级陶艺 - 完成","icon":"Oven_On@446"},{"key":"IntermediateTrapping_Completed_Event","text":"中级陷阱 - 完成","icon":"Partridge@490"},{"key":"IntermediateWeaving_Completed_Event","text":"中级编织-完成","icon":"Vest_Leather@494"},{"key":"MudHutImprovements_Completed_Event","text":"泥屋改造-完成","icon":"Fireplace_On@353"},{"key":"MudHut_Completed_Event","text":"泥屋-完成","icon":"MudHut_Outside@426"},{"key":"MudWorkingTools_Completed_Event","text":"泥瓦工具 - 完成","icon":"Shovel@722"},{"key":"Number1_Completed_Event","text":"人有三急 上小号 完成","icon":"RiverShore@847"},{"key":"Number2_Completed_Event","text":"人有三急 上大号 完成","icon":"Woods3@269"},{"key":"PoultryFarming_Completed_Event","text":"禽类养殖 - 完成","icon":"Partridge_Chick@741"},{"key":"Resting_Completed_Event","text":"休息结束","icon":"RiverShore@847"},{"key":"ShelteredSleep_Completed_Event","text":"睡在窝里 - 完成","icon":"ImprovisedShelter@606"},{"key":"Skinning_Completed_Event","text":"剥皮 - 完成","icon":"Skin_Cured@505"},{"key":"STREAMLINED_AdvancedPottery_Completed_Event","text":"高级陶艺 - 完成","icon":""},{"key":"STREAMLINED_BasicArchery_Completed_Event","text":"基础箭术 - 完成","icon":"Bow@383"},{"key":"STREAMLINED_BasicBaking_Completed_Event","text":"基础烘焙 - 完成","icon":"Acorns@605"},{"key":"STREAMLINED_BasicCarpentry_Completed_Event","text":"基础木工 - 完成","icon":""},{"key":"STREAMLINED_BasicCooking_Completed_Event","text":"基础烹饪 - 完成","icon":"Meat_Cooked@251"},{"key":"STREAMLINED_BasicFarming_Completed_Event","text":"基础农耕 - 完成","icon":""},{"key":"STREAMLINED_BasicFishing_Completed_Event","text":"基础钓鱼  - 完成","icon":"Perch@800"},{"key":"STREAMLINED_BasicFurnitureMaking_Completed_Event","text":"家具制造 - 完成","icon":""},{"key":"STREAMLINED_BasicGardening_Completed_Event","text":"基础园艺 - 完成","icon":"Turnroot_Plant@321"},{"key":"STREAMLINED_BasicHerbalism_Completed_Event","text":"基础草药 - 完成","icon":"Appleweed_Item@669"},{"key":"STREAMLINED_BasicHunting_Completed_Event","text":"基础狩猎 - 完成","icon":"Badger@391"},{"key":"STREAMLINED_BasicLeatherworking_Completed_Event","text":"基础制革 - 完成","icon":"Shoes_Leather@711"},{"key":"STREAMLINED_BasicNeeds_Completed_Event","text":"基础需求 - 完成","icon":"ForestCaps_Item@315"},{"key":"STREAMLINED_BasicPottery_Completed_Event","text":"基础陶艺 - 完成","icon":"Bowl_Clay@881"},{"key":"STREAMLINED_BasicSpearfighting_Completed_Event","text":"基础矛术 - 完成","icon":"Spear_Flint@393"},{"key":"STREAMLINED_BasicSurvivalGear_Completed_Event","text":"基础生存装备 - 完成","icon":""},{"key":"STREAMLINED_BasicTailoring_Completed_Event","text":"基础纺织 - 完成","icon":"Vest_Leather@494"},{"key":"STREAMLINED_BasicTrapping_Completed_Event","text":"基础陷阱 - 完成","icon":"Partridge@490"},{"key":"STREAMLINED_BasicWeaving_Completed_Event","text":"基础编织 - 完成","icon":"Basket_Hand@913"},{"key":"STREAMLINED_BasicWoodworking_Completed_Event","text":"基础木工 - 完成","icon":"Tree1@410"},{"key":"STREAMLINED_BasicWoundTreatment_Completed_Event","text":"基础伤口治疗 - 完成","icon":"HealersMoss@846"},{"key":"STREAMLINED_BeastAffinity_Completed_Event","text":"野兽亲和 - 完成","icon":""},{"key":"STREAMLINED_ChickenHusbandry_Completed_Event","text":"禽类养殖 - 完成","icon":"Partridge_Wild@860"},{"key":"STREAMLINED_Drying_Completed_Event","text":"干燥 - 完成","icon":""},{"key":"STREAMLINED_EarthAffinity_Completed_Event","text":"大地亲和 - 完成","icon":""},{"key":"STREAMLINED_FireAffinity_Completed_Event","text":"火亲和 - 完成","icon":""},{"key":"STREAMLINED_FireBasics_Completed_Event","text":"生火 - 完成","icon":"Campfire_On@354"},{"key":"STREAMLINED_FurClothing_Completed_Event","text":"毛皮缝纫 - 完成","icon":"Fur_Leather@513"},{"key":"STREAMLINED_Hearth_Completed_Event","text":"火炉 - 完成","icon":""},{"key":"STREAMLINED_HomeImprovements_Completed_Event","text":"家居升级 - 完成","icon":"Fireplace_On@353"},{"key":"STREAMLINED_HouseBuilding_Completed_Event","text":"建造房屋 - 完成","icon":""},{"key":"STREAMLINED_ImprovisedClothing_Completed_Event","text":"简易缝纫 - 完成","icon":"Skirt_Reeds@587"},{"key":"STREAMLINED_ImprovisedShelter_Completed_Event","text":"临时庇护所 - 完成","icon":"ImprovisedShelter@606"},{"key":"STREAMLINED_IntermediateArchery_Completed_Event","text":"中级箭术 - 完成","icon":"Bow@383"},{"key":"STREAMLINED_IntermediateBaking_Completed_Event","text":"中级烘焙 - 完成","icon":""},{"key":"STREAMLINED_IntermediateCooking_Completed_Event","text":"中级烹饪 - 完成","icon":"SaturationCauldron@637"},{"key":"STREAMLINED_IntermediateCraftmanship_Completed_Event","text":"中级手工 - 完成","icon":""},{"key":"STREAMLINED_IntermediateFishing_Completed_Event","text":"中级捕鱼 - 完成","icon":""},{"key":"STREAMLINED_IntermediateFurnitureMaking_Completed_Event","text":"中级家具制造 - 完成","icon":""},{"key":"STREAMLINED_IntermediateGardening_Completed_Event","text":"中级园艺 - 完成","icon":""},{"key":"STREAMLINED_IntermediateHerbalism_Completed_Event","text":"中级草药 - 完成","icon":""},{"key":"STREAMLINED_IntermediateHunting_Completed_Event","text":"中级狩猎 - 完成","icon":"Doe@543"},{"key":"STREAMLINED_IntermediateLeatherworking_Completed_Event","text":"中级鞣制 - 完成","icon":"Skin_Leather@404"},{"key":"STREAMLINED_IntermediatePottery_Completed_Event","text":"中级陶艺 - 完成","icon":"Oven_On@446"},{"key":"STREAMLINED_IntermediateSurvivalGear_Completed_Event","text":"简易生存装备 - 完成","icon":""},{"key":"STREAMLINED_IntermediateTailoring_Completed_Event","text":"中级纺织-完成","icon":""},{"key":"STREAMLINED_IntermediateTrapping_Completed_Event","text":"中级陷阱 - 完成","icon":"Partridge@490"},{"key":"STREAMLINED_IntermediateTravelingGear_Completed_Completed_Event","text":"中级旅行装备 - 完成","icon":"BackpackLeatherIcon_Old@659"},{"key":"STREAMLINED_Knapping_Completed_Event","text":"石工 - 完成","icon":"Axe_Flint@252"},{"key":"STREAMLINED_LeatherArmor_Completed_Event","text":"皮革护甲 - 完成","icon":""},{"key":"STREAMLINED_LeatherClothing_Completed_Event","text":"皮革缝纫 - 完成","icon":""},{"key":"STREAMLINED_PoultryFarming_Completed_Completed_Event","text":"禽类养殖 - 完成","icon":"Partridge_Chick@741"},{"key":"STREAMLINED_Repairs_Completed_Event","text":"维修 - 完成","icon":"ThreadedNeedle@429"},{"key":"STREAMLINED_SettlingDown_Completed_Event","text":"定居 - 完成","icon":"MudHut_Outside@426"},{"key":"STREAMLINED_Skinning_Completed_Event","text":"剥皮 - 完成","icon":"Skin_Cured@505"},{"key":"STREAMLINED_StayingWarm_Completed_Completed_Event","text":"保持温暖 - 完成","icon":""},{"key":"STREAMLINED_SurvivingTheNight_Completed_Event","text":"度过夜晚 - 完成","icon":"Campfire_On@354"},{"key":"STREAMLINED_WaterAffinity_Completed_Event","text":"水亲和 - 完成","icon":"Thirst_Old@462"},{"key":"STREAMLINED_WillOWisp_Completed_Event","text":"跟随鬼火 - 完成","icon":"WillOWisp@718"},{"key":"STREAMLINED_Woodcarving_Completed_Event","text":"木雕 - 完成","icon":""},{"key":"STREAMLINED_WoodcuttingBasics_Completed_Event","text":"基础伐木 - 完成","icon":"SmallTree@933"},{"key":"SurvivingTheNight_Completed_Event","text":"度过夜晚 - 完成","icon":"Campfire_On@354"},{"key":"TestEvent2","text":"Bear eats the berries","icon":""},{"key":"TestEvent","text":"Bear Attack","icon":""},{"key":"TestEvent_BoarEncounter","text":"I see a Boar!","icon":""},{"key":"Track_EventBoar","text":"Tracking the Boar","icon":""},{"key":"Track_EventBoarFail","text":"Fail","icon":"Jungle@534"},{"key":"Track_EventBoarSucess","text":"Sucess","icon":""},{"key":"Track_EventCobra","text":"Tracking the Cobra","icon":""},{"key":"Track_EventCobraFail","text":"Fail","icon":""},{"key":"Track_EventCobraSucess","text":"Sucess","icon":""},{"key":"Track_EventDrone","text":"Tracking the Macaque","icon":""},{"key":"Track_EventGoat","text":"Tracking the Goat","icon":""},{"key":"Track_EventGoatFail","text":"Fail","icon":""},{"key":"Track_EventGoatSucess","text":"Sucess","icon":""},{"key":"Track_EventLizard","text":"Tracking the Lizard","icon":""},{"key":"Track_EventLizardFail","text":"Fail","icon":""},{"key":"Track_EventLizardSucess","text":"Sucess","icon":""},{"key":"Track_EventSeaHound","text":"Tracking the Macaque","icon":""},{"key":"Track_EventShark","text":"Tracking the Macaque","icon":""},{"key":"WillOWisp_Completed_Event","text":"跟随鬼火 - 完成","icon":"WillOWisp@718"},{"key":"WinterSurvival_Completed_Event","text":"冬季生存 - 完成","icon":"River1_Winter@841"},{"key":"Woodcarving_Completed_Event","text":"木雕 - 完成","icon":"WoodCarving_Warrior@379"},{"key":"WoodcuttingBasics_Completed_Event","text":"基础伐木 - 完成","icon":"SmallTree@933"}]'),i=!0,n={title:e,list:t,useImage:i};export{n as default,t as list,e as title,i as useImage};
