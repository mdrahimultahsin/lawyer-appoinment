import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router";
import LawyerCard from "./LawyerCard";

const LawyerContainer = () => {
  const data = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    if (showAll) {
      setLawyers(data);
    } else {
      setLawyers(data.slice(0, 6));
    }
  }, [showAll, data]);
  return (
    <div className="py-14 text-center" id="lawyers-section">
      <h1 className="font-extrabold text-4xl ">Our Best Lawyers</h1>
      <p className="mt-2 text-[#0F0F0F] md:px-6 lg:px-10">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {lawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer}></LawyerCard>
        ))}
      </div>
      <button
        onClick={() => {
          setShowAll((prev) => !prev);
          showAll && window.scrollTo(0, 700);
        }}
        className="px-6 py-3 bg-primary-color text-white rounded-full mt-6 font-semibold text-lg cursor-pointer"
      >
        {showAll ? "Show Less Lawyer" : "Show All Lawyer"}
      </button>
    </div>
  );
};

export default LawyerContainer;
