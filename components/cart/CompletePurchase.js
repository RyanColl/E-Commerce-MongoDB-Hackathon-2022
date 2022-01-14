import React from 'react'
import { motion } from 'framer-motion'
function CompletePurchase({onClick}) {
    return (
        <motion.button whileTap={{scale: 0.9}}
        onClick={onClick} className='complete-purchase-button'>
            Complete Purchase
        </motion.button>
    )
}

export default CompletePurchase
