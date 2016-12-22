/**
 * 功能：战场总导演 （或者说裁判）：主要是维持战场秩序
 * 作者：tony
 * 时间：2016-12-22
 */
var FightCardCtr = require('./FightCardCtr');
var FightArmy = require('./FightArmy');
var Consts = require('./../../../Shared/Consts');
var FightDirector = cc.Class({
    extends: cc.Component,

    properties: {
        cardCtr:{
             default : null,
             type : FightCardCtr,
        },

        mine :{
            default : null,
             type : FightArmy,
        },

        enemy :{
            default : null,
            type : FightArmy,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.outFightPower = Consts.OutFightPower.NONE;
    }, 

    //开始
    startFight : function(){
        this.outFightPower = Consts.OutFightPower.DIRCETOR;
        var self = this;
        for( var i = 1; i <= 5 ; ++i){
            this.cardCtr.sendGetCardId(  function(id){
                self.mine.createCardObj(id);
            });
            this.cardCtr.sendGetCardId(  function(id){
                self.enemy.createCardObj(id);
            });
        }
    },
});
module.exports = FightDirector;