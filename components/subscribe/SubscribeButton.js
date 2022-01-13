import React from 'react'
import { AppProvider } from '../../context/AppContext';

function SubscribeButton({
    text="SUBSCRIBE"
}) {
        const {state, dispatch} = React.useContext(AppProvider)
    const handleModalPress = () => {
        setTimeout(() => dispatch({...state, modal: text}), 10)
    }
    return (
        <button 
            type="button" 
            className='black-btn' 
            onClick={() => {handleModalPress(text)}}>
            {text}
        </button>
    )
}

export default SubscribeButton
