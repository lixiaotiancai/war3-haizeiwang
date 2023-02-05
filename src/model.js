import { HeroPool, Pool5 } from './data';

const myPool = {};

/**
 * 英雄名称精准搜索
 *
 * @export
 * @param {*} name
 * @return {*} 
 */
function getHeroByName(name) {
    const hero = HeroPool.find(item => item.name === name);

    return hero;
}

/**
 * 英雄名称模糊搜索
 *
 * @export
 * @param {*} name
 * @return {*} 
 */
export function getSearchList(name) {
    return HeroPool.find((item) => item.name.includes(name));
}

/**
 * 增加英雄至当前英雄池
 *
 * @export
 * @param {*} hero
 */
export function addHero(hero) {
    if (!myPool[hero.name]) {
        myPool[hero.name] = {
            ...hero,
            count: 1,
        }
    } else {
        myPool[hero.name].count = myPool[hero.name].count + 1;
    }
}

/**
 * 增加一定数量的英雄
 * 
 * @param {*} hero 
 * @param {*} times 
 */
export function addHeroByTimes(hero, times) {
    for (let i = 0; i < times; i++) {
        removeHero(hero);
    }
}

/**
 * 从当前池子中移除英雄
 *
 * @export
 * @param {*} hero
 */
export function removeHero(hero) {
   if (myPool[hero.name].count > 1) {
        myPool[hero.name].count = myPool[hero.name].count  - 1;
   } else {
        delete myPool[hero.name];
   }
}

/**
 * 移除一定数量的英雄
 *
 * @export
 * @param {*} hero
 * @param {*} times
 */
export function removeHeroByTimes(hero, times) {
    for (let i = 0; i < times; i++) {
        removeHero(hero);
    }
}

/**
 * 获取玩家当前英雄池
 *
 * @export
 * @return {*} 
 */
export function getMyPool() {
    return myPool;
}

/**
 * 递归构建英雄主义进化树
 *
 * @param {*} hero
 */
export function getUpTreeByHero(hero, tree = {}) {
    tree[hero.name] = hero; 
    tree[hero.name].child = {}

    if (!hero?.need?.length) {
        return;
    };

    tree[hero.name].need.forEach(subHeroName => {
        const child = getHeroByName(subHeroName);
        getUpTreeByHero(child, tree[hero.name].child);
    })

    return tree;
}

/**
 * 获取英雄与当前阵容的匹配度
 *
 * @export
 * @param {*} tree
 * @param {number} [weight=0]
 * @return {*} 
 */
export function getMatchedWeightByTree(tree, weightPool = [0, 0]) {
    const content = Object.values(tree)?.[0];

    if (!content?.child) return;

    Object.values(content.child).forEach(child => {
        if (myPool[child.name]) {
            weightPool.push(child.weight);
        }   
        getMatchedWeightByTree(child.child, weightPool);
    })

    const weight = weightPool.reduce((a, b) => a + b);

    return weight;
}

/**
 * 获取权重
 *
 * @export
 * @param {*} hero
 * @return {*} 
 */
export function getMatchedWeightByHero(hero) {
    console.log('我的英雄池', myPool)
    const tree = getUpTreeByHero(hero);
    const weight = getMatchedWeightByTree(tree);

    return weight;
}

/**
 * 获取推荐英雄进化树
 * 默认推荐传说以上的合成树
 *
 * @export
 */
export function getMatchedUpTree() {

}