gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDGame_9595overObjects1= [];
gdjs.Game_32OverCode.GDGame_9595overObjects2= [];
gdjs.Game_32OverCode.GDbackgroundObjects1= [];
gdjs.Game_32OverCode.GDbackgroundObjects2= [];
gdjs.Game_32OverCode.GDplayer_9595inputObjects1= [];
gdjs.Game_32OverCode.GDplayer_9595inputObjects2= [];
gdjs.Game_32OverCode.GDnamenameObjects1= [];
gdjs.Game_32OverCode.GDnamenameObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Game_over"), gdjs.Game_32OverCode.GDGame_9595overObjects1);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Game_32OverCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDbackgroundObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDGame_9595overObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDGame_9595overObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGame_9595overObjects1.length = 0;
gdjs.Game_32OverCode.GDGame_9595overObjects2.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Game_32OverCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Game_32OverCode.GDnamenameObjects1.length = 0;
gdjs.Game_32OverCode.GDnamenameObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
