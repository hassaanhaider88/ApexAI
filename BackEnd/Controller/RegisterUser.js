import User from "../Modals/RigesterUser.js";
import Course from "../Modals/Course.js";
import CheckPassword from "../Utils/CheckPassword.js";
import HashPassword from "../Utils/HashPassword.js";

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

    const CheckUser = await User.findOne({ email }).populate("course");
    // if user exist already then we choose either the course he want to enroll is already appear in his timeline (pehle se es courese me enroll to nahi hai na ye check kr rahi)
    if (CheckUser) {
      const alreadyEnrolled = CheckUser.course.some(
        (c) => c._id.toString() === selectedCourse._id.toString()
      );

      if (alreadyEnrolled) {
        return res.json({
          success: false,
          message: "You are already registered for this course",
        });
      }

      // ADD NEW COURSE
      CheckUser.course.push(selectedCourse._id);
      await CheckUser.save();

      return res.json({
        success: true,
        message: "Course added successfully",
        data: CheckUser,
      });
    } else {
      const HashPass = await HashPassword(password);
      console.log(HashPass);
      const registerUser = await User.create({
        email,
        password: HashPass,
        firstName,
        lastName,
        phone,
        gender,
        course: [selectedCourse._id],
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
    const getUser = await User.findById(userId).populate("course");
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
export async function UpdateUser(req, res) {
  try {
    const { userId, IsCourseRegistrationApproved } = req.body;
    const User = await User.findByIdAndUpdate(
      userId,
      { isCourseRegistrationApproved: IsCourseRegistrationApproved },
      { new: true }
    );
    if (!User) {
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

export async function DeleteUser(req, res) {
  try {
    const { userId } = req.body;
    const User = await User.findByIdAndDelete(userId);
    if (!User) {
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
