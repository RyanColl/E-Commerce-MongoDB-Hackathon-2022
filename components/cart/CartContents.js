import { motion } from 'framer-motion';
import React from 'react'
import { AppProvider } from '../../context/AppContext'
import garbageBin from '../../assets/garbage-bin.svg';
import Dropdown from '../dropdown/Dropdown';
import ContinueShopping from './ContinueShopping';
import ProceedToCheckout from './ProceedToCheckout';
import { useRouter } from 'next/router';
const qtys = [1,2,3,4,5,6,7,8]
const sizes = [
    5.5, 6, 6.5, 7, 7.5, 
    8, 8.5, 9, 9.5, 10, 
    10.5, 11, 11.5, 12,
    12.5, 13, 13.5, 14, 14.5
]
function CartContents({closeCart}) {
    const router = useRouter()
    const {state, dispatch} = React.useContext(AppProvider)
    const windowObject = typeof window != 'undefined' && window
    const deleteItem = (id) => {
        const newCart = state.cart.filter((cartObj, i) => {
            return !(cartObj.product._id === id)
        })
        // console.log(id, newCart.length)
        dispatch({...state, cart: newCart})
    }
    const proceed = () => {
        closeCart()
        router.push('/checkout')
    }
    return (
        <div className='open-cart-layout'>
            <div className='cart-contents'>
                {state.cart.map(({product, quantity, selectedSize}, i) => {
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
                                        <Dropdown type={'quantity'} iD={_id} number={quantity} numbers={qtys} />
                                        <span>SIZE: </span>
                                        <Dropdown type={'size'} iD={_id} number={selectedSize} numbers={shoeSizes} />
                                    </motion.div>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='top'>
                                    <span>${((price/100)*quantity).toFixed(2)}</span>
                                </div>
                                <div className='bottom'>
                                    <div onClick={() => deleteItem(product._id)}>
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
                    <h4>SUBTOTAL</h4>
                    <h4>${(state.cart.reduce((acc, cartObj) => (acc+cartObj.product.price), 0))/100}</h4>
                </div>
                <div className='cart-buttons'>
                    <ContinueShopping onClick={closeCart} />
                    <ProceedToCheckout onClick={proceed} />
                </div>
            </div>
        </div>
    )
}

export default CartContents
