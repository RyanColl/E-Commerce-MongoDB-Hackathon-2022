import { motion } from 'framer-motion'
import React from 'react'

function FoundProduct({product, nav}) {
    return (
        <>
            <div className='dropdown-product-image'>
                <motion.img src={product.image[0]} />
            </div>
            <motion.div animate={nav ? {y:3} : {y:7, x: 20}} className='middle'>
                <span>{product.title}</span>
                <span>Collection: {product.collectionName}</span>
                <span>Price: ${product.price/100}</span>
            </motion.div>
        </>
    )
}

export default FoundProduct
