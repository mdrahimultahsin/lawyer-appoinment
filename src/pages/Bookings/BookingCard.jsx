import React from "react";
import {Link} from "react-router";
import {removeFromBooklist} from "../../utils/localStorage";

const BookingCard = ({appoinmet}) => {
  const {name, speciality, fee, id} = appoinmet;
  const handleRemoveBook = () => {
    removeFromBooklist(id);
  };
  return (
    <div className="p-4 py-6 md:p-8 mt-8 rounded-2xl border border-[#0F0F0F15]">
      <div className="flex justify-between items-center border-b-2 border-dashed border-[#0F0F0F15] pb-3">
        <div>
          <h2 className="text-lg md:text-xl font-bold">{name}</h2>
          <p className="font-medium text-[#0F0F0F80]">{speciality}</p>
        </div>
        <h2 className="font-medium text-[#0F0F0F90]">
          Appointment Fee : {fee}
        </h2>
      </div>
      <Link
        onClick={handleRemoveBook}
        className="w-full mt-6 text-[#FF0000] border-[#FF0000] border rounded-full hover:bg-[#FF0000] hover:text-white py-3 flex justify-center text-lg font-semibold cursor-pointer"
      >
        <button className="cursor-pointer">Cancel Appointment</button>
      </Link>
    </div>
  );
};

export default BookingCard;
