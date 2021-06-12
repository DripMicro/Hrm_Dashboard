import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button, Box, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
//
import { varWrapEnter, varFadeInUp, varFadeInRight } from '../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#F2F3F5',
  // marginTop: '154px',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    alignItems: 'center'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: 30,
  paddingBottom: 30,
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroImgStyleRight = styled(motion.img)(({ theme }) => ({
  top: 50,
  right: 0,
  bottom: 0,
  zIndex: 8,
  display: 'none',
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    right: 0,
    width: 'auto',
    height: '300px',
    display: 'block'
  },
  [theme.breakpoints.up('lg')]: {
    right: 0,
    width: 'auto',
    height: '500px',
    display: 'block'
  }
}));

const HeroImgStyleLeft = styled(motion.img)(({ theme }) => ({
  top: 50,
  left: 0,
  bottom: 0,
  zIndex: 8,
  display: 'none',
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    left: 0,
    width: 'auto',
    height: '300px',
    display: 'block'
  },
  [theme.breakpoints.up('lg')]: {
    left: 0,
    width: 'auto',
    height: '500px',
    display: 'block'
  }
}));

const HeroImageLogo = styled(motion.img)(({ theme }) => ({
  zIndex: 8,
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    left: 0,
    width: 'auto',
    height: '60px'
  }
}));

const PoppinsBlack = "'PoppinsBlack', sans-serif";
const ManropeRegular = "'ManropeRegular', sans-serif";
const PoppinsRegular = "'PoppinsRegular', sans-serif";
// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroImgStyleRight
          alt="hero"
          src="/static/home/headerRight.png"
          variants={varFadeInUp}
        />

        <HeroImgStyleLeft
          alt="hero"
          src="/static/home/headerLeft.png"
          variants={varFadeInUp}
        />

        <Container sx={{ backgroundColor: '#FCEEE2' }} maxWidth={false}>
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="h1"
                sx={{
                  color: '#2E2836',
                  textAlign: 'center',
                  fontFamily: PoppinsBlack
                }}
              >
                Hybrid work coordination
                <br />
                made simple.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography
                sx={{
                  py: 5,
                  color: '#2E2836',
                  textAlign: 'center',
                  fontFamily: ManropeRegular
                }}
              >
                Let employees schedule office time as they need.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  size="large"
                  variant="contained"
                  component={RouterLink}
                  to={PATH_DASHBOARD.root}
                  color="warning"
                  sx={{
                    marginTop: '20px',
                    backgroundColor: '#2E2836',
                    color: 'white',
                    fontSize: '24px',
                    paddingTop: '33px',
                    paddingBottom: '35px',
                    fontFamily: PoppinsRegular,
                    '&:hover': {
                      backgroundColor: '#575058'
                    }
                  }}
                >
                  Get started for free
                </Button>
                <Box sx={{ fontFamily: ManropeRegular }}>
                  No credit card required
                </Box>
              </Box>
            </motion.div>
          </ContentStyle>
        </Container>
        <Container sx={{ backgroundColor: '#2E2836' }} maxWidth={false}>
          <ContentStyle>
            <Box sx={{ textAlign: 'center', color: 'white', mt: 3 }}>
              Trusted by <b>top businesses</b> to build
              <b> dynamic workplaces</b>
            </Box>
            <Container maxWidth="lg" sx={{ mt: 7, mb: 3 }}>
              <Grid container spacing={3}>
                <Grid item sx={{ color: 'white' }} xs={4} sm={4} md={2}>
                  <HeroImageLogo alt="hero" src="/static/home/ref2.png" />
                </Grid>
                <Grid item sx={{ color: 'white' }} xs={4} sm={4} md={2}>
                  <HeroImageLogo alt="hero" src="/static/home/ref6.png" />
                </Grid>
                <Grid item sx={{ color: 'white' }} xs={4} sm={4} md={2}>
                  <HeroImageLogo alt="hero" src="/static/home/ref5.png" />
                </Grid>
                <Grid item sx={{ color: 'white' }} xs={4} sm={4} md={2}>
                  <HeroImageLogo alt="hero" src="/static/home/ref1.png" />
                </Grid>
                <Grid item sx={{ color: 'white' }} xs={4} sm={4} md={2}>
                  <HeroImageLogo alt="hero" src="/static/home/ref5.png" />
                </Grid>
                <Grid item sx={{ color: 'white' }} xs={4} sm={4} md={2}>
                  <HeroImageLogo alt="hero" src="/static/home/ref1.png" />
                </Grid>
              </Grid>
            </Container>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}