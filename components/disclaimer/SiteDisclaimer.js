import React from 'react'
import { Icon } from '@iconify/react';
import Modal from '../modal/Modal';
import { AppProvider } from '../../context/AppContext';
const SiteDisclaimer = ({
    text="Site Disclaimer"
}) => {
    const {state, dispatch} = React.useContext(AppProvider)
const handleModalPress = () => {
    setTimeout(() => dispatch({...state, modal: text}), 10)
}
    return(
        <>
            <span className='site-disclaimer'>
                <a>
                    <Icon style={{width: 12, height: 12}} icon="bi:info-circle" color="#808080" />
                    <span onClick={handleModalPress}>{text}</span>
                </a>
            </span>
        </>
    );
} 

export default SiteDisclaimer
