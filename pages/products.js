import React from 'react';
import Banner from '../components/banner/banner';
import FilterBar from '../components/filterBar/FilterBar';
import ProductPreview from '../components/productPreview/productPreview'
// import { useRouter } from 'next/router'
function products({query}) {
    // access to router
    // const router = useRouter()
    // // pulling search paramater from router query
    // const {search} = router.query;
    // console.log(router.query.Search)
    /* HEADS UP - DUE TO SERVER SIDE PROPS ON LINE 77, WE NO LONGER NEED USE ROUTER */
    console.log(query)
    return (
        <div className='centered-cont'>
            <Banner />
            <FilterBar />
            <div className='product-list'>
                <ProductPreview 
                    // src=''
                    // prodTitle=''
                    // prodPrice=''
                />
                <ProductPreview 
                    // src=''
                    // prodTitle=''
                    // prodPrice=''
                />
                <ProductPreview 
                    // src=''
                    // prodTitle=''
                    // prodPrice=''
                />
                <ProductPreview 
                    // src=''
                    // prodTitle=''
                    // prodPrice=''
                />
                <ProductPreview 
                    // src=''
                    // prodTitle=''
                    // prodPrice=''
                />
                <ProductPreview 
                    // src=''
                    // prodTitle=''
                    // prodPrice=''
                />
                <ProductPreview 
                    // src=''
                    // prodTitle=''
                    // prodPrice=''
                />
                <ProductPreview 
                    // src=''
                    // prodTitle=''
                    // prodPrice=''
                />
                <ProductPreview 
                    // src=''
                    // prodTitle=''
                    // prodPrice=''
                />
                <ProductPreview 
                    // src=''
                    // prodTitle=''
                    // prodPrice=''
                />
            </div>
        </div>
    )
}

export default products


export async function getServerSideProps({query}) {
    console.log(query)
    return {
      props: {query}, // will be passed to the page component as props
    }
  }