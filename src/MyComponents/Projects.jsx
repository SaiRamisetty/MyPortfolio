import React , {useState , useEffect} from 'react'
import project1 from '../assets/Screenshot 2024-03-14 105922.png'
import project2 from '../assets/Screenshot 2024-03-27 103643.png'
import project3 from '../assets/Screenshot 2024-03-27 103756.png'
import project4 from '../assets/Tic Tac Toe.png'
import "../Styles/Projects.css"
import Aos from 'aos'

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  useEffect(() => {
    Aos.init({duration:2000});
  },[]);

  const projects = [
    {
      type :'IOT',
      component : (
        <div className="project" key={0}>
          <div className="project-image">
            <img src={project1} alt="Home Automation Analytics" />
            <div className="demo">
              <p><span>Demo</span></p> 
              <a href="https://sairamisetty.github.io/HomeAutomationAnalytics/" target='blank'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="project-description">
            <h2> IOT Based Home Automation Analytics </h2>
            <p>
            This project implements a web application for remote home automation and sensor data visualization. <br />
            The application utilizes a modern frontend framework <b>React.js</b> to deliver an interactive user experience. <br />
            A robust backend framework <b>Flask</b> handles data processing and business logic. Data is persistently stored using a scalable NoSQL database <b>AWS DynamoDB</b>. <br />
            Finally, an ESP32 microcontroller bridges the gap between the web application and the physical environment, enabling real-time sensor data acquisition and appliance control. <br />
            This integrated system empowers users to monitor and manage their homes remotely via the web application, fostering a more convenient and data-driven living experience. <br />
            </p>
          </div>
        </div>
      ),

    },
    {
      type : 'BMI',
      component : (
        <div className="project" key={1}>
          <div className="project-image">
            <img src={project2} alt="BMI Calculator" />
            <div className="demo">
              <p><span>Demo</span></p> 
              <a href="https://github.com/SaiRamisetty/bmi_calculator" target='blank'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="project-description">
            <h2>BMI Calculator</h2>
            <p>
            This web application leverages the Flask framework to create a user-friendly Body Mass Index (BMI) calculator. <br /> 
            Users can input their weight and height, and the application calculates their BMI along with corresponding health recommendations and improvement strategies. <br />
            Additionally, the application facilitates the storage and retrieval of past BMI records, <br />
            allowing users to track their progress and maintain motivation towards achieving a healthy BMI. <br />
            </p>
          </div>
        </div>

      ),
    },
    {
      type : 'Type',
      component : (
        <div className="project" key={2}>
          <div className="project-image">
            <img src={project3} alt="Typing Speed Test" />
            <div className="demo">
              <p><span>Demo</span></p> 
              <a href="https://github.com/rahulkotla2/Typing_Speed_Test" target='blank'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="project-description">
            <h2>Typing Speed Test</h2>
            <p>
            This project involved the development of a web-based application designed to assess typing speed and accuracy. <br />
            Users can practice typing against provided text passages, with the application calculating their performance metrics. <br />
            The application further provides educational resources, including tips and techniques, to help users improve their typing efficiency. <br />
            </p>
          </div>
        </div>

      ),
    },
    {
      type : 'TicTacToe',
      component : (
        <div className="project" key={3}>
          <div className="project-image">
            <img src={project4} alt="Tic Tac Toe" />
          </div>
          <div className="project-description">
            <h2>Tic Tac Toe</h2>
            <p>
            The Python Tic-Tac-Toe game features a user-friendly interface with turn-based gameplay. <br />
            Players mark their squares with 'X' or 'O' on a 3x3 grid using sequential numbering. <br />
            Clear indications of each player's turn enhance the interactive experience. <br />
            The game includes input validation and detects victory conditions when a player marks three consecutive squares in a line. <br />
            It declares an option with a prompt for a rematch in case of a draw. <br />
            This project showcases skills in Python programming, user interface design, and logical game development. <br />
            </p>
          </div>
        </div>

      ),
    },
    
  ];
  const navigateToNextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % projects.length;
    setCurrentProjectIndex(nextIndex);
   
  };

  const navigateToPrevProject = () => {
    const prevIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    setCurrentProjectIndex(prevIndex);
    
  };
  
  return (
    <div id="projects">
      <h1>My <span>Projects</span></h1>
      <div className="projects" >
      <ul >
        <li className='project-content'>
          {projects[currentProjectIndex].component}
        </li>
        <div className='btn-pos'>
          <li><button className='left-nav' onClick={navigateToPrevProject} > &lt; previous </button></li>
          <li>Project {currentProjectIndex + 1} of {projects.length}</li>
          <li><button className='right-nav'  onClick={navigateToNextProject} > Next &gt;  </button></li>
        </div>
      </ul>
      </div>  
    </div>
  )
}

export default Projects;

