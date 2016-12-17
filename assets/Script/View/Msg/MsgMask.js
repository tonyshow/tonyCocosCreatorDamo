//var MsgBase = require('./MsgBase');
cc.Class({
    extends: MsgBase,
    properties: {       
        maskLayout:{
            default:null,
            type : cc.Layout,
            displayName:'蒙版对象',
        },
    },
 
    close : function()
    {
        this._super();               
        this.node.destroy();  
    }, 

    //初始化
    onLoad : function(){
        this._super();
        //设置蒙版透明度
        if( Utils.IsNotNull( this.maskLayout ) ){     
            var _node = this.maskLayout.node;
            if( Utils.IsNotNull( _node ) ){
                 _node.opacity = 255;    
            }
        }
    }        
});
