import React from 'react'
import OfferNested from './OfferNested';
import '../style/hotcard.css'
const HotCard = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover ,mobileAccessories,mobileAccessoriesCover}) => {
   
  return (
    <div className='hot-card-pr'>
        <div>
            <img style={{width:"100%"}} src={musicCover || smartDeviceCover || homeCover|| lifestyleCover || mobileAccessoriesCover} alt="logo" />

        </div>
        <div className='hotCard-second'>
          {
            music && music.map((item,index)=>{
              return <OfferNested key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            })
          }
          {
            smartDevice && smartDevice.map((item,index)=>{
              return  <OfferNested key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            })
          }
           {
            home && home.map((item,index)=>{
              return  <OfferNested key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            })
          }
           {
            lifestyle && lifestyle.map((item,index)=>{
              return  <OfferNested key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            })
          }
            {
            mobileAccessories && mobileAccessories.map((item,index)=>{
              return  <OfferNested key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            })
          }

          <OfferNested image='https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg'/>
        </div>
    </div>
  )
}

export default HotCard