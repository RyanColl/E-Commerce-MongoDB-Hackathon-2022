import React from 'react'
import { motion } from 'framer-motion'
function ProceedToCheckout({onClick}) {
    return (
        <motion.button whileTap={{scale: 0.9}}
        onClick={onClick} className='proceed-to-checkout-button'>
            Proceed To Checkout
        </motion.button>
    )
}

export default ProceedToCheckout
