export const HeroType = {
    1: {
        name: '普通',
        color: 'green'
    },
    2: {
        name: '罕见',
        color: 'purple'
    },
    3: {
        name: '特别',
        color: 'yellow'
    },
    4: {
        name: '稀有',
        color: 'pink'
    },
    5: {
        name: '传说',
        color: 'red'
    }
} 

const Pool1 = [
    {
        name: '蒙奇D路飞',
        type: 1,
        need: []
    },
    {
        name: '娜美',
        type: 1,
        need: []
    },
    {
        name: '罗罗诺亚索隆',
        type: 1,
        need: []
    },
    {
        name: '乌索普',
        type: 1,
        need: []
    },
    {
        name: '海军剑兵',
        type: 1,
        need: []
    },
    {
        name: '海军炮兵',
        type: 1,
        need: []
    },
    {
        name: '巴基',
        type: 1,
        need: []
    },
    {
        name: '山治',
        type: 1,
        need: []
    },

    {
        name: '托尼托尼乔巴',
        type: 1,
        need: []
    },
]

const Pool2 = [
    {
        name: '波特卡斯D艾斯',
        type: 2,
        need: ['蒙奇D路飞', '海军炮兵']
    },
    {
        name: '妮可罗宾',
        type: 2,
        need: ['娜美', '山治']
    },
    {
        name: '布鲁克',
        type: 2,
        need: ['罗罗诺亚索隆', '托尼托尼乔巴']
    },
    {
        name: '狙击王乌索普',
        type: 2,
        need: ['乌索普', '乌索普']
    },
    {
        name: '弗兰奇',
        type: 2,
        need: ['乌索普', '蒙奇D路飞']
    },
    {
        name: 'CP9猫头鹰',
        type: 2,
        need: ['海军剑兵', '海军剑兵']
    },
    {
        name: 'CP9布鲁诺',
        type: 2,
        need: ['海军炮兵', '海军炮兵']
    },
    {
        name: '达斯琪',
        type: 2,
        need: ['海军剑兵', '海军炮兵']
    },
    {
        name: '小八',
        type: 2,
        need: ['海军炮兵', '娜美']
    },
    {
        name: '佩罗娜',
        type: 2,
        need: ['巴基', '娜美']
    },
    {
        name: '依玛祖娜',
        type: 2,
        need: ['山治', '罗罗诺亚索隆']
    },
    {
        name: '培波',
        type: 2,
        need: ['托尼托尼乔巴', '蒙奇D路飞']
    },
    {
        name: '托尼托尼乔巴蓝波球强化',
        type: 2,
        need: ['托尼托尼乔巴', '托尼托尼乔巴']
    },
]

