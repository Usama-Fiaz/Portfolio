import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    color: 'inherit',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.16)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(187, 154, 255, 0.45)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(160, 100, 255, 0.75)',
      borderWidth: '1px',
    },
    '&.Mui-focused': {
      boxShadow: '0 0 0 3px rgba(80, 0, 202, 0.2)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.65)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#c4b5fd',
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
  },
};

const contactLinks = [
  {
    icon: <EmailOutlinedIcon />,
    label: 'Email',
    value: 'usamafiaz1104@gmail.com',
    href: 'mailto:usamafiaz1104@gmail.com',
  },
  {
    icon: <PhoneOutlinedIcon />,
    label: 'Phone',
    value: '+49 160 96512513',
    href: 'tel:+4916096512513',
  },
  {
    icon: <LocationOnOutlinedIcon />,
    label: 'Location',
    value: 'Passau, Germany',
    href: 'https://maps.google.com/?q=Passau,Germany',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'muhammad-usama-fiaz',
    href: 'https://www.linkedin.com/in/muhammad-usama-fiaz-b1a070366/',
  },
];

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const hasNameError = trimmedName === '';
    const hasEmailError = trimmedEmail === '';
    const hasMessageError = trimmedMessage === '';

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (hasNameError || hasEmailError || hasMessageError) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${trimmedName}`);
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`
    );

    window.location.href = `mailto:usamafiaz1104@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <header className="contact-header">
          <h1>Get in Touch</h1>
          <p>Open to working student and full time opportunities across Europe.</p>
        </header>

        <div className="contact-grid">
          <aside className="contact-info-card">
            <h2>Direct Contact</h2>
            <p>Prefer a quick reach out? Use any channel below.</p>
            <ul className="contact-channel-list">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer" className="contact-channel">
                    <span className="contact-channel-icon">{item.icon}</span>
                    <span className="contact-channel-text">
                      <span className="contact-channel-label">{item.label}</span>
                      <span className="contact-channel-value">{item.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <form className="contact-form-card" onSubmit={sendEmail} noValidate>
            <h2>Send a Message</h2>
            <p>Share your project scope, timeline, and stack. I usually reply within 24 hours.</p>

            <div className="form-row">
              <TextField
                required
                fullWidth
                label="Full Name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ' '}
                sx={fieldSx}
              />
              <TextField
                required
                fullWidth
                label="Email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter a valid email' : ' '}
                sx={fieldSx}
              />
            </div>

            <TextField
              required
              fullWidth
              label="Message"
              placeholder="Tell me about your role, product, or collaboration idea..."
              multiline
              minRows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter your message' : ' '}
              sx={fieldSx}
            />

            <div className="contact-form-actions">
              <Button type="submit" className="contact-submit-btn" endIcon={<SendIcon />}>
                Send Message
              </Button>
              {submitted && (
                <p className="contact-submit-note">Opening your email client with a pre-filled message...</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
