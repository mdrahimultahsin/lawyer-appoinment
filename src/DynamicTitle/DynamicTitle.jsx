import React, {useEffect} from "react";
import {useLocation} from "react-router";

const DynamicTitle = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Law.BD - Home";
    } else if (location.pathname === "/my-bookings") {
      document.title = "Law.BD - Bookings";
    } 
    else if (location.pathname === "/blogs") {
      document.title = "Law.BD - Blogs";
    }
    else if (location.pathname.startsWith("/lawyerDetails")) {
      document.title = "Law.BD - Lawyer Details";
    }
    else if (location.pathname === "/contact") {
      document.title = "Law.BD - Contact";
    }
     else {
      document.title = "Law.BD";
    }
  }, [location]);
  return null;
};

export default DynamicTitle;
