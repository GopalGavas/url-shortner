import { Router } from "express";
import {
  adminAccess,
  renderHomePage,
  renderLogin,
  renderSignUp,
} from "../controllers/template.controller.js";
import { restrictToRole } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/admin/urls").get(restrictToRole(["ADMIN"]), adminAccess);
router.route("/").get(restrictToRole(["NORMAL", "ADMIN"]), renderHomePage);
router.route("/register").get(renderSignUp);
router.route("/login").get(renderLogin);

export default router;
