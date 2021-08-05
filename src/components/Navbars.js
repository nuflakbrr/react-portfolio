import React from "react";

const Navbars = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <div className="flex flex-wrap justify-center">
            <div className="w-9 mr-1"></div>
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
              Republic City
            </a>
          </div>
        </div>
        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800" href="/Home">
                Beranda
              </a>
            </li>

            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800" href="/Forum">
                Forum
              </a>
            </li>

            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800" href="/Donasi">
                Donasi
              </a>
            </li>

            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800" href="/Status">
                Status
              </a>
            </li>

            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800" href="/Statistik">
                Statistik
              </a>
            </li>

            <li className="nav-item">
              <button
                class="text-white bg-green-800 hover:bg-white hover:text-green-800 active:bg-green-800 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                href="/Login"
              >
                LOGIN
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
