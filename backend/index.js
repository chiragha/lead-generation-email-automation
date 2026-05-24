import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

import emailRoutes from "./routes/emailRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import campaignRoutes from "./routes/campaignRoutes.js";
import exportRoutes from "./routes/exportRoutes.js";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: {
    success: false,
    message:
      "Too many requests. Try again later.",
  },
});

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(limiter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/email", emailRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/campaign", campaignRoutes);
app.use("/api/leads", exportRoutes);

const PORT =
  process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});