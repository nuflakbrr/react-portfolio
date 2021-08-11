import React from "react";
import Seo from "../../components/Seo";
import Footer from "../../components/Footer";
import Navbars from "../../components/Navbars";
import Profile from "../images/profile.jpg";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function About() {
  const RenderAbout = () => {
    return (
      <React.Fragment>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <Fade>
              <img className="lg:w-1/5 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Profile" src={Profile} />
            </Fade>

            <Fade bottom big cascade>
              <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-justify">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About Me</h1>
                <p className="mb-8 leading-relaxed">
                  Hi, my name is <strong>Naufal Akbar Nugroho</strong>. Or you can call me Akbar. I was born on July 15, 2004 in Malang City, East Java Province, Indonesia. I am one of the students of the 29th generation SMK Telkom Malang.
                  SMK Telkom Malang is school technology. Since I entered SMK Telkom Malang, I become very interested in Graphic Design and Website Development.
                  <br />
                  At SMK Telkom Malang there are many things I can do, such as character education, discipline, and many other things. Apart from that, I also studied Graphic Design, some programming languages, Website Design, and Website
                  Development. I am very grateful to be part of the SMK Telkom Malang family, because I understand about the world of technology. For now I am exploring the programming languages Java, HTML, CSS, Vanilla JavaScript, Node.js,
                  React, and{" "}
                  <Link to="/skill" className="text-blue-400 hover:text-blue-600">
                    many more.
                  </Link>
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/1CIpdz_h3xpgyO-US0iXu_-qCKMF2ZjSH/view?usp=sharing"
                    target="_blank"
                    className="inline-flex mx-4 text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
                  >
                    Download CV
                  </a>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
                    <a className="text-gray-400" href="https://github.com/nuflakbrr" target="_blank">
                      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-400" href="https://www.instagram.com/kbrnugroho/" target="_blank">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-400" href="https://www.linkedin.com/public-profile/in/nuflakbrr" target="_blank">
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-400" href="mailto:naufalakbar378@gmail.com" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </Fade>
          </div>
        </section>
      </React.Fragment>
    );
  };
  return (
    <>
      <Seo title={"About Me | Naufal Akbar Nugroho"} />
      <Navbars />
      <RenderAbout />
      <Footer />
    </>
  );
}

export default About;
