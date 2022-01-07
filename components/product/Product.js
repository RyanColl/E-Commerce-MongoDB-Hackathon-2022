import React from 'react';
import OptionCont from '../optionCont/OptionCont';
import Rating from '../rating/Rating';
import Breadcrumb from '../breadcrumb/Breadcrumb';

export default function Product({
  title="Name of Product",
  image="/placeholder.jpg",
  price="550",
  rating=5,

  longDetails="one short descriptive paragraph",
  imgDetails="/placeholder.jpg",
  prodDetails="short point form information"
}) {

  return (
    <div className='centered-cont'>
      <div className='basic-info-cont'>
        <Breadcrumb />
        <Rating rating={rating}/>
      </div>

      {/* information section 1 */}
      <div className='product-info'>
        <div className='product-images'>
          <img className='main-product-image' src={image}/>
          <div className='small-product-images'>
            
            <img src={image} alt="Product image" />

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

      {/* information section 2 -- extra product info */}
      <div className='product-info descriptions'>
        <div className='long-description'>
          <p>{longDetails}</p>
        </div>
        <div className='description-image'>
          <img src={imgDetails} />
          <div className='style-cont'></div>
        </div>
        <div className='short-details'>
          <h4>Product Details</h4>
          <p>{prodDetails}</p>
        </div>

      </div>

      {/* ratings section */}
      <div className='ratings-section'>
        <div>
          <h3>Ratings & Reviews</h3>
          <Rating rating={rating} />
        </div>
        <p>No reviews yet. Be the first one to leave a review.</p>
      </div>
    </div>
  )
}
