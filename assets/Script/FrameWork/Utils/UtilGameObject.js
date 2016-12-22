var exp = module.exports = {};

 

/** 
 * path : 预设体路径 ( example : 'prefabs/msg/MsgPrompt' )
 */
exp.createGameObjectByPath = function(path , cb){
    cc.loader.loadRes(path,function(err,prefab){          
          cb( cc.instantiate( prefab ) );  
    });
};

/**
 * 通过消息弹框表id实例化对象
 * id:PlanScene.js文件的id
 */
exp.createGameObjectById = function( id , cb ){
    this.createGameObjectByPrefabId(id , cb)
};

/**
 * 创建且添加到父节点
 * prefabsPath : 预设体路径 
 * parent : 父节点  
 */
exp.createAddparent = function( prefabsPath , parent , cb ){
    this.createGameObjectByPath(prefabsPath,function(obj){
        cb(obj);
        parent.addChild( obj ); 
    });
}, 
window.UtilGameObject = exp;