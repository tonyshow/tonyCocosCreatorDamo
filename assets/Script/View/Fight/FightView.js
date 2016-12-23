/**
 * 功能：战场UI
 * 作者：tony
 * 时间：2016-12-22
 */
var Consts = require('./../../../Shared/Consts'); 
var FightView = cc.Class({
    extends: cc.Component,
    properties: {
        btnStart : {
           default:null,
           type:cc.Button     
        },            
        //过
        btnPass:{
            default : null,
            type:cc.Button
        },
        //出
        bntHit:{
            default : null,
            type:cc.Button
        },
        //结束
        btnEnd:{
            default : null,
            type:cc.Button
        },
        btnHandler:{
            default : null,
            type:cc.Layout
        }
    },

    // use this for initialization
    onLoad: function () {
        this.btnStartEveCb = null;
        this.btnPassEveCb = null;
        this.btnHitEveCb = null;
        this.btnEndEveCb = null;        
    },   

    //==============================================================================================================================================
    //开始按钮
    eveBtnStart:function(){
        this.btnStartEveCb();
    },

    
    eveHit:function(){
        this.btnHitEveCb();
    },

    evePass:function(){
        this.btnPassEveCb();
    },

    eveEnd:function(){
        this.btnEndEveCb();
    },

    //=============================================================================================================================================
    //向导演请求开始游戏
    registerBtnStart( cb ){
        this.btnStartEveCb = cb;
    },
    registerBtnPass( cb ){
        this.btnPassEveCb = cb;
    },
    registerBtnHit( cb ){
        this.btnHitEveCb = cb;
    },
    registerBtnEnd( cb ){
        this.btnEndEveCb = cb;
    },
    //=============================================================================================================================================
    //显示按钮类型
    setBtnGroupType : function( fightBtnGroup ){        
        this.btnStart.node.active = false;
        this.btnHandler.node.active = false;
        this.btnEnd.node.active = false;

        if( Consts.FightBtnGroup.START == fightBtnGroup ){
            this.btnStart.node.active = true;
        }else if(Consts.FightBtnGroup.GAME == fightBtnGroup){
            this.btnHandler.node.active = true;
        }else if(Consts.FightBtnGroup.END == fightBtnGroup){
            this.btnEnd.node.active = true;
        }
    }
});

module.exports = FightView;