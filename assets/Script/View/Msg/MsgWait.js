var MsgMask = require('./MsgMask');
/**
 * 功能：等待界面
 * 作者：tony
 * 时间：2016-12-14
 */
var MsgWait = cc.Class({
     extends: MsgMask,
     properties: { 
             
    },
    getClassName:function(){
        return 'MsgWait';
    }
});

//创建弹框
MsgWait.create = function( text )
{ 
     MgMsg.Inst().createComponent('MsgWait'); 
};

module.exports = MsgWait; 