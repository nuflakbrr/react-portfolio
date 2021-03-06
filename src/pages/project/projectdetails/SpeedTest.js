import React from "react";
import Footer from "../../../components/Footer";
import Navbars from "../../../components/Navbars";
import Seo from "../../../components/Seo";
import SpeedBes from "../../images/pro-speedBes.gif";
import Profile from "../../images/profile.jpg";
import { Link } from "react-router-dom";

function SpeedTest() {
  const RenderSpeed = () => {
    return (
      <React.Fragment>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={SpeedBes} />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                    <div className="avatar">
                      <div className="rounded-full w-18 h-18">
                        <img src={Profile} alt="project img" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-white text-lg">Naufal Akbar Nugroho</h2>
                    <div className="w-12 h-1 bg-blue-600 rounded mt-2 mb-4"></div>
                    <Link to="/project" className="text-base text-blue-600 hover:text-blue-400">
                      Back to Project
                    </Link>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-justify sm:text-justify">
                  <p className="leading-relaxed text-lg mb-4">In this project I want to create a website speed test to know how fast website loads. I create this with React.js</p>
                  <p className="leading-relaxed text-lg mb-4">
                    <strong>Technology what I use</strong>
                    <ul className="list-disc list-inside">
                      <li>React.js</li>
                    </ul>
                    <ul className="list-disc list-inside">
                      <li>Tailwindcss</li>
                    </ul>
                  </p>
                  <a href="https://github.com/nuflakbrr/react-speedtest-web" target="_blank" rel="noreferrer" className="text-blue-600 inline-flex items-center hover:text-blue-400">
                    Source Code
                  </a>
                  <a href="https://nuflakbrr-speedtest.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 inline-flex items-center ml-4 hover:text-blue-400">
                    Webpage
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  };
  return (
    <div className="flex flex-col h-screen">
      <Seo title={"React Website Speed Test | Naufal Akbar Nugroho"} />
      <Navbars />
      <RenderSpeed />
      <div className="flex-grow bg-gray-900"></div>
      <Footer />
    </div>
  );
}

export default SpeedTest;
