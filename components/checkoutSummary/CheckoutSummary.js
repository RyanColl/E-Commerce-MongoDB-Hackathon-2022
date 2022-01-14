import React from 'react';
import CheckoutItem from '../checkoutItem/CheckoutItem';
import { AppProvider } from '../../context/AppContext';
import CompletePurchase from '../cart/CompletePurchase';
export default function CheckoutSummary({
    taxEstimate="4000",
    estimatedTotal="9000"
}) {
    const {state, dispatch} = React.useContext(AppProvider)
    let subtotal = (state.cart.reduce((acc, cartObj) => (acc+(cartObj.product.price*cartObj.quantity)), 0))/100
    return (
        <div className='checkout-summary-cont'>
            <div className='purchase-summary'>
                <div className='edit-option-cont flex-row-space-between'>
                    <h3>Summary</h3>  <a>edit</a>
                </div>
                {state.cart.map(({product, quantity, selectedSize}, i) => {
                    return <CheckoutItem prodPrice={product.price/100} prodImg={product.image[0]} prodTitle={product.title} quantity={quantity} size={selectedSize} />
                })}
            </div>
            <div className='cost-summary-cont'>
                <div className='flex-row-space-between'>
                    <p>Subtotal:</p>  <p>${subtotal}</p>
                </div>
                <div className='flex-row-space-between'>
                    <p>Tax estimate:</p>  <p>${((subtotal)*0.12).toFixed(2)}</p>
                </div>
                <a onClick={() => setTimeout(() => dispatch({...state, modal: 'coupon'}), 10)}>Have a promo code?</a>
                <hr />
                <div className='flex-row-space-between'>
                    <h4>Estimated total:</h4>  <h4>${((subtotal)*1.12).toFixed(2)}</h4>
                </div>

            </div>
            <div className='purchase-complete'>
                <CompletePurchase onClick={() => setTimeout(() => dispatch({...state, modal: 'Purchase Summary'}), 10)} />
            </div>
            
        </div>
    )
}


