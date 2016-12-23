var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanMsg = function () {

	var data = [["MsgPrompt","prefabs/msg/MsgPrompt",3000],["MsgWait","prefabs/msg/MsgWait",3000],["MsgDialog","prefabs/msg/MsgDialog",3001]];

	var indexs = {"MsgPrompt":0,"MsgWait":1,"MsgDialog":2};

	var indexNames = {"id":0,"path":1,"order":2};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanMsg, PlanBase );

var pro = PlanMsg.prototype;

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
pro.getOrder = function(id)
{
	var data = this.findById(id);
	return data.order
};
module.exports = PlanMsg;

