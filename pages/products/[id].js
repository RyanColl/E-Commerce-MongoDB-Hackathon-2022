import React, {useState, useEffect} from 'react'
import { getProduct } from '../../lib/dbAccess'
import Product from '../../components/product/Product'
import {AppProvider} from '../../context/AppContext'
import Option from '../../components/option/Option';
import { initialModalState } from '../../context/AppContext'

export default function Item({product}) {
  const {
    brand, category, description, image, price, rating, title, _id
  } = product;
  const {state, dispatch} = React.useContext(AppProvider)
    // capture click event and close modal if open => add to all components inside of pages
    let keys = Object.keys(state.modal)
    let currentModal = keys.filter((key, i) => {
        return state.modal[key]
    })
    const click = (e) => {
      //this checks if the modalRef that was passed into state contains the click event
      if (currentModal.length && !state.modalRef.current.contains(e.target)) {
        dispatch({ ...state, modal: initialModalState });
      }
    };
    React.useEffect(() => {
        window.addEventListener("click", click);
        return () => window.removeEventListener("click", click);
    });
  const [Rating, setRating] = useState(0)
  useEffect(() => { 
    setRating( calculateRating(rating) ) 
  }, [])
  useEffect(() => {
    dispatch({...state, loading: false})
  }, [product])
  return (
    <Product 
        rating={parseFloat(Rating.toFixed(2))}
      // information section 1 ==================
        title={title}
        //the price is not in the thousands -- there should be a period before the second last #
        price={price/100}
        image={product.image}

        sizeOptions={
          product.shoeSizes.map((i)=>
          <Option optionText={product.shoeSizes[i]} />
        )}

      // information section 2 ==================
        // longDetails={}
        imgDetails={product.image[7]}
        // prodDetails={}
    />
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