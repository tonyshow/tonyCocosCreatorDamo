/*
* 游戏场景管理器
* 作者：tony
*/
var sceneManager = (function () {
    var instantiated;
    
    var currSceneName = ""; 
    var scene_json;
    function init() {
        /*这里定义单例代码*/
        return {
             
            loadScene_json :function(){
                cc.loader.loadRes('scene',function(err,txt){      
                    scene_json = txt;
                     //cc.log("加载scene.json %s ",JSON.stringify(txt));
                });
            }, 

            gotoScene : function( sceneEnum ){    
                currSceneName =  scene_json[sceneEnum.toString()];
                cc.director.loadScene( currSceneName );              
            }, 

            getCurrScene :function(){
                 return currSceneName;
            },
        };
    }

    return {
        Inst: function () {
            if (!instantiated) {
                instantiated = init();
                instantiated.loadScene_json();
            }
            return instantiated;
        }
    };
})(); 

module.exports = sceneManager;