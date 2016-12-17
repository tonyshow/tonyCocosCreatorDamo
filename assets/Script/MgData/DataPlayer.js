/**
 * 玩家数据
 * 主要存储服务器下发的（+本地策划数据）
 * 作者：tony
 * 时间：2016-12-17
 */
var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    MgDataBase = require('./MgDataBase'),
    mgCards = require('./mgCards')    
    ;


var DataPlayer = function(){
    this.clear();
}

util.inherits(DataPlayer,MgDataBase);

var pro = DataPlayer.prototype;

/**
 * 初始化玩家数据（接收服务器数据）
 */
pro.init = function( jsData ){
 
};

/**
 * 玩家的名字
 */
pro.getName = function(){
    return this.name;
};

/**
 * 玩家的等级
 */
pro.getLevel = function(){
    return this.level;
};

/**
 * 清理或者说初始化字段
 */
pro.clear = function(){
    this.name = '-';
    this.level = 1;  

    this.mgCards = new MgCards();    
};

module.exports = DataPlayer;