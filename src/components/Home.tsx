import React, { useEffect, useState } from "react";


const Home: React.FC = () => {
  const [showDelayedElement, setShowDelayedElement] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDelayedElement(true);
    }, 3000); // 3000 ms = 3 segundos
  }, []);

  // const handleScrollToAbout = () => {
  //   const aboutElement = document.getElementById("about");
  //   if (aboutElement) {
  //     aboutElement.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div className="justify-center">
          <div className="grid h-screen grid-cols-2 background relative">
            <div className="p-4 animate-appear">
              <h1 className="text-gray-200 ml-4 md:ml-10 mt-60 md:mt-40 text-3xl md:text-5xl flex items-center justify-center text-shadow-header">
                Irving Aguilera
              </h1>
            </div>
            <div className="mt-0 md:mt-0 animate-slide-in-from-right bg-white">
              <div className="mt-10">
                <p className="text-gray-800 mt-80 md:mt-80 ml-4 text-2xl md:text-3xl animate-appear-delayed flex items-center justify-center pt-2 md:mr-0 text-shadow-header">
                  Desarrollador web
                </p>
              </div>
            </div>
            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-20">
              <button
                className={`text-gray-600 text-6xl py-2 px-4 transition rounded-full ${showDelayedElement ? 'animate-bounce' : 'appear-hidden' }`}
                onClick={handleScrollToAbout}
              >
                <FontAwesomeIcon icon={faArrowCircleDown} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
