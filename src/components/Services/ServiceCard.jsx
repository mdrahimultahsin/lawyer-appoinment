import React from "react";
import CountUp from "react-countup";
const ServiceCard = ({service}) => {
  const {image, title, count} = service;


  return (
    <div className="bg-[#0F0F0F15] shadow border border-[#0F0F0F15] p-6 rounded-lg text-left space-y-2">
      <img className="w-16" src={image} alt="" />
      <h1 className="text-4xl font-extrabold">
        <CountUp duration={5} end={Number(count.replace("+", ""))} />+
      </h1>
      <h1 className="text-primary-text font-medium text-lg">{title}</h1>
    </div>
  );
};

export default ServiceCard;
