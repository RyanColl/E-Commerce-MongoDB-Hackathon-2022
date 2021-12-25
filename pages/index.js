import Head from 'next/head'
import dbConnect from '../lib/dbConnect'
import Product from '../models/Product'

export default function Home({ products }) {
  // console.log(products)
  return (
    <div className="App-header">

    </div>
  )
}
export async function getServerSideProps({query}) {
  await dbConnect()
  console.log(query)
  const res = await Product.find({}).limit(20)
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
