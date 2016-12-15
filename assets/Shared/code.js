module.exports = {
    OK: 200,
    FAIL: 500,
    // 数据库错误
    DB_ERROR: 501,
    // 钻石不足
    DIAMOND_NUM_NOT_ENOUGH: 502,
    CONNECTOR: {
        // MAC错误
        FA_MAC_ERROR: 1001,
        // 密码错误
        FA_PWD_ERROR: 1002,
        // 角色不存在
        FA_PLAYER_NOT_EXIST: 1003,
        // 角色已存在
        FA_PLAYER_IS_EXIST: 1004,
        // 未知平台
        PLATFORM_UNKNOWN: 1005,
        // 接口未启用
        PLATFORM_DISABLED: 1006,
        APP_ID_ERROR: 1007,
        TOKEN_ERROR: 1008,
        SIGNATURE_ERROR: 1009
    },
    GATE: {
        // 无可用服务器
        FA_NO_SERVER_AVAILABLE: 2001
    },
    AREA: {
        // 已在关卡中
        PLAYER_IN_BARRIER: 3001,
        // 无此关卡数据
        INVALID_BARRIER: 3002,
        // 前置关卡未通过
        LAST_BARRIER_NOT_PASSED: 3003,
        // 体力不足
        LACK_ENERGY: 3004,
        // 技能未就绪
        SKILL_NOT_READY: 3005,
        // 解散队伍
        DISBAND_TEAM: 3006,
        // 背包已满
        BAG_IS_FULL: 3007,
        // 体力已满
        REACH_MAX_ENERGY: 3008,
        // 等级已满
        LV_UPPER_LIMIT: 3009,
        // 金币不足
        GOLD_NOT_ENOUGH: 3010,
        // 物品不存在
        ITEM_NOT_EXIST: 3011,
        // 物品不足
        ITEM_NOT_ENOUGH: 3012,
        // 猎魔人不存在
        HERO_NOT_EXIST: 3013,
        // 技能不存在
        HERO_SKILL_NOT_FOUND: 3014,
        // 技能未解锁
        HERO_SKILL_LOCK: 3015,
        // 技能满级
        HERO_SKILL_REACH_MAX: 3016,
        // 猎魔人满级
        HERO_REACH_MAX_LV: 3017,
        // 等级不足
        LV_NOT_ENOUGH: 3018,
        // 宠物不存在
        PET_NOT_EXIST: 3019,
        // 猎魔人等级不足
        HERO_LV_LOW: 3020,
        // 无此猎魔人
        LACK_HERO: 3021,
        // 前置章节未通过
        PRE_CHAPTER_NOT_PASSED: 3022,
        // 源质不足
        LACK_KEY: 3023,
        // 章节已解锁
        CHAPTER_UNLOCKED: 3024,
        // 功能未开放
        FUNC_DISABLED: 3025,
        // 关卡达到攻打次数上限
        REACH_ATK_MAX: 3026,
        // 扫荡券不足
        LACK_WIPE_TICKET: 3027,
        // 关卡未通过
        BARRIER_NOT_PASSED: 3028,
        // 达到关卡购买次数上限
        REACH_BARRIER_RESET_MAX: 3029,
        // 达到体力购买次数上限
        REACH_BUY_ENERGY_MAX: 3030,
        // 章节星数不足
        LACK_CHAPTER_STARS: 3031,
        // 章节星级宝箱已领取
        CHAPTER_STAR_AWARD_DREW: 3032,
        // 达到复活次数上限
        REACH_REVIVE_MAX: 3033,
        // 达到购买时间次数上限
        REACH_BUY_TIME_MAX: 3034,
        // 背包空间不足
        NOT_ENOUGH_BAG_SLOTS: 3035,
        // 宠物不足
        NOT_ENOUGH_PET: 3036,
        // 不在关卡中
        NOT_IN_BARRIER: 3037,
        // 货币不足
        LACK_MONEY: 3038,
        // 无此引导
        NO_SUCH_GUIDE: 3039,
        // 引导奖励已领取
        GUIDE_PRIZE_DREW: 3040,
        // 商店需要刷新
        SHOP_SHOULD_REFRESH: 3041,
        // 达到商店商品每日购买限制次数
        SHOP_REACH_DAILY_MAX: 3142,
        // 无此活动
        NO_SUCH_ACTIVITY: 3143,
        // 活动类型不符
        ACTIVITY_TYPE_ERROR: 3144,
        // 优惠商店无此商品
        NO_SUCH_DISCOUNT_GOODS: 3145,
        // 达到优惠商店商品最大购买次数
        REACH_DISCOUNT_SHOP_BUY_MAX: 3146,
        // 活动未开放
        ACTIVITY_NOT_OPEN: 3147,
        // 活动尚未达成
        ACTIVITY_NOT_FINISHED: 3148,
        // 活动奖励已领取
        ACTIVITY_AWARDS_DREW: 3149,

        // 无此装备
        NO_SUCH_EQUIP: 3150,
        // 已装备
        EQUIP_ARMED: 3151,
        // 精炼已满级满经验
        REFINE_MAX: 3152,
        // 无钻石精炼次数
        NO_DIAMOND_REFINE: 3153,
        // 该部位没有装备
        EMPTY_PART: 3154,
        // 没有排行榜奖励
        NO_RANKING_AWARDS: 3155,
        // 排行榜奖励已领取
        RANKING_AWARDS_DREW: 3156,
        // 熔炼材料数量不正确
        MELTING_MATERIAL_ERROR: 3157,
        // 无此buff
        NO_SUCH_BUFF: 3158,
        // 无尽赛事每日次数已用完
        NO_OCCASION_TIMES: 3159,
        // 无此赛事
        NO_SUCH_OCCASION: 3160,
        // 赛事类型错误
        OCCASION_MODE_ERROR: 3161,
        // 无此赛果
        NO_SUCH_ENDLESS_REPORT: 3162,
        // 赛果已领取
        ENDLESS_AWARDS_DREW: 3163,
        // 无尽复活次数已用完
        NO_ENDLESS_REVIVE_CNT: 3164,
        // 不在无尽单人模式战斗中
        NO_SINGLE_ENDLESS_FIGHTING: 3165,
        //洗练石不足
        LACK_WASH: 3166,
        // 单人模式尚未提交结算
        SINGLE_ENDLESS_NOT_COMMITTED: 3167,
        // 无尽模式宝箱曾重开过
        ENDLESS_BOX_EVER_REOPEN: 3168,
        //已经激活过了
        EQUIP_WASH_OPENED: 3169,
        //激活洗练成就条件未达成
        EQUIP_WASH_ACHIEVED_NO_ENOUGH: 3170,
        // 无尽宝箱已领取
        ENDLESS_BOX_EVER_DREW: 3171,
        //充值id不存在
        RECHAARGE_ID_NOT_EXIST: 3200
    },
    HERO: {
        // 添加猎魔人失败
        ADD_HERO_FAILED: 4001,
        // 猎魔人不存在
        HERO_IS_NOT_EXIST: 4002,
        // 猎魔人背包已满
        HERO_BAG_FULL: 4003,
        //解锁猎魔人条件未达成
        HERO_OPEN_LUCK_NOT_CONDITION:4004,
        //猎魔人已经解锁
        HERO_OPEN_LUCK_OK:4005,
        //猎魔人未解锁
        HERO_NOT_OPEN_LUCK:4006,
    },
    PET: {
        // 添加宠物失败
        ADD_PET_FAILED: 5001,
        // 宠物不存在
        PET_IS_NOT_EXIST: 5002,
        // 宠物背包已满
        PET_BAG_FULL: 5003
    },
    WORLD: {
        // 玩家已在线
        ALREADY_ONLINE: 6001,
        // 无此赛事
        NO_SUCH_OCCASION: 6002,
        // 已在待匹配队列中
        ALREADY_IN_MATCH_QUEUE: 6003,
        // 无尽匹配开始
        ENDLESS_MATCH_START: 6004,
        // 不在无尽战斗中
        NO_ENDLESS_FIGHTING: 6005,
        // 无尽单人模式开始
        ENDLESS_SINGLE_START:6006
    },
    MISSION:{
        //任务id不存在
        MISSION_ID_NOT_EXIST:7001,
        //未达成条件
        CONDITION_NOT_ENOUGH:7002,
        //已领取过
        HAD_AWARD:7003,
        //未达成进度
        PROGRESS_NO_ENOUGH:7004
    }
};