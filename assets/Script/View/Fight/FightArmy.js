/**
 * 功能：战队队伍
 * 作者：tony
 * 时间：2016-12-22
 */
var _ = require('underscore');
var Consts = require('./../../../Shared/Consts');
var FightArmyBase = require('./FightArmyBase');
var FightArmy = cc.Class({
    extends: FightArmyBase, 
    // use this for initialization
    onLoad: function () {
         this._super();
    }, 

    createCardObj : function( id ){ 
        this._super(id);
        var self = this;
        var prefabPath = PlanApi.PlanPrefabs.getPath('common_card');
        UtilGameObject.createAddparent( prefabPath , self.node ,function(obj){            
            obj.setPosition(1000,-300);
            obj.getComponent('ViewCard').setId( id ); 
            var anim = obj.getComponent('FightCardAnim');
            anim.doEnter(cc.p(-300+self.cardXToX*_.size(self.cardObjDic),1) ); 
            self.cardObjDic.push(obj);            
        });
    },

    refreshAllCardPos:function(){
        this._super();
        var length = _.size( this.cardObjDic );
        for(var i = 0 ; i<length;++i){
            var anim = this.cardObjDic[i].getComponent('FightCardAnim');
            anim.doRefreshPos( cc.p(-300+this.cardXToX*i,1) );
        }
    },
    
    //攻击
    doAtk:function(){ 
          this._super();
        var self = this;
        var length =    _.size( this.cardObjDic );
        for( var i = 0 ; i<length;++i ){
            var state = this.cardObjDic[i].getComponent('FightCardState');
            if( state.getFightCardState() == Consts.FightCardState.CHOICE ){
                var anim = this.cardObjDic[i].getComponent('FightCardAnim');
                anim.doAnim( Consts.FightCardState.Fighting);    
                this.cardObjDic[i] = null;
            } 
        }

        this.cardObjDic = _.compact(this.cardObjDic);
        this.refreshAllCardPos();
        this.fightDirector.sendCreeps( this.cardMaxCnt -  _.size(this.cardObjDic) ,  function( id ){
            self.createCardObj( id );
        });
    }
});

module.exports = FightArmy;
