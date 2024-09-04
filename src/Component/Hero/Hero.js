'use client';

import { Typewriter } from 'react-simple-typewriter';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Button from '@material-ui/core/Button';

function Hero() {
  return (
    <div
      className="relative flex min-h-screen flex-col justify-center items-center"
      id="hero"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Hello I'm Nikki Sato</h1>
        <br />
        <div className="text-xl font-bold text-white">
          I am a {'     '}
          <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={70}
            delaySpeed={1500}
            words={['Developer', 'Accessibility Advocate', 'Photographer']}
          />
        </div>
        <br />

        <div className="flex flex-col gap-4  lg:flex-row justify-center">
          <Button
            className="hero__socialButton"
            rel="noopener noreferrer"
            target="_blank"
            size="medium"
            color="primary"
            href="https://github.com/nikkisato"
            startIcon={<GitHubIcon />}
            variant="contained"
          >
            Github
          </Button>

          <Button
            className="hero__socialButton"
            variant="contained"
            rel="noopener noreferrer"
            target="_blank"
            size="medium"
            color="primary"
            href="https://drive.google.com/file/d/1fkG77E_HmWHqex4mtZE-go6oplsCt9_5/view?usp=sharing"
            startIcon={<InsertDriveFileIcon />}
          >
            Resume
          </Button>
          <Button
            className="hero__socialButton"
            variant="contained"
            rel="noopener noreferrer"
            target="_blank"
            size="medium"
            color="primary"
            href="https://www.linkedin.com/in/nikkisato/"
            startIcon={<LinkedInIcon />}
          >
            Linkedin
          </Button>

          <Button
            className="hero__socialButton"
            variant="contained"
            rel="noopener noreferrer"
            target="_blank"
            size="medium"
            color="secondary"
            href="mailto:nikki.satopdx@gmail.com"
            startIcon={<EmailIcon />}
          >
            Email
          </Button>
          <Button
            className="hero__socialButton"
            variant="contained"
            rel="noopener noreferrer"
            target="_blank"
            size="medium"
            color="secondary"
            href="https://twitter.com/nikkisatodev"
            startIcon={<TwitterIcon />}
          >
            Twitter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
