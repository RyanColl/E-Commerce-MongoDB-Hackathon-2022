import { motion } from 'framer-motion'
import React, {useState} from 'react'

function SearchBar() {
    const [value, setValue] = useState('')
    const submit = (e) => {

    }
    return (
        <form onSubmit={submit}>
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
