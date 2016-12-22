var exp = module.exports = {};

exp.IsNull = function( _value ){
    return null == _value;
};

exp.IsNotNull = function( _value ){
    return null != _value;
};

exp.getString = function( value ){
    if(!Number(value)){
        return value.toString();
    }else{
       return value;
    }
}
window.Utils = exp;