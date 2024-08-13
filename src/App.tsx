// App.js
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Bottombar from './components/Bottombar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';

function App() {

  useEffect(() => {
    document.body.classList.add('loaded')
  }, [])

  return (
    <Router>
      <div className="flex flex-col min-h-screen pb-10 animate-appear"> {/* Contenedor principal */}
        <Navbar />
        <div className="flex-1">
          <div className="col-span-7 md-col-span-9 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="pb-20 "></div>

      <div className="bottombar">
        <Bottombar />
      </div>
    </Router>
  );
}

export default App;
