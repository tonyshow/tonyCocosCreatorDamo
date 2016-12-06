/**
 * Created by kilua on 2016/6/30 0030.
 */

var util = require('util');

var IndexData = require('../jsonTable');

var Goods = function (data) {
    IndexData.call(this, data, [['index']]);
};

util.inherits(Goods, IndexData);

var pro = Goods.prototype;

pro.rowParser = function (row) {
    return row;
};

pro.getPrimaryKey = function () {
    return 'id';
};

module.exports = function (data) {
    return new Goods(data);
};