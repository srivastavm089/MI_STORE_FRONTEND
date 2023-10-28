import React from 'react'
import {BsArrowRepeat,BsShieldCheck,BsMap,BsFacebook, BsYoutube, BsInstagram, BsTwitter, BsGlobe} from 'react-icons/bs';
import '../style/footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {RiTwitterXFill} from 'react-icons/ri'
import {AiFillInstagram} from 'react-icons/ai'
import {BiLogoPlayStore} from 'react-icons/bi'
const Footer = ({footer}) => {
console.log(footer)
  return (
    <div className='footer-pr'>


        <div className='pre-footer'>
            <div className='pre-footer-first'>
            <div className='flex-pre-footer-first'>
                <BsArrowRepeat className='pre-footer-logo'/>
                <p> <b>Hassle-free replacement</b> <br />10-day easy replacement policy on mi.com</p>
            </div>
            <div className='flex-pre-footer-first'>
                <BsShieldCheck className='pre-footer-logo'/>
               <p><b>100% secure payments</b><br />We support Cards, Wallets, EMI and COD</p>
            </div>
            <div className='flex-pre-footer-first'>
                <BsMap className='pre-footer-logo'/>
                <p><b>Vast service network</b><br />1000 Mi service-centers across 600 cities</p>
            </div>

        </div>
        </div>

        <div className='pre-footer-second'>
            <div>
                <h1>LET'S STAY IN TOUCH </h1>
                <p>Get updates on sales specials and more</p>
            </div>
            <div className='pre-footer-second-input'>
              <input className='pre-footer-second-input-hide' type="text" placeholder='Enter Email Address'/>
              <span>Thanks.You're on our email list for spcial offers.</span>
            </div>
            <div className='pre-footer-second-hide'>
                <h1>FOLLOW MI</h1>
                <div className='pre-footer-second-logo'>
                <BsFacebook/>
               
                <BsInstagram/>
                <BsTwitter/>
            </div>
            </div>
          
        </div>
        <div>
      
        <div className='footer'>
          
            <div className='footer-flex'>
                <p>SUPPORT</p>
                {
                    footer.support.map((item)=>(
                        <a href="" key={item.url} className='footer-list'>{item.name}</a>
                    ))
                }
            </div>
            <div className='footer-flex hide-shop-learn'>
                <p>SHOP AND LEARN</p>
                {
                  footer.shopAndLearn.map((item)=>(
                    <a key={item.url} className='footer-list'>{item.name}</a>
                  ))
                }
            </div>
            <div className='footer-flex hide-retail-store'>
                <p>RETAIL STORE</p>
                {
                    footer.retailStore.map((item)=>(
                        <a key={item.url} className='footer-list'>{item.name}</a>
                    ))
                }
            </div>
            <div className='footer-flex footer-hide-about'>
                <p>ABOUT</p>
                {
                    footer.aboutUS.map((item)=>(
                        <a key={item.url} className='footer-list'>{item.name}</a>
                    ))

                }
            </div>
            <div className='footer-flex footer-hide-option'>
                <p>CONTACT US</p>
                {
                    footer.contactUs.map((item)=>(
                        <a key={item.url} className='footer-list'>{item.name}</a>
                    ))

                }
            </div>
          
        </div>
        <div className='footer-mobile'>
            <div style={{display:'flex', flexDirection:'column', gap:'3vh', padding:'1vh'}}>
                <h1>Follow Mi</h1>
                <div style={{display:'flex', gap:'5vh'}}>
                <FaFacebookF/>
               <RiTwitterXFill/>
                   <AiFillInstagram/>

                </div>
            </div>
            <div style={{marginTop:'1vh', display:'flex', flexDirection:'column', gap:'3vh'}}>
                <h1 style={{paddingLeft:'1vh'}}>Let's Stay in touch</h1>
                <input style={{background:'black',marginLeft:"1vh", border:"1px solid white", outline:'none', width:'90%', borderRadius:'10px', paddingLeft:'1vh'}} type="text" placeholder='Enter email address' />
            </div>
            <div style={{marginTop:'2vh', display:'flex', flexDirection:'column', gap:'3vh'}}>
                <h1 style={{paddingLeft:'1vh'}}>Get mi store app</h1>
                <p style={{background:'white',display:"flex", alignItems:"center", gap:'10vw', color:"black", width:'90%', paddingLeft:'2vh', marginLeft:'1vh', borderRadius:'10px'}}><BiLogoPlayStore/>Download on Google play</p>
            </div>
            <div style={{marginTop:"2vh",display:'flex', flexDirection:'column', gap:'1vh', paddingLeft:'1vh'}}>
                <p>Sitemap</p>
                <p style={{display:'flex', gap:'1vh', alignItems:"center"}}>India / india <BsGlobe/></p>

            </div>
           <hr />
            <div>
                <p style={{opacity:"0.5", fontSize:'16px'}}>
                    Copyright © 2010 - 2023 Xiaomi. All Rights Reserved
                </p>
            </div>
        </div>
        </div>



    </div>
  )
}

export default Footer