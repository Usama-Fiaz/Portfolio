import React from 'react';
import { Tooltip } from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../assets/styles/Footer.scss';

const CustomTooltip = styled(Tooltip)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '14px',
    borderRadius: '6px',
    padding: '8px 12px',
  },
}));

const footerLinks = [
  {
    icon: <EmailIcon />,
    label: 'usamafiaz1104@gmail.com',
    href: 'mailto:usamafiaz1104@gmail.com',
  },
  {
    icon: <GitHubIcon />,
    label: 'github.com/Usama-Fiaz',
    href: 'https://github.com/Usama-Fiaz?tab=repositories',
  },
  {
    icon: <LinkedInIcon />,
    label: 'linkedin.com/in/muhammad-usama-fiaz',
    href: 'https://www.linkedin.com/in/muhammad-usama-fiaz-b1a070366/',
  },
  {
    icon: <LocalPhoneIcon />,
    label: '+49 160 96512513',
    href: 'tel:+4916096512513',
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-social">
        {footerLinks.map((link) => (
          <CustomTooltip key={link.href} title={link.label} arrow>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="site-footer-link"
            >
              {link.icon}
            </a>
          </CustomTooltip>
        ))}
      </div>
      <p>© {year} Muhammad Usama Fiaz</p>
      <p className="site-footer-note">Software Engineer · Full Stack Developer</p>
    </footer>
  );
}

export default Footer;
