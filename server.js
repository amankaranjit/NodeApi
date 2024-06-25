require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./database/databaseConnection");

const PORT = process.env.PORT || 8080;

// Import the product routes
const product_routes = require("./routes/products");

// Define a simple route for the root URL
app.get("/", (req, res) => {
    res.send("Hi, I am home page");
});

// Middleware to use the product routes
app.use("/api/products", product_routes);

const start = async () => {
    try {
        console.log("Starting the server...");
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    } catch (error) {
        console.log("Error occurred while starting the server:", error);
    }
};

start();
