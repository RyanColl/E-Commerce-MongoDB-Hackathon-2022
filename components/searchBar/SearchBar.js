import { AnimatePresence, motion } from 'framer-motion'
import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import { iconSize } from '../navbar/NavBar';
function SearchBar() {
    const [value, setValue] = useState('')
    const [products, setProducts] = useState([])
    const submit = (e) => {
        e.preventDefault()
        console.log(value)
    }
    const handleChange = (val) => {
        if(val.length) {
            fetch('/api/search/atlas', {method: 'POST', body: JSON.stringify({val})}).then(res => res.json())
                .then(data => setProducts(data.products))
                .catch(e => console.log(e.message))
        }
        setValue(val)
    }
    console.log(products)
    return (
        <>
            <form className='search-form' onSubmit={submit}>
                <button type='submit'><Icon style={{...iconSize, color: 'black'}} icon="akar-icons:search" /></button>
                <motion.input 
                type='text' 
                value={value} 
                onChange={({target: {value}}) => handleChange(value)} 
                className='search-bar' 
                placeholder='Search...' 
                />
            </form>
            {products.length && 
                <AnimatePresence>
                    <motion.div className='products-dropdown'>
                        {
                            products.map((product, i) => {
                                return (
                                    <motion.div></motion.div>
                                )
                            })
                        }
                    </motion.div>
                </AnimatePresence>
                
            }
        </>
    )
}

export default SearchBar
