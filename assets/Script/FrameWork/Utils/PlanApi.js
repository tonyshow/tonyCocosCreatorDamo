/**
* 本地数据管理
*/
var exp = module.exports = {};

var modules = exp.modules = {};

var names =['PlanCommonParameter', 'PlanScene', 'PlanGameWorld', 'PlanGameConfig', 'PlanMsg'];

function create( name ){
	if("PlanCommonParameter"==name){
		var PlanCommonParameter = require('./../../MgData/PlanData/PlanCommonParameter');
		return new PlanCommonParameter();
	}
	else if("PlanScene"==name){
		var PlanScene = require('./../../MgData/PlanData/PlanScene');
		return new PlanScene();
	}
	else if("PlanGameWorld"==name){
		var PlanGameWorld = require('./../../MgData/PlanData/PlanGameWorld');
		return new PlanGameWorld();
	}
	else if("PlanGameConfig"==name){
		var PlanGameConfig = require('./../../MgData/PlanData/PlanGameConfig');
		return new PlanGameConfig();
	}
	else if("PlanMsg"==name){
		var PlanMsg = require('./../../MgData/PlanData/PlanMsg');
		return new PlanMsg();
	}
}
function doman(){   
    for(var i = 0 ; i < 5 ; ++i ){
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
window.PlanApi = exp;
