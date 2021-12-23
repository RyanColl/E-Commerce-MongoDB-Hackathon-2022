import React, { useContext } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CartButton from './cart/CartButton'

function NavBar() {
    return (
        <div className="navbar">
            <motion.div className='nav-item'>
                <CartButton />
            </motion.div>
        </div>
    )
}

export default NavBar
