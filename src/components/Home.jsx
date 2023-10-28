import React from 'react'
import Slider from './Slider'
import { data } from '../data';
import Heading from './Heading';
import Offer from './Offer';
import StarProduct from './StarProduct';
import HotAccessoriesMenu from './HotAccessoriesMenu';
const Home = () => {
  return (
    <div>
        <Slider start={data.banner.start}/>
        <Offer offer={data.offer}/>
        <Heading text="Start Product"/>
        <StarProduct starProduct={data.starProduct}/>
        <Heading text="HOT ACCESSORIES"/>
        <HotAccessoriesMenu/>
      
    </div>
  )
}

export default Home