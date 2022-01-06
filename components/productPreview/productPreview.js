import React from 'react';

function ProductPreview({
  src="/placeholder.jpg",
  prodTitle="Product Name Here",
  prodPrice="399.00"

}) {
  return (
    <div className='prod-div'>
      <div className='prod-preview'>
        <button 
          className="white-btn" 
          type="button"
          >View Product</button>
        <img
          className='prod-img'
          src={src} 
          alt="product image" />
      </div>
      <h6 className='prod-title'>{prodTitle}</h6>
      <p className="prod-price">${prodPrice}</p>
    </div>
  )
}

export default ProductPreview;
