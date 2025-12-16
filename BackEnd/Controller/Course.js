import Course from "../Modals/Course.js";

export function getAllCourseFromDB(req, res) {
  try {
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

export function getSingeCourseFromDB(req, res) {
  try {
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

export function UpdateCourse(req, res) {
  try {
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}

export function DeleteCourse(req, res) {
  try {
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
