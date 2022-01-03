import { motion } from 'framer-motion'
import React from 'react'
import { Icon } from '@iconify/react';

function NavBar() {
    return (
        <motion.div className='nav-bar'>
            <motion.div className='nav-left'>
                <motion.div className='nav-item logo'>
                    <motion.img src='./logo.png' animate={{scale: 0.6}} />
                </motion.div>
                <motion.div className='nav-item home'>
                    <span>Home</span>
                </motion.div>
                <motion.div className='nav-item browse'>
                    <span>Browse</span>
                </motion.div>
            </motion.div>
            <motion.div className='nav-right'>
                <motion.div className='nav-item search'>
                    <Icon icon="akar-icons:search" />
                </motion.div>
                <motion.div className='nav-item account'>
                    <Icon icon="bi:person" />
                </motion.div>
                <motion.div className='nav-item cart'>
                    <Icon icon="clarity:shopping-cart-line" />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
//
export default NavBar
