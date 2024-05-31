gdjs.Start_32GameCode = {};
gdjs.Start_32GameCode.GDStart_9595GameObjects1= [];
gdjs.Start_32GameCode.GDStart_9595GameObjects2= [];
gdjs.Start_32GameCode.GDplay_9595btnObjects1= [];
gdjs.Start_32GameCode.GDplay_9595btnObjects2= [];
gdjs.Start_32GameCode.GDbackgroundObjects1= [];
gdjs.Start_32GameCode.GDbackgroundObjects2= [];
gdjs.Start_32GameCode.GDplayer_9595inputObjects1= [];
gdjs.Start_32GameCode.GDplayer_9595inputObjects2= [];
gdjs.Start_32GameCode.GDnamenameObjects1= [];
gdjs.Start_32GameCode.GDnamenameObjects2= [];


gdjs.Start_32GameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play_btn"), gdjs.Start_32GameCode.GDplay_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32GameCode.GDplay_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Start_32GameCode.GDplay_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32GameCode.GDplay_9595btnObjects1[k] = gdjs.Start_32GameCode.GDplay_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Start_32GameCode.GDplay_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Name Scene", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Start_Game"), gdjs.Start_32GameCode.GDStart_9595GameObjects1);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Start_32GameCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("play_btn"), gdjs.Start_32GameCode.GDplay_9595btnObjects1);
{for(var i = 0, len = gdjs.Start_32GameCode.GDStart_9595GameObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDStart_9595GameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDplay_9595btnObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDplay_9595btnObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDbackgroundObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "72e9c7d27d07ead77a928dacdf3947412c9aa607e22b3a94d26fa7f9412224ee_01 - super mushroom eater revised and fixed.aac", true, 70, 1);
}}

}


};

gdjs.Start_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32GameCode.GDStart_9595GameObjects1.length = 0;
gdjs.Start_32GameCode.GDStart_9595GameObjects2.length = 0;
gdjs.Start_32GameCode.GDplay_9595btnObjects1.length = 0;
gdjs.Start_32GameCode.GDplay_9595btnObjects2.length = 0;
gdjs.Start_32GameCode.GDbackgroundObjects1.length = 0;
gdjs.Start_32GameCode.GDbackgroundObjects2.length = 0;
gdjs.Start_32GameCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Start_32GameCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Start_32GameCode.GDnamenameObjects1.length = 0;
gdjs.Start_32GameCode.GDnamenameObjects2.length = 0;

gdjs.Start_32GameCode.eventsList0(runtimeScene);

return;

}

gdjs['Start_32GameCode'] = gdjs.Start_32GameCode;
