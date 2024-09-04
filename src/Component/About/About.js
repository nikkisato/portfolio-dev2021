'use client';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import developer from '../../../public/images/developer.jpg';
import photographer from '../../../public/images/photographer.jpg';
import smile from '../../../public/images/smile.jpeg';

function About() {
  return (
    <>
      <div
        className="container relative min-h-screen px-24"
        id="about"
      >
        <Grid
          container
          spacing={3}
          className=""
        >
          <Grid
            item
            spacing={10}
          >
            <Card className="about__root">
              <CardActionArea>
                <CardMedia
                  className="about__media"
                  image={developer}
                  title="Developer"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Developer
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Motivated Developer
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            spacing={10}
          >
            <Card className="about__root">
              <CardActionArea>
                <CardMedia
                  className="about__media"
                  image={smile}
                  title="Always Smiling"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Always Smiling
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Smiling is contagious
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            spacing={10}
          >
            <Card className="about__root">
              <CardActionArea>
                <CardMedia
                  className="about__media"
                  image={photographer}
                  title="Photographer"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Photographer
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Exploring new areas with my camera
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            spacing={10}
          >
            <Card className="about__root">
              <CardActionArea>
                <CardMedia
                  className="about__media"
                  image={photographer}
                  title="Photographer"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Accessibility Advocate
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Passionate about Accessibility
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          className="about__info"
        >
          <Grid
            item
            spacing={10}
          >
            <div className="about__bio">
              <h2>
                Hi! I'm a Front End Web Developer, I enjoy combining my creative ideas with coding.
                When I'm not in front of the computer, I'm either exploring portland through the
                lens of a camera, or playing video games.
              </h2>
            </div>
          </Grid>
          <Grid
            item
            spacing={0}
          >
            <div className="container flex w-3/4 flex-col items-center justify-center align-center">
              <h2>Tech Stack</h2>
              <div className="container flex flex-wrap gap-2 justify-center py-4">
                <Chip
                  label="React"
                  color="primary"
                  className="about__chip"
                />
                <Chip
                  label="HTML/CSS"
                  color="primary"
                  className="about__chip"
                />
                <Chip
                  label="Javascript"
                  color="primary"
                  className="about__chip"
                />
                <Chip
                  label="Sanity CMS"
                  color="primary"
                  className="about__chip"
                />
                <Chip
                  label="Screenreader"
                  color="primary"
                  className="about__chip"
                />
                <Chip
                  label="A11y"
                  color="primary"
                  className="about__chip"
                />
                <Chip
                  label="Typescript"
                  color="primary"
                  className="about__chip"
                />
                <Chip
                  label="Shopify"
                  color="primary"
                  className="about__chip"
                />
              </div>
            </div>

            <div className="container flex w-3/4 flex-col items-center justify-center align-center">
              <h2>Tools</h2>
              <div className="container flex flex-wrap gap-2 justify-center py-4">
                <Chip
                  label="Adobe Creative Cloud"
                  color="secondary"
                  className="about__chip"
                />
                <Chip
                  label="Slack/Discord"
                  color="secondary"
                  className="about__chip"
                />
                <Chip
                  label="VSCode"
                  color="secondary"
                  className="about__chip"
                />
                <Chip
                  label="Adobe Photoshop"
                  color="secondary"
                  className="about__chip"
                />
                <Chip
                  label="Adobe Lightroom"
                  color="secondary"
                  className="about__chip"
                />
                <Chip
                  label="Material UI"
                  color="secondary"
                  className="about__chip"
                />
                <Chip
                  label="Tailwind CSS"
                  color="secondary"
                  className="about__chip"
                />
                <Chip
                  label="Radix UI"
                  color="secondary"
                  className="about__chip"
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
