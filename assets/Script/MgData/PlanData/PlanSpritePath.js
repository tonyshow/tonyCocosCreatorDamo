var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanSpritePath = function () {

	var data = [["icon_card_1_1","Sprite/Card/IconCard/icon_card_1_1.png"],["icon_card_1_2","Sprite/Card/IconCard/icon_card_1_2.png"],["icon_card_1_3","Sprite/Card/IconCard/icon_card_1_3.png"],["icon_card_1_4","Sprite/Card/IconCard/icon_card_1_4.png"],["icon_card_1_5","Sprite/Card/IconCard/icon_card_1_5.png"],["icon_card_1_6","Sprite/Card/IconCard/icon_card_1_6.png"],["icon_card_1_7","Sprite/Card/IconCard/icon_card_1_7.png"],["icon_card_1_8","Sprite/Card/IconCard/icon_card_1_8.png"],["icon_card_1_9","Sprite/Card/IconCard/icon_card_1_9.png"],["icon_card_1_10","Sprite/Card/IconCard/icon_card_1_10.png"],["icon_card_1_11","Sprite/Card/IconCard/icon_card_1_11.png"],["icon_card_1_12","Sprite/Card/IconCard/icon_card_1_12.png"],["icon_card_1_13","Sprite/Card/IconCard/icon_card_1_13.png"],["icon_card_2_1","Sprite/Card/IconCard/icon_card_2_1.png"],["icon_card_2_2","Sprite/Card/IconCard/icon_card_2_2.png"],["icon_card_2_3","Sprite/Card/IconCard/icon_card_2_3.png"],["icon_card_2_4","Sprite/Card/IconCard/icon_card_2_4.png"],["icon_card_2_5","Sprite/Card/IconCard/icon_card_2_5.png"],["icon_card_2_6","Sprite/Card/IconCard/icon_card_2_6.png"],["icon_card_2_7","Sprite/Card/IconCard/icon_card_2_7.png"],["icon_card_2_8","Sprite/Card/IconCard/icon_card_2_8.png"],["icon_card_2_9","Sprite/Card/IconCard/icon_card_2_9.png"],["icon_card_2_10","Sprite/Card/IconCard/icon_card_2_10.png"],["icon_card_2_11","Sprite/Card/IconCard/icon_card_2_11.png"],["icon_card_2_12","Sprite/Card/IconCard/icon_card_2_12.png"],["icon_card_2_13","Sprite/Card/IconCard/icon_card_2_13.png"],["icon_card_3_1","Sprite/Card/IconCard/icon_card_3_1.png"],["icon_card_3_2","Sprite/Card/IconCard/icon_card_3_2.png"],["icon_card_3_3","Sprite/Card/IconCard/icon_card_3_3.png"],["icon_card_3_4","Sprite/Card/IconCard/icon_card_3_4.png"],["icon_card_3_5","Sprite/Card/IconCard/icon_card_3_5.png"],["icon_card_3_6","Sprite/Card/IconCard/icon_card_3_6.png"],["icon_card_3_7","Sprite/Card/IconCard/icon_card_3_7.png"],["icon_card_3_8","Sprite/Card/IconCard/icon_card_3_8.png"],["icon_card_3_9","Sprite/Card/IconCard/icon_card_3_9.png"],["icon_card_3_10","Sprite/Card/IconCard/icon_card_3_10.png"],["icon_card_3_11","Sprite/Card/IconCard/icon_card_3_11.png"],["icon_card_3_12","Sprite/Card/IconCard/icon_card_3_12.png"],["icon_card_3_13","Sprite/Card/IconCard/icon_card_3_13.png"],["icon_card_4_1","Sprite/Card/IconCard/icon_card_4_1.png"],["icon_card_4_2","Sprite/Card/IconCard/icon_card_4_2.png"],["icon_card_4_3","Sprite/Card/IconCard/icon_card_4_3.png"],["icon_card_4_4","Sprite/Card/IconCard/icon_card_4_4.png"],["icon_card_4_5","Sprite/Card/IconCard/icon_card_4_5.png"],["icon_card_4_6","Sprite/Card/IconCard/icon_card_4_6.png"],["icon_card_4_7","Sprite/Card/IconCard/icon_card_4_7.png"],["icon_card_4_8","Sprite/Card/IconCard/icon_card_4_8.png"],["icon_card_4_9","Sprite/Card/IconCard/icon_card_4_9.png"],["icon_card_4_10","Sprite/Card/IconCard/icon_card_4_10.png"],["icon_card_4_11","Sprite/Card/IconCard/icon_card_4_11.png"],["icon_card_4_12","Sprite/Card/IconCard/icon_card_4_12.png"],["icon_card_4_13","Sprite/Card/IconCard/icon_card_4_13.png"],["icon_card_5_1","Sprite/Card/IconCard/icon_card_5_1.png"],["icon_card_5_2","Sprite/Card/IconCard/icon_card_5_2.png"],["icon_card_type_x","Sprite/Card/CardType/icon_cardType_%s.png"],["icon_card_number_x","Sprite/Card/CardNumber/icon_number_%s.png"]];

	var indexs = {"icon_card_1_1":0,"icon_card_1_2":1,"icon_card_1_3":2,"icon_card_1_4":3,"icon_card_1_5":4,"icon_card_1_6":5,"icon_card_1_7":6,"icon_card_1_8":7,"icon_card_1_9":8,"icon_card_1_10":9,"icon_card_1_11":10,"icon_card_1_12":11,"icon_card_1_13":12,"icon_card_2_1":13,"icon_card_2_2":14,"icon_card_2_3":15,"icon_card_2_4":16,"icon_card_2_5":17,"icon_card_2_6":18,"icon_card_2_7":19,"icon_card_2_8":20,"icon_card_2_9":21,"icon_card_2_10":22,"icon_card_2_11":23,"icon_card_2_12":24,"icon_card_2_13":25,"icon_card_3_1":26,"icon_card_3_2":27,"icon_card_3_3":28,"icon_card_3_4":29,"icon_card_3_5":30,"icon_card_3_6":31,"icon_card_3_7":32,"icon_card_3_8":33,"icon_card_3_9":34,"icon_card_3_10":35,"icon_card_3_11":36,"icon_card_3_12":37,"icon_card_3_13":38,"icon_card_4_1":39,"icon_card_4_2":40,"icon_card_4_3":41,"icon_card_4_4":42,"icon_card_4_5":43,"icon_card_4_6":44,"icon_card_4_7":45,"icon_card_4_8":46,"icon_card_4_9":47,"icon_card_4_10":48,"icon_card_4_11":49,"icon_card_4_12":50,"icon_card_4_13":51,"icon_card_5_1":52,"icon_card_5_2":53,"icon_card_type_x":54,"icon_card_number_x":55};

	var indexNames = {"id":0,"path":1};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanSpritePath, PlanBase );

var pro = PlanSpritePath.prototype;

pro.getPath = function(id)
{
	var data = this.findById(id);
	return data.path
};
pro.getId = function(id)
{
	var data = this.findById(id);
	return data.id
};
module.exports = PlanSpritePath;

