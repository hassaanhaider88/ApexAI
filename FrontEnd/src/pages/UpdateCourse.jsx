import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import MutliValueInputTag from "../components/MutliValueInputTag";
import DummyCoures from "../Data/Coures";
import BackEndURI from "../utils/BackEndURI";

const UpdateCourse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [LoadingImageUpload, setLoadingImageUpload] = useState(false);
  const [IsUploadImgSucess, setIsUploadImgSucess] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const getAdmin = localStorage.getItem("adminInfo");
    if (!getAdmin) {
      navigate("/");
    }
  }, []);
  const [CourseImg, setCourseImg] = useState("");
  const ImageUrl = useRef(null);
  const [CourseFile, setCourseFile] = useState(null);

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

  useEffect(() => {
    // get course data from DB exactly
    getSingleCourse();
  }, []);

  const getSingleCourse = async () => {
    const Res = await fetch(`${BackEndURI}/api/course/get-single`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseId: searchParams.get("id"),
      }),
    });
    const singleCourse = await Res.json();
    console.log(singleCourse);
    setFormData({
      cTitle: singleCourse.data.title,
      cCode: singleCourse.data.code,
      cDuration: singleCourse.data.duration,
      cFee: singleCourse.data.fee,
      cTiming: singleCourse.data.timing,
      cInstructor: singleCourse.data.instructor,
      cRegisteredUser: singleCourse.data.students,
      cRatings: singleCourse.data.rating,
      cOverView: singleCourse.data.overview,
      cModules: singleCourse.data.modules,
      cBenefits: singleCourse.data.benefits,
    });
    setCourseImg(singleCourse.data.image);
  };

  const hanldeImageFile = (e) => {
    const image = e.target.files[0];
    setCourseFile(e.target.files[0]);
    if (!image) return;

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.onload = () => {
      setCourseImg(reader.result);
      console.log(reader.result);
    };
  };

  const uploadImageToDB = async () => {
    try {
      setLoadingImageUpload(true);

      if (
        CourseFile == null ||
        CourseFile.length === 0 ||
        CourseFile === undefined ||
        CourseFile === ""
      ) {
        setLoadingImageUpload(false);
        return toast.error("Please select a NEW image first");
      }

      const formData = new FormData();
      formData.append("courseImage", CourseFile);
      // field name backend ke multer se match hona chahiye

      const res = await fetch(`${BackEndURI}/api/upload`, {
        method: "POST",
        body: formData,
      });

      console.log(res);
      const data = await res.json();
      console.log(data);
      if (data.sucess) {
        setCourseImg(data.url);
        setIsUploadImgSucess(true);
        toast.success(data.message);
        setLoadingImageUpload(false);
      } else {
        toast.error("Something Went Wrong");
        setLoadingImageUpload(false);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!CourseImg) return toast.error("please select image");
    const Res = await fetch(`${BackEndURI}/api/course/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        getToken: JSON.parse(localStorage.getItem("adminInfo"))?.adminToken,
        ...formData,
        image: CourseImg,
        courseId: searchParams.get("id"),
      }),
    });
    const Data = await Res.json();
    if (Data.sucess) {
      toast.success("Course Updated Sucessfully");
      navigate("/admin");
      return;
    } else {
      toast.error("Something Went Wrong");
      return;
    }
  };
  return (
    <div className="w-full px-5 md:px-10 min-h-screen">
      <h1 className="mt-14 mb-10 text-5xl font-bold text-center text-[#885af3] ">
        Update Course
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-8 text-lg"
        >
          {/* Row File upload  */}
          <div
            onClick={() => ImageUrl.current.click()}
            className="w-full cursor-pointer py-4 border-dashed border-black bg-green-50 col-span-2 rounded-[30px] h-[300px] flex justify-center items-center"
          >
            {CourseImg ? (
              <img className="h-full bg-cover my-2" src={CourseImg} alt="" />
            ) : (
              <BiImageAdd size={150} color="#EAB308" />
            )}
            {LoadingImageUpload ? (
              <div className=" z-50 rounded-full  text-white active:scale-110 duration-200 transition-all absolute bottom-5 py-2 px-4 bg-[#eab308] right-5">
                Uploading...
              </div>
            ) : IsUploadImgSucess ? (
              <div className=" z-50 rounded-full  text-[#eab308] absolute bottom-5 flex gap-1 justify-center items-center py-2 px-4 bg-gray-100 right-5">
                <GoVerified size={18} color="#eab308" /> Upload Sucessfully
              </div>
            ) : (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  uploadImageToDB();
                }}
                className=" z-50 rounded-full  text-white active:scale-110 duration-200 transition-all absolute bottom-5 py-2 px-4 bg-[#eab308] right-5"
              >
                UpDate Image
              </div>
            )}
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

export default UpdateCourse;
