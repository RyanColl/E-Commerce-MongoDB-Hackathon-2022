import React from 'react'
import TextInput from '../textInput/TextInput'
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import americanexpress from "../../assets/american-express.svg";
import paypal from "../../assets/paypal.svg";
import ReviewCont from '../reviewContainer/ReviewCont';
import checkmark from '../../assets/checkmark.svg';

export default function CheckoutAccordion({}) {
    // form 1 - shipping address ============================================================
    //     return (
    //         <div className='accordion-cont'>
    //             <h4 className='uppercased'>Shipping Address</h4>
    //             <form className='checkout-form'>
    //                 <div className='flex-row'>
    //                     <TextInput 
    //                         placeholder='First Name'
    //                         value={null} />
    //                     <TextInput 
    //                         placeholder='Last Name'
    //                         value={null} />
    //                 </div>
    //                 <TextInput 
    //                     placeholder='Address Line 1'
    //                     value={null} 
    //                     width="100%" />
    //                 <TextInput 
    //                     placeholder='Address Line 2'
    //                     value={null}
    //                     width="100%" />
    //                 <div className='flex-row'>
    //                     <TextInput 
    //                         placeholder='City'
    //                         value={null} />
    //                     <TextInput 
    //                         placeholder='Province'
    //                         value={null} />
    //                 </div>
    //                 <div className='flex-row'>
    //                     <TextInput 
    //                         placeholder='Postal Code'
    //                         value={null} />
    //                     <TextInput 
    //                         placeholder='Country'
    //                         value={"Canada"}
    //                         disabled={true} />
    //                 </div>
    //                 <input 
    //                     className="black-btn" 
    //                     type="submit" 
    //                     value="Next"/>
    //             </form>
    //             <hr />
    //             <h4 className='uppercased'>Payment Method</h4>
    //             <hr />
    //             <h4 className='uppercased'>Contact Information</h4>
    //             <hr />
    //             <h4 className='uppercased'>Review Order</h4>
    //         </div>
    //     )


    //form 2 - payment method ========================================================
        // return (
        //     <div className='accordion-cont'>
        //         <h4 className='uppercased'>Shipping Address</h4>
        //         <hr />
        //         <div className='flex-row-space-between'>
        //             <h4 className='uppercased'>Payment Method</h4>
        //             <div className='payment-methods'>
        //                 <img src={visa.src} />
        //                 <img src={mastercard.src} />
        //                 <img src={americanexpress.src} />
        //                 <img src={paypal.src} />
        //             </div>
        //         </div>
        //         <form className='checkout-form'>
        //             <TextInput 
        //                 placeholder='Card Number'
        //                 value={null} 
        //                 width="100%" />
        //             <div className='flex-row'>
        //                 <TextInput 
        //                     placeholder='MM/YY'
        //                     value={null} />
        //                 <TextInput 
        //                     placeholder='CVV'
        //                     value={null} />
        //             </div>
        //             <div>
        //                 <p>CHECKBOX: Shipping address same as billing address</p>
        //             </div>
        //             <TextInput 
        //                 placeholder='Address Line 1'
        //                 value={null}
        //                 width="100%" />
        //             <TextInput 
        //                 placeholder='Address Line 2'
        //                 value={null}
        //                 width="100%" />
        //             <div className='flex-row'>
        //                 <TextInput 
        //                     placeholder='City'
        //                     value={null} />
        //                 <TextInput 
        //                     placeholder='Province'
        //                     value={null} />
        //             </div>
        //             <div className='flex-row'>
        //                 <TextInput 
        //                     placeholder='Postal Code'
        //                     value={null} />
        //                 <TextInput 
        //                     placeholder='Country'
        //                     value={"Canada"}
        //                     disabled={true} />
        //             </div>
        //             <input 
        //                 className="black-btn" 
        //                 type="submit" 
        //                 value="Next"/>
        //         </form>
        //         <hr />
        //         <h4 className='uppercased'>Contact Information</h4>
        //         <hr />
        //         <h4 className='uppercased'>Review Order</h4>
        //     </div>
        // )

    //form 3 - contact information ========================================================
        // return (
        //     <div className='accordion-cont'>
        //         <h4 className='uppercased'>Shipping Address</h4>
        //         <hr />
        //         <h4 className='uppercased'>Payment Method</h4>
        //         <hr />
        //         <h4 className='uppercased'>Contact Information</h4>
        //         <form className='checkout-form'>
        //             <TextInput 
        //                 placeholder='Email Address'
        //                 value={null} 
        //                 width="100%" />
        //             <TextInput 
        //                 placeholder='Phone Number'
        //                 value={null} 
        //                 width="100%" />
        //             <input 
        //                 className="black-btn" 
        //                 type="submit" 
        //                 value="Next"/>
        //         </form>
        //         <hr />
        //         <h4 className='uppercased'>Review Order</h4>
        //     </div>
        // )

        
    //form 4 - review order ========================================================
    return (
        <div className='accordion-cont'>
            <div className='flex-row-space-between'>
                <h4 
                    className='uppercased'
                    // onClick={}
                >Shipping Address</h4>
                <img src={checkmark.src} />
            </div>
            <hr />
            <div className='flex-row-space-between'>
                <h4 
                    className='uppercased'
                    // onClick={}
                >Payment Method</h4>
                <img src={checkmark.src} />
            </div>
            <hr />
            <div className='flex-row-space-between'>
                <h4
                    className='uppercased'
                    // onClick={}
                >Contact Information</h4>
                <img src={checkmark.src} />
            </div>
            <hr />
            <h3 className='uppercased'>Review Order</h3>
            <div className='all-review-cont'>
                <ReviewCont 
                    // header=''
                    // text=''
                    // editOnclick={}
                />
                <ReviewCont
                    // header=''
                    // text=''
                    // editOnclick={}
                />
                <ReviewCont
                    // header=''
                    // text=''
                    // editOnclick={}
                />
            </div>
        </div>
    )

}
