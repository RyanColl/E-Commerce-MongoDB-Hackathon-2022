import React from 'react'

export default function FilterBar() {
  return (
    <div className='filter-cont'>
      <div className='filter-bar'>
        <div className='filter-item'>
          <span>Sort By Price</span>
          <img src="/down-arrow.svg" />
        </div>
        <div className='filter-item'>
          <span>Color</span>
          <img src="/down-arrow.svg" />
        </div>
        <div className='filter-item'>
          <span>Shoe Size</span>
          <img src="/down-arrow.svg" />
        </div>
      </div>
    </div>
  )
}
