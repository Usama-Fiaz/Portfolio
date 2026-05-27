import React from "react";
import { Tooltip } from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../assets/styles/Main.scss';
import { styled } from '@mui/system'; // or '@mui/material/styles'
import myPic from '../assets/my-pfp.jpeg';

const CustomTooltip = styled(Tooltip)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '14px',
    borderRadius: '6px',
    padding: '8px 12px',
  },
}));

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myPic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <CustomTooltip title="usamafiaz1104@gmail.com" arrow>
              <a href="mailto:usamafiaz1104@gmail.com" target="_blank" rel="noreferrer">
                <EmailIcon />
              </a>
            </CustomTooltip>
            <CustomTooltip title="https://github.com/Usama-Fiaz" arrow>
              <a href="https://github.com/Usama-Fiaz?tab=repositories" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            </CustomTooltip>
            <CustomTooltip title="https://www.linkedin.com/in/muhammad-usama-fiaz-b1a070366/" arrow>
              <a href="https://www.linkedin.com/in/muhammad-usama-fiaz-b1a070366/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            </CustomTooltip>
            <CustomTooltip title="+49-160-96-512513" arrow>
              <a href="tel:+4916096512513" target="_blank" rel="noreferrer" style={{ alignItems: 'center' }}>
                <LocalPhoneIcon />
              </a>
            </CustomTooltip>

          </div>
          <h1>Usama Fiaz</h1>
          <p> Software Engineer | Full Stack Developer</p>
          <p style={{ fontSize: "16px" }}>I'm a Full-Stack Software Engineer with 2.2+ years of experience building scalable web applications with React, Next.js, TypeScript, Node.js, GraphQL, and PostgreSQL. Currently pursuing a Master of Computer Science at Universität Passau, Germany, I focus on performance, clean architecture, and shipping production-ready features—from firmware security dashboards and Industrial IoT analytics to multilingual SaaS platforms.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
