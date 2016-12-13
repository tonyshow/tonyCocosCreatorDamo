/**
* 本地数据管理
*/
var exp = module.exports = {};

var modules = exp.modules = {};

var names =['JsonCommonParameter', 'JsonActivetyStrength'];

function create( name ){
	if("JsonCommonParameter"==name){
		var JsonCommonParameter = require('./rowParser/JsonCommonParameter');
		return new JsonCommonParameter();
	}
	else if("JsonActivetyStrength"==name){
		var JsonActivetyStrength = require('./rowParser/JsonActivetyStrength');
		return new JsonActivetyStrength();
	}
}
function doman(){   
    for(var i = 0 ; i < 2 ; ++i ){
        var name = names[i];
        Object.defineProperty(exp, name, {
            get: (function (name) {
                var mod = modules[name];
                return function () {
                {
                    mod = modules[name] = create( name );
                }
                return mod;
            }
            })(name)
        });
    } 
}
doman();
