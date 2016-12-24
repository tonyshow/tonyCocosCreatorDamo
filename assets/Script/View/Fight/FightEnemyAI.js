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
        var delay = cc.delayTime(_.random(2,5));
        this.cb = cb;
        var self = this;
        var finish = cc.callFunc(function(){
             self.cb(Consts.FightThinkAI.pass);
        }, this);

        var seq = cc.sequence(delay, finish);      
        this.node.runAction(seq);
    } 
});
