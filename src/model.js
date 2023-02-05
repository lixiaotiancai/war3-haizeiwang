import { HeroPool, Pool5 } from './data';

const myPool = {};

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
 * 获取推荐英雄进化树
 * 默认推荐传说以上的合成树
 *
 * @export
 */
export function getRecommendUpTree() {

}