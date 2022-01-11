import Product from "../models/Product";

export const getProductsByPage = async (page = 1) => {
    const res = await Product.find({}).skip((page-1)*20).limit(20)
    const products = res.map((doc) => {
        const product = doc.toObject()
        product._id = product._id.toString()
        return product
    })
    console.log('running get Products...')
    return products;
}

export const sortProducts = async (sort) => {
    console.log('sorting with no filter ...', sort)
    if(sort.shoeSizes) return await sortByShoeSize(type, sort)
    const res = await Product.collection.aggregate(
        [
            { $sort : sort } // takes in 1 for high to low and -1 for low to high
        ]
    ).limit(20).toArray()
    return res;
}

export const getProduct = async (id) => {   
    const res = await Product.findById(id)
    return res;
}

export const sortByShoeSize = async (type, sort) => {
    const res = await Product.find({...type, ...sort}).limit(20)
    return res;
}