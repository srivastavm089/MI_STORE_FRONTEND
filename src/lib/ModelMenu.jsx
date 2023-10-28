import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "../style/navbar.css";
import { Link, NavLink } from "react-router-dom";
function ModelMenu() {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {/* {values.map((v, idx) => ( */}
      <Button
        variant="secondary model-btn"
        onClick={() => handleShow(values[0])}
      >
        <AiOutlineMenu />
        {/* {typeof v === 'string' && `below ${v.split('-')[0]}`} */}
      </Button>
      {/* ))} */}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title className="mobile-nav-flex">
            <CgProfile className="nav-avator" /> <NavLink>Sign In</NavLink> /{" "}
            <NavLink>Sign Up</NavLink>
          </Modal.Title>
          <button onClick={handleClose}>
            <MdOutlineCancel />
          </button>
        </Modal.Header>
        <Modal.Body style={{display:'flex', flexDirection:'column', gap:'2vh'}}>
          <Link>Mi Phones</Link>
          <Link>Redmi Phones</Link>
          <Link>TV</Link>
          <Link>Fitness & Lifestyle</Link>
          <Link>Home</Link>
          <Link>Audio</Link>
          <Link>Accesories</Link>

       
  <hr style={{marginTop:'5vh', marginBottom:'5vh'}}/>
           <p>Support</p>
           <div style={{display:'flex', flexDirection:'column', gap:'2vh'}}>
           <Link >Discover</Link>
       <Link >Support</Link>
           </div>

        </Modal.Body>
    
      
      </Modal>
    </>
  );
}

export default ModelMenu;
