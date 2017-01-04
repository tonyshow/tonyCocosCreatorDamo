/**
 * 功能：战场卡动画
 * 作者：tony
 * 时间：2016-12-22
 */
var Consts = require('./../../../../Shared/Consts');
var FightCardAnimBase = require('./FightCardAnimBase');
cc.Class({
    extends: FightCardAnimBase,

    properties: {
        jumpHeight : 50,
        moveHeight : 50,
        atkHeight  : {
            default:20,
            visible:false
        }
    }, 

    //播放动画
    //fightCardState动画类型
    //endCb：动画播放完成的回调
    doAnim:function( fightCardState,endCb ){                
        this._super();
        var actionOneStep = null;
        if(Consts.FightCardState.NONE == fightCardState){
            actionOneStep = cc.moveBy(0.01, cc.p(0,this.moveHeight*-1), this.jumpHeight, 1);
        }else if(Consts.FightCardState.CHOICE == fightCardState){
            actionOneStep = cc.jumpBy(0.1, cc.p(0,this.moveHeight), this.jumpHeight, 1);
        }else if(Consts.FightCardState.Fighting == fightCardState){
            actionOneStep = cc.jumpBy(0.1, cc.p(0,250), 0, 1);            
        }

        if( Utils.IsNotNull(actionOneStep) ){ 
            if(Consts.FightCardState.Fighting == fightCardState){
                var finish = cc.callFunc(function(){
                      this.node.destroy();
                }, this); 
                var seq = cc.sequence(actionOneStep, finish);  
                this.node.runAction(seq);  
            }else{
                this.node.runAction(actionOneStep);  
            }
        }   
    },

    doEnter:function( endPos ){
        this._super();
        var actionOneStep = cc.jumpTo(0.1,endPos, 200, 1);
        this.node.runAction(actionOneStep);  
    },

    //刷新位置
    doRefreshPos : function( endPos ){
        this._super( endPos );
        var actionOneStep = cc.jumpTo(0.1,endPos, this.jumpHeight, 1);
        this.node.runAction(actionOneStep);  
    },
});
