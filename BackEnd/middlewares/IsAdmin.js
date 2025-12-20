import jwt from "jsonwebtoken";

export const isAdmin = (req, res, next) => {
  try {
    const { getToken } = req.body;

    // 3. Verify token
    const decoded = jwt.verify(getToken, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    // 4. Admin check
    if (decoded.adminEmail !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    // 5. Attach admin info to request
    req.admin = decoded;

    // 6. Allow request
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Authentication failed",
    });
  }
};
