import React from 'react'
import AccordianDropdown from '../accordian/AccordianDropdown';
import Subscribe from '../subscribe/Subscribe';
const customerCare = ['CUSTOMER CARE', 'Contact Us', 'My Account', 'Track Your Order', 'Shipping', 'Returns'];
const legalInformation = ['LEGAL INFORMATION', 'Terms and Conditions of Sale', 'Privacy Policy', 'Cookie Policy']
const ourCompany = ['OUR COMPANY', 'Careers', 'Our History', 'Social Responsibility']
import { AppProvider } from '../../context/AppContext';
function Footer() {
    const {state, dispatch} = React.useContext(AppProvider)
    const windowObject = typeof window != 'undefined' && window
    const handleModalPress = (text) => {
        setTimeout(() => dispatch({...state, modal: text}), 10)
    }
    if (windowObject.innerWidth >= 1120) {
        return (
            <div className={`footer ${state.modal !== '' && 'blur'}`}>
                <div className='footer-top'>
                    <div className='footer-section customer-care'>
                        {customerCare.map((text, i) => {
                            return (<a onClick={() => {handleModalPress(text)}} key={`customer-care-text-${i}`}>{text}</a>)
                        })}
                    </div>
                    <div className='footer-section legal-info'>
                        {legalInformation.map((text, i) => {
                            return (<a onClick={() => {handleModalPress(text)}} key={`customer-care-text-${i}`}>{text}</a>)
                        })}
                    </div>
                    <div className='footer-section our-company'>
                        {ourCompany.map((text, i) => {
                            return (<a onClick={() => {handleModalPress(text)}} key={`customer-care-text-${i}`}>{text}</a>)
                        })}
                    </div>
                    <div className='footer-section subscribe'>
                        <Subscribe click={handleModalPress} />
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
                        <AccordianDropdown onClick={handleModalPress} items={customerCare} />
                    </div>
                    <div className='footer-section legal-info'>
                        <AccordianDropdown onClick={handleModalPress} items={legalInformation} />
                    </div>
                    <div className='footer-section our-company'>
                        <AccordianDropdown onClick={handleModalPress} items={ourCompany}  />
                    </div>
                    <div className='footer-section subscribe'>
                        <Subscribe click={handleModalPress} />
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
