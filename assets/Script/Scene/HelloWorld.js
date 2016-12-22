var _ = require('underscore');
var MsgDialog = require('./../Msg/MsgDialog');
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
             cc.log('self.button.buttonId = %s',self.button.buttonId);
             MsgDialog.create();
        });
    },

    goGame : function () { 
        try {
            var _MAC = '123456',
                pwd = '123456'; 
            PomeloClient.connect('127.0.0.1', 3014, function () {
                PomeloClient.queryEntry(_MAC, function (host, port) {
                    PomeloClient.connect(host, port, function () {
                        PomeloClient.entry(host, port, _MAC, pwd, function (data) {
                            MsgPrompt.create( '回包数据 : '+JSON.stringify(data) );
                            if (data.code !== 200 && data.code !== 1003) {
                                return;
                            }else{
                                PomeloClient.afterLogin(data, _MAC);
                            }                            
                        });
                    });
                });
            });
        } catch (ex) {
            cc.log('err: ' + ex.stack);
        }
    }
});
