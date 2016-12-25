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
            var tmp =  _.random(1,2);//Consts.FightThinkAI.pass
            self.cb(tmp);
        }, this);

        var seq = cc.sequence(delay, finish);      
        this.node.runAction(seq);
    } 
});
