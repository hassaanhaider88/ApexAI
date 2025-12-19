import { BiLinkExternal } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { toast } from "react-toastify";
import ToogleSwitch from "./ToogleSwitch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllRegisterUsers = ({ data }) => {
  const [AllUserData, setAllUserData] = useState(data);
  const navigate = useNavigate();
  useEffect(() => {
    setAllUserData(data);
    console.log(AllUserData);
  }, [AllUserData]);

  return (
    <div className="w-full bg-white rounded-2xl overflow-x-auto">
      <div className="scroll-wrapper">
        <div className="scroll-inner">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-[#F8CB15] text-left">
              <tr className="text-sm font-semibold text-white">
                <th className="px-4 py-3 border">Full Name</th>
                <th className="px-4 py-3 border">Email</th>
                <th className="px-4 py-3 border">Phone</th>
                <th className="px-4 py-3 border">Gender</th>
                <th className="px-4 py-3 border">View Courses</th>
                <th className="px-4 py-3 border">Approved Registration</th>
                <th className="px-4 py-3 border">View Student</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {data.length > 0 ? (
                data.map((user, index) => (
                  <tr
                    key={index}
                    className="text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <td className="px-4 py-2 border">
                      {user.firstName} {user.lastName}
                    </td>
                    <td className="px-4 py-2 border">{user.email}</td>
                    <td className="px-4 py-2 border">{user.phone}</td>
                    <td className="px-4 py-2 border">{user.gender}</td>
                    <td className="px-4 py-2 border gap-2 flex flex-col">
                      {user.course?.map((course, idx) => {
                        console.log(course);
                        return (
                          <h2
                            key={idx}
                            onClick={() =>
                              navigate(`/courses/${course.courseId}`)
                            }
                            className="text-nowrap cursor-pointer duration-300 transition-all hover:underline hover:text-[#FC8508]"
                          >
                            {course.courseId}
                          </h2>
                        );
                      })}
                    </td>
                    <td
                      title="Is Course Registration Approved"
                      className="px-4 py-2 border"
                    >
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.isCourseRegistrationApproved
                            ? "bg-green-400 text-green-800"
                            : "bg-red-400 text-red-800"
                        }`}
                      >
                        {user.isCourseRegistrationApproved
                          ? "Approved"
                          : "Pending"}
                      </span>
                    </td>
                    <td className="px-4 cursor-pointer py-2 border">
                      <BiLinkExternal
                        onClick={() => navigate(`/students/${user._id}`)}
                        size={30}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <div className="w-full text-center text-lg font-semibold text-black">
                  Nothing Found
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllRegisterUsers;
