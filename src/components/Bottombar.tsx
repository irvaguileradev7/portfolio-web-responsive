import { Link, useLocation } from 'react-router-dom';

function Bottombar() {
  const location = useLocation();

  return (
    <div className={`bottombar fixed bottom-0 md:pb-3 pb-0 left-0 right-0 border-t-2 transition-background-color duration-500 ${location.pathname === "/desiredPath" ? "border-gray-200" : "border-gray-400"}`}>
      <div className="p-4 grid grid-cols-3">
        <div className="relative group text-sm md:text-xl text-center">
          <Link to="/about">
            <span className={`group-hover:text-gray-200 transition-all ${location.pathname === "/about" ? "text-gray-200" : "text-gray-400"}`}>SOBRE MI</span>
            <div className={`absolute left-0 bottom-0 w-full h-1 ${location.pathname === "/about" ? "bg-gray-200" : "bg-transparent"} group-hover:bg-gray-400 transition-all`}></div>
          </Link>
        </div>
        <div className="relative group text-sm md:text-xl text-center">
          <Link to="/experience">
            <span className={`group-hover:text-gray-200 transition-all ${location.pathname === "/experience" ? "text-gray-200" : "text-gray-400"}`}>EXPERIENCIA</span>
            <div className={`absolute left-0 bottom-0 w-full h-1 ${location.pathname === "/experience" ? "bg-gray-200" : "bg-transparent"} group-hover:bg-gray-400 transition-all`}></div>
          </Link>
        </div>
        <div className="relative group text-sm md:text-xl text-center">
          <Link to="/projects">
            <span className={`group-hover:text-gray-200 transition-all ${location.pathname === "/projects" ? "text-gray-200" : "text-gray-400"}`}>PROYECTOS</span>
            <div className={`absolute left-0 bottom-0 w-full h-1 ${location.pathname === "/projects" ? "bg-gray-200" : "bg-transparent"} group-hover:bg-gray-400 transition-all`}></div>
          </Link>
        </div>
      </div>
    </div>
  );
  
}

export default Bottombar;
