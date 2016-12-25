cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },


    doAnim:function( fightCardState,endCb ){                
        //子类实现
    },

    //卡牌入场
    //endPos:目标点
    doEnter:function( endPos ){
        //子类实现
    },
    
    //重新排位
    doRefreshPos : function( endPos ){
        //子类实现
    },
});
