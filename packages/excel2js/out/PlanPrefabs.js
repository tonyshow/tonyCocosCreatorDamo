var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanPrefabs = function () {

	var data = [["common_card","prefabs/msg/Card"],["common_cardEnemy","prefabs/msg/CardEnemy"]];

	var indexs = {"common_card":0,"common_cardEnemy":1};

	var indexNames = {"id":0,"path":1};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanPrefabs, PlanBase );

var pro = PlanPrefabs.prototype;

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
module.exports = PlanPrefabs;

