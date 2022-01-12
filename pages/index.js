import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import { getProducts } from '../lib/dbAccess'
// import { motion } from 'framer-motion'
import { getProductsByPage } from '../lib/dbAccess'
import dbConnect from '../lib/dbConnect'
import { AppProvider } from '../context/AppContext'
import styled from 'styled-components'
import ProductPreview from '../components/productPreview/productPreview'

//images
import leftarrow from '../assets/left_arrow.svg'
import rightarrow from '../assets/right_arrow.svg'
import heroimage from '../assets/hero-img.svg'

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  right: ${props=>props.right};
  left: ${props=>props.left};
  width: 100%;
`;

function index({
  products,
  left="24px",
  right="24px",
}) {
  const {state, dispatch} = React.useContext(AppProvider)
  const router = useRouter();
  
  useEffect(() => {
    dispatch({...state, loading: false, products})
  }, []) // empty dependency array forces use effect to run only once, upon render
  
  // use this to work with products after getting them into state
  useEffect(() => {
    if(state.products.length) {
      console.log('products now added to state', products)
      /* TESTING - REMOVE BEFORE DEPLOYMENT */
      dispatch({...state, cart: [{...state.products[0], quantity: 1, selectedSize: 9}]})
      /* TESTING COMPLETE */
    }
  }, [state.products])



  const [counter, setCounter] = useState(0);

  const HandleImgChange = (i) => {
    console.log("is this working")
    var carousel = document.getElementsByClassName("carousel")
    if (i<carousel.length-1) {
      i = carousel.length-1;
      console.log("left click")
    }
    else if(i>carousel.length-1) {
      i=0;
      console.log("right click")
    }
    setCounter(i)
  } 
  const buttonClick = () => router.push(`products?collection=collectors`)
  return (
    <div className='centered-cont'>

      <div className='hero-cont'>
        <div>
          <h1 className='uppercased'>Shop now for the lastest kicks of the season.</h1>
          <button type="button" className='black-btn'>Discover Now</button>
        </div>
        <img src={heroimage.src} className='hero-img' />
      </div>

      <div className='carousel-title flex-row-space-between'>
        <h4>Trending now</h4>
        <div className='carousel-arrows'>
          <img src={leftarrow.src} onClick={()=>HandleImgChange(counter - 1)} />
          <img src={rightarrow.src} onClick={()=>HandleImgChange(counter + 1)}  />
        </div>
      </div>

      <div className='carousel-cont'>
        <Carousel className='carousel' 
        >
          {products.map((product, i) => {
            return (
                <ProductPreview 
                    i={i}
                    src={product.image[0] || product.image[1]} 
                    prodTitle={product.title} 
                    prodPrice={`${product.price/100}`}
                    prodPage={() => router.push(`products/${product._id}`)}
                />
            );
          })}
        </Carousel>

      </div>

      <div className='collection-cont'>
        <img src={products[17].image[7]} />
        <div>
          <h3 className='uppercased'>View the Collectors Collection</h3>
          <button type="button" className='white-btn' onClick={buttonClick}>Discover Now</button>
        </div>
      </div>
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


