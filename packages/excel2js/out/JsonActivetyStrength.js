var JsonBase = require('../JsonBase'),
util = require('util');

var JsonActivetyStrength = function () {

	var data = [[1,1,12,2,7101],[2,1,18,2,7101]];

	var indexs = {"1":0,"2":1};

	var indexNames = {"id":0,"group":1,"openingTime":2,"lastTime":3,"rewardId":4};

	JsonBase.call( this, data , indexs , indexNames );

};

util.inherits( JsonActivetyStrength, JsonBase );

module.exports = JsonActivetyStrength;

