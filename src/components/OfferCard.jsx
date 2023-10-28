import React from 'react'

const OfferCard = ({src, link,index}) => {
  return (
     <a className='offer-card-response' href={link}> <img src={src} alt={`${index} Offer`} /></a>
  )
}

export default OfferCard