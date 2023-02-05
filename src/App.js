import logo from "./logo.svg";
import "./App.css";
import { Pool1, Pool2, Pool4, Pool5 } from "./data";
import {
  addHero,
  getMatchedUpTree,
  getMatchedWeightByHero,
  getMatchhedWeightByHero,
  getMyPool,
  getSearchList,
  getUpTreeByHero,
  removeHero,
} from "./model";
import { useEffect, useState } from "react";

function App() {
  const [pool, setPool] = useState([]);
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState("");
  const [fresh, setFresh] = useState(false);
  const [recommand, setRecommand] = useState([]);
  const [wantHero, setWantHero] = useState(null);

  useEffect(() => {
    setPool(getMyPool());
    setRecommand(getMatchedUpTree());
  }, [fresh])

  // useEffect(() => {
  //   Pool1.forEach(hero => addHero(hero))

  //   const weight = getMatchedWeightByHero({
  //     name: '烬 百兽海贼团 大看板',
  //     type: 5,
  //     need: ['X德雷克 异特龙', '巴兹尔霍金斯 稻草人', '多弗朗明哥 七武海']
  //   });

  //   console.log('当前阵容匹配度：', weight);

  //   const tree = getUpTreeByHero({
  //     name: '烬 百兽海贼团 大看板',
  //     type: 5,
  //     need: ['X德雷克 异特龙', '巴兹尔霍金斯 稻草人', '多弗朗明哥 七武海']
  //   })

  //   console.log('合成树:', tree)

  //   const matched = getMatchedUpTree();
  //   console.log('推荐前10匹配的合成树', matched)

  // }, [])

  const want = (hero) => {
    setWantHero(hero);
  }

  const onInputChange = (e) => {
    setInput(e.target.value);
    const list = getSearchList(e.target.value);
    setSearchList(list || []);
  };

  const add = (hero) => {
    addHero(hero);
    setFresh(!fresh)
  };

  const remove = (hero) => {
    removeHero(hero);
    setFresh(!fresh)
  };

  return (
    <div>
      <div>
        <input value={input} onChange={onInputChange} />
      </div>
      {searchList?.length ? (
        <div className="select-box">
          {searchList.map((hero) => {
            return (
              <div className="select-item" key={hero.name}>
                <p className="small-font">{hero.name}</p>
                <p className="count">
                  我有{pool[hero.name]?.count || 0}个{" "}
                  <a className="add" onClick={() => add(hero)}>
                    +
                  </a>
                  <a className="add" onClick={() => remove(hero)}>
                    -
                  </a>
                </p>
                <div className="want" onClick={() => want(hero)}>想要</div>
              </div>
            );
          })}
        </div>
      ) : null}

      <p>想要：</p>
      {wantHero ? (
        <div>
          <div>{wantHero.name}</div>
          <a style={{color: 'blue', fontSize: '12px'}} onClick={() => want(null)}>不要了</a>
        </div>) : null}
  

      <p>推荐: </p>

      {recommand.length ? (
        <div>
          {recommand.map(item => {
            return (
              <div style={{border: '1px solid #999', marginBottom: '12px'}}>
                <div key={item.hero.name}>{item.hero.name}</div>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;
