import React from "react";
import Seo from "../../components/Seo";
import Footer from "../../components/Footer";
import Navbars from "../../components/Navbars";
import Profile from "../images/profile.jpg";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Home() {
  const RenderHero = () => {
    return (
      <React.Fragment>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex px-20 py-28 md:flex-row flex-col items-center">
            <Fade>
              <div className="lg:max-w-md lg:w-full md:w-1/2 w-6/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded animate__animated animate__fadeInLeft" alt="hero" src={Profile} />
              </div>
            </Fade>

            <Fade bottom cascade>
              <div className="lg:flex-grow md:w-/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Hi!
                  <br className="hidden lg:inline-block" /> I am <strong>Naufal Akbar Nugroho</strong>
                </h1>
                <p className="mb-8 leading-relaxed text-justify">
                  Or you can call me Akbar. I was born on July 15, 2004 in Malang City, East Java Province, Indonesia. I am one of the students of the 29th generation SMK Telkom Malang. SMK Telkom Malang is school technology. Since I
                  entered SMK Telkom Malang, I become very interested in Graphic Design and Website Development.
                </p>
                <div className="flex justify-center">
                  <Link to="/about" className="inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                    Learn More
                  </Link>
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
      <Seo title={"My Portfolio Website | Naufal Akbar Nugroho"} />
      <Navbars />
      <RenderHero />
      <div className="flex-grow bg-gray-900"></div>
      <Footer />
    </div>
  );
}

export default Home;
