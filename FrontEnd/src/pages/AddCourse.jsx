import { BiImageAdd } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MutliValueInputTag from "../components/MutliValueInputTag";
import BackEndURI from "../utils/BackEndURI";

const AddCourse = () => {
  const navigate = useNavigate();
  const [CourseImg, setCourseImg] = useState("");
  const ImageUrl = useRef(null);
  const [CourseFile, setCourseFile] = useState(null);
  useEffect(() => {
    const getAdmin = localStorage.getItem("adminInfo");
    console.log(CourseFile);
    if (!getAdmin) {
      navigate("/");
    }
  }, [CourseImg]);

  const [formData, setFormData] = useState({
    cTitle: "",
    cCode: "",
    cDuration: "",
    cFee: "",
    cTiming: "",
    cInstructor: "",
    cRegisteredUser: "",
    cRatings: "",
    cOverView: "",
    cModules: [],
    cBenefits: [],
  });

  const uploadImageToDB = async () => {
    try {
      if (!CourseFile || CourseFile.length === 0) {
        return toast.error("Please select an image first");
      }

      const formData = new FormData();
      formData.append("courseImage", CourseFile);
      // field name backend ke multer se match hona chahiye

      const res = await fetch(`${BackEndURI}/api/upload`, {
        method: "POST",
        body: formData, // ❌ headers bilkul mat do
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const hanldeImageFile = (e) => {
    const image = e.target.files[0];
    if (!image) return;
    setCourseFile(image);

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.onload = () => {
      setCourseImg(reader.result);
      console.log(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!CourseImg) return toast.error("please select image");
    console.log(formData);
    // alert("Registration Successful! Aapka form WhatsApp pe chala gaya hai!");
    // setFormData({
    // imageURL
    //   cTitle: "",
    //   cCode: "",
    //   cDuration: "",
    //   cFee: "",
    //   cTiming: "",
    //   cInstructor: "",
    //   cRegisteredUser: "",
    //   cRatings: "",
    //   cOverView: "",
    //   cModules: [],
    //   cBenefits: [],
    // });
  };
  return (
    <div className="w-full px-5 md:px-10 min-h-screen">
      <h1 className="mt-14 mb-10 text-5xl font-bold text-center text-[#885af3] ">
        Add New Course
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-8 text-lg"
        >
          {/* Row File upload  */}
          <div
            onClick={() => ImageUrl.current.click()}
            className="w-full relative cursor-pointer py-4 border-dashed border-black bg-green-50 col-span-2 rounded-[30px] h-[300px] flex justify-center items-center"
          >
            {CourseImg ? (
              <img className="h-full bg-cover my-2" src={CourseImg} alt="" />
            ) : (
              <BiImageAdd size={150} color="#EAB308" />
            )}
            <div
              onClick={() => uploadImageToDB()}
              className=" rounded-full  text-white active:scale-110 duration-200 transition-all absolute bottom-5 py-2 px-4 bg-[#eab308] right-5"
            >
              Upload Image
            </div>
          </div>
          <input
            type="file"
            onChange={(e) => hanldeImageFile(e)}
            ref={ImageUrl}
            className=""
            hidden
          />
          {/* Row 1 */}
          {/* coure title */}
          <input
            type="text"
            placeholder="Course Title"
            required
            value={formData.cTitle}
            onChange={(e) =>
              setFormData({ ...formData, cTitle: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          {/* Course Code */}
          <input
            type="text"
            placeholder="Course Code e.g. APEX1234"
            required
            value={formData.cCode}
            onChange={(e) =>
              setFormData({ ...formData, cCode: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />

          {/* Row 2 */}
          {/* coruse Fee */}
          <input
            type="text"
            placeholder="Course Fee in Rs."
            required
            value={formData.cFee}
            onChange={(e) => setFormData({ ...formData, cFee: e.target.value })}
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          {/* Course Timing  */}
          <input
            type="text"
            placeholder="Course Timing e.g Evening 6:00 PM - 8:00 PM"
            required
            value={formData.cTiming}
            onChange={(e) =>
              setFormData({ ...formData, cTiming: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          {/* Course Instructor */}
          <input
            type="text"
            placeholder="Course Instructor"
            required
            value={formData.cInstructor}
            onChange={(e) =>
              setFormData({ ...formData, cInstructor: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          {/* Course Registered User */}
          <input
            type="text"
            placeholder="Course Already Registered Students"
            required
            value={formData.cRegisteredUser}
            onChange={(e) =>
              setFormData({ ...formData, cRegisteredUser: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          {/* course dutraion */}
          <input
            type="text"
            placeholder="Course Duration e.g 6 Months"
            required
            value={formData.cDuration}
            onChange={(e) =>
              setFormData({ ...formData, cDuration: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          {/* course Rating */}
          <input
            type="text"
            placeholder="Course Rating Out of 5"
            required
            value={formData.cRatings}
            onChange={(e) =>
              setFormData({ ...formData, cRatings: e.target.value })
            }
            className="border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          {/* Course OverView */}
          <input
            type="text"
            placeholder="Course Short Discription..."
            required
            value={formData.cOverView}
            onChange={(e) =>
              setFormData({ ...formData, cOverView: e.target.value })
            }
            className="md:col-span-2 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 px-2 transition"
          />
          {/* Multi-value Inputs */}
          <div className="md:col-span-2">
            <label className="text-gray-600 font-semibold mb-2 block">
              Course Modules
            </label>
            <MutliValueInputTag
              tags={formData.cModules}
              handleTagsChange={(tags) =>
                setFormData({ ...formData, cModules: tags })
              }
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-gray-600 font-semibold mb-2 block">
              Course Benefits
            </label>
            <MutliValueInputTag
              tags={formData.cBenefits}
              handleTagsChange={(tags) =>
                setFormData({ ...formData, cBenefits: tags })
              }
            />
          </div>

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
