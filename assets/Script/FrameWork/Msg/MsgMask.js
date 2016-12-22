window.MsgMask = cc.Class({
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
    }, 

    getClassName:function(){
        //子类实现
    },

    //设置蒙版透明度
    setOpacity : function( _opacity ){        
        if( Utils.IsNotNull( this.maskLayout ) ){     
            var _node = this.maskLayout.node;
            if( Utils.IsNotNull( _node ) ){
                 _node.opacity = _opacity;    
                 cc.log('设置蒙版透明度');
                 return;
            }
        }
        cc.warn(' warning : 未关联蒙版节点 %s',this.getClassName());
    },

    //初始化
    onLoad : function(){
        this._super();
        var opacity = PlanApi.PlanGameConfig.getValue('maskOpacity');
        this.setOpacity( opacity );
    }        
});

