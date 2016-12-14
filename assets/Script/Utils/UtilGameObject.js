var exp = module.exports = {};

 

/** 
 * path : 预设体路径 ( example : 'prefabs/msg/MsgTextPrompt' )
 */
exp.createGameObjectByPath = function(path , cb){
    cc.loader.loadRes(path,function(err,prefab){          
          cb( cc.instantiate( prefab ) );  
    });
};

/**
 * 通过消息弹框表id实例化对象
 * id:DataMsg.js文件的id
 */
exp.createGameObjectById = function( id , cb ){
    createGameObjectByPrefabId(id , cb)
};

window.UtilGameObject = exp;