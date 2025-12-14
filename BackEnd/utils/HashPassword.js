import bcrypt from "bcrypt";
async function HashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(myPlaintextPassword, salt);
    return hashPass;
  } catch (error) {
    return false;
  }
}

export default HashPassword;
