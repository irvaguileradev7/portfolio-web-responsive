import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faBootstrap, faFigma, faReact, faTrello } from "@fortawesome/free-brands-svg-icons";
import TailwindLogo from '/tailwind-colored.svg';
import IonicLogo from '/ionic.svg';
import MondayLogo from '/monday.svg';
// import {  } from '@fortawesome/free-solid-svg-icons';

export default function About() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-0 ml-0 md:mt-0 mt-4 animate-slide-in-from-left" id="about">
      <div className="bg-white/20 rounded-md m-2 p-2 shadow-md">
        <div>
          <p className="relative m-2 p-2 text-white">Desarrollo Front-End</p>
          <div className="grid grid-cols-1 gap-2 m-2 p-2">
            <div className="flex items-center">
              <div className="w-12 h-12 flex justify-center items-center mr-4">
                <FontAwesomeIcon icon={faReact} className="text-4xl text-sky-400" />
              </div>
              <p className="text-white">React</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex justify-center items-center mr-4">
                <FontAwesomeIcon icon={faAngular} className="text-4xl text-red-500" />
              </div>
              <p className="text-white">Angular</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex justify-center items-center mr-4">
                <img src={TailwindLogo} alt="TailwindCSS" className="w-10" />
              </div>
              <p className="text-white">TailwindCSS</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex justify-center items-center mr-4">
                <FontAwesomeIcon icon={faBootstrap} className="text-4xl text-purple-500" />
              </div>
              <p className="text-white">Bootstrap</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex justify-center items-center mr-4">
                <img src={IonicLogo} alt="Ionic" className="w-8" />
              </div>
              <p className="text-white">Ionic</p>
            </div>
          </div>
        </div>
      </div>



      {/* <div className="bg-white/20 rounded-md m-2 p-2 shadow-md">
          <p className="relative m-2 p-2 text-white">Diseño reponsivo</p>
        </div>  */}
      <div className="bg-white/20 rounded-md m-2 p-2 shadow-md">
        <p className="relative m-2 p-2 text-white">Reportes y seguimiento de actividades</p>
        <div className="relative m-2 p-2 flex items-center">
          <div className="w-12 h-12 flex justify-center items-center mr-4">
            <FontAwesomeIcon icon={faTrello} className="text-4xl text-sky-300" />
          </div>
          <p className="text-white">Trello</p>
        </div>
        <div className="relative m-2 p-2 flex items-center">
          <div className="w-12 h-12 flex justify-center items-center mr-4">
            <img src={MondayLogo} alt="Monday" className="w-8" />
          </div>
          <p className="text-white">Monday</p>
        </div>
      </div>

    </div>

  );
}
