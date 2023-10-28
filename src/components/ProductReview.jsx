import React from 'react'
import ProductReviewCard from './ProductReviewCard'

const ProductReview = ({productReviews}) => {
  return (
    <div className='product-review-pr'>
        {
    productReviews.map((item,index)=>{
       return  <ProductReviewCard key={item.image} price={item.price} name={item.name} image={item.image} review={item.review} index={index}/>
    })
        }
    


    </div>
  )
}

export default ProductReview