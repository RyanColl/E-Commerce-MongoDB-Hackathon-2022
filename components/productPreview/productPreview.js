import React from 'react'

function productPreview({
  src="#",
  prodTitle="Product Name Here",
  prodPrice="399.00"

}) {
  return (
    <div className='prod-div'>
      <img className='prod-img' src={src} alt="" />
      <h6 className='prod-title'>{prodTitle}</h6>
      <p>${prodPrice}</p>
    </div>
  )
}

export default productPreview;
