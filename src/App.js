import logo from './logo.svg';
import './App.css';
import { Pool1, Pool2} from './data';
import { addHero, getMatchedWeightByHero, getMatchhedWeightByHero, getUpTreeByHero,  } from './model';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Pool1.forEach((hero) => addHero(hero));
    Pool2.forEach(hero => addHero(hero));

    const weight = getMatchedWeightByHero({
      name: '烬 百兽海贼团 大看板',
      type: 5,
      need: ['X德雷克 异特龙', '巴兹尔霍金斯 稻草人', '多弗朗明哥 七武海']
    });

    console.log('当前阵容匹配度：', weight);

    const tree = getUpTreeByHero({
      name: '烬 百兽海贼团 大看板',
      type: 5,
      need: ['X德雷克 异特龙', '巴兹尔霍金斯 稻草人', '多弗朗明哥 七武海']
    })

    console.log('合成树:', tree)

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
