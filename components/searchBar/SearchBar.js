import { motion } from 'framer-motion'
import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import { iconSize } from '../navbar/NavBar';
function SearchBar() {
    const [value, setValue] = useState('')
    const submit = (e) => {
        e.preventDefault()
        console.log(value)
    }
    return (
        <form className='search-form' onSubmit={submit}>
            <button type='submit'><Icon style={{...iconSize, color: 'black'}} icon="akar-icons:search" /></button>
            <motion.input 
            type='text' 
            value={value} 
            onChange={({target: {value}}) => setValue(value)} 
            className='search-bar' 
            placeholder='Search...' 
            />
        </form>
    )
}

export default SearchBar
