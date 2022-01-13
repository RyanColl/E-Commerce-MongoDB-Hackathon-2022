import React, { useState } from 'react';
import OptionCont from '../optionCont/OptionCont';
import Rating from '../rating/Rating';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import { AnimatePresence, motion } from 'framer-motion';
import Option from '../../components/option/Option'
import { AppProvider } from '../../context/AppContext';
export default function Product({
  title="Name of Product",
  image=["/placeholder.jpg"],
  price="550",
  sizeOptions=null,
  rating=5,
  setSelectedSize,
  addToCart = () => {},
  longDetails="one short descriptive paragraph",
  imgDetails="/placeholder.jpg",
  prodDetails="short point form information"
}) {
  const {state, dispatch} = React.useContext(AppProvider)
    // capture click event and close modal if open => add to all components inside of pages
  const [bigImage, setBigImage] = useState(image[0])
  
  const hoverImageOn = (src) => {
    setBigImage(src)
  }
  const chooseSize = (size) => setSelectedSize(size)
  return (
    <div className={`centered-cont ${state.modal !== '' && 'blur'}`}>
      <div className="basic-info-cont">
        <Breadcrumb />
        <Rating rating={rating} />
      </div>

      {/* information section 1 */}
      <div className="product-info">
        <div className="product-images">
          <AnimatePresence>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="main-product-image"
              src={bigImage}
            />
          </AnimatePresence>
          <div className="small-product-images">
            {image
              .map((img, i) => {
                return (
                  <motion.img
                    onHoverStart={() => {
                      hoverImageOn(img);
                    }}
                    whileTap={{scale: 0.9}}
                    key={`alt-img-${i - 1}`}
                    src={img}
                    alt="Product image"
                    className='secondary-product-image'
                    style={{cursor: 'zoom-in'}}
                  />
                );
              })}
          </div>
        </div>

        <div className="product-details">
          <h3>{title}</h3>
          {/* not sure if we have the data for this */}
          {/* <p>Style: _______</p> */}

          <h4>${price}</h4>

          {/* <OptionCont optionTitle="Select a Color" optionText={"dwfwe"} /> */}
          <OptionCont optionTitle="Select a Size">
              {sizeOptions.map((size, i)=>
            <Option chooseSize={chooseSize} key={i} optionText={size} />
          )}
          </OptionCont>
          <button 
          onClick={() => {addToCart()}}
          className="black-btn cart-btn" type="button">
            Add to Cart
          </button>
        </div>
      </div>

      {/* information section 2 -- extra product info */}
      <div className="product-info descriptions">
        <div className="long-description">
          <p>{longDetails}</p>
        </div>
        <div className="description-image">
          <img src={imgDetails} />
          <div className="style-cont"></div>
        </div>
        <div className="short-details">
          <h4 className='uppercased'>Product Details</h4>
          <p>{prodDetails}</p>
        </div>
      </div>

      {/* ratings section */}
      <div className="ratings-section">
        <div>
          <h3>Ratings & Reviews</h3>
          <Rating rating={rating} />
        </div>
        <p>No reviews yet. Be the first one to leave a review.</p>
      </div>
    </div>
  );
}
