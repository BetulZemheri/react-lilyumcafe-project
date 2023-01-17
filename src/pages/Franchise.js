import React from 'react';
import Slider from './Slider'

const Franchise = () => {
  return (
    <div>
      <Slider/>
      <div className='text-center' style={{marginTop:"80px"}}>
        <h1 className="text-center" style={{fontFamily:"Vollkorn", fontWeight:"bold"}}>ÖN BAŞVURU FORMU</h1>
        <div>
          <label style={{paddingRight:"240px", fontWeight:"bold", fontFamily:"Vollkorn", marginTop:"60px", fontSize:"24px", color:"rgba(0, 48, 5, 0.92)"}}>Adınız-Soyadınız</label> <br />
          <input type="text" style={{width:"420px", height:"45px", marginTop:"12px", border:"none", borderBottom:"3px solid grey", borderLeft:"3px solid grey", borderRadius:"12px"}} required />
        </div>
        <div>
          <label style={{paddingRight:"240px", fontWeight:"bold", fontFamily:"Vollkorn", marginTop:"20px", fontSize:"24px", color:"rgba(0, 48, 5, 0.92)"}}>E-Mail Adresiniz</label> <br />
          <input type="mail" style={{width:"420px", height:"45px", marginTop:"12px", border:"none", borderBottom:"3px solid grey", borderLeft:"3px solid grey", borderRadius:"12px"}} required />
        </div>
        <div>
          <label style={{paddingRight:"220px", fontWeight:"bold", fontFamily:"Vollkorn", marginTop:"20px", fontSize:"24px", color:"rgba(0, 48, 5, 0.92)"}}>Telefon Numaranız</label> <br />
          <input type="phone" style={{width:"420px", height:"45px", marginTop:"12px", border:"none", borderBottom:"3px solid grey", borderLeft:"3px solid grey", borderRadius:"12px"}} required />
        </div>
        <div>
          <label style={{paddingRight:"300px", fontWeight:"bold", fontFamily:"Vollkorn", marginTop:"20px", fontSize:"24px", color:"rgba(0, 48, 5, 0.92)"}}>Ön Yazı</label> <br />
          <textarea cols="45" rows="5" style={{marginTop:"12px", border:"3px solid grey", borderRadius:"12px"}}></textarea>
        </div>
        <div>
          <input type="submit" value="Gönder" id="button" style={{width:"200px", height:"50px", fontSize:"30px", marginTop:"22px", backgroundColor:"rgba(0, 48, 5, 0.92)", color:"white", marginBottom:"50px", fontFamily:"Vollkorn", border:"none", borderRadius:"20px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Franchise