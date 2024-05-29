gdjs.Tempura_32IntroCode = {};
gdjs.Tempura_32IntroCode.GDinstructionsObjects1= [];
gdjs.Tempura_32IntroCode.GDinstructionsObjects2= [];
gdjs.Tempura_32IntroCode.GDStartObjects1= [];
gdjs.Tempura_32IntroCode.GDStartObjects2= [];
gdjs.Tempura_32IntroCode.GDBackObjects1= [];
gdjs.Tempura_32IntroCode.GDBackObjects2= [];
gdjs.Tempura_32IntroCode.GDplayer_9595inputObjects1= [];
gdjs.Tempura_32IntroCode.GDplayer_9595inputObjects2= [];
gdjs.Tempura_32IntroCode.GDnamenameObjects1= [];
gdjs.Tempura_32IntroCode.GDnamenameObjects2= [];


gdjs.Tempura_32IntroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Tempura_32IntroCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tempura_32IntroCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.Tempura_32IntroCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Tempura_32IntroCode.GDBackObjects1[k] = gdjs.Tempura_32IntroCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.Tempura_32IntroCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tempura Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Tempura_32IntroCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tempura_32IntroCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.Tempura_32IntroCode.GDStartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Tempura_32IntroCode.GDStartObjects1[k] = gdjs.Tempura_32IntroCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.Tempura_32IntroCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Tempura_32IntroCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Tempura_32IntroCode.GDStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs.Tempura_32IntroCode.GDinstructionsObjects1);
{for(var i = 0, len = gdjs.Tempura_32IntroCode.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs.Tempura_32IntroCode.GDinstructionsObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Tempura_32IntroCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Tempura_32IntroCode.GDStartObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 2.1 / 3);
}
}{for(var i = 0, len = gdjs.Tempura_32IntroCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.Tempura_32IntroCode.GDBackObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 1.3 / 4);
}
}}

}


};

gdjs.Tempura_32IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Tempura_32IntroCode.GDinstructionsObjects1.length = 0;
gdjs.Tempura_32IntroCode.GDinstructionsObjects2.length = 0;
gdjs.Tempura_32IntroCode.GDStartObjects1.length = 0;
gdjs.Tempura_32IntroCode.GDStartObjects2.length = 0;
gdjs.Tempura_32IntroCode.GDBackObjects1.length = 0;
gdjs.Tempura_32IntroCode.GDBackObjects2.length = 0;
gdjs.Tempura_32IntroCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Tempura_32IntroCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Tempura_32IntroCode.GDnamenameObjects1.length = 0;
gdjs.Tempura_32IntroCode.GDnamenameObjects2.length = 0;

gdjs.Tempura_32IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['Tempura_32IntroCode'] = gdjs.Tempura_32IntroCode;
