const Product = require("../models/product")

// get all products and filter products
const getAllProducts = async (req, res) => {
    // company ko name haleko xa tara name haleko xaina vane company matra return garxa
    // khali  array return gardaina
    const { company, name, featured, price, sort } = req.query
    const queryObject = {}
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    if (price) {
        queryObject.price = { $regex: price, $options: 'i' }
    }
    if (company) {
        queryObject.company = { $regex: company, $options: 'i' }
    }
    if (featured) {
        queryObject.featured = { $regex: featured, $options: 'i' }
    }
// sort lekhyo vane sort hunxa
    let apiData = Product.find(queryObject)
    if (sort) {
        let sortFix = sort.replace(",", " ")
        apiData = apiData.sort(sortFix)
    }
    // natra default auxa
    const productFromDB = await apiData
    res.status(200).json({ productFromDB })
}

// filter product
const getFilteredProducts = async (req, res) => {
    // ascending order
    const productFromDB = await Product.find(queryObject.sort("name price"))

    res.status(200).json({ productFromDB })
}

module.exports = { getAllProducts, getFilteredProducts } 