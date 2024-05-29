gdjs.Buttermilk_32ControlCode = {};
gdjs.Buttermilk_32ControlCode.GDControlObjects1= [];
gdjs.Buttermilk_32ControlCode.GDControlObjects2= [];
gdjs.Buttermilk_32ControlCode.GDNextObjects1= [];
gdjs.Buttermilk_32ControlCode.GDNextObjects2= [];
gdjs.Buttermilk_32ControlCode.GDplayer_9595inputObjects1= [];
gdjs.Buttermilk_32ControlCode.GDplayer_9595inputObjects2= [];
gdjs.Buttermilk_32ControlCode.GDnamenameObjects1= [];
gdjs.Buttermilk_32ControlCode.GDnamenameObjects2= [];


gdjs.Buttermilk_32ControlCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Buttermilk_32ControlCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Buttermilk_32ControlCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.Buttermilk_32ControlCode.GDNextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Buttermilk_32ControlCode.GDNextObjects1[k] = gdjs.Buttermilk_32ControlCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.Buttermilk_32ControlCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Buttermilk Intro", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Control"), gdjs.Buttermilk_32ControlCode.GDControlObjects1);
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Buttermilk_32ControlCode.GDNextObjects1);
{for(var i = 0, len = gdjs.Buttermilk_32ControlCode.GDNextObjects1.length ;i < len;++i) {
    gdjs.Buttermilk_32ControlCode.GDNextObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 2.1 / 3);
}
}{for(var i = 0, len = gdjs.Buttermilk_32ControlCode.GDControlObjects1.length ;i < len;++i) {
    gdjs.Buttermilk_32ControlCode.GDControlObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};

gdjs.Buttermilk_32ControlCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Buttermilk_32ControlCode.GDControlObjects1.length = 0;
gdjs.Buttermilk_32ControlCode.GDControlObjects2.length = 0;
gdjs.Buttermilk_32ControlCode.GDNextObjects1.length = 0;
gdjs.Buttermilk_32ControlCode.GDNextObjects2.length = 0;
gdjs.Buttermilk_32ControlCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Buttermilk_32ControlCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Buttermilk_32ControlCode.GDnamenameObjects1.length = 0;
gdjs.Buttermilk_32ControlCode.GDnamenameObjects2.length = 0;

gdjs.Buttermilk_32ControlCode.eventsList0(runtimeScene);

return;

}

gdjs['Buttermilk_32ControlCode'] = gdjs.Buttermilk_32ControlCode;
