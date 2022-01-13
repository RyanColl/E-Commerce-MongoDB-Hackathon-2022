import React from 'react'

import Contact from './content/Contact'
import Account from './content/Account'
import Tracking from './content/Tracking'
import Shipping from './content/Shipping'
import Returns from './content/Returns'

import Terms from './content/Terms'
import Privacy from './content/Privacy'
import Cookie from './content/Cookie'

import Careers from './content/Careers'
import History from './content/History'
import Responsibility from './content/Responsibility'

import Subscribe from './content/Subscribe'

const modals = [
    // customer care
    {
        name: 'contact us',
        Component: Contact
    },
    {
        name: 'my account',
        Component: Account
    },
    {
        name: 'track your order',
        Component: Tracking
    },
    {
        name: 'shipping',
        Component: Shipping
    },
    {
        name: 'returns',
        Component: Returns
    },
    {
        name: 'terms and conditions of sale',
        Component: Terms
    },
    {
        name: 'privacy policy',
        Component: Privacy
    },
    {
        name: 'cookie privacy',
        Component: Cookie
    },
    {
        name: 'careers',
        Component: Careers
    },
    {
        name: 'our history',
        Component: History
    },
    {
        name: 'social responsibility',
        Component: Responsibility
    },
    {
        name: 'subscribe',
        Component: Subscribe
    }

]
function ModalContent({content}) {
    console.log(content)
    return (
        <>
            {
                modals.filter(({name, Component}, i) => name.toLowerCase() === content.toLowerCase())
                .map(({name, Component}, i) => {
                    return <Component />
                }) 
            }
        </>
    )
}

export default ModalContent


