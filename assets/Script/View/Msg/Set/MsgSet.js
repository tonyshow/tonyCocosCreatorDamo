var MsgMask = require('./../MsgMask');
var MsgSet = cc.Class({
    extends:MsgMask,        
    onLoad:function() {
        cc.log('MsgSet - onLoad() : name : %s ',this.name);  
        this._super();  
       // this.node.on(cc.Node.EventType.TOUCH_START, this.close ); 
    }, 
    close:function(){
         this._super(); 
         var self = this;
         cc.log('MsgSet - close() : name : %s ',this.name);      
         self.destroy(); 
         self.removeFromParent( true );         
    },
});


//创建弹框
MsgSet.Create = function()
{
     cc.loader.loadRes('prefabs/msg/MsgSet',function( err,prefab ){           
            var maskNode = cc.instantiate(prefab);            
           // cc.director.getScene().addChild( maskNode ,EnumOrder.MSG + 3000);   
     });
};