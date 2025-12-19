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