const Pool3 = [
    {
        name: '蒙奇D路飞 二档',
        type: 3,
        need: ['蒙奇D路飞', '蒙奇D路飞', '蒙奇D路飞']
    },
    {
        name: '娜美 天候棒',
        type: 3,
        need: ['娜美', '娜美', '娜美']
    },
    {
        name: '山治黑足',
        type: 3,
        need: ['山治', '山治', '山治']
    },
    {
        name: '罗罗诺亚索隆鬼气',
        type: 3,
        need: ['罗罗诺亚索隆', '罗罗诺亚索隆', '罗罗诺亚索隆']
    },
    {
        name: '巴基特制巴基炮弹',
        type: 3,
        need: ['巴基', '巴基', '巴基']
    },
    {
        name: '妮可罗宾 奥哈拉的恶魔',
        type: 3,
        need: ['妮可罗宾', '妮可罗宾', '托尼托尼乔巴']
    },
    {
        name: '马尔高 白胡子海贼团',
        type: 3,
        need: ['CP9布鲁诺', '波特卡斯D艾斯', '山治']
    },
    {
        name: '加卡 阿拉巴斯坦守护神',
        type: 3,
        need: ['CP9布鲁诺', 'CP9猫头鹰', '托尼托尼乔巴']
    },
    {
        name: '罗布路奇 CP9 道力 4000',
        type: 3,
        need: ['CP9猫头鹰', '妮可罗宾', '蒙奇D路飞']
    },
    {
        name: '卡彭匪帮贝基',
        type: 3,
        need: ['CP9猫头鹰', '海军炮兵', '巴基']
    },
    {
        name: '特拉法尔加罗',
        type: 3,
        need: ['培波', '达斯琪', '巴基']
    },
    {
        name: '巴索罗缪熊',
        type: 3,
        need: ['培波', '弗兰奇', '罗罗诺亚索隆']
    },
    {
        name: 'X德雷克',
        type: 3,
        need: ['达斯琪', 'CP9猫头鹰', '托尼托尼乔巴']
    },
    {
        name: '基拉',
        type: 3,
        need: ['达斯琪', '布鲁克', '巴基']
    },
    {
        name: '斯摩格',
        type: 3,
        need: ['海军炮兵', '达斯琪', '海军剑兵']
    },
    {
        name: '本萨姆Mr.2',
        type: 3,
        need: ['依玛祖娜', '妮可罗宾', '娜美']
    },
    {
        name: '依玛祖娜革命军',
        type: 3,
        need: ['依玛祖娜', '依玛祖娜']
    },
    {
        name: '海贼5号合体 巨大机器战士',
        type: 3,
        need: ['弗兰奇', '弗兰奇', '罗罗诺亚索隆']
    },
    {
        name: '克洛克达尔 前任七武海',
        type: 3,
        need: ['弗兰奇', '狙击王乌索普', '巴基']
    },
    {
        name: '月光莫利亚',
        type: 3,
        need: ['布鲁克', '布鲁克', '山治']
    },
    {
        name: '贝鲁梅伯',
        type: 3,
        need: ['布鲁克', '罗罗诺亚索隆', '山治']
    },
    {
        name: '波特卡斯D艾斯 白胡子海贼团第二队队长',
        type: 3,
        need: ['波特卡斯D艾斯', '波特卡斯D艾斯', '乌索普']
    },
    {
        name: '甚平七武海',
        type: 3,
        need: ['波特卡斯D艾斯', 'CP9猫头鹰', '巴基']
    },
    {
        name: '恶龙鱼人海贼团船长',
        type: 3,
        need: ['小八', '小八', '蒙奇D路飞']
    },
    {
        name: '克洛船长 百计',
        type: 3,
        need: ['小八', '海军剑兵', '罗罗诺亚索隆']
    },
    {
        name: '斯库亚德 白胡子旗下大涡蜘蛛',
        type: 3,
        need: ['托尼托尼乔巴蓝波球强化', '弗兰奇', '娜美']
    },
    {
        name: '托尼托尼乔巴皮毛强化',
        type: 3,
        need: ['托尼托尼乔巴蓝波球强化', '依玛祖娜', '海军剑兵']
    },
    {
        name: '托尼托尼乔巴头脑强化',
        type: 3,
        need: ['托尼托尼乔巴蓝波球强化', '妮可罗宾', '巴基']
    },
    {
        name: '巴兹尔霍金斯',
        type: 3,
        need: ['佩罗娜', 'CP9布鲁诺', '乌索普']
    },
    {
        name: '尤斯塔斯基德',
        type: 3,
        need: ['佩罗娜', '培波', '巴基']
    },
    {
        name: '神艾尼路 空岛伪神',
        type: 3,
        need: ['狙击王乌索普', '培波', '山治']
    },
    {
        name: '乌索普 火炎弹',
        type: 3,
        need: ['狙击王乌索普', '狙击王乌索普']
    },
    {
        name: '阿布萨罗姆 透明人',
        type: 3,
        need: ['月光莫利亚', '娜美']
    }
]

const Pool4 = [
    
]

const Pool5 = [
    
]

export const zHeroPool = [...Pool1, ...Pool2, ...Pool3, ...Pool4, ...Pool5];