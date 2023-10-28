import React from 'react'
import { Carousel } from 'react-bootstrap'

const Banner = ({banner}) => {
  return (
    <div>
        <Carousel>
           {
            banner.end.map((item,index)=>(
              <Carousel.Item>
                  <img src={item.image} alt={`${index} banner`} id='bannerImage' className='d-block w-100' />
                 <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.source}</p>
                    <u>Read More</u>
                 </Carousel.Caption>
              </Carousel.Item>
            ))  
           }
        </Carousel>
    </div>
  )
}

export default Banner