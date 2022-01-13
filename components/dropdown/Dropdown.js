import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import downArrow from '../../assets/down-arrow.svg'
function Dropdown({number = 1}) {
    const [num, setNum] = useState(1)
    const [isOpen, setOpen] = useState(false)
    const ddClick = () => setOpen(!isOpen)
    return (
        <>
            <motion.div onClick={ddClick} className='basic-dropdown'>
                <span>{num}</span>
                <motion.img 
                animate={{scale: 0.4, rotate: isOpen?'0deg':'180deg'}} src={downArrow.src} />
            </motion.div>
            {isOpen &&
            <AnimatePresence>
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className='basic-dropdown-pod'>

                </motion.div>
            </AnimatePresence>
            }
        </>
    )
}

export default Dropdown
