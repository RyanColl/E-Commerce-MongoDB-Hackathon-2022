import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import ProductView from '../components/productView/ProductView'
import Rating from '../components/rating/Rating'

export default function IndividualProduct() {
  return (
    <div className='centered-cont'>
      <div>
        <Breadcrumb />
        <Rating />
      </div>
      <ProductView />
    </div>
  )
}
