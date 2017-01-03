var FightArmyBase = require('./FightArmyBase');
var FightEnemyAI = require('./FightEnemyAI');
var Consts = require('./../../../Shared/Consts');
var _ = require('underscore');
cc.Class({
    extends: FightArmyBase,

    properties: {
        fightEnemyAI : {
            default:null,
            type:FightEnemyAI
        }
    },
   
    onLoad: function () {
        this._super();
        this.actionCb = null;
    }, 

    refreshOutFightPower:function( value ){ 
         this._super( value ); 
         var self = this;
         if(  self.isFightPower( Consts.OutFightPower.ENEMY  ) ){
              self.fightEnemyAI.thinkAI( function(tmp){
                    if(Consts.FightThinkAI.atk == tmp ){
                            MsgPrompt.create('攻击');
                    }else if(Consts.FightThinkAI.pass == tmp ){
                        MsgPrompt.create('敌方过');
                    } 
                    self.actionCb(tmp);
              });
         }
    },

    registerAction:function( cb ){
        this.actionCb = cb;
    },

    /**
    * 接受外部补牌指令
    * id : 
    */
    addNewCard:function( id ){
        this._super(id);
        var self = this;
        var prefabPath = PlanApi.PlanPrefabs.getPath('common_cardEnemy');

        UtilGameObject.createAddparent( prefabPath , self.node ,function(obj){            
            obj.setPosition(0,-300);
            var _ViewCard = obj.getComponent('ViewCard');
            _ViewCard.setId( id );
            var _FightCardAnim = obj.getComponent('FightCardAnimEnemy'); 
            _FightCardAnim.doEnter(cc.p(-300+self.cardXToX*_.size(self.cardObjDic),1) );  
            self.cardInfoList[id].setCardObject( obj );    
            self.cardInfoList[id].setViewCard( _ViewCard );
            self.cardInfoList[id].setFightCardAnim( _FightCardAnim );            
        });       
    }, 
});
