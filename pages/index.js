import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, useMotionValue } from 'framer-motion'
// import { getProducts } from '../lib/dbAccess'
import { getProductsByPage } from '../lib/dbAccess'
import dbConnect from '../lib/dbConnect'
import { AppProvider } from '../context/AppContext'
import ProductPreview from '../components/productPreview/productPreview'
import { initialModalState } from '../context/AppContext'

//images
import leftarrow from '../assets/left_arrow.svg'
import rightarrow from '../assets/right_arrow.svg'
import heroimage from '../assets/hero-img.svg'


function index({
  products,
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
      dispatch({...state, cart: [{product: state.products[0], quantity: 1, selectedSize: 9}, {product: state.products[1], quantity: 1, selectedSize: 9}, {product: state.products[2], quantity: 1, selectedSize: 9}]})
      /* TESTING COMPLETE */
    }
  }, [state.products])

  const buttonClick = () => router.push(`products?collection=collectors`)
  const [counter, setCounter] = useState(0);
  const xValue = useMotionValue(0)
  const HandleImgChange = (i) => {
    console.log("is this working")
    var carousel = document.getElementsByClassName("carousel")
    if (i<carousel.length-1) {
      i = carousel.length-1;
      console.log("left click")
      xValue = xValue.get();
    }
    else if(i>carousel.length-1) {
      i=0;
      console.log("right click")
      xValue = xValue.set(xValue);
    }
    setCounter(i)
  } 
  const load = {
    0: { left: -1000 },
    0.5: { left: -1500 },
    1: { left: -2000 } 

  }
  // capture click event and close modal if open => add to all components inside of pages
  const click = (e) => {
    if (state.modalRef.current != null && (state.modal !== '' && !state.modalRef.current.contains(e.target))) {
      dispatch({ ...state, modal: '' });
    }
  };
  React.useEffect(() => {
    window.addEventListener("click", click);
    return () => window.removeEventListener("click", click);
  });

  const bannerButton = () => {
    dispatch({...state, loading: true})
    router.push('/products')
  }

  return (
    <div className={`centered-cont ${state.modal !== '' && 'blur'}`}>
      <div className='hero-cont'>
        <div>
          <h1 className='uppercased'>Shop now for the lastest kicks of the season.</h1>
          <motion.span whileTap={{scale: 0.9}}><button onClick={bannerButton} type="button" className='black-btn'>Discover Now</button></motion.span>
        </div>
        <img src={heroimage.src} className='hero-img' />
      </div>

      <div className='carousel-title flex-row-space-between'>
        <h4>Trending now</h4>
        <div className='carousel-arrows'>
          {/* <img src={leftarrow.src} onClick={()=>HandleImgChange(-1)} />
          <img src={rightarrow.src} onClick={()=>HandleImgChange(+1)}  /> */}
        </div>
      </div>

      <div className='carousel-cont'>
        <motion.div className='carousel'
              initial={{ x: xValue.get() }}
              // animate={load}
              animate={{ x: -4358 }}
              whileHover={{
                x: xValue.get() }}
              transition={{
                x: { duration: 80 }
              }}
            >
          {products.map((product, i) => {
            return (
                <ProductPreview 
                    key={i}
                    i={i}
                    src={product.image[0] || product.image[1]} 
                    prodTitle={product.title} 
                    prodPrice={`${product.price/100}`}
                    prodPage={() => {dispatch({...state, loading: true}); router.push(`products/${product._id}`)}}
                />
            );
          })}
        </motion.div>
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


