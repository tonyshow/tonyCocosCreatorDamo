var JsonBase = require('../JsonBase'),
util = require('util');

var JosnActivetyStrength = function () {

	var data = [[1,1,12,2,7101],[2,1,18,2,7101]];

	var indexs = {1:3,2:4};

	var indexNames = {"id":0,"group":1,"openingTime":2,"lastTime":3,"rewardId":4};

	JsonBase.call( this, data , indexs , indexNames );

};

util.inherits( JosnActivetyStrength, JsonBase );

module.exports = JosnActivetyStrength;

