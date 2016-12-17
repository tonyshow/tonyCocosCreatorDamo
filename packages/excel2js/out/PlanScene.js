var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanScene = function () {

	var data = [[1,"gameMain"],[2,"helloworld"]];

	var indexs = {"1":0,"2":1};

	var indexNames = {"id":0,"sceneName":1};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanScene, PlanBase );

var pro = PlanScene.prototype;

pro.getScenename = function(id)
{
	var data = this.findById(id);
	return data.sceneName
};
pro.getId = function(id)
{
	var data = this.findById(id);
	return data.id
};
module.exports = PlanScene;

