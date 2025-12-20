import jwt from "jsonwebtoken";

export async function CheckAdmin(req, res) {
  try {
    const { email, password } = req.body;

    if (
      email == process.env.ADMIN_EMAIL &&
      password == process.env.ADMIN_PASSWORD
    ) {
      var token = jwt.sign(
        { adminEmail: process.env.ADMIN_EMAIL },
        process.env.JWT_SECRET,
        { algorithm: "HS256" }
      );
      res.json({
        sucess: true,
        message: "Admin Found Sucessfully",
        data: token,
      });
    } else {
      res.json({
        sucess: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
      data: null,
    });
  }
}

export async function SendAdminInfo(req, res) {
  try {
    const { getToken } = req.body;
    if (!getToken) {
      return res.json({
        sucess: false,
        message: "Please Provide Token",
      });
    }
    const decoded = jwt.verify(getToken, process.env.JWT_SECRET);
    if (!decoded) {
      return res.json({
        sucess: false,
        message: "Invalid Token",
      });
    }
    if (decoded.adminEmail !== process.env.ADMIN_EMAIL) {
      return res.json({
        sucess: false,
        message: "Invalid Token",
        data: null,
      });
    } else {
      return res.json({
        sucess: true,
        message: "Admin match",
        data: decoded,
      });
    }
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
      data: null,
    });
  }
}
