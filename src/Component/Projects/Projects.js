import React from 'react';
import './Projects.css';
import Grid from '@material-ui/core/Grid';
import photoJournal from '../../assets/photoJournal.png';
import airbnbClone from '../../assets/airbnbClone.png';
import spotifyClone from '../../assets/spotifyClone.png';
import youtubeClone from '../../assets/youtubeClone.png';
import amazonClone from '../../assets/amazonClone.png';
import iMessageClone from '../../assets/iMessageClone.png';
import netflixClone from '../../assets/netflixClone.png';
import facebookClone from '../../assets/facebookClone.png';
import portfolio from '../../assets/portfolio.png';
import tinderClone from '../../assets/tinderClone.png';
import covidTracker from '../../assets/covidTracker.png';
import instagramClone from '../../assets/instagramClone.png';

import ProjectsCard from '../ProjectsCard.js/ProjectsCard';
const projectArray = [
  {
    projectTitle: 'Amazon Clone',
    imageAlt: 'Amazon Clone',
    imageUrl: amazonClone,
    github: 'https://github.com/nikkisato/amazon-clone',
    liveSite: 'https://clone-edb04.web.app/',
    description:
      'An Amazon clone that was built with React, Context Api, and Firebase Cloud Functions, Deployed with Firebase ',
  },
  {
    projectTitle: 'Netflix Clone',
    imageAlt: 'Netflix Clone',
    imageUrl: netflixClone,
    github: 'https://github.com/nikkisato/netflix-clone',
    liveSite: 'https://netflix-clone-6ec0c.web.app/',
    description:
      'An Netflix Clone utilizing React, Redux, BEM styling, Material UI, Firebase, and Deployed with Firebase ',
  },
  {
    projectTitle: 'Spotify Clone',
    imageAlt: 'Spotify Clone',
    imageUrl: spotifyClone,
    github: 'https://github.com/nikkisato/spotify-clone',
    liveSite: 'https://spotify-clone-a7a4c.firebaseapp.com/',
    description:
      'An Spotify Clone utilizing React, Context API, BEM styling, Material UI, Firebase, and Deployed with Firebase ',
  },
  {
    projectTitle: 'Airbnb Clone',
    imageAlt: 'Airbnb Clone',
    imageUrl: airbnbClone,
    github: 'https://github.com/nikkisato/airbnb-clone',
    liveSite: 'https://airbnb-clone-project.netlify.app/',
    description:
      'An Airbnb Clone utilizing React, Context API, BEM styling, Material UI, Firebase, and Deployed with Firebase ',
  },
  {
    projectTitle: 'Youtube Clone',
    imageAlt: 'Youtube Clone',
    imageUrl: youtubeClone,
    github: 'https://github.com/nikkisato/youtube-clone',
    liveSite: 'https://clone-be987.web.app/',
    description:
      'An Youtube Clone utilizing React, Context API, BEM styling, Material UI, Firebase, and Deployed with Firebase ',
  },

  {
    projectTitle: 'iMessage Clone',
    imageAlt: 'iMessage Clone',
    imageUrl: iMessageClone,
    github: 'https://github.com/nikkisato/iMessage-clone',
    liveSite: 'https://imessage-clone-b8563.web.app/',
    description:
      'An iMessage Clone utilizing React, Redux, BEM styling, Material UI, Firebase, and Deployed with Firebase ',
  },

  {
    projectTitle: 'Photography Journal',
    imageAlt: 'Photography Journal',
    imageUrl: photoJournal,
    github: 'https://github.com/nikkisato/Photography-Journal',
    liveSite: 'https://photojournal.netlify.app/',
    description: 'Using React, Redux, Firebase and Deployed by  Netlify',
  },
  {
    projectTitle: 'Facebook Clone',
    imageAlt: 'Facebook Clone',
    imageUrl: facebookClone,
    github: 'https://github.com/nikkisato/facebook-clone',
    liveSite: 'https://facebook-clone-4cc0e.web.app/',
    description:
      'A Facebook Clone using React, Context API, firebase auth, firebase real-time database, and deployed on Firebase hosting.',
  },
  {
    projectTitle: 'Tinder Clone',
    imageAlt: 'Tinder Clone',
    imageUrl: tinderClone,
    github: 'https://github.com/nikkisato/tinder-clone',
    liveSite: 'https://tinder-clone-7c3e2.web.app/',
    description: 'Using React and Firebase and Deployed by  Netlify',
  },
  {
    projectTitle: 'Portfolio',
    imageAlt: 'Portfolio',
    imageUrl: portfolio,
    github: 'https://github.com/nikkisato/portfolio-dev2021',
    liveSite: 'nikkisato.com',
    description: 'Using React, Material UI, Deployed by  Netlify',
  },
  {
    projectTitle: 'Covid-19 Tracker',
    imageAlt: 'Covid-19 Tracker',
    imageUrl: covidTracker,
    github: 'https://github.com/nikkisato/Covid-19-Tracker',
    liveSite: 'https://covid-19-tracker-dev.netlify.app/',
    description: 'Using React and Context Api and Deployed by  Netlify',
  },
  {
    projectTitle: 'Instagram Clone',
    imageAlt: 'Instagram Clone',
    imageUrl: instagramClone,
    github: 'https://github.com/nikkisato/instagram-clone',
    liveSite: 'https://instagram-clone-76171.web.app/',
    description:
      'Using React, Material UI, Firebase storage and authentication and Deployed by Firebase ',
  },
];
function Projects() {
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <div className='projects__container'>
        <Grid container spacing={3} className='about__container'>
          {projectArray.map(project => (
            <ProjectsCard project={project} />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Projects;
