import React from "react";
import "./POSTUTMEStyles.css";
import {Link} from 'react-router-dom'
const POSTUTME = () => {
    return (<div className="hero">
    
        <div className="container">
            <div className="content">
                <h1>POST UTME</h1>
                <h1 className="blue">Past Questions </h1>
             
                
                <p>We provide Past Questions and Answers for Post Jamb Candidates with Easy and reliable access. </p>
                <div><li><button><Link to='/POSTUTME'>Learn More</Link></button></li>
             </div>
            </div>
        </div>

    </div>);
};

export default POSTUTME;
