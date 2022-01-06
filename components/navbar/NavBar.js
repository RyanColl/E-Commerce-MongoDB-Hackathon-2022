import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import BrowseDropdown from '../browseDropdown/BrowseDropdown'
import {useRouter} from 'next/router'

// import context to grab cart state for purpose of seeing cart volume hover over cart icon
import { AppProvider } from '../../context/AppContext'
import CartBubble from '../cart/CartBubble';
function NavBar() {
    // app context = global state
    const {state, dispatch} = React.useContext(AppProvider)
    const {cart} = state;
    // window object in nextjs
    const windowObject = typeof window != 'undefined' && window;

    // usestate for scroll
    const [scrollY, setScrollY] = useState(0);

    // setting state for hidden and visible navbar
    const [hidden, setHidden] = useState(false)

    // function for useeffect, for adding and removing purposes
    const setScroll = () => {
        let offset = windowObject.pageYOffset;
        offset > scrollY && setHidden(true) // sets hiding when scrolling down
        offset < scrollY && setHidden(false) //sets visible when scrolling up
        setScrollY(offset)
    };

    // useEffect for capturing scroll event
    useEffect(() => {
        window.addEventListener("scroll", setScroll);
        return () => window.removeEventListener("scroll", setScroll);
    })


    // state for browse dropdown
    const [isHover, setHover] = useState(false)

    // router access for pushing route instead of adding a tags
    const router = useRouter()
    const home = () => router.push('/')
    return (
        <AnimatePresence>
            {!hidden &&
            <motion.div 
            key='nav-bar'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='nav-bar'>
                <motion.div className='nav-left'>
                    <motion.div onClick={home} className='nav-item logo'>
                        <motion.img src='./logo.png' animate={{scale: 0.6}} />
                    </motion.div>
                    <motion.div onClick={home} className='nav-item home'>
                        <span>Home</span>
                    </motion.div>
                    <motion.div 
                    onHoverStart={() => {setHover(true)}}
                    onHoverEnd={() => {setHover(false)}}
                    className='nav-item browse'>
                        <span>Browse
                            <AnimatePresence>
                            {isHover && 
                                <BrowseDropdown
                                close={()=>setHover(false)} 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                />
                            }
                            </AnimatePresence>
                        </span>
                    </motion.div>
                </motion.div>
                <motion.div className='nav-right'>
                    <motion.div className='nav-item search'>
                        <Icon style={iconSize} icon="akar-icons:search" />
                    </motion.div>
                    <motion.div className='nav-item account'>
                        <Icon style={iconSize} icon="bi:person" />
                    </motion.div>
                    <motion.div onClick={() => dispatch({...state, cart: [...cart, ['']]})} className='nav-item cart'>
                        <Icon style={iconSize} icon="clarity:shopping-cart-line" />
                        <AnimatePresence>
                        {cart.length &&
                            <CartBubble number={cart.length} />
                        }
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    )
}

export default NavBar
const iconSize = {width: 24, height: 24}
