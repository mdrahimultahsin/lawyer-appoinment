import React, {useEffect, useState} from "react";
import {Link, useLoaderData} from "react-router";
import {getBooklist} from "../../utils/localStorage";
import BookingCard from "./BookingCard";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const Bookings = () => {
  const data = useLoaderData();
  const [appointments, setAppoinments] = useState([]);

  useEffect(() => {
    const storedIds = getBooklist();
    const newAppoinments = [];
    for (const id of storedIds) {
      const bookedAppoinment = data.find((lawyer) => lawyer.id === Number(id));
      if (bookedAppoinment) {
        newAppoinments.push(bookedAppoinment);
      }
    }
    setAppoinments(newAppoinments);
  }, [data]);

  //   Recharts

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const chartData = appointments.map((appointment) => ({
    name: appointment.name.split(" ").slice(0,2).join(" "),
    fee: appointment.fee.split("৳").join(""),
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const {fill, x, y, width, height} = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  
  return (
    <div className="min-h-[calc(100vh-404px)] py-14">
      {appointments.length === 0 ? (
        <div className="py-12 px-4 md:px-12 lg:px-25 rounded-2xl bg-[#0F0F0F10] border border-[#0F0F0F15] flex items-center flex-col justify-center text-center">
          <h1 className="text-3xl font-extrabold">
            You have not Booked any appoinment yet.
          </h1>
          <p className="mt-2 font-medium text-gradiesh-color">
            You don't have any appointments yet. Click the button below to{" "}
            <br /> book your first one.
          </p>
          <Link to="/" className="cursor-pointer mt-4">
            <button className="bg-primary-color text-white px-4 py-2 rounded-full cursor-pointer text-lg font-semibold">
              Book An Appoinment
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* ReCharts */}

          <ResponsiveContainer className="border border-[#0F0F0F15] rounded-2xl md:p-5" width="100%" height={500}>
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="fee"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{position: "top"}}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <h1 className="text-center text-4xl font-extrabold mt-10">
            My Today Appointments
          </h1>
          <p className="mt-2 text-[#0F0F0F] md:px-6 lg:px-10 text-center">
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience.
          </p>
          {appointments.map((appoinmet) => (
            <BookingCard appoinmet={appoinmet} key={appoinmet.id}></BookingCard>
          ))}
        </>
      )}
    </div>
  );
};

export default Bookings;
