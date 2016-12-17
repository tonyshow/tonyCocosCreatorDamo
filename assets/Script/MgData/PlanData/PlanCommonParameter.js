var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanCommonParameter = function () {

	var data = [["relive",2,"复活次数"]];

	var indexs = {"relive":0};

	var indexNames = {"id":0,"value":1,"describe":2};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanCommonParameter, PlanBase );

var pro = PlanCommonParameter.prototype;

pro.getDescribe = function(id)
{
	var data = this.findById(id);
	return data.describe
};
pro.getId = function(id)
{
	var data = this.findById(id);
	return data.id
};
pro.getValue = function(id)
{
	var data = this.findById(id);
	return data.value
};
module.exports = PlanCommonParameter;

