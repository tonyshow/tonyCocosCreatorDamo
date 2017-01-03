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

    //给队伍发放卡牌
    sendGetCardId: function( cb ){
        var id =  this.cardFactory.productOneCard();      
        cb(id);
    }
});

module.exports = FightCardCtr;