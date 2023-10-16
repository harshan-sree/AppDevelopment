
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  
  const privacyText = `
 
  Indian Railway Catering and Tourism Corporation Ltd. (IRCTC) is a “Mini Ratna (Category-I)” Central Public Sector Enterprise under Ministry of Railways, Government of India. 
  IRCTC was incorporated on 27th September, 1999 as an extended arm of the Indian Railways to upgrade, professionalize and manage the catering and hospitality services at stations, on trains and other locations and to promote domestic and international tourism through development of budget hotels, special tour packages, &nbsp;&nbsp;&nbsp;information & commercial publicity and global reservation systems. The authorized capital of the company is 250 crores and paid up capital is 160 crores. It’s registered and &nbsp;&nbsp;&nbsp;Corporate Office is situated at New Delhi.`;

  const [showPrivacy, setShowPrivacy] = useState(false);

  const togglePrivacy = () => {
    setShowPrivacy(!showPrivacy);
  };
 const handle =()=>{
  window.history.back();
 }

  return (
    <div className='www'>
      <h2>About us</h2>
      <button onClick={togglePrivacy} className="text-dark"> 
        {showPrivacy ? 'Hide ' : 'Show '}
      </button>

      {showPrivacy && (
        <div className="terms-container">
          <p>{privacyText}</p>
        </div>
      )}
       <div className='handle'>
      <button className='bac' onClick={handle}>Back</button>
    </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
   
    </div>
    
  );
}

export default About;

