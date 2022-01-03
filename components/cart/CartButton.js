import { motion } from 'framer-motion'
import React from 'react'
import {useRouter} from 'next/router'
import { AppProvider } from '../../context/AppContext'
import { Icon } from '@iconify/react';
function CartButton() {
    //grabbing provider values (one value, one function)
    const {state, dispatch} = React.useContext(AppProvider)
    // grabbing cart from state
    const { cart } = state
    return (
        <motion.div className='cart-button'>
            <Icon icon="bi:cart-check" color="white" width="32" height="32" />
            <span>{cart.length}</span>
            <button onClick={() => dispatch({...state, cart: ['newcartitem']})}></button>
        </motion.div>
    )
}

export default CartButton
