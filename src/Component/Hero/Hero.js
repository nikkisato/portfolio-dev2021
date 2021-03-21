import React from 'react';
import './Hero.css';
import Particles from 'react-particles-js';
import Typewriter from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Button from '@material-ui/core/Button';

function Hero() {
  return (
    <div className='hero' id='hero'>
      <Particles
        className='hero__bg '
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: 'top',
              out_mode: 'out',
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className='hero__title'>
        <h1 className='hero__intro'>Hello I'm Nikki Sato</h1>
        <h1
          style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
        >
          I am a {'     '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            <Typewriter
              loop
              cursor
              cursorStyle='|'
              typeSpeed={80}
              deleteSpeed={70}
              delaySpeed={1500}
              words={['Developer', 'UI Designer', 'Photographer']}
            />
          </span>
        </h1>

        <div className='hero__socialIcons'>
          <Button
            className='hero__socialButton'
            rel='noopener noreferrer'
            target='_blank'
            size='medium'
            color='primary'
            href='https://github.com/nikkisato'
            startIcon={<GitHubIcon />}
            variant='contained'
          >
            Github
          </Button>

          <Button
            className='hero__socialButton'
            variant='contained'
            rel='noopener noreferrer'
            target='_blank'
            size='medium'
            color='primary'
            href='https://drive.google.com/file/d/1fkG77E_HmWHqex4mtZE-go6oplsCt9_5/view?usp=sharing'
            startIcon={<InsertDriveFileIcon />}
          >
            Resume
          </Button>
          <Button
            className='hero__socialButton'
            variant='contained'
            rel='noopener noreferrer'
            target='_blank'
            size='medium'
            color='primary'
            href='https://www.linkedin.com/in/nikkisato/'
            startIcon={<LinkedInIcon />}
          >
            Linkedin
          </Button>

          <Button
            className='hero__socialButton'
            variant='contained'
            rel='noopener noreferrer'
            target='_blank'
            size='medium'
            color='secondary'
            href='mailto:nikki.satopdx@gmail.com'
            startIcon={<EmailIcon />}
          >
            Email
          </Button>
          <Button
            className='hero__socialButton'
            variant='contained'
            rel='noopener noreferrer'
            target='_blank'
            size='medium'
            color='secondary'
            href='https://twitter.com/nikkisatodev'
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
