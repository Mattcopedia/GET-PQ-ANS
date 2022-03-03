import React from 'react'
import Footer from '../components/footer/Footer';
import POSTUTME from '../components/hero/POSTUTME';
import Navbar from '../components/navbar/Navbar';
import POSTUTMEMediaCards from '../components/POSTUTMEMediaCards/POSTUTMEMediaCards';

const POSTUTMEPage = () => {
  return (
      <div>
    
          <Navbar />
          <POSTUTME />
          <POSTUTMEMediaCards />
          <br></br>
          <br></br>
          <br></br>
          <Footer/>
          
    </div>
  )
}

export default POSTUTMEPage; 