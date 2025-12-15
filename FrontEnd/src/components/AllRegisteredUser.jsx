import { FiDelete } from "react-icons/fi";
import { toast } from "react-toastify";
import ToogleSwitch from "./ToogleSwitch";
import { useEffect, useState } from "react";

const AllRegisterUsers = ({ data }) => {
  const [AllUserData, setAllUserData] = useState(data);
  const hanldeChangeToogleSwitch = async (user) => {
    const confirmation = confirm("Are you sure you want to approve this user?");
    console.log(user);
    if (confirmation) {
      toast.success("please wait");
      return;
    } else {
      return;
    }
  };

  const hanldeUserDelete = async (user) => {
    const confirmation = confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      toast.success("please wait");
      return;
    } else {
      return;
    }
  };

  useEffect(() => {
    setAllUserData(data);
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
                <th className="px-4 py-3 border">City</th>
                <th className="px-4 py-3 border">Province</th>
                <th className="px-4 py-3 border">View Courses</th>
                <th className="px-4 py-3 border">Approved Registration</th>
                <th className="px-4 py-3 border">Approvness Actions</th>
                <th className="px-4 py-3 border">Delete</th>
              </tr>
            </thead>

            <tbody>
              {data.map((user, index) => (
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
                  <td className="px-4 py-2 border">{user.city}</td>
                  <td className="px-4 py-2 border">{user.province}</td>
                  <td className="px-4 py-2 border gap-2 flex flex-col">
                    {user.course?.map((course, idx) => {
                      return (
                        <h2 key={idx}  className="text-nowrap">
                          {course.title}
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
                  <td className="w-full pt-3 h-full border bg-transparent border-transparent items-center justify-center flex gap-3">
                    <ToogleSwitch
                      IsCourseRegistrationApproved={
                        user.isCourseRegistrationApproved
                      }
                      user={user}
                      hanldeChange={hanldeChangeToogleSwitch}
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <button onClick={() => hanldeUserDelete(user)}>
                      <FiDelete size={30} color="red" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllRegisterUsers;
