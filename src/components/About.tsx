import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faBootstrap, faFigma, faGit, faGithub, faHtml5, faJs, faLaravel, faPhp, faPython, faReact} from "@fortawesome/free-brands-svg-icons"
import TailwindLogo from '/tailwind-colored.svg'
import IonicLogo from '/ionic.svg'
// import MondayLogo from '/monday.svg'
import NetLogo from '/net.svg';
import ExpressLogo from '/express.svg'
import MySqlLogo from '/mysql.svg'
import PostgreLogo from '/postgresql-icon.svg'
import Serverlogo from '/server.svg'
import TypescriptLogo from '/ts.svg'
import CSLogo from '/cs.svg'
import SvnLogo from '/svn.svg'
// import {  } from '@fortawesome/free-solid-svg-icons';

export default function About() {

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-4 sm:mx-10 md:mx-20 mt-10">
        <p className="text-lg sm:text-xl md:text-2xl text-white font-bold animate-slide-in-from-left">
          SOBRE MI
        </p>
        <p className=" text-white mt-4 animate-slide-in-from-left">
          Mi nombre es Kevin Irving Aguilera Pérez, ingeniero en informática y apasionado desarrollador web comprometido con la mejora continua y la búsqueda de soluciones innovadoras. Con una sólida experiencia en el desarrollo de interfaces responsivas y el consumo y creación de APIs, capacidad para adaptarse rápidamente a nuevas tecnologías y metodologías. Autodidacta y proactivo en busca de desafíos técnicos con eficacia, con un enfoque colaborativo y una excelente capacidad para integrarse y contribuir eficazmente en equipos de trabajo.
        </p>
      </div>
      <p className="text-lg ml-4 my-2 sm:text-xl md:text-2xl text-white font-bold animate-slide-in-from-left">
        Mis habilidades
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 ml-0 md:mt-4 mt-4 animate-slide-in-from-left " id="about">

        {/* <div className="mb-4 "> */}
        <div className="bg-white/20 rounded-md p-2 shadow-md mx-4 mb-4">
          <div>
            <p className="relative m-2 p-2 text-white">Desarrollo Front-End</p>
            <div className="grid grid-cols-1 gap-2 m-2 p-2">
              {/* React */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faReact} className="text-4xl text-sky-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white">React</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-sky-400 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
              {/* Angular */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faAngular} className="text-4xl text-red-500" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Angular</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-red-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              {/* TailwindCSS */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <img src={TailwindLogo} alt="TailwindCSS" className="w-10" />
                </div>
                <div className="flex-1">
                  <p className="text-white">TailwindCSS</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              {/* Bootstrap */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faBootstrap} className="text-4xl text-purple-500" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Bootstrap</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-purple-500 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
              {/* Ionic */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <img src={IonicLogo} alt="Ionic" className="w-8" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Ionic</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mb-4 "> */}
        <div className="bg-white/20 rounded-md p-2 shadow-md mx-4 mb-4">
          <div>
            <p className="relative m-2 p-2 text-white">Desarrollo Back-End</p>
            <div className="grid grid-cols-1 gap-2 m-2 p-2">
              {/* Laravel */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faLaravel} className="text-4xl text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Laravel</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-red-600 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
              {/* Express.js */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <img src={ExpressLogo} alt="Ionic" className="w-8" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Express.js</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>

              {/* .NET */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <img src={NetLogo} alt="Ionic" className="w-8" />
                </div>
                <div className="flex-1">
                  <p className="text-white">.Net</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-purple-600 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
              {/* Ionic */}
              {/* <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <img src={ExpressLogo} alt="Ionic" className="w-8" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Express.js</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="mb-4 "> */}
        <div className="bg-white/20 rounded-md p-2 shadow-md mx-4 mb-4">
          <div>
            <p className="relative m-2 p-2 text-white">Bases de datos</p>
            <div className="grid grid-cols-1 gap-2 m-2 p-2">
              {/* Mysql  */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <img src={MySqlLogo} alt="Ionic" className="w-8" />
                </div>
                <div className="flex-1">
                  <p className="text-white">MySql</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-sky-300 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
              {/* Postgres */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <img src={PostgreLogo} alt="Ionic" className="w-8" />
                </div>
                <div className="flex-1">
                  <p className="text-white">PostGreSql</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>

              {/* Server */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <img src={Serverlogo} alt="Ionic" className="w-8" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Microsoft SQL Server</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-red-500 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/20 rounded-md p-2 shadow-md mx-4 mb-4">
          <div>
            <p className="relative m-2 p-2 text-white">Lenguajes de programación</p>
            <div className="grid grid-cols-1 gap-2 m-2 p-2">
              {/* Javascript  */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faJs} className="text-4xl text-yellow-300" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Javascript</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-yellow-300 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
              </div>
              {/* Typescript  */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <img src={TypescriptLogo} alt="Ionic" className="w-8" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Typescript</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-sky-600 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
              {/* PHP  */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faPhp} className="text-4xl text-indigo-300" />
                </div>
                <div className="flex-1">
                  <p className="text-white">PHP</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-indigo-300 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
              {/* PHP  */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faPython} className="text-4xl text-yellow-300" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Python</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-yellow-300 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
              </div>
              {/* PHP  */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faHtml5} className="text-4xl text-orange-500" />
                </div>
                <div className="flex-1">
                  <p className="text-white">HTML & CSS</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-orange-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              {/* PHP  */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <img src={CSLogo} alt="Ionic" className="w-16" />
                </div>
                <div className="flex-1">
                  <p className="text-white">c#</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-violet-500 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="bg-white/20 rounded-md p-2 shadow-md mx-4 mb-4">
          <div>
            <p className="relative m-2 p-2 text-white">Control de versiones</p>
            <div className="grid grid-cols-1 gap-2 m-2 p-2">
              {/* Git  */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faGit} className="text-4xl text-orange-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Git</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-orange-400 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
              </div>
              {/* GitHub  */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faGithub} className="text-4xl text-purple-500" />
                </div>
                <div className="flex-1">
                  <p className="text-white">GitHub</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-purple-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              {/* SVN  */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <img src={SvnLogo} alt="Ionic" className="w-8" />
                </div>
                <div className="flex-1">
                  <p className="text-white">SVN</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-indigo-300 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="bg-white/20 rounded-md p-2 shadow-md mx-4 mb-4">
          <div>
            <p className="relative m-2 p-2 text-white">Idiomas</p>
            <div className="grid grid-cols-1 gap-2 m-2 p-2">
              {/* eSpanol  */}
              <div className="flex items-center">
                {/* <div className="w-12 h-12 flex justify-center items-center mr-4">
                <FontAwesomeIcon icon={faGit} className="text-4xl text-orange-400" />
              </div> */}
                <div className="flex-1">
                  <p className="text-white">Español (Nativo)</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-red-400 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
              {/* GitHub  */}
              <div className="flex items-center">
                {/* <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faGithub} className="text-4xl text-purple-500" />
                </div> */}
                <div className="flex-1">
                  <p className="text-white">Ingles</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="bg-white/20 rounded-md p-2 shadow-md mx-4 mb-4">
          <div>
            <p className="relative m-2 p-2 text-white">UX/UI</p>
            <div className="grid grid-cols-1 gap-2 m-2 p-2">

              {/* GitHub  */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faFigma} className="text-4xl text-purple-500" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Figma</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-purple-500 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* <div className="bg-white/20 rounded-md p-2 shadow-md mx-4 ">
          <div>
            <p className="relative m-2 p-2 text-white">Reportes y seguimiento de actividades</p>
            <div className="grid grid-cols-1 gap-2 m-2 p-2">
 
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <FontAwesomeIcon icon={faTrello} className="text-4xl text-sky-300" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Trello</p>
                  <div className="relative w-full h-2 mt-1 bg-gray-300 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-sky-400 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
              <div className="w-12 h-12 flex justify-center items-center mr-4">
              </div>
            </div>
          </div>
        </div> */}



        {/* <div className="bg-white/20 rounded-md m-2 p-2 shadow-md">
          <p className="relative m-2 p-2 text-white">Diseño reponsivo</p>
        </div>  */}
        {/* <div className="bg-white/20 rounded-md m-2 p-2 shadow-md">
          <p className="relative m-2 p-2 text-white">Reportes y seguimiento de actividades</p>
          <div className="relative p-2 flex items-center">
           
          </div>
          <div className="relative m-2 p-2 flex items-center">
            <div className="w-12 h-12 flex justify-center items-center mr-4">
              <img src={MondayLogo} alt="Monday" className="w-8" />
            </div>
            <p className="text-white">Monday</p>
          </div>
        </div> */}
      </div>
    </div>

  );
}
