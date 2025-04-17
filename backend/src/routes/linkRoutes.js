import { Router } from "express";
import { createLinks } from "../controllers/linkController.js";

const linkRouter = Router();

linkRouter.post("/", createLinks);

export { linkRouter };
