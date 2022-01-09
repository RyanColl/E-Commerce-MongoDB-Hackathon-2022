import React from 'react'

export default function CheckoutItem({
    prodTitle="Product Name",
    prodColor="black"

}) {
    return (
        <div className='checkout-item-cont'>
            <img className='item-image' src="../placeholder.jpg" />
            <div className='item-info-cont'>
                <h6>{prodTitle}</h6>
                <p>Color: {prodColor}</p>
            </div>
        </div>
    )
}
