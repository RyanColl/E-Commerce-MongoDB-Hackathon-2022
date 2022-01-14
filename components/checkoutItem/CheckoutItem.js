import React from 'react'

export default function CheckoutItem({
    prodTitle="Product Name",
    prodImg="../placeholder.jpg",
    prodBrand="Nike",
    quantity="1",
    size="7",
    prodPrice="550"
}) {
    return (
        <div className='checkout-item-cont'>
            <div>
                <img className='item-image' src={prodImg} />
                <div className='item-info-cont'>
                    <div>
                        <h6>{prodTitle}</h6>
                        <p>Brand: {prodBrand}</p>
                    </div>
                    <p>Qty: {quantity}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Size: {size}</p>
                </div>
            </div>
            <h5>${(prodPrice*quantity).toFixed(2)}</h5>
        </div>
    )
}
