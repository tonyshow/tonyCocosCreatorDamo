/**
 * 功能：敌方战斗AI
 * 作者：tony
 * 时间：2016-12-22
 */
var _ = require('underscore');
var Consts = require('./../../../Shared/Consts');
cc.Class({
    extends: cc.Component,

    properties: {
         director : {
            default:null,
            type:cc.Node
        },
    },
 
    thinkAI : function( cb ){
        var delay = cc.delayTime( _.random(10,30) * 0.1 ) ;
        this.cb = cb;
        var self = this;
        var finish = cc.callFunc(function(){
            var tmp =  _.random(1,2);
            self.cb(tmp);
        }, this);

        var seq = cc.sequence(delay, finish);      
        this.node.runAction(seq);
    } 
});
