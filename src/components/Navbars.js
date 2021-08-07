import React from "react";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <header className="text-gray-400 bg-blue-800 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Naufal Akbar</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="mr-5 text-white hover:text-gray-400">
            About
          </Link>
          <Link to="/skill" className="mr-5 text-white hover:text-gray-400">
            Skills
          </Link>
          <Link to="/project" className="mr-5 text-white hover:text-gray-400">
            Project
          </Link>
          <Link to="/contact" className="mr-5 text-white hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbars;
