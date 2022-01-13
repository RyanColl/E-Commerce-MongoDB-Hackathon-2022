import React from 'react'

export default function Option({
  optionText=null,
  chooseSize = () => {}
}) { 
  if(typeof optionText ==="string") {
    // console.log('number')
    return (
      <div onClick={() => {chooseSize(parseFloat(optionText))}} className='option' tabIndex={0}>
        <p>{optionText}</p>
      </div>
    )

  }
  
  else {
    return (
      <div onClick={() => {chooseSize(parseFloat(optionText))}} className='option integer-option' tabIndex={0}>
        <p>{optionText}</p>
      </div>
    )
  }
}
