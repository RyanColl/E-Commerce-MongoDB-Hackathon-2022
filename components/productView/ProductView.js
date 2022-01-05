import React from 'react'

export default function ProductView({
  productName="Name of Product",
  src="/placeholder.jpg",
  smallImage1="/placeholder.jpg",
  smallImage2="/placeholder.jpg",
  smallImage3="/placeholder.jpg",
  smallImage4="/placeholder.jpg",
  smallImage5="/placeholder.jpg",
  smallImage6="/placeholder.jpg",
}) {
  return (
    <div>
      <div className='product-info'>
        <div>
          <img src={src} className='product-image'/>
          <div className='small-product-images'>
            <img src={smallImage1} alt="Product preview image" />
            <img src={smallImage2} alt="Product preview image" />
            <img src={smallImage3} alt="Product preview image" />
            <img src={smallImage4} alt="Product preview image" />
            <img src={smallImage5} alt="Product preview image" />
            <img src={smallImage6} alt="Product preview image" />

          </div>

        </div>

        <div className='product-details'>
          <h3>{productName}</h3>
          <p>Style: _______</p>
          <h4>$550</h4>
        </div>
      </div>
    </div>
  )
}
