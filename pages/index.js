import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getProducts } from '../lib/dbAccess'
import dbConnect from '../lib/dbConnect'
import Product from '../models/Product'

import React from 'react'

function index() {
  return (
    <div>
      
    </div>
  )
}

export default index



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