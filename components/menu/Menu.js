import { motion } from 'framer-motion'
import React from 'react'
import { Icon } from '@iconify/react';
import Modal from '../modal/Modal';
import { AppProvider, initialModalState } from '../../context/AppContext';
import AccordianDropdown from '../accordian/AccordianDropdown';
function Menu() {
    const {state, dispatch} = React.useContext(AppProvider)
    const aboutPress = () => setTimeout(() => dispatch({...state, modal: 'about'}), 10)
    
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
                    <AccordianDropdown items={['Browse', 'View All', 'View By Brand', 'View By Collection']} />
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


