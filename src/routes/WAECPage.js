import React from 'react'
import Navbar from '../components/navbar/Navbar'
import WAEC from '../components/cloud/WAEC'
import Footer from '../components/footer/Footer'
import MediaCards from '../components/mediaCards/MediaCards'




const WAECPage = () => {  
  return (
      <>
          <Navbar />
        <WAEC />
      <MediaCards />
      <br></br>
      <br></br>
      <br></br>
          <Footer/>
          
    </>
  )
}

export default WAECPage