import { AnimatePresence, motion } from 'framer-motion'
import React, {useState, useContext} from 'react'
import { Icon } from '@iconify/react';
import { iconSize } from '../navbar/NavBar';
import FoundProduct from './FoundProduct';
import { useRouter } from 'next/router'
import { AppProvider } from '../../context/AppContext'
function SearchBar({ex=0, setOpen, nav=false}) {
    const [value, setValue] = useState('')
    const [products, setProducts] = useState([])
    const submit = (e) => {
        e.preventDefault()
        console.log(value)
    }
    const handleChange = (val) => {
        if(val.length > 2) {
            fetch('/api/search/atlas', {method: 'POST', body: JSON.stringify({val})}).then(res => res.json())
                .then(data => setProducts(data.products))
                .catch(e => console.log(e.message))
        } else {
            setProducts([])
        }
        setValue(val)
    }
    
    const router = useRouter()
    const {state, dispatch} = React.useContext(AppProvider)
    const productPress = (id) => {
        dispatch({...state, loading: true})
        setOpen(false)
        router.push(`/products/${id}`)
    }
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
            {products.length ? 
                <AnimatePresence>
                    <motion.div 
                    initial={{y: 0, x: ex/2}}
                    animate={{y: 50, x: ex/2}}
                    exit={{y: 0, x: ex/2}}
                    className='products-dropdown'>
                        {
                            products.map((product, i) => {
                                return (
                                    <motion.div
                                    onClick={() => productPress(product._id)}
                                    animate={{x: ex/2}}
                                    key={`product-${product._id}`}
                                    className='dropdown-product'>
                                        <FoundProduct nav={nav} product={product} />
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                </AnimatePresence>
            :
                <></>
            }
        </>
    )
}

export default SearchBar
