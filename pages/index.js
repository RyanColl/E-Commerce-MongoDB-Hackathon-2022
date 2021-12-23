import Head from 'next/head'
import dbConnect from '../lib/dbConnect'
import Product from '../models/Product'

export default function Home({ products }) {
  
  return (
    <div className="App-header">

    </div>
  )
}

export async function getServerSideProps({query}) {
  await dbConnect()
  const res = await Product.find({})
  const products = res.map((doc) => {
    const product = doc.toObject()
    product._id = product._id.toString()
    return product
  })
  // server side rendering
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }, // will be passed to the page component as props
  }
}
