import React from 'react'

export default function FilterBar() {
  return (
    <div className='filter-cont'>
      <div className='filter-bar'>

        <div>
          <div className='filter-item'>
            <span>Sort By Price</span>
            <img src="/down-arrow.svg" />
            <div className='filter-dropdown'>
              <a>Price Low to High</a>   
              <a>Price High to Low</a>         
            </div>
          </div>

        </div>
        
        <div>
          <div className='filter-item'>
            <span>Shoe Size</span>
            <img src="/down-arrow.svg" />
            <div className='filter-dropdown shoe-sizes'>
              <a>5</a>
              <a>5.5</a>
              <a>6</a>
              <a>6.5</a>
              <a>7</a>
              <a>7.5</a>
              <a>8</a>
              <a>8.5</a>
              <a>9</a>
              <a>9.5</a>
              <a>10</a>
              <a>10.5</a>
              <a>11</a>
              <a>11.5</a>
              <a>12</a>
              <a>12.5</a>
              <a>13</a>
              <a>13.5</a>
              <a>14</a>
              <a>14.5</a>
            </div>
          </div>
        </div>

        {/* <div>
          <div className='filter-item'>
            <span>Color</span>
            <img src="/down-arrow.svg" />
          </div>

          <div className='filter-dropdown'>
            <a>Black</a>
            <a>White</a>
            <a>Beige</a>
            <a>Brown</a>
            <a>Blue</a>
            <a>Green</a>

            <a>Yellow</a>
            <a>Orange</a>
            <a>Red</a>
            <a>Pink</a>
            <a>Purple</a>
          </div>
        </div> */}

      </div>
    </div>
  )
}
