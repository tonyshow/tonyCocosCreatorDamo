var SceneManager = require('../frameWork/SceneManager');
var MsgManager = require('../frameWork/MsgManager');
var MsgSet = require('./../msg/set/MsgSet'); 
var _ = require('underscore');
var dataApi = require('./../util/dataApi'); 
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
        var sceneName =  SceneManager.Inst().getCurrScene(); 
        var self = this; 
        self.button.node.on(cc.Node.EventType.TOUCH_START , function(){
            var data  = dataApi.JsonActivetyStrength.findById(1); 
            cc.log('data : %j',JSON.stringify(data));
        });
    },  
});
