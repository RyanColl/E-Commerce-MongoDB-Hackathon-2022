import React from 'react'
import ReactStars from 'react-stars'

export default function Rating(newRating) {
    console.log(newRating)
    return (
    <ReactStars
        count={5}
        onChange={Rating}
        size={24}
        color2={'#ffd700'} />
    )
}
