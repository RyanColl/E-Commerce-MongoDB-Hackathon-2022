import React from 'react'
import leftarrow from '../../assets/left_arrow.svg'
import rightarrow from '../../assets/right_arrow.svg'

export default function PageChanger({
    prevPage = () => {},
    nextPage = () => {},
}) {
    return (
        <div className='page-change-cont'>
            <div onClick={prevPage}>
                <img src={leftarrow.src} />
                <p>Previous</p>
            </div>
        
            <div onClick={nextPage}>
                <p>Next</p>
                <img src={rightarrow.src} />
            </div>
            
        </div>
    )
}
