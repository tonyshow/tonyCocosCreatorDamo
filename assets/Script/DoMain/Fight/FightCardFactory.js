/**
 * 功能：卡牌工厂 ： 生产卡牌(相当于生产线)
 * 作者：tony
 * 时间：2016-12-22
 */
var _ = require('underscore');
var Consts = require('./../../../Shared/Consts');
var FightCardFactory = cc.Class({
    extends: cc.Component,
    // use this for initialization
    onLoad: function () {
        //卡牌仓库
        this.initCardDic();
    },

    //初始化仓库
    initCardDic : function(){
         this.cards = [];
         for( var i = 1; i <= Consts.OneGroupCardLimit ; ++i ){
             this.cards.push(i);
         } 
    },
     
    //生产一张卡牌
    //返回的是一个卡牌id (返回为0表示仓库已空)
    productOneCard : function(){
        var cnt =this.getCnt();
        if( cnt <= 0 ){
            return 0;
        }else{
           var randNum = _.random(0,(cnt-1)); 
           return this.removeByPos(randNum);
        }
    },

    //从仓库移除一张卡牌
    removeByPos : function( pos ){
        var id = this.cards[pos];    
        this.cards.splice(pos,1);     
        return id;
    },
 
    //获取卡牌数量
    getCnt : function(){
        return _.size( this.cards );
    },
});

module.exports = FightCardFactory;