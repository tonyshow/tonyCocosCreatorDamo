/**
 * Created by Administrator on 2016/3/25 0025.
 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter;

var _ = require('underscore');

var Data = function (data, rowParser) {
    EventEmitter.call(this);

    this.load(data, rowParser);
};

util.inherits(Data, EventEmitter);

var mapData = function (fields, item) {
    var obj = {};
    for (var k in fields) {
        obj[k] = item[fields[k]];
    }
    return obj;
};

Data.prototype.makeColumnIndex = function (data) {
    var fields = {};
    data[1].forEach(function (i, k) {
        fields[i] = k;
    });
    this.fields = fields;
    // 去除表头
    data.splice(0, 2);
};

Data.prototype.load = function (data, rowParser) {
    var self = this, result = {}, item, primaryKey = self.getPrimaryKey();
    self.makeColumnIndex(data);
    rowParser = rowParser || self.rowParser || _.identity;
    data.forEach(function (k, rowIndex) {
        item = rowParser(mapData(self.fields, k));
        if (primaryKey) {
            result[item[primaryKey]] = item;
        } else {
            result[rowIndex + 1] = item;
        }
    });

    self.data = result;
};

Data.prototype.reload = function (data) {
    this.load(data);
};

Data.prototype.findBy = function (attr, value) {
    var result = [];
    var i, item;
    for (i in this.data) {
        item = this.data[i];
        if (item[attr] === value) {
            result.push(item);
        }
    }
    return result;
};

Data.prototype.findBigger = function (attr, value) {
    var result = [];
    value = Number(value);
    var i, item;
    for (i in this.data) {
        item = this.data[i];
        if (Number(item[attr]) >= value) {
            result.push(item);
        }
    }
    return result;
};

Data.prototype.findSmaller = function (attr, value) {
    var result = [];
    value = Number(value);
    var i, item;
    for (i in this.data) {
        item = this.data[i];
        if (Number(item[attr]) <= value) {
            result.push(item);
        }
    }
    return result;
};

Data.prototype.findById = function (id) {
    return this.data[id];
};

Data.prototype.all = function () {
    return this.data;
};

/*
 * attention: cell data can not be an object.
 * @param {Object} data JSON data object.
 * @param {Array} indexList an list of a key list.
 * */
var IndexData = function (data, indexList) {
    Data.call(this, data);
    this.createIndexes(data, indexList);
    this.indexList = indexList;
};

util.inherits(IndexData, Data);

var pro = IndexData.prototype;

pro.createIndexes = function (data, indexList) {
    // create indexes.
    indexList = indexList || [];
    var i, indexName, indexColumnNames;
    for (i = 0; i < indexList.length; i++) {
        indexColumnNames = indexList[i];
        indexName = this.makeIndexName(indexColumnNames);
        if (this.indexExists(indexName)) {
            console.log('duplicated index found,ignored!name = ' + indexName);
            continue;
        }
        if (!this.createIndex(indexName, indexColumnNames)) {
            console.log('create index failed!name = ' + indexName);
            return;
        }
    }
};

pro.reload = function (data) {
    Data.prototype.reload.call(this, data);
    this.indexes = {};
    this.indexMap = {};
    this.createIndexes(data, this.indexList);
};

pro.makeIndexName = function (columnNames) {
    columnNames = columnNames || [];
    return columnNames.join('_');
};

pro.isColumnNamesValid = function (columnNames) {
    var i;
    for (i = 0; i < columnNames.length; i++) {
        if (this.fields[columnNames[i]] === undefined) {
            console.log('index field ' + columnNames[i] + ' not found!');
            return false;
        }
    }
    return true;
};

pro.makeIndexKey = function (row, columnNames) {
    var indexKey = [];
    columnNames.forEach(function (columnName) {
        indexKey.push(columnName);
        indexKey.push(row[columnName]);
    });
    return indexKey;
};

pro.createIndex = function (name, attrList) {
    var self = this;
    if (!self.indexes) {
        self.indexes = {};
    }
    if (!self.indexMap) {
        self.indexMap = {};
    }
    if (self.indexes[name]) {
        console.log('index with name' + name + ' already exists!');
        return false;
    }
    // column check.
    if (!self.isColumnNamesValid(attrList)) {
        return false;
    }
    self.indexes[name] = attrList;
    self.indexMap[name] = {};

    _.each(self.data, function (row, key) {
        var indexKey = self.makeIndexKey(row, attrList);
        if (!self.indexMap[name][indexKey]) {
            self.indexMap[name][indexKey] = [];
        }
        self.indexMap[name][indexKey].push(key);
    });
    return true;
};

pro.indexExists = function (name) {
    if (!this.indexes) {
        return false;
    }
    return this.indexes[name];
};
/*
 * @param {Object} indexKey a set of key-value pairs.
 * */
pro.findByIndex = function (indexKey) {
    var self = this;
    var indexName = self.getIndexName(indexKey);
    if (!indexName) {
        return null;
    }
    var indexData = self.indexMap[indexName];
    var keyList = self.indexes[indexName];
    // create compound key.
    var compoundKey = self.makeIndexKey(indexKey, keyList);

    var idxList = indexData[compoundKey] || [];
    var result = [];
    idxList.forEach(function (idx) {
        result.push(self.data[idx]);
    });

    return result.length === 1 ? result[0] : result;
};
/*
 * @param {Object} indexKey a set of key-value pairs.
 * */
pro.getIndexName = function (indexKey) {
    var columnNames = _.keys(indexKey);
    return _.findKey(this.indexes, function (indexColumnNames) {
            var foundColumnNames = columnNames.filter(function (columnName) {
                return (_.indexOf(indexColumnNames, columnName) !== -1);
            });
            return (foundColumnNames.length === indexColumnNames.length);
        }) || '';
};

module.exports = IndexData;