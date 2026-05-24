import express from "express";
import { searchLeadController } from "../controllers/leadController.js";

const router = express.Router();

router.get("/search", searchLeadController);

export default router;