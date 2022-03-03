import React from 'react'
import "./WAECStyles.css"
import {Link} from 'react-router-dom'
const WAEC = () => {
  return (
      <div className='cloud'>
          <div className='container'>
              <div className='content'>
                  <h2><span>WAEC </span>  PAST Questions & Answers</h2>
                  <p>We began these pages to greatly help pupils whom can’t manage hard-copy WAEC Biology past concern documents or who would like comfortable access to your previous concern documents on the smart phone or computer systems.</p>
           
              <div> 
                    <li><button><Link to='/WAEC'>Learn More</Link></button></li>
            

                  </div>

          </div>
      </div>
     
    </div>
    
      
    
  )
}

export default WAEC;
