// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingFooter,
  LandingPlugPlay,
  LandingFunEasy,
  LandingHybridPolicy,
  LandingMyTeamCafe,
  LandingSafeFlexible,
  LandingTryCafe,
  LandingLeaders
} from '../components/landing-page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Human Resource | Home" id="move_top">
      <LandingHero />
      <ContentStyle>
        <LandingSafeFlexible />
        <LandingFunEasy />
        <LandingPlugPlay />
        <LandingHybridPolicy />
        <LandingMyTeamCafe />
        <LandingLeaders />
        <LandingTryCafe />
        <LandingFooter />
      </ContentStyle>
    </RootStyle>
  );
}
