import { asyncHandler } from "../utils/asyncHandler.js";
import { getUser } from "../service/auth.js";

const restrictToLoggedInUser = asyncHandler(async (req, res, next) => {
  const userUid = req.cookies?.uid;

  if (!userUid) return res.redirect("/login");

  const user = getUser(userUid);

  if (!user) return res.redirect("/login");

  req.user = user;
  next();
});

const checkAuth = asyncHandler(async (req, _, next) => {
  const userUid = req.cookies?.uid;

  const user = getUser(userUid);

  req.user = user;

  next();
});

export { restrictToLoggedInUser, checkAuth };
