import React from "react";
import "../style/navbarcard.css";
import SmoothRender from 'react-smooth-render';
const NavCard = ({ price, image, name, index }) => {
 

  return (
  <SmoothRender timing={500}>
      <div className="navbar-product-pr">
        <img className="navbar-click-image" src={image} alt={`${index}logo`} />
        <p>{name}</p>
        <p className="nav-price">{price}</p>
      </div>
      </SmoothRender>

  );
};

export default NavCard;
