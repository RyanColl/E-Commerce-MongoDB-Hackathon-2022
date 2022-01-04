import React from 'react'
import Subscribe from '../subscribe/Subscribe';
const customerCare = ['CUSTOMER CARE', 'Contact Us', 'My Account', 'Track Your Order', 'Shipping', 'Returns'];
const legalInformation = ['LEGAL INFORMATION', 'Terms and Conditions of Sale', 'Privacy Policy', 'Cookie Policy']
const ourCompany = ['OUR COMPANY', 'Careers', 'Our History', 'Social Responsibility']
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-section customer-care'>
                    {customerCare.map((text, i) => {
                        return (<span key={`customer-care-text-${i}`}>{text}</span>)
                    })}
                </div>
                <div className='footer-section legal-info'>
                    {legalInformation.map((text, i) => {
                        return (<span key={`customer-care-text-${i}`}>{text}</span>)
                    })}
                </div>
                <div className='footer-section our-company'>
                    {ourCompany.map((text, i) => {
                        return (<span key={`customer-care-text-${i}`}>{text}</span>)
                    })}
                </div>
                <div className='footer-section subscribe'>
                    <Subscribe />
                </div>
            </div>
            <div className='footer-bottom'>
                <span>Copyright © 2022 Streetz. - All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer
