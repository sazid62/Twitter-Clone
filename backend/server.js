import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());



app.use("/api/auth", authRoutes);
app.use("/", (req, res) => {
    res.json({ message: "Hello World" });
});


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB Successfully : ");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
};
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
