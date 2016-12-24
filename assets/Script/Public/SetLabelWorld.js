cc.Class({
    extends: cc.Component,

    properties: {
        gameWorldId:"",
    },

    // use this for initialization
    onLoad: function () {
        var lb = this.node.getComponent( cc.Label );
        lb.string = PlanApi.PlanGameWorld.getWorld(this.gameWorldId);
    }, 
});
