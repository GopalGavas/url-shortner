import { Router } from "express";
import {
  renderHomePage,
  renderLogin,
  renderSignUp,
} from "../controllers/template.controller.js";

const router = Router();

router.route("/").get(renderHomePage);
router.route("/register").get(renderSignUp);
router.route("/login").get(renderLogin);

export default router;
