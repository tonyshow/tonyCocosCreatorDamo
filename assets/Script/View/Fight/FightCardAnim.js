var Consts = require('./../../../Shared/Consts');
cc.Class({
    extends: cc.Component,

    properties: {
        jumpHeight : 50,
        moveHeight : 50
    },

    // use this for initialization
    onLoad: function () {

    },

    doAnim:function( fightCardState ){
        var direction = fightCardState == Consts.FightCardState.NONE ? -1 : 1;
        var actionBy = cc.jumpBy(0.5, cc.p(0,this.moveHeight*direction), this.jumpHeight, 1);
        this.node.runAction(actionBy);
    }
});
