/**
 * 卡牌数据
 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore'),
    DataBase= require('./DataBase');

var DataCard = function(){
    EventEmitter.call(this);    
} 

util.inherits(DataCard,DataBase);

var pro = DataCard.prototype ;

/**
 * 清理内存数据
 */
pro.clear = function(){
    this.pos = 0;
};
 
module.exports = DataCard;