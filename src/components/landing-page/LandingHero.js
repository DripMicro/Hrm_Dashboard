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
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyleRight = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: 0,
    width: 'auto',
    height: '50vh'
  }
}));

const HeroImgStyleLeft = styled(motion.img)(({ theme }) => ({
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    left: 0,
    width: 'auto',
    height: '50vh'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {/* <HeroOverlayStyle
          alt="overlay"
          src="/static/home/overlay.svg"
          variants={varFadeIn}
        /> */}

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
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
