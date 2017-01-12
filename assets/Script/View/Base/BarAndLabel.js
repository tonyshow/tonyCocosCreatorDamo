var BaseBar = require('BaseBar');
var BarAndLabel = cc.Class({
    extends: BaseBar,

    properties: {
        labelPer : {
            default:null,
            type:cc.Label,
            displayName:'Label百分比显示'
        }
    },

    // use this for initialization
    onLoad: function () {
        this._super();
    }, 

    update:function(){
        this._super();
        var tmp = this.getPropress();
        this.labelPer.string = (tmp*100).toFixed(0)+'%';
    }  
});
module.exports = BarAndLabel;
