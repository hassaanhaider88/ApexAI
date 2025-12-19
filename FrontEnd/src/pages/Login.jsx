import { useState } from "react";
import BackEndURI from "../utils/BackEndURI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const [role, setRole] = useState("student");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  useEffect(() => {
    if (localStorage.getItem("adminInfo")) {
      navigate("/admin");
    } else if (localStorage.getItem("userinfo")) {
      navigate("/");
    } else {
      return;
    }
  }, []);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (role === "admin") {
      const res = await fetch(`${BackEndURI}/api/admin/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Pass,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.sucess) {
        toast.success("Admin Login Sucessful");
        localStorage.setItem(
          "adminInfo",
          JSON.stringify({ adminToken: data.data })
        );
        navigate("/admin");
      } else {
        toast.error("Invalid Credentials");
      }
    } else {
      const res = await fetch(`${BackEndURI}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Pass,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.sucess) {
        toast.success("Student Login Sucessful");
        localStorage.setItem("userinfo", data.data._id);
        navigate(`/students/${data.data._id}`);
      } else {
        toast.error("Invalid Credentials");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md rounded-2xl shadow-xl border border-gray-100 p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-black">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Login to continue</p>
        </div>

        {/* Role Switch */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
          <button
            onClick={() => setRole("student")}
            className={`w-1/2 py-2 rounded-lg text-sm font-semibold transition ${
              role === "student" ? "bg-[#F9CB15] text-black" : "text-gray-500"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`w-1/2 py-2 rounded-lg text-sm font-semibold transition ${
              role === "admin" ? "bg-[#F9CB15] text-black" : "text-gray-500"
            }`}
          >
            Admin
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9CB15]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              value={Pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Enter password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9CB15]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F9CB15] text-black py-2.5 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login as {role === "admin" ? "Admin" : "Student"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
