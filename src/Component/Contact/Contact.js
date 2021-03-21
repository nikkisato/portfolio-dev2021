import React from 'react';
import './Contact.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import Button from '@material-ui/core/Button';
function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1 className='contact__title'>Contact Nikki via:</h1>
      <div className='contact__socialIcons'>
        <Button
          className='contact__socialButton'
          rel='noopener noreferrer'
          target='_blank'
          size='medium'
          color='primary'
          href='https://github.com/nikkisato'
          startIcon={<GitHubIcon />}
          variant='contained'
        >
          Github: Nikkisato
        </Button>

        <Button
          className='contact__socialButton'
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
          className='contact__socialButton'
          variant='contained'
          rel='noopener noreferrer'
          target='_blank'
          size='medium'
          color='primary'
          href='https://www.linkedin.com/in/nikkisato/'
          startIcon={<LinkedInIcon />}
        >
          Linkedin: Nikki Sato
        </Button>

        <Button
          className='contact__socialButton'
          variant='contained'
          rel='noopener noreferrer'
          target='_blank'
          size='medium'
          color='secondary'
          href='mailto:nikki.satopdx@gmail.com'
          startIcon={<EmailIcon />}
        >
          Email: Nikki.satopdx@gmail.com
        </Button>
        <Button
          className='contact__socialButton'
          variant='contained'
          rel='noopener noreferrer'
          target='_blank'
          size='medium'
          color='secondary'
          href='https://twitter.com/nikkisatodev'
          startIcon={<TwitterIcon />}
        >
          Twitter: Nikkisatodev
        </Button>
      </div>
    </div>
  );
}

export default Contact;
