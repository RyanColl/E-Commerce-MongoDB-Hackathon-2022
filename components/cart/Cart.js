import { motion } from 'framer-motion'
import React from 'react'
import { Icon } from '@iconify/react'
import { AppProvider } from '../../context/AppContext'

function Cart() {
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
        style={width > 600 ? {width: 360} : {width: '100vw'}}
        className='open-cart'>
            {
                // cart.length
                // ?

                // :

            }
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
