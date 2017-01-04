/**
* 本地数据管理
*/
var exp = module.exports = {};

var modules = exp.modules = {};

var names =['PlanCommonParameter', 'PlanScene', 'PlanGameWorld', 'PlanDialog', 'PlanCard', 'PlanGameConfig', 'PlanSpritePath', 'PlanMsg', 'PlanPrefabs'];

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
	else if("PlanDialog"==name){
		var PlanDialog = require('./../../MgData/PlanData/PlanDialog');
		return new PlanDialog();
	}
	else if("PlanCard"==name){
		var PlanCard = require('./../../MgData/PlanData/PlanCard');
		return new PlanCard();
	}
	else if("PlanGameConfig"==name){
		var PlanGameConfig = require('./../../MgData/PlanData/PlanGameConfig');
		return new PlanGameConfig();
	}
	else if("PlanSpritePath"==name){
		var PlanSpritePath = require('./../../MgData/PlanData/PlanSpritePath');
		return new PlanSpritePath();
	}
	else if("PlanMsg"==name){
		var PlanMsg = require('./../../MgData/PlanData/PlanMsg');
		return new PlanMsg();
	}
	else if("PlanPrefabs"==name){
		var PlanPrefabs = require('./../../MgData/PlanData/PlanPrefabs');
		return new PlanPrefabs();
	}
}
function doman(){   
    for(var i = 0 ; i < 9 ; ++i ){
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
