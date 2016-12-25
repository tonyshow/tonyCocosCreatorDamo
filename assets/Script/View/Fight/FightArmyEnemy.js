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

    createCardObj : function( id ){ 
        this._super(id);
        var self = this;
        var prefabPath = PlanApi.PlanPrefabs.getPath('common_cardEnemy');
        UtilGameObject.createAddparent( prefabPath , self.node ,function(obj){            
            obj.setPosition(0,-300);
            obj.getComponent('ViewCard').setId( id ); 
            var anim = obj.getComponent('FightCardAnimEnemy');
            anim.doEnter(cc.p(-300+self.cardXToX*_.size(self.cardObjDic),1) ); 
            self.cardObjDic.push(obj);            
        });
    },
});
