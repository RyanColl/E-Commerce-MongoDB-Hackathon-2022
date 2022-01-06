import React from 'react'

export default function Option({
  optionText=null
}) { 
  if(typeof optionText ==="string") {
    console.log('number')
    return (
      <div className='option' tabIndex={0}>
        <p>{optionText}</p>
      </div>
    )

  }
  
  else {
    return (
      <div className='option integer-option' tabIndex={0}>
        <p>{optionText}</p>
      </div>
    )
  }
}
