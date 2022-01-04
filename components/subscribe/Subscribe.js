import React from 'react'
import TextInput from '../textInput/TextInput'
import SubscribeButton from './SubscribeButton'

function Subscribe() {
    const [value, setValue] = React.useState('')
    return (
        <>
            <span>SUBSCRIBE TO OUR NEWSLETTER</span>
            <TextInput placeholder='Email' value={value} setValue={setValue} />
            <SubscribeButton />
        </>
    )
}

export default Subscribe
