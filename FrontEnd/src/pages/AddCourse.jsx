import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AddCourse = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getAdmin = localStorage.getItem("adminInfo");
    if (!getAdmin) {
      navigate("/");
    }
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // alert("Registration Successful! Aapka form WhatsApp pe chala gaya hai!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      course: "",
      address: "",
      city: "",
      province: "",
      comments: "",
    });
  };
  return (
    <div className="w-full px-5 md:px-10 min-h-screen">
      <h1 className="mt-14 text-5xl font-bold text-center text-[#885af3] ">
        Add New Course
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-8 text-lg"
        >
          {/* Row 0 */}
          <input
            type="file"
            className="md:col-span-2 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          {/* Row 1 */}
          <input
            type="text"
            placeholder="Course Title"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          <input
            type="text"
            placeholder="Course Duration e.g 6 Months"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />

          {/* Row 2 */}
          <input
            type="text"
            placeholder="Course Fee in Rs."
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          <input
            type="text"
            placeholder="Course Timing e.g Evening 6:00 PM - 8:00 PM"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />

          <input
            type="text"
            placeholder="Course Instructor"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          <input
            type="text"
            placeholder="Course Already Registered Students"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />

          <input
            type="text"
            placeholder="Course Rating Out of 5"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />

          <input
            type="text"
            placeholder="Course Rating Out of 5"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />

          <input
            type="text"
            placeholder="Course Short Discription..."
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="md:col-span-2 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          {/* Submit Button */}
          <button
            type="submit"
            className=" mb-5 relative  left-[100%] bg-yellow-500 hover:bg-yellow-600 text-purple-900 py-3 rounded-full text-xl w-fit px-10 font-extrabold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
