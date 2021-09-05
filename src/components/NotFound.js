import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function NotFound() {
  return (
    <div className="bg-gray-900 relative overflow-hidden h-screen">
      <Seo title={"Not Found"} />
      <section className="flex items-center h-screen p-16 bg-gray-900 dark:bg-coolGray-900 dark:text-coolGray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center text-white">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-coolGray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
            <p className="mt-4 mb-8 dark:text-coolGray-400">But dont worry, you can find plenty of other things on our homepage.</p>
            <Link to="/" className="px-8 py-3 font-semibold rounded hover:text-blue-600 dark:bg-lightBlue-400 dark:text-coolGray-900">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
