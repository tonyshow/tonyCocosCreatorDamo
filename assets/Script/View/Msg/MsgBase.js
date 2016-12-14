var MsgBase = cc.Class({
    extends: cc.Component,    
    properties: {
        order:{
            default:EnumMsgOrder.MSG_FRIST_WINDOW,
            type:EnumMsgOrder, 
        }, 
        isMask:{
            default:false,     
            displayName:"蒙版"       
        }
    }, 
    //关闭弹框方法
    close:function(){       
       this.destroy();   
    },
    getClassName:function(){
        //子类实现
    },
    onDestroy:function(){ 
        cc.log('MsgBase.onDestroy %s', this.getClassName());
        MgMsg.Inst().remove( this.getClassName() );
    },
    onLoad: function () {
        cc.log('MsgBase.onLoad');
        MgMsg.Inst().add( this.getClassName() );
    }      
});
window.MsgBase = MsgBase;
