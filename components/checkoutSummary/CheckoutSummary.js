import React from 'react';
import CheckoutItem from '../checkoutItem/CheckoutItem';

export default function CheckoutSummary({
    subtotal="5000",
    taxEstimate="4000",
    estimatedTotal="9000"
}) {
    return (
        <div className='checkout-summary-cont'>
            <div className='purchase-summary'>
                <div className='edit-option-cont flex-row-space-between'>
                    <h3>Summary</h3>  <a>edit</a>
                </div>
                <CheckoutItem />
            </div>
            <div className='cost-summary-cont'>
                <div className='flex-row-space-between'>
                    <p>Subtotal:</p>  <p>${subtotal}</p>
                </div>
                <div className='flex-row-space-between'>
                    <p>Tax estimate:</p>  <p>${taxEstimate}</p>
                </div>
                <a>Have a promo code?</a>
                <hr />
                <div className='flex-row-space-between'>
                    <h4>Estimated total:</h4>  <h4>${estimatedTotal}</h4>
                </div>

            </div>
        </div>
    )
}


