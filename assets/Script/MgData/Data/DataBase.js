/**
 * 玩家数据基础类
 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore');

var DataBase = function(){
    EventEmitter.call(this);
}

var pro = DataBase.prototype ;

/**
 * 清理内存数据
 */
pro.clear = function(){
    //基类不做处理 子类自行实现
};

module.exports = DataBase;