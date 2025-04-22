import React from "react";

import {Outlet, useNavigation} from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import DynamicTitle from "../DynamicTitle/DynamicTitle";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  
  return (
    <div>
      <DynamicTitle/>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {isNavigating &&<span className="loading loading-bars w-12 text-base-100 block mx-auto top-40 left-0 right-0 absolute z-50"></span>}
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
