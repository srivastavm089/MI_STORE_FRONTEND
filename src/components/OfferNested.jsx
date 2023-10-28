import React from 'react'
import "../style/hotnested.css"
const OfferNested = ({name, price, image,index}) => {
    console.log(name)
  return (

        <div className='nestedHotPr'>
            <img className='hot-img' src={image} alt={`${index}logo`} />
            <p >{name}</p>
            <p className='hot-price'>{price}</p>
        </div>
   
  )
}

export default OfferNested;