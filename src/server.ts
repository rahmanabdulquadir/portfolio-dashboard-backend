import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import projectRoutes from "./routes/projectRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// app.use("/api", projectRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the portfolio dashboard backend system");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on port      
    ${PORT}`)
    );
  })
  .catch((error) => console.log(error.message));
