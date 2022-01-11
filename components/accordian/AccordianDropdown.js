import { AnimatePresence, motion } from 'framer-motion'
import React, {useEffect} from 'react'
import { useState } from 'react/cjs/react.development'
import vectorArrow from '../../assets/vector-arrow.svg'
function AccordianDropdown({
    items = ['']
}) {
    const [isOpen, setOpen] = useState(false)
    const press = () => setOpen(!isOpen)

    const click = () => setOpen(false)
    
    const dropdownRef = React.useRef(null)
    const clickEvent = (e) => {
        if(dropdownRef != null) {
            // console.log(true, e)
            if (dropdownRef.current.contains(e.target)) { // this is how we determine if our click is inside of our ref
                    press()
            } else click()
        } else {
            console.log(false, e)
        }
    }
    useEffect(() => {
        window.addEventListener("click", clickEvent)
        return () => window.removeEventListener('click', clickEvent) 
    })
    return (
        <motion.div ref={dropdownRef}
        onClick={press} className='accordian-dropdown'>
            <span>{items[0]}</span>
            <motion.img 
            animate={isOpen ? {rotate: '0deg'} : {rotate: '180deg'}} 
            src={vectorArrow.src} 
            />
            <AnimatePresence>
                {isOpen && 
                    <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1, y: 35}}
                    exit={{opacity: 0}}
                    className='accordian-dropdown-div'>
                        {items.filter((item, i) => i !== 0).map((item, i) => {
                            return (
                                <motion.span 
                                initial={{opacity: 0}} 
                                animate={{opacity: 1}}
                                transition={{delay: i*0.2}}
                                key={`acc-dd-span-${i}`}>{item}</motion.span>
                            )
                        })}
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    )
}

export default AccordianDropdown
