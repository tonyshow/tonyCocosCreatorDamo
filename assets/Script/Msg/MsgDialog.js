/**
 * 功能：剧情对话
 * 作者：tony
 * 时间：2016-12-21
 */
var MsgMask = require('./../FrameWork/Msg/MsgMask');
var util = require('util');
var MsgDialog  = cc.Class({
     extends: MsgMask,
     properties: {   
         dialogTxt : {
             default: null,
             type:cc.Label,
         }
     },
    getClassName:function(){
        return 'MsgMask';
    },  
    eveTouch : function(){
        this.nextStep();
    }, 
    //启动对话
    //dialogGroupId：对话组
    startDialog : function( dialogGroupId ){
        this.nextStep();
    },

    //下一步引导 
    nextStep:function(){ 
        if( -1==this.currId){
             this.close();
             MgScene.Inst().gotoSceneByName('fight');
             return false;
        }
        var worldId =  PlanApi.PlanDialog.getDialogtxt(this.currId);
        var txt = PlanApi.PlanGameWorld.getWorld(worldId);
        this.dialogTxt.string = txt; 
        var nextDialogId = PlanApi.PlanDialog.getNextid(this.currId);
        if( nextDialogId != -1 ){ 
            this.currId = nextDialogId;
            return true;
        }  
        this.currId = nextDialogId;
        return false;
    }, 
    onLoad:function(){
        this.currId = "1";
    }, 
    close:function(){
        this._super();
    } 
});

MsgDialog.create = function( dialogGroupId ){
    MgMsg.Inst().createComponent('MsgDialog' ,function(cmp){
        if( Utils.IsNotNull(cmp)){
            cmp.startDialog( dialogGroupId );
        } 
    }); 
}; 
module.exports = MsgDialog;