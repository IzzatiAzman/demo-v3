gdjs.portraitCode = {};
gdjs.portraitCode.GDplayer_9595inputObjects1= [];
gdjs.portraitCode.GDplayer_9595inputObjects2= [];
gdjs.portraitCode.GDnamenameObjects1= [];
gdjs.portraitCode.GDnamenameObjects2= [];


gdjs.portraitCode.userFunc0x144a0d0 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (window.orientation == 90 || window.orientation == -90) {
    gdjs.landscape = true //set default
} else {
    gdjs.landscape = false //set default
}
window.addEventListener("orientationchange", function() {
    if (window.orientation == 90 || window.orientation == -90) {
        gdjs.landscape = true; // landscape mode
    } else {
        gdjs.landscape = false; // portrait mode
    }
});
};
gdjs.portraitCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.portraitCode.userFunc0x144a0d0(runtimeScene);

}


};

gdjs.portraitCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.portraitCode.GDplayer_9595inputObjects1.length = 0;
gdjs.portraitCode.GDplayer_9595inputObjects2.length = 0;
gdjs.portraitCode.GDnamenameObjects1.length = 0;
gdjs.portraitCode.GDnamenameObjects2.length = 0;

gdjs.portraitCode.eventsList0(runtimeScene);

return;

}

gdjs['portraitCode'] = gdjs.portraitCode;
