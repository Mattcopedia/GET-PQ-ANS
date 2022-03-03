import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import {BrowserRouter, Routes, Route} from 'react-router-dom'


import WAECPage from './routes/WAECPage'
import ContactPage from './routes/ContactPage'
import JAMB from './routes/JAMBPage';
import POSTUTMEPage from './routes/POSTUTMEPage'
import SATIELTSGREPage from './routes/SATIELTSGREPage';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/JAMB' element={< JAMB/>} />
      <Route path='/WAEC' element={<WAECPage />} />
      <Route path='/SATIELTSGRE' element={<SATIELTSGREPage/>}/>
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/POSTUTME' element={<POSTUTMEPage />} />
    </Routes>
  </BrowserRouter>,
  
  
  document.getElementById('root') 
);
