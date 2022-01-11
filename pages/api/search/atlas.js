
import dbConnect from "../../../lib/dbConnect"
import { atlasSearch } from "../../../lib/atlasSearch"

export default async (req, res) => {
    await dbConnect() // grab db connection from local cache or create new one
    try {
        console.log(req.query)
        console.log(atlasSearch('w'))
        res.json({
            status: 'success',
            result: 1,
            listings: [],
        })
    } catch (e) {
        return res.status(500).json({err: e.message})
    }
}