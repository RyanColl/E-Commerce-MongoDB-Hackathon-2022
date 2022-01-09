import React from 'react'
import TextInput from '../textInput/TextInput'

export default function CheckoutAccordion() {


    return (
        <div className='accordion-cont'>
            <h3 className='uppercased'>Shipping Address</h3>
            <form className='checkout-form'>
                <div className='flex-row'>
                    <TextInput 
                        placeholder='First Name'
                        value={null} />
                    <TextInput 
                        placeholder='Last Name'
                        value={null} />
                </div>
                <TextInput 
                    placeholder='Address Line 1'
                    value={null} 
                    width="100%" />
                <TextInput 
                    placeholder='Address Line 2'
                    value={null}
                    width="100%" />
                <div className='flex-row'>
                    <TextInput 
                        placeholder='City'
                        value={null} />
                    <TextInput 
                        placeholder='Province'
                        value={null} />
                </div>
                <div className='flex-row'>
                    <TextInput 
                        placeholder='Postal Code'
                        value={null} />
                    <TextInput 
                        placeholder='Country'
                        value={"Canada"}
                        disabled={true} />
                </div>
            </form>
        </div>
    )
}
