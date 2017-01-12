/**
 * 功能：战场总导演 （或者说裁判）：主要是维持战场秩序
 * 作者：tony
 * 时间：2016-12-22
 */
var FightCardCtr = require('./../../DoMain/Fight/FightCardCtr');
var FightArmy = require('./FightArmy');
var FightArmyEnemy = require('./FightArmyEnemy');
var FightView = require('./FightView'); 
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
            type : FightArmyEnemy,
        },

        fightView:{
            default : null,
            type : FightView,
        }, 
    },

    onLoad: function () {
        var self = this; 
        this.armyGroup = [];
        this.armyGroup[Consts.EnumFightArmy.MINE]=this.mine;
        this.armyGroup[Consts.EnumFightArmy.ENEMY]=this.enemy;
        //当前战场的出战权
        this.currOutFightPower = Consts.OutFightPower.DIRCETOR;
        this.mine.setEnumArmy( Consts.EnumFightArmy.MINE );
        this.enemy.setEnumArmy( Consts.EnumFightArmy.ENEMY ); 
        this.armyGroup.forEach( function(army) {
            army.registerReportMachine( function(vEnumFightArmy){  
                 var num = Consts.ArmyCardLimit - this.getCardNum(); 
                 if(num>0){
                     self.cardCtr.sendGetCardId(function(ids){  
                         self.armyGroup[vEnumFightArmy].addNewCardGroup(ids); 
                     },num);
                 } 
            } );
        }, this);        

        //注册按钮事件
        //开始
        self.fightView.setBtnGroupType( Consts.FightBtnGroup.START);
        this.fightView.registerBtnStart( function(){
            self.startFight();
            self.fightView.setBtnGroupType( Consts.FightBtnGroup.GAME);
        } );         

        //过
        this.fightView.registerBtnPass( function(){ 
            if( !self.isOutFightPower(Consts.OutFightPower.MINE ) ){
                MsgPrompt.createByGameWorld('msgPrompt_enemyPower');
                return;
            }           
            MsgPrompt.createByGameWorld('msgPrompt_pass');
            self.switchOutFightPower(); 
        } ); 

        //要起
        this.fightView.registerBtnHit( function(){
            if( !self.isOutFightPower(Consts.OutFightPower.MINE ) ){
                MsgPrompt.createByGameWorld('msgPrompt_enemyPower');
                return;
            } 
            
            self.mine.doAtk();
            self.switchOutFightPower(); 
        }); 
 
        //敌方注册事件
        this.enemy.registerAction( function( code ){             
             if( Consts.FightThinkAI.pass == code ){
                
             }
             self.switchOutFightPower();
        });
    }, 

    //开始发牌
    startFight : function(){ 
        var self = this;
        for( var i = 1; i <= Consts.ArmyCardLimit ; ++i){
            this.cardCtr.sendGetCardId(  function(id){
                self.mine.addNewCard(id);
            });
            this.cardCtr.sendGetCardId(  function(id){
                self.enemy.addNewCard(id);
            });
        } 
       this.setOutFightPower( this.randOutFightPower() ) ;
    },

    //通知两队切换出战权
    switchOutFightPower:function(){  
        var self = this;       
        self.setOutFightPower( self.currOutFightPower ==  Consts.OutFightPower.MINE ?  Consts.OutFightPower.ENEMY : Consts.OutFightPower.MINE ) ;
        self.mine.refreshOutFightPower( self.currOutFightPower );
        self.enemy.refreshOutFightPower( self.currOutFightPower );        
    },

    //导演随机出站权
    randOutFightPower : function(){
         return Consts.OutFightPower.MINE;
    },

    //通过出站权判断是否可以出站
    isOutFightPower:function( _value ){
        return this.currOutFightPower ==_value; 
    },

    setOutFightPower : function( _v ){ 
        this.currOutFightPower = _v;
        this.fightView.refreshLabelPower( this.currOutFightPower );
    },

});
module.exports = FightDirector;