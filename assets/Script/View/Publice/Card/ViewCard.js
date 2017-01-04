var ViewCard = cc.Class({
    extends: ViewCardBase,

    properties: {

    },
  
    onLoad: function () {
        this._super();
        var DataCard = require('./../../../MgData/Data/DataCard'); 
        this.dataCard = new DataCard(  this.id  );
        this.refreshUI(); 
    }, 

    setId : function( id ){  
        this.id = id;
    }, 
}); 

module.exports = ViewCard;