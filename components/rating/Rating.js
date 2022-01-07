import React from 'react'
import StarRatings from 'react-star-ratings';

export default function Rating({
    rating=5
}) {

    return (
        <StarRatings
            numberOfStars={5}
            rating={rating}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor='#FFE455'
            starEmptyColor='#E7E7E7'
            
        />
    )
}
