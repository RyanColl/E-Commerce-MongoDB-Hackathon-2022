import Product from "../models/Product";

export const getProducts = async (page = 1, limit = 20) => {
    const res = await Product.find({}).skip(20*(page-1)).limit(limit)
    const products = res.map((doc) => {
        const product = doc.toObject()
        product._id = product._id.toString()
        return product
    })
    console.log('running get Products...')
    return products;
}

export const getProduct = async (id) => {   
    const res = await Product.findById(id)
    return res;
}