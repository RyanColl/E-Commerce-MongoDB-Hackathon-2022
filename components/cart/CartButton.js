import { motion } from 'framer-motion'
import React from 'react'
import {useRouter} from 'next/router'
import { AppProvider } from '../../context/AppContext'
function CartButton() {
    const {state, dispatch} = React.useContext(AppProvider)
    const { cart } = state
    return (
        <motion.div className='cart-button'>
            <span class="iconify" data-icon="bi:cart-check" style={{color: 'white', placeSelf: 'center', width: 32, height: 32, gridColumn: '1/2', gridRow: '1/2'}} ></span>
            <span style={{placeSelf: 'center', fontSize: 24, color: 'white', gridColumn: '2/3', gridRow: '1/2'}}>{cart.length}</span>
        </motion.div>
    )
}

export default CartButton
