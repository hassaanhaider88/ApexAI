export async function CheckAdmin(req, res) {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (
      email == process.env.ADMIN_EMAIL &&
      password == process.env.ADMIN_PASSWORD
    ) {
      res.json({
        sucess: true,
        message: "Admin Found Sucessfully",
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
