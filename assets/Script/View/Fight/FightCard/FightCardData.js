
var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    Consts = require('./../../../../Shared/Consts'),
    _  = require('underscore');

var FightCardData = function( id ){
    EventEmitter.call(this);
    this.cardObj = null;
    this.DataCard = null;
    this.id = id;
    this.ViewCard = null;
    this.FightCardAnim = null;
    this.FightCardState = null;
}

var pro = FightCardData.prototype ;

pro.setCardObject = function( _v ){
    this.cardObj = _v;
    return this;
};

/**
 * 当前卡牌的id
 */
pro.getId = function(){
    return this.id;
};

/**
 * 设置卡牌组件
 */
pro.setViewCard = function( _v ){
    this.ViewCard = _v;
    return this;
};

/**
 * 设置卡牌动画组件
 */
pro.setFightCardAnim = function( _v ){
    this.FightCardAnim = _v;
    return this;
};

/**
 * 设置卡牌状态
 */
pro.setFightCardState = function( _v ){
    this.FightCardState = _v;
    return this;
};

/**
 * 是否可以出站
 */
pro.isCanAtk = function(){
    return this.FightCardState.getFightCardState() == Consts.FightCardState.CHOICE;
};

/**
 * 播放动画
 */
pro.doAnim = function( fightCardState,endCb ){
    this.FightCardAnim.doAnim( fightCardState,endCb );
    return this;
}

pro.doRefreshPos = function( _v ){
    this.FightCardAnim.doRefreshPos(  _v );
    return this;
}
module.exports = FightCardData;