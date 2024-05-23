gdjs.Start_32GameCode = {};
gdjs.Start_32GameCode.GDStart_9595GameObjects1= [];
gdjs.Start_32GameCode.GDStart_9595GameObjects2= [];
gdjs.Start_32GameCode.GDplay_9595btnObjects1= [];
gdjs.Start_32GameCode.GDplay_9595btnObjects2= [];
gdjs.Start_32GameCode.GDplayer_9595inputObjects1= [];
gdjs.Start_32GameCode.GDplayer_9595inputObjects2= [];
gdjs.Start_32GameCode.GDnamenameObjects1= [];
gdjs.Start_32GameCode.GDnamenameObjects2= [];


gdjs.Start_32GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("namename"), gdjs.Start_32GameCode.GDnamenameObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_input"), gdjs.Start_32GameCode.GDplayer_9595inputObjects1);
{runtimeScene.getScene().getVariables().get("User").getChild("name").setString((( gdjs.Start_32GameCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Start_32GameCode.GDplayer_9595inputObjects1[0].getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.Start_32GameCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Start_32GameCode.GDplayer_9595inputObjects1[0].getText()));
}{for(var i = 0, len = gdjs.Start_32GameCode.GDnamenameObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDnamenameObjects1[i].getBehavior("Text").setText((( gdjs.Start_32GameCode.GDplayer_9595inputObjects1.length === 0 ) ? "" :gdjs.Start_32GameCode.GDplayer_9595inputObjects1[0].getText()));
}
}}

}


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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Start_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32GameCode.GDStart_9595GameObjects1.length = 0;
gdjs.Start_32GameCode.GDStart_9595GameObjects2.length = 0;
gdjs.Start_32GameCode.GDplay_9595btnObjects1.length = 0;
gdjs.Start_32GameCode.GDplay_9595btnObjects2.length = 0;
gdjs.Start_32GameCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Start_32GameCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Start_32GameCode.GDnamenameObjects1.length = 0;
gdjs.Start_32GameCode.GDnamenameObjects2.length = 0;

gdjs.Start_32GameCode.eventsList0(runtimeScene);

return;

}

gdjs['Start_32GameCode'] = gdjs.Start_32GameCode;
