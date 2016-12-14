var DataBase = require('../DataBase'),
util = require('util');

var DataCommonParameter = function () {

	var data = [["relive",2,"复活次数"]];

	var indexs = {"relive":0};

	var indexNames = {"id":0,"value":1,"describe":2};

	DataBase.call( this, data , indexs , indexNames );

};

util.inherits( DataCommonParameter, DataBase );

var pro = DataCommonParameter.prototype;

pro.getDescribe = function(id)
{
	var data = this.findById(id);
	return data.describe
}
pro.getId = function(id)
{
	var data = this.findById(id);
	return data.id
}
pro.getValue = function(id)
{
	var data = this.findById(id);
	return data.value
}
module.exports = DataCommonParameter;

