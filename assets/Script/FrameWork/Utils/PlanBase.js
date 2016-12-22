/**
 * json数据管理类
 * 作者 : tony
 * 时间 ：2016-12-8 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore');

    
var PlanBase = function ( data , indexs  , indexNames) {    
     EventEmitter.call(this);
     this.data = data;
     this.indexs =indexs;
     this.indexNames = indexNames;
}; 

var pro = PlanBase.prototype;

/**
 * 通过id获取行数据
 */
pro.findById = function( id ){
    var toJson = {};
    // id = Utils.getString(id);
    var row= this.findRowById(id);
    if( null == row ){
     //   cc.log('error ---- not find row id = %s , row = %s',id,row);
        return toJson;
    }
    var rowData = this.rowDataByRow(row);
    if( null == rowData){
    //    cc.log('error ---- not find rowData : row = %s , id = %s',row,id);
        return toJson;
    }   
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
    return rowData;
};

/**
 * 通过id找到行
 */
pro.findRowById = function( id ){
   // cc.log(' this.indexs %j  ---- not find row id = %s',JSON.stringify(this.indexs) ,id );
    var row = this.indexs[id];
    //cc.log('---------------------------------row = %s',row);
    return row;
};
  
module.exports= PlanBase;