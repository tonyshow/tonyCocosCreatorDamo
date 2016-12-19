var MsgBase = cc.Class({
    extends: cc.Component,    
    properties: {
        
    }, 
    //关闭弹框方法
    close:function(){  
            
       this.node.destroy();   
    },
    getClassName:function(){
        //子类实现
    },
    onDestroy:function(){  
        MgMsg.Inst().remove( this.getClassName() );
    },
    onLoad: function () { 
        MgMsg.Inst().add( this.getClassName() );
    }      
});
window.MsgBase = MsgBase;
