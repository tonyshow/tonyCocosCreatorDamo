/**
 * 封装pomelo网络协议库
 * 时间：2016-12-15
 * 作者：tony
 */
var Code = require('./../../Shared/code');
var exp = module.exports = {};

/*
 *   连接服务器
 * */
exp.connect = function (host, port, cb) {
    pomelo.init({host: host, port: port, log: true}, cb);
};
/*
 *   查询入口服务器
 *   @param {String} uid client user id.
 *   @param {Function} callback, signature: function callback(connectorServer, connectorServerPort){}
 * */
exp.queryEntry = function (uid, callback) {
    pomelo.request('gate.gateHandler.queryEntry', {uid: uid}, function (data) {
        pomelo.disconnect();
        if (data.code !== 200) {
            console.error('queryEntry failed!');
            callback();
            return;
        }
        callback(data.host, data.port);
    });
};

/*
 *   从connector server登录
 *   @param {String} host connector server ip.
 *   @param {Number} port connector server port.
 *   @param {String} MAC client MAC.
 *   @param {Function} callback signature: function callback(data){}
 * */
exp.entry = function (host, port, MAC, pwd, callback) {
    pomelo.request('connector.entryHandler.entry', {MAC: MAC, password: pwd,platform:"guonei_ios"}, function (data) {
        callback(data);
    });
};
 

exp.createPlayer = function (MAC, cb) {
    pomelo.request('connector.roleHandler.createPlayer', {MAC: MAC, name: MAC, pwd: MAC, picId: 1},
        function (res) {
            var success = (res.code === 200);
            cb(success);
        });
};


exp.enterScene= function (){ 
    cc.log('area.playerHandler.enterScene');
    pomelo.request("area.playerHandler.enterScene", {}, function(jData){
        cc.log(JSON.stringify(jData));
    });
};

exp.afterLogin = function(data, MAC) {
    cc.log('after login begin enter scene...%s',MAC);  
    /**
     * 处理登录请求
     */
    function login(data) {
        if (data.code === 1003) { 
            exp.createPlayer(MAC, function (success) {
                if (!success) {
                    cc.log('createPlayer create failed!');
                    return;
                }
                exp.enterScene();
            });
            return;
        }
        cc.log('entry ok!already has player.try enter scene...');
        exp.enterScene();
    } 
    login(data); 
}


window.PomeloClient = exp;