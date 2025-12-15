import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import BackEndURI from "../utils/BackEndURI";
import { toast } from "react-toastify";

export default function Admin() {
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
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-10 text-center">
          ADMIN PANEL
        </h1>
        <div className="SHowAmdinToRegisterUsersCourseAndAddCourseCard">
          {/*  here first show the all course with option to update and delete buttons and give link to navigate to viewall student page */}
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
