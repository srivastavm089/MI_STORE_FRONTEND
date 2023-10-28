import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import NavCard from "./NavCard";
import SmoothRender from 'react-smooth-render';
import { BsSearch } from "react-icons/bs";
import {FiUser} from 'react-icons/fi'
import ModelMenu from "../lib/ModelMenu";

const Navbar = ({data}) => {
const[currentData,setCurrentData]=useState([]);

  return (
    <div>
    <div className="navbar-pr">
    
      <div className="navbar-first">
      <NavLink className="mi-logo-pr">
          <img
          className="mi-logo"
            src="https://mi-home.no/Userfiles/Upload/images/Cshop-32587/logo-new.png"
            alt="logo"
          />
        </NavLink>
       
        <Link className="navbar-hide" onClick={()=> setCurrentData(data.miPhones)}>Mi Phones</Link>
        <NavLink className="navbar-hide" onClick={()=> setCurrentData(data.redmiPhones)}>Redmi Phones</NavLink>
        <NavLink className="navbar-hide" onClick={()=> setCurrentData(data.tv)}>TV</NavLink>
        <NavLink className="navbar-hide" onClick={()=> setCurrentData(data.laptop)}>Laptops</NavLink>
        <NavLink className="navbar-hide" onClick={()=> setCurrentData(data.fitnessAndLifeStyle)}>Fitness & Lifestyle</NavLink>
        <NavLink className="navbar-hide" onClick={()=> setCurrentData(data.home)}>Home</NavLink>
        <NavLink className="navbar-hide" onClick={()=> setCurrentData(data.audio)}>Audio</NavLink>
        <NavLink className="navbar-hide" onClick={()=>  setCurrentData(data.accessories)}>Accesories</NavLink>
      </div>
      <div className="navbar-second">
       <NavLink className="navbar-hide">Discover</NavLink>
       <NavLink className="navbar-hide">Support</NavLink>
       <BsSearch/>
       <AiOutlineShoppingCart/>
       <FiUser className="navbar-hide"/>
       <div className="navmenu-small-view">
        <ModelMenu />
      </div>
      </div>
    
   
    </div>
  <div className="nav-click">
      {
       currentData &&  currentData.map((item,index)=>(
         <NavCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
       ))
      }
      </div>
 

    </div>
  );
};

export default Navbar;
