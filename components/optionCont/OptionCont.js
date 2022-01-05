import React from 'react'
import Option from '../option/Option'

export default function OptionCont({
  optionTitle="Select an Option"
}) {
  return (
    <div>
      <p>{optionTitle}</p>
      <div className='option-cont'>
        <Option />
      </div>
    </div>
  )
}
