/**
 * json数据管理类
 * 作者 : tony
 * 时间 ：2016-12-8 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore');

    
var JsonBase = function ( data , indexs  , indexNames) {    
     EventEmitter.call(this);
     this.data = data;
     this.indexs =indexs;
     this.indexNames = indexNames;
}; 

var pro = JsonBase.prototype;

/**
 * 通过id获取行数据
 */
pro.findById = function( id ){
    var row= this.findRowById(id);
    var rowData = this.rowDataByRow(row);
    var toJson = {};
 
    _.each(this.indexNames,function( index,name ){
        toJson[name]=rowData[index];
    });   
    return toJson;
};

/**
 * 通过row(行号)获取行数据
 */
pro.rowDataByRow = function( row ){
    var rowData = this.data[row]; 
    cc.log(' rowDataByRow row：%s rowData : %s ',row, JSON.stringify(rowData) );
    return rowData;
};

/**
 * 通过id找到行
 */
pro.findRowById = function( id ){
    var row = this.indexs[id];
    cc.log(' findRowById  row : %s ',row);
    return row;
};

module.exports = JsonBase;