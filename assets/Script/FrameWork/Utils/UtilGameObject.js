var exp = module.exports = {};

 

/** 
 * path : 预设体路径 ( example : 'prefabs/msg/MsgPrompt' )
 */
exp.createGameObjectByPath = function(path , cb){
    cc.log('this.createGameObjectByPath   path =  %s ',path);
    cc.loader.loadRes(path,function(err,prefab){          
          cb( cc.instantiate( prefab ) );  
    });
};

/**
 * 通过消息弹框表id实例化对象
 * id:PlanScene.js文件的id
 */
exp.createGameObjectById = function( id , cb ){
    createGameObjectByPrefabId(id , cb)
};

window.UtilGameObject = exp;