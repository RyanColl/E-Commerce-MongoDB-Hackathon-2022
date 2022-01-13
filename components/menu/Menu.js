import { motion } from 'framer-motion'
import React from 'react'
import { Icon } from '@iconify/react';
import Modal from '../modal/Modal';
import { AppProvider, initialModalState } from '../../context/AppContext';
import AccordianDropdown from '../accordian/AccordianDropdown';
import { useRouter } from 'next/router';
function Menu() {
    const {state, dispatch} = React.useContext(AppProvider)
    const aboutPress = () => setTimeout(() => dispatch({...state, modal: 'about'}), 10)
    const router = useRouter()
    const routing = (text) => {
        console.log(text)
        if(text === 'View All') {router.push('/products'); return}
        if(text === 'View By Gender') {router.push('/products?type=mens'); return}
        if(text === 'View By Collection') {router.push('/products?collection=collectors'); return}
    }
    // console.log(state.modal)
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
                    <motion.span>SEARCH</motion.span>
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


