//var MsgBase = require('./MsgBase');
cc.Class({
    extends: MsgBase,
    properties: {       
        maskLayout:{
            default:null,
            type : cc.Layout,
            displayName:'蒙版对象',
        },
    },
 
    close:function()
    {
        this._super();               
        this.node.destroy();  
    },         
});
