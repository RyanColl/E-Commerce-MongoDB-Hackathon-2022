import React from 'react'
import Tracking from './content/Tracking'
import Shipping from './content/Shipping'
const modals = [
    {
        name: 'shipping',
        Component: Shipping
    },
    {
        name: 'track',
        Component: Tracking
    }

]
function ModalContent({content}) {
    console.log(content)
    return (
        <>
            {
                modals.filter(({name, Component}, i) => name === content)
                .map(({name, Component}, i) => {
                    return <Component />
                }) 
            }
        </>
    )
}

export default ModalContent


