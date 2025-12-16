import { FiDelete } from "react-icons/fi";
import React from "react";
import { data, useParams } from "react-router-dom";
import ToogleSwitch from "../components/ToogleSwitch";
import { toast } from "react-toastify";
import BackEndURI from "../utils/BackEndURI";
import { useState } from "react";
import { useEffect } from "react";

const SingleStudent = () => {
  const { id } = useParams();
  const [UserData, setUserData] = useState(null);
 useEffect(() => {
   console.log(UserData)
 }, [UserData]);
  const getSingleUser = async () => {
    try {
      const Res = await fetch(`${BackEndURI}/api/user/get-profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
        }),
      });
      const Data = await Res.json();
      console.log(Data);
      if (Data.sucess) {
        setUserData(Data.data);
        toast.success('Data fetched successfully')
      } else {
        toast.error(Data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, []);
  const hanldeUserApprovnessChange = (user) => {
    if (confirm("Are You Sure To Change User's Approvness")) {
      try {
        console.log(user);
        toast.success("please wait");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        return;
      }
    }
  };

  const hanldeUserDeletion = async (userId) => {
    if (confirm("Are You Sure To Delete User")) {
      try {
        console.log("please wait");
        toast.success("please wait");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        return;
      }
    }
  };

  // Dummy Data (later replace with API response)
  const student = {
    _id: "kuchbhi12340001",
    firstName: "Hassaan",
    lastName: "Haider",
    email: "hassaanhaider088@gmail.com",
    phone: "+82 343 7117831",
    gender: "Male",
    address: "Mohalla Tariq abad",
    city: "Lalian",
    province: "Punjab",
    isCourseRegistrationApproved: true,
    commits: "Kuch bhi ya kuch nahi",
    course: {
      code: "hmk01",
      title: "Web Development (MERN Stack)",
      image:
        "https://i.pinimg.com/videos/thumbnails/originals/a4/f2/b4/a4f2b4425a88bc8a25b279447d95d488.0000000.jpg",
      duration: "6 Months",
      fee: "PKR 35,000",
      timing: "Evening 6:00 PM - 8:00 PM",
      instructor: "Sir Bilal Ahmed",
      rating: "4.9",
      overview:
        "Complete MERN Stack seekho. Live projects + Job focused training.",
      modules: [
        "HTML/CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "MongoDB",
        "Portfolio Website",
      ],
      benefits: [
        "100% Job Placement",
        "Live Projects",
        "Certificate",
        "Freelancing Training",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-[#F8CB15]">
        Student Details
      </h1>

      {/* Student Info */}
      <div className="bg-white text-black rounded-xl p-6 mb-10 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-[#F8CB15]">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <p>
            <span className="font-semibold">Name:</span> {UserData?.firstName}
            {UserData?.lastName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {UserData?.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {UserData?.phone}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {UserData?.gender}
          </p>
          <p>
            <span className="font-semibold">City:</span> {UserData?.city}
          </p>
          <p>
            <span className="font-semibold">Province:</span>{" "}
            {UserData?.province}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Address</p>
          <p className="text-sm">{UserData?.address}</p>
        </div>

        <div className="mt-4 w-full flex justify-between items-center">
          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              UserData?.isCourseRegistrationApproved
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {UserData?.isCourseRegistrationApproved
              ? "Registration Approved"
              : "Pending Approval"}
          </span>
          {/* action buttons  */}
          <div className="flex gap-4">
            <ToogleSwitch
              IsCourseRegistrationApproved={
                UserData?.isCourseRegistrationApproved
              }
              hanldeChange={hanldeUserApprovnessChange}
              user={UserData}
            />
            <button
              onClick={() => hanldeUserDeletion(UserData._id)}
              title="Delete User"
              className=""
            >
              <FiDelete size={29} color="red" />
            </button>
          </div>
        </div>
      </div>

      {/* Course Section */}
      <div className="bg-white text-black rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-[#F8CB15]">
          Registered Course
        </h2>

        {UserData?.course?.map((course, idx) => {
          return (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={course?.image}
                  alt={course?.title}
                  className="rounded-lg w-full h-[300px] object-cover"
                />

                <div>
                  <h3 className="text-2xl font-bold mb-2">{course?.title}</h3>

                  <p className="text-sm mb-4">{course?.overview}</p>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <p>
                      <span className="font-semibold">Duration:</span>{" "}
                      {course?.duration}
                    </p>
                    <p>
                      <span className="font-semibold">Fee:</span> {course?.fee}
                    </p>
                    <p>
                      <span className="font-semibold">Timing:</span>{" "}
                      {course?.timing}
                    </p>
                    <p>
                      <span className="font-semibold">Instructor:</span>{" "}
                      {course?.instructor}
                    </p>
                    <p>
                      <span className="font-semibold">Rating:</span> ⭐{" "}
                      {course?.rating}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modules */}
              <div className="mt-6">
                <h4 className="font-semibold text-[#F8CB15] mb-2">
                  Course Modules
                </h4>
                <ul className="list-disc list-inside text-sm grid md:grid-cols-2 gap-x-6">
                  {course?.modules.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mt-6">
                <h4 className="font-semibold text-[#F8CB15] mb-2">Benefits</h4>
                <div className="flex flex-wrap gap-2">
                  {course?.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black text-white rounded-full text-xs"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SingleStudent;
