import React from "react";
import { Link, useLocation } from "react-router";

const LawyerError = () => {
        const pathname = useLocation().pathname.replace("/lawyerDetails/","");
        
  return (
        <div className="min-h-[calc(100vh-404px)] py-12 px-4 md:px-12 lg:px-25 flex items-center flex-col justify-center text-center">
        <h1 className="text-5xl font-extrabold">
          No Lawyer Found
        </h1>
        <p className="mt-3 font-medium text-gradiesh-color text-lg">
          No Lawyer Found with this Id: 
          <span className="font-bold text-black"> {pathname}</span>
        </p>
        <Link to="/" className="cursor-pointer mt-4">
          <button className="bg-primary-color text-white px-4 py-2 rounded-full cursor-pointer text-lg font-semibold">
            View All Lawyer
          </button>
        </Link>
      </div>
  );
};

export default LawyerError;
