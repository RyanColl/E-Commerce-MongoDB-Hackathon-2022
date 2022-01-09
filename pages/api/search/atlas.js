
import dbConnect from "../../../lib/dbConnect"
import { atlasSearch } from "../../../lib/atlasSearch"

export default async (req, res) => {
    await dbConnect()
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