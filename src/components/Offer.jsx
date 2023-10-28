import React from 'react'
import OfferCard from './OfferCard';
import '../style/offer.css';
const Offer = ({offer}) => {

  return (
    <div className='offer-section'>
        {
            offer.map((item,index)=>(
     <OfferCard key={item.image} index={index} src={item.image} link={item.url}/>
            ))
        }
    </div>
  )
}   

export default Offer