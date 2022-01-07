import React from 'react';
import Banner from '../components/banner/banner';
import FilterBar from '../components/filterBar/FilterBar';
import ProductPreview from '../components/productPreview/productPreview'
import { AppProvider } from '../context/AppContext';
import dbConnect from '../lib/dbConnect'
import { getProducts } from '../lib/dbAccess'
import {useRouter} from 'next/router'
// import { useRouter } from 'next/router'
function products({query, products}) {
    const {state, dispatch} = React.useContext(AppProvider)
    const {productsInState} = state

    /* products are being pulled from either state or through the server side props */

    // access to router
    // const router = useRouter()
    // // pulling search paramater from router query
    // const {search} = router.query;
    // console.log(router.query.Search)
    /* HEADS UP - DUE TO SERVER SIDE PROPS ON LINE 77, WE NO LONGER NEED USE ROUTER */
    console.log(query)

    const router = useRouter()
    return (
        <div className='centered-cont'>
            <Banner />
            <FilterBar />
            <div className='product-list'>
                {products.map((product, i) => {
                    return (
                        <ProductPreview 
                            src={product.image[0] || product.image[1]} 
                            prodTitle={product.title} 
                            prodPrice={`${product.price}`}
                            prodPage={() => router.push("products/" + product._id)} 
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default products


export async function getServerSideProps({query}) {
    await dbConnect()
    const products = await getProducts(query.page | 1)
    console.log(query)
    return {
      props: {
          query,
          products: JSON.parse(JSON.stringify(products))
        }, // will be passed to the page component as props
    }
  }