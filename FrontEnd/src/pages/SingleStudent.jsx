import { BiCheckboxSquare } from "react-icons/bi";
import { BiCheckbox } from "react-icons/bi";
import { BsHeartArrow } from "react-icons/bs";

import { BsFillPatchCheckFill } from "react-icons/bs";
import { BiBadgeCheck } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";

import { FiDelete } from "react-icons/fi";

import { useParams, useNavigate, data } from "react-router-dom";
import ToogleSwitch from "../components/ToogleSwitch";
import { toast } from "react-toastify";
import BackEndURI from "../utils/BackEndURI";
import { useState } from "react";
import { useEffect } from "react";

const SingleStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const hanldeUserApprovnessChange = async (user) => {
    try {
      if (confirm("Are You Sure To Change User's Approvness")) {
        const Res = await fetch(`${BackEndURI}/api/user/update-profile`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: id,
            IsCourseRegistrationApproved: !user.isCourseRegistrationApproved,
          }),
        });
        const Data = await Res.json();
        if (Data.sucess) {
          toast.success(Data.message);
          getSingleUser();
        } else {
          toast.error(Data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const hanldeUserDeletion = async (userId) => {
    if (confirm("Are You Sure To Delete User")) {
      try {
        const res = await fetch(`${BackEndURI}/api/user/delete-profile`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: id,
          }),
        });
        const data = await res.json();
        if (data.sucess) {
          navigate("/admin");
        } else {
          toast.error(data.message);
          return;
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        return;
      }
    }
  };

  const updateModuleStatus = async (userId, courseId, ModuleId, completed) => {
    try {
      console.log(userId, courseId, ModuleId, completed);
      const res = await fetch(`${BackEndURI}/api/user/update-module`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          courseId,
          ModuleId,
          completed,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (data.success) {
        getSingleUser();
      } else {
        toast.error(data.message);
        return;
      }
    } catch (error) {
      toast.error(error.message);
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
        </div>
        <div className="AdminOptions w-full  mt-10">
          {IsAdminLogin ? (
            <div className="flex my-5 flex-col gap-4">
              <h1 className="text-2xl font-semibold">Admin Actions</h1>
              <div className="w-full flex-col flex sm:flex-row justify-start sm:gap-20 gap-5 items-center">
                <h1 className="w-[250px]">ApproveUser Registrations</h1>
                <ToogleSwitch
                  IsCourseRegistrationApproved={
                    UserData?.isCourseRegistrationApproved
                  }
                  hanldeChange={hanldeUserApprovnessChange}
                  user={UserData}
                />
              </div>
              <div className="w-full flex-col flex sm:flex-row justify-start sm:gap-20 gap-5 items-center">
                <h1 className="w-[250px]">Delete User</h1>
                <button
                  onClick={() => hanldeUserDeletion(UserData._id)}
                  title="Delete User"
                  className=""
                >
                  <FiDelete size={29} color="red" />
                </button>
              </div>
              <h1 className="text-lg font-semibold">
                {" "}
                Student Modules Progress
              </h1>
              <div className="w-full  flex md:flex-row flex-col justify-evenly items-center gap-3">
                {UserData?.course.map((course, idx) => {
                  return (
                    <div className=" w-full  flex justify-between">
                      <div className="">
                        {course.courseId.modules.map((module, i) => {
                          return (
                            <span
                              className=" items-center gap-2 flex text-md font-semibold text-nowrap"
                              key={i}
                            >
                              <BsHeartArrow size={18} color="#EAB308" />{" "}
                              {module}
                            </span>
                          );
                        })}
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        {course.moduleStatus.map((module, idx) => {
                          return (
                            <span
                              onClick={() => {
                                const IsConfirm = confirm(
                                  "Are You Sure To Change Status"
                                );
                                if (IsConfirm) {
                                  updateModuleStatus(
                                    UserData?._id,
                                    UserData?.course[0].courseId._id,
                                    module?._id,
                                    !module?.completed
                                  );
                                } else {
                                  return;
                                }
                              }}
                              className="flex items-center gap-5 text-md font-semibold cursor-pointer nowrap"
                            >
                              {module.completed ? (
                                <BiCheckboxSquare
                                  title="Completed Module"
                                  size={20}
                                  color="#EAB308"
                                />
                              ) : (
                                <BiCheckbox
                                  title="Pending Module"
                                  size={20}
                                  color="#EAB308"
                                />
                              )}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Course Section */}
      <div className="bg-white rounded-2xl shadow-2xl py-5 text-black">
        {UserData?.course?.map((item, idx) => {
          const course = item.courseId; // 👈 IMPORTANT
          const moduleStatus = item.moduleStatus;

          return (
            <div key={idx} className="space-y-6 mt-10 rounded-2xl space-x-4">
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
                        title={completed ? "Completed" : "Pending"}
                        key={i}
                        className={`flex items-center gap-2 p-2 rounded-lg ${
                          completed ? "bg-yellow-100" : "bg-gray-100"
                        }`}
                      >
                        {completed ? (
                          <BsFillPatchCheckFill size={19} color="#ECBA1E" />
                        ) : (
                          <BiBadgeCheck size={19} color="#ECBA1E" />
                        )}
                        <span className="font-medium">{moduleName}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* BENEFITS */}
              <div>
                <h4 className="font-semibold text-[#F8CB15] text-2xl mb-2">
                  Benefits
                </h4>
                <div className="flex w-full justify-start flex-wrap gap-2">
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
            </div>
          );
        })}
        {}
      </div>
    </div>
  );
};

export default SingleStudent;
