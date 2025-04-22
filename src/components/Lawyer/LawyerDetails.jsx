import React, {useEffect, useState} from "react";
import {useLoaderData, useNavigate, useParams} from "react-router";
import {IoMdInformationCircleOutline} from "react-icons/io";
import {getWeekDayName} from "../../utils";
import {addToBooklist, getBooklist} from "../../utils/localStorage";
import {toast} from "react-toastify";
import LawyerError from "../../pages/LawyerError/LawyerError";

const LawyerDetails = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  
  const nevigate = useNavigate();

  const data = useLoaderData();
  const {id} = useParams();

  const singleLawyer = data.find((lawyer) => lawyer.id === Number(id));

  const {
    name,
    image,
    experience,
    availability,
    fee,
    speciality,
    licenseNumber,
  } = singleLawyer || [];
  useEffect(() => {
    const weekDay = getWeekDayName();
    availability?.forEach((day) => {
      if (day === weekDay) {
        setIsAvailable(true);
      }
    });
  }, [availability, setIsAvailable]);
  const handleBookAppointmnet = () => {
    const storedIds = getBooklist();
    if (!storedIds.includes(id)) {
      addToBooklist(id);
      nevigate("/my-bookings");
    } else {
      toast.error("Appoinment already booked!", {
        theme: "colored",
        autoClose: "2000",
      });
    }
  };

  return (
    <>
      {!singleLawyer ? (
        <LawyerError></LawyerError>
      ) : (
        <div className="min-h-[calc(100vh-404px)] py-10">
          <div className="py-12 px-4 md:px-12 lg:px-25 rounded-2xl bg-[#0F0F0F10] border border-[#0F0F0F15] flex items-center flex-col justify-center text-center">
            <h1 className="text-3xl font-extrabold">
              Lawyer's Profile Details
            </h1>
            <p className="mt-2 font-medium text-gradiesh-color">
              Explore detailed information about each of our professional
              lawyers, including their areas of expertise, years of experience,
              and availability. Find the right legal expert to guide you through
              your legal journey with confidence and trust.
            </p>
          </div>
          <div className="bg-[#0F0F0F05] border border-[#0F0F0F15] mt-6 p-6 rounded-2xl flex gap-6 md:gap-10 flex-col md:flex-row">
            <div>
              <img
                className="w-full md:w-60 md:h-55 object-cover rounded-lg"
                src={image}
                alt=""
              />
            </div>
            <div>
              <button className="py-2 px-4 bg-[#176AE515] text-[#176AE5] rounded-full font-medium">
                {experience}+ <span>Experience</span>
              </button>
              <h1 className="font-extrabold text-xl md:text-2xl mt-2 ">
                {name}
              </h1>
              <div className="flex gap-8 mt-2">
                <p className="font-medium text-gradiesh-color">{speciality}</p>
                <p className="font-medium text-[#0F0F0F80]">
                  ® License No:{licenseNumber}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <p className="font-bold">Availability:</p>
                <div className="flex flex-wrap gap-4">
                  {availability?.map((day, index) => (
                    <button
                      className="py-2 px-4 bg-[#FFA00015] text-[#FFA000] rounded-full font-medium"
                      key={index}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-lg font-bold flex gap-4">
                Consultation Fee:{" "}
                <span className="text-primary-color font-extrabold">{fee}</span>
              </p>
            </div>
          </div>
          <div className="py-5 pb-10 px-6 rounded-2xl bg-[#0F0F0F05] border border-[#0F0F0F15] text-center mt-8">
            <h1 className="text-3xl font-extrabold py-4 border-b-2 border-dashed border-[#0F0F0F15] ">
              Book an Appointment
            </h1>

            <div className="flex justify-between py-5 items-center border-b-2 border-dotted border-[#0F0F0F15] mb-4">
              <h2 className="font-bold text-lg">Availability</h2>
              <button
                className={`font-medium  px-4 py-2 rounded-full ${
                  isAvailable
                    ? "bg-[#09982F20] text-[#09982F] md:font-bold"
                    : "bg-[#FFA00015] text-[#FFA000]"
                }`}
              >
                {isAvailable ? "Lawyer Available Today" : "Not Available Today"}
              </button>
            </div>
            <div className="w-full bg-[#FFA00015] text-[#FFA000] rounded-full ">
              <p className="flex flex-col md:flex-row justify-center md:gap-2 text-center items-center px-4 py-4 md:py-2">
                <IoMdInformationCircleOutline size={25} />
                Due to high patient volume, we are currently accepting
                appointments for today only. We appreciate your understanding
                and cooperation.
              </p>
            </div>

            <button
              onClick={handleBookAppointmnet}
              className="w-full mt-6 bg-primary-color text-white rounded-full py-3 flex justify-center text-lg font-semibold cursor-pointer"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LawyerDetails;
