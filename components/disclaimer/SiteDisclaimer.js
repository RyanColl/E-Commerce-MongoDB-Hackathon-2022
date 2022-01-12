import React from 'react'
import { Icon } from '@iconify/react';
const SiteDisclaimer = () => {
    return(
        <span className='site-disclaimer'>
            <a>
                <Icon style={{width: 16, height: 16}} icon="bi:info-circle" color="white" />
                <span>Site Disclaimer</span>
            </a>
        </span>
    );
} 

export default SiteDisclaimer
