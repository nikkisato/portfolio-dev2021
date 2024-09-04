'use client';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Button from '@material-ui/core/Button';

function Contact() {
  return (
    <div
      className="min-h-screen"
      id="contact"
    >
      <h2 className="flex justify-center w-full text-center text-2xl font-bold text-white py-4">
        Contact
      </h2>
      <div className="flex flex-col gap-4  lg:flex-row justify-center">
        <Button
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
  );
}

export default Contact;
