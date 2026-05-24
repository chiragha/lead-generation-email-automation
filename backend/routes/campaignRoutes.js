import express from "express";
import { startCampaignController } from "../controllers/campaignController.js";

const router = express.Router();

router.post(
  "/start",
  startCampaignController
);

export default router;