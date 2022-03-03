import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


import './ContactStyles.css'

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4fhtfel', 'template_8w1paiq', form.current, 'Nc2HLEb29oTkl75Tx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text); 
            });
        
        alert("Email Sent");
        
        
    };

    return (
        <div className='contact'>
            <div className='container'>
                <div className='form-container'>
                    <form ref={form} onSubmit={sendEmail}>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" name='user_name' placeholder='Enter your name' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name='user_email' placeholder='Enter your Email' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' name='user_message' placeholder='Enter your Message' />
                        </div>
                        <input type="submit" name='submit'></input>
                    </form>
 
                </div>

            </div>
         
          
        </div>
    )
     }


    export default Contact;