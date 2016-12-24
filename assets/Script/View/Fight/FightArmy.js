/**
 * 功能：战队队伍
 * 作者：tony
 * 时间：2016-12-22
 */
var _ = require('underscore');
var Consts = require('./../../../Shared/Consts');
var FightArmy = cc.Class({
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
        }
    },

    // use this for initialization
    onLoad: function () {
        this.cardObjDic = [];        
        this.mySelfOutFightPower = Consts.OutFightPower.NONE;//我的出站标记
        this.fightDirector = this.director.getComponent('FightDirector');         
    },

    setEnumArmy:function( _type ){
        this.enumFightArmy = _type;
        if(this.enumFightArmy== Consts.EnumFightArmy.ENEMY){
            this.mySelfOutFightPower =  Consts.OutFightPower.ENEMY;
        }else if(this.enumFightArmy== Consts.EnumFightArmy.MINE){
            this.mySelfOutFightPower =  Consts.OutFightPower.MINE;
        }
    },

    createCardObj : function( id ){ 
        var self = this;
        var prefabPath = PlanApi.PlanPrefabs.getPath('common_card');
        UtilGameObject.createAddparent( prefabPath , self.node ,function(obj){            
            obj.setPosition(0,-300);
            obj.getComponent('ViewCard').setId( id );

            var anim = obj.getComponent('FightCardAnim');
            anim.doEnter(cc.p(-300+130*_.size(self.cardObjDic),1) );

            self.cardObjDic.push(obj);            
        });
    },

  

    refreshOutFightPower:function(value){ 
        this.mySelfOutFightPower = value;
    },    

    isFightPower:function( _v ){ 
        return _v == this.mySelfOutFightPower;
    },
    //攻击
    doAtk:function(){ 
        var self = this;
        var length =    _.size( this.cardObjDic );
        for( var i = 0 ; i<length;++i ){
            var anim = this.cardObjDic[i].getComponent('FightCardAnim');
            anim.doAnim( Consts.FightCardState.Fighting);   
        }
        this.cardObjDic = [];

        this.fightDirector.sendCreeps(5 ,  function( id ){
            self.createCardObj( id );
        });
    }
});

module.exports = FightArmy;
