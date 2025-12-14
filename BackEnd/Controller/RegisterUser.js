import Admin from "../Modals/Admin.js";
import CheckPassword from "../Utils/CheckPassword.js";
import HashPassword from "../Utils/HashPassword.js";

export async function CheckAdmin(req, res) {
  try {
    const { email, password } = req.body;
    const CheckUser = await Admin.findOne({ email });
    if (!CheckUser) {
      res.json({
        sucess: false,
        message: "Admin Is Not Registered",
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
          message: "Admin Found Sucessfully",
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

export async function RegisterAmdin(req, res) {
  try {
    const { email, password } = req.body;
    const CheckUser = await Admin.findOne({ email });
    if (CheckUser) {
      res.json({
        sucess: false,
        message: "Admin Already Registered",
      });
    } else {
      const HashPass = await HashPassword(password);
      const Admin = await Admin.create({
        emial: email,
        password: HashPass,
      });
      res.json({
        sucess: true,
        message: "Admin Registered Sucessfully",
        data: Admin,
      });
    }
  } catch (error) {
    res.json({
      sucess: false,
      message: error.message,
    });
  }
}
