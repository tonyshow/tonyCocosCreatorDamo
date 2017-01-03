var _ = require('underscore');
var Consts = require('./../../../Shared/Consts'); 
var FightCardData = require('../Fight/FightCard/FightCardData');
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
        this.mySelfOutFightPower = Consts.OutFightPower.NONE;//我的出站标记
        this.fightDirector = this.director.getComponent('FightDirector');   
        this.cardMaxCnt = 5; 
        this.cardInfoList = [];//卡牌信息    
    }, 
           

    /**
     * 刷新所有的卡牌位置
     */
    refreshAllCardPos:function(){
        this.cardInfoList = _.compact(this.cardInfoList);

        _.map( this.cardInfoList , function( _fightCardData , id ){ 
            cc.log( 'id = %s  ,_fightCardData = %s  ',id ,_fightCardData)
        }); 

        cc.log('base - refreshAllCardPos = %s ', _.size(this.cardInfoList) );
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
    },
    
    /**
    * 接受外部补牌指令
    * id : 
    */
    addNewCard:function( id ){ 
        var fightCardData =  new FightCardData(id);
        this.cardInfoList.push( {id:id  ,fightCardData:fightCardData } ); 
        cc.log('添加之后的数量addNewCard（） = %s ', _.size(this.cardInfoList) );
        return fightCardData;
    },
    
    /**
     * 移除一个已出站的卡牌
     */
    remove:function(id){ 
        this.cardInfoList = _.filter(this.cardInfoList,function(data){
            return data.key != id;
        });
        cc.log('移除之后的数量 : %s ' , _.size(this.cardInfoList) );
    },

    getCardNum:function(){
       var num = _.size(this.cardInfoList);
       cc.log('当前卡牌数量 num : %s',num);
       return num;
    },

    getCardDataById :function(id){
        return this.cardInfoList[id];
    },
});
