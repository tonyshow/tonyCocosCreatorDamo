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
    onLoad: function () {
         this._super();
    }, 
  
    refreshAllCardPos:function(){
        this._super();
        var self = this;      
        var i = 0;
        _.map( self.cardInfoList , function( _fightCardData ){ 
            if( _fightCardData != null ){
                cc.log('_fightCardData:'+_fightCardData);
                _fightCardData.doRefreshPos(  cc.p(-300+self.cardXToX*i,1) );
                ++i;
            }            
        });  
    },
    
    /**
     * 出牌逻辑
     */
    doAtk:function(){ 
        this._super();
        var self = this;

        _.map( self.cardInfoList , function( _fightCardData , id ){ 
            if( !_fightCardData && _fightCardData.isCanAtk() ){
                _fightCardData.doAnim( Consts.FightCardState.Fighting );
                self.remove( id );
            } 
        }); 
        
        self.refreshAllCardPos();

        self.fightDirector.sendCreeps( self.cardMaxCnt -  self.getCardNum() ,  function( id ){
            cc.log('请求补牌 = %s',id);
            self.addNewCard( id );
        });
    },

    /**
    * 接受外部补牌指令
    * id : 
    */
    addNewCard:function( id ){
       var tmp = this._super(id);
        var self = this;
        var prefabPath = PlanApi.PlanPrefabs.getPath('common_card'); 
        var currCardNum = self.getCardNum();
        UtilGameObject.createAddparent( prefabPath , self.node ,function(obj){      
            obj.setPosition(1000,-300); 
            var _ViewCard = obj.getComponent('ViewCard');
            _ViewCard.setId( id );
            var _FightCardAnim = obj.getComponent('FightCardAnim'); 
            _FightCardAnim.doEnter(cc.p(-300+self.cardXToX*currCardNum,1) );   
            var _FightCardState = obj.getComponent('FightCardState');  
            tmp.setCardObject( obj ).setViewCard( _ViewCard ).setFightCardAnim( _FightCardAnim ).setFightCardState( _FightCardState );  
        });       
    }
});

module.exports = FightArmy;
