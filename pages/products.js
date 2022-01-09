import React from 'react';
import Banner from '../components/banner/banner';
import FilterBar from '../components/filterBar/FilterBar';
import ProductPreview from '../components/productPreview/productPreview'
import dbConnect from '../lib/dbConnect'
import { getProducts } from '../lib/dbAccess'
// import { useRouter } from 'next/router'
function products({query, products}) {
    return (
        <div className='centered-cont'>
            <Banner />
            <FilterBar />
            <div className='product-list'>
                {products.map((product, i) => {
                    return (
                        <ProductPreview 
                            i={i}
                            src={product.image[0] || product.image[1]} 
                            prodTitle={product.title} 
                            prodPrice={`${product.price}`}
                            // prodPage={() => router.push("products/" + product._id)} Use template literal with ``
                            prodPage={() => router.push(`products/${product._id}`)}
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
    const products = await getProducts()
    console.log(query)
    return {
      props: {
          query,
          products: JSON.parse(JSON.stringify(products))
        }, // will be passed to the page component as props
    }
  }