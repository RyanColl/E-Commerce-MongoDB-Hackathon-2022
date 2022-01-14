import React from 'react';

function ProductPreview({
  src="https://static.nike.com/a/images/t_PDP_1728_v1/i1-512bfa8a-01a0-4971-bd34-9cef18a159e0/air-force-1-07-shoe-AKTdww3y.jpg",
  prodTitle="Product Name Here",
  prodPrice="399.00",
  prodPage = () => {},
  i=0
}) {

  return (
    <div key={`prod-div-${i}`} className='prod-div'>
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
