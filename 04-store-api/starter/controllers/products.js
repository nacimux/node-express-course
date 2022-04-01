const Product = require('../models/product');



const getAllProducts =  async (req, res) => {

    const {featured, company, name} = req.query;
    // check if featured is present in query
    let filter = {};
    
    if (name) {
        filter.name = { $regex: search, $options: 'i' };
    }
    
    if(featured){
        filter.featured = featured;
    }
    if(company){
        filter.company = company;
    }
    const products = await Product.find(filter);
    res.status(200).json({status : 'success', products, results : products.length});
    };

const getProduct = async (req, res) => {
    const productId = req.params.productId;
    product = await Product.findById(productId);
    res.status(200).json({status : 'success', product});

    };


    module.exports = {
        getAllProducts,
        getProduct
    };