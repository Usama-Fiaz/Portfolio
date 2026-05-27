import React, { useEffect, useState } from 'react';
import '../assets/styles/ProjectsSection.scss';
import '../assets/styles/Project.scss';
import { Chip } from '@mui/material';
import { GitHub, OpenInNew, PlayCircleOutline, BusinessCenter, Terminal } from '@mui/icons-material';

import corefenseImg from '../assets/images/professional-projects/corefense-dashboard.png';
import axinImg from '../assets/images/professional-projects/axin-iot-platform.png';
import concise5Img from '../assets/images/professional-projects/concise5-learning.png';
import multisynImg from '../assets/images/professional-projects/multisyn-saas.png';

import mock03 from '../assets/images/projects/fitworld.png';
import mock04 from '../assets/images/projects/Unsplash.png';
import mock05 from '../assets/images/projects/sportsclub.png';
import mock06 from '../assets/images/projects/BrilliantPro.png';
import mock07 from '../assets/images/projects/tradebot.jpeg';
import mock08 from '../assets/images/projects/Shipping-Logistic.png';
import mock09 from '../assets/images/projects/mvs.png';
import mock10 from '../assets/images/projects/SmartFarmAI.png';

type ProjectTab = 'professional' | 'personal';

const professionalProjectsData = [
  {
    title: 'Corefense Security Posture Platform',
    image: corefenseImg,
    project_link: 'https://demo.corefense.io/dashboard',
    video_link: '',
    description:
      'Built a firmware security dashboard in React and TypeScript where engineers compare two builds side-by-side across binary, filesystem, and kernel hardening views. Implemented a client-side scoring pipeline using Recharts and custom TypeScript metrics to produce a normalized composite posture score per build.',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Recharts', 'Docker', 'Vite'],
  },
  {
    title: 'AXIN — Industrial IoT Analytics Platform',
    image: axinImg,
    project_link: 'https://axin.plcgroup.io/login',
    video_link: '',
    description:
      'Built multilingual dashboards in Next.js with Node.js GraphQL APIs for real-time asset monitoring across telecom and utility infrastructure. Optimized PostgreSQL query performance and introduced Cube.js caching, reducing dashboard load times by 45% for enterprise clients.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'GraphQL', 'TypeScript', 'Cube.js'],
  },
  {
    title: 'Concise5 — Learning Platform',
    image: concise5Img,
    project_link: '',
    video_link: '',
    description:
      'Developed a full-stack learning platform with a Next.js frontend and Node.js backend deployed on Railway, backed by Supabase and PostgreSQL. Built API-driven content management for 1,000+ tutorials and integrated Google Cloud Translation API for real-time multilingual support.',
    tech: ['Next.js', 'Node.js', 'Supabase', 'PostgreSQL', 'Railway', 'TypeScript'],
  },
  {
    title: 'Multi-Syn Tech SaaS Platforms',
    image: multisynImg,
    project_link: '',
    video_link: '',
    description:
      'Built three full-stack platforms from scratch in React.js and Node.js with MySQL, reaching 5,000+ active users across multiple languages. Standardised UI across all products using Material-UI and Tailwind CSS for consistent cross-device experience.',
    tech: ['React.js', 'Material-UI', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
  },
];

const personalProjectsData = [
  {
    title: 'SmartFarmAI',
    image: mock10,
    github_link: 'https://github.com/Usama-Fiaz/SmartFarmAI',
    live_link: 'https://drive.google.com/file/d/1EmOqmzL7BbkFCComJZS_KOKtnM12fogp/view?usp=drive_link',
    description:
      'A cutting-edge Farming E-Commerce Platform combining AI-powered visual product search and Gemini AI chatbot assistance. Built with React.js and Django, it features real-time inventory management, secure payments, and location services.',
    tech: ['React', 'Python', 'Django', 'TensorFlow', 'Material-UI', 'Gemini AI'],
  },
  {
    title: 'MultiVendor E-Commerce System',
    image: mock09,
    github_link: 'https://github.com/Usama-Fiaz/MultiVendor-ECommerce-System',
    live_link: 'https://drive.google.com/file/d/1BeOqyb3Z--2y1PNq4tlHKPuwKwfs4QiO/view?usp=drive_link',
    description:
      'A multi-vendor e-commerce platform with admin, seller, and customer interfaces. Features include product management, order processing, and secure payment integration.',
    tech: ['SQL', 'Laravel', 'Bootstrap', 'JQuery'],
  },
  {
    title: 'Shipping & Logistics',
    image: mock08,
    github_link: 'https://github.com/Usama-Fiaz/Shipping-Logistic',
    live_link: 'https://amanullahgroup.ae/home',
    description:
      'A logistics management platform offering quote generation, multi-language support, email notifications, and secure database handling.',
    tech: ['React', 'Php', 'Material-UI', 'MySQL'],
  },
  {
    title: 'TradeBot (FYP)',
    image: mock07,
    github_link: 'https://github.com/Usama-Fiaz/FYP-TradeBot',
    live_link: 'https://drive.google.com/file/d/1DXq7jF5JqbEvCWVBkcpkmKn-HJHmL9Os/view?usp=drive_link',
    description:
      'AI-powered bot for automated financial trading using NLP and ML models to analyze tweets, news, and indicators.',
    tech: ['React', 'Redux', 'Node.js', 'Python', 'Bootstrap', 'Flask-RESTful'],
  },
  {
    title: 'Brilliant Pro',
    image: mock06,
    github_link: 'https://github.com/Usama-Fiaz/BrilliantPro-CMS',
    live_link: 'https://drive.google.com/file/d/1iwk1Sbp7uJqn8jpRGnVCGlc8kACsPqbL/view?usp=drive_link',
    description:
      'An educational platform using MERN stack with real-time dashboards and scalable learning management.',
    tech: ['React', 'Node.js', 'JavaScript', 'Express', 'MongoDB', 'Material-UI'],
  },
  {
    title: 'Sports Club',
    image: mock05,
    github_link: 'https://github.com/Usama-Fiaz/Sports-Club',
    live_link: 'https://drive.google.com/file/d/11lHPAuv3JTHwk4GdolXHRJbUxU8PfYXX/view?usp=drive_link',
    description:
      'A sports club management system featuring member/event management and ecommerce features.',
    tech: ['HTML', 'JavaScript', 'MySQL', 'PHP', 'Bootstrap'],
  },
  {
    title: 'UnSplash-Clone',
    image: mock04,
    github_link: 'https://github.com/Usama-Fiaz/UnSplash-Clone',
    live_link: 'https://drive.google.com/file/d/1o8n3XLIjYJKjPrMA3GJyV9BvWm5Bagxt/view?usp=drive_link',
    description: 'A responsive photo gallery app mimicking Unsplash with a modern UI and grid layout.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'FitWorld App',
    image: mock03,
    github_link: 'https://github.com/Usama-Fiaz/FitWorld-App',
    live_link: '',
    description: 'A fitness tracking app with personalized plans and progress monitoring.',
    tech: ['Java', 'Material-UI', 'Firebase'],
  },
];

function isValidLink(link?: string) {
  return Boolean(link && link !== '#');
}

function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<ProjectTab>('professional');

  useEffect(() => {
    const syncTabFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'personal-projects' || hash === 'projects') {
        setActiveTab('personal');
      } else if (hash === 'professional-projects') {
        setActiveTab('professional');
      }
    };

    syncTabFromHash();
    window.addEventListener('hashchange', syncTabFromHash);
    return () => window.removeEventListener('hashchange', syncTabFromHash);
  }, []);

  const selectTab = (tab: ProjectTab) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', tab === 'professional' ? '#professional-projects' : '#projects');
  };

  return (
    <div className="projects-hub projects-container" id="projects">
      <div className="projects-hub-header">
        <h1>Projects</h1>
        <p className="projects-hub-subtitle">Production work and personal builds</p>

        <div className="projects-glass-pills" role="tablist" aria-label="Project categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'professional'}
            className={`glass-pill ${activeTab === 'professional' ? 'active' : ''}`}
            onClick={() => selectTab('professional')}
          >
            <BusinessCenter className="glass-pill-icon" />
            <span>Professional</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'personal'}
            className={`glass-pill ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => selectTab('personal')}
          >
            <Terminal className="glass-pill-icon" />
            <span>Personal</span>
          </button>
        </div>
      </div>

      <div
        id={activeTab === 'professional' ? 'professional-projects' : 'personal-projects'}
        className="projects-panel"
        role="tabpanel"
      >
        {activeTab === 'professional' ? (
          <div className="projects-grid">
            {professionalProjectsData.map((project, index) => (
              <div key={index} className="project project-card-glass">
                <img src={project.image} className="zoom" alt={project.title} width="100%" />
                <h2>{project.title}</h2>
                <div className="project-links">
                  {isValidLink(project.project_link) && (
                    <a href={project.project_link} className="project-link" target="_blank" rel="noreferrer">
                      <OpenInNew fontSize="small" /> View Project
                    </a>
                  )}
                  {isValidLink(project.video_link) && (
                    <a href={project.video_link} className="project-link" target="_blank" rel="noreferrer">
                      <PlayCircleOutline fontSize="small" /> Watch Demo
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
        ) : (
          <div className="projects-grid">
            {personalProjectsData.map((project, index) => (
              <div key={index} className="project project-card-glass">
                <img src={project.image} className="zoom" alt={project.title} width="100%" />
                <h2>{project.title}</h2>
                <div className="project-links">
                  <a href={project.github_link} className="project-link" target="_blank" rel="noreferrer">
                    <GitHub fontSize="small" /> GitHub
                  </a>
                  {isValidLink(project.live_link) && (
                    <a href={project.live_link} className="project-link" target="_blank" rel="noreferrer">
                      <OpenInNew fontSize="small" /> Live
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
        )}
      </div>
    </div>
  );
}

export default ProjectsSection;
