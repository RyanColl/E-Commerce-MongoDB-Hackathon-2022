import { motion } from 'framer-motion'
import React from 'react'
import { Icon } from '@iconify/react';

function Menu() {
    return (
        <motion.div 
        initial={'initial'}
        exit={'exit'}
        animate={'animate'}
        variants={variants}
        transition={{type: 'tween'}}
        className='menu'>
            <motion.div className='menu-item'>
                <motion.span>ABOUT</motion.span>
            </motion.div>
            <motion.div className='menu-item'>
                <motion.span>BROWSE</motion.span><Icon width="20" height="20" color='white' icon="ep:arrow-down-bold" />
            </motion.div>
            <motion.div className='menu-item'>
                <motion.span>SEARCH</motion.span>
            </motion.div>
        </motion.div>
    )
}

export default Menu
const variants = {
    initial: {
        x: '100vw'
    },
    animate: {
        x: 0
    },
    exit: {
        x: '100vw'
    }
}