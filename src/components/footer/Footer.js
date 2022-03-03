import React from 'react'
import { SiDatabricks } from 'react-icons/si';
import{BsFillArrowUpCircleFill} from 'react-icons/bs'
import './FooterStyles.css'
import {  FiInstagram, FiFacebook, FiLinkedin,   } from 'react-icons/fi';

import{Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='top'>
          <div className='logo-footer'>
            <SiDatabricks className='icon' />
          <h2>GET PQ & ANS</h2>
          </div>
          <Link activeClass='active' to='top' spy={true} smooth={true} duration={500}>
            <BsFillArrowUpCircleFill className='icon' />
          </Link>
          
          </div>
        <div className='col-container'>

          <div className='col'>
            <h3>Main Menu</h3>
           <p> <a className="link" href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">
                                  Home
                               </a> </p>
            <p><a className="link" href="http://localhost:3000/POSTUTME" target="_blank" rel="noopener noreferrer">
                                  POST UTME
                               </a></p>
            <p><a className="link" href="http://localhost:3000/WAEC" target="_blank" rel="noopener noreferrer">
                                  WAEC
                               </a></p>
            <p><a className="link" href="http://localhost:3000/JAMB" target="_blank" rel="noopener noreferrer">
                                  JAMB
                               </a></p>
          </div>

          




          <div className='col'>
            <h3>Foreign Exams</h3>
            <p>  <a className="link" href="https://mattcofreebooksandupdates.com/2020/11/sat-study-guide-with-past-questions-and-answers/" target="_blank" rel="noopener noreferrer">
                                  SAT
                               </a></p>
            <p> <a className="link" href="https://mattcofreebooksandupdates.com/2020/11/ielts-study-guide-with-past-questions-and-answers/" target="_blank" rel="noopener noreferrer">
                                  IELTS
                               </a></p>
            <p> <a className="link" href="https://mattcofreebooksandupdates.com/2020/11/study-guide-with-past-questions-and-answers/" target="_blank" rel="noopener noreferrer">
                                  GRE
                               </a></p>
            <p> <a className="link" href="https://mattcofreebooksandupdates.com/2020/11/gmat-study-guide-with-past-questions-and-answers/" target="_blank" rel="noopener noreferrer">
                                  GMAT 
                               </a></p>
          </div>

          <div className='col'>
            <h3>Past Questions</h3>
            <p><a className="link" href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">
                                  Home
                               </a></p>
            <p><a className="link" href="http://localhost:3000/WAEC" target="_blank" rel="noopener noreferrer">
                                  WAEC
                               </a></p>
            <p><a className="link" href="http://localhost:3000/JAMB" target="_blank" rel="noopener noreferrer">
                                  JAMB
                               </a></p>
            <p><a className="link" href="http://localhost:3000/POSTUTME" target="_blank" rel="noopener noreferrer">
                                  POST UTME 
                               </a></p>
          </div>

          <div className='col'>
            <h3>Information</h3>
            <p><a className="link" href="https://mattcofreebooksandupdates.com/category/latest-school-news-and-gists/" target="_blank" rel="noopener noreferrer">
                                  School News
                               </a></p>
            <p><a className="link" href="https://mattcofreebooksandupdates.com/category/latest-grants-and-opportunities/" target="_blank" rel="noopener noreferrer">
                                  Scholarships
                               </a></p>
            <p><a className="link" href="https://mattcofreebooksandupdates.com/category/latest-grants-and-opportunities/" target="_blank" rel="noopener noreferrer">
                                  Grants
                               </a></p>
            <p><a className="link" href="http://localhost:3000/contact" target="_blank" rel="noopener noreferrer">
                                  Contact
                               </a></p>
          </div>

          <div>
              
                  <form>
                   <a className="link" href="https://www.instagram.com/mattcofreebookandupdates/" target="_blank" rel="noopener noreferrer">
                                   <FiInstagram className='social-icon' />
                </a>
                
                    <a className="link" href="https://www.facebook.com/Mattco-free-books-and-updates-111241900739636/" target="_blank" rel="noopener noreferrer">
                                   <FiFacebook className='social-icon' />
                </a>
                <a className="link" href="https://www.linkedin.com/in/ofeimun-mathias-763a15200" target="_blank" rel="noopener noreferrer">
                                   <FiLinkedin className='social-icon' />
                </a>
                  </form>

              </div>
            
          </div>
          

        </div>
        
      </div>

 
  )
}

export default Footer;