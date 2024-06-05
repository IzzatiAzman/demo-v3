gdjs.Name_32SceneCode = {};
gdjs.Name_32SceneCode.GDStart_9595GameObjects1= [];
gdjs.Name_32SceneCode.GDStart_9595GameObjects2= [];
gdjs.Name_32SceneCode.GDStart_9595GameObjects3= [];
gdjs.Name_32SceneCode.GDplay_9595btnObjects1= [];
gdjs.Name_32SceneCode.GDplay_9595btnObjects2= [];
gdjs.Name_32SceneCode.GDplay_9595btnObjects3= [];
gdjs.Name_32SceneCode.GDbackgroundObjects1= [];
gdjs.Name_32SceneCode.GDbackgroundObjects2= [];
gdjs.Name_32SceneCode.GDbackgroundObjects3= [];
gdjs.Name_32SceneCode.GDnameBgObjects1= [];
gdjs.Name_32SceneCode.GDnameBgObjects2= [];
gdjs.Name_32SceneCode.GDnameBgObjects3= [];
gdjs.Name_32SceneCode.GDrequired_9595nameObjects1= [];
gdjs.Name_32SceneCode.GDrequired_9595nameObjects2= [];
gdjs.Name_32SceneCode.GDrequired_9595nameObjects3= [];
gdjs.Name_32SceneCode.GDplayer_9595inputObjects1= [];
gdjs.Name_32SceneCode.GDplayer_9595inputObjects2= [];
gdjs.Name_32SceneCode.GDplayer_9595inputObjects3= [];
gdjs.Name_32SceneCode.GDnamenameObjects1= [];
gdjs.Name_32SceneCode.GDnamenameObjects2= [];
gdjs.Name_32SceneCode.GDnamenameObjects3= [];


gdjs.Name_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("namename"), gdjs.Name_32SceneCode.GDnamenameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32SceneCode.GDnamenameObjects2.length;i<l;++i) {
    if ( gdjs.Name_32SceneCode.GDnamenameObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.Name_32SceneCode.GDnamenameObjects2[k] = gdjs.Name_32SceneCode.GDnamenameObjects2[i];
        ++k;
    }
}
gdjs.Name_32SceneCode.GDnamenameObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("required_name"), gdjs.Name_32SceneCode.GDrequired_9595nameObjects2);
{for(var i = 0, len = gdjs.Name_32SceneCode.GDrequired_9595nameObjects2.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDrequired_9595nameObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("namename"), gdjs.Name_32SceneCode.GDnamenameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32SceneCode.GDnamenameObjects1.length;i<l;++i) {
    if ( !(gdjs.Name_32SceneCode.GDnamenameObjects1[i].getBehavior("Text").getText() == "") ) {
        isConditionTrue_0 = true;
        gdjs.Name_32SceneCode.GDnamenameObjects1[k] = gdjs.Name_32SceneCode.GDnamenameObjects1[i];
        ++k;
    }
}
gdjs.Name_32SceneCode.GDnamenameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_input"), gdjs.Name_32SceneCode.GDplayer_9595inputObjects1);
gdjs.copyArray(runtimeScene.getObjects("required_name"), gdjs.Name_32SceneCode.GDrequired_9595nameObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Name_32SceneCode.GDplayer_9595inputObjects1[0].getText()));
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDrequired_9595nameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDrequired_9595nameObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("User").getChild("name").setString((( gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Name_32SceneCode.GDplayer_9595inputObjects1[0].getText()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.Name_32SceneCode.eventsList1 = function(runtimeScene) {

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
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}
{ //Subevents
gdjs.Name_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Start_Game"), gdjs.Name_32SceneCode.GDStart_9595GameObjects1);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Name_32SceneCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("nameBg"), gdjs.Name_32SceneCode.GDnameBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("play_btn"), gdjs.Name_32SceneCode.GDplay_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_input"), gdjs.Name_32SceneCode.GDplayer_9595inputObjects1);
gdjs.copyArray(runtimeScene.getObjects("required_name"), gdjs.Name_32SceneCode.GDrequired_9595nameObjects1);
{for(var i = 0, len = gdjs.Name_32SceneCode.GDStart_9595GameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDStart_9595GameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDrequired_9595nameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDrequired_9595nameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
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


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("required_name"), gdjs.Name_32SceneCode.GDrequired_9595nameObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "72e9c7d27d07ead77a928dacdf3947412c9aa607e22b3a94d26fa7f9412224ee_01 - super mushroom eater revised and fixed.aac", true, 70, 1);
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDrequired_9595nameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDrequired_9595nameObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("namename"), gdjs.Name_32SceneCode.GDnamenameObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_input"), gdjs.Name_32SceneCode.GDplayer_9595inputObjects1);
{for(var i = 0, len = gdjs.Name_32SceneCode.GDnamenameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDnamenameObjects1[i].getBehavior("Text").setText((( gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Name_32SceneCode.GDplayer_9595inputObjects1[0].getText()));
}
}{for(var i = 0, len = gdjs.Name_32SceneCode.GDnamenameObjects1.length ;i < len;++i) {
    gdjs.Name_32SceneCode.GDnamenameObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Name_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Name_32SceneCode.GDStart_9595GameObjects1.length = 0;
gdjs.Name_32SceneCode.GDStart_9595GameObjects2.length = 0;
gdjs.Name_32SceneCode.GDStart_9595GameObjects3.length = 0;
gdjs.Name_32SceneCode.GDplay_9595btnObjects1.length = 0;
gdjs.Name_32SceneCode.GDplay_9595btnObjects2.length = 0;
gdjs.Name_32SceneCode.GDplay_9595btnObjects3.length = 0;
gdjs.Name_32SceneCode.GDbackgroundObjects1.length = 0;
gdjs.Name_32SceneCode.GDbackgroundObjects2.length = 0;
gdjs.Name_32SceneCode.GDbackgroundObjects3.length = 0;
gdjs.Name_32SceneCode.GDnameBgObjects1.length = 0;
gdjs.Name_32SceneCode.GDnameBgObjects2.length = 0;
gdjs.Name_32SceneCode.GDnameBgObjects3.length = 0;
gdjs.Name_32SceneCode.GDrequired_9595nameObjects1.length = 0;
gdjs.Name_32SceneCode.GDrequired_9595nameObjects2.length = 0;
gdjs.Name_32SceneCode.GDrequired_9595nameObjects3.length = 0;
gdjs.Name_32SceneCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Name_32SceneCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Name_32SceneCode.GDplayer_9595inputObjects3.length = 0;
gdjs.Name_32SceneCode.GDnamenameObjects1.length = 0;
gdjs.Name_32SceneCode.GDnamenameObjects2.length = 0;
gdjs.Name_32SceneCode.GDnamenameObjects3.length = 0;

gdjs.Name_32SceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Name_32SceneCode'] = gdjs.Name_32SceneCode;
