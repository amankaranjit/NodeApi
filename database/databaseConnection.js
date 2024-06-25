const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables
const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URL; // Get URI from environment variables
        if (!uri) {
            throw new Error("MongoDB URI is not defined in environment variables");
        }
        await mongoose.connect(uri);
        console.log('MongoDB connection established');
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;

