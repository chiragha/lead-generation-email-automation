import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import emailRoutes from "./routes/emailRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import campaignRoutes from "./routes/campaignRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/email", emailRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/campaign", campaignRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
