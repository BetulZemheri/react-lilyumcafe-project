import React from 'react';
import Slider from './Slider';
import { FaPhone, FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Iletisim = () => {
  return (
    <div>
      <Slider/>

      <div className='iconss'>
        <div className='collection2'>
          <h4 className='text-center' style={{fontSize:"30px", fontWeight:"bold"}}>İLETİŞİM</h4>
        </div>
        <div className='icon2'>
          <FaPhone className='phone' style={{color:""}}/>
          <h6 className='phoneicon'>Telefon <br /> 0 (850) 564 1223</h6>
          <MdOutlineEmail className='mail'/>
          <h6 className='mailicon'>Mail <br /> lilyumcafe@info.com</h6>
          <FaInstagram className='instagram'/>
          <h6 className='instagramicon'>Instagram <br /> @lilyumcafe</h6>
        </div>
      </div>

      <div style={{marginTop:"190px"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8294.046846175015!2d32.641080865400816!3d39.8651039847572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33fc2296b2617%3A0x5aeb74c24173590a!2zQWvEsW5jxLEgUGxhemEgQWzEscWfdmVyacWfIHZlIMSwxZ8gTWVya2V6aQ!5e0!3m2!1str!2str!4v1673790917281!5m2!1str!2str" width="1497" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>



    </div>
  )
}

export default Iletisim