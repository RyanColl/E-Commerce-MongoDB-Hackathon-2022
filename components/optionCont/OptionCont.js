import React from 'react'
import Option from '../option/Option'

export default function OptionCont({
  optionTitle="Select an Option",
  optionText=null,
  stockAmt="4"
}) {
  return (
    <div className="option-section">
      <p>{optionTitle}</p>
      <div className='option-cont'>
        <Option 
          optionText={optionText}
        />
      </div>
      <p className='stock-amount'>{stockAmt} left in stock.</p>
    </div>
  )
}
