var ViewCard = cc.Class({
    extends: ViewCardBase,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        this._super();
        var DataCard = require('./../MgData/Data/DataCard');

        cc.log('ViewCard.onLoad = %s',this.id  );
        this.dataCard = new DataCard(  this.id  );
        this.refreshUI();
    }, 

    setId : function( id ){ 
        cc.log('ViewCard.setId = %s',id );
        this.id = id;
    },

});

module.exports = ViewCard;