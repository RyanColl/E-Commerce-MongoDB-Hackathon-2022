import React from 'react'
import ProductLeader from '../components/breadcrumb/Breadcrumb'
import ProductView from '../components/productView/ProductView'

export default function IndividualProduct() {
  return (
    <div className='centered-cont'>
      <ProductLeader />
      <ProductView />
    </div>
  )
}
