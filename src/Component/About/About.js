import React from 'react';
import './About.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
//import developer from '../../assets/developer.jpg';
//import photographer from '../../assets/photographer.jpg';
//import smile from '../../assets/photoJournal.jpeg';

function About() {
  return (
    <>
      <div className='about' id='about'>
        <Grid container spacing={3} className='about__container'>
          <Grid item spacing={10}>
            <Card className='about__root'>
              <CardActionArea>
                <CardMedia
                  className='about__media'
                  image='https://www.nikkisato.com/74be52d07e711a86637853ab5d7b9954.jpg'
                  title='Developer'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Developer
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Motivated Developer
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item spacing={10}>
            <Card className='about__root'>
              <CardActionArea>
                <CardMedia
                  className='about__media'
                  image='https://www.nikkisato.com/7cb7236b3bc554f6904a5ce386f5c1b9.jpg'
                  title='Always Smiling'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Always Smiling
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Smiling is contagious
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item spacing={10}>
            <Card className='about__root'>
              <CardActionArea>
                <CardMedia
                  className='about__media'
                  image='https://www.nikkisato.com/be2dd3681021b425d4ffb0974cd1c206.jpg'
                  title='Photographer'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Photographer
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Exploring new areas with my camera
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} className='about__info'>
          <Grid item spacing={10}>
            <div className='about__bio'>
              <h2>
                Hi! I'm a full stack developer, I enjoy combining my creative
                ideas with coding. When I'm not in front of the computer, I'm
                either exploring portland through the lens of a camera, or
                playing video games.
              </h2>
            </div>
          </Grid>
          <Grid item spacing={0}>
            <div className='about__techStack'>
              <h2>Tech Stack / Tools</h2>
              <div className='about__techStack--chip'>
                <Chip label='React' color='primary' className='about__chip' />
                <Chip label='Redux' color='primary' className='about__chip' />
                <Chip
                  label='Express.js'
                  color='primary'
                  className='about__chip'
                />
                <Chip label='Node.js' color='primary' className='about__chip' />
                <Chip
                  label='HTML/CSS'
                  color='primary'
                  className='about__chip'
                />
                <Chip
                  label='Javascript'
                  color='primary'
                  className='about__chip'
                />
                <Chip
                  label='MongoDB/Mongoose'
                  color='primary'
                  className='about__chip'
                />
                <Chip
                  label='Adobe Creative Cloud'
                  color='secondary'
                  className='about__chip'
                />
                <Chip
                  label='Slack/Discord'
                  color='secondary'
                  className='about__chip'
                />
                <Chip
                  label='Netflix'
                  color='secondary'
                  className='about__chip'
                />
                <Chip
                  label='Firebase'
                  color='secondary'
                  className='about__chip'
                />
                <Chip
                  label='VSCode'
                  color='secondary'
                  className='about__chip'
                />
                <Chip
                  label='Adobe Photoshop'
                  color='secondary'
                  className='about__chip'
                />
                <Chip
                  label='Adobe Lightroom'
                  color='secondary'
                  className='about__chip'
                />
                <Chip
                  label='Material UI'
                  color='secondary'
                  className='about__chip'
                />
                <Chip
                  label='Context API'
                  color='secondary'
                  className='about__chip'
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default About;
