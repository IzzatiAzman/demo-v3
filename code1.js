gdjs.MenuCode = {};
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDbbqObjects1= [];
gdjs.MenuCode.GDbbqObjects2= [];
gdjs.MenuCode.GDsmokeyObjects1= [];
gdjs.MenuCode.GDsmokeyObjects2= [];
gdjs.MenuCode.GDtempuraObjects1= [];
gdjs.MenuCode.GDtempuraObjects2= [];
gdjs.MenuCode.GDbuttermilkObjects1= [];
gdjs.MenuCode.GDbuttermilkObjects2= [];
gdjs.MenuCode.GDplayer_9595inputObjects1= [];
gdjs.MenuCode.GDplayer_9595inputObjects2= [];
gdjs.MenuCode.GDnamenameObjects1= [];
gdjs.MenuCode.GDnamenameObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("buttermilk"), gdjs.MenuCode.GDbuttermilkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDbuttermilkObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDbuttermilkObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDbuttermilkObjects1[k] = gdjs.MenuCode.GDbuttermilkObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDbuttermilkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("smokey"), gdjs.MenuCode.GDsmokeyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDsmokeyObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDsmokeyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDsmokeyObjects1[k] = gdjs.MenuCode.GDsmokeyObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDsmokeyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tempura"), gdjs.MenuCode.GDtempuraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDtempuraObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDtempuraObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDtempuraObjects1[k] = gdjs.MenuCode.GDtempuraObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDtempuraObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bbq"), gdjs.MenuCode.GDbbqObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDbbqObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDbbqObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDbbqObjects1[k] = gdjs.MenuCode.GDbbqObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDbbqObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bonus", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("buttermilk"), gdjs.MenuCode.GDbuttermilkObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDbuttermilkObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbuttermilkObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2,gdjs.evtTools.window.getWindowInnerHeight() / 2);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDbbqObjects1.length = 0;
gdjs.MenuCode.GDbbqObjects2.length = 0;
gdjs.MenuCode.GDsmokeyObjects1.length = 0;
gdjs.MenuCode.GDsmokeyObjects2.length = 0;
gdjs.MenuCode.GDtempuraObjects1.length = 0;
gdjs.MenuCode.GDtempuraObjects2.length = 0;
gdjs.MenuCode.GDbuttermilkObjects1.length = 0;
gdjs.MenuCode.GDbuttermilkObjects2.length = 0;
gdjs.MenuCode.GDplayer_9595inputObjects1.length = 0;
gdjs.MenuCode.GDplayer_9595inputObjects2.length = 0;
gdjs.MenuCode.GDnamenameObjects1.length = 0;
gdjs.MenuCode.GDnamenameObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
