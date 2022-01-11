import React from 'react'
import AccordianDropdown from '../accordian/AccordianDropdown';
import Subscribe from '../subscribe/Subscribe';
const customerCare = ['CUSTOMER CARE', 'Contact Us', 'My Account', 'Track Your Order', 'Shipping', 'Returns'];
const legalInformation = ['LEGAL INFORMATION', 'Terms and Conditions of Sale', 'Privacy Policy', 'Cookie Policy']
const ourCompany = ['OUR COMPANY', 'Careers', 'Our History', 'Social Responsibility']
function Footer() {
    const windowObject = typeof window != 'undefined' && window
    if (windowObject.innerWidth >= 1120) {
        return (
            <div className='footer'>
                <div className='footer-top'>
                    <div className='footer-section customer-care'>
                        {customerCare.map((text, i) => {
                            return (<a key={`customer-care-text-${i}`}>{text}</a>)
                        })}
                    </div>
                    <div className='footer-section legal-info'>
                        {legalInformation.map((text, i) => {
                            return (<a key={`customer-care-text-${i}`}>{text}</a>)
                        })}
                    </div>
                    <div className='footer-section our-company'>
                        {ourCompany.map((text, i) => {
                            return (<a key={`customer-care-text-${i}`}>{text}</a>)
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
    } else {
        return (
            <div className='footer'>
                <div className='footer-top'>
                    <div className='footer-section customer-care'>
                        <AccordianDropdown items={customerCare} />
                    </div>
                    <div className='footer-section legal-info'>
                        <AccordianDropdown items={legalInformation} />
                    </div>
                    <div className='footer-section our-company'>
                        <AccordianDropdown items={ourCompany} />
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
    
}

export default Footer
