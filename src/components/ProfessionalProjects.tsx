import corefenseImg from '../assets/images/professional-projects/corefense-dashboard.png';
import axinImg from '../assets/images/professional-projects/axin-iot-platform.png';
import concise5Img from '../assets/images/professional-projects/concise5-learning.png';
import multisynImg from '../assets/images/professional-projects/multisyn-saas.png';
import '../assets/styles/Project.scss';
import { Chip } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const professionalProjectsData = [
  {
    title: 'Corefense Security Posture Platform',
    image: corefenseImg,
    project_link: '#',
    video_link: '#',
    description:
      'Built a firmware security dashboard in React and TypeScript where engineers compare two builds side by side across binary, filesystem, and kernel hardening views. Implemented a client side scoring pipeline using Recharts and custom TypeScript metrics to produce a normalized composite posture score per build.',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Recharts', 'Docker', 'Vite'],
  },
  {
    title: 'AXIN, Industrial IoT Analytics Platform',
    image: axinImg,
    project_link: '#',
    video_link: '#',
    description:
      'Built multilingual dashboards in Next.js with Node.js GraphQL APIs for real time asset monitoring across telecom and utility infrastructure. Optimized PostgreSQL query performance and introduced Cube.js caching, reducing dashboard load times by 45% for enterprise clients.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'GraphQL', 'TypeScript', 'Cube.js'],
  },
  {
    title: 'Concise5, Learning Platform',
    image: concise5Img,
    project_link: '#',
    video_link: '#',
    description:
      'Developed a full stack learning platform with a Next.js frontend and Node.js backend deployed on Railway, backed by Supabase and PostgreSQL. Built API driven content management for 1,000+ tutorials and integrated Google Cloud Translation API for real time multilingual support.',
    tech: ['Next.js', 'Node.js', 'Supabase', 'PostgreSQL', 'Railway', 'TypeScript'],
  },
  {
    title: 'Multi-Syn Tech SaaS Platforms',
    image: multisynImg,
    project_link: '#',
    video_link: '#',
    description:
      'Built three full stack platforms from scratch in React.js and Node.js with MySQL, reaching 5,000+ active users across multiple languages. Standardised UI across all products using Material-UI and Tailwind CSS for consistent cross device experience.',
    tech: ['React.js', 'Material-UI', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
  },
];

function ProfessionalProjects() {
  return (
    <div className="projects-container" id="professional-projects">
      <h1>Professional Projects</h1>
      <div className="projects-grid">
        {professionalProjectsData.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} className="zoom" alt={project.title} width="100%" height="50%" />
            <h2>{project.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '12px' }}>
              {project.project_link && (
                <a
                  href={project.project_link}
                  style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <OpenInNewIcon /> &nbsp; View Project
                </a>
              )}
              {project.video_link && (
                <a
                  href={project.video_link}
                  style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PlayCircleOutlineIcon /> &nbsp; Watch Demo
                </a>
              )}
            </div>
            <p>{project.description}</p>
            <p>
              <b>Tech Used:</b>
            </p>
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

export default ProfessionalProjects;
