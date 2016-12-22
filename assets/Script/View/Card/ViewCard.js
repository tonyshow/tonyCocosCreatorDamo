var ViewCard = cc.Class({
    extends: ViewCardBase,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this._super();
        var DataCard = require('./../../MgData/Data/DataCard'); 
        this.dataCard = new DataCard(  this.id  );
        this.refreshUI(); 
    }, 

    setId : function( id ){  
        this.id = id;
    }, 

}); 

module.exports = ViewCard;