import bcrypt from "bcrypt";

async function CheckPassword(password, hash) {
  try {
    const IsPassAuthentic = await bcrypt.compare(password, hash);
    return IsPassAuthentic;
  } catch (error) {
    return false;
  }
}

export default CheckPassword;
