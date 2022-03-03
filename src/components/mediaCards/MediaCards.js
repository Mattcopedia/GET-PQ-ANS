import React from 'react'
import './MediaCardsStyles.css';
import img1 from '../../assets/waec.png';

const MediaCards = () => {
  return (
    <div>
      <br></br>
    <div className="containers">
          <img
            src={img1}
           className="image"
            alt="Profile"

              />
          <a
          className="waec" 
          href="https://mattcofreebooksandupdates.com/2020/11/english-waec-past-questions-and-answers-year-2000-2018/"
          target="_blank"
          rel="noopener noreferrer"
            >
             WAEC Past Questions and Answers <br />
             English<br />
             Download <br />
        </a>

      <br></br>
      <br></br>

  
      </div><div className="containers">
          <img
            src={img1}
           className="image"
          alt="Profile" />
        
         
          

          <a
          className="waec" 
          href="https://mattcofreebooksandupdates.com/2020/11/mathematics-waec-past-questions-and-answers-year-2000-2018/"
          target="_blank"
          rel="noopener noreferrer"
            >
             WAEC Past Questions and Answers <br />
            Mathematics <br />
         Download<br />
        </a>
            
          
  
      <br></br>
      <br></br>

  
      </div>

      <div className="containers">
          <img
            src={img1}
           className="image"
            alt="Profile"

              />
           <a
          className="waec" 
          href="https://mattcofreebooksandupdates.com/2020/10/biology-past-question-and-answers/"
          target="_blank"
          rel="noopener noreferrer"
            >
             WAEC Past Questions and Answers <br />
            Biology <br />
          Download <br />
        </a>

      <br></br>
      <br></br>

  
      </div>

      <div className="containers">
          <img
            src={img1}
           className="image"
            alt="Profile"

              />
           <a
          className="waec" 
          href="https://mattcofreebooksandupdates.com/2020/10/chemistry-waec-past-questions-and-answers/"
          target="_blank"
          rel="noopener noreferrer"
            >
             WAEC Past Questions and Answers <br />
            Chemistry <br />
         Download <br />
        </a>

      <br></br>
      <br></br>

  
      </div>

      <div className="containers">
          <img
            src={img1}
           className="image"
            alt="Profile"

              />
           <a
          className="waec" 
          href="https://mattcofreebooksandupdates.com/2020/10/physics-waec-past-questions-and-answers/"
          target="_blank"
          rel="noopener noreferrer"
            >
             WAEC Past Questions and Answers <br />
            Physics<br />
          Download <br />
        </a>

      <br></br>
      <br></br>

  
      </div>

   
    </div>
    
   

        
     
        

  )
}

export default MediaCards