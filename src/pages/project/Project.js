import React from "react";
import Fade from "react-reveal/Fade";
import Seo from "../../components/Seo";
import Footer from "../../components/Footer";
import Navbars from "../../components/Navbars";
import Music from "../images/pro-mus.jpg";
import Face from "../images/pro-fac.jpg";
import Tridi from "../images/pro-3d.jpg";
import Zoom from "../images/pro-zoom.jpg";
import Pilketos from "../images/pro-pil.jpg";
import { Link } from "react-router-dom";

function Project() {
  const RenderProject = () => {
    return (
      <React.Fragment>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-10 py-24 mx-auto">
            <Fade bottom cascade count={1}>
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Recently Project</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">These are some of the projects i have completed.</p>
              </div>
            </Fade>

            <Fade bottom cascade count={1}>
              <div className="flex flex-wrap -m-4 items-center justify-center">
                <div className="lg:w-1/3 sm:w-1/2 p-4 w-5/6">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={Music} />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">PROJECT 01</h2>
                      <h1 className="title-font text-md font-medium text-white mb-3">Music Player</h1>
                      <p className="leading-relaxed">Create a Music Player Website.</p>
                      <Link to="/project/music-player" className="text-blue-600 inline-flex items-center mt-5 hover:text-blue-400">
                        Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4 w-5/6">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={Face} />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">PROJECT 02</h2>
                      <h1 className="title-font text-md font-medium text-white mb-3">Face Recognition</h1>
                      <p className="leading-relaxed">Create a Face Recognition.</p>
                      <Link to="/project/face-recognition" className="text-blue-600 inline-flex items-center mt-5 hover:text-blue-400">
                        Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4 w-5/6">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={Tridi} />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">PROJECT 03</h2>
                      <h1 className="title-font text-md font-medium text-white mb-3">3D Card Animation</h1>
                      <p className="leading-relaxed">Create a 3D Animation Card Product.</p>
                      <Link to="/project/3d-card-animation" className="text-blue-600 inline-flex items-center mt-5 hover:text-blue-400">
                        Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4 w-5/6">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={Zoom} />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">PROJECT 04</h2>
                      <h1 className="title-font text-md font-medium text-white mb-3">Zoom Clone</h1>
                      <p className="leading-relaxed">Create a Zoom Clone.</p>
                      <Link to="/project/zoom-clone" className="text-blue-600 inline-flex items-center mt-5 hover:text-blue-400">
                        Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4 w-5/6">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/604x364" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">PROJECT 05</h2>
                      <h1 className="title-font text-md font-medium text-white mb-3">RCRP Landing Page</h1>
                      <p className="leading-relaxed">Create a RCRP Website with React.</p>
                      <Link to="/project/rcrp-landing-page" className="text-blue-600 inline-flex items-center mt-5 hover:text-blue-400">
                        Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4 w-5/6">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={Pilketos} />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">PROJECT 06</h2>
                      <h1 className="title-font text-md font-medium text-white mb-3">E-Voting SMK Telkom Malang</h1>
                      <p className="leading-relaxed">Create a E-Voting for SMK Telkom Malang with React.</p>
                      <Link to="/project/pilketos-smktelkom" className="text-blue-600 inline-flex items-center mt-5 hover:text-blue-400">
                        Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </section>
      </React.Fragment>
    );
  };
  return (
    <div className="flex flex-col h-screen">
      <Seo title={"Recently Project | Naufal Akbar Nugroho"} />
      <Navbars />
      <RenderProject />
      <div className="flex-grow bg-gray-900"></div>
      <Footer />
    </div>
  );
}

export default Project;
