import React from 'react'

export default function Banner({
  pageTitle="Nike Shoes",
  pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
}) {
  return (
    <div className='banner'>
      <div>
        <h2>{pageTitle}</h2>
        <p>{pageDescription}</p>
      </div>
    </div>
  )
}
