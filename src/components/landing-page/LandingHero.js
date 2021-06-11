import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography } from '@material-ui/core';
// routes
import { PATH_DASHBOARD, PATH_HOME } from '../../routes/paths';
//
import {
  varFadeIn,
  varWrapEnter,
  varFadeInUp,
  varFadeInRight
} from '../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#F2F3F5',
  marginTop: '90px',
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
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: 0,
    width: 'auto',
    height: '500px'
  }
}));

const HeroImgStyleLeft = styled(motion.img)(({ theme }) => ({
  top: 50,
  left: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    left: 0,
    width: 'auto',
    height: '500px'
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
                sx={{ color: 'primary.main', textAlign: 'center' }}
              >
                Hybrid work coordination
                <br />
                made simple.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography
                sx={{ py: 5, color: 'primary.main', textAlign: 'center' }}
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
                  startIcon={<Icon icon={flashFill} width={20} height={20} />}
                >
                  Get started for free
                </Button>
                <Box
                  sx={{
                    ml: 2
                  }}
                >
                  No credit card required
                </Box>
              </Box>
            </motion.div>
          </ContentStyle>
        </Container>
        <Container sx={{ backgroundColor: '#2E2836' }} maxWidth={false}>
          <ContentStyle>
            <motion.div variants={varFadeInRight} maxWidth="lg">
              <Box sx={{ textAlign: 'center', color: 'white' }}>
                Trusted by <b>top businesses</b> to build
                <b> dynamic workplaces</b>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  mt: 5,
                  mb: 5,
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'center' },
                  '& > :not(:last-of-type)': { mr: 1.5 }
                }}
              >
                <HeroImageLogo
                  alt="hero"
                  src="/static/home/ref2.png"
                  variants={varFadeInUp}
                />
                <HeroImageLogo
                  alt="hero"
                  src="/static/home/ref6.png"
                  variants={varFadeInUp}
                />
                <HeroImageLogo
                  alt="hero"
                  src="/static/home/ref5.png"
                  variants={varFadeInUp}
                />
                <HeroImageLogo
                  alt="hero"
                  src="/static/home/ref1.png"
                  variants={varFadeInUp}
                />
                <HeroImageLogo
                  alt="hero"
                  src="/static/home/ref3.png"
                  variants={varFadeInUp}
                />
                <HeroImageLogo
                  alt="hero"
                  src="/static/home/ref4.png"
                  variants={varFadeInUp}
                />
              </Box>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
