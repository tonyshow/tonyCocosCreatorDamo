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
        enumFightArmy : Consts.EnumFightArmy.MINE
    },

    // use this for initialization
    onLoad: function () {
        this.cardObjDic = [];        
        this.mySelfOutFightPower = Consts.OutFightPower.NONE;//我的出站标记
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
            obj.setPosition(-300+130*_.size(self.cardObjDic),1);
            obj.getComponent('ViewCard').setId( id );
            self.cardObjDic.push(obj);
        });
    },

    refreshOutFightPower:function(){
        
    }
});

module.exports = FightArmy;
