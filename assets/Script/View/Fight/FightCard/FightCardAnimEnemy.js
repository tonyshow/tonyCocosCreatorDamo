/**
 * 功能：战场敌方卡动画
 * 作者：tony
 * 时间：2016-12-22
 */
var Consts = require('./../../../../Shared/Consts');
var FightCardAnimBase = require('./FightCardAnimBase');
cc.Class({
    extends: FightCardAnimBase,

    properties: {
       
    },

     //播放动画
    //fightCardState动画类型
    //endCb：动画播放完成的回调
    doAnim:function( fightCardState,endCb ){                
        this._super();
        var actionOneStep = null;
        if(Consts.FightCardState.NONE == fightCardState){
            actionOneStep = cc.jumpBy(0.1, cc.p(0,this.moveHeight*-1), this.jumpHeight, 1);
        }else if(Consts.FightCardState.CHOICE == fightCardState){
            actionOneStep = cc.jumpBy(0.1, cc.p(0,this.moveHeight), this.jumpHeight, 1);
        }else if(Consts.FightCardState.Fighting == fightCardState){
            actionOneStep = cc.jumpBy(0.5, cc.p(0,this.atkHeight), 0, 1);            
        }
        if( Utils.IsNotNull(actionOneStep) ){
            this.node.runAction(actionOneStep);  
        }   
    },
    
    doEnter:function( endPos ){
        this._super();
        var actionOneStep = cc.jumpTo(0.5,endPos, 200, 1);
        this.node.runAction(actionOneStep);  
    }
});
