var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanGameWorld = function () {

	var data = [["com_timeout","连接超时"],["dialog_1_1","你想干嘛"],["dialog_1_2","你猜猜咯"],["dialog_1_3","什么鬼"],["card_type_1","黑"],["card_type_2","红"],["card_type_3","梅"],["card_type_4","方"],["card_type_5","小"],["card_type_6","大"],["msgPrompt_pass","过"],["msgPrompt_enemyPower","敌方出战权"],["ViewFight_minePower","我权"],["ViewFight_enemyPower","敌权"],["SetLabelWorld_StartGame","开始游戏"]];

	var indexs = {"com_timeout":0,"dialog_1_1":1,"dialog_1_2":2,"dialog_1_3":3,"card_type_1":4,"card_type_2":5,"card_type_3":6,"card_type_4":7,"card_type_5":8,"card_type_6":9,"msgPrompt_pass":10,"msgPrompt_enemyPower":11,"ViewFight_minePower":12,"ViewFight_enemyPower":13,"SetLabelWorld_StartGame":14};

	var indexNames = {"id":0,"cht_world":1};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanGameWorld, PlanBase );

var pro = PlanGameWorld.prototype;

pro.getWorld = function( id ){
	var language = PlanApi.PlanGameConfig.getValue('language');
	var row = this.findRowById(id);
	var ncol = this.indexNames[language+'_world'];
	var data = this.rowDataByRow(row);
	return data[ncol];
};

module.exports = PlanGameWorld;

