import React from 'react'

import Contact from './content/Contact'
import Shipping from './content/Shipping'
import Returns from './content/Returns'
import Careers from './content/Careers'

import Subscribe from './content/Subscribe'
import Summary from './content/Summary'
import Disclaimer from './content/Disclaimer'

const modals = [
    // customer care
    {
        name: 'contact us',
        Component: Contact
    },
    {
        name: 'my account',
        Component: Disclaimer
    },
    {
        name: 'track your order',
        Component: Disclaimer
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
        Component: Disclaimer
    },
    {
        name: 'privacy policy',
        Component: Disclaimer
    },
    {
        name: 'cookie privacy',
        Component: Disclaimer
    },
    {
        name: 'careers',
        Component: Careers
    },
    {
        name: 'our history',
        Component: Disclaimer
    },
    {
        name: 'social responsibility',
        Component: Disclaimer
    },
    {
        name: 'subscribe',
        Component: Subscribe
    },
    {
        name: 'purchase summary',
        Component: Summary
    },
    {
        name: 'site disclaimer',
        Component: Disclaimer
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


