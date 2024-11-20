// App.js
import './App.css';
import Home from './contents/Home';
import About from './contents/About';
import Recommend from './contents/Recommend';
import PlayRoom from './contents/PlayRoom';
import Forum from './contents/Forum';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='siteName'>hasibiroのサイト</h1>
        <nav>
          <Link to="/"> Home </Link>|
          <Link to="/about">  About </Link>
          <p>コンテンツ一覧</p>
          <Link to="/recommend"> 広告欄 </Link>|
          <Link to="/playroom"> ゲーム </Link>|
          <Link to="/Forum"> 掲示板 </Link>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/playroom" element={<PlayRoom />} />
          <Route path="/Forum" element={<Forum />} />
        </Routes>
      </header>
    </div>
  );
}

export default App; {/* ここでdefaultエクスポートを確認 */ }
