import { motion } from 'framer-motion';
import React from 'react'
import { AppProvider } from '../../context/AppContext'
import garbageBin from '../../assets/garbage-bin.svg';
import Dropdown from '../dropdown/Dropdown';
function CartContents() {
    const {state, dispatch} = React.useContext(AppProvider)
    const {cart} = state;
    const windowObject = typeof window != 'undefined' && window
    return (
        <div className='open-cart-layout'>
            <div className='cart-contents'>
                {cart.map(({product, quantity, selectedSize}, i) => {
                    const {brand, category, description, 
                    image, price, rating, title, _id, shoeSizes} = product
                    console.log(quantity,selectedSize)
                    return(
                        <motion.div 
                        className='cart-item'
                        key={`cart-item-${i}`}>
                            <div className='left'>
                                <motion.div 
                                animate={windowObject.innerWidth < 500 && {scale: 0, width: 0, height: 0}} 
                                className='image'>
                                    <motion.img src={image[0]} />
                                </motion.div>
                                <div className='info'>
                                    <div>
                                        <p className='uppercased'>{title}</p>
                                        <p>Brand: {brand}</p>
                                    </div>
                                    <motion.div animate={{x:-4}} className='cart-options'>
                                        <span>QTY:</span>
                                        <Dropdown number={quantity} />
                                        <span>SIZE: </span>
                                        <Dropdown number={selectedSize} />
                                    </motion.div>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='top'>
                                    <span>${price/100}</span>
                                </div>
                                <div className='bottom'>
                                    <div>
                                        <motion.img whileTap={{scale: 0.9}} src={garbageBin.src} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
            <div className='cart-bottom'>
                <div className='subtotal'>

                </div>
                <div className='cart-buttons'>

                </div>
            </div>
        </div>
    )
}

export default CartContents
