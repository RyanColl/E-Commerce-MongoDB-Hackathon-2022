import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import CartButton from './cart/CartButton'
import { Icon } from '@iconify/react';
import SearchBar from './SearchBar';
import { useRouter } from 'next/router';

function NavBar() { 
    const router = useRouter()
    // search bar input logic
    const [isSearching, setSearching] = useState(false)
    const [categories, setCatorgies] = useState(['chicken', 'sausage', 'shaigirl', 'jaybird'])
    // categories dropdown
    const [isOpen, setOpen] = useState(false)
    const [isCategoryHovered, setCategoryHovered] = useState(false)
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
            <motion.div onHoverStart={() => {setOpen(true)}} onHoverEnd={() => {setOpen(false)}}
            className='nav-item nav-start nav-link'>
                
                <motion.span className='categories-dropdown'>Categories

                <motion.div variants={containerV} animate="visible" initial="hidden" className='categories'>
                    {categories.length > 1 && categories.filter((value, index, self) => self.indexOf(value) === index)
                        .map((category, i) => {
                        return(
                            <AnimatePresence key={`category-${i}`}>
                                {isOpen &&
                                    <motion.div 
                                    onHoverStart={() => {setCategoryHovered(true)}} 
                                    onHoverEnd={() => {setCategoryHovered(false)}}
                                    animate="visible"
                                    initial="hidden"
                                    exit="exit"
                                    variants={childV}
                                    transition={{delay: 0.1*i}}
                                    className='category'
                                    onClick={() => {router.push({pathname: 'categories', query: {"category": category}})}}
                                    >
                                        {isCategoryHovered && <motion.span className='category-dot'><Icon icon="carbon:dot-mark" width="24" height="24" /></motion.span>}
                                        <motion.span>{category}</motion.span>
                                    </motion.div>
                                }
                            </AnimatePresence>
                        )
                    })}
                </motion.div>
                </motion.span>
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

const containerV = {
    hidden: {
        display: 'none',
        visibility: 'hidden',
        opacity: 0,
        scale: 0,
        width: 0,
        transition: {
            when: "afterChildren"
        }
    },
    visible: {
        display: 'flex',
        visibility: 'visible',
        opacity: 1,
        scale: 1,
        width: 160,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    }
}
const childV = {
    hidden: {y: -100, opacity: 0},
    visible: {y: 0, opacity: 1},
    exit: {translateX: -300, opacity: 0}
}