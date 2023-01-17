import React from 'react';
import '../../App.css';
import { GiSpotedFlower } from 'react-icons/gi';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerlogo">
        <h2>  <GiSpotedFlower style={{fontSize:"50px"}}/> Lilyum Cafe</h2>
        <p style={{fontFamily:"Vollkorn", fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>


      <div className="magazalar" >
        <h4>Mağazalar</h4>
        <p>Lorem <br /> Ipsum <br /> Dolor Sit <br /> Amet Duis </p>
      </div>


      <div className="contact">
        <h3 style={{fontFamily:"Vollkorn"}}>Bizi Takip Et!</h3>
        <FaInstagram style={{fontSize:"25px", marginRight:"5px"}} />
        <FaYoutube style={{fontSize:"25px",  marginRight:"5px"}} />
        <FaTwitter style={{fontSize:"25px"}}/>
        <br />
        <p style={{marginTop:"10px", fontFamily:"Vollkorn"}}> <MdLocationOn style={{fontSize:"25px"}} /> Lorem Ipsum Caddesi No : 3/7 <br /> Müşteri Hizmetleri : 0 (850) 564 1223 </p>
      </div>






      <hr />
      <div className="designby">
        <footer>
          <p>&copy; 2023 Designed by Betul Zemheri</p>
        </footer>
      </div>

    </div>
  );
};

export default Footer;
