import React from 'react'
import {useRouter} from 'next/router'
export default function Banner({
  pageTitle="Nike Shoes",
  pageDescription="Nike Shoes are made from only the highest quality materials."
}) {
  const router = useRouter()
  const {query} = router;
  console.log(query)
  return (
    <div className='banner'>
      <div>
        <h2>{pageTitle}</h2>
        <p>{pageDescription}</p>
      </div>
    </div>
  )
}
