
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
         this.setTypeUI();
         this.setNumber();
    },

    setTypeUI:function(){
        var cardTypeText = PlanApi.PlanGameWorld.getWorld( 'card_type_'+ this.dataCard.getType()); 
        this.lable_type.string =cardTypeText;
    },

    setNumber:function(){
        this.lable_number.string = this.dataCard.getNumber();
    }  
}); 
