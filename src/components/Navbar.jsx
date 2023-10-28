import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import NavCard from "./NavCard";


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
        <Link onClick={()=> setCurrentData(data.miPhones)}>Mi Phones</Link>
        <NavLink onClick={()=> setCurrentData(data.redmiPhones)}>Redmi Phones</NavLink>
        <NavLink onClick={()=> setCurrentData(data.tv)}>TV</NavLink>
        <NavLink onClick={()=> setCurrentData(data.laptop)}>Laptops</NavLink>
        <NavLink onClick={()=> setCurrentData(data.fitnessAndLifeStyle)}>Fitness & Lifestyle</NavLink>
        <NavLink onClick={()=> setCurrentData(data.home)}>Home</NavLink>
        <NavLink onClick={()=> setCurrentData(data.audio)}>Audio</NavLink>
        <NavLink onClick={()=>  setCurrentData(data.accessories)}>Accesories</NavLink>
      </div>
      <div className="navbar-second">
        <input
          type="text"
          placeholder="Search Product"
          className="nav-serach"
        />
        <AiOutlineSearch className="nav-search-logo" />
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
