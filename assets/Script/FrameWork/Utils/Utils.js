var exp = module.exports = {};

exp.IsNull = function( _value ){
    return null == _value;
};

exp.IsNotNull = function( _value ){
    return null != _value;
};

window.Utils = exp;