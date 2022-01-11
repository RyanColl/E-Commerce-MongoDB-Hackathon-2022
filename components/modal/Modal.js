import { motion } from 'framer-motion';
import React from 'react';
import { AppProvider } from '../../context/AppContext';

function Modal({
    children
}) {
    const {state, dispatch} = React.useContext(AppProvider)
    // const closeModal = () => dispatch({...state, modal: false})
    return (
        <>
            {state.modal &&
            <motion.div className='modal'>
                {children}
            </motion.div>
            }
        </>
    )
}

export default Modal
