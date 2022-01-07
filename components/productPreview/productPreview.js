import React from 'react';

function ProductPreview({
  src="https://static.nike.com/a/images/t_PDP_1728_v1/17c7e995-7b18-43ff-87cb-ce0e239f4fe5/air-max-dia-se-shoe-CH3Phk.jpg",
  prodTitle="Product Name Here",
  prodPrice="399.00",
  prodPage = () => {},

}) {

  return (
    <div className='prod-div'>
      <div className='prod-preview'>
        <button 
          className="white-btn" 
          type="button"
          onClick={prodPage}
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
