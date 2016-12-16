/**
 * 界面的跳转 两种界面：场景 、弹框
 * 作者 ： tony
 */
cc.Class({
    extends: cc.Component,
	editor: CC_EDITOR && {
        inspector: "packages://enum/PanelEnum-inspector.js",
    },
    properties: {
        EnumWindowType:{
            default:EnumWindowType.SCENE,
            type:EnumWindowType
        }, 
        EnumMsg:{
            default:EnumMsg.LOGIN,
            type:EnumMsg,
        },
        EnumScene:{
            default:EnumScene.HELLO_WORD,
            type:EnumScene,
        }       
    }, 

    /*
     * 接受面板的跳转
     * */
    gotoWindow :function()
    {         
        var self = this; 
        if( EnumWindowType.SCENE == self.EnumWindowType )
        { 
            self.gotoScene();
        }        
        else if(  EnumWindowType.MSG == self.EnumWindowType )
        { 
            self.gotoMsg();
        } 
    },

    /*
     * 弹框界面弹出
     * */
    gotoMsg:function(){ 
        MgMsg.Inst().gotoMsg( this.EnumMsg); 
    },

    /*
     * 界面的跳转
     * */
    gotoScene:function(){ 
        MgScene.Inst().gotoScene( this.EnumScene );
    }

});
