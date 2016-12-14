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
    }
});
window.MsgBase = MsgBase;
