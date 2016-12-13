var MsgSet = require('./../msg/set/MsgSet'); 
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
            var data = DataApi.DataScene.findById(1);
            cc.log( 'data %s',JSON.stringify(data) );
            cc.log( 'data %s',data.sceneName );
        });
    },  
});
