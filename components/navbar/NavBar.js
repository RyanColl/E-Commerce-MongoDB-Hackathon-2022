import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import BrowseDropdown from '../browseDropdown/BrowseDropdown'
import {useRouter} from 'next/router'
import logo from '../../assets/logo.svg'
// import context to grab cart state for purpose of seeing cart volume hover over cart icon
import { AppProvider } from '../../context/AppContext'
import CartBubble from '../cart/CartBubble';
import { Spin as Hamburger } from 'hamburger-react'
import Menu from '../menu/Menu';
import SearchBar from '../searchBar/SearchBar';

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
    console.log()

    // Need to check for width and render different navbar => 
    const width = windowObject.innerWidth

    // Need to set a state variable for the hamburger menu => 
    const [isOpen, setOpen] = useState(false)

    // Open Search Bar up and close it too
    const [isSearchOpen, setSearchOpen] = useState(false)
    const searchOpen = () => setSearchOpen(true)
    const searchClose = () => setSearchOpen(false)
    const parentVariants = {
        initial: {
            transition: {
                when: "afterChildren"
            }
        },
        animate: {
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    }
    const childVariants = {
        initial: { opacity: 0},
        animate: { opacity: 1},
        exit: { opacity: 0}
    }
    if(width > 600) {
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
                            <motion.img src={logo.src} />
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
                        <motion.div 
                        variants={parentVariants}
                        animate="animate" initial="initial"
                        className='nav-item search'>
                            <AnimatePresence>
                                {isSearchOpen 
                                ?
                                <motion.div
                                className='search-bar-div'
                                variants={childVariants}
                                animate={{x: 50, opacity: 1}}
                                initial="initial"
                                exit="exit"
                                >
                                    <SearchBar />
                                    <motion.span 
                                    onClick={searchClose}
                                    className='close-search'
                                    >
                                        <Icon style={{width: 20, height: 20}} icon="ph:x-bold" color='black' />
                                    </motion.span>
                                </motion.div>
                                :
                                <motion.span
                                variants={childVariants}
                                animate="animate"
                                initial="initial"
                                exit="exit"
                                onClick={searchOpen}
                                >
                                    <Icon style={iconSize} icon="akar-icons:search" />
                                </motion.span>
                                }
                            </AnimatePresence>
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
    else {
        return (
        <>
            <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
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
                            <motion.img src={logo.src} />
                        </motion.div>
                    </motion.div>
                    <motion.div className='nav-right'>
                        <motion.div onClick={() => dispatch({...state, cart: [...cart, ['']]})} className='nav-item cart'>
                            <Icon style={iconSize} icon="clarity:shopping-cart-line" />
                            <AnimatePresence>
                            {cart.length &&
                                <CartBubble number={cart.length} />
                            }
                            </AnimatePresence>
                        </motion.div>
                        <motion.div className='nav-item hamburger'>
                            <Hamburger color="white" direction="right" size={20} toggled={isOpen} toggle={setOpen} />
                        </motion.div>
                    </motion.div>
                </motion.div>
                }
            </AnimatePresence>
        </>
        )
    }
    
}

export default NavBar
const iconSize = {width: 24, height: 24}
