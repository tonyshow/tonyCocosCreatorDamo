module.exports = {
    //战队
    EnumFightArmy : {
        NONE  : 0,  //还未分队
        MINE  : 1,  //我方
        ENEMY : 2   //敌方
    },

    //战斗卡牌状态
    FightCardState : {
        NONE:1,     //未选中
        CHOICE:2,   //选中
        Fighting:3, //出站
        Finsh : 4   //完成(通知出牌完成)
    },

    //出战权
    OutFightPower : {
        NONE:0,
        DIRCETOR:1, //导演
        MINE:2,     //我方
        ENEMY:3     //敌方
    },

    //战斗按钮组类型
    FightBtnGroup:{
        NONE:1,
        START:2,
        GAME:3,
        END:4
    },
    
    FightThinkAI:{
        pass:1,
        atk:2,//攻击
    },

    /**
     * 战队卡牌数量上限
     */
    ArmyCardLimit:5,

    /**
     * 一组卡牌数量上限
     */
    OneGroupCardLimit:54

}