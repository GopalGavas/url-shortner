import { Router } from "express";
import {
  generateShortUrl,
  getAnalytics,
  redirectURL,
} from "../controllers/url.controller.js";

const router = Router();

router.route("/").post(generateShortUrl);
router.route("/:shortId").get(redirectURL);
router.route("/analytics/:shortId").get(getAnalytics);

export default router;
