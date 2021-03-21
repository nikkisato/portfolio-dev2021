import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import './ProjectsCard.css';
function ProjectsCard({ project }) {
  return (
    <Grid item spacing={10}>
      <Card className='projects__root'>
        <CardActionArea>
          <CardMedia
            className='projects__media'
            image={project.imageUrl}
            title={project.imageAlt}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {project.projectTitle}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='projects__buttons'>
          <Button
            rel='noopener noreferrer'
            target='_blank'
            size='medium'
            color='primary'
            href={project.github}
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>
          <Button
            size='medium'
            color='primary'
            href={project.liveSite}
            rel='noopener noreferrer'
            target='_blank'
            startIcon={<LanguageIcon />}
          >
            Live Site
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProjectsCard;
