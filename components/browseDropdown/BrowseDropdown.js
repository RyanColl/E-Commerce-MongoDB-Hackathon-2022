import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { AppProvider } from '../../context/AppContext'
import { useRouter } from 'next/router'
function BrowseDropdown({exit, initial, animate, close}) {
    // added dropdownr ref, but then realized I do not need it. Code is neat tho
    const dropdownRef = React.useRef(null)
    const clickEvent = () => {
        if(dropdownRef != null) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
    useEffect(() => {
        window.addEventListener("click", clickEvent)
        return () => window.removeEventListener('click', clickEvent) 
    })

    // adding a click for loading effect
    const router = useRouter()
    const {state, dispatch} = React.useContext(AppProvider)
    const navigate = (query = '') => {
        dispatch({...state, loading: true})
        router.push(`/products${`?${query}`}`)   
    }
    return (
        <motion.div 
        ref={dropdownRef}
        className='browse-dropdown'
        exit={exit} initial={initial} animate={{...animate, x: -15}}>
            <div className='browse-dropdown-content'>
                <div className='view-by view-all-products'>
                    <span onClick={close}><a onClick={() => {navigate('')}}>View All Products</a></span>
                </div>
                <div className='view-by view-by-type'>
                    <span>VIEW BY TYPE</span>
                    <span onClick={close}><a onClick={() => {navigate('type=mens')}}>Men's Footwear</a></span>
                    <span onClick={close}><a onClick={() => {navigate('type=womens')}}>Women's Footwear</a></span>
                </div>
                <div className='view-by view-by-collection'>
                    <span>VIEW BY COLLECTION</span>
                    <span onClick={close}><a onClick={() => {navigate('collection=sport')}}>Sport</a></span>
                    <span onClick={close}><a onClick={() => {navigate('collection=luxury')}}>Luxury</a></span>
                    <span onClick={close}><a onClick={() => {navigate('collection=collectors')}}>Collectors</a></span>
                </div>
            </div>
        </motion.div>
    )
}

export default BrowseDropdown
