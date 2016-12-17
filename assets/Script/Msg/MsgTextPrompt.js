/**
 * 功能：飘文字
 * 作者：tony
 * 时间：2016-12-14
 */
var MsgPrompt = cc.Class({
     extends: MsgBase,
     properties: { 
        label: {
            default: null,
            type: cc.Label
        },        
    },
    getClassName:function(){
        return 'MsgPrompt';
    },
    //设置文字
    setText: function ( _text ) {
        this.label.string = _text;
    }  
});

//创建弹框
MsgPrompt.create = function( text )
{ 
     MgMsg.Inst().createComponent('MsgPrompt',function(compt){
          compt.setText(text); 
     }); 
};


//创建弹框
MsgPrompt.createByGameWorld = function( id )
{ 
     var text = PlanApi.PlanGameWorld.getWorld( id );
     MsgPrompt.create(text);
};



window.MsgPrompt = MsgPrompt;