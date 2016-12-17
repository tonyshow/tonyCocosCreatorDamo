/**
 * 卡牌管理 所有卡牌
 * 作者：tony
 * 时间：2016-12-17
 */
var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    MgDataBase = require('./MgDataBase'),
    _ = require('underscore')
    ;

var MgCard = function(){
    EventEmitter.call(this);
    this.cards = {};
};

util.inherits(MgCard,MgDataBase);

var pro = MgCard.prototype;

/**
 * 移除一张卡牌
 */
pro.removeById = function(id){

};

/**
 * 添加一张卡牌
 */
pro.addByCard = function( card ){
    var pos = 1;
    this.cards[pos] = card;    
};

module.exports = MgCard;