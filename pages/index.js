import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getProductsByPage } from '../lib/dbAccess'
import dbConnect from '../lib/dbConnect'
import { AppProvider } from '../context/AppContext'
import React from 'react'

function index({products}) {
  const {state, dispatch} = React.useContext(AppProvider)
  useEffect(() => {
    dispatch({...state, loading: false, products})
  }, []) // empty dependency array forces use effect to run only once, upon render
  
  // use this to work with products after getting them into state
  useEffect(() => {
    if(state.products.length) {
      console.log('products now added to state', products)

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
    const products = await getProductsByPage(1)  
    const Products = products.map((product, i) => {
      return {...product, _id: product._id.toString()}
    })
    return {
      props: {
        products: JSON.parse(JSON.stringify(Products))
      }, // will be passed to the page component as props
    }
  }