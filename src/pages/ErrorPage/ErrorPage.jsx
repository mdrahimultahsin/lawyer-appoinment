import React from "react";
import {Link, useRouteError} from "react-router";
import Navbar from "../../components/Header/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <>
      <Navbar />
      <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>
              {error.status}
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Page Not Found</p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              {error?.error?.message}
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 font-semibold rounded bg-primary-color text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
