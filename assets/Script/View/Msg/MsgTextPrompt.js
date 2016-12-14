/**
 * 功能：飘文字
 * 作者：tony
 * 时间：2016-12-14
 */
var MsgTextPrompt = cc.Class({
    extends: MsgBase,
     properties: { 
        label: {
            default: null,
            type: cc.Label
        },          
    }, 
    //设置文字
    setText: function ( _text ) {
        this.label.string = _text;
    },         
});

//创建弹框
MsgTextPrompt.create = function( text )
{ 
     MgMsg.Inst().createComponent('MsgTextPrompt',function(compt){
          compt.setText(text); 
     }); 
};

module.exports = MsgTextPrompt;