import React from "react";
import Hero from "../../components/Hero/Hero";
import LawyerContainer from "../../components/Lawyer/LawyerContainer";
import ServiceContainer from "../../components/Services/ServiceContainer";

const Home = () => {
  return (
    <div>
      
      <Hero />
      <LawyerContainer/>
      <ServiceContainer/>
    </div>
  );
};

export default Home;
