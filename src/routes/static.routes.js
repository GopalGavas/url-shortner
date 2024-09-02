import { Router } from "express";
import { renderHomePage } from "../controllers/template.controller.js";

const router = Router();

router.route("/").get(renderHomePage);

export default router;
