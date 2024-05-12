import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import '../Styles/MyNavbar.css';
// import { Link } from "react-router-dom";
import useTypingEffect from '../assets/typing.js';
import Aos from "aos";

const MyNavbar = () => {
    const texts = useMemo(() => [
        "Software developer",
        "Web designer",
        "Python Programmer",
        "Job seeker",
        "Technology Enthusiast",
        // Add more texts as needed
      ],[]); // Add your desired texts here
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const { typedText } = useTypingEffect(texts[currentTextIndex]);
    useEffect(() => {
        Aos.init({ duration: 2000 }); 
      }, []);
      const navigate = useNavigate();

      const handleNavigation = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          navigate(`#${id}`);
        }
      };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // Change text every 3 seconds (adjust as needed)

        return () => clearInterval(interval);
    }, [texts]);
    return (
        <div id='Home'>
            <div className='container'>
                <div className='navbar'>
                    <div className='Name'>Sai Ramisetti</div>
                    <div className='barcontents'>
                        <ul className='barcomponetslist' >
                            <li onClick={() => handleNavigation("Home")}>Home</li>
                            <li onClick={() => handleNavigation("About")} >About Me</li>
                            <li onClick={() => handleNavigation("projects")} >Projects</li>
                            <li onClick={() => handleNavigation("Internships")} >Interships</li>
                            <li onClick={() => handleNavigation("ContactMe")} >Contact</li>
                            
                        </ul>
                    </div>
                </div>
                <div className='Text'>
                    <p> Hi.. I am <span>Sai Ramisetti</span></p>
                    <span> I am a {typedText}</span>
                </div>
            </div>
        </div>
    );
}

export default MyNavbar;