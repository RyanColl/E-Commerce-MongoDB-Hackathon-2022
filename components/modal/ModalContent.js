import React from 'react'
import Tracking from './content/Tracking'
import Shipping from './content/Shipping'
const modals = [
    {
        name: 'shipping',
        Component: Shipping
    },
    {
        name: 'track your order',
        Component: Tracking
    },
    {
        name: 'privacy policy',
        Component: () => <span>Hello Irene</span>
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


