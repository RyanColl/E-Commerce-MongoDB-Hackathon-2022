import React from 'react'
import TextInput from '../textInput/TextInput'
import SubscribeButton from './SubscribeButton'

function Subscribe() {
    const [value, setValue] = React.useState('')
    const subscribeEmail = (e) => {
        e.preventDefault()
        console.log(value)
    }
    return (
        <form onSubmit={subscribeEmail} className='subscribe-form'>
            <span>SUBSCRIBE TO OUR NEWSLETTER</span>
            <TextInput placeholder='Email' value={value} setValue={setValue} />
            <SubscribeButton />
        </form>
    )
}

export default Subscribe
