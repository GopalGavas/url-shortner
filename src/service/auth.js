import jwt from "jsonwebtoken";
const secret = `${process.env.SECRET}`;

function setUser(user) {
  return jwt.sign(
    {
      _id: user?._id,
      email: user.email,
      role: user.role,
    },
    secret
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return null;
  }
}

export { setUser, getUser };
