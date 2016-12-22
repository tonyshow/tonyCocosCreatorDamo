/*
* 游戏场景管理器
* 作者：tony
*/
var MgScene = (function () {
    var instantiated;
    
    var currSceneName = ""; 
    function init() {
        /*这里定义单例代码*/
        return { 
            gotoScene : function( EnumScene ){    
                cc.log( 'EnumScene = %s',EnumScene); 
                var data = PlanApi.PlanScene.findById( Number(EnumScene) ); 
                currSceneName = data.sceneName;
                cc.log( 'currSceneName = %s',currSceneName);  
                cc.director.loadScene( currSceneName );              
            }, 

            gotoSceneByName : function(name){
                cc.director.loadScene( name ); 
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
            }
            return instantiated;
        }
    };
})(); 

window.MgScene=MgScene;