gdjs.ScreenCode = {};


gdjs.ScreenCode.eventsList0 = function(runtimeScene) {

};

gdjs.ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.ScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['ScreenCode'] = gdjs.ScreenCode;
