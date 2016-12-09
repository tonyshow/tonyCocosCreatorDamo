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
                cc.loader.loadRes('msg',function(err,txt){      
                    cfg_json = txt;
                      //cc.log("加载msg.json %s ",JSON.stringify(cfg_json));
                });
            },
             gotoMsg:function( msgEnum ){
                 currName =  cfg_json[msgEnum.toString()];
                 //cc.log("消息弹框的预设路径 %s ",currName);
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
module.exports = MsgManager;
