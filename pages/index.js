import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getProducts } from '../lib/dbAccess'
import dbConnect from '../lib/dbConnect'
import { AppProvider } from '../context/AppContext'
import React from 'react'

function index({products}) {
  const {state, dispatch} = React.useContext(AppProvider)
  useEffect(() => {
    dispatch({...state, products})
  }, []) // empty dependency array forces use effect to run only once, upon render
  
  // use this to work with products after getting them into state
  useEffect(() => {
    if(state.products.length) {
      console.log('products now added to state')
    }
  }, [state.products])
  return (
    <div>
      
    </div>
  )
}

export default index



export async function getStaticProps() {
    await dbConnect()
    const products = await getProducts()  
    // const brands = await Product.collection.distinct('brand')
    // console.log(brands)
    // server side rendering
    return {
      props: {
        products: JSON.parse(JSON.stringify(products))
      }, // will be passed to the page component as props
    }
  }