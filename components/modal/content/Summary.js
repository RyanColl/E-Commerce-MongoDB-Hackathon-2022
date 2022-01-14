import React, {useEffect} from 'react'
import { AppProvider } from '../../../context/AppContext'
import AboutUs from './AboutUs'
function Summary() {
    const {state, dispatch} = React.useContext(AppProvider)
    useEffect(() => {
        document.getElementById('modal').style.height = '520px';
    })
    return (
        <div>
            <p className='bolded'>Your purchase total: </p>
            <p className='bolded'>${((state.cart.reduce((acc, cartObj) => (acc+((cartObj.product.price/100)*cartObj.quantity)), 0))*1.12).toFixed(2)}</p>
            <br />
            <AboutUs />
        </div>
    )
}

export default Summary
