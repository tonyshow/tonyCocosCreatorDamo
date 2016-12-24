var FightArmy = require('./FightArmy');
var FightEnemyAI = require('./FightEnemyAI');
var Consts = require('./../../../Shared/Consts');
cc.Class({
    extends: FightArmy,

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
                 MsgPrompt.create('敌方过');
                 self.actionCb(tmp);
              });
         }
    },

    registerAction:function( cb ){
        this.actionCb = cb;
    }
});
