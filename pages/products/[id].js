import React from 'react'
// import { getData } from '../../utils/fetchData'
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
      // need halp much halp 
        rating={parseFloat(Rating.toFixed(2))}
      // information section 1 ==================
        title={title}
        //the price is not in the thousands -- there should be a period before the second last #
        // the price is in the thousands. The cheapest shoe we have is like 900
        price={price}
      // image={product.image}

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