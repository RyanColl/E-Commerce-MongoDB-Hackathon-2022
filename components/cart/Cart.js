import { motion } from 'framer-motion'
import React from 'react'
import { Icon } from '@iconify/react'
import { AppProvider } from '../../context/AppContext'
import ContinueShopping from './ContinueShopping'

function Cart({closeCart}) {
    // nextjs checks our code on the server, and there is no window object on the server,
    // so we tell our code to only grab the window object if the window exists
    const windowObject = typeof window != 'undefined' && window

    const {state, dispatch} = React.useContext(AppProvider) // grabbing global state from AppProvider
    const {cart} = state // grabbing cart from state

    // Need to check for width to give our cart different dimensions => 
    const width = windowObject.innerWidth

    return (
        <motion.div 
        initial={'initial'}
        exit={'exit'}
        animate={'animate'}
        variants={variants}
        transition={{type: 'tween'}}
        style={width > 600 ? {width: 500} : {width: '100vw'}}
        className='open-cart'>
            <div className='open-cart-header'>
                <span>SHOPPING CART</span>
                <motion.button 
                onClick={closeCart}
                whileTap={{scale: 0.9}}
                className='close-cart-button'>CLOSE X</motion.button>
            </div>
            <div className='open-cart-bottom'>
            {
                !cart.length
                ?
                <></>
                :
                <div className='empty-cart'>
                    <span>Your Cart is currently empty.</span>
                    <ContinueShopping onClick={closeCart} />
                </div>
            }
            </div>
        </motion.div>
    )
}

export default Cart

const variants = {
    initial: {
        x: '100vw'
    },
    animate: {
        x: 0
    },
    exit: {
        x: '100vw'
    }
}
