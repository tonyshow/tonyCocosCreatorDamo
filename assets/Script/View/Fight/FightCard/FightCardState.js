/**
 * 功能：战场卡的状态
 * 作者：tony
 * 时间：2016-12-22
 */
var Consts = require('./../../../../Shared/Consts');
var FightCardAnim = require('./FightCardAnim');
cc.Class({
    extends: cc.Component, 
    properties: {
         fightCardAnim : {
            default:null,
            type : FightCardAnim
         }
    },

    onLoad: function () {
        this.fightCardState = Consts.FightCardState.NONE;
    },

    refreshFightCardState : function( _state ){
        this.fightCardState = _state;
    },

    getFightCardState : function(){
        return this.fightCardState;
    },

    //切换卡牌战斗中的状态
    sendSwitchFightCardState : function(){
        this.fightCardState = this.fightCardState == Consts.FightCardState.NONE ? Consts.FightCardState.CHOICE : Consts.FightCardState.NONE;
        this.fightCardAnim.doAnim( this.fightCardState );
    }, 
});
