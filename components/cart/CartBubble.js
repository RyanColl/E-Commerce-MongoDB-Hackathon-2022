import { motion } from 'framer-motion'
import React from 'react'

function CartBubble({number}) {
    return (
        <motion.div animate={{x: 15, y: -12}} className='cart-bubble'>
            <motion.span animate={{x:-1}}>{number}</motion.span>
        </motion.div>
    )
}

export default CartBubble
