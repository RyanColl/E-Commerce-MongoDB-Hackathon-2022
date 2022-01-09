import React from 'react'
import CheckoutAccordion from '../components/checkoutAccordion/CheckoutAccordion'
import Banner from '../components/banner/banner'

export default function checkout() {
    return (
        <div className='centered-cont'>
            <Banner pageTitle='Checkout' pageDescription=''/>
            <CheckoutAccordion />
            
        </div>
    )
}
