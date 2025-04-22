import React from "react";
import bannerImg from "../../assets/banner-img-1.png";
const Hero = () => {
  return (
    <div
      className="hero min-h-screen rounded-3xl"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay opacity-20 rounded-3xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="px-4 md:px-14 lg:px-45">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold leading-10 md:leading-13">
            It avoids subjective claims or exaggeration that might raise red
            flags legally
          </h1>
          <p className="mb-5">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
