/**
 * 功能：负责去卡牌工厂拿卡牌 运输到 战场
 * 作者：tony
 * 时间：2016-12-22
 */

var FightCardFactory = require('./FightCardFactory');
var Consts = require('./../../../Shared/Consts');
var FightCardCtr = cc.Class({
    extends: cc.Component,

    properties: {
         cardFactory:{
             default : null,
             type : FightCardFactory,
         }
    }, 

    /**
     * 给队伍发放卡牌
     * num:卡牌数量
     */
    sendGetCardId: function( cb , num ){
        num=num || 1;
        var i = 0;
        var cardIds = [];
        for(i;i<num;++i){
            cardIds.push( this.cardFactory.productOneCard() );             
        }
        cb(cardIds);
    }
});

module.exports = FightCardCtr;