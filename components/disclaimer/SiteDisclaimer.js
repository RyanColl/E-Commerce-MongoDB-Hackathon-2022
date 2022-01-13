import React from 'react'
import { Icon } from '@iconify/react';
import Modal from '../modal/Modal';
import { AppProvider } from '../../context/AppContext';
const SiteDisclaimer = () => {
    const {state, dispatch} = React.useContext(AppProvider)
    const disclaimerClick = () => dispatch({...state, modal: true})
    return(
        <>
            <span className='site-disclaimer'>
                <a onClick={disclaimerClick}>
                    <Icon style={{width: 12, height: 12}} icon="bi:info-circle" color="#808080" />
                    <span>Site Disclaimer</span>
                </a>
            </span>
        </>
    );
} 

export default SiteDisclaimer
