import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Navbars from "../../../components/Navbars";
import Seo from "../../../components/Seo";

function FaceRecognition() {
  const RenderFace = () => {
    return (
      <React.Fragment>
        <section class="text-gray-400 bg-gray-900 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
              </div>
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-white text-lg">Naufal Akbar Nugroho</h2>
                    <div class="w-12 h-1 bg-blue-600 rounded mt-2 mb-4"></div>
                    <Link to="/Project" class="text-base text-blue-600 hover:text-blue-400">
                      Back to Project
                    </Link>
                  </div>
                </div>
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-justify sm:text-justify">
                  <p class="leading-relaxed text-lg mb-4">
                    Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger
                    bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo
                    intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
                  </p>
                  <a href="https://github.com/nuflakbrr/music-player" target="_blank" class="text-blue-600 inline-flex items-center hover:text-blue-400">
                    Source Code
                  </a>
                  <a href="https://nuflakbrr.github.io/music-player/" target="_blank" class="text-blue-600 inline-flex items-center ml-4 hover:text-blue-400">
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
    <>
      <Seo title={"Music Player | Naufal Akbar Nugroho"} />
      <Navbars />
      <RenderFace />
      <Footer />
    </>
  );
}

export default FaceRecognition;
