import React , {useState , useEffect} from 'react'
import internship1 from '../assets/omniwyse_logo.jpeg'
import internship2 from '../assets/eict.jpeg'
import internship3 from '../assets/south_central_railway_logo.jpeg'
import "../Styles/Internships.css"
import Aos from 'aos'

const Internships = () => {
  const [currentInternshipIndex, setCurrentInternshipIndex] = useState(0);
  useEffect(() => {
    Aos.init({duration:2000});
  },[]);

  const Internships = [
    {
      type :'Software Development Intern',
      component : (
        <div className="internship" key={0}>
          <div className="internship-image">
            <img src={internship1} alt="Software Development Intern" sizes='16/9'/>
          </div>
          <div className="internship-description">
            <h2> Omniwyse Technologies Pvt Ltd, Hyderabad (Offline Internship). </h2>
            <p>
                During the internship, focused on developing a real-time web application during an internship.<br />
                Leveraged HTML, CSS, and React.js to create a dynamic and interactive front-end <br />
                Built a robust backend API using the Flask framework and gained valuable exposure to AWS cloud fundamentals. <br />
                This experience equipped the intern with a comprehensive understanding of full-stack web development.<br />
            </p>
          </div>
        </div>
      ),

    },
    {
      type : 'cloud intern',
      component : (
        <div className="internship" key={1}>
          <div className="internship-image">
            <img src={internship2} alt="E&ICT Academy, IIT Kanpur (Online Internship)." />
          </div>
          <div className="internship-description">
            <h2>E&ICT Academy, IIT Kanpur (Online Internship).</h2>
            <p>
            Developed foundational knowledge of cloud computing principles and gained practical experience with Amazon Elastic Compute Cloud (EC2) on the AWS platform. <br />  
            This experience involved deploying, managing, and optimizing computing resources efficiently,   <br /> 
            leveraging EC2's scalability, flexibility, and reliability to meet diverse computing requirements.  <br />
            Through this journey, skills in provisioning instances, configuring security groups, optimizing performance, and orchestrating infrastructure as code were honed,   <br />
            providing a solid foundation to navigate and innovate within the cloud computing landscape. <br />
            </p>
          </div>
        </div>

      ),
    },
    {
      type : 'SouthCentralRailway',
      component : (
        <div className="internship" key={2}>
          <div className="internship-image">
            <img src={internship3} alt="South Central Railways, Vijayawada (Offline Internship)." />
          </div>
          <div className="internship-description">
            <h2>South Central Railways, Vijayawada (Offline Internship).</h2>
            <p>
            During the internship, the focus was on understanding the Route Relay Interlocking System (RRIS), a critical technology for safe and efficient railway operations. <br />
            This involved delving into the system's architecture, functionalities, and operational intricacies. <br />
            Through practical exposure and theoretical study, insights into the RRIS's role in maintaining railway safety standards and optimizing operational workflows were gained, <br />
            contributing to understanding vital infrastructure within the transportation sector. <br />
            </p>
          </div>
        </div>

      ),
    },
  ];
  const navigateToNextInternship = () => {
    const nextIndex = (currentInternshipIndex + 1) % Internships.length;
    setCurrentInternshipIndex(nextIndex);
   
  };

  const navigateToPrevInternship = () => {
    const prevIndex = (currentInternshipIndex - 1 + Internships.length) % Internships.length;
    setCurrentInternshipIndex(prevIndex);
    
  };
  
  return (
    <div id = "Internships">
      <h1>My <span>Internships</span></h1>
      <div className="Internships" >
      <ul >
        <li className='Internship-content'>
          {Internships[currentInternshipIndex].component}
        </li>
      </ul>
      </div>
      <ul>
      <div className='btn-pos'>
          <li><button className='left-nav' onClick={navigateToPrevInternship} > &lt; previous </button></li>
          <li>Internship {currentInternshipIndex + 1} of {Internships.length}</li>
          <li><button className='right-nav'  onClick={navigateToNextInternship} > Next &gt;  </button></li>
        </div>
      </ul>  
    </div>
  )
}

export default Internships;

