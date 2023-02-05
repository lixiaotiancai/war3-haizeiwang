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
        name: '罗罗诺索隆',
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
        name: '尼可罗宾',
        type: 2,
        need: ['娜美', '山治']
    },
    {
        name: '布鲁克',
        type: 2,
        need: ['罗罗诺索隆', '托尼托尼乔巴']
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
        need: ['山治', '罗罗诺索隆']
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
    
]

const Pool4 = [
    
]

const Pool5 = [
    
]

export const zHeroPool = [...Pool1, ...Pool2, ...Pool3, ...Pool4, ...Pool5];