var _Goods  = require('./rowParser/Goods');
let Goods=null;

 
var exp = module.exports = {}; 
  
var name = 'Goods';


Object.defineProperty(exp, name, {
    get:function(){
        return function(){
            var mod = this.modules[name];
            if (!mod  ) {

                cc.loader.loadRes('Goods',function(err,data){ 
                    mod = this.modules[name] = new _Goods( data );
                    console.log('add design data [%s] load ok!', name);
                });
            }
            return mod;
        }
    }
});
 

