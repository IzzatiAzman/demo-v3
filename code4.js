gdjs.Buttermilk_32IntroCode = {};
gdjs.Buttermilk_32IntroCode.GDinstructionsObjects1= [];
gdjs.Buttermilk_32IntroCode.GDinstructionsObjects2= [];
gdjs.Buttermilk_32IntroCode.GDStartObjects1= [];
gdjs.Buttermilk_32IntroCode.GDStartObjects2= [];
gdjs.Buttermilk_32IntroCode.GDBackObjects1= [];
gdjs.Buttermilk_32IntroCode.GDBackObjects2= [];
gdjs.Buttermilk_32IntroCode.GDplayer_9595inputObjects1= [];
gdjs.Buttermilk_32IntroCode.GDplayer_9595inputObjects2= [];
gdjs.Buttermilk_32IntroCode.GDnamenameObjects1= [];
gdjs.Buttermilk_32IntroCode.GDnamenameObjects2= [];


gdjs.Buttermilk_32IntroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Buttermilk_32IntroCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Buttermilk_32IntroCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.Buttermilk_32IntroCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Buttermilk_32IntroCode.GDBackObjects1[k] = gdjs.Buttermilk_32IntroCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.Buttermilk_32IntroCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Buttermilk Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Buttermilk_32IntroCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Buttermilk_32IntroCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.Buttermilk_32IntroCode.GDStartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Buttermilk_32IntroCode.GDStartObjects1[k] = gdjs.Buttermilk_32IntroCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.Buttermilk_32IntroCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Buttermilk_32IntroCode.GDStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs.Buttermilk_32IntroCode.GDinstructionsObjects1);
{for(var i = 0, len = gdjs.Buttermilk_32IntroCode.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs.Buttermilk_32IntroCode.GDinstructionsObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Buttermilk_32IntroCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Buttermilk_32IntroCode.GDStartObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 2 / 3);
}
}}

}


};

gdjs.Buttermilk_32IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Buttermilk_32IntroCode.GDinstructionsObjects1.length = 0;
gdjs.Buttermilk_32IntroCode.GDinstructionsObjects2.length = 0;
gdjs.Buttermilk_32IntroCode.GDStartObjects1.length = 0;
gdjs.Buttermilk_32IntroCode.GDStartObjects2.length = 0;
gdjs.Buttermilk_32IntroCode.GDBackObjects1.length = 0;
gdjs.Buttermilk_32IntroCode.GDBackObjects2.length = 0;
gdjs.Buttermilk_32IntroCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Buttermilk_32IntroCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Buttermilk_32IntroCode.GDnamenameObjects1.length = 0;
gdjs.Buttermilk_32IntroCode.GDnamenameObjects2.length = 0;

gdjs.Buttermilk_32IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['Buttermilk_32IntroCode'] = gdjs.Buttermilk_32IntroCode;
