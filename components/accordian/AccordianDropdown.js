import { AnimatePresence, motion } from 'framer-motion'
import React, {useEffect, useState} from 'react'
import vectorArrow from '../../assets/vector-arrow.svg'
function AccordianDropdown({
    items = [''], onClick = () => {}
}) {
    const [isOpen, setOpen] = useState(false)
    const press = () => setOpen(!isOpen)

    const click = () => setOpen(false)
    
    const dropdownRef = React.useRef(null)
    const clickEvent = (e) => {
        if(dropdownRef != null) {
            // console.log(true, e)
            // this is how we determine if our click is inside of our ref
            if (dropdownRef.current.contains(e.target)) press()  
            else click()
        } else {
            // console.log(false, e)
        }
    }
    useEffect(() => {
        window.addEventListener("click", clickEvent)
        return () => window.removeEventListener('click', clickEvent) 
    })
    return (
        <motion.div ref={dropdownRef}
        onClick={press} className='accordian-dropdown'>
            <div>
                <span className='browse-span'>{items[0]}</span>
                <motion.img 
                animate={{rotate: isOpen ? '180deg' : '0deg'}} 
                src={vectorArrow.src} 
                />
            </div>
            <AnimatePresence>
                {isOpen && 
                    <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1, y: 5}}
                    exit={{opacity: 0}}
                    className='accordian-dropdown-div'>
                        {items.filter((item, i) => i !== 0).map((item, i) => {
                            return (
                                <motion.span 
                                onClick={() => {onClick(item)}}
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
