

import dbConnect from "../../../lib/dbConnect"
import { sortCollection, sortType } from "../../../lib/atlasSearch"
import { sortProducts } from "../../../lib/dbAccess"

const handler = async (req, res) => {
    await dbConnect() // grab db connection from local cache or create new one
    try {
        switch(Object.keys(req.query)[0]) {
            case 'type': sortType(req.query[Object.keys(req.query)[0]], JSON.parse(req.body))
            .then(products => {
                console.log(products)
                res.send({
                    status: 'success',
                    result: products.length,
                    listings: [],
                    data: { products }
                })
            }); break;
            case 'collection': sortCollection(req.query[Object.keys(req.query)[0]], JSON.parse(req.body))
            .then(products => {
                console.log(products)
                res.send({
                    status: 'success',
                    result: products.length,
                    listings: [],
                    data: { products }
                })
            }); break;
            default: sortProducts(JSON.parse(req.body))
            .then(products => {
                res.send({
                    status: 'success',
                    result: products.length,
                    listings: [],
                    data: { products }
                })
            })
        }
    } catch (e) {
        return res.status(500).json({err: e.message})
    }
}
export default handler

