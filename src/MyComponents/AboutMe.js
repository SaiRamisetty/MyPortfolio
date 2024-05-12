import React,{ useState ,useEffect } from 'react';
import "../Styles/Aboutme.css";
import image from "../assets/sai_profile.jpg";
import Aos from 'aos';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('Skills');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    useEffect(() =>{
      Aos.init({duration:2000})
    })

  return (
    <div id='About'>
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={image} alt='Sai profile' />
          </div>
          <div className="about-col-2">
            <h1>About <span>Me</span></h1>
            <p className='para'>Passionate and adaptable software enthusiast eager to embark on a journey in the tech industry.
              Proficient in various programming languages with a strong foundation in problem-solving and a keen eye for detail.
              Committed to continuous learning and contributing innovative solutions to drive organizational success.
            </p>
            <div className="tab-titles" data-aos = "fade-right">
                  <p className={activeTab === 'Skills' ? 'tab-links active-link' : 'tab-links'} onClick={() => handleTabClick('Skills')} data-aos = "fade-right">Skills</p>
                  <p className={activeTab === 'Education' ? 'tab-links active-link' : 'tab-links'} onClick={() => handleTabClick('Education')}>Education</p>
                  <p className={activeTab === 'ExtraCurricular' ? 'tab-links active-link' : 'tab-links'} onClick={() => handleTabClick('ExtraCurricular')}>ExtraCurricular Activities</p>
              </div>

              {activeTab === 'Skills' && (
                  <div className="tab-content Skills" >
                      <ul>
                          <li><span>Programming Languages</span><br/>Python, Java, HTML, CSS, JavaScript, MySQL</li>
                          <li><span>Web Frameworks</span><br/>Flask, React.js</li>
                          <li><span>Cloud Services</span><br/>AWS-EC2, AWS-DynamoDB</li>
                      </ul>
                  </div>
              )}

              {activeTab === 'Education' && (
                  <div className="tab-content Education">
                      <ul>
                          <li><span>2020-2024</span><br/>B.TECH in Electronics and Communication Engineering <br/>Prasad V Potluri Siddhartha Institute of Technology <br/>CGPA: <span>8.66</span></li>
                          <li><span>2018-2020</span><br/>Intermediate <br/>Narayana Junior College <br/>CGPA: <span>9.69</span></li>
                          <li><span>2018</span><br/>SSC <br/>Kumar Public School <br/>CGPA: <span>10.0</span></li>
                      </ul>
                  </div>
              )}

              {activeTab === 'ExtraCurricular' && (
                  <div className="tab-content Extracurricular">
                      <ul>
                          <li>Presented a paper on "Artificial Intelligence."</li>
                          <li>Attended a Workshop on PYTHON conducted by APSSDC</li>
                          <li>Presented a paper on "Smart Home Automation."</li>
                          <li>Attended a Workshop on PCB DESIGN conducted by APSSDC.</li>
                          <li>Participated in several Technical events conducted in college.</li>
                          <li>Participated in SITAR2K22, a national level tech fest conducted in college.</li>
                      </ul>
                  </div>
              )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutMe
