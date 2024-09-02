import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { URL } from "../models/url.models.js";
import { nanoid } from "nanoid";

const generateShortUrl = asyncHandler(async (req, res) => {
  const { originalUrl } = req.body;

  const shortId = nanoid(8);

  if (!originalUrl) {
    throw new ApiError(400, "Original Url not found");
  }

  await URL.create({
    shortId,
    redirectURL: originalUrl,
    visitHistory: [],
    createdBy: req.user?._id,
  });

  return res.render("home", {
    id: shortId,
  });
});

const redirectURL = asyncHandler(async (req, res) => {
  const { shortId } = req.params;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    },
    {
      new: true,
    }
  );

  res.redirect(entry.redirectURL);

  return res.status(200);
});

const getAnalytics = asyncHandler(async (req, res) => {
  const { shortId } = req.params;

  const url = await URL.findOne({ shortId });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        totalClicks: url.visitHistory.length,
        anaylytics: url.visitHistory,
      },
      "Analytics fetched successfully"
    )
  );
});

export { generateShortUrl, redirectURL, getAnalytics };
