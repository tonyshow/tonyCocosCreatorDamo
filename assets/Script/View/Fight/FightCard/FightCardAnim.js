/**
 * 功能：战场卡动画
 * 作者：tony
 * 时间：2016-12-22
 */
var Consts = require('./../../../../Shared/Consts');
cc.Class({
    extends: cc.Component,

    properties: {
        jumpHeight : 50,
        moveHeight : 50,
        atkHeight  : 100
    },

    // use this for initialization
    onLoad: function () {

    },

    //播放动画
    //fightCardState动画类型
    //endCb：动画播放完成的回调
    doAnim:function( fightCardState,endCb ){                
        var actionOneStep = null;
        if(Consts.FightCardState.NONE == fightCardState){
            actionOneStep = cc.jumpBy(0.5, cc.p(0,this.moveHeight*-1), this.jumpHeight, 1);
        }else if(Consts.FightCardState.CHOICE == fightCardState){
            actionOneStep = cc.jumpBy(0.5, cc.p(0,this.moveHeight), this.jumpHeight, 1);
        }else if(Consts.FightCardState.Fighting == fightCardState){
            actionOneStep = cc.jumpBy(0.5, cc.p(0,this.atkHeight), 0, 1);            
        }

        if( Utils.IsNotNull(actionOneStep) ){
            this.node.runAction(actionOneStep);  
        }   
    }
});
