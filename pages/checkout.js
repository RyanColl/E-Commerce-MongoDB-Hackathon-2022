import React from 'react'
import CheckoutAccordion from '../components/checkoutAccordion/CheckoutAccordion'
import CheckoutSummary from '../components/checkoutSummary/CheckoutSummary'
import Banner from '../components/banner/banner'
import { AppProvider } from '../context/AppContext'
import { initialModalState } from '../context/AppContext'
export default function checkout() {
    const {state, dispatch} = React.useContext(AppProvider)
    // capture click event and close modal if open => add to all components inside of pages
    let keys = Object.keys(state.modal)
    let currentModal = keys.filter((key, i) => {
        return state.modal[key]
    })
    const click = (e) => {
        if (currentModal.length && !state.modalRef.current.contains(e.target)) {
          dispatch({ ...state, modal: initialModalState });
        }
    };
    React.useEffect(() => {
        window.addEventListener("click", click);
        return () => window.removeEventListener("click", click);
    });
    return (
        <div className={`centered-cont ${currentModal.length && 'blur'}`}>
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