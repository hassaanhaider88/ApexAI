import { BsFillStarFill } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
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
  const [IsAdminLogin, setIsAdminLogin] = useState(false);
  const [IsUserLogin, setIsUserLogin] = useState(false);

  useEffect(() => {
    const getAdmin = localStorage.getItem("adminInfo");
    if (getAdmin) {
      setIsAdminLogin(true);
      setIsUserLogin(false);
    } else {
      const user = localStorage.getItem("userinfo");
      if (user) {
        setIsAdminLogin(false);
        setIsUserLogin(true);
      } else {
        setIsAdminLogin(false);
        setIsUserLogin(false);
      }
    }
  }, [Location]);

  useEffect(() => {
    console.log(UserData);
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
        toast.success("Data fetched successfully");
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

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mt-5 mb-8 text-[#F8CB15]">
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
          {IsAdminLogin || IsUserLogin ? (
            <>
              <p>
                <span className="font-semibold">Email:</span> {UserData?.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {UserData?.phone}
              </p>{" "}
            </>
          ) : (
            ""
          )}
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
          <p>
            <span className="font-semibold pr-3">Registered At:</span>{" "}
            {UserData?.createdAt.split("T")[0]}
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
              : "Registeration Pending"}
          </span>
          {/* action buttons  */}
          {IsAdminLogin ? (
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
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Course Section */}
      <div className="bg-white py-5 text-black">
        {UserData?.course?.map((item, idx) => {
          const course = item.courseId; // 👈 IMPORTANT
          const moduleStatus = item.moduleStatus;

          return (
            <div key={idx} className="space-y-6 space-x-4">
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
                      <b>Duration:</b> {course?.duration}
                    </p>
                    <p>
                      <b>Fee:</b> {course?.fee}
                    </p>
                    <p>
                      <b>Timing:</b> {course?.timing}
                    </p>
                    <p>
                      <b>Instructor:</b> {course?.instructor}
                    </p>
                    <p className="flex gap-2 items-center">
                      <b>Rating:</b>
                      <BsFillStarFill size={16} color="#EAB308" />
                      {course?.rating}
                    </p>
                  </div>
                </div>
              </div>

              {/* MODULES WITH STATUS */}
              <div>
                <h4 className="font-semibold text-[#F8CB15] mb-2">
                  Course Modules
                </h4>

                <ul className="grid md:grid-cols-2 gap-3">
                  {course?.modules.map((moduleName, i) => {
                    const completed = moduleStatus[i]?.completed;

                    return (
                      <li
                        key={i}
                        className={`flex items-center gap-2 p-2 rounded-lg ${
                          completed ? "bg-green-100" : "bg-gray-100"
                        }`}
                      >
                        {completed ? "✅" : "⏳"}
                        <span className="font-medium">{moduleName}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* BENEFITS */}
              <div>
                <h4 className="font-semibold text-[#F8CB15] mb-2">Benefits</h4>
                <div className="flex flex-wrap gap-2">
                  {course?.benefits.map((b, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleStudent;
