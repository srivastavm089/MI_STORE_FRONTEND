import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../style/preNavbar.css'
const PreNavbar = () => {
  return (
    <div className="pre-nav-pr">
      <div className="pre-nav-first" >
        <a className="" href="">MI INDIA</a><span>|</span>
        <a href="">GET MI STORE APP</a><span>|</span>
        <a href="">ONLINE HELP</a><span>|</span>
        <a href="">RETAIL STORE</a><span>|</span>
      </div>
      <div className="pre-nav-second">
        <a   href="">SIGN IN </a><span >|</span>
        <a href="" >SIGN UP</a><span>|</span>

        <a href="" >
       
          <AiOutlineShoppingCart /> CART (0)
        </a>
      </div>
    </div>
  );
};

export default PreNavbar;
