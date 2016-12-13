/*
* 游戏弹框管理器
* 作者：tony
*/
var MsgManager = (function(){   
    var instantiated;
    var currName;
    var cfg_json;
    function init(){
        return {
            loadCfg_json :function(){
                var self = this;  
            },
             gotoMsg:function( EnumMsg ){
                 currName =  cfg_json[EnumMsg.toString()];
            },
        }
    }

    return {
        Inst:function(){
            if(null == instantiated)
            {
                instantiated = init();
                instantiated.loadCfg_json();
            }
            return instantiated;
        }
    } 
})();

window.MsgManager=MsgManager;
