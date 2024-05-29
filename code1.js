gdjs.Name_32SceneCode = {};
gdjs.Name_32SceneCode.GDStart_9595GameObjects1= [];
gdjs.Name_32SceneCode.GDStart_9595GameObjects2= [];
gdjs.Name_32SceneCode.GDplay_9595btnObjects1= [];
gdjs.Name_32SceneCode.GDplay_9595btnObjects2= [];
gdjs.Name_32SceneCode.GDbackgroundObjects1= [];
gdjs.Name_32SceneCode.GDbackgroundObjects2= [];
gdjs.Name_32SceneCode.GDnameBgObjects1= [];
gdjs.Name_32SceneCode.GDnameBgObjects2= [];
gdjs.Name_32SceneCode.GDplayer_9595inputObjects1= [];
gdjs.Name_32SceneCode.GDplayer_9595inputObjects2= [];
gdjs.Name_32SceneCode.GDnamenameObjects1= [];
gdjs.Name_32SceneCode.GDnamenameObjects2= [];


gdjs.Name_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play_btn"), gdjs.Name_32SceneCode.GDplay_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32SceneCode.GDplay_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Name_32SceneCode.GDplay_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Name_32SceneCode.GDplay_9595btnObjects1[k] = gdjs.Name_32SceneCode.GDplay_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Name_32SceneCode.GDplay_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("namename"), gdjs.Name_32SceneCode.GDnamenameObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_input"), gdjs.Name_32SceneCode.GDplayer_9595inputObjects1);
{runtimeScene.getScene().getVariables().get("User").getChild("name").setString((( gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Name_32SceneCode.GDplayer_9595inputObjects1[0].getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Name_32SceneCode.GDplayer_9595inputObjects1[0].getText()));
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDnamenameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDnamenameObjects1[i].getBehavior("Text").setText((( gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Name_32SceneCode.GDplayer_9595inputObjects1[0].getText()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Start_Game"), gdjs.Name_32SceneCode.GDStart_9595GameObjects1);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Name_32SceneCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("nameBg"), gdjs.Name_32SceneCode.GDnameBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("play_btn"), gdjs.Name_32SceneCode.GDplay_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_input"), gdjs.Name_32SceneCode.GDplayer_9595inputObjects1);
{for(var i = 0, len = gdjs.Name_32SceneCode.GDStart_9595GameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDStart_9595GameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDplayer_9595inputObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDplay_9595btnObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDplay_9595btnObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDbackgroundObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDnameBgObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDnameBgObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};

gdjs.Name_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Name_32SceneCode.GDStart_9595GameObjects1.length = 0;
gdjs.Name_32SceneCode.GDStart_9595GameObjects2.length = 0;
gdjs.Name_32SceneCode.GDplay_9595btnObjects1.length = 0;
gdjs.Name_32SceneCode.GDplay_9595btnObjects2.length = 0;
gdjs.Name_32SceneCode.GDbackgroundObjects1.length = 0;
gdjs.Name_32SceneCode.GDbackgroundObjects2.length = 0;
gdjs.Name_32SceneCode.GDnameBgObjects1.length = 0;
gdjs.Name_32SceneCode.GDnameBgObjects2.length = 0;
gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Name_32SceneCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Name_32SceneCode.GDnamenameObjects1.length = 0;
gdjs.Name_32SceneCode.GDnamenameObjects2.length = 0;

gdjs.Name_32SceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Name_32SceneCode'] = gdjs.Name_32SceneCode;
