/**
 * 功能：战队队伍
 * 作者：tony
 * 时间：2016-12-22
 */
var _ = require('underscore');
var FightArmy = cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        this.cardObjDic = [];
    },

    createCardObj : function( id ){ 
        var self = this;
        var prefabPath = PlanApi.PlanPrefabs.getPath('common_card');
        UtilGameObject.createAddparent( prefabPath , self.node ,function(obj){            
            obj.setPosition(-300+130*_.size(self.cardObjDic),1);
            obj.getComponent('ViewCard').setId( id );
            self.cardObjDic.push(obj);
        });
    },
});

module.exports = FightArmy;
