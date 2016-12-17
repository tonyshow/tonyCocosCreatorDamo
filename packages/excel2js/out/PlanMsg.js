var PlanBase = require('../PlanBase'),
util = require('util');

var PlanMsg = function () {

	var data = [["MsgTextPrompt","prefabs/msg/MsgTextPrompt",3000],["MsgTestPrompt","prefabs/msg/MsgTestPrompt",3000]];

	var indexs = {"MsgTextPrompt":0,"MsgTestPrompt":1};

	var indexNames = {"id":0,"path":1,"order":2};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanMsg, PlanBase );

var pro = PlanMsg.prototype;

pro.getPath = function(id)
{
	var data = this.findById(id);
	return data.path
}
pro.getId = function(id)
{
	var data = this.findById(id);
	return data.id
}
pro.getOrder = function(id)
{
	var data = this.findById(id);
	return data.order
}
module.exports = PlanMsg;

