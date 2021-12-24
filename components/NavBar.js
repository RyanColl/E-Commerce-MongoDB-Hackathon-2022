import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import CartButton from './cart/CartButton'
import { Icon } from '@iconify/react';
import SearchBar from './SearchBar';
function NavBar() {
    // search bar input logic
    const [isSearching, setSearching] = useState(false)
    
    // categories dropdown
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="navbar">
            <motion.div className='nav-item nav-start'>
            <motion.img 
            onClick={() => router.push('/')} 
            whileHover={{scale: 1.1, cursor: 'pointer'}}
            src={'./ecommerce-small.png'} />
            </motion.div>
            <motion.div className='nav-item nav-start nav-link'>
                <motion.span onClick={() => router.push('/')}>Home</motion.span>
            </motion.div>
            <motion.div className='nav-item nav-start nav-link'>
                
                <motion.span className='categories-dropdown'>Categories</motion.span>
                <AnimatePresence>
                {}
                </AnimatePresence>
            </motion.div>
            <AnimatePresence>
                {!isSearching ? 
                <motion.div onClick={() => {setSearching(true)}}
                initial={{x: 250, opacity: 0}} 
                animate={{x: 0, opacity: 1}} 
                exit={{x: 250, opacity: 0}} 
                transition={{type: 'ease-in', duration: 0.4}}  
                className='nav-item nav-start nav-link nav-flex'>
                    <Icon icon="bx:bx-search-alt-2" width="32" height="32" />
                    <motion.span className='search-button'>Search</motion.span>
                </motion.div>
                : 
                <SearchBar onClick={() => {setSearching(false)}} /> 
                }
            </AnimatePresence>
            <motion.div className='nav-item nav-end'>
                <CartButton />
            </motion.div>
        </div>
    )
}

export default NavBar
