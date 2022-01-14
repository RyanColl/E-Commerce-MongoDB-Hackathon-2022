import React from 'react'

export default function ReviewCont({
    header="Header",
    text="input customer information here",
    editOnclick = () => {}
}) {
    return (
        <div className='review-cont'>
            <div className='flex-row-space-between'>
                <h5 className='uppercased'>{header}</h5>
                <a onClick={editOnclick}>edit</a>
            </div>
            <p className='customer-info'>{text}</p>
        </div>
    )
}
