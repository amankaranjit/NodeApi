require("dotenv").config()
const connectDB = require("./database/databaseConnection")
const Product = require("./models/product")
const ProductJson = require('./products.json')


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        // purano data delete garera naya data halxa
        await Product.deleteMany()
        await Product.create(ProductJson)
        console.log("Successfully created")
    }
    catch (error) {
        console.log(error)

    }
}
start()

// to run this node productDB.js