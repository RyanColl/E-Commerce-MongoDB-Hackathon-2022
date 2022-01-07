import React from 'react'
// import { getData } from '../../utils/fetchData'
import { getProducts } from '../../lib/dbAccess'
import Product from '../../components/product/Product'

export default function Item(props) {
  return (
    <Product products={props.products} />
  )
}

export async function getServerSideProps({params: {id}}) {

  const res = await getProducts(`products/${id}`)
  // server side rendering
  return {
    props: { product: res.product }, // will be passed to the page component as props
  }
}