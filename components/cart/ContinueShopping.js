import React from 'react'
import { motion } from 'framer-motion'
function ContinueShopping({onClick}) {
    return (
        <motion.button whileTap={{scale: 0.9}}
        onClick={onClick} className='continue-shopping-button'>
            Continue Shopping
        </motion.button>
    )
}

export default ContinueShopping
