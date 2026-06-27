import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 3000;

// Debug
console.log("Cloud Name :", process.env.CLOUDINARY_NAME);
console.log("API Key :", process.env.CLOUDINARY_API_KEY);
console.log("API Secret :", process.env.CLOUDINARY_API_SECRET);

// Connect Database
connectDB();

// Connect Cloudinary
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});