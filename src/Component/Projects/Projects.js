'use client';

import Grid from '@material-ui/core/Grid';

import ProjectsCard from '../ProjectsCard.js/ProjectsCard';
const projectArray = [
  // {
  //   projectTitle: 'Linkedin Clone',
  //   imageAlt: 'Linkedin Clone',
  //   imageUrl: linkedinClone,
  //   github: 'https://github.com/nikkisato/linkedin-clone',
  //   liveSite: 'https://linkedin-clone-689de.web.app/',
  //   description:
  //     'Using React,Redux, Material UI, BEM styling, Firebase Auth, and Deployed by Firebase ',
  // },
  {
    projectTitle: 'A11y Document',
    imageAlt: 'Accessibility Document',
    imageUrl: '',
    github: 'https://github.com/nikkisato/linkedin-clone',
    liveSite: 'https://linkedin-clone-689de.web.app/',
    description: 'Using React, Typescript, Sanity CMS,  Deployed by Vercel',
  },
];

function Projects() {
  return (
    <div
      className="relative flex flex-col min-h-screen"
      id="projects"
    >
      <h2 className="text-white p-4 text-center">Projects</h2>
      <div>
        <Grid
          container
          spacing={3}
          className="px-24"
        >
          {projectArray.map((project) => (
            <ProjectsCard
              key={project.projectTitle}
              project={project}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Projects;
