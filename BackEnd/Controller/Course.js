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

export function CreateCourse(req, res) {
  try {
    const {
      imageURL,
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
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}
