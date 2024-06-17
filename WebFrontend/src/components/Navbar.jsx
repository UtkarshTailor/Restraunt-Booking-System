import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";
import { useNavigate } from "react-router-dom";  

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); 

  return (
    <>
      <nav>
        <div className="logo">Restaurant Booking System</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button 
            className="menuBtn"
            onClick={() => navigate('/login')} 
          >
            Login/Signup
          </button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
