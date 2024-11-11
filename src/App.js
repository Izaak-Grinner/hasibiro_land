import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './contents/Home'
import About from './contents/About';
import Recommend from './contents/Recommend';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lugal-hasibiroのサイト</h1>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/recommend">広告</Link> {/* 新しいリンクを追加 */}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recommend" element={<Recommend />} /> {/* 新しいルートを追加 */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
