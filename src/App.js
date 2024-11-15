// App.js
import './App.css';
import Home from './contents/Home';
import About from './contents/About';
import Recommend from './contents/Recommend';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hasibiroのサイト</h1>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/recommend">広告欄</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recommend" element={<Recommend />} />
        </Routes>
      </header>
    </div>
  );
}

export default App; {/* ここでdefaultエクスポートを確認 */ }
