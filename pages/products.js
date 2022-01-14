import React, { useEffect } from 'react';
import Banner from '../components/banner/banner';
import FilterBar from '../components/filterBar/FilterBar';
import ProductPreview from '../components/productPreview/productPreview'
import dbConnect from '../lib/dbConnect'
// import { getProducts } from '../lib/dbAccess'
import { useRouter } from 'next/router'
import { getProductsByCollection, getProductsByType } from '../lib/atlasSearch';
import { AppProvider } from '../context/AppContext'
import PageChanger from '../components/pageChanger/PageChanger';
import { initialModalState } from '../context/AppContext'
function products({products}) {
    const {state, dispatch} = React.useContext(AppProvider)
    const router = useRouter();
    const navigateToProduct = (id) => {
        dispatch({...state, loading: true})
        router.push(`products/${id}`)
    }
    useEffect(() => {
        if(products.length) dispatch({...state, loading: false, products})
        else dispatch({...state, loading: false})
    }, [products])

        // capture click event and close modal if open => add to all components inside of pages
        const click = (e) => {
            if (state.modalRef.current != null && (state.modal !== '' && !state.modalRef.current.contains(e.target))) {
              dispatch({ ...state, modal: '' });
            }
          };
          React.useEffect(() => {
            window.addEventListener("click", click);
            return () => window.removeEventListener("click", click);
          });
        
    return (
        <div className={`centered-cont ${state.modal !== '' && 'blur'}`}>
            <Banner pageDescription=''/>
            <FilterBar />
            <div className='product-list'>
                {state.products.length && state.products.map((product, i) => {
                    return (
                        <ProductPreview 
                            key={i}
                            i={i}
                            src={product.image[0] || product.image[1]} 
                            prodTitle={product.title} 
                            prodPrice={`${product.price/100}`}
                            // prodPage={() => router.push("products/" + product._id)} Use template literal with ``
                            prodPage={() => navigateToProduct(product._id)}
                        />
                    );
                })}
            </div>
                <PageChanger 
                    prevPage={()=>{}}
                    nextPage={()=>{}}
                />
        </div>
    )
}

export default products


export async function getServerSideProps({query}) {
    await dbConnect() // always confirm connection from global cache with this line
    let products = {}; // initialize variable products so we can fill it accordingly
    let [key] = Object.keys(query) // grab the key from the query object, either type or collection
    let value = query[key];
    if(!key) { // query param will be empty on index
        // do nothing
    } else {
        if(key === 'type') {
            // when using type as a search, we send the 
            // value to this function to activate the atlas search query
            products = await getProductsByType(value)
        }
        if(key === 'collection') {
            // when using collectionName as a search, we send the 
            // value to this function to activate the atlas search query
            products = await getProductsByCollection(value)
        }
    }
    
    return {
      props: {
          query,
          products: JSON.parse(JSON.stringify(products))
        }, // will be passed to the page component as props
    }
  }