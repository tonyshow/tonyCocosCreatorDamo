var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanCard = function () {

	var data = [[1,1,1,"icon_card_1_1"],[2,1,2,"icon_card_1_2"],[3,1,3,"icon_card_1_3"],[4,1,4,"icon_card_1_4"],[5,1,5,"icon_card_1_5"],[6,1,6,"icon_card_1_6"],[7,1,7,"icon_card_1_7"],[8,1,8,"icon_card_1_8"],[9,1,9,"icon_card_1_9"],[10,1,10,"icon_card_1_10"],[11,1,11,"icon_card_1_11"],[12,1,12,"icon_card_1_12"],[13,1,13,"icon_card_1_13"],[14,2,1,"icon_card_2_1"],[15,2,2,"icon_card_2_2"],[16,2,3,"icon_card_2_3"],[17,2,4,"icon_card_2_4"],[18,2,5,"icon_card_2_5"],[19,2,6,"icon_card_2_6"],[20,2,7,"icon_card_2_7"],[21,2,8,"icon_card_2_8"],[22,2,9,"icon_card_2_9"],[23,2,10,"icon_card_2_10"],[24,2,11,"icon_card_2_11"],[25,2,12,"icon_card_2_12"],[26,2,13,"icon_card_2_13"],[27,3,1,"icon_card_3_1"],[28,3,2,"icon_card_3_2"],[29,3,3,"icon_card_3_3"],[30,3,4,"icon_card_3_4"],[31,3,5,"icon_card_3_5"],[32,3,6,"icon_card_3_6"],[33,3,7,"icon_card_3_7"],[34,3,8,"icon_card_3_8"],[35,3,9,"icon_card_3_9"],[36,3,10,"icon_card_3_10"],[37,3,11,"icon_card_3_11"],[38,3,12,"icon_card_3_12"],[39,3,13,"icon_card_3_13"],[40,4,1,"icon_card_4_1"],[41,4,2,"icon_card_4_2"],[42,4,3,"icon_card_4_3"],[43,4,4,"icon_card_4_4"],[44,4,5,"icon_card_4_5"],[45,4,6,"icon_card_4_6"],[46,4,7,"icon_card_4_7"],[47,4,8,"icon_card_4_8"],[48,4,9,"icon_card_4_9"],[49,4,10,"icon_card_4_10"],[50,4,11,"icon_card_4_11"],[51,4,12,"icon_card_4_12"],[52,4,13,"icon_card_4_13"],[53,5,14,"icon_card_5_1"],[54,6,15,"icon_card_5_2"]];

	var indexs = {"1":0,"2":1,"3":2,"4":3,"5":4,"6":5,"7":6,"8":7,"9":8,"10":9,"11":10,"12":11,"13":12,"14":13,"15":14,"16":15,"17":16,"18":17,"19":18,"20":19,"21":20,"22":21,"23":22,"24":23,"25":24,"26":25,"27":26,"28":27,"29":28,"30":29,"31":30,"32":31,"33":32,"34":33,"35":34,"36":35,"37":36,"38":37,"39":38,"40":39,"41":40,"42":41,"43":42,"44":43,"45":44,"46":45,"47":46,"48":47,"49":48,"50":49,"51":50,"52":51,"53":52,"54":53};

	var indexNames = {"id":0,"type":1,"number":2,"iconId":3};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanCard, PlanBase );

var pro = PlanCard.prototype;

pro.getIconid = function(id)
{
	var data = this.findById(id);
	return data.iconId
};
pro.getType = function(id)
{
	var data = this.findById(id);
	return data.type
};
pro.getId = function(id)
{
	var data = this.findById(id);
	return data.id
};
pro.getNumber = function(id)
{
	var data = this.findById(id);
	return data.number
};
module.exports = PlanCard;

