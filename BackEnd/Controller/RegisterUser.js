import User from "../Modals/RigesterUser.js";
import Course from "../Modals/Course.js";
import CheckPassword from "../Utils/CheckPassword.js";
import HashPassword from "../Utils/HashPassword.js";

export async function AllRegisteredUser(req, res) {
  try {
    const AllUser = await User.find();
    if (AllUser) {
      return res.json({
        sucess: true,
        message: "Sucessfully Fetch user",
        data: AllUser,
      });
    } else {
      return res.json({
        sucess: false,
        message: "Error in sending users",
      });
    }
  } catch (error) {
    res.json({
      sucess: false,
      message: "Error in sending users",
    });
  }
}

export async function RegisterUser(req, res) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      gender,
      course,
      address,
      city,
      province,
      comments,
    } = req.body;

    const selectedCourse = await Course.findOne({ title: course });

    if (!selectedCourse) {
      return res.json({
        success: false,
        message: "Course not found",
      });
    }

    const moduleStatus = selectedCourse.modules.map((_, index) => ({
      moduleIndex: index,
      completed: false,
    }));

    const CheckUser = await User.findOne({ email }).populate("course.courseId");
    // if user exist already then we choose either the course he want to enroll is already appear in his timeline (pehle se es courese me enroll to nahi hai na ye check kr rahi)
    if (CheckUser) {
      const alreadyEnrolled = CheckUser.course.some(
        (c) => c.courseId._id.toString() === selectedCourse._id.toString()
      );

      if (alreadyEnrolled) {
        return res.json({
          sucess: false,
          message: "You are already registered for this course",
        });
      }

      // ADD NEW COURSE
      CheckUser.course.push({
        courseId: selectedCourse._id,
        moduleStatus,
      });
      await CheckUser.save();

      return res.json({
        sucess: true,
        message: "Course added successfully",
        data: CheckUser,
      });
    } else {
      const HashPass = await HashPassword(password);
      const registerUser = await User.create({
        email,
        password: HashPass,
        firstName,
        lastName,
        phone,
        gender,
        course: [
          {
            courseId: selectedCourse._id,
            moduleStatus,
          },
        ],
        address,
        city,
        province,
        commits: comments,
      });
      res.json({
        sucess: true,
        message: "User Registered Sucessfully",
        data: registerUser,
      });
    }
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

export async function GetProfile(req, res) {
  try {
    const { userId } = req.body;
    const getUser = await User.findById(userId).populate("course.courseId");
    if (!getUser) {
      return res.json({
        sucess: false,
        message: "User Not Found",
      });
    }

    res.json({
      sucess: true,
      message: "User Found Sucessfully",
      data: getUser,
    });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

export async function LoginUser(req, res) {
  try {
    const { email, password } = req.body;
    const CheckUser = await User.findOne({ email });
    if (!CheckUser) {
      res.json({
        sucess: false,
        message: "User Is Not Registered",
      });
    } else {
      const CheckPass = await CheckPassword(password, CheckUser.password);
      if (!CheckPass) {
        res.json({
          sucess: false,
          message: "Invalid Password",
        });
      } else {
        res.json({
          sucess: true,
          message: "User Found Sucessfully",
          data: CheckUser,
        });
      }
    }
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

// this only update the admin with either user is Approved course or not
export async function UpdateUserApproveness(req, res) {
  try {
    const { userId, IsCourseRegistrationApproved } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { isCourseRegistrationApproved: IsCourseRegistrationApproved },
      { new: true }
    );
    if (!user) {
      return res.json({
        sucess: false,
        message: "User Not Found",
      });
    }

    res.json({
      sucess: true,
      message: "User Updated Sucessfully",
      data: User,
    });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

export const updateUserModuleStatus = async (req, res) => {
  try {
    const { userId, ModuleId, completed } = req.body;

    if (!userId || !ModuleId) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const CourseModule = user.course
      .map((c) =>
        c.moduleStatus.find((m) => m._id.toString() === ModuleId.toString())
      )
      .find(Boolean);

    if (!CourseModule) {
      return res.status(404).json({
        success: false,
        message: "Module not found",
      });
    }

    // ✅ UPDATE
    CourseModule.completed = completed;

    // ✅ SAVE
    await user.save();

    return res.json({
      success: true,
      message: "Module status updated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export async function DeleteUser(req, res) {
  try {
    const { userId } = req.body;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.json({
        sucess: false,
        message: "User Not Found",
      });
    }

    res.json({
      sucess: true,
      message: "User Deleted Sucessfully",
    });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

export async function UploadUserCertificate(req, res) {
  try {
    const { userId, uploadCertificate, courseId } = req.body;

    const getUser = await User.findById(userId);
    if (!getUser) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    const course = getUser.course.find(
      (c) => c.courseId.toString() === courseId.toString()
    );

    if (!course) {
      return res.json({
        success: false,
        message: "Course not found for this user",
      });
    }

    course.CourseCertificate = uploadCertificate;

    await getUser.save();

    res.json({
      success: true,
      message: "Certificate uploaded successfully",
      data: getUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
