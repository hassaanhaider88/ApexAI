import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import BackEndURI from "../utils/BackEndURI";
import { toast } from "react-toastify";
import useCourseStore, { GetAllCoursesFromBE } from "../store/useCourseStore";
import { Link, useNavigate } from "react-router-dom";
import AllRegisterUsers from "../components/AllRegisteredUser";
import RegisterUsers from "../Data/RegisterUser";

export default function Admin() {
  const { setAllCourses, AllCourses } = useCourseStore();
  const navigate = useNavigate();
  const [leads] = useState(JSON.parse(localStorage.getItem("leads") || "[]"));
  const [CheckAdminRegister, setCheckAdminRegister] = useState(false);
  const [AdminEmail, setAdminEmail] = useState("");
  const [AdminPass, setAdminPass] = useState("");

  useEffect(() => {
    const GetAdminInfoFromLS = localStorage.getItem("adminInfo");
    if (GetAdminInfoFromLS) {
      setCheckAdminRegister(true);
    } else {
      setCheckAdminRegister(false);
    }
  }, [CheckAdminRegister]);

  // useEffect(() => {
  //   GetAllCoursesFromBE();
  // }, []);

  const handleCourseUpdate = async (courseId) => {
    const IsReallyUpdate = confirm("Are you sure to update Course");
    if (IsReallyUpdate) {
      navigate(`/update-course?id=${courseId}`);
    }
  };
  const hanldeCourseDeletion = async (courseId) => {
    const IsReallyDelete = confirm("Are you sure to delete Course");
    if (IsReallyDelete) {
      try {
        const res = await fetch(`${BackEndURI}/api/course/delete`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            courseId,
          }),
        });
        console.log(res);
        const data = await res.json();
        if (data.sucess) {
          toast.success("Course Deleted Sucessfully");
          setAllCourses(GetAllCoursesFromBE());
          return;
        } else {
          toast.error("Something Went Wrong");
          return;
        }
      } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong");
        return;
      }
    }
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const Res = await fetch(`${BackEndURI}/api/admin/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: AdminEmail,
          password: AdminPass,
        }),
      });
      const Data = await Res.json();
      console.log(Data);
      if (Data.sucess) {
        setCheckAdminRegister(true);
        localStorage.setItem("adminInfo", JSON.stringify({ AdminEmail }));
        toast.success("Admin Login Sucessful");
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error);
      return;
    }
  };

  return CheckAdminRegister ? (
    <div className="min-h-screen mt-10 bg-gray-900 text-white py-10">
      <div className="mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-10 text-center">
          ADMIN PANEL
        </h1>
        <div className="SHowAmdinToRegisterUsersCourseAndAddCourseCard">
          {/*  here first show the all course with option to update and delete buttons and give link to navigate to viewall student page */}
          <h1 className="text-2xl">All Courses</h1>
          <div className="flex w-full mt-5 flex-col gap-3">
            {AllCourses?.map((course, idx) => {
              return (
                <div
                  key={idx}
                  className="w-full md:px-10 px-5 flex items-center justify-between py-3 rounded-full shadow-md bg-white"
                >
                  <div className="flex gap-4 text-black items-center">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-24 h-12 shadow-2xl rounded-lg"
                    />
                    <h1 className="text-black font-semibold">{course.title}</h1>
                    <h1 className="font-bold ">
                      {course.code}
                      <span className="ml-1 text-sm font-[300]">
                        Course Code
                      </span>
                    </h1>
                  </div>
                  {/* action  */}
                  <div className="flex gap-5 items-center">
                    <button
                      onClick={() => handleCourseUpdate(course._id)}
                      className="hover:scale-95 duration-200 transition-all active:scale-105"
                    >
                      <FaRegEdit size={30} color="#F8CB15" />
                    </button>
                    <button
                      onClick={() => hanldeCourseDeletion(course._id)}
                      className="hover:scale-95 duration-200 transition-all active:scale-105"
                    >
                      <FiDelete size={30} color="red" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 w-full flex justify-end items-center">
            <Link
              to={"/add-course"}
              className="py-3 px-4 rounded-full flex justify-center items-center gap-2 hover:scale-95 active:scale-110 duration-200 transition-all bg-[#f8cb15] "
            >
              <IoIosAddCircleOutline />
              Add New Course
            </Link>
          </div>
          {/* all  Registered User goes here */}
          <div className="text-2xl mb-5">All Register Users</div>
          <AllRegisterUsers data={RegisterUsers} />
        </div>
        {/* {leads.length === 0 ? (
          <p className="text-center text-3xl">No registrations yet...</p>
        ) : (
          <div className="grid gap-6">
            {leads.reverse().map((lead, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">{lead.name}</h3>
                    <p className="text-xl text-green-400">{lead.phone}</p>
                    <p className="text-lg">
                      Course: <strong>{lead.course}</strong>
                    </p>
                    {lead.message && (
                      <p className="mt-2 italic">"{lead.message}"</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-80">{lead.date}</p>
                    <a
                      href={`https://wa.me/${lead.phone.replace(
                        /[^0-9]/g,
                        ""
                      )}`}
                      className="mt-4 inline-block bg-green-500 px-6 py-3 rounded-full hover:bg-green-600"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  ) : (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <form
        action=""
        onSubmit={handleAdminLogin}
        className="w-[400px] flex justify-center items-center flex-col "
      >
        <div className="flex justify-center  h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-transparent pl-5 focus-within:border-gray-300">
          <AiOutlineMail size={20} color="gray" />
          <input
            placeholder="Email id"
            className="h-full w-full bg-transparent text-sm placeholder-gray-400 outline-none"
            required="true"
            type="email"
            value={AdminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
          />
        </div>
        <div className="mt-6 flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-transparent pl-5 focus-within:border-gray-300">
          <RiLockPasswordFill size={20} color="gray" />
          <input
            placeholder="Password"
            className="h-full  w-full bg-transparent text-sm placeholder-gray-400 outline-none"
            required="true"
            value={AdminPass}
            onChange={(e) => setAdminPass(e.target.value)}
            type="password"
          />
        </div>
        <button className="py-3 px-5 mt-5 font-semibold text-white rounded-full shadow-md hover:scale-95 duration-300 transition-all active:scale-105 bg-[#EAB308] ">
          Check
        </button>
      </form>
    </div>
  );
}
