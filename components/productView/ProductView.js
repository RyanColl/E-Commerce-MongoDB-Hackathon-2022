import React from 'react';
import OptionCont from '../optionCont/OptionCont';

export default function ProductView({
  title="Name of Product",
  image="/placeholder.jpg",
  price="550",
}) {
  return (
    <div>
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
          <p>Style: _______</p>
          <h4>${price}</h4>
          <OptionCont optionTitle="Select a Color" />
          <OptionCont optionTitle="Select a Size" />
          <button className='black-btn' type='button'>Add to Cart</button>
        </div>

      </div>
    </div>
  )
}
