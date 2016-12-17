var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanGameConfig = function () {

	var data = [["waitTime",2,"网络等待弹框等待时间"],["language","cht","语言"],["maskOpacity",200,"蒙版透明度"]];

	var indexs = {"waitTime":0,"language":1,"maskOpacity":2};

	var indexNames = {"id":0,"value":1,"note":2};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanGameConfig, PlanBase );

var pro = PlanGameConfig.prototype;

pro.getNote = function(id)
{
	var data = this.findById(id);
	return data.note
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
module.exports = PlanGameConfig;

