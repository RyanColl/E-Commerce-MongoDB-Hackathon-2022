import React, {useState, useEffect} from 'react'
import { getProduct } from '../../lib/dbAccess'
import Product from '../../components/product/Product'
import {AppProvider} from '../../context/AppContext'
import Option from '../../components/option/Option';
import { initialModalState } from '../../context/AppContext'
import {useRouter} from 'next/router'
export default function Item({product}) {
  const {
    brand, category, description, image, price, rating, title, _id, shoeSizes
  } = product;
  const {state, dispatch} = React.useContext(AppProvider)
  const router = useRouter()  
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
  const [Rating, setRating] = useState(10)
  useEffect(() => { 
    setRating( calculateRating(rating) ) 
  }, [])
  useEffect(() => {
    dispatch({...state, loading: false})
  }, [product])
  console.log(shoeSizes)
  const [selectedSize, setSelectedSize] = useState(0)
  const addToCart = () => {
    dispatch({...state, cart: [...state.cart, {product, quantity: 1, selectedSize}]})
    router.push('/products')
  }
  return (
    <>
    {product &&
      <Product 
          rating={parseFloat(Rating.toFixed(2))}
        // information section 1 ==================
          title={title}
          //the price is not in the thousands -- there should be a period before the second last #
          price={price/100}
          image={image}

          sizeOptions={shoeSizes}

        // information section 2 ==================
          longDetails={description}
          imgDetails={image[3]}
          prodDetails={brand}
          addToCart={addToCart}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
      />
    }
    </>
  )
}

export async function getServerSideProps({params: {id}}) {
  if(id.length === 24) {
    const res = await getProduct(id)
    return { props: { product: JSON.parse(JSON.stringify(res)) } } // will be passed to the page component as props
  } else {
    return { props: { product: {} } }
  }
}

const calculateRating = (rating) => {
  let {oneStar, twoStar, threeStar, fourStar, fiveStar} = rating
  let scoreTotal = (1 * oneStar) + (2 * twoStar) + (3 * threeStar) + (4 * fourStar) + (5 * fiveStar)
  let responseTotal = oneStar + twoStar + threeStar + fourStar + fiveStar
  return scoreTotal / responseTotal
}