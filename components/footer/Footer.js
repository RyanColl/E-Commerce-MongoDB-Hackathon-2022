import React from 'react'
import AccordianDropdown from '../accordian/AccordianDropdown';
import Subscribe from '../subscribe/Subscribe';
const customerCare = ['CUSTOMER CARE', 'Contact Us', 'My Account', 'Track Your Order', 'Shipping', 'Returns'];
const legalInformation = ['LEGAL INFORMATION', 'Terms and Conditions of Sale', 'Privacy Policy', 'Cookie Policy']
const ourCompany = ['OUR COMPANY', 'Careers', 'Our History', 'Social Responsibility']
import { AppProvider, initialModalState } from '../../context/AppContext';
function Footer() {
    const {state, dispatch} = React.useContext(AppProvider)
    let keys = Object.keys(state.modal)
    let currentModal = keys.filter((key, i) => {
        return state.modal[key]
    })
    console.log(currentModal.length)
    const windowObject = typeof window != 'undefined' && window
    const handleModalPress = (text) => {
        
        /* THIS IS MAKING MODALS WORK SO I WILL SETTLE FOR IT */

        if(text.toLowerCase().includes('contact')) // includes contact
        setTimeout(() => dispatch({...state, modal: {...initialModalState, contact: true}}), 10)
        if(text.toLowerCase().includes('shipping')) // includes shipping
        setTimeout(() => dispatch({...state, modal: {...initialModalState, shipping: true}}), 10)
        if(text.toLowerCase().includes('privacy')) // includes privacy
        setTimeout(() => dispatch({...state, modal: {...initialModalState, privacy: true}}), 10)
        if(text.toLowerCase().includes('history')) // includes history
        setTimeout(() => dispatch({...state, modal: {...initialModalState, history: true}}), 10)
        
        /* FOR EASE OF MIND - SPLITTING UP THIS NONSENSE */

        if(text.toLowerCase().includes('account')) // includes account
        setTimeout(() => dispatch({...state, modal: {...initialModalState, account: true}}), 10)
        if(text.toLowerCase().includes('returns')) // includes returns
        setTimeout(() => dispatch({...state, modal: {...initialModalState, returns: true}}), 10)
        if(text.toLowerCase().includes('cookie')) // includes cookie
        setTimeout(() => dispatch({...state, modal: {...initialModalState, cookie: true}}), 10)
        if(text.toLowerCase().includes('responsibility')) // includes responsibility
        setTimeout(() => dispatch({...state, modal: {...initialModalState, responsibility: true}}), 10)

        /* MORE SPLITTING */

        if(text.toLowerCase().includes('track')) // includes track
        setTimeout(() => dispatch({...state, modal: {...initialModalState, track: true}}), 10)
        if(text.toLowerCase().includes('conditions')) // includes conditions
        setTimeout(() => dispatch({...state, modal: {...initialModalState, conditions: true}}), 10)
        if(text.toLowerCase().includes('careers')) // includes careers
        setTimeout(() => dispatch({...state, modal: {...initialModalState, careers: true}}), 10)
        if(text.toLowerCase().includes('subscribe')) // includes subscribe
        setTimeout(() => dispatch({...state, modal: {...initialModalState, subscribe: true}}), 10)
        if(text.toLowerCase().includes('disclaimer')) // includes disclaimer
        setTimeout(() => dispatch({...state, modal: {...initialModalState, disclaimer: true}}), 10)
        if(text.toLowerCase().includes('about')) // includes about
        setTimeout(() => dispatch({...state, modal: {...initialModalState, about: true}}), 10)
    }
    if (windowObject.innerWidth >= 1120) {
        return (
            <div className={`footer ${currentModal.length && 'blur'}`}>
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
