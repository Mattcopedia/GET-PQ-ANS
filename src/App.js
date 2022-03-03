import React from 'react'
import JAMb from './components/data/JAMB';
import POSTUTME from './components/hero/POSTUTME';
import Navbar from './components/navbar/Navbar';
import WAEC from './components/cloud/WAEC'
import Footer from './components/footer/Footer'; 
import SATIELTSGRE from './components/SATIELTSGRE/SATIELTSGRE';





function App() {
  return (
    <>
      <Navbar />
      <POSTUTME />
      <JAMb />
      <WAEC />
      <SATIELTSGRE/>
      <Footer />  
    </>
  );
}

export default App;
