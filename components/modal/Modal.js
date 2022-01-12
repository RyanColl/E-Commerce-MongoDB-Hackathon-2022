import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { AppProvider, initialModalState } from '../../context/AppContext';
import ModalContent from './ModalContent';
import { Icon } from '@iconify/react';
function Modal({ 
    width = 360, height = 200
}) {
    const {state, dispatch} = React.useContext(AppProvider)
    let keys = Object.keys(state.modal)
    let currentModal = keys.filter((key, i) => {
        return state.modal[key]
    })
    const [hovering, setHovering] = React.useState(false)
    const hovOn = () => setHovering(true)
    const hovOff = () => setHovering(false)
    useEffect(() => {
        setHovering(false)
    }, [])
    console.log(hovering)
    const modalRef = React.useRef(null)
    useEffect(() => {
        if(modalRef.current !== null && state.modalRef.current === null) { // dispatch({...state, modalRef})
            // console.log(modalRef.current)
            dispatch({...state, modalRef})
        }
    })
    
    return (
        <>
            {currentModal.length &&
            <AnimatePresence>
                <motion.div 
                ref={modalRef}
                id='modal'
                initial={{opacity: 0}} exit={{opacity: 0}}
                animate={{opacity: 1}}
                style={{width, height}} className='modal'>
                    <div className='modal-top'>
                        <span>{currentModal[0]}</span>
                        <motion.div onClick={() => dispatch({...state, modal: initialModalState})} whileTap={{scale: 0.9}} onHoverStart={hovOn} onHoverEnd={hovOff} className='close-modal-button'>
                            <Icon style={{width: 32, height: 32}} icon="bi:x" />
                        </motion.div>
                    </div>
                    <ModalContent content={currentModal[0]} />
                </motion.div>
            </AnimatePresence>
            }
        </>
    )
}

export default Modal
