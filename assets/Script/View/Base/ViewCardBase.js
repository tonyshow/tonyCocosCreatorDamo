
window.ViewCardBase= cc.Class({
    extends: cc.Component,

    properties: {
       icon_card : {
           default:null,
           type:cc.Sprite,
       },
       icon_type:{
           default:null,
           type:cc.Sprite,
       },
       icon_number:{
           default:null,
           type:cc.Sprite,
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
    },

    /**
     * 设置ui属性
     */
    setTypeUI:function(){ 
        this.setNumber();
        this.setCardIcon();
        this.setCardType();
    },

    /**
     * 设置卡牌插画
     */
    setCardIcon : function(){
        var self = this;
        var path = this.dataCard.getIconPath();
        cc.loader.loadRes(path, cc.SpriteFrame, function (err, spriteFrame) { 
            var sprite = self.icon_card.getComponent(cc.Sprite);
            sprite.spriteFrame = spriteFrame; 
        });
    },

    /**
     * 设置卡牌插画卡牌数字
     */
    setNumber:function(){
        var self = this;
        var temp = PlanApi.PlanSpritePath.getPath('icon_card_number_x'); 
        cc.log(temp);
        var path = cc.formatStr(temp,this.dataCard.getNumber());
        cc.loader.loadRes(path, cc.SpriteFrame, function (err, spriteFrame) { 
            var sprite = self.icon_number.getComponent(cc.Sprite);
            sprite.spriteFrame = spriteFrame; 
        });
    },

    /**
     * 设置卡牌插画卡牌花色
     */
    setCardType:function(){
        var self = this;
        var temp = PlanApi.PlanSpritePath.getPath('icon_card_type_x');  
        var path = cc.formatStr(temp,this.dataCard.getType());
        cc.loader.loadRes(path, cc.SpriteFrame, function (err, spriteFrame) { 
            var sprite = self.icon_type.getComponent(cc.Sprite);
            sprite.spriteFrame = spriteFrame; 
        });
    }  
}); 
