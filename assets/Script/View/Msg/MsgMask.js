//var MsgBase = require('./MsgBase');
cc.Class({
    extends: MsgBase,
    properties: {       
        maskPanel:{
            default:null,
            visible:false,
        },
    },
 
    close:function()
    {
        this._super();        
        cc.log('MsgMask - close() : name : %s ',this.name);      
        this.node.destroy();  
    },
    
    onLoad: function () {
        cc.log('MsgMask - onLoad() : name : %s ',this.name);  
        var self = this;        
        cc.loader.loadRes('prefabs/public/msgMask',function(err,prefab){ 
            self.maskPanel = cc.instantiate(prefab); 
            self.node.parent =  self.maskPanel;
            cc.director.getScene().addChild( self.maskPanel );    
            self.maskPanel.addChild( self.node ); 
            self.maskPanel.on(cc.Node.EventType.TOUCH_START,self.close);
        });  
    },  
});
