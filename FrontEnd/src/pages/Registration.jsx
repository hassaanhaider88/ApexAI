import { useState } from "react";
import useCourseStore from "../store/useCourseStore";
import { toast } from "react-toastify";
import BackEndURI from "../utils/BackEndURI";
import { useNavigate, Link } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  const { AllCourses } = useCourseStore();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    course: "",
    address: "",
    city: "",
    province: "",
    comments: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Res = await fetch(`${BackEndURI}/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      const Data = await Res.json();
      if (Data.sucess) {
        toast.success("Registration Sucessfully");
        localStorage.setItem("userinfo", Data.data._id);
        navigate("/");
        return;
      } else {
        toast.error(Data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      return;
    }

    // Auto WhatsApp Message
    // const message =
    //   `*NEW REGISTRATION*%0A%0A` +
    //   `*Name:* ${formData.firstName} ${formData.lastName}%0A` +
    //   `*Email:* ${formData.email}%0A` +
    //   `*Phone:* ${formData.phone}%0A` +
    //   `*Gender:* ${formData.gender}%0A` +
    //   `*Course:* ${formData.course}%0A` +
    //   `*Address:* ${formData.address}, ${formData.city}, ${formData.province}%0A` +
    //   `*Comments:* ${formData.comments || "N/A"}%0A%0A` +
    //   `Submitted on: ${new Date().toLocaleString()}`;

    // const whatsappURL = `https://wa.me/923000123456?text=${message}`;
    // window.open(whatsappURL, "_blank");

    // Save to localStorage
    // const leads = JSON.parse(localStorage.getItem("leads") || "[]");
    // leads.push({ ...formData, date: new Date().toLocaleString() });
    // localStorage.setItem("leads", JSON.stringify(leads));

    // // alert("Registration Successful! Aapka form WhatsApp pe chala gaya hai!");
    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   phone: "",
    //   gender: "",
    //   course: "",
    //   address: "",
    //   city: "",
    //   province: "",
    //   comments: "",
    // });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900 flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Rocket Background */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <img
          src="/rocket.png"
          alt="Rocket"
          className="w-96 animate-bounce-slow"
        />
      </div>

      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl p-10 relative z-10">
        <h1 className="text-6xl md:text-8xl font-extrabold text-center mb-12">
          <span className="text-yellow-500">REGISTER</span>{" "}
          <span className="text-purple-900">NOW</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-8 text-lg"
        >
          {/* Row 1 */}
          <input
            type="text"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />

          {/* Row 2 */}
          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />

          {/* Row 2.5 for password */}
          <input
            type="password"
            placeholder="Your Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="md:col-span-2 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />

          {/* Row 3 */}
          <select
            required
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2"
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <select
            required
            value={formData.course}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2"
          >
            <option value="">Please Select Course</option>
            {AllCourses.map((course, idx) => {
              return <option key={idx}>{course.title}</option>;
            })}
          </select>

          {/* Row 4 */}
          <input
            type="text"
            placeholder="Address"
            required
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="md:col-span-2 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />

          {/* Row 5 */}
          <input
            type="text"
            placeholder="City"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          <input
            type="text"
            placeholder="State / Province / Region"
            required
            value={formData.province}
            onChange={(e) =>
              setFormData({ ...formData, province: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />

          {/* Comments */}
          <textarea
            placeholder="Additional Comments"
            rows="4"
            value={formData.comments}
            onChange={(e) =>
              setFormData({ ...formData, comments: e.target.value })
            }
            className="md:col-span-2 border-2 border-gray-300 rounded-xl p-4 focus:border-purple-600 outline-none transition"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="md:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-purple-900 py-6 rounded-full text-3xl font-extrabold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </form>
        <h1 className="mt-10 text-2xl">
          already have an account?{" "}
          <Link to={"/login"} className="hover:underline hover:text-[#EAB308]">
            Login here
          </Link>{" "}
        </h1>
      </div>
    </section>
  );
}
