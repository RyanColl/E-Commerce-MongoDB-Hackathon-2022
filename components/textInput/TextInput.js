import React from 'react'

function TextInput({
    placeholder = 'Email', 
    width = 330, 
    value = '', 
    setValue = () => {},
    disabled = null,
}) {
    return (
        <input 
            className='input-tag' 
            type={'text'} 
            placeholder={placeholder} 
            value={value} 
            style={{width}} 
            onChange={(e) => {setValue(e.target.value)}}
            disabled={disabled}
        />
    )
}

export default TextInput
