
window.ViewCardBase= cc.Class({
    extends: cc.Component,

    properties: {
       icon_card : {
           default:null,
           type:cc.Sprite,
       },
       lable_type:{
           default : null,
           type : cc.Label,
       },
       lable_number:{
           default : null,
           type : cc.Label,
       },
    },
 
    onLoad: function () {
         this.dataCard = null;    
    },

    setId : function( _id ){ 
       //基类实现
    },

    //刷新UI
    //id : 卡牌表id
    refreshUI:function(){
         cc.log('----refreshUI----');
         this.setTypeUI();
         this.setNumber();
    },

    setTypeUI:function(){
        this.lable_type.string = this.dataCard.getType();
    },

    setNumber:function(){
        cc.log('this.dataCard.getNumber() = %s',this.dataCard.getNumber());
        this.lable_number.string = this.dataCard.getNumber();
    }  
}); 
