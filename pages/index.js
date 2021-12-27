import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import GalleryImage from '../components/gallery/galleryImage'
import { getProducts } from '../lib/dbAccess'
import dbConnect from '../lib/dbConnect'
import Product from '../models/Product'
import {changeSpanColor} from '../lib/doc.serv'
import Typewriter from 'typewriter-effect';
const NikeImageArray = [
  'https://firebasestorage.googleapis.com/v0/b/anystorage-7a2ad.appspot.com/o/4.png?alt=media&token=e4f3d223-15ca-4bc3-86b0-b29faf49c675',
  'https://firebasestorage.googleapis.com/v0/b/anystorage-7a2ad.appspot.com/o/5.png?alt=media&token=78fc85be-b22a-48a3-9842-af2b4e2d1dc5',
  'https://firebasestorage.googleapis.com/v0/b/anystorage-7a2ad.appspot.com/o/6.png?alt=media&token=148b440d-42b8-4a52-816d-9793fa0b42bf',
  'https://firebasestorage.googleapis.com/v0/b/anystorage-7a2ad.appspot.com/o/7.png?alt=media&token=40d6cebb-37f6-46fa-8278-375bda687ee8',
  'https://firebasestorage.googleapis.com/v0/b/anystorage-7a2ad.appspot.com/o/8.png?alt=media&token=79200344-a3d4-4683-9d7e-858b0d981b9b',
  'https://firebasestorage.googleapis.com/v0/b/anystorage-7a2ad.appspot.com/o/9.png?alt=media&token=1d8d43a7-c711-402b-90ed-ddd4c1b4db55'
]
export default function Home({ products }) {
  const [timer, setTimer] = useState(0)
  useEffect(() => {
    setInterval(() => {
      if(timer === 5) {
        setTimer(0)
      } else {
        setTimer(timer+1)
      }
    }, 10000)
  })
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
        className='shoes-over' src='./shoes.png' 
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
export async function getServerSideProps({query}) {
  await dbConnect()
  const products = await getProducts()
  const brands = await Product.collection.distinct('brand')
  console.log(brands)
  // server side rendering
  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }, // will be passed to the page component as props
  }
}
