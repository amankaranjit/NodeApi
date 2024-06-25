const mongoose = require("mongoose")
// create a schema for the database table 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "price is required"],
    }
    , featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: props => `${props.value} is not supported`
        }
    }

})


// define the table name
module.exports = mongoose.model('Product', productSchema)