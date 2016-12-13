var DataBase = require('../DataBase'),
util = require('util');

var DataActivetyStrength = function () {

	var data = [[1,1,12,2,7101],[2,1,18,2,7101]];

	var indexs = {"1":0,"2":1};

	var indexNames = {"id":0,"group":1,"openingTime":2,"lastTime":3,"rewardId":4};

	DataBase.call( this, data , indexs , indexNames );

};

util.inherits( DataActivetyStrength, DataBase );

module.exports = DataActivetyStrength;

