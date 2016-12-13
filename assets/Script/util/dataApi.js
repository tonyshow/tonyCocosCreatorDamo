/**
 * 本地数据管理
 */
var JsonActivetyStrength = require('./rowParser/JsonActivetyStrength');
var exp = module.exports = {};  
var modules = exp.modules = {}; 


modules['JsonActivetyStrength'] = new JsonActivetyStrength();