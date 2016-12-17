/**
* 本地数据管理
*/
var exp = module.exports = {};

var modules = exp.modules = {};

var names =['PlanCommonParameter', 'PlanScene', 'PlanMsg'];

function create( name ){
	if("PlanCommonParameter"==name){
		var PlanCommonParameter = require('./RowParser/PlanCommonParameter');
		return new PlanCommonParameter();
	}
	else if("PlanScene"==name){
		var PlanScene = require('./RowParser/PlanScene');
		return new PlanScene();
	}
	else if("PlanMsg"==name){
		var PlanMsg = require('./RowParser/PlanMsg');
		return new PlanMsg();
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
window.PlanApi = exp
