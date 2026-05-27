import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const corefense: string[] = [
  "Built a multi-page firmware security dashboard in React and TypeScript with Redux, letting engineers compare compiler flag changes, filesystem mount drift, and kernel configs between any two builds across 6 dashboard routes.",
  "Consumed REST scan diffs and transformed them client-side into a four-axis Recharts radar (compiler hardening, privilege exposure, insecure mounts, kernel hardening) with a normalized composite score per build.",
  "Wrote a TypeScript fallback scoring layer that computed per-binary hardening ratios from compiler flags and aggregated privilege exposure counts when backend summaries were missing.",
];

const plcgroup: string[] = [
  "Built full-stack features on AxIn, an Industrial IoT platform serving telecom and utilities clients, using Next.js frontends and Node.js GraphQL APIs to surface real-time asset monitoring and energy analytics across multi-region deployments.",
  "Optimized PostgreSQL queries with indexing and restructured joins, cutting API response times by over 30% on data-heavy IoT sensor pipelines.",
  "Introduced a Cube.js analytics caching layer on the main operational dashboard, improving load times by 45% for clients monitoring hundreds of distributed assets daily.",
];
const multisyntech: string[] = [
  "Led development of three full-stack platforms in React.js and Node.js with MySQL, serving 5,000+ multilingual users.",
  "Built scalable UI component architecture with Material-UI and Tailwind CSS, ensuring design consistency and faster feature delivery across all platforms.",
  "Implemented JWT-based authentication and third-party API integrations end-to-end, from Node.js backend logic to React frontend wiring.",
];
const speedforce: string[] = [
  "Reduced page load time by 30% by implementing lazy loading and optimized rendering in responsive UIs built with React.js.",
  "Executed performance improvements such as lazy loading, code splitting, and optimized rendering, reducing load times by 30% and improving user experience.",
  "Increased cross-device engagement by 35% with mobile-first, responsive UIs using MUI, Bootstrap, and Tailwind CSS."
];


function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2026 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer (Working Student)</h3>
            <h4 className="vertical-timeline-element-subtitle">Corefense</h4>
            <p style={{ fontSize: "14px", fontStyle: "italic", marginTop: "-0.5rem" }}>
              Berlin, Germany (Remote)
            </p>
            <p style={{ fontSize: "14px", fontStyle: "italic", color: "#1a66cc" }}>
              Stack: React, TypeScript, Redux Toolkit, Vite, Recharts, REST APIs, Docker
            </p>
            {corefense.map((item, index) => (
              <li key={index} style={{ marginBottom: '1rem', fontSize: '14px' }}>
                {item}
              </li>
            ))}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2024 – Apr 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer (Full-time)</h3>
            <h4 className="vertical-timeline-element-subtitle">PLC Group</h4>
            <p style={{ fontSize: "14px", fontStyle: "italic", marginTop: "-0.5rem" }}>
              Ontario, Canada (Remote)
            </p>
            <p style={{ fontSize: "14px", fontStyle: "italic", color: "#1a66cc" }}>
              Stack: Next.js, Node.js, PostgreSQL, GraphQL, TypeScript, Cube.js
            </p>
            <span>
              <a
                href="http://www.plcgroup.com"
                // className="vertical-timeline-element-subtitle"
                style={{color:"darkblue", fontSize: "14px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>http://www.plcgroup.com</i>
              </a>
            </span>
            {plcgroup.map((item, index) => (
        <li key={index} style={{ marginBottom: '1rem', fontSize: '14px' }}>
          {item}
        </li>
      ))}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2023 – Jan 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer (Full-time)</h3>
            <h4 className="vertical-timeline-element-subtitle">Multi-syn Tech Pvt. Ltd</h4>
            <p style={{ fontSize: "14px", fontStyle: "italic", marginTop: "-0.5rem" }}>
              Islamabad, Pakistan
            </p>
            <p style={{ fontSize: "14px", fontStyle: "italic", color: "#1a66cc" }}>
              Stack: React.js, Material-UI (MUI), Node.js, Express.js, MySQL, Tailwind CSS
            </p>
            <span>
              <a
                href="https://multisyn.tech"
                // className="vertical-timeline-element-subtitle"
                style={{color:"darkblue", fontSize: "14px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>https://multisyn.tech</i>
              </a>
            </span>
            {multisyntech.map((item, index) => (
        <li key={index} style={{ marginBottom: '1rem', fontSize: '14px' }}>
          {item}
        </li>
      ))}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2022 – Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">React Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">SpeedForce Digital</h4>
            <span>
              <a
                href="https://speedforce.agency/"
                // className="vertical-timeline-element-subtitle"
                style={{color:"darkblue", fontSize: "14px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>https://speedforce.agency/</i>
              </a>
            </span>
            <p style={{ fontSize: "14px" }}>
            SpeedForce Digital is a tech agency specializing in custom web and mobile app development, ERP solutions, and digital marketing services like SEO and PPC.
            </p>
            {speedforce.map((item, index) => (
        <li key={index} style={{ marginBottom: '1rem', fontSize: '14px' }}>
          {item}
        </li>
      ))}
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;