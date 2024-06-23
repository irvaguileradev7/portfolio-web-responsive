import { Link, useLocation } from "react-router-dom";

export default function Bottombar() {
    const location = useLocation();

    return (
        <div className="ml-0 md:ml-0">
            <div className="bottom-0 w-full bg-plain p-4 grid grid-cols-3 fixed pb-20">
                <div className="relative group text-sm md:text-xl text-center md:text-center">
                    <Link to="/">
                        <span className="group-hover:text-gray-200 transition-all text-gray-400 ml-1 md:ml-1">SOBRE MI</span>
                        <div className={`absolute left-0 bottom-0 w-full h-1 ${location.pathname === "/" ? "bg-gray-200" : "bg-transparent"} group-hover:bg-gray-200 transition-all`}></div>
                    </Link>
                </div>
                <div className="relative group text-sm md:text-xl text-center md:text-center">
                    <Link to="/experience">
                        <span className="group-hover:text-gray-200 transition-all text-gray-400 ml-1 md:ml-1">EXPERIENCIA</span>
                        <div className={`absolute left-0 bottom-0 w-full h-1 ${location.pathname === "/experience" ? "bg-gray-200" : "bg-transparent"} group-hover:bg-gray-200 transition-all` }></div>
                    </Link>
                </div>
                <div className="relative group text-sm md:text-xl text-center md:text-center">
                    <Link to="/projects">
                        <span className="group-hover:text-gray-200 transition-all text-gray-400 ml-1 md:ml-1">PROYECTOS</span>
                        <div className={`absolute left-0 bottom-0 w-full h-1 ${location.pathname === "/projects" ? "bg-gray-200" : "bg-transparent"} group-hover:bg-gray-200 transition-all`}></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
