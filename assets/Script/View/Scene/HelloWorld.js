var MsgTextPrompt = require('./../Msg/MsgTextPrompt'); 
var _ = require('underscore'); 
cc.Class({
    extends: cc.Component,
    properties: { 
        label: {
            default: null,
            type: cc.Label
        },
        text: 'dHello, World!ss',
        button : {
            default: null, 
            type: cc.Button
        },            
    },
     
    // use this for initialization
    onLoad: function () {          
        var sceneName =  MgScene.Inst().getCurrScene(); 
        var self = this; 
        self.button.node.on(cc.Node.EventType.TOUCH_START , function(){    
            MsgTextPrompt.create('测试飘字0');
        });
    },  
});
