/*
* 游戏弹框管理器
* 作者：tony
*/
var MgMsg = (function(){   
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

            //创建消息弹框
            //cb : 返回实例化的对象
            createObj:function( id , cb ){
                var data = DataApi.DataMsg.findById(id);
                var path = data.path;
                var order = data.order;
                UtilGameObject.createGameObjectByPath(path,function(_obj){
                    cc.director.getScene().addChild( _obj , order ); 
                    if(!!cb){
                        cb( _obj );
                    }                    
                });
            },

            //创建消息弹框
            //cb：返回弹框主控制脚本 脚本名为第一个参数：id           
            createComponent:function(id,cb){
                this.createObj(id,function(obj){
                    var compt= obj.getComponent(id);
                    if(!!cb){
                        cb(compt)
                    } 
                })
            }
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

window.MgMsg=MgMsg;
