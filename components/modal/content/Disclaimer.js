import React from 'react'
import { useEffect } from 'react/cjs/react.development'

export default function Disclaimer() {
    useEffect(() => {
        document.getElementById('modal').style.height = '400px'
    })
    return (
        <div>
            <p className='bolded'>Disclaimer:</p>
            <p>This e-commerce site was built for the 2022 hackathon hosted by MongoDB. Not all pages were built out to completion as we are focusing on using MongoDB's database.</p>
            <br />
            <p>Any products or product images, descriptions, titles, brand names, or other recognitive information not owned by us are purely for educational purposes only.</p>
            <br />
            <p>All code is open source and can be found at: <a>https://github.com/RyanColl/E-Commerce-MongoDB-Hackathon-2022</a></p>
        </div>
    )
}
