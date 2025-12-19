import express from "express";
import Contact from "../Modals/ContactUs.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, phone, message } = req.body;

    if (!name || !email || !subject || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.json({
        success: false,
        message: "User's query already exists",
        data: existingContact,
      });
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      phone,
      message,
    });

    return res.json({
      success: true,
      message: "Query received successfully",
      data: contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
