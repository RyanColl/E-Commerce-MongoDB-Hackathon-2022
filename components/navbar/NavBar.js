import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';

function NavBar() {
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
    console.log(hidden)
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
                    <motion.div className='nav-item logo'>
                        <motion.img src='./logo.png' animate={{scale: 0.6}} />
                    </motion.div>
                    <motion.div className='nav-item home'>
                        <span>Home</span>
                    </motion.div>
                    <motion.div className='nav-item browse'>
                        <span>Browse</span>
                    </motion.div>
                </motion.div>
                <motion.div className='nav-right'>
                    <motion.div className='nav-item search'>
                        <Icon icon="akar-icons:search" />
                    </motion.div>
                    <motion.div className='nav-item account'>
                        <Icon icon="bi:person" />
                    </motion.div>
                    <motion.div className='nav-item cart'>
                        <Icon icon="clarity:shopping-cart-line" />
                    </motion.div>
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    )
}

export default NavBar
