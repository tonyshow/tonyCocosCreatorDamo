/**
 * 播放动画完成时的事件处理
 */
cc.Class({
     extends: cc.Component,

     //移除自己
     remove:function(){  
        this.destroy();
        this.node.destroy();
     } 
});
