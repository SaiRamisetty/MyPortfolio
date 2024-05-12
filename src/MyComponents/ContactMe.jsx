import React, { useRef, useState, useEffect} from 'react'
import "../Styles/ContactMe.css"
import Resume from "../assets/R.VenkataNagaSai.pdf";
// import { Link } from "react-router-dom";

const ContactMe = () => {
    const formRef = useRef(null);
 const scriptUrl = 'https://script.google.com/macros/s/AKfycbwSvkt6iRvR1NtQDBzOkFGFjqRXSB3tGYuj0aolLSCEhpwiO1bqSChhjSZDz2xAZWCv/exec'; // Replace with your actual script URL
 const [loading, setLoading] = useState(false);
 const [ackMessage, setAckMessage] = useState(''); 
 useEffect(() => {
    if (ackMessage) {
      const timer = setTimeout(() => {
        setAckMessage(''); // Clear the message after a delay
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timer); // Clear the timeout if the component unmounts
    }
 }, [ackMessage]);

 const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setAckMessage(''); // Clear any previous message

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log('Successfully submitted');
        setLoading(false);
        setAckMessage('Message sent successfully!');
        formRef.current.reset(); // Update acknowledgement message
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setAckMessage('Error sending message.'); // Update acknowledgement message
      });
 };
  return (
    <div id='ContactMe'>
        <h1><span>Contact</span> Me</h1>
        <div className="contact">
            <div className="contactleft">
                <h3><span>C</span>ontact</h3>
                <p><i class="fa-regular fa-envelope"></i>  sairamisetti2003@gmail.com</p>
                <p> <i class="fa-solid fa-phone"></i> +91 9014517595</p>
                <div className="social">
                    <a href="https://www.instagram.com/sai_ramisetty_18/" target='blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-x-twitter" target='blank'></i></a>
                    <a href="www.linkedin.com/in/sai-ramisetti-9a7250168" target='blank'><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/SaiRamisetty" target='blank'><i class="fa-brands fa-github"></i></a>
                </div>
                <a href={Resume} download ><button>Resume <i class="fa-solid fa-download"></i></button></a>
            </div>
            <div className="contactright">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder='Your Name' required/>
                    <input type="email" name="email" placeholder='Your Email' required/>
                    <textarea name="message" rows="6" placeholder='Youe message..'></textarea>
                    <button type="submit" disabled={loading}> {loading ? 'Loading...' : 'Send'}</button>
                </form>
                <span id="msg">{ackMessage && <p>{ackMessage}</p>}</span>
            </div>
        </div>
    </div>
  )
}

export default ContactMe