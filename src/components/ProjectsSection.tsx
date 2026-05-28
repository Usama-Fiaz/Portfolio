import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/ProjectsSection.scss';
import '../assets/styles/Project.scss';
import { Chip } from '@mui/material';
import {
  GitHub,
  OpenInNew,
  PlayCircleOutline,
  BusinessCenter,
  Terminal,
  PhotoLibrary,
  ChevronLeft,
  ChevronRight,
  Close,
} from '@mui/icons-material';

import corefense1 from '../assets/images/professional-projects/Corefense/corefense-1.png';
import corefense2 from '../assets/images/professional-projects/Corefense/corefense-2.png';
import corefense3 from '../assets/images/professional-projects/Corefense/corefense-3.png';

import axin1 from '../assets/images/professional-projects/AXIN/AXIN-1.png';
import axin2 from '../assets/images/professional-projects/AXIN/AXIN-2.png';
import axin3 from '../assets/images/professional-projects/AXIN/AXIN-3.png';
import axin4 from '../assets/images/professional-projects/AXIN/AXIN-4.png';
import axin5 from '../assets/images/professional-projects/AXIN/AXIN-5.png';
import axin6 from '../assets/images/professional-projects/AXIN/AXIN-6.png';
import axin7 from '../assets/images/professional-projects/AXIN/AXIN-7.png';
import axin8 from '../assets/images/professional-projects/AXIN/AXIN-8.png';
import axin9 from '../assets/images/professional-projects/AXIN/AXIN-9.png';
import axin10 from '../assets/images/professional-projects/AXIN/AXIN-10.png';
import axin11 from '../assets/images/professional-projects/AXIN/AXIN-11.png';

import concise51 from '../assets/images/professional-projects/Concise5/Concise5-1.png';
import concise52 from '../assets/images/professional-projects/Concise5/Concise5-2.png';
import concise53 from '../assets/images/professional-projects/Concise5/Concise5-3.png';
import concise54 from '../assets/images/professional-projects/Concise5/Concise5-4.png';

import multisyn1 from '../assets/images/professional-projects/MultiSyn/Multisyn-1.png';
import multisyn2 from '../assets/images/professional-projects/MultiSyn/Multisyn-2.png';
import multisyn3 from '../assets/images/professional-projects/MultiSyn/Multisyn-3.png';

import mock03 from '../assets/images/projects/fitworld.png';
import mock04 from '../assets/images/projects/Unsplash.png';
import mock05 from '../assets/images/projects/sportsclub.png';
import mock06 from '../assets/images/projects/BrilliantPro.png';
import mock07 from '../assets/images/projects/tradebot.jpeg';
import mock08 from '../assets/images/projects/Shipping-Logistic.png';
import mock09 from '../assets/images/projects/mvs.png';
import mock10 from '../assets/images/projects/SmartFarmAI.png';

type ProjectTab = 'professional' | 'personal';

type ProfessionalProject = {
  id: string;
  title: string;
  image: string;
  gallery: string[];
  project_link: string;
  video_link: string;
  description: string;
  tech: string[];
};

