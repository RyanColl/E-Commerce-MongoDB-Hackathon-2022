import { motion } from 'framer-motion'
import React from 'react'

function NavBar() {
    return (
        <motion.div className='nav-bar'>
            <motion.div className='nav-left'>
                <motion.div className='nav-item logo'></motion.div>
                <motion.div className='nav-item home'></motion.div>
                <motion.div className='nav-item browse'></motion.div>
            </motion.div>
            <motion.div className='nav-right'>
                <motion.div className='nav-item search'></motion.div>
                <motion.div className='nav-item account'></motion.div>
                <motion.div className='nav-item cart'></motion.div>
            </motion.div>
        </motion.div>
    )
}

export default NavBar
