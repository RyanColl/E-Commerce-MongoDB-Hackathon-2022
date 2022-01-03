import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getProducts } from '../lib/dbAccess'
import dbConnect from '../lib/dbConnect'
import Product from '../models/Product'
import {changeSpanColor} from '../lib/doc.serv'
import Typewriter from 'typewriter-effect';
export default function Home({ products }) {
  console.log(products)
  // push for vercel
  return (
    <motion.div className="index-content">
      <motion.div className='gallery'>
        {[1,2,3].map((num, i) => {
          return (
            <motion.div initial={{y: -200, opacity: 0, rotate: 8}} animate={{y: 0, opacity: 1, rotate: 8}} 
            transition={{duration: 0.3, delay: 0.3*i}}
             key={`rect-${i}`} className='gallery-rect'></motion.div>
          )
        })}
        <motion.img initial={{x: 50, opacity: 0, scale: 0.8}} animate={{x: 0, opacity: 1, scale: 0.8}} transition={{duration: 1.2, delay: 0.6}}
        className='shoes-over' src={'./shoes.png'} 
        />
        <motion.div className='shoes-wording'>
          <motion.div className='shoes-text-div'>
            <motion.span>More Than Just Shoes</motion.span>
          </motion.div>
          <motion.div className='moving-text-div'>
          <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Comfort')
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                changeSpanColor('#D3764A')
              })
              .typeString('LifeStyle')
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                changeSpanColor('#304C7A')
              })
              .typeString('Fashion')
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                changeSpanColor('#B03860')
              })
              .typeString('Collection')
              .start()
            }}
          />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export async function getStaticProps({query}) {
  await dbConnect()
  const products = await getProducts()
  const brands = await Product.collection.distinct('brand')
  console.log(brands)
  // server side rendering
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      revalidate: false,
    }, // will be passed to the page component as props
  }
}
