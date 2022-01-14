import { AnimatePresence, motion } from 'framer-motion'
import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import Modal from '../modal/Modal';
import { AppProvider, initialModalState } from '../../context/AppContext';
import AccordianDropdown from '../accordian/AccordianDropdown';
import { useRouter } from 'next/router';
import SearchBar from '../searchBar/SearchBar';
function Menu({setOpen}) {
    const {state, dispatch} = React.useContext(AppProvider)
    const aboutPress = () => setTimeout(() => dispatch({...state, modal: 'about'}), 10)
    const router = useRouter()
    const routing = (text) => {
        console.log(text)
        if(text === 'View All') {setOpen(false); router.push('/products'); return}
        if(text === 'View By Gender') {setOpen(false); router.push('/products?type=mens'); return}
        if(text === 'View By Collection') {setOpen(false); router.push('/products?collection=collectors'); return}
    }
    // console.log(state.modal)
    const [isSearching, setSearching] = useState(false)
    const openSearch = () => setSearching(true)
    const closeSearch = () => {
        console.log('close?', isSearching)
        setSearching(false)
    }
    return (
        <>
            <motion.div 
            initial={'initial'}
            exit={'exit'}
            animate={'animate'}
            variants={variants}
            transition={{type: 'tween'}}
            className='menu'>
                <motion.div onClick={aboutPress} className='menu-item'>
                    <motion.span>ABOUT</motion.span>
                </motion.div>
                <motion.div className='menu-item'>
                    <AccordianDropdown onClick={routing} items={['Browse', 'View All', 'View By Gender', 'View By Collection']} />
                </motion.div>
                <motion.div className='menu-item'>
                    {isSearching 
                    ?
                        <AnimatePresence>
                            <motion.div 
                            initial={{x: 100, opacity: 0, y: 4}}
                            animate={{x: 0, opacity: 1, y: 4}}
                            exit={{x: 100, opacity: 0, y: 4}}
                            className='search-bar-div'>
                                <SearchBar setOpen={setOpen} />
                                <motion.span 
                                onClick={closeSearch}
                                className='close-search'
                                whileTap={{scale: 0.9}}
                                >
                                    <Icon style={{width: 20, height: 20}} icon="ph:x-bold" color='black' />
                                </motion.span>
                            </motion.div>
                        </AnimatePresence>
                    :
                        <AnimatePresence>
                            <motion.span 
                            onClick={openSearch}
                            initial={{y: 100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: 100, opacity: 0}}
                            >SEARCH</motion.span>
                        </AnimatePresence>
                    }
                </motion.div>
            </motion.div>
        </>
    )
}

export default Menu
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


