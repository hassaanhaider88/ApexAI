import bcrypt from "bcrypt";

async function HashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    return hashPass;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default HashPassword;
