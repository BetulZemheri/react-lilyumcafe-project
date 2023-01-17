import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { GiSpotedFlower } from 'react-icons/gi';


const Navbar = () => {
  return (
    <div>
          <header>
      <div className="container">
        <div id="branding">
          <h3 style={{fontFamily:"'Yuji Boku', serif", fontSize:"35px"}}>
            <GiSpotedFlower style={{fontSize:"40px"}}/>
          Lilyum Cafe
          </h3>
        </div>
        <nav>
          <ul>
            <li style={{marginRight:"20px"}}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "current" : null)}
              >
                Anasayfa
              </NavLink>
            </li>
            <li style={{marginLeft:"40px", marginRight:"20px"}}>
              <NavLink
                to="/menu"
                className={({ isActive }) => (isActive ? "current" : null)}
              >
                Menü
              </NavLink>
            </li>
            <li style={{marginLeft:"40px", marginRight:"20px"}}>
              <NavLink
                to="/franchise"
                className={({ isActive }) => (isActive ? "current" : null)}
              >
                Franchise
              </NavLink>
            </li>
            <li style={{marginLeft:"40px", marginRight:"20px"}}>
              <NavLink
              to="/iletisim"
              className={({ isActive }) => (isActive ? "current" : null)}
              >
                İletişim
              </NavLink>
            </li>
            <li style={{marginLeft:"60px"}}>
              <a className="text-body"> <FaInstagram style={{fontSize:"35px", color:"#B52A70"}} /> </a>
            </li>
            <li style={{marginLeft:"10px"}}>
            <a className="text-body"> <FaYoutube style={{fontSize:"35px", color:"red"}} /> </a>
            </li>
            <li style={{marginLeft:"5px"}}>
            <a className="text-body"> <MdLocationOn style={{fontSize:"35px", color:"blue"}} /> </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
