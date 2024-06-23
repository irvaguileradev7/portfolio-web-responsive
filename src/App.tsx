// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Bottombar from './components/Bottombar';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen pb-10"> {/* Contenedor principal */}
        <Navbar />
        <div className="flex-1 animate-slide-in-from-left"> 
          <div className="col-span-7 md-col-span-9  mr-8 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="pb-20 "></div>
      <Bottombar /> 
    </Router>
  );
}

export default App;
