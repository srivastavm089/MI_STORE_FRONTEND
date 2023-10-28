import React from 'react'
import '../style/productreview.css'
const ProductReviewCard = ({name,price,image,index,review}) => {
  return (
    <div className='reviewcard'>
  <img src={image} alt={`${index} logo`} />
  <h5>{review}</h5>
  <span>{name} <b>{price}</b></span>


    </div>
  )
}

export default ProductReviewCard