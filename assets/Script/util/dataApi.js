var _Goods  = require('./rowParser/Goods');
 
var exp = module.exports = {};  
var modules = exp.modules = {}; 

 
function main(){    
    var name = 'Goods';
    exp[name] = new _Goods( [["id","组id","开放时间","有效时间","掉落ID"],["id","group","openingTime","lastTime","rewardId"],[1,1,12,2,7101],[2,1,18,2,7101]]);   
}