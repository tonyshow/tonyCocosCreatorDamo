/*
 * 重写引擎按钮组件
 * 主要是处理点击事件回调、和点击事件所触发的音效播放
 * 作者 ： tony
 * 日期 ： 2016-12-16
 */
cc.Class({
    extends: cc.Button,

    properties: {
       //按钮id
       buttonId:0,

       gotoType : { 
            default: EnumWindowType.NONE,
            type : EnumWindowType,
       }
    },

    // use this for initialization
    onLoad: function () {

    },

    //点击事件回调
    eveClick : function(){

    }, 
});

 