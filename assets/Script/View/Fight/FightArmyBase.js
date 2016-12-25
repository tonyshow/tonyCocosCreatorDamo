var _ = require('underscore');
var Consts = require('./../../../Shared/Consts'); 
cc.Class({
    extends: cc.Component,

    properties: {
         //战队类型 （敌方、我方）
        enumFightArmy : {
            default:Consts.EnumFightArmy.MINE,
            visible : false,
        },
        director : {
            default:null,
            type:cc.Node
        },
        //卡牌到卡牌x轴间的间距
        cardXToX : {
            default:130,
            visible : false,
        },
    },

    setEnumArmy:function( _type ){
        this.enumFightArmy = _type;
        if(this.enumFightArmy== Consts.EnumFightArmy.ENEMY){
            this.mySelfOutFightPower =  Consts.OutFightPower.ENEMY;
        }else if(this.enumFightArmy== Consts.EnumFightArmy.MINE){
            this.mySelfOutFightPower =  Consts.OutFightPower.MINE;
        }
    },

    onLoad: function () {
        this.cardObjDic = [];        
        this.mySelfOutFightPower = Consts.OutFightPower.NONE;//我的出站标记
        this.fightDirector = this.director.getComponent('FightDirector');   
        this.cardMaxCnt = 5;     
    },

    createCardObj : function( id ){ 
        //子类实现
    },

    refreshAllCardPos:function(){
        //子类实现
    },

    refreshOutFightPower:function(value){ 
        this.mySelfOutFightPower = value;
    },    

    isFightPower:function( _v ){ 
        return _v == this.mySelfOutFightPower;
    },

    //攻击
    doAtk:function(){ 
         //子类实现
    }
});
