import React from 'react'
import '../style/starproduct.css';
const StarProduct = ({starProduct}) => {
    console.log(starProduct)
  return (
    <div className='starProduct' >
       <div>
        <a href={starProduct[0].url}>
            <img  alt="logo" src={starProduct[0].image} />
        </a>
       </div>
       <div className='starproduct-second'>
      <a href={starProduct[1].url}> <img src={starProduct[1].image} alt="logo" /></a>
      <a   href={starProduct[2].url}><img src={starProduct[2].image} alt="logo" /></a>
      <a className='grid-oc' href={starProduct[3].url}><img src={starProduct[3].image} alt="logo" /></a>
       </div>
    </div>
  )
}

export default StarProduct