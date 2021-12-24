import { motion } from 'framer-motion'
import React from 'react'
import {useRouter} from 'next/router'
import { AppProvider } from '../../context/AppContext'
import { Icon } from '@iconify/react';
function CartButton() {
    const {state, dispatch} = React.useContext(AppProvider)
    const { cart } = state
    return (
        <motion.div className='cart-button'>
            <Icon icon="bi:cart-check" color="white" width="32" height="32" />
            <span>{cart.length}</span>
        </motion.div>
    )
}

export default CartButton
