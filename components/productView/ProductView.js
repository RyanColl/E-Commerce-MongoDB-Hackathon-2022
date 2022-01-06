import React from 'react';
import OptionCont from '../optionCont/OptionCont';

export default function ProductView({
  title="Name of Product",
  image="/placeholder.jpg",
  price="550",
}) {
  return (
      <div className='product-info'>
        <div className='product-images'>
          <img className='main-product-image' src={image}/>
          <div className='small-product-images'>
            <img src={image} alt="Product preview image" />
            <img src={image} alt="Product preview image" />
            <img src={image} alt="Product preview image" />
            <img src={image} alt="Product preview image" />
            <img src={image} alt="Product preview image" />
            <img src={image} alt="Product preview image" />
          </div>
        </div>

        <div className='product-details'>
          <h3>{title}</h3>
          {/* not sure if we have the data for this */}
          {/* <p>Style: _______</p> */}
          <h4>${price}</h4>
          <OptionCont 
            optionTitle="Select a Color"
            optionText={"dwfwe"}
          />
          <OptionCont 
            optionTitle="Select a Size" 
            optionText={11.5}  
          />
          <button className='black-btn cart-btn' type='button'>Add to Cart</button>
        </div>

      </div>
  )
}
