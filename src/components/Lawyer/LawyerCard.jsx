import React, {  useEffect, useState } from "react";
import {Link} from "react-router";
import { getWeekDayName } from "../../utils";

const LawyerCard = ({lawyer}) => {
  const [isAvailable,setIsAvailable] = useState(false)
  
  
  const {id, name, experience, image, speciality, licenseNumber,availability} = lawyer;
  useEffect(()=>{
    const weekDay = getWeekDayName()
    availability.forEach(day=>{
      
      if(day===weekDay){
        setIsAvailable(true)
      }
    })
  },[availability,setIsAvailable])
  
  return (
    <div className="flex gap-4 p-5 border border-[#0F0F0F15] rounded-2xl text-left">
      <div>
        <img
          className="w-30 h-full object-cover object-center rounded-lg"
          src={image}
          alt="lawyer men"
        />
      </div>
      <div className="flex-1">
        <div className="flex gap-4">
          <button className={`font-medium  px-4 rounded-full ${isAvailable?"bg-[#09982F20] text-[#09982F] md:font-bold":"bg-[#FFA00015] text-[#FFA000]"}`}>
            {isAvailable?"Available":"Not Available"}
          </button>
          <button className="py-2 px-4  rounded-full font-medium text-[#176AE5] bg-[#176AE515]">
            {experience}+ <span className="hidden lg:inline-block">Experience</span> 
          </button>
        </div>
        <h1 className="font-extrabold text-xl lg:text-2xl mt-2 ">{name}</h1>
        <p className="font-medium text-gradiesh-color">{speciality}</p>
        <p className="font-medium text-[#0F0F0F80]">
          ® License No:{licenseNumber}
        </p>

        <Link onClick={()=>window.scrollTo(0,100)} to={`/lawyerDetails/${id}`}>
          <button className="w-full mt-2 rounded-full border border-[#176AE515
          ] text-[#176AE5] font-medium p-2 cursor-pointer hover:bg-[#176AE5] hover:text-white transition">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LawyerCard;
