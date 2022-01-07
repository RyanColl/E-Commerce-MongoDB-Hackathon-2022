import React from 'react'
// import { getData } from '../../utils/fetchData'
import { getProduct } from '../../lib/dbAccess'
import Product from '../../components/product/Product'

export default function Item({product}) {
  console.log(product)
  return (
    <Product 
      title={product.title}

      //the price is not in the thousands -- there should be a period before the second last #
      price={product.price}
      
      // need halp much halp 
      rating={4.3}
      // image={product.image}
    />
  )
}

export async function getServerSideProps({params: {id}}) {

  const res = await getProduct(id)
  console.log(res)
  // server side rendering
  return {
    props: { product: JSON.parse(JSON.stringify(res)) }, // will be passed to the page component as props
  }
}