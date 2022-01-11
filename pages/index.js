import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getProducts } from '../lib/dbAccess'
import dbConnect from '../lib/dbConnect'
import { AppProvider } from '../context/AppContext'
import React from 'react'
import leftarrow from '../assets/left_arrow.svg'
import rightarrow from '../assets/right_arrow.svg'
import ProductPreview from '../components/productPreview/productPreview'

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
    <div className='centered-cont'>
      <img src="./placeholder.jpg" className='hero-img' />

      <div className='carousel-title flex-row-space-between'>
        <h4>Trending now</h4>
        <div className='carousel-arrows'>
          <img src={leftarrow.src} />
          <img src={rightarrow.src} />
        </div>
      </div>

      <div className='carousel-cont'>
        <div className='carousel'>
          {products.map((product, i) => {
            return (
                <ProductPreview 
                    i={i}
                    src={product.image[0] || product.image[1]} 
                    prodTitle={product.title} 
                    prodPrice={`${product.price}`}
                    prodPage={() => router.push(`products/${product._id}`)}
                />
            );
          })}
        </div>

      </div>

      <div className='collection-cont'>
        <img src="./placeholder.jpg" />
        <div>
          <h3 className='uppercased'>View the Luxury Collection</h3>
          <button type="button" className='white-btn'>Discover Now</button>
        </div>
      </div>
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