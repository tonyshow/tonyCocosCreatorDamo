/**
 * 卡牌数据
 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore'),
    DataBase= require('./DataBase');

/**
 * id : 卡牌唯一id  1-54
 */
var DataCard = function( id ){
    EventEmitter.call(this);  
    this.id = id; 
    this.bindPlanData();            
} 

util.inherits(DataCard,DataBase);

var pro = DataCard.prototype ;

/**
 * 清理内存数据
 */
pro.clear = function(){
    this.pos = 0;
};

/**
 * 绑定策划表数据
 */
pro.bindPlanData = function(){
    this.planData = PlanApi.PlanCard.findById( this.id );
};
 
/**
 * 获取牌的花色
 */
pro.getType = function(){
    return this.planData.type;
};

/**
 * 过去卡牌的数量
 */
pro.getNumber = function(){
    return this.planData.number;
};

/**
 * 获取伤害值
 */
pro.getHurt = function(){
    return this.getType()*10 + this.getNumber();
};

/**
 * 获取卡牌icon路径
 */
pro.getIconPath = function(){ 
    return PlanApi.PlanSpritePath.getPath(this.planData.iconId);
};
module.exports = DataCard;