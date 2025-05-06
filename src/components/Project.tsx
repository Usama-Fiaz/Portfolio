import mock03 from '../assets/images/projects/fitworld.png';
import mock04 from '../assets/images/projects/Unsplash.png';
import mock05 from '../assets/images/projects/sportsclub.png';
import mock06 from '../assets/images/projects/BrilliantPro.png';
import mock07 from '../assets/images/projects/tradebot.jpeg';
import mock08 from '../assets/images/projects/Shipping-Logistic.png';
import mock09 from '../assets/images/projects/mvs.png';
import mock10 from '../assets/images/projects/SmartFarmAI.png';
import '../assets/styles/Project.scss';
import { Chip } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projectsData = [
  {
    title: "SmartFarmAI",
    image: mock10,
    github_link: "https://github.com/Usama-Fiaz/SmartFarmAI",
    live_link: "https://drive.google.com/file/d/1EmOqmzL7BbkFCComJZS_KOKtnM12fogp/view?usp=drive_link",
    description: "A cutting-edge Farming E-Commerce Platform combining AI-powered visual product search and Gemini AI chatbot assistance. Built with React.js and Django, it features real-time inventory management, secure payments, and location services, revolutionizing agricultural commerce through modern technology.",
    tech: ["React", "Python", "Django", "TensorFlow", "Material-UI", "Gemini AI"]
  },
  {
    title: "MultiVendor E-Commerce System",
    image: mock09,
    github_link: "https://github.com/Usama-Fiaz/MultiVendor-ECommerce-System",
    live_link: "https://drive.google.com/file/d/1BeOqyb3Z--2y1PNq4tlHKPuwKwfs4QiO/view?usp=drive_link",
    description: "A multi-vendor e-commerce platform with admin, seller, and customer interfaces. Features include product management, order processing, and secure payment integration.",
    tech: ["SQL", "Laravel", "Bootstrap", "JQuery"]
  },
  {
    title: "Shipping & Logistics",
    image: mock08,
    github_link: "https://github.com/Usama-Fiaz/Shipping-Logistic",
    live_link: "https://amanullahgroup.ae/home",
    description: "A logistics management platform offering quote generation, multi-language support, email notifications, and secure database handling.",
    tech: ["React", "Php", "Material-UI", "MySQL"]
  },
  {
    title: "TradeBot (FYP)",
    image: mock07,
    github_link: "https://github.com/Usama-Fiaz/FYP-TradeBot",
    live_link: "https://drive.google.com/file/d/1DXq7jF5JqbEvCWVBkcpkmKn-HJHmL9Os/view?usp=drive_link",
    description: "AI-powered bot for automated financial trading using NLP and ML models to analyze tweets, news, and indicators.",
    tech: ["React", "Redux", "Node.js", "Python", "Bootstrap", "Flask-RESTful"]
  },
  {
    title: "Brilliant Pro",
    image: mock06,
    github_link: "https://github.com/Usama-Fiaz/BrilliantPro-CMS",
    live_link: "https://drive.google.com/file/d/1iwk1Sbp7uJqn8jpRGnVCGlc8kACsPqbL/view?usp=drive_link",
    description: "An educational platform using MERN stack with real-time dashboards and scalable learning management.",
    tech: ["React", "Node.js", "JavaScript", "Express", "MongoDB", "Material-UI"]
  },
  {
    title: "Sports Club",
    image: mock05,
    github_link: "https://github.com/Usama-Fiaz/Sports-Club",
    live_link: "https://drive.google.com/file/d/11lHPAuv3JTHwk4GdolXHRJbUxU8PfYXX/view?usp=drive_link",
    description: "A sports club management system featuring member/event management and ecommerce features.",
    tech: ["HTML", "JavaScript", "MySQL", "PHP", "Bootstrap"]
  },
  {
    title: "UnSplash-Clone",
    image: mock04,
    github_link: "https://github.com/Usama-Fiaz/UnSplash-Clone",
    live_link: "https://drive.google.com/file/d/1o8n3XLIjYJKjPrMA3GJyV9BvWm5Bagxt/view?usp=drive_link",
    description: "A responsive photo gallery app mimicking Unsplash with a modern UI and grid layout.",
    tech: ["HTML", "CSS", "Bootstrap"]
  },
  {
    title: "FitWorld App",
    image: mock03,
    github_link: "https://github.com/Usama-Fiaz/FitWorld-App",
    live_link: "",
    description: "A fitness tracking app with personalized plans and progress monitoring.",
    tech: ["Java", "Material-UI", "Firebase"]
  }
];

function Project() {
    return (
      <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project">
              {/* <a href={project.link} target="_blank" rel="noreferrer"> */}
                <img src={project.image} className="zoom" alt="thumbnail" width="100%" height="50%" />
              {/* </a> */}
              {/* <a href={project.link} target="_blank" rel="noreferrer"> */}
                <h2>{project.title}</h2>
              {/* </a> */}
              <div style={{display:"flex", flexDirection:"row"}}>
                <a href={project.github_link} style={{fontSize:"14px", display:"flex", alignItems:"center"}} target="_blank" rel="noreferrer">
                    <GitHub/> &nbsp; Github
                </a> &nbsp; &nbsp;
                {project.live_link && (
                    <a href={project.live_link} style={{fontSize:"14px", display:"flex", alignItems:"center"}} target="_blank" rel="noreferrer">
                        <OpenInNewIcon/> &nbsp; Live
                    </a>
                )}
              </div>
              <p>{project.description}</p>
              <p><b>Tech Used:</b></p>
              <div className="flex-chips">
                {project.tech.map((tech, i) => (
                  <Chip key={i} className="chip" label={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Project;