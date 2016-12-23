/**
 * 功能：战场总导演 （或者说裁判）：主要是维持战场秩序
 * 作者：tony
 * 时间：2016-12-22
 */
var FightCardCtr = require('./../../DoMain/Fight/FightCardCtr');
var FightArmy = require('./FightArmy');
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
            type : FightArmy,
        },

        fightView:{
            default : null,
            type : FightView,
        },
    },

    // use this for initialization
    onLoad: function () {
        var self = this; 
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
            if( !self.isOutFightPower() ){
                MsgPrompt.createByGameWorld('msgPrompt_enemyPower');
                return;
            }           
            MsgPrompt.createByGameWorld('msgPrompt_pass');
        } ); 
        //要
        this.fightView.registerBtnHit( function(){
            if( !self.isOutFightPower() ){
                MsgPrompt.createByGameWorld('msgPrompt_enemyPower');
                return;
            } 
            var tmpPower = self.switchOutFightPower();
            self.mine.refreshOutFightPower(tmpPower);
            self.enemy.refreshOutFightPower(tmpPower);
        }); 
    }, 

    //开始
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

        this.randOutFightPower();
    },

    //通知两队切换出战权
    switchOutFightPower:function(){
        this.currOutFightPower =  Consts.OutFightPower.MINE ?  Consts.OutFightPower.ENEMY : Consts.OutFightPower.MINE;
        return this.currOutFightPower;
    },

    //导演随机出站权
    randOutFightPower : function(){
         this.currOutFightPower = Consts.OutFightPower.MINE;
    },

    //通过出站权判断是否可以出站
    isOutFightPower:function( _value ){
        return this.currOutFightPower ==_value; 
    }
});
module.exports = FightDirector;