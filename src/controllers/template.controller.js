import { asyncHandler } from "../utils/asyncHandler.js";
import { URL } from "../models/url.models.js";

const renderHomePage = asyncHandler(async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

const renderSignUp = asyncHandler(async (req, res) => {
  return res.render("signup");
});

const renderLogin = asyncHandler(async (req, res) => {
  return res.render("login");
});

export { renderHomePage, renderSignUp, renderLogin };
