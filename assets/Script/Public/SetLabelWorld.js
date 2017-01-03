/**
 * 功能：设置静态文本的文字
 * 作者：tony
 * 时间：2016-12-22
 */
cc.Class({
    extends: cc.Component,

    properties: {
        //程序字表里面的id
        gameWorldId:"",
    },

    // use this for initialization
    onLoad: function () {
        var lb = this.node.getComponent( cc.Label );
        lb.string = PlanApi.PlanGameWorld.getWorld(this.gameWorldId);
    }, 
});
