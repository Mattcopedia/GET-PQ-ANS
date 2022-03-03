import React from 'react'
import './JAMBStyles.css'
import { Link } from 'react-router-dom'


const JAMB = () => {
  return (
      <div className='data'>
          <div className='container'>
              <div className='content'>
                  <h2> <span> JAMB</span> Past Questions</h2>
          <div>
             <p>
              If  you are getting ready to sit for the Unified Tertiary Matriculation Examination (UTME) and will want to excel, quickly download the free JAMB past questions available below.
            </p>
                        <li><button><Link to='/JAMB'>Learn More</Link></button></li>
                  </div>
              </div>

          </div>
    </div>
  )
}

export default JAMB;