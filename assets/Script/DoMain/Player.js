 var Player = (function(){   
    var instantiated = null; 
     
    function init(){ 
        return { 
           initPro : function(){
               //玩家名字
               this.name = "name";
               //玩家等级
               this.lv = 0;
           }, 
           getName : function(){
               cc.log('Player name : %s',this.name);     
               this.setName();          
           },
           setName : function(){
               cc.log('setName');
           }, 
                      
        }
    }

    return {
        Inst:function(){
            if(null == instantiated){
                instantiated = init(); 
                instantiated.initPro();
            }
            return instantiated;
        }
    } 
})();

window.Player = Player;