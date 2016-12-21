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
        return 'MsgPrompt';
    }, 

    eveTouch : function(){

    },

    startDialog : function( groupId ){
        this.nextStep();
    },

    nextStep:function(){
      
        var nextDialogId = PlanApi.PlanDialog.getNextid(this.currId);
        if(nextDialogId!=-1){
            this.dialogTxt.string = PlanApi.PlanDialog.getDialogtxt(this.currId);
            this.currId = nextDialogId;
        } 
    },

    onLoad:function(){
        this.currId = "1";
    }
});

MsgDialog.create = function(){
    MgMsg.Inst().createComponent('MsgDialog' ,function(cmp){
        if( Utils.IsNotNull(cmp)){
            cmp.startDialog( 1 );
        }
      
    }); 
};

module.exports = MsgDialog;