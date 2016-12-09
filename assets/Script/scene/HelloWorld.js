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
      // cc.log(" -- 1 -- 加载msg.json");
         cc.loader.loadRes('msg',function(err,data){
           // cc.log(" -- 2 -- 加载msg.json %s ",JSON.stringify(data));
       });

      
      // cc.log(" -- 3 -- 加载msg.json");
       var sceneName =  SceneManager.Inst().getCurrScene();
                   
       var self = this; 
          self.button.node.on(cc.Node.EventType.TOUCH_START , function(){
              //  var datas = dataApi.getJsonData('Goods');
              // cc.log('datas : %s',dataApi.Goods.findById(1).openingTime );

              //tt.findById(1)
              
          });
    },  
});
