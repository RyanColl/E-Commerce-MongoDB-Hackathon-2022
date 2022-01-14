import React from 'react'
import { AppProvider } from '../../../context/AppContext'
function Summary() {
    const {state, dispatch} = React.useContext(AppProvider)

    return (
        <div>
            <p className='bolded'>Your purchase total: </p>
            <p className='bolded'>{(state.cart.reduce((acc, cartObj) => (acc+cartObj.product.price), 0))*1.12}</p>
            <br />
            <p>This site is for educational purposes only.</p>
            <p>Follow Irene and Ryan on Github and LinkedIn</p>
            <div className='summary-modal-botttom'>
                <div className='modal-ryan'>

                </div>
                <div className='modal-irene'>

                </div>
            </div>
            
        </div>
    )
}

export default Summary
