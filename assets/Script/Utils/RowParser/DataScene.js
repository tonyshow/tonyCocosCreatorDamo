var DataBase = require('../DataBase'),
util = require('util');

var DataScene = function () {

	var data = [[1,"gameMain"],[2,"helloworld"]];

	var indexs = {"1":0,"2":1};

	var indexNames = {"id":0,"sceneName":1};

	DataBase.call( this, data , indexs , indexNames );

};

util.inherits( DataScene, DataBase );

var pro = DataScene.prototype;

pro.getScenename = function(id)
{
	var data = this.findById(id);
	return data.sceneName
}
pro.getId = function(id)
{
	var data = this.findById(id);
	return data.id
}
module.exports = DataScene;

