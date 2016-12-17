var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanGameWorld = function () {

	var data = [["com_timeout","连接超时"]];

	var indexs = {"com_timeout":0};

	var indexNames = {"id":0,"cht_world":1};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanGameWorld, PlanBase );

var pro = PlanGameWorld.prototype;

pro.getWorld = function( id ){
	var language = PlanApi.PlanGameConfig.getValue('language');
	var row = this.findRowById(id);
	var ncol = this.indexNames[language+'_world'];
	var data = this.rowDataByRow(row);
	return data[ncol];
};

module.exports = PlanGameWorld;

