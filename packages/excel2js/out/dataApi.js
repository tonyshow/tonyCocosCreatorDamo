/**
* 本地数据管理
*/
var exp = module.exports = {};

var modules = exp.modules = {};

var names =['DataCommonParameter', 'DataActivetyStrength', 'DataScene'];

function create( name ){
	if("DataCommonParameter"==name){
		var DataCommonParameter = require('./RowParser/DataCommonParameter');
		return new DataCommonParameter();
	}
	else if("DataActivetyStrength"==name){
		var DataActivetyStrength = require('./RowParser/DataActivetyStrength');
		return new DataActivetyStrength();
	}
	else if("DataScene"==name){
		var DataScene = require('./RowParser/DataScene');
		return new DataScene();
	}
}
function doman(){   
    for(var i = 0 ; i < 3 ; ++i ){
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
window.DataApi = exp
