import Course from "../Modals/Course.js";

export async function getAllCourseFromDB(req, res) {
  try {
    const AllCourse = await Course.find();
    if (AllCourse) {
      return res.json({
        sucess: true,
        message: "All Course Fetch Sucessfully",
        data: AllCourse,
      });
    } else {
      return res.json({
        sucess: false,
        message: "Somthing wents wrong..",
      });
    }
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

export function getSingeCourseFromDB(req, res) {
  try {
    const { courseId } = req.body;
    const SingleCourse = Course.findById(courseId);
    if (SingleCourse) {
      return res.json({
        sucess: true,
        message: "Single Course Fetch Sucessfully",
        data: SingleCourse,
      });
    } else {
      return res.json({
        sucess: false,
        message: "Somthing wents wrong..",
      });
    }
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

export async function UpdateCourse(req, res) {
  try {
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

export async function DeleteCourse(req, res) {
  try {
    const { courseId } = req.body;
    const SingleCourse = await Course.findByIdAndDelete(courseId);
    if (SingleCourse) {
      return res.json({
        sucess: true,
        message: "Single Course Delete",
        data: SingleCourse,
      });
    } else {
      return res.json({
        sucess: false,
        message: "Somthing wents wrong..",
      });
    }
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

export async function CreateCourse(req, res) {
  try {
    const {
      image,
      cTitle,
      cCode,
      cDuration,
      cFee,
      cTiming,
      cInstructor,
      cRegisteredUser,
      cRatings,
      cOverView,
      cModules,
      cBenefits,
    } = req.body;
    const createdCourse = await Course.create({
      image: image,
      title: cTitle,
      code: cCode,
      duration: cDuration,
      fee: cFee,
      timing: cTiming,
      instructor: cInstructor,
      students: cRegisteredUser,
      rating: cRatings,
      overview: cOverView,
      modules: cModules,
      benefits: cBenefits,
    });
    res.json({
      sucess: true,
      message: "Course Created Sucessfully",
      data: createdCourse,
    });
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}
