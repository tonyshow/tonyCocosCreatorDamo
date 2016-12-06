cc.Class({
    extends: cc.Component,    
    properties: {
        order:{
            default:msgOrderEnum.MSG_FRIST_WINDOW,
            type:msgOrderEnum, 
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
