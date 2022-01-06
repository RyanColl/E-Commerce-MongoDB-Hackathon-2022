import React from 'react'

export default function Option({
  optionText="option"
}) { return (
    <div className='option' tabIndex={0}>
      <p>{optionText}</p>
    </div>
  )
}
