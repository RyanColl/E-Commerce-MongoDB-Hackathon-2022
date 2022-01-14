import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppProvider } from '../../context/AppContext'
export default function FilterBar() {
  const {state, dispatch} = React.useContext(AppProvider)
  const router = useRouter()
  const [route, setRoute] = useState('')
  useEffect(() => {
    let route = {key: Object.keys(router.query)[0], value: router.query[Object.keys(router.query)[0]]}
    setRoute(`/api/sort/filter?${`${route.key}=${route.value}`}`)
  }, [router.query])
  const lowToHigh = () => {
    console.log(router.asPath)
    fetch(route, {method: "POST", body: JSON.stringify({price:1})})
      .then(data => data.json())
      .then(data => dispatch({...state, products: data.data.products}))
      .catch(e => console.log(e.message))
  }
  const highToLow = () => {
    fetch(route, {method: "POST", body: JSON.stringify({price:-1})})
      .then(data => data.json())
      .then(data => dispatch({...state, products: data.data.products}))
      .catch(e => console.log(e.message))
  }
  const shoeSize = (size) => {
    fetch(route, {method: "POST", body: JSON.stringify({shoeSizes: size})})
      .then(data => data.json())
      .then(data => dispatch({...state, products: data.data.products}))
      .catch(e => console.log(e.message))
  }
  return (
    <div className='filter-cont'>
      <div className='filter-bar'>

        <div>
          <div className='filter-item'>
            <span>Sort By Price</span>
            <img src="/down-arrow.svg" />
            <div className='filter-dropdown'>
              <a onClick={lowToHigh}>Price Low to High</a>   
              <a onClick={highToLow}>Price High to Low</a>         
            </div>
          </div>

        </div>
        
        <div>
          <div className='filter-item'>
            <span>Shoe Size</span>
            <img src="/down-arrow.svg" />
            <div className='filter-dropdown shoe-sizes'>
              {shoeSizes.map((size, i) => {
                return <a onClick={() => shoeSize(size)} key={`size-${size}`}>{size}</a>
              })}
            </div>
          </div>
        </div>

        {/* <div>
          <div className='filter-item'>
            <span>Color</span>
            <img src="/down-arrow.svg" />
          </div>

          <div className='filter-dropdown'>
            <a>Black</a>
            <a>White</a>
            <a>Beige</a>
            <a>Brown</a>
            <a>Blue</a>
            <a>Green</a>

            <a>Yellow</a>
            <a>Orange</a>
            <a>Red</a>
            <a>Pink</a>
            <a>Purple</a>
          </div>
        </div> */}

      </div>
    </div>
  )
}

const shoeSizes = [
  5, 5.5,
  6, 6.5,
  7, 7.5,
  8, 8.5,
  9, 9.5,
  10, 10.5,
  11, 11.5,
  12, 12.5,
  13, 13.5,
  14, 14.5
]
