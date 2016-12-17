/**
 * 数据管理类
 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore');

var MgDataBase = function(){
    EventEmitter.call(this);
}

var pro = MgDataBase.prototype ;

/**
 * 清理内存数据
 */
pro.clear = function(){
    //基类不做处理 子类自行实现
};

module.exports = MgDataBase;