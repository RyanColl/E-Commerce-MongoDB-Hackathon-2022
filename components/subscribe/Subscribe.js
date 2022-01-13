import React from 'react'
import TextInput from '../textInput/TextInput'
import SubscribeButton from './SubscribeButton'

function Subscribe({click = () => {}}) {
    const [value, setValue] = React.useState('')
    const subscribeEmail = (e) => {
        e.preventDefault()
        console.log(value)
        click('subscribe')
    }
    return (
        <form onSubmit={subscribeEmail} className='subscribe-form'>
            <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
            <TextInput placeholder='Email' value={value} setValue={setValue} />
            <SubscribeButton />
        </form>
    )
}

export default Subscribe