const professionalProjectsData: ProfessionalProject[] = [
  {
    id: 'corefense-security-posture-platform',
    title: 'Corefense Security Posture Platform',
    image: corefense1,
    gallery: [corefense1, corefense2, corefense3],
    project_link: 'https://demo.corefense.io/dashboard',
    video_link: '',
    description:
      'Built a firmware security dashboard in React and TypeScript where engineers compare two builds side-by-side across binary, filesystem, and kernel hardening views. Implemented a client-side scoring pipeline using Recharts and custom TypeScript metrics to produce a normalized composite posture score per build.',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Recharts', 'Docker', 'Vite'],
  },
  {
    id: 'axin-industrial-iot-analytics-platform',
    title: 'AXIN — Industrial IoT Analytics Platform',
    image: axin1,
    gallery: [axin1, axin2, axin3, axin4, axin5, axin6, axin7, axin8, axin9, axin10, axin11],
    project_link: 'https://axin.plcgroup.io/login',
    video_link: 'https://drive.google.com/file/d/1K4krZbFh_bti_zsQGM6xa-3vl7BMyksX/view?usp=drive_link',
    description:
      'Built multilingual dashboards in Next.js with Node.js GraphQL APIs for real-time asset monitoring across telecom and utility infrastructure. Optimized PostgreSQL query performance and introduced Cube.js caching, reducing dashboard load times by 45% for enterprise clients.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'GraphQL', 'TypeScript', 'Cube.js'],
  },
  {
    id: 'concise5-learning-platform',
    title: 'Concise5 — Learning Platform',
    image: concise51,
    gallery: [concise51, concise52, concise53, concise54],
    project_link: 'https://admin.concise5.com/login',
    video_link: 'https://drive.google.com/file/d/1qnEnD6jmNADDin3BOfDXux1qnkT_gtSA/view?usp=sharing',
    description:
      'Developed a full-stack learning platform with a Next.js frontend and Node.js backend deployed on Railway, backed by Supabase and PostgreSQL. Built API-driven content management for 1,000+ tutorials and integrated Google Cloud Translation API for real-time multilingual support.',
    tech: ['Next.js', 'Node.js', 'Supabase', 'PostgreSQL', 'Railway', 'TypeScript'],
  },
  {
    id: 'multisyn-tech-saas-platforms',
    title: 'Multi-Syn Tech SaaS Platforms',
    image: multisyn1,
    gallery: [multisyn1, multisyn2, multisyn3],
    project_link: 'https://multisyn.tech/',
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
  const [selectedProject, setSelectedProject] = useState<ProfessionalProject | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [thumbStartIndex, setThumbStartIndex] = useState<number>(0);
  const [visibleThumbs, setVisibleThumbs] = useState<number>(6);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [thumbSlideDirection, setThumbSlideDirection] = useState<'next' | 'prev'>('next');
  const thumbsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const syncTabFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'personal-projects' || hash === 'projects') {
        setActiveTab('personal');
      } else if (hash === 'professional-projects') {
        setActiveTab('professional');
      } else if (hash.startsWith('project-')) {
        const projectId = hash.replace('project-', '');
        const project = professionalProjectsData.find((item) => item.id === projectId);
        if (project) {
          setActiveTab('professional');
          setSelectedProject(project);
          setSelectedImageIndex(0);
          setThumbStartIndex(0);
          setSlideDirection('next');
          setThumbSlideDirection('next');
        }
      }
    };

    syncTabFromHash();
    window.addEventListener('hashchange', syncTabFromHash);
    return () => window.removeEventListener('hashchange', syncTabFromHash);
  }, []);

  const selectTab = (tab: ProjectTab) => {
    setActiveTab(tab);
    setSelectedProject(null);
    setSelectedImageIndex(0);
    window.history.replaceState(null, '', tab === 'professional' ? '#professional-projects' : '#projects');
  };

  const openGallery = (project: ProfessionalProject) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
    setThumbStartIndex(0);
    setSlideDirection('next');
    setThumbSlideDirection('next');
    window.history.replaceState(null, '', `#project-${project.id}`);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
    setThumbStartIndex(0);
    setSlideDirection('next');
    setThumbSlideDirection('next');
    if (window.location.hash.startsWith('#project-')) {
      window.history.replaceState(null, '', '#professional-projects');
    }
  };

  const showPrev = () => {
    if (!selectedProject) return;
    setSlideDirection('prev');
    setSelectedImageIndex((current) =>
      current === 0 ? selectedProject.gallery.length - 1 : current - 1
    );
  };

  const showNext = () => {
    if (!selectedProject) return;
    setSlideDirection('next');
    setSelectedImageIndex((current) => (current + 1) % selectedProject.gallery.length);
  };

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowLeft') {
        setSlideDirection('prev');
        setSelectedImageIndex((current) =>
          current === 0 ? selectedProject.gallery.length - 1 : current - 1
        );
      }
      if (event.key === 'ArrowRight') {
        setSlideDirection('next');
        setSelectedImageIndex((current) => (current + 1) % selectedProject.gallery.length);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;
    setThumbStartIndex((current) => {
      if (selectedImageIndex < current) return selectedImageIndex;
      if (selectedImageIndex >= current + visibleThumbs) {
        return selectedImageIndex - visibleThumbs + 1;
      }
      return current;
    });
  }, [selectedImageIndex, selectedProject, visibleThumbs]);

  useEffect(() => {
    if (!selectedProject) return;

    const updateVisibleThumbs = () => {
      const containerWidth = thumbsContainerRef.current?.clientWidth ?? 0;
      if (!containerWidth) return;
      const estimatedThumbWidth = 77;
      const computed = Math.max(1, Math.floor(containerWidth / estimatedThumbWidth));
      // Keep page size predictable while still filling available width.
      setVisibleThumbs(Math.min(6, computed, selectedProject.gallery.length));
    };

    updateVisibleThumbs();
    window.addEventListener('resize', updateVisibleThumbs);
    return () => window.removeEventListener('resize', updateVisibleThumbs);
  }, [selectedProject]);

  const shiftThumbsLeft = () => {
    setThumbSlideDirection('prev');
    setThumbStartIndex((current) => Math.max(0, current - visibleThumbs));
  };

  const shiftThumbsRight = () => {
    if (!selectedProject) return;
    const maxStart = Math.max(0, selectedProject.gallery.length - visibleThumbs);
    setThumbSlideDirection('next');
    setThumbStartIndex((current) =>
      Math.min(maxStart, current + visibleThumbs)
    );
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
              <div key={index} className="project project-card-glass" id={`project-${project.id}`}>
                <button
                  type="button"
                  className="gallery-cover-button"
                  onClick={() => openGallery(project)}
                  aria-label={`Open ${project.title} gallery`}
                >
                  <img src={project.image} className="zoom" alt={project.title} width="100%" />
                  <span className="gallery-hint">
                    <PhotoLibrary fontSize="small" /> Open Gallery ({project.gallery.length})
                  </span>
                </button>
                <h2>{project.title}</h2>
                <div className="project-links">
                  {isValidLink(project.project_link) && (
                    <a href={project.project_link} className="project-link" target="_blank" rel="noreferrer">
                      <OpenInNew fontSize="small" /> Public URL
                    </a>
                  )}
                  {isValidLink(project.video_link) && (
                    <a href={project.video_link} className="project-link" target="_blank" rel="noreferrer">
                      <PlayCircleOutline fontSize="small" /> Demo Video
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

      {selectedProject && (
        <div
          className="gallery-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Project gallery"
          onClick={closeGallery}
        >
          <div className="gallery-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="gallery-close" onClick={closeGallery} aria-label="Close gallery">
              <Close />
            </button>

            <div className="gallery-top">
              <h3>{selectedProject.title}</h3>
              <p>
                Demo frame {selectedImageIndex + 1} of {selectedProject.gallery.length}
              </p>
            </div>

            <div className="gallery-main">
              <button type="button" className="gallery-nav prev" onClick={showPrev} aria-label="Previous image">
                <ChevronLeft />
              </button>
              <img
                key={`${selectedProject.id}-${selectedImageIndex}`}
                src={selectedProject.gallery[selectedImageIndex]}
                alt={`${selectedProject.title} screenshot ${selectedImageIndex + 1}`}
                className={`gallery-main-image ${slideDirection === 'next' ? 'slide-in-next' : 'slide-in-prev'}`}
              />
              <span className="main-image-index-badge">
                {selectedImageIndex + 1} / {selectedProject.gallery.length}
              </span>
              <button type="button" className="gallery-nav next" onClick={showNext} aria-label="Next image">
                <ChevronRight />
              </button>
            </div>

            <div className="gallery-thumbs-carousel">
              <button
                type="button"
                className="thumb-nav"
                onClick={shiftThumbsLeft}
                disabled={thumbStartIndex === 0}
                aria-label="Previous thumbnails"
              >
                <ChevronLeft />
              </button>
              <div
                key={`${thumbStartIndex}-${thumbSlideDirection}`}
                className={`gallery-thumbs ${thumbSlideDirection === 'next' ? 'thumb-window-next' : 'thumb-window-prev'}`}
                ref={thumbsContainerRef}
              >
                {selectedProject.gallery
                  .slice(thumbStartIndex, thumbStartIndex + visibleThumbs)
                  .map((image, offset) => {
                    const index = thumbStartIndex + offset;
                    return (
                      <button
                        type="button"
                        key={image}
                        className={`thumb ${index === selectedImageIndex ? 'active' : ''}`}
                        onClick={() => {
                          setSlideDirection(index >= selectedImageIndex ? 'next' : 'prev');
                          setSelectedImageIndex(index);
                        }}
                        aria-label={`Go to screenshot ${index + 1}`}
                      >
                        <img src={image} alt={`${selectedProject.title} thumb ${index + 1}`} />
                        <span className="thumb-index-badge">{index + 1}</span>
                      </button>
                    );
                  })}
              </div>
              <button
                type="button"
                className="thumb-nav"
                onClick={shiftThumbsRight}
                disabled={
                  selectedProject.gallery.length <= visibleThumbs ||
                  thumbStartIndex >= selectedProject.gallery.length - visibleThumbs
                }
                aria-label="Next thumbnails"
              >
                <ChevronRight />
              </button>
            </div>

            <div className="gallery-actions">
              {isValidLink(selectedProject.project_link) && (
                <a href={selectedProject.project_link} target="_blank" rel="noreferrer" className="project-cta-link">
                  <OpenInNew fontSize="small" /> Open Public URL
                </a>
              )}
              {isValidLink(selectedProject.video_link) && (
                <a href={selectedProject.video_link} target="_blank" rel="noreferrer" className="project-cta-link">
                  <PlayCircleOutline fontSize="small" /> Watch Demo Video
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsSection;
