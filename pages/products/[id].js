import React from 'react'
import { getProduct } from '../../lib/dbAccess'
import Product from '../../components/product/Product'
import { useEffect, useState } from 'react/cjs/react.development'

export default function Item({product: {
  brand, category, description, image, price, rating, title, _id
}}) {
  const [Rating, setRating] = useState(0)
  useEffect(() => { setRating( calculateRating(rating) ) }, [])
  return (
    <Product 
        rating={parseFloat(Rating.toFixed(2))}
      // information section 1 ==================
        title={title}
        price={price}
        image={image[0]}

      // information section 2 ==================
        // longDetails={}
        // imgDetails={}
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