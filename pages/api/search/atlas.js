
import dbConnect from "../../../lib/dbConnect"
import { atlasSearch } from "../../../lib/atlasSearch"

export default async (req, res) => {
    await dbConnect() // grab db connection from local cache or create new one
    try {
        let text = JSON.parse(req.body)
        
        let data = await atlasSearch(text.val)
        let uniq = [...new Set(data)];
        res.json({
            status: 'success',
            result: 1,
            listings: [],
            products: uniq
        })
    } catch (e) {
        return res.status(500).json({err: e.message})
    }
}