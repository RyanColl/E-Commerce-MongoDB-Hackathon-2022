import React from 'react'
import CheckoutAccordion from '../components/checkoutAccordion/CheckoutAccordion'
import CheckoutSummary from '../components/checkoutSummary/CheckoutSummary'
import Banner from '../components/banner/banner'

export default function checkout() {
    return (
        <div className='centered-cont'>
            <Banner pageTitle='Checkout' pageDescription=''/>
            <div className='checkout-content'>
                <CheckoutAccordion />
                <div className='checkout-content-right'>
                    <CheckoutSummary />
                </div>

            </div>
            
        </div>
    )
}
