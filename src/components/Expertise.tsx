// import React from "react";
// import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
// import Chip from '@mui/material/Chip';
// import '../assets/styles/Expertise.scss';

// const labelsFirst = [
//     "TypeScript",
//     "JavaScript",
//     "HTML5",
//     "CSS3",
//     "SASS",
//     "Python",
//     "PHP",
//     "C++",
//     "Java"
// ];

// const labelsSecond = [
//     "Git",
//     "GitHub Actions",
//     "Docker",
//     "AWS",
//     "Azure",
//     "Linux",
//     "Snowflake",
//     "Pandas",
//     "Selenium",
// ];

// const labelsThird = [
//     "OpenAI",
//     "Groq",
//     "LangChain",
//     "Qdrant",
//     "Hugging Face",
//     "LlamaIndex",
//     "Streamlit",
// ];

// function Expertise() {
//     return (
//     <div className="container" id="expertise">
//         <div className="skills-container">
//             <h1>Skills</h1>
//             <div className="skills-grid">
//                 <div className="skill">
//                     <FontAwesomeIcon icon={faReact} size="3x"/>
//                     <h3>Languages</h3>
//                     {/* <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p> */}
//                     <div className="flex-chips">
//                         {/* <span className="chip-title"></span> */}
//                         {labelsFirst.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill">
//                     <FontAwesomeIcon icon={faDocker} size="3x"/>
//                     <h3>Front-End</h3>
//                     {/* <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p> */}
//                     <div className="flex-chips">
//                         {/* <span className="chip-title">Tech stack:</span> */}
//                         {labelsSecond.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill">
//                     <FontAwesomeIcon icon={faPython} size="3x"/>
//                     <h3>GenAI & LLM</h3>
//                     <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsThird.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// }

// export default Expertise;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faPython,
  faPhp,
  faHtml5,
  faCss3Alt,
  faJava,
  faNodeJs,
  faGitAlt,
  faDocker,
  faAws,
  faFigma
} from "@fortawesome/free-brands-svg-icons";

import {
  faDatabase,
  faCode,
  faChartLine,
  faBrain,
  faKey,
  faShieldAlt,
  faRocket,
  faCreditCard,
  faCloud,
  faCogs
} from "@fortawesome/free-solid-svg-icons";

import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const skills = [
  {
    title: "Languages",
    icon: faCode,
    labels: ["JavaScript", "TypeScript", "Python", "PHP", "HTML", "C++", "Java"],
  },
  {
    title: "Front-End",
    icon: faReact,
    labels: ["ReactJS", "Next.js", "Bootstrap", "TailwindCSS", "SCSS", "CSS", "MaterialUI (MUI)"],
  },
  {
    title: "Back-End",
    icon: faNodeJs,
    labels: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    title: "State Management",
    icon: faCogs,
    labels: ["Redux Toolkit", "Context API", "React Query"],
  },
  {
    title: "Databases",
    icon: faDatabase,
    labels: ["MySQL", "MongoDB", "MariaDB", "PostgreSQL", "Firebase"],
  },
  {
    title: "Analytics / BI Tools",
    icon: faChartLine,
    labels: ["Cube.js", "Power BI", "Data Visualization", "Dashboard Development", "KPI Tracking"],
  },
  {
    title: "AI Tools / Integrations",
    icon: faBrain,
    labels: ["Gemini API", "OpenAI", "Chatbot Integration"],
  },
  {
    title: "Developer Tools",
    icon: faGitAlt,
    labels: ["Git", "Postman", "Figma"],
  },
  {
    title: "Payment Integration",
    icon: faCreditCard,
    labels: ["Stripe API"],
  },
  {
    title: "DevOps",
    icon: faDocker,
    labels: ["Docker"],
  },
  {
    title: "Security & Auth",
    icon: faShieldAlt,
    labels: ["JWT", "OAuth", "RBAC"],
  },
  {
    title: "Deployment / Hosting",
    icon: faCloud,
    labels: ["AWS", "cPanel", "Hostinger", "Vercel", "Netlify"],
  },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={skill.icon} size="2x" />
              <h3>{skill.title}</h3>
              <div className="flex-chips">
                {skill.labels.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
