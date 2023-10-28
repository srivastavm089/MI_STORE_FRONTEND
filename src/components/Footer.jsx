import React from 'react'
import {BsArrowRepeat,BsShieldCheck,BsMap,BsFacebook, BsYoutube, BsInstagram, BsTwitter} from 'react-icons/bs';
import '../style/footer.css'
const Footer = ({footer}) => {
console.log(footer)
  return (
    <div>


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
              <input type="text" placeholder='Enter Email Address'/>
              <span>Thanks.You're on our email list for spcial offers.</span>
            </div>
            <div>
                <h1>FOLLOW MI</h1>
                <p>We want to hear from you</p>
            </div>
            <div className='pre-footer-second-logo'>
                <BsFacebook/>
                <BsYoutube/>
                <BsInstagram/>
                <BsTwitter/>
            </div>
        </div>
        <div className='footer'>
            <div className='footer-flex'>
                <p>SUPPORT</p>
                {
                    footer.support.map((item)=>(
                        <a href="" key={item.url} className='footer-list'>{item.name}</a>
                    ))
                }
            </div>
            <div className='footer-flex'>
                <p>SHOP AND LEARN</p>
                {
                  footer.shopAndLearn.map((item)=>(
                    <a key={item.url} className='footer-list'>{item.name}</a>
                  ))
                }
            </div>
            <div className='footer-flex'>
                <p>RETAIL STORE</p>
                {
                    footer.retailStore.map((item)=>(
                        <a key={item.url} className='footer-list'>{item.name}</a>
                    ))
                }
            </div>
            <div className='footer-flex'>
                <p>ABOUT</p>
                {
                    footer.aboutUS.map((item)=>(
                        <a key={item.url} className='footer-list'>{item.name}</a>
                    ))

                }
            </div>
            <div className='footer-flex'>
                <p>CONTACT US</p>
                {
                    footer.contactUs.map((item)=>(
                        <a key={item.url} className='footer-list'>{item.name}</a>
                    ))

                }
            </div>
            <div className='footer-flex'>
                <p>Chat with our Virtual AI Bot <br />(24/7 Live Agent Support)</p>
                <button className='footer-chat-now'>CHAT NOW</button>
            </div>
        </div>



    </div>
  )
}

export default Footer