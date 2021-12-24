import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
function SearchBar({onClick}) {
    const formSubmit = () => {
        searchData(searchInput)
    }
    const inputGrab = (e) => {
        e.preventDefault();
        searchData(e.target[0].value)
    }
    const [searchInput, setSearchInput] = useState('')
    return (
        <>
            <motion.form 
            onSubmit={inputGrab}
            key="search_bar"
            initial={{x: 250, opacity: 0}} 
            animate={{x: 0, opacity: 1}} 
            exit={{x: 250, opacity: 0}} 
            transition={{type: 'ease-in', duration: 0.4}}
            className='search-bar nav-item nav-start nav-flex'
            >
                <Icon onClick={formSubmit} icon="bx:bx-search-alt-2" width="32" height="32" />
                <motion.input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Search Store...' />
            </motion.form>
            <motion.div 
            initial={{x: 250, opacity: 0}} 
            animate={{x: 0, opacity: 1}} 
            exit={{x: 250, opacity: 0}} 
            transition={{type: 'ease-in', duration: 0.4, delay: 0.2}}
            onClick={onClick} 
            className='nav-item exit-button'>
                <Icon icon="akar-icons:circle-x" width="32" height="32" />
            </motion.div>
        </>
    )
}

export default SearchBar


const searchData = (input) => {
    // data coming in from search
    console.log(input)
}