var DataBase = require('../DataBase'),
util = require('util');

var DataMsg = function () {

	var data = [["MsgTextPrompt","prefabs/msg/MsgTextPrompt",3000],["MsgTestPrompt","prefabs/msg/MsgTestPrompt",3000]];

	var indexs = {"MsgTextPrompt":0,"MsgTestPrompt":1};

	var indexNames = {"id":0,"path":1,"order":2};

	DataBase.call( this, data , indexs , indexNames );

};

util.inherits( DataMsg, DataBase );

var pro = DataMsg.prototype;

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
module.exports = DataMsg;

