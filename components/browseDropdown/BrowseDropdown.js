import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react/cjs/react.development'

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
    return (
        <motion.div 
        ref={dropdownRef}
        className='browse-dropdown'
        exit={exit} initial={initial} animate={{...animate, x: -15}}>
            <div className='browse-dropdown-content'>
                <div className='view-by view-all-products'>
                    <span onClick={close}><Link href={'/products'}>View All Products</Link></span>
                </div>
                <div className='view-by view-by-type'>
                    <span>VIEW BY TYPE</span>
                    <span onClick={close}><Link href={'/products?type=mens'}>Men's Footwear</Link></span>
                    <span onClick={close}><Link href={'/products?type=womens'}>Women's Footwear</Link></span>
                </div>
                <div className='view-by view-by-collection'>
                    <span>VIEW BY COLLECTION</span>
                    <span onClick={close}><Link href={'/products?category=sport'}>Sport</Link></span>
                    <span onClick={close}><Link href={'/products?category=luxury'}>Luxury</Link></span>
                    <span onClick={close}><Link href={'/products?category=collectors'}>Collectors</Link></span>
                </div>
            </div>
        </motion.div>
    )
}

export default BrowseDropdown
