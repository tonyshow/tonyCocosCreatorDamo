var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanDialog = function () {

	var data = [[1,2,1,"dialog_1_1"],[2,3,1,"dialog_1_2"],[3,-1,1,"dialog_1_3"]];

	var indexs = {"1":0,"2":1,"3":2};

	var indexNames = {"id":0,"nextId":1,"group":2,"dialogTxt":3};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanDialog, PlanBase );

var pro = PlanDialog.prototype;

pro.getDialogtxt = function(id)
{
	var data = this.findById(id);
	return data.dialogTxt
};
pro.getNextid = function(id)
{
	var data = this.findById(id);
	return data.nextId
};
pro.getGroup = function(id)
{
	var data = this.findById(id);
	return data.group
};
pro.getId = function(id)
{
	var data = this.findById(id);
	return data.id
};
module.exports = PlanDialog;

