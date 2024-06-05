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
gdjs.MenuCode.GDbackgroundObjects1= [];
gdjs.MenuCode.GDbackgroundObjects2= [];
gdjs.MenuCode.GDSmokeyFrameObjects1= [];
gdjs.MenuCode.GDSmokeyFrameObjects2= [];
gdjs.MenuCode.GDButtermilkObjects1= [];
gdjs.MenuCode.GDButtermilkObjects2= [];
gdjs.MenuCode.GDSmokeyObjects1= [];
gdjs.MenuCode.GDSmokeyObjects2= [];
gdjs.MenuCode.GDTempuraObjects1= [];
gdjs.MenuCode.GDTempuraObjects2= [];
gdjs.MenuCode.GD_959599Speed2Objects1= [];
gdjs.MenuCode.GD_959599Speed2Objects2= [];
gdjs.MenuCode.GDbuttermilk_9595vidObjects1= [];
gdjs.MenuCode.GDbuttermilk_9595vidObjects2= [];
gdjs.MenuCode.GDsmokey_9595vidObjects1= [];
gdjs.MenuCode.GDsmokey_9595vidObjects2= [];
gdjs.MenuCode.GDtempura_9595vidObjects1= [];
gdjs.MenuCode.GDtempura_9595vidObjects2= [];
gdjs.MenuCode.GD_959599SpeedObjects1= [];
gdjs.MenuCode.GD_959599SpeedObjects2= [];
gdjs.MenuCode.GDBMFrameObjects1= [];
gdjs.MenuCode.GDBMFrameObjects2= [];
gdjs.MenuCode.GDTempFrameObjects1= [];
gdjs.MenuCode.GDTempFrameObjects2= [];
gdjs.MenuCode.GDSpeedmartFrameObjects1= [];
gdjs.MenuCode.GDSpeedmartFrameObjects2= [];
gdjs.MenuCode.GDBMredirectObjects1= [];
gdjs.MenuCode.GDBMredirectObjects2= [];
gdjs.MenuCode.GDSMredirectObjects1= [];
gdjs.MenuCode.GDSMredirectObjects2= [];
gdjs.MenuCode.GDTPredirectObjects1= [];
gdjs.MenuCode.GDTPredirectObjects2= [];
gdjs.MenuCode.GDSP99redirectObjects1= [];
gdjs.MenuCode.GDSP99redirectObjects2= [];
gdjs.MenuCode.GDbackObjects1= [];
gdjs.MenuCode.GDbackObjects2= [];
gdjs.MenuCode.GDplayer_9595inputObjects1= [];
gdjs.MenuCode.GDplayer_9595inputObjects2= [];
gdjs.MenuCode.GDnamenameObjects1= [];
gdjs.MenuCode.GDnamenameObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Buttermilk"), gdjs.MenuCode.GDButtermilkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDButtermilkObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDButtermilkObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDButtermilkObjects1[k] = gdjs.MenuCode.GDButtermilkObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDButtermilkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Buttermilk Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BMredirect"), gdjs.MenuCode.GDBMredirectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBMredirectObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBMredirectObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBMredirectObjects1[k] = gdjs.MenuCode.GDBMredirectObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBMredirectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Buttermilk Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SMredirect"), gdjs.MenuCode.GDSMredirectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSMredirectObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSMredirectObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSMredirectObjects1[k] = gdjs.MenuCode.GDSMredirectObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSMredirectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Smokey Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Smokey"), gdjs.MenuCode.GDSmokeyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSmokeyObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSmokeyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSmokeyObjects1[k] = gdjs.MenuCode.GDSmokeyObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSmokeyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Smokey Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TPredirect"), gdjs.MenuCode.GDTPredirectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDTPredirectObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDTPredirectObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDTPredirectObjects1[k] = gdjs.MenuCode.GDTPredirectObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDTPredirectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tempura Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tempura"), gdjs.MenuCode.GDTempuraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDTempuraObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDTempuraObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDTempuraObjects1[k] = gdjs.MenuCode.GDTempuraObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDTempuraObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tempura Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_99Speed2"), gdjs.MenuCode.GD_959599Speed2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GD_959599Speed2Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GD_959599Speed2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GD_959599Speed2Objects1[k] = gdjs.MenuCode.GD_959599Speed2Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GD_959599Speed2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BBQ Control", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SP99redirect"), gdjs.MenuCode.GDSP99redirectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSP99redirectObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSP99redirectObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSP99redirectObjects1[k] = gdjs.MenuCode.GDSP99redirectObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSP99redirectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BBQ Control", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BMredirect"), gdjs.MenuCode.GDBMredirectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Buttermilk"), gdjs.MenuCode.GDButtermilkObjects1);
gdjs.copyArray(runtimeScene.getObjects("SMredirect"), gdjs.MenuCode.GDSMredirectObjects1);
gdjs.copyArray(runtimeScene.getObjects("SP99redirect"), gdjs.MenuCode.GDSP99redirectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Smokey"), gdjs.MenuCode.GDSmokeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("TPredirect"), gdjs.MenuCode.GDTPredirectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tempura"), gdjs.MenuCode.GDTempuraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MenuCode.GDTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("_99Speed"), gdjs.MenuCode.GD_959599SpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("_99Speed2"), gdjs.MenuCode.GD_959599Speed2Objects1);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.MenuCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("buttermilk_vid"), gdjs.MenuCode.GDbuttermilk_9595vidObjects1);
gdjs.copyArray(runtimeScene.getObjects("smokey_vid"), gdjs.MenuCode.GDsmokey_9595vidObjects1);
gdjs.copyArray(runtimeScene.getObjects("tempura_vid"), gdjs.MenuCode.GDtempura_9595vidObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbackgroundObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTitleObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MenuCode.GDsmokey_9595vidObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDsmokey_9595vidObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MenuCode.GDSmokeyObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSmokeyObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MenuCode.GDSMredirectObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSMredirectObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MenuCode.GDButtermilkObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtermilkObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4);
}
}{for(var i = 0, len = gdjs.MenuCode.GDBMredirectObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBMredirectObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4);
}
}{for(var i = 0, len = gdjs.MenuCode.GDbuttermilk_9595vidObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbuttermilk_9595vidObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTempuraObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTempuraObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtempura_9595vidObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtempura_9595vidObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTPredirectObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTPredirectObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4);
}
}{for(var i = 0, len = gdjs.MenuCode.GD_959599Speed2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GD_959599Speed2Objects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MenuCode.GD_959599SpeedObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GD_959599SpeedObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MenuCode.GDSP99redirectObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSP99redirectObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_99Speed"), gdjs.MenuCode.GD_959599SpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("buttermilk_vid"), gdjs.MenuCode.GDbuttermilk_9595vidObjects1);
gdjs.copyArray(runtimeScene.getObjects("smokey_vid"), gdjs.MenuCode.GDsmokey_9595vidObjects1);
gdjs.copyArray(runtimeScene.getObjects("tempura_vid"), gdjs.MenuCode.GDtempura_9595vidObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDtempura_9595vidObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtempura_9595vidObjects1[i].play();
}
}{for(var i = 0, len = gdjs.MenuCode.GDbuttermilk_9595vidObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbuttermilk_9595vidObjects1[i].play();
}
}{for(var i = 0, len = gdjs.MenuCode.GDsmokey_9595vidObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDsmokey_9595vidObjects1[i].play();
}
}{for(var i = 0, len = gdjs.MenuCode.GD_959599SpeedObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GD_959599SpeedObjects1[i].play();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "a5297318776cbc09895a2f51d9f5d77d5e21decfdae20c61211687b278f6d741_Slice of Life.aac", false, 70, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.MenuCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDbackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDbackObjects1[k] = gdjs.MenuCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 70, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Name Scene", false);
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
gdjs.MenuCode.GDbackgroundObjects1.length = 0;
gdjs.MenuCode.GDbackgroundObjects2.length = 0;
gdjs.MenuCode.GDSmokeyFrameObjects1.length = 0;
gdjs.MenuCode.GDSmokeyFrameObjects2.length = 0;
gdjs.MenuCode.GDButtermilkObjects1.length = 0;
gdjs.MenuCode.GDButtermilkObjects2.length = 0;
gdjs.MenuCode.GDSmokeyObjects1.length = 0;
gdjs.MenuCode.GDSmokeyObjects2.length = 0;
gdjs.MenuCode.GDTempuraObjects1.length = 0;
gdjs.MenuCode.GDTempuraObjects2.length = 0;
gdjs.MenuCode.GD_959599Speed2Objects1.length = 0;
gdjs.MenuCode.GD_959599Speed2Objects2.length = 0;
gdjs.MenuCode.GDbuttermilk_9595vidObjects1.length = 0;
gdjs.MenuCode.GDbuttermilk_9595vidObjects2.length = 0;
gdjs.MenuCode.GDsmokey_9595vidObjects1.length = 0;
gdjs.MenuCode.GDsmokey_9595vidObjects2.length = 0;
gdjs.MenuCode.GDtempura_9595vidObjects1.length = 0;
gdjs.MenuCode.GDtempura_9595vidObjects2.length = 0;
gdjs.MenuCode.GD_959599SpeedObjects1.length = 0;
gdjs.MenuCode.GD_959599SpeedObjects2.length = 0;
gdjs.MenuCode.GDBMFrameObjects1.length = 0;
gdjs.MenuCode.GDBMFrameObjects2.length = 0;
gdjs.MenuCode.GDTempFrameObjects1.length = 0;
gdjs.MenuCode.GDTempFrameObjects2.length = 0;
gdjs.MenuCode.GDSpeedmartFrameObjects1.length = 0;
gdjs.MenuCode.GDSpeedmartFrameObjects2.length = 0;
gdjs.MenuCode.GDBMredirectObjects1.length = 0;
gdjs.MenuCode.GDBMredirectObjects2.length = 0;
gdjs.MenuCode.GDSMredirectObjects1.length = 0;
gdjs.MenuCode.GDSMredirectObjects2.length = 0;
gdjs.MenuCode.GDTPredirectObjects1.length = 0;
gdjs.MenuCode.GDTPredirectObjects2.length = 0;
gdjs.MenuCode.GDSP99redirectObjects1.length = 0;
gdjs.MenuCode.GDSP99redirectObjects2.length = 0;
gdjs.MenuCode.GDbackObjects1.length = 0;
gdjs.MenuCode.GDbackObjects2.length = 0;
gdjs.MenuCode.GDplayer_9595inputObjects1.length = 0;
gdjs.MenuCode.GDplayer_9595inputObjects2.length = 0;
gdjs.MenuCode.GDnamenameObjects1.length = 0;
gdjs.MenuCode.GDnamenameObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
