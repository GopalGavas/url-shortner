import { getUser } from "../service/auth.js";

const checkForAuthentication = (req, _, next) => {
  const tokenCookie = req.cookies?.token;
  req.user = null;

  if (!tokenCookie) return next();

  const token = tokenCookie;
  const user = getUser(token);

  req.user = user;
  return next();
};

const restrictToRole = (roles = []) => {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user?.role)) return res.end("Unauthorized");

    return next();
  };
};

/*
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
*/

export { checkForAuthentication, restrictToRole };
