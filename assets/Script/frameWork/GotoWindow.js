/**
 * 界面的跳转 两种界面：场景 、弹框
 * 作者 ： tony
 */
var SceneManager = require("SceneManager");
var MsgManager = require("MsgManager"); 
cc.Class({
    extends: cc.Component,
	editor: CC_EDITOR && {
        inspector: "packages://enum/PanelEnum-inspector.js",
    },
    properties: {
        windowTypeEnum:{
            default:windowTypeEnum.SCENE,
            type:windowTypeEnum
        }, 
        msgEnum:{
            default:msgEnum.LOGIN,
            type:msgEnum,
        },
        sceneEnum:{
            default:sceneEnum.GAME_MAIN,
            type:sceneEnum,
        }       
    }, 

    /*
     * 接受面板的跳转
     * */
    gotoWindow :function()
    {         
        var self = this; 
        if( windowTypeEnum.SCENE == self.windowTypeEnum )
        { 
            self.gotoScene();
        }        
        else if(  windowTypeEnum.MSG == self.windowTypeEnum )
        { 
            self.gotoMsg();
        } 
    },

    /*
     * 弹框界面弹出
     * */
    gotoMsg:function(){ 
        MsgManager.Inst().gotoMsg( this.msgEnum); 
    },

    /*
     * 界面的跳转
     * */
    gotoScene:function(){ 
        SceneManager.Inst().gotoScene( this.sceneEnum );
    }

});
