import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../style/hotAccessroies.css"
const   HotAccessoriesMenu = () => {
  return (
    <div className='hot-accesories-pr'>
        <NavLink className='HotAccessoriesLink' to='/music'>Music Store</NavLink>
        <NavLink className='HotAccessoriesLink' to='/smartDevice'>Smart Devices</NavLink>
        <NavLink className='HotAccessoriesLink' to='/home'>Home</NavLink>
        <NavLink className='HotAccessoriesLink' to='/lifestyle'>Lifestyle</NavLink>
        <NavLink className='HotAccessoriesLink' to='/mobileAccessories'>Mobile Accessories</NavLink>
    </div>
  )
}

export default HotAccessoriesMenu