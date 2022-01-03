import { motion } from 'framer-motion'
import React from 'react'

function GalleryImage({ image }) {
    return (
        <motion.div 
        className='gallery-image-div'
         >
            <motion.img initial={{opacity: 0, x: 50}} animate={{opacity: 1, x: 0}} transition={{duration: 1}} src={image} />
        </motion.div>
    )
}

export default GalleryImage
