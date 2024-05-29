gdjs.BBQ_32IntroCode = {};
gdjs.BBQ_32IntroCode.GDinstructionsObjects1= [];
gdjs.BBQ_32IntroCode.GDinstructionsObjects2= [];
gdjs.BBQ_32IntroCode.GDStartObjects1= [];
gdjs.BBQ_32IntroCode.GDStartObjects2= [];
gdjs.BBQ_32IntroCode.GDBackObjects1= [];
gdjs.BBQ_32IntroCode.GDBackObjects2= [];
gdjs.BBQ_32IntroCode.GDplayer_9595inputObjects1= [];
gdjs.BBQ_32IntroCode.GDplayer_9595inputObjects2= [];
gdjs.BBQ_32IntroCode.GDnamenameObjects1= [];
gdjs.BBQ_32IntroCode.GDnamenameObjects2= [];


gdjs.BBQ_32IntroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.BBQ_32IntroCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BBQ_32IntroCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.BBQ_32IntroCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BBQ_32IntroCode.GDBackObjects1[k] = gdjs.BBQ_32IntroCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.BBQ_32IntroCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BBQ Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.BBQ_32IntroCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BBQ_32IntroCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.BBQ_32IntroCode.GDStartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BBQ_32IntroCode.GDStartObjects1[k] = gdjs.BBQ_32IntroCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.BBQ_32IntroCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bonus", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.BBQ_32IntroCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.BBQ_32IntroCode.GDStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs.BBQ_32IntroCode.GDinstructionsObjects1);
{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDinstructionsObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDStartObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 2.1 / 3);
}
}{for(var i = 0, len = gdjs.BBQ_32IntroCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.BBQ_32IntroCode.GDBackObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 1.3 / 4);
}
}}

}


};

gdjs.BBQ_32IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BBQ_32IntroCode.GDinstructionsObjects1.length = 0;
gdjs.BBQ_32IntroCode.GDinstructionsObjects2.length = 0;
gdjs.BBQ_32IntroCode.GDStartObjects1.length = 0;
gdjs.BBQ_32IntroCode.GDStartObjects2.length = 0;
gdjs.BBQ_32IntroCode.GDBackObjects1.length = 0;
gdjs.BBQ_32IntroCode.GDBackObjects2.length = 0;
gdjs.BBQ_32IntroCode.GDplayer_9595inputObjects1.length = 0;
gdjs.BBQ_32IntroCode.GDplayer_9595inputObjects2.length = 0;
gdjs.BBQ_32IntroCode.GDnamenameObjects1.length = 0;
gdjs.BBQ_32IntroCode.GDnamenameObjects2.length = 0;

gdjs.BBQ_32IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['BBQ_32IntroCode'] = gdjs.BBQ_32IntroCode;
