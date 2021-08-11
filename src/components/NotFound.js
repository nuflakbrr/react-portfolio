import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function NotFound() {
  return (
    <div class="bg-gray-900 relative overflow-hidden h-screen">
      <Seo title={"Not Found"} />
      <div class="inset-0 bg-black opacity-25 absolute"></div>
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="w-full font-mono flex flex-col items-center relative z-10">
          <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">Oops!, This page under construction</h1>
          <p class="font-extrabold text-8xl my-44 text-white">404</p>
          <Link to="/" className="text-white underline hover:text-blue-500">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
