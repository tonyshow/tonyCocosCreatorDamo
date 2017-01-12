var BaseBar = cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    /**
     * 设置进度条百分比
     * _v:百分比
     */
    setProgress:function( _v ){
        // if(!isNumber(_v)){
        //     cc.error('设置进度条百分比参数不是一个数字');
        //     return;
        // }
        this.bar.progress= _v;        
    },

    getPropress:function(){
        return this.bar.progress;
    },

    getComponents:function(){
        this.bar = this.getComponent(cc.ProgressBar);
    },

    onLoad:function(){
        this.getComponents();
        this.per = 0;
    },

    update:function(){        
        this.setProgress( this.per );
        if(this.per<1){
            this.per+=0.001;
        }else{
            this.per = 0;
        }
    }
});
module.exports = BaseBar;
