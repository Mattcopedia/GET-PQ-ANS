import React from 'react'
import JAMB from '../components/data/JAMB';
import Footer from '../components/footer/Footer';
import JAMBMediaCards from '../components/JAMBMediaCards/JAMBMediaCards';
import Navbar from '../components/navbar/Navbar';



const JAMBPage = () => {
    return (
        <>
            <Navbar />
            <JAMB />
            <JAMBMediaCards />
            <br></br>
            <br></br>
            <br></br>
            <Footer/>
            

        </>

    )
}

export default JAMBPage; 