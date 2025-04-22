import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceContainer = () => {
  const servicesData = [
    {
      id: 1,
      title: "Total Lawyer",
      count: "199+",
      image: "https://i.ibb.co.com/SDNVrsmB/success-doctor.png",
    },
    {
      id: 2,
      title: "Total Reviews",
      count: "467+",
      image: "https://i.ibb.co.com/KzLbPtrZ/success-review.png",
    },
    {
      id: 3,
      title: "Cases Initiated",
      count: "1900+",
      image: "https://i.ibb.co.com/s9J472gy/success-staffs.png",
    },
    {
      id: 4,
      title: "Total Staffs",
      count: "300+",
      image: "https://i.ibb.co.com/h12Xv9ps/success-patients.png",
    },
  ];

  return (
    <div className="py-14 text-center">
      <h1 className="text-4xl font-extrabold">We Provide Best Law Services</h1>
      <p className="text-[#0F0F0F] mt-2">
        Our platform connects you with verified, experienced Lawyers across
        various specialities — all at your convenience.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceContainer;
