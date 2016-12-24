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

        //当前战场的出战权
        this.currOutFightPower = Consts.OutFightPower.DIRCETOR;
         
        this.mine.setEnumArmy( Consts.EnumFightArmy.MINE );
        this.enemy.setEnumArmy( Consts.EnumFightArmy.ENEMY ); 


        //注册按钮事件
        //开始
        self.fightView.setBtnGroupType( Consts.FightBtnGroup.START);
        this.fightView.registerBtnStart( function(){
            self.startFight();
            self.fightView.setBtnGroupType( Consts.FightBtnGroup.GAME);
        } );   

        //结束
        this.fightView.registerBtnEnd( function(){
            
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
        }); 
 
        this.enemy.registerAction( function( code ){             
             if( Consts.FightThinkAI.pass == code ){
                 self.switchOutFightPower();
             }
        });
    }, 

    //开始发牌
    startFight : function(){ 
        var self = this;
        for( var i = 1; i <= 5 ; ++i){
            this.cardCtr.sendGetCardId(  function(id){
                self.mine.createCardObj(id);
            });
            this.cardCtr.sendGetCardId(  function(id){
                self.enemy.createCardObj(id);
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

    /**
     * 通过队伍类型请求出战
     * enumFightArmy : Consts.EnumFightArmy
     * cb ：回调  ；
     */ 
    sendOutFight:function( enumFightArmy ,cb ){

    },

    setOutFightPower : function( _v ){ 
        this.currOutFightPower = _v;
        this.fightView.refreshLabelPower( this.currOutFightPower );
    },

    //向导演请求补兵
    sendCreeps : function( num , cb ){ 
       for(var i = 0 ; i < num ;++i){
           this.cardCtr.sendGetCardId(  function(id){ 
              if( id > 0 ){
                  cb(id);
              }else{
                  cc.warn('牌库已空');
              } 
           });
       } 
    },

});
module.exports = FightDirector;