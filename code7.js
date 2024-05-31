gdjs.Tempura_32ControlCode = {};
gdjs.Tempura_32ControlCode.GDControlObjects1= [];
gdjs.Tempura_32ControlCode.GDControlObjects2= [];
gdjs.Tempura_32ControlCode.GDNextObjects1= [];
gdjs.Tempura_32ControlCode.GDNextObjects2= [];
gdjs.Tempura_32ControlCode.GDbackObjects1= [];
gdjs.Tempura_32ControlCode.GDbackObjects2= [];
gdjs.Tempura_32ControlCode.GDplayer_9595inputObjects1= [];
gdjs.Tempura_32ControlCode.GDplayer_9595inputObjects2= [];
gdjs.Tempura_32ControlCode.GDnamenameObjects1= [];
gdjs.Tempura_32ControlCode.GDnamenameObjects2= [];


gdjs.Tempura_32ControlCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Tempura_32ControlCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tempura_32ControlCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.Tempura_32ControlCode.GDNextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Tempura_32ControlCode.GDNextObjects1[k] = gdjs.Tempura_32ControlCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.Tempura_32ControlCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tempura Intro", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Control"), gdjs.Tempura_32ControlCode.GDControlObjects1);
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Tempura_32ControlCode.GDNextObjects1);
{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDNextObjects1.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDNextObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 2 / 3);
}
}{for(var i = 0, len = gdjs.Tempura_32ControlCode.GDControlObjects1.length ;i < len;++i) {
    gdjs.Tempura_32ControlCode.GDControlObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "775a79b3d3e7bcccf78c92e4a559d328630b2a029a20ad03127f3ca56e453972_Energizing.aac", true, 70, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Tempura_32ControlCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tempura_32ControlCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.Tempura_32ControlCode.GDbackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Tempura_32ControlCode.GDbackObjects1[k] = gdjs.Tempura_32ControlCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.Tempura_32ControlCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Tempura_32ControlCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Tempura_32ControlCode.GDControlObjects1.length = 0;
gdjs.Tempura_32ControlCode.GDControlObjects2.length = 0;
gdjs.Tempura_32ControlCode.GDNextObjects1.length = 0;
gdjs.Tempura_32ControlCode.GDNextObjects2.length = 0;
gdjs.Tempura_32ControlCode.GDbackObjects1.length = 0;
gdjs.Tempura_32ControlCode.GDbackObjects2.length = 0;
gdjs.Tempura_32ControlCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Tempura_32ControlCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Tempura_32ControlCode.GDnamenameObjects1.length = 0;
gdjs.Tempura_32ControlCode.GDnamenameObjects2.length = 0;

gdjs.Tempura_32ControlCode.eventsList0(runtimeScene);

return;

}

gdjs['Tempura_32ControlCode'] = gdjs.Tempura_32ControlCode;
